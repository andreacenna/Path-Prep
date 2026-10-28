import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Info, RefreshCw, AlertTriangle, ChevronDown } from 'lucide-react';
import { useApp } from '../state/app';
import { useNews, CATEGORY_LABEL, CATEGORY_WHY, CONCEPTS, type NewsCategory, type NewsItem } from '../lib/news';
import { STUB_INDEX } from '../content/curriculum';
import { Button, Card, Chip, Empty, PageHeader, Spinner } from '../components/ui';

function Item({ n }: { n: NewsItem }) {
  const { t, l, lang, content } = useApp();
  const [open, setOpen] = useState(false);
  const lessons = [...new Set(n.concepts.flatMap((c) => CONCEPTS[c]?.lessons ?? []))].filter((id) => content?.lessonById[id]);
  return (
    <Card as="article">
      <div className="mb-1 flex flex-wrap items-center gap-1.5">
        <Chip tone="blue">{l(CATEGORY_LABEL[n.category])}</Chip>
        <span className="text-[11px] text-slate-400">{n.source} · {new Date(n.published).toLocaleDateString(lang, { day: 'numeric', month: 'short', year: 'numeric' })}</span>
      </div>
      <h3 className="font-semibold leading-snug text-white" lang={n.lang}>{n.title}</h3>
      {n.excerpt && <p className="mt-1 text-sm text-slate-400" lang={n.lang}><span className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">{t('news.excerpt')}: </span>{n.excerpt}</p>}
      <div className="mt-2 flex items-center gap-3">
        <a href={n.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-medium text-electric-400 hover:underline">{t('news.read')}<ExternalLink className="h-3.5 w-3.5" /></a>
        <button onClick={() => setOpen(!open)} className="ml-auto inline-flex items-center gap-1 text-sm text-teal-300" aria-expanded={open}>{t('news.concepts')}<ChevronDown className={`h-4 w-4 transition ${open ? 'rotate-180' : ''}`} /></button>
      </div>
      {open && (
        <div className="mt-3 animate-rise space-y-3 border-t border-white/5 pt-3 text-sm">
          <div><div className="mb-0.5 text-xs font-semibold uppercase tracking-wide text-amber-300">{t('news.why')}</div><p className="text-slate-300">{l(CATEGORY_WHY[n.category])}</p></div>
          {n.concepts.map((c) => CONCEPTS[c] && (
            <div key={c} className="rounded-xl bg-navy-800 p-3">
              <div className="font-semibold text-teal-300">{l(CONCEPTS[c].name)}</div>
              <p className="mt-0.5 text-slate-300">{l(CONCEPTS[c].explain)}</p>
              <p className="mt-1.5 text-xs text-slate-400"><span className="font-semibold">{t('news.interview')}:</span> {l(CONCEPTS[c].interview)}</p>
            </div>
          ))}
          {lessons.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {lessons.slice(0, 3).map((id) => <Link key={id} to={`/lesson/${id}`} className="rounded-full border border-electric-500/40 px-3 py-1 text-xs text-electric-300">{t('news.openLesson')}: {l(STUB_INDEX[id]?.stub.title)}</Link>)}
              <Link to={`/practice/session/news?lessons=${lessons.join(',')}&item=${encodeURIComponent(n.id)}`}><Button size="sm" variant="secondary">{t('news.quiz')}</Button></Link>
            </div>
          )}
        </div>
      )}
    </Card>
  );
}

export default function News() {
  const { t, l, lang } = useApp();
  const { data, loading } = useNews();
  const [cat, setCat] = useState<NewsCategory | ''>('');
  if (loading) return <Spinner />;
  const items = data?.items ?? [];
  const cats = [...new Set(items.map((i) => i.category))];
  const stale = data ? Date.now() - new Date(data.generatedAt).getTime() > 2 * 86400000 : false;
  return (
    <div className="animate-rise">
      <PageHeader title={t('news.title')} subtitle={t('news.subtitle')} />
      {data && (
        <p className="mb-3 flex items-center gap-1.5 text-xs text-slate-400"><RefreshCw className="h-3.5 w-3.5" />{t('news.updated')}: {new Date(data.generatedAt).toLocaleString(lang)} · {data.sources.filter((s) => s.ok).length}/{data.sources.length} sources</p>
      )}
      {stale && <p className="mb-3 flex items-start gap-2 rounded-xl bg-amber-500/10 p-3 text-xs text-amber-200"><AlertTriangle className="h-4 w-4 shrink-0" />{t('news.stale')}</p>}
      {!items.length ? (
        <Empty>{t('news.none')}</Empty>
      ) : (
        <>
          <div className="-mx-4 mb-3 flex gap-2 overflow-x-auto px-4 pb-1 scrollbar-none">
            <button onClick={() => setCat('')} className={`shrink-0 rounded-full border px-3 py-1 text-sm ${!cat ? 'border-teal-400 text-teal-200' : 'border-white/10 text-slate-400'}`}>{t('common.all')}</button>
            {cats.map((c) => <button key={c} onClick={() => setCat(c)} className={`shrink-0 rounded-full border px-3 py-1 text-sm ${cat === c ? 'border-teal-400 text-teal-200' : 'border-white/10 text-slate-400'}`}>{l(CATEGORY_LABEL[c])}</button>)}
          </div>
          <div className="space-y-3">{items.filter((i) => !cat || i.category === cat).map((n) => <Item key={n.id} n={n} />)}</div>
        </>
      )}
      <p className="mt-5 flex items-start gap-2 text-xs text-slate-400"><Info className="mt-0.5 h-3.5 w-3.5 shrink-0" />{t('news.autoNote')} {t('news.langNote')}</p>
    </div>
  );
}
