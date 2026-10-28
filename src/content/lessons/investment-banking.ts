import type { L, Lesson } from '../types';

/**
 * Academy 6 — Investment Banking (modules IB1–IB4).
 * Firms are named only as broadly recognised examples; no rankings are implied.
 * All companies in numerical examples are hypothetical.
 */

const t = (en: string, it: string): L => ({ en, it });
const R = '2026-10';

/* ============================ IB1 — INDUSTRY STRUCTURE ============================ */

const ibLandscape: Lesson = {
  id: 'ib-landscape',
  academyId: 'investment-banking',
  moduleId: 'IB1',
  mode: 'quick',
  minutes: 8,
  difficulty: 1,
  qualitative: true,
  reviewed: R,
  objective: t(
    'Distinguish bulge brackets, elite boutiques, mid-market and independent advisory firms, and explain the trade-offs for an analyst.',
    'Distinguere bulge bracket, elite boutique, banche mid-market e advisor indipendenti, e spiegare i trade-off per un analyst.'
  ),
  screens: [
    {
      type: 'intuition',
      title: t('Department stores and specialist shops', 'Grandi magazzini e negozi specializzati'),
      body: t(
        'Some banks are **department stores**: they advise on M&A, raise equity and debt, lend money, trade securities and manage wealth — all under one roof. Others are **specialist shops**: they sell only advice, with no balance sheet to lend from.\n\nClients choose based on what they need: a huge cross-border acquisition financed with a bridge loan, or a conflict-free adviser with deep sector expertise.',
        'Alcune banche sono **grandi magazzini**: assistono nell’M&A, raccolgono equity e debito, prestano denaro, negoziano titoli e gestiscono patrimoni — tutto sotto lo stesso tetto. Altre sono **negozi specializzati**: vendono solo consulenza, senza un bilancio da cui prestare.\n\nI clienti scelgono in base al bisogno: una grande acquisizione cross-border finanziata con un bridge loan, oppure un advisor senza conflitti con profonda competenza settoriale.'
      )
    },
    {
      type: 'technical',
      title: t('The main categories', 'Le categorie principali'),
      body: t(
        '- **Bulge brackets**: global, full-service banks active in every product and region — e.g. Goldman Sachs, Morgan Stanley, J.P. Morgan, BofA Securities, Citi. Large European universal banks such as Barclays, Deutsche Bank, UBS and BNP Paribas also run major global IB franchises.\n- **Elite boutiques**: advisory-only firms focused on M&A and often restructuring, working on large deals — e.g. Evercore, Lazard, Centerview, PJT Partners, Moelis, Perella Weinberg; Rothschild & Co is a leading independent adviser with a strong European presence.\n- **Middle-market banks**: focus on smaller deals, often sponsor-driven — e.g. Houlihan Lokey, William Blair, Lincoln International, Harris Williams.\n- **Domestic champions**: e.g. in Italy Mediobanca, Intesa Sanpaolo (IMI CIB) and UniCredit; plus Italian independents such as Equita, and the corporate finance arms of the Big Four.',
        '- **Bulge bracket**: banche globali full-service, attive in tutti i prodotti e le aree — ad es. Goldman Sachs, Morgan Stanley, J.P. Morgan, BofA Securities, Citi. Anche grandi banche universali europee come Barclays, Deutsche Bank, UBS e BNP Paribas hanno importanti franchise globali di IB.\n- **Elite boutique**: società di sola advisory focalizzate su M&A e spesso restructuring, attive su grandi deal — ad es. Evercore, Lazard, Centerview, PJT Partners, Moelis, Perella Weinberg; Rothschild & Co è un advisor indipendente di primo piano con forte presenza in Europa.\n- **Banche mid-market**: deal più piccoli, spesso con sponsor — ad es. Houlihan Lokey, William Blair, Lincoln International, Harris Williams.\n- **Campioni nazionali**: in Italia ad es. Mediobanca, Intesa Sanpaolo (IMI CIB) e UniCredit; più indipendenti italiani come Equita e le divisioni corporate finance delle Big Four.'
      )
    },
    {
      type: 'technical',
      title: t('What changes for you as an analyst', 'Cosa cambia per te come analyst'),
      body: t(
        '- **Bulge bracket**: big brand, structured training, exposure to financing products (LevFin, ECM, DCM), large teams; you may be one of many on a deal.\n- **Elite boutique**: advisory-heavy, often leaner teams and more senior exposure; strong M&A and restructuring training; no lending, so no financing cross-sell.\n- **Mid-market**: more deals closed per year, broad responsibility early, many sponsor clients.\n- **Domestic bank**: deep local relationships and market share at home; in Italy, strong access to family-owned companies and large corporates.\n\nCompensation, hours and culture vary more by **team** than by label — talk to people in the group.',
        '- **Bulge bracket**: grande brand, formazione strutturata, esposizione ai prodotti di finanziamento (LevFin, ECM, DCM), team ampi; puoi essere uno dei tanti su un deal.\n- **Elite boutique**: forte focus sull’advisory, team spesso più snelli e maggiore contatto con i senior; ottima formazione M&A e restructuring; nessun finanziamento, quindi nessun cross-selling di prodotti di debito.\n- **Mid-market**: più deal chiusi l’anno, responsabilità ampie fin da subito, molti clienti sponsor.\n- **Banca domestica**: relazioni locali profonde e quote di mercato elevate in patria; in Italia, accesso privilegiato alle aziende familiari e ai grandi gruppi.\n\nRemunerazione, orari e cultura variano più per **team** che per etichetta — parla con chi lavora nel gruppo.'
      )
    },
    {
      type: 'example',
      title: t('Who might advise whom', 'Chi potrebbe assistere chi'),
      body: t('Hypothetical situations and the type of adviser that typically fits:', 'Situazioni ipotetiche e il tipo di advisor che tipicamente si adatta:'),
      table: {
        headers: [t('Situation', 'Situazione'), t('Typical adviser', 'Advisor tipico')],
        rows: [
          [t('€20bn cross-border acquisition needing a bridge loan', 'Acquisizione cross-border da €20mld con bridge loan'), t('Bulge bracket(s), often alongside a boutique', 'Una o più bulge bracket, spesso con una boutique')],
          [t('Board wants a conflict-free second opinion and fairness opinion', 'Il CdA vuole un secondo parere indipendente e una fairness opinion'), t('Elite boutique / independent', 'Elite boutique / indipendente')],
          [t('Sponsor selling a €150m EV business', 'Sponsor che vende un’azienda da €150m di EV'), t('Mid-market bank', 'Banca mid-market')],
          [t('Italian family selling a majority stake', 'Famiglia italiana che cede una quota di maggioranza'), t('Domestic bank, boutique or Big Four CF', 'Banca domestica, boutique o CF di una Big Four')]
        ]
      }
    },
    {
      type: 'realworld',
      body: t(
        'The landscape keeps shifting — banks merge, exit businesses or are acquired (e.g. UBS’s 2023 takeover of Credit Suisse), and boutiques grow into large firms. Avoid quoting rankings you cannot source; interviewers care more that you understand **business models** and why a client would hire each type of firm.',
        'Il panorama cambia continuamente — le banche si fondono, escono da business o vengono acquisite (ad es. l’acquisizione di Credit Suisse da parte di UBS nel 2023), e le boutique crescono fino a diventare grandi realtà. Evita di citare classifiche senza fonte; agli intervistatori interessa di più che tu capisca i **modelli di business** e perché un cliente sceglie ciascun tipo di banca.'
      )
    },
    { type: 'exercise', questionId: 'ib-land-q1' },
    { type: 'exercise', questionId: 'ib-land-q2' },
    {
      type: 'interview',
      question: t('Why are you applying to a boutique rather than a bulge bracket?', 'Perché ti candidi in una boutique e non in una bulge bracket?'),
      answer: t(
        'Because I want to focus on advisory and get as much deal responsibility as early as possible. At an independent firm the teams are leaner, so analysts work closely with senior bankers and see the whole M&A process — from the pitch to the SPA. I also like the independence of the model: advice isn’t tied to selling a financing product. [If true: what you learned from real conversations with the firm’s bankers — e.g. the client exposure analysts get.]',
        'Perché voglio concentrarmi sull’advisory e avere quanta più responsabilità possibile sui deal fin da subito. In una società indipendente i team sono più snelli, quindi gli analyst lavorano a stretto contatto con i senior e vedono tutto il processo M&A — dal pitch allo SPA. Mi piace anche l’indipendenza del modello: la consulenza non è legata alla vendita di un prodotto di finanziamento. [Se vero: cosa hai appreso da conversazioni reali con i banker della società — es. l’esposizione degli analyst ai clienti.]'
      )
    },
    {
      type: 'mistakes',
      items: [
        t('Reciting league-table rankings instead of explaining business models.', 'Recitare classifiche delle league table invece di spiegare i modelli di business.'),
        t('Saying boutiques do “smaller deals”: elite boutiques advise on some of the largest transactions.', 'Dire che le boutique fanno “deal più piccoli”: le elite boutique assistono alcune delle operazioni più grandi.'),
        t('Bad-mouthing other banks when explaining your preference.', 'Parlare male di altre banche quando spieghi la tua preferenza.')
      ]
    },
    {
      type: 'summary',
      items: [
        t('Bulge brackets: full service with balance sheet; elite boutiques: advice only.', 'Bulge bracket: servizio completo con bilancio; elite boutique: solo consulenza.'),
        t('Mid-market and domestic banks: many deals, strong local and sponsor coverage.', 'Mid-market e banche domestiche: molti deal, forte copertura locale e degli sponsor.'),
        t('Choose on team, training and deal flow, not just the label.', 'Scegli in base a team, formazione e flusso di deal, non solo all’etichetta.')
      ]
    }
  ],
  questions: [
    {
      id: 'ib-land-q1',
      kind: 'mcq',
      topic: 'ib-landscape',
      difficulty: 1,
      objective: t('Identify the defining feature of an elite boutique.', 'Individuare la caratteristica distintiva di un’elite boutique.'),
      prompt: t('What most distinguishes an elite boutique from a bulge bracket?', 'Cosa distingue maggiormente un’elite boutique da una bulge bracket?'),
      choices: [
        t('It only works on deals below €100m', 'Lavora solo su deal sotto €100m'),
        t('It is not regulated', 'Non è regolamentata'),
        t('It only operates in one country', 'Opera in un solo paese'),
        t('It provides advice without lending or underwriting from its own balance sheet', 'Fornisce consulenza senza prestare né sottoscrivere con il proprio bilancio')
      ],
      correct: 3,
      explanation: t(
        'Elite boutiques are advisory-focused and do not lend. Many are global and work on very large deals, and they are regulated like other financial firms.',
        'Le elite boutique sono focalizzate sull’advisory e non prestano. Molte sono globali, lavorano su deal molto grandi e sono regolamentate come le altre società finanziarie.'
      )
    },
    {
      id: 'ib-land-q2',
      kind: 'multi',
      topic: 'ib-landscape',
      difficulty: 1,
      objective: t('Recognise the advantages of a full-service bank.', 'Riconoscere i vantaggi di una banca full-service.'),
      prompt: t('Which can a bulge bracket offer that an advisory-only firm cannot? Select all that apply.', 'Cosa può offrire una bulge bracket che una società di sola advisory non può? Seleziona tutte le risposte corrette.'),
      choices: [
        t('Committed acquisition financing (e.g. a bridge loan)', 'Finanziamento d’acquisizione impegnato (ad es. un bridge loan)'),
        t('Underwriting an IPO or bond issue', 'Sottoscrizione di un’IPO o di un’emissione obbligazionaria'),
        t('M&A advice', 'Consulenza M&A'),
        t('Corporate lending relationships', 'Relazioni di credito corporate'),
        t('Fairness opinions', 'Fairness opinion')
      ],
      correct: [0, 1, 3],
      explanation: t('Financing, underwriting and lending need a balance sheet. M&A advice and fairness opinions are offered by both types of firm.', 'Finanziamento, sottoscrizione e credito richiedono un bilancio. Consulenza M&A e fairness opinion sono offerte da entrambi i tipi di banca.')
    },
    {
      id: 'ib-land-q3',
      kind: 'mcq',
      topic: 'ib-landscape',
      difficulty: 2,
      objective: t('Match a client need to the right type of adviser.', 'Associare un’esigenza del cliente al tipo di advisor adatto.'),
      prompt: t(
        'A listed company’s board is considering a bid from a buyer whose financing is provided by the company’s main relationship bank. The board wants independent advice. Which adviser fits best?',
        'Il CdA di una società quotata valuta un’offerta di un compratore finanziato dalla principale banca di riferimento della società. Il CdA vuole una consulenza indipendente. Quale advisor è più adatto?'
      ),
      choices: [
        t('The relationship bank’s M&A team', 'Il team M&A della banca di riferimento'),
        t('An independent advisory firm with no financing role', 'Una società di advisory indipendente senza ruoli nel finanziamento'),
        t('The buyer’s financing bank', 'La banca finanziatrice del compratore'),
        t('The company’s auditor', 'La società di revisione della società')
      ],
      correct: 1,
      explanation: t(
        'The relationship bank is conflicted because it finances the buyer. An independent adviser avoids that conflict; auditors face independence restrictions on such services.',
        'La banca di riferimento è in conflitto perché finanzia il compratore. Un advisor indipendente evita il conflitto; i revisori hanno vincoli di indipendenza su questi servizi.'
      )
    }
  ],
  flashcards: [
    { id: 'fc-ib-land-1', topic: 'ib-landscape', front: t('Name three bulge bracket banks.', 'Indica tre banche bulge bracket.'), back: t('E.g. Goldman Sachs, Morgan Stanley, J.P. Morgan (also BofA Securities, Citi).', 'Ad es. Goldman Sachs, Morgan Stanley, J.P. Morgan (anche BofA Securities, Citi).') },
    { id: 'fc-ib-land-2', topic: 'ib-landscape', front: t('Name three elite boutiques.', 'Indica tre elite boutique.'), back: t('E.g. Evercore, Lazard, Centerview (also PJT, Moelis, Perella Weinberg).', 'Ad es. Evercore, Lazard, Centerview (anche PJT, Moelis, Perella Weinberg).') },
    { id: 'fc-ib-land-3', topic: 'ib-landscape', front: t('Key business-model difference: bulge bracket vs boutique?', 'Differenza chiave di modello: bulge bracket vs boutique?'), back: t('Bulge brackets have a balance sheet (lending, underwriting, trading); boutiques sell advice only.', 'Le bulge bracket hanno un bilancio (credito, sottoscrizione, trading); le boutique vendono solo consulenza.') },
    { id: 'fc-ib-land-4', topic: 'ib-landscape', front: t('Examples of leading Italian domestic IB players?', 'Esempi di operatori IB domestici italiani di primo piano?'), back: t('Mediobanca, Intesa Sanpaolo (IMI CIB), UniCredit; independents such as Equita.', 'Mediobanca, Intesa Sanpaolo (IMI CIB), UniCredit; indipendenti come Equita.') }
  ]
};

