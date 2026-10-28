import type { L, Lesson } from '../types';

/**
 * Academy 5 — Private Equity (modules P1–P4).
 * All companies and funds in numerical examples are hypothetical.
 */

const t = (en: string, it: string): L => ({ en, it });
const R = '2026-10';

/* ============================ P1 — THE PE INDUSTRY ============================ */

const peIndustry: Lesson = {
  id: 'pe-industry',
  academyId: 'private-equity',
  moduleId: 'P1',
  mode: 'quick',
  minutes: 8,
  difficulty: 1,
  reviewed: R,
  objective: t(
    'Explain how a private equity fund is structured: who the GP and LPs are, what the LPA governs and how a fund is raised.',
    'Spiegare come è strutturato un fondo di private equity: chi sono GP e LP, cosa disciplina l’LPA e come si raccoglie un fondo.'
  ),
  screens: [
    {
      type: 'intuition',
      title: t('Other people’s money, locked up for a decade', 'Soldi di altri, vincolati per un decennio'),
      body: t(
        'A private equity firm is a professional buyer of companies. It rarely uses its own balance sheet: it raises a **fund** from large investors, buys companies with that money (plus debt), improves them and sells them, typically within 3–7 years.\n\nThe investors accept that their money is **illiquid for around ten years**. In exchange they expect returns above what listed equities would give them.',
        'Una società di private equity è un acquirente professionale di aziende. Raramente usa il proprio bilancio: raccoglie un **fondo** da grandi investitori, compra aziende con quei capitali (più debito), le migliora e le rivende, di norma entro 3–7 anni.\n\nGli investitori accettano che il loro capitale resti **illiquido per circa dieci anni**. In cambio si aspettano rendimenti superiori a quelli dell’azionario quotato.'
      )
    },
    {
      type: 'technical',
      title: t('GP and LPs', 'GP e LP'),
      body: t(
        '- **General Partner (GP)**: the PE firm (via a GP entity) that manages the fund, makes investment decisions and has unlimited responsibility for the fund’s management. It also commits its own capital — the **GP commitment**, often around 1–3% of the fund — to align interests.\n- **Limited Partners (LPs)**: the investors. Pension funds, sovereign wealth funds, insurers, endowments and foundations, funds of funds, family offices and wealthy individuals. Their liability is limited to the capital they commit and they do not take part in day-to-day management.\n- **Management company**: the adviser entity that employs the deal team and receives the management fee.',
        '- **General Partner (GP)**: la società di PE (tramite un veicolo GP) che gestisce il fondo, prende le decisioni d’investimento ed è responsabile della gestione. Investe anche capitale proprio — il **GP commitment**, spesso intorno all’1–3% del fondo — per allineare gli interessi.\n- **Limited Partner (LP)**: gli investitori. Fondi pensione, fondi sovrani, assicurazioni, endowment e fondazioni, fondi di fondi, family office e privati facoltosi. Rispondono nei limiti del capitale sottoscritto e non partecipano alla gestione corrente.\n- **Management company**: la società di gestione/advisory che impiega il deal team e incassa la commissione di gestione.'
      )
    },
    {
      type: 'technical',
      title: t('The legal wrapper and the LPA', 'Il veicolo giuridico e l’LPA'),
      body: t(
        'Most funds are **limited partnerships** (e.g. Delaware, Cayman, English/Scottish or Luxembourg SCSp structures). In Italy the typical vehicle is a reserved closed-end AIF (**FIA riservato**) managed by an **SGR**; in the EU, managers are regulated under the AIFM Directive (2011/61/EU).\n\nThe **Limited Partnership Agreement (LPA)** is the fund’s constitution. It sets:\n- fund size, term (often 10 years + extensions) and investment period\n- investment strategy and restrictions (sector, geography, max % in one deal)\n- management fee, carried interest, hurdle and waterfall\n- key-person clauses, GP removal, LP Advisory Committee (LPAC) and conflicts rules',
        'La maggior parte dei fondi sono **limited partnership** (ad es. strutture Delaware, Cayman, inglesi/scozzesi o SCSp lussemburghesi). In Italia il veicolo tipico è un **FIA riservato** di tipo chiuso gestito da una **SGR**; nell’UE i gestori sono regolati dalla Direttiva AIFM (2011/61/UE).\n\nIl **Limited Partnership Agreement (LPA)** è la “costituzione” del fondo. Stabilisce:\n- dimensione, durata (spesso 10 anni + proroghe) e periodo di investimento\n- strategia e limiti d’investimento (settore, area geografica, % massima per singolo deal)\n- commissione di gestione, carried interest, hurdle e waterfall\n- clausole key-person, revoca del GP, LP Advisory Committee (LPAC) e regole sui conflitti di interesse'
      )
    },
    {
      type: 'formula',
      formulas: [
        {
          name: t('Commitments vs drawn capital', 'Impegni vs capitale richiamato'),
          expr: 'Unfunded commitment = Committed capital − Capital called to date',
          vars: [
            { sym: 'Committed capital', desc: t('What LPs promised to invest over the fund’s life', 'Quanto gli LP si sono impegnati a investire nella vita del fondo') },
            { sym: 'Capital called', desc: t('Cash actually drawn down via capital calls', 'Cassa effettivamente richiamata con le capital call') }
          ]
        },
        {
          name: t('GP commitment', 'GP commitment'),
          expr: 'GP commitment = Fund size × GP commitment %'
        }
      ],
      note: t(
        'LPs do not wire their whole commitment on day one: the GP calls capital deal by deal, so the unfunded part is often called “dry powder”.',
        'Gli LP non versano tutto l’impegno il primo giorno: il GP richiama il capitale deal per deal, e la parte non ancora richiamata è il cosiddetto “dry powder”.'
      )
    },
    {
      type: 'example',
      title: t('Fund III of a hypothetical sponsor', 'Il Fondo III di uno sponsor ipotetico'),
      body: t(
        'Alpine Capital raises Fund III with €1,000m of commitments. The GP commits 2%. After two years it has called capital for four deals.',
        'Alpine Capital raccoglie il Fondo III con €1.000m di impegni. Il GP sottoscrive il 2%. Dopo due anni ha richiamato capitale per quattro deal.'
      ),
      table: {
        headers: [t('Item', 'Voce'), t('€m', '€m')],
        rows: [
          [t('Total commitments', 'Impegni totali'), '1,000'],
          [t('of which GP commitment (2%)', 'di cui GP commitment (2%)'), '20'],
          [t('of which LP commitments', 'di cui impegni degli LP'), '980'],
          [t('Capital called for 4 deals + fees', 'Capitale richiamato per 4 deal + commissioni'), '420'],
          [t('Unfunded commitment (dry powder)', 'Impegni residui (dry powder)'), '580']
        ],
        totalRows: [4]
      }
    },
    {
      type: 'technical',
      title: t('How a fund is raised', 'Come si raccoglie un fondo'),
      body: t(
        '- The GP prepares a **Private Placement Memorandum (PPM)** and track record, often with a **placement agent**.\n- LPs run operational and investment due diligence and negotiate **side letters** (reporting, fee discounts, co-investment rights, MFN clauses).\n- **First close**: the fund can start investing. Further closings follow until the **final close**, usually within 12–18 months.\n- A GP typically returns to market for the next fund once most of the current fund is invested — so track record (DPI, net IRR) is everything.',
        '- Il GP prepara un **Private Placement Memorandum (PPM)** e il track record, spesso con un **placement agent**.\n- Gli LP svolgono due diligence operativa e d’investimento e negoziano **side letter** (reportistica, sconti sulle commissioni, diritti di co-investimento, clausole MFN).\n- **First close**: il fondo può iniziare a investire. Seguono altri closing fino al **final close**, di solito entro 12–18 mesi.\n- Il GP torna sul mercato per il fondo successivo quando l’attuale è in gran parte investito — per questo il track record (DPI, IRR netto) è decisivo.'
      )
    },
    {
      type: 'realworld',
      body: t(
        'Banks see this structure every day. When a sponsor buys a company, the **acquisition vehicle (BidCo)** is owned by the fund; the bank’s LevFin team lends to BidCo and the M&A team advises on the deal. Large LPs increasingly ask for **co-investment** alongside the fund, which lets a sponsor write a bigger equity cheque than the fund’s concentration limit allows.',
        'Le banche vedono questa struttura ogni giorno. Quando uno sponsor compra un’azienda, il **veicolo d’acquisizione (BidCo)** è detenuto dal fondo; il team LevFin della banca finanzia la BidCo e il team M&A assiste nell’operazione. I grandi LP chiedono sempre più spesso **co-investimenti** accanto al fondo, che permettono allo sponsor di investire un ticket di equity superiore al limite di concentrazione del fondo.'
      )
    },
    { type: 'exercise', questionId: 'pe-ind-q1' },
    { type: 'exercise', questionId: 'pe-ind-q2' },
    {
      type: 'interview',
      question: t('Walk me through how a private equity fund is structured.', 'Mi descriva come è strutturato un fondo di private equity.'),
      answer: t(
        'A PE fund is usually a limited partnership with a ~10-year life. The GP — the PE firm — manages it, makes the investment decisions and commits some of its own capital. The LPs — pensions, sovereigns, insurers, endowments, family offices — commit capital that the GP draws down as it finds deals. The LPA sets the terms: strategy, investment period, management fee (typically on committed capital during the investment period) and carried interest, usually 20% of profits above an 8% hurdle. The GP earns the fee to run the firm and the carry as its upside.',
        'Un fondo di PE è di solito una limited partnership con una vita di circa 10 anni. Il GP — la società di PE — lo gestisce, prende le decisioni d’investimento e investe una parte di capitale proprio. Gli LP — fondi pensione, fondi sovrani, assicurazioni, endowment, family office — sottoscrivono impegni che il GP richiama man mano che trova deal. L’LPA ne fissa i termini: strategia, periodo d’investimento, commissione di gestione (in genere sul capitale impegnato durante il periodo d’investimento) e carried interest, di solito il 20% dei profitti oltre un hurdle dell’8%. Il GP usa la commissione per far funzionare la struttura e il carry è il suo upside.'
      )
    },
    {
      type: 'mistakes',
      items: [
        t('Saying LPs wire all their money at the start. They commit; the GP calls capital over time.', 'Dire che gli LP versano tutto all’inizio. Si impegnano; il GP richiama il capitale nel tempo.'),
        t('Confusing the GP (manager) with the fund itself or with the portfolio companies.', 'Confondere il GP (gestore) con il fondo stesso o con le società in portafoglio.'),
        t('Thinking LPs vote on individual deals. Investment decisions sit with the GP’s investment committee; the LPAC handles conflicts and specific consents.', 'Pensare che gli LP votino sui singoli deal. Le decisioni spettano al comitato investimenti del GP; l’LPAC si occupa di conflitti e consensi specifici.')
      ]
    },
    {
      type: 'summary',
      items: [
        t('GP manages and commits a small share; LPs provide most of the capital with limited liability.', 'Il GP gestisce e sottoscrive una piccola quota; gli LP forniscono la maggior parte del capitale con responsabilità limitata.'),
        t('The LPA governs term, strategy, fees, carry and governance.', 'L’LPA disciplina durata, strategia, commissioni, carry e governance.'),
        t('Capital is committed up front and called deal by deal; uncalled capital is dry powder.', 'Il capitale viene impegnato all’inizio e richiamato deal per deal; quello non richiamato è dry powder.')
      ]
    }
  ],
  questions: [
    {
      id: 'pe-ind-q1',
      kind: 'numeric',
      topic: 'pe-fund-structure',
      difficulty: 1,
      objective: t('Compute unfunded commitments.', 'Calcolare gli impegni residui.'),
      prompt: t(
        'A €750m fund has called €310m so far. How much unfunded commitment (dry powder, €m) remains?',
        'Un fondo da €750m ha richiamato finora €310m. Quanti impegni residui (dry powder, €m) restano?'
      ),
      answer: 440,
      unit: '€m',
      verify: { fn: 'diff', args: [750, 310] },
      explanation: t(
        'Unfunded = committed − called = 750 − 310 = 440. Capital that is called but already returned does not normally become uncalled again unless the LPA allows recycling.',
        'Impegni residui = impegnato − richiamato = 750 − 310 = 440. Il capitale richiamato e poi restituito di norma non torna “richiamabile”, salvo che l’LPA preveda il recycling.'
      )
    },
    {
      id: 'pe-ind-q2',
      kind: 'mcq',
      topic: 'pe-fund-structure',
      difficulty: 1,
      objective: t('Identify the role of the GP versus LPs.', 'Distinguere il ruolo del GP da quello degli LP.'),
      prompt: t('Which statement about LPs is correct?', 'Quale affermazione sugli LP è corretta?'),
      choices: [
        t('They choose which companies the fund buys', 'Scelgono quali aziende il fondo acquista'),
        t('Their liability is generally limited to the capital they committed', 'La loro responsabilità è in genere limitata al capitale sottoscritto'),
        t('They receive the management fee', 'Incassano la commissione di gestione'),
        t('They must fund their entire commitment at first close', 'Devono versare tutto l’impegno al first close')
      ],
      correct: 1,
      explanation: t(
        'LPs are passive investors with limited liability. The GP makes investment decisions and its management company receives the fee; commitments are drawn over time, not at first close.',
        'Gli LP sono investitori passivi a responsabilità limitata. Il GP prende le decisioni d’investimento e la sua management company incassa la commissione; gli impegni vengono richiamati nel tempo, non al first close.'
      )
    },
    {
      id: 'pe-ind-q3',
      kind: 'multi',
      topic: 'pe-fund-structure',
      difficulty: 2,
      objective: t('Recognise what the LPA governs.', 'Riconoscere cosa disciplina l’LPA.'),
      prompt: t('Which items are typically set in the LPA? Select all that apply.', 'Quali elementi sono tipicamente fissati nell’LPA? Seleziona tutte le risposte corrette.'),
      choices: [
        t('Investment period and fund term', 'Periodo d’investimento e durata del fondo'),
        t('Carried interest rate and hurdle', 'Percentuale di carried interest e hurdle'),
        t('The exit multiple of each future deal', 'Il multiplo di uscita di ogni futuro deal'),
        t('Key-person provisions', 'Clausole key-person'),
        t('Concentration limits per investment', 'Limiti di concentrazione per singolo investimento')
      ],
      correct: [0, 1, 3, 4],
      explanation: t(
        'The LPA sets the fund’s economic and governance terms. Deal-level outcomes such as exit multiples are not contractual — they depend on the market at exit.',
        'L’LPA fissa i termini economici e di governance del fondo. I risultati dei singoli deal, come i multipli d’uscita, non sono contrattuali: dipendono dal mercato al momento dell’exit.'
      )
    },
    {
      id: 'pe-ind-q4',
      kind: 'numeric',
      topic: 'pe-fund-structure',
      difficulty: 1,
      objective: t('Compute a GP commitment.', 'Calcolare il GP commitment.'),
      prompt: t('A €2,500m fund has a 1.5% GP commitment. How much does the GP commit (€m)?', 'Un fondo da €2.500m prevede un GP commitment dell’1,5%. Quanto sottoscrive il GP (€m)?'),
      answer: 37.5,
      unit: '€m',
      verify: { fn: 'product', args: [2500, 0.015] },
      explanation: t('2,500 × 1.5% = 37.5. LPs commit the remaining 2,462.5.', '2.500 × 1,5% = 37,5. Gli LP sottoscrivono i restanti 2.462,5.')
    }
  ],
  flashcards: [
    { id: 'fc-pe-ind-1', topic: 'pe-fund-structure', front: t('GP vs LP?', 'GP vs LP?'), back: t('GP = manager that makes decisions and commits a small share. LPs = passive investors with limited liability who provide most capital.', 'GP = gestore che decide e sottoscrive una piccola quota. LP = investitori passivi a responsabilità limitata che forniscono la maggior parte del capitale.') },
    { id: 'fc-pe-ind-2', topic: 'pe-fund-structure', front: t('What is the LPA?', 'Cos’è l’LPA?'), back: t('Limited Partnership Agreement: the fund’s governing contract — term, strategy, fees, carry, waterfall, governance.', 'Limited Partnership Agreement: il contratto che regola il fondo — durata, strategia, commissioni, carry, waterfall, governance.') },
    { id: 'fc-pe-ind-3', topic: 'pe-fund-structure', front: t('What is dry powder?', 'Cos’è il dry powder?'), back: t('Committed capital not yet called by the GP.', 'Capitale impegnato non ancora richiamato dal GP.') },
    { id: 'fc-pe-ind-4', topic: 'pe-fund-structure', front: t('Typical PE fund term?', 'Durata tipica di un fondo di PE?'), back: t('Around 10 years, usually with extension options; investment period of roughly the first 4–6 years.', 'Circa 10 anni, di solito con opzioni di proroga; periodo d’investimento indicativamente i primi 4–6 anni.') },
    { id: 'fc-pe-ind-5', topic: 'pe-fund-structure', front: t('Typical Italian PE fund vehicle?', 'Veicolo tipico di un fondo di PE italiano?'), back: t('A reserved closed-end AIF (FIA riservato) managed by an SGR.', 'Un FIA riservato di tipo chiuso gestito da una SGR.') }
  ],
  sources: [{ label: 'Directive 2011/61/EU on Alternative Investment Fund Managers (AIFMD)', url: 'https://eur-lex.europa.eu/eli/dir/2011/61/oj' }]
};

const peFeesCarry: Lesson = {
  id: 'pe-fees-carry',
  academyId: 'private-equity',
  moduleId: 'P1',
  mode: 'deep',
  minutes: 14,
  difficulty: 2,
  reviewed: R,
  objective: t(
    'Calculate management fees and carried interest, and run a distribution waterfall with hurdle and catch-up under European and American structures.',
    'Calcolare commissioni di gestione e carried interest e costruire una waterfall distributiva con hurdle e catch-up nelle strutture europea e americana.'
  ),
  screens: [
    {
      type: 'intuition',
      title: t('A salary and a bonus', 'Uno stipendio e un bonus'),
      body: t(
        'A GP is paid in two ways:\n\n- a **management fee** — a steady “salary” that pays for the team, offices and deal costs, whatever the performance;\n- **carried interest (carry)** — a share of the profits, paid only if LPs first get their money back plus a minimum return.\n\nThe classic model is “**2 and 20**”: 2% fee, 20% carry over an 8% hurdle. The fee keeps the lights on; the carry is where partners get rich — and only if LPs did well.',
        'Un GP è remunerato in due modi:\n\n- una **commissione di gestione** — uno “stipendio” stabile che paga team, uffici e costi dei deal, indipendentemente dai risultati;\n- il **carried interest (carry)** — una quota dei profitti, pagata solo se gli LP hanno prima recuperato il capitale più un rendimento minimo.\n\nIl modello classico è “**2 e 20**”: 2% di commissione, 20% di carry oltre un hurdle dell’8%. La commissione tiene in piedi la struttura; il carry è dove i partner guadagnano davvero — e solo se gli LP hanno guadagnato.'
      )
    },
    {
      type: 'technical',
      title: t('Management fee mechanics', 'Come funziona la commissione di gestione'),
      body: t(
        '- During the **investment period**, the fee is normally charged on **committed capital** — even capital not yet called.\n- After the investment period it usually steps down, often to a fee on **net invested capital** (cost of investments not yet realised) and/or a lower rate.\n- Large funds frequently charge below 2% (e.g. 1.5%).\n- **Transaction and monitoring fees** charged to portfolio companies are now typically offset (often 100%) against the management fee.\n\nFees reduce the capital that actually works for LPs — one reason **net IRR** is below gross IRR.',
        '- Durante il **periodo d’investimento** la commissione si calcola di norma sul **capitale impegnato** — anche quello non ancora richiamato.\n- Dopo il periodo d’investimento di solito si riduce, spesso passando al **capitale netto investito** (costo degli investimenti non ancora realizzati) e/o a un’aliquota inferiore.\n- I fondi grandi applicano spesso meno del 2% (ad es. 1,5%).\n- Le **transaction e monitoring fee** addebitate alle partecipate oggi sono in genere compensate (spesso al 100%) con la commissione di gestione.\n\nLe commissioni riducono il capitale che lavora davvero per gli LP — uno dei motivi per cui l’**IRR netto** è inferiore a quello lordo.'
      )
    },
    {
      type: 'technical',
      title: t('Hurdle, catch-up, carry', 'Hurdle, catch-up, carry'),
      body: t(
        'A typical **distribution waterfall** pays in tiers:\n\n1. **Return of capital** — 100% to LPs until they recover contributed capital (including fees).\n2. **Preferred return (hurdle)** — 100% to LPs until they earn e.g. 8% p.a. compounded.\n3. **GP catch-up** — a high share (often 100%, sometimes 80%) to the GP until it has received 20% of all profits distributed so far.\n4. **Carried interest split** — remaining profits 80% LPs / 20% GP.\n\nWith a **full catch-up**, if the fund clears the hurdle comfortably the GP ends up with exactly 20% of total profit: the hurdle affects timing, not the final split.',
        'Una tipica **waterfall distributiva** paga per livelli:\n\n1. **Restituzione del capitale** — 100% agli LP finché non recuperano il capitale versato (commissioni incluse).\n2. **Rendimento preferenziale (hurdle)** — 100% agli LP finché non ottengono ad es. l’8% annuo composto.\n3. **Catch-up del GP** — una quota elevata (spesso 100%, a volte 80%) al GP finché non ha ricevuto il 20% di tutti i profitti distribuiti fino a quel momento.\n4. **Ripartizione del carry** — i profitti residui 80% agli LP / 20% al GP.\n\nCon un **catch-up pieno**, se il fondo supera ampiamente l’hurdle il GP ottiene esattamente il 20% del profitto totale: l’hurdle incide sui tempi, non sulla ripartizione finale.'
      )
    },
    {
      type: 'formula',
      formulas: [
        {
          name: t('Annual management fee (investment period)', 'Commissione di gestione annua (periodo d’investimento)'),
          expr: 'Fee = Committed capital × Fee rate',
          vars: [{ sym: 'Fee rate', desc: t('e.g. 2.0% (1.5% for many large funds)', 'ad es. 2,0% (1,5% per molti fondi grandi)') }]
        },
        {
          name: t('Carry with full catch-up, hurdle cleared', 'Carry con catch-up pieno, hurdle superato'),
          expr: 'Carry = Carry rate × (Total distributions − Paid-in capital)'
        },
        {
          name: t('Catch-up amount (100% catch-up)', 'Importo del catch-up (catch-up al 100%)'),
          expr: 'C = Pref × c / (1 − c)',
          vars: [
            { sym: 'Pref', desc: t('Preferred return paid to LPs', 'Rendimento preferenziale pagato agli LP') },
            { sym: 'c', desc: t('Carry rate, e.g. 20%', 'Percentuale di carry, ad es. 20%') }
          ]
        }
      ],
      note: t(
        'With c = 20%, the catch-up equals one quarter of the preferred return (0.2 / 0.8 = 0.25).',
        'Con c = 20%, il catch-up è pari a un quarto del rendimento preferenziale (0,2 / 0,8 = 0,25).'
      )
    },
    {
      type: 'example',
      title: t('A European (whole-fund) waterfall', 'Una waterfall europea (whole-fund)'),
      body: t(
        'Fund paid-in capital €1,000m; total distributions €1,800m; the 8% compounded hurdle over the fund’s cash-flow timing equals €200m. 20% carry, 100% catch-up.',
        'Capitale versato del fondo €1.000m; distribuzioni totali €1.800m; l’hurdle dell’8% composto, dati i tempi dei flussi, vale €200m. Carry 20%, catch-up 100%.'
      ),
      table: {
        headers: [t('Tier', 'Livello'), t('To LPs', 'Agli LP'), t('To GP', 'Al GP')],
        rows: [
          [t('1. Return of capital', '1. Restituzione del capitale'), '1,000', '0'],
          [t('2. Preferred return 8%', '2. Rendimento preferenziale 8%'), '200', '0'],
          [t('3. Catch-up (200 × 0.25)', '3. Catch-up (200 × 0,25)'), '0', '50'],
          [t('4. Remaining 550 split 80/20', '4. Residuo 550 ripartito 80/20'), '440', '110'],
          [t('Total', 'Totale'), '1,640', '160']
        ],
        totalRows: [4]
      }
    },
    {
      type: 'technical',
      title: t('European vs American waterfalls', 'Waterfall europea vs americana'),
      body: t(
        '- **European (whole-fund)**: carry is paid only after LPs have received back **all contributed capital across the fund** plus the hurdle. LP-friendly; carry arrives late.\n- **American (deal-by-deal)**: carry is calculated on each realised deal (usually after returning capital for that deal and, often, for realised losses/write-downs). GP-friendly; carry arrives early.\n\nBecause early winners can be followed by losers, deal-by-deal funds rely on a **clawback**: at the end of the fund the GP must return carry exceeding its agreed share of total profits. Escrows or holdbacks of carry often back this up.',
        '- **Europea (whole-fund)**: il carry si paga solo dopo che gli LP hanno recuperato **tutto il capitale versato nel fondo** più l’hurdle. Favorevole agli LP; il carry arriva tardi.\n- **Americana (deal-by-deal)**: il carry si calcola su ogni deal realizzato (di solito dopo aver restituito il capitale di quel deal e, spesso, delle perdite/svalutazioni realizzate). Favorevole al GP; il carry arriva presto.\n\nPoiché ai primi successi possono seguire perdite, i fondi deal-by-deal prevedono una **clawback**: a fine fondo il GP deve restituire il carry eccedente la quota pattuita dei profitti totali. Spesso è garantita da escrow o trattenute sul carry.'
      )
    },
    {
      type: 'realworld',
      body: t(
        'European-style waterfalls dominate in European buyout funds and have spread among US funds too, under LP pressure. When you hear that a GP has “crystallised carry”, it means the fund’s cumulative distributions have cleared capital plus hurdle. Carried interest taxation is jurisdiction-specific and politically debated (in the US, for instance, long-term capital gain treatment of carry requires a holding period of more than three years under IRC §1061).',
        'Le waterfall europee prevalgono nei fondi buyout europei e si sono diffuse anche tra i fondi USA, su pressione degli LP. Quando si dice che un GP ha “cristallizzato il carry”, significa che le distribuzioni cumulate del fondo hanno superato capitale più hurdle. La tassazione del carried interest dipende dalla giurisdizione ed è politicamente dibattuta (negli USA, ad esempio, il trattamento come capital gain di lungo periodo richiede un periodo di detenzione superiore a tre anni ai sensi dell’IRC §1061).'
      )
    },
    { type: 'exercise', questionId: 'pe-fee-q1' },
    { type: 'exercise', questionId: 'pe-fee-q2' },
    { type: 'exercise', questionId: 'pe-fee-q3' },
    {
      type: 'interview',
      question: t('What is the difference between a European and an American waterfall?', 'Qual è la differenza tra waterfall europea e americana?'),
      answer: t(
        'In a European, whole-fund waterfall the GP only earns carry once LPs have got back all the capital they contributed to the fund plus the preferred return, so carry is paid late and LPs are protected. In an American, deal-by-deal waterfall carry is calculated on each exit, so the GP gets paid earlier — but if later deals lose money the GP may have been overpaid, which is why those funds have a clawback at the end of the fund’s life.',
        'Nella waterfall europea, whole-fund, il GP matura il carry solo quando gli LP hanno recuperato tutto il capitale versato nel fondo più il rendimento preferenziale: il carry arriva tardi e gli LP sono tutelati. Nella waterfall americana, deal-by-deal, il carry si calcola su ogni exit, quindi il GP incassa prima — ma se i deal successivi perdono, il GP può risultare sovrapagato: per questo questi fondi prevedono una clawback a fine vita del fondo.'
      )
    },
    {
      type: 'mistakes',
      items: [
        t('Charging the fee on called capital during the investment period. It is normally on commitments.', 'Calcolare la commissione sul capitale richiamato durante il periodo d’investimento. Di norma si calcola sugli impegni.'),
        t('Computing carry as 20% of profit above the hurdle only. With a full catch-up, the GP gets 20% of all profit.', 'Calcolare il carry come 20% del solo profitto oltre l’hurdle. Con catch-up pieno il GP ottiene il 20% di tutto il profitto.'),
        t('Forgetting that fees count as contributed capital that LPs must get back before carry.', 'Dimenticare che le commissioni rientrano nel capitale versato che gli LP devono recuperare prima del carry.'),
        t('Treating the hurdle as a fee to the GP. It is a minimum return to LPs before carry.', 'Considerare l’hurdle una commissione per il GP. È un rendimento minimo per gli LP prima del carry.')
      ]
    },
    {
      type: 'summary',
      items: [
        t('“2 and 20”: ~2% fee on commitments, 20% carry above an ~8% hurdle.', '“2 e 20”: ~2% di commissione sugli impegni, 20% di carry oltre un hurdle di ~8%.'),
        t('Waterfall: capital → preferred return → catch-up → 80/20 split.', 'Waterfall: capitale → rendimento preferenziale → catch-up → ripartizione 80/20.'),
        t('European = whole-fund, LP-friendly; American = deal-by-deal with clawback.', 'Europea = whole-fund, favorevole agli LP; americana = deal-by-deal con clawback.')
      ]
    }
  ],
  questions: [
    {
      id: 'pe-fee-q1',
      kind: 'numeric',
      topic: 'pe-fees-carry',
      difficulty: 1,
      objective: t('Compute a management fee on committed capital.', 'Calcolare la commissione di gestione sul capitale impegnato.'),
      prompt: t(
        'A €600m fund charges a 2% management fee on commitments during its 5-year investment period. Only €150m has been called in year 1. What is the year-1 fee (€m)?',
        'Un fondo da €600m applica una commissione di gestione del 2% sugli impegni durante i 5 anni del periodo d’investimento. Nel primo anno sono stati richiamati solo €150m. Qual è la commissione del primo anno (€m)?'
      ),
      answer: 12,
      unit: '€m',
      verify: { fn: 'managementFee', args: [600, 0.02] },
      explanation: t(
        'During the investment period the fee is on commitments: 600 × 2% = 12. Using called capital (150 × 2% = 3) is the classic mistake.',
        'Durante il periodo d’investimento la commissione è sugli impegni: 600 × 2% = 12. Usare il capitale richiamato (150 × 2% = 3) è l’errore tipico.'
      )
    },
    {
      id: 'pe-fee-q2',
      kind: 'numeric',
      topic: 'pe-fees-carry',
      difficulty: 2,
      objective: t('Compute whole-fund carry with a full catch-up.', 'Calcolare il carry whole-fund con catch-up pieno.'),
      prompt: t(
        'A fund with €800m paid-in capital returns €2,000m in total. The hurdle is met and there is a 100% catch-up. What is the GP’s carried interest at 20% (€m)?',
        'Un fondo con €800m di capitale versato restituisce in totale €2.000m. L’hurdle è superato e il catch-up è al 100%. A quanto ammonta il carried interest del GP al 20% (€m)?'
      ),
      answer: 240,
      unit: '€m',
      verify: { fn: 'carriedInterest', args: [2000, 800, 0.2] },
      explanation: t(
        'Profit = 2,000 − 800 = 1,200. With a full catch-up the GP receives 20% of all profit: 240. Taking 20% of total distributions (400) ignores return of capital.',
        'Profitto = 2.000 − 800 = 1.200. Con catch-up pieno il GP riceve il 20% di tutto il profitto: 240. Prendere il 20% delle distribuzioni totali (400) ignora la restituzione del capitale.'
      )
    },
    {
      id: 'pe-fee-q3',
      kind: 'grid',
      topic: 'pe-fees-carry',
      difficulty: 3,
      objective: t('Build a four-tier distribution waterfall.', 'Costruire una waterfall distributiva a quattro livelli.'),
      prompt: t(
        'Paid-in capital 500; total distributions 900; preferred return amount 120; carry 20% with 100% catch-up. Fill in the waterfall (€m).',
        'Capitale versato 500; distribuzioni totali 900; rendimento preferenziale 120; carry 20% con catch-up al 100%. Completa la waterfall (€m).'
      ),
      columns: [t('Tier', 'Livello'), t('To LPs', 'Agli LP'), t('To GP', 'Al GP')],
      rows: [
        { label: t('1. Return of capital', '1. Restituzione del capitale'), cells: [500, 0] },
        { label: t('2. Preferred return', '2. Rendimento preferenziale'), cells: [120, 0] },
        { label: t('3. Catch-up', '3. Catch-up'), cells: [0, { answer: 30, verify: { fn: 'product', args: [120, 0.25] } }] },
        {
          label: t('4. Remaining 250 split 80/20', '4. Residuo 250 ripartito 80/20'),
          cells: [{ answer: 200, verify: { fn: 'product', args: [250, 0.8] } }, { answer: 50, verify: { fn: 'product', args: [250, 0.2] } }]
        },
        {
          label: t('Total', 'Totale'),
          cells: [{ answer: 820, verify: { fn: 'sum', args: [500, 120, 200] } }, { answer: 80, verify: { fn: 'carriedInterest', args: [900, 500, 0.2] } }]
        }
      ],
      unit: '€m',
      explanation: t(
        'Catch-up = 120 × 0.2/0.8 = 30, so the GP holds 20% of the 150 profit distributed so far. Remaining = 900 − 500 − 120 − 30 = 250, split 200/50. GP total 80 = 20% of the 400 profit — exactly what a full catch-up delivers.',
        'Catch-up = 120 × 0,2/0,8 = 30, così il GP detiene il 20% dei 150 di profitto distribuiti fin lì. Residuo = 900 − 500 − 120 − 30 = 250, ripartito 200/50. Totale GP 80 = 20% dei 400 di profitto — esattamente l’effetto del catch-up pieno.'
      )
    },
    {
      id: 'pe-fee-q4',
      kind: 'mcq',
      topic: 'pe-fees-carry',
      difficulty: 2,
      objective: t('Distinguish whole-fund and deal-by-deal carry.', 'Distinguere carry whole-fund e deal-by-deal.'),
      prompt: t(
        'Deal A returns €100m profit in year 4; deal B, exited in year 8, loses €80m. Under which waterfall is a GP clawback most likely to be triggered?',
        'Il deal A genera €100m di profitto all’anno 4; il deal B, ceduto all’anno 8, perde €80m. Con quale waterfall è più probabile che scatti la clawback del GP?'
      ),
      choices: [
        t('European (whole-fund)', 'Europea (whole-fund)'),
        t('Neither — clawbacks only apply to management fees', 'Nessuna — la clawback riguarda solo le commissioni di gestione'),
        t('American (deal-by-deal)', 'Americana (deal-by-deal)'),
        t('Both equally', 'Entrambe allo stesso modo')
      ],
      correct: 2,
      explanation: t(
        'Deal-by-deal carry would be paid on deal A’s profit in year 4. When deal B loses money, total fund profit is only €20m, so the GP was overpaid and must return the excess. Whole-fund carry waits for all capital to be returned, so overpayment is much less likely.',
        'Con il deal-by-deal il carry sul profitto del deal A viene pagato all’anno 4. Quando il deal B perde, il profitto totale del fondo è solo €20m: il GP è stato sovrapagato e deve restituire l’eccedenza. Con il whole-fund il carry attende la restituzione di tutto il capitale, quindi il sovrapagamento è molto meno probabile.'
      )
    },
    {
      id: 'pe-fee-q5',
      kind: 'order',
      topic: 'pe-fees-carry',
      difficulty: 1,
      objective: t('Sequence the waterfall tiers.', 'Ordinare i livelli della waterfall.'),
      prompt: t('Put the tiers of a standard distribution waterfall in order.', 'Metti in ordine i livelli di una waterfall distributiva standard.'),
      items: [
        t('Return of contributed capital to LPs', 'Restituzione del capitale versato agli LP'),
        t('Preferred return (hurdle) to LPs', 'Rendimento preferenziale (hurdle) agli LP'),
        t('GP catch-up', 'Catch-up del GP'),
        t('80/20 split of remaining profits', 'Ripartizione 80/20 dei profitti residui')
      ],
      explanation: t(
        'LPs first get their money back, then their minimum return; then the GP catches up to its 20% share; then everything is split 80/20.',
        'Gli LP recuperano prima il capitale, poi il rendimento minimo; poi il GP recupera fino alla sua quota del 20%; infine tutto si ripartisce 80/20.'
      )
    }
  ],
  flashcards: [
    { id: 'fc-pe-fee-1', topic: 'pe-fees-carry', front: t('What does “2 and 20” mean?', 'Cosa significa “2 e 20”?'), back: t('~2% annual management fee and 20% carried interest on profits (usually above an 8% hurdle).', '~2% di commissione di gestione annua e 20% di carried interest sui profitti (di solito oltre un hurdle dell’8%).') },
    { id: 'fc-pe-fee-2', topic: 'pe-fees-carry', front: t('Fee base during the investment period?', 'Base di calcolo della commissione nel periodo d’investimento?'), back: t('Committed capital (then usually net invested capital afterwards).', 'Capitale impegnato (poi di solito capitale netto investito).') },
    { id: 'fc-pe-fee-3', topic: 'pe-fees-carry', front: t('What is the GP catch-up?', 'Cos’è il catch-up del GP?'), back: t('After the hurdle, the GP receives most/all distributions until it has 20% of profits distributed to date.', 'Dopo l’hurdle il GP riceve gran parte/tutte le distribuzioni finché non ha il 20% dei profitti distribuiti fino a quel momento.') },
    { id: 'fc-pe-fee-4', topic: 'pe-fees-carry', front: t('What is a clawback?', 'Cos’è la clawback?'), back: t('GP obligation to return carry received in excess of its agreed share of total fund profits.', 'Obbligo del GP di restituire il carry ricevuto in eccesso rispetto alla quota pattuita dei profitti totali del fondo.') },
    { id: 'fc-pe-fee-5', topic: 'pe-fees-carry', front: t('European vs American waterfall in one line?', 'Waterfall europea vs americana in una riga?'), back: t('European: carry after all fund capital + hurdle returned. American: carry deal by deal, with clawback.', 'Europea: carry dopo la restituzione di tutto il capitale + hurdle. Americana: carry deal per deal, con clawback.') }
  ],
  sources: [{ label: '26 U.S. Code §1061 — Partnership interests held in connection with performance of services', url: 'https://www.law.cornell.edu/uscode/text/26/1061' }]
};

