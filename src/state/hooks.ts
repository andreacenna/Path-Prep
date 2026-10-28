import { useLiveQuery } from 'dexie-react-hooks';
import { useMemo } from 'react';
import { db, type Attempt, type LessonProgress } from '../db/db';
import { computeStreak } from '../lib/gamification';
import { dayKey } from '../lib/dates';
import { topicMastery, type TopicMastery } from '../lib/mastery';

export function useLessonProgress(): Record<string, LessonProgress> {
  const rows = useLiveQuery(() => db.lessonProgress.toArray(), []);
  return useMemo(() => Object.fromEntries((rows ?? []).map((r) => [r.lessonId, r])), [rows]);
}

export function useXP() {
  const rows = useLiveQuery(() => db.xp.toArray(), []);
  return useMemo(() => {
    const byDay: Record<string, number> = {};
    let total = 0;
    for (const r of rows ?? []) {
      total += r.amount;
      byDay[r.day] = (byDay[r.day] ?? 0) + r.amount;
    }
    const streak = computeStreak(Object.keys(byDay));
    return { total, today: byDay[dayKey()] ?? 0, byDay, streak, loaded: rows !== undefined, rows: rows ?? [] };
  }, [rows]);
}

export function useAttempts(): Attempt[] {
  return useLiveQuery(() => db.attempts.toArray(), []) ?? [];
}

export function useTopicMastery(): Map<string, TopicMastery> {
  const attempts = useAttempts();
  return useMemo(() => {
    const by = new Map<string, Attempt[]>();
    for (const a of attempts) {
      if (!by.has(a.topic)) by.set(a.topic, []);
      by.get(a.topic)!.push(a);
    }
    const out = new Map<string, TopicMastery>();
    for (const [k, v] of by) out.set(k, topicMastery(v));
    return out;
  }, [attempts]);
}

export function useDueCards() {
  const now = Date.now();
  const due = useLiveQuery(() => db.cards.where('due').belowOrEqual(Date.now()).toArray(), [Math.floor(now / 60000)]);
  const total = useLiveQuery(() => db.cards.count(), []);
  return { due: due ?? [], total: total ?? 0 };
}