const ibGroups: Lesson = {
  id: 'ib-groups',
  academyId: 'investment-banking',
  moduleId: 'IB1',
  mode: 'quick',
  minutes: 7,
  difficulty: 1,
  qualitative: true,
  reviewed: R,
  objective: t(
    'Explain the difference between coverage (industry/country) groups and product groups and how they work together on a deal.',
    'Spiegare la differenza tra gruppi di copertura (settoriali/geografici) e gruppi di prodotto e come collaborano su un deal.'
  ),
  screens: [
    {
      type: 'intuition',
      title: t('Relationship managers and specialists', 'Gestori della relazione e specialisti'),
      body: t(
        'A bank is organised like a hospital. **Coverage bankers** are the family doctors: they know the client, its industry and its strategy, and spot what it needs. **Product bankers** are the specialists: M&A, equity or debt experts who execute the transaction.\n\nOn most deals, both work together in one team.',
        'Una banca è organizzata come un ospedale. I **banker di copertura** sono i medici di base: conoscono il cliente, il suo settore e la sua strategia, e capiscono di cosa ha bisogno. I **banker di prodotto** sono gli specialisti: esperti di M&A, equity o debito che eseguono l’operazione.\n\nSulla maggior parte dei deal lavorano insieme in un unico team.'
      )
    },
    {
      type: 'technical',
      title: t('Coverage groups', 'Gruppi di copertura'),
      body: t(
        '- **Industry groups**: e.g. TMT (technology, media, telecom), Healthcare, Consumer & Retail, Industrials, Energy & Power / Natural Resources, FIG (financial institutions), Real Estate, Infrastructure.\n- **Financial Sponsors Group (FSG)**: covers PE firms as clients.\n- **Country / regional coverage**: e.g. an Italy team covering Italian corporates across sectors — common in European banks.\n\nCoverage bankers own the relationship, pitch ideas (M&A, refinancing, IPO), and stay with the client across deals.',
        '- **Gruppi settoriali**: ad es. TMT (tecnologia, media, telecomunicazioni), Healthcare, Consumer & Retail, Industrials, Energy & Power / Natural Resources, FIG (istituzioni finanziarie), Real Estate, Infrastrutture.\n- **Financial Sponsors Group (FSG)**: copre i fondi di PE come clienti.\n- **Copertura per paese / area**: ad es. un team Italia che copre i gruppi italiani di tutti i settori — frequente nelle banche europee.\n\nI banker di copertura gestiscono la relazione, propongono idee (M&A, rifinanziamenti, IPO) e seguono il cliente nel tempo, deal dopo deal.'
      )
    },
    {
      type: 'technical',
      title: t('Product groups', 'Gruppi di prodotto'),
      body: t(
        '- **M&A**: buy-side and sell-side advisory, mergers, defence, fairness opinions.\n- **ECM**: IPOs, follow-ons, accelerated bookbuilds, convertibles.\n- **DCM**: investment-grade bonds, loans, hybrids.\n- **Leveraged Finance**: sub-investment-grade loans and high-yield bonds, often for LBOs.\n- **Restructuring**: advice to distressed companies or their creditors.\n\nSome banks fold M&A execution into industry groups; others keep a separate M&A group. Analysts in industry groups often do more pitching and broader work; product analysts go deeper on execution.',
        '- **M&A**: advisory buy-side e sell-side, fusioni, difesa, fairness opinion.\n- **ECM**: IPO, aumenti di capitale, accelerated bookbuilding, convertibili.\n- **DCM**: bond investment grade, prestiti, ibridi.\n- **Leveraged Finance**: prestiti e bond high yield sub-investment grade, spesso per LBO.\n- **Restructuring**: consulenza a società in crisi o ai loro creditori.\n\nAlcune banche integrano l’esecuzione M&A nei gruppi settoriali; altre hanno un gruppo M&A separato. Gli analyst dei gruppi settoriali fanno spesso più pitch e lavoro trasversale; quelli di prodotto approfondiscono l’esecuzione.'
      )
    },
    {
      type: 'example',
      title: t('Staffing a deal', 'Lo staffing di un deal'),
      body: t(
        'A hypothetical Italian industrial group, Theta S.p.A., wants to buy a German competitor financed partly with new bonds:',
        'Un gruppo industriale italiano ipotetico, Theta S.p.A., vuole acquisire un concorrente tedesco finanziandosi in parte con nuove obbligazioni:'
      ),
      table: {
        headers: [t('Team', 'Team'), t('Role on the deal', 'Ruolo nel deal')],
        rows: [
          [t('Italy / Industrials coverage', 'Copertura Italia / Industrials'), t('Owns the relationship with Theta’s CEO and CFO; originated the idea', 'Gestisce la relazione con CEO e CFO di Theta; ha originato l’idea')],
          [t('M&A', 'M&A'), t('Valuation, negotiation strategy, SPA support, process', 'Valutazione, strategia negoziale, supporto sullo SPA, processo')],
          [t('DCM', 'DCM'), t('Structures and places the bond to refinance the bridge', 'Struttura e colloca il bond per rifinanziare il bridge')],
          [t('Credit / lending', 'Credito'), t('Provides the committed bridge facility', 'Fornisce la linea bridge impegnata')]
        ]
      }
    },
    {
      type: 'realworld',
      body: t(
        'When you apply, you are usually placed in a group (or rotate before choosing). Your group shapes your skills: a FIG analyst learns bank and insurance valuation; a LevFin analyst learns credit; an M&A analyst models mergers and LBOs daily. In interviews, show you know what the group you are applying to actually does.',
        'Quando ti candidi, di solito vieni assegnato a un gruppo (o ruoti prima di scegliere). Il gruppo forma le tue competenze: un analyst FIG impara a valutare banche e assicurazioni; uno LevFin impara il credito; uno M&A modella fusioni e LBO ogni giorno. Al colloquio dimostra di sapere cosa fa davvero il gruppo per cui ti candidi.'
      )
    },
    { type: 'exercise', questionId: 'ib-grp-q1' },
    { type: 'exercise', questionId: 'ib-grp-q2' },
    {
      type: 'interview',
      question: t('Would you rather join a coverage group or a product group?', 'Preferiresti un gruppo di copertura o un gruppo di prodotto?'),
      answer: t(
        'I’m drawn to M&A as a product group because I want to build deep execution skills — valuation, process management and negotiations — and see deals through to signing across different sectors. That said, I understand coverage is where relationships and origination happen, and at your bank M&A and the industry teams work side by side on each mandate, so I’d expect to learn from both.',
        'Sono attratto dall’M&A come gruppo di prodotto perché voglio costruire competenze di esecuzione profonde — valutazione, gestione del processo e negoziazione — e seguire i deal fino al signing in settori diversi. Detto ciò, so che è nella copertura che nascono relazioni e mandati, e nella vostra banca M&A e team settoriali lavorano fianco a fianco su ogni mandato, quindi mi aspetto di imparare da entrambi.'
      )
    },
    {
      type: 'mistakes',
      items: [
        t('Thinking coverage bankers don’t execute deals — in many banks they do.', 'Pensare che i banker di copertura non eseguano deal — in molte banche lo fanno.'),
        t('Confusing the Financial Sponsors Group with Leveraged Finance: FSG covers clients; LevFin provides a product.', 'Confondere Financial Sponsors Group e Leveraged Finance: l’FSG copre clienti, il LevFin fornisce un prodotto.'),
        t('Applying to a group without knowing its typical clients and deals.', 'Candidarsi a un gruppo senza conoscerne clienti e deal tipici.')
      ]
    },
    {
      type: 'summary',
      items: [
        t('Coverage = client relationship (industry, sponsor or country).', 'Copertura = relazione con il cliente (settore, sponsor o paese).'),
        t('Product = transaction expertise (M&A, ECM, DCM, LevFin, Restructuring).', 'Prodotto = competenza transazionale (M&A, ECM, DCM, LevFin, Restructuring).'),
        t('Deals are staffed with both working together.', 'I deal vengono staffati con entrambi che collaborano.')
      ]
    }
  ],
  questions: [
    {
      id: 'ib-grp-q1',
      kind: 'mcq',
      topic: 'ib-groups',
      difficulty: 1,
      objective: t('Classify a group as coverage or product.', 'Classificare un gruppo come copertura o prodotto.'),
      prompt: t('Which of these is a coverage group?', 'Quale di questi è un gruppo di copertura?'),
      choices: [
        t('Equity Capital Markets', 'Equity Capital Markets'),
        t('Leveraged Finance', 'Leveraged Finance'),
        t('Financial Institutions Group (FIG)', 'Financial Institutions Group (FIG)'),
        t('Restructuring', 'Restructuring')
      ],
      correct: 2,
      explanation: t('FIG covers a client industry (banks, insurers, asset managers). ECM, LevFin and Restructuring are product groups.', 'Il FIG copre un settore di clienti (banche, assicurazioni, asset manager). ECM, LevFin e Restructuring sono gruppi di prodotto.')
    },
    {
      id: 'ib-grp-q2',
      kind: 'multi',
      topic: 'ib-groups',
      difficulty: 1,
      objective: t('Identify product groups.', 'Riconoscere i gruppi di prodotto.'),
      prompt: t('Which are product groups? Select all that apply.', 'Quali sono gruppi di prodotto? Seleziona tutte le risposte corrette.'),
      choices: [t('M&A', 'M&A'), t('Healthcare', 'Healthcare'), t('DCM', 'DCM'), t('Financial Sponsors Group', 'Financial Sponsors Group'), t('Leveraged Finance', 'Leveraged Finance')],
      correct: [0, 2, 4],
      explanation: t('M&A, DCM and LevFin are products. Healthcare is an industry coverage group and FSG covers PE clients.', 'M&A, DCM e LevFin sono prodotti. Healthcare è un gruppo di copertura settoriale e l’FSG copre i clienti di PE.')
    },
    {
      id: 'ib-grp-q3',
      kind: 'mcq',
      topic: 'ib-groups',
      difficulty: 2,
      objective: t('Assign responsibilities on a deal team.', 'Attribuire le responsabilità in un deal team.'),
      prompt: t('A PE firm wants to finance an LBO with a TLB and high-yield bonds. Which two teams would typically lead?', 'Un fondo di PE vuole finanziare un LBO con un TLB e bond high yield. Quali due team guiderebbero tipicamente?'),
      choices: [
        t('ECM and FIG', 'ECM e FIG'),
        t('Financial Sponsors Group and Leveraged Finance', 'Financial Sponsors Group e Leveraged Finance'),
        t('DCM investment grade and Restructuring', 'DCM investment grade e Restructuring'),
        t('Healthcare coverage and ECM', 'Copertura Healthcare ed ECM')
      ],
      correct: 1,
      explanation: t('FSG owns the sponsor relationship; LevFin structures and syndicates sub-investment-grade debt. IG DCM is for higher-rated issuers.', 'L’FSG gestisce la relazione con lo sponsor; il LevFin struttura e sindaca il debito sub-investment grade. Il DCM IG serve emittenti con rating più alto.')
    }
  ],
  flashcards: [
    { id: 'fc-ib-grp-1', topic: 'ib-groups', front: t('Coverage vs product group?', 'Gruppo di copertura vs prodotto?'), back: t('Coverage owns client relationships by industry/sponsor/country; product groups execute specific transaction types.', 'La copertura gestisce i clienti per settore/sponsor/paese; i gruppi di prodotto eseguono specifici tipi di operazione.') },
    { id: 'fc-ib-grp-2', topic: 'ib-groups', front: t('What does FIG stand for?', 'Cosa significa FIG?'), back: t('Financial Institutions Group — covers banks, insurers, asset managers, fintech.', 'Financial Institutions Group — copre banche, assicurazioni, asset manager, fintech.') },
    { id: 'fc-ib-grp-3', topic: 'ib-groups', front: t('What does TMT stand for?', 'Cosa significa TMT?'), back: t('Technology, Media and Telecommunications.', 'Technology, Media and Telecommunications (tecnologia, media e telecomunicazioni).') }
  ]
};

/* ============================ IB2 — PRODUCTS ============================ */

