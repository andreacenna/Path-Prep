import { useState } from 'react';
import { useLiveQuery } from 'dexie-react-hooks';
import { Upload, CheckCircle2, AlertCircle, Trash2, Plus, ShieldCheck, ChevronDown } from 'lucide-react';
import { useApp } from '../state/app';
import { db, type CvEntry, type CvSection } from '../db/db';
import { extractText, parseCvText, SECTIONS } from '../lib/cv';
import { Button, Card, Chip, PageHeader } from '../components/ui';
import type { UIKey } from '../i18n/ui';

const newEntry = (section: CvSection): CvEntry => ({ id: `m-${Date.now().toString(36)}`, section, title: '', org: '', period: '', location: '', bullets: [], verified: false, origin: 'manual' });

function EntryEditor({ e, onChange, onDelete }: { e: CvEntry; onChange: (e: CvEntry) => void; onDelete: () => void }) {
  const { t } = useApp();
  const [open, setOpen] = useState(!e.title);
  const inp = (k: 'title' | 'org' | 'period' | 'location', label: UIKey) => (
    <label className="block">
      <span className="text-[11px] text-slate-400">{t(label)}</span>
      <input value={e[k]} onChange={(ev) => onChange({ ...e, [k]: ev.target.value, verified: false })} className="w-full rounded-lg border border-white/10 bg-navy-800 px-2.5 py-2 text-sm" />
    </label>
  );
  return (
    <Card className={e.verified ? 'border-teal-500/30' : 'border-amber-400/30'}>
      <div className="flex items-start gap-2">
        <button onClick={() => setOpen(!open)} className="min-w-0 flex-1 text-left" aria-expanded={open}>
          <div className="font-semibold leading-snug">{e.title || '—'}</div>
          <div className="text-xs text-slate-400">{[e.org, e.period].filter(Boolean).join(' · ')}</div>
          <div className="mt-1 flex gap-1.5">
            {e.verified ? <Chip tone="teal"><CheckCircle2 className="h-3 w-3" />{t('cv.verified')}</Chip> : <Chip tone="amber"><AlertCircle className="h-3 w-3" />{t('cv.unverified')}</Chip>}
            {e.origin === 'brief' && <Chip>{t('cv.fromBrief')}</Chip>}
          </div>
        </button>
        <ChevronDown className={`mt-1 h-4 w-4 text-slate-400 transition ${open ? 'rotate-180' : ''}`} />
      </div>
      {open && (
        <div className="mt-3 space-y-2">
          <label className="block">
            <span className="text-[11px] text-slate-400">{t('cv.section')}</span>
            <select value={e.section} onChange={(ev) => onChange({ ...e, section: ev.target.value as CvSection })} className="w-full rounded-lg border border-white/10 bg-navy-800 px-2.5 py-2 text-sm">
              {SECTIONS.map((s) => <option key={s} value={s}>{t(`cv.sec.${s}` as UIKey)}</option>)}
            </select>
          </label>
          {inp('title', 'cv.role')}
          {inp('org', 'cv.org')}
          <div className="grid grid-cols-2 gap-2">{inp('period', 'cv.period')}{inp('location', 'cv.location')}</div>
          <label className="block">
            <span className="text-[11px] text-slate-400">{t('cv.bullets')}</span>
            <textarea rows={4} value={e.bullets.join('\n')} onChange={(ev) => onChange({ ...e, bullets: ev.target.value.split('\n'), verified: false })} className="w-full rounded-lg border border-white/10 bg-navy-800 px-2.5 py-2 text-sm" />
          </label>
        </div>
      )}
      <div className="mt-3 flex gap-2">
        {!e.verified && <Button size="sm" variant="success" onClick={() => onChange({ ...e, bullets: e.bullets.filter((b) => b.trim()), verified: true })}>{t('cv.verify')}</Button>}
        <button onClick={onDelete} className="ml-auto rounded-lg p-2 text-slate-400 hover:text-rose-300" aria-label={t('common.delete')}><Trash2 className="h-4 w-4" /></button>
      </div>
    </Card>
  );
}

export default function CvPage() {
  const { t } = useApp();
  const cv = useLiveQuery(() => db.cv.get('cv'), []);
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState('');
  const [showRaw, setShowRaw] = useState(false);
  const entries = cv?.entries ?? [];

  const save = (next: CvEntry[], extra: Partial<NonNullable<typeof cv>> = {}) => db.cv.put({ ...(cv ?? { id: 'cv', entries: [] }), ...extra, id: 'cv', entries: next });

  const onFile = async (f: File) => {
    setBusy(true);
    setMsg('');
    try {
      const text = await extractText(f);
      const parsed = parseCvText(text);
      // Keep existing verified entries; add parsed ones for review.
      await save([...entries.filter((e) => e.verified || e.origin === 'manual'), ...parsed], { fileName: f.name, rawText: text, importedAt: Date.now() });
      setMsg(t('cv.parsed', { n: parsed.length }));
    } catch {
      setMsg(t('cv.parseError'));
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="animate-rise">
      <PageHeader back="/profile" title={t('cv.title')} />
      <Card className="mb-4">
        <label className={`flex cursor-pointer flex-col items-center gap-2 rounded-xl border-2 border-dashed border-electric-500/40 p-6 text-center ${busy ? 'opacity-50' : 'hover:bg-electric-500/5'}`}>
          <Upload className="h-7 w-7 text-electric-400" />
          <span className="font-semibold">{busy ? t('cv.parsing') : t('cv.upload')}</span>
          <span className="text-xs text-slate-400">{t('cv.uploadNote')}</span>
          <input type="file" accept=".pdf,.docx,.txt,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document" className="hidden" disabled={busy} onChange={(e) => { const f = e.target.files?.[0]; if (f) void onFile(f); e.target.value = ''; }} />
        </label>
        {msg && <p className="mt-3 text-sm text-slate-300" role="status">{msg}</p>}
        <p className="mt-3 flex items-start gap-2 text-xs text-slate-400"><ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-teal-300" />{t('cv.never')}</p>
      </Card>

      {SECTIONS.map((sec) => {
        const list = entries.filter((e) => e.section === sec);
        return (
          <section key={sec} className="mb-4">
            <div className="mb-2 flex items-center justify-between">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400">{t(`cv.sec.${sec}` as UIKey)}</h2>
              <button onClick={() => save([...entries, newEntry(sec)])} className="flex items-center gap-1 text-xs text-electric-400"><Plus className="h-3.5 w-3.5" />{t('common.add')}</button>
            </div>
            <div className="space-y-2">
              {list.map((e) => (
                <EntryEditor key={e.id} e={e} onChange={(n) => save(entries.map((x) => (x.id === e.id ? n : x)))} onDelete={() => save(entries.filter((x) => x.id !== e.id))} />
              ))}
            </div>
          </section>
        );
      })}

      {cv?.rawText && (
        <Card>
          <button onClick={() => setShowRaw(!showRaw)} className="text-sm font-semibold text-slate-300">{t('cv.rawText')} ({cv.fileName})</button>
          {showRaw && <pre className="mt-2 max-h-72 overflow-auto whitespace-pre-wrap text-xs text-slate-400">{cv.rawText}</pre>}
        </Card>
      )}
    </div>
  );
}
