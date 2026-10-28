import { Link, useParams } from 'react-router-dom';
import { CheckCircle2, Circle, Lock, PlayCircle, Award, Clock } from 'lucide-react';
import { ACADEMY_BY_ID } from '../content/curriculum';
import { useApp } from '../state/app';
import { useLessonProgress, useTopicMastery } from '../state/hooks';
import { academyStats, stubStatus, topicLabels, type StubStatus } from '../lib/recommend';
import { updateSettings } from '../db/db';
import { Button, Card, Chip, PageHeader, ProgressBar, SectionTitle } from '../components/ui';
import { Icon } from '../components/Icon';
import type { UIKey } from '../i18n/ui';

const STATUS_ICON: Record<StubStatus, JSX.Element> = {
  upcoming: <Lock className="h-5 w-5 text-slate-500" />,
  available: <Circle className="h-5 w-5 text-electric-400" />,
  started: <PlayCircle className="h-5 w-5 text-amber-300" />,
  completed: <CheckCircle2 className="h-5 w-5 text-teal-300" />,
  mastered: <Award className="h-5 w-5 text-amber-300" />
};
const STATUS_TONE: Record<StubStatus, 'muted' | 'blue' | 'amber' | 'teal'> = { upcoming: 'muted', available: 'blue', started: 'amber', completed: 'teal', mastered: 'amber' };

export default function AcademyPage() {
  const { academyId = '' } = useParams();
  const { t, l, content, settings } = useApp();
  const progress = useLessonProgress();
  const mastery = useTopicMastery();
  const a = ACADEMY_BY_ID[academyId];
  if (!a) return <p>Not found</p>;
  const s = academyStats(a.id, content, progress);
  const labels = topicLabels(content);
  const academyTopics = content
    ? [...new Set(content.lessons.filter((x) => x.academyId === a.id).flatMap((x) => x.questions.map((q) => q.topic)))]
    : [];

  return (
    <div className="animate-rise">
      <PageHeader back="/learn" title={l(a.title)} subtitle={l(a.tagline)} />
      <Card className="mb-4">
        <div className="flex items-center gap-3">
          <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${a.accent}`}><Icon name={a.icon} className="h-6 w-6 text-navy-950" /></span>
          <div className="flex-1">
            <ProgressBar value={s.available ? s.completed / s.available : 0} />
            <div className="mt-1.5 text-xs text-slate-400">{t('learn.progress', { done: s.completed, avail: s.available, total: s.total })}</div>
          </div>
        </div>
        <div className="mt-3">
          {settings.activePath === a.id ? (
            <Chip tone="teal">{t('learn.isPath')}</Chip>
          ) : (
            <Button size="sm" variant="secondary" onClick={() => updateSettings({ activePath: a.id })}>{t('learn.setPath')}</Button>
          )}
        </div>
      </Card>

      {/* Skill tree: modules as nodes, unlocked progressively by completion */}
      <SectionTitle>{t('learn.skillTree')}</SectionTitle>
      <div className="relative space-y-4 pl-6">
        <div className="absolute bottom-3 left-[11px] top-3 w-0.5 bg-navy-700" aria-hidden="true" />
        {a.modules.map((m) => {
          const avail = m.lessons.filter((x) => content?.lessonById[x.id]);
          const done = avail.filter((x) => progress[x.id]?.status === 'completed').length;
          const complete = avail.length > 0 && done === avail.length;
          return (
            <section key={m.id} className="relative">
              <span className={`absolute -left-6 top-4 flex h-6 w-6 items-center justify-center rounded-full border-2 text-[9px] font-bold ${complete ? 'border-teal-400 bg-teal-500 text-navy-950' : done ? 'border-amber-300 bg-navy-850 text-amber-300' : 'border-navy-600 bg-navy-850 text-slate-400'}`}>
                {complete ? '✓' : m.id.replace(/^[A-Z]+/, '') || '•'}
              </span>
              <Card>
                <div className="mb-1 flex items-center justify-between gap-2">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-electric-400">{t('learn.module')} {m.id}</span>
                  <span className="text-[11px] text-slate-400">{done}/{avail.length} · {m.lessons.length}</span>
                </div>
                <h3 className="font-bold text-white">{l(m.title)}</h3>
                <p className="mb-3 text-xs text-slate-400">{l(m.description)}</p>
                <ul className="divide-y divide-white/5">
                  {m.lessons.map((stub) => {
                    const st = stubStatus(stub, content, progress, mastery);
                    const lesson = content?.lessonById[stub.id];
                    const inner = (
                      <div className={`flex items-center gap-3 py-2.5 ${st === 'upcoming' ? 'text-slate-400' : ''}`}>
                        {STATUS_ICON[st]}
                        <div className="min-w-0 flex-1">
                          <div className="text-sm font-medium leading-snug">{l(stub.title)}</div>
                          {stub.covers && <div className="truncate text-[11px] text-slate-400">{stub.covers.map((c) => l(c)).join(' · ')}</div>}
                        </div>
                        <div className="flex shrink-0 flex-col items-end gap-1">
                          <Chip tone={STATUS_TONE[st]}>{t(st === 'mastered' ? 'status.mastered' : (`status.${st}` as UIKey))}</Chip>
                          {lesson && <span className="flex items-center gap-1 text-[10px] text-slate-400"><Clock className="h-3 w-3" />{lesson.minutes} {t('common.minutes')}</span>}
                        </div>
                      </div>
                    );
                    return <li key={stub.id}>{lesson ? <Link to={`/lesson/${stub.id}`} className="block rounded-lg hover:bg-white/5">{inner}</Link> : inner}</li>;
                  })}
                </ul>
              </Card>
            </section>
          );
        })}
      </div>
      <p className="mt-4 text-xs text-slate-400">{t('learn.upcomingNote')}</p>

      {academyTopics.some((tp) => mastery.has(tp)) && (
        <>
          <SectionTitle>{t('learn.topics')}</SectionTitle>
          <Card>
            <ul className="space-y-2.5">
              {academyTopics.filter((tp) => mastery.has(tp)).map((tp) => {
                const m = mastery.get(tp);
                const level = m?.level ?? 'not-started';
                return (
                  <li key={tp} className="flex items-center gap-3">
                    <span className="min-w-0 flex-1 truncate text-sm">{l(labels[tp])}</span>
                    <div className="w-20"><ProgressBar value={(m?.score ?? 0) / 100} /></div>
                    <Chip tone={level === 'mastered' ? 'amber' : level === 'proficient' ? 'teal' : level === 'needs-review' ? 'rose' : level === 'not-started' ? 'muted' : 'blue'}>{t(`mastery.${level}` as UIKey)}</Chip>
                  </li>
                );
              })}
            </ul>
            <p className="mt-3 text-xs text-slate-400">+ {academyTopics.filter((tp) => !mastery.has(tp)).length} · {t('mastery.not-started')}</p>
          </Card>
        </>
      )}
    </div>
  );
}