const ibProducts: Lesson = {
  id: 'ib-products',
  academyId: 'investment-banking',
  moduleId: 'IB2',
  mode: 'deep',
  minutes: 13,
  difficulty: 1,
  qualitative: true,
  reviewed: R,
  objective: t(
    'Describe what M&A, ECM, DCM, Leveraged Finance and Restructuring teams do, who their clients are and how they are paid.',
    'Descrivere cosa fanno i team M&A, ECM, DCM, Leveraged Finance e Restructuring, chi sono i loro clienti e come vengono remunerati.'
  ),
  screens: [
    {
      type: 'intuition',
      title: t('Buying, selling and funding companies', 'Comprare, vendere e finanziare aziende'),
      body: t(
        'Investment banks help companies with three big questions: **should we buy or sell a business?** (M&A), **how do we raise money?** (equity via ECM, debt via DCM or LevFin) and **what if we cannot pay our debts?** (Restructuring).\n\nEach product has its own clients, skills and fee model.',
        'Le banche d’affari aiutano le aziende a rispondere a tre grandi domande: **dobbiamo comprare o vendere un business?** (M&A), **come raccogliamo capitali?** (equity tramite ECM, debito tramite DCM o LevFin) e **cosa succede se non riusciamo a pagare i debiti?** (Restructuring).\n\nOgni prodotto ha i suoi clienti, le sue competenze e il suo modello di commissioni.'
      )
    },
    {
      type: 'technical',
      title: t('M&A', 'M&A'),
      body: t(
        '- **Sell-side**: run an auction or bilateral sale — teaser, CIM, buyer outreach, bids, data room, SPA negotiation, signing and closing.\n- **Buy-side**: identify targets, value them, structure and negotiate the offer, coordinate financing and diligence.\n- **Other**: mergers, takeover defence, spin-offs, joint ventures, fairness opinions.\n\n**Clients**: corporates, PE sponsors, families, governments.\n**Fees**: mostly a **success fee** (a percentage of transaction value, usually declining as deal size rises), sometimes with a retainer or announcement fee.',
        '- **Sell-side**: gestire un’asta o una vendita bilaterale — teaser, CIM, contatto dei compratori, offerte, data room, negoziazione dello SPA, signing e closing.\n- **Buy-side**: individuare i target, valutarli, strutturare e negoziare l’offerta, coordinare finanziamento e due diligence.\n- **Altro**: fusioni, difesa da OPA ostili, scissioni, joint venture, fairness opinion.\n\n**Clienti**: gruppi industriali, sponsor di PE, famiglie, governi.\n**Commissioni**: soprattutto una **success fee** (una percentuale del valore dell’operazione, di solito decrescente al crescere della dimensione), talvolta con retainer o fee all’annuncio.'
      )
    },
    {
      type: 'technical',
      title: t('ECM and DCM', 'ECM e DCM'),
      body: t(
        '**ECM (Equity Capital Markets)**: IPOs, rights issues and capital increases, accelerated bookbuilds (ABBs) for selling shareholders, convertible bonds. The bank advises on valuation and timing, builds the order book with investors and **underwrites** the offering. Paid via a **gross spread / underwriting commission** — a % of proceeds.\n\n**DCM (Debt Capital Markets)**: investment-grade bonds (e.g. Eurobonds), commercial paper, hybrids, green and sustainability-linked bonds, often alongside syndicated loans. The bank advises on structure, tenor and pricing (spread over swaps/government bonds), runs the bookbuild and allocates. Fees are lower per euro raised, but volumes are large and repeat.',
        '**ECM (Equity Capital Markets)**: IPO, aumenti di capitale in opzione e non, accelerated bookbuilding (ABB) per azionisti venditori, obbligazioni convertibili. La banca consiglia su valutazione e tempistica, costruisce il libro ordini con gli investitori e **garantisce** il collocamento. Remunerazione tramite **gross spread / commissione di sottoscrizione** — una % dei proventi.\n\n**DCM (Debt Capital Markets)**: bond investment grade (ad es. Eurobond), commercial paper, ibridi, green bond e sustainability-linked bond, spesso insieme a prestiti sindacati. La banca consiglia su struttura, durata e pricing (spread su swap/titoli di Stato), gestisce il bookbuilding e le allocazioni. Le commissioni per euro raccolto sono più basse, ma i volumi sono ampi e ricorrenti.'
      )
    },
    {
      type: 'technical',
      title: t('Leveraged Finance and Restructuring', 'Leveraged Finance e Restructuring'),
      body: t(
        '**Leveraged Finance**: sub-investment-grade debt — Term Loan B, high-yield bonds, bridges — mostly for LBOs, acquisitions by leveraged corporates, refinancings and dividend recaps. Clients are mainly **PE sponsors** and leveraged issuers. The bank often **underwrites** the debt and syndicates it to investors; it earns arrangement/underwriting fees but bears market risk until syndication.\n\n**Restructuring**: advises companies (debtor side) or creditor groups when debt is unsustainable — amend & extend, debt-for-equity swaps, distressed M&A, court procedures (e.g. US Chapter 11; in Italy the Code of Business Crisis and Insolvency, D.Lgs. 14/2019). Fees: monthly retainers plus a completion fee. Counter-cyclical: busiest in downturns.',
        '**Leveraged Finance**: debito sub-investment grade — Term Loan B, bond high yield, bridge — soprattutto per LBO, acquisizioni di società indebitate, rifinanziamenti e dividend recap. I clienti sono principalmente **sponsor di PE** ed emittenti a leva. La banca spesso **sottoscrive** il debito e lo sindaca agli investitori; guadagna commissioni di arrangement/underwriting ma sopporta il rischio di mercato fino alla sindacazione.\n\n**Restructuring**: assiste le società (lato debitore) o i gruppi di creditori quando il debito è insostenibile — amend & extend, conversione di debito in equity, M&A distressed, procedure giudiziali (ad es. Chapter 11 negli USA; in Italia il Codice della crisi d’impresa e dell’insolvenza, D.Lgs. 14/2019). Commissioni: retainer mensili più una completion fee. Anticiclico: più attivo nelle recessioni.'
      )
    },
    {
      type: 'example',
      title: t('One client, five products', 'Un cliente, cinque prodotti'),
      body: t('Over ten years, a hypothetical company Iota S.p.A. might use every product:', 'In dieci anni un’azienda ipotetica, Iota S.p.A., potrebbe usare tutti i prodotti:'),
      table: {
        headers: [t('Year', 'Anno'), t('Event', 'Evento'), t('Product', 'Prodotto')],
        rows: [
          ['1', t('Founder family sells majority to a PE fund', 'La famiglia fondatrice cede la maggioranza a un fondo di PE'), t('M&A (sell-side)', 'M&A (sell-side)')],
          ['1', t('Sponsor finances the LBO with TLB + bonds', 'Lo sponsor finanzia l’LBO con TLB + bond'), t('LevFin', 'LevFin')],
          ['5', t('IPO on Euronext Milan', 'IPO su Euronext Milan'), t('ECM', 'ECM')],
          ['7', t('Investment-grade rating; issues a 7-year bond', 'Rating investment grade; emette un bond a 7 anni'), t('DCM', 'DCM')],
          ['10', t('Sector downturn; renegotiates debt with creditors', 'Crisi del settore; rinegozia il debito con i creditori'), t('Restructuring', 'Restructuring')]
        ]
      }
    },
    {
      type: 'realworld',
      body: t(
        'Product cycles differ: M&A and ECM are highly sensitive to equity markets and confidence; DCM is steadier because companies always need to refinance; LevFin tracks credit conditions and PE activity; restructuring rises when rates are high and the economy weakens. Banks with a balance across products have more stable revenues.',
        'I cicli dei prodotti sono diversi: M&A ed ECM sono molto sensibili ai mercati azionari e alla fiducia; il DCM è più stabile perché le aziende devono sempre rifinanziarsi; il LevFin segue le condizioni del credito e l’attività del PE; il restructuring cresce quando i tassi sono alti e l’economia rallenta. Le banche con un mix equilibrato di prodotti hanno ricavi più stabili.'
      )
    },
    { type: 'exercise', questionId: 'ib-prod-q1' },
    { type: 'exercise', questionId: 'ib-prod-q2' },
    { type: 'exercise', questionId: 'ib-prod-q3' },
    {
      type: 'interview',
      question: t('What is the difference between DCM and Leveraged Finance?', 'Qual è la differenza tra DCM e Leveraged Finance?'),
      answer: t(
        'Both raise debt, but for different credits. DCM typically serves investment-grade issuers — large corporates, financials, sovereigns — issuing bonds or loans at relatively tight spreads, with lighter covenants and high volumes. Leveraged Finance serves sub-investment-grade borrowers, often sponsor-backed LBOs, using Term Loan B, high-yield bonds and bridges. LevFin deals are more structured, involve heavier credit analysis and covenants, carry higher fees, and the bank often underwrites and takes syndication risk.',
        'Entrambi raccolgono debito, ma per crediti diversi. Il DCM serve di solito emittenti investment grade — grandi gruppi, istituzioni finanziarie, Stati — che emettono bond o prestiti con spread relativamente contenuti, covenant più leggeri e volumi elevati. Il Leveraged Finance serve debitori sub-investment grade, spesso LBO di sponsor, con Term Loan B, bond high yield e bridge. I deal LevFin sono più strutturati, richiedono analisi del credito e covenant più approfonditi, hanno commissioni più alte e la banca spesso sottoscrive e si assume il rischio di sindacazione.'
      )
    },
    {
      type: 'mistakes',
      items: [
        t('Saying ECM “only does IPOs” — follow-ons, ABBs and convertibles are a large share of activity.', 'Dire che l’ECM “fa solo IPO” — aumenti di capitale, ABB e convertibili sono una parte rilevante dell’attività.'),
        t('Assuming restructuring bankers only work for the company — many advise creditor groups.', 'Pensare che i banker di restructuring lavorino solo per la società — molti assistono gruppi di creditori.'),
        t('Forgetting underwriting risk: in a firm underwriting, the bank may be left holding securities or loans.', 'Dimenticare il rischio di sottoscrizione: con una garanzia di collocamento la banca può restare con titoli o prestiti in portafoglio.')
      ]
    },
    {
      type: 'summary',
      items: [
        t('M&A: advice on buying/selling, paid via success fees.', 'M&A: consulenza su acquisizioni/cessioni, pagata con success fee.'),
        t('ECM/DCM: raise equity/investment-grade debt; LevFin: sub-IG debt for LBOs.', 'ECM/DCM: raccolta di equity/debito investment grade; LevFin: debito sub-IG per LBO.'),
        t('Restructuring: distressed situations; counter-cyclical.', 'Restructuring: situazioni di crisi; anticiclico.')
      ]
    }
  ],
  questions: [
    {
      id: 'ib-prod-q1',
      kind: 'numeric',
      topic: 'ib-products',
      difficulty: 1,
      objective: t('Compute an M&A success fee from a fee letter.', 'Calcolare una success fee M&A da una lettera d’incarico.'),
      prompt: t(
        'A hypothetical engagement letter sets a 1.25% success fee on transaction value. The deal closes at €480m. What is the fee (€m)?',
        'Una lettera d’incarico ipotetica prevede una success fee dell’1,25% sul valore dell’operazione. Il deal si chiude a €480m. Qual è la commissione (€m)?'
      ),
      answer: 6,
      unit: '€m',
      verify: { fn: 'product', args: [480, 0.0125] },
      explanation: t('480 × 1.25% = 6.0. Real fee letters often use tiered or ratcheted percentages and may credit a retainer against the success fee.', '480 × 1,25% = 6,0. Le lettere d’incarico reali usano spesso percentuali a scaglioni o incentivanti e possono dedurre il retainer dalla success fee.')
    },
    {
      id: 'ib-prod-q2',
      kind: 'mcq',
      topic: 'ib-products',
      difficulty: 1,
      objective: t('Match a transaction to the right product group.', 'Associare un’operazione al gruppo di prodotto corretto.'),
      prompt: t('A listed company’s largest shareholder sells a 5% stake overnight to institutional investors. Which team runs this?', 'Il principale azionista di una società quotata cede overnight una quota del 5% a investitori istituzionali. Quale team gestisce l’operazione?'),
      choices: [t('DCM', 'DCM'), t('M&A', 'M&A'), t('Restructuring', 'Restructuring'), t('ECM (accelerated bookbuild)', 'ECM (accelerated bookbuilding)')],
      correct: 3,
      explanation: t('An overnight placement of existing shares is an accelerated bookbuild, an ECM product. It is not an M&A transaction because no control changes hands.', 'Il collocamento overnight di azioni esistenti è un accelerated bookbuilding, prodotto ECM. Non è M&A perché non cambia il controllo.')
    },
    {
      id: 'ib-prod-q3',
      kind: 'numeric',
      topic: 'ib-products',
      difficulty: 1,
      objective: t('Compute an underwriting commission.', 'Calcolare una commissione di sottoscrizione.'),
      prompt: t('An IPO raises €250m with a hypothetical 2.5% gross spread. What are total underwriting fees (€m)?', 'Un’IPO raccoglie €250m con un gross spread ipotetico del 2,5%. A quanto ammontano le commissioni di sottoscrizione (€m)?'),
      answer: 6.25,
      unit: '€m',
      verify: { fn: 'product', args: [250, 0.025] },
      explanation: t('250 × 2.5% = 6.25, shared among the syndicate according to roles (global coordinators, bookrunners, co-managers).', '250 × 2,5% = 6,25, ripartiti nel consorzio secondo i ruoli (global coordinator, bookrunner, co-manager).')
    },
    {
      id: 'ib-prod-q4',
      kind: 'multi',
      topic: 'ib-products',
      difficulty: 2,
      objective: t('Recognise typical restructuring tools.', 'Riconoscere gli strumenti tipici del restructuring.'),
      prompt: t('Which are typical restructuring solutions? Select all that apply.', 'Quali sono soluzioni tipiche di restructuring? Seleziona tutte le risposte corrette.'),
      choices: [
        t('Amend & extend of maturities', 'Amend & extend delle scadenze'),
        t('Debt-for-equity swap', 'Conversione di debito in equity'),
        t('Accelerated bookbuild for a selling shareholder', 'Accelerated bookbuilding per un azionista venditore'),
        t('Distressed sale of a division', 'Cessione distressed di una divisione'),
        t('Investment-grade Eurobond issue', 'Emissione di un Eurobond investment grade')
      ],
      correct: [0, 1, 3],
      explanation: t('Extending maturities, converting debt into equity and distressed asset sales are restructuring tools. ABBs and IG bonds are ECM/DCM products for healthy issuers.', 'Allungare le scadenze, convertire debito in equity e cedere asset in situazioni di crisi sono strumenti di restructuring. ABB e bond IG sono prodotti ECM/DCM per emittenti sani.')
    }
  ],
  flashcards: [
    { id: 'fc-ib-prod-1', topic: 'ib-products', front: t('How are M&A advisers mainly paid?', 'Come sono pagati principalmente gli advisor M&A?'), back: t('Success fee on completion (a % of deal value), sometimes plus a retainer.', 'Success fee al completamento (% del valore del deal), talvolta più un retainer.') },
    { id: 'fc-ib-prod-2', topic: 'ib-products', front: t('What is an accelerated bookbuild?', 'Cos’è un accelerated bookbuilding?'), back: t('A rapid (often overnight) placement of shares with institutional investors, run by ECM.', 'Un collocamento rapido (spesso overnight) di azioni presso investitori istituzionali, gestito dall’ECM.') },
    { id: 'fc-ib-prod-3', topic: 'ib-products', front: t('DCM vs LevFin?', 'DCM vs LevFin?'), back: t('DCM: investment-grade debt. LevFin: sub-investment-grade loans/bonds, often for LBOs.', 'DCM: debito investment grade. LevFin: prestiti/bond sub-investment grade, spesso per LBO.') },
    { id: 'fc-ib-prod-4', topic: 'ib-products', front: t('Italian insolvency framework?', 'Quadro normativo italiano sulla crisi d’impresa?'), back: t('The Code of Business Crisis and Insolvency (Codice della crisi d’impresa e dell’insolvenza, D.Lgs. 14/2019).', 'Codice della crisi d’impresa e dell’insolvenza (D.Lgs. 14/2019).') }
  ],
  sources: [{ label: 'D.Lgs. 12 gennaio 2019, n. 14 — Codice della crisi d’impresa e dell’insolvenza (Normattiva)', url: 'https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2019-01-12;14' }]
};

