import { db, type Attempt, type PathDB } from '../db/db';
import { dayKey } from './dates';
import { XP, computeStreak } from './gamification';
import { newCardState, reviewCardState, type SrsRating } from './srs';
import { ACHIEVEMENTS, type Stats } from './achievements';
import { topicMastery } from './mastery';
import type { Flashcard } from '../content/types';

/** All writes to learning state go through these functions (keeps rules in one place). */

export async function awardXP(amount: number, reason: string, database: PathDB = db): Promise<void> {
  if (amount <= 0) return;
  const ts = Date.now();
  await database.xp.add({ amount, reason, ts, day: dayKey(ts) });
}

export async function recordAttempt(
  a: Omit<Attempt, 'id' | 'ts' | 'day'>,
  database: PathDB = db
): Promise<{ xp: number }> {
  const ts = Date.now();
  const day = dayKey(ts);
  const earlierToday = await database.attempts.where('questionId').equals(a.questionId).filter((x) => x.day === day && x.correct).count();
  await database.attempts.add({ ...a, ts, day });
  const xp = XP.question(a.difficulty, a.correct, earlierToday === 0);
  await awardXP(xp, `q:${a.questionId}`, database);
  return { xp };
}

export async function saveLessonPosition(lessonId: string, academyId: string, screen: number, database: PathDB = db) {
  const existing = await database.lessonProgress.get(lessonId);
  await database.lessonProgress.put({
    lessonId,
    academyId,
    status: existing?.status ?? 'started',
    lastScreen: screen,
    bestScore: existing?.bestScore ?? 0,
    lastScore: existing?.lastScore ?? 0,
    attempts: existing?.attempts ?? 0,
    completedAt: existing?.completedAt,
    updatedAt: Date.now()
  });
}

export async function completeLesson(
  lessonId: string,
  academyId: string,
  score: number,
  flashcards: Flashcard[],
  database: PathDB = db
): Promise<{ xp: number; firstCompletion: boolean }> {
  const existing = await database.lessonProgress.get(lessonId);
  const firstCompletion = existing?.status !== 'completed';
  const now = Date.now();
  await database.lessonProgress.put({
    lessonId,
    academyId,
    status: 'completed',
    lastScreen: 0,
    bestScore: Math.max(existing?.bestScore ?? 0, score),
    lastScore: score,
    attempts: (existing?.attempts ?? 0) + 1,
    completedAt: existing?.completedAt ?? now,
    updatedAt: now
  });
  // Add the lesson's flashcards to the spaced-repetition deck.
  for (const c of flashcards) {
    if (!(await database.cards.get(c.id))) {
      await database.cards.put(newCardState({ cardId: c.id, topic: c.topic, academyId, lessonId }));
    }
  }
  const xp = XP.lessonComplete(score, firstCompletion);
  await awardXP(xp, `lesson:${lessonId}`, database);
  return { xp, firstCompletion };
}

export async function reviewFlashcard(cardId: string, rating: SrsRating, database: PathDB = db): Promise<void> {
  const s = await database.cards.get(cardId);
  if (!s) return;
  await database.cards.put(reviewCardState(s, rating));
  const ts = Date.now();
  await database.reviewLogs.add({ cardId, rating, ts, day: dayKey(ts) });
  await awardXP(XP.flashcard(rating), `card:${cardId}`, database);
}

/** Add flashcards manually (e.g. "add all cards of this lesson to my deck"). */
export async function addCardsToDeck(cards: (Flashcard & { lessonId: string; academyId: string })[], database: PathDB = db) {
  for (const c of cards) {
    if (!(await database.cards.get(c.id))) await database.cards.put(newCardState({ cardId: c.id, topic: c.topic, academyId: c.academyId, lessonId: c.lessonId }));
  }
}

/** Days with genuine learning activity (XP earned). */
export async function activeDays(database: PathDB = db): Promise<Set<string>> {
  const days = await database.xp.orderBy('day').uniqueKeys();
  return new Set(days as string[]);
}

export async function computeStats(database: PathDB = db): Promise<Stats> {
  const [xpRows, lessonRows, reviews, attempts, interviews, stories, newsQ] = await Promise.all([
    database.xp.toArray(),
    database.lessonProgress.toArray(),
    database.reviewLogs.count(),
    database.attempts.toArray(),
    database.interviewAttempts.toArray(),
    database.stories.count(),
    database.newsQuiz.count()
  ]);
  const days = new Set(xpRows.map((x) => x.day));
  const streak = computeStreak(days);
  const byTopic = new Map<string, Attempt[]>();
  for (const a of attempts) {
    if (!byTopic.has(a.topic)) byTopic.set(a.topic, []);
    byTopic.get(a.topic)!.push(a);
  }
  let mastered = 0;
  for (const list of byTopic.values()) if (topicMastery(list).level === 'mastered') mastered++;
  return {
    totalXP: xpRows.reduce((s, x) => s + x.amount, 0),
    streak: streak.current,
    longestStreak: streak.longest,
    lessonsCompleted: lessonRows.filter((l) => l.status === 'completed').length,
    perfectLessons: lessonRows.filter((l) => l.bestScore >= 0.999).length,
    cardsReviewed: reviews,
    questionsCorrect: attempts.filter((a) => a.correct).length,
    interviewAttempts: interviews.length,
    mockInterviews: new Set(xpRows.filter((x) => x.reason.startsWith('mock:')).map((x) => x.reason)).size,
    dailyChallenges: xpRows.filter((x) => x.reason.startsWith('daily:')).length,
    masteredTopics: mastered,
    academiesStarted: new Set(lessonRows.map((l) => l.academyId)).size,
    storiesWritten: stories,
    newsQuizzes: newsQ
  };
}

/** Unlock any newly earned achievements; returns their ids. */
export async function checkAchievements(database: PathDB = db): Promise<string[]> {
  const stats = await computeStats(database);
  const have = new Set((await database.achievements.toArray()).map((a) => a.id));
  const fresh = ACHIEVEMENTS.filter((a) => !have.has(a.id) && a.check(stats)).map((a) => a.id);
  const now = Date.now();
  await database.achievements.bulkPut(fresh.map((id) => ({ id, unlockedAt: now })));
  return fresh;
}
