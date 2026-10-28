import { Link } from 'react-router-dom';
import { useLiveQuery } from 'dexie-react-hooks';
import { Flame, Zap, Layers, Play, ChevronRight, Target, CalendarCheck, TrendingDown, Newspaper } from 'lucide-react';
import { useApp } from '../state/app';
import { useDueCards, useLessonProgress, useTopicMastery, useXP } from '../state/hooks';
import { ACADEMY_BY_ID, STUB_INDEX } from '../content/curriculum';
import { nextLesson, academyStats, topicLabels } from '../lib/recommend';
import { levelProgress, levelTitle } from '../lib/gamification';
import { weakestTopics } from '../lib/practice';
import { lastNDays, dayKey } from '../lib/dates';
import { db } from '../db/db';
import { ACHIEVEMENTS } from '../lib/achievements';
import { Card, ProgressBar, Ring, SectionTitle, Chip, Button } from '../components/ui';
import { Icon } from '../components/Icon';
import { useNews } from '../lib/news';

export function Home() {
  const { t, l, lang, settings, content } = useApp();
  const xp = useXP();
  const progress = useLessonProgress();
  const mastery = useTopicMastery();
  const { due } = useDueCards();
  const achievements = useLiveQuery(() => db.achievements.orderBy('unlockedAt').reverse().limit(3).toArray(), []) ?? [];
  const dailyDone = useLiveQuery(() => db.xp.where('day').equals(dayKey()).filter((x) => x.reason.startsWith('daily:')).count(), []) ?? 0;
  const news = useNews();
  const lp = levelProgress(xp.total);
  const path = settings.activePath ? ACADEMY_BY_ID[settings.activePath] : null;
  const next = nextLesson(settings.activePath, content, progress);
  const nextStub = next ? STUB_INDEX[next.id] : null;
  const pathStats = path ? academyStats(path.id, content, progress) : null;
  const weak = weakestTopics(mastery);
  const labels = topicLabels(content);
  const week = lastNDays(7);
  const maxDay = Math.max(settings.dailyGoalXP, ...week.map((d) => xp.byDay[d] ?? 0));
  const goalPct = xp.today / settings.dailyGoalXP;
  const dayFmt = new Intl.DateTimeFormat(lang === 'it' ? 'it-IT' : 'en-US', { weekday: 'narrow' });

  return (
    <div className="animate-rise space-y-4">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">{settings.name ? t('home.greetingName', { name: settings.name }) : t('home.greeting')}</h1>
          <p className="text-sm text-slate-400">{t('home.pitch')}</p>
        </div>
      </header>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-2">
        <Card className="flex flex-col items-center !p-3 text-center">
          <Flame className={`h-6 w-6 ${xp.streak.activeToday ? 'text-orange-400' : 'text-slate-400'}`} />
          <div className="mt-1 text-2xl font-extrabold">{xp.streak.current}</div>
          <div className="text-[11px] text-slate-400">{t('home.streak')}</div>
        </Card>
        <Card className="flex flex-col items-center !p-3 text-center">
          <Zap className="h-6 w-6 text-teal-300" />
          <div className="mt-1 text-2xl font-extrabold">{xp.total.toLocaleString(lang)}</div>
          <div className="text-[11px] text-slate-400">{t('home.totalXP')}</div>
        </Card>
        <Card className="flex flex-col items-center !p-3 text-center">
          <div className="text-[11px] font-semibold text-electric-400">{t('common.level')} {lp.level}</div>
          <div className="mt-0.5 text-sm font-bold leading-tight">{levelTitle(lp.level, lang)}</div>
          <ProgressBar value={lp.pct} className="mt-2" label={t('common.level')} />
          <div className="mt-1 text-[10px] text-slate-400">{lp.into}/{lp.span} XP</div>
        </Card>
      </div>

      {/* Goal + week */}
      <Card className="flex items-center gap-4">
        <Ring value={goalPct} size={76} label={t('home.dailyGoal')}>
          <div className="text-center leading-none">
            <div className="text-lg font-extrabold">{xp.today}</div>
            <div className="text-[10px] text-slate-400">/ {settings.dailyGoalXP}</div>
          </div>
        </Ring>
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold">{t('home.dailyGoal')}</span>
            {goalPct >= 1 && <Chip tone="teal">✓</Chip>}
          </div>
          <p className="mb-2 text-xs text-slate-400">{goalPct >= 1 ? t('home.goalDone') : t('home.weekly')}</p>
          <div className="flex h-12 items-end gap-1.5" aria-label={t('home.weekly')}>
            {week.map((d) => {
              const v = xp.byDay[d] ?? 0;
              const [y, m, dd] = d.split('-').map(Number);
              return (
                <div key={d} className="flex flex-1 flex-col items-center gap-1">
                  <div className={`w-full rounded-sm ${v >= settings.dailyGoalXP ? 'bg-teal-400' : v > 0 ? 'bg-electric-500' : 'bg-navy-700'}`} style={{ height: `${Math.max(8, (v / maxDay) * 36)}px` }} title={`${d}: ${v} XP`} />
                  <span className={`text-[9px] ${d === dayKey() ? 'font-bold text-white' : 'text-slate-400'}`}>{dayFmt.format(new Date(y, m - 1, dd))}</span>
                </div>
              );
            })}
          </div>
        </div>
      </Card>

      {/* Quick practice CTA */}
      <Link to="/practice/session/quick" className="block">
        <div className="flex items-center gap-4 rounded-2xl bg-gradient-to-r from-electric-500 to-teal-400 p-4 text-navy-950 shadow-xl shadow-electric-500/20 transition active:scale-[.99]">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-950/15"><Play className="h-6 w-6" fill="currentColor" /></div>
          <div className="flex-1">
            <div className="text-lg font-extrabold">{t('home.quickPractice')}</div>
            <div className="text-sm font-medium opacity-80">{t('home.quickPracticeDesc')}</div>
          </div>
          <ChevronRight className="h-6 w-6" />
        </div>
      </Link>

      {/* Next lesson */}
      {path && (
        <Card>
          <div className="mb-3 flex items-center gap-3">
            <span className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${path.accent}`}><Icon name={path.icon} className="h-5 w-5 text-navy-950" /></span>
            <div className="min-w-0 flex-1">
              <div className="text-xs text-slate-400">{t('home.path')}</div>
              <Link to={`/learn/${path.id}`} className="block truncate font-semibold hover:underline">{l(path.title)}</Link>
            </div>
          </div>
          {pathStats && <ProgressBar value={pathStats.available ? pathStats.completed / pathStats.available : 0} className="mb-3" />}
          {nextStub ? (
            <Link to={`/lesson/${nextStub.stub.id}`} className="flex items-center gap-3 rounded-xl bg-navy-800 p-3 hover:bg-navy-700">
              <Target className="h-5 w-5 shrink-0 text-teal-300" />
              <div className="min-w-0 flex-1">
                <div className="text-xs text-slate-400">{next?.resume ? t('home.resume') : t('home.next')} · {l(nextStub.academy.title)}</div>
                <div className="truncate font-semibold">{l(nextStub.stub.title)}</div>
              </div>
              <ChevronRight className="h-5 w-5 text-slate-400" />
            </Link>
          ) : content ? (
            <p className="text-sm text-slate-400">{t('home.allDone')}</p>
          ) : null}
        </Card>
      )}

      <div className="grid grid-cols-2 gap-2">
        <Link to="/practice/flashcards">
          <Card className="h-full transition hover:border-electric-500/40">
            <Layers className="mb-2 h-5 w-5 text-electric-400" />
            <div className="text-2xl font-extrabold">{due.length}</div>
            <div className="text-xs text-slate-400">{t('home.cardsDue')}</div>
          </Card>
        </Link>
        <Link to="/practice/session/daily">
          <Card className="h-full transition hover:border-electric-500/40">
            <CalendarCheck className={`mb-2 h-5 w-5 ${dailyDone ? 'text-teal-300' : 'text-amber-300'}`} />
            <div className="font-bold leading-tight">{t('home.dailyChallenge')}</div>
            <div className="text-xs text-slate-400">{dailyDone ? t('home.dailyDone') : '5 ' + t('common.questions')}</div>
          </Card>
        </Link>
      </div>

      <SectionTitle>{t('home.weakTopics')}</SectionTitle>
      <Card>
        {weak.length ? (
          <ul className="space-y-3">
            {weak.map(([topic, m]) => (
              <li key={topic} className="flex items-center gap-3">
                <TrendingDown className="h-4 w-4 shrink-0 text-rose-300" />
                <div className="min-w-0 flex-1">
                  <div className="truncate text-sm font-medium">{l(labels[topic]) || topic}</div>
                  <ProgressBar value={m.accuracy} className="mt-1" color="bg-rose-400" />
                </div>
                <span className="text-xs text-slate-400">{Math.round(m.accuracy * 100)}%</span>
              </li>
            ))}
            <li><Link to="/practice/session/review"><Button variant="secondary" size="sm" full>{t('practice.review')}</Button></Link></li>
          </ul>
        ) : (
          <p className="text-sm text-slate-400">{t('home.noWeak')}</p>
        )}
      </Card>

      {achievements.length > 0 && (
        <>
          <SectionTitle right={<Link to="/profile" className="text-xs text-electric-400">{t('common.seeAll')}</Link>}>{t('home.achievements')}</SectionTitle>
          <div className="flex gap-2 overflow-x-auto scrollbar-none">
            {achievements.map((a) => {
              const def = ACHIEVEMENTS.find((x) => x.id === a.id);
              return def ? (
                <Card key={a.id} className="flex min-w-[150px] items-center gap-2 !p-3">
                  <Icon name={def.icon} className="h-5 w-5 text-amber-300" />
                  <span className="text-sm font-semibold leading-tight">{l(def.title)}</span>
                </Card>
              ) : null;
            })}
          </div>
        </>
      )}

      <SectionTitle right={<Link to="/news" className="text-xs text-electric-400">{t('common.seeAll')}</Link>}>{t('home.briefing')}</SectionTitle>
      <Card>
        {news.data?.items.length ? (
          <ul className="space-y-3">
            {news.data.items.slice(0, 3).map((n) => (
              <li key={n.id}>
                <a href={n.link} target="_blank" rel="noopener noreferrer" className="block hover:underline">
                  <div className="text-sm font-medium leading-snug">{n.title}</div>
                  <div className="text-xs text-slate-400">{n.source} · {new Date(n.published).toLocaleDateString(lang)}</div>
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex items-start gap-2 text-sm text-slate-400"><Newspaper className="mt-0.5 h-4 w-4 shrink-0" />{news.loading ? t('common.loading') : t('news.none')}</div>
        )}
      </Card>
    </div>
  );
}