/* ============================ IB3 — THE ANALYST JOB ============================ */

const ibAnalystRole: Lesson = {
  id: 'ib-analyst-role',
  academyId: 'investment-banking',
  moduleId: 'IB3',
  mode: 'deep',
  minutes: 12,
  difficulty: 1,
  qualitative: true,
  reviewed: R,
  objective: t(
    'Describe what an IB analyst does day to day, the main deliverables, how staffing works and the hierarchy from analyst to MD.',
    'Descrivere cosa fa ogni giorno un analyst IB, i principali deliverable, come funziona lo staffing e la gerarchia da analyst a MD.'
  ),
  screens: [
    {
      type: 'intuition',
      title: t('The engine room of the deal', 'La sala macchine del deal'),
      body: t(
        'Senior bankers win mandates and negotiate; **analysts make everything else happen**. Every number in a pitch, every page of a CIM, every bid comparison passes through the analyst first.\n\nThe job is less about brilliant ideas and more about being **accurate, fast and reliable** — so that the MD can stand in front of a CEO and trust every figure on the page.',
        'I banker senior vincono i mandati e negoziano; **gli analyst fanno accadere tutto il resto**. Ogni numero di un pitch, ogni pagina di un CIM, ogni confronto tra offerte passa prima dall’analyst.\n\nIl lavoro non riguarda tanto le idee brillanti quanto l’essere **precisi, rapidi e affidabili** — così che l’MD possa presentarsi davanti a un CEO fidandosi di ogni cifra sulla pagina.'
      )
    },
    {
      type: 'technical',
      title: t('Core deliverables', 'I deliverable principali'),
      body: t(
        '- **Financial models**: operating models, DCF, LBO, merger (accretion/dilution) models.\n- **Comparable companies and precedent transactions**: spreading financials, calendarising, adjusting for one-offs, computing multiples.\n- **Pitchbooks**: market updates, valuation pages, buyer lists, credentials.\n- **Execution documents**: teaser, CIM (information memorandum), management presentation, process letters, bid summaries.\n- **Data room management**: uploading documents, managing permissions, tracking Q&A.\n- **Process management**: contact logs, NDA tracker, calendars, calls with lawyers and accountants.\n- Internal work: league-table credentials, deal sheets, compliance approvals.',
        '- **Modelli finanziari**: modelli operativi, DCF, LBO, modelli di fusione (accretion/dilution).\n- **Società comparabili e transazioni precedenti**: raccolta dei dati finanziari, calendarizzazione, rettifica delle componenti non ricorrenti, calcolo dei multipli.\n- **Pitchbook**: aggiornamenti di mercato, pagine di valutazione, liste di compratori, credenziali.\n- **Documenti di esecuzione**: teaser, CIM (information memorandum), management presentation, process letter, sintesi delle offerte.\n- **Gestione della data room**: caricamento documenti, gestione dei permessi, monitoraggio del Q&A.\n- **Gestione del processo**: log dei contatti, tracker degli NDA, calendari, call con legali e revisori.\n- Lavoro interno: credenziali, deal sheet, approvazioni di compliance.'
      )
    },
    {
      type: 'technical',
      title: t('The hierarchy', 'La gerarchia'),
      body: t(
        '- **Analyst** (≈2–3 years): models, pages, data; first draft of everything.\n- **Associate** (≈3 years; promoted analysts or post-MBA hires): checks analysts’ work, owns the document, coordinates workstreams.\n- **Vice President (VP)**: runs day-to-day execution and the relationship with the client’s team; reviews all materials.\n- **Director / Executive Director** (title varies by bank): senior execution plus growing origination.\n- **Managing Director (MD)**: originates mandates, owns client relationships, leads negotiations; accountable for revenue.\n\nWork flows down and comments flow back: MD → VP → associate → analyst → revised pages back up.',
        '- **Analyst** (≈2–3 anni): modelli, pagine, dati; la prima bozza di tutto.\n- **Associate** (≈3 anni; analyst promossi o assunti post-MBA): controlla il lavoro degli analyst, è responsabile del documento, coordina i filoni di lavoro.\n- **Vice President (VP)**: gestisce l’esecuzione quotidiana e il rapporto con il team del cliente; rivede tutti i materiali.\n- **Director / Executive Director** (il titolo varia per banca): esecuzione senior e crescente origination.\n- **Managing Director (MD)**: origina i mandati, gestisce le relazioni con i clienti, guida le negoziazioni; risponde dei ricavi.\n\nIl lavoro scende e i commenti risalgono: MD → VP → associate → analyst → pagine riviste di nuovo in su.'
      )
    },
    {
      type: 'example',
      title: t('A realistic day on a live sell-side deal', 'Una giornata realistica su un deal sell-side in corso'),
      body: t('Hypothetical day for an M&A analyst in Milan:', 'Giornata ipotetica di un analyst M&A a Milano:'),
      table: {
        headers: [t('Time', 'Ora'), t('Task', 'Attività')],
        rows: [
          ['09:00', t('Check emails; upload new documents to the data room; log buyer Q&A', 'Controllo email; caricamento nuovi documenti in data room; registrazione Q&A dei compratori')],
          ['11:00', t('Call with the client’s CFO team on the business plan', 'Call con il team del CFO del cliente sul business plan')],
          ['13:00', t('Update trading comps for a pitch due tomorrow', 'Aggiornamento dei comparabili di borsa per un pitch di domani')],
          ['16:00', t('Turn VP comments on the management presentation', 'Recepimento dei commenti del VP sulla management presentation')],
          ['20:00', t('Build bid comparison as first-round offers arrive', 'Costruzione del confronto offerte all’arrivo delle offerte di primo round')],
          ['23:30', t('Send revised pages to associate; check page flips', 'Invio delle pagine riviste all’associate; controllo finale delle pagine')]
        ]
      }
    },
    {
      type: 'technical',
      title: t('Staffing', 'Lo staffing'),
      body: t(
        'Analysts are usually assigned to deals by a **staffer** (often a senior associate or VP) who balances workload across the class. A typical analyst runs several live workstreams at once — e.g. one or two executions plus a few pitches.\n\nGood practice: keep your staffer informed of your real capacity, flag conflicts between deadlines early, and never let a deadline silently slip.',
        'Gli analyst vengono di solito assegnati ai deal da uno **staffer** (spesso un senior associate o un VP) che bilancia il carico tra i membri della classe. Un analyst tipico segue più filoni contemporaneamente — ad es. una o due esecuzioni più alcuni pitch.\n\nBuona pratica: tieni lo staffer informato sulla tua reale disponibilità, segnala in anticipo i conflitti tra scadenze e non lasciare mai che una scadenza salti senza dirlo.'
      )
    },
    {
      type: 'realworld',
      body: t(
        'Hours are long and unpredictable, driven by client deadlines and live deals — many banks have introduced protected weekend policies and workload monitoring, with mixed consistency. What separates top analysts is ownership: knowing the numbers in your model cold, anticipating the next question, and making your associate’s review easy.',
        'Gli orari sono lunghi e imprevedibili, dettati dalle scadenze dei clienti e dai deal in corso — molte banche hanno introdotto politiche di weekend protetti e monitoraggio dei carichi, applicate con coerenza variabile. Ciò che distingue i migliori analyst è il senso di responsabilità: conoscere a memoria i numeri del proprio modello, anticipare la domanda successiva e rendere facile la revisione all’associate.'
      )
    },
    { type: 'exercise', questionId: 'ib-an-q1' },
    { type: 'exercise', questionId: 'ib-an-q2' },
    { type: 'exercise', questionId: 'ib-an-q3' },
    {
      type: 'interview',
      question: t('What do you think an analyst does day to day?', 'Cosa pensi che faccia ogni giorno un analyst?'),
      answer: t(
        'Analysts produce the analytical backbone of every deal: they build and update models — comps, DCF, LBO, merger models — draft pitchbook and CIM pages, manage the data room and Q&A, and keep process trackers up to date. Much of the day is turning comments from associates and VPs quickly and accurately. On live deals it also means being on calls with clients, lawyers and accountants. The key qualities are attention to detail, speed and reliability.',
        'Gli analyst producono l’ossatura analitica di ogni deal: costruiscono e aggiornano modelli — comparabili, DCF, LBO, modelli di fusione — redigono pagine di pitchbook e CIM, gestiscono data room e Q&A e tengono aggiornati i tracker di processo. Buona parte della giornata consiste nel recepire rapidamente e con precisione i commenti di associate e VP. Sui deal in corso significa anche partecipare alle call con clienti, legali e revisori. Le qualità chiave sono attenzione ai dettagli, rapidità e affidabilità.'
      )
    },
    {
      type: 'mistakes',
      items: [
        t('Presenting the job as “strategy and negotiation” — analysts mostly execute.', 'Presentare il lavoro come “strategia e negoziazione” — gli analyst soprattutto eseguono.'),
        t('Hiding capacity problems from the staffer until a deadline is missed.', 'Nascondere i problemi di capacità allo staffer finché una scadenza non salta.'),
        t('Sending work up without checking it yourself first.', 'Mandare lavoro in revisione senza averlo prima controllato da sé.')
      ]
    },
    {
      type: 'summary',
      items: [
        t('Analysts build models, comps, pitch and execution documents, and run the data room.', 'Gli analyst costruiscono modelli, comparabili, documenti di pitch ed esecuzione, e gestiscono la data room.'),
        t('Hierarchy: analyst → associate → VP → director/ED → MD.', 'Gerarchia: analyst → associate → VP → director/ED → MD.'),
        t('Staffers allocate work; communicate capacity honestly.', 'Gli staffer allocano il lavoro; comunica onestamente la tua disponibilità.')
      ]
    }
  ],
  questions: [
    {
      id: 'ib-an-q1',
      kind: 'numeric',
      topic: 'ib-analyst-role',
      difficulty: 1,
      objective: t('Apply the median of a comps set to value a company.', 'Applicare la mediana di un panel di comparabili per valutare un’azienda.'),
      prompt: t(
        'Peers trade at EV/EBITDA of 8.5x, 9.2x, 10.1x, 7.8x and 11.0x. What is the median multiple (x)?',
        'I comparabili trattano a EV/EBITDA di 8,5x, 9,2x, 10,1x, 7,8x e 11,0x. Qual è il multiplo mediano (x)?'
      ),
      answer: 9.2,
      unit: 'x',
      verify: { fn: 'median', args: [[8.5, 9.2, 10.1, 7.8, 11.0]] },
      explanation: t('Sorted: 7.8, 8.5, 9.2, 10.1, 11.0 → median 9.2x. The mean (9.32x) is more affected by outliers, which is why banks usually show both.', 'Ordinati: 7,8, 8,5, 9,2, 10,1, 11,0 → mediana 9,2x. La media (9,32x) è più influenzata dagli outlier, per questo le banche di solito mostrano entrambe.')
    },
    {
      id: 'ib-an-q2',
      kind: 'order',
      topic: 'ib-analyst-role',
      difficulty: 1,
      objective: t('Order the IB hierarchy.', 'Ordinare la gerarchia IB.'),
      prompt: t('Order the titles from most junior to most senior.', 'Ordina i titoli dal più junior al più senior.'),
      items: [t('Analyst', 'Analyst'), t('Associate', 'Associate'), t('Vice President', 'Vice President'), t('Director / Executive Director', 'Director / Executive Director'), t('Managing Director', 'Managing Director')],
      explanation: t('Analyst → Associate → VP → Director/ED → MD. Exact titles vary by bank, but the sequence is standard.', 'Analyst → Associate → VP → Director/ED → MD. I titoli esatti variano per banca, ma la sequenza è standard.')
    },
    {
      id: 'ib-an-q3',
      kind: 'mcq',
      topic: 'ib-analyst-role',
      difficulty: 1,
      objective: t('Respond appropriately to conflicting deadlines.', 'Gestire correttamente scadenze in conflitto.'),
      prompt: t(
        'At 18:00 a VP asks you for comps due at 09:00, but you already owe a model update to another deal team by the same time and cannot do both. What should you do?',
        'Alle 18:00 un VP ti chiede dei comparabili per le 09:00, ma devi già consegnare entro la stessa ora l’aggiornamento di un modello a un altro deal team e non riesci a fare entrambe le cose. Cosa fai?'
      ),
      choices: [
        t('Accept and quietly do a rushed job on both', 'Accetti e fai in fretta entrambe le cose senza dire nulla'),
        t('Ignore the new request until the morning', 'Ignori la nuova richiesta fino al mattino'),
        t('Tell the VP immediately about the conflict and involve the staffer or both teams to prioritise', 'Segnali subito il conflitto al VP e coinvolgi lo staffer o entrambi i team per stabilire le priorità'),
        t('Ask an intern to do the model update without telling anyone', 'Chiedi a uno stagista di fare l’aggiornamento senza dirlo a nessuno')
      ],
      correct: 2,
      explanation: t('Flagging conflicts early lets seniors reprioritise or reallocate. Silent rushed work risks errors; ignoring or delegating without visibility breaks trust.', 'Segnalare subito i conflitti permette ai senior di ridefinire le priorità o riallocare. Lavorare in fretta senza dirlo rischia errori; ignorare o delegare senza trasparenza mina la fiducia.')
    },
    {
      id: 'ib-an-q4',
      kind: 'multi',
      topic: 'ib-analyst-role',
      difficulty: 1,
      objective: t('Identify typical analyst deliverables.', 'Riconoscere i deliverable tipici di un analyst.'),
      prompt: t('Which are typical analyst deliverables? Select all that apply.', 'Quali sono deliverable tipici di un analyst? Seleziona tutte le risposte corrette.'),
      choices: [
        t('First draft of CIM pages', 'Prima bozza delle pagine del CIM'),
        t('Negotiating price with the buyer’s CEO', 'Negoziare il prezzo con il CEO del compratore'),
        t('Trading comps and precedent transactions', 'Comparabili di borsa e transazioni precedenti'),
        t('Data room Q&A tracker', 'Tracker del Q&A della data room'),
        t('Signing the engagement letter on behalf of the bank', 'Firmare la lettera d’incarico per conto della banca')
      ],
      correct: [0, 2, 3],
      explanation: t('Drafting, comps and trackers are analyst work. Price negotiations and engagement letters are handled by senior bankers.', 'Bozze, comparabili e tracker sono lavoro da analyst. Negoziazioni sul prezzo e lettere d’incarico spettano ai banker senior.')
    }
  ],
  flashcards: [
    { id: 'fc-ib-an-1', topic: 'ib-analyst-role', front: t('Name five analyst deliverables.', 'Indica cinque deliverable di un analyst.'), back: t('Models (DCF/LBO/merger), comps & precedents, pitchbook pages, CIM/teaser drafts, data room and process trackers.', 'Modelli (DCF/LBO/fusione), comparabili e precedenti, pagine di pitchbook, bozze di CIM/teaser, data room e tracker di processo.') },
    { id: 'fc-ib-an-2', topic: 'ib-analyst-role', front: t('What does the VP do on a deal?', 'Cosa fa il VP su un deal?'), back: t('Runs day-to-day execution, manages the client’s working team, reviews all materials.', 'Gestisce l’esecuzione quotidiana, il team operativo del cliente e rivede tutti i materiali.') },
    { id: 'fc-ib-an-3', topic: 'ib-analyst-role', front: t('What is a staffer?', 'Cos’è lo staffer?'), back: t('The person who allocates analysts/associates to deals and balances workload.', 'La persona che assegna analyst/associate ai deal e bilancia i carichi di lavoro.') }
  ]
};