const peFundLifecycle: Lesson = {
  id: 'pe-fund-lifecycle',
  academyId: 'private-equity',
  moduleId: 'P1',
  mode: 'quick',
  minutes: 9,
  difficulty: 2,
  reviewed: R,
  objective: t(
    'Describe the phases of a fund’s life, explain the J-curve and compute DPI, RVPI and TVPI.',
    'Descrivere le fasi della vita di un fondo, spiegare la J-curve e calcolare DPI, RVPI e TVPI.'
  ),
  screens: [
    {
      type: 'intuition',
      title: t('Plant, grow, harvest', 'Seminare, crescere, raccogliere'),
      body: t(
        'A fund lives through three seasons. First it **raises and invests** capital; then it **owns and improves** companies; finally it **sells** them and returns cash.\n\nFor LPs this produces a **J-curve**: in the early years net cash flows and reported returns are negative (fees and costs, investments at cost), then they turn positive as exits happen.',
        'Un fondo vive tre stagioni. Prima **raccoglie e investe**; poi **detiene e migliora** le aziende; infine le **vende** e restituisce liquidità.\n\nPer gli LP questo genera una **J-curve**: nei primi anni flussi netti e rendimenti riportati sono negativi (commissioni e costi, investimenti al costo), poi diventano positivi con le exit.'
      )
    },
    {
      type: 'technical',
      title: t('The phases', 'Le fasi'),
      body: t(
        '- **Fundraising** (≈1–2 years): first close to final close.\n- **Investment period** (≈ first 4–6 years): new platform deals; capital called deal by deal.\n- **Holding / value creation**: operational plans, add-ons, refinancings.\n- **Harvesting**: exits and distributions, mostly in the second half of the fund’s life.\n- **Wind-down**: the term (often 10 years) may be extended, typically with LP or LPAC consent; remaining assets may be sold or moved into a continuation vehicle.\n\nAfter the investment period, the GP can usually still call capital for follow-ons, fees and expenses.',
        '- **Raccolta** (≈1–2 anni): dal first close al final close.\n- **Periodo d’investimento** (≈ primi 4–6 anni): nuovi deal “piattaforma”; capitale richiamato deal per deal.\n- **Detenzione / creazione di valore**: piani operativi, add-on, rifinanziamenti.\n- **Disinvestimento**: exit e distribuzioni, soprattutto nella seconda metà della vita del fondo.\n- **Liquidazione**: la durata (spesso 10 anni) può essere prorogata, di solito con il consenso di LP o LPAC; gli asset residui possono essere venduti o trasferiti in un continuation vehicle.\n\nDopo il periodo d’investimento il GP di norma può ancora richiamare capitale per follow-on, commissioni e spese.'
      )
    },
    {
      type: 'formula',
      formulas: [
        { name: t('DPI — distributed to paid-in', 'DPI — distribuito su versato'), expr: 'DPI = Cumulative distributions / Paid-in capital' },
        { name: t('RVPI — residual value to paid-in', 'RVPI — valore residuo su versato'), expr: 'RVPI = NAV (unrealised value) / Paid-in capital' },
        { name: t('TVPI — total value to paid-in', 'TVPI — valore totale su versato'), expr: 'TVPI = DPI + RVPI = (Distributions + NAV) / Paid-in capital' }
      ],
      note: t(
        'DPI is cash in the bank (“realised”); RVPI depends on the GP’s valuations. LPs look hard at DPI, especially late in a fund’s life.',
        'Il DPI è cassa effettivamente incassata (“realizzato”); l’RVPI dipende dalle valutazioni del GP. Gli LP guardano soprattutto al DPI, in particolare nella fase finale del fondo.'
      )
    },
    {
      type: 'example',
      title: t('Fund II at year 6', 'Il Fondo II all’anno 6'),
      body: t('A hypothetical fund reports (€m):', 'Un fondo ipotetico riporta (€m):'),
      table: {
        headers: [t('Metric', 'Metrica'), t('Value', 'Valore')],
        rows: [
          [t('Paid-in capital', 'Capitale versato'), '400'],
          [t('Cumulative distributions', 'Distribuzioni cumulate'), '280'],
          [t('NAV of remaining companies', 'NAV delle partecipate residue'), '420'],
          [t('DPI = 280 / 400', 'DPI = 280 / 400'), '0.70x'],
          [t('RVPI = 420 / 400', 'RVPI = 420 / 400'), '1.05x'],
          [t('TVPI = 700 / 400', 'TVPI = 700 / 400'), '1.75x']
        ],
        totalRows: [5]
      }
    },
    {
      type: 'realworld',
      body: t(
        'When exit markets slow, funds hold assets longer, DPI lags TVPI and LPs receive less cash to recycle into new funds — which makes fundraising harder. That is why GPs use **NAV financing**, **continuation funds** and partial sales, and why bankers pitch dividend recaps and minority stake sales to sponsors.',
        'Quando il mercato delle exit rallenta, i fondi tengono gli asset più a lungo, il DPI resta indietro rispetto al TVPI e gli LP ricevono meno liquidità da reinvestire nei nuovi fondi — il che rende più difficile la raccolta. Per questo i GP ricorrono a **NAV financing**, **continuation fund** e cessioni parziali, e i banker propongono agli sponsor dividend recap e cessioni di quote di minoranza.'
      )
    },
    { type: 'exercise', questionId: 'pe-life-q1' },
    { type: 'exercise', questionId: 'pe-life-q2' },
    {
      type: 'interview',
      question: t('Why do PE funds show a J-curve?', 'Perché i fondi di PE mostrano una J-curve?'),
      answer: t(
        'Early on, LPs pay management fees and deal costs while investments are carried roughly at cost, so cumulative net returns are negative. Value creation and exits come later — typically from years 4–5 onwards — so distributions rise and cumulative returns turn positive, drawing the shape of a J.',
        'All’inizio gli LP pagano commissioni di gestione e costi dei deal mentre gli investimenti sono iscritti più o meno al costo, quindi i rendimenti netti cumulati sono negativi. Creazione di valore ed exit arrivano dopo — tipicamente dal quarto-quinto anno — quindi le distribuzioni crescono e i rendimenti cumulati diventano positivi, disegnando una J.'
      )
    },
    {
      type: 'mistakes',
      items: [
        t('Treating TVPI as realised. Only DPI is cash returned.', 'Considerare il TVPI realizzato. Solo il DPI è liquidità restituita.'),
        t('Using committed instead of paid-in capital in the denominator.', 'Usare il capitale impegnato invece di quello versato al denominatore.'),
        t('Assuming a fund stops calling capital after the investment period. Follow-ons and fees can still be called.', 'Pensare che un fondo smetta di richiamare capitale dopo il periodo d’investimento. Follow-on e commissioni possono ancora essere richiamati.')
      ]
    },
    {
      type: 'summary',
      items: [
        t('Fundraise → invest → hold → harvest → wind down, over ~10+ years.', 'Raccolta → investimento → detenzione → disinvestimento → liquidazione, in ~10+ anni.'),
        t('J-curve: negative early returns, positive once exits arrive.', 'J-curve: rendimenti negativi all’inizio, positivi con le exit.'),
        t('TVPI = DPI + RVPI; DPI is the realised part.', 'TVPI = DPI + RVPI; il DPI è la parte realizzata.')
      ]
    }
  ],
  questions: [
    {
      id: 'pe-life-q1',
      kind: 'numeric',
      topic: 'pe-fund-metrics',
      difficulty: 1,
      objective: t('Compute TVPI.', 'Calcolare il TVPI.'),
      prompt: t(
        'Paid-in capital €500m, cumulative distributions €350m, NAV €450m. What is TVPI (x)?',
        'Capitale versato €500m, distribuzioni cumulate €350m, NAV €450m. Qual è il TVPI (x)?'
      ),
      answer: 1.6,
      unit: 'x',
      verify: { fn: 'ratio', args: [800, 500] },
      explanation: t('TVPI = (350 + 450) / 500 = 1.6x. DPI is 0.7x and RVPI 0.9x.', 'TVPI = (350 + 450) / 500 = 1,6x. Il DPI è 0,7x e l’RVPI 0,9x.')
    },
    {
      id: 'pe-life-q2',
      kind: 'numeric',
      topic: 'pe-fund-metrics',
      difficulty: 1,
      objective: t('Compute DPI.', 'Calcolare il DPI.'),
      prompt: t('Same fund: what is DPI (x)?', 'Stesso fondo: qual è il DPI (x)?'),
      answer: 0.7,
      unit: 'x',
      verify: { fn: 'ratio', args: [350, 500] },
      explanation: t('DPI = 350 / 500 = 0.70x — the share of paid-in capital already returned in cash.', 'DPI = 350 / 500 = 0,70x — la quota di capitale versato già restituita in contanti.')
    },
    {
      id: 'pe-life-q3',
      kind: 'order',
      topic: 'pe-fund-lifecycle',
      difficulty: 1,
      objective: t('Sequence the phases of a fund.', 'Ordinare le fasi di un fondo.'),
      prompt: t('Order the stages of a PE fund’s life.', 'Ordina le fasi della vita di un fondo di PE.'),
      items: [
        t('First close', 'First close'),
        t('Final close', 'Final close'),
        t('End of investment period', 'Fine del periodo d’investimento'),
        t('Bulk of exits and distributions', 'Gran parte delle exit e distribuzioni'),
        t('Term extension / wind-down', 'Proroga / liquidazione')
      ],
      explanation: t('Investing can start at first close; the investment period ends after ~4–6 years; most exits come later; extensions and wind-down close the fund.', 'Si può iniziare a investire dal first close; il periodo d’investimento termina dopo ~4–6 anni; la maggior parte delle exit arriva dopo; proroghe e liquidazione chiudono il fondo.')
    },
    {
      id: 'pe-life-q4',
      kind: 'mcq',
      topic: 'pe-fund-lifecycle',
      difficulty: 2,
      objective: t('Interpret DPI versus TVPI.', 'Interpretare DPI rispetto a TVPI.'),
      prompt: t(
        'Fund X: TVPI 2.0x, DPI 0.3x at year 8. Fund Y: TVPI 1.8x, DPI 1.5x at year 8. What would a cautious LP conclude?',
        'Fondo X: TVPI 2,0x, DPI 0,3x all’anno 8. Fondo Y: TVPI 1,8x, DPI 1,5x all’anno 8. Cosa concluderebbe un LP prudente?'
      ),
      choices: [
        t('X is clearly better because TVPI is higher', 'X è chiaramente migliore perché il TVPI è più alto'),
        t('They are equivalent', 'Sono equivalenti'),
        t('Y has delivered far more cash; X’s value is mostly unrealised and depends on GP marks', 'Y ha restituito molta più liquidità; il valore di X è in gran parte non realizzato e dipende dalle valutazioni del GP'),
        t('DPI cannot be compared across funds', 'Il DPI non è confrontabile tra fondi')
      ],
      correct: 2,
      explanation: t(
        'At year 8 most of X’s value is still NAV (RVPI 1.7x) and may not be realised at those marks. Y has already returned 1.5x in cash. Higher TVPI alone does not make X better.',
        'All’anno 8 la maggior parte del valore di X è ancora NAV (RVPI 1,7x) e potrebbe non essere realizzata a quei valori. Y ha già restituito 1,5x in contanti. Un TVPI più alto da solo non rende X migliore.'
      )
    }
  ],
  flashcards: [
    { id: 'fc-pe-life-1', topic: 'pe-fund-metrics', front: t('Define DPI.', 'Definisci il DPI.'), back: t('Cumulative distributions / paid-in capital (realised multiple).', 'Distribuzioni cumulate / capitale versato (multiplo realizzato).') },
    { id: 'fc-pe-life-2', topic: 'pe-fund-metrics', front: t('Define TVPI.', 'Definisci il TVPI.'), back: t('(Distributions + NAV) / paid-in capital = DPI + RVPI.', '(Distribuzioni + NAV) / capitale versato = DPI + RVPI.') },
    { id: 'fc-pe-life-3', topic: 'pe-fund-lifecycle', front: t('What is the J-curve?', 'Cos’è la J-curve?'), back: t('Negative early net returns (fees, investments at cost) turning positive as exits occur.', 'Rendimenti netti negativi all’inizio (commissioni, investimenti al costo) che diventano positivi con le exit.') },
    { id: 'fc-pe-life-4', topic: 'pe-fund-lifecycle', front: t('Can a GP call capital after the investment period?', 'Il GP può richiamare capitale dopo il periodo d’investimento?'), back: t('Usually yes, but limited to follow-ons, fees and expenses as set by the LPA.', 'Di solito sì, ma limitatamente a follow-on, commissioni e spese secondo l’LPA.') }
  ]
};

/* ============================ P2 — INVESTING ============================ */

const peSourcing: Lesson = {
  id: 'pe-sourcing-screening',
  academyId: 'private-equity',
  moduleId: 'P2',
  mode: 'quick',
  minutes: 8,
  difficulty: 1,
  qualitative: true,
  reviewed: R,
  objective: t(
    'Explain where PE deals come from and how sponsors quickly screen opportunities against their investment criteria.',
    'Spiegare da dove nascono i deal di PE e come gli sponsor valutano rapidamente le opportunità rispetto ai propri criteri d’investimento.'
  ),
  screens: [
    {
      type: 'intuition',
      title: t('A funnel, not a lottery', 'Un imbuto, non una lotteria'),
      body: t(
        'A mid-market fund may look at several hundred opportunities a year and complete only a handful. The job of sourcing is to fill the top of the funnel; the job of screening is to say **“no” quickly** so the team spends time only where it can win and make money.',
        'Un fondo mid-market può esaminare diverse centinaia di opportunità l’anno e chiuderne solo poche. Il sourcing serve a riempire la parte alta dell’imbuto; lo screening serve a dire **“no” rapidamente**, così il team dedica tempo solo dove può vincere e guadagnare.'
      )
    },
    {
      type: 'technical',
      title: t('Where deals come from', 'Da dove arrivano i deal'),
      body: t(
        '- **Intermediated auctions** run by investment banks and M&A advisers — the bank sends a teaser, then an Information Memorandum (CIM) to qualified bidders.\n- **Proprietary / off-market** deals from the fund’s own network, founders and family owners (common in Italian family businesses).\n- **Corporate carve-outs**: groups selling non-core divisions.\n- **Secondary buyouts** from other sponsors.\n- **Public-to-private** take-privates of listed companies.\n- **Add-ons** sourced for existing portfolio companies.\n\nMany funds also run **thematic sourcing**: picking a sector thesis and approaching every company in it.',
        '- **Aste intermediate** gestite da banche d’affari e advisor M&A — la banca invia un teaser, poi un Information Memorandum (CIM) agli offerenti qualificati.\n- Deal **proprietari / off-market** dalla rete del fondo, da fondatori e famiglie (frequenti nelle aziende familiari italiane).\n- **Carve-out**: gruppi che cedono divisioni non core.\n- **Secondary buyout** da altri sponsor.\n- **Public-to-private**: delisting di società quotate.\n- **Add-on** per le partecipate esistenti.\n\nMolti fondi praticano anche un **sourcing tematico**: scelgono una tesi settoriale e contattano tutte le aziende del comparto.'
      )
    },
    {
      type: 'technical',
      title: t('The first screen', 'Il primo screening'),
      body: t(
        'Sponsors check a teaser against their **mandate** and a mental LBO in minutes:\n\n- **Fit**: size (EBITDA / equity cheque), sector, geography, majority vs minority.\n- **Business quality**: market position, recurring revenue, customer concentration, cyclicality.\n- **Cash generation**: margins, capex intensity, working capital needs — can it carry debt?\n- **Value-creation story**: what will we do that the current owner did not?\n- **Price and process**: expected multiple, competition in the auction, our angle to win.\n- **Red flags**: ESG exclusions, litigation, regulatory risk, key-person dependency.',
        'Gli sponsor confrontano il teaser con il proprio **mandato** e con un LBO “a mente” in pochi minuti:\n\n- **Fit**: dimensione (EBITDA / ticket di equity), settore, area geografica, maggioranza vs minoranza.\n- **Qualità del business**: posizionamento, ricavi ricorrenti, concentrazione dei clienti, ciclicità.\n- **Generazione di cassa**: margini, intensità di capex, fabbisogno di circolante — può sostenere debito?\n- **Tesi di creazione di valore**: cosa faremo noi che l’attuale proprietario non ha fatto?\n- **Prezzo e processo**: multiplo atteso, competizione nell’asta, il nostro vantaggio per vincere.\n- **Red flag**: esclusioni ESG, contenziosi, rischio regolamentare, dipendenza da persone chiave.'
      )
    },
    {
      type: 'example',
      title: t('Screening three teasers', 'Lo screening di tre teaser'),
      body: t(
        'A fund targeting €10–40m EBITDA European industrial and business-services companies receives three teasers:',
        'Un fondo che punta ad aziende europee industriali e di servizi alle imprese con €10–40m di EBITDA riceve tre teaser:'
      ),
      table: {
        headers: [t('Company', 'Azienda'), t('Profile', 'Profilo'), t('Decision', 'Decisione')],
        rows: [
          [t('Alfa (packaging)', 'Alfa (packaging)'), t('€25m EBITDA, 18% margin, top client 12%', '€25m EBITDA, margine 18%, primo cliente 12%'), t('Pursue', 'Procedere')],
          [t('Beta (biotech)', 'Beta (biotech)'), t('Pre-revenue, cash-burning', 'Senza ricavi, brucia cassa'), t('Pass — no cash flow, off-mandate', 'Scartare — nessun flusso di cassa, fuori mandato')],
          [t('Gamma (logistics)', 'Gamma (logistica)'), t('€30m EBITDA, one client = 55% of sales', '€30m EBITDA, un cliente = 55% del fatturato'), t('Pass or price for risk', 'Scartare o prezzare il rischio')]
        ]
      }
    },
    {
      type: 'realworld',
      body: t(
        'On the sell side, IB analysts build the **buyer list**: sponsors whose fund size, sector focus and existing portfolio (potential add-on logic) fit the asset. Knowing how a sponsor screens is exactly what makes a buyer list credible — and it is what sponsors themselves test in PE interviews (“would you invest in this business?”).',
        'Sul sell-side, gli analyst IB costruiscono la **lista dei compratori**: sponsor la cui dimensione del fondo, focus settoriale e portafoglio esistente (logica di add-on) sono coerenti con l’asset. Sapere come uno sponsor fa screening è ciò che rende credibile una buyer list — ed è ciò che gli sponsor stessi testano nei colloqui PE (“investiresti in questo business?”).'
      )
    },
    { type: 'exercise', questionId: 'pe-src-q1' },
    { type: 'exercise', questionId: 'pe-src-q2' },
    {
      type: 'interview',
      question: t('What makes a business attractive for a PE investor?', 'Cosa rende un’azienda attraente per un investitore di PE?'),
      answer: t(
        'I look at three things. First, quality: a defensible market position, recurring or predictable revenue, diversified customers and low cyclicality. Second, cash: good margins, low capex and working capital needs, so it can service debt. Third, a clear value-creation plan and an entry price that leaves room for a return — ideally with levers such as margin improvement or add-ons that don’t depend on multiple expansion.',
        'Guardo tre cose. Primo, la qualità: posizionamento difendibile, ricavi ricorrenti o prevedibili, clienti diversificati e bassa ciclicità. Secondo, la cassa: buoni margini, capex e circolante contenuti, così da poter servire il debito. Terzo, un piano di creazione di valore chiaro e un prezzo d’ingresso che lasci spazio al rendimento — idealmente con leve come il miglioramento dei margini o gli add-on, che non dipendano dall’espansione del multiplo.'
      )
    },
    {
      type: 'mistakes',
      items: [
        t('Equating “great company” with “great investment”. Price matters as much as quality.', 'Confondere “ottima azienda” con “ottimo investimento”. Il prezzo conta quanto la qualità.'),
        t('Ignoring the fund’s mandate (size, sector, geography) when proposing ideas.', 'Ignorare il mandato del fondo (dimensione, settore, area) quando si propongono idee.'),
        t('Spending weeks on deals that fail an obvious screen such as customer concentration.', 'Dedicare settimane a deal che non superano uno screening ovvio come la concentrazione dei clienti.')
      ]
    },
    {
      type: 'summary',
      items: [
        t('Sources: auctions, proprietary, carve-outs, SBOs, take-privates, add-ons.', 'Fonti: aste, deal proprietari, carve-out, SBO, delisting, add-on.'),
        t('Screen on fit, quality, cash conversion, value-creation plan, price and red flags.', 'Screening su fit, qualità, conversione di cassa, piano di valore, prezzo e red flag.'),
        t('Good screening means saying no fast.', 'Uno screening efficace significa dire no rapidamente.')
      ]
    }
  ],
  questions: [
    {
      id: 'pe-src-q1',
      kind: 'multi',
      topic: 'pe-screening',
      difficulty: 1,
      objective: t('Identify characteristics of a good LBO candidate at screening.', 'Riconoscere in fase di screening le caratteristiche di un buon candidato LBO.'),
      prompt: t('Which features make a company more attractive at first screen? Select all that apply.', 'Quali caratteristiche rendono un’azienda più attraente al primo screening? Seleziona tutte le risposte corrette.'),
      choices: [
        t('High share of recurring revenue', 'Elevata quota di ricavi ricorrenti'),
        t('One customer accounting for 60% of sales', 'Un cliente pari al 60% del fatturato'),
        t('Low maintenance capex', 'Capex di mantenimento contenuto'),
        t('Clear levers for margin improvement', 'Leve chiare di miglioramento dei margini'),
        t('Highly volatile, commodity-driven earnings', 'Utili molto volatili, legati alle commodity')
      ],
      correct: [0, 2, 3],
      explanation: t(
        'Recurring revenue, low capex and identifiable improvement levers support debt capacity and returns. Heavy customer concentration and commodity volatility raise risk and reduce leverage capacity.',
        'Ricavi ricorrenti, capex contenuto e leve di miglioramento identificabili sostengono la capacità di debito e i rendimenti. Forte concentrazione dei clienti e volatilità legata alle commodity aumentano il rischio e riducono la leva sostenibile.'
      )
    },
    {
      id: 'pe-src-q2',
      kind: 'mcq',
      topic: 'pe-sourcing',
      difficulty: 1,
      objective: t('Recognise a proprietary deal.', 'Riconoscere un deal proprietario.'),
      prompt: t('A sponsor negotiates bilaterally with the founder of a family company that was never put up for sale. This is a…', 'Uno sponsor negozia bilateralmente con il fondatore di un’azienda familiare mai messa in vendita. Si tratta di un…'),
      choices: [
        t('Secondary buyout', 'Secondary buyout'),
        t('Broad auction', 'Asta allargata'),
        t('Carve-out', 'Carve-out'),
        t('Proprietary (off-market) deal', 'Deal proprietario (off-market)')
      ],
      correct: 3,
      explanation: t(
        'No competitive process and a direct relationship with the owner define a proprietary deal. An SBO is a purchase from another sponsor; a carve-out is a divisional sale by a corporate.',
        'L’assenza di un processo competitivo e il rapporto diretto con il proprietario definiscono un deal proprietario. Un SBO è un acquisto da un altro sponsor; un carve-out è la cessione di una divisione da parte di un gruppo.'
      )
    },
    {
      id: 'pe-src-q3',
      kind: 'order',
      topic: 'pe-sourcing',
      difficulty: 1,
      objective: t('Sequence a sell-side auction from the buyer’s viewpoint.', 'Ordinare un’asta sell-side dal punto di vista del compratore.'),
      prompt: t('Order the steps a sponsor goes through in an auction.', 'Ordina le fasi che uno sponsor attraversa in un’asta.'),
      items: [
        t('Receive teaser', 'Ricezione del teaser'),
        t('Sign NDA and receive CIM', 'Firma dell’NDA e ricezione del CIM'),
        t('Submit non-binding offer', 'Presentazione dell’offerta non vincolante'),
        t('Data room and management presentation', 'Data room e management presentation'),
        t('Submit binding offer', 'Presentazione dell’offerta vincolante')
      ],
      explanation: t('Teaser → NDA/CIM → first-round (non-binding) bid → second-round diligence → binding bid and SPA mark-up.', 'Teaser → NDA/CIM → offerta di primo round (non vincolante) → due diligence di secondo round → offerta vincolante e mark-up dello SPA.')
    }
  ],
  flashcards: [
    { id: 'fc-pe-src-1', topic: 'pe-sourcing', front: t('Name five PE deal sources.', 'Indica cinque fonti di deal di PE.'), back: t('Bank-run auctions, proprietary deals, corporate carve-outs, secondary buyouts, public-to-privates (plus add-ons).', 'Aste gestite da banche, deal proprietari, carve-out, secondary buyout, public-to-private (più gli add-on).') },
    { id: 'fc-pe-src-2', topic: 'pe-screening', front: t('Three screening questions a sponsor asks first?', 'Le tre prime domande di screening di uno sponsor?'), back: t('Does it fit our mandate? Can it support debt (cash conversion)? Do we have a value-creation plan at a sensible price?', 'Rientra nel mandato? Può sostenere debito (conversione di cassa)? Abbiamo un piano di valore a un prezzo sensato?') },
    { id: 'fc-pe-src-3', topic: 'pe-sourcing', front: t('What is a CIM?', 'Cos’è un CIM?'), back: t('Confidential Information Memorandum: detailed sell-side document sent to bidders after the NDA.', 'Confidential Information Memorandum: documento sell-side dettagliato inviato agli offerenti dopo l’NDA.') }
  ]
};

