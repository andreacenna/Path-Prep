import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Mic, Square, PenLine, Clock, Check, Star, Info, Play } from 'lucide-react';
import type { InterviewQuestion } from '../content/types';
import { useApp } from '../state/app';
import { db, updateSettings } from '../db/db';
import { recordingSupported, speechRecognitionSupported, startRecording, startTranscription, type LiveTranscriber, type Recorder } from '../lib/speech';
import { verdictFromRubric, TOPIC_LESSONS, DEFAULT_BEHAVIORAL_LESSONS, type Verdict } from '../lib/interview';
import { parseNumber, withinTolerance } from '../lib/grading';
import { awardXP } from '../lib/actions';
import { XP } from '../lib/gamification';
import { dayKey } from '../lib/dates';
import { STUB_INDEX } from '../content/curriculum';
import { Markup } from './Markup';
import { Button, Card, Chip } from './ui';

export interface SavedAttempt {
  verdict: Verdict;
}

function mmss(s: number) {
  return `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;
}

/**
 * Answer → compare → self-assess flow, used by single-question practice and mock interviews.
 * Assessment is a structured self-review against a reviewed model answer and rubric; numeric
 * answers are auto-checked. We never present keyword matching as expert feedback.
 */
export function InterviewAnswer({ q, mode, onSaved, compact }: { q: InterviewQuestion; mode: 'written' | 'voice' | 'mock'; onSaved: (a: SavedAttempt) => void; compact?: boolean }) {
  const { t, l, lang, settings, content, afterAction } = useApp();
  const [input, setInput] = useState<'written' | 'voice'>(mode === 'voice' ? 'voice' : 'written');
  const [answer, setAnswer] = useState('');
  const [interim, setInterim] = useState('');
  const [phase, setPhase] = useState<'answer' | 'assess' | 'saved'>('answer');
  const [checked, setChecked] = useState<number[]>([]);
  const [numInput, setNumInput] = useState('');
  const [delivery, setDelivery] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const [recording, setRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [askConsent, setAskConsent] = useState(false);
  const [speechErr, setSpeechErr] = useState('');
  const recRef = useRef<Recorder | null>(null);
  const trRef = useRef<LiveTranscriber | null>(null);
  const startedAt = useRef(Date.now());
  const limit = q.seconds ?? (q.type === 'behavioral' ? 120 : 90);

  useEffect(() => {
    const id = setInterval(() => phase === 'answer' && setElapsed((Date.now() - startedAt.current) / 1000), 500);
    return () => clearInterval(id);
  }, [phase]);
  useEffect(() => () => {
    trRef.current?.stop();
    if (audioUrl) URL.revokeObjectURL(audioUrl);
  }, [audioUrl]);

  const canSpeech = speechRecognitionSupported();
  const canRecord = recordingSupported();

  const startVoice = async () => {
    if (canSpeech && !settings.speechConsent) {
      setAskConsent(true);
      return;
    }
    setSpeechErr('');
    try {
      if (canRecord) recRef.current = await startRecording();
    } catch {
      setSpeechErr('mic');
    }
    if (canSpeech && settings.speechConsent) {
      const base = answer ? answer + ' ' : '';
      trRef.current = startTranscription(lang, (fin, int) => { setAnswer(base + fin); setInterim(int); }, (e) => setSpeechErr(e));
    }
    setRecording(true);
  };
  const stopVoice = async () => {
    trRef.current?.stop();
    trRef.current = null;
    setInterim('');
    setRecording(false);
    if (recRef.current) {
      const blob = await recRef.current.stop();
      recRef.current = null;
      setAudioBlob(blob);
      setAudioUrl(URL.createObjectURL(blob));
    }
  };

  const numericCorrect = q.numeric ? (numInput.trim() ? withinTolerance(parseNumber(numInput), q.numeric.answer, q.numeric.tolerance) : false) : null;
  const verdict = verdictFromRubric(q, checked, numericCorrect);

  const save = async () => {
    let audioId: number | undefined;
    if (audioBlob && settings.saveRecordings) audioId = await db.recordings.add({ blob: audioBlob, mime: audioBlob.type, ts: Date.now() });
    const ts = Date.now();
    await db.interviewAttempts.add({
      questionId: q.id, type: q.type, topic: q.topic, mode, answer, rubricChecked: checked, verdict,
      selfRating: delivery || undefined, durationSec: Math.round(elapsed), audioId, ts, day: dayKey(ts)
    });
    const xp = XP.interviewAttempt(verdict);
    await awardXP(xp, `interview:${q.id}`);
    void afterAction(xp);
    setPhase('saved');
    onSaved({ verdict });
  };

  const recLessons = (TOPIC_LESSONS[q.topic] ?? (q.type === 'behavioral' ? DEFAULT_BEHAVIORAL_LESSONS : [])).filter((id) => content?.lessonById[id]);
  const over = elapsed > limit;

  return (
    <div className="space-y-4">
      <Card className="border-amber-300/20">
        <div className="mb-2 flex flex-wrap items-center gap-1.5">
          <Chip tone={q.type === 'technical' ? 'blue' : 'teal'}>{q.type === 'technical' ? t('int.technical') : t('int.behavioral')}</Chip>
          <Chip>{t(`common.diff${q.difficulty}` as 'common.diff1')}</Chip>
          <span className={`ml-auto flex items-center gap-1 text-xs tabular-nums ${over ? 'text-rose-300' : 'text-slate-400'}`}><Clock className="h-3.5 w-3.5" />{mmss(elapsed)} / {mmss(limit)}</span>
        </div>
        <p className={`${compact ? 'text-lg' : 'text-xl'} font-semibold leading-snug text-white`}>“{l(q.prompt)}”</p>
        {over && phase === 'answer' && <p className="mt-2 text-xs text-rose-300">{t('int.timeUp')}</p>}
      </Card>

      {phase === 'answer' && (
        <>
          <div className="grid grid-cols-2 gap-2" role="tablist">
            <button role="tab" aria-selected={input === 'written'} onClick={() => setInput('written')} className={`flex items-center justify-center gap-2 rounded-xl border-2 p-2.5 text-sm font-semibold ${input === 'written' ? 'border-electric-500 bg-electric-500/15' : 'border-white/10'}`}><PenLine className="h-4 w-4" />{t('int.answerWritten')}</button>
            <button role="tab" aria-selected={input === 'voice'} onClick={() => setInput('voice')} className={`flex items-center justify-center gap-2 rounded-xl border-2 p-2.5 text-sm font-semibold ${input === 'voice' ? 'border-electric-500 bg-electric-500/15' : 'border-white/10'}`}><Mic className="h-4 w-4" />{t('int.answerVoice')}</button>
          </div>

          {input === 'voice' && (
            <Card className="text-center">
              {askConsent ? (
                <div className="text-left">
                  <h3 className="mb-2 font-semibold">{t('int.speechConsentTitle')}</h3>
                  <p className="mb-3 text-sm text-slate-300">{t('int.speechConsent')}</p>
                  <div className="flex gap-2">
                    <Button size="sm" onClick={async () => { await updateSettings({ speechConsent: true }); setAskConsent(false); }}>{t('int.enableSpeech')}</Button>
                    <Button size="sm" variant="ghost" onClick={() => { setAskConsent(false); if (canRecord) startRecording().then((r) => { recRef.current = r; setRecording(true); }).catch(() => setSpeechErr('mic')); }}>{t('int.noThanks')}</Button>
                  </div>
                </div>
              ) : (
                <>
                  {!canSpeech && <p className="mb-3 text-left text-xs text-slate-400">{t('int.noSpeech')}</p>}
                  {canRecord || canSpeech ? (
                    !recording ? (
                      <button onClick={startVoice} className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-rose-500 shadow-xl shadow-rose-500/30 transition active:scale-95" aria-label={t('int.record')}><Mic className="h-8 w-8" /></button>
                    ) : (
                      <button onClick={stopVoice} className="mx-auto flex h-20 w-20 animate-pulse items-center justify-center rounded-full bg-rose-600 ring-4 ring-rose-500/40" aria-label={t('int.stop')}><Square className="h-7 w-7" fill="currentColor" /></button>
                    )
                  ) : null}
                  <p className="mt-2 text-xs text-slate-400">{recording ? t('int.recording') : t('int.recordingsLocal')}</p>
                  {speechErr && <p className="mt-2 text-xs text-rose-300">{speechErr === 'mic' ? 'Microphone unavailable / permission denied.' : `Speech recognition: ${speechErr}`}</p>}
                  {audioUrl && (
                    <div className="mt-3 flex items-center justify-center gap-2 text-sm text-slate-300"><Play className="h-4 w-4" />{t('int.playback')}<audio controls src={audioUrl} className="h-9 max-w-[220px]" /></div>
                  )}
                </>
              )}
            </Card>
          )}

          <label className="block">
            <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-400">{input === 'voice' ? t('int.transcript') : t('int.answerWritten')}</span>
            <textarea value={answer + (interim ? ` ${interim}` : '')} onChange={(e) => setAnswer(e.target.value)} rows={compact ? 5 : 7} className="w-full rounded-xl border-2 border-white/10 bg-navy-800 p-3 text-slate-100 outline-none focus:border-electric-500" />
          </label>
          <Button full size="lg" disabled={recording} onClick={() => setPhase('assess')}>{t('int.submit')}</Button>
        </>
      )}

      {phase !== 'answer' && (
        <>
          {answer && (
            <Card>
              <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-400">{t('common.yourAnswer')}</div>
              <p className="whitespace-pre-wrap text-sm text-slate-200">{answer}</p>
              {audioUrl && <audio controls src={audioUrl} className="mt-2 h-9 w-full" />}
            </Card>
          )}
          <Card className="border-teal-500/30">
            <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-teal-300">{t('int.reference')}</div>
            <Markup text={l(q.reference)} className="text-sm" />
          </Card>

          {q.numeric && (
            <Card>
              <div className="mb-2 text-sm font-semibold">{t('int.numericCheck')}</div>
              <div className="flex items-center gap-2">
                <input inputMode="decimal" disabled={phase === 'saved'} value={numInput} onChange={(e) => setNumInput(e.target.value)} placeholder={t('q.typeNumber')} className="w-full rounded-xl border-2 border-white/10 bg-navy-800 px-3 py-2.5 outline-none focus:border-electric-500" />
                {q.numeric.unit && <span className="text-slate-300">{q.numeric.unit}</span>}
              </div>
              {numInput.trim() && <p className={`mt-2 text-sm font-semibold ${numericCorrect ? 'text-teal-300' : 'text-rose-300'}`}>{numericCorrect ? t('common.correct') : `${t('common.incorrect')} — ${q.numeric.answer}${q.numeric.unit ? ' ' + q.numeric.unit : ''}`}</p>}
            </Card>
          )}

          <Card>
            <div className="mb-3 text-sm font-semibold">{t('int.rubric')}</div>
            <ul className="space-y-2">
              {q.rubric.map((r, i) => {
                const on = checked.includes(i);
                return (
                  <li key={i}>
                    <button disabled={phase === 'saved'} onClick={() => setChecked((c) => (on ? c.filter((x) => x !== i) : [...c, i]))} className={`flex w-full items-start gap-3 rounded-xl border-2 p-3 text-left text-sm ${on ? 'border-teal-400 bg-teal-500/10' : 'border-white/10'}`} role="checkbox" aria-checked={on}>
                      <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 ${on ? 'border-teal-400 bg-teal-400' : 'border-slate-500'}`}>{on && <Check className="h-3 w-3 text-navy-950" strokeWidth={3} />}</span>
                      <span className="flex-1">{l(r.text)}{r.essential && <span className="ml-2 text-[10px] font-bold uppercase text-amber-300">{t('int.essential')}</span>}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
            <div className="mt-4 flex items-center gap-2">
              <span className="text-sm text-slate-400">{t('int.delivery')}</span>
              {[1, 2, 3, 4, 5].map((n) => (
                <button key={n} disabled={phase === 'saved'} onClick={() => setDelivery(n)} aria-label={`${n}/5`}><Star className={`h-6 w-6 ${n <= delivery ? 'fill-amber-300 text-amber-300' : 'text-slate-500'}`} /></button>
              ))}
            </div>
            <div className={`mt-4 rounded-xl p-3 text-center font-bold ${verdict === 'correct' ? 'bg-teal-500/15 text-teal-300' : verdict === 'partial' ? 'bg-amber-500/15 text-amber-300' : 'bg-rose-500/15 text-rose-300'}`}>
              {t('int.verdict')}: {verdict === 'correct' ? t('common.correct') : verdict === 'partial' ? t('common.partial') : t('common.incorrect')}
            </div>
            <p className="mt-2 text-xs text-slate-400">{t('int.verdictRule')}</p>
          </Card>

          {q.followUps?.length ? (
            <Card>
              <div className="mb-2 text-sm font-semibold">{t('int.followUps')}</div>
              <ul className="list-disc space-y-1 pl-5 text-sm text-slate-300">{q.followUps.map((f, i) => <li key={i}>{l(f)}</li>)}</ul>
            </Card>
          ) : null}

          {phase === 'assess' ? (
            <Button full size="lg" onClick={save}>{t('int.saveAttempt')}</Button>
          ) : (
            <>
              <p className="text-center text-sm font-semibold text-teal-300">✓ {t('int.saved')}</p>
              {verdict !== 'correct' && recLessons.length > 0 && (
                <Card>
                  <div className="mb-2 text-sm font-semibold">{t('int.recommend')}</div>
                  <ul className="space-y-1">{recLessons.map((id) => <li key={id}><Link className="text-sm text-electric-400 underline" to={`/lesson/${id}`}>{l(STUB_INDEX[id]?.stub.title)}</Link></li>)}</ul>
                </Card>
              )}
            </>
          )}
          <p className="flex items-start gap-2 text-xs text-slate-400"><Info className="mt-0.5 h-3.5 w-3.5 shrink-0" />{t('int.selfAssessNote')}</p>
        </>
      )}
    </div>
  );
}