const ibPitchbooks: Lesson = {
  id: 'ib-pitchbooks',
  academyId: 'investment-banking',
  moduleId: 'IB3',
  mode: 'deep',
  minutes: 11,
  difficulty: 2,
  qualitative: true,
  reviewed: R,
  objective: t(
    'Explain the structure and purpose of a pitchbook — situation overview, valuation summary, buyer universe and credentials — and how analysts build it.',
    'Spiegare struttura e scopo di un pitchbook — situation overview, sintesi di valutazione, universo dei compratori e credenziali — e come lo costruiscono gli analyst.'
  ),
  screens: [
    {
      type: 'intuition',
      title: t('A job interview on paper', 'Un colloquio di lavoro su carta'),
      body: t(
        'A pitchbook is how a bank **asks to be hired**. It must convince the client of three things: *we understand your business and your situation*, *we have a credible view on value and options*, and *we are the best team to execute*.\n\nThe best pitches are not the longest — they are the ones with a clear, tailored message.',
        'Il pitchbook è il modo in cui una banca **chiede di essere scelta**. Deve convincere il cliente di tre cose: *capiamo il tuo business e la tua situazione*, *abbiamo una visione credibile su valore e opzioni*, e *siamo il team migliore per eseguire*.\n\nI pitch migliori non sono i più lunghi — sono quelli con un messaggio chiaro e su misura.'
      )
    },
    {
      type: 'technical',
      title: t('Typical structure of an M&A pitch', 'Struttura tipica di un pitch M&A'),
      body: t(
        '1. **Executive summary**: the key message in one page.\n2. **Situation overview / market update**: sector trends, recent deals, how the market sees the company, share price and peer performance.\n3. **Company positioning**: strengths, equity story, what buyers will value.\n4. **Valuation summary**: “football field” combining trading comps, precedents, DCF and, for sponsors, LBO analysis.\n5. **Strategic alternatives**: e.g. sale, partial sale, IPO, status quo.\n6. **Buyer universe**: strategic and financial buyers, with rationale and ability to pay.\n7. **Process and timeline**: recommended approach (broad vs targeted auction) and key steps.\n8. **Credentials and team**: relevant deals, league-table positions, people.\n9. **Appendix**: detailed comps, methodology, disclaimers.',
        '1. **Executive summary**: il messaggio chiave in una pagina.\n2. **Situation overview / aggiornamento di mercato**: trend del settore, operazioni recenti, come il mercato vede la società, andamento del titolo e dei peer.\n3. **Posizionamento della società**: punti di forza, equity story, cosa valuteranno i compratori.\n4. **Sintesi di valutazione**: “football field” che combina comparabili di borsa, precedenti, DCF e, per gli sponsor, analisi LBO.\n5. **Alternative strategiche**: ad es. vendita, cessione parziale, IPO, status quo.\n6. **Universo dei compratori**: compratori industriali e finanziari, con razionale e capacità di pagare.\n7. **Processo e tempistica**: approccio raccomandato (asta allargata vs ristretta) e fasi principali.\n8. **Credenziali e team**: deal rilevanti, posizioni nelle league table, persone.\n9. **Appendice**: comparabili dettagliati, metodologia, disclaimer.'
      )
    },
    {
      type: 'technical',
      title: t('Credentials and league tables — handle with care', 'Credenziali e league table — maneggiare con cura'),
      body: t(
        '**Credentials** (“creds”) show relevant transactions — tombstones with deal value, role and date.\n\n**League tables** rank banks by deal value or number of deals, using data providers (e.g. LSEG, Dealogic, Mergermarket). Results depend on the **criteria**: region, sector, period, announced vs completed, credit rules. Banks therefore choose the cut where they rank well (“#1 adviser in Italian mid-market industrials by number of deals”).\n\nAnalysts must state the source and criteria in a footnote and check that every claim can be reproduced — clients and competitors do check.',
        'Le **credenziali** (“creds”) mostrano operazioni rilevanti — tombstone con valore, ruolo e data.\n\nLe **league table** classificano le banche per valore o numero di operazioni, usando fornitori di dati (ad es. LSEG, Dealogic, Mergermarket). I risultati dipendono dai **criteri**: area, settore, periodo, annunciate vs completate, regole di attribuzione. Le banche scelgono quindi il taglio in cui si posizionano bene (“advisor n. 1 nel mid-market industriale italiano per numero di operazioni”).\n\nL’analyst deve indicare fonte e criteri in nota e verificare che ogni affermazione sia riproducibile — clienti e concorrenti controllano.'
      )
    },
    {
      type: 'example',
      title: t('A football field for Kappa S.p.A.', 'Un football field per Kappa S.p.A.'),
      body: t(
        'Kappa has €60m EBITDA and €100m net debt. The valuation page shows ranges for enterprise value (€m):',
        'Kappa ha €60m di EBITDA e €100m di PFN. La pagina di valutazione mostra range di enterprise value (€m):'
      ),
      table: {
        headers: [t('Methodology', 'Metodologia'), t('Assumption', 'Ipotesi'), t('Low', 'Min'), t('High', 'Max')],
        rows: [
          [t('Trading comps', 'Comparabili di borsa'), '8.0x–10.0x EBITDA', '480', '600'],
          [t('Precedent transactions', 'Transazioni precedenti'), '9.0x–11.0x EBITDA', '540', '660'],
          ['DCF', t('WACC 8–9%, g 1.5–2.0%', 'WACC 8–9%, g 1,5–2,0%'), '520', '640'],
          [t('LBO (20–25% IRR)', 'LBO (IRR 20–25%)'), t('Sponsor ability to pay', 'Capacità di pagare dello sponsor'), '450', '540']
        ]
      }
    },
    {
      type: 'realworld',
      body: t(
        'Analysts build most pitch pages from templates and the bank’s databases, often under tight deadlines. Much of a pitch is never used verbatim; senior bankers use it to structure the meeting. Every logo, number and claim must be correct and consistent — a wrong client logo or outdated share price can lose a mandate.',
        'Gli analyst costruiscono la maggior parte delle pagine di pitch da template e database della banca, spesso con scadenze strette. Buona parte di un pitch non viene mai usata alla lettera; i senior lo usano per strutturare l’incontro. Ogni logo, numero e affermazione deve essere corretto e coerente — un logo sbagliato o un prezzo dell’azione non aggiornato possono far perdere un mandato.'
      )
    },
    { type: 'exercise', questionId: 'ib-pb-q1' },
    { type: 'exercise', questionId: 'ib-pb-q2' },
    {
      type: 'interview',
      question: t('What goes into a sell-side pitchbook?', 'Cosa c’è in un pitchbook sell-side?'),
      answer: t(
        'It starts with an executive summary and a situation overview — market trends, recent transactions and how the company is positioned. Then a valuation summary, usually a football field combining trading comps, precedents, a DCF and an LBO view of what sponsors could pay. Next, the buyer universe with strategic and financial buyers and why each would be interested, a recommended process and timeline, and finally the bank’s credentials and team. The aim is a tailored message: why now, what it is worth and why us.',
        'Si parte da executive summary e situation overview — trend di mercato, operazioni recenti e posizionamento della società. Poi la sintesi di valutazione, di solito un football field che combina comparabili di borsa, precedenti, DCF e una vista LBO di quanto potrebbero pagare gli sponsor. Quindi l’universo dei compratori, industriali e finanziari, con le ragioni dell’interesse di ciascuno, un processo e una tempistica raccomandati e infine credenziali e team della banca. L’obiettivo è un messaggio su misura: perché ora, quanto vale e perché noi.'
      )
    },
    {
      type: 'mistakes',
      items: [
        t('Quoting league-table rankings without source and criteria.', 'Citare posizioni nelle league table senza fonte e criteri.'),
        t('Mixing enterprise value and equity value ranges on one football field without labelling.', 'Mischiare nello stesso football field range di enterprise value ed equity value senza indicarlo.'),
        t('Recycling an old pitch and leaving the previous client’s name or logo.', 'Riciclare un vecchio pitch lasciando nome o logo del cliente precedente.')
      ]
    },
    {
      type: 'summary',
      items: [
        t('Pitch = understanding of situation + view on value/options + why us.', 'Pitch = comprensione della situazione + visione su valore/opzioni + perché noi.'),
        t('Football field summarises valuation ranges across methods.', 'Il football field sintetizza i range di valutazione dei vari metodi.'),
        t('Credentials and league tables need source, criteria and accuracy.', 'Credenziali e league table richiedono fonte, criteri e precisione.')
      ]
    }
  ],
  questions: [
    {
      id: 'ib-pb-q1',
      kind: 'numeric',
      topic: 'ib-pitchbooks',
      difficulty: 1,
      objective: t('Convert a multiple range into an EV range for a football field.', 'Convertire un range di multipli in un range di EV per il football field.'),
      prompt: t(
        'Precedent transactions suggest 9.0x–11.0x EBITDA for Kappa (EBITDA €60m). What is the top of the implied EV range (€m)?',
        'Le transazioni precedenti indicano 9,0x–11,0x EBITDA per Kappa (EBITDA €60m). Qual è il massimo del range di EV implicito (€m)?'
      ),
      answer: 660,
      unit: '€m',
      verify: { fn: 'product', args: [11, 60] },
      explanation: t('11.0 × 60 = 660 (the low end is 9.0 × 60 = 540). Subtract €100m net debt for equity value: 440–560.', '11,0 × 60 = 660 (il minimo è 9,0 × 60 = 540). Sottraendo €100m di PFN si ottiene l’equity value: 440–560.')
    },
    {
      id: 'ib-pb-q2',
      kind: 'mcq',
      topic: 'ib-pitchbooks',
      difficulty: 2,
      objective: t('Interpret the LBO bar on a football field.', 'Interpretare la barra LBO del football field.'),
      prompt: t('Why does the LBO bar often sit at the low end of a football field?', 'Perché la barra LBO si trova spesso nella parte bassa del football field?'),
      choices: [
        t('Because LBO models ignore EBITDA growth', 'Perché i modelli LBO ignorano la crescita dell’EBITDA'),
        t('Because it shows what a financial buyer can pay while hitting a target IRR, without synergies', 'Perché mostra quanto può pagare un compratore finanziario rispettando un IRR obiettivo, senza sinergie'),
        t('Because sponsors always pay less than the market price', 'Perché gli sponsor pagano sempre meno del prezzo di mercato'),
        t('Because it uses book value', 'Perché usa il valore contabile')
      ],
      correct: 1,
      explanation: t('The LBO analysis backs into price from a required return and debt capacity; it excludes synergies that strategic buyers might pay for. Sponsors can still outbid strategics in some markets.', 'L’analisi LBO ricava il prezzo da un rendimento richiesto e dalla capacità di debito; esclude le sinergie che un compratore industriale potrebbe pagare. In alcuni mercati gli sponsor possono comunque superare gli industriali.')
    },
    {
      id: 'ib-pb-q3',
      kind: 'order',
      topic: 'ib-pitchbooks',
      difficulty: 1,
      objective: t('Sequence the sections of a pitch.', 'Ordinare le sezioni di un pitch.'),
      prompt: t('Put these pitchbook sections in a typical order.', 'Metti queste sezioni del pitchbook in un ordine tipico.'),
      items: [
        t('Executive summary', 'Executive summary'),
        t('Situation overview', 'Situation overview'),
        t('Valuation summary', 'Sintesi di valutazione'),
        t('Buyer universe', 'Universo dei compratori'),
        t('Process and timeline', 'Processo e tempistica'),
        t('Appendix', 'Appendice')
      ],
      explanation: t('Message first, then context, value, who could buy, how to run it; details go to the appendix. Credentials are often placed near the start or end depending on the bank.', 'Prima il messaggio, poi il contesto, il valore, chi potrebbe comprare, come gestire il processo; i dettagli vanno in appendice. Le credenziali si collocano all’inizio o alla fine a seconda della banca.')
    },
    {
      id: 'ib-pb-q4',
      kind: 'multi',
      topic: 'ib-pitchbooks',
      difficulty: 2,
      objective: t('Understand why league tables differ.', 'Capire perché le league table differiscono.'),
      prompt: t('Why can two banks both claim to be “#1” in league tables? Select all that apply.', 'Perché due banche possono entrambe dichiararsi “n. 1” nelle league table? Seleziona tutte le risposte corrette.'),
      choices: [
        t('Different data providers and credit rules', 'Fornitori di dati e regole di attribuzione diversi'),
        t('Ranking by deal value vs number of deals', 'Classifica per valore vs per numero di operazioni'),
        t('Different regions, sectors or time periods', 'Aree, settori o periodi diversi'),
        t('Announced vs completed deals', 'Operazioni annunciate vs completate'),
        t('League tables are audited by regulators each year', 'Le league table sono certificate ogni anno dai regolatori')
      ],
      correct: [0, 1, 2, 3],
      explanation: t('League tables are commercial data products; criteria vary and banks choose favourable cuts. They are not audited by regulators — hence the need for clear footnotes.', 'Le league table sono prodotti commerciali di dati; i criteri variano e le banche scelgono i tagli favorevoli. Non sono certificate dai regolatori — da qui la necessità di note chiare.')
    }
  ],
  flashcards: [
    { id: 'fc-ib-pb-1', topic: 'ib-pitchbooks', front: t('What is a football field?', 'Cos’è un football field?'), back: t('A chart of valuation ranges from different methods (comps, precedents, DCF, LBO) on one page.', 'Un grafico con i range di valutazione dei diversi metodi (comparabili, precedenti, DCF, LBO) in una pagina.') },
    { id: 'fc-ib-pb-2', topic: 'ib-pitchbooks', front: t('Three messages every pitch must convey?', 'I tre messaggi che ogni pitch deve trasmettere?'), back: t('We understand your situation; we have a view on value/options; we are the right team.', 'Capiamo la tua situazione; abbiamo una visione su valore/opzioni; siamo il team giusto.') },
    { id: 'fc-ib-pb-3', topic: 'ib-pitchbooks', front: t('What is a tombstone?', 'Cos’è un tombstone?'), back: t('A credential showing a completed deal: parties, value, the bank’s role and date.', 'Una credenziale che mostra un’operazione conclusa: parti, valore, ruolo della banca e data.') },
    { id: 'fc-ib-pb-4', topic: 'ib-pitchbooks', front: t('What must accompany a league-table claim?', 'Cosa deve accompagnare un’affermazione sulle league table?'), back: t('Source, criteria (region, sector, period, value vs count) and date.', 'Fonte, criteri (area, settore, periodo, valore vs numero) e data.') }
  ]
};

