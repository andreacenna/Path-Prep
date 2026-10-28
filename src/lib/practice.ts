import type { ContentBundle } from '../content/registry';
import type { Attempt, LessonProgress } from '../db/db';
import type { Question } from '../content/types';
import type { TopicMastery } from './mastery';

export type PracticeQuestion = Question & { lessonId: string; academyId: string };

/** Deterministic PRNG (mulberry32) so a day's challenge is identical across reloads/devices. */
export function rng(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
export function hashString(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}
export function shuffleSeeded<T>(arr: T[], rand: () => number): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function allQuestions(content: ContentBundle, includeCases = false): PracticeQuestion[] {
  return Object.values(content.questionById).filter((q) => includeCases || !q.lessonId.startsWith('case:'));
}

export interface QuizOptions {
  academyId?: string;
  onlyStudied?: boolean;
  numericOnly?: boolean;
  count?: number;
}

export function pickQuiz(content: ContentBundle, progress: Record<string, LessonProgress>, opts: QuizOptions, rand = Math.random): PracticeQuestion[] {
  let pool = allQuestions(content);
  if (opts.academyId) pool = pool.filter((q) => q.academyId === opts.academyId);
  if (opts.onlyStudied) pool = pool.filter((q) => progress[q.lessonId]?.status === 'completed');
  if (opts.numericOnly) pool = pool.filter((q) => q.kind === 'numeric' || q.kind === 'grid');
  return shuffleSeeded(pool, rand).slice(0, opts.count ?? 10);
}

/**
 * Daily challenge: 5 questions, seeded by date. Prefers lessons the learner has completed
 * (retrieval practice) and spreads across academies; falls back to foundation-level questions.
 */
export function dailyChallenge(content: ContentBundle, progress: Record<string, LessonProgress>, day: string): PracticeQuestion[] {
  const rand = rng(hashString(`daily:${day}`));
  const all = allQuestions(content);
  const studied = all.filter((q) => progress[q.lessonId]?.status === 'completed');
  const base = studied.length >= 8 ? studied : [...studied, ...all.filter((q) => q.difficulty === 1 && !studied.includes(q))];
  const byAcademy = new Map<string, PracticeQuestion[]>();
  for (const q of shuffleSeeded(base, rand)) {
    if (!byAcademy.has(q.academyId)) byAcademy.set(q.academyId, []);
    byAcademy.get(q.academyId)!.push(q);
  }
  const out: PracticeQuestion[] = [];
  const queues = shuffleSeeded([...byAcademy.values()], rand);
  while (out.length < 5 && queues.some((q) => q.length)) {
    for (const q of queues) {
      const next = q.shift();
      if (next && out.length < 5) out.push(next);
    }
  }
  return out;
}

/** Questions whose most recent attempt was wrong, weakest topics first. */
export function mistakeQueue(content: ContentBundle, attempts: Attempt[], mastery: Map<string, TopicMastery>, count = 10): PracticeQuestion[] {
  const latest = new Map<string, Attempt>();
  for (const a of [...attempts].sort((x, y) => x.ts - y.ts)) latest.set(a.questionId, a);
  const wrong = [...latest.values()].filter((a) => !a.correct && content.questionById[a.questionId]);
  wrong.sort((a, b) => (mastery.get(a.topic)?.accuracy ?? 0) - (mastery.get(b.topic)?.accuracy ?? 0));
  return wrong.slice(0, count).map((a) => content.questionById[a.questionId]);
}

/** Weakest topics (with at least 2 attempts), lowest accuracy first. */
export function weakestTopics(mastery: Map<string, TopicMastery>, n = 3): [string, TopicMastery][] {
  return [...mastery.entries()]
    .filter(([, m]) => m.attempts >= 2 && (m.level !== 'mastered'))
    .sort((a, b) => a[1].accuracy - b[1].accuracy || b[1].attempts - a[1].attempts)
    .slice(0, n);
}
