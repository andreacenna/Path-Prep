import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLiveQuery } from 'dexie-react-hooks';
import { ShieldCheck } from 'lucide-react';
import { useApp } from '../state/app';
import { db } from '../db/db';
import { personalizedQuestions, type PersonalQuestion } from '../lib/cv';
import { InterviewAnswer } from '../components/InterviewAnswer';
import type { InterviewQuestion } from '../content/types';
import { Button, Card, Empty, PageHeader } from '../components/ui';

/** Wrap a personalised prompt as an interview question with a generic behavioural rubric. */
function asInterview(p: PersonalQuestion): InterviewQuestion {
  return {
    id: `personal:${p.id}`,
    type: 'behavioral',
    topic: p.topic,
    difficulty: 2,
    prompt: p.prompt,
    reference: p.guide,
    seconds: 120,
    rubric: [
      { text: { en: 'Clear structure (context → your actions → outcome → reflection)', it: 'Struttura chiara (contesto → tue azioni → risultato → riflessione)' }, essential: true },
      { text: { en: 'Specific about what I personally did (not "we")', it: 'Specifico su cosa ho fatto io personalmente (non "noi")' }, essential: true },
      { text: { en: 'Every fact and number is true and verifiable', it: 'Ogni fatto e numero è vero e verificabile' }, essential: true },
      { text: { en: 'Linked to skills that matter in banking', it: 'Collegato a competenze utili in banca' }, essential: false },
      { text: { en: 'Under ~2 minutes, no filler', it: 'Sotto i ~2 minuti, senza riempitivi' }, essential: false }
    ]
  };
}

export default function Personalized() {
  const { t, l } = useApp();
  const cv = useLiveQuery(() => db.cv.get('cv'), []);
  const qs = personalizedQuestions(cv?.entries ?? []);
  const [active, setActive] = useState<PersonalQuestion | null>(null);

  if (active) {
    return (
      <div className="animate-rise">
        <PageHeader title={t('int.personalized')} />
        <InterviewAnswer key={active.id} q={asInterview(active)} mode="written" onSaved={() => undefined} />
        <Button full variant="secondary" className="mt-4" onClick={() => setActive(null)}>{t('common.back')}</Button>
      </div>
    );
  }
  return (
    <div className="animate-rise">
      <PageHeader back="/interviews" title={t('int.personalized')} subtitle={t('int.personalizedDesc')} />
      <p className="mb-4 flex items-start gap-2 text-sm text-slate-400"><ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-teal-300" />{t('cv.never')}</p>
      {qs.length ? (
        <ul className="space-y-2">
          {qs.map((p) => (
            <li key={p.id}>
              <button onClick={() => setActive(p)} className="w-full rounded-xl border border-white/5 bg-navy-850/80 p-3 text-left hover:border-electric-500/40">
                <div className="text-sm font-medium">{l(p.prompt)}</div>
                <div className="mt-1 text-xs text-slate-400">{l(p.guide)}</div>
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <Card>
          <Empty>{t('cv.unverified')}</Empty>
          <Link to="/profile/cv" className="mt-3 block"><Button full variant="secondary">{t('profile.cv')}</Button></Link>
        </Card>
      )}
    </div>
  );
}
