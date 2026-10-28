import type { L, Lesson } from '../types';

/**
 * Academy 1 — Modules A3 (Italian financial reporting, OIC), A4 (IFRS) and A5 (US GAAP).
 * Effective dates and thresholds checked October 2026 (see `sources` of each lesson).
 */
const t = (en: string, it: string): L => ({ en, it });

/* ============================================================== */
/* A3 — Italian financial reporting (Civil Code + OIC)             */
/* ============================================================== */

const a3: Lesson[] = [
  /* ------------------------------------------------------------ */
  {
    id: 'acc-italian-framework',
    academyId: 'accounting',
    moduleId: 'A3',
    mode: 'quick',
    minutes: 6,
    difficulty: 1,
    qualitative: true,
    reviewed: '2026-10',
    objective: t(
      'Describe the Italian statutory reporting framework (Civil Code arts. 2423 ff. and OIC), who must or may use IFRS instead, and when a company can prepare abbreviated or micro financial statements.',
      'Descrivere il quadro normativo del bilancio civilistico (artt. 2423 ss. c.c. e principi OIC), chi deve o può adottare gli IFRS e quando una società può redigere il bilancio in forma abbreviata o il bilancio delle micro-imprese.'
    ),
    screens: [
      {
        type: 'intuition',
        title: t('Two rulebooks in one country', 'Due regolamenti nello stesso Paese'),
        body: t(
          'Italy has two accounting worlds. Listed groups and banks report under **IFRS**. The vast majority of companies — family-owned SMEs, mid-caps, most private equity targets — report under the **Civil Code** as interpreted by the **OIC** standards.\n\nIf you work on an Italian mid-market deal, the target\'s audited accounts will almost certainly be "bilancio civilistico OIC". You must read them fluently and know where they differ from the IFRS numbers of listed comparables.',
          'In Italia convivono due mondi contabili. I gruppi quotati e le banche redigono il bilancio secondo gli **IFRS**. La grande maggioranza delle società — PMI familiari, mid-cap, gran parte dei target di private equity — applica il **Codice Civile** come interpretato dai principi **OIC**.\n\nSe lavori su un deal mid-market italiano, il bilancio certificato del target sarà quasi sempre un "bilancio civilistico OIC". Devi saperlo leggere con disinvoltura e sapere dove si discosta dai numeri IFRS dei comparables quotati.'
        )
      },
      {
        type: 'technical',
        title: t('The hierarchy of sources', 'La gerarchia delle fonti'),
        body: t(
          '- **Civil Code, arts. 2423–2435-ter**: the law. It sets the components, general clauses, principles, formats (arts. 2424–2425-ter), measurement rules (art. 2426) and disclosures (arts. 2427–2428). It implements the EU Accounting Directive 2013/34/EU (via D.Lgs. 139/2015).\n- **OIC standards** (OIC 9 … OIC 34): issued by the **Organismo Italiano di Contabilità**, the national standard setter whose role is recognised by law (art. 9-bis D.Lgs. 38/2005). They interpret and integrate the Code; they cannot contradict it.\n\nUnder art. 2423, the financial statements (**bilancio d\'esercizio**) comprise: **stato patrimoniale**, **conto economico**, **rendiconto finanziario** and **nota integrativa**. The **relazione sulla gestione** (art. 2428) accompanies them but is not part of them.',
          '- **Codice Civile, artt. 2423–2435-ter**: la legge. Stabilisce i documenti, le clausole generali, i principi, gli schemi (artt. 2424–2425-ter), i criteri di valutazione (art. 2426) e l\'informativa (artt. 2427–2428). Recepisce la Direttiva contabile UE 2013/34/UE (tramite il D.Lgs. 139/2015).\n- **Principi OIC** (OIC 9 … OIC 34): emanati dall\'**Organismo Italiano di Contabilità**, lo standard setter nazionale il cui ruolo è riconosciuto per legge (art. 9-bis D.Lgs. 38/2005). Interpretano e integrano il Codice; non possono derogarvi.\n\nSecondo l\'art. 2423 il **bilancio d\'esercizio** è costituito da **stato patrimoniale**, **conto economico**, **rendiconto finanziario** e **nota integrativa**. La **relazione sulla gestione** (art. 2428) lo correda ma non ne fa parte.'
        )
      },
      {
        type: 'technical',
        title: t('General clauses (art. 2423)', 'Le clausole generali (art. 2423)'),
        body: t(
          'The financial statements must be prepared with **clarity** and give a **true and fair view** ("rappresentazione veritiera e corretta") of the financial position and the result for the year.\n\n- If the legal rules are not enough for a true and fair view, **additional information** must be given.\n- **Materiality** (comma 4): recognition, measurement, presentation and disclosure rules need not be applied when the effect is immaterial — the policy must be explained in the nota integrativa.\n- **Override** (comma 5): in exceptional cases, a rule incompatible with a true and fair view must not be applied; the reasons and effects are disclosed and any resulting gains go to a **non-distributable reserve**.\n- Amounts are presented in **units of euro**.',
          'Il bilancio deve essere redatto con **chiarezza** e rappresentare in modo **veritiero e corretto** la situazione patrimoniale e finanziaria e il risultato economico dell\'esercizio.\n\n- Se le norme di legge non bastano a dare una rappresentazione veritiera e corretta, si forniscono **informazioni complementari**.\n- **Rilevanza** (comma 4): non occorre rispettare gli obblighi di rilevazione, valutazione, presentazione e informativa quando la loro osservanza ha effetti irrilevanti — i criteri adottati vanno illustrati in nota integrativa.\n- **Deroga** (comma 5): in casi eccezionali, la norma incompatibile con la rappresentazione veritiera e corretta non si applica; motivi ed effetti vanno indicati e gli eventuali utili confluiscono in una **riserva non distribuibile**.\n- Il bilancio è redatto **in unità di euro**.'
        )
      },
      {
        type: 'technical',
        title: t('Drafting principles (art. 2423-bis)', 'I principi di redazione (art. 2423-bis)'),
        body: t(
          'Art. 2423-bis lists the "postulati" every OIC preparer applies:',
          'L\'art. 2423-bis elenca i postulati che ogni redattore OIC applica:'
        ),
        table: {
          headers: [t('Principle', 'Principio'), t('What it means', 'Cosa significa')],
          rows: [
            [t('Prudence', 'Prudenza'), t('Only profits realised at year end are recognised; foreseeable risks and losses are recognised even if known after year end', 'Si iscrivono solo gli utili realizzati alla chiusura; si tiene conto di rischi e perdite di competenza anche se conosciuti dopo')],
            [t('Going concern', 'Continuità aziendale'), t('Measurement assumes the business continues to operate', 'La valutazione presuppone la prospettiva della continuazione dell\'attività')],
            [t('Substance over form', 'Prevalenza della sostanza'), t('Items are recognised and presented considering the substance of the transaction or contract', 'Le voci si rilevano e presentano tenendo conto della sostanza dell\'operazione o del contratto')],
            [t('Accruals', 'Competenza'), t('Income and expenses belong to the period they relate to, regardless of cash', 'Proventi e oneri si imputano all\'esercizio di competenza, indipendentemente da incassi e pagamenti')],
            [t('Separate measurement', 'Valutazione separata'), t('Heterogeneous items within a caption are measured separately', 'Gli elementi eterogenei di una voce si valutano separatamente')],
            [t('Consistency', 'Costanza dei criteri'), t('Measurement criteria cannot change between years except in exceptional cases (disclosed)', 'I criteri di valutazione non si modificano da un esercizio all\'altro, salvo casi eccezionali motivati')]
          ]
        }
      },
      {
        type: 'technical',
        title: t('OIC or IFRS? Reg. (EC) 1606/2002 and D.Lgs. 38/2005', 'OIC o IFRS? Reg. (CE) 1606/2002 e D.Lgs. 38/2005'),
        body: t(
          '- **Reg. (EC) 1606/2002** (the "IAS Regulation") requires EU-endorsed IFRS in the **consolidated** accounts of companies whose securities trade on an EU regulated market, and lets Member States extend IFRS to separate accounts and unlisted companies.\n- **D.Lgs. 38/2005** is Italy\'s use of that option: IFRS is **mandatory** in both consolidated and separate statements of listed companies, banks and supervised financial intermediaries, with specific rules for insurers.\n- Other companies may **opt** for IFRS; companies eligible for **abbreviated** statements (art. 2435-bis) are excluded from the option.\n- Everyone else applies the **Civil Code + OIC**.',
          '- Il **Reg. (CE) 1606/2002** (il "Regolamento IAS") impone gli IFRS omologati nel **bilancio consolidato** delle società con titoli negoziati in un mercato regolamentato UE e consente agli Stati membri di estenderli al bilancio d\'esercizio e alle non quotate.\n- Il **D.Lgs. 38/2005** è l\'esercizio di tale opzione in Italia: IFRS **obbligatori** nel consolidato e nel bilancio d\'esercizio di società quotate, banche e intermediari finanziari vigilati, con regole specifiche per le assicurazioni.\n- Le altre società possono **optare** per gli IFRS; ne sono escluse quelle che possono redigere il bilancio **in forma abbreviata** (art. 2435-bis).\n- Tutte le altre applicano **Codice Civile + OIC**.'
        )
      },
      {
        type: 'example',
        title: t('Size thresholds after D.Lgs. 125/2024', 'Le soglie dimensionali dopo il D.Lgs. 125/2024'),
        body: t(
          'A company not listed on a regulated market may use the simplified regimes if it does **not exceed two of three** limits in its first year or, thereafter, for **two consecutive years**. D.Lgs. 125/2024 (transposing Directive (EU) 2023/2775) raised the euro limits by about 25%; they are applied in practice from FY2024 financial statements. Revenue = ricavi delle vendite e delle prestazioni; employees = average during the year.',
          'Una società senza titoli negoziati in mercati regolamentati può adottare i regimi semplificati se **non supera due dei tre** limiti nel primo esercizio o, successivamente, per **due esercizi consecutivi**. Il D.Lgs. 125/2024 (recepimento della Direttiva (UE) 2023/2775) ha innalzato i limiti in euro di circa il 25%; nella prassi si applicano dai bilanci 2024. Ricavi = ricavi delle vendite e delle prestazioni; dipendenti = media dell\'esercizio.'
        ),
        table: {
          headers: [t('Limit', 'Limite'), t('Abbreviated (art. 2435-bis)', 'Abbreviato (art. 2435-bis)'), t('Micro (art. 2435-ter)', 'Micro (art. 2435-ter)')],
          rows: [
            [t('Total assets', 'Totale attivo'), '€5,500,000 (was €4.4m)', '€220,000 (was €175k)'],
            [t('Revenue', 'Ricavi'), '€11,000,000 (was €8.8m)', '€440,000 (was €350k)'],
            [t('Average employees', 'Dipendenti medi'), '50', '5']
          ]
        }
      },
      {
        type: 'technical',
        title: t('What the simplified regimes save', 'Cosa si risparmia con i regimi semplificati'),
        body: t(
          '**Abbreviated (art. 2435-bis)**\n- No rendiconto finanziario.\n- Condensed balance sheet (letters and Roman numerals only) and condensed income statement.\n- Reduced nota integrativa.\n- Relazione sulla gestione optional if the nota integrativa gives the information on own shares (art. 2428 nos. 3–4).\n- Option to measure receivables, payables and securities without the amortised cost method.\n\n**Micro (art. 2435-ter)**: all of the above plus, if certain information (guarantees/commitments, loans to directors) is given at the foot of the balance sheet, **no nota integrativa**, and no relazione sulla gestione if the own-shares information is given there too.',
          '**Abbreviato (art. 2435-bis)**\n- Niente rendiconto finanziario.\n- Stato patrimoniale sintetico (solo lettere e numeri romani) e conto economico semplificato.\n- Nota integrativa ridotta.\n- Relazione sulla gestione facoltativa se la nota integrativa riporta le informazioni sulle azioni proprie (art. 2428 nn. 3–4).\n- Facoltà di non applicare il costo ammortizzato a crediti, debiti e titoli.\n\n**Micro (art. 2435-ter)**: tutto quanto sopra e inoltre, se alcune informazioni (impegni e garanzie, compensi e crediti agli amministratori) sono riportate in calce allo stato patrimoniale, **niente nota integrativa**, e niente relazione sulla gestione se in calce figurano anche le informazioni sulle azioni proprie.'
        )
      },
      {
        type: 'realworld',
        body: t(
          'On a buy-side mandate for an Italian family company, the analyst typically receives three years of OIC statutory accounts, often in **abbreviated** form for smaller targets — so no cash flow statement and a thin nota integrativa. The analyst rebuilds a cash flow from balance sheet changes, asks the vendor for management accounts, and flags OIC/IFRS differences (goodwill amortisation, leases) before benchmarking against listed IFRS peers.',
          'In un mandato buy-side su un\'azienda familiare italiana, l\'analyst riceve di solito tre anni di bilanci civilistici OIC, spesso in **forma abbreviata** per i target più piccoli — quindi senza rendiconto finanziario e con una nota integrativa scarna. L\'analyst ricostruisce i flussi di cassa dalle variazioni patrimoniali, chiede al venditore la reportistica gestionale e segnala le differenze OIC/IFRS (ammortamento dell\'avviamento, leasing) prima di confrontare il target con i peers quotati IFRS.'
        )
      },
      { type: 'exercise', questionId: 'acc-itfw-q1' },
      { type: 'exercise', questionId: 'acc-itfw-q2' },
      { type: 'exercise', questionId: 'acc-itfw-q3' },
      {
        type: 'interview',
        question: t('Which accounting standards does an Italian unlisted S.p.A. use, and why does it matter for a valuation?', 'Quali principi contabili usa una S.p.A. italiana non quotata e perché conta per una valutazione?'),
        answer: t(
          'By default the Civil Code, arts. 2423 ff., as interpreted by the OIC standards; it may opt for IFRS under D.Lgs. 38/2005 unless it qualifies for abbreviated statements. It matters because OIC numbers are not directly comparable with listed peers on IFRS: under OIC goodwill is amortised, and finance leases are usually accounted for with the "metodo patrimoniale", so lease payments sit in EBITDA as costs. Before applying peer multiples I would restate EBITDA and net debt on a consistent basis.',
          'Di default il Codice Civile, artt. 2423 ss., interpretato dai principi OIC; può optare per gli IFRS ai sensi del D.Lgs. 38/2005, salvo che possa redigere il bilancio in forma abbreviata. Conta perché i numeri OIC non sono direttamente confrontabili con quelli dei peers quotati IFRS: in OIC l\'avviamento si ammortizza e il leasing finanziario è di norma contabilizzato con il metodo patrimoniale, quindi i canoni riducono l\'EBITDA. Prima di applicare i multipli dei comparables riallineerei EBITDA e posizione finanziaria netta su basi omogenee.'
        )
      },
      {
        type: 'mistakes',
        items: [
          t('Saying the relazione sulla gestione is part of the bilancio. Art. 2423 lists four documents; the management report accompanies them.', 'Dire che la relazione sulla gestione fa parte del bilancio. L\'art. 2423 elenca quattro documenti; la relazione li correda.'),
          t('Applying the thresholds on one year only. You must not exceed two of three limits for two consecutive years (or in the first year).', 'Verificare le soglie su un solo esercizio. Non bisogna superare due limiti su tre per due esercizi consecutivi (o nel primo esercizio).'),
          t('Quoting the pre-2024 limits (€4.4m / €8.8m; €175k / €350k). D.Lgs. 125/2024 raised them.', 'Citare i limiti ante 2024 (€4,4m / €8,8m; €175k / €350k). Il D.Lgs. 125/2024 li ha innalzati.'),
          t('Thinking OIC standards can override the Civil Code. They interpret and integrate the law; only the law itself provides the exceptional override (art. 2423 c.5).', 'Pensare che i principi OIC possano derogare al Codice. Interpretano e integrano la legge; solo la legge prevede la deroga eccezionale (art. 2423 c.5).')
        ]
      },
      {
        type: 'summary',
        items: [
          t('Civil Code (arts. 2423–2435-ter) is the law; OIC standards interpret it.', 'Il Codice Civile (artt. 2423–2435-ter) è la legge; i principi OIC lo interpretano.'),
          t('Bilancio = SP + CE + rendiconto finanziario + nota integrativa; true and fair view, clarity, materiality.', 'Bilancio = SP + CE + rendiconto finanziario + nota integrativa; rappresentazione veritiera e corretta, chiarezza, rilevanza.'),
          t('IFRS: mandatory for listed companies, banks and supervised intermediaries (Reg. 1606/2002, D.Lgs. 38/2005); optional for most others.', 'IFRS: obbligatori per quotate, banche e intermediari vigilati (Reg. 1606/2002, D.Lgs. 38/2005); facoltativi per la maggior parte delle altre.'),
          t('Abbreviated: €5.5m assets / €11m revenue / 50 employees; micro: €220k / €440k / 5 — two of three, two consecutive years.', 'Abbreviato: €5,5m attivo / €11m ricavi / 50 dipendenti; micro: €220k / €440k / 5 — due su tre, per due esercizi consecutivi.')
        ]
      }
    ],
    questions: [
      {
        id: 'acc-itfw-q1',
        kind: 'mcq',
        topic: 'italian-gaap',
        difficulty: 2,
        objective: t('Apply the art. 2435-bis thresholds.', 'Applicare le soglie dell\'art. 2435-bis.'),
        prompt: t(
          'Beta S.r.l. (unlisted) reports, in each of the last two years: total assets €5.2m, revenue €12.0m, 46 average employees. Can it prepare abbreviated financial statements?',
          'Beta S.r.l. (non quotata) presenta, in ciascuno degli ultimi due esercizi: totale attivo €5,2m, ricavi €12,0m, 46 dipendenti medi. Può redigere il bilancio in forma abbreviata?'
        ),
        choices: [
          t('No — revenue exceeds €11m, so it must prepare ordinary statements', 'No — i ricavi superano €11m, quindi deve redigere il bilancio ordinario'),
          t('Yes — it exceeds only one of the three limits (revenue)', 'Sì — supera solo uno dei tre limiti (i ricavi)'),
          t('No — micro-company limits apply to S.r.l.', 'No — alle S.r.l. si applicano i limiti delle micro-imprese'),
          t('Yes — but only if it also adopts IFRS', 'Sì — ma solo se adotta anche gli IFRS')
        ],
        correct: 1,
        explanation: t(
          'The test is "not exceeding two of three limits". Assets €5.2m < €5.5m and 46 < 50 employees; only revenue (€12m > €11m) is exceeded, so the abbreviated form is allowed. Exceeding a single limit is not enough to lose it. Companies eligible for abbreviated statements are actually excluded from the IFRS option.',
          'Il criterio è "non superare due dei tre limiti". Attivo €5,2m < €5,5m e 46 < 50 dipendenti; è superato solo il limite dei ricavi (€12m > €11m), quindi la forma abbreviata è ammessa. Superarne uno solo non basta a perderla. Anzi, chi può redigere l\'abbreviato è escluso dalla facoltà di adottare gli IFRS.'
        )
      },
      {
        id: 'acc-itfw-q2',
        kind: 'multi',
        topic: 'italian-gaap',
        difficulty: 1,
        objective: t('Identify the drafting principles of art. 2423-bis.', 'Riconoscere i principi di redazione dell\'art. 2423-bis.'),
        prompt: t('Which of the following are drafting principles listed in art. 2423-bis c.c.? Select all that apply.', 'Quali dei seguenti sono principi di redazione elencati nell\'art. 2423-bis c.c.? Seleziona tutte le risposte corrette.'),
        choices: [
          t('Prudence', 'Prudenza'),
          t('Fair value as the default measurement basis', 'Fair value come criterio di valutazione generale'),
          t('Going concern', 'Prospettiva della continuità aziendale'),
          t('Substance of the transaction or contract', 'Sostanza dell\'operazione o del contratto'),
          t('Consistency of measurement criteria', 'Costanza dei criteri di valutazione')
        ],
        correct: [0, 2, 3, 4],
        explanation: t(
          'Art. 2423-bis lists prudence, going concern, substance, accruals, separate measurement and consistency. Fair value is not a general principle under the Civil Code: the default basis is historical cost (art. 2426), with fair value required for specific items such as derivatives.',
          'L\'art. 2423-bis elenca prudenza, continuità aziendale, sostanza, competenza, valutazione separata e costanza dei criteri. Il fair value non è un principio generale del Codice: il criterio base è il costo storico (art. 2426), con il fair value obbligatorio per voci specifiche come gli strumenti derivati.'
        )
      },
      {
        id: 'acc-itfw-q3',
        kind: 'mcq',
        topic: 'italian-gaap',
        difficulty: 2,
        objective: t('Know who must apply IFRS in Italy.', 'Sapere chi deve applicare gli IFRS in Italia.'),
        prompt: t('Which entity is required by law to prepare its separate (individual) financial statements under IFRS?', 'Quale soggetto è obbligato per legge a redigere il bilancio d\'esercizio secondo gli IFRS?'),
        choices: [
          t('A private-equity-owned S.p.A. with €300m revenue', 'Una S.p.A. partecipata da un fondo di private equity con €300m di ricavi'),
          t('An unlisted S.r.l. that prepares a consolidated account', 'Una S.r.l. non quotata che redige il consolidato'),
          t('An Italian bank', 'Una banca italiana'),
          t('Any company with more than 250 employees', 'Qualsiasi società con più di 250 dipendenti')
        ],
        correct: 2,
        explanation: t(
          'D.Lgs. 38/2005 makes IFRS mandatory for the separate and consolidated statements of listed companies, banks and supervised financial intermediaries. Size alone never triggers IFRS: large unlisted companies, PE-owned or not, may opt in but are not obliged.',
          'Il D.Lgs. 38/2005 rende obbligatori gli IFRS nel bilancio d\'esercizio e consolidato di società quotate, banche e intermediari finanziari vigilati. La dimensione da sola non fa scattare gli IFRS: le grandi non quotate, partecipate o meno da fondi, possono optare ma non sono obbligate.'
        )
      },
      {
        id: 'acc-itfw-q4',
        kind: 'mcq',
        topic: 'italian-gaap',
        difficulty: 1,
        objective: t('Know what abbreviated statements omit.', 'Sapere cosa si omette nel bilancio abbreviato.'),
        prompt: t('Which document is NOT required in abbreviated financial statements (art. 2435-bis)?', 'Quale documento NON è richiesto nel bilancio in forma abbreviata (art. 2435-bis)?'),
        choices: [
          t('Stato patrimoniale', 'Stato patrimoniale'),
          t('Rendiconto finanziario', 'Rendiconto finanziario'),
          t('Conto economico', 'Conto economico'),
          t('Nota integrativa', 'Nota integrativa')
        ],
        correct: 1,
        explanation: t(
          'Abbreviated preparers are exempt from the cash flow statement. They still prepare a condensed balance sheet, income statement and a reduced nota integrativa. Only micro-companies may skip the nota integrativa (if specific information is given at the foot of the balance sheet).',
          'Chi redige l\'abbreviato è esonerato dal rendiconto finanziario. Restano lo stato patrimoniale e il conto economico semplificati e una nota integrativa ridotta. Solo le micro-imprese possono omettere la nota integrativa (se riportano determinate informazioni in calce allo stato patrimoniale).'
        )
      }
    ],
    flashcards: [
      { id: 'fc-acc-itfw-1', topic: 'italian-gaap', front: t('Four documents of the bilancio d\'esercizio (art. 2423)?', 'I quattro documenti del bilancio d\'esercizio (art. 2423)?'), back: t('Stato patrimoniale (balance sheet), conto economico (income statement), rendiconto finanziario (cash flow statement), nota integrativa (notes).', 'Stato patrimoniale, conto economico, rendiconto finanziario e nota integrativa (la relazione sulla gestione lo correda ma non ne fa parte).') },
      { id: 'fc-acc-itfw-2', topic: 'italian-gaap', front: t('Art. 2435-bis limits (abbreviated) after D.Lgs. 125/2024?', 'Limiti art. 2435-bis (abbreviato) dopo il D.Lgs. 125/2024?'), back: t('Total assets €5.5m, revenue €11m, 50 average employees — do not exceed two of three for two consecutive years.', 'Attivo €5,5m, ricavi €11m, 50 dipendenti medi — non superarne due su tre per due esercizi consecutivi.') },
      { id: 'fc-acc-itfw-3', topic: 'italian-gaap', front: t('Art. 2435-ter limits (micro) after D.Lgs. 125/2024?', 'Limiti art. 2435-ter (micro) dopo il D.Lgs. 125/2024?'), back: t('Total assets €220k, revenue €440k, 5 average employees.', 'Attivo €220k, ricavi €440k, 5 dipendenti medi.') },
      { id: 'fc-acc-itfw-4', topic: 'italian-gaap', front: t('Which EU regulation requires IFRS in listed companies\' consolidated accounts?', 'Quale regolamento UE impone gli IFRS nel consolidato delle società quotate?'), back: t('Reg. (EC) 1606/2002 (IAS Regulation); Italy extended it with D.Lgs. 38/2005.', 'Reg. (CE) 1606/2002 (Regolamento IAS); l\'Italia lo ha esteso con il D.Lgs. 38/2005.') },
      { id: 'fc-acc-itfw-5', topic: 'italian-gaap', front: t('Six principles of art. 2423-bis?', 'I sei principi dell\'art. 2423-bis?'), back: t('Prudence, going concern, substance, accruals, separate measurement, consistency.', 'Prudenza, continuità aziendale, sostanza, competenza, valutazione separata, costanza dei criteri.') }
    ],
    sources: [
      { label: 'Codice Civile, artt. 2423–2435-ter (Normattiva)', url: 'https://www.normattiva.it/' },
      { label: 'D.Lgs. 125/2024 (Directive (EU) 2023/2775 thresholds) — new art. 2435-bis/2435-ter limits', url: 'https://www.gazzettaufficiale.it/' },
      { label: 'Regulation (EC) No 1606/2002 (IAS Regulation)', url: 'https://eur-lex.europa.eu/eli/reg/2002/1606/oj' },
      { label: 'Fondazione OIC — Principi contabili nazionali', url: 'https://www.fondazioneoic.eu/' }
    ]
  },
  /* ------------------------------------------------------------ */
  {
    id: 'acc-italian-formats',
    academyId: 'accounting',
    moduleId: 'A3',
    mode: 'deep',
    minutes: 14,
    difficulty: 2,
    reviewed: '2026-10',
    objective: t(
      'Read the mandatory Italian formats (arts. 2424, 2425, 2425-ter c.c.), compute the A−B difference and EBITDA from an Italian conto economico, and map Italian captions to English/IFRS terms.',
      'Leggere gli schemi obbligatori (artt. 2424, 2425, 2425-ter c.c.), calcolare la differenza A−B e l\'EBITDA da un conto economico civilistico e collegare le voci italiane ai termini inglesi/IFRS.'
    ),
    screens: [
      {
        type: 'intuition',
        title: t('Rigid formats are a gift', 'Schemi rigidi: un vantaggio'),
        body: t(
          'IFRS lets each company design its own primary statements. The Italian Civil Code does the opposite: it prescribes **mandatory formats** with fixed letters and numbers. Every OIC company shows "B.7) per servizi" in the same place.\n\nFor an analyst this is a gift: once you know the template, you can read any Italian bilancio in minutes, and spread dozens of private companies (e.g. from the Chamber of Commerce filings) into the same model.',
          'Gli IFRS lasciano a ogni società la libertà di disegnare i propri prospetti. Il Codice Civile fa l\'opposto: impone **schemi obbligatori** con lettere e numeri fissi. Ogni società OIC espone "B.7) per servizi" nello stesso punto.\n\nPer un analyst è un vantaggio: conosciuto lo schema, si legge qualunque bilancio italiano in pochi minuti e si possono inserire decine di società private (ad es. dai bilanci depositati in Camera di Commercio) nello stesso modello.'
        )
      },
      {
        type: 'technical',
        title: t('Stato patrimoniale (art. 2424)', 'Lo stato patrimoniale (art. 2424)'),
        body: t(
          '**Assets (Attivo) A–D**\n- A) Receivables from shareholders for capital not yet paid in\n- B) Fixed assets: I intangible, II tangible, III financial\n- C) Current assets: I inventories, II receivables, III financial assets not held as fixed assets, IV cash\n- D) Accrued income and prepaid expenses (ratei e risconti attivi)\n\n**Liabilities & equity (Passivo) A–E**\n- A) Equity (patrimonio netto, items I–X)\n- B) Provisions for risks and charges\n- C) TFR — employee severance indemnity\n- D) Payables (bonds, banks, suppliers, tax, social security…)\n- E) Accrued liabilities and deferred income\n\nThe layout is by **nature and destination**, not current/non-current: receivables and payables show separately the amounts due **beyond 12 months**.',
          '**Attivo A–D**\n- A) Crediti verso soci per versamenti ancora dovuti\n- B) Immobilizzazioni: I immateriali, II materiali, III finanziarie\n- C) Attivo circolante: I rimanenze, II crediti, III attività finanziarie che non costituiscono immobilizzazioni, IV disponibilità liquide\n- D) Ratei e risconti attivi\n\n**Passivo A–E**\n- A) Patrimonio netto (voci I–X)\n- B) Fondi per rischi e oneri\n- C) Trattamento di fine rapporto di lavoro subordinato (TFR)\n- D) Debiti (obbligazioni, verso banche, verso fornitori, tributari, previdenziali…)\n- E) Ratei e risconti passivi\n\nLo schema segue la **natura e destinazione**, non la distinzione corrente/non corrente: crediti e debiti indicano separatamente gli importi esigibili **oltre l\'esercizio successivo**.'
        )
      },
      {
        type: 'technical',
        title: t('Conto economico (art. 2425)', 'Il conto economico (art. 2425)'),
        body: t(
          'A vertical, **by-nature** format:\n- **A) Value of production**: 1 revenue; 2 change in work-in-progress, semi-finished and finished goods; 3 change in contract work in progress; 4 own work capitalised; 5 other revenue and income\n- **B) Costs of production**: 6 raw materials and goods; 7 services; 8 use of third-party assets (rents, lease instalments); 9 personnel; 10 D&A and write-downs; 11 change in raw materials inventory; 12 risk provisions; 13 other provisions; 14 sundry operating expenses\n- **Difference A − B**\n- **C) Financial income and charges** (15–17-bis, incl. FX)\n- **D) Value adjustments to financial assets and liabilities** (18 revaluations, 19 write-downs)\n- Profit before tax → 20 income taxes (current, deferred, prepaid) → **21 profit (loss) for the year**\n\nSection **E) extraordinary items** was abolished by D.Lgs. 139/2015 (from FY2016): unusual items now sit in A5 or B14 and are disclosed in the nota integrativa.',
          'Uno schema scalare **per natura**:\n- **A) Valore della produzione**: 1 ricavi delle vendite e delle prestazioni; 2 variazioni delle rimanenze di prodotti in corso, semilavorati e finiti; 3 variazioni dei lavori in corso su ordinazione; 4 incrementi di immobilizzazioni per lavori interni; 5 altri ricavi e proventi\n- **B) Costi della produzione**: 6 materie prime e merci; 7 servizi; 8 godimento di beni di terzi (affitti, canoni di leasing); 9 personale; 10 ammortamenti e svalutazioni; 11 variazioni delle rimanenze di materie prime; 12 accantonamenti per rischi; 13 altri accantonamenti; 14 oneri diversi di gestione\n- **Differenza A − B**\n- **C) Proventi e oneri finanziari** (15–17-bis, inclusi utili e perdite su cambi)\n- **D) Rettifiche di valore di attività e passività finanziarie** (18 rivalutazioni, 19 svalutazioni)\n- Risultato prima delle imposte → 20 imposte sul reddito (correnti, differite e anticipate) → **21 utile (perdita) dell\'esercizio**\n\nLa sezione **E) proventi e oneri straordinari** è stata abrogata dal D.Lgs. 139/2015 (dal 2016): le componenti eccezionali confluiscono in A5 o B14 e sono illustrate in nota integrativa.'
        )
      },
      {
        type: 'formula',
        formulas: [
          {
            name: t('Operating result (Italian format)', 'Risultato operativo (schema civilistico)'),
            expr: 'Differenza A − B = Valore della produzione − Costi della produzione',
            vars: [
              { sym: 'A', desc: t('Value of production (A1–A5)', 'Valore della produzione (A1–A5)') },
              { sym: 'B', desc: t('Costs of production (B6–B14)', 'Costi della produzione (B6–B14)') }
            ]
          },
          {
            name: t('EBITDA from the Italian income statement (common analyst convention)', 'EBITDA dal conto economico civilistico (convenzione diffusa tra analisti)'),
            expr: 'EBITDA = (A − B) + B10 ammortamenti e svalutazioni + B12 + B13 accantonamenti'
          }
        ],
        note: t(
          'A − B is close to, but not identical with, EBIT: it may include non-recurring items in A5/B14 that you normalise. Under OIC, lease instalments in B8 stay inside EBITDA — unlike IFRS 16.',
          'A − B è vicino all\'EBIT ma non coincide: può includere componenti non ricorrenti in A5/B14 da normalizzare. In OIC i canoni di leasing in B8 restano dentro l\'EBITDA — a differenza dell\'IFRS 16.'
        )
      },
      {
        type: 'example',
        title: t('Gamma S.p.A. — from A to net profit (€k)', 'Gamma S.p.A. — da A all\'utile netto (€k)'),
        body: t('A hypothetical OIC income statement and the analyst\'s EBITDA.', 'Un conto economico OIC ipotetico e l\'EBITDA calcolato dall\'analyst.'),
        table: {
          headers: [t('Caption', 'Voce'), t('€k', '€k')],
          rows: [
            [t('A1 Revenue', 'A1 Ricavi delle vendite e delle prestazioni'), '10,000'],
            [t('A2 Change in finished goods', 'A2 Variazione rimanenze prodotti finiti'), '200'],
            [t('A4 + A5 Own work capitalised, other income', 'A4 + A5 Incrementi per lavori interni, altri ricavi'), '250'],
            [t('A) Value of production', 'A) Valore della produzione'), '10,450'],
            [t('B6–B9 Materials, services, rents/leases, personnel', 'B6–B9 Materie, servizi, godimento beni di terzi, personale'), '(8,700)'],
            [t('B10 D&A and write-downs', 'B10 Ammortamenti e svalutazioni'), '(600)'],
            [t('B11, B12, B14 Inventory change, risk provision, sundry', 'B11, B12, B14 Var. rimanenze materie, accantonamento rischi, oneri diversi'), '(250)'],
            [t('Difference A − B', 'Differenza A − B'), '900'],
            [t('C) Financial income/(charges)', 'C) Proventi/(oneri) finanziari'), '(220)'],
            [t('D) Value adjustments', 'D) Rettifiche di valore'), '(40)'],
            [t('Profit before tax', 'Risultato prima delle imposte'), '640'],
            [t('20 Income taxes', '20 Imposte sul reddito'), '(180)'],
            [t('21 Profit for the year', '21 Utile dell\'esercizio'), '460']
          ],
          totalRows: [3, 7, 10, 12]
        }
      },
      {
        type: 'example',
        title: t('EBITDA bridge for Gamma', 'Il ponte verso l\'EBITDA di Gamma'),
        body: t(
          'B12 risk provision within the €250k line = €80k.\n\n**EBITDA = 900 + 600 (B10) + 80 (B12) = €1,580k** → margin 15.8% on revenue.\n\nThe B8 line includes €400k of finance lease instalments. On an IFRS 16 basis EBITDA would be roughly €400k higher, and the lease liability would be added to net debt — keep both sides consistent.',
          'L\'accantonamento rischi B12 incluso nei €250k = €80k.\n\n**EBITDA = 900 + 600 (B10) + 80 (B12) = €1.580k** → margine del 15,8% sui ricavi.\n\nLa voce B8 include €400k di canoni di leasing finanziario. Su base IFRS 16 l\'EBITDA sarebbe più alto di circa €400k e il debito per leasing andrebbe aggiunto alla PFN — occorre coerenza su entrambi i lati.'
        )
      },
      {
        type: 'technical',
        title: t('Rendiconto finanziario (art. 2425-ter, OIC 10)', 'Il rendiconto finanziario (art. 2425-ter, OIC 10)'),
        body: t(
          'Required since FY2016 (except abbreviated and micro). It shows cash flows from **operating**, **investing** and **financing** activities, including shareholder transactions.\n\n- **Indirect method** (most common): starts from profit for the year, adds back taxes, interest, dividends and gains/losses on disposals, then non-cash items (provisions, D&A) and working-capital changes; interest and taxes actually paid are shown inside operating cash flow.\n- Per OIC 10, interest paid and received is normally **operating**, unless directly related to investing or financing; dividends paid are **financing**.\n\n**Nota integrativa (art. 2427)**: measurement criteria, movements in fixed assets, receivables/payables over 5 years, commitments, related parties, off-balance-sheet arrangements, finance lease effects (no. 22), post-balance-sheet events.\n\n**Relazione sulla gestione (art. 2428)**: business review, main risks and uncertainties, financial and non-financial KPIs, R&D, own shares, outlook.',
          'Obbligatorio dal 2016 (salvo abbreviato e micro). Espone i flussi dell\'attività **operativa**, di **investimento** e di **finanziamento**, comprese le operazioni con i soci.\n\n- **Metodo indiretto** (il più diffuso): parte dall\'utile dell\'esercizio, ripristina imposte, interessi, dividendi e plus/minusvalenze, poi le poste non monetarie (accantonamenti, ammortamenti) e le variazioni del circolante; interessi e imposte effettivamente pagati sono esposti nel flusso operativo.\n- Secondo l\'OIC 10 gli interessi pagati e incassati sono di norma **operativi**, salvo che si riferiscano direttamente a investimenti o finanziamenti; i dividendi pagati sono nell\'attività di **finanziamento**.\n\n**Nota integrativa (art. 2427)**: criteri di valutazione, movimenti delle immobilizzazioni, crediti/debiti oltre 5 anni, impegni, parti correlate, accordi fuori bilancio, effetti del leasing finanziario (n. 22), fatti successivi alla chiusura.\n\n**Relazione sulla gestione (art. 2428)**: andamento della gestione, principali rischi e incertezze, indicatori finanziari e non finanziari, R&S, azioni proprie, evoluzione prevedibile.'
        )
      },
      {
        type: 'technical',
        title: t('Terminology map: Italian → English / IFRS', 'Glossario: italiano → inglese / IFRS'),
        body: t('The terms you will see in every Italian CIM, data room and model.', 'I termini che troverai in ogni CIM, data room e modello italiano.'),
        table: {
          headers: [t('Italian', 'Italiano'), t('English / IFRS equivalent', 'Equivalente inglese / IFRS')],
          rows: [
            ['Stato patrimoniale', 'Balance sheet / statement of financial position'],
            ['Conto economico', 'Income statement / statement of profit or loss'],
            ['Nota integrativa', t('Notes to the financial statements', 'Notes to the financial statements')],
            ['Relazione sulla gestione', t('Management report (directors\' report)', 'Management report (directors\' report)')],
            ['Immobilizzazioni immateriali / materiali / finanziarie', 'Intangible assets / PP&E / non-current financial assets'],
            ['Rimanenze; crediti verso clienti; disponibilità liquide', 'Inventories; trade receivables; cash and cash equivalents'],
            ['Ratei e risconti', 'Accruals and deferrals (accrued income, prepaid expenses, deferred income)'],
            ['Fondi per rischi e oneri', t('Provisions (IAS 37)', 'Provisions (IAS 37)')],
            ['TFR', 'Employee severance indemnity — post-employment benefit (IAS 19)'],
            ['Valore / costi della produzione', 'Value of production / operating costs by nature'],
            ['Differenza A − B', t('≈ EBIT / operating profit', '≈ EBIT / operating profit')],
            ['Avviamento', t('Goodwill', 'Goodwill')],
            ['Posizione finanziaria netta (PFN)', t('Net financial position ≈ net debt', 'Net financial position ≈ net debt')],
            ['Capitale circolante netto (CCN)', t('Net working capital', 'Net working capital')]
          ]
        }
      },
      {
        type: 'realworld',
        body: t(
          'Italian bankers rarely use the statutory format as is. They build a **riclassificato**: the balance sheet becomes capitale investito netto (fixed assets + CCN − TFR and provisions) funded by patrimonio netto + **PFN**; the income statement becomes ricavi → EBITDA → EBIT → EBT → utile. Watch the classic traps: TFR (debt-like item in many deals), shareholder loans in D.3 "debiti verso soci per finanziamenti", and leasing kept off balance sheet.',
          'I banker italiani raramente usano lo schema civilistico così com\'è. Costruiscono un **riclassificato**: lo stato patrimoniale diventa capitale investito netto (immobilizzazioni + CCN − TFR e fondi) finanziato da patrimonio netto + **PFN**; il conto economico diventa ricavi → EBITDA → EBIT → EBT → utile. Attenzione alle trappole classiche: il TFR (debt-like item in molti deal), i finanziamenti soci in D.3 "debiti verso soci per finanziamenti" e il leasing fuori bilancio.'
        )
      },
      { type: 'exercise', questionId: 'acc-itfmt-q1' },
      { type: 'exercise', questionId: 'acc-itfmt-q2' },
      { type: 'exercise', questionId: 'acc-itfmt-q3' },
      {
        type: 'interview',
        question: t('You receive an Italian bilancio civilistico. How do you get to EBITDA?', 'Ricevi un bilancio civilistico italiano. Come arrivi all\'EBITDA?'),
        answer: t(
          'I start from the difference between value and costs of production, A minus B, which is the statutory operating result. I add back B10, depreciation, amortisation and write-downs, and the provisions in B12 and B13, which are non-cash. Then I normalise: I strip one-off items buried in A5 "altri ricavi" or B14 "oneri diversi", and I check whether own work capitalised in A4 is inflating EBITDA. Finally I note that lease instalments sit in B8, so the figure is pre-IFRS 16 and I treat net debt consistently.',
          'Parto dalla differenza tra valore e costi della produzione, A meno B, che è il risultato operativo civilistico. Aggiungo B10, ammortamenti e svalutazioni, e gli accantonamenti in B12 e B13, che non sono monetari. Poi normalizzo: elimino le componenti non ricorrenti in A5 "altri ricavi" o in B14 "oneri diversi" e verifico se gli incrementi per lavori interni in A4 gonfiano l\'EBITDA. Infine ricordo che i canoni di leasing sono in B8: è un EBITDA pre-IFRS 16 e tratto la PFN in modo coerente.'
        )
      },
      {
        type: 'mistakes',
        items: [
          t('Looking for section E (extraordinary items) in a post-2016 conto economico. It no longer exists.', 'Cercare la sezione E (straordinari) in un conto economico post-2016. Non esiste più.'),
          t('Reading the Italian balance sheet as current/non-current. It is by nature; use the "oltre l\'esercizio successivo" split to find long-term items.', 'Leggere lo stato patrimoniale italiano come corrente/non corrente. È per natura; usa la separata indicazione degli importi "oltre l\'esercizio successivo".'),
          t('Taking A − B as EBITDA. A − B is after D&A (B10): it is an EBIT-like measure.', 'Considerare A − B come EBITDA. A − B è dopo gli ammortamenti (B10): è una misura simile all\'EBIT.'),
          t('Forgetting B11 sign: a decrease in raw materials inventory increases costs.', 'Dimenticare il segno di B11: una diminuzione delle rimanenze di materie prime aumenta i costi.')
        ]
      },
      {
        type: 'summary',
        items: [
          t('Art. 2424: Attivo A–D, Passivo A–E; by nature, with amounts due beyond 12 months shown separately.', 'Art. 2424: Attivo A–D, Passivo A–E; per natura, con separata indicazione degli importi oltre 12 mesi.'),
          t('Art. 2425: A value of production − B costs of production = A − B; then C financial, D value adjustments, taxes, profit. No section E since 2016.', 'Art. 2425: A valore della produzione − B costi della produzione = A − B; poi C finanziari, D rettifiche, imposte, utile. Niente sezione E dal 2016.'),
          t('EBITDA ≈ (A − B) + B10 + B12 + B13, then normalise.', 'EBITDA ≈ (A − B) + B10 + B12 + B13, poi normalizzare.'),
          t('Cash flow statement: art. 2425-ter and OIC 10; notes: art. 2427; management report: art. 2428.', 'Rendiconto finanziario: art. 2425-ter e OIC 10; nota integrativa: art. 2427; relazione sulla gestione: art. 2428.')
        ]
      }
    ],
    questions: [
      {
        id: 'acc-itfmt-q1',
        kind: 'grid',
        topic: 'italian-gaap',
        difficulty: 2,
        objective: t('Compute A − B, EBITDA and profit before tax from an Italian conto economico.', 'Calcolare A − B, EBITDA e risultato prima delle imposte da un conto economico civilistico.'),
        prompt: t(
          'Delta S.r.l. (€k): A1 5,000; A2 +100; A5 50. B6 2,000; B7 1,200; B8 300; B9 900; B10 250; B14 100. C) −80; D) 0. Fill in the blanks (EBITDA = A − B + B10; no B12/B13).',
          'Delta S.r.l. (€k): A1 5.000; A2 +100; A5 50. B6 2.000; B7 1.200; B8 300; B9 900; B10 250; B14 100. C) −80; D) 0. Completa le celle (EBITDA = A − B + B10; niente B12/B13).'
        ),
        columns: [t('Line', 'Voce'), t('€k', '€k')],
        unit: '€k',
        rows: [
          { label: t('A) Value of production', 'A) Valore della produzione'), cells: [{ answer: 5150, verify: { fn: 'sum', args: [5000, 100, 50] } }] },
          { label: t('B) Costs of production', 'B) Costi della produzione'), cells: [{ answer: 4750, verify: { fn: 'sum', args: [2000, 1200, 300, 900, 250, 100] } }] },
          { label: t('Difference A − B', 'Differenza A − B'), cells: [{ answer: 400, verify: { fn: 'diff', args: [5150, 4750] } }] },
          { label: t('EBITDA', 'EBITDA'), cells: [{ answer: 650, verify: { fn: 'sum', args: [400, 250] } }] },
          { label: t('Profit before tax', 'Risultato prima delle imposte'), cells: [{ answer: 320, verify: { fn: 'sum', args: [400, -80, 0] } }] }
        ],
        explanation: t(
          'A = 5,000 + 100 + 50 = 5,150. B = 2,000 + 1,200 + 300 + 900 + 250 + 100 = 4,750. A − B = 400. EBITDA adds back B10: 400 + 250 = 650 (B8 lease/rent costs stay inside EBITDA under OIC). PBT = 400 − 80 = 320.',
          'A = 5.000 + 100 + 50 = 5.150. B = 2.000 + 1.200 + 300 + 900 + 250 + 100 = 4.750. A − B = 400. L\'EBITDA riaggiunge B10: 400 + 250 = 650 (i canoni in B8 restano nell\'EBITDA in OIC). Risultato ante imposte = 400 − 80 = 320.'
        )
      },
      {
        id: 'acc-itfmt-q2',
        kind: 'mcq',
        topic: 'italian-gaap',
        difficulty: 1,
        objective: t('Locate items in the art. 2424 balance sheet.', 'Collocare le voci nello stato patrimoniale ex art. 2424.'),
        prompt: t('Where does the employee severance indemnity (TFR) appear in the Italian balance sheet?', 'Dove si colloca il trattamento di fine rapporto (TFR) nello stato patrimoniale civilistico?'),
        choices: [
          t('Passivo B) Provisions for risks and charges', 'Passivo B) Fondi per rischi e oneri'),
          t('Passivo D) Payables — to social security institutions', 'Passivo D) Debiti verso istituti di previdenza'),
          t('Passivo C) — its own section', 'Passivo C) — una sezione autonoma'),
          t('Inside equity reserves', 'Tra le riserve di patrimonio netto')
        ],
        correct: 2,
        explanation: t(
          'TFR has its own letter, Passivo C) "Trattamento di fine rapporto di lavoro subordinato". It is not a generic risk provision (B) nor a payable to social security bodies (D.13), and it is clearly not equity. In deals it is usually treated as a debt-like item.',
          'Il TFR ha una lettera propria, Passivo C) "Trattamento di fine rapporto di lavoro subordinato". Non è un fondo rischi generico (B) né un debito verso istituti previdenziali (D.13), e ovviamente non è patrimonio netto. Nei deal è di solito trattato come debt-like item.'
        )
      },
      {
        id: 'acc-itfmt-q3',
        kind: 'mcq',
        topic: 'italian-gaap',
        difficulty: 2,
        objective: t('Interpret B8 and its effect on EBITDA comparability.', 'Interpretare la voce B8 e il suo effetto sulla comparabilità dell\'EBITDA.'),
        prompt: t(
          'An OIC company pays €2m a year of finance lease instalments (metodo patrimoniale). You compare its EBITDA multiple with IFRS peers. What should you do?',
          'Una società OIC paga €2m l\'anno di canoni di leasing finanziario (metodo patrimoniale). Confronti il suo multiplo EV/EBITDA con peers IFRS. Cosa fai?'
        ),
        choices: [
          t('Nothing: lease instalments are already excluded from OIC EBITDA', 'Nulla: i canoni sono già esclusi dall\'EBITDA OIC'),
          t('Add back the €2m to EBITDA and add the lease liability (from nota integrativa, art. 2427 n. 22) to net debt', 'Aggiungere i €2m all\'EBITDA e includere il debito residuo per leasing (dalla nota integrativa, art. 2427 n. 22) nella PFN'),
          t('Add back the €2m to EBITDA only', 'Aggiungere solo i €2m all\'EBITDA'),
          t('Deduct the €2m from EBITDA', 'Sottrarre i €2m dall\'EBITDA')
        ],
        correct: 1,
        explanation: t(
          'Under the metodo patrimoniale instalments are costs in B8, inside EBITDA. IFRS 16 peers show higher EBITDA and higher net debt. To compare, add back the instalments and add the lease debt to net debt. Adjusting only EBITDA overstates enterprise value.',
          'Con il metodo patrimoniale i canoni sono costi in B8, dentro l\'EBITDA. I peers IFRS 16 hanno EBITDA e debito più alti. Per confrontare si riaggiungono i canoni e si somma il debito per leasing alla PFN. Rettificare solo l\'EBITDA sovrastima l\'enterprise value.'
        )
      },
      {
        id: 'acc-itfmt-q4',
        kind: 'order',
        topic: 'italian-gaap',
        difficulty: 1,
        objective: t('Recall the sequence of the art. 2425 income statement.', 'Ricordare la sequenza del conto economico ex art. 2425.'),
        prompt: t('Put the sections of the Italian income statement in order.', 'Metti in ordine le sezioni del conto economico civilistico.'),
        items: [
          t('A) Value of production', 'A) Valore della produzione'),
          t('B) Costs of production', 'B) Costi della produzione'),
          t('C) Financial income and charges', 'C) Proventi e oneri finanziari'),
          t('D) Value adjustments to financial assets and liabilities', 'D) Rettifiche di valore di attività e passività finanziarie'),
          t('20) Income taxes', '20) Imposte sul reddito dell\'esercizio'),
          t('21) Profit (loss) for the year', '21) Utile (perdita) dell\'esercizio')
        ],
        explanation: t('A, B (giving A − B), C, D, profit before tax, taxes (20), result (21). Section E was abolished from FY2016.', 'A, B (da cui A − B), C, D, risultato prima delle imposte, imposte (20), risultato (21). La sezione E è abrogata dal 2016.')
      }
    ],
    flashcards: [
      { id: 'fc-acc-itfmt-1', topic: 'italian-gaap', front: t('Sections of Passivo in art. 2424?', 'Sezioni del Passivo nell\'art. 2424?'), back: t('A equity, B provisions for risks and charges, C TFR, D payables, E accruals/deferred income.', 'A patrimonio netto, B fondi per rischi e oneri, C TFR, D debiti, E ratei e risconti passivi.') },
      { id: 'fc-acc-itfmt-2', topic: 'italian-gaap', front: t('What does "Differenza A − B" represent?', 'Cosa rappresenta la "Differenza A − B"?'), back: t('Value of production minus costs of production — the statutory operating result (≈ EBIT, after D&A).', 'Valore meno costi della produzione — il risultato operativo civilistico (≈ EBIT, dopo gli ammortamenti).') },
      { id: 'fc-acc-itfmt-3', topic: 'italian-gaap', front: t('Quick EBITDA from an OIC income statement?', 'EBITDA rapido da un conto economico OIC?'), back: t('(A − B) + B10 D&A/write-downs + B12/B13 provisions, then normalise one-offs.', '(A − B) + B10 ammortamenti/svalutazioni + B12/B13 accantonamenti, poi normalizzare.') },
      { id: 'fc-acc-itfmt-4', topic: 'italian-gaap', front: t('Which article requires the rendiconto finanziario and which OIC governs it?', 'Quale articolo impone il rendiconto finanziario e quale OIC lo disciplina?'), back: t('Art. 2425-ter c.c.; OIC 10.', 'Art. 2425-ter c.c.; OIC 10.') },
      { id: 'fc-acc-itfmt-5', topic: 'italian-gaap', front: t('Where are lease instalments under the OIC metodo patrimoniale?', 'Dove sono i canoni di leasing con il metodo patrimoniale OIC?'), back: t('B8 "per godimento di beni di terzi" — inside EBITDA.', 'B8 "per godimento di beni di terzi" — dentro l\'EBITDA.') }
    ],
    sources: [
      { label: 'Codice Civile, artt. 2424, 2425, 2425-ter, 2427, 2428 (Normattiva)', url: 'https://www.normattiva.it/' },
      { label: 'D.Lgs. 139/2015 — implementation of Directive 2013/34/EU (abolition of extraordinary items, cash flow statement)', url: 'https://www.gazzettaufficiale.it/' },
      { label: 'OIC 10 — Rendiconto finanziario; OIC 12 — Composizione e schemi del bilancio d\'esercizio', url: 'https://www.fondazioneoic.eu/' }
    ]
  },
  /* ------------------------------------------------------------ */
  {
    id: 'acc-italian-participations',
    academyId: 'accounting',
    moduleId: 'A3',
    mode: 'quick',
    minutes: 8,
    difficulty: 2,
    reviewed: '2026-10',
    objective: t(
      'Account for participations in OIC separate financial statements (cost vs equity method, OIC 21) and determine when an Italian parent must prepare consolidated accounts (D.Lgs. 127/1991, OIC 17).',
      'Contabilizzare le partecipazioni nel bilancio d\'esercizio OIC (costo vs patrimonio netto, OIC 21) e stabilire quando una capogruppo italiana deve redigere il consolidato (D.Lgs. 127/1991, OIC 17).'
    ),
    screens: [
      {
        type: 'intuition',
        title: t('Holding company accounts hide the group', 'Il bilancio della holding nasconde il gruppo'),
        body: t(
          'Italian groups are often a holding S.p.A. owning several operating companies. In the holding\'s **separate** accounts, a subsidiary worth €100m may appear as a single line "partecipazioni in imprese controllate" at its historical cost of €10m — and its profits show up only when dividends are paid.\n\nThat is why the **consolidated** statements matter: they replace the single line with the subsidiaries\' assets, liabilities, revenue and costs.',
          'I gruppi italiani sono spesso una holding S.p.A. che detiene più società operative. Nel bilancio **d\'esercizio** della holding, una controllata che vale €100m può comparire come un\'unica voce "partecipazioni in imprese controllate" al costo storico di €10m — e i suoi utili emergono solo quando distribuisce dividendi.\n\nPer questo conta il bilancio **consolidato**: sostituisce la singola voce con attività, passività, ricavi e costi delle controllate.'
        )
      },
      {
        type: 'technical',
        title: t('OIC 21 in the separate statements', 'OIC 21 nel bilancio d\'esercizio'),
        body: t(
          '**Classification**: participations held as a durable investment go in **B.III immobilizzazioni finanziarie**; otherwise in **C.III attivo circolante**.\n\n**Fixed-asset participations — cost method** (default)\n- Measured at purchase cost including directly attributable costs.\n- Written down for a **permanent loss in value** (perdita durevole di valore); the write-down is reversed, up to original cost, if its reasons cease.\n- Dividends are income (C.15 proventi da partecipazioni) when the right to receive them arises.\n\n**Equity method option** (art. 2426 n. 4) for subsidiaries and associates: the carrying amount follows the investor\'s share of the investee\'s equity; mechanics follow OIC 17. Increases versus the prior-year carrying amount must be allocated to a **non-distributable reserve**.\n\n**Current-asset participations**: lower of cost and realisable value based on market trends.',
          '**Classificazione**: le partecipazioni destinate a permanere durevolmente vanno in **B.III immobilizzazioni finanziarie**; le altre in **C.III attivo circolante**.\n\n**Partecipazioni immobilizzate — metodo del costo** (criterio base)\n- Iscritte al costo di acquisto, comprensivo degli oneri accessori.\n- Svalutate in caso di **perdita durevole di valore**; la svalutazione si ripristina, fino al costo originario, se ne vengono meno i motivi.\n- I dividendi sono proventi (C.15 proventi da partecipazioni) quando sorge il diritto alla riscossione.\n\n**Facoltà del metodo del patrimonio netto** (art. 2426 n. 4) per controllate e collegate: il valore segue la quota di patrimonio netto della partecipata; la tecnica è quella dell\'OIC 17. Le plusvalenze rispetto al valore dell\'esercizio precedente vanno iscritte in una **riserva non distribuibile**.\n\n**Partecipazioni nel circolante**: minore tra costo e valore di realizzazione desumibile dall\'andamento del mercato.'
        )
      },
      {
        type: 'formula',
        formulas: [
          {
            name: t('Equity method — carrying amount after one year', 'Metodo del patrimonio netto — valore dopo un esercizio'),
            expr: 'Closing carrying amount = Cost + Ownership % × Investee net income − Ownership % × Investee dividends',
            vars: [
              { sym: 'Ownership %', desc: t('Investor\'s share of the investee', 'Quota di possesso nella partecipata') },
              { sym: 'Dividends', desc: t('Reduce the carrying amount — they are not income', 'Riducono il valore della partecipazione — non sono proventi') }
            ]
          },
          {
            name: t('Cost method — income recognised', 'Metodo del costo — provento rilevato'),
            expr: 'Income = Ownership % × Dividends declared'
          }
        ],
        note: t(
          'Significant influence over an associate (collegata) is presumed at ≥ 20% of votes, or ≥ 10% for companies with shares listed on regulated markets (art. 2359 c.c.).',
          'L\'influenza notevole su una collegata si presume con almeno il 20% dei voti, o il 10% se la società ha azioni quotate in mercati regolamentati (art. 2359 c.c.).'
        )
      },
      {
        type: 'example',
        title: t('Alfa buys 30% of Beta for €1,000k', 'Alfa acquista il 30% di Beta per €1.000k'),
        body: t('Year 1: Beta earns €200k and pays €50k of dividends. Alfa\'s separate accounts under the two methods:', 'Anno 1: Beta realizza un utile di €200k e distribuisce €50k di dividendi. Il bilancio d\'esercizio di Alfa con i due metodi:'),
        table: {
          headers: [t('€k', '€k'), t('Cost method', 'Metodo del costo'), t('Equity method', 'Metodo del PN')],
          rows: [
            [t('Opening carrying amount', 'Valore iniziale'), '1,000', '1,000'],
            [t('Share of profit (30% × 200)', 'Quota di utile (30% × 200)'), '—', '+60'],
            [t('Dividends received (30% × 50)', 'Dividendi incassati (30% × 50)'), t('15 income (C.15)', '15 proventi (C.15)'), t('−15 carrying amount', '−15 sul valore')],
            [t('Closing carrying amount', 'Valore finale'), '1,000', '1,045'],
            [t('Income statement effect', 'Effetto a conto economico'), t('+15 (C.15)', '+15 (C.15)'), t('+60 (D.18 revaluation)', '+60 (D.18 rivalutazione)')]
          ],
          totalRows: [3]
        }
      },
      {
        type: 'technical',
        title: t('Who must consolidate? D.Lgs. 127/1991', 'Chi deve consolidare? Il D.Lgs. 127/1991'),
        body: t(
          '**Obligation (art. 25)**: S.p.A., S.a.p.A. and S.r.l. that control another enterprise prepare consolidated financial statements. Control (art. 26) = majority of votes, votes sufficient for dominant influence, dominant influence by contract or by-laws, or majority of votes through shareholder agreements.\n\n**Exemptions (art. 27)**\n- **Small groups**: parent + subsidiaries do not exceed, for two consecutive years, two of three limits on a consolidated basis — €25m total assets, €50m revenue, 250 average employees (limits raised from €20m/€40m by D.Lgs. 125/2024). Not available if the parent or a subsidiary is a public-interest entity (e.g. listed issuer).\n- **Sub-holdings**: parent itself controlled by an EU parent holding > 95%, or ≥ 50% unless minority shareholders with ≥ 5% request consolidation; the ultimate parent\'s consolidated accounts must be filed.\n\n**Exclusions of single subsidiaries (art. 28)**: immaterial, severe long-term restrictions, disproportionate cost/delay, or held exclusively for resale.',
          '**Obbligo (art. 25)**: S.p.A., S.a.p.A. e S.r.l. che controllano un\'impresa redigono il bilancio consolidato. Il controllo (art. 26) = maggioranza dei voti, voti sufficienti per un\'influenza dominante, influenza dominante per contratto o clausola statutaria, maggioranza dei voti tramite patti con altri soci.\n\n**Esoneri (art. 27)**\n- **Gruppi di minori dimensioni**: capogruppo e controllate non superano, per due esercizi consecutivi, due di tre limiti su base consolidata — €25m di attivo, €50m di ricavi, 250 dipendenti medi (limiti innalzati da €20m/€40m dal D.Lgs. 125/2024). Non applicabile se la capogruppo o una controllata è un ente di interesse pubblico (es. emittente quotato).\n- **Sub-holding**: capogruppo a sua volta controllata da una controllante UE che ne detiene più del 95%, oppure almeno il 50% salvo richiesta di soci di minoranza con almeno il 5%; va depositato il consolidato della controllante ultima.\n\n**Esclusioni di singole controllate (art. 28)**: irrilevanza, gravi e durature restrizioni, costi o ritardi sproporzionati, possesso esclusivo per la successiva alienazione.'
        )
      },
      {
        type: 'technical',
        title: t('OIC 17 consolidation in a nutshell', 'Il consolidato OIC 17 in sintesi'),
        body: t(
          '- **Line-by-line consolidation** of subsidiaries; non-controlling interests shown within equity ("capitale e riserve di terzi").\n- **Elimination difference** (differenza da annullamento) = cost of the investment − share of subsidiary equity. If positive: first allocated to the subsidiary\'s assets and liabilities at current values, the residual to **goodwill (avviamento)**, which is **amortised** (OIC 24); if negative: a **consolidation reserve** in equity, or a **consolidation provision for future risks and charges** when it reflects expected losses.\n- **Associates**: equity method (art. 36).\n- **Joint ventures**: **proportionate consolidation** is permitted (art. 37) — IFRS 11 requires the equity method.\n- Intercompany balances, transactions and unrealised profits are eliminated.',
          '- **Consolidamento integrale** delle controllate; le interessenze di terzi sono esposte nel patrimonio netto ("capitale e riserve di terzi").\n- **Differenza da annullamento** = costo della partecipazione − quota di patrimonio netto della controllata. Se positiva: si imputa prima ad attività e passività della controllata a valori correnti, il residuo ad **avviamento**, che si **ammortizza** (OIC 24); se negativa: **riserva di consolidamento** nel patrimonio netto, o **fondo di consolidamento per rischi e oneri futuri** quando riflette perdite attese.\n- **Collegate**: metodo del patrimonio netto (art. 36).\n- **Joint venture**: è ammesso il **consolidamento proporzionale** (art. 37) — l\'IFRS 11 impone il metodo del patrimonio netto.\n- Si eliminano saldi, operazioni e utili infragruppo non realizzati.'
        )
      },
      {
        type: 'realworld',
        body: t(
          'In Italian M&A the target is often a **holding** whose separate accounts look small. Always ask: is there a consolidated bilancio? If the group sits under the €25m/€50m limits, it may legally not prepare one, and the analyst must **aggregate** the subsidiaries manually, eliminating intercompany sales and dividends. In a vendor due diligence, these "combined" accounts are a standard deliverable.',
          'Nell\'M&A italiano il target è spesso una **holding** il cui bilancio d\'esercizio sembra piccolo. Chiedi sempre: esiste un consolidato? Se il gruppo resta sotto i limiti di €25m/€50m può legittimamente non redigerlo, e l\'analyst deve **aggregare** manualmente le controllate, elidendo vendite e dividendi infragruppo. In una vendor due diligence questi bilanci "aggregati" sono un deliverable standard.'
        )
      },
      { type: 'exercise', questionId: 'acc-itpart-q1' },
      { type: 'exercise', questionId: 'acc-itpart-q2' },
      { type: 'exercise', questionId: 'acc-itpart-q3' },
      {
        type: 'interview',
        question: t('A holding company shows a big jump in net income in a year when its subsidiaries\' profits were flat. What could explain it?', 'Una holding mostra un forte aumento dell\'utile in un anno in cui gli utili delle controllate sono stati stabili. Cosa può spiegarlo?'),
        answer: t(
          'In separate statements at cost, the holding books income only when subsidiaries declare dividends. A large dividend — perhaps distributing several years of retained earnings — inflates the holding\'s net income without any change in underlying performance. Another candidate is the reversal of a prior write-down of a participation. That is why I look at the consolidated accounts, where intercompany dividends are eliminated.',
          'Nel bilancio d\'esercizio con il metodo del costo, la holding rileva proventi solo quando le controllate deliberano dividendi. Un dividendo elevato — magari la distribuzione di utili accumulati in più esercizi — gonfia l\'utile della holding senza alcun cambiamento nella performance sottostante. Un\'altra possibilità è il ripristino di una svalutazione di partecipazioni. Per questo guardo il consolidato, dove i dividendi infragruppo sono eliminati.'
        )
      },
      {
        type: 'mistakes',
        items: [
          t('Recording dividends as income under the equity method. They reduce the carrying amount.', 'Rilevare i dividendi come proventi con il metodo del patrimonio netto. Riducono il valore della partecipazione.'),
          t('Writing down a participation for any temporary drop in value. OIC 21 requires a permanent loss (perdita durevole).', 'Svalutare una partecipazione per qualsiasi calo temporaneo. L\'OIC 21 richiede una perdita durevole.'),
          t('Assuming every Italian group must consolidate. Small groups and qualifying sub-holdings are exempt (art. 27).', 'Ritenere che ogni gruppo italiano debba consolidare. I gruppi minori e le sub-holding con i requisiti sono esonerati (art. 27).'),
          t('Forgetting that OIC consolidated goodwill is amortised and JVs may be consolidated proportionally — both differ from IFRS.', 'Dimenticare che nel consolidato OIC l\'avviamento si ammortizza e le JV possono essere consolidate proporzionalmente — entrambe differenze rispetto agli IFRS.')
        ]
      },
      {
        type: 'summary',
        items: [
          t('OIC 21: participations at cost less permanent impairment (reversible); equity method optional for subsidiaries and associates.', 'OIC 21: partecipazioni al costo rettificato per perdite durevoli (ripristinabili); metodo del PN facoltativo per controllate e collegate.'),
          t('Equity method: + share of profit, − dividends received.', 'Metodo del PN: + quota di utile, − dividendi incassati.'),
          t('D.Lgs. 127/1991: controlling S.p.A./S.r.l. consolidate unless exempt — €25m assets / €50m revenue / 250 employees, or sub-holding exemption.', 'D.Lgs. 127/1991: le S.p.A./S.r.l. controllanti consolidano salvo esonero — €25m attivo / €50m ricavi / 250 dipendenti, o esonero sub-holding.'),
          t('OIC 17: differenza da annullamento → assets, then amortised goodwill; negative → consolidation reserve or provision.', 'OIC 17: differenza da annullamento → attività, poi avviamento ammortizzato; se negativa → riserva o fondo di consolidamento.')
        ]
      }
    ],
    questions: [
      {
        id: 'acc-itpart-q1',
        kind: 'numeric',
        topic: 'equity-method',
        difficulty: 2,
        objective: t('Compute an equity-method carrying amount.', 'Calcolare il valore di una partecipazione con il metodo del patrimonio netto.'),
        prompt: t(
          'Alfa S.p.A. acquires 25% of Omega S.r.l. for €800k and applies the equity method in its separate accounts. Omega earns €240k and pays €80k of dividends in year 1. Closing carrying amount (€k)?',
          'Alfa S.p.A. acquista il 25% di Omega S.r.l. per €800k e applica il metodo del patrimonio netto nel bilancio d\'esercizio. Omega realizza un utile di €240k e distribuisce €80k di dividendi nell\'anno 1. Valore finale della partecipazione (€k)?'
        ),
        answer: 840,
        unit: '€k',
        verify: { fn: 'equityMethodCarrying', args: [800, 0.25, 240, 80] },
        steps: [t('Share of profit: 25% × 240 = 60', 'Quota di utile: 25% × 240 = 60'), t('Dividends: 25% × 80 = 20', 'Dividendi: 25% × 80 = 20'), t('800 + 60 − 20 = 840', '800 + 60 − 20 = 840')],
        explanation: t(
          '800 + 25% × 240 − 25% × 80 = 840. Common mistakes are to add dividends (880) or ignore them (860): dividends are a return of part of the investment already recognised through the share of profit.',
          '800 + 25% × 240 − 25% × 80 = 840. Errori tipici: sommare i dividendi (880) o ignorarli (860): i dividendi restituiscono parte di un investimento già rivalutato con la quota di utile.'
        )
      },
      {
        id: 'acc-itpart-q2',
        kind: 'numeric',
        topic: 'equity-method',
        difficulty: 1,
        objective: t('Compute income under the cost method.', 'Calcolare il provento con il metodo del costo.'),
        prompt: t('Same facts, but Alfa uses the cost method. What income (€k) does Alfa recognise from Omega in year 1?', 'Stessi dati, ma Alfa usa il metodo del costo. Quale provento (€k) rileva Alfa da Omega nell\'anno 1?'),
        answer: 20,
        unit: '€k',
        verify: { fn: 'product', args: [0.25, 80] },
        explanation: t(
          'Under the cost method only dividends are income: 25% × 80 = 20 (C.15 proventi da partecipazioni). The €60k share of profit is not recognised; the carrying amount stays at €800k.',
          'Con il metodo del costo sono proventi solo i dividendi: 25% × 80 = 20 (C.15 proventi da partecipazioni). La quota di utile di €60k non si rileva; il valore resta €800k.'
        )
      },
      {
        id: 'acc-itpart-q3',
        kind: 'mcq',
        topic: 'consolidation',
        difficulty: 2,
        objective: t('Apply the art. 27 exemption.', 'Applicare l\'esonero dell\'art. 27.'),
        prompt: t(
          'Kappa S.p.A. (unlisted) controls two S.r.l. On a consolidated basis, for the last two years: total assets €22m, revenue €58m, 180 employees. No group company is a public-interest entity. Must Kappa prepare consolidated accounts?',
          'Kappa S.p.A. (non quotata) controlla due S.r.l. Su base consolidata, negli ultimi due esercizi: attivo €22m, ricavi €58m, 180 dipendenti. Nessuna società del gruppo è un ente di interesse pubblico. Kappa deve redigere il consolidato?'
        ),
        choices: [
          t('Yes — revenue exceeds €50m', 'Sì — i ricavi superano €50m'),
          t('Yes — every controlling S.p.A. must consolidate', 'Sì — ogni S.p.A. controllante deve consolidare'),
          t('No — only one of the three limits is exceeded', 'No — è superato un solo limite su tre'),
          t('No — groups with fewer than 250 employees never consolidate', 'No — i gruppi con meno di 250 dipendenti non consolidano mai')
        ],
        correct: 2,
        explanation: t(
          'The exemption applies when two of three limits are not exceeded for two consecutive years: assets €22m < €25m and employees 180 < 250, so exceeding revenue alone does not trigger the obligation. Employees are only one of the three tests.',
          'L\'esonero si applica se non si superano due limiti su tre per due esercizi consecutivi: attivo €22m < €25m e dipendenti 180 < 250, quindi il solo superamento dei ricavi non fa scattare l\'obbligo. I dipendenti sono solo uno dei tre parametri.'
        )
      },
      {
        id: 'acc-itpart-q4',
        kind: 'mcq',
        topic: 'consolidation',
        difficulty: 2,
        objective: t('Treat a negative elimination difference under OIC 17.', 'Trattare una differenza da annullamento negativa in OIC 17.'),
        prompt: t(
          'A parent buys a subsidiary for less than its share of the subsidiary\'s equity because heavy losses are expected in the next years. Under OIC 17 the negative difference is recognised as:',
          'Una capogruppo acquista una controllata a un prezzo inferiore alla quota di patrimonio netto perché si attendono forti perdite negli anni successivi. In OIC 17 la differenza negativa si rileva come:'
        ),
        choices: [
          t('An immediate gain in the consolidated income statement', 'Un provento immediato nel conto economico consolidato'),
          t('Negative goodwill deducted from other goodwill', 'Avviamento negativo dedotto dagli altri avviamenti'),
          t('A consolidation reserve in equity', 'Una riserva di consolidamento nel patrimonio netto'),
          t('A consolidation provision for future risks and charges', 'Un fondo di consolidamento per rischi e oneri futuri')
        ],
        correct: 3,
        explanation: t(
          'When the negative difference reflects expected unfavourable results, OIC 17 requires a "fondo di consolidamento per rischi e oneri futuri", released as the losses occur. A consolidation reserve is used when the difference does not reflect expected losses (e.g. a good deal). An immediate gain is the IFRS 3 bargain purchase treatment, not OIC.',
          'Quando la differenza negativa riflette risultati sfavorevoli attesi, l\'OIC 17 richiede un "fondo di consolidamento per rischi e oneri futuri", utilizzato man mano che le perdite si manifestano. La riserva di consolidamento si usa quando la differenza non riflette perdite attese (es. un buon affare). Il provento immediato è il trattamento IFRS 3 del bargain purchase, non OIC.'
        )
      }
    ],
    flashcards: [
      { id: 'fc-acc-itpart-1', topic: 'equity-method', front: t('OIC 21 default measurement of fixed-asset participations?', 'Criterio base OIC 21 per le partecipazioni immobilizzate?'), back: t('Cost (incl. directly attributable costs) less permanent impairment; reversible up to cost.', 'Costo (con oneri accessori) rettificato per perdite durevoli di valore; ripristinabile fino al costo.') },
      { id: 'fc-acc-itpart-2', topic: 'equity-method', front: t('Presumption of significant influence in the Civil Code?', 'Presunzione di influenza notevole nel Codice Civile?'), back: t('≥ 20% of votes (≥ 10% if listed) — art. 2359 c.c.', 'Almeno 20% dei voti (10% se quotata) — art. 2359 c.c.') },
      { id: 'fc-acc-itpart-3', topic: 'consolidation', front: t('Art. 27 D.Lgs. 127/1991 small-group limits (consolidated basis)?', 'Limiti art. 27 D.Lgs. 127/1991 per i gruppi minori (base consolidata)?'), back: t('€25m total assets, €50m revenue, 250 employees — not exceed two of three for two consecutive years.', '€25m attivo, €50m ricavi, 250 dipendenti — non superarne due su tre per due esercizi consecutivi.') },
      { id: 'fc-acc-itpart-4', topic: 'consolidation', front: t('How are joint ventures treated in OIC consolidated accounts?', 'Come si trattano le joint venture nel consolidato OIC?'), back: t('Proportionate consolidation permitted (art. 37 D.Lgs. 127/1991); equity method also allowed. IFRS 11: equity method only.', 'Consolidamento proporzionale ammesso (art. 37 D.Lgs. 127/1991); ammesso anche il PN. IFRS 11: solo PN.') },
      { id: 'fc-acc-itpart-5', topic: 'consolidation', front: t('Positive differenza da annullamento under OIC 17?', 'Differenza da annullamento positiva in OIC 17?'), back: t('Allocate to assets/liabilities at current values; residual = goodwill, amortised under OIC 24.', 'Si imputa ad attività/passività a valori correnti; il residuo è avviamento, ammortizzato secondo l\'OIC 24.') }
    ],
    sources: [
      { label: 'OIC 21 — Partecipazioni; OIC 17 — Bilancio consolidato e metodo del patrimonio netto', url: 'https://www.fondazioneoic.eu/' },
      { label: 'D.Lgs. 127/1991, artt. 25–28, 36–37 (Normattiva)', url: 'https://www.normattiva.it/' },
      { label: 'D.Lgs. 125/2024 — revised art. 27 consolidation exemption limits', url: 'https://www.gazzettaufficiale.it/' },
      { label: 'Codice Civile, artt. 2359, 2426 n. 4', url: 'https://www.normattiva.it/' }
    ]
  },
  /* ------------------------------------------------------------ */
  {
    id: 'acc-oic-vs-ifrs',
    academyId: 'accounting',
    moduleId: 'A3',
    mode: 'deep',
    minutes: 12,
    difficulty: 2,
    reviewed: '2026-10',
    objective: t(
      'Identify the OIC vs IFRS differences that move EBITDA, net income and net debt — goodwill, leases, revenue, development and start-up costs, presentation — and restate an OIC company for peer comparison.',
      'Riconoscere le differenze OIC vs IFRS che spostano EBITDA, utile netto e PFN — avviamento, leasing, ricavi, costi di sviluppo e di impianto, presentazione — e rettificare una società OIC per il confronto con i peers.'
    ),
    screens: [
      {
        type: 'intuition',
        title: t('Same company, two sets of numbers', 'Stessa azienda, due serie di numeri'),
        body: t(
          'Imagine the same Italian manufacturer reporting under OIC and under IFRS. Under IFRS its EBITDA is higher (leases leave operating costs), its net income may be higher (no goodwill amortisation) and its net debt is higher (lease liabilities on balance sheet).\n\nNone of this changes the cash the business generates. But if you compare an OIC target with IFRS peers without adjusting, you will misprice it.',
          'Immagina lo stesso produttore italiano che redige il bilancio in OIC e in IFRS. In IFRS l\'EBITDA è più alto (i leasing escono dai costi operativi), l\'utile può essere più alto (niente ammortamento dell\'avviamento) e la PFN è più alta (debiti per leasing in bilancio).\n\nNulla di tutto ciò cambia la cassa generata. Ma se confronti un target OIC con peers IFRS senza rettifiche, lo valuti male.'
        )
      },
      {
        type: 'technical',
        title: t('Goodwill: amortised vs impairment-only', 'Avviamento: ammortamento vs solo impairment'),
        body: t(
          '**OIC 24 / art. 2426 n. 6**: goodwill acquired for consideration is **amortised** over its useful life. Only in exceptional cases where the useful life cannot be reliably estimated, it is amortised over **no more than 10 years**. OIC 24 caps the useful life at **20 years**; a period above 10 years needs objective support. Write-downs for permanent loss (OIC 9) can **never be reversed** for goodwill.\n\n**IFRS (IFRS 3 / IAS 36)**: goodwill is **not amortised**; it is tested for impairment at least **annually** at CGU level. Impairment losses on goodwill cannot be reversed either.\n\nEffect: OIC net income is structurally lower after acquisitions; EBITDA is unaffected (amortisation is below EBITDA in both).',
          '**OIC 24 / art. 2426 n. 6**: l\'avviamento acquisito a titolo oneroso si **ammortizza** secondo la vita utile. Solo nei casi eccezionali in cui la vita utile non è stimabile attendibilmente, si ammortizza **entro 10 anni**. L\'OIC 24 fissa un tetto di **20 anni**; un periodo superiore a 10 anni richiede fatti e circostanze oggettivi. Le svalutazioni per perdite durevoli (OIC 9) dell\'avviamento **non si ripristinano mai**.\n\n**IFRS (IFRS 3 / IAS 36)**: l\'avviamento **non si ammortizza**; è sottoposto a impairment test almeno **annuale** a livello di CGU. Anche le svalutazioni dell\'avviamento non si ripristinano.\n\nEffetto: dopo un\'acquisizione l\'utile OIC è strutturalmente più basso; l\'EBITDA non cambia (gli ammortamenti sono sotto l\'EBITDA in entrambi).'
        )
      },
      {
        type: 'technical',
        title: t('Leases: OIC 12 vs IFRS 16', 'Leasing: OIC 12 vs IFRS 16'),
        body: t(
          '**OIC (separate statements)**: the lessee uses the **metodo patrimoniale** — finance lease instalments are expensed in B8 (godimento di beni di terzi), the asset is recognised only when the purchase option is exercised. The **financial method** effects (asset value, depreciation, residual debt, interest) are disclosed in the nota integrativa (art. 2427 n. 22). The financial method is **not required** in separate statements.\n\n**OIC 17 (consolidated)**: the financial method is **recommended**, but the metodo patrimoniale remains allowed with n. 22 disclosure.\n\n**IFRS 16**: a single lessee model — **right-of-use asset** and **lease liability** for almost all leases (exemptions: short-term ≤ 12 months, low-value assets). Operating leases (rents) are capitalised too, not just finance leases.',
          '**OIC (bilancio d\'esercizio)**: il locatario applica il **metodo patrimoniale** — i canoni di leasing finanziario sono costi in B8 (godimento di beni di terzi) e il bene si iscrive solo al riscatto. Gli effetti del **metodo finanziario** (valore del bene, ammortamenti, debito residuo, oneri finanziari) si danno in nota integrativa (art. 2427 n. 22). Il metodo finanziario **non è richiesto** nel bilancio d\'esercizio.\n\n**OIC 17 (consolidato)**: il metodo finanziario è **raccomandato**, ma resta ammesso il patrimoniale con l\'informativa del n. 22.\n\n**IFRS 16**: modello unico per il locatario — **diritto d\'uso** e **passività per leasing** per quasi tutti i contratti (esenzioni: breve termine ≤ 12 mesi, beni di modesto valore). Si capitalizzano anche gli affitti operativi, non solo i leasing finanziari.'
        )
      },
      {
        type: 'technical',
        title: t('Revenue, R&D, start-up costs, presentation', 'Ricavi, R&S, costi di impianto, presentazione'),
        body: t('Other differences that matter in practice:', 'Altre differenze rilevanti nella pratica:'),
        table: {
          headers: [t('Topic', 'Tema'), t('OIC', 'OIC'), t('IFRS', 'IFRS')],
          rows: [
            [t('Revenue', 'Ricavi'), t('OIC 34 (FY starting on/after 1 Jan 2024): units of account and price allocation like IFRS 15, but goods recognised on substantial transfer of risks and rewards; simplifications for small companies', 'OIC 34 (esercizi dal 1° gennaio 2024): unità elementari di contabilizzazione e allocazione del prezzo come IFRS 15, ma per i beni rilevazione al trasferimento sostanziale di rischi e benefici; semplificazioni per le società minori'), t('IFRS 15: five steps, transfer of control', 'IFRS 15: cinque fasi, trasferimento del controllo')],
            [t('Development costs', 'Costi di sviluppo'), t('May be capitalised if criteria met, with statutory auditors\' consent; amortised over useful life (≤ 5 years if not estimable); dividend restriction until amortised', 'Capitalizzabili se ricorrono i requisiti, con il consenso del collegio sindacale; ammortizzati secondo la vita utile (≤ 5 anni se non stimabile); limiti alla distribuzione di dividendi'), t('IAS 38: must be capitalised when six criteria met', 'IAS 38: obbligo di capitalizzazione se ricorrono i sei requisiti')],
            [t('Start-up costs', 'Costi di impianto e ampliamento'), t('Can be capitalised (≤ 5 years)', 'Capitalizzabili (≤ 5 anni)'), t('Expensed', 'A conto economico')],
            [t('PP&E revaluation', 'Rivalutazione cespiti'), t('Only under special revaluation laws', 'Solo con leggi speciali di rivalutazione'), t('IAS 16 revaluation model allowed', 'Modello della rideterminazione IAS 16 ammesso')],
            [t('Income statement', 'Conto economico'), t('Mandatory by-nature format; no OCI statement', 'Schema per natura obbligatorio; niente prospetto OCI'), t('By nature or function; OCI presented', 'Per natura o destinazione; OCI esposto')],
            [t('Joint ventures (consolidated)', 'Joint venture (consolidato)'), t('Proportionate consolidation allowed', 'Consolidamento proporzionale ammesso'), t('Equity method (IFRS 11)', 'Metodo del PN (IFRS 11)')]
          ]
        }
      },
      {
        type: 'formula',
        formulas: [
          {
            name: t('Annual OIC goodwill amortisation (straight-line)', 'Ammortamento annuo dell\'avviamento OIC (a quote costanti)'),
            expr: 'Amortisation = Goodwill ÷ Useful life (≤ 10 years if not reliably estimable; ≤ 20 years cap)'
          },
          {
            name: t('Restating OIC EBITDA to an IFRS 16-like basis', 'Rettifica dell\'EBITDA OIC su base IFRS 16'),
            expr: 'EBITDA (IFRS 16-like) ≈ EBITDA (OIC) + lease/rent instalments in B8;  Net debt (IFRS 16-like) = PFN + lease liabilities'
          }
        ],
        note: t(
          'Adjust both sides together. Higher EBITDA with unchanged net debt overstates enterprise value.',
          'Rettifica entrambi i lati insieme. Un EBITDA più alto con PFN invariata sovrastima l\'enterprise value.'
        )
      },
      {
        type: 'example',
        title: t('Restating Sigma S.p.A. (€m)', 'Rettifica di Sigma S.p.A. (€m)'),
        body: t(
          'Sigma reports under OIC. It bought a business 3 years ago with €30m of goodwill (10-year amortisation) and pays €4m/year of lease instalments; the lease liability under the financial method (nota integrativa n. 22) is €15m.',
          'Sigma applica gli OIC. Tre anni fa ha acquisito un ramo con €30m di avviamento (ammortamento in 10 anni) e paga €4m l\'anno di canoni di leasing; il debito residuo secondo il metodo finanziario (nota integrativa n. 22) è €15m.'
        ),
        table: {
          headers: [t('€m', '€m'), t('OIC reported', 'OIC pubblicato'), t('Adjustment', 'Rettifica'), t('IFRS-like', 'Base IFRS')],
          rows: [
            [t('EBITDA', 'EBITDA'), '20.0', '+4.0', '24.0'],
            [t('Goodwill amortisation', 'Ammortamento avviamento'), '(3.0)', '+3.0', '0.0'],
            [t('Goodwill carrying amount', 'Valore dell\'avviamento'), '21.0', '+9.0', '30.0'],
            [t('Net debt (PFN)', 'PFN'), '40.0', '+15.0', '55.0'],
            [t('Net debt / EBITDA', 'PFN / EBITDA'), '2.0x', '', '2.3x']
          ]
        }
      },
      {
        type: 'realworld',
        body: t(
          'When an Italian company prepares to list on Euronext Milan, it must move to IFRS — and analysts see "new" EBITDA and debt figures. In PE deals, sponsors often keep the target on OIC but the banking case and covenants are defined on adjusted figures. Read the facility agreement: many define EBITDA "pre-IFRS 16" or "frozen GAAP", so the analyst must know which basis each number is on.',
          'Quando una società italiana si prepara alla quotazione su Euronext Milan deve passare agli IFRS — e gli analisti vedono un "nuovo" EBITDA e un nuovo debito. Nei deal di private equity lo sponsor spesso mantiene il target in OIC, ma il banking case e i covenant sono definiti su grandezze rettificate. Leggi il contratto di finanziamento: molti definiscono l\'EBITDA "pre-IFRS 16" o a principi "congelati" (frozen GAAP), quindi l\'analyst deve sapere su quale base è ogni numero.'
        )
      },
      { type: 'exercise', questionId: 'acc-oicifrs-q1' },
      { type: 'exercise', questionId: 'acc-oicifrs-q2' },
      { type: 'exercise', questionId: 'acc-oicifrs-q3' },
      {
        type: 'interview',
        question: t('Walk me through the main differences between OIC and IFRS that you would adjust for in a valuation.', 'Illustrami le principali differenze tra OIC e IFRS che rettificheresti in una valutazione.'),
        answer: t(
          'Three matter most. First, leases: under OIC the separate accounts use the metodo patrimoniale, so instalments sit in EBITDA; IFRS 16 capitalises them, raising both EBITDA and net debt — I adjust both consistently. Second, goodwill: OIC amortises it, typically within 10 years, while IFRS only tests for impairment, so OIC net income and EPS-type metrics are lower; EBITDA and cash are unaffected. Third, capitalisation policies — start-up and development costs can be capitalised more freely under OIC, which inflates EBITDA versus IFRS. Revenue is now closer since OIC 34, but goods still follow risks and rewards rather than control.',
          'Le più rilevanti sono tre. Primo, il leasing: in OIC il bilancio d\'esercizio usa il metodo patrimoniale, quindi i canoni stanno nell\'EBITDA; l\'IFRS 16 li capitalizza, aumentando EBITDA e debito — rettifico entrambi in modo coerente. Secondo, l\'avviamento: in OIC si ammortizza, di norma entro 10 anni, mentre in IFRS si fa solo l\'impairment test, quindi utile netto e metriche per azione sono più bassi in OIC; EBITDA e cassa non cambiano. Terzo, le politiche di capitalizzazione — costi di impianto e di sviluppo sono capitalizzabili più liberamente in OIC, il che gonfia l\'EBITDA rispetto agli IFRS. Sui ricavi, con l\'OIC 34 le regole si sono avvicinate, ma per i beni resta il criterio di rischi e benefici anziché il controllo.'
        )
      },
      {
        type: 'mistakes',
        items: [
          t('Thinking goodwill amortisation affects EBITDA. It sits below EBITDA under both frameworks.', 'Pensare che l\'ammortamento dell\'avviamento incida sull\'EBITDA. È sotto l\'EBITDA in entrambi i framework.'),
          t('Adding back lease instalments to EBITDA without adding lease debt to net debt.', 'Riaggiungere i canoni di leasing all\'EBITDA senza sommare il debito per leasing alla PFN.'),
          t('Assuming OIC 12 capitalises operating rents. Only IFRS 16 brings ordinary rental contracts on balance sheet; OIC n. 22 disclosure covers finance leases.', 'Ritenere che l\'OIC capitalizzi gli affitti operativi. Solo l\'IFRS 16 porta in bilancio i normali contratti di locazione; l\'informativa OIC n. 22 riguarda il leasing finanziario.'),
          t('Saying OIC 34 is identical to IFRS 15. It borrows the units-of-account logic but keeps risks and rewards for goods.', 'Dire che l\'OIC 34 è identico all\'IFRS 15. Ne riprende la logica delle unità di contabilizzazione ma mantiene rischi e benefici per i beni.')
        ]
      },
      {
        type: 'summary',
        items: [
          t('Goodwill: OIC amortises (≤ 10 years if life not estimable, 20-year cap); IFRS impairment-only. Neither reverses goodwill write-downs.', 'Avviamento: OIC ammortizza (≤ 10 anni se vita utile non stimabile, tetto 20); IFRS solo impairment. Nessuno dei due ripristina le svalutazioni.'),
          t('Leases: OIC separate accounts expense instalments (metodo patrimoniale, n. 22 disclosure); IFRS 16 puts ROU asset and liability on balance sheet.', 'Leasing: nel bilancio d\'esercizio OIC i canoni sono costi (metodo patrimoniale, informativa n. 22); l\'IFRS 16 iscrive diritto d\'uso e passività.'),
          t('Revenue: OIC 34 from FY2024, close to IFRS 15 but risks-and-rewards for goods.', 'Ricavi: OIC 34 dal 2024, vicino all\'IFRS 15 ma con rischi e benefici per i beni.'),
          t('Always restate EBITDA and net debt on the same basis before using peer multiples.', 'Riallinea sempre EBITDA e PFN sulla stessa base prima di usare i multipli dei peers.')
        ]
      }
    ],
    questions: [
      {
        id: 'acc-oicifrs-q1',
        kind: 'numeric',
        topic: 'oic-vs-ifrs',
        difficulty: 1,
        objective: t('Compute OIC goodwill amortisation.', 'Calcolare l\'ammortamento dell\'avviamento OIC.'),
        prompt: t(
          'An OIC company recognises €48m of goodwill and cannot reliably estimate its useful life, so it uses the maximum period allowed in that case. Annual amortisation (€m)?',
          'Una società OIC iscrive €48m di avviamento e non riesce a stimarne attendibilmente la vita utile, quindi usa il periodo massimo consentito in quel caso. Ammortamento annuo (€m)?'
        ),
        answer: 4.8,
        unit: '€m',
        verify: { fn: 'ratio', args: [48, 10] },
        explanation: t(
          'When useful life cannot be reliably estimated, art. 2426 n. 6 requires amortisation within 10 years: 48 / 10 = 4.8. The 20-year figure is the OIC 24 cap for an estimated useful life supported by objective evidence, not the default.',
          'Se la vita utile non è stimabile attendibilmente, l\'art. 2426 n. 6 impone l\'ammortamento entro 10 anni: 48 / 10 = 4,8. I 20 anni sono il tetto OIC 24 per una vita utile stimata e supportata da elementi oggettivi, non il default.'
        )
      },
      {
        id: 'acc-oicifrs-q2',
        kind: 'numeric',
        topic: 'oic-vs-ifrs',
        difficulty: 2,
        objective: t('Restate leverage from OIC to an IFRS 16-like basis.', 'Rettificare la leva da OIC a base IFRS 16.'),
        prompt: t(
          'OIC target: EBITDA €50m, PFN €100m. Lease instalments in B8: €8m/year; lease liability (financial method, n. 22): €40m. Net debt / EBITDA on an IFRS 16-like basis (x)?',
          'Target OIC: EBITDA €50m, PFN €100m. Canoni di leasing in B8: €8m l\'anno; debito per leasing (metodo finanziario, n. 22): €40m. PFN / EBITDA su base IFRS 16 (x)?'
        ),
        answer: 2.4138,
        unit: 'x',
        tolerance: { abs: 0.01 },
        verify: { fn: 'ratio', args: [140, 58] },
        steps: [t('Net debt: 100 + 40 = 140', 'PFN: 100 + 40 = 140'), t('EBITDA: 50 + 8 = 58', 'EBITDA: 50 + 8 = 58'), t('140 / 58 = 2.41x (vs 2.00x on OIC)', '140 / 58 = 2,41x (vs 2,00x in OIC)')],
        explanation: t(
          'Both sides move: (100 + 40) / (50 + 8) = 2.41x. Adjusting only EBITDA (100 / 58 = 1.72x) understates leverage; adjusting only debt (140 / 50 = 2.8x) overstates it.',
          'Si muovono entrambi i lati: (100 + 40) / (50 + 8) = 2,41x. Rettificare solo l\'EBITDA (100 / 58 = 1,72x) sottostima la leva; rettificare solo il debito (140 / 50 = 2,8x) la sovrastima.'
        )
      },
      {
        id: 'acc-oicifrs-q3',
        kind: 'multi',
        topic: 'oic-vs-ifrs',
        difficulty: 2,
        objective: t('Identify OIC treatments that differ from IFRS.', 'Riconoscere i trattamenti OIC diversi dagli IFRS.'),
        prompt: t('Which statements about OIC (vs IFRS) are correct? Select all that apply.', 'Quali affermazioni sugli OIC (rispetto agli IFRS) sono corrette? Seleziona tutte le risposte corrette.'),
        choices: [
          t('Start-up costs (costi di impianto e ampliamento) may be capitalised', 'I costi di impianto e ampliamento possono essere capitalizzati'),
          t('A goodwill write-down can be reversed if the reasons cease', 'Una svalutazione dell\'avviamento si può ripristinare se ne vengono meno i motivi'),
          t('In separate statements, finance lease instalments are normally expensed with n. 22 disclosure', 'Nel bilancio d\'esercizio i canoni di leasing finanziario sono di norma a conto economico con l\'informativa del n. 22'),
          t('The income statement must be presented by nature', 'Il conto economico deve essere presentato per natura'),
          t('Goodwill is tested for impairment only, never amortised', 'L\'avviamento è soggetto solo a impairment, mai ammortizzato')
        ],
        correct: [0, 2, 3],
        explanation: t(
          'OIC allows capitalising start-up costs, uses the metodo patrimoniale for leases in separate accounts, and prescribes the by-nature art. 2425 format. Goodwill write-downs can never be reversed (same as IAS 36), and OIC goodwill is amortised — impairment-only is the IFRS model.',
          'Gli OIC consentono di capitalizzare i costi di impianto, usano il metodo patrimoniale per il leasing nel bilancio d\'esercizio e prevedono lo schema per natura dell\'art. 2425. Le svalutazioni dell\'avviamento non si ripristinano mai (come in IAS 36) e l\'avviamento OIC si ammortizza — il solo impairment è il modello IFRS.'
        )
      },
      {
        id: 'acc-oicifrs-q4',
        kind: 'mcq',
        topic: 'oic-vs-ifrs',
        difficulty: 2,
        objective: t('Know the scope and effective date of OIC 34.', 'Conoscere ambito e decorrenza dell\'OIC 34.'),
        prompt: t('For a calendar-year OIC company, which is the first set of financial statements in which OIC 34 "Ricavi" applies?', 'Per una società OIC con esercizio solare, qual è il primo bilancio in cui si applica l\'OIC 34 "Ricavi"?'),
        choices: [
          t('FY2018, together with IFRS 15', 'Il bilancio 2018, insieme all\'IFRS 15'),
          t('FY2022', 'Il bilancio 2022'),
          t('FY2024', 'Il bilancio 2024'),
          t('FY2027, together with IFRS 18', 'Il bilancio 2027, insieme all\'IFRS 18')
        ],
        correct: 2,
        explanation: t(
          'OIC 34 (final version approved in April 2023) applies to financial statements for years beginning on or after 1 January 2024, with a choice of prospective or retrospective transition. IFRS 15 has applied since 2018 to IFRS reporters; IFRS 18 (2027) concerns presentation, not revenue.',
          'L\'OIC 34 (versione definitiva approvata ad aprile 2023) si applica ai bilanci degli esercizi che iniziano dal 1° gennaio 2024, con transizione prospettica o retrospettiva a scelta. L\'IFRS 15 si applica dal 2018 a chi redige in IFRS; l\'IFRS 18 (2027) riguarda la presentazione, non i ricavi.'
        )
      }
    ],
    flashcards: [
      { id: 'fc-acc-oicifrs-1', topic: 'oic-vs-ifrs', front: t('OIC goodwill amortisation rule?', 'Regola OIC per l\'ammortamento dell\'avviamento?'), back: t('Over useful life; ≤ 10 years if life cannot be reliably estimated (art. 2426 n. 6); OIC 24 cap 20 years; no reversal of write-downs.', 'Secondo la vita utile; ≤ 10 anni se non stimabile (art. 2426 n. 6); tetto OIC 24 di 20 anni; svalutazioni non ripristinabili.') },
      { id: 'fc-acc-oicifrs-2', topic: 'oic-vs-ifrs', front: t('What is art. 2427 n. 22 disclosure?', 'Cos\'è l\'informativa dell\'art. 2427 n. 22?'), back: t('Effects of accounting for finance leases with the financial method (asset, depreciation, residual debt, interest) when the metodo patrimoniale is used.', 'Gli effetti della contabilizzazione del leasing finanziario con il metodo finanziario (bene, ammortamenti, debito residuo, oneri) quando si usa il metodo patrimoniale.') },
      { id: 'fc-acc-oicifrs-3', topic: 'oic-vs-ifrs', front: t('OIC 34 effective date?', 'Decorrenza dell\'OIC 34?'), back: t('Financial years beginning on or after 1 January 2024.', 'Esercizi che iniziano dal 1° gennaio 2024.') },
      { id: 'fc-acc-oicifrs-4', topic: 'oic-vs-ifrs', front: t('OIC 34 vs IFRS 15 for sales of goods?', 'OIC 34 vs IFRS 15 per la vendita di beni?'), back: t('OIC 34: substantial transfer of risks and rewards; IFRS 15: transfer of control.', 'OIC 34: trasferimento sostanziale di rischi e benefici; IFRS 15: trasferimento del controllo.') },
      { id: 'fc-acc-oicifrs-5', topic: 'oic-vs-ifrs', front: t('Development costs: OIC vs IAS 38?', 'Costi di sviluppo: OIC vs IAS 38?'), back: t('OIC: may be capitalised (auditors\' consent, ≤ 5 years if life not estimable); IAS 38: must be capitalised when criteria met.', 'OIC: capitalizzabili (consenso del collegio sindacale, ≤ 5 anni se vita utile non stimabile); IAS 38: obbligo di capitalizzazione se ricorrono i requisiti.') }
    ],
    sources: [
      { label: 'OIC 24 — Immobilizzazioni immateriali; OIC 9 — Svalutazioni per perdite durevoli di valore', url: 'https://www.fondazioneoic.eu/' },
      { label: 'OIC 34 — Ricavi (effective for years beginning on or after 1 January 2024)', url: 'https://www.fondazioneoic.eu/' },
      { label: 'Codice Civile, art. 2426 nn. 5–6, art. 2427 n. 22', url: 'https://www.normattiva.it/' },
      { label: 'IFRS Foundation — IFRS 16 Leases, IAS 36 Impairment of Assets, IFRS 15', url: 'https://www.ifrs.org/issued-standards/list-of-standards/' }
    ]
  },
  /* @@END-A3@@ */
];

