import type { L, Lesson } from '../types';

/**
 * Academy 8 — Financial Markets & Derivatives: FM1 (Markets and macro), FM2 (Risk and return), FM3 (Derivatives).
 */
const t = (en: string, it: string): L => ({ en, it });

export const lessons: Lesson[] = [
  /* ============================ FM1 — fm-asset-classes ============================ */
  {
    id: 'fm-asset-classes',
    academyId: 'markets',
    moduleId: 'FM1',
    mode: 'quick',
    minutes: 8,
    difficulty: 1,
    reviewed: '2026-10',
    objective: t(
      'Describe the main asset classes and how market indices are built, and compute total returns and cap-weighted index returns.',
      'Descrivere le principali classi di attivo e come si costruiscono gli indici, e calcolare rendimenti totali e rendimenti di indici ponderati per capitalizzazione.'
    ),
    screens: [
      {
        type: 'intuition',
        title: t('Where money can go', 'Dove può andare il denaro'),
        body: t(
          'Every investor chooses between a few big buckets, each with a different mix of **return, risk and liquidity**:\n- **Equities**: ownership; highest long-run expected return, high volatility.\n- **Fixed income**: loans to governments and companies; steadier income.\n- **Cash / money markets**: very short-term, very safe, low return.\n- **Currencies (FX)** and **commodities**: traded for hedging and speculation.\n- **Alternatives**: real estate, infrastructure, private equity, private credit, hedge funds — often illiquid.',
          "Ogni investitore sceglie tra pochi grandi contenitori, ognuno con un diverso mix di **rendimento, rischio e liquidità**:\n- **Azioni**: proprietà; rendimento atteso di lungo periodo più alto, volatilità elevata.\n- **Reddito fisso**: prestiti a Stati e imprese; reddito più stabile.\n- **Liquidità / mercato monetario**: brevissimo termine, molto sicuro, rendimento basso.\n- **Valute (FX)** e **materie prime**: negoziate per copertura e speculazione.\n- **Alternativi**: immobili, infrastrutture, private equity, private credit, hedge fund — spesso illiquidi."
        )
      },
      {
        type: 'technical',
        title: t('How indices are built', 'Come si costruiscono gli indici'),
        body: t(
          'An index tracks a basket of securities. The weighting method matters:\n- **Market-cap weighted** (usually free-float adjusted): bigger companies weigh more — S&P 500, Euro Stoxx 50, MSCI World, and Italy’s **FTSE MIB** (40 leading stocks on Borsa Italiana).\n- **Price-weighted**: high-priced stocks weigh more regardless of size — the Dow Jones Industrial Average.\n- **Equal-weighted**: every stock has the same weight.\n\n**Price indices** ignore dividends; **total return indices** reinvest them. Bond indices (e.g. Bloomberg Global Aggregate) are weighted by amount outstanding.',
          "Un indice segue un paniere di titoli. Il metodo di ponderazione conta:\n- **Ponderato per capitalizzazione** (di solito corretta per il flottante): le società più grandi pesano di più — S&P 500, Euro Stoxx 50, MSCI World e il **FTSE MIB** italiano (40 principali titoli di Borsa Italiana).\n- **Ponderato per prezzo**: i titoli con prezzo alto pesano di più a prescindere dalla dimensione — il Dow Jones Industrial Average.\n- **Equiponderato**: ogni titolo ha lo stesso peso.\n\nGli **indici di prezzo** ignorano i dividendi; gli **indici total return** li reinvestono. Gli indici obbligazionari (es. Bloomberg Global Aggregate) sono ponderati per ammontare in circolazione."
        )
      },
      {
        type: 'formula',
        formulas: [
          { name: t('Total return', 'Rendimento totale'), expr: 'Total return = (P₁ − P₀ + Dividends) / P₀ = price return + dividend yield' },
          { name: t('Cap-weighted index return', 'Rendimento di un indice ponderato per capitalizzazione'), expr: 'R_index = Σ wᵢ × Rᵢ, with wᵢ = Market capᵢ / Σ Market cap' }
        ]
      },
      {
        type: 'example',
        title: t('A three-stock index', 'Un indice di tre titoli'),
        body: t('Hypothetical cap-weighted index over one year:', 'Indice ipotetico ponderato per capitalizzazione su un anno:'),
        table: {
          headers: [t('Stock', 'Titolo'), t('Market cap (€bn)', 'Capitalizzazione (€mld)'), t('Weight', 'Peso'), t('Return', 'Rendimento'), t('Contribution', 'Contributo')],
          rows: [
            ['Alfa', '600', '60%', '+10%', '+6.0%'],
            ['Beta', '300', '30%', '−5%', '−1.5%'],
            ['Gamma', '100', '10%', '+20%', '+2.0%'],
            [t('Index', 'Indice'), '1,000', '100%', '', '+6.5%']
          ],
          totalRows: [3]
        }
      },
      {
        type: 'realworld',
        body: t(
          'Bankers use asset class performance to read the market: rising equity markets and tight credit spreads open the window for IPOs and bond issues; a sell-off closes it. In pitchbooks, the client’s share price is benchmarked against the relevant index (e.g. FTSE MIB or a sector index) to show relative performance.\n\nFor PE, real estate and infrastructure, the investor gives up liquidity in exchange for an expected **illiquidity premium**.',
          "I banker usano l’andamento delle classi di attivo per leggere il mercato: borse in rialzo e spread di credito stretti aprono la finestra per IPO ed emissioni obbligazionarie; un sell-off la chiude. Nei pitchbook il titolo del cliente si confronta con l’indice di riferimento (es. FTSE MIB o un indice settoriale) per mostrare la performance relativa.\n\nIn PE, immobili e infrastrutture l’investitore rinuncia alla liquidità in cambio di un atteso **premio per l’illiquidità**."
        )
      },
      { type: 'exercise', questionId: 'fm-ac-q1' },
      { type: 'exercise', questionId: 'fm-ac-q2' },
      { type: 'exercise', questionId: 'fm-ac-q3' },
      {
        type: 'interview',
        question: t('How is the S&P 500 different from the Dow Jones Industrial Average?', 'In cosa differisce l’S&P 500 dal Dow Jones Industrial Average?'),
        answer: t(
          'The S&P 500 covers about 500 large US companies weighted by float-adjusted market cap, so the largest companies drive it. The Dow has 30 stocks and is price-weighted, so a stock with a high share price moves it more regardless of company size. That is why the S&P 500 is the standard benchmark for the US market.',
          "L’S&P 500 comprende circa 500 grandi società USA ponderate per capitalizzazione corretta per il flottante, quindi lo guidano le società più grandi. Il Dow ha 30 titoli ed è ponderato per prezzo, quindi un titolo con prezzo alto lo muove di più a prescindere dalla dimensione. Per questo l’S&P 500 è il benchmark standard del mercato USA."
        )
      },
      {
        type: 'mistakes',
        items: [
          t('Comparing a price index with a total return fund: dividends can explain several points a year.', 'Confrontare un indice di prezzo con un fondo total return: i dividendi possono valere diversi punti l’anno.'),
          t('Averaging constituents’ returns equally for a cap-weighted index.', 'Fare la media semplice dei rendimenti per un indice ponderato per capitalizzazione.'),
          t('Ignoring liquidity when comparing listed and private asset returns.', 'Ignorare la liquidità nel confrontare rendimenti di attivi quotati e privati.')
        ]
      },
      {
        type: 'summary',
        items: [
          t('Asset classes: equities, fixed income, cash, FX, commodities, alternatives.', 'Classi di attivo: azioni, reddito fisso, liquidità, FX, materie prime, alternativi.'),
          t('Indices: cap-weighted (S&P 500, FTSE MIB), price-weighted (Dow), equal-weighted.', 'Indici: per capitalizzazione (S&P 500, FTSE MIB), per prezzo (Dow), equiponderati.'),
          t('Total return = price return + dividend yield.', 'Rendimento totale = rendimento di prezzo + dividend yield.')
        ]
      }
    ],
    questions: [
      {
        id: 'fm-ac-q1',
        kind: 'numeric',
        topic: 'asset-classes',
        difficulty: 1,
        objective: t('Compute a total return.', 'Calcolare un rendimento totale.'),
        prompt: t(
          'A share bought at €100.00 is worth €105.00 a year later and paid a €3.00 dividend. What is the total return (%)?',
          'Un’azione acquistata a €100,00 vale €105,00 un anno dopo e ha pagato un dividendo di €3,00. Qual è il rendimento totale (%)?'
        ),
        answer: 8,
        unit: '%',
        verify: { fn: 'sum', args: [5, 3] },
        explanation: t('Price return 5% + dividend yield 3% = 8%. Ignoring the dividend (5%) gives only the price return.', 'Rendimento di prezzo 5% + dividend yield 3% = 8%. Ignorare il dividendo (5%) dà solo il rendimento di prezzo.')
      },
      {
        id: 'fm-ac-q2',
        kind: 'numeric',
        topic: 'asset-classes',
        difficulty: 2,
        objective: t('Compute a cap-weighted index return.', 'Calcolare il rendimento di un indice ponderato per capitalizzazione.'),
        prompt: t(
          'An index holds Alfa (60% weight, +10%), Beta (30%, −5%) and Gamma (10%, +20%). What is the index return (%)?',
          'Un indice contiene Alfa (peso 60%, +10%), Beta (30%, −5%) e Gamma (10%, +20%). Qual è il rendimento dell’indice (%)?'
        ),
        answer: 6.5,
        unit: '%',
        verify: { fn: 'portfolioReturn', args: [[0.6, 0.3, 0.1], [10, -5, 20]] },
        explanation: t(
          '0.6 × 10 + 0.3 × (−5) + 0.1 × 20 = 6.0 − 1.5 + 2.0 = 6.5%. A simple average would give 8.3%, overweighting small Gamma.',
          '0,6 × 10 + 0,3 × (−5) + 0,1 × 20 = 6,0 − 1,5 + 2,0 = 6,5%. La media semplice darebbe 8,3%, sovrappesando la piccola Gamma.'
        )
      },
      {
        id: 'fm-ac-q3',
        kind: 'mcq',
        topic: 'asset-classes',
        difficulty: 1,
        objective: t('Recognise index weighting methods.', 'Riconoscere i metodi di ponderazione degli indici.'),
        prompt: t('Which index is price-weighted?', 'Quale indice è ponderato per prezzo?'),
        choices: [t('FTSE MIB', 'FTSE MIB'), t('S&P 500', 'S&P 500'), t('Dow Jones Industrial Average', 'Dow Jones Industrial Average'), t('MSCI World', 'MSCI World')],
        correct: 2,
        explanation: t('The Dow is price-weighted. FTSE MIB, S&P 500 and MSCI World are free-float market-cap weighted.', 'Il Dow è ponderato per prezzo. FTSE MIB, S&P 500 e MSCI World sono ponderati per capitalizzazione flottante.')
      },
      {
        id: 'fm-ac-q4',
        kind: 'multi',
        topic: 'asset-classes',
        difficulty: 1,
        objective: t('Identify illiquid asset classes.', 'Individuare le classi di attivo illiquide.'),
        prompt: t('Which are generally illiquid asset classes? Select all that apply.', 'Quali sono generalmente classi di attivo illiquide? Seleziona tutte le risposte corrette.'),
        choices: [
          t('Private equity funds', 'Fondi di private equity'),
          t('Large-cap listed equities', 'Azioni quotate large cap'),
          t('Direct real estate', 'Immobili detenuti direttamente'),
          t('German government bonds', 'Titoli di Stato tedeschi'),
          t('Unlisted infrastructure', 'Infrastrutture non quotate')
        ],
        correct: [0, 2, 4],
        explanation: t('PE, direct real estate and unlisted infrastructure cannot be sold quickly at fair value. Large-cap stocks and Bunds trade in deep, liquid markets.', 'PE, immobili diretti e infrastrutture non quotate non si vendono rapidamente al fair value. Azioni large cap e Bund trattano in mercati profondi e liquidi.')
      }
    ],
    flashcards: [
      { id: 'fc-fm-ac-1', topic: 'asset-classes', front: t('Total return formula?', 'Formula del rendimento totale?'), back: t('(P₁ − P₀ + Dividends) / P₀.', '(P₁ − P₀ + Dividendi) / P₀.') },
      { id: 'fc-fm-ac-2', topic: 'asset-classes', front: t('How many stocks in the FTSE MIB?', 'Quanti titoli nel FTSE MIB?'), back: t('40.', '40.') },
      { id: 'fc-fm-ac-3', topic: 'asset-classes', front: t('Price index vs total return index?', 'Indice di prezzo vs total return?'), back: t('Price index ignores dividends; total return index reinvests them.', 'L’indice di prezzo ignora i dividendi; il total return li reinveste.') },
      { id: 'fc-fm-ac-4', topic: 'asset-classes', front: t('What is free-float weighting?', 'Cos’è la ponderazione per flottante?'), back: t('Weights based only on shares available for trading, excluding strategic/locked holdings.', 'Pesi basati solo sulle azioni negoziabili, escluse le partecipazioni strategiche/vincolate.') }
    ],
    sources: [{ label: 'FTSE Russell — FTSE MIB Index', url: 'https://www.lseg.com/en/ftse-russell/indices/ftse-mib' }]
  },

  /* ============================ FM1 — fm-rates-inflation ============================ */
  {
    id: 'fm-rates-inflation',
    academyId: 'markets',
    moduleId: 'FM1',
    mode: 'deep',
    minutes: 14,
    difficulty: 2,
    reviewed: '2026-10',
    objective: t(
      'Explain central bank mandates and tools, compute real rates with the Fisher equation, and trace how interest rates feed into WACC and valuations.',
      'Spiegare mandati e strumenti delle banche centrali, calcolare i tassi reali con l’equazione di Fisher e ricostruire come i tassi si trasmettono a WACC e valutazioni.'
    ),
    screens: [
      {
        type: 'intuition',
        title: t('The price of money', 'Il prezzo del denaro'),
        body: t(
          'Interest rates are the **price of money over time**. Central banks set the shortest rate; markets set the rest of the curve based on expected policy, inflation and risk.\n\nEvery valuation in banking starts from a risk-free rate. When rates rise, future cash flows are worth less today, borrowing costs more, and deals get harder to finance. That is why bankers watch central banks closely.',
          "I tassi d’interesse sono il **prezzo del denaro nel tempo**. Le banche centrali fissano il tasso più breve; il mercato determina il resto della curva in base a politica attesa, inflazione e rischio.\n\nOgni valutazione in banca parte da un tasso privo di rischio. Quando i tassi salgono, i flussi futuri valgono meno oggi, indebitarsi costa di più e le operazioni sono più difficili da finanziare. Per questo i banker seguono da vicino le banche centrali."
        )
      },
      {
        type: 'technical',
        title: t('Mandates: Fed vs ECB', 'Mandati: Fed vs BCE'),
        body: t(
          '- **Federal Reserve**: a **dual mandate** from Congress — maximum employment and stable prices (the statute also cites moderate long-term interest rates). The FOMC targets **2% inflation** measured by the PCE price index over the longer run.\n- **ECB**: its primary objective under the EU Treaty (Art. 127 TFEU) is **price stability**. Since its 2021 strategy review — confirmed in the 2025 assessment — it aims for **2% inflation over the medium term**, a **symmetric** target: deviations above and below are equally undesirable.\n\nOther objectives (e.g. supporting EU economic policies) apply only without prejudice to price stability.',
          "- **Federal Reserve**: un **doppio mandato** dal Congresso — massima occupazione e stabilità dei prezzi (la legge cita anche tassi d’interesse a lungo termine moderati). Il FOMC punta a un’**inflazione del 2%** misurata dall’indice PCE nel lungo periodo.\n- **BCE**: l’obiettivo primario secondo il Trattato UE (art. 127 TFUE) è la **stabilità dei prezzi**. Dalla revisione strategica del 2021 — confermata nella valutazione del 2025 — punta a un’**inflazione del 2% nel medio termine**, obiettivo **simmetrico**: scostamenti verso l’alto e verso il basso sono ugualmente indesiderati.\n\nGli altri obiettivi (es. sostegno alle politiche economiche dell’UE) valgono solo senza pregiudizio per la stabilità dei prezzi."
        )
      },
      {
        type: 'technical',
        title: t('The toolkit', 'Gli strumenti'),
        body: t(
          '- **Policy rates**: the Fed sets a target range for the federal funds rate; the ECB steers money market rates mainly through its **deposit facility rate** (alongside the main refinancing and marginal lending rates).\n- **Forward guidance**: signalling the likely path of rates.\n- **Quantitative easing (QE)**: buying government and other bonds to push down long-term yields (ECB: APP, PEPP).\n- **Quantitative tightening (QT)**: shrinking the balance sheet by not reinvesting maturing bonds, adding upward pressure on long yields.\n\nHikes fight inflation by cooling demand; cuts and QE support growth.',
          "- **Tassi di policy**: la Fed fissa un intervallo obiettivo per il federal funds rate; la BCE orienta i tassi del mercato monetario soprattutto con il **tasso sui depositi** (insieme ai tassi sulle operazioni di rifinanziamento principali e sul rifinanziamento marginale).\n- **Forward guidance**: indicare il probabile percorso dei tassi.\n- **Quantitative easing (QE)**: acquisti di titoli di Stato e altre obbligazioni per comprimere i rendimenti a lungo (BCE: APP, PEPP).\n- **Quantitative tightening (QT)**: riduzione del bilancio non reinvestendo i titoli in scadenza, con pressione al rialzo sui rendimenti a lungo.\n\nI rialzi combattono l’inflazione raffreddando la domanda; tagli e QE sostengono la crescita."
        )
      },
      {
        type: 'formula',
        formulas: [
          {
            name: t('Fisher equation', 'Equazione di Fisher'),
            expr: '(1 + nominal) = (1 + real) × (1 + inflation)  →  real = (1 + nominal)/(1 + inflation) − 1',
            vars: [{ sym: 'real', desc: t('Real interest rate (≈ nominal − inflation for small values)', 'Tasso reale (≈ nominale − inflazione per valori piccoli)') }]
          },
          { name: t('Cost of equity (CAPM)', 'Costo dell’equity (CAPM)'), expr: 'Re = Rf + β × ERP' },
          { name: t('Perpetuity value', 'Valore di una rendita perpetua'), expr: 'Value = FCF₁ / (WACC − g)' }
        ],
        note: t(
          'Be consistent: discount nominal cash flows at nominal rates and real cash flows at real rates.',
          'Coerenza: si scontano flussi nominali a tassi nominali e flussi reali a tassi reali.'
        )
      },
      {
        type: 'example',
        title: t('Transmission to a valuation', 'La trasmissione a una valutazione'),
        body: t(
          'TargetCo: next year’s FCF €100m, growth 2%. If the risk-free rate rises by 1 point and pushes WACC from 8% to 9%:',
          'TargetCo: FCF dell’anno prossimo €100m, crescita 2%. Se il tasso privo di rischio sale di 1 punto e porta il WACC dall’8% al 9%:'
        ),
        table: {
          headers: [t('WACC', 'WACC'), t('Value = 100 / (WACC − 2%)', 'Valore = 100 / (WACC − 2%)'), t('Change', 'Variazione')],
          rows: [
            ['8%', '€1,667m', '—'],
            ['9%', '€1,429m', '−14%']
          ]
        }
      },
      {
        type: 'realworld',
        body: t(
          'After inflation surged in 2021–22, the Fed and ECB raised rates at the fastest pace in decades. Valuation multiples compressed (long-duration growth stocks most), LBO financing costs jumped and M&A and IPO volumes fell sharply.\n\nIn practice: the analyst updates the risk-free rate in WACC (e.g. 10-year Bund or BTP for Italian targets, depending on house view), refreshes cost of debt from current yields, and sensitises valuations to rates in the football field.',
          "Dopo l’impennata dell’inflazione nel 2021–22, Fed e BCE hanno alzato i tassi al ritmo più rapido da decenni. I multipli si sono compressi (soprattutto per i titoli growth a lunga duration), il costo dei finanziamenti LBO è salito e i volumi di M&A e IPO sono crollati.\n\nIn pratica: l’analyst aggiorna il tasso privo di rischio nel WACC (es. Bund o BTP a 10 anni per target italiani, a seconda della prassi della banca), aggiorna il costo del debito sui rendimenti correnti e fa sensitività delle valutazioni ai tassi nel football field."
        )
      },
      { type: 'exercise', questionId: 'fm-ri-q1' },
      { type: 'exercise', questionId: 'fm-ri-q2' },
      { type: 'exercise', questionId: 'fm-ri-q3' },
      { type: 'exercise', questionId: 'fm-ri-q4' },
      {
        type: 'interview',
        question: t('How do higher interest rates affect M&A and valuations?', 'Come influiscono tassi più alti su M&A e valutazioni?'),
        answer: t(
          'Higher rates raise the risk-free rate and usually the cost of debt, so WACC rises and DCF values fall — most for companies whose value sits far in the future. Multiples compress. For LBOs, higher interest costs reduce debt capacity and returns, so sponsors pay less. Buyers and sellers then disagree on price, volumes fall, and structures like earn-outs, stock consideration or seller financing become more common.',
          "Tassi più alti aumentano il tasso privo di rischio e di solito il costo del debito, quindi il WACC sale e i valori DCF scendono — soprattutto per le società il cui valore è lontano nel tempo. I multipli si comprimono. Negli LBO, interessi più alti riducono capacità di debito e rendimenti, quindi gli sponsor pagano meno. Acquirenti e venditori divergono sul prezzo, i volumi calano e diventano più comuni strutture come earn-out, pagamento in azioni o vendor loan."
        )
      },
      {
        type: 'mistakes',
        items: [
          t('Saying the ECB has a dual mandate like the Fed: its primary objective is price stability.', 'Dire che la BCE ha un doppio mandato come la Fed: il suo obiettivo primario è la stabilità dei prezzi.'),
          t('Describing the ECB target as "below 2%": since 2021 it is a symmetric 2% medium-term target.', 'Descrivere l’obiettivo BCE come "sotto il 2%": dal 2021 è un obiettivo simmetrico del 2% nel medio termine.'),
          t('Mixing real cash flows with nominal discount rates.', 'Mescolare flussi reali con tassi di sconto nominali.')
        ]
      },
      {
        type: 'summary',
        items: [
          t('Fed: dual mandate (max employment + stable prices), 2% PCE goal.', 'Fed: doppio mandato (massima occupazione + prezzi stabili), obiettivo 2% PCE.'),
          t('ECB: price stability, symmetric 2% over the medium term.', 'BCE: stabilità dei prezzi, 2% simmetrico nel medio termine.'),
          t('Tools: policy rates, forward guidance, QE/QT.', 'Strumenti: tassi di policy, forward guidance, QE/QT.'),
          t('Real rate = (1 + nominal)/(1 + inflation) − 1; higher rates → higher WACC → lower valuations.', 'Tasso reale = (1 + nominale)/(1 + inflazione) − 1; tassi più alti → WACC più alto → valutazioni più basse.')
        ]
      }
    ],
    questions: [
      {
        id: 'fm-ri-q1',
        kind: 'numeric',
        topic: 'interest-rates',
        difficulty: 1,
        objective: t('Apply the Fisher equation.', 'Applicare l’equazione di Fisher.'),
        prompt: t(
          'Nominal rate 5%, expected inflation 2%. What is the exact real rate? Answer as a decimal (e.g. 0.0300 for 3%).',
          'Tasso nominale 5%, inflazione attesa 2%. Qual è il tasso reale esatto? Rispondi in forma decimale (es. 0,0300 per 3%).'
        ),
        answer: 0.0294,
        tolerance: { abs: 0.0002 },
        verify: { fn: 'realRate', args: [0.05, 0.02] },
        explanation: t('1.05 / 1.02 − 1 = 2.94%. The shortcut 5% − 2% = 3% slightly overstates it.', '1,05 / 1,02 − 1 = 2,94%. La scorciatoia 5% − 2% = 3% lo sovrastima leggermente.')
      },
      {
        id: 'fm-ri-q2',
        kind: 'numeric',
        topic: 'interest-rates',
        difficulty: 2,
        objective: t('Recognise negative real rates.', 'Riconoscere tassi reali negativi.'),
        prompt: t(
          'A deposit pays 3.0% while inflation is 3.5%. What is the real return? Answer as a decimal.',
          'Un deposito rende il 3,0% mentre l’inflazione è al 3,5%. Qual è il rendimento reale? Rispondi in forma decimale.'
        ),
        answer: -0.0048,
        tolerance: { abs: 0.0002 },
        verify: { fn: 'realRate', args: [0.03, 0.035] },
        explanation: t('1.03 / 1.035 − 1 = −0.48%: purchasing power falls even though the nominal return is positive.', '1,03 / 1,035 − 1 = −0,48%: il potere d’acquisto cala anche se il rendimento nominale è positivo.')
      },
      {
        id: 'fm-ri-q3',
        kind: 'numeric',
        topic: 'interest-rates',
        difficulty: 2,
        objective: t('Trace a rate rise into the cost of equity.', 'Trasmettere un rialzo dei tassi al costo dell’equity.'),
        prompt: t(
          'The risk-free rate rises from 3.0% to 4.0%. Beta 1.1, equity risk premium 5.5% (unchanged). What is the new cost of equity (%)?',
          'Il tasso privo di rischio sale dal 3,0% al 4,0%. Beta 1,1, premio per il rischio azionario 5,5% (invariato). Qual è il nuovo costo dell’equity (%)?'
        ),
        answer: 10.05,
        unit: '%',
        tolerance: { abs: 0.02 },
        verify: { fn: 'capm', args: [4, 1.1, 5.5] },
        explanation: t('4.0% + 1.1 × 5.5% = 10.05%, up one full point from 9.05%. With the ERP unchanged, the cost of equity rises one-for-one with Rf.', '4,0% + 1,1 × 5,5% = 10,05%, un punto pieno in più rispetto al 9,05%. Con l’ERP invariato, il costo dell’equity sale di pari passo con Rf.')
      },
      {
        id: 'fm-ri-q4',
        kind: 'numeric',
        topic: 'interest-rates',
        difficulty: 2,
        objective: t('Quantify valuation sensitivity to discount rates.', 'Quantificare la sensitività della valutazione al tasso di sconto.'),
        prompt: t(
          'Next year’s FCF is €100m, growing 2% forever. What is the value (€m) if WACC is 9%?',
          'Il FCF dell’anno prossimo è €100m, con crescita perpetua del 2%. Qual è il valore (€m) con un WACC del 9%?'
        ),
        answer: 1428.57,
        unit: '€m',
        tolerance: { abs: 0.5 },
        verify: { fn: 'pvGrowingPerpetuity', args: [100, 0.09, 0.02] },
        explanation: t('100 / (9% − 2%) = €1,428.6m, versus €1,666.7m at 8% — a 1-point WACC increase cuts value by ~14%.', '100 / (9% − 2%) = €1.428,6m, contro €1.666,7m all’8% — un punto di WACC in più taglia il valore di ~14%.')
      },
      {
        id: 'fm-ri-q5',
        kind: 'mcq',
        topic: 'monetary-policy',
        difficulty: 1,
        objective: t('Know the ECB’s mandate and target.', 'Conoscere mandato e obiettivo della BCE.'),
        prompt: t('Which best describes the ECB’s monetary policy objective?', 'Quale descrizione corrisponde meglio all’obiettivo di politica monetaria della BCE?'),
        choices: [
          t('Maximum employment and stable prices, equally weighted', 'Massima occupazione e prezzi stabili, con pari peso'),
          t('Price stability, defined as inflation below but close to 2%', 'Stabilità dei prezzi, definita come inflazione inferiore ma prossima al 2%'),
          t('Price stability, with a symmetric 2% inflation target over the medium term', 'Stabilità dei prezzi, con un obiettivo simmetrico di inflazione del 2% nel medio termine'),
          t('A fixed exchange rate against the US dollar', 'Un cambio fisso contro il dollaro USA')
        ],
        correct: 2,
        explanation: t(
          'Since the 2021 strategy review (confirmed in 2025) the ECB targets a symmetric 2% over the medium term. "Below but close to 2%" was the pre-2021 formulation; the dual mandate describes the Fed.',
          'Dalla revisione strategica del 2021 (confermata nel 2025) la BCE punta a un 2% simmetrico nel medio termine. "Inferiore ma prossima al 2%" era la formulazione pre-2021; il doppio mandato è quello della Fed.'
        )
      }
    ],
    flashcards: [
      { id: 'fc-fm-ri-1', topic: 'monetary-policy', front: t('The Fed’s dual mandate?', 'Il doppio mandato della Fed?'), back: t('Maximum employment and stable prices (2% PCE inflation over the longer run).', 'Massima occupazione e stabilità dei prezzi (inflazione PCE al 2% nel lungo periodo).') },
      { id: 'fc-fm-ri-2', topic: 'monetary-policy', front: t('ECB inflation target?', 'Obiettivo di inflazione della BCE?'), back: t('2% over the medium term, symmetric (2021 strategy, confirmed 2025).', '2% nel medio termine, simmetrico (strategia 2021, confermata nel 2025).') },
      { id: 'fc-fm-ri-3', topic: 'interest-rates', front: t('Fisher equation?', 'Equazione di Fisher?'), back: t('(1 + nominal) = (1 + real)(1 + inflation).', '(1 + nominale) = (1 + reale)(1 + inflazione).') },
      { id: 'fc-fm-ri-4', topic: 'monetary-policy', front: t('QE vs QT?', 'QE vs QT?'), back: t('QE: central bank buys bonds, lowering long yields. QT: balance sheet shrinks (no reinvestment), pushing yields up.', 'QE: la banca centrale acquista titoli, abbassando i rendimenti a lungo. QT: il bilancio si riduce (nessun reinvestimento), spingendo i rendimenti al rialzo.') }
    ],
    sources: [
      { label: 'ECB — Monetary policy strategy statement (2025 assessment)', url: 'https://www.ecb.europa.eu/mopo/strategy/strategy-review/ecb.strategyreview202506_strategy_statement.en.html' },
      { label: 'ECB press release, 30 June 2025 — Governing Council updates its monetary policy strategy', url: 'https://www.ecb.europa.eu/press/pr/date/2025/html/ecb.pr250630~aabf988af8.en.html' },
      { label: 'Federal Reserve — Statement on Longer-Run Goals and Monetary Policy Strategy', url: 'https://www.federalreserve.gov/monetarypolicy/review-of-monetary-policy-strategy-tools-and-communications.htm' }
    ]
  },

  /* ============================ FM1 — fm-fx-commodities ============================ */
  {
    id: 'fm-fx-commodities',
    academyId: 'markets',
    moduleId: 'FM1',
    mode: 'deep',
    minutes: 11,
    difficulty: 2,
    reviewed: '2026-10',
    objective: t(
      'Read FX quotes, compute a forward rate with covered interest parity, quantify FX risk in cross-border deals, and explain contango and backwardation in commodities.',
      'Leggere le quotazioni FX, calcolare un cambio a termine con la parità coperta dei tassi, quantificare il rischio di cambio nelle operazioni cross-border e spiegare contango e backwardation nelle materie prime.'
    ),
    screens: [
      {
        type: 'intuition',
        title: t('Prices of currencies and raw materials', 'I prezzi di valute e materie prime'),
        body: t(
          'An exchange rate is just the price of one currency in another. For a European buyer of a US company, the euro price of the deal moves every second with EUR/USD — before anything else changes.\n\nCommodities (oil, gas, metals, agriculture) matter to bankers because they drive the earnings of energy, industrial and consumer companies, and because their futures curves tell you what the market expects.',
          "Un tasso di cambio è semplicemente il prezzo di una valuta in un’altra. Per un acquirente europeo di una società americana, il prezzo in euro dell’operazione si muove ogni secondo con l’EUR/USD — prima che cambi qualsiasi altra cosa.\n\nLe materie prime (petrolio, gas, metalli, agricole) contano per i banker perché determinano gli utili di società energetiche, industriali e consumer, e perché le loro curve dei future dicono cosa si attende il mercato."
        )
      },
      {
        type: 'technical',
        title: t('Reading FX and interest rate parity', 'Leggere l’FX e la parità dei tassi'),
        body: t(
          '- **EUR/USD = 1.10** means 1 euro (base currency) costs 1.10 dollars (quote currency).\n- If EUR/USD rises, the euro **strengthens**.\n- **Covered interest parity (CIP)**: a forward rate must offset the interest differential, otherwise a riskless arbitrage exists. The currency with the **higher interest rate trades at a forward discount**.\n- **Uncovered interest parity** is an expectation, not a rule — high-yielding currencies often do not depreciate as UIP predicts (the basis of the "carry trade").',
          "- **EUR/USD = 1,10** significa che 1 euro (valuta base) costa 1,10 dollari (valuta di quotazione).\n- Se l’EUR/USD sale, l’euro si **rafforza**.\n- **Parità coperta dei tassi (CIP)**: il cambio a termine deve compensare il differenziale dei tassi, altrimenti esiste un arbitraggio privo di rischio. La valuta con il **tasso più alto tratta a sconto a termine**.\n- La **parità scoperta** è un’aspettativa, non una regola — le valute ad alto rendimento spesso non si deprezzano quanto previsto (la base del \"carry trade\")."
        )
      },
      {
        type: 'formula',
        formulas: [
          {
            name: t('Covered interest parity (annual compounding)', 'Parità coperta dei tassi (capitalizzazione annuale)'),
            expr: 'F = S × (1 + r_quote)^T / (1 + r_base)^T',
            vars: [
              { sym: 'S', desc: t('Spot rate (quote per 1 base)', 'Cambio spot (unità di quotazione per 1 base)') },
              { sym: 'r_quote / r_base', desc: t('Interest rates of quote and base currencies', 'Tassi delle valute di quotazione e base') }
            ]
          },
          { name: t('Converting consideration', 'Conversione del corrispettivo'), expr: 'EUR cost = USD price / EUR/USD rate' }
        ]
      },
      {
        type: 'example',
        title: t('A European buyer of a US target', 'Un acquirente europeo di un target americano'),
        body: t(
          'Alfa S.p.A. agrees to buy a US company for **$500m**, closing in one year. Spot EUR/USD 1.10; 1-year USD rate 4%, EUR rate 2%.',
          'Alfa S.p.A. si accorda per acquistare una società americana per **$500m**, closing tra un anno. EUR/USD spot 1,10; tasso USD a 1 anno 4%, tasso EUR 2%.'
        ),
        table: {
          headers: [t('Scenario', 'Scenario'), t('EUR/USD', 'EUR/USD'), t('EUR cost', 'Costo in EUR')],
          rows: [
            [t('At today’s spot', 'Allo spot di oggi'), '1.1000', '€454.5m'],
            [t('Hedged with 1-year forward', 'Coperto con forward a 1 anno'), '1.1216', '€445.8m'],
            [t('Unhedged, euro weakens', 'Non coperto, l’euro si indebolisce'), '1.0500', '€476.2m']
          ]
        }
      },
      {
        type: 'technical',
        title: t('Commodities: curves and benchmarks', 'Materie prime: curve e benchmark'),
        body: t(
          '- Benchmarks: **Brent** and **WTI** (crude oil), **Dutch TTF** (European natural gas), LME metals, gold.\n- **Contango**: futures prices above spot — typical when storage costs and financing costs dominate.\n- **Backwardation**: futures below spot — typical when supply is tight and holding the physical commodity has a **convenience yield**.\n- Producers (miners, oil companies) hedge by selling forward; consumers (airlines, utilities) hedge by buying forward.',
          "- Benchmark: **Brent** e **WTI** (greggio), **TTF olandese** (gas naturale europeo), metalli LME, oro.\n- **Contango**: prezzi future sopra lo spot — tipico quando dominano costi di stoccaggio e di finanziamento.\n- **Backwardation**: future sotto lo spot — tipico quando l’offerta è scarsa e detenere la merce fisica ha un **convenience yield**.\n- I produttori (minerari, petroliferi) si coprono vendendo a termine; i consumatori (compagnie aeree, utility) acquistando a termine."
        )
      },
      {
        type: 'realworld',
        body: t(
          'In cross-border M&A, FX affects: the **consideration** (a buyer paying in a foreign currency between signing and closing), **valuation** (target earnings translated into the buyer’s currency), and **financing** (matching debt currency to the target’s cash flows as a natural hedge).\n\nThe 2022 European gas crisis, when TTF prices spiked, showed how commodity moves can wipe out the margins of energy-intensive companies and reshape valuations — something analysts must reflect in sector models.',
          "Nell’M&A cross-border l’FX incide su: il **corrispettivo** (un acquirente che paga in valuta estera tra signing e closing), la **valutazione** (utili del target convertiti nella valuta dell’acquirente) e il **finanziamento** (allineare la valuta del debito ai flussi del target come copertura naturale).\n\nLa crisi del gas europeo del 2022, con l’impennata del TTF, ha mostrato come i movimenti delle materie prime possano azzerare i margini delle imprese energivore e ridisegnare le valutazioni — da riflettere nei modelli settoriali."
        )
      },
      { type: 'exercise', questionId: 'fm-fx-q1' },
      { type: 'exercise', questionId: 'fm-fx-q2' },
      { type: 'exercise', questionId: 'fm-fx-q3' },
      {
        type: 'interview',
        question: t('Why does the USD trade at a forward discount to the EUR when US rates are higher?', 'Perché il dollaro tratta a sconto a termine rispetto all’euro quando i tassi USA sono più alti?'),
        answer: t(
          'Because of covered interest parity. If you could earn the higher USD rate and also lock in the same exchange rate forward, you would earn a riskless profit. So the forward must price the dollar cheaper than spot — EUR/USD forward above spot — exactly offsetting the interest differential. The forward is not a forecast; it reflects the rate differential.',
          "Per la parità coperta dei tassi. Se si potesse guadagnare il tasso USD più alto e bloccare lo stesso cambio a termine, si otterrebbe un profitto privo di rischio. Quindi il forward deve prezzare il dollaro meno dello spot — EUR/USD a termine sopra lo spot — compensando esattamente il differenziale dei tassi. Il forward non è una previsione; riflette il differenziale."
        )
      },
      {
        type: 'mistakes',
        items: [
          t('Multiplying instead of dividing when converting USD into EUR with an EUR/USD quote.', 'Moltiplicare invece di dividere quando si convertono USD in EUR con una quotazione EUR/USD.'),
          t('Treating the forward rate as the market’s forecast of the future spot.', 'Considerare il cambio a termine come la previsione di mercato dello spot futuro.'),
          t('Confusing contango (futures > spot) with backwardation (futures < spot).', 'Confondere contango (future > spot) e backwardation (future < spot).')
        ]
      },
      {
        type: 'summary',
        items: [
          t('EUR/USD = USD per 1 EUR; up = stronger euro.', 'EUR/USD = USD per 1 EUR; in salita = euro più forte.'),
          t('CIP: F = S × (1 + r_quote)/(1 + r_base); higher-rate currency at a forward discount.', 'CIP: F = S × (1 + r_quote)/(1 + r_base); la valuta con tasso più alto tratta a sconto a termine.'),
          t('FX hits deal consideration, valuation and financing.', 'L’FX incide su corrispettivo, valutazione e finanziamento.'),
          t('Contango: futures > spot; backwardation: futures < spot.', 'Contango: future > spot; backwardation: future < spot.')
        ]
      }
    ],
    questions: [
      {
        id: 'fm-fx-q1',
        kind: 'numeric',
        topic: 'fx',
        difficulty: 2,
        objective: t('Compute an FX forward with covered interest parity.', 'Calcolare un cambio a termine con la parità coperta dei tassi.'),
        prompt: t(
          'Spot EUR/USD is 1.1000. 1-year rates: USD 4%, EUR 2% (annual). What is the 1-year forward EUR/USD?',
          'L’EUR/USD spot è 1,1000. Tassi a 1 anno: USD 4%, EUR 2% (annuali). Qual è il cambio EUR/USD a termine a 1 anno?'
        ),
        answer: 1.1216,
        tolerance: { abs: 0.0005 },
        verify: { fn: 'ratio', args: [1.144, 1.02] },
        steps: [t('F = 1.10 × 1.04 / 1.02 = 1.144 / 1.02 = 1.1216', 'F = 1,10 × 1,04 / 1,02 = 1,144 / 1,02 = 1,1216')],
        explanation: t(
          'USD is the quote currency with the higher rate, so more dollars per euro forward: 1.1216. Inverting the rates (1.10 × 1.02 / 1.04 = 1.0788) is the classic error.',
          'Il dollaro è la valuta di quotazione con il tasso più alto, quindi a termine servono più dollari per euro: 1,1216. Invertire i tassi (1,10 × 1,02 / 1,04 = 1,0788) è l’errore classico.'
        )
      },
      {
        id: 'fm-fx-q2',
        kind: 'numeric',
        topic: 'fx',
        difficulty: 1,
        objective: t('Convert deal consideration between currencies.', 'Convertire il corrispettivo tra valute.'),
        prompt: t(
          'A US target costs $500m. At EUR/USD 1.10, what is the cost in euros (€m)?',
          'Un target americano costa $500m. Con EUR/USD a 1,10, qual è il costo in euro (€m)?'
        ),
        answer: 454.55,
        unit: '€m',
        tolerance: { abs: 0.1 },
        verify: { fn: 'ratio', args: [500, 1.1] },
        explanation: t('Divide USD by USD-per-EUR: 500 / 1.10 = €454.5m. Multiplying (€550m) would be wrong.', 'Si dividono i USD per i USD per euro: 500 / 1,10 = €454,5m. Moltiplicare (€550m) sarebbe sbagliato.')
      },
      {
        id: 'fm-fx-q3',
        kind: 'numeric',
        topic: 'fx',
        difficulty: 2,
        objective: t('Quantify unhedged FX risk on a deal.', 'Quantificare il rischio di cambio non coperto in un’operazione.'),
        prompt: t(
          'Unhedged, EUR/USD falls from 1.10 to 1.05 before closing. By how much does the euro cost of the $500m deal increase (€m)? (€454.55m at 1.10; €476.19m at 1.05)',
          'Senza copertura, l’EUR/USD scende da 1,10 a 1,05 prima del closing. Di quanto aumenta il costo in euro dell’operazione da $500m (€m)? (€454,55m a 1,10; €476,19m a 1,05)'
        ),
        answer: 21.65,
        unit: '€m',
        tolerance: { abs: 0.1 },
        verify: { fn: 'diff', args: [476.19, 454.55] },
        explanation: t('500/1.05 − 500/1.10 = 476.19 − 454.55 = €21.6m (+4.8%) — why buyers hedge signed deals.', '500/1,05 − 500/1,10 = 476,19 − 454,55 = €21,6m (+4,8%) — ecco perché gli acquirenti coprono le operazioni firmate.')
      },
      {
        id: 'fm-fx-q4',
        kind: 'mcq',
        topic: 'commodities',
        difficulty: 1,
        objective: t('Define contango.', 'Definire il contango.'),
        prompt: t('Brent spot is $80 and the 12-month future is $84. The curve is in…', 'Il Brent spot è a $80 e il future a 12 mesi a $84. La curva è in…'),
        choices: [t('Backwardation', 'Backwardation'), t('Contango', 'Contango'), t('Parity', 'Parità'), t('Inversion caused by convenience yield', 'Inversione causata dal convenience yield')],
        correct: 1,
        explanation: t('Futures above spot = contango, consistent with storage and financing costs. A high convenience yield would cause backwardation.', 'Future sopra lo spot = contango, coerente con costi di stoccaggio e finanziamento. Un convenience yield elevato causerebbe backwardation.')
      }
    ],
    flashcards: [
      { id: 'fc-fm-fx-1', topic: 'fx', front: t('EUR/USD 1.10 means?', 'EUR/USD 1,10 significa?'), back: t('1 euro = 1.10 US dollars.', '1 euro = 1,10 dollari USA.') },
      { id: 'fc-fm-fx-2', topic: 'fx', front: t('Covered interest parity?', 'Parità coperta dei tassi?'), back: t('F = S × (1 + r_quote)/(1 + r_base): forward offsets the rate differential.', 'F = S × (1 + r_quote)/(1 + r_base): il forward compensa il differenziale dei tassi.') },
      { id: 'fc-fm-fx-3', topic: 'commodities', front: t('Backwardation?', 'Backwardation?'), back: t('Futures below spot, often due to tight supply and a high convenience yield.', 'Future sotto lo spot, spesso per offerta scarsa e convenience yield elevato.') },
      { id: 'fc-fm-fx-4', topic: 'fx', front: t('Three ways FX affects cross-border M&A?', 'Tre modi in cui l’FX incide sull’M&A cross-border?'), back: t('Consideration (signing → closing), valuation (translated earnings), financing (currency matching).', 'Corrispettivo (signing → closing), valutazione (utili convertiti), finanziamento (allineamento valutario).') }
    ]
  },

  /* ============================ FM2 — fm-risk-return ============================ */
  {
    id: 'fm-risk-return',
    academyId: 'markets',
    moduleId: 'FM2',
    mode: 'deep',
    minutes: 12,
    difficulty: 2,
    reviewed: '2026-10',
    objective: t(
      'Compute portfolio expected return, two-asset volatility and the Sharpe ratio, and explain why diversification reduces risk.',
      'Calcolare rendimento atteso di portafoglio, volatilità di due attivi e indice di Sharpe, e spiegare perché la diversificazione riduce il rischio.'
    ),
    screens: [
      {
        type: 'intuition',
        title: t('The only free lunch', 'L’unico pasto gratis'),
        body: t(
          'Higher expected return comes with higher risk — but not all risk is rewarded. When you combine assets that do not move perfectly together, their ups and downs partly cancel out. The portfolio’s return is the average of the returns, but its risk is **less than** the average of the risks.\n\nThat is diversification — often called the only free lunch in finance.',
          "Un rendimento atteso più alto comporta più rischio — ma non tutto il rischio è remunerato. Combinando attivi che non si muovono perfettamente insieme, i loro rialzi e ribassi si compensano in parte. Il rendimento del portafoglio è la media dei rendimenti, ma il rischio è **inferiore** alla media dei rischi.\n\nÈ la diversificazione — spesso definita l’unico pasto gratis della finanza."
        )
      },
      {
        type: 'technical',
        title: t('Measuring risk', 'Misurare il rischio'),
        body: t(
          '- **Volatility (σ)**: standard deviation of returns, usually annualised.\n- **Correlation (ρ)**: from −1 to +1; how two assets co-move. The lower the correlation, the bigger the diversification benefit.\n- **Systematic risk**: market-wide (rates, recessions) — cannot be diversified away and is rewarded with a risk premium.\n- **Idiosyncratic risk**: company-specific (a failed product, a lawsuit) — largely eliminated in a well-diversified portfolio, so not rewarded.\n- **Sharpe ratio**: excess return per unit of total volatility — risk-adjusted performance.',
          "- **Volatilità (σ)**: deviazione standard dei rendimenti, di solito annualizzata.\n- **Correlazione (ρ)**: da −1 a +1; quanto due attivi si muovono insieme. Più bassa è la correlazione, maggiore il beneficio della diversificazione.\n- **Rischio sistematico**: di mercato (tassi, recessioni) — non diversificabile e remunerato con un premio per il rischio.\n- **Rischio idiosincratico**: specifico della società (un prodotto fallito, una causa) — in gran parte eliminato in un portafoglio ben diversificato, quindi non remunerato.\n- **Indice di Sharpe**: extra-rendimento per unità di volatilità totale — performance corretta per il rischio."
        )
      },
      {
        type: 'formula',
        formulas: [
          { name: t('Portfolio expected return', 'Rendimento atteso di portafoglio'), expr: 'E(Rp) = Σ wᵢ × E(Rᵢ)' },
          { name: t('Two-asset volatility', 'Volatilità di due attivi'), expr: 'σp = √(w₁²σ₁² + w₂²σ₂² + 2w₁w₂σ₁σ₂ρ)' },
          { name: t('Sharpe ratio', 'Indice di Sharpe'), expr: 'Sharpe = (Rp − Rf) / σp' }
        ],
        note: t('With ρ = 1 there is no diversification: σp is simply the weighted average of the volatilities.', 'Con ρ = 1 non c’è diversificazione: σp è semplicemente la media ponderata delle volatilità.')
      },
      {
        type: 'example',
        title: t('60% Fund A + 40% Fund B', '60% Fondo A + 40% Fondo B'),
        body: t('A: expected return 8%, volatility 20%. B: 12%, 30%. Risk-free 3%.', 'A: rendimento atteso 8%, volatilità 20%. B: 12%, 30%. Tasso privo di rischio 3%.'),
        table: {
          headers: [t('Correlation', 'Correlazione'), t('E(Rp)', 'E(Rp)'), t('σp', 'σp'), t('Sharpe', 'Sharpe')],
          rows: [
            ['1.0', '9.6%', '24.0%', '0.28'],
            ['0.2', '9.6%', '18.6%', '0.36'],
            ['−0.5', '9.6%', '12.0%', '0.55']
          ]
        }
      },
      {
        type: 'realworld',
        body: t(
          'Diversification is why investors pay less for conglomerates: shareholders can diversify on their own, so they will not pay a premium for a company that does it for them — one reason for the "conglomerate discount" and for spin-offs.\n\nIn M&A, "diversification" alone is a weak deal rationale; interviewers expect you to say so.',
          "La diversificazione spiega perché gli investitori pagano meno i conglomerati: gli azionisti possono diversificare da soli, quindi non pagano un premio a una società che lo fa per loro — una delle ragioni dello \"sconto da conglomerato\" e degli spin-off.\n\nIn M&A la sola \"diversificazione\" è una motivazione debole; ai colloqui ci si aspetta che tu lo dica."
        )
      },
      { type: 'exercise', questionId: 'fm-rr-q1' },
      { type: 'exercise', questionId: 'fm-rr-q2' },
      { type: 'exercise', questionId: 'fm-rr-q3' },
      {
        type: 'interview',
        question: t('Is diversification a good reason for an acquisition?', 'La diversificazione è una buona ragione per un’acquisizione?'),
        answer: t(
          'Generally no. Shareholders can diversify their own portfolios cheaply by buying other stocks, so they will not pay a control premium for the company to do it for them. Diversification only creates value if it comes with real synergies, better capital allocation or lower financing costs that investors cannot replicate. Otherwise it risks a conglomerate discount.',
          "In generale no. Gli azionisti possono diversificare da soli a basso costo acquistando altri titoli, quindi non pagheranno un premio di controllo perché lo faccia la società. La diversificazione crea valore solo se accompagnata da sinergie reali, migliore allocazione del capitale o costi di finanziamento più bassi non replicabili dagli investitori. Altrimenti rischia uno sconto da conglomerato."
        )
      },
      {
        type: 'mistakes',
        items: [
          t('Averaging volatilities to get portfolio volatility: that only holds with correlation = 1.', 'Fare la media delle volatilità per ottenere quella del portafoglio: vale solo con correlazione = 1.'),
          t('Expecting to be paid for idiosyncratic risk.', 'Aspettarsi di essere remunerati per il rischio idiosincratico.'),
          t('Comparing funds by return alone, ignoring risk (use the Sharpe ratio).', 'Confrontare i fondi solo per rendimento, ignorando il rischio (usa lo Sharpe).')
        ]
      },
      {
        type: 'summary',
        items: [
          t('E(Rp) = weighted average of expected returns.', 'E(Rp) = media ponderata dei rendimenti attesi.'),
          t('σp < weighted average of σ when ρ < 1 → diversification.', 'σp < media ponderata delle σ quando ρ < 1 → diversificazione.'),
          t('Only systematic risk is rewarded.', 'Solo il rischio sistematico è remunerato.'),
          t('Sharpe = (Rp − Rf) / σp.', 'Sharpe = (Rp − Rf) / σp.')
        ]
      }
    ],
    questions: [
      {
        id: 'fm-rr-q1',
        kind: 'numeric',
        topic: 'risk-return',
        difficulty: 1,
        objective: t('Compute portfolio expected return.', 'Calcolare il rendimento atteso di portafoglio.'),
        prompt: t('60% in A (expected 8%) and 40% in B (expected 12%). Portfolio expected return (%)?', '60% in A (atteso 8%) e 40% in B (atteso 12%). Rendimento atteso del portafoglio (%)?'),
        answer: 9.6,
        unit: '%',
        verify: { fn: 'portfolioReturn', args: [[0.6, 0.4], [8, 12]] },
        explanation: t('0.6 × 8 + 0.4 × 12 = 4.8 + 4.8 = 9.6%. Expected returns always average linearly.', '0,6 × 8 + 0,4 × 12 = 4,8 + 4,8 = 9,6%. I rendimenti attesi si mediano sempre linearmente.')
      },
      {
        id: 'fm-rr-q2',
        kind: 'numeric',
        topic: 'risk-return',
        difficulty: 3,
        objective: t('Compute two-asset portfolio volatility.', 'Calcolare la volatilità di un portafoglio di due attivi.'),
        prompt: t(
          'Same portfolio: σA = 20%, σB = 30%, correlation 0.2. What is portfolio volatility (%)?',
          'Stesso portafoglio: σA = 20%, σB = 30%, correlazione 0,2. Qual è la volatilità del portafoglio (%)?'
        ),
        answer: 18.59,
        unit: '%',
        tolerance: { abs: 0.05 },
        verify: { fn: 'twoAssetVolatility', args: [0.6, 20, 30, 0.2] },
        steps: [
          t('w₁²σ₁² = 0.36 × 400 = 144; w₂²σ₂² = 0.16 × 900 = 144', 'w₁²σ₁² = 0,36 × 400 = 144; w₂²σ₂² = 0,16 × 900 = 144'),
          t('2w₁w₂σ₁σ₂ρ = 2 × 0.6 × 0.4 × 20 × 30 × 0.2 = 57.6', '2w₁w₂σ₁σ₂ρ = 2 × 0,6 × 0,4 × 20 × 30 × 0,2 = 57,6'),
          t('σp = √345.6 = 18.59%', 'σp = √345,6 = 18,59%')
        ],
        explanation: t('18.6% versus 24.0% (the weighted average) — the 5.4-point gap is the diversification benefit.', '18,6% contro 24,0% (la media ponderata) — la differenza di 5,4 punti è il beneficio della diversificazione.')
      },
      {
        id: 'fm-rr-q3',
        kind: 'numeric',
        topic: 'risk-return',
        difficulty: 2,
        objective: t('Compute a Sharpe ratio.', 'Calcolare un indice di Sharpe.'),
        prompt: t('A fund returns 10% with 14% volatility; the risk-free rate is 3%. What is its Sharpe ratio?', 'Un fondo rende il 10% con volatilità del 14%; il tasso privo di rischio è il 3%. Qual è il suo indice di Sharpe?'),
        answer: 0.5,
        tolerance: { abs: 0.01 },
        verify: { fn: 'sharpeRatio', args: [10, 3, 14] },
        explanation: t('(10 − 3) / 14 = 0.50. Forgetting to subtract the risk-free rate (10/14 = 0.71) overstates it.', '(10 − 3) / 14 = 0,50. Dimenticare di sottrarre il tasso privo di rischio (10/14 = 0,71) lo sovrastima.')
      },
      {
        id: 'fm-rr-q4',
        kind: 'multi',
        topic: 'risk-return',
        difficulty: 2,
        objective: t('Distinguish systematic and idiosyncratic risk.', 'Distinguere rischio sistematico e idiosincratico.'),
        prompt: t('Which are examples of idiosyncratic (diversifiable) risk? Select all that apply.', 'Quali sono esempi di rischio idiosincratico (diversificabile)? Seleziona tutte le risposte corrette.'),
        choices: [
          t('A company’s key drug fails its clinical trial', 'Il farmaco principale di una società fallisce la sperimentazione clinica'),
          t('The central bank raises rates by 50bp', 'La banca centrale alza i tassi di 50bp'),
          t('A CEO resigns unexpectedly', 'Un CEO si dimette inaspettatamente'),
          t('A global recession', 'Una recessione globale'),
          t('A factory fire at one manufacturer', 'Un incendio in uno stabilimento di un produttore')
        ],
        correct: [0, 2, 4],
        explanation: t('Drug failure, CEO departure and a factory fire are firm-specific. Rate hikes and recessions hit the whole market — systematic risk.', 'Fallimento del farmaco, dimissioni del CEO e incendio sono specifici dell’impresa. Rialzi dei tassi e recessioni colpiscono tutto il mercato — rischio sistematico.')
      }
    ],
    flashcards: [
      { id: 'fc-fm-rr-1', topic: 'risk-return', front: t('Two-asset portfolio variance?', 'Varianza di un portafoglio di due attivi?'), back: t('w₁²σ₁² + w₂²σ₂² + 2w₁w₂σ₁σ₂ρ.', 'w₁²σ₁² + w₂²σ₂² + 2w₁w₂σ₁σ₂ρ.') },
      { id: 'fc-fm-rr-2', topic: 'risk-return', front: t('Sharpe ratio?', 'Indice di Sharpe?'), back: t('(Portfolio return − risk-free) / portfolio volatility.', '(Rendimento portafoglio − risk-free) / volatilità portafoglio.') },
      { id: 'fc-fm-rr-3', topic: 'risk-return', front: t('Which risk is rewarded?', 'Quale rischio è remunerato?'), back: t('Systematic (market) risk only; idiosyncratic risk can be diversified away.', 'Solo il rischio sistematico (di mercato); quello idiosincratico è diversificabile.') },
      { id: 'fc-fm-rr-4', topic: 'risk-return', front: t('When is there no diversification benefit?', 'Quando non c’è beneficio di diversificazione?'), back: t('When correlation = +1.', 'Quando la correlazione = +1.') }
    ]
  },

  /* ============================ FM2 — fm-alpha-beta ============================ */
  {
    id: 'fm-alpha-beta',
    academyId: 'markets',
    moduleId: 'FM2',
    mode: 'deep',
    minutes: 11,
    difficulty: 2,
    reviewed: '2026-10',
    objective: t(
      'Interpret beta, compute required returns with CAPM and Jensen’s alpha, and explain how liquidity affects prices and execution.',
      'Interpretare il beta, calcolare i rendimenti richiesti con il CAPM e l’alfa di Jensen, e spiegare come la liquidità incide su prezzi ed esecuzione.'
    ),
    screens: [
      {
        type: 'intuition',
        title: t('Did the manager add value?', 'Il gestore ha creato valore?'),
        body: t(
          'A fund that returned 12% when the market returned 9% looks great. But if it took much more market risk, it should have earned more anyway.\n\n**Beta** measures how much market risk you took; **alpha** is what you earned on top of what that risk justified. Alpha is skill (or luck); beta is just exposure that anyone can buy cheaply with an index fund.',
          "Un fondo che ha reso il 12% quando il mercato ha reso il 9% sembra ottimo. Ma se ha preso molto più rischio di mercato, avrebbe dovuto guadagnare di più comunque.\n\nIl **beta** misura quanto rischio di mercato hai preso; l’**alfa** è ciò che hai guadagnato in più rispetto a quanto giustificato da quel rischio. L’alfa è abilità (o fortuna); il beta è solo esposizione, acquistabile a basso costo con un fondo indicizzato."
        )
      },
      {
        type: 'technical',
        title: t('Beta and alpha', 'Beta e alfa'),
        body: t(
          '- **Beta (β)** = Cov(Rᵢ, Rm) / Var(Rm): sensitivity to market moves. β = 1 moves with the market; β = 1.5 amplifies it; β < 1 is defensive (utilities, staples).\n- Beta is estimated by regressing stock returns on index returns (e.g. 2 years weekly or 5 years monthly). It rises with **financial leverage** — hence unlevering/relevering in valuation.\n- Portfolio beta = weighted average of the betas.\n- **Jensen’s alpha** = actual return − CAPM required return. Positive alpha = outperformance after adjusting for market risk.',
          "- **Beta (β)** = Cov(Rᵢ, Rm) / Var(Rm): sensibilità ai movimenti di mercato. β = 1 si muove con il mercato; β = 1,5 lo amplifica; β < 1 è difensivo (utility, beni di prima necessità).\n- Il beta si stima regredendo i rendimenti del titolo su quelli dell’indice (es. 2 anni settimanali o 5 anni mensili). Cresce con la **leva finanziaria** — da qui unlevering/relevering in valutazione.\n- Beta di portafoglio = media ponderata dei beta.\n- **Alfa di Jensen** = rendimento effettivo − rendimento richiesto dal CAPM. Alfa positivo = sovraperformance dopo aver corretto per il rischio di mercato."
        )
      },
      {
        type: 'technical',
        title: t('Liquidity', 'Liquidità'),
        body: t(
          'Liquidity is the ability to trade size quickly without moving the price.\n- **Bid–ask spread**: the round-trip cost of trading; wider for small caps and in stress.\n- **Average daily volume (ADV)**: selling a stake worth many days of ADV moves the price — this is why large holders sell via **accelerated bookbuilds** at a discount rather than dribbling into the market.\n- Investors demand a **liquidity premium** for illiquid assets: small caps, private companies (the "illiquidity discount" in valuations), HY bonds.',
          "La liquidità è la capacità di negoziare grandi quantità rapidamente senza muovere il prezzo.\n- **Spread denaro–lettera**: il costo di un’operazione di andata e ritorno; più ampio per le small cap e nelle fasi di stress.\n- **Volume medio giornaliero (ADV)**: vendere una quota pari a molti giorni di ADV muove il prezzo — per questo i grandi azionisti vendono tramite **accelerated bookbuilding** a sconto invece di vendere poco alla volta sul mercato.\n- Gli investitori chiedono un **premio per l’illiquidità** sugli attivi illiquidi: small cap, società private (lo \"sconto di illiquidità\" nelle valutazioni), bond HY."
        )
      },
      {
        type: 'formula',
        formulas: [
          { name: t('CAPM required return', 'Rendimento richiesto CAPM'), expr: 'E(R) = Rf + β × (Rm − Rf)' },
          { name: t('Jensen’s alpha', 'Alfa di Jensen'), expr: 'α = R_actual − [Rf + β × (Rm − Rf)]' },
          { name: t('Bid–ask spread (%)', 'Spread denaro–lettera (%)'), expr: 'Spread % = (Ask − Bid) / Mid' }
        ]
      },
      {
        type: 'example',
        title: t('Evaluating two funds', 'Valutare due fondi'),
        body: t('Market return 9%, risk-free 3%.', 'Rendimento di mercato 9%, tasso privo di rischio 3%.'),
        table: {
          headers: [t('Fund', 'Fondo'), t('Return', 'Rendimento'), t('Beta', 'Beta'), t('CAPM required', 'Richiesto CAPM'), t('Alpha', 'Alfa')],
          rows: [
            ['X', '12.0%', '1.2', '10.2%', '+1.8%'],
            ['Y', '12.0%', '1.6', '12.6%', '−0.6%']
          ]
        }
      },
      {
        type: 'realworld',
        body: t(
          'Bankers use beta every day in WACC calculations: they take observed betas of comparable companies, unlever them, and relever at the target’s capital structure. Data providers (Bloomberg, FactSet) show raw and "adjusted" betas — know which one you use.\n\nLiquidity matters in ECM: block trade sizing and discounts are driven by the stake’s size in days of ADV.',
          "I banker usano il beta ogni giorno nel calcolo del WACC: prendono i beta osservati dei comparabili, li rendono unlevered e li ri-leverano alla struttura del capitale del target. I provider (Bloomberg, FactSet) mostrano beta grezzi e \"adjusted\" — bisogna sapere quale si usa.\n\nLa liquidità conta in ECM: dimensione e sconto di un block trade dipendono dalla quota espressa in giorni di ADV."
        )
      },
      { type: 'exercise', questionId: 'fm-ab-q1' },
      { type: 'exercise', questionId: 'fm-ab-q2' },
      { type: 'exercise', questionId: 'fm-ab-q3' },
      {
        type: 'interview',
        question: t('What is the difference between alpha and beta?', 'Qual è la differenza tra alfa e beta?'),
        answer: t(
          'Beta is the sensitivity of a security’s returns to the market — its systematic risk, which CAPM says is the only risk that earns a premium. Alpha is the return above what CAPM predicts for that beta. Beta can be bought cheaply through index funds; alpha is what active managers claim to deliver and charge fees for.',
          "Il beta è la sensibilità dei rendimenti di un titolo al mercato — il suo rischio sistematico, che secondo il CAPM è l’unico remunerato. L’alfa è il rendimento in eccesso rispetto a quanto previsto dal CAPM per quel beta. Il beta si compra a basso costo con fondi indicizzati; l’alfa è ciò che i gestori attivi dichiarano di generare e per cui si fanno pagare."
        )
      },
      {
        type: 'mistakes',
        items: [
          t('Calling any outperformance vs the index "alpha" without adjusting for beta.', 'Chiamare "alfa" qualsiasi sovraperformance rispetto all’indice senza correggere per il beta.'),
          t('Using a levered peer beta directly for a target with a different capital structure.', 'Usare direttamente il beta levered di un comparabile per un target con struttura del capitale diversa.'),
          t('Ignoring liquidity when selling a large stake: the price impact can exceed a block trade discount.', 'Ignorare la liquidità vendendo una grande quota: l’impatto sul prezzo può superare lo sconto di un block trade.')
        ]
      },
      {
        type: 'summary',
        items: [
          t('β = Cov(Ri, Rm)/Var(Rm); portfolio beta = weighted average.', 'β = Cov(Ri, Rm)/Var(Rm); beta di portafoglio = media ponderata.'),
          t('α = actual return − CAPM required return.', 'α = rendimento effettivo − rendimento richiesto CAPM.'),
          t('Liquidity: bid–ask, ADV, liquidity premium; large stakes sold via ABB.', 'Liquidità: spread denaro–lettera, ADV, premio di liquidità; grandi quote vendute via ABB.')
        ]
      }
    ],
    questions: [
      {
        id: 'fm-ab-q1',
        kind: 'numeric',
        topic: 'alpha-beta',
        difficulty: 2,
        objective: t('Compute Jensen’s alpha.', 'Calcolare l’alfa di Jensen.'),
        prompt: t(
          'A fund returned 12% with beta 1.2. Market return 9%, risk-free 3%. What is Jensen’s alpha (%)?',
          'Un fondo ha reso il 12% con beta 1,2. Rendimento di mercato 9%, risk-free 3%. Qual è l’alfa di Jensen (%)?'
        ),
        answer: 1.8,
        unit: '%',
        verify: { fn: 'jensensAlpha', args: [12, 3, 1.2, 9] },
        steps: [t('Required = 3 + 1.2 × (9 − 3) = 10.2%', 'Richiesto = 3 + 1,2 × (9 − 3) = 10,2%'), t('α = 12 − 10.2 = 1.8%', 'α = 12 − 10,2 = 1,8%')],
        explanation: t('The fund beat its risk-adjusted requirement by 1.8 points. Comparing with the market (12 − 9 = 3%) ignores its higher beta.', 'Il fondo ha battuto il rendimento richiesto per il suo rischio di 1,8 punti. Confrontarlo con il mercato (12 − 9 = 3%) ignora il beta più alto.')
      },
      {
        id: 'fm-ab-q2',
        kind: 'numeric',
        topic: 'alpha-beta',
        difficulty: 1,
        objective: t('Compute a portfolio beta.', 'Calcolare il beta di un portafoglio.'),
        prompt: t('50% in a stock with beta 1.4 and 50% in a stock with beta 0.6. Portfolio beta?', '50% in un titolo con beta 1,4 e 50% in un titolo con beta 0,6. Beta del portafoglio?'),
        answer: 1,
        tolerance: { abs: 0.01 },
        verify: { fn: 'portfolioReturn', args: [[0.5, 0.5], [1.4, 0.6]] },
        explanation: t('Betas average linearly: 0.5 × 1.4 + 0.5 × 0.6 = 1.0 — the portfolio has market-like systematic risk.', 'I beta si mediano linearmente: 0,5 × 1,4 + 0,5 × 0,6 = 1,0 — il portafoglio ha un rischio sistematico pari al mercato.')
      },
      {
        id: 'fm-ab-q3',
        kind: 'numeric',
        topic: 'liquidity',
        difficulty: 1,
        objective: t('Compute a bid–ask spread.', 'Calcolare uno spread denaro–lettera.'),
        prompt: t('A small-cap stock is quoted €9.95 bid / €10.05 ask. What is the bid–ask spread as % of mid?', 'Un titolo small cap è quotato €9,95 denaro / €10,05 lettera. Qual è lo spread in % del prezzo medio?'),
        answer: 1,
        unit: '%',
        verify: { fn: 'ratio', args: [10, 10] },
        explanation: t('(10.05 − 9.95) / 10.00 = 0.10 / 10.00 = 1.0% — high versus a few basis points for a large cap.', '(10,05 − 9,95) / 10,00 = 0,10 / 10,00 = 1,0% — alto rispetto a pochi punti base per una large cap.')
      },
      {
        id: 'fm-ab-q4',
        kind: 'mcq',
        topic: 'alpha-beta',
        difficulty: 2,
        objective: t('Interpret beta.', 'Interpretare il beta.'),
        prompt: t('A stock has a beta of 0.5. If the market falls 10%, what is the expected move (ignoring alpha)?', 'Un titolo ha beta 0,5. Se il mercato scende del 10%, qual è il movimento atteso (ignorando l’alfa)?'),
        choices: [t('−20%', '−20%'), t('−10%', '−10%'), t('−5%', '−5%'), t('+5%', '+5%')],
        correct: 2,
        explanation: t('β × market move = 0.5 × (−10%) = −5%. A negative beta would be needed for a positive move.', 'β × movimento del mercato = 0,5 × (−10%) = −5%. Servirebbe un beta negativo per un movimento positivo.')
      }
    ],
    flashcards: [
      { id: 'fc-fm-ab-1', topic: 'alpha-beta', front: t('Beta formula?', 'Formula del beta?'), back: t('Cov(Ri, Rm) / Var(Rm).', 'Cov(Ri, Rm) / Var(Rm).') },
      { id: 'fc-fm-ab-2', topic: 'alpha-beta', front: t('Jensen’s alpha?', 'Alfa di Jensen?'), back: t('Actual return − [Rf + β(Rm − Rf)].', 'Rendimento effettivo − [Rf + β(Rm − Rf)].') },
      { id: 'fc-fm-ab-3', topic: 'liquidity', front: t('Why sell a large stake via ABB?', 'Perché vendere una grande quota via ABB?'), back: t('Its size is many days of ADV; selling in the market would move the price more than the ABB discount.', 'La dimensione equivale a molti giorni di ADV; vendere sul mercato muoverebbe il prezzo più dello sconto dell’ABB.') },
      { id: 'fc-fm-ab-4', topic: 'alpha-beta', front: t('Effect of leverage on beta?', 'Effetto della leva sul beta?'), back: t('More debt → higher equity beta (relever with Hamada).', 'Più debito → beta dell’equity più alto (relevering con Hamada).') }
    ]
  },

/* ============================ FM3 — fm-forwards-futures ============================ */
  {
    id: 'fm-forwards-futures',
    academyId: 'markets',
    moduleId: 'FM3',
    mode: 'deep',
    minutes: 12,
    difficulty: 2,
    reviewed: '2026-10',
    objective: t(
      'Price forwards with the cost-of-carry model, distinguish forwards from futures, and compute daily variation margin.',
      'Prezzare i forward con il modello cost of carry, distinguere forward e future e calcolare il margine di variazione giornaliero.'
    ),
    screens: [
      {
        type: 'intuition',
        title: t('Agreeing today on a price for tomorrow', 'Accordarsi oggi su un prezzo di domani'),
        body: t(
          'A **forward** is a contract to buy or sell an asset at a fixed price on a future date. No money changes hands today.\n\nWhy would the forward price differ from today’s spot price? Because buying later instead of now lets you keep your cash earning interest — but you miss any dividends or income the asset pays. The forward price makes you indifferent between the two: that is the **cost of carry**.',
          "Un **forward** è un contratto per comprare o vendere un’attività a un prezzo fisso a una data futura. Oggi non si scambia denaro.\n\nPerché il prezzo forward dovrebbe differire dallo spot di oggi? Perché comprare dopo invece che ora ti permette di tenere la liquidità a interesse — ma rinunci a dividendi o redditi dell’attività. Il prezzo forward ti rende indifferente tra le due scelte: è il **cost of carry**."
        )
      },
      {
        type: 'technical',
        title: t('Forwards vs futures', 'Forward vs future'),
        body: t(
          '- **Forwards**: OTC, bilateral, customised (amount, date). Settled at maturity; exposed to counterparty credit risk (mitigated by collateral agreements).\n- **Futures**: exchange-traded, standardised contracts cleared through a **central counterparty (CCP)**. Positions are **marked to market daily**.\n- **Initial margin**: collateral posted when opening a position.\n- **Variation margin**: daily gains/losses paid in cash. If your account falls below the maintenance level, you get a **margin call**.\n\nThe long side gains when prices rise; the short side gains when prices fall.',
          "- **Forward**: OTC, bilaterali, personalizzati (importo, data). Regolati a scadenza; esposti al rischio di controparte (mitigato da accordi di collateral).\n- **Future**: negoziati in borsa, standardizzati e compensati tramite una **controparte centrale (CCP)**. Le posizioni sono **marked to market ogni giorno**.\n- **Margine iniziale**: garanzia versata all’apertura della posizione.\n- **Margine di variazione**: utili/perdite giornalieri regolati in contanti. Se il conto scende sotto il livello di mantenimento, scatta una **margin call**.\n\nIl lato long guadagna se i prezzi salgono; il lato short se scendono."
        )
      },
      {
        type: 'formula',
        formulas: [
          { name: t('Forward price (continuous compounding)', 'Prezzo forward (capitalizzazione continua)'), expr: 'F = S × e^((r − q) × T)', vars: [{ sym: 'q', desc: t('Continuous dividend / income yield', 'Rendimento continuo da dividendi / redditi') }] },
          { name: t('Forward price (annual compounding, no income)', 'Prezzo forward (capitalizzazione annuale, senza redditi)'), expr: 'F = S × (1 + r)^T' },
          { name: t('Daily variation margin', 'Margine di variazione giornaliero'), expr: 'VM = (F_today − F_yesterday) × Multiplier × Contracts  (sign flips for shorts)' }
        ]
      },
      {
        type: 'example',
        title: t('Why the formula must hold', 'Perché la formula deve valere'),
        body: t(
          'A stock trades at €100, pays no dividend, and the 2-year rate is 5% (annual). Fair forward = 100 × 1.05² = **€110.25**.\n\nIf the forward traded at €113: borrow €100, buy the stock, sell the forward. In 2 years deliver the stock for €113 and repay €110.25 — a riskless €2.75 profit. Arbitrageurs keep doing this until the forward returns to €110.25. If it traded below, do the reverse (short the stock, invest the cash, buy forward).',
          "Un’azione quota €100, non paga dividendi e il tasso a 2 anni è il 5% (annuale). Forward equo = 100 × 1,05² = **€110,25**.\n\nSe il forward quotasse €113: prendi a prestito €100, compri l’azione, vendi il forward. Tra 2 anni consegni l’azione a €113 e rimborsi €110,25 — un profitto privo di rischio di €2,75. Gli arbitraggisti lo fanno finché il forward non torna a €110,25. Se quotasse meno, si fa l’inverso (vendita allo scoperto, investimento della cassa, acquisto a termine)."
        )
      },
      {
        type: 'realworld',
        body: t(
          'Corporates use forwards to lock in FX rates on deal consideration and commodity prices on inputs; investors use index futures (e.g. FTSE MIB or Euro Stoxx 50 futures) to adjust market exposure quickly and cheaply.\n\nThe margin mechanism matters: in March 2020 and during the 2022 energy crisis, sharp moves triggered huge margin calls on energy companies hedging with futures — a liquidity risk even when the hedge works economically.',
          "Le imprese usano i forward per bloccare il cambio sul corrispettivo delle operazioni e i prezzi delle materie prime; gli investitori usano i future su indici (es. FTSE MIB o Euro Stoxx 50) per modificare l’esposizione al mercato in modo rapido ed economico.\n\nIl meccanismo dei margini conta: a marzo 2020 e durante la crisi energetica del 2022 movimenti bruschi hanno provocato enormi margin call per le società energetiche coperte con future — un rischio di liquidità anche quando la copertura funziona economicamente."
        )
      },
      { type: 'exercise', questionId: 'fm-ff-q1' },
      { type: 'exercise', questionId: 'fm-ff-q2' },
      { type: 'exercise', questionId: 'fm-ff-q3' },
      {
        type: 'interview',
        question: t('What is the difference between a forward and a futures contract?', 'Qual è la differenza tra un forward e un future?'),
        answer: t(
          'Both lock in a price for future delivery. A forward is a private OTC contract, tailored to the client, settled at maturity, with bilateral counterparty risk. A future is standardised, exchange-traded and cleared by a central counterparty, with daily mark-to-market and margining, which almost eliminates counterparty risk but creates daily cash flows. Corporates usually hedge deal FX with forwards because they need exact amounts and dates.',
          "Entrambi bloccano un prezzo per una consegna futura. Il forward è un contratto OTC privato, su misura per il cliente, regolato a scadenza, con rischio di controparte bilaterale. Il future è standardizzato, negoziato in borsa e compensato da una controparte centrale, con mark-to-market e margini giornalieri, che quasi eliminano il rischio di controparte ma generano flussi di cassa giornalieri. Le imprese coprono di solito l’FX delle operazioni con forward perché servono importi e date esatti."
        )
      },
      {
        type: 'mistakes',
        items: [
          t('Thinking the forward price is a forecast of the future spot: it is set by no-arbitrage (cost of carry).', 'Pensare che il prezzo forward sia una previsione dello spot futuro: è fissato dal non arbitraggio (cost of carry).'),
          t('Forgetting to subtract the dividend yield when pricing equity index forwards.', 'Dimenticare di sottrarre il dividend yield nel prezzare i forward su indici azionari.'),
          t('Ignoring the liquidity needs created by daily variation margin.', 'Ignorare il fabbisogno di liquidità generato dal margine di variazione giornaliero.')
        ]
      },
      {
        type: 'summary',
        items: [
          t('F = S × e^((r − q)T) or S × (1 + r)^T without income.', 'F = S × e^((r − q)T) oppure S × (1 + r)^T senza redditi.'),
          t('Forwards: OTC, custom, settled at maturity. Futures: exchange, standardised, CCP, daily margin.', 'Forward: OTC, su misura, regolati a scadenza. Future: borsa, standardizzati, CCP, margini giornalieri.'),
          t('Mispriced forwards are arbitraged away.', 'I forward mal prezzati vengono arbitraggiati.')
        ]
      }
    ],
    questions: [
      {
        id: 'fm-ff-q1',
        kind: 'numeric',
        topic: 'forwards-futures',
        difficulty: 2,
        objective: t('Price a forward with continuous compounding and a dividend yield.', 'Prezzare un forward con capitalizzazione continua e dividend yield.'),
        prompt: t(
          'An index is at 100. The 1-year continuously compounded rate is 4% and the dividend yield 1%. What is the 1-year forward price?',
          'Un indice è a 100. Il tasso a 1 anno in capitalizzazione continua è il 4% e il dividend yield l’1%. Qual è il prezzo forward a 1 anno?'
        ),
        answer: 103.05,
        tolerance: { abs: 0.02 },
        verify: { fn: 'forwardPrice', args: [100, 0.04, 1, 0.01] },
        explanation: t('F = 100 × e^(0.04 − 0.01) = 100 × e^0.03 = 103.05. Ignoring dividends gives 104.08, too high.', 'F = 100 × e^(0,04 − 0,01) = 100 × e^0,03 = 103,05. Ignorare i dividendi dà 104,08, troppo alto.')
      },
      {
        id: 'fm-ff-q2',
        kind: 'numeric',
        topic: 'forwards-futures',
        difficulty: 1,
        objective: t('Price a forward with annual compounding.', 'Prezzare un forward con capitalizzazione annuale.'),
        prompt: t(
          'A non-dividend-paying stock trades at €100; the 2-year rate is 5% (annual compounding). What is the fair 2-year forward price (€)?',
          'Un’azione che non paga dividendi quota €100; il tasso a 2 anni è il 5% (capitalizzazione annuale). Qual è il prezzo forward equo a 2 anni (€)?'
        ),
        answer: 110.25,
        unit: '€',
        verify: { fn: 'forwardPriceDiscrete', args: [100, 0.05, 2] },
        explanation: t('100 × 1.05² = 110.25. Using simple interest (110) ignores compounding.', '100 × 1,05² = 110,25. Usare l’interesse semplice (110) ignora la capitalizzazione.')
      },
      {
        id: 'fm-ff-q3',
        kind: 'numeric',
        topic: 'forwards-futures',
        difficulty: 2,
        objective: t('Compute daily variation margin.', 'Calcolare il margine di variazione giornaliero.'),
        prompt: t(
          'You are long 10 index futures with a €10 per point multiplier. The settlement price falls from 4,000 to 3,950. What is your variation margin (€)? (Negative = you pay.)',
          'Sei long di 10 future su indice con moltiplicatore di €10 per punto. Il prezzo di regolamento scende da 4.000 a 3.950. Qual è il tuo margine di variazione (€)? (Negativo = paghi.)'
        ),
        answer: -5000,
        unit: '€',
        verify: { fn: 'product', args: [-50, 10, 10] },
        explanation: t('−50 points × €10 × 10 contracts = −€5,000, paid to the CCP today. The short side receives it.', '−50 punti × €10 × 10 contratti = −€5.000, versati oggi alla CCP. Il lato short li riceve.')
      },
      {
        id: 'fm-ff-q4',
        kind: 'multi',
        topic: 'forwards-futures',
        difficulty: 1,
        objective: t('Identify features of futures.', 'Individuare le caratteristiche dei future.'),
        prompt: t('Which are features of futures (not forwards)? Select all that apply.', 'Quali sono caratteristiche dei future (non dei forward)? Seleziona tutte le risposte corrette.'),
        choices: [
          t('Daily mark-to-market and margining', 'Mark-to-market e margini giornalieri'),
          t('Fully customised notional and maturity', 'Nozionale e scadenza interamente personalizzati'),
          t('Clearing through a central counterparty', 'Compensazione tramite controparte centrale'),
          t('Standardised contract terms', 'Termini contrattuali standardizzati')
        ],
        correct: [0, 2, 3],
        explanation: t('Futures are standardised, CCP-cleared and margined daily. Customisation is the key advantage of OTC forwards.', 'I future sono standardizzati, compensati da una CCP e marginati ogni giorno. La personalizzazione è il vantaggio principale dei forward OTC.')
      }
    ],
    flashcards: [
      { id: 'fc-fm-ff-1', topic: 'forwards-futures', front: t('Forward price with dividend yield (continuous)?', 'Prezzo forward con dividend yield (continuo)?'), back: t('F = S × e^((r − q)T).', 'F = S × e^((r − q)T).') },
      { id: 'fc-fm-ff-2', topic: 'forwards-futures', front: t('Initial vs variation margin?', 'Margine iniziale vs di variazione?'), back: t('Initial: collateral when opening. Variation: daily cash settlement of gains/losses.', 'Iniziale: garanzia all’apertura. Variazione: regolamento giornaliero di utili/perdite.') },
      { id: 'fc-fm-ff-3', topic: 'forwards-futures', front: t('What is a CCP?', "Che cos'è una CCP?"), back: t('Central counterparty: becomes buyer to every seller and seller to every buyer, managing default risk via margin.', 'Controparte centrale: diventa acquirente di ogni venditore e venditore di ogni acquirente, gestendo il rischio di default con i margini.') },
      { id: 'fc-fm-ff-4', topic: 'forwards-futures', front: t('Cost of carry intuition?', 'Intuizione del cost of carry?'), back: t('Forward = spot + financing cost − income forgone by not holding the asset.', 'Forward = spot + costo di finanziamento − redditi persi non detenendo l’attività.') }
    ]
  },

  /* ============================ FM3 — fm-options ============================ */
  {
    id: 'fm-options',
    academyId: 'markets',
    moduleId: 'FM3',
    mode: 'deep',
    minutes: 13,
    difficulty: 2,
    reviewed: '2026-10',
    objective: t(
      'Compute call and put payoffs and profits, classify moneyness, and apply put–call parity.',
      'Calcolare payoff e profitti di call e put, classificare la moneyness e applicare la parità put–call.'
    ),
    screens: [
      {
        type: 'intuition',
        title: t('The right, not the obligation', 'Il diritto, non l’obbligo'),
        body: t(
          'An **option** gives the holder the **right but not the obligation** to buy (**call**) or sell (**put**) an asset at a fixed **strike price** by or on a given date. The buyer pays a **premium** for this right; the seller (writer) collects it and takes on the obligation.\n\nOptions are asymmetric: a call buyer can lose at most the premium, but gains as much as the stock rises. That asymmetry is why options are used for both hedging and leverage.',
          "Un’**opzione** conferisce al titolare il **diritto ma non l’obbligo** di comprare (**call**) o vendere (**put**) un’attività a un **prezzo di esercizio (strike)** fissato entro o a una certa data. L’acquirente paga un **premio** per questo diritto; il venditore (writer) lo incassa e si assume l’obbligo.\n\nLe opzioni sono asimmetriche: chi compra una call può perdere al massimo il premio, ma guadagna quanto sale il titolo. Questa asimmetria spiega perché si usano sia per copertura sia per leva."
        )
      },
      {
        type: 'technical',
        title: t('Key terms', 'I termini chiave'),
        body: t(
          '- **European** options can be exercised only at expiry; **American** options at any time up to expiry.\n- **Moneyness** (for a call): **in the money (ITM)** if S > K, **at the money (ATM)** if S ≈ K, **out of the money (OTM)** if S < K. For a put it is the reverse.\n- **Intrinsic value**: the payoff if exercised now (≥ 0). **Time value**: premium − intrinsic value; it decays to zero at expiry.\n- **Long call**: bullish. **Long put**: bearish or protection. **Short options**: collect premium, take potentially large losses (a short call’s loss is unlimited).',
          "- Le opzioni **europee** si esercitano solo a scadenza; quelle **americane** in qualsiasi momento fino alla scadenza.\n- **Moneyness** (per una call): **in the money (ITM)** se S > K, **at the money (ATM)** se S ≈ K, **out of the money (OTM)** se S < K. Per una put è l’inverso.\n- **Valore intrinseco**: il payoff se esercitata ora (≥ 0). **Valore temporale**: premio − valore intrinseco; si annulla a scadenza.\n- **Long call**: rialzista. **Long put**: ribassista o protezione. **Opzioni vendute**: si incassa il premio con perdite potenzialmente elevate (la perdita di una call venduta è illimitata)."
        )
      },
      {
        type: 'formula',
        formulas: [
          { name: t('Payoffs at expiry', 'Payoff a scadenza'), expr: 'Call = max(S_T − K, 0);  Put = max(K − S_T, 0)' },
          { name: t('Profit (long)', 'Profitto (long)'), expr: 'Profit = Payoff − Premium paid;  call breakeven = K + premium' },
          { name: t('Put–call parity (European, no dividends)', 'Parità put–call (europee, senza dividendi)'), expr: 'C − P = S − K × e^(−rT)' }
        ],
        note: t(
          'Parity links a call and a put with the same strike and expiry: a call plus cash equal to PV(K) has the same payoff as a put plus the stock.',
          'La parità lega call e put con stesso strike e scadenza: una call più liquidità pari a VA(K) ha lo stesso payoff di una put più l’azione.'
        )
      },
      {
        type: 'example',
        title: t('Payoffs with strike €100', 'Payoff con strike €100'),
        body: t('Call premium €6, put premium €5, both expiring in 1 year.', 'Premio call €6, premio put €5, entrambe con scadenza a 1 anno.'),
        table: {
          headers: [t('Stock at expiry', 'Azione a scadenza'), t('Call payoff', 'Payoff call'), t('Call profit', 'Profitto call'), t('Put payoff', 'Payoff put'), t('Put profit', 'Profitto put')],
          rows: [
            ['€80', '0', '−6', '20', '+15'],
            ['€100', '0', '−6', '0', '−5'],
            ['€106', '6', '0', '0', '−5'],
            ['€120', '20', '+14', '0', '−5']
          ]
        }
      },
      {
        type: 'realworld',
        body: t(
          'Options appear throughout banking: **employee stock options** and convertibles in diluted share counts (treasury stock method), **collars** to protect a stake before a sale, **contingent value rights** and earn-outs in M&A, and call spreads that companies buy alongside convertible bond issues to raise the effective conversion premium.\n\nKnowing payoffs lets you explain these structures in an interview without memorising them.',
          "Le opzioni ricorrono in tutta l’attività bancaria: **stock option ai dipendenti** e convertibili nel calcolo delle azioni diluite (treasury stock method), **collar** per proteggere una partecipazione prima di una vendita, **contingent value right** ed earn-out nell’M&A, e call spread acquistati dalle società insieme all’emissione di convertibili per alzare il premio di conversione effettivo.\n\nConoscere i payoff permette di spiegare queste strutture al colloquio senza impararle a memoria."
        )
      },
      { type: 'exercise', questionId: 'fm-opt-q1' },
      { type: 'exercise', questionId: 'fm-opt-q2' },
      { type: 'exercise', questionId: 'fm-opt-q3' },
      { type: 'exercise', questionId: 'fm-opt-q4' },
      {
        type: 'interview',
        question: t('Explain put–call parity and why it must hold.', 'Spiega la parità put–call e perché deve valere.'),
        answer: t(
          'For European options with the same strike and expiry, a call plus a zero-coupon bond paying the strike has exactly the same payoff at expiry as a put plus the stock: both are worth max(S, K). Two portfolios with identical payoffs must cost the same today, otherwise you could buy the cheap one, sell the expensive one and lock in a riskless profit. Hence C + K e^(−rT) = P + S.',
          "Per opzioni europee con stesso strike e scadenza, una call più uno zero coupon che paga lo strike ha a scadenza esattamente lo stesso payoff di una put più l’azione: entrambi valgono max(S, K). Due portafogli con payoff identici devono costare uguale oggi, altrimenti si comprerebbe quello economico vendendo quello caro, bloccando un profitto privo di rischio. Quindi C + K e^(−rT) = P + S."
        )
      },
      {
        type: 'mistakes',
        items: [
          t('Confusing payoff with profit: profit subtracts the premium.', 'Confondere payoff e profitto: il profitto sottrae il premio.'),
          t('Calling a put with K = 100 and S = 120 "in the money": it is out of the money.', 'Definire "in the money" una put con K = 100 e S = 120: è out of the money.'),
          t('Applying put–call parity to American options or ignoring dividends.', 'Applicare la parità put–call a opzioni americane o ignorare i dividendi.')
        ]
      },
      {
        type: 'summary',
        items: [
          t('Call payoff = max(S − K, 0); put payoff = max(K − S, 0).', 'Payoff call = max(S − K, 0); payoff put = max(K − S, 0).'),
          t('Premium = intrinsic value + time value.', 'Premio = valore intrinseco + valore temporale.'),
          t('Put–call parity: C − P = S − K e^(−rT).', 'Parità put–call: C − P = S − K e^(−rT).')
        ]
      }
    ],
    questions: [
      {
        id: 'fm-opt-q1',
        kind: 'grid',
        topic: 'options',
        difficulty: 1,
        objective: t('Compute option payoffs at expiry.', 'Calcolare i payoff delle opzioni a scadenza.'),
        prompt: t('Strike €100. Fill in the payoffs at expiry (€).', 'Strike €100. Completa i payoff a scadenza (€).'),
        columns: [t('Stock at expiry', 'Azione a scadenza'), t('Call payoff', 'Payoff call'), t('Put payoff', 'Payoff put')],
        rows: [
          { label: t('€80', '€80'), cells: [{ answer: 0, verify: { fn: 'optionPayoff', args: ['call', 80, 100] } }, { answer: 20, verify: { fn: 'optionPayoff', args: ['put', 80, 100] } }] },
          { label: t('€100', '€100'), cells: [{ answer: 0, verify: { fn: 'optionPayoff', args: ['call', 100, 100] } }, { answer: 0, verify: { fn: 'optionPayoff', args: ['put', 100, 100] } }] },
          { label: t('€130', '€130'), cells: [{ answer: 30, verify: { fn: 'optionPayoff', args: ['call', 130, 100] } }, { answer: 0, verify: { fn: 'optionPayoff', args: ['put', 130, 100] } }] }
        ],
        unit: '€',
        explanation: t('Call = max(S − 100, 0); put = max(100 − S, 0). Payoffs are never negative for the holder.', 'Call = max(S − 100, 0); put = max(100 − S, 0). Per il titolare i payoff non sono mai negativi.')
      },
      {
        id: 'fm-opt-q2',
        kind: 'numeric',
        topic: 'options',
        difficulty: 1,
        objective: t('Compute the profit on a long call.', 'Calcolare il profitto di una call acquistata.'),
        prompt: t(
          'You buy a call with strike €100 for a €6 premium. At expiry the stock is €120. What is your profit per option (€)?',
          'Acquisti una call con strike €100 a un premio di €6. A scadenza l’azione vale €120. Qual è il tuo profitto per opzione (€)?'
        ),
        answer: 14,
        unit: '€',
        verify: { fn: 'diff', args: [20, 6] },
        explanation: t('Payoff max(120 − 100, 0) = 20, minus premium 6 = €14. The payoff (20) is not the profit.', 'Payoff max(120 − 100, 0) = 20, meno premio 6 = €14. Il payoff (20) non è il profitto.')
      },
      {
        id: 'fm-opt-q3',
        kind: 'numeric',
        topic: 'options',
        difficulty: 3,
        objective: t('Apply put–call parity.', 'Applicare la parità put–call.'),
        prompt: t(
          'A European put (K = €100, 1 year) costs €5.00. Stock €100, continuously compounded rate 5%, no dividends. What must the call with the same strike and expiry cost (€)?',
          'Una put europea (K = €100, 1 anno) costa €5,00. Azione €100, tasso in capitalizzazione continua 5%, nessun dividendo. Quanto deve costare la call con stesso strike e scadenza (€)?'
        ),
        answer: 9.88,
        unit: '€',
        tolerance: { abs: 0.02 },
        verify: { fn: 'callFromPutParity', args: [5, 100, 100, 0.05, 1] },
        steps: [t('PV(K) = 100 × e^(−0.05) = 95.12', 'VA(K) = 100 × e^(−0,05) = 95,12'), t('C = P + S − PV(K) = 5 + 100 − 95.12 = 9.88', 'C = P + S − VA(K) = 5 + 100 − 95,12 = 9,88')],
        explanation: t('An ATM call is worth more than the ATM put when rates are positive, because the strike is paid later (PV(K) < S).', 'Con tassi positivi una call ATM vale più della put ATM, perché lo strike si paga più tardi (VA(K) < S).')
      },
      {
        id: 'fm-opt-q4',
        kind: 'mcq',
        topic: 'options',
        difficulty: 1,
        objective: t('Classify moneyness.', 'Classificare la moneyness.'),
        prompt: t('Stock at €90. Which option is in the money?', 'Azione a €90. Quale opzione è in the money?'),
        choices: [t('Call with strike €100', 'Call con strike €100'), t('Put with strike €80', 'Put con strike €80'), t('Call with strike €95', 'Call con strike €95'), t('Put with strike €100', 'Put con strike €100')],
        correct: 3,
        explanation: t('A put is ITM when K > S: 100 > 90. Calls with K = 95 or 100 are OTM (K > S); a put with K = 80 is OTM (K < S).', 'Una put è ITM quando K > S: 100 > 90. Le call con K = 95 o 100 sono OTM (K > S); la put con K = 80 è OTM (K < S).')
      },
      {
        id: 'fm-opt-q5',
        kind: 'numeric',
        topic: 'options',
        difficulty: 1,
        objective: t('Compute a call breakeven.', 'Calcolare il breakeven di una call.'),
        prompt: t('Call strike €100, premium €6. At what stock price at expiry does the buyer break even (€)?', 'Call con strike €100, premio €6. A quale prezzo dell’azione a scadenza l’acquirente va in pareggio (€)?'),
        answer: 106,
        unit: '€',
        verify: { fn: 'sum', args: [100, 6] },
        explanation: t('Breakeven = K + premium = 106: the payoff of 6 just recovers the premium.', 'Breakeven = K + premio = 106: il payoff di 6 recupera esattamente il premio.')
      }
    ],
    flashcards: [
      { id: 'fc-fm-opt-1', topic: 'options', front: t('Call and put payoff at expiry?', 'Payoff di call e put a scadenza?'), back: t('Call: max(S − K, 0). Put: max(K − S, 0).', 'Call: max(S − K, 0). Put: max(K − S, 0).') },
      { id: 'fc-fm-opt-2', topic: 'options', front: t('Put–call parity?', 'Parità put–call?'), back: t('C − P = S − K e^(−rT) (European, no dividends).', 'C − P = S − K e^(−rT) (europee, senza dividendi).') },
      { id: 'fc-fm-opt-3', topic: 'options', front: t('When is a put in the money?', 'Quando una put è in the money?'), back: t('When the strike is above the stock price.', 'Quando lo strike è superiore al prezzo dell’azione.') },
      { id: 'fc-fm-opt-4', topic: 'options', front: t('European vs American option?', 'Opzione europea vs americana?'), back: t('European: exercise at expiry only. American: any time up to expiry.', 'Europea: esercizio solo a scadenza. Americana: in qualsiasi momento fino alla scadenza.') }
    ]
  },

  /* ============================ FM3 — fm-swaps-hedging ============================ */
  {
    id: 'fm-swaps-hedging',
    academyId: 'markets',
    moduleId: 'FM3',
    mode: 'deep',
    minutes: 12,
    difficulty: 2,
    reviewed: '2026-10',
    objective: t(
      'Explain interest rate swaps and how companies use them, compute net swap payments, and design FX hedges for deal consideration, including deal-contingent hedges.',
      'Spiegare gli interest rate swap e come li usano le imprese, calcolare i flussi netti di uno swap e strutturare coperture FX del corrispettivo, incluse le coperture deal-contingent.'
    ),
    screens: [
      {
        type: 'intuition',
        title: t('Swapping one risk for another', 'Scambiare un rischio con un altro'),
        body: t(
          'A company with a floating-rate loan worries that rates will rise. It cannot easily refinance, but it can enter a **swap**: it agrees to pay a fixed rate to a bank and receive the floating rate in return. The floating receipts offset the loan’s floating payments, leaving a **fixed** cost.\n\nNo principal is exchanged — only the interest difference on a **notional** amount.',
          "Una società con un prestito a tasso variabile teme il rialzo dei tassi. Non può rifinanziarsi facilmente, ma può stipulare uno **swap**: si impegna a pagare a una banca un tasso fisso e a ricevere in cambio il variabile. I flussi variabili ricevuti compensano quelli pagati sul prestito, lasciando un costo **fisso**.\n\nNon si scambia capitale — solo il differenziale di interessi su un importo **nozionale**."
        )
      },
      {
        type: 'technical',
        title: t('How swaps work', 'Come funzionano gli swap'),
        body: t(
          '- **Plain vanilla interest rate swap (IRS)**: one party pays fixed (the **swap rate**), the other pays floating (e.g. 6-month Euribor or SOFR) on the same notional. Payments are netted.\n- At inception the swap rate is set so the swap’s value is zero; afterwards its mark-to-market changes as rates move.\n- **Payer swap** (pay fixed): gains if rates rise. **Receiver swap**: gains if rates fall.\n- **Cross-currency swap**: exchanges principal and interest in two currencies — used to convert, say, USD bond proceeds into EUR debt.\n- Under IFRS 9, companies can apply **hedge accounting** to reduce P&L volatility from hedges.',
          "- **Interest rate swap (IRS) plain vanilla**: una parte paga fisso (il **tasso swap**), l’altra variabile (es. Euribor 6 mesi o SOFR) sullo stesso nozionale. I pagamenti si compensano.\n- All’origine il tasso swap è fissato in modo che il valore sia zero; poi il mark-to-market varia con i tassi.\n- **Payer swap** (paga fisso): guadagna se i tassi salgono. **Receiver swap**: guadagna se scendono.\n- **Cross-currency swap**: scambia capitale e interessi in due valute — usato per convertire, ad esempio, i proventi di un bond in USD in debito in EUR.\n- Secondo l’IFRS 9 le imprese possono applicare l’**hedge accounting** per ridurre la volatilità a conto economico delle coperture."
        )
      },
      {
        type: 'formula',
        formulas: [
          { name: t('Net swap payment (fixed payer)', 'Flusso netto dello swap (chi paga fisso)'), expr: 'Net received = (Floating rate − Fixed rate) × Notional × Period fraction' },
          { name: t('All-in hedged cost of a floating loan', 'Costo complessivo coperto di un prestito variabile'), expr: 'All-in fixed = Swap rate + Loan margin' }
        ]
      },
      {
        type: 'example',
        title: t('Fixing TargetCo’s Term Loan', 'Rendere fisso il Term Loan di TargetCo'),
        body: t(
          'TargetCo has a €100m loan at Euribor + 2.50%. It enters a pay-fixed swap at 3.00% on €100m (annual settlement for simplicity).',
          'TargetCo ha un prestito di €100m a Euribor + 2,50%. Stipula un payer swap al 3,00% su €100m (regolamento annuale per semplicità).'
        ),
        table: {
          headers: [t('Euribor', 'Euribor'), t('Loan interest', 'Interessi prestito'), t('Swap net', 'Netto swap'), t('All-in cost', 'Costo complessivo')],
          rows: [
            ['2.00%', '−€4.5m', '−€1.0m', '−€5.5m (5.50%)'],
            ['3.50%', '−€6.0m', '+€0.5m', '−€5.5m (5.50%)'],
            ['5.00%', '−€7.5m', '+€2.0m', '−€5.5m (5.50%)']
          ]
        }
      },
      {
        type: 'technical',
        title: t('Hedging deal consideration', 'Coprire il corrispettivo di un’operazione'),
        body: t(
          'A buyer paying in a foreign currency is exposed between signing and closing. Options:\n- **FX forward**: locks the rate, but if the deal fails the buyer still must settle — possibly at a large loss.\n- **FX option**: protects against adverse moves and lapses if unneeded, but costs an upfront premium.\n- **Deal-contingent forward (DCF)**: a forward that is only settled **if the deal closes**; if it does not, it terminates at no cost. The bank prices this contingency risk into a slightly worse forward rate — no upfront premium. Popular when closing depends on antitrust or regulatory approvals.\n\nAcquisition financing can also be hedged with **deal-contingent swaps** to lock rates on the new debt.',
          "Un acquirente che paga in valuta estera è esposto tra signing e closing. Opzioni:\n- **Forward FX**: blocca il cambio, ma se l’operazione salta va comunque regolato — magari con una forte perdita.\n- **Opzione FX**: protegge dai movimenti avversi e scade se non serve, ma costa un premio anticipato.\n- **Deal-contingent forward (DCF)**: un forward regolato **solo se l’operazione arriva al closing**; altrimenti si estingue senza costi. La banca prezza questo rischio in un cambio leggermente peggiore — nessun premio anticipato. Diffuso quando il closing dipende da autorizzazioni antitrust o regolamentari.\n\nAnche il finanziamento dell’acquisizione si può coprire con **deal-contingent swap** per bloccare i tassi del nuovo debito."
        )
      },
      {
        type: 'realworld',
        body: t(
          'Banks’ corporate derivatives or "risk solutions" teams pitch hedging alongside M&A and financing mandates. LBO lenders often require sponsors to hedge a portion of floating-rate debt. When rates rose sharply in 2022, companies that had swapped their floating debt into fixed were protected, while unhedged leveraged borrowers saw interest costs jump.',
          "I team di derivati corporate o \"risk solutions\" delle banche propongono coperture insieme ai mandati M&A e di finanziamento. I finanziatori degli LBO spesso chiedono agli sponsor di coprire una parte del debito variabile. Quando i tassi sono saliti bruscamente nel 2022, le società che avevano trasformato il debito variabile in fisso tramite swap erano protette, mentre i debitori con leva non coperti hanno visto impennarsi gli interessi."
        )
      },
      { type: 'exercise', questionId: 'fm-sw-q1' },
      { type: 'exercise', questionId: 'fm-sw-q2' },
      { type: 'exercise', questionId: 'fm-sw-q3' },
      {
        type: 'interview',
        question: t('A European client signs a $1bn US acquisition with 9 months to closing and antitrust risk. How would you hedge the FX?', 'Un cliente europeo firma un’acquisizione USA da $1mld con 9 mesi al closing e rischio antitrust. Come copriresti l’FX?'),
        answer: t(
          'The exposure is the euro cost of $1bn at closing. A plain forward locks the rate but leaves the client with a potentially large loss if antitrust blocks the deal. An option avoids that but needs a premium. A deal-contingent forward fits best: it locks the rate and only settles if the deal closes, with the contingency cost embedded in the forward rate. I would also consider hedging part of the exposure and matching any USD acquisition debt to the target’s dollar cash flows.',
          "L’esposizione è il costo in euro di $1mld al closing. Un forward semplice blocca il cambio ma lascia il cliente con una possibile forte perdita se l’antitrust blocca l’operazione. Un’opzione lo evita ma richiede un premio. Il deal-contingent forward è il più adatto: blocca il cambio e si regola solo se l’operazione si chiude, con il costo della contingenza incorporato nel cambio. Valuterei anche di coprire parte dell’esposizione e di allineare l’eventuale debito in USD ai flussi in dollari del target."
        )
      },
      {
        type: 'mistakes',
        items: [
          t('Thinking the notional is exchanged in an interest rate swap.', 'Pensare che in un interest rate swap si scambi il nozionale.'),
          t('Hedging a pending acquisition with a plain forward without considering the deal failing.', 'Coprire un’acquisizione in corso con un forward semplice senza considerare che possa saltare.'),
          t('Mixing up payer (pay fixed) and receiver (receive fixed) swaps.', 'Confondere payer swap (paga fisso) e receiver swap (riceve fisso).')
        ]
      },
      {
        type: 'summary',
        items: [
          t('IRS: exchange fixed vs floating on a notional; only net interest is paid.', 'IRS: scambio fisso contro variabile su un nozionale; si paga solo il netto.'),
          t('Pay-fixed swap + floating loan = fixed all-in cost (swap rate + margin).', 'Payer swap + prestito variabile = costo fisso complessivo (tasso swap + margine).'),
          t('Deal FX hedges: forward, option, deal-contingent forward (settles only on closing).', 'Coperture FX delle operazioni: forward, opzione, deal-contingent forward (si regola solo al closing).')
        ]
      }
    ],
    questions: [
      {
        id: 'fm-sw-q1',
        kind: 'numeric',
        topic: 'swaps',
        difficulty: 2,
        objective: t('Compute a net swap payment.', 'Calcolare il flusso netto di uno swap.'),
        prompt: t(
          'A company pays fixed 3.00% and receives Euribor on €100m (annual). Euribor sets at 3.50%. How much does the company receive net (€m)?',
          'Una società paga fisso 3,00% e riceve Euribor su €100m (annuale). L’Euribor viene fissato al 3,50%. Quanto incassa la società al netto (€m)?'
        ),
        answer: 0.5,
        unit: '€m',
        verify: { fn: 'product', args: [100, 0.005] },
        explanation: t('(3.50% − 3.00%) × €100m = €0.5m received. Only the net difference changes hands.', '(3,50% − 3,00%) × €100m = €0,5m incassati. Si scambia solo il differenziale netto.')
      },
      {
        id: 'fm-sw-q2',
        kind: 'numeric',
        topic: 'swaps',
        difficulty: 1,
        objective: t('Compute an all-in hedged borrowing cost.', 'Calcolare il costo complessivo coperto del debito.'),
        prompt: t(
          'A loan costs Euribor + 2.50%. The borrower swaps it with a pay-fixed swap at 3.00%. What is the all-in fixed cost (%)?',
          'Un prestito costa Euribor + 2,50%. Il debitore lo copre con un payer swap al 3,00%. Qual è il costo fisso complessivo (%)?'
        ),
        answer: 5.5,
        unit: '%',
        verify: { fn: 'sum', args: [3, 2.5] },
        explanation: t('Euribor paid on the loan and received on the swap cancel out, leaving 3.00% + 2.50% = 5.50%. The margin is not hedged away.', 'L’Euribor pagato sul prestito e ricevuto sullo swap si compensano, lasciando 3,00% + 2,50% = 5,50%. Il margine non viene eliminato dalla copertura.')
      },
      {
        id: 'fm-sw-q3',
        kind: 'mcq',
        topic: 'hedging',
        difficulty: 2,
        objective: t('Choose an FX hedge for a conditional deal.', 'Scegliere una copertura FX per un’operazione condizionata.'),
        prompt: t(
          'A buyer wants to lock in the FX rate on a cross-border acquisition with uncertain regulatory approval, without paying an upfront premium and without risk of settling if the deal fails. Best instrument?',
          'Un acquirente vuole bloccare il cambio su un’acquisizione cross-border con autorizzazioni incerte, senza pagare un premio anticipato e senza rischio di regolamento se l’operazione salta. Strumento migliore?'
        ),
        choices: [t('Plain FX forward', 'Forward FX semplice'), t('Bought FX option', 'Opzione FX acquistata'), t('Deal-contingent forward', 'Deal-contingent forward'), t('Pay-fixed interest rate swap', 'Payer interest rate swap')],
        correct: 2,
        explanation: t(
          'Only the deal-contingent forward meets all three conditions. A plain forward must settle even if the deal fails; an option requires a premium; an IRS hedges rates, not FX.',
          'Solo il deal-contingent forward soddisfa le tre condizioni. Un forward semplice va regolato anche se l’operazione salta; un’opzione richiede un premio; un IRS copre i tassi, non l’FX.'
        )
      },
      {
        id: 'fm-sw-q4',
        kind: 'numeric',
        topic: 'hedging',
        difficulty: 2,
        objective: t('Compute the hedged cost of foreign-currency consideration.', 'Calcolare il costo coperto di un corrispettivo in valuta.'),
        prompt: t(
          'A buyer locks in a 1-year forward EUR/USD of 1.1216 for $500m of consideration. What is the hedged euro cost (€m)?',
          'Un acquirente blocca un forward EUR/USD a 1 anno a 1,1216 per $500m di corrispettivo. Qual è il costo coperto in euro (€m)?'
        ),
        answer: 445.79,
        unit: '€m',
        tolerance: { abs: 0.1 },
        verify: { fn: 'ratio', args: [500, 1.1216] },
        explanation: t('500 / 1.1216 = €445.8m, fixed whatever happens to the spot rate before closing.', '500 / 1,1216 = €445,8m, fisso qualunque sia lo spot prima del closing.')
      }
    ],
    flashcards: [
      { id: 'fc-fm-sw-1', topic: 'swaps', front: t('Payer vs receiver swap?', 'Payer vs receiver swap?'), back: t('Payer: pay fixed, receive floating (gains if rates rise). Receiver: the opposite.', 'Payer: paga fisso, riceve variabile (guadagna se i tassi salgono). Receiver: l’opposto.') },
      { id: 'fc-fm-sw-2', topic: 'hedging', front: t('Deal-contingent forward?', 'Deal-contingent forward?'), back: t('FX forward that settles only if the M&A deal closes; contingency cost embedded in the rate.', 'Forward FX che si regola solo se l’operazione M&A arriva al closing; costo della contingenza incorporato nel cambio.') },
      { id: 'fc-fm-sw-3', topic: 'swaps', front: t('Is notional exchanged in an IRS?', 'Nell’IRS si scambia il nozionale?'), back: t('No — only net interest payments. (Cross-currency swaps do exchange principal.)', 'No — solo i flussi netti di interessi. (I cross-currency swap scambiano invece il capitale.)') },
      { id: 'fc-fm-sw-4', topic: 'hedging', front: t('Accounting framework for hedge accounting under IFRS?', 'Principio per l’hedge accounting secondo gli IFRS?'), back: t('IFRS 9 Financial Instruments.', 'IFRS 9 Strumenti finanziari.') }
    ],
    sources: [{ label: 'IFRS Foundation — IFRS 9 Financial Instruments (hedge accounting)', url: 'https://www.ifrs.org/issued-standards/list-of-standards/ifrs-9-financial-instruments/' }]
  },

  /* ============================ FM3 — fm-option-pricing ============================ */
  {
    id: 'fm-option-pricing',
    academyId: 'markets',
    moduleId: 'FM3',
    mode: 'deep',
    minutes: 14,
    difficulty: 3,
    reviewed: '2026-10',
    objective: t(
      'Explain volatility and how each Black–Scholes input affects option value, scale volatility over time, and price European options with Black–Scholes.',
      'Spiegare la volatilità e come ciascun input di Black–Scholes incide sul valore dell’opzione, riscalare la volatilità nel tempo e prezzare opzioni europee con Black–Scholes.'
    ),
    screens: [
      {
        type: 'intuition',
        title: t('Why uncertainty is valuable', 'Perché l’incertezza ha valore'),
        body: t(
          'An option holder’s downside is capped at the premium, but the upside is open. So the **more the stock could move**, the more the option is worth — big down moves cost the holder nothing extra, big up moves pay off handsomely.\n\nThat is why **volatility** is the key input in option pricing, and why options become more expensive when markets get nervous.',
          "Il rischio al ribasso di chi detiene un’opzione è limitato al premio, ma il rialzo è aperto. Quindi **più il titolo può muoversi**, più l’opzione vale — grandi ribassi non costano nulla in più al titolare, grandi rialzi rendono molto.\n\nPer questo la **volatilità** è l’input chiave nel pricing delle opzioni, e le opzioni diventano più care quando i mercati sono nervosi."
        )
      },
      {
        type: 'technical',
        title: t('Volatility', 'La volatilità'),
        body: t(
          '- **Historical (realised) volatility**: annualised standard deviation of past log returns.\n- **Implied volatility**: the volatility that, plugged into the model, reproduces the market option price — the market’s view of future uncertainty. The **VIX** index measures implied volatility on S&P 500 options.\n- Volatility scales with the **square root of time**: σ_T = σ_annual × √T. With ~252 trading days, daily σ ≈ annual σ / √252.',
          "- **Volatilità storica (realizzata)**: deviazione standard annualizzata dei rendimenti logaritmici passati.\n- **Volatilità implicita**: la volatilità che, inserita nel modello, riproduce il prezzo di mercato dell’opzione — la view del mercato sull’incertezza futura. L’indice **VIX** misura la volatilità implicita delle opzioni sull’S&P 500.\n- La volatilità scala con la **radice quadrata del tempo**: σ_T = σ_annua × √T. Con ~252 giorni di borsa, σ giornaliera ≈ σ annua / √252."
        )
      },
      {
        type: 'technical',
        title: t('The six inputs and their effects', 'I sei input e i loro effetti'),
        body: t('Effect of an increase in each input on a European option, all else equal:', 'Effetto di un aumento di ciascun input su un’opzione europea, a parità di altre condizioni:'),
        table: {
          headers: [t('Input ↑', 'Input ↑'), t('Call', 'Call'), t('Put', 'Put'), t('Why', 'Perché')],
          rows: [
            [t('Stock price S', 'Prezzo S'), '↑', '↓', t('Closer to / deeper in the money for calls', 'Più vicina / più dentro il denaro per le call')],
            [t('Strike K', 'Strike K'), '↓', '↑', t('Call pays S − K', 'La call paga S − K')],
            [t('Volatility σ', 'Volatilità σ'), '↑', '↑', t('More upside, capped downside', 'Più rialzo, ribasso limitato')],
            [t('Time T', 'Tempo T'), '↑', t('↑ (usually)', '↑ (di solito)'), t('More time for moves', 'Più tempo per i movimenti')],
            [t('Rate r', 'Tasso r'), '↑', '↓', t('PV of strike falls', 'Il VA dello strike scende')],
            [t('Dividend yield q', 'Dividend yield q'), '↓', '↑', t('Dividends lower the forward price', 'I dividendi abbassano il prezzo forward')]
          ]
        }
      },
      {
        type: 'formula',
        formulas: [
          {
            name: t('Black–Scholes (European call, dividend yield q)', 'Black–Scholes (call europea, dividend yield q)'),
            expr: 'C = S e^(−qT) N(d₁) − K e^(−rT) N(d₂)',
            vars: [
              { sym: 'd₁', desc: t('[ln(S/K) + (r − q + σ²/2)T] / (σ√T)', '[ln(S/K) + (r − q + σ²/2)T] / (σ√T)') },
              { sym: 'd₂', desc: t('d₁ − σ√T', 'd₁ − σ√T') },
              { sym: 'N(·)', desc: t('Standard normal cumulative distribution', 'Funzione di ripartizione normale standard') }
            ]
          },
          { name: t('European put', 'Put europea'), expr: 'P = K e^(−rT) N(−d₂) − S e^(−qT) N(−d₁)' },
          { name: t('Volatility scaling', 'Scalatura della volatilità'), expr: 'σ_period = σ_annual × √(period in years)' }
        ],
        note: t(
          'Assumptions: lognormal prices, constant volatility and rates, no arbitrage, frictionless markets, European exercise. Real markets show a volatility "smile/skew", so practitioners quote implied volatility by strike.',
          'Ipotesi: prezzi lognormali, volatilità e tassi costanti, assenza di arbitraggio, mercati senza frizioni, esercizio europeo. Nei mercati reali si osserva uno "smile/skew" di volatilità, quindi gli operatori quotano la volatilità implicita per strike.'
        )
      },
      {
        type: 'example',
        title: t('Pricing an ATM option', 'Prezzare un’opzione ATM'),
        body: t('S = €100, K = €100, T = 1 year, r = 5% (continuous), no dividends.', 'S = €100, K = €100, T = 1 anno, r = 5% (continuo), nessun dividendo.'),
        table: {
          headers: [t('Volatility', 'Volatilità'), t('Call', 'Call'), t('Put', 'Put'), t('C − P', 'C − P')],
          rows: [
            ['20%', '€10.45', '€5.57', '€4.88'],
            ['30%', '€14.23', '€9.35', '€4.88']
          ]
        }
      },
      {
        type: 'realworld',
        body: t(
          'In banking, Black–Scholes is used to value employee options and warrants, the option component of convertibles, and to price the call spreads and hedges sold alongside equity-linked deals. Under IFRS 2, share-based payments are measured at grant-date fair value using an option pricing model.\n\nNote in the example that C − P stays at €4.88 when volatility rises: put–call parity holds whatever the volatility.',
          "In banca Black–Scholes si usa per valutare stock option e warrant, la componente opzionale delle convertibili e per prezzare i call spread e le coperture associati alle operazioni equity-linked. Secondo l’IFRS 2 i pagamenti basati su azioni si misurano al fair value alla data di assegnazione con un modello di pricing delle opzioni.\n\nNell’esempio C − P resta a €4,88 quando la volatilità sale: la parità put–call vale qualunque sia la volatilità."
        )
      },
      { type: 'exercise', questionId: 'fm-op-q1' },
      { type: 'exercise', questionId: 'fm-op-q2' },
      { type: 'exercise', questionId: 'fm-op-q3' },
      { type: 'exercise', questionId: 'fm-op-q4' },
      {
        type: 'interview',
        question: t('What happens to the value of a call option if volatility increases? And a put?', 'Cosa succede al valore di una call se la volatilità aumenta? E di una put?'),
        answer: t(
          'Both increase. The holder of any long option has limited downside — the premium — but benefits from large favourable moves. Higher volatility makes large moves in both directions more likely; the unfavourable ones are capped at zero payoff while the favourable ones pay more. So both calls and puts gain value; it is the one input that moves them in the same direction.',
          "Aumentano entrambe. Chi detiene un’opzione ha un ribasso limitato — il premio — ma beneficia dei grandi movimenti favorevoli. Più volatilità rende più probabili grandi movimenti in entrambe le direzioni; quelli sfavorevoli hanno payoff limitato a zero, quelli favorevoli pagano di più. Quindi call e put si apprezzano; è l’unico input che le muove nella stessa direzione."
        )
      },
      {
        type: 'mistakes',
        items: [
          t('Scaling volatility linearly with time instead of with √T.', 'Scalare la volatilità linearmente con il tempo invece che con √T.'),
          t('Saying higher volatility lowers put values.', 'Dire che una volatilità più alta riduce il valore delle put.'),
          t('Applying Black–Scholes directly to American options on dividend-paying stocks, where early exercise may matter.', 'Applicare Black–Scholes direttamente alle opzioni americane su titoli che pagano dividendi, dove l’esercizio anticipato può contare.')
        ]
      },
      {
        type: 'summary',
        items: [
          t('Inputs: S, K, T, r, σ, q; σ is the key unobservable — implied vol.', 'Input: S, K, T, r, σ, q; σ è l’unico non osservabile — volatilità implicita.'),
          t('Higher σ and T raise both calls and puts (European puts: usually).', 'σ e T più alti aumentano call e put (put europee: di solito).'),
          t('σ scales with √T.', 'σ scala con √T.'),
          t('Black–Scholes call: C = S e^(−qT) N(d₁) − K e^(−rT) N(d₂).', 'Call con Black–Scholes: C = S e^(−qT) N(d₁) − K e^(−rT) N(d₂).')
        ]
      }
    ],
    questions: [
      {
        id: 'fm-op-q1',
        kind: 'numeric',
        topic: 'option-pricing',
        difficulty: 3,
        objective: t('Price a European call with Black–Scholes.', 'Prezzare una call europea con Black–Scholes.'),
        prompt: t(
          'S = €100, K = €100, T = 1 year, r = 5% (continuous), σ = 20%, no dividends. What is the Black–Scholes call value (€)?',
          'S = €100, K = €100, T = 1 anno, r = 5% (continuo), σ = 20%, nessun dividendo. Qual è il valore Black–Scholes della call (€)?'
        ),
        answer: 10.45,
        unit: '€',
        tolerance: { rel: 0.01 },
        verify: { fn: 'blackScholes', args: ['call', 100, 100, 0.05, 0.2, 1] },
        steps: [
          t('d₁ = [0 + (0.05 + 0.02) × 1] / 0.20 = 0.35; d₂ = 0.15', 'd₁ = [0 + (0,05 + 0,02) × 1] / 0,20 = 0,35; d₂ = 0,15'),
          t('N(d₁) = 0.6368; N(d₂) = 0.5596', 'N(d₁) = 0,6368; N(d₂) = 0,5596'),
          t('C = 100 × 0.6368 − 100 × e^(−0.05) × 0.5596 = 63.68 − 53.23 = 10.45', 'C = 100 × 0,6368 − 100 × e^(−0,05) × 0,5596 = 63,68 − 53,23 = 10,45')
        ],
        explanation: t('The ATM call is worth about €10.45 — all time value, since intrinsic value is zero.', 'La call ATM vale circa €10,45 — tutto valore temporale, dato che il valore intrinseco è zero.')
      },
      {
        id: 'fm-op-q2',
        kind: 'numeric',
        topic: 'option-pricing',
        difficulty: 3,
        objective: t('Price a European put with Black–Scholes.', 'Prezzare una put europea con Black–Scholes.'),
        prompt: t(
          'Same inputs (S = K = €100, T = 1, r = 5%, σ = 20%). What is the Black–Scholes put value (€)?',
          'Stessi input (S = K = €100, T = 1, r = 5%, σ = 20%). Qual è il valore Black–Scholes della put (€)?'
        ),
        answer: 5.57,
        unit: '€',
        tolerance: { rel: 0.01 },
        verify: { fn: 'blackScholes', args: ['put', 100, 100, 0.05, 0.2, 1] },
        explanation: t(
          'Quick route via parity: P = C − S + K e^(−rT) = 10.45 − 100 + 95.12 = €5.57. Lower than the call because positive rates reduce the PV of the strike.',
          'Via rapida con la parità: P = C − S + K e^(−rT) = 10,45 − 100 + 95,12 = €5,57. Inferiore alla call perché tassi positivi riducono il VA dello strike.'
        )
      },
      {
        id: 'fm-op-q3',
        kind: 'numeric',
        topic: 'volatility',
        difficulty: 2,
        objective: t('Scale volatility with the square root of time.', 'Riscalare la volatilità con la radice quadrata del tempo.'),
        prompt: t(
          'A stock has 20% annual volatility. Assuming 252 trading days, what is its approximate daily volatility (%)? (√252 ≈ 15.87)',
          'Un titolo ha volatilità annua del 20%. Ipotizzando 252 giorni di borsa, qual è la volatilità giornaliera approssimativa (%)? (√252 ≈ 15,87)'
        ),
        answer: 1.26,
        unit: '%',
        tolerance: { abs: 0.01 },
        verify: { fn: 'ratio', args: [20, 15.8745] },
        explanation: t('20% / √252 = 20 / 15.87 = 1.26%. Dividing by 252 (0.08%) wrongly scales volatility linearly.', '20% / √252 = 20 / 15,87 = 1,26%. Dividere per 252 (0,08%) scala erroneamente la volatilità in modo lineare.')
      },
      {
        id: 'fm-op-q4',
        kind: 'multi',
        topic: 'option-pricing',
        difficulty: 2,
        objective: t('Know the direction of each input’s effect.', 'Conoscere la direzione dell’effetto di ciascun input.'),
        prompt: t('Which changes increase the value of a European call, all else equal? Select all that apply.', 'Quali variazioni aumentano il valore di una call europea, a parità di altre condizioni? Seleziona tutte le risposte corrette.'),
        choices: [
          t('Higher volatility', 'Volatilità più alta'),
          t('Higher strike price', 'Strike più alto'),
          t('Higher risk-free rate', 'Tasso privo di rischio più alto'),
          t('Higher dividend yield', 'Dividend yield più alto'),
          t('Higher stock price', 'Prezzo dell’azione più alto')
        ],
        correct: [0, 2, 4],
        explanation: t('Volatility, rates and the stock price raise call value. A higher strike reduces the payoff; dividends lower the expected forward price of the stock.', 'Volatilità, tassi e prezzo dell’azione aumentano il valore della call. Uno strike più alto riduce il payoff; i dividendi abbassano il prezzo forward atteso del titolo.')
      },
      {
        id: 'fm-op-q5',
        kind: 'numeric',
        topic: 'option-pricing',
        difficulty: 3,
        objective: t('Price an OTM call.', 'Prezzare una call OTM.'),
        prompt: t(
          'S = €50, K = €55, T = 6 months, r = 3% (continuous), σ = 25%, no dividends. What is the Black–Scholes call value (€)?',
          'S = €50, K = €55, T = 6 mesi, r = 3% (continuo), σ = 25%, nessun dividendo. Qual è il valore Black–Scholes della call (€)?'
        ),
        answer: 1.95,
        unit: '€',
        tolerance: { rel: 0.01 },
        verify: { fn: 'blackScholes', args: ['call', 50, 55, 0.03, 0.25, 0.5] },
        explanation: t(
          'd₁ = [ln(50/55) + (0.03 + 0.03125) × 0.5] / (0.25 × 0.7071) ≈ −0.366; d₂ ≈ −0.543. C ≈ 50 × 0.357 − 55 × e^(−0.015) × 0.294 ≈ €1.95. An OTM option is pure time value.',
          'd₁ = [ln(50/55) + (0,03 + 0,03125) × 0,5] / (0,25 × 0,7071) ≈ −0,366; d₂ ≈ −0,543. C ≈ 50 × 0,357 − 55 × e^(−0,015) × 0,294 ≈ €1,95. Un’opzione OTM è puro valore temporale.'
        )
      }
    ],
    flashcards: [
      { id: 'fc-fm-op-1', topic: 'volatility', front: t('Implied vs historical volatility?', 'Volatilità implicita vs storica?'), back: t('Implied: backed out from option prices (forward-looking). Historical: measured from past returns.', 'Implicita: ricavata dai prezzi delle opzioni (prospettica). Storica: misurata sui rendimenti passati.') },
      { id: 'fc-fm-op-2', topic: 'volatility', front: t('How does volatility scale with time?', 'Come scala la volatilità con il tempo?'), back: t('With the square root of time: σ_T = σ × √T.', 'Con la radice quadrata del tempo: σ_T = σ × √T.') },
      { id: 'fc-fm-op-3', topic: 'option-pricing', front: t('Six Black–Scholes inputs?', 'I sei input di Black–Scholes?'), back: t('Spot, strike, time to expiry, risk-free rate, volatility, dividend yield.', 'Spot, strike, tempo a scadenza, tasso privo di rischio, volatilità, dividend yield.') },
      { id: 'fc-fm-op-4', topic: 'option-pricing', front: t('Effect of higher rates on calls and puts?', 'Effetto di tassi più alti su call e put?'), back: t('Calls up, puts down (PV of strike falls).', 'Call in rialzo, put in calo (il VA dello strike scende).') }
    ],
    sources: [{ label: 'IFRS Foundation — IFRS 2 Share-based Payment', url: 'https://www.ifrs.org/issued-standards/list-of-standards/ifrs-2-share-based-payment/' }]
  }
];
