import { useApp } from '../state/app';
import { Card, PageHeader } from '../components/ui';
import { Markup } from '../components/Markup';

const TEXT = {
  en: `**PATH Academy** is a free, open-source, offline-first learning app. No account, no paid services, no tracking.

**How it works**
- All lessons, questions and flashcards ship with the app and are cached for offline use after the first visit.
- Your progress, CV and stories are stored only in this browser (IndexedDB). Export a backup regularly.
- Spaced repetition uses FSRS (open-source ts-fsrs). Mastery requires correct answers over time — opening a lesson never counts.
- All numerical answers are computed or verified by a tested, deterministic finance library.

**Honest limitations**
- **Content is progressive.** Lessons marked "Upcoming" are on the roadmap and not yet written. Content was reviewed for accuracy (date shown per lesson), but it is educational material, not professional or accounting advice — verify standards against the official IFRS/FASB/OIC texts before relying on them.
- **Interview feedback is self-assessment** against a reviewed model answer and rubric. No free tool can reliably provide expert-level automated feedback, so the app does not pretend to.
- **Speech-to-text** depends on your browser's built-in recognition (Chrome, Edge, Safari). In Chrome/Edge, audio is processed by the browser vendor's speech service. Firefox has no built-in recognition — you can still record and type.
- **News** comes from free official/public feeds via a scheduled GitHub Action. Headlines and excerpts are the sources' own; concept tags and "why it matters" use transparent keyword rules, not AI. If updates fail, the last verified briefing is shown.
- **Reminders** work while the app is open or running; true background push requires a server and is not used.
- **Local storage** can be cleared by the browser or the user. iOS may evict data of sites not used for weeks unless the app is installed to the Home Screen.`,
  it: `**PATH Academy** è un'app di apprendimento gratuita, open source e offline-first. Nessun account, nessun servizio a pagamento, nessun tracciamento.

**Come funziona**
- Lezioni, domande e flashcard sono incluse nell'app e salvate in cache per l'uso offline dopo la prima visita.
- Progressi, CV e storie sono salvati solo in questo browser (IndexedDB). Esporta regolarmente un backup.
- Il ripasso dilazionato usa FSRS (ts-fsrs, open source). La padronanza richiede risposte corrette nel tempo — aprire una lezione non conta mai.
- Tutte le risposte numeriche sono calcolate o verificate da una libreria finanziaria deterministica e testata.

**Limiti dichiarati**
- **I contenuti sono progressivi.** Le lezioni "In arrivo" sono nella roadmap e non ancora scritte. I contenuti sono stati verificati (data indicata in ogni lezione), ma sono materiale didattico, non consulenza professionale o contabile — verifica i principi sui testi ufficiali IFRS/FASB/OIC prima di farvi affidamento.
- **Il feedback sui colloqui è un'autovalutazione** rispetto a una risposta modello e una griglia verificate. Nessuno strumento gratuito fornisce in modo affidabile un feedback esperto automatico, quindi l'app non finge di farlo.
- **La trascrizione vocale** dipende dal riconoscimento integrato nel browser (Chrome, Edge, Safari). In Chrome/Edge l'audio è elaborato dal servizio vocale del produttore. Firefox non ha riconoscimento integrato — puoi comunque registrare e scrivere.
- **Le notizie** provengono da feed ufficiali/pubblici gratuiti tramite una GitHub Action programmata. Titoli ed estratti sono delle fonti; i concetti e il "perché è importante" usano regole trasparenti per parole chiave, non IA. Se l'aggiornamento fallisce, viene mostrato l'ultimo briefing verificato.
- **I promemoria** funzionano quando l'app è aperta o attiva; le vere notifiche push in background richiedono un server e non sono usate.
- **L'archiviazione locale** può essere cancellata dal browser o dall'utente. iOS può eliminare i dati dei siti non usati per settimane, a meno che l'app non sia installata nella schermata Home.`
};

export default function About() {
  const { t, lang } = useApp();
  return (
    <div className="animate-rise">
      <PageHeader back="/profile" title={t('profile.about')} />
      <Card><Markup text={TEXT[lang]} className="text-sm" /></Card>
    </div>
  );
}