const ibProfessionalism: Lesson = {
  id: 'ib-professionalism',
  academyId: 'investment-banking',
  moduleId: 'IB3',
  mode: 'quick',
  minutes: 10,
  difficulty: 2,
  qualitative: true,
  reviewed: R,
  objective: t(
    'Apply the professional standards expected of an analyst: accuracy, turning comments, version control, confidentiality and the rules on inside information.',
    'Applicare gli standard professionali richiesti a un analyst: precisione, recepimento dei commenti, gestione delle versioni, riservatezza e regole sulle informazioni privilegiate.'
  ),
  screens: [
    {
      type: 'intuition',
      title: t('Trust is the product', 'Il prodotto è la fiducia'),
      body: t(
        'Clients hire a bank to handle their most sensitive decisions. Two things destroy that trust instantly: **a wrong number** in front of a board, and **a leak** of confidential information.\n\nThat is why banks obsess over detail and compliance — and why a careless analyst is a bigger problem than a slow one.',
        'I clienti affidano a una banca le decisioni più delicate. Due cose distruggono subito la fiducia: **un numero sbagliato** davanti a un CdA e **una fuga** di informazioni riservate.\n\nPer questo le banche sono ossessionate dai dettagli e dalla compliance — e un analyst disattento è un problema più grave di uno lento.'
      )
    },
    {
      type: 'technical',
      title: t('Attention to detail and turning comments', 'Attenzione ai dettagli e recepimento dei commenti'),
      body: t(
        '- **Numbers tie**: the same figure is identical on every page, in the model and in the text; totals add up; units and currencies are labelled.\n- **Formatting**: consistent fonts, alignment, footnotes, sources and dates.\n- **Turning comments**: address every mark-up, keep a checklist, and flag any comment you disagree with or could not implement — never skip silently.\n- **Self-review**: print or PDF the document and page-flip it before sending; check spelling of client names.\n- **Version control**: clear file names (e.g. ProjectX_MP_v7_2026-10-12), never overwrite a version others are commenting on, and keep the model and pages in sync.',
        '- **I numeri quadrano**: la stessa cifra è identica in ogni pagina, nel modello e nel testo; i totali tornano; unità e valute sono indicate.\n- **Formattazione**: font, allineamenti, note, fonti e date coerenti.\n- **Recepire i commenti**: affronta ogni correzione, tieni una checklist e segnala i commenti su cui non sei d’accordo o che non hai potuto applicare — mai saltarli in silenzio.\n- **Autorevisione**: stampa o crea il PDF del documento e sfoglialo prima di inviarlo; controlla l’ortografia dei nomi dei clienti.\n- **Gestione delle versioni**: nomi file chiari (ad es. ProjectX_MP_v7_2026-10-12), non sovrascrivere mai una versione che altri stanno commentando, e mantieni allineati modello e pagine.'
      )
    },
    {
      type: 'technical',
      title: t('Confidentiality and inside information', 'Riservatezza e informazioni privilegiate'),
      body: t(
        '- **Code names** (“Project Atlas”) hide client identities in files, emails and conversations; never discuss deals in public places.\n- **Inside information / MNPI**: under the EU Market Abuse Regulation (MAR, Reg. 596/2014), inside information is precise, non-public information that, if made public, would likely have a significant effect on the price of financial instruments (Art. 7). Insider dealing and unlawful disclosure are prohibited (Art. 14); issuers and advisers keep **insider lists** (Art. 18). In Italy, insider trading is also a crime under art. 184 TUF. In the US, it is prosecuted mainly under Section 10(b) of the Securities Exchange Act and Rule 10b-5.\n- **Information barriers (“Chinese walls”)** separate the private side (advisory) from the public side (sales, trading, research); crossing the wall requires compliance approval.\n- **Personal trading**: pre-clearance, restricted lists and holding periods apply.',
        '- I **nomi in codice** (“Project Atlas”) nascondono l’identità dei clienti in file, email e conversazioni; mai parlare dei deal in luoghi pubblici.\n- **Informazioni privilegiate / MNPI**: secondo il Regolamento UE sugli abusi di mercato (MAR, Reg. 596/2014), è privilegiata l’informazione di carattere preciso, non pubblica, che se resa pubblica avrebbe probabilmente un effetto significativo sui prezzi degli strumenti finanziari (art. 7). Abuso di informazioni privilegiate e comunicazione illecita sono vietati (art. 14); emittenti e consulenti tengono **elenchi delle persone che hanno accesso a informazioni privilegiate** (art. 18). In Italia l’abuso è anche reato ai sensi dell’art. 184 TUF. Negli USA è perseguito soprattutto ai sensi della Section 10(b) del Securities Exchange Act e della Rule 10b-5.\n- Le **barriere informative (“Chinese walls”)** separano il lato privato (advisory) da quello pubblico (sales, trading, research); attraversarle richiede l’approvazione della compliance.\n- **Operazioni personali**: si applicano preventiva autorizzazione, restricted list e periodi minimi di detenzione.'
      )
    },
    {
      type: 'example',
      title: t('Five situations, the right response', 'Cinque situazioni, la risposta corretta'),
      body: t('How a strong analyst handles common situations:', 'Come un buon analyst gestisce situazioni frequenti:'),
      table: {
        headers: [t('Situation', 'Situazione'), t('Right response', 'Risposta corretta')],
        rows: [
          [t('A friend asks what you’re working on', 'Un amico ti chiede su cosa lavori'), t('Speak only in general terms; no names or details', 'Parla solo in termini generici; niente nomi né dettagli')],
          [t('You spot an error in a deck already sent to the client', 'Trovi un errore in una presentazione già inviata al cliente'), t('Tell your associate/VP immediately', 'Avvisa subito associate/VP')],
          [t('A research analyst asks about a rumoured deal', 'Un analista di research ti chiede di un deal di cui si vocifera'), t('Decline; refer to compliance', 'Rifiuta; rimanda alla compliance')],
          [t('You can’t implement a VP comment', 'Non riesci ad applicare un commento del VP'), t('Flag it with a reason when you send the turn', 'Segnalalo con la motivazione quando invii la revisione')],
          [t('You want to buy shares of a sector peer', 'Vuoi comprare azioni di un peer del settore'), t('Pre-clear with compliance first', 'Chiedi prima l’autorizzazione alla compliance')]
        ]
      }
    },
    {
      type: 'realworld',
      body: t(
        'Regulators regularly bring insider-dealing cases involving junior bankers and their friends or relatives — careers end and criminal penalties can apply. Banks monitor trading accounts, emails and messaging apps; using unapproved channels (e.g. personal WhatsApp) for business communications has itself led to large regulatory fines for banks.',
        'I regolatori avviano regolarmente casi di insider trading che coinvolgono banker junior e loro amici o parenti — le carriere finiscono e possono applicarsi sanzioni penali. Le banche monitorano conti titoli, email e app di messaggistica; l’uso di canali non autorizzati (ad es. WhatsApp personale) per comunicazioni di lavoro ha di per sé portato a pesanti sanzioni per le banche.'
      )
    },
    { type: 'exercise', questionId: 'ib-prof-q1' },
    { type: 'exercise', questionId: 'ib-prof-q2' },
    {
      type: 'interview',
      question: t('Tell me about a time you made a mistake. How did you handle it?', 'Raccontami di una volta in cui hai commesso un errore. Come l’hai gestito?'),
      answer: t(
        'Structure, to fill with your own real mistake: “In [real project] I [the mistake, e.g. an input in thousands instead of millions]. I spotted it [when/how], told [team leader] straight away, sent a corrected version with a short note explaining the change, and added [a concrete fix, e.g. a units check] to our review process. Since then I [habit you genuinely apply].” Own the error, show fast escalation and a lasting fix — never invent the story.',
        'Struttura, da riempire con un tuo errore reale: “In [progetto reale] ho [l’errore, es. un input in migliaia invece che in milioni]. Me ne sono accorto [quando/come], l’ho detto subito a [responsabile del team], ho inviato una versione corretta con una breve nota che spiegava la modifica e ho aggiunto [una correzione concreta, es. un controllo delle unità] al nostro processo di revisione. Da allora [abitudine che applichi davvero].” Assumiti l’errore, mostra un’escalation rapida e una soluzione duratura — non inventare mai la storia.'
      )
    },
    {
      type: 'mistakes',
      items: [
        t('Hiding an error hoping nobody notices.', 'Nascondere un errore sperando che nessuno se ne accorga.'),
        t('Using real client names in file names, emails or in public.', 'Usare i nomi reali dei clienti nei nomi file, nelle email o in pubblico.'),
        t('Assuming that information “everyone at the bank knows” is public.', 'Dare per scontato che un’informazione “che in banca sanno tutti” sia pubblica.'),
        t('Overwriting the file a VP is currently marking up.', 'Sovrascrivere il file che un VP sta correggendo.')
      ]
    },
    {
      type: 'summary',
      items: [
        t('Numbers must tie; every comment is addressed or flagged.', 'I numeri devono quadrare; ogni commento è recepito o segnalato.'),
        t('Clear version control and self-review before sending.', 'Gestione chiara delle versioni e autorevisione prima dell’invio.'),
        t('Code names, Chinese walls, insider lists; MAR (EU), art. 184 TUF (Italy), Rule 10b-5 (US).', 'Nomi in codice, Chinese walls, elenchi insider; MAR (UE), art. 184 TUF (Italia), Rule 10b-5 (USA).')
      ]
    }
  ],
  questions: [
    {
      id: 'ib-prof-q1',
      kind: 'mcq',
      topic: 'ib-professionalism',
      difficulty: 2,
      objective: t('Recognise inside information under MAR.', 'Riconoscere un’informazione privilegiata ai sensi del MAR.'),
      prompt: t(
        'You learn that a listed client will announce a takeover offer next week. Your cousin asks whether it is a good time to buy its shares. What applies?',
        'Vieni a sapere che un cliente quotato annuncerà un’OPA la settimana prossima. Tuo cugino ti chiede se è il momento giusto per comprarne le azioni. Cosa si applica?'
      ),
      choices: [
        t('You may hint as long as you don’t trade yourself', 'Puoi dare un indizio purché tu non operi personalmente'),
        t('It is fine if your cousin buys only a small amount', 'Va bene se tuo cugino compra solo una piccola quantità'),
        t('This is inside information: disclosing it or recommending a trade is prohibited', 'È un’informazione privilegiata: comunicarla o raccomandare un’operazione è vietato'),
        t('It is allowed once the information appears in a newspaper rumour', 'È consentito appena l’informazione compare come indiscrezione di stampa')
      ],
      correct: 2,
      explanation: t(
        'A forthcoming offer is precise, non-public and price-sensitive. MAR prohibits insider dealing, recommending/inducing others to trade and unlawful disclosure; size does not matter, and a rumour does not make information public.',
        'Un’offerta imminente è un’informazione precisa, non pubblica e price sensitive. Il MAR vieta l’abuso, la raccomandazione/induzione di altri a operare e la comunicazione illecita; l’importo è irrilevante e un’indiscrezione non rende pubblica l’informazione.'
      )
    },
    {
      id: 'ib-prof-q2',
      kind: 'multi',
      topic: 'ib-professionalism',
      difficulty: 1,
      objective: t('Identify good practice in turning comments.', 'Riconoscere le buone pratiche nel recepire i commenti.'),
      prompt: t('Which are good practices when turning comments? Select all that apply.', 'Quali sono buone pratiche nel recepire i commenti? Seleziona tutte le risposte corrette.'),
      choices: [
        t('Keep a checklist of every comment and tick them off', 'Tenere una checklist di ogni commento e spuntarla'),
        t('Skip comments you disagree with without saying so', 'Saltare i commenti con cui non si è d’accordo senza dirlo'),
        t('Check that changed numbers flow through every page', 'Verificare che i numeri modificati si propaghino in ogni pagina'),
        t('Save as a new version with a clear name', 'Salvare una nuova versione con un nome chiaro'),
        t('Page-flip the PDF before sending', 'Sfogliare il PDF prima di inviarlo')
      ],
      correct: [0, 2, 3, 4],
      explanation: t('Systematic tracking, consistency checks, versioning and a final page-flip are standard. Disagreements should be flagged, not silently ignored.', 'Tracciamento sistematico, controlli di coerenza, versioning e controllo finale sono standard. I disaccordi vanno segnalati, non ignorati in silenzio.')
    },
    {
      id: 'ib-prof-q3',
      kind: 'mcq',
      topic: 'ib-professionalism',
      difficulty: 1,
      objective: t('Understand the purpose of information barriers.', 'Comprendere lo scopo delle barriere informative.'),
      prompt: t('What is the main purpose of a Chinese wall in a bank?', 'Qual è lo scopo principale di una Chinese wall in una banca?'),
      choices: [
        t('To separate the private side (with inside information) from public-side businesses such as trading and research', 'Separare il lato privato (con informazioni privilegiate) dalle attività lato pubblico come trading e research'),
        t('To keep different industry groups from collaborating', 'Impedire ai diversi gruppi settoriali di collaborare'),
        t('To protect the bank’s IT systems from hackers', 'Proteggere i sistemi informatici della banca dagli hacker'),
        t('To separate retail and corporate clients for tax reasons', 'Separare clienti retail e corporate per ragioni fiscali')
      ],
      correct: 0,
      explanation: t('Information barriers stop inside information flowing from advisory teams to people who trade or publish research. Wall-crossing requires compliance approval.', 'Le barriere informative impediscono che informazioni privilegiate passino dai team di advisory a chi negozia o pubblica research. L’attraversamento richiede l’approvazione della compliance.')
    }
  ],
  flashcards: [
    { id: 'fc-ib-prof-1', topic: 'ib-professionalism', front: t('MAR definition of inside information (Art. 7)?', 'Definizione MAR di informazione privilegiata (art. 7)?'), back: t('Precise, non-public information relating to an issuer/instrument that, if made public, would likely significantly affect prices.', 'Informazione precisa, non pubblica, relativa a un emittente/strumento che, se resa pubblica, avrebbe probabilmente un effetto significativo sui prezzi.') },
    { id: 'fc-ib-prof-2', topic: 'ib-professionalism', front: t('Italian criminal provision on insider trading?', 'Norma penale italiana sull’insider trading?'), back: t('Art. 184 TUF (D.Lgs. 58/1998).', 'Art. 184 TUF (D.Lgs. 58/1998).') },
    { id: 'fc-ib-prof-3', topic: 'ib-professionalism', front: t('Why use code names?', 'Perché si usano i nomi in codice?'), back: t('To protect client confidentiality in files, emails and conversations.', 'Per tutelare la riservatezza del cliente in file, email e conversazioni.') },
    { id: 'fc-ib-prof-4', topic: 'ib-professionalism', front: t('What to do if you find an error after sending?', 'Cosa fare se trovi un errore dopo l’invio?'), back: t('Tell your associate/VP immediately and prepare a corrected version.', 'Avvisare subito associate/VP e preparare una versione corretta.') }
  ],
  sources: [
    { label: 'Regulation (EU) No 596/2014 on market abuse (MAR), Arts. 7, 14, 18', url: 'https://eur-lex.europa.eu/eli/reg/2014/596/oj' },
    { label: 'D.Lgs. 24 febbraio 1998, n. 58 (TUF), art. 184', url: 'https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1998-02-24;58' },
    { label: 'U.S. SEC — Insider Trading (Rule 10b-5)', url: 'https://www.sec.gov/enforcement-litigation/insider-trading' }
  ]
};

