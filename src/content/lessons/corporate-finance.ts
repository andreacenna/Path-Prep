import type { Lesson } from '../types';

/**
 * Academy 2 — Corporate Finance.
 * Modules CF1 (Time Value of Money), CF2 (Capital Budgeting), CF3 (Returns and Capital Allocation),
 * CF4 (Cost of Capital), CF5 (Capital Structure and Payout).
 *
 * Percent answers use unit '%' (percentage points). Where a finance.ts function is linear in its
 * rate inputs (capm, wacc, afterTaxCostOfDebt, jensensAlpha, roic, dupontRoe), the verify spec passes
 * rates in percentage points so the recomputed value is on the same scale as the stated answer.
 */
export const lessons: Lesson[] = [
  /* ====================================================================== */
  /* CF1 — Time Value of Money                                               */
  /* ====================================================================== */
  {
    id: 'cf-time-value',
    academyId: 'corporate-finance',
    moduleId: 'CF1',
    mode: 'deep',
    minutes: 12,
    difficulty: 1,
    reviewed: '2026-10',
    objective: {
      en: 'Compute present and future values of single cash flows, convert between nominal and effective rates, and explain why discounting underpins every valuation.',
      it: 'Calcolare valore attuale e valore futuro di singoli flussi, convertire tassi nominali in tassi effettivi e spiegare perché l’attualizzazione è alla base di ogni valutazione.'
    },
    screens: [
      {
        type: 'intuition',
        title: { en: 'A euro today beats a euro tomorrow', it: 'Un euro oggi vale più di un euro domani' },
        body: {
          en: 'Would you rather receive €100 today or €100 in a year? Today — because you could **invest it and earn a return**, because **inflation** erodes purchasing power, and because a future promise carries **risk** that it is not kept.\n\nThe interest rate is the **price of time**. Compounding moves money forward in time; discounting moves it back. Every valuation in IB — DCF, LBO, bond pricing — is just this idea applied many times.',
          it: 'Preferisci ricevere €100 oggi o €100 tra un anno? Oggi — perché potresti **investirli e ottenere un rendimento**, perché l’**inflazione** erode il potere d’acquisto e perché una promessa futura comporta il **rischio** che non venga mantenuta.\n\nIl tasso d’interesse è il **prezzo del tempo**. La capitalizzazione sposta il denaro in avanti nel tempo; l’attualizzazione lo riporta indietro. Ogni valutazione in IB — DCF, LBO, pricing di obbligazioni — è questa idea applicata molte volte.'
        }
      },
      {
        type: 'technical',
        title: { en: 'Compounding and discounting', it: 'Capitalizzazione e attualizzazione' },
        body: {
          en: '- **Compound interest**: interest earns interest. €100 at 10% becomes 110 after one year and 121 after two (not 120).\n- **Future value (FV)**: what a sum invested today grows to.\n- **Present value (PV)**: what a future sum is worth today, given a **discount rate** that reflects the opportunity cost of capital and the risk of the cash flow.\n- The **discount factor** 1/(1 + r)^t is the PV of €1 received at time t. It falls as r or t rises.\n\nHigher risk → higher discount rate → lower PV. That is why riskier companies trade at lower valuations for the same expected cash flows.',
          it: '- **Interesse composto**: gli interessi producono a loro volta interessi. €100 al 10% diventano 110 dopo un anno e 121 dopo due (non 120).\n- **Valore futuro (FV)**: il valore a cui cresce una somma investita oggi.\n- **Valore attuale (PV)**: quanto vale oggi una somma futura, dato un **tasso di sconto** che riflette il costo opportunità del capitale e il rischio del flusso.\n- Il **fattore di sconto** 1/(1 + r)^t è il valore attuale di €1 ricevuto al tempo t. Diminuisce all’aumentare di r o di t.\n\nPiù rischio → tasso di sconto più alto → valore attuale più basso. Per questo, a parità di flussi attesi, le società più rischiose valgono meno.'
        }
      },
      {
        type: 'formula',
        formulas: [
          {
            name: { en: 'Future value of a single sum', it: 'Valore futuro di una somma singola' },
            expr: 'FV = PV × (1 + r)^n',
            vars: [
              { sym: 'r', desc: { en: 'Rate per period (decimal)', it: 'Tasso per periodo (in decimali)' } },
              { sym: 'n', desc: { en: 'Number of periods', it: 'Numero di periodi' } }
            ]
          },
          {
            name: { en: 'Present value of a single sum', it: 'Valore attuale di una somma singola' },
            expr: 'PV = FV / (1 + r)^n'
          },
          {
            name: { en: 'Effective annual rate (EAR)', it: 'Tasso annuo effettivo (TAE)' },
            expr: 'EAR = (1 + i/m)^m − 1',
            vars: [
              { sym: 'i', desc: { en: 'Nominal (stated) annual rate', it: 'Tasso nominale annuo' } },
              { sym: 'm', desc: { en: 'Compounding periods per year', it: 'Periodi di capitalizzazione nell’anno' } }
            ]
          }
        ],
        note: {
          en: 'Derivation: after 1 period PV × (1 + r); after 2 periods PV × (1 + r) × (1 + r); after n periods PV × (1 + r)^n. PV simply inverts FV. Rule of 72: money doubles in roughly 72 / (rate in %) years.',
          it: 'Derivazione: dopo 1 periodo PV × (1 + r); dopo 2 periodi PV × (1 + r) × (1 + r); dopo n periodi PV × (1 + r)^n. Il PV è semplicemente l’inverso del FV. Regola del 72: il capitale raddoppia in circa 72 / (tasso in %) anni.'
        }
      },
      {
        type: 'example',
        title: { en: '€1,000 compounding at 8%', it: '€1.000 capitalizzati all’8%' },
        body: {
          en: 'Watch interest-on-interest accelerate. Simple interest would add a flat €80 per year (€1,400 after 5 years); compounding gives €1,469. Read backwards, the table also says: €1,469 received in 5 years is worth €1,000 today at an 8% discount rate.',
          it: 'Osserva come gli interessi sugli interessi accelerano la crescita. L’interesse semplice aggiungerebbe €80 fissi l’anno (€1.400 dopo 5 anni); la capitalizzazione composta porta a €1.469. Letta al contrario, la tabella dice anche che €1.469 ricevuti tra 5 anni valgono oggi €1.000 a un tasso di sconto dell’8%.'
        },
        table: {
          headers: [
            { en: 'Year', it: 'Anno' },
            { en: 'Opening', it: 'Inizio anno' },
            { en: 'Interest 8%', it: 'Interessi 8%' },
            { en: 'Closing', it: 'Fine anno' }
          ],
          rows: [
            ['1', '1,000.0', '80.0', '1,080.0'],
            ['2', '1,080.0', '86.4', '1,166.4'],
            ['3', '1,166.4', '93.3', '1,259.7'],
            ['4', '1,259.7', '100.8', '1,360.5'],
            ['5', '1,360.5', '108.8', '1,469.3']
          ],
          totalRows: [4]
        }
      },
      {
        type: 'technical',
        title: { en: 'Nominal vs effective rates', it: 'Tassi nominali ed effettivi' },
        body: {
          en: 'A loan quoted at **12% nominal, compounded monthly** charges 1% per month. Because monthly interest compounds, the true annual cost is **(1.01)^12 − 1 = 12.68%** — the effective annual rate.\n\n- More frequent compounding → higher EAR for the same nominal rate.\n- Always compare instruments on the **same compounding basis**.\n- Match the rate to the period: a monthly cash flow needs a monthly rate; an annual DCF needs an annual rate.',
          it: 'Un finanziamento quotato al **12% nominale con capitalizzazione mensile** applica l’1% al mese. Poiché gli interessi mensili si capitalizzano, il costo annuo reale è **(1,01)^12 − 1 = 12,68%** — il tasso annuo effettivo.\n\n- Capitalizzazione più frequente → TAE più alto a parità di tasso nominale.\n- Confronta sempre gli strumenti sulla **stessa base di capitalizzazione**.\n- Abbina tasso e periodo: a un flusso mensile serve un tasso mensile; a un DCF annuale serve un tasso annuo.'
        }
      },
      {
        type: 'realworld',
        body: {
          en: 'In a DCF, an analyst forecasts free cash flows for 5–10 years and multiplies each by its discount factor at the WACC; the sum of these present values plus the discounted terminal value is enterprise value. In an LBO, the sponsor runs the logic forwards: what must equity grow to (FV) to hit a 20%+ IRR? Same mathematics, opposite direction.',
          it: 'In un DCF l’analista stima i free cash flow per 5–10 anni e moltiplica ciascuno per il suo fattore di sconto al WACC; la somma dei valori attuali più il valore terminale attualizzato è l’enterprise value. In un LBO lo sponsor ragiona in avanti: a quanto deve crescere l’equity (FV) per ottenere un IRR superiore al 20%? Stessa matematica, direzione opposta.'
        }
      },
      { type: 'exercise', questionId: 'cf-tv-q1' },
      { type: 'exercise', questionId: 'cf-tv-q2' },
      { type: 'exercise', questionId: 'cf-tv-q5' },
      {
        type: 'interview',
        question: {
          en: 'If the discount rate goes up, what happens to the present value of a cash flow — and why does that matter for valuation?',
          it: 'Se il tasso di sconto aumenta, cosa succede al valore attuale di un flusso di cassa — e perché è importante per la valutazione?'
        },
        answer: {
          en: 'The PV falls, because each cash flow is divided by a larger (1 + r)^t. The effect is stronger the further out the cash flow is, so long-duration assets — growth stocks, long-dated bonds, DCFs dominated by terminal value — are the most rate-sensitive. That is why rising interest rates compress valuations, especially for high-growth companies.',
          it: 'Il valore attuale diminuisce, perché ogni flusso viene diviso per un (1 + r)^t più grande. L’effetto è tanto più forte quanto più lontano è il flusso: le attività a lunga duration — titoli growth, obbligazioni a lunga scadenza, DCF dominati dal valore terminale — sono le più sensibili ai tassi. Per questo un rialzo dei tassi comprime le valutazioni, soprattutto delle società ad alta crescita.'
        }
      },
      {
        type: 'mistakes',
        items: [
          { en: 'Using simple interest (adding r × n) instead of compounding.', it: 'Usare l’interesse semplice (sommare r × n) invece della capitalizzazione composta.' },
          { en: 'Mixing periods: discounting monthly cash flows with an annual rate, or vice versa.', it: 'Mescolare i periodi: attualizzare flussi mensili con un tasso annuo, o viceversa.' },
          { en: 'Comparing a nominal rate compounded monthly with an annual effective rate as if they were equivalent.', it: 'Confrontare un tasso nominale con capitalizzazione mensile e un tasso annuo effettivo come se fossero equivalenti.' },
          { en: 'Forgetting that the discount rate must reflect the risk of the specific cash flow being valued.', it: 'Dimenticare che il tasso di sconto deve riflettere il rischio dello specifico flusso valutato.' }
        ]
      },
      {
        type: 'summary',
        items: [
          { en: 'FV = PV × (1 + r)^n; PV = FV / (1 + r)^n.', it: 'Valore futuro FV = PV × (1 + r)^n; valore attuale PV = FV / (1 + r)^n.' },
          { en: 'Higher rate or longer horizon → lower PV.', it: 'Tasso più alto o orizzonte più lungo → PV più basso.' },
          { en: 'EAR = (1 + i/m)^m − 1; compare rates on the same compounding basis.', it: 'TAE = (1 + i/m)^m − 1; confronta i tassi sulla stessa base di capitalizzazione.' },
          { en: 'Discounting is the engine of DCF, bond pricing and LBO returns.', it: 'L’attualizzazione è il motore di DCF, pricing obbligazionario e rendimenti degli LBO.' }
        ]
      }
    ],
    questions: [
      {
        id: 'cf-tv-q1',
        kind: 'numeric',
        topic: 'time-value-of-money',
        difficulty: 1,
        objective: { en: 'Compute the future value of a single sum.', it: 'Calcolare il valore futuro di una somma singola.' },
        prompt: {
          en: 'You invest €5,000 today at 7% per year, compounded annually. What is it worth after 10 years (€)?',
          it: 'Investi oggi €5.000 al 7% annuo con capitalizzazione annuale. Quanto valgono dopo 10 anni (€)?'
        },
        answer: 9835.76,
        unit: '€',
        tolerance: { abs: 1 },
        verify: { fn: 'fv', args: [5000, 0.07, 10] },
        steps: [
          { en: 'FV = 5,000 × 1.07^10', it: 'FV = 5.000 × 1,07^10' },
          { en: '1.07^10 = 1.96715 → FV ≈ €9,835.76', it: '1,07^10 = 1,96715 → FV ≈ €9.835,76' }
        ],
        explanation: {
          en: 'FV = 5,000 × 1.07^10 ≈ 9,835.76. Simple interest would give only 5,000 × (1 + 0.7) = 8,500 — the difference is interest earned on interest. Rule of 72 check: at 7% money doubles in about 10 years, so ≈ €10,000 is the right ballpark.',
          it: 'FV = 5.000 × 1,07^10 ≈ 9.835,76. L’interesse semplice darebbe solo 5.000 × (1 + 0,7) = 8.500 — la differenza sono gli interessi sugli interessi. Verifica con la regola del 72: al 7% il capitale raddoppia in circa 10 anni, quindi ≈ €10.000 è l’ordine di grandezza giusto.'
        }
      },
      {
        id: 'cf-tv-q2',
        kind: 'numeric',
        topic: 'time-value-of-money',
        difficulty: 1,
        objective: { en: 'Discount a single future cash flow.', it: 'Attualizzare un singolo flusso futuro.' },
        prompt: {
          en: 'An earn-out will pay €2,000,000 in 4 years. At a 9% discount rate, what is its present value (€)?',
          it: 'Un earn-out pagherà €2.000.000 tra 4 anni. Con un tasso di sconto del 9%, qual è il suo valore attuale (€)?'
        },
        answer: 1416850.42,
        unit: '€',
        tolerance: { abs: 50 },
        verify: { fn: 'pv', args: [2000000, 0.09, 4] },
        explanation: {
          en: 'PV = 2,000,000 / 1.09^4 = 2,000,000 / 1.41158 ≈ 1,416,850. Dividing by (1 + 4 × 9%) = 1.36 would be simple discounting and overstates value (≈ 1.47m).',
          it: 'PV = 2.000.000 / 1,09^4 = 2.000.000 / 1,41158 ≈ 1.416.850. Dividere per (1 + 4 × 9%) = 1,36 sarebbe un’attualizzazione semplice e sopravvaluterebbe il flusso (≈ 1,47m).'
        }
      },
      {
        id: 'cf-tv-q3',
        kind: 'numeric',
        topic: 'time-value-of-money',
        difficulty: 2,
        objective: { en: 'Apply periodic compounding.', it: 'Applicare la capitalizzazione infra-annuale.' },
        prompt: {
          en: 'A €1,000,000 deposit earns 12% nominal per year, compounded monthly. What is the balance after one year (€)?',
          it: 'Un deposito di €1.000.000 rende il 12% nominale annuo con capitalizzazione mensile. Qual è il saldo dopo un anno (€)?'
        },
        answer: 1126825.03,
        unit: '€',
        tolerance: { abs: 10 },
        verify: { fn: 'fv', args: [1000000, 0.01, 12] },
        explanation: {
          en: 'Monthly rate = 12% / 12 = 1%, over 12 periods: 1,000,000 × 1.01^12 ≈ 1,126,825. The implied effective annual rate is 12.68%, not 12%. Using 1,120,000 ignores intra-year compounding.',
          it: 'Tasso mensile = 12% / 12 = 1%, per 12 periodi: 1.000.000 × 1,01^12 ≈ 1.126.825. Il tasso annuo effettivo implicito è 12,68%, non 12%. Il valore 1.120.000 ignora la capitalizzazione infra-annuale.'
        }
      },
      {
        id: 'cf-tv-q4',
        kind: 'mcq',
        topic: 'time-value-of-money',
        difficulty: 2,
        objective: { en: 'Compare rates with different compounding frequencies.', it: 'Confrontare tassi con frequenze di capitalizzazione diverse.' },
        prompt: {
          en: 'Which loan is cheapest for the borrower?',
          it: 'Quale finanziamento è il più conveniente per chi si indebita?'
        },
        choices: [
          { en: '8.0% nominal, compounded quarterly', it: '8,0% nominale, capitalizzazione trimestrale' },
          { en: '8.1% effective annual rate', it: '8,1% tasso annuo effettivo' },
          { en: '7.9% nominal, compounded monthly', it: '7,9% nominale, capitalizzazione mensile' },
          { en: 'They all cost the same', it: 'Costano tutti uguale' }
        ],
        correct: 1,
        explanation: {
          en: 'Convert to EAR: 8% quarterly → 1.02^4 − 1 = 8.24%; 7.9% monthly → (1 + 0.079/12)^12 − 1 ≈ 8.19%; the 8.1% EAR is already effective, so it is the cheapest. A lower headline nominal rate can still be more expensive once compounding is considered.',
          it: 'Converti in TAE: 8% trimestrale → 1,02^4 − 1 = 8,24%; 7,9% mensile → (1 + 0,079/12)^12 − 1 ≈ 8,19%; l’8,1% è già effettivo, quindi è il più conveniente. Un tasso nominale più basso può risultare più caro una volta considerata la capitalizzazione.'
        }
      },
      {
        id: 'cf-tv-q5',
        kind: 'grid',
        topic: 'discount-factors',
        difficulty: 1,
        objective: { en: 'Build a discounting schedule.', it: 'Costruire un piano di attualizzazione.' },
        prompt: {
          en: 'A project pays €100 at the end of each of years 1–3. At 10%, fill in the present value of each payment (€, 2 decimals).',
          it: 'Un progetto paga €100 alla fine di ciascuno degli anni 1–3. Al 10%, inserisci il valore attuale di ogni pagamento (€, 2 decimali).'
        },
        columns: [
          { en: 'Year', it: 'Anno' },
          { en: 'Cash flow', it: 'Flusso' },
          { en: 'PV at 10%', it: 'VA al 10%' }
        ],
        rows: [
          { label: { en: 'Year 1', it: 'Anno 1' }, cells: [100, { answer: 90.91, tolerance: { abs: 0.02 }, verify: { fn: 'pv', args: [100, 0.1, 1] } }] },
          { label: { en: 'Year 2', it: 'Anno 2' }, cells: [100, { answer: 82.64, tolerance: { abs: 0.02 }, verify: { fn: 'pv', args: [100, 0.1, 2] } }] },
          { label: { en: 'Year 3', it: 'Anno 3' }, cells: [100, { answer: 75.13, tolerance: { abs: 0.02 }, verify: { fn: 'pv', args: [100, 0.1, 3] } }] },
          { label: { en: 'Total', it: 'Totale' }, cells: [300, { answer: 248.69, tolerance: { abs: 0.05 }, verify: { fn: 'pvAnnuity', args: [100, 0.1, 3] } }] }
        ],
        unit: '€',
        explanation: {
          en: 'PV_t = 100 / 1.1^t: 90.91, 82.64, 75.13, totalling 248.69 — the same as the 3-year annuity formula. Each later payment is worth less because it is discounted for one more period.',
          it: 'VA_t = 100 / 1,1^t: 90,91, 82,64, 75,13, per un totale di 248,69 — lo stesso risultato della formula della rendita a 3 anni. Ogni pagamento successivo vale meno perché è attualizzato per un periodo in più.'
        }
      }
    ],
    flashcards: [
      { id: 'fc-cf-tv-1', topic: 'time-value-of-money', front: { en: 'Formula for the present value of a single sum?', it: 'Formula del valore attuale di una somma singola?' }, back: { en: 'PV = FV / (1 + r)^n', it: 'PV = FV / (1 + r)^n' } },
      { id: 'fc-cf-tv-2', topic: 'time-value-of-money', front: { en: 'Three reasons money today is worth more than money tomorrow?', it: 'Tre motivi per cui il denaro oggi vale più del denaro domani?' }, back: { en: 'Opportunity to earn a return, inflation, and risk that the future payment is not made.', it: 'Possibilità di ottenere un rendimento, inflazione e rischio che il pagamento futuro non avvenga.' } },
      { id: 'fc-cf-tv-3', topic: 'time-value-of-money', front: { en: 'Effective annual rate formula?', it: 'Formula del tasso annuo effettivo?' }, back: { en: 'EAR = (1 + i/m)^m − 1, where i is the nominal rate and m the compounding periods per year.', it: 'TAE = (1 + i/m)^m − 1, dove i è il tasso nominale e m il numero di capitalizzazioni annue.' } },
      { id: 'fc-cf-tv-4', topic: 'time-value-of-money', front: { en: 'Rule of 72?', it: 'Regola del 72?' }, back: { en: 'Years to double ≈ 72 / interest rate in %. At 8%, about 9 years.', it: 'Anni per raddoppiare ≈ 72 / tasso in %. All’8%, circa 9 anni.' } },
      { id: 'fc-cf-tv-5', topic: 'discount-factors', front: { en: 'What is a discount factor?', it: 'Che cos’è un fattore di sconto?' }, back: { en: '1 / (1 + r)^t: the present value of €1 received at time t.', it: '1 / (1 + r)^t: il valore attuale di €1 ricevuto al tempo t.' } }
    ]
  },

  {
    id: 'cf-annuities-perpetuities',
    academyId: 'corporate-finance',
    moduleId: 'CF1',
    mode: 'deep',
    minutes: 14,
    difficulty: 2,
    reviewed: '2026-10',
    objective: {
      en: 'Value annuities, annuities due, perpetuities, growing perpetuities and delayed perpetuities — the building blocks of loans, bonds and terminal values.',
      it: 'Valutare rendite, rendite anticipate, perpetuità, perpetuità crescenti e perpetuità differite — i mattoni di mutui, obbligazioni e valori terminali.'
    },
    screens: [
      {
        type: 'intuition',
        title: { en: 'Shortcuts for repeated cash flows', it: 'Scorciatoie per flussi ripetuti' },
        body: {
          en: 'Many financial claims pay the **same amount at regular intervals**: a mortgage, a bond coupon, a lease. Discounting each payment one by one works, but closed-form formulas are faster and reveal structure.\n\n- **Annuity**: equal payments for a fixed number of periods.\n- **Perpetuity**: equal payments forever.\n- **Growing perpetuity**: payments growing at a constant rate forever — the formula behind the Gordon growth terminal value in a DCF.',
          it: 'Molti strumenti finanziari pagano **lo stesso importo a intervalli regolari**: un mutuo, la cedola di un’obbligazione, un leasing. Attualizzare ogni pagamento uno per uno funziona, ma le formule chiuse sono più rapide e ne mostrano la struttura.\n\n- **Rendita**: pagamenti costanti per un numero fisso di periodi.\n- **Perpetuità**: pagamenti costanti per sempre.\n- **Perpetuità crescente**: pagamenti che crescono a tasso costante per sempre — la formula dietro il valore terminale di Gordon nel DCF.'
        }
      },
      {
        type: 'technical',
        title: { en: 'Where the formulas come from', it: 'Da dove nascono le formule' },
        body: {
          en: '**Perpetuity**: an amount P invested at r yields C = r × P each year forever, so P = C / r.\n\n**Annuity** = a perpetuity starting now **minus** a perpetuity starting after n periods: C/r − (C/r) / (1 + r)^n.\n\n**Growing perpetuity**: the geometric series C/(1+r) + C(1+g)/(1+r)^2 + … converges to C / (r − g) only if **r > g**. C is the **next** period’s cash flow, not today’s.',
          it: '**Perpetuità**: un capitale P investito al tasso r rende C = r × P ogni anno per sempre, quindi P = C / r.\n\n**Rendita** = una perpetuità che parte ora **meno** una perpetuità che parte dopo n periodi: C/r − (C/r) / (1 + r)^n.\n\n**Perpetuità crescente**: la serie geometrica C/(1+r) + C(1+g)/(1+r)^2 + … converge a C / (r − g) solo se **r > g**. C è il flusso del **prossimo** periodo, non quello di oggi.'
        }
      },
      {
        type: 'formula',
        formulas: [
          {
            name: { en: 'PV of an ordinary annuity (payments at period end)', it: 'VA di una rendita posticipata (pagamenti a fine periodo)' },
            expr: 'PV = C × [1 − (1 + r)^−n] / r',
            vars: [
              { sym: 'C', desc: { en: 'Payment per period', it: 'Rata per periodo' } },
              { sym: 'n', desc: { en: 'Number of payments', it: 'Numero di rate' } }
            ]
          },
          { name: { en: 'FV of an ordinary annuity', it: 'Montante di una rendita posticipata' }, expr: 'FV = C × [(1 + r)^n − 1] / r' },
          { name: { en: 'Annuity due (payments at period start)', it: 'Rendita anticipata (pagamenti a inizio periodo)' }, expr: 'PV_due = PV_ordinary × (1 + r)' },
          { name: { en: 'Perpetuity', it: 'Perpetuità' }, expr: 'PV = C / r' },
          {
            name: { en: 'Growing perpetuity', it: 'Perpetuità crescente' },
            expr: 'PV = C₁ / (r − g),  r > g',
            vars: [{ sym: 'C₁', desc: { en: 'Cash flow at the end of the next period', it: 'Flusso alla fine del prossimo periodo' } }]
          }
        ],
        note: {
          en: 'Each formula gives value one period BEFORE the first payment. A perpetuity whose first payment is in year 4 is valued at year 3 and then discounted 3 years back.',
          it: 'Ogni formula restituisce il valore un periodo PRIMA del primo pagamento. Una perpetuità con primo pagamento all’anno 4 si valuta all’anno 3 e poi si attualizza di 3 anni.'
        }
      },
      {
        type: 'example',
        title: { en: 'Three instruments, one discount rate logic', it: 'Tre strumenti, una sola logica di attualizzazione' },
        body: {
          en: 'Alfa S.p.A. evaluates three claims at the rates shown. Notice how much value the "forever" part adds, and how sensitive the growing perpetuity is to r − g.',
          it: 'Alfa S.p.A. valuta tre strumenti ai tassi indicati. Nota quanto valore aggiunge la componente "per sempre" e quanto la perpetuità crescente è sensibile a r − g.'
        },
        table: {
          headers: [
            { en: 'Instrument', it: 'Strumento' },
            { en: 'Inputs', it: 'Dati' },
            { en: 'PV', it: 'VA' }
          ],
          rows: [
            [{ en: '5-year annuity', it: 'Rendita a 5 anni' }, 'C = 10,000; r = 6%', '42,124'],
            [{ en: 'Same, annuity due', it: 'Idem, anticipata' }, '42,124 × 1.06', '44,651'],
            [{ en: 'Perpetuity', it: 'Perpetuità' }, 'C = 10,000; r = 6%', '166,667'],
            [{ en: 'Growing perpetuity', it: 'Perpetuità crescente' }, 'C₁ = 10,000; r = 6%; g = 2%', '250,000'],
            [{ en: 'Growing perpetuity, g = 3%', it: 'Perpetuità crescente, g = 3%' }, 'C₁ = 10,000; r = 6%; g = 3%', '333,333']
          ]
        }
      },
      {
        type: 'realworld',
        body: {
          en: '- **Bonds**: price = PV of the coupon annuity + PV of the principal.\n- **Mortgages and term loans**: the instalment is the C that makes the annuity PV equal the amount borrowed.\n- **IFRS 16 leases**: the lease liability is the PV of the lease payments.\n- **DCF terminal value**: Gordon growth TV = FCF_{N+1} / (WACC − g). One extra point of g can add 30%+ to value — bankers always sensitise it.',
          it: '- **Obbligazioni**: prezzo = VA della rendita cedolare + VA del rimborso del capitale.\n- **Mutui e finanziamenti amortizing**: la rata è il C che rende il VA della rendita pari all’importo finanziato.\n- **Leasing IFRS 16**: la passività per leasing è il VA dei canoni.\n- **Valore terminale del DCF**: TV di Gordon = FCF_{N+1} / (WACC − g). Un punto in più di g può aggiungere oltre il 30% di valore — i banker lo mettono sempre in sensitivity.'
        }
      },
      { type: 'exercise', questionId: 'cf-ap-q1' },
      { type: 'exercise', questionId: 'cf-ap-q3' },
      { type: 'exercise', questionId: 'cf-ap-q4' },
      { type: 'exercise', questionId: 'cf-ap-q6' },
      {
        type: 'interview',
        question: {
          en: 'Why must the discount rate exceed the growth rate in the Gordon growth formula, and what g would you use in a DCF?',
          it: 'Perché nella formula di Gordon il tasso di sconto deve superare il tasso di crescita, e quale g useresti in un DCF?'
        },
        answer: {
          en: 'If g ≥ r, each discounted cash flow is as large as or larger than the previous one, so the series never converges and value is infinite — economically impossible. In a DCF I would use a long-term g at or below expected nominal GDP growth (or inflation) for the relevant economy, typically around 1–3% in developed markets, because no company can grow faster than the economy forever.',
          it: 'Se g ≥ r, ogni flusso attualizzato è uguale o maggiore del precedente, quindi la serie non converge e il valore è infinito — economicamente impossibile. In un DCF userei un g di lungo periodo pari o inferiore alla crescita attesa del PIL nominale (o all’inflazione) dell’economia di riferimento, tipicamente intorno all’1–3% nei mercati sviluppati, perché nessuna azienda può crescere più dell’economia per sempre.'
        }
      },
      {
        type: 'mistakes',
        items: [
          { en: 'Plugging today’s cash flow into C / (r − g). Use next period’s: C₀ × (1 + g).', it: 'Inserire il flusso di oggi in C / (r − g). Va usato quello del periodo successivo: C₀ × (1 + g).' },
          { en: 'Forgetting that a perpetuity formula gives value one period before the first payment, then discounting by the wrong number of years.', it: 'Dimenticare che la formula della perpetuità dà il valore un periodo prima del primo pagamento, e quindi attualizzare per il numero sbagliato di anni.' },
          { en: 'Treating an annuity due as an ordinary annuity (payments at the start understate PV by a factor of 1 + r).', it: 'Trattare una rendita anticipata come posticipata (con pagamenti a inizio periodo il VA è sottostimato di un fattore 1 + r).' },
          { en: 'Using a growth rate close to the discount rate, which makes value explode.', it: 'Usare un tasso di crescita vicino al tasso di sconto, il che fa esplodere il valore.' }
        ]
      },
      {
        type: 'summary',
        items: [
          { en: 'Annuity = perpetuity now − perpetuity starting at n.', it: 'Rendita = perpetuità da oggi − perpetuità che parte da n.' },
          { en: 'Perpetuity = C / r; growing perpetuity = C₁ / (r − g), only if r > g.', it: 'Perpetuità = C / r; perpetuità crescente = C₁ / (r − g), solo se r > g.' },
          { en: 'Annuity due = ordinary annuity × (1 + r).', it: 'Rendita anticipata = rendita posticipata × (1 + r).' },
          { en: 'These formulas price bonds, loans, leases and DCF terminal values.', it: 'Queste formule prezzano obbligazioni, finanziamenti, leasing e valori terminali del DCF.' }
        ]
      }
    ],
    questions: [
      {
        id: 'cf-ap-q1',
        kind: 'numeric',
        topic: 'annuities',
        difficulty: 1,
        objective: { en: 'Value an ordinary annuity.', it: 'Valutare una rendita posticipata.' },
        prompt: {
          en: 'A contract pays €50,000 at the end of each year for 10 years. At 5%, what is its present value (€)?',
          it: 'Un contratto paga €50.000 alla fine di ogni anno per 10 anni. Al 5%, qual è il suo valore attuale (€)?'
        },
        answer: 386086.75,
        unit: '€',
        tolerance: { abs: 10 },
        verify: { fn: 'pvAnnuity', args: [50000, 0.05, 10] },
        explanation: {
          en: 'Annuity factor = (1 − 1.05^−10) / 0.05 = 7.7217; PV = 50,000 × 7.7217 ≈ 386,087. The undiscounted €500,000 ignores the time value of money.',
          it: 'Fattore di rendita = (1 − 1,05^−10) / 0,05 = 7,7217; VA = 50.000 × 7,7217 ≈ 386.087. I €500.000 non attualizzati ignorano il valore temporale del denaro.'
        }
      },
      {
        id: 'cf-ap-q2',
        kind: 'numeric',
        topic: 'perpetuities',
        difficulty: 1,
        objective: { en: 'Value a level perpetuity.', it: 'Valutare una perpetuità costante.' },
        prompt: {
          en: 'A perpetual preferred share pays a fixed €6 dividend per year. Investors require 7.5%. What is its value per share (€)?',
          it: 'Un’azione privilegiata perpetua paga un dividendo fisso di €6 l’anno. Gli investitori richiedono il 7,5%. Quanto vale per azione (€)?'
        },
        answer: 80,
        unit: '€',
        verify: { fn: 'pvPerpetuity', args: [6, 0.075] },
        explanation: {
          en: 'PV = C / r = 6 / 0.075 = €80. No growth term because the dividend is fixed.',
          it: 'VA = C / r = 6 / 0,075 = €80. Nessuna crescita perché il dividendo è fisso.'
        }
      },
      {
        id: 'cf-ap-q3',
        kind: 'numeric',
        topic: 'perpetuities',
        difficulty: 2,
        objective: { en: 'Value a growing perpetuity.', it: 'Valutare una perpetuità crescente.' },
        prompt: {
          en: 'A utility will pay a dividend of €5.00 next year, growing at 2.5% forever. With a 9% cost of equity, what is the share worth today (€)?',
          it: 'Una utility pagherà un dividendo di €5,00 il prossimo anno, in crescita del 2,5% per sempre. Con un costo del capitale proprio del 9%, quanto vale oggi l’azione (€)?'
        },
        answer: 76.92,
        unit: '€',
        tolerance: { abs: 0.02 },
        verify: { fn: 'pvGrowingPerpetuity', args: [5, 0.09, 0.025] },
        explanation: {
          en: 'P₀ = D₁ / (r − g) = 5 / (0.09 − 0.025) = 5 / 0.065 ≈ €76.92. Because €5 is already next year’s dividend, do not grow it again.',
          it: 'P₀ = D₁ / (r − g) = 5 / (0,09 − 0,025) = 5 / 0,065 ≈ €76,92. Poiché €5 è già il dividendo del prossimo anno, non va fatto crescere di nuovo.'
        }
      },
      {
        id: 'cf-ap-q4',
        kind: 'grid',
        topic: 'annuities',
        difficulty: 2,
        objective: { en: 'Solve for a loan instalment.', it: 'Calcolare la rata di un finanziamento.' },
        prompt: {
          en: 'Beta S.r.l. borrows €200,000 over 20 years at 4%, repaid with equal annual instalments at year end. Compute the annuity factor (4 decimals), then the instalment (€).',
          it: 'Beta S.r.l. prende in prestito €200.000 per 20 anni al 4%, rimborsati con rate annuali costanti posticipate. Calcola il fattore di rendita (4 decimali), poi la rata (€).'
        },
        columns: [
          { en: 'Item', it: 'Voce' },
          { en: 'Value', it: 'Valore' }
        ],
        rows: [
          { label: { en: 'Annuity factor (1 − 1.04^−20) / 0.04', it: 'Fattore di rendita (1 − 1,04^−20) / 0,04' }, cells: [{ answer: 13.5903, tolerance: { abs: 0.001 }, verify: { fn: 'pvAnnuity', args: [1, 0.04, 20] } }] },
          { label: { en: 'Annual instalment (€)', it: 'Rata annua (€)' }, cells: [{ answer: 14716.35, tolerance: { abs: 2 }, verify: { fn: 'ratio', args: [200000, 13.590326344967696] } }] }
        ],
        explanation: {
          en: 'Instalment C solves 200,000 = C × 13.5903, so C = 200,000 / 13.5903 ≈ €14,716 per year. Total repaid ≈ €294,327, of which ≈ €94,327 is interest.',
          it: 'La rata C risolve 200.000 = C × 13,5903, quindi C = 200.000 / 13,5903 ≈ €14.716 l’anno. Totale rimborsato ≈ €294.327, di cui ≈ €94.327 di interessi.'
        }
      },
      {
        id: 'cf-ap-q5',
        kind: 'mcq',
        topic: 'annuities',
        difficulty: 2,
        objective: { en: 'Distinguish ordinary annuities and annuities due.', it: 'Distinguere rendite posticipate e anticipate.' },
        prompt: {
          en: 'A landlord receives rent at the START of each year. Compared with end-of-year rent of the same amount, the PV of the rent stream is:',
          it: 'Un locatore incassa l’affitto all’INIZIO di ogni anno. Rispetto a un affitto di pari importo incassato a fine anno, il VA del flusso è:'
        },
        choices: [
          { en: 'Lower by a factor of 1 / (1 + r)', it: 'Più basso di un fattore 1 / (1 + r)' },
          { en: 'Identical, because the number of payments is the same', it: 'Identico, perché il numero di pagamenti è lo stesso' },
          { en: 'Higher by a factor of (1 + r)', it: 'Più alto di un fattore (1 + r)' },
          { en: 'Higher by exactly one payment', it: 'Più alto esattamente di un pagamento' }
        ],
        correct: 2,
        explanation: {
          en: 'Every payment arrives one period earlier, so each is discounted one period less: PV_due = PV_ordinary × (1 + r). "One extra payment" is wrong — the count is unchanged; it is the timing that shifts.',
          it: 'Ogni pagamento arriva un periodo prima, quindi è attualizzato per un periodo in meno: VA_anticipata = VA_posticipata × (1 + r). "Un pagamento in più" è sbagliato — il numero non cambia, cambia la tempistica.'
        }
      },
      {
        id: 'cf-ap-q6',
        kind: 'numeric',
        topic: 'perpetuities',
        difficulty: 3,
        objective: { en: 'Value a delayed perpetuity.', it: 'Valutare una perpetuità differita.' },
        prompt: {
          en: 'A perpetuity pays €100 per year with the first payment at the end of year 4. At 10%, what is it worth today (€)?',
          it: 'Una perpetuità paga €100 l’anno con il primo pagamento alla fine dell’anno 4. Al 10%, quanto vale oggi (€)?'
        },
        answer: 751.31,
        unit: '€',
        tolerance: { abs: 0.05 },
        verify: { fn: 'pv', args: [1000, 0.1, 3] },
        steps: [
          { en: 'Value at end of year 3: 100 / 0.10 = 1,000', it: 'Valore a fine anno 3: 100 / 0,10 = 1.000' },
          { en: 'Discount 3 years: 1,000 / 1.1^3 = 751.31', it: 'Attualizza di 3 anni: 1.000 / 1,1^3 = 751,31' }
        ],
        explanation: {
          en: 'The perpetuity formula values the stream one period before the first payment (year 3). Discounting 4 years (→ 683.01) is the classic off-by-one error.',
          it: 'La formula della perpetuità valuta il flusso un periodo prima del primo pagamento (anno 3). Attualizzare per 4 anni (→ 683,01) è il classico errore di un periodo.'
        }
      }
    ],
    flashcards: [
      { id: 'fc-cf-ap-1', topic: 'annuities', front: { en: 'PV of an ordinary annuity?', it: 'VA di una rendita posticipata?' }, back: { en: 'C × [1 − (1 + r)^−n] / r', it: 'C × [1 − (1 + r)^−n] / r' } },
      { id: 'fc-cf-ap-2', topic: 'perpetuities', front: { en: 'PV of a growing perpetuity and its condition?', it: 'VA di una perpetuità crescente e relativa condizione?' }, back: { en: 'C₁ / (r − g), valid only if r > g; C₁ is next period’s cash flow.', it: 'C₁ / (r − g), valida solo se r > g; C₁ è il flusso del periodo successivo.' } },
      { id: 'fc-cf-ap-3', topic: 'annuities', front: { en: 'How do you convert an ordinary annuity PV into an annuity due PV?', it: 'Come si passa dal VA di una rendita posticipata a quello di una anticipata?' }, back: { en: 'Multiply by (1 + r).', it: 'Si moltiplica per (1 + r).' } },
      { id: 'fc-cf-ap-4', topic: 'perpetuities', front: { en: 'A perpetuity starts paying in year t. At what date does C / r value it?', it: 'Una perpetuità inizia a pagare all’anno t. A quale data C / r ne esprime il valore?' }, back: { en: 'At year t − 1; then discount t − 1 years to today.', it: 'All’anno t − 1; poi si attualizza di t − 1 anni fino a oggi.' } },
      { id: 'fc-cf-ap-5', topic: 'annuities', front: { en: 'How is an annuity derived from perpetuities?', it: 'Come si ricava una rendita dalle perpetuità?' }, back: { en: 'Perpetuity starting now minus the PV of a perpetuity starting after n periods.', it: 'Perpetuità che parte ora meno il VA di una perpetuità che parte dopo n periodi.' } }
    ]
  },

  /* ====================================================================== */
  /* CF2 — Capital Budgeting                                                 */
  /* ====================================================================== */
  {
    id: 'cf-npv',
    academyId: 'corporate-finance',
    moduleId: 'CF2',
    mode: 'deep',
    minutes: 14,
    difficulty: 2,
    reviewed: '2026-10',
    objective: {
      en: 'Compute NPV from incremental cash flows, identify which cash flows belong in a capital budgeting analysis, and use NPV to accept, reject and rank projects.',
      it: 'Calcolare il VAN a partire dai flussi incrementali, individuare quali flussi includere in un’analisi di capital budgeting e usare il VAN per accettare, rifiutare e ordinare i progetti.'
    },
    screens: [
      {
        type: 'intuition',
        title: { en: 'Does the project create value?', it: 'Il progetto crea valore?' },
        body: {
          en: 'A company should invest only if the project returns **more than investors could earn elsewhere at the same risk**. NPV measures exactly that: the value of the project’s future cash flows in today’s euros, **minus** what it costs today.\n\n- **NPV > 0**: the project earns more than the cost of capital — shareholder wealth rises by the NPV.\n- **NPV = 0**: it earns exactly the required return.\n- **NPV < 0**: investors would be better off with the alternative.',
          it: 'Un’azienda dovrebbe investire solo se il progetto rende **più di quanto gli investitori potrebbero ottenere altrove a parità di rischio**. Il VAN misura proprio questo: il valore dei flussi futuri del progetto in euro di oggi, **meno** quanto costa oggi.\n\n- **VAN > 0**: il progetto rende più del costo del capitale — la ricchezza degli azionisti aumenta del VAN.\n- **VAN = 0**: rende esattamente il rendimento richiesto.\n- **VAN < 0**: agli investitori conviene l’alternativa.'
        }
      },
      {
        type: 'technical',
        title: { en: 'Which cash flows count?', it: 'Quali flussi contano?' },
        body: {
          en: 'Use **incremental, after-tax, free cash flows** — the difference between the firm with and without the project.\n\n- **Include**: capex, changes in **net working capital** (and its recovery at the end), opportunity costs (e.g. a building you could otherwise rent out), cannibalisation of existing sales, salvage value net of tax.\n- **Exclude**: **sunk costs** (already spent: feasibility studies), allocated overheads that do not change, and **financing costs** (interest, dividends) — financing is captured in the discount rate.\n- Discount at a rate reflecting the **project’s** risk, not automatically the firm’s WACC.',
          it: 'Usa **flussi di cassa liberi incrementali, al netto delle imposte** — la differenza tra l’azienda con e senza il progetto.\n\n- **Includi**: capex, variazioni del **capitale circolante netto** (e il suo recupero finale), costi opportunità (es. un immobile che potresti affittare), cannibalizzazione delle vendite esistenti, valore di realizzo al netto delle imposte.\n- **Escludi**: **costi sommersi** (già sostenuti: studi di fattibilità), costi generali ribaltati che non cambiano e **oneri finanziari** (interessi, dividendi) — il finanziamento è già nel tasso di sconto.\n- Attualizza a un tasso che rifletta il rischio **del progetto**, non automaticamente il WACC aziendale.'
        }
      },
      {
        type: 'formula',
        formulas: [
          {
            name: { en: 'Net present value', it: 'Valore attuale netto (VAN)' },
            expr: 'NPV = Σ CF_t / (1 + r)^t  for t = 0 … N   (CF₀ usually negative)',
            vars: [
              { sym: 'CF_t', desc: { en: 'Incremental free cash flow in year t', it: 'Flusso di cassa libero incrementale nell’anno t' } },
              { sym: 'r', desc: { en: 'Opportunity cost of capital for the project’s risk', it: 'Costo opportunità del capitale per il rischio del progetto' } }
            ]
          },
          {
            name: { en: 'Project free cash flow', it: 'Flusso di cassa libero del progetto' },
            expr: 'FCF = EBIT × (1 − t) + D&A − CapEx − ΔNWC'
          }
        ],
        note: {
          en: 'Decision rule: accept independent projects with NPV > 0; among mutually exclusive projects pick the highest NPV. NPVs are additive: NPV(A + B) = NPV(A) + NPV(B).',
          it: 'Regola decisionale: accetta i progetti indipendenti con VAN > 0; tra progetti mutuamente esclusivi scegli il VAN più alto. I VAN sono additivi: VAN(A + B) = VAN(A) + VAN(B).'
        }
      },
      {
        type: 'example',
        title: { en: 'A new production line at 10%', it: 'Una nuova linea produttiva al 10%' },
        body: {
          en: 'Gamma S.p.A. invests €1,000k today; the line generates the free cash flows below. Discounting at 10% gives NPV = **+€115.6k**: the project returns more than 10% and adds that much value.',
          it: 'Gamma S.p.A. investe oggi €1.000k; la linea genera i flussi di cassa liberi sotto riportati. Attualizzando al 10% il VAN è **+€115,6k**: il progetto rende più del 10% e crea altrettanto valore.'
        },
        table: {
          headers: [
            { en: 'Year', it: 'Anno' },
            { en: 'FCF (€k)', it: 'FCF (€k)' },
            { en: 'Discount factor', it: 'Fattore di sconto' },
            { en: 'PV (€k)', it: 'VA (€k)' }
          ],
          rows: [
            ['0', '−1,000', '1.0000', '−1,000.0'],
            ['1', '300', '0.9091', '272.7'],
            ['2', '400', '0.8264', '330.6'],
            ['3', '500', '0.7513', '375.7'],
            ['4', '200', '0.6830', '136.6'],
            [{ en: 'NPV', it: 'VAN' }, '', '', '115.6']
          ],
          totalRows: [5]
        }
      },
      {
        type: 'technical',
        title: { en: 'The NPV profile', it: 'Il profilo del VAN' },
        body: {
          en: 'Plot NPV against the discount rate for the same project:\n\n- r = 0% → NPV = 400 (undiscounted sum)\n- r = 5% → 245\n- r = 10% → 116\n- r = 15% → 6\n- r = 20% → −86\n\nNPV falls as r rises for a conventional project (outflow first, inflows later). The rate where the curve crosses zero — about 15.3% here — is the **IRR**, covered in the next lesson.',
          it: 'Rappresenta il VAN in funzione del tasso di sconto per lo stesso progetto:\n\n- r = 0% → VAN = 400 (somma non attualizzata)\n- r = 5% → 245\n- r = 10% → 116\n- r = 15% → 6\n- r = 20% → −86\n\nPer un progetto convenzionale (prima l’esborso, poi gli incassi) il VAN scende al salire di r. Il tasso in cui la curva incrocia lo zero — circa il 15,3% qui — è il **TIR**, oggetto della prossima lezione.'
        }
      },
      {
        type: 'realworld',
        body: {
          en: 'NPV is the corporate version of a DCF. When a client asks whether to build a plant, enter a market or buy a competitor, the analysis is the same: forecast incremental FCF, discount at a risk-appropriate rate, compare with the cost. In M&A, an acquisition creates value for the buyer only if the PV of target cash flows plus synergies exceeds the price paid — NPV of the deal.',
          it: 'Il VAN è la versione aziendale del DCF. Quando un cliente chiede se costruire uno stabilimento, entrare in un mercato o comprare un concorrente, l’analisi è la stessa: stimare i FCF incrementali, attualizzarli a un tasso coerente con il rischio, confrontarli con il costo. Nell’M&A un’acquisizione crea valore per l’acquirente solo se il VA dei flussi del target più le sinergie supera il prezzo pagato — il VAN del deal.'
        }
      },
      { type: 'exercise', questionId: 'cf-npv-q1' },
      { type: 'exercise', questionId: 'cf-npv-q4' },
      { type: 'exercise', questionId: 'cf-npv-q5' },
      { type: 'exercise', questionId: 'cf-npv-q3' },
      {
        type: 'interview',
        question: {
          en: 'Why is NPV considered the best capital budgeting rule?',
          it: 'Perché il VAN è considerato il miglior criterio di capital budgeting?'
        },
        answer: {
          en: 'Because it measures value created in euros. It uses all cash flows, accounts for the time value of money and for risk through the discount rate, and it is additive, so you can sum projects and compare mutually exclusive ones directly. IRR and payback can rank projects incorrectly — IRR ignores scale and can have multiple solutions, payback ignores cash flows after the cutoff. NPV’s weakness is that it depends on the discount rate and forecasts, so I would always show sensitivities.',
          it: 'Perché misura il valore creato in euro. Usa tutti i flussi, considera il valore temporale del denaro e il rischio tramite il tasso di sconto ed è additivo: si possono sommare progetti e confrontare direttamente quelli mutuamente esclusivi. TIR e payback possono ordinare i progetti in modo scorretto — il TIR ignora la dimensione e può avere soluzioni multiple, il payback ignora i flussi oltre la soglia. Il limite del VAN è la dipendenza dal tasso di sconto e dalle previsioni, quindi mostrerei sempre delle sensitivity.'
        }
      },
      {
        type: 'mistakes',
        items: [
          { en: 'Including sunk costs (e.g. last year’s market study) in the analysis.', it: 'Includere costi sommersi (es. lo studio di mercato dell’anno scorso) nell’analisi.' },
          { en: 'Subtracting interest from project cash flows and ALSO discounting at WACC — double counting financing costs.', it: 'Sottrarre gli interessi dai flussi del progetto E attualizzare al WACC — doppio conteggio del costo del finanziamento.' },
          { en: 'Forgetting the working capital investment and its recovery at the end of the project.', it: 'Dimenticare l’investimento in capitale circolante e il suo recupero a fine progetto.' },
          { en: 'Using the company WACC for a project with a very different risk profile.', it: 'Usare il WACC aziendale per un progetto con un profilo di rischio molto diverso.' }
        ]
      },
      {
        type: 'summary',
        items: [
          { en: 'NPV = PV of incremental free cash flows − initial investment.', it: 'VAN = VA dei flussi di cassa liberi incrementali − investimento iniziale.' },
          { en: 'Accept if NPV > 0; for mutually exclusive projects choose the highest NPV.', it: 'Accetta se VAN > 0; tra progetti alternativi scegli il VAN più alto.' },
          { en: 'Ignore sunk costs and financing flows; include opportunity costs, NWC and cannibalisation.', it: 'Ignora costi sommersi e flussi finanziari; includi costi opportunità, CCN e cannibalizzazione.' },
          { en: 'NPV falls as the discount rate rises; it crosses zero at the IRR.', it: 'Il VAN scende al salire del tasso di sconto; si azzera in corrispondenza del TIR.' }
        ]
      }
    ],
    questions: [
      {
        id: 'cf-npv-q1',
        kind: 'numeric',
        topic: 'npv',
        difficulty: 1,
        objective: { en: 'Compute the NPV of a project with level cash flows.', it: 'Calcolare il VAN di un progetto con flussi costanti.' },
        prompt: {
          en: 'A machine costs €5,000k today and generates €1,500k of free cash flow per year for 5 years. At 8%, what is the NPV (€k)?',
          it: 'Un macchinario costa oggi €5.000k e genera €1.500k di flusso di cassa libero l’anno per 5 anni. All’8%, qual è il VAN (€k)?'
        },
        answer: 989.07,
        unit: '€k',
        tolerance: { abs: 0.5 },
        verify: { fn: 'npv', args: [0.08, [-5000, 1500, 1500, 1500, 1500, 1500]] },
        explanation: {
          en: 'PV of inflows = 1,500 × annuity factor (8%, 5y) 3.9927 = 5,989.07; NPV = 5,989.07 − 5,000 = +989.07. The undiscounted surplus of 2,500 overstates value.',
          it: 'VA degli incassi = 1.500 × fattore di rendita (8%, 5 anni) 3,9927 = 5.989,07; VAN = 5.989,07 − 5.000 = +989,07. Il surplus non attualizzato di 2.500 sopravvaluta il progetto.'
        }
      },
      {
        id: 'cf-npv-q2',
        kind: 'numeric',
        topic: 'npv',
        difficulty: 1,
        objective: { en: 'Compute NPV with uneven cash flows.', it: 'Calcolare il VAN con flussi non costanti.' },
        prompt: {
          en: 'Cash flows (€k): year 0 −1,000; years 1–4: 300, 400, 500, 200. Discount rate 10%. NPV (€k)?',
          it: 'Flussi (€k): anno 0 −1.000; anni 1–4: 300, 400, 500, 200. Tasso di sconto 10%. VAN (€k)?'
        },
        answer: 115.57,
        unit: '€k',
        tolerance: { abs: 0.1 },
        verify: { fn: 'npv', args: [0.1, [-1000, 300, 400, 500, 200]] },
        explanation: {
          en: 'PVs: 272.73 + 330.58 + 375.66 + 136.60 = 1,115.57; minus 1,000 = 115.57.',
          it: 'VA: 272,73 + 330,58 + 375,66 + 136,60 = 1.115,57; meno 1.000 = 115,57.'
        }
      },
      {
        id: 'cf-npv-q3',
        kind: 'grid',
        topic: 'npv',
        difficulty: 2,
        objective: { en: 'Include working capital in a project NPV.', it: 'Includere il capitale circolante nel VAN di un progetto.' },
        prompt: {
          en: 'A project needs €1,000k capex plus €200k of working capital at t = 0, produces €450k FCF per year for 3 years, and the working capital is fully recovered at the end of year 3. Discount rate 10%. Fill in the PVs (€k).',
          it: 'Un progetto richiede €1.000k di capex più €200k di capitale circolante a t = 0, genera €450k di FCF l’anno per 3 anni e il circolante viene interamente recuperato a fine anno 3. Tasso 10%. Completa i VA (€k).'
        },
        columns: [
          { en: 'Year', it: 'Anno' },
          { en: 'Cash flow', it: 'Flusso' },
          { en: 'PV at 10%', it: 'VA al 10%' }
        ],
        rows: [
          { label: { en: '0', it: '0' }, cells: [-1200, -1200] },
          { label: { en: '1', it: '1' }, cells: [450, { answer: 409.09, tolerance: { abs: 0.05 }, verify: { fn: 'pv', args: [450, 0.1, 1] } }] },
          { label: { en: '2', it: '2' }, cells: [450, { answer: 371.9, tolerance: { abs: 0.05 }, verify: { fn: 'pv', args: [450, 0.1, 2] } }] },
          { label: { en: '3 (incl. NWC recovery)', it: '3 (incl. recupero CCN)' }, cells: [650, { answer: 488.35, tolerance: { abs: 0.05 }, verify: { fn: 'pv', args: [650, 0.1, 3] } }] },
          { label: { en: 'NPV', it: 'VAN' }, cells: ['', { answer: 69.35, tolerance: { abs: 0.1 }, verify: { fn: 'npv', args: [0.1, [-1200, 450, 450, 650]] } }] }
        ],
        unit: '€k',
        explanation: {
          en: 'NPV = −1,200 + 409.09 + 371.90 + 488.35 = +69.35. Ignoring working capital would give +119.08: tying up €200k for 3 years costs ≈ €50k of value even though it is fully recovered, because the money comes back later in discounted euros.',
          it: 'VAN = −1.200 + 409,09 + 371,90 + 488,35 = +69,35. Ignorando il circolante si otterrebbe +119,08: immobilizzare €200k per 3 anni costa ≈ €50k di valore anche se è interamente recuperato, perché il denaro rientra più tardi, in euro attualizzati.'
        }
      },
      {
        id: 'cf-npv-q4',
        kind: 'multi',
        topic: 'incremental-cash-flows',
        difficulty: 2,
        objective: { en: 'Identify relevant cash flows for capital budgeting.', it: 'Individuare i flussi rilevanti per il capital budgeting.' },
        prompt: {
          en: 'Delta S.p.A. is evaluating a new product line. Which items belong in the project’s NPV? Select all that apply.',
          it: 'Delta S.p.A. valuta una nuova linea di prodotto. Quali voci vanno incluse nel VAN del progetto? Seleziona tutte le risposte corrette.'
        },
        choices: [
          { en: '€300k already spent on a consultant’s market study', it: '€300k già spesi per uno studio di mercato di un consulente' },
          { en: 'Lost rent on an owned warehouse that will now be used by the project', it: 'Affitto perso su un magazzino di proprietà che sarà usato dal progetto' },
          { en: 'Lower sales of an existing product cannibalised by the new line', it: 'Minori vendite di un prodotto esistente cannibalizzato dalla nuova linea' },
          { en: 'Interest on the bank loan used to fund the capex', it: 'Interessi sul finanziamento bancario usato per la capex' },
          { en: 'Additional inventory needed to support sales', it: 'Magazzino aggiuntivo necessario a sostenere le vendite' },
          { en: 'A share of head-office costs that will not change', it: 'Una quota dei costi di sede che non cambieranno' }
        ],
        correct: [1, 2, 4],
        explanation: {
          en: 'Opportunity cost (lost rent), cannibalisation and incremental working capital are all incremental. The study is sunk; interest is a financing flow captured by the discount rate; unchanged head-office costs are not incremental.',
          it: 'Costo opportunità (affitto perso), cannibalizzazione e circolante incrementale sono tutti flussi incrementali. Lo studio è un costo sommerso; gli interessi sono un flusso finanziario già catturato dal tasso di sconto; i costi di sede invariati non sono incrementali.'
        }
      },
      {
        id: 'cf-npv-q5',
        kind: 'mcq',
        topic: 'npv',
        difficulty: 2,
        objective: { en: 'Choose between mutually exclusive projects.', it: 'Scegliere tra progetti mutuamente esclusivi.' },
        prompt: {
          en: 'Two mutually exclusive projects at the same risk: X has NPV €40m and IRR 25%; Y has NPV €65m and IRR 16%. The cost of capital is 10%. Which should the company choose?',
          it: 'Due progetti mutuamente esclusivi con lo stesso rischio: X ha VAN €40m e TIR 25%; Y ha VAN €65m e TIR 16%. Il costo del capitale è 10%. Quale deve scegliere l’azienda?'
        },
        choices: [
          { en: 'X, because it has the higher IRR', it: 'X, perché ha il TIR più alto' },
          { en: 'Both, because both have positive NPV', it: 'Entrambi, perché hanno VAN positivo' },
          { en: 'Neither, because their IRRs differ', it: 'Nessuno, perché i TIR sono diversi' },
          { en: 'Y, because it adds more value', it: 'Y, perché crea più valore' }
        ],
        correct: 3,
        explanation: {
          en: 'With mutually exclusive projects the goal is to maximise value, so pick the higher NPV (Y). A higher IRR can reflect a smaller scale or faster cash flows; "both" is impossible by definition.',
          it: 'Con progetti mutuamente esclusivi l’obiettivo è massimizzare il valore, quindi si sceglie il VAN più alto (Y). Un TIR più alto può riflettere una dimensione minore o flussi più rapidi; "entrambi" è impossibile per definizione.'
        }
      }
    ],
    flashcards: [
      { id: 'fc-cf-npv-1', topic: 'npv', front: { en: 'NPV decision rule?', it: 'Regola decisionale del VAN?' }, back: { en: 'Accept if NPV > 0; among mutually exclusive projects, choose the highest NPV.', it: 'Accetta se VAN > 0; tra progetti mutuamente esclusivi scegli il VAN più alto.' } },
      { id: 'fc-cf-npv-2', topic: 'incremental-cash-flows', front: { en: 'Why are interest payments excluded from project cash flows?', it: 'Perché gli interessi sono esclusi dai flussi di progetto?' }, back: { en: 'The cost of financing is already in the discount rate (WACC); deducting interest too would double count it.', it: 'Il costo del finanziamento è già nel tasso di sconto (WACC); dedurre anche gli interessi lo conterebbe due volte.' } },
      { id: 'fc-cf-npv-3', topic: 'incremental-cash-flows', front: { en: 'What is a sunk cost and how is it treated?', it: 'Che cos’è un costo sommerso e come si tratta?' }, back: { en: 'A cost already incurred that cannot be recovered whatever the decision; ignore it.', it: 'Un costo già sostenuto e non recuperabile qualunque sia la decisione; va ignorato.' } },
      { id: 'fc-cf-npv-4', topic: 'npv', front: { en: 'What does NPV = €50m mean economically?', it: 'Cosa significa economicamente un VAN di €50m?' }, back: { en: 'The project is expected to increase shareholder wealth by €50m in today’s money after earning the cost of capital.', it: 'Il progetto dovrebbe aumentare la ricchezza degli azionisti di €50m in valori di oggi, dopo aver remunerato il costo del capitale.' } },
      { id: 'fc-cf-npv-5', topic: 'npv', front: { en: 'Key property that makes NPV easy to aggregate?', it: 'Proprietà chiave che rende il VAN facile da aggregare?' }, back: { en: 'Additivity: NPV(A + B) = NPV(A) + NPV(B).', it: 'Additività: VAN(A + B) = VAN(A) + VAN(B).' } }
    ]
  },

  {
    id: 'cf-irr',
    academyId: 'corporate-finance',
    moduleId: 'CF2',
    mode: 'deep',
    minutes: 15,
    difficulty: 3,
    reviewed: '2026-10',
    objective: {
      en: 'Compute and interpret IRR, and explain its pitfalls: multiple IRRs, scale and timing problems, and conflicts with NPV for mutually exclusive projects.',
      it: 'Calcolare e interpretare il TIR e spiegarne i limiti: TIR multipli, problemi di dimensione e di tempistica, conflitti con il VAN per progetti mutuamente esclusivi.'
    },
    screens: [
      {
        type: 'intuition',
        title: { en: 'The project’s own rate of return', it: 'Il rendimento intrinseco del progetto' },
        body: {
          en: 'NPV answers "how much value?". IRR answers "what return does this project earn?" — the **discount rate at which NPV equals zero**.\n\nIf you could borrow at a rate below the IRR, the project would pay back the loan with something left over. So for a conventional project: **accept if IRR > cost of capital**.\n\nManagers and private equity investors love IRR because a percentage is intuitive and does not require choosing a discount rate up front.',
          it: 'Il VAN risponde a "quanto valore?". Il TIR risponde a "che rendimento genera questo progetto?" — è il **tasso di sconto che azzera il VAN**.\n\nSe potessi indebitarti a un tasso inferiore al TIR, il progetto rimborserebbe il prestito lasciando un avanzo. Quindi, per un progetto convenzionale: **accetta se TIR > costo del capitale**.\n\nManager e investitori di private equity amano il TIR perché una percentuale è intuitiva e non richiede di scegliere a priori un tasso di sconto.'
        }
      },
      {
        type: 'formula',
        formulas: [
          {
            name: { en: 'Internal rate of return', it: 'Tasso interno di rendimento (TIR)' },
            expr: '0 = Σ CF_t / (1 + IRR)^t  for t = 0 … N',
            vars: [{ sym: 'IRR', desc: { en: 'Rate solved iteratively (no closed form for N > 2 in general)', it: 'Tasso risolto per iterazione (in generale nessuna forma chiusa per N > 2)' } }]
          },
          {
            name: { en: 'Crossover rate (two projects A, B)', it: 'Tasso di indifferenza (due progetti A, B)' },
            expr: 'IRR of (CF_B − CF_A) → rate where NPV_A = NPV_B'
          },
          {
            name: { en: 'Two-period shortcut (one outflow, one inflow)', it: 'Scorciatoia a due periodi (un esborso, un incasso)' },
            expr: 'IRR = (CF_N / −CF₀)^(1/N) − 1'
          }
        ],
        note: {
          en: 'Excel: =IRR(range). In practice IRR is found by trial and error (or Newton’s method): try a rate, compute NPV, adjust up if NPV > 0, down if NPV < 0.',
          it: 'Excel: =TIR.COST(intervallo). In pratica il TIR si trova per tentativi (o con il metodo di Newton): provi un tasso, calcoli il VAN, alzi il tasso se VAN > 0, lo abbassi se VAN < 0.'
        }
      },
      {
        type: 'example',
        title: { en: 'Finding IRR by iteration', it: 'Trovare il TIR per iterazione' },
        body: {
          en: 'Project: −1,000 today, then +400 for 3 years. NPV is positive at 9% and negative at 10%, so the IRR lies in between: **9.70%**. If the cost of capital is 8%, accept; if 11%, reject — the same answer NPV gives for this conventional project.',
          it: 'Progetto: −1.000 oggi, poi +400 per 3 anni. Il VAN è positivo al 9% e negativo al 10%, quindi il TIR è compreso tra i due: **9,70%**. Se il costo del capitale è 8% si accetta; se è 11% si rifiuta — la stessa risposta del VAN per questo progetto convenzionale.'
        },
        table: {
          headers: [
            { en: 'Rate tried', it: 'Tasso provato' },
            { en: 'PV of inflows', it: 'VA degli incassi' },
            { en: 'NPV', it: 'VAN' }
          ],
          rows: [
            ['8%', '1,030.8', '+30.8'],
            ['9%', '1,012.5', '+12.5'],
            ['9.70%', '1,000.0', '0.0'],
            ['10%', '994.7', '−5.3']
          ],
          totalRows: [2]
        }
      },
      {
        type: 'technical',
        title: { en: 'Pitfall 1 — multiple or no IRRs', it: 'Limite 1 — TIR multipli o assenti' },
        body: {
          en: 'NPV = 0 is a polynomial in 1/(1 + r). With **non-conventional cash flows** (signs change more than once), there can be **as many IRRs as sign changes** (Descartes’ rule) — or none.\n\nExample: −100, +230, −132 (e.g. a mine with closure costs). NPV = 0 at **both 10% and 20%**, and NPV is positive only between them. "IRR > hurdle" is meaningless here: use NPV (or MIRR).',
          it: 'VAN = 0 è un polinomio in 1/(1 + r). Con **flussi non convenzionali** (il segno cambia più di una volta) possono esistere **tanti TIR quanti cambi di segno** (regola di Cartesio) — oppure nessuno.\n\nEsempio: −100, +230, −132 (es. una miniera con costi di chiusura). Il VAN è nullo **sia al 10% sia al 20%** ed è positivo solo tra i due. "TIR > soglia" qui non ha senso: usa il VAN (o il MIRR).'
        }
      },
      {
        type: 'technical',
        title: { en: 'Pitfalls 2 and 3 — scale and timing', it: 'Limiti 2 e 3 — dimensione e tempistica' },
        body: {
          en: '**Scale**: invest €100 to get €150 next year (IRR 50%, NPV at 10% = 36), or €1,000 to get €1,300 (IRR 30%, NPV = 182). IRR prefers the small project; the shareholder prefers €182 of value.\n\n**Timing**: IRR implicitly assumes interim cash flows are **reinvested at the IRR itself**, which flatters projects with large early cash flows. NPV assumes reinvestment at the cost of capital — more realistic.\n\nWhen rankings conflict for **mutually exclusive** projects, **NPV wins**.',
          it: '**Dimensione**: investire €100 per riceverne €150 l’anno prossimo (TIR 50%, VAN al 10% = 36), oppure €1.000 per riceverne €1.300 (TIR 30%, VAN = 182). Il TIR preferisce il progetto piccolo; l’azionista preferisce €182 di valore.\n\n**Tempistica**: il TIR assume implicitamente che i flussi intermedi siano **reinvestiti allo stesso TIR**, il che favorisce i progetti con grandi flussi iniziali. Il VAN assume il reinvestimento al costo del capitale — ipotesi più realistica.\n\nQuando le classifiche divergono per progetti **mutuamente esclusivi**, **vince il VAN**.'
        }
      },
      {
        type: 'example',
        title: { en: 'NPV vs IRR conflict and the crossover rate', it: 'Conflitto VAN–TIR e tasso di indifferenza' },
        body: {
          en: 'A pays back fast, B pays later. A has the higher IRR, yet at a 10% cost of capital B has the higher NPV. The NPV profiles cross at **20.83%** (the IRR of B − A). Below the crossover choose B; above it choose A.',
          it: 'A rientra velocemente, B più tardi. A ha il TIR più alto, eppure con un costo del capitale del 10% B ha il VAN più alto. I profili del VAN si incrociano al **20,83%** (il TIR di B − A). Sotto il tasso di indifferenza si sceglie B; sopra, A.'
        },
        table: {
          headers: [
            { en: 'Project', it: 'Progetto' },
            { en: 'CF₀', it: 'CF₀' },
            { en: 'CF₁', it: 'CF₁' },
            { en: 'CF₂', it: 'CF₂' },
            { en: 'IRR', it: 'TIR' },
            { en: 'NPV @10%', it: 'VAN @10%' }
          ],
          rows: [
            ['A', '−1,000', '1,200', '50', '24.0%', '132.2'],
            ['B', '−1,000', '0', '1,500', '22.5%', '239.7'],
            ['B − A', '0', '−1,200', '1,450', '20.8%', '107.4']
          ]
        }
      },
      {
        type: 'realworld',
        body: {
          en: 'IRR is the headline metric in **private equity and LBOs** (sponsors typically target 20%+ gross IRR) alongside MOIC, precisely because IRR alone can be gamed: a quick dividend recap boosts IRR while barely changing the money multiple. In corporate finance, boards often see both NPV and IRR in investment committee papers; analysts should flag when they disagree.',
          it: 'Il TIR è la metrica principale nel **private equity e negli LBO** (gli sponsor puntano tipicamente a un IRR lordo superiore al 20%) insieme al MOIC, proprio perché il solo TIR può essere "aggiustato": un rapido dividend recap alza il TIR cambiando poco il multiplo sul capitale investito. In ambito corporate, i comitati investimenti vedono spesso sia VAN sia TIR; l’analista deve segnalare quando divergono.'
        }
      },
      { type: 'exercise', questionId: 'cf-irr-q1' },
      { type: 'exercise', questionId: 'cf-irr-q3' },
      { type: 'exercise', questionId: 'cf-irr-q4' },
      { type: 'exercise', questionId: 'cf-irr-q5' },
      {
        type: 'interview',
        question: {
          en: 'Project A has a higher IRR than project B, but B has a higher NPV. They are mutually exclusive. Which do you pick and why?',
          it: 'Il progetto A ha un TIR più alto del progetto B, ma B ha un VAN più alto. Sono mutuamente esclusivi. Quale scegli e perché?'
        },
        answer: {
          en: 'B. The objective is to maximise shareholder value, which NPV measures directly in euros. The conflict arises from differences in scale or timing: IRR is a percentage, so it ignores how much capital is deployed, and it implicitly assumes reinvestment at the IRR. I would also compute the crossover rate — if our cost of capital is below it, B dominates; above it, A would win.',
          it: 'B. L’obiettivo è massimizzare il valore per gli azionisti, che il VAN misura direttamente in euro. Il conflitto nasce da differenze di dimensione o di tempistica: il TIR è una percentuale, quindi ignora quanto capitale viene investito, e assume implicitamente il reinvestimento al TIR. Calcolerei anche il tasso di indifferenza — se il nostro costo del capitale è inferiore, B domina; se è superiore, vincerebbe A.'
        }
      },
      {
        type: 'mistakes',
        items: [
          { en: 'Ranking mutually exclusive projects by IRR instead of NPV.', it: 'Ordinare progetti mutuamente esclusivi per TIR anziché per VAN.' },
          { en: 'Reporting a single IRR for cash flows that change sign more than once.', it: 'Riportare un unico TIR per flussi che cambiano segno più di una volta.' },
          { en: 'Forgetting that for a "borrowing-type" project (inflow first, outflows later) the rule flips: accept if IRR < cost of capital.', it: 'Dimenticare che per un progetto "di tipo finanziamento" (prima l’incasso, poi gli esborsi) la regola si inverte: accetta se TIR < costo del capitale.' },
          { en: 'Comparing IRR to the cost of capital without checking the projects have similar risk.', it: 'Confrontare il TIR con il costo del capitale senza verificare che i progetti abbiano un rischio simile.' }
        ]
      },
      {
        type: 'summary',
        items: [
          { en: 'IRR is the discount rate that sets NPV to zero.', it: 'Il TIR è il tasso di sconto che azzera il VAN.' },
          { en: 'For conventional independent projects, IRR and NPV agree.', it: 'Per progetti convenzionali e indipendenti, TIR e VAN concordano.' },
          { en: 'Non-conventional cash flows can give multiple or no IRRs.', it: 'Flussi non convenzionali possono dare TIR multipli o nessun TIR.' },
          { en: 'Scale and timing differences create conflicts: for mutually exclusive projects, NPV wins.', it: 'Differenze di dimensione e tempistica creano conflitti: per progetti alternativi vince il VAN.' }
        ]
      }
    ],
    questions: [
      {
        id: 'cf-irr-q1',
        kind: 'numeric',
        topic: 'irr',
        difficulty: 2,
        objective: { en: 'Compute an IRR.', it: 'Calcolare un TIR.' },
        prompt: {
          en: 'Cash flows (€k): −1,000 today, then 300, 400, 500, 200 in years 1–4. What is the IRR (%, one decimal)?',
          it: 'Flussi (€k): −1.000 oggi, poi 300, 400, 500, 200 negli anni 1–4. Qual è il TIR (%, un decimale)?'
        },
        answer: 15.3,
        unit: '%',
        tolerance: { abs: 0.1 },
        verify: { fn: 'irr', args: [[-1000, 300, 400, 500, 200]], scale: 100 },
        steps: [
          { en: 'NPV at 15% = +6.4 (still positive)', it: 'VAN al 15% = +6,4 (ancora positivo)' },
          { en: 'NPV at 16% ≈ −13.3 → interpolate: 15% + 6.4 / 19.7 ≈ 15.3%', it: 'VAN al 16% ≈ −13,3 → interpola: 15% + 6,4 / 19,7 ≈ 15,3%' },
          { en: 'Exact: 15.32%', it: 'Valore esatto: 15,32%' }
        ],
        explanation: {
          en: 'IRR ≈ 15.32%: at that rate the PV of inflows equals the €1,000k outlay. At a 10% cost of capital the project is accepted, consistent with its positive NPV (+115.6).',
          it: 'TIR ≈ 15,32%: a quel tasso il VA degli incassi eguaglia l’esborso di €1.000k. Con un costo del capitale del 10% il progetto si accetta, coerentemente con il VAN positivo (+115,6).'
        }
      },
      {
        id: 'cf-irr-q2',
        kind: 'numeric',
        topic: 'irr',
        difficulty: 1,
        objective: { en: 'Compute a two-period IRR directly.', it: 'Calcolare direttamente un TIR a due periodi.' },
        prompt: {
          en: 'A sponsor invests €100m and receives €250m after 5 years, with nothing in between. What is the IRR (%, one decimal)?',
          it: 'Uno sponsor investe €100m e riceve €250m dopo 5 anni, senza flussi intermedi. Qual è il TIR (%, un decimale)?'
        },
        answer: 20.1,
        unit: '%',
        tolerance: { abs: 0.1 },
        verify: { fn: 'irrFromMoic', args: [2.5, 5], scale: 100 },
        explanation: {
          en: 'IRR = (250/100)^(1/5) − 1 = 2.5^0.2 − 1 ≈ 20.11%. A 2.5x MOIC over 5 years is ≈ 20% IRR — a combination worth memorising (2x in 3 years ≈ 26%, 2x in 5 years ≈ 15%). Dividing the 150% gain by 5 (30%) ignores compounding.',
          it: 'TIR = (250/100)^(1/5) − 1 = 2,5^0,2 − 1 ≈ 20,11%. Un MOIC di 2,5x in 5 anni equivale a un TIR ≈ 20% — combinazione da memorizzare (2x in 3 anni ≈ 26%, 2x in 5 anni ≈ 15%). Dividere il guadagno del 150% per 5 (30%) ignora la capitalizzazione.'
        }
      },
      {
        id: 'cf-irr-q3',
        kind: 'mcq',
        topic: 'irr',
        difficulty: 3,
        objective: { en: 'Recognise multiple IRRs.', it: 'Riconoscere i TIR multipli.' },
        prompt: {
          en: 'A project has cash flows −100, +230, −132. Which statement is correct?',
          it: 'Un progetto ha flussi −100, +230, −132. Quale affermazione è corretta?'
        },
        choices: [
          { en: 'It has one IRR of 10%, so accept if the cost of capital is below 10%', it: 'Ha un unico TIR del 10%, quindi si accetta se il costo del capitale è inferiore al 10%' },
          { en: 'It has two IRRs, 10% and 20%; NPV is positive only for discount rates between them', it: 'Ha due TIR, 10% e 20%; il VAN è positivo solo per tassi compresi tra i due' },
          { en: 'It has no IRR because the total of the cash flows is negative', it: 'Non ha TIR perché la somma dei flussi è negativa' },
          { en: 'It has two IRRs, so its NPV cannot be computed', it: 'Ha due TIR, quindi il suo VAN non si può calcolare' }
        ],
        correct: 1,
        explanation: {
          en: 'Two sign changes allow up to two IRRs. Setting x = 1/(1 + r): −132x² + 230x − 100 = 0 gives x = 0.9091 (10%) and 0.8333 (20%). At 0% NPV = −2, at 15% NPV ≈ +0.19, so NPV is positive only between 10% and 20%. NPV is always computable at a given rate — use it.',
          it: 'Due cambi di segno consentono fino a due TIR. Ponendo x = 1/(1 + r): −132x² + 230x − 100 = 0 dà x = 0,9091 (10%) e 0,8333 (20%). A 0% il VAN è −2, al 15% è ≈ +0,19, quindi il VAN è positivo solo tra il 10% e il 20%. Il VAN è sempre calcolabile a un dato tasso — va usato quello.'
        }
      },
      {
        id: 'cf-irr-q4',
        kind: 'mcq',
        topic: 'npv-vs-irr',
        difficulty: 2,
        objective: { en: 'Resolve a scale conflict between NPV and IRR.', it: 'Risolvere un conflitto di dimensione tra VAN e TIR.' },
        prompt: {
          en: 'Mutually exclusive: S costs €100 and returns €150 in one year (IRR 50%); L costs €1,000 and returns €1,300 in one year (IRR 30%). Cost of capital 10%. Which do you choose?',
          it: 'Mutuamente esclusivi: S costa €100 e rende €150 tra un anno (TIR 50%); L costa €1.000 e rende €1.300 tra un anno (TIR 30%). Costo del capitale 10%. Quale scegli?'
        },
        choices: [
          { en: 'S — the higher IRR means the better project', it: 'S — un TIR più alto significa un progetto migliore' },
          { en: 'S — it risks less capital', it: 'S — mette a rischio meno capitale' },
          { en: 'L — its NPV is €181.8 versus €36.4 for S', it: 'L — il suo VAN è €181,8 contro €36,4 di S' },
          { en: 'Indifferent — both IRRs exceed 10%', it: 'Indifferente — entrambi i TIR superano il 10%' }
        ],
        correct: 2,
        explanation: {
          en: 'NPV_S = 150/1.1 − 100 = 36.4; NPV_L = 1,300/1.1 − 1,000 = 181.8. Both risks are the same by assumption, so "less capital at risk" is not a reason. The incremental investment (L − S: −900, +1,150) has an IRR of 27.8% > 10%, confirming L.',
          it: 'VAN_S = 150/1,1 − 100 = 36,4; VAN_L = 1.300/1,1 − 1.000 = 181,8. Per ipotesi il rischio è lo stesso, quindi "meno capitale a rischio" non è un argomento. L’investimento incrementale (L − S: −900, +1.150) ha un TIR del 27,8% > 10%, a conferma di L.'
        }
      },
      {
        id: 'cf-irr-q5',
        kind: 'numeric',
        topic: 'npv-vs-irr',
        difficulty: 3,
        objective: { en: 'Compute the crossover rate between two projects.', it: 'Calcolare il tasso di indifferenza tra due progetti.' },
        prompt: {
          en: 'Project A: −1,000, +1,200, +50. Project B: −1,000, 0, +1,500. At what discount rate are their NPVs equal (%, one decimal)?',
          it: 'Progetto A: −1.000, +1.200, +50. Progetto B: −1.000, 0, +1.500. A quale tasso di sconto i loro VAN sono uguali (%, un decimale)?'
        },
        answer: 20.8,
        unit: '%',
        tolerance: { abs: 0.1 },
        verify: { fn: 'ratio', args: [25000, 1200] },
        steps: [
          { en: 'Incremental flows B − A: 0, −1,200, +1,450', it: 'Flussi incrementali B − A: 0, −1.200, +1.450' },
          { en: 'IRR of B − A: 1,450 / 1,200 − 1 = 20.83%', it: 'TIR di B − A: 1.450 / 1.200 − 1 = 20,83%' }
        ],
        explanation: {
          en: 'The crossover rate is the IRR of the difference in cash flows: 1,450/1,200 − 1 = 20.83%. At that rate both NPVs ≈ 27.3. Below 20.83% B has the higher NPV (e.g. at 10%: 239.7 vs 132.2), even though A’s IRR (24.0%) beats B’s (22.5%).',
          it: 'Il tasso di indifferenza è il TIR della differenza tra i flussi: 1.450/1.200 − 1 = 20,83%. A quel tasso entrambi i VAN valgono ≈ 27,3. Sotto il 20,83% B ha il VAN più alto (es. al 10%: 239,7 contro 132,2), anche se il TIR di A (24,0%) supera quello di B (22,5%).'
        }
      }
    ],
    flashcards: [
      { id: 'fc-cf-irr-1', topic: 'irr', front: { en: 'Definition of IRR?', it: 'Definizione di TIR?' }, back: { en: 'The discount rate at which the NPV of a project’s cash flows equals zero.', it: 'Il tasso di sconto al quale il VAN dei flussi di un progetto è pari a zero.' } },
      { id: 'fc-cf-irr-2', topic: 'irr', front: { en: 'When can a project have multiple IRRs?', it: 'Quando un progetto può avere più TIR?' }, back: { en: 'When cash flows change sign more than once (non-conventional cash flows); up to one IRR per sign change.', it: 'Quando i flussi cambiano segno più di una volta (flussi non convenzionali); fino a un TIR per ogni cambio di segno.' } },
      { id: 'fc-cf-irr-3', topic: 'npv-vs-irr', front: { en: 'Two causes of NPV–IRR ranking conflicts?', it: 'Due cause di conflitto tra classifiche VAN e TIR?' }, back: { en: 'Differences in scale (size of investment) and timing of cash flows (reinvestment-rate assumption).', it: 'Differenze di dimensione (entità dell’investimento) e di tempistica dei flussi (ipotesi sul tasso di reinvestimento).' } },
      { id: 'fc-cf-irr-4', topic: 'npv-vs-irr', front: { en: 'What is the crossover rate?', it: 'Che cos’è il tasso di indifferenza (crossover rate)?' }, back: { en: 'The discount rate at which two projects have equal NPV; the IRR of their incremental cash flows.', it: 'Il tasso di sconto a cui due progetti hanno lo stesso VAN; è il TIR dei flussi incrementali.' } },
      { id: 'fc-cf-irr-5', topic: 'irr', front: { en: 'Reinvestment assumption: IRR vs NPV?', it: 'Ipotesi di reinvestimento: TIR vs VAN?' }, back: { en: 'IRR implicitly assumes reinvestment at the IRR; NPV at the cost of capital.', it: 'Il TIR assume implicitamente il reinvestimento al TIR stesso; il VAN al costo del capitale.' } }
    ]
  },

  {
    id: 'cf-payback-pi',
    academyId: 'corporate-finance',
    moduleId: 'CF2',
    mode: 'quick',
    minutes: 8,
    difficulty: 2,
    reviewed: '2026-10',
    objective: {
      en: 'Compute simple and discounted payback and the profitability index, and know when each is useful — especially PI under capital rationing.',
      it: 'Calcolare payback semplice e attualizzato e indice di redditività, e sapere quando ciascuno è utile — in particolare il PI in caso di razionamento del capitale.'
    },
    screens: [
      {
        type: 'intuition',
        title: { en: 'How fast do I get my money back?', it: 'In quanto tempo rientro dell’investimento?' },
        body: {
          en: '**Payback** asks how many years it takes for cumulative cash flows to recover the initial investment. It is simple and speaks to liquidity and risk — but it ignores everything after the cutoff.\n\nThe **profitability index (PI)** asks how much present value each euro invested buys. It is NPV expressed as a ratio, which makes it the right tool when **capital is limited**.',
          it: 'Il **payback** misura quanti anni servono perché i flussi cumulati recuperino l’investimento iniziale. È semplice e dà un’idea di liquidità e rischio — ma ignora tutto ciò che accade dopo la soglia.\n\nL’**indice di redditività (PI)** misura quanto valore attuale si ottiene per ogni euro investito. È il VAN espresso come rapporto, ed è lo strumento giusto quando **il capitale è limitato**.'
        }
      },
      {
        type: 'technical',
        title: { en: 'Strengths and weaknesses', it: 'Punti di forza e debolezze' },
        body: {
          en: '**Simple payback**\n- Ignores the time value of money and all cash flows after payback.\n- The cutoff (e.g. "3 years") is arbitrary.\n- Useful as a rough risk/liquidity screen.\n\n**Discounted payback** fixes the time-value problem but still ignores later cash flows.\n\n**Profitability index**\n- PI > 1 ⇔ NPV > 0 (same accept/reject decision).\n- Under **capital rationing**, rank projects by PI to maximise total NPV per euro of budget (works well when projects are divisible; check combinations when they are not).',
          it: '**Payback semplice**\n- Ignora il valore temporale del denaro e tutti i flussi successivi al rientro.\n- La soglia (es. "3 anni") è arbitraria.\n- Utile come filtro approssimativo di rischio/liquidità.\n\n**Payback attualizzato**: risolve il problema del valore temporale ma ignora ancora i flussi successivi.\n\n**Indice di redditività**\n- PI > 1 ⇔ VAN > 0 (stessa decisione accetta/rifiuta).\n- In caso di **razionamento del capitale**, ordina i progetti per PI per massimizzare il VAN complessivo per euro di budget (funziona bene con progetti frazionabili; se non lo sono, verifica le combinazioni).'
        }
      },
      {
        type: 'formula',
        formulas: [
          {
            name: { en: 'Payback period (interpolated)', it: 'Periodo di recupero (interpolato)' },
            expr: 'Payback = years before full recovery + unrecovered amount / cash flow in the recovery year'
          },
          {
            name: { en: 'Profitability index', it: 'Indice di redditività' },
            expr: 'PI = PV of future cash flows / initial investment = 1 + NPV / I₀'
          }
        ],
        note: {
          en: 'Discounted payback uses the same formula on discounted cash flows.',
          it: 'Il payback attualizzato applica la stessa formula ai flussi attualizzati.'
        }
      },
      {
        type: 'example',
        title: { en: 'Same project, three metrics', it: 'Stesso progetto, tre metriche' },
        body: {
          en: 'Project: −1,000, then 300, 400, 500, 200 (€k), 10% rate. After 2 years 700 is recovered; 300 remains, covered by 300/500 = 0.6 of year 3 → **payback 2.6 years**. On discounted flows, recovery takes **3.15 years**. PV of inflows 1,115.6 / 1,000 → **PI = 1.12**.',
          it: 'Progetto: −1.000, poi 300, 400, 500, 200 (€k), tasso 10%. Dopo 2 anni sono recuperati 700; restano 300, coperti da 300/500 = 0,6 dell’anno 3 → **payback 2,6 anni**. Sui flussi attualizzati il rientro richiede **3,15 anni**. VA degli incassi 1.115,6 / 1.000 → **PI = 1,12**.'
        },
        table: {
          headers: [
            { en: 'Year', it: 'Anno' },
            { en: 'CF', it: 'Flusso' },
            { en: 'Cumulative', it: 'Cumulato' },
            { en: 'Discounted CF', it: 'Flusso attualizzato' },
            { en: 'Cum. discounted', it: 'Cumulato attualizzato' }
          ],
          rows: [
            ['0', '−1,000', '−1,000', '−1,000.0', '−1,000.0'],
            ['1', '300', '−700', '272.7', '−727.3'],
            ['2', '400', '−300', '330.6', '−396.7'],
            ['3', '500', '+200', '375.7', '−21.0'],
            ['4', '200', '+400', '136.6', '+115.6']
          ]
        }
      },
      {
        type: 'realworld',
        body: {
          en: 'Payback is common in corporate settings with high uncertainty (technology, emerging markets) and in energy-efficiency or cost-saving projects, where managers want the cash back quickly. PI shows up when a business unit has a fixed capex envelope for the year and must choose the best mix of projects. Banks presenting to boards usually lead with NPV/IRR and use payback as a secondary sanity check.',
          it: 'Il payback è diffuso in contesti aziendali molto incerti (tecnologia, mercati emergenti) e nei progetti di efficienza energetica o riduzione costi, dove il management vuole rientrare rapidamente. Il PI compare quando una business unit ha un budget di capex annuale fisso e deve scegliere il miglior mix di progetti. Le banche, nelle presentazioni ai CdA, partono da VAN/TIR e usano il payback come verifica secondaria.'
        }
      },
      { type: 'exercise', questionId: 'cf-pb-q1' },
      { type: 'exercise', questionId: 'cf-pb-q3' },
      { type: 'exercise', questionId: 'cf-pb-q4' },
      {
        type: 'interview',
        question: { en: 'What are the main problems with the payback period?', it: 'Quali sono i principali problemi del periodo di recupero?' },
        answer: {
          en: 'Three: it ignores the time value of money (fixed by discounted payback), it ignores all cash flows after the cutoff, so it is biased against long-term projects with large later payoffs, and the cutoff itself is arbitrary. It can accept a value-destroying project and reject a highly valuable one. I would use it only as a complement to NPV, as an indicator of liquidity and risk exposure.',
          it: 'Tre: ignora il valore temporale del denaro (problema risolto dal payback attualizzato), ignora tutti i flussi dopo la soglia, penalizzando i progetti di lungo periodo con grandi flussi futuri, e la soglia stessa è arbitraria. Può far accettare un progetto che distrugge valore e scartarne uno molto redditizio. Lo userei solo come complemento al VAN, come indicatore di liquidità ed esposizione al rischio.'
        }
      },
      {
        type: 'mistakes',
        items: [
          { en: 'Treating a short payback as proof the project creates value.', it: 'Considerare un payback breve come prova che il progetto crea valore.' },
          { en: 'Using PI to choose between mutually exclusive projects of different size — use NPV.', it: 'Usare il PI per scegliere tra progetti alternativi di dimensione diversa — si usa il VAN.' },
          { en: 'Under capital rationing with indivisible projects, blindly taking projects in PI order without checking whether another combination uses the budget better.', it: 'In caso di razionamento con progetti non frazionabili, seguire ciecamente l’ordine per PI senza verificare se un’altra combinazione usa meglio il budget.' }
        ]
      },
      {
        type: 'summary',
        items: [
          { en: 'Payback = time to recover the investment; ignores later flows and (if simple) time value.', it: 'Payback = tempo per recuperare l’investimento; ignora i flussi successivi e (se semplice) il valore temporale.' },
          { en: 'PI = PV of inflows / investment; PI > 1 ⇔ NPV > 0.', it: 'PI = VA degli incassi / investimento; PI > 1 ⇔ VAN > 0.' },
          { en: 'Use PI to allocate a limited budget; use NPV for mutually exclusive choices.', it: 'Usa il PI per allocare un budget limitato; il VAN per scelte alternative.' }
        ]
      }
    ],
    questions: [
      {
        id: 'cf-pb-q1',
        kind: 'numeric',
        topic: 'payback',
        difficulty: 1,
        objective: { en: 'Compute a simple payback period.', it: 'Calcolare un periodo di recupero semplice.' },
        prompt: {
          en: 'An investment of €5,000k generates €1,500k per year for 5 years. What is the simple payback period (years)?',
          it: 'Un investimento di €5.000k genera €1.500k l’anno per 5 anni. Qual è il periodo di recupero semplice (anni)?'
        },
        answer: 3.33,
        unit: 'years',
        tolerance: { abs: 0.01 },
        verify: { fn: 'paybackPeriod', args: [[-5000, 1500, 1500, 1500, 1500, 1500]] },
        explanation: {
          en: 'After 3 years 4,500 is recovered; the remaining 500 takes 500/1,500 = 0.33 of year 4 → 3.33 years. With level cash flows, payback = 5,000 / 1,500.',
          it: 'Dopo 3 anni sono recuperati 4.500; i restanti 500 richiedono 500/1.500 = 0,33 dell’anno 4 → 3,33 anni. Con flussi costanti, payback = 5.000 / 1.500.'
        }
      },
      {
        id: 'cf-pb-q2',
        kind: 'numeric',
        topic: 'payback',
        difficulty: 2,
        objective: { en: 'Compute a discounted payback period.', it: 'Calcolare un periodo di recupero attualizzato.' },
        prompt: {
          en: 'Discounted cash flows of a project (€k) are −1,000.0, 272.7, 330.6, 375.7, 136.6. What is the discounted payback (years, two decimals)?',
          it: 'I flussi attualizzati di un progetto (€k) sono −1.000,0, 272,7, 330,6, 375,7, 136,6. Qual è il payback attualizzato (anni, due decimali)?'
        },
        answer: 3.15,
        unit: 'years',
        tolerance: { abs: 0.02 },
        verify: { fn: 'paybackPeriod', args: [[-1000, 272.7, 330.6, 375.7, 136.6]] },
        explanation: {
          en: 'Cumulative after year 3: −1,000 + 272.7 + 330.6 + 375.7 = −21.0; year 4 covers it in 21.0 / 136.6 = 0.15 → 3.15 years, versus 2.6 years on undiscounted flows.',
          it: 'Cumulato dopo l’anno 3: −1.000 + 272,7 + 330,6 + 375,7 = −21,0; l’anno 4 lo copre in 21,0 / 136,6 = 0,15 → 3,15 anni, contro 2,6 anni sui flussi non attualizzati.'
        }
      },
      {
        id: 'cf-pb-q3',
        kind: 'numeric',
        topic: 'profitability-index',
        difficulty: 1,
        objective: { en: 'Compute a profitability index.', it: 'Calcolare un indice di redditività.' },
        prompt: {
          en: 'A €5,000k investment produces €1,500k per year for 5 years. At 8%, what is the profitability index (x, two decimals)?',
          it: 'Un investimento di €5.000k produce €1.500k l’anno per 5 anni. All’8%, qual è l’indice di redditività (x, due decimali)?'
        },
        answer: 1.2,
        unit: 'x',
        tolerance: { abs: 0.01 },
        verify: { fn: 'profitabilityIndex', args: [0.08, [-5000, 1500, 1500, 1500, 1500, 1500]] },
        explanation: {
          en: 'PV of inflows = 1,500 × 3.9927 = 5,989.1; PI = 5,989.1 / 5,000 = 1.20. Equivalently 1 + NPV/I₀ = 1 + 989.1/5,000.',
          it: 'VA degli incassi = 1.500 × 3,9927 = 5.989,1; PI = 5.989,1 / 5.000 = 1,20. In modo equivalente 1 + VAN/I₀ = 1 + 989,1/5.000.'
        }
      },
      {
        id: 'cf-pb-q4',
        kind: 'numeric',
        topic: 'capital-rationing',
        difficulty: 3,
        objective: { en: 'Allocate a limited budget across projects.', it: 'Allocare un budget limitato tra più progetti.' },
        prompt: {
          en: 'Budget: €700k. Indivisible projects (cost; NPV; PI): A (400; 47.6; 1.12), B (300; 23.3; 1.08), C (500; 47.1; 1.09), D (200; 36.3; 1.18). What is the maximum total NPV achievable (€k)?',
          it: 'Budget: €700k. Progetti non frazionabili (costo; VAN; PI): A (400; 47,6; 1,12), B (300; 23,3; 1,08), C (500; 47,1; 1,09), D (200; 36,3; 1,18). Qual è il VAN complessivo massimo ottenibile (€k)?'
        },
        answer: 83.9,
        unit: '€k',
        tolerance: { abs: 0.15 },
        verify: { fn: 'sum', args: [47.6, 36.3] },
        explanation: {
          en: 'Feasible combinations within €700k: D + A (600) = 83.9; D + C (700) = 83.4; A + B (700) = 70.9; D + B (500) = 59.5. Best is D + A = 83.9, which here coincides with picking by PI. Picking the two highest stand-alone NPVs (A + C = 900) breaks the budget.',
          it: 'Combinazioni possibili entro €700k: D + A (600) = 83,9; D + C (700) = 83,4; A + B (700) = 70,9; D + B (500) = 59.5. La migliore è D + A = 83,9, che qui coincide con la scelta per PI. Scegliere i due VAN singoli più alti (A + C = 900) sfora il budget.'
        }
      },
      {
        id: 'cf-pb-q5',
        kind: 'mcq',
        topic: 'payback',
        difficulty: 2,
        objective: { en: 'Recognise the bias of payback.', it: 'Riconoscere la distorsione del payback.' },
        prompt: {
          en: 'At 10%, project P (−1,000, 500, 500, 0, 0) pays back in 2 years; project Q (−1,000, 200, 300, 500, 800) pays back in 3 years. With a 2-year cutoff, what happens?',
          it: 'Al 10%, il progetto P (−1.000, 500, 500, 0, 0) rientra in 2 anni; il progetto Q (−1.000, 200, 300, 500, 800) in 3 anni. Con una soglia di 2 anni, cosa succede?'
        },
        choices: [
          { en: 'P is accepted although its NPV is −132; Q is rejected although its NPV is +352', it: 'P viene accettato benché il VAN sia −132; Q viene scartato benché il VAN sia +352' },
          { en: 'Both are accepted because both pay back within the project life', it: 'Entrambi accettati perché rientrano entro la vita del progetto' },
          { en: 'Q is accepted because its total cash flows are higher', it: 'Q viene accettato perché i flussi totali sono più alti' },
          { en: 'Payback and NPV agree, so the cutoff does not matter', it: 'Payback e VAN concordano, quindi la soglia è irrilevante' }
        ],
        correct: 0,
        explanation: {
          en: 'Payback ignores the time value of money (P only recovers its cost in nominal terms) and everything after the cutoff (Q’s large years 3–4). NPV_P = −132.2, NPV_Q = +351.8: the rule picks the wrong project.',
          it: 'Il payback ignora il valore temporale (P recupera il costo solo in termini nominali) e tutto ciò che segue la soglia (i grandi flussi di Q negli anni 3–4). VAN_P = −132,2, VAN_Q = +351,8: la regola sceglie il progetto sbagliato.'
        }
      }
    ],
    flashcards: [
      { id: 'fc-cf-pb-1', topic: 'payback', front: { en: 'Two main flaws of simple payback?', it: 'Due principali difetti del payback semplice?' }, back: { en: 'Ignores the time value of money and all cash flows after the payback cutoff.', it: 'Ignora il valore temporale del denaro e tutti i flussi successivi alla soglia.' } },
      { id: 'fc-cf-pb-2', topic: 'profitability-index', front: { en: 'Profitability index formula?', it: 'Formula dell’indice di redditività?' }, back: { en: 'PI = PV of future cash flows / initial investment = 1 + NPV / I₀.', it: 'PI = VA dei flussi futuri / investimento iniziale = 1 + VAN / I₀.' } },
      { id: 'fc-cf-pb-3', topic: 'capital-rationing', front: { en: 'When is PI the preferred ranking tool?', it: 'Quando il PI è lo strumento di ranking preferito?' }, back: { en: 'Under capital rationing: it maximises NPV per euro of a limited budget.', it: 'In caso di razionamento del capitale: massimizza il VAN per euro di un budget limitato.' } },
      { id: 'fc-cf-pb-4', topic: 'profitability-index', front: { en: 'PI > 1 is equivalent to…?', it: 'PI > 1 equivale a…?' }, back: { en: 'NPV > 0.', it: 'VAN > 0.' } }
    ]
  },

  /* ====================================================================== */
  /* CF3 — Returns and Capital Allocation                                    */
  /* ====================================================================== */
  {
    id: 'cf-return-metrics',
    academyId: 'corporate-finance',
    moduleId: 'CF3',
    mode: 'deep',
    minutes: 14,
    difficulty: 2,
    reviewed: '2026-10',
    objective: {
      en: 'Compute and interpret ROIC, ROE and ROA, decompose ROE with DuPont, and separate operating performance from the effect of financial leverage.',
      it: 'Calcolare e interpretare ROIC, ROE e ROA, scomporre il ROE con DuPont e distinguere la performance operativa dall’effetto della leva finanziaria.'
    },
    screens: [
      {
        type: 'intuition',
        title: { en: 'Return on what, for whom?', it: 'Rendimento su cosa, per chi?' },
        body: {
          en: 'A profit number means little without the capital needed to earn it: €10m on €50m is excellent, on €500m it is poor. Return metrics put profit over capital — but you must **match numerator and denominator** to the same group of investors.\n\n- **ROIC**: operating profit after tax for **all capital providers** / capital they supplied.\n- **ROE**: net income for **shareholders** / shareholders’ equity.\n- **ROA**: net income / **total assets** — how productively the whole balance sheet is used.',
          it: 'Un utile dice poco senza il capitale necessario per generarlo: €10m su €50m è ottimo, su €500m è scarso. Le metriche di rendimento rapportano l’utile al capitale — ma numeratore e denominatore devono **riferirsi agli stessi investitori**.\n\n- **ROIC**: reddito operativo al netto delle imposte per **tutti i finanziatori** / capitale da essi fornito.\n- **ROE**: utile netto per gli **azionisti** / patrimonio netto.\n- **ROA**: utile netto / **totale attivo** — quanto produttivamente viene usato l’intero stato patrimoniale.'
        }
      },
      {
        type: 'technical',
        title: { en: 'Building ROIC properly', it: 'Costruire correttamente il ROIC' },
        body: {
          en: '**NOPAT** = EBIT × (1 − tax rate): operating profit as if the company had no debt (no interest, no tax shield).\n\n**Invested capital** can be built two ways that should reconcile:\n- **Operating side**: net working capital + net PP&E + intangibles (incl. goodwill) + other operating assets − operating liabilities.\n- **Financing side**: equity + net debt (+ leases, minorities where relevant).\n\nUse **average** capital over the year where possible. Decide consciously whether to include goodwill: with it you measure returns on acquisitions too; without it, the underlying business.',
          it: '**NOPAT** = EBIT × (1 − aliquota): reddito operativo come se l’azienda non avesse debito (niente interessi, niente scudo fiscale).\n\nIl **capitale investito** si costruisce in due modi che devono riconciliarsi:\n- **Lato impieghi**: capitale circolante netto + immobilizzazioni materiali nette + immateriali (incluso avviamento) + altre attività operative − passività operative.\n- **Lato fonti**: patrimonio netto + posizione finanziaria netta (+ leasing, terzi dove rilevante).\n\nUsa il capitale **medio** dell’anno quando possibile. Decidi consapevolmente se includere l’avviamento: con l’avviamento misuri anche il rendimento delle acquisizioni; senza, quello del business sottostante.'
        }
      },
      {
        type: 'formula',
        formulas: [
          { name: { en: 'Return on invested capital', it: 'Rendimento del capitale investito (ROIC)' }, expr: 'ROIC = EBIT × (1 − t) / Invested capital' },
          { name: { en: 'Return on equity', it: 'Rendimento del capitale proprio (ROE)' }, expr: 'ROE = Net income / Average shareholders’ equity' },
          { name: { en: 'Return on assets', it: 'Rendimento delle attività (ROA)' }, expr: 'ROA = Net income / Average total assets' },
          {
            name: { en: 'DuPont (3-step)', it: 'DuPont (3 fattori)' },
            expr: 'ROE = (NI / Sales) × (Sales / Assets) × (Assets / Equity)',
            vars: [
              { sym: 'NI / Sales', desc: { en: 'Net margin — profitability', it: 'Margine netto — redditività' } },
              { sym: 'Sales / Assets', desc: { en: 'Asset turnover — efficiency', it: 'Rotazione dell’attivo — efficienza' } },
              { sym: 'Assets / Equity', desc: { en: 'Equity multiplier — leverage', it: 'Moltiplicatore del capitale — leva' } }
            ]
          },
          { name: { en: 'Leverage formula', it: 'Formula della leva finanziaria' }, expr: 'ROE = ROIC + (ROIC − Kd × (1 − t)) × D/E' }
        ],
        note: {
          en: 'DuPont derivation: the Sales and Assets terms cancel, leaving NI / Equity. The 5-step version splits the net margin into tax burden (NI/EBT) × interest burden (EBT/EBIT) × EBIT margin.',
          it: 'Derivazione DuPont: i termini Ricavi e Attivo si elidono, lasciando Utile netto / PN. La versione a 5 fattori scompone il margine netto in incidenza fiscale (UN/EBT) × incidenza degli oneri finanziari (EBT/EBIT) × margine EBIT.'
        }
      },
      {
        type: 'example',
        title: { en: 'Omega S.p.A. — three returns, one company', it: 'Omega S.p.A. — tre rendimenti, una società' },
        body: {
          en: 'Revenue 2,000; EBIT 240; interest 40; tax rate 25% → NI = (240 − 40) × 75% = 150. Average total assets 2,500; equity 1,000; net debt 800 (invested capital 1,800). ROE is higher than ROIC because debt costs less after tax (3.75% = 5% × 0.75) than the business earns (10%).',
          it: 'Ricavi 2.000; EBIT 240; oneri finanziari 40; aliquota 25% → UN = (240 − 40) × 75% = 150. Totale attivo medio 2.500; PN 1.000; PFN 800 (capitale investito 1.800). Il ROE supera il ROIC perché il debito, al netto delle imposte, costa meno (3,75% = 5% × 0,75) di quanto rende il business (10%).'
        },
        table: {
          headers: [
            { en: 'Metric', it: 'Indicatore' },
            { en: 'Calculation', it: 'Calcolo' },
            { en: 'Result', it: 'Risultato' }
          ],
          rows: [
            ['ROIC', '240 × 0.75 / 1,800', '10.0%'],
            ['ROE', '150 / 1,000', '15.0%'],
            ['ROA', '150 / 2,500', '6.0%'],
            [{ en: 'DuPont check', it: 'Verifica DuPont' }, '7.5% × 0.8 × 2.5', '15.0%']
          ]
        }
      },
      {
        type: 'technical',
        title: { en: 'Why ROE can mislead', it: 'Perché il ROE può ingannare' },
        body: {
          en: 'ROE rises mechanically with leverage whenever ROIC exceeds the after-tax cost of debt — but so does risk, and the cost of equity rises too (Modigliani–Miller). ROE is also distorted by **buybacks and write-downs** that shrink book equity, and can be meaningless when equity is near zero or negative.\n\nHence:\n- Use **ROIC vs WACC** to judge whether the business creates value.\n- Use **ROE vs cost of equity** for shareholders — and for **banks**, where debt is operating raw material and ROIC is not meaningful.',
          it: 'Il ROE cresce meccanicamente con la leva quando il ROIC supera il costo del debito al netto delle imposte — ma aumenta anche il rischio, e con esso il costo del capitale proprio (Modigliani–Miller). Il ROE è inoltre distorto da **buyback e svalutazioni** che riducono il PN contabile, e perde significato con un PN vicino a zero o negativo.\n\nQuindi:\n- Usa **ROIC vs WACC** per capire se il business crea valore.\n- Usa **ROE vs costo del capitale proprio** per gli azionisti — e per le **banche**, dove il debito è materia prima operativa e il ROIC non ha senso.'
        }
      },
      {
        type: 'realworld',
        body: {
          en: 'Equity research and bank pitch books routinely show ROIC trends next to valuation multiples: across a sector, companies with persistently higher ROIC (and growth) tend to command higher EV/EBITDA multiples. In due diligence, analysts recompute ROIC excluding one-offs and check whether high returns come from the business or from aggressive working capital management or under-investment.',
          it: 'La ricerca azionaria e i pitch book delle banche mostrano regolarmente l’andamento del ROIC accanto ai multipli: in un settore, le società con ROIC (e crescita) stabilmente più elevati tendono a quotare multipli EV/EBITDA superiori. In due diligence gli analisti ricalcolano il ROIC al netto delle componenti non ricorrenti e verificano se i rendimenti elevati derivino dal business o da una gestione aggressiva del circolante o da sotto-investimenti.'
        }
      },
      { type: 'exercise', questionId: 'cf-rm-q1' },
      { type: 'exercise', questionId: 'cf-rm-q3' },
      { type: 'exercise', questionId: 'cf-rm-q5' },
      { type: 'exercise', questionId: 'cf-rm-q4' },
      {
        type: 'interview',
        question: {
          en: 'Two companies both have a 20% ROE. Which one would you rather own?',
          it: 'Due società hanno entrambe un ROE del 20%. Quale preferiresti possedere?'
        },
        answer: {
          en: 'I would decompose both with DuPont. If one gets 20% from high margins and asset turnover with little debt, and the other from a high equity multiplier on a thin ROIC, the first is higher quality: its returns are operating, more sustainable, and less risky. I would compare each company’s ROIC with its WACC — the business that earns well above its cost of capital without relying on leverage is the one I would rather own, all else equal including price.',
          it: 'Le scomporrei entrambe con DuPont. Se una ottiene il 20% grazie a margini e rotazione dell’attivo elevati con poco debito, e l’altra grazie a un alto moltiplicatore del capitale su un ROIC modesto, la prima è di qualità superiore: i suoi rendimenti sono operativi, più sostenibili e meno rischiosi. Confronterei il ROIC di ciascuna con il suo WACC — a parità di condizioni, prezzo incluso, preferirei il business che rende ben oltre il costo del capitale senza dipendere dalla leva.'
        }
      },
      {
        type: 'mistakes',
        items: [
          { en: 'Mixing claims: dividing net income (equity holders only) by invested capital (debt + equity).', it: 'Mescolare i diritti: dividere l’utile netto (solo azionisti) per il capitale investito (debito + equity).' },
          { en: 'Calling a high ROE "value creation" without checking leverage and the cost of equity.', it: 'Chiamare "creazione di valore" un ROE elevato senza verificare leva e costo del capitale proprio.' },
          { en: 'Using year-end instead of average capital for a fast-growing company, which understates returns.', it: 'Usare il capitale di fine anno anziché medio per una società in forte crescita, sottostimando i rendimenti.' },
          { en: 'Using ROIC for banks — for financial institutions, use ROE (or RoTE).', it: 'Usare il ROIC per le banche — per le istituzioni finanziarie si usa il ROE (o RoTE).' }
        ]
      },
      {
        type: 'summary',
        items: [
          { en: 'ROIC = NOPAT / invested capital — the core measure of operating value creation (vs WACC).', it: 'ROIC = NOPAT / capitale investito — la misura chiave della creazione di valore operativa (vs WACC).' },
          { en: 'ROE = NI / equity; ROA = NI / total assets.', it: 'ROE = UN / PN; ROA = UN / totale attivo.' },
          { en: 'DuPont: ROE = margin × turnover × equity multiplier.', it: 'DuPont: ROE = margine × rotazione × moltiplicatore del capitale.' },
          { en: 'ROE = ROIC + (ROIC − Kd(1 − t)) × D/E: leverage magnifies returns and risk.', it: 'ROE = ROIC + (ROIC − Kd(1 − t)) × D/E: la leva amplifica rendimenti e rischio.' }
        ]
      }
    ],
    questions: [
      {
        id: 'cf-rm-q1',
        kind: 'numeric',
        topic: 'roic',
        difficulty: 1,
        objective: { en: 'Compute ROIC.', it: 'Calcolare il ROIC.' },
        prompt: {
          en: 'EBIT €200m, tax rate 25%, average invested capital €1,000m. What is ROIC (%)?',
          it: 'EBIT €200m, aliquota 25%, capitale investito medio €1.000m. Qual è il ROIC (%)?'
        },
        answer: 15,
        unit: '%',
        tolerance: { abs: 0.05 },
        verify: { fn: 'roic', args: [20000, 0.25, 1000] },
        explanation: {
          en: 'NOPAT = 200 × (1 − 0.25) = 150; ROIC = 150 / 1,000 = 15%. Using pre-tax EBIT (20%) overstates returns; ROIC must be compared with an after-tax WACC.',
          it: 'NOPAT = 200 × (1 − 0,25) = 150; ROIC = 150 / 1.000 = 15%. Usare l’EBIT ante imposte (20%) sopravvaluta il rendimento; il ROIC va confrontato con un WACC al netto delle imposte.'
        }
      },
      {
        id: 'cf-rm-q2',
        kind: 'numeric',
        topic: 'dupont',
        difficulty: 1,
        objective: { en: 'Apply the DuPont identity.', it: 'Applicare l’identità DuPont.' },
        prompt: {
          en: 'Net margin 5%, asset turnover 1.2x, equity multiplier 2.5x. What is ROE (%)?',
          it: 'Margine netto 5%, rotazione dell’attivo 1,2x, moltiplicatore del capitale 2,5x. Qual è il ROE (%)?'
        },
        answer: 15,
        unit: '%',
        tolerance: { abs: 0.05 },
        verify: { fn: 'dupontRoe', args: [5, 1.2, 2.5] },
        explanation: {
          en: 'ROE = 5% × 1.2 × 2.5 = 15%. ROA is 5% × 1.2 = 6%; leverage (2.5x) lifts it to a 15% return on equity.',
          it: 'ROE = 5% × 1,2 × 2,5 = 15%. Il ROA è 5% × 1,2 = 6%; la leva (2,5x) lo porta a un rendimento del 15% sul capitale proprio.'
        }
      },
      {
        id: 'cf-rm-q3',
        kind: 'grid',
        topic: 'dupont',
        difficulty: 2,
        objective: { en: 'Decompose ROE from financial statement data.', it: 'Scomporre il ROE partendo dai dati di bilancio.' },
        prompt: {
          en: 'Sigma S.p.A.: net income 60, revenue 1,200, average total assets 1,000, average equity 400 (€m). Fill in the DuPont components.',
          it: 'Sigma S.p.A.: utile netto 60, ricavi 1.200, totale attivo medio 1.000, PN medio 400 (€m). Completa le componenti DuPont.'
        },
        columns: [
          { en: 'Component', it: 'Componente' },
          { en: 'Value', it: 'Valore' }
        ],
        rows: [
          { label: { en: 'Net margin (%)', it: 'Margine netto (%)' }, cells: [{ answer: 5, tolerance: { abs: 0.05 }, verify: { fn: 'ratio', args: [6000, 1200] } }] },
          { label: { en: 'Asset turnover (x)', it: 'Rotazione dell’attivo (x)' }, cells: [{ answer: 1.2, tolerance: { abs: 0.01 }, verify: { fn: 'ratio', args: [1200, 1000] } }] },
          { label: { en: 'Equity multiplier (x)', it: 'Moltiplicatore del capitale (x)' }, cells: [{ answer: 2.5, tolerance: { abs: 0.01 }, verify: { fn: 'ratio', args: [1000, 400] } }] },
          { label: { en: 'ROE (%)', it: 'ROE (%)' }, cells: [{ answer: 15, tolerance: { abs: 0.05 }, verify: { fn: 'dupontRoe', args: [5, 1.2, 2.5] } }] }
        ],
        explanation: {
          en: 'Margin 60/1,200 = 5%; turnover 1,200/1,000 = 1.2x; multiplier 1,000/400 = 2.5x; ROE = 15% = 60/400. The decomposition shows Sigma’s ROE relies materially on leverage.',
          it: 'Margine 60/1.200 = 5%; rotazione 1.200/1.000 = 1,2x; moltiplicatore 1.000/400 = 2,5x; ROE = 15% = 60/400. La scomposizione mostra che il ROE di Sigma dipende in misura rilevante dalla leva.'
        }
      },
      {
        id: 'cf-rm-q4',
        kind: 'mcq',
        topic: 'roe',
        difficulty: 2,
        objective: { en: 'Interpret the drivers of ROE.', it: 'Interpretare i driver del ROE.' },
        prompt: {
          en: 'A company’s ROE rose from 12% to 18% while its ROIC stayed at 8% and margins were flat. What is the most likely explanation?',
          it: 'Il ROE di una società è salito dal 12% al 18% mentre il ROIC è rimasto all’8% e i margini sono invariati. Qual è la spiegazione più probabile?'
        },
        choices: [
          { en: 'Operating efficiency improved', it: 'È migliorata l’efficienza operativa' },
          { en: 'Leverage increased (e.g. debt-funded buyback)', it: 'È aumentata la leva (es. buyback finanziato a debito)' },
          { en: 'The tax rate increased', it: 'È aumentata l’aliquota fiscale' },
          { en: 'The company raised new equity', it: 'La società ha emesso nuovo capitale' }
        ],
        correct: 1,
        explanation: {
          en: 'With ROIC and margins unchanged, operations did not improve. A higher equity multiplier — more debt, less equity — lifts ROE when ROIC exceeds the after-tax cost of debt. A higher tax rate would lower both; new equity would dilute ROE.',
          it: 'Con ROIC e margini invariati, la gestione operativa non è migliorata. Un moltiplicatore del capitale più alto — più debito, meno equity — aumenta il ROE quando il ROIC supera il costo del debito al netto delle imposte. Un’aliquota più alta ridurrebbe entrambi; nuovo capitale diluirebbe il ROE.'
        }
      },
      {
        id: 'cf-rm-q5',
        kind: 'numeric',
        topic: 'roe',
        difficulty: 3,
        objective: { en: 'Quantify the leverage effect on ROE.', it: 'Quantificare l’effetto leva sul ROE.' },
        prompt: {
          en: 'Assets €1,000m, EBIT €160m, tax 25%. Financed 50% with debt at 6% and 50% equity. What is ROE (%)?',
          it: 'Attivo €1.000m, EBIT €160m, aliquota 25%. Finanziato per il 50% con debito al 6% e per il 50% con equity. Qual è il ROE (%)?'
        },
        answer: 19.5,
        unit: '%',
        tolerance: { abs: 0.05 },
        verify: { fn: 'ratio', args: [9750, 500] },
        steps: [
          { en: 'Interest = 500 × 6% = 30; EBT = 130; NI = 130 × 0.75 = 97.5', it: 'Interessi = 500 × 6% = 30; EBT = 130; UN = 130 × 0,75 = 97,5' },
          { en: 'ROE = 97.5 / 500 = 19.5%', it: 'ROE = 97,5 / 500 = 19,5%' },
          { en: 'Check: ROIC 12% + (12% − 4.5%) × 1.0 = 19.5%', it: 'Verifica: ROIC 12% + (12% − 4,5%) × 1,0 = 19,5%' }
        ],
        explanation: {
          en: 'Unlevered, ROE would equal ROIC = 160 × 0.75 / 1,000 = 12%. Each euro of debt costs 4.5% after tax and earns 12%, and with D/E = 1 the spread of 7.5 points accrues to equity: 19.5%.',
          it: 'Senza debito il ROE sarebbe pari al ROIC = 160 × 0,75 / 1.000 = 12%. Ogni euro di debito costa il 4,5% netto e rende il 12%, e con D/E = 1 lo spread di 7,5 punti va agli azionisti: 19,5%.'
        }
      },
      {
        id: 'cf-rm-q6',
        kind: 'multi',
        topic: 'roic',
        difficulty: 2,
        objective: { en: 'Match numerators and denominators correctly.', it: 'Abbinare correttamente numeratori e denominatori.' },
        prompt: {
          en: 'Which pairings are internally consistent? Select all that apply.',
          it: 'Quali abbinamenti sono coerenti? Seleziona tutte le risposte corrette.'
        },
        choices: [
          { en: 'NOPAT / (equity + net debt)', it: 'NOPAT / (PN + PFN)' },
          { en: 'Net income / (equity + net debt)', it: 'Utile netto / (PN + PFN)' },
          { en: 'Net income / shareholders’ equity', it: 'Utile netto / patrimonio netto' },
          { en: 'EBIT × (1 − t) / (NWC + net PP&E + intangibles)', it: 'EBIT × (1 − t) / (CCN + immobilizzazioni materiali nette + immateriali)' },
          { en: 'NOPAT / shareholders’ equity', it: 'NOPAT / patrimonio netto' }
        ],
        correct: [0, 2, 3],
        explanation: {
          en: 'NOPAT belongs to all capital providers, so it goes over total invested capital (financing or operating view). Net income belongs to shareholders, so it goes over equity. The other two mix a pre-interest or post-interest numerator with the wrong capital base.',
          it: 'Il NOPAT spetta a tutti i finanziatori, quindi va rapportato al capitale investito totale (vista fonti o impieghi). L’utile netto spetta agli azionisti, quindi va rapportato al PN. Gli altri due abbinano un numeratore ante o post interessi alla base di capitale sbagliata.'
        }
      }
    ],
    flashcards: [
      { id: 'fc-cf-rm-1', topic: 'roic', front: { en: 'ROIC formula?', it: 'Formula del ROIC?' }, back: { en: 'EBIT × (1 − t) / invested capital (NWC + net fixed assets, or equity + net debt).', it: 'EBIT × (1 − t) / capitale investito (CCN + immobilizzazioni nette, oppure PN + PFN).' } },
      { id: 'fc-cf-rm-2', topic: 'dupont', front: { en: 'Three DuPont components of ROE?', it: 'Le tre componenti DuPont del ROE?' }, back: { en: 'Net margin × asset turnover × equity multiplier.', it: 'Margine netto × rotazione dell’attivo × moltiplicatore del capitale.' } },
      { id: 'fc-cf-rm-3', topic: 'roic', front: { en: 'A business creates value when…?', it: 'Un business crea valore quando…?' }, back: { en: 'ROIC exceeds WACC (on new and existing capital).', it: 'Il ROIC supera il WACC (sul capitale nuovo ed esistente).' } },
      { id: 'fc-cf-rm-4', topic: 'roe', front: { en: 'Leverage formula linking ROE and ROIC?', it: 'Formula della leva che lega ROE e ROIC?' }, back: { en: 'ROE = ROIC + (ROIC − Kd(1 − t)) × D/E.', it: 'ROE = ROIC + (ROIC − Kd(1 − t)) × D/E.' } },
      { id: 'fc-cf-rm-5', topic: 'roe', front: { en: 'Which return metric do analysts use for banks?', it: 'Quale metrica di rendimento si usa per le banche?' }, back: { en: 'ROE (or return on tangible equity), compared with the cost of equity.', it: 'Il ROE (o il rendimento sul patrimonio tangibile), confrontato con il costo del capitale proprio.' } }
    ]
  },

  {
    id: 'cf-capital-allocation',
    academyId: 'corporate-finance',
    moduleId: 'CF3',
    mode: 'quick',
    minutes: 10,
    difficulty: 2,
    reviewed: '2026-10',
    objective: {
      en: 'Evaluate the five uses of free cash flow — reinvestment, M&A, dividends, buybacks and debt paydown — using ROIC versus hurdle rates, and explain when growth creates or destroys value.',
      it: 'Valutare i cinque impieghi del free cash flow — reinvestimento, M&A, dividendi, buyback e rimborso del debito — confrontando ROIC e tassi soglia, e spiegare quando la crescita crea o distrugge valore.'
    },
    screens: [
      {
        type: 'intuition',
        title: { en: 'The CEO’s most important job', it: 'Il compito più importante dell’amministratore delegato' },
        body: {
          en: 'Every year a profitable company generates cash and must decide what to do with it. There are only five options:\n\n- **Reinvest** in the business (capex, R&D, working capital)\n- **Acquire** other businesses (M&A)\n- **Pay dividends**\n- **Buy back shares**\n- **Repay debt**\n\nThe principle is simple: keep cash only if it can earn **more than the cost of capital**; otherwise give it back to investors who can deploy it elsewhere.',
          it: 'Ogni anno un’azienda profittevole genera cassa e deve decidere come impiegarla. Le opzioni sono solo cinque:\n\n- **Reinvestire** nel business (capex, R&S, capitale circolante)\n- **Acquisire** altre aziende (M&A)\n- **Distribuire dividendi**\n- **Riacquistare azioni proprie**\n- **Rimborsare debito**\n\nIl principio è semplice: trattieni la cassa solo se può rendere **più del costo del capitale**; altrimenti restituiscila agli investitori, che la impiegheranno altrove.'
        }
      },
      {
        type: 'technical',
        title: { en: 'Hurdle rates and the growth trap', it: 'Tassi soglia e la trappola della crescita' },
        body: {
          en: 'A **hurdle rate** is the minimum return a project must earn — normally the WACC adjusted for the project’s risk (higher for a new country or business line).\n\nGrowth is **not** automatically good:\n- If return on new invested capital (**RONIC**) > WACC → growth creates value.\n- If RONIC = WACC → growth is value-neutral.\n- If RONIC < WACC → growth **destroys** value, even though revenue and EBITDA rise.\n\nThis is why markets often reward a disciplined buyback more than an empire-building acquisition.',
          it: 'Il **tasso soglia** (hurdle rate) è il rendimento minimo che un progetto deve generare — di norma il WACC corretto per il rischio del progetto (più alto per un nuovo paese o una nuova linea di business).\n\nLa crescita **non** è automaticamente positiva:\n- Se il rendimento sul nuovo capitale investito (**RONIC**) > WACC → la crescita crea valore.\n- Se RONIC = WACC → la crescita è neutrale.\n- Se RONIC < WACC → la crescita **distrugge** valore, anche se ricavi ed EBITDA aumentano.\n\nPer questo il mercato premia spesso un buyback disciplinato più di un’acquisizione dettata dalla voglia di crescere.'
        }
      },
      {
        type: 'formula',
        formulas: [
          { name: { en: 'Economic profit (EVA-style)', it: 'Profitto economico (stile EVA)' }, expr: 'Economic profit = NOPAT − WACC × IC = (ROIC − WACC) × IC' },
          {
            name: { en: 'Value driver formula', it: 'Formula dei value driver' },
            expr: 'Value = NOPAT₁ × (1 − g / RONIC) / (WACC − g)',
            vars: [
              { sym: 'g / RONIC', desc: { en: 'Reinvestment rate needed to grow at g', it: 'Tasso di reinvestimento necessario per crescere a g' } },
              { sym: 'RONIC', desc: { en: 'Return on new invested capital', it: 'Rendimento sul nuovo capitale investito' } }
            ]
          }
        ],
        note: {
          en: 'Derivation: to grow NOPAT at g, the firm must reinvest g / RONIC of NOPAT; the remainder is free cash flow, valued as a growing perpetuity. When RONIC = WACC, value = NOPAT₁ / WACC regardless of g.',
          it: 'Derivazione: per far crescere il NOPAT a g, l’azienda deve reinvestire una quota g / RONIC del NOPAT; il resto è free cash flow, valutato come perpetuità crescente. Se RONIC = WACC, il valore è NOPAT₁ / WACC qualunque sia g.'
        }
      },
      {
        type: 'example',
        title: { en: 'Same growth, different value', it: 'Stessa crescita, valore diverso' },
        body: {
          en: 'Three versions of a company with NOPAT₁ = €100m, WACC 10% and growth 4%. Only the return on new capital differs. Growth at 8% RONIC destroys value relative to not reinvesting at all (100 / 10% = 1,000).',
          it: 'Tre versioni di una società con NOPAT₁ = €100m, WACC 10% e crescita 4%. Cambia solo il rendimento sul nuovo capitale. Crescere con un RONIC dell’8% distrugge valore rispetto a non reinvestire affatto (100 / 10% = 1.000).'
        },
        table: {
          headers: [
            { en: 'RONIC', it: 'RONIC' },
            { en: 'Reinvestment g/RONIC', it: 'Reinvestimento g/RONIC' },
            { en: 'FCF₁ (€m)', it: 'FCF₁ (€m)' },
            { en: 'Value (€m)', it: 'Valore (€m)' }
          ],
          rows: [
            ['20%', '20%', '80', '1,333'],
            ['10%', '40%', '60', '1,000'],
            ['8%', '50%', '50', '833']
          ]
        }
      },
      {
        type: 'technical',
        title: { en: 'Choosing among the five uses', it: 'Scegliere tra i cinque impieghi' },
        body: {
          en: '- **Reinvest** first where RONIC clearly exceeds the hurdle — it is usually the highest-return, lowest-risk option.\n- **M&A**: creates value only if PV of target cash flows + synergies > price paid (including the control premium). Many deals fail this test.\n- **Debt paydown**: attractive when leverage is above target, credit metrics are at risk, or the after-tax cost of debt is high.\n- **Dividends**: signal stable, recurring cash generation; hard to cut later.\n- **Buybacks**: flexible; create value only if the shares are bought **below intrinsic value**.',
          it: '- **Reinvestire** prima di tutto dove il RONIC supera chiaramente la soglia — di solito è l’opzione con il rendimento più alto e il rischio più basso.\n- **M&A**: crea valore solo se il VA dei flussi del target + sinergie > prezzo pagato (premio di controllo incluso). Molti deal non superano il test.\n- **Rimborso del debito**: conveniente quando la leva è sopra il target, i parametri di credito sono a rischio o il costo del debito netto è elevato.\n- **Dividendi**: segnalano una generazione di cassa stabile e ricorrente; difficili da tagliare in seguito.\n- **Buyback**: flessibili; creano valore solo se le azioni sono acquistate **sotto il valore intrinseco**.'
        }
      },
      {
        type: 'realworld',
        body: {
          en: 'Capital allocation is the theme behind much IB work: M&A advisory (should the client buy?), leveraged finance and DCM (refinance or pay down?), and ECM / corporate broking (buyback programmes, special dividends). When advising a board, bankers frame each option by its effect on value per share, EPS, leverage and rating — and the credibility of management’s track record matters as much as the arithmetic.',
          it: 'L’allocazione del capitale è il filo conduttore di molto lavoro in IB: advisory M&A (il cliente deve comprare?), leveraged finance e DCM (rifinanziare o rimborsare?), ECM / corporate broking (programmi di buyback, dividendi straordinari). Quando consigliano un CdA, i banker inquadrano ogni opzione per l’effetto su valore per azione, EPS, leva e rating — e la credibilità del track record del management conta quanto i numeri.'
        }
      },
      { type: 'exercise', questionId: 'cf-ca-q1' },
      { type: 'exercise', questionId: 'cf-ca-q3' },
      { type: 'exercise', questionId: 'cf-ca-q2' },
      {
        type: 'interview',
        question: {
          en: 'A client has €500m of excess cash. How would you think about what to do with it?',
          it: 'Un cliente ha €500m di cassa in eccesso. Come ragioneresti su come impiegarla?'
        },
        answer: {
          en: 'First, are there internal projects or acquisitions with risk-adjusted returns above the cost of capital? If yes, fund those first. Second, check the balance sheet: if leverage is above target or the rating is under pressure, pay down debt. Only then return cash — a buyback if the shares look undervalued and flexibility is valued, or a dividend (possibly special, if the cash is one-off) if the cash flow is recurring. I would show the impact of each option on EPS, leverage and value per share, while reminding the client that EPS accretion alone is not value creation.',
          it: 'Primo: ci sono progetti interni o acquisizioni con rendimenti corretti per il rischio superiori al costo del capitale? Se sì, si finanziano per primi. Secondo: verificherei lo stato patrimoniale; se la leva è sopra il target o il rating è sotto pressione, rimborserei debito. Solo dopo restituirei la cassa — con un buyback se le azioni sembrano sottovalutate e la flessibilità è importante, oppure con un dividendo (eventualmente straordinario, se la cassa è non ricorrente) se il flusso è ricorrente. Mostrerei l’impatto di ciascuna opzione su EPS, leva e valore per azione, ricordando al cliente che l’accrescimento dell’EPS da solo non è creazione di valore.'
        }
      },
      {
        type: 'mistakes',
        items: [
          { en: 'Equating revenue or EBITDA growth with value creation regardless of returns on capital.', it: 'Identificare la crescita di ricavi o EBITDA con la creazione di valore a prescindere dal rendimento del capitale.' },
          { en: 'Using one company-wide hurdle rate for projects of very different risk.', it: 'Usare un unico tasso soglia aziendale per progetti di rischio molto diverso.' },
          { en: 'Justifying a buyback purely because it is EPS-accretive — accretion happens whenever the earnings yield exceeds the after-tax cost of funding, even if the shares are overvalued.', it: 'Giustificare un buyback solo perché accresce l’EPS — l’accrescimento si ha ogni volta che l’earnings yield supera il costo netto del finanziamento, anche se le azioni sono sopravvalutate.' }
        ]
      },
      {
        type: 'summary',
        items: [
          { en: 'Five uses of cash: reinvest, M&A, dividends, buybacks, debt paydown.', it: 'Cinque impieghi della cassa: reinvestimento, M&A, dividendi, buyback, rimborso del debito.' },
          { en: 'Retain cash only where risk-adjusted returns exceed the hurdle rate.', it: 'Trattieni la cassa solo dove i rendimenti corretti per il rischio superano il tasso soglia.' },
          { en: 'Growth creates value only if RONIC > WACC.', it: 'La crescita crea valore solo se RONIC > WACC.' },
          { en: 'Economic profit = (ROIC − WACC) × invested capital.', it: 'Profitto economico = (ROIC − WACC) × capitale investito.' }
        ]
      }
    ],
    questions: [
      {
        id: 'cf-ca-q1',
        kind: 'numeric',
        topic: 'capital-allocation',
        difficulty: 1,
        objective: { en: 'Compute economic profit.', it: 'Calcolare il profitto economico.' },
        prompt: {
          en: 'Invested capital €500m, NOPAT €60m, WACC 9%. What is the economic profit (€m)?',
          it: 'Capitale investito €500m, NOPAT €60m, WACC 9%. Qual è il profitto economico (€m)?'
        },
        answer: 15,
        unit: '€m',
        verify: { fn: 'diff', args: [60, 45] },
        explanation: {
          en: 'Capital charge = 9% × 500 = 45; economic profit = 60 − 45 = 15. Equivalently (ROIC 12% − WACC 9%) × 500 = 15. Accounting profit (60) ignores the cost of equity.',
          it: 'Costo del capitale = 9% × 500 = 45; profitto economico = 60 − 45 = 15. In modo equivalente (ROIC 12% − WACC 9%) × 500 = 15. L’utile contabile (60) ignora il costo del capitale proprio.'
        }
      },
      {
        id: 'cf-ca-q2',
        kind: 'numeric',
        topic: 'buybacks',
        difficulty: 2,
        objective: { en: 'Compute the EPS effect of a cash-funded buyback.', it: 'Calcolare l’effetto sull’EPS di un buyback finanziato con cassa.' },
        prompt: {
          en: 'Net income €100m, 50m shares, share price €40. The company uses €200m of cash (earning 3% pre-tax; tax rate 25%) to buy back shares at €40. What is pro forma EPS (€, two decimals)?',
          it: 'Utile netto €100m, 50m di azioni, prezzo €40. La società usa €200m di cassa (che rende il 3% lordo; aliquota 25%) per riacquistare azioni a €40. Qual è l’EPS pro forma (€, due decimali)?'
        },
        answer: 2.12,
        unit: '€',
        tolerance: { abs: 0.01 },
        verify: { fn: 'ratio', args: [95.5, 45] },
        steps: [
          { en: 'Shares repurchased = 200 / 40 = 5m → 45m remain', it: 'Azioni riacquistate = 200 / 40 = 5m → ne restano 45m' },
          { en: 'Lost interest after tax = 200 × 3% × 0.75 = 4.5 → NI = 95.5', it: 'Interessi persi netti = 200 × 3% × 0,75 = 4,5 → UN = 95,5' },
          { en: 'EPS = 95.5 / 45 = €2.12 (vs €2.00)', it: 'EPS = 95,5 / 45 = €2,12 (vs €2,00)' }
        ],
        explanation: {
          en: 'EPS rises 6.1% because the earnings yield on the shares bought (EPS / price = 5%) exceeds the after-tax yield forgone on cash (2.25%). Forgetting the lost interest gives 100/45 = 2.22.',
          it: 'L’EPS sale del 6,1% perché l’earnings yield delle azioni riacquistate (EPS / prezzo = 5%) supera il rendimento netto perso sulla cassa (2,25%). Dimenticare gli interessi persi porta a 100/45 = 2,22.'
        }
      },
      {
        id: 'cf-ca-q3',
        kind: 'mcq',
        topic: 'capital-allocation',
        difficulty: 2,
        objective: { en: 'Judge whether growth creates value.', it: 'Valutare se la crescita crea valore.' },
        prompt: {
          en: 'A retailer’s WACC is 9%. Its expansion plan would double store count, with expected returns on new stores of 7%. What is the effect on value?',
          it: 'Il WACC di un retailer è 9%. Il piano di espansione raddoppierebbe i punti vendita, con un rendimento atteso sui nuovi negozi del 7%. Qual è l’effetto sul valore?'
        },
        choices: [
          { en: 'Value rises because revenue and EBITDA double', it: 'Il valore aumenta perché ricavi ed EBITDA raddoppiano' },
          { en: 'No effect, since the returns are positive', it: 'Nessun effetto, perché i rendimenti sono positivi' },
          { en: 'Value falls because RONIC is below WACC', it: 'Il valore diminuisce perché il RONIC è inferiore al WACC' },
          { en: 'Value rises if the expansion is debt-financed', it: 'Il valore aumenta se l’espansione è finanziata a debito' }
        ],
        correct: 2,
        explanation: {
          en: 'Every euro invested at 7% when investors require 9% has negative NPV. Higher revenue and positive accounting returns do not offset the shortfall versus the cost of capital; changing the financing does not fix poor operating returns.',
          it: 'Ogni euro investito al 7% quando gli investitori richiedono il 9% ha VAN negativo. Ricavi più alti e rendimenti contabili positivi non compensano lo scarto rispetto al costo del capitale; cambiare il finanziamento non corregge rendimenti operativi insufficienti.'
        }
      },
      {
        id: 'cf-ca-q4',
        kind: 'numeric',
        topic: 'capital-allocation',
        difficulty: 3,
        objective: { en: 'Apply the value driver formula.', it: 'Applicare la formula dei value driver.' },
        prompt: {
          en: 'NOPAT next year €100m, growth 4%, WACC 10%, RONIC 20%. Using Value = NOPAT₁ × (1 − g/RONIC) / (WACC − g), what is the firm worth (€m)?',
          it: 'NOPAT del prossimo anno €100m, crescita 4%, WACC 10%, RONIC 20%. Con Valore = NOPAT₁ × (1 − g/RONIC) / (WACC − g), quanto vale l’azienda (€m)?'
        },
        answer: 1333.33,
        unit: '€m',
        tolerance: { abs: 0.5 },
        verify: { fn: 'pvGrowingPerpetuity', args: [80, 0.1, 0.04] },
        explanation: {
          en: 'Reinvestment rate = 4% / 20% = 20%, so FCF₁ = 80; value = 80 / (10% − 4%) = 1,333. With RONIC = 10% value would be 1,000 — the extra 333 comes from earning above the cost of capital on new investment.',
          it: 'Tasso di reinvestimento = 4% / 20% = 20%, quindi FCF₁ = 80; valore = 80 / (10% − 4%) = 1.333. Con RONIC = 10% il valore sarebbe 1.000 — i 333 in più derivano dal rendere più del costo del capitale sui nuovi investimenti.'
        }
      },
      {
        id: 'cf-ca-q5',
        kind: 'multi',
        topic: 'capital-allocation',
        difficulty: 2,
        objective: { en: 'Identify when debt paydown is the right use of cash.', it: 'Individuare quando il rimborso del debito è l’impiego corretto della cassa.' },
        prompt: {
          en: 'Which situations favour using free cash flow to repay debt? Select all that apply.',
          it: 'Quali situazioni favoriscono l’uso del free cash flow per rimborsare debito? Seleziona tutte le risposte corrette.'
        },
        choices: [
          { en: 'Net leverage is well above the company’s target and the rating agency has a negative outlook', it: 'La leva netta è ben sopra il target aziendale e l’agenzia di rating ha un outlook negativo' },
          { en: 'The company has several projects with returns well above WACC that it cannot otherwise fund', it: 'La società ha diversi progetti con rendimenti ben superiori al WACC che non può finanziare altrimenti' },
          { en: 'Post-LBO, the sponsor’s plan relies on deleveraging before exit', it: 'Dopo un LBO, il piano dello sponsor si basa sul deleveraging prima dell’exit' },
          { en: 'Covenant headroom is tight and earnings are cyclical', it: 'Il margine sui covenant è ridotto e gli utili sono ciclici' }
        ],
        correct: [0, 2, 3],
        explanation: {
          en: 'High leverage, rating pressure, tight covenants with cyclical earnings, and LBO deleveraging plans all favour paydown. When value-creating projects are available, funding them usually comes first.',
          it: 'Leva elevata, pressione sul rating, covenant stretti con utili ciclici e piani di deleveraging di un LBO favoriscono il rimborso. Se esistono progetti che creano valore, di solito vanno finanziati per primi.'
        }
      }
    ],
    flashcards: [
      { id: 'fc-cf-ca-1', topic: 'capital-allocation', front: { en: 'The five uses of free cash flow?', it: 'I cinque impieghi del free cash flow?' }, back: { en: 'Reinvest, M&A, dividends, share buybacks, debt paydown.', it: 'Reinvestimento, M&A, dividendi, riacquisto di azioni proprie, rimborso del debito.' } },
      { id: 'fc-cf-ca-2', topic: 'capital-allocation', front: { en: 'When does growth destroy value?', it: 'Quando la crescita distrugge valore?' }, back: { en: 'When the return on new invested capital is below WACC.', it: 'Quando il rendimento sul nuovo capitale investito è inferiore al WACC.' } },
      { id: 'fc-cf-ca-3', topic: 'capital-allocation', front: { en: 'Economic profit formula?', it: 'Formula del profitto economico?' }, back: { en: '(ROIC − WACC) × invested capital = NOPAT − WACC × IC.', it: '(ROIC − WACC) × capitale investito = NOPAT − WACC × CI.' } },
      { id: 'fc-cf-ca-4', topic: 'buybacks', front: { en: 'When does a buyback create value (not just EPS)?', it: 'Quando un buyback crea valore (e non solo EPS)?' }, back: { en: 'When shares are repurchased below intrinsic value; remaining shareholders gain at the expense of sellers.', it: 'Quando le azioni sono riacquistate sotto il valore intrinseco; gli azionisti che restano guadagnano a spese di chi vende.' } },
      { id: 'fc-cf-ca-5', topic: 'capital-allocation', front: { en: 'What is a hurdle rate?', it: 'Che cos’è un tasso soglia (hurdle rate)?' }, back: { en: 'The minimum acceptable return on a project, typically WACC adjusted for the project’s specific risk.', it: 'Il rendimento minimo accettabile per un progetto, tipicamente il WACC corretto per il rischio specifico del progetto.' } }
    ]
  },

  /* ====================================================================== */
  /* CF4 — Cost of Capital                                                   */
  /* ====================================================================== */
  {
    id: 'cf-capm',
    academyId: 'corporate-finance',
    moduleId: 'CF4',
    mode: 'deep',
    minutes: 14,
    difficulty: 2,
    reviewed: '2026-10',
    objective: {
      en: 'Estimate the cost of equity with CAPM, justify the choice of risk-free rate, equity risk premium and beta, and compute Jensen’s alpha.',
      it: 'Stimare il costo del capitale proprio con il CAPM, motivare la scelta di tasso privo di rischio, premio per il rischio azionario e beta, e calcolare l’alfa di Jensen.'
    },
    screens: [
      {
        type: 'intuition',
        title: { en: 'Shareholders want to be paid for risk', it: 'Gli azionisti vogliono essere pagati per il rischio' },
        body: {
          en: 'Equity investors have no contractual return: they are paid last and bear the most risk. So the **cost of equity** is not observable — it is the return investors **require**, estimated with a model.\n\nCAPM’s key insight: investors can diversify away company-specific risk for free, so the market only pays for **systematic (market) risk** — how much a stock moves with the overall market. That sensitivity is **beta**.',
          it: 'Gli azionisti non hanno un rendimento contrattuale: sono pagati per ultimi e sopportano il rischio maggiore. Il **costo del capitale proprio** quindi non è osservabile — è il rendimento che gli investitori **richiedono**, stimato con un modello.\n\nL’intuizione chiave del CAPM: gli investitori possono eliminare gratuitamente il rischio specifico diversificando, quindi il mercato remunera solo il **rischio sistematico (di mercato)** — quanto un titolo si muove insieme al mercato. Questa sensibilità è il **beta**.'
        }
      },
      {
        type: 'formula',
        formulas: [
          {
            name: { en: 'Capital Asset Pricing Model', it: 'Capital Asset Pricing Model (CAPM)' },
            expr: 'Re = rf + β × (E[Rm] − rf)',
            vars: [
              { sym: 'rf', desc: { en: 'Risk-free rate', it: 'Tasso privo di rischio' } },
              { sym: 'β', desc: { en: 'Equity (levered) beta', it: 'Beta dell’equity (levered)' } },
              { sym: 'E[Rm] − rf', desc: { en: 'Equity (market) risk premium, ERP', it: 'Premio per il rischio azionario (ERP)' } }
            ]
          },
          { name: { en: 'Beta', it: 'Beta' }, expr: 'β = Cov(Ri, Rm) / Var(Rm) = ρ(i,m) × σi / σm' },
          { name: { en: 'Jensen’s alpha', it: 'Alfa di Jensen' }, expr: 'α = Ri − [rf + β × (Rm − rf)]' }
        ],
        note: {
          en: 'β = 1: moves with the market. β > 1: amplifies market moves (cyclicals, levered firms). β < 1: defensive (utilities, staples). The relation between β and expected return is the Security Market Line.',
          it: 'β = 1: si muove come il mercato. β > 1: amplifica i movimenti del mercato (ciclici, società indebitate). β < 1: difensivo (utility, beni di prima necessità). La relazione tra β e rendimento atteso è la Security Market Line.'
        }
      },
      {
        type: 'technical',
        title: { en: 'Choosing the inputs', it: 'Scegliere gli input' },
        body: {
          en: '- **Risk-free rate**: yield on a long-term (typically 10-year) government bond **in the same currency as the cash flows**. For euro cash flows, practitioners commonly use the German Bund, sometimes the local sovereign (e.g. BTP) — be consistent with how country risk is treated.\n- **ERP**: historical (realised excess returns) or implied (backed out of current prices). Practitioner estimates for mature markets typically fall in the ~4–6% range; sources include Damodaran and survey data.\n- **Beta**: regression of stock vs index returns (e.g. 2 years weekly or 5 years monthly), often "adjusted" towards 1; for private targets, use re-levered comparable betas.',
          it: '- **Tasso privo di rischio**: rendimento di un titolo di Stato a lungo termine (tipicamente decennale) **nella stessa valuta dei flussi**. Per flussi in euro si usa spesso il Bund tedesco, talvolta il titolo sovrano locale (es. BTP) — coerentemente con il trattamento del rischio paese.\n- **ERP**: storico (extra-rendimenti realizzati) o implicito (ricavato dai prezzi correnti). Le stime dei practitioner per i mercati maturi cadono tipicamente nell’intervallo ~4–6%; fonti: Damodaran e survey.\n- **Beta**: regressione dei rendimenti del titolo su quelli dell’indice (es. 2 anni settimanali o 5 anni mensili), spesso "aggiustato" verso 1; per target non quotati, si usano i beta dei comparabili ri-leveraggiati.'
        }
      },
      {
        type: 'example',
        title: { en: 'Cost of equity for an Italian industrial', it: 'Costo del capitale proprio di un industriale italiano' },
        body: {
          en: 'Illustrative inputs for Alfa S.p.A. (euro cash flows). Changing beta by ±0.1 moves Re by ±0.55 points — CAPM inputs drive valuation, so bankers show the sensitivity.',
          it: 'Input illustrativi per Alfa S.p.A. (flussi in euro). Variare il beta di ±0,1 sposta Re di ±0,55 punti — gli input del CAPM guidano la valutazione, perciò i banker ne mostrano la sensitività.'
        },
        table: {
          headers: [
            { en: 'Input', it: 'Input' },
            { en: 'Value', it: 'Valore' }
          ],
          rows: [
            [{ en: 'Risk-free rate (10y government bond)', it: 'Tasso privo di rischio (titolo di Stato decennale)' }, '3.5%'],
            [{ en: 'Levered beta', it: 'Beta levered' }, '1.20'],
            [{ en: 'Equity risk premium', it: 'Premio per il rischio azionario' }, '5.5%'],
            [{ en: 'Cost of equity = 3.5% + 1.20 × 5.5%', it: 'Costo dell’equity = 3,5% + 1,20 × 5,5%' }, '10.1%']
          ],
          totalRows: [3]
        }
      },
      {
        type: 'technical',
        title: { en: 'Alpha and CAPM’s limits', it: 'Alfa e limiti del CAPM' },
        body: {
          en: '**Alpha** is the return above what CAPM predicts for the risk taken. A fund that earned 14% with β = 1.1 when rf = 3% and the market returned 10% had α = 14% − 10.7% = **+3.3%**.\n\nCAPM is a simplification: single factor, unstable betas, debate over the ERP. Multi-factor models (e.g. Fama–French size and value) explain returns better, and practitioners sometimes add **size or country risk premia**. Still, CAPM remains the market standard in valuation because it is transparent and widely understood.',
          it: 'L’**alfa** è il rendimento in eccesso rispetto a quanto il CAPM prevede per il rischio assunto. Un fondo che ha reso il 14% con β = 1,1, con rf = 3% e un mercato al 10%, ha α = 14% − 10,7% = **+3,3%**.\n\nIl CAPM è una semplificazione: un solo fattore, beta instabili, dibattito sull’ERP. I modelli multifattoriali (es. Fama–French con dimensione e value) spiegano meglio i rendimenti, e i practitioner aggiungono talvolta **premi per dimensione o rischio paese**. Il CAPM resta comunque lo standard di mercato nelle valutazioni perché è trasparente e universalmente compreso.'
        }
      },
      {
        type: 'realworld',
        body: {
          en: 'In a DCF or fairness opinion, the analyst documents every CAPM input: the bond and date used for rf, the ERP source, the beta source (e.g. Bloomberg, regression period, index) and any premia. Valuation committees challenge these, because a 1-point change in the cost of equity can move equity value by 10–20% for a long-duration business.',
          it: 'In un DCF o in una fairness opinion l’analista documenta ogni input del CAPM: il titolo e la data usati per rf, la fonte dell’ERP, la fonte del beta (es. Bloomberg, periodo di regressione, indice) e gli eventuali premi. I comitati di valutazione li mettono in discussione, perché 1 punto di costo dell’equity può spostare il valore dell’equity del 10–20% per un business a lunga duration.'
        }
      },
      { type: 'exercise', questionId: 'cf-capm-q1' },
      { type: 'exercise', questionId: 'cf-capm-q2' },
      { type: 'exercise', questionId: 'cf-capm-q4' },
      { type: 'exercise', questionId: 'cf-capm-q5' },
      {
        type: 'interview',
        question: { en: 'Walk me through how you would calculate the cost of equity.', it: 'Spiegami come calcoleresti il costo del capitale proprio.' },
        answer: {
          en: 'I would use CAPM: cost of equity = risk-free rate + beta × equity risk premium. For the risk-free rate, the yield on a 10-year government bond in the currency of the cash flows. For beta, either the company’s regression beta or, more robustly, the median unlevered beta of comparables re-levered at the company’s target capital structure. For the ERP, a market-standard estimate, typically around 5% for developed markets. If relevant, I would add a size or country risk premium and sensitise the result.',
          it: 'Userei il CAPM: costo dell’equity = tasso privo di rischio + beta × premio per il rischio azionario. Come tasso privo di rischio, il rendimento del decennale governativo nella valuta dei flussi. Come beta, quello di regressione della società o, in modo più robusto, la mediana dei beta unlevered dei comparabili ri-leveraggiata alla struttura finanziaria target. Come ERP, una stima standard di mercato, tipicamente intorno al 5% per i mercati sviluppati. Se rilevante, aggiungerei un premio per dimensione o rischio paese e farei una sensitivity sul risultato.'
        }
      },
      {
        type: 'mistakes',
        items: [
          { en: 'Using a short-term T-bill rate as rf for long-term cash flows, or a bond in a different currency from the cash flows.', it: 'Usare un tasso monetario a breve come rf per flussi di lungo periodo, o un titolo in valuta diversa da quella dei flussi.' },
          { en: 'Multiplying beta by the market return instead of by the premium (Rm − rf).', it: 'Moltiplicare il beta per il rendimento di mercato anziché per il premio (Rm − rf).' },
          { en: 'Thinking high total volatility means high beta: idiosyncratic risk is not priced in CAPM.', it: 'Pensare che un’alta volatilità totale implichi un beta alto: il rischio specifico non è remunerato nel CAPM.' },
          { en: 'Adding country risk twice (local sovereign yield AND a country risk premium).', it: 'Contare due volte il rischio paese (rendimento del titolo sovrano locale E un premio per il rischio paese).' }
        ]
      },
      {
        type: 'summary',
        items: [
          { en: 'Re = rf + β × ERP; only systematic risk is rewarded.', it: 'Re = rf + β × ERP; viene remunerato solo il rischio sistematico.' },
          { en: 'rf: long-term government bond in the cash-flow currency.', it: 'rf: titolo di Stato a lungo termine nella valuta dei flussi.' },
          { en: 'β = Cov(Ri, Rm) / Var(Rm); ERP typically ~4–6% in mature markets.', it: 'β = Cov(Ri, Rm) / Var(Rm); ERP tipicamente ~4–6% nei mercati maturi.' },
          { en: 'Alpha = realised return − CAPM-required return.', it: 'Alfa = rendimento realizzato − rendimento richiesto dal CAPM.' }
        ]
      }
    ],
    questions: [
      {
        id: 'cf-capm-q1',
        kind: 'numeric',
        topic: 'capm',
        difficulty: 1,
        objective: { en: 'Compute the cost of equity with CAPM.', it: 'Calcolare il costo dell’equity con il CAPM.' },
        prompt: {
          en: 'Risk-free rate 4.0%, beta 1.2, equity risk premium 5.5%. What is the cost of equity (%)?',
          it: 'Tasso privo di rischio 4,0%, beta 1,2, premio per il rischio azionario 5,5%. Qual è il costo dell’equity (%)?'
        },
        answer: 10.6,
        unit: '%',
        tolerance: { abs: 0.05 },
        verify: { fn: 'capm', args: [4, 1.2, 5.5] },
        explanation: {
          en: 'Re = 4.0% + 1.2 × 5.5% = 4.0% + 6.6% = 10.6%. The premium (not the market return) is multiplied by beta.',
          it: 'Re = 4,0% + 1,2 × 5,5% = 4,0% + 6,6% = 10,6%. Il beta moltiplica il premio (non il rendimento di mercato).'
        }
      },
      {
        id: 'cf-capm-q2',
        kind: 'numeric',
        topic: 'alpha',
        difficulty: 2,
        objective: { en: 'Compute Jensen’s alpha.', it: 'Calcolare l’alfa di Jensen.' },
        prompt: {
          en: 'A portfolio returned 14% with a beta of 1.1. The risk-free rate was 3% and the market returned 10%. What was its alpha (%)?',
          it: 'Un portafoglio ha reso il 14% con un beta di 1,1. Il tasso privo di rischio era 3% e il mercato ha reso il 10%. Qual è stato il suo alfa (%)?'
        },
        answer: 3.3,
        unit: '%',
        tolerance: { abs: 0.05 },
        verify: { fn: 'jensensAlpha', args: [14, 3, 1.1, 10] },
        explanation: {
          en: 'Required return = 3% + 1.1 × (10% − 3%) = 10.7%; alpha = 14% − 10.7% = +3.3%. Comparing 14% with the market’s 10% (4%) ignores the extra risk taken (β > 1).',
          it: 'Rendimento richiesto = 3% + 1,1 × (10% − 3%) = 10,7%; alfa = 14% − 10,7% = +3,3%. Confrontare il 14% con il 10% del mercato (4%) ignora il rischio aggiuntivo assunto (β > 1).'
        }
      },
      {
        id: 'cf-capm-q3',
        kind: 'numeric',
        topic: 'capm',
        difficulty: 2,
        objective: { en: 'Back out an implied beta.', it: 'Ricavare un beta implicito.' },
        prompt: {
          en: 'Investors require 12% on a stock. The risk-free rate is 4% and the equity risk premium 5%. What beta does CAPM imply?',
          it: 'Gli investitori richiedono il 12% su un titolo. Il tasso privo di rischio è 4% e il premio per il rischio azionario 5%. Quale beta implica il CAPM?'
        },
        answer: 1.6,
        tolerance: { abs: 0.01 },
        verify: { fn: 'ratio', args: [8, 5] },
        explanation: {
          en: 'β = (Re − rf) / ERP = (12% − 4%) / 5% = 1.6. Dividing 12% by 5% (2.4) forgets to strip out the risk-free rate.',
          it: 'β = (Re − rf) / ERP = (12% − 4%) / 5% = 1,6. Dividere 12% per 5% (2,4) dimentica di togliere il tasso privo di rischio.'
        }
      },
      {
        id: 'cf-capm-q4',
        kind: 'mcq',
        topic: 'capm',
        difficulty: 2,
        objective: { en: 'Choose an appropriate risk-free rate.', it: 'Scegliere un tasso privo di rischio appropriato.' },
        prompt: {
          en: 'You are valuing a German company whose cash flows are in euros, with a 10-year explicit forecast. Which risk-free rate is most appropriate?',
          it: 'Stai valutando una società tedesca con flussi in euro e un piano esplicito a 10 anni. Quale tasso privo di rischio è più appropriato?'
        },
        choices: [
          { en: '3-month euro money-market rate', it: 'Tasso monetario in euro a 3 mesi' },
          { en: '10-year US Treasury yield, because it is the global benchmark', it: 'Rendimento del Treasury USA a 10 anni, perché è il benchmark globale' },
          { en: 'The company’s own bond yield', it: 'Il rendimento delle obbligazioni della società' },
          { en: '10-year German Bund yield', it: 'Rendimento del Bund tedesco a 10 anni' }
        ],
        correct: 3,
        explanation: {
          en: 'Match currency (euro) and duration (long term): the 10-year Bund. A US Treasury mismatches currency (inflation expectations differ); a money-market rate mismatches duration; the company’s bond yield contains credit risk, so it is not risk-free.',
          it: 'Bisogna abbinare valuta (euro) e durata (lungo termine): il Bund decennale. Il Treasury USA non è coerente con la valuta (aspettative d’inflazione diverse); il tasso monetario non è coerente con la durata; il rendimento delle obbligazioni della società incorpora rischio di credito, quindi non è privo di rischio.'
        }
      },
      {
        id: 'cf-capm-q5',
        kind: 'multi',
        topic: 'beta',
        difficulty: 2,
        objective: { en: 'Distinguish systematic from idiosyncratic risk.', it: 'Distinguere rischio sistematico e rischio specifico.' },
        prompt: {
          en: 'Which factors would tend to INCREASE a company’s equity beta? Select all that apply.',
          it: 'Quali fattori tendono ad AUMENTARE il beta dell’equity di una società? Seleziona tutte le risposte corrette.'
        },
        choices: [
          { en: 'Higher financial leverage', it: 'Maggiore leva finanziaria' },
          { en: 'Higher operating leverage (more fixed costs)', it: 'Maggiore leva operativa (più costi fissi)' },
          { en: 'A pending lawsuit specific to the company', it: 'Una causa legale pendente specifica della società' },
          { en: 'Demand that is highly sensitive to the economic cycle', it: 'Una domanda molto sensibile al ciclo economico' },
          { en: 'Selling essential goods with stable demand', it: 'Vendere beni essenziali con domanda stabile' }
        ],
        correct: [0, 1, 3],
        explanation: {
          en: 'Financial leverage, operating leverage and cyclicality all raise sensitivity to the market. A company-specific lawsuit is idiosyncratic and diversifiable, so it does not change beta (though it affects cash flows). Stable essential demand lowers beta.',
          it: 'Leva finanziaria, leva operativa e ciclicità aumentano la sensibilità al mercato. Una causa specifica della società è rischio idiosincratico e diversificabile, quindi non modifica il beta (pur influenzando i flussi). Una domanda essenziale e stabile riduce il beta.'
        }
      },
      {
        id: 'cf-capm-q6',
        kind: 'numeric',
        topic: 'capm',
        difficulty: 1,
        objective: { en: 'Derive the ERP from an expected market return.', it: 'Ricavare l’ERP da un rendimento di mercato atteso.' },
        prompt: {
          en: 'Expected market return 9.0%, risk-free rate 3.5%, beta 0.8 (a utility). What is the cost of equity (%)?',
          it: 'Rendimento di mercato atteso 9,0%, tasso privo di rischio 3,5%, beta 0,8 (una utility). Qual è il costo dell’equity (%)?'
        },
        answer: 7.9,
        unit: '%',
        tolerance: { abs: 0.05 },
        verify: { fn: 'capm', args: [3.5, 0.8, 5.5] },
        explanation: {
          en: 'ERP = 9.0% − 3.5% = 5.5%; Re = 3.5% + 0.8 × 5.5% = 7.9%. Using 0.8 × 9.0% + 3.5% = 10.7% double counts the risk-free rate.',
          it: 'ERP = 9,0% − 3,5% = 5,5%; Re = 3,5% + 0,8 × 5,5% = 7,9%. Calcolare 0,8 × 9,0% + 3,5% = 10,7% conta due volte il tasso privo di rischio.'
        }
      }
    ],
    flashcards: [
      { id: 'fc-cf-capm-1', topic: 'capm', front: { en: 'CAPM formula?', it: 'Formula del CAPM?' }, back: { en: 'Re = rf + β × (E[Rm] − rf)', it: 'Re = rf + β × (E[Rm] − rf)' } },
      { id: 'fc-cf-capm-2', topic: 'beta', front: { en: 'Beta as a statistic?', it: 'Il beta come statistica?' }, back: { en: 'Cov(Ri, Rm) / Var(Rm) = correlation × σi / σm.', it: 'Cov(Ri, Rm) / Var(Rm) = correlazione × σi / σm.' } },
      { id: 'fc-cf-capm-3', topic: 'capm', front: { en: 'Which risk does CAPM reward and why?', it: 'Quale rischio remunera il CAPM e perché?' }, back: { en: 'Only systematic risk, because idiosyncratic risk can be diversified away at no cost.', it: 'Solo il rischio sistematico, perché quello specifico si elimina gratuitamente con la diversificazione.' } },
      { id: 'fc-cf-capm-4', topic: 'alpha', front: { en: 'Jensen’s alpha?', it: 'Alfa di Jensen?' }, back: { en: 'Realised return − [rf + β × (Rm − rf)].', it: 'Rendimento realizzato − [rf + β × (Rm − rf)].' } },
      { id: 'fc-cf-capm-5', topic: 'capm', front: { en: 'Two rules for picking the risk-free rate?', it: 'Due regole per scegliere il tasso privo di rischio?' }, back: { en: 'Same currency as the cash flows; long maturity (typically 10-year government bond).', it: 'Stessa valuta dei flussi; scadenza lunga (tipicamente titolo di Stato decennale).' } }
    ],
    sources: [
      { label: 'A. Damodaran, NYU Stern — Equity risk premium and country risk data', url: 'https://pages.stern.nyu.edu/~adamodar/' }
    ]
  },

  {
    id: 'cf-beta',
    academyId: 'corporate-finance',
    moduleId: 'CF4',
    mode: 'deep',
    minutes: 16,
    difficulty: 3,
    reviewed: '2026-10',
    objective: {
      en: 'Unlever and re-lever betas with the Hamada formula, build a cost of equity from comparable companies, and explain the assumptions behind it.',
      it: 'Calcolare beta unlevered e re-levered con la formula di Hamada, costruire il costo dell’equity partendo dai comparabili e spiegarne le ipotesi.'
    },
    screens: [
      {
        type: 'intuition',
        title: { en: 'Two layers of risk', it: 'Due livelli di rischio' },
        body: {
          en: 'A shareholder bears two kinds of risk:\n\n- **Business risk**: how sensitive the operations are to the economy (asset beta, or **unlevered beta**).\n- **Financial risk**: debt holders are paid first, so leverage concentrates business risk on a thinner equity slice.\n\nThe beta you observe in the market is the **levered (equity) beta**, which mixes both. To compare companies — or to value a private target — you must strip out each company’s leverage, then add back the target’s.',
          it: 'Un azionista sopporta due tipi di rischio:\n\n- **Rischio operativo**: quanto il business è sensibile all’economia (beta delle attività, o **beta unlevered**).\n- **Rischio finanziario**: i creditori sono pagati per primi, quindi la leva concentra il rischio operativo su una fetta di equity più sottile.\n\nIl beta osservato sul mercato è il **beta levered (dell’equity)**, che mescola entrambi. Per confrontare società — o valutare un target non quotato — bisogna eliminare la leva di ciascuna società e poi applicare quella del target.'
        }
      },
      {
        type: 'technical',
        title: { en: 'Deriving Hamada', it: 'Derivare la formula di Hamada' },
        body: {
          en: 'The beta of the firm’s assets is the value-weighted average of the betas of the claims on it. With taxes and constant (permanent) debt, the tax shield is as risky as the debt, giving:\n\nβA = βE × E / [E + D(1 − t)] + βD × D(1 − t) / [E + D(1 − t)]\n\nAssume **debt is risk-free (βD = 0)** and rearrange:\n\n**βE = βA × [1 + (1 − t) × D/E]**\n\nThis is the Hamada (1972) relation, the market standard in banks’ valuation models.',
          it: 'Il beta delle attività dell’impresa è la media, ponderata per i valori, dei beta dei diritti su di esse. Con imposte e debito costante (permanente), lo scudo fiscale ha lo stesso rischio del debito, quindi:\n\nβA = βE × E / [E + D(1 − t)] + βD × D(1 − t) / [E + D(1 − t)]\n\nIpotizzando un **debito privo di rischio (βD = 0)** e riordinando:\n\n**βE = βA × [1 + (1 − t) × D/E]**\n\nÈ la relazione di Hamada (1972), lo standard di mercato nei modelli di valutazione delle banche.'
        }
      },
      {
        type: 'formula',
        formulas: [
          {
            name: { en: 'Unlevering (Hamada)', it: 'Unlevering (Hamada)' },
            expr: 'βU = βL / [1 + (1 − t) × D/E]',
            vars: [
              { sym: 'D/E', desc: { en: 'Market debt-to-equity of the company being unlevered', it: 'Rapporto debito/equity a valori di mercato della società da "deleveraggiare"' } },
              { sym: 't', desc: { en: 'That company’s marginal tax rate', it: 'Aliquota marginale di quella società' } }
            ]
          },
          { name: { en: 'Re-levering at the target structure', it: 'Re-levering alla struttura target' }, expr: 'βL = βU × [1 + (1 − t) × (D/E)target]' },
          { name: { en: 'Adjusted (Blume) beta, as used by Bloomberg', it: 'Beta aggiustato (Blume), come in Bloomberg' }, expr: 'βadj = 2/3 × βraw + 1/3 × 1.0' }
        ],
        note: {
          en: 'Unlever each comparable with ITS OWN D/E and tax rate; take the median; re-lever with the TARGET’S D/E and tax rate. Variants exist (e.g. assuming debt is rebalanced to a constant D/V gives βL = βU × (1 + D/E), without the tax term).',
          it: 'Ogni comparabile si "deleveraggia" con il SUO D/E e la SUA aliquota; si prende la mediana; si ri-leveraggia con D/E e aliquota del TARGET. Esistono varianti (es. ipotizzando che il debito sia ribilanciato a un D/V costante si ottiene βL = βU × (1 + D/E), senza il termine fiscale).'
        }
      },
      {
        type: 'example',
        title: { en: 'Beta for a private target from three comps', it: 'Beta di un target non quotato da tre comparabili' },
        body: {
          en: 'TargetCo is private; its target D/E is 0.50 and tax rate 25%. Comparable betas are unlevered at each comp’s own D/E (25% tax for all). Median βU = 0.923; re-levered βL = 0.923 × [1 + 0.75 × 0.5] = **1.269**. With rf 3.5% and ERP 5.5%, Re = **10.5%**.',
          it: 'TargetCo non è quotata; il suo D/E target è 0,50 con aliquota 25%. I beta dei comparabili sono "deleveraggiati" con il D/E di ciascuno (aliquota 25% per tutti). Mediana βU = 0,923; βL ri-leveraggiato = 0,923 × [1 + 0,75 × 0,5] = **1,269**. Con rf 3,5% ed ERP 5,5%, Re = **10,5%**.'
        },
        table: {
          headers: [
            { en: 'Company', it: 'Società' },
            { en: 'Levered β', it: 'β levered' },
            { en: 'D/E', it: 'D/E' },
            { en: 'Unlevered β', it: 'β unlevered' }
          ],
          rows: [
            ['Comp A', '1.20', '0.40', '0.923'],
            ['Comp B', '1.05', '0.20', '0.913'],
            ['Comp C', '1.50', '0.80', '0.938'],
            [{ en: 'Median', it: 'Mediana' }, '', '', '0.923'],
            [{ en: 'TargetCo (D/E 0.50)', it: 'TargetCo (D/E 0,50)' }, '1.269', '0.50', '0.923']
          ],
          totalRows: [3]
        }
      },
      {
        type: 'technical',
        title: { en: 'Practical judgement calls', it: 'Le scelte pratiche' },
        body: {
          en: '- Use **market values** of equity (and debt, or book debt as a proxy) for D/E — not book equity.\n- Use the **marginal** statutory tax rate, e.g. IRES 24% in Italy (IRAP generally does not shield interest for industrial companies, so many practitioners ignore it here).\n- Notice how levered betas of A–C diverge (1.05–1.50) but unlevered betas cluster (0.91–0.94): leverage, not business risk, explained the gap.\n- If debt is risky (distressed comps), βD > 0 and Hamada overstates βU’s leverage adjustment — handle with care.',
          it: '- Usa **valori di mercato** dell’equity (e del debito, o il debito contabile come proxy) per il D/E — non il patrimonio netto contabile.\n- Usa l’aliquota **marginale** nominale, es. IRES 24% in Italia (l’IRAP in genere non offre scudo fiscale sugli interessi per le società industriali, quindi molti practitioner la trascurano qui).\n- Nota come i beta levered di A–C divergano (1,05–1,50) mentre quelli unlevered si concentrino (0,91–0,94): era la leva, non il rischio operativo, a spiegare la differenza.\n- Se il debito è rischioso (comparabili in difficoltà), βD > 0 e Hamada sovrastima l’effetto leva — da trattare con cautela.'
        }
      },
      {
        type: 'realworld',
        body: {
          en: 'This is a staple analyst task: pull raw and adjusted betas, market caps and net debt for the comps set (e.g. from Bloomberg or FactSet), unlever, take the median or mean, re-lever at the target’s capital structure, and plug into CAPM and WACC. In LBO-style or leveraged recapitalisation analyses the same mechanics show how the cost of equity rises as debt is added.',
          it: 'È un compito tipico dell’analista: scaricare beta raw e adjusted, capitalizzazioni e PFN del panel di comparabili (es. da Bloomberg o FactSet), calcolare i beta unlevered, prendere mediana o media, ri-leveraggiare alla struttura finanziaria del target e inserire il risultato in CAPM e WACC. Nelle analisi di LBO o di ricapitalizzazione a leva la stessa meccanica mostra come il costo dell’equity salga all’aumentare del debito.'
        }
      },
      { type: 'exercise', questionId: 'cf-beta-q1' },
      { type: 'exercise', questionId: 'cf-beta-q2' },
      { type: 'exercise', questionId: 'cf-beta-q3' },
      { type: 'exercise', questionId: 'cf-beta-q4' },
      {
        type: 'interview',
        question: {
          en: 'How would you find the beta for a private company you are valuing?',
          it: 'Come troveresti il beta di una società non quotata che stai valutando?'
        },
        answer: {
          en: 'A private company has no share price, so I would use comparables. I would take the levered betas of listed peers, unlever each using its own market D/E and tax rate — βU = βL / [1 + (1 − t) D/E] — to isolate business risk, take the median, then re-lever at the private company’s target or industry capital structure and its tax rate. That re-levered beta goes into CAPM to get the cost of equity. I would sanity-check that the unlevered betas cluster, and exclude outliers or distressed peers.',
          it: 'Una società non quotata non ha un prezzo di borsa, quindi userei i comparabili. Prenderei i beta levered dei peer quotati, li "deleveraggerei" ciascuno con il proprio D/E di mercato e la propria aliquota — βU = βL / [1 + (1 − t) D/E] — per isolare il rischio operativo, prenderei la mediana e la ri-leveraggerei alla struttura finanziaria target (o di settore) della società con la sua aliquota. Il beta ri-leveraggiato entra nel CAPM per ottenere il costo dell’equity. Verificherei che i beta unlevered siano concentrati ed escluderei outlier o peer in difficoltà.'
        }
      },
      {
        type: 'mistakes',
        items: [
          { en: 'Averaging levered betas of comparables directly, mixing their different capital structures.', it: 'Fare la media dei beta levered dei comparabili, mescolandone le diverse strutture finanziarie.' },
          { en: 'Re-levering with the comps’ D/E instead of the target’s.', it: 'Ri-leveraggiare con il D/E dei comparabili invece che con quello del target.' },
          { en: 'Using book equity in D/E — market cap is usually far larger, so book D/E overstates leverage.', it: 'Usare il PN contabile nel D/E — la capitalizzazione è di solito molto maggiore, quindi il D/E contabile sovrastima la leva.' },
          { en: 'Using D/V instead of D/E in the formula.', it: 'Usare D/V invece di D/E nella formula.' }
        ]
      },
      {
        type: 'summary',
        items: [
          { en: 'Levered beta = business risk + financial risk; unlevered beta = business risk only.', it: 'Beta levered = rischio operativo + rischio finanziario; beta unlevered = solo rischio operativo.' },
          { en: 'Hamada: βL = βU × [1 + (1 − t) D/E], assuming risk-free debt.', it: 'Hamada: βL = βU × [1 + (1 − t) D/E], con debito privo di rischio.' },
          { en: 'Process: unlever each comp → median → re-lever at target D/E → CAPM.', it: 'Processo: unlever di ogni comparabile → mediana → re-lever al D/E target → CAPM.' },
          { en: 'Use market values and marginal tax rates.', it: 'Usa valori di mercato e aliquote marginali.' }
        ]
      }
    ],
    questions: [
      {
        id: 'cf-beta-q1',
        kind: 'numeric',
        topic: 'beta',
        difficulty: 2,
        objective: { en: 'Unlever a beta.', it: 'Calcolare un beta unlevered.' },
        prompt: {
          en: 'A listed company has a levered beta of 1.30, market D/E of 0.50 and a 25% tax rate. What is its unlevered beta (3 decimals)?',
          it: 'Una società quotata ha un beta levered di 1,30, D/E di mercato di 0,50 e aliquota del 25%. Qual è il suo beta unlevered (3 decimali)?'
        },
        answer: 0.945,
        tolerance: { abs: 0.002 },
        verify: { fn: 'unleverBeta', args: [1.3, 0.25, 0.5] },
        explanation: {
          en: 'βU = 1.30 / [1 + 0.75 × 0.50] = 1.30 / 1.375 = 0.945. Forgetting the tax term gives 1.30 / 1.5 = 0.867.',
          it: 'βU = 1,30 / [1 + 0,75 × 0,50] = 1,30 / 1,375 = 0,945. Dimenticare il termine fiscale porta a 1,30 / 1,5 = 0,867.'
        }
      },
      {
        id: 'cf-beta-q2',
        kind: 'numeric',
        topic: 'beta',
        difficulty: 2,
        objective: { en: 'Re-lever a beta at a new capital structure.', it: 'Ri-leveraggiare un beta a una nuova struttura finanziaria.' },
        prompt: {
          en: 'The company above (βU = 0.945, tax 25%) plans a recapitalisation to D/E = 1.0. What is the new levered beta (2 decimals)?',
          it: 'La società precedente (βU = 0,945, aliquota 25%) pianifica una ricapitalizzazione fino a D/E = 1,0. Qual è il nuovo beta levered (2 decimali)?'
        },
        answer: 1.65,
        tolerance: { abs: 0.01 },
        verify: { fn: 'releverBeta', args: [0.9454545454545454, 0.25, 1] },
        explanation: {
          en: 'βL = 0.945 × [1 + 0.75 × 1.0] = 0.945 × 1.75 = 1.65. More debt raises equity beta from 1.30 to 1.65 — shareholders bear more financial risk, so their required return rises.',
          it: 'βL = 0,945 × [1 + 0,75 × 1,0] = 0,945 × 1,75 = 1,65. Più debito fa salire il beta dell’equity da 1,30 a 1,65 — gli azionisti sopportano più rischio finanziario, quindi il rendimento richiesto aumenta.'
        }
      },
      {
        id: 'cf-beta-q3',
        kind: 'grid',
        topic: 'beta',
        difficulty: 3,
        objective: { en: 'Build a re-levered beta from comparables.', it: 'Costruire un beta ri-leveraggiato dai comparabili.' },
        prompt: {
          en: 'Tax rate 25% for all. Unlever each comp (3 decimals), take the median, re-lever at TargetCo’s D/E of 0.50, then compute Re with rf 3.5% and ERP 5.5% (%).',
          it: 'Aliquota 25% per tutti. Calcola il beta unlevered di ogni comparabile (3 decimali), prendi la mediana, ri-leveraggia al D/E di TargetCo pari a 0,50, quindi calcola Re con rf 3,5% ed ERP 5,5% (%).'
        },
        columns: [
          { en: 'Item', it: 'Voce' },
          { en: 'Levered β', it: 'β levered' },
          { en: 'D/E', it: 'D/E' },
          { en: 'Result', it: 'Risultato' }
        ],
        rows: [
          { label: { en: 'Comp A βU', it: 'βU comparabile A' }, cells: ['1.20', '0.40', { answer: 0.923, tolerance: { abs: 0.002 }, verify: { fn: 'unleverBeta', args: [1.2, 0.25, 0.4] } }] },
          { label: { en: 'Comp B βU', it: 'βU comparabile B' }, cells: ['1.05', '0.20', { answer: 0.913, tolerance: { abs: 0.002 }, verify: { fn: 'unleverBeta', args: [1.05, 0.25, 0.2] } }] },
          { label: { en: 'Comp C βU', it: 'βU comparabile C' }, cells: ['1.50', '0.80', { answer: 0.938, tolerance: { abs: 0.002 }, verify: { fn: 'unleverBeta', args: [1.5, 0.25, 0.8] } }] },
          { label: { en: 'Median βU', it: 'Mediana βU' }, cells: ['', '', { answer: 0.923, tolerance: { abs: 0.002 }, verify: { fn: 'median', args: [[0.923076923, 0.913043478, 0.9375]] } }] },
          { label: { en: 'TargetCo βL', it: 'βL di TargetCo' }, cells: ['', '0.50', { answer: 1.269, tolerance: { abs: 0.003 }, verify: { fn: 'releverBeta', args: [0.923076923, 0.25, 0.5] } }] },
          { label: { en: 'Cost of equity (%)', it: 'Costo dell’equity (%)' }, cells: ['', '', { answer: 10.48, tolerance: { abs: 0.03 }, verify: { fn: 'capm', args: [3.5, 1.269230769, 5.5] } }] }
        ],
        explanation: {
          en: 'A: 1.20/1.30 = 0.923; B: 1.05/1.15 = 0.913; C: 1.50/1.60 = 0.938. Median 0.923 → βL = 0.923 × 1.375 = 1.269 → Re = 3.5% + 1.269 × 5.5% = 10.48%. The simple average of levered betas (1.25) would have mixed three capital structures.',
          it: 'A: 1,20/1,30 = 0,923; B: 1,05/1,15 = 0,913; C: 1,50/1,60 = 0,938. Mediana 0,923 → βL = 0,923 × 1,375 = 1,269 → Re = 3,5% + 1,269 × 5,5% = 10,48%. La media semplice dei beta levered (1,25) avrebbe mescolato tre strutture finanziarie.'
        }
      },
      {
        id: 'cf-beta-q4',
        kind: 'mcq',
        topic: 'beta',
        difficulty: 2,
        objective: { en: 'Apply the correct leverage inputs.', it: 'Applicare i dati di leva corretti.' },
        prompt: {
          en: 'When unlevering a comparable’s beta, which D/E and tax rate should you use?',
          it: 'Quando calcoli il beta unlevered di un comparabile, quale D/E e quale aliquota devi usare?'
        },
        choices: [
          { en: 'The target company’s D/E and tax rate', it: 'D/E e aliquota della società target' },
          { en: 'The comparable’s own market D/E and its marginal tax rate', it: 'Il D/E di mercato del comparabile e la sua aliquota marginale' },
          { en: 'The industry average book D/E and the effective tax rate', it: 'Il D/E contabile medio del settore e l’aliquota effettiva' },
          { en: 'Any D/E, since unlevered beta is independent of leverage', it: 'Qualsiasi D/E, visto che il beta unlevered è indipendente dalla leva' }
        ],
        correct: 1,
        explanation: {
          en: 'The observed beta reflects the comparable’s own capital structure and tax position, so you remove exactly that leverage. The target’s D/E is used only when re-levering. Unlevered beta is independent of leverage only after you correctly remove it.',
          it: 'Il beta osservato riflette la struttura finanziaria e la posizione fiscale del comparabile, quindi si rimuove esattamente quella leva. Il D/E del target si usa solo nel re-levering. Il beta unlevered è indipendente dalla leva solo dopo averla rimossa correttamente.'
        }
      },
      {
        id: 'cf-beta-q5',
        kind: 'numeric',
        topic: 'beta',
        difficulty: 1,
        objective: { en: 'Compute an adjusted (Blume) beta.', it: 'Calcolare un beta aggiustato (Blume).' },
        prompt: {
          en: 'A regression gives a raw beta of 1.45. Using adjusted β = 2/3 × raw + 1/3, what is the adjusted beta (2 decimals)?',
          it: 'Una regressione restituisce un beta raw di 1,45. Con β aggiustato = 2/3 × raw + 1/3, qual è il beta aggiustato (2 decimali)?'
        },
        answer: 1.3,
        tolerance: { abs: 0.01 },
        verify: { fn: 'ratio', args: [3.9, 3] },
        explanation: {
          en: '2/3 × 1.45 + 1/3 = 0.967 + 0.333 = 1.30. The adjustment pulls betas towards 1 because, empirically, betas tend to mean-revert over time.',
          it: '2/3 × 1,45 + 1/3 = 0,967 + 0,333 = 1,30. L’aggiustamento avvicina il beta a 1 perché, empiricamente, i beta tendono a tornare verso la media nel tempo.'
        }
      }
    ],
    flashcards: [
      { id: 'fc-cf-beta-1', topic: 'beta', front: { en: 'Hamada unlevering formula?', it: 'Formula di unlevering di Hamada?' }, back: { en: 'βU = βL / [1 + (1 − t) × D/E]', it: 'βU = βL / [1 + (1 − t) × D/E]' } },
      { id: 'fc-cf-beta-2', topic: 'beta', front: { en: 'What does unlevered beta measure?', it: 'Cosa misura il beta unlevered?' }, back: { en: 'Business (asset) risk only, as if the company had no debt.', it: 'Solo il rischio operativo (delle attività), come se la società non avesse debito.' } },
      { id: 'fc-cf-beta-3', topic: 'beta', front: { en: 'Key simplifying assumption in Hamada?', it: 'Ipotesi semplificatrice chiave di Hamada?' }, back: { en: 'Debt is risk-free (debt beta = 0) and debt is constant, so the tax shield has the risk of debt.', it: 'Debito privo di rischio (beta del debito = 0) e costante, quindi lo scudo fiscale ha il rischio del debito.' } },
      { id: 'fc-cf-beta-4', topic: 'beta', front: { en: 'Steps to get a private company’s cost of equity?', it: 'Passaggi per ottenere il costo dell’equity di una società non quotata?' }, back: { en: 'Unlever comps’ betas → median → re-lever at target D/E and tax → CAPM.', it: 'Unlever dei beta dei comparabili → mediana → re-lever a D/E e aliquota target → CAPM.' } },
      { id: 'fc-cf-beta-5', topic: 'beta', front: { en: 'Bloomberg adjusted beta formula?', it: 'Formula del beta aggiustato di Bloomberg?' }, back: { en: '2/3 × raw beta + 1/3 × 1.0 (Blume adjustment).', it: '2/3 × beta raw + 1/3 × 1,0 (aggiustamento di Blume).' } }
    ],
    sources: [
      { label: 'R. Hamada (1972), "The Effect of the Firm’s Capital Structure on the Systematic Risk of Common Stocks", Journal of Finance 27(2)' },
      { label: 'M. Blume (1971), "On the Assessment of Risk", Journal of Finance 26(1)' }
    ]
  },

  {
    id: 'cf-cost-of-debt',
    academyId: 'corporate-finance',
    moduleId: 'CF4',
    mode: 'deep',
    minutes: 12,
    difficulty: 2,
    reviewed: '2026-10',
    objective: {
      en: 'Estimate the pre-tax cost of debt from yields to maturity or credit spreads, convert it to an after-tax cost, and explain why the coupon rate is the wrong input.',
      it: 'Stimare il costo del debito ante imposte dai rendimenti a scadenza o dagli spread di credito, convertirlo al netto delle imposte e spiegare perché la cedola è l’input sbagliato.'
    },
    screens: [
      {
        type: 'intuition',
        title: { en: 'What would it cost to borrow today?', it: 'Quanto costerebbe indebitarsi oggi?' },
        body: {
          en: 'The cost of debt is the return lenders **require today** to lend to the company — not the rate it happened to agree years ago. Like the cost of equity, it is a forward-looking, market-based opportunity cost.\n\nDebt is cheaper than equity for two reasons: lenders are paid **first** and have contractual claims (less risk), and interest is usually **tax-deductible**, so the government effectively pays part of it.',
          it: 'Il costo del debito è il rendimento che i finanziatori **richiedono oggi** per prestare alla società — non il tasso concordato anni fa. Come il costo dell’equity, è un costo opportunità prospettico e di mercato.\n\nIl debito costa meno dell’equity per due motivi: i creditori sono pagati **per primi** e hanno diritti contrattuali (meno rischio), e gli interessi sono di norma **deducibili**, quindi lo Stato ne sostiene di fatto una parte.'
        }
      },
      {
        type: 'technical',
        title: { en: 'Three ways to estimate Kd', it: 'Tre modi per stimare Kd' },
        body: {
          en: '1. **Yield to maturity (YTM)** on the company’s traded bonds — the discount rate equating the bond’s price with its remaining coupons and principal. Best when liquid, long-dated bonds exist.\n2. **Risk-free rate + credit spread** for the company’s rating (actual, or "synthetic" from its interest coverage and leverage).\n3. **Recent borrowing cost** on bank loans (e.g. Euribor + margin) for private companies, cross-checked with spreads of similarly rated peers.\n\nThe **coupon rate** reflects conditions at issuance and is not a current cost.',
          it: '1. **Rendimento a scadenza (YTM)** delle obbligazioni quotate della società — il tasso che eguaglia il prezzo del bond ai flussi residui di cedole e capitale. Ideale se esistono bond liquidi e a lunga scadenza.\n2. **Tasso privo di rischio + spread di credito** coerente con il rating della società (effettivo o "sintetico", stimato da copertura degli interessi e leva).\n3. **Costo dei finanziamenti recenti** (es. Euribor + margine) per le società non quotate, verificato con gli spread di peer con rating simile.\n\nLa **cedola** riflette le condizioni all’emissione e non è un costo attuale.'
        }
      },
      {
        type: 'formula',
        formulas: [
          {
            name: { en: 'Bond price and YTM', it: 'Prezzo dell’obbligazione e YTM' },
            expr: 'Price = Σ Coupon / (1 + YTM)^t + Face / (1 + YTM)^N',
            vars: [{ sym: 'YTM', desc: { en: 'Solved iteratively; it is the bond’s IRR', it: 'Risolto per iterazione; è il TIR del bond' } }]
          },
          { name: { en: 'Build-up approach', it: 'Approccio build-up' }, expr: 'Kd (pre-tax) = rf + credit spread' },
          { name: { en: 'After-tax cost of debt', it: 'Costo del debito al netto delle imposte' }, expr: 'Kd (after-tax) = Kd × (1 − t)' }
        ],
        note: {
          en: 'Price below par → YTM above coupon; price above par → YTM below coupon. Use the marginal tax rate, and only if the company can actually use the interest deduction.',
          it: 'Prezzo sotto la pari → YTM superiore alla cedola; prezzo sopra la pari → YTM inferiore alla cedola. Usa l’aliquota marginale, e solo se la società può effettivamente dedurre gli interessi.'
        }
      },
      {
        type: 'example',
        title: { en: 'Alfa S.p.A.’s cost of debt', it: 'Il costo del debito di Alfa S.p.A.' },
        body: {
          en: 'Alfa has a 5% annual-coupon bond with 5 years to maturity trading at 95 (per 100 face). The coupon is 5%, but a buyer today earns more because they pay less than par.',
          it: 'Alfa ha un’obbligazione con cedola annuale del 5% e scadenza a 5 anni che quota 95 (su 100 di nominale). La cedola è il 5%, ma chi compra oggi guadagna di più perché paga meno della pari.'
        },
        table: {
          headers: [
            { en: 'Step', it: 'Passaggio' },
            { en: 'Value', it: 'Valore' }
          ],
          rows: [
            [{ en: 'Coupon rate', it: 'Tasso cedolare' }, '5.00%'],
            [{ en: 'YTM at price 95 (pre-tax Kd)', it: 'YTM al prezzo di 95 (Kd ante imposte)' }, '6.19%'],
            [{ en: 'Marginal tax rate (IRES)', it: 'Aliquota marginale (IRES)' }, '24%'],
            [{ en: 'After-tax Kd = 6.19% × 0.76', it: 'Kd netto = 6,19% × 0,76' }, '4.71%']
          ],
          totalRows: [3]
        }
      },
      {
        type: 'technical',
        title: { en: 'Limits to the tax shield and other subtleties', it: 'Limiti allo scudo fiscale e altre sottigliezze' },
        body: {
          en: '- **Interest limitation rules**: under the EU Anti-Tax Avoidance Directive (2016/1164), exceeding net borrowing costs are deductible only up to 30% of tax EBITDA (implemented in Italy via art. 96 TUIR). Highly levered companies may not get the full shield.\n- **Loss-making companies** cannot use the deduction now, so the effective after-tax cost is closer to the pre-tax cost.\n- **Promised vs expected yield**: for risky or distressed debt, YTM is the promised return assuming no default; the expected return is lower. Using YTM then overstates Kd.\n- **Leases** (IFRS 16) are debt-like and are often included in debt at the incremental borrowing rate.',
          it: '- **Limiti alla deducibilità degli interessi**: in base alla Direttiva UE anti-elusione (ATAD, 2016/1164), gli oneri finanziari netti eccedenti sono deducibili solo fino al 30% dell’EBITDA fiscale (recepito in Italia con l’art. 96 TUIR). Le società molto indebitate possono non beneficiare dell’intero scudo.\n- Le **società in perdita** non possono usare subito la deduzione, quindi il costo effettivo netto si avvicina a quello lordo.\n- **Rendimento promesso vs atteso**: per debito rischioso o in dissesto, lo YTM è il rendimento promesso in assenza di default; quello atteso è inferiore. Usare lo YTM sovrastima Kd.\n- I **leasing** (IFRS 16) sono assimilati al debito e spesso inclusi al tasso di finanziamento marginale.'
        }
      },
      {
        type: 'realworld',
        body: {
          en: 'DCM and leveraged finance bankers live in spreads: a BBB-rated issuer prices over mid-swaps or government bonds at a spread set by comparable bonds and investor demand. In valuation work, analysts pull the YTM of the client’s outstanding bonds (or a rating-matched index yield) to set Kd in the WACC. Investment grade means BBB− (S&P/Fitch) or Baa3 (Moody’s) and above; below that is high yield, with wider spreads.',
          it: 'I banker di DCM e leveraged finance ragionano in spread: un emittente con rating BBB colloca sopra mid-swap o titoli di Stato a uno spread determinato dai bond comparabili e dalla domanda degli investitori. Nelle valutazioni l’analista usa lo YTM delle obbligazioni in circolazione del cliente (o il rendimento di un indice con lo stesso rating) per fissare Kd nel WACC. Investment grade significa BBB− (S&P/Fitch) o Baa3 (Moody’s) e superiori; al di sotto si parla di high yield, con spread più ampi.'
        }
      },
      { type: 'exercise', questionId: 'cf-kd-q1' },
      { type: 'exercise', questionId: 'cf-kd-q4' },
      { type: 'exercise', questionId: 'cf-kd-q3' },
      { type: 'exercise', questionId: 'cf-kd-q5' },
      {
        type: 'interview',
        question: {
          en: 'How do you calculate the cost of debt, and why do we use it after tax in the WACC?',
          it: 'Come si calcola il costo del debito e perché nel WACC lo usiamo al netto delle imposte?'
        },
        answer: {
          en: 'I would use the yield to maturity on the company’s long-term bonds, or, if it has none, the risk-free rate plus the credit spread for its actual or implied rating. Not the coupon, which reflects past conditions. In the WACC we multiply by (1 − t) because interest is tax-deductible: each euro of interest reduces taxes by t, so the true cost to the company is lower. That is also why unlevered free cash flow is calculated with taxes on EBIT, not after interest — the tax shield is captured once, in the discount rate.',
          it: 'Userei lo YTM delle obbligazioni a lungo termine della società o, se non ne ha, il tasso privo di rischio più lo spread di credito coerente con il suo rating effettivo o implicito. Non la cedola, che riflette condizioni passate. Nel WACC moltiplichiamo per (1 − t) perché gli interessi sono deducibili: ogni euro di interessi riduce le imposte di t, quindi il costo reale per la società è inferiore. È anche per questo che il free cash flow unlevered si calcola con le imposte sull’EBIT, non dopo gli interessi — lo scudo fiscale si conta una sola volta, nel tasso di sconto.'
        }
      },
      {
        type: 'mistakes',
        items: [
          { en: 'Using the coupon rate instead of the current market yield.', it: 'Usare il tasso cedolare anziché il rendimento corrente di mercato.' },
          { en: 'Applying the tax shield to a company with no taxable profits or one capped by interest limitation rules.', it: 'Applicare lo scudo fiscale a una società senza utili imponibili o soggetta ai limiti di deducibilità degli interessi.' },
          { en: 'Using the YTM of distressed bonds as the expected cost of debt.', it: 'Usare lo YTM di obbligazioni in dissesto come costo atteso del debito.' },
          { en: 'Deducting the tax shield both in free cash flow and in WACC.', it: 'Considerare lo scudo fiscale sia nel free cash flow sia nel WACC.' }
        ]
      },
      {
        type: 'summary',
        items: [
          { en: 'Kd = current market cost of borrowing: YTM, or rf + credit spread.', it: 'Kd = costo corrente di mercato del debito: YTM, oppure rf + spread di credito.' },
          { en: 'After-tax Kd = Kd × (1 − marginal tax rate).', it: 'Kd netto = Kd × (1 − aliquota marginale).' },
          { en: 'Price below par ⇒ YTM above coupon.', it: 'Prezzo sotto la pari ⇒ YTM superiore alla cedola.' },
          { en: 'Watch interest limitation rules, losses and default risk.', it: 'Attenzione a limiti di deducibilità, perdite fiscali e rischio di default.' }
        ]
      }
    ],
    questions: [
      {
        id: 'cf-kd-q1',
        kind: 'numeric',
        topic: 'cost-of-debt',
        difficulty: 1,
        objective: { en: 'Compute an after-tax cost of debt.', it: 'Calcolare un costo del debito al netto delle imposte.' },
        prompt: {
          en: 'An Italian company can borrow at 6.0% pre-tax and its marginal tax rate is 24%. What is its after-tax cost of debt (%)?',
          it: 'Una società italiana può indebitarsi al 6,0% lordo e la sua aliquota marginale è il 24%. Qual è il costo del debito al netto delle imposte (%)?'
        },
        answer: 4.56,
        unit: '%',
        tolerance: { abs: 0.01 },
        verify: { fn: 'afterTaxCostOfDebt', args: [6, 0.24] },
        explanation: {
          en: '6.0% × (1 − 0.24) = 4.56%. Subtracting 24 percentage points (or 2.4 points) confuses multiplication by (1 − t) with subtraction.',
          it: '6,0% × (1 − 0,24) = 4,56%. Sottrarre 24 punti (o 2,4 punti) confonde la moltiplicazione per (1 − t) con una sottrazione.'
        }
      },
      {
        id: 'cf-kd-q2',
        kind: 'numeric',
        topic: 'cost-of-debt',
        difficulty: 1,
        objective: { en: 'Build up Kd from a spread.', it: 'Costruire Kd a partire da uno spread.' },
        prompt: {
          en: 'The 10-year government yield is 3.0%. BBB-rated peers trade at a spread of 250 basis points. What is the pre-tax cost of debt for a BBB company (%)?',
          it: 'Il rendimento governativo decennale è 3,0%. I peer con rating BBB quotano uno spread di 250 punti base. Qual è il costo del debito ante imposte per una società BBB (%)?'
        },
        answer: 5.5,
        unit: '%',
        tolerance: { abs: 0.01 },
        verify: { fn: 'sum', args: [3.0, 2.5] },
        explanation: {
          en: '250 bp = 2.50 percentage points; Kd = 3.0% + 2.5% = 5.5%. 1 basis point = 0.01%.',
          it: '250 pb = 2,50 punti percentuali; Kd = 3,0% + 2,5% = 5,5%. 1 punto base = 0,01%.'
        }
      },
      {
        id: 'cf-kd-q3',
        kind: 'numeric',
        topic: 'bond-pricing',
        difficulty: 2,
        objective: { en: 'Price a bond from its yield.', it: 'Prezzare un’obbligazione dal suo rendimento.' },
        prompt: {
          en: 'A 5-year bond pays a 4% annual coupon. Comparable debt now yields 6%. What is its price per 100 of face value?',
          it: 'Un’obbligazione a 5 anni paga una cedola annuale del 4%. Il debito comparabile oggi rende il 6%. Qual è il suo prezzo per 100 di nominale?'
        },
        answer: 91.58,
        tolerance: { abs: 0.02 },
        verify: { fn: 'bondPrice', args: [100, 0.04, 0.06, 5] },
        explanation: {
          en: 'PV of coupons = 4 × 4.2124 = 16.85; PV of principal = 100 / 1.06^5 = 74.73; price = 91.58. The coupon is below the market yield, so the bond trades below par.',
          it: 'VA delle cedole = 4 × 4,2124 = 16,85; VA del capitale = 100 / 1,06^5 = 74,73; prezzo = 91,58. La cedola è inferiore al rendimento di mercato, quindi il bond quota sotto la pari.'
        }
      },
      {
        id: 'cf-kd-q4',
        kind: 'mcq',
        topic: 'cost-of-debt',
        difficulty: 2,
        objective: { en: 'Choose the right pre-tax cost of debt.', it: 'Scegliere il corretto costo del debito ante imposte.' },
        prompt: {
          en: 'A company’s only bond was issued at a 3% coupon in 2020 and now trades at 88 with a yield to maturity of 6.4%. Which pre-tax Kd should you use in the WACC?',
          it: 'L’unica obbligazione di una società è stata emessa con cedola del 3% nel 2020 e oggi quota 88 con un rendimento a scadenza del 6,4%. Quale Kd ante imposte usare nel WACC?'
        },
        choices: [
          { en: '3.0%, the contractual coupon', it: '3,0%, la cedola contrattuale' },
          { en: '6.4%, the current yield to maturity', it: '6,4%, il rendimento a scadenza attuale' },
          { en: '3.4%, the coupon divided by the price', it: '3,4%, la cedola divisa per il prezzo' },
          { en: 'The average of the coupon and the YTM', it: 'La media tra cedola e YTM' }
        ],
        correct: 1,
        explanation: {
          en: 'The WACC needs today’s opportunity cost: the YTM (6.4%). The coupon reflects 2020 conditions. Coupon / price (3.4%) is the current yield, which ignores the pull-to-par gain from 88 to 100.',
          it: 'Il WACC richiede il costo opportunità attuale: lo YTM (6,4%). La cedola riflette le condizioni del 2020. Cedola / prezzo (3,4%) è il rendimento corrente, che ignora il guadagno di rimborso da 88 a 100.'
        }
      },
      {
        id: 'cf-kd-q5',
        kind: 'numeric',
        topic: 'cost-of-debt',
        difficulty: 3,
        objective: { en: 'Estimate YTM and after-tax Kd from a bond price.', it: 'Stimare YTM e Kd netto dal prezzo di un’obbligazione.' },
        prompt: {
          en: 'A 5% annual-coupon bond with 5 years to maturity trades at 95. What is its yield to maturity (%, two decimals)?',
          it: 'Un’obbligazione con cedola annuale del 5% e scadenza a 5 anni quota 95. Qual è il suo rendimento a scadenza (%, due decimali)?'
        },
        answer: 6.19,
        unit: '%',
        tolerance: { abs: 0.02 },
        verify: { fn: 'bondYield', args: [95, 100, 0.05, 5], scale: 100 },
        steps: [
          { en: 'At 6%: price = 5 × 4.2124 + 74.73 = 95.79 (too high → yield must be higher)', it: 'Al 6%: prezzo = 5 × 4,2124 + 74,73 = 95,79 (troppo alto → il rendimento deve salire)' },
          { en: 'At 6.5%: price ≈ 93.77 → interpolate: 6% + 0.5% × 0.79 / 2.02 ≈ 6.19%', it: 'Al 6,5%: prezzo ≈ 93,77 → interpola: 6% + 0,5% × 0,79 / 2,02 ≈ 6,19%' }
        ],
        explanation: {
          en: 'YTM ≈ 6.19%: above the 5% coupon because the bond trades below par. Quick approximation: [5 + (100 − 95)/5] / [(100 + 95)/2] = 6 / 97.5 = 6.15%. After tax at 24%, Kd ≈ 4.71%.',
          it: 'YTM ≈ 6,19%: superiore alla cedola del 5% perché il bond quota sotto la pari. Approssimazione rapida: [5 + (100 − 95)/5] / [(100 + 95)/2] = 6 / 97,5 = 6,15%. Al netto dell’aliquota del 24%, Kd ≈ 4,71%.'
        }
      }
    ],
    flashcards: [
      { id: 'fc-cf-kd-1', topic: 'cost-of-debt', front: { en: 'Best market-based estimate of pre-tax Kd?', it: 'Miglior stima di mercato di Kd ante imposte?' }, back: { en: 'Yield to maturity on the company’s long-term bonds (or rf + rating-based credit spread).', it: 'Rendimento a scadenza delle obbligazioni a lungo termine della società (o rf + spread coerente con il rating).' } },
      { id: 'fc-cf-kd-2', topic: 'cost-of-debt', front: { en: 'Why is Kd taken after tax in WACC?', it: 'Perché nel WACC Kd è al netto delle imposte?' }, back: { en: 'Interest is tax-deductible, so each euro of interest saves t in taxes.', it: 'Gli interessi sono deducibili, quindi ogni euro di interessi fa risparmiare t di imposte.' } },
      { id: 'fc-cf-kd-3', topic: 'bond-pricing', front: { en: 'Bond price below par means…?', it: 'Un prezzo sotto la pari significa…?' }, back: { en: 'YTM is above the coupon rate.', it: 'Lo YTM è superiore al tasso cedolare.' } },
      { id: 'fc-cf-kd-4', topic: 'cost-of-debt', front: { en: 'EU ATAD interest limitation cap?', it: 'Limite di deducibilità degli interessi previsto dall’ATAD?' }, back: { en: 'Exceeding borrowing costs deductible up to 30% of tax EBITDA (Directive (EU) 2016/1164, art. 4; Italy: art. 96 TUIR).', it: 'Oneri finanziari eccedenti deducibili fino al 30% dell’EBITDA fiscale (Direttiva (UE) 2016/1164, art. 4; Italia: art. 96 TUIR).' } },
      { id: 'fc-cf-kd-5', topic: 'cost-of-debt', front: { en: 'Lowest investment-grade ratings?', it: 'Rating investment grade più bassi?' }, back: { en: 'BBB− (S&P, Fitch) and Baa3 (Moody’s).', it: 'BBB− (S&P, Fitch) e Baa3 (Moody’s).' } }
    ],
    sources: [
      { label: 'Council Directive (EU) 2016/1164 (Anti-Tax Avoidance Directive), art. 4 — interest limitation', url: 'https://eur-lex.europa.eu/eli/dir/2016/1164/oj' }
    ]
  },

  {
    id: 'cf-wacc',
    academyId: 'corporate-finance',
    moduleId: 'CF4',
    mode: 'deep',
    minutes: 15,
    difficulty: 2,
    reviewed: '2026-10',
    objective: {
      en: 'Calculate WACC with market-value weights and a target capital structure, include preferred equity, and explain why WACC is the discount rate for unlevered free cash flow in a DCF.',
      it: 'Calcolare il WACC con pesi a valori di mercato e una struttura finanziaria target, includere le azioni privilegiate e spiegare perché il WACC è il tasso di sconto dei flussi unlevered nel DCF.'
    },
    screens: [
      {
        type: 'intuition',
        title: { en: 'The blended price of capital', it: 'Il prezzo medio del capitale' },
        body: {
          en: 'A company is funded by a mix of shareholders and lenders, each demanding its own return. The **weighted average cost of capital** is the blended return the business must earn on its assets to satisfy **all** of them.\n\nIf the operations earn more than the WACC, value is created; less, and value is destroyed. That is why WACC is the hurdle rate for average-risk projects and the discount rate in a DCF.',
          it: 'Un’azienda è finanziata da un mix di azionisti e finanziatori, ciascuno con il proprio rendimento richiesto. Il **costo medio ponderato del capitale** è il rendimento medio che il business deve generare sulle sue attività per soddisfarli **tutti**.\n\nSe la gestione operativa rende più del WACC si crea valore; se rende meno, lo si distrugge. Per questo il WACC è il tasso soglia per i progetti di rischio medio e il tasso di sconto nel DCF.'
        }
      },
      {
        type: 'formula',
        formulas: [
          {
            name: { en: 'Weighted average cost of capital', it: 'Costo medio ponderato del capitale (WACC)' },
            expr: 'WACC = E/V × Re + D/V × Kd × (1 − t) + P/V × Kp',
            vars: [
              { sym: 'E, D, P', desc: { en: 'Market values of equity, net debt, preferred equity', it: 'Valori di mercato di equity, debito (netto), azioni privilegiate' } },
              { sym: 'V', desc: { en: 'E + D + P', it: 'E + D + P' } },
              { sym: 'Kp', desc: { en: 'Cost of preferred = preferred dividend / preferred price', it: 'Costo delle privilegiate = dividendo privilegiato / prezzo' } }
            ]
          }
        ],
        note: {
          en: 'Each component is the investors’ required return, weighted by its share of total capital. Only debt gets the (1 − t) factor because only interest is tax-deductible.',
          it: 'Ogni componente è il rendimento richiesto dagli investitori, ponderato per la sua quota sul capitale totale. Solo il debito ha il fattore (1 − t) perché solo gli interessi sono deducibili.'
        }
      },
      {
        type: 'technical',
        title: { en: 'Weights: market, not book; target, not current', it: 'Pesi: di mercato, non contabili; target, non attuali' },
        body: {
          en: '- **Market values**: investors’ opportunity cost is based on what their claims are worth today. Book equity is a historical accounting number, often far below market cap. Book value of debt is commonly used as a proxy for market value unless the debt trades far from par.\n- **Target capital structure**: a DCF values cash flows far into the future, so use the long-run D/V management targets or the peer median — especially for LBO targets or companies mid-recapitalisation.\n- **Consistency**: the D/E used to re-lever beta must equal the D/E implied by the WACC weights.',
          it: '- **Valori di mercato**: il costo opportunità degli investitori dipende da quanto valgono oggi i loro diritti. Il PN contabile è un dato storico, spesso molto inferiore alla capitalizzazione. Il valore contabile del debito è di solito una buona proxy del valore di mercato, salvo che il debito quoti lontano dalla pari.\n- **Struttura finanziaria target**: il DCF valuta flussi lontani nel tempo, quindi si usa il D/V di lungo periodo indicato dal management o la mediana dei peer — soprattutto per target di LBO o società in fase di ricapitalizzazione.\n- **Coerenza**: il D/E usato per ri-leveraggiare il beta deve coincidere con quello implicito nei pesi del WACC.'
        }
      },
      {
        type: 'example',
        title: { en: 'TargetCo WACC build', it: 'Costruzione del WACC di TargetCo' },
        body: {
          en: 'TargetCo’s target structure is D/V 25% (D/E 0.33). Consistently, the comps’ median βU of 0.923 is re-levered at D/E 0.33 and a 24% tax rate: βL = 0.923 × (1 + 0.76 × 0.33) = 1.157, so Re = 3.5% + 1.157 × 5.5% = 9.86%. Pre-tax Kd is 5.5%.',
          it: 'La struttura target di TargetCo è D/V 25% (D/E 0,33). Per coerenza, la mediana dei βU dei comparabili (0,923) si ri-leveraggia a D/E 0,33 con aliquota 24%: βL = 0,923 × (1 + 0,76 × 0,33) = 1,157, quindi Re = 3,5% + 1,157 × 5,5% = 9,86%. Kd ante imposte 5,5%.'
        },
        table: {
          headers: [
            { en: 'Component', it: 'Componente' },
            { en: 'Weight', it: 'Peso' },
            { en: 'Cost', it: 'Costo' },
            { en: 'Contribution', it: 'Contributo' }
          ],
          rows: [
            [{ en: 'Equity (market value 1,500)', it: 'Equity (valore di mercato 1.500)' }, '75%', '9.86%', '7.40%'],
            [{ en: 'Debt (500), after tax at 24%', it: 'Debito (500), netto al 24%' }, '25%', '5.50% × 0.76 = 4.18%', '1.05%'],
            ['WACC', '100%', '', '8.44%']
          ],
          totalRows: [2]
        }
      },
      {
        type: 'technical',
        title: { en: 'Why WACC discounts unlevered FCF', it: 'Perché il WACC attualizza il FCF unlevered' },
        body: {
          en: 'Match the cash flow to the investors who receive it:\n\n- **Unlevered FCF** (before interest, available to debt **and** equity) → discount at **WACC** → **enterprise value**.\n- **Levered FCF** (after interest and debt flows, available to equity only) → discount at **Re** → **equity value**.\n\nUFCF is taxed as if unlevered (EBIT × t), so the tax benefit of debt is captured in WACC via Kd(1 − t). Mixing them — e.g. UFCF at Re — systematically misvalues the company.',
          it: 'Abbina il flusso agli investitori che lo ricevono:\n\n- **FCF unlevered** (prima degli interessi, disponibile per debito **ed** equity) → si attualizza al **WACC** → **enterprise value**.\n- **FCF levered** (dopo interessi e flussi del debito, solo per gli azionisti) → si attualizza a **Re** → **equity value**.\n\nIl FCF unlevered è tassato come se non ci fosse debito (EBIT × t), quindi il beneficio fiscale del debito è catturato nel WACC tramite Kd(1 − t). Mescolarli — es. FCF unlevered a Re — porta a valutazioni sistematicamente sbagliate.'
        }
      },
      {
        type: 'realworld',
        body: {
          en: 'In practice the WACC page of a DCF model is one of the most scrutinised: rf source and date, ERP, beta panel, credit spread, tax rate and target D/V. Bankers present valuation ranges with WACC sensitised by ±0.5–1.0 point against terminal growth or exit multiple. For multi-division groups, a single group WACC can mislead — divisional WACCs based on each segment’s peers are used in sum-of-the-parts.',
          it: 'In pratica la pagina del WACC di un modello DCF è tra le più esaminate: fonte e data di rf, ERP, panel per il beta, spread di credito, aliquota e D/V target. I banker presentano intervalli di valore con il WACC in sensitivity di ±0,5–1,0 punti contro crescita terminale o multiplo di uscita. Per i gruppi multi-divisionali un unico WACC di gruppo può ingannare — nella somma delle parti si usano WACC divisionali basati sui peer di ciascun segmento.'
        }
      },
      { type: 'exercise', questionId: 'cf-wacc-q1' },
      { type: 'exercise', questionId: 'cf-wacc-q2' },
      { type: 'exercise', questionId: 'cf-wacc-q4' },
      { type: 'exercise', questionId: 'cf-wacc-q5' },
      {
        type: 'interview',
        question: {
          en: 'What is WACC, how do you calculate it, and why do we use it in a DCF?',
          it: 'Che cos’è il WACC, come si calcola e perché lo usiamo nel DCF?'
        },
        answer: {
          en: 'WACC is the blended required return of all capital providers, weighted by the market value of their capital: E/V × cost of equity + D/V × cost of debt × (1 − t), plus preferred if any. Cost of equity comes from CAPM, cost of debt from current yields, both at a target capital structure. We use it in an unlevered DCF because unlevered free cash flow is available to both debt and equity holders, so the discount rate must reflect the return both require; discounting UFCF at WACC gives enterprise value, from which we subtract net debt to reach equity value.',
          it: 'Il WACC è il rendimento richiesto medio di tutti i finanziatori, ponderato per il valore di mercato del rispettivo capitale: E/V × costo dell’equity + D/V × costo del debito × (1 − t), più le eventuali privilegiate. Il costo dell’equity viene dal CAPM, quello del debito dai rendimenti correnti, entrambi a una struttura finanziaria target. Lo usiamo in un DCF unlevered perché il free cash flow unlevered è disponibile sia per i creditori sia per gli azionisti, quindi il tasso deve riflettere il rendimento richiesto da entrambi; attualizzando il FCF unlevered al WACC si ottiene l’enterprise value, da cui si sottrae la posizione finanziaria netta per arrivare all’equity value.'
        }
      },
      {
        type: 'mistakes',
        items: [
          { en: 'Using book value of equity for the weights.', it: 'Usare il patrimonio netto contabile per i pesi.' },
          { en: 'Applying (1 − t) to the cost of equity or of preferred equity.', it: 'Applicare (1 − t) al costo dell’equity o delle privilegiate.' },
          { en: 'Using a D/V in the WACC that differs from the D/E used to re-lever beta.', it: 'Usare nel WACC un D/V diverso dal D/E usato per ri-leveraggiare il beta.' },
          { en: 'Thinking more cheap debt always lowers WACC: beyond a point, Re and Kd rise and distress costs appear.', it: 'Pensare che più debito "economico" riduca sempre il WACC: oltre una certa soglia Re e Kd salgono e compaiono i costi di dissesto.' }
        ]
      },
      {
        type: 'summary',
        items: [
          { en: 'WACC = E/V × Re + D/V × Kd(1 − t) (+ P/V × Kp).', it: 'WACC = E/V × Re + D/V × Kd(1 − t) (+ P/V × Kp per le privilegiate).' },
          { en: 'Use market-value, target-structure weights.', it: 'Usa pesi a valori di mercato e alla struttura target.' },
          { en: 'UFCF ↔ WACC ↔ enterprise value; LFCF ↔ Re ↔ equity value.', it: 'FCF unlevered ↔ WACC ↔ enterprise value; FCF levered ↔ Re ↔ equity value.' },
          { en: 'WACC is the hurdle rate for projects of average company risk.', it: 'Il WACC è il tasso soglia per progetti con rischio pari a quello medio dell’azienda.' }
        ]
      }
    ],
    questions: [
      {
        id: 'cf-wacc-q1',
        kind: 'numeric',
        topic: 'wacc',
        difficulty: 1,
        objective: { en: 'Compute WACC.', it: 'Calcolare il WACC.' },
        prompt: {
          en: 'Equity market value €600m, debt €400m. Cost of equity 10%, pre-tax cost of debt 5%, tax rate 25%. What is the WACC (%)?',
          it: 'Valore di mercato dell’equity €600m, debito €400m. Costo dell’equity 10%, costo del debito ante imposte 5%, aliquota 25%. Qual è il WACC (%)?'
        },
        answer: 7.5,
        unit: '%',
        tolerance: { abs: 0.01 },
        verify: { fn: 'wacc', args: [600, 400, 10, 5, 0.25] },
        explanation: {
          en: '60% × 10% + 40% × 5% × 0.75 = 6.0% + 1.5% = 7.5%. Ignoring the tax shield gives 8.0%.',
          it: '60% × 10% + 40% × 5% × 0,75 = 6,0% + 1,5% = 7,5%. Ignorando lo scudo fiscale si otterrebbe 8,0%.'
        }
      },
      {
        id: 'cf-wacc-q2',
        kind: 'grid',
        topic: 'wacc',
        difficulty: 2,
        objective: { en: 'Build a WACC from its components.', it: 'Costruire un WACC partendo dalle componenti.' },
        prompt: {
          en: 'rf 4%, levered beta 1.2, ERP 5%; pre-tax Kd 6%; tax 25%; market cap €700m, debt €300m. Fill in each line (%).',
          it: 'rf 4%, beta levered 1,2, ERP 5%; Kd ante imposte 6%; aliquota 25%; capitalizzazione €700m, debito €300m. Completa ogni riga (%).'
        },
        columns: [
          { en: 'Line', it: 'Riga' },
          { en: 'Value (%)', it: 'Valore (%)' }
        ],
        rows: [
          { label: { en: 'Cost of equity', it: 'Costo dell’equity' }, cells: [{ answer: 10, tolerance: { abs: 0.01 }, verify: { fn: 'capm', args: [4, 1.2, 5] } }] },
          { label: { en: 'After-tax cost of debt', it: 'Costo del debito netto' }, cells: [{ answer: 4.5, tolerance: { abs: 0.01 }, verify: { fn: 'afterTaxCostOfDebt', args: [6, 0.25] } }] },
          { label: { en: 'Equity weight E/V', it: 'Peso dell’equity E/V' }, cells: [{ answer: 70, tolerance: { abs: 0.05 }, verify: { fn: 'ratio', args: [70000, 1000] } }] },
          { label: { en: 'WACC', it: 'WACC' }, cells: [{ answer: 8.35, tolerance: { abs: 0.01 }, verify: { fn: 'wacc', args: [700, 300, 10, 6, 0.25] } }] }
        ],
        explanation: {
          en: 'Re = 4% + 1.2 × 5% = 10%; Kd after tax = 6% × 0.75 = 4.5%; E/V = 700/1,000 = 70%; WACC = 70% × 10% + 30% × 4.5% = 7.0% + 1.35% = 8.35%.',
          it: 'Re = 4% + 1,2 × 5% = 10%; Kd netto = 6% × 0,75 = 4,5%; E/V = 700/1.000 = 70%; WACC = 70% × 10% + 30% × 4,5% = 7,0% + 1,35% = 8,35%.'
        }
      },
      {
        id: 'cf-wacc-q3',
        kind: 'numeric',
        topic: 'wacc',
        difficulty: 2,
        objective: { en: 'Include preferred equity in WACC.', it: 'Includere le azioni privilegiate nel WACC.' },
        prompt: {
          en: 'Market values: equity €500m (Re 11%), debt €300m (Kd 6% pre-tax), preferred €200m (Kp 8%). Tax rate 25%. WACC (%)?',
          it: 'Valori di mercato: equity €500m (Re 11%), debito €300m (Kd 6% lordo), privilegiate €200m (Kp 8%). Aliquota 25%. WACC (%)?'
        },
        answer: 8.45,
        unit: '%',
        tolerance: { abs: 0.01 },
        verify: { fn: 'wacc', args: [500, 300, 11, 6, 0.25, 200, 8] },
        explanation: {
          en: '50% × 11% + 30% × 6% × 0.75 + 20% × 8% = 5.5% + 1.35% + 1.6% = 8.45%. Preferred dividends are not tax-deductible, so no (1 − t) on Kp.',
          it: '50% × 11% + 30% × 6% × 0,75 + 20% × 8% = 5,5% + 1,35% + 1,6% = 8,45%. I dividendi privilegiati non sono deducibili, quindi niente (1 − t) su Kp.'
        }
      },
      {
        id: 'cf-wacc-q4',
        kind: 'mcq',
        topic: 'wacc',
        difficulty: 2,
        objective: { en: 'Choose the right weights.', it: 'Scegliere i pesi corretti.' },
        prompt: {
          en: 'A company has book equity of €200m, market capitalisation of €1,000m and debt of €250m (trading near par). Which equity weight should the WACC use?',
          it: 'Una società ha PN contabile di €200m, capitalizzazione di €1.000m e debito di €250m (quotato vicino alla pari). Quale peso dell’equity va usato nel WACC?'
        },
        choices: [
          { en: '44% = 200 / 450 (book values)', it: '44% = 200 / 450 (valori contabili)' },
          { en: '80% = 1,000 / 1,250 (market values)', it: '80% = 1.000 / 1.250 (valori di mercato)' },
          { en: '50%, a standard assumption', it: '50%, un’ipotesi standard' },
          { en: '100%, since debt is already in the cost of equity', it: '100%, perché il debito è già nel costo dell’equity' }
        ],
        correct: 1,
        explanation: {
          en: 'WACC weights reflect what investors’ claims are worth today: 1,000 / (1,000 + 250) = 80%. Book equity understates the shareholders’ stake. Unless management has a different long-run target, market weights apply.',
          it: 'I pesi del WACC riflettono quanto valgono oggi i diritti degli investitori: 1.000 / (1.000 + 250) = 80%. Il PN contabile sottostima la quota degli azionisti. Salvo un diverso target di lungo periodo del management, si usano i pesi di mercato.'
        }
      },
      {
        id: 'cf-wacc-q5',
        kind: 'mcq',
        topic: 'wacc',
        difficulty: 2,
        objective: { en: 'Match cash flows with discount rates.', it: 'Abbinare flussi e tassi di sconto.' },
        prompt: {
          en: 'You discount unlevered free cash flows at the cost of equity instead of WACC. Ignoring other effects, the resulting enterprise value is:',
          it: 'Attualizzi i free cash flow unlevered al costo dell’equity invece che al WACC. A parità di altri fattori, l’enterprise value risultante è:'
        },
        choices: [
          { en: 'Correct, because shareholders own the company', it: 'Corretto, perché gli azionisti possiedono la società' },
          { en: 'Overstated, because Re is lower than WACC', it: 'Sovrastimato, perché Re è inferiore al WACC' },
          { en: 'Understated, because Re exceeds WACC for a levered firm', it: 'Sottostimato, perché per una società indebitata Re supera il WACC' },
          { en: 'Unaffected, because discount rates do not change EV', it: 'Invariato, perché i tassi di sconto non modificano l’EV' }
        ],
        correct: 2,
        explanation: {
          en: 'UFCF belongs to all capital providers and must be discounted at WACC. For a levered company Re > WACC, so using Re understates EV. Equity-only discounting at Re is correct only for levered FCF.',
          it: 'Il FCF unlevered spetta a tutti i finanziatori e va attualizzato al WACC. Per una società indebitata Re > WACC, quindi usare Re sottostima l’EV. L’attualizzazione a Re è corretta solo per il FCF levered.'
        }
      },
      {
        id: 'cf-wacc-q6',
        kind: 'multi',
        topic: 'wacc',
        difficulty: 3,
        objective: { en: 'Predict how WACC inputs move.', it: 'Prevedere come si muovono gli input del WACC.' },
        prompt: {
          en: 'Which of these would, all else equal, INCREASE a company’s WACC? Select all that apply.',
          it: 'Quali di questi eventi, a parità di altre condizioni, AUMENTEREBBERO il WACC di una società? Seleziona tutte le risposte corrette.'
        },
        choices: [
          { en: 'A rise in government bond yields', it: 'Un rialzo dei rendimenti dei titoli di Stato' },
          { en: 'A cut in the corporate tax rate', it: 'Una riduzione dell’aliquota sulle società' },
          { en: 'A credit rating downgrade', it: 'Un downgrade del rating' },
          { en: 'A fall in the equity risk premium', it: 'Una riduzione del premio per il rischio azionario' },
          { en: 'A shift to a business with lower unlevered beta', it: 'Lo spostamento verso un business con beta unlevered più basso' }
        ],
        correct: [0, 1, 2],
        explanation: {
          en: 'Higher rf raises both Re and Kd; a lower tax rate shrinks the tax shield, raising after-tax Kd; a downgrade widens credit spreads. A lower ERP or lower business risk reduce Re and therefore WACC.',
          it: 'Un rf più alto aumenta sia Re sia Kd; un’aliquota più bassa riduce lo scudo fiscale, alzando il Kd netto; un downgrade allarga gli spread. Un ERP più basso o un minor rischio operativo riducono Re e quindi il WACC.'
        }
      }
    ],
    flashcards: [
      { id: 'fc-cf-wacc-1', topic: 'wacc', front: { en: 'WACC formula?', it: 'Formula del WACC?' }, back: { en: 'E/V × Re + D/V × Kd × (1 − t) + P/V × Kp', it: 'E/V × Re + D/V × Kd × (1 − t) + P/V × Kp' } },
      { id: 'fc-cf-wacc-2', topic: 'wacc', front: { en: 'Market or book weights in WACC?', it: 'Pesi di mercato o contabili nel WACC?' }, back: { en: 'Market values (ideally at the target capital structure); book debt is an acceptable proxy if trading near par.', it: 'Valori di mercato (idealmente alla struttura target); il debito contabile è una proxy accettabile se quota vicino alla pari.' } },
      { id: 'fc-cf-wacc-3', topic: 'wacc', front: { en: 'Which cash flow is discounted at WACC, and what value results?', it: 'Quale flusso si attualizza al WACC e quale valore si ottiene?' }, back: { en: 'Unlevered free cash flow → enterprise value.', it: 'Free cash flow unlevered → enterprise value.' } },
      { id: 'fc-cf-wacc-4', topic: 'wacc', front: { en: 'Which cash flow is discounted at the cost of equity?', it: 'Quale flusso si attualizza al costo dell’equity?' }, back: { en: 'Levered free cash flow (to equity) → equity value.', it: 'Free cash flow levered (per gli azionisti) → equity value.' } },
      { id: 'fc-cf-wacc-5', topic: 'wacc', front: { en: 'Why is only the cost of debt tax-adjusted in WACC?', it: 'Perché nel WACC si corregge per le imposte solo il costo del debito?' }, back: { en: 'Interest is tax-deductible; dividends (common or preferred) are paid from after-tax profit.', it: 'Gli interessi sono deducibili; i dividendi (ordinari o privilegiati) si pagano dall’utile al netto delle imposte.' } }
    ]
  },

  /* ====================================================================== */
  /* CF5 — Capital Structure and Payout                                      */
  /* ====================================================================== */
  {
    id: 'cf-capital-structure',
    academyId: 'corporate-finance',
    moduleId: 'CF5',
    mode: 'deep',
    minutes: 18,
    difficulty: 3,
    reviewed: '2026-10',
    objective: {
      en: 'Explain Modigliani–Miller with and without taxes, value the interest tax shield, apply trade-off and pecking-order theories, and show how leverage magnifies ROE and EPS volatility.',
      it: 'Spiegare Modigliani–Miller con e senza imposte, valutare lo scudo fiscale degli interessi, applicare le teorie del trade-off e del pecking order e mostrare come la leva amplifichi la volatilità di ROE ed EPS.'
    },
    screens: [
      {
        type: 'intuition',
        title: { en: 'Does slicing the pizza change its size?', it: 'Tagliare la pizza ne cambia la grandezza?' },
        body: {
          en: 'A company’s assets generate cash flows. Capital structure decides how those cash flows are **split** between lenders and shareholders.\n\nModigliani and Miller’s (1958) insight: in a perfect market, how you slice the pizza does not change its size — firm value depends on the **assets**, not the financing mix. Everything interesting about capital structure comes from the **imperfections**: taxes, distress costs, information asymmetry and agency problems.',
          it: 'Le attività di un’azienda generano flussi di cassa. La struttura finanziaria decide come questi flussi vengono **ripartiti** tra creditori e azionisti.\n\nL’intuizione di Modigliani e Miller (1958): in un mercato perfetto, il modo in cui si taglia la pizza non ne cambia la grandezza — il valore dell’impresa dipende dalle **attività**, non dal mix di finanziamento. Tutto ciò che rende interessante la struttura finanziaria nasce dalle **imperfezioni**: imposte, costi di dissesto, asimmetria informativa e problemi di agenzia.'
        }
      },
      {
        type: 'technical',
        title: { en: 'MM without taxes', it: 'MM senza imposte' },
        body: {
          en: 'Assumptions: no taxes, no bankruptcy costs, no transaction costs, investors can borrow on the same terms as firms, symmetric information.\n\n- **Proposition I**: VL = VU. If levered firms were worth more, investors could replicate leverage themselves ("homemade leverage") and arbitrage the difference away.\n- **Proposition II**: Re rises linearly with D/E. Debt looks cheap, but adding it makes equity riskier, and the higher Re exactly offsets the cheap debt — **WACC stays constant**.\n\nThe "cheap debt lowers WACC" argument is therefore wrong in a world without taxes.',
          it: 'Ipotesi: niente imposte, niente costi di fallimento, niente costi di transazione, investitori che si indebitano alle stesse condizioni delle imprese, informazione simmetrica.\n\n- **Proposizione I**: VL = VU. Se le imprese indebitate valessero di più, gli investitori potrebbero replicare la leva da soli ("homemade leverage") ed eliminare la differenza con l’arbitraggio.\n- **Proposizione II**: Re cresce linearmente con D/E. Il debito sembra economico, ma rende l’equity più rischiosa, e l’aumento di Re compensa esattamente il debito a buon mercato — **il WACC resta costante**.\n\nL’argomento "il debito costa poco, quindi abbassa il WACC" è dunque sbagliato in un mondo senza imposte.'
        }
      },
      {
        type: 'formula',
        formulas: [
          { name: { en: 'MM I (no taxes)', it: 'MM I (senza imposte)' }, expr: 'VL = VU' },
          { name: { en: 'MM II (no taxes)', it: 'MM II (senza imposte)' }, expr: 'Re = Ru + (Ru − Rd) × D/E' },
          { name: { en: 'MM I with corporate taxes (permanent debt)', it: 'MM I con imposte societarie (debito permanente)' }, expr: 'VL = VU + t × D' },
          { name: { en: 'MM II with taxes', it: 'MM II con imposte' }, expr: 'Re = Ru + (Ru − Rd) × (1 − t) × D/E' },
          {
            name: { en: 'Trade-off theory', it: 'Teoria del trade-off' },
            expr: 'VL = VU + PV(tax shields) − PV(expected distress costs)',
            vars: [{ sym: 'Ru', desc: { en: 'Cost of capital of the unlevered firm (asset return)', it: 'Costo del capitale dell’impresa non indebitata (rendimento delle attività)' } }]
          }
        ],
        note: {
          en: 'Tax shield derivation: permanent debt D at rate Rd saves t × Rd × D of tax every year; discounting that perpetuity at Rd (it is as risky as the debt) gives t × Rd × D / Rd = t × D.',
          it: 'Derivazione dello scudo fiscale: un debito permanente D al tasso Rd fa risparmiare ogni anno t × Rd × D di imposte; attualizzando questa perpetuità a Rd (ha lo stesso rischio del debito) si ottiene t × Rd × D / Rd = t × D.'
        }
      },
      {
        type: 'example',
        title: { en: 'MM in numbers', it: 'MM in numeri' },
        body: {
          en: 'Firm with Ru = 10%, Rd = 5%, D/E = 0.5.\n\n- **No taxes**: Re = 10% + 5% × 0.5 = **12.5%**; WACC = ⅔ × 12.5% + ⅓ × 5% = **10%** — unchanged.\n- **With 25% tax**: Re = 10% + 5% × 0.75 × 0.5 = **11.875%**; WACC = ⅔ × 11.875% + ⅓ × 5% × 0.75 = **9.17%** — lower, because of the tax shield.\n- **Value**: if VU = €1,000m and the firm adds €400m of permanent debt, VL = 1,000 + 25% × 400 = **€1,100m**.',
          it: 'Impresa con Ru = 10%, Rd = 5%, D/E = 0,5.\n\n- **Senza imposte**: Re = 10% + 5% × 0,5 = **12,5%**; WACC = ⅔ × 12,5% + ⅓ × 5% = **10%** — invariato.\n- **Con imposte al 25%**: Re = 10% + 5% × 0,75 × 0,5 = **11,875%**; WACC = ⅔ × 11,875% + ⅓ × 5% × 0,75 = **9,17%** — più basso, grazie allo scudo fiscale.\n- **Valore**: se VU = €1.000m e l’impresa aggiunge €400m di debito permanente, VL = 1.000 + 25% × 400 = **€1.100m**.'
        }
      },
      {
        type: 'technical',
        title: { en: 'Trade-off vs pecking order', it: 'Trade-off vs pecking order' },
        body: {
          en: '**Static trade-off**: add debt until the marginal tax benefit equals the marginal expected cost of distress. Predicts moderate leverage for firms with stable cash flows and tangible assets (utilities, infrastructure) and low leverage for volatile, intangible-heavy firms (tech, biotech).\n\n**Pecking order** (Myers & Majluf, 1984): managers know more than investors, so issuing equity signals overvaluation and the share price falls. Firms prefer **internal cash → debt → equity (last resort)**. Explains why profitable firms often have low leverage.\n\nReal firms reflect both, plus **agency** effects: debt disciplines managers by committing free cash flow (Jensen).',
          it: '**Trade-off statico**: si aggiunge debito finché il beneficio fiscale marginale eguaglia il costo atteso marginale del dissesto. Prevede leva moderata per imprese con flussi stabili e attività tangibili (utility, infrastrutture) e leva bassa per imprese volatili e ricche di intangibili (tech, biotech).\n\n**Pecking order** (Myers & Majluf, 1984): il management ne sa più degli investitori, quindi emettere azioni segnala sopravvalutazione e il prezzo scende. Le imprese preferiscono **autofinanziamento → debito → equity (come ultima risorsa)**. Spiega perché le imprese molto redditizie hanno spesso poca leva.\n\nLe imprese reali riflettono entrambe, più gli effetti di **agenzia**: il debito disciplina il management vincolando il free cash flow (Jensen).'
        }
      },
      {
        type: 'example',
        title: { en: 'Leverage magnifies ROE and EPS — both ways', it: 'La leva amplifica ROE ed EPS — in entrambe le direzioni' },
        body: {
          en: 'Assets €1,000m, tax 25%. All-equity: 100m shares. Levered: €500m debt at 6% and 50m shares. Below EBIT of €60m (ROIC = 4.5% = after-tax Kd), leverage hurts; above it, it helps.',
          it: 'Attivo €1.000m, aliquota 25%. Solo equity: 100m di azioni. Con leva: €500m di debito al 6% e 50m di azioni. Sotto un EBIT di €60m (ROIC = 4,5% = Kd netto) la leva penalizza; sopra, avvantaggia.'
        },
        table: {
          headers: [
            { en: 'Scenario', it: 'Scenario' },
            { en: 'EBIT', it: 'EBIT' },
            { en: 'ROE unlevered', it: 'ROE senza leva' },
            { en: 'ROE levered', it: 'ROE con leva' },
            { en: 'EPS unlev. / lev. (€)', it: 'EPS senza / con leva (€)' }
          ],
          rows: [
            [{ en: 'Recession', it: 'Recessione' }, '40', '3.0%', '1.5%', '0.30 / 0.15'],
            [{ en: 'Normal', it: 'Normale' }, '120', '9.0%', '13.5%', '0.90 / 1.35'],
            [{ en: 'Boom', it: 'Espansione' }, '200', '15.0%', '25.5%', '1.50 / 2.55']
          ]
        }
      },
      {
        type: 'realworld',
        body: {
          en: 'Capital structure advice is core IB work: rating advisory (how much debt keeps us investment grade?), leveraged recapitalisations, hybrid capital, and of course LBOs, where sponsors push leverage to the limit lenders accept (often expressed as a multiple of EBITDA) to amplify equity returns. Utilities and infrastructure carry high leverage because cash flows are stable; software companies often hold net cash.',
          it: 'La consulenza sulla struttura finanziaria è lavoro core in IB: rating advisory (quanto debito ci mantiene investment grade?), ricapitalizzazioni a leva, capitale ibrido e naturalmente gli LBO, dove gli sponsor spingono la leva al massimo accettato dai finanziatori (spesso espresso come multiplo dell’EBITDA) per amplificare i rendimenti dell’equity. Utility e infrastrutture hanno leva elevata perché i flussi sono stabili; le società di software hanno spesso cassa netta.'
        }
      },
      { type: 'exercise', questionId: 'cf-cs-q1' },
      { type: 'exercise', questionId: 'cf-cs-q2' },
      { type: 'exercise', questionId: 'cf-cs-q4' },
      { type: 'exercise', questionId: 'cf-cs-q5' },
      {
        type: 'interview',
        question: {
          en: 'Debt is cheaper than equity. So why don’t companies finance themselves entirely with debt?',
          it: 'Il debito costa meno dell’equity. Allora perché le aziende non si finanziano interamente a debito?'
        },
        answer: {
          en: 'Because adding debt changes the other costs. Per Modigliani–Miller, more debt makes equity riskier, so the cost of equity rises and offsets much of the benefit; what remains is the tax shield. But as leverage rises, the probability of financial distress grows — with direct costs like legal and advisory fees and indirect costs like lost customers, supplier pressure and underinvestment — and the cost of debt itself increases. Interest deductibility is also capped by rules such as the EU 30%-of-EBITDA limit. The optimal structure balances the tax shield against expected distress costs, which is why the WACC curve is U-shaped.',
          it: 'Perché aggiungere debito modifica gli altri costi. Secondo Modigliani–Miller, più debito rende l’equity più rischiosa, quindi il costo dell’equity sale e compensa gran parte del vantaggio; ciò che resta è lo scudo fiscale. Ma all’aumentare della leva cresce la probabilità di dissesto — con costi diretti come spese legali e di consulenza e costi indiretti come perdita di clienti, pressione dei fornitori e sotto-investimento — e aumenta lo stesso costo del debito. Inoltre la deducibilità degli interessi è limitata da regole come il tetto UE del 30% dell’EBITDA. La struttura ottimale bilancia scudo fiscale e costi attesi di dissesto, ed è per questo che la curva del WACC ha forma a U.'
        }
      },
      {
        type: 'mistakes',
        items: [
          { en: 'Claiming debt lowers WACC "because it is cheaper" — without taxes, the higher cost of equity exactly offsets it.', it: 'Sostenere che il debito riduce il WACC "perché costa meno" — senza imposte, l’aumento del costo dell’equity lo compensa esattamente.' },
          { en: 'Forgetting that higher ROE from leverage comes with higher risk, so it is not automatically value-creating.', it: 'Dimenticare che il ROE più alto dovuto alla leva comporta più rischio, quindi non crea automaticamente valore.' },
          { en: 'Valuing the tax shield as t × D for debt that will be repaid quickly — t × D assumes permanent debt.', it: 'Valutare lo scudo fiscale come t × D per un debito che sarà rimborsato rapidamente — t × D presuppone un debito permanente.' },
          { en: 'Confusing pecking order (information asymmetry) with trade-off (taxes vs distress).', it: 'Confondere pecking order (asimmetria informativa) e trade-off (imposte vs dissesto).' }
        ]
      },
      {
        type: 'summary',
        items: [
          { en: 'MM without taxes: capital structure is irrelevant; Re rises with leverage, WACC constant.', it: 'MM senza imposte: la struttura finanziaria è irrilevante; Re sale con la leva, il WACC resta costante.' },
          { en: 'With taxes: VL = VU + tD; WACC falls with leverage.', it: 'Con imposte: VL = VU + tD; il WACC scende con la leva.' },
          { en: 'Trade-off: tax shield vs distress costs → optimal leverage.', it: 'Trade-off: scudo fiscale vs costi di dissesto → leva ottimale.' },
          { en: 'Pecking order: internal funds, then debt, then equity.', it: 'Pecking order: autofinanziamento, poi debito, poi equity.' },
          { en: 'Leverage magnifies ROE/EPS in both directions.', it: 'La leva amplifica ROE/EPS in entrambe le direzioni.' }
        ]
      }
    ],
    questions: [
      {
        id: 'cf-cs-q1',
        kind: 'numeric',
        topic: 'modigliani-miller',
        difficulty: 2,
        objective: { en: 'Apply MM Proposition II without taxes.', it: 'Applicare la Proposizione II di MM senza imposte.' },
        prompt: {
          en: 'No taxes. Unlevered cost of capital 10%, cost of debt 5%, D/E = 0.5. What is the cost of equity (%)?',
          it: 'Niente imposte. Costo del capitale unlevered 10%, costo del debito 5%, D/E = 0,5. Qual è il costo dell’equity (%)?'
        },
        answer: 12.5,
        unit: '%',
        tolerance: { abs: 0.01 },
        verify: { fn: 'sum', args: [10, 2.5] },
        explanation: {
          en: 'Re = 10% + (10% − 5%) × 0.5 = 12.5%. Check: WACC = ⅔ × 12.5% + ⅓ × 5% = 10% = Ru — leverage did not change WACC.',
          it: 'Re = 10% + (10% − 5%) × 0,5 = 12,5%. Verifica: WACC = ⅔ × 12,5% + ⅓ × 5% = 10% = Ru — la leva non ha modificato il WACC.'
        }
      },
      {
        id: 'cf-cs-q2',
        kind: 'numeric',
        topic: 'tax-shield',
        difficulty: 2,
        objective: { en: 'Value a levered firm under MM with taxes.', it: 'Valutare un’impresa indebitata secondo MM con imposte.' },
        prompt: {
          en: 'An all-equity firm is worth €1,000m. It issues €400m of permanent debt and uses the proceeds to buy back shares. Tax rate 25%. Under MM with taxes, what is the levered firm value (€m)?',
          it: 'Un’impresa senza debito vale €1.000m. Emette €400m di debito permanente e usa i proventi per riacquistare azioni. Aliquota 25%. Secondo MM con imposte, quanto vale l’impresa indebitata (€m)?'
        },
        answer: 1100,
        unit: '€m',
        verify: { fn: 'sum', args: [1000, 100] },
        explanation: {
          en: 'PV of tax shield = t × D = 25% × 400 = 100; VL = 1,000 + 100 = 1,100. Equity is now worth 1,100 − 400 = 700, and shareholders captured the 100 of value (they also received €400m of cash in the buyback).',
          it: 'VA dello scudo fiscale = t × D = 25% × 400 = 100; VL = 1.000 + 100 = 1.100. L’equity vale ora 1.100 − 400 = 700, e gli azionisti hanno catturato i 100 di valore (oltre ad aver ricevuto €400m di cassa nel buyback).'
        }
      },
      {
        id: 'cf-cs-q3',
        kind: 'numeric',
        topic: 'modigliani-miller',
        difficulty: 3,
        objective: { en: 'Show that WACC falls with leverage when interest is deductible.', it: 'Mostrare che il WACC scende con la leva quando gli interessi sono deducibili.' },
        prompt: {
          en: 'Ru = 10%, Rd = 5%, tax 25%, D/E = 0.5 (so E/V = ⅔, D/V = ⅓). Re under MM with taxes is 11.875%. What is the WACC (%, two decimals)?',
          it: 'Ru = 10%, Rd = 5%, aliquota 25%, D/E = 0,5 (quindi E/V = ⅔, D/V = ⅓). Re secondo MM con imposte è 11,875%. Qual è il WACC (%, due decimali)?'
        },
        answer: 9.17,
        unit: '%',
        tolerance: { abs: 0.01 },
        verify: { fn: 'wacc', args: [200, 100, 11.875, 5, 0.25] },
        explanation: {
          en: '⅔ × 11.875% + ⅓ × 5% × 0.75 = 7.917% + 1.25% = 9.17%, below Ru = 10%. Equivalent shortcut for permanent debt: WACC = Ru × (1 − t × D/V) = 10% × (1 − 0.25/3) = 9.17%.',
          it: '⅔ × 11,875% + ⅓ × 5% × 0,75 = 7,917% + 1,25% = 9,17%, inferiore a Ru = 10%. Scorciatoia equivalente per debito permanente: WACC = Ru × (1 − t × D/V) = 10% × (1 − 0,25/3) = 9,17%.'
        }
      },
      {
        id: 'cf-cs-q4',
        kind: 'grid',
        topic: 'financial-leverage',
        difficulty: 2,
        objective: { en: 'Compute levered ROE and EPS across scenarios.', it: 'Calcolare ROE ed EPS con leva nei diversi scenari.' },
        prompt: {
          en: 'Assets €1,000m funded by €500m debt at 6% and €500m equity (50m shares); tax 25%. Fill in levered net income (€m) and EPS (€) for each EBIT scenario.',
          it: 'Attivo €1.000m finanziato con €500m di debito al 6% e €500m di equity (50m di azioni); aliquota 25%. Completa utile netto con leva (€m) ed EPS (€) per ogni scenario di EBIT.'
        },
        columns: [
          { en: 'Scenario', it: 'Scenario' },
          { en: 'EBIT', it: 'EBIT' },
          { en: 'Net income', it: 'Utile netto' },
          { en: 'EPS', it: 'EPS' }
        ],
        rows: [
          { label: { en: 'Recession', it: 'Recessione' }, cells: [40, { answer: 7.5, tolerance: { abs: 0.05 }, verify: { fn: 'product', args: [10, 0.75] } }, { answer: 0.15, tolerance: { abs: 0.005 }, verify: { fn: 'ratio', args: [7.5, 50] } }] },
          { label: { en: 'Normal', it: 'Normale' }, cells: [120, { answer: 67.5, tolerance: { abs: 0.05 }, verify: { fn: 'product', args: [90, 0.75] } }, { answer: 1.35, tolerance: { abs: 0.005 }, verify: { fn: 'ratio', args: [67.5, 50] } }] },
          { label: { en: 'Boom', it: 'Espansione' }, cells: [200, { answer: 127.5, tolerance: { abs: 0.05 }, verify: { fn: 'product', args: [170, 0.75] } }, { answer: 2.55, tolerance: { abs: 0.005 }, verify: { fn: 'ratio', args: [127.5, 50] } }] }
        ],
        explanation: {
          en: 'Interest = 500 × 6% = 30 in every scenario. NI = (EBIT − 30) × 0.75. EBIT moves ±67% around the normal case, but levered EPS moves −89% / +89%: fixed interest makes equity returns more volatile.',
          it: 'Interessi = 500 × 6% = 30 in ogni scenario. UN = (EBIT − 30) × 0,75. L’EBIT varia del ±67% rispetto al caso normale, ma l’EPS con leva varia del −89% / +89%: gli interessi fissi rendono i rendimenti dell’equity più volatili.'
        }
      },
      {
        id: 'cf-cs-q5',
        kind: 'mcq',
        topic: 'capital-structure-theory',
        difficulty: 2,
        objective: { en: 'Apply the pecking-order theory.', it: 'Applicare la teoria del pecking order.' },
        prompt: {
          en: 'A company announces a large equity issue to fund a project, and its share price falls 4% on the news. Which theory best explains the reaction?',
          it: 'Una società annuncia un grande aumento di capitale per finanziare un progetto e il titolo scende del 4% alla notizia. Quale teoria spiega meglio la reazione?'
        },
        choices: [
          { en: 'MM without taxes — financing choices are irrelevant', it: 'MM senza imposte — le scelte di finanziamento sono irrilevanti' },
          { en: 'Trade-off theory — the company lost its tax shield', it: 'Teoria del trade-off — la società ha perso lo scudo fiscale' },
          { en: 'Pecking order — investors infer management thinks the shares are overvalued', it: 'Pecking order — gli investitori deducono che il management ritenga le azioni sopravvalutate' },
          { en: 'Clientele theory — dividend investors sold the shares', it: 'Teoria della clientela — gli investitori da dividendo hanno venduto' }
        ],
        correct: 2,
        explanation: {
          en: 'Under information asymmetry, managers issue equity when they believe it is overpriced, so the announcement is read as a negative signal. MM would predict no reaction; the tax-shield effect does not explain a sharp announcement drop; clientele theory concerns dividend policy.',
          it: 'In presenza di asimmetria informativa il management emette azioni quando le ritiene sopravvalutate, quindi l’annuncio è letto come un segnale negativo. MM non prevederebbe reazioni; l’effetto sullo scudo fiscale non spiega un calo così netto all’annuncio; la teoria della clientela riguarda la politica dei dividendi.'
        }
      },
      {
        id: 'cf-cs-q6',
        kind: 'numeric',
        topic: 'financial-leverage',
        difficulty: 3,
        objective: { en: 'Find the EBIT at which leverage is neutral for ROE.', it: 'Trovare l’EBIT al quale la leva è neutrale per il ROE.' },
        prompt: {
          en: 'In the same setting (assets €1,000m, debt at 6%, tax 25%), at what EBIT (€m) are ROE and EPS identical with and without leverage?',
          it: 'Nello stesso contesto (attivo €1.000m, debito al 6%, aliquota 25%), a quale EBIT (€m) ROE ed EPS sono identici con e senza leva?'
        },
        answer: 60,
        unit: '€m',
        verify: { fn: 'product', args: [1000, 0.06] },
        explanation: {
          en: 'Leverage is neutral when the return on assets before tax equals the pre-tax cost of debt (equivalently ROIC = after-tax Kd = 4.5%): EBIT / 1,000 = 6% → EBIT = 60. Both structures then give ROE = 4.5% and EPS = €0.45.',
          it: 'La leva è neutrale quando il rendimento ante imposte delle attività eguaglia il costo lordo del debito (cioè ROIC = Kd netto = 4,5%): EBIT / 1.000 = 6% → EBIT = 60. Entrambe le strutture danno allora ROE = 4,5% ed EPS = €0,45.'
        }
      }
    ],
    flashcards: [
      { id: 'fc-cf-cs-1', topic: 'modigliani-miller', front: { en: 'MM Proposition I without taxes?', it: 'Proposizione I di MM senza imposte?' }, back: { en: 'Firm value is independent of capital structure: VL = VU.', it: 'Il valore dell’impresa è indipendente dalla struttura finanziaria: VL = VU.' } },
      { id: 'fc-cf-cs-2', topic: 'modigliani-miller', front: { en: 'MM Proposition II (with taxes)?', it: 'Proposizione II di MM (con imposte)?' }, back: { en: 'Re = Ru + (Ru − Rd)(1 − t) D/E.', it: 'Re = Ru + (Ru − Rd)(1 − t) D/E.' } },
      { id: 'fc-cf-cs-3', topic: 'tax-shield', front: { en: 'PV of the tax shield on permanent debt?', it: 'VA dello scudo fiscale su debito permanente?' }, back: { en: 't × D (annual saving t × Rd × D discounted at Rd as a perpetuity).', it: 't × D (risparmio annuo t × Rd × D attualizzato a Rd come perpetuità).' } },
      { id: 'fc-cf-cs-4', topic: 'capital-structure-theory', front: { en: 'Pecking order of financing?', it: 'Ordine gerarchico delle fonti (pecking order)?' }, back: { en: 'Internal funds → debt → equity, driven by information asymmetry (Myers & Majluf, 1984).', it: 'Autofinanziamento → debito → equity, per effetto dell’asimmetria informativa (Myers & Majluf, 1984).' } },
      { id: 'fc-cf-cs-5', topic: 'capital-structure-theory', front: { en: 'Trade-off theory in one line?', it: 'Teoria del trade-off in una riga?' }, back: { en: 'Optimal leverage balances the PV of tax shields against the PV of expected financial distress costs.', it: 'La leva ottimale bilancia il VA degli scudi fiscali e il VA dei costi attesi di dissesto.' } }
    ],
    sources: [
      { label: 'F. Modigliani & M. Miller (1958), "The Cost of Capital, Corporation Finance and the Theory of Investment", American Economic Review 48(3)' },
      { label: 'F. Modigliani & M. Miller (1963), "Corporate Income Taxes and the Cost of Capital: A Correction", American Economic Review 53(3)' },
      { label: 'S. Myers & N. Majluf (1984), "Corporate Financing and Investment Decisions When Firms Have Information That Investors Do Not Have", Journal of Financial Economics 13(2)' }
    ]
  },

  {
    id: 'cf-dividend-policy',
    academyId: 'corporate-finance',
    moduleId: 'CF5',
    mode: 'quick',
    minutes: 10,
    difficulty: 2,
    reviewed: '2026-10',
    objective: {
      en: 'Compare dividends and share buybacks, explain dividend irrelevance, signalling and clientele effects, and compute the EPS impact of a buyback.',
      it: 'Confrontare dividendi e riacquisto di azioni proprie, spiegare irrilevanza dei dividendi, effetti segnaletici e di clientela, e calcolare l’impatto di un buyback sull’EPS.'
    },
    screens: [
      {
        type: 'intuition',
        title: { en: 'Two ways to hand cash back', it: 'Due modi per restituire la cassa' },
        body: {
          en: 'When a company has more cash than good projects, it can return it by paying a **dividend** (every shareholder gets cash pro rata) or by **buying back shares** (only those who sell get cash; the rest own a larger slice).\n\nIn a frictionless world the choice does not affect shareholder wealth: €10 of dividend lowers the share price by €10. In reality taxes, signalling and flexibility make the choice matter.',
          it: 'Quando un’azienda ha più cassa che progetti validi, può restituirla pagando un **dividendo** (ogni azionista riceve cassa pro quota) oppure **riacquistando azioni** (solo chi vende riceve cassa; gli altri possiedono una fetta più grande).\n\nIn un mondo senza attriti la scelta non incide sulla ricchezza degli azionisti: €10 di dividendo riducono il prezzo dell’azione di €10. Nella realtà imposte, segnali e flessibilità rendono la scelta rilevante.'
        }
      },
      {
        type: 'technical',
        title: { en: 'Theory and practice', it: 'Teoria e pratica' },
        body: {
          en: '- **MM dividend irrelevance** (1961): with investment policy fixed, payout policy does not change firm value; investors can create "homemade dividends" by selling shares.\n- **Signalling**: dividends are sticky — managers smooth them (Lintner) and cut only when forced — so an increase signals confidence and a cut is punished heavily. Buybacks are seen as more flexible and less of a commitment.\n- **Clientele effects**: income-oriented or tax-advantaged investors prefer dividends; others prefer buybacks (capital gains, often taxed later).\n- **Agency**: paying out cash limits managers’ scope for empire building.',
          it: '- **Irrilevanza dei dividendi di MM** (1961): a parità di politica d’investimento, la politica di distribuzione non cambia il valore dell’impresa; gli investitori possono crearsi "dividendi fatti in casa" vendendo azioni.\n- **Segnalazione**: i dividendi sono vischiosi — il management li stabilizza (Lintner) e li taglia solo se costretto — quindi un aumento segnala fiducia e un taglio viene punito duramente. I buyback sono percepiti come più flessibili e meno vincolanti.\n- **Effetti di clientela**: investitori orientati al reddito o fiscalmente avvantaggiati preferiscono i dividendi; altri preferiscono i buyback (plusvalenze, spesso tassate più tardi).\n- **Agenzia**: distribuire cassa limita lo spazio del management per "costruire imperi".'
        }
      },
      {
        type: 'formula',
        formulas: [
          { name: { en: 'Payout ratio', it: 'Payout ratio' }, expr: 'Payout = DPS / EPS = Dividends / Net income' },
          { name: { en: 'Dividend yield', it: 'Dividend yield' }, expr: 'Dividend yield = DPS / Share price' },
          { name: { en: 'Ex-dividend price (no taxes)', it: 'Prezzo ex-dividendo (senza imposte)' }, expr: 'P_ex ≈ P_cum − DPS' },
          {
            name: { en: 'Buyback EPS test', it: 'Test sull’EPS del buyback' },
            expr: 'Accretive if earnings yield (EPS / P) > after-tax cost of funding',
            vars: [{ sym: 'EPS / P', desc: { en: 'Inverse of the P/E ratio', it: 'Inverso del rapporto P/E' } }]
          }
        ],
        note: {
          en: 'Pro forma EPS = (NI − after-tax cost of funding) / (shares − shares repurchased), where shares repurchased = amount / price.',
          it: 'EPS pro forma = (UN − costo netto del finanziamento) / (azioni − azioni riacquistate), dove azioni riacquistate = importo / prezzo.'
        }
      },
      {
        type: 'example',
        title: { en: 'Debt-funded buyback at Zeta S.p.A.', it: 'Buyback finanziato a debito in Zeta S.p.A.' },
        body: {
          en: 'NI €500m, 100m shares, price €60 (P/E 12 → earnings yield 8.3%). Zeta borrows €600m at 5% (tax 25%) to buy back shares. EPS rises 6.1% because 8.3% > 3.75% — but leverage and risk also rise, so the P/E should fall: accretion is not value creation.',
          it: 'UN €500m, 100m di azioni, prezzo €60 (P/E 12 → earnings yield 8,3%). Zeta si indebita per €600m al 5% (aliquota 25%) per riacquistare azioni. L’EPS sale del 6,1% perché 8,3% > 3,75% — ma aumentano anche leva e rischio, quindi il P/E dovrebbe scendere: l’accrescimento non è creazione di valore.'
        },
        table: {
          headers: [
            { en: 'Line', it: 'Voce' },
            { en: 'Before', it: 'Prima' },
            { en: 'After', it: 'Dopo' }
          ],
          rows: [
            [{ en: 'Net income (€m)', it: 'Utile netto (€m)' }, '500.0', '500 − 600 × 5% × 0.75 = 477.5'],
            [{ en: 'Shares (m)', it: 'Azioni (m)' }, '100', '100 − 600/60 = 90'],
            ['EPS (€)', '5.00', '5.31']
          ],
          totalRows: [2]
        }
      },
      {
        type: 'realworld',
        body: {
          en: 'US companies return more cash via buybacks than dividends; European companies have traditionally relied more on dividends, though buybacks have grown. In Italy, buying back own shares requires shareholder authorisation (art. 2357 Civil Code, for up to 18 months) within distributable profits and available reserves; in the EU, the Market Abuse Regulation (art. 5) provides a safe harbour for buyback programmes meeting its conditions. ECM and corporate broking teams advise on structure, execution and disclosure.',
          it: 'Le società statunitensi restituiscono più cassa con i buyback che con i dividendi; quelle europee si sono tradizionalmente basate di più sui dividendi, anche se i buyback sono cresciuti. In Italia l’acquisto di azioni proprie richiede l’autorizzazione dell’assemblea (art. 2357 c.c., per un massimo di 18 mesi) nei limiti degli utili distribuibili e delle riserve disponibili; nell’UE il Regolamento sugli abusi di mercato (art. 5) prevede un’esenzione (safe harbour) per i programmi di riacquisto che ne rispettano le condizioni. I team di ECM e corporate broking assistono su struttura, esecuzione e comunicazione.'
        }
      },
      { type: 'exercise', questionId: 'cf-div-q3' },
      { type: 'exercise', questionId: 'cf-div-q4' },
      { type: 'exercise', questionId: 'cf-div-q5' },
      {
        type: 'interview',
        question: { en: 'Dividends or buybacks — which is better for shareholders?', it: 'Dividendi o buyback — cosa è meglio per gli azionisti?' },
        answer: {
          en: 'In theory neither: under MM, payout policy is irrelevant if investment policy is fixed. In practice it depends. Dividends suit stable, recurring cash flows and signal commitment, but are hard to cut. Buybacks are flexible, can be timed when the shares look cheap, may be more tax-efficient for some investors, and boost EPS when the earnings yield exceeds the after-tax cost of funding. But a buyback creates value only if shares are bought below intrinsic value; EPS accretion alone proves nothing.',
          it: 'In teoria nessuno dei due: secondo MM la politica di distribuzione è irrilevante se la politica d’investimento è data. In pratica dipende. I dividendi si adattano a flussi stabili e ricorrenti e segnalano impegno, ma sono difficili da tagliare. I buyback sono flessibili, si possono effettuare quando il titolo sembra a sconto, possono essere più efficienti fiscalmente per alcuni investitori e accrescono l’EPS quando l’earnings yield supera il costo netto del finanziamento. Ma un buyback crea valore solo se le azioni sono comprate sotto il valore intrinseco; l’accrescimento dell’EPS da solo non prova nulla.'
        }
      },
      {
        type: 'mistakes',
        items: [
          { en: 'Thinking dividends make shareholders richer: ex-dividend, the share price falls by roughly the dividend.', it: 'Pensare che i dividendi arricchiscano gli azionisti: allo stacco il prezzo scende all’incirca del dividendo.' },
          { en: 'Equating EPS accretion from a buyback with value creation.', it: 'Identificare l’accrescimento dell’EPS da buyback con la creazione di valore.' },
          { en: 'Forgetting the lost interest on cash (or new interest on debt) when computing pro forma EPS.', it: 'Dimenticare gli interessi persi sulla cassa (o i nuovi interessi sul debito) nel calcolo dell’EPS pro forma.' },
          { en: 'Ignoring that a dividend cut is a strong negative signal, so initiating a dividend is a long-term commitment.', it: 'Ignorare che un taglio del dividendo è un forte segnale negativo, quindi avviare un dividendo è un impegno di lungo periodo.' }
        ]
      },
      {
        type: 'summary',
        items: [
          { en: 'MM: payout policy is irrelevant in perfect markets.', it: 'MM: in mercati perfetti la politica di distribuzione è irrilevante.' },
          { en: 'Dividends are sticky and signal confidence; buybacks are flexible.', it: 'I dividendi sono vischiosi e segnalano fiducia; i buyback sono flessibili.' },
          { en: 'Buyback is EPS-accretive if earnings yield > after-tax funding cost.', it: 'Il buyback accresce l’EPS se earnings yield > costo netto del finanziamento.' },
          { en: 'Value is created only by buying shares below intrinsic value.', it: 'Si crea valore solo comprando azioni sotto il valore intrinseco.' }
        ]
      }
    ],
    questions: [
      {
        id: 'cf-div-q1',
        kind: 'numeric',
        topic: 'dividends',
        difficulty: 1,
        objective: { en: 'Compute a payout ratio.', it: 'Calcolare un payout ratio.' },
        prompt: {
          en: 'EPS is €5.00 and the company pays a dividend of €2.00 per share. What is the payout ratio (%)?',
          it: 'L’EPS è €5,00 e la società paga un dividendo di €2,00 per azione. Qual è il payout ratio (%)?'
        },
        answer: 40,
        unit: '%',
        tolerance: { abs: 0.05 },
        verify: { fn: 'ratio', args: [200, 5] },
        explanation: {
          en: 'Payout = DPS / EPS = 2 / 5 = 40%; the retention ratio is 60%. Inverting (EPS / DPS = 2.5x) gives dividend cover, not payout.',
          it: 'Payout = DPS / EPS = 2 / 5 = 40%; il tasso di ritenzione è il 60%. Il rapporto inverso (EPS / DPS = 2,5x) è la copertura del dividendo, non il payout.'
        }
      },
      {
        id: 'cf-div-q2',
        kind: 'numeric',
        topic: 'dividends',
        difficulty: 1,
        objective: { en: 'Predict the ex-dividend share price.', it: 'Prevedere il prezzo ex-dividendo.' },
        prompt: {
          en: 'A share trades at €50.00 cum-dividend and will pay a €2.00 dividend. Ignoring taxes and news, what should it trade at ex-dividend (€)?',
          it: 'Un’azione quota €50,00 cum dividendo e pagherà un dividendo di €2,00. Ignorando imposte e notizie, a quanto dovrebbe quotare ex dividendo (€)?'
        },
        answer: 48,
        unit: '€',
        verify: { fn: 'diff', args: [50, 2] },
        explanation: {
          en: 'The cash leaves the company, so equity value per share falls by the dividend: 50 − 2 = €48. The shareholder now holds €48 of stock plus €2 of cash — wealth unchanged.',
          it: 'La cassa esce dalla società, quindi il valore dell’equity per azione si riduce del dividendo: 50 − 2 = €48. L’azionista ha ora €48 in azioni più €2 in contanti — ricchezza invariata.'
        }
      },
      {
        id: 'cf-div-q3',
        kind: 'numeric',
        topic: 'buybacks',
        difficulty: 2,
        objective: { en: 'Compute pro forma EPS after a debt-funded buyback.', it: 'Calcolare l’EPS pro forma dopo un buyback finanziato a debito.' },
        prompt: {
          en: 'NI €500m, 100m shares, price €60. The company borrows €600m at 5% (tax 25%) and buys back shares at €60. Pro forma EPS (€, two decimals)?',
          it: 'UN €500m, 100m di azioni, prezzo €60. La società si indebita per €600m al 5% (aliquota 25%) e riacquista azioni a €60. EPS pro forma (€, due decimali)?'
        },
        answer: 5.31,
        unit: '€',
        tolerance: { abs: 0.01 },
        verify: { fn: 'ratio', args: [477.5, 90] },
        explanation: {
          en: 'After-tax interest = 600 × 5% × 0.75 = 22.5 → NI 477.5; shares = 100 − 10 = 90; EPS = 5.31 vs 5.00 (+6.1%). Ignoring interest gives 500/90 = 5.56.',
          it: 'Interessi netti = 600 × 5% × 0,75 = 22,5 → UN 477,5; azioni = 100 − 10 = 90; EPS = 5,31 contro 5,00 (+6,1%). Ignorare gli interessi porta a 500/90 = 5,56.'
        }
      },
      {
        id: 'cf-div-q4',
        kind: 'mcq',
        topic: 'buybacks',
        difficulty: 2,
        objective: { en: 'Apply the earnings-yield test.', it: 'Applicare il test dell’earnings yield.' },
        prompt: {
          en: 'A company trades on a P/E of 40x and can fund a buyback with debt at 6% pre-tax (tax 25%). Is the buyback EPS-accretive?',
          it: 'Una società quota a un P/E di 40x e può finanziare un buyback a debito al 6% lordo (aliquota 25%). Il buyback accresce l’EPS?'
        },
        choices: [
          { en: 'Yes, buybacks always increase EPS because the share count falls', it: 'Sì, i buyback aumentano sempre l’EPS perché il numero di azioni scende' },
          { en: 'No: the earnings yield (2.5%) is below the after-tax cost of debt (4.5%)', it: 'No: l’earnings yield (2,5%) è inferiore al costo netto del debito (4,5%)' },
          { en: 'Yes: the after-tax cost of debt (4.5%) is below 6%', it: 'Sì: il costo netto del debito (4,5%) è inferiore al 6%' },
          { en: 'It cannot be determined without the share price', it: 'Non si può stabilire senza il prezzo dell’azione' }
        ],
        correct: 1,
        explanation: {
          en: 'Earnings yield = 1 / 40 = 2.5%; after-tax cost of debt = 6% × 0.75 = 4.5%. The earnings removed per euro spent (2.5%) are less than the interest added (4.5%), so EPS falls. The share price is not needed — the P/E already captures it.',
          it: 'Earnings yield = 1 / 40 = 2,5%; costo netto del debito = 6% × 0,75 = 4,5%. Gli utili "eliminati" per euro speso (2,5%) sono inferiori agli interessi aggiunti (4,5%), quindi l’EPS scende. Il prezzo non serve — è già incorporato nel P/E.'
        }
      },
      {
        id: 'cf-div-q5',
        kind: 'multi',
        topic: 'dividends',
        difficulty: 2,
        objective: { en: 'Identify the effects of a cash-funded buyback.', it: 'Individuare gli effetti di un buyback finanziato con cassa.' },
        prompt: {
          en: 'A profitable company uses excess cash for a buyback. Which effects should you expect? Select all that apply.',
          it: 'Una società profittevole usa la cassa in eccesso per un buyback. Quali effetti devi attenderti? Seleziona tutte le risposte corrette.'
        },
        choices: [
          { en: 'Lower shareholders’ equity on the balance sheet', it: 'Patrimonio netto più basso in stato patrimoniale' },
          { en: 'Higher net debt (lower net cash)', it: 'Posizione finanziaria netta più alta (meno cassa netta)' },
          { en: 'An expense on the income statement equal to the amount spent', it: 'Un costo a conto economico pari all’importo speso' },
          { en: 'Higher ROE, all else equal', it: 'ROE più alto, a parità di altre condizioni' },
          { en: 'Guaranteed higher share price', it: 'Un prezzo dell’azione garantito più alto' }
        ],
        correct: [0, 1, 3],
        explanation: {
          en: 'Cash falls and treasury shares reduce equity (no income statement expense). Net debt rises, and with smaller equity ROE typically rises. The share price impact depends on the price paid versus intrinsic value and on signalling — nothing is guaranteed.',
          it: 'La cassa diminuisce e le azioni proprie riducono il patrimonio netto (nessun costo a conto economico). La PFN aumenta e, con un PN più piccolo, il ROE tipicamente sale. L’effetto sul prezzo dipende dal prezzo pagato rispetto al valore intrinseco e dai segnali — nulla è garantito.'
        }
      }
    ],
    flashcards: [
      { id: 'fc-cf-div-1', topic: 'dividends', front: { en: 'MM dividend irrelevance?', it: 'Irrilevanza dei dividendi di MM?' }, back: { en: 'With investment policy fixed and perfect markets, payout policy does not affect firm value (Miller & Modigliani, 1961).', it: 'Con politica d’investimento data e mercati perfetti, la politica di distribuzione non influenza il valore (Miller & Modigliani, 1961).' } },
      { id: 'fc-cf-div-2', topic: 'buybacks', front: { en: 'When is a buyback EPS-accretive?', it: 'Quando un buyback accresce l’EPS?' }, back: { en: 'When the earnings yield (1 / P/E) exceeds the after-tax cost of the funding used.', it: 'Quando l’earnings yield (1 / P/E) supera il costo netto delle risorse usate.' } },
      { id: 'fc-cf-div-3', topic: 'dividends', front: { en: 'Why are dividend cuts punished by markets?', it: 'Perché il mercato punisce i tagli del dividendo?' }, back: { en: 'Dividends are smoothed and sticky, so a cut signals management expects lower sustainable cash flows.', it: 'I dividendi sono stabilizzati e vischiosi, quindi un taglio segnala che il management prevede flussi sostenibili più bassi.' } },
      { id: 'fc-cf-div-4', topic: 'dividends', front: { en: 'Payout ratio and dividend yield formulas?', it: 'Formule di payout ratio e dividend yield?' }, back: { en: 'Payout = DPS / EPS; dividend yield = DPS / share price.', it: 'Payout = DPS / EPS; dividend yield = DPS / prezzo dell’azione.' } },
      { id: 'fc-cf-div-5', topic: 'buybacks', front: { en: 'Italian rule for buying back own shares?', it: 'Regola italiana per l’acquisto di azioni proprie?' }, back: { en: 'Shareholder authorisation (max 18 months) within distributable profits and available reserves — art. 2357 Civil Code.', it: 'Autorizzazione dell’assemblea (max 18 mesi) nei limiti degli utili distribuibili e delle riserve disponibili — art. 2357 c.c.' } }
    ],
    sources: [
      { label: 'M. Miller & F. Modigliani (1961), "Dividend Policy, Growth, and the Valuation of Shares", Journal of Business 34(4)' },
      { label: 'Codice civile, art. 2357 — Acquisto delle proprie azioni', url: 'https://www.normattiva.it/' },
      { label: 'Regulation (EU) No 596/2014 (Market Abuse Regulation), art. 5 — buy-back programmes', url: 'https://eur-lex.europa.eu/eli/reg/2014/596/oj' }
    ]
  },

  {
    id: 'cf-credit-distress',
    academyId: 'corporate-finance',
    moduleId: 'CF5',
    mode: 'deep',
    minutes: 16,
    difficulty: 3,
    reviewed: '2026-10',
    objective: {
      en: 'Assess credit risk with leverage and coverage ratios, estimate expected loss, explain the direct and indirect costs of financial distress, and outline restructuring options in the US and Italy.',
      it: 'Valutare il rischio di credito con indici di leva e di copertura, stimare la perdita attesa, spiegare i costi diretti e indiretti del dissesto finanziario e descrivere le opzioni di ristrutturazione negli USA e in Italia.'
    },
    screens: [
      {
        type: 'intuition',
        title: { en: 'Thinking like a lender', it: 'Ragionare come un finanziatore' },
        body: {
          en: 'Shareholders care about upside; lenders care about **getting paid back**. Their upside is capped at interest plus principal, so they focus on two questions:\n\n- **Can the company service its debt?** — cash flow versus interest and repayments (coverage).\n- **How much debt is there relative to the earnings that support it?** — leverage.\n\nWhen the answers deteriorate, the company drifts towards **financial distress**, where the value of the business itself starts to erode.',
          it: 'Gli azionisti guardano al potenziale di rialzo; i finanziatori a **essere rimborsati**. Il loro guadagno è limitato a interessi più capitale, quindi si concentrano su due domande:\n\n- **L’azienda riesce a servire il debito?** — flussi di cassa rispetto a interessi e rimborsi (copertura).\n- **Quanto debito c’è rispetto agli utili che lo sostengono?** — leva.\n\nQuando le risposte peggiorano, l’azienda scivola verso il **dissesto finanziario**, in cui inizia a erodersi il valore stesso del business.'
        }
      },
      {
        type: 'technical',
        title: { en: 'The credit toolkit', it: 'Gli strumenti dell’analisi del credito' },
        body: {
          en: '- **Leverage**: total debt / EBITDA and **net debt / EBITDA** (the market’s headline metric; leases included or excluded consistently).\n- **Coverage**: EBITDA / interest, EBIT / interest, (EBITDA − capex) / interest.\n- **Cash-flow ratios**: FFO / debt, free cash flow / debt (used by rating agencies).\n- **Liquidity**: cash + undrawn revolver versus maturities in the next 12–24 months.\n- **Covenants**: **maintenance** covenants (tested quarterly, typical of bank loans) and **incurrence** covenants (tested only when an action such as new debt is taken, typical of high-yield bonds).',
          it: '- **Leva**: debito lordo / EBITDA e **PFN / EBITDA** (la metrica di riferimento del mercato; leasing inclusi o esclusi in modo coerente).\n- **Copertura**: EBITDA / interessi, EBIT / interessi, (EBITDA − capex) / interessi.\n- **Indici di cassa**: FFO / debito, free cash flow / debito (usati dalle agenzie di rating).\n- **Liquidità**: cassa + linee revolving non utilizzate rispetto alle scadenze dei prossimi 12–24 mesi.\n- **Covenant**: **di mantenimento** (verificati trimestralmente, tipici dei finanziamenti bancari) e **di incurrence** (verificati solo quando si compie un’azione, come contrarre nuovo debito, tipici dei bond high yield).'
        }
      },
      {
        type: 'formula',
        formulas: [
          { name: { en: 'Net leverage', it: 'Leva netta' }, expr: 'Net leverage = (Total debt − Cash) / EBITDA' },
          { name: { en: 'Interest coverage', it: 'Copertura degli interessi' }, expr: 'Coverage = EBITDA (or EBIT) / Interest expense' },
          {
            name: { en: 'Expected loss', it: 'Perdita attesa' },
            expr: 'EL = PD × LGD × EAD',
            vars: [
              { sym: 'PD', desc: { en: 'Probability of default', it: 'Probabilità di default' } },
              { sym: 'LGD', desc: { en: 'Loss given default = 1 − recovery rate', it: 'Perdita in caso di default = 1 − tasso di recupero' } },
              { sym: 'EAD', desc: { en: 'Exposure at default', it: 'Esposizione al momento del default' } }
            ]
          }
        ],
        note: {
          en: 'Rough intuition for the credit spread: spread ≈ annual PD × LGD, plus premia for liquidity and uncertainty.',
          it: 'Intuizione approssimativa dello spread di credito: spread ≈ PD annua × LGD, più premi per liquidità e incertezza.'
        }
      },
      {
        type: 'example',
        title: { en: 'Before and after an LBO', it: 'Prima e dopo un LBO' },
        body: {
          en: 'Kappa S.p.A. has EBITDA of €100m. A sponsor acquires it and loads it with debt. Leverage jumps from 1.0x to 5.0x and EBITDA coverage drops from 10.0x to 2.2x: a 20% EBITDA fall would now push leverage above 6x — the kind of sensitivity lenders run.',
          it: 'Kappa S.p.A. ha un EBITDA di €100m. Uno sponsor la acquisisce e la carica di debito. La leva sale da 1,0x a 5,0x e la copertura scende da 10,0x a 2,2x: un calo del 20% dell’EBITDA porterebbe ora la leva sopra 6x — il tipo di sensitivity che fanno i finanziatori.'
        },
        table: {
          headers: [
            { en: '€m', it: '€m' },
            { en: 'Pre-LBO', it: 'Pre-LBO' },
            { en: 'Post-LBO', it: 'Post-LBO' }
          ],
          rows: [
            [{ en: 'Total debt', it: 'Debito lordo' }, '150', '550'],
            [{ en: 'Cash', it: 'Cassa' }, '50', '50'],
            ['EBITDA', '100', '100'],
            [{ en: 'Interest expense', it: 'Oneri finanziari' }, '10', '45'],
            [{ en: 'Net debt / EBITDA', it: 'PFN / EBITDA' }, '1.0x', '5.0x'],
            [{ en: 'EBITDA / interest', it: 'EBITDA / interessi' }, '10.0x', '2.2x']
          ]
        }
      },
      {
        type: 'technical',
        title: { en: 'The costs of financial distress', it: 'I costi del dissesto finanziario' },
        body: {
          en: '**Direct costs**: legal, advisory and court fees in a restructuring or insolvency.\n\n**Indirect costs** — usually much larger:\n- Customers leave (warranties, after-sales service, long-term contracts at risk).\n- Suppliers tighten terms or demand cash up front, draining liquidity.\n- Key employees depart; management time is absorbed by lenders.\n- **Debt overhang**: shareholders refuse to fund positive-NPV projects whose gains would mostly go to creditors.\n- **Asset substitution**: near insolvency, equity has an incentive to gamble on risky projects.\n\nThese costs are why the trade-off theory caps optimal leverage.',
          it: '**Costi diretti**: spese legali, di consulenza e giudiziarie di una ristrutturazione o procedura concorsuale.\n\n**Costi indiretti** — di solito molto maggiori:\n- I clienti se ne vanno (garanzie, assistenza post-vendita, contratti di lungo periodo a rischio).\n- I fornitori irrigidiscono i termini o chiedono pagamenti anticipati, drenando liquidità.\n- Le persone chiave lasciano; il tempo del management è assorbito dai creditori.\n- **Debt overhang**: gli azionisti rifiutano di finanziare progetti a VAN positivo i cui benefici andrebbero soprattutto ai creditori.\n- **Sostituzione degli attivi**: vicino all’insolvenza l’equity ha un incentivo a scommettere su progetti rischiosi.\n\nSono questi costi a limitare la leva ottimale nella teoria del trade-off.'
        }
      },
      {
        type: 'technical',
        title: { en: 'Restructuring basics', it: 'Nozioni di base sulle ristrutturazioni' },
        body: {
          en: '**Out of court** (faster, cheaper): covenant waivers and resets, amend-and-extend of maturities, exchange offers, debt-for-equity swaps, asset sales, new money from sponsors.\n\n**In court**:\n- **US**: Chapter 11 reorganisation (automatic stay, DIP financing, cramdown of dissenting classes) or Chapter 7 liquidation.\n- **Italy**: the Codice della crisi d’impresa e dell’insolvenza (D.Lgs. 14/2019, in force since 15 July 2022) offers composizione negoziata della crisi, accordi di ristrutturazione dei debiti, concordato preventivo and, as the liquidation procedure, liquidazione giudiziale (which replaced fallimento).\n\nRecoveries follow the **priority of claims**: secured → senior unsecured → subordinated → equity.',
          it: '**Stragiudiziali** (più rapide ed economiche): waiver e revisione dei covenant, amend-and-extend delle scadenze, offerte di scambio, conversione di debito in equity, cessioni di attivi, nuova finanza dagli sponsor.\n\n**Giudiziali**:\n- **USA**: riorganizzazione in Chapter 11 (automatic stay, finanziamento DIP, cramdown delle classi dissenzienti) o liquidazione in Chapter 7.\n- **Italia**: il Codice della crisi d’impresa e dell’insolvenza (D.Lgs. 14/2019, in vigore dal 15 luglio 2022) prevede composizione negoziata della crisi, accordi di ristrutturazione dei debiti, concordato preventivo e, come procedura liquidatoria, la liquidazione giudiziale (che ha sostituito il fallimento).\n\nI recuperi seguono l’**ordine di priorità dei crediti**: garantiti → senior chirografari → subordinati → equity.'
        }
      },
      {
        type: 'realworld',
        body: {
          en: 'Leveraged finance teams size debt packages using leverage and coverage (how many turns of EBITDA the market will lend), and credit committees stress-test downside cases. Restructuring advisory teams (at banks and boutiques) advise companies or creditor groups once those metrics break: building liquidity forecasts (often a 13-week cash flow), valuing the business to decide where value "breaks" in the capital structure, and negotiating the new capital structure.',
          it: 'I team di leveraged finance dimensionano i pacchetti di debito usando leva e copertura (quanti "turni" di EBITDA il mercato è disposto a finanziare), e i comitati crediti stressano gli scenari negativi. I team di restructuring advisory (in banche e boutique) assistono società o gruppi di creditori quando quei parametri saltano: costruiscono previsioni di liquidità (spesso un cash flow a 13 settimane), valutano il business per capire dove il valore "si rompe" nella struttura del capitale e negoziano la nuova struttura finanziaria.'
        }
      },
      { type: 'exercise', questionId: 'cf-cd-q1' },
      { type: 'exercise', questionId: 'cf-cd-q3' },
      { type: 'exercise', questionId: 'cf-cd-q4' },
      { type: 'exercise', questionId: 'cf-cd-q5' },
      {
        type: 'interview',
        question: {
          en: 'How would you assess whether a company can take on more debt?',
          it: 'Come valuteresti se un’azienda può sostenere altro debito?'
        },
        answer: {
          en: 'I would look at pro forma leverage (net debt / EBITDA) and coverage (EBITDA or EBIT over interest) against peers, rating thresholds and existing covenants. Then cash flow: does free cash flow after capex comfortably cover interest and scheduled amortisation? I would check liquidity and the maturity profile, the stability of EBITDA through the cycle, and the asset base as collateral. Finally I would stress-test: if EBITDA fell 20–30%, would the company breach covenants or run out of cash?',
          it: 'Guarderei leva pro forma (PFN / EBITDA) e copertura (EBITDA o EBIT su interessi) rispetto a peer, soglie di rating e covenant esistenti. Poi i flussi: il free cash flow dopo capex copre con margine interessi e rimborsi programmati? Verificherei liquidità e profilo delle scadenze, stabilità dell’EBITDA lungo il ciclo e attivi disponibili come garanzia. Infine farei uno stress test: se l’EBITDA scendesse del 20–30%, l’azienda violerebbe i covenant o resterebbe senza cassa?'
        }
      },
      {
        type: 'mistakes',
        items: [
          { en: 'Looking only at leverage and ignoring liquidity: companies default when they run out of cash, often with a maturity wall.', it: 'Guardare solo la leva ignorando la liquidità: le aziende vanno in default quando finiscono la cassa, spesso davanti a un muro di scadenze.' },
          { en: 'Using adjusted EBITDA full of add-backs without challenging them.', it: 'Usare un EBITDA rettificato pieno di add-back senza metterli in discussione.' },
          { en: 'Assuming book value of assets is what creditors will recover.', it: 'Assumere che il valore contabile delle attività sia ciò che i creditori recupereranno.' },
          { en: 'Ignoring indirect distress costs, which typically exceed legal and advisory fees.', it: 'Ignorare i costi indiretti del dissesto, che di solito superano le spese legali e di consulenza.' }
        ]
      },
      {
        type: 'summary',
        items: [
          { en: 'Net leverage = (debt − cash) / EBITDA; coverage = EBITDA or EBIT / interest.', it: 'Leva netta = (debito − cassa) / EBITDA; copertura = EBITDA o EBIT / interessi.' },
          { en: 'Expected loss = PD × LGD × EAD.', it: 'Perdita attesa = PD × LGD × EAD.' },
          { en: 'Distress costs: direct (fees) and indirect (customers, suppliers, debt overhang).', it: 'Costi del dissesto: diretti (spese) e indiretti (clienti, fornitori, debt overhang).' },
          { en: 'Restructure out of court or in court (Chapter 11; in Italy, CCII procedures); recoveries follow priority.', it: 'Ristrutturazione stragiudiziale o giudiziale (Chapter 11; in Italia, procedure del CCII); i recuperi seguono l’ordine di priorità.' }
        ]
      }
    ],
    questions: [
      {
        id: 'cf-cd-q1',
        kind: 'numeric',
        topic: 'credit-metrics',
        difficulty: 1,
        objective: { en: 'Compute net leverage.', it: 'Calcolare la leva netta.' },
        prompt: {
          en: 'Total debt €500m, cash €100m, EBITDA €160m. What is net debt / EBITDA (x)?',
          it: 'Debito lordo €500m, cassa €100m, EBITDA €160m. Qual è il rapporto PFN / EBITDA (x)?'
        },
        answer: 2.5,
        unit: 'x',
        verify: { fn: 'netLeverage', args: [500, 100, 160] },
        explanation: {
          en: '(500 − 100) / 160 = 2.5x. Gross leverage would be 500 / 160 = 3.1x; the market usually quotes net leverage.',
          it: '(500 − 100) / 160 = 2,5x. La leva lorda sarebbe 500 / 160 = 3,1x; il mercato di solito cita la leva netta.'
        }
      },
      {
        id: 'cf-cd-q2',
        kind: 'numeric',
        topic: 'credit-metrics',
        difficulty: 1,
        objective: { en: 'Compute interest coverage.', it: 'Calcolare la copertura degli interessi.' },
        prompt: {
          en: 'EBITDA €160m, interest expense €32m. What is EBITDA interest coverage (x)?',
          it: 'EBITDA €160m, oneri finanziari €32m. Qual è la copertura degli interessi su EBITDA (x)?'
        },
        answer: 5,
        unit: 'x',
        verify: { fn: 'interestCoverage', args: [160, 32] },
        explanation: {
          en: '160 / 32 = 5.0x: EBITDA covers interest five times. EBIT coverage would be lower, as it deducts D&A.',
          it: '160 / 32 = 5,0x: l’EBITDA copre gli interessi cinque volte. La copertura su EBIT sarebbe più bassa, perché deduce gli ammortamenti.'
        }
      },
      {
        id: 'cf-cd-q3',
        kind: 'grid',
        topic: 'credit-metrics',
        difficulty: 2,
        objective: { en: 'Compare credit metrics before and after an LBO.', it: 'Confrontare i parametri di credito prima e dopo un LBO.' },
        prompt: {
          en: 'Kappa: EBITDA €100m and cash €50m in both cases. Pre-LBO debt €150m, interest €10m; post-LBO debt €550m, interest €45m. Fill in the ratios (x).',
          it: 'Kappa: EBITDA €100m e cassa €50m in entrambi i casi. Debito pre-LBO €150m, interessi €10m; debito post-LBO €550m, interessi €45m. Completa gli indici (x).'
        },
        columns: [
          { en: 'Ratio', it: 'Indice' },
          { en: 'Pre-LBO', it: 'Pre-LBO' },
          { en: 'Post-LBO', it: 'Post-LBO' }
        ],
        rows: [
          {
            label: { en: 'Net debt / EBITDA', it: 'PFN / EBITDA' },
            cells: [
              { answer: 1, tolerance: { abs: 0.01 }, verify: { fn: 'netLeverage', args: [150, 50, 100] } },
              { answer: 5, tolerance: { abs: 0.01 }, verify: { fn: 'netLeverage', args: [550, 50, 100] } }
            ]
          },
          {
            label: { en: 'EBITDA / interest', it: 'EBITDA / interessi' },
            cells: [
              { answer: 10, tolerance: { abs: 0.01 }, verify: { fn: 'interestCoverage', args: [100, 10] } },
              { answer: 2.22, tolerance: { abs: 0.01 }, verify: { fn: 'interestCoverage', args: [100, 45] } }
            ]
          },
          {
            label: { en: 'Net debt / EBITDA if EBITDA falls to 80', it: 'PFN / EBITDA se l’EBITDA scende a 80' },
            cells: [
              { answer: 1.25, tolerance: { abs: 0.01 }, verify: { fn: 'netLeverage', args: [150, 50, 80] } },
              { answer: 6.25, tolerance: { abs: 0.01 }, verify: { fn: 'netLeverage', args: [550, 50, 80] } }
            ]
          }
        ],
        unit: 'x',
        explanation: {
          en: 'Pre-LBO: (150 − 50)/100 = 1.0x; 100/10 = 10.0x. Post-LBO: (550 − 50)/100 = 5.0x; 100/45 = 2.2x. A 20% EBITDA drop adds only 0.25x pre-LBO but 1.25x post-LBO — leverage amplifies operating shocks.',
          it: 'Pre-LBO: (150 − 50)/100 = 1,0x; 100/10 = 10,0x. Post-LBO: (550 − 50)/100 = 5,0x; 100/45 = 2,2x. Un calo del 20% dell’EBITDA aggiunge solo 0,25x prima dell’LBO ma 1,25x dopo — la leva amplifica gli shock operativi.'
        }
      },
      {
        id: 'cf-cd-q4',
        kind: 'numeric',
        topic: 'credit-risk',
        difficulty: 2,
        objective: { en: 'Compute expected loss.', it: 'Calcolare la perdita attesa.' },
        prompt: {
          en: 'A bank lends €50m to a borrower with a 3% one-year probability of default and an expected recovery rate of 40%. What is the one-year expected loss (€m)?',
          it: 'Una banca presta €50m a un debitore con una probabilità di default a un anno del 3% e un tasso di recupero atteso del 40%. Qual è la perdita attesa a un anno (€m)?'
        },
        answer: 0.9,
        unit: '€m',
        tolerance: { abs: 0.005 },
        verify: { fn: 'product', args: [0.03, 0.6, 50] },
        explanation: {
          en: 'LGD = 1 − 40% = 60%; EL = 3% × 60% × 50 = €0.9m. Using the recovery rate instead of LGD (3% × 40% × 50 = 0.6) is the common slip.',
          it: 'LGD = 1 − 40% = 60%; EL = 3% × 60% × 50 = €0,9m. Usare il tasso di recupero invece della LGD (3% × 40% × 50 = 0,6) è l’errore tipico.'
        }
      },
      {
        id: 'cf-cd-q5',
        kind: 'numeric',
        topic: 'restructuring',
        difficulty: 3,
        objective: { en: 'Apply the priority of claims to estimate recoveries.', it: 'Applicare l’ordine di priorità per stimare i recuperi.' },
        prompt: {
          en: 'In a restructuring, the business is valued at €600m. Claims: secured debt €400m, senior unsecured bonds €300m, subordinated notes €100m. Applying strict priority, what is the recovery rate on the senior unsecured bonds (%)?',
          it: 'In una ristrutturazione il business è valutato €600m. Crediti: debito garantito €400m, bond senior chirografari €300m, note subordinate €100m. Applicando la priorità assoluta, qual è il tasso di recupero dei bond senior chirografari (%)?'
        },
        answer: 66.67,
        unit: '%',
        tolerance: { abs: 0.1 },
        verify: { fn: 'ratio', args: [20000, 300] },
        explanation: {
          en: 'Secured debt is paid in full (400), leaving 200 for senior unsecured claims of 300: recovery 200/300 = 66.7%. Subordinated notes and equity receive nothing. The senior unsecured bonds are the "fulcrum" security — likely to receive most of the new equity in a debt-for-equity swap.',
          it: 'Il debito garantito è rimborsato integralmente (400), restano 200 per crediti senior chirografari di 300: recupero 200/300 = 66,7%. Note subordinate ed equity non ricevono nulla. I bond senior chirografari sono il titolo "fulcro" — probabilmente riceveranno gran parte del nuovo capitale in una conversione di debito in equity.'
        }
      },
      {
        id: 'cf-cd-q6',
        kind: 'multi',
        topic: 'financial-distress',
        difficulty: 2,
        objective: { en: 'Recognise indirect costs of financial distress.', it: 'Riconoscere i costi indiretti del dissesto finanziario.' },
        prompt: {
          en: 'Which are INDIRECT costs of financial distress? Select all that apply.',
          it: 'Quali sono costi INDIRETTI del dissesto finanziario? Seleziona tutte le risposte corrette.'
        },
        choices: [
          { en: 'Suppliers demanding cash on delivery', it: 'Fornitori che chiedono il pagamento alla consegna' },
          { en: 'Fees paid to restructuring lawyers and advisers', it: 'Compensi pagati a legali e advisor della ristrutturazione' },
          { en: 'Customers switching to a competitor over warranty concerns', it: 'Clienti che passano a un concorrente per timori sulle garanzie' },
          { en: 'Shareholders rejecting a positive-NPV project because gains would accrue to creditors', it: 'Azionisti che rifiutano un progetto a VAN positivo perché i benefici andrebbero ai creditori' },
          { en: 'Court filing fees', it: 'Spese per il deposito in tribunale' }
        ],
        correct: [0, 2, 3],
        explanation: {
          en: 'Supplier pressure, customer loss and debt overhang (underinvestment) are indirect costs that erode business value. Adviser and court fees are direct costs.',
          it: 'Pressione dei fornitori, perdita di clienti e debt overhang (sotto-investimento) sono costi indiretti che erodono il valore del business. Compensi degli advisor e spese giudiziarie sono costi diretti.'
        }
      }
    ],
    flashcards: [
      { id: 'fc-cf-cd-1', topic: 'credit-metrics', front: { en: 'Net leverage formula?', it: 'Formula della leva netta?' }, back: { en: '(Total debt − cash) / EBITDA.', it: '(Debito lordo − cassa) / EBITDA.' } },
      { id: 'fc-cf-cd-2', topic: 'credit-risk', front: { en: 'Expected loss formula?', it: 'Formula della perdita attesa?' }, back: { en: 'EL = PD × LGD × EAD, with LGD = 1 − recovery rate.', it: 'EL = PD × LGD × EAD, con LGD = 1 − tasso di recupero.' } },
      { id: 'fc-cf-cd-3', topic: 'credit-metrics', front: { en: 'Maintenance vs incurrence covenants?', it: 'Covenant di mantenimento vs di incurrence?' }, back: { en: 'Maintenance: tested periodically (bank loans). Incurrence: tested only when taking an action such as raising debt (high-yield bonds).', it: 'Mantenimento: verificati periodicamente (prestiti bancari). Incurrence: verificati solo quando si compie un’azione come contrarre debito (bond high yield).' } },
      { id: 'fc-cf-cd-4', topic: 'financial-distress', front: { en: 'What is debt overhang?', it: 'Che cos’è il debt overhang?' }, back: { en: 'Shareholders of a distressed firm underinvest because most gains from new projects would go to creditors.', it: 'Gli azionisti di un’impresa in dissesto sotto-investono perché gran parte dei benefici dei nuovi progetti andrebbe ai creditori.' } },
      { id: 'fc-cf-cd-5', topic: 'restructuring', front: { en: 'Italy’s insolvency code and its liquidation procedure?', it: 'Il codice italiano della crisi e la sua procedura liquidatoria?' }, back: { en: 'Codice della crisi d’impresa e dell’insolvenza (D.Lgs. 14/2019, in force 15 July 2022); liquidazione giudiziale replaced fallimento.', it: 'Codice della crisi d’impresa e dell’insolvenza (D.Lgs. 14/2019, in vigore dal 15 luglio 2022); la liquidazione giudiziale ha sostituito il fallimento.' } }
    ],
    sources: [
      { label: 'D.Lgs. 12 gennaio 2019, n. 14 — Codice della crisi d’impresa e dell’insolvenza (Camera dei deputati, dossier)', url: 'https://temi.camera.it/leg19/post/il-decreto-legislativo-n-14-del-2019.html' },
      { label: 'Normattiva — testo vigente D.Lgs. 14/2019', url: 'https://www.normattiva.it/' }
    ]
  }
];