/* ============================================================== */
/* A4 — IFRS                                                       */
/* ============================================================== */

const a4: Lesson[] = [
  /* ------------------------------------------------------------ */
  {
    id: 'acc-ifrs-framework',
    academyId: 'accounting',
    moduleId: 'A4',
    mode: 'deep',
    minutes: 12,
    difficulty: 2,
    reviewed: '2026-10',
    objective: t(
      'Explain the 2018 Conceptual Framework, the IAS 1 presentation requirements and the changes introduced by IFRS 18 (effective 1 January 2027): new income statement categories, required subtotals and management-defined performance measures.',
      'Spiegare il Conceptual Framework 2018, i requisiti di presentazione dello IAS 1 e le novità dell\'IFRS 18 (in vigore dal 1° gennaio 2027): nuove categorie del conto economico, subtotali obbligatori e indicatori di performance definiti dal management.'
    ),
    screens: [
      {
        type: 'intuition',
        title: t('Why IFRS needed a new income statement', 'Perché gli IFRS avevano bisogno di un nuovo conto economico'),
        body: t(
          'Under IAS 1 there was no defined "operating profit". Two companies could both report "EBIT" and compute it differently — one including share of associates\' profit, the other not. Investors spent hours making numbers comparable.\n\n**IFRS 18** fixes that: it imposes common categories and subtotals in the income statement and brings companies\' own "adjusted" measures inside the audited notes.',
          'Con lo IAS 1 non esisteva un "risultato operativo" definito. Due società potevano entrambe pubblicare l\'"EBIT" calcolandolo in modo diverso — una includendo la quota di utile delle collegate, l\'altra no. Gli investitori passavano ore a rendere i numeri confrontabili.\n\nL\'**IFRS 18** risolve il problema: impone categorie e subtotali comuni nel conto economico e porta le misure "adjusted" delle società dentro le note sottoposte a revisione.'
        )
      },
      {
        type: 'technical',
        title: t('Conceptual Framework (2018)', 'Il Conceptual Framework (2018)'),
        body: t(
          '- **Objective**: useful information for existing and potential investors, lenders and other creditors making decisions about providing resources.\n- **Fundamental qualitative characteristics**: **relevance** (incl. materiality) and **faithful representation** (complete, neutral, free from error; prudence = caution under uncertainty, supporting neutrality).\n- **Enhancing**: comparability, verifiability, timeliness, understandability. Constraint: cost.\n- **Elements**: asset, liability, equity, income, expenses.\n- **Measurement bases**: historical cost and current value (fair value, value in use / fulfilment value, current cost).\n\nThe Framework is **not a standard**: it guides the IASB and fills gaps, but never overrides a specific IFRS.',
          '- **Obiettivo**: fornire informazioni utili a investitori, finanziatori e altri creditori, attuali e potenziali, nelle decisioni di apporto di risorse.\n- **Caratteristiche qualitative fondamentali**: **rilevanza** (inclusa la significatività) e **rappresentazione fedele** (completa, neutrale, priva di errori; prudenza = cautela in condizioni di incertezza, a supporto della neutralità).\n- **Caratteristiche migliorative**: comparabilità, verificabilità, tempestività, comprensibilità. Vincolo: costo.\n- **Elementi**: attività, passività, patrimonio netto, ricavi/proventi, costi/oneri.\n- **Criteri di valutazione**: costo storico e valore corrente (fair value, valore d\'uso / valore di adempimento, costo corrente).\n\nIl Framework **non è un principio**: orienta lo IASB e colma le lacune, ma non prevale mai su un IFRS specifico.'
        )
      },
      {
        type: 'technical',
        title: t('IAS 1 today (until 2026)', 'Lo IAS 1 oggi (fino al 2026)'),
        body: t(
          '**Complete set**: statement of financial position; statement of profit or loss and OCI; statement of changes in equity; statement of cash flows (IAS 7); notes; comparatives.\n\n**General features**: fair presentation, going concern, accrual basis, materiality and aggregation, no offsetting unless required/permitted, consistency.\n\n**Flexibility**: few mandatory line items; current/non-current split (or liquidity order); expenses analysed **by nature or by function**. No required operating profit subtotal — the source of the comparability problem.\n\nFrom **1 January 2027**, IFRS 18 replaces IAS 1. Many IAS 1 requirements (going concern, complete set, balance sheet, equity statement) are carried forward largely unchanged.',
          '**Bilancio completo**: prospetto della situazione patrimoniale-finanziaria; prospetto dell\'utile/perdita e delle altre componenti di conto economico complessivo (OCI); prospetto delle variazioni di patrimonio netto; rendiconto finanziario (IAS 7); note; dati comparativi.\n\n**Caratteristiche generali**: rappresentazione attendibile, continuità aziendale, competenza, rilevanza e aggregazione, divieto di compensazione salvo diversa previsione, uniformità.\n\n**Flessibilità**: poche voci obbligatorie; distinzione corrente/non corrente (o per liquidità); costi analizzati **per natura o per destinazione**. Nessun subtotale operativo obbligatorio — l\'origine del problema di comparabilità.\n\nDal **1° gennaio 2027** l\'IFRS 18 sostituisce lo IAS 1. Molti requisiti dello IAS 1 (continuità, bilancio completo, stato patrimoniale, prospetto del PN) sono ripresi in larga parte invariati.'
        )
      },
      {
        type: 'technical',
        title: t('IFRS 18: five categories, two new subtotals', 'IFRS 18: cinque categorie, due nuovi subtotali'),
        body: t(
          'Issued April 2024; effective for annual periods beginning on or after **1 January 2027**, applied **retrospectively**, early application permitted; **endorsed by the EU in February 2026**.\n\nIncome and expenses are classified into:\n- **Operating** — the residual category, including main business activities\n- **Investing** — returns from associates and JVs (equity method), cash and cash equivalents, other assets generating returns largely independently\n- **Financing** — expenses on liabilities from raising finance (loans, bonds) and interest on other liabilities (e.g. lease liabilities, unwinding of provisions)\n- **Income taxes**\n- **Discontinued operations**\n\nRequired subtotals: **operating profit**; **profit before financing and income taxes**; profit or loss. Entities whose main business is investing or providing finance (e.g. banks) classify some of these items in operating.',
          'Emanato ad aprile 2024; in vigore per gli esercizi che iniziano dal **1° gennaio 2027**, con applicazione **retroattiva** e possibilità di adozione anticipata; **omologato dall\'UE a febbraio 2026**.\n\nRicavi e costi si classificano in:\n- **Operativa** — categoria residuale, che include le attività principali\n- **Investimento** — rendimenti da collegate e JV (metodo del PN), disponibilità liquide, altre attività che generano rendimenti in modo largamente indipendente\n- **Finanziamento** — oneri su passività derivanti dalla raccolta di finanza (prestiti, obbligazioni) e interessi su altre passività (es. passività per leasing, attualizzazione dei fondi)\n- **Imposte sul reddito**\n- **Attività operative cessate**\n\nSubtotali obbligatori: **risultato operativo**; **risultato prima degli oneri finanziari e delle imposte**; utile o perdita. Le entità la cui attività principale è investire o finanziare (es. banche) classificano alcune di queste voci nella categoria operativa.'
        )
      },
      {
        type: 'technical',
        title: t('Management-defined performance measures (MPMs)', 'Gli indicatori di performance definiti dal management (MPM)'),
        body: t(
          'An **MPM** is a subtotal of income and expenses that the company uses in public communications outside the financial statements (e.g. "adjusted EBIT"), to communicate management\'s view of performance, and that is not a subtotal specified by IFRS.\n\nIFRS 18 requires, in **a single note**:\n- a description of the measure and why it is useful\n- a **reconciliation** to the most directly comparable IFRS subtotal\n- the **income tax and NCI effect** of each reconciling item\n\nSome subtotals are excluded from the definition — notably gross profit and **operating profit before depreciation, amortisation and IAS 36 impairments**, so an EBITDA defined exactly that way is not an MPM.\n\nAlso: better **aggregation/disaggregation** rules; companies presenting expenses by function must disclose specified by-nature amounts (D&A, employee benefits, impairments, inventory write-downs).',
          'Un **MPM** è un subtotale di ricavi e costi che la società usa nelle comunicazioni pubbliche al di fuori del bilancio (es. "EBIT adjusted") per trasmettere la visione del management sulla performance, e che non è un subtotale previsto dagli IFRS.\n\nL\'IFRS 18 richiede, in **un\'unica nota**:\n- descrizione dell\'indicatore e motivi della sua utilità\n- **riconciliazione** con il subtotale IFRS più direttamente comparabile\n- **effetto fiscale e sulle interessenze di terzi** di ciascuna voce di riconciliazione\n\nAlcuni subtotali sono esclusi dalla definizione — in particolare il margine lordo e il **risultato operativo prima di ammortamenti e svalutazioni IAS 36**, quindi un EBITDA definito esattamente così non è un MPM.\n\nInoltre: regole più stringenti di **aggregazione/disaggregazione**; chi presenta i costi per destinazione deve indicare in nota alcuni costi per natura (ammortamenti, benefici ai dipendenti, svalutazioni, svalutazioni delle rimanenze).'
        )
      },
      {
        type: 'formula',
        formulas: [
          {
            name: t('IFRS 18 subtotals (general corporate)', 'Subtotali IFRS 18 (società industriale/commerciale)'),
            expr: 'Operating profit + Investing category = Profit before financing and income taxes;  − Financing category = Profit before tax;  − Income taxes ± Discontinued operations = Profit or loss'
          }
        ],
        note: t(
          'IAS 7 is amended at the same time: the indirect method starts from **operating profit**; for general corporates interest and dividends **paid** go to financing, interest and dividends **received** to investing — removing today\'s options.',
          'Contestualmente cambia lo IAS 7: il metodo indiretto parte dal **risultato operativo**; per le società non finanziarie interessi e dividendi **pagati** vanno nel finanziamento, interessi e dividendi **incassati** nell\'investimento — eliminando le opzioni attuali.'
        )
      },
      {
        type: 'example',
        title: t('Rho plc under IFRS 18 (€m)', 'Rho plc secondo l\'IFRS 18 (€m)'),
        body: t('A general corporate (main business is not investing or financing).', 'Una società industriale (l\'attività principale non è investire né finanziare).'),
        table: {
          headers: [t('Line', 'Voce'), t('Category', 'Categoria'), t('€m', '€m')],
          rows: [
            [t('Revenue', 'Ricavi'), t('Operating', 'Operativa'), '1,000'],
            [t('Cost of sales', 'Costo del venduto'), t('Operating', 'Operativa'), '(600)'],
            [t('SG&A', 'Spese generali, amministrative e commerciali'), t('Operating', 'Operativa'), '(200)'],
            [t('Operating profit', 'Risultato operativo'), '', '200'],
            [t('Share of profit of associates', 'Quota di utile delle collegate'), t('Investing', 'Investimento'), '20'],
            [t('Interest income on cash', 'Interessi attivi sulla liquidità'), t('Investing', 'Investimento'), '5'],
            [t('Profit before financing and income taxes', 'Risultato prima degli oneri finanziari e delle imposte'), '', '225'],
            [t('Interest on bank loans and lease liabilities', 'Interessi su finanziamenti bancari e passività per leasing'), t('Financing', 'Finanziamento'), '(30)'],
            [t('Profit before tax', 'Risultato prima delle imposte'), '', '195']
          ],
          totalRows: [3, 6, 8]
        }
      },
      {
        type: 'realworld',
        body: t(
          'For bankers IFRS 18 changes the raw material of every comps sheet from FY2027 (with restated FY2026 comparatives). "Operating profit" becomes a defined, audited line, and company-specific "adjusted EBITDA" must be reconciled in the notes with tax effects. Expect breaks in historical time series — when you pull data from FactSet or Bloomberg, check whether the provider has restated prior years on the new basis.',
          'Per i banker l\'IFRS 18 cambia la materia prima di ogni comps sheet dal 2027 (con comparativi 2026 rideterminati). Il "risultato operativo" diventa una voce definita e soggetta a revisione, e l\'"EBITDA adjusted" della singola società va riconciliato in nota con gli effetti fiscali. Attenditi discontinuità nelle serie storiche — quando scarichi dati da FactSet o Bloomberg, verifica se il provider ha rideterminato gli anni precedenti sulla nuova base.'
        )
      },
      { type: 'exercise', questionId: 'acc-ifrsfw-q1' },
      { type: 'exercise', questionId: 'acc-ifrsfw-q2' },
      { type: 'exercise', questionId: 'acc-ifrsfw-q3' },
      {
        type: 'interview',
        question: t('What is IFRS 18 and why should a banker care?', 'Cos\'è l\'IFRS 18 e perché dovrebbe interessare a un banker?'),
        answer: t(
          'IFRS 18 replaces IAS 1 for periods starting on or after 1 January 2027. It classifies income and expenses into operating, investing, financing, income taxes and discontinued operations, and requires two new subtotals: operating profit and profit before financing and income taxes. It also brings management-defined performance measures — company "adjusted" metrics — into the audited notes, reconciled to IFRS subtotals with tax and NCI effects. For a banker it means more comparable operating profit across peers, but also restated histories and new definitions to align in comps and models.',
          'L\'IFRS 18 sostituisce lo IAS 1 per gli esercizi che iniziano dal 1° gennaio 2027. Classifica ricavi e costi in operativi, di investimento, di finanziamento, imposte e attività cessate, e impone due nuovi subtotali: il risultato operativo e il risultato prima degli oneri finanziari e delle imposte. Porta inoltre gli indicatori di performance definiti dal management — le metriche "adjusted" — nelle note sottoposte a revisione, riconciliati con i subtotali IFRS con effetti fiscali e sui terzi. Per un banker significa un risultato operativo più confrontabile tra i peers, ma anche serie storiche rideterminate e nuove definizioni da allineare nei comps e nei modelli.'
        )
      },
      {
        type: 'mistakes',
        items: [
          t('Saying IFRS 18 changes recognition or measurement. It is a presentation and disclosure standard: net income does not change.', 'Dire che l\'IFRS 18 cambia rilevazione o valutazione. È un principio di presentazione e informativa: l\'utile netto non cambia.'),
          t('Putting share of profit of associates in operating profit. Under IFRS 18 equity-accounted results are investing.', 'Inserire la quota di utile delle collegate nel risultato operativo. Con l\'IFRS 18 i risultati valutati a PN sono nella categoria investimento.'),
          t('Thinking the Conceptual Framework overrides a standard. It never does.', 'Pensare che il Conceptual Framework prevalga su un principio. Non accade mai.'),
          t('Assuming IFRS 18 is optional in the EU. It was endorsed in February 2026 and is mandatory from 2027.', 'Ritenere che l\'IFRS 18 sia facoltativo nell\'UE. È stato omologato a febbraio 2026 ed è obbligatorio dal 2027.')
        ]
      },
      {
        type: 'summary',
        items: [
          t('Framework 2018: relevance + faithful representation; elements; measurement bases. Not a standard.', 'Framework 2018: rilevanza + rappresentazione fedele; elementi; criteri di valutazione. Non è un principio.'),
          t('IFRS 18 replaces IAS 1 from 1 January 2027 (retrospective; EU-endorsed).', 'L\'IFRS 18 sostituisce lo IAS 1 dal 1° gennaio 2027 (retroattivo; omologato UE).'),
          t('Categories: operating, investing, financing, income taxes, discontinued; subtotals: operating profit, profit before financing and income taxes.', 'Categorie: operativa, investimento, finanziamento, imposte, attività cessate; subtotali: risultato operativo, risultato prima di oneri finanziari e imposte.'),
          t('MPMs: single note, reconciliation to IFRS subtotal, tax and NCI effects.', 'MPM: nota unica, riconciliazione al subtotale IFRS, effetti fiscali e sui terzi.')
        ]
      }
    ],
    questions: [
      {
        id: 'acc-ifrsfw-q1',
        kind: 'grid',
        topic: 'ifrs-presentation',
        difficulty: 2,
        objective: t('Compute IFRS 18 subtotals.', 'Calcolare i subtotali IFRS 18.'),
        prompt: t(
          'Tau S.p.A. (general corporate, €m): revenue 800; cost of sales 500; distribution and admin 150; share of profit of a JV 12; dividend income on a 5% equity investment 3; interest expense on bonds 25. Fill in the subtotals.',
          'Tau S.p.A. (società industriale, €m): ricavi 800; costo del venduto 500; costi commerciali e amministrativi 150; quota di utile di una JV 12; dividendi da una partecipazione del 5% 3; interessi passivi su obbligazioni 25. Completa i subtotali.'
        ),
        columns: [t('Subtotal', 'Subtotale'), t('€m', '€m')],
        unit: '€m',
        rows: [
          { label: t('Operating profit', 'Risultato operativo'), cells: [{ answer: 150, verify: { fn: 'sum', args: [800, -500, -150] } }] },
          { label: t('Profit before financing and income taxes', 'Risultato prima degli oneri finanziari e delle imposte'), cells: [{ answer: 165, verify: { fn: 'sum', args: [150, 12, 3] } }] },
          { label: t('Profit before tax', 'Risultato prima delle imposte'), cells: [{ answer: 140, verify: { fn: 'sum', args: [165, -25] } }] }
        ],
        explanation: t(
          'Operating = 800 − 500 − 150 = 150. JV share and dividends on an investment generating returns independently are investing: 150 + 12 + 3 = 165. Bond interest is financing: 165 − 25 = 140.',
          'Operativo = 800 − 500 − 150 = 150. La quota della JV e i dividendi su un investimento che genera rendimenti in modo indipendente sono nella categoria investimento: 150 + 12 + 3 = 165. Gli interessi sulle obbligazioni sono finanziamento: 165 − 25 = 140.'
        )
      },
      {
        id: 'acc-ifrsfw-q2',
        kind: 'mcq',
        topic: 'ifrs-presentation',
        difficulty: 1,
        objective: t('Know the IFRS 18 effective date.', 'Conoscere la decorrenza dell\'IFRS 18.'),
        prompt: t('From when must IFRS 18 be applied (EU and IASB)?', 'Da quando si applica obbligatoriamente l\'IFRS 18 (UE e IASB)?'),
        choices: [
          t('Annual periods beginning on or after 1 January 2025', 'Esercizi che iniziano dal 1° gennaio 2025'),
          t('Annual periods beginning on or after 1 January 2027, retrospectively', 'Esercizi che iniziano dal 1° gennaio 2027, con applicazione retroattiva'),
          t('Annual periods beginning on or after 1 January 2027, prospectively only', 'Esercizi che iniziano dal 1° gennaio 2027, solo prospetticamente'),
          t('Only on first-time adoption of IFRS', 'Solo in prima adozione degli IFRS')
        ],
        correct: 1,
        explanation: t(
          'IFRS 18 is effective for annual periods beginning on or after 1 January 2027 and is applied retrospectively, so comparatives are restated; early application is permitted. The EU endorsed it in February 2026 with the same date.',
          'L\'IFRS 18 è in vigore per gli esercizi che iniziano dal 1° gennaio 2027 e si applica retroattivamente, quindi i comparativi vengono rideterminati; è ammessa l\'adozione anticipata. L\'UE lo ha omologato a febbraio 2026 con la stessa data.'
        )
      },
      {
        id: 'acc-ifrsfw-q3',
        kind: 'multi',
        topic: 'ifrs-presentation',
        difficulty: 3,
        objective: t('Identify MPM disclosure requirements.', 'Individuare l\'informativa richiesta sugli MPM.'),
        prompt: t('For each management-defined performance measure, IFRS 18 requires… Select all that apply.', 'Per ogni indicatore di performance definito dal management, l\'IFRS 18 richiede… Seleziona tutte le risposte corrette.'),
        choices: [
          t('A reconciliation to the most directly comparable IFRS subtotal', 'Una riconciliazione con il subtotale IFRS più direttamente comparabile'),
          t('The income tax effect of each reconciling item', 'L\'effetto fiscale di ogni voce di riconciliazione'),
          t('Presentation of the MPM on the face of the income statement', 'L\'esposizione dell\'MPM nel prospetto di conto economico'),
          t('The effect on non-controlling interests of each reconciling item', 'L\'effetto sulle interessenze di terzi di ogni voce di riconciliazione'),
          t('An explanation of why the measure is useful', 'Una spiegazione del perché l\'indicatore è utile')
        ],
        correct: [0, 1, 3, 4],
        explanation: t(
          'MPM disclosures go in a single note: description and usefulness, reconciliation to the closest IFRS subtotal, and tax and NCI effects for each reconciling item. MPMs are disclosed in the notes, not required on the face of the income statement.',
          'L\'informativa sugli MPM va in un\'unica nota: descrizione e utilità, riconciliazione al subtotale IFRS più vicino, effetti fiscali e sui terzi per ogni voce. Gli MPM si illustrano nelle note, non è richiesta l\'esposizione nel prospetto di conto economico.'
        )
      },
      {
        id: 'acc-ifrsfw-q4',
        kind: 'mcq',
        topic: 'ifrs-presentation',
        difficulty: 2,
        objective: t('Classify interest under the amended IAS 7.', 'Classificare gli interessi secondo lo IAS 7 modificato.'),
        prompt: t('From 2027, where does a general corporate classify interest paid in its cash flow statement?', 'Dal 2027, dove classifica una società industriale gli interessi pagati nel rendiconto finanziario?'),
        choices: [
          t('Operating or financing, as an accounting policy choice', 'Operativa o finanziamento, a scelta come principio contabile'),
          t('Operating activities', 'Attività operativa'),
          t('Investing activities', 'Attività di investimento'),
          t('Financing activities', 'Attività di finanziamento')
        ],
        correct: 3,
        explanation: t(
          'The IAS 7 amendments issued with IFRS 18 remove the choice: for entities without a specified main business activity, interest paid is financing; interest received is investing. The policy choice is today\'s IAS 7 regime, and "operating" is the US GAAP rule.',
          'Le modifiche allo IAS 7 emanate con l\'IFRS 18 eliminano la scelta: per le entità senza un\'attività principale specifica, gli interessi pagati sono nel finanziamento e quelli incassati nell\'investimento. La scelta è il regime attuale dello IAS 7, e "operativa" è la regola US GAAP.'
        )
      }
    ],
    flashcards: [
      { id: 'fc-acc-ifrsfw-1', topic: 'ifrs-presentation', front: t('Two fundamental qualitative characteristics (Framework 2018)?', 'Le due caratteristiche qualitative fondamentali (Framework 2018)?'), back: t('Relevance (incl. materiality) and faithful representation.', 'Rilevanza (inclusa la significatività) e rappresentazione fedele.') },
      { id: 'fc-acc-ifrsfw-2', topic: 'ifrs-presentation', front: t('IFRS 18 effective date?', 'Decorrenza dell\'IFRS 18?'), back: t('Annual periods beginning on or after 1 January 2027; retrospective; EU-endorsed February 2026.', 'Esercizi che iniziano dal 1° gennaio 2027; retroattivo; omologato UE a febbraio 2026.') },
      { id: 'fc-acc-ifrsfw-3', topic: 'ifrs-presentation', front: t('IFRS 18 income statement categories?', 'Categorie del conto economico IFRS 18?'), back: t('Operating, investing, financing, income taxes, discontinued operations.', 'Operativa, investimento, finanziamento, imposte sul reddito, attività operative cessate.') },
      { id: 'fc-acc-ifrsfw-4', topic: 'ifrs-presentation', front: t('Two new required subtotals in IFRS 18?', 'I due nuovi subtotali obbligatori dell\'IFRS 18?'), back: t('Operating profit; profit before financing and income taxes.', 'Risultato operativo; risultato prima degli oneri finanziari e delle imposte.') },
      { id: 'fc-acc-ifrsfw-5', topic: 'ifrs-presentation', front: t('What is an MPM?', 'Cos\'è un MPM?'), back: t('A subtotal of income and expenses used in public communications, reflecting management\'s view of performance, not specified by IFRS — disclosed and reconciled in one note.', 'Un subtotale di ricavi e costi usato nelle comunicazioni pubbliche, che riflette la visione del management, non previsto dagli IFRS — illustrato e riconciliato in un\'unica nota.') }
    ],
    sources: [
      { label: 'IFRS Foundation — IFRS 18 Presentation and Disclosure in Financial Statements (issued April 2024, effective 1 January 2027)', url: 'https://www.ifrs.org/issued-standards/list-of-standards/ifrs-18-presentation-and-disclosure-in-financial-statements/' },
      { label: 'EFRAG — Endorsement status (IFRS 18 endorsed February 2026)', url: 'https://www.efrag.org/en/financial-reporting/endorsement-status' },
      { label: 'IFRS Foundation — Conceptual Framework for Financial Reporting (2018)', url: 'https://www.ifrs.org/issued-standards/list-of-standards/conceptual-framework/' }
    ]
  },
  /* ------------------------------------------------------------ */
  {
    id: 'acc-ifrs-15',
    academyId: 'accounting',
    moduleId: 'A4',
    mode: 'quick',
    minutes: 8,
    difficulty: 2,
    reviewed: '2026-10',
    objective: t(
      'Apply the IFRS 15 five-step model, allocate a transaction price across performance obligations and decide whether revenue is recognised over time or at a point in time.',
      'Applicare il modello in cinque fasi dell\'IFRS 15, allocare il prezzo dell\'operazione tra le obbligazioni di fare e stabilire se il ricavo si rileva nel corso del tempo o in un momento preciso.'
    ),
    screens: [
      {
        type: 'intuition',
        title: t('Revenue follows what the customer gets', 'Il ricavo segue ciò che riceve il cliente'),
        body: t(
          'A customer pays €1,000 upfront for a software licence plus two years of support. Has the company earned €1,000 on day one? No — it has delivered the licence, but still owes two years of service.\n\nIFRS 15 answers one question: **when does the customer obtain control of what it paid for, and how much of the price belongs to each promise?**',
          'Un cliente paga €1.000 anticipati per una licenza software più due anni di assistenza. La società ha guadagnato €1.000 il primo giorno? No — ha consegnato la licenza, ma deve ancora due anni di servizio.\n\nL\'IFRS 15 risponde a una domanda: **quando il cliente ottiene il controllo di ciò che ha pagato, e quanta parte del prezzo spetta a ciascuna promessa?**'
        )
      },
      {
        type: 'technical',
        title: t('The five steps', 'Le cinque fasi'),
        body: t(
          '1. **Identify the contract** — approved, enforceable rights and payment terms, commercial substance, collection probable.\n2. **Identify the performance obligations** — each promise of a **distinct** good or service (customer can benefit from it on its own and it is separately identifiable in the contract).\n3. **Determine the transaction price** — incl. **variable consideration** (discounts, bonuses, penalties), included only to the extent a significant reversal is highly unlikely (the "constraint"); adjust for significant financing components.\n4. **Allocate the price** to each obligation in proportion to **stand-alone selling prices** (SSP).\n5. **Recognise revenue** when (or as) each obligation is satisfied — i.e. control transfers.\n\nIFRS 15 is effective since **1 January 2018**; the US equivalent, ASC 606, is substantially converged.',
          '1. **Identificare il contratto** — approvato, con diritti e termini di pagamento esigibili, sostanza commerciale, incasso probabile.\n2. **Identificare le obbligazioni di fare** (performance obligations) — ogni promessa di un bene o servizio **distinto** (il cliente può beneficiarne autonomamente ed è identificabile separatamente nel contratto).\n3. **Determinare il prezzo dell\'operazione** — inclusi i **corrispettivi variabili** (sconti, bonus, penali), rilevati solo se è altamente improbabile un significativo storno futuro (il "vincolo"); rettifica per componenti finanziarie significative.\n4. **Allocare il prezzo** a ciascuna obbligazione in proporzione ai **prezzi di vendita a sé stanti** (stand-alone selling price, SSP).\n5. **Rilevare il ricavo** quando (o man mano che) ciascuna obbligazione è adempiuta — cioè quando si trasferisce il controllo.\n\nL\'IFRS 15 è in vigore dal **1° gennaio 2018**; l\'equivalente US, l\'ASC 606, è sostanzialmente convergente.'
        )
      },
      {
        type: 'technical',
        title: t('Over time or at a point in time?', 'Nel corso del tempo o in un momento preciso?'),
        body: t(
          'Revenue is recognised **over time** if any one of these is met:\n- the customer simultaneously receives and consumes the benefits as the entity performs (e.g. cleaning, support services);\n- the entity\'s performance creates or enhances an asset the customer controls (e.g. building on the customer\'s land);\n- the asset has **no alternative use** to the entity and the entity has an **enforceable right to payment** for performance to date (e.g. bespoke equipment).\n\nOtherwise revenue is recognised **at a point in time** — when control passes (indicators: right to payment, legal title, physical possession, risks and rewards, acceptance).\n\n**Principal vs agent**: if the entity controls the good before transfer it reports revenue **gross**; if it only arranges for another party to provide it, **net** (the commission).',
          'Il ricavo si rileva **nel corso del tempo** se è soddisfatta almeno una condizione:\n- il cliente riceve e consuma simultaneamente i benefici man mano che l\'entità adempie (es. pulizie, servizi di assistenza);\n- la prestazione crea o migliora un\'attività controllata dal cliente (es. costruzione sul terreno del cliente);\n- il bene **non ha un uso alternativo** per l\'entità e questa ha un **diritto esigibile al pagamento** della prestazione completata fino a quel momento (es. impianti su misura).\n\nAltrimenti il ricavo si rileva **in un momento preciso** — quando passa il controllo (indicatori: diritto al pagamento, titolo legale, possesso fisico, rischi e benefici, accettazione).\n\n**Principal vs agent**: se l\'entità controlla il bene prima del trasferimento rileva il ricavo **lordo**; se si limita a far sì che un terzo lo fornisca, rileva il ricavo **netto** (la commissione).'
        )
      },
      {
        type: 'formula',
        formulas: [
          {
            name: t('Relative stand-alone selling price allocation', 'Allocazione in base ai prezzi di vendita a sé stanti'),
            expr: 'Price allocated to obligation i = Transaction price × SSP_i ÷ Σ SSP',
            vars: [
              { sym: 'SSP_i', desc: t('Price at which the entity would sell obligation i separately', 'Prezzo a cui l\'entità venderebbe separatamente l\'obbligazione i') }
            ]
          }
        ]
      },
      {
        type: 'example',
        title: t('Licence + 2-year support for €1,000k', 'Licenza + 2 anni di assistenza per €1.000k'),
        body: t(
          'SSPs: licence €800k, support €400k (total €1,200k). The licence is transferred on day one (point in time); support is delivered evenly over 24 months (over time). Cash received upfront.',
          'SSP: licenza €800k, assistenza €400k (totale €1.200k). La licenza si trasferisce il primo giorno (momento preciso); l\'assistenza è resa uniformemente in 24 mesi (nel corso del tempo). Incasso anticipato.'
        ),
        table: {
          headers: [t('€k', '€k'), t('Allocation', 'Allocazione'), t('Year 1 revenue', 'Ricavi anno 1'), t('Year 2 revenue', 'Ricavi anno 2')],
          rows: [
            [t('Licence', 'Licenza'), '1,000 × 800/1,200 = 666.7', '666.7', '—'],
            [t('Support', 'Assistenza'), '1,000 × 400/1,200 = 333.3', '166.7', '166.7'],
            [t('Total', 'Totale'), '1,000.0', '833.3', '166.7']
          ],
          totalRows: [2]
        }
      },
      {
        type: 'realworld',
        body: t(
          'For SaaS and engineering targets, IFRS 15 drives the gap between **bookings, billings and revenue**. Upfront cash creates **contract liabilities** (deferred revenue) — an operating working-capital item that a buyer will often debate as "debt-like" in the SPA. On long-term contracts, revenue over time depends on cost-to-complete estimates: due diligence teams stress-test them because margin reversals hit EBITDA directly.',
          'Per i target SaaS e di ingegneria, l\'IFRS 15 determina la differenza tra **ordini acquisiti, fatturato e ricavi**. Gli incassi anticipati generano **passività contrattuali** (ricavi differiti) — una voce del circolante che l\'acquirente spesso discute come "debt-like" nello SPA. Nelle commesse pluriennali, i ricavi nel tempo dipendono dalle stime dei costi a finire: i team di due diligence le sottopongono a stress test perché le correzioni di margine colpiscono direttamente l\'EBITDA.'
        )
      },
      { type: 'exercise', questionId: 'acc-ifrs15-q1' },
      { type: 'exercise', questionId: 'acc-ifrs15-q2' },
      { type: 'exercise', questionId: 'acc-ifrs15-q3' },
      {
        type: 'interview',
        question: t('A company sells a machine with a three-year maintenance contract for one price. How do you recognise revenue?', 'Una società vende un macchinario con un contratto di manutenzione triennale a un prezzo unico. Come rilevi i ricavi?'),
        answer: t(
          'I would apply the five-step model. The machine and the maintenance are two distinct performance obligations, so I allocate the total price based on their relative stand-alone selling prices. Revenue on the machine is recognised at a point in time, when the customer obtains control — typically delivery or acceptance. Maintenance revenue is recognised over time, usually straight-line over the three years. Cash received in advance for maintenance sits on the balance sheet as a contract liability.',
          'Applicherei il modello in cinque fasi. Macchinario e manutenzione sono due obbligazioni di fare distinte, quindi alloco il prezzo totale in base ai rispettivi prezzi di vendita a sé stanti. Il ricavo del macchinario si rileva in un momento preciso, quando il cliente ne ottiene il controllo — di solito alla consegna o al collaudo. Il ricavo della manutenzione si rileva nel corso del tempo, di norma a quote costanti nei tre anni. L\'incasso anticipato per la manutenzione resta in bilancio come passività contrattuale.'
        )
      },
      {
        type: 'mistakes',
        items: [
          t('Allocating the price on contractual list prices instead of stand-alone selling prices.', 'Allocare il prezzo in base ai prezzi di listino contrattuali anziché ai prezzi di vendita a sé stanti.'),
          t('Including variable consideration (e.g. a performance bonus) in full without applying the constraint.', 'Includere integralmente un corrispettivo variabile (es. un bonus di performance) senza applicare il vincolo.'),
          t('Treating cash collection as the revenue trigger. Control transfer drives recognition.', 'Considerare l\'incasso come momento di rilevazione del ricavo. Conta il trasferimento del controllo.'),
          t('Reporting gross revenue for a marketplace that never controls the goods — it is an agent.', 'Esporre ricavi lordi per un marketplace che non controlla mai i beni — è un agent.')
        ]
      },
      {
        type: 'summary',
        items: [
          t('Five steps: contract → performance obligations → transaction price → allocation → recognition.', 'Cinque fasi: contratto → obbligazioni di fare → prezzo → allocazione → rilevazione.'),
          t('Allocate by relative stand-alone selling prices; constrain variable consideration.', 'Allocare in base ai prezzi a sé stanti relativi; applicare il vincolo ai corrispettivi variabili.'),
          t('Over time if one of three criteria is met; otherwise at the point control transfers.', 'Nel corso del tempo se ricorre uno dei tre criteri; altrimenti quando si trasferisce il controllo.'),
          t('Principal = gross, agent = net; upfront cash = contract liability.', 'Principal = lordo, agent = netto; incasso anticipato = passività contrattuale.')
        ]
      }
    ],
    questions: [
      {
        id: 'acc-ifrs15-q1',
        kind: 'numeric',
        topic: 'revenue-recognition',
        difficulty: 2,
        objective: t('Allocate a transaction price on relative SSPs.', 'Allocare il prezzo dell\'operazione in base agli SSP relativi.'),
        prompt: t(
          'A bundle sells for €900k: equipment (SSP €750k) and 3-year service (SSP €250k). How much revenue (€k) is allocated to the equipment?',
          'Un pacchetto è venduto a €900k: impianto (SSP €750k) e servizio triennale (SSP €250k). Quanto ricavo (€k) si alloca all\'impianto?'
        ),
        answer: 675,
        unit: '€k',
        verify: { fn: 'product', args: [900, 0.75] },
        explanation: t(
          '900 × 750 / (750 + 250) = 900 × 0.75 = 675. Allocating the full SSP of 750 to the equipment would leave only 150 for the service and overstate upfront revenue; the €100k bundle discount is spread proportionally.',
          '900 × 750 / (750 + 250) = 900 × 0,75 = 675. Allocare all\'impianto l\'intero SSP di 750 lascerebbe solo 150 al servizio e anticiperebbe i ricavi; lo sconto di €100k si ripartisce proporzionalmente.'
        )
      },
      {
        id: 'acc-ifrs15-q2',
        kind: 'numeric',
        topic: 'revenue-recognition',
        difficulty: 2,
        objective: t('Compute revenue recognised over time.', 'Calcolare il ricavo rilevato nel corso del tempo.'),
        prompt: t(
          'Same bundle: equipment delivered on 1 January; the service runs evenly over 3 years from that date. Total revenue in year 1 (€k)?',
          'Stesso pacchetto: impianto consegnato il 1° gennaio; il servizio è reso uniformemente per 3 anni da quella data. Ricavi totali nell\'anno 1 (€k)?'
        ),
        answer: 750,
        unit: '€k',
        verify: { fn: 'sum', args: [675, 75] },
        steps: [t('Service allocation: 900 − 675 = 225', 'Allocazione al servizio: 900 − 675 = 225'), t('Year 1 service: 225 / 3 = 75', 'Servizio anno 1: 225 / 3 = 75'), t('675 + 75 = 750', '675 + 75 = 750')],
        explanation: t(
          'Equipment revenue (675) at delivery plus one third of the service allocation (225 / 3 = 75) = 750. The remaining 150 is deferred as a contract liability if cash was received upfront.',
          'Ricavo dell\'impianto (675) alla consegna più un terzo dell\'allocazione al servizio (225 / 3 = 75) = 750. I restanti 150 sono differiti come passività contrattuale se l\'incasso è anticipato.'
        )
      },
      {
        id: 'acc-ifrs15-q3',
        kind: 'order',
        topic: 'revenue-recognition',
        difficulty: 1,
        objective: t('Recall the five-step model.', 'Ricordare il modello in cinque fasi.'),
        prompt: t('Put the IFRS 15 steps in order.', 'Metti in ordine le fasi dell\'IFRS 15.'),
        items: [
          t('Identify the contract with the customer', 'Identificare il contratto con il cliente'),
          t('Identify the performance obligations', 'Identificare le obbligazioni di fare'),
          t('Determine the transaction price', 'Determinare il prezzo dell\'operazione'),
          t('Allocate the price to the performance obligations', 'Allocare il prezzo alle obbligazioni di fare'),
          t('Recognise revenue when (or as) obligations are satisfied', 'Rilevare il ricavo quando (o man mano che) le obbligazioni sono adempiute')
        ],
        explanation: t('Contract, obligations, price, allocation, recognition — you cannot allocate before knowing both the obligations and the price.', 'Contratto, obbligazioni, prezzo, allocazione, rilevazione — non si può allocare senza conoscere sia le obbligazioni sia il prezzo.')
      },
      {
        id: 'acc-ifrs15-q4',
        kind: 'mcq',
        topic: 'revenue-recognition',
        difficulty: 2,
        objective: t('Distinguish principal from agent.', 'Distinguere principal da agent.'),
        prompt: t(
          'An online travel platform sells a €500 hotel room; it never controls the room and keeps a €75 commission. Revenue under IFRS 15?',
          'Una piattaforma di viaggi online vende una camera d\'albergo da €500; non controlla mai la camera e trattiene una commissione di €75. Ricavo secondo l\'IFRS 15?'
        ),
        choices: [t('€500', '€500'), t('€425', '€425'), t('€75', '€75'), t('Zero until the guest checks out', 'Zero fino al check-out dell\'ospite')],
        correct: 2,
        explanation: t(
          'The platform is an agent: it arranges for the hotel to provide the service without controlling it, so it recognises its commission (€75) net. €500 would be the principal (gross) presentation; €425 is the amount owed to the hotel.',
          'La piattaforma è un agent: fa sì che l\'hotel fornisca il servizio senza controllarlo, quindi rileva la commissione (€75) al netto. €500 sarebbe l\'esposizione da principal (lorda); €425 è l\'importo dovuto all\'hotel.'
        )
      }
    ],
    flashcards: [
      { id: 'fc-acc-ifrs15-1', topic: 'revenue-recognition', front: t('IFRS 15 five steps?', 'Le cinque fasi dell\'IFRS 15?'), back: t('Contract; performance obligations; transaction price; allocation; recognition when/as satisfied.', 'Contratto; obbligazioni di fare; prezzo; allocazione; rilevazione all\'adempimento.') },
      { id: 'fc-acc-ifrs15-2', topic: 'revenue-recognition', front: t('Three criteria for revenue over time?', 'I tre criteri per il ricavo nel corso del tempo?'), back: t('Customer simultaneously receives/consumes benefits; performance creates an asset the customer controls; no alternative use + enforceable right to payment.', 'Il cliente riceve e consuma simultaneamente i benefici; la prestazione crea un\'attività controllata dal cliente; nessun uso alternativo + diritto esigibile al pagamento.') },
      { id: 'fc-acc-ifrs15-3', topic: 'revenue-recognition', front: t('What is the variable consideration constraint?', 'Cos\'è il vincolo sui corrispettivi variabili?'), back: t('Include variable amounts only to the extent it is highly probable that a significant revenue reversal will not occur.', 'Si includono importi variabili solo se è altamente probabile che non si verifichi un significativo storno dei ricavi.') },
      { id: 'fc-acc-ifrs15-4', topic: 'revenue-recognition', front: t('IFRS 15 effective date?', 'Decorrenza dell\'IFRS 15?'), back: t('Annual periods beginning on or after 1 January 2018.', 'Esercizi che iniziano dal 1° gennaio 2018.') }
    ],
    sources: [{ label: 'IFRS Foundation — IFRS 15 Revenue from Contracts with Customers', url: 'https://www.ifrs.org/issued-standards/list-of-standards/ifrs-15-revenue-from-contracts-with-customers/' }]
  },
  /* ------------------------------------------------------------ */
  {
    id: 'acc-ifrs-16',
    academyId: 'accounting',
    moduleId: 'A4',
    mode: 'deep',
    minutes: 14,
    difficulty: 2,
    reviewed: '2026-10',
    objective: t(
      'Measure a lessee\'s lease liability and right-of-use asset under IFRS 16, trace the effects on the three statements, and keep EBITDA, net debt and valuation multiples consistent.',
      'Misurare la passività per leasing e il diritto d\'uso del locatario secondo l\'IFRS 16, seguirne gli effetti sui tre prospetti e mantenere coerenti EBITDA, posizione finanziaria netta e multipli di valutazione.'
    ),
    screens: [
      {
        type: 'intuition',
        title: t('A rent contract is a loan in disguise', 'Un contratto di affitto è un finanziamento mascherato'),
        body: t(
          'A retailer signing a 10-year shop lease has committed to pay rent for a decade — economically, it has borrowed money to "buy" the use of the shop.\n\nBefore 2019, operating leases stayed off balance sheet: rent was just an operating cost. **IFRS 16** brings almost all leases on balance sheet: an **asset** (the right to use the shop) and a **liability** (the obligation to pay rent).',
          'Un retailer che firma un contratto di locazione decennale per un negozio si è impegnato a pagare canoni per dieci anni — economicamente, si è indebitato per "acquistare" l\'uso del negozio.\n\nPrima del 2019 i leasing operativi restavano fuori bilancio: il canone era solo un costo operativo. L\'**IFRS 16** porta in bilancio quasi tutti i leasing: un\'**attività** (il diritto di usare il negozio) e una **passività** (l\'obbligo di pagare i canoni).'
        )
      },
      {
        type: 'technical',
        title: t('The lessee model', 'Il modello del locatario'),
        body: t(
          'Effective for annual periods beginning on or after **1 January 2019**. A lease = a contract conveying the right to **control the use** of an identified asset for a period in exchange for consideration.\n\n**At commencement**\n- **Lease liability** = PV of lease payments not yet paid (fixed payments, index-linked payments, residual value guarantees, purchase options reasonably certain to be exercised), discounted at the **rate implicit** in the lease or, if not determinable, the **incremental borrowing rate**.\n- **Right-of-use (ROU) asset** = lease liability + payments made at or before commencement + initial direct costs + estimated restoration costs − lease incentives received.\n\n**Exemptions (optional)**: short-term leases (≤ 12 months) and leases of low-value assets — expensed straight-line.\n\nLessor accounting is largely unchanged (finance vs operating lease).',
          'In vigore per gli esercizi che iniziano dal **1° gennaio 2019**. Leasing = contratto che trasferisce il diritto di **controllare l\'utilizzo** di un bene identificato per un periodo, in cambio di un corrispettivo.\n\n**Alla data di decorrenza**\n- **Passività per leasing** = valore attuale dei pagamenti non ancora versati (canoni fissi, canoni indicizzati, garanzie sul valore residuo, opzioni di acquisto ragionevolmente certe), attualizzati al **tasso implicito** del leasing o, se non determinabile, al **tasso di finanziamento marginale**.\n- **Diritto d\'uso (ROU)** = passività per leasing + pagamenti effettuati alla data o prima + costi diretti iniziali + costi stimati di ripristino − incentivi ricevuti.\n\n**Esenzioni (facoltative)**: leasing a breve termine (≤ 12 mesi) e beni di modesto valore — costo a quote costanti.\n\nLa contabilizzazione del locatore resta sostanzialmente invariata (leasing finanziario vs operativo).'
        )
      },
      {
        type: 'formula',
        formulas: [
          {
            name: t('Lease liability at commencement (payments in arrears)', 'Passività per leasing alla decorrenza (canoni posticipati)'),
            expr: 'Lease liability = Σ Payment_t ÷ (1 + r)^t = P × [1 − (1 + r)^−n] ÷ r',
            vars: [
              { sym: 'P', desc: t('Annual lease payment', 'Canone annuo') },
              { sym: 'r', desc: t('Implicit rate or incremental borrowing rate', 'Tasso implicito o tasso di finanziamento marginale') },
              { sym: 'n', desc: t('Lease term in years', 'Durata del leasing in anni') }
            ]
          },
          {
            name: t('Subsequent measurement', 'Valutazione successiva'),
            expr: 'Interest = r × Opening liability;  Closing liability = Opening + Interest − Payment;  ROU depreciation = ROU ÷ lease term (straight-line)'
          }
        ]
      },
      {
        type: 'example',
        title: t('€100k a year for 5 years at 6%', '€100k l\'anno per 5 anni al 6%'),
        body: t(
          'Lease liability = 100 × [1 − 1.06^−5] / 0.06 = **€421.2k** = ROU asset (no other costs). Year 1 vs the old "rent expense" view:',
          'Passività per leasing = 100 × [1 − 1,06^−5] / 0,06 = **€421,2k** = diritto d\'uso (nessun altro costo). Anno 1 rispetto alla vecchia logica del "canone a costo":'
        ),
        table: {
          headers: [t('Year 1, €k', 'Anno 1, €k'), t('Pre-IFRS 16 (rent)', 'Pre-IFRS 16 (canone)'), t('IFRS 16', 'IFRS 16'), t('Difference', 'Differenza')],
          rows: [
            [t('Operating costs (rent)', 'Costi operativi (canone)'), '(100.0)', '—', '+100.0'],
            [t('EBITDA effect', 'Effetto sull\'EBITDA'), '(100.0)', '0.0', '+100.0'],
            [t('Depreciation of ROU (421.2 / 5)', 'Ammortamento del diritto d\'uso (421,2 / 5)'), '—', '(84.2)', '(84.2)'],
            [t('EBIT effect', 'Effetto sull\'EBIT'), '(100.0)', '(84.2)', '+15.8'],
            [t('Interest (6% × 421.2)', 'Interessi (6% × 421,2)'), '—', '(25.3)', '(25.3)'],
            [t('Pre-tax profit effect', 'Effetto sull\'utile ante imposte'), '(100.0)', '(109.5)', '(9.5)'],
            [t('Liability at end of year 1 (421.2 + 25.3 − 100)', 'Passività a fine anno 1 (421,2 + 25,3 − 100)'), '—', '346.5', '']
          ],
          totalRows: [1, 3, 5]
        }
      },
      {
        type: 'technical',
        title: t('Effects on the three statements', 'Effetti sui tre prospetti'),
        body: t(
          '- **Income statement**: rent disappears from operating costs → **EBITDA up**; replaced by depreciation and interest. Total expense is **front-loaded** (interest is higher early on), though over the full term it equals total payments.\n- **Balance sheet**: ROU asset and lease liability gross up assets and debt → leverage ratios rise, ROCE falls.\n- **Cash flow**: total cash paid is unchanged. The **principal** portion moves to **financing**; interest is operating or financing per policy under current IAS 7 (financing from 2027 under the IFRS 18 amendments) → **operating cash flow up**, financing cash flow down.\n\nNothing changes economically — the company pays the same rent.',
          '- **Conto economico**: il canone esce dai costi operativi → **EBITDA più alto**; al suo posto ammortamento e interessi. Il costo totale è **anticipato** nei primi anni (gli interessi sono più alti all\'inizio), anche se sull\'intera durata coincide con i canoni totali.\n- **Stato patrimoniale**: diritto d\'uso e passività per leasing gonfiano attivo e debito → gli indici di leva salgono, il ROCE scende.\n- **Rendiconto finanziario**: la cassa pagata non cambia. La quota **capitale** passa nel **finanziamento**; gli interessi sono operativi o di finanziamento a scelta secondo lo IAS 7 attuale (di finanziamento dal 2027 con le modifiche IFRS 18) → **flusso operativo più alto**, flusso di finanziamento più basso.\n\nEconomicamente non cambia nulla — la società paga gli stessi canoni.'
        )
      },
      {
        type: 'technical',
        title: t('Valuation: stay consistent', 'Valutazione: restare coerenti'),
        body: t(
          'Two internally consistent approaches:\n\n**A — "Post-IFRS 16"**: EBITDA excludes lease costs → **include lease liabilities in net debt**. EV/EBITDA multiples from peers must be on the same basis. In a DCF, unlevered FCF excludes lease payments, so subtract lease liabilities in the EV-to-equity bridge (and reflect leases in the WACC capital structure).\n\n**B — "Pre-IFRS 16" (EBITDAaL / EBITDA after leases)**: deduct lease payments as an operating cost → **exclude lease liabilities** from net debt.\n\nMixing them — IFRS 16 EBITDA with net debt excluding leases — overstates equity value. Many leveraged loan agreements still define covenants on a pre-IFRS 16 or "frozen GAAP" basis; always check.',
          'Due approcci internamente coerenti:\n\n**A — "Post-IFRS 16"**: l\'EBITDA esclude i costi di leasing → **le passività per leasing entrano nella PFN**. I multipli EV/EBITDA dei peers devono essere sulla stessa base. In un DCF il FCF unlevered esclude i canoni, quindi si sottraggono le passività per leasing nel ponte da EV a equity (e si riflettono nella struttura del capitale del WACC).\n\n**B — "Pre-IFRS 16" (EBITDAaL / EBITDA after leases)**: i canoni si deducono come costo operativo → **le passività per leasing si escludono** dalla PFN.\n\nMescolarli — EBITDA IFRS 16 con PFN senza leasing — sovrastima l\'equity value. Molti contratti di finanziamento leveraged definiscono ancora i covenant su base pre-IFRS 16 o "frozen GAAP"; verifica sempre.'
        )
      },
      {
        type: 'realworld',
        body: t(
          'In sectors with heavy leases — retail, airlines, telecom towers, restaurants — IFRS 16 adoption in 2019 raised reported EBITDA by double-digit percentages overnight and added billions of lease liabilities. Equity research and ratings agencies now report both "EBITDA" and "EBITDAaL", and leverage "including" and "excluding" leases. In a pitch book comps table, the footnote explaining the lease treatment is not optional.',
          'Nei settori con molti leasing — retail, compagnie aeree, torri di telecomunicazione, ristorazione — l\'adozione dell\'IFRS 16 nel 2019 ha aumentato l\'EBITDA pubblicato di percentuali a doppia cifra da un giorno all\'altro, aggiungendo miliardi di passività per leasing. Equity research e agenzie di rating riportano oggi sia l\'"EBITDA" sia l\'"EBITDAaL", e la leva "inclusi" ed "esclusi" i leasing. Nella tabella dei comparables di un pitch book, la nota sul trattamento dei leasing non è facoltativa.'
        )
      },
      { type: 'exercise', questionId: 'acc-ifrs16-q1' },
      { type: 'exercise', questionId: 'acc-ifrs16-q2' },
      { type: 'exercise', questionId: 'acc-ifrs16-q3' },
      { type: 'exercise', questionId: 'acc-ifrs16-q4' },
      {
        type: 'interview',
        question: t('How does IFRS 16 affect EBITDA, net debt and enterprise value?', 'Come incide l\'IFRS 16 su EBITDA, posizione finanziaria netta ed enterprise value?'),
        answer: t(
          'IFRS 16 removes lease rents from operating costs and replaces them with depreciation of the right-of-use asset and interest on the lease liability, so EBITDA goes up. The lease liability is debt-like, so net debt goes up too. In theory enterprise value should not change because the cash flows are the same — what matters is consistency: if I use post-IFRS 16 EBITDA I include lease liabilities in net debt and use peer multiples on the same basis; if I use EBITDA after leases, I exclude them.',
          'L\'IFRS 16 toglie i canoni dai costi operativi e li sostituisce con l\'ammortamento del diritto d\'uso e gli interessi sulla passività per leasing, quindi l\'EBITDA aumenta. La passività per leasing è debt-like, quindi aumenta anche la PFN. In teoria l\'enterprise value non cambia perché i flussi di cassa sono gli stessi — conta la coerenza: se uso l\'EBITDA post-IFRS 16 includo le passività per leasing nella PFN e uso multipli dei peers sulla stessa base; se uso l\'EBITDA after leases, le escludo.'
        )
      },
      {
        type: 'mistakes',
        items: [
          t('Saying IFRS 16 increases operating cash generation. Total cash paid is identical; only the classification moves.', 'Dire che l\'IFRS 16 aumenta la cassa generata. I pagamenti totali sono identici; cambia solo la classificazione.'),
          t('Using IFRS 16 EBITDA with net debt that excludes lease liabilities — the most common valuation error.', 'Usare l\'EBITDA IFRS 16 con una PFN che esclude le passività per leasing — l\'errore di valutazione più comune.'),
          t('Thinking the total expense is the same every year. It is front-loaded because interest declines over time.', 'Pensare che il costo totale sia uguale ogni anno. È anticipato perché gli interessi diminuiscono nel tempo.'),
          t('Forgetting the short-term and low-value exemptions, which stay in operating costs.', 'Dimenticare le esenzioni per breve termine e modesto valore, che restano nei costi operativi.')
        ]
      },
      {
        type: 'summary',
        items: [
          t('Lessee: ROU asset + lease liability (PV of payments) for nearly all leases since 2019.', 'Locatario: diritto d\'uso + passività per leasing (VA dei canoni) per quasi tutti i leasing dal 2019.'),
          t('P&L: depreciation + interest replace rent → EBITDA up, expense front-loaded.', 'Conto economico: ammortamento + interessi sostituiscono il canone → EBITDA più alto, costo anticipato.'),
          t('Cash flow: principal in financing → CFO up; total cash unchanged.', 'Flussi: quota capitale nel finanziamento → flusso operativo più alto; cassa totale invariata.'),
          t('Valuation: post-IFRS 16 EBITDA ↔ lease liabilities in net debt; EBITDAaL ↔ exclude them.', 'Valutazione: EBITDA post-IFRS 16 ↔ leasing nella PFN; EBITDAaL ↔ esclusi.')
        ]
      }
    ],
    questions: [
      {
        id: 'acc-ifrs16-q1',
        kind: 'numeric',
        topic: 'leases',
        difficulty: 2,
        objective: t('Measure a lease liability at commencement.', 'Misurare la passività per leasing alla decorrenza.'),
        prompt: t(
          'A lessee signs a 4-year lease with annual payments of €50k in arrears; incremental borrowing rate 5%. Lease liability at commencement (€k)?',
          'Un locatario firma un leasing di 4 anni con canoni annui posticipati di €50k; tasso di finanziamento marginale 5%. Passività per leasing alla decorrenza (€k)?'
        ),
        answer: 177.3,
        unit: '€k',
        tolerance: { abs: 0.1 },
        verify: { fn: 'leaseLiability', args: [50, 0.05, 4] },
        explanation: t(
          'PV of an annuity: 50 × [1 − 1.05^−4] / 0.05 = 177.3. The undiscounted total (200) is wrong: IFRS 16 measures the liability at present value.',
          'Valore attuale di una rendita: 50 × [1 − 1,05^−4] / 0,05 = 177,3. Il totale non attualizzato (200) è errato: l\'IFRS 16 misura la passività al valore attuale.'
        )
      },
      {
        id: 'acc-ifrs16-q2',
        kind: 'numeric',
        topic: 'leases',
        difficulty: 2,
        objective: t('Compute year-1 interest on the lease liability.', 'Calcolare gli interessi del primo anno sulla passività per leasing.'),
        prompt: t('Same lease: interest expense in year 1 (€k)?', 'Stesso leasing: interessi passivi nell\'anno 1 (€k)?'),
        answer: 8.86,
        unit: '€k',
        tolerance: { abs: 0.02 },
        verify: { fn: 'product', args: [177.2975, 0.05] },
        explanation: t(
          '5% × 177.3 = 8.86. The year-1 depreciation would be 177.3 / 4 = 44.3, so total year-1 expense 53.2 exceeds the 50 payment — the front-loading effect.',
          '5% × 177,3 = 8,86. L\'ammortamento dell\'anno 1 sarebbe 177,3 / 4 = 44,3, quindi il costo totale dell\'anno 1 (53,2) supera il canone di 50 — l\'effetto di anticipazione.'
        )
      },
      {
        id: 'acc-ifrs16-q3',
        kind: 'multi',
        topic: 'leases',
        difficulty: 2,
        objective: t('Identify the statement effects of IFRS 16 vs expensing rent.', 'Individuare gli effetti dell\'IFRS 16 rispetto al canone a costo.'),
        prompt: t('Compared with expensing rent, IFRS 16 (lessee) in the first year of a lease… Select all that apply.', 'Rispetto al canone a costo, l\'IFRS 16 (locatario) nel primo anno di un leasing… Seleziona tutte le risposte corrette.'),
        choices: [
          t('Increases EBITDA', 'Aumenta l\'EBITDA'),
          t('Increases operating cash flow', 'Aumenta il flusso di cassa operativo'),
          t('Increases total cash paid to the lessor', 'Aumenta la cassa totale pagata al locatore'),
          t('Reduces pre-tax profit', 'Riduce l\'utile ante imposte'),
          t('Reduces reported net debt', 'Riduce la PFN')
        ],
        correct: [0, 1, 3],
        explanation: t(
          'EBITDA rises (no rent in opex); operating cash flow rises (principal goes to financing); pre-tax profit falls in early years (depreciation + interest > rent). Cash paid is unchanged, and net debt increases by the lease liability.',
          'L\'EBITDA aumenta (niente canone nei costi operativi); il flusso operativo aumenta (la quota capitale va nel finanziamento); l\'utile ante imposte diminuisce nei primi anni (ammortamento + interessi > canone). La cassa pagata non cambia e la PFN aumenta della passività per leasing.'
        )
      },
      {
        id: 'acc-ifrs16-q4',
        kind: 'mcq',
        topic: 'leases',
        difficulty: 3,
        objective: t('Apply consistent lease treatment in an EV bridge.', 'Applicare un trattamento coerente dei leasing nel ponte EV-equity.'),
        prompt: t(
          'You value a retailer at 8.0x post-IFRS 16 EBITDA of €100m (peers on the same basis). Financial debt net of cash is €200m; lease liabilities are €250m. Equity value?',
          'Valuti un retailer a 8,0x l\'EBITDA post-IFRS 16 di €100m (peers sulla stessa base). Il debito finanziario al netto della cassa è €200m; le passività per leasing sono €250m. Equity value?'
        ),
        choices: [t('€600m', '€600m'), t('€350m', '€350m'), t('€800m', '€800m'), t('€550m', '€550m')],
        correct: 1,
        explanation: t(
          'EV = 8.0 × 100 = 800. Because EBITDA excludes lease costs, lease liabilities are debt: equity = 800 − 200 − 250 = 350. €600m forgets the leases and overstates equity by €250m.',
          'EV = 8,0 × 100 = 800. Poiché l\'EBITDA esclude i costi di leasing, le passività per leasing sono debito: equity = 800 − 200 − 250 = 350. €600m dimentica i leasing e sovrastima l\'equity di €250m.'
        )
      }
    ],
    flashcards: [
      { id: 'fc-acc-ifrs16-1', topic: 'leases', front: t('IFRS 16 lease liability at commencement?', 'Passività per leasing IFRS 16 alla decorrenza?'), back: t('PV of unpaid lease payments at the implicit rate (or incremental borrowing rate).', 'VA dei canoni non ancora pagati al tasso implicito (o al tasso di finanziamento marginale).') },
      { id: 'fc-acc-ifrs16-2', topic: 'leases', front: t('IFRS 16 lessee exemptions?', 'Esenzioni IFRS 16 per il locatario?'), back: t('Short-term leases (≤ 12 months) and low-value assets — optional.', 'Leasing a breve termine (≤ 12 mesi) e beni di modesto valore — facoltative.') },
      { id: 'fc-acc-ifrs16-3', topic: 'leases', front: t('IFRS 16 effect on EBITDA and net debt?', 'Effetto IFRS 16 su EBITDA e PFN?'), back: t('Both increase: rent leaves opex; lease liability is added to debt.', 'Aumentano entrambi: il canone esce dai costi operativi; la passività per leasing si aggiunge al debito.') },
      { id: 'fc-acc-ifrs16-4', topic: 'leases', front: t('What is EBITDAaL?', 'Cos\'è l\'EBITDAaL?'), back: t('EBITDA after leases: lease costs deducted as opex — pair it with net debt excluding lease liabilities.', 'EBITDA after leases: i costi di leasing dedotti come costi operativi — va abbinato a una PFN senza passività per leasing.') },
      { id: 'fc-acc-ifrs16-5', topic: 'leases', front: t('IFRS 16 effective date?', 'Decorrenza dell\'IFRS 16?'), back: t('Annual periods beginning on or after 1 January 2019.', 'Esercizi che iniziano dal 1° gennaio 2019.') }
    ],
    sources: [{ label: 'IFRS Foundation — IFRS 16 Leases', url: 'https://www.ifrs.org/issued-standards/list-of-standards/ifrs-16-leases/' }]
  },
  /* ------------------------------------------------------------ */
  {
    id: 'acc-ifrs-9',
    academyId: 'accounting',
    moduleId: 'A4',
    mode: 'quick',
    minutes: 7,
    difficulty: 2,
    reviewed: '2026-10',
    objective: t(
      'Classify financial assets under IFRS 9 (business model + SPPI test) and compute expected credit losses with the three-stage model.',
      'Classificare le attività finanziarie secondo l\'IFRS 9 (modello di business + test SPPI) e calcolare le perdite attese su crediti con il modello a tre stadi.'
    ),
    screens: [
      {
        type: 'intuition',
        title: t('Two questions decide the measurement', 'Due domande decidono la valutazione'),
        body: t(
          'For any financial asset, IFRS 9 asks: **what are its cash flows** (just principal and interest, or something else)? And **what does the company do with it** (hold to collect, or trade)?\n\nThe answers decide whether it is held at amortised cost or fair value. Separately, IFRS 9 forces lenders to provide for credit losses **before** they happen — the lesson banks learned in 2008.',
          'Per ogni attività finanziaria l\'IFRS 9 si chiede: **quali flussi genera** (solo capitale e interessi, o altro)? E **cosa ne fa la società** (la detiene per incassare, o la negozia)?\n\nLe risposte decidono se va al costo ammortizzato o al fair value. Inoltre l\'IFRS 9 obbliga a stanziare le perdite su crediti **prima** che si verifichino — la lezione che le banche hanno imparato nel 2008.'
        )
      },
      {
        type: 'technical',
        title: t('Classification and measurement', 'Classificazione e valutazione'),
        body: t(
          'Effective since **1 January 2018** (replacing IAS 39).\n\n**Debt instruments**\n- **Amortised cost**: business model "hold to collect" + cash flows are **solely payments of principal and interest** (SPPI).\n- **FVOCI**: "hold to collect and sell" + SPPI; gains recycled to P&L on disposal.\n- **FVTPL**: everything else (trading, failing SPPI e.g. convertible bonds); fair value option to reduce an accounting mismatch.\n\n**Equity instruments**: **FVTPL** by default; irrevocable election for **FVOCI** if not held for trading — dividends in P&L, fair value changes in OCI **never recycled**.\n\n**Derivatives**: FVTPL unless designated in hedge accounting. **Liabilities**: mostly amortised cost.',
          'In vigore dal **1° gennaio 2018** (in sostituzione dello IAS 39).\n\n**Strumenti di debito**\n- **Costo ammortizzato**: modello di business "hold to collect" + flussi costituiti **solo da capitale e interessi** (SPPI).\n- **FVOCI**: "hold to collect and sell" + SPPI; utili e perdite riclassificati a conto economico alla cessione.\n- **FVTPL**: tutto il resto (trading, strumenti che falliscono il test SPPI, es. obbligazioni convertibili); fair value option per ridurre un mismatch contabile.\n\n**Strumenti di capitale**: **FVTPL** di default; opzione irrevocabile per il **FVOCI** se non detenuti per la negoziazione — dividendi a conto economico, variazioni di fair value in OCI **senza riciclo**.\n\n**Derivati**: FVTPL salvo designazione in hedge accounting. **Passività**: per lo più al costo ammortizzato.'
        )
      },
      {
        type: 'technical',
        title: t('Expected credit losses (ECL)', 'Le perdite attese su crediti (ECL)'),
        body: t(
          'Applies to debt assets at amortised cost or FVOCI, lease and trade receivables, contract assets, loan commitments and financial guarantees.\n\n- **Stage 1** (performing): **12-month ECL**; interest on gross carrying amount.\n- **Stage 2** (**significant increase in credit risk** since origination; rebuttable presumption at 30 days past due): **lifetime ECL**; interest on gross amount.\n- **Stage 3** (credit-impaired; e.g. default): lifetime ECL; interest on the **net** carrying amount.\n\n**Simplified approach**: trade receivables and contract assets without a significant financing component always use **lifetime ECL**, typically via a **provision matrix** by ageing bucket.',
          'Si applica alle attività di debito al costo ammortizzato o FVOCI, ai crediti commerciali e da leasing, alle attività contrattuali, agli impegni a erogare e alle garanzie finanziarie.\n\n- **Stadio 1** (in bonis): **ECL a 12 mesi**; interessi sul valore lordo.\n- **Stadio 2** (**aumento significativo del rischio di credito** dall\'origine; presunzione relativa a 30 giorni di scaduto): **ECL lifetime**; interessi sul valore lordo.\n- **Stadio 3** (deteriorato; es. default): ECL lifetime; interessi sul valore **netto**.\n\n**Approccio semplificato**: i crediti commerciali e le attività contrattuali senza componente finanziaria significativa usano sempre l\'**ECL lifetime**, di solito con una **matrice di accantonamento** per fasce di scaduto.'
        )
      },
      {
        type: 'formula',
        formulas: [
          {
            name: t('Expected credit loss (simplified single-period form)', 'Perdita attesa (forma semplificata a un periodo)'),
            expr: 'ECL = PD × LGD × EAD',
            vars: [
              { sym: 'PD', desc: t('Probability of default (12-month for stage 1, lifetime for stages 2–3)', 'Probabilità di default (12 mesi per lo stadio 1, lifetime per gli stadi 2–3)') },
              { sym: 'LGD', desc: t('Loss given default, % of exposure', 'Perdita in caso di default, % dell\'esposizione') },
              { sym: 'EAD', desc: t('Exposure at default', 'Esposizione al momento del default') }
            ]
          }
        ],
        note: t('Real models discount and weight multiple forward-looking macro scenarios.', 'I modelli reali attualizzano e ponderano più scenari macroeconomici prospettici.')
      },
      {
        type: 'example',
        title: t('A €10m loan moves from stage 1 to stage 2', 'Un prestito da €10m passa dallo stadio 1 allo stadio 2'),
        body: t('LGD 40%, EAD €10m. The borrower is downgraded: credit risk has increased significantly.', 'LGD 40%, EAD €10m. Il debitore viene declassato: il rischio di credito è aumentato in modo significativo.'),
        table: {
          headers: [t('€k', '€k'), t('PD', 'PD'), t('ECL', 'ECL')],
          rows: [
            [t('Stage 1 — 12-month', 'Stadio 1 — 12 mesi'), '1.5%', '0.015 × 0.40 × 10,000 = 60'],
            [t('Stage 2 — lifetime', 'Stadio 2 — lifetime'), '6.0%', '0.06 × 0.40 × 10,000 = 240'],
            [t('Additional impairment charge', 'Rettifica aggiuntiva a conto economico'), '', '180']
          ],
          totalRows: [2]
        }
      },
      {
        type: 'realworld',
        body: t(
          'For bank analysts, ECL is the "cost of risk" line that drives bank earnings; stage 2 migrations in a downturn hit P&L before any default — the "cliff effect". For corporate deals, IFRS 9 matters through trade receivables provisioning (a frequent due diligence adjustment), FVOCI equity stakes, and hedge accounting on acquisition financing.',
          'Per gli analisti bancari l\'ECL è la voce "costo del rischio" che guida gli utili delle banche; le migrazioni a stadio 2 in una recessione colpiscono il conto economico prima di qualsiasi default — il "cliff effect". Nei deal corporate l\'IFRS 9 conta per il fondo svalutazione crediti commerciali (rettifica frequente in due diligence), le partecipazioni FVOCI e l\'hedge accounting sui finanziamenti di acquisizione.'
        )
      },
      { type: 'exercise', questionId: 'acc-ifrs9-q1' },
      { type: 'exercise', questionId: 'acc-ifrs9-q2' },
      {
        type: 'interview',
        question: t('Why did IFRS 9 replace the incurred loss model?', 'Perché l\'IFRS 9 ha sostituito il modello delle perdite sostenute?'),
        answer: t(
          'Under IAS 39 losses were recognised only when there was objective evidence of impairment, which in 2008 was criticised as "too little, too late". IFRS 9 requires an expected credit loss allowance from day one: 12-month losses for performing assets, lifetime losses once credit risk has increased significantly or the asset is credit-impaired, using forward-looking information. Provisions build up earlier in a downturn.',
          'Con lo IAS 39 le perdite si rilevavano solo in presenza di evidenze oggettive di riduzione di valore, un approccio criticato nel 2008 come "too little, too late". L\'IFRS 9 richiede un fondo per perdite attese fin dal primo giorno: perdite a 12 mesi per le attività in bonis, lifetime quando il rischio di credito è aumentato significativamente o l\'attività è deteriorata, usando informazioni prospettiche. Gli accantonamenti crescono prima in una fase recessiva.'
        )
      },
      {
        type: 'mistakes',
        items: [
          t('Thinking equity FVOCI gains are recycled to P&L on sale. They never are.', 'Pensare che gli utili delle partecipazioni FVOCI siano riclassificati a conto economico alla cessione. Non lo sono mai.'),
          t('Applying 12-month ECL to trade receivables. The simplified approach uses lifetime ECL.', 'Applicare l\'ECL a 12 mesi ai crediti commerciali. L\'approccio semplificato usa l\'ECL lifetime.'),
          t('Classifying a convertible bond held as an investment at amortised cost — the conversion feature fails SPPI.', 'Classificare al costo ammortizzato un\'obbligazione convertibile detenuta come investimento — l\'opzione di conversione non supera il test SPPI.')
        ]
      },
      {
        type: 'summary',
        items: [
          t('Debt: amortised cost (hold to collect + SPPI), FVOCI (collect and sell + SPPI), else FVTPL.', 'Debito: costo ammortizzato (hold to collect + SPPI), FVOCI (collect and sell + SPPI), altrimenti FVTPL.'),
          t('Equity: FVTPL, or irrevocable FVOCI with no recycling.', 'Capitale: FVTPL, o FVOCI irrevocabile senza riciclo.'),
          t('ECL: stage 1 12-month; stages 2–3 lifetime; trade receivables simplified (lifetime).', 'ECL: stadio 1 a 12 mesi; stadi 2–3 lifetime; crediti commerciali semplificato (lifetime).')
        ]
      }
    ],
    questions: [
      {
        id: 'acc-ifrs9-q1',
        kind: 'numeric',
        topic: 'financial-instruments',
        difficulty: 2,
        objective: t('Compute a stage 2 lifetime ECL.', 'Calcolare un\'ECL lifetime di stadio 2.'),
        prompt: t(
          'A bank has a €5m loan now in stage 2. Lifetime PD 8%, LGD 45%, EAD €5m. Lifetime ECL (€k)?',
          'Una banca ha un prestito di €5m ora in stadio 2. PD lifetime 8%, LGD 45%, EAD €5m. ECL lifetime (€k)?'
        ),
        answer: 180,
        unit: '€k',
        verify: { fn: 'product', args: [0.08, 0.45, 5000] },
        explanation: t(
          '0.08 × 0.45 × 5,000 = 180. Using a 12-month PD would understate the allowance: once credit risk has increased significantly, IFRS 9 requires lifetime losses.',
          '0,08 × 0,45 × 5.000 = 180. Usare una PD a 12 mesi sottostimerebbe il fondo: con un aumento significativo del rischio di credito l\'IFRS 9 richiede perdite lifetime.'
        )
      },
      {
        id: 'acc-ifrs9-q2',
        kind: 'mcq',
        topic: 'financial-instruments',
        difficulty: 2,
        objective: t('Classify a financial asset under IFRS 9.', 'Classificare un\'attività finanziaria secondo l\'IFRS 9.'),
        prompt: t(
          'A corporate buys a plain fixed-rate government bond and plans to hold it to maturity to collect coupons and principal. Classification?',
          'Una società acquista un titolo di Stato a tasso fisso senza opzioni e intende detenerlo fino a scadenza per incassare cedole e capitale. Classificazione?'
        ),
        choices: [t('FVTPL', 'FVTPL'), t('FVOCI with no recycling', 'FVOCI senza riciclo'), t('Amortised cost', 'Costo ammortizzato'), t('FVOCI with recycling', 'FVOCI con riciclo')],
        correct: 2,
        explanation: t(
          'Hold-to-collect business model and SPPI cash flows → amortised cost. FVOCI with recycling requires a collect-and-sell model; FVOCI without recycling exists only for equity instruments; FVTPL is the residual category.',
          'Modello hold to collect e flussi SPPI → costo ammortizzato. Il FVOCI con riciclo richiede un modello collect and sell; il FVOCI senza riciclo esiste solo per gli strumenti di capitale; il FVTPL è la categoria residuale.'
        )
      },
      {
        id: 'acc-ifrs9-q3',
        kind: 'multi',
        topic: 'financial-instruments',
        difficulty: 2,
        objective: t('Recognise the three-stage ECL features.', 'Riconoscere le caratteristiche del modello ECL a tre stadi.'),
        prompt: t('Which statements about IFRS 9 impairment are correct? Select all that apply.', 'Quali affermazioni sull\'impairment IFRS 9 sono corrette? Seleziona tutte le risposte corrette.'),
        choices: [
          t('Stage 1 assets carry a 12-month ECL allowance', 'Le attività in stadio 1 hanno un fondo ECL a 12 mesi'),
          t('Moving to stage 2 requires an actual default', 'Il passaggio a stadio 2 richiede un default effettivo'),
          t('In stage 3, interest revenue is computed on the net carrying amount', 'In stadio 3 gli interessi attivi si calcolano sul valore netto'),
          t('There is a rebuttable presumption of significant increase in credit risk at 30 days past due', 'Esiste una presunzione relativa di aumento significativo del rischio a 30 giorni di scaduto'),
          t('Equity investments at FVOCI are subject to ECL', 'Le partecipazioni FVOCI sono soggette a ECL')
        ],
        correct: [0, 2, 3],
        explanation: t(
          'Stage 2 is triggered by a significant increase in credit risk, not default (that is stage 3). Equity instruments are not subject to impairment under IFRS 9 — FVOCI equity changes go to OCI permanently.',
          'Lo stadio 2 scatta con un aumento significativo del rischio di credito, non con il default (che è lo stadio 3). Gli strumenti di capitale non sono soggetti a impairment IFRS 9 — le variazioni delle partecipazioni FVOCI restano in OCI.'
        )
      }
    ],
    flashcards: [
      { id: 'fc-acc-ifrs9-1', topic: 'financial-instruments', front: t('Two tests for amortised cost (IFRS 9)?', 'I due test per il costo ammortizzato (IFRS 9)?'), back: t('Hold-to-collect business model + SPPI cash flows.', 'Modello di business hold to collect + flussi SPPI.') },
      { id: 'fc-acc-ifrs9-2', topic: 'financial-instruments', front: t('ECL by stage?', 'ECL per stadio?'), back: t('Stage 1: 12-month; stage 2: lifetime (SICR); stage 3: lifetime, interest on net amount.', 'Stadio 1: 12 mesi; stadio 2: lifetime (SICR); stadio 3: lifetime, interessi sul valore netto.') },
      { id: 'fc-acc-ifrs9-3', topic: 'financial-instruments', front: t('Simplified ECL approach applies to…?', 'L\'approccio ECL semplificato si applica a…?'), back: t('Trade receivables and contract assets (without significant financing component): always lifetime ECL.', 'Crediti commerciali e attività contrattuali (senza componente finanziaria significativa): sempre ECL lifetime.') },
      { id: 'fc-acc-ifrs9-4', topic: 'financial-instruments', front: t('Equity FVOCI election: recycling?', 'Opzione FVOCI per strumenti di capitale: riciclo?'), back: t('No — gains/losses stay in OCI; only dividends go to P&L.', 'No — utili e perdite restano in OCI; solo i dividendi vanno a conto economico.') }
    ],
    sources: [{ label: 'IFRS Foundation — IFRS 9 Financial Instruments', url: 'https://www.ifrs.org/issued-standards/list-of-standards/ifrs-9-financial-instruments/' }]
  },
  /* ------------------------------------------------------------ */
  {
    id: 'acc-ias-12',
    academyId: 'accounting',
    moduleId: 'A4',
    mode: 'quick',
    minutes: 8,
    difficulty: 2,
    reviewed: '2026-10',
    objective: t(
      'Identify temporary differences, compute deferred tax assets and liabilities under IAS 12, and explain how deferred taxes bridge accounting profit and taxable profit.',
      'Individuare le differenze temporanee, calcolare attività e passività per imposte differite secondo lo IAS 12 e spiegare come la fiscalità differita colleghi utile contabile e reddito imponibile.'
    ),
    screens: [
      {
        type: 'intuition',
        title: t('Two sets of books, one tax bill', 'Due contabilità, un\'unica imposta'),
        body: t(
          'Companies keep accounting books for investors and compute taxable income under tax law. The two often recognise the same item **at different times** — e.g. accelerated tax depreciation.\n\nDeferred tax records the tax effect of those timing gaps today, so that the tax expense in the income statement matches the accounting profit it relates to.',
          'Le società tengono la contabilità per gli investitori e calcolano il reddito imponibile secondo la normativa fiscale. Spesso le due rilevano la stessa voce **in momenti diversi** — ad esempio con ammortamenti fiscali accelerati.\n\nLa fiscalità differita rileva oggi l\'effetto fiscale di questi sfasamenti, così che le imposte a conto economico siano coerenti con l\'utile contabile a cui si riferiscono.'
        )
      },
      {
        type: 'technical',
        title: t('The balance sheet approach', 'L\'approccio patrimoniale'),
        body: t(
          'IAS 12 compares each asset\'s and liability\'s **carrying amount** with its **tax base** (the amount attributed to it for tax purposes).\n\n- **Taxable temporary difference** → future taxable amounts → **deferred tax liability (DTL)**. Typical: asset carrying amount > tax base (accelerated tax depreciation, fair value step-ups in acquisitions).\n- **Deductible temporary difference** → future deductions → **deferred tax asset (DTA)**. Typical: provisions deductible only when paid, tax-deductible losses carried forward.\n\n**Permanent differences** (e.g. non-deductible fines) never reverse → no deferred tax; they explain why the effective tax rate differs from the statutory rate.',
          'Lo IAS 12 confronta il **valore contabile** di ogni attività e passività con il suo **valore fiscale** (l\'importo attribuito ai fini fiscali).\n\n- **Differenza temporanea imponibile** → importi tassabili in futuro → **passività per imposte differite (DTL)**. Tipico: valore contabile dell\'attività > valore fiscale (ammortamenti fiscali accelerati, rivalutazioni a fair value nelle acquisizioni).\n- **Differenza temporanea deducibile** → deduzioni future → **attività per imposte anticipate (DTA)**. Tipico: fondi deducibili solo al pagamento, perdite fiscali riportabili.\n\nLe **differenze permanenti** (es. sanzioni indeducibili) non si riassorbono → nessuna fiscalità differita; spiegano perché l\'aliquota effettiva differisce da quella teorica.'
        )
      },
      {
        type: 'formula',
        formulas: [
          {
            name: t('Deferred tax', 'Fiscalità differita'),
            expr: 'DTL (or DTA) = Temporary difference × Tax rate expected to apply when it reverses',
            vars: [
              { sym: 'Temporary difference', desc: t('Carrying amount − tax base', 'Valore contabile − valore fiscale') },
              { sym: 'Tax rate', desc: t('Enacted or substantively enacted at the reporting date', 'Aliquota approvata o sostanzialmente approvata alla data di bilancio') }
            ]
          },
          {
            name: t('Total tax expense', 'Imposte totali a conto economico'),
            expr: 'Income tax expense = Current tax + Deferred tax (Δ DTL − Δ DTA)'
          }
        ],
        note: t(
          'Deferred taxes are **not discounted**. A DTA is recognised only to the extent that future taxable profit is **probable**.',
          'Le imposte differite **non si attualizzano**. Una DTA si rileva solo nella misura in cui è **probabile** un reddito imponibile futuro.'
        )
      },
      {
        type: 'example',
        title: t('Accelerated tax depreciation (Italian IRES 24%)', 'Ammortamento fiscale accelerato (IRES 24%)'),
        body: t(
          'Machine cost €1,000k. Accounting: 5 years straight-line (€200k/yr). Tax: hypothetically 4 years (€250k/yr). Pre-tax profit €500k. (For simplicity only IRES; IRAP at 3.9% standard rate has a different base.)',
          'Macchinario da €1.000k. Contabilmente: 5 anni a quote costanti (€200k/anno). Fiscalmente: ipotesi di 4 anni (€250k/anno). Utile ante imposte €500k. (Per semplicità solo IRES; l\'IRAP al 3,9% ordinario ha una base diversa.)'
        ),
        table: {
          headers: [t('End of year 1, €k', 'Fine anno 1, €k'), t('Amount', 'Importo')],
          rows: [
            [t('Carrying amount (1,000 − 200)', 'Valore contabile (1.000 − 200)'), '800'],
            [t('Tax base (1,000 − 250)', 'Valore fiscale (1.000 − 250)'), '750'],
            [t('Taxable temporary difference', 'Differenza temporanea imponibile'), '50'],
            [t('DTL (50 × 24%)', 'DTL (50 × 24%)'), '12'],
            [t('Current tax ((500 − 50) × 24%)', 'Imposte correnti ((500 − 50) × 24%)'), '108'],
            [t('Total tax expense (108 + 12) = 24% × 500', 'Imposte totali (108 + 12) = 24% × 500'), '120']
          ],
          totalRows: [5]
        }
      },
      {
        type: 'technical',
        title: t('Exceptions and recent amendments', 'Eccezioni e modifiche recenti'),
        body: t(
          '- **Goodwill**: no DTL on the initial recognition of goodwill.\n- **Initial recognition exemption**: no deferred tax on an asset/liability first recognised in a transaction that is not a business combination and affects neither accounting nor taxable profit — **but** since the 2021 amendment (effective 2023) it does not apply when the transaction creates equal taxable and deductible differences, e.g. **leases** and decommissioning obligations.\n- **Pillar Two** (May 2023 amendment): a mandatory temporary exception from recognising deferred taxes arising from the OECD global minimum tax rules.\n- Presentation: DTA and DTL are offset only if there is a legal right of set-off and they relate to the same tax authority.',
          '- **Avviamento**: nessuna DTL sulla rilevazione iniziale dell\'avviamento.\n- **Esenzione per la rilevazione iniziale**: nessuna fiscalità differita su un\'attività/passività rilevata inizialmente in un\'operazione che non è un\'aggregazione aziendale e non incide né sull\'utile contabile né sull\'imponibile — **ma** dalla modifica del 2021 (in vigore dal 2023) non si applica quando l\'operazione genera differenze imponibili e deducibili di pari importo, es. **leasing** e obblighi di smantellamento.\n- **Pillar Two** (modifica di maggio 2023): eccezione temporanea obbligatoria alla rilevazione di imposte differite derivanti dalla global minimum tax OCSE.\n- Presentazione: DTA e DTL si compensano solo in presenza di un diritto legale alla compensazione e se relative alla stessa autorità fiscale.'
        )
      },
      {
        type: 'realworld',
        body: t(
          'In M&A, deferred tax is everywhere: fair value step-ups in a share deal create **DTLs** that reduce net assets and increase goodwill; target **tax losses** (DTAs) may be valuable but are often restricted after a change of control. In LBO models, analysts track cash taxes separately from book tax — a large DTL reversal means future cash taxes above the P&L charge.',
          'Nell\'M&A la fiscalità differita è ovunque: le rivalutazioni a fair value in un share deal generano **DTL** che riducono l\'attivo netto e aumentano l\'avviamento; le **perdite fiscali** del target (DTA) possono avere valore ma sono spesso limitate dopo un cambio di controllo. Nei modelli LBO gli analisti seguono le imposte di cassa separatamente da quelle contabili — un forte riassorbimento di DTL significa imposte di cassa future superiori al costo a conto economico.'
        )
      },
      { type: 'exercise', questionId: 'acc-ias12-q1' },
      { type: 'exercise', questionId: 'acc-ias12-q2' },
      { type: 'exercise', questionId: 'acc-ias12-q3' },
      {
        type: 'interview',
        question: t('What creates a deferred tax liability? Give an example.', 'Cosa genera una passività per imposte differite? Fai un esempio.'),
        answer: t(
          'A DTL arises when an asset\'s carrying amount exceeds its tax base, so more tax will be paid in the future when the difference reverses. The classic example is accelerated tax depreciation: the company deducts more depreciation for tax than in its books, paying less tax today. Another is an M&A step-up: the acquirer revalues the target\'s assets to fair value, but in a share deal the tax base doesn\'t change, so the extra book depreciation won\'t be tax-deductible — that creates a DTL equal to the step-up times the tax rate.',
          'Una DTL nasce quando il valore contabile di un\'attività supera il suo valore fiscale, quindi in futuro, al riassorbimento, si pagheranno più imposte. L\'esempio classico è l\'ammortamento fiscale accelerato: la società deduce fiscalmente più ammortamento di quanto ne rilevi in bilancio e oggi paga meno imposte. Un altro è la rivalutazione in un\'acquisizione: l\'acquirente porta a fair value le attività del target, ma in uno share deal il valore fiscale non cambia, quindi il maggior ammortamento contabile non sarà deducibile — si crea una DTL pari alla rivalutazione per l\'aliquota.'
        )
      },
      {
        type: 'mistakes',
        items: [
          t('Recognising deferred tax on permanent differences.', 'Rilevare fiscalità differita su differenze permanenti.'),
          t('Recognising DTAs on tax losses without assessing probable future taxable profit.', 'Iscrivere DTA su perdite fiscali senza valutare la probabilità di redditi imponibili futuri.'),
          t('Discounting deferred taxes — IAS 12 prohibits it.', 'Attualizzare le imposte differite — lo IAS 12 lo vieta.'),
          t('Using the current year\'s rate when a different rate has been enacted for the reversal years.', 'Usare l\'aliquota dell\'anno quando è già stata approvata un\'aliquota diversa per gli anni di riassorbimento.')
        ]
      },
      {
        type: 'summary',
        items: [
          t('Temporary difference = carrying amount − tax base; × enacted rate = deferred tax.', 'Differenza temporanea = valore contabile − valore fiscale; × aliquota approvata = imposta differita.'),
          t('Asset carrying amount > tax base → DTL; < tax base (or tax losses) → DTA if recoverable.', 'Valore contabile dell\'attività > valore fiscale → DTL; < (o perdite fiscali) → DTA se recuperabile.'),
          t('Tax expense = current + deferred; no discounting; no DTL on initial goodwill.', 'Imposte = correnti + differite; niente attualizzazione; niente DTL sull\'avviamento iniziale.')
        ]
      }
    ],
    questions: [
      {
        id: 'acc-ias12-q1',
        kind: 'numeric',
        topic: 'deferred-tax',
        difficulty: 2,
        objective: t('Compute a deferred tax liability.', 'Calcolare una passività per imposte differite.'),
        prompt: t(
          'An asset has a carrying amount of €900k and a tax base of €600k. The enacted tax rate for the reversal years is 24%. DTL (€k)?',
          'Un\'attività ha un valore contabile di €900k e un valore fiscale di €600k. L\'aliquota approvata per gli anni di riassorbimento è il 24%. DTL (€k)?'
        ),
        answer: 72,
        unit: '€k',
        verify: { fn: 'product', args: [300, 0.24] },
        explanation: t('(900 − 600) × 24% = 72. Applying the rate to the carrying amount (216) or the tax base (144) is a common mix-up — only the difference matters.', '(900 − 600) × 24% = 72. Applicare l\'aliquota al valore contabile (216) o al valore fiscale (144) è un errore frequente — conta solo la differenza.')
      },
      {
        id: 'acc-ias12-q2',
        kind: 'mcq',
        topic: 'deferred-tax',
        difficulty: 2,
        objective: t('Classify a temporary difference.', 'Classificare una differenza temporanea.'),
        prompt: t(
          'A company books a €100k warranty provision; tax law allows the deduction only when repairs are paid. What arises?',
          'Una società accantona un fondo garanzia di €100k; la normativa fiscale consente la deduzione solo al momento delle riparazioni. Cosa si genera?'
        ),
        choices: [
          t('A deferred tax liability', 'Una passività per imposte differite'),
          t('A deferred tax asset, if future taxable profit is probable', 'Un\'attività per imposte anticipate, se è probabile un reddito imponibile futuro'),
          t('A permanent difference, no deferred tax', 'Una differenza permanente, nessuna fiscalità differita'),
          t('A current tax receivable', 'Un credito per imposte correnti')
        ],
        correct: 1,
        explanation: t(
          'The liability\'s carrying amount (100) exceeds its tax base (0): a deductible temporary difference → DTA, subject to recoverability. It is temporary, not permanent, because the deduction will be available when paid.',
          'Il valore contabile della passività (100) supera il valore fiscale (0): differenza temporanea deducibile → DTA, se recuperabile. È temporanea, non permanente, perché la deduzione spetterà al pagamento.'
        )
      },
      {
        id: 'acc-ias12-q3',
        kind: 'grid',
        topic: 'deferred-tax',
        difficulty: 2,
        objective: t('Split tax expense into current and deferred.', 'Scomporre le imposte in correnti e differite.'),
        prompt: t(
          'Pre-tax profit €2,000k. Tax depreciation exceeds book depreciation by €400k this year; no other differences. Tax rate 24%. Fill in.',
          'Utile ante imposte €2.000k. L\'ammortamento fiscale supera quello contabile di €400k nell\'anno; nessun\'altra differenza. Aliquota 24%. Completa.'
        ),
        columns: [t('Item', 'Voce'), t('€k', '€k')],
        unit: '€k',
        rows: [
          { label: t('Taxable profit', 'Reddito imponibile'), cells: [{ answer: 1600, verify: { fn: 'diff', args: [2000, 400] } }] },
          { label: t('Current tax', 'Imposte correnti'), cells: [{ answer: 384, verify: { fn: 'product', args: [1600, 0.24] } }] },
          { label: t('Deferred tax (increase in DTL)', 'Imposte differite (aumento della DTL)'), cells: [{ answer: 96, verify: { fn: 'product', args: [400, 0.24] } }] },
          { label: t('Total tax expense', 'Imposte totali'), cells: [{ answer: 480, verify: { fn: 'sum', args: [384, 96] } }] }
        ],
        explanation: t(
          'Taxable profit 2,000 − 400 = 1,600; current tax 384. DTL increase 400 × 24% = 96. Total 480 = 24% × 2,000: deferred tax realigns the P&L charge to accounting profit, while cash tax is only 384.',
          'Imponibile 2.000 − 400 = 1.600; imposte correnti 384. Aumento DTL 400 × 24% = 96. Totale 480 = 24% × 2.000: la fiscalità differita riallinea il costo a conto economico all\'utile contabile, mentre le imposte di cassa sono solo 384.'
        )
      }
    ],
    flashcards: [
      { id: 'fc-acc-ias12-1', topic: 'deferred-tax', front: t('Temporary difference definition (IAS 12)?', 'Definizione di differenza temporanea (IAS 12)?'), back: t('Difference between the carrying amount of an asset/liability and its tax base.', 'Differenza tra valore contabile di un\'attività/passività e il suo valore fiscale.') },
      { id: 'fc-acc-ias12-2', topic: 'deferred-tax', front: t('When is a DTA recognised?', 'Quando si iscrive una DTA?'), back: t('For deductible differences and unused tax losses/credits, to the extent future taxable profit is probable.', 'Per differenze deducibili e perdite/crediti fiscali non utilizzati, nella misura in cui è probabile un reddito imponibile futuro.') },
      { id: 'fc-acc-ias12-3', topic: 'deferred-tax', front: t('Are deferred taxes discounted?', 'Le imposte differite si attualizzano?'), back: t('No — IAS 12 prohibits discounting.', 'No — lo IAS 12 vieta l\'attualizzazione.') },
      { id: 'fc-acc-ias12-4', topic: 'deferred-tax', front: t('Italian standard corporate tax rates?', 'Aliquote ordinarie delle imposte societarie in Italia?'), back: t('IRES 24%; IRAP 3.9% standard rate (different, broader base; regional variations).', 'IRES 24%; IRAP 3,9% aliquota ordinaria (base diversa e più ampia; variazioni regionali).') }
    ],
    sources: [{ label: 'IFRS Foundation — IAS 12 Income Taxes (incl. 2021 and 2023 amendments)', url: 'https://www.ifrs.org/issued-standards/list-of-standards/ias-12-income-taxes/' }]
  },
  /* ------------------------------------------------------------ */
  {
    id: 'acc-ias-36',
    academyId: 'accounting',
    moduleId: 'A4',
    mode: 'quick',
    minutes: 9,
    difficulty: 2,
    reviewed: '2026-10',
    objective: t(
      'Perform an IAS 36 impairment test: identify CGUs, compute recoverable amount as the higher of FVLCD and value in use, allocate an impairment loss and apply the reversal rules.',
      'Svolgere un impairment test IAS 36: individuare le CGU, calcolare il valore recuperabile come il maggiore tra fair value al netto dei costi di dismissione e valore d\'uso, allocare la perdita e applicare le regole di ripristino.'
    ),
    screens: [
      {
        type: 'intuition',
        title: t('No asset can be worth more on paper than in reality', 'Nessun bene può valere più sulla carta che nella realtà'),
        body: t(
          'If a business bought for €1bn can now only generate cash worth €700m, keeping it at €1bn on the balance sheet would mislead investors.\n\nIAS 36 makes sure assets — and especially **goodwill** — are not carried above the amount the company can **recover**, either by using them or by selling them.',
          'Se un business pagato €1mld oggi è in grado di generare flussi che valgono solo €700m, mantenerlo a €1mld in bilancio ingannerebbe gli investitori.\n\nLo IAS 36 garantisce che le attività — e soprattutto l\'**avviamento** — non siano iscritte a un valore superiore a quanto la società può **recuperare**, usandole o vendendole.'
        )
      },
      {
        type: 'technical',
        title: t('When and at what level', 'Quando e a quale livello'),
        body: t(
          '**When to test**\n- At each reporting date, assess **indicators** (external: market value decline, higher interest rates, market cap below net assets; internal: obsolescence, restructuring, worse-than-budget performance) → test if any exist.\n- **Annually regardless of indicators**: goodwill, indefinite-life intangibles, intangibles not yet available for use.\n\n**Cash-generating unit (CGU)**: the smallest identifiable group of assets generating cash inflows largely independent of other assets. Goodwill is allocated to the CGU (or group of CGUs) expected to benefit from the synergies — at the lowest level monitored by management, **no larger than an operating segment**.',
          '**Quando fare il test**\n- A ogni data di bilancio si valutano gli **indicatori** (esterni: calo del valore di mercato, aumento dei tassi, capitalizzazione inferiore al patrimonio netto; interni: obsolescenza, ristrutturazioni, risultati inferiori al budget) → test se ne esiste almeno uno.\n- **Ogni anno a prescindere dagli indicatori**: avviamento, attività immateriali a vita utile indefinita, attività immateriali non ancora disponibili per l\'uso.\n\n**Unità generatrice di flussi finanziari (CGU)**: il più piccolo gruppo identificabile di attività che genera flussi in entrata ampiamente indipendenti. L\'avviamento si alloca alla CGU (o gruppo di CGU) che beneficia delle sinergie — al livello più basso monitorato dal management, **non più ampio di un settore operativo**.'
        )
      },
      {
        type: 'formula',
        formulas: [
          {
            name: t('Recoverable amount and impairment', 'Valore recuperabile e perdita di valore'),
            expr: 'Recoverable amount = max(FVLCD, Value in use);  Impairment loss = Carrying amount − Recoverable amount (if positive)',
            vars: [
              { sym: 'FVLCD', desc: t('Fair value less costs of disposal (IFRS 13)', 'Fair value al netto dei costi di dismissione (IFRS 13)') },
              { sym: 'Value in use', desc: t('PV of future cash flows from continuing use, at a pre-tax discount rate', 'VA dei flussi futuri dall\'uso continuativo, a un tasso ante imposte') }
            ]
          }
        ],
        note: t(
          'Value in use: cash flows for the asset in its **current condition** (no uncommitted restructurings or enhancing capex); budgets normally cover **max 5 years**; extrapolation growth should not exceed the long-term average growth of the market.',
          'Valore d\'uso: flussi del bene nelle **condizioni attuali** (niente ristrutturazioni non ancora deliberate né investimenti migliorativi); i piani coprono di norma **al massimo 5 anni**; il tasso di crescita di estrapolazione non dovrebbe superare la crescita media di lungo periodo del mercato.'
        )
      },
      {
        type: 'example',
        title: t('Testing CGU "Retail Italy" (€m)', 'Test della CGU "Retail Italia" (€m)'),
        body: t(
          'Carrying amount €1,000m: goodwill €200m, PP&E €600m, intangibles €200m. FVLCD €750m; value in use €780m.\n\nRecoverable amount = max(750, 780) = **780** → impairment **220**.\n\nAllocation: first **goodwill** (200, written off entirely), then the remaining **20 pro rata** to other assets — but no asset below the highest of its FVLCD, value in use and zero.',
          'Valore contabile €1.000m: avviamento €200m, immobilizzazioni materiali €600m, immateriali €200m. FVLCD €750m; valore d\'uso €780m.\n\nValore recuperabile = max(750, 780) = **780** → perdita **220**.\n\nAllocazione: prima all\'**avviamento** (200, azzerato), poi i restanti **20 pro quota** alle altre attività — ma nessuna sotto il maggiore tra il suo FVLCD, valore d\'uso e zero.'
        ),
        table: {
          headers: [t('€m', '€m'), t('Before', 'Prima'), t('Impairment', 'Svalutazione'), t('After', 'Dopo')],
          rows: [
            [t('Goodwill', 'Avviamento'), '200', '(200)', '0'],
            [t('PP&E (600/800 × 20)', 'Imm. materiali (600/800 × 20)'), '600', '(15)', '585'],
            [t('Intangibles (200/800 × 20)', 'Imm. immateriali (200/800 × 20)'), '200', '(5)', '195'],
            [t('CGU total', 'Totale CGU'), '1,000', '(220)', '780']
          ],
          totalRows: [3]
        }
      },
      {
        type: 'technical',
        title: t('Reversals', 'I ripristini di valore'),
        body: t(
          '- **Goodwill**: an impairment loss is **never reversed**.\n- **Other assets** (incl. finite-life intangibles): reverse if the estimates used to determine recoverable amount have changed; the increased carrying amount **cannot exceed** what it would have been (net of depreciation) had no impairment been recognised.\n\nUS GAAP prohibits reversals for assets held and used — a classic IFRS/US GAAP difference. Under the Italian Civil Code (art. 2426 n. 3) and OIC 9, reversals are allowed except for goodwill.',
          '- **Avviamento**: una perdita di valore **non si ripristina mai**.\n- **Altre attività** (incluse le immateriali a vita definita): ripristino se sono cambiate le stime usate per il valore recuperabile; il nuovo valore **non può superare** quello che si avrebbe avuto (al netto degli ammortamenti) in assenza della svalutazione.\n\nGli US GAAP vietano i ripristini per le attività detenute per l\'uso — una differenza classica IFRS/US GAAP. Nel Codice Civile (art. 2426 n. 3) e nell\'OIC 9 i ripristini sono ammessi salvo che per l\'avviamento.'
        )
      },
      {
        type: 'realworld',
        body: t(
          'Large goodwill write-downs often follow overpriced acquisitions — and they are a credibility event for management. Analysts treat impairments as **non-cash and non-recurring**: added back to EBIT and net income in adjusted figures, but read as a signal that the deal destroyed value. In valuation work, a stock trading below book value is a market hint that an impairment may be coming; ESMA and Consob regularly list impairment assumptions (discount rates, growth) among enforcement priorities.',
          'Le grandi svalutazioni di avviamento seguono spesso acquisizioni pagate troppo — e sono un evento di credibilità per il management. Gli analisti trattano l\'impairment come **non monetario e non ricorrente**: riaggiunto a EBIT e utile nelle grandezze adjusted, ma letto come segnale che il deal ha distrutto valore. In valutazione, un titolo che quota sotto il patrimonio netto contabile è un indizio di mercato che una svalutazione potrebbe arrivare; ESMA e Consob inseriscono regolarmente le ipotesi di impairment (tassi, crescita) tra le priorità di vigilanza.'
        )
      },
      { type: 'exercise', questionId: 'acc-ias36-q1' },
      { type: 'exercise', questionId: 'acc-ias36-q2' },
      { type: 'exercise', questionId: 'acc-ias36-q3' },
      {
        type: 'interview',
        question: t('Walk me through a goodwill impairment test under IFRS.', 'Illustrami un impairment test sull\'avviamento secondo gli IFRS.'),
        answer: t(
          'Goodwill is tested at least annually at the level of the CGU or group of CGUs to which it is allocated. I compare the carrying amount of the CGU, including goodwill, with its recoverable amount — the higher of fair value less costs of disposal and value in use, the latter being a DCF of cash flows in the asset\'s current condition at a pre-tax rate. If the carrying amount is higher, the loss first reduces goodwill, then the other assets pro rata. Goodwill impairments can never be reversed. It is non-cash, so EBITDA and cash flow are unaffected, but EBIT, net income and equity fall.',
          'L\'avviamento si testa almeno una volta l\'anno al livello della CGU o del gruppo di CGU a cui è allocato. Confronto il valore contabile della CGU, avviamento incluso, con il valore recuperabile — il maggiore tra fair value al netto dei costi di dismissione e valore d\'uso, quest\'ultimo un DCF dei flussi nelle condizioni attuali a un tasso ante imposte. Se il valore contabile è superiore, la perdita riduce prima l\'avviamento, poi le altre attività pro quota. Le svalutazioni dell\'avviamento non si ripristinano mai. È una posta non monetaria: EBITDA e flussi di cassa non cambiano, ma EBIT, utile e patrimonio netto diminuiscono.'
        )
      },
      {
        type: 'mistakes',
        items: [
          t('Using the lower of FVLCD and value in use. Recoverable amount is the higher.', 'Usare il minore tra FVLCD e valore d\'uso. Il valore recuperabile è il maggiore.'),
          t('Including uncommitted restructuring benefits or expansion capex in value in use.', 'Includere nel valore d\'uso benefici di ristrutturazioni non deliberate o capex di espansione.'),
          t('Allocating the loss pro rata to all assets including goodwill. Goodwill absorbs it first.', 'Allocare la perdita pro quota a tutte le attività compreso l\'avviamento. L\'avviamento la assorbe per primo.'),
          t('Reversing goodwill impairment when performance recovers. Never allowed.', 'Ripristinare l\'avviamento quando i risultati migliorano. Mai consentito.')
        ]
      },
      {
        type: 'summary',
        items: [
          t('Test when indicators exist; goodwill and indefinite-life intangibles annually.', 'Test in presenza di indicatori; avviamento e immateriali a vita indefinita ogni anno.'),
          t('Recoverable amount = higher of FVLCD and value in use; loss = carrying − recoverable.', 'Valore recuperabile = maggiore tra FVLCD e valore d\'uso; perdita = valore contabile − recuperabile.'),
          t('Loss hits goodwill first, then other assets pro rata.', 'La perdita colpisce prima l\'avviamento, poi le altre attività pro quota.'),
          t('Reversals: never for goodwill; capped for other assets.', 'Ripristini: mai per l\'avviamento; con tetto per le altre attività.')
        ]
      }
    ],
    questions: [
      {
        id: 'acc-ias36-q1',
        kind: 'numeric',
        topic: 'impairment',
        difficulty: 2,
        objective: t('Compute an impairment loss.', 'Calcolare una perdita per riduzione di valore.'),
        prompt: t(
          'A CGU has a carrying amount of €500m (incl. €80m goodwill). Value in use €420m; FVLCD €440m. Impairment loss (€m)?',
          'Una CGU ha un valore contabile di €500m (incluso avviamento di €80m). Valore d\'uso €420m; FVLCD €440m. Perdita di valore (€m)?'
        ),
        answer: 60,
        unit: '€m',
        verify: { fn: 'diff', args: [500, 440] },
        explanation: t(
          'Recoverable amount = max(420, 440) = 440; loss = 500 − 440 = 60, all absorbed by goodwill (80 → 20). Using value in use (loss 80) ignores that the higher measure applies.',
          'Valore recuperabile = max(420, 440) = 440; perdita = 500 − 440 = 60, interamente assorbita dall\'avviamento (80 → 20). Usare il valore d\'uso (perdita 80) ignora che si applica il maggiore dei due.'
        )
      },
      {
        id: 'acc-ias36-q2',
        kind: 'numeric',
        topic: 'impairment',
        difficulty: 3,
        objective: t('Allocate an impairment loss beyond goodwill.', 'Allocare una perdita di valore oltre l\'avviamento.'),
        prompt: t(
          'CGU carrying amount €300m: goodwill €40m, PP&E €180m, customer list €80m. Recoverable amount €230m. After writing off goodwill, how much of the loss (€m) is allocated to PP&E (pro rata, no floor constraints)?',
          'Valore contabile della CGU €300m: avviamento €40m, imm. materiali €180m, lista clienti €80m. Valore recuperabile €230m. Dopo aver azzerato l\'avviamento, quanta parte della perdita (€m) si alloca alle imm. materiali (pro quota, senza vincoli minimi)?'
        ),
        answer: 20.77,
        unit: '€m',
        tolerance: { abs: 0.05 },
        verify: { fn: 'product', args: [30, 180, 1 / 260] },
        steps: [t('Total loss: 300 − 230 = 70', 'Perdita totale: 300 − 230 = 70'), t('Goodwill absorbs 40; remaining 30', 'L\'avviamento assorbe 40; restano 30'), t('PP&E share: 30 × 180 / 260 = 20.77', 'Quota imm. materiali: 30 × 180 / 260 = 20,77')],
        explanation: t(
          'Loss 70: goodwill 40 first, then 30 pro rata on carrying amounts (180 and 80, total 260): PP&E 30 × 180/260 = 20.77, customer list 9.23.',
          'Perdita 70: prima l\'avviamento per 40, poi 30 pro quota sui valori contabili (180 e 80, totale 260): imm. materiali 30 × 180/260 = 20,77, lista clienti 9,23.'
        )
      },
      {
        id: 'acc-ias36-q3',
        kind: 'multi',
        topic: 'impairment',
        difficulty: 2,
        objective: t('Know which assets require an annual test.', 'Sapere quali attività richiedono un test annuale.'),
        prompt: t('Which assets must be tested for impairment annually even without indicators (IAS 36)? Select all that apply.', 'Quali attività vanno testate ogni anno anche senza indicatori (IAS 36)? Seleziona tutte le risposte corrette.'),
        choices: [
          t('Goodwill', 'Avviamento'),
          t('A brand with an indefinite useful life', 'Un marchio a vita utile indefinita'),
          t('A factory building', 'Un fabbricato industriale'),
          t('Capitalised development costs for a product not yet available for use', 'Costi di sviluppo capitalizzati per un prodotto non ancora disponibile per l\'uso'),
          t('A customer list amortised over 8 years', 'Una lista clienti ammortizzata in 8 anni')
        ],
        correct: [0, 1, 3],
        explanation: t(
          'Annual tests: goodwill, indefinite-life intangibles and intangibles not yet available for use. Buildings and finite-life intangibles are tested only when an indicator exists.',
          'Test annuale: avviamento, immateriali a vita indefinita e immateriali non ancora disponibili per l\'uso. Fabbricati e immateriali a vita definita si testano solo in presenza di indicatori.'
        )
      }
    ],
    flashcards: [
      { id: 'fc-acc-ias36-1', topic: 'impairment', front: t('Recoverable amount (IAS 36)?', 'Valore recuperabile (IAS 36)?'), back: t('Higher of fair value less costs of disposal and value in use.', 'Il maggiore tra fair value al netto dei costi di dismissione e valore d\'uso.') },
      { id: 'fc-acc-ias36-2', topic: 'impairment', front: t('Maximum level for goodwill allocation?', 'Livello massimo di allocazione dell\'avviamento?'), back: t('No larger than an operating segment (IFRS 8), lowest level monitored internally.', 'Non più ampio di un settore operativo (IFRS 8), al livello più basso monitorato internamente.') },
      { id: 'fc-acc-ias36-3', topic: 'impairment', front: t('Can goodwill impairment be reversed under IFRS?', 'Si può ripristinare la svalutazione dell\'avviamento in IFRS?'), back: t('No, never. Other assets can, capped at depreciated historical carrying amount.', 'No, mai. Le altre attività sì, fino al valore che avrebbero avuto senza svalutazione.') },
      { id: 'fc-acc-ias36-4', topic: 'impairment', front: t('Order of impairment allocation in a CGU?', 'Ordine di allocazione della perdita in una CGU?'), back: t('Goodwill first, then other assets pro rata to carrying amounts (floor: highest of FVLCD, VIU, zero).', 'Prima l\'avviamento, poi le altre attività pro quota (limite: maggiore tra FVLCD, valore d\'uso, zero).') }
    ],
    sources: [{ label: 'IFRS Foundation — IAS 36 Impairment of Assets', url: 'https://www.ifrs.org/issued-standards/list-of-standards/ias-36-impairment-of-assets/' }]
  },
  /* ------------------------------------------------------------ */
  {
    id: 'acc-ifrs-vs-usgaap',
    academyId: 'accounting',
    moduleId: 'A4',
    mode: 'deep',
    minutes: 12,
    difficulty: 3,
    reviewed: '2026-10',
    objective: t(
      'Explain the IFRS vs US GAAP differences that matter for bankers — inventories, development costs, impairment, leases, NCI and goodwill, cash flow classification — and quantify their effect on comparables.',
      'Spiegare le differenze IFRS vs US GAAP rilevanti per un banker — rimanenze, costi di sviluppo, impairment, leasing, interessenze di terzi e avviamento, classificazione dei flussi di cassa — e quantificarne l\'effetto sui comparables.'
    ),
    screens: [
      {
        type: 'intuition',
        title: t('Principles vs rules — and a comps table', 'Principi vs regole — e una tabella di comparables'),
        body: t(
          'IFRS is often described as **principles-based**, US GAAP as more **rules-based** with detailed industry guidance. Convergence projects (revenue, leases, business combinations) narrowed the gap, but differences remain.\n\nWhen you put a European IFRS reporter next to a US peer in a comps table, these differences can move EBITDA, EBIT, net income and cash flow from operations — so you must know where to look.',
          'Gli IFRS sono spesso descritti come **basati su principi**, gli US GAAP come più **basati su regole**, con indicazioni settoriali dettagliate. I progetti di convergenza (ricavi, leasing, aggregazioni) hanno ridotto le distanze, ma le differenze restano.\n\nQuando metti un emittente europeo IFRS accanto a un peer americano in una tabella di comparables, queste differenze possono spostare EBITDA, EBIT, utile netto e flusso di cassa operativo — devi sapere dove guardare.'
        )
      },
      {
        type: 'technical',
        title: t('Assets and expenses', 'Attività e costi'),
        body: t('Differences that move earnings and balance sheets:', 'Differenze che spostano utili e stato patrimoniale:'),
        table: {
          headers: [t('Topic', 'Tema'), t('IFRS', 'IFRS'), t('US GAAP', 'US GAAP')],
          rows: [
            [t('LIFO inventory', 'Rimanenze LIFO'), t('Prohibited (IAS 2)', 'Vietato (IAS 2)'), t('Permitted (ASC 330)', 'Ammesso (ASC 330)')],
            [t('Inventory write-down reversal', 'Ripristino svalutazione rimanenze'), t('Required when NRV recovers', 'Obbligatorio se il valore di realizzo risale'), t('Prohibited', 'Vietato')],
            [t('Development costs', 'Costi di sviluppo'), t('Capitalised when IAS 38 criteria met', 'Capitalizzati se ricorrono i criteri IAS 38'), t('Expensed (exceptions: software, ASC 350-40 / 985-20)', 'A costo (eccezioni: software, ASC 350-40 / 985-20)')],
            [t('PP&E revaluation', 'Rivalutazione immobilizzazioni'), t('Revaluation model allowed', 'Modello della rideterminazione ammesso'), t('Prohibited — historical cost', 'Vietato — costo storico')],
            [t('Impairment test (long-lived assets)', 'Impairment (attività a lungo termine)'), t('One step: carrying vs recoverable amount', 'Un passaggio: valore contabile vs recuperabile'), t('Two steps: recoverability on undiscounted cash flows, then loss to fair value', 'Due passaggi: recuperabilità su flussi non attualizzati, poi perdita fino al fair value')],
            [t('Impairment reversal (non-goodwill)', 'Ripristino impairment (non avviamento)'), t('Allowed (capped)', 'Ammesso (con tetto)'), t('Prohibited for assets held and used', 'Vietato per attività detenute per l\'uso')],
            [t('Provisions — "probable"', 'Fondi — "probabile"'), t('More likely than not (> 50%); range → midpoint', 'Più probabile che no (> 50%); intervallo → punto medio'), t('Higher threshold ("likely"); range → low end', 'Soglia più alta ("likely"); intervallo → estremo inferiore')]
          ]
        }
      },
      {
        type: 'technical',
        title: t('Leases, M&A and cash flows', 'Leasing, M&A e flussi di cassa'),
        body: t('Differences that move EBITDA, goodwill and CFO:', 'Differenze che spostano EBITDA, avviamento e flusso operativo:'),
        table: {
          headers: [t('Topic', 'Tema'), t('IFRS', 'IFRS'), t('US GAAP', 'US GAAP')],
          rows: [
            [t('Lessee accounting', 'Contabilità del locatario'), t('IFRS 16 single model: depreciation + interest', 'IFRS 16 modello unico: ammortamento + interessi'), t('ASC 842 dual model: operating leases → single straight-line cost in opex', 'ASC 842 duale: leasing operativi → costo unico lineare nei costi operativi')],
            [t('NCI at acquisition', 'Terzi all\'acquisizione'), t('Choice per deal: fair value (full goodwill) or proportionate share (partial goodwill)', 'Scelta per operazione: fair value (avviamento pieno) o quota proporzionale (avviamento parziale)'), t('Fair value only → full goodwill', 'Solo fair value → avviamento pieno')],
            [t('Goodwill', 'Avviamento'), t('Not amortised; tested at CGU level', 'Non ammortizzato; test a livello di CGU'), t('Not amortised (private companies may elect ≤ 10-year amortisation); tested at reporting unit level', 'Non ammortizzato (le private possono ammortizzare in ≤ 10 anni); test a livello di reporting unit')],
            [t('Interest paid (cash flow)', 'Interessi pagati (rendiconto)'), t('Operating or financing (IAS 7); financing from 2027 for general corporates', 'Operativo o finanziamento (IAS 7); finanziamento dal 2027 per le società non finanziarie'), t('Operating', 'Operativo')],
            [t('Interest / dividends received', 'Interessi / dividendi incassati'), t('Operating or investing; investing from 2027', 'Operativo o investimento; investimento dal 2027'), t('Operating', 'Operativo')],
            [t('Dividends paid', 'Dividendi pagati'), t('Operating or financing; financing from 2027', 'Operativo o finanziamento; finanziamento dal 2027'), t('Financing', 'Finanziamento')]
          ]
        }
      },
      {
        type: 'formula',
        formulas: [
          {
            name: t('Goodwill with NCI', 'Avviamento con interessenze di terzi'),
            expr: 'Goodwill = Consideration + NCI − Fair value of identifiable net assets',
            vars: [
              { sym: 'NCI (full)', desc: t('NCI at fair value — required by US GAAP, optional under IFRS', 'Terzi al fair value — obbligatorio in US GAAP, facoltativo in IFRS') },
              { sym: 'NCI (partial)', desc: t('NCI % × fair value of net assets — IFRS option only', '% terzi × fair value dell\'attivo netto — solo opzione IFRS') }
            ]
          }
        ]
      },
      {
        type: 'example',
        title: t('Same deal, two goodwill figures (€m)', 'Stesso deal, due avviamenti (€m)'),
        body: t(
          'Buyer acquires 80% of Target for €800m. Fair value of identifiable net assets €700m; fair value of the 20% NCI €190m.',
          'L\'acquirente compra l\'80% di Target per €800m. Fair value dell\'attivo netto identificabile €700m; fair value del 20% dei terzi €190m.'
        ),
        table: {
          headers: [t('€m', '€m'), t('Full goodwill (US GAAP; IFRS option)', 'Avviamento pieno (US GAAP; opzione IFRS)'), t('Partial goodwill (IFRS option)', 'Avviamento parziale (opzione IFRS)')],
          rows: [
            [t('Consideration', 'Corrispettivo'), '800', '800'],
            [t('NCI', 'Terzi'), '190', '140 (20% × 700)'],
            [t('Less: FV net assets', 'Meno: FV attivo netto'), '(700)', '(700)'],
            [t('Goodwill', 'Avviamento'), '290', '240']
          ],
          totalRows: [3]
        }
      },
      {
        type: 'realworld',
        body: t(
          'Practical comps adjustments: (1) **Leases** — US operating lease cost sits inside EBITDA, IFRS 16 lease cost does not: put everyone on the same basis or EV/EBITDA is not comparable. (2) **LIFO** — US companies disclose the **LIFO reserve**; add it back to inventory to compare with FIFO peers. (3) **CFO** — IFRS companies classifying interest paid in financing show higher CFO than US peers. (4) **R&D** — IFRS capitalisation boosts EBITDA versus US peers that expense.',
          'Rettifiche pratiche nei comps: (1) **Leasing** — il costo dei leasing operativi US è dentro l\'EBITDA, quello IFRS 16 no: porta tutti sulla stessa base o l\'EV/EBITDA non è confrontabile. (2) **LIFO** — le società US indicano la **LIFO reserve**; va aggiunta alle rimanenze per confrontarle con peers FIFO. (3) **Flusso operativo** — le società IFRS che classificano gli interessi pagati nel finanziamento mostrano un CFO più alto dei peers US. (4) **R&S** — la capitalizzazione IFRS aumenta l\'EBITDA rispetto ai peers US che spesano.'
        )
      },
      { type: 'exercise', questionId: 'acc-ifrsus-q1' },
      { type: 'exercise', questionId: 'acc-ifrsus-q2' },
      { type: 'exercise', questionId: 'acc-ifrsus-q3' },
      {
        type: 'interview',
        question: t('Name three differences between IFRS and US GAAP that would affect a comparable companies analysis.', 'Indica tre differenze tra IFRS e US GAAP che incidono su un\'analisi dei comparables.'),
        answer: t(
          'First, leases: under ASC 842 operating lease cost is a single straight-line expense within operating costs, while IFRS 16 splits it into depreciation and interest, so IFRS EBITDA is structurally higher. Second, development costs: IFRS capitalises them once the IAS 38 criteria are met, US GAAP generally expenses them, again lifting IFRS EBITDA. Third, cash flow classification: US GAAP puts interest paid in operating activities, while IFRS allows financing — and requires it for general corporates from 2027 — so IFRS CFO and free cash flow conversion can look better. I would also mention LIFO, allowed only under US GAAP, and impairment reversals, allowed only under IFRS.',
          'Primo, il leasing: con l\'ASC 842 il costo dei leasing operativi è un costo unico lineare nei costi operativi, mentre l\'IFRS 16 lo divide in ammortamento e interessi, quindi l\'EBITDA IFRS è strutturalmente più alto. Secondo, i costi di sviluppo: gli IFRS li capitalizzano se ricorrono i criteri IAS 38, gli US GAAP in genere li spesano, aumentando di nuovo l\'EBITDA IFRS. Terzo, la classificazione dei flussi: gli US GAAP mettono gli interessi pagati nell\'attività operativa, mentre gli IFRS consentono il finanziamento — e lo impongono alle società non finanziarie dal 2027 — quindi CFO e conversione in free cash flow possono apparire migliori in IFRS. Citerei anche il LIFO, ammesso solo in US GAAP, e i ripristini di impairment, ammessi solo in IFRS.'
        )
      },
      {
        type: 'mistakes',
        items: [
          t('Saying US GAAP amortises goodwill. Public companies do not; only the private company alternative allows it.', 'Dire che gli US GAAP ammortizzano l\'avviamento. Le società quotate no; solo l\'alternativa per le private lo consente.'),
          t('Believing IFRS forbids full goodwill. It allows it as a deal-by-deal choice.', 'Credere che gli IFRS vietino l\'avviamento pieno. Lo ammettono come scelta per singola operazione.'),
          t('Forgetting that LIFO is prohibited under IFRS — a US company converting to IFRS must restate inventories.', 'Dimenticare che il LIFO è vietato in IFRS — una società US che passa agli IFRS deve rideterminare le rimanenze.'),
          t('Comparing CFO across frameworks without checking where interest is classified.', 'Confrontare il CFO tra framework senza verificare dove sono classificati gli interessi.')
        ]
      },
      {
        type: 'summary',
        items: [
          t('IFRS: no LIFO, capitalised development, revaluation allowed, impairment reversals (not goodwill).', 'IFRS: niente LIFO, sviluppo capitalizzato, rivalutazione ammessa, ripristini di impairment (non avviamento).'),
          t('US GAAP: LIFO allowed, R&D expensed, no reversals, two-step recoverability test.', 'US GAAP: LIFO ammesso, R&S a costo, niente ripristini, test di recuperabilità in due passaggi.'),
          t('Leases: IFRS 16 single model vs ASC 842 operating/finance — EBITDA differs.', 'Leasing: IFRS 16 modello unico vs ASC 842 operativo/finanziario — EBITDA diverso.'),
          t('NCI: US GAAP full goodwill only; IFRS choice. Interest paid: US operating; IFRS financing from 2027.', 'Terzi: US GAAP solo avviamento pieno; IFRS a scelta. Interessi pagati: US operativi; IFRS finanziamento dal 2027.')
        ]
      }
    ],
    questions: [
      {
        id: 'acc-ifrsus-q1',
        kind: 'numeric',
        topic: 'ifrs-vs-usgaap',
        difficulty: 3,
        objective: t('Compute full goodwill (US GAAP).', 'Calcolare l\'avviamento pieno (US GAAP).'),
        prompt: t(
          'A US acquirer buys 70% of a target for $630m. Fair value of identifiable net assets $600m; fair value of the 30% NCI $250m. Goodwill under US GAAP ($m)?',
          'Un acquirente US compra il 70% di un target per $630m. Fair value dell\'attivo netto identificabile $600m; fair value del 30% dei terzi $250m. Avviamento secondo gli US GAAP ($m)?'
        ),
        answer: 280,
        unit: '$m',
        verify: { fn: 'goodwill', args: [630, 600, 250] },
        explanation: t(
          'US GAAP requires NCI at fair value: 630 + 250 − 600 = 280. The partial-goodwill answer (630 + 30% × 600 − 600 = 210) is available only under IFRS.',
          'Gli US GAAP impongono i terzi al fair value: 630 + 250 − 600 = 280. La risposta con avviamento parziale (630 + 30% × 600 − 600 = 210) è possibile solo in IFRS.'
        )
      },
      {
        id: 'acc-ifrsus-q2',
        kind: 'multi',
        topic: 'ifrs-vs-usgaap',
        difficulty: 2,
        objective: t('Identify treatments permitted under IFRS but not US GAAP.', 'Individuare i trattamenti ammessi in IFRS ma non in US GAAP.'),
        prompt: t('Which are permitted under IFRS but NOT under US GAAP? Select all that apply.', 'Quali sono ammessi in IFRS ma NON in US GAAP? Seleziona tutte le risposte corrette.'),
        choices: [
          t('Reversing an impairment loss on a machine', 'Ripristinare una svalutazione di un macchinario'),
          t('Using LIFO for inventories', 'Usare il LIFO per le rimanenze'),
          t('Revaluing PP&E to fair value', 'Rivalutare le immobilizzazioni materiali al fair value'),
          t('Measuring NCI at its proportionate share of net assets', 'Valutare i terzi alla quota proporzionale dell\'attivo netto'),
          t('Expensing research costs', 'Spesare i costi di ricerca')
        ],
        correct: [0, 2, 3],
        explanation: t(
          'Impairment reversals, PP&E revaluation and proportionate NCI are IFRS-only. LIFO is the opposite (US GAAP only), and research costs are expensed under both frameworks.',
          'Ripristini di impairment, rivalutazione delle immobilizzazioni e terzi alla quota proporzionale sono solo IFRS. Il LIFO è il contrario (solo US GAAP) e i costi di ricerca si spesano in entrambi i framework.'
        )
      },
      {
        id: 'acc-ifrsus-q3',
        kind: 'mcq',
        topic: 'ifrs-vs-usgaap',
        difficulty: 2,
        objective: t('Assess the effect of interest classification on CFO.', 'Valutare l\'effetto della classificazione degli interessi sul flusso operativo.'),
        prompt: t(
          'Two identical companies each pay €40m of interest. The IFRS one classifies interest paid in financing; the US GAAP one follows US rules. Which statement is right?',
          'Due società identiche pagano ciascuna €40m di interessi. Quella IFRS classifica gli interessi pagati nel finanziamento; quella US GAAP segue le regole US. Quale affermazione è corretta?'
        ),
        choices: [
          t('Both report the same CFO', 'Entrambe riportano lo stesso flusso operativo'),
          t('The IFRS company reports CFO €40m higher', 'La società IFRS riporta un flusso operativo più alto di €40m'),
          t('The US GAAP company reports CFO €40m higher', 'La società US GAAP riporta un flusso operativo più alto di €40m'),
          t('The IFRS company reports lower net income', 'La società IFRS riporta un utile netto più basso')
        ],
        correct: 1,
        explanation: t(
          'US GAAP requires interest paid in operating activities, so US CFO is lower by €40m; the IFRS company shows it in financing. Net income is identical — only cash flow classification differs.',
          'Gli US GAAP impongono gli interessi pagati nell\'attività operativa, quindi il CFO US è più basso di €40m; la società IFRS li espone nel finanziamento. L\'utile netto è identico — cambia solo la classificazione dei flussi.'
        )
      },
      {
        id: 'acc-ifrsus-q4',
        kind: 'numeric',
        topic: 'ifrs-vs-usgaap',
        difficulty: 2,
        objective: t('Adjust LIFO inventory to FIFO.', 'Rettificare le rimanenze LIFO a FIFO.'),
        prompt: t(
          'A US company reports LIFO inventory of $350m and discloses a LIFO reserve of $60m. Inventory on a FIFO basis ($m)?',
          'Una società US riporta rimanenze LIFO per $350m e indica una LIFO reserve di $60m. Rimanenze su base FIFO ($m)?'
        ),
        answer: 410,
        unit: '$m',
        verify: { fn: 'sum', args: [350, 60] },
        explanation: t(
          'FIFO inventory = LIFO inventory + LIFO reserve = 350 + 60 = 410. In inflationary periods LIFO understates inventory; the reserve measures the gap (subtracting it would move further from FIFO).',
          'Rimanenze FIFO = rimanenze LIFO + LIFO reserve = 350 + 60 = 410. In periodi inflattivi il LIFO sottostima le rimanenze; la reserve misura lo scarto (sottrarla allontanerebbe ancora di più dal FIFO).'
        )
      }
    ],
    flashcards: [
      { id: 'fc-acc-ifrsus-1', topic: 'ifrs-vs-usgaap', front: t('LIFO: IFRS vs US GAAP?', 'LIFO: IFRS vs US GAAP?'), back: t('Prohibited under IFRS (IAS 2); permitted under US GAAP.', 'Vietato in IFRS (IAS 2); ammesso in US GAAP.') },
      { id: 'fc-acc-ifrsus-2', topic: 'ifrs-vs-usgaap', front: t('NCI measurement options?', 'Opzioni di valutazione dei terzi?'), back: t('IFRS: fair value or proportionate share (deal by deal). US GAAP: fair value only (full goodwill).', 'IFRS: fair value o quota proporzionale (per operazione). US GAAP: solo fair value (avviamento pieno).') },
      { id: 'fc-acc-ifrsus-3', topic: 'ifrs-vs-usgaap', front: t('Interest paid in the cash flow statement?', 'Interessi pagati nel rendiconto finanziario?'), back: t('US GAAP: operating. IFRS: operating or financing today; financing for general corporates from 2027 (IAS 7 amended by IFRS 18).', 'US GAAP: operativo. IFRS: operativo o finanziamento oggi; finanziamento per le società non finanziarie dal 2027 (IAS 7 modificato dall\'IFRS 18).') },
      { id: 'fc-acc-ifrsus-4', topic: 'ifrs-vs-usgaap', front: t('Impairment reversal of non-goodwill assets?', 'Ripristino dell\'impairment di attività diverse dall\'avviamento?'), back: t('IFRS: allowed, capped. US GAAP: prohibited for assets held and used.', 'IFRS: ammesso, con tetto. US GAAP: vietato per attività detenute per l\'uso.') },
      { id: 'fc-acc-ifrsus-5', topic: 'ifrs-vs-usgaap', front: t('Development costs?', 'Costi di sviluppo?'), back: t('IFRS: capitalised when IAS 38 criteria met. US GAAP: expensed, except certain software costs.', 'IFRS: capitalizzati se ricorrono i criteri IAS 38. US GAAP: a costo, salvo alcuni costi software.') }
    ],
    sources: [
      { label: 'IFRS Foundation — IAS 2, IAS 7, IAS 36, IAS 38, IFRS 3, IFRS 16, IFRS 18', url: 'https://www.ifrs.org/issued-standards/list-of-standards/' },
      { label: 'FASB Accounting Standards Codification (ASC 330, 350, 360, 805, 842, 230)', url: 'https://asc.fasb.org/' }
    ]
  },
  /* @@END-A4@@ */
];

