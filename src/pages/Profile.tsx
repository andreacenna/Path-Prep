import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLiveQuery } from 'dexie-react-hooks';
import { Download, Upload, Trash2, Smartphone, FileText, Info, Bell, ChevronRight, HardDrive, Lock } from 'lucide-react';
import { useApp } from '../state/app';
import { db, updateSettings } from '../db/db';
import { useXP, useLessonProgress, useTopicMastery } from '../state/hooks';
import { ACHIEVEMENTS } from '../lib/achievements';
import { levelProgress, levelTitle } from '../lib/gamification';
import { deleteAllData, downloadJSON, exportBackup, importBackup, validateBackup } from '../lib/backup';
import { requestNotificationPermission } from '../lib/notifications';
import { Icon } from '../components/Icon';
import { Button, Card, PageHeader, ProgressBar, SectionTitle } from '../components/ui';

type BIPEvent = Event & { prompt: () => Promise<void>; userChoice: Promise<{ outcome: string }> };
let deferredPrompt: BIPEvent | null = null;
if (typeof window !== 'undefined') {
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e as BIPEvent;
  });
}

export default function Profile() {
  const { t, l, lang, setLang, settings, toast } = useApp();
  const xp = useXP();
  const progress = useLessonProgress();
  const mastery = useTopicMastery();
  const unlocked = useLiveQuery(() => db.achievements.toArray(), []) ?? [];
  const cards = useLiveQuery(() => db.cards.count(), []) ?? 0;
  const attempts = useLiveQuery(() => db.attempts.count(), []) ?? 0;
  const fileRef = useRef<HTMLInputElement>(null);
  const [storage, setStorage] = useState<{ usage: number; quota: number; persisted: boolean } | null>(null);
  const [canInstall, setCanInstall] = useState(!!deferredPrompt);
  const standalone = typeof window !== 'undefined' && (window.matchMedia('(display-mode: standalone)').matches || (navigator as unknown as { standalone?: boolean }).standalone === true);
  const lp = levelProgress(xp.total);

  useEffect(() => {
    (async () => {
      if (navigator.storage?.estimate) {
        const e = await navigator.storage.estimate();
        const persisted = (await navigator.storage.persisted?.()) ?? false;
        setStorage({ usage: e.usage ?? 0, quota: e.quota ?? 0, persisted });
      }
    })();
    const h = () => setCanInstall(true);
    window.addEventListener('beforeinstallprompt', h);
    return () => window.removeEventListener('beforeinstallprompt', h);
  }, []);

  const doExport = async () => downloadJSON(await exportBackup(), `path-academy-backup-${new Date().toISOString().slice(0, 10)}.json`);
  const doImport = async (f: File) => {
    try {
      const obj = JSON.parse(await f.text());
      if (!validateBackup(obj)) throw new Error('bad');
      if (!confirm(t('profile.importConfirm'))) return;
      await importBackup(obj);
      toast(t('profile.importOk'));
    } catch {
      toast(t('profile.importBad'));
    }
  };
  const doDelete = async () => {
    if (prompt(t('profile.deleteConfirm')) !== 'DELETE') return;
    await deleteAllData();
    location.reload();
  };
  const completed = Object.values(progress).filter((p) => p.status === 'completed').length;
  const masteredTopics = [...mastery.values()].filter((m) => m.level === 'mastered').length;

  return (
    <div className="animate-rise">
      <PageHeader title={t('profile.title')} />
      <Card className="mb-3 flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-electric-500 to-teal-400 text-xl font-extrabold text-navy-950">{(settings.name || 'P').charAt(0).toUpperCase()}</div>
        <div className="flex-1">
          <div className="font-bold">{settings.name || 'PATH'}</div>
          <div className="text-sm text-slate-400">{t('common.level')} {lp.level} · {levelTitle(lp.level, lang)}</div>
          <ProgressBar value={lp.pct} className="mt-2" />
        </div>
      </Card>

      <SectionTitle>{t('profile.stats')}</SectionTitle>
      <div className="grid grid-cols-3 gap-2">
        {[
          [xp.total, 'XP'],
          [xp.streak.longest, lang === 'it' ? 'Serie max' : 'Best streak'],
          [completed, lang === 'it' ? 'Lezioni' : 'Lessons'],
          [attempts, lang === 'it' ? 'Risposte' : 'Answers'],
          [cards, 'Flashcards'],
          [masteredTopics, t('mastery.mastered')]
        ].map(([v, label]) => (
          <Card key={String(label)} className="!p-3 text-center"><div className="text-xl font-extrabold">{Number(v).toLocaleString(lang)}</div><div className="text-[11px] text-slate-400">{label}</div></Card>
        ))}
      </div>

      <SectionTitle>{t('profile.achievements')} · {unlocked.length}/{ACHIEVEMENTS.length}</SectionTitle>
      <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
        {ACHIEVEMENTS.map((a) => {
          const on = unlocked.some((u) => u.id === a.id);
          return (
            <div key={a.id} className={`rounded-xl border p-2.5 text-center ${on ? 'border-amber-300/40 bg-amber-300/10' : 'border-white/5 bg-navy-850 text-slate-400'}`} title={l(a.desc)}>
              {on ? <Icon name={a.icon} className="mx-auto h-6 w-6 text-amber-300" /> : <Lock className="mx-auto h-6 w-6 text-slate-400" />}
              <div className="mt-1 text-[11px] font-semibold leading-tight">{l(a.title)}</div>
              <div className="mt-0.5 text-[9px] leading-tight text-slate-400">{l(a.desc)}</div>
            </div>
          );
        })}
      </div>

      <SectionTitle>{t('profile.cv')}</SectionTitle>
      <Link to="/profile/cv" className="flex items-center gap-3 rounded-2xl border border-white/5 bg-navy-850/80 p-4 hover:border-electric-500/40">
        <FileText className="h-5 w-5 text-electric-400" /><span className="flex-1 font-medium">{t('cv.title')}</span><ChevronRight className="h-5 w-5 text-slate-500" />
      </Link>

      <SectionTitle>{t('profile.settings')}</SectionTitle>
      <Card className="space-y-4">
        <div>
          <span className="mb-1.5 block text-sm font-semibold text-slate-300">{t('profile.language')}</span>
          <div className="grid grid-cols-2 gap-2">
            {(['en', 'it'] as const).map((x) => <button key={x} onClick={() => setLang(x)} className={`rounded-xl border-2 p-2.5 text-sm font-semibold ${lang === x ? 'border-electric-500 bg-electric-500/15' : 'border-white/10'}`}>{x === 'en' ? 'English' : 'Italiano'}</button>)}
          </div>
        </div>
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-slate-300">{t('profile.name')}</span>
          <input defaultValue={settings.name} onBlur={(e) => updateSettings({ name: e.target.value.trim() })} className="w-full rounded-xl border border-white/10 bg-navy-800 px-3 py-2.5" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-slate-300">{t('profile.goal')}: {settings.dailyGoalXP} XP</span>
          <input type="range" min={10} max={300} step={10} value={settings.dailyGoalXP} onChange={(e) => updateSettings({ dailyGoalXP: +e.target.value })} className="w-full accent-electric-500" />
        </label>
        {([
          ['reducedMotion', 'profile.reducedMotion'],
          ['saveRecordings', 'profile.recordings'],
          ['speechConsent', 'profile.speech']
        ] as const).map(([k, label]) => (
          <label key={k} className="flex items-center justify-between gap-3">
            <span className="text-sm">{t(label)}</span>
            <input type="checkbox" checked={settings[k]} onChange={(e) => updateSettings({ [k]: e.target.checked })} className="h-5 w-5 accent-electric-500" />
          </label>
        ))}
        <div>
          <div className="flex items-center justify-between gap-3">
            <span className="flex items-center gap-2 text-sm"><Bell className="h-4 w-4" />{t('profile.notifications')}</span>
            <select value={settings.reminderHour ?? ''} onChange={async (e) => {
              const v = e.target.value === '' ? null : +e.target.value;
              if (v !== null && (await requestNotificationPermission()) !== 'granted') return toast('Notifications blocked by the browser.');
              await updateSettings({ reminderHour: v });
            }} className="rounded-lg border border-white/10 bg-navy-800 px-2 py-1.5 text-sm">
              <option value="">Off</option>
              {[8, 12, 17, 19, 21].map((h) => <option key={h} value={h}>{String(h).padStart(2, '0')}:00</option>)}
            </select>
          </div>
          <p className="mt-1.5 text-xs text-slate-400">{t('profile.notifNote')}</p>
        </div>
      </Card>

      <SectionTitle>{t('profile.install')}</SectionTitle>
      <Card className="space-y-2 text-sm text-slate-300">
        {standalone ? <p className="flex items-center gap-2 text-teal-300"><Smartphone className="h-4 w-4" />{t('profile.installed')}</p> : (
          <>
            {canInstall && <Button full onClick={async () => { await deferredPrompt?.prompt(); deferredPrompt = null; setCanInstall(false); }}><Smartphone className="h-4 w-4" />{t('profile.installNow')}</Button>}
            <p>📱 {t('profile.installIOS')}</p>
            <p>🤖 {t('profile.installAndroid')}</p>
            <p>💻 {t('profile.installDesktop')}</p>
          </>
        )}
      </Card>

      <SectionTitle>{t('profile.data')}</SectionTitle>
      <Card className="space-y-3">
        <p className="text-xs text-slate-400">{t('profile.dataNote')}</p>
        {storage && (
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <HardDrive className="h-4 w-4" />{t('profile.storage')}: {(storage.usage / 1048576).toFixed(1)} MB
            {storage.persisted ? <span className="text-teal-300">· {t('profile.persisted')}</span> : (
              <button className="ml-auto text-electric-400 underline" onClick={async () => { const ok = await navigator.storage.persist?.(); setStorage({ ...storage, persisted: !!ok }); }}>{t('profile.persist')}</button>
            )}
          </div>
        )}
        <div className="grid grid-cols-2 gap-2">
          <Button variant="secondary" onClick={doExport}><Download className="h-4 w-4" />{t('profile.export')}</Button>
          <Button variant="secondary" onClick={() => fileRef.current?.click()}><Upload className="h-4 w-4" />{t('profile.import')}</Button>
        </div>
        <input ref={fileRef} type="file" accept="application/json,.json" className="hidden" onChange={(e) => { const f = e.target.files?.[0]; if (f) void doImport(f); e.target.value = ''; }} />
        <Button full variant="danger" onClick={doDelete}><Trash2 className="h-4 w-4" />{t('profile.deleteAll')}</Button>
      </Card>

      <Link to="/about" className="mt-4 flex items-center gap-2 text-sm text-slate-400 hover:text-white"><Info className="h-4 w-4" />{t('profile.about')}</Link>
    </div>
  );
}
