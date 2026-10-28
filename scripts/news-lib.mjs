// Pure helpers for the PATH Daily Briefing pipeline (no dependencies, unit-tested).
// Headlines/excerpts are the sources' own text; classification uses transparent keyword rules.

const ENTITIES = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ', '#39': "'", rsquo: '’', lsquo: '‘', rdquo: '”', ldquo: '“', ndash: '–', mdash: '—', hellip: '…' };

export function decode(s = '') {
  return s
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/&(#x?[0-9a-f]+|\w+);/gi, (m, e) => {
      if (e[0] === '#') {
        const code = e[1].toLowerCase() === 'x' ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10);
        return Number.isFinite(code) ? String.fromCodePoint(code) : m;
      }
      return ENTITIES[e.toLowerCase()] ?? m;
    });
}

export function stripHtml(s = '') {
  return decode(decode(s).replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
}

function tag(block, name) {
  const m = block.match(new RegExp(`<${name}(?:\\s[^>]*)?>([\\s\\S]*?)</${name}>`, 'i'));
  return m ? m[1] : '';
}

/** Parse RSS 2.0 / RDF / Atom into {title, link, published, description}. */
export function parseFeed(xml) {
  const items = [];
  const blocks = xml.match(/<(item|entry)[\s>][\s\S]*?<\/(item|entry)>/gi) ?? [];
  for (const b of blocks) {
    const title = stripHtml(tag(b, 'title'));
    let link = stripHtml(tag(b, 'link'));
    if (!link) link = (b.match(/<link[^>]*href="([^"]+)"/i) ?? [])[1] ?? '';
    if (!link) link = stripHtml(tag(b, 'guid'));
    const date = stripHtml(tag(b, 'pubDate') || tag(b, 'published') || tag(b, 'updated') || tag(b, 'dc:date'));
    const description = stripHtml(tag(b, 'description') || tag(b, 'summary') || tag(b, 'content'));
    const published = date ? new Date(date) : null;
    if (title && /^https?:\/\//.test(link)) items.push({ title, link: decode(link), published: published && !isNaN(+published) ? published.toISOString() : null, description });
  }
  return items;
}

export function truncate(s, n = 280) {
  if (s.length <= n) return s;
  const cut = s.slice(0, n);
  return cut.slice(0, Math.max(cut.lastIndexOf(' '), n - 30)).trim() + '…';
}

const RULES = [
  { re: /\b(private equity|buyout|LBO|KKR|Blackstone|Apollo|Carlyle|EQT|CVC|Bain Capital|TPG|Permira|sponsor-backed)\b/i, category: 'private-equity', concepts: ['lbo', 'leverage'] },
  { re: /\b(acquire[sd]?|acquisition|merger|merge|takeover|to buy|agrees to buy|deal to|bid for|tender offer|divest(iture)?|spin-?off|carve-?out)\b/i, category: 'ma', concepts: ['ev-equity', 'multiples', 'synergies', 'ma-financing'] },
  { re: /\b(hostile|tender offer|unsolicited|takeover bid|OPA)\b/i, concepts: ['takeover'] },
  { re: /\b(antitrust|competition (authority|regulator|commission)|merger control|FTC|CMA|DOJ|block(s|ed)? the deal)\b/i, concepts: ['antitrust'] },
  { re: /\b(accretive|dilutive|accretion|dilution)\b/i, concepts: ['accretion-dilution'] },
  { re: /\b(IPO|initial public offering|listing|market debut|follow-on offering|rights issue|share sale)\b/i, category: 'capital-markets', concepts: ['ipo'] },
  { re: /\b(bond|notes due|debt offering|issuance|credit rating|downgrade[sd]?|upgrade[sd]?|high-yield|investment-grade|spread)\b/i, category: 'capital-markets', concepts: ['bonds'] },
  { re: /\b(monetary policy|policy rate|interest rates?|rate (cut|hike|decision)|FOMC|Governing Council|basis points|key ECB interest rates|Bank Rate)\b/i, category: 'central-banks', concepts: ['monetary-policy', 'wacc'] },
  { re: /\b(inflation|CPI|consumer price|HICP|PCE price)\b/i, category: 'inflation', concepts: ['inflation', 'monetary-policy'] },
  { re: /\b(earnings|quarterly results|first-quarter|second-quarter|third-quarter|fourth-quarter|profit|revenue|guidance|EPS)\b/i, category: 'earnings', concepts: ['financial-statements', 'multiples'] },
  { re: /\b(charge[sd]|settle[sd]?|fraud|enforcement|insider trading|penalt(y|ies)|disclosure)\b/i, category: 'regulation', concepts: ['disclosure'] },
  { re: /\b(leverage|debt load|refinanc(e|ing)|capital structure|buyback|dividend)\b/i, concepts: ['capital-structure', 'leverage'] },
  { re: /\b(currency|dollar|euro|yen|sterling|FX|exchange rate)\b/i, concepts: ['fx'] },
  { re: /\b(GDP|unemployment|payrolls|jobs report|PMI|recession|employment situation)\b/i, category: 'macro', concepts: [] },
  { re: /\b(stocks?|shares|equities|S&P 500|Nasdaq|Dow|FTSE|DAX|FTSE MIB|Stoxx)\b/i, category: 'equity-markets', concepts: ['multiples'] }
];

/** Category = first matching rule with a category (rules are in priority order), else the source default. */
export function classify(text, fallbackCategory) {
  let category = null;
  const concepts = new Set();
  for (const r of RULES) {
    if (r.re.test(text)) {
      if (!category && r.category) category = r.category;
      r.concepts.forEach((c) => concepts.add(c));
    }
  }
  return { category: category ?? fallbackCategory, concepts: [...concepts].slice(0, 4) };
}

export function normTitle(t) {
  return t.toLowerCase().replace(/[^a-z0-9àèéìòù ]/g, '').replace(/\s+/g, ' ').trim();
}

export function hashId(s) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return (h >>> 0).toString(36);
}

/** Merge new + previous items: dedupe by link and normalised title, keep the last `days`, newest first. */
export function mergeItems(fresh, previous, { now = Date.now(), days = 7, max = 60 } = {}) {
  const seenLinks = new Set();
  const seenTitles = new Set();
  const out = [];
  for (const it of [...fresh, ...previous].sort((a, b) => b.published.localeCompare(a.published))) {
    const nt = normTitle(it.title);
    if (seenLinks.has(it.link) || seenTitles.has(nt)) continue;
    if (now - new Date(it.published).getTime() > days * 86400000) continue;
    seenLinks.add(it.link);
    seenTitles.add(nt);
    out.push(it);
  }
  return out.slice(0, max);
}
