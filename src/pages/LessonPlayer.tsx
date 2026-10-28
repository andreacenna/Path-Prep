import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { X, Lightbulb, Cog, Sigma, Calculator, Globe2, PencilLine, MessageSquareQuote, AlertTriangle, ListChecks, Target, Trophy, BookOpen } from 'lucide-react';
import { STUB_INDEX } from '../content/curriculum';
import type { Cell, Lesson, Screen, Table } from '../content/types';
import { useApp } from '../state/app';
import { db } from '../db/db';
import { completeLesson, recordAttempt, saveLessonPosition } from '../lib/actions';
import { PASS_SCORE } from '../lib/recommend';
import { Markup } from '../components/Markup';
import { QuestionView } from '../components/QuestionView';
import { Button, Chip, ProgressBar, Ring, Spinner } from '../components/ui';
import type { UIKey } from '../i18n/ui';

const SCREEN_META: Record<Screen['type'], { key: UIKey; icon: typeof Lightbulb; color: string }> = {
  intuition: { key: 'lesson.intuition', icon: Lightbulb, color: 'text-amber-300' },
  technical: { key: 'lesson.technical', icon: Cog, color: 'text-electric-400' },
  formula: { key: 'lesson.formula', icon: Sigma, color: 'text-teal-300' },
  example: { key: 'lesson.example', icon: Calculator, color: 'text-electric-400' },
  realworld: { key: 'lesson.realworld', icon: Globe2, color: 'text-teal-300' },
  exercise: { key: 'lesson.exercise', icon: PencilLine, color: 'text-electric-400' },
  interview: { key: 'lesson.interview', icon: MessageSquareQuote, color: 'text-amber-300' },
  mistakes: { key: 'lesson.mistakes', icon: AlertTriangle, color: 'text-rose-300' },
  summary: { key: 'lesson.summary', icon: ListChecks, color: 'text-teal-300' }
};

export function DataTable({ table }: { table: Table }) {
  const { l } = useApp();
  const cell = (c: Cell) => (typeof c === 'object' ? l(c) : String(c));
  return (
    <figure className="-mx-4 overflow-x-auto px-4">
      <table className="w-full min-w-[360px] border-collapse text-sm">
        {table.caption && <caption className="mb-2 text-left text-xs text-slate-400">{l(table.caption)}</caption>}
        <thead>
          <tr>{table.headers.map((h, i) => <th key={i} className={`border-b border-white/10 px-2 py-2 text-xs font-semibold uppercase tracking-wide text-slate-400 ${i ? 'text-right' : 'text-left'}`}>{l(h)}</th>)}</tr>
        </thead>
        <tbody>
          {table.rows.map((r, ri) => {
            const total = table.totalRows?.includes(ri);
            return (
              <tr key={ri} className={total ? 'border-t-2 border-white/20 font-semibold text-white' : 'border-b border-white/5'}>
                {r.map((c, ci) => <td key={ci} className={`px-2 py-1.5 ${ci ? 'text-right font-mono' : ''} ${total ? 'text-white' : 'text-slate-200'}`}>{cell(c)}</td>)}
              </tr>
            );
          })}
        </tbody>
      </table>
    </figure>
  );
}

function ScreenBody({ screen }: { screen: Exclude<Screen, { type: 'exercise' }> }) {
  const { t, l } = useApp();
  const [revealed, setRevealed] = useState(false);
  switch (screen.type) {
    case 'intuition':
    case 'technical':
    case 'realworld':
    case 'example':
      return (
        <div className="space-y-4">
          {'title' in screen && screen.title && <h2 className="text-xl font-bold text-white">{l(screen.title)}</h2>}
          <Markup text={l(screen.body)} />
          {'table' in screen && screen.table && <DataTable table={screen.table} />}
          {screen.type === 'example' && screen.tables?.map((tb, i) => <DataTable key={i} table={tb} />)}
        </div>
      );
    case 'formula':
      return (
        <div className="space-y-4">
          {screen.title && <h2 className="text-xl font-bold text-white">{l(screen.title)}</h2>}
          {screen.formulas.map((f, i) => (
            <div key={i} className="rounded-2xl border border-teal-500/30 bg-teal-500/5 p-4">
              <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-teal-300">{l(f.name)}</div>
              <div className="overflow-x-auto whitespace-pre-wrap font-mono text-[0.95rem] leading-relaxed text-white">{f.expr}</div>
              {f.vars && (
                <dl className="mt-3 space-y-1 text-sm">
                  {f.vars.map((v) => (
                    <div key={v.sym} className="flex gap-2"><dt className="shrink-0 font-mono text-teal-300">{v.sym}</dt><dd className="text-slate-300">{l(v.desc)}</dd></div>
                  ))}
                </dl>
              )}
            </div>
          ))}
          {screen.note && <Markup text={l(screen.note)} className="text-sm" />}
        </div>
      );
    case 'interview':
      return (
        <div className="space-y-4">
          <blockquote className="rounded-2xl border-l-4 border-amber-300 bg-navy-800 p-4 text-lg font-semibold text-white">“{l(screen.question)}”</blockquote>
          {!revealed ? (
            <div className="text-center">
              <p className="mb-3 text-sm text-slate-400">{t('lesson.revealAnswer')}</p>
              <Button variant="secondary" onClick={() => setRevealed(true)}>{t('lesson.reveal')}</Button>
            </div>
          ) : (
            <div className="animate-pop rounded-2xl bg-navy-800/60 p-4"><Markup text={l(screen.answer)} /></div>
          )}
        </div>
      );
    case 'mistakes':
      return (
        <ul className="space-y-3">
          {screen.items.map((m, i) => (
            <li key={i} className="flex gap-3 rounded-xl border border-rose-500/20 bg-rose-500/5 p-3">
              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-rose-300" />
              <Markup text={l(m)} className="text-sm" />
            </li>
          ))}
        </ul>
      );
    case 'summary':
      return (
        <ul className="space-y-3">
          {screen.items.map((m, i) => (
            <li key={i} className="flex gap-3 rounded-xl border border-teal-500/20 bg-teal-500/5 p-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-400 text-xs font-bold text-navy-950">{i + 1}</span>
              <Markup text={l(m)} className="text-sm" />
            </li>
          ))}
        </ul>
      );
  }
}

