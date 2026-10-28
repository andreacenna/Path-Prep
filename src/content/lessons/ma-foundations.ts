import type { L, Lesson } from '../types';

/**
 * Academy 4 (M&A) — Modules M1 (M&A Fundamentals) and M2 (The M&A Advisory Process).
 */

const t = (en: string, it: string): L => ({ en, it });

export const lessons: Lesson[] = [
  /* ================================================================== */
  /* M1 — ma-what-is-ma                                                  */
  /* ================================================================== */
  {
    id: 'ma-what-is-ma',
    academyId: 'ma',
    moduleId: 'M1',
    mode: 'deep',
    minutes: 10,
    difficulty: 1,
    reviewed: '2026-10',
    objective: t(
      'Distinguish mergers, acquisitions, tender offers and consolidations, and separate the legal form of a deal from its economic substance.',
      'Distinguere fusioni, acquisizioni, offerte pubbliche e fusioni per costituzione di nuova società, separando la forma giuridica di un’operazione dalla sua sostanza economica.'
    ),
    screens: [
      {
        type: 'intuition',
        title: t('M&A is about control', 'L’M&A riguarda il controllo'),
        body: t(
          'Strip away the jargon and every M&A deal answers one question: **who controls this business after the deal?**\n\nIn an **acquisition**, a buyer takes control of a target — usually by buying more than 50% of its shares or its business assets. The target often survives as a subsidiary.\n\nIn a **merger**, two companies legally become one: at least one entity disappears and its assets, liabilities and shareholders are absorbed. Bankers use "M&A" loosely for both, because the economics are usually the same: one side ends up in charge.',
          'Togliendo il gergo, ogni operazione di M&A risponde a una domanda: **chi controlla il business dopo il deal?**\n\nIn un’**acquisizione** un acquirente prende il controllo di un target — di solito comprando più del 50% delle azioni o il complesso aziendale. Il target spesso sopravvive come controllata.\n\nIn una **fusione** due società diventano giuridicamente una: almeno un’entità si estingue e le sue attività, passività e soci vengono assorbiti. I banker usano "M&A" per entrambe, perché l’economia è quasi sempre la stessa: alla fine una parte comanda.'
        )
      },
      {
        type: 'technical',
        title: t('The main legal routes to control', 'Le principali strade giuridiche per il controllo'),
        body: t(
          '- **Share purchase**: buy the target’s shares from its owners (typical for private companies, governed by an SPA).\n- **Asset purchase**: buy selected assets and liabilities, not the legal entity.\n- **Statutory merger**: the target merges into the buyer by law and ceases to exist (in Italy, **fusione per incorporazione**, art. 2501 c.c.; in Delaware, DGCL §251).\n- **Consolidation**: both companies merge into a **new** entity (Italy: fusione mediante costituzione di una nuova società).\n- **Tender offer**: a public offer made directly to shareholders of a listed company (Italy: **OPA/OPS** under the TUF, supervised by Consob).',
          '- **Acquisto di partecipazioni (share deal)**: si comprano le azioni del target dai soci (tipico per le società non quotate, disciplinato da un SPA).\n- **Acquisto di asset (asset deal)**: si acquistano singole attività e passività o un ramo d’azienda, non la società.\n- **Fusione**: il target si fonde nell’acquirente e si estingue (in Italia **fusione per incorporazione**, art. 2501 c.c.; in Delaware DGCL §251).\n- **Fusione propriamente detta**: entrambe le società confluiscono in una **nuova** società (fusione mediante costituzione di una nuova società).\n- **Offerta pubblica**: offerta rivolta direttamente agli azionisti di una quotata (in Italia **OPA/OPS** ai sensi del TUF, sotto la vigilanza Consob).'
        )
      },
      {
        type: 'technical',
        title: t('How an Italian merger works', 'Come funziona una fusione in Italia'),
        body: t(
          'Under the Italian Civil Code (arts. 2501 ff.) a merger follows a formal path:\n\n- Boards approve the **merger plan** (progetto di fusione, art. 2501-ter), including the **exchange ratio**.\n- Directors’ report and an independent **experts’ report on the fairness of the exchange ratio** (artt. 2501-quinquies and 2501-sexies).\n- **Shareholders’ meetings** of each company approve the merger.\n- **Creditors may oppose** within 60 days of registration of the resolutions (art. 2503).\n- The **deed of merger** (atto di fusione) is signed and registered: the merged company is extinguished.\n\nAfter an LBO, the acquisition vehicle is often merged with the target — a **fusione con indebitamento** (art. 2501-bis), which needs extra disclosure on the debt plan.',
          'Secondo il Codice Civile (artt. 2501 ss.) la fusione segue un iter formale:\n\n- Gli organi amministrativi approvano il **progetto di fusione** (art. 2501-ter), con il **rapporto di cambio**.\n- Relazione degli amministratori e **relazione degli esperti sulla congruità del rapporto di cambio** (artt. 2501-quinquies e 2501-sexies).\n- Le **assemblee** di ciascuna società approvano la fusione.\n- **Opposizione dei creditori** entro 60 giorni dall’iscrizione delle delibere (art. 2503).\n- Si stipula e si iscrive l’**atto di fusione**: la società incorporata si estingue.\n\nDopo un LBO la NewCo veicolo viene spesso fusa con il target — **fusione con indebitamento** (art. 2501-bis), che richiede informativa aggiuntiva sul piano di rimborso del debito.'
        )
      },
      {
        type: 'technical',
        title: t('Legal form vs economic substance', 'Forma giuridica vs sostanza economica'),
        body: t(
          'The legal survivor is not always the economic winner. A deal marketed as a **"merger of equals"** almost always has one side that effectively controls the combined group.\n\nAccounting forces the question: **IFRS 3** requires an **acquirer** to be identified in every business combination. Indicators include:\n\n- relative **voting rights** after the deal;\n- who appoints the majority of the **board**;\n- who supplies the **senior management**;\n- who **pays a premium**;\n- relative **size** of the two businesses.\n\nSo the legal acquirer can be the accounting acquiree (a "reverse acquisition").',
          'Chi sopravvive giuridicamente non è sempre il vincitore economico. Un’operazione presentata come **"merger of equals"** ha quasi sempre una parte che di fatto controlla il gruppo combinato.\n\nLa contabilità impone la domanda: l’**IFRS 3** richiede di identificare un **acquirente** in ogni aggregazione aziendale. Gli indicatori comprendono:\n\n- i **diritti di voto** relativi dopo l’operazione;\n- chi nomina la maggioranza del **consiglio**;\n- chi esprime il **top management**;\n- chi **paga un premio**;\n- la **dimensione** relativa dei due business.\n\nQuindi l’acquirente giuridico può essere l’acquisita contabile ("acquisizione inversa").'
        )
      },
      {
        type: 'formula',
        formulas: [
          {
            name: t('Exchange ratio (stock-for-stock merger)', 'Rapporto di cambio (fusione carta contro carta)'),
            expr: 'Exchange ratio = Value per target share ÷ Value per acquirer share',
            vars: [
              { sym: 'Exchange ratio', desc: t('New acquirer shares received per target share', 'Nuove azioni dell’incorporante ricevute per ogni azione dell’incorporata') }
            ]
          },
          {
            name: t('New shares and ownership split', 'Nuove azioni e ripartizione del capitale'),
            expr: 'New shares = Target shares × Exchange ratio;  Target holders’ stake = New shares ÷ (Acquirer shares + New shares)'
          }
        ],
        note: t(
          'In a merger the "price" is the exchange ratio: it decides how the combined company is split between the two shareholder bases.',
          'In una fusione il "prezzo" è il rapporto di cambio: decide come il capitale della società risultante si divide tra le due compagini sociali.'
        )
      },
      {
        type: 'example',
        title: t('Alfa S.p.A. absorbs Beta S.p.A.', 'Alfa S.p.A. incorpora Beta S.p.A.'),
        body: t(
          'Alfa has 100m shares valued at €40. Beta has 50m shares; the parties agree a value of €24 per Beta share. Beta merges into Alfa (fusione per incorporazione).',
          'Alfa ha 100m di azioni valutate €40. Beta ha 50m di azioni; le parti concordano un valore di €24 per azione Beta. Beta si fonde in Alfa (fusione per incorporazione).'
        ),
        table: {
          headers: [t('Step', 'Passaggio'), t('Calculation', 'Calcolo'), t('Result', 'Risultato')],
          rows: [
            [t('Exchange ratio', 'Rapporto di cambio'), '24 ÷ 40', '0.60'],
            [t('New Alfa shares issued', 'Nuove azioni Alfa emesse'), '50m × 0.60', '30m'],
            [t('Total Alfa shares post-merger', 'Azioni Alfa post fusione'), '100m + 30m', '130m'],
            [t('Ex-Beta holders’ stake', 'Quota ex soci Beta'), '30 ÷ 130', '23.1%'],
            [t('Original Alfa holders’ stake', 'Quota soci originari Alfa'), '100 ÷ 130', '76.9%']
          ],
          totalRows: [3]
        }
      },
      {
        type: 'realworld',
        title: t('Stellantis and US two-step deals', 'Stellantis e i deal "two-step" negli USA'),
        body: t(
          '**Stellantis (2021)** was presented as a 50/50 merger of FCA and PSA. Legally, PSA merged into FCA N.V., which was renamed Stellantis. For IFRS 3 purposes, however, **PSA was identified as the accounting acquirer** — a textbook case of legal form differing from economic substance.\n\nIn the US, many public acquisitions are **two-step**: a cash tender offer (open for at least 20 business days under SEC Rule 14e-1), followed by a back-end merger that squeezes out remaining holders — under DGCL §251(h) often without a further shareholder vote.',
          '**Stellantis (2021)** è stata presentata come fusione paritetica tra FCA e PSA. Giuridicamente PSA si è fusa in FCA N.V., rinominata Stellantis. Ai fini IFRS 3, però, **PSA è stata identificata come acquirente contabile** — caso da manuale di forma giuridica diversa dalla sostanza.\n\nNegli USA molte acquisizioni di quotate sono **"two-step"**: un’offerta pubblica in contanti (aperta almeno 20 giorni lavorativi ai sensi della SEC Rule 14e-1) seguita da una fusione che elimina gli azionisti residui — con la DGCL §251(h) spesso senza un ulteriore voto assembleare.'
        )
      },
      { type: 'exercise', questionId: 'ma-wim-q1' },
      { type: 'exercise', questionId: 'ma-wim-q2' },
      { type: 'exercise', questionId: 'ma-wim-q3' },
      {
        type: 'interview',
        question: t('What is the difference between a merger and an acquisition?', 'Qual è la differenza tra una fusione e un’acquisizione?'),
        answer: t(
          'Legally, in an acquisition the buyer takes control of the target — typically by buying a majority of its shares or its assets — and the target can survive as a subsidiary. In a merger the two entities combine into one, and at least one ceases to exist; shareholders of the absorbed company usually receive shares of the survivor based on an exchange ratio. Economically the distinction blurs: even a "merger of equals" normally has a controlling side, and IFRS 3 forces you to identify an acquirer. So I would look at who controls the board, management and votes, and who pays the premium.',
          'Giuridicamente, nell’acquisizione l’acquirente prende il controllo del target — di solito comprando la maggioranza delle azioni o gli asset — e il target può sopravvivere come controllata. Nella fusione le due entità diventano una e almeno una si estingue; i soci dell’incorporata ricevono in genere azioni della società risultante in base a un rapporto di cambio. Economicamente la distinzione sfuma: anche un "merger of equals" ha di norma una parte che controlla, e l’IFRS 3 impone di identificare un acquirente. Guarderei quindi a chi controlla consiglio, management e voti, e a chi paga il premio.'
        )
      },
      {
        type: 'mistakes',
        items: [
          t('Assuming the legal survivor is the acquirer. Check board, management, votes and who pays the premium.', 'Dare per scontato che la società superstite sia l’acquirente. Verifica consiglio, management, voti e chi paga il premio.'),
          t('Confusing fusione per incorporazione (target absorbed into an existing company) with fusione propriamente detta (a new company is formed).', 'Confondere la fusione per incorporazione (il target confluisce in una società esistente) con la fusione propriamente detta (nasce una nuova società).'),
          t('Thinking a tender offer is negotiated with the target’s board only. It is addressed to the shareholders, who decide whether to tender.', 'Pensare che un’offerta pubblica si negozi solo con il CdA del target. È rivolta agli azionisti, che decidono se aderire.'),
          t('Calculating ownership as new shares ÷ old acquirer shares instead of ÷ total post-deal shares.', 'Calcolare la quota come nuove azioni ÷ vecchie azioni dell’acquirente invece che ÷ totale azioni post operazione.')
        ]
      },
      {
        type: 'summary',
        items: [
          t('Acquisition = buyer takes control; merger = entities legally combine and one disappears.', 'Acquisizione = l’acquirente prende il controllo; fusione = le entità si uniscono e una si estingue.'),
          t('Routes: share deal, asset deal, statutory merger, consolidation, tender offer.', 'Strade: share deal, asset deal, fusione per incorporazione, fusione propriamente detta, offerta pubblica.'),
          t('In stock mergers the exchange ratio sets the ownership split.', 'Nelle fusioni carta contro carta il rapporto di cambio determina la ripartizione del capitale.'),
          t('IFRS 3 always identifies an accounting acquirer, whatever the legal form.', 'L’IFRS 3 identifica sempre un acquirente contabile, qualunque sia la forma giuridica.')
        ]
      }
    ],
    questions: [
      {
        id: 'ma-wim-q1',
        kind: 'mcq',
        topic: 'ma-deal-structures',
        difficulty: 1,
        objective: t('Identify the legal form of a business combination.', 'Riconoscere la forma giuridica di un’aggregazione.'),
        prompt: t(
          'Gamma S.p.A. and Delta S.p.A. both cease to exist and their businesses are transferred to a newly formed company, Omega S.p.A. What is this?',
          'Gamma S.p.A. e Delta S.p.A. si estinguono entrambe e i loro business confluiscono in una società di nuova costituzione, Omega S.p.A. Di che operazione si tratta?'
        ),
        choices: [
          t('A fusione per incorporazione (statutory merger by absorption)', 'Una fusione per incorporazione'),
          t('A share purchase', 'Un acquisto di partecipazioni'),
          t('A consolidation (fusione mediante costituzione di una nuova società)', 'Una fusione propriamente detta (mediante costituzione di una nuova società)'),
          t('A tender offer', 'Un’offerta pubblica di acquisto')
        ],
        correct: 2,
        explanation: t(
          'When both companies are extinguished into a new entity, it is a consolidation. In a merger by absorption one company survives; a share purchase leaves the target alive as a subsidiary; a tender offer is a method to buy shares from public shareholders.',
          'Quando entrambe le società si estinguono confluendo in una nuova entità si ha una fusione propriamente detta. Nella fusione per incorporazione una società sopravvive; l’acquisto di partecipazioni lascia il target in vita come controllata; l’OPA è un metodo per comprare azioni dal mercato.'
        )
      },
      {
        id: 'ma-wim-q2',
        kind: 'numeric',
        topic: 'exchange-ratio',
        difficulty: 1,
        objective: t('Compute an exchange ratio.', 'Calcolare un rapporto di cambio.'),
        prompt: t(
          'In an all-stock merger, TargetCo shares are valued at €18 and AcquirerCo shares trade at €45. What is the exchange ratio (AcquirerCo shares per TargetCo share)?',
          'In una fusione interamente carta contro carta, le azioni TargetCo valgono €18 e le azioni AcquirerCo quotano €45. Qual è il rapporto di cambio (azioni AcquirerCo per azione TargetCo)?'
        ),
        answer: 0.4,
        unit: 'x',
        verify: { fn: 'exchangeRatio', args: [18, 45] },
        explanation: t('Exchange ratio = 18 ÷ 45 = 0.40 AcquirerCo shares per TargetCo share.', 'Rapporto di cambio = 18 ÷ 45 = 0,40 azioni AcquirerCo per azione TargetCo.')
      },
      {
        id: 'ma-wim-q3',
        kind: 'numeric',
        topic: 'exchange-ratio',
        difficulty: 2,
        objective: t('Compute the post-merger ownership split.', 'Calcolare la ripartizione del capitale post fusione.'),
        prompt: t(
          'Continuing: TargetCo has 60m shares and AcquirerCo has 120m shares. With the 0.40 exchange ratio, what percentage of the combined company will former TargetCo shareholders own?',
          'Proseguendo: TargetCo ha 60m di azioni e AcquirerCo 120m. Con il rapporto di cambio di 0,40, quale percentuale della società risultante possiederanno gli ex soci TargetCo?'
        ),
        answer: 16.67,
        unit: '%',
        tolerance: { abs: 0.1 },
        verify: { fn: 'ratio', args: [2400, 144] },
        steps: [
          t('New shares = 60m × 0.40 = 24m', 'Nuove azioni = 60m × 0,40 = 24m'),
          t('Total shares = 120m + 24m = 144m', 'Azioni totali = 120m + 24m = 144m'),
          t('Stake = 24 ÷ 144 = 16.67%', 'Quota = 24 ÷ 144 = 16,67%')
        ],
        explanation: t(
          'Ex-TargetCo holders receive 24m new shares out of 144m total = 16.67%. Dividing by the 120m pre-deal shares (20%) is the classic error.',
          'Gli ex soci TargetCo ricevono 24m di nuove azioni su 144m totali = 16,67%. Dividere per le 120m azioni pre-operazione (20%) è l’errore classico.'
        )
      },
      {
        id: 'ma-wim-q4',
        kind: 'multi',
        topic: 'ifrs3-acquirer',
        difficulty: 2,
        objective: t('Recognise IFRS 3 indicators of the accounting acquirer.', 'Riconoscere gli indicatori IFRS 3 dell’acquirente contabile.'),
        prompt: t(
          'Which factors point to a company being the accounting acquirer under IFRS 3? Select all that apply.',
          'Quali fattori indicano che una società è l’acquirente contabile secondo l’IFRS 3? Seleziona tutte le risposte corrette.'
        ),
        choices: [
          t('Its shareholders hold the largest share of votes in the combined entity', 'I suoi soci detengono la quota maggiore dei voti nell’entità combinata'),
          t('It is the legal entity that survives the merger', 'È l’entità giuridica che sopravvive alla fusione'),
          t('It appoints the majority of the combined board', 'Nomina la maggioranza del consiglio combinato'),
          t('It pays a premium over the other party’s pre-deal value', 'Paga un premio sul valore pre-operazione dell’altra parte'),
          t('Its senior management runs the combined company', 'Il suo top management guida la società combinata')
        ],
        correct: [0, 2, 3, 4],
        explanation: t(
          'Votes, board control, management and paying a premium are all IFRS 3 indicators. Being the legal survivor is not decisive — in a reverse acquisition the legal acquirer is the accounting acquiree.',
          'Voti, controllo del consiglio, management e pagamento di un premio sono tutti indicatori IFRS 3. Essere la società superstite non è decisivo — in un’acquisizione inversa l’acquirente giuridico è l’acquisita contabile.'
        )
      },
      {
        id: 'ma-wim-q5',
        kind: 'order',
        topic: 'ma-deal-structures',
        difficulty: 2,
        objective: t('Sequence the steps of an Italian statutory merger.', 'Ordinare le fasi di una fusione secondo il Codice Civile.'),
        prompt: t('Put the steps of an Italian fusione per incorporazione in order.', 'Metti in ordine le fasi di una fusione per incorporazione.'),
        items: [
          t('Boards approve the merger plan with the exchange ratio', 'Gli organi amministrativi approvano il progetto di fusione con il rapporto di cambio'),
          t('Experts report on the fairness of the exchange ratio', 'Gli esperti redigono la relazione sulla congruità del rapporto di cambio'),
          t('Shareholders’ meetings approve the merger', 'Le assemblee approvano la fusione'),
          t('60-day creditor opposition period runs', 'Decorre il termine di 60 giorni per l’opposizione dei creditori'),
          t('Deed of merger signed and registered', 'Stipula e iscrizione dell’atto di fusione')
        ],
        explanation: t(
          'Plan → experts’ report (made available before the meetings) → shareholder approval → creditor opposition window (art. 2503 c.c.) → deed of merger, after which the absorbed company is extinguished.',
          'Progetto → relazione degli esperti (depositata prima delle assemblee) → delibere assembleari → termine per l’opposizione dei creditori (art. 2503 c.c.) → atto di fusione, dopo il quale l’incorporata si estingue.'
        )
      }
    ],
    flashcards: [
      { id: 'fc-ma-wim-1', topic: 'ma-deal-structures', front: t('Italian law: fusione per incorporazione vs fusione propriamente detta?', 'Che differenza c’è tra fusione per incorporazione e fusione propriamente detta?'), back: t('Incorporazione: target absorbed into an existing company that survives. Propriamente detta: all merging companies are extinguished into a newly formed company.', 'Incorporazione: il target confluisce in una società esistente che sopravvive. Propriamente detta: tutte le società si estinguono confluendo in una società di nuova costituzione.') },
      { id: 'fc-ma-wim-2', topic: 'exchange-ratio', front: t('Formula for the exchange ratio?', 'Formula del rapporto di cambio?'), back: t('Value per target share ÷ value per acquirer share = acquirer shares issued per target share.', 'Valore per azione del target ÷ valore per azione dell’acquirente = azioni dell’acquirente emesse per ogni azione del target.') },
      { id: 'fc-ma-wim-3', topic: 'ma-deal-structures', front: t('What is a tender offer?', 'Che cos’è un’offerta pubblica di acquisto?'), back: t('A public offer made directly to a listed company’s shareholders to buy their shares at a stated price (Italy: OPA under the TUF; US: Williams Act, open ≥20 business days).', 'Un’offerta rivolta direttamente agli azionisti di una quotata per acquistarne le azioni a un prezzo stabilito (Italia: OPA ai sensi del TUF; USA: Williams Act, aperta ≥20 giorni lavorativi).') },
      { id: 'fc-ma-wim-4', topic: 'ifrs3-acquirer', front: t('Does IFRS 3 allow a business combination with no acquirer?', 'L’IFRS 3 ammette un’aggregazione senza acquirente?'), back: t('No. An acquirer must be identified in every business combination, even a "merger of equals".', 'No. Un acquirente va identificato in ogni aggregazione aziendale, anche in un "merger of equals".') },
      { id: 'fc-ma-wim-5', topic: 'ma-deal-structures', front: t('What is a fusione con indebitamento?', 'Che cos’è la fusione con indebitamento?'), back: t('Art. 2501-bis c.c.: a merger after a leveraged acquisition where the target’s assets end up supporting the acquisition debt (typical post-LBO NewCo–target merger); requires a debt repayment plan and extra reports.', 'Art. 2501-bis c.c.: fusione successiva a un’acquisizione a debito in cui il patrimonio del target diventa garanzia o fonte di rimborso del debito (tipica fusione NewCo–target post LBO); richiede un piano di rimborso e relazioni aggiuntive.') }
    ],
    sources: [
      { label: 'Codice Civile, artt. 2501–2505-quater (fusione)', url: 'https://www.normattiva.it/' },
      { label: 'IFRS 3 Business Combinations — identifying the acquirer', url: 'https://www.ifrs.org/issued-standards/list-of-standards/ifrs-3-business-combinations/' },
      { label: 'SEC Rule 14e-1 (17 CFR 240.14e-1) — tender offer minimum period', url: 'https://www.ecfr.gov/current/title-17/chapter-II/part-240/subject-group-ECFR5ae2ba7a4dd8d4a/section-240.14e-1' },
      { label: 'Delaware General Corporation Law §251', url: 'https://delcode.delaware.gov/title8/c001/sc09/' },
      { label: 'Stellantis N.V. filings (SEC) — PSA identified as accounting acquirer under IFRS 3', url: 'https://sec.gov/Archives/edgar/data/1605484/000160548421000032/R8.htm' }
    ]
  },

  /* ================================================================== */
  /* M1 — ma-buyers                                                      */
  /* ================================================================== */
  {
    id: 'ma-buyers',
    academyId: 'ma',
    moduleId: 'M1',
    mode: 'deep',
    minutes: 12,
    difficulty: 2,
    reviewed: '2026-10',
    objective: t(
      'Compare strategic buyers and financial sponsors on return targets, synergies, ability to pay, holding period and financing, and estimate each one’s maximum price.',
      'Confrontare acquirenti strategici e fondi di private equity per rendimenti attesi, sinergie, capacità di pagare, holding period e finanziamento, stimando il prezzo massimo di ciascuno.'
    ),
    screens: [
      {
        type: 'intuition',
        title: t('Two kinds of buyer, two logics', 'Due tipi di acquirente, due logiche'),
        body: t(
          'A **strategic buyer** is an operating company buying a business it will keep and integrate — a competitor, supplier or adjacent player. It asks: *"How much is this worth inside my group?"*\n\nA **financial sponsor** (private equity fund) buys to own for a few years, improve, and **sell**. It asks: *"What can I pay today and still hit my target return at exit?"*\n\nIn every sell-side process, the banker’s first strategic call is which of the two will pay more — and why.',
          'Un **acquirente strategico** è una società industriale che compra un business da tenere e integrare — un concorrente, un fornitore o un operatore adiacente. Si chiede: *"Quanto vale questo business dentro il mio gruppo?"*\n\nUno **sponsor finanziario** (fondo di private equity) compra per detenere qualche anno, migliorare e **rivendere**. Si chiede: *"Quanto posso pagare oggi e raggiungere comunque il rendimento target all’uscita?"*\n\nIn ogni processo sell-side la prima scelta strategica del banker è capire quale dei due pagherà di più — e perché.'
        )
      },
      {
        type: 'technical',
        title: t('Side-by-side comparison', 'Confronto diretto'),
        body: t(
          'The key differences that drive bidding behaviour:',
          'Le differenze chiave che guidano il comportamento in asta:'
        ),
        table: {
          headers: [t('Dimension', 'Dimensione'), t('Strategic', 'Strategico'), t('Financial sponsor', 'Sponsor finanziario')],
          rows: [
            [t('Return metric', 'Metrica di rendimento'), t('NPV vs WACC; EPS accretion; ROIC', 'VAN vs WACC; accrescimento EPS; ROIC'), t('IRR (often ~20%+) and MOIC (~2–3x)', 'IRR (spesso ~20%+) e MOIC (~2–3x)')],
            [t('Synergies', 'Sinergie'), t('Yes: cost and revenue', 'Sì: di costo e di ricavo'), t('Limited (except add-ons to a platform)', 'Limitate (salvo add-on su una piattaforma)')],
            [t('Holding period', 'Holding period'), t('Indefinite', 'Indefinito'), t('Typically 3–7 years', 'Tipicamente 3–7 anni')],
            [t('Financing', 'Finanziamento'), t('Balance-sheet cash, corporate debt, shares', 'Cassa, debito corporate, azioni'), t('Fund equity + significant acquisition debt (LBO)', 'Equity del fondo + rilevante debito di acquisizione (LBO)')],
            [t('Exit', 'Exit'), t('None planned', 'Non prevista'), t('Sale, IPO or secondary buyout', 'Vendita, IPO o secondary buyout')],
            [t('Key sensitivities', 'Sensibilità chiave'), t('Antitrust, integration, shareholders', 'Antitrust, integrazione, azionisti'), t('Debt markets, exit multiple', 'Mercato del debito, multiplo di uscita')]
          ]
        }
      },
      {
        type: 'technical',
        title: t('Why the answer is "it depends"', 'Perché la risposta è "dipende"'),
        body: t(
          'Textbook rule: **strategics can pay more** because they capture synergies. In practice sponsors often win when:\n\n- **debt markets are cheap and open**, so leverage boosts what equity can pay;\n- the target is a **platform** for a buy-and-build strategy, so the sponsor also counts add-on synergies;\n- strategics face **antitrust risk** or shareholder pressure on EPS;\n- the seller values **speed and certainty** and the sponsor has done diligence before.\n\nOther buyer types sit in between: **infrastructure funds**, **sovereign wealth funds**, **family offices** and **pension funds** often accept lower returns over longer horizons.',
          'Regola da manuale: **gli strategici possono pagare di più** perché catturano sinergie. Nella pratica gli sponsor vincono spesso quando:\n\n- il **mercato del debito è aperto e conveniente**, e la leva aumenta ciò che l’equity può pagare;\n- il target è una **piattaforma** per una strategia di buy-and-build, quindi lo sponsor conta anche le sinergie degli add-on;\n- gli strategici hanno **rischi antitrust** o pressioni degli azionisti sull’EPS;\n- il venditore privilegia **rapidità e certezza** e lo sponsor conosce già il dossier.\n\nAltri acquirenti stanno nel mezzo: **fondi infrastrutturali**, **fondi sovrani**, **family office** e **fondi pensione** accettano spesso rendimenti più bassi su orizzonti più lunghi.'
        )
      },
      {
        type: 'formula',
        formulas: [
          {
            name: t('Strategic maximum price', 'Prezzo massimo dello strategico'),
            expr: 'Max EV (strategic) = Standalone value + PV of synergies (net of integration costs)',
            vars: [{ sym: 'PV of synergies', desc: t('What the buyer could give away before the deal destroys value for its shareholders', 'Quanto l’acquirente potrebbe "regalare" prima che l’operazione distrugga valore per i suoi azionisti') }]
          },
          {
            name: t('Sponsor maximum price (IRR-driven)', 'Prezzo massimo dello sponsor (guidato dall’IRR)'),
            expr: 'Max entry equity = Exit equity ÷ (1 + target IRR)^n;  Max EV = Max entry equity + Acquisition debt',
            vars: [
              { sym: 'Exit equity', desc: t('Exit EV − net debt remaining at exit', 'EV di uscita − debito netto residuo all’uscita') },
              { sym: 'n', desc: t('Holding period in years', 'Holding period in anni') }
            ]
          }
        ],
        note: t(
          'This is why sponsors talk in returns and strategics talk in value: the sponsor’s price is solved backwards from the IRR.',
          'Per questo gli sponsor parlano di rendimenti e gli strategici di valore: il prezzo dello sponsor si ricava a ritroso dall’IRR.'
        )
      },
      {
        type: 'example',
        title: t('Who can pay more for TargetCo?', 'Chi può pagare di più per TargetCo?'),
        body: t(
          'TargetCo: EBITDA €50m. A sponsor can raise 5.0x EBITDA of debt (€250m), expects to exit after 5 years at 9.0x on €70m EBITDA with €130m net debt left, and targets a 20% IRR. A strategic values TargetCo standalone at €425m and expects synergies worth €150m (PV, net of costs).',
          'TargetCo: EBITDA €50m. Uno sponsor può raccogliere debito pari a 5,0x EBITDA (€250m), prevede di uscire dopo 5 anni a 9,0x su un EBITDA di €70m con €130m di debito netto residuo e punta a un IRR del 20%. Uno strategico valuta TargetCo stand-alone €425m e stima sinergie per €150m (valore attuale, al netto dei costi).'
        ),
        table: {
          headers: [t('€m', '€m'), t('Sponsor', 'Sponsor'), t('Strategic', 'Strategico')],
          rows: [
            [t('Exit EV (9.0x × 70)', 'EV di uscita (9,0x × 70)'), '630', '—'],
            [t('Exit equity (630 − 130)', 'Equity all’uscita (630 − 130)'), '500', '—'],
            [t('Max entry equity (500 ÷ 1.2^5)', 'Equity massimo all’ingresso (500 ÷ 1,2^5)'), '200.9', '—'],
            [t('+ Acquisition debt / standalone value', '+ Debito di acquisizione / valore stand-alone'), '250.0', '425.0'],
            [t('+ PV synergies', '+ VA sinergie'), '—', '150.0'],
            [t('Maximum EV', 'EV massimo'), '450.9 (9.0x)', '575.0 (11.5x)']
          ],
          totalRows: [5]
        }
      },
      {
        type: 'realworld',
        title: t('What analysts actually do with this', 'Cosa ne fanno davvero gli analisti'),
        body: t(
          'On a sell-side mandate the analyst builds the **buyer universe**: a spreadsheet of strategics (by sector, geography, size, M&A appetite, balance-sheet capacity) and sponsors (fund size, sector focus, current portfolio, dry powder, recent deals).\n\nThey then run **"ability to pay"** analysis: a quick LBO showing what a sponsor can pay at 20–25% IRR, and a synergy-adjusted valuation for key strategics. Leveraged finance colleagues are asked what debt package the market would support — the single biggest driver of sponsor bids.',
          'In un mandato sell-side l’analista costruisce l’**universo dei potenziali acquirenti**: un foglio con gli strategici (settore, area geografica, dimensione, propensione all’M&A, capacità di bilancio) e gli sponsor (dimensione del fondo, focus settoriale, portafoglio attuale, dry powder, deal recenti).\n\nPoi svolge l’analisi di **"ability to pay"**: un LBO rapido che mostra quanto può pagare uno sponsor con IRR del 20–25% e una valutazione con sinergie per gli strategici principali. Ai colleghi di leveraged finance si chiede quale pacchetto di debito il mercato sosterrebbe — il fattore che più influenza le offerte degli sponsor.'
        )
      },
      { type: 'exercise', questionId: 'ma-buy-q1' },
      { type: 'exercise', questionId: 'ma-buy-q2' },
      { type: 'exercise', questionId: 'ma-buy-q3' },
      {
        type: 'interview',
        question: t('Who typically pays more, a strategic buyer or a private equity fund?', 'Chi paga di solito di più, un acquirente strategico o un fondo di private equity?'),
        answer: t(
          'In theory the strategic, because it can capture synergies and has no exit to plan, so its maximum price is standalone value plus the value of synergies. A sponsor’s price is capped by its target IRR, typically around 20%, given the debt it can raise and the exit multiple it assumes. But in practice sponsors often win when credit markets are loose, when the target is a platform for add-ons, or when strategics are constrained by antitrust or by EPS dilution. So I would answer: usually the strategic, but leverage availability can flip it.',
          'In teoria lo strategico, perché può catturare sinergie e non deve pianificare un’uscita: il suo prezzo massimo è il valore stand-alone più il valore delle sinergie. Il prezzo dello sponsor è limitato dall’IRR target, tipicamente intorno al 20%, dato il debito che può raccogliere e il multiplo di uscita ipotizzato. Nella pratica però gli sponsor vincono spesso quando il credito è abbondante, quando il target è una piattaforma per add-on o quando gli strategici sono frenati dall’antitrust o dalla diluizione dell’EPS. Risponderei: di solito lo strategico, ma la disponibilità di leva può ribaltare il risultato.'
        )
      },
      {
        type: 'mistakes',
        items: [
          t('Saying "strategics always pay more". Leverage, platform add-ons and antitrust can make sponsors the top bidder.', 'Dire "gli strategici pagano sempre di più". Leva, add-on su piattaforma e antitrust possono rendere lo sponsor il miglior offerente.'),
          t('Forgetting that the sponsor’s EV includes the acquisition debt: equity cheque + debt = price.', 'Dimenticare che l’EV dello sponsor include il debito di acquisizione: equity + debito = prezzo.'),
          t('Assuming a strategic should pay away all synergies. Paying 100% of synergies leaves zero value for its own shareholders.', 'Pensare che uno strategico debba riconoscere tutte le sinergie. Pagarle al 100% lascia valore zero ai propri azionisti.'),
          t('Ignoring other buyers: infrastructure funds, sovereign funds and family offices accept longer holds and lower returns.', 'Ignorare altri acquirenti: fondi infrastrutturali, fondi sovrani e family office accettano holding più lunghi e rendimenti più bassi.')
        ]
      },
      {
        type: 'summary',
        items: [
          t('Strategics: value-driven, synergies, indefinite hold, corporate financing.', 'Strategici: logica di valore, sinergie, holding indefinito, finanziamento corporate.'),
          t('Sponsors: IRR/MOIC-driven, 3–7 year hold, LBO financing, planned exit.', 'Sponsor: logica IRR/MOIC, holding di 3–7 anni, finanziamento LBO, uscita pianificata.'),
          t('Sponsor max price = PV of exit equity at target IRR + debt raised.', 'Prezzo massimo dello sponsor = VA dell’equity di uscita all’IRR target + debito raccolto.'),
          t('Analysts map both buyer types and test each one’s ability to pay.', 'Gli analisti mappano entrambe le tipologie e verificano la capacità di pagare di ciascuna.')
        ]
      }
    ],
    questions: [
      {
        id: 'ma-buy-q1',
        kind: 'numeric',
        topic: 'buyer-ability-to-pay',
        difficulty: 2,
        objective: t('Back-solve a sponsor’s maximum equity cheque from a target IRR.', 'Ricavare a ritroso l’equity massimo di uno sponsor da un IRR target.'),
        prompt: t(
          'A sponsor expects exit equity of €360m after 4 years and targets a 20% IRR. What is the maximum equity it can invest today (€m)?',
          'Uno sponsor prevede un equity all’uscita di €360m dopo 4 anni e punta a un IRR del 20%. Qual è l’equity massimo che può investire oggi (€m)?'
        ),
        answer: 173.61,
        unit: '€m',
        tolerance: { abs: 0.5 },
        verify: { fn: 'pv', args: [360, 0.2, 4] },
        steps: [t('1.20^4 = 2.0736', '1,20^4 = 2,0736'), t('360 ÷ 2.0736 = 173.6', '360 ÷ 2,0736 = 173,6')],
        explanation: t(
          'Discount exit equity at the target IRR: 360 ÷ 1.2^4 = €173.6m. Paying more equity than this would push the IRR below 20%.',
          'Si sconta l’equity di uscita all’IRR target: 360 ÷ 1,2^4 = €173,6m. Investire più equity di così porterebbe l’IRR sotto il 20%.'
        )
      },
      {
        id: 'ma-buy-q2',
        kind: 'numeric',
        topic: 'buyer-ability-to-pay',
        difficulty: 2,
        objective: t('Convert a sponsor’s equity capacity into an enterprise value bid.', 'Convertire la capacità di equity dello sponsor in un’offerta in termini di EV.'),
        prompt: t(
          'Continuing: lenders will provide €220m of acquisition debt. What is the sponsor’s maximum enterprise value bid (€m)?',
          'Proseguendo: le banche forniscono €220m di debito di acquisizione. Qual è l’offerta massima dello sponsor in termini di enterprise value (€m)?'
        ),
        answer: 393.61,
        unit: '€m',
        tolerance: { abs: 0.5 },
        verify: { fn: 'sum', args: [173.61, 220] },
        explanation: t('Max EV = equity cheque + acquisition debt = 173.6 + 220 = €393.6m.', 'EV massimo = equity + debito di acquisizione = 173,6 + 220 = €393,6m.')
      },
      {
        id: 'ma-buy-q3',
        kind: 'multi',
        topic: 'strategic-vs-sponsor',
        difficulty: 1,
        objective: t('Identify typical characteristics of financial sponsors.', 'Riconoscere le caratteristiche tipiche degli sponsor finanziari.'),
        prompt: t('Which statements typically describe a financial sponsor? Select all that apply.', 'Quali affermazioni descrivono tipicamente uno sponsor finanziario? Seleziona tutte le risposte corrette.'),
        choices: [
          t('Plans an exit within roughly 3–7 years', 'Pianifica un’uscita entro circa 3–7 anni'),
          t('Measures success mainly by IRR and MOIC', 'Misura il successo soprattutto con IRR e MOIC'),
          t('Usually integrates the target into existing operations to capture large cost synergies', 'Di solito integra il target nelle proprie attività per catturare forti sinergie di costo'),
          t('Funds the deal with fund equity plus significant acquisition debt', 'Finanzia il deal con equity del fondo più un rilevante debito di acquisizione'),
          t('Is mainly concerned with EPS accretion for its own shareholders', 'È interessato soprattutto all’accrescimento dell’EPS per i propri azionisti')
        ],
        correct: [0, 1, 3],
        explanation: t(
          'Sponsors hold for a few years, target IRR/MOIC and use LBO financing. Large integration synergies and EPS accretion are strategic-buyer concerns (sponsors capture synergies mainly via add-ons to a platform company).',
          'Gli sponsor detengono per pochi anni, puntano a IRR/MOIC e usano finanziamenti LBO. Grandi sinergie di integrazione e accrescimento dell’EPS sono temi da acquirente strategico (lo sponsor cattura sinergie soprattutto tramite add-on su una piattaforma).'
        )
      },
      {
        id: 'ma-buy-q4',
        kind: 'numeric',
        topic: 'buyer-ability-to-pay',
        difficulty: 1,
        objective: t('Compute a sponsor’s money multiple.', 'Calcolare il multiplo del capitale investito di uno sponsor.'),
        prompt: t(
          'A fund invests €150m of equity and receives €390m at exit. What is the MOIC?',
          'Un fondo investe €150m di equity e incassa €390m all’uscita. Qual è il MOIC?'
        ),
        answer: 2.6,
        unit: 'x',
        verify: { fn: 'moic', args: [390, 150] },
        explanation: t('MOIC = exit equity ÷ entry equity = 390 ÷ 150 = 2.6x.', 'MOIC = equity all’uscita ÷ equity all’ingresso = 390 ÷ 150 = 2,6x.')
      },
      {
        id: 'ma-buy-q5',
        kind: 'mcq',
        topic: 'strategic-vs-sponsor',
        difficulty: 2,
        objective: t('Explain when a sponsor can outbid a strategic.', 'Spiegare quando uno sponsor può superare l’offerta di uno strategico.'),
        prompt: t(
          'Which change would most directly increase what a financial sponsor can bid for a target, holding its target IRR constant?',
          'Quale cambiamento aumenterebbe più direttamente l’offerta possibile di uno sponsor finanziario, a parità di IRR target?'
        ),
        choices: [
          t('A rise in the target’s corporate tax rate', 'Un aumento dell’aliquota fiscale del target'),
          t('Lenders agreeing to provide more acquisition debt at similar cost', 'Le banche disposte a concedere più debito di acquisizione a costo simile'),
          t('A longer holding period with no change in exit value', 'Un holding period più lungo senza variazioni del valore di uscita'),
          t('Higher synergies available to strategic bidders', 'Maggiori sinergie disponibili per gli offerenti strategici')
        ],
        correct: 1,
        explanation: t(
          'More debt at similar cost lets the same equity cheque support a higher EV. Higher taxes reduce cash flow; a longer hold with the same exit value lowers the IRR, so the sponsor must pay less; strategic synergies do not change the sponsor’s capacity.',
          'Più debito a costo simile permette allo stesso equity di sostenere un EV più alto. Tasse più alte riducono i flussi; un holding più lungo con lo stesso valore di uscita abbassa l’IRR, quindi lo sponsor deve pagare meno; le sinergie degli strategici non cambiano la capacità dello sponsor.'
        )
      }
    ],
    flashcards: [
      { id: 'fc-ma-buy-1', topic: 'strategic-vs-sponsor', front: t('Two return metrics sponsors focus on?', 'Le due metriche di rendimento degli sponsor?'), back: t('IRR (often ~20%+ target) and MOIC (often ~2–3x).', 'IRR (target spesso ~20%+) e MOIC (spesso ~2–3x).') },
      { id: 'fc-ma-buy-2', topic: 'buyer-ability-to-pay', front: t('Strategic buyer’s walk-away price (concept)?', 'Prezzo massimo dell’acquirente strategico (concetto)?'), back: t('Standalone value of the target + PV of synergies net of integration costs.', 'Valore stand-alone del target + VA delle sinergie al netto dei costi di integrazione.') },
      { id: 'fc-ma-buy-3', topic: 'buyer-ability-to-pay', front: t('How is a sponsor’s maximum price derived?', 'Come si ricava il prezzo massimo di uno sponsor?'), back: t('Discount projected exit equity at the target IRR to get max equity, then add the acquisition debt lenders will provide.', 'Si sconta l’equity di uscita previsto all’IRR target per ottenere l’equity massimo, poi si aggiunge il debito di acquisizione disponibile.') },
      { id: 'fc-ma-buy-4', topic: 'strategic-vs-sponsor', front: t('What is a buy-and-build strategy?', 'Che cos’è una strategia di buy-and-build?'), back: t('A sponsor buys a platform company, then bolts on smaller add-ons, capturing synergies and often multiple arbitrage.', 'Uno sponsor acquista una società piattaforma e poi aggiunge add-on più piccoli, catturando sinergie e spesso un arbitraggio sui multipli.') }
    ]
  },
  /* ================================================================== */
  /* M1 — ma-deal-types                                                  */
  /* ================================================================== */
  {
    id: 'ma-deal-types',
    academyId: 'ma',
    moduleId: 'M1',
    mode: 'deep',
    minutes: 10,
    difficulty: 1,
    reviewed: '2026-10',
    objective: t(
      'Classify deals as horizontal, vertical or conglomerate, explain the typical rationale and risks of each, and measure market concentration with the HHI.',
      'Classificare le operazioni come orizzontali, verticali o conglomerali, spiegarne logica e rischi tipici e misurare la concentrazione di mercato con l’HHI.'
    ),
    screens: [
      {
        type: 'intuition',
        title: t('Where does the target sit relative to the buyer?', 'Dove si colloca il target rispetto all’acquirente?'),
        body: t(
          'Picture the buyer’s value chain, from raw materials to the end customer.\n\n- Buying a **competitor at the same level** → **horizontal** deal.\n- Buying a **supplier (upstream)** or a **customer/distributor (downstream)** → **vertical** deal.\n- Buying a business **unrelated** to your own → **conglomerate** deal.\n\nThe category tells you, before any model, what the rationale is likely to be and what will worry regulators.',
          'Immagina la catena del valore dell’acquirente, dalle materie prime al cliente finale.\n\n- Comprare un **concorrente allo stesso livello** → operazione **orizzontale**.\n- Comprare un **fornitore (a monte)** o un **cliente/distributore (a valle)** → operazione **verticale**.\n- Comprare un business **non correlato** al proprio → operazione **conglomerale**.\n\nLa categoria ti dice, prima di qualsiasi modello, quale sarà probabilmente la logica e cosa preoccuperà le autorità.'
        )
      },
      {
        type: 'technical',
        title: t('Rationale and risks by deal type', 'Logica e rischi per tipologia'),
        body: t('How bankers frame each category in a pitch:', 'Come i banker inquadrano ogni categoria in un pitch:'),
        table: {
          headers: [t('Type', 'Tipologia'), t('Typical rationale', 'Logica tipica'), t('Main risks', 'Rischi principali')],
          rows: [
            [t('Horizontal', 'Orizzontale'), t('Scale, cost synergies, market share, pricing power', 'Scala, sinergie di costo, quota di mercato, potere di prezzo'), t('Antitrust (unilateral effects), integration, customer overlap losses', 'Antitrust (effetti unilaterali), integrazione, perdita di clienti sovrapposti')],
            [t('Vertical', 'Verticale'), t('Security of supply, margin capture, coordination, control of distribution', 'Sicurezza degli approvvigionamenti, cattura del margine, coordinamento, controllo della distribuzione'), t('Foreclosure concerns, loss of focus, rival customers/suppliers walk away', 'Rischi di preclusione (foreclosure), perdita di focus, clienti/fornitori concorrenti che se ne vanno')],
            [t('Conglomerate', 'Conglomerale'), t('Diversification, capital allocation, use of excess cash', 'Diversificazione, allocazione del capitale, impiego della cassa in eccesso'), t('Few synergies, "conglomerate discount", shareholders can diversify themselves', 'Poche sinergie, "sconto da conglomerata", gli azionisti possono diversificare da soli')]
          ]
        }
      },
      {
        type: 'technical',
        title: t('Variations you will hear', 'Varianti che sentirai'),
        body: t(
          '- **Market (geographic) extension**: same product, new country — e.g. a domestic leader buying its foreign peer. Often grouped with horizontal deals.\n- **Product extension / concentric**: adjacent products sold to the same customers (cross-selling logic).\n- **Backward vs forward integration**: vertical deals going upstream (supplier) vs downstream (customer or distribution).\n- **Pure conglomerate**: no operating link at all — today more typical of diversified holding companies than listed industrials, as many conglomerates have been broken up under investor pressure.',
          '- **Estensione di mercato (geografica)**: stesso prodotto, nuovo Paese — ad es. un leader domestico che compra un concorrente estero. Spesso assimilata alle orizzontali.\n- **Estensione di prodotto / concentrica**: prodotti adiacenti venduti agli stessi clienti (logica di cross-selling).\n- **Integrazione a monte vs a valle**: operazioni verticali verso un fornitore o verso clienti/distribuzione.\n- **Conglomerale pura**: nessun legame operativo — oggi più tipica delle holding diversificate che dei gruppi industriali quotati, dato che molte conglomerate sono state smembrate su pressione degli investitori.'
        )
      },
      {
        type: 'formula',
        formulas: [
          {
            name: t('Herfindahl–Hirschman Index (HHI)', 'Indice di Herfindahl–Hirschman (HHI)'),
            expr: 'HHI = Σ (market share_i)²   (shares in percentage points)',
            vars: [{ sym: 'HHI', desc: t('From near 0 (fragmented) to 10,000 (monopoly)', 'Da quasi 0 (frammentato) a 10.000 (monopolio)') }]
          },
          {
            name: t('Change in HHI from a horizontal merger', 'Variazione dell’HHI per una fusione orizzontale'),
            expr: 'ΔHHI = 2 × s1 × s2'
          }
        ],
        note: t(
          'EU Horizontal Merger Guidelines (2004): concerns are unlikely if post-merger HHI < 1,000; or 1,000–2,000 with ΔHHI < 250; or > 2,000 with ΔHHI < 150. The US 2023 Merger Guidelines presume harm above HHI 1,800 with ΔHHI > 100.',
          'Linee guida UE sulle concentrazioni orizzontali (2004): problemi improbabili se l’HHI post-operazione è < 1.000; oppure 1.000–2.000 con ΔHHI < 250; oppure > 2.000 con ΔHHI < 150. Le Merger Guidelines USA del 2023 presumono un danno sopra HHI 1.800 con ΔHHI > 100.'
        )
      },
      {
        type: 'example',
        title: t('Screening a horizontal deal for antitrust risk', 'Screening antitrust di un’operazione orizzontale'),
        body: t(
          'Five players share a market: A 30%, B 25%, C 20%, D 15%, E 10%. B wants to buy C. An analyst runs this in five minutes before the first client call.',
          'Cinque operatori si dividono un mercato: A 30%, B 25%, C 20%, D 15%, E 10%. B vuole acquisire C. Un analista fa questo calcolo in cinque minuti prima della prima call con il cliente.'
        ),
        table: {
          headers: [t('Player', 'Operatore'), t('Share %', 'Quota %'), t('Share²', 'Quota²')],
          rows: [
            ['A', '30', '900'],
            ['B', '25', '625'],
            ['C', '20', '400'],
            ['D', '15', '225'],
            ['E', '10', '100'],
            [t('Pre-deal HHI', 'HHI pre-operazione'), '100', '2,250'],
            [t('ΔHHI = 2 × 25 × 20', 'ΔHHI = 2 × 25 × 20'), '—', '1,000'],
            [t('Post-deal HHI (B+C = 45%)', 'HHI post-operazione (B+C = 45%)'), '—', '3,250']
          ],
          totalRows: [5, 7]
        }
      },
      {
        type: 'realworld',
        title: t('Well-known examples', 'Esempi noti'),
        body: t(
          '- **Horizontal — Exxon / Mobil (1998–99)**: two oil majors combined; cleared in the US with significant divestitures.\n- **Horizontal — Intesa Sanpaolo / UBI Banca (2020)**: public exchange offer between Italian banks; antitrust remedies included selling branches to BPER.\n- **Vertical — AT&T / Time Warner (2016–18)**: distribution bought content; the US DOJ sued to block it and lost in court. AT&T later spun off WarnerMedia into a combination with Discovery (2022).\n- **Conglomerate — Berkshire Hathaway / BNSF (completed 2010)**: an insurance-rooted holding company bought a US railroad.',
          '- **Orizzontale — Exxon / Mobil (1998–99)**: due major petrolifere unite; autorizzata negli USA con rilevanti dismissioni.\n- **Orizzontale — Intesa Sanpaolo / UBI Banca (2020)**: OPS tra banche italiane; i rimedi antitrust hanno incluso la cessione di filiali a BPER.\n- **Verticale — AT&T / Time Warner (2016–18)**: la distribuzione ha comprato i contenuti; il DOJ americano ha fatto causa per bloccarla e ha perso. AT&T ha poi scorporato WarnerMedia aggregandola a Discovery (2022).\n- **Conglomerale — Berkshire Hathaway / BNSF (closing 2010)**: una holding nata nelle assicurazioni ha acquistato una ferrovia americana.'
        )
      },
      { type: 'exercise', questionId: 'ma-dt-q1' },
      { type: 'exercise', questionId: 'ma-dt-q3' },
      { type: 'exercise', questionId: 'ma-dt-q4' },
      {
        type: 'interview',
        question: t('Walk me through the difference between horizontal and vertical mergers, and which is harder to get approved.', 'Mi spieghi la differenza tra fusioni orizzontali e verticali, e quale è più difficile da far approvare.'),
        answer: t(
          'A horizontal merger combines competitors at the same stage of the value chain; the logic is scale and cost synergies. A vertical merger combines a company with a supplier or customer; the logic is supply security, margin capture and coordination. Horizontal deals are usually harder to clear because they directly remove a competitor and increase concentration — regulators look at combined shares and HHI. Vertical deals raise foreclosure concerns, for example denying rivals access to an input, but historically have been cleared more often, often with behavioural remedies.',
          'Una fusione orizzontale unisce concorrenti allo stesso stadio della catena del valore; la logica è scala e sinergie di costo. Una verticale unisce un’azienda a un suo fornitore o cliente; la logica è sicurezza degli approvvigionamenti, cattura del margine e coordinamento. Le orizzontali sono di solito più difficili da autorizzare perché eliminano direttamente un concorrente e aumentano la concentrazione — le autorità guardano alle quote combinate e all’HHI. Le verticali sollevano rischi di preclusione, ad esempio negare ai concorrenti l’accesso a un input, ma storicamente sono state autorizzate più spesso, spesso con rimedi comportamentali.'
        )
      },
      {
        type: 'mistakes',
        items: [
          t('Calling any deal between companies in the same industry "horizontal". A carmaker buying a battery supplier is vertical.', 'Definire "orizzontale" ogni operazione nello stesso settore. Un costruttore d’auto che compra un fornitore di batterie fa un’operazione verticale.'),
          t('Computing HHI with shares as decimals (0.30² …) and comparing with thresholds expressed in percentage points.', 'Calcolare l’HHI con quote decimali (0,30² …) e confrontarlo con soglie espresse in punti percentuali.'),
          t('Pitching diversification as a reason for a listed company to buy unrelated businesses: shareholders can diversify more cheaply themselves.', 'Proporre la diversificazione come motivo per cui una quotata compri business non correlati: gli azionisti possono diversificare da soli a costo minore.')
        ]
      },
      {
        type: 'summary',
        items: [
          t('Horizontal = competitor; vertical = supplier or customer; conglomerate = unrelated.', 'Orizzontale = concorrente; verticale = fornitore o cliente; conglomerale = non correlato.'),
          t('Horizontal: scale and cost synergies, highest antitrust risk.', 'Orizzontale: scala e sinergie di costo, rischio antitrust più elevato.'),
          t('Vertical: supply security and margin capture, foreclosure risk.', 'Verticale: sicurezza degli approvvigionamenti e cattura del margine, rischio di preclusione.'),
          t('HHI = Σ shares²; ΔHHI = 2 × s1 × s2 — a quick antitrust screen.', 'HHI = Σ quote²; ΔHHI = 2 × s1 × s2 — un rapido screening antitrust.')
        ]
      }
    ],
    questions: [
      {
        id: 'ma-dt-q1',
        kind: 'mcq',
        topic: 'deal-types',
        difficulty: 1,
        objective: t('Classify a deal by its position in the value chain.', 'Classificare un’operazione in base alla posizione nella catena del valore.'),
        prompt: t(
          'A pasta producer acquires a durum-wheat milling company that supplies its plants. What type of deal is this?',
          'Un pastificio acquisisce un molino di grano duro che rifornisce i suoi stabilimenti. Che tipo di operazione è?'
        ),
        choices: [
          t('Horizontal', 'Orizzontale'),
          t('Conglomerate', 'Conglomerale'),
          t('Vertical (forward integration)', 'Verticale (integrazione a valle)'),
          t('Vertical (backward integration)', 'Verticale (integrazione a monte)')
        ],
        correct: 3,
        explanation: t(
          'The mill is an upstream supplier, so this is backward vertical integration. It is not horizontal (the mill is not a competitor), not forward (that would be buying a distributor or retailer) and not conglomerate (the businesses are linked).',
          'Il molino è un fornitore a monte: è un’integrazione verticale a monte. Non è orizzontale (il molino non è un concorrente), non è a valle (sarebbe l’acquisto di un distributore o di un retailer) e non è conglomerale (i business sono collegati).'
        )
      },
      {
        id: 'ma-dt-q2',
        kind: 'grid',
        topic: 'hhi',
        difficulty: 2,
        objective: t('Compute HHI before and after a horizontal merger.', 'Calcolare l’HHI prima e dopo una fusione orizzontale.'),
        prompt: t(
          'A market has four firms with shares of 40%, 30%, 20% and 10%. The #3 and #4 firms merge. Fill in the blanks.',
          'Un mercato ha quattro imprese con quote del 40%, 30%, 20% e 10%. La terza e la quarta si fondono. Completa le celle vuote.'
        ),
        columns: [t('Metric', 'Grandezza'), t('Value', 'Valore')],
        rows: [
          { label: t('Pre-merger HHI', 'HHI pre-fusione'), cells: [{ answer: 3000, verify: { fn: 'sum', args: [1600, 900, 400, 100] } }] },
          { label: t('ΔHHI', 'ΔHHI'), cells: [{ answer: 400, verify: { fn: 'product', args: [2, 20, 10] } }] },
          { label: t('Post-merger HHI', 'HHI post-fusione'), cells: [{ answer: 3400, verify: { fn: 'sum', args: [1600, 900, 900] } }] }
        ],
        explanation: t(
          'Pre: 40² + 30² + 20² + 10² = 1,600 + 900 + 400 + 100 = 3,000. ΔHHI = 2 × 20 × 10 = 400. Post: 40² + 30² + 30² = 3,400 (= 3,000 + 400). Under the EU guidelines this is above 2,000 with ΔHHI ≥ 150, so it would get close scrutiny.',
          'Pre: 40² + 30² + 20² + 10² = 1.600 + 900 + 400 + 100 = 3.000. ΔHHI = 2 × 20 × 10 = 400. Post: 40² + 30² + 30² = 3.400 (= 3.000 + 400). Per le linee guida UE si è sopra 2.000 con ΔHHI ≥ 150, quindi l’operazione sarebbe esaminata con attenzione.'
        )
      },
      {
        id: 'ma-dt-q3',
        kind: 'numeric',
        topic: 'hhi',
        difficulty: 2,
        objective: t('Compute the change in HHI from a merger.', 'Calcolare la variazione dell’HHI dovuta a una fusione.'),
        prompt: t(
          'Two competitors with market shares of 18% and 12% merge. By how many points does the HHI increase?',
          'Due concorrenti con quote di mercato del 18% e del 12% si fondono. Di quanti punti aumenta l’HHI?'
        ),
        answer: 432,
        verify: { fn: 'product', args: [2, 18, 12] },
        explanation: t(
          'ΔHHI = 2 × 18 × 12 = 432, because (18 + 12)² − 18² − 12² = 900 − 324 − 144 = 432. Simply adding the shares (30) or multiplying without the factor 2 (216) are the usual errors.',
          'ΔHHI = 2 × 18 × 12 = 432, perché (18 + 12)² − 18² − 12² = 900 − 324 − 144 = 432. Sommare le quote (30) o moltiplicarle senza il fattore 2 (216) sono gli errori tipici.'
        )
      },
      {
        id: 'ma-dt-q4',
        kind: 'multi',
        topic: 'deal-types',
        difficulty: 2,
        objective: t('Match rationales and risks to deal types.', 'Associare logiche e rischi alle tipologie di operazione.'),
        prompt: t('Which statements are correct? Select all that apply.', 'Quali affermazioni sono corrette? Seleziona tutte le risposte corrette.'),
        choices: [
          t('Horizontal deals usually offer the largest cost synergies', 'Le operazioni orizzontali offrono di solito le maggiori sinergie di costo'),
          t('Vertical deals can raise concerns that rivals will be cut off from a key input', 'Le operazioni verticali possono far temere che i concorrenti vengano esclusi da un input chiave'),
          t('Conglomerate deals are the most likely to be blocked on market-share grounds', 'Le operazioni conglomerali sono le più esposte a divieti per motivi di quota di mercato'),
          t('Listed conglomerates are often valued at a discount to the sum of their parts', 'Le conglomerate quotate sono spesso valutate a sconto rispetto alla somma delle parti')
        ],
        correct: [0, 1, 3],
        explanation: t(
          'Horizontal deals eliminate duplicate costs; vertical deals raise foreclosure concerns; conglomerates often trade at a discount. Conglomerate deals rarely increase market share in any one market, so they are the least likely to be blocked on concentration grounds.',
          'Le orizzontali eliminano costi duplicati; le verticali sollevano rischi di preclusione; le conglomerate spesso quotano a sconto. Le conglomerali raramente aumentano la quota in un singolo mercato, quindi sono le meno esposte a divieti per concentrazione.'
        )
      }
    ],
    flashcards: [
      { id: 'fc-ma-dt-1', topic: 'deal-types', front: t('Backward vs forward vertical integration?', 'Integrazione verticale a monte vs a valle?'), back: t('Backward: buying a supplier (upstream). Forward: buying a customer or distribution channel (downstream).', 'A monte: acquisto di un fornitore. A valle: acquisto di un cliente o di un canale distributivo.') },
      { id: 'fc-ma-dt-2', topic: 'hhi', front: t('HHI formula and change from a merger?', 'Formula dell’HHI e sua variazione per una fusione?'), back: t('HHI = Σ shares² (in % points, max 10,000). ΔHHI = 2 × s1 × s2.', 'HHI = Σ quote² (in punti %, max 10.000). ΔHHI = 2 × s1 × s2.') },
      { id: 'fc-ma-dt-3', topic: 'hhi', front: t('EU safe-harbour-style HHI levels (Horizontal Merger Guidelines)?', 'Livelli HHI "di tranquillità" nelle linee guida UE sulle concentrazioni orizzontali?'), back: t('Post-merger HHI < 1,000; 1,000–2,000 with ΔHHI < 250; > 2,000 with ΔHHI < 150 (absent special circumstances).', 'HHI post < 1.000; 1.000–2.000 con ΔHHI < 250; > 2.000 con ΔHHI < 150 (salvo circostanze particolari).') },
      { id: 'fc-ma-dt-4', topic: 'deal-types', front: t('What is the "conglomerate discount"?', 'Che cos’è lo "sconto da conglomerata"?'), back: t('Diversified groups often trade below the sum of their parts’ values — a common rationale for break-ups and spin-offs.', 'I gruppi diversificati quotano spesso sotto la somma del valore delle parti — un motivo frequente per scissioni e spin-off.') }
    ],
    sources: [
      { label: 'European Commission — Guidelines on the assessment of horizontal mergers (2004/C 31/03), paras 19–21', url: 'https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX:52004XC0205(02)' },
      { label: 'US DOJ & FTC — Merger Guidelines (2023)', url: 'https://www.justice.gov/atr/merger-guidelines' }
    ]
  },

  /* ================================================================== */
  /* M1 — ma-rationale-synergies                                         */
  /* ================================================================== */
  {
    id: 'ma-rationale-synergies',
    academyId: 'ma',
    moduleId: 'M1',
    mode: 'deep',
    minutes: 14,
    difficulty: 2,
    reviewed: '2026-10',
    objective: t(
      'Explain why companies do deals, value revenue and cost synergies, and test whether the control premium paid is justified by the synergies.',
      'Spiegare perché le aziende fanno acquisizioni, valutare sinergie di ricavo e di costo e verificare se il premio di controllo pagato è giustificato dalle sinergie.'
    ),
    screens: [
      {
        type: 'intuition',
        title: t('1 + 1 must be more than 2', '1 + 1 deve fare più di 2'),
        body: t(
          'A buyer almost always pays **more than the market value** of the target — the **control premium**. Target shareholders would not sell otherwise.\n\nSo the buyer’s shareholders only win if the combined company is worth more than the two apart, by **more than the premium paid**. That extra value is **synergies**.\n\nThe whole M&A value question fits in one line: *are the synergies, net of costs, bigger than the premium?*',
          'Un acquirente paga quasi sempre **più del valore di mercato** del target — il **premio di controllo**. Altrimenti gli azionisti del target non venderebbero.\n\nQuindi gli azionisti dell’acquirente guadagnano solo se la società combinata vale più delle due separate, per **più del premio pagato**. Quel valore in più sono le **sinergie**.\n\nTutta la questione del valore nell’M&A sta in una riga: *le sinergie, al netto dei costi, superano il premio?*'
        )
      },
      {
        type: 'technical',
        title: t('Why companies do deals', 'Perché le aziende fanno acquisizioni'),
        body: t(
          '- **Market consolidation**: fewer, larger players in a fragmented or mature market — scale, purchasing power, rational pricing.\n- **Growth**: buying growth faster than building it (new geographies, products, customers).\n- **Capabilities**: technology, talent, brands, licences.\n- **Vertical control**: supply security or margin capture.\n- **Diversification**: smoother earnings — but weak for listed companies, since investors can diversify themselves.\n- **Financial**: tax attributes, use of excess cash — rarely sufficient on their own.\n\nRed flags: empire building, "defensive" deals with no numbers, and synergies invented to justify a price.',
          '- **Consolidamento del mercato**: meno operatori, più grandi, in un mercato frammentato o maturo — scala, potere d’acquisto, prezzi più razionali.\n- **Crescita**: comprare crescita più rapidamente che costruirla (nuove aree, prodotti, clienti).\n- **Competenze**: tecnologia, talenti, marchi, licenze.\n- **Controllo verticale**: sicurezza degli approvvigionamenti o cattura del margine.\n- **Diversificazione**: utili più stabili — argomento debole per le quotate, perché gli investitori possono diversificare da soli.\n- **Finanziarie**: benefici fiscali, impiego di cassa in eccesso — raramente sufficienti da sole.\n\nSegnali d’allarme: "empire building", deal "difensivi" senza numeri, sinergie inventate per giustificare un prezzo.'
        )
      },
      {
        type: 'technical',
        title: t('Cost vs revenue synergies', 'Sinergie di costo vs di ricavo'),
        body: t(
          '**Cost synergies** — closing duplicate HQs and plants, procurement savings, IT consolidation, overlapping sales networks. Largely **within management’s control**, so markets give them more credit.\n\n**Revenue synergies** — cross-selling, wider distribution, bundling, pricing. They depend on **customers and competitors**, take longer and are often lost (**dis-synergies**: customers leave when two suppliers become one).\n\nBoth come with **one-off integration costs** (severance, IT migration, rebranding) that must be deducted, and take 2–3 years to reach **run-rate**.',
          '**Sinergie di costo** — chiusura di sedi e stabilimenti duplicati, risparmi sugli acquisti, consolidamento IT, reti di vendita sovrapposte. Sono in larga parte **sotto il controllo del management**, quindi il mercato le premia di più.\n\n**Sinergie di ricavo** — cross-selling, distribuzione più ampia, offerte congiunte, prezzi. Dipendono da **clienti e concorrenti**, richiedono più tempo e spesso si perdono (**dis-sinergie**: i clienti se ne vanno quando due fornitori diventano uno).\n\nEntrambe comportano **costi di integrazione una tantum** (esuberi, migrazione IT, rebranding) da dedurre, e richiedono 2–3 anni per arrivare a **regime (run-rate)**.'
        )
      },
      {
        type: 'formula',
        formulas: [
          {
            name: t('Offer (control) premium', 'Premio d’offerta (di controllo)'),
            expr: 'Premium = Offer price ÷ Undisturbed share price − 1',
            vars: [{ sym: 'Undisturbed price', desc: t('Price before deal rumours or announcement', 'Prezzo prima di indiscrezioni o annuncio') }]
          },
          {
            name: t('Value of synergies (perpetuity shortcut)', 'Valore delle sinergie (scorciatoia della rendita perpetua)'),
            expr: 'PV synergies = Run-rate pre-tax synergies × (1 − t) ÷ (r − g) − One-off integration costs'
          },
          {
            name: t('Value test for the buyer', 'Test di creazione di valore per l’acquirente'),
            expr: 'Value created for buyer = PV synergies − Premium paid (€)'
          }
        ],
        note: t(
          'The shortcut assumes synergies at full run-rate from day one; a proper model phases them in, which lowers the value.',
          'La scorciatoia ipotizza sinergie a regime dal primo giorno; un modello completo le introduce gradualmente, riducendone il valore.'
        )
      },
      {
        type: 'example',
        title: t('Does AcquiCo overpay for TargetCo?', 'AcquiCo paga troppo TargetCo?'),
        body: t(
          'TargetCo: 100m shares, undisturbed price €20 (market cap €2,000m). AcquiCo offers €26. Expected cost synergies: €60m pre-tax run-rate; one-off costs €90m. Tax 24%, discount rate 9%, no growth. Revenue synergies: €30m pre-tax EBITDA, which AcquiCo’s board counts at 50% probability.',
          'TargetCo: 100m di azioni, prezzo indisturbato €20 (capitalizzazione €2.000m). AcquiCo offre €26. Sinergie di costo attese: €60m ante imposte a regime; costi una tantum €90m. Aliquota 24%, tasso di sconto 9%, crescita zero. Sinergie di ricavo: €30m di EBITDA ante imposte, che il board di AcquiCo considera al 50% di probabilità.'
        ),
        table: {
          headers: [t('€m', '€m'), t('Calculation', 'Calcolo'), t('Value', 'Valore')],
          rows: [
            [t('Premium %', 'Premio %'), '26 ÷ 20 − 1', '30%'],
            [t('Premium paid', 'Premio pagato'), '100m × €6', '600'],
            [t('PV cost synergies', 'VA sinergie di costo'), '60 × 0.76 ÷ 0.09 − 90', '416.7'],
            [t('PV revenue synergies (50%)', 'VA sinergie di ricavo (50%)'), '30 × 0.76 ÷ 0.09 × 50%', '126.7'],
            [t('Total PV synergies', 'VA totale sinergie'), '416.7 + 126.7', '543.3'],
            [t('Value created for AcquiCo', 'Valore creato per AcquiCo'), '543.3 − 600', '(56.7)']
          ],
          totalRows: [5]
        }
      },
      {
        type: 'technical',
        title: t('Why many deals fail to deliver', 'Perché molti deal non mantengono le promesse'),
        body: t(
          'Academic and consulting studies repeatedly find that a large share of acquisitions do not create value for the **buyer’s** shareholders (target shareholders, who receive the premium, usually do well). Common causes:\n\n- **Overpaying** — auction dynamics and "winner’s curse".\n- **Overestimated synergies**, especially revenue synergies.\n- **Underestimated integration costs and timing**.\n- **Culture clash** and loss of key people.\n- **Customer and talent attrition** during integration.\n- **Poor diligence** on the target’s quality of earnings.',
          'Studi accademici e di consulenza rilevano ripetutamente che una quota rilevante di acquisizioni non crea valore per gli azionisti dell’**acquirente** (gli azionisti del target, che incassano il premio, di solito ne beneficiano). Cause frequenti:\n\n- **Prezzo eccessivo** — dinamiche d’asta e "maledizione del vincitore".\n- **Sinergie sovrastimate**, soprattutto quelle di ricavo.\n- **Costi e tempi di integrazione sottostimati**.\n- **Scontro culturale** e perdita di persone chiave.\n- **Perdita di clienti e talenti** durante l’integrazione.\n- **Due diligence carente** sulla qualità degli utili del target.'
        )
      },
      {
        type: 'realworld',
        title: t('Synergies that never came', 'Sinergie mai arrivate'),
        body: t(
          '**Daimler-Benz / Chrysler (1998)** was billed as a "merger of equals" with large expected synergies. Cultural and operational integration struggled, and in 2007 Daimler sold a majority of Chrysler to Cerberus.\n\nIn practice, analysts build a **synergy case** with management: a bottom-up schedule by category (procurement, SG&A, footprint), phasing (e.g. 25% / 75% / 100% over three years), one-off costs and a **sensitivity** showing value created at 50%, 75% and 100% delivery. Boards and fairness-opinion committees ask to see it.',
          '**Daimler-Benz / Chrysler (1998)** era stata presentata come "merger of equals" con forti sinergie attese. L’integrazione culturale e operativa si è rivelata difficile e nel 2007 Daimler ha ceduto la maggioranza di Chrysler a Cerberus.\n\nNella pratica gli analisti costruiscono un **synergy case** con il management: un prospetto bottom-up per categoria (acquisti, SG&A, footprint produttivo), il phasing (ad es. 25% / 75% / 100% in tre anni), i costi una tantum e una **sensitivity** del valore creato con realizzazione al 50%, 75% e 100%. Board e comitati che rilasciano la fairness opinion chiedono di vederlo.'
        )
      },
      { type: 'exercise', questionId: 'ma-syn-q1' },
      { type: 'exercise', questionId: 'ma-syn-q2' },
      { type: 'exercise', questionId: 'ma-syn-q3' },
      {
        type: 'interview',
        question: t('Why do so many acquisitions destroy value for the acquirer?', 'Perché tante acquisizioni distruggono valore per l’acquirente?'),
        answer: t(
          'Because the buyer pays the premium upfront and with certainty, while synergies are uncertain and arrive later. Value is created only if the PV of synergies net of integration costs exceeds the premium. Buyers tend to overpay in competitive auctions, overestimate synergies — especially revenue synergies that depend on customers — and underestimate integration costs, timing and cultural issues. That is why credible deals lead with cost synergies, phase them realistically and show sensitivity to partial delivery.',
          'Perché l’acquirente paga il premio subito e con certezza, mentre le sinergie sono incerte e arrivano dopo. Si crea valore solo se il VA delle sinergie al netto dei costi di integrazione supera il premio. Gli acquirenti tendono a pagare troppo nelle aste competitive, a sovrastimare le sinergie — soprattutto quelle di ricavo, che dipendono dai clienti — e a sottostimare costi, tempi e problemi culturali dell’integrazione. Per questo i deal credibili puntano sulle sinergie di costo, le introducono gradualmente in modo realistico e mostrano la sensitivity a una realizzazione parziale.'
        )
      },
      {
        type: 'mistakes',
        items: [
          t('Valuing synergies pre-tax or forgetting one-off integration costs.', 'Valutare le sinergie ante imposte o dimenticare i costi di integrazione una tantum.'),
          t('Measuring the premium against a share price already inflated by deal rumours instead of the undisturbed price.', 'Misurare il premio su un prezzo già gonfiato da indiscrezioni anziché sul prezzo indisturbato.'),
          t('Giving revenue synergies the same credibility as cost synergies.', 'Dare alle sinergie di ricavo la stessa credibilità di quelle di costo.'),
          t('Ignoring dis-synergies such as lost customers or retention bonuses.', 'Ignorare le dis-sinergie, come clienti persi o bonus di retention.')
        ]
      },
      {
        type: 'summary',
        items: [
          t('Buyers pay a control premium; value is created only if PV synergies > premium.', 'L’acquirente paga un premio di controllo; si crea valore solo se il VA delle sinergie supera il premio.'),
          t('Cost synergies are more controllable and credible than revenue synergies.', 'Le sinergie di costo sono più controllabili e credibili di quelle di ricavo.'),
          t('PV synergies = run-rate × (1 − t) ÷ (r − g) − one-off costs (shortcut).', 'VA sinergie = run-rate × (1 − t) ÷ (r − g) − costi una tantum (scorciatoia).'),
          t('Overpaying, optimistic synergies and poor integration explain most failures.', 'Prezzo eccessivo, sinergie ottimistiche e cattiva integrazione spiegano la maggior parte dei fallimenti.')
        ]
      }
    ],
    questions: [
      {
        id: 'ma-syn-q1',
        kind: 'numeric',
        topic: 'control-premium',
        difficulty: 1,
        objective: t('Compute an offer premium.', 'Calcolare un premio d’offerta.'),
        prompt: t(
          'TargetCo’s undisturbed share price is €25.20 and the bidder offers €31.50 per share. What is the offer premium? Answer as a decimal (e.g. 0.18 for 18%).',
          'Il prezzo indisturbato di TargetCo è €25,20 e l’offerente offre €31,50 per azione. Qual è il premio d’offerta? Rispondi in forma decimale (es. 0,18 per 18%).'
        ),
        answer: 0.25,
        verify: { fn: 'offerPremium', args: [31.5, 25.2] },
        tolerance: { abs: 0.002 },
        explanation: t(
          'Premium = 31.50 ÷ 25.20 − 1 = 0.25, i.e. 25%. Dividing the €6.30 difference by the offer price (20%) understates it.',
          'Premio = 31,50 ÷ 25,20 − 1 = 0,25, cioè 25%. Dividere la differenza di €6,30 per il prezzo d’offerta (20%) lo sottostima.'
        )
      },
      {
        id: 'ma-syn-q2',
        kind: 'numeric',
        topic: 'synergies',
        difficulty: 2,
        objective: t('Value run-rate synergies net of tax and one-off costs.', 'Valutare sinergie a regime al netto di imposte e costi una tantum.'),
        prompt: t(
          'Run-rate cost synergies are €50m pre-tax. Tax rate 24%, discount rate 9%, no growth, one-off integration costs €80m. What is the PV of synergies (€m)?',
          'Le sinergie di costo a regime sono €50m ante imposte. Aliquota 24%, tasso di sconto 9%, crescita zero, costi di integrazione una tantum €80m. Qual è il VA delle sinergie (€m)?'
        ),
        answer: 342.22,
        unit: '€m',
        tolerance: { abs: 0.5 },
        verify: { fn: 'synergyValue', args: [50, 0.24, 0.09, 80] },
        steps: [
          t('After-tax synergies = 50 × (1 − 0.24) = 38', 'Sinergie nette = 50 × (1 − 0,24) = 38'),
          t('Perpetuity value = 38 ÷ 0.09 = 422.2', 'Valore della rendita perpetua = 38 ÷ 0,09 = 422,2'),
          t('Less one-off costs: 422.2 − 80 = 342.2', 'Meno costi una tantum: 422,2 − 80 = 342,2')
        ],
        explanation: t(
          'PV = 50 × 0.76 ÷ 0.09 − 80 = €342.2m. Forgetting tax gives €475.6m; forgetting one-off costs gives €422.2m.',
          'VA = 50 × 0,76 ÷ 0,09 − 80 = €342,2m. Dimenticare le imposte porta a €475,6m; dimenticare i costi una tantum a €422,2m.'
        )
      },
      {
        id: 'ma-syn-q3',
        kind: 'numeric',
        topic: 'control-premium',
        difficulty: 2,
        objective: t('Compute the euro premium paid and compare it with synergies.', 'Calcolare il premio pagato in euro e confrontarlo con le sinergie.'),
        prompt: t(
          'Continuing: TargetCo has 80m shares (undisturbed €25.20, offer €31.50). What is the total premium paid in €m? Compare it with the €342.2m of synergies.',
          'Proseguendo: TargetCo ha 80m di azioni (indisturbato €25,20, offerta €31,50). Qual è il premio totale pagato in €m? Confrontalo con i €342,2m di sinergie.'
        ),
        answer: 504,
        unit: '€m',
        verify: { fn: 'product', args: [80, 6.3] },
        explanation: t(
          'Premium paid = 80m × (31.50 − 25.20) = €504m. It exceeds the €342.2m of synergies, so — on these numbers — the deal transfers about €162m of value from the buyer’s shareholders to the target’s.',
          'Premio pagato = 80m × (31,50 − 25,20) = €504m. Supera i €342,2m di sinergie, quindi — con questi numeri — l’operazione trasferisce circa €162m di valore dagli azionisti dell’acquirente a quelli del target.'
        )
      },
      {
        id: 'ma-syn-q4',
        kind: 'numeric',
        topic: 'synergies',
        difficulty: 3,
        objective: t('Value growing synergies.', 'Valutare sinergie in crescita.'),
        prompt: t(
          'Run-rate synergies of €40m pre-tax are expected to grow 2% a year. Tax 25%, discount rate 10%, one-off costs €50m. PV of synergies (€m)?',
          'Sinergie a regime di €40m ante imposte cresceranno del 2% annuo. Aliquota 25%, tasso di sconto 10%, costi una tantum €50m. VA delle sinergie (€m)?'
        ),
        answer: 325,
        unit: '€m',
        tolerance: { abs: 0.5 },
        verify: { fn: 'synergyValue', args: [40, 0.25, 0.1, 50, 0.02] },
        explanation: t(
          'PV = 40 × 0.75 ÷ (0.10 − 0.02) − 50 = 30 ÷ 0.08 − 50 = 375 − 50 = €325m.',
          'VA = 40 × 0,75 ÷ (0,10 − 0,02) − 50 = 30 ÷ 0,08 − 50 = 375 − 50 = €325m.'
        )
      },
      {
        id: 'ma-syn-q5',
        kind: 'mcq',
        topic: 'synergies',
        difficulty: 1,
        objective: t('Judge the credibility of different synergy types.', 'Valutare la credibilità dei diversi tipi di sinergia.'),
        prompt: t('Which synergy would investors typically find most credible?', 'Quale sinergia gli investitori considerano di solito più credibile?'),
        choices: [
          t('Cross-selling the target’s products to the buyer’s customers', 'Cross-selling dei prodotti del target ai clienti dell’acquirente'),
          t('Closing one of two overlapping head offices', 'Chiudere una delle due sedi centrali sovrapposte'),
          t('Raising prices after the deal', 'Aumentare i prezzi dopo l’operazione'),
          t('Entering a new country with a combined brand', 'Entrare in un nuovo Paese con un marchio combinato')
        ],
        correct: 1,
        explanation: t(
          'Eliminating a duplicate head office is a cost synergy within management’s control. Cross-selling and market entry depend on customers; post-deal price rises depend on competitors and attract antitrust scrutiny.',
          'Eliminare una sede duplicata è una sinergia di costo sotto il controllo del management. Cross-selling e ingresso in nuovi mercati dipendono dai clienti; gli aumenti di prezzo dipendono dai concorrenti e attirano l’attenzione dell’antitrust.'
        )
      },
      {
        id: 'ma-syn-q6',
        kind: 'multi',
        topic: 'synergies',
        difficulty: 2,
        objective: t('Identify common causes of failed acquisitions.', 'Riconoscere le cause frequenti di acquisizioni non riuscite.'),
        prompt: t('Which are common reasons acquisitions fail to create value for the buyer? Select all that apply.', 'Quali sono le cause frequenti per cui un’acquisizione non crea valore per l’acquirente? Seleziona tutte le risposte corrette.'),
        choices: [
          t('Winning a competitive auction by overpaying', 'Vincere un’asta competitiva pagando troppo'),
          t('Underestimating integration costs and timing', 'Sottostimare costi e tempi di integrazione'),
          t('Loss of key employees and customers', 'Perdita di dipendenti e clienti chiave'),
          t('Using the undisturbed price to measure the premium', 'Usare il prezzo indisturbato per misurare il premio')
        ],
        correct: [0, 1, 2],
        explanation: t(
          'Overpaying, integration overruns and attrition destroy value. Using the undisturbed price is simply the correct way to measure the premium.',
          'Prezzo eccessivo, sforamenti dell’integrazione e perdita di persone e clienti distruggono valore. Usare il prezzo indisturbato è semplicemente il modo corretto di misurare il premio.'
        )
      }
    ],
    flashcards: [
      { id: 'fc-ma-syn-1', topic: 'control-premium', front: t('Offer premium formula?', 'Formula del premio d’offerta?'), back: t('Offer price ÷ undisturbed share price − 1.', 'Prezzo d’offerta ÷ prezzo indisturbato − 1.') },
      { id: 'fc-ma-syn-2', topic: 'synergies', front: t('When does an acquisition create value for the buyer?', 'Quando un’acquisizione crea valore per l’acquirente?'), back: t('When the PV of synergies, net of tax and integration costs, exceeds the premium paid.', 'Quando il VA delle sinergie, al netto di imposte e costi di integrazione, supera il premio pagato.') },
      { id: 'fc-ma-syn-3', topic: 'synergies', front: t('Why are cost synergies more credible than revenue synergies?', 'Perché le sinergie di costo sono più credibili di quelle di ricavo?'), back: t('They are largely within management’s control; revenue synergies depend on customers and competitors and can be offset by dis-synergies.', 'Sono in larga parte sotto il controllo del management; quelle di ricavo dipendono da clienti e concorrenti e possono essere compensate da dis-sinergie.') },
      { id: 'fc-ma-syn-4', topic: 'synergies', front: t('What are dis-synergies?', 'Che cosa sono le dis-sinergie?'), back: t('Value lost because of the deal: customers leaving to avoid supplier concentration, staff attrition, retention costs, disruption.', 'Valore perso a causa dell’operazione: clienti che se ne vanno per non concentrare i fornitori, uscita di personale, costi di retention, disservizi.') },
      { id: 'fc-ma-syn-5', topic: 'control-premium', front: t('What is the "undisturbed" share price?', 'Che cos’è il prezzo "indisturbato"?'), back: t('The price before deal rumours or announcement affected it — the reference for measuring the premium.', 'Il prezzo prima che indiscrezioni o annuncio lo influenzassero — il riferimento per misurare il premio.') }
    ]
  },
  /* ================================================================== */
  /* M2 — ma-origination-mandates                                        */
  /* ================================================================== */
  {
    id: 'ma-origination-mandates',
    academyId: 'ma',
    moduleId: 'M2',
    mode: 'deep',
    minutes: 12,
    difficulty: 1,
    reviewed: '2026-10',
    objective: t(
      'Explain how banks win M&A mandates — coverage, pitchbooks, engagement letters — and calculate advisory fees from retainers, success fees and incentive ratchets.',
      'Spiegare come le banche ottengono i mandati M&A — coverage, pitchbook, lettere di incarico — e calcolare le commissioni di advisory tra retainer, success fee e meccanismi incentivanti.'
    ),
    screens: [
      {
        type: 'intuition',
        title: t('No mandate, no deal, no fee', 'Niente mandato, niente deal, niente fee'),
        body: t(
          'An M&A bank earns most of its money only **when a deal closes**. Before that, it has to be the bank the client calls.\n\n**Origination** is everything that happens before the mandate: years of relationship building, ideas brought to the CEO, and finally a **pitch** where several banks compete (a "beauty contest").\n\nThe winner signs an **engagement letter**. Only then does the real process — and the analyst’s workload — begin.',
          'Una banca M&A guadagna la maggior parte dei suoi ricavi solo **quando un deal arriva al closing**. Prima deve essere la banca che il cliente chiama.\n\nL’**origination** è tutto ciò che avviene prima del mandato: anni di relazione, idee portate all’amministratore delegato e infine un **pitch** in cui più banche competono (un "beauty contest").\n\nLa vincitrice firma una **lettera di incarico** (engagement letter). Solo allora inizia il processo vero — e il carico di lavoro dell’analista.'
        )
      },
      {
        type: 'technical',
        title: t('Who originates: coverage vs product', 'Chi origina: coverage vs prodotto'),
        body: t(
          '- **Coverage bankers** own client relationships by **sector** (e.g. TMT, Industrials, FIG) or **country**. They meet CEOs, CFOs and boards and spot situations: succession issues, strategic reviews, debt maturities, activist pressure.\n- The **Financial Sponsors Group (FSG)** covers private equity funds — both as buyers and as sellers of portfolio companies.\n- **Product teams** — M&A, ECM, DCM, Leveraged Finance — bring execution expertise.\n\nA typical pitch team: an MD from coverage, an MD from M&A, a VP/associate running the work, and **one or two analysts building the book**.',
          '- I **banker di coverage** gestiscono le relazioni con i clienti per **settore** (es. TMT, Industrials, FIG) o **Paese**. Incontrano AD, CFO e consigli e intercettano le situazioni: passaggi generazionali, revisioni strategiche, scadenze del debito, pressioni di fondi attivisti.\n- Il **Financial Sponsors Group (FSG)** segue i fondi di private equity — sia come acquirenti sia come venditori di partecipate.\n- I **team di prodotto** — M&A, ECM, DCM, Leveraged Finance — portano le competenze di esecuzione.\n\nUn tipico team di pitch: un MD di coverage, un MD di M&A, un VP/associate che coordina il lavoro e **uno o due analisti che costruiscono il book**.'
        )
      },
      {
        type: 'technical',
        title: t('Inside a sell-side pitchbook', 'Dentro un pitchbook sell-side'),
        body: t(
          '- **Situation overview** and key messages.\n- **Credentials**: league tables and "tombstones" of comparable deals the bank advised.\n- **Market update**: sector trends, recent M&A activity, valuation levels.\n- **Preliminary valuation**: trading comps, precedent transactions, DCF, LBO "ability to pay", summarised in a **football field**.\n- **Buyer universe**: strategics and sponsors, ranked by fit and capacity.\n- **Process recommendation**: auction format, timeline, key risks.\n- **Team** and sometimes the **fee proposal** (often sent separately).\n\nAnalysts build the comps, precedents and football field, update credentials, and do the "page turns" — checking every number and footnote before the book is printed.',
          '- **Situation overview** e messaggi chiave.\n- **Credenziali**: league table e "tombstone" di operazioni comparabili seguite dalla banca.\n- **Aggiornamento di mercato**: trend di settore, attività M&A recente, livelli di valutazione.\n- **Valutazione preliminare**: multipli di borsa, transazioni comparabili, DCF, "ability to pay" da LBO, sintetizzati in un **football field**.\n- **Universo acquirenti**: strategici e sponsor, ordinati per fit e capacità.\n- **Raccomandazione sul processo**: formato d’asta, tempistica, rischi principali.\n- **Team** e talvolta la **proposta di fee** (spesso inviata a parte).\n\nGli analisti costruiscono comparables, precedenti e football field, aggiornano le credenziali e fanno i "page turn" — il controllo di ogni numero e nota prima della stampa.'
        )
      },
      {
        type: 'technical',
        title: t('The engagement letter', 'La lettera di incarico'),
        body: t(
          'Key terms bankers and clients negotiate:\n\n- **Scope and exclusivity**: sell-side, buy-side or defence; usually exclusive.\n- **Fees**: monthly **retainer** (often credited against the success fee), **success fee** as % of transaction value, a **minimum fee**, sometimes an **incentive fee** above a price threshold, and fees for a **fairness opinion** if requested.\n- **Expenses** reimbursement (often capped).\n- **Tail provision**: the bank still earns the fee if a deal with a party it introduced closes within a period after termination — typically 12–24 months.\n- **Indemnification** and limitation of liability.\n- **Confidentiality** and **conflicts**.',
          'Le clausole chiave che banker e clienti negoziano:\n\n- **Oggetto ed esclusiva**: sell-side, buy-side o difesa; di solito in esclusiva.\n- **Fee**: **retainer** mensile (spesso detratto dalla success fee), **success fee** in % del valore dell’operazione, una **fee minima**, talvolta una **incentive fee** sopra una soglia di prezzo, e compensi per l’eventuale **fairness opinion**.\n- **Rimborso spese** (spesso con un tetto).\n- **Tail provision**: la banca matura comunque la fee se un deal con una controparte da essa introdotta si chiude entro un periodo successivo alla cessazione — tipicamente 12–24 mesi.\n- **Manleva** e limitazioni di responsabilità.\n- **Riservatezza** e **conflitti di interesse**.'
        )
      },
      {
        type: 'formula',
        formulas: [
          {
            name: t('Success fee with incentive ratchet', 'Success fee con meccanismo incentivante'),
            expr: 'Success fee = Base % × Transaction value + Incentive % × max(0, Transaction value − Threshold)'
          },
          {
            name: t('Net fee payable at closing', 'Fee netta dovuta al closing'),
            expr: 'Net fee = max(Success fee, Minimum fee) − Retainers credited'
          },
          {
            name: t('Lehman formula (historical reference)', 'Formula Lehman (riferimento storico)'),
            expr: '5% of 1st $1m + 4% of 2nd + 3% of 3rd + 2% of 4th + 1% of everything above'
          }
        ],
        note: t(
          'Percentages fall as deal size rises: small-cap mandates can carry fees of several percent, while large-cap fees are a fraction of a percent. The Lehman formula is mostly cited for small deals today.',
          'Le percentuali scendono al crescere della dimensione: i mandati small cap possono prevedere fee di qualche punto percentuale, quelli large cap frazioni di punto. La formula Lehman oggi si cita soprattutto per operazioni piccole.'
        )
      },
      {
        type: 'example',
        title: t('Fee on the sale of TargetCo', 'La fee sulla vendita di TargetCo'),
        body: t(
          'Engagement letter: retainer €25k/month for 6 months, credited; success fee 1.5% of EV; incentive fee 3% on EV above €320m; minimum fee €2.0m. TargetCo is sold for an EV of €340m.',
          'Lettera di incarico: retainer €25k/mese per 6 mesi, detraibile; success fee 1,5% dell’EV; incentive fee 3% sull’EV eccedente €320m; fee minima €2,0m. TargetCo viene venduta a un EV di €340m.'
        ),
        table: {
          headers: [t('€m', '€m'), t('Calculation', 'Calcolo'), t('Amount', 'Importo')],
          rows: [
            [t('Base success fee', 'Success fee base'), '1.5% × 340', '5.10'],
            [t('Incentive fee', 'Incentive fee'), '3% × (340 − 320)', '0.60'],
            [t('Total success fee (> minimum 2.0)', 'Success fee totale (> minimo 2,0)'), '5.10 + 0.60', '5.70'],
            [t('Less retainers credited', 'Meno retainer detratti'), '6 × 0.025', '(0.15)'],
            [t('Net fee payable at closing', 'Fee netta al closing'), '5.70 − 0.15', '5.55']
          ],
          totalRows: [4]
        }
      },
      {
        type: 'realworld',
        title: t('An analyst’s pitch week', 'La settimana di pitch di un analista'),
        body: t(
          '- **Monday**: MD call with the CFO; staffing email; analyst pulls financials and builds the trading comps set.\n- **Tuesday–Wednesday**: precedent transactions from databases and press releases; first DCF and LBO; draft buyer list of 40–60 names.\n- **Thursday**: football field, credentials pages, VP comments ("turns") — several rounds.\n- **Friday**: MD review, final page turn, books printed or PDF sent; pitch meeting Monday.\n\nMost pitches do not convert. Banks pitch repeatedly over years; the analyst’s work lives on as the basis for the next book.',
          '- **Lunedì**: call dell’MD con il CFO; email di staffing; l’analista scarica i bilanci e costruisce il panel di comparables.\n- **Martedì–mercoledì**: transazioni precedenti da database e comunicati; primo DCF e LBO; bozza di lista di 40–60 potenziali acquirenti.\n- **Giovedì**: football field, pagine di credenziali, commenti del VP ("turn") — più giri.\n- **Venerdì**: review dell’MD, page turn finale, book stampati o PDF inviato; incontro il lunedì.\n\nLa maggior parte dei pitch non si trasforma in mandato. Le banche pitchano per anni; il lavoro dell’analista diventa la base del book successivo.'
        )
      },
      { type: 'exercise', questionId: 'ma-orig-q1' },
      { type: 'exercise', questionId: 'ma-orig-q3' },
      { type: 'exercise', questionId: 'ma-orig-q4' },
      {
        type: 'interview',
        question: t('What does an analyst do when the team is pitching for a sell-side mandate?', 'Cosa fa un analista quando il team fa un pitch per un mandato sell-side?'),
        answer: t(
          'The analyst builds most of the pitchbook: trading comparables and precedent transactions, a first DCF and a quick LBO to show what sponsors could pay, all summarised in a football field. They draft the buyer universe of strategics and sponsors, update the bank’s credentials and market pages, and turn comments from the VP and MD — then check every number before the book goes out. If we win, that same work becomes the starting point for the valuation, the buyer list and the teaser.',
          'L’analista costruisce gran parte del pitchbook: multipli di borsa e transazioni precedenti, un primo DCF e un LBO rapido per mostrare quanto potrebbero pagare gli sponsor, il tutto sintetizzato in un football field. Prepara l’universo di acquirenti strategici e finanziari, aggiorna credenziali e pagine di mercato, recepisce i commenti di VP e MD — e controlla ogni numero prima dell’invio. Se vinciamo, lo stesso lavoro diventa il punto di partenza per valutazione, lista acquirenti e teaser.'
        )
      },
      {
        type: 'mistakes',
        items: [
          t('Thinking banks are mainly paid by retainers. Most of the fee is success-based and paid only at closing.', 'Pensare che le banche siano pagate soprattutto con i retainer. La gran parte della fee è a successo e si incassa solo al closing.'),
          t('Forgetting the tail provision: ending the mandate does not automatically cancel the fee.', 'Dimenticare la tail provision: chiudere il mandato non cancella automaticamente la fee.'),
          t('Applying the incentive percentage to the whole value rather than only to the part above the threshold.', 'Applicare la percentuale incentivante all’intero valore anziché solo all’eccedenza sulla soglia.')
        ]
      },
      {
        type: 'summary',
        items: [
          t('Coverage bankers originate; product teams (M&A, ECM, DCM, LevFin) execute.', 'I banker di coverage originano; i team di prodotto (M&A, ECM, DCM, LevFin) eseguono.'),
          t('Pitchbook = credentials, market, valuation football field, buyers, process.', 'Pitchbook = credenziali, mercato, football field di valutazione, acquirenti, processo.'),
          t('Engagement letter: scope, exclusivity, retainer, success/minimum/incentive fee, tail, indemnity.', 'Lettera di incarico: oggetto, esclusiva, retainer, success/minimum/incentive fee, tail, manleva.'),
          t('Fees are mostly contingent on closing.', 'Le fee dipendono in gran parte dal closing.')
        ]
      }
    ],
    questions: [
      {
        id: 'ma-orig-q1',
        kind: 'grid',
        topic: 'advisory-fees',
        difficulty: 2,
        objective: t('Compute an advisory fee with incentive and credited retainers.', 'Calcolare una fee di advisory con incentivo e retainer detraibili.'),
        prompt: t(
          'Success fee 1.25% of EV; incentive fee 2.5% on EV above €500m; retainers of €0.2m credited. The company is sold for €560m EV. Fill in (€m).',
          'Success fee 1,25% dell’EV; incentive fee 2,5% sull’EV eccedente €500m; retainer di €0,2m detraibili. La società è venduta a €560m di EV. Completa (€m).'
        ),
        columns: [t('Item', 'Voce'), t('€m', '€m')],
        rows: [
          { label: t('Base success fee', 'Success fee base'), cells: [{ answer: 7, verify: { fn: 'product', args: [0.0125, 560] } }] },
          { label: t('Incentive fee', 'Incentive fee'), cells: [{ answer: 1.5, verify: { fn: 'product', args: [0.025, 60] } }] },
          { label: t('Net fee payable', 'Fee netta dovuta'), cells: [{ answer: 8.3, verify: { fn: 'sum', args: [7, 1.5, -0.2] } }] }
        ],
        unit: '€m',
        explanation: t(
          'Base = 1.25% × 560 = 7.0. Incentive = 2.5% × (560 − 500) = 1.5. Net = 7.0 + 1.5 − 0.2 = 8.3. Applying 2.5% to the full €560m (14.0) is the classic error.',
          'Base = 1,25% × 560 = 7,0. Incentivo = 2,5% × (560 − 500) = 1,5. Netto = 7,0 + 1,5 − 0,2 = 8,3. Applicare il 2,5% all’intero importo di €560m (14,0) è l’errore classico.'
        )
      },
      {
        id: 'ma-orig-q2',
        kind: 'numeric',
        topic: 'advisory-fees',
        difficulty: 2,
        objective: t('Apply the Lehman formula.', 'Applicare la formula Lehman.'),
        prompt: t(
          'Using the classic Lehman formula (5-4-3-2-1), what is the fee on an $8m transaction ($m)?',
          'Applicando la formula Lehman classica (5-4-3-2-1), qual è la fee su un’operazione da $8m ($m)?'
        ),
        answer: 0.18,
        unit: '$m',
        tolerance: { abs: 0.001 },
        verify: { fn: 'sum', args: [0.05, 0.04, 0.03, 0.02, 0.04] },
        explanation: t(
          '5% × 1 + 4% × 1 + 3% × 1 + 2% × 1 + 1% × 4 = 0.05 + 0.04 + 0.03 + 0.02 + 0.04 = $0.18m.',
          '5% × 1 + 4% × 1 + 3% × 1 + 2% × 1 + 1% × 4 = 0,05 + 0,04 + 0,03 + 0,02 + 0,04 = $0,18m.'
        )
      },
      {
        id: 'ma-orig-q3',
        kind: 'mcq',
        topic: 'engagement-letter',
        difficulty: 2,
        objective: t('Understand the tail provision.', 'Comprendere la tail provision.'),
        prompt: t(
          'A client terminates the bank’s sell-side mandate in March. In November, it sells the company to a buyer the bank had contacted during the process. The engagement letter has a 12-month tail. What happens?',
          'Un cliente revoca il mandato sell-side alla banca a marzo. A novembre vende la società a un acquirente che la banca aveva contattato durante il processo. La lettera di incarico prevede una tail di 12 mesi. Cosa succede?'
        ),
        choices: [
          t('No fee: the mandate was terminated before the deal', 'Nessuna fee: il mandato era cessato prima del deal'),
          t('Only the retainers already paid are due', 'Sono dovuti solo i retainer già pagati'),
          t('The bank is entitled to its success fee under the tail provision', 'La banca ha diritto alla success fee in base alla tail provision'),
          t('The fee is due only if the bank also issues a fairness opinion', 'La fee è dovuta solo se la banca rilascia anche una fairness opinion')
        ],
        correct: 2,
        explanation: t(
          'The tail protects the bank from clients terminating the mandate just before signing with a buyer the bank introduced. November is within 12 months of termination, so the success fee is payable.',
          'La tail tutela la banca dal cliente che revoca il mandato poco prima di firmare con un acquirente introdotto dalla banca. Novembre cade entro 12 mesi dalla revoca, quindi la success fee è dovuta.'
        )
      },
      {
        id: 'ma-orig-q4',
        kind: 'multi',
        topic: 'pitchbook',
        difficulty: 1,
        objective: t('Recall the standard sections of a sell-side pitchbook.', 'Ricordare le sezioni tipiche di un pitchbook sell-side.'),
        prompt: t('Which sections typically appear in a sell-side pitchbook? Select all that apply.', 'Quali sezioni compaiono tipicamente in un pitchbook sell-side? Seleziona tutte le risposte corrette.'),
        choices: [
          t('Preliminary valuation summarised in a football field', 'Valutazione preliminare sintetizzata in un football field'),
          t('Signed SPA with the preferred buyer', 'SPA firmato con l’acquirente preferito'),
          t('Universe of potential strategic and financial buyers', 'Universo dei potenziali acquirenti strategici e finanziari'),
          t('Relevant credentials and league table positions', 'Credenziali rilevanti e posizionamento nelle league table'),
          t('Recommended process and timeline', 'Processo e tempistica raccomandati')
        ],
        correct: [0, 2, 3, 4],
        explanation: t(
          'A pitchbook shows valuation, buyers, credentials and process. An SPA is signed months later, at the end of the process.',
          'Un pitchbook presenta valutazione, acquirenti, credenziali e processo. Lo SPA si firma mesi dopo, alla fine del processo.'
        )
      },
      {
        id: 'ma-orig-q5',
        kind: 'order',
        topic: 'origination',
        difficulty: 1,
        objective: t('Sequence the origination path.', 'Ordinare il percorso di origination.'),
        prompt: t('Order the path from relationship to execution.', 'Ordina il percorso dalla relazione all’esecuzione.'),
        items: [
          t('Coverage banker builds relationship and brings ideas to the CEO/CFO', 'Il banker di coverage costruisce la relazione e porta idee all’AD/CFO'),
          t('Client invites banks to pitch (beauty contest)', 'Il cliente invita le banche a presentarsi (beauty contest)'),
          t('Pitch meeting with valuation and process proposal', 'Incontro di pitch con valutazione e proposta di processo'),
          t('Engagement letter negotiated and signed', 'Negoziazione e firma della lettera di incarico'),
          t('Kick-off meeting and process preparation begin', 'Kick-off meeting e avvio della preparazione del processo')
        ],
        explanation: t(
          'Relationship → invitation to pitch → pitch → engagement letter → kick-off. Work on teaser, model and CIM starts only after the mandate is signed.',
          'Relazione → invito al pitch → pitch → lettera di incarico → kick-off. Il lavoro su teaser, modello e info memo parte solo dopo la firma del mandato.'
        )
      }
    ],
    flashcards: [
      { id: 'fc-ma-orig-1', topic: 'engagement-letter', front: t('What is a tail provision?', 'Che cos’è la tail provision?'), back: t('The bank still earns its fee if a deal with a party it introduced closes within a set period (often 12–24 months) after the mandate ends.', 'La banca matura comunque la fee se un deal con una controparte da essa introdotta si chiude entro un periodo (spesso 12–24 mesi) dalla fine del mandato.') },
      { id: 'fc-ma-orig-2', topic: 'advisory-fees', front: t('Retainer vs success fee?', 'Retainer vs success fee?'), back: t('Retainer: fixed periodic fee, often credited against the success fee. Success fee: % of transaction value, paid only if the deal closes.', 'Retainer: compenso fisso periodico, spesso detraibile dalla success fee. Success fee: % del valore dell’operazione, pagata solo se il deal si chiude.') },
      { id: 'fc-ma-orig-3', topic: 'origination', front: t('Coverage vs product bankers?', 'Banker di coverage vs di prodotto?'), back: t('Coverage: own client relationships by sector/country and originate. Product (M&A, ECM, DCM, LevFin): structure and execute.', 'Coverage: gestiscono le relazioni per settore/Paese e originano. Prodotto (M&A, ECM, DCM, LevFin): strutturano ed eseguono.') },
      { id: 'fc-ma-orig-4', topic: 'advisory-fees', front: t('The Lehman formula?', 'La formula Lehman?'), back: t('5% of the first $1m, 4% of the second, 3% of the third, 2% of the fourth, 1% thereafter.', '5% del primo milione, 4% del secondo, 3% del terzo, 2% del quarto, 1% sull’eccedenza.') }
    ]
  },

  /* ================================================================== */
  /* M2 — ma-sell-side-process                                           */
  /* ================================================================== */
  {
    id: 'ma-sell-side-process',
    academyId: 'ma',
    moduleId: 'M2',
    mode: 'deep',
    minutes: 15,
    difficulty: 2,
    qualitative: true,
    reviewed: '2026-10',
    objective: t(
      'Describe the two-stage sell-side auction week by week, the documents produced at each step and the analyst’s role throughout.',
      'Descrivere l’asta sell-side in due fasi settimana per settimana, i documenti prodotti in ogni passaggio e il ruolo dell’analista lungo tutto il processo.'
    ),
    screens: [
      {
        type: 'intuition',
        title: t('Create competition, control information', 'Creare concorrenza, controllare le informazioni'),
        body: t(
          'A seller wants the **highest price** with the **highest certainty** and the **least disruption** to the business.\n\nThe **two-stage auction** does this by releasing information gradually: a wide group of buyers sees a little, gives an indicative price; a shortlist sees a lot and gives a binding offer.\n\nCompetition pushes price up; staging protects confidentiality and management time. The sell-side bank runs the whole machine.',
          'Un venditore vuole il **prezzo più alto** con la **massima certezza** e il **minimo disturbo** per il business.\n\nL’**asta in due fasi** ci riesce rilasciando le informazioni gradualmente: un gruppo ampio di acquirenti vede poco e dà un prezzo indicativo; una short list vede molto e presenta un’offerta vincolante.\n\nLa concorrenza spinge il prezzo verso l’alto; le fasi proteggono riservatezza e tempo del management. La banca sell-side gestisce l’intera macchina.'
        )
      },
      {
        type: 'technical',
        title: t('Choosing the format', 'Scegliere il formato'),
        body: t(
          '- **Broad auction**: many buyers (e.g. 50+ contacted). Maximises competition; higher leak and disruption risk.\n- **Targeted auction**: a selected group (often 10–20) of the most likely buyers. The most common middle ground.\n- **Bilateral / negotiated sale**: one buyer. Fast and confidential, but weak price tension — used when there is an obvious buyer or high sensitivity.\n\nThe bank recommends the format after the **buyer list** is built and ranked by strategic fit, ability to pay and likelihood of interest.',
          '- **Asta allargata**: molti acquirenti (es. 50+ contattati). Massimizza la concorrenza; maggior rischio di fughe di notizie e di disturbo.\n- **Asta ristretta (targeted)**: un gruppo selezionato (spesso 10–20) dei più probabili acquirenti. La via di mezzo più comune.\n- **Trattativa bilaterale**: un solo acquirente. Rapida e riservata ma con poca tensione sul prezzo — usata quando c’è un acquirente naturale o grande sensibilità.\n\nLa banca raccomanda il formato dopo aver costruito la **lista acquirenti** e averla ordinata per fit strategico, capacità di pagare e probabilità di interesse.'
        )
      },
      {
        type: 'technical',
        title: t('Illustrative timeline (≈ 5–6 months to signing)', 'Tempistica indicativa (≈ 5–6 mesi al signing)'),
        body: t('Weeks are indicative; regulatory approvals then add time before closing.', 'Le settimane sono indicative; le autorizzazioni allungano poi i tempi fino al closing.'),
        table: {
          headers: [t('Weeks', 'Settimane'), t('Phase', 'Fase'), t('Key outputs', 'Output principali')],
          rows: [
            ['1–6', t('Preparation', 'Preparazione'), t('Model, buyer list, teaser, CIM, VDD kick-off, data room set-up', 'Modello, lista acquirenti, teaser, info memo, avvio VDD, allestimento data room')],
            ['7–8', t('Launch', 'Lancio'), t('Teasers sent, NDAs negotiated and signed', 'Invio teaser, negoziazione e firma NDA')],
            ['8–11', t('Phase 1', 'Fase 1'), t('CIM and process letter sent; buyer Q&A', 'Invio info memo e process letter; Q&A con gli acquirenti')],
            ['12', t('Phase 1 bids', 'Offerte fase 1'), t('Non-binding indicative offers; shortlist', 'Offerte indicative non vincolanti; short list')],
            ['13–19', t('Phase 2', 'Fase 2'), t('Management presentations, data room, site visits, VDD reports, draft SPA', 'Management presentation, data room, visite in sito, report VDD, bozza di SPA')],
            ['20', t('Final bids', 'Offerte finali'), t('Binding offers + SPA mark-ups + financing evidence', 'Offerte vincolanti + mark-up dello SPA + evidenza del finanziamento')],
            ['21–23', t('Negotiation', 'Negoziazione'), t('Preferred bidder, SPA finalised, signing', 'Offerente preferito, SPA definitivo, signing')]
          ]
        }
      },
      {
        type: 'technical',
        title: t('The documents, step by step', 'I documenti, passo per passo'),
        body: t(
          '- **Teaser**: 1–2 anonymous pages under a codename ("Project Aurora"): business description, key financials, investment highlights. No name.\n- **NDA** (accordo di riservatezza): confidentiality, use only for evaluating the deal, **non-solicitation** of employees, no contact with staff, customers or suppliers, return/destroy information; for listed targets often a **standstill**.\n- **CIM / Information Memorandum**: typically 50–100+ pages — market, business model, customers, management, historical and projected financials.\n- **Process letter**: rules, deadlines and what bids must contain.\n- **Management presentation**: a half-day session where management presents to each shortlisted bidder.\n- **Virtual data room (VDR)**: contracts, accounts, HR, IP, tax, legal documents, and VDD reports.',
          '- **Teaser**: 1–2 pagine anonime con un nome in codice ("Progetto Aurora"): descrizione del business, dati finanziari chiave, punti di forza. Nessun nome.\n- **NDA** (accordo di riservatezza): riservatezza, uso solo per valutare l’operazione, **divieto di storno** dei dipendenti, nessun contatto con personale, clienti o fornitori, restituzione/distruzione delle informazioni; per le quotate spesso uno **standstill**.\n- **Info memo (CIM)**: tipicamente 50–100+ pagine — mercato, modello di business, clienti, management, dati storici e prospettici.\n- **Process letter**: regole, scadenze e contenuto richiesto delle offerte.\n- **Management presentation**: mezza giornata in cui il management si presenta a ciascun offerente in short list.\n- **Virtual data room (VDR)**: contratti, bilanci, HR, proprietà intellettuale, documenti fiscali e legali, report di VDD.'
        )
      },
      {
        type: 'example',
        title: t('What the analyst produces at each stage', 'Cosa produce l’analista in ogni fase'),
        body: t('A sample deliverables list on a mid-market sale:', 'Un esempio di deliverable in una vendita mid-market:'),
        table: {
          headers: [t('Stage', 'Fase'), t('Analyst deliverables', 'Deliverable dell’analista')],
          rows: [
            [t('Preparation', 'Preparazione'), t('Operating model with management’s business plan; first drafts of teaser and CIM sections; buyer list with contact log', 'Modello operativo sul business plan del management; prime bozze di teaser e sezioni dell’info memo; lista acquirenti con log dei contatti')],
            [t('Launch', 'Lancio'), t('NDA tracker (sent / comments / signed); teaser distribution', 'NDA tracker (inviati / commenti / firmati); invio dei teaser')],
            [t('Phase 1', 'Fase 1'), t('Q&A log; bid comparison table normalising headline prices to equity value', 'Q&A log; tabella di confronto offerte che porta i prezzi indicati a equity value')],
            [t('Phase 2', 'Fase 2'), t('Management presentation deck and rehearsal notes; data room index and access reports; scheduling of site visits', 'Deck della management presentation e note per le prove; indice della data room e report sugli accessi; calendario delle visite')],
            [t('Final bids', 'Offerte finali'), t('Final bid summary for the client board: price, conditions, SPA mark-up issues, financing certainty', 'Sintesi delle offerte finali per il CdA del cliente: prezzo, condizioni, punti del mark-up SPA, certezza del finanziamento')]
          ]
        }
      },
      {
        type: 'realworld',
        title: t('How processes really behave', 'Come si comportano davvero i processi'),
        body: t(
          '- Timelines slip: a CIM waiting on audited accounts or a business plan revision can cost weeks.\n- Bidders try to **pre-empt**: an early, attractive offer conditional on exclusivity, to avoid the auction. The bank must judge whether to accept or keep competition alive.\n- **Data room access reports** tell the bank which bidders are serious — who is reading the customer contracts at midnight.\n- Bidders often form **consortia** (two sponsors, or a sponsor plus a strategic); the process letter usually requires the seller’s consent first, to prevent bidders colluding.',
          '- Le tempistiche slittano: un info memo che attende il bilancio certificato o la revisione del business plan può costare settimane.\n- Gli offerenti cercano il **pre-emptive bid**: un’offerta anticipata e attraente in cambio dell’esclusiva, per evitare l’asta. La banca deve valutare se accettarla o mantenere la concorrenza.\n- I **report sugli accessi alla data room** dicono alla banca quali offerenti fanno sul serio — chi legge i contratti con i clienti a mezzanotte.\n- Gli offerenti formano spesso **consorzi** (due sponsor, o uno sponsor e uno strategico); la process letter di norma richiede prima il consenso del venditore, per evitare accordi tra offerenti.'
        )
      },
      { type: 'exercise', questionId: 'ma-ssp-q1' },
      { type: 'exercise', questionId: 'ma-ssp-q2' },
      { type: 'exercise', questionId: 'ma-ssp-q3' },
      {
        type: 'interview',
        question: t('Walk me through a sell-side M&A process.', 'Mi descriva un processo M&A sell-side.'),
        answer: t(
          'After the mandate, we spend four to six weeks preparing: the model, the buyer list of strategics and sponsors, a teaser and the information memorandum, and often vendor due diligence. We send the anonymous teaser, sign NDAs with interested parties and send the CIM with a process letter. Around week twelve we receive non-binding indicative offers and shortlist four to six bidders. In phase two they get management presentations, the data room and VDD reports, and a draft SPA. Binding offers come with SPA mark-ups and financing evidence; we compare them on price, conditionality and certainty, pick a preferred bidder, negotiate and sign. Closing follows after regulatory approvals.',
          'Dopo il mandato dedichiamo quattro-sei settimane alla preparazione: modello, lista di acquirenti strategici e finanziari, teaser e information memorandum, spesso la vendor due diligence. Inviamo il teaser anonimo, firmiamo gli NDA con gli interessati e mandiamo l’info memo con la process letter. Verso la dodicesima settimana riceviamo offerte indicative non vincolanti e selezioniamo quattro-sei offerenti. In fase due hanno management presentation, data room, report di VDD e una bozza di SPA. Le offerte vincolanti arrivano con il mark-up dello SPA e l’evidenza del finanziamento; le confrontiamo per prezzo, condizionalità e certezza, scegliamo un offerente preferito, negoziamo e firmiamo. Il closing segue dopo le autorizzazioni.'
        )
      },
      {
        type: 'mistakes',
        items: [
          t('Putting the target’s name in the teaser. It is anonymous; the name is revealed only after the NDA.', 'Mettere il nome del target nel teaser. È anonimo; il nome si rivela solo dopo l’NDA.'),
          t('Sending the full data room in phase 1. Detailed information goes only to shortlisted bidders.', 'Aprire tutta la data room in fase 1. Le informazioni di dettaglio vanno solo agli offerenti in short list.'),
          t('Comparing bids on headline EV alone, ignoring conditions, SPA mark-ups and financing certainty.', 'Confrontare le offerte solo sull’EV indicato, ignorando condizioni, mark-up dello SPA e certezza del finanziamento.'),
          t('Assuming signing means closing; approvals and conditions precedent come in between.', 'Pensare che signing significhi closing; nel mezzo ci sono autorizzazioni e condizioni sospensive.')
        ]
      },
      {
        type: 'summary',
        items: [
          t('Preparation → teaser → NDA → CIM → indicative offers → phase 2 → binding offers → signing.', 'Preparazione → teaser → NDA → info memo → offerte indicative → fase 2 → offerte vincolanti → signing.'),
          t('Two stages release information gradually and keep competition alive.', 'Le due fasi rilasciano le informazioni gradualmente e mantengono la concorrenza.'),
          t('Analysts own the model, buyer list, trackers, Q&A log, data room and bid comparisons.', 'L’analista gestisce modello, lista acquirenti, tracker, Q&A log, data room e confronto offerte.'),
          t('Typical sale: about 5–6 months from kick-off to signing.', 'Vendita tipica: circa 5–6 mesi dal kick-off al signing.')
        ]
      }
    ],
    questions: [
      {
        id: 'ma-ssp-q1',
        kind: 'order',
        topic: 'sell-side-process',
        difficulty: 1,
        objective: t('Sequence the steps of a two-stage auction.', 'Ordinare le fasi di un’asta in due fasi.'),
        prompt: t('Put the steps of a sell-side auction in order.', 'Metti in ordine le fasi di un’asta sell-side.'),
        items: [
          t('Prepare model, buyer list, teaser and CIM', 'Preparare modello, lista acquirenti, teaser e info memo'),
          t('Send the anonymous teaser', 'Inviare il teaser anonimo'),
          t('Sign NDAs with interested parties', 'Firmare gli NDA con gli interessati'),
          t('Distribute the CIM and process letter', 'Inviare info memo e process letter'),
          t('Receive non-binding indicative offers', 'Ricevere le offerte indicative non vincolanti'),
          t('Management presentations and data room access for the shortlist', 'Management presentation e accesso alla data room per la short list'),
          t('Receive binding offers with SPA mark-ups', 'Ricevere le offerte vincolanti con il mark-up dello SPA'),
          t('Negotiate with the preferred bidder and sign the SPA', 'Negoziare con l’offerente preferito e firmare lo SPA')
        ],
        explanation: t(
          'Information is released in increasing detail: teaser (anonymous) → NDA → CIM → indicative bids → phase 2 diligence → binding bids → signing.',
          'Le informazioni sono rilasciate con dettaglio crescente: teaser (anonimo) → NDA → info memo → offerte indicative → due diligence di fase 2 → offerte vincolanti → signing.'
        )
      },
      {
        id: 'ma-ssp-q2',
        kind: 'mcq',
        topic: 'sell-side-process',
        difficulty: 1,
        objective: t('Know what a teaser contains.', 'Sapere cosa contiene un teaser.'),
        prompt: t('Which is most typical of a teaser?', 'Quale caratteristica è più tipica di un teaser?'),
        choices: [
          t('A 1–2 page anonymous summary with key financials and investment highlights', 'Una sintesi anonima di 1–2 pagine con dati chiave e punti di forza'),
          t('A 100-page document with detailed projections and customer contracts', 'Un documento di 100 pagine con proiezioni dettagliate e contratti con i clienti'),
          t('A draft SPA for buyers to mark up', 'Una bozza di SPA da commentare'),
          t('The company’s name, management CVs and full audited accounts', 'Il nome della società, i CV del management e i bilanci certificati completi')
        ],
        correct: 0,
        explanation: t(
          'The teaser is short and anonymous so the seller can test interest without revealing identity. Detailed projections belong in the CIM; contracts in the data room; the SPA draft comes in phase 2.',
          'Il teaser è breve e anonimo, per sondare l’interesse senza rivelare l’identità. Le proiezioni dettagliate stanno nell’info memo, i contratti in data room, la bozza di SPA arriva in fase 2.'
        )
      },
      {
        id: 'ma-ssp-q3',
        kind: 'multi',
        topic: 'nda',
        difficulty: 2,
        objective: t('Identify typical NDA provisions in an M&A process.', 'Riconoscere le clausole tipiche di un NDA in un processo M&A.'),
        prompt: t('Which provisions are typical in a sell-side NDA? Select all that apply.', 'Quali clausole sono tipiche in un NDA sell-side? Seleziona tutte le risposte corrette.'),
        choices: [
          t('Use of information only to evaluate the transaction', 'Uso delle informazioni solo per valutare l’operazione'),
          t('Non-solicitation of the target’s employees', 'Divieto di storno dei dipendenti del target'),
          t('A commitment by the bidder to submit a binding offer', 'L’impegno dell’offerente a presentare un’offerta vincolante'),
          t('No contact with the target’s customers, suppliers or staff without consent', 'Nessun contatto con clienti, fornitori o personale del target senza consenso'),
          t('A standstill on buying shares, if the target is listed', 'Uno standstill sull’acquisto di azioni, se il target è quotato')
        ],
        correct: [0, 1, 3, 4],
        explanation: t(
          'NDAs restrict use, solicitation, contacts and (for listed targets) share purchases. They never oblige the bidder to make an offer.',
          'Gli NDA limitano uso delle informazioni, storno, contatti e (per le quotate) acquisti di azioni. Non obbligano mai l’offerente a presentare un’offerta.'
        )
      },
      {
        id: 'ma-ssp-q4',
        kind: 'mcq',
        topic: 'sell-side-process',
        difficulty: 2,
        objective: t('Explain the purpose of a two-stage auction.', 'Spiegare lo scopo di un’asta in due fasi.'),
        prompt: t('Why do sellers usually run a two-stage rather than a one-stage auction?', 'Perché i venditori preferiscono di solito un’asta in due fasi anziché in una?'),
        choices: [
          t('Because the law requires two rounds of bids', 'Perché la legge impone due tornate di offerte'),
          t('To limit detailed disclosure and management time to the most serious bidders while keeping price tension', 'Per limitare informazioni di dettaglio e tempo del management agli offerenti più seri mantenendo tensione sul prezzo'),
          t('To let every bidder perform full due diligence before giving any price', 'Per permettere a ogni offerente una due diligence completa prima di indicare un prezzo'),
          t('Because indicative offers are legally binding on the buyer', 'Perché le offerte indicative vincolano legalmente l’acquirente')
        ],
        correct: 1,
        explanation: t(
          'Staging is a commercial choice, not a legal requirement: it filters bidders before sensitive information and management access are granted. Indicative offers are non-binding.',
          'Le fasi sono una scelta commerciale, non un obbligo di legge: filtrano gli offerenti prima di concedere informazioni sensibili e accesso al management. Le offerte indicative non sono vincolanti.'
        )
      },
      {
        id: 'ma-ssp-q5',
        kind: 'mcq',
        topic: 'sell-side-process',
        difficulty: 2,
        objective: t('Choose the right auction format.', 'Scegliere il formato d’asta corretto.'),
        prompt: t(
          'A family-owned company is highly sensitive about leaks to employees and customers, and there are about a dozen credible buyers. Which format fits best?',
          'Una società familiare teme molto le fughe di notizie verso dipendenti e clienti, e ci sono circa una dozzina di acquirenti credibili. Quale formato è più adatto?'
        ),
        choices: [
          t('Broad auction to 80 parties', 'Asta allargata a 80 controparti'),
          t('Targeted auction to the most credible buyers', 'Asta ristretta ai compratori più credibili'),
          t('Public announcement inviting offers', 'Annuncio pubblico con invito a presentare offerte'),
          t('No process: wait for unsolicited approaches', 'Nessun processo: attendere approcci spontanei')
        ],
        correct: 1,
        explanation: t(
          'A targeted auction keeps competition among the credible buyers while limiting leak risk. A broad auction to 80 parties or a public announcement maximises leaks; waiting passively forfeits price tension.',
          'Un’asta ristretta mantiene la concorrenza tra i compratori credibili limitando il rischio di fughe. Un’asta a 80 controparti o un annuncio pubblico le massimizzano; attendere passivamente rinuncia alla tensione sul prezzo.'
        )
      }
    ],
    flashcards: [
      { id: 'fc-ma-ssp-1', topic: 'sell-side-process', front: t('Teaser vs CIM?', 'Teaser vs info memo?'), back: t('Teaser: 1–2 page anonymous summary sent before the NDA. CIM: detailed 50–100+ page memorandum sent after the NDA.', 'Teaser: sintesi anonima di 1–2 pagine inviata prima dell’NDA. Info memo: documento dettagliato di 50–100+ pagine inviato dopo l’NDA.') },
      { id: 'fc-ma-ssp-2', topic: 'sell-side-process', front: t('What happens in phase 2 of an auction?', 'Cosa succede nella fase 2 di un’asta?'), back: t('Shortlisted bidders get management presentations, data room access, site visits, VDD reports and the draft SPA, then submit binding offers.', 'Gli offerenti in short list ricevono management presentation, accesso alla data room, visite, report di VDD e bozza di SPA, poi presentano offerte vincolanti.') },
      { id: 'fc-ma-ssp-3', topic: 'nda', front: t('What is a standstill clause?', 'Che cos’è una clausola di standstill?'), back: t('A commitment (common in NDAs for listed targets) not to buy shares or launch an unsolicited offer for a set period.', 'L’impegno (frequente negli NDA per target quotati) a non acquistare azioni né lanciare offerte non concordate per un periodo definito.') },
      { id: 'fc-ma-ssp-4', topic: 'sell-side-process', front: t('What is a pre-emptive bid?', 'Che cos’è un pre-emptive bid?'), back: t('An early, attractive offer made to take the asset out of the auction, usually in exchange for exclusivity.', 'Un’offerta anticipata e attraente per sottrarre l’asset all’asta, di solito in cambio di esclusiva.') },
      { id: 'fc-ma-ssp-5', topic: 'sell-side-process', front: t('Typical length of a sale process to signing?', 'Durata tipica di un processo di vendita fino al signing?'), back: t('Roughly 5–6 months (indicative), plus time for approvals before closing.', 'Circa 5–6 mesi (indicativo), più il tempo per le autorizzazioni prima del closing.') }
    ]
  },
  /* ================================================================== */
  /* M2 — ma-offers-loi                                                  */
  /* ================================================================== */
  {
    id: 'ma-offers-loi',
    academyId: 'ma',
    moduleId: 'M2',
    mode: 'deep',
    minutes: 12,
    difficulty: 2,
    reviewed: '2026-10',
    objective: t(
      'Distinguish indicative offers, LOIs and binding offers, know what each must contain, and compare bids on a like-for-like equity value basis.',
      'Distinguere offerte indicative, lettere d’intenti e offerte vincolanti, sapere cosa deve contenere ciascuna e confrontare le offerte su base omogenea di equity value.'
    ),
    screens: [
      {
        type: 'intuition',
        title: t('From "we are interested" to "we will sign"', 'Da "siamo interessati" a "siamo pronti a firmare"'),
        body: t(
          'Offers harden as information grows.\n\n- **Indicative offer** (phase 1): a price range or point, based on the CIM only. Non-binding — the bidder has not seen the data room.\n- **LOI** (letter of intent): the key terms agreed with one party, usually with **exclusivity**. Mostly non-binding.\n- **Binding offer** (phase 2): a firm price, a marked-up **SPA**, and evidence of financing — ready to sign.\n\nThe sell-side bank’s job is to make offers **comparable** and to squeeze out conditionality.',
          'Le offerte si consolidano man mano che crescono le informazioni.\n\n- **Offerta indicativa** (fase 1): un prezzo o un range basato solo sull’info memo. Non vincolante — l’offerente non ha visto la data room.\n- **LOI** (lettera d’intenti): i termini chiave concordati con una sola controparte, di solito con **esclusiva**. In gran parte non vincolante.\n- **Offerta vincolante** (fase 2): prezzo fermo, **SPA** commentato (mark-up) ed evidenza del finanziamento — pronta per la firma.\n\nIl compito della banca sell-side è rendere le offerte **confrontabili** e ridurne la condizionalità.'
        )
      },
      {
        type: 'technical',
        title: t('The process letter tells bidders what to submit', 'La process letter dice agli offerenti cosa presentare'),
        body: t(
          'A **phase 1 process letter** typically asks for:\n\n- headline **price** for 100% of the shares, on a **cash-free / debt-free basis** assuming a **normal level of working capital**;\n- **valuation basis** and key assumptions;\n- **sources of financing** (equity, debt, cash on hand);\n- **due diligence** needs and timetable;\n- **approvals** required (investment committee, board, antitrust, foreign investment);\n- intentions for **management and employees**;\n- **conditions** and advisors appointed.\n\nIt also states deadline, format and that the seller can change the process at any time.',
          'Una **process letter di fase 1** chiede in genere:\n\n- **prezzo** per il 100% delle azioni, su base **cash-free / debt-free** e assumendo un **livello normale di capitale circolante**;\n- **criteri di valutazione** e ipotesi principali;\n- **fonti di finanziamento** (equity, debito, cassa disponibile);\n- esigenze e tempi di **due diligence**;\n- **autorizzazioni** necessarie (comitato investimenti, CdA, antitrust, investimenti esteri);\n- intenzioni su **management e dipendenti**;\n- **condizioni** e advisor nominati.\n\nIndica inoltre scadenza e formato, e che il venditore può modificare il processo in qualsiasi momento.'
        )
      },
      {
        type: 'technical',
        title: t('LOIs and binding offers', 'LOI e offerte vincolanti'),
        body: t(
          '**LOI / term sheet**: price and structure, key SPA terms, timetable, **exclusivity** (often several weeks), confidentiality, costs and governing law. Usually only exclusivity, confidentiality, costs and governing law are binding. Under Italian law, parties must still negotiate in **good faith** (art. 1337 c.c.): breaking off talks unfairly can create pre-contractual liability.\n\n**Binding offer**: firm price; **SPA mark-up** from the bidder’s lawyers; **equity commitment letter** (sponsor) and **debt commitment letters**; confirmation of internal approvals; conditions limited to regulatory approvals; a validity period.\n\nThe less a bidder changes the seller’s SPA, the stronger the bid.',
          '**LOI / term sheet**: prezzo e struttura, termini chiave dello SPA, tempistica, **esclusiva** (spesso alcune settimane), riservatezza, costi e legge applicabile. Di norma sono vincolanti solo esclusiva, riservatezza, costi e legge applicabile. Per il diritto italiano, le parti devono comunque comportarsi secondo **buona fede** nelle trattative (art. 1337 c.c.): interromperle ingiustificatamente può generare responsabilità precontrattuale.\n\n**Offerta vincolante**: prezzo fermo; **mark-up dello SPA** dei legali dell’offerente; **equity commitment letter** (sponsor) e **debt commitment letter**; conferma delle approvazioni interne; condizioni limitate alle autorizzazioni regolamentari; un periodo di validità.\n\nMeno l’offerente modifica lo SPA del venditore, più forte è l’offerta.'
        )
      },
      {
        type: 'formula',
        formulas: [
          {
            name: t('From headline EV to equity value received', 'Dall’EV offerto all’equity value incassato'),
            expr: 'Equity value = EV − Net debt (incl. debt-like items) + (Actual NWC − Target NWC peg)',
            vars: [
              { sym: 'Target NWC peg', desc: t('The "normal" working capital level assumed in the offer', 'Il livello "normale" di capitale circolante assunto nell’offerta') },
              { sym: 'Actual NWC', desc: t('Working capital delivered at closing (or locked-box date)', 'Capitale circolante effettivo al closing (o alla data del locked box)') }
            ]
          }
        ],
        note: t(
          'Two bids with the same EV can deliver different equity to the seller if they assume different NWC pegs or define net debt differently.',
          'Due offerte con lo stesso EV possono portare al venditore un equity diverso se assumono peg di circolante diversi o definiscono diversamente il debito netto.'
        )
      },
      {
        type: 'example',
        title: t('The analyst’s bid comparison table', 'La tabella di confronto offerte dell’analista'),
        body: t(
          'TargetCo net debt: €120m. Expected NWC at closing: €55m. Three phase 2 bids (€m):',
          'Debito netto di TargetCo: €120m. NWC atteso al closing: €55m. Tre offerte di fase 2 (€m):'
        ),
        table: {
          headers: [t('€m', '€m'), t('Bidder A', 'Offerente A'), t('Bidder B', 'Offerente B'), t('Bidder C', 'Offerente C')],
          rows: [
            [t('Headline EV', 'EV offerto'), '520', '510', '530'],
            [t('Net debt', 'Debito netto'), '(120)', '(120)', '(120)'],
            [t('NWC peg', 'Peg NWC'), '60', '48', '70'],
            [t('NWC adjustment (55 − peg)', 'Aggiustamento NWC (55 − peg)'), '(5)', '+7', '(15)'],
            [t('Equity value to seller', 'Equity value al venditore'), '395', '397', '395'],
            [t('Financing', 'Finanziamento'), t('Committed', 'Impegnato'), t('Committed', 'Impegnato'), t('Financing condition', 'Condizionato al finanziamento')],
            [t('SPA mark-up', 'Mark-up SPA'), t('Moderate', 'Moderato'), t('Light', 'Leggero'), t('Heavy (uncapped indemnities)', 'Pesante (indennizzi senza tetto)')]
          ],
          totalRows: [4]
        }
      },
      {
        type: 'realworld',
        title: t('Reading the example like a banker', 'Leggere l’esempio come un banker'),
        body: t(
          'Bidder C has the highest headline EV but delivers **no more equity** than A and carries a **financing condition** and a heavy SPA mark-up — the least certain bid. Bidder B, the "lowest" EV, actually delivers the **most equity** with the cleanest terms.\n\nThis is exactly what analysts put in front of the client’s board: a one-page summary of price **and** deliverability. The bank may then go back to bidders for a **final round** ("best and final"), or grant **exclusivity** to the preferred bidder to finalise the SPA.',
          'L’offerente C ha l’EV più alto ma porta **lo stesso equity** di A e ha una **condizione di finanziamento** e un mark-up pesante — l’offerta meno certa. L’offerente B, con l’EV "più basso", porta in realtà **più equity** e con i termini più puliti.\n\nÈ esattamente ciò che gli analisti presentano al CdA del cliente: una pagina che sintetizza prezzo **e** realizzabilità. La banca può poi chiedere un **ultimo rilancio** ("best and final") o concedere l’**esclusiva** all’offerente preferito per finalizzare lo SPA.'
        )
      },
      { type: 'exercise', questionId: 'ma-loi-q1' },
      { type: 'exercise', questionId: 'ma-loi-q2' },
      { type: 'exercise', questionId: 'ma-loi-q3' },
      {
        type: 'interview',
        question: t('You receive three binding offers. How do you decide which is best?', 'Ricevi tre offerte vincolanti. Come decidi qual è la migliore?'),
        answer: t(
          'First I put them on a like-for-like basis: convert each headline EV into equity value to the seller, adjusting for net debt definitions, debt-like items and the working capital peg each bidder assumes. Then I look at certainty: committed equity and debt financing, approvals and conditions — especially antitrust and foreign investment risk — and how heavily they marked up the SPA on warranties, indemnities, caps and MAC. Finally timing and the plans for management and employees. The best offer is the highest risk-adjusted equity value, not necessarily the highest headline number.',
          'Prima le porto su base omogenea: converto ogni EV in equity value per il venditore, rettificando per definizioni di debito netto, debt-like items e peg di circolante assunto da ciascun offerente. Poi guardo alla certezza: finanziamento equity e debito impegnato, autorizzazioni e condizioni — soprattutto rischi antitrust e golden power — e quanto pesantemente hanno modificato lo SPA su garanzie, indennizzi, tetti e MAC. Infine tempi e piani per management e dipendenti. L’offerta migliore è il più alto equity value corretto per il rischio, non necessariamente il numero più alto.'
        )
      },
      {
        type: 'mistakes',
        items: [
          t('Treating an indicative offer or LOI as a commitment to buy. They are non-binding apart from specific clauses.', 'Trattare un’offerta indicativa o una LOI come un impegno ad acquistare. Non sono vincolanti salvo clausole specifiche.'),
          t('Comparing headline EVs without adjusting for NWC pegs and net debt definitions.', 'Confrontare gli EV offerti senza rettificare per peg di circolante e definizioni di debito netto.'),
          t('Granting exclusivity too early, before competitive tension has extracted the best terms.', 'Concedere l’esclusiva troppo presto, prima che la tensione competitiva abbia estratto i termini migliori.')
        ]
      },
      {
        type: 'summary',
        items: [
          t('Indicative offer → LOI/exclusivity → binding offer with SPA mark-up.', 'Offerta indicativa → LOI/esclusiva → offerta vincolante con mark-up dello SPA.'),
          t('Bids are quoted cash-free/debt-free with a normal NWC level.', 'Le offerte si esprimono cash-free/debt-free con un livello normale di circolante.'),
          t('Compare on equity value and certainty: financing, conditions, SPA changes.', 'Si confronta su equity value e certezza: finanziamento, condizioni, modifiche allo SPA.'),
          t('LOIs are mostly non-binding, except exclusivity, confidentiality, costs and governing law.', 'Le LOI sono in gran parte non vincolanti, salvo esclusiva, riservatezza, costi e legge applicabile.')
        ]
      }
    ],
    questions: [
      {
        id: 'ma-loi-q1',
        kind: 'numeric',
        topic: 'bid-comparison',
        difficulty: 2,
        objective: t('Convert a cash-free/debt-free offer into equity value with an NWC adjustment.', 'Convertire un’offerta cash-free/debt-free in equity value con aggiustamento del circolante.'),
        prompt: t(
          'A bidder offers an EV of €480m. Net debt is €95m, the NWC peg in the offer is €40m and the expected NWC at closing is €46m. What equity value does the seller receive (€m)?',
          'Un offerente propone un EV di €480m. Il debito netto è €95m, il peg NWC dell’offerta è €40m e il circolante atteso al closing è €46m. Quale equity value incassa il venditore (€m)?'
        ),
        answer: 391,
        unit: '€m',
        verify: { fn: 'equityPriceWithNWCAdjustment', args: [480, 95, 46, 40] },
        explanation: t(
          'Equity = 480 − 95 + (46 − 40) = €391m. NWC above the peg increases the price; subtracting the excess (379) reverses the sign.',
          'Equity = 480 − 95 + (46 − 40) = €391m. Un circolante superiore al peg aumenta il prezzo; sottrarre l’eccedenza (379) inverte il segno.'
        )
      },
      {
        id: 'ma-loi-q2',
        kind: 'mcq',
        topic: 'loi',
        difficulty: 2,
        objective: t('Identify which LOI provisions are usually binding.', 'Individuare quali clausole di una LOI sono di norma vincolanti.'),
        prompt: t('In a typical LOI, which provision is usually legally binding?', 'In una LOI tipica, quale clausola è di norma giuridicamente vincolante?'),
        choices: [
          t('The purchase price', 'Il prezzo di acquisto'),
          t('The obligation to sign the SPA', 'L’obbligo di firmare lo SPA'),
          t('Exclusivity', 'L’esclusiva'),
          t('The proposed structure of reps and warranties', 'La struttura proposta di dichiarazioni e garanzie')
        ],
        correct: 2,
        explanation: t(
          'Exclusivity (with confidentiality, costs and governing law) is typically binding; price, structure and the decision to sign remain subject to due diligence and the final SPA.',
          'L’esclusiva (con riservatezza, costi e legge applicabile) è di norma vincolante; prezzo, struttura e decisione di firmare restano subordinati alla due diligence e allo SPA definitivo.'
        )
      },
      {
        id: 'ma-loi-q3',
        kind: 'multi',
        topic: 'binding-offer',
        difficulty: 2,
        objective: t('Recall what a strong binding offer contains.', 'Ricordare cosa contiene un’offerta vincolante solida.'),
        prompt: t('Which elements make a binding offer stronger for the seller? Select all that apply.', 'Quali elementi rendono un’offerta vincolante più solida per il venditore? Seleziona tutte le risposte corrette.'),
        choices: [
          t('Equity and debt commitment letters', 'Equity e debt commitment letter'),
          t('A light SPA mark-up', 'Un mark-up leggero dello SPA'),
          t('Confirmation of investment committee approval', 'Conferma dell’approvazione del comitato investimenti'),
          t('A condition that the buyer obtains financing after signing', 'Una condizione che l’acquirente ottenga il finanziamento dopo il signing'),
          t('A requirement for a further four weeks of confirmatory due diligence', 'La richiesta di altre quattro settimane di due diligence confirmatoria')
        ],
        correct: [0, 1, 2],
        explanation: t(
          'Committed financing, few SPA changes and internal approvals increase certainty. A financing condition or further diligence leaves the seller exposed to the bidder walking away or re-trading the price.',
          'Finanziamento impegnato, poche modifiche allo SPA e approvazioni interne aumentano la certezza. Una condizione di finanziamento o ulteriore due diligence espone il venditore al rischio che l’offerente si ritiri o rinegozi il prezzo.'
        )
      },
      {
        id: 'ma-loi-q4',
        kind: 'grid',
        topic: 'bid-comparison',
        difficulty: 2,
        objective: t('Build a like-for-like bid comparison.', 'Costruire un confronto omogeneo tra offerte.'),
        prompt: t(
          'Net debt €200m; expected NWC at closing €80m. Bid X: EV €900m, peg €90m. Bid Y: EV €890m, peg €75m. Equity value to the seller (€m)?',
          'Debito netto €200m; circolante atteso al closing €80m. Offerta X: EV €900m, peg €90m. Offerta Y: EV €890m, peg €75m. Equity value al venditore (€m)?'
        ),
        columns: [t('Bid', 'Offerta'), t('Equity value €m', 'Equity value €m')],
        rows: [
          { label: t('Bid X', 'Offerta X'), cells: [{ answer: 690, verify: { fn: 'equityPriceWithNWCAdjustment', args: [900, 200, 80, 90] } }] },
          { label: t('Bid Y', 'Offerta Y'), cells: [{ answer: 695, verify: { fn: 'equityPriceWithNWCAdjustment', args: [890, 200, 80, 75] } }] }
        ],
        unit: '€m',
        explanation: t(
          'X: 900 − 200 + (80 − 90) = 690. Y: 890 − 200 + (80 − 75) = 695. The lower headline EV delivers €5m more equity because its NWC peg is lower.',
          'X: 900 − 200 + (80 − 90) = 690. Y: 890 − 200 + (80 − 75) = 695. L’EV più basso porta €5m di equity in più perché il peg di circolante è più basso.'
        )
      },
      {
        id: 'ma-loi-q5',
        kind: 'order',
        topic: 'loi',
        difficulty: 1,
        objective: t('Sequence offer documents in a process.', 'Ordinare i documenti d’offerta in un processo.'),
        prompt: t('Order the documents as they normally appear in an auction.', 'Ordina i documenti come compaiono normalmente in un’asta.'),
        items: [
          t('Phase 1 process letter', 'Process letter di fase 1'),
          t('Non-binding indicative offer', 'Offerta indicativa non vincolante'),
          t('Phase 2 process letter with draft SPA', 'Process letter di fase 2 con bozza di SPA'),
          t('Binding offer with SPA mark-up', 'Offerta vincolante con mark-up dello SPA'),
          t('Exclusivity granted to the preferred bidder', 'Esclusiva concessa all’offerente preferito'),
          t('Signed SPA', 'SPA firmato')
        ],
        explanation: t(
          'In an auction, exclusivity usually comes after binding offers, to finalise the SPA with the preferred bidder. In bilateral deals an LOI with exclusivity often comes much earlier.',
          'In un’asta l’esclusiva arriva di solito dopo le offerte vincolanti, per finalizzare lo SPA con l’offerente preferito. Nelle trattative bilaterali una LOI con esclusiva arriva spesso molto prima.'
        )
      }
    ],
    flashcards: [
      { id: 'fc-ma-loi-1', topic: 'loi', front: t('Which LOI clauses are usually binding?', 'Quali clausole di una LOI sono di norma vincolanti?'), back: t('Exclusivity, confidentiality, costs and governing law. Price and the obligation to sign are not.', 'Esclusiva, riservatezza, costi e legge applicabile. Prezzo e obbligo di firmare no.') },
      { id: 'fc-ma-loi-2', topic: 'bid-comparison', front: t('What does "cash-free / debt-free" mean in an offer?', 'Cosa significa "cash-free / debt-free" in un’offerta?'), back: t('The price is for the business as if it had no cash and no debt: equity value = EV − net debt, adjusted for NWC vs the peg.', 'Il prezzo è riferito al business come se non avesse né cassa né debito: equity value = EV − debito netto, rettificato per il circolante rispetto al peg.') },
      { id: 'fc-ma-loi-3', topic: 'binding-offer', front: t('Three things that make a binding offer "binding" in practice?', 'Tre elementi che rendono un’offerta davvero "vincolante"?'), back: t('Firm price, SPA mark-up ready to sign, committed financing (equity and debt commitment letters) with internal approvals obtained.', 'Prezzo fermo, mark-up dello SPA pronto per la firma, finanziamento impegnato (equity e debt commitment letter) con approvazioni interne ottenute.') },
      { id: 'fc-ma-loi-4', topic: 'loi', front: t('Art. 1337 c.c. in M&A negotiations?', 'Art. 1337 c.c. nelle trattative M&A?'), back: t('Parties must negotiate in good faith; unjustified breaking off can create pre-contractual liability even under a non-binding LOI.', 'Le parti devono comportarsi secondo buona fede; un recesso ingiustificato può generare responsabilità precontrattuale anche con una LOI non vincolante.') }
    ],
    sources: [{ label: 'Codice Civile, art. 1337 (trattative e responsabilità precontrattuale)', url: 'https://www.normattiva.it/' }]
  },

  /* ================================================================== */
  /* M2 — ma-due-diligence                                               */
  /* ================================================================== */
  {
    id: 'ma-due-diligence',
    academyId: 'ma',
    moduleId: 'M2',
    mode: 'deep',
    minutes: 13,
    difficulty: 2,
    reviewed: '2026-10',
    objective: t(
      'Explain the due diligence workstreams, vendor due diligence and quality of earnings, and how analysts run data rooms and Q&A.',
      'Spiegare i filoni di due diligence, la vendor due diligence e la quality of earnings, e come gli analisti gestiscono data room e Q&A.'
    ),
    screens: [
      {
        type: 'intuition',
        title: t('Trust, but verify', 'Fidarsi, ma verificare'),
        body: t(
          'The CIM is a **sales document**. Before committing hundreds of millions, a buyer needs to check that the business is what the seller says it is — and find anything that should lower the price or be covered in the SPA.\n\n**Due diligence** answers three questions:\n\n- Are the **earnings** real and sustainable?\n- What **liabilities** or risks are hidden?\n- Does the **plan** hold up against the market?\n\nEvery finding ends up either in the **price**, in the **SPA** (warranties, indemnities) or as a reason to **walk away**.',
          'L’info memo è un **documento di vendita**. Prima di impegnare centinaia di milioni, l’acquirente deve verificare che il business sia ciò che il venditore descrive — e trovare tutto ciò che dovrebbe ridurre il prezzo o essere coperto nello SPA.\n\nLa **due diligence** risponde a tre domande:\n\n- Gli **utili** sono reali e sostenibili?\n- Quali **passività** o rischi sono nascosti?\n- Il **piano** regge rispetto al mercato?\n\nOgni rilievo finisce nel **prezzo**, nello **SPA** (garanzie, indennizzi) o diventa un motivo per **ritirarsi**.'
        )
      },
      {
        type: 'technical',
        title: t('Workstreams and who runs them', 'Filoni e chi li gestisce'),
        body: t('Specialists do the diligence; the bank coordinates and translates findings into value.', 'Gli specialisti fanno la due diligence; la banca coordina e traduce i rilievi in valore.'),
        table: {
          headers: [t('Workstream', 'Filone'), t('Typical provider', 'Chi la svolge'), t('Key questions', 'Domande chiave')],
          rows: [
            [t('Financial (incl. QoE)', 'Finanziaria (incl. QoE)'), t('Big4 transaction services', 'Transaction services delle Big4'), t('Adjusted EBITDA, net debt and debt-like items, normal NWC', 'EBITDA rettificato, debito netto e debt-like items, circolante normalizzato')],
            [t('Tax', 'Fiscale'), t('Big4 / tax advisors', 'Big4 / consulenti fiscali'), t('Open years, disputes, structuring risks', 'Annualità aperte, contenziosi, rischi di strutturazione')],
            [t('Legal', 'Legale'), t('Law firms', 'Studi legali'), t('Contracts, change of control, litigation, permits, IP', 'Contratti, change of control, contenziosi, autorizzazioni, IP')],
            [t('Commercial', 'Commerciale'), t('Strategy consultants', 'Società di consulenza strategica'), t('Market size and growth, positioning, plan achievability', 'Dimensione e crescita del mercato, posizionamento, realizzabilità del piano')],
            [t('Other', 'Altro'), t('Specialists', 'Specialisti'), t('IT/cyber, HR and pensions, environmental, ESG, insurance', 'IT/cyber, HR e previdenza, ambientale, ESG, assicurazioni')]
          ]
        }
      },
      {
        type: 'technical',
        title: t('Vendor due diligence (VDD)', 'Vendor due diligence (VDD)'),
        body: t(
          'In auctions the **seller** often commissions due diligence reports itself — financial, tax, sometimes legal and commercial — before launch.\n\n- Bidders receive the **VDD reports** in phase 2 (sometimes a summary earlier).\n- The winning buyer and its lenders get **reliance** on the reports (via reliance letters), so they can use them as if they had commissioned them.\n- Benefits: faster process, comparable bids, fewer disruptive questions to management, issues found and fixed (or explained) **before** buyers see them.\n\nBuyers usually still run **confirmatory** diligence on top.',
          'Nelle aste il **venditore** commissiona spesso direttamente i report di due diligence — finanziaria, fiscale, talvolta legale e commerciale — prima del lancio.\n\n- Gli offerenti ricevono i **report di VDD** in fase 2 (a volte una sintesi prima).\n- L’acquirente vincitore e le sue banche ottengono la **reliance** sui report (tramite reliance letter), potendoli usare come se li avessero commissionati loro.\n- Vantaggi: processo più rapido, offerte confrontabili, meno domande al management, problemi individuati e risolti (o spiegati) **prima** che li vedano gli acquirenti.\n\nGli acquirenti svolgono comunque di solito una due diligence **confirmatoria**.'
        )
      },
      {
        type: 'formula',
        formulas: [
          {
            name: t('Quality of earnings: adjusted EBITDA', 'Quality of earnings: EBITDA rettificato'),
            expr: 'Adjusted EBITDA = Reported EBITDA + Non-recurring costs − Non-recurring income ± Normalisations',
            vars: [{ sym: 'Normalisations', desc: t('E.g. owner salaries at market level, related-party pricing, run-rate of contracts won', 'Es. compensi dei soci a valori di mercato, prezzi con parti correlate, run-rate di contratti acquisiti') }]
          },
          {
            name: t('Valuation impact of a QoE adjustment', 'Impatto valutativo di una rettifica QoE'),
            expr: 'ΔEV = ΔAdjusted EBITDA × EV/EBITDA multiple'
          }
        ],
        note: t(
          'Debt-like items found in diligence (e.g. unpaid bonuses, overdue payables, provisions, in Italy often the TFR) reduce equity value euro for euro.',
          'I debt-like items emersi in due diligence (es. bonus non pagati, debiti scaduti, fondi rischi, in Italia spesso il TFR) riducono l’equity value euro per euro.'
        )
      },
      {
        type: 'example',
        title: t('QoE on TargetCo', 'QoE su TargetCo'),
        body: t(
          'Management presents reported EBITDA of €40m. The buyer’s financial due diligence finds the following. The deal is priced at 9.0x EBITDA.',
          'Il management presenta un EBITDA contabile di €40m. La due diligence finanziaria dell’acquirente rileva quanto segue. Il deal è prezzato a 9,0x EBITDA.'
        ),
        table: {
          headers: [t('€m', '€m'), t('Adjustment', 'Rettifica'), t('EBITDA', 'EBITDA')],
          rows: [
            [t('Reported EBITDA', 'EBITDA contabile'), '—', '40.0'],
            [t('One-off restructuring costs', 'Costi di ristrutturazione non ricorrenti'), '+3.0', '43.0'],
            [t('Owner’s salary below market level', 'Compenso del socio sotto il valore di mercato'), '−1.5', '41.5'],
            [t('One-off gain on asset sale booked in EBITDA', 'Plusvalenza non ricorrente inclusa nell’EBITDA'), '−2.5', '39.0'],
            [t('Adjusted EBITDA', 'EBITDA rettificato'), '−1.0 net', '39.0'],
            [t('EV impact at 9.0x', 'Impatto sull’EV a 9,0x'), '−1.0 × 9.0', '−9.0']
          ],
          totalRows: [4]
        }
      },
      {
        type: 'technical',
        title: t('Running the data room and Q&A', 'Gestire data room e Q&A'),
        body: t(
          'On the **sell side**, analysts often own the virtual data room:\n\n- build the **index** (1. Corporate, 2. Financial, 3. Tax, 4. Legal, 5. HR …) and upload documents with management;\n- set **permissions** by bidder (e.g. clean-team only folders for competitively sensitive data);\n- monitor **access reports**;\n- run the **Q&A log**: every bidder question with ID, category, priority, owner at the company, draft answer, status and date released.\n\nOn the **buy side**, analysts read the data room, track open points, and update the model as findings arrive.',
          'Sul **sell side** gli analisti gestiscono spesso la virtual data room:\n\n- costruiscono l’**indice** (1. Societario, 2. Finanziario, 3. Fiscale, 4. Legale, 5. HR …) e caricano i documenti con il management;\n- impostano i **permessi** per offerente (es. cartelle riservate al clean team per dati sensibili sotto il profilo concorrenziale);\n- monitorano i **report di accesso**;\n- gestiscono il **Q&A log**: ogni domanda con ID, categoria, priorità, referente in azienda, bozza di risposta, stato e data di rilascio.\n\nSul **buy side** gli analisti leggono la data room, tracciano i punti aperti e aggiornano il modello man mano che arrivano i rilievi.'
        )
      },
      {
        type: 'realworld',
        title: t('Where diligence findings land', 'Dove finiscono i rilievi di due diligence'),
        body: t(
          '- **Price**: lower adjusted EBITDA or extra debt-like items → lower offer.\n- **SPA**: a known tax dispute → **specific indemnity**; a key customer contract with a change-of-control clause → **condition precedent** (customer consent) or price protection.\n- **W&I insurance**: insurers exclude known issues, so diligence quality directly affects coverage.\n- **Integration planning**: IT systems, HR, contracts to renegotiate.\n- **Walk away**: fraud, unfixable regulatory problems, or a plan the market cannot support.',
          '- **Prezzo**: EBITDA rettificato più basso o debt-like items aggiuntivi → offerta più bassa.\n- **SPA**: un contenzioso fiscale noto → **indennizzo specifico**; un contratto con un cliente chiave con clausola di change of control → **condizione sospensiva** (consenso del cliente) o tutela sul prezzo.\n- **Polizza W&I**: gli assicuratori escludono i rischi noti, quindi la qualità della due diligence incide direttamente sulla copertura.\n- **Piano di integrazione**: sistemi IT, HR, contratti da rinegoziare.\n- **Ritirarsi**: frodi, problemi regolamentari insanabili o un piano che il mercato non sostiene.'
        )
      },
      { type: 'exercise', questionId: 'ma-dd-q1' },
      { type: 'exercise', questionId: 'ma-dd-q2' },
      { type: 'exercise', questionId: 'ma-dd-q3' },
      {
        type: 'interview',
        question: t('What is a quality of earnings analysis and why does it matter?', 'Che cos’è un’analisi di quality of earnings e perché è importante?'),
        answer: t(
          'It is the financial due diligence work that tests whether reported EBITDA is a sustainable base for valuation. It strips out non-recurring items — restructuring costs, one-off gains — and normalises things like owner compensation or related-party pricing, giving an adjusted EBITDA. It matters because the deal is priced on a multiple of that number: a €1m reduction at 9x is €9m of value. QoE also identifies net debt and debt-like items and the normal level of working capital, which drive the equity bridge.',
          'È il lavoro di due diligence finanziaria che verifica se l’EBITDA contabile è una base sostenibile per la valutazione. Elimina le componenti non ricorrenti — costi di ristrutturazione, plusvalenze — e normalizza voci come i compensi dei soci o i prezzi con parti correlate, arrivando a un EBITDA rettificato. Conta perché il deal si prezza su un multiplo di quel numero: €1m in meno a 9x sono €9m di valore. La QoE individua anche debito netto, debt-like items e livello normale di circolante, che guidano il passaggio da EV a equity.'
        )
      },
      {
        type: 'mistakes',
        items: [
          t('Treating every "one-off" management adds back as genuinely non-recurring. Recurring "one-offs" are operating costs.', 'Considerare davvero non ricorrente ogni "one-off" aggiunto dal management. I "one-off" che si ripetono sono costi operativi.'),
          t('Forgetting that an EBITDA adjustment is multiplied by the valuation multiple, while a debt-like item reduces value only once.', 'Dimenticare che una rettifica di EBITDA si moltiplica per il multiplo, mentre un debt-like item riduce il valore una sola volta.'),
          t('Assuming VDD removes the need for buyer diligence. Buyers still run confirmatory work and negotiate reliance.', 'Pensare che la VDD elimini la due diligence dell’acquirente. L’acquirente fa comunque lavoro confirmatorio e negozia la reliance.')
        ]
      },
      {
        type: 'summary',
        items: [
          t('Workstreams: financial (QoE), tax, legal, commercial, plus IT, HR, ESG, environmental.', 'Filoni: finanziario (QoE), fiscale, legale, commerciale, più IT, HR, ESG, ambientale.'),
          t('VDD: seller-commissioned reports with reliance for the winning buyer and lenders.', 'VDD: report commissionati dal venditore con reliance per acquirente vincitore e banche.'),
          t('QoE adjustments × multiple = value impact; debt-like items hit equity directly.', 'Rettifiche QoE × multiplo = impatto sul valore; i debt-like items colpiscono direttamente l’equity.'),
          t('Analysts run the data room index, permissions, access reports and Q&A log.', 'Gli analisti gestiscono indice, permessi, report di accesso e Q&A log della data room.')
        ]
      }
    ],
    questions: [
      {
        id: 'ma-dd-q1',
        kind: 'numeric',
        topic: 'quality-of-earnings',
        difficulty: 2,
        objective: t('Compute adjusted EBITDA from QoE findings.', 'Calcolare l’EBITDA rettificato dai rilievi QoE.'),
        prompt: t(
          'Reported EBITDA is €25m. Diligence finds: €2.0m one-off legal settlement cost (expensed), €0.8m rental income from a property that will not be transferred, and related-party purchases priced €0.5m below market. What is adjusted EBITDA (€m)?',
          'L’EBITDA contabile è €25m. La due diligence rileva: €2,0m di costo non ricorrente per una transazione legale (spesato), €0,8m di affitti attivi da un immobile che non sarà trasferito, e acquisti da parti correlate a prezzi inferiori di €0,5m al mercato. Qual è l’EBITDA rettificato (€m)?'
        ),
        answer: 25.7,
        unit: '€m',
        tolerance: { abs: 0.05 },
        verify: { fn: 'sum', args: [25, 2, -0.8, -0.5] },
        explanation: t(
          '25 + 2.0 (add back one-off cost) − 0.8 (income leaving with the property) − 0.5 (purchases will cost more at market prices) = €25.7m.',
          '25 + 2,0 (si riprende il costo non ricorrente) − 0,8 (ricavo che esce con l’immobile) − 0,5 (gli acquisti costeranno di più a prezzi di mercato) = €25,7m.'
        )
      },
      {
        id: 'ma-dd-q2',
        kind: 'numeric',
        topic: 'quality-of-earnings',
        difficulty: 2,
        objective: t('Translate an EBITDA adjustment into enterprise value.', 'Tradurre una rettifica di EBITDA in enterprise value.'),
        prompt: t(
          'Diligence reduces a target’s adjusted EBITDA by €1.2m. The bid was based on 8.5x EBITDA. By how much should the EV offer fall (€m)?',
          'La due diligence riduce l’EBITDA rettificato di un target di €1,2m. L’offerta si basava su 8,5x EBITDA. Di quanto dovrebbe scendere l’EV offerto (€m)?'
        ),
        answer: 10.2,
        unit: '€m',
        tolerance: { abs: 0.05 },
        verify: { fn: 'product', args: [1.2, 8.5] },
        explanation: t(
          'ΔEV = 1.2 × 8.5 = €10.2m. The adjustment is recurring, so it is capitalised at the multiple — unlike a one-off debt-like item, which reduces value only once.',
          'ΔEV = 1,2 × 8,5 = €10,2m. La rettifica è ricorrente, quindi si capitalizza al multiplo — a differenza di un debt-like item una tantum, che riduce il valore una sola volta.'
        )
      },
      {
        id: 'ma-dd-q3',
        kind: 'mcq',
        topic: 'due-diligence',
        difficulty: 2,
        objective: t('Explain vendor due diligence.', 'Spiegare la vendor due diligence.'),
        prompt: t('What is the main point of reliance letters on VDD reports?', 'Qual è lo scopo principale delle reliance letter sui report di VDD?'),
        choices: [
          t('They allow the seller to avoid giving any warranties in the SPA', 'Permettono al venditore di non rilasciare alcuna garanzia nello SPA'),
          t('They let the winning buyer and its lenders rely on the reports as if they had commissioned them', 'Consentono all’acquirente vincitore e alle sue banche di fare affidamento sui report come se li avessero commissionati'),
          t('They make the indicative offers binding', 'Rendono vincolanti le offerte indicative'),
          t('They replace the need for regulatory approvals', 'Sostituiscono le autorizzazioni regolamentari')
        ],
        correct: 1,
        explanation: t(
          'Reliance gives the buyer and lenders a direct relationship with the VDD provider. It does not replace SPA warranties, offer terms or regulatory approvals.',
          'La reliance crea un rapporto diretto tra acquirente/banche e il fornitore della VDD. Non sostituisce le garanzie dello SPA, i termini delle offerte o le autorizzazioni.'
        )
      },
      {
        id: 'ma-dd-q4',
        kind: 'multi',
        topic: 'due-diligence',
        difficulty: 3,
        objective: t('Identify typical debt-like items.', 'Riconoscere i debt-like items tipici.'),
        prompt: t('Which items would a buyer typically argue are debt-like and deduct from equity value? Select all that apply.', 'Quali voci l’acquirente sosterrebbe tipicamente essere debt-like, da dedurre dall’equity value? Seleziona tutte le risposte corrette.'),
        choices: [
          t('Dividends declared but not yet paid', 'Dividendi deliberati e non ancora pagati'),
          t('Trade payables within normal terms', 'Debiti commerciali entro i termini normali'),
          t('Deferred consideration owed for a past acquisition', 'Corrispettivo differito dovuto per una precedente acquisizione'),
          t('Accrued but unpaid bonuses for last year', 'Bonus maturati e non pagati relativi all’anno precedente'),
          t('Employee severance indemnity liability (TFR) in an Italian target', 'Fondo TFR in un target italiano')
        ],
        correct: [0, 2, 3, 4],
        explanation: t(
          'Declared dividends, deferred consideration, unpaid prior-year bonuses and (commonly in Italian deals) the TFR are cash obligations not funded by normal working capital, so buyers treat them as debt-like. Trade payables within normal terms are part of NWC and captured by the peg.',
          'Dividendi deliberati, corrispettivi differiti, bonus non pagati dell’anno precedente e (di frequente nei deal italiani) il TFR sono obbligazioni di cassa non coperte dal circolante normale, quindi l’acquirente le tratta come debt-like. I debiti commerciali entro i termini fanno parte del circolante e sono catturati dal peg.'
        )
      },
      {
        id: 'ma-dd-q5',
        kind: 'mcq',
        topic: 'due-diligence',
        difficulty: 1,
        objective: t('Know what an analyst does with the Q&A log.', 'Sapere cosa fa l’analista con il Q&A log.'),
        prompt: t('On a sell-side deal, what is the analyst’s main role on the Q&A log?', 'In un deal sell-side, qual è il ruolo principale dell’analista sul Q&A log?'),
        choices: [
          t('Answering legal questions personally on behalf of the company', 'Rispondere personalmente alle domande legali per conto della società'),
          t('Tracking every bidder question, routing it to the right owner, chasing answers and releasing approved responses', 'Tracciare ogni domanda degli offerenti, assegnarla al referente corretto, sollecitare le risposte e rilasciare quelle approvate'),
          t('Deciding which bidders win the auction', 'Decidere quali offerenti vincono l’asta'),
          t('Signing the NDA on behalf of bidders', 'Firmare l’NDA per conto degli offerenti')
        ],
        correct: 1,
        explanation: t(
          'The analyst coordinates: logs, routes, chases and releases answers (after management and counsel approve). Substantive answers come from the company and its advisors; the client decides the winner.',
          'L’analista coordina: registra, assegna, sollecita e rilascia le risposte (dopo l’approvazione di management e legali). Le risposte di merito vengono dalla società e dai suoi advisor; il vincitore lo decide il cliente.'
        )
      }
    ],
    flashcards: [
      { id: 'fc-ma-dd-1', topic: 'due-diligence', front: t('Four core due diligence workstreams?', 'I quattro filoni principali di due diligence?'), back: t('Financial (incl. QoE), tax, legal, commercial — plus IT, HR, ESG, environmental as needed.', 'Finanziario (incl. QoE), fiscale, legale, commerciale — più IT, HR, ESG, ambientale se necessario.') },
      { id: 'fc-ma-dd-2', topic: 'quality-of-earnings', front: t('What does a QoE report deliver?', 'Cosa produce un report di QoE?'), back: t('Adjusted (sustainable) EBITDA, net debt and debt-like items, and normalised working capital.', 'EBITDA rettificato (sostenibile), debito netto e debt-like items, circolante normalizzato.') },
      { id: 'fc-ma-dd-3', topic: 'due-diligence', front: t('What is VDD?', 'Che cos’è la VDD?'), back: t('Vendor due diligence: reports commissioned by the seller before launch and shared with bidders, with reliance for the winner and its lenders.', 'Vendor due diligence: report commissionati dal venditore prima del lancio e condivisi con gli offerenti, con reliance per il vincitore e le sue banche.') },
      { id: 'fc-ma-dd-4', topic: 'due-diligence', front: t('What is a clean team?', 'Che cos’è un clean team?'), back: t('A restricted group (often external advisors) allowed to see competitively sensitive data when the bidder is a competitor, to limit antitrust ("gun-jumping"/information exchange) risk.', 'Un gruppo ristretto (spesso advisor esterni) autorizzato a vedere dati sensibili quando l’offerente è un concorrente, per limitare i rischi antitrust (scambio di informazioni / gun-jumping).') }
    ]
  },
  /* ================================================================== */
  /* M2 — ma-signing-closing                                             */
  /* ================================================================== */
  {
    id: 'ma-signing-closing',
    academyId: 'ma',
    moduleId: 'M2',
    mode: 'deep',
    minutes: 15,
    difficulty: 2,
    reviewed: '2026-10',
    objective: t(
      'Explain the key SPA terms, why there is a gap between signing and closing, the regulatory approvals involved, and how the closing funds flow works.',
      'Spiegare le clausole chiave dello SPA, perché esiste un intervallo tra signing e closing, le autorizzazioni necessarie e come funziona il funds flow al closing.'
    ),
    screens: [
      {
        type: 'intuition',
        title: t('Signing is the promise, closing is the handover', 'Il signing è la promessa, il closing è il passaggio di consegne'),
        body: t(
          'At **signing**, buyer and seller sign the **SPA** (share purchase agreement): both are legally committed, subject to agreed conditions.\n\nAt **closing**, the shares are transferred and the money moves.\n\nWhy not do both on the same day? Because some things can only happen **after** a binding deal exists: **antitrust and foreign-investment approvals**, third-party consents, financing drawdown. The weeks or months in between are where deals can still go wrong — and where the SPA decides who bears the risk.',
          'Al **signing** acquirente e venditore firmano lo **SPA** (contratto di compravendita di partecipazioni): entrambi sono vincolati, salvo le condizioni concordate.\n\nAl **closing** le azioni vengono trasferite e il denaro passa di mano.\n\nPerché non fare tutto lo stesso giorno? Perché alcune cose possono avvenire solo **dopo** che esiste un accordo vincolante: **autorizzazioni antitrust e sugli investimenti esteri**, consensi di terzi, erogazione del finanziamento. Le settimane o i mesi nel mezzo sono il momento in cui un deal può ancora saltare — e lo SPA decide chi sopporta il rischio.'
        )
      },
      {
        type: 'technical',
        title: t('SPA: the terms that get negotiated hardest', 'SPA: le clausole più negoziate'),
        body: t(
          '- **Price and mechanism**: locked box or completion accounts; escrow or deferred payments; earn-outs.\n- **Representations & warranties (R&W)**: statements about the business — fundamental (title to shares, capacity) and business (accounts, contracts, tax, compliance, litigation). The seller qualifies them in a **disclosure letter**.\n- **Indemnities**: euro-for-euro protection for specific known risks (e.g. a tax dispute found in diligence).\n- **Limitations**: de minimis, basket/threshold, cap (often a % of price), time limits for claims.\n- **Conditions precedent (CPs)** and **interim covenants**: run the business in the ordinary course until closing.\n- **MAC/MAE clause** and **termination rights**.',
          '- **Prezzo e meccanismo**: locked box o completion accounts; escrow o pagamenti differiti; earn-out.\n- **Dichiarazioni e garanzie (R&W)**: affermazioni sul business — fondamentali (titolarità delle azioni, capacità) e di business (bilanci, contratti, fisco, compliance, contenziosi). Il venditore le qualifica con una **disclosure letter**.\n- **Indennizzi specifici**: tutela euro per euro per rischi noti (es. un contenzioso fiscale emerso in due diligence).\n- **Limitazioni**: de minimis, franchigia (basket), tetto massimo (cap, spesso in % del prezzo), termini per i reclami.\n- **Condizioni sospensive (CP)** e **interim covenant**: gestione ordinaria del business fino al closing.\n- **Clausola MAC/MAE** e **diritti di recesso**.'
        )
      },
      {
        type: 'technical',
        title: t('Regulatory approvals: why the gap can be long', 'Autorizzazioni: perché l’intervallo può essere lungo'),
        body: t(
          '- **EU Merger Regulation** (Reg. 139/2004): EU-dimension deals (e.g. combined worldwide turnover > €5bn and at least two parties each > €250m in the EU) are notified to the European Commission. **Phase I: 25 working days; Phase II: 90 working days** (extendable). Closing before clearance is prohibited (**gun-jumping**).\n- **Italy**: AGCM merger control (L. 287/1990) below EU thresholds; **Golden Power** screening (D.L. 21/2012) for strategic sectors and foreign investors.\n- **US**: HSR Act filing, initial **30-day** waiting period (15 for cash tender offers).\n- **Sector regulators**: e.g. ECB/Bank of Italy for qualifying holdings in banks, IVASS for insurers.\n\nThe SPA allocates antitrust risk: efforts clauses, remedies the buyer must accept, long-stop date, sometimes a **reverse break fee**.',
          '- **Regolamento UE sulle concentrazioni** (Reg. 139/2004): le operazioni di dimensione UE (es. fatturato mondiale combinato > €5mld e almeno due parti con fatturato UE > €250m ciascuna) si notificano alla Commissione. **Fase I: 25 giorni lavorativi; Fase II: 90 giorni lavorativi** (prorogabili). Il closing prima dell’autorizzazione è vietato (**gun-jumping**).\n- **Italia**: controllo AGCM (L. 287/1990) sotto le soglie UE; **Golden Power** (D.L. 21/2012) per settori strategici e investitori esteri.\n- **USA**: notifica HSR, periodo di attesa iniziale di **30 giorni** (15 per le OPA in contanti).\n- **Autorità di settore**: es. BCE/Banca d’Italia per partecipazioni qualificate in banche, IVASS per le assicurazioni.\n\nLo SPA ripartisce il rischio antitrust: obblighi di best efforts, rimedi che l’acquirente deve accettare, long-stop date, talvolta una **reverse break fee**.'
        )
      },
      {
        type: 'formula',
        formulas: [
          {
            name: t('Equity purchase price at closing', 'Prezzo dell’equity al closing'),
            expr: 'Equity price = EV − Financial debt + Cash ± NWC and other adjustments'
          },
          {
            name: t('Cash wired to sellers at closing', 'Importo bonificato ai venditori al closing'),
            expr: 'Seller proceeds at closing = Equity price − Escrow / holdback − Any deferred consideration'
          }
        ],
        note: t(
          'The target’s existing debt is usually repaid at closing out of the purchase funds, paid directly to the lenders against a payoff letter.',
          'Il debito esistente del target è di solito rimborsato al closing con i fondi dell’acquisizione, pagati direttamente alle banche a fronte di una payoff letter.'
        )
      },
      {
        type: 'example',
        title: t('Funds flow memo for the sale of TargetCo', 'Funds flow memo per la vendita di TargetCo'),
        body: t(
          'EV €500m; target cash €20m; bank debt €140m (repaid at closing); 10% of the equity price held in escrow for 18 months against warranty claims.',
          'EV €500m; cassa del target €20m; debito bancario €140m (rimborsato al closing); il 10% del prezzo dell’equity resta in escrow per 18 mesi a garanzia di eventuali reclami.'
        ),
        table: {
          headers: [t('€m', '€m'), t('Calculation', 'Calcolo'), t('Amount', 'Importo')],
          rows: [
            [t('Enterprise value', 'Enterprise value'), '—', '500.0'],
            [t('Less bank debt', 'Meno debito bancario'), '—', '(140.0)'],
            [t('Plus cash', 'Più cassa'), '—', '20.0'],
            [t('Equity price', 'Prezzo dell’equity'), '500 − 140 + 20', '380.0'],
            [t('Wired to lenders (payoff)', 'Bonificato alle banche (rimborso)'), '—', '140.0'],
            [t('Into escrow', 'In escrow'), '10% × 380', '38.0'],
            [t('Wired to sellers at closing', 'Bonificato ai venditori al closing'), '380 − 38', '342.0']
          ],
          totalRows: [3, 6]
        }
      },
      {
        type: 'technical',
        title: t('W&I insurance, announcement and closing day', 'Polizza W&I, annuncio e giorno del closing'),
        body: t(
          '**W&I insurance** (warranty & indemnity): an insurer covers losses from breaches of warranties, usually under a **buy-side policy**. It lets sellers (especially PE funds) get a **clean exit** with a very low seller cap. Known issues and forward-looking statements are excluded.\n\n**Announcement**: for listed companies, inside information must be disclosed as soon as possible (EU Market Abuse Regulation, art. 17). Banks draft the press release, investor presentation and Q&A for the analyst call.\n\n**Closing**: CP satisfaction confirmed, closing deliverables (share transfer, resignations, payoff letters), funds flow executed, often to the minute.',
          '**Polizza W&I** (warranty & indemnity): un assicuratore copre le perdite da violazione delle garanzie, di solito con una **polizza buy-side**. Permette ai venditori (soprattutto fondi di PE) una **clean exit** con un cap a carico del venditore molto basso. Sono esclusi i rischi noti e le dichiarazioni prospettiche.\n\n**Annuncio**: per le quotate, l’informazione privilegiata va comunicata il prima possibile (Regolamento UE sugli abusi di mercato, art. 17). Le banche preparano comunicato stampa, presentazione agli investitori e Q&A per la call con gli analisti.\n\n**Closing**: conferma dell’avveramento delle CP, deliverable di closing (trasferimento delle azioni, dimissioni, payoff letter), esecuzione del funds flow, spesso al minuto.'
        )
      },
      {
        type: 'realworld',
        title: t('When a MAC actually worked', 'Quando una MAC ha funzionato davvero'),
        body: t(
          'MAC clauses are notoriously hard to invoke. In **Akorn v. Fresenius Kabi (Delaware Court of Chancery, 2018)**, a court for the first time allowed a buyer to terminate a merger agreement because of a material adverse effect: after signing, Akorn suffered a dramatic and lasting collapse in performance and serious data-integrity compliance failures. The decision was affirmed by the Delaware Supreme Court.\n\nWhat analysts do here: track CPs in a **closing checklist**, prepare the **funds flow memo** with counsel, reconcile every wire, and draft announcement materials under tight confidentiality.',
          'Le clausole MAC sono notoriamente difficili da far valere. In **Akorn v. Fresenius Kabi (Delaware Court of Chancery, 2018)** un tribunale ha per la prima volta consentito a un acquirente di recedere da un accordo di fusione per un material adverse effect: dopo il signing Akorn aveva subito un crollo drastico e duraturo dei risultati e gravi violazioni sull’integrità dei dati regolatori. La decisione è stata confermata dalla Corte Suprema del Delaware.\n\nCosa fanno gli analisti: seguono le CP in una **closing checklist**, preparano con i legali il **funds flow memo**, riconciliano ogni bonifico e redigono i materiali di annuncio in condizioni di stretta riservatezza.'
        )
      },
      { type: 'exercise', questionId: 'ma-sc-q1' },
      { type: 'exercise', questionId: 'ma-sc-q2' },
      { type: 'exercise', questionId: 'ma-sc-q4' },
      {
        type: 'interview',
        question: t('Why is there a gap between signing and closing, and how does the SPA deal with it?', 'Perché c’è un intervallo tra signing e closing e come lo gestisce lo SPA?'),
        answer: t(
          'Because some conditions can only be satisfied once a binding agreement exists: antitrust and foreign-investment clearances, sector regulator approvals, key third-party consents, sometimes shareholder votes or financing. The SPA manages that period through conditions precedent with a long-stop date, interim covenants that require the seller to run the business in the ordinary course, a MAC clause and termination rights, and allocation of regulatory risk — efforts obligations, remedies the buyer must accept and sometimes a reverse break fee. The price mechanism — locked box or completion accounts — decides who bears the economic risk of the business in that window.',
          'Perché alcune condizioni si possono soddisfare solo dopo che esiste un accordo vincolante: autorizzazioni antitrust e golden power, autorizzazioni di settore, consensi di terzi chiave, talvolta voti assembleari o il finanziamento. Lo SPA gestisce quel periodo con condizioni sospensive e una long-stop date, interim covenant che obbligano il venditore a una gestione ordinaria, una clausola MAC e diritti di recesso, e la ripartizione del rischio regolamentare — obblighi di best efforts, rimedi che l’acquirente deve accettare e talvolta una reverse break fee. Il meccanismo di prezzo — locked box o completion accounts — decide chi sopporta il rischio economico del business in quella finestra.'
        )
      },
      {
        type: 'mistakes',
        items: [
          t('Thinking the buyer owns the target at signing. Ownership passes at closing.', 'Pensare che l’acquirente possieda il target dal signing. La proprietà passa al closing.'),
          t('Confusing warranties (statements, subject to limitations and disclosure) with indemnities (euro-for-euro cover of specific risks).', 'Confondere le garanzie (dichiarazioni, soggette a limitazioni e disclosure) con gli indennizzi specifici (copertura euro per euro di rischi determinati).'),
          t('Assuming a MAC clause lets the buyer walk away from any bad quarter. Courts set a very high bar.', 'Pensare che la clausola MAC consenta all’acquirente di ritirarsi per qualsiasi trimestre negativo. I tribunali fissano un’asticella molto alta.'),
          t('Closing a deal (or taking control of the target) before antitrust clearance — gun-jumping can be fined.', 'Eseguire il closing (o prendere il controllo del target) prima dell’autorizzazione antitrust — il gun-jumping è sanzionabile.')
        ]
      },
      {
        type: 'summary',
        items: [
          t('Signing = binding SPA; closing = shares transferred and funds paid.', 'Signing = SPA vincolante; closing = trasferimento delle azioni e pagamento.'),
          t('SPA core: price mechanism, R&W, indemnities, limitations, CPs, covenants, MAC, termination.', 'Cuore dello SPA: meccanismo di prezzo, R&W, indennizzi, limitazioni, CP, covenant, MAC, recesso.'),
          t('Approvals (EU/AGCM antitrust, Golden Power, HSR, sector regulators) drive the gap.', 'Le autorizzazioni (antitrust UE/AGCM, Golden Power, HSR, autorità di settore) determinano l’intervallo.'),
          t('Funds flow: EV − debt + cash = equity; less escrow = cash to sellers.', 'Funds flow: EV − debito + cassa = equity; meno escrow = incasso dei venditori.')
        ]
      }
    ],
    questions: [
      {
        id: 'ma-sc-q1',
        kind: 'numeric',
        topic: 'funds-flow',
        difficulty: 2,
        objective: t('Compute the cash paid to sellers at closing.', 'Calcolare l’importo pagato ai venditori al closing.'),
        prompt: t(
          'EV €750m; target bank debt €210m (repaid at closing); cash €35m; 5% of the equity price goes into escrow. How much is wired to the sellers at closing (€m)?',
          'EV €750m; debito bancario del target €210m (rimborsato al closing); cassa €35m; il 5% del prezzo dell’equity va in escrow. Quanto viene bonificato ai venditori al closing (€m)?'
        ),
        answer: 546.25,
        unit: '€m',
        tolerance: { abs: 0.1 },
        verify: { fn: 'sum', args: [750, -210, 35, -28.75] },
        steps: [
          t('Equity price = 750 − 210 + 35 = 575', 'Prezzo equity = 750 − 210 + 35 = 575'),
          t('Escrow = 5% × 575 = 28.75', 'Escrow = 5% × 575 = 28,75'),
          t('To sellers = 575 − 28.75 = 546.25', 'Ai venditori = 575 − 28,75 = 546,25')
        ],
        explanation: t(
          'Equity price 575, of which 28.75 is held in escrow, so €546.25m is wired at closing. The €210m goes directly to the lenders.',
          'Prezzo equity 575, di cui 28,75 trattenuti in escrow: al closing si bonificano €546,25m. I €210m vanno direttamente alle banche.'
        )
      },
      {
        id: 'ma-sc-q2',
        kind: 'mcq',
        topic: 'spa',
        difficulty: 2,
        objective: t('Choose between warranties and specific indemnities.', 'Scegliere tra garanzie e indennizzi specifici.'),
        prompt: t(
          'Diligence uncovers a €4m tax assessment that the target is contesting. How should the buyer best protect itself in the SPA?',
          'La due diligence rileva un accertamento fiscale da €4m che il target sta contestando. Come dovrebbe tutelarsi al meglio l’acquirente nello SPA?'
        ),
        choices: [
          t('Rely on the general tax warranty', 'Affidarsi alla garanzia fiscale generale'),
          t('Rely on W&I insurance', 'Affidarsi alla polizza W&I'),
          t('Negotiate a specific indemnity (and/or a price reduction or escrow)', 'Negoziare un indennizzo specifico (e/o una riduzione di prezzo o un escrow)'),
          t('Invoke the MAC clause', 'Invocare la clausola MAC')
        ],
        correct: 2,
        explanation: t(
          'A known, specific risk is covered by a specific indemnity (or price/escrow). The general warranty is likely qualified by disclosure, W&I policies exclude known issues, and a €4m tax claim is far from a MAC.',
          'Un rischio noto e specifico si copre con un indennizzo specifico (o prezzo/escrow). La garanzia generale sarà probabilmente qualificata dalla disclosure, la W&I esclude i rischi noti e un accertamento da €4m è lontanissimo da una MAC.'
        )
      },
      {
        id: 'ma-sc-q3',
        kind: 'multi',
        topic: 'spa',
        difficulty: 2,
        objective: t('Recognise typical conditions precedent.', 'Riconoscere le condizioni sospensive tipiche.'),
        prompt: t('Which are typical conditions precedent to closing? Select all that apply.', 'Quali sono condizioni sospensive tipiche del closing? Seleziona tutte le risposte corrette.'),
        choices: [
          t('Antitrust clearance', 'Autorizzazione antitrust'),
          t('Golden Power clearance (or no-veto) in Italy where applicable', 'Nulla osta Golden Power in Italia, ove applicabile'),
          t('Consent of a key customer under a change-of-control clause', 'Consenso di un cliente chiave in base a una clausola di change of control'),
          t('The buyer’s share price rising after announcement', 'L’aumento del prezzo delle azioni dell’acquirente dopo l’annuncio'),
          t('Signing of the engagement letter with the sell-side bank', 'La firma della lettera di incarico con la banca sell-side')
        ],
        correct: [0, 1, 2],
        explanation: t(
          'Regulatory clearances and key third-party consents are classic CPs. The buyer’s share price is not a condition, and the engagement letter was signed months earlier, between the seller and its bank.',
          'Le autorizzazioni regolamentari e i consensi di terzi chiave sono CP classiche. Il prezzo delle azioni dell’acquirente non è una condizione, e la lettera di incarico è stata firmata mesi prima, tra venditore e banca.'
        )
      },
      {
        id: 'ma-sc-q4',
        kind: 'order',
        topic: 'signing-closing',
        difficulty: 1,
        objective: t('Sequence events from signing to closing.', 'Ordinare gli eventi dal signing al closing.'),
        prompt: t('Put these events for an acquisition of a listed target’s subsidiary in order.', 'Metti in ordine questi eventi per l’acquisizione di una controllata di un gruppo quotato.'),
        items: [
          t('SPA signed', 'Firma dello SPA'),
          t('Public announcement and analyst call', 'Annuncio al mercato e call con gli analisti'),
          t('Antitrust and Golden Power filings submitted', 'Deposito delle notifiche antitrust e Golden Power'),
          t('Clearances received; CPs satisfied', 'Autorizzazioni ottenute; condizioni sospensive avverate'),
          t('Closing: shares transferred and funds flow executed', 'Closing: trasferimento delle azioni ed esecuzione del funds flow')
        ],
        explanation: t(
          'Signing triggers announcement (inside information) and filings; clearances satisfy the CPs; closing executes the transfer and payments.',
          'Il signing fa scattare l’annuncio (informazione privilegiata) e le notifiche; le autorizzazioni soddisfano le CP; il closing esegue trasferimento e pagamenti.'
        )
      },
      {
        id: 'ma-sc-q5',
        kind: 'mcq',
        topic: 'spa',
        difficulty: 2,
        objective: t('Explain the role of W&I insurance.', 'Spiegare il ruolo della polizza W&I.'),
        prompt: t('Why do private equity sellers in particular like W&I insurance?', 'Perché i venditori private equity in particolare apprezzano la polizza W&I?'),
        choices: [
          t('It covers known issues found in due diligence', 'Copre i rischi noti emersi in due diligence'),
          t('It lets them distribute proceeds to investors quickly with minimal post-closing liability', 'Permette di distribuire rapidamente i proventi agli investitori con responsabilità post-closing minima'),
          t('It guarantees antitrust clearance', 'Garantisce l’autorizzazione antitrust'),
          t('It replaces the need for an SPA', 'Sostituisce la necessità di uno SPA')
        ],
        correct: 1,
        explanation: t(
          'Funds must return capital to investors and cannot keep large contingent liabilities, so a buyer-side W&I policy with a low seller cap gives a "clean exit". It excludes known issues and does not touch regulatory approvals.',
          'I fondi devono restituire il capitale agli investitori e non possono mantenere grandi passività potenziali: una polizza W&I buy-side con cap basso per il venditore consente una "clean exit". Esclude i rischi noti e non riguarda le autorizzazioni.'
        )
      }
    ],
    flashcards: [
      { id: 'fc-ma-sc-1', topic: 'spa', front: t('Warranty vs indemnity?', 'Garanzia vs indennizzo specifico?'), back: t('Warranty: statement about the business; claims subject to disclosure and limitations. Indemnity: euro-for-euro cover for a specific identified risk.', 'Garanzia: dichiarazione sul business; reclami soggetti a disclosure e limitazioni. Indennizzo: copertura euro per euro di un rischio specifico individuato.') },
      { id: 'fc-ma-sc-2', topic: 'signing-closing', front: t('EUMR review periods?', 'Tempi di esame del Regolamento UE sulle concentrazioni?'), back: t('Phase I: 25 working days. Phase II: 90 working days (extendable). No closing before clearance.', 'Fase I: 25 giorni lavorativi. Fase II: 90 giorni lavorativi (prorogabili). Nessun closing prima dell’autorizzazione.') },
      { id: 'fc-ma-sc-3', topic: 'spa', front: t('What is a MAC/MAE clause?', 'Che cos’è una clausola MAC/MAE?'), back: t('Lets the buyer walk away if a material adverse change hits the target between signing and closing; courts apply a high bar (Akorn v. Fresenius, 2018).', 'Consente all’acquirente di recedere se un cambiamento negativo rilevante colpisce il target tra signing e closing; i tribunali applicano un’asticella alta (Akorn v. Fresenius, 2018).') },
      { id: 'fc-ma-sc-4', topic: 'funds-flow', front: t('What is a funds flow memo?', 'Che cos’è un funds flow memo?'), back: t('The closing-day schedule of every payment: sources (equity, debt) and uses (seller proceeds, debt payoff, escrow, fees), with amounts, accounts and timing.', 'Il prospetto di tutti i pagamenti al closing: fonti (equity, debito) e impieghi (incasso venditori, rimborso debito, escrow, fee), con importi, conti e tempistica.') },
      { id: 'fc-ma-sc-5', topic: 'signing-closing', front: t('Italian Golden Power: legal basis and purpose?', 'Golden Power: base normativa e finalità?'), back: t('D.L. 21/2012: government screening (with powers to veto or impose conditions) of transactions involving strategic assets and sectors.', 'D.L. 21/2012: controllo governativo (con poteri di veto o prescrizioni) sulle operazioni che riguardano asset e settori strategici.') }
    ],
    sources: [
      { label: 'Council Regulation (EC) No 139/2004 (EU Merger Regulation)', url: 'https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX:32004R0139' },
      { label: 'Regulation (EU) No 596/2014 (Market Abuse Regulation), art. 17', url: 'https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX:32014R0596' },
      { label: 'Decreto-legge 15 marzo 2012, n. 21 (Golden Power)', url: 'https://www.normattiva.it/' },
      { label: 'FTC — Premerger Notification Program (HSR Act)', url: 'https://www.ftc.gov/enforcement/premerger-notification-program' },
      { label: 'Akorn, Inc. v. Fresenius Kabi AG (Del. Ch. 2018), aff’d (Del. 2018)' }
    ]
  },

  /* ================================================================== */
  /* M2 — ma-buy-side                                                    */
  /* ================================================================== */
  {
    id: 'ma-buy-side',
    academyId: 'ma',
    moduleId: 'M2',
    mode: 'deep',
    minutes: 13,
    difficulty: 2,
    reviewed: '2026-10',
    objective: t(
      'Describe a buy-side mandate from target screening to signing, set a walk-away price, and explain bid strategy, financing certainty and fairness opinions.',
      'Descrivere un mandato buy-side dallo screening dei target al signing, fissare un prezzo massimo e spiegare strategia d’offerta, certezza del finanziamento e fairness opinion.'
    ),
    screens: [
      {
        type: 'intuition',
        title: t('Win the asset without overpaying', 'Vincere l’asset senza pagarlo troppo'),
        body: t(
          'On the sell side, the bank wants the highest price. On the **buy side**, the bank advises the acquirer — and the hardest job is often to stop the client **overpaying** in the heat of an auction.\n\nA buy-side adviser helps the client: find the right targets, value them, decide how much and how to bid, line up financing, coordinate diligence and negotiate the SPA. Its most valuable output is a **walk-away price** the board commits to before bidding.',
          'Sul sell side la banca vuole il prezzo più alto. Sul **buy side** assiste l’acquirente — e il compito più difficile è spesso evitare che il cliente **paghi troppo** nella foga di un’asta.\n\nUn advisor buy-side aiuta il cliente a: trovare i target giusti, valutarli, decidere quanto e come offrire, predisporre il finanziamento, coordinare la due diligence e negoziare lo SPA. L’output più prezioso è un **prezzo massimo (walk-away)** che il CdA fissa prima di presentare l’offerta.'
        )
      },
      {
        type: 'technical',
        title: t('Stages of a buy-side mandate', 'Le fasi di un mandato buy-side'),
        body: t(
          '- **Strategy and screening**: translate the client’s strategy into criteria; long list (often 50–100 names) → short list (5–10).\n- **Approach**: a bilateral approach to an owner not running a sale, or entry into an existing auction.\n- **Valuation**: standalone (DCF, comps, precedents) plus synergies; accretion/dilution for listed buyers.\n- **Bid strategy**: price, structure (cash/shares, earn-out), conditionality, timing, pre-emption, consortium partners.\n- **Financing**: with DCM/LevFin — bridge loans, bonds, equity; certainty of funds.\n- **Diligence and negotiation**: coordinate advisers, feed findings into price and SPA.\n- **Board approval**: often supported by a **fairness opinion**.',
          '- **Strategia e screening**: tradurre la strategia del cliente in criteri; long list (spesso 50–100 nomi) → short list (5–10).\n- **Approccio**: contatto bilaterale con un proprietario che non sta vendendo, o ingresso in un’asta in corso.\n- **Valutazione**: stand-alone (DCF, multipli, transazioni comparabili) più sinergie; accrescimento/diluizione per gli acquirenti quotati.\n- **Strategia d’offerta**: prezzo, struttura (contanti/azioni, earn-out), condizionalità, tempi, offerta preventiva, partner di consorzio.\n- **Finanziamento**: con DCM/LevFin — bridge loan, bond, aumento di capitale; certezza dei fondi.\n- **Due diligence e negoziazione**: coordinamento degli advisor, rilievi tradotti in prezzo e SPA.\n- **Approvazione del CdA**: spesso supportata da una **fairness opinion**.'
        )
      },
      {
        type: 'technical',
        title: t('Fairness opinions and certain funds', 'Fairness opinion e certezza dei fondi'),
        body: t(
          '**Fairness opinion**: a bank’s letter to the board stating that the price is **fair, from a financial point of view**, to the company or its shareholders, backed by valuation analyses. It is **not** a recommendation to do the deal and not a guarantee of value. Its use grew after **Smith v. Van Gorkom (Delaware, 1985)**, where directors were held liable for approving a sale without adequate information. Banks review it through an internal **fairness committee**.\n\n**Certain funds**: in public offers the bidder must show it can pay. In Italy, before an OPA is launched, the offeror must provide Consob with a guarantee of full payment (**garanzia di esatto adempimento**, under the TUF and Consob’s Regolamento Emittenti). In private auctions sellers ask for committed financing letters.',
          '**Fairness opinion**: lettera di una banca al CdA che attesta che il prezzo è **congruo dal punto di vista finanziario** per la società o i suoi azionisti, supportata da analisi valutative. **Non** è una raccomandazione a fare l’operazione né una garanzia di valore. Il suo uso è cresciuto dopo **Smith v. Van Gorkom (Delaware, 1985)**, in cui gli amministratori furono ritenuti responsabili per aver approvato una vendita senza informazioni adeguate. Le banche la sottopongono a un **fairness committee** interno.\n\n**Certezza dei fondi**: nelle offerte pubbliche l’offerente deve dimostrare di poter pagare. In Italia, prima dell’avvio di un’OPA, l’offerente deve fornire a Consob la **garanzia di esatto adempimento** (TUF e Regolamento Emittenti Consob). Nelle aste private i venditori chiedono lettere di finanziamento impegnato.'
        )
      },
      {
        type: 'formula',
        formulas: [
          {
            name: t('Walk-away (maximum) price', 'Prezzo massimo (walk-away)'),
            expr: 'Walk-away price = Standalone value + Share of PV synergies the buyer is willing to pay away',
            vars: [{ sym: 'Share paid away', desc: t('Rarely 100%: the buyer keeps part of the synergies to create value for its own shareholders', 'Raramente il 100%: l’acquirente trattiene parte delle sinergie per creare valore per i propri azionisti') }]
          },
          {
            name: t('Maximum premium implied', 'Premio massimo implicito'),
            expr: 'Max premium = Walk-away equity value ÷ Undisturbed market cap − 1'
          }
        ],
        note: t(
          'Set the walk-away before the auction starts — bid discipline is the buy-side adviser’s most important contribution.',
          'Il prezzo massimo va fissato prima dell’asta — la disciplina d’offerta è il contributo più importante dell’advisor buy-side.'
        )
      },
      {
        type: 'example',
        title: t('Screening and walk-away for AcquiCo', 'Screening e prezzo massimo per AcquiCo'),
        body: t(
          'AcquiCo wants a European packaging business with €50–150m EBITDA. The analyst screens 80 names down to 3 and scores them (1–5). For the top target, standalone equity value is €800m (= undisturbed market cap), PV synergies €300m, and the board will pay away at most 50% of synergies.',
          'AcquiCo cerca un’azienda europea di packaging con EBITDA di €50–150m. L’analista riduce 80 nomi a 3 e li valuta (1–5). Per il target principale il valore stand-alone dell’equity è €800m (= capitalizzazione indisturbata), il VA delle sinergie €300m e il CdA riconoscerà al massimo il 50% delle sinergie.'
        ),
        tables: [
          {
            caption: t('Short-list scoring (1–5)', 'Punteggi della short list (1–5)'),
            headers: [t('Target', 'Target'), t('Strategic fit', 'Fit strategico'), t('Synergies', 'Sinergie'), t('Availability', 'Disponibilità'), t('Antitrust risk (5 = low)', 'Rischio antitrust (5 = basso)'), t('Total', 'Totale')],
            rows: [
              ['Target A', '5', '4', '3', '4', '16'],
              ['Target B', '4', '5', '2', '2', '13'],
              ['Target C', '3', '3', '5', '5', '16']
            ]
          },
          {
            caption: t('Walk-away price for Target A (€m)', 'Prezzo massimo per Target A (€m)'),
            headers: [t('Item', 'Voce'), t('€m', '€m')],
            rows: [
              [t('Standalone equity value', 'Valore stand-alone dell’equity'), '800'],
              [t('+ 50% of PV synergies', '+ 50% del VA sinergie'), '150'],
              [t('Walk-away equity value', 'Prezzo massimo dell’equity'), '950'],
              [t('Maximum premium (950 ÷ 800 − 1)', 'Premio massimo (950 ÷ 800 − 1)'), '18.75%']
            ],
            totalRows: [2]
          }
        ]
      },
      {
        type: 'realworld',
        title: t('Buy-side work in practice', 'Il lavoro buy-side nella pratica'),
        body: t(
          '- Analysts build **screening databases** and target profiles, then the **valuation and accretion/dilution model** that the board will see.\n- They prepare **board materials**: rationale, valuation ranges, bid recommendation, financing plan, risks.\n- **Fees**: often a smaller retainer plus a success fee paid on completion; the bank may also earn financing fees if it underwrites the debt — a potential conflict boards must manage, sometimes by hiring a second adviser for the fairness opinion.\n- In Italian public offers, the **target’s** board must publish its assessment of the offer (comunicato dell’emittente, art. 103 TUF), often supported by its own advisers’ fairness opinions.',
          '- Gli analisti costruiscono **database di screening** e profili dei target, poi il **modello di valutazione e di accrescimento/diluizione** che vedrà il CdA.\n- Preparano i **materiali per il CdA**: logica, range di valutazione, raccomandazione d’offerta, piano di finanziamento, rischi.\n- **Fee**: spesso un retainer contenuto più una success fee al closing; la banca può guadagnare anche commissioni di finanziamento se sottoscrive il debito — un potenziale conflitto che il CdA deve gestire, talvolta nominando un secondo advisor per la fairness opinion.\n- Nelle OPA italiane il CdA del **target** deve pubblicare la propria valutazione dell’offerta (comunicato dell’emittente, art. 103 TUF), spesso supportata dalle fairness opinion dei propri advisor.'
        )
      },
      { type: 'exercise', questionId: 'ma-bs-q1' },
      { type: 'exercise', questionId: 'ma-bs-q2' },
      { type: 'exercise', questionId: 'ma-bs-q3' },
      {
        type: 'interview',
        question: t('How would you advise a client on how much to bid in a competitive auction?', 'Come consiglieresti a un cliente quanto offrire in un’asta competitiva?'),
        answer: t(
          'I would start from the standalone valuation — DCF cross-checked with comps and precedents — then add a realistic, phased synergy case net of integration costs. The walk-away price is standalone value plus only the share of synergies the client is willing to pay away, so its shareholders still capture value. Then I would think about the competition: who else is bidding, what a sponsor can pay given leverage, and what the seller values beyond price — certainty, speed, financing, a clean SPA. Often you win on deliverability rather than paying the highest headline price, and you must be ready to walk away.',
          'Partirei dalla valutazione stand-alone — DCF verificato con multipli e transazioni comparabili — e aggiungerei un synergy case realistico e graduale, al netto dei costi di integrazione. Il prezzo massimo è il valore stand-alone più la sola quota di sinergie che il cliente è disposto a riconoscere, così che i suoi azionisti catturino comunque valore. Poi considererei la concorrenza: chi altro offre, quanto può pagare uno sponsor data la leva, e cosa il venditore apprezza oltre al prezzo — certezza, rapidità, finanziamento, uno SPA pulito. Spesso si vince sulla realizzabilità più che con il prezzo più alto, e bisogna essere pronti a ritirarsi.'
        )
      },
      {
        type: 'mistakes',
        items: [
          t('Setting the walk-away price during the auction instead of before it.', 'Fissare il prezzo massimo durante l’asta invece che prima.'),
          t('Treating a fairness opinion as proof the deal is a good idea. It only says the price is fair from a financial point of view.', 'Considerare la fairness opinion una prova che il deal sia una buona idea. Dice solo che il prezzo è congruo dal punto di vista finanziario.'),
          t('Bidding without committed financing in a process where sellers prize certainty.', 'Presentare un’offerta senza finanziamento impegnato in un processo in cui il venditore privilegia la certezza.')
        ]
      },
      {
        type: 'summary',
        items: [
          t('Buy-side: screening → approach → valuation → bid strategy → financing → diligence → signing.', 'Buy-side: screening → approccio → valutazione → strategia d’offerta → finanziamento → due diligence → signing.'),
          t('Walk-away = standalone value + share of synergies paid away.', 'Prezzo massimo = valore stand-alone + quota di sinergie riconosciuta.'),
          t('Fairness opinion: price fair from a financial point of view — not a recommendation.', 'Fairness opinion: prezzo congruo dal punto di vista finanziario — non una raccomandazione.'),
          t('Certainty of funds is required in public offers and prized in auctions.', 'La certezza dei fondi è obbligatoria nelle offerte pubbliche e apprezzata nelle aste.')
        ]
      }
    ],
    questions: [
      {
        id: 'ma-bs-q1',
        kind: 'numeric',
        topic: 'bid-strategy',
        difficulty: 2,
        objective: t('Compute a walk-away price.', 'Calcolare un prezzo massimo.'),
        prompt: t(
          'Target standalone equity value is €1,200m. PV of synergies net of costs is €400m. The board will pay away at most 40% of synergies. What is the walk-away equity value (€m)?',
          'Il valore stand-alone dell’equity del target è €1.200m. Il VA delle sinergie al netto dei costi è €400m. Il CdA riconoscerà al massimo il 40% delle sinergie. Qual è il prezzo massimo dell’equity (€m)?'
        ),
        answer: 1360,
        unit: '€m',
        verify: { fn: 'sum', args: [1200, 160] },
        explanation: t(
          'Walk-away = 1,200 + 40% × 400 = 1,200 + 160 = €1,360m. Paying the full €1,600m would hand all synergy value to the seller.',
          'Prezzo massimo = 1.200 + 40% × 400 = 1.200 + 160 = €1.360m. Pagare l’intero €1.600m cederebbe al venditore tutto il valore delle sinergie.'
        )
      },
      {
        id: 'ma-bs-q2',
        kind: 'numeric',
        topic: 'bid-strategy',
        difficulty: 2,
        objective: t('Translate a walk-away price into a maximum premium.', 'Tradurre un prezzo massimo in premio massimo.'),
        prompt: t(
          'Continuing: the target’s undisturbed market cap equals its standalone value (€1,200m). What is the maximum premium the buyer can offer (%)?',
          'Proseguendo: la capitalizzazione indisturbata del target coincide con il valore stand-alone (€1.200m). Qual è il premio massimo che l’acquirente può offrire (%)?'
        ),
        answer: 13.33,
        unit: '%',
        tolerance: { abs: 0.05 },
        verify: { fn: 'ratio', args: [16000, 1200] },
        explanation: t(
          'Max premium = 1,360 ÷ 1,200 − 1 = 13.33%. If competitors are expected to bid a 25–30% premium, the client should be prepared to lose rather than overpay.',
          'Premio massimo = 1.360 ÷ 1.200 − 1 = 13,33%. Se ci si attende che i concorrenti offrano premi del 25–30%, il cliente deve essere pronto a perdere piuttosto che pagare troppo.'
        )
      },
      {
        id: 'ma-bs-q3',
        kind: 'mcq',
        topic: 'fairness-opinion',
        difficulty: 2,
        objective: t('Understand what a fairness opinion does and does not say.', 'Capire cosa dice e cosa non dice una fairness opinion.'),
        prompt: t('Which statement about a fairness opinion is correct?', 'Quale affermazione sulla fairness opinion è corretta?'),
        choices: [
          t('It recommends that shareholders accept the deal', 'Raccomanda agli azionisti di accettare l’operazione'),
          t('It states that the price is fair from a financial point of view, based on the bank’s analyses', 'Attesta che il prezzo è congruo dal punto di vista finanziario, sulla base delle analisi della banca'),
          t('It guarantees that the buyer will achieve the projected synergies', 'Garantisce che l’acquirente realizzerà le sinergie previste'),
          t('It replaces the board’s duty to evaluate the transaction', 'Sostituisce il dovere del CdA di valutare l’operazione')
        ],
        correct: 1,
        explanation: t(
          'A fairness opinion addresses only financial fairness of the price. It is not a recommendation, not a guarantee, and supports — rather than replaces — the directors’ own judgement.',
          'La fairness opinion riguarda solo la congruità finanziaria del prezzo. Non è una raccomandazione né una garanzia, e supporta — non sostituisce — la valutazione degli amministratori.'
        )
      },
      {
        id: 'ma-bs-q4',
        kind: 'multi',
        topic: 'target-screening',
        difficulty: 1,
        objective: t('Identify relevant target screening criteria.', 'Individuare criteri di screening rilevanti.'),
        prompt: t('Which criteria would a buy-side team typically use to screen targets? Select all that apply.', 'Quali criteri userebbe tipicamente un team buy-side per lo screening dei target? Seleziona tutte le risposte corrette.'),
        choices: [
          t('Size (revenue/EBITDA range) and affordability', 'Dimensione (range di ricavi/EBITDA) e sostenibilità del prezzo'),
          t('Strategic fit and synergy potential', 'Fit strategico e potenziale di sinergie'),
          t('Ownership and likelihood of being for sale', 'Assetto proprietario e probabilità che sia in vendita'),
          t('Antitrust overlap with the client', 'Sovrapposizioni antitrust con il cliente'),
          t('The target CEO’s personal social media following', 'Il seguito social personale dell’AD del target')
        ],
        correct: [0, 1, 2, 3],
        explanation: t(
          'Size, fit, availability and antitrust risk drive screening. A CEO’s social media following is not a screening criterion.',
          'Dimensione, fit, disponibilità e rischio antitrust guidano lo screening. Il seguito social dell’AD non è un criterio di screening.'
        )
      },
      {
        id: 'ma-bs-q5',
        kind: 'order',
        topic: 'bid-strategy',
        difficulty: 1,
        objective: t('Sequence a buy-side mandate.', 'Ordinare le fasi di un mandato buy-side.'),
        prompt: t('Put the stages of a buy-side mandate in order.', 'Metti in ordine le fasi di un mandato buy-side.'),
        items: [
          t('Define criteria and screen a long list of targets', 'Definire i criteri e fare lo screening di una long list'),
          t('Approach the preferred target or enter the auction', 'Contattare il target preferito o entrare nell’asta'),
          t('Value the target and set the walk-away price', 'Valutare il target e fissare il prezzo massimo'),
          t('Line up committed financing and submit the binding bid', 'Predisporre il finanziamento impegnato e presentare l’offerta vincolante'),
          t('Board approval (with fairness opinion) and signing', 'Approvazione del CdA (con fairness opinion) e signing')
        ],
        explanation: t(
          'Screening precedes approach; valuation and the walk-away are fixed before binding bids; financing must be committed by the binding bid; the board approves before signing.',
          'Lo screening precede l’approccio; valutazione e prezzo massimo si fissano prima delle offerte vincolanti; il finanziamento deve essere impegnato all’offerta vincolante; il CdA approva prima del signing.'
        )
      }
    ],
    flashcards: [
      { id: 'fc-ma-bs-1', topic: 'bid-strategy', front: t('Walk-away price formula?', 'Formula del prezzo massimo (walk-away)?'), back: t('Standalone value + share of PV synergies the buyer is willing to pay away.', 'Valore stand-alone + quota del VA delle sinergie che l’acquirente è disposto a riconoscere.') },
      { id: 'fc-ma-bs-2', topic: 'fairness-opinion', front: t('What does a fairness opinion state?', 'Cosa attesta una fairness opinion?'), back: t('That the consideration is fair, from a financial point of view, to the company/shareholders — not a recommendation or guarantee.', 'Che il corrispettivo è congruo dal punto di vista finanziario per la società/gli azionisti — non è una raccomandazione né una garanzia.') },
      { id: 'fc-ma-bs-3', topic: 'bid-strategy', front: t('Garanzia di esatto adempimento?', 'Che cos’è la garanzia di esatto adempimento?'), back: t('In Italian public offers, the guarantee the offeror provides under Consob rules that it can pay the full consideration — the Italian "cash confirmation".', 'Nelle offerte pubbliche italiane, la garanzia fornita dall’offerente secondo la disciplina Consob di poter pagare l’intero corrispettivo — la "cash confirmation" italiana.') },
      { id: 'fc-ma-bs-4', topic: 'fairness-opinion', front: t('Which case boosted the use of fairness opinions?', 'Quale caso ha diffuso l’uso delle fairness opinion?'), back: t('Smith v. Van Gorkom (Delaware Supreme Court, 1985): directors held liable for approving a sale without adequate information.', 'Smith v. Van Gorkom (Corte Suprema del Delaware, 1985): amministratori ritenuti responsabili per aver approvato una vendita senza informazioni adeguate.') }
    ],
    sources: [
      { label: 'Consob — Regolamento Emittenti (Delibera 11971/1999), offer rules', url: 'https://www.consob.it/' },
      { label: 'D.Lgs. 58/1998 (TUF), art. 103', url: 'https://www.normattiva.it/' },
      { label: 'Smith v. Van Gorkom, 488 A.2d 858 (Del. 1985)' }
    ]
  }
];
