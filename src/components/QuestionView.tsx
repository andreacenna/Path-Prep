import { useMemo, useRef, useState } from 'react';
import { Check, X, RotateCcw } from 'lucide-react';
import type { Question } from '../content/types';
import { gradeQuestion, gridBlanks, parseNumber, withinTolerance, type AnswerValue } from '../lib/grading';
import { useApp } from '../state/app';
import { Markup } from './Markup';
import { Button, Chip } from './ui';

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function fmt(n: number, lang: 'en' | 'it'): string {
  return n.toLocaleString(lang === 'it' ? 'it-IT' : 'en-US', { maximumFractionDigits: 4 });
}

export interface QuestionResult {
  correct: boolean;
  timeMs: number;
}

/**
 * Renders any question kind, grades it deterministically and shows the explanation.
 * `onResult` fires once on Check; `onContinue` when the learner moves on.
 */
export function QuestionView({ question: q, onResult, onContinue, continueLabel, showMeta = true }: { question: Question; onResult: (r: QuestionResult) => void; onContinue: () => void; continueLabel?: string; showMeta?: boolean }) {
  const { t, l, lang } = useApp();
  const start = useRef(Date.now());
  const [checked, setChecked] = useState<null | boolean>(null);
  const [mcq, setMcq] = useState<number | null>(null);
  const [multi, setMulti] = useState<number[]>([]);
  const [num, setNum] = useState('');
  const [seq, setSeq] = useState<number[]>([]);
  const [grid, setGrid] = useState<Record<string, string>>({});

  const choiceOrder = useMemo(() => ('choices' in q ? shuffle(q.choices.map((_, i) => i)) : []), [q]);
  const orderPool = useMemo(() => (q.kind === 'order' ? shuffle(q.items.map((_, i) => i)) : []), [q]);
  const blanks = useMemo(() => (q.kind === 'grid' ? gridBlanks(q) : []), [q]);

  const value: AnswerValue | null =
    q.kind === 'mcq' ? mcq : q.kind === 'multi' ? multi : q.kind === 'numeric' ? num : q.kind === 'order' ? seq : grid;

  const canCheck =
    (q.kind === 'mcq' && mcq !== null) ||
    (q.kind === 'multi' && multi.length > 0) ||
    (q.kind === 'numeric' && num.trim() !== '') ||
    (q.kind === 'order' && seq.length === q.items.length) ||
    (q.kind === 'grid' && blanks.every((b) => (grid[b.key] ?? '').trim() !== ''));

  const check = () => {
    if (!canCheck || value === null || checked !== null) return;
    const ok = gradeQuestion(q, value);
    setChecked(ok);
    onResult({ correct: ok, timeMs: Date.now() - start.current });
  };

  const locked = checked !== null;

  return (
    <div className="animate-rise">
      {showMeta && (
        <div className="mb-3 flex flex-wrap gap-1.5">
          <Chip tone="blue">{t(`common.diff${q.difficulty}` as 'common.diff1')}</Chip>
          {q.kind === 'multi' && <Chip>{t('q.selectAll')}</Chip>}
        </div>
      )}
      <Markup text={l(q.prompt)} className="mb-4 text-[1.05rem] text-white" />

      {(q.kind === 'mcq' || q.kind === 'multi') && (
        <div className="space-y-2" role={q.kind === 'mcq' ? 'radiogroup' : 'group'}>
          {choiceOrder.map((ci) => {
            const selected = q.kind === 'mcq' ? mcq === ci : multi.includes(ci);
            const isCorrect = q.kind === 'mcq' ? q.correct === ci : q.correct.includes(ci);
            let cls = 'border-white/10 bg-navy-800 hover:border-electric-500/60';
            if (selected && !locked) cls = 'border-electric-500 bg-electric-500/15';
            if (locked && isCorrect) cls = 'border-teal-400 bg-teal-500/15';
            if (locked && selected && !isCorrect) cls = 'border-rose-500 bg-rose-500/15';
            return (
              <button
                key={ci}
                role={q.kind === 'mcq' ? 'radio' : 'checkbox'}
                aria-checked={selected}
                disabled={locked}
                onClick={() => (q.kind === 'mcq' ? setMcq(ci) : setMulti((m) => (m.includes(ci) ? m.filter((x) => x !== ci) : [...m, ci])))}
                className={`flex w-full items-start gap-3 rounded-xl border-2 p-3.5 text-left transition ${cls}`}
              >
                <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border-2 ${q.kind === 'mcq' ? 'rounded-full' : 'rounded'} ${selected ? 'border-electric-400 bg-electric-500' : 'border-slate-500'}`}>
                  {selected && <Check className="h-3 w-3 text-white" strokeWidth={3} />}
                </span>
                <span className="text-slate-100">{l(q.choices[ci])}</span>
              </button>
            );
          })}
        </div>
      )}

      {q.kind === 'numeric' && (
        <div>
          <div className="flex items-center gap-2">
            <input
              inputMode="decimal"
              autoComplete="off"
              className="w-full rounded-xl border-2 border-white/10 bg-navy-800 px-4 py-3 text-lg text-white outline-none focus:border-electric-500"
              placeholder={t('q.typeNumber')}
              value={num}
              disabled={locked}
              onChange={(e) => setNum(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && check()}
              aria-label={t('q.typeNumber')}
            />
            {q.unit && <span className="shrink-0 text-lg font-semibold text-slate-300">{q.unit}</span>}
          </div>
          <p className="mt-1.5 text-xs text-slate-400">{t('q.numHint')}</p>
        </div>
      )}

      {q.kind === 'order' && (
        <div>
          <p className="mb-2 text-sm text-slate-400">{t('q.order')}</p>
          <ol className="mb-3 space-y-2">
            {seq.map((idx, pos) => {
              const ok = locked && idx === pos;
              return (
                <li key={idx} className={`flex items-start gap-3 rounded-xl border-2 p-3 ${locked ? (ok ? 'border-teal-400 bg-teal-500/10' : 'border-rose-500 bg-rose-500/10') : 'border-electric-500/50 bg-electric-500/10'}`}>
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-electric-500 text-xs font-bold">{pos + 1}</span>
                  <span>{l(q.items[idx])}</span>
                </li>
              );
            })}
          </ol>
          {!locked && (
            <div className="space-y-2">
              {orderPool.filter((i) => !seq.includes(i)).map((i) => (
                <button key={i} onClick={() => setSeq((s) => [...s, i])} className="w-full rounded-xl border-2 border-white/10 bg-navy-800 p-3 text-left hover:border-electric-500/60">
                  {l(q.items[i])}
                </button>
              ))}
              {seq.length > 0 && (
                <Button variant="ghost" size="sm" onClick={() => setSeq([])}><RotateCcw className="h-4 w-4" /> {t('q.reset')}</Button>
              )}
            </div>
          )}
          {locked && !checked && (
            <div className="mt-3 rounded-xl bg-navy-800 p-3 text-sm">
              <p className="mb-1 font-semibold text-teal-300">{t('q.correctAnswer')}</p>
              <ol className="list-decimal space-y-1 pl-5">{q.items.map((it, i) => <li key={i}>{l(it)}</li>)}</ol>
            </div>
          )}
        </div>
      )}

      {q.kind === 'grid' && (
        <div>
          <p className="mb-2 text-sm text-slate-400">{t('q.grid')}{q.unit ? ` (${q.unit})` : ''}</p>
          <div className="-mx-4 overflow-x-auto px-4">
            <table className="w-full min-w-[420px] border-collapse font-mono text-sm">
              <thead>
                <tr>{q.columns.map((c, i) => <th key={i} className={`border-b border-white/10 px-2 py-2 font-sans text-xs font-semibold uppercase tracking-wide text-slate-400 ${i ? 'text-right' : 'text-left'}`}>{l(c)}</th>)}</tr>
              </thead>
              <tbody>
                {q.rows.map((r, ri) => (
                  <tr key={ri} className="border-b border-white/5">
                    <td className="px-2 py-1.5 font-sans text-slate-200">{l(r.label)}</td>
                    {r.cells.map((c, ci) => {
                      if (typeof c !== 'object') return <td key={ci} className="px-2 py-1.5 text-right text-slate-300">{typeof c === 'number' ? fmt(c, lang) : c}</td>;
                      const key = `${ri}:${ci}`;
                      const ok = locked && withinTolerance(parseNumber(grid[key] ?? ''), c.answer, c.tolerance);
                      return (
                        <td key={ci} className="px-1 py-1 text-right">
                          <input
                            inputMode="decimal"
                            aria-label={`${l(r.label)} — ${l(q.columns[ci + 1])}`}
                            disabled={locked}
                            value={grid[key] ?? ''}
                            onChange={(e) => setGrid((g) => ({ ...g, [key]: e.target.value }))}
                            className={`w-24 rounded-md border px-2 py-1.5 text-right text-white outline-none ${locked ? (ok ? 'border-teal-400 bg-teal-500/15' : 'border-rose-500 bg-rose-500/15') : 'border-electric-500/50 bg-electric-500/10 focus:border-electric-400'}`}
                          />
                          {locked && !ok && <div className="mt-0.5 text-xs text-teal-300">{fmt(c.answer, lang)}</div>}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {locked && (
        <div className={`mt-4 animate-pop rounded-2xl border p-4 ${checked ? 'border-teal-400/40 bg-teal-500/10' : 'border-rose-500/40 bg-rose-500/10'}`} role="status">
          <div className={`mb-2 flex items-center gap-2 font-bold ${checked ? 'text-teal-300' : 'text-rose-300'}`}>
            {checked ? <Check className="h-5 w-5" /> : <X className="h-5 w-5" />}
            {checked ? t('common.correct') : t('common.incorrect')}
            {q.kind === 'numeric' && !checked && (
              <span className="ml-auto font-mono text-sm text-slate-200">{t('q.correctAnswer')}: {fmt(q.answer, lang)}{q.unit ? ` ${q.unit}` : ''}</span>
            )}
          </div>
          <Markup text={l(q.explanation)} className="text-sm" />
          {q.kind === 'numeric' && q.steps && (
            <div className="mt-3">
              <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-400">{t('q.steps')}</p>
              <ol className="list-decimal space-y-1 pl-5 text-sm text-slate-200">{q.steps.map((s, i) => <li key={i}>{l(s)}</li>)}</ol>
            </div>
          )}
        </div>
      )}

      <div className="sticky bottom-20 mt-5 lg:bottom-4">
        {!locked ? (
          <Button full size="lg" disabled={!canCheck} onClick={check}>{t('common.check')}</Button>
        ) : (
          <Button full size="lg" variant={checked ? 'success' : 'primary'} onClick={onContinue}>{continueLabel ?? t('common.continue')}</Button>
        )}
      </div>
    </div>
  );
}
