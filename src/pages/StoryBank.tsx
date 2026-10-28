import { useState } from 'react';
import { useLiveQuery } from 'dexie-react-hooks';
import { Plus, Trash2, Pencil } from 'lucide-react';
import { useApp } from '../state/app';
import { db, type Story } from '../db/db';
import { Button, Card, Chip, Empty, PageHeader, SectionTitle } from '../components/ui';
import type { UIKey } from '../i18n/ui';

export const BEHAVIORAL_TAGS = ['leadership', 'teamwork', 'conflict', 'failure', 'resilience', 'strengths', 'weaknesses', 'attention-to-detail', 'ethics', 'prioritization', 'commercial-awareness', 'why-ib'];
const TAG_LABEL: Record<string, [string, string]> = {
  leadership: ['Leadership', 'Leadership'], teamwork: ['Teamwork', 'Lavoro di squadra'], conflict: ['Conflict', 'Conflitto'], failure: ['Failure', 'Fallimento'],
  resilience: ['Resilience', 'Resilienza'], strengths: ['Strengths', 'Punti di forza'], weaknesses: ['Weaknesses', 'Punti deboli'], 'attention-to-detail': ['Attention to detail', 'Attenzione ai dettagli'],
  ethics: ['Ethical judgment', 'Giudizio etico'], prioritization: ['Prioritisation', 'Gestione delle priorità'], 'commercial-awareness': ['Commercial awareness', 'Consapevolezza commerciale'], 'why-ib': ['Why IB', 'Perché IB']
};

const empty = (): Story => ({ title: '', situation: '', task: '', action: '', result: '', learning: '', tags: [], updatedAt: Date.now() });

export default function StoryBank() {
  const { t, lang, afterAction } = useApp();
  const stories = useLiveQuery(() => db.stories.orderBy('updatedAt').reverse().toArray(), []) ?? [];
  const cv = useLiveQuery(() => db.cv.get('cv'), []);
  const verified = cv?.entries.filter((e) => e.verified) ?? [];
  const [editing, setEditing] = useState<Story | null>(null);

  const save = async () => {
    if (!editing || !editing.title.trim()) return;
    const s = { ...editing, updatedAt: Date.now() };
    if (s.id) await db.stories.put(s);
    else await db.stories.add(s);
    setEditing(null);
    void afterAction();
  };

  if (editing) {
    const field = (k: keyof Story, label: UIKey, rows = 3) => (
      <label className="block">
        <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-400">{t(label)}</span>
        <textarea rows={rows} value={editing[k] as string} onChange={(e) => setEditing({ ...editing, [k]: e.target.value })} className="w-full rounded-xl border-2 border-white/10 bg-navy-800 p-3 outline-none focus:border-electric-500" />
      </label>
    );
    const words = [editing.situation, editing.task, editing.action, editing.result, editing.learning].join(' ').split(/\s+/).filter(Boolean).length;
    return (
      <div className="animate-rise">
        <PageHeader title={editing.id ? t('common.edit') : t('story.new')} />
        <Card className="space-y-4">
          <label className="block">
            <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-400">{t('story.title')}</span>
            <input value={editing.title} onChange={(e) => setEditing({ ...editing, title: e.target.value })} className="w-full rounded-xl border-2 border-white/10 bg-navy-800 p-3 outline-none focus:border-electric-500" />
          </label>
          <label className="block">
            <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-400">{t('story.experience')}</span>
            <select value={editing.experienceId ?? ''} onChange={(e) => setEditing({ ...editing, experienceId: e.target.value || undefined })} className="w-full rounded-xl border border-white/10 bg-navy-800 px-3 py-3">
              <option value="">—</option>
              {verified.map((e) => <option key={e.id} value={e.id}>{[e.title, e.org].filter(Boolean).join(' · ')}</option>)}
            </select>
          </label>
          {field('situation', 'story.situation', 2)}
          {field('task', 'story.task', 2)}
          {field('action', 'story.action', 5)}
          {field('result', 'story.result', 2)}
          {field('learning', 'story.learning', 2)}
          <div>
            <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-slate-400">{t('story.tags')}</span>
            <div className="flex flex-wrap gap-2">
              {BEHAVIORAL_TAGS.map((tag) => {
                const on = editing.tags.includes(tag);
                return <button key={tag} onClick={() => setEditing({ ...editing, tags: on ? editing.tags.filter((x) => x !== tag) : [...editing.tags, tag] })} className={`rounded-full border px-3 py-1 text-sm ${on ? 'border-teal-400 bg-teal-500/15 text-teal-200' : 'border-white/10 text-slate-400'}`}>{TAG_LABEL[tag][lang === 'it' ? 1 : 0]}</button>;
              })}
            </div>
          </div>
          <p className="text-xs text-slate-400">{t('story.tip')} · ~{Math.round(words / 2.5)}s</p>
          <div className="flex gap-2">
            <Button className="flex-1" onClick={save} disabled={!editing.title.trim()}>{t('common.save')}</Button>
            <Button variant="ghost" onClick={() => setEditing(null)}>{t('common.cancel')}</Button>
          </div>
        </Card>
      </div>
    );
  }

  const covered = new Set(stories.flatMap((s) => s.tags));
  return (
    <div className="animate-rise">
      <PageHeader back="/interviews" title={t('int.stories')} subtitle={t('int.storiesDesc')} right={<Button size="sm" onClick={() => setEditing(empty())}><Plus className="h-4 w-4" />{t('common.add')}</Button>} />
      <Card className="mb-4">
        <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">{t('story.coverage')} · {covered.size}/{BEHAVIORAL_TAGS.length}</div>
        <div className="flex flex-wrap gap-1.5">{BEHAVIORAL_TAGS.map((tag) => <Chip key={tag} tone={covered.has(tag) ? 'teal' : 'muted'}>{TAG_LABEL[tag][lang === 'it' ? 1 : 0]}</Chip>)}</div>
      </Card>
      {stories.length ? (
        <div className="space-y-3">
          {stories.map((s) => (
            <Card key={s.id}>
              <div className="flex items-start gap-2">
                <h3 className="flex-1 font-semibold">{s.title}</h3>
                <button onClick={() => setEditing(s)} className="rounded p-1.5 text-slate-400 hover:text-white" aria-label={t('common.edit')}><Pencil className="h-4 w-4" /></button>
                <button onClick={() => confirm(t('common.delete') + '?') && db.stories.delete(s.id!)} className="rounded p-1.5 text-slate-400 hover:text-rose-300" aria-label={t('common.delete')}><Trash2 className="h-4 w-4" /></button>
              </div>
              <dl className="mt-2 space-y-1.5 text-sm">
                {(['situation', 'task', 'action', 'result'] as const).map((k) => s[k] && <div key={k}><dt className="inline font-bold text-teal-300">{k[0].toUpperCase()} · </dt><dd className="inline text-slate-300">{s[k]}</dd></div>)}
              </dl>
              <div className="mt-2 flex flex-wrap gap-1">{s.tags.map((tag) => <Chip key={tag}>{TAG_LABEL[tag]?.[lang === 'it' ? 1 : 0] ?? tag}</Chip>)}</div>
            </Card>
          ))}
        </div>
      ) : <Empty>{t('story.empty')}</Empty>}
      <SectionTitle>{t('int.personalized')}</SectionTitle>
      <p className="text-sm text-slate-400">{t('cv.never')}</p>
    </div>
  );
}
