import { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useLiveQuery } from 'dexie-react-hooks';
import { Search, ChevronRight } from 'lucide-react';
import { useApp } from '../state/app';
import { db } from '../db/db';
import { Chip, Empty, PageHeader, Spinner } from '../components/ui';

export default function InterviewList() {
  const { type = 'technical' } = useParams();
  const { t, l, content } = useApp();
  const [topic, setTopic] = useState('');
  const [diff, setDiff] = useState(0);
  const [q, setQ] = useState('');
  const attempts = useLiveQuery(() => db.interviewAttempts.toArray(), []) ?? [];
  const best = useMemo(() => {
    const rank = { correct: 2, partial: 1, incorrect: 0 } as const;
    const m = new Map<string, 'correct' | 'partial' | 'incorrect'>();
    for (const a of attempts) if (!m.has(a.questionId) || rank[a.verdict] > rank[m.get(a.questionId)!]) m.set(a.questionId, a.verdict);
    return m;
  }, [attempts]);
  if (!content) return <Spinner />;
  const all = content.interview.filter((x) => x.type === type);
  const topics = [...new Set(all.map((x) => x.topic))];
  const list = all.filter((x) => (!topic || x.topic === topic) && (!diff || x.difficulty === diff) && (!q || l(x.prompt).toLowerCase().includes(q.toLowerCase())));
  return (
    <div className="animate-rise">
      <PageHeader back="/interviews" title={type === 'technical' ? t('int.technical') : t('int.behavioral')} subtitle={`${list.length} ${t('common.questions')}`} />
      <div className="relative mb-3">
        <Search className="absolute left-3 top-3.5 h-4 w-4 text-slate-400" />
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder={t('int.searchPlaceholder')} className="w-full rounded-xl border border-white/10 bg-navy-850 py-3 pl-9 pr-3 outline-none focus:border-electric-500" />
      </div>
      <div className="-mx-4 mb-2 flex gap-2 overflow-x-auto px-4 pb-1 scrollbar-none">
        <button onClick={() => setTopic('')} className={`shrink-0 rounded-full border px-3 py-1 text-sm ${!topic ? 'border-teal-400 text-teal-200' : 'border-white/10 text-slate-400'}`}>{t('common.all')}</button>
        {topics.map((tp) => <button key={tp} onClick={() => setTopic(tp)} className={`shrink-0 rounded-full border px-3 py-1 text-sm ${topic === tp ? 'border-teal-400 text-teal-200' : 'border-white/10 text-slate-400'}`}>{tp.replace(/-/g, ' ')}</button>)}
      </div>
      <div className="mb-4 flex gap-2">
        {[0, 1, 2, 3].map((d) => <button key={d} onClick={() => setDiff(d)} className={`rounded-full border px-3 py-1 text-xs ${diff === d ? 'border-electric-400 text-electric-300' : 'border-white/10 text-slate-400'}`}>{d ? t(`common.diff${d}` as 'common.diff1') : t('common.all')}</button>)}
      </div>
      {list.length ? (
        <ul className="space-y-2">
          {list.map((x) => {
            const v = best.get(x.id);
            return (
              <li key={x.id}>
                <Link to={`/interviews/q/${x.id}`} className="flex items-center gap-3 rounded-xl border border-white/5 bg-navy-850/80 p-3 hover:border-electric-500/40">
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-medium leading-snug">{l(x.prompt)}</div>
                    <div className="mt-1 flex gap-1.5"><Chip>{x.topic.replace(/-/g, ' ')}</Chip><Chip tone="blue">{t(`common.diff${x.difficulty}` as 'common.diff1')}</Chip>{v && <Chip tone={v === 'correct' ? 'teal' : v === 'partial' ? 'amber' : 'rose'}>✓</Chip>}</div>
                  </div>
                  <ChevronRight className="h-4 w-4 shrink-0 text-slate-500" />
                </Link>
              </li>
            );
          })}
        </ul>
      ) : <Empty>{t('common.none')}</Empty>}
    </div>
  );
}
