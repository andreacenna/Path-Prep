import 'fake-indexeddb/auto';
import { describe, expect, it } from 'vitest';
import { PathDB } from '../../src/db/db';
import { exportBackup, importBackup, deleteAllData, validateBackup } from '../../src/lib/backup';
import { recordAttempt, completeLesson, computeStats, checkAchievements } from '../../src/lib/actions';
import { parseCvText, personalizedQuestions } from '../../src/lib/cv';
// @ts-expect-error plain JS module
import { parseFeed, classify, mergeItems, stripHtml, truncate } from '../../scripts/news-lib.mjs';

describe('learning actions + backup/restore', () => {
  it('records progress, exports, wipes and restores it exactly', async () => {
    const db = new PathDB('test-' + Math.random());
    await recordAttempt({ questionId: 'q1', topic: 't', academyId: 'accounting', correct: true, difficulty: 2, timeMs: 1000, source: 'quiz' }, db);
    await completeLesson('acc-x', 'accounting', 1, [{ id: 'fc1', topic: 't', front: { en: 'a', it: 'a' }, back: { en: 'b', it: 'b' } }], db);
    const stats = await computeStats(db);
    expect(stats.lessonsCompleted).toBe(1);
    expect(stats.perfectLessons).toBe(1);
    expect(stats.totalXP).toBe(10 + 30);
    expect(await checkAchievements(db)).toEqual(expect.arrayContaining(['first-lesson', 'perfect']));
    expect(await db.cards.count()).toBe(1);

    const backup = JSON.parse(JSON.stringify(await exportBackup(db)));
    expect(validateBackup(backup)).toBe(true);
    await deleteAllData(db);
    expect(await db.attempts.count()).toBe(0);
    await importBackup(backup, db);
    expect(await db.attempts.count()).toBe(1);
    expect((await computeStats(db)).totalXP).toBe(40);
  });
  it('repeat correct answers on the same day earn reduced XP', async () => {
    const db = new PathDB('test-' + Math.random());
    const a = { questionId: 'q1', topic: 't', academyId: 'a', correct: true, difficulty: 3, timeMs: 1, source: 'quiz' as const };
    expect((await recordAttempt(a, db)).xp).toBe(15);
    expect((await recordAttempt(a, db)).xp).toBe(1);
  });
  it('rejects invalid backups', async () => {
    expect(validateBackup({ format: 'other' })).toBe(false);
    await expect(importBackup({ foo: 1 }, new PathDB('t' + Math.random()))).rejects.toThrow();
  });
});

describe('CV parsing (heuristic, never verified automatically)', () => {
  const cv = `Jane Doe
jane@example.com
EDUCATION
Bocconi University
BSc International Economics and Finance Sep 2024 – Present
• Relevant courses: Corporate Finance, Accounting
EXPERIENCE
Acme Advisory
Summer Intern Jun 2025 – Aug 2025
• Built trading comps for a sell-side mandate
• Prepared pitchbook pages
Student Investment Fund
Analyst 2025 – Present
• Covered industrials
SKILLS
Excel, PowerPoint, Python
LANGUAGES
Italian (native), English (C2)`;
  it('extracts sections and entries, all unverified', () => {
    const e = parseCvText(cv);
    expect(e.every((x) => !x.verified)).toBe(true);
    const intern = e.find((x) => x.org === 'Acme Advisory');
    expect(intern?.title).toBe('Summer Intern');
    expect(intern?.period).toMatch(/2025/);
    expect(intern?.bullets).toHaveLength(2);
    expect(e.find((x) => x.org === 'Student Investment Fund')?.section).toBe('investment');
    expect(e.filter((x) => x.section === 'languages')).toHaveLength(1);
    expect(e.some((x) => /jane@/.test(x.title + x.org))).toBe(false); // header ignored
  });
  it('personalised questions use verified entries only', () => {
    const e = parseCvText(cv);
    expect(personalizedQuestions(e)).toHaveLength(0);
    const v = e.map((x) => ({ ...x, verified: x.org === 'Acme Advisory' }));
    const qs = personalizedQuestions(v);
    expect(qs.length).toBeGreaterThan(0);
    expect(qs.every((q) => q.prompt.en.includes('Acme Advisory'))).toBe(true);
  });
});

describe('news pipeline', () => {
  const rss = `<?xml version="1.0"?><rss><channel>
  <item><title><![CDATA[Federal Reserve issues FOMC statement]]></title><link>https://www.federalreserve.gov/a.htm</link><pubDate>Wed, 28 Oct 2026 18:00:00 GMT</pubDate><description>The Committee decided to lower the target range by 25 basis points &amp; more.</description></item>
  <item><title>Acme agrees to buy Widget Co in $5bn deal</title><link>https://example.com/b</link><pubDate>Tue, 27 Oct 2026 10:00:00 GMT</pubDate><description>&lt;p&gt;All-cash &lt;b&gt;acquisition&lt;/b&gt;&lt;/p&gt;</description></item>
  <item><title>No link item</title></item>
  </channel></rss>`;
  const atom = `<feed><entry><title>ECB keeps key ECB interest rates unchanged</title><link href="https://www.ecb.europa.eu/x"/><updated>2026-10-23T12:00:00Z</updated><summary>Monetary policy decisions</summary></entry></feed>`;
  it('parses RSS and Atom, decodes entities, strips HTML', () => {
    const items = parseFeed(rss);
    expect(items).toHaveLength(2);
    expect(items[0].title).toBe('Federal Reserve issues FOMC statement');
    expect(items[0].description).toContain('25 basis points & more');
    expect(items[1].description).toBe('All-cash acquisition');
    expect(parseFeed(atom)[0]).toMatchObject({ link: 'https://www.ecb.europa.eu/x', published: '2026-10-23T12:00:00.000Z' });
    expect(stripHtml('<b>a</b>&nbsp;b')).toBe('a b');
    expect(truncate('word '.repeat(100), 50).length).toBeLessThanOrEqual(51);
  });
  it('classifies by transparent rules', () => {
    expect(classify('Acme agrees to buy Widget Co', 'equity-markets')).toMatchObject({ category: 'ma' });
    expect(classify('FOMC lowers the policy rate by 25 basis points', 'macro').concepts).toContain('monetary-policy');
    expect(classify('Something unrelated', 'regulation').category).toBe('regulation');
    expect(classify('KKR to acquire software firm', 'ma').category).toBe('private-equity');
  });
  it('dedupes and keeps a rolling window', () => {
    const now = Date.parse('2026-10-28T20:00:00Z');
    const mk = (title: string, link: string, published: string) => ({ title, link, published });
    const merged = mergeItems(
      [mk('Big deal announced', 'https://a', '2026-10-28T10:00:00Z')],
      [mk('Big Deal Announced!', 'https://b', '2026-10-27T10:00:00Z'), mk('Old', 'https://c', '2026-10-01T10:00:00Z'), mk('Other', 'https://d', '2026-10-26T10:00:00Z')],
      { now }
    );
    expect(merged.map((m: { link: string }) => m.link)).toEqual(['https://a', 'https://d']);
  });
});
