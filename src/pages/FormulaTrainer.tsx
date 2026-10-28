import { useMemo, useState } from 'react';
import { Sigma, Flame, RefreshCw } from 'lucide-react';
import { useApp } from '../state/app';
import { DRILLS, type Drill } from '../lib/formulaDrills';
import { parseNumber, withinTolerance } from '../lib/grading';
import { recordAttempt } from '../lib/actions';
import { Button, Card, PageHeader } from '../components/ui';
import { Markup } from '../components/Markup';

export default function FormulaTrainer() {
  const { t, l, afterAction } = useApp();
  const [drill, setDrill] = useState<Drill>(DRILLS[0]);
  const [seed, setSeed] = useState(0);
  const [input, setInput] = useState('');
  const [checked, setChecked] = useState<null | boolean>(null);
  const [streak, setStreak] = useState(0);
  const [start, setStart] = useState(Date.now());
  const problem = useMemo(() => drill.generate(Math.random), [drill, seed]); // eslint-disable-line react-hooks/exhaustive-deps

  const next = () => {
    setSeed((s) => s + 1);
    setInput('');
    setChecked(null);
    setStart(Date.now());
  };
  const check = async () => {
    if (checked !== null || !input.trim()) return;
    const ok = withinTolerance(parseNumber(input), problem.answer, problem.tolerance);
    setChecked(ok);
    setStreak((s) => (ok ? s + 1 : 0));
    const { xp } = await recordAttempt({ questionId: `drill:${drill.id}:${seed}:${Date.now()}`, topic: drill.topic, academyId: 'formula', correct: ok, difficulty: 1, timeMs: Date.now() - start, source: 'formula' });
    void afterAction(xp);
  };

  return (
    <div className="animate-rise">
      <PageHeader back="/practice" title={t('ft.title')} subtitle={t('practice.formulasDesc')} />
      <div className="-mx-4 mb-4 flex gap-2 overflow-x-auto px-4 pb-1 scrollbar-none" role="tablist" aria-label={t('ft.pick')}>
        {DRILLS.map((d) => (
          <button key={d.id} role="tab" aria-selected={d.id === drill.id} onClick={() => { setDrill(d); next(); setStreak(0); }} className={`shrink-0 rounded-full border px-3 py-1.5 text-sm font-medium ${d.id === drill.id ? 'border-teal-400 bg-teal-500/15 text-teal-200' : 'border-white/10 text-slate-400'}`}>
            {l(d.name)}
          </button>
        ))}
      </div>
      <Card className="mb-3 border-teal-500/30 bg-teal-500/5">
        <div className="mb-1 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-teal-300">
          <span className="flex items-center gap-1.5"><Sigma className="h-4 w-4" />{l(drill.name)}</span>
          <span className="flex items-center gap-1 text-orange-300"><Flame className="h-4 w-4" />{streak} {t('ft.streak')}</span>
        </div>
        <div className="overflow-x-auto font-mono text-white">{drill.formula}</div>
      </Card>
      <Card>
        <Markup text={l(problem.prompt)} className="mb-4 text-lg text-white" />
        <div className="flex items-center gap-2">
          <input inputMode="decimal" value={input} disabled={checked !== null} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && (checked === null ? check() : next())} placeholder={t('q.typeNumber')} aria-label={t('q.typeNumber')} className="w-full rounded-xl border-2 border-white/10 bg-navy-800 px-4 py-3 text-lg outline-none focus:border-electric-500" />
          {problem.unit && <span className="text-lg font-semibold text-slate-300">{problem.unit}</span>}
        </div>
        {checked !== null && (
          <div className={`mt-4 animate-pop rounded-xl border p-3 ${checked ? 'border-teal-400/40 bg-teal-500/10' : 'border-rose-500/40 bg-rose-500/10'}`} role="status">
            <div className={`mb-1 font-bold ${checked ? 'text-teal-300' : 'text-rose-300'}`}>{checked ? t('common.correct') : `${t('common.incorrect')} — ${problem.answer}${problem.unit ? ' ' + problem.unit : ''}`}</div>
            <p className="font-mono text-sm text-slate-200">{l(problem.solution)}</p>
          </div>
        )}
        <div className="mt-4">
          {checked === null ? <Button full size="lg" onClick={check} disabled={!input.trim()}>{t('common.check')}</Button> : <Button full size="lg" onClick={next}><RefreshCw className="h-4 w-4" />{t('ft.newProblem')}</Button>}
        </div>
      </Card>
    </div>
  );
}
