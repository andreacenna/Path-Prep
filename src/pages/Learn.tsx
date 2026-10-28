import { Link } from 'react-router-dom';
import { ACADEMIES } from '../content/curriculum';
import { useApp } from '../state/app';
import { useLessonProgress } from '../state/hooks';
import { academyStats } from '../lib/recommend';
import { PageHeader, ProgressBar, Chip } from '../components/ui';
import { Icon } from '../components/Icon';

export default function Learn() {
  const { t, l, content, settings } = useApp();
  const progress = useLessonProgress();
  return (
    <div className="animate-rise">
      <PageHeader title={t('learn.title')} subtitle={t('learn.subtitle')} />
      <div className="grid gap-3 sm:grid-cols-2">
        {ACADEMIES.map((a) => {
          const s = academyStats(a.id, content, progress);
          const to = a.id === 'cases' ? '/cases' : `/learn/${a.id}`;
          return (
            <Link key={a.id} to={to} className="group block rounded-2xl border border-white/5 bg-navy-850/80 p-4 transition hover:border-electric-500/40">
              <div className="flex items-start gap-3">
                <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${a.accent} shadow-lg`}>
                  <Icon name={a.icon} className="h-6 w-6 text-navy-950" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    {a.order.toString().padStart(2, '0')}
                    {settings.activePath === a.id && <Chip tone="teal">{t('learn.isPath')}</Chip>}
                  </div>
                  <h2 className="font-bold leading-snug text-white">{l(a.title)}</h2>
                  <p className="mt-0.5 line-clamp-2 text-xs text-slate-400">{l(a.tagline)}</p>
                </div>
              </div>
              <ProgressBar value={s.available ? s.completed / s.available : 0} className="mt-3" />
              <div className="mt-1.5 text-[11px] text-slate-400">{t('learn.progress', { done: s.completed, avail: s.available, total: s.total })}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
