import { useState } from 'react';
import { ACADEMIES } from '../content/curriculum';
import { updateSettings } from '../db/db';
import { useApp } from '../state/app';
import { Button } from '../components/ui';
import { Icon } from '../components/Icon';
import { LogoMark } from '../components/Logo';
import { seedBriefProfile } from '../lib/cv';

const GOALS = [
  { xp: 20, key: 'onb.goalCasual' },
  { xp: 50, key: 'onb.goalRegular' },
  { xp: 100, key: 'onb.goalSerious' },
  { xp: 200, key: 'onb.goalIntense' }
] as const;

export function Onboarding() {
  const { t, l, lang, setLang } = useApp();
  const [path, setPath] = useState('accounting');
  const [goal, setGoal] = useState(50);
  const [name, setName] = useState('');

  const finish = async () => {
    await seedBriefProfile();
    await updateSettings({ onboarded: true, activePath: path, dailyGoalXP: goal, name: name.trim(), lang });
  };

  return (
    <div className="min-h-screen bg-navy-950 px-4 pb-10 pt-10 text-slate-100">
      <div className="mx-auto max-w-md animate-rise">
        <div className="mb-6 flex flex-col items-center text-center">
          <LogoMark size={72} />
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight">{t('onb.welcome')}</h1>
          <p className="mt-2 text-slate-400">{t('onb.tagline')}</p>
        </div>

        <h2 className="mb-2 text-sm font-semibold uppercase tracking-wider text-slate-400">{t('onb.chooseLang')}</h2>
        <div className="mb-6 grid grid-cols-2 gap-2">
          {(['en', 'it'] as const).map((x) => (
            <button key={x} onClick={() => setLang(x)} className={`rounded-xl border-2 p-3 font-semibold ${lang === x ? 'border-electric-500 bg-electric-500/15' : 'border-white/10 bg-navy-850'}`}>
              {x === 'en' ? '🇬🇧 English' : '🇮🇹 Italiano'}
            </button>
          ))}
        </div>

        <label className="mb-6 block">
          <span className="mb-2 block text-sm font-semibold uppercase tracking-wider text-slate-400">{t('profile.name')}</span>
          <input value={name} onChange={(e) => setName(e.target.value)} className="w-full rounded-xl border-2 border-white/10 bg-navy-850 px-4 py-3 outline-none focus:border-electric-500" autoComplete="given-name" />
        </label>

        <h2 className="mb-2 text-sm font-semibold uppercase tracking-wider text-slate-400">{t('onb.choosePath')}</h2>
        <div className="mb-6 grid grid-cols-1 gap-2">
          {ACADEMIES.filter((a) => ['accounting', 'ma', 'valuation', 'corporate-finance', 'private-equity', 'interviews'].includes(a.id)).map((a) => (
            <button key={a.id} onClick={() => setPath(a.id)} className={`flex items-center gap-3 rounded-xl border-2 p-3 text-left ${path === a.id ? 'border-electric-500 bg-electric-500/15' : 'border-white/10 bg-navy-850'}`}>
              <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${a.accent}`}><Icon name={a.icon} className="h-5 w-5 text-navy-950" /></span>
              <span className="font-semibold">{l(a.title)}</span>
            </button>
          ))}
        </div>

        <h2 className="mb-2 text-sm font-semibold uppercase tracking-wider text-slate-400">{t('onb.goal')}</h2>
        <div className="mb-8 grid grid-cols-2 gap-2">
          {GOALS.map((g) => (
            <button key={g.xp} onClick={() => setGoal(g.xp)} className={`rounded-xl border-2 p-3 text-sm font-semibold ${goal === g.xp ? 'border-teal-400 bg-teal-500/15' : 'border-white/10 bg-navy-850'}`}>
              {t(g.key)}
            </button>
          ))}
        </div>

        <Button full size="lg" onClick={finish}>{t('onb.go')}</Button>
        <p className="mt-4 text-center text-xs text-slate-400">{t('onb.local')}</p>
      </div>
    </div>
  );
}
