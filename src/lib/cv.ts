import { db, type CvEntry, type CvProfile, type CvSection } from '../db/db';
import type { L } from '../content/types';

/**
 * CV import — 100% on-device. PDF text is extracted with pdf.js (Apache-2.0), DOCX with
 * mammoth (BSD-2). Extraction is heuristic: every entry starts UNVERIFIED and is only used for
 * personalisation once the learner confirms it. Nothing is ever invented or embellished.
 */

export async function extractText(file: File): Promise<string> {
  const buf = await file.arrayBuffer();
  const name = file.name.toLowerCase();
  if (name.endsWith('.pdf') || file.type === 'application/pdf') return extractPdf(buf);
  if (name.endsWith('.docx') || file.type.includes('wordprocessingml')) return extractDocx(buf);
  if (name.endsWith('.txt')) return new TextDecoder().decode(buf);
  throw new Error('unsupported');
}

async function extractPdf(buf: ArrayBuffer): Promise<string> {
  const pdfjs = await import('pdfjs-dist');
  const workerUrl = (await import('pdfjs-dist/build/pdf.worker.min.mjs?url')).default;
  pdfjs.GlobalWorkerOptions.workerSrc = workerUrl;
  const doc = await pdfjs.getDocument({ data: new Uint8Array(buf) }).promise;
  const lines: string[] = [];
  for (let p = 1; p <= doc.numPages; p++) {
    const page = await doc.getPage(p);
    const tc = await page.getTextContent();
    // Group text items into lines by their y coordinate.
    const rows = new Map<number, { x: number; s: string }[]>();
    for (const it of tc.items as { str: string; transform: number[] }[]) {
      if (!('str' in it) || !it.str.trim()) continue;
      const y = Math.round(it.transform[5] / 2) * 2;
      if (!rows.has(y)) rows.set(y, []);
      rows.get(y)!.push({ x: it.transform[4], s: it.str });
    }
    [...rows.entries()]
      .sort((a, b) => b[0] - a[0])
      .forEach(([, items]) => lines.push(items.sort((a, b) => a.x - b.x).map((i) => i.s).join(' ').replace(/\s+/g, ' ').trim()));
  }
  return lines.join('\n');
}

async function extractDocx(buf: ArrayBuffer): Promise<string> {
  const mammoth = await import('mammoth');
  const res = await mammoth.extractRawText({ arrayBuffer: buf });
  return res.value;
}

const HEADINGS: [CvSection, RegExp][] = [
  ['education', /^(education|academic background|formazione|istruzione|percorso di studi)$/i],
  ['experience', /^(work experience|professional experience|experience|employment|esperienze? (lavorative|professionali)|esperienza)$/i],
  ['investment', /^(investment (experience|activities)|student investment( activities| experience)?|investment clubs?)$/i],
  ['leadership', /^(leadership( experience)?|leadership & activities)$/i],
  ['extracurricular', /^(extracurricular( activities)?|activities|attività( extracurricolari)?|volunteering|volontariato)$/i],
  ['projects', /^(projects|progetti)$/i],
  ['skills', /^(skills|technical skills|competenze( tecniche| informatiche)?|computer skills|it skills)$/i],
  ['languages', /^(languages|lingue|conoscenze linguistiche)$/i],
  ['achievements', /^(awards|honou?rs|achievements|premi|riconoscimenti|certifications|certificazioni)$/i]
];

const BULLET = /^\s*[•▪●◦\-–*·]\s*/;
const DATE = /((jan|feb|mar|apr|may|jun|jul|aug|sep|sept|oct|nov|dec|gen|mag|giu|lug|ago|set|ott|dic)[a-z]*\.?\s+)?(19|20)\d{2}\s*[-–—]\s*((jan|feb|mar|apr|may|jun|jul|aug|sep|sept|oct|nov|dec|gen|mag|giu|lug|ago|set|ott|dic)[a-z]*\.?\s+)?((19|20)\d{2}|present|current|today|oggi|in corso|presente)|(expected|exp\.|previst[oa])\s+(19|20)\d{2}|((fall|spring|summer|autumn|winter)\s+(19|20)\d{2})/i;
const INVEST_HINT = /(investment|fund|asset management|equity research|quant|trading|finance club|stock pitch)/i;

