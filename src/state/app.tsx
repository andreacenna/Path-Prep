import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { useLiveQuery } from 'dexie-react-hooks';
import { db, DEFAULT_SETTINGS, getSettings, updateSettings, type Settings } from '../db/db';
import { translate, type UIKey } from '../i18n/ui';
import type { L, Lang } from '../content/types';
import { loadContent, type ContentBundle } from '../content/registry';
import { checkAchievements } from '../lib/actions';

interface Toast {
  id: number;
  text: string;
  kind: 'xp' | 'achievement' | 'info';
}

interface AppCtx {
  ready: boolean;
  settings: Settings;
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: UIKey, vars?: Record<string, string | number>) => string;
  l: (x: L | undefined) => string;
  content: ContentBundle | null;
  toast: (text: string, kind?: Toast['kind']) => void;
  toasts: Toast[];
  /** Run after any learning action: unlocks achievements and shows toasts. */
  afterAction: (xp?: number) => Promise<void>;
}

const Ctx = createContext<AppCtx | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const stored = useLiveQuery(() => db.settings.get('settings').then((x) => x ?? null), []);
  const ready = stored !== undefined;
  const settings: Settings = useMemo(() => ({ ...DEFAULT_SETTINGS, ...(stored ?? {}) }), [stored]);
  const lang = settings.lang;
  const [content, setContent] = useState<ContentBundle | null>(null);
  const [toasts, setToasts] = useState<Toast[]>([]);

  useEffect(() => {
    void getSettings();
    loadContent().then(setContent);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.classList.toggle('reduce-motion', settings.reducedMotion);
  }, [lang, settings.reducedMotion]);

  const t = useCallback((key: UIKey, vars?: Record<string, string | number>) => translate(lang, key, vars), [lang]);
  const l = useCallback((x: L | undefined) => (x ? x[lang] || x.en : ''), [lang]);
  const setLang = useCallback((next: Lang) => void updateSettings({ lang: next }), []);

  const toast = useCallback((text: string, kind: Toast['kind'] = 'info') => {
    const id = Date.now() + Math.random();
    setToasts((ts) => [...ts, { id, text, kind }]);
    setTimeout(() => setToasts((ts) => ts.filter((x) => x.id !== id)), kind === 'achievement' ? 4000 : 2200);
  }, []);

  const afterAction = useCallback(
    async (xp?: number) => {
      if (xp && xp > 0) toast(translate(lang, 'xp.earned', { n: xp }), 'xp');
      const fresh = await checkAchievements();
      if (fresh.length) {
        const { ACHIEVEMENTS } = await import('../lib/achievements');
        for (const id of fresh) {
          const a = ACHIEVEMENTS.find((x) => x.id === id);
          if (a) toast(`${translate(lang, 'ach.unlocked')}: ${a.title[lang]}`, 'achievement');
        }
      }
    },
    [lang, toast]
  );

  const value = useMemo(() => ({ ready, settings, lang, setLang, t, l, content, toast, toasts, afterAction }), [ready, settings, lang, setLang, t, l, content, toast, toasts, afterAction]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useApp(): AppCtx {
  const c = useContext(Ctx);
  if (!c) throw new Error('useApp outside provider');
  return c;
}
