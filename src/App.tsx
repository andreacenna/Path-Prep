import { lazy, Suspense } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { AppProvider, useApp } from './state/app';
import { Layout } from './components/Layout';
import { Spinner } from './components/ui';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Home } from './pages/Home';
import { Onboarding } from './pages/Onboarding';
import { useReminders } from './lib/notifications';

// Route-level code splitting keeps the first load small on mobile.
const Learn = lazy(() => import('./pages/Learn'));
const AcademyPage = lazy(() => import('./pages/AcademyPage'));
const LessonPlayer = lazy(() => import('./pages/LessonPlayer'));
const Practice = lazy(() => import('./pages/Practice'));
const QuizSession = lazy(() => import('./pages/QuizSession'));
const Flashcards = lazy(() => import('./pages/Flashcards'));
const FormulaTrainer = lazy(() => import('./pages/FormulaTrainer'));
const Interviews = lazy(() => import('./pages/Interviews'));
const InterviewQuestionPage = lazy(() => import('./pages/InterviewQuestionPage'));
const InterviewList = lazy(() => import('./pages/InterviewList'));
const MockInterview = lazy(() => import('./pages/MockInterview'));
const StoryBank = lazy(() => import('./pages/StoryBank'));
const Personalized = lazy(() => import('./pages/Personalized'));
const News = lazy(() => import('./pages/News'));
const Profile = lazy(() => import('./pages/Profile'));
const CvPage = lazy(() => import('./pages/CvPage'));
const Cases = lazy(() => import('./pages/Cases'));
const CasePage = lazy(() => import('./pages/CasePage'));
const About = lazy(() => import('./pages/About'));

function Gate() {
  const { settings, ready } = useApp();
  useReminders();
  if (!ready) return <Spinner />;
  if (!settings.onboarded) return <Onboarding />;
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/lesson/:lessonId" element={<LessonPlayer />} />
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="learn" element={<Learn />} />
          <Route path="learn/:academyId" element={<AcademyPage />} />
          <Route path="cases" element={<Cases />} />
          <Route path="cases/:caseId" element={<CasePage />} />
          <Route path="practice" element={<Practice />} />
          <Route path="practice/session/:mode" element={<QuizSession />} />
          <Route path="practice/flashcards" element={<Flashcards />} />
          <Route path="practice/formulas" element={<FormulaTrainer />} />
          <Route path="interviews" element={<Interviews />} />
          <Route path="interviews/list/:type" element={<InterviewList />} />
          <Route path="interviews/q/:id" element={<InterviewQuestionPage />} />
          <Route path="interviews/mock" element={<MockInterview />} />
          <Route path="interviews/stories" element={<StoryBank />} />
          <Route path="interviews/personalized" element={<Personalized />} />
          <Route path="news" element={<News />} />
          <Route path="profile" element={<Profile />} />
          <Route path="profile/cv" element={<CvPage />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export function App() {
  return (
    <AppProvider>
      <HashRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <ErrorBoundary>
          <Gate />
        </ErrorBoundary>
      </HashRouter>
    </AppProvider>
  );
}
