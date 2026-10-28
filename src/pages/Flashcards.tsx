import { useMemo, useState } from 'react';
import { useLiveQuery } from 'dexie-react-hooks';
import { Layers, Info } from 'lucide-react';
import { useApp } from '../state/app';
import { STUB_INDEX } from '../content/curriculum';
import { db, type CardState } from '../db/db';
import { addCardsToDeck, reviewFlashcard } from '../lib/actions';
import { formatInterval, previewIntervals, Rating, type SrsRating } from '../lib/srs';
import { Markup } from '../components/Markup';
import { Button, Card, Empty, PageHeader, ProgressBar, Spinner } from '../components/ui';

export default function Flashcards() {
  const { t, l, lang, content, afterAction } = useApp();
  const cards = useLiveQuery(() => db.cards.toArray(), []);
  const [ahead, setAhead] = useState(false);
  const [flipped, setFlipped] = useState(false);
  const [sessionDone, setSessionDone] = useState(0);
  const [queueIds, setQueueIds] = useState<string[] | null>(null);

  const fcById = useMemo(() => Object.fromEntries((content?.flashcards ?? []).map((c) => [c.id, c])), [content]);

  if (!cards || !content) return <Spinner />;
  const now = Date.now();
  const due = cards.filter((c) => c.due <= now && fcById[c.cardId]).sort((a, b) => a.due - b.due);
  const upcoming = cards.filter((c) => c.due > now && fcById[c.cardId]).sort((a, b) => a.due - b.due);

  // Freeze the queue at session start so re-scheduled "Again" cards come back after the rest.
  const active = queueIds ?? (ahead ? upcoming.slice(0, 20) : due).map((c) => c.cardId);
  if (!queueIds && active.length) setQueueIds(active);
  const current: CardState | undefined = cards.find((c) => c.cardId === (queueIds ?? active)[0]);
  const fc = current ? fcById[current.cardId] : null;

  const rate = async (r: SrsRating) => {
    if (!current) return;
    await reviewFlashcard(current.cardId, r);
    void afterAction();
    setFlipped(false);
    setSessionDone((n) => n + 1);
    setQueueIds((q) => {
      const rest = (q ?? []).slice(1);
      return r === Rating.Again ? [...rest, current.cardId] : rest;
    });
  };

  const notInDeck = content.flashcards.filter((c) => !cards.some((x) => x.cardId === c.id));

  return (
    <div className="animate-rise">
      <PageHeader back="/practice" title={t('fc.title')} subtitle={`${t('fc.due', { n: due.length })} · ${t('fc.deckSize', { n: cards.length })}`} />
      {fc && current ? (
        <div>
          <ProgressBar value={sessionDone / (sessionDone + (queueIds?.length ?? 1))} className="mb-4" />
          <button
            onClick={() => setFlipped(true)}
            className="flex min-h-[260px] w-full flex-col justify-center rounded-3xl border border-white/10 bg-gradient-to-br from-navy-800 to-navy-850 p-6 text-left shadow-2xl"
            aria-label={t('fc.showAnswer')}
          >
            <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-electric-400"><Layers className="mr-1 inline h-3.5 w-3.5" />{l(STUB_INDEX[fc.lessonId]?.stub.title)}</div>
            <Markup text={l(fc.front)} className="text-xl font-semibold text-white" />
            {flipped && (
              <div className="mt-5 animate-pop border-t border-white/10 pt-5">
                <Markup text={l(fc.back)} className="text-lg" />
              </div>
            )}
          </button>
          <div className="mt-4">
            {!flipped ? (
              <Button full size="lg" onClick={() => setFlipped(true)}>{t('fc.showAnswer')}</Button>
            ) : (
              <div className="grid grid-cols-4 gap-2">
                {([
                  [Rating.Again, 'fc.again', 'bg-rose-600 hover:bg-rose-700'],
                  [Rating.Hard, 'fc.hard', 'bg-amber-600 hover:bg-amber-700'],
                  [Rating.Good, 'fc.good', 'bg-electric-500 hover:bg-electric-600'],
                  [Rating.Easy, 'fc.easy', 'bg-teal-500 hover:bg-teal-400 text-navy-950']
                ] as const).map(([r, key, cls]) => (
                  <button key={r} onClick={() => rate(r as SrsRating)} className={`flex min-h-[56px] flex-col items-center justify-center rounded-xl font-semibold text-white ${cls}`}>
                    <span className="text-sm">{t(key)}</span>
                    <span className="text-[10px] opacity-80">{formatInterval(previewIntervals(current)[r as SrsRating], lang)}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
          <p className="mt-4 flex items-start gap-2 text-xs text-slate-400"><Info className="mt-0.5 h-3.5 w-3.5 shrink-0" />{t('fc.howItWorks')}</p>
        </div>
      ) : (
        <div className="space-y-3">
          <Empty>{t('fc.noneDue')}</Empty>
          {upcoming.length > 0 && <Button full variant="secondary" onClick={() => { setAhead(true); setQueueIds(null); }}>{t('fc.studyAhead')}</Button>}
          {notInDeck.length > 0 && (
            <Card>
              <p className="mb-2 text-sm text-slate-400">{notInDeck.length} flashcards</p>
              <Button full variant="secondary" onClick={() => addCardsToDeck(notInDeck).then(() => setQueueIds(null))}>{t('fc.addAll')}</Button>
            </Card>
          )}
        </div>
      )}
    </div>
  );
}