/* ============================================================== */
/* A5 — US GAAP                                                    */
/* ============================================================== */

const a5: Lesson[] = [
  /* ------------------------------------------------------------ */
  {
    id: 'acc-usgaap-fundamentals',
    academyId: 'accounting',
    moduleId: 'A5',
    mode: 'quick',
    minutes: 8,
    difficulty: 2,
    reviewed: '2026-10',
    objective: t(
      'Navigate the US GAAP ecosystem — FASB Accounting Standards Codification, SEC filers and filings (10-K, 10-Q, 8-K) — and reconcile non-GAAP measures under SEC rules.',
      'Orientarsi nel sistema US GAAP — Accounting Standards Codification del FASB, emittenti SEC e relativi documenti (10-K, 10-Q, 8-K) — e riconciliare le misure non-GAAP secondo le regole SEC.'
    ),
    screens: [
      {
        type: 'intuition',
        title: t('Where US numbers come from', 'Da dove vengono i numeri americani'),
        body: t(
          'On a cross-border deal or a US comps set, you will spend hours in **10-Ks** on SEC EDGAR. The numbers follow **US GAAP**, written by the FASB; the filing rules come from the **SEC**. And the figure management loves — "Adjusted EBITDA" — is not GAAP at all, so the SEC regulates how it can be shown.',
          'In un deal cross-border o con un set di comparables americani passerai ore nei **10-K** su SEC EDGAR. I numeri seguono gli **US GAAP**, scritti dal FASB; le regole di deposito vengono dalla **SEC**. E la grandezza preferita dal management — l\'"Adjusted EBITDA" — non è affatto GAAP, quindi la SEC regola come può essere presentata.'
        )
      },
      {
        type: 'technical',
        title: t('FASB and the Codification', 'Il FASB e la Codification'),
        body: t(
          '- The **FASB** (Financial Accounting Standards Board) sets US GAAP; the SEC recognises it as the standard setter for public companies.\n- The **Accounting Standards Codification (ASC)** is the **single source of authoritative non-governmental US GAAP**, effective for periods ending after 15 September 2009. It reorganised thousands of older pronouncements into **Topics**.\n- Changes are issued as **Accounting Standards Updates (ASUs)**, numbered by year (e.g. ASU 2016-02 created ASC 842).\n\nTopics bankers use most: **606** revenue, **842** leases, **805** business combinations, **810** consolidation, **350** goodwill and intangibles, **360** PP&E, **740** income taxes, **718** stock compensation, **820** fair value, **230** cash flows.',
          '- Il **FASB** (Financial Accounting Standards Board) emana gli US GAAP; la SEC lo riconosce come standard setter per le società quotate.\n- L\'**Accounting Standards Codification (ASC)** è l\'**unica fonte autorevole degli US GAAP non governativi**, in vigore per i periodi chiusi dopo il 15 settembre 2009. Ha riorganizzato migliaia di pronunciamenti precedenti in **Topic**.\n- Le modifiche sono emanate come **Accounting Standards Update (ASU)**, numerati per anno (es. l\'ASU 2016-02 ha creato l\'ASC 842).\n\nTopic più usati dai banker: **606** ricavi, **842** leasing, **805** aggregazioni, **810** consolidamento, **350** avviamento e immateriali, **360** immobilizzazioni materiali, **740** imposte, **718** stock-based compensation, **820** fair value, **230** rendiconto finanziario.'
        )
      },
      {
        type: 'technical',
        title: t('SEC filers and filings', 'Emittenti e documenti SEC'),
        body: t(
          '- **Regulation S-X** governs the form and content of financial statements; **Regulation S-K** non-financial disclosures (MD&A, risk factors, business).\n- **10-K**: annual report with **audited** financial statements, MD&A, risk factors. Deadline after fiscal year end: **60 days** (large accelerated filers), **75** (accelerated), **90** (others).\n- **10-Q**: quarterly report, financial statements **reviewed** (not audited); deadline **40 days** (large accelerated/accelerated) or **45**.\n- **8-K**: current report on material events (e.g. M&A agreement, results release), generally within **four business days**.\n- **Foreign private issuers** file **20-F** annually and may use **IFRS as issued by the IASB** without reconciliation to US GAAP.\n\nNew: **ASU 2024-03** requires public companies to disaggregate key expense captions in the notes, for annual periods beginning after 15 December 2026.',
          '- La **Regulation S-X** disciplina forma e contenuto del bilancio; la **Regulation S-K** l\'informativa non finanziaria (MD&A, fattori di rischio, attività).\n- **10-K**: relazione annuale con bilancio **sottoposto a revisione**, MD&A, fattori di rischio. Termine dalla chiusura: **60 giorni** (large accelerated filer), **75** (accelerated), **90** (altri).\n- **10-Q**: relazione trimestrale, bilancio sottoposto a **review** (non a revisione completa); termine **40 giorni** (large accelerated/accelerated) o **45**.\n- **8-K**: comunicazione di eventi rilevanti (es. accordo di M&A, comunicato sui risultati), di norma entro **quattro giorni lavorativi**.\n- I **foreign private issuer** depositano il **20-F** annuale e possono usare gli **IFRS emanati dallo IASB** senza riconciliazione agli US GAAP.\n\nNovità: l\'**ASU 2024-03** impone alle società quotate di disaggregare in nota le principali voci di costo, per gli esercizi che iniziano dopo il 15 dicembre 2026.'
        )
      },
      {
        type: 'technical',
        title: t('Non-GAAP measures: the SEC rules', 'Misure non-GAAP: le regole SEC'),
        body: t(
          '**Regulation G** (any public disclosure, e.g. earnings calls, press releases): present the **most directly comparable GAAP measure** and a **quantitative reconciliation**; the measure must not be misleading.\n\n**Item 10(e) of Regulation S-K** (in SEC filings) adds:\n- the GAAP measure with **equal or greater prominence**;\n- a statement of **why** management finds the measure useful;\n- restrictions, e.g. liquidity measures cannot exclude charges requiring cash settlement (EBIT and EBITDA excepted), and recurring items should not be labelled non-recurring if likely to recur within two years.\n\nTypical add-backs in "Adjusted EBITDA": stock-based compensation, restructuring, acquisition costs, impairments — each one a judgement call.',
          'La **Regulation G** (qualsiasi comunicazione pubblica, es. conference call, comunicati stampa): presentare la **misura GAAP più direttamente comparabile** e una **riconciliazione quantitativa**; la misura non deve essere fuorviante.\n\nL\'**Item 10(e) della Regulation S-K** (nei documenti depositati) aggiunge:\n- la misura GAAP con **pari o maggiore evidenza**;\n- una spiegazione del **perché** il management ritiene utile la misura;\n- divieti, es. le misure di liquidità non possono escludere oneri da regolare per cassa (salvo EBIT ed EBITDA), e voci ricorrenti non vanno qualificate come non ricorrenti se probabili entro due anni.\n\nRettifiche tipiche dell\'"Adjusted EBITDA": stock-based compensation, ristrutturazioni, costi di acquisizione, svalutazioni — ognuna è una scelta discrezionale.'
        )
      },
      {
        type: 'formula',
        formulas: [
          {
            name: t('Adjusted EBITDA reconciliation (from net income)', 'Riconciliazione dell\'Adjusted EBITDA (dall\'utile netto)'),
            expr: 'Adjusted EBITDA = Net income + Income tax + Interest expense (net) + D&A + Stock-based compensation + Other "non-recurring" items'
          }
        ],
        note: t(
          'SEC rules start the reconciliation from the most directly comparable GAAP measure — usually net income for performance measures.',
          'Le regole SEC fanno partire la riconciliazione dalla misura GAAP più comparabile — di solito l\'utile netto per le misure di performance.'
        )
      },
      {
        type: 'example',
        title: t('From GAAP net income to Adjusted EBITDA ($m)', 'Dall\'utile netto GAAP all\'Adjusted EBITDA ($m)'),
        body: t('A hypothetical US software company\'s reconciliation table, as shown in an earnings release:', 'La tabella di riconciliazione di un\'ipotetica software house americana, come in un comunicato sui risultati:'),
        table: {
          headers: [t('$m', '$m'), t('FY', 'Esercizio')],
          rows: [
            [t('Net income (GAAP)', 'Utile netto (GAAP)'), '50'],
            [t('+ Income tax expense', '+ Imposte sul reddito'), '15'],
            [t('+ Interest expense, net', '+ Interessi passivi netti'), '10'],
            [t('+ Depreciation and amortisation', '+ Ammortamenti'), '25'],
            [t('EBITDA', 'EBITDA'), '100'],
            [t('+ Stock-based compensation', '+ Stock-based compensation'), '8'],
            [t('+ Restructuring charges', '+ Oneri di ristrutturazione'), '5'],
            [t('Adjusted EBITDA', 'Adjusted EBITDA'), '113']
          ],
          totalRows: [4, 7]
        }
      },
      {
        type: 'realworld',
        body: t(
          'As an analyst you build comps from 10-K/10-Q data, not press releases. Calendarise fiscal years (many US companies have non-December year ends), use LTM figures (last 10-K + latest YTD 10-Q − prior-year YTD), and decide consistently whether to accept company "Adjusted EBITDA". Many banks exclude stock-based compensation add-backs for mature companies, because SBC is a real, recurring cost paid in equity.',
          'Da analyst costruisci i comps dai dati di 10-K/10-Q, non dai comunicati stampa. Allinea gli esercizi all\'anno solare (molte società US chiudono in mesi diversi da dicembre), usa dati LTM (ultimo 10-K + ultimo 10-Q progressivo − stesso periodo dell\'anno precedente) e decidi in modo coerente se accettare l\'"Adjusted EBITDA" della società. Molte banche non riaggiungono la stock-based compensation per le società mature, perché è un costo reale e ricorrente pagato in azioni.'
        )
      },
      { type: 'exercise', questionId: 'acc-usgaap-q1' },
      { type: 'exercise', questionId: 'acc-usgaap-q2' },
      { type: 'exercise', questionId: 'acc-usgaap-q3' },
      {
        type: 'interview',
        question: t('Should you add back stock-based compensation to EBITDA?', 'Si dovrebbe riaggiungere la stock-based compensation all\'EBITDA?'),
        answer: t(
          'Companies add it back because it is non-cash, but it is a real economic cost: employees are paid in shares instead of cash, and shareholders bear it through dilution. If I add it back, I should capture the dilution in the share count; if I value on a cash basis, I should treat recurring SBC as an operating expense. For a mature company where SBC is recurring and material, I would not add it back; the key is to be consistent across the comps set.',
          'Le società la riaggiungono perché non monetaria, ma è un costo economico reale: i dipendenti sono pagati in azioni anziché in denaro e gli azionisti lo sopportano tramite la diluizione. Se la riaggiungo, devo catturare la diluizione nel numero di azioni; se valuto su base cassa, devo trattare la SBC ricorrente come costo operativo. Per una società matura in cui la SBC è ricorrente e significativa non la riaggiungerei; l\'importante è la coerenza all\'interno del set di comparables.'
        )
      },
      {
        type: 'mistakes',
        items: [
          t('Treating 10-Q figures as audited. They are reviewed, not audited.', 'Considerare certificati i dati del 10-Q. Sono sottoposti a review, non a revisione completa.'),
          t('Using management\'s Adjusted EBITDA without reading the reconciliation.', 'Usare l\'Adjusted EBITDA del management senza leggere la riconciliazione.'),
          t('Assuming foreign companies listed in the US must use US GAAP. Foreign private issuers may file IFRS financial statements.', 'Ritenere che le società estere quotate negli USA debbano usare gli US GAAP. I foreign private issuer possono depositare bilanci IFRS.')
        ]
      },
      {
        type: 'summary',
        items: [
          t('ASC (since 2009) = single authoritative source of US GAAP; updated via ASUs.', 'ASC (dal 2009) = unica fonte autorevole degli US GAAP; aggiornata tramite ASU.'),
          t('10-K annual audited (60/75/90 days); 10-Q quarterly reviewed (40/45 days); 8-K events (4 business days).', '10-K annuale certificato (60/75/90 giorni); 10-Q trimestrale con review (40/45 giorni); 8-K eventi (4 giorni lavorativi).'),
          t('Non-GAAP: Reg G reconciliation; Item 10(e) equal prominence and usefulness statement.', 'Non-GAAP: riconciliazione Reg G; Item 10(e) pari evidenza e motivazione dell\'utilità.')
        ]
      }
    ],
    questions: [
      {
        id: 'acc-usgaap-q1',
        kind: 'numeric',
        topic: 'us-gaap',
        difficulty: 1,
        objective: t('Reconcile net income to Adjusted EBITDA.', 'Riconciliare l\'utile netto all\'Adjusted EBITDA.'),
        prompt: t(
          'Net income $80m; income tax $25m; net interest $20m; D&A $45m; stock-based compensation $12m; acquisition-related costs $6m. Adjusted EBITDA (adding back SBC and acquisition costs), $m?',
          'Utile netto $80m; imposte $25m; interessi netti $20m; ammortamenti $45m; stock-based compensation $12m; costi legati ad acquisizioni $6m. Adjusted EBITDA (riaggiungendo SBC e costi di acquisizione), $m?'
        ),
        answer: 188,
        unit: '$m',
        verify: { fn: 'sum', args: [80, 25, 20, 45, 12, 6] },
        explanation: t(
          'EBITDA = 80 + 25 + 20 + 45 = 170; + 12 + 6 = 188. Under Item 10(e), net income (the GAAP measure) would have to be shown with equal or greater prominence.',
          'EBITDA = 80 + 25 + 20 + 45 = 170; + 12 + 6 = 188. Secondo l\'Item 10(e), l\'utile netto (misura GAAP) andrebbe presentato con pari o maggiore evidenza.'
        )
      },
      {
        id: 'acc-usgaap-q2',
        kind: 'mcq',
        topic: 'us-gaap',
        difficulty: 2,
        objective: t('Know SEC filing deadlines.', 'Conoscere i termini di deposito SEC.'),
        prompt: t('A large accelerated filer with a 31 December year end must file its 10-K within…', 'Un large accelerated filer con chiusura al 31 dicembre deve depositare il 10-K entro…'),
        choices: [t('40 days', '40 giorni'), t('60 days', '60 giorni'), t('90 days', '90 giorni'), t('120 days', '120 giorni')],
        correct: 1,
        explanation: t(
          '10-K: 60 days for large accelerated filers, 75 for accelerated, 90 for non-accelerated. 40 days is the 10-Q deadline for (large) accelerated filers; 120 days is the 20-F deadline for foreign private issuers.',
          '10-K: 60 giorni per i large accelerated filer, 75 per gli accelerated, 90 per gli altri. 40 giorni è il termine del 10-Q per gli (large) accelerated filer; 120 giorni è il termine del 20-F per i foreign private issuer.'
        )
      },
      {
        id: 'acc-usgaap-q3',
        kind: 'multi',
        topic: 'us-gaap',
        difficulty: 2,
        objective: t('Identify SEC requirements for non-GAAP measures in filings.', 'Individuare i requisiti SEC per le misure non-GAAP nei documenti depositati.'),
        prompt: t('Under Regulation G and Item 10(e) of Regulation S-K, a non-GAAP measure in a 10-K must be accompanied by… Select all that apply.', 'Secondo la Regulation G e l\'Item 10(e) della Regulation S-K, una misura non-GAAP in un 10-K deve essere accompagnata da… Seleziona tutte le risposte corrette.'),
        choices: [
          t('The most directly comparable GAAP measure with equal or greater prominence', 'La misura GAAP più direttamente comparabile con pari o maggiore evidenza'),
          t('A quantitative reconciliation to that GAAP measure', 'Una riconciliazione quantitativa con tale misura GAAP'),
          t('An auditor\'s opinion on the non-GAAP measure', 'Un giudizio del revisore sulla misura non-GAAP'),
          t('A statement of why management believes the measure is useful', 'Una spiegazione del perché il management ritiene utile la misura'),
          t('FASB approval of the definition', 'L\'approvazione della definizione da parte del FASB')
        ],
        correct: [0, 1, 3],
        explanation: t(
          'Equal prominence, reconciliation and a usefulness statement are required. Non-GAAP measures are not audited and are not approved by the FASB — that is exactly why the SEC regulates their presentation.',
          'Sono richieste pari evidenza, riconciliazione e spiegazione dell\'utilità. Le misure non-GAAP non sono sottoposte a revisione né approvate dal FASB — proprio per questo la SEC ne regola la presentazione.'
        )
      }
    ],
    flashcards: [
      { id: 'fc-acc-usgaap-1', topic: 'us-gaap', front: t('What is the ASC?', 'Cos\'è l\'ASC?'), back: t('FASB Accounting Standards Codification — single source of authoritative non-governmental US GAAP since 2009.', 'L\'Accounting Standards Codification del FASB — unica fonte autorevole degli US GAAP non governativi dal 2009.') },
      { id: 'fc-acc-usgaap-2', topic: 'us-gaap', front: t('10-K deadlines?', 'Termini del 10-K?'), back: t('60 days (large accelerated), 75 (accelerated), 90 (non-accelerated).', '60 giorni (large accelerated), 75 (accelerated), 90 (non accelerated).') },
      { id: 'fc-acc-usgaap-3', topic: 'us-gaap', front: t('Regulation G requires…?', 'La Regulation G richiede…?'), back: t('Most directly comparable GAAP measure + quantitative reconciliation for any publicly disclosed non-GAAP measure.', 'Misura GAAP più comparabile + riconciliazione quantitativa per ogni misura non-GAAP comunicata al pubblico.') },
      { id: 'fc-acc-usgaap-4', topic: 'us-gaap', front: t('Can a foreign private issuer file IFRS statements with the SEC?', 'Un foreign private issuer può depositare bilanci IFRS presso la SEC?'), back: t('Yes — IFRS as issued by the IASB, on Form 20-F, without US GAAP reconciliation.', 'Sì — IFRS emanati dallo IASB, nel modulo 20-F, senza riconciliazione agli US GAAP.') }
    ],
    sources: [
      { label: 'FASB — Accounting Standards Codification', url: 'https://asc.fasb.org/' },
      { label: 'SEC — Non-GAAP Financial Measures (Regulation G; Item 10(e) of Regulation S-K) C&DIs', url: 'https://www.sec.gov/rules-regulations/staff-guidance/compliance-disclosure-interpretations/non-gaap-financial-measures' },
      { label: 'FASB — ASU 2024-03 and ASU 2025-01 (Disaggregation of Income Statement Expenses)', url: 'https://www.fasb.org/' }
    ]
  },
  /* ------------------------------------------------------------ */
  {
    id: 'acc-asc-842',
    academyId: 'accounting',
    moduleId: 'A5',
    mode: 'quick',
    minutes: 8,
    difficulty: 2,
    reviewed: '2026-10',
    objective: t(
      'Classify lessee leases under ASC 842 as finance or operating, measure them, and contrast the income statement and cash flow effects with IFRS 16.',
      'Classificare i leasing del locatario secondo l\'ASC 842 come finanziari od operativi, misurarli e confrontarne gli effetti su conto economico e flussi di cassa con l\'IFRS 16.'
    ),
    screens: [
      {
        type: 'intuition',
        title: t('Same balance sheet, different income statement', 'Stesso stato patrimoniale, conto economico diverso'),
        body: t(
          'The FASB and IASB agreed that leases belong on the balance sheet — but disagreed on the income statement. Under US GAAP, an ordinary office lease is still shown as **one straight-line rent-like cost** in operating expenses. Under IFRS 16 it becomes depreciation plus interest.\n\nSo a US and a European company with identical leases report the **same lease liability** but **different EBITDA**.',
          'FASB e IASB hanno concordato che i leasing vanno in bilancio — ma non sul conto economico. Negli US GAAP una normale locazione di uffici resta **un unico costo lineare** simile a un canone, nei costi operativi. Con l\'IFRS 16 diventa ammortamento più interessi.\n\nCosì una società americana e una europea con leasing identici riportano la **stessa passività** ma un **EBITDA diverso**.'
        )
      },
      {
        type: 'technical',
        title: t('Classification: five criteria', 'Classificazione: cinque criteri'),
        body: t(
          'A lessee classifies a lease as a **finance lease** if **any** of these is met; otherwise it is an **operating lease**:\n1. Ownership transfers to the lessee by the end of the term.\n2. Purchase option the lessee is **reasonably certain** to exercise.\n3. Lease term is for the **major part** of the asset\'s remaining economic life.\n4. PV of payments (+ residual value guaranteed) equals or exceeds **substantially all** of the asset\'s fair value.\n5. The asset is so **specialised** it has no alternative use to the lessor.\n\nEffective for public business entities for fiscal years beginning after **15 December 2018**; for other entities after **15 December 2021**. Short-term leases (≤ 12 months) may be kept off balance sheet; there is **no low-value exemption** as in IFRS 16.',
          'Il locatario classifica un leasing come **finanziario** (finance lease) se è soddisfatto **almeno uno** dei criteri; altrimenti è **operativo**:\n1. La proprietà passa al locatario entro la fine del contratto.\n2. Opzione di acquisto che il locatario è **ragionevolmente certo** di esercitare.\n3. La durata copre la **parte prevalente** della vita economica residua del bene.\n4. Il VA dei canoni (+ valore residuo garantito) è pari o superiore a **sostanzialmente tutto** il fair value del bene.\n5. Il bene è così **specifico** da non avere usi alternativi per il locatore.\n\nIn vigore per le public business entity dagli esercizi che iniziano dopo il **15 dicembre 2018**; per le altre dopo il **15 dicembre 2021**. I leasing a breve termine (≤ 12 mesi) possono restare fuori bilancio; **non esiste l\'esenzione per i beni di modesto valore** dell\'IFRS 16.'
        )
      },
      {
        type: 'formula',
        formulas: [
          {
            name: t('Initial measurement (both classes)', 'Valutazione iniziale (entrambe le classi)'),
            expr: 'Lease liability = PV of lease payments (implicit rate or incremental borrowing rate);  ROU asset = Liability + initial direct costs + prepaid rent − incentives'
          },
          {
            name: t('Operating lease — single lease cost', 'Leasing operativo — costo unico'),
            expr: 'Annual lease cost = Total lease payments ÷ Lease term (straight-line);  ROU amortisation = Lease cost − Interest accretion on the liability (plug)'
          },
          {
            name: t('Finance lease — like IFRS 16', 'Leasing finanziario — come l\'IFRS 16'),
            expr: 'Expense = ROU amortisation (straight-line) + Interest (r × opening liability)'
          }
        ]
      },
      {
        type: 'example',
        title: t('$100k a year for 5 years at 6% — year 1', '$100k l\'anno per 5 anni al 6% — anno 1'),
        body: t('Liability = ROU asset = $421.2k at commencement under all three models.', 'Passività = diritto d\'uso = $421,2k alla decorrenza in tutti e tre i modelli.'),
        table: {
          headers: [t('Year 1, $k', 'Anno 1, $k'), t('ASC 842 operating', 'ASC 842 operativo'), t('ASC 842 finance', 'ASC 842 finanziario'), t('IFRS 16', 'IFRS 16')],
          rows: [
            [t('Operating expense (lease cost)', 'Costi operativi (lease cost)'), '100.0', '—', '—'],
            [t('Amortisation / depreciation', 'Ammortamento'), t('(inside lease cost)', '(nel lease cost)'), '84.2', '84.2'],
            [t('Interest expense', 'Interessi passivi'), t('(inside lease cost)', '(nel lease cost)'), '25.3', '25.3'],
            [t('Total expense', 'Costo totale'), '100.0', '109.5', '109.5'],
            [t('EBITDA impact', 'Impatto sull\'EBITDA'), '−100.0', '0', '0'],
            [t('Cash flow classification', 'Classificazione nel rendiconto'), t('All operating', 'Tutto operativo'), t('Principal: financing; interest: operating', 'Capitale: finanziamento; interessi: operativo'), t('Principal: financing; interest per IAS 7', 'Capitale: finanziamento; interessi secondo lo IAS 7')]
          ]
        }
      },
      {
        type: 'realworld',
        body: t(
          'For comps: US companies with large operating lease portfolios (retailers, restaurants) report EBITDA **after** rent, IFRS peers **before** rent. Either add back US operating lease cost (disclosed in the lease note) and include operating lease liabilities in net debt, or deduct lease costs from IFRS peers\' EBITDA and exclude their lease liabilities. Credit analysts often treat US operating lease liabilities as debt-like regardless of presentation.',
          'Nei comps: le società US con molti leasing operativi (retail, ristorazione) riportano l\'EBITDA **dopo** i canoni, i peers IFRS **prima**. O si riaggiunge il costo dei leasing operativi US (indicato nella nota sui leasing) includendo le relative passività nella PFN, o si deducono i costi di leasing dall\'EBITDA dei peers IFRS escludendo le loro passività. Gli analisti del credito trattano spesso le passività per leasing operativi US come debt-like a prescindere dalla presentazione.'
        )
      },
      { type: 'exercise', questionId: 'acc-asc842-q1' },
      { type: 'exercise', questionId: 'acc-asc842-q2' },
      { type: 'exercise', questionId: 'acc-asc842-q3' },
      {
        type: 'interview',
        question: t('How does lease accounting differ between US GAAP and IFRS for a lessee?', 'Come differisce la contabilizzazione dei leasing per il locatario tra US GAAP e IFRS?'),
        answer: t(
          'Both put a right-of-use asset and a lease liability on the balance sheet. The difference is the income statement: IFRS 16 has one model, so every lease generates depreciation and interest, and EBITDA excludes lease costs. ASC 842 keeps two classes: finance leases look like IFRS 16, but operating leases show a single straight-line lease cost within operating expenses, so EBITDA is reduced by the rent, and all payments are operating cash flows. When I compare US and European peers I put leases on the same basis on both EBITDA and net debt.',
          'Entrambi iscrivono diritto d\'uso e passività per leasing. La differenza è nel conto economico: l\'IFRS 16 ha un modello unico, quindi ogni leasing genera ammortamento e interessi e l\'EBITDA esclude i costi di leasing. L\'ASC 842 mantiene due classi: i leasing finanziari sono come l\'IFRS 16, ma quelli operativi mostrano un unico costo lineare nei costi operativi, quindi l\'EBITDA è ridotto dei canoni, e tutti i pagamenti sono flussi operativi. Quando confronto peers americani ed europei porto i leasing sulla stessa base sia nell\'EBITDA sia nella PFN.'
        )
      },
      {
        type: 'mistakes',
        items: [
          t('Saying US operating leases are off balance sheet. Since ASC 842 they are on balance sheet.', 'Dire che i leasing operativi US sono fuori bilancio. Dall\'ASC 842 sono in bilancio.'),
          t('Assuming US operating lease cost sits below EBITDA. It is an operating expense.', 'Ritenere che il costo dei leasing operativi US sia sotto l\'EBITDA. È un costo operativo.'),
          t('Applying an IFRS-style low-value exemption under US GAAP. ASC 842 only exempts short-term leases.', 'Applicare un\'esenzione per beni di modesto valore in US GAAP. L\'ASC 842 esenta solo i leasing a breve termine.')
        ]
      },
      {
        type: 'summary',
        items: [
          t('ASC 842: ROU asset and liability for all leases > 12 months.', 'ASC 842: diritto d\'uso e passività per tutti i leasing > 12 mesi.'),
          t('Finance lease if any of five criteria; otherwise operating.', 'Leasing finanziario se ricorre uno dei cinque criteri; altrimenti operativo.'),
          t('Operating: single straight-line cost in opex, all cash flows operating → lower EBITDA than IFRS 16.', 'Operativo: costo unico lineare nei costi operativi, tutti i flussi operativi → EBITDA più basso che in IFRS 16.')
        ]
      }
    ],
    questions: [
      {
        id: 'acc-asc842-q1',
        kind: 'numeric',
        topic: 'leases',
        difficulty: 2,
        objective: t('Measure an operating lease liability under ASC 842.', 'Misurare la passività di un leasing operativo secondo l\'ASC 842.'),
        prompt: t(
          'A US lessee signs a 3-year operating lease with $200k annual payments in arrears; incremental borrowing rate 7%. Lease liability at commencement ($k)?',
          'Un locatario US firma un leasing operativo di 3 anni con canoni annui posticipati di $200k; tasso di finanziamento marginale 7%. Passività per leasing alla decorrenza ($k)?'
        ),
        answer: 524.86,
        unit: '$k',
        tolerance: { abs: 0.1 },
        verify: { fn: 'leaseLiability', args: [200, 0.07, 3] },
        explanation: t(
          'Operating leases are still measured at PV: 200 × [1 − 1.07^−3] / 0.07 = 524.86. The classification changes the expense pattern, not the initial liability.',
          'Anche i leasing operativi si misurano al VA: 200 × [1 − 1,07^−3] / 0,07 = 524,86. La classificazione cambia l\'andamento dei costi, non la passività iniziale.'
        )
      },
      {
        id: 'acc-asc842-q2',
        kind: 'numeric',
        topic: 'leases',
        difficulty: 3,
        objective: t('Compare year-1 lease expense under ASC 842 operating and IFRS 16.', 'Confrontare il costo del primo anno tra ASC 842 operativo e IFRS 16.'),
        prompt: t(
          'Same lease ($200k × 3 years, 7%; liability 524.86). Year-1 total expense under IFRS 16 minus year-1 lease cost under ASC 842 operating ($k)?',
          'Stesso leasing ($200k × 3 anni, 7%; passività 524,86). Costo totale dell\'anno 1 in IFRS 16 meno lease cost dell\'anno 1 in ASC 842 operativo ($k)?'
        ),
        answer: 11.69,
        unit: '$k',
        tolerance: { abs: 0.05 },
        verify: { fn: 'diff', args: [211.69, 200] },
        steps: [
          t('IFRS 16 depreciation: 524.86 / 3 = 174.95', 'Ammortamento IFRS 16: 524,86 / 3 = 174,95'),
          t('IFRS 16 interest: 7% × 524.86 = 36.74', 'Interessi IFRS 16: 7% × 524,86 = 36,74'),
          t('Total 211.69 − ASC 842 straight-line cost 200 = 11.69', 'Totale 211,69 − costo lineare ASC 842 200 = 11,69')
        ],
        explanation: t(
          'IFRS 16 front-loads expense: 174.95 + 36.74 = 211.69 versus a flat 200 under ASC 842 operating. Over three years both total 600 — only timing and line items differ (and EBITDA is 200 higher under IFRS 16).',
          'L\'IFRS 16 anticipa il costo: 174,95 + 36,74 = 211,69 contro 200 costanti in ASC 842 operativo. Sui tre anni entrambi totalizzano 600 — cambiano solo tempistica e voci (e l\'EBITDA IFRS 16 è più alto di 200).'
        )
      },
      {
        id: 'acc-asc842-q3',
        kind: 'mcq',
        topic: 'leases',
        difficulty: 2,
        objective: t('Apply the ASC 842 classification criteria.', 'Applicare i criteri di classificazione ASC 842.'),
        prompt: t(
          'A lessee leases a machine for 9 years; its remaining economic life is 10 years. No ownership transfer or purchase option; PV of payments is 70% of fair value; the machine is standard. Classification?',
          'Un locatario prende in leasing un macchinario per 9 anni; la vita economica residua è 10 anni. Nessun trasferimento di proprietà né opzione di acquisto; il VA dei canoni è il 70% del fair value; il macchinario è standard. Classificazione?'
        ),
        choices: [
          t('Operating lease — the PV test is not met', 'Leasing operativo — il test del VA non è superato'),
          t('Finance lease — the term covers the major part of economic life', 'Leasing finanziario — la durata copre la parte prevalente della vita economica'),
          t('Short-term lease — off balance sheet', 'Leasing a breve termine — fuori bilancio'),
          t('Not a lease — no ownership transfer', 'Non è un leasing — nessun trasferimento di proprietà')
        ],
        correct: 1,
        explanation: t(
          'Meeting any one criterion is enough: 9 of 10 years is the major part of the remaining economic life, so it is a finance lease even though the PV test fails. Ownership transfer is only one of the five criteria, not a precondition.',
          'Basta un solo criterio: 9 anni su 10 sono la parte prevalente della vita economica residua, quindi è un leasing finanziario anche se il test del VA non è superato. Il trasferimento di proprietà è solo uno dei cinque criteri, non un requisito.'
        )
      }
    ],
    flashcards: [
      { id: 'fc-acc-asc842-1', topic: 'leases', front: t('Five finance-lease criteria (ASC 842)?', 'I cinque criteri del finance lease (ASC 842)?'), back: t('Ownership transfer; reasonably certain purchase option; major part of economic life; PV ≥ substantially all fair value; specialised asset.', 'Trasferimento di proprietà; opzione di acquisto ragionevolmente certa; parte prevalente della vita economica; VA ≥ sostanzialmente tutto il fair value; bene specifico.') },
      { id: 'fc-acc-asc842-2', topic: 'leases', front: t('Operating lease expense under ASC 842?', 'Costo del leasing operativo in ASC 842?'), back: t('Single straight-line lease cost in operating expenses; all payments in operating cash flows.', 'Costo unico lineare nei costi operativi; tutti i pagamenti nei flussi operativi.') },
      { id: 'fc-acc-asc842-3', topic: 'leases', front: t('ASC 842 effective dates?', 'Decorrenza dell\'ASC 842?'), back: t('Public business entities: fiscal years beginning after 15 Dec 2018; others: after 15 Dec 2021.', 'Public business entity: esercizi che iniziano dopo il 15 dic 2018; altre: dopo il 15 dic 2021.') }
    ],
    sources: [
      { label: 'FASB — ASC 842 Leases (ASU 2016-02 and effective date deferrals)', url: 'https://www.fasb.org/' },
      { label: 'IFRS Foundation — IFRS 16 Leases', url: 'https://www.ifrs.org/issued-standards/list-of-standards/ifrs-16-leases/' }
    ]
  },
  /* ------------------------------------------------------------ */
  {
    id: 'acc-asc-805-810',
    academyId: 'accounting',
    moduleId: 'A5',
    mode: 'quick',
    minutes: 8,
    difficulty: 3,
    reviewed: '2026-10',
    objective: t(
      'Apply the ASC 805 acquisition method (full goodwill, measurement period, transaction costs, contingent consideration) and decide when to consolidate under ASC 810 (VIE vs voting interest models).',
      'Applicare il metodo dell\'acquisizione ASC 805 (avviamento pieno, periodo di misurazione, costi di transazione, corrispettivi potenziali) e stabilire quando consolidare secondo l\'ASC 810 (modello VIE vs modello dei diritti di voto).'
    ),
    screens: [
      {
        type: 'intuition',
        title: t('Who controls, and what did they pay for?', 'Chi controlla, e cosa ha pagato?'),
        body: t(
          'Two questions sit behind every US M&A accounting answer. **ASC 810**: does the buyer control the target, so that it must consolidate it? **ASC 805**: if so, how is the price allocated between identifiable assets, liabilities and goodwill?\n\nUS rules are close to IFRS 3/IFRS 10 — but with a few differences that change goodwill and which entities appear in the group.',
          'Dietro ogni risposta contabile sull\'M&A americano ci sono due domande. **ASC 810**: l\'acquirente controlla il target, e quindi deve consolidarlo? **ASC 805**: se sì, come si alloca il prezzo tra attività, passività identificabili e avviamento?\n\nLe regole US sono vicine a IFRS 3/IFRS 10 — ma con alcune differenze che cambiano l\'avviamento e le entità che entrano nel gruppo.'
        )
      },
      {
        type: 'technical',
        title: t('ASC 805: the acquisition method', 'ASC 805: il metodo dell\'acquisizione'),
        body: t(
          '1. Identify the **acquirer**.\n2. Determine the **acquisition date** (when control is obtained).\n3. Recognise and measure identifiable assets acquired and liabilities assumed at **fair value** (with limited exceptions, e.g. deferred taxes under ASC 740), and **NCI at fair value**.\n4. Recognise **goodwill** (or a bargain purchase gain).\n\nKey rules:\n- **Full goodwill only** — NCI at fair value; no proportionate option as in IFRS.\n- **Transaction costs** are expensed (debt and equity issuance costs follow their own guidance).\n- **Contingent consideration** at fair value at acquisition date; if classified as a liability, remeasured through earnings.\n- **Measurement period** up to **one year** to finalise provisional amounts.\n- Step acquisitions: previously held interest remeasured to fair value, gain/loss in earnings.',
          '1. Identificare l\'**acquirente**.\n2. Determinare la **data di acquisizione** (quando si ottiene il controllo).\n3. Rilevare e misurare attività acquisite e passività assunte identificabili al **fair value** (con limitate eccezioni, es. le imposte differite secondo l\'ASC 740), e i **terzi al fair value**.\n4. Rilevare l\'**avviamento** (o un utile da acquisto a prezzi favorevoli).\n\nRegole chiave:\n- **Solo avviamento pieno** — terzi al fair value; nessuna opzione proporzionale come in IFRS.\n- I **costi di transazione** vanno a conto economico (i costi di emissione di debito e capitale seguono regole proprie).\n- **Corrispettivo potenziale** al fair value alla data di acquisizione; se classificato come passività, rimisurato a conto economico.\n- **Periodo di misurazione** fino a **un anno** per completare gli importi provvisori.\n- Acquisizioni per fasi: la quota già posseduta si rimisura al fair value, con utile/perdita a conto economico.'
        )
      },
      {
        type: 'formula',
        formulas: [
          {
            name: t('Goodwill under ASC 805', 'Avviamento secondo l\'ASC 805'),
            expr: 'Goodwill = Consideration transferred + FV of NCI + FV of previously held interest − FV of identifiable net assets',
            vars: [
              { sym: 'Negative result', desc: t('Bargain purchase gain in earnings, after reassessing the measurements', 'Utile da acquisto a prezzi favorevoli a conto economico, dopo aver riverificato le misurazioni') }
            ]
          }
        ],
        note: t(
          'Goodwill is not amortised by public companies: it is tested at least annually at the **reporting unit** level; since ASU 2017-04 the impairment equals the excess of the unit\'s carrying amount over its fair value, capped at goodwill. Private companies may elect to amortise goodwill over ≤ 10 years.',
          'Le società quotate non ammortizzano l\'avviamento: lo testano almeno una volta l\'anno a livello di **reporting unit**; dall\'ASU 2017-04 la perdita è pari all\'eccedenza del valore contabile dell\'unità sul suo fair value, nel limite dell\'avviamento. Le società private possono scegliere di ammortizzarlo in ≤ 10 anni.'
        )
      },
      {
        type: 'example',
        title: t('Buying 60% of a US target ($m)', 'Acquisto del 60% di un target americano ($m)'),
        body: t(
          'Consideration $540m for 60%; the buyer already held 10% (fair value now $85m, carrying amount $60m). FV of identifiable net assets $700m; FV of the 30% NCI $250m. Transaction costs $12m.',
          'Corrispettivo $540m per il 60%; l\'acquirente possedeva già il 10% (fair value attuale $85m, valore contabile $60m). FV dell\'attivo netto identificabile $700m; FV del 30% dei terzi $250m. Costi di transazione $12m.'
        ),
        table: {
          headers: [t('$m', '$m'), t('Amount', 'Importo')],
          rows: [
            [t('Consideration transferred', 'Corrispettivo trasferito'), '540'],
            [t('+ FV of NCI (30%)', '+ FV dei terzi (30%)'), '250'],
            [t('+ FV of previously held 10%', '+ FV del 10% già posseduto'), '85'],
            [t('− FV of identifiable net assets', '− FV dell\'attivo netto identificabile'), '(700)'],
            [t('Goodwill', 'Avviamento'), '175'],
            [t('Gain on remeasuring the 10% (85 − 60), in earnings', 'Utile da rimisurazione del 10% (85 − 60), a conto economico'), '25'],
            [t('Transaction costs, expensed', 'Costi di transazione, a conto economico'), '(12)']
          ],
          totalRows: [4]
        }
      },
      {
        type: 'technical',
        title: t('ASC 810: two consolidation models', 'ASC 810: due modelli di consolidamento'),
        body: t(
          'First ask whether the entity is a **variable interest entity (VIE)**; only if not, apply the **voting interest model**.\n\n**VIE model** — an entity is a VIE if, e.g., its equity at risk is insufficient to finance its activities without additional subordinated support, or its equity holders as a group lack the power to direct its key activities or the obligation to absorb losses / right to receive returns. The **primary beneficiary** consolidates: the party with (1) **power** to direct the activities that most significantly affect economic performance and (2) the **obligation to absorb losses or right to receive benefits** that could be significant.\n\n**Voting interest model** — generally, a **majority of voting interests** (> 50%) means control; for limited partnerships, substantive kick-out rights matter.\n\nIFRS 10 instead uses a single control model (power, exposure to variable returns, link between them).',
          'Prima ci si chiede se l\'entità è una **variable interest entity (VIE)**; solo in caso negativo si applica il **modello dei diritti di voto**.\n\n**Modello VIE** — un\'entità è una VIE se, ad esempio, il capitale a rischio è insufficiente a finanziarne le attività senza ulteriore supporto subordinato, oppure i detentori del capitale nel loro insieme non hanno il potere di dirigerne le attività chiave o l\'obbligo di assorbirne le perdite / il diritto a riceverne i rendimenti. Consolida il **primary beneficiary**: chi ha (1) il **potere** di dirigere le attività che incidono maggiormente sulla performance economica e (2) l\'**obbligo di assorbire perdite o il diritto a ricevere benefici** potenzialmente significativi.\n\n**Modello dei diritti di voto** — in generale la **maggioranza dei diritti di voto** (> 50%) indica il controllo; per le limited partnership contano i kick-out rights sostanziali.\n\nL\'IFRS 10 usa invece un unico modello di controllo (potere, esposizione ai rendimenti variabili, collegamento tra i due).'
        )
      },
      {
        type: 'realworld',
        body: t(
          'VIE analysis matters for structured deals: joint ventures with disproportionate economics, securitisation vehicles, franchise and power purchase arrangements, and US-listed companies with operations in jurisdictions restricting foreign ownership (the "VIE structures" of some Chinese issuers). In M&A modelling, ASC 805 drives the PPA: step-ups, new intangibles, goodwill and the deferred tax on them — all feeding pro forma EPS.',
          'L\'analisi VIE conta nelle operazioni strutturate: joint venture con ripartizione asimmetrica dei rendimenti, veicoli di cartolarizzazione, accordi di franchising e di fornitura di energia, e società quotate negli USA con attività in Paesi che limitano la proprietà estera (le "strutture VIE" di alcuni emittenti cinesi). Nei modelli di M&A l\'ASC 805 guida la PPA: rivalutazioni, nuovi intangibili, avviamento e relativa fiscalità differita — tutti input dell\'EPS pro forma.'
        )
      },
      { type: 'exercise', questionId: 'acc-asc805-q1' },
      { type: 'exercise', questionId: 'acc-asc805-q2' },
      { type: 'exercise', questionId: 'acc-asc805-q3' },
      {
        type: 'interview',
        question: t('How is goodwill different under US GAAP and IFRS when the buyer acquires less than 100%?', 'In cosa differisce l\'avviamento tra US GAAP e IFRS quando l\'acquirente compra meno del 100%?'),
        answer: t(
          'Under ASC 805 the non-controlling interest must be measured at fair value, so goodwill is always "full goodwill" — it includes the goodwill attributable to minority shareholders. IFRS 3 lets the acquirer choose, deal by deal, between fair value, giving the same full goodwill, and the NCI\'s proportionate share of identifiable net assets, giving lower "partial goodwill". Also, US public companies test goodwill at the reporting unit level with a one-step fair value comparison, while IFRS tests at CGU level against recoverable amount.',
          'Con l\'ASC 805 le interessenze di terzi vanno misurate al fair value, quindi l\'avviamento è sempre "pieno" — include la parte attribuibile ai soci di minoranza. L\'IFRS 3 consente di scegliere, operazione per operazione, tra fair value, che dà lo stesso avviamento pieno, e quota proporzionale dei terzi nell\'attivo netto identificabile, che dà un avviamento "parziale" più basso. Inoltre le società quotate US testano l\'avviamento a livello di reporting unit con un confronto in un solo passaggio con il fair value, mentre gli IFRS lo testano a livello di CGU rispetto al valore recuperabile.'
        )
      },
      {
        type: 'mistakes',
        items: [
          t('Capitalising transaction costs into goodwill. Under ASC 805 (and IFRS 3) they are expensed.', 'Capitalizzare i costi di transazione nell\'avviamento. Con l\'ASC 805 (e l\'IFRS 3) vanno a conto economico.'),
          t('Applying the voting interest model first. Under ASC 810, the VIE assessment comes first.', 'Applicare per primo il modello dei diritti di voto. Nell\'ASC 810 la valutazione VIE viene prima.'),
          t('Forgetting to remeasure a previously held stake to fair value in a step acquisition.', 'Dimenticare di rimisurare al fair value la quota già posseduta in un\'acquisizione per fasi.'),
          t('Adjusting goodwill for contingent consideration remeasurements after the measurement period — they go through earnings.', 'Rettificare l\'avviamento per le rimisurazioni del corrispettivo potenziale dopo il periodo di misurazione — vanno a conto economico.')
        ]
      },
      {
        type: 'summary',
        items: [
          t('ASC 805: fair value everything, NCI at fair value → full goodwill only.', 'ASC 805: tutto al fair value, terzi al fair value → solo avviamento pieno.'),
          t('Transaction costs expensed; measurement period ≤ 1 year; liability-classified earn-outs remeasured through earnings.', 'Costi di transazione a conto economico; periodo di misurazione ≤ 1 anno; earn-out classificati come passività rimisurati a conto economico.'),
          t('Goodwill: annual test at reporting unit level, one-step (ASU 2017-04); private-company amortisation option.', 'Avviamento: test annuale a livello di reporting unit, in un passaggio (ASU 2017-04); opzione di ammortamento per le private.'),
          t('ASC 810: VIE model first (primary beneficiary: power + significant losses/benefits), then voting interest (> 50%).', 'ASC 810: prima il modello VIE (primary beneficiary: potere + perdite/benefici significativi), poi i diritti di voto (> 50%).')
        ]
      }
    ],
    questions: [
      {
        id: 'acc-asc805-q1',
        kind: 'numeric',
        topic: 'business-combinations',
        difficulty: 3,
        objective: t('Compute goodwill in a step acquisition under ASC 805.', 'Calcolare l\'avviamento in un\'acquisizione per fasi secondo l\'ASC 805.'),
        prompt: t(
          'A buyer pays $400m for an additional 50% of a target, reaching 70%. Its existing 20% has a fair value of $150m. FV of the 30% NCI is $230m; FV of identifiable net assets $650m. Goodwill ($m)?',
          'Un acquirente paga $400m per un ulteriore 50% di un target, arrivando al 70%. Il 20% già posseduto ha un fair value di $150m. FV del 30% dei terzi $230m; FV dell\'attivo netto identificabile $650m. Avviamento ($m)?'
        ),
        answer: 130,
        unit: '$m',
        verify: { fn: 'goodwill', args: [400, 650, 230, 150] },
        explanation: t(
          '400 + 230 + 150 − 650 = 130. Omitting the previously held interest (−20) or measuring NCI at its share of net assets (30% × 650 = 195 → 95) are, respectively, an error and an IFRS-only option.',
          '400 + 230 + 150 − 650 = 130. Omettere la quota già posseduta (−20) o misurare i terzi alla quota dell\'attivo netto (30% × 650 = 195 → 95) sono rispettivamente un errore e un\'opzione solo IFRS.'
        )
      },
      {
        id: 'acc-asc805-q2',
        kind: 'mcq',
        topic: 'business-combinations',
        difficulty: 2,
        objective: t('Apply the ASC 810 model sequence.', 'Applicare la sequenza dei modelli ASC 810.'),
        prompt: t(
          'A company holds 40% of the votes of an entity with thin equity that relies on the company\'s subordinated loans; the company directs its key activities and absorbs most of its losses. Under ASC 810:',
          'Una società detiene il 40% dei voti di un\'entità sottocapitalizzata che dipende dai suoi finanziamenti subordinati; la società ne dirige le attività chiave e ne assorbe la maggior parte delle perdite. Secondo l\'ASC 810:'
        ),
        choices: [
          t('No consolidation — it does not hold a majority of votes', 'Nessun consolidamento — non detiene la maggioranza dei voti'),
          t('Equity method — 40% gives significant influence', 'Metodo del patrimonio netto — il 40% dà influenza notevole'),
          t('Consolidate as primary beneficiary of a VIE', 'Consolida come primary beneficiary di una VIE'),
          t('Proportionate consolidation of 40%', 'Consolidamento proporzionale del 40%')
        ],
        correct: 2,
        explanation: t(
          'Insufficient equity at risk makes it a VIE, so the VIE model applies before votes are considered. The company has power and the obligation to absorb significant losses → primary beneficiary → consolidates. The voting majority test is irrelevant here; proportionate consolidation is not a US GAAP option for such entities.',
          'Il capitale a rischio insufficiente la rende una VIE, quindi si applica il modello VIE prima di guardare ai voti. La società ha potere e l\'obbligo di assorbire perdite significative → primary beneficiary → consolida. Il test della maggioranza dei voti qui è irrilevante; il consolidamento proporzionale non è un\'opzione US GAAP per queste entità.'
        )
      },
      {
        id: 'acc-asc805-q3',
        kind: 'multi',
        topic: 'business-combinations',
        difficulty: 2,
        objective: t('Recall ASC 805 measurement rules.', 'Ricordare le regole di misurazione ASC 805.'),
        prompt: t('Under ASC 805, which statements are correct? Select all that apply.', 'Secondo l\'ASC 805, quali affermazioni sono corrette? Seleziona tutte le risposte corrette.'),
        choices: [
          t('Advisory and legal fees for the deal are expensed', 'Le commissioni di advisory e legali sul deal vanno a conto economico'),
          t('NCI may be measured at its proportionate share of net assets', 'I terzi possono essere misurati alla quota proporzionale dell\'attivo netto'),
          t('Provisional amounts can be adjusted within a measurement period of up to one year', 'Gli importi provvisori possono essere rettificati entro un periodo di misurazione fino a un anno'),
          t('Contingent consideration is recognised at fair value at the acquisition date', 'Il corrispettivo potenziale si rileva al fair value alla data di acquisizione'),
          t('A bargain purchase is recorded as negative goodwill on the balance sheet', 'Un acquisto a prezzi favorevoli si rileva come avviamento negativo in bilancio')
        ],
        correct: [0, 2, 3],
        explanation: t(
          'Deal fees are expensed, the measurement period is up to one year and contingent consideration starts at fair value. NCI must be at fair value under US GAAP (proportionate is an IFRS option), and a bargain purchase is a gain in earnings, not negative goodwill.',
          'Le commissioni vanno a conto economico, il periodo di misurazione arriva a un anno e il corrispettivo potenziale parte dal fair value. I terzi vanno al fair value in US GAAP (la quota proporzionale è un\'opzione IFRS) e un acquisto a prezzi favorevoli è un utile a conto economico, non avviamento negativo.'
        )
      }
    ],
    flashcards: [
      { id: 'fc-acc-asc805-1', topic: 'business-combinations', front: t('NCI measurement under ASC 805?', 'Misurazione dei terzi secondo l\'ASC 805?'), back: t('Fair value only → full goodwill.', 'Solo fair value → avviamento pieno.') },
      { id: 'fc-acc-asc805-2', topic: 'business-combinations', front: t('Primary beneficiary of a VIE?', 'Primary beneficiary di una VIE?'), back: t('Has power over the most significant activities AND the obligation to absorb losses / right to benefits that could be significant.', 'Ha il potere sulle attività più significative E l\'obbligo di assorbire perdite / il diritto a benefici potenzialmente significativi.') },
      { id: 'fc-acc-asc805-3', topic: 'business-combinations', front: t('US GAAP goodwill impairment since ASU 2017-04?', 'Impairment dell\'avviamento US GAAP dall\'ASU 2017-04?'), back: t('One step: reporting unit carrying amount − fair value, capped at goodwill.', 'Un passaggio: valore contabile della reporting unit − fair value, nel limite dell\'avviamento.') },
      { id: 'fc-acc-asc805-4', topic: 'business-combinations', front: t('ASC 805 measurement period?', 'Periodo di misurazione ASC 805?'), back: t('Up to one year from the acquisition date.', 'Fino a un anno dalla data di acquisizione.') }
    ],
    sources: [
      { label: 'FASB — ASC 805 Business Combinations; ASC 810 Consolidation; ASU 2017-04 (goodwill impairment)', url: 'https://asc.fasb.org/' },
      { label: 'IFRS Foundation — IFRS 3 Business Combinations; IFRS 10 Consolidated Financial Statements', url: 'https://www.ifrs.org/issued-standards/list-of-standards/' }
    ]
  },
  /* @@END-A5@@ */
];

export const lessons: Lesson[] = [...a3, ...a4, ...a5];
