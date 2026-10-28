/**
 * PATH Academy content model.
 *
 * Every learner-facing string is bilingual (`L`). Content is authored as typed
 * TypeScript data so the compiler and the content tests (tests/unit/content.test.ts)
 * can enforce completeness: both languages present, every question has a verified
 * answer, explanation, difficulty, topic and learning objective, and numerical
 * answers are recomputed from the deterministic finance library where a `verify`
 * spec is provided.
 */

export type Lang = 'en' | 'it';

/** A bilingual string. Light markup supported in bodies: **bold**, `code`, lines starting with "- " become bullets, blank line = paragraph. */
export interface L {
  en: string;
  it: string;
}

export type Difficulty = 1 | 2 | 3; // 1 = foundation, 2 = intermediate, 3 = advanced (interview-level)

export type AcademyId =
  | 'accounting'
  | 'corporate-finance'
  | 'valuation'
  | 'ma'
  | 'private-equity'
  | 'investment-banking'
  | 'capital-markets'
  | 'markets'
  | 'modelling'
  | 'interviews'
  | 'cases';

/* ------------------------------------------------------------------ */
/* Curriculum hierarchy: Academy → Module (chapter) → Lesson           */
/* ------------------------------------------------------------------ */

export interface LessonStub {
  id: string; // globally unique, kebab-case, e.g. "acc-accounting-equation"
  title: L;
  /** Subchapter topics this lesson will cover (shown in the syllabus even before content exists). */
  covers?: L[];
}

export interface Module {
  id: string; // e.g. "A1"
  title: L;
  description: L;
  lessons: LessonStub[];
}

export interface Academy {
  id: AcademyId;
  order: number;
  icon: string; // lucide icon name, see components/Icon.tsx
  accent: string; // tailwind gradient classes
  title: L;
  tagline: L;
  modules: Module[];
}

/* ------------------------------------------------------------------ */
/* Questions                                                           */
/* ------------------------------------------------------------------ */

/**
 * A recomputation spec: the content test calls finance[fn](...args) and checks
 * the result equals the stated answer within tolerance. Use whenever a numeric
 * answer can be derived from a function in src/lib/finance.ts.
 */
export interface VerifySpec {
  fn: string;
  args: unknown[];
  /** Optional index/key into the function's return value if it returns an array/object. */
  pick?: string | number;
  /** Multiply the (picked) result, e.g. 100 to express a decimal rate in percentage points. */
  scale?: number;
}

export interface Tolerance {
  abs?: number; // absolute tolerance
  rel?: number; // relative tolerance (0.01 = 1%)
}

interface QuestionBase {
  id: string; // globally unique
  topic: string; // topic tag, kebab-case; used for mastery tracking (see TOPICS in topics.ts)
  difficulty: Difficulty;
  objective: L; // learning objective this question assesses
  prompt: L;
  explanation: L; // why the answer is right (and why tempting wrong answers are wrong)
}

export interface McqQuestion extends QuestionBase {
  kind: 'mcq';
  choices: L[];
  correct: number; // index into choices
}

export interface MultiQuestion extends QuestionBase {
  kind: 'multi'; // select all that apply
  choices: L[];
  correct: number[];
}

export interface NumericQuestion extends QuestionBase {
  kind: 'numeric';
  answer: number;
  unit?: string; // e.g. "%", "€m", "$m", "x", "years"
  /** Default: abs 0.01, rel 0.005 — answer accepted if within the larger of the two. */
  tolerance?: Tolerance;
  verify?: VerifySpec;
  /** Optional worked solution steps (shown after answering). */
  steps?: L[];
}

export interface OrderQuestion extends QuestionBase {
  kind: 'order'; // put the items in the correct sequence; `items` is authored IN THE CORRECT ORDER and shuffled at runtime
  items: L[];
}

/** Spreadsheet-like exercise: fill the blank cells. */
export interface GridCell {
  answer: number;
  tolerance?: Tolerance;
  verify?: VerifySpec;
}
export interface GridQuestion extends QuestionBase {
  kind: 'grid';
  columns: L[];
  /** Each row: first cell is a label; other cells are a fixed display string/number or a GridCell to fill in. */
  rows: { label: L; cells: (string | number | GridCell)[] }[];
  unit?: string;
}

export type Question = McqQuestion | MultiQuestion | NumericQuestion | OrderQuestion | GridQuestion;

