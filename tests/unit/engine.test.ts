import { describe, expect, it } from 'vitest';
import { parseNumber, withinTolerance, gradeQuestion } from '../../src/lib/grading';
import { topicMastery } from '../../src/lib/mastery';
import { computeStreak, levelFromXP, xpForLevel, XP } from '../../src/lib/gamification';
import { addDays, dayKey, daysBetween } from '../../src/lib/dates';
import { newCardState, reviewCardState, Rating } from '../../src/lib/srs';
import { verdictFromRubric } from '../../src/lib/interview';
import { DRILLS } from '../../src/lib/formulaDrills';
import { rng, hashString } from '../../src/lib/practice';
import { translate, UI_KEYS } from '../../src/i18n/ui';
import type { Question } from '../../src/content/types';

const L = (s: string) => ({ en: s, it: s });

describe('number parsing (EN + IT formats)', () => {
  it.each([
    ['12.5', 12.5], ['12,5', 12.5], ['1,250', 1250], ['1.250,5', 1250.5], ['1,250.5', 1250.5],
    ['(3)', -3], ['-3', -3], ['−3', -3], ['8.5%', 8.5], ['€ 45m', 45], ['2.5x', 2.5], ['1e3', 1000]
  ])('%s → %d', (raw, n) => expect(parseNumber(raw)).toBe(n));
  it('rejects garbage', () => expect(parseNumber('abc')).toBeNaN());
  it('tolerance', () => {
    expect(withinTolerance(100.4, 100)).toBe(true); // rel 0.5%
    expect(withinTolerance(101, 100)).toBe(false);
    expect(withinTolerance(0.005, 0)).toBe(true); // abs 0.01
  });
});

describe('grading', () => {
  const base = { id: 'x', topic: 't', difficulty: 1 as const, objective: L('o'), prompt: L('p'), explanation: L('e') };
  it('mcq / multi / order / numeric / grid', () => {
    expect(gradeQuestion({ ...base, kind: 'mcq', choices: [L('a'), L('b')], correct: 1 }, 1)).toBe(true);
    expect(gradeQuestion({ ...base, kind: 'multi', choices: [L('a'), L('b'), L('c')], correct: [0, 2] }, [2, 0])).toBe(true);
    expect(gradeQuestion({ ...base, kind: 'multi', choices: [L('a'), L('b'), L('c')], correct: [0, 2] }, [0])).toBe(false);
    expect(gradeQuestion({ ...base, kind: 'order', items: [L('a'), L('b'), L('c')] }, [0, 1, 2])).toBe(true);
    expect(gradeQuestion({ ...base, kind: 'order', items: [L('a'), L('b'), L('c')] }, [1, 0, 2])).toBe(false);
    expect(gradeQuestion({ ...base, kind: 'numeric', answer: 7.5, tolerance: { abs: 0.05 } }, '7,5')).toBe(true);
    const grid: Question = { ...base, kind: 'grid', columns: [L('x'), L('y')], rows: [{ label: L('r'), cells: [{ answer: 10 }] }, { label: L('s'), cells: [5] }] };
    expect(gradeQuestion(grid, { '0:0': '10' })).toBe(true);
    expect(gradeQuestion(grid, { '0:0': '11' })).toBe(false);
  });
});

describe('mastery', () => {
  const day = (i: number) => `2026-10-${String(i).padStart(2, '0')}`;
  const att = (correct: boolean, i: number, d = 1) => ({ correct, ts: Date.UTC(2026, 9, i), day: day(i), difficulty: d });
  const now = Date.UTC(2026, 9, 28);
  it('levels progress with demonstrated accuracy', () => {
    expect(topicMastery([], now).level).toBe('not-started');
    expect(topicMastery([att(true, 27)], now).level).toBe('learning');
    expect(topicMastery([att(true, 25), att(false, 26), att(false, 27)], now).level).toBe('learning');
    expect(topicMastery([1, 2, 3, 4, 5].map((i) => att(true, 20 + i)), now).level).toBe('proficient');
    expect(topicMastery(Array.from({ length: 10 }, (_, i) => att(true, 15 + i)), now).level).toBe('mastered');
  });
  it('mastered decays to needs-review after inactivity', () => {
    const old = Array.from({ length: 10 }, (_, i) => att(true, 1 + i));
    expect(topicMastery(old, Date.UTC(2026, 11, 28)).level).toBe('needs-review');
  });
  it('requires ≥2 distinct days for mastered', () => {
    const sameDay = Array.from({ length: 12 }, (_, i) => ({ correct: true, ts: Date.UTC(2026, 9, 27, 10, i), day: day(27), difficulty: 1 }));
    expect(topicMastery(sameDay, now).level).toBe('proficient');
  });
});

