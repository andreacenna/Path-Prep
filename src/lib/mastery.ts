/**
 * Topic mastery — deterministic, explainable rules based on demonstrated performance.
 * Opening a lesson never counts; only answered questions (and recall) do.
 */
export type MasteryLevel = 'not-started' | 'learning' | 'practicing' | 'proficient' | 'mastered' | 'needs-review';

export interface AttemptLite {
  correct: boolean;
  ts: number;
  day: string;
  difficulty: number;
}

export interface TopicMastery {
  level: MasteryLevel;
  accuracy: number; // recency-weighted accuracy over the last 10 attempts
  attempts: number;
  lastTs: number;
  score: number; // 0..100 for display
}

const DAY = 86400000;

export function topicMastery(attempts: AttemptLite[], now = Date.now()): TopicMastery {
  if (!attempts.length) return { level: 'not-started', accuracy: 0, attempts: 0, lastTs: 0, score: 0 };
  const sorted = [...attempts].sort((a, b) => a.ts - b.ts);
  const recent = sorted.slice(-10);
  // Linear recency weights: newest attempt weighs most; harder questions weigh slightly more.
  let wSum = 0;
  let cSum = 0;
  recent.forEach((a, i) => {
    const w = (i + 1) * (1 + 0.25 * (a.difficulty - 1));
    wSum += w;
    if (a.correct) cSum += w;
  });
  const accuracy = cSum / wSum;
  const n = sorted.length;
  const lastTs = sorted[n - 1].ts;
  const distinctDays = new Set(sorted.map((a) => a.day)).size;
  const idleDays = (now - lastTs) / DAY;

  let level: MasteryLevel;
  if (n < 3) level = 'learning';
  else if (accuracy < 0.6) level = 'learning';
  else if (accuracy < 0.8 || n < 5) level = 'practicing';
  else if (accuracy >= 0.9 && n >= 10 && distinctDays >= 2) level = 'mastered';
  else level = 'proficient';

  // Knowledge decays: strong topics not practised for a while need review.
  const reviewAfter = level === 'mastered' ? 30 : 14;
  if ((level === 'proficient' || level === 'mastered') && idleDays > reviewAfter) level = 'needs-review';
  // A recent slump on a previously strong topic also triggers review.
  const last3 = sorted.slice(-3);
  if (n >= 8 && last3.length === 3 && last3.filter((a) => !a.correct).length >= 2 && accuracy < 0.8) level = 'needs-review';

  const coverage = Math.min(1, n / 10);
  const score = Math.round(accuracy * coverage * 100);
  return { level, accuracy, attempts: n, lastTs, score };
}

export const MASTERY_ORDER: MasteryLevel[] = ['not-started', 'learning', 'practicing', 'proficient', 'mastered', 'needs-review'];
