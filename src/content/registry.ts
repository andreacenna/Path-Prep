import type { CaseStudy, InterviewQuestion, Lesson, Question, Flashcard } from './types';

/**
 * Content registry. Lesson files in ./lessons are auto-discovered and code-split;
 * they are all precached by the service worker for offline use.
 */
const lessonModules = import.meta.glob<{ lessons: Lesson[] }>('./lessons/*.ts');
const interviewModules = import.meta.glob<{ questions: InterviewQuestion[] }>('./interview/*.ts');

export interface ContentBundle {
  lessons: Lesson[];
  lessonById: Record<string, Lesson>;
  questionById: Record<string, Question & { lessonId: string; academyId: string }>;
  flashcards: (Flashcard & { lessonId: string; academyId: string })[];
  interview: InterviewQuestion[];
  cases: CaseStudy[];
}

let cache: Promise<ContentBundle> | null = null;

export function loadContent(): Promise<ContentBundle> {
  if (!cache) {
    cache = (async () => {
      const [lessonFiles, interviewFiles, casesMod] = await Promise.all([
        Promise.all(Object.values(lessonModules).map((load) => load())),
        Promise.all(Object.values(interviewModules).map((load) => load())),
        import('./cases')
      ]);
      return buildBundle(
        lessonFiles.flatMap((f) => f.lessons),
        interviewFiles.flatMap((f) => f.questions),
        casesMod.cases
      );
    })();
  }
  return cache;
}

export function buildBundle(lessons: Lesson[], interview: InterviewQuestion[], cases: CaseStudy[]): ContentBundle {
  const lessonById: ContentBundle['lessonById'] = {};
  const questionById: ContentBundle['questionById'] = {};
  const flashcards: ContentBundle['flashcards'] = [];
  for (const lesson of lessons) {
    lessonById[lesson.id] = lesson;
    for (const q of lesson.questions) questionById[q.id] = { ...q, lessonId: lesson.id, academyId: lesson.academyId };
    for (const c of lesson.flashcards) flashcards.push({ ...c, lessonId: lesson.id, academyId: lesson.academyId });
  }
  for (const cs of cases) for (const q of cs.questions) questionById[q.id] = { ...q, lessonId: `case:${cs.id}`, academyId: 'cases' };
  return { lessons, lessonById, questionById, flashcards, interview, cases };
}
