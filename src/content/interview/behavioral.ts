import type { InterviewQuestion, L, RubricPoint } from '../types';

/**
 * Behavioural interview bank.
 * Reference answers are STRUCTURES and GUIDES — what a strong answer contains, how to
 * structure it and what to avoid. They never invent experiences: the candidate must
 * fill them with real stories from their Story Bank. Suggestions referring to the
 * candidate's profile (Bocconi BIEF, exchange at WashU Olin, BSQF, WUSIF) are prompts
 * for reflection, not claimed achievements.
 */

const t = (en: string, it: string): L => ({ en, it });
const ess = (en: string, it: string): RubricPoint => ({ text: { en, it }, essential: true });
const opt = (en: string, it: string): RubricPoint => ({ text: { en, it }, essential: false });

export const questions: InterviewQuestion[] = [
  /* ---------------- Tell me about yourself ---------------- */
  {
    id: 'bq-tmay-core',
    type: 'behavioral',
    topic: 'tell-me-about-yourself',
    difficulty: 1,
    seconds: 120,
    prompt: t("Tell me about yourself.", "Mi parli di lei."),
    reference: t(
      "**Structure (90–120 seconds): Past → Present → Future.**\n\n1. **Hook and background (20s):** who you are and the thread that ties your story together — not your birthplace and hobbies.\n2. **Key steps (50s):** 2–3 choices that built your interest in finance, each with *why* you made it and *what you learned*. E.g. you might draw on why you chose International Economics & Finance at Bocconi, what your work in a student investment fund or quant society taught you, and what the exchange at WashU Olin adds.\n3. **Why you are here (20s):** how those steps lead logically to investment banking and to this role.\n\n**Pitfalls:** reciting the CV line by line; going over two minutes; no clear reason for IB; claiming results you cannot back up under follow-up questions.",
      "**Struttura (90–120 secondi): Passato → Presente → Futuro.**\n\n1. **Aggancio e background (20s):** chi sei e il filo che unisce la tua storia — non luogo di nascita e hobby.\n2. **Tappe chiave (50s):** 2–3 scelte che hanno costruito il tuo interesse per la finanza, ciascuna con il *perché* e *cosa hai imparato*. Ad esempio potresti partire dal perché hai scelto International Economics & Finance in Bocconi, da cosa ti ha insegnato il lavoro in un fondo d’investimento studentesco o in un’associazione di finanza quantitativa, e da cosa aggiunge l’exchange alla WashU Olin.\n3. **Perché sei qui (20s):** come queste tappe portano in modo logico all’investment banking e a questo ruolo.\n\n**Errori:** recitare il CV riga per riga; superare i due minuti; nessuna ragione chiara per l’IB; rivendicare risultati che non reggono alle domande di approfondimento."
    ),
    rubric: [
      ess("Clear structure with a logical narrative thread (not a CV list).", "Struttura chiara con un filo narrativo logico (non un elenco del CV)."),
      ess("Ends with a credible link to investment banking and this role.", "Si chiude con un collegamento credibile all’investment banking e al ruolo."),
      ess("Concise: roughly 90–120 seconds.", "Sintetica: circa 90–120 secondi."),
      opt("Explains the motivation behind key choices, not just the facts.", "Spiega la motivazione delle scelte chiave, non solo i fatti."),
      opt("Confident, conversational delivery rather than memorised recital.", "Esposizione sicura e colloquiale anziché recitata a memoria.")
    ],
    followUps: [
      t("What made you first interested in finance?", "Cosa l’ha avvicinata per la prima volta alla finanza?"),
      t("What is one thing on your CV you would like to talk more about?", "C’è qualcosa nel suo CV di cui vorrebbe parlare di più?")
    ]
  },
  {
    id: 'bq-tmay-not-on-cv',
    type: 'behavioral',
    topic: 'tell-me-about-yourself',
    difficulty: 2,
    seconds: 75,
    prompt: t("What is something about you that is not on your CV?", "Mi dica qualcosa di lei che non è scritto nel CV."),
    reference: t(
      "**Purpose:** the interviewer wants to see the person — and to test whether you are someone they would enjoy working with at 2 a.m.\n\n**Structure:**\n1. Name one genuine interest, value or experience (a sport, a long-term project, a responsibility you hold).\n2. Give one concrete detail that makes it vivid.\n3. Briefly connect it to a trait relevant to banking — discipline, curiosity, teamwork — **without forcing it**.\n\n**Pitfalls:** repeating something that *is* on the CV; generic hobbies (“travelling, reading”) with no depth; something you could not discuss for five minutes; anything controversial or unprofessional.",
      "**Scopo:** l’intervistatore vuole conoscere la persona — e capire se gli piacerebbe lavorare con te alle 2 di notte.\n\n**Struttura:**\n1. Indica un interesse, un valore o un’esperienza autentici (uno sport, un progetto di lungo periodo, una responsabilità che ricopri).\n2. Aggiungi un dettaglio concreto che lo renda vivo.\n3. Collegalo brevemente a una qualità utile in banca — disciplina, curiosità, lavoro di squadra — **senza forzare**.\n\n**Errori:** ripetere qualcosa che *è* nel CV; hobby generici (“viaggiare, leggere”) senza profondità; qualcosa di cui non sapresti parlare per cinque minuti; temi controversi o poco professionali."
    ),
    rubric: [
      ess("Shares something genuine and specific beyond the CV.", "Condivide qualcosa di autentico e specifico oltre il CV."),
      ess("Answer reveals personality and is engaging.", "La risposta rivela la personalità ed è coinvolgente."),
      opt("Natural, unforced link to a relevant trait.", "Collegamento naturale, non forzato, a una qualità rilevante."),
      opt("Stays professional and concise.", "Resta professionale e sintetica.")
    ]
  },

  /* ---------------- Walk me through your CV ---------------- */
  {
    id: 'bq-cv-walk',
    type: 'behavioral',
    topic: 'walk-cv',
    difficulty: 1,
    seconds: 150,
    prompt: t("Walk me through your CV.", "Mi illustri il suo CV."),
    reference: t(
      "**Different from “tell me about yourself”:** chronological and slightly longer (2–3 minutes), but still a story, not a list.\n\n**Structure:**\n1. **Education:** why your university and programme (for you: Bocconi International Economics & Finance, graduating 2027; exchange at WashU Olin in Fall 2026) — choices and what they gave you.\n2. **Experiences in order:** for each — role, one concrete thing you did, one skill learned, and why you moved on. E.g. you might describe what you actually contribute to your student investment fund or quant society (research, models, pitches).\n3. **Transitions:** explain the *why* behind each move; it shows intent.\n4. **Close:** why this leads to IB now.\n\n**Pitfalls:** listing every line; vague verbs (“helped with”); unexplained gaps or switches; overstating your role.",
      "**Diverso da “mi parli di lei”:** cronologico e un po’ più lungo (2–3 minuti), ma sempre una storia, non un elenco.\n\n**Struttura:**\n1. **Formazione:** perché la tua università e il tuo corso (per te: Bocconi International Economics & Finance, laurea nel 2027; exchange alla WashU Olin nell’autunno 2026) — scelte e cosa ti hanno dato.\n2. **Esperienze in ordine:** per ciascuna — ruolo, una cosa concreta che hai fatto, una competenza acquisita e perché sei passato oltre. Ad esempio potresti descrivere cosa contribuisci davvero nel fondo d’investimento studentesco o nell’associazione di finanza quantitativa (ricerca, modelli, pitch).\n3. **Passaggi:** spiega il *perché* di ogni scelta; mostra intenzionalità.\n4. **Chiusura:** perché tutto porta all’IB adesso.\n\n**Errori:** elencare ogni riga; verbi vaghi (“ho aiutato”); vuoti o cambi non spiegati; esagerare il proprio ruolo."
    ),
    rubric: [
      ess("Chronological, structured and within ~3 minutes.", "Cronologica, strutturata ed entro ~3 minuti."),
      ess("Explains the reasoning behind transitions and choices.", "Spiega il ragionamento dietro passaggi e scelte."),
      ess("Describes concrete personal contributions, accurately.", "Descrive contributi personali concreti, in modo accurato."),
      opt("Closes with a clear link to IB.", "Si chiude con un chiaro collegamento all’IB.")
    ],
    followUps: [t("Which experience on your CV taught you the most, and why?", "Quale esperienza del suo CV le ha insegnato di più e perché?")]
  },
  {
    id: 'bq-cv-why-bocconi',
    type: 'behavioral',
    topic: 'walk-cv',
    difficulty: 1,
    seconds: 75,
    prompt: t("Why did you choose your university and degree?", "Perché ha scelto la sua università e il suo corso di laurea?"),
    reference: t(
      "**What they test:** whether you make deliberate decisions and can articulate them.\n\n**Structure:**\n1. **The driver:** what you wanted at the time (e.g. a rigorous quantitative grounding in economics and finance, an international environment, teaching in English).\n2. **Why this choice over alternatives:** be specific about the programme, not just the brand.\n3. **What it has given you:** skills (econometrics, corporate finance, valuation), people, opportunities — e.g. student associations or the exchange — and how they fed your interest in banking.\n\n**Pitfalls:** “because it is the best” with nothing else; sounding as if you drifted into it; criticising other schools; forgetting to connect to the present.",
      "**Cosa verificano:** se prendi decisioni ponderate e le sai spiegare.\n\n**Struttura:**\n1. **Il motore:** cosa cercavi allora (ad es. una solida base quantitativa in economia e finanza, un ambiente internazionale, la didattica in inglese).\n2. **Perché questa scelta e non le alternative:** sii specifico sul corso, non solo sul brand.\n3. **Cosa ti ha dato:** competenze (econometria, finanza aziendale, valutazione), persone, opportunità — ad esempio le associazioni studentesche o l’exchange — e come hanno alimentato il tuo interesse per la banca.\n\n**Errori:** “perché è la migliore” e basta; dare l’impressione di esserci finito per caso; criticare altre università; non collegare al presente."
    ),
    rubric: [
      ess("Gives specific, deliberate reasons for the choice.", "Fornisce ragioni specifiche e ponderate per la scelta."),
      ess("Connects the degree to skills relevant to banking.", "Collega il corso a competenze rilevanti per la banca."),
      opt("Mentions how the choice shaped next steps.", "Cita come la scelta ha orientato i passi successivi.")
    ]
  },
  {
    id: 'bq-cv-exchange',
    type: 'behavioral',
    topic: 'walk-cv',
    difficulty: 1,
    seconds: 90,
    prompt: t("Why did you decide to do an exchange semester, and what have you taken from it?", "Perché ha deciso di fare un semestre di scambio e cosa le sta lasciando?"),
    reference: t(
      "**What they test:** adaptability, curiosity and international mindset — useful in cross-border banking teams.\n\n**Structure:**\n1. **Why:** a clear reason (e.g. exposure to a US business school’s approach, specific courses, a different professional network, testing yourself in a new environment).\n2. **What you are doing there:** courses, clubs or projects — e.g. you might draw on what you are learning through a student investment fund or finance courses at WashU Olin.\n3. **One insight:** a concrete difference you noticed (teaching style, how US students recruit, market focus) and how it changed your thinking.\n4. **Link:** why that makes you a better analyst.\n\n**Pitfalls:** sounding like a holiday; generic “I learned about other cultures”; no concrete example.",
      "**Cosa verificano:** adattabilità, curiosità e mentalità internazionale — utili nei team di banca cross-border.\n\n**Struttura:**\n1. **Perché:** una ragione chiara (ad es. conoscere l’approccio di una business school americana, corsi specifici, un network professionale diverso, mettersi alla prova in un ambiente nuovo).\n2. **Cosa stai facendo:** corsi, club o progetti — ad esempio potresti parlare di ciò che stai imparando con un fondo d’investimento studentesco o nei corsi di finanza alla WashU Olin.\n3. **Un insight:** una differenza concreta che hai notato (stile didattico, come recrutano gli studenti americani, focus di mercato) e come ha cambiato il tuo modo di pensare.\n4. **Collegamento:** perché questo ti rende un analyst migliore.\n\n**Errori:** farlo sembrare una vacanza; il generico “ho conosciuto altre culture”; nessun esempio concreto."
    ),
    rubric: [
      ess("Clear, purposeful reason for the exchange.", "Ragione chiara e motivata per l’exchange."),
      ess("At least one concrete insight or experience from it.", "Almeno un insight o un’esperienza concreta."),
      opt("Links the experience to working in a global banking team.", "Collega l’esperienza al lavoro in un team bancario internazionale.")
    ]
  },

  /* ---------------- Why IB ---------------- */
  {
    id: 'bq-why-ib',
    type: 'behavioral',
    topic: 'why-ib',
    difficulty: 1,
    seconds: 90,
    prompt: t("Why investment banking?", "Perché l’investment banking?"),
    reference: t(
      "**Structure — three reasons, each anchored in your experience:**\n\n1. **The work itself:** advising on transactions that reshape companies — valuation, modelling, understanding why a deal makes strategic sense. Show you know what an analyst actually does (models, pitch books, due diligence, process management).\n2. **The learning curve:** exposure to many sectors and senior decision-makers, and the rigour and attention to detail you build early.\n3. **The environment:** working in tight teams under deadlines, which you have enjoyed before — e.g. you might draw on preparing a stock pitch in your student investment fund.\n\nClose with a forward-looking line on what you want to build.\n\n**Pitfalls:** money or prestige as the main reason; “I like finance” without specifics; describing a job that is really sales & trading or PE; not having spoken to bankers.",
      "**Struttura — tre ragioni, ciascuna ancorata alla tua esperienza:**\n\n1. **Il lavoro in sé:** consulenza su operazioni che trasformano le aziende — valutazione, modellistica, capire perché un deal ha senso strategico. Dimostra di sapere cosa fa davvero un analyst (modelli, pitch book, due diligence, gestione del processo).\n2. **La curva di apprendimento:** esposizione a molti settori e a decisori senior, rigore e attenzione al dettaglio sviluppati presto.\n3. **L’ambiente:** lavorare in team affiatati sotto scadenza, cosa che ti è già piaciuta — ad esempio potresti partire dalla preparazione di uno stock pitch nel fondo d’investimento studentesco.\n\nChiudi con una frase sul futuro e su cosa vuoi costruire.\n\n**Errori:** soldi o prestigio come ragione principale; “mi piace la finanza” senza dettagli; descrivere un lavoro che in realtà è sales & trading o PE; non aver parlato con dei banker."
    ),
    rubric: [
      ess("Gives specific reasons rooted in the actual nature of IB work.", "Fornisce ragioni specifiche legate alla natura reale del lavoro in IB."),
      ess("Supports reasons with personal experience or evidence of interest.", "Sostiene le ragioni con esperienze personali o prove di interesse."),
      ess("Shows realistic understanding of the analyst role.", "Mostra una comprensione realistica del ruolo di analyst."),
      opt("Avoids money/prestige as primary motivation.", "Evita soldi/prestigio come motivazione principale."),
      opt("Mentions conversations with bankers or networking.", "Cita conversazioni con banker o networking.")
    ],
    followUps: [t("What do you think an analyst does on a typical day?", "Cosa pensa che faccia un analyst in una giornata tipo?")]
  },
  {
    id: 'bq-why-ib-five-years',
    type: 'behavioral',
    topic: 'why-ib',
    difficulty: 2,
    seconds: 75,
    prompt: t("Where do you see yourself in five years?", "Dove si vede tra cinque anni?"),
    reference: t(
      "**What they test:** commitment, realism and whether you will stay long enough to be worth training.\n\n**Structure:**\n1. **Near term:** become a strong analyst — technically reliable, trusted with more responsibility, building sector knowledge.\n2. **Five years:** progressing on the banking track (associate level), taking more client-facing and deal-execution responsibility, perhaps with a sector or product specialism you find compelling.\n3. **Why:** link to what you enjoy about the work.\n\nIt is fine to be honest that you are keeping an open mind, but the centre of gravity should be banking.\n\n**Pitfalls:** “in private equity” or “running my own fund” — signals you will leave; an over-precise plan; no ambition at all.",
      "**Cosa verificano:** impegno, realismo e se resterai abbastanza a lungo da valere l’investimento formativo.\n\n**Struttura:**\n1. **Breve termine:** diventare un ottimo analyst — affidabile tecnicamente, con responsabilità crescenti, costruendo competenza settoriale.\n2. **Cinque anni:** crescere nel percorso di banca (livello associate), con più responsabilità di esecuzione e contatto con i clienti, magari con una specializzazione di settore o prodotto che ti appassiona.\n3. **Perché:** collega a ciò che ti piace del lavoro.\n\nVa bene dire con onestà che resti aperto, ma il baricentro deve essere la banca.\n\n**Errori:** “in un fondo di private equity” o “a gestire un mio fondo” — segnala che te ne andrai; un piano troppo preciso; nessuna ambizione."
    ),
    rubric: [
      ess("Shows commitment to the banking path.", "Mostra impegno verso il percorso in banca."),
      ess("Realistic progression and ambition.", "Progressione e ambizione realistiche."),
      opt("Connects to specific interests (sector/product).", "Collega a interessi specifici (settore/prodotto).")
    ]
  },
  {
    id: 'bq-why-ib-hours',
    type: 'behavioral',
    topic: 'why-ib',
    difficulty: 2,
    seconds: 75,
    prompt: t("The hours in banking are long and unpredictable. Why are you confident this is right for you?", "In banca gli orari sono lunghi e imprevedibili. Perché è convinto che sia la scelta giusta per lei?"),
    reference: t(
      "**What they test:** that you know what you are signing up for and have evidence you can sustain it.\n\n**Structure:**\n1. **Acknowledge it honestly:** you understand the workload and unpredictability — ideally because you have spoken to analysts about it.\n2. **Evidence:** a real period when you sustained intense effort over weeks (exams plus society commitments, a competition, a demanding project) and what kept you performing.\n3. **How you manage it:** concrete habits — prioritisation, sleep, exercise, asking for help early.\n4. **Why it is worth it:** the learning and the work you will be part of.\n\n**Pitfalls:** bravado (“I don’t need sleep”); minimising the issue; no concrete evidence.",
      "**Cosa verificano:** che tu sappia a cosa vai incontro e abbia prove di poterlo sostenere.\n\n**Struttura:**\n1. **Riconoscerlo con onestà:** comprendi carico di lavoro e imprevedibilità — idealmente perché ne hai parlato con degli analyst.\n2. **Prove:** un periodo reale in cui hai sostenuto uno sforzo intenso per settimane (esami più impegni associativi, una competizione, un progetto impegnativo) e cosa ti ha fatto rendere.\n3. **Come lo gestisci:** abitudini concrete — priorità, sonno, sport, chiedere aiuto per tempo.\n4. **Perché ne vale la pena:** l’apprendimento e il lavoro di cui farai parte.\n\n**Errori:** spavalderia (“non mi serve dormire”); minimizzare il tema; nessuna prova concreta."
    ),
    rubric: [
      ess("Shows a realistic understanding of the lifestyle.", "Mostra una comprensione realistica dello stile di vita."),
      ess("Provides concrete evidence of sustained performance under workload.", "Fornisce prove concrete di rendimento sostenuto sotto carico."),
      opt("Describes sustainable coping strategies.", "Descrive strategie sostenibili di gestione.")
    ]
  },

  /* ---------------- Why M&A ---------------- */
  {
    id: 'bq-why-ma',
    type: 'behavioral',
    topic: 'why-ma',
    difficulty: 2,
    seconds: 90,
    prompt: t("Why M&A rather than markets, ECM/DCM or leveraged finance?", "Perché M&A e non markets, ECM/DCM o leveraged finance?"),
    reference: t(
      "**Structure:**\n1. **Show you know the alternatives:** markets roles are about real-time pricing and risk; ECM/DCM focus on executing equity and debt issuance and market timing; leveraged finance structures debt for acquisitions and LBOs.\n2. **What draws you to M&A specifically:** the strategic question (why should these two companies combine?), deep company-specific analysis and valuation, long-dated processes with negotiation, and a broad toolkit across accounting, modelling and corporate strategy.\n3. **Evidence:** something you did that you enjoyed for exactly these reasons — e.g. analysing a deal in depth for your student investment fund or a case competition.\n\n**Pitfalls:** dismissing other divisions; reasons that equally fit any division; claiming M&A is “more prestigious”.",
      "**Struttura:**\n1. **Dimostra di conoscere le alternative:** i ruoli di markets riguardano prezzi e rischio in tempo reale; ECM/DCM l’esecuzione di emissioni azionarie e obbligazionarie e il timing di mercato; il leveraged finance struttura il debito per acquisizioni e LBO.\n2. **Cosa ti attrae dell’M&A in particolare:** la domanda strategica (perché queste due aziende dovrebbero unirsi?), analisi approfondita della singola azienda e valutazione, processi lunghi con negoziazione, e un bagaglio ampio tra contabilità, modellistica e strategia.\n3. **Prove:** qualcosa che hai fatto e ti è piaciuto proprio per queste ragioni — ad esempio l’analisi approfondita di un’operazione per il fondo d’investimento studentesco o in una case competition.\n\n**Errori:** sminuire le altre divisioni; ragioni valide per qualsiasi divisione; dire che l’M&A è “più prestigioso”."
    ),
    rubric: [
      ess("Accurately distinguishes M&A from other divisions.", "Distingue correttamente l’M&A dalle altre divisioni."),
      ess("Gives reasons specific to M&A work.", "Fornisce ragioni specifiche del lavoro in M&A."),
      opt("Backs it with a personal example.", "Lo sostiene con un esempio personale."),
      opt("Respectful of other divisions.", "Rispettoso verso le altre divisioni.")
    ]
  },

  /* ---------------- Why this bank ---------------- */
  {
    id: 'bq-why-this-bank',
    type: 'behavioral',
    topic: 'why-this-bank',
    difficulty: 1,
    seconds: 90,
    prompt: t("Why do you want to work at our bank?", "Perché vuole lavorare nella nostra banca?"),
    reference: t(
      "**Structure — specific, researched, personal:**\n\n1. **Platform:** what is distinctive about the bank — bulge bracket vs elite boutique vs European/Italian franchise, its sector or product strengths, its presence in the market you want (e.g. Milan, London).\n2. **Deals:** one or two **recent transactions** the bank advised on that you have actually read about and can discuss.\n3. **People and culture:** what you learned from **conversations** with its bankers (name the interaction, not necessarily the person), training, staffing model, analyst responsibility.\n4. **Fit:** why that combination matches what you want to learn.\n\n**Pitfalls:** answers that could apply to any bank; reciting the website; flattering league-table claims you cannot verify; not knowing the bank’s recent deals.",
      "**Struttura — specifica, documentata, personale:**\n\n1. **Piattaforma:** cosa distingue la banca — bulge bracket, elite boutique o franchise europeo/italiano, punti di forza di settore o prodotto, presenza nel mercato che ti interessa (ad es. Milano, Londra).\n2. **Operazioni:** una o due **operazioni recenti** in cui la banca è stata advisor, che hai davvero letto e sai discutere.\n3. **Persone e cultura:** cosa hai imparato da **conversazioni** con i suoi banker (cita l’occasione, non necessariamente il nome), formazione, modello di staffing, responsabilità degli analyst.\n4. **Fit:** perché questa combinazione corrisponde a ciò che vuoi imparare.\n\n**Errori:** risposte valide per qualsiasi banca; recitare il sito web; vantare posizioni nelle league table non verificabili; non conoscere le operazioni recenti della banca."
    ),
    rubric: [
      ess("Specific to this bank (not generic).", "Specifica per questa banca (non generica)."),
      ess("References at least one real recent deal or business strength accurately.", "Cita correttamente almeno un’operazione recente reale o un punto di forza."),
      opt("Mentions conversations with the bank’s people.", "Cita conversazioni con persone della banca."),
      opt("Links the bank’s features to personal goals.", "Collega le caratteristiche della banca agli obiettivi personali.")
    ],
    followUps: [t("Tell me about a deal we worked on recently.", "Mi parli di un’operazione che abbiamo seguito di recente.")]
  },
  {
    id: 'bq-why-this-bank-others',
    type: 'behavioral',
    topic: 'why-this-bank',
    difficulty: 2,
    seconds: 60,
    prompt: t("Which other banks are you applying to, and if you got several offers, how would you choose?", "A quali altre banche si sta candidando e, con più offerte, come sceglierebbe?"),
    reference: t(
      "**What they test:** consistency of your story and honesty.\n\n**Structure:**\n1. **Be honest and consistent:** name a coherent set (similar type of bank, division and location) — it shows a focused search.\n2. **Criteria:** the factors that matter to you — the quality of training and deal exposure, the team and culture you have met, sector strengths, location.\n3. **Position this bank:** explain how it scores on those criteria, without claiming it is your only application.\n\n**Pitfalls:** saying you applied nowhere else (not credible); a random list across unrelated roles (consulting, trading, PE) without a reason; badmouthing competitors; criteria that are purely compensation.",
      "**Cosa verificano:** coerenza della tua storia e onestà.\n\n**Struttura:**\n1. **Sii onesto e coerente:** indica un gruppo coerente (banche di tipo, divisione e sede simili) — mostra una ricerca mirata.\n2. **Criteri:** i fattori che contano per te — qualità della formazione ed esposizione ai deal, team e cultura conosciuti, punti di forza settoriali, sede.\n3. **Posiziona questa banca:** spiega come si colloca rispetto a quei criteri, senza dire che è la tua unica candidatura.\n\n**Errori:** dire che non ti sei candidato altrove (non credibile); un elenco casuale di ruoli diversi (consulenza, trading, PE) senza motivo; parlare male dei concorrenti; criteri solo economici."
    ),
    rubric: [
      ess("Honest and consistent set of applications.", "Insieme di candidature onesto e coerente."),
      ess("Articulates sensible decision criteria.", "Esprime criteri decisionali sensati."),
      opt("Positions this bank favourably on those criteria without flattery.", "Posiziona questa banca in modo favorevole senza adulazione.")
    ]
  },

  /* ---------------- Leadership / teamwork / conflict ---------------- */
  {
    id: 'bq-leadership',
    type: 'behavioral',
    topic: 'leadership',
    difficulty: 2,
    seconds: 150,
    prompt: t("Tell me about a time you led a team.", "Mi racconti di una volta in cui ha guidato un team."),
    reference: t(
      "**Use STAR, weighted towards Action (≈60%).**\n\n- **Situation (15s):** the team, the goal, why it mattered.\n- **Task (10s):** your specific responsibility as leader.\n- **Action:** what *you* did — set direction, split work by strengths, ran check-ins, unblocked someone, made a call under uncertainty. Use “I”, not “we”.\n- **Result:** the measurable outcome, plus what you learned about leading.\n\nYou might draw on coordinating a research team or a pitch in a student investment fund or quant society — but only describe what you really did. Leadership need not mean a formal title.\n\n**Pitfalls:** describing a group effort without your role; leadership as “telling people what to do”; no result; a story you cannot expand under follow-up questions.",
      "**Usa lo STAR, con il peso sull’Azione (≈60%).**\n\n- **Situazione (15s):** il team, l’obiettivo, perché contava.\n- **Compito (10s):** la tua responsabilità specifica da leader.\n- **Azione:** cosa hai fatto *tu* — dato la direzione, diviso il lavoro per punti di forza, organizzato check-in, sbloccato qualcuno, preso una decisione nell’incertezza. Usa “io”, non “noi”.\n- **Risultato:** l’esito misurabile, più cosa hai imparato sul guidare un team.\n\nPotresti partire dal coordinamento di un gruppo di ricerca o di un pitch in un fondo d’investimento studentesco o in un’associazione di finanza quantitativa — ma racconta solo ciò che hai fatto davvero. Leadership non significa per forza un ruolo formale.\n\n**Errori:** descrivere uno sforzo di gruppo senza il tuo ruolo; leadership come “dire agli altri cosa fare”; nessun risultato; una storia che non regge alle domande di approfondimento."
    ),
    rubric: [
      ess("Clear STAR structure with a specific, real situation.", "Struttura STAR chiara con una situazione specifica e reale."),
      ess("Actions are personal and show leadership behaviours (direction, delegation, support, decisions).", "Le azioni sono personali e mostrano comportamenti di leadership (direzione, delega, supporto, decisioni)."),
      ess("Concrete result, ideally quantified.", "Risultato concreto, idealmente quantificato."),
      opt("Reflects on lessons learned.", "Riflette sulle lezioni apprese."),
      opt("Concise (about 2 minutes).", "Sintetica (circa 2 minuti).")
    ],
    followUps: [
      t("What would your team members say you could have done better?", "Cosa direbbero i membri del team che avrebbe potuto fare meglio?"),
      t("How did you handle someone who was not pulling their weight?", "Come ha gestito qualcuno che non faceva la sua parte?")
    ]
  },
  {
    id: 'bq-teamwork',
    type: 'behavioral',
    topic: 'teamwork',
    difficulty: 1,
    seconds: 120,
    prompt: t("Tell me about a time you worked in a team that was struggling. What did you do?", "Mi racconti di una volta in cui ha lavorato in un team in difficoltà. Cosa ha fatto?"),
    reference: t(
      "**What they test:** whether you make a team better without needing to be in charge — exactly what a junior analyst must do.\n\n**STAR structure:**\n- **Situation/Task:** the team, the goal, and *why* it was struggling (unclear roles, missed deadlines, low engagement).\n- **Action:** specific steps you took — clarified who owns what, proposed a timeline, took on an unglamorous piece of work, supported a teammate, raised the issue constructively.\n- **Result:** what changed and the outcome.\n- **Reflection:** what you would do earlier next time.\n\n**Pitfalls:** blaming teammates; making yourself the hero who did everything alone; no concrete action; a trivial example with nothing at stake.",
      "**Cosa verificano:** se migliori un team senza doverlo guidare — esattamente ciò che deve fare un analyst junior.\n\n**Struttura STAR:**\n- **Situazione/Compito:** il team, l’obiettivo e *perché* era in difficoltà (ruoli poco chiari, scadenze mancate, scarso coinvolgimento).\n- **Azione:** passi specifici che hai fatto — chiarito chi fa cosa, proposto una tabella di marcia, preso un compito poco gratificante, supportato un collega, sollevato il problema in modo costruttivo.\n- **Risultato:** cosa è cambiato e l’esito.\n- **Riflessione:** cosa faresti prima la prossima volta.\n\n**Errori:** dare la colpa ai compagni; presentarti come l’eroe che ha fatto tutto da solo; nessuna azione concreta; un esempio banale senza nulla in gioco."
    ),
    rubric: [
      ess("Specific situation with a real team problem.", "Situazione specifica con un vero problema di team."),
      ess("Constructive personal actions that helped the team (not blaming).", "Azioni personali costruttive che hanno aiutato il team (senza colpevolizzare)."),
      ess("Outcome described.", "Esito descritto."),
      opt("Shows self-awareness and reflection.", "Mostra consapevolezza e riflessione.")
    ]
  },
  {
    id: 'bq-conflict',
    type: 'behavioral',
    topic: 'conflict',
    difficulty: 2,
    seconds: 120,
    prompt: t("Tell me about a time you disagreed with a teammate or someone more senior.", "Mi racconti di una volta in cui non era d’accordo con un collega o con qualcuno più senior."),
    reference: t(
      "**What they test:** can you disagree respectfully, with evidence, and then commit to the decision?\n\n**STAR structure:**\n- **Situation:** what the disagreement was about — ideally substantive (an assumption, an approach, a recommendation), not personal.\n- **Action:** how you raised it: privately and early, with **data or reasoning**, listening to the other view, looking for common ground or a test.\n- **Result:** how it was resolved — either view can win; what matters is the process and the relationship afterwards.\n- **Learning:** what you took away about communication.\n\n**Pitfalls:** a story where you were simply right and the other person foolish; avoiding conflict entirely (“I always agree”); escalating immediately; personal clashes with no work substance.",
      "**Cosa verificano:** sai dissentire con rispetto, con argomenti, e poi impegnarti sulla decisione presa?\n\n**Struttura STAR:**\n- **Situazione:** su cosa verteva il disaccordo — idealmente di sostanza (un’ipotesi, un approccio, una raccomandazione), non personale.\n- **Azione:** come l’hai sollevato: in privato e per tempo, con **dati o ragionamenti**, ascoltando l’altra posizione, cercando un terreno comune o una verifica.\n- **Risultato:** come si è risolto — può prevalere l’una o l’altra posizione; conta il processo e il rapporto dopo.\n- **Lezione:** cosa hai imparato sulla comunicazione.\n\n**Errori:** una storia in cui avevi semplicemente ragione e l’altro era sciocco; evitare del tutto il conflitto (“sono sempre d’accordo”); escalation immediata; scontri personali senza contenuto di lavoro."
    ),
    rubric: [
      ess("Disagreement is substantive and described fairly.", "Il disaccordo è di sostanza e descritto in modo equilibrato."),
      ess("Raised respectfully with evidence and genuine listening.", "Sollevato con rispetto, con argomenti e ascolto reale."),
      ess("Resolution and preserved working relationship.", "Risoluzione e rapporto di lavoro preservato."),
      opt("Willingness to commit once a decision is made.", "Disponibilità ad allinearsi una volta presa la decisione.")
    ]
  },
  {
    id: 'bq-conflict-senior-numbers',
    type: 'behavioral',
    topic: 'conflict',
    difficulty: 3,
    seconds: 90,
    prompt: t("It is 1 a.m. and you believe a number your associate put in a client deck is wrong. The deck goes out at 7 a.m. What do you do?", "È l’1 di notte e ritieni che un numero inserito dal tuo associate in una presentazione per il cliente sia sbagliato. La presentazione parte alle 7. Cosa fai?"),
    reference: t(
      "**What they test:** judgement, humility and protecting the client and the team.\n\n**Strong answer structure:**\n1. **Verify first:** recheck the source and the calculation quickly — make sure you are right and understand why the numbers differ.\n2. **Raise it directly and promptly** with the associate (call or message, not a reply-all), framed as a question with your evidence: “I’m getting X from the filing, not Y — am I missing an adjustment?”\n3. **Propose a fix** and offer to make the change and recheck dependent pages.\n4. **If you cannot reach them** before the deadline, follow the team’s escalation path (e.g. the VP on the deal) rather than silently changing or sending it.\n\n**Pitfalls:** staying quiet to avoid friction; changing the number without telling anyone; accusing tone; escalating over the associate’s head as a first step.",
      "**Cosa verificano:** giudizio, umiltà e tutela del cliente e del team.\n\n**Struttura di una risposta forte:**\n1. **Verifica prima:** ricontrolla velocemente fonte e calcolo — assicurati di avere ragione e di capire perché i numeri differiscono.\n2. **Segnalalo subito e direttamente** all’associate (telefonata o messaggio, non a tutti), come domanda con le tue evidenze: “Dal bilancio mi risulta X, non Y — mi sfugge una rettifica?”\n3. **Proponi la correzione** e offriti di farla e di ricontrollare le pagine collegate.\n4. **Se non riesci a contattarlo** prima della scadenza, segui il percorso di escalation del team (ad es. il VP del deal) invece di modificare in silenzio o inviare comunque.\n\n**Errori:** tacere per evitare attriti; cambiare il numero senza dirlo a nessuno; tono accusatorio; scavalcare l’associate come primo passo."
    ),
    rubric: [
      ess("Verifies the issue before raising it.", "Verifica il problema prima di sollevarlo."),
      ess("Raises it promptly and respectfully with the associate.", "Lo segnala tempestivamente e con rispetto all’associate."),
      ess("Does not stay silent or make unilateral changes.", "Non tace né fa modifiche unilaterali."),
      opt("Has a sensible escalation plan if unreachable.", "Ha un piano di escalation sensato se non lo raggiunge.")
    ]
  },

  /* ---------------- Failure / resilience ---------------- */
  {
    id: 'bq-failure',
    type: 'behavioral',
    topic: 'failure',
    difficulty: 2,
    seconds: 120,
    prompt: t("Tell me about a time you failed.", "Mi racconti di una volta in cui ha fallito."),
    reference: t(
      "**What they test:** ownership, self-awareness and learning — not perfection.\n\n**Structure:**\n1. **A real failure** with real stakes, where the outcome was genuinely not what you wanted (a missed goal, a poor result, a project that did not land).\n2. **Own it:** what *you* did wrong or misjudged — no blaming circumstances or others.\n3. **What you did next:** how you responded at the time and limited the damage.\n4. **The lesson and proof:** what you changed in how you work, and a later situation where you applied it successfully. Spend at least half the answer on 3–4.\n\n**Pitfalls:** a disguised success (“I failed to get 30 cum laude, only 30”); a failure caused entirely by others; a catastrophic or ethical failure; no lesson.",
      "**Cosa verificano:** responsabilità, consapevolezza e capacità di imparare — non la perfezione.\n\n**Struttura:**\n1. **Un fallimento reale** con una posta in gioco reale, in cui l’esito non è stato quello voluto (un obiettivo mancato, un risultato scarso, un progetto non riuscito).\n2. **Assumersene la responsabilità:** cosa hai sbagliato o valutato male *tu* — senza dare la colpa a circostanze o altri.\n3. **Cosa hai fatto dopo:** come hai reagito e limitato i danni.\n4. **La lezione e la prova:** cosa hai cambiato nel tuo modo di lavorare e una situazione successiva in cui l’hai applicato con successo. Dedica almeno metà della risposta ai punti 3–4.\n\n**Errori:** un successo travestito (“non ho preso 30 e lode, solo 30”); un fallimento causato solo da altri; un fallimento catastrofico o etico; nessuna lezione."
    ),
    rubric: [
      ess("A genuine failure with personal ownership.", "Un fallimento autentico con assunzione di responsabilità personale."),
      ess("Clear lesson learned and change in behaviour.", "Lezione chiara e cambiamento di comportamento."),
      ess("Evidence the lesson was applied later.", "Prova che la lezione è stata applicata in seguito."),
      opt("Balanced: not trivial, not catastrophic.", "Equilibrato: né banale né catastrofico.")
    ]
  },
  {
    id: 'bq-resilience-pressure',
    type: 'behavioral',
    topic: 'resilience',
    difficulty: 2,
    seconds: 120,
    prompt: t("Tell me about a time you performed under significant pressure.", "Mi racconti di una volta in cui ha lavorato sotto forte pressione."),
    reference: t(
      "**What they test:** composure and judgement when deadlines collide — daily life for an analyst.\n\n**STAR structure:**\n- **Situation:** what made it high-pressure (tight deadline, competing commitments, high stakes, something going wrong late).\n- **Action:** how you **triaged**, broke the work down, communicated early about what was realistic, kept quality checks in place, and managed your energy.\n- **Result:** outcome delivered, ideally with evidence of quality.\n- **Reflection:** what you would systematise next time.\n\nE.g. you might draw on an exam period that overlapped with a society deadline or a competition — but use your own experience.\n\n**Pitfalls:** pressure you created by procrastinating (unless that is the lesson); “I work best under pressure” with no evidence; describing stress without describing action.",
      "**Cosa verificano:** lucidità e giudizio quando le scadenze si sovrappongono — la quotidianità di un analyst.\n\n**Struttura STAR:**\n- **Situazione:** cosa rendeva la situazione critica (scadenza stretta, impegni in conflitto, posta alta, un problema emerso all’ultimo).\n- **Azione:** come hai fatto **triage**, scomposto il lavoro, comunicato per tempo cosa era realistico, mantenuto i controlli di qualità e gestito le energie.\n- **Risultato:** esito consegnato, idealmente con prova della qualità.\n- **Riflessione:** cosa renderesti sistematico la prossima volta.\n\nAd esempio potresti partire da una sessione d’esami sovrapposta a una scadenza associativa o a una competizione — ma usa la tua esperienza.\n\n**Errori:** pressione creata dalla tua procrastinazione (a meno che sia la lezione); “rendo meglio sotto pressione” senza prove; descrivere lo stress senza descrivere le azioni."
    ),
    rubric: [
      ess("Genuinely high-pressure situation described concisely.", "Situazione davvero ad alta pressione, descritta in modo sintetico."),
      ess("Concrete actions: prioritisation, communication, quality control.", "Azioni concrete: priorità, comunicazione, controllo qualità."),
      ess("Positive, credible outcome.", "Esito positivo e credibile."),
      opt("Reflection on improving the approach.", "Riflessione su come migliorare l’approccio.")
    ]
  },
  {
    id: 'bq-resilience-feedback',
    type: 'behavioral',
    topic: 'resilience',
    difficulty: 1,
    seconds: 90,
    prompt: t("Tell me about a time you received critical feedback. How did you respond?", "Mi racconti di una volta in cui ha ricevuto un feedback critico. Come ha reagito?"),
    reference: t(
      "**What they test:** coachability — analysts receive heavy mark-ups on every draft.\n\n**Structure:**\n1. **The feedback:** what it was and from whom (professor, team leader, manager, peer). Choose something substantive.\n2. **Initial reaction, honestly:** it is fine to admit it stung — then show how you processed it.\n3. **Action:** you asked clarifying questions, identified the root cause, and changed something specific.\n4. **Result:** evidence of improvement, and how you now *seek out* feedback proactively.\n\n**Pitfalls:** feedback that was really praise; arguing the feedback was unfair; no visible change in behaviour.",
      "**Cosa verificano:** la capacità di farsi guidare — gli analyst ricevono correzioni pesanti su ogni bozza.\n\n**Struttura:**\n1. **Il feedback:** cosa era e da chi (professore, responsabile di team, manager, collega). Scegli qualcosa di sostanziale.\n2. **La reazione iniziale, con onestà:** puoi ammettere che ti ha colpito — poi mostra come l’hai elaborato.\n3. **Azione:** hai fatto domande di chiarimento, individuato la causa e cambiato qualcosa di specifico.\n4. **Risultato:** prova del miglioramento e di come ora *cerchi* attivamente il feedback.\n\n**Errori:** un feedback che in realtà era un complimento; sostenere che fosse ingiusto; nessun cambiamento visibile nel comportamento."
    ),
    rubric: [
      ess("Substantive critical feedback described honestly.", "Feedback critico sostanziale descritto con onestà."),
      ess("Constructive response with a specific change.", "Reazione costruttiva con un cambiamento specifico."),
      opt("Shows proactive feedback-seeking afterwards.", "Mostra la ricerca attiva di feedback in seguito.")
    ]
  },

  /* ---------------- Strengths / weaknesses ---------------- */
  {
    id: 'bq-strengths',
    type: 'behavioral',
    topic: 'strengths',
    difficulty: 1,
    seconds: 90,
    prompt: t("What are your greatest strengths?", "Quali sono i suoi principali punti di forza?"),
    reference: t(
      "**Structure — 2 or 3 strengths, each Claim → Evidence → Relevance:**\n\n1. **Claim:** pick strengths that matter for an analyst — analytical rigour, attention to detail, work ethic, quick learning, teamwork, communication.\n2. **Evidence:** a short, specific example for each (a model you built, a project, a result), drawn from your real experience — e.g. you might draw on quantitative work in your quant finance society.\n3. **Relevance:** one line on how it helps on a deal team.\n\nChoose strengths that are consistent with the rest of your story and that your references would confirm.\n\n**Pitfalls:** a list of adjectives with no evidence; too many strengths; strengths irrelevant to the role; arrogance.",
      "**Struttura — 2 o 3 punti di forza, ciascuno Affermazione → Prova → Rilevanza:**\n\n1. **Affermazione:** scegli punti di forza importanti per un analyst — rigore analitico, attenzione al dettaglio, etica del lavoro, rapidità di apprendimento, lavoro di squadra, comunicazione.\n2. **Prova:** un esempio breve e specifico per ciascuno (un modello costruito, un progetto, un risultato), tratto dalla tua esperienza reale — ad esempio potresti partire dal lavoro quantitativo nell’associazione di finanza quantitativa.\n3. **Rilevanza:** una frase su come aiuta in un deal team.\n\nScegli punti di forza coerenti con il resto della tua storia e che chi ti conosce confermerebbe.\n\n**Errori:** elenco di aggettivi senza prove; troppi punti di forza; punti di forza irrilevanti per il ruolo; arroganza."
    ),
    rubric: [
      ess("Strengths relevant to the analyst role.", "Punti di forza rilevanti per il ruolo di analyst."),
      ess("Each backed by a concrete example.", "Ciascuno sostenuto da un esempio concreto."),
      opt("Concise and confident without arrogance.", "Sintetica e sicura senza arroganza."),
      opt("Consistent with the rest of the candidate’s story.", "Coerente con il resto della storia del candidato.")
    ]
  },
  {
    id: 'bq-why-hire-you',
    type: 'behavioral',
    topic: 'strengths',
    difficulty: 2,
    seconds: 75,
    prompt: t("Why should we hire you over the other candidates?", "Perché dovremmo assumere lei e non gli altri candidati?"),
    reference: t(
      "**Structure — a confident 3-point close:**\n\n1. **Technical readiness:** evidence you can do the work from day one — coursework, self-study, modelling or valuation you have actually done.\n2. **Proven work ethic and teamwork:** a fact-based example of delivering under pressure with others.\n3. **Your distinctive angle:** what you add that others may not — e.g. an international profile (Italian university plus a US exchange), languages, or a quantitative edge — framed as value to the team, not as a comparison with other candidates.\n\nEnd with genuine enthusiasm for this role.\n\n**Pitfalls:** criticising other candidates; generic claims (“I’m hard-working”); excessive modesty; repeating your CV.",
      "**Struttura — una chiusura sicura in 3 punti:**\n\n1. **Preparazione tecnica:** prove che puoi lavorare dal primo giorno — corsi, studio individuale, modelli o valutazioni che hai davvero fatto.\n2. **Etica del lavoro e lavoro di squadra dimostrati:** un esempio concreto di consegna sotto pressione insieme ad altri.\n3. **Il tuo tratto distintivo:** cosa porti che altri potrebbero non avere — ad esempio un profilo internazionale (università italiana più exchange negli USA), lingue o un vantaggio quantitativo — presentato come valore per il team, non come confronto con gli altri candidati.\n\nChiudi con un entusiasmo autentico per questo ruolo.\n\n**Errori:** criticare gli altri candidati; affermazioni generiche (“sono un gran lavoratore”); modestia eccessiva; ripetere il CV."
    ),
    rubric: [
      ess("Gives specific, evidence-backed reasons.", "Fornisce ragioni specifiche e supportate da prove."),
      ess("Identifies a distinctive value-add.", "Identifica un valore aggiunto distintivo."),
      opt("Confident and enthusiastic, without disparaging others.", "Sicura ed entusiasta, senza sminuire gli altri.")
    ]
  },
  {
    id: 'bq-weakness',
    type: 'behavioral',
    topic: 'weaknesses',
    difficulty: 2,
    seconds: 90,
    prompt: t("What is your greatest weakness?", "Qual è il suo principale punto debole?"),
    reference: t(
      "**Structure — Real weakness → Impact → Fix → Progress:**\n\n1. **A genuine, specific weakness** that is not a core requirement of the job (e.g. not delegating enough, over-investing in polish, reluctance to speak up in large groups, limited experience with a tool).\n2. **A concrete moment** when it had a cost.\n3. **What you are doing about it:** specific habits or steps.\n4. **Evidence of progress** — and honest acknowledgement that it is still a work in progress.\n\n**Pitfalls:** humble-brags (“I work too hard”, “I’m a perfectionist” with no substance); a weakness that disqualifies you (“I’m careless with numbers”); no plan; sounding rehearsed.",
      "**Struttura — Debolezza reale → Impatto → Rimedio → Progressi:**\n\n1. **Un punto debole autentico e specifico** che non sia un requisito centrale del lavoro (ad es. delegare poco, investire troppo nella rifinitura, riluttanza a intervenire in gruppi numerosi, esperienza limitata con uno strumento).\n2. **Un momento concreto** in cui ha avuto un costo.\n3. **Cosa stai facendo:** abitudini o passi specifici.\n4. **Prova dei progressi** — e ammissione onesta che il lavoro è ancora in corso.\n\n**Errori:** falsi difetti (“lavoro troppo”, “sono perfezionista” senza sostanza); un difetto squalificante (“sono distratto con i numeri”); nessun piano; tono recitato."
    ),
    rubric: [
      ess("Genuine and specific weakness (not a humble-brag).", "Punto debole autentico e specifico (non un falso difetto)."),
      ess("Concrete actions taken to improve, with evidence of progress.", "Azioni concrete per migliorare, con prova dei progressi."),
      ess("Weakness is not disqualifying for the role.", "Il punto debole non è squalificante per il ruolo."),
      opt("Self-aware, non-defensive tone.", "Tono consapevole, non difensivo.")
    ]
  },

  /* ---------------- Attention to detail ---------------- */
  {
    id: 'bq-attention-detail',
    type: 'behavioral',
    topic: 'attention-to-detail',
    difficulty: 2,
    seconds: 120,
    prompt: t("Tell me about a time a mistake slipped through in your work. What happened and what do you do differently now?", "Mi racconti di una volta in cui un errore è sfuggito nel suo lavoro. Cosa è successo e cosa fa di diverso ora?"),
    reference: t(
      "**What they test:** how you catch errors — analysts are judged heavily on accuracy — and how you behave when you make one.\n\n**Structure:**\n1. **The mistake:** small to moderate, real, in a piece of analytical or written work.\n2. **How it was found and what you did immediately:** you **flagged it yourself** promptly, fixed it and checked for knock-on effects.\n3. **Root cause:** rushing, no review step, unclear version control.\n4. **System you now use:** specific checks — reconciling totals, checking units and signs, sanity-checking outputs against intuition, reviewing on paper or with fresh eyes, a personal checklist.\n\n**Pitfalls:** claiming you never make mistakes; hiding or minimising it; a fix that is only “I’ll be more careful”.",
      "**Cosa verificano:** come individui gli errori — gli analyst sono giudicati molto sull’accuratezza — e come ti comporti quando ne fai uno.\n\n**Struttura:**\n1. **L’errore:** piccolo o medio, reale, in un lavoro analitico o scritto.\n2. **Come è emerso e cosa hai fatto subito:** l’hai **segnalato tu** tempestivamente, corretto e verificato gli effetti a catena.\n3. **Causa:** fretta, nessuna fase di revisione, gestione delle versioni poco chiara.\n4. **Il sistema che usi ora:** controlli specifici — quadrature dei totali, verifica di unità e segni, coerenza dei risultati con l’intuizione, revisione su carta o a mente fresca, una checklist personale.\n\n**Errori:** dire di non sbagliare mai; nascondere o minimizzare; un rimedio che è solo “starò più attento”."
    ),
    rubric: [
      ess("Owns a real mistake and describes prompt, transparent correction.", "Si assume un errore reale e descrive una correzione tempestiva e trasparente."),
      ess("Identifies the root cause.", "Identifica la causa."),
      ess("Describes a concrete, repeatable checking process.", "Descrive un processo di controllo concreto e ripetibile."),
      opt("Shows understanding of why accuracy matters in banking.", "Mostra di capire perché l’accuratezza conta in banca.")
    ]
  },

  /* ---------------- Ethics ---------------- */
  {
    id: 'bq-ethics-mnpi',
    type: 'behavioral',
    topic: 'ethics',
    difficulty: 2,
    seconds: 90,
    prompt: t("A friend asks you, casually over dinner, which companies your team is working on. What do you do?", "Un amico, a cena, ti chiede in modo informale su quali aziende sta lavorando il tuo team. Cosa fai?"),
    reference: t(
      "**What they test:** whether you understand confidentiality and inside information instinctively.\n\n**Strong answer structure:**\n1. **Clear line:** you do not share anything — not names, sectors in a way that identifies a client, or deal timing. Deal information is confidential and can be **inside information**; misusing or disclosing it is prohibited (in the EU under the Market Abuse Regulation) and breaches the bank’s policies.\n2. **How you handle it:** politely deflect without making it awkward (“I can’t talk about work, but…”), and never discuss deals in public places.\n3. **If pressed or if you think something leaked:** go to **Compliance** — that is what they are there for.\n\n**Pitfalls:** “I would only say the sector”; treating it as a grey area; not knowing that Compliance exists.",
      "**Cosa verificano:** se comprendi d’istinto riservatezza e informazioni privilegiate.\n\n**Struttura di una risposta forte:**\n1. **Linea chiara:** non condividi nulla — né nomi, né settori in modo da identificare un cliente, né tempistiche. Le informazioni sui deal sono riservate e possono essere **informazioni privilegiate**; utilizzarle o divulgarle è vietato (nell’UE dal Regolamento sugli abusi di mercato, MAR) e viola le policy della banca.\n2. **Come gestirlo:** sviare con garbo senza creare imbarazzo (“di lavoro non posso parlare, ma…”), e non discutere mai di deal in luoghi pubblici.\n3. **Se insiste o se pensi ci sia stata una fuga di notizie:** rivolgiti alla **Compliance** — esiste per questo.\n\n**Errori:** “direi solo il settore”; trattarla come una zona grigia; non sapere che esiste la Compliance."
    ),
    rubric: [
      ess("Refuses to share any deal information.", "Rifiuta di condividere qualsiasi informazione sui deal."),
      ess("Understands confidentiality / inside information obligations.", "Comprende gli obblighi di riservatezza / informazioni privilegiate."),
      opt("Mentions escalating to Compliance when appropriate.", "Cita il ricorso alla Compliance quando opportuno."),
      opt("Handles the social situation tactfully.", "Gestisce la situazione sociale con tatto.")
    ]
  },
  {
    id: 'bq-ethics-dilemma',
    type: 'behavioral',
    topic: 'ethics',
    difficulty: 3,
    seconds: 120,
    prompt: t("Tell me about a time you faced an ethical dilemma, or were asked to do something you were uncomfortable with.", "Mi racconti di una volta in cui ha affrontato un dilemma etico o le è stato chiesto di fare qualcosa che la metteva a disagio."),
    reference: t(
      "**What they test:** integrity under social pressure, and judgement about when and how to speak up.\n\n**Structure:**\n1. **Situation:** a real, proportionate dilemma (e.g. pressure to cut corners on a group project, misreported contributions, a rules question in a competition or society).\n2. **The tension:** why it was hard — loyalty, friendship, deadlines.\n3. **Action:** how you raised it, with whom, and how you balanced firmness with tact.\n4. **Result and principle:** the outcome and the principle you would apply again — in banking, that means escalating to the right people and Compliance.\n\n**Pitfalls:** an invented or exaggerated scenario; a story where you went along with it and show no reflection; moralising about others; a trivial situation with no real tension.",
      "**Cosa verificano:** integrità sotto pressione sociale e giudizio su quando e come intervenire.\n\n**Struttura:**\n1. **Situazione:** un dilemma reale e proporzionato (ad es. pressioni per prendere scorciatoie in un progetto di gruppo, contributi riportati in modo scorretto, una questione di regole in una competizione o associazione).\n2. **La tensione:** perché era difficile — lealtà, amicizia, scadenze.\n3. **Azione:** come l’hai sollevato, con chi e come hai bilanciato fermezza e tatto.\n4. **Risultato e principio:** l’esito e il principio che applicheresti di nuovo — in banca significa rivolgersi alle persone giuste e alla Compliance.\n\n**Errori:** uno scenario inventato o esagerato; una storia in cui ti sei adeguato senza riflessione; fare la morale agli altri; una situazione banale senza vera tensione."
    ),
    rubric: [
      ess("Real dilemma with genuine tension.", "Dilemma reale con una tensione autentica."),
      ess("Acted with integrity, raising the issue appropriately.", "Ha agito con integrità, sollevando il problema in modo appropriato."),
      opt("Articulates a principle transferable to banking (escalation, Compliance).", "Esprime un principio trasferibile alla banca (escalation, Compliance)."),
      opt("Non-judgemental tone towards others.", "Tono non giudicante verso gli altri.")
    ]
  },

  /* ---------------- Commercial awareness ---------------- */
  {
    id: 'bq-commercial-deal',
    type: 'behavioral',
    topic: 'commercial-awareness',
    difficulty: 2,
    seconds: 150,
    prompt: t("Tell me about a recent M&A deal you have followed.", "Mi parli di un’operazione di M&A recente che ha seguito."),
    reference: t(
      "**Structure — the 6-point deal framework (2 minutes):**\n\n1. **Who and what:** buyer, target, sector, headline value and consideration (cash/stock).\n2. **Strategic rationale:** why the buyer did it — growth, synergies, capabilities.\n3. **Valuation:** the multiple paid (e.g. EV/EBITDA) and premium vs. peers or the undisturbed share price.\n4. **Financing and structure:** how it was funded and any notable terms.\n5. **Risks and regulation:** antitrust, foreign-investment review (e.g. Italian golden power), integration, overpayment.\n6. **Your view:** do you think it creates value, and why?\n\nPick a deal you can defend under two or three levels of follow-up, and check the facts in primary sources (press release, investor presentation).\n\n**Pitfalls:** a famous deal you only know from a headline; wrong numbers; no personal view.",
      "**Struttura — lo schema in 6 punti (2 minuti):**\n\n1. **Chi e cosa:** acquirente, target, settore, valore e corrispettivo (contanti/azioni).\n2. **Razionale strategico:** perché l’acquirente l’ha fatto — crescita, sinergie, competenze.\n3. **Valutazione:** il multiplo pagato (ad es. EV/EBITDA) e il premio rispetto ai peer o al prezzo indisturbato.\n4. **Finanziamento e struttura:** come è stato finanziato ed eventuali clausole rilevanti.\n5. **Rischi e regolamentazione:** antitrust, controllo sugli investimenti esteri (ad es. golden power in Italia), integrazione, prezzo eccessivo.\n6. **La tua view:** crea valore secondo te, e perché?\n\nScegli un’operazione che sai difendere per due o tre livelli di domande, e verifica i fatti su fonti primarie (comunicato stampa, presentazione agli investitori).\n\n**Errori:** un deal famoso conosciuto solo dal titolo; numeri sbagliati; nessuna view personale."
    ),
    rubric: [
      ess("Accurate key facts (parties, value, consideration).", "Fatti chiave corretti (parti, valore, corrispettivo)."),
      ess("Explains the strategic rationale.", "Spiega il razionale strategico."),
      ess("Offers a reasoned personal view on value creation.", "Esprime una view personale motivata sulla creazione di valore."),
      opt("Discusses valuation and financing.", "Discute valutazione e finanziamento."),
      opt("Identifies risks, including regulatory.", "Identifica i rischi, inclusi quelli regolamentari.")
    ],
    followUps: [
      t("Who else could have bought the target?", "Chi altro avrebbe potuto acquistare il target?"),
      t("Would you have advised the buyer to do this deal at this price?", "Avrebbe consigliato all’acquirente di fare l’operazione a questo prezzo?")
    ]
  },
  {
    id: 'bq-commercial-pitch',
    type: 'behavioral',
    topic: 'commercial-awareness',
    difficulty: 3,
    seconds: 150,
    prompt: t("If you were advising a company of your choice, what acquisition would you recommend it makes?", "Se fosse advisor di un’azienda a sua scelta, quale acquisizione le raccomanderebbe?"),
    reference: t(
      "**What they test:** whether you can think like a banker generating ideas.\n\n**Structure:**\n1. **Client and its situation:** strategy, gaps, balance sheet capacity (leverage, cash, share price as currency).\n2. **The target:** who and why — fit with the strategy, synergies, market position.\n3. **Feasibility:** rough size versus the buyer, likely valuation range from peer multiples, how it could be financed, and whether it is likely to be accretive.\n4. **Risks:** antitrust, regulatory, cultural/integration, willingness of the target’s owners to sell.\n5. **Recommendation:** a clear call.\n\nYou might draw on a company your student investment fund has researched — so you know the numbers.\n\n**Pitfalls:** an implausibly large or obviously blocked deal; no numbers at all; ignoring whether the target is for sale.",
      "**Cosa verificano:** se sai ragionare come un banker che genera idee.\n\n**Struttura:**\n1. **Il cliente e la sua situazione:** strategia, lacune, capacità di bilancio (leva, cassa, azioni come moneta di scambio).\n2. **Il target:** chi e perché — coerenza con la strategia, sinergie, posizionamento.\n3. **Fattibilità:** dimensione rispetto all’acquirente, intervallo di valutazione dai multipli dei peer, come finanziarla e se sarebbe accrescitiva.\n4. **Rischi:** antitrust, regolamentazione, cultura/integrazione, disponibilità dei soci del target a vendere.\n5. **Raccomandazione:** una posizione chiara.\n\nPotresti partire da un’azienda analizzata dal tuo fondo d’investimento studentesco — così conosci i numeri.\n\n**Errori:** un’operazione implausibile per dimensione o palesemente bloccabile; nessun numero; ignorare se il target è in vendita."
    ),
    rubric: [
      ess("Coherent strategic rationale for the pairing.", "Razionale strategico coerente per l’abbinamento."),
      ess("Considers feasibility: size, valuation, financing.", "Considera la fattibilità: dimensione, valutazione, finanziamento."),
      opt("Identifies key risks (antitrust, integration, seller willingness).", "Identifica i rischi chiave (antitrust, integrazione, disponibilità a vendere)."),
      opt("Gives a clear recommendation.", "Dà una raccomandazione chiara.")
    ]
  },

  /* ---------------- Prioritisation ---------------- */
  {
    id: 'bq-prioritization-three-bankers',
    type: 'behavioral',
    topic: 'prioritization',
    difficulty: 2,
    seconds: 90,
    prompt: t("Three bankers each give you an urgent task due tonight, and you cannot do all three well. What do you do?", "Tre banker ti assegnano ciascuno un compito urgente per stasera e non puoi farli tutti e tre bene. Cosa fai?"),
    reference: t(
      "**What they test:** judgement, communication and transparency — not heroics.\n\n**Strong answer structure:**\n1. **Clarify each task:** real deadline, scope, how long it will take, and what “good enough” looks like.\n2. **Assess priority:** client-facing and time-critical deliverables (e.g. a live deal, a client meeting tomorrow morning) generally come before internal work.\n3. **Communicate early and transparently:** tell each banker what else you are working on and your proposed timing; **if there is a genuine conflict, let the staffer or the more senior bankers decide** — do not silently pick a winner.\n4. **Execute and update:** deliver in order, flag delays immediately.\n\n**Pitfalls:** “I would just stay up all night” without communicating; missing a deadline without warning; sacrificing accuracy.",
      "**Cosa verificano:** giudizio, comunicazione e trasparenza — non eroismo.\n\n**Struttura di una risposta forte:**\n1. **Chiarire ogni compito:** scadenza reale, perimetro, tempo necessario e cosa significa “sufficiente”.\n2. **Valutare la priorità:** i deliverable per il cliente e urgenti (ad es. un deal in corso, un incontro con il cliente domattina) vengono in genere prima del lavoro interno.\n3. **Comunicare presto e con trasparenza:** dire a ciascun banker su cos’altro stai lavorando e la tempistica che proponi; **se c’è un conflitto reale, far decidere lo staffer o i banker più senior** — non scegliere in silenzio.\n4. **Eseguire e aggiornare:** consegnare in ordine, segnalare subito i ritardi.\n\n**Errori:** “starei sveglio tutta la notte” senza comunicare; mancare una scadenza senza avvisare; sacrificare l’accuratezza."
    ),
    rubric: [
      ess("Clarifies deadlines and scope before acting.", "Chiarisce scadenze e perimetro prima di agire."),
      ess("Communicates proactively and escalates genuine conflicts to seniors/staffer.", "Comunica in modo proattivo e porta i conflitti reali ai senior/staffer."),
      opt("Sensible prioritisation logic (client-facing, time-critical first).", "Logica di priorità sensata (prima cliente e urgenza)."),
      opt("Maintains quality / flags delays early.", "Mantiene la qualità / segnala per tempo i ritardi.")
    ]
  },
  {
    id: 'bq-prioritization-balance',
    type: 'behavioral',
    topic: 'prioritization',
    difficulty: 1,
    seconds: 90,
    prompt: t("How do you manage your time across your studies, extracurriculars and recruiting?", "Come gestisce il tempo tra studio, attività extracurricolari e recruiting?"),
    reference: t(
      "**What they test:** organisation and self-management — proxies for handling multiple deals.\n\n**Structure:**\n1. **Your system:** concrete tools and habits — weekly planning, calendar blocking, a task list ranked by deadline and importance, buffers before deadlines.\n2. **Trade-offs:** how you decide what to drop or delegate when things collide (and an example where you did).\n3. **Evidence:** a busy period — e.g. balancing exams with commitments in your student investment fund and quant finance society during an exchange semester — and the outcome.\n4. **What you have improved:** one thing you changed after a period that went less well.\n\n**Pitfalls:** “I’m just naturally organised”; no tools or example; describing overload as a badge of honour.",
      "**Cosa verificano:** organizzazione e autogestione — un indicatore di come gestirai più deal.\n\n**Struttura:**\n1. **Il tuo sistema:** strumenti e abitudini concrete — pianificazione settimanale, blocchi in calendario, lista di attività ordinata per scadenza e importanza, margini prima delle scadenze.\n2. **Compromessi:** come decidi cosa abbandonare o delegare quando gli impegni si sovrappongono (e un esempio in cui l’hai fatto).\n3. **Prove:** un periodo intenso — ad esempio conciliare esami e impegni nel fondo d’investimento studentesco e nell’associazione di finanza quantitativa durante un semestre di exchange — e l’esito.\n4. **Cosa hai migliorato:** una cosa che hai cambiato dopo un periodo andato meno bene.\n\n**Errori:** “sono organizzato per natura”; nessuno strumento né esempio; presentare il sovraccarico come un vanto."
    ),
    rubric: [
      ess("Describes a concrete time-management system.", "Descrive un sistema concreto di gestione del tempo."),
      ess("Gives evidence from a real busy period.", "Fornisce prove da un periodo intenso reale."),
      opt("Shows judgement about trade-offs and continuous improvement.", "Mostra giudizio sui compromessi e miglioramento continuo.")
    ]
  }
];