const peIcDiligence: Lesson = {
  id: 'pe-ic-diligence',
  academyId: 'private-equity',
  moduleId: 'P2',
  mode: 'deep',
  minutes: 11,
  difficulty: 2,
  qualitative: true,
  reviewed: R,
  objective: t(
    'Describe the investment committee process and the main due diligence workstreams in a buyout.',
    'Descrivere il processo del comitato investimenti e i principali filoni di due diligence in un buyout.'
  ),
  screens: [
    {
      type: 'intuition',
      title: t('Earning the right to spend money', 'Guadagnarsi il diritto di spendere'),
      body: t(
        'A deal team cannot simply buy a company. It must convince the firm’s **investment committee (IC)** — the senior partners — that the deal fits the fund, the risks are understood and the expected return justifies them.\n\n**Due diligence** is how the team earns that confidence: it tests every assumption in the investment thesis before signing.',
        'Un deal team non può semplicemente comprare un’azienda. Deve convincere il **comitato investimenti (IC)** — i partner senior — che il deal è coerente con il fondo, i rischi sono compresi e il rendimento atteso li giustifica.\n\nLa **due diligence** è il modo in cui il team si guadagna quella fiducia: verifica ogni ipotesi della tesi d’investimento prima del signing.'
      )
    },
    {
      type: 'technical',
      title: t('IC stages', 'Le fasi dell’IC'),
      body: t(
        'Many firms use staged approvals:\n\n- **Preliminary / first IC**: approve spending time and modest costs, and a non-binding bid range.\n- **Second IC**: approve external advisers (accounting, legal, commercial) — this is where real money is spent.\n- **Final IC**: approve the binding offer, price, financing package and key SPA terms.\n\nThe **IC memo** covers: investment thesis, business and market, financials and quality of earnings, LBO model with base/upside/downside cases, value-creation plan, key risks and mitigants, exit routes, and diligence findings.',
        'Molte società prevedono approvazioni a fasi:\n\n- **IC preliminare / primo IC**: autorizza a dedicare tempo e costi limitati e un range di offerta non vincolante.\n- **Secondo IC**: autorizza gli advisor esterni (contabile, legale, commerciale) — qui si spendono soldi veri.\n- **IC finale**: approva l’offerta vincolante, il prezzo, il pacchetto di finanziamento e i termini chiave dello SPA.\n\nL’**IC memo** copre: tesi d’investimento, business e mercato, dati finanziari e quality of earnings, modello LBO con casi base/upside/downside, piano di creazione di valore, rischi chiave e mitiganti, vie d’uscita ed esiti della due diligence.'
      )
    },
    {
      type: 'technical',
      title: t('Due diligence workstreams', 'I filoni di due diligence'),
      body: t(
        '- **Commercial (CDD)**: market size and growth, competitive position, customer interviews — often by a strategy consultancy.\n- **Financial (FDD) / Quality of Earnings**: normalised EBITDA, one-offs, working capital seasonality, net debt and debt-like items — typically a Big Four firm.\n- **Tax**: exposures, structuring, interest deductibility.\n- **Legal**: contracts, change-of-control clauses, litigation, IP, employment.\n- **Operational / IT / cyber**, **ESG**, **insurance**, **pensions**, **management** (references, assessments).\n\nIn auctions the seller often provides **vendor due diligence (VDD)** reports, which buyers can rely on via reliance letters and supplement with their own top-up work.',
        '- **Commerciale (CDD)**: dimensione e crescita del mercato, posizionamento competitivo, interviste ai clienti — spesso da una società di consulenza strategica.\n- **Finanziaria (FDD) / Quality of Earnings**: EBITDA normalizzato, componenti non ricorrenti, stagionalità del circolante, posizione finanziaria netta e debt-like item — tipicamente una Big Four.\n- **Fiscale**: rischi, strutturazione, deducibilità degli interessi.\n- **Legale**: contratti, clausole di change of control, contenziosi, proprietà intellettuale, lavoro.\n- **Operativa / IT / cyber**, **ESG**, **assicurativa**, **previdenziale**, **management** (referenze, assessment).\n\nNelle aste il venditore fornisce spesso report di **vendor due diligence (VDD)**, su cui i compratori possono fare affidamento tramite reliance letter integrandoli con proprie verifiche aggiuntive.'
      )
    },
    {
      type: 'example',
      title: t('How a QoE finding changes the price', 'Come un risultato della QoE cambia il prezzo'),
      body: t(
        'Management presents €40m adjusted EBITDA for TargetCo. The financial due diligence finds €3m of “one-off” costs that actually recur every year and €1m of pro forma savings not yet secured. At a 9.0x multiple, the impact on headline value is material.',
        'Il management presenta €40m di EBITDA adjusted per TargetCo. La due diligence finanziaria rileva €3m di costi “non ricorrenti” che in realtà si ripetono ogni anno e €1m di risparmi pro forma non ancora acquisiti. Con un multiplo di 9,0x, l’impatto sul valore è rilevante.'
      ),
      table: {
        headers: [t('Item', 'Voce'), t('€m', '€m')],
        rows: [
          [t('Management adjusted EBITDA', 'EBITDA adjusted del management'), '40.0'],
          [t('Less: recurring “one-offs”', 'Meno: “one-off” ricorrenti'), '(3.0)'],
          [t('Less: unsecured pro forma savings', 'Meno: risparmi pro forma non acquisiti'), '(1.0)'],
          [t('Diligenced EBITDA', 'EBITDA post due diligence'), '36.0'],
          [t('Value impact at 9.0x (4.0 × 9.0)', 'Impatto sul valore a 9,0x (4,0 × 9,0)'), '(36.0)']
        ],
        totalRows: [3]
      }
    },
    {
      type: 'realworld',
      body: t(
        'IB analysts sit on the other side of this process: they set up and police the **virtual data room**, track Q&A logs from bidders, coordinate VDD providers and prepare management presentations. Knowing what a sponsor’s IC needs to see helps you anticipate questions — and avoid an embarrassing price chip late in the process.',
        'Gli analyst IB stanno dall’altra parte del processo: allestiscono e presidiano la **virtual data room**, tengono il Q&A log con gli offerenti, coordinano i fornitori di VDD e preparano le management presentation. Sapere cosa deve vedere l’IC di uno sponsor aiuta ad anticipare le domande — ed evitare una riduzione di prezzo imbarazzante a fine processo.'
      )
    },
    { type: 'exercise', questionId: 'pe-ic-q1' },
    { type: 'exercise', questionId: 'pe-ic-q2' },
    {
      type: 'interview',
      question: t('If you were on the IC, what would you want to know before approving a buyout?', 'Se fossi nell’IC, cosa vorresti sapere prima di approvare un buyout?'),
      answer: t(
        'Four things. Why this business — the thesis and its competitive advantage. What we underwrite — diligenced EBITDA, cash conversion and a base case that is realistic, plus a downside where we still repay the debt. How we create value — specific levers and who executes them, including management. And the risks: what could break the thesis, what diligence found, and how we exit and at what multiple, ideally not higher than entry.',
        'Quattro cose. Perché questo business — la tesi e il vantaggio competitivo. Cosa sottoscriviamo — EBITDA verificato, conversione di cassa e un caso base realistico, più un downside in cui riusciamo comunque a rimborsare il debito. Come creiamo valore — leve specifiche e chi le esegue, management compreso. E i rischi: cosa potrebbe far saltare la tesi, cosa ha trovato la due diligence, come e a che multiplo usciamo, idealmente non superiore a quello d’ingresso.'
      )
    },
    {
      type: 'mistakes',
      items: [
        t('Taking management’s adjusted EBITDA at face value. Every add-back must be tested.', 'Accettare l’EBITDA adjusted del management senza verifiche. Ogni add-back va testato.'),
        t('Treating diligence as a checklist rather than a test of the investment thesis.', 'Considerare la due diligence una checklist invece di una verifica della tesi d’investimento.'),
        t('Underwriting only the base case. ICs focus on the downside and debt repayment.', 'Sottoscrivere solo il caso base. Gli IC si concentrano sul downside e sul rimborso del debito.')
      ]
    },
    {
      type: 'summary',
      items: [
        t('Staged IC approvals control time and cost; the final IC approves the binding bid.', 'Le approvazioni a fasi dell’IC controllano tempo e costi; l’IC finale approva l’offerta vincolante.'),
        t('Key workstreams: commercial, financial (QoE), tax, legal, plus operational/ESG.', 'Filoni chiave: commerciale, finanziario (QoE), fiscale, legale, più operativo/ESG.'),
        t('Diligence findings feed directly into price, structure and SPA protections.', 'Gli esiti della due diligence incidono direttamente su prezzo, struttura e tutele dello SPA.')
      ]
    }
  ],
  questions: [
    {
      id: 'pe-ic-q1',
      kind: 'numeric',
      topic: 'pe-due-diligence',
      difficulty: 2,
      objective: t('Translate an EBITDA adjustment into a valuation impact.', 'Tradurre una rettifica di EBITDA in impatto sul valore.'),
      prompt: t(
        'Financial due diligence reduces TargetCo’s EBITDA from €55m to €52m. At an unchanged 10.0x multiple, by how much does enterprise value fall (€m)?',
        'La due diligence finanziaria riduce l’EBITDA di TargetCo da €55m a €52m. A multiplo invariato di 10,0x, di quanto scende l’enterprise value (€m)?'
      ),
      answer: 30,
      unit: '€m',
      verify: { fn: 'product', args: [3, 10] },
      explanation: t('ΔEV = ΔEBITDA × multiple = 3 × 10 = 30. Every €1m of EBITDA removed costs €10m of value at 10x.', 'ΔEV = ΔEBITDA × multiplo = 3 × 10 = 30. Ogni €1m di EBITDA tolto costa €10m di valore a 10x.')
    },
    {
      id: 'pe-ic-q2',
      kind: 'mcq',
      topic: 'pe-due-diligence',
      difficulty: 1,
      objective: t('Match a risk to the right workstream.', 'Associare un rischio al filone corretto.'),
      prompt: t(
        'TargetCo’s largest supply contract can be terminated if the company changes owner. Which workstream should flag this?',
        'Il principale contratto di fornitura di TargetCo può essere risolto in caso di cambio di proprietà. Quale filone dovrebbe segnalarlo?'
      ),
      choices: [
        t('Legal due diligence', 'Due diligence legale'),
        t('Commercial due diligence', 'Due diligence commerciale'),
        t('Tax due diligence', 'Due diligence fiscale'),
        t('Quality of earnings', 'Quality of earnings')
      ],
      correct: 0,
      explanation: t(
        'Change-of-control clauses are reviewed in legal due diligence. Commercial DD may assess the relationship’s importance, but the contractual right is a legal finding.',
        'Le clausole di change of control sono esaminate nella due diligence legale. La commerciale può valutare l’importanza del rapporto, ma il diritto contrattuale è un rilievo legale.'
      )
    },
    {
      id: 'pe-ic-q3',
      kind: 'multi',
      topic: 'pe-due-diligence',
      difficulty: 2,
      objective: t('Identify typical financial due diligence outputs.', 'Identificare gli output tipici della due diligence finanziaria.'),
      prompt: t('Which are typical outputs of financial due diligence? Select all that apply.', 'Quali sono output tipici della due diligence finanziaria? Seleziona tutte le risposte corrette.'),
      choices: [
        t('Normalised (adjusted) EBITDA', 'EBITDA normalizzato (adjusted)'),
        t('Net debt and debt-like items', 'Posizione finanziaria netta e debt-like item'),
        t('Normalised working capital level', 'Livello normalizzato di capitale circolante'),
        t('Market share forecasts from customer interviews', 'Previsioni di quota di mercato da interviste ai clienti'),
        t('Review of the SPA warranty package', 'Revisione del pacchetto di garanzie dello SPA')
      ],
      correct: [0, 1, 2],
      explanation: t(
        'FDD focuses on earnings quality, net debt/debt-like items and normalised working capital (which drive the equity price). Customer interviews are commercial DD; SPA warranties are legal work.',
        'La FDD si concentra su qualità degli utili, posizione finanziaria netta/debt-like item e circolante normalizzato (che determinano il prezzo dell’equity). Le interviste ai clienti sono due diligence commerciale; le garanzie dello SPA sono lavoro legale.'
      )
    },
    {
      id: 'pe-ic-q4',
      kind: 'order',
      topic: 'pe-investment-committee',
      difficulty: 1,
      objective: t('Sequence IC approvals.', 'Ordinare le approvazioni dell’IC.'),
      prompt: t('Order the typical IC and process milestones.', 'Ordina le tappe tipiche dell’IC e del processo.'),
      items: [
        t('Preliminary IC: approve non-binding bid range', 'IC preliminare: approva il range dell’offerta non vincolante'),
        t('Second IC: approve external adviser spend', 'Secondo IC: approva la spesa per advisor esterni'),
        t('Final IC: approve binding bid and financing', 'IC finale: approva offerta vincolante e finanziamento'),
        t('Signing of the SPA', 'Signing dello SPA'),
        t('Closing', 'Closing')
      ],
      explanation: t('Approvals escalate with the money at risk; signing follows final IC; closing comes after conditions (e.g. antitrust) are satisfied.', 'Le approvazioni crescono con il capitale a rischio; il signing segue l’IC finale; il closing avviene dopo il soddisfacimento delle condizioni (ad es. antitrust).')
    }
  ],
  flashcards: [
    { id: 'fc-pe-ic-1', topic: 'pe-due-diligence', front: t('What is a Quality of Earnings (QoE) report?', 'Cos’è un report di Quality of Earnings (QoE)?'), back: t('FDD analysis that normalises EBITDA by testing add-backs and one-offs.', 'Analisi di FDD che normalizza l’EBITDA verificando add-back e componenti non ricorrenti.') },
    { id: 'fc-pe-ic-2', topic: 'pe-due-diligence', front: t('What is vendor due diligence?', 'Cos’è la vendor due diligence?'), back: t('Diligence commissioned by the seller and shared with bidders, who can rely on it via reliance letters.', 'Due diligence commissionata dal venditore e condivisa con gli offerenti, che possono farvi affidamento tramite reliance letter.') },
    { id: 'fc-pe-ic-3', topic: 'pe-investment-committee', front: t('Core sections of an IC memo?', 'Sezioni principali di un IC memo?'), back: t('Thesis, business/market, financials & QoE, LBO cases, value-creation plan, risks & mitigants, exit, diligence findings.', 'Tesi, business/mercato, dati finanziari e QoE, casi LBO, piano di valore, rischi e mitiganti, exit, esiti della due diligence.') },
    { id: 'fc-pe-ic-4', topic: 'pe-due-diligence', front: t('Who usually performs commercial due diligence?', 'Chi svolge di solito la due diligence commerciale?'), back: t('Strategy consultancies (market, competition, customer interviews).', 'Società di consulenza strategica (mercato, concorrenza, interviste ai clienti).') }
  ]
};

/* ============================ P3 — LBO FUNDAMENTALS ============================ */

const peLboIntuition: Lesson = {
  id: 'pe-lbo-intuition',
  academyId: 'private-equity',
  moduleId: 'P3',
  mode: 'deep',
  minutes: 12,
  difficulty: 2,
  reviewed: R,
  objective: t(
    'Explain why leverage increases equity returns, who provides LBO debt and what makes a good LBO candidate.',
    'Spiegare perché la leva aumenta i rendimenti dell’equity, chi fornisce il debito di un LBO e cosa rende un’azienda un buon candidato LBO.'
  ),
  screens: [
    {
      type: 'intuition',
      title: t('Buying a house with a mortgage', 'Comprare casa con un mutuo'),
      body: t(
        'Buy a €500k flat with €100k of your money and a €400k mortgage. Rent pays the interest and slowly repays the loan. Sell in five years for €600k: the €100k gain all belongs to you — on a €100k cheque that is **2x your money** (more, counting the loan you repaid), while the flat rose only 20%.\n\nA **leveraged buyout (LBO)** works the same way: a sponsor buys a company using mostly **debt secured on the company itself**, and the company’s own cash flows service and repay that debt.',
        'Compri un appartamento da €500k con €100k tuoi e un mutuo da €400k. L’affitto paga gli interessi e rimborsa lentamente il prestito. Vendi dopo cinque anni a €600k: i €100k di guadagno sono tutti tuoi — su un esborso di €100k significa **raddoppiare il capitale** (di più, contando il debito rimborsato), mentre l’immobile è salito solo del 20%.\n\nUn **leveraged buyout (LBO)** funziona allo stesso modo: uno sponsor compra un’azienda usando soprattutto **debito garantito dall’azienda stessa**, e sono i flussi di cassa dell’azienda a servire e rimborsare quel debito.'
      )
    },
    {
      type: 'technical',
      title: t('Why leverage boosts returns', 'Perché la leva aumenta i rendimenti'),
      body: t(
        '- **Smaller equity cheque**: the same absolute gain in enterprise value is spread over less equity.\n- **Debt paydown**: free cash flow repays debt, transferring value from lenders to shareholders every year.\n- **Tax shield**: interest is generally tax-deductible (subject to limits such as the EU ATAD 30%-of-EBITDA interest cap, implemented in Italy in art. 96 TUIR).\n- **Discipline**: fixed debt service forces focus on cash.\n\nBut leverage **cuts both ways**: if EBITDA falls, equity absorbs the whole loss first and covenants or interest payments can push the company into distress.',
        '- **Ticket di equity più piccolo**: lo stesso aumento assoluto di enterprise value si distribuisce su meno equity.\n- **Rimborso del debito**: il free cash flow rimborsa debito, trasferendo ogni anno valore dai finanziatori agli azionisti.\n- **Scudo fiscale**: gli interessi sono in genere deducibili (entro limiti come il tetto ATAD UE del 30% dell’EBITDA, recepito in Italia nell’art. 96 TUIR).\n- **Disciplina**: il servizio del debito obbliga a concentrarsi sulla cassa.\n\nMa la leva **funziona in entrambe le direzioni**: se l’EBITDA scende, l’equity assorbe per prima tutta la perdita e covenant o interessi possono portare l’azienda in tensione finanziaria.'
      )
    },
    {
      type: 'formula',
      formulas: [
        {
          name: t('Equity value at exit', 'Valore dell’equity all’uscita'),
          expr: 'Exit equity = Exit EBITDA × Exit multiple − Net debt at exit'
        },
        {
          name: t('Money multiple', 'Multiplo sul capitale'),
          expr: 'MOIC = Exit equity / Entry equity'
        },
        {
          name: t('Entry equity', 'Equity all’ingresso'),
          expr: 'Entry equity = Purchase EV + Fees − Debt raised'
        }
      ],
      note: t(
        'Holding everything else constant, a lower entry equity (more debt) raises MOIC — as long as the business can carry the interest.',
        'A parità di altre condizioni, un’equity d’ingresso più bassa (più debito) aumenta il MOIC — purché l’azienda sostenga gli interessi.'
      )
    },
    {
      type: 'example',
      title: t('Same company, with and without debt', 'Stessa azienda, con e senza debito'),
      body: t(
        'TargetCo: €100m EBITDA bought at 10x = €1,000m. EBITDA grows to €130m and it is sold at 10x after 5 years. Unlevered, it accumulates €300m of cash. Levered with €600m of debt, after-tax interest absorbs ~€150m, so €150m of cash repays debt.',
        'TargetCo: €100m di EBITDA acquistati a 10x = €1.000m. L’EBITDA sale a €130m e l’azienda è venduta a 10x dopo 5 anni. Senza debito accumula €300m di cassa. Con €600m di debito, gli interessi al netto delle imposte assorbono ~€150m, quindi €150m di cassa rimborsano debito.'
      ),
      table: {
        headers: [t('€m', '€m'), t('All equity', 'Solo equity'), t('60% debt', '60% debito')],
        rows: [
          [t('Entry equity', 'Equity all’ingresso'), '1,000', '400'],
          [t('Exit EV (130 × 10)', 'EV all’uscita (130 × 10)'), '1,300', '1,300'],
          [t('Less net debt at exit', 'Meno PFN all’uscita'), '+300 cash', '(450)'],
          [t('Exit equity', 'Equity all’uscita'), '1,600', '850'],
          [t('MOIC', 'MOIC'), '1.60x', '2.13x'],
          [t('IRR (5 years)', 'IRR (5 anni)'), '9.9%', '16.3%']
        ],
        totalRows: [3]
      }
    },
    {
      type: 'technical',
      title: t('Who lends — and what makes a good candidate', 'Chi presta — e cosa rende un buon candidato'),
      body: t(
        '**Lenders**: banks (revolver and amortising term loans, often syndicated), institutional investors and CLOs (Term Loan B), high-yield bond investors, and increasingly **private credit funds** (unitranche, mezzanine).\n\n**A good LBO candidate** has:\n- stable, predictable **cash flows** (recurring revenue, low cyclicality)\n- **low capex** and working capital needs\n- a strong market position and pricing power\n- an unlevered or under-levered balance sheet today\n- a credible management team and clear improvement levers\n- realistic **exit routes** (strategic buyers, sponsors, IPO)',
        '**Finanziatori**: banche (revolving e term loan amortizzanti, spesso sindacati), investitori istituzionali e CLO (Term Loan B), investitori high yield e, sempre di più, **fondi di private credit** (unitranche, mezzanino).\n\n**Un buon candidato LBO** ha:\n- **flussi di cassa** stabili e prevedibili (ricavi ricorrenti, bassa ciclicità)\n- **capex** e fabbisogno di circolante contenuti\n- posizionamento forte e potere di prezzo\n- un bilancio oggi poco o per nulla indebitato\n- un management credibile e leve di miglioramento chiare\n- **vie d’uscita** realistiche (compratori industriali, sponsor, IPO)'
      )
    },
    {
      type: 'realworld',
      body: t(
        'For a bank, an LBO is a multi-product event: M&A advises the sponsor (buy-side) or seller (sell-side), **Leveraged Finance** underwrites and syndicates the debt, and sometimes the bank provides committed financing (“staple”) to all bidders in an auction. Software, healthcare services and business services are classic sponsor sectors because of recurring revenue and low capex.',
        'Per una banca un LBO coinvolge più prodotti: l’M&A assiste lo sponsor (buy-side) o il venditore (sell-side), il **Leveraged Finance** sottoscrive e sindaca il debito e talvolta la banca offre un finanziamento impegnato (“staple”) a tutti gli offerenti di un’asta. Software, servizi sanitari e servizi alle imprese sono settori classici per gli sponsor grazie a ricavi ricorrenti e capex contenuto.'
      )
    },
    { type: 'exercise', questionId: 'pe-lbo-q1' },
    { type: 'exercise', questionId: 'pe-lbo-q2' },
    {
      type: 'interview',
      question: t('Why does a PE firm use leverage in an LBO?', 'Perché una società di PE usa la leva in un LBO?'),
      answer: t(
        'Because it amplifies equity returns. Debt is cheaper than equity and, after tax, cheaper still because interest is generally deductible. Using debt means a smaller equity cheque for the same asset, so any increase in enterprise value — plus the debt repaid from free cash flow — accrues to a smaller equity base, raising both MOIC and IRR. The limit is risk: too much debt and a downturn can breach covenants or wipe out the equity, so sponsors size leverage to what the cash flows can safely support.',
        'Perché amplifica i rendimenti dell’equity. Il debito costa meno del capitale proprio e, al netto delle imposte, ancora meno perché gli interessi sono generalmente deducibili. Con il debito il ticket di equity è più piccolo per lo stesso asset, quindi ogni aumento dell’enterprise value — più il debito rimborsato con il free cash flow — va a una base di equity minore, aumentando MOIC e IRR. Il limite è il rischio: con troppo debito una recessione può far violare i covenant o azzerare l’equity, quindi gli sponsor dimensionano la leva su ciò che i flussi di cassa possono sostenere.'
      )
    },
    {
      type: 'mistakes',
      items: [
        t('Saying leverage “creates value” in itself. It redistributes risk and return; operating value comes from EBITDA and cash.', 'Dire che la leva “crea valore” di per sé. Ridistribuisce rischio e rendimento; il valore operativo deriva da EBITDA e cassa.'),
        t('Forgetting that interest reduces the cash available to repay debt.', 'Dimenticare che gli interessi riducono la cassa disponibile per rimborsare il debito.'),
        t('Picking a high-growth, cash-burning company as an ideal LBO candidate.', 'Indicare un’azienda ad alta crescita che brucia cassa come candidato LBO ideale.')
      ]
    },
    {
      type: 'summary',
      items: [
        t('LBO = acquisition funded mostly with debt serviced by the target’s cash flows.', 'LBO = acquisizione finanziata soprattutto con debito servito dai flussi di cassa del target.'),
        t('Leverage raises returns via a smaller equity base, debt paydown and the tax shield — and raises risk.', 'La leva aumenta i rendimenti con una base di equity minore, il rimborso del debito e lo scudo fiscale — e aumenta il rischio.'),
        t('Ideal targets: stable cash flow, low capex, strong position, clear levers, viable exits.', 'Target ideali: cassa stabile, capex basso, posizione forte, leve chiare, exit percorribili.')
      ]
    }
  ],
  questions: [
    {
      id: 'pe-lbo-q1',
      kind: 'numeric',
      topic: 'lbo-mechanics',
      difficulty: 2,
      objective: t('Compute MOIC for a levered deal.', 'Calcolare il MOIC di un deal a leva.'),
      prompt: t(
        'A sponsor buys a company for €600m with €400m of debt (ignore fees). At exit, EV is €800m and debt has been paid down to €250m. What is the MOIC (x)?',
        'Uno sponsor compra un’azienda per €600m con €400m di debito (ignora le commissioni). All’uscita l’EV è €800m e il debito è sceso a €250m. Qual è il MOIC (x)?'
      ),
      answer: 2.75,
      unit: 'x',
      verify: { fn: 'moic', args: [550, 200] },
      explanation: t(
        'Entry equity = 600 − 400 = 200. Exit equity = 800 − 250 = 550. MOIC = 550 / 200 = 2.75x. Using EV growth alone (800/600 = 1.33x) ignores leverage.',
        'Equity d’ingresso = 600 − 400 = 200. Equity d’uscita = 800 − 250 = 550. MOIC = 550 / 200 = 2,75x. Usare solo la crescita dell’EV (800/600 = 1,33x) ignora la leva.'
      )
    },
    {
      id: 'pe-lbo-q2',
      kind: 'multi',
      topic: 'lbo-candidates',
      difficulty: 1,
      objective: t('Identify good LBO candidate traits.', 'Riconoscere le caratteristiche di un buon candidato LBO.'),
      prompt: t('Which traits make a company a stronger LBO candidate? Select all that apply.', 'Quali caratteristiche rendono un’azienda un candidato LBO migliore? Seleziona tutte le risposte corrette.'),
      choices: [
        t('Predictable, recurring cash flows', 'Flussi di cassa prevedibili e ricorrenti'),
        t('Heavy, lumpy capex requirements', 'Capex elevato e irregolare'),
        t('Low existing leverage', 'Leva esistente contenuta'),
        t('Strong market position', 'Posizionamento di mercato forte'),
        t('Negative free cash flow for the next three years', 'Free cash flow negativo per i prossimi tre anni')
      ],
      correct: [0, 2, 3],
      explanation: t(
        'Debt is repaid from free cash flow, so predictability, low capex and room to add leverage matter. Heavy capex and negative FCF leave nothing to service debt.',
        'Il debito si rimborsa con il free cash flow: contano prevedibilità, capex basso e spazio per aggiungere leva. Capex elevato e FCF negativo non lasciano nulla per servire il debito.'
      )
    },
    {
      id: 'pe-lbo-q3',
      kind: 'mcq',
      topic: 'lbo-mechanics',
      difficulty: 2,
      objective: t('Understand the downside of leverage.', 'Comprendere il rovescio della leva.'),
      prompt: t(
        'Entry EV €1,000m, debt €700m. At exit EV is €900m and debt is still €700m. What happened to the equity?',
        'EV d’ingresso €1.000m, debito €700m. All’uscita l’EV è €900m e il debito è ancora €700m. Cosa è successo all’equity?'
      ),
      choices: [
        t('Fell 10%, like EV', 'È scesa del 10%, come l’EV'),
        t('Fell by one third (300 → 200)', 'È scesa di un terzo (300 → 200)'),
        t('Unchanged, because debt absorbs losses first', 'Invariata, perché il debito assorbe per primo le perdite'),
        t('Rose, thanks to the tax shield', 'È salita, grazie allo scudo fiscale')
      ],
      correct: 1,
      explanation: t(
        'Equity is the residual: 1,000 − 700 = 300 at entry, 900 − 700 = 200 at exit, a 33% loss on a 10% EV decline. Equity, not debt, absorbs losses first.',
        'L’equity è residuale: 1.000 − 700 = 300 all’ingresso, 900 − 700 = 200 all’uscita, una perdita del 33% a fronte di un calo del 10% dell’EV. È l’equity, non il debito, ad assorbire per prima le perdite.'
      )
    },
    {
      id: 'pe-lbo-q4',
      kind: 'numeric',
      topic: 'lbo-mechanics',
      difficulty: 2,
      objective: t('Convert MOIC to IRR for the levered example.', 'Convertire il MOIC in IRR nell’esempio a leva.'),
      prompt: t(
        'In the lesson example the levered deal returns 2.125x in 5 years. What is the IRR (%, one decimal)?',
        'Nell’esempio della lezione il deal a leva rende 2,125x in 5 anni. Qual è l’IRR (%, un decimale)?'
      ),
      answer: 16.3,
      unit: '%',
      tolerance: { abs: 0.1 },
      verify: { fn: 'product', args: [100, 0.16271101521949816] },
      explanation: t('IRR = 2.125^(1/5) − 1 ≈ 16.3%, versus 9.9% for 1.6x unlevered.', 'IRR = 2,125^(1/5) − 1 ≈ 16,3%, contro il 9,9% dell’1,6x senza leva.')
    }
  ],
  flashcards: [
    { id: 'fc-pe-lbo-1', topic: 'lbo-mechanics', front: t('Three ways leverage boosts LBO returns?', 'Tre modi in cui la leva aumenta i rendimenti di un LBO?'), back: t('Smaller equity cheque, debt paydown from FCF, interest tax shield.', 'Ticket di equity più piccolo, rimborso del debito con il FCF, scudo fiscale sugli interessi.') },
    { id: 'fc-pe-lbo-2', topic: 'lbo-candidates', front: t('Ideal LBO candidate in one line?', 'Candidato LBO ideale in una riga?'), back: t('Stable cash flows, low capex/NWC needs, strong position, low current leverage, clear levers, viable exits.', 'Cassa stabile, capex/circolante contenuti, posizione forte, poca leva attuale, leve chiare, exit percorribili.') },
    { id: 'fc-pe-lbo-3', topic: 'lbo-mechanics', front: t('Who provides LBO debt?', 'Chi fornisce il debito di un LBO?'), back: t('Banks (RCF, TLA), institutional investors/CLOs (TLB), high-yield investors, private credit funds (unitranche, mezz).', 'Banche (RCF, TLA), investitori istituzionali/CLO (TLB), investitori high yield, fondi di private credit (unitranche, mezzanino).') },
    { id: 'fc-pe-lbo-4', topic: 'lbo-mechanics', front: t('Italian/EU limit on interest deductibility?', 'Limite italiano/UE alla deducibilità degli interessi?'), back: t('Net interest deductible up to 30% of tax EBITDA (ATAD; art. 96 TUIR in Italy), with carry-forward rules.', 'Interessi netti deducibili fino al 30% del ROL/EBITDA fiscale (ATAD; art. 96 TUIR in Italia), con regole di riporto.') }
  ],
  sources: [
    { label: 'Council Directive (EU) 2016/1164 (ATAD), art. 4 — interest limitation rule', url: 'https://eur-lex.europa.eu/eli/dir/2016/1164/oj' }
  ]
};

