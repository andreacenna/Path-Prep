// PATH Daily Briefing generator. Runs in GitHub Actions on a schedule (free) and writes
// public/data/news.json. If every source fails, the previous file is kept untouched, so the
// app always shows the last verified briefing instead of inventing content.
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { parseFeed, classify, truncate, mergeItems, hashId } from './news-lib.mjs';

const root = new URL('..', import.meta.url).pathname;
const cfg = JSON.parse(readFileSync(`${root}scripts/news-sources.json`, 'utf8'));
const outPath = `${root}public/data/news.json`;
const previous = existsSync(outPath) ? JSON.parse(readFileSync(outPath, 'utf8')) : { items: [] };
const MAX_PER_SOURCE = 12;

async function fetchText(url) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 20000);
  try {
    const res = await fetch(url, { headers: { 'User-Agent': cfg.userAgent, Accept: 'application/rss+xml, application/atom+xml, application/xml, text/xml' }, signal: ctrl.signal });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.text();
  } finally {
    clearTimeout(timer);
  }
}

const fresh = [];
const report = [];
for (const s of cfg.sources) {
  try {
    const xml = await fetchText(s.url);
    const items = parseFeed(xml).filter((i) => i.published).slice(0, MAX_PER_SOURCE);
    for (const i of items) {
      const { category, concepts } = classify(`${i.title} ${i.description}`, s.category);
      fresh.push({ id: hashId(i.link), title: i.title, link: i.link, source: s.name, sourceHome: s.home, published: i.published, excerpt: truncate(i.description, 260), category, concepts, lang: s.lang });
    }
    report.push({ name: s.name, url: s.home, ok: true, count: items.length });
    console.log(`✓ ${s.name}: ${items.length}`);
  } catch (e) {
    report.push({ name: s.name, url: s.home, ok: false, count: 0 });
    console.warn(`✗ ${s.name}: ${e.message}`);
  }
  await new Promise((r) => setTimeout(r, 1000)); // be polite: 1 request per second
}

if (!fresh.length) {
  console.error('No source succeeded — keeping the previous briefing unchanged.');
  process.exit(0);
}
const items = mergeItems(fresh, previous.items ?? []);
mkdirSync(`${root}public/data`, { recursive: true });
writeFileSync(outPath, JSON.stringify({ generatedAt: new Date().toISOString(), sources: report, items }, null, 1));
console.log(`Wrote ${items.length} items to public/data/news.json`);