/* ============================ IB4 — CAREERS AND RECRUITING ============================ */

const ibCareerPath: Lesson = {
  id: 'ib-career-path',
  academyId: 'investment-banking',
  moduleId: 'IB4',
  mode: 'quick',
  minutes: 8,
  difficulty: 1,
  qualitative: true,
  reviewed: R,
  objective: t(
    'Outline the IB career ladder, typical timing of promotions and the main exit opportunities.',
    'Delineare la scala di carriera in IB, le tempistiche tipiche delle promozioni e le principali exit opportunity.'
  ),
  screens: [
    {
      type: 'intuition',
      title: t('An apprenticeship with many doors', 'Un apprendistato con molte porte'),
      body: t(
        'The analyst years are an **intense apprenticeship**: you learn accounting, valuation, deal processes and how senior people think. After 2–3 years you can climb the ladder in banking — or use the toolkit elsewhere.\n\nKnowing the paths helps you answer “where do you see yourself in five years?” honestly and convincingly.',
        'Gli anni da analyst sono un **apprendistato intenso**: impari contabilità, valutazione, processi di deal e come ragionano i senior. Dopo 2–3 anni puoi salire nella banca — o usare queste competenze altrove.\n\nConoscere i percorsi ti aiuta a rispondere in modo onesto e convincente a “dove ti vedi tra cinque anni?”.'
      )
    },
    {
      type: 'technical',
      title: t('The ladder', 'La scala'),
      body: t(
        'Indicative timing (varies by bank, region and performance):\n\n- **Analyst**: ~2–3 years (some banks have a 3rd-year analyst stage).\n- **Associate**: ~3 years; entry via promotion or after an MBA (more common in the US).\n- **VP**: ~3–4 years.\n- **Director / ED**: ~2–4 years.\n- **MD**: a decade or more after starting, for those who build client relationships and revenue.\n\nPay shifts from mainly salary at junior levels to a large, variable **bonus** at senior levels, tied to individual, team and bank performance.',
        'Tempistiche indicative (variano per banca, area e performance):\n\n- **Analyst**: ~2–3 anni (alcune banche prevedono un terzo anno da analyst).\n- **Associate**: ~3 anni; si arriva per promozione o dopo un MBA (più comune negli USA).\n- **VP**: ~3–4 anni.\n- **Director / ED**: ~2–4 anni.\n- **MD**: dieci anni o più dall’ingresso, per chi costruisce relazioni con i clienti e ricavi.\n\nLa remunerazione passa da prevalentemente fissa ai livelli junior a un **bonus** variabile elevato ai livelli senior, legato a performance individuale, del team e della banca.'
      )
    },
    {
      type: 'technical',
      title: t('Exit opportunities', 'Le exit opportunity'),
      body: t(
        '- **Private equity**: the most common exit; recruiting often starts early in the analyst stint, especially in the US.\n- **Growth equity / venture capital**.\n- **Hedge funds and long-only asset management**.\n- **Private credit / infrastructure / real estate funds**.\n- **Corporate development / strategy** at a corporate (in Italy, also family holdings and family offices).\n- **Start-ups and scale-ups** (finance, operations, strategy roles).\n- **MBA** and then a new path.\n\nMany people also stay: banking is a long-term career for those who enjoy client work and dealmaking.',
        '- **Private equity**: la exit più comune; il recruiting spesso inizia presto durante gli anni da analyst, soprattutto negli USA.\n- **Growth equity / venture capital**.\n- **Hedge fund e asset management long-only**.\n- **Fondi di private credit / infrastrutture / real estate**.\n- **Corporate development / strategia** in un’azienda (in Italia anche holding familiari e family office).\n- **Start-up e scale-up** (ruoli in finanza, operations, strategia).\n- **MBA** e poi un nuovo percorso.\n\nMolti restano: la banca è una carriera di lungo periodo per chi ama il lavoro con i clienti e i deal.'
      )
    },
    {
      type: 'example',
      title: t('Three hypothetical paths after four years', 'Tre percorsi ipotetici dopo quattro anni'),
      body: t('Classmates from the same analyst class:', 'Compagni della stessa classe di analyst:'),
      table: {
        headers: [t('Person', 'Persona'), t('Path', 'Percorso'), t('What transferred', 'Cosa è stato utile')],
        rows: [
          ['Giulia', t('M&A analyst → associate → VP track', 'Analyst M&A → associate → percorso verso VP'), t('Client exposure, execution', 'Esposizione ai clienti, esecuzione')],
          ['Marco', t('LevFin analyst → mid-market PE associate', 'Analyst LevFin → associate PE mid-market'), t('LBO and credit skills', 'Competenze LBO e di credito')],
          ['Sara', t('Industrials analyst → corporate M&A at a listed group', 'Analyst Industrials → M&A interno in un gruppo quotato'), t('Sector knowledge, valuation', 'Conoscenza del settore, valutazione')]
        ]
      }
    },
    {
      type: 'realworld',
      body: t(
        'Recruiting for PE associate roles can happen very early — in the US, “on-cycle” processes have at times started within months of analysts joining. In Europe, processes are more often “off-cycle” and spread through the year. Either way, strong analyst reviews and deal experience matter most.',
        'Il recruiting per ruoli da associate nel PE può avvenire molto presto — negli USA i processi “on-cycle” sono talvolta partiti a pochi mesi dall’ingresso degli analyst. In Europa i processi sono più spesso “off-cycle” e distribuiti durante l’anno. In ogni caso contano soprattutto buone valutazioni da analyst ed esperienza sui deal.'
      )
    },
    { type: 'exercise', questionId: 'ib-car-q1' },
    { type: 'exercise', questionId: 'ib-car-q2' },
    {
      type: 'interview',
      question: t('Where do you see yourself in five years?', 'Dove ti vedi tra cinque anni?'),
      answer: t(
        'I see myself having built a strong technical and transactional foundation in banking — ideally as an associate who can run workstreams and manage analysts, with real ownership of client relationships at a working level. I’m keen to keep learning across sectors and products. I’m focused on being an excellent analyst first; the right next step will depend on where I add the most value.',
        'Mi vedo con una solida base tecnica e transazionale costruita in banca — idealmente come associate in grado di gestire filoni di lavoro e coordinare analyst, con una reale responsabilità nel rapporto operativo con i clienti. Voglio continuare a imparare su settori e prodotti diversi. Ora sono concentrato sull’essere un ottimo analyst; il passo successivo dipenderà da dove potrò dare il contributo maggiore.'
      )
    },
    {
      type: 'mistakes',
      items: [
        t('Telling a bank you plan to leave for PE as soon as possible.', 'Dire a una banca che intendi passare al PE il prima possibile.'),
        t('Treating promotion timelines as guaranteed.', 'Considerare garantite le tempistiche di promozione.'),
        t('Ignoring how your group choice shapes later options (e.g. LevFin → credit/PE).', 'Ignorare come la scelta del gruppo condiziona le opzioni future (ad es. LevFin → credito/PE).')
      ]
    },
    {
      type: 'summary',
      items: [
        t('Analyst → associate → VP → director/ED → MD over roughly a decade or more.', 'Analyst → associate → VP → director/ED → MD in circa un decennio o più.'),
        t('Exits: PE, growth/VC, hedge funds, credit, corporate development, start-ups, MBA.', 'Exit: PE, growth/VC, hedge fund, credito, corporate development, start-up, MBA.'),
        t('In interviews, show commitment to the analyst role first.', 'Al colloquio dimostra prima di tutto impegno nel ruolo da analyst.')
      ]
    }
  ],
  questions: [
    {
      id: 'ib-car-q1',
      kind: 'mcq',
      topic: 'ib-career',
      difficulty: 1,
      objective: t('Identify the most common IB exit.', 'Individuare la exit più comune dall’IB.'),
      prompt: t('Which is the most common exit opportunity for IB analysts?', 'Qual è la exit opportunity più comune per gli analyst IB?'),
      choices: [t('Retail banking branch management', 'Direzione di filiale retail'), t('Private equity', 'Private equity'), t('External audit', 'Revisione contabile'), t('Central banking', 'Banca centrale')],
      correct: 1,
      explanation: t('PE values the modelling, valuation and deal-process skills analysts build. The others are possible but much less typical.', 'Il PE valorizza le competenze di modellazione, valutazione e processo che gli analyst sviluppano. Le altre sono possibili ma molto meno tipiche.')
    },
    {
      id: 'ib-car-q2',
      kind: 'multi',
      topic: 'ib-career',
      difficulty: 1,
      objective: t('Recognise what drives senior banker success.', 'Riconoscere cosa determina il successo di un banker senior.'),
      prompt: t('What increasingly drives success as a banker becomes more senior? Select all that apply.', 'Cosa determina sempre più il successo man mano che un banker diventa senior? Seleziona tutte le risposte corrette.'),
      choices: [
        t('Client relationships and origination', 'Relazioni con i clienti e origination'),
        t('Building every model personally', 'Costruire personalmente ogni modello'),
        t('Leading negotiations', 'Guidare le negoziazioni'),
        t('Developing and managing junior bankers', 'Far crescere e gestire i banker junior'),
        t('Formatting pitchbook pages', 'Formattare le pagine dei pitchbook')
      ],
      correct: [0, 2, 3],
      explanation: t('Seniors are judged on relationships, revenue, negotiation and leadership. Modelling and formatting are junior responsibilities.', 'I senior sono valutati su relazioni, ricavi, negoziazione e leadership. Modellazione e formattazione sono responsabilità junior.')
    },
    {
      id: 'ib-car-q3',
      kind: 'order',
      topic: 'ib-career',
      difficulty: 1,
      objective: t('Order career milestones.', 'Ordinare le tappe di carriera.'),
      prompt: t('Order these milestones in a typical banking career.', 'Ordina queste tappe di una carriera tipica in banca.'),
      items: [
        t('Summer or off-cycle internship', 'Stage estivo o off-cycle'),
        t('Full-time analyst', 'Analyst a tempo pieno'),
        t('Associate', 'Associate'),
        t('Vice President', 'Vice President'),
        t('Managing Director', 'Managing Director')
      ],
      explanation: t('Internships usually convert into analyst offers; promotions follow through associate and VP to MD (with director/ED in between at most banks).', 'Gli stage di solito si convertono in offerte da analyst; le promozioni seguono passando per associate e VP fino a MD (con director/ED nel mezzo nella maggior parte delle banche).')
    }
  ],
  flashcards: [
    { id: 'fc-ib-car-1', topic: 'ib-career', front: t('Typical analyst stint length?', 'Durata tipica del periodo da analyst?'), back: t('About 2–3 years before promotion to associate.', 'Circa 2–3 anni prima della promozione ad associate.') },
    { id: 'fc-ib-car-2', topic: 'ib-career', front: t('Name five IB exit opportunities.', 'Indica cinque exit opportunity dall’IB.'), back: t('PE, growth/VC, hedge funds, corporate development, start-ups (also private credit, MBA).', 'PE, growth/VC, hedge fund, corporate development, start-up (anche private credit, MBA).') },
    { id: 'fc-ib-car-3', topic: 'ib-career', front: t('On-cycle vs off-cycle PE recruiting?', 'Recruiting PE on-cycle vs off-cycle?'), back: t('On-cycle: compressed, early, coordinated (mainly US). Off-cycle: ad hoc processes through the year (common in Europe).', 'On-cycle: compresso, anticipato, coordinato (soprattutto USA). Off-cycle: processi ad hoc durante l’anno (frequente in Europa).') }
  ]
};