export default function LessonPlayer() {
  const { lessonId = '' } = useParams();
  const { t, l, content, afterAction } = useApp();
  const nav = useNavigate();
  const lesson: Lesson | undefined = content?.lessonById[lessonId];
  const loc = STUB_INDEX[lessonId];
  const [idx, setIdx] = useState<number | null>(null); // -1 = intro
  const [results, setResults] = useState<Record<string, boolean>>({});
  const [done, setDone] = useState<null | { score: number; xp: number; first: boolean }>(null);
  const finishing = useRef(false);

  // Resume where the learner left off.
  useEffect(() => {
    if (!lesson || idx !== null) return;
    db.lessonProgress.get(lesson.id).then((p) => setIdx(p && p.status === 'started' && p.lastScreen > 0 && p.lastScreen < lesson.screens.length ? p.lastScreen : -1));
  }, [lesson, idx]);

  const exerciseCount = useMemo(() => lesson?.screens.filter((s) => s.type === 'exercise').length ?? 0, [lesson]);

  if (!content) return <Spinner />;
  if (!lesson || !loc) {
    return (
      <div className="mx-auto max-w-lg p-6 text-center text-slate-300">
        <p className="mb-4">{t('lesson.notAvailable')}</p>
        <Link to={loc ? `/learn/${loc.academy.id}` : '/learn'}><Button variant="secondary">{t('lesson.backToAcademy')}</Button></Link>
      </div>
    );
  }
  if (idx === null) return <Spinner />;

  const screen = idx >= 0 ? lesson.screens[idx] : null;
  const goNext = async () => {
    const next = idx + 1;
    if (next >= lesson.screens.length) {
      if (finishing.current) return;
      finishing.current = true;
      const correct = Object.values(results).filter(Boolean).length;
      const score = exerciseCount ? correct / exerciseCount : 1;
      const r = await completeLesson(lesson.id, lesson.academyId, score, lesson.flashcards);
      setDone({ score, xp: r.xp, first: r.firstCompletion });
      void afterAction(r.xp);
      return;
    }
    setIdx(next);
    void saveLessonPosition(lesson.id, lesson.academyId, next);
    window.scrollTo(0, 0);
  };

  const exit = () => nav(`/learn/${loc.academy.id}`);

  if (done) {
    return (
      <div className="min-h-screen bg-navy-950 px-4 py-10 text-slate-100">
        <div className="mx-auto max-w-md animate-rise text-center">
          <Trophy className="mx-auto mb-3 h-14 w-14 text-amber-300" />
          <h1 className="text-2xl font-extrabold">{t('lesson.complete')}</h1>
          <p className="mb-6 text-slate-400">{l(loc.stub.title)}</p>
          <div className="mb-6 flex items-center justify-center gap-6">
            <Ring value={done.score} size={96} label={t('lesson.firstTry')}>
              <span className="text-xl font-extrabold">{Math.round(done.score * 100)}%</span>
            </Ring>
            <div className="text-left">
              <div className="text-3xl font-extrabold text-teal-300">+{done.xp} XP</div>
              <div className="text-sm text-slate-400">{t('lesson.firstTry')}</div>
            </div>
          </div>
          {done.score < PASS_SCORE && <p className="mb-4 rounded-xl bg-amber-500/10 p-3 text-sm text-amber-200">{t('lesson.passNote')}</p>}
          <p className="mb-6 text-sm text-slate-400">{t('lesson.cardsAdded', { n: lesson.flashcards.length })}</p>
          {lesson.sources?.length ? (
            <div className="mb-6 rounded-xl bg-navy-850 p-3 text-left text-xs text-slate-400">
              <div className="mb-1 font-semibold text-slate-300">{t('common.sources')} · {t('common.reviewed')} {lesson.reviewed}</div>
              <ul className="space-y-1">{lesson.sources.map((s, i) => <li key={i}>{s.url ? <a className="underline hover:text-white" href={s.url} target="_blank" rel="noopener noreferrer">{s.label}</a> : s.label}</li>)}</ul>
            </div>
          ) : null}
          <div className="space-y-2">
            <Button full size="lg" onClick={exit}>{t('lesson.backToAcademy')}</Button>
            <Button full variant="ghost" onClick={() => { setDone(null); setResults({}); finishing.current = false; setIdx(-1); }}>{t('lesson.retake')}</Button>
          </div>
        </div>
      </div>
    );
  }

  const meta = screen ? SCREEN_META[screen.type] : null;
  const MetaIcon = meta?.icon ?? Target;

  return (
    <div className="min-h-screen bg-navy-950 text-slate-100">
      <div className="sticky top-0 z-20 border-b border-white/5 bg-navy-950/95 backdrop-blur" style={{ paddingTop: 'env(safe-area-inset-top)' }}>
        <div className="mx-auto flex max-w-2xl items-center gap-3 px-4 py-3">
          <button onClick={exit} className="rounded-lg p-1.5 text-slate-400 hover:bg-white/5 hover:text-white" aria-label={t('common.close')} title={t('lesson.quit')}>
            <X className="h-6 w-6" />
          </button>
          <ProgressBar value={(idx + 1) / lesson.screens.length} />
          <span className="shrink-0 text-xs tabular-nums text-slate-400">{Math.max(0, idx + 1)}/{lesson.screens.length}</span>
        </div>
      </div>

      <main className="mx-auto max-w-2xl px-4 pb-32 pt-6">
        {idx === -1 ? (
          <div className="animate-rise">
            <div className="mb-2 flex flex-wrap gap-1.5">
              <Chip tone="blue">{t(lesson.mode === 'quick' ? 'common.quick' : 'common.deep')}</Chip>
              <Chip>{lesson.minutes} {t('common.minutes')}</Chip>
              <Chip>{t(`common.diff${lesson.difficulty}` as UIKey)}</Chip>
            </div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">{l(loc.academy.title)} · {loc.module.id}</p>
            <h1 className="mb-6 mt-1 text-3xl font-extrabold leading-tight text-white">{l(loc.stub.title)}</h1>
            <div className="mb-8 rounded-2xl border border-electric-500/30 bg-electric-500/10 p-4">
              <div className="mb-1 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-electric-400"><Target className="h-4 w-4" />{t('lesson.objective')}</div>
              <p className="text-white">{l(lesson.objective)}</p>
            </div>
            <p className="mb-6 flex items-center gap-2 text-sm text-slate-400"><BookOpen className="h-4 w-4" />{lesson.screens.length} · {exerciseCount} {t('common.questions')} · {lesson.flashcards.length} flashcards</p>
            <Button full size="lg" onClick={goNext}>{t('common.start')}</Button>
          </div>
        ) : screen && meta ? (
          <div key={idx} className="animate-rise">
            <div className={`mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wider ${meta.color}`}>
              <MetaIcon className="h-4 w-4" /> {t(meta.key)}
            </div>
            {screen.type === 'exercise' ? (
              (() => {
                const q = lesson.questions.find((x) => x.id === screen.questionId);
                if (!q) return null;
                return (
                  <QuestionView
                    key={q.id}
                    question={q}
                    onResult={async (r) => {
                      setResults((prev) => (q.id in prev ? prev : { ...prev, [q.id]: r.correct }));
                      const { xp } = await recordAttempt({ questionId: q.id, topic: q.topic, academyId: lesson.academyId, correct: r.correct, difficulty: q.difficulty, timeMs: r.timeMs, source: 'lesson' });
                      void afterAction(xp);
                    }}
                    onContinue={goNext}
                  />
                );
              })()
            ) : (
              <>
                <ScreenBody screen={screen} />
                <div className="fixed inset-x-0 bottom-0 border-t border-white/5 bg-navy-950/95 px-4 py-3 backdrop-blur" style={{ paddingBottom: 'calc(env(safe-area-inset-bottom) + 12px)' }}>
                  <div className="mx-auto max-w-2xl">
                    <Button full size="lg" onClick={goNext}>{idx === lesson.screens.length - 1 ? t('common.done') : t('common.continue')}</Button>
                  </div>
                </div>
              </>
            )}
          </div>
        ) : null}
      </main>
    </div>
  );
}
