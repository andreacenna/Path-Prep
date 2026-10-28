/**
 * Voice practice using only browser-native, free APIs:
 * - MediaRecorder for local audio recording (never uploaded by PATH Academy).
 * - Web Speech API (SpeechRecognition) for transcription where the browser provides it
 *   (Chrome/Edge/Safari). Depending on the browser, recognition may run on the vendor's servers,
 *   which is why it requires explicit consent in the app.
 */

type SR = {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  start(): void;
  stop(): void;
  abort(): void;
  onresult: ((e: { resultIndex: number; results: ArrayLike<{ isFinal: boolean; 0: { transcript: string } }> }) => void) | null;
  onerror: ((e: { error: string }) => void) | null;
  onend: (() => void) | null;
};

function ctor(): (new () => SR) | null {
  const w = window as unknown as { SpeechRecognition?: new () => SR; webkitSpeechRecognition?: new () => SR };
  return w.SpeechRecognition ?? w.webkitSpeechRecognition ?? null;
}

export function speechRecognitionSupported(): boolean {
  return typeof window !== 'undefined' && !!ctor();
}
export function recordingSupported(): boolean {
  return typeof window !== 'undefined' && typeof MediaRecorder !== 'undefined' && !!navigator.mediaDevices?.getUserMedia;
}

export interface LiveTranscriber {
  stop(): void;
}

/** Continuous transcription; restarts automatically if the browser ends the session early. */
export function startTranscription(lang: 'en' | 'it', onText: (finalText: string, interim: string) => void, onError: (e: string) => void): LiveTranscriber | null {
  const C = ctor();
  if (!C) return null;
  let finalText = '';
  let stopped = false;
  const rec = new C();
  rec.lang = lang === 'it' ? 'it-IT' : 'en-US';
  rec.continuous = true;
  rec.interimResults = true;
  rec.onresult = (e) => {
    let interim = '';
    for (let i = e.resultIndex; i < e.results.length; i++) {
      const r = e.results[i];
      if (r.isFinal) finalText += (finalText ? ' ' : '') + r[0].transcript.trim();
      else interim += r[0].transcript;
    }
    onText(finalText, interim);
  };
  rec.onerror = (e) => {
    if (e.error !== 'no-speech' && e.error !== 'aborted') onError(e.error);
  };
  rec.onend = () => {
    if (!stopped) {
      try {
        rec.start();
      } catch {
        /* already started */
      }
    }
  };
  try {
    rec.start();
  } catch (err) {
    onError(String(err));
    return null;
  }
  return {
    stop() {
      stopped = true;
      rec.stop();
    }
  };
}

export interface Recorder {
  stop(): Promise<Blob>;
}

export async function startRecording(): Promise<Recorder> {
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  const mime = ['audio/webm;codecs=opus', 'audio/webm', 'audio/mp4', 'audio/ogg'].find((m) => MediaRecorder.isTypeSupported?.(m)) ?? '';
  const rec = new MediaRecorder(stream, mime ? { mimeType: mime } : undefined);
  const chunks: Blob[] = [];
  rec.ondataavailable = (e) => e.data.size && chunks.push(e.data);
  rec.start(1000);
  return {
    stop: () =>
      new Promise<Blob>((resolve) => {
        rec.onstop = () => {
          stream.getTracks().forEach((tr) => tr.stop());
          resolve(new Blob(chunks, { type: rec.mimeType || 'audio/webm' }));
        };
        rec.stop();
      })
  };
}
