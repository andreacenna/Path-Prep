import { describe, expect, it } from 'vitest';
import * as finance from '../../src/lib/finance';
import { ACADEMIES, STUB_INDEX } from '../../src/content/curriculum';
import { cases } from '../../src/content/cases';
import type { CaseStudy, InterviewQuestion, L, Lesson, Question, Tolerance, VerifySpec } from '../../src/content/types';
import { withinTolerance } from '../../src/lib/grading';

const lessonFiles = import.meta.glob<{ lessons: Lesson[] }>('../../src/content/lessons/*.ts', { eager: true });
const interviewFiles = import.meta.glob<{ questions: InterviewQuestion[] }>('../../src/content/interview/*.ts', { eager: true });
// CONTENT_ONLY=<substring of file path> restricts checks to matching files (useful while authoring in parallel).
const only = (globalThis as { process?: { env: Record<string, string | undefined> } }).process?.env.CONTENT_ONLY;
const pick = <T,>(files: Record<string, T>) => Object.entries(files).filter(([k]) => !only || k.includes(only)).map(([, v]) => v);
const lessons = pick(lessonFiles).flatMap((f) => f.lessons);
const interview = pick(interviewFiles).flatMap((f) => f.questions);

const isL = (x: unknown): x is L =>
  !!x && typeof x === 'object' && typeof (x as L).en === 'string' && typeof (x as L).it === 'string';

/** Recursively assert every L object has non-empty en and it. */
function checkLocalized(obj: unknown, path: string, errors: string[]) {
  if (Array.isArray(obj)) return obj.forEach((v, i) => checkLocalized(v, `${path}[${i}]`, errors));
  if (obj && typeof obj === 'object') {
    const o = obj as Record<string, unknown>;
    if ('en' in o || 'it' in o) {
      if (!isL(o) || !o.en.trim() || !o.it.trim()) errors.push(`${path}: missing en/it text`);
      else if (o.en.trim() === o.it.trim() && o.en.length > 40) errors.push(`${path}: Italian identical to English (untranslated?)`);
      return;
    }
    for (const [k, v] of Object.entries(o)) checkLocalized(v, `${path}.${k}`, errors);
  }
}

function runVerify(spec: VerifySpec): number {
  const fn = (finance as unknown as Record<string, (...a: unknown[]) => unknown>)[spec.fn];
  if (typeof fn !== 'function') throw new Error(`verify: unknown finance function "${spec.fn}"`);
  let out = fn(...spec.args) as unknown;
  if (spec.pick !== undefined) out = (out as Record<string | number, unknown>)[spec.pick];
  if (typeof out !== 'number') throw new Error(`verify: ${spec.fn} did not return a number`);
  return out * (spec.scale ?? 1);
}

function checkQuestion(q: Question, where: string, errors: string[]) {
  const p = `${where} › ${q.id}`;
  if (!q.topic || !/^[a-z0-9-]+$/.test(q.topic)) errors.push(`${p}: topic must be kebab-case`);
  if (![1, 2, 3].includes(q.difficulty)) errors.push(`${p}: bad difficulty`);
  for (const k of ['objective', 'prompt', 'explanation'] as const) if (!isL(q[k])) errors.push(`${p}: missing ${k}`);
  const checkNum = (answer: number, tol: Tolerance | undefined, verify: VerifySpec | undefined, label: string) => {
    if (typeof answer !== 'number' || !Number.isFinite(answer)) errors.push(`${p}${label}: answer must be a finite number`);
    if (verify) {
      try {
        const v = runVerify(verify);
        if (!withinTolerance(v, answer, tol)) errors.push(`${p}${label}: stated answer ${answer} ≠ recomputed ${v} (${verify.fn})`);
      } catch (e) {
        errors.push(`${p}${label}: ${(e as Error).message}`);
      }
    }
  };
  switch (q.kind) {
    case 'mcq':
      if (q.choices.length < 2) errors.push(`${p}: needs ≥2 choices`);
      if (!(q.correct >= 0 && q.correct < q.choices.length)) errors.push(`${p}: correct index out of range`);
      break;
    case 'multi':
      if (q.choices.length < 3) errors.push(`${p}: needs ≥3 choices`);
      if (!q.correct.length || q.correct.some((c) => c < 0 || c >= q.choices.length)) errors.push(`${p}: correct indices out of range`);
      break;
    case 'numeric':
      checkNum(q.answer, q.tolerance, q.verify, '');
      break;
    case 'order':
      if (q.items.length < 3) errors.push(`${p}: order needs ≥3 items`);
      break;
    case 'grid': {
      let blanks = 0;
      q.rows.forEach((r, ri) => {
        if (r.cells.length !== q.columns.length - 1) errors.push(`${p}: row ${ri} has ${r.cells.length} cells, expected ${q.columns.length - 1}`);
        r.cells.forEach((c, ci) => {
          if (typeof c === 'object') {
            blanks++;
            checkNum(c.answer, c.tolerance, c.verify, ` [r${ri}c${ci}]`);
          }
        });
      });
      if (!blanks) errors.push(`${p}: grid has no blank cells`);
      break;
    }
    default:
      errors.push(`${p}: unknown kind`);
  }
}

