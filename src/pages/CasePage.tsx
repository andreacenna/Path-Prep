import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useApp } from '../state/app';
import { recordAttempt } from '../lib/actions';
import { QuestionView } from '../components/QuestionView';
import { Markup } from '../components/Markup';
import { Button, Card, Chip, PageHeader, SectionTitle, Spinner } from '../components/ui';
import { STATUS_LABEL, STATUS_TONE } from './Cases';
import type { L } from '../content/types';

const ROWS: [keyof import('../content/types').CaseStudy, L][] = [
  ['rationale', { en: 'Strategic rationale', it: 'Logica strategica' }],
  ['valuation', { en: 'Valuation', it: 'Valutazione' }],
  ['financing', { en: 'Financing', it: 'Finanziamento' }],
  ['structure', { en: 'Transaction structure', it: "Struttura dell'operazione" }],
  ['regulatory', { en: 'Regulatory issues', it: 'Aspetti regolamentari' }],
  ['outcome', { en: 'Outcome', it: 'Esito' }],
  ['accounting', { en: 'Accounting implications', it: 'Implicazioni contabili' }]
];

export default function CasePage() {
  const { caseId = '' } = useParams();
  const { t, l, lang, content, afterAction } = useApp();
  const [qi, setQi] = useState<number | null>(null);
  if (!content) return <Spinner />;
  const c = content.cases.find((x) => x.id === caseId);
  if (!c) return <p>Not found</p>;
  const date = (d?: string) => (d ? new Date(d + 'T00:00:00').toLocaleDateString(lang, { day: 'numeric', month: 'long', year: 'numeric' }) : '—');
  return (
    <div className="animate-rise">
      <PageHeader back="/cases" title={l(c.title)} />
      <Card className="mb-3">
        <dl className="grid grid-cols-2 gap-3 text-sm">
          <div><dt className="text-xs text-slate-400">{l({ en: 'Buyer', it: 'Acquirente' })}</dt><dd className="font-medium">{c.buyer}</dd></div>
          <div><dt className="text-xs text-slate-400">{l({ en: 'Target', it: 'Target' })}</dt><dd className="font-medium">{c.target}</dd></div>
          <div><dt className="text-xs text-slate-400">{l({ en: 'Announced', it: 'Annuncio' })}</dt><dd>{date(c.announced)}</dd></div>
          <div><dt className="text-xs text-slate-400">{l({ en: 'Closed / ended', it: 'Chiusura / fine' })}</dt><dd>{date(c.closedOrEnded)}</dd></div>
          <div className="col-span-2"><dt className="text-xs text-slate-400">{l({ en: 'Transaction value', it: "Valore dell'operazione" })}</dt><dd className="font-medium">{l(c.value)}</dd></div>
        </dl>
        <div className="mt-3 flex flex-wrap gap-1.5"><Chip tone={STATUS_TONE[c.status]}>{STATUS_LABEL[c.status][lang === 'it' ? 1 : 0]}</Chip>{c.tags.map((tg) => <Chip key={tg}>{tg}</Chip>)}</div>
      </Card>
      <div className="space-y-3">
        {ROWS.map(([k, label]) => (
          <Card key={k}>
            <h2 className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-teal-300">{l(label)}</h2>
            <Markup text={l(c[k] as L)} className="text-sm" />
          </Card>
        ))}
        <Card className="border-amber-300/30">
          <h2 className="mb-2 text-xs font-semibold uppercase tracking-wider text-amber-300">{l({ en: 'Lessons for interviews', it: 'Lezioni per i colloqui' })}</h2>
          <ul className="list-disc space-y-1 pl-5 text-sm text-slate-200">{c.interviewLessons.map((x, i) => <li key={i}>{l(x)}</li>)}</ul>
        </Card>
      </div>

      {c.questions.length > 0 && (
        <>
          <SectionTitle>{t('practice.deal')}</SectionTitle>
          {qi === null ? (
            <Button full onClick={() => setQi(0)}>{t('common.start')} · {c.questions.length} {t('common.questions')}</Button>
          ) : qi < c.questions.length ? (
            <Card>
              <QuestionView
                key={c.questions[qi].id}
                question={c.questions[qi]}
                onResult={async (r) => {
                  const q = c.questions[qi];
                  const { xp } = await recordAttempt({ questionId: q.id, topic: q.topic, academyId: 'cases', correct: r.correct, difficulty: q.difficulty, timeMs: r.timeMs, source: 'deal' });
                  void afterAction(xp);
                }}
                onContinue={() => setQi(qi + 1)}
              />
            </Card>
          ) : (
            <p className="text-center font-semibold text-teal-300">✓ {t('practice.finished')}</p>
          )}
        </>
      )}

      <SectionTitle>{t('common.sources')}</SectionTitle>
      <ul className="space-y-1 text-xs text-slate-400">
        {c.sources.map((s, i) => <li key={i}>{s.url ? <a href={s.url} target="_blank" rel="noopener noreferrer" className="underline hover:text-white">{s.label}</a> : s.label}</li>)}
        <li className="pt-1 text-slate-400">{t('common.reviewed')}: {c.reviewed}</li>
      </ul>
    </div>
  );
}