const peSourcesUses: Lesson = {
  id: 'pe-sources-uses',
  academyId: 'private-equity',
  moduleId: 'P3',
  mode: 'quick',
  minutes: 9,
  difficulty: 2,
  reviewed: R,
  objective: t(
    'Build a sources and uses table for a buyout and solve for the sponsor equity cheque.',
    'Costruire la tabella fonti e impieghi di un buyout e ricavare il ticket di equity dello sponsor.'
  ),
  screens: [
    {
      type: 'intuition',
      title: t('Every euro spent must come from somewhere', 'Ogni euro speso deve arrivare da qualche parte'),
      body: t(
        'Sources & Uses is the deal’s cash budget at closing. On the right, **uses**: what the money is spent on. On the left, **sources**: where it comes from. The two columns must be equal.\n\nIn an LBO the sponsor’s equity is almost always the **plug**: debt is sized on EBITDA, and equity fills whatever is left.',
        'Fonti e impieghi è il budget di cassa del deal al closing. Da un lato gli **impieghi**: come si spende il denaro. Dall’altro le **fonti**: da dove arriva. Le due colonne devono coincidere.\n\nIn un LBO l’equity dello sponsor è quasi sempre il **plug**: il debito si dimensiona sull’EBITDA e l’equity copre la differenza.'
      )
    },
    {
      type: 'technical',
      title: t('Typical lines', 'Le voci tipiche'),
      body: t(
        '**Uses**\n- Purchase of equity (price paid to the sellers)\n- Refinancing of the target’s existing debt (net of cash acquired, if cash-free/debt-free)\n- Transaction fees (M&A advisers, legal, diligence)\n- Financing fees (arrangement / underwriting fees on new debt)\n- Sometimes: cash to balance sheet, change-of-control costs\n\n**Sources**\n- New debt tranches (revolver drawn at close, term loans, bonds, mezzanine)\n- Rollover equity from management or sellers\n- Sponsor equity (the plug)\n\nPurchase equity + refinanced net debt = **enterprise value** paid.',
        '**Impieghi**\n- Acquisto dell’equity (prezzo pagato ai venditori)\n- Rifinanziamento del debito esistente del target (al netto della cassa acquisita, se cash-free/debt-free)\n- Costi di transazione (advisor M&A, legali, due diligence)\n- Costi di finanziamento (arrangement / underwriting fee sul nuovo debito)\n- Talvolta: cassa a bilancio, costi di change of control\n\n**Fonti**\n- Nuove tranche di debito (revolving utilizzata al closing, term loan, bond, mezzanino)\n- Reinvestimento (rollover) di management o venditori\n- Equity dello sponsor (il plug)\n\nAcquisto dell’equity + PFN rifinanziata = **enterprise value** pagato.'
      )
    },
    {
      type: 'formula',
      formulas: [
        { name: t('Balance', 'Quadratura'), expr: 'Total sources = Total uses' },
        { name: t('Sponsor equity (plug)', 'Equity dello sponsor (plug)'), expr: 'Sponsor equity = Total uses − Total debt − Rollover equity' },
        { name: t('Entry leverage', 'Leva d’ingresso'), expr: 'Total leverage = Total debt / LTM EBITDA' }
      ],
      note: t(
        'Equity contribution % = (Sponsor + rollover equity) / Total sources. Lenders typically want a meaningful equity cushion beneath them.',
        'Contributo di equity % = (equity sponsor + rollover) / Totale fonti. I finanziatori vogliono di norma un cuscinetto di equity significativo.'
      )
    },
    {
      type: 'example',
      title: t('Buying Beta S.r.l.', 'L’acquisto di Beta S.r.l.'),
      body: t(
        'Beta has €80m LTM EBITDA and is bought at 9.0x (EV €720m), cash-free/debt-free. Existing net debt €200m is refinanced. Debt: 4.0x Term Loan B + 1.5x senior notes. Management rolls €25m.',
        'Beta ha €80m di EBITDA LTM ed è acquistata a 9,0x (EV €720m), cash-free/debt-free. La PFN esistente di €200m è rifinanziata. Debito: 4,0x Term Loan B + 1,5x senior notes. Il management reinveste €25m.'
      ),
      tables: [
        {
          caption: t('Uses (€m)', 'Impieghi (€m)'),
          headers: [t('Use', 'Impiego'), t('€m', '€m')],
          rows: [
            [t('Purchase of equity', 'Acquisto dell’equity'), '520'],
            [t('Refinance existing net debt', 'Rifinanziamento PFN esistente'), '200'],
            [t('Transaction fees', 'Costi di transazione'), '15'],
            [t('Financing fees', 'Costi di finanziamento'), '10'],
            [t('Total uses', 'Totale impieghi'), '745']
          ],
          totalRows: [4]
        },
        {
          caption: t('Sources (€m)', 'Fonti (€m)'),
          headers: [t('Source', 'Fonte'), t('€m', '€m')],
          rows: [
            [t('Term Loan B (4.0x)', 'Term Loan B (4,0x)'), '320'],
            [t('Senior notes (1.5x)', 'Senior notes (1,5x)'), '120'],
            [t('Management rollover', 'Rollover del management'), '25'],
            [t('Sponsor equity (plug)', 'Equity dello sponsor (plug)'), '280'],
            [t('Total sources', 'Totale fonti'), '745']
          ],
          totalRows: [4]
        }
      ]
    },
    {
      type: 'realworld',
      body: t(
        'Sources & Uses is the first page of almost every LBO model and of LevFin financing proposals. Analysts update it constantly as the price, leverage multiple or fee estimates move — and a sponsor’s IC will check that the equity cheque fits the fund’s concentration limits (or needs co-investment).',
        'Fonti e impieghi è la prima pagina di quasi ogni modello LBO e delle proposte di finanziamento del LevFin. Gli analyst la aggiornano continuamente quando cambiano prezzo, multiplo di leva o stime dei costi — e l’IC di uno sponsor verifica che il ticket di equity rientri nei limiti di concentrazione del fondo (o richieda un co-investimento).'
      )
    },
    { type: 'exercise', questionId: 'pe-su-q1' },
    { type: 'exercise', questionId: 'pe-su-q2' },
    {
      type: 'interview',
      question: t('How do you figure out how much equity a sponsor has to put in?', 'Come si calcola quanta equity deve investire uno sponsor?'),
      answer: t(
        'Build sources and uses. Uses are the purchase price of the equity, refinancing of existing debt, and transaction and financing fees. On the sources side, size the debt on EBITDA — say 5–6x depending on the credit and the market — add any management or seller rollover, and the sponsor equity is the plug that makes sources equal uses.',
        'Si costruisce la tabella fonti e impieghi. Gli impieghi sono il prezzo dell’equity, il rifinanziamento del debito esistente e i costi di transazione e finanziamento. Tra le fonti si dimensiona il debito sull’EBITDA — ad esempio 5–6x, a seconda del credito e del mercato — si aggiunge l’eventuale rollover di management o venditori, e l’equity dello sponsor è il plug che fa quadrare fonti e impieghi.'
      )
    },
    {
      type: 'mistakes',
      items: [
        t('Forgetting to refinance the target’s existing debt — it usually has change-of-control provisions.', 'Dimenticare di rifinanziare il debito esistente del target — di solito prevede clausole di change of control.'),
        t('Leaving out fees, which understates the equity needed.', 'Omettere i costi, sottostimando l’equity necessaria.'),
        t('Sizing debt as a % of price rather than as a multiple of EBITDA (lenders think in EBITDA turns).', 'Dimensionare il debito come % del prezzo anziché come multiplo dell’EBITDA (i finanziatori ragionano in turni di EBITDA).')
      ]
    },
    {
      type: 'summary',
      items: [
        t('Uses: equity purchase, debt refinancing, fees. Sources: debt, rollover, sponsor equity.', 'Impieghi: acquisto dell’equity, rifinanziamento, costi. Fonti: debito, rollover, equity sponsor.'),
        t('Debt is sized on EBITDA; sponsor equity is the plug.', 'Il debito si dimensiona sull’EBITDA; l’equity dello sponsor è il plug.'),
        t('Purchase equity + refinanced net debt = EV.', 'Acquisto dell’equity + PFN rifinanziata = EV.')
      ]
    }
  ],
  questions: [
    {
      id: 'pe-su-q1',
      kind: 'grid',
      topic: 'sources-uses',
      difficulty: 2,
      objective: t('Complete a sources and uses table.', 'Completare una tabella fonti e impieghi.'),
      prompt: t(
        'GammaCo: LTM EBITDA €60m, bought at 8.0x EV, cash-free/debt-free; existing net debt €150m refinanced; fees €18m; debt 5.0x EBITDA; no rollover. Fill in the blanks (€m).',
        'GammaCo: EBITDA LTM €60m, acquistata a 8,0x EV, cash-free/debt-free; PFN esistente di €150m rifinanziata; costi €18m; debito 5,0x EBITDA; nessun rollover. Completa le celle (€m).'
      ),
      columns: [t('Line', 'Voce'), t('€m', '€m')],
      rows: [
        { label: t('Enterprise value (8.0 × 60)', 'Enterprise value (8,0 × 60)'), cells: [{ answer: 480, verify: { fn: 'product', args: [8, 60] } }] },
        { label: t('Purchase of equity (EV − net debt)', 'Acquisto dell’equity (EV − PFN)'), cells: [{ answer: 330, verify: { fn: 'diff', args: [480, 150] } }] },
        { label: t('Refinance net debt', 'Rifinanziamento PFN'), cells: [150] },
        { label: t('Fees', 'Costi'), cells: [18] },
        { label: t('Total uses', 'Totale impieghi'), cells: [{ answer: 498, verify: { fn: 'sum', args: [330, 150, 18] } }] },
        { label: t('New debt (5.0x)', 'Nuovo debito (5,0x)'), cells: [{ answer: 300, verify: { fn: 'product', args: [5, 60] } }] },
        { label: t('Sponsor equity (plug)', 'Equity dello sponsor (plug)'), cells: [{ answer: 198, verify: { fn: 'diff', args: [498, 300] } }] }
      ],
      unit: '€m',
      explanation: t(
        'EV 480 = 330 to sellers + 150 to refinance debt. Add 18 of fees: uses 498. Debt 300; equity plug 198 (≈40% of sources).',
        'EV 480 = 330 ai venditori + 150 per rifinanziare il debito. Più 18 di costi: impieghi 498. Debito 300; plug di equity 198 (≈40% delle fonti).'
      )
    },
    {
      id: 'pe-su-q2',
      kind: 'numeric',
      topic: 'sources-uses',
      difficulty: 1,
      objective: t('Compute entry leverage.', 'Calcolare la leva d’ingresso.'),
      prompt: t('In the Beta example, what is total entry leverage (debt / EBITDA, x)?', 'Nell’esempio di Beta, qual è la leva totale d’ingresso (debito / EBITDA, x)?'),
      answer: 5.5,
      unit: 'x',
      verify: { fn: 'ratio', args: [440, 80] },
      explanation: t('Total debt = 320 + 120 = 440; 440 / 80 = 5.5x.', 'Debito totale = 320 + 120 = 440; 440 / 80 = 5,5x.')
    },
    {
      id: 'pe-su-q3',
      kind: 'numeric',
      topic: 'sources-uses',
      difficulty: 2,
      objective: t('Compute the equity contribution percentage.', 'Calcolare la percentuale di contributo di equity.'),
      prompt: t('In the Beta example, what share of total sources is equity (sponsor + rollover), in %?', 'Nell’esempio di Beta, quale quota delle fonti totali è equity (sponsor + rollover), in %?'),
      answer: 40.9,
      unit: '%',
      tolerance: { abs: 0.1 },
      verify: { fn: 'product', args: [100, 305, 1 / 745] },
      explanation: t('(280 + 25) / 745 = 40.9%. Using only sponsor equity (37.6%) ignores the rollover, which is equity too.', '(280 + 25) / 745 = 40,9%. Usare solo l’equity dello sponsor (37,6%) ignora il rollover, che è anch’esso equity.')
    },
    {
      id: 'pe-su-q4',
      kind: 'mcq',
      topic: 'sources-uses',
      difficulty: 2,
      objective: t('Understand the effect of fees on the equity plug.', 'Comprendere l’effetto dei costi sul plug di equity.'),
      prompt: t('Financing fees rise by €5m while debt stays fixed. What happens?', 'I costi di finanziamento salgono di €5m mentre il debito resta invariato. Cosa succede?'),
      choices: [
        t('Debt rises by €5m automatically', 'Il debito sale automaticamente di €5m'),
        t('Purchase price falls by €5m', 'Il prezzo d’acquisto scende di €5m'),
        t('Sponsor equity rises by €5m', 'L’equity dello sponsor sale di €5m'),
        t('Nothing — fees are paid by the target after closing', 'Nulla — i costi li paga il target dopo il closing')
      ],
      correct: 2,
      explanation: t('Uses rise by 5; with debt fixed, the plug (sponsor equity) absorbs it. This also slightly lowers MOIC.', 'Gli impieghi salgono di 5; con debito fisso, il plug (equity dello sponsor) lo assorbe. Questo riduce anche leggermente il MOIC.')
    }
  ],
  flashcards: [
    { id: 'fc-pe-su-1', topic: 'sources-uses', front: t('Main uses in an LBO?', 'Principali impieghi in un LBO?'), back: t('Equity purchase price, refinancing existing debt, transaction fees, financing fees.', 'Prezzo dell’equity, rifinanziamento del debito esistente, costi di transazione e di finanziamento.') },
    { id: 'fc-pe-su-2', topic: 'sources-uses', front: t('Which source is usually the plug?', 'Quale fonte è di solito il plug?'), back: t('Sponsor equity.', 'L’equity dello sponsor.') },
    { id: 'fc-pe-su-3', topic: 'sources-uses', front: t('Link between purchase equity and EV?', 'Legame tra prezzo dell’equity ed EV?'), back: t('EV = equity purchase price + net debt assumed/refinanced.', 'EV = prezzo dell’equity + PFN assunta/rifinanziata.') },
    { id: 'fc-pe-su-4', topic: 'sources-uses', front: t('What is rollover equity?', 'Cos’è il rollover?'), back: t('Equity reinvested by sellers or management into the new structure instead of being cashed out.', 'Equity reinvestita da venditori o management nella nuova struttura invece di essere monetizzata.') }
  ]
};

