import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Home, GraduationCap, Dumbbell, MessagesSquare, Newspaper, User, WifiOff, Award, Zap } from 'lucide-react';
import { useRegisterSW } from 'virtual:pwa-register/react';
import { useApp } from '../state/app';
import type { UIKey } from '../i18n/ui';
import { Logo } from './Logo';

const NAV: { to: string; key: UIKey; icon: typeof Home }[] = [
  { to: '/', key: 'nav.home', icon: Home },
  { to: '/learn', key: 'nav.learn', icon: GraduationCap },
  { to: '/practice', key: 'nav.practice', icon: Dumbbell },
  { to: '/interviews', key: 'nav.interviews', icon: MessagesSquare },
  { to: '/news', key: 'nav.news', icon: Newspaper },
  { to: '/profile', key: 'nav.profile', icon: User }
];

function useOnline() {
  const [online, setOnline] = useState(typeof navigator === 'undefined' ? true : navigator.onLine);
  useEffect(() => {
    const on = () => setOnline(true);
    const off = () => setOnline(false);
    window.addEventListener('online', on);
    window.addEventListener('offline', off);
    return () => {
      window.removeEventListener('online', on);
      window.removeEventListener('offline', off);
    };
  }, []);
  return online;
}

export function Layout() {
  const { t, toasts } = useApp();
  const online = useOnline();
  const loc = useLocation();
  const { needRefresh: [needRefresh], updateServiceWorker } = useRegisterSW();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [loc.pathname]);

  return (
    <div className="min-h-screen bg-navy-950 text-slate-100 lg:flex">
      {/* Desktop sidebar */}
      <aside className="sticky top-0 hidden h-screen w-60 shrink-0 flex-col border-r border-white/5 bg-navy-900 p-4 lg:flex">
        <div className="mb-8 px-2"><Logo /></div>
        <nav className="flex flex-col gap-1" aria-label="Main">
          {NAV.map(({ to, key, icon: I }) => (
            <NavLink key={to} to={to} end={to === '/'} className={({ isActive }) => `flex items-center gap-3 rounded-xl px-3 py-2.5 font-medium transition ${isActive ? 'bg-electric-500/15 text-white' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}>
              <I className="h-5 w-5" aria-hidden="true" />
              {t(key)}
            </NavLink>
          ))}
        </nav>
        <p className="mt-auto px-2 text-xs text-slate-500">PATH Academy · v0.1</p>
      </aside>

      <div className="min-w-0 flex-1">
        {!online && (
          <div className="flex items-center justify-center gap-2 bg-amber-500/15 px-3 py-1.5 text-xs text-amber-200" role="status">
            <WifiOff className="h-3.5 w-3.5" /> {t('common.offline')}
          </div>
        )}
        {needRefresh && (
          <div className="flex items-center justify-center gap-3 bg-electric-500/20 px-3 py-2 text-sm" role="status">
            {t('update.ready')}
            <button className="rounded-lg bg-electric-500 px-3 py-1 font-semibold" onClick={() => updateServiceWorker(true)}>{t('update.reload')}</button>
          </div>
        )}
        <main className="mx-auto w-full max-w-3xl px-4 pb-28 pt-5 lg:px-8 lg:pb-12 lg:pt-8">
          <Outlet />
        </main>
      </div>

      {/* Mobile bottom nav */}
      <nav className="fixed inset-x-0 bottom-0 z-30 border-t border-white/5 bg-navy-900/95 backdrop-blur lg:hidden" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }} aria-label="Main">
        <div className="mx-auto grid max-w-lg grid-cols-6">
          {NAV.map(({ to, key, icon: I }) => (
            <NavLink key={to} to={to} end={to === '/'} className={({ isActive }) => `flex min-h-[56px] flex-col items-center justify-center gap-0.5 text-[10px] font-medium transition ${isActive ? 'text-teal-300' : 'text-slate-400'}`}>
              {({ isActive }) => (
                <>
                  <I className={`h-[22px] w-[22px] ${isActive ? 'drop-shadow-[0_0_6px_rgba(45,212,191,.6)]' : ''}`} aria-hidden="true" />
                  <span className="truncate">{t(key)}</span>
                </>
              )}
            </NavLink>
          ))}
        </div>
      </nav>

      <Toasts toasts={toasts} />
    </div>
  );
}

export function Toasts({ toasts }: { toasts: { id: number; text: string; kind: string }[] }) {
  return (
    <div className="pointer-events-none fixed inset-x-0 top-3 z-50 flex flex-col items-center gap-2 px-4" aria-live="polite">
      {toasts.map((x) => (
        <div key={x.id} className={`flex animate-pop items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold shadow-xl ${x.kind === 'achievement' ? 'bg-amber-400 text-navy-950' : x.kind === 'xp' ? 'bg-teal-400 text-navy-950' : 'bg-navy-700 text-white'}`}>
          {x.kind === 'achievement' ? <Award className="h-4 w-4" /> : x.kind === 'xp' ? <Zap className="h-4 w-4" /> : null}
          {x.text}
        </div>
      ))}
    </div>
  );
}
