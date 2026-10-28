import { fsrs, createEmptyCard, Rating, type Card, type Grade } from 'ts-fsrs';
import type { CardState } from '../db/db';

/**
 * Spaced repetition using FSRS (Free Spaced Repetition Scheduler) via the MIT-licensed
 * `ts-fsrs` implementation. Default parameters, 90% target retention, fuzzing on.
 * https://github.com/open-spaced-repetition/ts-fsrs
 */
const scheduler = fsrs({ request_retention: 0.9, enable_fuzz: true });

export { Rating };
export type SrsRating = Grade; // Again=1, Hard=2, Good=3, Easy=4

export function newCardState(meta: { cardId: string; topic: string; academyId: string; lessonId: string }, now = new Date()): CardState {
  const c = createEmptyCard(now);
  return { ...meta, ...fromCard(c), addedAt: now.getTime() };
}

function fromCard(c: Card) {
  return {
    due: c.due.getTime(),
    stability: c.stability,
    difficulty: c.difficulty,
    elapsed_days: c.elapsed_days,
    scheduled_days: c.scheduled_days,
    learning_steps: c.learning_steps,
    reps: c.reps,
    lapses: c.lapses,
    state: c.state as number,
    last_review: c.last_review ? c.last_review.getTime() : undefined
  };
}

function toCard(s: CardState): Card {
  return {
    due: new Date(s.due),
    stability: s.stability,
    difficulty: s.difficulty,
    elapsed_days: s.elapsed_days,
    scheduled_days: s.scheduled_days,
    learning_steps: s.learning_steps ?? 0,
    reps: s.reps,
    lapses: s.lapses,
    state: s.state,
    last_review: s.last_review ? new Date(s.last_review) : undefined
  } as Card;
}

/** Apply a review rating and return the updated card state. */
export function reviewCardState(s: CardState, rating: SrsRating, now = new Date()): CardState {
  const { card } = scheduler.next(toCard(s), now, rating);
  return { ...s, ...fromCard(card) };
}

/** Preview the next interval for each rating (for button labels). */
export function previewIntervals(s: CardState, now = new Date()): Record<SrsRating, number> {
  const out = {} as Record<SrsRating, number>;
  for (const r of [Rating.Again, Rating.Hard, Rating.Good, Rating.Easy] as SrsRating[]) {
    out[r] = scheduler.next(toCard(s), now, r).card.due.getTime() - now.getTime();
  }
  return out;
}

export function formatInterval(ms: number, lang: 'en' | 'it'): string {
  const min = Math.round(ms / 60000);
  if (min < 60) return `${Math.max(1, min)}${lang === 'it' ? 'min' : 'm'}`;
  const h = Math.round(min / 60);
  if (h < 24) return `${h}h`;
  const d = Math.round(h / 24);
  if (d < 31) return `${d}${lang === 'it' ? 'g' : 'd'}`;
  const mo = Math.round(d / 30);
  return `${mo}${lang === 'it' ? 'm' : 'mo'}`;
}
