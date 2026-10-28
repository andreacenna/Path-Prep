import Dexie, { type Table } from 'dexie';
import type { Lang } from '../content/types';

/**
 * Local-first persistence (IndexedDB via Dexie). Nothing leaves the device unless the
 * learner exports a backup file themselves.
 */

export interface Settings {
  id: 'settings';
  lang: Lang;
  dailyGoalXP: number;
  name: string;
  onboarded: boolean;
  activePath: string | null; // academy id of the selected learning path
  reducedMotion: boolean;
  speechConsent: boolean; // permission to use the browser's speech recognition (may use a cloud service)
  saveRecordings: boolean; // keep interview audio locally
  reminderHour: number | null; // local reminder hour (notifications)
  createdAt: number;
}

export interface LessonProgress {
  lessonId: string;
  academyId: string;
  status: 'started' | 'completed';
  lastScreen: number;
  bestScore: number; // 0..1 first-try accuracy on lesson exercises
  lastScore: number;
  attempts: number;
  completedAt?: number;
  updatedAt: number;
}

export interface Attempt {
  id?: number;
  questionId: string;
  topic: string;
  academyId: string;
  correct: boolean;
  difficulty: number;
  timeMs: number;
  source: 'lesson' | 'quiz' | 'daily' | 'formula' | 'deal' | 'interview' | 'news' | 'review';
  ts: number;
  day: string;
}

export interface CardState {
  cardId: string;
  topic: string;
  academyId: string;
  lessonId: string;
  due: number;
  stability: number;
  difficulty: number;
  elapsed_days: number;
  scheduled_days: number;
  learning_steps: number;
  reps: number;
  lapses: number;
  state: number; // 0 New, 1 Learning, 2 Review, 3 Relearning
  last_review?: number;
  addedAt: number;
}

export interface ReviewLog {
  id?: number;
  cardId: string;
  rating: number;
  ts: number;
  day: string;
}

export interface XpEvent {
  id?: number;
  amount: number;
  reason: string;
  ts: number;
  day: string;
}

export interface Achievement {
  id: string;
  unlockedAt: number;
}

export interface InterviewAttempt {
  id?: number;
  questionId: string;
  type: 'technical' | 'behavioral';
  topic: string;
  mode: 'written' | 'voice' | 'mock';
  answer: string; // typed answer or (corrected) transcript
  rubricChecked: number[];
  verdict: 'correct' | 'partial' | 'incorrect';
  selfRating?: number; // 1..5 delivery self-rating
  durationSec: number;
  audioId?: number;
  ts: number;
  day: string;
}

export interface Recording {
  id?: number;
  blob: Blob;
  mime: string;
  ts: number;
}

export interface Story {
  id?: number;
  title: string;
  experienceId?: string; // link to a verified CV entry
  situation: string;
  task: string;
  action: string;
  result: string;
  learning: string;
  tags: string[]; // behavioral topics this story can answer
  updatedAt: number;
}

export type CvSection = 'education' | 'experience' | 'investment' | 'leadership' | 'extracurricular' | 'projects' | 'skills' | 'languages' | 'achievements';

export interface CvEntry {
  id: string;
  section: CvSection;
  title: string; // role / degree / skill group
  org: string;
  period: string;
  location: string;
  bullets: string[];
  verified: boolean; // confirmed by the learner
  origin: 'cv' | 'manual' | 'brief';
}

export interface CvProfile {
  id: 'cv';
  fileName?: string;
  rawText?: string;
  importedAt?: number;
  entries: CvEntry[];
}

export interface NewsQuizResult {
  id?: number;
  itemId: string;
  correct: boolean;
  ts: number;
}

export class PathDB extends Dexie {
  settings!: Table<Settings, string>;
  lessonProgress!: Table<LessonProgress, string>;
  attempts!: Table<Attempt, number>;
  cards!: Table<CardState, string>;
  reviewLogs!: Table<ReviewLog, number>;
  xp!: Table<XpEvent, number>;
  achievements!: Table<Achievement, string>;
  interviewAttempts!: Table<InterviewAttempt, number>;
  recordings!: Table<Recording, number>;
  stories!: Table<Story, number>;
  cv!: Table<CvProfile, string>;
  newsQuiz!: Table<NewsQuizResult, number>;

  constructor(name = 'path-academy') {
    super(name);
    this.version(1).stores({
      settings: 'id',
      lessonProgress: 'lessonId, academyId, status, updatedAt',
      attempts: '++id, questionId, topic, academyId, day, ts, source',
      cards: 'cardId, due, topic, academyId, lessonId, state',
      reviewLogs: '++id, cardId, day, ts',
      xp: '++id, day, ts',
      achievements: 'id, unlockedAt',
      interviewAttempts: '++id, questionId, topic, type, day, ts',
      recordings: '++id, ts',
      stories: '++id, updatedAt',
      cv: 'id',
      newsQuiz: '++id, itemId, ts'
    });
  }
}

export const db = new PathDB();

export const DEFAULT_SETTINGS: Settings = {
  id: 'settings',
  lang: (typeof navigator !== 'undefined' && navigator.language?.toLowerCase().startsWith('it') ? 'it' : 'en'),
  dailyGoalXP: 50,
  name: '',
  onboarded: false,
  activePath: 'accounting',
  reducedMotion: false,
  speechConsent: false,
  saveRecordings: false,
  reminderHour: null,
  createdAt: Date.now()
};

export async function getSettings(database: PathDB = db): Promise<Settings> {
  const s = await database.settings.get('settings');
  if (s) return { ...DEFAULT_SETTINGS, ...s };
  await database.settings.put(DEFAULT_SETTINGS);
  return DEFAULT_SETTINGS;
}

export async function updateSettings(patch: Partial<Settings>, database: PathDB = db): Promise<void> {
  const s = await getSettings(database);
  await database.settings.put({ ...s, ...patch, id: 'settings' });
}