describe('curriculum', () => {
  it('has all 11 academies in order', () => {
    expect(ACADEMIES.map((a) => a.order)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
  });
  it('has unique lesson stub ids and localized titles', () => {
    const errors: string[] = [];
    const ids = new Set<string>();
    for (const a of ACADEMIES) {
      checkLocalized({ t: a.title, g: a.tagline }, a.id, errors);
      for (const m of a.modules) {
        checkLocalized({ t: m.title, d: m.description }, `${a.id}/${m.id}`, errors);
        for (const s of m.lessons) {
          if (ids.has(s.id)) errors.push(`duplicate stub ${s.id}`);
          ids.add(s.id);
          checkLocalized(s.title, s.id, errors);
        }
      }
    }
    expect(errors).toEqual([]);
  });
});

describe('lessons', () => {
  it('are complete, bilingual and correctly placed', () => {
    const errors: string[] = [];
    const lessonIds = new Set<string>();
    const qIds = new Set<string>();
    const fcIds = new Set<string>();
    for (const lesson of lessons) {
      const p = lesson.id;
      if (lessonIds.has(p)) errors.push(`${p}: duplicate lesson id`);
      lessonIds.add(p);
      const stub = STUB_INDEX[p];
      if (!stub) errors.push(`${p}: no matching stub in curriculum.ts`);
      else {
        if (stub.academy.id !== lesson.academyId) errors.push(`${p}: academyId ${lesson.academyId} ≠ ${stub.academy.id}`);
        if (stub.module.id !== lesson.moduleId) errors.push(`${p}: moduleId ${lesson.moduleId} ≠ ${stub.module.id}`);
      }
      if (!/^\d{4}-\d{2}$/.test(lesson.reviewed)) errors.push(`${p}: reviewed must be YYYY-MM`);
      checkLocalized(lesson, p, errors);
      const types = new Set(lesson.screens.map((s) => s.type));
      const required = ['intuition', 'technical', 'example', 'realworld', 'exercise', 'interview', 'mistakes', 'summary'];
      if (!lesson.qualitative) required.push('formula');
      for (const r of required) if (!types.has(r as never)) errors.push(`${p}: missing ${r} screen`);
      if (lesson.screens.length > 18) errors.push(`${p}: too many screens (${lesson.screens.length}); split the lesson`);
      const own = new Set(lesson.questions.map((q) => q.id));
      for (const s of lesson.screens) if (s.type === 'exercise' && !own.has(s.questionId)) errors.push(`${p}: exercise references unknown question ${s.questionId}`);
      if (lesson.questions.length < 3) errors.push(`${p}: needs ≥3 questions`);
      if (lesson.flashcards.length < 3) errors.push(`${p}: needs ≥3 flashcards`);
      for (const q of lesson.questions) {
        if (qIds.has(q.id)) errors.push(`${q.id}: duplicate question id`);
        qIds.add(q.id);
        checkQuestion(q, p, errors);
      }
      for (const c of lesson.flashcards) {
        if (fcIds.has(c.id)) errors.push(`${c.id}: duplicate flashcard id`);
        fcIds.add(c.id);
        if (!/^[a-z0-9-]+$/.test(c.topic)) errors.push(`${c.id}: topic must be kebab-case`);
      }
      // body text should stay short per screen (mobile-first)
      for (const [i, s] of lesson.screens.entries()) {
        const body = (s as { body?: L }).body;
        if (body && body.en.length > 1400) errors.push(`${p}: screen ${i} body too long (${body.en.length} chars) — split it`);
      }
    }
    expect(errors).toEqual([]);
  });
});

describe('interview bank', () => {
  it('is complete and bilingual', () => {
    const errors: string[] = [];
    const ids = new Set<string>();
    for (const q of interview) {
      if (ids.has(q.id)) errors.push(`${q.id}: duplicate`);
      ids.add(q.id);
      checkLocalized(q, q.id, errors);
      if (!q.rubric.length || !q.rubric.some((r) => r.essential)) errors.push(`${q.id}: rubric needs ≥1 essential point`);
      if (q.numeric?.verify) {
        const v = runVerify(q.numeric.verify);
        if (!withinTolerance(v, q.numeric.answer, q.numeric.tolerance)) errors.push(`${q.id}: numeric ${q.numeric.answer} ≠ ${v}`);
      }
    }
    expect(errors).toEqual([]);
  });
});

describe('case studies', () => {
  it('are complete, sourced and bilingual', () => {
    const errors: string[] = [];
    const ids = new Set<string>();
    for (const c of (only && !'cases.ts'.includes(only) ? [] : cases) as CaseStudy[]) {
      if (ids.has(c.id)) errors.push(`${c.id}: duplicate`);
      ids.add(c.id);
      checkLocalized(c, c.id, errors);
      if (!/^\d{4}-\d{2}-\d{2}$/.test(c.announced)) errors.push(`${c.id}: announced must be YYYY-MM-DD`);
      if (c.closedOrEnded && !/^\d{4}-\d{2}-\d{2}$/.test(c.closedOrEnded)) errors.push(`${c.id}: closedOrEnded must be YYYY-MM-DD`);
      if (!c.sources.length) errors.push(`${c.id}: needs sources`);
      for (const q of c.questions) checkQuestion(q, c.id, errors);
    }
    expect(errors).toEqual([]);
  });
});