const peDebtTranches: Lesson = {
  id: 'pe-debt-tranches',
  academyId: 'private-equity',
  moduleId: 'P3',
  mode: 'deep',
  minutes: 14,
  difficulty: 2,
  reviewed: R,
  objective: t(
    'Compare LBO debt instruments by seniority, pricing, amortisation and covenants, and model PIK accrual and leverage.',
    'Confrontare gli strumenti di debito di un LBO per seniority, pricing, ammortamento e covenant, e modellare la capitalizzazione PIK e la leva.'
  ),
  screens: [
    {
      type: 'intuition',
      title: t('A queue at the exit', 'Una coda all’uscita'),
      body: t(
        'Think of the capital structure as a **queue** for the company’s value if things go wrong. Lenders at the front (secured, senior) get paid first and accept lower interest. Those further back (subordinated, unsecured, PIK) are paid only if value remains — so they demand higher returns. Equity is at the very back.',
        'Pensa alla struttura del capitale come a una **coda** per il valore dell’azienda se le cose vanno male. I finanziatori in testa (garantiti, senior) vengono pagati per primi e accettano tassi più bassi. Chi sta più indietro (subordinato, non garantito, PIK) viene pagato solo se resta valore — e quindi chiede rendimenti più alti. L’equity è in fondo alla coda.'
      )
    },
    {
      type: 'technical',
      title: t('Senior bank debt', 'Debito bancario senior'),
      body: t(
        '- **Revolving credit facility (RCF)**: a credit line for working capital and liquidity; drawn and repaid as needed; commitment fee on undrawn amounts.\n- **Term Loan A (TLA)**: held by banks; amortises meaningfully over ~5–6 years; typically maintenance covenants.\n- **Term Loan B (TLB)**: sold to institutional investors and CLOs; minimal amortisation (in the US, typically 1% p.a.) with a bullet at maturity (~7 years); usually **covenant-lite** (no maintenance covenants).\n\nAll are **senior secured** (share/asset pledges) and pay a **floating rate**: a spread over a benchmark such as SOFR or EURIBOR, often with a floor.',
        '- **Linea revolving (RCF)**: linea di credito per circolante e liquidità; utilizzata e rimborsata secondo necessità; commitment fee sulla parte non utilizzata.\n- **Term Loan A (TLA)**: detenuto dalle banche; si ammortizza in modo significativo in ~5–6 anni; di solito con covenant di mantenimento.\n- **Term Loan B (TLB)**: collocato a investitori istituzionali e CLO; ammortamento minimo (negli USA tipicamente 1% annuo) con rimborso bullet a scadenza (~7 anni); di solito **covenant-lite** (senza covenant di mantenimento).\n\nTutti sono **senior secured** (pegno su azioni/attivi) e pagano un **tasso variabile**: uno spread su un benchmark come SOFR o EURIBOR, spesso con floor.'
      )
    },
    {
      type: 'technical',
      title: t('Bonds, private credit, mezzanine, PIK', 'Bond, private credit, mezzanino, PIK'),
      body: t(
        '- **High-yield bonds** (senior secured or senior unsecured notes): fixed coupon, ~7–8 year bullet, **non-call period** then call premiums; **incurrence covenants** only (tested when the company takes an action such as raising debt or paying dividends).\n- **Unitranche** (private credit): one loan combining senior and junior risk at a single blended price; held by one or a few direct lenders; fast and certain, but more expensive than syndicated TLB.\n- **Mezzanine**: subordinated, higher coupon (cash + PIK), sometimes with warrants.\n- **PIK (payment-in-kind)**: interest is not paid in cash but **added to principal**, compounding until maturity; often issued at HoldCo level, structurally subordinated.',
        '- **Bond high yield** (senior secured o senior unsecured notes): cedola fissa, bullet a ~7–8 anni, **periodo di non richiamabilità** e poi premi di rimborso anticipato; solo **covenant di incurrence** (testati quando l’azienda compie un’azione, come indebitarsi o pagare dividendi).\n- **Unitranche** (private credit): un unico finanziamento che combina rischio senior e junior a un prezzo unico; detenuto da uno o pochi direct lender; rapido e certo, ma più caro del TLB sindacato.\n- **Mezzanino**: subordinato, cedola più alta (cash + PIK), talvolta con warrant.\n- **PIK (payment-in-kind)**: gli interessi non si pagano in contanti ma si **aggiungono al capitale**, capitalizzandosi fino a scadenza; spesso emesso a livello HoldCo, strutturalmente subordinato.'
      )
    },
    {
      type: 'technical',
      title: t('Side by side', 'A confronto'),
      body: t('Indicative features — exact terms depend on market conditions and the credit.', 'Caratteristiche indicative — i termini esatti dipendono dal mercato e dal merito di credito.'),
      table: {
        headers: [t('Tranche', 'Tranche'), t('Rank', 'Rango'), t('Rate', 'Tasso'), t('Amortisation', 'Ammortamento'), t('Covenants', 'Covenant')],
        rows: [
          ['RCF / TLA', t('Senior secured', 'Senior secured'), t('Floating, lowest', 'Variabile, il più basso'), t('Revolving / significant', 'Revolving / significativo'), t('Maintenance', 'Mantenimento')],
          ['TLB', t('Senior secured', 'Senior secured'), t('Floating', 'Variabile'), t('~1% p.a. + bullet', '~1% annuo + bullet'), t('Cov-lite', 'Cov-lite')],
          [t('HY bond', 'Bond HY'), t('Senior (sec./unsec.)', 'Senior (gar./non gar.)'), t('Fixed', 'Fisso'), t('Bullet', 'Bullet'), t('Incurrence', 'Incurrence')],
          ['Unitranche', t('Senior secured', 'Senior secured'), t('Floating, blended', 'Variabile, medio'), t('Minimal + bullet', 'Minimo + bullet'), t('Usually 1 maintenance', 'Di solito 1 di mantenimento')],
          [t('Mezz / PIK', 'Mezz / PIK'), t('Subordinated', 'Subordinato'), t('Highest, often PIK', 'Il più alto, spesso PIK'), t('Bullet', 'Bullet'), t('Light', 'Leggeri')]
        ]
      }
    },
    {
      type: 'formula',
      formulas: [
        { name: t('PIK balance', 'Saldo PIK'), expr: 'PIK balance(n) = Principal × (1 + PIK rate)^n' },
        { name: t('Net leverage', 'Leva netta'), expr: 'Net leverage = (Total debt − Cash) / EBITDA' },
        { name: t('Interest coverage', 'Copertura degli interessi'), expr: 'Interest coverage = EBITDA / Cash interest' }
      ],
      note: t(
        'Typical maintenance covenants test net leverage (maximum) and interest coverage (minimum) each quarter.',
        'I covenant di mantenimento tipici testano ogni trimestre la leva netta (massima) e la copertura degli interessi (minima).'
      )
    },
    {
      type: 'example',
      title: t('Paydown with a cash sweep', 'Rimborso con cash sweep'),
      body: t(
        'TargetCo has €400m TLB (1% mandatory amortisation) and €150m senior notes. Free cash flow after interest of €50m per year is first used for mandatory amortisation, then swept to prepay the TLB. The notes are untouched (non-call, bullet).',
        'TargetCo ha €400m di TLB (ammortamento obbligatorio 1%) e €150m di senior notes. Il free cash flow dopo interessi di €50m l’anno serve prima all’ammortamento obbligatorio, poi viene destinato (sweep) al rimborso anticipato del TLB. Le notes restano invariate (non call, bullet).'
      ),
      table: {
        headers: [t('€m', '€m'), t('Year 1', 'Anno 1'), t('Year 2', 'Anno 2'), t('Year 3', 'Anno 3')],
        rows: [
          [t('Opening TLB', 'TLB iniziale'), '400', '350', '300'],
          [t('Mandatory amortisation (1% of original)', 'Ammortamento obbligatorio (1% dell’originale)'), '(4)', '(4)', '(4)'],
          [t('Cash sweep (FCF 50 − 4)', 'Cash sweep (FCF 50 − 4)'), '(46)', '(46)', '(46)'],
          [t('Closing TLB', 'TLB finale'), '350', '300', '250'],
          [t('Senior notes', 'Senior notes'), '150', '150', '150'],
          [t('Total debt', 'Debito totale'), '500', '450', '400']
        ],
        totalRows: [5]
      }
    },
    {
      type: 'realworld',
      body: t(
        'Since the 2010s, **private credit** has taken a large share of mid-market LBO financing in Europe and the US, often via unitranche, competing directly with bank-led syndicated loans. In large deals, banks underwrite a TLB and bonds and syndicate them; analysts in LevFin build the **debt capacity** analysis, covenant headroom and pricing comps.',
        'Dagli anni 2010 il **private credit** ha conquistato una quota rilevante del finanziamento degli LBO mid-market in Europa e negli USA, spesso tramite unitranche, in concorrenza diretta con i prestiti sindacati delle banche. Nei grandi deal le banche sottoscrivono TLB e bond e li sindacano; gli analyst del LevFin costruiscono l’analisi di **capacità di debito**, il margine sui covenant e i comparabili di pricing.'
      )
    },
    { type: 'exercise', questionId: 'pe-debt-q1' },
    { type: 'exercise', questionId: 'pe-debt-q2' },
    { type: 'exercise', questionId: 'pe-debt-q3' },
    {
      type: 'interview',
      question: t('What is the difference between a Term Loan B and a high-yield bond?', 'Qual è la differenza tra un Term Loan B e un bond high yield?'),
      answer: t(
        'Both are institutional debt with bullet maturities, but a TLB is a senior secured loan with a floating rate — spread over SOFR or EURIBOR — minimal amortisation and usually prepayable at par or with a small soft-call premium, typically covenant-lite. A high-yield bond pays a fixed coupon, sits pari passu or below the loans depending on security, has a non-call period followed by call premiums, and only incurrence covenants. Loans are cheaper and more flexible to repay; bonds lock in a fixed rate for longer.',
        'Entrambi sono debito istituzionale con rimborso bullet, ma il TLB è un prestito senior secured a tasso variabile — spread su SOFR o EURIBOR — con ammortamento minimo, di solito rimborsabile alla pari o con un piccolo premio soft-call, tipicamente covenant-lite. Il bond high yield paga una cedola fissa, è pari passu o subordinato ai prestiti a seconda delle garanzie, ha un periodo di non richiamabilità seguito da premi di rimborso e solo covenant di incurrence. I prestiti costano meno e si rimborsano con più flessibilità; i bond fissano il tasso più a lungo.'
      )
    },
    {
      type: 'mistakes',
      items: [
        t('Assuming bonds can be repaid with the cash sweep. They are usually non-call for several years.', 'Pensare che i bond si possano rimborsare con il cash sweep. Di solito non sono richiamabili per alcuni anni.'),
        t('Forgetting PIK interest compounds: it increases debt even when no cash is paid.', 'Dimenticare che gli interessi PIK si capitalizzano: aumentano il debito anche se non si paga cassa.'),
        t('Confusing maintenance covenants (tested periodically) with incurrence covenants (tested on actions).', 'Confondere i covenant di mantenimento (testati periodicamente) con quelli di incurrence (testati al compimento di azioni).')
      ]
    },
    {
      type: 'summary',
      items: [
        t('Seniority drives pricing: secured bank debt cheapest, PIK/mezz most expensive.', 'La seniority determina il pricing: il debito bancario garantito costa meno, PIK/mezzanino di più.'),
        t('TLA amortises; TLB ~1% + bullet; bonds bullet with call protection.', 'Il TLA si ammortizza; TLB ~1% + bullet; bond bullet con protezione dal rimborso anticipato.'),
        t('Covenants: maintenance (bank, unitranche) vs incurrence (HY, cov-lite TLB).', 'Covenant: di mantenimento (banche, unitranche) vs di incurrence (HY, TLB cov-lite).')
      ]
    }
  ],
  questions: [
    {
      id: 'pe-debt-q1',
      kind: 'numeric',
      topic: 'lbo-debt',
      difficulty: 2,
      objective: t('Compute a compounding PIK balance.', 'Calcolare il saldo di un PIK che si capitalizza.'),
      prompt: t('€100m of PIK notes accrue 12% per year, compounded annually. What is the balance after 3 years (€m)?', '€100m di PIK notes maturano il 12% annuo, capitalizzato annualmente. Qual è il saldo dopo 3 anni (€m)?'),
      answer: 140.49,
      unit: '€m',
      tolerance: { abs: 0.05 },
      verify: { fn: 'fv', args: [100, 0.12, 3] },
      explanation: t('100 × 1.12³ = 140.49. Simple interest (136) understates the balance because PIK interest itself accrues interest.', '100 × 1,12³ = 140,49. L’interesse semplice (136) sottostima il saldo perché anche gli interessi PIK maturano interessi.')
    },
    {
      id: 'pe-debt-q2',
      kind: 'numeric',
      topic: 'lbo-debt',
      difficulty: 1,
      objective: t('Compute net leverage.', 'Calcolare la leva netta.'),
      prompt: t('Total debt €500m, cash €50m, EBITDA €100m. What is net leverage (x)?', 'Debito totale €500m, cassa €50m, EBITDA €100m. Qual è la leva netta (x)?'),
      answer: 4.5,
      unit: 'x',
      verify: { fn: 'netLeverage', args: [500, 50, 100] },
      explanation: t('(500 − 50) / 100 = 4.5x. Gross leverage would be 5.0x.', '(500 − 50) / 100 = 4,5x. La leva lorda sarebbe 5,0x.')
    },
    {
      id: 'pe-debt-q3',
      kind: 'mcq',
      topic: 'lbo-debt',
      difficulty: 2,
      objective: t('Rank tranches by seniority.', 'Ordinare le tranche per seniority.'),
      prompt: t('Which tranche is typically repaid first in a liquidation?', 'Quale tranche viene tipicamente rimborsata per prima in una liquidazione?'),
      choices: [
        t('HoldCo PIK notes', 'PIK notes della HoldCo'),
        t('Senior unsecured notes', 'Senior unsecured notes'),
        t('Mezzanine', 'Mezzanino'),
        t('Senior secured Term Loan B / RCF', 'Term Loan B / RCF senior secured')
      ],
      correct: 3,
      explanation: t(
        'Secured senior loans have first claim on pledged assets. Unsecured notes rank behind on collateral, mezzanine is contractually subordinated, and HoldCo PIK is structurally subordinated to all OpCo debt.',
        'I prestiti senior garantiti hanno priorità sugli attivi in pegno. Le notes non garantite vengono dopo sul collaterale, il mezzanino è contrattualmente subordinato e il PIK della HoldCo è strutturalmente subordinato a tutto il debito della OpCo.'
      )
    },
    {
      id: 'pe-debt-q4',
      kind: 'numeric',
      topic: 'lbo-debt',
      difficulty: 1,
      objective: t('Compute interest coverage.', 'Calcolare la copertura degli interessi.'),
      prompt: t('EBITDA €120m, cash interest €40m. What is interest coverage (x)?', 'EBITDA €120m, interessi monetari €40m. Qual è la copertura degli interessi (x)?'),
      answer: 3,
      unit: 'x',
      verify: { fn: 'interestCoverage', args: [120, 40] },
      explanation: t('120 / 40 = 3.0x. PIK interest is excluded from cash interest because it is not paid in cash.', '120 / 40 = 3,0x. Gli interessi PIK sono esclusi dagli interessi monetari perché non si pagano in contanti.')
    },
    {
      id: 'pe-debt-q5',
      kind: 'multi',
      topic: 'lbo-debt',
      difficulty: 2,
      objective: t('Recognise typical features of a Term Loan B.', 'Riconoscere le caratteristiche tipiche di un Term Loan B.'),
      prompt: t('Which are typical TLB features? Select all that apply.', 'Quali sono caratteristiche tipiche di un TLB? Seleziona tutte le risposte corrette.'),
      choices: [
        t('Floating rate over a benchmark', 'Tasso variabile su un benchmark'),
        t('Minimal amortisation with a bullet', 'Ammortamento minimo con bullet'),
        t('Fixed coupon with a long non-call period', 'Cedola fissa con lungo periodo di non richiamabilità'),
        t('Often covenant-lite', 'Spesso covenant-lite'),
        t('Unsecured and subordinated to bonds', 'Non garantito e subordinato ai bond')
      ],
      correct: [0, 1, 3],
      explanation: t('A TLB is floating, senior secured, minimally amortising and often cov-lite. Fixed coupons with non-call periods describe high-yield bonds.', 'Il TLB è a tasso variabile, senior secured, con ammortamento minimo e spesso cov-lite. Cedola fissa e non richiamabilità descrivono i bond high yield.')
    }
  ],
  flashcards: [
    { id: 'fc-pe-debt-1', topic: 'lbo-debt', front: t('TLA vs TLB?', 'TLA vs TLB?'), back: t('TLA: bank-held, significant amortisation, maintenance covenants. TLB: institutional, ~1% amortisation + bullet, often cov-lite.', 'TLA: detenuto da banche, ammortamento significativo, covenant di mantenimento. TLB: istituzionale, ~1% + bullet, spesso cov-lite.') },
    { id: 'fc-pe-debt-2', topic: 'lbo-debt', front: t('What is PIK interest?', 'Cosa sono gli interessi PIK?'), back: t('Interest paid “in kind”: added to principal and compounded, no cash paid until maturity.', 'Interessi pagati “in natura”: aggiunti al capitale e capitalizzati, nessuna cassa fino a scadenza.') },
    { id: 'fc-pe-debt-3', topic: 'lbo-debt', front: t('What is unitranche?', 'Cos’è un unitranche?'), back: t('A single private-credit loan blending senior and junior risk at one price.', 'Un unico finanziamento di private credit che combina rischio senior e junior a un solo prezzo.') },
    { id: 'fc-pe-debt-4', topic: 'lbo-debt', front: t('Maintenance vs incurrence covenant?', 'Covenant di mantenimento vs di incurrence?'), back: t('Maintenance: tested periodically (e.g. quarterly leverage). Incurrence: tested only when taking an action (new debt, dividends).', 'Mantenimento: testato periodicamente (es. leva trimestrale). Incurrence: testato solo al compimento di un’azione (nuovo debito, dividendi).') },
    { id: 'fc-pe-debt-5', topic: 'lbo-debt', front: t('What is a cash sweep?', 'Cos’è un cash sweep?'), back: t('Mandatory use of excess free cash flow to prepay (usually senior) debt.', 'Destinazione obbligatoria del free cash flow in eccesso al rimborso anticipato del debito (di solito senior).') }
  ]
};

const peReturns: Lesson = {
  id: 'pe-returns',
  academyId: 'private-equity',
  moduleId: 'P3',
  mode: 'quick',
  minutes: 10,
  difficulty: 2,
  reviewed: R,
  objective: t(
    'Calculate MOIC and IRR, explain when they diverge, and use rules of thumb to estimate IRR quickly.',
    'Calcolare MOIC e IRR, spiegare quando divergono e usare regole pratiche per stimare rapidamente l’IRR.'
  ),
  screens: [
    {
      type: 'intuition',
      title: t('How much, and how fast', 'Quanto, e quanto in fretta'),
      body: t(
        '**MOIC** (multiple on invested capital) answers *how much*: did we turn €100 into €250? **IRR** answers *how fast*: the annualised return that accounts for timing.\n\nDoubling your money in 2 years is excellent; doubling it in 10 years is mediocre. Same MOIC, very different IRR. Sponsors care about both — LPs can’t eat IRR, but they also have a cost of capital.',
        'Il **MOIC** (multiple on invested capital) risponde a *quanto*: abbiamo trasformato €100 in €250? L’**IRR** risponde a *quanto in fretta*: il rendimento annualizzato che tiene conto dei tempi.\n\nRaddoppiare il capitale in 2 anni è eccellente; raddoppiarlo in 10 è mediocre. Stesso MOIC, IRR molto diverso. Gli sponsor guardano a entrambi — con l’IRR non si pagano le pensioni, ma anche gli LP hanno un costo del capitale.'
      )
    },
    {
      type: 'formula',
      formulas: [
        { name: t('MOIC', 'MOIC'), expr: 'MOIC = Total cash returned to equity / Total equity invested' },
        {
          name: t('IRR (single entry and exit)', 'IRR (un ingresso e un’uscita)'),
          expr: 'IRR = MOIC^(1/n) − 1',
          vars: [{ sym: 'n', desc: t('Holding period in years', 'Periodo di detenzione in anni') }]
        },
        { name: t('IRR (general)', 'IRR (generale)'), expr: 'Σ CF_t / (1 + IRR)^t = 0' }
      ],
      note: t(
        'With interim cash flows (dividend recaps, partial exits), use the general IRR: earlier cash raises IRR even if MOIC is unchanged.',
        'Con flussi intermedi (dividend recap, exit parziali) si usa l’IRR generale: la cassa ricevuta prima aumenta l’IRR anche a parità di MOIC.'
      )
    },
    {
      type: 'technical',
      title: t('Rules of thumb to memorise', 'Regole pratiche da memorizzare'),
      body: t(
        'Interviewers expect you to estimate IRR without a calculator:',
        'Ai colloqui ci si aspetta che tu stimi l’IRR senza calcolatrice:'
      ),
      table: {
        headers: [t('MOIC', 'MOIC'), t('3 years', '3 anni'), t('5 years', '5 anni')],
        rows: [
          ['1.5x', '~14%', '~8%'],
          ['2.0x', '~26%', '~15%'],
          ['2.5x', '~36%', '~20%'],
          ['3.0x', '~44%', '~25%']
        ]
      }
    },
    {
      type: 'example',
      title: t('Same MOIC, different IRR', 'Stesso MOIC, IRR diverso'),
      body: t(
        'Sponsor invests €100m at t = 0. Deal A: one exit of €240m in year 5. Deal B: a €40m dividend recap in year 2 and a €200m exit in year 5. Both return €240m in total (2.4x).',
        'Lo sponsor investe €100m a t = 0. Deal A: un’unica exit di €240m all’anno 5. Deal B: un dividend recap di €40m all’anno 2 e un’exit di €200m all’anno 5. Entrambi restituiscono €240m in totale (2,4x).'
      ),
      table: {
        headers: [t('€m', '€m'), t('Y0', 'A0'), t('Y1', 'A1'), t('Y2', 'A2'), t('Y3', 'A3'), t('Y4', 'A4'), t('Y5', 'A5'), t('IRR', 'IRR')],
        rows: [
          [t('Deal A', 'Deal A'), '(100)', '0', '0', '0', '0', '240', '19.1%'],
          [t('Deal B', 'Deal B'), '(100)', '0', '40', '0', '0', '200', '22.3%']
        ]
      }
    },
    {
      type: 'realworld',
      body: t(
        'Buyout funds often target gross deal returns of roughly 2.0–3.0x and 20–25% IRR, though targets vary with strategy and the rate environment. Because IRR rewards speed, a GP may favour early partial exits; because MOIC rewards total value, LPs also scrutinise multiples. Fund reports show both, gross and net of fees and carry.',
        'I fondi buyout puntano spesso a rendimenti lordi per deal di circa 2,0–3,0x e 20–25% di IRR, anche se gli obiettivi variano con strategia e livello dei tassi. Poiché l’IRR premia la velocità, un GP può privilegiare exit parziali anticipate; poiché il MOIC premia il valore totale, gli LP guardano anche ai multipli. I report dei fondi mostrano entrambi, lordi e netti di commissioni e carry.'
      )
    },
    { type: 'exercise', questionId: 'pe-ret-q1' },
    { type: 'exercise', questionId: 'pe-ret-q2' },
    { type: 'exercise', questionId: 'pe-ret-q3' },
    {
      type: 'interview',
      question: t('A deal returns 3x in 5 years. What is the IRR, roughly? And would you rather have 3x in 5 years or 2x in 2 years?', 'Un deal rende 3x in 5 anni. Qual è l’IRR, all’incirca? E preferiresti 3x in 5 anni o 2x in 2 anni?'),
      answer: t(
        'About 25% — 3^(1/5) ≈ 1.246. 2x in 2 years is ~41% IRR, so it wins on IRR, but 3x in 5 years creates more absolute value. The answer depends on whether I can redeploy the capital from the 2-year deal at a similar return; if not, the 3x deal may be better for LPs. Many funds look at both, and LPs increasingly focus on MOIC and DPI rather than headline IRR.',
        'Circa il 25% — 3^(1/5) ≈ 1,246. 2x in 2 anni dà un IRR di ~41%, quindi vince sull’IRR, ma 3x in 5 anni crea più valore assoluto. Dipende da se posso reinvestire il capitale del deal a 2 anni a un rendimento simile; se no, il 3x può essere migliore per gli LP. Molti fondi guardano a entrambi, e gli LP si concentrano sempre più su MOIC e DPI più che sull’IRR di facciata.'
      )
    },
    {
      type: 'mistakes',
      items: [
        t('Spreading profit evenly over the years (3x in 5 years ≠ 40% p.a.). IRR compounds: use MOIC^(1/n) − 1.', 'Ripartire il profitto in modo lineare sugli anni (3x in 5 anni ≠ 40% annuo). L’IRR è composto: usa MOIC^(1/n) − 1.'),
        t('Ignoring interim distributions when computing IRR.', 'Ignorare le distribuzioni intermedie nel calcolo dell’IRR.'),
        t('Comparing gross deal IRR with net fund IRR.', 'Confrontare l’IRR lordo di un deal con l’IRR netto di un fondo.')
      ]
    },
    {
      type: 'summary',
      items: [
        t('MOIC = how much; IRR = how fast.', 'MOIC = quanto; IRR = quanto in fretta.'),
        t('2x/5y ≈ 15%, 2.5x/5y ≈ 20%, 3x/5y ≈ 25%; 2x/3y ≈ 26%.', '2x/5a ≈ 15%, 2,5x/5a ≈ 20%, 3x/5a ≈ 25%; 2x/3a ≈ 26%.'),
        t('Earlier cash raises IRR without changing MOIC.', 'La cassa anticipata aumenta l’IRR senza cambiare il MOIC.')
      ]
    }
  ],
  questions: [
    {
      id: 'pe-ret-q1',
      kind: 'numeric',
      topic: 'lbo-returns',
      difficulty: 1,
      objective: t('Compute MOIC.', 'Calcolare il MOIC.'),
      prompt: t('A sponsor invests €350m of equity and receives €1,050m at exit. What is the MOIC (x)?', 'Uno sponsor investe €350m di equity e incassa €1.050m all’uscita. Qual è il MOIC (x)?'),
      answer: 3,
      unit: 'x',
      verify: { fn: 'moic', args: [1050, 350] },
      explanation: t('1,050 / 350 = 3.0x. The profit multiple would be 2.0x — MOIC includes the return of capital.', '1.050 / 350 = 3,0x. Il multiplo del solo profitto sarebbe 2,0x — il MOIC include la restituzione del capitale.')
    },
    {
      id: 'pe-ret-q2',
      kind: 'numeric',
      topic: 'lbo-returns',
      difficulty: 2,
      objective: t('Convert MOIC to IRR.', 'Convertire il MOIC in IRR.'),
      prompt: t('That 3.0x is achieved over 5 years with no interim cash flows. What is the IRR (%, one decimal)?', 'Quel 3,0x si ottiene in 5 anni senza flussi intermedi. Qual è l’IRR (%, un decimale)?'),
      answer: 24.6,
      unit: '%',
      tolerance: { abs: 0.1 },
      verify: { fn: 'product', args: [100, 0.2457309396155174] },
      steps: [t('3^(1/5) = 1.2457', '3^(1/5) = 1,2457'), t('IRR = 1.2457 − 1 = 24.6%', 'IRR = 1,2457 − 1 = 24,6%')],
      explanation: t('IRR = 3^(0.2) − 1 ≈ 24.6% — the “3x in 5 years ≈ 25%” rule. 40% (= 200% / 5) wrongly ignores compounding.', 'IRR = 3^(0,2) − 1 ≈ 24,6% — la regola “3x in 5 anni ≈ 25%”. Il 40% (= 200% / 5) ignora erroneamente la capitalizzazione.')
    },
    {
      id: 'pe-ret-q3',
      kind: 'numeric',
      topic: 'lbo-returns',
      difficulty: 3,
      objective: t('Compute IRR with an interim distribution.', 'Calcolare l’IRR con una distribuzione intermedia.'),
      prompt: t(
        'Equity of €200m at t = 0; a €60m dividend recap in year 3; exit proceeds of €400m in year 5. What is the IRR (%, one decimal)?',
        'Equity di €200m a t = 0; dividend recap di €60m all’anno 3; incasso dall’exit di €400m all’anno 5. Qual è l’IRR (%, un decimale)?'
      ),
      answer: 19.4,
      unit: '%',
      tolerance: { abs: 0.15 },
      verify: { fn: 'product', args: [100, 0.19410159552720557] },
      explanation: t(
        'Solve −200 + 60/(1+r)³ + 400/(1+r)⁵ = 0 → r ≈ 19.4%. A single €460m exit in year 5 (same 2.3x MOIC) would give only ≈18.1%, because the recap returns cash earlier.',
        'Risolvendo −200 + 60/(1+r)³ + 400/(1+r)⁵ = 0 → r ≈ 19,4%. Un’unica exit di €460m all’anno 5 (stesso MOIC di 2,3x) darebbe solo ≈18,1%, perché il recap restituisce cassa prima.'
      )
    },
    {
      id: 'pe-ret-q4',
      kind: 'mcq',
      topic: 'lbo-returns',
      difficulty: 1,
      objective: t('Apply the IRR rules of thumb.', 'Applicare le regole pratiche sull’IRR.'),
      prompt: t('Roughly what IRR does a 2.0x MOIC over 5 years imply?', 'Quale IRR implica all’incirca un MOIC di 2,0x in 5 anni?'),
      choices: [t('~10%', '~10%'), t('~15%', '~15%'), t('~20%', '~20%'), t('~26%', '~26%')],
      correct: 1,
      explanation: t('2^(1/5) − 1 ≈ 14.9%. 20% would be 20% p.a. simple (100%/5); 26% is 2x over 3 years.', '2^(1/5) − 1 ≈ 14,9%. 20% sarebbe il calcolo semplice (100%/5); 26% è 2x in 3 anni.')
    },
    {
      id: 'pe-ret-q5',
      kind: 'numeric',
      topic: 'lbo-returns',
      difficulty: 2,
      objective: t('Compute IRR from a cash-flow series.', 'Calcolare l’IRR da una serie di flussi.'),
      prompt: t(
        'Cash flows to equity: −100 (Y0), 0, 40 (Y2), 0, 0, 200 (Y5). What is the IRR (%, one decimal)?',
        'Flussi all’equity: −100 (A0), 0, 40 (A2), 0, 0, 200 (A5). Qual è l’IRR (%, un decimale)?'
      ),
      answer: 22.3,
      unit: '%',
      tolerance: { abs: 0.1 },
      verify: { fn: 'product', args: [100, 0.22253199912035837] },
      explanation: t('This is Deal B from the example: ≈22.3%, versus 19.1% if all €240m came at year 5.', 'È il Deal B dell’esempio: ≈22,3%, contro il 19,1% se tutti i €240m arrivassero all’anno 5.')
    }
  ],
  flashcards: [
    { id: 'fc-pe-ret-1', topic: 'lbo-returns', front: t('IRR from MOIC (single exit)?', 'IRR dal MOIC (exit unica)?'), back: t('IRR = MOIC^(1/years) − 1', 'IRR = MOIC^(1/anni) − 1') },
    { id: 'fc-pe-ret-2', topic: 'lbo-returns', front: t('2x in 5 years ≈ ? IRR', '2x in 5 anni ≈ ? IRR'), back: t('≈15%', '≈15%') },
    { id: 'fc-pe-ret-3', topic: 'lbo-returns', front: t('3x in 5 years ≈ ? IRR', '3x in 5 anni ≈ ? IRR'), back: t('≈25%', '≈25%') },
    { id: 'fc-pe-ret-4', topic: 'lbo-returns', front: t('2x in 3 years ≈ ? IRR', '2x in 3 anni ≈ ? IRR'), back: t('≈26%', '≈26%') },
    { id: 'fc-pe-ret-5', topic: 'lbo-returns', front: t('Why can IRR rise while MOIC is unchanged?', 'Perché l’IRR può salire a parità di MOIC?'), back: t('Cash is returned earlier (e.g. dividend recap), shortening the effective holding period.', 'La cassa viene restituita prima (es. dividend recap), accorciando la durata effettiva.') }
  ]
};