const ibRecruiting: Lesson = {
  id: 'ib-recruiting',
  academyId: 'investment-banking',
  moduleId: 'IB4',
  mode: 'deep',
  minutes: 11,
  difficulty: 1,
  qualitative: true,
  reviewed: R,
  objective: t(
    'Understand how IB recruiting works in the US, London and Milan, and build a networking and interview strategy.',
    'Capire come funziona il recruiting IB negli USA, a Londra e a Milano, e costruire una strategia di networking e colloqui.'
  ),
  screens: [
    {
      type: 'intuition',
      title: t('A long game played early', 'Una partita lunga che si gioca presto'),
      body: t(
        'Most full-time analyst offers come from **internships**, and internships are recruited **well in advance** — often a year or more before they start. By the time many students think about banking, the main cycle is already under way.\n\nThe winning strategy is simple: **start early, prepare technicals properly and build genuine relationships**.',
        'La maggior parte delle offerte da analyst a tempo pieno nasce dagli **stage**, e gli stage si selezionano **con largo anticipo** — spesso un anno o più prima dell’inizio. Quando molti studenti iniziano a pensare alla banca, il ciclo principale è già partito.\n\nLa strategia vincente è semplice: **iniziare presto, preparare bene la parte tecnica e costruire relazioni autentiche**.'
      )
    },
    {
      type: 'technical',
      title: t('Different markets, different rhythms', 'Mercati diversi, ritmi diversi'),
      body: t(
        '- **US**: highly structured and very early. Junior-year summer analyst roles are recruited long before the internship — at times more than a year ahead — and most full-time offers are return offers.\n- **London / Europe**: **spring weeks** (insight programmes for early-year students), **summer internships** in the penultimate year, **off-cycle internships** throughout the year and graduate programmes. Applications open on a rolling basis; apply early as positions fill.\n- **Milan / Italy**: many entries via **off-cycle internships** (curricular or extra-curricular, often 3–6 months, frequently during or after a master’s), which can convert into analyst roles; plus summer internships in London or Milan at international banks.\n\nTimelines shift every year — always check each bank’s careers page.',
        '- **USA**: molto strutturato e anticipato. Le posizioni di summer analyst per il penultimo anno si selezionano molto prima dello stage — talvolta oltre un anno prima — e la maggior parte delle offerte full-time sono return offer.\n- **Londra / Europa**: **spring week** (programmi di orientamento per i primi anni), **summer internship** nel penultimo anno, **stage off-cycle** durante tutto l’anno e graduate programme. Le candidature aprono a scorrimento; candidati presto perché i posti si esauriscono.\n- **Milano / Italia**: molti ingressi tramite **stage off-cycle** (curriculari o extracurriculari, spesso di 3–6 mesi, di frequente durante o dopo la laurea magistrale), che possono trasformarsi in posizioni da analyst; più summer internship a Londra o Milano nelle banche internazionali.\n\nLe tempistiche cambiano ogni anno — verifica sempre la pagina careers di ogni banca.'
      )
    },
    {
      type: 'technical',
      title: t('The process', 'Il processo'),
      body: t(
        '1. **CV and application** (one page, results-oriented; cover letter where requested).\n2. **Online tests**: numerical/logical reasoning, situational judgement, sometimes a recorded video interview.\n3. **First-round interviews**: fit (“why IB, why us”), CV walk-through, basic technicals.\n4. **Superday / assessment centre**: several back-to-back interviews with bankers of different seniority, sometimes a case study, group exercise or modelling test.\n5. **Offer**, often with a deadline.\n\n**Technicals** tested: accounting (three statements), valuation (comps, DCF, EV vs equity value), M&A (accretion/dilution) and LBO basics, plus market awareness (a recent deal you can discuss in depth).',
        '1. **CV e candidatura** (una pagina, orientato ai risultati; lettera motivazionale se richiesta).\n2. **Test online**: ragionamento numerico/logico, situational judgement, talvolta un video-colloquio registrato.\n3. **Primi colloqui**: fit (“perché l’IB, perché noi”), presentazione del CV, tecnica di base.\n4. **Superday / assessment centre**: più colloqui consecutivi con banker di diversa seniority, talvolta un case study, un esercizio di gruppo o un modelling test.\n5. **Offerta**, spesso con una scadenza.\n\n**Tecnica** richiesta: contabilità (i tre prospetti), valutazione (comparabili, DCF, EV vs equity value), M&A (accretion/dilution) e basi di LBO, più conoscenza del mercato (un deal recente da discutere in profondità).'
      )
    },
    {
      type: 'example',
      title: t('A networking plan for a Bocconi student', 'Un piano di networking per uno studente Bocconi'),
      body: t('A hypothetical plan over one semester:', 'Un piano ipotetico su un semestre:'),
      table: {
        headers: [t('Step', 'Passo'), t('Action', 'Azione')],
        rows: [
          ['1', t('List 20–30 target teams (bank + group + office)', 'Elencare 20–30 team obiettivo (banca + gruppo + ufficio)')],
          ['2', t('Find alumni via LinkedIn, student associations and career events', 'Trovare alumni tramite LinkedIn, associazioni studentesche ed eventi di carriera')],
          ['3', t('Send short, specific messages asking for a 15-minute call', 'Inviare messaggi brevi e specifici chiedendo una call di 15 minuti')],
          ['4', t('Prepare 3–4 thoughtful questions; take notes; thank them the same day', 'Preparare 3–4 domande ragionate; prendere appunti; ringraziare in giornata')],
          ['5', t('Follow up when you apply or have news; never ask directly for a job', 'Ricontattare quando ti candidi o hai novità; mai chiedere direttamente un lavoro')]
        ]
      }
    },
    {
      type: 'realworld',
      body: t(
        'Student finance societies, case competitions and earlier internships (e.g. in Big Four transaction services, boutiques or corporate M&A) strengthen a CV. Referrals from bankers you have spoken to can help an application get read, but technical preparation and a crisp “why” story decide the superday.',
        'Associazioni studentesche di finanza, case competition e stage precedenti (ad es. in transaction services delle Big Four, boutique o M&A interno di aziende) rafforzano il CV. Le segnalazioni dei banker con cui hai parlato possono far leggere una candidatura, ma sono la preparazione tecnica e una motivazione chiara a decidere il superday.'
      )
    },
    { type: 'exercise', questionId: 'ib-rec-q1' },
    { type: 'exercise', questionId: 'ib-rec-q2' },
    { type: 'exercise', questionId: 'ib-rec-q3' },
    {
      type: 'interview',
      question: t('Why investment banking?', 'Perché l’investment banking?'),
      answer: t(
        'Three reasons. First, the learning curve: in two years I’ll get a rigorous training in valuation, accounting and transactions that I can’t get anywhere else so quickly. Second, the work itself: I enjoy combining analysis with real decisions — [a real experience of yours] showed me how much the numbers matter in a decision. Third, the people: [what you learned in real conversations with the team], and I want to work in a demanding, team-based environment where I’m accountable for the quality of my work.',
        'Tre motivi. Primo, la curva di apprendimento: in due anni avrò una formazione rigorosa in valutazione, contabilità e operazioni che non potrei ottenere altrove così rapidamente. Secondo, il lavoro in sé: mi piace unire analisi e decisioni reali — [una tua esperienza reale] mi ha mostrato quanto contano i numeri in una decisione. Terzo, le persone: [cosa hai appreso in conversazioni reali con il team], e voglio lavorare in un ambiente esigente e di squadra, dove rispondo della qualità del mio lavoro.'
      )
    },
    {
      type: 'mistakes',
      items: [
        t('Starting to prepare when applications are already closing.', 'Iniziare a prepararsi quando le candidature stanno già chiudendo.'),
        t('Generic networking messages or asking alumni directly for a job.', 'Messaggi di networking generici o chiedere direttamente un lavoro agli alumni.'),
        t('Mentioning a recent deal you cannot discuss beyond the headline.', 'Citare un deal recente di cui non sai dire nulla oltre al titolo.'),
        t('Relying on dates from last year: timelines change annually.', 'Basarsi sulle date dell’anno precedente: le tempistiche cambiano ogni anno.')
      ]
    },
    {
      type: 'summary',
      items: [
        t('Internships drive analyst hiring; recruiting starts early, especially in the US.', 'Gli stage guidano le assunzioni da analyst; il recruiting inizia presto, soprattutto negli USA.'),
        t('London: spring weeks, summer and off-cycle; Milan: many off-cycle internships.', 'Londra: spring week, summer e off-cycle; Milano: molti stage off-cycle.'),
        t('Process: CV → tests → first rounds → superday → offer; prepare technicals and your “why”.', 'Processo: CV → test → primi colloqui → superday → offerta; prepara la tecnica e la tua motivazione.')
      ]
    }
  ],
  questions: [
    {
      id: 'ib-rec-q1',
      kind: 'order',
      topic: 'ib-recruiting',
      difficulty: 1,
      objective: t('Sequence the recruiting process.', 'Ordinare il processo di recruiting.'),
      prompt: t('Put the stages of a typical IB recruiting process in order.', 'Metti in ordine le fasi di un tipico processo di recruiting IB.'),
      items: [
        t('Online application and CV', 'Candidatura online e CV'),
        t('Online tests / video interview', 'Test online / video-colloquio'),
        t('First-round interview', 'Primo colloquio'),
        t('Superday / assessment centre', 'Superday / assessment centre'),
        t('Offer', 'Offerta')
      ],
      explanation: t('Screening moves from CV to tests, then live interviews, culminating in a superday before an offer.', 'La selezione passa dal CV ai test, poi ai colloqui dal vivo, fino al superday prima dell’offerta.')
    },
    {
      id: 'ib-rec-q2',
      kind: 'mcq',
      topic: 'ib-recruiting',
      difficulty: 1,
      objective: t('Recognise effective networking behaviour.', 'Riconoscere un networking efficace.'),
      prompt: t('Which networking message is most effective?', 'Quale messaggio di networking è più efficace?'),
      choices: [
        t('“Hi, can you refer me for a job at your bank?”', '“Ciao, puoi segnalarmi per un lavoro nella tua banca?”'),
        t('“Hi, I’m a Bocconi student interested in M&A. I saw you moved from Milan to the London industrials team — could I ask you a few questions in a 15-minute call?”', '“Ciao, sono uno studente Bocconi interessato all’M&A. Ho visto che sei passato da Milano al team industrials di Londra — potrei farti qualche domanda in una call di 15 minuti?”'),
        t('A long email with your full CV and grades and no request', 'Una lunga email con CV completo e voti, senza alcuna richiesta'),
        t('Sending the same message to 200 bankers at once', 'Inviare lo stesso messaggio a 200 banker contemporaneamente')
      ],
      correct: 1,
      explanation: t('Short, personalised and a small, specific ask. Asking for a referral cold, sending walls of text or mass messages rarely works.', 'Breve, personalizzato e con una richiesta piccola e precisa. Chiedere una segnalazione a freddo, inviare muri di testo o messaggi di massa raramente funziona.')
    },
    {
      id: 'ib-rec-q3',
      kind: 'multi',
      topic: 'ib-recruiting',
      difficulty: 1,
      objective: t('Identify typical technical topics in IB interviews.', 'Individuare gli argomenti tecnici tipici dei colloqui IB.'),
      prompt: t('Which topics are typically tested in IB analyst technical interviews? Select all that apply.', 'Quali argomenti vengono tipicamente testati nei colloqui tecnici da analyst IB? Seleziona tutte le risposte corrette.'),
      choices: [
        t('How the three financial statements link', 'Come si collegano i tre prospetti di bilancio'),
        t('Enterprise value vs equity value', 'Enterprise value vs equity value'),
        t('DCF and trading comps', 'DCF e comparabili di borsa'),
        t('Accretion/dilution and LBO basics', 'Accretion/dilution e basi di LBO'),
        t('Programming in C++', 'Programmazione in C++')
      ],
      correct: [0, 1, 2, 3],
      explanation: t('Accounting, valuation, M&A and LBO basics form the core. Programming is relevant for quant roles, not standard IB interviews.', 'Contabilità, valutazione, M&A e basi di LBO sono il nucleo. La programmazione riguarda ruoli quantitativi, non i colloqui IB standard.')
    }
  ],
  flashcards: [
    { id: 'fc-ib-rec-1', topic: 'ib-recruiting', front: t('What is a superday?', 'Cos’è un superday?'), back: t('Final round of several back-to-back interviews (sometimes a case or test) on one day.', 'Round finale con più colloqui consecutivi (talvolta un case o un test) in un’unica giornata.') },
    { id: 'fc-ib-rec-2', topic: 'ib-recruiting', front: t('What is an off-cycle internship?', 'Cos’è uno stage off-cycle?'), back: t('An internship outside the summer window, often 3–6 months; very common in Milan and London.', 'Uno stage fuori dalla finestra estiva, spesso di 3–6 mesi; molto comune a Milano e Londra.') },
    { id: 'fc-ib-rec-3', topic: 'ib-recruiting', front: t('What is a spring week?', 'Cos’è una spring week?'), back: t('A short insight programme for early-year students, mainly in London, that can lead to fast-track internship processes.', 'Un breve programma di orientamento per studenti dei primi anni, soprattutto a Londra, che può dare accesso a processi accelerati per lo stage.') },
    { id: 'fc-ib-rec-4', topic: 'ib-recruiting', front: t('Where do most full-time analyst offers come from?', 'Da dove arriva la maggior parte delle offerte da analyst full-time?'), back: t('Return offers after internships.', 'Dalle return offer al termine degli stage.') }
  ]
};

export const lessons: Lesson[] = [
  ibLandscape,
  ibGroups,
  ibProducts,
  ibAnalystRole,
  ibPitchbooks,
  ibProfessionalism,
  ibCareerPath,
  ibRecruiting
];