/* ------------------------------------------------------------------ */
/* Lessons                                                             */
/* ------------------------------------------------------------------ */

export type Cell = string | number | L;

export interface Table {
  caption?: L;
  headers: L[];
  rows: Cell[][];
  /** index of a row to style as a total line */
  totalRows?: number[];
}

export interface Formula {
  name: L;
  expr: string; // plain-text formula, e.g. "WACC = E/V × Re + D/V × Rd × (1 − t)"
  vars?: { sym: string; desc: L }[];
}

export type Screen =
  | { type: 'intuition'; title?: L; body: L }
  | { type: 'technical'; title?: L; body: L; table?: Table }
  | { type: 'formula'; title?: L; formulas: Formula[]; note?: L }
  | { type: 'example'; title?: L; body: L; table?: Table; tables?: Table[] }
  | { type: 'realworld'; title?: L; body: L }
  | { type: 'exercise'; questionId: string } // must reference a question in Lesson.questions
  | { type: 'interview'; question: L; answer: L }
  | { type: 'mistakes'; items: L[] }
  | { type: 'summary'; items: L[] };

export interface Flashcard {
  id: string; // globally unique
  front: L;
  back: L;
  topic: string;
}

export interface Lesson {
  id: string; // must match a LessonStub id in curriculum.ts
  academyId: AcademyId;
  moduleId: string;
  mode: 'quick' | 'deep'; // quick = 2–5 min, deep = 10–20 min
  minutes: number;
  difficulty: Difficulty;
  objective: L;
  /**
   * Ordered short screens. A complete lesson contains, in a sensible order:
   * intuition, technical, formula (unless `qualitative: true`), example, realworld,
   * at least one exercise, interview, mistakes, summary.
   */
  screens: Screen[];
  /** Set true for conceptual/process lessons where no formula is relevant. */
  qualitative?: boolean;
  /** Questions used by exercise screens and by Quick Quiz / Daily Challenge practice. */
  questions: Question[];
  flashcards: Flashcard[];
  /** Standards/facts that were checked, with source and date — shown at the end of the lesson. */
  sources?: { label: string; url?: string }[];
  /** Date the content was last reviewed for accuracy (YYYY-MM). */
  reviewed: string;
}

/* ------------------------------------------------------------------ */
/* Interview bank                                                      */
/* ------------------------------------------------------------------ */

export interface RubricPoint {
  text: L;
  essential: boolean; // an answer missing an essential point cannot be "Correct"
}

export interface InterviewQuestion {
  id: string;
  type: 'technical' | 'behavioral';
  topic: string; // e.g. "accounting", "valuation", "dcf", "ma", "lbo", "why-ib", "leadership"
  difficulty: Difficulty;
  prompt: L;
  /** A strong reference answer written for the interview setting (concise, structured). */
  reference: L;
  rubric: RubricPoint[];
  followUps?: L[];
  /** Optional exact numeric answer for numeric technical questions (auto-graded). */
  numeric?: { answer: number; unit?: string; tolerance?: Tolerance; verify?: VerifySpec };
  /** Suggested answer time in seconds. */
  seconds?: number;
}

/* ------------------------------------------------------------------ */
/* Deal case studies                                                   */
/* ------------------------------------------------------------------ */

export type DealStatus = 'announced' | 'pending' | 'completed' | 'withdrawn' | 'blocked' | 'terminated';

export interface CaseStudy {
  id: string;
  title: L; // e.g. "Microsoft / Activision Blizzard"
  buyer: string;
  target: string;
  sector: 'technology' | 'healthcare' | 'consumer' | 'industrials' | 'financials' | 'media' | 'energy' | 'automotive' | 'telecom';
  tags: ('lbo' | 'hostile' | 'failed' | 'regulatory' | 'cross-border' | 'europe' | 'us' | 'italy' | 'merger-of-equals' | 'stock-deal' | 'cash-deal')[];
  announced: string; // YYYY-MM-DD
  closedOrEnded?: string; // YYYY-MM-DD
  status: DealStatus;
  value: L; // headline transaction value as publicly reported, with currency and basis
  rationale: L;
  valuation: L;
  financing: L;
  structure: L;
  regulatory: L;
  outcome: L;
  accounting: L;
  interviewLessons: L[];
  /** Deal Challenge questions about this case. */
  questions: Question[];
  sources: { label: string; url?: string }[];
  reviewed: string;
}