const pePaperLbo: Lesson = {
  id: 'pe-paper-lbo',
  academyId: 'private-equity',
  moduleId: 'P3',
  mode: 'deep',
  minutes: 18,
  difficulty: 3,
  reviewed: R,
  objective: t(
    'Solve a full paper LBO by hand, the way it is asked in PE interviews: entry, debt paydown, exit and returns.',
    'Risolvere a mano un paper LBO completo, come viene chiesto nei colloqui PE: ingresso, rimborso del debito, uscita e rendimenti.'
  ),
  screens: [
    {
      type: 'intuition',
      title: t('An LBO model on one sheet of paper', 'Un modello LBO su un foglio di carta'),
      body: t(
        'In a paper LBO you get a short prompt and pen and paper — no Excel. The goal is not decimal precision but a **structured, fast, roughly right** answer that shows you understand how returns are generated.\n\nAlways follow the same five steps: **(1) entry & sources/uses → (2) project EBITDA → (3) free cash flow & debt paydown → (4) exit equity → (5) MOIC & IRR**.',
        'In un paper LBO ricevi un breve testo, carta e penna — niente Excel. L’obiettivo non è la precisione al decimale ma una risposta **strutturata, rapida e sostanzialmente corretta** che mostri come si generano i rendimenti.\n\nSegui sempre gli stessi cinque passi: **(1) ingresso e fonti/impieghi → (2) proiezione dell’EBITDA → (3) free cash flow e rimborso del debito → (4) equity all’uscita → (5) MOIC e IRR**.'
      )
    },
    {
      type: 'technical',
      title: t('The prompt', 'Il testo'),
      body: t(
        '- A sponsor buys TargetCo with **€100m EBITDA** at **10.0x**; fees €20m.\n- Debt **5.0x EBITDA** (€500m) at **8%**, interest on opening balance; all free cash flow repays debt.\n- EBITDA grows **10% p.a.**; D&A = capex = **€10m** per year; no change in working capital.\n- Tax rate **25%**.\n- Exit after **5 years** at **10.0x** (no multiple expansion).\n\nWhat are MOIC and IRR?',
        '- Uno sponsor acquista TargetCo con **€100m di EBITDA** a **10,0x**; costi €20m.\n- Debito **5,0x EBITDA** (€500m) all’**8%**, interessi sul saldo iniziale; tutto il free cash flow rimborsa debito.\n- L’EBITDA cresce del **10% annuo**; ammortamenti = capex = **€10m** l’anno; circolante invariato.\n- Aliquota fiscale **25%**.\n- Uscita dopo **5 anni** a **10,0x** (nessuna espansione del multiplo).\n\nQuali sono MOIC e IRR?'
      )
    },
    {
      type: 'formula',
      formulas: [
        { name: t('Entry equity', 'Equity all’ingresso'), expr: 'Equity = EBITDA × Entry multiple + Fees − Debt' },
        { name: t('Levered free cash flow (D&A = capex, ΔNWC = 0)', 'Free cash flow levered (amm.ti = capex, ΔCCN = 0)'), expr: 'FCF = (EBITDA − D&A − Interest) × (1 − t)' },
        { name: t('Exit equity', 'Equity all’uscita'), expr: 'Exit equity = Exit EBITDA × Exit multiple − (Entry debt − Cumulative paydown)' }
      ],
      note: t(
        'When D&A equals capex and working capital is flat, FCF equals net income — a common interview simplification.',
        'Quando ammortamenti e capex coincidono e il circolante è stabile, il FCF è pari all’utile netto — una semplificazione tipica dei colloqui.'
      )
    },
    {
      type: 'example',
      title: t('Steps 1–3: entry and paydown', 'Passi 1–3: ingresso e rimborso'),
      body: t(
        '**Entry**: EV 1,000 + fees 20 = uses 1,020; debt 500 → equity **520**.\n\nYear 1: EBIT = 110 − 10 = 100; interest 8% × 500 = 40; tax 25% × 60 = 15; FCF = **45**. Repeat each year on the lower debt balance (€m):',
        '**Ingresso**: EV 1.000 + costi 20 = impieghi 1.020; debito 500 → equity **520**.\n\nAnno 1: EBIT = 110 − 10 = 100; interessi 8% × 500 = 40; imposte 25% × 60 = 15; FCF = **45**. Si ripete ogni anno sul debito residuo (€m):'
      ),
      table: {
        headers: [t('€m', '€m'), t('Y1', 'A1'), t('Y2', 'A2'), t('Y3', 'A3'), t('Y4', 'A4'), t('Y5', 'A5')],
        rows: [
          ['EBITDA', '110.0', '121.0', '133.1', '146.4', '161.1'],
          [t('Interest', 'Interessi'), '(40.0)', '(36.4)', '(31.9)', '(26.5)', '(19.9)'],
          [t('Taxes', 'Imposte'), '(15.0)', '(18.7)', '(22.8)', '(27.5)', '(32.8)'],
          [t('FCF = debt repaid', 'FCF = debito rimborsato'), '45.0', '56.0', '68.4', '82.5', '98.4'],
          [t('Closing debt', 'Debito finale'), '455.0', '399.1', '330.7', '248.2', '149.8']
        ],
        totalRows: [3]
      }
    },
    {
      type: 'example',
      title: t('Steps 4–5: exit and returns', 'Passi 4–5: uscita e rendimenti'),
      body: t(
        'Cumulative paydown ≈ €350m, so exit debt ≈ €150m.',
        'Rimborso cumulato ≈ €350m, quindi debito all’uscita ≈ €150m.'
      ),
      table: {
        headers: [t('Step', 'Passo'), t('€m', '€m')],
        rows: [
          [t('Exit EBITDA (100 × 1.1⁵)', 'EBITDA all’uscita (100 × 1,1⁵)'), '161.1'],
          [t('Exit EV at 10.0x', 'EV all’uscita a 10,0x'), '1,610.5'],
          [t('Less exit debt', 'Meno debito all’uscita'), '(149.8)'],
          [t('Exit equity', 'Equity all’uscita'), '1,460.7'],
          [t('MOIC = 1,460.7 / 520', 'MOIC = 1.460,7 / 520'), '2.81x'],
          [t('IRR = 2.81^(1/5) − 1', 'IRR = 2,81^(1/5) − 1'), '≈22.9%']
        ],
        totalRows: [3]
      }
    },
    {
      type: 'technical',
      title: t('Shortcuts interviewers accept', 'Scorciatoie accettate ai colloqui'),
      body: t(
        '- **Round aggressively**: 1.1⁵ ≈ 1.61; say “about 1,610”.\n- **Interest on opening debt** (avoids circularity).\n- **Approximate FCF**: if short on time, estimate average FCF × years (here ~70 × 5 = 350).\n- **IRR from rules of thumb**: 2.8x in 5 years is between 2.5x (~20%) and 3.0x (~25%) → ~23%.\n- **Sanity-check**: no multiple expansion, so returns come from EBITDA growth (€610m of EV) and deleveraging (€350m).\n\nThen add commentary: key risks, what drives returns, and what would make you invest.',
        '- **Arrotonda senza timore**: 1,1⁵ ≈ 1,61; di’ “circa 1.610”.\n- **Interessi sul debito iniziale** (evita la circolarità).\n- **FCF approssimato**: se hai poco tempo, stima FCF medio × anni (qui ~70 × 5 = 350).\n- **IRR con le regole pratiche**: 2,8x in 5 anni sta tra 2,5x (~20%) e 3,0x (~25%) → ~23%.\n- **Verifica di coerenza**: niente espansione del multiplo, quindi i rendimenti vengono dalla crescita dell’EBITDA (€610m di EV) e dal deleveraging (€350m).\n\nPoi commenta: rischi chiave, cosa guida i rendimenti e cosa ti convincerebbe a investire.'
      )
    },
    {
      type: 'realworld',
      body: t(
        'Paper LBOs appear in almost every PE recruiting process — often in the first round, with 10–20 minutes on paper — followed by a full modelling test in later rounds. Bankers do the same mental maths when a sponsor asks “what can we pay to hit 20%?”: they work backwards from target IRR to a maximum entry multiple.',
        'I paper LBO compaiono in quasi tutti i processi di recruiting PE — spesso al primo round, con 10–20 minuti su carta — seguiti da un test di modellazione completo nei round successivi. I banker fanno lo stesso calcolo mentale quando uno sponsor chiede “quanto possiamo pagare per fare il 20%?”: si lavora a ritroso dall’IRR obiettivo al multiplo d’ingresso massimo.'
      )
    },
    { type: 'exercise', questionId: 'pe-plbo-q1' },
    { type: 'exercise', questionId: 'pe-plbo-q2' },
    { type: 'exercise', questionId: 'pe-plbo-q3' },
    {
      type: 'interview',
      question: t(
        'A company has €50m EBITDA, bought at 8x with 60% debt. EBITDA grows to €70m, you exit at 8x after 5 years and pay down €100m of debt. What are MOIC and IRR?',
        'Un’azienda ha €50m di EBITDA, acquistata a 8x con il 60% di debito. L’EBITDA sale a €70m, esci a 8x dopo 5 anni e rimborsi €100m di debito. Quali sono MOIC e IRR?'
      ),
      answer: t(
        'Entry EV is 400, debt 240, equity 160. Exit EV is 70 × 8 = 560; debt is 240 − 100 = 140, so exit equity is 420. MOIC is 420 / 160 ≈ 2.6x. Over five years that is between 2.5x (~20%) and 3x (~25%), so roughly 21%. Returns come from EBITDA growth — 160 of value — and 100 of deleveraging, with no multiple expansion, which I’d see as a healthy, not overly aggressive case.',
        'EV d’ingresso 400, debito 240, equity 160. EV all’uscita 70 × 8 = 560; debito 240 − 100 = 140, quindi equity all’uscita 420. MOIC 420 / 160 ≈ 2,6x. In cinque anni siamo tra 2,5x (~20%) e 3x (~25%), quindi circa il 21%. I rendimenti vengono dalla crescita dell’EBITDA — 160 di valore — e da 100 di deleveraging, senza espansione del multiplo: un caso sano, non troppo aggressivo.'
      )
    },
    {
      type: 'mistakes',
      items: [
        t('Forgetting fees in entry equity, which overstates MOIC.', 'Dimenticare i costi nell’equity d’ingresso, sovrastimando il MOIC.'),
        t('Subtracting entry debt instead of exit debt at exit.', 'Sottrarre all’uscita il debito iniziale invece di quello residuo.'),
        t('Using EBITDA as cash flow — interest, taxes and capex must come out.', 'Usare l’EBITDA come flusso di cassa — vanno tolti interessi, imposte e capex.'),
        t('Freezing on the IRR maths instead of using rules of thumb.', 'Bloccarsi sul calcolo dell’IRR invece di usare le regole pratiche.')
      ]
    },
    {
      type: 'summary',
      items: [
        t('Five steps: entry → EBITDA → FCF & paydown → exit equity → MOIC/IRR.', 'Cinque passi: ingresso → EBITDA → FCF e rimborso → equity all’uscita → MOIC/IRR.'),
        t('FCF = (EBITDA − D&A − interest)(1 − t) + D&A − capex − ΔNWC.', 'FCF = (EBITDA − amm.ti − interessi)(1 − t) + amm.ti − capex − ΔCCN.'),
        t('Round, sanity-check and explain where returns come from.', 'Arrotonda, verifica la coerenza e spiega da dove vengono i rendimenti.')
      ]
    }
  ],
  questions: [
    {
      id: 'pe-plbo-q1',
      kind: 'grid',
      topic: 'paper-lbo',
      difficulty: 3,
      objective: t('Complete the entry, exit and return lines of a paper LBO.', 'Completare le righe di ingresso, uscita e rendimento di un paper LBO.'),
      prompt: t(
        'Use the lesson’s prompt (€100m EBITDA, 10.0x, fees €20m, 5.0x debt, 10% growth, 5 years, exit 10.0x, cumulative paydown €350.2m). Fill in the blanks.',
        'Usa il testo della lezione (€100m EBITDA, 10,0x, costi €20m, debito 5,0x, crescita 10%, 5 anni, uscita 10,0x, rimborso cumulato €350,2m). Completa le celle.'
      ),
      columns: [t('Line', 'Voce'), t('Value', 'Valore')],
      rows: [
        {
          label: t('Entry equity (€m)', 'Equity all’ingresso (€m)'),
          cells: [{ answer: 520, verify: { fn: 'simpleLbo', args: [{ entryEbitda: 100, entryMultiple: 10, debtMultiple: 5, feesAndExpenses: 20, ebitdaGrowth: 0.1, years: 5, exitMultiple: 10, cumulativeDebtPaydown: 350.2 }], pick: 'entryEquity' } }]
        },
        {
          label: t('Exit EV (€m)', 'EV all’uscita (€m)'),
          cells: [{ answer: 1610.5, tolerance: { abs: 1 }, verify: { fn: 'simpleLbo', args: [{ entryEbitda: 100, entryMultiple: 10, debtMultiple: 5, feesAndExpenses: 20, ebitdaGrowth: 0.1, years: 5, exitMultiple: 10, cumulativeDebtPaydown: 350.2 }], pick: 'exitEV' } }]
        },
        {
          label: t('Exit equity (€m)', 'Equity all’uscita (€m)'),
          cells: [{ answer: 1460.7, tolerance: { abs: 1.5 }, verify: { fn: 'simpleLbo', args: [{ entryEbitda: 100, entryMultiple: 10, debtMultiple: 5, feesAndExpenses: 20, ebitdaGrowth: 0.1, years: 5, exitMultiple: 10, cumulativeDebtPaydown: 350.2 }], pick: 'exitEquity' } }]
        },
        {
          label: t('MOIC (x)', 'MOIC (x)'),
          cells: [{ answer: 2.81, tolerance: { abs: 0.02 }, verify: { fn: 'simpleLbo', args: [{ entryEbitda: 100, entryMultiple: 10, debtMultiple: 5, feesAndExpenses: 20, ebitdaGrowth: 0.1, years: 5, exitMultiple: 10, cumulativeDebtPaydown: 350.2 }], pick: 'moic' } }]
        }
      ],
      explanation: t(
        'Entry equity = 1,000 + 20 − 500 = 520. Exit EV = 100 × 1.1⁵ × 10 ≈ 1,610.5. Exit debt = 500 − 350.2 = 149.8, so exit equity ≈ 1,460.7. MOIC ≈ 2.81x.',
        'Equity d’ingresso = 1.000 + 20 − 500 = 520. EV all’uscita = 100 × 1,1⁵ × 10 ≈ 1.610,5. Debito all’uscita = 500 − 350,2 = 149,8, quindi equity all’uscita ≈ 1.460,7. MOIC ≈ 2,81x.'
      )
    },
    {
      id: 'pe-plbo-q2',
      kind: 'numeric',
      topic: 'paper-lbo',
      difficulty: 2,
      objective: t('Compute year-1 free cash flow in a paper LBO.', 'Calcolare il free cash flow del primo anno in un paper LBO.'),
      prompt: t(
        'EBITDA €80m, D&A = capex = €8m, debt €300m at 7% (opening balance), tax 25%, no ΔNWC. What is year-1 FCF available for debt repayment (€m)?',
        'EBITDA €80m, ammortamenti = capex = €8m, debito €300m al 7% (saldo iniziale), aliquota 25%, nessuna ΔCCN. Qual è il FCF del primo anno disponibile per il rimborso del debito (€m)?'
      ),
      answer: 38.25,
      unit: '€m',
      tolerance: { abs: 0.05 },
      verify: { fn: 'product', args: [51, 0.75] },
      steps: [
        t('EBIT = 80 − 8 = 72; interest = 7% × 300 = 21', 'EBIT = 80 − 8 = 72; interessi = 7% × 300 = 21'),
        t('EBT = 51; tax = 12.75; net income = 38.25', 'EBT = 51; imposte = 12,75; utile netto = 38,25'),
        t('FCF = NI + D&A − capex = 38.25', 'FCF = utile + amm.ti − capex = 38,25')
      ],
      explanation: t(
        'With D&A = capex and flat NWC, FCF = net income = (80 − 8 − 21) × 0.75 = 38.25. Using EBITDA − interest − tax on EBITDA would double-count or ignore the D&A tax shield.',
        'Con ammortamenti = capex e circolante stabile, FCF = utile netto = (80 − 8 − 21) × 0,75 = 38,25. Tassare l’EBITDA invece dell’EBT ignorerebbe lo scudo fiscale degli ammortamenti.'
      )
    },
    {
      id: 'pe-plbo-q3',
      kind: 'numeric',
      topic: 'paper-lbo',
      difficulty: 2,
      objective: t('Solve the classic mental-maths paper LBO.', 'Risolvere il classico paper LBO a mente.'),
      prompt: t(
        '€50m EBITDA bought at 8.0x with €240m of debt. EBITDA reaches €70m, exit at 8.0x after 5 years, €100m of debt repaid. What is the MOIC (x)?',
        '€50m di EBITDA acquistati a 8,0x con €240m di debito. L’EBITDA arriva a €70m, uscita a 8,0x dopo 5 anni, €100m di debito rimborsati. Qual è il MOIC (x)?'
      ),
      answer: 2.625,
      unit: 'x',
      tolerance: { abs: 0.01 },
      verify: { fn: 'moic', args: [420, 160] },
      explanation: t('Entry equity 400 − 240 = 160; exit equity 560 − 140 = 420; 420 / 160 = 2.625x (≈21% IRR).', 'Equity d’ingresso 400 − 240 = 160; equity d’uscita 560 − 140 = 420; 420 / 160 = 2,625x (IRR ≈21%).')
    },
    {
      id: 'pe-plbo-q4',
      kind: 'numeric',
      topic: 'paper-lbo',
      difficulty: 3,
      objective: t('Compute the IRR of the lesson’s paper LBO.', 'Calcolare l’IRR del paper LBO della lezione.'),
      prompt: t('What IRR (%, one decimal) does the lesson’s 2.81x over 5 years imply?', 'Quale IRR (%, un decimale) implica il 2,81x in 5 anni della lezione?'),
      answer: 22.9,
      unit: '%',
      tolerance: { abs: 0.2 },
      verify: { fn: 'product', args: [100, 0.2294528335420487] },
      explanation: t('2.809^(0.2) − 1 ≈ 22.9% — consistent with the 2.5x ≈ 20% and 3x ≈ 25% anchors.', '2,809^(0,2) − 1 ≈ 22,9% — coerente con i riferimenti 2,5x ≈ 20% e 3x ≈ 25%.')
    },
    {
      id: 'pe-plbo-q5',
      kind: 'order',
      topic: 'paper-lbo',
      difficulty: 1,
      objective: t('Sequence the paper LBO steps.', 'Ordinare i passi del paper LBO.'),
      prompt: t('Put the paper LBO steps in order.', 'Metti in ordine i passi del paper LBO.'),
      items: [
        t('Entry valuation and sources & uses', 'Valutazione d’ingresso e fonti e impieghi'),
        t('Project EBITDA', 'Proiezione dell’EBITDA'),
        t('Compute FCF and debt paydown', 'Calcolo di FCF e rimborso del debito'),
        t('Exit EV and exit equity', 'EV ed equity all’uscita'),
        t('MOIC and IRR', 'MOIC e IRR')
      ],
      explanation: t('You need entry equity and debt first, then cash generation, then exit value, then returns.', 'Servono prima equity e debito d’ingresso, poi la generazione di cassa, poi il valore d’uscita, infine i rendimenti.')
    }
  ],
  flashcards: [
    { id: 'fc-pe-plbo-1', topic: 'paper-lbo', front: t('Five steps of a paper LBO?', 'I cinque passi di un paper LBO?'), back: t('Entry/S&U → EBITDA projection → FCF & paydown → exit equity → MOIC & IRR.', 'Ingresso/F&I → proiezione EBITDA → FCF e rimborso → equity all’uscita → MOIC e IRR.') },
    { id: 'fc-pe-plbo-2', topic: 'paper-lbo', front: t('FCF when D&A = capex and ΔNWC = 0?', 'FCF quando amm.ti = capex e ΔCCN = 0?'), back: t('FCF = net income.', 'FCF = utile netto.') },
    { id: 'fc-pe-plbo-3', topic: 'paper-lbo', front: t('1.1⁵ ≈ ?', '1,1⁵ ≈ ?'), back: t('≈1.61', '≈1,61') },
    { id: 'fc-pe-plbo-4', topic: 'paper-lbo', front: t('Exit equity formula?', 'Formula dell’equity all’uscita?'), back: t('Exit EBITDA × exit multiple − net debt at exit.', 'EBITDA all’uscita × multiplo d’uscita − PFN all’uscita.') }
  ]
};

/* ============================ P4 — VALUE CREATION AND EXITS ============================ */

const peValueCreation: Lesson = {
  id: 'pe-value-creation',
  academyId: 'private-equity',
  moduleId: 'P4',
  mode: 'deep',
  minutes: 12,
  difficulty: 2,
  reviewed: R,
  objective: t(
    'Decompose an LBO’s equity gain into EBITDA growth, multiple expansion and deleveraging, and explain the operational levers behind each.',
    'Scomporre il guadagno sull’equity di un LBO in crescita dell’EBITDA, espansione del multiplo e deleveraging, e spiegare le leve operative alla base di ciascuno.'
  ),
  screens: [
    {
      type: 'intuition',
      title: t('Three sources of profit', 'Tre fonti di profitto'),
      body: t(
        'When a sponsor sells a company for more equity than it put in, the gain can only come from three places:\n\n- the business earns more (**EBITDA growth**),\n- buyers pay a higher multiple for each euro of EBITDA (**multiple expansion**),\n- debt has been repaid with the company’s cash (**deleveraging**).\n\nLPs want to see that returns came mainly from the first — the one the GP actually controls.',
        'Quando uno sponsor vende un’azienda ricavando più equity di quanta ne abbia investita, il guadagno può venire solo da tre fonti:\n\n- l’azienda guadagna di più (**crescita dell’EBITDA**),\n- i compratori pagano un multiplo più alto per ogni euro di EBITDA (**espansione del multiplo**),\n- il debito è stato rimborsato con la cassa dell’azienda (**deleveraging**).\n\nGli LP vogliono vedere che i rendimenti derivano soprattutto dalla prima — l’unica davvero controllata dal GP.'
      )
    },
    {
      type: 'technical',
      title: t('Operational levers', 'Le leve operative'),
      body: t(
        '- **Revenue growth**: pricing, new products, new geographies, salesforce effectiveness, digital channels.\n- **Margin improvement**: procurement, footprint consolidation, automation, overhead reduction, mix shift.\n- **Cash and capital efficiency**: working capital programmes, capex discipline — these feed deleveraging.\n- **M&A**: add-on acquisitions (buy-and-build).\n- **Governance and talent**: stronger CFO/finance function, KPIs, management incentives.\n- **Positioning for exit**: scale, growth story, cleaner reporting, ESG credentials — which support a higher exit multiple.',
        '- **Crescita dei ricavi**: pricing, nuovi prodotti, nuovi mercati, efficacia commerciale, canali digitali.\n- **Miglioramento dei margini**: acquisti, razionalizzazione degli stabilimenti, automazione, riduzione dei costi generali, mix.\n- **Efficienza di cassa e capitale**: programmi sul circolante, disciplina sul capex — alimentano il deleveraging.\n- **M&A**: acquisizioni add-on (buy-and-build).\n- **Governance e persone**: funzione finanza/CFO più forte, KPI, incentivi al management.\n- **Posizionamento per l’exit**: dimensione, storia di crescita, reporting più pulito, credenziali ESG — che sostengono un multiplo d’uscita più alto.'
      )
    },
    {
      type: 'formula',
      formulas: [
        { name: t('EBITDA growth', 'Crescita dell’EBITDA'), expr: '(Exit EBITDA − Entry EBITDA) × Entry multiple' },
        { name: t('Multiple expansion', 'Espansione del multiplo'), expr: '(Exit multiple − Entry multiple) × Exit EBITDA' },
        { name: t('Deleveraging', 'Deleveraging'), expr: 'Entry net debt − Exit net debt' },
        { name: t('Check', 'Verifica'), expr: 'Sum of the three = Exit equity − Entry equity (before fees)' }
      ],
      note: t(
        'The split between growth and multiple expansion depends on the ordering convention; this one values growth at the entry multiple. State your convention.',
        'La ripartizione tra crescita ed espansione del multiplo dipende dalla convenzione adottata; questa valuta la crescita al multiplo d’ingresso. Esplicita la convenzione.'
      )
    },
    {
      type: 'example',
      title: t('Bridge for Delta S.p.A.', 'Il bridge di Delta S.p.A.'),
      body: t(
        'Entry: EBITDA €50m at 8.0x (EV €400m), net debt €240m → equity €160m. Exit after 5 years: EBITDA €70m at 9.0x (EV €630m), net debt €140m → equity €490m.',
        'Ingresso: EBITDA €50m a 8,0x (EV €400m), PFN €240m → equity €160m. Uscita dopo 5 anni: EBITDA €70m a 9,0x (EV €630m), PFN €140m → equity €490m.'
      ),
      table: {
        headers: [t('Driver', 'Driver'), t('Calculation', 'Calcolo'), t('€m', '€m'), t('% of gain', '% del guadagno')],
        rows: [
          [t('EBITDA growth', 'Crescita EBITDA'), '(70 − 50) × 8.0', '160', '49%'],
          [t('Multiple expansion', 'Espansione multiplo'), '(9.0 − 8.0) × 70', '70', '21%'],
          [t('Deleveraging', 'Deleveraging'), '240 − 140', '100', '30%'],
          [t('Total equity gain', 'Guadagno totale equity'), '490 − 160', '330', '100%']
        ],
        totalRows: [3]
      }
    },
    {
      type: 'realworld',
      body: t(
        'In the era of low rates and rising valuations, multiple expansion contributed a large share of buyout returns. With higher rates, sponsors underwrite **flat or lower exit multiples** and rely on operational improvement and buy-and-build — which is why many large GPs employ dedicated operating partners and portfolio operations teams.',
        'Negli anni di tassi bassi e valutazioni in crescita, l’espansione dei multipli ha contribuito in misura rilevante ai rendimenti dei buyout. Con tassi più alti, gli sponsor ipotizzano **multipli d’uscita stabili o inferiori** e puntano su miglioramento operativo e buy-and-build — per questo molti grandi GP hanno operating partner e team dedicati alla gestione del portafoglio.'
      )
    },
    { type: 'exercise', questionId: 'pe-vc-q1' },
    { type: 'exercise', questionId: 'pe-vc-q2' },
    {
      type: 'interview',
      question: t('How do private equity firms create value?', 'Come creano valore i fondi di private equity?'),
      answer: t(
        'Returns come from three sources: EBITDA growth, multiple expansion and deleveraging. The best sponsors drive EBITDA growth through revenue initiatives, margin improvement and add-on acquisitions, and improve cash conversion so free cash flow pays down debt. Multiple expansion can come from building a larger, better-quality business, but it is partly market-driven, so I would not underwrite a deal that relies on it. Good governance and aligned management incentives tie it all together.',
        'I rendimenti provengono da tre fonti: crescita dell’EBITDA, espansione del multiplo e deleveraging. I migliori sponsor fanno crescere l’EBITDA con iniziative sui ricavi, miglioramento dei margini e add-on, e migliorano la conversione di cassa così che il free cash flow rimborsi il debito. L’espansione del multiplo può derivare dalla costruzione di un business più grande e di migliore qualità, ma dipende in parte dal mercato, quindi non approverei un deal che si regge su di essa. Una buona governance e incentivi allineati per il management tengono insieme il tutto.'
      )
    },
    {
      type: 'mistakes',
      items: [
        t('Counting multiple expansion as value the GP “created”. It can be pure market timing.', 'Considerare l’espansione del multiplo valore “creato” dal GP. Può essere puro market timing.'),
        t('Forgetting that the bridge reconciles to the equity gain — check it adds up.', 'Dimenticare che il bridge deve riconciliarsi con il guadagno sull’equity — verifica che quadri.'),
        t('Valuing EBITDA growth at the entry multiple and multiple expansion on entry EBITDA in the same bridge — this leaves a cross term (ΔEBITDA × Δmultiple) unexplained.', 'Valutare nello stesso bridge la crescita al multiplo d’ingresso e l’espansione sull’EBITDA d’ingresso — resta un termine incrociato (ΔEBITDA × Δmultiplo) non spiegato.')
      ]
    },
    {
      type: 'summary',
      items: [
        t('Equity gain = EBITDA growth + multiple expansion + deleveraging.', 'Guadagno sull’equity = crescita EBITDA + espansione del multiplo + deleveraging.'),
        t('Operational levers: revenue, margins, cash, M&A, governance.', 'Leve operative: ricavi, margini, cassa, M&A, governance.'),
        t('Underwrite without multiple expansion; treat it as upside.', 'Sottoscrivi senza espansione del multiplo; consideralo un upside.')
      ]
    }
  ],
  questions: [
    {
      id: 'pe-vc-q1',
      kind: 'grid',
      topic: 'value-creation',
      difficulty: 2,
      objective: t('Build a value-creation bridge.', 'Costruire un bridge di creazione di valore.'),
      prompt: t(
        'Entry: EBITDA €40m at 9.0x, net debt €200m. Exit: EBITDA €60m at 10.0x, net debt €120m. Fill in the bridge (€m).',
        'Ingresso: EBITDA €40m a 9,0x, PFN €200m. Uscita: EBITDA €60m a 10,0x, PFN €120m. Completa il bridge (€m).'
      ),
      columns: [t('Driver', 'Driver'), t('€m', '€m')],
      rows: [
        { label: t('EBITDA growth', 'Crescita EBITDA'), cells: [{ answer: 180, verify: { fn: 'valueCreationBridge', args: [40, 60, 9, 10, 200, 120], pick: 'ebitdaGrowth' } }] },
        { label: t('Multiple expansion', 'Espansione del multiplo'), cells: [{ answer: 60, verify: { fn: 'valueCreationBridge', args: [40, 60, 9, 10, 200, 120], pick: 'multipleExpansion' } }] },
        { label: t('Deleveraging', 'Deleveraging'), cells: [{ answer: 80, verify: { fn: 'valueCreationBridge', args: [40, 60, 9, 10, 200, 120], pick: 'deleveraging' } }] },
        { label: t('Total equity gain', 'Guadagno totale equity'), cells: [{ answer: 320, verify: { fn: 'valueCreationBridge', args: [40, 60, 9, 10, 200, 120], pick: 'total' } }] }
      ],
      unit: '€m',
      explanation: t(
        'Growth = 20 × 9 = 180; multiple = 1.0 × 60 = 60; deleveraging = 200 − 120 = 80; total 320. Check: entry equity 360 − 200 = 160; exit equity 600 − 120 = 480; 480 − 160 = 320.',
        'Crescita = 20 × 9 = 180; multiplo = 1,0 × 60 = 60; deleveraging = 200 − 120 = 80; totale 320. Verifica: equity d’ingresso 360 − 200 = 160; d’uscita 600 − 120 = 480; 480 − 160 = 320.'
      )
    },
    {
      id: 'pe-vc-q2',
      kind: 'mcq',
      topic: 'value-creation',
      difficulty: 2,
      objective: t('Judge the quality of returns.', 'Valutare la qualità dei rendimenti.'),
      prompt: t(
        'Two deals both return 2.5x. Which return profile would LPs generally regard as higher quality?',
        'Due deal rendono entrambi 2,5x. Quale profilo di rendimento gli LP considerano in genere di qualità superiore?'
      ),
      choices: [
        t('70% from multiple expansion, 30% from deleveraging', '70% da espansione del multiplo, 30% da deleveraging'),
        t('65% from EBITDA growth, 35% from deleveraging, flat multiple', '65% da crescita dell’EBITDA, 35% da deleveraging, multiplo invariato'),
        t('100% from a dividend recap', '100% da un dividend recap'),
        t('They are identical since MOIC is the same', 'Sono identici perché il MOIC è lo stesso')
      ],
      correct: 1,
      explanation: t(
        'EBITDA growth reflects operational value the GP drove and is more repeatable. Multiple expansion is largely market-dependent; a recap is financing, not value creation.',
        'La crescita dell’EBITDA riflette valore operativo generato dal GP ed è più replicabile. L’espansione del multiplo dipende in buona parte dal mercato; un recap è un’operazione finanziaria, non creazione di valore.'
      )
    },
    {
      id: 'pe-vc-q3',
      kind: 'numeric',
      topic: 'value-creation',
      difficulty: 2,
      objective: t('Compute the multiple-expansion component.', 'Calcolare la componente di espansione del multiplo.'),
      prompt: t(
        'Exit EBITDA €90m; entry multiple 7.5x; exit multiple 8.5x. What is the multiple-expansion contribution (€m)?',
        'EBITDA all’uscita €90m; multiplo d’ingresso 7,5x; d’uscita 8,5x. Qual è il contributo dell’espansione del multiplo (€m)?'
      ),
      answer: 90,
      unit: '€m',
      verify: { fn: 'valueCreationBridge', args: [60, 90, 7.5, 8.5, 0, 0], pick: 'multipleExpansion' },
      explanation: t('(8.5 − 7.5) × 90 = 90, using the convention that multiple expansion is applied to exit EBITDA.', '(8,5 − 7,5) × 90 = 90, con la convenzione che l’espansione si applica all’EBITDA d’uscita.')
    },
    {
      id: 'pe-vc-q4',
      kind: 'multi',
      topic: 'value-creation',
      difficulty: 1,
      objective: t('Classify value-creation levers.', 'Classificare le leve di creazione di valore.'),
      prompt: t('Which initiatives directly increase EBITDA? Select all that apply.', 'Quali iniziative aumentano direttamente l’EBITDA? Seleziona tutte le risposte corrette.'),
      choices: [
        t('Renegotiating procurement contracts', 'Rinegoziare i contratti di acquisto'),
        t('Price increases on core products', 'Aumenti di prezzo sui prodotti principali'),
        t('Reducing days sales outstanding', 'Ridurre i giorni medi di incasso'),
        t('Closing a loss-making plant', 'Chiudere uno stabilimento in perdita'),
        t('Refinancing debt at a lower rate', 'Rifinanziare il debito a un tasso inferiore')
      ],
      correct: [0, 1, 3],
      explanation: t(
        'Procurement, pricing and closing loss-making sites raise EBITDA. Lower DSO frees cash (deleveraging) without changing EBITDA; refinancing lowers interest, which is below EBITDA.',
        'Acquisti, prezzi e chiusura di siti in perdita aumentano l’EBITDA. Ridurre i giorni d’incasso libera cassa (deleveraging) senza cambiare l’EBITDA; rifinanziare riduce gli interessi, che stanno sotto l’EBITDA.'
      )
    }
  ],
  flashcards: [
    { id: 'fc-pe-vc-1', topic: 'value-creation', front: t('Three drivers of LBO equity value creation?', 'I tre driver di creazione di valore in un LBO?'), back: t('EBITDA growth, multiple expansion, deleveraging.', 'Crescita dell’EBITDA, espansione del multiplo, deleveraging.') },
    { id: 'fc-pe-vc-2', topic: 'value-creation', front: t('Formula for the EBITDA growth component?', 'Formula della componente di crescita EBITDA?'), back: t('(Exit EBITDA − Entry EBITDA) × Entry multiple', '(EBITDA uscita − EBITDA ingresso) × Multiplo d’ingresso') },
    { id: 'fc-pe-vc-3', topic: 'value-creation', front: t('Which driver is least in the GP’s control?', 'Quale driver è meno controllabile dal GP?'), back: t('Multiple expansion (largely market-driven).', 'L’espansione del multiplo (in gran parte legata al mercato).') },
    { id: 'fc-pe-vc-4', topic: 'value-creation', front: t('How does working capital improvement show up in the bridge?', 'Come si vede nel bridge il miglioramento del circolante?'), back: t('In deleveraging — it frees cash to repay debt, not EBITDA.', 'Nel deleveraging — libera cassa per rimborsare debito, non EBITDA.') }
  ]
};