let counter = 0;
const uid = () => `cv-${Date.now().toString(36)}-${(counter++).toString(36)}`;

function headingFor(line: string): CvSection | null {
  const clean = line.replace(/[:•]/g, '').trim();
  if (clean.length > 40) return null;
  for (const [sec, re] of HEADINGS) if (re.test(clean)) return sec;
  return null;
}

/** Heuristic structuring of CV text into editable entries (all unverified). */
export function parseCvText(text: string): CvEntry[] {
  const lines = text.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
  const entries: CvEntry[] = [];
  let section: CvSection | null = null;
  let cur: CvEntry | null = null;
  const push = () => {
    if (cur && (cur.title || cur.bullets.length)) {
      if ((cur.section === 'experience' || cur.section === 'extracurricular' || cur.section === 'leadership') && INVEST_HINT.test(`${cur.title} ${cur.org}`)) cur.section = 'investment';
      entries.push(cur);
    }
    cur = null;
  };
  for (const line of lines) {
    const h = headingFor(line);
    if (h) {
      push();
      section = h;
      continue;
    }
    if (!section) continue; // header block (name, contacts) is ignored on purpose
    if (section === 'skills' || section === 'languages') {
      push();
      entries.push({ id: uid(), section, title: line.replace(BULLET, ''), org: '', period: '', location: '', bullets: [], verified: false, origin: 'cv' });
      continue;
    }
    if (BULLET.test(line)) {
      if (!cur) cur = { id: uid(), section, title: '', org: '', period: '', location: '', bullets: [], verified: false, origin: 'cv' };
      cur.bullets.push(line.replace(BULLET, ''));
      continue;
    }
    const date = line.match(DATE)?.[0] ?? '';
    const rest = date ? line.replace(date, '').replace(/[|,–—-]\s*$/, '').trim() : line;
    if (!cur || cur.bullets.length) {
      push();
      cur = { id: uid(), section, title: '', org: rest, period: date, location: '', bullets: [], verified: false, origin: 'cv' };
    } else if (!cur.title) {
      cur.title = rest;
      if (date && !cur.period) cur.period = date;
    } else if (date && !cur.period) {
      cur.period = date;
      if (rest) cur.location = rest;
    } else {
      cur.bullets.push(line);
    }
  }
  push();
  // An entry with only one header line: treat that line as the title.
  for (const e of entries) if (!e.title && e.org) [e.title, e.org] = [e.org, ''];
  return entries;
}

/** Profile facts the learner provided in the setup brief — shown as "needs confirmation". */
export async function seedBriefProfile(): Promise<void> {
  if (await db.cv.get('cv')) return;
  const brief: CvEntry[] = [
    { id: 'brief-bocconi', section: 'education', title: 'BSc International Economics and Finance', org: 'Bocconi University', period: 'Expected 2027', location: 'Milan, Italy', bullets: [], verified: false, origin: 'brief' },
    { id: 'brief-washu', section: 'education', title: 'Exchange semester', org: 'Washington University in St. Louis — Olin Business School', period: 'Fall 2026', location: 'St. Louis, MO, USA', bullets: [], verified: false, origin: 'brief' },
    { id: 'brief-bsqf', section: 'investment', title: 'Member', org: 'Bocconi Students for Quantitative Finance', period: '', location: 'Milan, Italy', bullets: [], verified: false, origin: 'brief' },
    { id: 'brief-wusif', section: 'investment', title: 'Member', org: 'Washington University Student Investment Fund', period: '', location: 'St. Louis, MO, USA', bullets: [], verified: false, origin: 'brief' }
  ];
  await db.cv.put({ id: 'cv', entries: brief });
}

