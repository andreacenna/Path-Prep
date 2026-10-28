import type { L, Lesson } from '../types';

/**
 * Academy 4 (M&A) — Module M3 (Transaction Structuring) and Module M4 (Advanced M&A).
 */

const t = (en: string, it: string): L => ({ en, it });

const IFRS3 = { label: 'IFRS Foundation — IFRS 3 Business Combinations', url: 'https://www.ifrs.org/issued-standards/list-of-standards/ifrs-3-business-combinations/' };

export const lessons: Lesson[] = [
  /* ================================================================== */
  /* M3 — ma-consideration                                               */
  /* ================================================================== */
  {
    id: 'ma-consideration',
    academyId: 'ma',
    moduleId: 'M3',
    mode: 'deep',
    minutes: 12,
    difficulty: 2,
    reviewed: '2026-10',
    objective: t(
      'Compare cash, stock and mixed consideration, compute exchange ratios and ownership splits, and explain who bears price risk under fixed and floating ratios and collars.',
      'Confrontare corrispettivo in contanti, in azioni e misto, calcolare rapporti di cambio e quote di possesso, e spiegare chi sopporta il rischio di prezzo con rapporti fissi, variabili e collar.'
    ),
    screens: [
      {
        type: 'intuition',
        title: t('Paying with cash vs paying with yourself', 'Pagare in contanti o pagare con sé stessi'),
        body: t(
          'In a **cash** deal the seller walks away with a fixed amount and no further exposure: the buyer keeps all future upside and risk (including overpaying).\n\nIn a **stock** deal the target shareholders become shareholders of the combined company. They share the synergies — and the risk that the deal disappoints.\n\nSo the form of payment is not a detail: it decides **who bears the risk** after closing and how much control the buyer gives away.',
          'In un deal **in contanti** il venditore incassa un importo definito e non ha più esposizione: l’acquirente si tiene tutto l’upside e tutto il rischio (compreso quello di aver pagato troppo).\n\nIn un deal **in azioni** gli azionisti del target diventano azionisti della società combinata. Condividono le sinergie — e il rischio che l’operazione deluda.\n\nLa forma di pagamento non è un dettaglio: stabilisce **chi sopporta il rischio** dopo il closing e quanto controllo cede l’acquirente.'
        )
      },
      {
        type: 'technical',
        title: t('Three forms of consideration', 'Tre forme di corrispettivo'),
        body: t(
          '- **Cash**: funded from balance-sheet cash, new debt or a rights issue. Certain value for the seller; typically a taxable event for the seller.\n- **Stock**: the buyer issues new shares at an **exchange ratio** (acquirer shares per target share). Preserves buyer cash and debt capacity, but dilutes existing owners.\n- **Mixed**: part cash, part stock (sometimes with a seller election, subject to proration). Balances leverage, dilution and seller preferences.\n\nBuyers lean towards stock when their shares look richly valued or leverage is already high; towards cash when they are confident in the synergies and want to keep them.',
          '- **Contanti**: finanziati con la cassa, nuovo debito o un aumento di capitale. Valore certo per il venditore; di norma evento fiscalmente rilevante per chi vende.\n- **Azioni**: l’acquirente emette nuove azioni secondo un **rapporto di cambio** (azioni dell’acquirente per ogni azione del target). Preserva cassa e capacità di indebitamento, ma diluisce i soci esistenti.\n- **Misto**: in parte contanti, in parte azioni (a volte con opzione di scelta per il venditore, soggetta a riparto). Bilancia leva, diluizione e preferenze del venditore.\n\nL’acquirente preferisce le azioni quando i propri titoli sembrano cari o la leva è già alta; i contanti quando crede nelle sinergie e vuole tenersele.'
        )
      },
      {
        type: 'formula',
        formulas: [
          {
            name: t('Exchange ratio', 'Rapporto di cambio'),
            expr: 'ER = Offer price per target share / Acquirer share price',
            vars: [{ sym: 'ER', desc: t('Acquirer shares delivered per target share', 'Azioni dell’acquirente consegnate per ogni azione del target') }]
          },
          {
            name: t('New shares issued', 'Nuove azioni emesse'),
            expr: 'New shares = ER × Target diluted shares'
          },
          {
            name: t('Target shareholders’ pro forma ownership', 'Quota pro forma degli azionisti del target'),
            expr: 'Ownership = New shares / (Acquirer shares + New shares)'
          }
        ],
        note: t(
          'Fixed ER → the number of shares is fixed and the value floats. Fixed price (floating ER) → the value is fixed and the number of shares floats.',
          'ER fisso → il numero di azioni è fisso e il valore oscilla. Prezzo fisso (ER variabile) → il valore è fisso e il numero di azioni oscilla.'
        )
      },
      {
        type: 'technical',
        title: t('Fixed vs floating ratios and collars', 'Rapporti fissi, variabili e collar'),
        body: t(
          '- **Fixed exchange ratio**: shares per target share set at signing. If the acquirer’s stock falls before closing, target holders receive less value; ownership split is locked. Risk shared — the **seller** bears the acquirer price risk.\n- **Floating ratio (fixed value)**: the number of shares adjusts so the target receives a set € value. The **buyer** bears the risk: if its price falls, it issues more shares and dilution rises.\n- **Collar**: a band around the reference price. A fixed-value collar keeps value constant inside the band and switches to a fixed ratio outside; a fixed-ratio collar does the opposite. Collars cap how much each side can lose, and often come with walk-away rights at the extremes.',
          '- **Rapporto di cambio fisso**: azioni per azione del target fissate al signing. Se il titolo dell’acquirente scende prima del closing, gli azionisti del target ricevono meno valore; la ripartizione del capitale è bloccata. È il **venditore** a sopportare il rischio sul prezzo dell’acquirente.\n- **Rapporto variabile (valore fisso)**: il numero di azioni si adegua in modo che il target riceva un valore definito in €. Il rischio è dell’**acquirente**: se il suo titolo scende, emette più azioni e la diluizione aumenta.\n- **Collar**: una banda intorno al prezzo di riferimento. Un collar a valore fisso mantiene il valore costante nella banda e passa a rapporto fisso fuori; un collar a rapporto fisso fa l’opposto. Il collar limita le perdite di ciascuna parte, spesso con diritti di recesso agli estremi.'
        )
      },
      {
        type: 'example',
        title: t('BuyerCo offers for TargetCo', 'BuyerCo lancia un’offerta su TargetCo'),
        body: t(
          'BuyerCo trades at €40 with 300m shares. It offers €30 per TargetCo share (100m shares) in stock with a **fixed** exchange ratio. Then BuyerCo’s price falls 10% before closing.',
          'BuyerCo quota €40 con 300m di azioni. Offre €30 per azione TargetCo (100m di azioni) in azioni con rapporto di cambio **fisso**. Prima del closing il titolo BuyerCo scende del 10%.'
        ),
        table: {
          headers: [t('Item', 'Voce'), t('At signing', 'Al signing'), t('At closing', 'Al closing')],
          rows: [
            [t('BuyerCo share price (€)', 'Prezzo azione BuyerCo (€)'), '40.00', '36.00'],
            [t('Exchange ratio', 'Rapporto di cambio'), '0.75x', '0.75x'],
            [t('New BuyerCo shares (m)', 'Nuove azioni BuyerCo (m)'), '75', '75'],
            [t('Value per TargetCo share (€)', 'Valore per azione TargetCo (€)'), '30.00', '27.00'],
            [t('TargetCo holders’ ownership', 'Quota degli azionisti TargetCo'), '20%', '20%']
          ]
        }
      },
      { type: 'exercise', questionId: 'ma-cons-q1' },
      { type: 'exercise', questionId: 'ma-cons-q2' },
      {
        type: 'realworld',
        title: t('What the analyst actually does', 'Cosa fa davvero l’analista'),
        body: t(
          'On a stock deal the analyst builds the **exchange ratio analysis**: historical ratios of the two share prices (spot, 30/60/90-day averages), the implied premium at each ratio, and a **contribution analysis** comparing each side’s share of revenue, EBITDA and net income with its pro forma ownership.\n\nIf the target contributes 30% of combined net income but receives 20% of the shares, its board will push back — that slide frames the negotiation. The analyst also runs pro forma ownership and EPS for each consideration mix the client is considering.',
          'In un deal in azioni l’analista costruisce l’**analisi del rapporto di cambio**: rapporti storici tra i due prezzi (spot, medie a 30/60/90 giorni), il premio implicito per ogni rapporto e una **contribution analysis** che confronta il contributo di ciascuna parte a ricavi, EBITDA e utile netto con la sua quota pro forma.\n\nSe il target contribuisce il 30% dell’utile combinato ma riceve il 20% delle azioni, il suo CdA si opporrà — quella slide imposta la negoziazione. L’analista calcola anche quote ed EPS pro forma per ogni mix di corrispettivo valutato dal cliente.'
        )
      },
      { type: 'exercise', questionId: 'ma-cons-q3' },
      {
        type: 'interview',
        question: t('Why might a buyer prefer to pay in stock rather than cash?', 'Perché un acquirente potrebbe preferire pagare in azioni anziché in contanti?'),
        answer: t(
          'Three reasons. First, capacity: it may lack cash or debt headroom, and stock protects its rating. Second, valuation: if management thinks its own shares are overvalued, stock is "cheap currency" — which is exactly why markets often read stock deals as a negative signal. Third, risk sharing: with stock the target’s holders share the integration risk. The cost is dilution and loss of control, and if the buyer’s P/E is below the target’s purchase P/E the deal will be EPS-dilutive before synergies.',
          'Tre motivi. Primo, capacità: può non avere cassa o margine di indebitamento, e le azioni proteggono il rating. Secondo, valutazione: se il management ritiene le proprie azioni sopravvalutate, sono una "moneta conveniente" — ed è proprio per questo che il mercato legge spesso i deal in azioni come un segnale negativo. Terzo, condivisione del rischio: con le azioni gli azionisti del target condividono il rischio di integrazione. Il costo è la diluizione e la perdita di controllo, e se il P/E dell’acquirente è inferiore al P/E pagato per il target il deal è diluitivo sull’EPS prima delle sinergie.'
        )
      },
      {
        type: 'mistakes',
        items: [
          t('Saying a fixed exchange ratio protects the seller. It fixes shares, not value — the seller bears the acquirer’s price risk.', 'Dire che un rapporto di cambio fisso tutela il venditore. Fissa le azioni, non il valore — il venditore sopporta il rischio di prezzo dell’acquirente.'),
          t('Computing the exchange ratio on basic instead of diluted target shares when sizing the share issuance.', 'Calcolare le nuove azioni sulle azioni base anziché diluite del target.'),
          t('Forgetting that a stock deal hands control and future synergies partly to the target’s shareholders.', 'Dimenticare che un deal in azioni cede in parte controllo e sinergie future agli azionisti del target.')
        ]
      },
      {
        type: 'summary',
        items: [
          t('Cash = certain value for the seller, all risk and upside to the buyer.', 'Contanti = valore certo per il venditore, tutto il rischio e l’upside all’acquirente.'),
          t('ER = offer price per target share / acquirer share price; ownership = new shares / total shares.', 'ER = prezzo offerto per azione del target / prezzo dell’acquirente; quota = nuove azioni / azioni totali.'),
          t('Fixed ratio: seller bears price risk. Floating ratio: buyer bears dilution risk. Collars split the risk within a band.', 'Rapporto fisso: il rischio di prezzo è del venditore. Rapporto variabile: il rischio di diluizione è dell’acquirente. I collar ripartiscono il rischio in una banda.')
        ]
      }
    ],
    questions: [
      {
        id: 'ma-cons-q1',
        kind: 'numeric',
        topic: 'ma-consideration',
        difficulty: 1,
        objective: t('Compute an exchange ratio.', 'Calcolare un rapporto di cambio.'),
        prompt: t(
          'AcquireCo shares trade at €50. It offers €35 per target share, paid entirely in AcquireCo stock. What is the exchange ratio (x)?',
          'Le azioni AcquireCo quotano €50. Offre €35 per azione del target, interamente in azioni AcquireCo. Qual è il rapporto di cambio (x)?'
        ),
        answer: 0.7,
        unit: 'x',
        verify: { fn: 'exchangeRatio', args: [35, 50] },
        explanation: t(
          'ER = 35 / 50 = 0.70 AcquireCo shares per target share. Inverting it (50/35 = 1.43) is a common slip: the ratio is always expressed as acquirer shares delivered per target share.',
          'ER = 35 / 50 = 0,70 azioni AcquireCo per azione del target. Invertirlo (50/35 = 1,43) è un errore frequente: il rapporto indica le azioni dell’acquirente consegnate per ogni azione del target.'
        )
      },
      {
        id: 'ma-cons-q2',
        kind: 'numeric',
        topic: 'ma-consideration',
        difficulty: 2,
        objective: t('Compute pro forma ownership in an all-stock deal.', 'Calcolare la quota pro forma in un deal interamente in azioni.'),
        prompt: t(
          'BuyerCo has 300m shares. It issues 0.75 new shares for each of TargetCo’s 100m shares. What percentage of the combined company do former TargetCo shareholders own (%)?',
          'BuyerCo ha 300m di azioni. Emette 0,75 nuove azioni per ognuna delle 100m di azioni TargetCo. Quale percentuale della società combinata detengono gli ex azionisti TargetCo (%)?'
        ),
        answer: 20,
        unit: '%',
        tolerance: { abs: 0.05 },
        verify: { fn: 'ratio', args: [7500, 375] },
        steps: [t('New shares = 0.75 × 100m = 75m', 'Nuove azioni = 0,75 × 100m = 75m'), t('Ownership = 75 / (300 + 75) = 20%', 'Quota = 75 / (300 + 75) = 20%')],
        explanation: t(
          'New shares = 75m; total = 375m; 75/375 = 20%. Dividing by BuyerCo’s pre-deal 300m (25%) overstates the stake because the denominator must include the new shares.',
          'Nuove azioni = 75m; totale = 375m; 75/375 = 20%. Dividere per le 300m pre-deal di BuyerCo (25%) sovrastima la quota: il denominatore deve includere le nuove azioni.'
        )
      },
      {
        id: 'ma-cons-q3',
        kind: 'numeric',
        topic: 'ma-consideration',
        difficulty: 2,
        objective: t('Measure the seller’s price risk under a fixed exchange ratio.', 'Misurare il rischio di prezzo del venditore con rapporto di cambio fisso.'),
        prompt: t(
          'A deal has a fixed exchange ratio of 0.75x. Between signing and closing the acquirer’s share price falls from €40 to €36. What value does each target share receive at closing (€)?',
          'Un deal ha un rapporto di cambio fisso di 0,75x. Tra signing e closing il prezzo dell’acquirente scende da €40 a €36. Quale valore riceve ogni azione del target al closing (€)?'
        ),
        answer: 27,
        unit: '€',
        verify: { fn: 'product', args: [0.75, 36] },
        explanation: t(
          '0.75 × €36 = €27, down from €30 at signing. With a fixed ratio the number of shares does not change, so the target holders absorb the fall. Under a fixed-value (floating) structure they would still get €30 and the buyer would issue 30/36 = 0.833 shares each.',
          '0,75 × €36 = €27, contro €30 al signing. Con rapporto fisso il numero di azioni non cambia, quindi il calo ricade sugli azionisti del target. Con una struttura a valore fisso (rapporto variabile) riceverebbero comunque €30 e l’acquirente emetterebbe 30/36 = 0,833 azioni ciascuno.'
        )
      },
      {
        id: 'ma-cons-q4',
        kind: 'mcq',
        topic: 'ma-consideration',
        difficulty: 2,
        objective: t('Identify who bears risk under a floating exchange ratio.', 'Individuare chi sopporta il rischio con rapporto di cambio variabile.'),
        prompt: t(
          'A stock deal guarantees target holders €30 of acquirer stock per share (floating ratio, no collar). The acquirer’s share price drops sharply before closing. What happens?',
          'Un deal in azioni garantisce agli azionisti del target €30 in azioni dell’acquirente per azione (rapporto variabile, senza collar). Il titolo dell’acquirente crolla prima del closing. Cosa succede?'
        ),
        choices: [
          t('Target holders receive less value per share', 'Gli azionisti del target ricevono meno valore per azione'),
          t('The acquirer issues more shares, increasing dilution for its existing holders', 'L’acquirente emette più azioni, aumentando la diluizione per i propri soci'),
          t('The ownership split stays exactly as agreed at signing', 'La ripartizione del capitale resta esattamente quella concordata al signing'),
          t('The deal automatically converts to cash consideration', 'Il deal si converte automaticamente in contanti')
        ],
        correct: 1,
        explanation: t(
          'With a fixed value, the number of shares floats: a lower price means more shares to deliver €30, so the buyer bears the dilution. Options A and C describe a fixed ratio; there is no automatic conversion to cash unless the agreement says so.',
          'Con valore fisso il numero di azioni varia: un prezzo più basso richiede più azioni per consegnare €30, quindi la diluizione è a carico dell’acquirente. A e C descrivono un rapporto fisso; nessuna conversione automatica in contanti salvo diversa previsione contrattuale.'
        )
      },
      {
        id: 'ma-cons-q5',
        kind: 'multi',
        topic: 'ma-consideration',
        difficulty: 2,
        objective: t('Recognise factors favouring stock consideration.', 'Riconoscere i fattori che favoriscono il pagamento in azioni.'),
        prompt: t('Which factors push a buyer towards paying in stock? Select all that apply.', 'Quali fattori spingono un acquirente a pagare in azioni? Seleziona tutte le risposte corrette.'),
        choices: [
          t('Its leverage is already high and it wants to protect its credit rating', 'La sua leva è già alta e vuole proteggere il rating'),
          t('It believes its shares are richly valued', 'Ritiene che le proprie azioni siano care'),
          t('It wants to keep 100% of the expected synergies for its current shareholders', 'Vuole tenere il 100% delle sinergie attese per i soci attuali'),
          t('The target is large relative to the buyer', 'Il target è grande rispetto all’acquirente'),
          t('The seller insists on certainty of value at closing', 'Il venditore pretende certezza di valore al closing')
        ],
        correct: [0, 1, 3],
        explanation: t(
          'High leverage, a rich share price and a large target (cash would be unaffordable) favour stock. Keeping all synergies and giving the seller certainty of value are arguments for cash.',
          'Leva elevata, titolo caro e target grande (i contanti sarebbero insostenibili) favoriscono le azioni. Tenersi tutte le sinergie e dare certezza di valore al venditore sono argomenti a favore dei contanti.'
        )
      }
    ],
    flashcards: [
      { id: 'fc-ma-cons-1', topic: 'ma-consideration', front: t('Exchange ratio formula?', 'Formula del rapporto di cambio?'), back: t('Offer price per target share / acquirer share price = acquirer shares per target share.', 'Prezzo offerto per azione del target / prezzo dell’acquirente = azioni dell’acquirente per azione del target.') },
      { id: 'fc-ma-cons-2', topic: 'ma-consideration', front: t('Fixed exchange ratio: who bears the acquirer’s share price risk?', 'Rapporto di cambio fisso: chi sopporta il rischio sul prezzo dell’acquirente?'), back: t('The target’s shareholders (value floats; share count and ownership split are fixed).', 'Gli azionisti del target (il valore oscilla; numero di azioni e ripartizione sono fissi).') },
      { id: 'fc-ma-cons-3', topic: 'ma-consideration', front: t('What is a collar in a stock deal?', 'Cos’è un collar in un deal in azioni?'), back: t('A price band around the reference price within which value (or ratio) is fixed, limiting each side’s exposure; often with walk-away rights outside it.', 'Una banda di prezzo intorno al riferimento entro cui è fisso il valore (o il rapporto), limitando l’esposizione delle parti; spesso con diritto di recesso fuori banda.') },
      { id: 'fc-ma-cons-4', topic: 'ma-consideration', front: t('What does a contribution analysis compare?', 'Cosa confronta una contribution analysis?'), back: t('Each party’s share of combined revenue, EBITDA, net income (etc.) vs its pro forma ownership.', 'Il contributo di ciascuna parte a ricavi, EBITDA, utile netto (ecc.) combinati rispetto alla sua quota pro forma.') }
    ]
  },

  /* ================================================================== */
  /* M3 — ma-asset-vs-share                                              */
  /* ================================================================== */
  {
    id: 'ma-asset-vs-share',
    academyId: 'ma',
    moduleId: 'M3',
    mode: 'deep',
    minutes: 12,
    difficulty: 2,
    reviewed: '2026-10',
    objective: t(
      'Distinguish asset deals from share deals by liabilities assumed, tax consequences and transfer of contracts, and quantify the value of a tax basis step-up.',
      'Distinguere asset deal e share deal per passività assunte, conseguenze fiscali e trasferimento dei contratti, e quantificare il valore dello step-up fiscale.'
    ),
    screens: [
      {
        type: 'intuition',
        title: t('Buy the house or buy the company that owns it?', 'Comprare la casa o la società che la possiede?'),
        body: t(
          'In a **share deal** you buy the shares of the legal entity. Everything inside comes with it — assets, contracts, employees and **all** liabilities, including the ones nobody knows about yet.\n\nIn an **asset deal** you buy a chosen set of assets (and agreed liabilities) out of the seller’s company. You can leave unwanted risks behind — but you must transfer each asset and contract, and the tax bill is split very differently.',
          'In uno **share deal** si acquistano le azioni (o quote) della società. Tutto ciò che contiene passa con essa — beni, contratti, dipendenti e **tutte** le passività, anche quelle che nessuno conosce ancora.\n\nIn un **asset deal** si acquista un insieme selezionato di beni (e di passività concordate) dalla società del venditore. Si possono lasciare indietro i rischi indesiderati — ma ogni bene e contratto va trasferito, e il carico fiscale si ripartisce in modo molto diverso.'
        )
      },
      {
        type: 'technical',
        title: t('Key differences', 'Le differenze chiave'),
        body: t(
          'The table compares the two structures on what bankers and lawyers negotiate most.',
          'La tabella confronta le due strutture sui punti più negoziati da banker e legali.'
        ),
        table: {
          headers: [t('Topic', 'Tema'), t('Share deal', 'Share deal'), t('Asset deal', 'Asset deal')],
          rows: [
            [t('Liabilities', 'Passività'), t('All, known and unknown (protection via warranties/indemnities)', 'Tutte, note e ignote (tutela con garanzie/indennizzi)'), t('Only those assumed (subject to statutory exceptions)', 'Solo quelle assunte (salvo eccezioni di legge)')],
            [t('Tax basis', 'Valori fiscali'), t('Carried over — no step-up', 'Restano invariati — nessuno step-up'), t('Stepped up to price paid; new amortisation', 'Riallineati al prezzo pagato; nuovi ammortamenti')],
            [t('Seller tax', 'Fiscalità venditore'), t('Gain on shares (often favourable, e.g. participation exemptions)', 'Plusvalenza su partecipazioni (spesso agevolata, es. PEX)'), t('Gain on assets at company level, then on distribution', 'Plusvalenza sui beni in capo alla società, poi sulla distribuzione')],
            [t('Contracts & permits', 'Contratti e permessi'), t('Stay with the entity (watch change-of-control clauses)', 'Restano alla società (attenzione alle clausole di change of control)'), t('Must be transferred; consents may be needed', 'Vanno trasferiti; possono servire consensi')],
            [t('Complexity', 'Complessità'), t('One transfer of shares', 'Un solo trasferimento di azioni'), t('Asset-by-asset; transfer taxes', 'Bene per bene; imposte indirette sul trasferimento')]
          ]
        }
      },
      {
        type: 'formula',
        formulas: [
          {
            name: t('Annual tax saving from a step-up', 'Risparmio fiscale annuo da step-up'),
            expr: 'Tax saving = (Step-up / Tax amortisation period) × Tax rate',
            vars: [{ sym: 'Step-up', desc: t('Price allocated to assets − their existing tax basis', 'Prezzo allocato ai beni − loro valore fiscale esistente') }]
          },
          {
            name: t('Value of the step-up', 'Valore dello step-up'),
            expr: 'PV = annual tax saving × annuity factor (r, n years)'
          },
          {
            name: t('DTL in a share deal (book step-up, no tax step-up)', 'DTL in uno share deal (step-up contabile, non fiscale)'),
            expr: 'DTL = Fair value write-up × Tax rate'
          }
        ]
      },
      {
        type: 'example',
        title: t('Is the step-up worth paying for?', 'Lo step-up vale un prezzo più alto?'),
        body: t(
          'Buyer pays €500m for a business whose assets have a €200m tax basis. In an asset deal the €300m step-up is deductible over 15 years (illustrative) at a 25% tax rate; discount rate 8%.',
          'L’acquirente paga €500m per un business i cui beni hanno valore fiscale di €200m. Nell’asset deal lo step-up di €300m è deducibile in 15 anni (ipotesi illustrativa) con aliquota 25%; tasso di sconto 8%.'
        ),
        table: {
          headers: [t('Step', 'Passaggio'), t('€m', '€m')],
          rows: [
            [t('Step-up (500 − 200)', 'Step-up (500 − 200)'), '300'],
            [t('Annual deduction (300 / 15)', 'Deduzione annua (300 / 15)'), '20'],
            [t('Annual tax saving (20 × 25%)', 'Risparmio fiscale annuo (20 × 25%)'), '5'],
            [t('PV of 15-year saving at 8%', 'VA del risparmio in 15 anni all’8%'), '42.8']
          ],
          totalRows: [3]
        }
      },
      { type: 'exercise', questionId: 'ma-avs-q1' },
      {
        type: 'technical',
        title: t('Italian specifics: cessione d’azienda', 'Il caso italiano: la cessione d’azienda'),
        body: t(
          'Italian asset deals usually take the form of a **cessione d’azienda** or **di ramo d’azienda** (a going concern or a business unit), governed by the Civil Code:\n\n- **Art. 2558 c.c.**: contracts not of a personal nature transfer automatically; the counterparty may withdraw within three months for just cause.\n- **Art. 2560 c.c.**: the buyer is jointly liable for the business’s debts if they appear in the mandatory accounting books.\n- **Art. 2112 c.c.**: employees transfer with continuity of their employment relationship.\n\nA share deal (cessione di partecipazioni) avoids these steps but brings all historical liabilities with it.',
          'In Italia l’asset deal assume di solito la forma di **cessione d’azienda** o **di ramo d’azienda**, disciplinata dal Codice civile:\n\n- **Art. 2558 c.c.**: i contratti non a carattere personale si trasferiscono automaticamente; il terzo contraente può recedere entro tre mesi per giusta causa.\n- **Art. 2560 c.c.**: l’acquirente risponde in solido dei debiti dell’azienda se risultano dai libri contabili obbligatori.\n- **Art. 2112 c.c.**: i dipendenti passano all’acquirente con continuità del rapporto di lavoro.\n\nLa cessione di partecipazioni evita questi passaggi, ma porta con sé tutte le passività storiche.'
        )
      },
      {
        type: 'realworld',
        title: t('Where this shows up', 'Dove emerge nella pratica'),
        body: t(
          '- **Carve-outs** of a division are often asset deals (or the seller first drops the unit into a NewCo and sells its shares).\n- **Distressed** acquisitions favour asset deals to ring-fence the seller’s liabilities.\n- In the US, a **Section 338(h)(10)** election (where available) treats a stock purchase as an asset purchase for tax, giving the buyer a step-up.\n\nThe analyst models both structures: the buyer’s higher NPV from tax savings vs the seller’s extra tax cost — and the price at which both sides are better off.',
          '- I **carve-out** di una divisione sono spesso asset deal (oppure il venditore conferisce prima il ramo in una NewCo e ne cede le azioni).\n- Le acquisizioni **distressed** preferiscono l’asset deal per isolare le passività del venditore.\n- Negli USA un’elezione **Section 338(h)(10)** (quando disponibile) tratta l’acquisto di azioni come acquisto di beni ai fini fiscali, dando all’acquirente lo step-up.\n\nL’analista modella entrambe le strutture: il maggiore NPV per l’acquirente dai risparmi fiscali contro il maggior costo fiscale del venditore — e il prezzo a cui entrambi ci guadagnano.'
        )
      },
      { type: 'exercise', questionId: 'ma-avs-q2' },
      { type: 'exercise', questionId: 'ma-avs-q3' },
      {
        type: 'interview',
        question: t('Would a buyer prefer an asset deal or a share deal? And the seller?', 'Un acquirente preferisce un asset deal o uno share deal? E il venditore?'),
        answer: t(
          'The buyer usually prefers an asset deal: it picks the liabilities it assumes and gets a tax basis step-up, so future amortisation shields taxes. The seller usually prefers a share deal: a clean exit with all liabilities gone, and often lighter taxation on the share gain — whereas an asset sale can mean tax at company level and again on distribution. The gap is bridged through price: the buyer pays more for an asset deal, up to the PV of the tax benefit.',
          'L’acquirente di solito preferisce l’asset deal: sceglie le passività da assumere e ottiene lo step-up fiscale, quindi gli ammortamenti futuri riducono le imposte. Il venditore di solito preferisce lo share deal: un’uscita pulita senza passività residue e spesso una tassazione più leggera sulla plusvalenza — mentre una cessione di beni può comportare imposte in capo alla società e poi sulla distribuzione. La distanza si colma con il prezzo: l’acquirente paga di più per l’asset deal, fino al valore attuale del beneficio fiscale.'
        )
      },
      {
        type: 'mistakes',
        items: [
          t('Assuming an asset deal leaves all liabilities behind — statutes (e.g. art. 2560 c.c., employee rules) can make the buyer liable.', 'Credere che l’asset deal lasci indietro tutte le passività — norme come l’art. 2560 c.c. e la disciplina del lavoro possono renderne responsabile l’acquirente.'),
          t('Forgetting the DTL that arises in a share deal when assets are written up for accounting but not for tax.', 'Dimenticare la DTL che nasce nello share deal quando i beni sono rivalutati in bilancio ma non ai fini fiscali.'),
          t('Ignoring change-of-control clauses in a share deal: key contracts may still be terminable.', 'Ignorare le clausole di change of control nello share deal: i contratti chiave possono comunque essere risolti.')
        ]
      },
      {
        type: 'summary',
        items: [
          t('Share deal: buy the entity with all its liabilities; no tax step-up; simple transfer.', 'Share deal: si compra la società con tutte le passività; nessuno step-up fiscale; trasferimento semplice.'),
          t('Asset deal: choose assets/liabilities; tax step-up; contracts and permits must move.', 'Asset deal: si scelgono beni/passività; step-up fiscale; contratti e permessi vanno trasferiti.'),
          t('Value the step-up as a PV of tax savings and use it to bridge the price gap.', 'Valutare lo step-up come VA dei risparmi fiscali e usarlo per colmare la distanza sul prezzo.')
        ]
      }
    ],
    questions: [
      {
        id: 'ma-avs-q1',
        kind: 'numeric',
        topic: 'ma-asset-vs-share',
        difficulty: 2,
        objective: t('Value a tax basis step-up.', 'Valutare uno step-up fiscale.'),
        prompt: t(
          'An asset deal creates an annual tax saving of €5m for 15 years. At an 8% discount rate, what is the present value of the step-up (€m)?',
          'Un asset deal genera un risparmio fiscale annuo di €5m per 15 anni. Con un tasso di sconto dell’8%, qual è il valore attuale dello step-up (€m)?'
        ),
        answer: 42.8,
        unit: '€m',
        tolerance: { abs: 0.1 },
        verify: { fn: 'pvAnnuity', args: [5, 0.08, 15] },
        explanation: t(
          'PV = 5 × [1 − 1.08^−15] / 0.08 = 5 × 8.559 ≈ €42.8m. Using the undiscounted €75m (5 × 15) overstates the benefit because the savings arrive over 15 years.',
          'VA = 5 × [1 − 1,08^−15] / 0,08 = 5 × 8,559 ≈ €42,8m. Usare i €75m non scontati (5 × 15) sovrastima il beneficio, perché i risparmi arrivano nell’arco di 15 anni.'
        )
      },
      {
        id: 'ma-avs-q2',
        kind: 'numeric',
        topic: 'ma-asset-vs-share',
        difficulty: 2,
        objective: t('Compute the DTL created in a share deal.', 'Calcolare la DTL generata in uno share deal.'),
        prompt: t(
          'In a share deal, PPA writes up TargetCo’s intangible assets by €300m for accounting purposes; the tax basis is unchanged. Tax rate 25%. What deferred tax liability is recognised (€m)?',
          'In uno share deal la PPA rivaluta le immobilizzazioni immateriali di TargetCo di €300m ai fini contabili; il valore fiscale non cambia. Aliquota 25%. Quale passività per imposte differite si rileva (€m)?'
        ),
        answer: 75,
        unit: '€m',
        verify: { fn: 'dtlOnStepUp', args: [300, 0.25] },
        explanation: t(
          'DTL = 300 × 25% = €75m. Book amortisation of the write-up will not be tax-deductible, so future taxable profit exceeds book profit; the DTL reverses as the write-up is amortised. In an asset deal with a tax step-up, no such DTL arises.',
          'DTL = 300 × 25% = €75m. L’ammortamento contabile della rivalutazione non sarà deducibile, quindi il reddito imponibile futuro supera l’utile contabile; la DTL si riversa man mano che la rivalutazione è ammortizzata. In un asset deal con step-up fiscale questa DTL non nasce.'
        )
      },
      {
        id: 'ma-avs-q3',
        kind: 'multi',
        topic: 'ma-asset-vs-share',
        difficulty: 2,
        objective: t('Identify features of an asset deal.', 'Individuare le caratteristiche di un asset deal.'),
        prompt: t('Which statements describe an asset deal (vs a share deal)? Select all that apply.', 'Quali affermazioni descrivono un asset deal (rispetto a uno share deal)? Seleziona tutte le risposte corrette.'),
        choices: [
          t('The buyer can generally obtain a step-up in the tax basis of acquired assets', 'L’acquirente può in genere ottenere lo step-up fiscale dei beni acquisiti'),
          t('Contracts, licences and permits may need to be transferred or consented to', 'Contratti, licenze e permessi possono richiedere trasferimento o consenso'),
          t('All historical liabilities automatically pass to the buyer', 'Tutte le passività storiche passano automaticamente all’acquirente'),
          t('It is often preferred in distressed acquisitions', 'È spesso preferito nelle acquisizioni distressed'),
          t('It is usually simpler to execute because only one instrument changes hands', 'È di solito più semplice da eseguire perché si trasferisce un solo strumento')
        ],
        correct: [0, 1, 3],
        explanation: t(
          'Step-up, contract transfers and appeal in distress are asset-deal features. Automatic transfer of all liabilities and the single-instrument simplicity describe a share deal.',
          'Step-up, trasferimento dei contratti e attrattività nelle situazioni distressed sono tipici dell’asset deal. Il passaggio automatico di tutte le passività e la semplicità di un unico trasferimento descrivono lo share deal.'
        )
      },
      {
        id: 'ma-avs-q4',
        kind: 'mcq',
        topic: 'ma-asset-vs-share',
        difficulty: 3,
        objective: t('Apply Italian rules on the transfer of a going concern.', 'Applicare le norme italiane sulla cessione d’azienda.'),
        prompt: t(
          'In an Italian cessione d’azienda, which debts of the business is the buyer jointly liable for under art. 2560 c.c.?',
          'In una cessione d’azienda, di quali debiti dell’azienda risponde in solido l’acquirente ai sensi dell’art. 2560 c.c.?'
        ),
        choices: [
          t('None: the buyer is never liable for pre-transfer debts', 'Nessuno: l’acquirente non risponde mai dei debiti anteriori'),
          t('Only debts listed in the SPA', 'Solo i debiti elencati nel contratto di cessione'),
          t('Debts relating to the business that appear in the mandatory accounting books', 'I debiti relativi all’azienda che risultano dai libri contabili obbligatori'),
          t('All debts of the selling company, including those unrelated to the business', 'Tutti i debiti della società cedente, anche quelli estranei all’azienda')
        ],
        correct: 2,
        explanation: t(
          'Art. 2560 c.c.: the transferor is not released without creditor consent, and the transferee is jointly liable for debts relating to the business if they appear in the mandatory accounting books. The SPA allocates risk between the parties but cannot bind third-party creditors.',
          'Art. 2560 c.c.: il cedente non è liberato senza il consenso dei creditori, e l’acquirente risponde in solido dei debiti relativi all’azienda se risultano dai libri contabili obbligatori. Il contratto ripartisce il rischio tra le parti ma non è opponibile ai creditori terzi.'
        )
      }
    ],
    flashcards: [
      { id: 'fc-ma-avs-1', topic: 'ma-asset-vs-share', front: t('Main tax advantage of an asset deal for the buyer?', 'Principale vantaggio fiscale dell’asset deal per l’acquirente?'), back: t('Step-up of the tax basis to the price paid → higher deductible amortisation/depreciation.', 'Step-up dei valori fiscali al prezzo pagato → maggiori ammortamenti deducibili.') },
      { id: 'fc-ma-avs-2', topic: 'ma-asset-vs-share', front: t('Why do sellers usually prefer share deals?', 'Perché i venditori preferiscono di solito lo share deal?'), back: t('Clean exit with all liabilities, and often lighter tax on the share gain vs company-level tax on an asset sale.', 'Uscita pulita con tutte le passività e spesso tassazione più leggera sulla plusvalenza rispetto all’imposizione societaria di una cessione di beni.') },
      { id: 'fc-ma-avs-3', topic: 'ma-asset-vs-share', front: t('Art. 2112 c.c. in a cessione d’azienda?', 'Art. 2112 c.c. nella cessione d’azienda?'), back: t('Employees transfer to the buyer with continuity of their employment relationship.', 'I dipendenti passano all’acquirente con continuità del rapporto di lavoro.') },
      { id: 'fc-ma-avs-4', topic: 'ma-asset-vs-share', front: t('What is a Section 338(h)(10) election (US)?', 'Cos’è l’elezione Section 338(h)(10) (USA)?'), back: t('An election, where eligible, to treat a stock purchase as an asset purchase for tax, giving the buyer a basis step-up.', 'Un’opzione, se ammessa, per trattare fiscalmente l’acquisto di azioni come acquisto di beni, con step-up per l’acquirente.') }
    ],
    sources: [
      { label: 'Codice civile, artt. 2112, 2556–2560 (Normattiva)', url: 'https://www.normattiva.it/' },
      { label: 'IAS 12 Income Taxes (IFRS Foundation)', url: 'https://www.ifrs.org/issued-standards/list-of-standards/ias-12-income-taxes/' }
    ]
  }
  ,
  /* ================================================================== */
  /* M3 — ma-price-mechanisms                                            */
  /* ================================================================== */
  {
    id: 'ma-price-mechanisms',
    academyId: 'ma',
    moduleId: 'M3',
    mode: 'deep',
    minutes: 15,
    difficulty: 3,
    reviewed: '2026-10',
    objective: t(
      'Compare locked box and completion accounts mechanisms, bridge headline enterprise value to the equity price in an SPA, and compute working capital adjustments, leakage and ticking fees.',
      'Confrontare locked box e completion accounts, passare dall’enterprise value al prezzo dell’equity in un SPA e calcolare aggiustamenti del capitale circolante, leakage e ticking fee.'
    ),
    screens: [
      {
        type: 'intuition',
        title: t('The headline price is not the cheque', 'Il prezzo annunciato non è l’assegno'),
        body: t(
          'Bidders offer an **enterprise value** on a **cash-free, debt-free** basis with a "normal" level of working capital. But the seller sells shares, so the cheque is the **equity price**: EV minus the debt the buyer inherits, plus the cash it gets, adjusted if working capital is above or below normal.\n\nThe question is *when* those balances are measured: at a past date everyone already knows (**locked box**) or at closing, trued up afterwards (**completion accounts**).',
          'Gli offerenti propongono un **enterprise value** su base **cash-free, debt-free** con un livello "normale" di capitale circolante. Ma il venditore cede le azioni, quindi l’assegno è il **prezzo dell’equity**: EV meno il debito che l’acquirente eredita, più la cassa che riceve, rettificato se il circolante è sopra o sotto il normale.\n\nLa domanda è *quando* si misurano questi saldi: a una data passata già nota (**locked box**) o al closing, con conguaglio successivo (**completion accounts**).'
        )
      },
      {
        type: 'technical',
        title: t('Locked box vs completion accounts', 'Locked box vs completion accounts'),
        body: t(
          '**Locked box**: price fixed by reference to a balance sheet at a past **locked box date**. From then, economic risk and reward pass to the buyer; the seller promises **no leakage** (dividends, management fees, bonuses, related-party payments) other than agreed **permitted leakage**. Leakage is refunded €-for-€. Often a **ticking fee** compensates the seller for profits earned between the locked box date and closing.\n\n**Completion accounts**: a provisional price at closing, then actual net debt and NWC at closing are measured and the price trued up versus estimates and the agreed **NWC target (peg)**. More precise; slower, with more disputes, often resolved by an independent accountant.\n\nLocked box is common in European sponsor-led auctions; completion accounts are typical in the US and in carve-outs without standalone accounts.',
          '**Locked box**: prezzo fissato sulla base di uno stato patrimoniale a una **locked box date** passata. Da quel momento rischi e benefici economici passano all’acquirente; il venditore garantisce **assenza di leakage** (dividendi, management fee, bonus, pagamenti a parti correlate) salvo il **permitted leakage** concordato. Il leakage si restituisce euro per euro. Spesso una **ticking fee** remunera il venditore per gli utili maturati tra locked box date e closing.\n\n**Completion accounts**: prezzo provvisorio al closing, poi si misurano PFN e circolante effettivi al closing e si conguaglia rispetto alle stime e al **target di circolante (peg)**. Più preciso; più lento e litigioso, spesso con un esperto contabile indipendente.\n\nIl locked box è diffuso nelle aste europee con fondi; le completion accounts sono tipiche negli USA e nei carve-out senza bilanci stand-alone.'
        )
      },
      {
        type: 'formula',
        formulas: [
          {
            name: t('Equity price with NWC adjustment', 'Prezzo dell’equity con aggiustamento del circolante'),
            expr: 'Equity price = EV − Net debt (incl. debt-like items) + (Actual NWC − Target NWC)',
            vars: [
              { sym: 'Net debt', desc: t('Financial debt + debt-like items − cash', 'Debito finanziario + debt-like items − cassa') },
              { sym: 'Target NWC', desc: t('Normalised working capital "peg" agreed in the SPA', 'Circolante normalizzato ("peg") concordato nello SPA') }
            ]
          },
          {
            name: t('Ticking fee (simple daily accrual)', 'Ticking fee (maturazione giornaliera semplice)'),
            expr: 'Ticking fee = Equity price × annual rate × days / 365'
          }
        ],
        note: t(
          'Debt-like items are negotiated: unpaid taxes, underfunded pensions, deferred consideration, customer deposits, overdue payables.',
          'I debt-like items sono negoziati: imposte non pagate, fondi pensione non coperti, prezzi differiti, anticipi da clienti, debiti scaduti.'
        )
      },
      {
        type: 'example',
        title: t('From EV to the cheque', 'Dall’EV all’assegno'),
        body: t(
          'Buyer offers €800m EV, cash-free/debt-free, with an NWC target of €110m. At closing TargetCo has €150m net debt and only €95m of NWC.',
          'L’acquirente offre €800m di EV, cash-free/debt-free, con target di circolante di €110m. Al closing TargetCo ha €150m di PFN e solo €95m di circolante.'
        ),
        table: {
          headers: [t('Bridge item', 'Voce del bridge'), t('€m', '€m')],
          rows: [
            [t('Enterprise value (headline)', 'Enterprise value (offerta)'), '800'],
            [t('− Net debt incl. debt-like items', '− PFN incl. debt-like items'), '(150)'],
            [t('± NWC adjustment (95 − 110)', '± Aggiustamento circolante (95 − 110)'), '(15)'],
            [t('Equity price paid', 'Prezzo dell’equity pagato'), '635']
          ],
          totalRows: [3]
        }
      },
      { type: 'exercise', questionId: 'ma-pm-q1' },
      {
        type: 'technical',
        title: t('Why the NWC peg matters', 'Perché il peg del circolante conta'),
        body: t(
          'Without a peg, a seller could collect receivables aggressively and stretch payables before closing, converting working capital into cash that is counted in the price.\n\nThe peg is usually the **average NWC over the last 12 months** (to neutralise seasonality), adjusted for one-offs. Every euro below the peg reduces the price; every euro above increases it.\n\nThe analyst builds the monthly NWC analysis from the data room and quality-of-earnings report, and argues for a peg that favours the client.',
          'Senza peg il venditore potrebbe incassare i crediti in modo aggressivo e allungare i debiti prima del closing, trasformando circolante in cassa che entra nel prezzo.\n\nIl peg è di solito la **media del circolante degli ultimi 12 mesi** (per neutralizzare la stagionalità), rettificata per le poste non ricorrenti. Ogni euro sotto il peg riduce il prezzo; ogni euro sopra lo aumenta.\n\nL’analista costruisce l’analisi mensile del circolante da data room e quality of earnings, e sostiene il peg più favorevole al cliente.'
        )
      },
      { type: 'exercise', questionId: 'ma-pm-q2' },
      {
        type: 'realworld',
        title: t('In the SPA', 'Nello SPA'),
        body: t(
          'The price clause of the SPA contains the EV-to-equity bridge, the definitions of cash, financial debt and debt-like items, and either the locked box accounts plus leakage covenants or the completion accounts mechanics, timetable and expert determination.\n\nDefinitions are where the money is: whether a factoring line, a lease liability or an accrued bonus counts as debt can move the price by millions. In auctions the sell-side bank circulates the draft SPA and compares bidders’ mark-ups, not only the headline EV.',
          'La clausola prezzo dello SPA contiene il bridge da EV a equity, le definizioni di cassa, debito finanziario e debt-like items, e o i conti di locked box con i covenant sul leakage, o il meccanismo, le tempistiche e la perizia delle completion accounts.\n\nNelle definizioni si giocano i soldi: se una linea di factoring, un debito per leasing o un bonus maturato conta come debito può spostare il prezzo di milioni. Nelle aste la banca sell-side fa circolare la bozza di SPA e confronta i mark-up degli offerenti, non solo l’EV.'
        )
      },
      { type: 'exercise', questionId: 'ma-pm-q3' },
      {
        type: 'interview',
        question: t('Why does a seller usually prefer a locked box?', 'Perché il venditore preferisce di solito il locked box?'),
        answer: t(
          'Price certainty: the equity price is fixed at signing, with no post-closing true-up that the buyer could use to claw value back. It also simplifies the auction — bids are directly comparable — and with a ticking fee the seller still captures profits until closing. The buyer’s protection is the no-leakage covenant and diligence on the locked box accounts, so a locked box works best when those accounts are recent and audited.',
          'Certezza del prezzo: il prezzo dell’equity è fisso al signing, senza conguagli post-closing che l’acquirente potrebbe usare per recuperare valore. Semplifica anche l’asta — le offerte sono direttamente confrontabili — e con una ticking fee il venditore incassa comunque gli utili fino al closing. La tutela dell’acquirente è il covenant di no-leakage e la due diligence sui conti di locked box, che quindi funziona meglio con conti recenti e certificati.'
        )
      },
      {
        type: 'mistakes',
        items: [
          t('Adding the full NWC balance to the price — only the difference versus the peg is adjusted.', 'Aggiungere al prezzo l’intero circolante — si rettifica solo la differenza rispetto al peg.'),
          t('Treating all leakage as forbidden: permitted leakage (e.g. agreed salaries) is carved out.', 'Considerare vietato ogni leakage: il permitted leakage (es. stipendi concordati) è escluso.'),
          t('Forgetting debt-like items in the bridge, which overstates the equity price.', 'Dimenticare i debt-like items nel bridge, sovrastimando il prezzo dell’equity.')
        ]
      },
      {
        type: 'summary',
        items: [
          t('Equity price = EV − net debt (incl. debt-like) ± (actual NWC − target NWC).', 'Prezzo equity = EV − PFN (incl. debt-like) ± (circolante effettivo − target).'),
          t('Locked box: fixed price at a past date, no-leakage protection, often a ticking fee.', 'Locked box: prezzo fisso a una data passata, tutela no-leakage, spesso ticking fee.'),
          t('Completion accounts: price trued up to closing balances; precise but slower and dispute-prone.', 'Completion accounts: prezzo conguagliato ai saldi al closing; preciso ma più lento e litigioso.')
        ]
      }
    ],
    questions: [
      {
        id: 'ma-pm-q1',
        kind: 'numeric',
        topic: 'ma-price-mechanisms',
        difficulty: 2,
        objective: t('Compute the equity price with a working capital adjustment.', 'Calcolare il prezzo dell’equity con aggiustamento del circolante.'),
        prompt: t(
          'EV €1,200m on a cash-free/debt-free basis. At closing: net debt (incl. debt-like items) €320m, NWC €145m vs a target of €130m. What equity price is paid (€m)?',
          'EV €1.200m su base cash-free/debt-free. Al closing: PFN (incl. debt-like items) €320m, circolante €145m contro un target di €130m. Quale prezzo dell’equity si paga (€m)?'
        ),
        answer: 895,
        unit: '€m',
        verify: { fn: 'equityPriceWithNWCAdjustment', args: [1200, 320, 145, 130] },
        explanation: t(
          '1,200 − 320 + (145 − 130) = €895m. NWC is €15m above the peg, so the buyer pays more: the excess will turn into cash for its benefit. Subtracting the excess (865) reverses the sign.',
          '1.200 − 320 + (145 − 130) = €895m. Il circolante è €15m sopra il peg, quindi l’acquirente paga di più: l’eccedenza diventerà cassa a suo vantaggio. Sottrarla (865) inverte il segno.'
        )
      },
      {
        id: 'ma-pm-q2',
        kind: 'grid',
        topic: 'ma-price-mechanisms',
        difficulty: 3,
        objective: t('Build an EV-to-equity bridge as in an SPA.', 'Costruire un bridge da EV a equity come in uno SPA.'),
        prompt: t(
          'Complete the SPA price bridge (€m). EV 1,000; financial debt 300; debt-like items (unpaid taxes and pension deficit) 40; cash 60; NWC 120 vs peg 130.',
          'Completa il bridge di prezzo dello SPA (€m). EV 1.000; debito finanziario 300; debt-like items (imposte non pagate e deficit pensionistico) 40; cassa 60; circolante 120 contro peg 130.'
        ),
        columns: [t('Item', 'Voce'), t('€m', '€m')],
        rows: [
          { label: t('Enterprise value', 'Enterprise value'), cells: [1000] },
          { label: t('Net debt incl. debt-like items', 'PFN incl. debt-like items'), cells: [{ answer: 280, verify: { fn: 'sum', args: [300, 40, -60] } }] },
          { label: t('NWC adjustment', 'Aggiustamento circolante'), cells: [{ answer: -10, verify: { fn: 'diff', args: [120, 130] } }] },
          { label: t('Equity price', 'Prezzo dell’equity'), cells: [{ answer: 710, verify: { fn: 'equityPriceWithNWCAdjustment', args: [1000, 280, 120, 130] } }] }
        ],
        unit: '€m',
        explanation: t(
          'Net debt = 300 + 40 − 60 = 280. NWC adjustment = 120 − 130 = −10. Equity = 1,000 − 280 − 10 = 710. Leaving out debt-like items would give 750, overpaying by €40m.',
          'PFN = 300 + 40 − 60 = 280. Aggiustamento circolante = 120 − 130 = −10. Equity = 1.000 − 280 − 10 = 710. Escludere i debt-like items darebbe 750, pagando €40m in più.'
        )
      },
      {
        id: 'ma-pm-q3',
        kind: 'numeric',
        topic: 'ma-price-mechanisms',
        difficulty: 2,
        objective: t('Compute a locked box ticking fee.', 'Calcolare una ticking fee in un locked box.'),
        prompt: t(
          'Locked box equity price €500m with a ticking fee of 6% per year accruing from the locked box date to closing, 4 months later (use 4/12 of a year). What is the ticking fee (€m)?',
          'Prezzo dell’equity in locked box €500m con ticking fee del 6% annuo dalla locked box date al closing, 4 mesi dopo (usa 4/12 di anno). A quanto ammonta la ticking fee (€m)?'
        ),
        answer: 10,
        unit: '€m',
        verify: { fn: 'product', args: [500, 0.06, 4 / 12] },
        explanation: t(
          '500 × 6% × 4/12 = €10m. The ticking fee proxies the cash profits the business generates for the buyer after the locked box date; applying the full annual 6% (€30m) ignores the 4-month period.',
          '500 × 6% × 4/12 = €10m. La ticking fee approssima gli utili di cassa generati per l’acquirente dopo la locked box date; applicare il 6% annuo pieno (€30m) ignora il periodo di 4 mesi.'
        )
      },
      {
        id: 'ma-pm-q4',
        kind: 'multi',
        topic: 'ma-price-mechanisms',
        difficulty: 2,
        objective: t('Identify leakage in a locked box deal.', 'Individuare il leakage in un locked box.'),
        prompt: t(
          'After the locked box date, which payments would typically be leakage (unless agreed as permitted)? Select all that apply.',
          'Dopo la locked box date, quali pagamenti costituirebbero di norma leakage (salvo siano permitted)? Seleziona tutte le risposte corrette.'
        ),
        choices: [
          t('A dividend to the selling fund', 'Un dividendo al fondo venditore'),
          t('A monitoring fee paid to the seller', 'Una monitoring fee pagata al venditore'),
          t('Payment of a supplier invoice in the ordinary course', 'Il pagamento di una fattura di fornitore nel corso ordinario'),
          t('A transaction bonus paid to managers on the sale', 'Un bonus di transazione ai manager per la cessione'),
          t('Salaries to employees under existing contracts', 'Stipendi ai dipendenti secondo i contratti esistenti')
        ],
        correct: [0, 1, 3],
        explanation: t(
          'Value flowing to the seller or its affiliates, or deal-related payments, is leakage. Ordinary-course supplier payments and salaries are normal trading, not value extraction.',
          'Il valore che fluisce al venditore o a sue parti correlate, o i pagamenti legati al deal, sono leakage. Pagamenti ai fornitori e stipendi nel corso ordinario sono normale gestione, non estrazione di valore.'
        )
      },
      {
        id: 'ma-pm-q5',
        kind: 'mcq',
        topic: 'ma-price-mechanisms',
        difficulty: 2,
        objective: t('Choose the right mechanism for a carve-out.', 'Scegliere il meccanismo adatto a un carve-out.'),
        prompt: t(
          'A conglomerate sells a division that has never had standalone audited accounts. Which mechanism is most likely?',
          'Un conglomerato cede una divisione che non ha mai avuto bilanci certificati stand-alone. Quale meccanismo è più probabile?'
        ),
        choices: [
          t('Locked box on the last group accounts', 'Locked box sugli ultimi conti di gruppo'),
          t('Completion accounts with a closing true-up', 'Completion accounts con conguaglio al closing'),
          t('Neither: carve-outs are priced on equity value with no adjustment', 'Nessuno: i carve-out si prezzano sull’equity senza aggiustamenti'),
          t('An earn-out replacing the price mechanism', 'Un earn-out al posto del meccanismo di prezzo')
        ],
        correct: 1,
        explanation: t(
          'A locked box needs a reliable balance sheet for the target itself; without standalone audited accounts the buyer will insist on measuring actual net debt and NWC at closing. Earn-outs address valuation gaps, not balance sheet measurement.',
          'Il locked box richiede uno stato patrimoniale affidabile del target; senza bilanci stand-alone certificati l’acquirente vorrà misurare PFN e circolante effettivi al closing. L’earn-out risolve divergenze di valutazione, non la misurazione patrimoniale.'
        )
      }
    ],
    flashcards: [
      { id: 'fc-ma-pm-1', topic: 'ma-price-mechanisms', front: t('What does "cash-free, debt-free" mean?', 'Cosa significa "cash-free, debt-free"?'), back: t('The EV assumes no cash and no debt; the equity price is EV − debt (and debt-like items) + cash, adjusted for NWC vs target.', 'L’EV presuppone zero cassa e zero debito; il prezzo dell’equity è EV − debito (e debt-like) + cassa, rettificato per il circolante rispetto al target.') },
      { id: 'fc-ma-pm-2', topic: 'ma-price-mechanisms', front: t('What is leakage?', 'Cos’è il leakage?'), back: t('Value transferred from the target to the seller or affiliates after the locked box date (dividends, fees, bonuses); refunded €-for-€ unless permitted.', 'Valore trasferito dal target al venditore o correlate dopo la locked box date (dividendi, fee, bonus); restituito euro per euro salvo sia permitted.') },
      { id: 'fc-ma-pm-3', topic: 'ma-price-mechanisms', front: t('How is the NWC peg usually set?', 'Come si fissa di solito il peg del circolante?'), back: t('Normalised average NWC, typically over the last 12 months, to strip out seasonality and one-offs.', 'Circolante medio normalizzato, tipicamente degli ultimi 12 mesi, per eliminare stagionalità e poste non ricorrenti.') },
      { id: 'fc-ma-pm-4', topic: 'ma-price-mechanisms', front: t('Ticking fee?', 'Ticking fee?'), back: t('Payment to the seller in a locked box deal for the period between the locked box date and closing, usually a daily rate or % per year.', 'Corrispettivo al venditore nel locked box per il periodo tra locked box date e closing, di solito un importo giornaliero o una % annua.') }
    ]
  },

  /* ================================================================== */
  /* M3 — ma-earnouts                                                    */
  /* ================================================================== */
  {
    id: 'ma-earnouts',
    academyId: 'ma',
    moduleId: 'M3',
    mode: 'quick',
    minutes: 8,
    difficulty: 2,
    reviewed: '2026-10',
    objective: t(
      'Design an earn-out, choose suitable metrics, value expected payments and anticipate disputes and accounting treatment under IFRS 3.',
      'Strutturare un earn-out, scegliere metriche adeguate, valutare i pagamenti attesi e anticipare contenziosi e trattamento contabile secondo l’IFRS 3.'
    ),
    screens: [
      {
        type: 'intuition',
        title: t('Bridging "it’s worth more" and "prove it"', 'Tra "vale di più" e "dimostralo"'),
        body: t(
          'The founder believes next year’s EBITDA will be €40m; the buyer underwrites €30m. Rather than fight over the price, they agree to pay part of it **later, only if** the business delivers.\n\nAn **earn-out** is deferred, contingent consideration. It bridges valuation gaps and keeps sellers who stay on motivated — but it also plants a seed of conflict, because the buyer now runs the business that determines the seller’s payout.',
          'Il fondatore crede che l’EBITDA dell’anno prossimo sarà €40m; l’acquirente ne prezza €30m. Invece di litigare sul prezzo, concordano di pagarne una parte **dopo, e solo se** il business raggiunge i risultati.\n\nL’**earn-out** è un corrispettivo differito e condizionato. Colma le divergenze di valutazione e motiva i venditori che restano in azienda — ma semina anche conflitto, perché ora è l’acquirente a gestire il business da cui dipende il pagamento del venditore.'
        )
      },
      {
        type: 'technical',
        title: t('Designing an earn-out', 'Come si struttura un earn-out'),
        body: t(
          '- **Metric**: revenue (simple, hard to manipulate, but ignores profitability), EBITDA (aligns with value, but sensitive to cost allocations and accounting choices), or non-financial milestones (regulatory approval of a drug, product launch).\n- **Period**: usually 1–3 years.\n- **Payout shape**: all-or-nothing threshold, linear between a floor and a cap, or tiered.\n- **Protections**: covenants on how the business is run, definitions of accounting policies, information rights, acceleration on change of control, and an expert-determination clause.\n\nEarn-outs are most common in private-company deals, especially in technology and life sciences.',
          '- **Metrica**: ricavi (semplice, poco manipolabile, ma ignora la redditività), EBITDA (allineato al valore, ma sensibile alle allocazioni di costi e alle scelte contabili), o milestone non finanziarie (approvazione di un farmaco, lancio di un prodotto).\n- **Periodo**: di solito 1–3 anni.\n- **Profilo di pagamento**: soglia tutto-o-niente, lineare tra un minimo e un cap, oppure a scaglioni.\n- **Tutele**: covenant sulla gestione del business, definizione dei principi contabili, diritti di informativa, accelerazione in caso di change of control e una clausola di perizia contrattuale.\n\nGli earn-out sono più comuni nelle acquisizioni di società non quotate, soprattutto in tecnologia e life sciences.'
        )
      },
      {
        type: 'formula',
        formulas: [
          {
            name: t('Linear earn-out with floor and cap', 'Earn-out lineare con soglia e cap'),
            expr: 'Payout = min(Cap, max(0, k × (Actual metric − Threshold)))',
            vars: [{ sym: 'k', desc: t('Payout per €1 above the threshold (often a multiple)', 'Pagamento per ogni €1 sopra soglia (spesso un multiplo)') }]
          },
          {
            name: t('Value of an earn-out (simplified)', 'Valore di un earn-out (semplificato)'),
            expr: 'PV = Probability-weighted payout / (1 + r)^t'
          }
        ]
      },
      {
        type: 'example',
        title: t('Founder earn-out on SoftCo', 'Earn-out del fondatore su SoftCo'),
        body: t(
          'Upfront €200m plus an earn-out of 5× every € of year-2 EBITDA above €30m, capped at €50m.',
          'Prezzo upfront €200m più un earn-out pari a 5× ogni € di EBITDA del secondo anno sopra €30m, con cap a €50m.'
        ),
        table: {
          headers: [t('Year-2 EBITDA (€m)', 'EBITDA anno 2 (€m)'), t('Earn-out (€m)', 'Earn-out (€m)'), t('Total price (€m)', 'Prezzo totale (€m)')],
          rows: [
            ['28', '0', '200'],
            ['34', '20', '220'],
            ['38', '40', '240'],
            ['45', t('50 (cap)', '50 (cap)'), '250']
          ]
        }
      },
      { type: 'exercise', questionId: 'ma-eo-q1' },
      {
        type: 'realworld',
        title: t('Disputes and accounting', 'Contenziosi e contabilità'),
        body: t(
          '**Disputes** typically concern integration decisions that depress the metric (moving customers, allocating group overheads), changes in accounting policies, or whether the buyer had to run the business to maximise the earn-out.\n\n**Accounting (IFRS 3)**: contingent consideration is recognised at **fair value at the acquisition date** as part of consideration (so it affects goodwill). If classified as a liability, it is remeasured at fair value at each reporting date through **profit or loss**; if classified as equity, it is not remeasured. Payments linked to continued employment of selling shareholders are generally **remuneration** for post-combination services, not consideration. US GAAP (ASC 805) is broadly similar.',
          'I **contenziosi** riguardano tipicamente decisioni di integrazione che deprimono la metrica (spostamento di clienti, allocazione dei costi di gruppo), cambi di principi contabili, o l’obbligo dell’acquirente di gestire il business per massimizzare l’earn-out.\n\n**Contabilità (IFRS 3)**: il corrispettivo potenziale si rileva al **fair value alla data di acquisizione** come parte del corrispettivo (quindi incide sull’avviamento). Se classificato come passività, è rimisurato al fair value a ogni chiusura con effetto a **conto economico**; se classificato come patrimonio netto, non è rimisurato. I pagamenti legati alla permanenza in azienda dei soci venditori sono in genere **remunerazione** per servizi successivi, non corrispettivo. Gli US GAAP (ASC 805) sono simili.'
        )
      },
      { type: 'exercise', questionId: 'ma-eo-q2' },
      {
        type: 'interview',
        question: t('When would you propose an earn-out, and what are its drawbacks?', 'Quando proporresti un earn-out e quali sono gli svantaggi?'),
        answer: t(
          'When buyer and seller disagree on forecasts — typically a high-growth private target whose value depends on a few uncertain outcomes — and when the seller stays to run the business. It shifts forecast risk to the seller and lowers the upfront cash. The drawbacks: it constrains integration, creates incentives to manage the metric, and is a frequent source of litigation. For the buyer it is also a liability remeasured through P&L under IFRS 3, adding earnings volatility.',
          'Quando acquirente e venditore divergono sulle previsioni — tipicamente un target privato ad alta crescita il cui valore dipende da pochi eventi incerti — e quando il venditore resta a gestire il business. Trasferisce il rischio di previsione al venditore e riduce la cassa upfront. Gli svantaggi: vincola l’integrazione, crea incentivi a "gestire" la metrica ed è una frequente fonte di contenzioso. Per l’acquirente è anche una passività rimisurata a conto economico secondo l’IFRS 3, che aggiunge volatilità agli utili.'
        )
      },
      {
        type: 'mistakes',
        items: [
          t('Adding the maximum earn-out to the price as if certain; it should be probability-weighted and discounted.', 'Sommare al prezzo l’earn-out massimo come se fosse certo; va ponderato per la probabilità e attualizzato.'),
          t('Choosing EBITDA without defining accounting policies and cost allocations — a recipe for disputes.', 'Scegliere l’EBITDA senza definire principi contabili e allocazioni di costi — la ricetta per un contenzioso.'),
          t('Treating payments conditional on the founder staying employed as purchase consideration.', 'Trattare come corrispettivo pagamenti condizionati alla permanenza del fondatore in azienda.')
        ]
      },
      {
        type: 'summary',
        items: [
          t('Earn-out = contingent deferred consideration that bridges valuation gaps.', 'Earn-out = corrispettivo differito e condizionato che colma divergenze di valutazione.'),
          t('Design: metric, period, payout shape, cap and protective covenants.', 'Struttura: metrica, periodo, profilo di pagamento, cap e covenant di tutela.'),
          t('IFRS 3: fair value at acquisition; liability-classified earn-outs remeasured through P&L.', 'IFRS 3: fair value alla data di acquisizione; earn-out classificati come passività rimisurati a conto economico.')
        ]
      }
    ],
    questions: [
      {
        id: 'ma-eo-q1',
        kind: 'numeric',
        topic: 'ma-earnouts',
        difficulty: 1,
        objective: t('Compute a linear earn-out payout.', 'Calcolare il pagamento di un earn-out lineare.'),
        prompt: t(
          'Earn-out: 5× each € of year-2 EBITDA above €30m, capped at €50m. Year-2 EBITDA is €38m. What is the earn-out payment (€m)?',
          'Earn-out: 5× ogni € di EBITDA dell’anno 2 sopra €30m, con cap a €50m. L’EBITDA dell’anno 2 è €38m. Quanto vale il pagamento dell’earn-out (€m)?'
        ),
        answer: 40,
        unit: '€m',
        verify: { fn: 'product', args: [5, 8] },
        explanation: t(
          '5 × (38 − 30) = €40m, below the €50m cap. Applying 5× to total EBITDA (190) ignores the threshold.',
          '5 × (38 − 30) = €40m, sotto il cap di €50m. Applicare 5× all’EBITDA totale (190) ignora la soglia.'
        )
      },
      {
        id: 'ma-eo-q2',
        kind: 'mcq',
        topic: 'ma-earnouts',
        difficulty: 2,
        objective: t('Apply IFRS 3 to contingent consideration.', 'Applicare l’IFRS 3 al corrispettivo potenziale.'),
        prompt: t(
          'Under IFRS 3, an earn-out classified as a financial liability turns out to be worth more than its acquisition-date fair value because the target outperforms. How is the increase recognised?',
          'Secondo l’IFRS 3, un earn-out classificato come passività finanziaria vale più del fair value alla data di acquisizione perché il target supera le attese. Come si rileva l’aumento?'
        ),
        choices: [
          t('Goodwill is increased', 'Si aumenta l’avviamento'),
          t('Directly in equity', 'Direttamente a patrimonio netto'),
          t('As a loss in profit or loss', 'Come perdita a conto economico'),
          t('Not recognised until paid', 'Non si rileva fino al pagamento')
        ],
        correct: 2,
        explanation: t(
          'Post-acquisition changes in the fair value of liability-classified contingent consideration (that are not measurement-period adjustments) go through profit or loss; goodwill is not adjusted. Equity-classified contingent consideration is not remeasured.',
          'Le variazioni successive del fair value di un corrispettivo potenziale classificato come passività (che non sono rettifiche del periodo di valutazione) vanno a conto economico; l’avviamento non si modifica. Il corrispettivo classificato a patrimonio netto non si rimisura.'
        )
      },
      {
        id: 'ma-eo-q3',
        kind: 'numeric',
        topic: 'ma-earnouts',
        difficulty: 2,
        objective: t('Value an earn-out with probability weighting.', 'Valutare un earn-out con ponderazione per la probabilità.'),
        prompt: t(
          'An earn-out pays €50m in two years if a milestone is met; probability 60%. Discount rate 10%. What is its present value (€m)?',
          'Un earn-out paga €50m tra due anni se si raggiunge una milestone; probabilità 60%. Tasso di sconto 10%. Qual è il valore attuale (€m)?'
        ),
        answer: 24.79,
        unit: '€m',
        tolerance: { abs: 0.05 },
        verify: { fn: 'pv', args: [30, 0.1, 2] },
        explanation: t(
          'Expected payout = 60% × 50 = 30; PV = 30 / 1.10² = €24.79m. Discounting the full €50m (41.3) ignores the probability; using 30 undiscounted ignores time value.',
          'Pagamento atteso = 60% × 50 = 30; VA = 30 / 1,10² = €24,79m. Attualizzare l’intero €50m (41,3) ignora la probabilità; usare 30 senza attualizzare ignora il valore temporale.'
        )
      },
      {
        id: 'ma-eo-q4',
        kind: 'multi',
        topic: 'ma-earnouts',
        difficulty: 2,
        objective: t('Recognise common sources of earn-out disputes.', 'Riconoscere le cause tipiche di contenzioso sugli earn-out.'),
        prompt: t('Which are common sources of earn-out disputes? Select all that apply.', 'Quali sono cause tipiche di contenzioso sugli earn-out? Seleziona tutte le risposte corrette.'),
        choices: [
          t('The buyer allocating group overheads to the target', 'L’acquirente che alloca costi di gruppo al target'),
          t('Changes in accounting policies after closing', 'Cambi di principi contabili dopo il closing'),
          t('The buyer moving customers to another group entity', 'L’acquirente che sposta clienti su un’altra società del gruppo'),
          t('The seller receiving the upfront price at closing', 'Il venditore che incassa il prezzo upfront al closing')
        ],
        correct: [0, 1, 2],
        explanation: t(
          'Cost allocations, accounting changes and integration decisions all affect the metric the seller is paid on. Receiving the agreed upfront price is uncontroversial.',
          'Allocazioni di costi, cambi contabili e decisioni di integrazione incidono tutte sulla metrica su cui viene pagato il venditore. L’incasso del prezzo upfront concordato non è controverso.'
        )
      }
    ],
    flashcards: [
      { id: 'fc-ma-eo-1', topic: 'ma-earnouts', front: t('What problem does an earn-out solve?', 'Quale problema risolve un earn-out?'), back: t('A valuation gap between buyer and seller on uncertain future performance.', 'Una divergenza di valutazione tra acquirente e venditore sulla performance futura incerta.') },
      { id: 'fc-ma-eo-2', topic: 'ma-earnouts', front: t('Revenue vs EBITDA as earn-out metric?', 'Ricavi vs EBITDA come metrica dell’earn-out?'), back: t('Revenue: simpler, harder to manipulate, ignores costs. EBITDA: closer to value, more exposed to allocations and accounting disputes.', 'Ricavi: più semplici e meno manipolabili, ignorano i costi. EBITDA: più vicino al valore, più esposto ad allocazioni e contestazioni contabili.') },
      { id: 'fc-ma-eo-3', topic: 'ma-earnouts', front: t('IFRS 3: initial measurement of an earn-out?', 'IFRS 3: misurazione iniziale di un earn-out?'), back: t('Fair value at the acquisition date, included in consideration transferred.', 'Fair value alla data di acquisizione, incluso nel corrispettivo trasferito.') },
      { id: 'fc-ma-eo-4', topic: 'ma-earnouts', front: t('Earn-out tied to the seller staying employed?', 'Earn-out legato alla permanenza del venditore?'), back: t('Generally remuneration for post-combination services (expense), not consideration.', 'In genere remunerazione per servizi successivi (costo), non corrispettivo.') }
    ],
    sources: [IFRS3, { label: 'FASB — ASC 805 Business Combinations', url: 'https://fasb.org/' }]
  },

  /* ================================================================== */
  /* M3 — ma-sources-uses-fees                                           */
  /* ================================================================== */
  {
    id: 'ma-sources-uses-fees',
    academyId: 'ma',
    moduleId: 'M3',
    mode: 'deep',
    minutes: 12,
    difficulty: 2,
    reviewed: '2026-10',
    objective: t(
      'Build a sources and uses table, size transaction fees and explain how the financing structure and fees are treated in the accounts.',
      'Costruire una tabella fonti e impieghi, stimare le commissioni dell’operazione e spiegare come struttura finanziaria e commissioni sono rappresentate in bilancio.'
    ),
    screens: [
      {
        type: 'intuition',
        title: t('Every euro spent must come from somewhere', 'Ogni euro speso deve arrivare da qualche parte'),
        body: t(
          'Before modelling returns or EPS, bankers answer a simple question: **how much money does the deal need, and where does it come from?**\n\nThe **uses** are everything paid out at closing: the equity purchase price, refinancing the target’s debt, and fees. The **sources** are the cash on hand, new debt and new equity that fund it. The two columns must be equal — like a balance sheet for the transaction.',
          'Prima di modellare rendimenti o EPS, i banker rispondono a una domanda semplice: **quanti soldi servono al deal e da dove arrivano?**\n\nGli **impieghi** sono tutto ciò che si paga al closing: prezzo dell’equity, rifinanziamento del debito del target e commissioni. Le **fonti** sono cassa disponibile, nuovo debito e nuovo capitale che li finanziano. Le due colonne devono coincidere — come uno stato patrimoniale dell’operazione.'
        )
      },
      {
        type: 'technical',
        title: t('Typical lines', 'Le voci tipiche'),
        body: t(
          '**Uses**\n- Purchase of target equity (offer price × diluted shares)\n- Refinancing of target debt (if change-of-control clauses require repayment or the new structure replaces it)\n- Advisory fees (M&A advisers), legal, accounting, due diligence\n- Financing fees (arrangement/underwriting fees on new loans and bonds)\n\n**Sources**\n- Excess cash on the balance sheet (buyer and, after closing, target)\n- New debt: term loans, revolver draw, bonds, bridge loan\n- New equity: shares issued to target holders or a capital increase; sponsor equity in an LBO\n\nEquity is usually the **plug** that makes sources equal uses.',
          '**Impieghi**\n- Acquisto dell’equity del target (prezzo per azione × azioni diluite)\n- Rifinanziamento del debito del target (se le clausole di change of control ne impongono il rimborso o la nuova struttura lo sostituisce)\n- Commissioni di advisory (advisor M&A), legali, contabili, due diligence\n- Commissioni di finanziamento (arrangement/underwriting fee su nuovi prestiti e bond)\n\n**Fonti**\n- Cassa in eccesso (dell’acquirente e, dopo il closing, del target)\n- Nuovo debito: term loan, utilizzo della revolving, bond, bridge loan\n- Nuovo capitale: azioni emesse agli azionisti del target o aumento di capitale; equity dello sponsor in un LBO\n\nL’equity è di solito la voce di **quadratura** che rende le fonti pari agli impieghi.'
        )
      },
      {
        type: 'formula',
        formulas: [
          { name: t('Balancing identity', 'Identità di quadratura'), expr: 'Total sources = Total uses' },
          { name: t('Equity plug', 'Equity di quadratura'), expr: 'New equity = Total uses − Cash used − New debt' },
          { name: t('Fee sizing', 'Stima delle commissioni'), expr: 'Advisory fee ≈ % × transaction value; Financing fee ≈ % × debt raised' }
        ],
        note: t(
          'Fee percentages are negotiated and vary with deal size and market; treat any % in exercises as an assumption, not a market standard.',
          'Le percentuali delle commissioni sono negoziate e variano con dimensione e mercato; nelle esercitazioni sono ipotesi, non standard di mercato.'
        )
      },
      {
        type: 'example',
        title: t('Alfa S.p.A. buys Beta S.r.l.', 'Alfa S.p.A. acquista Beta S.r.l.'),
        body: t(
          'Alfa pays €600m for Beta’s equity, refinances €200m of Beta debt and pays fees. Financing fees are 2% of the €400m of new debt.',
          'Alfa paga €600m per l’equity di Beta, rifinanzia €200m di debito di Beta e paga le commissioni. Le commissioni di finanziamento sono il 2% dei €400m di nuovo debito.'
        ),
        tables: [
          {
            caption: t('Uses (€m)', 'Impieghi (€m)'),
            headers: [t('Use', 'Impiego'), t('€m', '€m')],
            rows: [
              [t('Purchase of Beta equity', 'Acquisto equity Beta'), '600'],
              [t('Refinance Beta debt', 'Rifinanziamento debito Beta'), '200'],
              [t('Advisory fees', 'Commissioni di advisory'), '12'],
              [t('Financing fees (2% × 400)', 'Commissioni di finanziamento (2% × 400)'), '8'],
              [t('Legal & other', 'Legali e altre'), '5'],
              [t('Total uses', 'Totale impieghi'), '825']
            ],
            totalRows: [5]
          },
          {
            caption: t('Sources (€m)', 'Fonti (€m)'),
            headers: [t('Source', 'Fonte'), t('€m', '€m')],
            rows: [
              [t('Term loan', 'Term loan'), '300'],
              [t('Senior notes', 'Senior notes'), '100'],
              [t('Cash on hand', 'Cassa disponibile'), '125'],
              [t('New equity (plug)', 'Nuovo capitale (quadratura)'), '300'],
              [t('Total sources', 'Totale fonti'), '825']
            ],
            totalRows: [4]
          }
        ]
      },
      { type: 'exercise', questionId: 'ma-su-q1' },
      {
        type: 'technical',
        title: t('How fees hit the accounts', 'Come le commissioni entrano in bilancio'),
        body: t(
          'Under IFRS the three kinds of fees are treated differently:\n\n- **Acquisition-related costs** (M&A advisory, legal, valuation, DD): **expensed** as incurred (IFRS 3) — they are not part of goodwill.\n- **Debt issuance costs**: deducted from the carrying amount of the loan and amortised through the effective interest rate (IFRS 9).\n- **Equity issuance costs**: deducted from equity (IAS 32).\n\nUS GAAP is similar (ASC 805 expenses acquisition costs; debt issuance costs reduce the debt carrying amount).',
          'Secondo gli IFRS le tre tipologie di commissioni seguono trattamenti diversi:\n\n- **Costi correlati all’acquisizione** (advisory M&A, legali, perizie, DD): **spesati** a conto economico quando sostenuti (IFRS 3) — non entrano nell’avviamento.\n- **Costi di emissione del debito**: portati a riduzione del valore contabile del finanziamento e ammortizzati con il tasso di interesse effettivo (IFRS 9).\n- **Costi di emissione di capitale**: portati a riduzione del patrimonio netto (IAS 32).\n\nGli US GAAP sono simili (l’ASC 805 spesa i costi di acquisizione; i costi di emissione del debito riducono il valore contabile del debito).'
        )
      },
      { type: 'exercise', questionId: 'ma-su-q2' },
      {
        type: 'realworld',
        title: t('What the analyst does', 'Cosa fa l’analista'),
        body: t(
          'Sources & uses is the first tab of every merger or LBO model and the first table on a financing slide. The analyst sizes each debt tranche against leverage and coverage constraints, checks the buyer’s pro forma credit metrics with the leveraged finance team, and flexes the mix (more debt vs more equity) to show the impact on EPS, rating and ownership.\n\nIn public deals with cash consideration, **committed financing** must be in place at announcement — often a **bridge loan** later refinanced with bonds or an equity issue.',
          'Fonti e impieghi è il primo foglio di ogni merger model o modello LBO e la prima tabella della slide sul finanziamento. L’analista dimensiona ogni tranche di debito rispetto ai vincoli di leva e copertura, verifica le metriche di credito pro forma con il team di leveraged finance e varia il mix (più debito o più equity) per mostrarne l’effetto su EPS, rating e quote di possesso.\n\nNelle offerte pubbliche in contanti il **finanziamento deve essere garantito** già all’annuncio — spesso con un **bridge loan** poi rifinanziato con bond o aumento di capitale.'
        )
      },
      {
        type: 'interview',
        question: t('Walk me through a sources and uses table for an acquisition.', 'Illustrami una tabella fonti e impieghi per un’acquisizione.'),
        answer: t(
          'Uses are what the deal costs at closing: the equity purchase price, any target debt that must be refinanced, and transaction fees — advisory, legal and financing. Sources are how it is paid: existing cash, new debt tranches sized to a sensible leverage, and new equity, which is usually the plug. Total sources must equal total uses. I would then note the accounting: advisory costs are expensed, debt fees are amortised through the effective interest rate, and equity issuance costs reduce equity.',
          'Gli impieghi sono il costo del deal al closing: prezzo dell’equity, eventuale debito del target da rifinanziare e commissioni — advisory, legali e di finanziamento. Le fonti sono come lo si paga: cassa esistente, tranche di nuovo debito dimensionate su una leva sostenibile e nuovo capitale, di solito la voce di quadratura. Il totale fonti deve essere pari al totale impieghi. Aggiungerei la contabilizzazione: i costi di advisory sono spesati, le commissioni sul debito ammortizzate con il tasso effettivo e i costi di emissione di capitale riducono il patrimonio netto.'
        )
      },
      {
        type: 'mistakes',
        items: [
          t('Using enterprise value as the purchase price line and also adding refinanced debt — double counting the debt.', 'Usare l’enterprise value come prezzo di acquisto e aggiungere anche il debito rifinanziato — contando due volte il debito.'),
          t('Capitalising M&A advisory fees into goodwill; under IFRS 3 they are expensed.', 'Capitalizzare le commissioni di advisory nell’avviamento; secondo l’IFRS 3 sono spesate.'),
          t('Assuming all target cash is usable: some is trapped or needed for operations.', 'Considerare utilizzabile tutta la cassa del target: una parte è vincolata o necessaria alla gestione.')
        ]
      },
      {
        type: 'summary',
        items: [
          t('Uses: equity price, debt refinanced, fees. Sources: cash, new debt, new equity.', 'Impieghi: prezzo dell’equity, debito rifinanziato, commissioni. Fonti: cassa, nuovo debito, nuovo capitale.'),
          t('Sources must equal uses; equity is typically the plug.', 'Fonti e impieghi devono coincidere; l’equity è di solito la quadratura.'),
          t('Advisory fees expensed (IFRS 3); debt fees in effective interest (IFRS 9); equity costs against equity (IAS 32).', 'Advisory spesate (IFRS 3); commissioni sul debito nel tasso effettivo (IFRS 9); costi di emissione a riduzione del PN (IAS 32).')
        ]
      }
    ],
    questions: [
      {
        id: 'ma-su-q1',
        kind: 'grid',
        topic: 'ma-sources-uses',
        difficulty: 2,
        objective: t('Build and balance a sources and uses table.', 'Costruire e quadrare una tabella fonti e impieghi.'),
        prompt: t(
          'Complete the table (€m). Purchase equity 900; refinance target debt 250; advisory fees 15; financing fees 2.5% of new debt; legal & other 5. Sources: term loan 400, bonds 200, cash on hand 150, new equity = plug.',
          'Completa la tabella (€m). Acquisto equity 900; rifinanziamento debito del target 250; advisory 15; commissioni di finanziamento 2,5% del nuovo debito; legali e altre 5. Fonti: term loan 400, bond 200, cassa 150, nuovo capitale = quadratura.'
        ),
        columns: [t('Line', 'Voce'), t('€m', '€m')],
        rows: [
          { label: t('Financing fees', 'Commissioni di finanziamento'), cells: [{ answer: 15, verify: { fn: 'product', args: [600, 0.025] } }] },
          { label: t('Total uses', 'Totale impieghi'), cells: [{ answer: 1185, verify: { fn: 'sum', args: [900, 250, 15, 15, 5] } }] },
          { label: t('Debt + cash sources', 'Fonti da debito + cassa'), cells: [{ answer: 750, verify: { fn: 'sum', args: [400, 200, 150] } }] },
          { label: t('New equity (plug)', 'Nuovo capitale (quadratura)'), cells: [{ answer: 435, verify: { fn: 'diff', args: [1185, 750] } }] }
        ],
        unit: '€m',
        explanation: t(
          'Financing fees = 2.5% × (400 + 200) = 15. Uses = 900 + 250 + 15 + 15 + 5 = 1,185. Debt and cash = 750, so equity plug = 435. Charging the fee on the purchase price instead of on the debt raised is a common mistake.',
          'Commissioni di finanziamento = 2,5% × (400 + 200) = 15. Impieghi = 900 + 250 + 15 + 15 + 5 = 1.185. Debito e cassa = 750, quindi quadratura equity = 435. Calcolare la commissione sul prezzo anziché sul debito raccolto è un errore frequente.'
        )
      },
      {
        id: 'ma-su-q2',
        kind: 'mcq',
        topic: 'ma-sources-uses',
        difficulty: 2,
        objective: t('Apply IFRS treatment of transaction costs.', 'Applicare il trattamento IFRS dei costi di transazione.'),
        prompt: t(
          'Under IFRS, how are the M&A advisory and legal fees paid by the acquirer in a business combination treated?',
          'Secondo gli IFRS, come si trattano le commissioni di advisory M&A e legali pagate dall’acquirente in un’aggregazione aziendale?'
        ),
        choices: [
          t('Added to goodwill', 'Aggiunte all’avviamento'),
          t('Expensed in profit or loss as incurred', 'Spesate a conto economico quando sostenute'),
          t('Deducted from the new debt and amortised', 'Dedotte dal nuovo debito e ammortizzate'),
          t('Deducted from equity', 'Portate a riduzione del patrimonio netto')
        ],
        correct: 1,
        explanation: t(
          'IFRS 3 requires acquisition-related costs to be expensed (except costs to issue debt or equity, which follow IFRS 9 and IAS 32). Capitalising them into goodwill was the pre-2008 approach under the old IFRS 3.',
          'L’IFRS 3 impone di spesare i costi correlati all’acquisizione (salvo i costi di emissione di debito o capitale, che seguono IFRS 9 e IAS 32). La capitalizzazione nell’avviamento era l’approccio della vecchia versione dell’IFRS 3.'
        )
      },
      {
        id: 'ma-su-q3',
        kind: 'numeric',
        topic: 'ma-sources-uses',
        difficulty: 1,
        objective: t('Size an advisory fee.', 'Stimare una commissione di advisory.'),
        prompt: t(
          'The sell-side adviser’s success fee is 1.2% of a €1,500m transaction value. What is the fee (€m)?',
          'La success fee dell’advisor sell-side è l’1,2% di un valore dell’operazione di €1.500m. A quanto ammonta (€m)?'
        ),
        answer: 18,
        unit: '€m',
        verify: { fn: 'product', args: [1500, 0.012] },
        explanation: t('1.2% × 1,500 = €18m. (Fee scales are negotiated; real mandates often add retainers or a discretionary component.)', '1,2% × 1.500 = €18m. (Le percentuali sono negoziate; i mandati reali prevedono spesso retainer o una componente discrezionale.)')
      },
      {
        id: 'ma-su-q4',
        kind: 'multi',
        topic: 'ma-sources-uses',
        difficulty: 2,
        objective: t('Classify items as sources or uses.', 'Classificare le voci tra fonti e impieghi.'),
        prompt: t('Which of these are USES of funds in an acquisition? Select all that apply.', 'Quali di queste sono IMPIEGHI in un’acquisizione? Seleziona tutte le risposte corrette.'),
        choices: [
          t('Repayment of the target’s existing bank debt', 'Rimborso del debito bancario esistente del target'),
          t('Drawdown of a bridge loan', 'Utilizzo di un bridge loan'),
          t('Underwriting fees on new bonds', 'Commissioni di underwriting sui nuovi bond'),
          t('Purchase of the target’s shares', 'Acquisto delle azioni del target'),
          t('Rights issue proceeds', 'Proventi di un aumento di capitale in opzione')
        ],
        correct: [0, 2, 3],
        explanation: t(
          'Refinancing debt, financing fees and the equity purchase are uses. A bridge drawdown and rights issue proceeds are sources.',
          'Rifinanziamento del debito, commissioni di finanziamento e acquisto dell’equity sono impieghi. Utilizzo del bridge e proventi dell’aumento di capitale sono fonti.'
        )
      }
    ],
    flashcards: [
      { id: 'fc-ma-su-1', topic: 'ma-sources-uses', front: t('Three typical uses of funds?', 'Tre impieghi tipici?'), back: t('Equity purchase price, refinancing of target debt, transaction fees.', 'Prezzo dell’equity, rifinanziamento del debito del target, commissioni.') },
      { id: 'fc-ma-su-2', topic: 'ma-sources-uses', front: t('IFRS treatment of debt issuance costs?', 'Trattamento IFRS dei costi di emissione del debito?'), back: t('Deducted from the loan’s carrying amount and amortised via the effective interest rate (IFRS 9).', 'Portati a riduzione del valore contabile del finanziamento e ammortizzati col tasso effettivo (IFRS 9).') },
      { id: 'fc-ma-su-3', topic: 'ma-sources-uses', front: t('What is a bridge loan in M&A?', 'Cos’è un bridge loan nell’M&A?'), back: t('Short-term committed financing that guarantees funds at announcement, later refinanced by bonds, term loans or equity.', 'Finanziamento a breve garantito che assicura i fondi all’annuncio, poi rifinanziato con bond, term loan o capitale.') },
      { id: 'fc-ma-su-4', topic: 'ma-sources-uses', front: t('Which line is usually the plug in sources & uses?', 'Quale voce è di solito la quadratura in fonti e impieghi?'), back: t('New equity (sponsor equity in an LBO).', 'Il nuovo capitale (equity dello sponsor in un LBO).') }
    ],
    sources: [
      IFRS3,
      { label: 'IFRS 9 Financial Instruments (IFRS Foundation)', url: 'https://www.ifrs.org/issued-standards/list-of-standards/ifrs-9-financial-instruments/' },
      { label: 'IAS 32 Financial Instruments: Presentation (IFRS Foundation)', url: 'https://www.ifrs.org/issued-standards/list-of-standards/ias-32-financial-instruments-presentation/' }
    ]
  }
  ,
  /* ================================================================== */
  /* M4 — ma-accretion-dilution                                          */
  /* ================================================================== */
  {
    id: 'ma-accretion-dilution',
    academyId: 'ma',
    moduleId: 'M4',
    mode: 'deep',
    minutes: 18,
    difficulty: 3,
    reviewed: '2026-10',
    objective: t(
      'Compute pro forma EPS and accretion/dilution for cash, debt and stock financing, apply the P/E rule of thumb and solve for breakeven synergies.',
      'Calcolare EPS pro forma e accrescimento/diluizione con finanziamento in cassa, debito e azioni, applicare la regola del P/E e ricavare le sinergie di pareggio.'
    ),
    screens: [
      {
        type: 'intuition',
        title: t('Does the deal make each share earn more?', 'Il deal fa guadagnare di più ogni azione?'),
        body: t(
          'A public acquirer’s board always asks: after the deal, will our **earnings per share** be higher (**accretive**) or lower (**dilutive**)?\n\nThe logic is a race between two things. The buyer **gains** the target’s profits (plus synergies). It **pays** for them with a cost: interest on new debt, interest no longer earned on cash, or new shares that split earnings among more owners. If what you gain beats what you pay, EPS rises.',
          'Il CdA di un acquirente quotato chiede sempre: dopo il deal, l’**utile per azione** sarà più alto (**accrescitivo**) o più basso (**diluitivo**)?\n\nLa logica è una gara tra due elementi. L’acquirente **guadagna** gli utili del target (più le sinergie). Li **paga** con un costo: interessi sul nuovo debito, interessi non più percepiti sulla cassa, o nuove azioni che dividono l’utile tra più soci. Se ciò che si guadagna supera ciò che si paga, l’EPS sale.'
        )
      },
      {
        type: 'technical',
        title: t('Pro forma EPS mechanics', 'La meccanica dell’EPS pro forma'),
        body: t(
          'Pro forma net income = acquirer NI + target NI\n- − after-tax interest on new debt\n- − after-tax interest forgone on cash used\n- + after-tax synergies\n- − after-tax new D&A/amortisation from PPA write-ups\n- (and, in fuller models, − amortised financing fees)\n\nPro forma shares = acquirer shares + new shares issued.\n\nPro forma EPS = pro forma NI / pro forma shares, compared with the acquirer’s standalone EPS. Analysts usually show it for the next two forecast years, with and without synergies.',
          'Utile netto pro forma = utile acquirente + utile target\n- − interessi netti d’imposta sul nuovo debito\n- − interessi netti d’imposta persi sulla cassa utilizzata\n- + sinergie nette d’imposta\n- − nuovi ammortamenti netti d’imposta dalle rivalutazioni della PPA\n- (e, nei modelli completi, − commissioni di finanziamento ammortizzate)\n\nAzioni pro forma = azioni dell’acquirente + nuove azioni emesse.\n\nEPS pro forma = utile pro forma / azioni pro forma, confrontato con l’EPS stand-alone dell’acquirente. Gli analisti lo mostrano di solito per i due anni di previsione successivi, con e senza sinergie.'
        )
      },
      {
        type: 'formula',
        formulas: [
          {
            name: t('Accretion / (dilution)', 'Accrescimento / (diluizione)'),
            expr: 'Accretion % = Pro forma EPS / Standalone EPS − 1'
          },
          {
            name: t('After-tax cost of each source', 'Costo netto d’imposta di ogni fonte'),
            expr: 'Debt: Rd × (1 − t)   Cash: yield × (1 − t)   Stock: 1 / Acquirer P/E (earnings yield)'
          },
          {
            name: t('All-stock rule of thumb', 'Regola empirica per deal interamente in azioni'),
            expr: 'Accretive (pre-synergies) if Acquirer P/E > Target purchase P/E',
            vars: [{ sym: 'Target purchase P/E', desc: t('Price paid for equity / target net income', 'Prezzo pagato per l’equity / utile del target') }]
          }
        ],
        note: t(
          'General test: the deal is accretive if the target’s earnings yield at the purchase price (NI / price) exceeds the weighted after-tax cost of the funding mix.',
          'Test generale: il deal è accrescitivo se l’earnings yield del target al prezzo pagato (utile / prezzo) supera il costo medio netto d’imposta del mix di finanziamento.'
        )
      },
      {
        type: 'example',
        title: t('BuyerCo acquires TargetCo for €900m', 'BuyerCo acquisisce TargetCo per €900m'),
        body: t(
          'BuyerCo: NI €500m, 250m shares (EPS €2.00), price €40 (P/E 20x). TargetCo: NI €60m, bought for €900m equity (purchase P/E 15x, earnings yield 6.7%). Tax 25%; new debt at 6%; cash earns 2%. No synergies or PPA.',
          'BuyerCo: utile €500m, 250m azioni (EPS €2,00), prezzo €40 (P/E 20x). TargetCo: utile €60m, acquistata per €900m di equity (P/E pagato 15x, earnings yield 6,7%). Aliquota 25%; nuovo debito al 6%; la cassa rende il 2%. Niente sinergie né PPA.'
        ),
        table: {
          headers: [t('Funding', 'Finanziamento'), t('After-tax cost', 'Costo netto'), t('PF NI (€m)', 'Utile PF (€m)'), t('PF shares (m)', 'Azioni PF (m)'), t('PF EPS (€)', 'EPS PF (€)'), t('Acc./(dil.)', 'Acc./(dil.)')],
          rows: [
            [t('100% stock', '100% azioni'), '5.0%', '560.0', '272.5', '2.055', '+2.8%'],
            [t('100% debt', '100% debito'), '4.5%', '519.5', '250.0', '2.078', '+3.9%'],
            [t('100% cash', '100% cassa'), '1.5%', '546.5', '250.0', '2.186', '+9.3%']
          ]
        }
      },
      { type: 'exercise', questionId: 'ma-ad-q1' },
      { type: 'exercise', questionId: 'ma-ad-q2' },
      {
        type: 'technical',
        title: t('When stock becomes dilutive', 'Quando le azioni diventano diluitive'),
        body: t(
          'Now BuyerCo pays €1,500m (25x P/E) in stock. It issues 37.5m shares; pro forma EPS = 560 / 287.5 = €1.948, **−2.6%** dilutive. The P/E test agrees: 20x < 25x.\n\n**Breakeven synergies**: to keep EPS at €2.00 BuyerCo needs NI of 2.00 × 287.5 = €575m, i.e. €15m after tax, or **€20m pre-tax** (15 / 0.75).\n\nThis is the number the analyst puts in front of the board: "we need at least €20m of run-rate synergies for the deal not to dilute".',
          'Ora BuyerCo paga €1.500m (P/E 25x) in azioni. Emette 37,5m di azioni; EPS pro forma = 560 / 287,5 = €1,948, **−2,6%** diluitivo. Il test del P/E conferma: 20x < 25x.\n\n**Sinergie di pareggio**: per mantenere l’EPS a €2,00 BuyerCo ha bisogno di un utile di 2,00 × 287,5 = €575m, cioè €15m netti, ovvero **€20m ante imposte** (15 / 0,75).\n\nÈ il numero che l’analista porta al CdA: "servono almeno €20m di sinergie a regime perché il deal non sia diluitivo".'
        )
      },
      { type: 'exercise', questionId: 'ma-ad-q3' },
      { type: 'exercise', questionId: 'ma-ad-q4' },
      {
        type: 'realworld',
        title: t('Building the merger model', 'Costruire il merger model'),
        body: t(
          'The analyst builds the **merger model**: standalone projections for both companies, sources & uses, purchase price allocation (new intangibles, D&A and the DTL), financing assumptions, synergies and pro forma EPS, plus pro forma credit metrics and ownership.\n\nOutputs are **sensitivity tables** — accretion/dilution vs offer price and % stock, or vs synergies — and a **contribution analysis**. Remember the limits: EPS accretion is not value creation. A deal funded with cheap debt can be accretive yet destroy value if the price exceeds what the target plus synergies are worth.',
          'L’analista costruisce il **merger model**: proiezioni stand-alone delle due società, fonti e impieghi, allocazione del prezzo (nuovi intangibili, ammortamenti e DTL), ipotesi di finanziamento, sinergie ed EPS pro forma, più metriche di credito e quote pro forma.\n\nGli output sono **tabelle di sensitività** — accrescimento/diluizione al variare di prezzo e % in azioni, o delle sinergie — e una **contribution analysis**. Attenzione ai limiti: l’accrescimento dell’EPS non è creazione di valore. Un deal finanziato con debito a basso costo può essere accrescitivo e distruggere valore se il prezzo supera il valore del target più le sinergie.'
        )
      },
      {
        type: 'interview',
        question: t('A company with a P/E of 12x buys one with a P/E of 18x in an all-stock deal. Accretive or dilutive?', 'Una società con P/E 12x ne acquista una con P/E 18x interamente in azioni. Accrescitivo o diluitivo?'),
        answer: t(
          'Dilutive, before synergies. The cost of stock is the acquirer’s earnings yield, 1/12 ≈ 8.3%, while the target’s earnings yield at the price paid is 1/18 ≈ 5.6% — and the 18x will be even higher once a premium is paid. The buyer gives up more earnings per share than it acquires. It could still be justified by synergies; I’d compute the pre-tax synergies needed to break even, and check whether a cash/debt mix would be accretive given the after-tax cost of debt.',
          'Diluitivo, prima delle sinergie. Il costo delle azioni è l’earnings yield dell’acquirente, 1/12 ≈ 8,3%, mentre l’earnings yield del target al prezzo pagato è 1/18 ≈ 5,6% — e il 18x salirà ancora con il premio. L’acquirente cede più utile per azione di quanto ne acquisisce. Il deal può comunque giustificarsi con le sinergie; calcolerei le sinergie ante imposte di pareggio e verificherei se un mix cassa/debito sarebbe accrescitivo, dato il costo netto del debito.'
        )
      },
      {
        type: 'mistakes',
        items: [
          t('Using pre-tax interest: interest and synergies must be tax-effected.', 'Usare interessi ante imposte: interessi e sinergie vanno considerati al netto delle imposte.'),
          t('Using the target’s current P/E instead of the purchase P/E including the premium.', 'Usare il P/E corrente del target invece del P/E pagato, premio incluso.'),
          t('Equating accretion with value creation.', 'Confondere l’accrescimento con la creazione di valore.'),
          t('Forgetting PPA amortisation, which can turn a marginally accretive deal dilutive.', 'Dimenticare gli ammortamenti da PPA, che possono rendere diluitivo un deal di poco accrescitivo.')
        ]
      },
      {
        type: 'summary',
        items: [
          t('PF EPS = (NI_A + NI_T − after-tax financing cost + after-tax synergies − after-tax PPA D&A) / (shares + new shares).', 'EPS PF = (Utile_A + Utile_T − costo netto del finanziamento + sinergie nette − ammortamenti PPA netti) / (azioni + nuove azioni).'),
          t('Cheapest to most expensive (typically): cash < debt < stock.', 'Dal meno al più costoso (di norma): cassa < debito < azioni.'),
          t('All-stock: accretive if acquirer P/E > target purchase P/E (pre-synergies).', 'Tutto in azioni: accrescitivo se P/E acquirente > P/E pagato per il target (prima delle sinergie).'),
          t('Breakeven synergies = NI shortfall / (1 − t).', 'Sinergie di pareggio = deficit di utile / (1 − t).')
        ]
      }
    ],
    questions: [
      {
        id: 'ma-ad-q1',
        kind: 'numeric',
        topic: 'ma-accretion-dilution',
        difficulty: 2,
        objective: t('Compute pro forma EPS in an all-stock deal.', 'Calcolare l’EPS pro forma in un deal interamente in azioni.'),
        prompt: t(
          'BuyerCo: NI €500m, 250m shares, share price €40. It buys TargetCo (NI €60m) for €900m paid 100% in new BuyerCo shares at €40. No synergies or PPA. What is pro forma EPS (€)?',
          'BuyerCo: utile €500m, 250m azioni, prezzo €40. Acquista TargetCo (utile €60m) per €900m pagati al 100% in nuove azioni BuyerCo a €40. Niente sinergie né PPA. Qual è l’EPS pro forma (€)?'
        ),
        answer: 2.055,
        unit: '€',
        tolerance: { abs: 0.002 },
        verify: {
          fn: 'accretionDilution',
          args: [{ acquirerNetIncome: 500, acquirerShares: 250, targetNetIncome: 60, purchaseEquityValue: 900, pctStock: 1, acquirerSharePrice: 40, costOfDebt: 0.06, pctDebt: 0, foregoneInterestOnCash: 0.02, pctCash: 0, taxRate: 0.25 }],
          pick: 'proFormaEPS'
        },
        steps: [
          t('New shares = 900 / 40 = 22.5m', 'Nuove azioni = 900 / 40 = 22,5m'),
          t('PF NI = 500 + 60 = 560', 'Utile PF = 500 + 60 = 560'),
          t('PF EPS = 560 / 272.5 = €2.055 (vs €2.00 standalone: +2.8%)', 'EPS PF = 560 / 272,5 = €2,055 (vs €2,00 stand-alone: +2,8%)')
        ],
        explanation: t(
          'Accretive because BuyerCo’s P/E (20x) exceeds the purchase P/E (15x). Forgetting to add the 22.5m new shares would give €2.24 — a large overstatement.',
          'Accrescitivo perché il P/E di BuyerCo (20x) supera il P/E pagato (15x). Dimenticare le 22,5m di nuove azioni darebbe €2,24 — una forte sovrastima.'
        )
      },
      {
        id: 'ma-ad-q2',
        kind: 'numeric',
        topic: 'ma-accretion-dilution',
        difficulty: 3,
        objective: t('Compute accretion for a debt-financed deal.', 'Calcolare l’accrescimento di un deal finanziato a debito.'),
        prompt: t(
          'Same deal (BuyerCo NI €500m, 250m shares; TargetCo NI €60m; price €900m) but 100% financed with new debt at 6% pre-tax; tax rate 25%. What is the accretion? Enter it as a decimal (e.g. 0.05 for +5%).',
          'Stesso deal (BuyerCo utile €500m, 250m azioni; TargetCo utile €60m; prezzo €900m) ma finanziato al 100% con nuovo debito al 6% ante imposte; aliquota 25%. Qual è l’accrescimento? Inseriscilo in decimali (es. 0,05 per +5%).'
        ),
        answer: 0.039,
        tolerance: { abs: 0.0005 },
        verify: {
          fn: 'accretionDilution',
          args: [{ acquirerNetIncome: 500, acquirerShares: 250, targetNetIncome: 60, purchaseEquityValue: 900, pctStock: 0, acquirerSharePrice: 40, costOfDebt: 0.06, pctDebt: 1, foregoneInterestOnCash: 0.02, pctCash: 0, taxRate: 0.25 }],
          pick: 'accretionPct'
        },
        steps: [
          t('After-tax interest = 900 × 6% × (1 − 25%) = 40.5', 'Interessi netti = 900 × 6% × (1 − 25%) = 40,5'),
          t('PF NI = 500 + 60 − 40.5 = 519.5; shares unchanged at 250m', 'Utile PF = 500 + 60 − 40,5 = 519,5; azioni invariate a 250m'),
          t('PF EPS = 2.078 → 2.078 / 2.00 − 1 = 0.039 (+3.9%)', 'EPS PF = 2,078 → 2,078 / 2,00 − 1 = 0,039 (+3,9%)')
        ],
        explanation: t(
          'The after-tax cost of debt (4.5%) is below the target’s earnings yield at the price paid (60/900 = 6.7%), so the deal is accretive. Using pre-tax interest (54) would give only 0.012.',
          'Il costo netto del debito (4,5%) è inferiore all’earnings yield del target al prezzo pagato (60/900 = 6,7%), quindi il deal è accrescitivo. Usare gli interessi ante imposte (54) darebbe solo 0,012.'
        )
      },
      {
        id: 'ma-ad-q3',
        kind: 'numeric',
        topic: 'ma-accretion-dilution',
        difficulty: 2,
        objective: t('Apply the P/E rule of thumb.', 'Applicare la regola del P/E.'),
        prompt: t(
          'In an all-stock deal the acquirer trades at 20x earnings and pays 25x the target’s earnings. Compute acquirer P/E minus target purchase P/E (x). A negative result means the deal is dilutive before synergies.',
          'In un deal interamente in azioni l’acquirente quota 20x gli utili e paga 25x gli utili del target. Calcola P/E dell’acquirente meno P/E pagato per il target (x). Un risultato negativo indica diluizione prima delle sinergie.'
        ),
        answer: -5,
        unit: 'x',
        verify: { fn: 'peDifferential', args: [20, 25] },
        explanation: t(
          '20 − 25 = −5x → dilutive. The acquirer issues stock with an earnings yield of 5% to buy earnings yielding 4%. The rule ignores synergies, PPA amortisation and transaction costs.',
          '20 − 25 = −5x → diluitivo. L’acquirente emette azioni con earnings yield del 5% per comprare utili che rendono il 4%. La regola ignora sinergie, ammortamenti da PPA e costi di transazione.'
        )
      },
      {
        id: 'ma-ad-q4',
        kind: 'numeric',
        topic: 'ma-accretion-dilution',
        difficulty: 3,
        objective: t('Solve for breakeven synergies.', 'Ricavare le sinergie di pareggio.'),
        prompt: t(
          'BuyerCo (NI €500m, 250m shares, €40) buys TargetCo (NI €60m) for €1,500m, all in stock at €40. Tax rate 25%. What pre-tax synergies make the deal EPS-neutral (€m)?',
          'BuyerCo (utile €500m, 250m azioni, €40) acquista TargetCo (utile €60m) per €1.500m, interamente in azioni a €40. Aliquota 25%. Quali sinergie ante imposte rendono il deal neutrale sull’EPS (€m)?'
        ),
        answer: 20,
        unit: '€m',
        tolerance: { abs: 0.1 },
        verify: { fn: 'ratio', args: [15, 0.75] },
        steps: [
          t('New shares = 1,500 / 40 = 37.5m; PF shares = 287.5m', 'Nuove azioni = 1.500 / 40 = 37,5m; azioni PF = 287,5m'),
          t('Required NI = 2.00 × 287.5 = 575; current PF NI = 560', 'Utile necessario = 2,00 × 287,5 = 575; utile PF attuale = 560'),
          t('After-tax synergies = 15 → pre-tax = 15 / (1 − 25%) = 20', 'Sinergie nette = 15 → ante imposte = 15 / (1 − 25%) = 20')
        ],
        explanation: t(
          '€20m pre-tax. Answering €15m forgets that synergies are taxed. Check: with €20m of synergies, PF NI = 560 + 15 = 575 and EPS = €2.00.',
          '€20m ante imposte. Rispondere €15m dimentica che le sinergie sono tassate. Verifica: con €20m di sinergie, utile PF = 560 + 15 = 575 ed EPS = €2,00.'
        )
      },
      {
        id: 'ma-ad-q5',
        kind: 'numeric',
        topic: 'ma-accretion-dilution',
        difficulty: 2,
        objective: t('Compute shares issued in a mixed deal.', 'Calcolare le azioni emesse in un deal misto.'),
        prompt: t(
          'An acquirer pays €1,500m for a target: 60% in new shares at €40 and 40% with new debt. How many new shares are issued (m)?',
          'Un acquirente paga €1.500m per un target: 60% in nuove azioni a €40 e 40% con nuovo debito. Quante nuove azioni emette (m)?'
        ),
        answer: 22.5,
        unit: 'm',
        verify: {
          fn: 'accretionDilution',
          args: [{ acquirerNetIncome: 500, acquirerShares: 250, targetNetIncome: 60, purchaseEquityValue: 1500, pctStock: 0.6, acquirerSharePrice: 40, costOfDebt: 0.06, pctDebt: 0.4, foregoneInterestOnCash: 0.02, pctCash: 0, taxRate: 0.25 }],
          pick: 'newShares'
        },
        explanation: t(
          '1,500 × 60% / 40 = 22.5m shares. Dividing the full €1,500m by €40 (37.5m) ignores the 40% funded with debt.',
          '1.500 × 60% / 40 = 22,5m di azioni. Dividere l’intero €1.500m per €40 (37,5m) ignora il 40% finanziato a debito.'
        )
      },
      {
        id: 'ma-ad-q6',
        kind: 'mcq',
        topic: 'ma-accretion-dilution',
        difficulty: 2,
        objective: t('Rank financing sources by after-tax cost.', 'Ordinare le fonti di finanziamento per costo netto.'),
        prompt: t(
          'Acquirer P/E 16x, new debt at 7% pre-tax, cash earning 3%, tax 25%. Which ranking from cheapest to most expensive is correct?',
          'P/E dell’acquirente 16x, nuovo debito al 7% ante imposte, cassa che rende il 3%, aliquota 25%. Quale ordine dal meno al più costoso è corretto?'
        ),
        choices: [
          t('Debt (5.25%) < Cash (2.25%) < Stock (6.25%)', 'Debito (5,25%) < Cassa (2,25%) < Azioni (6,25%)'),
          t('Stock (6.25%) < Debt (5.25%) < Cash (2.25%)', 'Azioni (6,25%) < Debito (5,25%) < Cassa (2,25%)'),
          t('Cash (2.25%) < Debt (5.25%) < Stock (6.25%)', 'Cassa (2,25%) < Debito (5,25%) < Azioni (6,25%)'),
          t('Cash (3%) < Stock (6.25%) < Debt (7%)', 'Cassa (3%) < Azioni (6,25%) < Debito (7%)')
        ],
        correct: 2,
        explanation: t(
          'Cash: 3% × 0.75 = 2.25%. Debt: 7% × 0.75 = 5.25%. Stock: 1/16 = 6.25%. The last option forgets the tax shield on interest.',
          'Cassa: 3% × 0,75 = 2,25%. Debito: 7% × 0,75 = 5,25%. Azioni: 1/16 = 6,25%. L’ultima opzione dimentica lo scudo fiscale sugli interessi.'
        )
      }
    ],
    flashcards: [
      { id: 'fc-ma-ad-1', topic: 'ma-accretion-dilution', front: t('Cost of stock in accretion/dilution?', 'Costo delle azioni nell’analisi di accrescimento/diluizione?'), back: t('The acquirer’s earnings yield = 1 / P/E.', 'L’earnings yield dell’acquirente = 1 / P/E.') },
      { id: 'fc-ma-ad-2', topic: 'ma-accretion-dilution', front: t('All-stock P/E rule?', 'Regola del P/E nei deal in azioni?'), back: t('Accretive (pre-synergies) if acquirer P/E > target purchase P/E.', 'Accrescitivo (prima delle sinergie) se P/E acquirente > P/E pagato per il target.') },
      { id: 'fc-ma-ad-3', topic: 'ma-accretion-dilution', front: t('Breakeven synergies formula?', 'Formula delle sinergie di pareggio?'), back: t('(Standalone EPS × PF shares − PF NI before synergies) / (1 − t).', '(EPS stand-alone × azioni PF − utile PF prima delle sinergie) / (1 − t).') },
      { id: 'fc-ma-ad-4', topic: 'ma-accretion-dilution', front: t('Is an accretive deal always value-creating?', 'Un deal accrescitivo crea sempre valore?'), back: t('No — EPS ignores the cost of equity and risk; overpaying can be accretive and still destroy value.', 'No — l’EPS ignora costo e rischio del capitale; un deal pagato troppo può essere accrescitivo e distruggere valore.') },
      { id: 'fc-ma-ad-5', topic: 'ma-accretion-dilution', front: t('Pre-tax interest 6%, tax 25%: after-tax cost of debt?', 'Interessi 6% ante imposte, aliquota 25%: costo netto del debito?'), back: t('4.5%', '4,5%') }
    ]
  },

  /* ================================================================== */
  /* M4 — ma-synergy-modelling                                           */
  /* ================================================================== */
  {
    id: 'ma-synergy-modelling',
    academyId: 'ma',
    moduleId: 'M4',
    mode: 'deep',
    minutes: 12,
    difficulty: 3,
    reviewed: '2026-10',
    objective: t(
      'Model synergies with realistic phasing, costs to achieve and dis-synergies, and value them against the premium paid.',
      'Modellare le sinergie con phasing realistico, costi di realizzazione e dis-sinergie, e valutarle rispetto al premio pagato.'
    ),
    screens: [
      {
        type: 'intuition',
        title: t('The premium is a bet on synergies', 'Il premio è una scommessa sulle sinergie'),
        body: t(
          'If a buyer pays a 30% premium, the target’s shareholders get that value on day one. The buyer only earns it back if the combination creates something neither company could alone: **synergies**.\n\nBut synergies arrive slowly, cost money to achieve, and some never materialise. Modelling them honestly — timing, cost and risk — is how you tell a good deal from an expensive one.',
          'Se l’acquirente paga un premio del 30%, gli azionisti del target incassano quel valore il primo giorno. L’acquirente lo recupera solo se l’unione crea qualcosa che nessuna delle due società potrebbe fare da sola: le **sinergie**.\n\nMa le sinergie arrivano lentamente, costano per essere realizzate e alcune non si concretizzano mai. Modellarle con onestà — tempi, costi e rischi — è ciò che distingue un buon deal da uno caro.'
        )
      },
      {
        type: 'technical',
        title: t('Types and building blocks', 'Tipologie e componenti'),
        body: t(
          '- **Cost synergies**: procurement, overlapping headcount, sites, IT, SG&A. Most bankable — the buyer controls them.\n- **Revenue synergies**: cross-selling, pricing, distribution. Less certain; markets and lenders discount them heavily.\n- **Financial synergies**: lower cost of funding, tax optimisation (treat with care).\n\nModel components:\n- **Run-rate**: full annual synergy once achieved.\n- **Phasing**: % of run-rate realised each year (e.g. 25% / 75% / 100%).\n- **Costs to achieve (CTA)**: one-off restructuring, severance, IT migration — often of the order of 1–1.5x run-rate cost synergies (an assumption; deal-specific).\n- **Dis-synergies**: lost customers, key-staff attrition, antitrust remedies.',
          '- **Sinergie di costo**: acquisti, personale sovrapposto, stabilimenti, IT, costi generali. Le più affidabili — le controlla l’acquirente.\n- **Sinergie di ricavo**: cross-selling, prezzi, distribuzione. Meno certe; mercato e finanziatori le scontano molto.\n- **Sinergie finanziarie**: minor costo del funding, ottimizzazione fiscale (da trattare con cautela).\n\nComponenti del modello:\n- **Run-rate**: sinergia annua piena una volta raggiunta.\n- **Phasing**: % del run-rate realizzata ogni anno (es. 25% / 75% / 100%).\n- **Costi di realizzazione (CTA)**: ristrutturazioni, incentivi all’esodo, migrazione IT — spesso nell’ordine di 1–1,5x le sinergie di costo a regime (ipotesi, specifica per deal).\n- **Dis-sinergie**: clienti persi, uscita di persone chiave, rimedi antitrust.'
        )
      },
      {
        type: 'formula',
        formulas: [
          {
            name: t('Value of synergies (perpetuity)', 'Valore delle sinergie (rendita perpetua)'),
            expr: 'Value = Run-rate × (1 − t) / (r − g) − One-off costs to achieve',
            vars: [
              { sym: 'r', desc: t('Discount rate (often WACC, higher for revenue synergies)', 'Tasso di sconto (spesso WACC, più alto per le sinergie di ricavo)') },
              { sym: 'g', desc: t('Long-term growth of synergies', 'Crescita di lungo periodo delle sinergie') }
            ]
          },
          {
            name: t('Synergies realised in year n', 'Sinergie realizzate nell’anno n'),
            expr: 'Synergies_n = Run-rate × Phasing %_n'
          },
          {
            name: t('Value test', 'Test di valore'),
            expr: 'Value created for acquirer = Value of synergies − Premium paid'
          }
        ],
        note: t(
          'The simple perpetuity formula ignores the phase-in; a full model discounts each year’s phased synergies and CTA explicitly.',
          'La formula semplice della perpetuità ignora il phase-in; un modello completo attualizza esplicitamente sinergie e CTA anno per anno.'
        )
      },
      {
        type: 'example',
        title: t('€40m of cost synergies', '€40m di sinergie di costo'),
        body: t(
          'Run-rate pre-tax cost synergies €40m, phased 25% / 75% / 100%; CTA €50m spent 60% in year 1 and 40% in year 2. Tax 25%, discount rate 9%, no growth. Shortcut value: 40 × 0.75 / 0.09 − 50 = **€283m**.',
          'Sinergie di costo a regime €40m ante imposte, phasing 25% / 75% / 100%; CTA €50m sostenuti per il 60% nell’anno 1 e il 40% nell’anno 2. Aliquota 25%, tasso di sconto 9%, crescita nulla. Valore con la scorciatoia: 40 × 0,75 / 0,09 − 50 = **€283m**.'
        ),
        table: {
          headers: [t('€m (pre-tax)', '€m (ante imposte)'), t('Year 1', 'Anno 1'), t('Year 2', 'Anno 2'), t('Year 3', 'Anno 3')],
          rows: [
            [t('Synergies realised', 'Sinergie realizzate'), '10', '30', '40'],
            [t('Costs to achieve', 'Costi di realizzazione'), '(30)', '(20)', '0'],
            [t('Net impact', 'Impatto netto'), '(20)', '10', '40']
          ],
          totalRows: [2]
        }
      },
      { type: 'exercise', questionId: 'ma-synm-q1' },
      { type: 'exercise', questionId: 'ma-synm-q2' },
      {
        type: 'realworld',
        title: t('How banks and boards use it', 'Come lo usano banche e CdA'),
        body: t(
          'Announced synergy targets are a public commitment: investors track them quarter by quarter. Buyers typically announce cost synergies with a timeline (e.g. "full run-rate by year 3") and CTA, and are cautious about revenue synergies.\n\nThe analyst builds the synergy schedule from management’s bottom-up estimates (by function and site), applies phasing and CTA, runs the accretion/dilution with and without synergies, and computes the **synergy value vs premium** — the slide that answers "are we paying away all the synergies to the seller?"',
          'I target di sinergie annunciati sono un impegno pubblico: gli investitori li monitorano trimestre per trimestre. Gli acquirenti annunciano di solito sinergie di costo con una tempistica (es. "pieno run-rate entro il terzo anno") e i CTA, e sono prudenti sulle sinergie di ricavo.\n\nL’analista costruisce il piano delle sinergie dalle stime bottom-up del management (per funzione e sito), applica phasing e CTA, calcola accrescimento/diluizione con e senza sinergie e il **valore delle sinergie vs premio** — la slide che risponde a "stiamo regalando tutte le sinergie al venditore?"'
        )
      },
      { type: 'exercise', questionId: 'ma-synm-q3' },
      {
        type: 'interview',
        question: t('Why are revenue synergies valued less than cost synergies?', 'Perché le sinergie di ricavo valgono meno di quelle di costo?'),
        answer: t(
          'Because they depend on customers and competitors rather than on the buyer’s own decisions. Cost synergies — closing a duplicate plant, merging back offices — are largely in management’s control and can be planned. Revenue synergies need customers to buy more, competitors not to react, and sales teams to integrate well, and often come with dis-synergies such as customer churn. So bankers apply higher discount rates or haircuts, phase them in later, and boards rarely rely on them to justify a premium.',
          'Perché dipendono da clienti e concorrenti, non dalle decisioni dell’acquirente. Le sinergie di costo — chiudere uno stabilimento duplicato, unificare le funzioni di back office — sono in larga parte sotto il controllo del management e pianificabili. Le sinergie di ricavo richiedono che i clienti comprino di più, che i concorrenti non reagiscano e che le reti commerciali si integrino bene, e spesso portano dis-sinergie come la perdita di clienti. Per questo si applicano tassi più alti o haircut, si fanno partire più tardi e i CdA raramente vi si affidano per giustificare un premio.'
        )
      },
      {
        type: 'mistakes',
        items: [
          t('Assuming 100% of run-rate synergies from day one.', 'Ipotizzare il 100% delle sinergie a regime dal primo giorno.'),
          t('Ignoring costs to achieve and dis-synergies.', 'Ignorare costi di realizzazione e dis-sinergie.'),
          t('Valuing synergies pre-tax.', 'Valutare le sinergie al lordo delle imposte.'),
          t('Paying a premium above the value of synergies — all the value goes to the seller.', 'Pagare un premio superiore al valore delle sinergie — tutto il valore va al venditore.')
        ]
      },
      {
        type: 'summary',
        items: [
          t('Cost synergies are more reliable than revenue synergies.', 'Le sinergie di costo sono più affidabili di quelle di ricavo.'),
          t('Model run-rate, phasing, costs to achieve and dis-synergies.', 'Modellare run-rate, phasing, costi di realizzazione e dis-sinergie.'),
          t('Value = run-rate × (1 − t) / (r − g) − CTA; compare with the premium.', 'Valore = run-rate × (1 − t) / (r − g) − CTA; confrontarlo con il premio.')
        ]
      }
    ],
    questions: [
      {
        id: 'ma-synm-q1',
        kind: 'numeric',
        topic: 'ma-synergies',
        difficulty: 2,
        objective: t('Value run-rate synergies net of costs to achieve.', 'Valutare le sinergie a regime al netto dei costi di realizzazione.'),
        prompt: t(
          'Run-rate pre-tax cost synergies €60m, tax 25%, discount rate 10%, no growth, one-off costs to achieve €75m. Using the perpetuity shortcut, what is the value of synergies (€m)?',
          'Sinergie di costo a regime €60m ante imposte, aliquota 25%, tasso di sconto 10%, crescita nulla, costi di realizzazione una tantum €75m. Con la scorciatoia della perpetuità, quanto valgono le sinergie (€m)?'
        ),
        answer: 375,
        unit: '€m',
        tolerance: { abs: 0.1 },
        verify: { fn: 'synergyValue', args: [60, 0.25, 0.1, 75] },
        explanation: t(
          '60 × 0.75 / 0.10 = 450, minus 75 = €375m. Skipping tax gives 525; forgetting CTA gives 450.',
          '60 × 0,75 / 0,10 = 450, meno 75 = €375m. Ignorare le imposte dà 525; dimenticare i CTA dà 450.'
        )
      },
      {
        id: 'ma-synm-q2',
        kind: 'grid',
        topic: 'ma-synergies',
        difficulty: 2,
        objective: t('Build a phased synergy schedule.', 'Costruire un piano delle sinergie con phasing.'),
        prompt: t(
          'Run-rate cost synergies €60m pre-tax, phased 30% / 70% / 100%. Costs to achieve €75m: 50% in year 1, 40% in year 2, 10% in year 3. Fill in the schedule (€m; costs as negatives).',
          'Sinergie di costo a regime €60m ante imposte, phasing 30% / 70% / 100%. Costi di realizzazione €75m: 50% nell’anno 1, 40% nell’anno 2, 10% nell’anno 3. Completa il piano (€m; costi con segno negativo).'
        ),
        columns: [t('€m', '€m'), t('Year 1', 'Anno 1'), t('Year 2', 'Anno 2'), t('Year 3', 'Anno 3')],
        rows: [
          {
            label: t('Synergies realised', 'Sinergie realizzate'),
            cells: [
              { answer: 18, verify: { fn: 'product', args: [60, 0.3] } },
              { answer: 42, verify: { fn: 'product', args: [60, 0.7] } },
              60
            ]
          },
          {
            label: t('Costs to achieve', 'Costi di realizzazione'),
            cells: [
              { answer: -37.5, verify: { fn: 'product', args: [-75, 0.5] } },
              { answer: -30, verify: { fn: 'product', args: [-75, 0.4] } },
              -7.5
            ]
          },
          {
            label: t('Net pre-tax impact', 'Impatto netto ante imposte'),
            cells: [
              { answer: -19.5, verify: { fn: 'sum', args: [18, -37.5] } },
              { answer: 12, verify: { fn: 'sum', args: [42, -30] } },
              { answer: 52.5, verify: { fn: 'sum', args: [60, -7.5] } }
            ]
          }
        ],
        unit: '€m',
        explanation: t(
          'Synergies: 60 × 30% = 18, × 70% = 42, then 60. CTA: 75 × 50% = 37.5, × 40% = 30, × 10% = 7.5. Net: −19.5, +12, +52.5. Year 1 is negative — typical, and a reason deals can be dilutive in the first year even with strong synergies.',
          'Sinergie: 60 × 30% = 18, × 70% = 42, poi 60. CTA: 75 × 50% = 37,5, × 40% = 30, × 10% = 7,5. Netto: −19,5, +12, +52,5. L’anno 1 è negativo — tipico, ed è il motivo per cui un deal può essere diluitivo il primo anno anche con sinergie forti.'
        )
      },
      {
        id: 'ma-synm-q3',
        kind: 'mcq',
        topic: 'ma-synergies',
        difficulty: 2,
        objective: t('Judge a premium against synergy value.', 'Valutare un premio rispetto al valore delle sinergie.'),
        prompt: t(
          'A buyer pays a €350m premium over the target’s undisturbed market value. The value of synergies net of CTA is €283m. What is the best conclusion?',
          'Un acquirente paga un premio di €350m sul valore di mercato indisturbato del target. Il valore delle sinergie al netto dei CTA è €283m. Qual è la conclusione migliore?'
        ),
        choices: [
          t('The deal creates €283m of value for the buyer', 'Il deal crea €283m di valore per l’acquirente'),
          t('The buyer transfers more than all synergy value to the seller — about €67m of value is destroyed for its shareholders, all else equal', 'L’acquirente trasferisce al venditore più dell’intero valore delle sinergie — circa €67m di valore distrutto per i suoi azionisti, a parità di altre condizioni'),
          t('Any premium is justified if the deal is EPS-accretive', 'Qualsiasi premio è giustificato se il deal è accrescitivo sull’EPS'),
          t('The deal creates €633m of value (premium + synergies)', 'Il deal crea €633m di valore (premio + sinergie)')
        ],
        correct: 1,
        explanation: t(
          'Value to the acquirer ≈ synergy value − premium = 283 − 350 = −€67m. Accretion does not prove value creation, and the premium is a cost to the buyer, not value created.',
          'Valore per l’acquirente ≈ valore delle sinergie − premio = 283 − 350 = −€67m. L’accrescimento non dimostra creazione di valore, e il premio è un costo per l’acquirente, non valore creato.'
        )
      },
      {
        id: 'ma-synm-q4',
        kind: 'numeric',
        topic: 'ma-synergies',
        difficulty: 3,
        objective: t('Value synergies with growth.', 'Valutare le sinergie con crescita.'),
        prompt: t(
          'Synergies of €40m pre-tax run-rate, tax 25%, r = 9%, CTA €50m, growing 2% per year in perpetuity. What is their value (€m)?',
          'Sinergie di €40m ante imposte a regime, aliquota 25%, r = 9%, CTA €50m, in crescita del 2% annuo in perpetuo. Quanto valgono (€m)?'
        ),
        answer: 378.6,
        unit: '€m',
        tolerance: { abs: 0.1 },
        verify: { fn: 'synergyValue', args: [40, 0.25, 0.09, 50, 0.02] },
        explanation: t(
          '30 / (0.09 − 0.02) = 428.6; less 50 = €378.6m — versus €283m with no growth. A 2% growth assumption adds almost €100m, showing how sensitive synergy value is to aggressive assumptions.',
          '30 / (0,09 − 0,02) = 428,6; meno 50 = €378,6m — contro €283m senza crescita. Un’ipotesi di crescita del 2% aggiunge quasi €100m, a dimostrazione di quanto il valore delle sinergie sia sensibile a ipotesi aggressive.'
        )
      }
    ],
    flashcards: [
      { id: 'fc-ma-synm-1', topic: 'ma-synergies', front: t('What are costs to achieve (CTA)?', 'Cosa sono i costi di realizzazione (CTA)?'), back: t('One-off costs to realise synergies: severance, restructuring, IT migration, site closures.', 'Costi una tantum per realizzare le sinergie: incentivi all’esodo, ristrutturazioni, migrazione IT, chiusura siti.') },
      { id: 'fc-ma-synm-2', topic: 'ma-synergies', front: t('Give two examples of dis-synergies.', 'Due esempi di dis-sinergie.'), back: t('Customer losses (e.g. clients of a competitor leaving), key-staff attrition, revenue lost through antitrust divestitures.', 'Perdita di clienti (es. clienti di un concorrente che se ne vanno), uscita di persone chiave, ricavi persi per cessioni imposte dall’antitrust.') },
      { id: 'fc-ma-synm-3', topic: 'ma-synergies', front: t('Synergy value shortcut?', 'Scorciatoia per il valore delle sinergie?'), back: t('Run-rate × (1 − t) / (r − g) − one-off costs to achieve.', 'Run-rate × (1 − t) / (r − g) − costi di realizzazione una tantum.') },
      { id: 'fc-ma-synm-4', topic: 'ma-synergies', front: t('When does a buyer create value from a deal?', 'Quando un acquirente crea valore con un deal?'), back: t('When the value of synergies (net of CTA and dis-synergies) exceeds the premium paid.', 'Quando il valore delle sinergie (al netto di CTA e dis-sinergie) supera il premio pagato.') }
    ]
  }
  ,
  /* ================================================================== */
  /* M4 — ma-hostile-tender                                              */
  /* ================================================================== */
  {
    id: 'ma-hostile-tender',
    academyId: 'ma',
    moduleId: 'M4',
    mode: 'deep',
    minutes: 14,
    difficulty: 3,
    reviewed: '2026-10',
    objective: t(
      'Explain unsolicited and hostile approaches, tender and exchange offers, proxy fights and takeover defences, and apply the EU mandatory bid and board neutrality rules, including Italy’s OPA obbligatoria.',
      'Spiegare approcci non sollecitati e ostili, offerte pubbliche di acquisto e di scambio, proxy fight e difese anti-scalata, e applicare le regole UE su OPA obbligatoria e passivity rule, incluso il caso italiano.'
    ),
    screens: [
      {
        type: 'intuition',
        title: t('Going over the board’s head', 'Scavalcare il consiglio di amministrazione'),
        body: t(
          'Most deals are friendly: the boards negotiate and recommend the deal. But a board can say no to an offer shareholders might like.\n\nA bidder then has two levers: go **directly to shareholders** with a public offer for their shares, or **replace the board** through a shareholder vote. Defences exist to give the board bargaining power — and regulators set rules so that all shareholders are treated fairly when control changes hands.',
          'La maggior parte dei deal è amichevole: i CdA negoziano e raccomandano l’operazione. Ma un consiglio può respingere un’offerta che agli azionisti potrebbe piacere.\n\nL’offerente ha allora due leve: rivolgersi **direttamente agli azionisti** con un’offerta pubblica sulle loro azioni, oppure **sostituire il consiglio** con un voto assembleare. Le difese servono a dare potere negoziale al CdA — e i regolatori fissano regole perché tutti gli azionisti siano trattati equamente quando cambia il controllo.'
        )
      },
      {
        type: 'technical',
        title: t('The toolkit', 'Gli strumenti'),
        body: t(
          '- **Unsolicited** approach: not invited by the target; becomes **hostile** if the board rejects it and the bidder persists.\n- **Bear hug**: a letter to the board with a generous offer, often made public to pressure directors.\n- **Tender offer** (cash) / **exchange offer** (shares): offer made directly to all shareholders, usually conditional on a minimum acceptance level.\n- **Proxy fight**: the bidder or an activist solicits votes to elect its own directors.\n- **Stake building (toehold)**: buying shares in the market before announcing, within disclosure rules — in the US a Schedule 13D is due within 5 business days of crossing 5% (SEC rules as amended in 2023).',
          '- Approccio **non sollecitato**: non richiesto dal target; diventa **ostile** se il CdA lo respinge e l’offerente insiste.\n- **Bear hug**: lettera al CdA con un’offerta generosa, spesso resa pubblica per mettere pressione sugli amministratori.\n- **Offerta pubblica di acquisto** (in contanti, OPA) / **di scambio** (in azioni, OPS): rivolta direttamente a tutti gli azionisti, di solito condizionata a una soglia minima di adesioni.\n- **Proxy fight**: l’offerente o un attivista raccoglie deleghe per eleggere propri amministratori.\n- **Rastrellamento (toehold)**: acquisti sul mercato prima dell’annuncio, nel rispetto degli obblighi di trasparenza — negli USA lo Schedule 13D va depositato entro 5 giorni lavorativi dal superamento del 5% (regole SEC modificate nel 2023).'
        )
      },
      {
        type: 'technical',
        title: t('Defences', 'Le difese'),
        body: t(
          '- **Poison pill (shareholder rights plan)**: if a holder crosses a trigger (often 10–20%), all other holders can buy shares at a discount, massively diluting the raider. It forces bidders to negotiate with the board. Mainly a US tool.\n- **Staggered (classified) board**: only a fraction of directors is elected each year, so a proxy fight takes more than one annual meeting to win control.\n- **White knight**: the target seeks a friendlier buyer; a **white squire** buys a blocking minority stake instead.\n- Others: dual-class shares and loyalty (increased) voting rights, change-of-control clauses, litigation, and in the US the board’s duties under Delaware case law shape what defences are allowed.',
          '- **Poison pill (shareholder rights plan)**: se un azionista supera una soglia (spesso 10–20%), tutti gli altri possono acquistare azioni a sconto, diluendo fortemente lo scalatore. Costringe l’offerente a trattare con il CdA. Strumento soprattutto statunitense.\n- **Staggered board (consiglio scaglionato)**: ogni anno si rinnova solo una parte del CdA, quindi per prendere il controllo con un proxy fight serve più di un’assemblea.\n- **White knight (cavaliere bianco)**: il target cerca un acquirente più gradito; un **white squire** acquista invece una minoranza di blocco.\n- Altre: azioni a voto plurimo e voto maggiorato, clausole di change of control, contenzioso; negli USA i doveri degli amministratori secondo la giurisprudenza del Delaware delimitano le difese ammesse.'
        )
      },
      {
        type: 'formula',
        formulas: [
          {
            name: t('Offer premium', 'Premio dell’offerta'),
            expr: 'Premium = Offer price / Undisturbed share price − 1',
            vars: [{ sym: 'Undisturbed price', desc: t('Price before rumours or the announcement (e.g. day before, or 1-/3-month VWAP)', 'Prezzo prima di rumor o annuncio (es. giorno precedente, o media ponderata a 1/3 mesi)') }]
          }
        ],
        note: t('Always measure the premium against the undisturbed price; after rumours, the market price already embeds part of the bid.', 'Misurare sempre il premio sul prezzo indisturbato; dopo i rumor il prezzo di mercato incorpora già parte dell’offerta.')
      },
      {
        type: 'technical',
        title: t('EU and Italian rules', 'Le regole UE e italiane'),
        body: t(
          '**EU Takeover Directive 2004/25/EC**:\n- **Mandatory bid** (art. 5): whoever acquires control — at a % threshold set by each Member State — must bid for all remaining shares at an **equitable price** (the highest price paid by the bidder in a 6–12-month period before the bid, as set nationally).\n- **Board neutrality** (art. 9): once a bid is known, the board needs shareholder approval for frustrating action (other than seeking alternative bids).\n- **Breakthrough rule** (art. 11): optional for Member States (art. 12).\n\n**Italy (TUF)**: the mandatory OPA (art. 106) is triggered by crossing **30%** of voting securities of a listed company; the 2026 TUF reform (D.Lgs. 47/2026) abolished the additional 25% threshold that applied to non-SME issuers. Board passivity is in art. 104 TUF. **UK**: Takeover Code Rule 9 also uses 30%.',
          '**Direttiva OPA 2004/25/CE**:\n- **OPA obbligatoria** (art. 5): chi acquisisce il controllo — a una soglia % fissata da ciascuno Stato membro — deve offrire di acquistare tutte le restanti azioni a un **prezzo equo** (il prezzo più alto pagato dall’offerente in un periodo di 6–12 mesi prima dell’offerta, definito a livello nazionale).\n- **Passivity rule** (art. 9): una volta nota l’offerta, il CdA necessita dell’autorizzazione assembleare per compiere atti difensivi (salvo la ricerca di offerte concorrenti).\n- **Breakthrough rule** (art. 11): facoltativa per gli Stati membri (art. 12).\n\n**Italia (TUF)**: l’OPA obbligatoria (art. 106) scatta al superamento del **30%** dei titoli con diritto di voto di una società quotata; la riforma del TUF del 2026 (D.Lgs. 47/2026) ha abrogato l’ulteriore soglia del 25% per le società diverse dalle PMI. La passivity rule è all’art. 104 TUF. **Regno Unito**: anche la Rule 9 del Takeover Code usa il 30%.'
        )
      },
      {
        type: 'example',
        title: t('Pricing a hostile bid', 'Prezzare un’offerta ostile'),
        body: t(
          'Predator S.p.A. targets Preda S.p.A. (undisturbed price €11.20). Its board rejects a €13.00 bear hug. Predator launches a cash OPA at €14.00, conditional on 66.7% acceptances.',
          'Predator S.p.A. punta Preda S.p.A. (prezzo indisturbato €11,20). Il CdA respinge un bear hug a €13,00. Predator lancia un’OPA in contanti a €14,00, condizionata al 66,7% di adesioni.'
        ),
        table: {
          headers: [t('Offer', 'Offerta'), t('Price (€)', 'Prezzo (€)'), t('Premium to undisturbed', 'Premio sul prezzo indisturbato')],
          rows: [
            [t('Bear hug (rejected)', 'Bear hug (respinto)'), '13.00', '16.1%'],
            [t('Hostile OPA', 'OPA ostile'), '14.00', '25.0%']
          ]
        }
      },
      { type: 'exercise', questionId: 'ma-ht-q1' },
      { type: 'exercise', questionId: 'ma-ht-q2' },
      {
        type: 'realworld',
        title: t('What the analyst does', 'Cosa fa l’analista'),
        body: t(
          'On the **bidder** side: the analyst models the ability to pay (accretion/dilution at higher prices), tracks the shareholder register and arbitrage positions, and prepares the offer document valuation.\n\nOn the **defence** side: the team builds a **defence book** before any approach — standalone valuation, likely bidders and their capacity to pay, the shareholder base, and available defences — and, if a bid arrives, the materials supporting the board’s view on the offer price (in Italy, the target board must publish a statement on the offer under art. 103 TUF).',
          'Lato **offerente**: l’analista modella la capacità di pagare (accrescimento/diluizione a prezzi più alti), monitora libro soci e posizioni degli arbitraggisti, e prepara la valutazione per il documento d’offerta.\n\nLato **difesa**: il team prepara un **defence book** prima di qualsiasi approccio — valutazione stand-alone, possibili offerenti e loro capacità di pagare, composizione dell’azionariato e difese disponibili — e, se arriva un’offerta, i materiali a supporto della posizione del CdA sul prezzo (in Italia il CdA dell’emittente deve diffondere il proprio comunicato sull’offerta ex art. 103 TUF).'
        )
      },
      { type: 'exercise', questionId: 'ma-ht-q3' },
      {
        type: 'interview',
        question: t('Why are poison pills common in the US but rare in Europe?', 'Perché le poison pill sono diffuse negli USA ma rare in Europa?'),
        answer: t(
          'In the US, Delaware law lets boards adopt rights plans without a shareholder vote and judges them under enhanced-scrutiny standards, so the board is the gatekeeper. In the EU the Takeover Directive’s board neutrality principle, adopted by many Member States including Italy and the UK through its Code, means that once a bid is known the board cannot take frustrating action without shareholder approval — the decision belongs to shareholders. European targets rely instead on concentrated ownership, multiple or loyalty voting rights, and regulatory tools like FDI screening.',
          'Negli USA il diritto del Delaware consente ai CdA di adottare rights plan senza voto assembleare e li valuta con uno scrutinio rafforzato, quindi il CdA fa da filtro. Nell’UE la passivity rule della Direttiva OPA, adottata da molti Stati membri, tra cui l’Italia, e dal Regno Unito con il suo Code, fa sì che una volta nota l’offerta il CdA non possa compiere atti difensivi senza l’autorizzazione dell’assemblea — la decisione spetta agli azionisti. I target europei si affidano piuttosto ad azionariati concentrati, voto plurimo o maggiorato e strumenti regolamentari come il golden power.'
        )
      },
      {
        type: 'mistakes',
        items: [
          t('Using "unsolicited" and "hostile" as synonyms: an unsolicited offer can become friendly.', 'Usare "non sollecitato" e "ostile" come sinonimi: un’offerta non sollecitata può diventare amichevole.'),
          t('Measuring the premium on the post-rumour price.', 'Misurare il premio sul prezzo successivo ai rumor.'),
          t('Quoting the pre-2026 Italian 25% threshold as current.', 'Citare come vigente la soglia italiana del 25% precedente alla riforma del 2026.')
        ]
      },
      {
        type: 'summary',
        items: [
          t('Hostile routes: tender/exchange offer to shareholders or proxy fight to replace the board.', 'Strade ostili: offerta pubblica agli azionisti o proxy fight per sostituire il CdA.'),
          t('US defences: poison pill, staggered board, white knight; EU: board neutrality limits frustrating action.', 'Difese USA: poison pill, staggered board, white knight; UE: la passivity rule limita gli atti difensivi.'),
          t('EU mandatory bid at an equitable price; Italy: 30% under art. 106 TUF (after D.Lgs. 47/2026).', 'OPA obbligatoria UE a prezzo equo; Italia: 30% ex art. 106 TUF (dopo il D.Lgs. 47/2026).')
        ]
      }
    ],
    questions: [
      {
        id: 'ma-ht-q1',
        kind: 'numeric',
        topic: 'ma-hostile',
        difficulty: 1,
        objective: t('Compute an offer premium.', 'Calcolare il premio di un’offerta.'),
        prompt: t(
          'Undisturbed share price €11.20; hostile cash offer €14.00 per share. What is the premium (%)?',
          'Prezzo indisturbato €11,20; offerta ostile in contanti €14,00 per azione. Qual è il premio (%)?'
        ),
        answer: 25,
        unit: '%',
        tolerance: { abs: 0.05 },
        verify: { fn: 'ratio', args: [280, 11.2] },
        explanation: t(
          '14.00 / 11.20 − 1 = 25%. Computing (14 − 11.2) / 14 = 20% divides by the offer price instead of the reference price.',
          '14,00 / 11,20 − 1 = 25%. Calcolare (14 − 11,2) / 14 = 20% divide per il prezzo offerto anziché per il prezzo di riferimento.'
        )
      },
      {
        id: 'ma-ht-q2',
        kind: 'mcq',
        topic: 'ma-hostile',
        difficulty: 2,
        objective: t('Apply the Italian mandatory bid threshold.', 'Applicare la soglia italiana di OPA obbligatoria.'),
        prompt: t(
          'Under art. 106 TUF as amended by D.Lgs. 47/2026, an investor holding 28% of a listed Italian company (not an SME) buys another 3% on the market. What follows?',
          'Ai sensi dell’art. 106 TUF come modificato dal D.Lgs. 47/2026, un investitore con il 28% di una società quotata italiana (non PMI) acquista un ulteriore 3% sul mercato. Cosa ne consegue?'
        ),
        choices: [
          t('Nothing: only a 50% stake triggers a mandatory bid', 'Nulla: solo il 50% fa scattare l’OPA obbligatoria'),
          t('It must launch a mandatory offer for all remaining voting shares', 'Deve promuovere un’offerta obbligatoria su tutte le restanti azioni con diritto di voto'),
          t('It already had to launch an offer at 25%', 'Avrebbe già dovuto lanciare un’offerta al 25%'),
          t('It must sell back below 28% within 12 months', 'Deve scendere sotto il 28% entro 12 mesi')
        ],
        correct: 1,
        explanation: t(
          'Crossing 30% (28% + 3% = 31%) triggers the mandatory OPA on all remaining voting securities. The 25% threshold for non-SMEs was abolished by the 2026 reform; 50% is not the trigger.',
          'Il superamento del 30% (28% + 3% = 31%) fa scattare l’OPA obbligatoria totalitaria. La soglia del 25% per le non PMI è stata abrogata dalla riforma del 2026; il 50% non è la soglia rilevante.'
        )
      },
      {
        id: 'ma-ht-q3',
        kind: 'order',
        topic: 'ma-hostile',
        difficulty: 2,
        objective: t('Sequence a typical hostile takeover attempt.', 'Ordinare le fasi tipiche di un tentativo di scalata ostile.'),
        prompt: t('Put the steps of a typical hostile approach in order.', 'Metti in ordine le fasi di un tipico approccio ostile.'),
        items: [
          t('Private approach to the target’s board', 'Approccio riservato al CdA del target'),
          t('Public bear hug letter after the board rejects', 'Bear hug pubblico dopo il rifiuto del CdA'),
          t('Launch of a tender offer directly to shareholders', 'Lancio di un’offerta pubblica direttamente agli azionisti'),
          t('Target board responds (defences, white knight or negotiation)', 'Risposta del CdA del target (difese, white knight o negoziazione)'),
          t('Offer period ends: acceptance condition met or offer lapses', 'Fine del periodo d’offerta: condizione di adesione raggiunta o offerta decaduta')
        ],
        explanation: t(
          'Bidders usually try privately first, escalate publicly with a bear hug, then go to shareholders with an offer; the board responds during the offer period, which ends with success or lapse.',
          'Gli offerenti tentano prima in via riservata, poi alzano la pressione pubblicamente con un bear hug, quindi si rivolgono agli azionisti con un’offerta; il CdA risponde durante il periodo d’offerta, che si chiude con successo o decadenza.'
        )
      },
      {
        id: 'ma-ht-q4',
        kind: 'multi',
        topic: 'ma-hostile',
        difficulty: 2,
        objective: t('Identify takeover defences.', 'Individuare le difese anti-scalata.'),
        prompt: t('Which of these are takeover defences? Select all that apply.', 'Quali di questi sono difese anti-scalata? Seleziona tutte le risposte corrette.'),
        choices: [
          t('Shareholder rights plan (poison pill)', 'Shareholder rights plan (poison pill)'),
          t('Staggered board', 'Staggered board'),
          t('Bear hug', 'Bear hug'),
          t('Seeking a white knight', 'Ricerca di un white knight'),
          t('Toehold stake', 'Partecipazione toehold')
        ],
        correct: [0, 1, 3],
        explanation: t(
          'Poison pills, staggered boards and white knights are defensive. A bear hug and a toehold are offensive tactics used by the bidder.',
          'Poison pill, staggered board e white knight sono difensivi. Bear hug e toehold sono tattiche offensive dell’offerente.'
        )
      },
      {
        id: 'ma-ht-q5',
        kind: 'mcq',
        topic: 'ma-hostile',
        difficulty: 3,
        objective: t('Explain the board neutrality principle.', 'Spiegare la passivity rule.'),
        prompt: t(
          'Under the board neutrality rule of Directive 2004/25/EC, which action can the target board take after a bid is announced without shareholder approval?',
          'Secondo la passivity rule della Direttiva 2004/25/CE, quale azione può compiere il CdA del target dopo l’annuncio di un’offerta senza autorizzazione assembleare?'
        ),
        choices: [
          t('Issue new shares to a friendly investor', 'Emettere nuove azioni a favore di un investitore amico'),
          t('Sell the company’s crown-jewel asset', 'Cedere l’asset più pregiato della società'),
          t('Seek alternative (competing) bids', 'Cercare offerte alternative (concorrenti)'),
          t('Adopt a poison pill', 'Adottare una poison pill')
        ],
        correct: 2,
        explanation: t(
          'Art. 9 allows the board to seek alternative bids; other frustrating actions — issuing shares, selling crown jewels, adopting pills — require prior shareholder authorisation once the bid is known.',
          'L’art. 9 consente al CdA di cercare offerte alternative; gli altri atti difensivi — emissione di azioni, cessione di asset strategici, poison pill — richiedono la preventiva autorizzazione assembleare una volta nota l’offerta.'
        )
      }
    ],
    flashcards: [
      { id: 'fc-ma-ht-1', topic: 'ma-hostile', front: t('What is a bear hug?', 'Cos’è un bear hug?'), back: t('A (often public) offer letter to a target board at an attractive price, designed to pressure directors to negotiate.', 'Una lettera d’offerta (spesso resa pubblica) al CdA del target a un prezzo attraente, per spingerlo a negoziare.') },
      { id: 'fc-ma-ht-2', topic: 'ma-hostile', front: t('Tender offer vs exchange offer?', 'OPA vs OPS?'), back: t('Tender: cash for shares. Exchange: bidder shares (securities) for target shares.', 'OPA: contanti in cambio di azioni. OPS: titoli dell’offerente in cambio di azioni del target.') },
      { id: 'fc-ma-ht-3', topic: 'ma-hostile', front: t('Italian mandatory bid threshold after D.Lgs. 47/2026?', 'Soglia italiana di OPA obbligatoria dopo il D.Lgs. 47/2026?'), back: t('30% of voting securities (art. 106 TUF); the 25% non-SME threshold was abolished.', '30% dei titoli con diritto di voto (art. 106 TUF); abrogata la soglia del 25% per le non PMI.') },
      { id: 'fc-ma-ht-4', topic: 'ma-hostile', front: t('EU "equitable price" in a mandatory bid?', '"Prezzo equo" nell’OPA obbligatoria UE?'), back: t('Highest price paid by the bidder for the same securities over a period of 6–12 months before the bid (set by each Member State).', 'Il prezzo più alto pagato dall’offerente per gli stessi titoli in un periodo di 6–12 mesi prima dell’offerta (fissato da ciascuno Stato).') },
      { id: 'fc-ma-ht-5', topic: 'ma-hostile', front: t('How does a staggered board deter a hostile bidder?', 'Come dissuade uno staggered board un offerente ostile?'), back: t('Only part of the board is elected each year, so gaining board control by proxy fight takes at least two annual meetings.', 'Ogni anno si elegge solo una parte del CdA, quindi servono almeno due assemblee per prenderne il controllo con un proxy fight.') }
    ],
    sources: [
      { label: 'Directive 2004/25/EC on takeover bids (EUR-Lex)', url: 'https://eur-lex.europa.eu/eli/dir/2004/25/oj' },
      { label: 'D.Lgs. 24 febbraio 1998, n. 58 (TUF), artt. 103, 104, 106 — as amended by D.Lgs. 27 marzo 2026, n. 47 (Normattiva)', url: 'https://www.normattiva.it/' },
      { label: 'SEC — Modernization of Beneficial Ownership Reporting (2023 amendments to Regulation 13D-G)', url: 'https://www.sec.gov/' }
    ]
  },

  /* ================================================================== */
  /* M4 — ma-separations                                                 */
  /* ================================================================== */
  {
    id: 'ma-separations',
    academyId: 'ma',
    moduleId: 'M4',
    mode: 'deep',
    minutes: 12,
    difficulty: 2,
    reviewed: '2026-10',
    objective: t(
      'Distinguish divestitures, equity carve-outs, spin-offs and split-offs, and analyse tax efficiency, stranded costs, standalone costs and transitional services agreements.',
      'Distinguere cessioni, equity carve-out, spin-off e split-off, e analizzare efficienza fiscale, costi residui (stranded), costi stand-alone e accordi di servizi transitori (TSA).'
    ),
    screens: [
      {
        type: 'intuition',
        title: t('Sometimes 1 + 1 < 2', 'A volte 1 + 1 < 2'),
        body: t(
          'Groups often trade at a **conglomerate discount**: a business that does not fit gets too little capital or management attention, and investors cannot buy the part they want.\n\nSeparating it can unlock value — by selling it to a buyer who values it more, or by giving it its own listing so the market can price it on its own merits. The question is how to separate it at the lowest cost in taxes and disruption.',
          'I gruppi trattano spesso con uno **sconto da conglomerata**: un business non core riceve poco capitale o poca attenzione dal management, e gli investitori non possono comprare solo la parte che interessa.\n\nSepararlo può liberare valore — vendendolo a chi lo valorizza di più, o dandogli una quotazione autonoma perché il mercato lo prezzi per quello che vale. La domanda è come separarlo con il minimo costo fiscale e operativo.'
        )
      },
      {
        type: 'technical',
        title: t('Four ways to separate', 'Quattro modi per separare'),
        body: t(
          '- **Divestiture (sale)**: sell the unit to a strategic or sponsor for cash. Immediate proceeds; usually taxable on the gain.\n- **Equity carve-out**: IPO of a minority stake in a subsidiary. Raises cash and establishes a market value; the parent keeps control. Often a first step before a full separation.\n- **Spin-off**: shares of the subsidiary distributed **pro rata** to parent shareholders. No cash raised; can be tax-free (in the US if IRC Section 355 requirements are met).\n- **Split-off**: parent shareholders may **exchange** parent shares for subsidiary shares — like a spin-off plus a buyback, so the parent’s share count falls.\n\nIn Italy a spin-off is typically executed via **scissione** (art. 2506 ff. c.c.), which is generally tax-neutral (art. 173 TUIR).',
          '- **Cessione**: vendita del ramo a un industriale o a uno sponsor in cambio di contanti. Incasso immediato; di norma plusvalenza tassata.\n- **Equity carve-out**: IPO di una quota di minoranza della controllata. Raccoglie cassa e fissa un valore di mercato; la capogruppo mantiene il controllo. Spesso primo passo verso la separazione completa.\n- **Spin-off**: azioni della controllata assegnate **proporzionalmente** agli azionisti della capogruppo. Non raccoglie cassa; può essere fiscalmente neutra (negli USA se rispetta i requisiti della Section 355 IRC).\n- **Split-off**: gli azionisti della capogruppo possono **scambiare** azioni della capogruppo con azioni della controllata — come uno spin-off più un buyback, quindi le azioni della capogruppo diminuiscono.\n\nIn Italia lo spin-off si realizza di norma con una **scissione** (artt. 2506 ss. c.c.), in linea generale fiscalmente neutrale (art. 173 TUIR).'
        )
      },
      {
        type: 'formula',
        formulas: [
          {
            name: t('Standalone EBITDA of a carved-out unit', 'EBITDA stand-alone del ramo separato'),
            expr: 'Standalone EBITDA = Segment EBITDA − Standalone (replacement) costs ± TSA effects',
            vars: [{ sym: 'Standalone costs', desc: t('Costs of functions previously provided by the parent (IT, HR, treasury, legal)', 'Costi delle funzioni prima fornite dalla capogruppo (IT, HR, tesoreria, legale)') }]
          },
          {
            name: t('After-tax proceeds of a sale', 'Proventi netti di una cessione'),
            expr: 'Net proceeds = Price − Tax rate × (Price − Tax basis)'
          }
        ]
      },
      {
        type: 'example',
        title: t('Sell or spin?', 'Vendere o scorporare?'),
        body: t(
          'ParentCo’s division has segment EBITDA of €80m but needs €12m a year of standalone costs. Peers trade at 9x EBITDA. A buyer offers €1,000m; the tax basis is €400m and the illustrative tax rate on the gain is 25%.',
          'La divisione di ParentCo ha un EBITDA di segmento di €80m ma richiede €12m annui di costi stand-alone. I comparabili trattano a 9x l’EBITDA. Un acquirente offre €1.000m; il valore fiscale è €400m e l’aliquota illustrativa sulla plusvalenza è del 25%.'
        ),
        table: {
          headers: [t('Option', 'Opzione'), t('Calculation', 'Calcolo'), t('€m', '€m')],
          rows: [
            [t('Spin-off: implied EV', 'Spin-off: EV implicito'), '(80 − 12) × 9', '612'],
            [t('Sale: tax on gain', 'Cessione: imposta sulla plusvalenza'), '25% × (1,000 − 400)', '(150)'],
            [t('Sale: net proceeds', 'Cessione: incasso netto'), '1,000 − 150', '850']
          ],
          totalRows: [2]
        }
      },
      { type: 'exercise', questionId: 'ma-sep-q1' },
      {
        type: 'technical',
        title: t('Stranded costs and TSAs', 'Stranded cost e TSA'),
        body: t(
          '- **Stranded costs**: parent overheads previously allocated to the unit that do not disappear when it leaves (e.g. a head office sized for the larger group). They hit the **remaining** parent’s margins until cut.\n- **Standalone costs**: what the separated unit must add to run alone (board, listing, finance, IT).\n- **TSA (transitional services agreement)**: the seller keeps providing services (IT, payroll, logistics) for a fixed period at an agreed fee while the unit builds its own capabilities; a **reverse TSA** runs the other way.\n- **Entanglements**: shared contracts, IP, sites and IT systems that must be split.\n\nIn the analysis, the analyst prepares carve-out financials, separation cost estimates and the dis-synergy bridge for both the parent and the separated business.',
          '- **Stranded cost**: costi centrali prima allocati al ramo che non spariscono con la sua uscita (es. una sede dimensionata per il gruppo più grande). Gravano sui margini della capogruppo **residua** finché non vengono tagliati.\n- **Costi stand-alone**: ciò che il ramo separato deve aggiungere per operare da solo (CdA, quotazione, finanza, IT).\n- **TSA (accordo di servizi transitori)**: il venditore continua a fornire servizi (IT, paghe, logistica) per un periodo definito a un corrispettivo concordato mentre il ramo costruisce le proprie strutture; il **reverse TSA** opera in senso inverso.\n- **Entanglement**: contratti, IP, siti e sistemi IT condivisi da separare.\n\nL’analista prepara i bilanci carve-out, le stime dei costi di separazione e il bridge delle dis-sinergie per la capogruppo e per il business separato.'
        )
      },
      { type: 'exercise', questionId: 'ma-sep-q2' },
      {
        type: 'realworld',
        body: t(
          'Activist investors frequently push conglomerates to separate divisions, arguing that the sum of the parts exceeds the group’s market value. Advisers then run a **strategic review**: a sum-of-the-parts (SOTP) valuation, a comparison of sale vs spin-off vs carve-out on after-tax value, execution timing and certainty, and the capital structure of each resulting company.\n\nA **dual-track** process — preparing a spin-off or IPO while running a sale — keeps competitive tension and gives the board a fallback.',
          'Gli investitori attivisti spingono spesso i conglomerati a separare le divisioni, sostenendo che la somma delle parti supera il valore di mercato del gruppo. Gli advisor svolgono allora una **strategic review**: valutazione per somma delle parti (SOTP), confronto tra cessione, spin-off e carve-out per valore netto d’imposta, tempi e certezza di esecuzione, e la struttura finanziaria di ciascuna società risultante.\n\nUn processo **dual-track** — preparare spin-off o IPO mentre si gestisce una vendita — mantiene la tensione competitiva e offre al CdA un’alternativa.'
        )
      },
      { type: 'exercise', questionId: 'ma-sep-q3' },
      {
        type: 'interview',
        question: t('Why would a company choose a spin-off over a sale?', 'Perché una società dovrebbe preferire uno spin-off a una cessione?'),
        answer: t(
          'Mainly tax and value. A qualifying spin-off can be tax-free for the company and its shareholders, whereas a sale crystallises a taxable gain — so if the business has a low tax basis, a sale must fetch a much higher price to match. A spin-off also lets shareholders keep the upside if no buyer will pay full value. The trade-offs: no cash is raised, there is no control premium, and the parent bears separation costs, stranded costs and the need to give the spun entity a sustainable capital structure.',
          'Soprattutto fiscalità e valore. Uno spin-off con i requisiti può essere fiscalmente neutro per la società e i soci, mentre una cessione fa emergere una plusvalenza tassabile — quindi se il business ha un basso valore fiscale, la vendita deve spuntare un prezzo molto più alto per equivalere. Lo spin-off lascia inoltre agli azionisti l’upside se nessun acquirente paga il pieno valore. I compromessi: nessun incasso, nessun premio di controllo, e la capogruppo sostiene costi di separazione, stranded cost e la necessità di dare alla società scorporata una struttura finanziaria sostenibile.'
        )
      },
      {
        type: 'mistakes',
        items: [
          t('Valuing a carve-out on segment EBITDA without deducting standalone costs.', 'Valutare un carve-out sull’EBITDA di segmento senza dedurre i costi stand-alone.'),
          t('Forgetting stranded costs that remain with the parent.', 'Dimenticare gli stranded cost che restano in capo alla capogruppo.'),
          t('Confusing an equity carve-out (minority IPO, cash raised) with a spin-off (distribution, no cash).', 'Confondere un equity carve-out (IPO di minoranza, raccolta di cassa) con uno spin-off (assegnazione, nessun incasso).')
        ]
      },
      {
        type: 'summary',
        items: [
          t('Sale = cash, usually taxable; carve-out = minority IPO; spin-off = pro rata distribution; split-off = exchange offer.', 'Cessione = cassa, di norma tassata; carve-out = IPO di minoranza; spin-off = assegnazione proporzionale; split-off = offerta di scambio.'),
          t('Compare options on after-tax value, certainty and timing.', 'Confrontare le opzioni su valore netto d’imposta, certezza e tempi.'),
          t('Model standalone costs, stranded costs and TSAs.', 'Modellare costi stand-alone, stranded cost e TSA.')
        ]
      }
    ],
    questions: [
      {
        id: 'ma-sep-q1',
        kind: 'numeric',
        topic: 'ma-separations',
        difficulty: 2,
        objective: t('Compute after-tax proceeds of a divestiture.', 'Calcolare l’incasso netto di una cessione.'),
        prompt: t(
          'A division is sold for €1,000m. Its tax basis is €400m and the tax rate on the gain is 25%. What are the after-tax proceeds (€m)?',
          'Una divisione è ceduta per €1.000m. Il valore fiscale è €400m e l’aliquota sulla plusvalenza è del 25%. Qual è l’incasso netto d’imposta (€m)?'
        ),
        answer: 850,
        unit: '€m',
        verify: { fn: 'diff', args: [1000, 150] },
        steps: [t('Gain = 1,000 − 400 = 600', 'Plusvalenza = 1.000 − 400 = 600'), t('Tax = 25% × 600 = 150', 'Imposta = 25% × 600 = 150'), t('Net = 1,000 − 150 = 850', 'Netto = 1.000 − 150 = 850')],
        explanation: t(
          'Tax applies to the gain, not the price: 25% × 600 = 150; net €850m. Taxing the full price (750) overstates the leakage.',
          'L’imposta si applica alla plusvalenza, non al prezzo: 25% × 600 = 150; netto €850m. Tassare l’intero prezzo (750) sovrastima il costo fiscale.'
        )
      },
      {
        id: 'ma-sep-q2',
        kind: 'numeric',
        topic: 'ma-separations',
        difficulty: 2,
        objective: t('Value a carved-out unit on standalone EBITDA.', 'Valutare un ramo scorporato sull’EBITDA stand-alone.'),
        prompt: t(
          'A unit reports segment EBITDA of €80m. Running alone it needs €12m of extra annual costs. Peers trade at 9.0x EBITDA. What is its implied EV (€m)?',
          'Un ramo riporta un EBITDA di segmento di €80m. Per operare da solo richiede €12m di costi annui aggiuntivi. I comparabili trattano a 9,0x l’EBITDA. Qual è l’EV implicito (€m)?'
        ),
        answer: 612,
        unit: '€m',
        verify: { fn: 'product', args: [68, 9] },
        explanation: t(
          '(80 − 12) × 9 = €612m. Using segment EBITDA (720) overstates value by the capitalised standalone costs (12 × 9 = 108).',
          '(80 − 12) × 9 = €612m. Usare l’EBITDA di segmento (720) sovrastima il valore dei costi stand-alone capitalizzati (12 × 9 = 108).'
        )
      },
      {
        id: 'ma-sep-q3',
        kind: 'mcq',
        topic: 'ma-separations',
        difficulty: 2,
        objective: t('Distinguish separation structures.', 'Distinguere le strutture di separazione.'),
        prompt: t(
          'A parent offers its shareholders the chance to swap parent shares for shares of its subsidiary; the parent’s share count falls. What is this?',
          'Una capogruppo offre ai propri azionisti di scambiare azioni della capogruppo con azioni della controllata; le azioni della capogruppo diminuiscono. Di cosa si tratta?'
        ),
        choices: [
          t('Spin-off', 'Spin-off'),
          t('Equity carve-out', 'Equity carve-out'),
          t('Split-off', 'Split-off'),
          t('Divestiture', 'Cessione')
        ],
        correct: 2,
        explanation: t(
          'A split-off is an exchange offer: shareholders choose to swap, and the parent retires the shares it receives. A spin-off is a pro rata distribution with no exchange; a carve-out sells a minority stake to new investors for cash; a divestiture sells to a third party.',
          'Lo split-off è un’offerta di scambio: gli azionisti scelgono se aderire e la capogruppo annulla le azioni ricevute. Lo spin-off è un’assegnazione proporzionale senza scambio; il carve-out vende una minoranza a nuovi investitori per cassa; la cessione vende a un terzo.'
        )
      },
      {
        id: 'ma-sep-q4',
        kind: 'multi',
        topic: 'ma-separations',
        difficulty: 2,
        objective: t('Recognise separation costs.', 'Riconoscere i costi della separazione.'),
        prompt: t('Which items should a separation analysis include? Select all that apply.', 'Quali voci deve includere un’analisi di separazione? Seleziona tutte le risposte corrette.'),
        choices: [
          t('Stranded costs remaining at the parent', 'Stranded cost che restano alla capogruppo'),
          t('Standalone costs of the separated unit', 'Costi stand-alone del ramo separato'),
          t('Fees and duration of TSAs', 'Corrispettivi e durata dei TSA'),
          t('One-off separation costs (IT split, rebranding)', 'Costi una tantum di separazione (separazione IT, rebranding)'),
          t('The control premium a spin-off delivers to shareholders', 'Il premio di controllo che uno spin-off garantisce agli azionisti')
        ],
        correct: [0, 1, 2, 3],
        explanation: t(
          'Stranded, standalone, TSA and one-off costs all matter. A spin-off delivers no control premium — there is no buyer acquiring control.',
          'Stranded cost, costi stand-alone, TSA e costi una tantum contano tutti. Lo spin-off non porta alcun premio di controllo — nessun acquirente prende il controllo.'
        )
      }
    ],
    flashcards: [
      { id: 'fc-ma-sep-1', topic: 'ma-separations', front: t('Spin-off vs equity carve-out?', 'Spin-off vs equity carve-out?'), back: t('Spin-off: pro rata distribution of sub shares, no cash raised. Carve-out: IPO of a minority stake, cash raised, parent keeps control.', 'Spin-off: assegnazione proporzionale delle azioni, nessun incasso. Carve-out: IPO di una minoranza, incasso, la capogruppo mantiene il controllo.') },
      { id: 'fc-ma-sep-2', topic: 'ma-separations', front: t('What are stranded costs?', 'Cosa sono gli stranded cost?'), back: t('Parent overheads previously absorbed by the divested unit that remain after separation.', 'Costi centrali prima assorbiti dal ramo ceduto che restano dopo la separazione.') },
      { id: 'fc-ma-sep-3', topic: 'ma-separations', front: t('What is a TSA?', 'Cos’è un TSA?'), back: t('Transitional services agreement: the seller provides services (IT, payroll…) to the separated business for a limited period at an agreed fee.', 'Accordo di servizi transitori: il venditore fornisce servizi (IT, paghe…) al business separato per un periodo limitato a un corrispettivo concordato.') },
      { id: 'fc-ma-sep-4', topic: 'ma-separations', front: t('How is a spin-off typically executed in Italy?', 'Come si realizza di solito uno spin-off in Italia?'), back: t('Through a scissione (art. 2506 ff. c.c.), generally tax-neutral under art. 173 TUIR.', 'Con una scissione (artt. 2506 ss. c.c.), in linea generale fiscalmente neutrale ex art. 173 TUIR.') }
    ],
    sources: [
      { label: 'Codice civile, artt. 2506 ss. (scissione) — Normattiva', url: 'https://www.normattiva.it/' },
      { label: 'TUIR (D.P.R. 917/1986), art. 173 — Normattiva', url: 'https://www.normattiva.it/' },
      { label: 'US Internal Revenue Code §355', url: 'https://www.law.cornell.edu/uscode/text/26/355' }
    ]
  },

  /* ================================================================== */
  /* M4 — ma-cross-border                                                */
  /* ================================================================== */
  {
    id: 'ma-cross-border',
    academyId: 'ma',
    moduleId: 'M4',
    mode: 'deep',
    minutes: 11,
    difficulty: 2,
    reviewed: '2026-10',
    objective: t(
      'Identify the extra risks of cross-border M&A — currency, tax, culture and foreign investment screening (CFIUS, EU framework, Italian golden power) — and quantify FX exposure on a deal.',
      'Individuare i rischi aggiuntivi dell’M&A internazionale — valuta, fiscalità, cultura e controllo degli investimenti esteri (CFIUS, quadro UE, golden power italiano) — e quantificare l’esposizione al cambio di un deal.'
    ),
    screens: [
      {
        type: 'intuition',
        title: t('Same deal, more moving parts', 'Stesso deal, più variabili'),
        body: t(
          'Buying abroad adds layers that a domestic deal does not have: the price may be fixed in a currency you don’t earn in, the target’s profits are taxed under another system, employees work in a different culture, and governments may review — or block — a foreign buyer of strategic assets.\n\nNone of these change what the business is worth on its own; all of them change what **you** end up paying, keeping and being allowed to do.',
          'Acquistare all’estero aggiunge livelli che un deal domestico non ha: il prezzo può essere in una valuta in cui non si incassa, gli utili del target sono tassati in un altro sistema, i dipendenti lavorano in un’altra cultura e i governi possono esaminare — o bloccare — un acquirente straniero di asset strategici.\n\nNulla di questo cambia quanto vale il business in sé; tutto cambia quanto **tu** finisci per pagare, trattenere e poter fare.'
        )
      },
      {
        type: 'technical',
        title: t('Currency and tax', 'Valuta e fiscalità'),
        body: t(
          '**FX**\n- Transaction risk between signing and closing: a euro buyer paying in dollars is exposed if the euro weakens. Tools: forwards, options, or **deal-contingent forwards** that fall away if the deal fails.\n- Translation and economic risk afterwards: target profits converted at future rates; matching debt currency to cash flows provides a natural hedge.\n\n**Tax**\n- Withholding taxes on dividends and interest flowing back (reduced by treaties and, in the EU, by directives).\n- Interest deductibility limits on acquisition debt (in the EU, ATAD’s 30%-of-EBITDA rule, in Italy art. 96 TUIR).\n- Transfer pricing, anti-hybrid and CFC rules that constrain post-deal structuring.',
          '**Cambio**\n- Rischio di transazione tra signing e closing: un acquirente in euro che paga in dollari è esposto se l’euro si indebolisce. Strumenti: forward, opzioni o **deal-contingent forward**, che decadono se il deal salta.\n- Rischio di traslazione ed economico dopo il closing: utili del target convertiti ai cambi futuri; indebitarsi nella valuta dei flussi è una copertura naturale.\n\n**Fiscalità**\n- Ritenute su dividendi e interessi in uscita (ridotte da trattati e, nell’UE, da direttive).\n- Limiti alla deducibilità degli interessi sul debito di acquisizione (nell’UE la regola del 30% dell’EBITDA dell’ATAD, in Italia l’art. 96 TUIR).\n- Transfer pricing, norme anti-ibridi e CFC che vincolano la strutturazione post-deal.'
        )
      },
      {
        type: 'formula',
        formulas: [
          {
            name: t('Price in home currency', 'Prezzo in valuta domestica'),
            expr: 'Price (€) = Price ($) / EUR/USD rate',
            vars: [{ sym: 'EUR/USD', desc: t('Dollars per one euro', 'Dollari per un euro') }]
          },
          {
            name: t('FX cost of an adverse move', 'Costo di un movimento sfavorevole del cambio'),
            expr: 'Δ Cost (€) = Price ($) / Rate at closing − Price ($) / Rate at signing'
          }
        ]
      },
      {
        type: 'example',
        title: t('A euro buyer, a dollar price', 'Acquirente in euro, prezzo in dollari'),
        body: t(
          'EuroCo agrees to buy US Target for $1,100m. At signing EUR/USD is 1.10; closing is six months away and EuroCo has not hedged.',
          'EuroCo concorda l’acquisto di US Target per $1.100m. Al signing EUR/USD è 1,10; il closing è tra sei mesi ed EuroCo non si è coperta.'
        ),
        table: {
          headers: [t('Scenario at closing', 'Scenario al closing'), t('EUR/USD', 'EUR/USD'), t('Cost (€m)', 'Costo (€m)'), t('vs signing (€m)', 'vs signing (€m)')],
          rows: [
            [t('Unchanged', 'Invariato'), '1.10', '1,000.0', '0.0'],
            [t('Euro weakens', 'Euro si indebolisce'), '1.05', '1,047.6', '+47.6'],
            [t('Euro strengthens', 'Euro si rafforza'), '1.15', '956.5', '−43.5']
          ]
        }
      },
      { type: 'exercise', questionId: 'ma-cb-q1' },
      {
        type: 'technical',
        title: t('Foreign investment screening', 'Il controllo sugli investimenti esteri'),
        body: t(
          '- **US — CFIUS**: an interagency committee reviewing foreign investments in US businesses for national security. FIRRMA (2018) widened its reach to certain non-controlling investments and made filings **mandatory** in some cases (e.g. certain critical-technology businesses). The President can block or unwind deals.\n- **EU — Regulation (EU) 2019/452**: a framework for national FDI screening and cooperation between Member States and the Commission; screening decisions remain national.\n- **Italy — golden power (D.L. 21/2012)**: the Government (Presidency of the Council of Ministers) must be notified of transactions involving assets in defence and national security, 5G and other strategic sectors (energy, transport, communications and others defined by decree). It can **veto**, impose **conditions (prescrizioni)** or oppose acquisitions; failure to notify is sanctioned.',
          '- **USA — CFIUS**: comitato interministeriale che esamina gli investimenti esteri in imprese statunitensi per ragioni di sicurezza nazionale. Il FIRRMA (2018) ne ha esteso la portata ad alcuni investimenti non di controllo e ha reso le notifiche **obbligatorie** in alcuni casi (es. alcune imprese di tecnologie critiche). Il Presidente può bloccare o far annullare i deal.\n- **UE — Regolamento (UE) 2019/452**: quadro per il controllo nazionale degli IDE e la cooperazione tra Stati membri e Commissione; le decisioni restano nazionali.\n- **Italia — golden power (D.L. 21/2012)**: alla Presidenza del Consiglio dei Ministri vanno notificate le operazioni su asset di difesa e sicurezza nazionale, 5G e altri settori strategici (energia, trasporti, comunicazioni e altri individuati con decreto). Il Governo può esercitare il **veto**, imporre **prescrizioni** od opporsi agli acquisti; la mancata notifica è sanzionata.'
        )
      },
      { type: 'exercise', questionId: 'ma-cb-q2' },
      {
        type: 'realworld',
        title: t('Culture and what the analyst does', 'Cultura e ruolo dell’analista'),
        body: t(
          'Many cross-border deals that look good on paper struggle in integration: different decision-making styles, labour relations (e.g. works councils and union consultation in continental Europe), language, and governance expectations.\n\nThe analyst’s cross-border checklist: model in both currencies with FX sensitivities; work with tax advisers on the acquisition structure (holding company, debt push-down, withholding taxes); map the regulatory filings (antitrust and FDI in each country) into the timetable and the SPA conditions; and size reverse termination fees if regulatory risk sits with the buyer.',
          'Molti deal internazionali che funzionano sulla carta faticano nell’integrazione: stili decisionali diversi, relazioni industriali (es. consultazione di comitati aziendali e sindacati nell’Europa continentale), lingua e aspettative di governance.\n\nLa checklist dell’analista: modellare in entrambe le valute con sensitività al cambio; lavorare con i consulenti fiscali sulla struttura di acquisizione (holding, debt push-down, ritenute); mappare le autorizzazioni (antitrust e IDE in ogni paese) nel calendario e nelle condizioni dello SPA; dimensionare le reverse termination fee se il rischio regolamentare è a carico dell’acquirente.'
        )
      },
      { type: 'exercise', questionId: 'ma-cb-q3' },
      {
        type: 'interview',
        question: t('How would you protect a euro-based client buying a US company for dollars?', 'Come proteggeresti un cliente in euro che compra una società USA in dollari?'),
        answer: t(
          'Between signing and closing the client is short dollars, so a weaker euro raises the euro cost. I’d hedge with a deal-contingent forward — it locks the rate but falls away if the deal doesn’t close, avoiding a speculative position — or with options if the client wants upside. After closing I’d consider funding part of the deal in dollar debt, so dollar cash flows service dollar liabilities, a natural hedge for the investment. And I’d show the board the accretion and leverage sensitivity to EUR/USD.',
          'Tra signing e closing il cliente è corto di dollari, quindi un euro più debole aumenta il costo in euro. Coprirei con un deal-contingent forward — blocca il cambio ma decade se il deal non si chiude, evitando una posizione speculativa — o con opzioni se il cliente vuole mantenere l’upside. Dopo il closing valuterei di finanziare parte del deal con debito in dollari, così i flussi in dollari servono passività in dollari: una copertura naturale dell’investimento. E mostrerei al CdA la sensitività di accrescimento e leva al cambio EUR/USD.'
        )
      },
      {
        type: 'mistakes',
        items: [
          t('Inverting the quote: with EUR/USD 1.10, €cost = $ / 1.10, not $ × 1.10.', 'Invertire la quotazione: con EUR/USD 1,10, costo in € = $ / 1,10, non $ × 1,10.'),
          t('Hedging with a plain forward that becomes a speculative position if the deal fails.', 'Coprirsi con un forward semplice che diventa speculativo se il deal salta.'),
          t('Leaving FDI filings out of the timetable — they can drive the closing date.', 'Non inserire le notifiche IDE nel calendario — possono determinare la data del closing.')
        ]
      },
      {
        type: 'summary',
        items: [
          t('FX: hedge signing-to-closing exposure; match debt currency to cash flows.', 'Cambio: coprire l’esposizione tra signing e closing; allineare la valuta del debito ai flussi.'),
          t('Tax: withholding, interest limitation and structuring drive after-tax returns.', 'Fiscalità: ritenute, limiti agli interessi e struttura determinano i rendimenti netti.'),
          t('FDI screening: CFIUS (US), Regulation 2019/452 (EU), golden power D.L. 21/2012 (Italy).', 'Controllo IDE: CFIUS (USA), Regolamento 2019/452 (UE), golden power D.L. 21/2012 (Italia).')
        ]
      }
    ],
    questions: [
      {
        id: 'ma-cb-q1',
        kind: 'numeric',
        topic: 'ma-cross-border',
        difficulty: 2,
        objective: t('Convert a foreign-currency price.', 'Convertire un prezzo in valuta estera.'),
        prompt: t(
          'A euro-based buyer must pay $1,100m at closing. EUR/USD at closing is 1.05 (dollars per euro). What is the cost in euros (€m)?',
          'Un acquirente in euro deve pagare $1.100m al closing. Al closing EUR/USD è 1,05 (dollari per euro). Qual è il costo in euro (€m)?'
        ),
        answer: 1047.6,
        unit: '€m',
        tolerance: { abs: 0.1 },
        verify: { fn: 'ratio', args: [1100, 1.05] },
        explanation: t(
          '1,100 / 1.05 = €1,047.6m, €47.6m more than at 1.10. Multiplying (1,155) treats the quote as euros per dollar.',
          '1.100 / 1,05 = €1.047,6m, €47,6m in più che a 1,10. Moltiplicare (1.155) tratta la quotazione come euro per dollaro.'
        )
      },
      {
        id: 'ma-cb-q2',
        kind: 'mcq',
        topic: 'ma-cross-border',
        difficulty: 2,
        objective: t('Identify the Italian FDI screening regime.', 'Individuare il regime italiano di controllo degli IDE.'),
        prompt: t(
          'A non-EU buyer wants control of an Italian operator of strategic energy infrastructure. Which regime requires notification to the Italian Government?',
          'Un acquirente extra-UE vuole il controllo di un operatore italiano di infrastrutture energetiche strategiche. Quale regime impone la notifica al Governo italiano?'
        ),
        choices: [
          t('Golden power (D.L. 21/2012)', 'Golden power (D.L. 21/2012)'),
          t('Mandatory OPA under art. 106 TUF', 'OPA obbligatoria ex art. 106 TUF'),
          t('EU Merger Regulation only', 'Solo il Regolamento UE sulle concentrazioni'),
          t('CFIUS', 'CFIUS')
        ],
        correct: 0,
        explanation: t(
          'The golden power regime covers transactions involving strategic assets, including energy. The OPA rules concern listed-company control, antitrust review addresses competition (and may apply in parallel), and CFIUS screens investments in US businesses.',
          'Il golden power riguarda le operazioni su asset strategici, energia inclusa. Le regole OPA riguardano il controllo di società quotate, il controllo antitrust la concorrenza (e può applicarsi in parallelo), il CFIUS gli investimenti in imprese statunitensi.'
        )
      },
      {
        id: 'ma-cb-q3',
        kind: 'multi',
        topic: 'ma-cross-border',
        difficulty: 2,
        objective: t('Recognise cross-border specific risks.', 'Riconoscere i rischi specifici dell’M&A internazionale.'),
        prompt: t('Which risks are specific to (or much larger in) cross-border deals? Select all that apply.', 'Quali rischi sono specifici (o molto maggiori) nei deal internazionali? Seleziona tutte le risposte corrette.'),
        choices: [
          t('Currency movements between signing and closing', 'Movimenti del cambio tra signing e closing'),
          t('Withholding taxes on upstream dividends', 'Ritenute sui dividendi distribuiti alla capogruppo'),
          t('Foreign investment screening', 'Controllo sugli investimenti esteri'),
          t('Different labour-relations and governance cultures', 'Diverse culture di relazioni industriali e governance'),
          t('Needing a sources and uses table', 'La necessità di una tabella fonti e impieghi')
        ],
        correct: [0, 1, 2, 3],
        explanation: t(
          'FX, cross-border tax leakage, FDI screening and cultural differences are all cross-border issues. Every deal, domestic or not, needs a sources and uses table.',
          'Cambio, costi fiscali transfrontalieri, controllo IDE e differenze culturali sono tutti temi cross-border. Ogni deal, domestico o no, richiede una tabella fonti e impieghi.'
        )
      },
      {
        id: 'ma-cb-q4',
        kind: 'numeric',
        topic: 'ma-cross-border',
        difficulty: 2,
        objective: t('Quantify FX exposure on an unhedged deal.', 'Quantificare l’esposizione al cambio di un deal non coperto.'),
        prompt: t(
          'Price $2,200m. EUR/USD moves from 1.10 at signing to 1.00 at closing. By how much does the euro cost increase (€m)?',
          'Prezzo $2.200m. EUR/USD passa da 1,10 al signing a 1,00 al closing. Di quanto aumenta il costo in euro (€m)?'
        ),
        answer: 200,
        unit: '€m',
        verify: { fn: 'diff', args: [2200, 2000] },
        explanation: t(
          '2,200 / 1.00 = 2,200 vs 2,200 / 1.10 = 2,000 → +€200m (10% more). A move of this size can wipe out a year of synergies, which is why buyers hedge.',
          '2.200 / 1,00 = 2.200 contro 2.200 / 1,10 = 2.000 → +€200m (10% in più). Un movimento di questa entità può annullare un anno di sinergie: per questo gli acquirenti si coprono.'
        )
      }
    ],
    flashcards: [
      { id: 'fc-ma-cb-1', topic: 'ma-cross-border', front: t('What is a deal-contingent forward?', 'Cos’è un deal-contingent forward?'), back: t('An FX forward that only settles if the acquisition closes, hedging signing-to-closing exposure without speculative risk if the deal fails.', 'Un forward su cambi che si regola solo se l’acquisizione si chiude, coprendo l’esposizione tra signing e closing senza rischio speculativo se il deal salta.') },
      { id: 'fc-ma-cb-2', topic: 'ma-cross-border', front: t('Italian golden power legal basis?', 'Base normativa del golden power italiano?'), back: t('D.L. 21/2012 (as amended): Government powers over transactions in defence/national security, 5G and other strategic sectors.', 'D.L. 21/2012 (e successive modifiche): poteri del Governo sulle operazioni in difesa/sicurezza nazionale, 5G e altri settori strategici.') },
      { id: 'fc-ma-cb-3', topic: 'ma-cross-border', front: t('What does CFIUS do?', 'Cosa fa il CFIUS?'), back: t('Reviews foreign investments in US businesses for national security risks; FIRRMA (2018) expanded its jurisdiction and introduced mandatory filings in some cases.', 'Esamina gli investimenti esteri in imprese USA per rischi alla sicurezza nazionale; il FIRRMA (2018) ne ha ampliato la competenza e introdotto notifiche obbligatorie in alcuni casi.') },
      { id: 'fc-ma-cb-4', topic: 'ma-cross-border', front: t('EU FDI screening framework?', 'Quadro UE sul controllo degli IDE?'), back: t('Regulation (EU) 2019/452: cooperation framework; screening decisions remain with Member States.', 'Regolamento (UE) 2019/452: quadro di cooperazione; le decisioni restano agli Stati membri.') }
    ],
    sources: [
      { label: 'D.L. 15 marzo 2012, n. 21 (golden power) — Normattiva', url: 'https://www.normattiva.it/' },
      { label: 'Regulation (EU) 2019/452 establishing a framework for the screening of FDI (EUR-Lex)', url: 'https://eur-lex.europa.eu/eli/reg/2019/452/oj' },
      { label: 'US Department of the Treasury — CFIUS', url: 'https://home.treasury.gov/policy-issues/international/the-committee-on-foreign-investment-in-the-united-states-cfius' },
      { label: 'Council Directive (EU) 2016/1164 (ATAD), art. 4 interest limitation (EUR-Lex)', url: 'https://eur-lex.europa.eu/eli/dir/2016/1164/oj' }
    ]
  }
  ,
  /* ================================================================== */
  /* M4 — ma-antitrust                                                   */
  /* ================================================================== */
  {
    id: 'ma-antitrust',
    academyId: 'ma',
    moduleId: 'M4',
    mode: 'deep',
    minutes: 14,
    difficulty: 3,
    reviewed: '2026-10',
    objective: t(
      'Explain how merger control works in the EU, US, UK and Italy — jurisdiction, timelines, substantive tests, remedies and gun-jumping — and compute concentration measures (HHI).',
      'Spiegare il funzionamento del controllo delle concentrazioni in UE, USA, Regno Unito e Italia — competenza, tempi, test sostanziali, rimedi e gun-jumping — e calcolare gli indici di concentrazione (HHI).'
    ),
    screens: [
      {
        type: 'intuition',
        title: t('Why regulators can say no', 'Perché i regolatori possono dire di no'),
        body: t(
          'When two competitors merge, customers lose a choice. If enough of them have nowhere else to go, the merged company can raise prices or cut quality. Merger control lets authorities review deals **before** they close and block or condition those that would significantly harm competition.\n\nFor bankers, antitrust is a **deal-certainty** question: how long will approval take, what might we have to sell, and who bears the risk if the deal is blocked?',
          'Quando due concorrenti si fondono, i clienti perdono un’alternativa. Se molti di loro non hanno altre opzioni, la società combinata può aumentare i prezzi o ridurre la qualità. Il controllo delle concentrazioni consente alle autorità di esaminare i deal **prima** del closing e di vietare o condizionare quelli che ostacolerebbero significativamente la concorrenza.\n\nPer i banker l’antitrust è una questione di **certezza del deal**: quanto durerà l’autorizzazione, cosa potremmo dover cedere e chi sopporta il rischio se il deal è vietato?'
        )
      },
      {
        type: 'technical',
        title: t('EU Merger Regulation (139/2004)', 'Regolamento UE sulle concentrazioni (139/2004)'),
        body: t(
          '- **Jurisdiction** (art. 1(2)): combined worldwide turnover > €5bn **and** EU-wide turnover of each of at least two parties > €250m — unless each achieves more than two-thirds of its EU turnover in the same Member State. Art. 1(3) adds alternative lower thresholds. EU jurisdiction is a **one-stop shop** replacing national reviews.\n- **Standstill** (art. 7): no closing before clearance.\n- **Phase I**: 25 working days (35 if commitments are offered or a Member State requests a referral).\n- **Phase II**: in-depth review, 90 working days, extendable (e.g. +15 if commitments are offered late, up to +20 on request).\n- **Test**: whether the deal would **significantly impede effective competition** (SIEC), in particular by creating or strengthening a dominant position.',
          '- **Competenza** (art. 1(2)): fatturato mondiale aggregato > €5 mld **e** fatturato UE di almeno due parti > €250m ciascuna — salvo che ciascuna realizzi oltre due terzi del fatturato UE nello stesso Stato membro. L’art. 1(3) prevede soglie alternative più basse. La competenza UE è un **one-stop shop** che sostituisce i controlli nazionali.\n- **Obbligo di sospensione** (art. 7): nessun closing prima dell’autorizzazione.\n- **Fase I**: 25 giorni lavorativi (35 se si offrono impegni o uno Stato membro chiede un rinvio).\n- **Fase II**: istruttoria approfondita, 90 giorni lavorativi, prorogabili (es. +15 se gli impegni arrivano tardi, fino a +20 su richiesta).\n- **Test**: se il deal **ostacola in modo significativo una concorrenza effettiva** (SIEC), in particolare creando o rafforzando una posizione dominante.'
        )
      },
      {
        type: 'technical',
        title: t('US, UK and Italy', 'USA, Regno Unito e Italia'),
        body: t(
          '- **US — HSR Act**: filing with FTC and DOJ when thresholds are met (size-of-transaction threshold $133.9m from 17 Feb 2026, adjusted annually). 30-day initial waiting period (15 for cash tender offers); a **Second Request** extends review. Test: substantially lessen competition (Clayton Act §7).\n- **UK — CMA**: **voluntary** and non-suspensory, but the CMA can call in deals and impose hold-separate orders. Jurisdiction (since 1 Jan 2025): target UK turnover > £100m, a 25% share of supply, or a hybrid test. Phase 1: 40 working days; Phase 2 in-depth.\n- **Italy — AGCM** (L. 287/1990, art. 16): mandatory pre-notification when two cumulative Italian-turnover thresholds, updated yearly, are exceeded; AGCM can also call in certain below-threshold deals. Phase I 30 days; Phase II 45 days (extendable).',
          '- **USA — HSR Act**: notifica a FTC e DOJ al superamento delle soglie (size-of-transaction di $133,9m dal 17 febbraio 2026, aggiornata ogni anno). Periodo di attesa iniziale di 30 giorni (15 per le offerte pubbliche in contanti); una **Second Request** prolunga l’esame. Test: riduzione sostanziale della concorrenza (Clayton Act §7).\n- **Regno Unito — CMA**: regime **volontario** e non sospensivo, ma la CMA può avocare i deal e imporre misure di separazione. Competenza (dal 1° gennaio 2025): fatturato UK del target > £100m, quota del 25% delle forniture o un test ibrido. Fase 1: 40 giorni lavorativi; Fase 2 approfondita.\n- **Italia — AGCM** (L. 287/1990, art. 16): notifica preventiva obbligatoria al superamento di due soglie cumulative di fatturato italiano, aggiornate ogni anno; l’AGCM può anche richiedere la notifica di alcune operazioni sotto soglia. Fase I 30 giorni; Fase II 45 giorni (prorogabili).'
        )
      },
      {
        type: 'formula',
        formulas: [
          {
            name: t('Herfindahl-Hirschman Index', 'Indice di Herfindahl-Hirschman'),
            expr: 'HHI = Σ (market share_i in %)²',
            vars: [{ sym: 'share_i', desc: t('Market share of firm i, in percentage points', 'Quota di mercato dell’impresa i, in punti percentuali') }]
          },
          {
            name: t('Change in HHI from a merger', 'Variazione dell’HHI dovuta alla concentrazione'),
            expr: 'ΔHHI = 2 × s_A × s_B'
          }
        ],
        note: t(
          'US 2023 Merger Guidelines: a merger is presumed to substantially lessen competition if post-merger HHI > 1,800 and ΔHHI > 100. EU Horizontal Merger Guidelines: concerns are unlikely if post-merger HHI is 1,000–2,000 with Δ < 250, or > 2,000 with Δ < 150 (absent special circumstances).',
          'Merger Guidelines USA 2023: si presume una riduzione sostanziale della concorrenza se l’HHI post-fusione > 1.800 e ΔHHI > 100. Orientamenti UE sulle concentrazioni orizzontali: problemi improbabili se l’HHI post-fusione è tra 1.000 e 2.000 con Δ < 250, o > 2.000 con Δ < 150 (salvo circostanze particolari).'
        )
      },
      {
        type: 'example',
        title: t('Merging numbers 2 and 3', 'La fusione tra il secondo e il terzo operatore'),
        body: t(
          'A market has five firms with shares of 30%, 25%, 20%, 15% and 10%. Firms B (25%) and C (20%) propose to merge.',
          'Un mercato ha cinque imprese con quote del 30%, 25%, 20%, 15% e 10%. Le imprese B (25%) e C (20%) propongono di fondersi.'
        ),
        table: {
          headers: [t('Measure', 'Misura'), t('Calculation', 'Calcolo'), t('Value', 'Valore')],
          rows: [
            [t('Pre-merger HHI', 'HHI pre-fusione'), '900 + 625 + 400 + 225 + 100', '2,250'],
            [t('ΔHHI', 'ΔHHI'), '2 × 25 × 20', '1,000'],
            [t('Post-merger HHI', 'HHI post-fusione'), '900 + 2,025 + 225 + 100', '3,250'],
            [t('Combined share', 'Quota combinata'), '25% + 20%', '45%']
          ]
        }
      },
      { type: 'exercise', questionId: 'ma-at-q1' },
      { type: 'exercise', questionId: 'ma-at-q2' },
      {
        type: 'technical',
        title: t('Remedies and gun-jumping', 'Rimedi e gun-jumping'),
        body: t(
          '**Remedies** let a problematic deal proceed:\n- **Structural**: divest a business or brand that removes the overlap — preferred by most authorities; sometimes with an **upfront buyer** or a **fix-it-first** sale.\n- **Behavioural**: access, supply or interoperability commitments — harder to monitor, used more for vertical issues.\n\n**Gun-jumping** = implementing the deal before clearance: closing early, or the buyer taking control of the target’s commercial decisions (pricing, customers) during the standstill, or exchanging competitively sensitive information. Under the EUMR fines can reach 10% of aggregate turnover (art. 14); the Commission fined Altice in 2018 for gun-jumping in its acquisition of PT Portugal.',
          'I **rimedi** consentono di procedere con un deal problematico:\n- **Strutturali**: cessione di un business o marchio che elimina la sovrapposizione — preferiti dalla maggior parte delle autorità; talvolta con un **upfront buyer** o una cessione **fix-it-first**.\n- **Comportamentali**: impegni di accesso, fornitura o interoperabilità — più difficili da monitorare, usati soprattutto per problemi verticali.\n\n**Gun-jumping** = attuare il deal prima dell’autorizzazione: chiudere in anticipo, o l’acquirente che controlla decisioni commerciali del target (prezzi, clienti) durante la sospensione, o scambi di informazioni sensibili. Con il Regolamento UE le sanzioni possono arrivare al 10% del fatturato aggregato (art. 14); nel 2018 la Commissione ha sanzionato Altice per gun-jumping nell’acquisizione di PT Portugal.'
        )
      },
      {
        type: 'realworld',
        title: t('Antitrust in the deal documents', 'L’antitrust nei documenti del deal'),
        body: t(
          'Regulatory risk is allocated in the SPA/merger agreement: **conditions precedent** (clearances), a **long-stop date**, an **efforts covenant** (e.g. "hell or high water" obliging the buyer to accept any remedies), and a **reverse termination fee** paid by the buyer if clearance fails.\n\nThe analyst supports counsel by mapping filing jurisdictions from revenue by country, building market-share tables from industry data, modelling the EBITDA lost if remedies are required, and sizing the reverse break fee. The timetable slide — signing, filings, Phase I/II scenarios, long-stop — is a staple of the board deck.',
          'Il rischio regolamentare si ripartisce nello SPA/merger agreement: **condizioni sospensive** (autorizzazioni), una **long-stop date**, un **obbligo di best efforts** (es. "hell or high water", che impone all’acquirente di accettare qualsiasi rimedio) e una **reverse termination fee** pagata dall’acquirente se l’autorizzazione non arriva.\n\nL’analista supporta i legali mappando le giurisdizioni di notifica dai ricavi per paese, costruendo tabelle di quote di mercato da dati di settore, modellando l’EBITDA perso in caso di rimedi e dimensionando la reverse break fee. La slide del calendario — signing, notifiche, scenari di Fase I/II, long-stop — è un classico della presentazione al CdA.'
        )
      },
      { type: 'exercise', questionId: 'ma-at-q3' },
      {
        type: 'interview',
        question: t('Your client is acquiring its closest competitor. How do you think about antitrust risk?', 'Il tuo cliente acquisisce il suo concorrente più vicino. Come valuti il rischio antitrust?'),
        answer: t(
          'First, jurisdiction: which regimes are triggered — EU or national filings in Europe, HSR in the US, possibly the CMA — and their timelines. Second, substance: combined shares and HHI in each relevant market, closeness of competition, barriers to entry and customer reactions. If a Phase II looks likely, I’d plan for a longer long-stop date and identify divestment packages early. Third, risk allocation: efforts covenant and a reverse termination fee. Finally, I’d model the deal with the likely remedies to check it still makes sense.',
          'Primo, competenza: quali regimi scattano — notifica UE o nazionali in Europa, HSR negli USA, eventualmente la CMA — e con quali tempi. Secondo, merito: quote combinate e HHI in ogni mercato rilevante, prossimità concorrenziale, barriere all’ingresso e reazione dei clienti. Se la Fase II è probabile, prevederei una long-stop date più lunga e individuerei presto i pacchetti di cessione. Terzo, ripartizione del rischio: obbligo di efforts e reverse termination fee. Infine, modellerei il deal con i rimedi probabili per verificare che abbia ancora senso.'
        )
      },
      {
        type: 'mistakes',
        items: [
          t('Treating the UK regime like the EU one: the CMA regime is voluntary and non-suspensory, but the CMA can still intervene.', 'Trattare il regime UK come quello UE: il regime CMA è volontario e non sospensivo, ma la CMA può comunque intervenire.'),
          t('Integrating commercially (pricing, customers) before clearance — that is gun-jumping.', 'Integrare commercialmente (prezzi, clienti) prima dell’autorizzazione — è gun-jumping.'),
          t('Quoting fixed national thresholds from memory: many (HSR, AGCM) are updated every year.', 'Citare a memoria soglie nazionali fisse: molte (HSR, AGCM) sono aggiornate ogni anno.')
        ]
      },
      {
        type: 'summary',
        items: [
          t('EUMR: €5bn / €250m test, standstill, Phase I 25 WD, Phase II 90 WD, SIEC test.', 'Regolamento UE: soglie €5 mld / €250m, sospensione, Fase I 25 gg lav., Fase II 90 gg lav., test SIEC.'),
          t('US HSR: 30-day waiting period, Second Request; UK CMA voluntary; Italy AGCM thresholds updated yearly.', 'USA HSR: attesa di 30 giorni, Second Request; UK CMA volontario; Italia soglie AGCM aggiornate ogni anno.'),
          t('HHI = Σ shares²; ΔHHI = 2 × s_A × s_B. Remedies: structural vs behavioural. No gun-jumping.', 'HHI = Σ quote²; ΔHHI = 2 × s_A × s_B. Rimedi: strutturali vs comportamentali. Niente gun-jumping.')
        ]
      }
    ],
    questions: [
      {
        id: 'ma-at-q1',
        kind: 'grid',
        topic: 'ma-antitrust',
        difficulty: 2,
        objective: t('Compute HHI before and after a merger.', 'Calcolare l’HHI prima e dopo una concentrazione.'),
        prompt: t(
          'Market shares: A 35%, B 20%, C 15%, D 15%, E 15%. B and C merge. Complete the table.',
          'Quote di mercato: A 35%, B 20%, C 15%, D 15%, E 15%. B e C si fondono. Completa la tabella.'
        ),
        columns: [t('Measure', 'Misura'), t('Value', 'Valore')],
        rows: [
          { label: t('Pre-merger HHI', 'HHI pre-fusione'), cells: [{ answer: 2300, verify: { fn: 'sum', args: [1225, 400, 225, 225, 225] } }] },
          { label: t('ΔHHI', 'ΔHHI'), cells: [{ answer: 600, verify: { fn: 'product', args: [2, 20, 15] } }] },
          { label: t('Post-merger HHI', 'HHI post-fusione'), cells: [{ answer: 2900, verify: { fn: 'sum', args: [2300, 600] } }] }
        ],
        explanation: t(
          'Pre: 35² + 20² + 15² × 3 = 1,225 + 400 + 675 = 2,300. Δ = 2 × 20 × 15 = 600. Post = 2,900 (check: 35² + 35² + 15² + 15² = 2,900). Above 1,800 with Δ > 100, the deal would be presumed anticompetitive under the US 2023 Merger Guidelines, and well outside the EU safe harbours.',
          'Pre: 35² + 20² + 15² × 3 = 1.225 + 400 + 675 = 2.300. Δ = 2 × 20 × 15 = 600. Post = 2.900 (verifica: 35² + 35² + 15² + 15² = 2.900). Sopra 1.800 con Δ > 100, il deal sarebbe presunto anticoncorrenziale secondo le Merger Guidelines USA 2023, e ben fuori dalle soglie di sicurezza UE.'
        )
      },
      {
        id: 'ma-at-q2',
        kind: 'mcq',
        topic: 'ma-antitrust',
        difficulty: 2,
        objective: t('Apply the EUMR jurisdictional test.', 'Applicare il test di competenza del Regolamento UE.'),
        prompt: t(
          'Combined worldwide turnover €8bn. EU turnover: buyer €3bn, target €400m; neither earns more than two-thirds of its EU turnover in one Member State. Which is correct under art. 1(2) EUMR?',
          'Fatturato mondiale aggregato €8 mld. Fatturato UE: acquirente €3 mld, target €400m; nessuna realizza oltre due terzi del fatturato UE in un solo Stato membro. Quale affermazione è corretta ai sensi dell’art. 1(2) del Regolamento?'
        ),
        choices: [
          t('EU dimension: notify the Commission, no closing before clearance', 'Dimensione UE: notifica alla Commissione, nessun closing prima dell’autorizzazione'),
          t('No EU dimension because the target’s EU turnover is below €500m', 'Nessuna dimensione UE perché il fatturato UE del target è sotto €500m'),
          t('Notify in every Member State where the parties sell', 'Notificare in ogni Stato membro in cui le parti vendono'),
          t('Notification is voluntary, as in the UK', 'La notifica è volontaria, come nel Regno Unito')
        ],
        correct: 0,
        explanation: t(
          'Worldwide €8bn > €5bn and each party’s EU turnover > €250m, with no two-thirds exception: EU dimension. The Commission becomes a one-stop shop (national filings are generally displaced), notification is mandatory and suspensory.',
          'Mondiale €8 mld > €5 mld e fatturato UE di ciascuna parte > €250m, senza l’eccezione dei due terzi: dimensione UE. La Commissione diventa sportello unico (le notifiche nazionali sono di regola escluse), la notifica è obbligatoria e sospensiva.'
        )
      },
      {
        id: 'ma-at-q3',
        kind: 'multi',
        topic: 'ma-antitrust',
        difficulty: 2,
        objective: t('Recognise gun-jumping.', 'Riconoscere il gun-jumping.'),
        prompt: t(
          'Between signing and EU clearance, which actions risk gun-jumping? Select all that apply.',
          'Tra signing e autorizzazione UE, quali azioni rischiano di configurare gun-jumping? Seleziona tutte le risposte corrette.'
        ),
        choices: [
          t('The buyer approving the target’s pricing to key customers', 'L’acquirente che approva i prezzi del target ai clienti chiave'),
          t('Sharing current customer-level pricing data outside a clean team', 'Condividere prezzi correnti per cliente al di fuori di un clean team'),
          t('Planning post-closing integration using aggregated, non-sensitive data', 'Pianificare l’integrazione post-closing con dati aggregati e non sensibili'),
          t('Ordinary-course covenants preventing the target from selling major assets', 'Covenant di gestione ordinaria che vietano al target di cedere asset rilevanti'),
          t('Closing before clearance because the long-stop date is near', 'Chiudere prima dell’autorizzazione perché la long-stop date è vicina')
        ],
        correct: [0, 1, 4],
        explanation: t(
          'Controlling commercial decisions, exchanging sensitive information outside clean-team protocols and closing early all breach the standstill. Integration planning with appropriate safeguards and customary covenants protecting the target’s value are generally permitted.',
          'Controllare decisioni commerciali, scambiare informazioni sensibili fuori dai protocolli di clean team e chiudere in anticipo violano l’obbligo di sospensione. Pianificare l’integrazione con le dovute cautele e i covenant usuali a tutela del valore del target sono in genere ammessi.'
        )
      },
      {
        id: 'ma-at-q4',
        kind: 'numeric',
        topic: 'ma-antitrust',
        difficulty: 1,
        objective: t('Compute the change in HHI.', 'Calcolare la variazione dell’HHI.'),
        prompt: t('Two firms with 12% and 8% market share merge. What is ΔHHI?', 'Si fondono due imprese con quote del 12% e dell’8%. Qual è il ΔHHI?'),
        answer: 192,
        verify: { fn: 'product', args: [2, 12, 8] },
        explanation: t(
          'ΔHHI = 2 × 12 × 8 = 192 (= 20² − 12² − 8²). Using decimals (0.0192) mixes scales: HHI uses percentage points.',
          'ΔHHI = 2 × 12 × 8 = 192 (= 20² − 12² − 8²). Usare i decimali (0,0192) confonde le scale: l’HHI usa i punti percentuali.'
        )
      },
      {
        id: 'ma-at-q5',
        kind: 'mcq',
        topic: 'ma-antitrust',
        difficulty: 2,
        objective: t('Identify risk-allocation tools for regulatory risk.', 'Individuare gli strumenti di ripartizione del rischio regolamentare.'),
        prompt: t(
          'A seller fears the buyer will walk away if a regulator demands divestitures. Which clause best protects it?',
          'Un venditore teme che l’acquirente si ritiri se un’autorità chiede cessioni. Quale clausola lo tutela meglio?'
        ),
        choices: [
          t('A material adverse change clause', 'Una clausola MAC'),
          t('A "hell or high water" efforts covenant plus a reverse termination fee', 'Un obbligo "hell or high water" più una reverse termination fee'),
          t('A locked box mechanism', 'Un meccanismo di locked box'),
          t('A no-shop clause', 'Una clausola di no-shop')
        ],
        correct: 1,
        explanation: t(
          'Hell or high water obliges the buyer to accept remedies needed for clearance; the reverse termination fee compensates the seller if clearance still fails. A MAC protects the buyer, a locked box concerns price, and a no-shop restricts the seller.',
          'L’"hell or high water" obbliga l’acquirente ad accettare i rimedi necessari all’autorizzazione; la reverse termination fee indennizza il venditore se l’autorizzazione comunque non arriva. La MAC tutela l’acquirente, il locked box riguarda il prezzo, il no-shop vincola il venditore.'
        )
      }
    ],
    flashcards: [
      { id: 'fc-ma-at-1', topic: 'ma-antitrust', front: t('EUMR primary thresholds (art. 1(2))?', 'Soglie principali del Regolamento UE (art. 1(2))?'), back: t('Combined worldwide turnover > €5bn and EU turnover of each of at least two parties > €250m (two-thirds rule exception).', 'Fatturato mondiale aggregato > €5 mld e fatturato UE di almeno due parti > €250m ciascuna (salvo regola dei due terzi).') },
      { id: 'fc-ma-at-2', topic: 'ma-antitrust', front: t('EU Phase I and Phase II durations?', 'Durata di Fase I e Fase II UE?'), back: t('Phase I: 25 working days (35 with commitments/referral request). Phase II: 90 working days, extendable.', 'Fase I: 25 giorni lavorativi (35 con impegni o richiesta di rinvio). Fase II: 90 giorni lavorativi, prorogabili.') },
      { id: 'fc-ma-at-3', topic: 'ma-antitrust', front: t('HSR initial waiting period?', 'Periodo di attesa iniziale HSR?'), back: t('30 days (15 for cash tender offers); extended by a Second Request.', '30 giorni (15 per le offerte pubbliche in contanti); prolungato da una Second Request.') },
      { id: 'fc-ma-at-4', topic: 'ma-antitrust', front: t('What is gun-jumping?', 'Cos’è il gun-jumping?'), back: t('Implementing a notifiable deal before clearance — early closing or taking control of the target’s commercial conduct.', 'Attuare un’operazione soggetta a notifica prima dell’autorizzazione — closing anticipato o controllo della condotta commerciale del target.') },
      { id: 'fc-ma-at-5', topic: 'ma-antitrust', front: t('UK CMA thresholds since 1 Jan 2025?', 'Soglie CMA dal 1° gennaio 2025?'), back: t('Target UK turnover > £100m, or 25% share of supply (with increment), or hybrid test (one party ≥33% share and > £350m UK turnover).', 'Fatturato UK del target > £100m, o quota del 25% delle forniture (con incremento), o test ibrido (una parte con quota ≥33% e fatturato UK > £350m).') }
    ],
    sources: [
      { label: 'Council Regulation (EC) No 139/2004 (EUMR) — EUR-Lex', url: 'https://eur-lex.europa.eu/eli/reg/2004/139/oj' },
      { label: 'EU Guidelines on the assessment of horizontal mergers (2004/C 31/03)', url: 'https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX:52004XC0205(02)' },
      { label: 'FTC — HSR threshold adjustments (2026: $133.9m, effective 17 Feb 2026)', url: 'https://www.ftc.gov/enforcement/premerger-notification-program' },
      { label: 'US DOJ/FTC Merger Guidelines (2023)', url: 'https://www.justice.gov/atr/merger-guidelines' },
      { label: 'UK Digital Markets, Competition and Consumers Act 2024 / CMA2 guidance on jurisdiction and procedure', url: 'https://www.gov.uk/government/organisations/competition-and-markets-authority' },
      { label: 'Legge 10 ottobre 1990, n. 287, art. 16; AGCM thresholds update (2026)', url: 'https://www.agcm.it/' }
    ]
  },

  /* ================================================================== */
  /* M4 — ma-pmi                                                         */
  /* ================================================================== */
  {
    id: 'ma-pmi',
    academyId: 'ma',
    moduleId: 'M4',
    mode: 'quick',
    minutes: 9,
    difficulty: 2,
    reviewed: '2026-10',
    qualitative: true,
    objective: t(
      'Describe how post-merger integration is planned and governed, how synergies are tracked, and why culture and IT drive success or failure.',
      'Descrivere come si pianifica e governa l’integrazione post-acquisizione, come si monitorano le sinergie e perché cultura e IT determinano successo o fallimento.'
    ),
    screens: [
      {
        type: 'intuition',
        title: t('Value is promised at signing, earned in integration', 'Il valore si promette al signing e si guadagna nell’integrazione'),
        body: t(
          'The merger model shows synergies on a spreadsheet. Integration is where real people have to close the duplicate warehouse, move customers to one system and decide who runs sales.\n\nMost value lost in M&A is lost here: key people leave, customers drift to competitors during the confusion, IT migrations slip, and the cultures never really merge.',
          'Il merger model mostra le sinergie in un foglio di calcolo. Nell’integrazione persone reali devono chiudere il magazzino doppio, migrare i clienti su un unico sistema e decidere chi guida le vendite.\n\nLa maggior parte del valore perso nell’M&A si perde qui: le persone chiave se ne vanno, i clienti passano ai concorrenti nella confusione, le migrazioni IT slittano e le culture non si fondono mai davvero.'
        )
      },
      {
        type: 'technical',
        title: t('How integration is organised', 'Come si organizza l’integrazione'),
        body: t(
          '- **Before closing**: integration hypotheses formed in due diligence; an **Integration Management Office (IMO)** set up; functional workstreams (finance, HR, IT, operations, commercial) plan Day 1. Competitively sensitive data is shared only through **clean teams** to avoid gun-jumping.\n- **Day 1**: legal close, communications to employees, customers and suppliers, new leadership announced, treasury and payments working, no business disruption.\n- **First 100 days**: organisation design, quick-win synergies, retention of key talent.\n- **Full integration (1–3 years)**: systems migration, footprint consolidation, synergy capture, exit from TSAs.',
          '- **Prima del closing**: ipotesi di integrazione nate in due diligence; creazione di un **Integration Management Office (IMO)**; i workstream funzionali (finanza, HR, IT, operations, commerciale) pianificano il Day 1. I dati sensibili si condividono solo tramite **clean team** per evitare il gun-jumping.\n- **Day 1**: closing legale, comunicazione a dipendenti, clienti e fornitori, annuncio del nuovo management, tesoreria e pagamenti operativi, nessuna interruzione del business.\n- **Primi 100 giorni**: disegno organizzativo, sinergie "quick win", retention dei talenti chiave.\n- **Integrazione completa (1–3 anni)**: migrazione dei sistemi, razionalizzazione dei siti, cattura delle sinergie, uscita dai TSA.'
        )
      },
      {
        type: 'example',
        title: t('Synergy tracking dashboard', 'Cruscotto di monitoraggio delle sinergie'),
        body: t(
          'Twelve months after closing, the IMO reports to the board against the €60m run-rate cost-synergy target announced at signing.',
          'Dodici mesi dopo il closing, l’IMO riferisce al CdA rispetto al target di €60m di sinergie di costo a regime annunciato al signing.'
        ),
        table: {
          headers: [t('Workstream', 'Workstream'), t('Target run-rate (€m)', 'Target a regime (€m)'), t('Actioned run-rate (€m)', 'Run-rate avviato (€m)'), t('Status', 'Stato')],
          rows: [
            [t('Procurement', 'Acquisti'), '25', '21', t('On track', 'In linea')],
            [t('SG&A / headcount', 'Costi generali / personale'), '20', '15', t('On track', 'In linea')],
            [t('Footprint', 'Siti produttivi'), '10', '4', t('Delayed (union talks)', 'In ritardo (trattativa sindacale)')],
            [t('IT', 'IT'), '5', '2', t('At risk (migration slip)', 'A rischio (ritardo migrazione)')],
            [t('Total', 'Totale'), '60', '42', '70%']
          ],
          totalRows: [4]
        }
      },
      { type: 'exercise', questionId: 'ma-pmi-q1' },
      {
        type: 'technical',
        title: t('Culture and IT', 'Cultura e IT'),
        body: t(
          '**Culture**: decision rights, risk appetite, sales incentives and management style differ. Practical tools: a cultural assessment during diligence, clear leadership choices early, retention packages for critical people, and consistent communication. Uncertainty is the enemy — talent leaves when it does not know its future.\n\n**IT**: often the longest and most expensive workstream (ERP, CRM, data, cyber). Decisions: adopt one platform, keep both temporarily, or build new. IT timelines drive when many synergies can actually be captured and when TSAs can be exited.',
          '**Cultura**: diritti decisionali, propensione al rischio, incentivi commerciali e stile di management differiscono. Strumenti pratici: un assessment culturale in due diligence, scelte di leadership chiare e rapide, pacchetti di retention per le persone critiche e comunicazione coerente. L’incertezza è il nemico — i talenti se ne vanno quando non conoscono il proprio futuro.\n\n**IT**: spesso il workstream più lungo e costoso (ERP, CRM, dati, cyber). Scelte: adottare una piattaforma, mantenerle entrambe temporaneamente o costruirne una nuova. I tempi dell’IT determinano quando molte sinergie si realizzano davvero e quando si può uscire dai TSA.'
        )
      },
      { type: 'exercise', questionId: 'ma-pmi-q2' },
      {
        type: 'realworld',
        title: t('Where bankers fit', 'Il ruolo dei banker'),
        body: t(
          'Integration is run by the company, often with consultants; bankers are usually not mandated for it. But integration feasibility shapes the deal: the synergy case the analyst models must be backed by an integration plan, rating agencies and investors scrutinise it, and missed synergy targets after closing hurt the acquirer’s share price and its credibility for the next deal.\n\nFor sponsors, a structured **100-day plan** is a standard part of the investment case.',
          'L’integrazione è gestita dalla società, spesso con consulenti; di norma i banker non hanno un mandato per questo. Ma la fattibilità dell’integrazione condiziona il deal: le sinergie modellate dall’analista devono poggiare su un piano di integrazione, agenzie di rating e investitori lo esaminano, e mancare i target di sinergie dopo il closing penalizza il titolo dell’acquirente e la sua credibilità per il deal successivo.\n\nPer i fondi un **piano dei 100 giorni** strutturato è parte standard dell’investment case.'
        )
      },
      { type: 'exercise', questionId: 'ma-pmi-q3' },
      {
        type: 'interview',
        question: t('Why do so many acquisitions fail to deliver their expected value?', 'Perché così tante acquisizioni non generano il valore atteso?'),
        answer: t(
          'Usually a combination of overpaying and poor integration. On price, competitive auctions and optimistic synergy cases push premiums above what can be earned back. On execution, integration is slower and costlier than planned: IT migrations slip, cultural clashes drive out key talent, customers defect during the disruption, and management attention is diverted from the core business. The best acquirers plan integration during diligence, set accountable synergy owners, track them monthly and communicate relentlessly.',
          'Di solito per una combinazione di prezzo eccessivo e integrazione carente. Sul prezzo, aste competitive e piani di sinergie ottimistici spingono i premi oltre quanto si può recuperare. Sull’esecuzione, l’integrazione è più lenta e costosa del previsto: le migrazioni IT slittano, gli scontri culturali fanno uscire i talenti chiave, i clienti se ne vanno durante la fase di disordine e l’attenzione del management si distoglie dal core business. I migliori acquirenti pianificano l’integrazione già in due diligence, assegnano responsabili per ogni sinergia, le monitorano mensilmente e comunicano senza sosta.'
        )
      },
      {
        type: 'mistakes',
        items: [
          t('Starting integration planning only after closing.', 'Iniziare a pianificare l’integrazione solo dopo il closing.'),
          t('Sharing competitively sensitive data before clearance without clean-team protocols.', 'Condividere dati sensibili prima dell’autorizzazione senza protocolli di clean team.'),
          t('Tracking only cost savings and ignoring revenue dis-synergies and staff attrition.', 'Monitorare solo i risparmi di costo, ignorando dis-sinergie di ricavo e uscite del personale.')
        ]
      },
      {
        type: 'summary',
        items: [
          t('IMO + workstreams; plan Day 1 before closing using clean teams.', 'IMO + workstream; pianificare il Day 1 prima del closing con i clean team.'),
          t('Track synergies by workstream and owner against the announced target.', 'Monitorare le sinergie per workstream e responsabile rispetto al target annunciato.'),
          t('Culture and IT are the most common causes of value leakage.', 'Cultura e IT sono le cause più frequenti di perdita di valore.')
        ]
      }
    ],
    questions: [
      {
        id: 'ma-pmi-q1',
        kind: 'numeric',
        topic: 'ma-pmi',
        difficulty: 1,
        objective: t('Measure synergy capture against target.', 'Misurare la cattura delle sinergie rispetto al target.'),
        prompt: t(
          'The announced run-rate synergy target is €60m. After 12 months, actions delivering €42m of run-rate savings are in place. What percentage of the target has been actioned (%)?',
          'Il target di sinergie a regime annunciato è €60m. Dopo 12 mesi sono state avviate azioni per €42m di risparmi a regime. Quale percentuale del target è stata avviata (%)?'
        ),
        answer: 70,
        unit: '%',
        tolerance: { abs: 0.05 },
        verify: { fn: 'ratio', args: [4200, 60] },
        explanation: t('42 / 60 = 70%. Note that actioned run-rate is not the same as savings already in the P&L, which lag because of phasing.', '42 / 60 = 70%. Il run-rate avviato non coincide con i risparmi già a conto economico, che arrivano in ritardo per effetto del phasing.')
      },
      {
        id: 'ma-pmi-q2',
        kind: 'order',
        topic: 'ma-pmi',
        difficulty: 2,
        objective: t('Sequence the integration phases.', 'Ordinare le fasi dell’integrazione.'),
        prompt: t('Put the integration phases in order.', 'Metti in ordine le fasi dell’integrazione.'),
        items: [
          t('Integration hypotheses and synergy sizing during due diligence', 'Ipotesi di integrazione e stima delle sinergie in due diligence'),
          t('IMO set-up and Day 1 planning between signing and closing (clean teams)', 'Costituzione dell’IMO e pianificazione del Day 1 tra signing e closing (clean team)'),
          t('Day 1: closing, communications, business continuity', 'Day 1: closing, comunicazione, continuità del business'),
          t('First 100 days: organisation design and quick wins', 'Primi 100 giorni: disegno organizzativo e quick win'),
          t('Full integration: systems migration, synergy capture, TSA exit', 'Integrazione completa: migrazione dei sistemi, cattura delle sinergie, uscita dai TSA')
        ],
        explanation: t(
          'Integration thinking starts in diligence, planning happens pre-closing within antitrust limits, and execution runs from Day 1 through the 100-day plan to full integration over one to three years.',
          'L’integrazione si imposta già in due diligence, la pianificazione avviene prima del closing nei limiti antitrust, e l’esecuzione va dal Day 1 al piano dei 100 giorni fino all’integrazione completa in uno-tre anni.'
        )
      },
      {
        id: 'ma-pmi-q3',
        kind: 'multi',
        topic: 'ma-pmi',
        difficulty: 2,
        objective: t('Identify common causes of integration failure.', 'Individuare le cause tipiche di fallimento dell’integrazione.'),
        prompt: t('Which are common causes of value leakage in integration? Select all that apply.', 'Quali sono cause tipiche di perdita di valore nell’integrazione? Seleziona tutte le risposte corrette.'),
        choices: [
          t('Departure of key talent due to uncertainty', 'Uscita di talenti chiave per incertezza'),
          t('Delayed IT migration', 'Ritardi nella migrazione IT'),
          t('Customer defections during disruption', 'Perdita di clienti durante la fase di disordine'),
          t('Appointing synergy owners with clear targets', 'Nomina di responsabili delle sinergie con obiettivi chiari'),
          t('Clashing decision-making cultures', 'Culture decisionali in conflitto')
        ],
        correct: [0, 1, 2, 4],
        explanation: t(
          'Talent loss, IT delays, customer churn and cultural clashes all destroy value. Accountable synergy owners are a best practice, not a cause of failure.',
          'Perdita di talenti, ritardi IT, abbandono dei clienti e scontri culturali distruggono valore. Responsabili delle sinergie con obiettivi chiari sono una best practice, non una causa di fallimento.'
        )
      },
      {
        id: 'ma-pmi-q4',
        kind: 'mcq',
        topic: 'ma-pmi',
        difficulty: 2,
        objective: t('Explain the role of clean teams.', 'Spiegare il ruolo dei clean team.'),
        prompt: t(
          'Why do merging competitors use a clean team before closing?',
          'Perché due concorrenti che si fondono usano un clean team prima del closing?'
        ),
        choices: [
          t('To audit the target’s financial statements', 'Per certificare il bilancio del target'),
          t('To let a restricted group analyse competitively sensitive data for integration planning without breaching competition law', 'Per consentire a un gruppo ristretto di analizzare dati sensibili per la pianificazione dell’integrazione senza violare il diritto della concorrenza'),
          t('To negotiate the purchase price', 'Per negoziare il prezzo di acquisto'),
          t('To replace the target’s management before clearance', 'Per sostituire il management del target prima dell’autorizzazione')
        ],
        correct: 1,
        explanation: t(
          'Clean teams (often outside advisers or ring-fenced staff) review sensitive data such as customer pricing and report only aggregated outputs, avoiding gun-jumping and information exchange concerns. Replacing management before clearance would itself be gun-jumping.',
          'I clean team (spesso consulenti esterni o personale isolato) esaminano dati sensibili come i prezzi per cliente e riportano solo risultati aggregati, evitando gun-jumping e scambi di informazioni illeciti. Sostituire il management prima dell’autorizzazione sarebbe di per sé gun-jumping.'
        )
      }
    ],
    flashcards: [
      { id: 'fc-ma-pmi-1', topic: 'ma-pmi', front: t('What is an IMO?', 'Cos’è un IMO?'), back: t('Integration Management Office: central team that governs workstreams, tracks synergies and reports to leadership.', 'Integration Management Office: team centrale che coordina i workstream, monitora le sinergie e riferisce al vertice.') },
      { id: 'fc-ma-pmi-2', topic: 'ma-pmi', front: t('Day 1 priorities?', 'Priorità del Day 1?'), back: t('Legal close, business continuity (payments, payroll, systems), clear communication and leadership announcements.', 'Closing legale, continuità del business (pagamenti, stipendi, sistemi), comunicazione chiara e annuncio del management.') },
      { id: 'fc-ma-pmi-3', topic: 'ma-pmi', front: t('Why is IT critical in integration?', 'Perché l’IT è critico nell’integrazione?'), back: t('Longest, costliest workstream; its timeline gates many synergies and the exit from TSAs.', 'È il workstream più lungo e costoso; i suoi tempi condizionano molte sinergie e l’uscita dai TSA.') },
      { id: 'fc-ma-pmi-4', topic: 'ma-pmi', front: t('Actioned run-rate vs realised synergies?', 'Run-rate avviato vs sinergie realizzate?'), back: t('Actioned = annualised savings of measures implemented; realised = savings actually in the P&L for the period (lower due to phasing).', 'Avviato = risparmi annualizzati delle misure attuate; realizzato = risparmi effettivamente a conto economico nel periodo (inferiori per il phasing).') }
    ]
  }
];
