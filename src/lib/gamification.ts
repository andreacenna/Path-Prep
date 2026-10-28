import { addDays, dayKey } from './dates';

/** Level curve: level L starts at 50·(L−1)² XP → L2 at 50, L3 at 200, L5 at 800, L10 at 4,050. */
export function levelFromXP(xp: number): number {
  return Math.floor(Math.sqrt(Math.max(0, xp) / 50)) + 1;
}
export function xpForLevel(level: number): number {
  return 50 * (level - 1) * (level - 1);
}
export function levelProgress(xp: number): { level: number; into: number; span: number; pct: number } {
  const level = levelFromXP(xp);
  const start = xpForLevel(level);
  const span = xpForLevel(level + 1) - start;
  return { level, into: xp - start, span, pct: (xp - start) / span };
}

export const LEVEL_TITLES: { min: number; en: string; it: string }[] = [
  { min: 1, en: 'Intern', it: 'Stagista' },
  { min: 4, en: 'Summer Analyst', it: 'Summer Analyst' },
  { min: 8, en: 'Analyst', it: 'Analyst' },
  { min: 13, en: 'Associate', it: 'Associate' },
  { min: 19, en: 'Vice President', it: 'Vice President' },
  { min: 26, en: 'Director', it: 'Director' },
  { min: 34, en: 'Managing Director', it: 'Managing Director' }
];
export function levelTitle(level: number, lang: 'en' | 'it'): string {
  let t = LEVEL_TITLES[0];
  for (const x of LEVEL_TITLES) if (level >= x.min) t = x;
  return t[lang];
}

/**
 * Current streak: consecutive days with learning activity ending today — or ending
 * yesterday if today has no activity yet (the streak is still alive until midnight).
 */
export function computeStreak(activeDays: Iterable<string>, today = dayKey()): { current: number; activeToday: boolean; longest: number } {
  const set = new Set(activeDays);
  const activeToday = set.has(today);
  let cursor = activeToday ? today : addDays(today, -1);
  let current = 0;
  while (set.has(cursor)) {
    current++;
    cursor = addDays(cursor, -1);
  }
  // longest
  const sorted = [...set].sort();
  let longest = 0;
  let run = 0;
  let prev: string | null = null;
  for (const d of sorted) {
    run = prev && addDays(prev, 1) === d ? run + 1 : 1;
    longest = Math.max(longest, run);
    prev = d;
  }
  return { current, activeToday, longest };
}

/** XP rules — reward demonstrated knowledge, not clicks. */
export const XP = {
  question(difficulty: number, correct: boolean, firstTodayForQuestion: boolean): number {
    if (!correct) return 0;
    return firstTodayForQuestion ? 5 * difficulty : 1;
  },
  lessonComplete(score: number, firstCompletion: boolean): number {
    // Completion bonus scales with first-try accuracy; re-takes give a small review bonus.
    return firstCompletion ? 10 + Math.round(20 * score) : Math.round(5 * score);
  },
  flashcard(rating: number): number {
    return rating >= 3 ? 2 : 1; // recall effort counts even when forgotten
  },
  dailyChallenge(score: number): number {
    return Math.round(30 * score);
  },
  interviewAttempt(verdict: 'correct' | 'partial' | 'incorrect'): number {
    return verdict === 'correct' ? 15 : verdict === 'partial' ? 8 : 3;
  }
};
