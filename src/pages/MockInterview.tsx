import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trophy } from 'lucide-react';
import { useApp } from '../state/app';
import { InterviewAnswer, type SavedAttempt } from '../components/InterviewAnswer';
import { awardXP } from '../lib/actions';
import { shuffleSeeded } from '../lib/practice';
import type { InterviewQuestion } from '../content/types';
import { Button, Card, PageHeader, ProgressBar, Ring, Spinner } from '../components/ui';

export default function MockInterview() {
  const { t, l, content, afterAction } = useApp();
  const [format, setFormat] = useState<'mixed' | 'technical' | 'behavioral'>('mixed');
  const [count, setCount] = useState(6);
  const [topic, setTopic] = useState('');
  const [queue, setQueue] = useState<InterviewQuestion[] | null>(null);
  const [i, setI] = useState(0);
  const [results, setResults] = useState<SavedAttempt[]>([]);
  const [current, setCurrent] = useState<SavedAttempt | null>(null);
  const [mockId] = useState(() => `mock:${Date.now()}`);
  if (!content) return <Spinner />;

  const techTopics = [...new Set(content.interview.filter((q) => q.type === 'technical').map((q) => q.topic))];

  const start = () => {
    const pool = content.interview.filter((q) => (format === 'mixed' || q.type === format) && (!topic || q.topic === topic || q.type === 'behavioral'));
    let picked: InterviewQuestion[];
    if (format === 'mixed') {
      const beh = shuffleSeeded(pool.filter((q) => q.type === 'behavioral'), Math.random);
      const tech = shuffleSeeded(pool.filter((q) => q.type === 'technical'), Math.random).sort((a, b) => a.difficulty - b.difficulty);
      const nb = Math.max(1, Math.round(count / 3));
      // Real interviews usually open with fit questions, then move to technicals of rising difficulty.
      picked = [...beh.slice(0, nb), ...tech.slice(0, count - nb)];
    } else picked = shuffleSeeded(pool, Math.random).slice(0, count);
    setQueue(picked);
  };

  if (!queue) {
    return (
      <div className="animate-rise">
        <PageHeader back="/interviews" title={t('int.mock')} subtitle={t('int.mockDesc')} />
        <Card className="space-y-4">
          <fieldset>
            <legend className="mb-2 text-sm font-semibold text-slate-300">{t('int.mockType')}</legend>
            <div className="grid gap-2">
              {(['mixed', 'technical', 'behavioral'] as const).map((f) => (
                <button key={f} onClick={() => setFormat(f)} className={`rounded-xl border-2 p-3 text-left text-sm font-semibold ${format === f ? 'border-electric-500 bg-electric-500/15' : 'border-white/10'}`}>{t(f === 'mixed' ? 'int.mockMixed' : f === 'technical' ? 'int.mockTech' : 'int.mockBeh')}</button>
              ))}
            </div>
          </fieldset>
          {format !== 'behavioral' && (
            <label className="block">
              <span className="mb-1 block text-sm font-semibold text-slate-300">{t('int.mockTopic')}</span>
              <select value={topic} onChange={(e) => setTopic(e.target.value)} className="w-full rounded-xl border border-white/10 bg-navy-800 px-3 py-3">
                <option value="">{t('common.all')}</option>
                {techTopics.map((tp) => <option key={tp} value={tp}>{tp.replace(/-/g, ' ')}</option>)}
              </select>
            </label>
          )}
          <label className="block">
            <span className="mb-1 block text-sm font-semibold text-slate-300">{t('int.mockCount')}: {count}</span>
            <input type="range" min={3} max={12} value={count} onChange={(e) => setCount(+e.target.value)} className="w-full accent-electric-500" />
          </label>
          <Button full size="lg" onClick={start} disabled={!content.interview.length}>{t('common.start')}</Button>
        </Card>
      </div>
    );
  }

  if (i >= queue.length) {
    const pts = results.reduce((s, r) => s + (r.verdict === 'correct' ? 1 : r.verdict === 'partial' ? 0.5 : 0), 0);
    return (
      <div className="animate-rise text-center">
        <Trophy className="mx-auto mb-3 mt-6 h-12 w-12 text-amber-300" />
        <h1 className="mb-4 text-2xl font-extrabold">{t('int.mockResult')}</h1>
        <Ring value={pts / results.length} size={110}><span className="text-xl font-extrabold">{Math.round((pts / results.length) * 100)}%</span></Ring>
        <Card className="mx-auto mt-6 max-w-md text-left">
          <ul className="space-y-2">
            {queue.map((q, k) => (
              <li key={q.id} className="flex items-start justify-between gap-3 text-sm">
                <Link to={`/interviews/q/${q.id}`} className="hover:underline">{l(q.prompt)}</Link>
                <span className={`shrink-0 font-semibold ${results[k]?.verdict === 'correct' ? 'text-teal-300' : results[k]?.verdict === 'partial' ? 'text-amber-300' : 'text-rose-300'}`}>{results[k]?.verdict === 'correct' ? '✓' : results[k]?.verdict === 'partial' ? '½' : '✗'}</span>
              </li>
            ))}
          </ul>
        </Card>
        <div className="mx-auto mt-6 max-w-xs space-y-2">
          <Button full onClick={() => { setQueue(null); setI(0); setResults([]); }}>{t('practice.again')}</Button>
          <Link to="/interviews" className="block"><Button full variant="secondary">{t('common.back')}</Button></Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-4 flex items-center gap-3">
        <ProgressBar value={i / queue.length} />
        <span className="text-xs tabular-nums text-slate-400">{i + 1}/{queue.length}</span>
      </div>
      <InterviewAnswer key={queue[i].id} q={queue[i]} mode="mock" compact onSaved={(r) => setCurrent(r)} />
      {current && (
        <Button full size="lg" className="mt-4" onClick={async () => {
          const next = [...results, current];
          setResults(next);
          setCurrent(null);
          if (i + 1 >= queue.length) {
            await awardXP(20, mockId);
            void afterAction(20);
          }
          setI(i + 1);
          window.scrollTo(0, 0);
        }}>{t('common.next')}</Button>
      )}
    </div>
  );
}
