import { useEffect } from 'react';
import { useApp } from '../state/app';
import { db } from '../db/db';
import { dayKey } from './dates';

/**
 * Browser-native study reminders, no server: while the app (or its installed window) is open,
 * we check every few minutes whether the daily goal is still pending after the chosen hour and
 * show a single local notification per day. True background push would require a push server
 * (not free to operate reliably), so it is intentionally not used — see docs/LIMITATIONS.md.
 */
export async function requestNotificationPermission(): Promise<NotificationPermission> {
  if (!('Notification' in window)) return 'denied';
  if (Notification.permission === 'granted') return 'granted';
  return Notification.requestPermission();
}

async function showLocal(title: string, body: string) {
  try {
    const reg = await navigator.serviceWorker?.getRegistration();
    if (reg) await reg.showNotification(title, { body, icon: 'icons/icon-192.png', badge: 'icons/icon-192.png', tag: 'path-daily' });
    else new Notification(title, { body, icon: 'icons/icon-192.png' });
  } catch {
    /* notifications unsupported */
  }
}

export function useReminders() {
  const { settings, lang } = useApp();
  useEffect(() => {
    if (settings.reminderHour === null || !('Notification' in window) || Notification.permission !== 'granted') return;
    const check = async () => {
      const today = dayKey();
      const key = `path-reminded-${today}`;
      try {
        if (localStorage.getItem(key)) return;
      } catch {
        return;
      }
      if (new Date().getHours() < (settings.reminderHour ?? 24)) return;
      const xpToday = (await db.xp.where('day').equals(today).toArray()).reduce((s, x) => s + x.amount, 0);
      if (xpToday >= settings.dailyGoalXP) return;
      try {
        localStorage.setItem(key, '1');
      } catch {
        /* ignore */
      }
      await showLocal(
        'PATH Academy',
        lang === 'it' ? `Ti mancano ${settings.dailyGoalXP - xpToday} XP all'obiettivo di oggi. Bastano 5 minuti.` : `${settings.dailyGoalXP - xpToday} XP to today's goal. Five minutes is enough.`
      );
    };
    void check();
    const id = setInterval(check, 5 * 60 * 1000);
    return () => clearInterval(id);
  }, [settings.reminderHour, settings.dailyGoalXP, lang]);
}
