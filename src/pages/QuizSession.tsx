import { useEffect, useMemo, useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { useLiveQuery } from 'dexie-react-hooks';
import { Trophy } from 'lucide-react';
import { useApp } from '../state/app';
import { useAttempts, useLessonProgress, useTopicMastery } from '../state/hooks';
import { dailyChallenge, mistakeQueue, pickQuiz, shuffleSeeded, allQuestions, type PracticeQuestion } from '../lib/practice';
import { awardXP, recordAttempt } from '../lib/actions';
import { XP } from '../lib/gamification';
import { dayKey } from '../lib/dates';
import { db, type Attempt } from '../db/db';
import { ACADEMIES } from '../content/curriculum';
import { QuestionView } from '../components/QuestionView';
import { Button, Card, Empty, PageHeader, ProgressBar, Ring, Spinner } from '../components/ui';
import type { UIKey } from '../i18n/ui';

type Mode = 'quick' | 'quiz' | 'numerical' | 'daily' | 'review' | 'news';
const TITLES: Record<Mode, UIKey> = { quick: 'home.quickPractice', quiz: 'practice.quiz', numerical: 'practice.numerical', daily: 'practice.daily', review: 'practice.review', news: 'news.quiz' };
const SOURCE: Record<Mode, Attempt['source']> = { quick: 'quiz', quiz: 'quiz', numerical: 'quiz', daily: 'daily', review: 'review', news: 'news' };

export default function QuizSession() {
  const { mode = 'quiz' } = useParams() as { mode: Mode };
  const [search] = useSearchParams();
  const { t, l, content, afterAction } = useApp();
  const progress = useLessonProgress();
  const attempts = useAttempts();
  const mastery = useTopicMastery();
  const [academy, setAcademy] = useState<string>('');
  const [onlyStudied, setOnlyStudied] = useState(false);
  const [queue, setQueue] = useState<PracticeQuestion[] | null>(null);
  const [i, setI] = useState(0);
  const [results, setResults] = useState<boolean[]>([]);
  const [finished, setFinished] = useState<null | { bonus: number }>(null);
  const today = dayKey();
  const dailyDone = useLiveQuery(() => db.xp.where('day').equals(today).filter((x) => x.reason === `daily:${today}`).count(), [today]) ?? 0;
  const needsSetup = mode === 'quiz' || mode === 'numerical';

  const build = useMemo(
    () => () => {
      if (!content) return [];
      switch (mode) {
        case 'quick': {
          const studied = pickQuiz(content, progress, { onlyStudied: true, count: 6 });
          if (studied.length >= 4) return studied;
          return [...studied, ...shuffleSeeded(allQuestions(content).filter((q) => q.difficulty === 1 && !studied.includes(q)), Math.random)].slice(0, 6);
        }
        case 'daily':
          return dailyChallenge(content, progress, today);
        case 'review':
          return mistakeQueue(content, attempts, mastery);
        case 'news': {
          const lessons = (search.get('lessons') ?? '').split(',').filter(Boolean);
          return shuffleSeeded(allQuestions(content).filter((q) => lessons.includes(q.lessonId)), Math.random).slice(0, 4);
        }
        default:
          return pickQuiz(content, progress, { academyId: academy || undefined, onlyStudied, numericOnly: mode === 'numerical', count: 10 });
      }
    },
    [content, mode, progress, attempts, mastery, academy, onlyStudied, today, search]
  );

  useEffect(() => {
    if (!needsSetup && content && queue === null) setQueue(build());
  }, [needsSetup, content, queue, build]);

  if (!content) return <Spinner />;

  const restart = () => {
    setQueue(needsSetup ? null : build());
    setI(0);
    setResults([]);
    setFinished(null);
  };

  if (queue === null) {
    if (!needsSetup) return <Spinner />;
    return (
      <div className="animate-rise">
        <PageHeader back="/practice" title={t(TITLES[mode])} subtitle={t(mode === 'numerical' ? 'practice.numericalDesc' : 'practice.quizDesc')} />
        <Card className="space-y-4">
          <label className="block">
            <span className="mb-1 block text-sm font-semibold text-slate-300">{t('practice.filterAcademy')}</span>
            <select value={academy} onChange={(e) => setAcademy(e.target.value)} className="w-full rounded-xl border border-white/10 bg-navy-800 px-3 py-3">
              <option value="">{t('common.all')}</option>
              {ACADEMIES.filter((a) => content.lessons.some((x) => x.academyId === a.id)).map((a) => <option key={a.id} value={a.id}>{l(a.title)}</option>)}
            </select>
          </label>
          <label className="flex items-center gap-3">
            <input type="checkbox" checked={onlyStudied} onChange={(e) => setOnlyStudied(e.target.checked)} className="h-5 w-5 accent-electric-500" />
            <span className="text-sm">{t('practice.onlyStudied')}</span>
          </label>
          <Button full size="lg" onClick={() => setQueue(build())}>{t('common.start')}</Button>
        </Card>
      </div>
    );
  }

  if (!queue.length) {
    return (
      <div className="animate-rise">
        <PageHeader back="/practice" title={t(TITLES[mode])} />
        <Empty>{mode === 'review' ? t('practice.noMistakes') : t('practice.noQuestions')}</Empty>
      </div>
    );
  }

  if (finished) {
    const score = results.filter(Boolean).length / results.length;
    return (
      <div className="animate-rise text-center">
        <Trophy className="mx-auto mb-3 mt-6 h-12 w-12 text-amber-300" />
        <h1 className="mb-4 text-2xl font-extrabold">{t('practice.finished')}</h1>
        <Ring value={score} size={110} label={t('common.score')}><span className="text-2xl font-extrabold">{results.filter(Boolean).length}/{results.length}</span></Ring>
        {finished.bonus > 0 && <p className="mt-4 text-lg font-bold text-teal-300">+{finished.bonus} XP</p>}
        <div className="mx-auto mt-6 max-w-xs space-y-2">
          {mode !== 'daily' && <Button full onClick={restart}>{t('practice.again')}</Button>}
          <Link to="/practice" className="block"><Button full variant="secondary">{t('common.back')}</Button></Link>
        </div>
      </div>
    );
  }

  const q = queue[i];
  const finish = async (res: boolean[]) => {
    let bonus = 0;
    if (mode === 'daily' && !dailyDone) {
      bonus = XP.dailyChallenge(res.filter(Boolean).length / res.length);
      await awardXP(Math.max(1, bonus), `daily:${today}`);
      void afterAction(bonus);
    }
    if (mode === 'news') {
      await db.newsQuiz.add({ itemId: search.get('item') ?? 'unknown', correct: res.every(Boolean), ts: Date.now() });
      void afterAction();
    }
    setFinished({ bonus });
  };

  return (
    <div>
      <div className="mb-5 flex items-center gap-3">
        <Link to="/practice" className="text-sm text-slate-400 hover:text-white">✕</Link>
        <ProgressBar value={i / queue.length} />
        <span className="text-xs tabular-nums text-slate-400">{i + 1}/{queue.length}</span>
      </div>
      {mode === 'daily' && dailyDone > 0 && i === 0 && <p className="mb-3 rounded-xl bg-teal-500/10 p-2 text-center text-xs text-teal-200">{t('home.dailyDone')}</p>}
      <QuestionView
        key={`${q.id}-${i}`}
        question={q}
        onResult={async (r) => {
          setResults((x) => [...x, r.correct]);
          const { xp } = await recordAttempt({ questionId: q.id, topic: q.topic, academyId: q.academyId, correct: r.correct, difficulty: q.difficulty, timeMs: r.timeMs, source: SOURCE[mode] });
          void afterAction(xp);
        }}
        onContinue={() => {
          if (i + 1 >= queue.length) void finish(results);
          else setI(i + 1);
        }}
      />
    </div>
  );
}
