import type { L } from '../content/types';

export interface Stats {
  totalXP: number;
  streak: number;
  longestStreak: number;
  lessonsCompleted: number;
  perfectLessons: number;
  cardsReviewed: number;
  questionsCorrect: number;
  interviewAttempts: number;
  mockInterviews: number;
  dailyChallenges: number;
  masteredTopics: number;
  academiesStarted: number;
  storiesWritten: number;
  newsQuizzes: number;
}

export interface AchievementDef {
  id: string;
  icon: string;
  title: L;
  desc: L;
  check: (s: Stats) => boolean;
}

export const ACHIEVEMENTS: AchievementDef[] = [
  { id: 'first-lesson', icon: 'Flag', title: { en: 'First Day on the Desk', it: 'Primo giorno in ufficio' }, desc: { en: 'Complete your first lesson.', it: 'Completa la tua prima lezione.' }, check: (s) => s.lessonsCompleted >= 1 },
  { id: 'ten-lessons', icon: 'BookMarked', title: { en: 'Building the Model', it: 'Il modello prende forma' }, desc: { en: 'Complete 10 lessons.', it: 'Completa 10 lezioni.' }, check: (s) => s.lessonsCompleted >= 10 },
  { id: 'fifty-lessons', icon: 'Library', title: { en: 'Technical Monster', it: 'Mostro tecnico' }, desc: { en: 'Complete 50 lessons.', it: 'Completa 50 lezioni.' }, check: (s) => s.lessonsCompleted >= 50 },
  { id: 'perfect', icon: 'Target', title: { en: 'Zero Typos', it: 'Zero refusi' }, desc: { en: 'Finish a lesson with 100% first-try accuracy.', it: 'Completa una lezione con il 100% al primo tentativo.' }, check: (s) => s.perfectLessons >= 1 },
  { id: 'streak-3', icon: 'Flame', title: { en: 'Warming Up', it: 'Riscaldamento' }, desc: { en: 'Reach a 3-day streak.', it: 'Raggiungi una serie di 3 giorni.' }, check: (s) => s.longestStreak >= 3 },
  { id: 'streak-7', icon: 'Flame', title: { en: 'Full Week', it: 'Settimana piena' }, desc: { en: 'Reach a 7-day streak.', it: 'Raggiungi una serie di 7 giorni.' }, check: (s) => s.longestStreak >= 7 },
  { id: 'streak-30', icon: 'Trophy', title: { en: 'Deal Season', it: 'Stagione dei deal' }, desc: { en: 'Reach a 30-day streak.', it: 'Raggiungi una serie di 30 giorni.' }, check: (s) => s.longestStreak >= 30 },
  { id: 'xp-500', icon: 'Zap', title: { en: 'Summer Analyst Material', it: 'Stoffa da Summer Analyst' }, desc: { en: 'Earn 500 XP.', it: 'Guadagna 500 XP.' }, check: (s) => s.totalXP >= 500 },
  { id: 'xp-5000', icon: 'Gem', title: { en: 'Top Bucket', it: 'Top bucket' }, desc: { en: 'Earn 5,000 XP.', it: 'Guadagna 5.000 XP.' }, check: (s) => s.totalXP >= 5000 },
  { id: 'cards-100', icon: 'Layers', title: { en: 'Active Recall', it: 'Richiamo attivo' }, desc: { en: 'Review 100 flashcards.', it: 'Ripassa 100 flashcard.' }, check: (s) => s.cardsReviewed >= 100 },
  { id: 'q-100', icon: 'CheckCheck', title: { en: 'Century', it: 'Cento risposte' }, desc: { en: 'Answer 100 questions correctly.', it: 'Rispondi correttamente a 100 domande.' }, check: (s) => s.questionsCorrect >= 100 },
  { id: 'interview-1', icon: 'Mic', title: { en: 'In the Room', it: 'Nella stanza' }, desc: { en: 'Complete an interview practice attempt.', it: 'Completa una prova di colloquio.' }, check: (s) => s.interviewAttempts >= 1 },
  { id: 'mock-1', icon: 'Timer', title: { en: 'Superday Ready', it: 'Pronto per il Superday' }, desc: { en: 'Finish a full mock interview.', it: 'Completa un mock interview.' }, check: (s) => s.mockInterviews >= 1 },
  { id: 'daily-5', icon: 'CalendarCheck', title: { en: 'Daily Habit', it: 'Abitudine quotidiana' }, desc: { en: 'Complete 5 daily challenges.', it: 'Completa 5 sfide giornaliere.' }, check: (s) => s.dailyChallenges >= 5 },
  { id: 'master-1', icon: 'Award', title: { en: 'Subject Matter Expert', it: 'Esperto della materia' }, desc: { en: 'Reach Mastered on a topic.', it: 'Raggiungi il livello Padroneggiato su un argomento.' }, check: (s) => s.masteredTopics >= 1 },
  { id: 'polymath', icon: 'Compass', title: { en: 'Generalist', it: 'Generalista' }, desc: { en: 'Start lessons in 5 different academies.', it: 'Inizia lezioni in 5 accademie diverse.' }, check: (s) => s.academiesStarted >= 5 },
  { id: 'storyteller', icon: 'NotebookPen', title: { en: 'Storyteller', it: 'Narratore' }, desc: { en: 'Write 3 stories in your Story Bank.', it: 'Scrivi 3 storie nella tua Story Bank.' }, check: (s) => s.storiesWritten >= 3 },
  { id: 'news-1', icon: 'Newspaper', title: { en: 'Commercially Aware', it: 'Consapevolezza commerciale' }, desc: { en: 'Complete a news quiz.', it: 'Completa un quiz sulle notizie.' }, check: (s) => s.newsQuizzes >= 1 }
];