describe('gamification', () => {
  it('levels', () => {
    expect(levelFromXP(0)).toBe(1);
    expect(levelFromXP(49)).toBe(1);
    expect(levelFromXP(50)).toBe(2);
    expect(levelFromXP(200)).toBe(3);
    expect(xpForLevel(5)).toBe(800);
  });
  it('streak counts consecutive days, alive until midnight', () => {
    const today = '2026-10-28';
    expect(computeStreak(['2026-10-26', '2026-10-27', '2026-10-28'], today)).toMatchObject({ current: 3, activeToday: true });
    expect(computeStreak(['2026-10-26', '2026-10-27'], today)).toMatchObject({ current: 2, activeToday: false });
    expect(computeStreak(['2026-10-25'], today).current).toBe(0);
    expect(computeStreak(['2026-10-01', '2026-10-02', '2026-10-03', '2026-10-10'], today).longest).toBe(3);
  });
  it('xp only for correct answers; repeated same-day answers earn little', () => {
    expect(XP.question(2, false, true)).toBe(0);
    expect(XP.question(2, true, true)).toBe(10);
    expect(XP.question(2, true, false)).toBe(1);
  });
  it('dates', () => {
    expect(addDays('2026-12-31', 1)).toBe('2027-01-01');
    expect(daysBetween('2026-10-01', '2026-10-28')).toBe(27);
    expect(dayKey(new Date(2026, 0, 5))).toBe('2026-01-05');
  });
});

describe('FSRS scheduling', () => {
  it('Good pushes due date further than Again', () => {
    const now = new Date('2026-10-28T10:00:00Z');
    const c = newCardState({ cardId: 'c', topic: 't', academyId: 'a', lessonId: 'l' }, now);
    const good = reviewCardState(c, Rating.Good, now);
    const again = reviewCardState(c, Rating.Again, now);
    expect(good.due).toBeGreaterThan(again.due);
    expect(good.reps).toBe(1);
    // A second successful review after the interval schedules days ahead.
    const later = new Date(good.due + 1000);
    const g2 = reviewCardState(good, Rating.Good, later);
    expect(g2.due - later.getTime()).toBeGreaterThan(12 * 3600 * 1000);
  });
});

describe('interview verdicts', () => {
  const q = { rubric: [{ text: L('a'), essential: true }, { text: L('b'), essential: true }, { text: L('c'), essential: false }, { text: L('d'), essential: false }] };
  it('correct needs all essentials + most others', () => {
    expect(verdictFromRubric(q, [0, 1, 2, 3])).toBe('correct');
    expect(verdictFromRubric(q, [0, 1, 2])).toBe('partial'); // only 50% of others
    expect(verdictFromRubric(q, [0])).toBe('partial');
    expect(verdictFromRubric(q, [2])).toBe('incorrect');
    expect(verdictFromRubric(q, [0, 1, 2, 3], false)).toBe('partial'); // wrong number
  });
});

describe('formula drills', () => {
  it('every drill produces finite, self-consistent problems', () => {
    const r = rng(42);
    for (const d of DRILLS) for (let k = 0; k < 50; k++) {
      const p = d.generate(r);
      expect(Number.isFinite(p.answer)).toBe(true);
      expect(p.prompt.en.length).toBeGreaterThan(10);
      expect(p.prompt.it.length).toBeGreaterThan(10);
    }
  });
  it('seeded rng is deterministic', () => {
    const a = rng(hashString('daily:2026-10-28'));
    const b = rng(hashString('daily:2026-10-28'));
    expect([a(), a(), a()]).toEqual([b(), b(), b()]);
  });
});

describe('i18n', () => {
  it('every UI key has English and Italian text', () => {
    for (const k of UI_KEYS) {
      expect(translate('en', k).length, k).toBeGreaterThan(0);
      expect(translate('it', k).length, k).toBeGreaterThan(0);
    }
    expect(translate('it', 'home.greetingName', { name: 'Ada' })).toBe('Bentornato, Ada');
  });
});
