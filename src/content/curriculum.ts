import type { Academy, LessonStub, Module, L } from './types';

/**
 * The complete PATH Academy curriculum hierarchy (Academy → Module → Lesson).
 * A lesson stub becomes "available" when a Lesson with the same id exists in
 * src/content/lessons/*. Stubs without content are shown as "upcoming".
 */

const s = (id: string, en: string, it: string, covers?: [string, string][]): LessonStub => ({
  id,
  title: { en, it },
  covers: covers?.map(([e, i]) => ({ en: e, it: i }))
});
const m = (id: string, en: string, it: string, dEn: string, dIt: string, lessons: LessonStub[]): Module => ({
  id,
  title: { en, it },
  description: { en: dEn, it: dIt },
  lessons
});
const t = (en: string, it: string): L => ({ en, it });

export const ACADEMIES: Academy[] = [
  /* ============================ 1. ACCOUNTING ============================ */
  {
    id: 'accounting',
    order: 1,
    icon: 'BookOpenCheck',
    accent: 'from-electric-500 to-teal-400',
    title: t('Accounting & Financial Statements', 'Contabilità e Bilancio'),
    tagline: t('The language of business — from debits and credits to M&A accounting.', 'Il linguaggio degli affari — dalla partita doppia alla contabilità delle M&A.'),
    modules: [
      m('A1', 'Accounting Fundamentals', 'Fondamenti di contabilità',
        'The accounting equation, double entry, accruals and the trial balance.',
        "L'equazione contabile, la partita doppia, la competenza economica e il bilancio di verifica.",
        [
          s('acc-accounting-equation', 'The Accounting Equation', "L'equazione contabile", [['Assets, liabilities, equity', 'Attività, passività, patrimonio netto']]),
          s('acc-double-entry', 'Double Entry, Debits & Credits', 'Partita doppia, dare e avere', [['Journal entries', 'Scritture contabili'], ['T-accounts', 'Conti a T']]),
          s('acc-accrual-accounting', 'Accrual Accounting', 'Il principio di competenza', [['Revenue recognition', 'Riconoscimento dei ricavi'], ['Expense recognition (matching)', 'Riconoscimento dei costi (correlazione)']]),
          s('acc-trial-balance', 'From Journal to Trial Balance', 'Dal libro giornale al bilancio di verifica')
        ]),
      m('A2', 'The Three Financial Statements', 'I tre prospetti di bilancio',
        'Income statement, balance sheet and cash flow statement — and how they link.',
        'Conto economico, stato patrimoniale e rendiconto finanziario — e come si collegano.',
        [
          s('acc-income-statement', 'The Income Statement', 'Il conto economico', [['Revenue to net income', 'Dai ricavi all’utile netto'], ['EBITDA, EBIT', 'EBITDA, EBIT']]),
          s('acc-balance-sheet', 'The Balance Sheet', 'Lo stato patrimoniale', [['Retained earnings', 'Utili portati a nuovo']]),
          s('acc-cash-flow-statement', 'The Cash Flow Statement', 'Il rendiconto finanziario', [['Operating, investing, financing', 'Operativo, investimento, finanziamento']]),
          s('acc-da-capex', 'D&A and CapEx', 'Ammortamenti e investimenti (CapEx)'),
          s('acc-working-capital', 'Working Capital', 'Il capitale circolante'),
          s('acc-linking-statements', 'Linking the Three Statements', 'Collegare i tre prospetti'),
          s('acc-forecasting', 'Forecasting Financial Statements', 'Previsione dei prospetti di bilancio')
        ]),
      m('A3', 'Italian Financial Reporting (OIC)', 'Il bilancio italiano (OIC)',
        'The Civil Code framework, statutory formats, OIC standards and Italian consolidation.',
        'Il quadro del Codice Civile, gli schemi di bilancio, i principi OIC e il consolidato italiano.',
        [
          s('acc-italian-framework', 'The Italian Civil Code Framework', 'Il quadro del Codice Civile', [['Arts. 2423–2435-ter', 'Artt. 2423–2435-ter'], ['OIC standards', 'Principi OIC']]),
          s('acc-italian-formats', 'Italian Statutory Formats', 'Gli schemi di bilancio civilistici', [['Art. 2424 balance sheet', 'Stato patrimoniale art. 2424'], ['Art. 2425 income statement', 'Conto economico art. 2425'], ['Nota integrativa, relazione sulla gestione', 'Nota integrativa, relazione sulla gestione']]),
          s('acc-italian-participations', 'Participations & Consolidation in Italy', 'Partecipazioni e consolidato in Italia', [['OIC 21, OIC 17, D.Lgs. 127/1991', 'OIC 21, OIC 17, D.Lgs. 127/1991']]),
          s('acc-oic-vs-ifrs', 'OIC vs IFRS: Key Differences', 'OIC vs IFRS: differenze principali')
        ]),
      m('A4', 'IFRS & IAS', 'IFRS e IAS',
        'The conceptual framework and the standards that matter most in banking.',
        'Il quadro concettuale e i principi più rilevanti in banca d’affari.',
        [
          s('acc-ifrs-framework', 'IFRS Framework & Presentation (IAS 1 → IFRS 18)', 'Quadro IFRS e presentazione (IAS 1 → IFRS 18)'),
          s('acc-ifrs-15', 'IFRS 15 — Revenue', 'IFRS 15 — Ricavi'),
          s('acc-ifrs-16', 'IFRS 16 — Leases', 'IFRS 16 — Leasing'),
          s('acc-ifrs-9', 'IFRS 9 — Financial Instruments', 'IFRS 9 — Strumenti finanziari'),
          s('acc-ias-12', 'IAS 12 — Income Taxes & Deferred Tax', 'IAS 12 — Imposte e fiscalità differita'),
          s('acc-ias-36', 'IAS 36 — Impairment', 'IAS 36 — Riduzione di valore'),
          s('acc-ifrs-vs-usgaap', 'IFRS vs US GAAP', 'IFRS vs US GAAP')
        ]),
      m('A5', 'US GAAP', 'US GAAP',
        'FASB codification, ASC 606, 842, 805 and 810.',
        'La codifica FASB, ASC 606, 842, 805 e 810.',
        [
          s('acc-usgaap-fundamentals', 'US GAAP Fundamentals & the Codification', 'Fondamenti US GAAP e la Codification'),
          s('acc-asc-842', 'ASC 842 — Leases', 'ASC 842 — Leasing'),
          s('acc-asc-805-810', 'ASC 805 & 810 — Business Combinations and Consolidation', 'ASC 805 e 810 — Aggregazioni e consolidamento')
        ]),
      m('A6', 'Consolidated Financial Statements', 'Il bilancio consolidato',
        'Control, significant influence, full consolidation, equity method, NCI and eliminations.',
        "Controllo, influenza notevole, consolidamento integrale, metodo del patrimonio netto, terzi ed elisioni.",
        [
          s('acc-control-influence', 'Control, Significant Influence, Joint Arrangements', 'Controllo, influenza notevole, accordi congiunti'),
          s('acc-full-consolidation', 'Full Consolidation Mechanics', 'Il consolidamento integrale'),
          s('acc-nci', 'Non-Controlling Interests', 'Le interessenze di terzi'),
          s('acc-equity-method', 'The Equity Method', 'Il metodo del patrimonio netto'),
          s('acc-intercompany', 'Intercompany Eliminations', 'Le elisioni infragruppo'),
          s('acc-consolidation-workpaper', 'Preparing a Consolidation (Acquisition Date and After)', 'Redigere un consolidato (alla data di acquisizione e dopo)')
        ]),
      m('A7', 'Accounting for M&A', 'La contabilità delle M&A',
        'Purchase price allocation, goodwill, deferred taxes, contingent consideration and pro formas.',
        'Allocazione del prezzo, avviamento, imposte differite, corrispettivi potenziali e pro forma.',
        [
          s('acc-business-combinations', 'Business Combinations & the Acquisition Method', 'Aggregazioni aziendali e metodo dell’acquisizione'),
          s('acc-ppa-goodwill', 'Purchase Price Allocation & Goodwill', 'Allocazione del prezzo (PPA) e avviamento'),
          s('acc-ma-deferred-tax', 'Deferred Taxes in Acquisitions', 'Fiscalità differita nelle acquisizioni'),
          s('acc-contingent-consideration', 'Contingent Consideration & Bargain Purchases', 'Corrispettivi potenziali e acquisti a prezzi favorevoli'),
          s('acc-pro-forma', 'Pro Forma Financial Statements', 'Bilanci pro forma')
        ])
    ]
  },

  /* ============================ 2. CORPORATE FINANCE ============================ */
  {
    id: 'corporate-finance',
    order: 2,
    icon: 'Landmark',
    accent: 'from-teal-400 to-electric-500',
    title: t('Corporate Finance', 'Finanza aziendale'),
    tagline: t('Time value, capital budgeting, cost of capital and capital structure.', 'Valore temporale, decisioni di investimento, costo del capitale e struttura finanziaria.'),
    modules: [
      m('CF1', 'Time Value of Money', 'Il valore temporale del denaro', 'PV, FV, annuities, perpetuities and discount rates.', 'Valore attuale e futuro, rendite, perpetuità e tassi di sconto.', [
        s('cf-time-value', 'Present and Future Value', 'Valore attuale e valore futuro'),
        s('cf-annuities-perpetuities', 'Annuities and Perpetuities', 'Rendite e perpetuità')
      ]),
      m('CF2', 'Capital Budgeting', 'Decisioni di investimento', 'NPV, IRR, payback and profitability index.', 'VAN, TIR, periodo di recupero e indice di redditività.', [
        s('cf-npv', 'Net Present Value', 'Valore attuale netto (VAN)'),
        s('cf-irr', 'Internal Rate of Return', 'Tasso interno di rendimento (TIR)'),
        s('cf-payback-pi', 'Payback and Profitability Index', 'Periodo di recupero e indice di redditività')
      ]),
      m('CF3', 'Returns and Capital Allocation', 'Rendimenti e allocazione del capitale', 'ROIC, ROE, ROA and how companies allocate capital.', 'ROIC, ROE, ROA e come le imprese allocano il capitale.', [
        s('cf-return-metrics', 'ROIC, ROE and ROA', 'ROIC, ROE e ROA'),
        s('cf-capital-allocation', 'Capital Allocation Decisions', 'Le decisioni di allocazione del capitale')
      ]),
      m('CF4', 'Cost of Capital', 'Il costo del capitale', 'CAPM, beta, cost of debt and WACC.', 'CAPM, beta, costo del debito e WACC.', [
        s('cf-capm', 'Cost of Equity and CAPM', 'Costo del capitale proprio e CAPM', [['Risk-free rate, ERP, alpha', 'Tasso privo di rischio, ERP, alfa']]),
        s('cf-beta', 'Levered and Unlevered Beta', 'Beta levered e unlevered'),
        s('cf-cost-of-debt', 'Cost of Debt', 'Costo del debito'),
        s('cf-wacc', 'WACC', 'WACC')
      ]),
      m('CF5', 'Capital Structure and Payout', 'Struttura finanziaria e distribuzioni', 'Leverage, Modigliani–Miller, dividends, credit risk and distress.', 'Leva, Modigliani–Miller, dividendi, rischio di credito e dissesto.', [
        s('cf-capital-structure', 'Capital Structure and Leverage', 'Struttura del capitale e leva finanziaria'),
        s('cf-dividend-policy', 'Dividends and Buybacks', 'Dividendi e riacquisto di azioni proprie'),
        s('cf-credit-distress', 'Credit Risk and Financial Distress', 'Rischio di credito e dissesto finanziario')
      ])
    ]
  },

  /* ============================ 3. VALUATION ============================ */
  {
    id: 'valuation',
    order: 3,
    icon: 'Scale',
    accent: 'from-electric-400 to-electric-600',
    title: t('Valuation', 'Valutazione d’azienda'),
    tagline: t('Enterprise value, comps, precedents, DCF and the football field.', 'Enterprise value, multipli, transazioni comparabili, DCF e football field.'),
    modules: [
      m('V1', 'Enterprise and Equity Value', 'Enterprise value ed equity value', 'What a business is worth to all capital providers vs. to shareholders.', 'Quanto vale un’azienda per tutti i finanziatori rispetto ai soli azionisti.', [
        s('val-ev-equity', 'Enterprise Value vs Equity Value', 'Enterprise value vs equity value'),
        s('val-bridge', 'The EV-to-Equity Bridge', 'Il ponte da EV a equity value', [['Net debt, NCI, non-operating assets', 'Posizione finanziaria netta, terzi, attività non operative']]),
        s('val-diluted-shares', 'Diluted Shares and the Treasury Stock Method', 'Azioni diluite e treasury stock method')
      ]),
      m('V2', 'Cash Flow Metrics', 'Metriche di flusso di cassa', 'EBITDA, EBIT, unlevered and levered free cash flow.', 'EBITDA, EBIT, flussi di cassa unlevered e levered.', [
        s('val-fcf', 'Unlevered vs Levered Free Cash Flow', 'Free cash flow unlevered vs levered')
      ]),
      m('V3', 'Relative Valuation', 'Valutazione relativa', 'Trading comparables and precedent transactions.', 'Società comparabili e transazioni precedenti.', [
        s('val-multiples', 'Valuation Multiples', 'I multipli di valutazione', [['EV/Revenue, EV/EBITDA, EV/EBIT, P/E', 'EV/Ricavi, EV/EBITDA, EV/EBIT, P/E']]),
        s('val-trading-comps', 'Trading Comparables', 'Società comparabili quotate'),
        s('val-precedents', 'Precedent Transactions', 'Transazioni precedenti')
      ]),
      m('V4', 'Discounted Cash Flow', 'Discounted Cash Flow', 'Forecasting, terminal value, discounting and sensitivities.', 'Previsioni, valore terminale, attualizzazione e sensitività.', [
        s('val-dcf-overview', 'DCF Intuition and Structure', 'Intuizione e struttura del DCF'),
        s('val-terminal-value', 'Terminal Value: Perpetuity Growth vs Exit Multiple', 'Valore terminale: crescita perpetua vs multiplo di uscita'),
        s('val-dcf-walkthrough', 'Building a DCF Step by Step', 'Costruire un DCF passo per passo'),
        s('val-sensitivity', 'Sensitivity Analysis', 'Analisi di sensitività')
      ]),
      m('V5', 'Advanced Valuation', 'Valutazione avanzata', 'Sum-of-the-parts, football fields, financial institutions and limitations.', 'Somma delle parti, football field, istituzioni finanziarie e limiti.', [
        s('val-sotp', 'Sum-of-the-Parts', 'Somma delle parti (SOTP)'),
        s('val-football-field', 'The Football Field', 'Il football field'),
        s('val-fig', 'Valuing Banks and Insurers', 'Valutare banche e assicurazioni'),
        s('val-limitations', 'Limitations of Valuation Methods', 'I limiti dei metodi di valutazione')
      ])
    ]
  },

  /* ============================ 4. M&A ============================ */
  {
    id: 'ma',
    order: 4,
    icon: 'Handshake',
    accent: 'from-teal-300 to-teal-500',
    title: t('Mergers & Acquisitions', 'Fusioni e acquisizioni (M&A)'),
    tagline: t('From strategic rationale to signing and closing — and what analysts do at every step.', 'Dalla logica strategica a signing e closing — e cosa fanno gli analisti in ogni fase.'),
    modules: [
      m('M1', 'M&A Fundamentals', 'Fondamenti di M&A', 'Why companies buy companies, and who the buyers are.', 'Perché le aziende acquistano aziende e chi sono gli acquirenti.', [
        s('ma-what-is-ma', 'What M&A Is: Mergers vs Acquisitions', 'Cos’è l’M&A: fusioni vs acquisizioni'),
        s('ma-buyers', 'Strategic Buyers vs Financial Sponsors', 'Acquirenti strategici vs fondi di private equity'),
        s('ma-deal-types', 'Horizontal, Vertical and Conglomerate Deals', 'Operazioni orizzontali, verticali e conglomerali'),
        s('ma-rationale-synergies', 'Strategic Rationale and Synergies', 'Logica strategica e sinergie')
      ]),
      m('M2', 'The M&A Advisory Process', 'Il processo di advisory M&A', 'Origination, sell-side and buy-side processes, from teaser to closing.', 'Origination, processi sell-side e buy-side, dal teaser al closing.', [
        s('ma-origination-mandates', 'Origination, Pitchbooks and Mandates', 'Origination, pitchbook e mandati'),
        s('ma-sell-side-process', 'The Sell-Side Auction Process', 'Il processo d’asta sell-side', [['Teaser, NDA, CIM, buyer list', 'Teaser, NDA, info memo, lista acquirenti']]),
        s('ma-offers-loi', 'Indicative Offers, LOIs and Binding Offers', 'Offerte non vincolanti, LOI e offerte vincolanti'),
        s('ma-due-diligence', 'Due Diligence and Data Rooms', 'Due diligence e data room'),
        s('ma-signing-closing', 'Negotiation, Signing, Approvals and Closing', 'Negoziazione, signing, autorizzazioni e closing'),
        s('ma-buy-side', 'Buy-Side Mandates', 'I mandati buy-side')
      ]),
      m('M3', 'Transaction Structuring', 'La strutturazione dell’operazione', 'Consideration, asset vs share deals, price mechanisms and fees.', 'Corrispettivo, asset deal vs share deal, meccanismi di prezzo e commissioni.', [
        s('ma-consideration', 'Cash, Stock and Mixed Consideration', 'Corrispettivo in contanti, azioni o misto'),
        s('ma-asset-vs-share', 'Asset Deals vs Share Deals', 'Asset deal vs share deal'),
        s('ma-price-mechanisms', 'Locked Box vs Completion Accounts', 'Locked box vs completion accounts', [['Working capital adjustments', 'Aggiustamenti del capitale circolante']]),
        s('ma-earnouts', 'Earn-Outs', 'Gli earn-out'),
        s('ma-sources-uses-fees', 'Sources & Uses, Financing and Fees', 'Fonti e impieghi, finanziamento e commissioni')
      ]),
      m('M4', 'Advanced M&A', 'M&A avanzato', 'Accretion/dilution, synergies, takeovers, separations and integration.', 'Accrescimento/diluizione, sinergie, scalate, separazioni e integrazione.', [
        s('ma-accretion-dilution', 'Accretion / Dilution and Pro Forma EPS', 'Accrescimento/diluizione e EPS pro forma'),
        s('ma-synergy-modelling', 'Modelling Synergies', 'Modellizzare le sinergie'),
        s('ma-hostile-tender', 'Hostile Takeovers and Tender Offers', 'Scalate ostili e offerte pubbliche'),
        s('ma-separations', 'Divestitures, Carve-Outs and Spin-Offs', 'Cessioni, carve-out e spin-off'),
        s('ma-cross-border', 'Cross-Border M&A', 'M&A internazionale'),
        s('ma-antitrust', 'Antitrust and Regulatory Review', 'Antitrust e autorizzazioni regolamentari'),
        s('ma-pmi', 'Post-Merger Integration', 'L’integrazione post-acquisizione')
      ])
    ]
  },

  /* ============================ 5. PRIVATE EQUITY ============================ */
  {
    id: 'private-equity',
    order: 5,
    icon: 'Briefcase',
    accent: 'from-electric-500 to-teal-300',
    title: t('Private Equity', 'Private Equity'),
    tagline: t('Funds, LBOs, returns and value creation.', 'Fondi, LBO, rendimenti e creazione di valore.'),
    modules: [
      m('P1', 'The PE Industry', 'Il settore del private equity', 'GPs, LPs, fundraising, fees, carry and the fund lifecycle.', 'GP, LP, raccolta, commissioni, carried interest e ciclo di vita del fondo.', [
        s('pe-industry', 'GPs, LPs and Fund Structure', 'GP, LP e struttura del fondo'),
        s('pe-fees-carry', 'Management Fees and Carried Interest', 'Commissioni di gestione e carried interest'),
        s('pe-fund-lifecycle', 'The Fund Lifecycle', 'Il ciclo di vita del fondo')
      ]),
      m('P2', 'Investing', 'Il processo d’investimento', 'Sourcing, screening, investment committees and due diligence.', 'Sourcing, screening, comitato investimenti e due diligence.', [
        s('pe-sourcing-screening', 'Deal Sourcing and Screening', 'Sourcing e screening delle opportunità'),
        s('pe-ic-diligence', 'Investment Committee and Due Diligence', 'Comitato investimenti e due diligence')
      ]),
      m('P3', 'LBO Fundamentals', 'Fondamenti di LBO', 'Sources and uses, debt tranches, paydown, MOIC and IRR.', 'Fonti e impieghi, tranche di debito, rimborso, MOIC e IRR.', [
        s('pe-lbo-intuition', 'How an LBO Works', 'Come funziona un LBO'),
        s('pe-sources-uses', 'Sources & Uses', 'Fonti e impieghi'),
        s('pe-debt-tranches', 'Debt Tranches and Paydown', 'Tranche di debito e rimborso'),
        s('pe-returns', 'MOIC and IRR', 'MOIC e IRR'),
        s('pe-paper-lbo', 'The Paper LBO', 'Il paper LBO')
      ]),
      m('P4', 'Value Creation and Exits', 'Creazione di valore e exit', 'Operational value creation, buy-and-build, incentives and exit routes.', 'Creazione di valore operativa, buy-and-build, incentivi e modalità di exit.', [
        s('pe-value-creation', 'Value Creation Levers', 'Le leve di creazione di valore'),
        s('pe-buy-and-build', 'Buy-and-Build and Add-Ons', 'Buy-and-build e add-on'),
        s('pe-management-incentives', 'Management Incentives', 'Gli incentivi al management'),
        s('pe-exits', 'Exits, Secondary Buyouts and Continuation Funds', 'Exit, secondary buyout e continuation fund'),
        s('pe-vs-ib', 'PE vs Investment Banking', 'Private equity vs investment banking')
      ])
    ]
  },

  /* ============================ 6. INVESTMENT BANKING ============================ */
  {
    id: 'investment-banking',
    order: 6,
    icon: 'Building2',
    accent: 'from-teal-400 to-teal-300',
    title: t('Investment Banking', 'Investment Banking'),
    tagline: t('How the industry works and what an analyst actually does.', 'Come funziona il settore e cosa fa davvero un analyst.'),
    modules: [
      m('IB1', 'Industry Structure', 'La struttura del settore', 'Bulge brackets, elite boutiques, mid-market banks; coverage vs product groups.', 'Bulge bracket, elite boutique, banche mid-market; gruppi di copertura vs prodotto.', [
        s('ib-landscape', 'The Banking Landscape', 'Il panorama delle banche d’affari'),
        s('ib-groups', 'Coverage Groups vs Product Groups', 'Gruppi di copertura vs gruppi di prodotto')
      ]),
      m('IB2', 'Products', 'I prodotti', 'M&A advisory, ECM, DCM, Leveraged Finance and Restructuring.', 'Advisory M&A, ECM, DCM, Leveraged Finance e Restructuring.', [
        s('ib-products', 'M&A, ECM, DCM, LevFin and Restructuring', 'M&A, ECM, DCM, LevFin e Restructuring')
      ]),
      m('IB3', 'The Analyst Job', 'Il lavoro dell’analyst', 'Modelling, pitchbooks, execution and professional expectations.', 'Modelli, pitchbook, esecuzione e aspettative professionali.', [
        s('ib-analyst-role', 'What an Analyst Does', 'Cosa fa un analyst'),
        s('ib-pitchbooks', 'Pitchbooks and Client Presentations', 'Pitchbook e presentazioni ai clienti'),
        s('ib-professionalism', 'Professional Expectations', 'Le aspettative professionali')
      ]),
      m('IB4', 'Careers and Recruiting', 'Carriera e recruiting', 'Career paths and how IB recruiting works in the US and Europe.', 'Percorsi di carriera e come funziona il recruiting in USA ed Europa.', [
        s('ib-career-path', 'Career Paths and Exit Opportunities', 'Percorsi di carriera ed exit opportunity'),
        s('ib-recruiting', 'IB Recruiting: Timeline and Strategy', 'Recruiting IB: tempistiche e strategia')
      ])
    ]
  },

  /* ============================ 7. CAPITAL MARKETS ============================ */
  {
    id: 'capital-markets',
    order: 7,
    icon: 'TrendingUp',
    accent: 'from-electric-400 to-teal-400',
    title: t('Capital Markets', 'Mercati dei capitali'),
    tagline: t('Raising equity and debt: IPOs, bonds, loans, ratings and covenants.', 'Raccogliere equity e debito: IPO, obbligazioni, prestiti, rating e covenant.'),
    modules: [
      m('CM1', 'Equity Capital Markets', 'Equity Capital Markets', 'IPOs, follow-ons, rights issues and convertibles.', 'IPO, aumenti di capitale, diritti d’opzione e convertibili.', [
        s('cm-ipo', 'The IPO Process', 'Il processo di IPO'),
        s('cm-follow-ons-rights', 'Follow-Ons and Rights Issues', 'Aumenti di capitale e offerte in opzione'),
        s('cm-convertibles', 'Convertible Bonds', 'Le obbligazioni convertibili')
      ]),
      m('CM2', 'Debt Capital Markets', 'Debt Capital Markets', 'Bonds, IG vs HY, leveraged loans and issuance.', 'Obbligazioni, IG vs HY, prestiti leveraged ed emissione.', [
        s('cm-bonds-basics', 'Corporate Bond Basics', 'Le obbligazioni societarie'),
        s('cm-ig-hy-loans', 'Investment Grade, High Yield and Leveraged Loans', 'Investment grade, high yield e prestiti leveraged'),
        s('cm-issuance-process', 'The Debt Issuance Process', 'Il processo di emissione del debito')
      ]),
      m('CM3', 'Credit Analysis', 'Analisi del credito', 'Spreads, yield curves, duration, convexity, ratings and covenants.', 'Spread, curve dei rendimenti, duration, convessità, rating e covenant.', [
        s('cm-yield-spreads', 'Yields, Spreads and the Yield Curve', 'Rendimenti, spread e curva dei tassi'),
        s('cm-duration-convexity', 'Duration and Convexity', 'Duration e convessità'),
        s('cm-ratings-covenants', 'Credit Ratings and Covenants', 'Rating e covenant'),
        s('cm-refinancing', 'Refinancing and Liability Management', 'Rifinanziamento e liability management')
      ])
    ]
  },

  /* ============================ 8. MARKETS & DERIVATIVES ============================ */
  {
    id: 'markets',
    order: 8,
    icon: 'LineChart',
    accent: 'from-teal-500 to-electric-500',
    title: t('Financial Markets & Derivatives', 'Mercati finanziari e derivati'),
    tagline: t('Asset classes, macro drivers, risk and return, and derivatives.', 'Classi di attivo, fattori macro, rischio e rendimento, e derivati.'),
    modules: [
      m('FM1', 'Markets and Macro', 'Mercati e macroeconomia', 'Asset classes, rates, inflation and monetary policy.', 'Classi di attivo, tassi, inflazione e politica monetaria.', [
        s('fm-asset-classes', 'Asset Classes and Indices', 'Classi di attivo e indici'),
        s('fm-rates-inflation', 'Interest Rates, Inflation and Monetary Policy', 'Tassi d’interesse, inflazione e politica monetaria'),
        s('fm-fx-commodities', 'FX and Commodities', 'Cambi e materie prime')
      ]),
      m('FM2', 'Risk and Return', 'Rischio e rendimento', 'Diversification, alpha and beta, liquidity.', 'Diversificazione, alfa e beta, liquidità.', [
        s('fm-risk-return', 'Risk, Return and Diversification', 'Rischio, rendimento e diversificazione'),
        s('fm-alpha-beta', 'Alpha, Beta and Liquidity', 'Alfa, beta e liquidità')
      ]),
      m('FM3', 'Derivatives', 'Derivati', 'Forwards, futures, options, swaps, hedging and option pricing.', 'Forward, future, opzioni, swap, copertura e pricing delle opzioni.', [
        s('fm-forwards-futures', 'Forwards and Futures', 'Forward e future'),
        s('fm-options', 'Options and Payoffs', 'Opzioni e payoff'),
        s('fm-swaps-hedging', 'Swaps and Hedging', 'Swap e copertura'),
        s('fm-option-pricing', 'Volatility and Basic Option Pricing', 'Volatilità e pricing delle opzioni')
      ])
    ]
  },

  /* ============================ 9. FINANCIAL MODELLING ============================ */
  {
    id: 'modelling',
    order: 9,
    icon: 'Sheet',
    accent: 'from-electric-500 to-electric-400',
    title: t('Financial Modelling', 'Modellazione finanziaria'),
    tagline: t('Model architecture, schedules, three-statement, DCF, M&A and LBO models.', 'Architettura dei modelli, schedule, three-statement, DCF, M&A e LBO.'),
    modules: [
      m('FMOD1', 'Foundations', 'Fondamenti', 'Excel practices and model architecture.', 'Buone pratiche Excel e architettura del modello.', [
        s('mod-excel-architecture', 'Excel Best Practice and Model Architecture', 'Buone pratiche Excel e architettura del modello'),
        s('mod-revenue-costs', 'Revenue and Cost Forecasts', 'Previsione di ricavi e costi')
      ]),
      m('FMOD2', 'Schedules', 'Gli schedule', 'Working capital, CapEx/D&A and debt schedules.', 'Capitale circolante, CapEx/ammortamenti e debito.', [
        s('mod-nwc-schedule', 'Working Capital Schedule', 'Lo schedule del capitale circolante'),
        s('mod-capex-schedule', 'CapEx and D&A Schedule', 'Lo schedule di CapEx e ammortamenti'),
        s('mod-debt-schedule', 'Debt Schedule and Circularity', 'Lo schedule del debito e la circolarità')
      ]),
      m('FMOD3', 'Core Models', 'I modelli principali', 'Three-statement, comps, DCF, merger and LBO models.', 'Three-statement, comparabili, DCF, merger model e LBO.', [
        s('mod-three-statement', 'The Three-Statement Model', 'Il modello three-statement'),
        s('mod-comps-model', 'Building a Comps Model', 'Costruire un modello di comparabili'),
        s('mod-dcf-model', 'Building a DCF Model', 'Costruire un modello DCF'),
        s('mod-merger-model', 'Merger (Accretion/Dilution) Model', 'Il merger model (accrescimento/diluizione)'),
        s('mod-lbo-model', 'LBO Model', 'Il modello LBO')
      ]),
      m('FMOD4', 'Model Quality', 'Qualità del modello', 'Scenarios, sensitivities, auditing and common errors.', 'Scenari, sensitività, revisione ed errori comuni.', [
        s('mod-scenarios', 'Scenario and Sensitivity Analysis', 'Analisi di scenario e sensitività'),
        s('mod-auditing', 'Model Auditing and Common Errors', 'Revisione del modello ed errori comuni')
      ])
    ]
  },

  /* ============================ 10. INTERVIEW PREP ============================ */
  {
    id: 'interviews',
    order: 10,
    icon: 'MessagesSquare',
    accent: 'from-teal-300 to-electric-400',
    title: t('Interview Preparation', 'Preparazione ai colloqui'),
    tagline: t('Technical and behavioural IB interviews — plus your Story Bank.', 'Colloqui tecnici e comportamentali IB — e la tua Story Bank.'),
    modules: [
      m('IP1', 'Technical Interviews', 'Colloqui tecnici', 'How technical questions are asked and how to answer them.', 'Come vengono poste le domande tecniche e come rispondere.', [
        s('int-technical-approach', 'How to Answer Technical Questions', 'Come rispondere alle domande tecniche'),
        s('int-walk-me-through', 'The Classic "Walk Me Through" Questions', 'Le classiche domande "walk me through"')
      ]),
      m('IP2', 'Behavioural Interviews', 'Colloqui comportamentali', 'Your story, STAR answers and fit.', 'La tua storia, risposte STAR e fit.', [
        s('int-tell-me-about-yourself', 'Tell Me About Yourself', 'Parlami di te'),
        s('int-why-ib', 'Why Investment Banking, Why M&A, Why This Bank', 'Perché l’investment banking, perché M&A, perché questa banca'),
        s('int-star', 'STAR Stories That Do Not Sound Rehearsed', 'Storie STAR che non sembrano recitate')
      ]),
      m('IP3', 'Commercial Awareness', 'Consapevolezza commerciale', 'Discussing deals and markets with conviction.', 'Discutere di operazioni e mercati con convinzione.', [
        s('int-deal-discussion', 'How to Discuss a Deal', 'Come discutere un’operazione'),
        s('int-market-view', 'Having a Market View', 'Avere una view sui mercati')
      ])
    ]
  },

  /* ============================ 11. DEAL CASE STUDIES ============================ */
  {
    id: 'cases',
    order: 11,
    icon: 'Library',
    accent: 'from-electric-600 to-teal-400',
    title: t('Deal Case Studies & Financial History', 'Casi di studio e storia della finanza'),
    tagline: t('Landmark transactions — what happened, why, and what interviewers ask about them.', 'Operazioni storiche — cosa è successo, perché e cosa chiedono ai colloqui.'),
    modules: [
      m('C1', 'How to Read a Deal', 'Come leggere un’operazione', 'A framework to analyse any transaction.', 'Uno schema per analizzare qualsiasi operazione.', [
        s('case-framework', 'The 12-Point Deal Framework', 'Lo schema in 12 punti')
      ])
    ]
  }
];

export const ACADEMY_BY_ID = Object.fromEntries(ACADEMIES.map((a) => [a.id, a])) as Record<string, Academy>;

export interface StubLocation {
  stub: LessonStub;
  module: Module;
  academy: Academy;
  index: number; // position within module
}

export const STUB_INDEX: Record<string, StubLocation> = (() => {
  const out: Record<string, StubLocation> = {};
  for (const a of ACADEMIES) for (const mod of a.modules) mod.lessons.forEach((stub, index) => (out[stub.id] = { stub, module: mod, academy: a, index }));
  return out;
})();

export const ALL_STUBS: LessonStub[] = ACADEMIES.flatMap((a) => a.modules.flatMap((mm) => mm.lessons));
