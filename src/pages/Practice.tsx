import { Link } from 'react-router-dom';
import { Zap, Layers, Calculator, Sigma, CalendarCheck, RotateCcw, Briefcase, ChevronRight, Dumbbell } from 'lucide-react';
import { useApp } from '../state/app';
import { useDueCards } from '../state/hooks';
import { PageHeader, Chip } from '../components/ui';
import type { UIKey } from '../i18n/ui';

const MODES: { to: string; title: UIKey; desc: UIKey; icon: typeof Zap; tone: string }[] = [
  { to: '/practice/session/quick', title: 'home.quickPractice', desc: 'home.quickPracticeDesc', icon: Dumbbell, tone: 'from-electric-500 to-teal-400' },
  { to: '/practice/session/quiz', title: 'practice.quiz', desc: 'practice.quizDesc', icon: Zap, tone: 'from-electric-500 to-electric-400' },
  { to: '/practice/flashcards', title: 'practice.flashcards', desc: 'practice.flashcardsDesc', icon: Layers, tone: 'from-teal-400 to-teal-300' },
  { to: '/practice/session/numerical', title: 'practice.numerical', desc: 'practice.numericalDesc', icon: Calculator, tone: 'from-electric-400 to-teal-400' },
  { to: '/practice/formulas', title: 'practice.formulas', desc: 'practice.formulasDesc', icon: Sigma, tone: 'from-teal-500 to-electric-500' },
  { to: '/practice/session/daily', title: 'practice.daily', desc: 'practice.dailyDesc', icon: CalendarCheck, tone: 'from-amber-400 to-orange-400' },
  { to: '/practice/session/review', title: 'practice.review', desc: 'practice.reviewDesc', icon: RotateCcw, tone: 'from-rose-400 to-amber-400' },
  { to: '/cases', title: 'practice.deal', desc: 'practice.dealDesc', icon: Briefcase, tone: 'from-electric-600 to-teal-400' }
];

export default function Practice() {
  const { t } = useApp();
  const { due } = useDueCards();
  return (
    <div className="animate-rise">
      <PageHeader title={t('practice.title')} subtitle={t('practice.subtitle')} />
      <div className="grid gap-2.5 sm:grid-cols-2">
        {MODES.map((m) => (
          <Link key={m.to} to={m.to} className="flex items-center gap-3 rounded-2xl border border-white/5 bg-navy-850/80 p-4 transition hover:border-electric-500/40">
            <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${m.tone}`}><m.icon className="h-5 w-5 text-navy-950" /></span>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 font-semibold">{t(m.title)}{m.to.endsWith('flashcards') && due.length > 0 && <Chip tone="amber">{t('fc.due', { n: due.length })}</Chip>}</div>
              <div className="text-xs text-slate-400">{t(m.desc)}</div>
            </div>
            <ChevronRight className="h-5 w-5 text-slate-500" />
          </Link>
        ))}
      </div>
    </div>
  );
}
