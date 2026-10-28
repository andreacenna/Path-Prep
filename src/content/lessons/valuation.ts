import type { L, Lesson } from '../types';

/**
 * Academy 3 — Valuation (modules V1–V5).
 */

const l = (en: string, it: string): L => ({ en, it });

const IFRS16 = { label: 'IFRS Foundation — IFRS 16 Leases', url: 'https://www.ifrs.org/issued-standards/list-of-standards/ifrs-16-leases/' };
const IAS33 = { label: 'IFRS Foundation — IAS 33 Earnings per Share', url: 'https://www.ifrs.org/issued-standards/list-of-standards/ias-33-earnings-per-share/' };
const IFRS17 = { label: 'IFRS Foundation — IFRS 17 Insurance Contracts', url: 'https://www.ifrs.org/issued-standards/list-of-standards/ifrs-17-insurance-contracts/' };
const BASEL3 = { label: 'Bank for International Settlements — Basel III framework', url: 'https://www.bis.org/bcbs/basel3.htm' };

export const lessons: Lesson[] = [
  /* ======================================================================= */
  /* V1 — val-ev-equity                                                       */
  /* ======================================================================= */
  {
    id: 'val-ev-equity',
    academyId: 'valuation',
    moduleId: 'V1',
    mode: 'quick',
    minutes: 6,
    difficulty: 1,
    reviewed: '2026-10',
    objective: l(
      'Distinguish enterprise value from equity value, compute one from the other and explain which transactions change each.',
      "Distinguere l'enterprise value dall'equity value, calcolare l'uno dall'altro e spiegare quali operazioni modificano ciascuno."
    ),
    screens: [
      {
        type: 'intuition',
        title: l('Buying a house with a mortgage', 'Comprare casa con un mutuo'),
        body: l(
          'A house is worth €500k. It carries a €300k mortgage and there is €20k of cash in a drawer. What do you pay the owner?\n\nYou pay for the **house** (€500k), take over the mortgage (−€300k) and keep the cash (+€20k): the owner receives **€220k**.\n\n- The €500k is the value of the **operating asset** → like **enterprise value (EV)**.\n- The €220k is what belongs to the **owner** → like **equity value**.',
          "Una casa vale €500k. Ha un mutuo di €300k e in un cassetto ci sono €20k in contanti. Quanto paghi al proprietario?\n\nPaghi la **casa** (€500k), ti accolli il mutuo (−€300k) e tieni i contanti (+€20k): il proprietario incassa **€220k**.\n\n- I €500k sono il valore dell'**attività operativa** → come l'**enterprise value (EV)**.\n- I €220k sono ciò che spetta al **proprietario** → come l'**equity value**."
        )
      },
      {
        type: 'technical',
        title: l('Two values, two audiences', 'Due valori, due platee'),
        body: l(
          '- **Enterprise value** = value of the core operating business to **all** capital providers (lenders, preferred holders, minority shareholders and common shareholders).\n- **Equity value** = value attributable to **common shareholders** only. For a listed company: diluted shares × share price (market capitalisation).\n\nEV is **capital-structure neutral**: two identical businesses financed differently have the same EV but different equity values.',
          "- **Enterprise value** = valore del business operativo per **tutti** i finanziatori (banche e obbligazionisti, azionisti privilegiati, soci di minoranza e azionisti ordinari).\n- **Equity value** = valore di spettanza dei soli **azionisti ordinari**. Per una quotata: azioni diluite × prezzo (capitalizzazione di borsa).\n\nL'EV è **neutrale rispetto alla struttura finanziaria**: due business identici finanziati in modo diverso hanno lo stesso EV ma equity value diversi."
        )
      },
      {
        type: 'formula',
        formulas: [
          {
            name: l('Simple bridge', 'Ponte semplificato'),
            expr: 'Enterprise value = Equity value + Debt − Cash',
            vars: [
              { sym: 'Equity value', desc: l('Diluted shares × share price', 'Azioni diluite × prezzo per azione') },
              { sym: 'Debt − Cash', desc: l('Net debt (net financial position)', 'Indebitamento netto (posizione finanziaria netta)') }
            ]
          },
          {
            name: l('Reverse', 'Al contrario'),
            expr: 'Equity value = Enterprise value − Net debt'
          }
        ],
        note: l(
          'The full bridge also adds preferred equity, non-controlling interests and debt-like items and subtracts non-operating assets — see the next lesson.',
          'Il ponte completo aggiunge anche azioni privilegiate, interessenze di terzi e voci assimilabili al debito, e sottrae le attività non operative — vedi la prossima lezione.'
        )
      },
      {
        type: 'example',
        title: l('Alfa S.p.A.', 'Alfa S.p.A.'),
        body: l(
          'Alfa trades at €12.00 with 50m diluted shares. It has €250m of bank debt and €50m of cash.',
          'Alfa quota €12,00 con 50m di azioni diluite. Ha €250m di debito bancario e €50m di cassa.'
        ),
        table: {
          headers: [l('Item', 'Voce'), l('€m', '€m')],
          rows: [
            [l('Equity value (12.00 × 50)', 'Equity value (12,00 × 50)'), '600'],
            [l('+ Debt', '+ Debito'), '250'],
            [l('− Cash', '− Cassa'), '(50)'],
            [l('Enterprise value', 'Enterprise value'), '800']
          ],
          totalRows: [3]
        }
      },
      {
        type: 'technical',
        title: l('What moves EV — and what does not', "Cosa muove l'EV — e cosa no"),
        body: l(
          'Pure **financing** transactions change equity value but **not** EV:\n\n- Issue €100m of shares for cash: equity +100, cash +100 → EV unchanged.\n- Raise €100m of debt and hold the cash: debt +100, cash +100 → EV and equity unchanged.\n- Pay a €20m dividend: cash −20, equity value −20 → EV unchanged.\n\nEV changes only when the **operating business** changes — e.g. buying another company or a factory (EV rises by the value of the operating assets acquired).',
          "Le operazioni puramente **finanziarie** modificano l'equity value ma **non** l'EV:\n\n- Aumento di capitale di €100m: equity +100, cassa +100 → EV invariato.\n- Nuovo debito per €100m tenuto in cassa: debito +100, cassa +100 → EV ed equity invariati.\n- Dividendo di €20m: cassa −20, equity value −20 → EV invariato.\n\nL'EV cambia solo se cambia il **business operativo** — ad esempio con l'acquisto di un'altra società o di uno stabilimento (l'EV aumenta del valore delle attività operative acquisite)."
        )
      },
      {
        type: 'realworld',
        body: l(
          'In a sale process, bidders submit offers on a **cash-free, debt-free** basis: they bid an **enterprise value** for the business, and the seller receives that EV minus net debt (plus or minus working-capital adjustments) at closing. Analysts spend a lot of time on the EV-to-equity bridge because every euro of debt-like item found in diligence comes straight out of the seller’s proceeds.',
          "Nei processi di vendita le offerte sono formulate su base **cash-free, debt-free**: l'offerente propone un **enterprise value** e il venditore incassa al closing quell'EV meno la posizione finanziaria netta (più o meno gli aggiustamenti di capitale circolante). Gli analisti dedicano molto tempo al ponte EV–equity perché ogni euro di voce assimilabile al debito trovata in due diligence riduce direttamente l'incasso del venditore."
        )
      },
      { type: 'exercise', questionId: 'val-eve-q1' },
      { type: 'exercise', questionId: 'val-eve-q3' },
      { type: 'exercise', questionId: 'val-eve-q4' },
      {
        type: 'interview',
        question: l(
          'A company issues €200m of new shares and keeps the proceeds as cash. What happens to its equity value and enterprise value?',
          "Una società emette nuove azioni per €200m e tiene i proventi in cassa. Cosa succede a equity value ed enterprise value?"
        ),
        answer: l(
          'Equity value rises by €200m because there are more shares outstanding at (in theory) the same price. Enterprise value is unchanged: we add €200m of equity but subtract €200m of extra cash, and the operating business has not changed. EV only moves if the cash is then invested in operating assets.',
          "L'equity value aumenta di €200m perché ci sono più azioni in circolazione allo stesso prezzo (in teoria). L'enterprise value resta invariato: aggiungiamo €200m di equity ma sottraiamo €200m di cassa in più, e il business operativo non è cambiato. L'EV si muove solo se la cassa viene poi investita in attività operative."
        )
      },
      {
        type: 'mistakes',
        items: [
          l('Saying a share issuance increases EV. Only equity value rises; the cash offsets it.', "Dire che un aumento di capitale fa crescere l'EV. Aumenta solo l'equity value; la cassa lo compensa."),
          l('Using basic instead of diluted shares for equity value.', "Usare le azioni base invece di quelle diluite per l'equity value."),
          l('Using book value of equity instead of market value for a listed company.', 'Usare il patrimonio netto contabile invece del valore di mercato per una società quotata.'),
          l('Thinking a highly levered company is "cheaper" because its market cap is small — compare EVs.', 'Pensare che una società molto indebitata sia "più economica" perché ha una capitalizzazione bassa — bisogna confrontare gli EV.')
        ]
      },
      {
        type: 'summary',
        items: [
          l('EV = value of operations to all capital providers; equity value = value to common shareholders.', "EV = valore dell'attività operativa per tutti i finanziatori; equity value = valore per gli azionisti ordinari."),
          l('EV = Equity value + Net debt (simplified).', 'EV = Equity value + Posizione finanziaria netta (semplificato).'),
          l('Financing transactions change equity value, not EV.', "Le operazioni di finanziamento cambiano l'equity value, non l'EV."),
          l('M&A offers are usually expressed cash-free, debt-free, i.e. as an EV.', "Le offerte M&A sono di norma cash-free, debt-free, cioè espresse come EV.")
        ]
      }
    ],
    questions: [
      {
        id: 'val-eve-q1',
        kind: 'numeric',
        topic: 'enterprise-value',
        difficulty: 1,
        objective: l('Compute enterprise value from market data.', "Calcolare l'enterprise value da dati di mercato."),
        prompt: l(
          'Beta S.p.A. has equity value of €600m, debt of €250m and cash of €50m. What is its enterprise value (€m)?',
          "Beta S.p.A. ha un equity value di €600m, debito per €250m e cassa per €50m. Qual è l'enterprise value (€m)?"
        ),
        answer: 800,
        unit: '€m',
        verify: { fn: 'enterpriseValue', args: [600, 250, 50] },
        explanation: l(
          'EV = 600 + 250 − 50 = 800. Cash is subtracted because a buyer of the whole company effectively gets it back; adding cash (650 + …) is the classic sign error.',
          "EV = 600 + 250 − 50 = 800. La cassa si sottrae perché chi compra l'intera società di fatto la recupera; sommarla è il classico errore di segno."
        )
      },
      {
        id: 'val-eve-q2',
        kind: 'mcq',
        topic: 'enterprise-value',
        difficulty: 1,
        objective: l('Identify the effect of a dividend on EV and equity value.', "Individuare l'effetto di un dividendo su EV ed equity value."),
        prompt: l(
          'A company pays a €30m cash dividend. Ignoring market signalling, what happens?',
          "Una società paga un dividendo di €30m in contanti. Ignorando effetti segnaletici, cosa succede?"
        ),
        choices: [
          l('EV −30, equity value −30', 'EV −30, equity value −30'),
          l('EV unchanged, equity value unchanged', 'EV invariato, equity value invariato'),
          l('EV unchanged, equity value −30', 'EV invariato, equity value −30'),
          l('EV +30, equity value unchanged', 'EV +30, equity value invariato')
        ],
        correct: 2,
        explanation: l(
          'Cash leaves the company to shareholders: equity value falls by 30, but net debt rises by 30 (less cash), so EV = equity + net debt is unchanged. Shareholders are no worse off overall — they now hold the €30m directly.',
          "La cassa esce verso gli azionisti: l'equity value scende di 30, ma la posizione finanziaria netta peggiora di 30 (meno cassa), quindi EV = equity + PFN resta invariato. Nel complesso gli azionisti non perdono nulla — ora detengono direttamente i €30m."
        )
      },
      {
        id: 'val-eve-q3',
        kind: 'multi',
        topic: 'enterprise-value',
        difficulty: 2,
        objective: l('Recognise which transactions change enterprise value.', "Riconoscere quali operazioni modificano l'enterprise value."),
        prompt: l('Which transactions change enterprise value? Select all that apply.', "Quali operazioni modificano l'enterprise value? Seleziona tutte le risposte corrette."),
        choices: [
          l('Repaying €50m of debt with cash', 'Rimborso di €50m di debito con la cassa'),
          l('Acquiring a competitor for €300m in cash', "Acquisizione di un concorrente per €300m in contanti"),
          l('Issuing €100m of bonds and keeping the cash', 'Emissione di €100m di obbligazioni tenendo la cassa'),
          l('Buying a new factory with newly issued shares', 'Acquisto di un nuovo stabilimento con azioni di nuova emissione'),
          l('A share buyback funded with cash', 'Riacquisto di azioni proprie con la cassa')
        ],
        correct: [1, 3],
        explanation: l(
          'EV changes when operating assets change: an acquisition and a new factory both add operating value (EV rises by the value acquired, however financed). Debt repayment, bond issuance and buybacks only reshuffle claims and cash, so EV is unchanged.',
          "L'EV cambia quando cambiano le attività operative: l'acquisizione e il nuovo stabilimento aggiungono valore operativo (l'EV sale del valore acquisito, comunque finanziato). Rimborso del debito, emissione obbligazionaria e buyback rimescolano solo diritti e cassa, quindi l'EV non cambia."
        )
      },
      {
        id: 'val-eve-q4',
        kind: 'numeric',
        topic: 'enterprise-value',
        difficulty: 2,
        objective: l('Move from EV to a value per share.', "Passare dall'EV al valore per azione."),
        prompt: l(
          'You value Gamma S.r.l. at an EV of €1,200m. Debt is €400m, cash €100m and there are 60m diluted shares. What is the implied value per share (€)?',
          "Valuti Gamma S.r.l. a un EV di €1.200m. Il debito è €400m, la cassa €100m e le azioni diluite sono 60m. Qual è il valore implicito per azione (€)?"
        ),
        answer: 15,
        unit: '€',
        verify: { fn: 'impliedSharePrice', args: [1200, 300, 60] },
        steps: [
          l('Net debt = 400 − 100 = 300', 'PFN = 400 − 100 = 300'),
          l('Equity value = 1,200 − 300 = 900', 'Equity value = 1.200 − 300 = 900'),
          l('Per share = 900 / 60 = €15.00', 'Per azione = 900 / 60 = €15,00')
        ],
        explanation: l(
          'Equity value = EV − net debt = 900; dividing by 60m diluted shares gives €15.00. Dividing EV directly by shares (€20) ignores lenders’ claim.',
          "Equity value = EV − PFN = 900; diviso 60m di azioni diluite fa €15,00. Dividere direttamente l'EV per le azioni (€20) ignora il diritto dei finanziatori."
        )
      },
      {
        id: 'val-eve-q5',
        kind: 'mcq',
        topic: 'enterprise-value',
        difficulty: 2,
        objective: l('Explain why EV is preferred for comparing companies.', "Spiegare perché l'EV è preferito per confrontare società."),
        prompt: l(
          'Two firms have identical operations; one is debt-free, the other has €500m of net debt. Which statement is true?',
          "Due società hanno operazioni identiche; una è senza debito, l'altra ha €500m di PFN. Quale affermazione è vera?"
        ),
        choices: [
          l('They should have the same EV but different equity values', 'Dovrebbero avere lo stesso EV ma equity value diversi'),
          l('They should have the same equity value but different EVs', 'Dovrebbero avere lo stesso equity value ma EV diversi'),
          l('The levered firm must have a higher EV', 'La società indebitata deve avere un EV più alto'),
          l('Neither value can be compared', 'Nessuno dei due valori è confrontabile')
        ],
        correct: 0,
        explanation: l(
          'EV values the operations regardless of financing (ignoring second-order effects like tax shields and distress costs). The levered firm’s shareholders own €500m less of that value.',
          "L'EV valuta l'attività operativa a prescindere dal finanziamento (ignorando effetti di secondo ordine come scudo fiscale e costi di dissesto). Gli azionisti della società indebitata possiedono €500m in meno di quel valore."
        )
      }
    ],
    flashcards: [
      { id: 'fc-val-eve-1', topic: 'enterprise-value', front: l('Define enterprise value.', 'Definisci l’enterprise value.'), back: l('Value of the core operating business to all capital providers; simplified: equity value + net debt.', "Valore del business operativo per tutti i finanziatori; semplificato: equity value + PFN.") },
      { id: 'fc-val-eve-2', topic: 'enterprise-value', front: l('Equity value of a listed company?', 'Equity value di una società quotata?'), back: l('Diluted shares outstanding × current share price.', 'Azioni diluite in circolazione × prezzo corrente.') },
      { id: 'fc-val-eve-3', topic: 'enterprise-value', front: l('Does issuing shares for cash change EV?', 'Un aumento di capitale in denaro cambia l’EV?'), back: l('No. Equity value rises, but so does cash; EV is unchanged.', "No. Sale l'equity value, ma sale anche la cassa; l'EV resta invariato.") },
      { id: 'fc-val-eve-4', topic: 'enterprise-value', front: l('What does "cash-free, debt-free" mean in an offer?', 'Cosa significa "cash-free, debt-free" in un’offerta?'), back: l('The bid is an EV; the seller receives EV minus net debt (± NWC adjustments).', "L'offerta è un EV; il venditore incassa l'EV meno la PFN (± aggiustamenti di circolante).") }
    ]
  },
  /* ======================================================================= */
  /* V1 — val-bridge                                                          */
  /* ======================================================================= */
  {
    id: 'val-bridge',
    academyId: 'valuation',
    moduleId: 'V1',
    mode: 'deep',
    minutes: 12,
    difficulty: 2,
    reviewed: '2026-10',
    objective: l(
      'Build a complete EV-to-equity bridge, justify the treatment of each item and keep EV consistent with the metric it is divided by.',
      "Costruire un ponte EV–equity completo, giustificare il trattamento di ogni voce e mantenere l'EV coerente con la metrica a cui viene rapportato."
    ),
    screens: [
      {
        type: 'intuition',
        title: l('Who else has a claim?', 'Chi altro vanta un diritto?'),
        body: l(
          'EV is the pie produced by the operating business. Before common shareholders eat, everyone else with a **senior or parallel claim** takes their slice: lenders, lessors, preferred shareholders, pension members, minority shareholders in subsidiaries.\n\nAnd if the company owns things that are **not** part of the operating pie (cash, stakes in associates, idle land), shareholders get those on top.\n\nThe bridge is simply a list of those slices.',
          "L'EV è la torta prodotta dal business operativo. Prima che mangino gli azionisti ordinari, tutti gli altri con un **diritto prioritario o parallelo** prendono la loro fetta: banche e obbligazionisti, locatori, azionisti privilegiati, dipendenti con fondi pensione, soci di minoranza delle controllate.\n\nE se la società possiede beni che **non** fanno parte della torta operativa (cassa, partecipazioni in collegate, terreni inutilizzati), gli azionisti li ottengono in più.\n\nIl ponte è semplicemente l'elenco di queste fette."
        )
      },
      {
        type: 'technical',
        title: l('Items added to go from equity to EV', "Voci da sommare per passare dall'equity all'EV"),
        body: l(
          '- **Gross financial debt**: loans, bonds, drawn revolver (ideally at market value).\n- **Lease liabilities** (IFRS 16) — only if EBITDA is post-IFRS 16 (see consistency rule).\n- **Preferred equity**: a fixed, senior claim ahead of common shareholders.\n- **Non-controlling interests (NCI)**: consolidated EBITDA includes 100% of subsidiaries you only partly own, so EV must include the minorities’ share.\n- **Debt-like items**: unfunded pension deficits, certain provisions, deferred consideration, factoring — judgement per deal.',
          "- **Debito finanziario lordo**: finanziamenti, bond, linee revolving utilizzate (idealmente a valore di mercato).\n- **Passività per leasing** (IFRS 16) — solo se l'EBITDA è post-IFRS 16 (vedi regola di coerenza).\n- **Azioni privilegiate**: un diritto fisso e prioritario rispetto agli ordinari.\n- **Interessenze di terzi (NCI)**: l'EBITDA consolidato include il 100% delle controllate possedute solo in parte, quindi l'EV deve includere la quota dei terzi.\n- **Voci assimilabili al debito**: deficit dei fondi pensione, alcuni fondi rischi, prezzi differiti, factoring — valutazione caso per caso."
        )
      },
      {
        type: 'technical',
        title: l('Items subtracted', 'Voci da sottrarre'),
        body: l(
          '- **Cash and cash equivalents** (arguably only excess cash above operating needs; in practice most banks deduct all reported cash, adjusting for trapped or restricted cash).\n- **Equity-method investments (associates, JVs)**: their profits sit **below** EBITDA (share of profit of associates), so their value is not in the EV that an EV/EBITDA multiple captures — subtract them.\n- **Other non-operating assets**: listed stakes, assets held for sale, surplus real estate.\n\nThe principle: **an item belongs in EV only if the cash flows or earnings it generates are in the metric you are valuing.**',
          "- **Cassa e mezzi equivalenti** (in teoria solo la cassa in eccesso rispetto ai fabbisogni operativi; nella prassi molte banche sottraggono tutta la cassa di bilancio, rettificando quella vincolata o non disponibile).\n- **Partecipazioni valutate a equity (collegate, JV)**: i loro utili stanno **sotto** l'EBITDA (quota di risultato delle collegate), quindi il loro valore non è nell'EV catturato da un multiplo EV/EBITDA — vanno sottratte.\n- **Altre attività non operative**: partecipazioni quotate, attività destinate alla vendita, immobili non strumentali.\n\nIl principio: **una voce sta nell'EV solo se i flussi o gli utili che genera sono nella metrica che stai valutando.**"
        )
      },
      {
        type: 'formula',
        formulas: [
          {
            name: l('Full bridge', 'Ponte completo'),
            expr: 'EV = Equity value + Debt + Leases + Preferred + NCI + Debt-like items − Cash − Equity-method investments − Other non-operating assets'
          },
          {
            name: l('Reverse bridge', 'Ponte inverso'),
            expr: 'Equity value = EV − Debt − Leases − Preferred − NCI − Debt-like items + Cash + Non-operating assets'
          }
        ],
        note: l(
          'Use market values where available (listed preferred, listed minority stakes, traded bonds); book values are the usual fallback.',
          'Usa valori di mercato dove disponibili (privilegiate quotate, partecipazioni di minoranza quotate, bond negoziati); altrimenti si usano i valori di libro.'
        )
      },
      {
        type: 'technical',
        title: l('IFRS 16: keep numerator and denominator consistent', 'IFRS 16: coerenza tra numeratore e denominatore'),
        body: l(
          'Under **IFRS 16** (effective for periods beginning on or after 1 January 2019) lessees recognise almost all leases on balance sheet: rent disappears from operating costs and is replaced by depreciation and interest. So reported EBITDA is **higher**.\n\n- **Post-IFRS 16 EBITDA** (before lease costs) → **include** lease liabilities in EV.\n- **Pre-IFRS 16 EBITDA** (after rent) → **exclude** lease liabilities from EV.\n\nUnder **US GAAP (ASC 842)** operating-lease cost stays in operating expenses, so US EBITDA resembles pre-IFRS 16 EBITDA — adjust when mixing US and IFRS peers.',
          "Con l'**IFRS 16** (in vigore dagli esercizi che iniziano dal 1° gennaio 2019) il locatario iscrive in bilancio quasi tutti i leasing: il canone sparisce dai costi operativi ed è sostituito da ammortamento e interessi. L'EBITDA riportato è quindi **più alto**.\n\n- **EBITDA post-IFRS 16** (prima dei costi di leasing) → **includi** le passività per leasing nell'EV.\n- **EBITDA pre-IFRS 16** (dopo i canoni) → **escludi** le passività per leasing dall'EV.\n\nIn **US GAAP (ASC 842)** il costo dei leasing operativi resta tra i costi operativi, quindi l'EBITDA americano somiglia a quello pre-IFRS 16 — rettifica quando mischi comparabili US e IFRS."
        )
      },
      {
        type: 'example',
        title: l('Delta Group bridge (€m)', 'Ponte di Delta Group (€m)'),
        body: l(
          'Delta reports post-IFRS 16 EBITDA, so leases go in. It owns 30% of an associate (book value €90m) and 80% of a consolidated subsidiary (NCI €120m).',
          "Delta riporta un EBITDA post-IFRS 16, quindi i leasing entrano nel ponte. Detiene il 30% di una collegata (valore di libro €90m) e l'80% di una controllata consolidata (terzi €120m)."
        ),
        table: {
          headers: [l('Item', 'Voce'), l('€m', '€m')],
          rows: [
            [l('Market capitalisation (diluted)', 'Capitalizzazione (diluita)'), '2,000'],
            [l('+ Financial debt', '+ Debito finanziario'), '700'],
            [l('+ Lease liabilities (IFRS 16)', '+ Passività per leasing (IFRS 16)'), '150'],
            [l('+ Unfunded pension deficit', '+ Deficit fondo pensione'), '80'],
            [l('+ Preferred shares', '+ Azioni privilegiate'), '100'],
            [l('+ Non-controlling interests', '+ Interessenze di terzi'), '120'],
            [l('− Cash', '− Cassa'), '(300)'],
            [l('− Investment in associate', '− Partecipazione in collegata'), '(90)'],
            [l('Enterprise value', 'Enterprise value'), '2,760']
          ],
          totalRows: [8]
        }
      },
      {
        type: 'realworld',
        body: l(
          'In Italy the starting point is often the **posizione finanziaria netta (PFN)** disclosed by the company — but definitions vary (some include leases, some do not, some net financial receivables). Analysts rebuild net debt line by line from the notes. In M&A, the SPA defines "financial debt" and "debt-like items" contractually, and buyers fight to include tax liabilities, unpaid bonuses or overdue payables because each euro reduces the equity price.',
          "In Italia il punto di partenza è spesso la **posizione finanziaria netta (PFN)** comunicata dalla società — ma le definizioni variano (alcune includono i leasing, altre no, altre nettano crediti finanziari). Gli analisti ricostruiscono la PFN voce per voce dalle note. In M&A lo SPA definisce contrattualmente \"debito finanziario\" e \"debt-like items\", e i compratori negoziano per includere debiti tributari, bonus non pagati o debiti scaduti verso fornitori, perché ogni euro riduce il prezzo dell'equity."
        )
      },
      { type: 'exercise', questionId: 'val-br-q1' },
      { type: 'exercise', questionId: 'val-br-q2' },
      { type: 'exercise', questionId: 'val-br-q4' },
      {
        type: 'interview',
        question: l(
          'Why do we add non-controlling interests and subtract equity-method investments when calculating EV?',
          "Perché nel calcolo dell'EV si sommano le interessenze di terzi e si sottraggono le partecipazioni valutate a equity?"
        ),
        answer: l(
          'It is about consistency with the metrics. When a parent owns more than 50% and consolidates a subsidiary, it reports 100% of that subsidiary’s revenue and EBITDA, even though minority holders own part of it — so we add NCI to make EV reflect 100% too. For associates owned below control, only the share of net income appears, below EBITDA; their value is not captured by EV/EBITDA, so we subtract it and value it separately.',
          "È una questione di coerenza con le metriche. Quando la capogruppo detiene oltre il 50% e consolida una controllata, riporta il 100% dei ricavi e dell'EBITDA, anche se una parte spetta ai terzi — quindi sommiamo i terzi perché anche l'EV rifletta il 100%. Per le collegate non controllate compare solo la quota di utile netto, sotto l'EBITDA; il loro valore non è catturato dall'EV/EBITDA, quindi lo sottraiamo e lo valutiamo a parte."
        )
      },
      {
        type: 'mistakes',
        items: [
          l('Including lease liabilities in EV but dividing by pre-IFRS 16 EBITDA (or vice versa).', "Includere i leasing nell'EV ma dividere per l'EBITDA pre-IFRS 16 (o viceversa)."),
          l('Subtracting NCI instead of adding it when going from equity to EV.', "Sottrarre i terzi invece di sommarli quando si passa dall'equity all'EV."),
          l('Forgetting associates: they inflate EV if left in, making EV/EBITDA look too high.', "Dimenticare le collegate: se lasciate nell'EV lo gonfiano e l'EV/EBITDA appare troppo alto."),
          l('Treating all cash as excess even when it is trapped abroad or needed for operations.', "Trattare tutta la cassa come eccedente anche quando è bloccata all'estero o serve all'operatività.")
        ]
      },
      {
        type: 'summary',
        items: [
          l('Add every claim senior to or alongside common equity: debt, leases, preferred, NCI, debt-like items.', 'Somma ogni diritto prioritario o parallelo agli ordinari: debito, leasing, privilegiate, terzi, voci debt-like.'),
          l('Subtract cash and non-operating assets whose earnings are not in the metric.', 'Sottrai cassa e attività non operative i cui utili non sono nella metrica.'),
          l('Leases in EV ⇔ post-IFRS 16 EBITDA; no leases ⇔ pre-IFRS 16 EBITDA.', 'Leasing nell’EV ⇔ EBITDA post-IFRS 16; niente leasing ⇔ EBITDA pre-IFRS 16.'),
          l('Test every item: are its cash flows in the denominator?', 'Verifica ogni voce: i suoi flussi sono nel denominatore?')
        ]
      }
    ],
    questions: [
      {
        id: 'val-br-q1',
        kind: 'numeric',
        topic: 'ev-bridge',
        difficulty: 2,
        objective: l('Build a full equity-to-EV bridge.', 'Costruire un ponte completo da equity a EV.'),
        prompt: l(
          'Epsilon: market cap €2,000m, debt €700m, lease liabilities €150m (EBITDA is post-IFRS 16), pension deficit €80m, preferred €100m, NCI €120m, cash €300m, associates €90m. Enterprise value (€m)?',
          "Epsilon: capitalizzazione €2.000m, debito €700m, passività per leasing €150m (EBITDA post-IFRS 16), deficit pensionistico €80m, privilegiate €100m, terzi €120m, cassa €300m, collegate €90m. Enterprise value (€m)?"
        ),
        answer: 2760,
        unit: '€m',
        verify: { fn: 'enterpriseValue', args: [2000, 930, 300, 100, 120, 90] },
        steps: [
          l('Debt and debt-like = 700 + 150 + 80 = 930', 'Debito e debt-like = 700 + 150 + 80 = 930'),
          l('EV = 2,000 + 930 + 100 + 120 − 300 − 90 = 2,760', 'EV = 2.000 + 930 + 100 + 120 − 300 − 90 = 2.760')
        ],
        explanation: l(
          'All claims (debt, leases, pension deficit, preferred, NCI) are added; cash and associates are subtracted. Adding the associate instead of subtracting it would give 2,940.',
          'Tutti i diritti (debito, leasing, deficit pensionistico, privilegiate, terzi) si sommano; cassa e collegate si sottraggono. Sommare la collegata invece di sottrarla darebbe 2.940.'
        )
      },
      {
        id: 'val-br-q2',
        kind: 'numeric',
        topic: 'ev-bridge',
        difficulty: 2,
        objective: l('Apply the reverse bridge from EV to equity value.', "Applicare il ponte inverso dall'EV all'equity value."),
        prompt: l(
          'A DCF gives Zeta an EV of €5,000m. Debt €1,500m, cash €400m, NCI €250m, equity-method investments €150m. Equity value (€m)?',
          "Un DCF attribuisce a Zeta un EV di €5.000m. Debito €1.500m, cassa €400m, terzi €250m, partecipazioni a equity €150m. Equity value (€m)?"
        ),
        answer: 3800,
        unit: '€m',
        verify: { fn: 'equityValueFromEV', args: [5000, 1500, 400, 0, 250, 150] },
        explanation: l(
          'Equity = 5,000 − 1,500 − 250 + 400 + 150 = 3,800. Going backwards every sign flips: claims are subtracted, cash and non-operating assets are added.',
          'Equity = 5.000 − 1.500 − 250 + 400 + 150 = 3.800. Andando a ritroso tutti i segni si invertono: i diritti si sottraggono, cassa e attività non operative si sommano.'
        )
      },
      {
        id: 'val-br-q3',
        kind: 'mcq',
        topic: 'ev-bridge',
        difficulty: 2,
        objective: l('Explain the NCI adjustment.', "Spiegare la rettifica per le interessenze di terzi."),
        prompt: l(
          'Why is NCI added when computing EV for an EV/EBITDA multiple?',
          "Perché i terzi vengono sommati nel calcolo dell'EV per un multiplo EV/EBITDA?"
        ),
        choices: [
          l('Because NCI is a form of debt that pays interest', 'Perché i terzi sono una forma di debito che paga interessi'),
          l('Because NCI is an asset that the parent could sell', "Perché i terzi sono un'attività che la capogruppo potrebbe vendere"),
          l('Because NCI is deducted from EBITDA on the income statement', "Perché i terzi sono dedotti dall'EBITDA nel conto economico"),
          l('Because consolidated EBITDA includes 100% of partly owned subsidiaries', "Perché l'EBITDA consolidato include il 100% delle controllate possedute in parte")
        ],
        correct: 3,
        explanation: l(
          'Full consolidation brings in 100% of the subsidiary’s EBITDA; EV must likewise cover 100% of the value, including the minority holders’ share. NCI is equity, not debt, and it is deducted only at the net-income line, not from EBITDA.',
          "Il consolidamento integrale porta dentro il 100% dell'EBITDA della controllata; anche l'EV deve coprire il 100% del valore, inclusa la quota dei terzi. I terzi sono equity, non debito, e si deducono solo a livello di utile netto, non dall'EBITDA."
        )
      },
      {
        id: 'val-br-q4',
        kind: 'mcq',
        topic: 'ev-bridge',
        difficulty: 3,
        objective: l('Detect an IFRS 16 inconsistency between EV and EBITDA.', "Individuare un'incoerenza IFRS 16 tra EV ed EBITDA."),
        prompt: l(
          'An analyst includes €400m of lease liabilities in EV but uses EBITDA after rent (pre-IFRS 16). The resulting EV/EBITDA is:',
          "Un analista include €400m di passività per leasing nell'EV ma usa l'EBITDA dopo i canoni (pre-IFRS 16). L'EV/EBITDA risultante è:"
        ),
        choices: [
          l('Correct, because leases are debt under IFRS 16', 'Corretto, perché con IFRS 16 i leasing sono debito'),
          l('Overstated: the numerator includes leases but the denominator is reduced by rent', 'Sovrastimato: il numeratore include i leasing ma il denominatore è ridotto dai canoni'),
          l('Understated, because rent inflates EBITDA', "Sottostimato, perché i canoni gonfiano l'EBITDA"),
          l('Unaffected, as the two effects cancel exactly', 'Invariato, perché i due effetti si compensano esattamente')
        ],
        correct: 1,
        explanation: l(
          'The numerator is bigger (lease debt added) while the denominator is smaller (rent deducted): both push the multiple up. Fix it by either removing leases from EV or adding rent back to EBITDA. Rent reduces, not inflates, pre-IFRS 16 EBITDA.',
          "Il numeratore è più grande (debito per leasing aggiunto) e il denominatore più piccolo (canoni dedotti): entrambi spingono il multiplo verso l'alto. Si corregge togliendo i leasing dall'EV o riaggiungendo i canoni all'EBITDA. I canoni riducono, non gonfiano, l'EBITDA pre-IFRS 16."
        )
      },
      {
        id: 'val-br-q5',
        kind: 'multi',
        topic: 'ev-bridge',
        difficulty: 2,
        objective: l('Classify bridge items.', 'Classificare le voci del ponte.'),
        prompt: l('Which items are typically ADDED when moving from equity value to EV? Select all that apply.', "Quali voci si SOMMANO tipicamente passando dall'equity value all'EV? Seleziona tutte le risposte corrette."),
        choices: [
          l('Preferred shares', 'Azioni privilegiate'),
          l('Investment in a 25%-owned associate', 'Partecipazione in una collegata al 25%'),
          l('Unfunded pension deficit', 'Deficit dei fondi pensione'),
          l('Cash held for no operating purpose', 'Cassa non necessaria all’operatività'),
          l('Non-controlling interests', 'Interessenze di terzi')
        ],
        correct: [0, 2, 4],
        explanation: l(
          'Preferred, pension deficits and NCI are claims on the business and are added. Associates and excess cash are non-operating assets owned by shareholders and are subtracted.',
          "Privilegiate, deficit pensionistici e terzi sono diritti sul business e si sommano. Collegate e cassa in eccesso sono attività non operative di proprietà degli azionisti e si sottraggono."
        )
      }
    ],
    flashcards: [
      { id: 'fc-val-br-1', topic: 'ev-bridge', front: l('Full equity → EV bridge?', 'Ponte completo equity → EV?'), back: l('Equity + debt + leases + preferred + NCI + debt-like items − cash − equity-method investments − other non-operating assets.', 'Equity + debito + leasing + privilegiate + terzi + voci debt-like − cassa − partecipazioni a equity − altre attività non operative.') },
      { id: 'fc-val-br-2', topic: 'ev-bridge', front: l('IFRS 16 consistency rule for EV/EBITDA?', 'Regola di coerenza IFRS 16 per EV/EBITDA?'), back: l('Leases in EV ⇔ post-IFRS 16 EBITDA (pre-lease cost). Excluding leases ⇔ EBITDA after rent.', "Leasing nell'EV ⇔ EBITDA post-IFRS 16 (prima dei costi di leasing). Leasing esclusi ⇔ EBITDA dopo i canoni.") },
      { id: 'fc-val-br-3', topic: 'ev-bridge', front: l('Why subtract associates from EV?', "Perché sottrarre le collegate dall'EV?"), back: l('Their earnings are below EBITDA (share of profit), so their value is not captured by EV/EBITDA.', "I loro utili stanno sotto l'EBITDA (quota di risultato), quindi il valore non è catturato dall'EV/EBITDA.") },
      { id: 'fc-val-br-4', topic: 'ev-bridge', front: l('Give three debt-like items.', 'Cita tre voci debt-like.'), back: l('Unfunded pension deficits, deferred/contingent consideration, factoring-related liabilities, certain provisions (e.g. litigation, restructuring).', 'Deficit pensionistici, prezzi differiti/earn-out, factoring o alcuni fondi rischi (es. contenziosi, ristrutturazione).') },
      { id: 'fc-val-br-5', topic: 'ev-bridge', front: l('US GAAP (ASC 842) operating leases and EBITDA?', 'Leasing operativi US GAAP (ASC 842) ed EBITDA?'), back: l('Operating-lease cost stays in opex, so EBITDA is after lease cost — comparable to pre-IFRS 16.', "Il costo resta tra i costi operativi, quindi l'EBITDA è dopo i canoni — paragonabile al pre-IFRS 16.") }
    ],
    sources: [IFRS16, { label: 'FASB Accounting Standards Codification — Topic 842 Leases' }]
  },
  /* ======================================================================= */
  /* V1 — val-diluted-shares                                                  */
  /* ======================================================================= */
  {
    id: 'val-diluted-shares',
    academyId: 'valuation',
    moduleId: 'V1',
    mode: 'deep',
    minutes: 12,
    difficulty: 2,
    reviewed: '2026-10',
    objective: l(
      'Compute fully diluted shares with the treasury stock method and the if-converted method, and avoid double counting convertibles.',
      'Calcolare le azioni completamente diluite con il treasury stock method e il metodo if-converted, evitando di contare due volte i convertibili.'
    ),
    screens: [
      {
        type: 'intuition',
        title: l('More slices of the same pizza', 'Più fette della stessa pizza'),
        body: l(
          'Equity value is a pizza; shares are slices. Employees with stock options and holders of convertible bonds have the right to ask for **extra slices**. If their rights are worth exercising, the pizza will be cut into more pieces and each existing slice gets smaller.\n\nSo when you compute equity value per share — or market cap from a share price — you must count **every slice that will realistically exist**, not just today’s.',
          "L'equity value è una pizza; le azioni sono le fette. I dipendenti con stock option e i possessori di obbligazioni convertibili hanno il diritto di chiedere **fette in più**. Se conviene esercitare quei diritti, la pizza verrà tagliata in più pezzi e ogni fetta esistente diventerà più piccola.\n\nQuindi, quando calcoli l'equity value per azione — o la capitalizzazione a partire dal prezzo — devi contare **ogni fetta che realisticamente esisterà**, non solo quelle di oggi."
        )
      },
      {
        type: 'technical',
        title: l('The treasury stock method (TSM)', 'Il treasury stock method (TSM)'),
        body: l(
          'For each tranche of options or warrants:\n\n- Include it only if **in the money** (strike < share price).\n- Assume all are exercised: new shares = number of options.\n- The company receives **strike × options** in cash and is assumed to use it to **buy back shares** at the current price.\n- Net new shares = options − (options × strike / price).\n\nRestricted stock units (RSUs) have no strike, so they are usually added in full. For diluted EPS, IAS 33 and US GAAP (ASC 260) apply a similar approach using the **average** market price of the period; valuation work uses the **current** (or offer) price.',
          "Per ogni tranche di opzioni o warrant:\n\n- Includila solo se **in the money** (strike < prezzo).\n- Ipotizza l'esercizio integrale: nuove azioni = numero di opzioni.\n- La società incassa **strike × opzioni** e si assume che usi la cassa per **riacquistare azioni** al prezzo corrente.\n- Nuove azioni nette = opzioni − (opzioni × strike / prezzo).\n\nLe restricted stock unit (RSU) non hanno strike e di norma si aggiungono per intero. Per l'EPS diluito, lo IAS 33 e gli US GAAP (ASC 260) usano un approccio analogo con il prezzo di mercato **medio** del periodo; nelle valutazioni si usa il prezzo **corrente** (o il prezzo d'offerta)."
        )
      },
      {
        type: 'formula',
        formulas: [
          {
            name: l('Treasury stock method', 'Treasury stock method'),
            expr: 'Net new shares = Σ (n_i − n_i × K_i / P)   for tranches with K_i < P',
            vars: [
              { sym: 'n_i', desc: l('Options in tranche i', 'Opzioni nella tranche i') },
              { sym: 'K_i', desc: l('Strike price of tranche i', 'Prezzo di esercizio della tranche i') },
              { sym: 'P', desc: l('Current (or offer) share price', 'Prezzo corrente (o di offerta) per azione') }
            ]
          },
          {
            name: l('Fully diluted shares', 'Azioni completamente diluite'),
            expr: 'Diluted = Basic + TSM net new shares + RSUs + In-the-money convertible shares'
          },
          {
            name: l('Convertible shares (if-converted)', 'Azioni da convertibili (if-converted)'),
            expr: 'Conversion shares = Face value / Conversion price'
          }
        ]
      },
      {
        type: 'example',
        title: l('Eta S.p.A. at €20 per share', 'Eta S.p.A. a €20 per azione'),
        body: l(
          'Basic shares: 100m. Options: tranche A 5m at €10 (in the money), tranche B 2m at €25 (out of the money → ignored). Convertible bond: €200m face, conversion price €16 → in the money at €20.',
          'Azioni base: 100m. Opzioni: tranche A 5m a €10 (in the money), tranche B 2m a €25 (out of the money → ignorata). Bond convertibile: €200m nominali, prezzo di conversione €16 → in the money a €20.'
        ),
        table: {
          headers: [l('Step', 'Passaggio'), l('m shares', 'm azioni')],
          rows: [
            [l('Basic shares', 'Azioni base'), '100.0'],
            [l('Tranche A: 5 exercised', 'Tranche A: 5 esercitate'), '+5.0'],
            [l('Buyback: 5 × €10 / €20', 'Riacquisto: 5 × €10 / €20'), '−2.5'],
            [l('Tranche B (strike €25 > €20)', 'Tranche B (strike €25 > €20)'), '0.0'],
            [l('Convertible: €200m / €16', 'Convertibile: €200m / €16'), '+12.5'],
            [l('Fully diluted shares', 'Azioni completamente diluite'), '115.0']
          ],
          totalRows: [5]
        }
      },
      {
        type: 'technical',
        title: l('Convertibles: shares OR debt, never both', 'Convertibili: azioni O debito, mai entrambi'),
        body: l(
          '- **In the money** (share price > conversion price): assume conversion → add the shares and **remove the bond from net debt**.\n- **Out of the money**: holders would rather be repaid → keep it as **debt**, add no shares.\n\nIn Eta’s case, equity value = 115m × €20 = €2,300m, and the €200m convertible is excluded from debt in the bridge.\n\n**Circularity**: in a takeover the dilution depends on the offer price, and the per-share price depends on dilution. Models solve it iteratively (or with Excel’s iterative calculation).',
          "- **In the money** (prezzo > prezzo di conversione): ipotizza la conversione → aggiungi le azioni e **togli il bond dalla PFN**.\n- **Out of the money**: i possessori preferiscono il rimborso → resta **debito**, nessuna azione aggiuntiva.\n\nPer Eta, equity value = 115m × €20 = €2.300m, e il convertibile da €200m viene escluso dal debito nel ponte.\n\n**Circolarità**: in un'OPA la diluizione dipende dal prezzo d'offerta, e il prezzo per azione dipende dalla diluizione. I modelli la risolvono in modo iterativo (o con il calcolo iterativo di Excel)."
        )
      },
      {
        type: 'realworld',
        body: l(
          'In a public-company valuation an analyst builds the share count from the latest filings: basic shares from the most recent cover page or share-capital disclosure, and options/RSUs/convertibles from the notes to the accounts (IFRS 2 share-based payment disclosures, bond prospectuses). Tech and growth companies with heavy stock-based compensation can show dilution of several percentage points — getting it wrong moves the offer price per share materially.',
          "Nella valutazione di una quotata l'analista costruisce il numero di azioni dagli ultimi documenti: le azioni base dall'informativa più recente sul capitale sociale, opzioni/RSU/convertibili dalle note al bilancio (informativa IFRS 2 sui pagamenti basati su azioni, prospetti dei bond). Le società tech e growth con forti piani di stock-based compensation possono avere diluizioni di diversi punti percentuali — sbagliarle sposta in modo rilevante il prezzo per azione dell'offerta."
        )
      },
      { type: 'exercise', questionId: 'val-ds-q1' },
      { type: 'exercise', questionId: 'val-ds-q2' },
      { type: 'exercise', questionId: 'val-ds-q3' },
      { type: 'exercise', questionId: 'val-ds-q5' },
      {
        type: 'interview',
        question: l(
          'Walk me through the treasury stock method. Why do we assume a buyback?',
          'Mi spieghi il treasury stock method. Perché si ipotizza un riacquisto di azioni?'
        ),
        answer: l(
          'For each in-the-money tranche we assume all options are exercised, creating new shares. Holders pay the strike, so the company receives cash — and we assume it uses that cash to repurchase shares at the current price. Net dilution is options minus options × strike / price. The buyback assumption captures that the exercise proceeds are economic value received; only the "free" portion of each option — the intrinsic value — really dilutes existing shareholders.',
          "Per ogni tranche in the money ipotizziamo che tutte le opzioni vengano esercitate, creando nuove azioni. I titolari pagano lo strike, quindi la società incassa liquidità — e ipotizziamo che la usi per riacquistare azioni al prezzo corrente. La diluizione netta è opzioni meno opzioni × strike / prezzo. L'ipotesi di riacquisto riflette il fatto che i proventi dell'esercizio sono valore ricevuto; solo la parte \"gratuita\" di ogni opzione — il valore intrinseco — diluisce davvero gli azionisti esistenti."
        )
      },
      {
        type: 'mistakes',
        items: [
          l('Including out-of-the-money options.', 'Includere opzioni out of the money.'),
          l('Counting an in-the-money convertible both as new shares and as debt.', 'Contare un convertibile in the money sia come nuove azioni sia come debito.'),
          l('Using the strike price instead of the share price as the buyback price.', 'Usare lo strike invece del prezzo di mercato come prezzo di riacquisto.'),
          l('Forgetting to recompute dilution at the offer price in an M&A valuation.', "Dimenticare di ricalcolare la diluizione al prezzo d'offerta in una valutazione M&A.")
        ]
      },
      {
        type: 'summary',
        items: [
          l('Equity value = fully diluted shares × price.', 'Equity value = azioni completamente diluite × prezzo.'),
          l('TSM: in-the-money options only; net new shares = n − n × K / P.', 'TSM: solo opzioni in the money; nuove azioni nette = n − n × K / P.'),
          l('RSUs are added in full; convertibles are shares if in the money, debt otherwise.', 'Le RSU si sommano per intero; i convertibili sono azioni se in the money, altrimenti debito.'),
          l('Dilution depends on price → circularity at the offer price.', "La diluizione dipende dal prezzo → circolarità al prezzo d'offerta.")
        ]
      }
    ],
    questions: [
      {
        id: 'val-ds-q1',
        kind: 'numeric',
        topic: 'diluted-shares',
        difficulty: 2,
        objective: l('Apply the treasury stock method to a single tranche.', 'Applicare il treasury stock method a una singola tranche.'),
        prompt: l(
          'Share price €20. Employees hold 5m options with a €10 strike. How many net new shares (m) does the TSM add?',
          'Prezzo €20. I dipendenti detengono 5m di opzioni con strike €10. Quante nuove azioni nette (m) aggiunge il TSM?'
        ),
        answer: 2.5,
        unit: 'm',
        verify: { fn: 'treasuryStockMethod', args: [20, [{ count: 5, strike: 10 }]] },
        explanation: l(
          'Proceeds = 5 × €10 = €50m, which buy back €50m / €20 = 2.5m shares. Net new shares = 5 − 2.5 = 2.5m. Adding all 5m ignores the cash received.',
          'Proventi = 5 × €10 = €50m, che riacquistano €50m / €20 = 2,5m di azioni. Nuove azioni nette = 5 − 2,5 = 2,5m. Aggiungere tutti i 5m ignora la cassa incassata.'
        )
      },
      {
        id: 'val-ds-q2',
        kind: 'numeric',
        topic: 'diluted-shares',
        difficulty: 2,
        objective: l('Compute fully diluted shares with several tranches and a convertible.', 'Calcolare le azioni diluite con più tranche e un convertibile.'),
        prompt: l(
          'Basic shares 100m, price €20. Options: 5m @ €10 and 2m @ €25. Convertible: €200m face, conversion price €16. Fully diluted shares (m)?',
          'Azioni base 100m, prezzo €20. Opzioni: 5m @ €10 e 2m @ €25. Convertibile: €200m nominali, prezzo di conversione €16. Azioni completamente diluite (m)?'
        ),
        answer: 115,
        unit: 'm',
        verify: { fn: 'dilutedShares', args: [100, 20, [{ count: 5, strike: 10 }, { count: 2, strike: 25 }], 12.5] },
        steps: [
          l('Tranche €10: 5 − 5 × 10 / 20 = 2.5m', 'Tranche €10: 5 − 5 × 10 / 20 = 2,5m'),
          l('Tranche €25: out of the money → 0', 'Tranche €25: out of the money → 0'),
          l('Convertible: 200 / 16 = 12.5m (in the money)', 'Convertibile: 200 / 16 = 12,5m (in the money)'),
          l('Total: 100 + 2.5 + 12.5 = 115m', 'Totale: 100 + 2,5 + 12,5 = 115m')
        ],
        explanation: l(
          '100 + 2.5 + 0 + 12.5 = 115m. Including the €25 tranche would add shares nobody would rationally create.',
          '100 + 2,5 + 0 + 12,5 = 115m. Includere la tranche a €25 aggiungerebbe azioni che nessuno creerebbe razionalmente.'
        )
      },
      {
        id: 'val-ds-q3',
        kind: 'mcq',
        topic: 'diluted-shares',
        difficulty: 2,
        objective: l('Treat an in-the-money convertible correctly in the bridge.', 'Trattare correttamente un convertibile in the money nel ponte.'),
        prompt: l(
          'A €200m convertible is in the money and you add its 12.5m conversion shares to the share count. In the EV bridge, the €200m bond should be:',
          'Un convertibile da €200m è in the money e aggiungi le sue 12,5m azioni di conversione. Nel ponte dell’EV, il bond da €200m va:'
        ),
        choices: [
          l('Added to debt as usual', 'Sommato al debito come di consueto'),
          l('Excluded from debt, since it is already captured as equity', 'Escluso dal debito, perché è già catturato come equity'),
          l('Subtracted as a non-operating asset', 'Sottratto come attività non operativa'),
          l('Added to debt at 50% as a compromise', 'Sommato al debito al 50% come compromesso')
        ],
        correct: 1,
        explanation: l(
          'If converted, the bond ceases to exist and becomes shares. Counting both the shares and the debt double counts the same claim.',
          'Se convertito, il bond cessa di esistere e diventa azioni. Contare sia le azioni sia il debito conta due volte lo stesso diritto.'
        )
      },
      {
        id: 'val-ds-q4',
        kind: 'numeric',
        topic: 'diluted-shares',
        difficulty: 3,
        objective: l('Run the TSM across multiple in-the-money tranches.', 'Applicare il TSM a più tranche in the money.'),
        prompt: l(
          'Basic shares 50m, price €16. Options: 3m @ €8 and 1m @ €12. Fully diluted shares (m)?',
          'Azioni base 50m, prezzo €16. Opzioni: 3m @ €8 e 1m @ €12. Azioni completamente diluite (m)?'
        ),
        answer: 51.75,
        unit: 'm',
        verify: { fn: 'dilutedShares', args: [50, 16, [{ count: 3, strike: 8 }, { count: 1, strike: 12 }]] },
        steps: [
          l('Tranche €8: 3 − 3 × 8 / 16 = 1.5m', 'Tranche €8: 3 − 3 × 8 / 16 = 1,5m'),
          l('Tranche €12: 1 − 1 × 12 / 16 = 0.25m', 'Tranche €12: 1 − 1 × 12 / 16 = 0,25m'),
          l('Diluted = 50 + 1.5 + 0.25 = 51.75m', 'Diluite = 50 + 1,5 + 0,25 = 51,75m')
        ],
        explanation: l(
          'Both tranches are in the money; total net new shares 1.75m, so 51.75m diluted shares.',
          'Entrambe le tranche sono in the money; nuove azioni nette totali 1,75m, quindi 51,75m di azioni diluite.'
        )
      },
      {
        id: 'val-ds-q5',
        kind: 'numeric',
        topic: 'diluted-shares',
        difficulty: 2,
        objective: l('Compute diluted equity value.', "Calcolare l'equity value diluito."),
        prompt: l(
          'Using Eta’s 115m fully diluted shares and a €20 share price, what is diluted equity value (€m)?',
          "Usando le 115m di azioni diluite di Eta e un prezzo di €20, qual è l'equity value diluito (€m)?"
        ),
        answer: 2300,
        unit: '€m',
        verify: { fn: 'marketCap', args: [20, 115] },
        explanation: l(
          '115m × €20 = €2,300m. Using basic shares (100m) would understate equity value by €300m.',
          "115m × €20 = €2.300m. Usare le azioni base (100m) sottostimerebbe l'equity value di €300m."
        )
      }
    ],
    flashcards: [
      { id: 'fc-val-ds-1', topic: 'diluted-shares', front: l('TSM net new shares formula?', 'Formula delle nuove azioni nette con il TSM?'), back: l('n − n × K / P, only for options with K < P.', 'n − n × K / P, solo per opzioni con K < P.') },
      { id: 'fc-val-ds-2', topic: 'diluted-shares', front: l('How are RSUs treated in the diluted share count?', 'Come si trattano le RSU nel conteggio delle azioni diluite?'), back: l('Usually added in full (no strike, no proceeds).', 'Di norma si sommano per intero (nessuno strike, nessun provento).') },
      { id: 'fc-val-ds-3', topic: 'diluted-shares', front: l('In-the-money convertible: shares or debt?', 'Convertibile in the money: azioni o debito?'), back: l('Shares (face / conversion price) and remove it from debt — never both.', 'Azioni (nominale / prezzo di conversione) e lo si toglie dal debito — mai entrambi.') },
      { id: 'fc-val-ds-4', topic: 'diluted-shares', front: l('Which price does diluted EPS under IAS 33 use for options?', 'Quale prezzo usa lo IAS 33 per le opzioni nell’EPS diluito?'), back: l('The average market price for the period (valuation uses the current or offer price).', 'Il prezzo medio di mercato del periodo (nelle valutazioni si usa il prezzo corrente o d’offerta).') }
    ],
    sources: [IAS33, { label: 'FASB Accounting Standards Codification — Topic 260 Earnings per Share' }]
  },
  /* ======================================================================= */
  /* V2 — val-fcf                                                             */
  /* ======================================================================= */
  {
    id: 'val-fcf',
    academyId: 'valuation',
    moduleId: 'V2',
    mode: 'deep',
    minutes: 12,
    difficulty: 2,
    reviewed: '2026-10',
    objective: l(
      'Compute unlevered and levered free cash flow, and pair each with the right discount rate and the right value (EV vs equity).',
      'Calcolare il free cash flow unlevered e levered e abbinare a ciascuno il tasso di sconto e il valore corretti (EV vs equity).'
    ),
    screens: [
      {
        type: 'intuition',
        title: l('Cash for everyone vs cash for shareholders', 'Cassa per tutti vs cassa per gli azionisti'),
        body: l(
          'Imagine the business as a machine that spits out cash after paying staff, suppliers, taxes and new investment. That pile is **unlevered free cash flow (UFCF)** — available to **all** capital providers, before anyone is paid.\n\nNow pay the lenders their interest and any debt repayments (or add new borrowing). What remains belongs only to shareholders: **levered free cash flow (LFCF)**, also called free cash flow to equity.',
          "Immagina il business come una macchina che produce cassa dopo aver pagato personale, fornitori, imposte e nuovi investimenti. Quel mucchio è il **free cash flow unlevered (UFCF)** — disponibile per **tutti** i finanziatori, prima che qualcuno venga pagato.\n\nOra paga ai finanziatori interessi e rimborsi (o aggiungi nuovo debito). Ciò che resta spetta solo agli azionisti: il **free cash flow levered (LFCF)**, detto anche free cash flow to equity."
        )
      },
      {
        type: 'technical',
        title: l('Building UFCF', "Costruire l'UFCF"),
        body: l(
          '- Start from **EBIT** (operating profit, before interest).\n- Apply tax **as if the company had no debt**: EBIT × (1 − t) = **NOPAT**.\n- **Add back D&A** (non-cash).\n- **Subtract CapEx** (cash spent on long-term assets).\n- **Subtract the increase in net working capital** (cash tied up in receivables and inventory, net of payables).\n\nInterest is excluded on purpose: the cost of debt — and its tax shield — is captured in the **WACC**, not in the cash flow. Including it twice is a classic error.',
          "- Parti dall'**EBIT** (risultato operativo, prima degli interessi).\n- Applica le imposte **come se la società non avesse debito**: EBIT × (1 − t) = **NOPAT**.\n- **Somma gli ammortamenti** (non monetari).\n- **Sottrai il CapEx** (investimenti in immobilizzazioni).\n- **Sottrai l'aumento del capitale circolante netto** (cassa assorbita da crediti e magazzino, al netto dei debiti verso fornitori).\n\nGli interessi sono esclusi apposta: il costo del debito — e il suo scudo fiscale — sono catturati nel **WACC**, non nel flusso. Includerli due volte è un errore classico."
        )
      },
      {
        type: 'formula',
        formulas: [
          {
            name: l('Unlevered FCF (FCFF)', 'FCF unlevered (FCFF)'),
            expr: 'UFCF = EBIT × (1 − t) + D&A − CapEx − ΔNWC',
            vars: [
              { sym: 't', desc: l('Marginal / normalised tax rate', 'Aliquota fiscale marginale / normalizzata') },
              { sym: 'ΔNWC', desc: l('Increase in net working capital (an increase reduces cash)', 'Aumento del capitale circolante netto (un aumento assorbe cassa)') }
            ]
          },
          {
            name: l('Levered FCF (FCFE)', 'FCF levered (FCFE)'),
            expr: 'LFCF = Net income + D&A − CapEx − ΔNWC + Net borrowing'
          },
          {
            name: l('Pairing rule', "Regola d'abbinamento"),
            expr: 'PV(UFCF @ WACC) = Enterprise value   |   PV(LFCF @ cost of equity) = Equity value'
          }
        ],
        note: l(
          'Net borrowing = new debt raised − debt repaid. Mixing UFCF with cost of equity (or LFCF with WACC) gives a meaningless number.',
          'Nuovo debito netto = debito raccolto − debito rimborsato. Mischiare UFCF con costo dell’equity (o LFCF con WACC) produce un numero privo di senso.'
        )
      },
      {
        type: 'example',
        title: l('Theta S.p.A. — one year (€m)', 'Theta S.p.A. — un anno (€m)'),
        body: l(
          'EBIT 200, tax rate 25%, D&A 40, CapEx 60, NWC increase 10, interest expense 30, scheduled debt repayment 20.',
          'EBIT 200, aliquota 25%, ammortamenti 40, CapEx 60, aumento del circolante 10, interessi passivi 30, rimborso del debito 20.'
        ),
        tables: [
          {
            caption: l('Unlevered', 'Unlevered'),
            headers: [l('Item', 'Voce'), l('€m', '€m')],
            rows: [
              [l('EBIT', 'EBIT'), '200'],
              [l('− Tax on EBIT (25%)', '− Imposte sull’EBIT (25%)'), '(50)'],
              [l('NOPAT', 'NOPAT'), '150'],
              [l('+ D&A − CapEx − ΔNWC', '+ Amm. − CapEx − ΔCCN'), '40 − 60 − 10'],
              [l('UFCF', 'UFCF'), '120']
            ],
            totalRows: [4]
          },
          {
            caption: l('Levered', 'Levered'),
            headers: [l('Item', 'Voce'), l('€m', '€m')],
            rows: [
              [l('Net income = (200 − 30) × 75%', 'Utile netto = (200 − 30) × 75%'), '127.5'],
              [l('+ D&A − CapEx − ΔNWC', '+ Amm. − CapEx − ΔCCN'), '(30)'],
              [l('− Debt repayment', '− Rimborso del debito'), '(20)'],
              [l('LFCF', 'LFCF'), '77.5']
            ],
            totalRows: [3]
          }
        ]
      },
      {
        type: 'technical',
        title: l('Why bankers prefer UFCF', 'Perché i banker preferiscono l’UFCF'),
        body: l(
          '- UFCF is **independent of capital structure**, which often changes in a deal (a buyer will refinance the debt).\n- It values the business directly as an **EV**, comparable to EV multiples.\n- LFCF needs a full debt schedule and a cost of equity that moves with leverage.\n\nLFCF is used when debt is part of operations or when equity returns are the focus: **banks and insurers** (where FCFE / dividend models dominate) and **LBO** returns analysis.',
          "- L'UFCF è **indipendente dalla struttura finanziaria**, che spesso cambia in un deal (il compratore rifinanzierà il debito).\n- Valuta direttamente il business come **EV**, confrontabile con i multipli EV.\n- L'LFCF richiede un piano del debito completo e un costo dell'equity che varia con la leva.\n\nL'LFCF si usa quando il debito fa parte dell'operatività o quando conta il rendimento per l'azionista: **banche e assicurazioni** (dove dominano modelli FCFE / a dividendi) e analisi dei rendimenti di un **LBO**."
        )
      },
      {
        type: 'realworld',
        body: l(
          'In practice, analysts take EBIT from the company’s plan (or broker consensus), use a normalised tax rate — in Italy combining IRES (24%) and IRAP (3.9% standard rate, on a different base) needs care — and treat stock-based compensation, restructuring and one-offs consistently. Sell-side reports often quote "FCF" with very different definitions (before or after leases, interest, dividends); always rebuild it yourself.',
          "Nella pratica gli analisti prendono l'EBIT dal piano della società (o dal consensus dei broker), usano un'aliquota normalizzata — in Italia combinare IRES (24%) e IRAP (aliquota ordinaria 3,9%, su una base imponibile diversa) richiede attenzione — e trattano in modo coerente stock-based compensation, ristrutturazioni e poste non ricorrenti. I report sell-side citano spesso un \"FCF\" con definizioni molto diverse (prima o dopo leasing, interessi, dividendi); ricostruiscilo sempre da solo."
        )
      },
      { type: 'exercise', questionId: 'val-fcf-q1' },
      { type: 'exercise', questionId: 'val-fcf-q2' },
      { type: 'exercise', questionId: 'val-fcf-q3' },
      { type: 'exercise', questionId: 'val-fcf-q5' },
      {
        type: 'interview',
        question: l(
          'What is the difference between unlevered and levered free cash flow, and which discount rate do you use for each?',
          'Qual è la differenza tra free cash flow unlevered e levered, e quale tasso di sconto usi per ciascuno?'
        ),
        answer: l(
          'Unlevered FCF is cash available to all capital providers: EBIT after tax, plus D&A, minus CapEx and the increase in working capital — no interest or debt flows. Discounting it at the WACC gives enterprise value. Levered FCF is what is left for shareholders after interest and net debt repayments; discounting it at the cost of equity gives equity value directly. The key is matching cash flow, discount rate and value.',
          "Il FCF unlevered è la cassa disponibile per tutti i finanziatori: EBIT dopo le imposte, più ammortamenti, meno CapEx e aumento del circolante — nessun flusso legato al debito. Attualizzato al WACC dà l'enterprise value. Il FCF levered è ciò che resta agli azionisti dopo interessi e rimborsi netti del debito; attualizzato al costo dell'equity dà direttamente l'equity value. La chiave è abbinare flusso, tasso di sconto e valore."
        )
      },
      {
        type: 'mistakes',
        items: [
          l('Deducting interest in UFCF — the tax shield is already in the after-tax cost of debt in the WACC.', "Dedurre gli interessi nell'UFCF — lo scudo fiscale è già nel costo del debito al netto delle imposte nel WACC."),
          l('Adding (instead of subtracting) an increase in working capital.', 'Sommare (invece di sottrarre) un aumento del capitale circolante.'),
          l('Using taxes actually paid (which reflect interest deductions) in UFCF instead of tax on EBIT.', "Usare nell'UFCF le imposte effettivamente pagate (che riflettono la deducibilità degli interessi) invece delle imposte sull'EBIT."),
          l('Discounting LFCF at the WACC.', "Attualizzare l'LFCF al WACC.")
        ]
      },
      {
        type: 'summary',
        items: [
          l('UFCF = EBIT(1 − t) + D&A − CapEx − ΔNWC → discount at WACC → EV.', 'UFCF = EBIT(1 − t) + Amm. − CapEx − ΔCCN → sconto al WACC → EV.'),
          l('LFCF = NI + D&A − CapEx − ΔNWC + net borrowing → discount at cost of equity → equity value.', 'LFCF = UN + Amm. − CapEx − ΔCCN + nuovo debito netto → sconto al costo dell’equity → equity value.'),
          l('An increase in NWC consumes cash.', 'Un aumento del circolante assorbe cassa.'),
          l('Bankers default to UFCF; banks/insurers and LBO returns use equity cash flows.', "I banker usano di default l'UFCF; banche/assicurazioni e rendimenti LBO usano i flussi all'equity.")
        ]
      }
    ],
    questions: [
      {
        id: 'val-fcf-q1',
        kind: 'numeric',
        topic: 'free-cash-flow',
        difficulty: 2,
        objective: l('Compute unlevered free cash flow.', 'Calcolare il free cash flow unlevered.'),
        prompt: l(
          'Iota: EBIT €500m, tax rate 24%, D&A €80m, CapEx €120m, increase in NWC €25m. UFCF (€m)?',
          'Iota: EBIT €500m, aliquota 24%, ammortamenti €80m, CapEx €120m, aumento del circolante €25m. UFCF (€m)?'
        ),
        answer: 315,
        unit: '€m',
        verify: { fn: 'unleveredFCF', args: [500, 0.24, 80, 120, 25] },
        steps: [
          l('NOPAT = 500 × (1 − 0.24) = 380', 'NOPAT = 500 × (1 − 0,24) = 380'),
          l('UFCF = 380 + 80 − 120 − 25 = 315', 'UFCF = 380 + 80 − 120 − 25 = 315')
        ],
        explanation: l(
          '380 + 80 − 120 − 25 = 315. Adding the NWC increase would give 365; forgetting tax would give 435.',
          "380 + 80 − 120 − 25 = 315. Sommare l'aumento del circolante darebbe 365; dimenticare le imposte darebbe 435."
        )
      },
      {
        id: 'val-fcf-q2',
        kind: 'numeric',
        topic: 'free-cash-flow',
        difficulty: 2,
        objective: l('Compute levered free cash flow.', 'Calcolare il free cash flow levered.'),
        prompt: l(
          'Net income €220m, D&A €80m, CapEx €120m, increase in NWC €25m, net new borrowing €30m. LFCF (€m)?',
          'Utile netto €220m, ammortamenti €80m, CapEx €120m, aumento del circolante €25m, nuovo debito netto €30m. LFCF (€m)?'
        ),
        answer: 185,
        unit: '€m',
        verify: { fn: 'leveredFCF', args: [220, 80, 120, 25, 30] },
        explanation: l(
          '220 + 80 − 120 − 25 + 30 = 185. Net borrowing adds cash available to shareholders; a net repayment would reduce it.',
          '220 + 80 − 120 − 25 + 30 = 185. Il nuovo debito netto aumenta la cassa disponibile per gli azionisti; un rimborso netto la ridurrebbe.'
        )
      },
      {
        id: 'val-fcf-q3',
        kind: 'mcq',
        topic: 'free-cash-flow',
        difficulty: 1,
        objective: l('Match cash flows to discount rates.', 'Abbinare i flussi ai tassi di sconto.'),
        prompt: l('Discounting levered free cash flow at the cost of equity gives:', "Attualizzare il free cash flow levered al costo dell'equity dà:"),
        choices: [
          l('Enterprise value', 'Enterprise value'),
          l('Net debt', 'Posizione finanziaria netta'),
          l('Equity value', 'Equity value'),
          l('Invested capital', 'Capitale investito')
        ],
        correct: 2,
        explanation: l(
          'LFCF belongs to shareholders, so its present value at their required return (cost of equity) is equity value. UFCF at WACC would give EV.',
          "L'LFCF spetta agli azionisti, quindi il suo valore attuale al loro rendimento richiesto (costo dell'equity) è l'equity value. L'UFCF al WACC darebbe l'EV."
        )
      },
      {
        id: 'val-fcf-q4',
        kind: 'multi',
        topic: 'free-cash-flow',
        difficulty: 2,
        objective: l('Identify what belongs in UFCF.', "Individuare cosa rientra nell'UFCF."),
        prompt: l('Which items are deducted when computing UFCF? Select all that apply.', "Quali voci si sottraggono nel calcolo dell'UFCF? Seleziona tutte le risposte corrette."),
        choices: [
          l('Interest expense', 'Interessi passivi'),
          l('Capital expenditure', 'Investimenti (CapEx)'),
          l('Taxes computed on EBIT', "Imposte calcolate sull'EBIT"),
          l('Dividends paid', 'Dividendi pagati'),
          l('Increase in net working capital', 'Aumento del capitale circolante netto')
        ],
        correct: [1, 2, 4],
        explanation: l(
          'CapEx, notional taxes on EBIT and NWC investment are operating uses of cash. Interest and dividends are payments to capital providers, which UFCF is calculated before.',
          "CapEx, imposte figurative sull'EBIT e investimento in circolante sono impieghi operativi di cassa. Interessi e dividendi sono pagamenti ai finanziatori, e l'UFCF si calcola prima di essi."
        )
      },
      {
        id: 'val-fcf-q5',
        kind: 'numeric',
        topic: 'free-cash-flow',
        difficulty: 2,
        objective: l('Quantify the cash impact of working capital.', "Quantificare l'impatto del circolante sulla cassa."),
        prompt: l(
          'Operating NWC rises from €150m to €180m during the year. By how much does this change UFCF (€m, use a negative number for a reduction)?',
          "Il capitale circolante operativo passa da €150m a €180m nell'anno. Di quanto cambia l'UFCF (€m, usa un numero negativo per una riduzione)?"
        ),
        answer: -30,
        unit: '€m',
        verify: { fn: 'diff', args: [150, 180] },
        explanation: l(
          'NWC increased by 30, meaning more cash is tied up in receivables/inventory: UFCF falls by 30. A decrease in NWC would release cash.',
          'Il circolante è aumentato di 30, quindi più cassa è immobilizzata in crediti/magazzino: l’UFCF scende di 30. Una riduzione del circolante libererebbe cassa.'
        )
      },
      {
        id: 'val-fcf-q6',
        kind: 'order',
        topic: 'free-cash-flow',
        difficulty: 1,
        objective: l('Sequence the UFCF build.', "Ordinare i passaggi di costruzione dell'UFCF."),
        prompt: l('Order the steps to get from revenue to UFCF.', "Ordina i passaggi per arrivare dai ricavi all'UFCF."),
        items: [
          l('Revenue − operating costs = EBITDA', 'Ricavi − costi operativi = EBITDA'),
          l('EBITDA − D&A = EBIT', 'EBITDA − ammortamenti = EBIT'),
          l('EBIT − taxes on EBIT = NOPAT', "EBIT − imposte sull'EBIT = NOPAT"),
          l('NOPAT + D&A − CapEx − ΔNWC = UFCF', 'NOPAT + ammortamenti − CapEx − ΔCCN = UFCF')
        ],
        explanation: l(
          'D&A is first deducted to compute EBIT (it is tax-deductible), then added back because it is non-cash.',
          "Gli ammortamenti si deducono prima per arrivare all'EBIT (sono fiscalmente deducibili), poi si risommano perché non monetari."
        )
      }
    ],
    flashcards: [
      { id: 'fc-val-fcf-1', topic: 'free-cash-flow', front: l('UFCF formula?', 'Formula dell’UFCF?'), back: l('EBIT × (1 − t) + D&A − CapEx − ΔNWC', 'EBIT × (1 − t) + ammortamenti − CapEx − ΔCCN') },
      { id: 'fc-val-fcf-2', topic: 'free-cash-flow', front: l('LFCF formula?', 'Formula dell’LFCF?'), back: l('Net income + D&A − CapEx − ΔNWC + net borrowing', 'Utile netto + ammortamenti − CapEx − ΔCCN + nuovo debito netto') },
      { id: 'fc-val-fcf-3', topic: 'free-cash-flow', front: l('UFCF discounted at…? Gives…?', 'UFCF attualizzato a…? Dà…?'), back: l('WACC → enterprise value.', 'WACC → enterprise value.') },
      { id: 'fc-val-fcf-4', topic: 'free-cash-flow', front: l('LFCF discounted at…? Gives…?', 'LFCF attualizzato a…? Dà…?'), back: l('Cost of equity → equity value.', "Costo dell'equity → equity value.") },
      { id: 'fc-val-fcf-5', topic: 'free-cash-flow', front: l('Where is the interest tax shield in an unlevered DCF?', "Dov'è lo scudo fiscale degli interessi in un DCF unlevered?"), back: l('In the WACC, via the after-tax cost of debt Rd × (1 − t).', 'Nel WACC, tramite il costo del debito al netto delle imposte Rd × (1 − t).') }
    ]
  },
  /* ======================================================================= */
  /* V3 — val-multiples                                                       */
  /* ======================================================================= */
  {
    id: 'val-multiples',
    academyId: 'valuation',
    moduleId: 'V3',
    mode: 'quick',
    minutes: 8,
    difficulty: 2,
    reviewed: '2026-10',
    objective: l(
      'Compute and interpret EV/Revenue, EV/EBITDA, EV/EBIT and P/E, and apply the numerator–denominator consistency rule.',
      'Calcolare e interpretare EV/Ricavi, EV/EBITDA, EV/EBIT e P/E, applicando la regola di coerenza tra numeratore e denominatore.'
    ),
    screens: [
      {
        type: 'intuition',
        title: l('Price per square metre', 'Prezzo al metro quadro'),
        body: l(
          'To price a flat you do not build a 30-year cash-flow model: you look at what similar flats sold for **per square metre** and multiply.\n\nA valuation multiple is the same shortcut: **value ÷ a measure of size or profit**. If similar companies trade at 8× EBITDA, a company with €100m of EBITDA is worth roughly €800m of EV.\n\nThe trick is making sure the value and the metric belong to the **same group of investors**.',
          "Per valutare un appartamento non costruisci un modello di flussi a 30 anni: guardi a quanto sono stati venduti appartamenti simili **al metro quadro** e moltiplichi.\n\nUn multiplo di valutazione è la stessa scorciatoia: **valore ÷ una misura di dimensione o di redditività**. Se società simili trattano a 8× l'EBITDA, una società con €100m di EBITDA vale circa €800m di EV.\n\nIl trucco è assicurarsi che valore e metrica appartengano allo **stesso gruppo di investitori**."
        )
      },
      {
        type: 'technical',
        title: l('The consistency rule', 'La regola di coerenza'),
        body: l(
          '- **EV** belongs to all capital providers → divide by metrics **before interest**: Revenue, EBITDA, EBIT, UFCF.\n- **Equity value** belongs to shareholders → divide by metrics **after interest**: net income (P/E), book value (P/BV), levered FCF.\n\nSo **EV/Net income** or **Equity value/EBITDA** are wrong: the numerator and denominator refer to different claim-holders, and the result changes with leverage alone.',
          "- L'**EV** appartiene a tutti i finanziatori → si divide per metriche **prima degli interessi**: Ricavi, EBITDA, EBIT, UFCF.\n- L'**equity value** appartiene agli azionisti → si divide per metriche **dopo gli interessi**: utile netto (P/E), patrimonio netto (P/BV), FCF levered.\n\nQuindi **EV/Utile netto** o **Equity value/EBITDA** sono sbagliati: numeratore e denominatore si riferiscono a finanziatori diversi, e il risultato cambia solo per effetto della leva."
        )
      },
      {
        type: 'formula',
        formulas: [
          { name: l('EV multiples', 'Multipli di EV'), expr: 'EV / Revenue   EV / EBITDA   EV / EBIT' },
          {
            name: l('Price-to-earnings', 'Prezzo/utili'),
            expr: 'P/E = Share price / EPS = Equity value / Net income'
          }
        ],
        note: l(
          'Always state the period: LTM (last twelve months), FY24A, FY26E, NTM (next twelve months).',
          'Indica sempre il periodo: LTM (ultimi dodici mesi), FY24A, FY26E, NTM (prossimi dodici mesi).'
        )
      },
      {
        type: 'example',
        title: l('Kappa S.p.A. (€m)', 'Kappa S.p.A. (€m)'),
        body: l(
          'Share price €30, 40m diluted shares → equity value €1,200m. Net debt €400m → EV €1,600m.',
          'Prezzo €30, 40m azioni diluite → equity value €1.200m. PFN €400m → EV €1.600m.'
        ),
        table: {
          headers: [l('Multiple', 'Multiplo'), l('Calculation', 'Calcolo'), l('Result', 'Risultato')],
          rows: [
            [l('EV / Revenue', 'EV / Ricavi'), '1,600 / 2,000', '0.8x'],
            ['EV / EBITDA', '1,600 / 250', '6.4x'],
            ['EV / EBIT', '1,600 / 160', '10.0x'],
            ['P/E', '1,200 / 80', '15.0x']
          ]
        }
      },
      {
        type: 'technical',
        title: l('When to use which', 'Quando usare quale'),
        body: l(
          '- **EV/EBITDA**: the workhorse — neutral to leverage and D&A policy; weak for capital-intensive firms (ignores CapEx).\n- **EV/EBIT**: captures D&A (a proxy for reinvestment); better when CapEx intensity differs across peers.\n- **EV/Revenue**: for loss-making or early-stage firms; ignores profitability, so check margins.\n- **P/E**: intuitive and widely quoted; distorted by leverage, tax and one-offs. Standard for banks and insurers.\n- Sector metrics: EV/EBITDAR (airlines, retail, pre-IFRS 16), P/TBV (banks), EV/subscriber, EV/MW.',
          "- **EV/EBITDA**: il cavallo di battaglia — neutrale rispetto a leva e politiche di ammortamento; debole per le società capital intensive (ignora il CapEx).\n- **EV/EBIT**: cattura gli ammortamenti (proxy del reinvestimento); migliore quando l'intensità di CapEx differisce tra i comparabili.\n- **EV/Ricavi**: per società in perdita o early stage; ignora la redditività, quindi verifica i margini.\n- **P/E**: intuitivo e molto citato; distorto da leva, imposte e poste non ricorrenti. Standard per banche e assicurazioni.\n- Metriche settoriali: EV/EBITDAR (compagnie aeree, retail, pre-IFRS 16), P/TBV (banche), EV/abbonato, EV/MW."
        )
      },
      {
        type: 'realworld',
        body: l(
          'Analysts spend hours making multiples comparable: removing one-offs to get **adjusted EBITDA**, aligning IFRS 16 treatment, calendarising fiscal years and using diluted share counts. In pitch books the comps page usually shows EV/EBITDA and P/E for the current and next year, plus growth and margin columns that explain why some peers trade higher.',
          "Gli analisti dedicano ore a rendere i multipli confrontabili: eliminano le poste non ricorrenti per ottenere l'**EBITDA adjusted**, allineano il trattamento IFRS 16, calendarizzano gli esercizi e usano azioni diluite. Nei pitch book la pagina dei comparabili mostra di solito EV/EBITDA e P/E per l'anno in corso e il successivo, più colonne di crescita e marginalità che spiegano perché alcuni comparabili trattano a premio."
        )
      },
      { type: 'exercise', questionId: 'val-mul-q1' },
      { type: 'exercise', questionId: 'val-mul-q3' },
      { type: 'exercise', questionId: 'val-mul-q5' },
      {
        type: 'interview',
        question: l(
          'Two companies have the same EV/EBITDA but very different P/E ratios. How is that possible?',
          'Due società hanno lo stesso EV/EBITDA ma P/E molto diversi. Com’è possibile?'
        ),
        answer: l(
          'EV/EBITDA sits above D&A, interest and tax, while P/E sits below all three. So differences in leverage (interest expense and a smaller equity value), D&A intensity, tax rates or non-operating items change the P/E without touching EV/EBITDA. A more levered company, for example, typically has a different P/E because its earnings are reduced by interest and its equity is a smaller slice of EV.',
          "L'EV/EBITDA sta sopra ammortamenti, interessi e imposte, mentre il P/E sta sotto tutte e tre le voci. Quindi differenze di leva (interessi passivi e un equity value più piccolo), intensità degli ammortamenti, aliquote fiscali o poste non operative cambiano il P/E senza toccare l'EV/EBITDA. Una società più indebitata, ad esempio, ha tipicamente un P/E diverso perché i suoi utili sono ridotti dagli interessi e il suo equity è una fetta più piccola dell'EV."
        )
      },
      {
        type: 'mistakes',
        items: [
          l('Mixing EV with net income or equity value with EBITDA.', "Mischiare l'EV con l'utile netto o l'equity value con l'EBITDA."),
          l('Comparing an LTM multiple for one company with an NTM multiple for another.', 'Confrontare un multiplo LTM di una società con un multiplo NTM di un’altra.'),
          l('Using EV/EBITDA for a capital-intensive business without checking EV/EBIT or CapEx.', "Usare l'EV/EBITDA per un business capital intensive senza controllare EV/EBIT o CapEx."),
          l('Quoting P/E for a loss-making company (negative P/E is not meaningful).', 'Citare il P/E di una società in perdita (un P/E negativo non ha significato).')
        ]
      },
      {
        type: 'summary',
        items: [
          l('EV pairs with pre-interest metrics; equity value pairs with post-interest metrics.', "L'EV si abbina a metriche prima degli interessi; l'equity value a metriche dopo gli interessi."),
          l('EV/EBITDA is the default; EV/EBIT for capex-heavy peers; EV/Revenue for loss-makers; P/E for financials.', "EV/EBITDA è il default; EV/EBIT per settori ad alto CapEx; EV/Ricavi per società in perdita; P/E per le finanziarie."),
          l('Always match the period (LTM vs NTM) and accounting basis.', 'Allinea sempre il periodo (LTM vs NTM) e la base contabile.')
        ]
      }
    ],
    questions: [
      {
        id: 'val-mul-q1',
        kind: 'numeric',
        topic: 'multiples',
        difficulty: 1,
        objective: l('Compute EV/EBITDA.', "Calcolare l'EV/EBITDA."),
        prompt: l(
          'Kappa has an EV of €1,600m and EBITDA of €250m. What is EV/EBITDA (x)?',
          "Kappa ha un EV di €1.600m e un EBITDA di €250m. Qual è l'EV/EBITDA (x)?"
        ),
        answer: 6.4,
        unit: 'x',
        verify: { fn: 'multiple', args: [1600, 250] },
        explanation: l('1,600 / 250 = 6.4x. Using equity value (1,200) would give 4.8x, an inconsistent multiple.', '1.600 / 250 = 6,4x. Usare l’equity value (1.200) darebbe 4,8x, un multiplo incoerente.')
      },
      {
        id: 'val-mul-q2',
        kind: 'numeric',
        topic: 'multiples',
        difficulty: 1,
        objective: l('Compute P/E.', 'Calcolare il P/E.'),
        prompt: l('A share trades at €45 and diluted EPS is €3.00. What is the P/E (x)?', 'Un’azione quota €45 e l’EPS diluito è €3,00. Qual è il P/E (x)?'),
        answer: 15,
        unit: 'x',
        verify: { fn: 'peRatio', args: [45, 3] },
        explanation: l('P/E = 45 / 3 = 15x: investors pay €15 for each €1 of annual earnings.', 'P/E = 45 / 3 = 15x: gli investitori pagano €15 per ogni €1 di utile annuo.')
      },
      {
        id: 'val-mul-q3',
        kind: 'mcq',
        topic: 'multiples',
        difficulty: 2,
        objective: l('Apply the numerator–denominator consistency rule.', 'Applicare la regola di coerenza numeratore–denominatore.'),
        prompt: l('Which multiple is internally consistent?', 'Quale multiplo è coerente?'),
        choices: [
          l('EV / Net income', 'EV / Utile netto'),
          l('Equity value / EBITDA', 'Equity value / EBITDA'),
          l('Equity value / Revenue', 'Equity value / Ricavi'),
          l('EV / EBIT', 'EV / EBIT')
        ],
        correct: 3,
        explanation: l(
          'EBIT is before interest, so it belongs to all capital providers, like EV. The others mix a pre-interest measure with equity value, or a post-interest measure with EV. (Equity value/Revenue, the "price-to-sales" ratio, is quoted in practice but is not leverage-neutral.)',
          "L'EBIT è prima degli interessi, quindi appartiene a tutti i finanziatori, come l'EV. Gli altri mischiano una misura prima degli interessi con l'equity value, o una dopo gli interessi con l'EV. (Equity value/Ricavi, il \"price-to-sales\", si vede nella pratica ma non è neutrale rispetto alla leva.)"
        )
      },
      {
        id: 'val-mul-q4',
        kind: 'multi',
        topic: 'multiples',
        difficulty: 2,
        objective: l('Choose suitable multiples for different businesses.', 'Scegliere multipli adatti a diversi business.'),
        prompt: l('Which pairings are sensible? Select all that apply.', 'Quali abbinamenti sono sensati? Seleziona tutte le risposte corrette.'),
        choices: [
          l('Loss-making high-growth software company → EV/Revenue', 'Società software in perdita e in forte crescita → EV/Ricavi'),
          l('Commercial bank → EV/EBITDA', 'Banca commerciale → EV/EBITDA'),
          l('Capital-intensive manufacturer with peers of different CapEx intensity → EV/EBIT alongside EV/EBITDA', 'Manifatturiera capital intensive con comparabili a diversa intensità di CapEx → EV/EBIT insieme a EV/EBITDA'),
          l('Insurer → P/E and P/BV', 'Assicurazione → P/E e P/BV'),
          l('Company with negative net income → P/E', 'Società con utile netto negativo → P/E')
        ],
        correct: [0, 2, 3],
        explanation: l(
          'Revenue works when profits are negative; EV/EBIT adjusts for reinvestment; financials are valued on equity multiples. EV/EBITDA is meaningless for banks (interest is operating), and a negative P/E is not interpretable.',
          "I ricavi funzionano quando gli utili sono negativi; l'EV/EBIT corregge per il reinvestimento; le finanziarie si valutano con multipli di equity. L'EV/EBITDA non ha senso per le banche (gli interessi sono operativi), e un P/E negativo non è interpretabile."
        )
      },
      {
        id: 'val-mul-q5',
        kind: 'numeric',
        topic: 'multiples',
        difficulty: 2,
        objective: l('Apply a multiple to derive a value per share.', 'Applicare un multiplo per ricavare un valore per azione.'),
        prompt: l(
          'Peers trade at 8.0x EV/EBITDA. Lambda S.p.A. has EBITDA of €120m, net debt of €300m and 50m diluted shares. Implied value per share (€)?',
          "I comparabili trattano a 8,0x EV/EBITDA. Lambda S.p.A. ha EBITDA di €120m, PFN di €300m e 50m di azioni diluite. Valore implicito per azione (€)?"
        ),
        answer: 13.2,
        unit: '€',
        verify: { fn: 'impliedSharePrice', args: [960, 300, 50] },
        steps: [
          l('EV = 8.0 × 120 = 960', 'EV = 8,0 × 120 = 960'),
          l('Equity = 960 − 300 = 660', 'Equity = 960 − 300 = 660'),
          l('Per share = 660 / 50 = €13.20', 'Per azione = 660 / 50 = €13,20')
        ],
        explanation: l(
          'An EV multiple gives EV, so you must subtract net debt before dividing by shares. Skipping the bridge gives €19.20.',
          "Un multiplo di EV dà l'EV, quindi devi sottrarre la PFN prima di dividere per le azioni. Saltare il ponte darebbe €19,20."
        )
      }
    ],
    flashcards: [
      { id: 'fc-val-mul-1', topic: 'multiples', front: l('Which metrics pair with EV?', "Quali metriche si abbinano all'EV?"), back: l('Pre-interest: Revenue, EBITDA, EBIT, UFCF.', 'Prima degli interessi: Ricavi, EBITDA, EBIT, UFCF.') },
      { id: 'fc-val-mul-2', topic: 'multiples', front: l('Which metrics pair with equity value?', "Quali metriche si abbinano all'equity value?"), back: l('Post-interest: net income (P/E), book value (P/BV), levered FCF.', 'Dopo gli interessi: utile netto (P/E), patrimonio netto (P/BV), FCF levered.') },
      { id: 'fc-val-mul-3', topic: 'multiples', front: l('Main weakness of EV/EBITDA?', "Principale limite dell'EV/EBITDA?"), back: l('Ignores CapEx and D&A intensity — flatters capital-intensive businesses.', 'Ignora CapEx e intensità degli ammortamenti — favorisce i business capital intensive.') },
      { id: 'fc-val-mul-4', topic: 'multiples', front: l('When is EV/Revenue used?', 'Quando si usa EV/Ricavi?'), back: l('Loss-making or early-stage companies where EBITDA/earnings are negative or not meaningful.', 'Società in perdita o early stage con EBITDA/utili negativi o non significativi.') }
    ]
  },
  /* ======================================================================= */
  /* V3 — val-trading-comps                                                   */
  /* ======================================================================= */
  {
    id: 'val-trading-comps',
    academyId: 'valuation',
    moduleId: 'V3',
    mode: 'deep',
    minutes: 12,
    difficulty: 2,
    reviewed: '2026-10',
    objective: l(
      'Run a trading comparables analysis: select peers, calendarise and compute LTM/NTM metrics, benchmark with median and quartiles, and derive a valuation range.',
      "Svolgere un'analisi dei comparabili quotati: selezionare i peer, calendarizzare e calcolare metriche LTM/NTM, usare mediana e quartili e ricavare un intervallo di valore."
    ),
    screens: [
      {
        type: 'intuition',
        title: l('What is the market paying today?', 'Quanto paga oggi il mercato?'),
        body: l(
          'Trading comps answer one question: **what are public investors paying right now for businesses like this one?**\n\nIt is a snapshot of market sentiment — fast, observable and hard to argue with. But it is only as good as the peer group: compare a luxury brand with a discount retailer and the answer is meaningless.\n\nComps value a **minority stake** (a normal share trade), so they carry **no control premium**.',
          "I comparabili quotati rispondono a una domanda: **quanto pagano oggi gli investitori di borsa per business come questo?**\n\nÈ una fotografia del sentiment di mercato — rapida, osservabile e difficile da contestare. Ma vale quanto il campione di comparabili: confronta un marchio del lusso con un discount e il risultato non ha senso.\n\nI comparabili valutano una **quota di minoranza** (il normale scambio di azioni), quindi **non includono un premio di controllo**."
        )
      },
      {
        type: 'technical',
        title: l('Choosing the peer group', 'Scegliere il campione'),
        body: l(
          'Start with **business** similarity, then refine on **financial** similarity:\n\n- Sector, products, end markets and business model.\n- Geography and customer base.\n- Size (revenue, market cap).\n- Growth, margins, return on capital and leverage.\n\nA typical comp set has 5–15 names, often split into tiers (closest peers vs broader sector). Where perfect peers do not exist — common for Italian mid-caps — analysts explain the differences rather than force a match.',
          "Parti dalla similarità di **business**, poi affina sulla similarità **finanziaria**:\n\n- Settore, prodotti, mercati di sbocco e modello di business.\n- Area geografica e tipologia di clientela.\n- Dimensione (ricavi, capitalizzazione).\n- Crescita, margini, redditività del capitale e leva.\n\nUn campione tipico ha 5–15 società, spesso divise in fasce (peer più vicini vs settore allargato). Quando non esistono comparabili perfetti — frequente per le mid-cap italiane — gli analisti spiegano le differenze anziché forzare l'abbinamento."
        )
      },
      {
        type: 'technical',
        title: l('LTM, NTM and calendarisation', 'LTM, NTM e calendarizzazione'),
        body: l(
          '- **LTM** (last twelve months): latest annual figure + current year-to-date − prior year-to-date. Actual, but backward-looking.\n- **NTM / forward** (e.g. FY+1 consensus): reflects expected growth; most used in practice for listed peers.\n- **Calendarisation**: if a peer’s fiscal year ends in March, blend two fiscal years so every company is measured on the same calendar period (e.g. Dec-26).\n\nFor a growing company, NTM multiples are **lower** than LTM multiples because the forward metric is larger.',
          "- **LTM** (ultimi dodici mesi): ultimo dato annuale + progressivo dell'anno in corso − progressivo dell'anno precedente. Dato consuntivo, ma retrospettivo.\n- **NTM / forward** (es. consensus FY+1): riflette la crescita attesa; il più usato in pratica per le quotate.\n- **Calendarizzazione**: se un comparabile chiude l'esercizio a marzo, si combinano due esercizi per misurare tutte le società sullo stesso periodo di calendario (es. dic-26).\n\nPer una società in crescita i multipli NTM sono **più bassi** di quelli LTM perché la metrica forward è più grande."
        )
      },
      {
        type: 'formula',
        formulas: [
          { name: l('LTM metric', 'Metrica LTM'), expr: 'LTM = Last fiscal year + Current YTD − Prior-year YTD' },
          {
            name: l('Calendarisation (FY ends March, target Dec year)', 'Calendarizzazione (esercizio a marzo, anno solare a dicembre)'),
            expr: 'CY = 3/12 × FY(Mar, same year) + 9/12 × FY(Mar, next year)'
          },
          { name: l('Implied value', 'Valore implicito'), expr: 'Implied EV = Selected peer multiple × Target metric' }
        ]
      },
      {
        type: 'example',
        title: l('Comp set for Mu S.p.A.', 'Campione per Mu S.p.A.'),
        body: l(
          'Six peers’ EV/EBITDA NTM: 6.5x, 7.2x, 8.0x, 8.4x, 9.1x, 12.5x. Median 8.2x (the 12.5x outlier pulls the mean to 8.6x). Interquartile range (Excel QUARTILE.INC) ≈ 7.4x–8.9x. Mu’s NTM EBITDA is €50m.',
          "EV/EBITDA NTM di sei comparabili: 6,5x, 7,2x, 8,0x, 8,4x, 9,1x, 12,5x. Mediana 8,2x (l'outlier a 12,5x porta la media a 8,6x). Intervallo interquartile (QUARTILE.INC di Excel) ≈ 7,4x–8,9x. L'EBITDA NTM di Mu è €50m."
        ),
        table: {
          headers: [l('Statistic', 'Statistica'), l('EV/EBITDA', 'EV/EBITDA'), l('Implied EV (€m)', 'EV implicito (€m)')],
          rows: [
            [l('25th percentile', '25° percentile'), '7.4x', '370'],
            [l('Median', 'Mediana'), '8.2x', '410'],
            [l('75th percentile', '75° percentile'), '8.9x', '446']
          ]
        }
      },
      {
        type: 'realworld',
        body: l(
          'Analysts "spread comps" from filings and consensus (FactSet, Bloomberg, Capital IQ), using diluted shares and the full EV bridge for every peer. The output is usually a range around the median or interquartile range rather than a single number — and the MD will ask why the target deserves to sit at the top or bottom of it (growth, margins, size, risk).',
          "Gli analisti \"spreadano\" i comparabili da bilanci e consensus (FactSet, Bloomberg, Capital IQ), usando azioni diluite e il ponte EV completo per ogni peer. Il risultato è di solito un intervallo attorno alla mediana o al range interquartile, non un singolo numero — e l'MD chiederà perché il target meriti di stare nella parte alta o bassa del range (crescita, margini, dimensione, rischio)."
        )
      },
      { type: 'exercise', questionId: 'val-tc-q1' },
      { type: 'exercise', questionId: 'val-tc-q2' },
      { type: 'exercise', questionId: 'val-tc-q3' },
      { type: 'exercise', questionId: 'val-tc-q6' },
      {
        type: 'interview',
        question: l('How would you pick comparable companies for a valuation?', 'Come sceglieresti le società comparabili per una valutazione?'),
        answer: l(
          'First on business characteristics — same industry, products, customers, end markets and geography — then on financial profile: size, growth, margins and leverage. I would aim for five to fifteen names, tier them by closeness, calendarise to a common year-end, use consistent definitions (diluted shares, IFRS 16, adjusted EBITDA) and focus on the median rather than the mean to limit outliers. Then I would position the target within the range based on how its growth and margins compare.',
          "Prima sulle caratteristiche del business — stesso settore, prodotti, clienti, mercati di sbocco e area geografica — poi sul profilo finanziario: dimensione, crescita, margini e leva. Punterei a cinque–quindici società, divise in fasce per vicinanza, calendarizzate sulla stessa chiusura, con definizioni coerenti (azioni diluite, IFRS 16, EBITDA adjusted), usando la mediana invece della media per limitare gli outlier. Poi posizionerei il target nel range in base a come crescita e margini si confrontano con i peer."
        )
      },
      {
        type: 'mistakes',
        items: [
          l('Using the mean when a single outlier distorts it.', 'Usare la media quando un singolo outlier la distorce.'),
          l('Mixing fiscal years ending in different months without calendarising.', 'Mischiare esercizi che chiudono in mesi diversi senza calendarizzare.'),
          l('Applying a trading multiple to value a control stake without adding a premium.', 'Applicare un multiplo di borsa per valutare una quota di controllo senza aggiungere un premio.'),
          l('Choosing peers only by sector code, ignoring business model and growth.', 'Scegliere i comparabili solo per codice settoriale, ignorando modello di business e crescita.')
        ]
      },
      {
        type: 'summary',
        items: [
          l('Comps show what the market pays today for similar businesses — minority basis, no control premium.', 'I comparabili mostrano quanto il mercato paga oggi per business simili — base di minoranza, senza premio di controllo.'),
          l('Select peers on business first, financials second.', 'Seleziona i peer prima sul business, poi sui dati finanziari.'),
          l('Calendarise; use LTM for actuals, NTM for forward-looking comparisons.', 'Calendarizza; usa LTM per i consuntivi e NTM per i confronti prospettici.'),
          l('Benchmark with median and quartiles; apply to the target’s metric.', 'Usa mediana e quartili; applicali alla metrica del target.')
        ]
      }
    ],
    questions: [
      {
        id: 'val-tc-q1',
        kind: 'numeric',
        topic: 'trading-comps',
        difficulty: 1,
        objective: l('Compute the median peer multiple.', 'Calcolare il multiplo mediano del campione.'),
        prompt: l(
          'Peer EV/EBITDA multiples: 6.5x, 7.2x, 8.0x, 8.4x, 9.1x, 12.5x. What is the median (x)?',
          'Multipli EV/EBITDA dei peer: 6,5x, 7,2x, 8,0x, 8,4x, 9,1x, 12,5x. Qual è la mediana (x)?'
        ),
        answer: 8.2,
        unit: 'x',
        verify: { fn: 'median', args: [[6.5, 7.2, 8.0, 8.4, 9.1, 12.5]] },
        explanation: l(
          'With six values the median is the average of the 3rd and 4th: (8.0 + 8.4) / 2 = 8.2x. The mean (8.6x) is pulled up by the 12.5x outlier.',
          'Con sei valori la mediana è la media del 3° e del 4°: (8,0 + 8,4) / 2 = 8,2x. La media (8,6x) è spinta verso l’alto dall’outlier a 12,5x.'
        )
      },
      {
        id: 'val-tc-q2',
        kind: 'numeric',
        topic: 'trading-comps',
        difficulty: 2,
        objective: l('Calendarise a non-December fiscal year.', "Calendarizzare un esercizio che non chiude a dicembre."),
        prompt: l(
          'A peer’s fiscal year ends 31 March. EBITDA: FY Mar-26 €100m, FY Mar-27E €120m. What is its calendar-year 2026 (Jan–Dec) EBITDA (€m)?',
          "Un comparabile chiude l'esercizio al 31 marzo. EBITDA: FY mar-26 €100m, FY mar-27E €120m. Qual è l'EBITDA dell'anno solare 2026 (gen–dic) (€m)?"
        ),
        answer: 115,
        unit: '€m',
        verify: { fn: 'sum', args: [25, 90] },
        steps: [
          l('Jan–Mar 2026 is in FY Mar-26: 3/12 × 100 = 25', 'Gen–mar 2026 cade nel FY mar-26: 3/12 × 100 = 25'),
          l('Apr–Dec 2026 is in FY Mar-27: 9/12 × 120 = 90', 'Apr–dic 2026 cade nel FY mar-27: 9/12 × 120 = 90'),
          l('CY2026 = 25 + 90 = 115', 'Anno solare 2026 = 25 + 90 = 115')
        ],
        explanation: l(
          'Three months of calendar 2026 fall in FY Mar-26 and nine months in FY Mar-27. Reversing the weights would give 105.',
          'Tre mesi del 2026 cadono nel FY mar-26 e nove nel FY mar-27. Invertire i pesi darebbe 105.'
        )
      },
      {
        id: 'val-tc-q3',
        kind: 'numeric',
        topic: 'trading-comps',
        difficulty: 2,
        objective: l('Compute an LTM figure.', 'Calcolare un dato LTM.'),
        prompt: l(
          'FY25 EBITDA €400m; 9M26 EBITDA €320m; 9M25 EBITDA €290m. LTM EBITDA at 30 September 2026 (€m)?',
          'EBITDA FY25 €400m; EBITDA 9M26 €320m; EBITDA 9M25 €290m. EBITDA LTM al 30 settembre 2026 (€m)?'
        ),
        answer: 430,
        unit: '€m',
        verify: { fn: 'sum', args: [400, 320, -290] },
        explanation: l(
          'LTM = 400 + 320 − 290 = 430: the full year 2025, swapping out the first nine months of 2025 for the first nine months of 2026.',
          'LTM = 400 + 320 − 290 = 430: l’intero 2025, sostituendo i primi nove mesi del 2025 con i primi nove mesi del 2026.'
        )
      },
      {
        id: 'val-tc-q4',
        kind: 'mcq',
        topic: 'trading-comps',
        difficulty: 2,
        objective: l('Interpret LTM vs NTM multiples.', 'Interpretare i multipli LTM vs NTM.'),
        prompt: l(
          'For a company whose EBITDA is growing 15% a year, how does EV/EBITDA NTM compare with EV/EBITDA LTM?',
          "Per una società con EBITDA in crescita del 15% annuo, come si confronta l'EV/EBITDA NTM con l'EV/EBITDA LTM?"
        ),
        choices: [
          l('NTM is higher, because the market prices future growth', 'NTM è più alto, perché il mercato prezza la crescita futura'),
          l('They are equal, because EV is the same', "Sono uguali, perché l'EV è lo stesso"),
          l('NTM is lower, because the same EV is divided by a larger EBITDA', 'NTM è più basso, perché lo stesso EV è diviso per un EBITDA maggiore'),
          l('It depends only on net debt', 'Dipende solo dalla PFN')
        ],
        correct: 2,
        explanation: l(
          'The numerator (today’s EV) is identical; the NTM denominator is larger for a growing company, so the NTM multiple is lower. This is why LTM and NTM multiples must never be mixed.',
          'Il numeratore (EV di oggi) è identico; il denominatore NTM è più grande per una società in crescita, quindi il multiplo NTM è più basso. Per questo multipli LTM e NTM non vanno mai mischiati.'
        )
      },
      {
        id: 'val-tc-q5',
        kind: 'multi',
        topic: 'trading-comps',
        difficulty: 1,
        objective: l('Identify sound peer-selection criteria.', 'Individuare criteri validi di selezione dei peer.'),
        prompt: l('Which criteria are relevant when selecting trading comparables? Select all that apply.', 'Quali criteri sono rilevanti nella scelta dei comparabili quotati? Seleziona tutte le risposte corrette.'),
        choices: [
          l('Similar business model and end markets', 'Modello di business e mercati di sbocco simili'),
          l('Similar growth and margin profile', 'Profilo di crescita e marginalità simile'),
          l('Same share price level', 'Stesso livello di prezzo per azione'),
          l('Comparable size', 'Dimensione comparabile'),
          l('Same auditor', 'Stesso revisore')
        ],
        correct: [0, 1, 3],
        explanation: l(
          'Business model, financial profile and size drive multiples. The nominal share price says nothing about valuation (it depends on the number of shares), and the auditor is irrelevant.',
          "Modello di business, profilo finanziario e dimensione guidano i multipli. Il prezzo nominale dell'azione non dice nulla sulla valutazione (dipende dal numero di azioni), e il revisore è irrilevante."
        )
      },
      {
        id: 'val-tc-q6',
        kind: 'numeric',
        topic: 'trading-comps',
        difficulty: 2,
        objective: l('Apply a median multiple to the target.', 'Applicare il multiplo mediano al target.'),
        prompt: l(
          'Using the 8.2x median EV/EBITDA and Mu’s NTM EBITDA of €50m, what is Mu’s implied EV (€m)?',
          "Usando la mediana di 8,2x EV/EBITDA e l'EBITDA NTM di Mu di €50m, qual è l'EV implicito di Mu (€m)?"
        ),
        answer: 410,
        unit: '€m',
        verify: { fn: 'product', args: [8.2, 50] },
        explanation: l(
          '8.2 × 50 = 410. This is an EV; to get a per-share value you would then run the EV-to-equity bridge.',
          "8,2 × 50 = 410. È un EV; per ottenere il valore per azione bisogna poi applicare il ponte EV–equity."
        )
      },
      {
        id: 'val-tc-q7',
        kind: 'order',
        topic: 'trading-comps',
        difficulty: 1,
        objective: l('Sequence a comps analysis.', "Ordinare le fasi di un'analisi dei comparabili."),
        prompt: l('Put the steps of a trading comps analysis in order.', "Metti in ordine le fasi di un'analisi dei comparabili quotati."),
        items: [
          l('Select the peer group', 'Selezionare il campione'),
          l('Gather financials, share counts and consensus estimates', 'Raccogliere dati finanziari, azioni e stime di consensus'),
          l('Normalise and calendarise the metrics', 'Normalizzare e calendarizzare le metriche'),
          l('Compute EVs and multiples; derive median and quartiles', 'Calcolare EV e multipli; ricavare mediana e quartili'),
          l('Apply the selected range to the target', 'Applicare il range scelto al target')
        ],
        explanation: l(
          'Peers first, then data, then clean-up so figures are comparable, then multiples, and finally application to the target.',
          'Prima i peer, poi i dati, poi la pulizia per renderli confrontabili, poi i multipli e infine l’applicazione al target.'
        )
      }
    ],
    flashcards: [
      { id: 'fc-val-tc-1', topic: 'trading-comps', front: l('LTM formula?', 'Formula LTM?'), back: l('Last fiscal year + current YTD − prior-year YTD.', 'Ultimo esercizio + progressivo anno in corso − progressivo anno precedente.') },
      { id: 'fc-val-tc-2', topic: 'trading-comps', front: l('Why median rather than mean in comps?', 'Perché la mediana e non la media nei comparabili?'), back: l('Robust to outliers in small samples.', 'È robusta agli outlier in campioni piccoli.') },
      { id: 'fc-val-tc-3', topic: 'trading-comps', front: l('Do trading comps include a control premium?', 'I comparabili di borsa includono un premio di controllo?'), back: l('No — they reflect minority share trades.', 'No — riflettono scambi di quote di minoranza.') },
      { id: 'fc-val-tc-4', topic: 'trading-comps', front: l('What is calendarisation?', 'Cos’è la calendarizzazione?'), back: l('Time-weighting fiscal years so all peers are measured over the same calendar period.', 'Ponderare gli esercizi per il tempo in modo che tutti i peer siano misurati sullo stesso periodo di calendario.') },
      { id: 'fc-val-tc-5', topic: 'trading-comps', front: l('Growing company: NTM multiple vs LTM multiple?', 'Società in crescita: multiplo NTM vs LTM?'), back: l('NTM is lower (bigger denominator, same EV).', 'NTM è più basso (denominatore maggiore, stesso EV).') }
    ]
  },
  /* ======================================================================= */
  /* V3 — val-precedents                                                      */
  /* ======================================================================= */
  {
    id: 'val-precedents',
    academyId: 'valuation',
    moduleId: 'V3',
    mode: 'quick',
    minutes: 9,
    difficulty: 2,
    reviewed: '2026-10',
    objective: l(
      'Use precedent transactions to value a company, explain why they usually exceed trading comps and recognise their data limitations.',
      'Usare le transazioni precedenti per valutare una società, spiegare perché di solito superano i comparabili di borsa e riconoscerne i limiti di dati.'
    ),
    screens: [
      {
        type: 'intuition',
        title: l('What did buyers pay for the whole house?', 'Quanto hanno pagato i compratori per tutta la casa?'),
        body: l(
          'Trading comps tell you what investors pay for a **single share**. Precedent transactions tell you what acquirers paid to buy **entire companies** — and with them, **control**: the right to set strategy, appoint management, change the capital structure and capture synergies.\n\nControl is worth something, so buyers pay a **premium** over the market price. That is why precedent multiples are usually higher than trading multiples.',
          "I comparabili di borsa ti dicono quanto pagano gli investitori per una **singola azione**. Le transazioni precedenti ti dicono quanto hanno pagato gli acquirenti per comprare **intere società** — e con esse il **controllo**: il diritto di decidere la strategia, nominare il management, cambiare la struttura finanziaria e catturare sinergie.\n\nIl controllo ha un valore, quindi i compratori pagano un **premio** rispetto al prezzo di mercato. Per questo i multipli delle transazioni sono di norma più alti di quelli di borsa."
        )
      },
      {
        type: 'technical',
        title: l('How the analysis works', "Come funziona l'analisi"),
        body: l(
          '- Screen deals in the same sector (and ideally similar size, geography and time period) — often the last 5–10 years.\n- For each deal compute **transaction EV** = offer equity value (diluted at the offer price) + net debt and other claims assumed.\n- Divide by the target’s **LTM** metrics at announcement (LTM because forecasts of private targets are rarely disclosed).\n- For public targets, also compute the **offer premium** to the undisturbed share price (before rumours or leaks).\n- Take median/quartiles and apply to the target’s LTM metric.',
          "- Seleziona deal dello stesso settore (idealmente di dimensione, area geografica e periodo simili) — spesso gli ultimi 5–10 anni.\n- Per ogni deal calcola l'**EV di transazione** = equity value dell'offerta (diluito al prezzo d'offerta) + PFN e altri diritti assunti.\n- Dividi per le metriche **LTM** del target all'annuncio (LTM perché le previsioni dei target privati raramente sono pubbliche).\n- Per i target quotati calcola anche il **premio** rispetto al prezzo indisturbato (prima di rumor o fughe di notizie).\n- Prendi mediana/quartili e applicali alla metrica LTM del target."
        )
      },
      {
        type: 'formula',
        formulas: [
          { name: l('Transaction multiple', 'Multiplo di transazione'), expr: 'Transaction EV / Target LTM EBITDA' },
          {
            name: l('Offer premium', "Premio d'offerta"),
            expr: 'Premium = Offer price / Undisturbed price − 1'
          }
        ],
        note: l(
          'The undisturbed price is typically the close on the last trading day before the announcement or the first credible leak; premiums are often also shown against 1-month or 3-month volume-weighted averages.',
          "Il prezzo indisturbato è di solito la chiusura dell'ultimo giorno di borsa prima dell'annuncio o della prima indiscrezione credibile; spesso i premi si mostrano anche rispetto alle medie ponderate per i volumi a 1 o 3 mesi."
        )
      },
      {
        type: 'example',
        title: l('Precedents for Nu S.r.l. (private target)', 'Precedenti per Nu S.r.l. (target non quotato)'),
        body: l(
          'Five sector deals since 2021 show EV/LTM EBITDA of 9.5x, 10.2x, 11.0x, 12.4x and 13.1x — median **11.0x**, versus about 8x for trading peers. Nu’s LTM EBITDA is €80m → implied EV ≈ **€880m**.',
          "Cinque deal del settore dal 2021 mostrano EV/EBITDA LTM di 9,5x, 10,2x, 11,0x, 12,4x e 13,1x — mediana **11,0x**, contro circa 8x per i comparabili di borsa. L'EBITDA LTM di Nu è €80m → EV implicito ≈ **€880m**."
        ),
        table: {
          headers: [l('Why precedents > comps', 'Perché precedenti > comparabili'), l('Effect', 'Effetto')],
          rows: [
            [l('Control premium', 'Premio di controllo'), l('Buyer gains control of cash flows and strategy', 'Il compratore ottiene il controllo di flussi e strategia')],
            [l('Synergies', 'Sinergie'), l('Strategic buyers share part of expected synergies with the seller', 'I compratori strategici cedono al venditore parte delle sinergie attese')],
            [l('Competitive auctions', 'Aste competitive'), l('Multiple bidders push the price up', 'Più offerenti spingono il prezzo al rialzo')],
            [l('Market timing', 'Timing di mercato'), l('Deals cluster in buoyant markets', 'I deal si concentrano nei mercati più vivaci')]
          ]
        }
      },
      {
        type: 'technical',
        title: l('Data issues to flag', 'Problemi di dati da segnalare'),
        body: l(
          '- **Limited disclosure**: private deals often do not publish price or financials.\n- **Stale data**: a 2021 deal was priced in a very different rate and multiple environment.\n- **Deal-specific factors**: synergies, distress, minority vs majority stakes, earn-outs and deferred payments.\n- **Few relevant deals**: small samples make the median fragile.\n- **Inconsistent metrics**: reported vs adjusted EBITDA, pre- vs post-IFRS 16.',
          "- **Informativa limitata**: i deal privati spesso non pubblicano prezzo o dati finanziari.\n- **Dati datati**: un deal del 2021 è stato prezzato in un contesto di tassi e multipli molto diverso.\n- **Fattori specifici**: sinergie, situazioni di crisi, quote di minoranza vs maggioranza, earn-out e pagamenti differiti.\n- **Pochi deal rilevanti**: campioni piccoli rendono fragile la mediana.\n- **Metriche incoerenti**: EBITDA riportato vs adjusted, pre- vs post-IFRS 16."
        )
      },
      {
        type: 'realworld',
        body: l(
          'Analysts build precedent tables from Mergermarket, Dealogic, Capital IQ, press releases, offer documents and fairness opinions. For Italian public takeovers (OPA), the offer document filed with CONSOB discloses the price and premiums against historical averages, which makes those deals a reliable data source. In sell-side pitches, the precedents bar on the football field supports the seller’s price expectations.',
          "Gli analisti costruiscono le tabelle dei precedenti da Mergermarket, Dealogic, Capital IQ, comunicati stampa, documenti d'offerta e fairness opinion. Nelle OPA italiane il documento d'offerta depositato in CONSOB riporta prezzo e premi rispetto alle medie storiche, il che rende quei deal una fonte affidabile. Nei pitch sell-side la barra dei precedenti nel football field sostiene le aspettative di prezzo del venditore."
        )
      },
      { type: 'exercise', questionId: 'val-pt-q1' },
      { type: 'exercise', questionId: 'val-pt-q2' },
      { type: 'exercise', questionId: 'val-pt-q3' },
      {
        type: 'interview',
        question: l('Why are precedent transaction multiples usually higher than trading comps?', 'Perché i multipli delle transazioni precedenti sono di solito più alti dei comparabili di borsa?'),
        answer: l(
          'Because acquirers buy control, not a minority share. Control lets them change strategy and capital structure and capture synergies, so they pay a premium over the undisturbed share price. Competitive auctions and the fact that deals cluster in strong markets push multiples up further. The exception is when markets have re-rated upwards since the deals were done, or when a precedent involved a distressed seller.',
          "Perché gli acquirenti comprano il controllo, non una quota di minoranza. Il controllo permette di cambiare strategia e struttura finanziaria e di catturare sinergie, quindi pagano un premio sul prezzo indisturbato. Le aste competitive e il fatto che i deal si concentrino nei mercati forti spingono ulteriormente i multipli. L'eccezione è quando i multipli di borsa sono saliti dopo quei deal, o quando un precedente riguardava un venditore in difficoltà."
        )
      },
      {
        type: 'mistakes',
        items: [
          l('Measuring the premium against a price already inflated by rumours.', 'Misurare il premio rispetto a un prezzo già gonfiato dai rumor.'),
          l('Mixing majority and minority-stake transactions without adjustment.', 'Mischiare transazioni di maggioranza e di minoranza senza rettifiche.'),
          l('Relying on deals from a very different market cycle without comment.', 'Basarsi su deal di un ciclo di mercato molto diverso senza commentarlo.'),
          l('Applying LTM precedent multiples to the target’s forward EBITDA.', 'Applicare multipli LTM dei precedenti all’EBITDA prospettico del target.')
        ]
      },
      {
        type: 'summary',
        items: [
          l('Precedents show what buyers paid for control of similar companies.', 'I precedenti mostrano quanto i compratori hanno pagato per il controllo di società simili.'),
          l('Usually above comps: control premium, synergies, auctions, timing.', 'Di solito sopra i comparabili: premio di controllo, sinergie, aste, timing.'),
          l('Use LTM metrics at announcement and premiums vs the undisturbed price.', "Usa metriche LTM all'annuncio e premi rispetto al prezzo indisturbato."),
          l('Data are patchy and dated — interpret with judgement.', 'I dati sono frammentari e datati — interpretali con giudizio.')
        ]
      }
    ],
    questions: [
      {
        id: 'val-pt-q1',
        kind: 'numeric',
        topic: 'precedent-transactions',
        difficulty: 1,
        objective: l('Compute an offer premium.', "Calcolare un premio d'offerta."),
        prompt: l(
          'The undisturbed share price was €20.00 and the bidder offers €26.00 per share. Offer premium (%)?',
          "Il prezzo indisturbato era €20,00 e l'offerente propone €26,00 per azione. Premio d'offerta (%)?"
        ),
        answer: 30,
        unit: '%',
        tolerance: { abs: 0.1 },
        verify: { fn: 'ratio', args: [600, 20] },
        explanation: l(
          '26 / 20 − 1 = 30%. Dividing the €6 uplift by the offer price (23%) is a common error — the premium is measured on the undisturbed price.',
          "26 / 20 − 1 = 30%. Dividere i €6 di differenza per il prezzo d'offerta (23%) è un errore comune — il premio si misura sul prezzo indisturbato."
        )
      },
      {
        id: 'val-pt-q2',
        kind: 'numeric',
        topic: 'precedent-transactions',
        difficulty: 2,
        objective: l('Derive an implied EV from precedent multiples.', 'Ricavare un EV implicito dai multipli dei precedenti.'),
        prompt: l(
          'Precedent EV/LTM EBITDA: 9.5x, 10.2x, 11.0x, 12.4x, 13.1x. Target LTM EBITDA €80m. Implied EV at the median (€m)?',
          'EV/EBITDA LTM dei precedenti: 9,5x, 10,2x, 11,0x, 12,4x, 13,1x. EBITDA LTM del target €80m. EV implicito alla mediana (€m)?'
        ),
        answer: 880,
        unit: '€m',
        verify: { fn: 'product', args: [11, 80] },
        steps: [
          l('Median of five values = 3rd value = 11.0x', 'Mediana di cinque valori = 3° valore = 11,0x'),
          l('EV = 11.0 × 80 = 880', 'EV = 11,0 × 80 = 880')
        ],
        explanation: l('Median 11.0x × €80m = €880m. The mean (11.24x) would give about €899m.', 'Mediana 11,0x × €80m = €880m. La media (11,24x) darebbe circa €899m.')
      },
      {
        id: 'val-pt-q3',
        kind: 'mcq',
        topic: 'precedent-transactions',
        difficulty: 2,
        objective: l('Explain the precedent premium over comps.', 'Spiegare il premio dei precedenti sui comparabili.'),
        prompt: l('What is the main reason precedent multiples exceed trading multiples?', 'Qual è la ragione principale per cui i multipli dei precedenti superano quelli di borsa?'),
        choices: [
          l('Precedents use forward metrics, which are smaller', 'I precedenti usano metriche forward, che sono più piccole'),
          l('Acquirers pay a control premium, often reflecting expected synergies', 'Gli acquirenti pagano un premio di controllo, spesso legato alle sinergie attese'),
          l('Private companies are always less risky than listed ones', 'Le società private sono sempre meno rischiose delle quotate'),
          l('Transaction EV excludes net debt', "L'EV di transazione esclude la PFN")
        ],
        correct: 1,
        explanation: l(
          'Control and synergies justify paying above the market price. Precedents typically use LTM (not forward) metrics; private firms are not inherently less risky; transaction EV includes net debt.',
          "Controllo e sinergie giustificano un prezzo superiore a quello di mercato. I precedenti usano tipicamente metriche LTM (non forward); le private non sono intrinsecamente meno rischiose; l'EV di transazione include la PFN."
        )
      },
      {
        id: 'val-pt-q4',
        kind: 'multi',
        topic: 'precedent-transactions',
        difficulty: 2,
        objective: l('Identify limitations of precedent analysis.', "Individuare i limiti dell'analisi dei precedenti."),
        prompt: l('Which are genuine limitations of precedent transactions? Select all that apply.', 'Quali sono limiti reali delle transazioni precedenti? Seleziona tutte le risposte corrette.'),
        choices: [
          l('Deal terms of private transactions are often undisclosed', 'I termini dei deal privati spesso non sono pubblici'),
          l('Multiples reflect market conditions at the time of each deal', 'I multipli riflettono le condizioni di mercato al momento di ciascun deal'),
          l('They cannot be used for companies with positive EBITDA', 'Non si possono usare per società con EBITDA positivo'),
          l('Prices may include buyer-specific synergies', 'I prezzi possono includere sinergie specifiche del compratore'),
          l('Earn-outs and deferred consideration complicate the headline price', 'Earn-out e prezzi differiti complicano il prezzo dichiarato')
        ],
        correct: [0, 1, 3, 4],
        explanation: l(
          'Disclosure gaps, timing, buyer-specific synergies and complex consideration all distort precedents. There is no rule against companies with positive EBITDA — that is the normal case.',
          "Lacune informative, timing, sinergie specifiche del compratore e corrispettivi complessi distorcono i precedenti. Non esiste alcun divieto per le società con EBITDA positivo — è il caso normale."
        )
      },
      {
        id: 'val-pt-q5',
        kind: 'mcq',
        topic: 'precedent-transactions',
        difficulty: 2,
        objective: l('Choose the right reference price for a premium.', 'Scegliere il prezzo di riferimento corretto per un premio.'),
        prompt: l(
          'Press reports of a possible bid appeared on 3 March; the offer was announced on 20 March. Which price is the best "undisturbed" reference?',
          "Le prime notizie di stampa su una possibile offerta sono uscite il 3 marzo; l'offerta è stata annunciata il 20 marzo. Qual è il miglior prezzo \"indisturbato\" di riferimento?"
        ),
        choices: [
          l('The close on 2 March, the last day before the leak', 'La chiusura del 2 marzo, ultimo giorno prima della fuga di notizie'),
          l('The close on 19 March', 'La chiusura del 19 marzo'),
          l('The 52-week high', 'Il massimo a 52 settimane'),
          l('The offer price itself', "Lo stesso prezzo d'offerta")
        ],
        correct: 0,
        explanation: l(
          'After 3 March the share price already embeds bid speculation, so premiums measured on 19 March would look artificially low. The 52-week high is not an undisturbed price.',
          "Dopo il 3 marzo il prezzo incorpora già le speculazioni sull'offerta, quindi i premi misurati al 19 marzo apparirebbero artificialmente bassi. Il massimo a 52 settimane non è un prezzo indisturbato."
        )
      }
    ],
    flashcards: [
      { id: 'fc-val-pt-1', topic: 'precedent-transactions', front: l('Offer premium formula?', "Formula del premio d'offerta?"), back: l('Offer price / undisturbed price − 1', 'Prezzo d’offerta / prezzo indisturbato − 1') },
      { id: 'fc-val-pt-2', topic: 'precedent-transactions', front: l('Four reasons precedents > comps?', 'Quattro motivi per cui precedenti > comparabili?'), back: l('Control premium, synergies, competitive auctions, deals cluster in strong markets.', 'Premio di controllo, sinergie, aste competitive, deal concentrati nei mercati forti.') },
      { id: 'fc-val-pt-3', topic: 'precedent-transactions', front: l('Which period metric is standard for precedents?', 'Quale metrica temporale è standard per i precedenti?'), back: l('LTM at announcement.', "LTM all'annuncio.") },
      { id: 'fc-val-pt-4', topic: 'precedent-transactions', front: l('Main data problems of precedents?', 'Principali problemi di dati dei precedenti?'), back: l('Undisclosed terms, stale market conditions, deal-specific factors, small samples.', 'Termini non pubblici, condizioni di mercato datate, fattori specifici del deal, campioni piccoli.') }
    ]
  },
  /* ======================================================================= */
  /* V4 — val-dcf-overview                                                    */
  /* ======================================================================= */
  {
    id: 'val-dcf-overview',
    academyId: 'valuation',
    moduleId: 'V4',
    mode: 'deep',
    minutes: 12,
    difficulty: 2,
    reviewed: '2026-10',
    objective: l(
      'Explain the intuition and structure of a DCF, from forecast cash flows to value per share, and judge when a DCF is (and is not) the right tool.',
      "Spiegare l'intuizione e la struttura di un DCF, dai flussi previsti al valore per azione, e giudicare quando il DCF è (e non è) lo strumento giusto."
    ),
    screens: [
      {
        type: 'intuition',
        title: l('A business is a cash machine', 'Un’azienda è una macchina da cassa'),
        body: l(
          'Why would anyone pay for a company? Only for the **cash it will hand back** over its life.\n\nBut €100 next year is worth less than €100 today: you could invest today’s money, and next year’s €100 might not arrive. So we **discount** future cash at a rate that reflects the time value of money and the risk.\n\n**Value = sum of all future cash flows, each converted into today’s euros.** That is a DCF — everything else is detail.',
          "Perché qualcuno dovrebbe pagare per un'azienda? Solo per la **cassa che restituirà** nel corso della sua vita.\n\nMa €100 l'anno prossimo valgono meno di €100 oggi: potresti investire i soldi di oggi, e i €100 dell'anno prossimo potrebbero non arrivare. Quindi **attualizziamo** la cassa futura a un tasso che riflette il valore temporale del denaro e il rischio.\n\n**Valore = somma di tutti i flussi futuri, ciascuno convertito in euro di oggi.** Questo è un DCF — il resto sono dettagli."
        )
      },
      {
        type: 'technical',
        title: l('The two-stage structure', 'La struttura a due stadi'),
        body: l(
          'We cannot forecast forever, so a DCF splits the future in two:\n\n- **Explicit forecast period** (typically 5–10 years): project revenue, margins, CapEx and working capital year by year → UFCF each year.\n- **Terminal value (TV)**: one number capturing all cash flows after the forecast, assuming a steady state (perpetual growth or an exit multiple).\n\nBoth are discounted at the **WACC** — the blended return required by lenders and shareholders — to give **enterprise value**.',
          "Non possiamo prevedere all'infinito, quindi un DCF divide il futuro in due:\n\n- **Periodo di previsione esplicita** (tipicamente 5–10 anni): si proiettano ricavi, margini, CapEx e circolante anno per anno → UFCF di ogni anno.\n- **Valore terminale (TV)**: un unico numero che cattura tutti i flussi successivi, ipotizzando uno stato stazionario (crescita perpetua o multiplo di uscita).\n\nEntrambi si attualizzano al **WACC** — il rendimento medio richiesto da finanziatori e azionisti — per ottenere l'**enterprise value**."
        )
      },
      {
        type: 'formula',
        formulas: [
          {
            name: l('Enterprise value (unlevered DCF)', 'Enterprise value (DCF unlevered)'),
            expr: 'EV = Σ UFCF_t / (1 + WACC)^t  +  TV_N / (1 + WACC)^N',
            vars: [
              { sym: 'UFCF_t', desc: l('Unlevered free cash flow in year t', 'Free cash flow unlevered nell’anno t') },
              { sym: 'N', desc: l('Last year of the explicit forecast', "Ultimo anno della previsione esplicita") },
              { sym: 'TV_N', desc: l('Value at end of year N of all later cash flows', "Valore a fine anno N di tutti i flussi successivi") }
            ]
          },
          { name: l('Discount factor', 'Fattore di sconto'), expr: 'DF_t = 1 / (1 + WACC)^t' },
          { name: l('To value per share', 'Al valore per azione'), expr: 'Value per share = (EV − Net debt − Other claims) / Diluted shares' }
        ]
      },
      {
        type: 'example',
        title: l('A three-year toy DCF', 'Un DCF giocattolo a tre anni'),
        body: l(
          'Omicron: UFCF €100m, €110m, €120m in years 1–3; terminal value at end of year 3 €1,500m; WACC 10%.',
          'Omicron: UFCF €100m, €110m, €120m negli anni 1–3; valore terminale a fine anno 3 €1.500m; WACC 10%.'
        ),
        table: {
          headers: [l('Year', 'Anno'), l('UFCF', 'UFCF'), l('Discount factor', 'Fattore di sconto'), l('PV', 'VA')],
          rows: [
            ['1', '100', '0.9091', '90.9'],
            ['2', '110', '0.8264', '90.9'],
            ['3', '120', '0.7513', '90.2'],
            [l('TV (end of year 3)', 'TV (fine anno 3)'), '1,500', '0.7513', '1,127.0'],
            [l('Enterprise value', 'Enterprise value'), '', '', '1,399.0']
          ],
          totalRows: [4]
        }
      },
      {
        type: 'technical',
        title: l('What drives the answer', 'Cosa guida il risultato'),
        body: l(
          'In the toy example the TV is **80%** of EV — typical of real DCFs (often 60–80%+). So the value rests mostly on long-run assumptions: terminal growth, steady-state margins and the WACC.\n\n- Higher WACC → lower value (future cash is worth less today).\n- Higher growth or margins → higher value.\n- Cash flows further away are discounted more heavily.\n\nThat is why every DCF ends with a **sensitivity table** — a single point estimate is false precision.',
          "Nell'esempio il TV è l'**80%** dell'EV — tipico dei DCF reali (spesso 60–80% e oltre). Il valore poggia quindi soprattutto su ipotesi di lungo periodo: crescita terminale, margini a regime e WACC.\n\n- WACC più alto → valore più basso (la cassa futura vale meno oggi).\n- Crescita o margini più alti → valore più alto.\n- I flussi più lontani sono scontati di più.\n\nPer questo ogni DCF si chiude con una **tabella di sensitività** — una stima puntuale è falsa precisione."
        )
      },
      {
        type: 'realworld',
        body: l(
          'DCFs are central in fairness opinions, sell-side valuations and private company deals where no good comps exist (e.g. infrastructure and utilities with long, predictable cash flows). They are less reliable for early-stage companies with negative cash flows, cyclical businesses at a peak, and banks — where debt is operating and an equity-based model (dividend discount) is used instead. Analysts usually build the DCF on management’s business plan, then run a "bank case" with more conservative assumptions.',
          "I DCF sono centrali nelle fairness opinion, nelle valutazioni sell-side e nei deal su società private senza buoni comparabili (es. infrastrutture e utility con flussi lunghi e prevedibili). Sono meno affidabili per società early stage con flussi negativi, business ciclici al picco e banche — dove il debito è operativo e si usa un modello basato sull'equity (dividend discount). Gli analisti costruiscono di solito il DCF sul business plan del management, poi elaborano un \"bank case\" con ipotesi più prudenti."
        )
      },
      { type: 'exercise', questionId: 'val-dcfo-q1' },
      { type: 'exercise', questionId: 'val-dcfo-q2' },
      { type: 'exercise', questionId: 'val-dcfo-q3' },
      { type: 'exercise', questionId: 'val-dcfo-q4' },
      {
        type: 'interview',
        question: l('Walk me through a DCF.', 'Mi spieghi come si fa un DCF.'),
        answer: l(
          'A DCF values a company as the present value of its future cash flows. I project unlevered free cash flow — EBIT after tax, plus D&A, minus CapEx and the change in working capital — for five to ten years. Then I estimate a terminal value with the perpetuity growth method or an exit multiple. I discount both at the WACC to get enterprise value, subtract net debt and other claims to get equity value, and divide by diluted shares for a value per share. Finally I sensitise the result to WACC, terminal growth and key operating assumptions.',
          "Un DCF valuta una società come valore attuale dei suoi flussi futuri. Proietto il free cash flow unlevered — EBIT dopo le imposte, più ammortamenti, meno CapEx e variazione del circolante — per cinque–dieci anni. Poi stimo un valore terminale con il metodo della crescita perpetua o con un multiplo di uscita. Attualizzo entrambi al WACC per ottenere l'enterprise value, sottraggo PFN e altri diritti per arrivare all'equity value e divido per le azioni diluite per il valore per azione. Infine faccio la sensitività rispetto a WACC, crescita terminale e principali ipotesi operative."
        )
      },
      {
        type: 'mistakes',
        items: [
          l('Forgetting to discount the terminal value back to today.', 'Dimenticare di attualizzare il valore terminale a oggi.'),
          l('Discounting unlevered cash flows at the cost of equity.', 'Attualizzare flussi unlevered al costo dell’equity.'),
          l('Stopping at EV when the question asks for value per share.', "Fermarsi all'EV quando la domanda chiede il valore per azione."),
          l('Presenting a single DCF value without sensitivities.', 'Presentare un unico valore DCF senza sensitività.')
        ]
      },
      {
        type: 'summary',
        items: [
          l('Value = present value of future cash flows.', 'Valore = valore attuale dei flussi futuri.'),
          l('Explicit forecast (5–10 years) + terminal value, discounted at WACC = EV.', 'Previsione esplicita (5–10 anni) + valore terminale, attualizzati al WACC = EV.'),
          l('TV is usually the majority of EV, so long-run assumptions dominate.', "Il TV è di solito la maggior parte dell'EV, quindi dominano le ipotesi di lungo periodo."),
          l('Bridge EV to equity and divide by diluted shares.', "Passa dall'EV all'equity e dividi per le azioni diluite.")
        ]
      }
    ],
    questions: [
      {
        id: 'val-dcfo-q1',
        kind: 'numeric',
        topic: 'dcf',
        difficulty: 1,
        objective: l('Discount a single future cash flow.', 'Attualizzare un singolo flusso futuro.'),
        prompt: l('What is the present value (€m) of €121m received in two years at a 10% discount rate?', 'Qual è il valore attuale (€m) di €121m incassati tra due anni a un tasso del 10%?'),
        answer: 100,
        unit: '€m',
        verify: { fn: 'pv', args: [121, 0.1, 2] },
        explanation: l('121 / 1.10² = 121 / 1.21 = 100. Discounting only one year (110) ignores compounding.', '121 / 1,10² = 121 / 1,21 = 100. Attualizzare per un solo anno (110) ignora la capitalizzazione composta.')
      },
      {
        id: 'val-dcfo-q2',
        kind: 'numeric',
        topic: 'dcf',
        difficulty: 2,
        objective: l('Compute EV from forecast cash flows and a terminal value.', "Calcolare l'EV da flussi previsti e valore terminale."),
        prompt: l(
          'UFCF of €100m, €110m and €120m in years 1–3, a terminal value of €1,500m at the end of year 3 and a WACC of 10%. Enterprise value (€m)?',
          "UFCF di €100m, €110m e €120m negli anni 1–3, valore terminale di €1.500m a fine anno 3 e WACC del 10%. Enterprise value (€m)?"
        ),
        answer: 1399,
        unit: '€m',
        tolerance: { abs: 1 },
        verify: { fn: 'dcfEnterpriseValue', args: [[100, 110, 120], 0.1, 1500] },
        steps: [
          l('PV of UFCF = 90.9 + 90.9 + 90.2 = 272.0', 'VA degli UFCF = 90,9 + 90,9 + 90,2 = 272,0'),
          l('PV of TV = 1,500 / 1.1³ = 1,127.0', 'VA del TV = 1.500 / 1,1³ = 1.127,0'),
          l('EV ≈ 1,399', 'EV ≈ 1.399')
        ],
        explanation: l(
          'EV ≈ 272.0 + 1,127.0 = 1,399. Adding the undiscounted TV would give about 1,772.',
          "EV ≈ 272,0 + 1.127,0 = 1.399. Sommare il TV non attualizzato darebbe circa 1.772."
        )
      },
      {
        id: 'val-dcfo-q3',
        kind: 'order',
        topic: 'dcf',
        difficulty: 1,
        objective: l('Sequence the steps of a DCF.', 'Ordinare i passaggi di un DCF.'),
        prompt: l('Put the DCF steps in order.', 'Metti in ordine i passaggi del DCF.'),
        items: [
          l('Forecast unlevered free cash flows', 'Prevedere i free cash flow unlevered'),
          l('Estimate the terminal value', 'Stimare il valore terminale'),
          l('Discount cash flows and TV at the WACC', 'Attualizzare flussi e TV al WACC'),
          l('Sum to enterprise value', "Sommare per ottenere l'enterprise value"),
          l('Subtract net debt and other claims → equity value', "Sottrarre PFN e altri diritti → equity value"),
          l('Divide by diluted shares → value per share', 'Dividere per le azioni diluite → valore per azione')
        ],
        explanation: l(
          'Forecast, terminal value, discount, sum, bridge, per share. (The WACC is estimated in parallel with the forecast.)',
          'Previsione, valore terminale, attualizzazione, somma, ponte, valore per azione. (Il WACC si stima in parallelo alla previsione.)'
        )
      },
      {
        id: 'val-dcfo-q4',
        kind: 'mcq',
        topic: 'dcf',
        difficulty: 1,
        objective: l('Understand the effect of the discount rate on value.', 'Capire l’effetto del tasso di sconto sul valore.'),
        prompt: l('All else equal, if the WACC rises from 9% to 10%, the DCF enterprise value:', "A parità di altre condizioni, se il WACC sale dal 9% al 10%, l'enterprise value del DCF:"),
        choices: [
          l('Rises, because the company earns more', 'Sale, perché la società guadagna di più'),
          l('Is unchanged, because cash flows are the same', 'Non cambia, perché i flussi sono gli stessi'),
          l('Falls, because future cash flows are discounted more heavily', 'Scende, perché i flussi futuri sono scontati di più'),
          l('Falls only if the company has debt', 'Scende solo se la società ha debito')
        ],
        correct: 2,
        explanation: l(
          'A higher discount rate lowers every discount factor and the Gordon terminal value (WACC − g grows), so EV falls regardless of capital structure.',
          'Un tasso di sconto più alto riduce ogni fattore di sconto e il valore terminale di Gordon (WACC − g aumenta), quindi l’EV scende a prescindere dalla struttura finanziaria.'
        )
      },
      {
        id: 'val-dcfo-q5',
        kind: 'multi',
        topic: 'dcf',
        difficulty: 2,
        objective: l('Judge when a DCF is appropriate.', 'Valutare quando un DCF è appropriato.'),
        prompt: l('For which businesses is an unlevered DCF a natural primary method? Select all that apply.', 'Per quali business un DCF unlevered è un metodo principale naturale? Seleziona tutte le risposte corrette.'),
        choices: [
          l('A regulated utility with predictable cash flows', 'Una utility regolata con flussi prevedibili'),
          l('A commercial bank', 'Una banca commerciale'),
          l('A toll-road concession with a long contracted life', 'Una concessione autostradale con lunga durata contrattuale'),
          l('A pre-revenue biotech start-up (as the sole method)', 'Una start-up biotech senza ricavi (come unico metodo)'),
          l('A mature consumer-goods company', 'Una società matura di beni di consumo')
        ],
        correct: [0, 2, 4],
        explanation: l(
          'Stable, forecastable cash flows suit a DCF. Banks need equity-based models (debt is operating), and a pre-revenue biotech has highly uncertain cash flows — a DCF there needs probability weighting and should not stand alone.',
          "Flussi stabili e prevedibili si prestano al DCF. Le banche richiedono modelli basati sull'equity (il debito è operativo), e una biotech senza ricavi ha flussi molto incerti — lì il DCF richiede ponderazioni probabilistiche e non dovrebbe essere usato da solo."
        )
      }
    ],
    flashcards: [
      { id: 'fc-val-dcfo-1', topic: 'dcf', front: l('DCF in one sentence?', 'Il DCF in una frase?'), back: l('Value = present value of expected future cash flows, discounted at a rate reflecting their risk.', 'Valore = valore attuale dei flussi futuri attesi, scontati a un tasso che ne riflette il rischio.') },
      { id: 'fc-val-dcfo-2', topic: 'dcf', front: l('Two stages of a DCF?', 'I due stadi di un DCF?'), back: l('Explicit forecast period (5–10 years) + terminal value.', 'Periodo di previsione esplicita (5–10 anni) + valore terminale.') },
      { id: 'fc-val-dcfo-3', topic: 'dcf', front: l('Discount factor formula?', 'Formula del fattore di sconto?'), back: l('1 / (1 + r)^t', '1 / (1 + r)^t') },
      { id: 'fc-val-dcfo-4', topic: 'dcf', front: l('Typical share of EV from terminal value?', "Quota tipica dell'EV derivante dal valore terminale?"), back: l('Often 60–80% or more.', 'Spesso 60–80% o più.') }
    ]
  },
  /* ======================================================================= */
  /* V4 — val-terminal-value                                                  */
  /* ======================================================================= */
  {
    id: 'val-terminal-value',
    academyId: 'valuation',
    moduleId: 'V4',
    mode: 'deep',
    minutes: 14,
    difficulty: 3,
    reviewed: '2026-10',
    objective: l(
      'Compute terminal value with the Gordon growth and exit multiple methods, cross-check each with the implied multiple or implied growth, and assess the share of EV coming from TV.',
      "Calcolare il valore terminale con il metodo di Gordon e con il multiplo di uscita, verificare ciascuno con il multiplo o la crescita impliciti e valutare la quota di EV derivante dal TV."
    ),
    screens: [
      {
        type: 'intuition',
        title: l('Selling the business at the end of the forecast', 'Vendere il business alla fine del piano'),
        body: l(
          'After year 5 the company does not disappear. Two ways to put a price on "everything after":\n\n- **Perpetuity growth (Gordon)**: assume the business matures and its cash flow grows at a small, constant rate forever. Value that infinite stream with one formula.\n- **Exit multiple**: imagine you sell the business at the end of year 5 at the EV/EBITDA multiple similar companies trade at.\n\nOne is intrinsic, the other market-based. Good analysts compute both and check that they tell a consistent story.',
          "Dopo l'anno 5 l'azienda non sparisce. Due modi per dare un prezzo a \"tutto ciò che viene dopo\":\n\n- **Crescita perpetua (Gordon)**: si ipotizza che il business maturi e che il suo flusso cresca a un tasso piccolo e costante per sempre. Si valuta quel flusso infinito con una sola formula.\n- **Multiplo di uscita**: si immagina di vendere il business alla fine dell'anno 5 al multiplo EV/EBITDA a cui trattano società simili.\n\nUno è intrinseco, l'altro di mercato. I bravi analisti li calcolano entrambi e verificano che raccontino una storia coerente."
        )
      },
      {
        type: 'technical',
        title: l('Gordon growth method', 'Metodo di Gordon'),
        body: l(
          '- Take the **final-year UFCF**, grow it one year: FCF_N × (1 + g). The formula needs the cash flow of year **N+1**.\n- Divide by **(WACC − g)**. The result is the value **at the end of year N**, so discount it by N years.\n- **g** must be sustainable forever: at or below long-run nominal GDP growth (in developed markets commonly assumed around 1.5–3%), and **always below the WACC**.\n- Final-year FCF must be a **steady state**: CapEx in line with growth, normal working capital, normalised margins.',
          "- Prendi l'**UFCF dell'ultimo anno** e fallo crescere di un anno: FCF_N × (1 + g). La formula richiede il flusso dell'anno **N+1**.\n- Dividi per **(WACC − g)**. Il risultato è il valore **a fine anno N**, quindi va attualizzato per N anni.\n- **g** deve essere sostenibile per sempre: pari o inferiore alla crescita nominale di lungo periodo del PIL (nei mercati sviluppati comunemente ipotizzata intorno all'1,5–3%), e **sempre inferiore al WACC**.\n- Il FCF dell'ultimo anno deve essere **a regime**: CapEx coerente con la crescita, circolante normale, margini normalizzati."
        )
      },
      {
        type: 'formula',
        formulas: [
          {
            name: l('Gordon growth TV', 'TV con il modello di Gordon'),
            expr: 'TV_N = UFCF_N × (1 + g) / (WACC − g)',
            vars: [{ sym: 'g', desc: l('Perpetual growth rate of UFCF', 'Tasso di crescita perpetua dell’UFCF') }]
          },
          { name: l('Exit multiple TV', 'TV con multiplo di uscita'), expr: 'TV_N = EBITDA_N × Exit EV/EBITDA multiple' },
          { name: l('Implied exit multiple (from Gordon)', 'Multiplo di uscita implicito (da Gordon)'), expr: 'Implied multiple = TV_N / EBITDA_N' },
          {
            name: l('Implied growth (from exit multiple)', 'Crescita implicita (dal multiplo)'),
            expr: 'g = (TV_N × WACC − UFCF_N) / (TV_N + UFCF_N)'
          }
        ],
        note: l(
          'The implied-growth formula is just the Gordon formula solved for g.',
          'La formula della crescita implicita è semplicemente la formula di Gordon risolta per g.'
        )
      },
      {
        type: 'example',
        title: l('Pi S.p.A. — both methods', 'Pi S.p.A. — entrambi i metodi'),
        body: l(
          'Year-5 UFCF €200m, year-5 EBITDA €400m, WACC 9%. Peers trade at about 8.0x EBITDA.',
          'UFCF anno 5 €200m, EBITDA anno 5 €400m, WACC 9%. I comparabili trattano a circa 8,0x EBITDA.'
        ),
        table: {
          headers: [l('Method', 'Metodo'), l('Terminal value (€m)', 'Valore terminale (€m)'), l('Cross-check', 'Verifica')],
          rows: [
            [l('Gordon, g = 2.0%', 'Gordon, g = 2,0%'), '200 × 1.02 / 0.07 = 2,914', l('Implied multiple 2,914 / 400 = 7.3x', 'Multiplo implicito 2.914 / 400 = 7,3x')],
            [l('Exit multiple 8.0x', 'Multiplo di uscita 8,0x'), '400 × 8.0 = 3,200', l('Implied g = (3,200 × 9% − 200) / 3,400 = 2.6%', 'g implicita = (3.200 × 9% − 200) / 3.400 = 2,6%')]
          ]
        }
      },
      {
        type: 'technical',
        title: l('Reading the cross-checks', 'Leggere le verifiche incrociate'),
        body: l(
          'In Pi’s case both methods agree reasonably: 2% growth implies 7.3x, and 8.0x implies 2.6% growth — both plausible.\n\nRed flags:\n\n- An exit multiple that implies **g of 5%+** in perpetuity (the company would eventually outgrow the economy).\n- A Gordon TV that implies a multiple far above where mature peers trade.\n- Using **today’s** peer multiple (possibly inflated by high growth) as the exit multiple for a business that will be mature in year 5.',
          "Nel caso di Pi i due metodi sono abbastanza coerenti: una crescita del 2% implica 7,3x, e 8,0x implica una crescita del 2,6% — entrambi plausibili.\n\nCampanelli d'allarme:\n\n- Un multiplo di uscita che implica una **g del 5% o più** in perpetuo (la società finirebbe per crescere più dell'economia).\n- Un TV di Gordon che implica un multiplo molto superiore a quello dei peer maturi.\n- Usare il multiplo **attuale** dei peer (magari gonfiato da alta crescita) come multiplo di uscita per un business che sarà maturo all'anno 5."
        )
      },
      {
        type: 'technical',
        title: l('How much of EV is TV?', "Quanta parte dell'EV è TV?"),
        body: l(
          'Always show **PV of TV / EV**. If PV of forecast cash flows is €800m and PV of TV is €1,900m, TV is **70%** of EV.\n\nA very high share (say 85–90%+) means the explicit forecast adds little information — consider a longer forecast period until the business reaches steady state.\n\n**Mid-year convention**: if cash flows are discounted at mid-year, practitioners usually discount an exit-multiple TV at N (a sale at year end) and may discount a Gordon TV at N − 0.5 for consistency; be explicit about which you use.',
          "Mostra sempre **VA del TV / EV**. Se il VA dei flussi espliciti è €800m e il VA del TV €1.900m, il TV è il **70%** dell'EV.\n\nUna quota molto alta (ad esempio 85–90% e oltre) significa che la previsione esplicita aggiunge poca informazione — valuta un periodo di previsione più lungo, fino al raggiungimento dello stato stazionario.\n\n**Convenzione di metà anno**: se i flussi sono scontati a metà anno, i professionisti di solito attualizzano un TV da multiplo a N (vendita a fine anno) e possono attualizzare un TV di Gordon a N − 0,5 per coerenza; esplicita sempre la scelta."
        )
      },
      {
        type: 'realworld',
        body: l(
          'In bank DCFs the terminal value is where most debate happens. Fairness opinions usually show both methods with ranges (e.g. g of 1.5–2.5% and exit multiples ±1.0x around peers), and investment committees challenge any TV whose implied growth or multiple looks out of line. For inflation-linked regulated assets, g may be tied to expected inflation; for declining businesses, g can be zero or negative.',
          "Nei DCF delle banche il valore terminale è il punto più dibattuto. Le fairness opinion mostrano di solito entrambi i metodi con intervalli (es. g dell'1,5–2,5% e multipli di uscita ±1,0x attorno ai peer), e i comitati d'investimento contestano ogni TV la cui crescita o multiplo implicito appaia fuori linea. Per gli asset regolati indicizzati all'inflazione g può essere legata all'inflazione attesa; per i business in declino g può essere zero o negativa."
        )
      },
      { type: 'exercise', questionId: 'val-tv-q1' },
      { type: 'exercise', questionId: 'val-tv-q2' },
      { type: 'exercise', questionId: 'val-tv-q3' },
      { type: 'exercise', questionId: 'val-tv-q4' },
      { type: 'exercise', questionId: 'val-tv-q6' },
      {
        type: 'interview',
        question: l(
          'Which terminal value method do you prefer — perpetuity growth or exit multiple?',
          'Quale metodo per il valore terminale preferisci — crescita perpetua o multiplo di uscita?'
        ),
        answer: l(
          'I would use both and cross-check them. The perpetuity growth method is more intrinsic — it relies on the company’s own cash flows and a growth rate that must stay below long-run GDP growth — but it is very sensitive to WACC and g. The exit multiple is market-based and easy to explain, but it imports current market sentiment into a DCF. So I compute the multiple implied by my Gordon TV and the growth rate implied by my exit multiple; if either looks unreasonable, I revisit the assumptions.',
          "Li userei entrambi verificandoli a vicenda. Il metodo della crescita perpetua è più intrinseco — si basa sui flussi della società e su un tasso di crescita che deve restare sotto la crescita di lungo periodo del PIL — ma è molto sensibile a WACC e g. Il multiplo di uscita è di mercato e facile da spiegare, ma porta nel DCF il sentiment attuale del mercato. Quindi calcolo il multiplo implicito nel mio TV di Gordon e la crescita implicita nel mio multiplo di uscita; se uno dei due appare irragionevole, rivedo le ipotesi."
        )
      },
      {
        type: 'mistakes',
        items: [
          l('Using FCF_N instead of FCF_N × (1 + g) in the Gordon numerator.', 'Usare FCF_N invece di FCF_N × (1 + g) al numeratore di Gordon.'),
          l('Discounting the TV by N + 1 years (or not at all).', 'Attualizzare il TV per N + 1 anni (o non attualizzarlo affatto).'),
          l('Choosing g above long-run nominal GDP growth, or close to the WACC.', 'Scegliere una g superiore alla crescita nominale di lungo periodo del PIL, o vicina al WACC.'),
          l('Applying an exit multiple to a final-year EBITDA that is not steady state.', "Applicare un multiplo di uscita a un EBITDA dell'ultimo anno non a regime.")
        ]
      },
      {
        type: 'summary',
        items: [
          l('Gordon: TV = UFCF_N × (1 + g) / (WACC − g); exit: TV = EBITDA_N × multiple.', 'Gordon: TV = UFCF_N × (1 + g) / (WACC − g); uscita: TV = EBITDA_N × multiplo.'),
          l('TV is a value at end of year N — discount it back N years.', 'Il TV è un valore a fine anno N — va attualizzato di N anni.'),
          l('Cross-check: implied multiple from Gordon, implied g from the exit multiple.', 'Verifica: multiplo implicito da Gordon, g implicita dal multiplo di uscita.'),
          l('Report PV of TV as a % of EV.', "Riporta il VA del TV come % dell'EV.")
        ]
      }
    ],
    questions: [
      {
        id: 'val-tv-q1',
        kind: 'numeric',
        topic: 'terminal-value',
        difficulty: 2,
        objective: l('Compute a Gordon growth terminal value.', 'Calcolare un valore terminale con il modello di Gordon.'),
        prompt: l(
          'Final-year (year 5) UFCF is €200m, WACC 9%, perpetual growth 2%. Terminal value at end of year 5 (€m)?',
          "L'UFCF dell'ultimo anno (anno 5) è €200m, WACC 9%, crescita perpetua 2%. Valore terminale a fine anno 5 (€m)?"
        ),
        answer: 2914.29,
        unit: '€m',
        tolerance: { abs: 0.5 },
        verify: { fn: 'terminalValueGordon', args: [200, 0.09, 0.02] },
        steps: [
          l('Year-6 UFCF = 200 × 1.02 = 204', 'UFCF anno 6 = 200 × 1,02 = 204'),
          l('TV = 204 / (0.09 − 0.02) = 2,914.3', 'TV = 204 / (0,09 − 0,02) = 2.914,3')
        ],
        explanation: l(
          '204 / 0.07 ≈ 2,914. Forgetting the (1 + g) step gives 2,857, a frequent interview slip.',
          '204 / 0,07 ≈ 2.914. Dimenticare il passaggio (1 + g) dà 2.857, un errore frequente ai colloqui.'
        )
      },
      {
        id: 'val-tv-q2',
        kind: 'numeric',
        topic: 'terminal-value',
        difficulty: 2,
        objective: l('Derive the implied exit multiple from a Gordon TV.', 'Ricavare il multiplo di uscita implicito da un TV di Gordon.'),
        prompt: l(
          'The Gordon TV is €2,914.3m and year-5 EBITDA is €400m. What EV/EBITDA multiple does it imply (x)?',
          'Il TV di Gordon è €2.914,3m e l’EBITDA dell’anno 5 è €400m. Quale multiplo EV/EBITDA implica (x)?'
        ),
        answer: 7.29,
        unit: 'x',
        tolerance: { abs: 0.01 },
        verify: { fn: 'impliedMultipleFromTV', args: [2914.2857, 400] },
        explanation: l(
          '2,914.3 / 400 ≈ 7.3x — close to peers at 8.0x, so the 2% growth assumption looks reasonable. Dividing by UFCF instead of EBITDA (14.6x) mixes metrics.',
          '2.914,3 / 400 ≈ 7,3x — vicino ai peer a 8,0x, quindi l’ipotesi di crescita del 2% appare ragionevole. Dividere per l’UFCF invece che per l’EBITDA (14,6x) confonde le metriche.'
        )
      },
      {
        id: 'val-tv-q3',
        kind: 'numeric',
        topic: 'terminal-value',
        difficulty: 2,
        objective: l('Compute an exit-multiple terminal value.', 'Calcolare un valore terminale con multiplo di uscita.'),
        prompt: l('Year-5 EBITDA €400m, exit multiple 8.0x. Terminal value (€m)?', 'EBITDA anno 5 €400m, multiplo di uscita 8,0x. Valore terminale (€m)?'),
        answer: 3200,
        unit: '€m',
        verify: { fn: 'terminalValueExitMultiple', args: [400, 8] },
        explanation: l('400 × 8.0 = 3,200, a value at the end of year 5 that must still be discounted.', '400 × 8,0 = 3.200, un valore a fine anno 5 che va ancora attualizzato.')
      },
      {
        id: 'val-tv-q4',
        kind: 'numeric',
        topic: 'terminal-value',
        difficulty: 3,
        objective: l('Back out the perpetual growth implied by an exit multiple.', 'Ricavare la crescita perpetua implicita in un multiplo di uscita.'),
        prompt: l(
          'Exit-multiple TV €3,200m, year-5 UFCF €200m, WACC 9%. Implied perpetual growth rate (%, one decimal)?',
          'TV da multiplo €3.200m, UFCF anno 5 €200m, WACC 9%. Tasso di crescita perpetua implicito (%, un decimale)?'
        ),
        answer: 2.6,
        unit: '%',
        tolerance: { abs: 0.05 },
        verify: { fn: 'ratio', args: [8800, 3400] },
        steps: [
          l('g = (TV × WACC − UFCF) / (TV + UFCF)', 'g = (TV × WACC − UFCF) / (TV + UFCF)'),
          l('= (3,200 × 0.09 − 200) / (3,200 + 200) = 88 / 3,400', '= (3.200 × 0,09 − 200) / (3.200 + 200) = 88 / 3.400'),
          l('≈ 2.59% ≈ 2.6%', '≈ 2,59% ≈ 2,6%')
        ],
        explanation: l(
          '88 / 3,400 = 2.59%. A plausible long-run rate, so the 8.0x exit multiple passes the sanity check. Using 3,200 alone in the denominator gives 2.75%.',
          '88 / 3.400 = 2,59%. Un tasso di lungo periodo plausibile, quindi il multiplo di 8,0x supera la verifica. Usare solo 3.200 al denominatore darebbe 2,75%.'
        )
      },
      {
        id: 'val-tv-q5',
        kind: 'mcq',
        topic: 'terminal-value',
        difficulty: 2,
        objective: l('Set a defensible perpetual growth rate.', 'Fissare un tasso di crescita perpetua difendibile.'),
        prompt: l(
          'Why should the perpetual growth rate not exceed long-run nominal GDP growth?',
          'Perché il tasso di crescita perpetua non dovrebbe superare la crescita nominale di lungo periodo del PIL?'
        ),
        choices: [
          l('Because accounting standards cap it at inflation', "Perché i principi contabili lo limitano all'inflazione"),
          l('Because a company growing faster than the economy forever would eventually become larger than the economy', "Perché una società che cresce per sempre più dell'economia finirebbe per diventare più grande dell'economia stessa"),
          l('Because a higher g always reduces terminal value', 'Perché una g più alta riduce sempre il valore terminale'),
          l('Because g must equal the cost of debt', 'Perché g deve essere uguale al costo del debito')
        ],
        correct: 1,
        explanation: l(
          'Perpetual means forever: any rate above economic growth implies the firm eventually exceeds the whole economy. No accounting standard sets g; higher g increases TV; g has no link to the cost of debt.',
          "Perpetua significa per sempre: qualsiasi tasso superiore alla crescita economica implica che l'impresa prima o poi superi l'intera economia. Nessun principio contabile fissa g; una g più alta aumenta il TV; g non ha legami con il costo del debito."
        )
      },
      {
        id: 'val-tv-q6',
        kind: 'numeric',
        topic: 'terminal-value',
        difficulty: 2,
        objective: l('Measure the weight of terminal value in EV.', "Misurare il peso del valore terminale nell'EV."),
        prompt: l(
          'PV of forecast UFCF is €800m and PV of terminal value is €1,900m. What share of EV comes from TV (%, one decimal)?',
          "Il VA degli UFCF espliciti è €800m e il VA del valore terminale €1.900m. Quale quota dell'EV deriva dal TV (%, un decimale)?"
        ),
        answer: 70.4,
        unit: '%',
        tolerance: { abs: 0.05 },
        verify: { fn: 'ratio', args: [190000, 2700] },
        explanation: l(
          '1,900 / (800 + 1,900) = 70.4%. Dividing by PV of forecast cash flows (237.5%) is a ratio, not a share of EV.',
          "1.900 / (800 + 1.900) = 70,4%. Dividere per il VA dei flussi espliciti (237,5%) dà un rapporto, non una quota dell'EV."
        )
      }
    ],
    flashcards: [
      { id: 'fc-val-tv-1', topic: 'terminal-value', front: l('Gordon growth TV formula?', 'Formula del TV di Gordon?'), back: l('UFCF_N × (1 + g) / (WACC − g)', 'UFCF_N × (1 + g) / (WACC − g)') },
      { id: 'fc-val-tv-2', topic: 'terminal-value', front: l('Implied growth from an exit-multiple TV?', 'Crescita implicita da un TV con multiplo?'), back: l('g = (TV × WACC − UFCF_N) / (TV + UFCF_N)', 'g = (TV × WACC − UFCF_N) / (TV + UFCF_N)') },
      { id: 'fc-val-tv-3', topic: 'terminal-value', front: l('At what point in time is the TV measured?', 'A quale momento si riferisce il TV?'), back: l('End of the final forecast year N — discount by N years.', "Fine dell'ultimo anno di previsione N — si attualizza per N anni.") },
      { id: 'fc-val-tv-4', topic: 'terminal-value', front: l('Upper bound for perpetual growth g?', 'Limite superiore per la crescita perpetua g?'), back: l('Long-run nominal GDP growth, and always below WACC.', 'Crescita nominale di lungo periodo del PIL, e sempre sotto il WACC.') },
      { id: 'fc-val-tv-5', topic: 'terminal-value', front: l('Red flag if TV is what % of EV?', 'Campanello d’allarme se il TV è quale % dell’EV?'), back: l('Very high shares (≈85–90%+) suggest the forecast is too short or not at steady state.', 'Quote molto alte (≈85–90%+) suggeriscono una previsione troppo breve o non a regime.') }
    ]
  },
  /* ======================================================================= */
  /* V4 — val-dcf-walkthrough                                                 */
  /* ======================================================================= */
  {
    id: 'val-dcf-walkthrough',
    academyId: 'valuation',
    moduleId: 'V4',
    mode: 'deep',
    minutes: 18,
    difficulty: 3,
    reviewed: '2026-10',
    objective: l(
      'Build a complete five-year DCF: UFCF → present values → terminal value → EV → equity value → value per share, including the mid-year convention.',
      'Costruire un DCF completo a cinque anni: UFCF → valori attuali → valore terminale → EV → equity value → valore per azione, inclusa la convenzione di metà anno.'
    ),
    screens: [
      {
        type: 'intuition',
        title: l('Same idea, more rows', 'Stessa idea, più righe'),
        body: l(
          'A real DCF is the toy model with more discipline: each year you ask **how much cash the operations produce after tax and reinvestment**, convert it into today’s euros, add the value of everything after the forecast, then hand the lenders their share.\n\nWe will value **Sigma S.p.A.** step by step — the same layout an analyst uses in Excel. Keep a calculator handy.',
          "Un DCF reale è il modello giocattolo con più disciplina: per ogni anno ti chiedi **quanta cassa produce l'attività operativa dopo imposte e reinvestimenti**, la converti in euro di oggi, aggiungi il valore di tutto ciò che viene dopo il piano, poi dai ai finanziatori la loro parte.\n\nValuteremo **Sigma S.p.A.** passo per passo — con lo stesso schema che un analista usa in Excel. Tieni a portata di mano una calcolatrice."
        )
      },
      {
        type: 'technical',
        title: l('Sigma’s assumptions', 'Le ipotesi di Sigma'),
        body: l(
          '- Forecast: 5 years; tax rate **25%** on EBIT.\n- WACC **10%**; perpetual growth **2%** (Gordon method).\n- Net debt **€300m**; **50m** diluted shares.\n- End-of-year discounting (then we test mid-year).\n\nThe projections (EBIT, D&A, CapEx, ΔNWC) come from the business plan: revenue growth × margin assumptions drive EBIT; CapEx and working capital are usually set as % of revenue.',
          "- Previsione: 5 anni; aliquota **25%** sull'EBIT.\n- WACC **10%**; crescita perpetua **2%** (metodo di Gordon).\n- PFN **€300m**; **50m** azioni diluite.\n- Attualizzazione a fine anno (poi testiamo la metà anno).\n\nLe proiezioni (EBIT, ammortamenti, CapEx, ΔCCN) vengono dal business plan: crescita dei ricavi × ipotesi di margine determinano l'EBIT; CapEx e circolante sono di solito impostati in % dei ricavi."
        )
      },
      {
        type: 'formula',
        formulas: [
          { name: l('Step 1 — UFCF', 'Passo 1 — UFCF'), expr: 'UFCF_t = EBIT_t × (1 − t) + D&A_t − CapEx_t − ΔNWC_t' },
          { name: l('Step 2 — Present value', 'Passo 2 — Valore attuale'), expr: 'PV_t = UFCF_t / (1 + WACC)^t' },
          { name: l('Step 3 — Terminal value', 'Passo 3 — Valore terminale'), expr: 'TV_5 = UFCF_5 × (1 + g) / (WACC − g);  PV(TV) = TV_5 / (1 + WACC)^5' },
          { name: l('Step 4 — Bridge', 'Passo 4 — Ponte'), expr: 'Equity = EV − Net debt;  Value per share = Equity / Diluted shares' }
        ]
      },
      {
        type: 'example',
        title: l('Sigma’s projections (€m)', 'Le proiezioni di Sigma (€m)'),
        body: l(
          'Inputs from the plan. In the exercise you will complete the UFCF and PV rows.',
          "Dati del piano. Nell'esercizio completerai le righe UFCF e VA."
        ),
        table: {
          headers: [l('€m', '€m'), l('Y1', 'A1'), l('Y2', 'A2'), l('Y3', 'A3'), l('Y4', 'A4'), l('Y5', 'A5')],
          rows: [
            ['EBIT', '100', '110', '120', '130', '140'],
            [l('NOPAT (75%)', 'NOPAT (75%)'), '75.0', '82.5', '90.0', '97.5', '105.0'],
            [l('+ D&A', '+ Ammortamenti'), '20', '22', '24', '26', '28'],
            [l('− CapEx', '− CapEx'), '(30)', '(32)', '(34)', '(36)', '(38)'],
            [l('− ΔNWC', '− ΔCCN'), '(5)', '(5)', '(6)', '(6)', '(7)'],
            [l('Discount factor @10%', 'Fattore di sconto @10%'), '0.9091', '0.8264', '0.7513', '0.6830', '0.6209']
          ]
        }
      },
      { type: 'exercise', questionId: 'val-dcfw-q1' },
      {
        type: 'technical',
        title: l('Terminal value and EV', 'Valore terminale ed EV'),
        body: l(
          '- Year-5 UFCF = **88.0**. TV = 88 × 1.02 / (0.10 − 0.02) = **1,122**.\n- PV of TV = 1,122 × 0.6209 = **696.7**.\n- Sum of PV of UFCF = **276.2**.\n- **EV = 276.2 + 696.7 = 972.9**. TV is about **72%** of EV.\n- Cross-check: year-5 EBITDA = 140 + 28 = 168 → implied exit multiple 1,122 / 168 ≈ **6.7x**. Compare with peers.',
          "- UFCF anno 5 = **88,0**. TV = 88 × 1,02 / (0,10 − 0,02) = **1.122**.\n- VA del TV = 1.122 × 0,6209 = **696,7**.\n- Somma dei VA degli UFCF = **276,2**.\n- **EV = 276,2 + 696,7 = 972,9**. Il TV è circa il **72%** dell'EV.\n- Verifica: EBITDA anno 5 = 140 + 28 = 168 → multiplo di uscita implicito 1.122 / 168 ≈ **6,7x**. Confrontalo con i peer."
        )
      },
      { type: 'exercise', questionId: 'val-dcfw-q2' },
      { type: 'exercise', questionId: 'val-dcfw-q3' },
      {
        type: 'technical',
        title: l('The mid-year convention', 'La convenzione di metà anno'),
        body: l(
          'End-of-year discounting assumes all of a year’s cash arrives on 31 December. In reality cash flows in **throughout** the year, so on average it arrives around mid-year.\n\nThe **mid-year convention** discounts year t at **t − 0.5** (0.5, 1.5, 2.5…). Every PV rises slightly, so EV rises.\n\nFor Sigma: EV goes from **972.9 to 986.4** (+1.4%), keeping the Gordon TV discounted at year 5 as in our model. Banks state the convention on the DCF output page.',
          "L'attualizzazione a fine anno ipotizza che tutta la cassa dell'anno arrivi il 31 dicembre. In realtà la cassa entra **lungo tutto** l'anno, quindi mediamente arriva verso metà anno.\n\nLa **convenzione di metà anno** attualizza l'anno t a **t − 0,5** (0,5, 1,5, 2,5…). Ogni VA sale leggermente, quindi sale l'EV.\n\nPer Sigma: l'EV passa da **972,9 a 986,4** (+1,4%), mantenendo il TV di Gordon attualizzato all'anno 5 come nel nostro modello. Le banche indicano la convenzione nella pagina di output del DCF."
        )
      },
      { type: 'exercise', questionId: 'val-dcfw-q4' },
      {
        type: 'realworld',
        body: l(
          'On the job, the DCF sits on top of a three-statement model: UFCF lines link to the income statement and cash flow forecasts, the WACC tab sources beta and spreads from Bloomberg/FactSet, and the output page shows EV, equity value, implied multiples, the TV share of EV and sensitivity tables. Analysts are expected to explain any number on that page — and to catch a sign error before the VP does.',
          "Nel lavoro reale il DCF poggia su un modello a tre prospetti: le righe dell'UFCF sono collegate alle previsioni di conto economico e rendiconto finanziario, il foglio del WACC prende beta e spread da Bloomberg/FactSet, e la pagina di output mostra EV, equity value, multipli impliciti, quota del TV sull'EV e tabelle di sensitività. Gli analisti devono saper spiegare ogni numero di quella pagina — e trovare un errore di segno prima del VP."
        )
      },
      {
        type: 'interview',
        question: l(
          'Your DCF gives a share price 40% above the current market price. What do you do?',
          'Il tuo DCF dà un prezzo per azione del 40% sopra il prezzo di mercato. Cosa fai?'
        ),
        answer: l(
          'First I check the mechanics: the bridge, the share count, signs on working capital, and whether the TV is discounted correctly. Then I test the key assumptions: is my growth or margin forecast above consensus, is the WACC too low, is terminal growth too high — and what exit multiple does the TV imply versus peers? I look at the sensitivity table to see how robust the gap is. If it survives, the DCF may be capturing something the market is not pricing, but I would present it alongside comps and precedents rather than alone.',
          "Prima controllo la meccanica: il ponte, il numero di azioni, i segni del circolante e se il TV è attualizzato correttamente. Poi testo le ipotesi chiave: le mie previsioni di crescita o margini sono sopra il consensus, il WACC è troppo basso, la crescita terminale troppo alta — e quale multiplo di uscita implica il TV rispetto ai peer? Guardo la tabella di sensitività per capire quanto è robusto il divario. Se regge, il DCF potrebbe cogliere qualcosa che il mercato non prezza, ma lo presenterei insieme a comparabili e precedenti, non da solo."
        )
      },
      {
        type: 'mistakes',
        items: [
          l('Discounting Y1 at t = 0 or the TV at t = 6.', "Attualizzare l'anno 1 a t = 0 o il TV a t = 6."),
          l('Using EBITDA instead of NOPAT as the starting point and then adding D&A again.', "Partire dall'EBITDA invece che dal NOPAT e poi sommare di nuovo gli ammortamenti."),
          l('Dividing EV (not equity value) by the share count.', "Dividere l'EV (non l'equity value) per il numero di azioni."),
          l('Applying mid-year discounting to an exit-multiple TV.', 'Applicare lo sconto di metà anno a un TV da multiplo di uscita.')
        ]
      },
      {
        type: 'summary',
        items: [
          l('UFCF each year → discount → sum (276.2).', 'UFCF per anno → attualizza → somma (276,2).'),
          l('Gordon TV 1,122 → PV 696.7 → EV 972.9.', 'TV di Gordon 1.122 → VA 696,7 → EV 972,9.'),
          l('Equity = EV − net debt = 672.9 → €13.46 per share.', 'Equity = EV − PFN = 672,9 → €13,46 per azione.'),
          l('Mid-year discounting raises EV modestly; state the convention.', 'Lo sconto a metà anno aumenta un po’ l’EV; dichiara la convenzione.')
        ]
      }
    ],
    questions: [
      {
        id: 'val-dcfw-q1',
        kind: 'grid',
        topic: 'dcf',
        difficulty: 3,
        objective: l('Compute UFCF and its present value year by year.', "Calcolare l'UFCF e il suo valore attuale anno per anno."),
        prompt: l(
          'Complete Sigma’s UFCF and PV rows (€m, 25% tax, WACC 10%, end-of-year discounting). Round PVs to one decimal.',
          'Completa le righe UFCF e VA di Sigma (€m, aliquota 25%, WACC 10%, attualizzazione a fine anno). Arrotonda i VA a un decimale.'
        ),
        columns: [l('€m', '€m'), l('Y1', 'A1'), l('Y2', 'A2'), l('Y3', 'A3'), l('Y4', 'A4'), l('Y5', 'A5')],
        unit: '€m',
        rows: [
          { label: l('EBIT', 'EBIT'), cells: [100, 110, 120, 130, 140] },
          { label: l('D&A', 'Ammortamenti'), cells: [20, 22, 24, 26, 28] },
          { label: l('CapEx', 'CapEx'), cells: [30, 32, 34, 36, 38] },
          { label: l('ΔNWC (increase)', 'ΔCCN (aumento)'), cells: [5, 5, 6, 6, 7] },
          {
            label: l('UFCF', 'UFCF'),
            cells: [
              { answer: 60, verify: { fn: 'unleveredFCF', args: [100, 0.25, 20, 30, 5] } },
              { answer: 67.5, verify: { fn: 'unleveredFCF', args: [110, 0.25, 22, 32, 5] } },
              { answer: 74, verify: { fn: 'unleveredFCF', args: [120, 0.25, 24, 34, 6] } },
              { answer: 81.5, verify: { fn: 'unleveredFCF', args: [130, 0.25, 26, 36, 6] } },
              { answer: 88, verify: { fn: 'unleveredFCF', args: [140, 0.25, 28, 38, 7] } }
            ]
          },
          {
            label: l('PV of UFCF', 'VA dell’UFCF'),
            cells: [
              { answer: 54.5, tolerance: { abs: 0.1 }, verify: { fn: 'pv', args: [60, 0.1, 1] } },
              { answer: 55.8, tolerance: { abs: 0.1 }, verify: { fn: 'pv', args: [67.5, 0.1, 2] } },
              { answer: 55.6, tolerance: { abs: 0.1 }, verify: { fn: 'pv', args: [74, 0.1, 3] } },
              { answer: 55.7, tolerance: { abs: 0.1 }, verify: { fn: 'pv', args: [81.5, 0.1, 4] } },
              { answer: 54.6, tolerance: { abs: 0.1 }, verify: { fn: 'pv', args: [88, 0.1, 5] } }
            ]
          }
        ],
        explanation: l(
          'Y1: 100 × 0.75 + 20 − 30 − 5 = 60.0 → PV 60 / 1.1 = 54.5. Repeat for each year: UFCF 60.0, 67.5, 74.0, 81.5, 88.0; PVs 54.5, 55.8, 55.6, 55.7, 54.6 (sum 276.2). Notice how discounting flattens a growing cash-flow stream.',
          "A1: 100 × 0,75 + 20 − 30 − 5 = 60,0 → VA 60 / 1,1 = 54,5. Ripeti per ogni anno: UFCF 60,0, 67,5, 74,0, 81,5, 88,0; VA 54,5, 55,8, 55,6, 55,7, 54,6 (somma 276,2). Nota come l'attualizzazione appiattisca un flusso in crescita."
        )
      },
      {
        id: 'val-dcfw-q2',
        kind: 'numeric',
        topic: 'terminal-value',
        difficulty: 2,
        objective: l('Compute the Gordon terminal value in a full DCF.', 'Calcolare il TV di Gordon in un DCF completo.'),
        prompt: l(
          'Sigma’s year-5 UFCF is €88m, WACC 10%, g 2%. Terminal value at end of year 5 (€m)?',
          "L'UFCF dell'anno 5 di Sigma è €88m, WACC 10%, g 2%. Valore terminale a fine anno 5 (€m)?"
        ),
        answer: 1122,
        unit: '€m',
        verify: { fn: 'terminalValueGordon', args: [88, 0.1, 0.02] },
        explanation: l('88 × 1.02 / 0.08 = 89.76 / 0.08 = 1,122.', '88 × 1,02 / 0,08 = 89,76 / 0,08 = 1.122.')
      },
      {
        id: 'val-dcfw-q3',
        kind: 'grid',
        topic: 'dcf',
        difficulty: 3,
        objective: l('Bridge from DCF enterprise value to value per share.', "Passare dall'EV del DCF al valore per azione."),
        prompt: l(
          'Complete Sigma’s DCF output (€m except per share). Net debt €300m, 50m diluted shares.',
          "Completa l'output del DCF di Sigma (€m tranne il valore per azione). PFN €300m, 50m azioni diluite."
        ),
        columns: [l('Item', 'Voce'), l('Value', 'Valore')],
        rows: [
          { label: l('Sum of PV of UFCF (Y1–Y5)', 'Somma VA degli UFCF (A1–A5)'), cells: [{ answer: 276.2, tolerance: { abs: 0.2 }, verify: { fn: 'dcfEnterpriseValue', args: [[60, 67.5, 74, 81.5, 88], 0.1, 0] } }] },
          { label: l('PV of terminal value (1,122)', 'VA del valore terminale (1.122)'), cells: [{ answer: 696.7, tolerance: { abs: 0.2 }, verify: { fn: 'pv', args: [1122, 0.1, 5] } }] },
          { label: l('Enterprise value', 'Enterprise value'), cells: [{ answer: 972.9, tolerance: { abs: 0.3 }, verify: { fn: 'dcfEnterpriseValue', args: [[60, 67.5, 74, 81.5, 88], 0.1, 1122] } }] },
          { label: l('− Net debt', '− PFN'), cells: ['(300.0)'] },
          { label: l('Equity value', 'Equity value'), cells: [{ answer: 672.9, tolerance: { abs: 0.3 }, verify: { fn: 'equityValueFromEV', args: [972.908, 300, 0] } }] },
          { label: l('Value per share (€)', 'Valore per azione (€)'), cells: [{ answer: 13.46, tolerance: { abs: 0.02 }, verify: { fn: 'impliedSharePrice', args: [972.908, 300, 50] } }] }
        ],
        explanation: l(
          'PV of UFCF 276.2 + PV of TV 696.7 (1,122 / 1.1⁵) = EV 972.9. Less net debt 300 = equity 672.9; ÷ 50m shares = €13.46. Dividing EV by shares (€19.46) ignores lenders.',
          "VA degli UFCF 276,2 + VA del TV 696,7 (1.122 / 1,1⁵) = EV 972,9. Meno PFN 300 = equity 672,9; ÷ 50m azioni = €13,46. Dividere l'EV per le azioni (€19,46) ignora i finanziatori."
        )
      },
      {
        id: 'val-dcfw-q4',
        kind: 'numeric',
        topic: 'dcf',
        difficulty: 3,
        objective: l('Apply the mid-year convention.', 'Applicare la convenzione di metà anno.'),
        prompt: l(
          'Recompute Sigma’s EV with mid-year discounting of the five UFCFs (t = 0.5…4.5), keeping the €1,122m TV discounted at year 5. EV (€m)?',
          "Ricalcola l'EV di Sigma con attualizzazione a metà anno dei cinque UFCF (t = 0,5…4,5), mantenendo il TV di €1.122m attualizzato all'anno 5. EV (€m)?"
        ),
        answer: 986.4,
        unit: '€m',
        tolerance: { abs: 0.3 },
        verify: { fn: 'dcfEnterpriseValue', args: [[60, 67.5, 74, 81.5, 88], 0.1, 1122, true] },
        steps: [
          l('Each PV rises by a factor of 1.1^0.5 ≈ 1.0488', 'Ogni VA aumenta di un fattore 1,1^0,5 ≈ 1,0488'),
          l('Sum of PV of UFCF ≈ 276.2 × 1.0488 ≈ 289.7', 'Somma VA degli UFCF ≈ 276,2 × 1,0488 ≈ 289,7'),
          l('EV ≈ 289.7 + 696.7 ≈ 986.4', 'EV ≈ 289,7 + 696,7 ≈ 986,4')
        ],
        explanation: l(
          'Mid-year discounting pulls each cash flow half a year closer, lifting the PV of the forecast by about 4.9% and EV from 972.9 to about 986.4.',
          "Lo sconto a metà anno avvicina ogni flusso di mezzo anno, aumentando il VA della previsione di circa il 4,9% e l'EV da 972,9 a circa 986,4."
        )
      },
      {
        id: 'val-dcfw-q5',
        kind: 'mcq',
        topic: 'dcf',
        difficulty: 2,
        objective: l('Interpret the implied exit multiple of a DCF.', 'Interpretare il multiplo di uscita implicito di un DCF.'),
        prompt: l(
          'Sigma’s Gordon TV implies about 6.7x year-5 EBITDA, while mature peers trade at 9–10x. What is the most sensible reaction?',
          'Il TV di Gordon di Sigma implica circa 6,7x l’EBITDA dell’anno 5, mentre i peer maturi trattano a 9–10x. Qual è la reazione più sensata?'
        ),
        choices: [
          l('Ignore it — multiples are irrelevant in a DCF', 'Ignorarlo — i multipli sono irrilevanti in un DCF'),
          l('Raise g to 6% so the TV matches peers', 'Alzare g al 6% così che il TV coincida con i peer'),
          l('Investigate: the WACC may be high, g low, or Sigma’s profile genuinely weaker than peers', 'Approfondire: il WACC potrebbe essere alto, g bassa, o il profilo di Sigma davvero più debole dei peer'),
          l('Switch to EV/Revenue', 'Passare a EV/Ricavi')
        ],
        correct: 2,
        explanation: l(
          'The gap is a signal to examine assumptions (WACC, g, steady-state CapEx and margins) or to justify the discount. Forcing g to 6% would breach the long-run growth constraint.',
          'Il divario è un segnale per esaminare le ipotesi (WACC, g, CapEx e margini a regime) o per giustificare lo sconto. Forzare g al 6% violerebbe il vincolo di crescita di lungo periodo.'
        )
      }
    ],
    flashcards: [
      { id: 'fc-val-dcfw-1', topic: 'dcf', front: l('Mid-year convention discount periods?', 'Periodi di sconto con la convenzione di metà anno?'), back: l('t − 0.5 for each year (0.5, 1.5, 2.5…).', 't − 0,5 per ogni anno (0,5, 1,5, 2,5…).') },
      { id: 'fc-val-dcfw-2', topic: 'dcf', front: l('Effect of mid-year convention on EV?', "Effetto della convenzione di metà anno sull'EV?"), back: l('Higher EV — cash flows are discounted half a year less.', 'EV più alto — i flussi sono scontati di mezzo anno in meno.') },
      { id: 'fc-val-dcfw-3', topic: 'dcf', front: l('DCF output page shows…?', 'Cosa mostra la pagina di output del DCF?'), back: l('EV, equity value, value per share, implied multiples, TV % of EV and sensitivity tables.', "EV, equity value, valore per azione, multipli impliciti, % del TV sull'EV e tabelle di sensitività.") },
      { id: 'fc-val-dcfw-4', topic: 'dcf', front: l('From DCF EV to share price?', 'Dall’EV del DCF al prezzo per azione?'), back: l('(EV − net debt − other claims + non-operating assets) / diluted shares.', '(EV − PFN − altri diritti + attività non operative) / azioni diluite.') }
    ]
  },
  /* ======================================================================= */
  /* V4 — val-sensitivity                                                     */
  /* ======================================================================= */
  {
    id: 'val-sensitivity',
    academyId: 'valuation',
    moduleId: 'V4',
    mode: 'deep',
    minutes: 12,
    difficulty: 2,
    reviewed: '2026-10',
    objective: l(
      'Build and read WACC × terminal growth (and other) sensitivity tables, and explain why valuation outputs are presented as ranges.',
      'Costruire e leggere tabelle di sensitività WACC × crescita terminale (e altre), spiegando perché le valutazioni si presentano come intervalli.'
    ),
    screens: [
      {
        type: 'intuition',
        title: l('What if I am wrong?', 'E se sbaglio?'),
        body: l(
          'Every DCF input is an estimate. A sensitivity table asks: **if this assumption moves a little, how much does value move?**\n\nIf a 0.5pp change in WACC moves the price by 3%, the conclusion is robust. If it moves by 20%, the "precise" €13.46 per share is really "somewhere between €11 and €17" — and the table makes that honest.',
          "Ogni input del DCF è una stima. Una tabella di sensitività chiede: **se questa ipotesi si muove di poco, quanto si muove il valore?**\n\nSe una variazione di 0,5 punti del WACC sposta il prezzo del 3%, la conclusione è robusta. Se lo sposta del 20%, il \"preciso\" €13,46 per azione è in realtà \"tra €11 e €17\" — e la tabella lo rende esplicito."
        )
      },
      {
        type: 'technical',
        title: l('The classic tables', 'Le tabelle classiche'),
        body: l(
          '- **WACC × perpetual growth** (Gordon DCF): the standard output.\n- **WACC × exit multiple** (exit-multiple DCF).\n- **Operating tables**: revenue growth × EBITDA margin, or CapEx % of sales.\n- **LBO / M&A**: entry multiple × exit multiple (IRR), synergies × premium (accretion/dilution).\n\nRanges are usually symmetric around the base case, e.g. WACC ±1.0pp in 0.5pp steps and g ±0.5pp in 0.25pp steps. In Excel they are built with **Data Table** (What-If Analysis).',
          "- **WACC × crescita perpetua** (DCF con Gordon): l'output standard.\n- **WACC × multiplo di uscita** (DCF con multiplo).\n- **Tabelle operative**: crescita dei ricavi × margine EBITDA, oppure CapEx in % dei ricavi.\n- **LBO / M&A**: multiplo d'ingresso × multiplo di uscita (IRR), sinergie × premio (accretion/dilution).\n\nGli intervalli sono di solito simmetrici attorno al caso base, ad esempio WACC ±1,0 punti a passi di 0,5 e g ±0,5 punti a passi di 0,25. In Excel si costruiscono con **Tabella dati** (Analisi di simulazione)."
        )
      },
      {
        type: 'formula',
        formulas: [
          {
            name: l('Value of a growing perpetuity', 'Valore di una rendita perpetua crescente'),
            expr: 'Value = FCF_1 / (WACC − g)'
          },
          { name: l('Percentage sensitivity', 'Sensitività percentuale'), expr: '% change = Value_new / Value_base − 1' }
        ],
        note: l(
          'Because WACC − g sits in the denominator, value is non-linear: the closer g is to WACC, the more explosive each step becomes.',
          'Poiché WACC − g sta al denominatore, il valore non è lineare: più g si avvicina al WACC, più ogni passo diventa esplosivo.'
        )
      },
      {
        type: 'example',
        title: l('A perpetuity business: FCF next year €50m', 'Un business perpetuo: FCF del prossimo anno €50m'),
        body: l(
          'EV = 50 / (WACC − g). Read along the diagonal: equal spreads (WACC − g) give equal values.',
          "EV = 50 / (WACC − g). Leggi lungo la diagonale: spread uguali (WACC − g) danno valori uguali."
        ),
        table: {
          headers: [l('WACC \\ g', 'WACC \\ g'), l('1.0%', '1,0%'), l('2.0%', '2,0%'), l('3.0%', '3,0%')],
          rows: [
            ['8.0%', '714', '833', '1,000'],
            ['9.0%', '625', '714', '833'],
            ['10.0%', '556', '625', '714']
          ]
        }
      },
      { type: 'exercise', questionId: 'val-sens-q1' },
      {
        type: 'technical',
        title: l('Reading a table like an MD', 'Leggere una tabella come un MD'),
        body: l(
          '- **Asymmetry**: from the 9%/2% base (714), +1pp g adds 119 (+17%) but −1pp g removes only 89 (−12.5%). Upside from growth is larger than downside.\n- **Plausibility**: is the high corner (8% / 3%) realistic? Shade implausible cells.\n- **Breakevens**: what WACC justifies the current share price or the bid?\n- **Range for the football field**: typically the inner block of the table (e.g. WACC ±0.5pp, g ±0.25pp), not the extreme corners.',
          "- **Asimmetria**: dal caso base 9%/2% (714), +1 punto di g aggiunge 119 (+17%) ma −1 punto toglie solo 89 (−12,5%). Il rialzo da crescita supera il ribasso.\n- **Plausibilità**: l'angolo alto (8% / 3%) è realistico? Evidenzia le celle non plausibili.\n- **Breakeven**: quale WACC giustifica il prezzo attuale o l'offerta?\n- **Range per il football field**: di solito il blocco centrale della tabella (es. WACC ±0,5 punti, g ±0,25 punti), non gli angoli estremi."
        )
      },
      {
        type: 'realworld',
        body: l(
          'Every fairness opinion and DCF page in a pitch book includes sensitivity tables, and buy-side clients often ask for scenario analysis (base, upside, downside cases with different revenue and margin paths) on top. Analysts spend time checking that tables recalculate correctly — a Data Table that silently fails to update is a classic late-night error.',
          "Ogni fairness opinion e pagina DCF di un pitch book include tabelle di sensitività, e i clienti buy-side chiedono spesso in aggiunta un'analisi di scenario (casi base, upside e downside con diversi percorsi di ricavi e margini). Gli analisti verificano che le tabelle si ricalcolino correttamente — una Tabella dati che smette di aggiornarsi senza avvisare è un classico errore notturno."
        )
      },
      { type: 'exercise', questionId: 'val-sens-q2' },
      { type: 'exercise', questionId: 'val-sens-q3' },
      {
        type: 'interview',
        question: l(
          'Which has a bigger impact on a DCF: a 1% change in WACC or a 1% change in terminal growth?',
          "Cosa ha più impatto su un DCF: una variazione dell'1% del WACC o dell'1% della crescita terminale?"
        ),
        answer: l(
          'Both act through the WACC − g spread in the terminal value, so a 1pp move in either has a similar effect on the TV. But WACC also discounts every forecast cash flow and the TV itself, so it usually has the larger overall impact on EV. Both effects are non-linear: the smaller the spread, the bigger the swing — which is why we present a WACC × g table rather than a single number.',
          "Entrambi agiscono tramite lo spread WACC − g nel valore terminale, quindi una variazione di 1 punto dell'uno o dell'altro ha un effetto simile sul TV. Ma il WACC sconta anche ogni flusso esplicito e il TV stesso, quindi di solito ha l'impatto complessivo maggiore sull'EV. Entrambi gli effetti non sono lineari: più piccolo lo spread, più ampia l'oscillazione — per questo si presenta una tabella WACC × g e non un singolo numero."
        )
      },
      {
        type: 'mistakes',
        items: [
          l('Choosing ranges so wide that the table is meaningless (e.g. g up to 5%).', 'Scegliere intervalli così ampi da rendere la tabella inutile (es. g fino al 5%).'),
          l('Sensitising inputs that barely matter while ignoring margin or growth.', 'Fare sensitività su input poco rilevanti ignorando margini o crescita.'),
          l('Forgetting that a lower WACC also changes the implied exit multiple.', 'Dimenticare che un WACC più basso cambia anche il multiplo di uscita implicito.'),
          l('Using the extreme corners of the table as the valuation range.', "Usare gli angoli estremi della tabella come range di valutazione.")
        ]
      },
      {
        type: 'summary',
        items: [
          l('Sensitivity tables turn a point estimate into a defensible range.', 'Le tabelle di sensitività trasformano una stima puntuale in un intervallo difendibile.'),
          l('WACC × g is standard; add operating tables for growth and margins.', 'WACC × g è standard; aggiungi tabelle operative per crescita e margini.'),
          l('Value is non-linear in WACC − g; small spreads are explosive.', 'Il valore non è lineare in WACC − g; spread piccoli sono esplosivi.'),
          l('Use the plausible inner range for the football field.', 'Usa il range centrale plausibile per il football field.')
        ]
      }
    ],
    questions: [
      {
        id: 'val-sens-q1',
        kind: 'grid',
        topic: 'sensitivity-analysis',
        difficulty: 2,
        objective: l('Fill in a WACC × growth sensitivity table.', 'Compilare una tabella di sensitività WACC × crescita.'),
        prompt: l(
          'A business will generate FCF of €50m next year, growing at g forever. Complete the EV table (€m, one decimal).',
          "Un business genererà un FCF di €50m il prossimo anno, crescente a g per sempre. Completa la tabella dell'EV (€m, un decimale)."
        ),
        columns: [l('WACC \\ g', 'WACC \\ g'), l('g = 1.0%', 'g = 1,0%'), l('g = 2.0%', 'g = 2,0%'), l('g = 3.0%', 'g = 3,0%')],
        unit: '€m',
        rows: [
          {
            label: l('WACC 8.0%', 'WACC 8,0%'),
            cells: [
              { answer: 714.3, tolerance: { abs: 0.1 }, verify: { fn: 'pvGrowingPerpetuity', args: [50, 0.08, 0.01] } },
              { answer: 833.3, tolerance: { abs: 0.1 }, verify: { fn: 'pvGrowingPerpetuity', args: [50, 0.08, 0.02] } },
              { answer: 1000, tolerance: { abs: 0.1 }, verify: { fn: 'pvGrowingPerpetuity', args: [50, 0.08, 0.03] } }
            ]
          },
          {
            label: l('WACC 9.0%', 'WACC 9,0%'),
            cells: [
              { answer: 625, tolerance: { abs: 0.1 }, verify: { fn: 'pvGrowingPerpetuity', args: [50, 0.09, 0.01] } },
              '714.3',
              { answer: 833.3, tolerance: { abs: 0.1 }, verify: { fn: 'pvGrowingPerpetuity', args: [50, 0.09, 0.03] } }
            ]
          },
          {
            label: l('WACC 10.0%', 'WACC 10,0%'),
            cells: [
              { answer: 555.6, tolerance: { abs: 0.1 }, verify: { fn: 'pvGrowingPerpetuity', args: [50, 0.1, 0.01] } },
              { answer: 625, tolerance: { abs: 0.1 }, verify: { fn: 'pvGrowingPerpetuity', args: [50, 0.1, 0.02] } },
              { answer: 714.3, tolerance: { abs: 0.1 }, verify: { fn: 'pvGrowingPerpetuity', args: [50, 0.1, 0.03] } }
            ]
          }
        ],
        explanation: l(
          'Each cell is 50 / (WACC − g). Cells with the same spread match: 8%/1%, 9%/2% and 10%/3% all give 50 / 0.07 = 714.3. The top-right cell (spread 5%) is 1,000 — 40% above the base.',
          'Ogni cella è 50 / (WACC − g). Celle con lo stesso spread coincidono: 8%/1%, 9%/2% e 10%/3% danno tutte 50 / 0,07 = 714,3. La cella in alto a destra (spread 5%) vale 1.000 — il 40% sopra il caso base.'
        )
      },
      {
        id: 'val-sens-q2',
        kind: 'numeric',
        topic: 'sensitivity-analysis',
        difficulty: 3,
        objective: l('Rerun a full DCF at a different WACC.', 'Ricalcolare un DCF completo con un WACC diverso.'),
        prompt: l(
          'Sigma (UFCF €60m, 67.5m, 74m, 81.5m, 88m; g 2%) was worth an EV of €972.9m at a 10% WACC. At a 9% WACC the Gordon TV becomes €1,282.3m. New EV (€m)?',
          "Sigma (UFCF €60m, 67,5m, 74m, 81,5m, 88m; g 2%) valeva un EV di €972,9m con WACC 10%. Con WACC 9% il TV di Gordon diventa €1.282,3m. Nuovo EV (€m)?"
        ),
        answer: 1117.3,
        unit: '€m',
        tolerance: { abs: 0.5 },
        verify: { fn: 'dcfEnterpriseValue', args: [[60, 67.5, 74, 81.5, 88], 0.09, 1282.2857] },
        steps: [
          l('TV = 88 × 1.02 / (0.09 − 0.02) = 1,282.3', 'TV = 88 × 1,02 / (0,09 − 0,02) = 1.282,3'),
          l('PV of UFCF at 9% ≈ 283.9; PV of TV = 1,282.3 / 1.09⁵ ≈ 833.4', 'VA UFCF al 9% ≈ 283,9; VA TV = 1.282,3 / 1,09⁵ ≈ 833,4'),
          l('EV ≈ 1,117.3 (+14.8% vs base)', 'EV ≈ 1.117,3 (+14,8% rispetto al base)')
        ],
        explanation: l(
          'A 1pp lower WACC raises the TV by 14% and also discounts everything less, so EV rises by about 15%. Changing only the discount rate but not the TV would understate the effect.',
          "Un WACC più basso di 1 punto aumenta il TV del 14% e attualizza meno tutto il resto, quindi l'EV sale di circa il 15%. Cambiare solo il tasso di sconto senza ricalcolare il TV sottostimerebbe l'effetto."
        )
      },
      {
        id: 'val-sens-q3',
        kind: 'numeric',
        topic: 'sensitivity-analysis',
        difficulty: 2,
        objective: l('Quantify the percentage impact of a sensitivity.', "Quantificare l'impatto percentuale di una sensitività."),
        prompt: l(
          'In the perpetuity table, moving from the base case (9% / 2%, EV €714.3m) to 9% / 3% gives €833.3m. Percentage increase in EV (%, one decimal)?',
          "Nella tabella della rendita, passare dal caso base (9% / 2%, EV €714,3m) a 9% / 3% dà €833,3m. Aumento percentuale dell'EV (%, un decimale)?"
        ),
        answer: 16.7,
        unit: '%',
        tolerance: { abs: 0.1 },
        verify: { fn: 'ratio', args: [11900, 714.2857] },
        explanation: l(
          '833.3 / 714.3 − 1 = 16.7%. The spread falls from 7% to 6%, so value scales by 7/6. Dividing the change by the new value (14.3%) uses the wrong base.',
          '833,3 / 714,3 − 1 = 16,7%. Lo spread scende dal 7% al 6%, quindi il valore si moltiplica per 7/6. Dividere la variazione per il nuovo valore (14,3%) usa la base sbagliata.'
        )
      },
      {
        id: 'val-sens-q4',
        kind: 'multi',
        topic: 'sensitivity-analysis',
        difficulty: 2,
        objective: l('Recognise standard sensitivity pairs.', 'Riconoscere le coppie di sensitività standard.'),
        prompt: l('Which are standard sensitivity pairs in banking models? Select all that apply.', 'Quali sono coppie di sensitività standard nei modelli bancari? Seleziona tutte le risposte corrette.'),
        choices: [
          l('WACC × perpetual growth rate', 'WACC × tasso di crescita perpetua'),
          l('WACC × exit multiple', 'WACC × multiplo di uscita'),
          l('Revenue growth × EBITDA margin', 'Crescita dei ricavi × margine EBITDA'),
          l('Share price × number of board members', 'Prezzo per azione × numero di consiglieri'),
          l('Entry multiple × exit multiple (LBO IRR)', "Multiplo d'ingresso × multiplo di uscita (IRR dell'LBO)")
        ],
        correct: [0, 1, 2, 4],
        explanation: l(
          'All except board size are value drivers. Tables should flex the assumptions that most affect the output.',
          "Tutte tranne il numero di consiglieri sono value driver. Le tabelle devono far variare le ipotesi che incidono di più sul risultato."
        )
      },
      {
        id: 'val-sens-q5',
        kind: 'mcq',
        topic: 'sensitivity-analysis',
        difficulty: 3,
        objective: l('Explain non-linearity in Gordon valuations.', 'Spiegare la non linearità nelle valutazioni con Gordon.'),
        prompt: l(
          'At WACC 8%, raising g from 2% to 3% adds €167m, but from 1% to 2% adds only €119m. Why?',
          'Con WACC 8%, alzare g dal 2% al 3% aggiunge €167m, ma dall’1% al 2% solo €119m. Perché?'
        ),
        choices: [
          l('Because of rounding in the table', 'Per arrotondamenti nella tabella'),
          l('Because value depends on 1 / (WACC − g), which rises faster as the spread narrows', 'Perché il valore dipende da 1 / (WACC − g), che cresce più rapidamente man mano che lo spread si riduce'),
          l('Because higher growth lowers the WACC', 'Perché una crescita maggiore abbassa il WACC'),
          l('Because FCF next year changes with g', "Perché il FCF del prossimo anno cambia con g")
        ],
        correct: 1,
        explanation: l(
          '50/0.05 − 50/0.06 = 167 vs 50/0.06 − 50/0.07 = 119: the inverse function is convex. FCF next year is fixed at €50m here and g does not affect WACC.',
          '50/0,05 − 50/0,06 = 167 vs 50/0,06 − 50/0,07 = 119: la funzione inversa è convessa. Qui il FCF del prossimo anno è fisso a €50m e g non incide sul WACC.'
        )
      }
    ],
    flashcards: [
      { id: 'fc-val-sens-1', topic: 'sensitivity-analysis', front: l('Standard DCF sensitivity table?', 'Tabella di sensitività standard del DCF?'), back: l('WACC × perpetual growth (or WACC × exit multiple).', 'WACC × crescita perpetua (o WACC × multiplo di uscita).') },
      { id: 'fc-val-sens-2', topic: 'sensitivity-analysis', front: l('Excel tool for sensitivity tables?', 'Strumento Excel per le tabelle di sensitività?'), back: l('Data Table (What-If Analysis).', 'Tabella dati (Analisi di simulazione).') },
      { id: 'fc-val-sens-3', topic: 'sensitivity-analysis', front: l('Why is DCF value non-linear in g?', 'Perché il valore DCF non è lineare in g?'), back: l('TV ∝ 1 / (WACC − g): as the spread narrows, value accelerates.', 'TV ∝ 1 / (WACC − g): man mano che lo spread si riduce, il valore accelera.') },
      { id: 'fc-val-sens-4', topic: 'sensitivity-analysis', front: l('Which part of the table feeds the football field?', 'Quale parte della tabella alimenta il football field?'), back: l('The plausible inner range around the base case, not the extreme corners.', 'Il range centrale plausibile attorno al caso base, non gli angoli estremi.') }
    ]
  },
  /* ======================================================================= */
  /* V5 — val-sotp                                                            */
  /* ======================================================================= */
  {
    id: 'val-sotp',
    academyId: 'valuation',
    moduleId: 'V5',
    mode: 'quick',
    minutes: 9,
    difficulty: 2,
    reviewed: '2026-10',
    objective: l(
      'Value a multi-division company with a sum-of-the-parts, treat corporate costs and non-operating assets correctly, and measure a conglomerate discount.',
      "Valutare una società multi-divisione con la somma delle parti, trattare correttamente costi corporate e attività non operative e misurare lo sconto da conglomerata."
    ),
    screens: [
      {
        type: 'intuition',
        title: l('A shopping basket, priced item by item', 'Un carrello della spesa, prezzato articolo per articolo'),
        body: l(
          'A group owning a fast-growing software unit and a slow-growing cement business should not be valued with one blended multiple: the software unit deserves a much higher multiple than cement.\n\n**Sum-of-the-parts (SOTP)** values each division separately — with the method and multiple that fit it — and adds them up, like pricing a shopping basket item by item instead of by weight.',
          "Un gruppo che possiede una divisione software in rapida crescita e un business del cemento a crescita lenta non andrebbe valutato con un unico multiplo medio: il software merita un multiplo molto più alto del cemento.\n\nLa **somma delle parti (SOTP)** valuta ogni divisione separatamente — con il metodo e il multiplo adatti — e somma i risultati, come prezzare un carrello articolo per articolo invece che a peso."
        )
      },
      {
        type: 'technical',
        title: l('How to build a SOTP', 'Come costruire una SOTP'),
        body: l(
          '- Split the group into segments using **segment reporting** (IFRS 8 / ASC 280) — revenue, EBITDA or EBIT by division.\n- Value each segment with **its own peer multiples** (or a separate DCF).\n- **Capitalise unallocated corporate costs** (head office) at a blended multiple and subtract them — otherwise you overvalue the group.\n- Sum to group EV, then run the usual bridge: subtract net debt and other claims, add non-operating assets (e.g. listed stakes, associates).',
          "- Suddividi il gruppo in segmenti usando l'**informativa di settore** (IFRS 8 / ASC 280) — ricavi, EBITDA o EBIT per divisione.\n- Valuta ogni segmento con **i propri multipli di mercato** (o un DCF separato).\n- **Capitalizza i costi corporate non allocati** (holding) a un multiplo medio e sottraili — altrimenti sopravvaluti il gruppo.\n- Somma per ottenere l'EV di gruppo, poi applica il ponte consueto: sottrai PFN e altri diritti, aggiungi le attività non operative (es. partecipazioni quotate, collegate)."
        )
      },
      {
        type: 'formula',
        formulas: [
          {
            name: l('Sum-of-the-parts', 'Somma delle parti'),
            expr: 'Group EV = Σ (Segment metric × Segment multiple) − Corporate costs × Blended multiple'
          },
          { name: l('Equity value', 'Equity value'), expr: 'Equity = Group EV − Net debt − NCI + Non-operating assets' },
          { name: l('Conglomerate discount', 'Sconto da conglomerata'), expr: 'Discount = 1 − Market cap / SOTP equity value' }
        ]
      },
      {
        type: 'example',
        title: l('Tau Holding (€m)', 'Tau Holding (€m)'),
        body: l(
          'Three divisions plus head-office costs. Net debt €600m; a 20% listed stake worth €150m; 100m shares.',
          'Tre divisioni più i costi della holding. PFN €600m; una partecipazione quotata del 20% del valore di €150m; 100m di azioni.'
        ),
        table: {
          headers: [l('Segment', 'Segmento'), l('Metric', 'Metrica'), l('Multiple', 'Multiplo'), l('EV', 'EV')],
          rows: [
            [l('A — Software', 'A — Software'), 'EBITDA 200', '9.0x', '1,800'],
            [l('B — Industrial', 'B — Industriale'), 'EBITDA 100', '6.0x', '600'],
            [l('C — Start-up unit', 'C — Unità start-up'), l('Revenue 150', 'Ricavi 150'), '2.0x', '300'],
            [l('Corporate costs', 'Costi corporate'), 'EBITDA (30)', '7.0x', '(210)'],
            [l('Group EV', 'EV di gruppo'), '', '', '2,490'],
            [l('− Net debt + listed stake', '− PFN + partecipazione'), '', '', '(600) + 150'],
            [l('Equity value / per share', 'Equity value / per azione'), '', '', '2,040 / €20.40']
          ],
          totalRows: [4, 6]
        }
      },
      {
        type: 'realworld',
        body: l(
          'SOTP is the core tool for conglomerates and holding companies (in Italy, listed holdings have long traded at a discount to their net asset value), and for activist campaigns and spin-off analyses: if the market cap is well below the SOTP, a break-up or disposal could "unlock value". Bankers pitching a demerger or a carve-out lead with a SOTP page showing the discount.',
          "La SOTP è lo strumento principale per conglomerate e holding (in Italia le holding quotate trattano da tempo a sconto rispetto al NAV), e per campagne di fondi attivisti e analisi di scissione: se la capitalizzazione è molto inferiore alla SOTP, uno spin-off o una cessione potrebbero \"liberare valore\". I banker che propongono una scissione o un carve-out aprono con una pagina SOTP che mostra lo sconto."
        )
      },
      { type: 'exercise', questionId: 'val-sotp-q1' },
      { type: 'exercise', questionId: 'val-sotp-q2' },
      { type: 'exercise', questionId: 'val-sotp-q3' },
      {
        type: 'interview',
        question: l('When would you use a sum-of-the-parts valuation, and what are the pitfalls?', 'Quando useresti una valutazione per somma delle parti, e quali sono le insidie?'),
        answer: l(
          'When a company has divisions with clearly different growth, margins or risk — conglomerates, holdcos, or groups considering a spin-off. Each segment is valued with its own peers or DCF and the parts are summed. Pitfalls: forgetting to capitalise unallocated corporate costs, ignoring dis-synergies and tax leakage of an actual separation, double counting cash or debt held at segment level, and inconsistent segment data. The market often applies a conglomerate discount, so SOTP shows potential, not necessarily today’s price.',
          "Quando una società ha divisioni con crescita, margini o rischio chiaramente diversi — conglomerate, holding o gruppi che valutano una scissione. Ogni segmento si valuta con i propri comparabili o DCF e si sommano le parti. Insidie: dimenticare di capitalizzare i costi corporate non allocati, ignorare le dis-sinergie e i costi fiscali di una separazione effettiva, contare due volte cassa o debito a livello di segmento e dati di settore incoerenti. Il mercato applica spesso uno sconto da conglomerata, quindi la SOTP mostra il potenziale, non necessariamente il prezzo di oggi."
        )
      },
      {
        type: 'mistakes',
        items: [
          l('Leaving out head-office costs, which overstates group value.', 'Omettere i costi della holding, sovrastimando il valore del gruppo.'),
          l('Valuing a minority stake as if consolidated (or adding it twice).', 'Valutare una partecipazione di minoranza come se fosse consolidata (o sommarla due volte).'),
          l('Applying EV multiples to segments and then forgetting group net debt.', 'Applicare multipli di EV ai segmenti e poi dimenticare la PFN di gruppo.'),
          l('Assuming the conglomerate discount will disappear without a catalyst.', 'Dare per scontato che lo sconto da conglomerata sparisca senza un catalizzatore.')
        ]
      },
      {
        type: 'summary',
        items: [
          l('Value each segment with its own multiple or DCF, then add up.', 'Valuta ogni segmento con il proprio multiplo o DCF, poi somma.'),
          l('Subtract capitalised corporate costs; bridge with group net debt and non-operating assets.', 'Sottrai i costi corporate capitalizzati; applica il ponte con PFN di gruppo e attività non operative.'),
          l('Compare with market cap to measure a conglomerate discount.', 'Confronta con la capitalizzazione per misurare lo sconto da conglomerata.')
        ]
      }
    ],
    questions: [
      {
        id: 'val-sotp-q1',
        kind: 'grid',
        topic: 'sotp',
        difficulty: 2,
        objective: l('Compute segment EVs and the group EV.', "Calcolare gli EV di segmento e l'EV di gruppo."),
        prompt: l('Complete Tau Holding’s SOTP (€m).', 'Completa la SOTP di Tau Holding (€m).'),
        columns: [l('Segment', 'Segmento'), l('Metric (€m)', 'Metrica (€m)'), l('Multiple (x)', 'Multiplo (x)'), l('EV (€m)', 'EV (€m)')],
        unit: '€m',
        rows: [
          { label: l('A — Software (EBITDA)', 'A — Software (EBITDA)'), cells: [200, 9, { answer: 1800, verify: { fn: 'product', args: [200, 9] } }] },
          { label: l('B — Industrial (EBITDA)', 'B — Industriale (EBITDA)'), cells: [100, 6, { answer: 600, verify: { fn: 'product', args: [100, 6] } }] },
          { label: l('C — Start-up (Revenue)', 'C — Start-up (Ricavi)'), cells: [150, 2, { answer: 300, verify: { fn: 'product', args: [150, 2] } }] },
          { label: l('Corporate costs (EBITDA)', 'Costi corporate (EBITDA)'), cells: [-30, 7, { answer: -210, verify: { fn: 'product', args: [-30, 7] } }] },
          { label: l('Group EV', 'EV di gruppo'), cells: ['', '', { answer: 2490, verify: { fn: 'sum', args: [1800, 600, 300, -210] } }] }
        ],
        explanation: l(
          '1,800 + 600 + 300 − 210 = 2,490. Ignoring corporate costs would overstate EV by €210m (8%).',
          '1.800 + 600 + 300 − 210 = 2.490. Ignorare i costi corporate sovrastimerebbe l’EV di €210m (8%).'
        )
      },
      {
        id: 'val-sotp-q2',
        kind: 'numeric',
        topic: 'sotp',
        difficulty: 2,
        objective: l('Bridge a SOTP EV to value per share.', "Passare dall'EV della SOTP al valore per azione."),
        prompt: l(
          'Group EV €2,490m, net debt €600m, listed minority stake worth €150m (not consolidated), 100m shares. SOTP value per share (€)?',
          'EV di gruppo €2.490m, PFN €600m, partecipazione quotata di minoranza da €150m (non consolidata), 100m azioni. Valore SOTP per azione (€)?'
        ),
        answer: 20.4,
        unit: '€',
        verify: { fn: 'impliedSharePrice', args: [2490, 450, 100] },
        explanation: l(
          'Equity = 2,490 − 600 + 150 = 2,040 → €20.40 per share. The stake is a non-operating asset (its earnings are not in segment EBITDA), so it is added.',
          'Equity = 2.490 − 600 + 150 = 2.040 → €20,40 per azione. La partecipazione è un’attività non operativa (i suoi utili non sono nell’EBITDA dei segmenti), quindi si somma.'
        )
      },
      {
        id: 'val-sotp-q3',
        kind: 'numeric',
        topic: 'sotp',
        difficulty: 2,
        objective: l('Measure a conglomerate discount.', 'Misurare uno sconto da conglomerata.'),
        prompt: l(
          'Tau’s SOTP equity value is €2,040m; its market cap is €1,700m. Conglomerate discount (%, one decimal)?',
          "L'equity value SOTP di Tau è €2.040m; la capitalizzazione è €1.700m. Sconto da conglomerata (%, un decimale)?"
        ),
        answer: 16.7,
        unit: '%',
        tolerance: { abs: 0.1 },
        verify: { fn: 'ratio', args: [34000, 2040] },
        explanation: l(
          '1 − 1,700 / 2,040 = 16.7%. Measuring the gap against market cap (340 / 1,700 = 20%) gives the upside to SOTP, not the discount.',
          '1 − 1.700 / 2.040 = 16,7%. Misurare il divario sulla capitalizzazione (340 / 1.700 = 20%) dà il potenziale rialzo verso la SOTP, non lo sconto.'
        )
      },
      {
        id: 'val-sotp-q4',
        kind: 'mcq',
        topic: 'sotp',
        difficulty: 2,
        objective: l('Explain the treatment of corporate costs.', 'Spiegare il trattamento dei costi corporate.'),
        prompt: l('Why are unallocated head-office costs capitalised and deducted in a SOTP?', 'Perché i costi della holding non allocati si capitalizzano e si sottraggono in una SOTP?'),
        choices: [
          l('Because segment EBITDA excludes them, yet the group must pay them every year', "Perché l'EBITDA dei segmenti li esclude, ma il gruppo li sostiene ogni anno"),
          l('Because IFRS 8 requires a deduction', "Perché l'IFRS 8 richiede una deduzione"),
          l('Because they are a form of financial debt', 'Perché sono una forma di debito finanziario'),
          l('They should not be deducted — they disappear in a break-up', 'Non vanno sottratti — spariscono in una scissione')
        ],
        correct: 0,
        explanation: l(
          'Segment figures are reported before central costs, which are a recurring drain on value. IFRS 8 governs disclosure, not valuation; they are operating, not financial; and in a break-up many of these costs are duplicated, not eliminated.',
          "I dati di segmento sono riportati prima dei costi centrali, che drenano valore in modo ricorrente. L'IFRS 8 disciplina l'informativa, non la valutazione; sono costi operativi, non finanziari; e in una scissione molti di questi costi si duplicano anziché sparire."
        )
      },
      {
        id: 'val-sotp-q5',
        kind: 'multi',
        topic: 'sotp',
        difficulty: 1,
        objective: l('Recognise when SOTP is appropriate.', 'Riconoscere quando la SOTP è appropriata.'),
        prompt: l('In which situations is a SOTP especially useful? Select all that apply.', 'In quali situazioni la SOTP è particolarmente utile? Seleziona tutte le risposte corrette.'),
        choices: [
          l('A conglomerate with unrelated divisions', 'Una conglomerata con divisioni non correlate'),
          l('A single-product company', 'Una società mono-prodotto'),
          l('Evaluating a proposed spin-off', 'Valutare uno spin-off proposto'),
          l('An activist arguing a group is undervalued', 'Un fondo attivista che sostiene che il gruppo è sottovalutato'),
          l('A holding company with listed stakes', 'Una holding con partecipazioni quotate')
        ],
        correct: [0, 2, 3, 4],
        explanation: l(
          'SOTP shines when parts differ in growth, risk or valuation basis. A single-product company has nothing to split.',
          'La SOTP dà il meglio quando le parti differiscono per crescita, rischio o base di valutazione. Una società mono-prodotto non ha nulla da separare.'
        )
      }
    ],
    flashcards: [
      { id: 'fc-val-sotp-1', topic: 'sotp', front: l('What is a SOTP?', 'Cos’è una SOTP?'), back: l('Valuing each division separately with suitable methods/multiples and adding them up.', 'Valutare ogni divisione separatamente con metodi/multipli adatti e sommare i risultati.') },
      { id: 'fc-val-sotp-2', topic: 'sotp', front: l('How are corporate costs treated in a SOTP?', 'Come si trattano i costi corporate in una SOTP?'), back: l('Capitalised at a blended multiple and deducted.', 'Capitalizzati a un multiplo medio e sottratti.') },
      { id: 'fc-val-sotp-3', topic: 'sotp', front: l('Conglomerate discount formula?', 'Formula dello sconto da conglomerata?'), back: l('1 − market cap / SOTP equity value.', '1 − capitalizzazione / equity value SOTP.') },
      { id: 'fc-val-sotp-4', topic: 'sotp', front: l('Source of segment data under IFRS?', 'Fonte dei dati di segmento negli IFRS?'), back: l('IFRS 8 Operating Segments disclosures.', "L'informativa IFRS 8 Settori operativi.") }
    ],
    sources: [{ label: 'IFRS Foundation — IFRS 8 Operating Segments', url: 'https://www.ifrs.org/issued-standards/list-of-standards/ifrs-8-operating-segments/' }]
  },
  /* ======================================================================= */
  /* V5 — val-football-field                                                  */
  /* ======================================================================= */
  {
    id: 'val-football-field',
    academyId: 'valuation',
    moduleId: 'V5',
    mode: 'quick',
    minutes: 8,
    difficulty: 2,
    reviewed: '2026-10',
    objective: l(
      'Build and interpret a football field: convert each method’s range to value per share, explain why bars differ and use the chart to frame a price.',
      'Costruire e interpretare un football field: convertire il range di ciascun metodo in valore per azione, spiegare perché le barre differiscono e usare il grafico per inquadrare un prezzo.'
    ),
    screens: [
      {
        type: 'intuition',
        title: l('Many witnesses, one verdict', 'Molti testimoni, un verdetto'),
        body: l(
          'No single method gives "the" value. A judge listens to several witnesses and looks for where their stories overlap.\n\nThe **football field** is that courtroom on one page: a horizontal bar chart where each bar is the value range from one method (comps, precedents, DCF, LBO, 52-week trading range…). Where the bars cluster is where the defensible value lies.',
          "Nessun metodo da solo dà \"il\" valore. Un giudice ascolta più testimoni e cerca dove le loro versioni si sovrappongono.\n\nIl **football field** è quell'aula di tribunale su una pagina: un grafico a barre orizzontali in cui ogni barra è l'intervallo di valore di un metodo (comparabili, precedenti, DCF, LBO, range di prezzo a 52 settimane…). Dove le barre si concentrano si trova il valore difendibile."
        )
      },
      {
        type: 'technical',
        title: l('Building it', 'Come si costruisce'),
        body: l(
          '- Pick a common unit: **value per share** (public targets) or **EV** (private targets).\n- For each method, take a sensible range: comps and precedents → interquartile multiples × metric; DCF → inner block of the WACC × g table; LBO → price a sponsor could pay at a 20–25% IRR target (illustrative).\n- Convert EV ranges to per share with the **same bridge and diluted share count**.\n- Add reference bars: **52-week high/low** and **analyst price targets** (market references, not valuations).\n- Draw vertical lines for the current price and the proposed offer.',
          "- Scegli un'unità comune: **valore per azione** (target quotati) o **EV** (target non quotati).\n- Per ogni metodo prendi un range sensato: comparabili e precedenti → multipli interquartili × metrica; DCF → blocco centrale della tabella WACC × g; LBO → prezzo che uno sponsor potrebbe pagare con un IRR obiettivo del 20–25% (illustrativo).\n- Converti i range di EV in valore per azione con **lo stesso ponte e lo stesso numero di azioni diluite**.\n- Aggiungi barre di riferimento: **massimo/minimo a 52 settimane** e **target price degli analisti** (riferimenti di mercato, non valutazioni).\n- Traccia linee verticali per il prezzo attuale e per l'offerta proposta."
        )
      },
      {
        type: 'formula',
        formulas: [
          { name: l('EV range → value per share', 'Range di EV → valore per azione'), expr: 'Value per share = (EV − Net debt − Other claims) / Diluted shares' },
          { name: l('Implied premium of an offer', "Premio implicito di un'offerta"), expr: 'Premium = Offer price / Current (undisturbed) price − 1' }
        ]
      },
      {
        type: 'example',
        title: l('Upsilon S.p.A. — €/share (current price €22.50)', 'Upsilon S.p.A. — €/azione (prezzo attuale €22,50)'),
        body: l(
          'Net debt €200m, 40m diluted shares. A proposed offer of €27.00 sits where precedents and DCF overlap.',
          "PFN €200m, 40m azioni diluite. Un'offerta proposta di €27,00 si colloca dove precedenti e DCF si sovrappongono."
        ),
        table: {
          headers: [l('Method', 'Metodo'), l('Low', 'Min'), l('High', 'Max')],
          rows: [
            [l('52-week trading range', 'Range di prezzo a 52 settimane'), '18.00', '24.00'],
            [l('Analyst price targets', 'Target price degli analisti'), '20.00', '26.00'],
            [l('Trading comps (EV €1.0–1.2bn)', 'Comparabili (EV €1,0–1,2mld)'), '20.00', '25.00'],
            [l('Precedents (EV €1.15–1.4bn)', 'Precedenti (EV €1,15–1,4mld)'), '23.75', '30.00'],
            [l('DCF (EV €1.1–1.35bn)', 'DCF (EV €1,1–1,35mld)'), '22.50', '28.75'],
            [l('LBO (20–25% IRR)', 'LBO (IRR 20–25%)'), '19.00', '23.50']
          ]
        }
      },
      {
        type: 'technical',
        title: l('Reading the bars', 'Leggere le barre'),
        body: l(
          '- **Precedents** usually sit highest: they include control premia.\n- **Trading comps** sit around the current price: they are minority valuations.\n- **DCF** is often the widest bar — it reflects many assumptions.\n- **LBO** often sets a **floor** in an auction: a financial sponsor’s ability to pay, typically below a strategic buyer who can count on synergies.\n\nA sell-side banker uses the chart to anchor price expectations; a buy-side banker uses it to show the board an offer is fair.',
          "- I **precedenti** stanno di solito più in alto: includono premi di controllo.\n- I **comparabili** si collocano attorno al prezzo attuale: sono valutazioni di minoranza.\n- Il **DCF** è spesso la barra più ampia — riflette molte ipotesi.\n- L'**LBO** fissa spesso un **pavimento** in un'asta: la capacità di pagare di uno sponsor finanziario, tipicamente inferiore a quella di un compratore strategico che può contare sulle sinergie.\n\nIl banker sell-side usa il grafico per ancorare le aspettative di prezzo; quello buy-side per mostrare al CdA che un'offerta è congrua."
        )
      },
      {
        type: 'realworld',
        body: l(
          'The football field is one of the most-viewed pages in a pitch book and the centrepiece of fairness opinions presented to boards. Analysts build it in Excel/think-cell, and the debate with the MD is usually about which ranges to show — e.g. whether to exclude a stale precedent or narrow the DCF bar — because every choice shifts where the offer appears to sit.',
          "Il football field è una delle pagine più guardate di un pitch book e il fulcro delle fairness opinion presentate ai CdA. Gli analisti lo costruiscono in Excel/think-cell, e la discussione con l'MD verte di solito su quali range mostrare — ad esempio se escludere un precedente datato o restringere la barra del DCF — perché ogni scelta sposta la posizione apparente dell'offerta."
        )
      },
      { type: 'exercise', questionId: 'val-ff-q1' },
      { type: 'exercise', questionId: 'val-ff-q2' },
      { type: 'exercise', questionId: 'val-ff-q3' },
      {
        type: 'interview',
        question: l('What is a football field and how would you use it to advise a seller?', 'Cos’è un football field e come lo useresti per assistere un venditore?'),
        answer: l(
          'It is a chart that shows the value ranges from different methodologies — trading comps, precedents, DCF, LBO, plus the 52-week range and analyst targets — on a common per-share or EV basis. For a seller I would use it to frame price expectations: precedents and the DCF typically support a higher range because they reflect control and intrinsic value, while the LBO bar indicates what financial sponsors can afford. It also lets me show where any bid falls relative to all methods.',
          "È un grafico che mostra gli intervalli di valore dei diversi metodi — comparabili, precedenti, DCF, LBO, più il range a 52 settimane e i target degli analisti — su una base comune per azione o di EV. Per un venditore lo userei per inquadrare le aspettative di prezzo: precedenti e DCF sostengono di solito un range più alto perché riflettono controllo e valore intrinseco, mentre la barra LBO indica quanto possono permettersi gli sponsor finanziari. Permette anche di mostrare dove si colloca ogni offerta rispetto a tutti i metodi."
        )
      },
      {
        type: 'mistakes',
        items: [
          l('Mixing per-share and EV bars on the same chart.', 'Mischiare barre per azione e barre di EV nello stesso grafico.'),
          l('Using different share counts or bridges for different bars.', 'Usare numeri di azioni o ponti diversi per barre diverse.'),
          l('Presenting the 52-week range as a valuation method.', 'Presentare il range a 52 settimane come metodo di valutazione.'),
          l('Showing ranges so wide that the chart supports any price.', 'Mostrare range così ampi che il grafico giustifica qualsiasi prezzo.')
        ]
      },
      {
        type: 'summary',
        items: [
          l('One chart, all methods, one unit (per share or EV).', 'Un grafico, tutti i metodi, una sola unità (per azione o EV).'),
          l('Precedents usually highest; comps near market; LBO often a floor.', 'Precedenti di solito i più alti; comparabili vicini al mercato; LBO spesso un pavimento.'),
          l('Use it to frame negotiations and support fairness opinions.', 'Si usa per inquadrare le trattative e supportare le fairness opinion.')
        ]
      }
    ],
    questions: [
      {
        id: 'val-ff-q1',
        kind: 'grid',
        topic: 'football-field',
        difficulty: 2,
        objective: l('Convert EV ranges into per-share ranges.', 'Convertire range di EV in range per azione.'),
        prompt: l(
          'Upsilon: net debt €200m, 40m diluted shares. Convert each EV range (€m) into € per share.',
          'Upsilon: PFN €200m, 40m azioni diluite. Converti ogni range di EV (€m) in € per azione.'
        ),
        columns: [l('Method (EV range, €m)', 'Metodo (range di EV, €m)'), l('Low (€)', 'Min (€)'), l('High (€)', 'Max (€)')],
        unit: '€',
        rows: [
          {
            label: l('Trading comps (1,000–1,200)', 'Comparabili (1.000–1.200)'),
            cells: [
              { answer: 20, verify: { fn: 'impliedSharePrice', args: [1000, 200, 40] } },
              { answer: 25, verify: { fn: 'impliedSharePrice', args: [1200, 200, 40] } }
            ]
          },
          {
            label: l('Precedents (1,150–1,400)', 'Precedenti (1.150–1.400)'),
            cells: [
              { answer: 23.75, verify: { fn: 'impliedSharePrice', args: [1150, 200, 40] } },
              { answer: 30, verify: { fn: 'impliedSharePrice', args: [1400, 200, 40] } }
            ]
          },
          {
            label: l('DCF (1,100–1,350)', 'DCF (1.100–1.350)'),
            cells: [
              { answer: 22.5, verify: { fn: 'impliedSharePrice', args: [1100, 200, 40] } },
              { answer: 28.75, verify: { fn: 'impliedSharePrice', args: [1350, 200, 40] } }
            ]
          }
        ],
        explanation: l(
          'Per share = (EV − 200) / 40 for every bar. E.g. comps low (1,000 − 200) / 40 = €20.00. Using the same bridge everywhere keeps the bars comparable.',
          'Per azione = (EV − 200) / 40 per ogni barra. Es. minimo dei comparabili (1.000 − 200) / 40 = €20,00. Usare lo stesso ponte ovunque mantiene le barre confrontabili.'
        )
      },
      {
        id: 'val-ff-q2',
        kind: 'mcq',
        topic: 'football-field',
        difficulty: 2,
        objective: l('Interpret the LBO bar.', 'Interpretare la barra LBO.'),
        prompt: l('On a football field, what does the LBO bar typically represent?', 'In un football field, cosa rappresenta tipicamente la barra LBO?'),
        choices: [
          l('The price a strategic buyer would pay including synergies', 'Il prezzo che pagherebbe un compratore strategico incluse le sinergie'),
          l('The book value of equity', 'Il patrimonio netto contabile'),
          l('The range of share prices over the last year', "Il range dei prezzi dell'ultimo anno"),
          l('The price a financial sponsor could pay while achieving its target IRR', 'Il prezzo che uno sponsor finanziario potrebbe pagare raggiungendo il suo IRR obiettivo')
        ],
        correct: 3,
        explanation: l(
          'The LBO analysis solves for the entry price that delivers the sponsor’s target return given available leverage. It often acts as a floor in an auction because strategic buyers can usually pay more thanks to synergies.',
          "L'analisi LBO ricava il prezzo d'ingresso che garantisce il rendimento obiettivo dello sponsor data la leva disponibile. Spesso fa da pavimento in un'asta perché i compratori strategici possono di solito pagare di più grazie alle sinergie."
        )
      },
      {
        id: 'val-ff-q3',
        kind: 'numeric',
        topic: 'football-field',
        difficulty: 1,
        objective: l('Compute the premium of an offer over the current price.', "Calcolare il premio di un'offerta sul prezzo attuale."),
        prompt: l('Upsilon trades at €22.50 (undisturbed). The proposed offer is €27.00. Premium (%)?', "Upsilon quota €22,50 (prezzo indisturbato). L'offerta proposta è €27,00. Premio (%)?"),
        answer: 20,
        unit: '%',
        tolerance: { abs: 0.1 },
        verify: { fn: 'ratio', args: [450, 22.5] },
        explanation: l('27.00 / 22.50 − 1 = 20%. Dividing by the offer price (16.7%) uses the wrong base.', "27,00 / 22,50 − 1 = 20%. Dividere per il prezzo d'offerta (16,7%) usa la base sbagliata.")
      },
      {
        id: 'val-ff-q4',
        kind: 'multi',
        topic: 'football-field',
        difficulty: 2,
        objective: l('Understand the components of a football field.', 'Comprendere le componenti di un football field.'),
        prompt: l('Which statements about a football field are correct? Select all that apply.', 'Quali affermazioni sul football field sono corrette? Seleziona tutte le risposte corrette.'),
        choices: [
          l('All bars should use the same unit and the same bridge', 'Tutte le barre devono usare la stessa unità e lo stesso ponte'),
          l('The 52-week range is a market reference, not a valuation', 'Il range a 52 settimane è un riferimento di mercato, non una valutazione'),
          l('The DCF bar is always the narrowest', 'La barra del DCF è sempre la più stretta'),
          l('Precedents typically sit above trading comps', 'I precedenti si collocano tipicamente sopra i comparabili'),
          l('The chart gives one precise "correct" value', 'Il grafico fornisce un unico valore "corretto" e preciso')
        ],
        correct: [0, 1, 3],
        explanation: l(
          'Consistency is essential; trading ranges and analyst targets are references; precedents include control premia. The DCF is often the widest bar, and the point of the chart is a range, not a single number.',
          "La coerenza è essenziale; range di prezzo e target degli analisti sono riferimenti; i precedenti includono premi di controllo. Il DCF è spesso la barra più ampia, e lo scopo del grafico è un range, non un singolo numero."
        )
      }
    ],
    flashcards: [
      { id: 'fc-val-ff-1', topic: 'football-field', front: l('What is a football field?', 'Cos’è un football field?'), back: l('A bar chart of value ranges from each methodology on a common basis.', 'Un grafico a barre degli intervalli di valore di ciascun metodo su base comune.') },
      { id: 'fc-val-ff-2', topic: 'football-field', front: l('Which bar is usually highest?', 'Quale barra è di solito la più alta?'), back: l('Precedent transactions (control premium).', 'Le transazioni precedenti (premio di controllo).') },
      { id: 'fc-val-ff-3', topic: 'football-field', front: l('What does the LBO bar indicate?', 'Cosa indica la barra LBO?'), back: l('What a financial sponsor can pay at its target IRR — often a floor.', 'Quanto può pagare uno sponsor finanziario al suo IRR obiettivo — spesso un pavimento.') },
      { id: 'fc-val-ff-4', topic: 'football-field', front: l('Are 52-week highs/lows a valuation method?', 'Massimi/minimi a 52 settimane sono un metodo di valutazione?'), back: l('No — a market reference for context.', 'No — un riferimento di mercato per contesto.') }
    ]
  },
  /* ======================================================================= */
  /* V5 — val-fig                                                             */
  /* ======================================================================= */
  {
    id: 'val-fig',
    academyId: 'valuation',
    moduleId: 'V5',
    mode: 'deep',
    minutes: 14,
    difficulty: 3,
    reviewed: '2026-10',
    objective: l(
      'Explain why EV-based methods fail for banks and insurers, and value them with P/BV, P/TBV, P/E, the dividend discount model and the ROTE-vs-cost-of-equity framework.',
      "Spiegare perché i metodi basati sull'EV non funzionano per banche e assicurazioni, e valutarle con P/BV, P/TBV, P/E, dividend discount model e il confronto tra ROTE e costo dell'equity."
    ),
    screens: [
      {
        type: 'intuition',
        title: l('For a bank, debt is the product', 'Per una banca, il debito è il prodotto'),
        body: l(
          'A manufacturer borrows to fund factories; interest is a financing cost. A bank **borrows (deposits, bonds) to lend** — debt is its raw material and interest is its cost of goods sold.\n\nSo you cannot separate "operations" from "financing": there is no meaningful EBITDA, net debt or EV. Instead we value the **equity directly**, and the binding constraint is **regulatory capital**: a bank can only grow and pay dividends if it keeps enough equity against its risk-weighted assets.',
          "Un'azienda manifatturiera si indebita per finanziare gli stabilimenti; gli interessi sono un costo finanziario. Una banca **raccoglie (depositi, obbligazioni) per prestare** — il debito è la sua materia prima e gli interessi passivi sono il suo costo del venduto.\n\nNon si possono quindi separare \"operazioni\" e \"finanziamento\": non esistono EBITDA, PFN o EV significativi. Si valuta invece direttamente l'**equity**, e il vincolo stringente è il **capitale regolamentare**: una banca può crescere e pagare dividendi solo se mantiene abbastanza patrimonio rispetto alle attività ponderate per il rischio."
        )
      },
      {
        type: 'technical',
        title: l('Why the usual toolkit breaks', 'Perché gli strumenti abituali non funzionano'),
        body: l(
          '- **EV/EBITDA**: interest is operating, so EBITDA is meaningless; "net debt" includes customer deposits.\n- **Unlevered DCF**: you cannot define UFCF or a WACC when debt is part of operations; reinvestment is driven by **capital requirements**, not CapEx.\n- Instead use **equity metrics**: P/E, P/BV, P/TBV, dividend yield, and **equity cash-flow models** (dividend discount model, where distributable cash depends on capital ratios).\n\nThe same logic applies to insurers, where float and investment income are core operations.',
          "- **EV/EBITDA**: gli interessi sono operativi, quindi l'EBITDA non ha senso; la \"PFN\" includerebbe i depositi della clientela.\n- **DCF unlevered**: non si possono definire UFCF o WACC quando il debito fa parte dell'operatività; il reinvestimento è guidato dai **requisiti patrimoniali**, non dal CapEx.\n- Si usano invece **metriche di equity**: P/E, P/BV, P/TBV, dividend yield, e **modelli a flussi per l'azionista** (dividend discount model, in cui la cassa distribuibile dipende dai coefficienti patrimoniali).\n\nLa stessa logica vale per le assicurazioni, dove float e redditi da investimento sono attività core."
        )
      },
      {
        type: 'formula',
        formulas: [
          {
            name: l('Justified price-to-book (Gordon on equity)', 'Price-to-book giustificato (Gordon sull’equity)'),
            expr: 'P/BV = (ROE − g) / (COE − g)    or    P/TBV = (ROTE − g) / (COE − g)',
            vars: [
              { sym: 'ROTE', desc: l('Return on tangible equity (net income / tangible book value)', 'Rendimento sul patrimonio tangibile (utile netto / patrimonio tangibile)') },
              { sym: 'COE', desc: l('Cost of equity (e.g. CAPM)', "Costo dell'equity (es. CAPM)") }
            ]
          },
          { name: l('Dividend discount model', 'Dividend discount model'), expr: 'Equity value = DPS_1 / (COE − g)   (+ excess capital)' },
          { name: l('Tangible book value', 'Patrimonio netto tangibile'), expr: 'TBV = Book equity − Goodwill − Other intangibles' }
        ],
        note: l(
          'A bank earning exactly its cost of equity is worth 1.0x book: ROE = COE ⇒ P/BV = 1.',
          'Una banca che rende esattamente il suo costo dell’equity vale 1,0x il patrimonio: ROE = COE ⇒ P/BV = 1.'
        )
      },
      {
        type: 'example',
        title: l('Phi Bank (€bn)', 'Phi Bank (€mld)'),
        body: l(
          'Tangible book value €10.0bn, sustainable ROTE 14%, COE 11%, long-run growth 2%.',
          'Patrimonio tangibile €10,0mld, ROTE sostenibile 14%, COE 11%, crescita di lungo periodo 2%.'
        ),
        table: {
          headers: [l('Step', 'Passaggio'), l('Result', 'Risultato')],
          rows: [
            [l('Justified P/TBV = (14% − 2%) / (11% − 2%)', 'P/TBV giustificato = (14% − 2%) / (11% − 2%)'), '1.33x'],
            [l('Equity value = 1.33 × 10.0', 'Equity value = 1,33 × 10,0'), '€13.3bn'],
            [l('If ROTE fell to 9%: (9% − 2%) / 9%', 'Se il ROTE scendesse al 9%: (9% − 2%) / 9%'), '0.78x'],
            [l('Equity value at 9% ROTE', 'Equity value con ROTE 9%'), '€7.8bn']
          ]
        }
      },
      {
        type: 'technical',
        title: l('Capital, excess capital and the DDM', 'Capitale, capitale in eccesso e DDM'),
        body: l(
          'Under the **Basel III** framework (implemented in the EU through the CRR/CRD), banks must hold minimum **CET1** capital against **risk-weighted assets (RWA)**, plus buffers and supervisory add-ons. Management sets a **target CET1 ratio** above the requirement.\n\n- Capital above the target is **excess capital**: it can be distributed (dividends, buybacks) and is often added to the DDM value.\n- Growth consumes capital: loan growth raises RWA, so part of earnings must be retained.\n- A bank DDM therefore forecasts earnings, RWA and the capital needed, and pays out the rest.',
          "Nel framework **Basilea III** (recepito nell'UE tramite CRR/CRD), le banche devono detenere un capitale **CET1** minimo rispetto alle **attività ponderate per il rischio (RWA)**, più riserve (buffer) e requisiti aggiuntivi di vigilanza. Il management fissa un **CET1 ratio obiettivo** superiore al requisito.\n\n- Il capitale oltre l'obiettivo è **capitale in eccesso**: può essere distribuito (dividendi, buyback) e spesso si aggiunge al valore del DDM.\n- La crescita assorbe capitale: più impieghi aumentano gli RWA, quindi parte degli utili va trattenuta.\n- Un DDM bancario prevede quindi utili, RWA e capitale necessario, e distribuisce il resto."
        )
      },
      {
        type: 'technical',
        title: l('Insurers', 'Assicurazioni'),
        body: l(
          '- Common metrics: **P/E**, **P/BV**, **dividend yield** and DDM-style models.\n- In the EU, solvency is measured under **Solvency II** (applicable since 1 January 2016) — the **Solvency II ratio** drives distributable capital, like CET1 for banks.\n- Under **IFRS 17** (effective for periods beginning on or after 1 January 2023), the **contractual service margin (CSM)** represents unearned profit on in-force contracts; analysts watch it as a store of future earnings.\n- Life insurers have historically also been assessed on embedded-value-type measures.',
          "- Metriche comuni: **P/E**, **P/BV**, **dividend yield** e modelli di tipo DDM.\n- Nell'UE la solvibilità si misura secondo **Solvency II** (applicabile dal 1° gennaio 2016) — il **Solvency II ratio** determina il capitale distribuibile, come il CET1 per le banche.\n- Con l'**IFRS 17** (in vigore dagli esercizi che iniziano dal 1° gennaio 2023), il **contractual service margin (CSM)** rappresenta l'utile non ancora maturato sui contratti in essere; gli analisti lo seguono come riserva di utili futuri.\n- I rami vita sono stati storicamente valutati anche con misure di tipo embedded value."
        )
      },
      {
        type: 'realworld',
        body: l(
          'FIG (Financial Institutions Group) teams have their own language. In European bank M&A — including the wave of Italian banking consolidation — pitch books focus on P/TBV paid, ROTE accretion, CET1 impact, excess capital and cost synergies, not EV/EBITDA. A bank trading below 1.0x TBV is telling you the market expects its ROTE to stay below its cost of equity.',
          "I team FIG (Financial Institutions Group) hanno un linguaggio proprio. Nelle M&A bancarie europee — compresa l'ondata di consolidamento del settore bancario italiano — i pitch book si concentrano su P/TBV pagato, accrescimento del ROTE, impatto sul CET1, capitale in eccesso e sinergie di costo, non sull'EV/EBITDA. Una banca che tratta sotto 1,0x il TBV sta dicendo che il mercato si aspetta un ROTE che resti inferiore al costo dell'equity."
        )
      },
      { type: 'exercise', questionId: 'val-fig-q1' },
      { type: 'exercise', questionId: 'val-fig-q2' },
      { type: 'exercise', questionId: 'val-fig-q3' },
      { type: 'exercise', questionId: 'val-fig-q5' },
      {
        type: 'interview',
        question: l('How would you value a bank, and why not use a normal DCF?', 'Come valuteresti una banca, e perché non usare un DCF normale?'),
        answer: l(
          'For a bank, debt and interest are part of operations — deposits are raw material — so EBITDA, net debt and unlevered free cash flow are not meaningful. I would value the equity directly: P/E and P/TBV versus peers, a justified P/TBV based on sustainable ROTE versus the cost of equity, and a dividend discount model where dividends are what is left after keeping the CET1 ratio at target, plus any excess capital. If ROTE exceeds the cost of equity, the bank should trade above tangible book; if not, below.',
          "Per una banca debito e interessi fanno parte dell'operatività — i depositi sono materia prima — quindi EBITDA, PFN e free cash flow unlevered non sono significativi. Valuterei direttamente l'equity: P/E e P/TBV rispetto ai peer, un P/TBV giustificato basato sul ROTE sostenibile rispetto al costo dell'equity, e un dividend discount model in cui i dividendi sono ciò che resta dopo aver mantenuto il CET1 ratio all'obiettivo, più l'eventuale capitale in eccesso. Se il ROTE supera il costo dell'equity, la banca dovrebbe trattare sopra il patrimonio tangibile; altrimenti, sotto."
        )
      },
      {
        type: 'mistakes',
        items: [
          l('Computing EV or EV/EBITDA for a bank.', 'Calcolare EV o EV/EBITDA per una banca.'),
          l('Using book value including goodwill when peers are compared on TBV.', 'Usare il patrimonio comprensivo di avviamento quando i peer si confrontano sul TBV.'),
          l('Running a DDM without checking that dividends are consistent with capital requirements.', 'Usare un DDM senza verificare che i dividendi siano coerenti con i requisiti patrimoniali.'),
          l('Treating a low P/TBV as "cheap" without asking whether ROTE covers the cost of equity.', 'Considerare "a buon mercato" un P/TBV basso senza chiedersi se il ROTE copre il costo dell’equity.')
        ]
      },
      {
        type: 'summary',
        items: [
          l('For banks and insurers, debt is operating → value equity directly.', 'Per banche e assicurazioni il debito è operativo → si valuta direttamente l’equity.'),
          l('Core tools: P/E, P/BV, P/TBV, DDM with excess capital.', 'Strumenti principali: P/E, P/BV, P/TBV, DDM con capitale in eccesso.'),
          l('Justified P/TBV = (ROTE − g) / (COE − g): ROTE > COE ⇒ above 1.0x.', 'P/TBV giustificato = (ROTE − g) / (COE − g): ROTE > COE ⇒ sopra 1,0x.'),
          l('Regulatory capital (CET1, Solvency II) limits growth and payouts.', 'Il capitale regolamentare (CET1, Solvency II) limita crescita e distribuzioni.')
        ]
      }
    ],
    questions: [
      {
        id: 'val-fig-q1',
        kind: 'numeric',
        topic: 'fig-valuation',
        difficulty: 2,
        objective: l('Compute a justified P/TBV.', 'Calcolare un P/TBV giustificato.'),
        prompt: l(
          'A bank has sustainable ROTE of 14%, cost of equity 11% and long-run growth 2%. Justified P/TBV (x, two decimals)?',
          "Una banca ha un ROTE sostenibile del 14%, costo dell'equity 11% e crescita di lungo periodo 2%. P/TBV giustificato (x, due decimali)?"
        ),
        answer: 1.33,
        unit: 'x',
        tolerance: { abs: 0.01 },
        verify: { fn: 'ratio', args: [0.12, 0.09] },
        explanation: l(
          '(0.14 − 0.02) / (0.11 − 0.02) = 0.12 / 0.09 = 1.33x. ROTE / COE alone (1.27x) ignores growth.',
          '(0,14 − 0,02) / (0,11 − 0,02) = 0,12 / 0,09 = 1,33x. Il solo rapporto ROTE / COE (1,27x) ignora la crescita.'
        )
      },
      {
        id: 'val-fig-q2',
        kind: 'numeric',
        topic: 'fig-valuation',
        difficulty: 2,
        objective: l('Value a bank with a simple dividend discount model.', 'Valutare una banca con un semplice dividend discount model.'),
        prompt: l(
          'Next year’s dividends are expected at €1.0bn, growing 2% a year forever; the cost of equity is 11%. Equity value (€bn, two decimals)?',
          "I dividendi del prossimo anno sono attesi a €1,0mld, in crescita del 2% annuo per sempre; il costo dell'equity è 11%. Equity value (€mld, due decimali)?"
        ),
        answer: 11.11,
        unit: '€bn',
        tolerance: { abs: 0.01 },
        verify: { fn: 'pvGrowingPerpetuity', args: [1, 0.11, 0.02] },
        explanation: l(
          '1.0 / (0.11 − 0.02) = €11.11bn. Discounting at a WACC would be inconsistent: dividends are equity cash flows, so use the cost of equity.',
          "1,0 / (0,11 − 0,02) = €11,11mld. Attualizzare a un WACC sarebbe incoerente: i dividendi sono flussi per l'azionista, quindi si usa il costo dell'equity."
        )
      },
      {
        id: 'val-fig-q3',
        kind: 'numeric',
        topic: 'fig-valuation',
        difficulty: 2,
        objective: l('Compute P/TBV from market data.', 'Calcolare il P/TBV da dati di mercato.'),
        prompt: l(
          'Market cap €6.0bn; book equity €8.0bn including €1.5bn of goodwill and intangibles. P/TBV (x, two decimals)?',
          'Capitalizzazione €6,0mld; patrimonio netto €8,0mld comprensivo di €1,5mld di avviamento e immateriali. P/TBV (x, due decimali)?'
        ),
        answer: 0.92,
        unit: 'x',
        tolerance: { abs: 0.01 },
        verify: { fn: 'ratio', args: [6, 6.5] },
        explanation: l(
          'TBV = 8.0 − 1.5 = 6.5 → 6.0 / 6.5 = 0.92x. P/BV would be 0.75x. Trading below TBV signals the market expects ROTE below the cost of equity.',
          "TBV = 8,0 − 1,5 = 6,5 → 6,0 / 6,5 = 0,92x. Il P/BV sarebbe 0,75x. Trattare sotto il TBV segnala che il mercato si aspetta un ROTE inferiore al costo dell'equity."
        )
      },
      {
        id: 'val-fig-q4',
        kind: 'mcq',
        topic: 'fig-valuation',
        difficulty: 2,
        objective: l('Explain why EV/EBITDA does not work for banks.', "Spiegare perché l'EV/EBITDA non funziona per le banche."),
        prompt: l('Why is EV/EBITDA not used to value commercial banks?', "Perché l'EV/EBITDA non si usa per valutare le banche commerciali?"),
        choices: [
          l('Banks do not publish income statements', 'Le banche non pubblicano il conto economico'),
          l('Banks have no depreciation', 'Le banche non hanno ammortamenti'),
          l('Interest is an operating item and deposits are raw material, so EBITDA and net debt are not meaningful', 'Gli interessi sono una voce operativa e i depositi sono materia prima, quindi EBITDA e PFN non sono significativi'),
          l('Regulators forbid it', 'I regolatori lo vietano')
        ],
        correct: 2,
        explanation: l(
          'Net interest income is a bank’s core revenue; stripping out interest would remove the business itself. Banks do publish income statements and do have depreciation; there is no regulatory prohibition — it is an economic issue.',
          "Il margine d'interesse è il ricavo principale di una banca; escludere gli interessi eliminerebbe il business stesso. Le banche pubblicano il conto economico e hanno ammortamenti; non c'è alcun divieto regolamentare — è una questione economica."
        )
      },
      {
        id: 'val-fig-q5',
        kind: 'numeric',
        topic: 'fig-valuation',
        difficulty: 3,
        objective: l('Quantify excess capital.', 'Quantificare il capitale in eccesso.'),
        prompt: l(
          'A bank has RWA of €50bn and a CET1 ratio of 14.0%; its target CET1 ratio is 12.5%. Excess capital (€bn)?',
          'Una banca ha RWA per €50mld e un CET1 ratio del 14,0%; il CET1 ratio obiettivo è 12,5%. Capitale in eccesso (€mld)?'
        ),
        answer: 0.75,
        unit: '€bn',
        verify: { fn: 'product', args: [50, 0.015] },
        explanation: l(
          '(14.0% − 12.5%) × €50bn = €0.75bn of CET1 above target, potentially distributable and often added to DDM value. Applying the gap to total assets instead of RWA would overstate it.',
          "(14,0% − 12,5%) × €50mld = €0,75mld di CET1 sopra l'obiettivo, potenzialmente distribuibile e spesso sommato al valore del DDM. Applicare il differenziale al totale attivo invece che agli RWA lo sovrastimerebbe."
        )
      },
      {
        id: 'val-fig-q6',
        kind: 'mcq',
        topic: 'fig-valuation',
        difficulty: 3,
        objective: l('Link ROTE, cost of equity and P/TBV.', 'Collegare ROTE, costo dell’equity e P/TBV.'),
        prompt: l(
          'A bank’s sustainable ROTE is 9% and its cost of equity is 11%. Where should it trade relative to tangible book value?',
          "Il ROTE sostenibile di una banca è 9% e il costo dell'equity 11%. Dove dovrebbe trattare rispetto al patrimonio tangibile?"
        ),
        choices: [
          l('Above 1.0x, because it is profitable', 'Sopra 1,0x, perché è redditizia'),
          l('Exactly 1.0x', 'Esattamente 1,0x'),
          l('Below 1.0x, because it destroys value on each euro of equity', 'Sotto 1,0x, perché distrugge valore su ogni euro di patrimonio'),
          l('It cannot be determined without EBITDA', "Non si può stabilire senza l'EBITDA")
        ],
        correct: 2,
        explanation: l(
          'Being profitable is not enough: it must beat the cost of equity. With ROTE < COE, (ROTE − g) / (COE − g) < 1 — e.g. 7% / 9% = 0.78x with g = 2%.',
          "Essere redditizia non basta: deve battere il costo dell'equity. Con ROTE < COE, (ROTE − g) / (COE − g) < 1 — es. 7% / 9% = 0,78x con g = 2%."
        )
      }
    ],
    flashcards: [
      { id: 'fc-val-fig-1', topic: 'fig-valuation', front: l('Justified P/TBV formula?', 'Formula del P/TBV giustificato?'), back: l('(ROTE − g) / (COE − g)', '(ROTE − g) / (COE − g)') },
      { id: 'fc-val-fig-2', topic: 'fig-valuation', front: l('Why no EV for banks?', 'Perché niente EV per le banche?'), back: l('Debt and interest are operating (deposits are raw material), so net debt/EBITDA are meaningless.', 'Debito e interessi sono operativi (i depositi sono materia prima), quindi PFN/EBITDA non hanno senso.') },
      { id: 'fc-val-fig-3', topic: 'fig-valuation', front: l('What is tangible book value?', 'Cos’è il patrimonio netto tangibile?'), back: l('Book equity − goodwill − other intangibles.', 'Patrimonio netto − avviamento − altre immateriali.') },
      { id: 'fc-val-fig-4', topic: 'fig-valuation', front: l('What is excess capital in a bank DDM?', 'Cos’è il capitale in eccesso in un DDM bancario?'), back: l('CET1 above the target ratio × RWA — distributable, added to value.', 'CET1 oltre il ratio obiettivo × RWA — distribuibile, si somma al valore.') },
      { id: 'fc-val-fig-5', topic: 'fig-valuation', front: l('IFRS 17 metric watched by insurance analysts?', 'Metrica IFRS 17 seguita dagli analisti assicurativi?'), back: l('Contractual service margin (CSM): unearned profit on in-force contracts.', 'Contractual service margin (CSM): utile non ancora maturato sui contratti in essere.') }
    ],
    sources: [
      BASEL3,
      IFRS17,
      { label: 'EUR-Lex — Directive 2009/138/EC (Solvency II)', url: 'https://eur-lex.europa.eu/eli/dir/2009/138/oj' }
    ]
  },
  /* ======================================================================= */
  /* V5 — val-limitations                                                     */
  /* ======================================================================= */
  {
    id: 'val-limitations',
    academyId: 'valuation',
    moduleId: 'V5',
    mode: 'quick',
    minutes: 8,
    difficulty: 2,
    qualitative: true,
    reviewed: '2026-10',
    objective: l(
      'Critically assess the weaknesses of each valuation method and explain how practitioners triangulate to a defensible conclusion.',
      'Valutare criticamente i punti deboli di ciascun metodo di valutazione e spiegare come i professionisti triangolano per arrivare a una conclusione difendibile.'
    ),
    screens: [
      {
        type: 'intuition',
        title: l('A map is not the territory', 'La mappa non è il territorio'),
        body: l(
          'Every valuation method is a **model** — a simplified map of a messy reality. Relative methods borrow the market’s opinion (which can be wrong); intrinsic methods rely on your forecasts (which will be wrong).\n\nValue is an opinion; **price** is what someone actually pays. A good banker knows exactly where each method is fragile and never presents one number as "the truth".',
          "Ogni metodo di valutazione è un **modello** — una mappa semplificata di una realtà complessa. I metodi relativi prendono in prestito l'opinione del mercato (che può sbagliare); quelli intrinseci si basano sulle tue previsioni (che saranno sbagliate).\n\nIl valore è un'opinione; il **prezzo** è ciò che qualcuno paga davvero. Un buon banker sa esattamente dove ogni metodo è fragile e non presenta mai un numero come \"la verità\"."
        )
      },
      {
        type: 'technical',
        title: l('Method by method', 'Metodo per metodo'),
        body: l(
          '- **Trading comps**: no truly identical peers; inherit market mispricing (in a bubble, comps say "buy"); no control premium; accounting differences.\n- **Precedents**: few, stale or undisclosed deals; deal-specific synergies and auction dynamics; different market cycles.\n- **DCF**: highly sensitive to WACC, g and margins; TV often 60–80%+ of value; forecasts can be engineered to hit a target.\n- **LBO**: gives a financial buyer’s price, not intrinsic value; depends on credit markets.\n- **SOTP**: ignores dis-synergies and separation costs; conglomerate discounts may persist.',
          "- **Comparabili**: non esistono peer davvero identici; ereditano gli errori di prezzo del mercato (in una bolla i comparabili dicono \"compra\"); nessun premio di controllo; differenze contabili.\n- **Precedenti**: deal pochi, datati o non pubblici; sinergie specifiche e dinamiche d'asta; cicli di mercato diversi.\n- **DCF**: molto sensibile a WACC, g e margini; il TV spesso pesa il 60–80% e oltre; le previsioni possono essere costruite per centrare un obiettivo.\n- **LBO**: dà il prezzo di un compratore finanziario, non il valore intrinseco; dipende dal mercato del credito.\n- **SOTP**: ignora dis-sinergie e costi di separazione; gli sconti da conglomerata possono persistere."
        )
      },
      {
        type: 'technical',
        title: l('Cross-cutting issues', 'Problemi trasversali'),
        body: l(
          '- **Garbage in, garbage out**: the quality of the business plan dominates the quality of the model.\n- **Private companies**: no market price; practitioners may apply a discount for lack of marketability and adjust for owner-specific costs.\n- **Accounting noise**: IFRS vs US GAAP, IFRS 16, one-offs, "adjusted" EBITDA definitions.\n- **Behavioural bias**: anchoring on the current price or the client’s hopes; confirmation bias in choosing peers or ranges.\n- **Purpose matters**: a fairness opinion, a pitch and an impairment test can legitimately emphasise different methods.',
          "- **Garbage in, garbage out**: la qualità del business plan conta più della qualità del modello.\n- **Società non quotate**: nessun prezzo di mercato; si può applicare uno sconto per mancanza di liquidità (marketability) e rettificare per costi legati alla proprietà.\n- **Rumore contabile**: IFRS vs US GAAP, IFRS 16, poste non ricorrenti, definizioni di EBITDA \"adjusted\".\n- **Bias comportamentali**: ancoraggio al prezzo attuale o alle speranze del cliente; bias di conferma nella scelta di peer o range.\n- **Lo scopo conta**: una fairness opinion, un pitch e un impairment test possono legittimamente enfatizzare metodi diversi."
        )
      },
      {
        type: 'example',
        title: l('How small changes move value', 'Come piccole variazioni muovono il valore'),
        body: l(
          'A business with FCF next year of €100m and WACC 8%. Changing only perpetual growth:',
          'Un business con FCF del prossimo anno di €100m e WACC 8%. Cambiando solo la crescita perpetua:'
        ),
        table: {
          headers: [l('Growth g', 'Crescita g'), l('Value = 100 / (8% − g)', 'Valore = 100 / (8% − g)'), l('vs base', 'vs base')],
          rows: [
            ['1.0%', '1,429', '−14%'],
            [l('2.0% (base)', '2,0% (base)'), '1,667', '—'],
            ['3.0%', '2,000', '+20%']
          ]
        }
      },
      {
        type: 'realworld',
        body: l(
          'Practitioners triangulate: they run several methods, explain why they differ, and weight the most relevant ones for the situation (e.g. DCF and precedents for a control sale, comps for an IPO). Fairness opinions disclose the methods and key assumptions used, so boards can judge them. Interviewers love asking about limitations because it reveals whether you understand the tools or just memorised formulas.',
          "I professionisti triangolano: applicano più metodi, spiegano perché differiscono e pesano i più rilevanti per la situazione (es. DCF e precedenti per una cessione del controllo, comparabili per un'IPO). Le fairness opinion indicano metodi e ipotesi chiave usati, così che il CdA possa giudicarli. Ai colloqui le domande sui limiti piacciono molto perché rivelano se capisci gli strumenti o hai solo memorizzato formule."
        )
      },
      { type: 'exercise', questionId: 'val-lim-q1' },
      { type: 'exercise', questionId: 'val-lim-q2' },
      { type: 'exercise', questionId: 'val-lim-q3' },
      {
        type: 'interview',
        question: l('Which valuation method is the best?', 'Qual è il metodo di valutazione migliore?'),
        answer: l(
          'None is best in isolation — it depends on the company and the purpose. A DCF captures intrinsic value but is very sensitive to assumptions; comps reflect today’s market but inherit its mispricing and exclude control; precedents capture control premia but are often stale. For a stable cash-generative business in a control sale I would lean on the DCF and precedents, cross-checked with comps; for a bank, P/TBV and a DDM. The strength comes from triangulating and explaining the differences.',
          "Nessuno è il migliore da solo — dipende dalla società e dallo scopo. Il DCF cattura il valore intrinseco ma è molto sensibile alle ipotesi; i comparabili riflettono il mercato di oggi ma ne ereditano gli errori ed escludono il controllo; i precedenti catturano i premi di controllo ma sono spesso datati. Per un business stabile e generatore di cassa in una cessione del controllo mi affiderei a DCF e precedenti, verificati con i comparabili; per una banca, P/TBV e DDM. La forza sta nel triangolare e spiegare le differenze."
        )
      },
      {
        type: 'mistakes',
        items: [
          l('Treating a DCF output as precise to the cent.', 'Considerare il risultato di un DCF preciso al centesimo.'),
          l('Assuming comps are "objective" because they come from market prices.', 'Pensare che i comparabili siano "oggettivi" perché derivano da prezzi di mercato.'),
          l('Ignoring the purpose of the valuation when choosing methods.', 'Ignorare lo scopo della valutazione nella scelta dei metodi.'),
          l('Confusing value (an estimate) with price (a transaction outcome).', 'Confondere il valore (una stima) con il prezzo (l’esito di una transazione).')
        ]
      },
      {
        type: 'summary',
        items: [
          l('Relative methods inherit market errors; intrinsic methods inherit forecast errors.', 'I metodi relativi ereditano gli errori del mercato; quelli intrinseci gli errori di previsione.'),
          l('DCF value is dominated by a few long-run assumptions.', 'Il valore DCF è dominato da poche ipotesi di lungo periodo.'),
          l('Triangulate, explain differences, and match methods to purpose.', 'Triangola, spiega le differenze e adatta i metodi allo scopo.')
        ]
      }
    ],
    questions: [
      {
        id: 'val-lim-q1',
        kind: 'mcq',
        topic: 'valuation-limitations',
        difficulty: 2,
        objective: l('Identify a structural weakness of trading comps.', 'Individuare un limite strutturale dei comparabili.'),
        prompt: l(
          'During a sector-wide bubble, which method is most likely to overstate value without signalling it?',
          'Durante una bolla settoriale, quale metodo è più probabile che sovrastimi il valore senza segnalarlo?'
        ),
        choices: [
          l('A DCF with conservative, independently built forecasts', 'Un DCF con previsioni prudenti costruite in modo indipendente'),
          l('Trading comparables', 'I comparabili di borsa'),
          l('Tangible book value', 'Il patrimonio netto tangibile'),
          l('Liquidation value', 'Il valore di liquidazione')
        ],
        correct: 1,
        explanation: l(
          'Comps simply mirror current market prices, so an overvalued sector produces overvalued comps. An independent DCF, book value or liquidation value are anchored elsewhere (though each has its own flaws).',
          'I comparabili rispecchiano semplicemente i prezzi correnti, quindi un settore sopravvalutato produce comparabili sopravvalutati. Un DCF indipendente, il patrimonio contabile o il valore di liquidazione sono ancorati altrove (pur con i loro difetti).'
        )
      },
      {
        id: 'val-lim-q2',
        kind: 'numeric',
        topic: 'valuation-limitations',
        difficulty: 2,
        objective: l('Quantify DCF sensitivity to growth.', 'Quantificare la sensibilità del DCF alla crescita.'),
        prompt: l(
          'FCF next year €100m, WACC 8%. Value at g = 2% is €1,666.7m. What is the value (€m) if g is 3% instead?',
          'FCF del prossimo anno €100m, WACC 8%. Il valore con g = 2% è €1.666,7m. Qual è il valore (€m) se g è invece 3%?'
        ),
        answer: 2000,
        unit: '€m',
        verify: { fn: 'pvGrowingPerpetuity', args: [100, 0.08, 0.03] },
        explanation: l(
          '100 / (0.08 − 0.03) = 2,000 — a 20% jump from a single 1pp change in a long-run assumption nobody can know precisely.',
          "100 / (0,08 − 0,03) = 2.000 — un salto del 20% per una sola variazione di 1 punto in un'ipotesi di lungo periodo che nessuno può conoscere con precisione."
        )
      },
      {
        id: 'val-lim-q3',
        kind: 'multi',
        topic: 'valuation-limitations',
        difficulty: 2,
        objective: l('Match limitations to methods.', 'Abbinare i limiti ai metodi.'),
        prompt: l('Which statements correctly describe a limitation? Select all that apply.', 'Quali affermazioni descrivono correttamente un limite? Seleziona tutte le risposte corrette.'),
        choices: [
          l('Precedents may reflect market conditions years ago', 'I precedenti possono riflettere condizioni di mercato di anni fa'),
          l('A DCF’s terminal value often dominates the result', 'Il valore terminale di un DCF spesso domina il risultato'),
          l('Trading comps include a control premium', 'I comparabili di borsa includono un premio di controllo'),
          l('An LBO analysis reflects a financial buyer’s constraints, not intrinsic value', 'Un’analisi LBO riflette i vincoli di un compratore finanziario, non il valore intrinseco'),
          l('SOTP may ignore separation costs and dis-synergies', 'La SOTP può ignorare costi di separazione e dis-sinergie')
        ],
        correct: [0, 1, 3, 4],
        explanation: l(
          'All are genuine limitations except the third: trading comps are minority valuations and exclude a control premium — that is precisely why precedents tend to be higher.',
          'Sono tutti limiti reali tranne il terzo: i comparabili sono valutazioni di minoranza ed escludono il premio di controllo — proprio per questo i precedenti tendono a essere più alti.'
        )
      },
      {
        id: 'val-lim-q4',
        kind: 'numeric',
        topic: 'valuation-limitations',
        difficulty: 2,
        objective: l('Express a sensitivity in percentage terms.', 'Esprimere una sensitività in termini percentuali.'),
        prompt: l(
          'Value rises from €1,666.7m (g = 2%) to €2,000m (g = 3%). Percentage increase (%)?',
          'Il valore sale da €1.666,7m (g = 2%) a €2.000m (g = 3%). Aumento percentuale (%)?'
        ),
        answer: 20,
        unit: '%',
        tolerance: { abs: 0.1 },
        verify: { fn: 'ratio', args: [33333.333, 1666.6667] },
        explanation: l(
          '2,000 / 1,666.7 − 1 = 20%: the spread shrinks from 6% to 5%, so value scales by 6/5. Dividing by 2,000 (16.7%) uses the wrong base.',
          '2.000 / 1.666,7 − 1 = 20%: lo spread scende dal 6% al 5%, quindi il valore si moltiplica per 6/5. Dividere per 2.000 (16,7%) usa la base sbagliata.'
        )
      },
      {
        id: 'val-lim-q5',
        kind: 'mcq',
        topic: 'valuation-limitations',
        difficulty: 1,
        objective: l('Distinguish value from price.', 'Distinguere valore e prezzo.'),
        prompt: l('Which statement best describes the relationship between value and price?', 'Quale affermazione descrive meglio il rapporto tra valore e prezzo?'),
        choices: [
          l('They are always identical in efficient markets', 'Sono sempre identici nei mercati efficienti'),
          l('Value is an estimate from a model; price is the outcome of a negotiation or trade', 'Il valore è una stima da un modello; il prezzo è l’esito di una trattativa o di uno scambio'),
          l('Price is computed with a DCF; value with multiples', 'Il prezzo si calcola con un DCF; il valore con i multipli'),
          l('Value is always higher than price', 'Il valore è sempre più alto del prezzo')
        ],
        correct: 1,
        explanation: l(
          'Valuation produces a range of estimates; price depends on negotiation, competition, synergies and financing. Neither method maps to "price" by definition, and value can be above or below price.',
          'La valutazione produce un intervallo di stime; il prezzo dipende da trattativa, concorrenza, sinergie e finanziamento. Nessun metodo corrisponde per definizione al "prezzo", e il valore può essere sopra o sotto il prezzo.'
        )
      }
    ],
    flashcards: [
      { id: 'fc-val-lim-1', topic: 'valuation-limitations', front: l('Main weakness of trading comps?', 'Principale limite dei comparabili?'), back: l('They inherit market mispricing and exclude control.', 'Ereditano gli errori di prezzo del mercato ed escludono il controllo.') },
      { id: 'fc-val-lim-2', topic: 'valuation-limitations', front: l('Main weakness of a DCF?', 'Principale limite del DCF?'), back: l('Sensitivity to WACC, g and forecasts; TV dominates.', 'Sensibilità a WACC, g e previsioni; il TV domina.') },
      { id: 'fc-val-lim-3', topic: 'valuation-limitations', front: l('Main weakness of precedents?', 'Principale limite dei precedenti?'), back: l('Few, stale or undisclosed deals with deal-specific factors.', 'Deal pochi, datati o non pubblici con fattori specifici.') },
      { id: 'fc-val-lim-4', topic: 'valuation-limitations', front: l('How do bankers deal with method limitations?', 'Come gestiscono i banker i limiti dei metodi?'), back: l('Triangulate across methods, explain differences, match methods to purpose, show ranges.', 'Triangolano tra metodi, spiegano le differenze, adattano i metodi allo scopo, mostrano intervalli.') }
    ]
  },
];
