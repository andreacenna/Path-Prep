import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useApp } from '../state/app';
import { ACADEMY_BY_ID } from '../content/curriculum';
import { Chip, Empty, PageHeader, Spinner } from '../components/ui';
import type { DealStatus } from '../content/types';

export const STATUS_TONE: Record<DealStatus, 'teal' | 'amber' | 'rose' | 'blue' | 'muted'> = { completed: 'teal', pending: 'amber', announced: 'blue', blocked: 'rose', withdrawn: 'muted', terminated: 'rose' };
export const STATUS_LABEL: Record<DealStatus, [string, string]> = { completed: ['Completed', 'Completata'], pending: ['Pending', 'In corso'], announced: ['Announced', 'Annunciata'], blocked: ['Blocked', 'Bloccata'], withdrawn: ['Withdrawn', 'Ritirata'], terminated: ['Terminated', 'Interrotta'] };

export default function Cases() {
  const { t, l, lang, content } = useApp();
  if (!content) return <Spinner />;
  const a = ACADEMY_BY_ID.cases;
  const framework = content.lessonById['case-framework'];
  return (
    <div className="animate-rise">
      <PageHeader back="/learn" title={l(a.title)} subtitle={l(a.tagline)} />
      {framework && (
        <Link to="/lesson/case-framework" className="mb-4 flex items-center gap-3 rounded-2xl border border-electric-500/30 bg-electric-500/10 p-4">
          <div className="flex-1"><div className="text-xs font-semibold uppercase tracking-wider text-electric-400">C1</div><div className="font-semibold">{l({ en: 'The 12-Point Deal Framework', it: 'Lo schema in 12 punti' })}</div></div>
          <ChevronRight className="h-5 w-5 text-slate-400" />
        </Link>
      )}
      <h2 className="mb-2 text-sm font-semibold uppercase tracking-wider text-slate-400">{t('learn.caseLibrary')} · {content.cases.length}</h2>
      {content.cases.length ? (
        <ul className="space-y-2">
          {[...content.cases].sort((x, y) => y.announced.localeCompare(x.announced)).map((c) => (
            <li key={c.id}>
              <Link to={`/cases/${c.id}`} className="block rounded-xl border border-white/5 bg-navy-850/80 p-3 hover:border-electric-500/40">
                <div className="flex items-start justify-between gap-2">
                  <div className="font-semibold">{l(c.title)}</div>
                  <Chip tone={STATUS_TONE[c.status]}>{STATUS_LABEL[c.status][lang === 'it' ? 1 : 0]}</Chip>
                </div>
                <div className="mt-0.5 text-xs text-slate-400">{c.announced.slice(0, 4)} · {l(c.value)}</div>
                <div className="mt-1.5 flex flex-wrap gap-1">{c.tags.slice(0, 4).map((tg) => <Chip key={tg}>{tg}</Chip>)}</div>
              </Link>
            </li>
          ))}
        </ul>
      ) : <Empty>{t('common.none')}</Empty>}
    </div>
  );
}
