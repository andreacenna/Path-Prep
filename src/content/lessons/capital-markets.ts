import type { L, Lesson } from '../types';

/**
 * Academy 7 — Capital Markets: CM1 (ECM), CM2 (DCM), CM3 (Credit analysis).
 */
const t = (en: string, it: string): L => ({ en, it });

export const lessons: Lesson[] = [
  /* ============================ CM1 — cm-ipo ============================ */
  {
    id: 'cm-ipo',
    academyId: 'capital-markets',
    moduleId: 'CM1',
    mode: 'deep',
    minutes: 14,
    difficulty: 2,
    reviewed: '2026-10',
    objective: t(
      'Walk through an IPO from mandate to stabilisation, and explain bookbuilding, the greenshoe, lock-ups and IPO underpricing.',
      "Descrivere un'IPO dal mandato alla stabilizzazione e spiegare bookbuilding, greenshoe, lock-up e underpricing."
    ),
    screens: [
      {
        type: 'intuition',
        title: t('Selling a slice of the company to the public', 'Vendere una quota della società al mercato'),
        body: t(
          'An **Initial Public Offering (IPO)** is the first time a company sells shares to public investors and lists them on a stock exchange.\n\nThe shares can be **primary** (new shares: cash goes to the company to fund growth or cut debt) or **secondary** (existing shareholders such as founders or a PE fund sell: cash goes to them, not to the company). Most IPOs mix both.\n\nThe bank’s job: find the price at which enough quality investors will buy, so that the stock trades well afterwards.',
          "Un'**IPO (Initial Public Offering)** è la prima volta in cui una società vende azioni a investitori pubblici e le quota in borsa.\n\nLe azioni possono essere **di nuova emissione** (aumento di capitale: la cassa va alla società per finanziare la crescita o ridurre il debito) oppure **in vendita** (gli azionisti esistenti, come fondatori o un fondo di PE, cedono: la cassa va a loro, non alla società). Quasi tutte le IPO combinano le due componenti.\n\nIl compito della banca: trovare il prezzo al quale abbastanza investitori di qualità comprano, così che il titolo tratti bene dopo la quotazione."
        )
      },
      {
        type: 'technical',
        title: t('The process, step by step', 'Il processo, passo dopo passo'),
        body: t(
          '- **Mandate & syndicate**: global coordinators and bookrunners are appointed.\n- **Due diligence & documentation**: business, legal and financial DD; the **prospectus** is drafted (in the EU under the Prospectus Regulation (EU) 2017/1129, approved in Italy by **Consob**).\n- **Analyst presentation & pre-deal investor education (PDIE)**: syndicate research analysts meet investors.\n- **Intention to Float (ITF)** announcement, then **price range** set.\n- **Roadshow & bookbuilding**: management meets investors; orders are collected.\n- **Pricing & allocation**, then **first day of trading**.\n- **Stabilisation** (greenshoe) for up to 30 days.',
          "- **Mandato e sindacato**: si nominano global coordinator e bookrunner.\n- **Due diligence e documentazione**: DD di business, legale e finanziaria; si redige il **prospetto** (nell'UE ai sensi del Regolamento Prospetto (UE) 2017/1129, approvato in Italia dalla **Consob**).\n- **Analyst presentation e pre-deal investor education (PDIE)**: gli analisti di ricerca del sindacato incontrano gli investitori.\n- Annuncio dell'**Intention to Float (ITF)**, poi fissazione della **forchetta di prezzo**.\n- **Roadshow e bookbuilding**: il management incontra gli investitori; si raccolgono gli ordini.\n- **Pricing e allocazione**, poi **primo giorno di negoziazione**.\n- **Stabilizzazione** (greenshoe) fino a 30 giorni."
        )
      },
      {
        type: 'technical',
        title: t('Bookbuilding, greenshoe and lock-ups', 'Bookbuilding, greenshoe e lock-up'),
        body: t(
          '**Bookbuilding**: investors submit orders (size, price limit). Bookrunners judge **quality** (long-only, long-term holders vs. "flippers"), not just coverage, then price and allocate at their discretion.\n\n**Greenshoe (over-allotment option)**: the syndicate allocates up to **15%** more shares than the base deal (the EU stabilisation safe harbour, MAR Delegated Regulation 2016/1052, caps over-allotment at 15%). If the stock trades below the offer price, the stabilising manager buys shares in the market to support it; if it trades above, the banks exercise the option to buy extra shares from the issuer/sellers at the offer price.\n\n**Lock-up**: issuer, sellers and management agree not to sell more shares for a period (often **180 days**, longer for management) to avoid an overhang.',
          "**Bookbuilding**: gli investitori inseriscono ordini (quantità, limite di prezzo). I bookrunner valutano la **qualità** del book (investitori long-only, di lungo periodo vs. \"flipper\"), non solo la copertura, poi fissano il prezzo e allocano a loro discrezione.\n\n**Greenshoe (opzione di over-allotment)**: il sindacato alloca fino al **15%** di azioni in più rispetto all'offerta base (il safe harbour UE sulla stabilizzazione, Regolamento Delegato MAR 2016/1052, limita l'over-allotment al 15%). Se il titolo scende sotto il prezzo di offerta, lo stabilisation manager compra azioni sul mercato per sostenerlo; se sale, le banche esercitano l'opzione e acquistano le azioni aggiuntive dall'emittente/venditori al prezzo di offerta.\n\n**Lock-up**: emittente, venditori e management si impegnano a non vendere altre azioni per un periodo (spesso **180 giorni**, più lungo per il management) per evitare un effetto overhang."
        )
      },
      {
        type: 'formula',
        formulas: [
          {
            name: t('First-day return (underpricing)', 'Rendimento del primo giorno (underpricing)'),
            expr: 'Underpricing = First-day closing price / Offer price − 1'
          },
          {
            name: t('Money left on the table', 'Denaro lasciato sul tavolo'),
            expr: 'Money left on the table = (First-day close − Offer price) × Shares sold'
          },
          {
            name: t('Maximum deal size with greenshoe', 'Dimensione massima con greenshoe'),
            expr: 'Max shares = Base shares × (1 + 15%)'
          }
        ],
        note: t(
          'Some underpricing is deliberate: an IPO discount (often quoted around 10–15% to fair value) compensates investors for buying an unknown stock and supports a positive aftermarket.',
          "Un certo underpricing è voluto: lo sconto IPO (spesso indicato intorno al 10–15% rispetto al fair value) compensa gli investitori per l'acquisto di un titolo nuovo e favorisce un aftermarket positivo."
        )
      },
      {
        type: 'example',
        title: t('Pricing the IPO of Alfa S.p.A.', "Il pricing dell'IPO di Alfa S.p.A."),
        body: t(
          'Peers trade at 10.0x EV/EBITDA. Alfa’s 2026E EBITDA is €80m and net debt €100m, with 50m shares post-money. The banks apply a **12.5% IPO discount** to set the midpoint of the range.',
          "I comparabili trattano a 10,0x EV/EBITDA. L'EBITDA 2026E di Alfa è €80m, la posizione finanziaria netta €100m, con 50m di azioni post-money. Le banche applicano uno **sconto IPO del 12,5%** per fissare il punto medio della forchetta."
        ),
        table: {
          headers: [t('Step', 'Passaggio'), t('Value', 'Valore')],
          rows: [
            [t('Fair EV (10.0x × €80m)', 'EV equo (10,0x × €80m)'), '€800m'],
            [t('− Net debt', '− PFN'), '€100m'],
            [t('Fair equity value', 'Equity value equo'), '€700m'],
            [t('Per share (50m)', 'Per azione (50m)'), '€14.00'],
            [t('After 12.5% IPO discount', 'Dopo sconto IPO del 12,5%'), '€12.25'],
            [t('Indicative range', 'Forchetta indicativa'), '€11.50 – €13.00']
          ],
          totalRows: [4]
        }
      },
      {
        type: 'realworld',
        title: t('Where Italian companies list', 'Dove si quotano le società italiane'),
        body: t(
          'In Italy, Borsa Italiana (part of the Euronext group since 2021) runs **Euronext Milan**, the regulated main market (with the STAR segment for mid-caps meeting higher governance standards), and **Euronext Growth Milan**, the multilateral trading facility for smaller growth companies.\n\nAs an ECM analyst you build valuation and peer benchmarking pages, track the book during bookbuilding, prepare allocation analyses and help draft the prospectus and investor presentation.',
          "In Italia Borsa Italiana (parte del gruppo Euronext dal 2021) gestisce **Euronext Milan**, il mercato regolamentato principale (con il segmento STAR per le mid-cap con requisiti di governance più elevati), ed **Euronext Growth Milan**, il sistema multilaterale di negoziazione per le PMI in crescita.\n\nDa analyst ECM costruisci le pagine di valutazione e benchmarking dei comparabili, monitori il book durante il bookbuilding, prepari le analisi di allocazione e collabori alla redazione del prospetto e della investor presentation."
        )
      },
      { type: 'exercise', questionId: 'cm-ipo-q1' },
      { type: 'exercise', questionId: 'cm-ipo-q2' },
      { type: 'exercise', questionId: 'cm-ipo-q3' },
      { type: 'exercise', questionId: 'cm-ipo-q4' },
      {
        type: 'interview',
        question: t('How does a greenshoe work and why do issuers like it?', 'Come funziona la greenshoe e perché piace agli emittenti?'),
        answer: t(
          'The syndicate over-allots up to 15% of the base deal, creating a short position covered either by the greenshoe option or by market purchases. If the stock falls below the offer price, the stabilising manager buys in the market, supporting the price and closing the short without exercising the option. If the stock rises, the banks exercise the option at the offer price. So it gives price support in a weak aftermarket and extra proceeds in a strong one — at no risk to the banks.',
          "Il sindacato effettua un over-allotment fino al 15% dell'offerta base, creando una posizione corta che si chiude o esercitando la greenshoe o con acquisti sul mercato. Se il titolo scende sotto il prezzo di offerta, lo stabilisation manager compra sul mercato, sostenendo il prezzo e chiudendo lo short senza esercitare l'opzione. Se il titolo sale, le banche esercitano l'opzione al prezzo di offerta. Quindi offre supporto al prezzo in un aftermarket debole e proventi aggiuntivi in uno forte — senza rischio per le banche."
        )
      },
      {
        type: 'mistakes',
        items: [
          t('Assuming all IPO proceeds go to the company: secondary proceeds go to the selling shareholders.', 'Pensare che tutti i proventi IPO vadano alla società: quelli della componente in vendita vanno agli azionisti venditori.'),
          t('Treating a 20x oversubscribed book as automatically good: quality and price sensitivity of orders matter more.', 'Considerare automaticamente buono un book coperto 20 volte: contano di più qualità e sensibilità al prezzo degli ordini.'),
          t('Thinking the greenshoe exposes banks to market risk: the over-allotted short is covered by the option or by stabilisation purchases below the offer price.', "Pensare che la greenshoe esponga le banche al rischio di mercato: lo short da over-allotment si copre con l'opzione o con acquisti di stabilizzazione sotto il prezzo di offerta.")
        ]
      },
      {
        type: 'summary',
        items: [
          t('IPO = primary (new money) and/or secondary (selling shareholders) shares.', 'IPO = azioni di nuova emissione (nuova cassa) e/o in vendita (azionisti venditori).'),
          t('Process: mandate → DD & prospectus → PDIE → ITF → price range → roadshow/bookbuilding → pricing → trading → stabilisation.', 'Processo: mandato → DD e prospetto → PDIE → ITF → forchetta → roadshow/bookbuilding → pricing → negoziazione → stabilizzazione.'),
          t('Greenshoe up to 15%; lock-ups often 180 days; deliberate IPO discount → first-day pop.', 'Greenshoe fino al 15%; lock-up spesso di 180 giorni; sconto IPO voluto → rialzo del primo giorno.'),
          t('Italian venues: Euronext Milan (main market, STAR segment) and Euronext Growth Milan.', 'Mercati italiani: Euronext Milan (mercato principale, segmento STAR) ed Euronext Growth Milan.')
        ]
      }
    ],
    questions: [
      {
        id: 'cm-ipo-q1',
        kind: 'numeric',
        topic: 'ipo',
        difficulty: 1,
        objective: t('Size the greenshoe of an IPO.', "Dimensionare la greenshoe di un'IPO."),
        prompt: t(
          'Base offering of 20 million shares, with a full 15% over-allotment option. How many greenshoe shares (millions) can be sold?',
          'Offerta base di 20 milioni di azioni, con opzione di over-allotment piena del 15%. Quante azioni (milioni) può coprire la greenshoe?'
        ),
        answer: 3,
        unit: 'm',
        verify: { fn: 'product', args: [20, 0.15] },
        explanation: t(
          'Greenshoe = 15% × 20m = 3m shares, so the maximum deal is 23m shares. The 15% is applied to the base deal, not to total shares outstanding.',
          "Greenshoe = 15% × 20m = 3m di azioni, quindi l'offerta massima è di 23m di azioni. Il 15% si applica all'offerta base, non al totale delle azioni in circolazione."
        )
      },
      {
        id: 'cm-ipo-q2',
        kind: 'numeric',
        topic: 'ipo',
        difficulty: 2,
        objective: t('Measure IPO underpricing.', "Misurare l'underpricing di un'IPO."),
        prompt: t(
          'Beta S.p.A. prices its IPO at €12.00 and closes its first day at €13.80. What is the first-day return (%)?',
          "Beta S.p.A. prezza l'IPO a €12,00 e chiude il primo giorno a €13,80. Qual è il rendimento del primo giorno (%)?"
        ),
        answer: 15,
        unit: '%',
        tolerance: { abs: 0.1 },
        verify: { fn: 'ratio', args: [180, 12] },
        steps: [t('(13.80 − 12.00) / 12.00 = 1.80 / 12.00 = 15%', '(13,80 − 12,00) / 12,00 = 1,80 / 12,00 = 15%')],
        explanation: t(
          'First-day return = 13.80 / 12.00 − 1 = 15%. Dividing by the closing price (1.80/13.80 = 13%) is a common error: the base is the offer price.',
          "Rendimento del primo giorno = 13,80 / 12,00 − 1 = 15%. Dividere per il prezzo di chiusura (1,80/13,80 = 13%) è un errore comune: la base è il prezzo di offerta."
        )
      },
      {
        id: 'cm-ipo-q3',
        kind: 'numeric',
        topic: 'ipo',
        difficulty: 2,
        objective: t('Compute money left on the table.', 'Calcolare il denaro lasciato sul tavolo.'),
        prompt: t(
          'In the same IPO, 25 million shares were sold at €12.00 and the stock closed at €13.80. How much money was "left on the table" (€m)?',
          'Nella stessa IPO sono state vendute 25 milioni di azioni a €12,00 e il titolo ha chiuso a €13,80. Quanto denaro è stato "lasciato sul tavolo" (€m)?'
        ),
        answer: 45,
        unit: '€m',
        verify: { fn: 'product', args: [1.8, 25] },
        explanation: t(
          '(13.80 − 12.00) × 25m = €45m: value that the issuer and sellers could in theory have captured with a higher price. It is the cost of the IPO discount.',
          '(13,80 − 12,00) × 25m = €45m: valore che emittente e venditori avrebbero in teoria potuto incassare con un prezzo più alto. È il costo dello sconto IPO.'
        )
      },
      {
        id: 'cm-ipo-q4',
        kind: 'order',
        topic: 'ipo',
        difficulty: 2,
        objective: t('Sequence the main IPO steps.', "Ordinare le fasi principali dell'IPO."),
        prompt: t('Put the IPO steps in the right order.', "Metti in ordine le fasi dell'IPO."),
        items: [
          t('Appointment of global coordinators and bookrunners', 'Nomina di global coordinator e bookrunner'),
          t('Due diligence and prospectus drafting', 'Due diligence e redazione del prospetto'),
          t('Pre-deal investor education by research analysts', 'Pre-deal investor education degli analisti di ricerca'),
          t('Intention to Float and price range', 'Intention to Float e forchetta di prezzo'),
          t('Roadshow and bookbuilding', 'Roadshow e bookbuilding'),
          t('Pricing and allocation', 'Pricing e allocazione'),
          t('First trading day and stabilisation period', 'Primo giorno di negoziazione e periodo di stabilizzazione')
        ],
        explanation: t(
          'Documentation and DD come first; PDIE feedback informs the price range; bookbuilding happens during the roadshow; pricing and allocation precede trading; stabilisation follows listing.',
          'Documentazione e DD vengono prima; il feedback della PDIE orienta la forchetta; il bookbuilding avviene durante il roadshow; pricing e allocazione precedono la negoziazione; la stabilizzazione segue la quotazione.'
        )
      },
      {
        id: 'cm-ipo-q5',
        kind: 'mcq',
        topic: 'ipo',
        difficulty: 2,
        objective: t('Understand stabilisation mechanics.', 'Comprendere i meccanismi di stabilizzazione.'),
        prompt: t(
          'After an IPO with a full 15% over-allotment, the stock trades well below the offer price for weeks. What does the stabilising manager typically do?',
          "Dopo un'IPO con over-allotment pieno del 15%, il titolo tratta ben al di sotto del prezzo di offerta per settimane. Cosa fa tipicamente lo stabilisation manager?"
        ),
        choices: [
          t('Exercises the greenshoe in full to raise extra proceeds', 'Esercita integralmente la greenshoe per raccogliere proventi aggiuntivi'),
          t('Buys shares in the market to cover the short, leaving the greenshoe unexercised', "Compra azioni sul mercato per coprire lo short, senza esercitare la greenshoe"),
          t('Asks the issuer to cancel the lock-up', "Chiede all'emittente di revocare il lock-up"),
          t('Reprices the IPO at a lower offer price', "Rifissa il prezzo dell'IPO a un livello inferiore")
        ],
        correct: 1,
        explanation: t(
          'Buying below the offer price supports the stock and closes the over-allotment short. Exercising the option (buying at the higher offer price) only makes sense when the stock trades above it. IPOs are not repriced after trading starts.',
          "Comprare sotto il prezzo di offerta sostiene il titolo e chiude lo short da over-allotment. Esercitare l'opzione (comprare al prezzo di offerta, più alto) ha senso solo se il titolo tratta sopra. Le IPO non vengono riprezzate dopo l'inizio delle negoziazioni."
        )
      }
    ],
    flashcards: [
      { id: 'fc-cm-ipo-1', topic: 'ipo', front: t('Primary vs secondary shares in an IPO?', "Azioni di nuova emissione vs in vendita in un'IPO?"), back: t('Primary = new shares, cash to the company. Secondary = existing shares sold, cash to the sellers.', 'Nuova emissione = nuove azioni, cassa alla società. In vendita = azioni esistenti cedute, cassa ai venditori.') },
      { id: 'fc-cm-ipo-2', topic: 'ipo', front: t('Maximum over-allotment under the EU stabilisation safe harbour?', "Over-allotment massimo nel safe harbour UE sulla stabilizzazione?"), back: t('15% of the original offer (Delegated Regulation (EU) 2016/1052).', "15% dell'offerta originaria (Regolamento Delegato (UE) 2016/1052).") },
      { id: 'fc-cm-ipo-3', topic: 'ipo', front: t('What is a lock-up?', "Che cos'è un lock-up?"), back: t('A commitment by issuer, sellers and management not to sell or issue further shares for a period (often 180 days).', "Impegno di emittente, venditori e management a non vendere o emettere altre azioni per un periodo (spesso 180 giorni).") },
      { id: 'fc-cm-ipo-4', topic: 'ipo', front: t('Why are IPOs usually underpriced?', 'Perché le IPO sono di solito sottoprezzate?'), back: t('To compensate investors for information asymmetry and uncertainty, and to secure a stable aftermarket and future access to equity.', "Per compensare gli investitori per l'asimmetria informativa e l'incertezza, e garantire un aftermarket stabile e l'accesso futuro all'equity.") },
      { id: 'fc-cm-ipo-5', topic: 'ipo', front: t('Italian main market and growth market?', 'Mercato principale e mercato di crescita in Italia?'), back: t('Euronext Milan (regulated market, incl. STAR segment) and Euronext Growth Milan (MTF for SMEs).', 'Euronext Milan (mercato regolamentato, incl. segmento STAR) ed Euronext Growth Milan (MTF per PMI).') }
    ],
    sources: [
      { label: 'Regulation (EU) 2017/1129 (Prospectus Regulation)', url: 'https://eur-lex.europa.eu/eli/reg/2017/1129/oj' },
      { label: 'Commission Delegated Regulation (EU) 2016/1052 — buy-back and stabilisation', url: 'https://eur-lex.europa.eu/eli/reg_del/2016/1052/oj' },
      { label: 'Borsa Italiana — Euronext Milan and Euronext Growth Milan', url: 'https://www.borsaitaliana.it/' }
    ]
  },

  /* ============================ CM1 — cm-follow-ons-rights ============================ */
  {
    id: 'cm-follow-ons-rights',
    academyId: 'capital-markets',
    moduleId: 'CM1',
    mode: 'deep',
    minutes: 12,
    difficulty: 2,
    reviewed: '2026-10',
    objective: t(
      'Distinguish follow-ons, accelerated bookbuilds and rights issues, and compute the theoretical ex-rights price (TERP) and the value of a right.',
      'Distinguere follow-on, accelerated bookbuilding e aumenti in opzione, e calcolare il prezzo teorico ex-diritto (TERP) e il valore del diritto.'
    ),
    screens: [
      {
        type: 'intuition',
        title: t('Coming back to the market', 'Tornare sul mercato'),
        body: t(
          'Once listed, a company (or its shareholders) can sell more shares. The key tension: **new shares dilute existing holders**. If you sell new shares at a discount to outsiders, value moves from old shareholders to new ones.\n\nA **rights issue** solves this by offering the new shares first to existing shareholders, pro rata. If they do not want to invest, they can sell their rights and be compensated for the discount.',
          "Una volta quotata, la società (o i suoi azionisti) può vendere altre azioni. Il nodo centrale: **le nuove azioni diluiscono gli azionisti esistenti**. Se vendi nuove azioni a sconto a terzi, il valore si sposta dai vecchi soci ai nuovi.\n\nL'**aumento di capitale in opzione** risolve il problema offrendo le nuove azioni prima agli azionisti esistenti, pro quota. Se non vogliono investire, possono vendere i diritti ed essere compensati per lo sconto."
        )
      },
      {
        type: 'technical',
        title: t('Three ways to raise follow-on equity', 'Tre modi di raccogliere equity dopo la quotazione'),
        body: t(
          '- **Marketed follow-on**: a mini-IPO with roadshow over several days; used for large or complex stories.\n- **Accelerated bookbuild (ABB)**: launched after market close, book built overnight with institutional investors, priced before the next open, typically at a **discount of a few percent** to the last close. Used for primary placements (often limited to a share of existing capital without pre-emption) and for secondary block sales by PE funds or founders.\n- **Rights issue**: new shares offered to existing shareholders in proportion to their holdings (in Italy, *aumento di capitale in opzione*, art. 2441 c.c.), usually at a deep discount and often underwritten by a bank syndicate.',
          "- **Follow-on marketed**: una mini-IPO con roadshow di più giorni; usata per operazioni grandi o complesse.\n- **Accelerated bookbuilding (ABB)**: lanciato dopo la chiusura, book raccolto in una notte presso investitori istituzionali, prezzato prima dell'apertura successiva, tipicamente con uno **sconto di qualche punto percentuale** sull'ultima chiusura. Usato per collocamenti primari (spesso limitati a una quota del capitale esistente senza diritto d'opzione) e per la cessione di blocchi da parte di fondi di PE o fondatori.\n- **Aumento in opzione**: nuove azioni offerte agli azionisti esistenti in proporzione alle loro partecipazioni (art. 2441 c.c.), di solito con forte sconto e spesso garantito da un consorzio di banche."
        )
      },
      {
        type: 'formula',
        formulas: [
          {
            name: t('Theoretical ex-rights price (TERP)', 'Prezzo teorico ex-diritto (TERP)'),
            expr: 'TERP = (N_old × P_cum + N_new × P_issue) / (N_old + N_new)',
            vars: [
              { sym: 'P_cum', desc: t('Share price cum-rights (before detachment)', 'Prezzo cum-diritto (prima dello stacco)') },
              { sym: 'P_issue', desc: t('Subscription price of the new shares', 'Prezzo di sottoscrizione delle nuove azioni') }
            ]
          },
          {
            name: t('Theoretical value of one right', 'Valore teorico di un diritto'),
            expr: 'Right value = P_cum − TERP  (one right per old share)'
          },
          {
            name: t('Discount to TERP', 'Sconto sul TERP'),
            expr: 'Discount to TERP = 1 − P_issue / TERP'
          }
        ],
        note: t(
          'Rights issue discounts are quoted versus TERP, not versus the last price, because the headline discount to the cum price overstates the economic discount.',
          'Lo sconto di un aumento in opzione si esprime rispetto al TERP, non all’ultimo prezzo, perché lo sconto sul prezzo cum-diritto sovrastima lo sconto economico.'
        )
      },
      {
        type: 'example',
        title: t('Gamma S.p.A.: 1-for-4 rights issue', 'Gamma S.p.A.: aumento in opzione 1 ogni 4'),
        body: t(
          'Gamma has 100m shares at €10.00. It offers 1 new share for every 4 held at €6.00.',
          'Gamma ha 100m di azioni a €10,00. Offre 1 nuova azione ogni 4 possedute a €6,00.'
        ),
        table: {
          headers: [t('Item', 'Voce'), t('Value', 'Valore')],
          rows: [
            [t('New shares (100m ÷ 4)', 'Nuove azioni (100m ÷ 4)'), '25m'],
            [t('Market cap pre (100m × €10)', 'Capitalizzazione pre (100m × €10)'), '€1,000m'],
            [t('Proceeds (25m × €6)', 'Proventi (25m × €6)'), '€150m'],
            [t('Market cap post (theoretical)', 'Capitalizzazione post (teorica)'), '€1,150m'],
            [t('TERP (€1,150m ÷ 125m)', 'TERP (€1.150m ÷ 125m)'), '€9.20'],
            [t('Value of one right (10.00 − 9.20)', 'Valore di un diritto (10,00 − 9,20)'), '€0.80'],
            [t('Discount to TERP (1 − 6.00/9.20)', 'Sconto sul TERP (1 − 6,00/9,20)'), '34.8%']
          ],
          totalRows: [4]
        }
      },
      {
        type: 'technical',
        title: t('Why the shareholder is not hurt', "Perché l'azionista non è danneggiato"),
        body: t(
          'A holder of 4 old shares (worth €40) either:\n- **subscribes**: pays €6, owns 5 shares × €9.20 = €46 = €40 + €6; or\n- **sells the 4 rights** at €0.80: keeps 4 × €9.20 = €36.80 + €3.20 cash = €40.\n\nEither way wealth is unchanged — only **doing nothing** destroys value (the rights lapse). This is why deep discounts are acceptable in rights issues but not in placements that bypass pre-emption rights.',
          "Il titolare di 4 vecchie azioni (valore €40) può:\n- **sottoscrivere**: paga €6, possiede 5 azioni × €9,20 = €46 = €40 + €6; oppure\n- **vendere i 4 diritti** a €0,80: tiene 4 × €9,20 = €36,80 + €3,20 di cassa = €40.\n\nIn entrambi i casi la ricchezza non cambia — solo **non fare nulla** distrugge valore (i diritti decadono). Per questo sconti profondi sono accettabili negli aumenti in opzione ma non nei collocamenti che escludono il diritto d'opzione."
        )
      },
      {
        type: 'realworld',
        body: t(
          'Italian banks have used large rights issues to rebuild capital (e.g. UniCredit’s €13bn rights issue in 2017). ABBs are the everyday tool: a PE fund exiting a listed portfolio company typically sells blocks overnight, after the IPO lock-up expires.\n\nAs an ECM analyst you prepare the TERP and discount analysis, monitor the stock and comparable deals’ discounts, and help run the book overnight in an ABB.',
          "Le banche italiane hanno usato grandi aumenti in opzione per ricostituire il capitale (es. l'aumento in opzione da €13mld di UniCredit nel 2017). L'ABB è lo strumento quotidiano: un fondo di PE che esce da una partecipata quotata vende tipicamente blocchi in una notte, dopo la scadenza del lock-up dell'IPO.\n\nDa analyst ECM prepari l'analisi di TERP e sconto, monitori il titolo e gli sconti di operazioni comparabili e aiuti a gestire il book notturno di un ABB."
        )
      },
      { type: 'exercise', questionId: 'cm-fo-q1' },
      { type: 'exercise', questionId: 'cm-fo-q2' },
      { type: 'exercise', questionId: 'cm-fo-q3' },
      {
        type: 'interview',
        question: t('Why might a company choose a rights issue rather than an ABB?', 'Perché una società potrebbe scegliere un aumento in opzione invece di un ABB?'),
        answer: t(
          'Size and fairness. ABB primary placements are usually limited in size and bypass pre-emption rights, so they must be priced close to market. A rights issue can raise a very large amount relative to market cap, is offered to all shareholders pro rata — so a deep discount does not transfer value — and can be fully underwritten, giving certainty of funds. The cost is time (weeks, prospectus required) and market exposure during the offer period.',
          "Dimensione ed equità. I collocamenti primari via ABB sono di solito limitati e escludono il diritto d'opzione, quindi vanno prezzati vicino al mercato. Un aumento in opzione può raccogliere importi molto elevati rispetto alla capitalizzazione, è offerto a tutti gli azionisti pro quota — quindi uno sconto profondo non trasferisce valore — e può essere interamente garantito, dando certezza dei fondi. Il costo sono i tempi (settimane, serve un prospetto) e l'esposizione al mercato durante il periodo di offerta."
        )
      },
      {
        type: 'mistakes',
        items: [
          t('Quoting the rights issue discount against the cum-rights price instead of TERP.', 'Indicare lo sconto dell’aumento in opzione rispetto al prezzo cum-diritto invece che al TERP.'),
          t('Thinking a deep-discount rights issue makes shareholders poorer: it does not, if they subscribe or sell their rights.', "Pensare che un aumento in opzione a forte sconto impoverisca gli azionisti: non è così, se sottoscrivono o vendono i diritti."),
          t('Forgetting that a secondary ABB raises no money for the company.', "Dimenticare che un ABB secondario non porta cassa alla società.")
        ]
      },
      {
        type: 'summary',
        items: [
          t('Follow-ons: marketed offerings, overnight ABBs, or rights issues.', 'Follow-on: offerte marketed, ABB overnight o aumenti in opzione.'),
          t('TERP = (old shares × cum price + new shares × issue price) / total shares.', 'TERP = (vecchie azioni × prezzo cum + nuove azioni × prezzo di emissione) / totale azioni.'),
          t('Right value = cum price − TERP; discount is measured vs TERP.', 'Valore del diritto = prezzo cum − TERP; lo sconto si misura sul TERP.'),
          t('Rights issues protect existing holders and allow large, underwritten raises.', 'Gli aumenti in opzione tutelano gli azionisti esistenti e consentono raccolte grandi e garantite.')
        ]
      }
    ],
    questions: [
      {
        id: 'cm-fo-q1',
        kind: 'grid',
        topic: 'rights-issue',
        difficulty: 2,
        objective: t('Compute TERP step by step.', 'Calcolare il TERP passo per passo.'),
        prompt: t(
          'Delta S.p.A. has 80m shares at €15.00 and launches a 1-for-2 rights issue at €9.00. Fill in the blanks.',
          'Delta S.p.A. ha 80m di azioni a €15,00 e lancia un aumento in opzione 1 ogni 2 a €9,00. Completa le celle.'
        ),
        columns: [t('Item', 'Voce'), t('Value', 'Valore')],
        rows: [
          { label: t('New shares (m)', 'Nuove azioni (m)'), cells: [{ answer: 40, verify: { fn: 'product', args: [80, 0.5] } }] },
          { label: t('Market cap pre (€m)', 'Capitalizzazione pre (€m)'), cells: [{ answer: 1200, verify: { fn: 'product', args: [80, 15] } }] },
          { label: t('Proceeds (€m)', 'Proventi (€m)'), cells: [{ answer: 360, verify: { fn: 'product', args: [40, 9] } }] },
          { label: t('TERP (€)', 'TERP (€)'), cells: [{ answer: 13, verify: { fn: 'ratio', args: [1560, 120] } }] }
        ],
        explanation: t(
          'New shares = 80m / 2 = 40m. Pre cap = €1,200m; proceeds = €360m; post cap = €1,560m over 120m shares → TERP = €13.00. Value of one right = 15 − 13 = €2.00.',
          'Nuove azioni = 80m / 2 = 40m. Capitalizzazione pre = €1.200m; proventi = €360m; capitalizzazione post = €1.560m su 120m di azioni → TERP = €13,00. Valore di un diritto = 15 − 13 = €2,00.'
        )
      },
      {
        id: 'cm-fo-q2',
        kind: 'numeric',
        topic: 'rights-issue',
        difficulty: 2,
        objective: t('Compute the theoretical value of a right.', 'Calcolare il valore teorico di un diritto.'),
        prompt: t(
          'Shares trade at €10.00 cum-rights; TERP is €9.20. What is the theoretical value of one right (€), with one right per existing share?',
          "Le azioni trattano a €10,00 cum-diritto; il TERP è €9,20. Qual è il valore teorico di un diritto (€), con un diritto per azione esistente?"
        ),
        answer: 0.8,
        unit: '€',
        verify: { fn: 'diff', args: [10, 9.2] },
        explanation: t(
          'Right value = 10.00 − 9.20 = €0.80. Equivalently: (TERP − issue price) × new shares per right = (9.20 − 6.00) × 0.25 = €0.80.',
          'Valore del diritto = 10,00 − 9,20 = €0,80. In modo equivalente: (TERP − prezzo di emissione) × nuove azioni per diritto = (9,20 − 6,00) × 0,25 = €0,80.'
        )
      },
      {
        id: 'cm-fo-q3',
        kind: 'numeric',
        topic: 'follow-on',
        difficulty: 1,
        objective: t('Compute an ABB discount.', 'Calcolare lo sconto di un ABB.'),
        prompt: t(
          'A PE fund sells a block overnight at €19.00; the stock closed at €20.00. What is the ABB discount (%)?',
          'Un fondo di PE vende un blocco overnight a €19,00; il titolo aveva chiuso a €20,00. Qual è lo sconto dell’ABB (%)?'
        ),
        answer: 5,
        unit: '%',
        tolerance: { abs: 0.05 },
        verify: { fn: 'ratio', args: [100, 20] },
        explanation: t(
          'Discount = (20 − 19) / 20 = 5%. Being a secondary sale, no proceeds go to the company and there is no dilution — only a change in the shareholder base.',
          'Sconto = (20 − 19) / 20 = 5%. Trattandosi di una vendita secondaria, la società non incassa nulla e non c’è diluizione — cambia solo la compagine azionaria.'
        )
      },
      {
        id: 'cm-fo-q4',
        kind: 'mcq',
        topic: 'rights-issue',
        difficulty: 2,
        objective: t('Understand wealth effects of a rights issue.', 'Comprendere gli effetti sulla ricchezza di un aumento in opzione.'),
        prompt: t(
          'In a rights issue, which shareholder loses value (ignoring costs and market moves)?',
          'In un aumento in opzione, quale azionista perde valore (ignorando costi e movimenti di mercato)?'
        ),
        choices: [
          t('One who subscribes all their rights', 'Chi sottoscrive tutti i propri diritti'),
          t('One who sells all their rights in the market', 'Chi vende tutti i propri diritti sul mercato'),
          t('One who lets their rights lapse without selling them', 'Chi lascia decadere i diritti senza venderli'),
          t('None — a rights issue never affects shareholder wealth', "Nessuno — un aumento in opzione non tocca mai la ricchezza dell'azionista")
        ],
        correct: 2,
        explanation: t(
          'Subscribing or selling rights both preserve wealth. Letting rights lapse means the share price falls to TERP without compensation. In practice unexercised rights are usually auctioned (in Italy, offered on the market by the issuer), so lapsing holders may recover something, but the theoretical loss is real.',
          "Sottoscrivere o vendere i diritti preserva la ricchezza. Lasciarli decadere significa subire il calo al TERP senza compensazione. In pratica i diritti inoptati vengono di solito offerti sul mercato dall'emittente, quindi si può recuperare qualcosa, ma la perdita teorica esiste."
        )
      }
    ],
    flashcards: [
      { id: 'fc-cm-fo-1', topic: 'rights-issue', front: t('TERP formula?', 'Formula del TERP?'), back: t('(N_old × P_cum + N_new × P_issue) / (N_old + N_new)', '(N_vecchie × P_cum + N_nuove × P_emissione) / (N_vecchie + N_nuove)') },
      { id: 'fc-cm-fo-2', topic: 'follow-on', front: t('What is an ABB?', "Che cos'è un ABB?"), back: t('Accelerated bookbuild: shares placed overnight with institutions after market close, priced at a small discount before the next open.', "Accelerated bookbuilding: azioni collocate in una notte presso istituzionali dopo la chiusura, prezzate con un piccolo sconto prima dell'apertura successiva.") },
      { id: 'fc-cm-fo-3', topic: 'rights-issue', front: t('Theoretical value of a right?', 'Valore teorico di un diritto?'), back: t('Cum-rights price − TERP (= (TERP − issue price) × new shares per right).', 'Prezzo cum-diritto − TERP (= (TERP − prezzo di emissione) × nuove azioni per diritto).') },
      { id: 'fc-cm-fo-4', topic: 'rights-issue', front: t('Why measure the discount vs TERP?', 'Perché misurare lo sconto sul TERP?'), back: t('Because the cum price already embeds the value of the rights; the discount to TERP is the economic discount.', 'Perché il prezzo cum incorpora già il valore dei diritti; lo sconto sul TERP è lo sconto economico.') }
    ],
    sources: [{ label: 'Codice Civile, art. 2441 — Diritto di opzione', url: 'https://www.normattiva.it/' }]
  },

  /* ============================ CM1 — cm-convertibles ============================ */
  {
    id: 'cm-convertibles',
    academyId: 'capital-markets',
    moduleId: 'CM1',
    mode: 'deep',
    minutes: 12,
    difficulty: 3,
    reviewed: '2026-10',
    objective: t(
      'Explain how convertible bonds work, compute conversion ratio, conversion premium and parity, and assess dilution and issuer motivations.',
      'Spiegare come funzionano le obbligazioni convertibili, calcolare rapporto di conversione, premio di conversione e parità, e valutare diluizione e motivazioni dell’emittente.'
    ),
    screens: [
      {
        type: 'intuition',
        title: t('A bond with an equity option attached', "Un'obbligazione con un'opzione sull'equity"),
        body: t(
          'A **convertible bond (CB)** is a bond that the investor can exchange for a fixed number of the issuer’s shares.\n\nIf the shares rise a lot, the investor converts and enjoys the upside. If they do not, the investor keeps a bond and gets repaid at par (credit risk permitting). In exchange for this embedded **call option**, the investor accepts a much **lower coupon** than on a straight bond.',
          "Un'**obbligazione convertibile (CB)** è un'obbligazione che l'investitore può scambiare con un numero fisso di azioni dell'emittente.\n\nSe le azioni salgono molto, l'investitore converte e beneficia del rialzo. Se non salgono, tiene un'obbligazione rimborsata alla pari (rischio di credito permettendo). In cambio di questa **opzione call** incorporata, l'investitore accetta una **cedola molto più bassa** di un'obbligazione ordinaria."
        )
      },
      {
        type: 'technical',
        title: t('Key terms', 'I termini chiave'),
        body: t(
          '- **Conversion price**: the share price at which the bond converts; set at a **premium** (typically around 20–40%) to the share price at issue.\n- **Conversion ratio**: shares received per bond = denomination / conversion price.\n- **Parity (conversion value)**: conversion ratio × current share price.\n- **Bond floor**: value of the CB as a straight bond (coupons + principal discounted at the issuer’s credit spread).\n- Typical features: issuer **soft call** (can redeem early if the share trades well above the conversion price), investor **put**, dividend protection, change-of-control protection.',
          "- **Prezzo di conversione**: il prezzo dell'azione al quale l'obbligazione si converte; fissato con un **premio** (tipicamente intorno al 20–40%) sul prezzo dell'azione all'emissione.\n- **Rapporto di conversione**: azioni ricevute per obbligazione = taglio / prezzo di conversione.\n- **Parità (valore di conversione)**: rapporto di conversione × prezzo corrente dell'azione.\n- **Bond floor**: valore della CB come obbligazione ordinaria (cedole + capitale scontati allo spread di credito dell'emittente).\n- Clausole tipiche: **soft call** dell'emittente (rimborso anticipato se l'azione tratta ben sopra il prezzo di conversione), **put** dell'investitore, protezione dai dividendi e dal cambio di controllo."
        )
      },
      {
        type: 'formula',
        formulas: [
          { name: t('Conversion ratio', 'Rapporto di conversione'), expr: 'Conversion ratio = Bond denomination / Conversion price' },
          { name: t('Conversion premium (at issue)', 'Premio di conversione (all’emissione)'), expr: 'Premium = Conversion price / Share price − 1' },
          { name: t('Parity', 'Parità'), expr: 'Parity (% of par) = Conversion ratio × Share price / Denomination' },
          { name: t('Potential dilution', 'Diluizione potenziale'), expr: 'New shares = Issue size / Conversion price; dilution = New shares / (Existing + New)' }
        ],
        note: t(
          'A CB is worth at least the higher of its bond floor and its parity; the excess reflects the time value of the embedded option.',
          "Una CB vale almeno il maggiore tra bond floor e parità; l'eccedenza riflette il valore temporale dell'opzione incorporata."
        )
      },
      {
        type: 'example',
        title: t('Epsilon S.p.A. issues a €500m CB', 'Epsilon S.p.A. emette una CB da €500m'),
        body: t(
          'Share price at issue €20.00, conversion premium 25%, denomination €100,000, 5-year, 1.0% coupon (a straight bond would pay ~4.5%). Epsilon has 200m shares outstanding.',
          'Prezzo dell’azione all’emissione €20,00, premio di conversione 25%, taglio €100.000, 5 anni, cedola 1,0% (un’obbligazione ordinaria pagherebbe ~4,5%). Epsilon ha 200m di azioni in circolazione.'
        ),
        table: {
          headers: [t('Item', 'Voce'), t('Value', 'Valore')],
          rows: [
            [t('Conversion price (€20 × 1.25)', 'Prezzo di conversione (€20 × 1,25)'), '€25.00'],
            [t('Conversion ratio (€100,000 / €25)', 'Rapporto di conversione (€100.000 / €25)'), '4,000'],
            [t('Underlying shares (€500m / €25)', 'Azioni sottostanti (€500m / €25)'), '20m'],
            [t('Dilution if converted (20 / 220)', 'Diluizione se convertita (20 / 220)'), '9.1%'],
            [t('Annual coupon saving vs straight (3.5% × €500m)', 'Risparmio annuo di cedola vs ordinaria (3,5% × €500m)'), '€17.5m']
          ]
        }
      },
      {
        type: 'technical',
        title: t('Why issuers use convertibles', 'Perché gli emittenti usano le convertibili'),
        body: t(
          '- **Cheap cash coupon**: investors pay for the option with yield.\n- **Issuing equity at a premium**: if converted, the company has effectively sold shares 25% above today’s price.\n- **Speed and size**: typically launched and priced in a day via accelerated bookbuilding with hedge funds (convertible arbitrage) and outright investors.\n- Good for **high-growth, volatile** names (a higher volatility makes the option more valuable) and for issuers who want to avoid immediate dilution.\n\nCosts: potential dilution, and **hedging by arbitrage investors** (short-selling the stock) can pressure the share price at launch.',
          "- **Cedola bassa**: gli investitori pagano l'opzione con il rendimento.\n- **Emettere equity a premio**: in caso di conversione, la società ha di fatto venduto azioni al 25% sopra il prezzo di oggi.\n- **Rapidità e dimensione**: di solito lanciate e prezzate in un giorno tramite accelerated bookbuilding presso hedge fund (convertible arbitrage) e investitori outright.\n- Adatte a titoli **growth e volatili** (più volatilità rende l'opzione più preziosa) e a emittenti che vogliono evitare una diluizione immediata.\n\nCosti: diluizione potenziale, e la **copertura degli investitori arbitraggisti** (vendita allo scoperto del titolo) può pesare sul prezzo dell'azione al lancio."
        )
      },
      {
        type: 'realworld',
        body: t(
          'Convertibles are a core ECM product, often run by a dedicated equity-linked team. Accounting matters for the pitch: under IFRS (IAS 32) a plain CB that converts into a fixed number of shares is split into a liability and an equity component, so reported interest expense is higher than the cash coupon. Diluted EPS (IAS 33) includes the potential shares when dilutive.\n\nAnalysts run the term-sheet scenarios: premium/coupon combinations, dilution, share-price impact and comparable deals.',
          "Le convertibili sono un prodotto ECM centrale, spesso gestito da un team equity-linked dedicato. La contabilità conta nel pitch: secondo gli IFRS (IAS 32) una CB semplice convertibile in un numero fisso di azioni si scompone in una componente di passività e una di patrimonio netto, quindi gli interessi contabilizzati sono superiori alla cedola pagata. L'EPS diluito (IAS 33) include le azioni potenziali quando sono diluitive.\n\nGli analyst costruiscono gli scenari del term sheet: combinazioni premio/cedola, diluizione, impatto sul prezzo e operazioni comparabili."
        )
      },
      { type: 'exercise', questionId: 'cm-cb-q1' },
      { type: 'exercise', questionId: 'cm-cb-q2' },
      { type: 'exercise', questionId: 'cm-cb-q3' },
      {
        type: 'interview',
        question: t('Why would a company issue a convertible instead of straight debt or equity?', "Perché una società emetterebbe una convertibile invece di debito ordinario o equity?"),
        answer: t(
          'Versus straight debt, the CB carries a much lower coupon because investors receive an equity option. Versus equity, it defers dilution and, if it converts, issues shares at a premium to today’s price. It suits volatile, growth companies whose option is valuable and whose credit might otherwise be expensive. The trade-offs are potential dilution, refinancing risk if it does not convert, and short-selling pressure from arbitrage hedging at launch.',
          "Rispetto al debito ordinario, la CB ha una cedola molto più bassa perché gli investitori ricevono un'opzione sull'equity. Rispetto all'equity, rinvia la diluizione e, se convertita, emette azioni a premio rispetto al prezzo di oggi. È adatta a società growth e volatili, per cui l'opzione vale molto e il credito costerebbe caro. I compromessi sono la diluizione potenziale, il rischio di rifinanziamento se non converte e la pressione ribassista delle coperture degli arbitraggisti al lancio."
        )
      },
      {
        type: 'mistakes',
        items: [
          t('Computing the conversion ratio with the current share price instead of the conversion price.', "Calcolare il rapporto di conversione con il prezzo corrente invece che con il prezzo di conversione."),
          t('Assuming the CB coupon equals the IFRS interest expense: the liability component accretes at a market rate.', 'Ritenere che la cedola della CB coincida con gli interessi IFRS: la componente di passività matura a un tasso di mercato.'),
          t('Measuring dilution as new shares / existing shares instead of new / (existing + new) when asked for ownership.', "Misurare la diluizione come nuove azioni / azioni esistenti invece di nuove / (esistenti + nuove) quando si chiede la quota di possesso.")
        ]
      },
      {
        type: 'summary',
        items: [
          t('CB = bond + call option on the issuer’s shares; lower coupon in exchange.', "CB = obbligazione + opzione call sulle azioni dell'emittente; in cambio, cedola più bassa."),
          t('Conversion price = share price × (1 + premium); ratio = denomination / conversion price.', 'Prezzo di conversione = prezzo × (1 + premio); rapporto = taglio / prezzo di conversione.'),
          t('Value ≥ max(bond floor, parity).', 'Valore ≥ max(bond floor, parità).'),
          t('Dilution = issue size / conversion price new shares.', 'Diluizione = nuove azioni pari a importo emesso / prezzo di conversione.')
        ]
      }
    ],
    questions: [
      {
        id: 'cm-cb-q1',
        kind: 'numeric',
        topic: 'convertibles',
        difficulty: 2,
        objective: t('Compute the conversion premium.', 'Calcolare il premio di conversione.'),
        prompt: t(
          'Share price at launch €20.00; conversion price €25.00. What is the conversion premium (%)?',
          'Prezzo dell’azione al lancio €20,00; prezzo di conversione €25,00. Qual è il premio di conversione (%)?'
        ),
        answer: 25,
        unit: '%',
        tolerance: { abs: 0.1 },
        verify: { fn: 'ratio', args: [500, 20] },
        explanation: t(
          'Premium = 25 / 20 − 1 = 25%. Dividing by the conversion price (5/25 = 20%) uses the wrong base.',
          'Premio = 25 / 20 − 1 = 25%. Dividere per il prezzo di conversione (5/25 = 20%) usa la base sbagliata.'
        )
      },
      {
        id: 'cm-cb-q2',
        kind: 'numeric',
        topic: 'convertibles',
        difficulty: 2,
        objective: t('Compute parity of a convertible.', 'Calcolare la parità di una convertibile.'),
        prompt: t(
          'A €100,000 CB has a conversion ratio of 4,000 shares. The share now trades at €28.00. What is the parity (conversion value) per bond (€)?',
          'Una CB da €100.000 ha un rapporto di conversione di 4.000 azioni. L’azione tratta ora a €28,00. Qual è la parità (valore di conversione) per obbligazione (€)?'
        ),
        answer: 112000,
        unit: '€',
        verify: { fn: 'product', args: [4000, 28] },
        explanation: t(
          'Parity = 4,000 × €28 = €112,000, i.e. 112% of par. The CB should trade at or above this (plus remaining option time value); converting would yield shares worth €112,000.',
          'Parità = 4.000 × €28 = €112.000, ossia il 112% della pari. La CB dovrebbe trattare almeno a questo livello (più il valore temporale residuo dell’opzione).'
        )
      },
      {
        id: 'cm-cb-q3',
        kind: 'numeric',
        topic: 'convertibles',
        difficulty: 2,
        objective: t('Compute the dilution from full conversion.', 'Calcolare la diluizione da conversione integrale.'),
        prompt: t(
          'Zeta S.p.A. (180m shares) issues a €300m CB with a conversion price of €15.00. On full conversion, what percentage of the enlarged share capital do CB holders own (%)?',
          'Zeta S.p.A. (180m di azioni) emette una CB da €300m con prezzo di conversione €15,00. In caso di conversione integrale, quale percentuale del capitale post-conversione detengono i portatori della CB (%)?'
        ),
        answer: 10,
        unit: '%',
        tolerance: { abs: 0.05 },
        verify: { fn: 'ratio', args: [2000, 200] },
        steps: [
          t('New shares = €300m / €15 = 20m', 'Nuove azioni = €300m / €15 = 20m'),
          t('Ownership = 20 / (180 + 20) = 10%', 'Quota = 20 / (180 + 20) = 10%')
        ],
        explanation: t(
          '20m new shares out of 200m total = 10%. Using 20/180 = 11.1% measures new shares relative to the old count, not ownership of the enlarged capital.',
          '20m di nuove azioni su 200m totali = 10%. Usare 20/180 = 11,1% misura le nuove azioni rispetto al vecchio numero, non la quota del capitale post-conversione.'
        )
      },
      {
        id: 'cm-cb-q4',
        kind: 'multi',
        topic: 'convertibles',
        difficulty: 3,
        objective: t('Identify drivers of convertible value and issuer appeal.', 'Individuare i fattori di valore di una convertibile e il suo appeal per l’emittente.'),
        prompt: t('Which statements about convertibles are correct? Select all that apply.', 'Quali affermazioni sulle convertibili sono corrette? Seleziona tutte le risposte corrette.'),
        choices: [
          t('Higher share price volatility increases the value of the CB, all else equal', "Una maggiore volatilità dell'azione aumenta il valore della CB, a parità di altre condizioni"),
          t('A higher conversion premium lets the issuer pay a lower coupon, all else equal', "Un premio di conversione più alto consente all'emittente di pagare una cedola più bassa, a parità di altre condizioni"),
          t('Convertible arbitrage funds typically short the issuer’s stock to hedge', "I fondi di convertible arbitrage tipicamente vendono allo scoperto il titolo dell'emittente per coprirsi"),
          t('Investors should convert as soon as parity exceeds par', 'Gli investitori dovrebbero convertire non appena la parità supera la pari')
        ],
        correct: [0, 2],
        explanation: t(
          'Volatility raises option value; arbitrageurs buy the CB and short the stock (delta hedge). A higher premium makes the option less valuable, so the issuer must pay a HIGHER coupon, not lower. Converting early (absent an issuer call or a dividend reason) gives up the remaining option time value and the coupons: holders are better off selling the CB or waiting.',
          "La volatilità aumenta il valore dell'opzione; gli arbitraggisti comprano la CB e vendono allo scoperto il titolo (delta hedge). Un premio più alto rende l'opzione meno preziosa, quindi l'emittente deve pagare una cedola PIÙ ALTA, non più bassa. Convertire in anticipo (senza un richiamo dell'emittente o un motivo legato ai dividendi) significa rinunciare al valore temporale residuo dell'opzione e alle cedole: conviene vendere la CB o attendere."
        )
      }
    ],
    flashcards: [
      { id: 'fc-cm-cb-1', topic: 'convertibles', front: t('Conversion ratio formula?', 'Formula del rapporto di conversione?'), back: t('Denomination / conversion price.', 'Taglio / prezzo di conversione.') },
      { id: 'fc-cm-cb-2', topic: 'convertibles', front: t('What is parity?', "Che cos'è la parità?"), back: t('Conversion value = conversion ratio × current share price (often as % of par).', 'Valore di conversione = rapporto di conversione × prezzo corrente dell’azione (spesso in % della pari).') },
      { id: 'fc-cm-cb-3', topic: 'convertibles', front: t('What is the bond floor?', "Che cos'è il bond floor?"), back: t('Value of the CB as a straight bond, discounting its cash flows at the issuer’s credit-adjusted rate.', "Valore della CB come obbligazione ordinaria, scontando i flussi al tasso che riflette il credito dell'emittente.") },
      { id: 'fc-cm-cb-4', topic: 'convertibles', front: t('IFRS treatment of a plain vanilla CB?', 'Trattamento IFRS di una CB plain vanilla?'), back: t('IAS 32 compound instrument: split into a liability component (fair value of straight debt) and an equity component (residual).', 'Strumento composto IAS 32: si scompone in una componente di passività (fair value del debito ordinario) e una di patrimonio netto (residuo).') }
    ],
    sources: [
      { label: 'IFRS Foundation — IAS 32 Financial Instruments: Presentation (compound instruments)', url: 'https://www.ifrs.org/issued-standards/list-of-standards/ias-32-financial-instruments-presentation/' },
      { label: 'IFRS Foundation — IAS 33 Earnings per Share', url: 'https://www.ifrs.org/issued-standards/list-of-standards/ias-33-earnings-per-share/' }
    ]
  },

/* ============================ CM2 — cm-bonds-basics ============================ */
  {
    id: 'cm-bonds-basics',
    academyId: 'capital-markets',
    moduleId: 'CM2',
    mode: 'deep',
    minutes: 12,
    difficulty: 2,
    reviewed: '2026-10',
    objective: t(
      'Price a fixed-coupon bond, explain the inverse price–yield relationship and compute yield to maturity and current yield.',
      'Prezzare un’obbligazione a cedola fissa, spiegare la relazione inversa prezzo–rendimento e calcolare rendimento a scadenza e current yield.'
    ),
    screens: [
      {
        type: 'intuition',
        title: t('A bond is a stream of promised cash flows', 'Un’obbligazione è una serie di flussi promessi'),
        body: t(
          'When a company issues a bond, investors lend it money today in exchange for **fixed coupons** and the **principal (face value)** at maturity.\n\nThe bond’s price is simply the present value of those promised cash flows. If market rates rise after issuance, the fixed coupons look less attractive, so the price must **fall** until the bond offers the new market yield. Price and yield move in **opposite directions** — always.',
          "Quando una società emette un'obbligazione, gli investitori le prestano denaro oggi in cambio di **cedole fisse** e del **capitale (valore nominale)** a scadenza.\n\nIl prezzo dell'obbligazione è semplicemente il valore attuale di quei flussi promessi. Se dopo l'emissione i tassi di mercato salgono, le cedole fisse diventano meno attraenti, quindi il prezzo deve **scendere** finché il titolo non offre il nuovo rendimento di mercato. Prezzo e rendimento si muovono in **direzioni opposte** — sempre."
        )
      },
      {
        type: 'technical',
        title: t('The vocabulary', 'Il lessico'),
        body: t(
          '- **Face (par) value**: amount repaid at maturity, quoted as 100.\n- **Coupon rate**: fixed annual interest as % of face (EUR corporates usually pay annually, USD semi-annually).\n- **Yield to maturity (YTM)**: the single discount rate that equates the PV of all cash flows to the price — the bond’s IRR if held to maturity and coupons are reinvested at the same rate.\n- **Current yield**: annual coupon / price — ignores the pull to par.\n- **Premium / par / discount**: coupon > YTM → price > 100; coupon = YTM → 100; coupon < YTM → price < 100.\n- Prices are quoted **clean** (without accrued interest); the buyer pays the **dirty** price = clean + accrued.',
          "- **Valore nominale (pari)**: importo rimborsato a scadenza, quotato 100.\n- **Tasso cedolare**: interesse annuo fisso in % del nominale (i corporate in EUR pagano di solito annualmente, quelli in USD semestralmente).\n- **Rendimento a scadenza (YTM)**: l'unico tasso di sconto che eguaglia il VA dei flussi al prezzo — l'IRR del titolo se detenuto a scadenza con cedole reinvestite allo stesso tasso.\n- **Current yield**: cedola annua / prezzo — ignora il pull to par.\n- **Sopra la pari / alla pari / sotto la pari**: cedola > YTM → prezzo > 100; cedola = YTM → 100; cedola < YTM → prezzo < 100.\n- I prezzi si quotano **secchi** (clean, senza rateo); l'acquirente paga il **tel quel** (dirty) = secco + rateo."
        )
      },
      {
        type: 'formula',
        formulas: [
          {
            name: t('Bond price', 'Prezzo dell’obbligazione'),
            expr: 'P = Σ C/(1+y)^t + F/(1+y)^N = C × [1 − (1+y)^−N]/y + F/(1+y)^N',
            vars: [
              { sym: 'C', desc: t('Coupon per period (F × coupon rate / frequency)', 'Cedola per periodo (F × tasso cedolare / frequenza)') },
              { sym: 'y', desc: t('Yield per period (YTM / frequency)', 'Rendimento per periodo (YTM / frequenza)') },
              { sym: 'N', desc: t('Number of periods', 'Numero di periodi') },
              { sym: 'F', desc: t('Face value', 'Valore nominale') }
            ]
          },
          { name: t('Current yield', 'Current yield'), expr: 'Current yield = Annual coupon / Price' }
        ],
        note: t(
          'YTM has no closed form: it is solved iteratively (Excel: =YIELD or =RATE).',
          'Lo YTM non ha forma chiusa: si risolve per iterazione (Excel: =RENDIMENTO o =TASSO).'
        )
      },
      {
        type: 'example',
        title: t('One bond, three market yields', 'Un titolo, tre rendimenti di mercato'),
        body: t(
          'Alfa S.p.A. 5-year bond, 5% annual coupon, face 100. Price at different YTMs:',
          'Obbligazione Alfa S.p.A. a 5 anni, cedola annua 5%, nominale 100. Prezzo a diversi YTM:'
        ),
        table: {
          headers: [t('YTM', 'YTM'), t('Price', 'Prezzo'), t('Trades at', 'Quota')],
          rows: [
            ['4.0%', '104.45', t('Premium', 'Sopra la pari')],
            ['5.0%', '100.00', t('Par', 'Alla pari')],
            ['6.0%', '95.79', t('Discount', 'Sotto la pari')]
          ]
        }
      },
      {
        type: 'realworld',
        body: t(
          'In DCM, bonds are priced by **yield**, not price: the bank agrees a spread over a benchmark, which fixes the reoffer yield; the coupon is then set close to that yield so the bond prices at or just below par.\n\nAnalysts track secondary trading levels of the client’s existing bonds and peers to show where a new bond would price — the "fair value" curve.',
          "In DCM le obbligazioni si prezzano in **rendimento**, non in prezzo: la banca concorda uno spread su un benchmark, che fissa il rendimento di riofferta; la cedola viene poi fissata vicino a quel rendimento così che il titolo sia prezzato alla pari o poco sotto.\n\nGli analyst monitorano i livelli sul secondario delle obbligazioni esistenti del cliente e dei peer per mostrare dove si prezzerebbe un nuovo titolo — la curva di \"fair value\"."
        )
      },
      { type: 'exercise', questionId: 'cm-bond-q1' },
      { type: 'exercise', questionId: 'cm-bond-q2' },
      { type: 'exercise', questionId: 'cm-bond-q3' },
      { type: 'exercise', questionId: 'cm-bond-q4' },
      {
        type: 'interview',
        question: t('If interest rates rise, what happens to bond prices and why?', 'Se i tassi salgono, cosa succede ai prezzi delle obbligazioni e perché?'),
        answer: t(
          'They fall. A bond’s coupons are fixed, so when new bonds offer higher yields, existing bonds must drop in price until their yield to maturity matches the market. Mathematically, the price is the PV of fixed cash flows and a higher discount rate lowers PV. Longer maturity and lower coupons make the price more sensitive — that is duration.',
          "Scendono. Le cedole sono fisse, quindi quando le nuove emissioni offrono rendimenti più alti, i titoli esistenti devono calare di prezzo finché il loro YTM non eguaglia quello di mercato. Matematicamente il prezzo è il VA di flussi fissi e un tasso di sconto più alto riduce il VA. Scadenze più lunghe e cedole più basse rendono il prezzo più sensibile — è la duration."
        )
      },
      {
        type: 'mistakes',
        items: [
          t('Using the annual yield per period on a semi-annual bond: divide the yield and the coupon by 2 and double the periods.', "Usare il rendimento annuo per periodo in un titolo semestrale: dividere rendimento e cedola per 2 e raddoppiare i periodi."),
          t('Confusing current yield with YTM: current yield ignores the gain or loss as the price pulls to par.', 'Confondere current yield e YTM: il current yield ignora l’utile o la perdita del ritorno alla pari.'),
          t('Thinking a premium bond is a "bad deal": its higher coupon compensates for the capital loss to par.', 'Pensare che un titolo sopra la pari sia un "cattivo affare": la cedola più alta compensa la perdita in conto capitale fino alla pari.')
        ]
      },
      {
        type: 'summary',
        items: [
          t('Bond price = PV of coupons + PV of face value at the YTM.', 'Prezzo = VA delle cedole + VA del nominale allo YTM.'),
          t('Price and yield move inversely.', 'Prezzo e rendimento si muovono in modo inverso.'),
          t('Coupon > YTM → premium; coupon < YTM → discount.', 'Cedola > YTM → sopra la pari; cedola < YTM → sotto la pari.'),
          t('Current yield = coupon / price; YTM also captures pull to par.', 'Current yield = cedola / prezzo; lo YTM include anche il ritorno alla pari.')
        ]
      }
    ],
    questions: [
      {
        id: 'cm-bond-q1',
        kind: 'numeric',
        topic: 'bond-pricing',
        difficulty: 2,
        objective: t('Price an annual-coupon bond.', 'Prezzare un titolo a cedola annuale.'),
        prompt: t(
          'A 5-year bond pays a 5% annual coupon (face 100). The market yield is 6%. What is its price?',
          'Un’obbligazione a 5 anni paga una cedola annua del 5% (nominale 100). Il rendimento di mercato è il 6%. Qual è il prezzo?'
        ),
        answer: 95.79,
        tolerance: { abs: 0.02 },
        verify: { fn: 'bondPrice', args: [100, 0.05, 0.06, 5] },
        steps: [
          t('PV of coupons = 5 × [1 − 1.06^−5] / 0.06 = 21.06', 'VA cedole = 5 × [1 − 1,06^−5] / 0,06 = 21,06'),
          t('PV of face = 100 / 1.06^5 = 74.73', 'VA nominale = 100 / 1,06^5 = 74,73'),
          t('Price = 21.06 + 74.73 = 95.79', 'Prezzo = 21,06 + 74,73 = 95,79')
        ],
        explanation: t(
          'Because the coupon (5%) is below the market yield (6%), the bond trades at a discount: 95.79.',
          'Poiché la cedola (5%) è inferiore al rendimento di mercato (6%), il titolo quota sotto la pari: 95,79.'
        )
      },
      {
        id: 'cm-bond-q2',
        kind: 'numeric',
        topic: 'bond-pricing',
        difficulty: 3,
        objective: t('Solve for yield to maturity.', 'Ricavare il rendimento a scadenza.'),
        prompt: t(
          'A 5-year, 4% annual-coupon bond trades at 95.00. What is its yield to maturity? Answer as a decimal (e.g. 0.0525 for 5.25%).',
          'Un’obbligazione a 5 anni con cedola annua del 4% quota 95,00. Qual è il rendimento a scadenza? Rispondi in forma decimale (es. 0,0525 per 5,25%).'
        ),
        answer: 0.0516,
        tolerance: { abs: 0.0005 },
        verify: { fn: 'bondYield', args: [95, 100, 0.04, 5] },
        explanation: t(
          'Solving 95 = Σ 4/(1+y)^t + 100/(1+y)^5 gives y ≈ 5.16%. Sense check: coupon 4% plus pull to par of ~5/5 = 1 point per year on ~97.5 average price ≈ 5.1–5.2%. The current yield (4/95 = 4.21%) understates the return.',
          'Risolvendo 95 = Σ 4/(1+y)^t + 100/(1+y)^5 si ottiene y ≈ 5,16%. Controllo: cedola 4% più ritorno alla pari di ~5/5 = 1 punto l’anno su un prezzo medio di ~97,5 ≈ 5,1–5,2%. Il current yield (4/95 = 4,21%) sottostima il rendimento.'
        )
      },
      {
        id: 'cm-bond-q3',
        kind: 'numeric',
        topic: 'bond-pricing',
        difficulty: 1,
        objective: t('Compute current yield.', 'Calcolare il current yield.'),
        prompt: t(
          'A bond with a 5% coupon (face 100) trades at 96.00. What is its current yield (%)?',
          'Un’obbligazione con cedola 5% (nominale 100) quota 96,00. Qual è il current yield (%)?'
        ),
        answer: 5.21,
        unit: '%',
        tolerance: { abs: 0.01 },
        verify: { fn: 'currentYield', args: [100, 5, 96] },
        explanation: t(
          'Current yield = 5 / 96 = 5.21%. It is above the coupon because the bond trades below par, but it ignores the 4-point gain as the price pulls to 100.',
          'Current yield = 5 / 96 = 5,21%. È superiore alla cedola perché il titolo quota sotto la pari, ma ignora il guadagno di 4 punti del ritorno a 100.'
        )
      },
      {
        id: 'cm-bond-q4',
        kind: 'numeric',
        topic: 'bond-pricing',
        difficulty: 3,
        objective: t('Price a semi-annual bond.', 'Prezzare un titolo a cedola semestrale.'),
        prompt: t(
          'A 10-year USD bond pays a 6% coupon semi-annually (face 100). The yield (bond-equivalent) is 5%. What is its price?',
          'Un’obbligazione in USD a 10 anni paga una cedola del 6% semestrale (nominale 100). Il rendimento (bond-equivalent) è il 5%. Qual è il prezzo?'
        ),
        answer: 107.79,
        tolerance: { abs: 0.02 },
        verify: { fn: 'bondPrice', args: [100, 0.06, 0.05, 10, 2] },
        explanation: t(
          '20 periods, coupon 3.0 per period, yield 2.5% per period: price = 3 × [1 − 1.025^−20]/0.025 + 100/1.025^20 = 46.77 + 61.03 = 107.79. Premium, since coupon > yield.',
          '20 periodi, cedola 3,0 per periodo, rendimento 2,5% per periodo: prezzo = 3 × [1 − 1,025^−20]/0,025 + 100/1,025^20 = 46,77 + 61,03 = 107,79. Sopra la pari, perché cedola > rendimento.'
        )
      },
      {
        id: 'cm-bond-q5',
        kind: 'mcq',
        topic: 'bond-pricing',
        difficulty: 1,
        objective: t('Relate coupon, yield and price.', 'Collegare cedola, rendimento e prezzo.'),
        prompt: t('A bond trades at 103. Which must be true?', 'Un’obbligazione quota 103. Cosa deve essere vero?'),
        choices: [
          t('Its YTM is above its coupon rate', 'Il suo YTM è superiore al tasso cedolare'),
          t('Its current yield is above its coupon rate', 'Il suo current yield è superiore al tasso cedolare'),
          t('Its coupon rate is above its YTM', 'Il suo tasso cedolare è superiore allo YTM'),
          t('The issuer’s credit quality has improved since issue', "Il merito di credito dell'emittente è migliorato dall’emissione")
        ],
        correct: 2,
        explanation: t(
          'A premium price means the coupon exceeds the market yield. Current yield = coupon / 103 is below the coupon rate. The premium could come from lower rates or tighter spreads — credit improvement is possible but not necessary (it may also have been issued above par).',
          "Un prezzo sopra la pari implica cedola superiore al rendimento di mercato. Il current yield = cedola / 103 è inferiore al tasso cedolare. Il premio può derivare da tassi più bassi o spread più stretti — il miglioramento del credito è possibile ma non necessario."
        )
      }
    ],
    flashcards: [
      { id: 'fc-cm-bond-1', topic: 'bond-pricing', front: t('Bond price formula?', 'Formula del prezzo di un’obbligazione?'), back: t('PV of coupons + PV of face value, discounted at the YTM.', 'VA delle cedole + VA del nominale, scontati allo YTM.') },
      { id: 'fc-cm-bond-2', topic: 'bond-pricing', front: t('Coupon 6%, YTM 4%: premium or discount?', 'Cedola 6%, YTM 4%: sopra o sotto la pari?'), back: t('Premium (price > 100), because coupon > YTM.', 'Sopra la pari (prezzo > 100), perché cedola > YTM.') },
      { id: 'fc-cm-bond-3', topic: 'bond-pricing', front: t('Clean vs dirty price?', 'Prezzo secco vs tel quel?'), back: t('Clean = quoted price excl. accrued interest; dirty = clean + accrued (what the buyer pays).', 'Secco = prezzo quotato senza rateo; tel quel = secco + rateo (quanto paga l’acquirente).') },
      { id: 'fc-cm-bond-4', topic: 'bond-pricing', front: t('What does YTM assume?', 'Cosa presuppone lo YTM?'), back: t('Bond held to maturity, all payments made, coupons reinvested at the YTM.', 'Titolo detenuto a scadenza, tutti i pagamenti onorati, cedole reinvestite allo YTM.') }
    ]
  },

  /* ============================ CM2 — cm-ig-hy-loans ============================ */
  {
    id: 'cm-ig-hy-loans',
    academyId: 'capital-markets',
    moduleId: 'CM2',
    mode: 'deep',
    minutes: 12,
    difficulty: 2,
    reviewed: '2026-10',
    objective: t(
      'Compare investment grade bonds, high yield bonds and leveraged loans on rating, covenants, call protection, ranking and coupon type.',
      'Confrontare obbligazioni investment grade, high yield e leveraged loan per rating, covenant, protezione dal rimborso anticipato, rango e tipo di cedola.'
    ),
    screens: [
      {
        type: 'intuition',
        title: t('Same idea, different risk', 'Stessa idea, rischio diverso'),
        body: t(
          'Every company borrows, but lenders treat a stable utility very differently from a 6x-levered LBO target.\n\n- **Investment grade (IG)** issuers: low default risk, cheap money, light documentation.\n- **High yield (HY)** issuers: higher risk, higher coupon, investors demand **covenants** and protection against early repayment.\n- **Leveraged loans**: bank-style senior secured loans to sub-IG companies (often LBOs), floating rate and prepayable.',
          "Tutte le società si indebitano, ma i finanziatori trattano una utility stabile in modo molto diverso da un target LBO con leva 6x.\n\n- Emittenti **investment grade (IG)**: basso rischio di default, denaro a buon mercato, documentazione leggera.\n- Emittenti **high yield (HY)**: rischio più alto, cedola più alta, gli investitori chiedono **covenant** e protezione dal rimborso anticipato.\n- **Leveraged loan**: prestiti senior garantiti di tipo bancario a società sub-IG (spesso LBO), a tasso variabile e rimborsabili anticipatamente."
        )
      },
      {
        type: 'technical',
        title: t('The rating boundary', 'Il confine del rating'),
        body: t(
          'The line between IG and HY sits between **BBB− (S&P/Fitch) / Baa3 (Moody’s)** — the lowest IG rating — and **BB+ / Ba1**, the highest sub-IG rating.\n\nCrossing that line matters: many investment mandates can only hold IG paper, so a downgrade from BBB− to BB+ (a "**fallen angel**") can force selling and widen spreads sharply. Upgrades into IG make a "**rising star**".',
          "Il confine tra IG e HY si trova tra **BBB− (S&P/Fitch) / Baa3 (Moody’s)** — il rating IG più basso — e **BB+ / Ba1**, il rating sub-IG più alto.\n\nAttraversare questo confine conta: molti mandati di investimento possono detenere solo titoli IG, quindi un downgrade da BBB− a BB+ (un \"**fallen angel**\") può forzare vendite e allargare molto gli spread. Un upgrade a IG crea una \"**rising star**\"."
        )
      },
      {
        type: 'technical',
        title: t('Side by side', 'A confronto'),
        body: t(
          'Typical market features (they vary by deal and market cycle):',
          'Caratteristiche tipiche di mercato (variano per operazione e ciclo):'
        ),
        table: {
          headers: [t('Feature', 'Caratteristica'), t('IG bond', 'Bond IG'), t('HY bond', 'Bond HY'), t('Leveraged loan', 'Leveraged loan')],
          rows: [
            [t('Rating', 'Rating'), 'AAA … BBB−', 'BB+ … C', t('Usually BB/B', 'Di solito BB/B')],
            [t('Coupon', 'Cedola'), t('Fixed', 'Fissa'), t('Mostly fixed', 'Per lo più fissa'), t('Floating (Euribor/SOFR + margin)', 'Variabile (Euribor/SOFR + margine)')],
            [t('Security', 'Garanzie'), t('Senior unsecured', 'Senior non garantito'), t('Secured or unsecured', 'Garantito o non garantito'), t('Senior secured', 'Senior garantito')],
            [t('Covenants', 'Covenant'), t('Light (negative pledge, change of control)', 'Leggeri (negative pledge, change of control)'), t('Incurrence', 'Di incurrence'), t('Maintenance or cov-lite', 'Di maintenance o cov-lite')],
            [t('Early repayment', 'Rimborso anticipato'), t('Make-whole call', 'Make-whole call'), t('Non-call period, then call schedule', 'Periodo non-call, poi call schedule'), t('Prepayable at par (soft call ~101 for ~6 months)', 'Rimborsabile alla pari (soft call ~101 per ~6 mesi)')]
          ]
        }
      },
      {
        type: 'technical',
        title: t('Covenants: incurrence vs maintenance', 'Covenant: incurrence vs maintenance'),
        body: t(
          '- **Maintenance covenants** are tested regularly (e.g. every quarter): the borrower must *keep* leverage below, say, 5.0x. A breach is a default unless waived — giving lenders an early seat at the table. Traditional in bank loans.\n- **Incurrence covenants** are tested only when the issuer *does something* — borrows more, pays a dividend, makes an acquisition. If it fails the test, it simply cannot take that action. Standard in HY bonds.\n- **Cov-lite** loans have no maintenance covenant for term loan lenders (often a springing covenant only for the revolver).',
          "- I **covenant di maintenance** si testano periodicamente (es. ogni trimestre): il debitore deve *mantenere* la leva sotto, ad esempio, 5,0x. Una violazione è un default se non concessa una waiver — dando ai finanziatori un posto al tavolo in anticipo. Tipici dei prestiti bancari.\n- I **covenant di incurrence** si testano solo quando l’emittente *compie un'azione* — nuovo debito, dividendo, acquisizione. Se non supera il test, semplicemente non può compierla. Standard nei bond HY.\n- I prestiti **cov-lite** non hanno covenant di maintenance per i finanziatori del term loan (spesso solo un covenant springing per la linea revolving)."
        )
      },
      {
        type: 'formula',
        formulas: [
          { name: t('Floating-rate coupon', 'Cedola a tasso variabile'), expr: 'Coupon = max(Reference rate, Floor) + Margin', vars: [{ sym: 'Reference rate', desc: t('3m/6m Euribor (EUR) or Term SOFR (USD)', 'Euribor 3m/6m (EUR) o Term SOFR (USD)') }, { sym: 'Floor', desc: t('Minimum reference rate, commonly 0%', 'Tasso di riferimento minimo, spesso 0%') }] },
          { name: t('HY call price (typical schedule)', 'Prezzo di call HY (schema tipico)'), expr: 'First call price = 100 + ½ × coupon, stepping down to 100' }
        ]
      },
      {
        type: 'example',
        title: t('Financing an LBO of TargetCo', 'Finanziare l’LBO di TargetCo'),
        body: t(
          'TargetCo (EBITDA €100m) is bought with €550m of debt:\n- **Term Loan B** €350m at Euribor (0% floor) + 3.75%, senior secured, cov-lite, prepayable.\n- **Senior secured notes** €200m, 6.50% fixed, 7-year, non-call 3 years.\n\nWith 3m Euribor at 2.10%, the TLB pays 2.10% + 3.75% = **5.85%**. If Euribor rises by 1 point, the TLB coupon rises to 6.85% while the bond coupon stays at 6.50% — the sponsor may hedge with an interest rate swap.',
          "TargetCo (EBITDA €100m) viene acquisita con €550m di debito:\n- **Term Loan B** da €350m a Euribor (floor 0%) + 3,75%, senior garantito, cov-lite, rimborsabile anticipatamente.\n- **Senior secured notes** da €200m, 6,50% fisso, 7 anni, non-call 3 anni.\n\nCon l’Euribor 3m al 2,10%, il TLB paga 2,10% + 3,75% = **5,85%**. Se l’Euribor sale di 1 punto, la cedola del TLB sale al 6,85% mentre quella del bond resta al 6,50% — lo sponsor può coprirsi con un interest rate swap."
        )
      },
      {
        type: 'realworld',
        body: t(
          'In a bank, IG bonds sit in **DCM**; HY bonds and leveraged loans sit in **Leveraged Finance**, which works closely with sponsors on LBO financing packages and with M&A on committed financing. Private credit funds now compete with the syndicated loan market for mid-market LBOs.\n\nAn analyst builds the debt capacity and pricing pages: leverage and coverage at different structures, comparable deals and covenant comparisons.',
          "In banca i bond IG stanno in **DCM**; bond HY e leveraged loan in **Leveraged Finance**, che lavora con gli sponsor sui pacchetti di finanziamento LBO e con l’M&A sui financing committed. I fondi di private credit competono oggi con il mercato dei prestiti sindacati per gli LBO mid-market.\n\nL’analyst costruisce le pagine di debt capacity e pricing: leva e copertura con strutture diverse, operazioni comparabili e confronto dei covenant."
        )
      },
      { type: 'exercise', questionId: 'cm-ighy-q1' },
      { type: 'exercise', questionId: 'cm-ighy-q2' },
      { type: 'exercise', questionId: 'cm-ighy-q3' },
      {
        type: 'interview',
        question: t('What is the difference between a maintenance and an incurrence covenant?', 'Qual è la differenza tra un covenant di maintenance e uno di incurrence?'),
        answer: t(
          'A maintenance covenant must be met at every test date, typically quarterly — e.g. net leverage below 4.5x — so a deterioration in performance alone can trigger a default. An incurrence covenant is tested only when the borrower takes a specific action, such as raising debt or paying a dividend; poor performance just blocks the action. Maintenance covenants are typical of bank loans; incurrence covenants of high yield bonds and cov-lite term loans.',
          "Un covenant di maintenance va rispettato a ogni data di verifica, di solito trimestrale — es. leva netta sotto 4,5x — quindi anche il solo peggioramento dei risultati può far scattare un default. Un covenant di incurrence si testa solo quando il debitore compie un’azione specifica, come nuovo debito o un dividendo; risultati deboli impediscono solo l’azione. I maintenance sono tipici dei prestiti bancari; gli incurrence dei bond high yield e dei term loan cov-lite."
        )
      },
      {
        type: 'mistakes',
        items: [
          t('Placing BB+ in investment grade: the lowest IG rating is BBB− / Baa3.', 'Collocare BB+ nell’investment grade: il rating IG più basso è BBB− / Baa3.'),
          t('Assuming HY bonds have maintenance covenants: they normally have incurrence covenants.', 'Ritenere che i bond HY abbiano covenant di maintenance: normalmente hanno covenant di incurrence.'),
          t('Forgetting that floating-rate loans expose the borrower to rising rates unless hedged.', 'Dimenticare che i prestiti a tasso variabile espongono il debitore al rialzo dei tassi se non coperti.')
        ]
      },
      {
        type: 'summary',
        items: [
          t('IG = BBB−/Baa3 or better; HY = BB+/Ba1 or below.', 'IG = BBB−/Baa3 o superiore; HY = BB+/Ba1 o inferiore.'),
          t('IG: light covenants, make-whole call. HY: incurrence covenants, non-call period + call schedule.', 'IG: covenant leggeri, make-whole call. HY: covenant di incurrence, periodo non-call + call schedule.'),
          t('Leveraged loans: senior secured, floating (reference rate + margin, floor), prepayable.', 'Leveraged loan: senior garantiti, variabili (tasso di riferimento + margine, floor), rimborsabili anticipatamente.')
        ]
      }
    ],
    questions: [
      {
        id: 'cm-ighy-q1',
        kind: 'mcq',
        topic: 'credit-ratings',
        difficulty: 1,
        objective: t('Locate the IG/HY boundary.', 'Individuare il confine IG/HY.'),
        prompt: t('Which is the lowest investment grade rating?', 'Qual è il rating investment grade più basso?'),
        choices: [t('BB+ (S&P) / Ba1 (Moody’s)', 'BB+ (S&P) / Ba1 (Moody’s)'), t('BBB (S&P) / Baa2 (Moody’s)', 'BBB (S&P) / Baa2 (Moody’s)'), t('A− (S&P) / A3 (Moody’s)', 'A− (S&P) / A3 (Moody’s)'), t('BBB− (S&P) / Baa3 (Moody’s)', 'BBB− (S&P) / Baa3 (Moody’s)')],
        correct: 3,
        explanation: t(
          'BBB−/Baa3 is the last IG notch; one notch lower (BB+/Ba1) is high yield. BBB/Baa2 is IG but not the lowest.',
          'BBB−/Baa3 è l’ultimo gradino IG; un gradino sotto (BB+/Ba1) è high yield. BBB/Baa2 è IG ma non il più basso.'
        )
      },
      {
        id: 'cm-ighy-q2',
        kind: 'numeric',
        topic: 'leveraged-loans',
        difficulty: 1,
        objective: t('Compute a floating-rate loan coupon.', 'Calcolare la cedola di un prestito a tasso variabile.'),
        prompt: t(
          'A Term Loan B pays Euribor + 3.75% with a 0% floor. 3-month Euribor is 2.10%. What is the all-in coupon (%)?',
          'Un Term Loan B paga Euribor + 3,75% con floor allo 0%. L’Euribor 3m è al 2,10%. Qual è la cedola complessiva (%)?'
        ),
        answer: 5.85,
        unit: '%',
        verify: { fn: 'sum', args: [2.1, 3.75] },
        explanation: t(
          'Euribor is above the floor, so the coupon = 2.10% + 3.75% = 5.85%. The floor only matters when Euribor falls below 0%.',
          'L’Euribor è sopra il floor, quindi cedola = 2,10% + 3,75% = 5,85%. Il floor conta solo se l’Euribor scende sotto lo 0%.'
        )
      },
      {
        id: 'cm-ighy-q3',
        kind: 'numeric',
        topic: 'leveraged-loans',
        difficulty: 2,
        objective: t('Apply an interest rate floor.', 'Applicare un floor sul tasso.'),
        prompt: t(
          'Same loan (Euribor + 3.75%, 0% floor), but Euribor is −0.30%, as in 2021. What coupon does the borrower pay (%)?',
          'Stesso prestito (Euribor + 3,75%, floor 0%), ma l’Euribor è a −0,30%, come nel 2021. Quale cedola paga il debitore (%)?'
        ),
        answer: 3.75,
        unit: '%',
        verify: { fn: 'sum', args: [0, 3.75] },
        explanation: t(
          'max(−0.30%, 0%) = 0%, so the coupon is 0% + 3.75% = 3.75%, not 3.45%. Floors protect lenders in negative-rate environments.',
          'max(−0,30%, 0%) = 0%, quindi la cedola è 0% + 3,75% = 3,75%, non 3,45%. I floor proteggono i finanziatori con tassi negativi.'
        )
      },
      {
        id: 'cm-ighy-q4',
        kind: 'multi',
        topic: 'covenants',
        difficulty: 2,
        objective: t('Match instruments with typical features.', 'Associare gli strumenti alle caratteristiche tipiche.'),
        prompt: t('Which are typical features of a high yield bond? Select all that apply.', 'Quali sono caratteristiche tipiche di un bond high yield? Seleziona tutte le risposte corrette.'),
        choices: [
          t('Incurrence-based covenants', 'Covenant di incurrence'),
          t('Quarterly maintenance leverage test', 'Test trimestrale di maintenance sulla leva'),
          t('Non-call period followed by a declining call schedule', 'Periodo non-call seguito da un call schedule decrescente'),
          t('Rating of BB+ or lower', 'Rating BB+ o inferiore'),
          t('Floating Euribor-based coupon as standard', 'Cedola variabile su Euribor come standard')
        ],
        correct: [0, 2, 3],
        explanation: t(
          'HY bonds: sub-IG ratings, incurrence covenants, non-call + call schedule. Maintenance tests and floating coupons are typical of (non cov-lite) loans; floating-rate notes exist in HY but are not the standard.',
          'Bond HY: rating sub-IG, covenant di incurrence, non-call + call schedule. Test di maintenance e cedole variabili sono tipici dei prestiti (non cov-lite); esistono FRN high yield, ma non sono lo standard.'
        )
      }
    ],
    flashcards: [
      { id: 'fc-cm-ighy-1', topic: 'credit-ratings', front: t('Lowest IG rating (S&P / Moody’s)?', 'Rating IG più basso (S&P / Moody’s)?'), back: t('BBB− / Baa3.', 'BBB− / Baa3.') },
      { id: 'fc-cm-ighy-2', topic: 'covenants', front: t('Incurrence covenant?', 'Covenant di incurrence?'), back: t('Tested only when the issuer takes an action (new debt, dividend, acquisition); failing blocks the action.', 'Si testa solo quando l’emittente compie un’azione (nuovo debito, dividendo, acquisizione); se non superato blocca l’azione.') },
      { id: 'fc-cm-ighy-3', topic: 'leveraged-loans', front: t('What is a fallen angel?', "Che cos'è un fallen angel?"), back: t('An issuer downgraded from investment grade to high yield.', 'Un emittente declassato da investment grade a high yield.') },
      { id: 'fc-cm-ighy-4', topic: 'leveraged-loans', front: t('What does cov-lite mean?', 'Cosa significa cov-lite?'), back: t('A loan without maintenance covenants for term lenders (incurrence-style protections only).', 'Un prestito senza covenant di maintenance per i finanziatori del term loan (solo tutele di tipo incurrence).') }
    ]
  },

  /* ============================ CM2 — cm-issuance-process ============================ */
  {
    id: 'cm-issuance-process',
    academyId: 'capital-markets',
    moduleId: 'CM2',
    mode: 'deep',
    minutes: 11,
    difficulty: 2,
    reviewed: '2026-10',
    objective: t(
      'Describe a corporate bond issue from mandate to settlement, and price a new bond using a benchmark, a spread and a new issue concession.',
      'Descrivere un’emissione obbligazionaria dal mandato al regolamento e prezzare un nuovo bond con benchmark, spread e new issue concession.'
    ),
    screens: [
      {
        type: 'intuition',
        title: t('From "we need €500m" to cash in the bank', 'Da "ci servono €500m" alla cassa in banca'),
        body: t(
          'An IG bond deal can be launched and priced in **a single morning** — because the hard work is done in advance: rating, documentation and investor relationships.\n\nThe bank’s job is to read the market, pick the right window, and price the bond as tight as possible for the issuer while leaving enough on the table for investors to buy.',
          "Un’emissione IG può essere lanciata e prezzata in **una sola mattinata** — perché il lavoro duro è fatto prima: rating, documentazione e rapporti con gli investitori.\n\nIl compito della banca è leggere il mercato, scegliere la finestra giusta e prezzare il bond il più stretto possibile per l’emittente, lasciando abbastanza agli investitori perché comprino."
        )
      },
      {
        type: 'technical',
        title: t('The steps', 'Le fasi'),
        body: t(
          '- **Mandate**: issuer appoints bookrunners (DCM pitches on timing, size, tenor, pricing).\n- **Rating**: first-time issuers obtain ratings (S&P, Moody’s, Fitch) — agency meetings and analysis take weeks. In the EU, agencies are registered and supervised by ESMA under the CRA Regulation.\n- **Documentation**: frequent issuers use an **EMTN programme** (base prospectus) and issue via short final terms; first-timers need a full prospectus and legal DD.\n- **Investor marketing**: roadshow or investor calls for new or complex credits.\n- **Execution day**: announce with **initial price thoughts (IPTs)** → build the book → revise guidance → set the **final spread** → price and allocate.\n- **Settlement**: usually T+5 business days or so.',
          "- **Mandato**: l’emittente nomina i bookrunner (il DCM fa pitch su timing, importo, durata, pricing).\n- **Rating**: gli emittenti alla prima emissione ottengono un rating (S&P, Moody’s, Fitch) — incontri e analisi delle agenzie richiedono settimane. Nell’UE le agenzie sono registrate e vigilate dall’ESMA ai sensi del Regolamento CRA.\n- **Documentazione**: gli emittenti frequenti usano un **programma EMTN** (prospetto di base) ed emettono con brevi final terms; chi emette la prima volta ha bisogno di un prospetto completo e di DD legale.\n- **Marketing**: roadshow o investor call per crediti nuovi o complessi.\n- **Giorno di esecuzione**: annuncio con **initial price thoughts (IPT)** → raccolta del book → revisione della guidance → **spread finale** → pricing e allocazione.\n- **Regolamento**: di solito intorno a T+5 giorni lavorativi."
        )
      },
      {
        type: 'formula',
        formulas: [
          { name: t('Reoffer yield', 'Rendimento di riofferta'), expr: 'Reoffer yield = Benchmark (mid-swap or govt yield) + Reoffer spread' },
          { name: t('New issue concession (NIC)', 'New issue concession (NIC)'), expr: 'NIC = New issue spread − Fair value spread (from the issuer’s secondary curve)' },
          { name: t('Tightening during execution', 'Restringimento in esecuzione'), expr: 'Tightening = IPT spread − Final spread' }
        ],
        note: t(
          'EUR corporates are priced over **mid-swaps**; USD corporates over **US Treasuries**. The coupon is commonly set by rounding the reoffer yield down to the nearest 1/8%, so the bond is issued slightly below par.',
          'I corporate in EUR si prezzano sui **mid-swap**; quelli in USD sui **Treasury USA**. La cedola si fissa di solito arrotondando per difetto il rendimento di riofferta all’1/8% più vicino, quindi il bond è emesso leggermente sotto la pari.'
        )
      },
      {
        type: 'example',
        title: t('Execution day for Alfa S.p.A. (BBB+)', 'Giorno di esecuzione per Alfa S.p.A. (BBB+)'),
        body: t(
          '€500m 7-year bond. Alfa’s existing bonds imply a fair value of mid-swaps (MS) + 95bp for 7 years.',
          'Bond €500m a 7 anni. Le obbligazioni esistenti di Alfa implicano un fair value di mid-swap (MS) + 95bp a 7 anni.'
        ),
        table: {
          headers: [t('Time', 'Ora'), t('Step', 'Fase'), t('Spread', 'Spread')],
          rows: [
            ['08:30', t('Announce, IPTs', 'Annuncio, IPT'), 'MS + 135bp area'],
            ['10:30', t('Books > €2.5bn, guidance revised', 'Book > €2,5mld, guidance rivista'), 'MS + 110bp ± 5'],
            ['12:00', t('Final spread set, books €2.0bn', 'Spread finale, book €2,0mld'), 'MS + 105bp'],
            ['15:30', t('Pricing: 7y MS 2.45% → reoffer yield', 'Pricing: MS 7a 2,45% → rendimento'), '3.50%'],
            ['', t('Tightening / NIC', 'Restringimento / NIC'), '30bp / 10bp']
          ]
        }
      },
      {
        type: 'realworld',
        body: t(
          'Books often shrink when guidance tightens — price-sensitive accounts drop out. The art is balancing a tight price for the issuer with a well-covered, high-quality book that trades well in the secondary market.\n\nDCM analysts produce daily market updates, issuer-specific pricing analyses (secondary curves, NIC estimates, comparable deals), and the execution-day materials.',
          "Spesso il book si riduce quando la guidance si restringe — gli investitori sensibili al prezzo escono. L’arte è bilanciare un prezzo stretto per l’emittente con un book ben coperto e di qualità che tratti bene sul secondario.\n\nGli analyst DCM preparano gli aggiornamenti di mercato giornalieri, le analisi di pricing per emittente (curve secondarie, stime di NIC, operazioni comparabili) e i materiali per il giorno di esecuzione."
        )
      },
      { type: 'exercise', questionId: 'cm-iss-q1' },
      { type: 'exercise', questionId: 'cm-iss-q2' },
      { type: 'exercise', questionId: 'cm-iss-q3' },
      {
        type: 'interview',
        question: t('What is a new issue concession and why do issuers pay it?', 'Che cos’è la new issue concession e perché gli emittenti la pagano?'),
        answer: t(
          'It is the extra spread a new bond offers over where the issuer’s existing bonds trade, adjusted for maturity. Investors demand it to switch out of secondary paper, to compensate for execution risk and the supply of new bonds, and as a reward for committing early. Issuers pay it to ensure a large, high-quality book; in strong markets it can be close to zero or even negative.',
          "È lo spread aggiuntivo che un nuovo bond offre rispetto ai livelli delle obbligazioni esistenti dell’emittente, corretti per la scadenza. Gli investitori lo chiedono per spostarsi dal secondario, per compensare il rischio di esecuzione e l’offerta di nuova carta, e come premio per l’impegno anticipato. Gli emittenti lo pagano per assicurarsi un book ampio e di qualità; in mercati forti può essere vicino a zero o persino negativo."
        )
      },
      {
        type: 'mistakes',
        items: [
          t('Confusing tightening from IPTs (marketing) with the NIC (versus fair value).', 'Confondere il restringimento dagli IPT (marketing) con la NIC (rispetto al fair value).'),
          t('Pricing a EUR corporate over Bunds by default: the market convention is mid-swaps.', 'Prezzare un corporate in EUR sul Bund per default: la convenzione di mercato è il mid-swap.'),
          t('Judging a deal only on oversubscription: quality of the book and secondary performance matter.', 'Giudicare un’operazione solo sulla copertura: contano la qualità del book e l’andamento sul secondario.')
        ]
      },
      {
        type: 'summary',
        items: [
          t('Mandate → rating → documentation (EMTN) → marketing → IPTs → guidance → final spread → pricing → settlement.', 'Mandato → rating → documentazione (EMTN) → marketing → IPT → guidance → spread finale → pricing → regolamento.'),
          t('Reoffer yield = benchmark + spread (EUR: mid-swaps; USD: Treasuries).', 'Rendimento di riofferta = benchmark + spread (EUR: mid-swap; USD: Treasury).'),
          t('NIC = new issue spread − fair value from secondary curve.', 'NIC = spread di emissione − fair value dalla curva secondaria.')
        ]
      }
    ],
    questions: [
      {
        id: 'cm-iss-q1',
        kind: 'numeric',
        topic: 'debt-issuance',
        difficulty: 1,
        objective: t('Compute a reoffer yield.', 'Calcolare un rendimento di riofferta.'),
        prompt: t(
          '7-year mid-swaps are 2.45% and the bond prices at MS + 105bp. What is the reoffer yield (%)?',
          'Il mid-swap a 7 anni è al 2,45% e il bond viene prezzato a MS + 105bp. Qual è il rendimento di riofferta (%)?'
        ),
        answer: 3.5,
        unit: '%',
        verify: { fn: 'sum', args: [2.45, 1.05] },
        explanation: t('2.45% + 1.05% = 3.50%. Remember 100bp = 1%.', '2,45% + 1,05% = 3,50%. Ricorda che 100bp = 1%.')
      },
      {
        id: 'cm-iss-q2',
        kind: 'numeric',
        topic: 'debt-issuance',
        difficulty: 2,
        objective: t('Measure the new issue concession.', 'Misurare la new issue concession.'),
        prompt: t(
          'IPTs: MS + 135bp area. Final pricing: MS + 105bp. Fair value from the secondary curve: MS + 95bp. What is the NIC (bp)?',
          'IPT: MS + 135bp area. Pricing finale: MS + 105bp. Fair value dalla curva secondaria: MS + 95bp. Qual è la NIC (bp)?'
        ),
        answer: 10,
        unit: 'bp',
        verify: { fn: 'diff', args: [105, 95] },
        explanation: t(
          'NIC = 105 − 95 = 10bp. The 30bp move from 135 to 105 is the tightening during bookbuilding, not the concession.',
          'NIC = 105 − 95 = 10bp. Il movimento di 30bp da 135 a 105 è il restringimento durante il bookbuilding, non la concession.'
        )
      },
      {
        id: 'cm-iss-q3',
        kind: 'order',
        topic: 'debt-issuance',
        difficulty: 2,
        objective: t('Sequence execution day.', 'Ordinare il giorno di esecuzione.'),
        prompt: t('Order the steps of a bond execution day.', 'Ordina le fasi del giorno di esecuzione di un bond.'),
        items: [
          t('Announce the deal with initial price thoughts', 'Annuncio dell’operazione con gli initial price thoughts'),
          t('Collect orders in the book', 'Raccolta degli ordini nel book'),
          t('Revise guidance tighter', 'Revisione della guidance più stretta'),
          t('Set the final spread and close books', 'Fissazione dello spread finale e chiusura del book'),
          t('Price off the benchmark and allocate', 'Pricing sul benchmark e allocazione'),
          t('Settlement', 'Regolamento')
        ],
        explanation: t(
          'IPTs open the book, guidance tightens as demand builds, the spread is fixed, then the bond is priced against the benchmark and allocated; settlement follows days later.',
          'Gli IPT aprono il book, la guidance si restringe con la domanda, si fissa lo spread, poi il bond viene prezzato sul benchmark e allocato; il regolamento segue qualche giorno dopo.'
        )
      },
      {
        id: 'cm-iss-q4',
        kind: 'mcq',
        topic: 'debt-issuance',
        difficulty: 2,
        objective: t('Understand EMTN programmes.', 'Comprendere i programmi EMTN.'),
        prompt: t('Why do frequent issuers set up an EMTN programme?', 'Perché gli emittenti frequenti istituiscono un programma EMTN?'),
        choices: [
          t('It removes the need for a credit rating', 'Elimina la necessità di un rating'),
          t('It lets them issue quickly using pre-approved base documentation and short final terms', 'Consente di emettere rapidamente con documentazione di base già approvata e brevi final terms'),
          t('It guarantees a lower spread than stand-alone bonds', 'Garantisce uno spread inferiore rispetto alle emissioni stand-alone'),
          t('It converts bonds into bank loans', 'Converte le obbligazioni in prestiti bancari')
        ],
        correct: 1,
        explanation: t(
          'An EMTN base prospectus is approved once and updated periodically; each drawdown only needs final terms, so the issuer can hit a market window within hours. It does not affect rating requirements or guarantee pricing.',
          'Il prospetto di base EMTN si approva una volta e si aggiorna periodicamente; ogni emissione richiede solo i final terms, quindi l’emittente può sfruttare una finestra di mercato in poche ore. Non incide sul rating né garantisce il pricing.'
        )
      }
    ],
    flashcards: [
      { id: 'fc-cm-iss-1', topic: 'debt-issuance', front: t('What are IPTs?', 'Cosa sono gli IPT?'), back: t('Initial price thoughts: the opening spread indication when a bond is announced.', 'Initial price thoughts: l’indicazione di spread iniziale all’annuncio del bond.') },
      { id: 'fc-cm-iss-2', topic: 'debt-issuance', front: t('Benchmark for EUR vs USD corporate bonds?', 'Benchmark per i corporate in EUR vs USD?'), back: t('EUR: mid-swaps. USD: US Treasuries.', 'EUR: mid-swap. USD: Treasury USA.') },
      { id: 'fc-cm-iss-3', topic: 'debt-issuance', front: t('Define NIC.', 'Definisci la NIC.'), back: t('New issue spread minus fair value spread implied by the issuer’s existing bonds.', 'Spread di nuova emissione meno lo spread di fair value implicito nelle obbligazioni esistenti.') },
      { id: 'fc-cm-iss-4', topic: 'debt-issuance', front: t('Who supervises credit rating agencies in the EU?', 'Chi vigila sulle agenzie di rating nell’UE?'), back: t('ESMA, under the CRA Regulation (EC) No 1060/2009.', 'L’ESMA, ai sensi del Regolamento CRA (CE) n. 1060/2009.') }
    ],
    sources: [{ label: 'Regulation (EC) No 1060/2009 on credit rating agencies', url: 'https://eur-lex.europa.eu/eli/reg/2009/1060/oj' }]
  },

/* ============================ CM3 — cm-yield-spreads ============================ */
  {
    id: 'cm-yield-spreads',
    academyId: 'capital-markets',
    moduleId: 'CM3',
    mode: 'deep',
    minutes: 11,
    difficulty: 2,
    reviewed: '2026-10',
    objective: t(
      'Read the shape of the yield curve, decompose a corporate yield into benchmark and credit spread, and explain sovereign spreads such as BTP–Bund.',
      'Leggere la forma della curva dei rendimenti, scomporre il rendimento di un corporate in benchmark e spread di credito e spiegare gli spread sovrani come il BTP–Bund.'
    ),
    screens: [
      {
        type: 'intuition',
        title: t('Two ingredients in every yield', 'Due ingredienti in ogni rendimento'),
        body: t(
          'Any bond yield can be split into:\n- the **risk-free benchmark** for that maturity (what you earn lending to the safest borrower), and\n- a **spread** that pays you for the extra risks of this issuer: default, lower liquidity, subordination.\n\nBankers talk in spreads because the benchmark moves every second with macro news, while the spread tells you how the market sees **this credit**.',
          "Ogni rendimento obbligazionario si scompone in:\n- il **benchmark privo di rischio** per quella scadenza (quanto si guadagna prestando al debitore più sicuro), e\n- uno **spread** che remunera i rischi aggiuntivi di quell’emittente: default, minore liquidità, subordinazione.\n\nI banker ragionano in spread perché il benchmark si muove ogni secondo con le notizie macro, mentre lo spread dice come il mercato vede **quel credito**."
        )
      },
      {
        type: 'technical',
        title: t('Yield curve shapes', 'Le forme della curva'),
        body: t(
          'The **yield curve** plots government yields by maturity.\n- **Normal (upward-sloping)**: long rates above short rates — investors want a term premium and/or expect rates to rise.\n- **Flat**: little difference between short and long maturities, often in transition.\n- **Inverted**: short rates above long rates — usually when central banks have hiked and markets expect cuts; historically a recession warning in the US.\n- **Steepening / flattening** describe changes in the 2s10s slope (10-year minus 2-year yield).',
          "La **curva dei rendimenti** rappresenta i rendimenti governativi per scadenza.\n- **Normale (inclinata positivamente)**: tassi lunghi sopra quelli brevi — gli investitori chiedono un premio a termine e/o si attendono rialzi.\n- **Piatta**: poca differenza tra scadenze brevi e lunghe, spesso in fase di transizione.\n- **Invertita**: tassi brevi sopra quelli lunghi — tipicamente quando le banche centrali hanno alzato i tassi e il mercato si attende tagli; storicamente un segnale di recessione negli USA.\n- **Irripidimento / appiattimento** descrivono le variazioni della pendenza 2s10s (rendimento a 10 anni meno 2 anni)."
        )
      },
      {
        type: 'technical',
        title: t('Benchmarks and credit spreads', 'Benchmark e spread di credito'),
        body: t(
          '- **USD**: US Treasuries. **EUR**: German **Bunds** are the reference risk-free sovereign; corporates are usually quoted versus **mid-swaps**.\n- **Credit spread** = corporate yield − benchmark yield of the same maturity, in **basis points** (1bp = 0.01%).\n- Spreads widen with leverage, lower ratings, longer maturity, subordination and market stress; they tighten when risk appetite is strong.\n- **Sovereign spreads**: the **BTP–Bund spread** (10-year Italian BTP yield minus 10-year Bund yield) measures the extra yield investors demand for Italian versus German government risk. Italian corporates are rarely priced much tighter than the BTP, so the spread feeds into the cost of capital of the whole Italian economy.',
          "- **USD**: Treasury USA. **EUR**: i **Bund** tedeschi sono il riferimento sovrano privo di rischio; i corporate si quotano di solito sui **mid-swap**.\n- **Spread di credito** = rendimento del corporate − rendimento del benchmark di pari scadenza, in **punti base** (1bp = 0,01%).\n- Gli spread si allargano con leva più alta, rating più bassi, scadenze più lunghe, subordinazione e stress di mercato; si restringono quando la propensione al rischio è forte.\n- **Spread sovrani**: lo **spread BTP–Bund** (rendimento del BTP a 10 anni meno quello del Bund a 10 anni) misura il rendimento aggiuntivo richiesto per il rischio Italia rispetto alla Germania. I corporate italiani raramente si prezzano molto sotto il BTP, quindi lo spread incide sul costo del capitale di tutta l’economia italiana."
        )
      },
      {
        type: 'formula',
        formulas: [
          { name: t('Credit spread', 'Spread di credito'), expr: 'Spread (bp) = (Corporate yield − Benchmark yield) × 10,000' },
          { name: t('BTP–Bund spread', 'Spread BTP–Bund'), expr: 'Spread = 10y BTP yield − 10y Bund yield' },
          { name: t('Curve slope', 'Pendenza della curva'), expr: '2s10s = 10y yield − 2y yield' }
        ]
      },
      {
        type: 'example',
        title: t('Decomposing the yield of Beta S.p.A.’s bond', 'Scomporre il rendimento del bond di Beta S.p.A.'),
        body: t('Hypothetical 5-year levels:', 'Livelli ipotetici a 5 anni:'),
        table: {
          headers: [t('Instrument', 'Strumento'), t('Yield', 'Rendimento'), t('Spread vs Bund', 'Spread vs Bund')],
          rows: [
            [t('5y Bund', 'Bund 5a'), '2.20%', '—'],
            [t('5y mid-swap', 'Mid-swap 5a'), '2.50%', '30bp'],
            [t('5y BTP', 'BTP 5a'), '2.95%', '75bp'],
            [t('Beta S.p.A. 5y (BBB)', 'Beta S.p.A. 5a (BBB)'), '4.30%', '210bp'],
            [t('Beta spread vs mid-swap', 'Spread di Beta vs mid-swap'), '—', '180bp']
          ]
        }
      },
      {
        type: 'realworld',
        body: t(
          'During the euro sovereign debt crisis the BTP–Bund spread rose above 500bp in November 2011, sharply raising funding costs for Italian banks and corporates. In the US the 2s10s curve was inverted for much of 2022–2024 after the Fed’s rapid hikes.\n\nFor M&A and LBOs, spreads drive financing costs and therefore what a sponsor can pay. DCM and LevFin analysts start every day with a market update: benchmark yields, curve moves, credit indices (iTraxx, CDX) and new issue levels.',
          "Durante la crisi del debito sovrano dell’euro lo spread BTP–Bund superò i 500bp nel novembre 2011, aumentando fortemente il costo della raccolta per banche e imprese italiane. Negli USA la curva 2s10s è rimasta invertita per gran parte del 2022–2024 dopo i rapidi rialzi della Fed.\n\nIn M&A e LBO gli spread determinano il costo del finanziamento e quindi quanto può pagare uno sponsor. Gli analyst DCM e LevFin iniziano ogni giornata con un market update: rendimenti benchmark, movimenti di curva, indici di credito (iTraxx, CDX) e livelli delle nuove emissioni."
        )
      },
      { type: 'exercise', questionId: 'cm-ys-q1' },
      { type: 'exercise', questionId: 'cm-ys-q2' },
      { type: 'exercise', questionId: 'cm-ys-q3' },
      {
        type: 'interview',
        question: t('What does an inverted yield curve tell you?', 'Cosa ti dice una curva dei rendimenti invertita?'),
        answer: t(
          'That short-term rates are above long-term rates. Usually the central bank has tightened policy to fight inflation, and the market expects growth to slow and rates to be cut in the future. In the US an inversion has preceded most recessions, although timing is unreliable. For banks it compresses net interest margins; for corporates it can make short-term floating debt more expensive than locking in long-term fixed rates.',
          "Che i tassi a breve sono sopra quelli a lungo. Di solito la banca centrale ha stretto la politica monetaria per combattere l’inflazione e il mercato si aspetta un rallentamento della crescita e tagli dei tassi in futuro. Negli USA un’inversione ha preceduto la maggior parte delle recessioni, anche se la tempistica è poco affidabile. Per le banche comprime il margine d’interesse; per le imprese può rendere il debito variabile a breve più caro del bloccare tassi fissi a lungo."
        )
      },
      {
        type: 'mistakes',
        items: [
          t('Mixing units: 1.25% = 125bp, not 12.5bp.', 'Confondere le unità: 1,25% = 125bp, non 12,5bp.'),
          t('Comparing yields of different maturities to compute a spread.', 'Confrontare rendimenti di scadenze diverse per calcolare uno spread.'),
          t('Assuming a higher yield always means wider spread: the benchmark may have moved instead.', 'Pensare che un rendimento più alto implichi sempre uno spread più ampio: può essersi mosso il benchmark.')
        ]
      },
      {
        type: 'summary',
        items: [
          t('Yield = benchmark + credit spread.', 'Rendimento = benchmark + spread di credito.'),
          t('Curve shapes: normal, flat, inverted; 2s10s measures slope.', 'Forme della curva: normale, piatta, invertita; il 2s10s misura la pendenza.'),
          t('Benchmarks: Treasuries (USD), Bunds/mid-swaps (EUR); BTP–Bund = Italian sovereign risk premium.', 'Benchmark: Treasury (USD), Bund/mid-swap (EUR); BTP–Bund = premio per il rischio sovrano italiano.')
        ]
      }
    ],
    questions: [
      {
        id: 'cm-ys-q1',
        kind: 'numeric',
        topic: 'yield-curve',
        difficulty: 1,
        objective: t('Compute a sovereign spread.', 'Calcolare uno spread sovrano.'),
        prompt: t(
          'The 10-year BTP yields 3.50% and the 10-year Bund 2.60%. What is the BTP–Bund spread (bp)?',
          'Il BTP a 10 anni rende il 3,50% e il Bund a 10 anni il 2,60%. Qual è lo spread BTP–Bund (bp)?'
        ),
        answer: 90,
        unit: 'bp',
        verify: { fn: 'diff', args: [350, 260] },
        explanation: t('3.50% − 2.60% = 0.90% = 90bp.', '3,50% − 2,60% = 0,90% = 90bp.')
      },
      {
        id: 'cm-ys-q2',
        kind: 'grid',
        topic: 'credit-spreads',
        difficulty: 2,
        objective: t('Measure a corporate spread against different benchmarks.', 'Misurare lo spread di un corporate rispetto a benchmark diversi.'),
        prompt: t(
          'A 5-year Gamma S.p.A. bond yields 4.30%. The 5-year Bund yields 2.20% and 5-year mid-swaps are 2.50%. Fill in the spreads (bp).',
          'Un bond Gamma S.p.A. a 5 anni rende il 4,30%. Il Bund a 5 anni rende il 2,20% e il mid-swap a 5 anni è al 2,50%. Completa gli spread (bp).'
        ),
        columns: [t('Benchmark', 'Benchmark'), t('Spread (bp)', 'Spread (bp)')],
        rows: [
          { label: t('vs Bund', 'vs Bund'), cells: [{ answer: 210, verify: { fn: 'diff', args: [430, 220] } }] },
          { label: t('vs mid-swaps', 'vs mid-swap'), cells: [{ answer: 180, verify: { fn: 'diff', args: [430, 250] } }] }
        ],
        unit: 'bp',
        explanation: t(
          'vs Bund: 430 − 220 = 210bp; vs mid-swaps: 430 − 250 = 180bp. The 30bp difference is the swap spread. EUR corporates are normally quoted versus mid-swaps.',
          'vs Bund: 430 − 220 = 210bp; vs mid-swap: 430 − 250 = 180bp. La differenza di 30bp è lo swap spread. I corporate in EUR si quotano normalmente sui mid-swap.'
        )
      },
      {
        id: 'cm-ys-q3',
        kind: 'mcq',
        topic: 'yield-curve',
        difficulty: 2,
        objective: t('Interpret curve inversion.', 'Interpretare l’inversione della curva.'),
        prompt: t('The 2-year Treasury yields 4.6% and the 10-year 4.1%. Which statement is most accurate?', 'Il Treasury a 2 anni rende il 4,6% e quello a 10 anni il 4,1%. Quale affermazione è più corretta?'),
        choices: [
          t('The curve is inverted; markets likely expect policy rate cuts', 'La curva è invertita; il mercato si aspetta probabilmente tagli dei tassi'),
          t('The curve is normal; markets expect rate hikes', 'La curva è normale; il mercato si aspetta rialzi'),
          t('The 2s10s slope is +50bp', 'La pendenza 2s10s è +50bp'),
          t('Credit spreads must be widening', 'Gli spread di credito devono allargarsi')
        ],
        correct: 0,
        explanation: t(
          '2s10s = 4.1% − 4.6% = −50bp: inverted, typically reflecting expected easing. The slope is negative, not positive. The curve says nothing directly about credit spreads.',
          '2s10s = 4,1% − 4,6% = −50bp: curva invertita, che riflette tipicamente attese di allentamento. La pendenza è negativa. La curva non dice nulla direttamente sugli spread di credito.'
        )
      },
      {
        id: 'cm-ys-q4',
        kind: 'multi',
        topic: 'credit-spreads',
        difficulty: 2,
        objective: t('Identify drivers of wider credit spreads.', 'Individuare i fattori che allargano gli spread di credito.'),
        prompt: t('All else equal, which would widen an issuer’s credit spread? Select all that apply.', 'A parità di altre condizioni, cosa allargherebbe lo spread di credito di un emittente? Seleziona tutte le risposte corrette.'),
        choices: [
          t('A debt-funded acquisition raising leverage from 2.5x to 4.5x', 'Un’acquisizione a debito che porta la leva da 2,5x a 4,5x'),
          t('A downgrade from BBB− to BB+', 'Un downgrade da BBB− a BB+'),
          t('A fall in the Bund yield with no change in the issuer’s risk', 'Un calo del rendimento del Bund senza variazioni del rischio dell’emittente'),
          t('Issuing subordinated rather than senior debt', 'Emettere debito subordinato invece che senior'),
          t('A broad risk-off move in markets', 'Una fase generalizzata di risk-off sui mercati')
        ],
        correct: [0, 1, 3, 4],
        explanation: t(
          'Leverage, downgrades (especially across the IG/HY line), subordination and risk-off all widen spreads. A lower benchmark yield lowers the all-in yield but does not by itself change the spread.',
          'Leva, downgrade (soprattutto oltre il confine IG/HY), subordinazione e risk-off allargano gli spread. Un benchmark più basso riduce il rendimento complessivo ma non cambia di per sé lo spread.'
        )
      }
    ],
    flashcards: [
      { id: 'fc-cm-ys-1', topic: 'yield-curve', front: t('What is 2s10s?', 'Cos’è il 2s10s?'), back: t('10-year yield minus 2-year yield: the slope of the curve. Negative = inverted.', 'Rendimento a 10 anni meno 2 anni: la pendenza della curva. Negativo = invertita.') },
      { id: 'fc-cm-ys-2', topic: 'credit-spreads', front: t('1 basis point equals?', '1 punto base equivale a?'), back: t('0.01% (one hundredth of a percentage point).', '0,01% (un centesimo di punto percentuale).') },
      { id: 'fc-cm-ys-3', topic: 'credit-spreads', front: t('What does the BTP–Bund spread measure?', 'Cosa misura lo spread BTP–Bund?'), back: t('The extra 10-year yield on Italian vs German government bonds — Italy’s sovereign risk premium.', 'Il rendimento aggiuntivo a 10 anni dei titoli di Stato italiani rispetto ai tedeschi — il premio per il rischio sovrano italiano.') },
      { id: 'fc-cm-ys-4', topic: 'credit-spreads', front: t('Usual pricing benchmark for EUR corporate bonds?', 'Benchmark di pricing usuale per i corporate in EUR?'), back: t('Mid-swaps.', 'Mid-swap.') }
    ]
  },

  /* ============================ CM3 — cm-duration-convexity ============================ */
  {
    id: 'cm-duration-convexity',
    academyId: 'capital-markets',
    moduleId: 'CM3',
    mode: 'deep',
    minutes: 14,
    difficulty: 3,
    reviewed: '2026-10',
    objective: t(
      'Compute Macaulay and modified duration and convexity, and estimate bond price changes for a given yield shift.',
      'Calcolare duration di Macaulay, duration modificata e convessità, e stimare la variazione di prezzo di un’obbligazione per una data variazione dei rendimenti.'
    ),
    screens: [
      {
        type: 'intuition',
        title: t('How sensitive is my bond to rates?', 'Quanto è sensibile il mio bond ai tassi?'),
        body: t(
          'Two bonds can have the same yield but react very differently when rates move. A 30-year bond swings far more than a 2-year bond, because its cash flows are further away and get discounted over more periods.\n\n**Duration** measures this sensitivity in one number. Think of it as the **weighted-average time** until you get your money back — and as the % price change for a 1% move in yield.',
          "Due obbligazioni possono avere lo stesso rendimento ma reagire in modo molto diverso ai movimenti dei tassi. Un titolo a 30 anni oscilla molto più di uno a 2 anni, perché i flussi sono più lontani e scontati per più periodi.\n\nLa **duration** misura questa sensibilità con un solo numero. Pensala come il **tempo medio ponderato** in cui rientri del tuo denaro — e come la variazione % del prezzo per un movimento dell’1% del rendimento."
        )
      },
      {
        type: 'technical',
        title: t('Three measures', 'Tre misure'),
        body: t(
          '- **Macaulay duration** (years): average time to each cash flow, weighted by its PV share of the price. A zero-coupon bond’s Macaulay duration equals its maturity.\n- **Modified duration**: Macaulay ÷ (1 + y/m). It gives the approximate **% price change for a 1-point (100bp) change in yield**.\n- **Convexity**: the curvature of the price–yield relationship. For plain bonds it is positive: prices rise more when yields fall than they drop when yields rise.\n\nDuration is higher for **longer maturity**, **lower coupon** and **lower yield**. Traders also use **DV01**: the € price change for a 1bp move.',
          "- **Duration di Macaulay** (anni): tempo medio di incasso dei flussi, ponderato per la quota del loro VA sul prezzo. Per uno zero coupon coincide con la scadenza.\n- **Duration modificata**: Macaulay ÷ (1 + y/m). Fornisce la **variazione % approssimata del prezzo per una variazione di 1 punto (100bp) del rendimento**.\n- **Convessità**: la curvatura della relazione prezzo–rendimento. Per i titoli plain è positiva: i prezzi salgono di più quando i rendimenti scendono di quanto calino quando salgono.\n\nLa duration è più alta con **scadenza più lunga**, **cedola più bassa** e **rendimento più basso**. I trader usano anche il **DV01**: la variazione in € del prezzo per 1bp."
        )
      },
      {
        type: 'formula',
        formulas: [
          { name: t('Macaulay duration', 'Duration di Macaulay'), expr: 'D_mac = Σ [t × PV(CF_t)] / Price' },
          { name: t('Modified duration', 'Duration modificata'), expr: 'D_mod = D_mac / (1 + y/m)' },
          { name: t('Price change approximation', 'Approssimazione della variazione di prezzo'), expr: 'ΔP/P ≈ −D_mod × Δy + ½ × Convexity × (Δy)²' },
          { name: t('DV01', 'DV01'), expr: 'DV01 ≈ D_mod × Price × 0.0001' }
        ],
        note: t(
          'Δy is in decimals (100bp = 0.01). Duration alone is a straight-line estimate; convexity corrects for the curve.',
          'Δy è in decimali (100bp = 0,01). La sola duration è una stima lineare; la convessità corregge per la curvatura.'
        )
      },
      {
        type: 'example',
        title: t('10-year 4% bond priced at par', 'Bond a 10 anni 4% prezzato alla pari'),
        body: t(
          'Macaulay duration 8.44 years; modified duration 8.11; convexity 80.75. Compare the estimates with the exact repricing:',
          'Duration di Macaulay 8,44 anni; duration modificata 8,11; convessità 80,75. Confronta le stime con il riprezzamento esatto:'
        ),
        table: {
          headers: [t('Yield move', 'Variazione rendimento'), t('Duration only', 'Solo duration'), t('Duration + convexity', 'Duration + convessità'), t('Exact', 'Esatto')],
          rows: [
            ['+100bp', '−8.11%', '−7.71%', '−7.72%'],
            ['−100bp', '+8.11%', '+8.51%', '+8.53%']
          ]
        }
      },
      {
        type: 'realworld',
        body: t(
          'Duration is how bond investors and banks manage interest rate risk. Insurers and pension funds match the duration of assets to liabilities; a bank’s DCM desk hedges new issue risk by DV01. For corporates, issuing long-dated fixed debt locks in rates but the bond’s market value (and any hedge) becomes very rate-sensitive.\n\nA strong candidate can explain why the 2022 rate rise produced large mark-to-market losses on long-duration bonds — e.g. the bond portfolio losses at the heart of Silicon Valley Bank’s 2023 failure.',
          "La duration è lo strumento con cui investitori e banche gestiscono il rischio di tasso. Assicurazioni e fondi pensione allineano la duration dell’attivo a quella del passivo; il desk DCM copre il rischio di una nuova emissione in base al DV01. Per un’impresa, emettere debito fisso a lunga scadenza blocca i tassi ma rende il valore di mercato del bond (e di eventuali coperture) molto sensibile ai tassi.\n\nUn buon candidato sa spiegare perché il rialzo dei tassi del 2022 ha prodotto forti perdite mark-to-market sui titoli a lunga duration — ad esempio le perdite sul portafoglio obbligazionario al centro del fallimento di Silicon Valley Bank nel 2023."
        )
      },
      { type: 'exercise', questionId: 'cm-dur-q1' },
      { type: 'exercise', questionId: 'cm-dur-q2' },
      { type: 'exercise', questionId: 'cm-dur-q3' },
      { type: 'exercise', questionId: 'cm-dur-q4' },
      {
        type: 'interview',
        question: t('Which has the higher duration: a 10-year zero-coupon bond or a 10-year 6% coupon bond?', 'Quale ha duration più alta: uno zero coupon a 10 anni o un bond a 10 anni con cedola 6%?'),
        answer: t(
          'The zero. Its only cash flow is at year 10, so its Macaulay duration is exactly 10 years. The coupon bond returns part of its value earlier through coupons, pulling its weighted-average time below 10. So the zero is more sensitive to rate changes.',
          "Lo zero coupon. Il suo unico flusso è all’anno 10, quindi la sua duration di Macaulay è esattamente 10 anni. Il bond con cedola restituisce parte del valore prima tramite le cedole, abbassando il tempo medio ponderato sotto 10. Quindi lo zero coupon è più sensibile ai tassi."
        )
      },
      {
        type: 'mistakes',
        items: [
          t('Using Macaulay instead of modified duration to estimate price changes.', 'Usare la duration di Macaulay invece di quella modificata per stimare le variazioni di prezzo.'),
          t('Plugging Δy as 1 instead of 0.01 for a 100bp move (when working in decimals).', 'Inserire Δy pari a 1 invece di 0,01 per un movimento di 100bp (lavorando in decimali).'),
          t('Forgetting that the convexity term is always added (positive) for plain bonds, whatever the direction of rates.', 'Dimenticare che per i titoli plain il termine di convessità si somma sempre (positivo), qualunque sia la direzione dei tassi.')
        ]
      },
      {
        type: 'summary',
        items: [
          t('Macaulay duration = PV-weighted average time to cash flows.', 'Duration di Macaulay = tempo medio dei flussi ponderato per il VA.'),
          t('Modified duration = Macaulay / (1 + y/m) ≈ % price change per 1% yield move.', 'Duration modificata = Macaulay / (1 + y/m) ≈ variazione % del prezzo per 1% di rendimento.'),
          t('ΔP/P ≈ −D_mod × Δy + ½ × C × Δy².', 'ΔP/P ≈ −D_mod × Δy + ½ × C × Δy².'),
          t('Longer maturity, lower coupon, lower yield → higher duration.', 'Scadenza più lunga, cedola più bassa, rendimento più basso → duration più alta.')
        ]
      }
    ],
    questions: [
      {
        id: 'cm-dur-q1',
        kind: 'numeric',
        topic: 'duration',
        difficulty: 3,
        objective: t('Compute Macaulay duration.', 'Calcolare la duration di Macaulay.'),
        prompt: t(
          'A 5-year bond with a 5% annual coupon yields 5% (price 100). What is its Macaulay duration (years)?',
          'Un bond a 5 anni con cedola annua del 5% rende il 5% (prezzo 100). Qual è la sua duration di Macaulay (anni)?'
        ),
        answer: 4.55,
        unit: 'years',
        tolerance: { abs: 0.01 },
        verify: { fn: 'macaulayDuration', args: [100, 0.05, 0.05, 5] },
        steps: [
          t('PVs: 4.76, 4.54, 4.32, 4.11, 82.27 (sum 100)', 'VA: 4,76; 4,54; 4,32; 4,11; 82,27 (somma 100)'),
          t('Σ t × PV = 4.76 + 9.07 + 12.96 + 16.45 + 411.35 = 454.6', 'Σ t × VA = 4,76 + 9,07 + 12,96 + 16,45 + 411,35 = 454,6'),
          t('D_mac = 454.6 / 100 = 4.55 years', 'D_mac = 454,6 / 100 = 4,55 anni')
        ],
        explanation: t(
          'Duration is below the 5-year maturity because coupons are received earlier. Only a zero-coupon bond has duration equal to maturity.',
          'La duration è inferiore alla scadenza di 5 anni perché le cedole si incassano prima. Solo uno zero coupon ha duration pari alla scadenza.'
        )
      },
      {
        id: 'cm-dur-q2',
        kind: 'numeric',
        topic: 'duration',
        difficulty: 2,
        objective: t('Convert Macaulay to modified duration.', 'Convertire la duration di Macaulay in modificata.'),
        prompt: t(
          'Same bond: Macaulay duration 4.546 years, yield 5% (annual). What is the modified duration?',
          'Stesso bond: duration di Macaulay 4,546 anni, rendimento 5% (annuale). Qual è la duration modificata?'
        ),
        answer: 4.33,
        tolerance: { abs: 0.01 },
        verify: { fn: 'modifiedDuration', args: [100, 0.05, 0.05, 5] },
        explanation: t(
          'D_mod = 4.546 / 1.05 = 4.33. A 1% rise in yield lowers the price by about 4.33%.',
          'D_mod = 4,546 / 1,05 = 4,33. Un aumento dell’1% del rendimento riduce il prezzo di circa il 4,33%.'
        )
      },
      {
        id: 'cm-dur-q3',
        kind: 'numeric',
        topic: 'convexity',
        difficulty: 3,
        objective: t('Estimate a price change with duration and convexity.', 'Stimare una variazione di prezzo con duration e convessità.'),
        prompt: t(
          'Modified duration 4.33, convexity 23.94. Yields rise by 100bp. Estimate the % price change, including convexity (%).',
          'Duration modificata 4,33, convessità 23,94. I rendimenti salgono di 100bp. Stima la variazione % del prezzo, inclusa la convessità (%).'
        ),
        answer: -4.21,
        unit: '%',
        tolerance: { abs: 0.02 },
        verify: { fn: 'priceChangeApprox', args: [4.33, 1, 0.2394] },
        steps: [
          t('Duration effect: −4.33 × 0.01 = −4.33%', 'Effetto duration: −4,33 × 0,01 = −4,33%'),
          t('Convexity effect: ½ × 23.94 × 0.01² = +0.12%', 'Effetto convessità: ½ × 23,94 × 0,01² = +0,12%'),
          t('Total ≈ −4.21%', 'Totale ≈ −4,21%')
        ],
        explanation: t(
          '−4.33% + 0.12% = −4.21% (exact repricing at 6% gives −4.21%). Subtracting the convexity term (−4.45%) is a common sign error.',
          '−4,33% + 0,12% = −4,21% (il riprezzamento esatto al 6% dà −4,21%). Sottrarre il termine di convessità (−4,45%) è un errore di segno comune.'
        )
      },
      {
        id: 'cm-dur-q4',
        kind: 'numeric',
        topic: 'duration',
        difficulty: 1,
        objective: t('Know the duration of a zero-coupon bond.', 'Conoscere la duration di uno zero coupon.'),
        prompt: t(
          'What is the Macaulay duration (years) of a 7-year zero-coupon bond yielding 5%?',
          'Qual è la duration di Macaulay (anni) di uno zero coupon a 7 anni con rendimento del 5%?'
        ),
        answer: 7,
        unit: 'years',
        verify: { fn: 'macaulayDuration', args: [100, 0, 0.05, 7] },
        explanation: t('A single cash flow at year 7 means 100% of the PV weight is at t = 7, whatever the yield.', 'Un unico flusso all’anno 7 significa che il 100% del peso è a t = 7, qualunque sia il rendimento.')
      },
      {
        id: 'cm-dur-q5',
        kind: 'mcq',
        topic: 'duration',
        difficulty: 2,
        objective: t('Rank bonds by interest rate sensitivity.', 'Ordinare i bond per sensibilità ai tassi.'),
        prompt: t('Which bond has the highest modified duration?', 'Quale bond ha la duration modificata più alta?'),
        choices: [
          t('5-year, 6% coupon', '5 anni, cedola 6%'),
          t('10-year, 6% coupon', '10 anni, cedola 6%'),
          t('10-year, 2% coupon', '10 anni, cedola 2%'),
          t('2-year, 2% coupon', '2 anni, cedola 2%')
        ],
        correct: 2,
        explanation: t(
          'Duration rises with maturity and falls with coupon. The 10-year 2% bond has the longest maturity and the lowest coupon, so more of its value sits in the distant principal payment.',
          'La duration cresce con la scadenza e diminuisce con la cedola. Il bond a 10 anni al 2% ha la scadenza più lunga e la cedola più bassa, quindi una quota maggiore del suo valore è nel rimborso lontano del capitale.'
        )
      }
    ],
    flashcards: [
      { id: 'fc-cm-dur-1', topic: 'duration', front: t('Modified duration formula?', 'Formula della duration modificata?'), back: t('Macaulay duration / (1 + y/m).', 'Duration di Macaulay / (1 + y/m).') },
      { id: 'fc-cm-dur-2', topic: 'convexity', front: t('Price change with duration and convexity?', 'Variazione di prezzo con duration e convessità?'), back: t('ΔP/P ≈ −D_mod × Δy + ½ × C × Δy².', 'ΔP/P ≈ −D_mod × Δy + ½ × C × Δy².') },
      { id: 'fc-cm-dur-3', topic: 'duration', front: t('Duration of a zero-coupon bond?', 'Duration di uno zero coupon?'), back: t('Equal to its maturity (Macaulay).', 'Pari alla scadenza (Macaulay).') },
      { id: 'fc-cm-dur-4', topic: 'duration', front: t('What is DV01?', 'Cos’è il DV01?'), back: t('Price change for a 1bp yield move ≈ D_mod × Price × 0.0001.', 'Variazione di prezzo per 1bp di rendimento ≈ D_mod × Prezzo × 0,0001.') },
      { id: 'fc-cm-dur-5', topic: 'convexity', front: t('Why is positive convexity valuable?', 'Perché la convessità positiva ha valore?'), back: t('Prices gain more when yields fall than they lose when yields rise by the same amount.', 'I prezzi guadagnano di più quando i rendimenti scendono di quanto perdano quando salgono dello stesso importo.') }
    ]
  },

  /* ============================ CM3 — cm-ratings-covenants ============================ */
  {
    id: 'cm-ratings-covenants',
    academyId: 'capital-markets',
    moduleId: 'CM3',
    mode: 'deep',
    minutes: 12,
    difficulty: 2,
    reviewed: '2026-10',
    objective: t(
      'Explain how credit ratings are assigned and used, compute the credit metrics behind them, and describe the main bond and loan covenants.',
      'Spiegare come si assegnano e si usano i rating, calcolare le metriche di credito sottostanti e descrivere i principali covenant di bond e prestiti.'
    ),
    screens: [
      {
        type: 'intuition',
        title: t('A grade for the ability to repay', 'Un voto sulla capacità di rimborso'),
        body: t(
          'A **credit rating** is an agency’s opinion on the likelihood that an issuer pays its debt on time and in full. It condenses business risk and financial risk into one letter grade that investors, regulators and index providers use.\n\n**Covenants** are the contractual promises that protect lenders after they have lent: they limit what the borrower can do with the business and its cash.',
          "Un **rating** è l’opinione di un’agenzia sulla probabilità che un emittente ripaghi il debito puntualmente e per intero. Sintetizza rischio di business e rischio finanziario in una lettera usata da investitori, regolatori e fornitori di indici.\n\nI **covenant** sono le promesse contrattuali che tutelano i finanziatori dopo l’erogazione: limitano ciò che il debitore può fare con l’azienda e la sua cassa."
        )
      },
      {
        type: 'technical',
        title: t('Rating scales and drivers', 'Scale di rating e fattori'),
        body: t(
          'S&P/Fitch: AAA, AA, A, BBB (IG) | BB, B, CCC, CC, C, D (sub-IG). Moody’s: Aaa, Aa, A, Baa | Ba, B, Caa, Ca, C. Notches: + / − (S&P/Fitch) and 1/2/3 (Moody’s).\n\n**Business risk**: industry, scale, market position, diversification, country.\n**Financial risk**: leverage (Debt/EBITDA), coverage (EBITDA/Interest), cash flow (FFO/Debt), financial policy.\n\n**Outlook** (positive/stable/negative) signals the likely direction over 6–24 months; a **watch/review** signals a possible change in the near term, often after an M&A announcement.',
          "S&P/Fitch: AAA, AA, A, BBB (IG) | BB, B, CCC, CC, C, D (sub-IG). Moody’s: Aaa, Aa, A, Baa | Ba, B, Caa, Ca, C. Gradini: + / − (S&P/Fitch) e 1/2/3 (Moody’s).\n\n**Rischio di business**: settore, dimensione, posizione competitiva, diversificazione, paese.\n**Rischio finanziario**: leva (Debito/EBITDA), copertura (EBITDA/Interessi), flussi di cassa (FFO/Debito), politica finanziaria.\n\nL’**outlook** (positivo/stabile/negativo) indica la direzione probabile in 6–24 mesi; un **watch/review** segnala un possibile cambiamento a breve, spesso dopo l’annuncio di un’operazione M&A."
        )
      },
      {
        type: 'technical',
        title: t('Main covenants', 'I principali covenant'),
        body: t(
          '**IG bonds** (light): negative pledge (no security granted to other lenders), change-of-control clause, pari passu, cross-default.\n\n**HY bonds** (incurrence-based):\n- Limitation on **indebtedness** (e.g. new debt only if fixed charge coverage ≥ 2.0x, plus permitted "baskets").\n- Limitation on **restricted payments** (dividends, buybacks, investments).\n- Limitations on **liens**, **asset sales**, affiliate transactions.\n- **Change of control** put, typically at 101%.\n\n**Bank loans**: maintenance **financial covenants** (e.g. net leverage ≤ 4.0x, interest cover ≥ 3.0x) tested quarterly, unless cov-lite.',
          "**Bond IG** (leggeri): negative pledge (nessuna garanzia concessa ad altri finanziatori), clausola di change of control, pari passu, cross-default.\n\n**Bond HY** (di incurrence):\n- Limitazione all’**indebitamento** (es. nuovo debito solo se fixed charge coverage ≥ 2,0x, più \"basket\" consentiti).\n- Limitazione ai **restricted payment** (dividendi, buyback, investimenti).\n- Limitazioni su **garanzie reali**, **cessioni di attivi**, operazioni con parti correlate.\n- Put per **cambio di controllo**, tipicamente al 101%.\n\n**Prestiti bancari**: **covenant finanziari** di maintenance (es. leva netta ≤ 4,0x, copertura interessi ≥ 3,0x) testati trimestralmente, salvo cov-lite."
        )
      },
      {
        type: 'formula',
        formulas: [
          { name: t('Net leverage', 'Leva netta'), expr: 'Net leverage = (Total debt − Cash) / EBITDA' },
          { name: t('Interest coverage', 'Copertura degli interessi'), expr: 'Interest coverage = EBITDA / Interest expense' },
          { name: t('Debt headroom under a leverage test', 'Margine di debito con un test di leva'), expr: 'Headroom = Max leverage × EBITDA − Current net debt' }
        ]
      },
      {
        type: 'example',
        title: t('Covenant check for Delta S.p.A.', 'Verifica dei covenant per Delta S.p.A.'),
        body: t(
          'Covenants: net leverage ≤ 4.0x and interest cover ≥ 3.0x. LTM EBITDA €120m, gross debt €450m, cash €50m, interest €30m.',
          'Covenant: leva netta ≤ 4,0x e copertura interessi ≥ 3,0x. EBITDA LTM €120m, debito lordo €450m, cassa €50m, interessi €30m.'
        ),
        table: {
          headers: [t('Metric', 'Metrica'), t('Actual', 'Effettivo'), t('Covenant', 'Covenant'), t('Headroom', 'Margine')],
          rows: [
            [t('Net leverage', 'Leva netta'), '3.33x', '≤ 4.0x', t('EBITDA can fall 17% (to €100m)', 'L’EBITDA può calare del 17% (a €100m)')],
            [t('Interest cover', 'Copertura interessi'), '4.0x', '≥ 3.0x', t('EBITDA can fall 25% (to €90m)', 'L’EBITDA può calare del 25% (a €90m)')],
            [t('Extra debt capacity', 'Capacità di debito aggiuntiva'), '€400m', '€480m', '€80m']
          ]
        }
      },
      {
        type: 'realworld',
        body: t(
          'Ratings shape deals: a BBB issuer planning a debt-funded acquisition will meet the agencies ("rating advisory", often run by the bank’s DCM team) to test whether the deal keeps it IG — and may fund part with equity or hybrids to protect the rating.\n\nIn LevFin, analysts compare covenant packages across deals and model headroom under downside cases; in restructuring, a covenant breach is often the trigger for negotiations with lenders.',
          "I rating condizionano le operazioni: un emittente BBB che pianifica un’acquisizione a debito incontra le agenzie (\"rating advisory\", spesso gestita dal team DCM della banca) per verificare se l’operazione lo mantiene IG — e può finanziarne una parte con equity o ibridi per proteggere il rating.\n\nIn LevFin gli analyst confrontano i pacchetti di covenant tra operazioni e modellano il margine negli scenari negativi; nel restructuring la violazione di un covenant è spesso il punto di partenza della negoziazione con i finanziatori."
        )
      },
      { type: 'exercise', questionId: 'cm-rc-q1' },
      { type: 'exercise', questionId: 'cm-rc-q2' },
      { type: 'exercise', questionId: 'cm-rc-q3' },
      { type: 'exercise', questionId: 'cm-rc-q4' },
      {
        type: 'interview',
        question: t('A BBB company wants to make a large acquisition. How would you think about its rating?', 'Una società BBB vuole fare una grande acquisizione. Come ragioneresti sul suo rating?'),
        answer: t(
          'I would model pro forma leverage and coverage against the agencies’ thresholds for its business risk profile. If leverage jumps, say from 2.5x to 4x, it risks falling to HY, which would raise funding costs and could trigger change-of-control or rating-linked clauses. Mitigants: funding part with equity or hybrids, committing to a deleveraging path (e.g. suspending buybacks, disposals) and presenting this to the agencies before announcement.',
          "Modellerei leva e copertura pro forma rispetto alle soglie delle agenzie per il suo profilo di rischio di business. Se la leva sale, ad esempio da 2,5x a 4x, rischia di scendere in HY, con costi di finanziamento più alti e possibili clausole di change of control o legate al rating. Mitiganti: finanziare una parte con equity o ibridi, impegnarsi in un percorso di deleveraging (es. sospensione dei buyback, dismissioni) e presentarlo alle agenzie prima dell’annuncio."
        )
      },
      {
        type: 'mistakes',
        items: [
          t('Treating an outlook change as a rating change: the rating itself is unchanged.', 'Confondere un cambio di outlook con un cambio di rating: il rating resta invariato.'),
          t('Measuring covenant leverage with an EBITDA definition different from the credit agreement (which often allows add-backs).', 'Misurare la leva di covenant con una definizione di EBITDA diversa da quella del contratto (che spesso ammette add-back).'),
          t('Assuming failing an incurrence test is a default: it only blocks the action.', 'Pensare che non superare un test di incurrence sia un default: blocca solo l’azione.')
        ]
      },
      {
        type: 'summary',
        items: [
          t('Ratings = business risk + financial risk; outlooks and watches signal direction.', 'Rating = rischio di business + rischio finanziario; outlook e watch segnalano la direzione.'),
          t('Key metrics: net leverage, interest coverage, FFO/debt.', 'Metriche chiave: leva netta, copertura interessi, FFO/debito.'),
          t('IG: negative pledge, CoC. HY: debt, restricted payments, liens, asset sales, CoC put at 101. Loans: maintenance tests.', 'IG: negative pledge, CoC. HY: debito, restricted payment, garanzie, cessioni, put CoC al 101. Prestiti: test di maintenance.')
        ]
      }
    ],
    questions: [
      {
        id: 'cm-rc-q1',
        kind: 'numeric',
        topic: 'credit-ratings',
        difficulty: 1,
        objective: t('Compute net leverage.', 'Calcolare la leva netta.'),
        prompt: t(
          'Gross debt €520m, cash €70m, EBITDA €100m. What is net leverage (x)?',
          'Debito lordo €520m, cassa €70m, EBITDA €100m. Qual è la leva netta (x)?'
        ),
        answer: 4.5,
        unit: 'x',
        verify: { fn: 'netLeverage', args: [520, 70, 100] },
        explanation: t('(520 − 70) / 100 = 4.5x — in the B/BB area for most industrial issuers.', '(520 − 70) / 100 = 4,5x — area B/BB per la maggior parte degli emittenti industriali.')
      },
      {
        id: 'cm-rc-q2',
        kind: 'numeric',
        topic: 'covenants',
        difficulty: 1,
        objective: t('Compute interest coverage.', 'Calcolare la copertura degli interessi.'),
        prompt: t('EBITDA €150m, interest expense €30m. What is interest coverage (x)?', 'EBITDA €150m, interessi passivi €30m. Qual è la copertura degli interessi (x)?'),
        answer: 5,
        unit: 'x',
        verify: { fn: 'interestCoverage', args: [150, 30] },
        explanation: t('150 / 30 = 5.0x. Higher is safer.', '150 / 30 = 5,0x. Più alto è, più è sicuro.')
      },
      {
        id: 'cm-rc-q3',
        kind: 'grid',
        topic: 'covenants',
        difficulty: 2,
        objective: t('Compute debt headroom under an incurrence test.', 'Calcolare il margine di debito con un test di incurrence.'),
        prompt: t(
          'A HY bond allows new debt only if pro forma net leverage ≤ 4.0x. EBITDA €120m, net debt €400m. Fill in the blanks (€m).',
          'Un bond HY consente nuovo debito solo se la leva netta pro forma ≤ 4,0x. EBITDA €120m, debito netto €400m. Completa le celle (€m).'
        ),
        columns: [t('Item', 'Voce'), t('€m', '€m')],
        rows: [
          { label: t('Maximum net debt (4.0x × EBITDA)', 'Debito netto massimo (4,0x × EBITDA)'), cells: [{ answer: 480, verify: { fn: 'product', args: [4, 120] } }] },
          { label: t('Headroom for new debt', 'Margine per nuovo debito'), cells: [{ answer: 80, verify: { fn: 'diff', args: [480, 400] } }] }
        ],
        explanation: t(
          'Max = 4.0 × 120 = €480m; headroom = 480 − 400 = €80m (before any permitted baskets, which allow extra debt regardless of the ratio).',
          'Massimo = 4,0 × 120 = €480m; margine = 480 − 400 = €80m (prima dei basket consentiti, che permettono debito aggiuntivo a prescindere dal rapporto).'
        )
      },
      {
        id: 'cm-rc-q4',
        kind: 'order',
        topic: 'credit-ratings',
        difficulty: 1,
        objective: t('Order the S&P rating scale.', 'Ordinare la scala di rating S&P.'),
        prompt: t('Order these S&P ratings from strongest to weakest.', 'Ordina questi rating S&P dal più forte al più debole.'),
        items: [t('AA', 'AA'), t('A−', 'A−'), t('BBB', 'BBB'), t('BBB−', 'BBB−'), t('BB+', 'BB+'), t('B', 'B'), t('CCC', 'CCC')],
        explanation: t('Within a category, + is stronger than flat, which is stronger than −. BBB− is the last IG notch; BB+ the first HY notch.', 'All’interno di una categoria, + è più forte del grado pieno, che è più forte di −. BBB− è l’ultimo gradino IG; BB+ il primo HY.')
      },
      {
        id: 'cm-rc-q5',
        kind: 'multi',
        topic: 'covenants',
        difficulty: 2,
        objective: t('Recognise typical HY covenants.', 'Riconoscere i covenant HY tipici.'),
        prompt: t('Which are standard high yield bond covenants? Select all that apply.', 'Quali sono covenant standard dei bond high yield? Seleziona tutte le risposte corrette.'),
        choices: [
          t('Limitation on restricted payments', 'Limitazione ai restricted payment'),
          t('Quarterly minimum EBITDA test', 'Test trimestrale di EBITDA minimo'),
          t('Change of control put at 101%', 'Put per cambio di controllo al 101%'),
          t('Limitation on indebtedness', 'Limitazione all’indebitamento'),
          t('Mandatory equity cure every quarter', 'Equity cure obbligatoria ogni trimestre')
        ],
        correct: [0, 2, 3],
        explanation: t(
          'Restricted payments, indebtedness and the CoC put at 101 are classic HY protections. Quarterly financial tests are loan-style maintenance covenants; an equity cure is a right (not an obligation) to fix a loan covenant breach with new equity.',
          'Restricted payment, indebitamento e put CoC al 101 sono tutele HY classiche. I test finanziari trimestrali sono covenant di maintenance dei prestiti; l’equity cure è un diritto (non un obbligo) di sanare con nuovo equity la violazione di un covenant di un prestito.'
        )
      }
    ],
    flashcards: [
      { id: 'fc-cm-rc-1', topic: 'credit-ratings', front: t('Outlook vs watch?', 'Outlook vs watch?'), back: t('Outlook: likely direction over 6–24 months. Watch/review: possible near-term change after an event.', 'Outlook: direzione probabile in 6–24 mesi. Watch/review: possibile cambiamento a breve dopo un evento.') },
      { id: 'fc-cm-rc-2', topic: 'covenants', front: t('What is a negative pledge?', "Che cos'è un negative pledge?"), back: t('A promise not to grant security to other creditors (without equally securing these holders).', 'L’impegno a non concedere garanzie ad altri creditori (senza garantire allo stesso modo questi portatori).') },
      { id: 'fc-cm-rc-3', topic: 'covenants', front: t('Typical HY change of control put price?', 'Prezzo tipico della put HY per cambio di controllo?'), back: t('101% of par plus accrued interest.', '101% della pari più rateo.') },
      { id: 'fc-cm-rc-4', topic: 'credit-ratings', front: t('Two pillars of a rating assessment?', 'I due pilastri della valutazione di rating?'), back: t('Business risk and financial risk.', 'Rischio di business e rischio finanziario.') }
    ]
  },

  /* ============================ CM3 — cm-refinancing ============================ */
  {
    id: 'cm-refinancing',
    academyId: 'capital-markets',
    moduleId: 'CM3',
    mode: 'deep',
    minutes: 12,
    difficulty: 3,
    reviewed: '2026-10',
    objective: t(
      'Explain the main liability management tools — calls, make-wholes, tender offers, exchange offers, amend & extend — and compute a make-whole redemption price.',
      'Spiegare i principali strumenti di liability management — call, make-whole, offerte di riacquisto, offerte di scambio, amend & extend — e calcolare un prezzo di rimborso make-whole.'
    ),
    screens: [
      {
        type: 'intuition',
        title: t('Managing the debt you already have', 'Gestire il debito che hai già'),
        body: t(
          'Companies do not just issue debt and wait for maturity. They reshape it: to **push out maturities** before a wall of debt comes due, to **cut interest cost** when rates or spreads fall, to remove restrictive covenants, or — in distress — to **reduce debt**.\n\nThis is **liability management**, a big source of work for DCM, LevFin and restructuring teams.',
          "Le società non emettono debito per poi attendere la scadenza. Lo rimodellano: per **allungare le scadenze** prima di un muro di rimborsi, per **ridurre il costo** quando tassi o spread calano, per eliminare covenant restrittivi o — in crisi — per **ridurre il debito**.\n\nÈ il **liability management**, fonte importante di lavoro per i team DCM, LevFin e restructuring."
        )
      },
      {
        type: 'technical',
        title: t('The toolkit', 'Gli strumenti'),
        body: t(
          '- **Call option**: redeem bonds at pre-set call prices (HY: after the non-call period, e.g. at 100 + ½ coupon, stepping down to par).\n- **Make-whole call**: redeem at any time at the higher of par and the PV of remaining cash flows discounted at **benchmark + a small spread** (e.g. Bund + 50bp). Standard in IG; expensive by design.\n- **Tender offer**: offer to buy bonds back from holders for cash, at a fixed price or via auction; often funded with a new issue.\n- **Exchange offer**: swap old bonds for new ones (longer maturity, different terms). In distress, if holders receive less than promised, agencies treat it as a **distressed exchange** — a selective default.\n- **Amend & extend (A&E)**: lenders agree to extend loan maturities, usually for a higher margin and fee.\n- **Consent solicitation**: pay holders a fee to amend covenants.',
          "- **Opzione call**: rimborso ai prezzi di call prefissati (HY: dopo il periodo non-call, es. 100 + ½ cedola, poi a scendere fino alla pari).\n- **Make-whole call**: rimborso in qualsiasi momento al maggiore tra la pari e il VA dei flussi residui scontati a **benchmark + un piccolo spread** (es. Bund + 50bp). Standard nell’IG; costoso per costruzione.\n- **Offerta di riacquisto (tender offer)**: proposta di riacquisto in contanti dei bond, a prezzo fisso o con asta; spesso finanziata con una nuova emissione.\n- **Offerta di scambio**: sostituzione dei vecchi bond con nuovi (scadenza più lunga, termini diversi). In crisi, se i portatori ricevono meno di quanto promesso, le agenzie la trattano come **distressed exchange** — un default selettivo.\n- **Amend & extend (A&E)**: i finanziatori accettano di allungare la scadenza dei prestiti, di solito in cambio di margine e commissione più alti.\n- **Consent solicitation**: si paga una commissione ai portatori per modificare i covenant."
        )
      },
      {
        type: 'formula',
        formulas: [
          {
            name: t('Make-whole redemption price', 'Prezzo di rimborso make-whole'),
            expr: 'MW price = max(100, Σ CF_t / (1 + Benchmark + MW spread)^t)',
            vars: [{ sym: 'MW spread', desc: t('Small fixed spread in the documentation, e.g. +50bp', 'Piccolo spread fisso previsto dalla documentazione, es. +50bp') }]
          },
          { name: t('Typical first HY call price', 'Primo prezzo di call HY tipico'), expr: 'Call price = 100 + ½ × Coupon' },
          { name: t('Refinancing test (simplified)', 'Test di convenienza (semplificato)'), expr: 'Refinance if PV(interest savings) > Call premium + Transaction costs' }
        ]
      },
      {
        type: 'example',
        title: t('Calling Epsilon S.p.A.’s bond with a make-whole', 'Rimborsare il bond di Epsilon S.p.A. con la make-whole'),
        body: t(
          '€500m bond, 6% annual coupon, 4 years remaining. The make-whole rate is the 4-year Bund (2.50%) + 50bp = **3.00%**. Epsilon’s own market yield is 4.25%.',
          'Bond €500m, cedola annua 6%, 4 anni residui. Il tasso make-whole è Bund a 4 anni (2,50%) + 50bp = **3,00%**. Il rendimento di mercato di Epsilon è il 4,25%.'
        ),
        table: {
          headers: [t('Item', 'Voce'), t('Value', 'Valore')],
          rows: [
            [t('PV of 6, 6, 6, 106 at 3.00%', 'VA di 6, 6, 6, 106 al 3,00%'), '111.15'],
            [t('Make-whole price = max(100, 111.15)', 'Prezzo make-whole = max(100; 111,15)'), '111.15'],
            [t('Cost to redeem €500m', 'Costo per rimborsare €500m'), '€555.8m'],
            [t('Bond market price at 4.25% (approx.)', 'Prezzo di mercato al 4,25% (circa)'), '106.3']
          ]
        }
      },
      {
        type: 'technical',
        title: t('Why the make-whole is rarely used to save money', 'Perché la make-whole raramente fa risparmiare'),
        body: t(
          'Because the MW rate (Bund + 50bp) is below the issuer’s market yield, the MW price (111.15) is **above** where the bond trades (≈106). Calling it to refinance at today’s rates usually destroys value.\n\nIssuers use make-wholes when they must remove the bonds — e.g. in an M&A deal where the buyer needs to clean up the target’s debt, or to release covenants — and otherwise prefer a **tender offer** at a small premium to market (say 107–108), which holders can accept or refuse.',
          "Poiché il tasso MW (Bund + 50bp) è inferiore al rendimento di mercato dell’emittente, il prezzo MW (111,15) è **superiore** a quello di mercato del bond (≈106). Rimborsarlo per rifinanziarsi ai tassi di oggi di solito distrugge valore.\n\nGli emittenti usano la make-whole quando devono eliminare i bond — ad esempio in un’operazione M&A in cui l’acquirente deve ripulire il debito del target, o per liberarsi di covenant — e altrimenti preferiscono una **tender offer** con un piccolo premio sul mercato (es. 107–108), che i portatori possono accettare o rifiutare."
        )
      },
      {
        type: 'realworld',
        body: t(
          'LBO-backed companies regularly run A&E transactions and refinancings to manage maturity walls, especially after rate rises. In a takeover, the target’s bonds with change-of-control puts or restrictive covenants may need to be tendered or refinanced at closing — M&A and DCM/LevFin teams coordinate on this in the financing plan.\n\nAnalysts build the maturity profile, model the costs of each option (MW vs tender vs call) and track holder participation.',
          "Le società in portafoglio a fondi di PE effettuano regolarmente A&E e rifinanziamenti per gestire i muri di scadenze, soprattutto dopo i rialzi dei tassi. In un’acquisizione, i bond del target con put per cambio di controllo o covenant restrittivi possono dover essere riacquistati o rifinanziati al closing — i team M&A e DCM/LevFin si coordinano su questo nel piano di finanziamento.\n\nGli analyst costruiscono il profilo delle scadenze, modellano i costi di ciascuna opzione (MW vs tender vs call) e monitorano l’adesione dei portatori."
        )
      },
      { type: 'exercise', questionId: 'cm-ref-q1' },
      { type: 'exercise', questionId: 'cm-ref-q2' },
      { type: 'exercise', questionId: 'cm-ref-q3' },
      {
        type: 'interview',
        question: t('A company has a bond maturing in 18 months and a tough market. What can it do?', 'Una società ha un bond in scadenza tra 18 mesi e il mercato è difficile. Cosa può fare?'),
        answer: t(
          'First, refinance early when a window opens — a new bond plus a tender offer for the old one, taking out maturity risk. If markets are shut, it can use bank facilities, an exchange offer into a longer bond with a sweetener, or for loans an amend & extend. Asset sales or equity can reduce the need. If the company is stressed, a discounted exchange may be needed — but agencies would treat it as a distressed exchange, i.e. a selective default.',
          "Innanzitutto rifinanziarsi in anticipo quando si apre una finestra — un nuovo bond più una tender offer sul vecchio, eliminando il rischio di scadenza. Se i mercati sono chiusi, può usare linee bancarie, un’offerta di scambio in un bond più lungo con un incentivo, o per i prestiti un amend & extend. Dismissioni o equity possono ridurre il fabbisogno. Se la società è in tensione, può servire uno scambio a sconto — ma le agenzie lo tratterebbero come distressed exchange, cioè un default selettivo."
        )
      },
      {
        type: 'mistakes',
        items: [
          t('Discounting make-whole cash flows at the issuer’s own yield instead of benchmark + MW spread.', 'Scontare i flussi make-whole al rendimento dell’emittente invece che a benchmark + spread MW.'),
          t('Assuming holders must accept a tender offer: participation is voluntary.', 'Pensare che i portatori debbano accettare una tender offer: l’adesione è volontaria.'),
          t('Ignoring that a distressed exchange can count as a default for rating purposes.', 'Ignorare che un distressed exchange può valere come default ai fini del rating.')
        ]
      },
      {
        type: 'summary',
        items: [
          t('Tools: calls, make-whole, tender, exchange, A&E, consent solicitation.', 'Strumenti: call, make-whole, tender, scambio, A&E, consent solicitation.'),
          t('MW price = max(par, PV at benchmark + small spread) — usually above market.', 'Prezzo MW = max(pari, VA a benchmark + piccolo spread) — di solito sopra il mercato.'),
          t('HY first call ≈ 100 + ½ coupon after the non-call period.', 'Prima call HY ≈ 100 + ½ cedola dopo il periodo non-call.')
        ]
      }
    ],
    questions: [
      {
        id: 'cm-ref-q1',
        kind: 'numeric',
        topic: 'liability-management',
        difficulty: 3,
        objective: t('Compute a make-whole redemption price.', 'Calcolare un prezzo di rimborso make-whole.'),
        prompt: t(
          'A bond pays a 6% annual coupon with exactly 4 years left. Make-whole rate: Bund (2.50%) + 50bp. What is the make-whole price (per 100)?',
          'Un bond paga una cedola annua del 6% con esattamente 4 anni residui. Tasso make-whole: Bund (2,50%) + 50bp. Qual è il prezzo make-whole (per 100)?'
        ),
        answer: 111.15,
        tolerance: { abs: 0.02 },
        verify: { fn: 'bondPrice', args: [100, 0.06, 0.03, 4] },
        explanation: t(
          'Discount 6, 6, 6, 106 at 3.00% → 111.15 > 100, so the MW price is 111.15. Using the Bund alone (2.50%) or the issuer’s yield would give the wrong price.',
          'Si scontano 6, 6, 6, 106 al 3,00% → 111,15 > 100, quindi il prezzo MW è 111,15. Usare solo il Bund (2,50%) o il rendimento dell’emittente darebbe un prezzo errato.'
        )
      },
      {
        id: 'cm-ref-q2',
        kind: 'numeric',
        topic: 'liability-management',
        difficulty: 1,
        objective: t('Compute a HY first call price.', 'Calcolare il primo prezzo di call di un bond HY.'),
        prompt: t(
          'A 7-year, 6.5% HY bond is non-call 3. Using the usual convention (par + half the coupon), what is the first call price?',
          'Un bond HY a 7 anni al 6,5% è non-call 3. Con la convenzione usuale (pari + metà cedola), qual è il primo prezzo di call?'
        ),
        answer: 103.25,
        verify: { fn: 'sum', args: [100, 3.25] },
        explanation: t('100 + 6.5 / 2 = 103.25, typically stepping down to 101.625 and then par in later years.', '100 + 6,5 / 2 = 103,25, che tipicamente scende a 101,625 e poi alla pari negli anni successivi.')
      },
      {
        id: 'cm-ref-q3',
        kind: 'numeric',
        topic: 'liability-management',
        difficulty: 2,
        objective: t('Compute the cash cost of a tender offer.', 'Calcolare l’esborso di una tender offer.'),
        prompt: t(
          'An issuer tenders for €300m of bonds at 101 (per 100 of face). If all holders accept, what is the cash cost excluding accrued interest (€m)?',
          'Un emittente lancia una tender offer su €300m di bond a 101 (per 100 di nominale). Se tutti aderiscono, qual è l’esborso escluso il rateo (€m)?'
        ),
        answer: 303,
        unit: '€m',
        verify: { fn: 'product', args: [300, 1.01] },
        explanation: t('€300m × 1.01 = €303m. Accrued interest is paid on top at settlement.', '€300m × 1,01 = €303m. Il rateo si paga in aggiunta al regolamento.')
      },
      {
        id: 'cm-ref-q4',
        kind: 'mcq',
        topic: 'liability-management',
        difficulty: 2,
        objective: t('Choose the right liability management tool.', 'Scegliere lo strumento di liability management corretto.'),
        prompt: t(
          'An LBO-backed company has a Term Loan B maturing in 2 years and wants more time without going to the bond market. Which tool fits best?',
          'Una società in portafoglio a un fondo ha un Term Loan B in scadenza tra 2 anni e vuole più tempo senza andare sul mercato obbligazionario. Quale strumento è più adatto?'
        ),
        choices: [
          t('Make-whole call', 'Make-whole call'),
          t('Amend & extend', 'Amend & extend'),
          t('Consent solicitation on its bonds', 'Consent solicitation sui bond'),
          t('Accelerated bookbuild', 'Accelerated bookbuilding')
        ],
        correct: 1,
        explanation: t(
          'An A&E asks existing lenders to extend the loan maturity, usually for a higher margin and fee. A make-whole is a bond feature; a consent solicitation changes bond terms; an ABB raises equity.',
          'Con l’A&E si chiede ai finanziatori esistenti di allungare la scadenza del prestito, di solito per un margine e una commissione più alti. La make-whole è una clausola dei bond; la consent solicitation modifica i termini dei bond; l’ABB raccoglie equity.'
        )
      }
    ],
    flashcards: [
      { id: 'fc-cm-ref-1', topic: 'liability-management', front: t('Make-whole price?', 'Prezzo make-whole?'), back: t('max(100, PV of remaining cash flows at benchmark + MW spread).', 'max(100, VA dei flussi residui a benchmark + spread MW).') },
      { id: 'fc-cm-ref-2', topic: 'liability-management', front: t('What is an amend & extend?', "Che cos'è un amend & extend?"), back: t('Lenders agree to extend loan maturities, typically for a higher margin and a fee.', 'I finanziatori accettano di allungare la scadenza del prestito, tipicamente per un margine più alto e una commissione.') },
      { id: 'fc-cm-ref-3', topic: 'liability-management', front: t('Distressed exchange?', 'Distressed exchange?'), back: t('An exchange where holders get less than originally promised to avoid default; rating agencies treat it as a (selective) default.', 'Uno scambio in cui i portatori ricevono meno di quanto promesso per evitare il default; le agenzie lo trattano come default (selettivo).') },
      { id: 'fc-cm-ref-4', topic: 'liability-management', front: t('Tender offer vs call?', 'Tender offer vs call?'), back: t('Tender: voluntary buy-back offer to holders. Call: issuer’s contractual right to redeem at a set price.', 'Tender: offerta volontaria di riacquisto ai portatori. Call: diritto contrattuale dell’emittente di rimborsare a un prezzo fissato.') }
    ]
  }
];
