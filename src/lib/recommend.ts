import { ACADEMIES, ACADEMY_BY_ID, STUB_INDEX } from '../content/curriculum';
import type { ContentBundle } from '../content/registry';
import type { LessonProgress } from '../db/db';
import type { LessonStub } from '../content/types';
import type { TopicMastery } from './mastery';

export type StubStatus = 'upcoming' | 'available' | 'started' | 'completed' | 'mastered';

export const PASS_SCORE = 0.7;

/**
 * Lesson status. "mastered" requires demonstrated knowledge: completed with ≥ 70% first-try
 * accuracy AND every topic assessed by the lesson is Proficient/Mastered in practice.
 */
export function stubStatus(
  stub: LessonStub,
  content: ContentBundle | null,
  progress: Record<string, LessonProgress>,
  mastery?: Map<string, TopicMastery>
): StubStatus {
  const lesson = content?.lessonById[stub.id];
  if (!lesson) return 'upcoming';
  const p = progress[stub.id];
  if (!p) return 'available';
  if (p.status !== 'completed') return 'started';
  if (mastery && p.bestScore >= PASS_SCORE) {
    const topics = [...new Set(lesson.questions.map((q) => q.topic))];
    if (topics.length && topics.every((tp) => ['proficient', 'mastered'].includes(mastery.get(tp)?.level ?? ''))) return 'mastered';
  }
  return 'completed';
}

export function academyStats(academyId: string, content: ContentBundle | null, progress: Record<string, LessonProgress>) {
  const a = ACADEMY_BY_ID[academyId];
  const stubs = a.modules.flatMap((m) => m.lessons);
  const available = stubs.filter((s) => content?.lessonById[s.id]);
  const completed = available.filter((s) => progress[s.id]?.status === 'completed');
  return { total: stubs.length, available: available.length, completed: completed.length };
}

/** Next lesson: resume a started lesson in the path, else the first available uncompleted one. */
export function nextLesson(academyId: string | null, content: ContentBundle | null, progress: Record<string, LessonProgress>): { id: string; resume: boolean } | null {
  if (!content) return null;
  const order = academyId ? [ACADEMY_BY_ID[academyId], ...ACADEMIES.filter((a) => a.id !== academyId)] : ACADEMIES;
  for (const a of order) {
    const stubs = a.modules.flatMap((m) => m.lessons).filter((s) => content.lessonById[s.id]);
    const started = stubs.find((s) => progress[s.id]?.status === 'started');
    if (started) return { id: started.id, resume: true };
    const fresh = stubs.find((s) => !progress[s.id]);
    if (fresh) return { id: fresh.id, resume: false };
  }
  return null;
}

/** Human label for a topic tag: the title of the lesson whose questions use it most. */
export function topicLabels(content: ContentBundle | null): Record<string, { en: string; it: string }> {
  const out: Record<string, { en: string; it: string }> = {};
  if (!content) return out;
  const counts: Record<string, Record<string, number>> = {};
  for (const lesson of content.lessons) for (const q of lesson.questions) {
    counts[q.topic] ??= {};
    counts[q.topic][lesson.id] = (counts[q.topic][lesson.id] ?? 0) + 1;
  }
  for (const [topic, byLesson] of Object.entries(counts)) {
    const best = Object.entries(byLesson).sort((a, b) => b[1] - a[1])[0][0];
    out[topic] = titleOf(best) ?? humanize(topic);
  }
  return out;
}

function titleOf(lessonId: string) {
  return STUB_INDEX[lessonId]?.stub.title;
}
export function humanize(topic: string) {
  const s = topic.replace(/-/g, ' ');
  const v = s.charAt(0).toUpperCase() + s.slice(1);
  return { en: v, it: v };
}