const peBuyAndBuild: Lesson = {
  id: 'pe-buy-and-build',
  academyId: 'private-equity',
  moduleId: 'P4',
  mode: 'quick',
  minutes: 9,
  difficulty: 2,
  reviewed: R,
  objective: t(
    'Explain the buy-and-build strategy, compute multiple arbitrage and blended entry multiples, and identify integration risks.',
    'Spiegare la strategia di buy-and-build, calcolare l’arbitraggio sui multipli e il multiplo medio d’ingresso, e individuare i rischi di integrazione.'
  ),
  screens: [
    {
      type: 'intuition',
      title: t('Buy small cheap, sell big dear', 'Comprare piccolo a poco, vendere grande a molto'),
      body: t(
        'Small companies usually trade at lower multiples than large ones: they are riskier, less diversified and attract fewer buyers. A sponsor buys a solid **platform**, then bolts on smaller **add-ons** at lower multiples. The combined group is bigger, more diversified and more professional — so at exit the whole EBITDA is valued at the platform’s (or a higher) multiple.\n\nThat gap is **multiple arbitrage**; synergies come on top.',
        'Le aziende piccole di solito valgono multipli inferiori a quelle grandi: sono più rischiose, meno diversificate e attirano meno compratori. Uno sponsor compra una solida **piattaforma**, poi aggrega **add-on** più piccoli a multipli più bassi. Il gruppo risultante è più grande, diversificato e strutturato — quindi all’uscita tutto l’EBITDA viene valutato al multiplo della piattaforma (o superiore).\n\nQuesto differenziale è l’**arbitraggio sui multipli**; le sinergie si aggiungono.'
      )
    },
    {
      type: 'technical',
      title: t('How it works in practice', 'Come funziona in pratica'),
      body: t(
        '- **Fragmented markets** are ideal: many small, often family-owned players (e.g. dental clinics, IT services, testing labs, specialty packaging — very common in Italy).\n- The platform needs **management bandwidth, systems and an integration playbook**.\n- Add-ons are funded with cash flow, an acquisition or delayed-draw term loan facility, or additional equity.\n- **Synergies**: procurement, cross-selling, shared back office, pricing.\n- Add-on sellers often roll part of their proceeds into the group, aligning them with the exit.',
        '- I **mercati frammentati** sono ideali: molti operatori piccoli, spesso familiari (ad es. cliniche dentali, servizi IT, laboratori di analisi, packaging specializzato — molto comuni in Italia).\n- La piattaforma deve avere **capacità manageriale, sistemi e un metodo di integrazione**.\n- Gli add-on si finanziano con i flussi di cassa, una linea acquisition o delayed-draw term loan, o equity aggiuntiva.\n- **Sinergie**: acquisti, cross-selling, back office condiviso, pricing.\n- I venditori degli add-on reinvestono spesso parte del corrispettivo nel gruppo, allineandosi all’exit.'
      )
    },
    {
      type: 'formula',
      formulas: [
        { name: t('Blended entry multiple', 'Multiplo medio d’ingresso'), expr: 'Blended multiple = (Platform EV + Σ Add-on EVs) / (Platform EBITDA + Σ Add-on EBITDA)' },
        { name: t('Multiple arbitrage on add-ons', 'Arbitraggio sui multipli degli add-on'), expr: 'Arbitrage = Add-on EBITDA × (Exit multiple − Add-on purchase multiple)' }
      ]
    },
    {
      type: 'example',
      title: t('A dental-clinic roll-up', 'Un roll-up di cliniche dentali'),
      body: t(
        'Platform: €50m EBITDA bought at 10.0x. Three add-ons with total €30m EBITDA bought at 6.0x. Exit at 10.0x with no growth or synergies.',
        'Piattaforma: €50m di EBITDA acquistati a 10,0x. Tre add-on con €30m di EBITDA totali acquistati a 6,0x. Uscita a 10,0x senza crescita né sinergie.'
      ),
      table: {
        headers: [t('€m', '€m'), t('EBITDA', 'EBITDA'), t('Multiple', 'Multiplo'), t('EV', 'EV')],
        rows: [
          [t('Platform', 'Piattaforma'), '50', '10.0x', '500'],
          [t('Add-ons', 'Add-on'), '30', '6.0x', '180'],
          [t('Total invested', 'Totale investito'), '80', '8.5x', '680'],
          [t('Value at exit', 'Valore all’uscita'), '80', '10.0x', '800'],
          [t('Multiple arbitrage', 'Arbitraggio sui multipli'), '', '', '120']
        ],
        totalRows: [2]
      }
    },
    {
      type: 'realworld',
      body: t(
        'Buy-and-build is one of the most common sponsor strategies in European mid-market PE. For banks it generates repeat business: debt for each add-on (incremental facilities), sell-side mandates from founders, and ultimately the exit. Arbitrage only holds if the buyer at exit really values the group as an integrated business — a loosely assembled collection of companies may not earn the platform multiple.',
        'Il buy-and-build è una delle strategie più diffuse nel private equity mid-market europeo. Per le banche genera lavoro ricorrente: debito per ogni add-on (linee incrementali), mandati sell-side dai fondatori e infine l’exit. L’arbitraggio regge solo se il compratore all’uscita valuta davvero il gruppo come un business integrato — un insieme di aziende poco integrate potrebbe non ottenere il multiplo della piattaforma.'
      )
    },
    { type: 'exercise', questionId: 'pe-bb-q1' },
    { type: 'exercise', questionId: 'pe-bb-q2' },
    {
      type: 'interview',
      question: t('What is a buy-and-build strategy and what are its risks?', 'Cos’è una strategia di buy-and-build e quali sono i rischi?'),
      answer: t(
        'The sponsor acquires a platform in a fragmented market and adds smaller companies at lower multiples, then sells the larger, more diversified group at a higher multiple, capturing multiple arbitrage plus synergies. The risks are integration — systems, culture, retaining founders and key staff — overpaying as competition for add-ons rises, stretching leverage to fund deals, and an exit buyer who does not give credit for an under-integrated group.',
        'Lo sponsor acquisisce una piattaforma in un mercato frammentato e aggiunge aziende più piccole a multipli inferiori, poi vende il gruppo più grande e diversificato a un multiplo superiore, catturando arbitraggio sui multipli e sinergie. I rischi sono l’integrazione — sistemi, cultura, trattenere fondatori e persone chiave — il pagare troppo quando cresce la concorrenza sugli add-on, l’eccesso di leva per finanziare i deal e un compratore finale che non riconosce valore a un gruppo poco integrato.'
      )
    },
    {
      type: 'mistakes',
      items: [
        t('Assuming the exit multiple automatically applies to add-on EBITDA without integration.', 'Dare per scontato che il multiplo d’uscita si applichi agli add-on senza integrarli.'),
        t('Ignoring integration costs and management bandwidth.', 'Ignorare costi d’integrazione e capacità del management.'),
        t('Adding pro forma synergies to EBITDA before they are achieved.', 'Aggiungere all’EBITDA sinergie pro forma prima che siano realizzate.')
      ]
    },
    {
      type: 'summary',
      items: [
        t('Platform + cheaper add-ons in fragmented markets.', 'Piattaforma + add-on più economici in mercati frammentati.'),
        t('Returns: multiple arbitrage + synergies + growth.', 'Rendimenti: arbitraggio sui multipli + sinergie + crescita.'),
        t('Execution risk sits in integration and discipline on price.', 'Il rischio di esecuzione sta nell’integrazione e nella disciplina sul prezzo.')
      ]
    }
  ],
  questions: [
    {
      id: 'pe-bb-q1',
      kind: 'numeric',
      topic: 'buy-and-build',
      difficulty: 2,
      objective: t('Compute a blended entry multiple.', 'Calcolare un multiplo medio d’ingresso.'),
      prompt: t(
        'Platform: €30m EBITDA at 11.0x. Add-ons: €20m EBITDA at 6.0x. What is the blended entry multiple (x)?',
        'Piattaforma: €30m di EBITDA a 11,0x. Add-on: €20m di EBITDA a 6,0x. Qual è il multiplo medio d’ingresso (x)?'
      ),
      answer: 9,
      unit: 'x',
      verify: { fn: 'ratio', args: [450, 50] },
      explanation: t('EV = 330 + 120 = 450; EBITDA = 50; 450 / 50 = 9.0x. A simple average of 11 and 6 (8.5x) ignores the weights.', 'EV = 330 + 120 = 450; EBITDA = 50; 450 / 50 = 9,0x. La media semplice di 11 e 6 (8,5x) ignora i pesi.')
    },
    {
      id: 'pe-bb-q2',
      kind: 'numeric',
      topic: 'buy-and-build',
      difficulty: 2,
      objective: t('Compute multiple arbitrage.', 'Calcolare l’arbitraggio sui multipli.'),
      prompt: t(
        'Same group exits at 11.0x with no EBITDA change. How much value does multiple arbitrage on the add-ons create (€m)?',
        'Lo stesso gruppo esce a 11,0x senza variazioni di EBITDA. Quanto valore crea l’arbitraggio sui multipli degli add-on (€m)?'
      ),
      answer: 100,
      unit: '€m',
      verify: { fn: 'product', args: [20, 5] },
      explanation: t('20 × (11.0 − 6.0) = 100. Exit EV 550 − invested EV 450 = 100, all from the add-ons being revalued.', '20 × (11,0 − 6,0) = 100. EV d’uscita 550 − EV investito 450 = 100, tutto dalla rivalutazione degli add-on.')
    },
    {
      id: 'pe-bb-q3',
      kind: 'multi',
      topic: 'buy-and-build',
      difficulty: 1,
      objective: t('Identify markets suited to buy-and-build.', 'Individuare i mercati adatti al buy-and-build.'),
      prompt: t('Which features make a sector suitable for buy-and-build? Select all that apply.', 'Quali caratteristiche rendono un settore adatto al buy-and-build? Seleziona tutte le risposte corrette.'),
      choices: [
        t('Many small, independent players', 'Molti operatori piccoli e indipendenti'),
        t('Scope for procurement and back-office synergies', 'Spazio per sinergie su acquisti e back office'),
        t('Two dominant players with 90% share', 'Due operatori dominanti con il 90% di quota'),
        t('Size discount on small-company valuations', 'Sconto dimensionale sulle valutazioni delle piccole aziende'),
        t('Strict antitrust scrutiny of every small deal', 'Rigoroso controllo antitrust su ogni piccolo deal')
      ],
      correct: [0, 1, 3],
      explanation: t('Fragmentation, synergies and a size discount make roll-ups work. A concentrated market leaves few targets, and heavy antitrust scrutiny slows execution.', 'Frammentazione, sinergie e sconto dimensionale fanno funzionare i roll-up. Un mercato concentrato lascia pochi target e un forte controllo antitrust rallenta l’esecuzione.')
    }
  ],
  flashcards: [
    { id: 'fc-pe-bb-1', topic: 'buy-and-build', front: t('What is multiple arbitrage?', 'Cos’è l’arbitraggio sui multipli?'), back: t('Buying add-ons at lower multiples and selling the combined EBITDA at a higher group multiple.', 'Comprare add-on a multipli bassi e vendere l’EBITDA aggregato a un multiplo di gruppo più alto.') },
    { id: 'fc-pe-bb-2', topic: 'buy-and-build', front: t('Platform vs add-on?', 'Piattaforma vs add-on?'), back: t('Platform: initial, larger acquisition with management and systems. Add-on: smaller bolt-on acquired by the platform.', 'Piattaforma: acquisizione iniziale più grande con management e sistemi. Add-on: acquisizione più piccola integrata nella piattaforma.') },
    { id: 'fc-pe-bb-3', topic: 'buy-and-build', front: t('Main risks of buy-and-build?', 'Rischi principali del buy-and-build?'), back: t('Integration, overpaying for add-ons, excess leverage, exit buyer not crediting the group multiple.', 'Integrazione, add-on pagati troppo, leva eccessiva, compratore finale che non riconosce il multiplo di gruppo.') }
  ]
};

const peManagementIncentives: Lesson = {
  id: 'pe-management-incentives',
  academyId: 'private-equity',
  moduleId: 'P4',
  mode: 'deep',
  minutes: 12,
  difficulty: 3,
  reviewed: R,
  objective: t(
    'Explain how management equity plans, sweet equity and ratchets align management with the sponsor, and compute management’s payoff.',
    'Spiegare come management equity plan, sweet equity e ratchet allineano il management allo sponsor, e calcolare il payoff del management.'
  ),
  screens: [
    {
      type: 'intuition',
      title: t('Think like an owner', 'Pensare da proprietari'),
      body: t(
        'A sponsor needs managers who behave like owners for five years. A bonus is not enough: the sponsor wants management to win big **only if the sponsor wins**.\n\nSo managers are invited to invest their own money in the deal — but in a way that gives them a **disproportionate share of the upside**. That leverage on management’s cheque is called **sweet equity**.',
        'Uno sponsor ha bisogno di manager che si comportino da proprietari per cinque anni. Un bonus non basta: lo sponsor vuole che il management guadagni molto **solo se guadagna anche lo sponsor**.\n\nPer questo i manager investono denaro proprio nel deal — ma in modo da ottenere una **quota sproporzionata dell’upside**. Questa leva sull’investimento del management si chiama **sweet equity**.'
      )
    },
    {
      type: 'technical',
      title: t('The institutional strip and sweet equity', 'Strip istituzionale e sweet equity'),
      body: t(
        'In a typical European structure, the sponsor’s equity is split into:\n\n- a large **institutional strip**: shareholder loan notes or preference shares carrying a fixed compounding return (often around 8–12%, frequently PIK);\n- a small amount of **ordinary shares**.\n\nManagement buys mostly **ordinary shares** (“sweet equity”). Because the preferred instrument takes a fixed return and the ordinary shares capture **all the upside above it**, management’s small cheque buys a much larger share of the ordinary equity — commonly 10–20% of it.\n\nThis payoff behaves like a **call option**.',
        'In una struttura europea tipica, l’equity dello sponsor è suddivisa in:\n\n- un ampio **strip istituzionale**: finanziamenti soci (shareholder loan) o azioni privilegiate con un rendimento fisso composto (spesso intorno all’8–12%, frequentemente PIK);\n- una piccola quota di **azioni ordinarie**.\n\nIl management acquista soprattutto **azioni ordinarie** (“sweet equity”). Poiché lo strumento privilegiato prende un rendimento fisso e le ordinarie catturano **tutto l’upside oltre quella soglia**, il piccolo investimento del management compra una quota molto maggiore dell’equity ordinaria — comunemente il 10–20%.\n\nQuesto payoff si comporta come un’**opzione call**.'
      )
    },
    {
      type: 'formula',
      formulas: [
        { name: t('Preferred instrument at exit', 'Strumento privilegiato all’uscita'), expr: 'Pref value = Pref principal × (1 + coupon)^n' },
        { name: t('Ordinary equity at exit', 'Equity ordinaria all’uscita'), expr: 'Ordinary value = Exit equity − Pref value' },
        { name: t('Management proceeds', 'Proventi del management'), expr: 'Mgmt proceeds = Mgmt % of ordinary × Ordinary value' }
      ]
    },
    {
      type: 'example',
      title: t('Sweet equity at Epsilon', 'La sweet equity di Epsilon'),
      body: t(
        'Entry equity €500m: €450m shareholder loan at 10% compounding, €50m ordinary shares (sponsor pays €45m for 85%, management €5m for 15%). Exit after 5 years with equity value of €1,200m.',
        'Equity d’ingresso €500m: €450m di shareholder loan al 10% composto, €50m di azioni ordinarie (lo sponsor paga €45m per l’85%, il management €5m per il 15%). Uscita dopo 5 anni con equity di €1.200m.'
      ),
      table: {
        headers: [t('€m', '€m'), t('Sponsor', 'Sponsor'), t('Management', 'Management')],
        rows: [
          [t('Invested', 'Investito'), '495', '5'],
          [t('Shareholder loan: 450 × 1.1⁵ = 724.7', 'Shareholder loan: 450 × 1,1⁵ = 724,7'), '724.7', '—'],
          [t('Ordinary: 1,200 − 724.7 = 475.3', 'Ordinarie: 1.200 − 724,7 = 475,3'), '404.0', '71.3'],
          [t('Total proceeds', 'Proventi totali'), '1,128.7', '71.3'],
          [t('MOIC', 'MOIC'), '2.3x', '14.3x']
        ],
        totalRows: [3]
      }
    },
    {
      type: 'technical',
      title: t('Ratchets, vesting and leaver terms', 'Ratchet, vesting e clausole leaver'),
      body: t(
        '- **Ratchet**: management’s share of ordinary equity increases if the sponsor achieves a target return (e.g. from 15% to 20% above 3.0x MOIC or a given IRR). A **negative ratchet** reduces it if targets are missed.\n- **Vesting**: equity is earned over time or at exit.\n- **Good leaver / bad leaver**: a manager who leaves early must sell back shares — at market value if a good leaver (e.g. illness, retirement), at the lower of cost and market value if a bad leaver (e.g. resignation, dismissal for cause).\n- In the US, plans more often use **options or profits interests** granted over common equity.\n\nTax treatment of management equity is highly jurisdiction-specific and drives structuring.',
        '- **Ratchet**: la quota del management sull’equity ordinaria aumenta se lo sponsor raggiunge un rendimento obiettivo (ad es. dal 15% al 20% sopra un MOIC di 3,0x o un dato IRR). Un **ratchet negativo** la riduce se gli obiettivi non sono raggiunti.\n- **Vesting**: l’equity si matura nel tempo o all’exit.\n- **Good leaver / bad leaver**: il manager che lascia in anticipo deve rivendere le azioni — al valore di mercato se good leaver (ad es. malattia, pensionamento), al minore tra costo e valore di mercato se bad leaver (ad es. dimissioni, licenziamento per giusta causa).\n- Negli USA i piani usano più spesso **opzioni o profits interest** sull’equity ordinaria.\n\nIl trattamento fiscale dell’equity del management dipende molto dalla giurisdizione e guida la strutturazione.'
      )
    },
    {
      type: 'realworld',
      body: t(
        'The management equity plan (MEP) is negotiated alongside the SPA, often with separate advisers for management. In auctions, bidders’ MEP proposals can influence which bidder management supports. Bankers running a sell-side process need to understand these terms because management’s incentives affect the dynamics of the auction.',
        'Il management equity plan (MEP) si negozia in parallelo allo SPA, spesso con advisor dedicati al management. Nelle aste, le proposte di MEP degli offerenti possono influenzare quale offerente il management sostiene. I banker che gestiscono un processo sell-side devono conoscere questi termini perché gli incentivi del management incidono sulle dinamiche dell’asta.'
      )
    },
    { type: 'exercise', questionId: 'pe-mip-q1' },
    { type: 'exercise', questionId: 'pe-mip-q2' },
    {
      type: 'interview',
      question: t('What is sweet equity and why does it align management with the sponsor?', 'Cos’è la sweet equity e perché allinea il management allo sponsor?'),
      answer: t(
        'Sweet equity is the ordinary equity management buys in an LBO. The sponsor puts most of its money into a preferred instrument with a fixed compounding return, so the ordinary shares only have value once that hurdle is cleared — but then capture all the upside. Management pays a small amount for a meaningful share of the ordinaries, so its payoff is highly leveraged, like a call option: they earn a large multiple if the deal goes well and little if it doesn’t. Because their own money is at risk and their upside depends on the sponsor’s return, interests are aligned.',
        'La sweet equity è l’equity ordinaria che il management acquista in un LBO. Lo sponsor investe la maggior parte del capitale in uno strumento privilegiato con rendimento fisso composto, quindi le ordinarie hanno valore solo una volta superata quella soglia — ma poi catturano tutto l’upside. Il management paga poco per una quota significativa delle ordinarie, quindi il suo payoff è molto levereggiato, come un’opzione call: guadagna un multiplo elevato se il deal va bene e poco se va male. Poiché rischia denaro proprio e il suo upside dipende dal rendimento dello sponsor, gli interessi sono allineati.'
      )
    },
    {
      type: 'mistakes',
      items: [
        t('Computing management’s share on total equity instead of on the ordinary equity after the preferred instrument.', 'Calcolare la quota del management sull’equity totale invece che sull’ordinaria dopo lo strumento privilegiato.'),
        t('Forgetting the preferred instrument compounds — its claim grows every year.', 'Dimenticare che lo strumento privilegiato si capitalizza — il suo diritto cresce ogni anno.'),
        t('Assuming bad leavers keep their upside.', 'Pensare che i bad leaver conservino l’upside.')
      ]
    },
    {
      type: 'summary',
      items: [
        t('Sponsor: mostly preferred/loan notes; management: mostly ordinary (sweet) equity.', 'Sponsor: soprattutto privilegiate/loan notes; management: soprattutto ordinarie (sweet equity).'),
        t('Management’s payoff is option-like: large multiple if the deal outperforms.', 'Il payoff del management è simile a un’opzione: multiplo elevato se il deal sovraperforma.'),
        t('Ratchets, vesting and leaver clauses fine-tune alignment and retention.', 'Ratchet, vesting e clausole leaver affinano allineamento e retention.')
      ]
    }
  ],
  questions: [
    {
      id: 'pe-mip-q1',
      kind: 'numeric',
      topic: 'management-incentives',
      difficulty: 2,
      objective: t('Compute the accreted value of a preferred instrument.', 'Calcolare il valore capitalizzato di uno strumento privilegiato.'),
      prompt: t('A €450m shareholder loan accrues 10% PIK, compounded annually, for 5 years. What is its value at exit (€m)?', 'Uno shareholder loan da €450m matura il 10% PIK, capitalizzato annualmente, per 5 anni. Quanto vale all’uscita (€m)?'),
      answer: 724.73,
      unit: '€m',
      tolerance: { abs: 0.1 },
      verify: { fn: 'fv', args: [450, 0.1, 5] },
      explanation: t('450 × 1.1⁵ = 724.73. Simple interest would give 675 and overstate the ordinary equity.', '450 × 1,1⁵ = 724,73. L’interesse semplice darebbe 675 e sovrastimerebbe l’equity ordinaria.')
    },
    {
      id: 'pe-mip-q2',
      kind: 'numeric',
      topic: 'management-incentives',
      difficulty: 3,
      objective: t('Compute management’s sweet equity proceeds.', 'Calcolare i proventi della sweet equity del management.'),
      prompt: t(
        'Exit equity €1,000m. Preferred instrument at exit €700m. Management owns 12% of the ordinary shares. What are management’s proceeds (€m)?',
        'Equity all’uscita €1.000m. Strumento privilegiato all’uscita €700m. Il management detiene il 12% delle ordinarie. Quali sono i proventi del management (€m)?'
      ),
      answer: 36,
      unit: '€m',
      verify: { fn: 'product', args: [0.12, 300] },
      explanation: t('Ordinary value = 1,000 − 700 = 300; 12% × 300 = 36. Applying 12% to total equity (120) ignores the preferred claim.', 'Valore delle ordinarie = 1.000 − 700 = 300; 12% × 300 = 36. Applicare il 12% all’equity totale (120) ignora il diritto privilegiato.')
    },
    {
      id: 'pe-mip-q3',
      kind: 'mcq',
      topic: 'management-incentives',
      difficulty: 2,
      objective: t('Understand a performance ratchet.', 'Comprendere un ratchet di performance.'),
      prompt: t('What does a positive ratchet in a management equity plan do?', 'Cosa fa un ratchet positivo in un management equity plan?'),
      choices: [
        t('Increases management’s share of ordinary equity if the sponsor hits a return target', 'Aumenta la quota del management sull’equity ordinaria se lo sponsor raggiunge un rendimento obiettivo'),
        t('Guarantees management a minimum cash bonus', 'Garantisce al management un bonus minimo in contanti'),
        t('Converts the shareholder loan into ordinary shares at closing', 'Converte lo shareholder loan in azioni ordinarie al closing'),
        t('Forces management to sell at cost if they resign', 'Obbliga il management a vendere al costo in caso di dimissioni')
      ],
      correct: 0,
      explanation: t('A ratchet shifts ordinary equity to management above a sponsor MOIC/IRR hurdle. Selling at cost on resignation is a bad-leaver clause.', 'Il ratchet trasferisce equity ordinaria al management oltre una soglia di MOIC/IRR dello sponsor. Vendere al costo in caso di dimissioni è una clausola bad leaver.')
    },
    {
      id: 'pe-mip-q4',
      kind: 'multi',
      topic: 'management-incentives',
      difficulty: 2,
      objective: t('Identify elements of a management equity plan.', 'Riconoscere gli elementi di un management equity plan.'),
      prompt: t('Which are common features of a European MEP? Select all that apply.', 'Quali sono caratteristiche comuni di un MEP europeo? Seleziona tutte le risposte corrette.'),
      choices: [
        t('Management invests its own money', 'Il management investe denaro proprio'),
        t('Good leaver / bad leaver provisions', 'Clausole good leaver / bad leaver'),
        t('Management receives the sponsor’s carried interest', 'Il management riceve il carried interest dello sponsor'),
        t('Sponsor funds mostly via a compounding preferred instrument', 'Lo sponsor investe soprattutto tramite uno strumento privilegiato che si capitalizza'),
        t('Guaranteed return of management’s investment', 'Restituzione garantita dell’investimento del management')
      ],
      correct: [0, 1, 3],
      explanation: t('Real money at risk, leaver terms and the institutional strip are standard. Carry belongs to the GP’s team, and management’s investment is not guaranteed.', 'Capitale proprio a rischio, clausole leaver e strip istituzionale sono standard. Il carry spetta al team del GP e l’investimento del management non è garantito.')
    }
  ],
  flashcards: [
    { id: 'fc-pe-mip-1', topic: 'management-incentives', front: t('What is sweet equity?', 'Cos’è la sweet equity?'), back: t('Ordinary equity bought by management that captures upside above the sponsor’s preferred instrument.', 'Equity ordinaria acquistata dal management che cattura l’upside oltre lo strumento privilegiato dello sponsor.') },
    { id: 'fc-pe-mip-2', topic: 'management-incentives', front: t('What is the institutional strip?', 'Cos’è lo strip istituzionale?'), back: t('The sponsor’s mix of preferred/loan notes (fixed compounding return) and a small amount of ordinary shares.', 'Il mix dello sponsor di privilegiate/loan notes (rendimento fisso composto) e una piccola quota di ordinarie.') },
    { id: 'fc-pe-mip-3', topic: 'management-incentives', front: t('Good leaver vs bad leaver?', 'Good leaver vs bad leaver?'), back: t('Good leaver sells at fair value; bad leaver typically at the lower of cost and fair value.', 'Il good leaver vende al fair value; il bad leaver di solito al minore tra costo e fair value.') },
    { id: 'fc-pe-mip-4', topic: 'management-incentives', front: t('What is a ratchet?', 'Cos’è un ratchet?'), back: t('Mechanism that changes management’s equity share depending on the sponsor’s achieved return.', 'Meccanismo che modifica la quota di equity del management in base al rendimento ottenuto dallo sponsor.') }
  ]
};