export async function getCv(): Promise<CvProfile> {
  return (await db.cv.get('cv')) ?? { id: 'cv', entries: [] };
}

export const SECTIONS: CvSection[] = ['education', 'experience', 'investment', 'leadership', 'extracurricular', 'projects', 'skills', 'languages', 'achievements'];

export interface PersonalQuestion {
  id: string;
  entryId: string;
  topic: string; // behavioural topic for Story Bank tagging
  prompt: L;
  guide: L;
}

/**
 * Personalised behavioural questions — templated from VERIFIED entries only.
 * The guide tells the learner what to draw on; it never asserts achievements.
 */
export function personalizedQuestions(entries: CvEntry[]): PersonalQuestion[] {
  const out: PersonalQuestion[] = [];
  const v = entries.filter((e) => e.verified);
  for (const e of v) {
    const org = e.org || e.title;
    const role = e.title;
    const add = (suffix: string, topic: string, prompt: L, guide: L) => out.push({ id: `${e.id}:${suffix}`, entryId: e.id, topic, prompt, guide });
    switch (e.section) {
      case 'experience':
        add('walk', 'walk-cv', { en: `Walk me through your role as ${role} at ${org}.`, it: `Raccontami il tuo ruolo di ${role} presso ${org}.` }, { en: 'Context in one sentence → 2–3 responsibilities you actually had → one concrete example → what it taught you that matters for banking.', it: 'Contesto in una frase → 2–3 responsabilità effettive → un esempio concreto → cosa ti ha insegnato di utile per la banca.' });
        add('challenge', 'resilience', { en: `Tell me about the hardest problem you faced at ${org}.`, it: `Parlami del problema più difficile che hai affrontato presso ${org}.` }, { en: 'Pick a real obstacle. Spend most time on what YOU did. Quantify the result only if you know the number.', it: 'Scegli un ostacolo reale. Dedica più tempo a ciò che hai fatto TU. Quantifica il risultato solo se conosci il numero.' });
        add('detail', 'attention-to-detail', { en: `Give me an example from ${org} where attention to detail mattered.`, it: `Fammi un esempio presso ${org} in cui l'attenzione ai dettagli è stata decisiva.` }, { en: 'Describe the check you performed, the error you caught (or missed), and the process you now follow.', it: "Descrivi il controllo che hai fatto, l'errore che hai trovato (o mancato) e il processo che segui ora." });
        break;
      case 'investment':
        add('pitch', 'commercial-awareness', { en: `Pitch me a stock or idea you worked on at ${org}.`, it: `Presentami un titolo o un'idea su cui hai lavorato presso ${org}.` }, { en: 'Recommendation → 2–3 thesis points → valuation (method + multiple/target) → key risks and what would change your mind. Use only analysis you actually did.', it: 'Raccomandazione → 2–3 punti della tesi → valutazione (metodo + multiplo/target) → rischi principali e cosa ti farebbe cambiare idea. Usa solo analisi che hai fatto davvero.' });
        add('process', 'teamwork', { en: `How does ${org} make investment decisions, and what is your contribution?`, it: `Come prende le decisioni d'investimento ${org}, e qual è il tuo contributo?` }, { en: 'Explain the process (research → pitch → vote/committee), then your specific role. Be precise about team vs individual work.', it: 'Spiega il processo (ricerca → pitch → voto/comitato), poi il tuo ruolo specifico. Distingui con precisione lavoro di squadra e individuale.' });
        add('wrong', 'failure', { en: `Tell me about an investment view at ${org} that turned out to be wrong.`, it: `Parlami di una view d'investimento presso ${org} che si è rivelata sbagliata.` }, { en: 'Own the mistake, explain what you missed analytically, and what you changed in your process.', it: 'Assumiti la responsabilità, spiega cosa ti era sfuggito nell’analisi e cosa hai cambiato nel tuo metodo.' });
        break;
      case 'leadership':
        add('lead', 'leadership', { en: `Tell me about a time you led others as ${role} at ${org}.`, it: `Parlami di una volta in cui hai guidato altre persone come ${role} presso ${org}.` }, { en: 'Goal → how you organised people → a difficulty (motivation, conflict, deadline) → outcome and what you would do differently.', it: 'Obiettivo → come hai organizzato le persone → una difficoltà (motivazione, conflitto, scadenza) → risultato e cosa faresti diversamente.' });
        add('conflict', 'conflict', { en: `Describe a disagreement within your team at ${org} and how it was resolved.`, it: `Descrivi un disaccordo nel tuo team presso ${org} e come è stato risolto.` }, { en: "Show that you listened, separated facts from opinions, and focused on the team's objective.", it: "Mostra che hai ascoltato, separato fatti e opinioni e ti sei concentrato sull'obiettivo del team." });
        break;
      case 'education':
        add('why', 'walk-cv', { en: `Why did you choose ${role} at ${org}?`, it: `Perché hai scelto ${role} presso ${org}?` }, { en: 'Link the choice to genuine interests and to your path towards finance. Avoid reciting rankings.', it: 'Collega la scelta a interessi autentici e al tuo percorso verso la finanza. Evita di elencare classifiche.' });
        add('prep', 'why-ib', { en: `How has ${org} prepared you for an analyst role?`, it: `In che modo ${org} ti ha preparato per un ruolo da analyst?` }, { en: 'Name specific courses, projects or skills (accounting, valuation, modelling) and how you used them.', it: 'Cita corsi, progetti o competenze specifici (contabilità, valutazione, modellazione) e come li hai usati.' });
        break;
      case 'projects':
        add('project', 'teamwork', { en: `Walk me through "${role}" — what exactly was your contribution?`, it: `Raccontami "${role}" — qual è stato esattamente il tuo contributo?` }, { en: 'Objective → method → your part → result → limitations.', it: 'Obiettivo → metodo → la tua parte → risultato → limiti.' });
        break;
      case 'extracurricular':
        add('extra', 'teamwork', { en: `What have you gained from ${org}?`, it: `Cosa ti ha dato ${org}?` }, { en: 'One concrete episode beats a list of qualities.', it: 'Un episodio concreto vale più di un elenco di qualità.' });
        break;
      case 'skills':
        add('skill', 'attention-to-detail', { en: `How have you used ${role} in practice?`, it: `Come hai usato ${role} nella pratica?` }, { en: 'Give a specific task where you used it and the output you produced. Be honest about your level.', it: 'Indica un compito specifico in cui lo hai usato e il risultato prodotto. Sii onesto sul tuo livello.' });
        break;
      case 'achievements':
        add('ach', 'strengths', { en: `Tell me about "${role}". What did it take?`, it: `Raccontami di "${role}". Cosa ha richiesto?` }, { en: 'Explain the effort and choices behind it, not just the outcome.', it: 'Spiega lo sforzo e le scelte dietro al risultato, non solo l’esito.' });
        break;
      case 'languages':
        break;
    }
  }
  if (v.length >= 2) {
    out.unshift({ id: 'cv:walk', entryId: '', topic: 'walk-cv', prompt: { en: 'Walk me through your CV.', it: 'Raccontami il tuo CV.' }, guide: { en: `Chronological, 90 seconds: ${v.filter((e) => ['education', 'experience', 'investment', 'leadership'].includes(e.section)).map((e) => e.org || e.title).join(' → ')} → why investment banking now. Each step: what you did and why you moved on.`, it: `In ordine cronologico, 90 secondi: ${v.filter((e) => ['education', 'experience', 'investment', 'leadership'].includes(e.section)).map((e) => e.org || e.title).join(' → ')} → perché l'investment banking ora. Per ogni tappa: cosa hai fatto e perché sei andato avanti.` } });
  }
  return out;
}
