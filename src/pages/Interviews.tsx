import { Link } from 'react-router-dom';
import { useLiveQuery } from 'dexie-react-hooks';
import { Cpu, Users, Timer, NotebookPen, UserCheck, ChevronRight } from 'lucide-react';
import { useApp } from '../state/app';
import { db } from '../db/db';
import { Card, Chip, PageHeader, SectionTitle } from '../components/ui';
import type { UIKey } from '../i18n/ui';

export default function Interviews() {
  const { t, l, lang, content } = useApp();
  const recent = useLiveQuery(() => db.interviewAttempts.orderBy('ts').reverse().limit(5).toArray(), []) ?? [];
  const tech = content?.interview.filter((q) => q.type === 'technical').length ?? 0;
  const beh = content?.interview.filter((q) => q.type === 'behavioral').length ?? 0;
  const tiles: { to: string; icon: typeof Cpu; title: UIKey; desc: string }[] = [
    { to: '/interviews/list/technical', icon: Cpu, title: 'int.technical', desc: `${tech} ${t('common.questions')}` },
    { to: '/interviews/list/behavioral', icon: Users, title: 'int.behavioral', desc: `${beh} ${t('common.questions')}` },
    { to: '/interviews/mock', icon: Timer, title: 'int.mock', desc: t('int.mockDesc') },
    { to: '/interviews/stories', icon: NotebookPen, title: 'int.stories', desc: t('int.storiesDesc') },
    { to: '/interviews/personalized', icon: UserCheck, title: 'int.personalized', desc: t('int.personalizedDesc') }
  ];
  return (
    <div className="animate-rise">
      <PageHeader title={t('int.title')} subtitle={t('int.subtitle')} />
      <div className="grid gap-2.5 sm:grid-cols-2">
        {tiles.map((x) => (
          <Link key={x.to} to={x.to} className="flex items-center gap-3 rounded-2xl border border-white/5 bg-navy-850/80 p-4 transition hover:border-electric-500/40">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-teal-300 to-electric-400"><x.icon className="h-5 w-5 text-navy-950" /></span>
            <div className="min-w-0 flex-1"><div className="font-semibold">{t(x.title)}</div><div className="text-xs text-slate-400">{x.desc}</div></div>
            <ChevronRight className="h-5 w-5 text-slate-500" />
          </Link>
        ))}
      </div>
      <Link to="/learn/interviews" className="mt-3 block text-sm text-electric-400 underline">{l({ en: 'Interview Preparation academy (lessons) →', it: 'Accademia di preparazione ai colloqui (lezioni) →' })}</Link>
      {recent.length > 0 && (
        <>
          <SectionTitle>{t('int.history')}</SectionTitle>
          <Card>
            <ul className="divide-y divide-white/5">
              {recent.map((a) => {
                const q = content?.interview.find((x) => x.id === a.questionId);
                return (
                  <li key={a.id} className="flex items-center gap-3 py-2">
                    <div className="min-w-0 flex-1">
                      <div className="truncate text-sm">{q ? l(q.prompt) : a.questionId}</div>
                      <div className="text-[11px] text-slate-400">{new Date(a.ts).toLocaleString(lang)} · {a.mode}</div>
                    </div>
                    <Chip tone={a.verdict === 'correct' ? 'teal' : a.verdict === 'partial' ? 'amber' : 'rose'}>{a.verdict === 'correct' ? t('common.correct') : a.verdict === 'partial' ? t('common.partial') : t('common.incorrect')}</Chip>
                  </li>
                );
              })}
            </ul>
          </Card>
        </>
      )}
    </div>
  );
}