const peExits: Lesson = {
  id: 'pe-exits',
  academyId: 'private-equity',
  moduleId: 'P4',
  mode: 'deep',
  minutes: 12,
  difficulty: 2,
  qualitative: true,
  reviewed: R,
  objective: t(
    'Compare exit routes — trade sale, IPO, secondary buyout, dividend recap and continuation funds — and explain when each is used.',
    'Confrontare le modalità di exit — trade sale, IPO, secondary buyout, dividend recap e continuation fund — e spiegare quando si usa ciascuna.'
  ),
  screens: [
    {
      type: 'intuition',
      title: t('Returns are only real when cash comes back', 'I rendimenti sono reali solo quando torna la cassa'),
      body: t(
        'A sponsor’s returns stay on paper until it **exits**. Fund life is finite and LPs want distributions, so exit planning starts on day one: who will buy this business in five years, and why will they pay more than we did?',
        'I rendimenti di uno sponsor restano sulla carta finché non **esce**. La vita del fondo è limitata e gli LP vogliono distribuzioni, quindi l’exit si pianifica dal primo giorno: chi comprerà questa azienda tra cinque anni, e perché pagherà più di noi?'
      )
    },
    {
      type: 'technical',
      title: t('Full exits', 'Exit totali'),
      body: t(
        '- **Trade sale** to a strategic buyer: often the highest price, because the buyer can pay for synergies; clean, 100% cash exit. Antitrust and buyer appetite can be constraints.\n- **Secondary buyout (SBO)**: sale to another sponsor. Common and fast; the new sponsor needs its own value-creation plan.\n- **IPO**: listing on a stock exchange (e.g. Euronext Milan). Typically only part of the stake is sold at the IPO; the rest is sold later in follow-on placements after a **lock-up** period (often 6–12 months). Exposes the exit to market conditions.',
        '- **Trade sale** a un compratore industriale: spesso il prezzo più alto, perché il compratore può pagare le sinergie; exit pulita, 100% cash. Antitrust e appetito dei compratori possono essere vincoli.\n- **Secondary buyout (SBO)**: cessione a un altro sponsor. Frequente e rapida; il nuovo sponsor deve avere un proprio piano di creazione di valore.\n- **IPO**: quotazione in borsa (ad es. Euronext Milan). Di solito all’IPO si vende solo parte della quota; il resto si cede successivamente con collocamenti accelerati dopo un periodo di **lock-up** (spesso 6–12 mesi). Espone l’exit alle condizioni di mercato.'
      )
    },
    {
      type: 'technical',
      title: t('Partial liquidity and GP-led solutions', 'Liquidità parziale e soluzioni GP-led'),
      body: t(
        '- **Dividend recapitalisation**: the company raises new debt and pays a dividend to the sponsor. Returns cash early (boosting IRR and DPI) while keeping ownership, but raises leverage and risk.\n- **Minority stake sale**: selling part of the equity to a co-investor.\n- **Continuation fund (GP-led secondary)**: the GP transfers one or more assets from an old fund into a new vehicle it also manages, backed by secondary investors. Existing LPs choose to **sell for cash or roll** into the new vehicle. Gives more time with a strong asset — but the GP is on both sides, so conflicts are managed with an independent **fairness opinion**, LPAC approval and a competitive price discovery process.',
        '- **Dividend recap**: l’azienda raccoglie nuovo debito e paga un dividendo allo sponsor. Restituisce cassa in anticipo (aumentando IRR e DPI) mantenendo la proprietà, ma aumenta leva e rischio.\n- **Cessione di una quota di minoranza**: vendita di parte dell’equity a un co-investitore.\n- **Continuation fund (secondario GP-led)**: il GP trasferisce uno o più asset da un vecchio fondo a un nuovo veicolo che gestisce anch’esso, finanziato da investitori secondari. Gli LP esistenti scelgono se **vendere per cassa o reinvestire** nel nuovo veicolo. Dà più tempo su un asset di qualità — ma il GP è da entrambe le parti, quindi i conflitti si gestiscono con una **fairness opinion** indipendente, l’approvazione dell’LPAC e un processo competitivo di formazione del prezzo.'
      )
    },
    {
      type: 'example',
      title: t('Choosing the route for Zeta Group', 'Scegliere la via d’uscita per Zeta Group'),
      body: t(
        'A sponsor owns Zeta (€80m EBITDA, net debt €240m = 3.0x) in year 5 of a 10-year fund. Options it considers:',
        'Uno sponsor detiene Zeta (€80m di EBITDA, PFN €240m = 3,0x) al quinto anno di un fondo decennale. Le opzioni valutate:'
      ),
      table: {
        headers: [t('Route', 'Via'), t('Pros', 'Pro'), t('Cons', 'Contro')],
        rows: [
          [t('Trade sale', 'Trade sale'), t('Synergy premium, full cash', 'Premio per sinergie, tutto cash'), t('Few strategic buyers; antitrust', 'Pochi compratori industriali; antitrust')],
          [t('SBO', 'SBO'), t('Deep sponsor demand, speed', 'Ampia domanda di sponsor, rapidità'), t('Price limited by buyer’s LBO maths', 'Prezzo limitato dai calcoli LBO del compratore')],
          [t('IPO', 'IPO'), t('Possible valuation upside', 'Possibile upside di valutazione'), t('Partial sell-down, lock-up, market risk', 'Cessione parziale, lock-up, rischio di mercato')],
          [t('Recap to 5.0x', 'Recap a 5,0x'), t('€160m dividend (400 − 240), keep upside', 'Dividendo di €160m (400 − 240), mantiene l’upside'), t('Higher leverage, no full exit', 'Leva più alta, nessuna exit totale')],
          [t('Continuation fund', 'Continuation fund'), t('More time with a winner; liquidity option for LPs', 'Più tempo su un vincente; opzione di liquidità per gli LP'), t('Conflicts; secondary pricing', 'Conflitti; pricing secondario')]
        ]
      }
    },
    {
      type: 'realworld',
      body: t(
        'When IPO windows are shut and M&A slows, sponsors lean on SBOs, recaps, NAV loans and continuation vehicles; GP-led secondaries have become a major part of the secondaries market. Investment banks run dual-track processes (sale and IPO prepared in parallel) to maximise tension, and specialist secondary advisers run continuation-fund processes.',
        'Quando le finestre IPO sono chiuse e l’M&A rallenta, gli sponsor ricorrono a SBO, recap, NAV loan e continuation vehicle; i secondari GP-led sono diventati una parte importante del mercato secondario. Le banche d’affari gestiscono processi dual-track (vendita e IPO preparate in parallelo) per massimizzare la competizione, e advisor specializzati in secondario gestiscono i processi di continuation fund.'
      )
    },
    { type: 'exercise', questionId: 'pe-exit-q1' },
    { type: 'exercise', questionId: 'pe-exit-q2' },
    { type: 'exercise', questionId: 'pe-exit-q3' },
    {
      type: 'interview',
      question: t('What exit options does a PE firm have, and how would you choose?', 'Quali opzioni di exit ha un fondo di PE e come sceglieresti?'),
      answer: t(
        'The main routes are a trade sale to a strategic, a secondary buyout to another sponsor, and an IPO; partial options include a dividend recap, a minority sale or a continuation fund. I would compare value and certainty: strategics can pay for synergies and give a clean cash exit; sponsors offer speed and depth of demand; an IPO can achieve a high valuation but only a partial sell-down with lock-ups and market risk. Fund timing matters too — if the fund is near the end of its life and the asset still has upside, a continuation vehicle may maximise value for LPs who want to stay in.',
        'Le vie principali sono la trade sale a un industriale, il secondary buyout a un altro sponsor e l’IPO; le opzioni parziali comprendono dividend recap, cessione di una minoranza o continuation fund. Confronterei valore e certezza: gli industriali possono pagare le sinergie e garantire un’uscita cash pulita; gli sponsor offrono rapidità e ampiezza della domanda; l’IPO può dare una valutazione alta ma solo una cessione parziale, con lock-up e rischio di mercato. Conta anche la tempistica del fondo — se il fondo è vicino alla scadenza e l’asset ha ancora potenziale, un continuation vehicle può massimizzare il valore per gli LP che vogliono restare.'
      )
    },
    {
      type: 'mistakes',
      items: [
        t('Treating an IPO as a full exit. The sponsor usually sells down over several placements.', 'Considerare l’IPO un’exit totale. Lo sponsor di solito vende in più collocamenti.'),
        t('Calling a dividend recap value creation. It is a financing event that brings cash forward.', 'Chiamare il dividend recap creazione di valore. È un’operazione finanziaria che anticipa cassa.'),
        t('Ignoring the GP’s conflict of interest in continuation funds.', 'Ignorare il conflitto di interessi del GP nei continuation fund.')
      ]
    },
    {
      type: 'summary',
      items: [
        t('Full exits: trade sale, SBO, IPO (staged).', 'Exit totali: trade sale, SBO, IPO (graduale).'),
        t('Partial liquidity: dividend recap, minority sale, NAV financing.', 'Liquidità parziale: dividend recap, cessione di minoranza, NAV financing.'),
        t('Continuation funds: LPs sell or roll; manage conflicts with fairness opinions and LPAC.', 'Continuation fund: gli LP vendono o reinvestono; conflitti gestiti con fairness opinion e LPAC.')
      ]
    }
  ],
  questions: [
    {
      id: 'pe-exit-q1',
      kind: 'numeric',
      topic: 'pe-exits',
      difficulty: 2,
      objective: t('Size a dividend recap.', 'Dimensionare un dividend recap.'),
      prompt: t(
        'EBITDA €60m, current net debt €150m. Lenders allow re-levering to 5.0x net debt/EBITDA. Ignoring fees, how large a dividend can be paid (€m)?',
        'EBITDA €60m, PFN attuale €150m. I finanziatori consentono di riportare la leva a 5,0x PFN/EBITDA. Ignorando i costi, quale dividendo si può pagare (€m)?'
      ),
      answer: 150,
      unit: '€m',
      verify: { fn: 'diff', args: [300, 150] },
      explanation: t('New net debt = 5.0 × 60 = 300; dividend = 300 − 150 = 150. Paying 300 would ignore the existing debt.', 'Nuova PFN = 5,0 × 60 = 300; dividendo = 300 − 150 = 150. Pagare 300 ignorerebbe il debito esistente.')
    },
    {
      id: 'pe-exit-q2',
      kind: 'mcq',
      topic: 'pe-exits',
      difficulty: 2,
      objective: t('Understand continuation funds.', 'Comprendere i continuation fund.'),
      prompt: t('In a continuation fund transaction, what choice do existing LPs typically have?', 'In un’operazione di continuation fund, quale scelta hanno di solito gli LP esistenti?'),
      choices: [
        t('None — their stake is transferred automatically at NAV', 'Nessuna — la loro quota è trasferita automaticamente al NAV'),
        t('Sell their interest for cash or roll into the new vehicle', 'Vendere la propria quota per cassa o reinvestire nel nuovo veicolo'),
        t('Veto any sale by the GP individually', 'Porre individualmente il veto a qualsiasi cessione del GP'),
        t('Convert their stake into the company’s bonds', 'Convertire la quota in obbligazioni della società')
      ],
      correct: 1,
      explanation: t('LPs choose to take liquidity or roll over. Price is set with secondary buyers and typically supported by a fairness opinion; LPAC consent addresses the GP’s conflict.', 'Gli LP scelgono se monetizzare o reinvestire. Il prezzo si forma con gli acquirenti secondari ed è di solito supportato da una fairness opinion; il consenso dell’LPAC affronta il conflitto del GP.')
    },
    {
      id: 'pe-exit-q3',
      kind: 'multi',
      topic: 'pe-exits',
      difficulty: 2,
      objective: t('Compare IPO with a trade sale.', 'Confrontare l’IPO con una trade sale.'),
      prompt: t('Which are typical drawbacks of an IPO exit versus a trade sale? Select all that apply.', 'Quali sono i tipici svantaggi di un’exit via IPO rispetto a una trade sale? Seleziona tutte le risposte corrette.'),
      choices: [
        t('Only part of the stake is sold at listing', 'All’IPO si vende solo parte della quota'),
        t('Lock-up restricts further sales for months', 'Il lock-up limita ulteriori vendite per mesi'),
        t('Exposure to equity market volatility', 'Esposizione alla volatilità dei mercati azionari'),
        t('Always lower valuation than any trade sale', 'Valutazione sempre inferiore a qualsiasi trade sale'),
        t('No synergy premium from a strategic buyer', 'Nessun premio per sinergie da un compratore industriale')
      ],
      correct: [0, 1, 2, 4],
      explanation: t('IPOs mean partial, staged exits with market risk and no synergy premium — but valuation is not always lower; in strong markets an IPO can beat trade-sale bids.', 'L’IPO comporta un’uscita parziale e graduale, con rischio di mercato e senza premio per sinergie — ma la valutazione non è sempre inferiore; in mercati forti un’IPO può battere le offerte industriali.')
    },
    {
      id: 'pe-exit-q4',
      kind: 'mcq',
      topic: 'pe-exits',
      difficulty: 1,
      objective: t('Identify a secondary buyout.', 'Riconoscere un secondary buyout.'),
      prompt: t('Fund A sells its portfolio company to Fund B, another PE sponsor. This is a…', 'Il Fondo A cede una partecipata al Fondo B, un altro sponsor di PE. Si tratta di un…'),
      choices: [t('Trade sale', 'Trade sale'), t('Continuation fund', 'Continuation fund'), t('Secondary buyout', 'Secondary buyout'), t('Dividend recap', 'Dividend recap')],
      correct: 2,
      explanation: t('A sale from one sponsor to another unrelated sponsor is an SBO. A continuation fund keeps the same GP on both sides.', 'La cessione da uno sponsor a un altro sponsor indipendente è un SBO. Nel continuation fund lo stesso GP è da entrambe le parti.')
    }
  ],
  flashcards: [
    { id: 'fc-pe-exit-1', topic: 'pe-exits', front: t('Main PE exit routes?', 'Principali modalità di exit nel PE?'), back: t('Trade sale, secondary buyout, IPO; partial: dividend recap, minority sale, continuation fund.', 'Trade sale, secondary buyout, IPO; parziali: dividend recap, cessione di minoranza, continuation fund.') },
    { id: 'fc-pe-exit-2', topic: 'pe-exits', front: t('What is a dividend recap?', 'Cos’è un dividend recap?'), back: t('Raising new debt at the portfolio company to pay a dividend to shareholders.', 'Raccolta di nuovo debito nella partecipata per pagare un dividendo agli azionisti.') },
    { id: 'fc-pe-exit-3', topic: 'pe-exits', front: t('What is a continuation fund?', 'Cos’è un continuation fund?'), back: t('GP-led secondary: assets move from an old fund to a new GP-managed vehicle; LPs sell or roll.', 'Secondario GP-led: gli asset passano da un vecchio fondo a un nuovo veicolo gestito dallo stesso GP; gli LP vendono o reinvestono.') },
    { id: 'fc-pe-exit-4', topic: 'pe-exits', front: t('What is a dual-track process?', 'Cos’è un processo dual-track?'), back: t('Preparing an IPO and a sale process in parallel to maximise value and certainty.', 'Preparare in parallelo IPO e processo di vendita per massimizzare valore e certezza.') }
  ]
};

const peVsIb: Lesson = {
  id: 'pe-vs-ib',
  academyId: 'private-equity',
  moduleId: 'P4',
  mode: 'quick',
  minutes: 8,
  difficulty: 1,
  qualitative: true,
  reviewed: R,
  objective: t(
    'Contrast the roles, incentives and daily work of private equity investors and investment bankers.',
    'Confrontare ruoli, incentivi e lavoro quotidiano degli investitori di private equity e dei banker.'
  ),
  screens: [
    {
      type: 'intuition',
      title: t('Adviser vs principal', 'Advisor vs principal'),
      body: t(
        'A banker is an **adviser**: paid mainly by fees when a transaction closes, regardless of whether the deal turns out well for the client five years later. A PE investor is a **principal**: it invests capital and lives with the consequences for the whole holding period.\n\nThat single difference shapes the work, the skills and the pay.',
        'Il banker è un **advisor**: è pagato soprattutto con commissioni al closing, indipendentemente da come andrà il deal per il cliente cinque anni dopo. L’investitore di PE è un **principal**: investe capitale e ne vive le conseguenze per tutto il periodo di detenzione.\n\nQuesta sola differenza determina lavoro, competenze e remunerazione.'
      )
    },
    {
      type: 'technical',
      title: t('Side by side', 'A confronto'),
      body: t('How the two jobs typically differ:', 'Come differiscono tipicamente i due lavori:'),
      table: {
        headers: [t('Aspect', 'Aspetto'), t('Investment banking', 'Investment banking'), t('Private equity', 'Private equity')],
        rows: [
          [t('Role', 'Ruolo'), t('Adviser / intermediary', 'Advisor / intermediario'), t('Investor / owner', 'Investitore / proprietario')],
          [t('Paid by', 'Pagato da'), t('Success fees, retainers, underwriting fees', 'Success fee, retainer, commissioni di collocamento'), t('Management fee + carry', 'Commissione di gestione + carry')],
          [t('Core output', 'Output principale'), t('Pitchbooks, models, process execution', 'Pitchbook, modelli, esecuzione dei processi'), t('Investment decisions, IC memos, portfolio oversight', 'Decisioni d’investimento, IC memo, monitoraggio del portafoglio')],
          [t('Horizon', 'Orizzonte'), t('Deal by deal (months)', 'Deal per deal (mesi)'), t('Hold period (years)', 'Periodo di detenzione (anni)')],
          [t('Team size', 'Dimensione del team'), t('Large, hierarchical', 'Ampio, gerarchico'), t('Lean deal teams', 'Deal team snelli')]
        ]
      }
    },
    {
      type: 'technical',
      title: t('Skills and the path between them', 'Competenze e passaggio da uno all’altro'),
      body: t(
        '- **Bankers** develop modelling speed, valuation, presentation skills, process management and stamina.\n- **PE investors** need judgment: is this a good business at this price? They work on diligence, financing negotiations, board work and value-creation plans.\n- Many PE associates come from **2–3 years of IB analyst experience** (or consulting); the IB toolkit — LBO models, accounting, deal processes — transfers directly.\n- PE interviews add **paper LBOs, modelling tests and case studies** (“would you invest?”), testing commercial judgment, not just technicals.',
        '- I **banker** sviluppano velocità di modellazione, valutazione, capacità di presentazione, gestione dei processi e resistenza.\n- Gli **investitori di PE** hanno bisogno di giudizio: è un buon business a questo prezzo? Lavorano su due diligence, negoziazione dei finanziamenti, consigli di amministrazione e piani di creazione di valore.\n- Molti associate di PE arrivano da **2–3 anni da analyst in IB** (o dalla consulenza); gli strumenti dell’IB — modelli LBO, contabilità, processi di deal — sono direttamente trasferibili.\n- I colloqui PE aggiungono **paper LBO, modelling test e case study** (“investiresti?”), che testano il giudizio commerciale, non solo la tecnica.'
      )
    },
    {
      type: 'example',
      title: t('The same deal, two desks', 'Lo stesso deal, due scrivanie'),
      body: t(
        'Sell-side sale of Eta S.p.A. to a sponsor:\n\n- **The bank’s analyst** drafts the CIM, builds the buyer list, runs the data room, collates bids and updates the valuation summary.\n- **The sponsor’s associate** screens the CIM, builds the LBO model, coordinates diligence advisers, negotiates financing term sheets and writes the IC memo.\n\nAfter closing the banker moves on to the next mandate; the PE associate joins Eta’s board work and tracks the 100-day plan.',
        'Cessione sell-side di Eta S.p.A. a uno sponsor:\n\n- **L’analyst della banca** redige il CIM, costruisce la buyer list, gestisce la data room, raccoglie le offerte e aggiorna la sintesi di valutazione.\n- **L’associate dello sponsor** analizza il CIM, costruisce il modello LBO, coordina gli advisor di due diligence, negozia i term sheet di finanziamento e scrive l’IC memo.\n\nDopo il closing il banker passa al mandato successivo; l’associate di PE segue il lavoro del CdA di Eta e il piano dei primi 100 giorni.'
      )
    },
    {
      type: 'realworld',
      body: t(
        'Large sponsors are among investment banks’ biggest fee payers, so many banks have **financial sponsors coverage groups** that maintain those relationships. The two worlds are deeply interconnected: bankers sell companies to sponsors, finance their LBOs and later run their exits.',
        'I grandi sponsor sono tra i maggiori pagatori di commissioni delle banche d’affari, per questo molte banche hanno **gruppi di copertura financial sponsors** dedicati a queste relazioni. I due mondi sono profondamente connessi: i banker vendono aziende agli sponsor, ne finanziano gli LBO e poi ne gestiscono le exit.'
      )
    },
    { type: 'exercise', questionId: 'pe-vib-q1' },
    { type: 'exercise', questionId: 'pe-vib-q2' },
    {
      type: 'interview',
      question: t('Why investment banking rather than private equity straight away?', 'Perché l’investment banking e non subito il private equity?'),
      answer: t(
        'Banking gives me the strongest training at the start of a career: I’ll learn valuation, modelling and how transactions actually get executed across many deals and sectors, with exposure to clients and senior bankers. That breadth is hard to get in a lean PE team. Longer term I’m interested in the investor side, and I see the analyst years as the foundation for making good judgments later — but right now I want to learn by doing a high volume of deals.',
        'La banca offre la formazione più solida all’inizio della carriera: imparerò valutazione, modellazione e come si eseguono davvero le operazioni su molti deal e settori, a contatto con clienti e banker senior. Questa ampiezza è difficile da ottenere in un team di PE snello. Nel lungo periodo mi interessa il lato investitore, e vedo gli anni da analyst come la base per prendere buone decisioni in futuro — ma ora voglio imparare facendo un grande volume di deal.'
      )
    },
    {
      type: 'mistakes',
      items: [
        t('Telling a bank interviewer you only want IB as a stepping stone to PE.', 'Dire a un intervistatore della banca che vuoi l’IB solo come trampolino per il PE.'),
        t('Thinking PE is just “banking with better hours” — the job is judgment and ownership.', 'Pensare che il PE sia “banca con orari migliori” — il lavoro è giudizio e responsabilità di proprietà.'),
        t('Confusing advisory success fees with carried interest.', 'Confondere le success fee di advisory con il carried interest.')
      ]
    },
    {
      type: 'summary',
      items: [
        t('IB = adviser paid on transactions; PE = principal paid on returns.', 'IB = advisor pagato sulle operazioni; PE = principal pagato sui rendimenti.'),
        t('IB builds the technical toolkit; PE adds investment judgment.', 'L’IB costruisce gli strumenti tecnici; il PE aggiunge il giudizio d’investimento.'),
        t('Sponsors are key bank clients; the two worlds interlock.', 'Gli sponsor sono clienti chiave delle banche; i due mondi sono interconnessi.')
      ]
    }
  ],
  questions: [
    {
      id: 'pe-vib-q1',
      kind: 'mcq',
      topic: 'pe-vs-ib',
      difficulty: 1,
      objective: t('Distinguish adviser and principal economics.', 'Distinguere l’economia dell’advisor da quella del principal.'),
      prompt: t('Which best describes how a sell-side M&A bank is paid?', 'Quale descrizione corrisponde meglio a come viene pagata una banca M&A sell-side?'),
      choices: [
        t('A share of the buyer’s returns over the holding period', 'Una quota dei rendimenti del compratore nel periodo di detenzione'),
        t('Carried interest on the sale price', 'Carried interest sul prezzo di vendita'),
        t('Mainly a success fee on completion, often with a retainer', 'Principalmente una success fee al completamento, spesso con un retainer'),
        t('A fixed salary paid by the target’s employees', 'Uno stipendio fisso pagato dai dipendenti del target')
      ],
      correct: 2,
      explanation: t('Advisers earn success fees (typically a % of deal value) plus sometimes retainers. Returns-based pay (carry) belongs to the PE principal.', 'Gli advisor guadagnano success fee (tipicamente una % del valore del deal) più talvolta retainer. La remunerazione legata ai rendimenti (carry) è propria del principal di PE.')
    },
    {
      id: 'pe-vib-q2',
      kind: 'multi',
      topic: 'pe-vs-ib',
      difficulty: 1,
      objective: t('Assign tasks to the correct side of a deal.', 'Attribuire le attività al lato corretto del deal.'),
      prompt: t('Which tasks are typically done by the PE associate rather than the sell-side bank analyst? Select all that apply.', 'Quali attività svolge tipicamente l’associate di PE e non l’analyst della banca sell-side? Seleziona tutte le risposte corrette.'),
      choices: [
        t('Writing the investment committee memo', 'Scrivere l’IC memo'),
        t('Drafting the CIM', 'Redigere il CIM'),
        t('Negotiating financing term sheets with lenders for the buyer', 'Negoziare per il compratore i term sheet di finanziamento con i finanziatori'),
        t('Running the virtual data room', 'Gestire la virtual data room'),
        t('Monitoring the 100-day plan after closing', 'Monitorare il piano dei primi 100 giorni dopo il closing')
      ],
      correct: [0, 2, 4],
      explanation: t('IC memos, buyer-side financing and post-closing monitoring are investor tasks. The CIM and data room are run by the sell-side adviser.', 'IC memo, finanziamento lato compratore e monitoraggio post-closing sono attività dell’investitore. CIM e data room sono gestiti dall’advisor sell-side.')
    },
    {
      id: 'pe-vib-q3',
      kind: 'mcq',
      topic: 'pe-vs-ib',
      difficulty: 1,
      objective: t('Recognise what PE interviews add beyond IB technicals.', 'Riconoscere cosa aggiungono i colloqui PE rispetto alla tecnica IB.'),
      prompt: t('What do PE interviews typically test that IB analyst interviews test less?', 'Cosa testano tipicamente i colloqui PE che i colloqui da analyst IB testano meno?'),
      choices: [
        t('Basic accounting definitions', 'Definizioni contabili di base'),
        t('Investment judgment through case studies and modelling tests', 'Giudizio d’investimento tramite case study e modelling test'),
        t('Knowledge of league table rankings', 'Conoscenza delle classifiche delle league table'),
        t('Presentation formatting rules', 'Regole di formattazione delle presentazioni')
      ],
      correct: 1,
      explanation: t('PE processes add paper LBOs, full modelling tests and “would you invest?” cases. Accounting is tested in both.', 'I processi PE aggiungono paper LBO, modelling test completi e case “investiresti?”. La contabilità si testa in entrambi.')
    }
  ],
  flashcards: [
    { id: 'fc-pe-vib-1', topic: 'pe-vs-ib', front: t('Adviser vs principal in one line?', 'Advisor vs principal in una riga?'), back: t('Adviser earns fees for executing transactions; principal invests capital and earns returns.', 'L’advisor guadagna commissioni per eseguire operazioni; il principal investe capitale e guadagna rendimenti.') },
    { id: 'fc-pe-vib-2', topic: 'pe-vs-ib', front: t('What is a financial sponsors group?', 'Cos’è un gruppo financial sponsors?'), back: t('A bank coverage team managing relationships with PE firms.', 'Un team di copertura della banca che gestisce le relazioni con i fondi di PE.') },
    { id: 'fc-pe-vib-3', topic: 'pe-vs-ib', front: t('Typical route into PE associate roles?', 'Percorso tipico verso il ruolo di associate di PE?'), back: t('Usually 2–3 years as an IB analyst (or in consulting), then on-cycle/off-cycle PE recruiting.', 'Di solito 2–3 anni da analyst IB (o in consulenza), poi recruiting PE on-cycle/off-cycle.') }
  ]
};


export const lessons: Lesson[] = [peIndustry, peFeesCarry, peFundLifecycle, peSourcing, peIcDiligence, peLboIntuition, peSourcesUses, peDebtTranches, peReturns, pePaperLbo,
  peValueCreation, peBuyAndBuild, peManagementIncentives, peExits, peVsIb];
