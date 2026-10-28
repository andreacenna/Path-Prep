import type { Lesson } from '../types';

/**
 * Academy 1 — Modules A1 (Accounting Fundamentals) and A2 (Three Financial Statements).
 */
export const lessons: Lesson[] = [
  {
    id: 'acc-accounting-equation',
    academyId: 'accounting',
    moduleId: 'A1',
    mode: 'quick',
    minutes: 5,
    difficulty: 1,
    reviewed: '2026-10',
    objective: {
      en: 'Explain the accounting equation and use it to predict how any transaction changes assets, liabilities and equity.',
      it: "Spiegare l'equazione contabile e usarla per prevedere come ogni operazione modifica attività, passività e patrimonio netto."
    },
    screens: [
      {
        type: 'intuition',
        title: { en: 'Who owns what?', it: 'Chi possiede cosa?' },
        body: {
          en: 'Everything a company controls (its **assets**) was paid for by someone. Either lenders and suppliers funded it — they have a claim called **liabilities** — or the owners did, and their residual claim is **equity**.\n\nSo the resources must always equal the claims on those resources. That single idea is the whole of the accounting equation.',
          it: "Tutto ciò che un'azienda controlla (le sue **attività**) è stato finanziato da qualcuno. O lo hanno finanziato finanziatori e fornitori — che vantano un diritto chiamato **passività** — oppure i soci, il cui diritto residuale è il **patrimonio netto**.\n\nQuindi le risorse devono sempre essere uguali ai diritti su quelle risorse. Tutta l'equazione contabile sta in questa idea."
        }
      },
      {
        type: 'technical',
        title: { en: 'Definitions that interviewers expect', it: 'Le definizioni che si aspettano ai colloqui' },
        body: {
          en: '- **Asset**: a present economic resource controlled by the entity as a result of past events (IFRS Conceptual Framework, 2018).\n- **Liability**: a present obligation of the entity to transfer an economic resource as a result of past events.\n- **Equity**: the residual interest in the assets after deducting all liabilities.\n\nEquity grows when the company earns profits (retained earnings) or owners contribute capital; it shrinks with losses, dividends and share buybacks.',
          it: "- **Attività**: una risorsa economica attuale controllata dall'entità per effetto di eventi passati (Conceptual Framework IFRS, 2018).\n- **Passività**: un'obbligazione attuale dell'entità a trasferire una risorsa economica per effetto di eventi passati.\n- **Patrimonio netto**: l'interesse residuo nelle attività dopo aver dedotto tutte le passività.\n\nIl patrimonio netto aumenta con gli utili (utili portati a nuovo) o con i conferimenti dei soci; diminuisce con perdite, dividendi e riacquisti di azioni proprie."
        }
      },
      {
        type: 'formula',
        formulas: [
          {
            name: { en: 'The accounting equation', it: "L'equazione contabile" },
            expr: 'Assets = Liabilities + Equity',
            vars: [
              { sym: 'Assets', desc: { en: 'Resources controlled by the company', it: "Risorse controllate dall'azienda" } },
              { sym: 'Liabilities', desc: { en: 'Obligations to creditors', it: 'Obbligazioni verso i creditori' } },
              { sym: 'Equity', desc: { en: "Owners' residual claim", it: 'Diritto residuale dei soci' } }
            ]
          },
          {
            name: { en: 'Expanded form', it: 'Forma estesa' },
            expr: 'Assets = Liabilities + Share capital + Retained earnings (opening + Net income − Dividends)'
          }
        ],
        note: {
          en: 'Every transaction keeps the equation balanced — that is why the balance sheet "balances".',
          it: "Ogni operazione mantiene l'equazione in equilibrio — per questo lo stato patrimoniale \"quadra\"."
        }
      },
      {
        type: 'example',
        title: { en: 'Four transactions, one equation', it: "Quattro operazioni, un'equazione" },
        body: {
          en: 'A start-up is founded. Follow each transaction (€k) and check that both sides always move by the same amount.',
          it: "Nasce una start-up. Segui ogni operazione (€k) e verifica che i due lati si muovano sempre dello stesso importo."
        },
        table: {
          headers: [
            { en: 'Transaction', it: 'Operazione' },
            { en: 'Assets', it: 'Attività' },
            { en: 'Liabilities', it: 'Passività' },
            { en: 'Equity', it: 'PN' }
          ],
          rows: [
            [{ en: '1. Founders invest 100 cash', it: '1. I soci versano 100 in contanti' }, '+100', '0', '+100'],
            [{ en: '2. Bank loan of 50', it: '2. Prestito bancario di 50' }, '+50', '+50', '0'],
            [{ en: '3. Buy equipment for 80 cash', it: '3. Acquisto macchinari per 80 in contanti' }, '+80 −80', '0', '0'],
            [{ en: '4. Provide services for 30, client pays cash', it: '4. Servizi resi per 30, pagati in contanti' }, '+30', '0', '+30'],
            [{ en: 'Closing position', it: 'Posizione finale' }, '180', '50', '130']
          ],
          totalRows: [4]
        }
      },
      {
        type: 'realworld',
        body: {
          en: 'When a bank analyses a target, the balance sheet tells it how the business is financed. A company with €1bn of assets funded by €800m of debt is far riskier for shareholders than one funded mostly by equity — the same equation drives leverage, credit ratings and how much an LBO sponsor can borrow.',
          it: "Quando una banca analizza un target, lo stato patrimoniale rivela come è finanziato il business. Un'azienda con €1mld di attività finanziate da €800m di debito è molto più rischiosa per gli azionisti di una finanziata soprattutto con capitale proprio — la stessa equazione guida leva, rating e quanto debito può raccogliere uno sponsor in un LBO."
        }
      },
      { type: 'exercise', questionId: 'acc-eq-q1' },
      { type: 'exercise', questionId: 'acc-eq-q2' },
      {
        type: 'interview',
        question: { en: 'A company pays a €10m dividend in cash. What happens to the accounting equation?', it: "Un'azienda paga un dividendo di €10m in contanti. Cosa succede all'equazione contabile?" },
        answer: {
          en: 'Assets fall by €10m (cash) and equity falls by €10m (retained earnings). Liabilities are unchanged, so the equation stays balanced. The income statement is not affected — dividends are a distribution of profit, not an expense.',
          it: "Le attività diminuiscono di €10m (cassa) e il patrimonio netto di €10m (utili portati a nuovo). Le passività non cambiano, quindi l'equazione resta in equilibrio. Il conto economico non è interessato — i dividendi sono una distribuzione dell'utile, non un costo."
        }
      },
      {
        type: 'mistakes',
        items: [
          { en: 'Treating dividends as an expense on the income statement. They reduce retained earnings directly.', it: 'Trattare i dividendi come un costo di conto economico. Riducono direttamente gli utili portati a nuovo.' },
          { en: 'Thinking that buying an asset with cash changes total assets. It only swaps one asset for another.', it: 'Pensare che acquistare un bene in contanti modifichi il totale attivo. Si scambia solo un’attività con un’altra.' },
          { en: 'Confusing equity (book value) with market capitalisation. The balance sheet records book value.', it: 'Confondere il patrimonio netto contabile con la capitalizzazione di mercato. Lo stato patrimoniale registra il valore contabile.' }
        ]
      },
      {
        type: 'summary',
        items: [
          { en: 'Assets = Liabilities + Equity, always.', it: 'Attività = Passività + Patrimonio netto, sempre.' },
          { en: 'Every transaction affects at least two items, keeping the equation balanced.', it: "Ogni operazione interessa almeno due voci e mantiene l'equazione in equilibrio." },
          { en: 'Profits increase equity via retained earnings; dividends reduce it without touching the income statement.', it: 'Gli utili aumentano il PN tramite gli utili a nuovo; i dividendi lo riducono senza toccare il conto economico.' }
        ]
      }
    ],
    questions: [
      {
        id: 'acc-eq-q1',
        kind: 'mcq',
        topic: 'accounting-equation',
        difficulty: 1,
        objective: { en: 'Apply the accounting equation to a financing transaction.', it: "Applicare l'equazione contabile a un'operazione di finanziamento." },
        prompt: { en: 'A company borrows €20m from a bank. Which statement is correct?', it: "Un'azienda prende in prestito €20m da una banca. Quale affermazione è corretta?" },
        choices: [
          { en: 'Assets +20, Liabilities +20, Equity unchanged', it: 'Attività +20, Passività +20, PN invariato' },
          { en: 'Assets +20, Equity +20', it: 'Attività +20, PN +20' },
          { en: 'Liabilities +20, Equity −20', it: 'Passività +20, PN −20' },
          { en: 'No change: borrowing is not recorded until repaid', it: 'Nessuna variazione: il debito si registra solo al rimborso' }
        ],
        correct: 0,
        explanation: {
          en: 'Cash (an asset) rises by €20m and a loan payable (a liability) rises by €20m. Borrowing is not income, so equity does not change.',
          it: 'La cassa (attività) aumenta di €20m e il debito verso la banca (passività) aumenta di €20m. Un prestito non è un ricavo, quindi il PN non cambia.'
        }
      },
      {
        id: 'acc-eq-q2',
        kind: 'numeric',
        topic: 'accounting-equation',
        difficulty: 1,
        objective: { en: 'Solve for a missing element of the accounting equation.', it: "Ricavare l'elemento mancante dell'equazione contabile." },
        prompt: {
          en: 'Total assets are €450m and total liabilities are €310m. What is shareholders’ equity (€m)?',
          it: 'Il totale attivo è €450m e il totale passività è €310m. Qual è il patrimonio netto (€m)?'
        },
        answer: 140,
        unit: '€m',
        verify: { fn: 'diff', args: [450, 310] },
        explanation: { en: 'Equity = Assets − Liabilities = 450 − 310 = 140.', it: 'PN = Attività − Passività = 450 − 310 = 140.' }
      },
      {
        id: 'acc-eq-q3',
        kind: 'multi',
        topic: 'accounting-equation',
        difficulty: 2,
        objective: { en: 'Identify transactions that change total equity.', it: 'Identificare le operazioni che modificano il patrimonio netto.' },
        prompt: { en: 'Which of these change total shareholders’ equity? Select all that apply.', it: 'Quali di queste operazioni modificano il patrimonio netto? Seleziona tutte le risposte corrette.' },
        choices: [
          { en: 'Issuing new shares for cash', it: 'Emissione di nuove azioni a pagamento' },
          { en: 'Recording a depreciation expense', it: 'Registrazione di un ammortamento' },
          { en: 'Repaying a bank loan', it: 'Rimborso di un prestito bancario' },
          { en: 'Buying inventory on credit', it: 'Acquisto di magazzino a credito' },
          { en: 'Paying a cash dividend', it: 'Pagamento di un dividendo in contanti' }
        ],
        correct: [0, 1, 4],
        explanation: {
          en: 'Share issuance increases equity; depreciation is an expense that reduces net income and therefore retained earnings; dividends reduce retained earnings. Loan repayment (cash ↓, debt ↓) and buying inventory on credit (inventory ↑, payables ↑) leave equity unchanged.',
          it: "L'emissione di azioni aumenta il PN; l'ammortamento è un costo che riduce l'utile e quindi gli utili a nuovo; i dividendi riducono gli utili a nuovo. Il rimborso di un prestito (cassa ↓, debito ↓) e l'acquisto di magazzino a credito (magazzino ↑, debiti ↑) non modificano il PN."
        }
      }
    ],
    flashcards: [
      {
        id: 'fc-acc-eq-1',
        topic: 'accounting-equation',
        front: { en: 'State the accounting equation.', it: "Enuncia l'equazione contabile." },
        back: { en: 'Assets = Liabilities + Equity', it: 'Attività = Passività + Patrimonio netto' }
      },
      {
        id: 'fc-acc-eq-2',
        topic: 'accounting-equation',
        front: { en: 'Name four things that change retained earnings.', it: 'Indica quattro elementi che modificano gli utili portati a nuovo.' },
        back: { en: 'Net income (+), net loss (−), dividends (−), certain prior-period corrections/policy changes (±).', it: 'Utile (+), perdita (−), dividendi (−), alcune correzioni di errori / cambi di principio di esercizi precedenti (±).' }
      },
      {
        id: 'fc-acc-eq-3',
        topic: 'accounting-equation',
        front: { en: 'Definition of an asset (IFRS Conceptual Framework 2018)?', it: 'Definizione di attività (Conceptual Framework IFRS 2018)?' },
        back: { en: 'A present economic resource controlled by the entity as a result of past events.', it: "Una risorsa economica attuale controllata dall'entità per effetto di eventi passati." }
      }
    ],
    sources: [{ label: 'IFRS Foundation — Conceptual Framework for Financial Reporting (2018), ch. 4', url: 'https://www.ifrs.org/issued-standards/list-of-standards/conceptual-framework/' }]
  },
  {
    id: 'acc-double-entry',
    academyId: 'accounting',
    moduleId: 'A1',
    mode: 'deep',
    minutes: 10,
    difficulty: 1,
    reviewed: '2026-10',
    objective: {
      en: "Record any transaction as a balanced journal entry using debits and credits, and post it to T-accounts.",
      it: "Registrare qualsiasi operazione come scrittura in partita doppia bilanciata (dare e avere) e riportarla nei conti a T."
    },
    screens: [
      {
        type: 'intuition',
        title: { en: "Every transaction has two sides", it: "Ogni operazione ha due facce" },
        body: {
          en: "When a company buys a machine for cash, two things happen at once: it **gains** a machine and **loses** cash. When it borrows, it **gains** cash and **owes** the bank.\n\nDouble entry simply records both sides of every event. Because each entry has equal debits and credits, the books — and the accounting equation — always balance. It is a built-in error check that has been used since Luca Pacioli described it in Venice in 1494.",
          it: "Quando un'azienda acquista un macchinario pagando in contanti succedono due cose: **acquisisce** un bene e **perde** cassa. Quando si indebita, **ottiene** liquidità e **deve** restituirla alla banca.\n\nLa partita doppia registra semplicemente entrambi gli aspetti di ogni evento. Poiché ogni scrittura ha dare e avere di pari importo, i conti — e l'equazione contabile — quadrano sempre. È un controllo di coerenza incorporato, descritto da Luca Pacioli a Venezia nel 1494."
        }
      },
      {
        type: 'technical',
        title: { en: "Debit and credit rules", it: "Le regole del dare e dell'avere" },
        body: {
          en: "**Debit (Dr)** = left side of an account; **credit (Cr)** = right side. They are not “good” or “bad”: they are directions.\n\n- **Assets, expenses, dividends**: increase with a debit, decrease with a credit (normal debit balance).\n- **Liabilities, equity, revenue**: increase with a credit, decrease with a debit (normal credit balance).\n\nWhy expenses are debits: an expense reduces profit and therefore equity — the opposite of a credit to equity. Revenue increases equity, so it is a credit.\n\nMnemonic: **DEAD CLIC** — Debits: Expenses, Assets, Dividends; Credits: Liabilities, Income, Capital.",
          it: "**Dare (Dr)** = lato sinistro del conto; **avere (Cr)** = lato destro. Non sono “positivo” o “negativo”: sono direzioni.\n\n- **Attività, costi, dividendi**: aumentano in dare, diminuiscono in avere (saldo normale in dare).\n- **Passività, patrimonio netto, ricavi**: aumentano in avere, diminuiscono in dare (saldo normale in avere).\n\nPerché i costi vanno in dare: un costo riduce l'utile e quindi il patrimonio netto — l'opposto di un accredito al PN. I ricavi aumentano il PN, quindi vanno in avere.\n\nMnemonico inglese: **DEAD CLIC** — Debits: Expenses, Assets, Dividends; Credits: Liabilities, Income, Capital."
        }
      },
      {
        type: 'formula',
        formulas: [
          {
            name: { en: "The double-entry rule", it: "La regola della partita doppia" },
            expr: 'Σ Debits = Σ Credits (for every entry and for the whole ledger)'
          },
          {
            name: { en: "Expanded equation (debit side = credit side)", it: "Equazione estesa (lato dare = lato avere)" },
            expr: 'Assets + Expenses + Dividends = Liabilities + Share capital + Opening retained earnings + Revenue',
            vars: [
              { sym: 'Left', desc: { en: "Accounts with normal debit balances", it: "Conti con saldo normale in dare" } },
              { sym: 'Right', desc: { en: "Accounts with normal credit balances", it: "Conti con saldo normale in avere" } }
            ]
          }
        ],
        note: {
          en: "Revenue − Expenses = Net income; Net income − Dividends flows into retained earnings at period end. That is why the expanded equation collapses back to A = L + E.",
          it: "Ricavi − Costi = Utile netto; a fine esercizio l'utile meno i dividendi confluisce negli utili portati a nuovo. Per questo l'equazione estesa torna ad A = P + PN."
        }
      },
      {
        type: 'example',
        title: { en: "Journal entries for Alfa S.p.A. (€k)", it: "Scritture contabili di Alfa S.p.A. (€k)" },
        body: {
          en: "Each line debits one account and credits another for the same amount. Read the logic in the last column.",
          it: "Ogni riga addebita un conto e ne accredita un altro per lo stesso importo. La logica è nell'ultima colonna."
        },
        table: {
          headers: [
            { en: 'Transaction', it: 'Operazione' },
            { en: 'Debit', it: 'Dare' },
            { en: 'Credit', it: 'Avere' },
            { en: 'Why', it: 'Perché' }
          ],
          rows: [
            [{ en: 'Issue shares for 200 cash', it: 'Aumento di capitale di 200 in denaro' }, { en: 'Cash 200', it: 'Cassa 200' }, { en: 'Share capital 200', it: 'Capitale sociale 200' }, { en: 'Asset ↑, equity ↑', it: 'Attività ↑, PN ↑' }],
            [{ en: 'Buy inventory 60 on credit', it: 'Acquisto merci 60 a credito' }, { en: 'Inventory 60', it: 'Magazzino 60' }, { en: 'Payables 60', it: 'Debiti v/fornitori 60' }, { en: 'Asset ↑, liability ↑', it: 'Attività ↑, passività ↑' }],
            [{ en: 'Sell goods for 90 on credit', it: 'Vendita merci per 90 a credito' }, { en: 'Receivables 90', it: 'Crediti v/clienti 90' }, { en: 'Revenue 90', it: 'Ricavi 90' }, { en: 'Asset ↑, revenue ↑', it: 'Attività ↑, ricavi ↑' }],
            [{ en: '…and derecognise the goods sold', it: '…e scarico delle merci vendute' }, { en: 'COGS 60', it: 'Costo del venduto 60' }, { en: 'Inventory 60', it: 'Magazzino 60' }, { en: 'Expense ↑, asset ↓', it: 'Costo ↑, attività ↓' }],
            [{ en: 'Pay supplier 60', it: 'Pagamento fornitore 60' }, { en: 'Payables 60', it: 'Debiti v/fornitori 60' }, { en: 'Cash 60', it: 'Cassa 60' }, { en: 'Liability ↓, asset ↓', it: 'Passività ↓, attività ↓' }]
          ]
        }
      },
      {
        type: 'technical',
        title: { en: "T-accounts: the ledger view", it: "I conti a T: la vista del mastro" },
        body: {
          en: "The **journal** lists entries in date order; the **ledger** groups them by account. A T-account shows debits on the left and credits on the right.\n\n**Cash** in the example: debits 200; credits 60 → closing debit balance 140.\n**Payables**: credit 60, debit 60 → balance 0.\n\nClosing balance = opening balance + increases − decreases, on the account’s normal side. An asset account with a credit balance (e.g. cash) is a red flag — it usually means an overdraft that should be shown as a liability.",
          it: "Il **libro giornale** elenca le scritture in ordine cronologico; il **mastro** le raggruppa per conto. Il conto a T mostra il dare a sinistra e l'avere a destra.\n\n**Cassa** nell'esempio: dare 200; avere 60 → saldo finale in dare di 140.\n**Debiti v/fornitori**: avere 60, dare 60 → saldo 0.\n\nSaldo finale = saldo iniziale + aumenti − diminuzioni, sul lato normale del conto. Un conto di attività con saldo in avere (es. la cassa) è un campanello d'allarme: di solito è uno scoperto da esporre tra le passività."
        }
      },
      { type: 'exercise', questionId: 'acc-de-q1' },
      { type: 'exercise', questionId: 'acc-de-q3' },
      {
        type: 'realworld',
        body: {
          en: "Bankers rarely post journal entries, but they think in them constantly. In due diligence, a “quality of earnings” adjustment is really a question of whether a debit should have gone to an expense (hitting EBITDA) or to an asset (capitalised). Understanding the entry behind each number is how analysts spot aggressive accounting — e.g. capitalised development costs inflating EBITDA.",
          it: "I banker raramente registrano scritture, ma ragionano continuamente in termini di dare e avere. In due diligence, una rettifica di “quality of earnings” è spesso la domanda se un addebito andava a costo (impattando l'EBITDA) o ad attività (capitalizzato). Capire la scrittura dietro ogni numero è come l'analista individua contabilizzazioni aggressive — ad esempio costi di sviluppo capitalizzati che gonfiano l'EBITDA."
        }
      },
      { type: 'exercise', questionId: 'acc-de-q2' },
      {
        type: 'interview',
        question: { en: "Walk me through the journal entry when a company records €5m of depreciation.", it: "Mi descriva la scrittura contabile quando un'azienda rileva €5m di ammortamento." },
        answer: {
          en: "Debit depreciation expense €5m, credit accumulated depreciation €5m. Accumulated depreciation is a contra-asset, so net PP&E falls by €5m. The expense lowers pre-tax income by €5m and, at period end, retained earnings by the after-tax amount. No cash moves when depreciation is booked.",
          it: "Dare ammortamenti (costo) €5m, avere fondo ammortamento €5m. Il fondo è una posta rettificativa dell'attivo, quindi le immobilizzazioni nette scendono di €5m. Il costo riduce l'utile ante imposte di €5m e, a fine esercizio, gli utili a nuovo per l'importo netto d'imposta. La rilevazione dell'ammortamento non comporta alcun movimento di cassa."
        }
      },
      {
        type: 'mistakes',
        items: [
          { en: "Equating “credit” with “increase”. A credit increases liabilities, equity and revenue but decreases assets.", it: "Associare “avere” ad “aumento”. L'avere aumenta passività, PN e ricavi, ma diminuisce le attività." },
          { en: "Forgetting the second half of a sale: revenue is recorded, but so is COGS and the reduction in inventory.", it: "Dimenticare la seconda metà di una vendita: si rilevano i ricavi, ma anche il costo del venduto e lo scarico del magazzino." },
          { en: "Debiting an expense when the cost creates a future benefit (e.g. a machine). That is an asset, not an expense.", it: "Addebitare a costo una spesa che genera benefici futuri (es. un macchinario). È un'attività, non un costo." },
          { en: "Assuming balanced debits and credits mean the entry is right. The wrong account can still be used.", it: "Pensare che, se dare e avere quadrano, la scrittura sia corretta. Si può comunque usare il conto sbagliato." }
        ]
      },
      {
        type: 'summary',
        items: [
          { en: "Every entry: total debits = total credits.", it: "Ogni scrittura: totale dare = totale avere." },
          { en: "Assets, expenses, dividends increase with debits; liabilities, equity, revenue increase with credits.", it: "Attività, costi e dividendi aumentano in dare; passività, PN e ricavi aumentano in avere." },
          { en: "Journal = chronological record; ledger/T-accounts = balances by account.", it: "Libro giornale = registrazione cronologica; mastro/conti a T = saldi per conto." }
        ]
      }
    ],
    questions: [
      {
        id: 'acc-de-q1',
        kind: 'mcq',
        topic: 'double-entry',
        difficulty: 1,
        objective: { en: "Record a credit purchase of inventory.", it: "Registrare un acquisto di merci a credito." },
        prompt: { en: "A company buys €40k of inventory on 60-day credit terms. What is the journal entry?", it: "Un'azienda acquista merci per €40k con pagamento a 60 giorni. Qual è la scrittura contabile?" },
        choices: [
          { en: "Dr Cost of goods sold 40 / Cr Payables 40", it: "Dare Costo del venduto 40 / Avere Debiti v/fornitori 40" },
          { en: "Dr Payables 40 / Cr Inventory 40", it: "Dare Debiti v/fornitori 40 / Avere Magazzino 40" },
          { en: "Dr Inventory 40 / Cr Payables 40", it: "Dare Magazzino 40 / Avere Debiti v/fornitori 40" },
          { en: "Dr Inventory 40 / Cr Cash 40", it: "Dare Magazzino 40 / Avere Cassa 40" }
        ],
        correct: 2,
        explanation: {
          en: "Inventory (asset) increases → debit; payables (liability) increase → credit. COGS is recognised only when the goods are sold; cash is not involved because the purchase is on credit; the second option reverses both directions.",
          it: "Il magazzino (attività) aumenta → dare; i debiti v/fornitori (passività) aumentano → avere. Il costo del venduto si rileva solo alla vendita; la cassa non è coinvolta perché l'acquisto è a credito; la seconda opzione inverte entrambe le direzioni."
        }
      },
      {
        id: 'acc-de-q2',
        kind: 'numeric',
        topic: 'double-entry',
        difficulty: 1,
        objective: { en: "Compute a closing balance from a T-account.", it: "Calcolare il saldo finale di un conto a T." },
        prompt: {
          en: "The cash T-account opens with a debit balance of €120k. During the month, debits total €340k and credits total €290k. What is the closing cash balance (€k)?",
          it: "Il conto cassa apre con un saldo in dare di €120k. Nel mese i movimenti in dare sono €340k e quelli in avere €290k. Qual è il saldo finale di cassa (€k)?"
        },
        answer: 170,
        unit: '€k',
        verify: { fn: 'sum', args: [120, 340, -290] },
        explanation: {
          en: "Cash is an asset: debits increase it, credits decrease it. 120 + 340 − 290 = 170 (debit balance).",
          it: "La cassa è un'attività: il dare la aumenta, l'avere la riduce. 120 + 340 − 290 = 170 (saldo in dare)."
        }
      },
      {
        id: 'acc-de-q3',
        kind: 'multi',
        topic: 'double-entry',
        difficulty: 2,
        objective: { en: "Identify accounts with a normal debit balance.", it: "Identificare i conti con saldo normale in dare." },
        prompt: { en: "Which accounts normally carry a debit balance? Select all that apply.", it: "Quali conti hanno normalmente un saldo in dare? Seleziona tutte le risposte corrette." },
        choices: [
          { en: "Trade receivables", it: "Crediti verso clienti" },
          { en: "Deferred revenue", it: "Ricavi differiti (risconti passivi)" },
          { en: "Salaries expense", it: "Costo del personale" },
          { en: "Accumulated depreciation", it: "Fondo ammortamento" },
          { en: "Prepaid insurance", it: "Assicurazioni pagate in anticipo (risconti attivi)" },
          { en: "Share premium", it: "Riserva sovrapprezzo azioni" }
        ],
        correct: [0, 2, 4],
        explanation: {
          en: "Receivables and prepaid insurance are assets; salaries are an expense — all debit balances. Deferred revenue is a liability; share premium is equity; accumulated depreciation is a contra-asset with a credit balance that reduces gross PP&E.",
          it: "Crediti v/clienti e risconti attivi sono attività; il costo del personale è un costo — tutti saldi in dare. I risconti passivi sono una passività; la riserva sovrapprezzo è PN; il fondo ammortamento è una posta rettificativa dell'attivo con saldo in avere."
        }
      },
      {
        id: 'acc-de-q4',
        kind: 'mcq',
        topic: 'double-entry',
        difficulty: 2,
        objective: { en: "Record a dividend declaration and payment.", it: "Registrare la delibera e il pagamento di un dividendo." },
        prompt: { en: "Shareholders approve a €10m dividend, paid one month later. Which pair of entries is correct?", it: "L'assemblea delibera un dividendo di €10m, pagato un mese dopo. Quale coppia di scritture è corretta?" },
        choices: [
          { en: "Approval: Dr Dividend expense / Cr Cash. Payment: no entry", it: "Delibera: Dare Costo per dividendi / Avere Cassa. Pagamento: nessuna scrittura" },
          { en: "Approval: Dr Retained earnings / Cr Dividends payable. Payment: Dr Dividends payable / Cr Cash", it: "Delibera: Dare Utili a nuovo / Avere Debiti per dividendi. Pagamento: Dare Debiti per dividendi / Avere Cassa" },
          { en: "Approval: no entry. Payment: Dr Cash / Cr Retained earnings", it: "Delibera: nessuna scrittura. Pagamento: Dare Cassa / Avere Utili a nuovo" },
          { en: "Approval: Dr Dividends payable / Cr Retained earnings. Payment: Dr Cash / Cr Dividends payable", it: "Delibera: Dare Debiti per dividendi / Avere Utili a nuovo. Pagamento: Dare Cassa / Avere Debiti per dividendi" }
        ],
        correct: 1,
        explanation: {
          en: "Approval creates an obligation: equity falls (debit retained earnings) and a liability arises (credit dividends payable). Payment settles the liability against cash. Dividends never pass through the income statement; the last option has every direction reversed.",
          it: "La delibera crea un'obbligazione: il PN diminuisce (dare utili a nuovo) e sorge una passività (avere debiti per dividendi). Il pagamento estingue il debito con la cassa. I dividendi non transitano mai dal conto economico; l'ultima opzione inverte tutte le direzioni."
        }
      }
    ],
    flashcards: [
      { id: 'fc-acc-de-1', topic: 'double-entry', front: { en: "Which account types increase with a debit?", it: "Quali tipi di conto aumentano in dare?" }, back: { en: "Assets, expenses and dividends (drawings).", it: "Attività, costi e dividendi (prelevamenti)." } },
      { id: 'fc-acc-de-2', topic: 'double-entry', front: { en: "Which account types increase with a credit?", it: "Quali tipi di conto aumentano in avere?" }, back: { en: "Liabilities, equity and revenue (income).", it: "Passività, patrimonio netto e ricavi." } },
      { id: 'fc-acc-de-3', topic: 'double-entry', front: { en: "Journal entry for selling goods on credit (price 90, cost 60)?", it: "Scrittura per una vendita a credito (prezzo 90, costo 60)?" }, back: { en: "Dr Receivables 90 / Cr Revenue 90; Dr COGS 60 / Cr Inventory 60.", it: "Dare Crediti v/clienti 90 / Avere Ricavi 90; Dare Costo del venduto 60 / Avere Magazzino 60." } },
      { id: 'fc-acc-de-4', topic: 'double-entry', front: { en: "What is a contra-asset? Give an example.", it: "Cos'è una posta rettificativa dell'attivo? Fai un esempio." }, back: { en: "An account with a credit balance that reduces a related asset, e.g. accumulated depreciation or the allowance for doubtful receivables.", it: "Un conto con saldo in avere che riduce un'attività collegata, es. il fondo ammortamento o il fondo svalutazione crediti." } },
      { id: 'fc-acc-de-5', topic: 'double-entry', front: { en: "Journal vs ledger?", it: "Libro giornale vs mastro?" }, back: { en: "Journal: entries in chronological order. Ledger: the same entries grouped by account, giving each account's balance.", it: "Giornale: scritture in ordine cronologico. Mastro: le stesse scritture raggruppate per conto, con il saldo di ciascun conto." } }
    ]
  },
  {
    id: 'acc-accrual-accounting',
    academyId: 'accounting',
    moduleId: 'A1',
    mode: 'deep',
    minutes: 12,
    difficulty: 2,
    reviewed: '2026-10',
    objective: {
      en: "Apply accrual accounting: recognise revenue when performance obligations are satisfied and expenses when incurred, and compute accruals, deferrals and prepayments.",
      it: "Applicare il principio di competenza: rilevare i ricavi quando le obbligazioni di fare sono adempiute e i costi quando sostenuti, calcolando ratei, risconti e anticipi."
    },
    screens: [
      {
        type: 'intuition',
        title: { en: "Profit is not cash", it: "L'utile non è cassa" },
        body: {
          en: "A consultancy finishes a €100k project in December but the client pays in February. Did the firm earn money in December? Yes — it did the work.\n\n**Cash accounting** records events when money moves. **Accrual accounting** records them when they are **earned or incurred**, regardless of when cash changes hands.\n\nAccruals give a truer picture of performance in a period. The price is that profit and cash diverge — which is exactly why the cash flow statement exists.",
          it: "Una società di consulenza completa a dicembre un progetto da €100k, ma il cliente paga a febbraio. La società ha guadagnato a dicembre? Sì: il lavoro è stato svolto.\n\nLa **contabilità di cassa** registra gli eventi quando si muove il denaro. La **contabilità per competenza** li registra quando sono **maturati o sostenuti**, indipendentemente dall'incasso o dal pagamento.\n\nLa competenza rappresenta meglio la performance del periodo. Il prezzo è che utile e cassa divergono — ed è proprio per questo che esiste il rendiconto finanziario."
        }
      },
      {
        type: 'technical',
        title: { en: "Revenue recognition: IFRS 15 / ASC 606", it: "Riconoscimento dei ricavi: IFRS 15 / ASC 606" },
        body: {
          en: "IFRS 15 and its US GAAP twin ASC 606 use a **five-step model**:\n\n1. Identify the **contract** with a customer.\n2. Identify the **performance obligations** (distinct goods/services promised).\n3. Determine the **transaction price**.\n4. **Allocate** the price to each performance obligation (relative stand-alone selling prices).\n5. Recognise revenue **when (or as)** each obligation is satisfied — i.e. when control transfers, at a point in time or over time.\n\nCash received in advance is a **contract liability** (deferred revenue), not revenue.",
          it: "L'IFRS 15 e il suo omologo US GAAP, l'ASC 606, adottano un **modello in cinque fasi**:\n\n1. Identificare il **contratto** con il cliente.\n2. Identificare le **obbligazioni di fare** (performance obligation: beni/servizi distinti promessi).\n3. Determinare il **prezzo dell'operazione**.\n4. **Allocare** il prezzo a ciascuna obbligazione (in base ai prezzi di vendita a sé stanti).\n5. Rilevare il ricavo **quando (o man mano che)** l'obbligazione è adempiuta, cioè al trasferimento del controllo, in un momento preciso o nel corso del tempo.\n\nGli incassi anticipati sono una **passività derivante da contratto** (ricavi differiti), non ricavi."
        }
      },
      {
        type: 'technical',
        title: { en: "Expense recognition and matching", it: "Rilevazione dei costi e correlazione" },
        body: {
          en: "Expenses are recognised when the related asset is consumed or the obligation is incurred:\n\n- **Direct matching**: costs tied to specific revenue (e.g. COGS) hit the P&L in the same period as that revenue.\n- **Systematic allocation**: long-lived assets are spread over their useful lives (depreciation, amortisation).\n- **Immediate expense**: period costs with no identifiable future benefit (e.g. most marketing, admin salaries).\n\nThe IFRS Conceptual Framework describes recognising income and related expenses together (“matching”), but does not allow recognising assets or liabilities that fail the definitions just to smooth profit. In Italy, art. 2423-bis of the Civil Code requires income and charges to be recognised by **competenza**, regardless of the date of collection or payment.",
          it: "I costi si rilevano quando la risorsa è consumata o l'obbligazione è sostenuta:\n\n- **Correlazione diretta**: i costi legati a ricavi specifici (es. costo del venduto) vanno a conto economico nello stesso periodo di quei ricavi.\n- **Ripartizione sistematica**: i beni durevoli sono ripartiti sulla vita utile (ammortamenti).\n- **Spesa immediata**: costi di periodo senza un beneficio futuro identificabile (es. gran parte del marketing, stipendi amministrativi).\n\nIl Conceptual Framework IFRS descrive la rilevazione congiunta di ricavi e costi correlati (“matching”), ma non consente di iscrivere attività o passività che non rispettano le definizioni solo per livellare l'utile. In Italia l'art. 2423-bis c.c. impone di tener conto dei proventi e degli oneri di **competenza** dell'esercizio, indipendentemente dalla data dell'incasso o del pagamento."
        }
      },
      {
        type: 'formula',
        formulas: [
          {
            name: { en: "Time-based revenue (over-time obligation)", it: "Ricavi pro rata temporis (obbligazione adempiuta nel tempo)" },
            expr: 'Revenue in period = Contract price × (months of service delivered ÷ total months)'
          },
          {
            name: { en: "Deferred revenue roll-forward", it: "Movimentazione dei ricavi differiti" },
            expr: 'Closing deferred revenue = Opening + Cash billed in advance − Revenue recognised'
          },
          {
            name: { en: "Accrual vs cash profit", it: "Utile per competenza vs per cassa" },
            expr: 'Cash from operations ≈ Net income + Non-cash expenses − Increase in operating assets + Increase in operating liabilities'
          }
        ]
      },
      {
        type: 'technical',
        title: { en: "The four adjusting entries", it: "Le quattro scritture di assestamento" },
        body: {
          en: "At period end, accountants post adjustments so that revenue and expenses land in the right period:",
          it: "A fine periodo si registrano le scritture di assestamento perché ricavi e costi cadano nel periodo corretto:"
        },
        table: {
          headers: [
            { en: 'Situation', it: 'Situazione' },
            { en: 'Balance sheet item', it: 'Voce di stato patrimoniale' },
            { en: 'Example', it: 'Esempio' }
          ],
          rows: [
            [{ en: 'Earned, not yet billed/received', it: 'Maturato, non ancora fatturato/incassato' }, { en: 'Accrued revenue / contract asset (asset)', it: 'Ratei attivi / attività derivanti da contratto' }, { en: 'Interest earned on a deposit', it: 'Interessi attivi maturati su un deposito' }],
            [{ en: 'Received, not yet earned', it: 'Incassato, non ancora maturato' }, { en: 'Deferred revenue / contract liability', it: 'Risconti passivi / passività da contratto' }, { en: 'Annual subscription paid upfront', it: 'Abbonamento annuale pagato in anticipo' }],
            [{ en: 'Incurred, not yet paid', it: 'Sostenuto, non ancora pagato' }, { en: 'Accrued expense (liability)', it: 'Ratei passivi / debiti per costi maturati' }, { en: 'December utilities billed in January', it: 'Utenze di dicembre fatturate a gennaio' }],
            [{ en: 'Paid, not yet incurred', it: 'Pagato, non ancora sostenuto' }, { en: 'Prepaid expense (asset)', it: 'Risconti attivi' }, { en: '12-month insurance paid upfront', it: 'Assicurazione annuale pagata in anticipo' }]
          ]
        }
      },
      {
        type: 'example',
        title: { en: "SaaSCo: subscription and insurance (FY ends 31 Dec)", it: "SaaSCo: abbonamento e assicurazione (esercizio al 31/12)" },
        body: {
          en: "On **1 Oct** SaaSCo bills and collects €1,200k for a 12-month software subscription. On **1 Jul** it paid €2,400k for 12 months of insurance.\n\n- Subscription: 3 of 12 months delivered → revenue **€300k**; deferred revenue **€900k** at year end.\n- Insurance: 6 of 12 months used → expense **€1,200k**; prepaid asset **€1,200k**.\n\nCash basis would show +€1,200k and −€2,400k this year. Accrual basis shows +€300k revenue and −€1,200k expense: the remaining amounts belong to next year.",
          it: "Il **1° ottobre** SaaSCo fattura e incassa €1.200k per un abbonamento software di 12 mesi. Il **1° luglio** ha pagato €2.400k per 12 mesi di assicurazione.\n\n- Abbonamento: 3 mesi su 12 erogati → ricavi **€300k**; risconti passivi **€900k** a fine anno.\n- Assicurazione: 6 mesi su 12 consumati → costo **€1.200k**; risconto attivo **€1.200k**.\n\nPer cassa l'anno mostrerebbe +€1.200k e −€2.400k. Per competenza mostra ricavi per +€300k e costi per −€1.200k: il resto appartiene all'esercizio successivo."
        },
        table: {
          headers: [{ en: 'Entry (€k)', it: 'Scrittura (€k)' }, { en: 'Debit', it: 'Dare' }, { en: 'Credit', it: 'Avere' }],
          rows: [
            [{ en: '1 Oct: cash received', it: '1/10: incasso' }, { en: 'Cash 1,200', it: 'Cassa 1.200' }, { en: 'Deferred revenue 1,200', it: 'Risconti passivi 1.200' }],
            [{ en: '31 Dec: revenue earned', it: '31/12: ricavo maturato' }, { en: 'Deferred revenue 300', it: 'Risconti passivi 300' }, { en: 'Revenue 300', it: 'Ricavi 300' }],
            [{ en: '1 Jul: insurance paid', it: '1/7: premio pagato' }, { en: 'Prepaid insurance 2,400', it: 'Risconti attivi 2.400' }, { en: 'Cash 2,400', it: 'Cassa 2.400' }],
            [{ en: '31 Dec: insurance used', it: '31/12: quota di competenza' }, { en: 'Insurance expense 1,200', it: 'Costo assicurazioni 1.200' }, { en: 'Prepaid insurance 1,200', it: 'Risconti attivi 1.200' }]
          ]
        }
      },
      { type: 'exercise', questionId: 'acc-acr-q1' },
      { type: 'exercise', questionId: 'acc-acr-q2' },
      {
        type: 'realworld',
        body: {
          en: "Subscription businesses report large deferred revenue balances: customers pay upfront, so cash arrives before revenue. Analysts track **billings** (revenue + change in deferred revenue) as a leading indicator. Conversely, a company booking revenue faster than it collects cash shows rising receivables — a classic warning sign bankers look for when diligencing a target's earnings quality.",
          it: "I business in abbonamento hanno risconti passivi elevati: i clienti pagano in anticipo, quindi la cassa arriva prima dei ricavi. Gli analisti monitorano le **billings** (ricavi + variazione dei ricavi differiti) come indicatore anticipatore. Al contrario, un'azienda che rileva ricavi più velocemente di quanto incassi mostra crediti in crescita — un classico segnale d'allarme che i banker cercano quando analizzano la qualità degli utili di un target."
        }
      },
      { type: 'exercise', questionId: 'acc-acr-q3' },
      {
        type: 'interview',
        question: { en: "A customer prepays €12m for a one-year service contract starting today. How does this affect the three statements on day one and after one quarter? (Ignore taxes.)", it: "Un cliente paga in anticipo €12m per un contratto di servizi annuale che parte oggi. Che effetto ha sui tre prospetti il primo giorno e dopo un trimestre? (Ignori le imposte.)" },
        answer: {
          en: "Day one: no income statement impact. Cash rises €12m and deferred revenue, a liability, rises €12m; cash from operations is +€12m through the increase in deferred revenue. After one quarter, €3m is earned: revenue and net income +€3m, deferred revenue falls to €9m, and equity rises €3m via retained earnings. No further cash moves, so on the cash flow statement the +€3m of net income is offset by the −€3m change in deferred revenue.",
          it: "Il primo giorno nessun impatto sul conto economico. La cassa aumenta di €12m e i risconti passivi, una passività, di €12m; il flusso operativo è +€12m grazie all'aumento dei ricavi differiti. Dopo un trimestre maturano €3m: ricavi e utile +€3m, i risconti passivi scendono a €9m e il PN cresce di €3m tramite gli utili a nuovo. Non ci sono altri movimenti di cassa: nel rendiconto il +€3m di utile è compensato dal −€3m di variazione dei ricavi differiti."
        }
      },
      {
        type: 'mistakes',
        items: [
          { en: "Recognising customer prepayments as revenue on receipt. They are a liability until the service is delivered.", it: "Rilevare gli anticipi dei clienti come ricavi all'incasso. Sono una passività finché il servizio non è reso." },
          { en: "Expensing a multi-year prepayment immediately. Only the portion consumed in the period is an expense.", it: "Spesare subito un pagamento anticipato pluriennale. Solo la quota consumata nel periodo è un costo." },
          { en: "Thinking “matching” lets you defer any cost to smooth profit. Only items meeting the asset definition can be capitalised.", it: "Pensare che la “correlazione” consenta di rinviare qualsiasi costo per livellare l'utile. Si capitalizza solo ciò che soddisfa la definizione di attività." },
          { en: "Mixing up Italian terms: ratei = accrued (cash later), risconti = deferred/prepaid (cash already moved).", it: "Confondere i termini: ratei = quote maturate con manifestazione numeraria futura; risconti = quote rinviate di incassi/pagamenti già avvenuti." }
        ]
      },
      {
        type: 'summary',
        items: [
          { en: "Accrual accounting records revenue when earned and expenses when incurred, not when cash moves.", it: "La competenza rileva i ricavi quando maturano e i costi quando sono sostenuti, non quando si muove la cassa." },
          { en: "IFRS 15 / ASC 606: five steps; revenue when control of goods/services transfers.", it: "IFRS 15 / ASC 606: cinque fasi; ricavo al trasferimento del controllo di beni/servizi." },
          { en: "Adjusting entries create accrued revenue, deferred revenue, accrued expenses and prepaid expenses.", it: "Le scritture di assestamento generano ratei attivi, risconti passivi, ratei passivi e risconti attivi." },
          { en: "The gap between accrual profit and cash is explained in the cash flow statement.", it: "La differenza tra utile per competenza e cassa è spiegata nel rendiconto finanziario." }
        ]
      }
    ],
    questions: [
      {
        id: 'acc-acr-q1',
        kind: 'numeric',
        topic: 'accrual-accounting',
        difficulty: 1,
        objective: { en: "Compute revenue on an over-time contract.", it: "Calcolare i ricavi di un contratto adempiuto nel tempo." },
        prompt: {
          en: "On 1 September a company collects €600k for a 12-month maintenance contract, delivered evenly. The financial year ends 31 December. How much revenue is recognised this year (€k)?",
          it: "Il 1° settembre un'azienda incassa €600k per un contratto di manutenzione di 12 mesi, erogato in modo uniforme. L'esercizio chiude il 31 dicembre. Quanti ricavi si rilevano nell'anno (€k)?"
        },
        answer: 200,
        unit: '€k',
        verify: { fn: 'product', args: [600, 0.3333333333333333] },
        tolerance: { abs: 0.5 },
        explanation: {
          en: "Four months (Sep–Dec) of 12 are delivered: 600 × 4/12 = 200. The remaining 400 sits in deferred revenue. Recognising 600 confuses cash with revenue.",
          it: "Sono erogati quattro mesi (set–dic) su 12: 600 × 4/12 = 200. I restanti 400 restano tra i risconti passivi. Rilevare 600 significa confondere cassa e ricavi."
        }
      },
      {
        id: 'acc-acr-q2',
        kind: 'mcq',
        topic: 'accrual-accounting',
        difficulty: 2,
        objective: { en: "Classify an accrual adjustment.", it: "Classificare una scrittura di assestamento." },
        prompt: {
          en: "Employees earned €50k of wages in the last week of December, to be paid on 5 January. What adjustment is needed at 31 December?",
          it: "I dipendenti hanno maturato €50k di salari nell'ultima settimana di dicembre, pagati il 5 gennaio. Quale scrittura serve al 31 dicembre?"
        },
        choices: [
          { en: "None — record the expense when paid in January", it: "Nessuna — si rileva il costo al pagamento di gennaio" },
          { en: "Dr Prepaid wages 50 / Cr Cash 50", it: "Dare Risconti attivi 50 / Avere Cassa 50" },
          { en: "Dr Wages payable 50 / Cr Wages expense 50", it: "Dare Debiti per salari 50 / Avere Costo del personale 50" },
          { en: "Dr Wages expense 50 / Cr Wages payable (accrued liability) 50", it: "Dare Costo del personale 50 / Avere Debiti per salari maturati 50" }
        ],
        correct: 3,
        explanation: {
          en: "The cost is incurred in December, so it is a December expense with an accrued liability until paid. Waiting for payment is cash accounting; no cash has moved, so a prepaid is wrong; the third option reverses debit and credit.",
          it: "Il costo è sostenuto a dicembre, quindi è di competenza di dicembre, con una passività fino al pagamento. Attendere il pagamento è contabilità di cassa; non c'è movimento di cassa, quindi il risconto è errato; la terza opzione inverte dare e avere."
        }
      },
      {
        id: 'acc-acr-q3',
        kind: 'numeric',
        topic: 'accrual-accounting',
        difficulty: 2,
        objective: { en: "Roll forward deferred revenue.", it: "Movimentare i ricavi differiti." },
        prompt: {
          en: "Deferred revenue opens at €80m. During the year the company bills and collects €250m in advance and recognises €230m of revenue from those contracts. What is closing deferred revenue (€m)?",
          it: "I ricavi differiti iniziali sono €80m. Nell'anno l'azienda fattura e incassa anticipatamente €250m e rileva €230m di ricavi da quei contratti. Qual è il saldo finale dei ricavi differiti (€m)?"
        },
        answer: 100,
        unit: '€m',
        verify: { fn: 'sum', args: [80, 250, -230] },
        explanation: {
          en: "Closing = opening + billings − revenue recognised = 80 + 250 − 230 = 100. The €20m increase is a source of operating cash.",
          it: "Finale = iniziale + fatturato anticipato − ricavi rilevati = 80 + 250 − 230 = 100. L'aumento di €20m è una fonte di cassa operativa."
        }
      },
      {
        id: 'acc-acr-q4',
        kind: 'order',
        topic: 'revenue-recognition',
        difficulty: 1,
        objective: { en: "Sequence the IFRS 15 five-step model.", it: "Ordinare le cinque fasi dell'IFRS 15." },
        prompt: { en: "Put the IFRS 15 / ASC 606 steps in order.", it: "Metti in ordine le fasi IFRS 15 / ASC 606." },
        items: [
          { en: "Identify the contract with the customer", it: "Identificare il contratto con il cliente" },
          { en: "Identify the performance obligations", it: "Identificare le obbligazioni di fare" },
          { en: "Determine the transaction price", it: "Determinare il prezzo dell'operazione" },
          { en: "Allocate the price to the performance obligations", it: "Allocare il prezzo alle obbligazioni di fare" },
          { en: "Recognise revenue when (or as) each obligation is satisfied", it: "Rilevare il ricavo quando (o man mano che) l'obbligazione è adempiuta" }
        ],
        explanation: {
          en: "Contract → performance obligations → price → allocation → recognition. You cannot allocate a price before you know what is being sold and for how much.",
          it: "Contratto → obbligazioni di fare → prezzo → allocazione → rilevazione. Non si può allocare un prezzo prima di sapere cosa si vende e a quale corrispettivo."
        }
      },
      {
        id: 'acc-acr-q5',
        kind: 'multi',
        topic: 'accrual-accounting',
        difficulty: 2,
        objective: { en: "Distinguish events that affect accrual profit from those that only affect cash.", it: "Distinguere gli eventi che incidono sull'utile da quelli che incidono solo sulla cassa." },
        prompt: { en: "Which events change this year's net income? Select all that apply.", it: "Quali eventi modificano l'utile netto di quest'anno? Seleziona tutte le risposte corrette." },
        choices: [
          { en: "Collecting a receivable from last year's sale", it: "Incasso di un credito relativo a una vendita dell'anno scorso" },
          { en: "Delivering goods this year that the client will pay for next year", it: "Consegna di merci quest'anno che il cliente pagherà l'anno prossimo" },
          { en: "Paying next year's rent in advance", it: "Pagamento anticipato dell'affitto del prossimo anno" },
          { en: "Interest accrued on a loan but payable next year", it: "Interessi maturati su un finanziamento ma pagabili l'anno prossimo" }
        ],
        correct: [1, 3],
        explanation: {
          en: "Revenue is earned on delivery and interest is incurred over time, so both hit this year's P&L despite no cash. Collecting an old receivable only swaps receivables for cash; prepaying next year's rent creates a prepaid asset.",
          it: "Il ricavo matura alla consegna e gli interessi maturano nel tempo: entrambi incidono sul conto economico dell'anno pur senza cassa. L'incasso di un vecchio credito scambia solo crediti con cassa; l'affitto anticipato genera un risconto attivo."
        }
      }
    ],
    flashcards: [
      { id: 'fc-acc-acr-1', topic: 'revenue-recognition', front: { en: "IFRS 15 five steps?", it: "Le cinque fasi dell'IFRS 15?" }, back: { en: "Contract → performance obligations → transaction price → allocation → recognise when/as obligations are satisfied.", it: "Contratto → obbligazioni di fare → prezzo → allocazione → rilevazione quando/man mano che le obbligazioni sono adempiute." } },
      { id: 'fc-acc-acr-2', topic: 'accrual-accounting', front: { en: "Customer pays upfront for a service not yet delivered: which balance sheet item?", it: "Il cliente paga in anticipo un servizio non ancora reso: quale voce patrimoniale?" }, back: { en: "Deferred revenue / contract liability (Italian GAAP: risconti passivi or acconti).", it: "Ricavi differiti / passività da contratto (OIC: risconti passivi o acconti)." } },
      { id: 'fc-acc-acr-3', topic: 'accrual-accounting', front: { en: "Ratei vs risconti?", it: "Ratei vs risconti?" }, back: { en: "Ratei: income/charges accrued in the period with cash in a later period. Risconti: portions of cash already received/paid that relate to a later period.", it: "Ratei: quote di proventi/oneri maturate nel periodo con manifestazione numeraria futura. Risconti: quote di incassi/pagamenti già avvenuti di competenza di esercizi futuri." } },
      { id: 'fc-acc-acr-4', topic: 'accrual-accounting', front: { en: "Three ways expenses are recognised?", it: "Tre modalità di rilevazione dei costi?" }, back: { en: "Direct matching with revenue (COGS), systematic allocation (depreciation), immediate expense (period costs).", it: "Correlazione diretta con i ricavi (costo del venduto), ripartizione sistematica (ammortamento), spesa immediata (costi di periodo)." } },
      { id: 'fc-acc-acr-5', topic: 'accrual-accounting', front: { en: "Italian Civil Code article on the accrual principle?", it: "Articolo del Codice Civile sul principio di competenza?" }, back: { en: "Art. 2423-bis c.c.: income and charges of the year are recognised regardless of the date of collection or payment.", it: "Art. 2423-bis c.c.: si tiene conto dei proventi e degli oneri di competenza dell'esercizio, indipendentemente dalla data dell'incasso o del pagamento." } }
    ],
    sources: [
      { label: 'IFRS Foundation — IFRS 15 Revenue from Contracts with Customers', url: 'https://www.ifrs.org/issued-standards/list-of-standards/ifrs-15-revenue-from-contracts-with-customers/' },
      { label: 'IFRS Foundation — Conceptual Framework for Financial Reporting (2018), ch. 5 Recognition', url: 'https://www.ifrs.org/issued-standards/list-of-standards/conceptual-framework/' },
      { label: 'FASB — ASC 606 Revenue from Contracts with Customers', url: 'https://www.fasb.org/page/PageContent?pageId=/projects/recentlycompleted/revenue-from-contracts-with-customers.html' },
      { label: 'Codice Civile, art. 2423-bis (Principi di redazione del bilancio)', url: 'https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262' }
    ]
  },
  {
    id: 'acc-trial-balance',
    academyId: 'accounting',
    moduleId: 'A1',
    mode: 'quick',
    minutes: 7,
    difficulty: 1,
    reviewed: '2026-10',
    objective: {
      en: "Explain the accounting cycle from journal to financial statements, build a trial balance and know which errors it can and cannot detect.",
      it: "Spiegare il ciclo contabile dal libro giornale al bilancio, costruire un bilancio di verifica e sapere quali errori può e non può rilevare."
    },
    screens: [
      {
        type: 'intuition',
        title: { en: "A checkpoint before the statements", it: "Un controllo prima del bilancio" },
        body: {
          en: "After thousands of journal entries, how do you know the books are arithmetically sound? You list every ledger account with its balance — debits in one column, credits in the other — and check the totals agree.\n\nThat list is the **trial balance (TB)**. It is the bridge between bookkeeping and the financial statements: every line of the balance sheet and income statement is a grouping of TB accounts.",
          it: "Dopo migliaia di scritture, come si verifica che i conti siano aritmeticamente corretti? Si elencano tutti i conti del mastro con il loro saldo — dare in una colonna, avere nell'altra — e si controlla che i totali coincidano.\n\nQuesto elenco è il **bilancio di verifica**. È il ponte tra contabilità e bilancio d'esercizio: ogni riga di stato patrimoniale e conto economico è un raggruppamento di conti del bilancio di verifica."
        }
      },
      {
        type: 'technical',
        title: { en: "The accounting cycle", it: "Il ciclo contabile" },
        body: {
          en: "1. **Transactions** are documented (invoices, contracts, bank statements).\n2. **Journal entries** are recorded.\n3. Entries are **posted to the ledger**.\n4. An **unadjusted trial balance** is extracted.\n5. **Adjusting entries** are booked (accruals, deferrals, depreciation, provisions, impairments).\n6. An **adjusted trial balance** is prepared.\n7. **Financial statements** are drawn up from it.\n8. **Closing entries** zero out revenue and expense accounts into retained earnings for the new year.",
          it: "1. Le **operazioni** sono documentate (fatture, contratti, estratti conto).\n2. Si registrano le **scritture** a libro giornale.\n3. Le scritture sono **riportate a mastro**.\n4. Si estrae il **bilancio di verifica ante rettifiche**.\n5. Si registrano le **scritture di assestamento** (ratei, risconti, ammortamenti, accantonamenti, svalutazioni).\n6. Si prepara il **bilancio di verifica rettificato**.\n7. Da questo si redige il **bilancio d'esercizio**.\n8. Le **scritture di chiusura** azzerano i conti di ricavo e costo negli utili a nuovo per il nuovo esercizio."
        }
      },
      {
        type: 'formula',
        formulas: [
          {
            name: { en: "Trial balance check", it: "Quadratura del bilancio di verifica" },
            expr: 'Σ Debit balances = Σ Credit balances'
          },
          {
            name: { en: "Profit from the TB (pre-closing)", it: "Utile dal bilancio di verifica (prima della chiusura)" },
            expr: 'Net income = Σ Revenue (credit) accounts − Σ Expense (debit) accounts'
          }
        ]
      },
      {
        type: 'example',
        title: { en: "Beta S.r.l. adjusted trial balance (€k)", it: "Bilancio di verifica rettificato di Beta S.r.l. (€k)" },
        body: {
          en: "Totals agree at 580. Revenue 300 − COGS 180 − opex 70 − interest 10 gives pre-tax profit of **40**. After closing, retained earnings become 25 + 40 = 65 (ignoring tax and dividends).",
          it: "I totali coincidono a 580. Ricavi 300 − costo del venduto 180 − costi operativi 70 − interessi 10 danno un utile ante imposte di **40**. Dopo la chiusura gli utili a nuovo diventano 25 + 40 = 65 (ignorando imposte e dividendi)."
        },
        table: {
          headers: [{ en: 'Account', it: 'Conto' }, { en: 'Debit', it: 'Dare' }, { en: 'Credit', it: 'Avere' }],
          rows: [
            [{ en: 'Cash', it: 'Cassa e banche' }, '50', ''],
            [{ en: 'Trade receivables', it: 'Crediti v/clienti' }, '30', ''],
            [{ en: 'Inventory', it: 'Rimanenze' }, '40', ''],
            [{ en: 'PP&E (net)', it: 'Immobilizzazioni materiali nette' }, '200', ''],
            [{ en: 'Trade payables', it: 'Debiti v/fornitori' }, '', '35'],
            [{ en: 'Bank loan', it: 'Debiti verso banche' }, '', '100'],
            [{ en: 'Share capital', it: 'Capitale sociale' }, '', '120'],
            [{ en: 'Retained earnings (opening)', it: 'Utili a nuovo (iniziali)' }, '', '25'],
            [{ en: 'Revenue', it: 'Ricavi' }, '', '300'],
            [{ en: 'COGS', it: 'Costo del venduto' }, '180', ''],
            [{ en: 'Operating expenses', it: 'Costi operativi' }, '70', ''],
            [{ en: 'Interest expense', it: 'Oneri finanziari' }, '10', ''],
            [{ en: 'Total', it: 'Totale' }, '580', '580']
          ],
          totalRows: [12]
        }
      },
      {
        type: 'technical',
        title: { en: "What a balanced TB does NOT prove", it: "Cosa NON dimostra un bilancio di verifica quadrato" },
        body: {
          en: "A TB only checks that debits equal credits. It will **not** reveal:\n\n- **Omission**: a transaction never recorded.\n- **Commission**: right amount, wrong account of the same type (e.g. posted to customer A instead of B).\n- **Principle**: wrong type of account (e.g. a repair capitalised as an asset).\n- **Compensating errors**: two mistakes that offset.\n- **Original entry**: wrong amount on both sides (e.g. 540 keyed as 450 in debit and credit).\n- **Complete reversal**: debit and credit swapped.\n\nThat is why audits test transactions, not just totals.",
          it: "Il bilancio di verifica controlla solo che dare e avere coincidano. **Non** rileva:\n\n- **Omissioni**: un'operazione mai registrata.\n- **Errori di conto**: importo corretto, conto sbagliato dello stesso tipo (es. cliente A invece di B).\n- **Errori di principio**: tipo di conto sbagliato (es. una manutenzione capitalizzata).\n- **Errori compensativi**: due errori che si annullano.\n- **Errori di importo originario**: importo sbagliato su entrambi i lati (es. 540 digitato 450 in dare e in avere).\n- **Inversioni complete**: dare e avere scambiati.\n\nPer questo la revisione verifica le operazioni, non solo i totali."
        }
      },
      { type: 'exercise', questionId: 'acc-tb-q1' },
      { type: 'exercise', questionId: 'acc-tb-q2' },
      {
        type: 'realworld',
        body: {
          en: "In M&A, the trial balance is often the first data request in financial due diligence. Advisers map the target's TB accounts to a standard chart of accounts, rebuild the statements and run quality-of-earnings analysis. Mapping errors — an expense line classified below EBITDA, for instance — directly change the EBITDA a buyer pays a multiple on.",
          it: "Nelle operazioni di M&A il bilancio di verifica è spesso la prima richiesta in due diligence finanziaria. Gli advisor riconducono i conti del target a un piano dei conti standard, ricostruiscono i prospetti ed eseguono l'analisi di quality of earnings. Un errore di riclassifica — un costo classificato sotto l'EBITDA, per esempio — cambia direttamente l'EBITDA su cui l'acquirente applica il multiplo."
        }
      },
      { type: 'exercise', questionId: 'acc-tb-q3' },
      {
        type: 'interview',
        question: { en: "The trial balance balances. Does that mean the financial statements are correct?", it: "Il bilancio di verifica quadra. Significa che il bilancio è corretto?" },
        answer: {
          en: "No. It only proves debits equal credits. Omitted transactions, entries posted to the wrong account, errors of principle such as capitalising an expense, offsetting errors and reversed entries all leave the TB balanced. And it says nothing about judgements such as provisions, impairments or revenue timing, which is where most material misstatements arise.",
          it: "No. Dimostra solo che dare e avere coincidono. Operazioni omesse, scritture su conti sbagliati, errori di principio come capitalizzare un costo, errori compensativi e scritture invertite lasciano il bilancio di verifica in quadratura. E non dice nulla sulle valutazioni — accantonamenti, svalutazioni, competenza dei ricavi — dove nasce la maggior parte degli errori significativi."
        }
      },
      {
        type: 'mistakes',
        items: [
          { en: "Preparing the statements from the unadjusted TB, missing accruals, depreciation and provisions.", it: "Redigere il bilancio dal bilancio di verifica ante rettifiche, dimenticando ratei, ammortamenti e accantonamenti." },
          { en: "Adding opening retained earnings and current-year profit twice: before closing, profit sits in revenue and expense accounts.", it: "Contare due volte utili a nuovo iniziali e utile dell'esercizio: prima della chiusura l'utile è nei conti di ricavo e costo." },
          { en: "Treating a balanced TB as proof of accuracy.", it: "Considerare la quadratura una prova di correttezza." }
        ]
      },
      {
        type: 'summary',
        items: [
          { en: "Cycle: transactions → journal → ledger → unadjusted TB → adjustments → adjusted TB → statements → closing.", it: "Ciclo: operazioni → giornale → mastro → verifica ante rettifiche → assestamento → verifica rettificato → bilancio → chiusura." },
          { en: "A TB lists every account balance; total debits must equal total credits.", it: "Il bilancio di verifica elenca i saldi di tutti i conti; totale dare = totale avere." },
          { en: "It catches arithmetic and one-sided errors, not omissions, misclassifications or offsetting errors.", it: "Rileva errori aritmetici e unilaterali, non omissioni, errate classificazioni o errori compensativi." }
        ]
      }
    ],
    questions: [
      {
        id: 'acc-tb-q1',
        kind: 'numeric',
        topic: 'trial-balance',
        difficulty: 1,
        objective: { en: "Solve for a missing balance in a trial balance.", it: "Ricavare un saldo mancante nel bilancio di verifica." },
        prompt: {
          en: "A trial balance has credit balances totalling €910k. Debit balances excluding cash total €845k. What must the cash balance be for the TB to balance (€k)?",
          it: "In un bilancio di verifica i saldi in avere ammontano a €910k. I saldi in dare esclusa la cassa ammontano a €845k. Quale deve essere il saldo di cassa perché il bilancio di verifica quadri (€k)?"
        },
        answer: 65,
        unit: '€k',
        verify: { fn: 'diff', args: [910, 845] },
        explanation: { en: "Cash has a debit balance: 910 − 845 = 65.", it: "La cassa ha saldo in dare: 910 − 845 = 65." }
      },
      {
        id: 'acc-tb-q2',
        kind: 'mcq',
        topic: 'trial-balance',
        difficulty: 2,
        objective: { en: "Recognise which error a trial balance detects.", it: "Riconoscere quale errore il bilancio di verifica rileva." },
        prompt: { en: "Which error would cause the trial balance NOT to balance?", it: "Quale errore farebbe NON quadrare il bilancio di verifica?" },
        choices: [
          { en: "A €5k sales invoice was never recorded", it: "Una fattura di vendita di €5k non è mai stata registrata" },
          { en: "A €2k repair was debited to PP&E instead of repairs expense", it: "Una manutenzione di €2k è stata addebitata alle immobilizzazioni invece che a costo" },
          { en: "A €3k payment to a supplier was credited to cash but never debited to payables", it: "Un pagamento di €3k a un fornitore è stato registrato in avere alla cassa ma mai in dare ai debiti" },
          { en: "A €4k receipt was debited to payables and credited to cash instead of the reverse", it: "Un incasso di €4k è stato registrato in dare ai debiti e in avere alla cassa invece del contrario" }
        ],
        correct: 2,
        explanation: {
          en: "Only a one-sided posting breaks the equality of debits and credits (credits exceed debits by 3). An omitted invoice, an error of principle and a complete reversal all keep debits equal to credits.",
          it: "Solo una registrazione unilaterale rompe l'uguaglianza tra dare e avere (l'avere supera il dare di 3). Una fattura omessa, un errore di principio e un'inversione completa mantengono dare = avere."
        }
      },
      {
        id: 'acc-tb-q3',
        kind: 'order',
        topic: 'trial-balance',
        difficulty: 1,
        objective: { en: "Sequence the accounting cycle.", it: "Ordinare il ciclo contabile." },
        prompt: { en: "Put the steps of the accounting cycle in order.", it: "Metti in ordine le fasi del ciclo contabile." },
        items: [
          { en: "Record journal entries", it: "Registrare le scritture a libro giornale" },
          { en: "Post to the ledger", it: "Riportare a mastro" },
          { en: "Extract the unadjusted trial balance", it: "Estrarre il bilancio di verifica ante rettifiche" },
          { en: "Book adjusting entries", it: "Registrare le scritture di assestamento" },
          { en: "Prepare the financial statements", it: "Redigere il bilancio d'esercizio" },
          { en: "Book closing entries", it: "Registrare le scritture di chiusura" }
        ],
        explanation: {
          en: "Adjustments come after the first TB reveals the raw balances; statements use adjusted balances; closing entries reset the P&L accounts last.",
          it: "Le rettifiche seguono il primo bilancio di verifica; il bilancio usa i saldi rettificati; le scritture di chiusura azzerano per ultime i conti economici."
        }
      },
      {
        id: 'acc-tb-q4',
        kind: 'numeric',
        topic: 'trial-balance',
        difficulty: 2,
        objective: { en: "Derive net income from trial balance accounts.", it: "Ricavare l'utile dai conti del bilancio di verifica." },
        prompt: {
          en: "Adjusted TB extract (€k): Revenue 1,250 Cr; COGS 700 Dr; SG&A 260 Dr; Depreciation 90 Dr; Interest expense 40 Dr; Income tax expense 40 Dr; Dividends declared 50 Dr. What is net income (€k)?",
          it: "Estratto del bilancio di verifica rettificato (€k): Ricavi 1.250 Avere; Costo del venduto 700 Dare; Costi generali e commerciali 260 Dare; Ammortamenti 90 Dare; Oneri finanziari 40 Dare; Imposte 40 Dare; Dividendi deliberati 50 Dare. Qual è l'utile netto (€k)?"
        },
        answer: 120,
        unit: '€k',
        verify: { fn: 'sum', args: [1250, -700, -260, -90, -40, -40] },
        explanation: {
          en: "1,250 − 700 − 260 − 90 − 40 − 40 = 120. Dividends are a debit balance but a distribution of equity, not an expense, so they are excluded (subtracting them gives the wrong answer of 70).",
          it: "1.250 − 700 − 260 − 90 − 40 − 40 = 120. I dividendi hanno saldo in dare ma sono una distribuzione di PN, non un costo, quindi si escludono (sottraendoli si ottiene l'errato 70)."
        }
      }
    ],
    flashcards: [
      { id: 'fc-acc-tb-1', topic: 'trial-balance', front: { en: "What is a trial balance?", it: "Cos'è il bilancio di verifica?" }, back: { en: "A list of all ledger account balances at a date, in debit and credit columns whose totals must agree.", it: "L'elenco dei saldi di tutti i conti di mastro a una data, in colonne dare e avere i cui totali devono coincidere." } },
      { id: 'fc-acc-tb-2', topic: 'trial-balance', front: { en: "Name four errors a balanced TB will not reveal.", it: "Indica quattro errori che un bilancio di verifica quadrato non rileva." }, back: { en: "Omission, commission (wrong account), principle (wrong account type), compensating errors; also original-entry errors and complete reversals.", it: "Omissione, errore di conto, errore di principio, errori compensativi; inoltre errori di importo originario e inversioni complete." } },
      { id: 'fc-acc-tb-3', topic: 'trial-balance', front: { en: "What do closing entries do?", it: "A cosa servono le scritture di chiusura?" }, back: { en: "Transfer revenue, expense and dividend balances to retained earnings, resetting them to zero for the new period.", it: "Trasferiscono i saldi di ricavi, costi e dividendi negli utili a nuovo, azzerandoli per il nuovo esercizio." } },
      { id: 'fc-acc-tb-4', topic: 'trial-balance', front: { en: "Unadjusted vs adjusted TB?", it: "Bilancio di verifica ante rettifiche vs rettificato?" }, back: { en: "Adjusted includes period-end entries (accruals, deferrals, depreciation, provisions); statements are prepared from it.", it: "Il rettificato include le scritture di fine periodo (ratei, risconti, ammortamenti, accantonamenti); da esso si redige il bilancio." } }
    ]
  },
  {
    id: 'acc-income-statement',
    academyId: 'accounting',
    moduleId: 'A2',
    mode: 'deep',
    minutes: 12,
    difficulty: 1,
    reviewed: '2026-10',
    objective: {
      en: "Walk down the income statement from revenue to net income and compute gross profit, EBITDA, EBIT, EBT and margins.",
      it: "Percorrere il conto economico dai ricavi all'utile netto e calcolare margine lordo, EBITDA, EBIT, EBT e i relativi margini."
    },
    screens: [
      {
        type: 'intuition',
        title: { en: "A waterfall of claims on revenue", it: "Una cascata di pretese sui ricavi" },
        body: {
          en: "Think of revenue as water flowing down a series of buckets. First the cost of making the product, then the cost of running the company, then the wear on its assets, then the lenders' interest, then the tax authority. Whatever reaches the bottom belongs to shareholders: **net income**.\n\nEach subtotal on the way down answers a different question — and is used by a different person in a deal.",
          it: "Immagina i ricavi come acqua che scende attraverso una serie di secchi. Prima il costo per produrre, poi quello per gestire l'azienda, poi il consumo dei beni strumentali, poi gli interessi dei finanziatori, infine il fisco. Ciò che arriva in fondo spetta agli azionisti: l'**utile netto**.\n\nOgni risultato intermedio risponde a una domanda diversa — ed è usato da una persona diversa in un deal."
        }
      },
      {
        type: 'technical',
        title: { en: "The standard layout (by function)", it: "Lo schema standard (per destinazione)" },
        body: {
          en: "- **Revenue** (net of discounts and returns)\n- − **COGS** → **Gross profit**\n- − **Operating expenses** (SG&A, R&D) → **EBITDA** (if D&A is shown separately)\n- − **D&A** → **EBIT** (≈ operating profit)\n- − **Net interest expense** (± other financial items) → **EBT** (pre-tax profit)\n- − **Income tax expense** → **Net income**\n- Net income attributable to non-controlling interests is then split out from that attributable to the parent's shareholders.\n\nUnder IAS 1 companies present expenses **by function** (COGS, SG&A) or **by nature** (raw materials, staff costs, D&A). The Italian Civil Code format (art. 2425) is by nature.",
          it: "- **Ricavi** (al netto di sconti e resi)\n- − **Costo del venduto** → **Margine lordo**\n- − **Costi operativi** (commerciali, generali e amministrativi, R&S) → **EBITDA** (se gli ammortamenti sono esposti a parte)\n- − **Ammortamenti** → **EBIT** (≈ risultato operativo)\n- − **Oneri finanziari netti** (± altre componenti finanziarie) → **EBT** (utile ante imposte)\n- − **Imposte sul reddito** → **Utile netto**\n- L'utile di pertinenza di terzi viene poi separato da quello di pertinenza degli azionisti della capogruppo.\n\nIn base allo IAS 1 i costi si classificano **per destinazione** (costo del venduto, costi commerciali e amministrativi) o **per natura** (materie prime, personale, ammortamenti). Lo schema civilistico (art. 2425 c.c.) è per natura."
        }
      },
      {
        type: 'formula',
        formulas: [
          { name: { en: "Gross profit", it: "Margine lordo" }, expr: 'Gross profit = Revenue − COGS' },
          { name: { en: "EBIT", it: "EBIT" }, expr: 'EBIT = Revenue − COGS − Operating expenses − D&A' },
          {
            name: { en: "EBITDA", it: "EBITDA" },
            expr: 'EBITDA = EBIT + D&A',
            vars: [
              { sym: 'D&A', desc: { en: "Depreciation of tangible assets and amortisation of intangibles", it: "Ammortamenti delle immobilizzazioni materiali e immateriali" } }
            ]
          },
          { name: { en: "Net income", it: "Utile netto" }, expr: 'Net income = (EBIT − Net interest) × (1 − tax rate)' },
          { name: { en: "Margins", it: "Margini" }, expr: 'Margin = Subtotal ÷ Revenue (e.g. EBITDA margin = EBITDA ÷ Revenue)' }
        ],
        note: {
          en: "The net income formula assumes the effective tax rate applies to EBT and there are no other items between EBIT and EBT.",
          it: "La formula dell'utile netto assume che l'aliquota effettiva si applichi all'EBT e che non vi siano altre voci tra EBIT ed EBT."
        }
      },
      {
        type: 'example',
        title: { en: "Delta S.p.A. — FY income statement (€m)", it: "Delta S.p.A. — conto economico (€m)" },
        body: {
          en: "Tax rate 25%. Note how each subtotal is a different lens on the same business.",
          it: "Aliquota fiscale 25%. Ogni risultato intermedio è una lente diversa sullo stesso business."
        },
        table: {
          headers: [{ en: 'Line', it: 'Voce' }, { en: '€m', it: '€m' }, { en: '% revenue', it: '% ricavi' }],
          rows: [
            [{ en: 'Revenue', it: 'Ricavi' }, '1,000.0', '100%'],
            [{ en: 'COGS (excl. D&A)', it: 'Costo del venduto (escl. ammortamenti)' }, '(600.0)', ''],
            [{ en: 'Gross profit', it: 'Margine lordo' }, '400.0', '40%'],
            [{ en: 'SG&A', it: 'Costi commerciali e generali' }, '(150.0)', ''],
            [{ en: 'EBITDA', it: 'EBITDA' }, '250.0', '25%'],
            [{ en: 'D&A', it: 'Ammortamenti' }, '(50.0)', ''],
            [{ en: 'EBIT', it: 'EBIT' }, '200.0', '20%'],
            [{ en: 'Net interest expense', it: 'Oneri finanziari netti' }, '(30.0)', ''],
            [{ en: 'EBT', it: 'Utile ante imposte' }, '170.0', '17%'],
            [{ en: 'Income tax (25%)', it: 'Imposte (25%)' }, '(42.5)', ''],
            [{ en: 'Net income', it: 'Utile netto' }, '127.5', '12.75%']
          ],
          totalRows: [2, 4, 6, 8, 10]
        }
      },
      {
        type: 'technical',
        title: { en: "Why bankers love (and distrust) EBITDA", it: "Perché i banker amano (e diffidano del)l'EBITDA" },
        body: {
          en: "**EBITDA** is a proxy for operating cash generation before capital structure, tax and capital intensity. It is **capital-structure neutral**, so it pairs with **enterprise value** (EV/EBITDA) and drives leverage metrics (Net debt/EBITDA).\n\nBut it is **not defined by IFRS or US GAAP** — it is an alternative performance measure (APM). It ignores CapEx, working capital and tax, so a capital-intensive business can have strong EBITDA and weak cash flow.\n\nWith function-based statements D&A is buried in COGS and SG&A: take it from the **cash flow statement** to compute EBITDA. “Adjusted EBITDA” also strips out items management calls one-off — always read the reconciliation.",
          it: "L'**EBITDA** approssima la generazione di cassa operativa prima di struttura finanziaria, imposte e intensità di capitale. È **neutrale rispetto alla struttura del capitale**, quindi si abbina all'**enterprise value** (EV/EBITDA) e guida le metriche di leva (PFN/EBITDA).\n\nMa **non è definito da IFRS né US GAAP**: è un indicatore alternativo di performance (IAP). Ignora CapEx, capitale circolante e imposte, quindi un business ad alta intensità di capitale può avere un EBITDA robusto e flussi di cassa deboli.\n\nNegli schemi per destinazione gli ammortamenti sono inclusi nel costo del venduto e nelle spese generali: si prendono dal **rendiconto finanziario**. L'“EBITDA adjusted” esclude anche le poste che il management considera non ricorrenti — leggi sempre la riconciliazione."
        }
      },
      { type: 'exercise', questionId: 'acc-is-q1' },
      { type: 'exercise', questionId: 'acc-is-q2' },
      {
        type: 'realworld',
        body: {
          en: "In a pitch book, the comps page shows EV/EBITDA and P/E side by side: EBITDA for the whole firm (debt + equity), net income for equity holders only. In leveraged finance, covenants are set on EBITDA-based ratios, so the definition of “Consolidated EBITDA” in the credit agreement — which add-backs are allowed — is heavily negotiated.\n\nFrom 2027, IFRS 18 replaces IAS 1 and requires defined subtotals such as **operating profit**, plus disclosure of management-defined performance measures.",
          it: "In un pitch book la pagina dei comparables mostra EV/EBITDA e P/E affiancati: l'EBITDA per l'intera azienda (debito + equity), l'utile netto per i soli azionisti. Nella finanza a leva i covenant sono fissati su rapporti basati sull'EBITDA, quindi la definizione di “Consolidated EBITDA” nel contratto di finanziamento — quali add-back sono ammessi — è oggetto di dura negoziazione.\n\nDal 2027 l'IFRS 18 sostituisce lo IAS 1 e richiede subtotali definiti come il **risultato operativo**, oltre all'informativa sugli indicatori di performance definiti dal management."
        }
      },
      { type: 'exercise', questionId: 'acc-is-q4' },
      {
        type: 'interview',
        question: { en: "Why might EBITDA be a misleading measure of a company's cash flow?", it: "Perché l'EBITDA può essere una misura fuorviante dei flussi di cassa di un'azienda?" },
        answer: {
          en: "Three reasons. First, it ignores CapEx: depreciation is non-cash, but the investment it reflects is very real cash. Second, it ignores changes in working capital — a growing company tying up cash in receivables and inventory can have rising EBITDA and falling cash. Third, it is before interest and tax, which are cash costs. Add to that the discretion in “adjusted” EBITDA. For cash, I'd look at EBITDA − CapEx − ΔNWC − cash taxes, i.e. unlevered free cash flow.",
          it: "Tre motivi. Primo, ignora il CapEx: l'ammortamento non è un'uscita di cassa, ma l'investimento che rappresenta lo è. Secondo, ignora la variazione del capitale circolante: un'azienda in crescita che immobilizza cassa in crediti e magazzino può avere EBITDA in aumento e cassa in calo. Terzo, è prima di interessi e imposte, che sono esborsi reali. A ciò si aggiunge la discrezionalità dell'EBITDA “adjusted”. Per la cassa guarderei EBITDA − CapEx − ΔCCN − imposte pagate, cioè l'unlevered free cash flow."
        }
      },
      {
        type: 'mistakes',
        items: [
          { en: "Computing EBITDA by adding back only the D&A line on the face of the P&L when part of D&A is inside COGS/SG&A. Use the cash flow statement figure.", it: "Calcolare l'EBITDA sommando solo gli ammortamenti esposti a conto economico quando una parte è dentro costo del venduto/spese generali. Usa il dato del rendiconto finanziario." },
          { en: "Pairing EBITDA with equity value (or net income with EV). Match the metric to the capital providers it belongs to.", it: "Abbinare l'EBITDA all'equity value (o l'utile netto all'EV). Il multiplo deve riferirsi agli stessi finanziatori della metrica." },
          { en: "Treating dividends or principal repayments as expenses. Neither appears on the income statement.", it: "Trattare dividendi o rimborsi del capitale di debito come costi. Nessuno dei due compare a conto economico." },
          { en: "Applying the statutory rate when the effective tax rate differs materially.", it: "Applicare l'aliquota nominale quando quella effettiva differisce in modo rilevante." }
        ]
      },
      {
        type: 'summary',
        items: [
          { en: "Revenue → gross profit → EBITDA → EBIT → EBT → net income.", it: "Ricavi → margine lordo → EBITDA → EBIT → EBT → utile netto." },
          { en: "EBITDA = EBIT + D&A; an APM, capital-structure neutral, paired with EV.", it: "EBITDA = EBIT + ammortamenti; un IAP, neutrale rispetto alla struttura finanziaria, abbinato all'EV." },
          { en: "Net income belongs to equity holders and pairs with P/E.", it: "L'utile netto spetta agli azionisti e si abbina al P/E." },
          { en: "Expenses can be presented by function (IAS 1 option) or by nature (Italian art. 2425 format).", it: "I costi si presentano per destinazione (opzione IAS 1) o per natura (schema art. 2425 c.c.)." }
        ]
      }
    ],
    questions: [
      {
        id: 'acc-is-q1',
        kind: 'numeric',
        topic: 'income-statement',
        difficulty: 1,
        objective: { en: "Compute EBITDA from EBIT and D&A.", it: "Calcolare l'EBITDA da EBIT e ammortamenti." },
        prompt: {
          en: "A company reports EBIT of €340m. Its cash flow statement shows depreciation of €60m and amortisation of €25m. What is EBITDA (€m)?",
          it: "Un'azienda riporta un EBIT di €340m. Il rendiconto finanziario mostra ammortamenti materiali per €60m e immateriali per €25m. Qual è l'EBITDA (€m)?"
        },
        answer: 425,
        unit: '€m',
        verify: { fn: 'ebitda', args: [340, 85] },
        explanation: {
          en: "EBITDA = EBIT + D&A = 340 + (60 + 25) = 425. Adding back only depreciation (400) forgets amortisation.",
          it: "EBITDA = EBIT + ammortamenti = 340 + (60 + 25) = 425. Sommare solo gli ammortamenti materiali (400) dimentica quelli immateriali."
        }
      },
      {
        id: 'acc-is-q2',
        kind: 'numeric',
        topic: 'income-statement',
        difficulty: 1,
        objective: { en: "Walk from revenue to net income.", it: "Passare dai ricavi all'utile netto." },
        prompt: {
          en: "Revenue €800m, COGS €480m, SG&A €120m, D&A €40m, net interest expense €20m, tax rate 25%. What is net income (€m)?",
          it: "Ricavi €800m, costo del venduto €480m, costi generali €120m, ammortamenti €40m, oneri finanziari netti €20m, aliquota 25%. Qual è l'utile netto (€m)?"
        },
        answer: 105,
        unit: '€m',
        verify: { fn: 'product', args: [140, 0.75] },
        steps: [
          { en: "EBIT = 800 − 480 − 120 − 40 = 160", it: "EBIT = 800 − 480 − 120 − 40 = 160" },
          { en: "EBT = 160 − 20 = 140", it: "EBT = 160 − 20 = 140" },
          { en: "Net income = 140 × (1 − 25%) = 105", it: "Utile netto = 140 × (1 − 25%) = 105" }
        ],
        explanation: {
          en: "EBIT 160, EBT 140, tax 35, net income 105. Applying tax to EBIT (giving 100) forgets that interest is tax-deductible.",
          it: "EBIT 160, EBT 140, imposte 35, utile netto 105. Applicare le imposte all'EBIT (ottenendo 100) dimentica la deducibilità degli interessi."
        }
      },
      {
        id: 'acc-is-q3',
        kind: 'mcq',
        topic: 'income-statement',
        difficulty: 1,
        objective: { en: "Place items above or below EBIT.", it: "Collocare le voci sopra o sotto l'EBIT." },
        prompt: { en: "Which item is deducted between EBIT and EBT?", it: "Quale voce si deduce tra EBIT ed EBT?" },
        choices: [
          { en: "Amortisation of acquired customer relationships", it: "Ammortamento delle relazioni con la clientela acquisite" },
          { en: "Research and development expense", it: "Costi di ricerca e sviluppo" },
          { en: "Interest expense on a term loan", it: "Interessi passivi su un finanziamento a termine" },
          { en: "Sales commissions", it: "Provvigioni di vendita" }
        ],
        correct: 2,
        explanation: {
          en: "Interest is a financing cost, so it sits below EBIT. Amortisation, R&D and commissions are operating costs deducted before EBIT.",
          it: "Gli interessi sono un costo di finanziamento, quindi stanno sotto l'EBIT. Ammortamenti, R&S e provvigioni sono costi operativi dedotti prima dell'EBIT."
        }
      },
      {
        id: 'acc-is-q4',
        kind: 'multi',
        topic: 'ebitda',
        difficulty: 2,
        objective: { en: "Identify items that reduce EBIT but not EBITDA.", it: "Identificare le voci che riducono l'EBIT ma non l'EBITDA." },
        prompt: { en: "Which items reduce EBIT but are conventionally excluded from EBITDA? Select all that apply.", it: "Quali voci riducono l'EBIT ma sono convenzionalmente escluse dall'EBITDA? Seleziona tutte le risposte corrette." },
        choices: [
          { en: "Depreciation of factory equipment", it: "Ammortamento degli impianti" },
          { en: "Staff costs of the sales force", it: "Costo del personale commerciale" },
          { en: "Amortisation of capitalised software", it: "Ammortamento del software capitalizzato" },
          { en: "Interest expense", it: "Interessi passivi" },
          { en: "Goodwill impairment", it: "Svalutazione dell'avviamento" }
        ],
        correct: [0, 2, 4],
        explanation: {
          en: "Depreciation, amortisation and impairment are non-cash charges on long-lived assets, deducted to reach EBIT but added back for EBITDA. Staff costs reduce both. Interest reduces neither — it is below EBIT.",
          it: "Ammortamenti e svalutazioni sono costi non monetari su beni durevoli, dedotti per arrivare all'EBIT ma esclusi dall'EBITDA. Il costo del personale riduce entrambi. Gli interessi non riducono nessuno dei due: stanno sotto l'EBIT."
        }
      },
      {
        id: 'acc-is-q5',
        kind: 'numeric',
        topic: 'ebitda',
        difficulty: 2,
        objective: { en: "Compute an EBITDA margin.", it: "Calcolare un margine EBITDA." },
        prompt: {
          en: "Revenue €1,200m, EBIT €180m, D&A €60m. What is the EBITDA margin (%)?",
          it: "Ricavi €1.200m, EBIT €180m, ammortamenti €60m. Qual è il margine EBITDA (%)?"
        },
        answer: 20,
        unit: '%',
        tolerance: { abs: 0.05 },
        verify: { fn: 'product', args: [100, 0.2] },
        explanation: {
          en: "EBITDA = 180 + 60 = 240; margin = 240 / 1,200 = 20%. Using EBIT gives the EBIT margin of 15%.",
          it: "EBITDA = 180 + 60 = 240; margine = 240 / 1.200 = 20%. Usando l'EBIT si ottiene il margine EBIT del 15%."
        }
      }
    ],
    flashcards: [
      { id: 'fc-acc-is-1', topic: 'income-statement', front: { en: "Income statement order from revenue to net income?", it: "Ordine del conto economico dai ricavi all'utile netto?" }, back: { en: "Revenue − COGS = gross profit − opex = EBITDA − D&A = EBIT − net interest = EBT − tax = net income.", it: "Ricavi − costo del venduto = margine lordo − costi operativi = EBITDA − ammortamenti = EBIT − oneri finanziari = EBT − imposte = utile netto." } },
      { id: 'fc-acc-is-2', topic: 'ebitda', front: { en: "Is EBITDA an IFRS or US GAAP measure?", it: "L'EBITDA è una misura IFRS o US GAAP?" }, back: { en: "Neither. It is a non-GAAP / alternative performance measure and must be reconciled to a GAAP figure.", it: "Nessuna delle due. È un indicatore alternativo di performance (non-GAAP) e va riconciliato con una grandezza di bilancio." } },
      { id: 'fc-acc-is-3', topic: 'ebitda', front: { en: "Where do you find D&A if the P&L is presented by function?", it: "Dove trovi gli ammortamenti se il conto economico è per destinazione?" }, back: { en: "In the cash flow statement (add-back in CFO) or the notes.", it: "Nel rendiconto finanziario (rettifica nel flusso operativo) o nella nota integrativa/note." } },
      { id: 'fc-acc-is-4', topic: 'income-statement', front: { en: "Which multiple pairs with EBITDA and which with net income?", it: "Quale multiplo si abbina all'EBITDA e quale all'utile netto?" }, back: { en: "EBITDA → EV/EBITDA (all capital providers). Net income → P/E (equity holders).", it: "EBITDA → EV/EBITDA (tutti i finanziatori). Utile netto → P/E (azionisti)." } },
      { id: 'fc-acc-is-5', topic: 'income-statement', front: { en: "By nature vs by function?", it: "Per natura vs per destinazione?" }, back: { en: "By nature: costs grouped by type (materials, staff, D&A). By function: by activity (COGS, selling, admin). Italian art. 2425 uses nature.", it: "Per natura: costi raggruppati per tipologia (materie, personale, ammortamenti). Per destinazione: per area (costo del venduto, commerciali, amministrativi). L'art. 2425 c.c. usa la natura." } }
    ],
    sources: [
      { label: 'IFRS Foundation — IAS 1 Presentation of Financial Statements', url: 'https://www.ifrs.org/issued-standards/list-of-standards/ias-1-presentation-of-financial-statements/' },
      { label: 'IFRS Foundation — IFRS 18 Presentation and Disclosure in Financial Statements (effective 1 January 2027)', url: 'https://www.ifrs.org/issued-standards/list-of-standards/ifrs-18-presentation-and-disclosure-in-financial-statements/' },
      { label: 'ESMA — Guidelines on Alternative Performance Measures (ESMA/2015/1415)', url: 'https://www.esma.europa.eu/' },
      { label: 'Codice Civile, art. 2425 (Contenuto del conto economico)', url: 'https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262' }
    ]
  },
  {
    id: 'acc-balance-sheet',
    academyId: 'accounting',
    moduleId: 'A2',
    mode: 'deep',
    minutes: 10,
    difficulty: 1,
    reviewed: '2026-10',
    objective: {
      en: "Read a balance sheet, classify items as current or non-current, roll forward retained earnings and compute net debt and book value.",
      it: "Leggere uno stato patrimoniale, classificare le voci in correnti e non correnti, movimentare gli utili a nuovo e calcolare posizione finanziaria netta e valore contabile."
    },
    screens: [
      {
        type: 'intuition',
        title: { en: "A photograph, not a film", it: "Una fotografia, non un film" },
        body: {
          en: "The income statement is a film of a period. The balance sheet is a **photograph at one date**: what the company owns, what it owes, and what is left for shareholders.\n\nThe link between two photographs is the film in between: this year's profit, minus dividends, is what moves retained earnings from last year's balance sheet to this year's.",
          it: "Il conto economico è il film di un periodo. Lo stato patrimoniale è una **fotografia a una data**: cosa l'azienda possiede, cosa deve e cosa resta agli azionisti.\n\nIl collegamento tra due fotografie è il film nel mezzo: l'utile dell'anno, meno i dividendi, è ciò che sposta gli utili a nuovo dallo stato patrimoniale dell'anno scorso a quello di quest'anno."
        }
      },
      {
        type: 'technical',
        title: { en: "Structure and classification", it: "Struttura e classificazione" },
        body: {
          en: "Under **IAS 1**, an asset is **current** if it is expected to be realised, sold or consumed within the normal operating cycle or within 12 months, is held for trading, or is cash. A liability is current if it is due within 12 months or settled within the operating cycle. Everything else is non-current.\n\n- **Current assets**: cash, receivables, inventory, prepaid expenses.\n- **Non-current assets**: PP&E, intangibles, goodwill, right-of-use assets, long-term investments, deferred tax assets.\n- **Current liabilities**: payables, accrued expenses, deferred revenue, short-term debt and the current portion of long-term debt.\n- **Non-current liabilities**: long-term debt, lease liabilities, provisions, pension obligations, deferred tax liabilities.\n- **Equity**: share capital, share premium, retained earnings, other reserves (incl. OCI), less treasury shares.",
          it: "Secondo lo **IAS 1** un'attività è **corrente** se si prevede di realizzarla, venderla o consumarla nel normale ciclo operativo o entro 12 mesi, se è posseduta per la negoziazione o se è liquidità. Una passività è corrente se scade entro 12 mesi o si estingue nel ciclo operativo. Il resto è non corrente.\n\n- **Attività correnti**: liquidità, crediti, rimanenze, risconti attivi.\n- **Attività non correnti**: immobilizzazioni materiali e immateriali, avviamento, diritti d'uso, partecipazioni, imposte anticipate.\n- **Passività correnti**: debiti v/fornitori, ratei passivi, ricavi differiti, debiti finanziari a breve e quota corrente del debito a lungo.\n- **Passività non correnti**: debiti finanziari a lungo, passività per leasing, fondi, benefici ai dipendenti, imposte differite passive.\n- **Patrimonio netto**: capitale sociale, riserva sovrapprezzo, utili a nuovo, altre riserve (incl. OCI), al netto delle azioni proprie."
        }
      },
      {
        type: 'formula',
        formulas: [
          {
            name: { en: "Retained earnings roll-forward", it: "Movimentazione degli utili a nuovo" },
            expr: 'Closing RE = Opening RE + Net income − Dividends declared',
            vars: [{ sym: 'RE', desc: { en: "Retained earnings (accumulated undistributed profits)", it: "Utili portati a nuovo (utili accumulati non distribuiti)" } }]
          },
          { name: { en: "Book value of equity", it: "Patrimonio netto contabile" }, expr: 'Equity = Total assets − Total liabilities' },
          { name: { en: "Net debt", it: "Posizione finanziaria netta (debito netto)" }, expr: 'Net debt = Short-term debt + Long-term debt (+ leases, per definition) − Cash and equivalents' }
        ],
        note: {
          en: "Other equity movements include share issues, buybacks, share-based compensation and other comprehensive income.",
          it: "Altri movimenti del PN includono aumenti di capitale, riacquisti di azioni proprie, pagamenti basati su azioni e altre componenti di conto economico complessivo."
        }
      },
      {
        type: 'example',
        title: { en: "Gamma S.p.A. — balance sheet at 31 Dec (€m)", it: "Gamma S.p.A. — stato patrimoniale al 31/12 (€m)" },
        body: {
          en: "Total assets 1,200 = liabilities 650 + equity 550. Net debt = 50 + 400 − 80 = **370**.",
          it: "Totale attivo 1.200 = passività 650 + PN 550. Debito netto = 50 + 400 − 80 = **370**."
        },
        tables: [
          {
            caption: { en: 'Assets', it: 'Attivo' },
            headers: [{ en: 'Item', it: 'Voce' }, { en: '€m', it: '€m' }],
            rows: [
              [{ en: 'Cash', it: 'Liquidità' }, '80'],
              [{ en: 'Trade receivables', it: 'Crediti commerciali' }, '150'],
              [{ en: 'Inventory', it: 'Rimanenze' }, '120'],
              [{ en: 'Total current assets', it: 'Totale attività correnti' }, '350'],
              [{ en: 'PP&E', it: 'Immobilizzazioni materiali' }, '600'],
              [{ en: 'Goodwill and intangibles', it: 'Avviamento e immateriali' }, '250'],
              [{ en: 'Total assets', it: 'Totale attivo' }, '1,200']
            ],
            totalRows: [3, 6]
          },
          {
            caption: { en: 'Liabilities and equity', it: 'Passivo e patrimonio netto' },
            headers: [{ en: 'Item', it: 'Voce' }, { en: '€m', it: '€m' }],
            rows: [
              [{ en: 'Trade payables', it: 'Debiti commerciali' }, '110'],
              [{ en: 'Accrued expenses', it: 'Ratei e debiti per costi maturati' }, '40'],
              [{ en: 'Short-term debt', it: 'Debiti finanziari a breve' }, '50'],
              [{ en: 'Long-term debt', it: 'Debiti finanziari a lungo' }, '400'],
              [{ en: 'Provisions and deferred tax', it: 'Fondi e imposte differite' }, '50'],
              [{ en: 'Total liabilities', it: 'Totale passività' }, '650'],
              [{ en: 'Share capital + premium', it: 'Capitale sociale + sovrapprezzo' }, '150'],
              [{ en: 'Retained earnings', it: 'Utili a nuovo' }, '400'],
              [{ en: 'Total liabilities and equity', it: 'Totale passivo e PN' }, '1,200']
            ],
            totalRows: [5, 8]
          }
        ]
      },
      {
        type: 'example',
        title: { en: "Rolling retained earnings forward", it: "Movimentare gli utili a nuovo" },
        body: {
          en: "Next year Gamma earns net income of €127.5m and declares dividends of €50m.\n\nClosing RE = 400 + 127.5 − 50 = **€477.5m**.\n\nIf you see retained earnings move by something other than NI − dividends, look for buybacks retired against RE, prior-period restatements or other reserve transfers.",
          it: "L'anno successivo Gamma realizza un utile netto di €127,5m e delibera dividendi per €50m.\n\nUtili a nuovo finali = 400 + 127,5 − 50 = **€477,5m**.\n\nSe gli utili a nuovo variano per un importo diverso da utile − dividendi, cerca riacquisti di azioni imputati agli utili, rettifiche di esercizi precedenti o altri giroconti di riserve."
        }
      },
      { type: 'exercise', questionId: 'acc-bs-q1' },
      { type: 'exercise', questionId: 'acc-bs-q2' },
      {
        type: 'realworld',
        body: {
          en: "**Italy**: the statutory balance sheet (art. 2424 c.c.) classifies assets by **destination** (B. Immobilizzazioni vs C. Attivo circolante) rather than the IAS 1 current/non-current split, and art. 2430 c.c. requires S.p.A.s to allocate at least **5% of annual net profit** to the **riserva legale** until it reaches one-fifth of share capital.\n\nIn deals, the balance sheet gives the **EV-to-equity bridge**: equity value = EV − net debt − other debt-like items (pensions, NCI…). Analysts spend real time agreeing what counts as debt-like.",
          it: "**Italia**: lo stato patrimoniale civilistico (art. 2424 c.c.) classifica le attività per **destinazione** (B. Immobilizzazioni vs C. Attivo circolante) anziché con la distinzione IAS 1 corrente/non corrente, e l'art. 2430 c.c. impone alle S.p.A. di destinare almeno il **5% dell'utile netto annuale** alla **riserva legale** finché questa non raggiunge un quinto del capitale sociale.\n\nNei deal lo stato patrimoniale fornisce il **ponte EV-equity**: equity value = EV − PFN − altre poste assimilabili a debito (TFR/fondi pensione, terzi…). Gli analisti dedicano molto tempo a concordare cosa sia debt-like."
        }
      },
      { type: 'exercise', questionId: 'acc-bs-q4' },
      {
        type: 'interview',
        question: { en: "A company's book equity is negative. Is it necessarily bankrupt?", it: "Il patrimonio netto contabile di un'azienda è negativo. È necessariamente in default?" },
        answer: {
          en: "No. Negative book equity can come from large buybacks or dividend recapitalisations — common in LBO-backed companies and some mature US blue chips — or from accumulated accounting losses while the business still generates cash. Book value is historical cost; solvency depends on cash flow and the market value of the business versus its debt. That said, under Italian law losses that reduce capital below thresholds trigger specific obligations (arts. 2446–2447 c.c. for S.p.A.s), so the legal context matters.",
          it: "No. Un PN contabile negativo può derivare da grandi riacquisti di azioni o da dividend recap — frequenti nelle società partecipate da fondi LBO e in alcune blue chip americane mature — oppure da perdite contabili accumulate mentre il business genera ancora cassa. Il valore contabile è a costo storico; la solvibilità dipende dai flussi di cassa e dal valore di mercato dell'azienda rispetto al debito. Detto questo, nel diritto italiano le perdite che riducono il capitale oltre certe soglie attivano obblighi specifici (artt. 2446–2447 c.c. per le S.p.A.), quindi il contesto giuridico conta."
        }
      },
      {
        type: 'mistakes',
        items: [
          { en: "Leaving the current portion of long-term debt in non-current liabilities: it is current and part of net debt.", it: "Lasciare la quota corrente del debito a lungo tra le passività non correnti: è corrente e fa parte della PFN." },
          { en: "Treating retained earnings as a pile of cash. It is an accumulated equity claim; the cash may have been spent long ago.", it: "Considerare gli utili a nuovo come una riserva di cassa. Sono un diritto patrimoniale accumulato; la liquidità può essere stata spesa da tempo." },
          { en: "Confusing book value of equity with market capitalisation.", it: "Confondere il patrimonio netto contabile con la capitalizzazione di borsa." }
        ]
      },
      {
        type: 'summary',
        items: [
          { en: "Balance sheet = position at a date; Assets = Liabilities + Equity.", it: "Stato patrimoniale = situazione a una data; Attività = Passività + PN." },
          { en: "Current = within 12 months or the operating cycle (IAS 1).", it: "Corrente = entro 12 mesi o nel ciclo operativo (IAS 1)." },
          { en: "Closing RE = opening RE + net income − dividends.", it: "Utili a nuovo finali = iniziali + utile netto − dividendi." },
          { en: "Net debt = total debt − cash; it bridges EV to equity value.", it: "PFN = debito lordo − liquidità; collega l'EV all'equity value." }
        ]
      }
    ],
    questions: [
      {
        id: 'acc-bs-q1',
        kind: 'numeric',
        topic: 'balance-sheet',
        difficulty: 1,
        objective: { en: "Roll forward retained earnings.", it: "Movimentare gli utili a nuovo." },
        prompt: {
          en: "Opening retained earnings €400m, net income €90m, dividends declared €30m. What are closing retained earnings (€m)?",
          it: "Utili a nuovo iniziali €400m, utile netto €90m, dividendi deliberati €30m. Quali sono gli utili a nuovo finali (€m)?"
        },
        answer: 460,
        unit: '€m',
        verify: { fn: 'sum', args: [400, 90, -30] },
        explanation: { en: "400 + 90 − 30 = 460.", it: "400 + 90 − 30 = 460." }
      },
      {
        id: 'acc-bs-q2',
        kind: 'numeric',
        topic: 'balance-sheet',
        difficulty: 2,
        objective: { en: "Back-solve dividends from the retained earnings roll-forward.", it: "Ricavare i dividendi dalla movimentazione degli utili a nuovo." },
        prompt: {
          en: "Retained earnings rose from €250m to €300m. Net income was €80m and there were no other movements. How much was paid out in dividends (€m)?",
          it: "Gli utili a nuovo sono passati da €250m a €300m. L'utile netto è stato €80m e non ci sono altri movimenti. Quanti dividendi sono stati distribuiti (€m)?"
        },
        answer: 30,
        unit: '€m',
        verify: { fn: 'sum', args: [250, 80, -300] },
        explanation: {
          en: "Dividends = opening + NI − closing = 250 + 80 − 300 = 30. Answering 50 (the change in RE) ignores net income.",
          it: "Dividendi = iniziali + utile − finali = 250 + 80 − 300 = 30. Rispondere 50 (la variazione degli utili a nuovo) ignora l'utile."
        }
      },
      {
        id: 'acc-bs-q3',
        kind: 'mcq',
        topic: 'balance-sheet',
        difficulty: 1,
        objective: { en: "Classify debt between current and non-current.", it: "Classificare il debito tra corrente e non corrente." },
        prompt: {
          en: "A €100m five-year term loan amortises €20m per year. At the balance sheet date, how is it presented (IAS 1, no covenant breach)?",
          it: "Un finanziamento a termine di €100m a cinque anni si rimborsa per €20m l'anno. Come si espone alla data di bilancio (IAS 1, nessuna violazione di covenant)?"
        },
        choices: [
          { en: "€100m non-current", it: "€100m non correnti" },
          { en: "€20m current and €80m non-current", it: "€20m correnti e €80m non correnti" },
          { en: "€100m current", it: "€100m correnti" },
          { en: "€80m current and €20m non-current", it: "€80m correnti e €20m non correnti" }
        ],
        correct: 1,
        explanation: {
          en: "The instalment due within 12 months (€20m) is current; the rest is non-current. Presenting all of it as non-current understates short-term obligations; all current would apply only if the lender could demand repayment (e.g. after a covenant breach).",
          it: "La rata in scadenza entro 12 mesi (€20m) è corrente; il resto è non corrente. Esporre tutto come non corrente sottostima gli impegni a breve; tutto corrente si applicherebbe solo se il finanziatore potesse esigere il rimborso (es. dopo una violazione di covenant)."
        }
      },
      {
        id: 'acc-bs-q4',
        kind: 'numeric',
        topic: 'balance-sheet',
        difficulty: 3,
        objective: { en: "Apply the Italian legal reserve rule (art. 2430 c.c.).", it: "Applicare la regola della riserva legale (art. 2430 c.c.)." },
        prompt: {
          en: "An Italian S.p.A. has share capital of €1,000k and a legal reserve of €180k. Net profit for the year is €600k. What is the minimum allocation to the legal reserve (€k)?",
          it: "Una S.p.A. italiana ha capitale sociale di €1.000k e riserva legale di €180k. L'utile netto dell'esercizio è €600k. Qual è l'accantonamento minimo a riserva legale (€k)?"
        },
        answer: 20,
        unit: '€k',
        verify: { fn: 'diff', args: [200, 180] },
        explanation: {
          en: "5% of profit = 30, but the reserve only needs to reach one-fifth of capital (200). The gap is 200 − 180 = 20, so the minimum allocation is 20, not 30.",
          it: "Il 5% dell'utile è 30, ma la riserva deve solo raggiungere un quinto del capitale (200). Mancano 200 − 180 = 20, quindi l'accantonamento minimo è 20, non 30."
        }
      },
      {
        id: 'acc-bs-q5',
        kind: 'multi',
        topic: 'balance-sheet',
        difficulty: 2,
        objective: { en: "Identify items within shareholders' equity.", it: "Identificare le voci del patrimonio netto." },
        prompt: { en: "Which items are part of shareholders' equity? Select all that apply.", it: "Quali voci fanno parte del patrimonio netto? Seleziona tutte le risposte corrette." },
        choices: [
          { en: "Share premium", it: "Riserva sovrapprezzo azioni" },
          { en: "Dividends declared but not yet paid", it: "Dividendi deliberati ma non ancora pagati" },
          { en: "Treasury shares (as a deduction)", it: "Azioni proprie (in riduzione)" },
          { en: "Cash flow hedge reserve (OCI)", it: "Riserva di cash flow hedge (OCI)" },
          { en: "Deferred tax liabilities", it: "Imposte differite passive" }
        ],
        correct: [0, 2, 3],
        explanation: {
          en: "Share premium, treasury shares (negative) and OCI reserves are equity. Once declared, a dividend is a liability (dividends payable). Deferred tax liabilities are liabilities.",
          it: "Riserva sovrapprezzo, azioni proprie (in negativo) e riserve OCI sono PN. Una volta deliberato, il dividendo è una passività (debiti verso soci). Le imposte differite passive sono passività."
        }
      }
    ],
    flashcards: [
      { id: 'fc-acc-bs-1', topic: 'balance-sheet', front: { en: "Retained earnings roll-forward?", it: "Movimentazione degli utili a nuovo?" }, back: { en: "Closing = opening + net income − dividends (± restatements, other transfers).", it: "Finale = iniziale + utile netto − dividendi (± rettifiche, altri giroconti)." } },
      { id: 'fc-acc-bs-2', topic: 'balance-sheet', front: { en: "IAS 1 test for a current asset?", it: "Criterio IAS 1 per un'attività corrente?" }, back: { en: "Realised/consumed within the operating cycle or 12 months, held for trading, or cash and equivalents.", it: "Realizzata/consumata nel ciclo operativo o entro 12 mesi, posseduta per la negoziazione, o liquidità e mezzi equivalenti." } },
      { id: 'fc-acc-bs-3', topic: 'balance-sheet', front: { en: "Italian legal reserve rule?", it: "Regola della riserva legale?" }, back: { en: "Art. 2430 c.c.: at least 1/20 (5%) of annual net profit until the reserve equals 1/5 of share capital.", it: "Art. 2430 c.c.: almeno 1/20 (5%) dell'utile netto annuo finché la riserva non raggiunge 1/5 del capitale sociale." } },
      { id: 'fc-acc-bs-4', topic: 'balance-sheet', front: { en: "Net debt definition?", it: "Definizione di debito netto?" }, back: { en: "Total financial debt (short + long term, often leases) − cash and equivalents. Definitions vary: always check what is included.", it: "Debiti finanziari totali (breve + lungo, spesso leasing) − liquidità. Le definizioni variano: verifica sempre cosa è incluso." } },
      { id: 'fc-acc-bs-5', topic: 'balance-sheet', front: { en: "How are treasury shares presented?", it: "Come si espongono le azioni proprie?" }, back: { en: "As a deduction from equity (IFRS: IAS 32; Italy: negative reserve under art. 2357-ter c.c.).", it: "In riduzione del patrimonio netto (IFRS: IAS 32; Italia: riserva negativa ex art. 2357-ter c.c.)." } }
    ],
    sources: [
      { label: 'IFRS Foundation — IAS 1 Presentation of Financial Statements (current/non-current classification)', url: 'https://www.ifrs.org/issued-standards/list-of-standards/ias-1-presentation-of-financial-statements/' },
      { label: 'Codice Civile, artt. 2424, 2430, 2357-ter, 2446–2447', url: 'https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262' }
    ]
  },
  {
    id: 'acc-cash-flow-statement',
    academyId: 'accounting',
    moduleId: 'A2',
    mode: 'deep',
    minutes: 14,
    difficulty: 2,
    reviewed: '2026-10',
    objective: {
      en: "Build a cash flow statement with the indirect method and classify flows into operating, investing and financing activities under IFRS and US GAAP.",
      it: "Costruire un rendiconto finanziario con il metodo indiretto e classificare i flussi in attività operativa, di investimento e di finanziamento secondo IFRS e US GAAP."
    },
    screens: [
      {
        type: 'intuition',
        title: { en: "Where did the cash actually go?", it: "Dove è finita davvero la cassa?" },
        body: {
          en: "A company reports €120m of profit, yet its bank balance barely moves. How? Some profit is tied up in unpaid invoices and new inventory; cash went into new machines; some repaid debt and paid dividends.\n\nThe **cash flow statement** reconciles accrual profit to the actual change in cash. Profit is an opinion; cash is a fact — which is why investors and lenders scrutinise it.",
          it: "Un'azienda dichiara €120m di utile, eppure il saldo bancario si muove appena. Come mai? Parte dell'utile è immobilizzata in fatture non incassate e nuovo magazzino; la cassa è andata in nuovi macchinari; una parte ha rimborsato debito e pagato dividendi.\n\nIl **rendiconto finanziario** riconcilia l'utile per competenza con la variazione effettiva della cassa. L'utile è un'opinione, la cassa è un fatto — ed è per questo che investitori e finanziatori lo esaminano con attenzione."
        }
      },
      {
        type: 'technical',
        title: { en: "Three sections", it: "Tre sezioni" },
        body: {
          en: "- **Operating (CFO)**: cash from the core business — collections from customers, payments to suppliers and staff, taxes.\n- **Investing (CFI)**: purchase and sale of long-term assets and businesses — CapEx, acquisitions, disposals, financial investments.\n- **Financing (CFF)**: flows with capital providers — debt raised/repaid, shares issued/bought back, dividends paid, lease principal.\n\nCFO + CFI + CFF = change in cash.\n\nCFO can be presented **directly** (gross receipts and payments) or **indirectly** (start from profit and adjust). IAS 7 encourages the direct method, but almost everyone uses the indirect one — and so do interviews.",
          it: "- **Operativa (CFO)**: cassa dal core business — incassi da clienti, pagamenti a fornitori e dipendenti, imposte.\n- **Investimento (CFI)**: acquisto e cessione di attività a lungo termine e di aziende — CapEx, acquisizioni, dismissioni, investimenti finanziari.\n- **Finanziamento (CFF)**: flussi con i finanziatori — accensione/rimborso di debiti, aumenti di capitale/riacquisti di azioni, dividendi pagati, quota capitale dei leasing.\n\nCFO + CFI + CFF = variazione della cassa.\n\nIl CFO si può presentare con il metodo **diretto** (incassi e pagamenti lordi) o **indiretto** (si parte dall'utile e si rettifica). Lo IAS 7 incoraggia il diretto, ma quasi tutti usano l'indiretto — anche ai colloqui."
        }
      },
      {
        type: 'formula',
        formulas: [
          {
            name: { en: "CFO — indirect method", it: "CFO — metodo indiretto" },
            expr: 'CFO = Net income + Non-cash charges (D&A, impairment, SBC, deferred tax) − Gains on disposals + Losses on disposals − ΔNWC',
            vars: [{ sym: 'ΔNWC', desc: { en: "Increase in operating working capital (an increase uses cash)", it: "Aumento del capitale circolante operativo (un aumento assorbe cassa)" } }]
          },
          {
            name: { en: "Working capital signs", it: "Segni del capitale circolante" },
            expr: 'Operating asset ↑ → cash ↓ ; Operating liability ↑ → cash ↑'
          },
          { name: { en: "Change in cash", it: "Variazione della cassa" }, expr: 'Closing cash = Opening cash + CFO + CFI + CFF (± FX effects)' }
        ]
      },
      {
        type: 'example',
        title: { en: "Epsilon S.p.A. — indirect cash flow statement (€m)", it: "Epsilon S.p.A. — rendiconto finanziario indiretto (€m)" },
        body: {
          en: "During the year Epsilon sold equipment with a book value of 20 for 25 (gain 5). The gain is removed from CFO and the full proceeds go to CFI.",
          it: "Nell'anno Epsilon ha ceduto un impianto con valore contabile 20 a 25 (plusvalenza 5). La plusvalenza si storna dal CFO e l'intero incasso va nel CFI."
        },
        table: {
          headers: [{ en: 'Line', it: 'Voce' }, { en: '€m', it: '€m' }],
          rows: [
            [{ en: 'Net income', it: 'Utile netto' }, '120'],
            [{ en: '+ D&A', it: '+ Ammortamenti' }, '40'],
            [{ en: '− Gain on sale of equipment', it: '− Plusvalenza da cessione' }, '(5)'],
            [{ en: '− Increase in receivables', it: '− Aumento dei crediti' }, '(15)'],
            [{ en: '− Increase in inventory', it: '− Aumento delle rimanenze' }, '(10)'],
            [{ en: '+ Increase in payables', it: '+ Aumento dei debiti v/fornitori' }, '8'],
            [{ en: 'Cash from operations (CFO)', it: 'Flusso operativo (CFO)' }, '138'],
            [{ en: 'CapEx', it: 'Investimenti (CapEx)' }, '(60)'],
            [{ en: 'Proceeds from sale of equipment', it: 'Incasso da cessione impianti' }, '25'],
            [{ en: 'Cash from investing (CFI)', it: 'Flusso di investimento (CFI)' }, '(35)'],
            [{ en: 'Debt repayment', it: 'Rimborso finanziamenti' }, '(30)'],
            [{ en: 'Share issuance', it: 'Aumento di capitale' }, '10'],
            [{ en: 'Dividends paid', it: 'Dividendi pagati' }, '(20)'],
            [{ en: 'Cash from financing (CFF)', it: 'Flusso di finanziamento (CFF)' }, '(40)'],
            [{ en: 'Net change in cash', it: 'Variazione netta della cassa' }, '63']
          ],
          totalRows: [6, 9, 13, 14]
        }
      },
      {
        type: 'technical',
        title: { en: "Classification: IFRS vs US GAAP", it: "Classificazione: IFRS vs US GAAP" },
        body: {
          en: "Interest and dividends are where the frameworks differ.",
          it: "Interessi e dividendi sono il punto in cui i principi divergono."
        },
        table: {
          headers: [
            { en: 'Item', it: 'Voce' },
            { en: 'US GAAP (ASC 230)', it: 'US GAAP (ASC 230)' },
            { en: 'IAS 7 before IFRS 18', it: 'IAS 7 ante IFRS 18' },
            { en: 'IAS 7 with IFRS 18 (from 2027)*', it: 'IAS 7 con IFRS 18 (dal 2027)*' }
          ],
          rows: [
            [{ en: 'Interest paid', it: 'Interessi pagati' }, { en: 'Operating', it: 'Operativa' }, { en: 'Operating or financing', it: 'Operativa o finanziamento' }, { en: 'Financing', it: 'Finanziamento' }],
            [{ en: 'Interest received', it: 'Interessi incassati' }, { en: 'Operating', it: 'Operativa' }, { en: 'Operating or investing', it: 'Operativa o investimento' }, { en: 'Investing', it: 'Investimento' }],
            [{ en: 'Dividends received', it: 'Dividendi incassati' }, { en: 'Operating', it: 'Operativa' }, { en: 'Operating or investing', it: 'Operativa o investimento' }, { en: 'Investing', it: 'Investimento' }],
            [{ en: 'Dividends paid', it: 'Dividendi pagati' }, { en: 'Financing', it: 'Finanziamento' }, { en: 'Operating or financing', it: 'Operativa o finanziamento' }, { en: 'Financing', it: 'Finanziamento' }]
          ]
        }
      },
      {
        type: 'technical',
        title: { en: "Reading the classification table", it: "Come leggere la tabella" },
        body: {
          en: "*For entities without a specified main business activity such as banking or investing; those entities follow different rules.\n\nIFRS 18 (effective for annual periods beginning on or after 1 January 2027) also makes **operating profit** the starting point of the indirect method, instead of the profit figure many companies use today.\n\n**Italy (OIC 10)**: the rendiconto finanziario is required by art. 2425-ter c.c. for companies that do not file abbreviated financial statements (art. 2435-bis).\n\nWhen comparing companies, always check where interest sits: it changes CFO and any FCF metric built on it.",
          it: "*Per le entità senza un'attività principale specifica come quella bancaria o di investimento; tali entità seguono regole diverse.\n\nL'IFRS 18 (in vigore per gli esercizi che iniziano dal 1° gennaio 2027) rende inoltre il **risultato operativo** il punto di partenza del metodo indiretto, al posto della grandezza di utile usata oggi da molte società.\n\n**Italia (OIC 10)**: il rendiconto finanziario è obbligatorio ai sensi dell'art. 2425-ter c.c. per le società che non redigono il bilancio in forma abbreviata (art. 2435-bis).\n\nNel confronto tra società verifica sempre dove sono classificati gli interessi: cambiano il CFO e ogni misura di FCF costruita su di esso."
        }
      },
      { type: 'exercise', questionId: 'acc-cfs-q1' },
      { type: 'exercise', questionId: 'acc-cfs-q2' },
      {
        type: 'realworld',
        body: {
          en: "Bankers build free cash flow from this statement: **FCF = CFO − CapEx** is the starting point for leverage capacity, dividend capacity and DCF sanity checks. Credit analysts watch the **cash conversion** ratio (FCF ÷ EBITDA or CFO ÷ net income); persistently low conversion often signals aggressive revenue recognition or working capital trouble.",
          it: "I banker costruiscono il free cash flow da questo prospetto: **FCF = CFO − CapEx** è il punto di partenza per capacità di indebitamento, capacità di distribuzione e controlli di coerenza del DCF. Gli analisti del credito monitorano la **cash conversion** (FCF ÷ EBITDA o CFO ÷ utile netto); una conversione persistentemente bassa segnala spesso contabilizzazione aggressiva dei ricavi o problemi di capitale circolante."
        }
      },
      { type: 'exercise', questionId: 'acc-cfs-q3' },
      {
        type: 'interview',
        question: { en: "Why do you add back depreciation on the cash flow statement, and why do you subtract an increase in accounts receivable?", it: "Perché nel rendiconto si somma l'ammortamento e si sottrae l'aumento dei crediti verso clienti?" },
        answer: {
          en: "The indirect method starts from net income, which is on an accrual basis. Depreciation reduced net income but no cash left the company — the cash went out when the asset was bought, and is shown in investing — so we add it back. An increase in receivables means part of revenue was booked but not yet collected, so net income overstates cash and we subtract the increase. In general: an increase in an operating asset uses cash, an increase in an operating liability provides cash.",
          it: "Il metodo indiretto parte dall'utile netto, che è per competenza. L'ammortamento ha ridotto l'utile ma non è uscita cassa — la cassa è uscita all'acquisto del bene ed è nel flusso di investimento — quindi lo sommiamo. Un aumento dei crediti significa che parte dei ricavi è stata rilevata ma non incassata, quindi l'utile sovrastima la cassa e sottraiamo l'aumento. In generale: un aumento di un'attività operativa assorbe cassa, un aumento di una passività operativa la genera."
        }
      },
      {
        type: 'mistakes',
        items: [
          { en: "Leaving a gain on disposal in CFO and also counting the proceeds in CFI — double counting the gain.", it: "Lasciare la plusvalenza nel CFO e contare anche l'incasso nel CFI — si conta due volte la plusvalenza." },
          { en: "Getting working capital signs backwards: an increase in inventory is a use of cash.", it: "Invertire i segni del circolante: un aumento delle rimanenze assorbe cassa." },
          { en: "Putting dividends paid in CFO under US GAAP (they are financing) or forgetting IFRS policy choices when comparing peers.", it: "Mettere i dividendi pagati nel CFO in US GAAP (sono finanziamento) o dimenticare le scelte IFRS nel confronto tra peer." },
          { en: "Showing non-cash transactions (e.g. an asset financed directly by the seller, or debt converted into shares) as cash flows. IAS 7 excludes them from the statement and requires disclosure elsewhere.", it: "Esporre come flussi di cassa le operazioni non monetarie (es. un bene pagato con una dilazione concessa dal venditore, o la conversione di debito in azioni). Lo IAS 7 le esclude dal prospetto e ne richiede l'informativa altrove." }
        ]
      },
      {
        type: 'summary',
        items: [
          { en: "CFO + CFI + CFF = change in cash.", it: "CFO + CFI + CFF = variazione della cassa." },
          { en: "Indirect CFO: net income + non-cash charges − gains − increase in NWC.", it: "CFO indiretto: utile + costi non monetari − plusvalenze − aumento del CCN." },
          { en: "US GAAP: interest in CFO, dividends paid in CFF; IAS 7 allowed choices, which IFRS 18 removes for most companies from 2027.", it: "US GAAP: interessi nel CFO, dividendi pagati nel CFF; lo IAS 7 consentiva scelte, che l'IFRS 18 elimina per la maggior parte delle società dal 2027." },
          { en: "FCF = CFO − CapEx is the bankers' bridge from the statement to valuation and credit.", it: "FCF = CFO − CapEx è il ponte dei banker dal prospetto alla valutazione e al credito." }
        ]
      }
    ],
    questions: [
      {
        id: 'acc-cfs-q1',
        kind: 'numeric',
        topic: 'cash-flow-statement',
        difficulty: 2,
        objective: { en: "Compute CFO with the indirect method.", it: "Calcolare il CFO con il metodo indiretto." },
        prompt: {
          en: "Net income €200m; D&A €60m; receivables increased by €25m; inventory decreased by €10m; payables decreased by €15m. What is cash from operations (€m)?",
          it: "Utile netto €200m; ammortamenti €60m; crediti aumentati di €25m; rimanenze diminuite di €10m; debiti v/fornitori diminuiti di €15m. Qual è il flusso operativo (€m)?"
        },
        answer: 230,
        unit: '€m',
        verify: { fn: 'sum', args: [200, 60, -25, 10, -15] },
        explanation: {
          en: "200 + 60 − 25 (AR up uses cash) + 10 (inventory down releases cash) − 15 (paying down suppliers uses cash) = 230.",
          it: "200 + 60 − 25 (crediti in aumento assorbono cassa) + 10 (rimanenze in calo liberano cassa) − 15 (pagare i fornitori assorbe cassa) = 230."
        }
      },
      {
        id: 'acc-cfs-q2',
        kind: 'mcq',
        topic: 'cash-flow-statement',
        difficulty: 2,
        objective: { en: "Treat a gain on disposal correctly.", it: "Trattare correttamente una plusvalenza da cessione." },
        prompt: {
          en: "A machine with a net book value of €30m is sold for €40m in cash. Ignoring tax, how does the sale appear on the cash flow statement?",
          it: "Un macchinario con valore netto contabile di €30m è venduto per €40m in contanti. Ignorando le imposte, come appare la vendita nel rendiconto?"
        },
        choices: [
          { en: "CFO +10; CFI +30", it: "CFO +10; CFI +30" },
          { en: "CFO −10; CFI +40", it: "CFO −10; CFI +40" },
          { en: "CFO 0; CFI +40, with net income unchanged", it: "CFO 0; CFI +40, utile invariato" },
          { en: "CFO +40; CFI 0", it: "CFO +40; CFI 0" }
        ],
        correct: 1,
        explanation: {
          en: "The €10m gain is in net income but is not operating cash, so it is subtracted in CFO; the full €40m proceeds go to CFI. Together with the €10m gain already inside net income, total cash rises by €40m. The first option splits the cash wrongly; the third ignores that the gain raises net income.",
          it: "La plusvalenza di €10m è nell'utile ma non è cassa operativa, quindi si sottrae nel CFO; l'intero incasso di €40m va nel CFI. Con i 10 già inclusi nell'utile, la cassa totale aumenta di 40. La prima opzione ripartisce male la cassa; la terza ignora che la plusvalenza aumenta l'utile."
        }
      },
      {
        id: 'acc-cfs-q3',
        kind: 'multi',
        topic: 'cash-flow-statement',
        difficulty: 2,
        objective: { en: "Classify flows into financing activities under US GAAP.", it: "Classificare i flussi di finanziamento secondo US GAAP." },
        prompt: { en: "Under US GAAP, which are financing cash flows? Select all that apply.", it: "Secondo gli US GAAP, quali sono flussi di finanziamento? Seleziona tutte le risposte corrette." },
        choices: [
          { en: "Dividends paid to shareholders", it: "Dividendi pagati agli azionisti" },
          { en: "Interest paid on bonds", it: "Interessi pagati sulle obbligazioni" },
          { en: "Share buyback", it: "Riacquisto di azioni proprie" },
          { en: "Cash paid to acquire a competitor", it: "Cassa pagata per acquisire un concorrente" },
          { en: "Repayment of bond principal", it: "Rimborso del capitale delle obbligazioni" }
        ],
        correct: [0, 2, 4],
        explanation: {
          en: "Dividends, buybacks and principal repayments are flows with capital providers (CFF). Under ASC 230 interest paid is operating, and acquisitions are investing.",
          it: "Dividendi, riacquisti e rimborsi del capitale sono flussi con i finanziatori (CFF). Secondo l'ASC 230 gli interessi pagati sono operativi e le acquisizioni sono investimento."
        }
      },
      {
        id: 'acc-cfs-q4',
        kind: 'numeric',
        topic: 'cash-flow-statement',
        difficulty: 1,
        objective: { en: "Reconcile opening to closing cash.", it: "Riconciliare la cassa iniziale con quella finale." },
        prompt: {
          en: "Opening cash €80m; CFO €138m; CFI −€35m; CFF −€40m. What is closing cash (€m)?",
          it: "Cassa iniziale €80m; CFO €138m; CFI −€35m; CFF −€40m. Qual è la cassa finale (€m)?"
        },
        answer: 143,
        unit: '€m',
        verify: { fn: 'sum', args: [80, 138, -35, -40] },
        explanation: { en: "80 + 138 − 35 − 40 = 143 (net change +63).", it: "80 + 138 − 35 − 40 = 143 (variazione netta +63)." }
      },
      {
        id: 'acc-cfs-q5',
        kind: 'mcq',
        topic: 'cash-flow-statement',
        difficulty: 3,
        objective: { en: "Understand deferred revenue in the indirect method.", it: "Comprendere i ricavi differiti nel metodo indiretto." },
        prompt: {
          en: "A software company's net income fell this year, but its CFO rose sharply. Which explanation is most consistent?",
          it: "L'utile netto di una software house è calato quest'anno, ma il CFO è salito molto. Quale spiegazione è più coerente?"
        },
        choices: [
          { en: "It extended longer payment terms to customers", it: "Ha concesso ai clienti termini di pagamento più lunghi" },
          { en: "It moved customers from monthly billing to annual upfront billing, increasing deferred revenue", it: "Ha spostato i clienti dalla fatturazione mensile a quella annuale anticipata, aumentando i ricavi differiti" },
          { en: "It raised a large bond", it: "Ha emesso un grosso prestito obbligazionario" },
          { en: "It reduced its depreciation charge", it: "Ha ridotto gli ammortamenti" }
        ],
        correct: 1,
        explanation: {
          en: "Upfront billing collects cash before revenue is recognised; the increase in deferred revenue (a liability) is added in CFO. Longer customer terms raise receivables and reduce CFO; a bond is CFF; lower depreciation raises net income but leaves CFO roughly unchanged (apart from tax).",
          it: "La fatturazione anticipata incassa prima di rilevare i ricavi; l'aumento dei ricavi differiti (passività) si somma nel CFO. Termini più lunghi aumentano i crediti e riducono il CFO; un bond è CFF; ammortamenti più bassi aumentano l'utile ma lasciano il CFO quasi invariato (salvo l'effetto fiscale)."
        }
      }
    ],
    flashcards: [
      { id: 'fc-acc-cfs-1', topic: 'cash-flow-statement', front: { en: "The three sections of the cash flow statement?", it: "Le tre sezioni del rendiconto finanziario?" }, back: { en: "Operating, investing, financing. Their sum = change in cash.", it: "Operativa, investimento, finanziamento. La loro somma = variazione della cassa." } },
      { id: 'fc-acc-cfs-2', topic: 'cash-flow-statement', front: { en: "Effect on CFO of an increase in an operating asset vs an operating liability?", it: "Effetto sul CFO dell'aumento di un'attività operativa vs una passività operativa?" }, back: { en: "Asset ↑ → cash ↓ (subtract). Liability ↑ → cash ↑ (add).", it: "Attività ↑ → cassa ↓ (si sottrae). Passività ↑ → cassa ↑ (si somma)." } },
      { id: 'fc-acc-cfs-3', topic: 'cash-flow-statement', front: { en: "US GAAP classification of interest paid and dividends paid?", it: "Classificazione US GAAP di interessi e dividendi pagati?" }, back: { en: "Interest paid: operating. Dividends paid: financing.", it: "Interessi pagati: operativa. Dividendi pagati: finanziamento." } },
      { id: 'fc-acc-cfs-4', topic: 'cash-flow-statement', front: { en: "How is a gain on sale of PP&E treated in the indirect method?", it: "Come si tratta una plusvalenza da cessione nel metodo indiretto?" }, back: { en: "Subtracted in CFO; total sale proceeds shown in CFI.", it: "Si sottrae nel CFO; l'intero incasso va nel CFI." } },
      { id: 'fc-acc-cfs-5', topic: 'cash-flow-statement', front: { en: "What does IFRS 18 change in IAS 7?", it: "Cosa cambia l'IFRS 18 nello IAS 7?" }, back: { en: "From 2027: operating profit is the starting point of the indirect method; for most companies interest/dividends paid → financing, interest/dividends received → investing.", it: "Dal 2027: il risultato operativo è il punto di partenza del metodo indiretto; per la maggior parte delle società interessi/dividendi pagati → finanziamento, interessi/dividendi incassati → investimento." } }
    ],
    sources: [
      { label: 'IFRS Foundation — IAS 7 Statement of Cash Flows', url: 'https://www.ifrs.org/issued-standards/list-of-standards/ias-7-statement-of-cash-flows/' },
      { label: 'IFRS Foundation — IFRS 18 Presentation and Disclosure in Financial Statements (consequential amendments to IAS 7)', url: 'https://www.ifrs.org/issued-standards/list-of-standards/ifrs-18-presentation-and-disclosure-in-financial-statements/' },
      { label: 'KPMG — IFRS 18 changes to the statement of cash flows (2026)', url: 'https://kpmg.com/us/en/articles/2026/ifrs-18-changes-statement-cash-flows.html' },
      { label: 'Fondazione OIC — OIC 10 Rendiconto finanziario', url: 'https://www.fondazioneoic.eu/' },
      { label: 'Codice Civile, artt. 2425-ter, 2435-bis', url: 'https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262' }
    ]
  },
  {
    id: 'acc-da-capex',
    academyId: 'accounting',
    moduleId: 'A2',
    mode: 'deep',
    minutes: 12,
    difficulty: 2,
    reviewed: '2026-10',
    objective: {
      en: "Decide when to capitalise vs expense, compute straight-line depreciation, roll forward PP&E and explain how CapEx and D&A move through the three statements.",
      it: "Decidere quando capitalizzare o spesare, calcolare l'ammortamento a quote costanti, movimentare le immobilizzazioni e spiegare come CapEx e ammortamenti attraversano i tre prospetti."
    },
    screens: [
      {
        type: 'intuition',
        title: { en: "Spreading the cost of long-lived assets", it: "Ripartire il costo dei beni durevoli" },
        body: {
          en: "A delivery company buys a €500k truck that will work for five years. Charging €500k to profit in year one would make that year look terrible and the next four look artificially good.\n\nInstead the truck is **capitalised** (recorded as an asset) and its cost is **depreciated** over the years it helps earn revenue. Cash leaves on day one as **CapEx**; the expense arrives gradually as **D&A**.",
          it: "Un'azienda di consegne acquista un camion da €500k che lavorerà per cinque anni. Imputare €500k a conto economico nel primo anno farebbe sembrare pessimo quell'esercizio e artificialmente buoni i quattro successivi.\n\nIl camion viene invece **capitalizzato** (iscritto come attività) e il suo costo **ammortizzato** negli anni in cui contribuisce ai ricavi. La cassa esce il primo giorno come **CapEx**; il costo arriva gradualmente come **ammortamento**."
        }
      },
      {
        type: 'technical',
        title: { en: "Capitalise or expense?", it: "Capitalizzare o spesare?" },
        body: {
          en: "Under **IAS 16**, an item of PP&E is recognised as an asset if future economic benefits are probable and its cost can be measured reliably. Cost includes the purchase price, import duties, delivery, installation and costs to bring it to working condition.\n\n- **Capitalise**: new equipment, installation, major upgrades, significant replacement parts.\n- **Expense**: day-to-day repairs and maintenance, staff training, administration and general overheads.\n\nIntangibles follow **IAS 38**: research is always expensed; development is capitalised only when strict criteria are met. Under US GAAP, R&D is generally expensed (ASC 730).",
          it: "Secondo lo **IAS 16** un bene è iscritto tra le immobilizzazioni materiali se è probabile che genererà benefici economici futuri e il suo costo è attendibilmente determinabile. Il costo include prezzo d'acquisto, dazi, trasporto, installazione e oneri per renderlo funzionante.\n\n- **Capitalizzare**: nuovi impianti, installazione, migliorie rilevanti, sostituzione di componenti significativi.\n- **Spesare**: manutenzione ordinaria, formazione del personale, spese amministrative e generali.\n\nLe immateriali seguono lo **IAS 38**: la ricerca è sempre a costo; lo sviluppo si capitalizza solo se sono soddisfatti criteri stringenti. In US GAAP la R&S è generalmente spesata (ASC 730)."
        }
      },
      {
        type: 'technical',
        title: { en: "Depreciation and amortisation rules", it: "Regole di ammortamento" },
        body: {
          en: "- **Methods** (IAS 16): straight-line, diminishing balance, units of production — chosen to reflect how benefits are consumed.\n- **Useful life and residual value** are reviewed at least at each financial year-end; changes are applied prospectively.\n- **Land** is not depreciated.\n- **Goodwill and indefinite-life intangibles** are not amortised under IFRS (or by US public companies); they are tested for impairment at least annually (IAS 36).\n- **Italian GAAP** (art. 2426 c.c., OIC 24) amortises goodwill over its useful life, and over no more than 10 years when that life cannot be reliably estimated.\n\nTax depreciation often follows different rules from book depreciation, creating deferred taxes.",
          it: "- **Metodi** (IAS 16): quote costanti, quote decrescenti, per unità di prodotto — scelti per riflettere il consumo dei benefici.\n- **Vita utile e valore residuo** si rivedono almeno a ogni chiusura d'esercizio; le modifiche si applicano prospetticamente.\n- I **terreni** non si ammortizzano.\n- **Avviamento e immateriali a vita indefinita** non si ammortizzano in IFRS (né dalle società quotate USA); sono sottoposti a impairment test almeno annuale (IAS 36).\n- Nei **principi italiani** (art. 2426 c.c., OIC 24) l'avviamento si ammortizza secondo la vita utile e, se questa non è stimabile attendibilmente, entro un periodo non superiore a 10 anni.\n\nL'ammortamento fiscale segue spesso regole diverse da quello civilistico, generando fiscalità differita."
        }
      },
      {
        type: 'formula',
        formulas: [
          {
            name: { en: "Straight-line depreciation", it: "Ammortamento a quote costanti" },
            expr: 'Annual depreciation = (Cost − Residual value) ÷ Useful life',
            vars: [
              { sym: 'Cost', desc: { en: "Capitalised cost of the asset", it: "Costo capitalizzato del bene" } },
              { sym: 'Residual value', desc: { en: "Estimated disposal value at the end of its life", it: "Valore di realizzo stimato a fine vita" } }
            ]
          },
          { name: { en: "PP&E roll-forward", it: "Movimentazione delle immobilizzazioni" }, expr: 'Closing PP&E = Opening PP&E + CapEx − Depreciation − NBV of disposals − Impairments' },
          { name: { en: "Net book value", it: "Valore netto contabile" }, expr: 'NBV = Gross cost − Accumulated depreciation − Accumulated impairment' }
        ]
      },
      {
        type: 'example',
        title: { en: "A €500k machine, 5 years, €50k residual value", it: "Un macchinario da €500k, 5 anni, valore residuo €50k" },
        body: {
          en: "Depreciation = (500 − 50) ÷ 5 = **€90k per year**. Each year: Dr Depreciation expense 90 / Cr Accumulated depreciation 90. The full €500k cash outflow is in CFI in year 0.",
          it: "Ammortamento = (500 − 50) ÷ 5 = **€90k l'anno**. Ogni anno: Dare Ammortamenti 90 / Avere Fondo ammortamento 90. L'intera uscita di €500k è nel CFI dell'anno 0."
        },
        table: {
          headers: [{ en: 'Year', it: 'Anno' }, { en: 'Depreciation', it: 'Ammortamento' }, { en: 'Accum. depreciation', it: 'Fondo ammortamento' }, { en: 'NBV', it: 'Valore netto' }],
          rows: [
            ['0', '—', '0', '500'],
            ['1', '90', '90', '410'],
            ['2', '90', '180', '320'],
            ['3', '90', '270', '230'],
            ['4', '90', '360', '140'],
            ['5', '90', '450', '50']
          ]
        }
      },
      {
        type: 'example',
        title: { en: "Capitalise vs expense: the same €100m, two pictures", it: "Capitalizzare vs spesare: gli stessi €100m, due rappresentazioni" },
        body: {
          en: "A company spends €100m. Compare year 1 (5-year life, ignore tax):",
          it: "Un'azienda spende €100m. Confronto nell'anno 1 (vita utile 5 anni, senza imposte):"
        },
        table: {
          headers: [{ en: 'Year 1 (€m)', it: 'Anno 1 (€m)' }, { en: 'Expensed', it: 'Spesato' }, { en: 'Capitalised', it: 'Capitalizzato' }],
          rows: [
            ['EBITDA', '−100', '0'],
            ['EBIT', '−100', '−20'],
            ['CFO', '−100', '0'],
            ['CFI', '0', '−100'],
            [{ en: 'Total cash', it: 'Cassa totale' }, '−100', '−100'],
            [{ en: 'Closing asset (NBV)', it: 'Attività finale (valore netto)' }, '0', '80']
          ]
        }
      },
      { type: 'exercise', questionId: 'acc-dac-q1' },
      { type: 'exercise', questionId: 'acc-dac-q3' },
      {
        type: 'realworld',
        body: {
          en: "Analysts split CapEx into **maintenance** (to sustain current capacity, often approximated by D&A) and **growth** (to expand). A CapEx/D&A ratio persistently above 1 suggests a growing asset base; persistently below 1 can signal under-investment that will hurt future earnings.\n\nIn diligence, bankers check whether EBITDA is flattered by capitalised costs (software development, “capitalised R&D”, repairs booked as upgrades) — the classic case is WorldCom, which capitalised line costs that should have been expensed.",
          it: "Gli analisti distinguono il CapEx di **mantenimento** (per conservare la capacità esistente, spesso approssimato con gli ammortamenti) da quello di **sviluppo** (per crescere). Un rapporto CapEx/ammortamenti stabilmente sopra 1 indica una base di attivi in crescita; stabilmente sotto 1 può segnalare sotto-investimento che penalizzerà gli utili futuri.\n\nIn due diligence i banker verificano se l'EBITDA è gonfiato da costi capitalizzati (sviluppo software, R&S capitalizzata, manutenzioni registrate come migliorie) — il caso classico è WorldCom, che capitalizzò costi di linea che andavano spesati."
        }
      },
      { type: 'exercise', questionId: 'acc-dac-q4' },
      {
        type: 'interview',
        question: { en: "A company buys €100m of equipment with cash. Walk me through the three statements at purchase and after year one (10-year life, no residual value, 25% tax).", it: "Un'azienda acquista impianti per €100m in contanti. Mi descriva i tre prospetti all'acquisto e dopo il primo anno (vita utile 10 anni, nessun valore residuo, aliquota 25%)." },
        answer: {
          en: "At purchase: no income statement effect. CFI −€100m, so cash −€100m; PP&E +€100m; the balance sheet balances. After year one: depreciation of €10m reduces EBIT by €10m and net income by €7.5m. On the cash flow statement, net income −7.5 plus the €10m add-back gives CFO +€2.5m — the tax saving. On the balance sheet, PP&E falls €10m to €90m, cash rises €2.5m, so assets fall €7.5m, matched by a €7.5m drop in retained earnings.",
          it: "All'acquisto: nessun effetto a conto economico. CFI −€100m, quindi cassa −€100m; immobilizzazioni +€100m; lo stato patrimoniale quadra. Dopo il primo anno: l'ammortamento di €10m riduce l'EBIT di €10m e l'utile netto di €7,5m. Nel rendiconto, utile −7,5 più la rettifica di €10m dà CFO +€2,5m — il risparmio fiscale. Nello stato patrimoniale le immobilizzazioni scendono di €10m a €90m, la cassa sale di €2,5m: l'attivo cala di €7,5m, compensato dal calo di €7,5m degli utili a nuovo."
        }
      },
      {
        type: 'mistakes',
        items: [
          { en: "Saying depreciation “creates cash”. It is non-cash; it only saves cash through lower taxes (D&A × tax rate).", it: "Dire che l'ammortamento “genera cassa”. Non è monetario; fa risparmiare cassa solo tramite minori imposte (ammortamenti × aliquota)." },
          { en: "Depreciating the full cost without deducting the residual value, or depreciating land.", it: "Ammortizzare l'intero costo senza dedurre il valore residuo, o ammortizzare i terreni." },
          { en: "Forgetting disposals and impairments in the PP&E roll-forward, then backing out a wrong CapEx.", it: "Dimenticare dismissioni e svalutazioni nella movimentazione delle immobilizzazioni, ricavando così un CapEx errato." },
          { en: "Assuming capitalising costs increases cash. It only moves the outflow from CFO to CFI.", it: "Pensare che capitalizzare aumenti la cassa. Sposta solo l'uscita dal CFO al CFI." }
        ]
      },
      {
        type: 'summary',
        items: [
          { en: "Capitalise if future benefits are probable and cost is reliable (IAS 16); otherwise expense.", it: "Si capitalizza se i benefici futuri sono probabili e il costo attendibile (IAS 16); altrimenti si spesa." },
          { en: "Straight-line D = (Cost − Residual) ÷ Life.", it: "Quote costanti: A = (Costo − Residuo) ÷ Vita utile." },
          { en: "Closing PP&E = Opening + CapEx − D − Disposals − Impairment.", it: "Immobilizzazioni finali = Iniziali + CapEx − Ammortamenti − Dismissioni − Svalutazioni." },
          { en: "CapEx hits cash immediately (CFI); D&A hits profit over time and is added back in CFO.", it: "Il CapEx incide subito sulla cassa (CFI); gli ammortamenti incidono sull'utile nel tempo e si sommano nel CFO." }
        ]
      }
    ],
    questions: [
      {
        id: 'acc-dac-q1',
        kind: 'numeric',
        topic: 'depreciation',
        difficulty: 1,
        objective: { en: "Compute straight-line depreciation.", it: "Calcolare l'ammortamento a quote costanti." },
        prompt: {
          en: "Equipment costs €1,200k, has a residual value of €200k and a useful life of 8 years. What is annual straight-line depreciation (€k)?",
          it: "Un impianto costa €1.200k, ha valore residuo di €200k e vita utile di 8 anni. Qual è l'ammortamento annuo a quote costanti (€k)?"
        },
        answer: 125,
        unit: '€k',
        verify: { fn: 'straightLineDepreciation', args: [1200, 200, 8] },
        explanation: {
          en: "(1,200 − 200) ÷ 8 = 125. Ignoring the residual value gives 150.",
          it: "(1.200 − 200) ÷ 8 = 125. Ignorando il valore residuo si ottiene 150."
        }
      },
      {
        id: 'acc-dac-q2',
        kind: 'numeric',
        topic: 'depreciation',
        difficulty: 1,
        objective: { en: "Compute net book value after several years.", it: "Calcolare il valore netto contabile dopo alcuni anni." },
        prompt: {
          en: "Same equipment (cost €1,200k, annual depreciation €125k). What is its net book value at the end of year 3 (€k)?",
          it: "Stesso impianto (costo €1.200k, ammortamento annuo €125k). Qual è il valore netto contabile a fine anno 3 (€k)?"
        },
        answer: 825,
        unit: '€k',
        verify: { fn: 'sum', args: [1200, -125, -125, -125] },
        explanation: { en: "1,200 − 3 × 125 = 825.", it: "1.200 − 3 × 125 = 825." }
      },
      {
        id: 'acc-dac-q3',
        kind: 'numeric',
        topic: 'capex',
        difficulty: 2,
        objective: { en: "Roll forward PP&E.", it: "Movimentare le immobilizzazioni." },
        prompt: {
          en: "Opening net PP&E €800m; CapEx €150m; depreciation €90m; assets sold with net book value €20m. What is closing net PP&E (€m)?",
          it: "Immobilizzazioni nette iniziali €800m; CapEx €150m; ammortamenti €90m; beni ceduti con valore netto contabile €20m. Quali sono le immobilizzazioni nette finali (€m)?"
        },
        answer: 840,
        unit: '€m',
        verify: { fn: 'sum', args: [800, 150, -90, -20] },
        explanation: {
          en: "800 + 150 − 90 − 20 = 840. Disposals leave at book value — not at sale price.",
          it: "800 + 150 − 90 − 20 = 840. Le dismissioni escono al valore contabile, non al prezzo di vendita."
        }
      },
      {
        id: 'acc-dac-q4',
        kind: 'mcq',
        topic: 'capex',
        difficulty: 2,
        objective: { en: "Assess the effect of capitalising an operating cost.", it: "Valutare l'effetto della capitalizzazione di un costo operativo." },
        prompt: {
          en: "A company capitalises €50m of routine maintenance that should have been expensed. Ignoring tax and depreciation in the year, what is the effect versus correct accounting?",
          it: "Un'azienda capitalizza €50m di manutenzione ordinaria che andava spesata. Ignorando imposte e ammortamento dell'anno, qual è l'effetto rispetto alla contabilizzazione corretta?"
        },
        choices: [
          { en: "EBITDA +50, CFO +50, CFI −50, total cash unchanged", it: "EBITDA +50, CFO +50, CFI −50, cassa totale invariata" },
          { en: "EBITDA +50, CFO unchanged, total cash +50", it: "EBITDA +50, CFO invariato, cassa totale +50" },
          { en: "EBITDA unchanged, CFO +50, CFI −50", it: "EBITDA invariato, CFO +50, CFI −50" },
          { en: "No effect: total cash is the same", it: "Nessun effetto: la cassa totale è la stessa" }
        ],
        correct: 0,
        explanation: {
          en: "The cost leaves the P&L (EBITDA +50) and the outflow moves from CFO to CFI. Cash spent is identical, which is why “same cash, so no effect” is wrong: EBITDA and CFO — the metrics valuations and covenants use — are overstated.",
          it: "Il costo esce dal conto economico (EBITDA +50) e l'uscita passa dal CFO al CFI. La cassa spesa è identica, per questo “stessa cassa, nessun effetto” è sbagliato: EBITDA e CFO — le metriche usate da valutazioni e covenant — risultano sovrastimati."
        }
      },
      {
        id: 'acc-dac-q5',
        kind: 'multi',
        topic: 'capex',
        difficulty: 2,
        objective: { en: "Identify costs that qualify for capitalisation under IAS 16.", it: "Identificare i costi capitalizzabili secondo lo IAS 16." },
        prompt: { en: "Which costs should be capitalised as part of PP&E (IAS 16)? Select all that apply.", it: "Quali costi vanno capitalizzati tra le immobilizzazioni materiali (IAS 16)? Seleziona tutte le risposte corrette." },
        choices: [
          { en: "Delivery and installation of a new production line", it: "Trasporto e installazione di una nuova linea produttiva" },
          { en: "Training staff to operate the new line", it: "Formazione del personale per usare la nuova linea" },
          { en: "Import duties on the equipment", it: "Dazi doganali sull'impianto" },
          { en: "Monthly routine servicing", it: "Manutenzione ordinaria mensile" },
          { en: "Testing whether the line functions properly before it starts operating", it: "Collaudo per verificare il corretto funzionamento della linea prima dell'avvio" }
        ],
        correct: [0, 2, 4],
        explanation: {
          en: "Directly attributable costs to bring the asset to working condition — delivery, installation, duties, testing — are capitalised. IAS 16 explicitly excludes staff training; day-to-day servicing is expensed.",
          it: "I costi direttamente attribuibili per rendere il bene funzionante — trasporto, installazione, dazi, collaudo — si capitalizzano. Lo IAS 16 esclude espressamente la formazione del personale; la manutenzione ordinaria è a costo."
        }
      },
      {
        id: 'acc-dac-q6',
        kind: 'numeric',
        topic: 'capex',
        difficulty: 2,
        objective: { en: "Back out CapEx from balance sheet movements.", it: "Ricavare il CapEx dalle variazioni patrimoniali." },
        prompt: {
          en: "Net PP&E rose from €900m to €950m. Depreciation was €70m; there were no disposals or impairments. What was CapEx (€m)?",
          it: "Le immobilizzazioni nette sono passate da €900m a €950m. Gli ammortamenti sono stati €70m; nessuna dismissione o svalutazione. Qual è stato il CapEx (€m)?"
        },
        answer: 120,
        unit: '€m',
        verify: { fn: 'sum', args: [950, -900, 70] },
        explanation: {
          en: "CapEx = closing − opening + depreciation = 950 − 900 + 70 = 120. The €50m increase alone understates CapEx because depreciation reduced the balance.",
          it: "CapEx = finale − iniziale + ammortamenti = 950 − 900 + 70 = 120. La sola variazione di €50m sottostima il CapEx perché l'ammortamento ha ridotto il saldo."
        }
      }
    ],
    flashcards: [
      { id: 'fc-acc-dac-1', topic: 'depreciation', front: { en: "Straight-line depreciation formula?", it: "Formula dell'ammortamento a quote costanti?" }, back: { en: "(Cost − Residual value) ÷ Useful life.", it: "(Costo − Valore residuo) ÷ Vita utile." } },
      { id: 'fc-acc-dac-2', topic: 'capex', front: { en: "PP&E roll-forward?", it: "Movimentazione delle immobilizzazioni?" }, back: { en: "Opening + CapEx − Depreciation − NBV of disposals − Impairment = Closing.", it: "Iniziale + CapEx − Ammortamenti − Valore netto delle dismissioni − Svalutazioni = Finale." } },
      { id: 'fc-acc-dac-3', topic: 'capex', front: { en: "IAS 16 recognition criteria for PP&E?", it: "Criteri di iscrizione IAS 16 per le immobilizzazioni materiali?" }, back: { en: "Probable future economic benefits and cost that can be measured reliably.", it: "Benefici economici futuri probabili e costo attendibilmente determinabile." } },
      { id: 'fc-acc-dac-4', topic: 'depreciation', front: { en: "Is goodwill amortised?", it: "L'avviamento si ammortizza?" }, back: { en: "IFRS / US GAAP (public cos.): no, impairment-tested at least annually. Italian GAAP: yes, over useful life (≤10 years if not reliably estimable).", it: "IFRS / US GAAP (società quotate): no, impairment test almeno annuale. OIC: sì, secondo la vita utile (≤10 anni se non stimabile attendibilmente)." } },
      { id: 'fc-acc-dac-5', topic: 'depreciation', front: { en: "Cash effect of €10 more depreciation at a 25% tax rate?", it: "Effetto di cassa di €10 di ammortamento in più con aliquota 25%?" }, back: { en: "+€2.5 (tax shield), assuming the expense is tax-deductible.", it: "+€2,5 (scudo fiscale), assumendo che il costo sia deducibile." } }
    ],
    sources: [
      { label: 'IFRS Foundation — IAS 16 Property, Plant and Equipment', url: 'https://www.ifrs.org/issued-standards/list-of-standards/ias-16-property-plant-and-equipment/' },
      { label: 'IFRS Foundation — IAS 38 Intangible Assets', url: 'https://www.ifrs.org/issued-standards/list-of-standards/ias-38-intangible-assets/' },
      { label: 'IFRS Foundation — IAS 36 Impairment of Assets', url: 'https://www.ifrs.org/issued-standards/list-of-standards/ias-36-impairment-of-assets/' },
      { label: 'Codice Civile, art. 2426 n. 6; Fondazione OIC — OIC 24 Immobilizzazioni immateriali', url: 'https://www.fondazioneoic.eu/' }
    ]
  },
  {
    id: 'acc-working-capital',
    academyId: 'accounting',
    moduleId: 'A2',
    mode: 'deep',
    minutes: 12,
    difficulty: 2,
    reviewed: '2026-10',
    objective: {
      en: "Define operating net working capital, compute DSO, DIO, DPO and the cash conversion cycle, and translate changes in NWC into cash flow.",
      it: "Definire il capitale circolante netto operativo, calcolare DSO, DIO, DPO e il ciclo di conversione di cassa, e tradurre le variazioni del CCN in flussi di cassa."
    },
    screens: [
      {
        type: 'intuition',
        title: { en: "Cash stuck in the business", it: "Cassa intrappolata nel business" },
        body: {
          en: "A manufacturer buys steel, holds it as inventory, sells the product on 60-day terms and pays its suppliers after 50 days. Between paying suppliers and collecting from customers, its own cash is **tied up** in the operating cycle.\n\nThat tied-up cash is **net working capital (NWC)**. When the business grows, NWC usually grows too — so a growing, profitable company can still run short of cash.",
          it: "Un'azienda manifatturiera compra acciaio, lo tiene a magazzino, vende il prodotto con pagamento a 60 giorni e paga i fornitori dopo 50 giorni. Tra il pagamento ai fornitori e l'incasso dai clienti, la sua cassa è **immobilizzata** nel ciclo operativo.\n\nQuella cassa immobilizzata è il **capitale circolante netto (CCN)**. Quando il business cresce, di solito cresce anche il CCN — per questo un'azienda in crescita e redditizia può comunque restare a corto di liquidità."
        }
      },
      {
        type: 'technical',
        title: { en: "Accounting vs operating definition", it: "Definizione contabile vs operativa" },
        body: {
          en: "- **Accounting working capital** = current assets − current liabilities (a liquidity measure).\n- **Operating NWC** (what bankers model) = operating current assets − operating current liabilities.\n\n**Include**: trade receivables, inventory, prepaid expenses, other operating receivables; trade payables, accrued expenses, deferred revenue, other operating payables.\n\n**Exclude**: cash and equivalents, short-term debt and the current portion of long-term debt, dividends payable — these are financing items and belong in **net debt**. Mixing the two double counts in a DCF or SPA.",
          it: "- **Capitale circolante contabile** = attività correnti − passività correnti (misura di liquidità).\n- **CCN operativo** (quello che modellano i banker) = attività correnti operative − passività correnti operative.\n\n**Si includono**: crediti commerciali, rimanenze, risconti attivi, altri crediti operativi; debiti commerciali, ratei e debiti per costi maturati, ricavi differiti, altri debiti operativi.\n\n**Si escludono**: liquidità, debiti finanziari a breve e quota corrente del debito a lungo, dividendi da pagare — sono poste finanziarie e appartengono alla **posizione finanziaria netta**. Mescolarle porta a doppi conteggi in un DCF o in uno SPA."
        }
      },
      {
        type: 'formula',
        formulas: [
          { name: { en: "Operating NWC", it: "CCN operativo" }, expr: 'NWC = (Receivables + Inventory + Other op. current assets) − (Payables + Accrued + Deferred revenue + Other op. current liabilities)' },
          { name: { en: "Cash impact", it: "Impatto di cassa" }, expr: 'Cash effect = −ΔNWC = NWC(opening) − NWC(closing)' },
          { name: { en: "Days ratios", it: "Indici di rotazione in giorni" }, expr: 'DSO = AR ÷ Revenue × 365 ; DIO = Inventory ÷ COGS × 365 ; DPO = AP ÷ COGS × 365' },
          {
            name: { en: "Cash conversion cycle", it: "Ciclo di conversione di cassa" },
            expr: 'CCC = DSO + DIO − DPO',
            vars: [{ sym: 'CCC', desc: { en: "Days between paying suppliers and collecting from customers", it: "Giorni tra il pagamento dei fornitori e l'incasso dai clienti" } }]
          }
        ],
        note: {
          en: "Some analysts use average balances or 360 days; be consistent across periods and peers.",
          it: "Alcuni analisti usano saldi medi o 360 giorni; l'importante è essere coerenti tra periodi e comparabili."
        }
      },
      {
        type: 'example',
        title: { en: "Zeta S.r.l. (€m)", it: "Zeta S.r.l. (€m)" },
        body: {
          en: "Year 1 revenue €730m, COGS €438m. NWC rises from 75 to 94: ΔNWC = **+19**, a **€19m use of cash** in CFO.\n\nDays (year 1): DSO = 120/730 × 365 = **60**; DIO = 54/438 × 365 = **45**; DPO = 60/438 × 365 = **50**; CCC = 60 + 45 − 50 = **55 days**.",
          it: "Ricavi anno 1 €730m, costo del venduto €438m. Il CCN sale da 75 a 94: ΔCCN = **+19**, un **assorbimento di cassa di €19m** nel CFO.\n\nGiorni (anno 1): DSO = 120/730 × 365 = **60**; DIO = 54/438 × 365 = **45**; DPO = 60/438 × 365 = **50**; CCC = 60 + 45 − 50 = **55 giorni**."
        },
        table: {
          headers: [{ en: 'Item', it: 'Voce' }, { en: 'Year 0', it: 'Anno 0' }, { en: 'Year 1', it: 'Anno 1' }],
          rows: [
            [{ en: 'Trade receivables', it: 'Crediti commerciali' }, '100', '120'],
            [{ en: 'Inventory', it: 'Rimanenze' }, '50', '54'],
            [{ en: 'Prepaid expenses', it: 'Risconti attivi' }, '10', '10'],
            [{ en: 'Trade payables', it: 'Debiti commerciali' }, '(55)', '(60)'],
            [{ en: 'Accrued expenses', it: 'Ratei e debiti per costi maturati' }, '(30)', '(30)'],
            [{ en: 'Operating NWC', it: 'CCN operativo' }, '75', '94']
          ],
          totalRows: [5]
        }
      },
      { type: 'exercise', questionId: 'acc-wc-q1' },
      { type: 'exercise', questionId: 'acc-wc-q2' },
      { type: 'exercise', questionId: 'acc-wc-q3' },
      {
        type: 'realworld',
        body: {
          en: "**Negative NWC** businesses — supermarkets, airlines selling tickets in advance, subscription software — collect cash before paying suppliers, so growth **releases** cash.\n\nIn M&A, the share purchase agreement often sets a **normalised NWC target (peg)**. Under completion accounts, the price is adjusted euro-for-euro if closing NWC is above or below the peg, so a seller cannot boost cash by squeezing suppliers before closing. Analysts build the peg from a trailing 12-month average to neutralise seasonality.",
          it: "I business con **CCN negativo** — supermercati, compagnie aeree che vendono biglietti in anticipo, software in abbonamento — incassano prima di pagare i fornitori, quindi la crescita **libera** cassa.\n\nNelle M&A il contratto di compravendita (SPA) fissa spesso un **CCN target normalizzato**. Con il meccanismo delle completion accounts il prezzo si rettifica euro per euro se il CCN al closing è sopra o sotto il target, così il venditore non può gonfiare la cassa ritardando i pagamenti ai fornitori prima del closing. Gli analisti calcolano il target sulla media degli ultimi 12 mesi per neutralizzare la stagionalità."
        }
      },
      { type: 'exercise', questionId: 'acc-wc-q5' },
      {
        type: 'interview',
        question: { en: "A company's revenue grows 20% but its operating cash flow falls. How can that happen?", it: "I ricavi di un'azienda crescono del 20% ma il flusso di cassa operativo cala. Com'è possibile?" },
        answer: {
          en: "Most likely working capital. If receivables and inventory grow with — or faster than — sales, the increase in NWC is subtracted in CFO and can outweigh the extra profit. Warning signs are rising DSO, meaning looser credit terms or collection problems, and rising DIO, meaning slow-moving stock. I'd also check whether suppliers are being paid faster (lower DPO), and whether revenue recognition has become more aggressive.",
          it: "Molto probabilmente il capitale circolante. Se crediti e magazzino crescono quanto o più delle vendite, l'aumento del CCN si sottrae nel CFO e può superare l'utile aggiuntivo. I segnali d'allarme sono un DSO in aumento, cioè termini di credito più laschi o problemi di incasso, e un DIO in aumento, cioè scorte a lenta rotazione. Verificherei anche se i fornitori vengono pagati prima (DPO in calo) e se la rilevazione dei ricavi è diventata più aggressiva."
        }
      },
      {
        type: 'mistakes',
        items: [
          { en: "Including cash or short-term debt in operating NWC — they belong in net debt.", it: "Includere liquidità o debiti finanziari a breve nel CCN operativo: appartengono alla PFN." },
          { en: "Getting the sign wrong: an increase in NWC is a use of cash (negative in CFO).", it: "Sbagliare il segno: un aumento del CCN assorbe cassa (negativo nel CFO)." },
          { en: "Computing DIO or DPO on revenue instead of COGS, which mixes cost and price levels.", it: "Calcolare DIO o DPO sui ricavi invece che sul costo del venduto, mescolando costi e prezzi." },
          { en: "Reading a single year-end balance for a seasonal business. Use averages.", it: "Leggere un unico saldo di fine anno per un business stagionale. Usa le medie." }
        ]
      },
      {
        type: 'summary',
        items: [
          { en: "Operating NWC = operating current assets − operating current liabilities (no cash, no debt).", it: "CCN operativo = attività correnti operative − passività correnti operative (né cassa né debito)." },
          { en: "Increase in NWC = cash outflow; decrease = cash inflow.", it: "Aumento del CCN = uscita di cassa; diminuzione = entrata." },
          { en: "CCC = DSO + DIO − DPO; shorter is better for cash.", it: "CCC = DSO + DIO − DPO; più è breve, meglio è per la cassa." },
          { en: "In deals, NWC targets protect the buyer from pre-closing window dressing.", it: "Nei deal il CCN target protegge l'acquirente da manovre pre-closing." }
        ]
      }
    ],
    questions: [
      {
        id: 'acc-wc-q1',
        kind: 'numeric',
        topic: 'working-capital',
        difficulty: 1,
        objective: { en: "Compute operating net working capital.", it: "Calcolare il capitale circolante netto operativo." },
        prompt: {
          en: "Receivables €120m, inventory €80m, prepaid expenses €10m, cash €60m, trade payables €90m, accrued expenses €30m, short-term bank debt €40m. What is operating NWC (€m)?",
          it: "Crediti €120m, rimanenze €80m, risconti attivi €10m, liquidità €60m, debiti commerciali €90m, ratei passivi €30m, debiti bancari a breve €40m. Qual è il CCN operativo (€m)?"
        },
        answer: 90,
        unit: '€m',
        verify: { fn: 'netWorkingCapital', args: [210, 120] },
        explanation: {
          en: "Operating assets 120 + 80 + 10 = 210; operating liabilities 90 + 30 = 120; NWC = 90. Cash and bank debt are excluded (including both gives 110).",
          it: "Attività operative 120 + 80 + 10 = 210; passività operative 90 + 30 = 120; CCN = 90. Liquidità e debito bancario sono esclusi (includendoli si ottiene 110)."
        }
      },
      {
        id: 'acc-wc-q2',
        kind: 'numeric',
        topic: 'working-capital',
        difficulty: 2,
        objective: { en: "Compute days sales outstanding.", it: "Calcolare i giorni medi di incasso (DSO)." },
        prompt: {
          en: "Revenue is €1,095m and year-end trade receivables are €180m. What is DSO (days, 365-day year)?",
          it: "I ricavi sono €1.095m e i crediti commerciali a fine anno €180m. Qual è il DSO (giorni, anno di 365 giorni)?"
        },
        answer: 60,
        unit: 'days',
        verify: { fn: 'ratio', args: [65700, 1095] },
        tolerance: { abs: 0.5 },
        explanation: {
          en: "DSO = 180 / 1,095 × 365 = 65,700 / 1,095 = 60 days.",
          it: "DSO = 180 / 1.095 × 365 = 65.700 / 1.095 = 60 giorni."
        }
      },
      {
        id: 'acc-wc-q3',
        kind: 'numeric',
        topic: 'working-capital',
        difficulty: 2,
        objective: { en: "Translate a change in NWC into a cash flow.", it: "Tradurre una variazione del CCN in un flusso di cassa." },
        prompt: {
          en: "Operating NWC goes from €75m to €94m. What is the impact on cash from operations (€m)? Use a negative number for a use of cash.",
          it: "Il CCN operativo passa da €75m a €94m. Qual è l'impatto sul flusso operativo (€m)? Usa un numero negativo per un assorbimento di cassa."
        },
        answer: -19,
        unit: '€m',
        verify: { fn: 'diff', args: [75, 94] },
        explanation: {
          en: "NWC increased by 19, so cash is tied up: −19. Answering +19 confuses the change in the balance with its cash effect.",
          it: "Il CCN è aumentato di 19, quindi la cassa è immobilizzata: −19. Rispondere +19 confonde la variazione del saldo con il suo effetto di cassa."
        }
      },
      {
        id: 'acc-wc-q4',
        kind: 'numeric',
        topic: 'working-capital',
        difficulty: 1,
        objective: { en: "Compute the cash conversion cycle.", it: "Calcolare il ciclo di conversione di cassa." },
        prompt: {
          en: "DSO 60 days, DIO 45 days, DPO 50 days. What is the cash conversion cycle (days)?",
          it: "DSO 60 giorni, DIO 45 giorni, DPO 50 giorni. Qual è il ciclo di conversione di cassa (giorni)?"
        },
        answer: 55,
        unit: 'days',
        verify: { fn: 'sum', args: [60, 45, -50] },
        explanation: { en: "60 + 45 − 50 = 55. Payables are subtracted because supplier credit finances the cycle.", it: "60 + 45 − 50 = 55. I debiti si sottraggono perché il credito dei fornitori finanzia il ciclo." }
      },
      {
        id: 'acc-wc-q5',
        kind: 'numeric',
        topic: 'working-capital',
        difficulty: 3,
        objective: { en: "Apply an NWC peg adjustment to the purchase price.", it: "Applicare al prezzo la rettifica per CCN target." },
        prompt: {
          en: "A buyer agrees an enterprise value of €500m on a cash-free, debt-free basis with a normalised NWC target of €80m. At closing, net debt is €150m and NWC is €70m. What equity price is paid (€m)?",
          it: "Un acquirente concorda un enterprise value di €500m su base cash-free, debt-free, con CCN target normalizzato di €80m. Al closing la PFN è €150m e il CCN €70m. Quale prezzo dell'equity viene pagato (€m)?"
        },
        answer: 340,
        unit: '€m',
        verify: { fn: 'equityPriceWithNWCAdjustment', args: [500, 150, 70, 80] },
        explanation: {
          en: "500 − 150 + (70 − 80) = 340. NWC is €10m below the peg, so the buyer will have to fund that shortfall and pays €10m less. Adding the 10 (360) reverses the logic.",
          it: "500 − 150 + (70 − 80) = 340. Il CCN è €10m sotto il target, quindi l'acquirente dovrà finanziare la differenza e paga €10m in meno. Sommare 10 (360) inverte la logica."
        }
      },
      {
        id: 'acc-wc-q6',
        kind: 'mcq',
        topic: 'working-capital',
        difficulty: 2,
        objective: { en: "Recognise a negative working capital business.", it: "Riconoscere un business con capitale circolante negativo." },
        prompt: { en: "Which business is most likely to operate with negative NWC?", it: "Quale business opera più probabilmente con CCN negativo?" },
        choices: [
          { en: "An industrial machinery maker selling on 90-day terms", it: "Un produttore di macchinari industriali che vende a 90 giorni" },
          { en: "A luxury watchmaker holding two years of inventory", it: "Un orologiaio di lusso con due anni di scorte" },
          { en: "A grocery retailer paid in cash by shoppers, paying suppliers at 60 days", it: "Una catena di supermercati pagata in contanti dai clienti, che paga i fornitori a 60 giorni" },
          { en: "A construction contractor billing on project milestones", it: "Un'impresa di costruzioni che fattura a stato avanzamento lavori" }
        ],
        correct: 2,
        explanation: {
          en: "The grocer has almost no receivables, fast-turning inventory and long payables, so suppliers finance it. The machinery maker and watchmaker tie up cash in receivables or inventory; contractors usually carry contract assets and retentions.",
          it: "Il supermercato non ha quasi crediti, ha scorte a rapida rotazione e paga i fornitori a lungo: sono i fornitori a finanziarlo. Il produttore di macchinari e l'orologiaio immobilizzano cassa in crediti o magazzino; le imprese di costruzione hanno di solito attività da contratto e ritenute a garanzia."
        }
      }
    ],
    flashcards: [
      { id: 'fc-acc-wc-1', topic: 'working-capital', front: { en: "Operating NWC definition?", it: "Definizione di CCN operativo?" }, back: { en: "Operating current assets (AR, inventory, prepaids) − operating current liabilities (AP, accrued, deferred revenue). Excludes cash and debt.", it: "Attività correnti operative (crediti, rimanenze, risconti attivi) − passività correnti operative (debiti commerciali, ratei, ricavi differiti). Escluse cassa e debiti finanziari." } },
      { id: 'fc-acc-wc-2', topic: 'working-capital', front: { en: "DSO, DIO, DPO formulas?", it: "Formule di DSO, DIO, DPO?" }, back: { en: "DSO = AR/Revenue × 365; DIO = Inventory/COGS × 365; DPO = AP/COGS × 365.", it: "DSO = Crediti/Ricavi × 365; DIO = Rimanenze/Costo del venduto × 365; DPO = Debiti/Costo del venduto × 365." } },
      { id: 'fc-acc-wc-3', topic: 'working-capital', front: { en: "Cash conversion cycle?", it: "Ciclo di conversione di cassa?" }, back: { en: "DSO + DIO − DPO.", it: "DSO + DIO − DPO." } },
      { id: 'fc-acc-wc-4', topic: 'working-capital', front: { en: "Cash effect of a €10m increase in NWC?", it: "Effetto di cassa di un aumento del CCN di €10m?" }, back: { en: "−€10m in CFO (a use of cash).", it: "−€10m nel CFO (assorbimento di cassa)." } },
      { id: 'fc-acc-wc-5', topic: 'working-capital', front: { en: "What is an NWC peg in an SPA?", it: "Cos'è il CCN target in uno SPA?" }, back: { en: "A normalised NWC level; closing NWC above/below it adjusts the price euro-for-euro (completion accounts).", it: "Un livello normalizzato di CCN; se il CCN al closing è sopra/sotto, il prezzo si rettifica euro per euro (completion accounts)." } }
    ]
  },
  {
    id: 'acc-linking-statements',
    academyId: 'accounting',
    moduleId: 'A2',
    mode: 'deep',
    minutes: 18,
    difficulty: 3,
    reviewed: '2026-10',
    objective: {
      en: "Trace any transaction through the income statement, cash flow statement and balance sheet at a stated tax rate, and prove the balance sheet still balances.",
      it: "Seguire qualsiasi operazione attraverso conto economico, rendiconto finanziario e stato patrimoniale a una data aliquota, dimostrando che lo stato patrimoniale continua a quadrare."
    },
    screens: [
      {
        type: 'intuition',
        title: { en: "One business, three lenses", it: "Un'azienda, tre lenti" },
        body: {
          en: "The three statements are not separate reports — they are one system.\n\n- **Net income** from the income statement is the first line of the cash flow statement and flows into **retained earnings**.\n- The cash flow statement explains the change in the **cash** line of the balance sheet.\n- Every other balance sheet movement (PP&E, working capital, debt, equity) shows up somewhere on the cash flow statement.\n\nIf you can push a change through all three and the balance sheet still balances, you understand accounting well enough for any IB interview.",
          it: "I tre prospetti non sono documenti separati: sono un unico sistema.\n\n- L'**utile netto** del conto economico è la prima riga del rendiconto finanziario e confluisce negli **utili a nuovo**.\n- Il rendiconto spiega la variazione della **cassa** nello stato patrimoniale.\n- Ogni altra variazione patrimoniale (immobilizzazioni, circolante, debito, PN) compare da qualche parte nel rendiconto.\n\nSe sai far passare una variazione in tutti e tre i prospetti e lo stato patrimoniale continua a quadrare, conosci la contabilità abbastanza per qualsiasi colloquio in IB."
        }
      },
      {
        type: 'technical',
        title: { en: "The links you must name", it: "I collegamenti da saper citare" },
        body: {
          en: "1. Net income → top of CFO and → retained earnings.\n2. D&A, impairments, write-downs, SBC → reduce net income, added back in CFO, reduce the related asset (or increase equity for SBC).\n3. Changes in operating assets/liabilities → CFO working capital lines.\n4. CapEx → CFI and → PP&E. Asset sales → CFI.\n5. Debt raised/repaid, share issues/buybacks, dividends → CFF and → debt/equity.\n6. Ending cash on the CFS → cash on the balance sheet.\n\n**Standard assumptions** in drills: the tax rate is given, the item is tax-deductible, and taxes are paid in cash in the period (so tax savings increase cash).",
          it: "1. Utile netto → prima riga del CFO e → utili a nuovo.\n2. Ammortamenti, svalutazioni, write-down, pagamenti basati su azioni → riducono l'utile, si sommano nel CFO, riducono l'attività collegata (o aumentano il PN per i piani azionari).\n3. Variazioni di attività/passività operative → righe del circolante nel CFO.\n4. CapEx → CFI e → immobilizzazioni. Cessioni di beni → CFI.\n5. Debiti accesi/rimborsati, aumenti di capitale/riacquisti, dividendi → CFF e → debiti/PN.\n6. Cassa finale del rendiconto → cassa dello stato patrimoniale.\n\n**Ipotesi standard** negli esercizi: aliquota data, costo fiscalmente deducibile, imposte pagate in cassa nel periodo (quindi il risparmio d'imposta aumenta la cassa)."
        }
      },
      {
        type: 'formula',
        formulas: [
          { name: { en: "After-tax effect of a pre-tax expense X", it: "Effetto netto d'imposta di un costo ante imposte X" }, expr: 'ΔNet income = −X × (1 − t)' },
          { name: { en: "Cash effect if X is non-cash", it: "Effetto di cassa se X non è monetario" }, expr: 'ΔCash = −X × (1 − t) + X = +X × t (the tax shield)' },
          { name: { en: "Cash effect if X is paid in cash", it: "Effetto di cassa se X è pagato" }, expr: 'ΔCash = −X × (1 − t)' },
          { name: { en: "Balance check", it: "Verifica di quadratura" }, expr: 'ΔAssets = ΔLiabilities + ΔEquity, with ΔEquity (retained earnings) = ΔNet income' }
        ],
        note: {
          en: "Four steps every time: (1) income statement, (2) cash flow statement, (3) balance sheet, (4) check that it balances.",
          it: "Quattro passaggi ogni volta: (1) conto economico, (2) rendiconto finanziario, (3) stato patrimoniale, (4) verifica della quadratura."
        }
      },
      {
        type: 'example',
        title: { en: "Drill 1 — Depreciation goes up by €10 (tax 25%)", it: "Esercizio 1 — L'ammortamento aumenta di €10 (aliquota 25%)" },
        body: {
          en: "**IS**: EBIT −10 → tax −2.5 → net income **−7.5**.\n**CFS**: net income −7.5, add back depreciation +10 → CFO **+2.5**; cash +2.5.\n**BS**: cash +2.5, PP&E −10 → assets **−7.5**. Retained earnings −7.5 → equity **−7.5**. Balanced.\n\nCash goes **up** because depreciation is tax-deductible but non-cash: you pay €2.5 less tax.",
          it: "**CE**: EBIT −10 → imposte −2,5 → utile netto **−7,5**.\n**RF**: utile −7,5, si somma l'ammortamento +10 → CFO **+2,5**; cassa +2,5.\n**SP**: cassa +2,5, immobilizzazioni −10 → attivo **−7,5**. Utili a nuovo −7,5 → PN **−7,5**. Quadra.\n\nLa cassa **aumenta** perché l'ammortamento è deducibile ma non monetario: si pagano €2,5 di imposte in meno."
        },
        table: {
          headers: [{ en: 'Statement', it: 'Prospetto' }, { en: 'Line', it: 'Voce' }, { en: 'Δ €', it: 'Δ €' }],
          rows: [
            [{ en: 'Income statement', it: 'Conto economico' }, { en: 'Depreciation / EBIT', it: 'Ammortamento / EBIT' }, '+10 / −10'],
            [{ en: 'Income statement', it: 'Conto economico' }, { en: 'Tax expense', it: 'Imposte' }, '−2.5'],
            [{ en: 'Income statement', it: 'Conto economico' }, { en: 'Net income', it: 'Utile netto' }, '−7.5'],
            [{ en: 'Cash flow statement', it: 'Rendiconto finanziario' }, { en: 'Net income + D&A = CFO', it: 'Utile + ammortamenti = CFO' }, '−7.5 + 10 = +2.5'],
            [{ en: 'Balance sheet', it: 'Stato patrimoniale' }, { en: 'Cash; PP&E', it: 'Cassa; immobilizzazioni' }, '+2.5; −10'],
            [{ en: 'Balance sheet', it: 'Stato patrimoniale' }, { en: 'Retained earnings', it: 'Utili a nuovo' }, '−7.5']
          ]
        }
      },
      { type: 'exercise', questionId: 'acc-link-q1' },
      {
        type: 'example',
        title: { en: "Drill 2 — Inventory written down by €10 (tax 25%)", it: "Esercizio 2 — Svalutazione del magazzino di €10 (aliquota 25%)" },
        body: {
          en: "Assume the write-down is tax-deductible (tax treatment varies by jurisdiction).\n\n**IS**: write-down (in COGS or a separate line) +10 → pre-tax income −10 → net income **−7.5**.\n**CFS**: net income −7.5; the write-down is non-cash, so add back +10 (often within the change in inventory) → CFO **+2.5**.\n**BS**: inventory −10, cash +2.5 → assets **−7.5**; retained earnings **−7.5**. Balanced.\n\nThe pattern is identical to depreciation: any **non-cash, deductible** expense of X lowers net income by X(1−t) and raises cash by X·t.",
          it: "Si assume che la svalutazione sia deducibile (il trattamento fiscale varia da paese a paese).\n\n**CE**: svalutazione (nel costo del venduto o in una voce separata) +10 → utile ante imposte −10 → utile netto **−7,5**.\n**RF**: utile −7,5; la svalutazione non è monetaria, quindi si somma +10 (spesso dentro la variazione delle rimanenze) → CFO **+2,5**.\n**SP**: rimanenze −10, cassa +2,5 → attivo **−7,5**; utili a nuovo **−7,5**. Quadra.\n\nLo schema è identico all'ammortamento: ogni costo **non monetario e deducibile** X riduce l'utile di X(1−t) e aumenta la cassa di X·t."
        }
      },
      { type: 'exercise', questionId: 'acc-link-q2' },
      {
        type: 'example',
        title: { en: "Drill 3 — Buy €100 of PP&E with new debt", it: "Esercizio 3 — Acquisto di €100 di impianti finanziato con nuovo debito" },
        body: {
          en: "**Day 0**: no IS effect. CFS: CFI −100 (CapEx), CFF +100 (borrowing) → net cash 0. BS: PP&E +100, debt +100. Balanced.\n\n**After year 1** (10-year life, 5% interest, tax 25%):\n- **IS**: depreciation 10 + interest 5 → pre-tax −15 → tax −3.75 → net income **−11.25**.\n- **CFS**: −11.25 + 10 (D&A) → CFO **−1.25** (no principal repaid).\n- **BS**: cash −1.25, PP&E 100 − 10 = **+90** → assets **+88.75**. Debt **+100**, retained earnings **−11.25** → L + E **+88.75**. Balanced.",
          it: "**Giorno 0**: nessun effetto a CE. RF: CFI −100 (CapEx), CFF +100 (nuovo debito) → cassa netta 0. SP: immobilizzazioni +100, debito +100. Quadra.\n\n**Dopo l'anno 1** (vita utile 10 anni, interessi 5%, aliquota 25%):\n- **CE**: ammortamento 10 + interessi 5 → ante imposte −15 → imposte −3,75 → utile netto **−11,25**.\n- **RF**: −11,25 + 10 (ammortamento) → CFO **−1,25** (nessun rimborso di capitale).\n- **SP**: cassa −1,25, immobilizzazioni 100 − 10 = **+90** → attivo **+88,75**. Debito **+100**, utili a nuovo **−11,25** → passivo + PN **+88,75**. Quadra."
        }
      },
      { type: 'exercise', questionId: 'acc-link-q3' },
      {
        type: 'realworld',
        body: {
          en: "Analysts live this in Excel. A three-statement model is built so that the balance sheet balances **by construction**: cash comes only from the cash flow statement, and every balance sheet line is linked to a flow. When the check row isn't zero, the analyst traces which flow is missing a link — usually a new line added to one statement but not the others.\n\nInterviewers use these drills because they test whether you understand the mechanics behind every model you will touch in your first week.",
          it: "Gli analisti lo vivono ogni giorno in Excel. Un modello a tre prospetti è costruito perché lo stato patrimoniale quadri **per costruzione**: la cassa deriva solo dal rendiconto e ogni voce patrimoniale è collegata a un flusso. Quando la riga di controllo non è zero, l'analista cerca il flusso senza collegamento — di solito una voce aggiunta in un prospetto ma non negli altri.\n\nGli intervistatori usano questi esercizi perché verificano se capisci la meccanica di ogni modello che toccherai nella prima settimana."
        }
      },
      { type: 'exercise', questionId: 'acc-link-q4' },
      { type: 'exercise', questionId: 'acc-link-q5' },
      {
        type: 'interview',
        question: { en: "Walk me through how the three financial statements are linked.", it: "Mi spieghi come sono collegati i tre prospetti di bilancio." },
        answer: {
          en: "Net income from the bottom of the income statement is the starting point of the cash flow statement, and it flows into retained earnings on the balance sheet. On the cash flow statement, we add back non-cash charges like D&A, adjust for changes in working capital — which link to current assets and liabilities — then capture CapEx, which links to PP&E, and financing flows, which link to debt and equity. The net change in cash, added to opening cash, gives closing cash on the balance sheet. And since every balance sheet change is mirrored on the cash flow statement, assets equal liabilities plus equity.",
          it: "L'utile netto, l'ultima riga del conto economico, è il punto di partenza del rendiconto finanziario e confluisce negli utili a nuovo dello stato patrimoniale. Nel rendiconto si sommano i costi non monetari come gli ammortamenti, si rettifica per le variazioni del circolante — collegate ad attività e passività correnti — poi si rilevano il CapEx, collegato alle immobilizzazioni, e i flussi di finanziamento, collegati a debito e PN. La variazione netta della cassa, sommata alla cassa iniziale, dà la cassa finale dello stato patrimoniale. E poiché ogni variazione patrimoniale si riflette nel rendiconto, attività = passività + patrimonio netto."
        }
      },
      {
        type: 'mistakes',
        items: [
          { en: "Saying cash falls when depreciation rises. With a deductible non-cash charge, cash rises by the tax shield.", it: "Dire che la cassa cala quando aumenta l'ammortamento. Con un costo deducibile non monetario la cassa aumenta dello scudo fiscale." },
          { en: "Forgetting tax: stating net income −10 for a €10 pre-tax expense.", it: "Dimenticare le imposte: indicare utile −10 per un costo ante imposte di €10." },
          { en: "Putting the debt-funded purchase through the income statement on day 0. Buying an asset is not an expense.", it: "Far passare dal conto economico l'acquisto finanziato a debito il giorno 0. Acquistare un bene non è un costo." },
          { en: "Only checking one side: always confirm ΔAssets = ΔLiabilities + ΔEquity before finishing your answer.", it: "Controllare un solo lato: verifica sempre ΔAttività = ΔPassività + ΔPN prima di chiudere la risposta." },
          { en: "Adding back debt principal repayments in CFO. Principal is CFF; only interest hits net income.", it: "Rettificare nel CFO i rimborsi di capitale del debito. Il capitale è CFF; solo gli interessi incidono sull'utile." }
        ]
      },
      {
        type: 'summary',
        items: [
          { en: "Method: IS → CFS → BS → check.", it: "Metodo: CE → RF → SP → verifica." },
          { en: "Non-cash deductible expense X: NI −X(1−t), cash +X·t, asset −X, equity −X(1−t).", it: "Costo non monetario deducibile X: utile −X(1−t), cassa +X·t, attività −X, PN −X(1−t)." },
          { en: "Debt-funded CapEx: day 0 CFI −, CFF +, no IS effect; later D&A and interest flow through.", it: "CapEx finanziato a debito: giorno 0 CFI −, CFF +, nessun effetto a CE; poi ammortamento e interessi." },
          { en: "Ending cash on the CFS = cash on the balance sheet.", it: "Cassa finale del RF = cassa dello SP." }
        ]
      }
    ],
    questions: [
      {
        id: 'acc-link-q1',
        kind: 'grid',
        topic: 'three-statement-linkage',
        difficulty: 2,
        objective: { en: "Push a depreciation increase through all three statements.", it: "Far passare un aumento dell'ammortamento nei tre prospetti." },
        prompt: {
          en: "Depreciation increases by €20m. Tax rate 25%, taxes paid in cash. Fill in the change in each line (€m; use negatives for decreases).",
          it: "L'ammortamento aumenta di €20m. Aliquota 25%, imposte pagate in cassa. Inserisci la variazione di ogni voce (€m; negativi per le diminuzioni)."
        },
        columns: [{ en: 'Line', it: 'Voce' }, { en: 'Change (€m)', it: 'Variazione (€m)' }],
        rows: [
          { label: { en: 'Depreciation expense', it: 'Ammortamento' }, cells: ['+20'] },
          { label: { en: 'Pre-tax income', it: 'Utile ante imposte' }, cells: [{ answer: -20, verify: { fn: 'product', args: [-1, 20] } }] },
          { label: { en: 'Tax expense', it: 'Imposte' }, cells: [{ answer: -5, verify: { fn: 'product', args: [-20, 0.25] } }] },
          { label: { en: 'Net income', it: 'Utile netto' }, cells: [{ answer: -15, verify: { fn: 'expenseImpact', args: [20, 0.25, true], pick: 'netIncome' } }] },
          { label: { en: 'Cash from operations', it: 'Flusso operativo' }, cells: [{ answer: 5, verify: { fn: 'expenseImpact', args: [20, 0.25, true], pick: 'cash' } }] },
          { label: { en: 'Net PP&E', it: 'Immobilizzazioni nette' }, cells: [{ answer: -20, verify: { fn: 'product', args: [-1, 20] } }] },
          { label: { en: 'Total assets (cash + PP&E)', it: 'Totale attivo (cassa + immobilizzazioni)' }, cells: [{ answer: -15, verify: { fn: 'sum', args: [5, -20] } }] },
          { label: { en: 'Retained earnings', it: 'Utili a nuovo' }, cells: [{ answer: -15, verify: { fn: 'expenseImpact', args: [20, 0.25, true], pick: 'equity' } }] }
        ],
        explanation: {
          en: "Pre-tax −20; tax −5; net income −15. CFO = −15 + 20 = +5. PP&E −20 and cash +5 → assets −15 = retained earnings −15. Common error: cash −15 (forgetting the add-back) or −20.",
          it: "Ante imposte −20; imposte −5; utile −15. CFO = −15 + 20 = +5. Immobilizzazioni −20 e cassa +5 → attivo −15 = utili a nuovo −15. Errore tipico: cassa −15 (dimenticando la rettifica) o −20."
        }
      },
      {
        id: 'acc-link-q2',
        kind: 'numeric',
        topic: 'three-statement-linkage',
        difficulty: 2,
        objective: { en: "Compute the cash effect of a non-cash write-down.", it: "Calcolare l'effetto di cassa di una svalutazione non monetaria." },
        prompt: {
          en: "A company writes down inventory by €30m. The write-down is tax-deductible; tax rate 25%. By how much does cash change at year end (€m)?",
          it: "Un'azienda svaluta il magazzino di €30m. La svalutazione è deducibile; aliquota 25%. Di quanto varia la cassa a fine anno (€m)?"
        },
        answer: 7.5,
        unit: '€m',
        tolerance: { abs: 0.05 },
        verify: { fn: 'expenseImpact', args: [30, 0.25, true], pick: 'cash' },
        steps: [
          { en: "Net income: −30 × (1 − 25%) = −22.5", it: "Utile: −30 × (1 − 25%) = −22,5" },
          { en: "CFO: −22.5 + 30 (non-cash add-back) = +7.5", it: "CFO: −22,5 + 30 (rettifica non monetaria) = +7,5" },
          { en: "Check: inventory −30, cash +7.5 → assets −22.5 = equity −22.5", it: "Verifica: rimanenze −30, cassa +7,5 → attivo −22,5 = PN −22,5" }
        ],
        explanation: {
          en: "Cash rises by the tax saving, 30 × 25% = 7.5. Answering −22.5 treats the write-down as a cash cost.",
          it: "La cassa aumenta del risparmio d'imposta, 30 × 25% = 7,5. Rispondere −22,5 significa trattare la svalutazione come un esborso."
        }
      },
      {
        id: 'acc-link-q3',
        kind: 'grid',
        topic: 'three-statement-linkage',
        difficulty: 3,
        objective: { en: "Trace a debt-funded CapEx through the statements at purchase and after one year.", it: "Seguire un CapEx finanziato a debito all'acquisto e dopo un anno." },
        prompt: {
          en: "A company borrows €100m at 6% and immediately buys equipment (10-year life, no residual value). Tax 25%; no principal repaid in year 1. For Day 0 show the transaction-day effect; for Year 1 show the year's flows (IS/CFS) and the cumulative balance sheet change versus before the deal (€m).",
          it: "Un'azienda prende a prestito €100m al 6% e acquista subito un impianto (vita utile 10 anni, nessun valore residuo). Aliquota 25%; nessun rimborso nell'anno 1. Per il Giorno 0 indica l'effetto alla data dell'operazione; per l'Anno 1 i flussi dell'anno (CE/RF) e la variazione patrimoniale cumulata rispetto a prima dell'operazione (€m)."
        },
        columns: [{ en: 'Line', it: 'Voce' }, { en: 'Day 0', it: 'Giorno 0' }, { en: 'Year 1', it: 'Anno 1' }],
        rows: [
          { label: { en: 'Depreciation', it: 'Ammortamento' }, cells: ['0', '10'] },
          { label: { en: 'Interest expense', it: 'Oneri finanziari' }, cells: ['0', { answer: 6, verify: { fn: 'product', args: [100, 0.06] } }] },
          { label: { en: 'Net income', it: 'Utile netto' }, cells: ['0', { answer: -12, verify: { fn: 'product', args: [-16, 0.75] } }] },
          { label: { en: 'Cash from operations', it: 'Flusso operativo' }, cells: ['0', { answer: -2, verify: { fn: 'sum', args: [-12, 10] } }] },
          { label: { en: 'Cash from investing', it: 'Flusso di investimento' }, cells: [{ answer: -100 }, '0'] },
          { label: { en: 'Cash from financing', it: 'Flusso di finanziamento' }, cells: [{ answer: 100 }, '0'] },
          { label: { en: 'Cash (BS, cumulative)', it: 'Cassa (SP, cumulata)' }, cells: ['0', { answer: -2, verify: { fn: 'sum', args: [0, -2] } }] },
          { label: { en: 'Net PP&E (BS)', it: 'Immobilizzazioni nette (SP)' }, cells: [{ answer: 100 }, { answer: 90, verify: { fn: 'sum', args: [100, -10] } }] },
          { label: { en: 'Debt (BS)', it: 'Debito (SP)' }, cells: ['100', '100'] },
          { label: { en: 'Retained earnings (BS)', it: 'Utili a nuovo (SP)' }, cells: ['0', { answer: -12, verify: { fn: 'product', args: [-16, 0.75] } }] }
        ],
        explanation: {
          en: "Day 0: CFI −100, CFF +100, PP&E +100, debt +100, no IS impact. Year 1: pre-tax −(10 + 6) = −16 → net income −12; CFO = −12 + 10 = −2. Balance sheet: cash −2 + PP&E 90 = 88 = debt 100 + retained earnings −12. Balanced.",
          it: "Giorno 0: CFI −100, CFF +100, immobilizzazioni +100, debito +100, nessun effetto a CE. Anno 1: ante imposte −(10 + 6) = −16 → utile −12; CFO = −12 + 10 = −2. Stato patrimoniale: cassa −2 + immobilizzazioni 90 = 88 = debito 100 + utili a nuovo −12. Quadra."
        }
      },
      {
        id: 'acc-link-q4',
        kind: 'mcq',
        topic: 'three-statement-linkage',
        difficulty: 3,
        objective: { en: "Trace a credit sale through the statements.", it: "Seguire una vendita a credito nei tre prospetti." },
        prompt: {
          en: "A services firm bills €10m of revenue on credit (no associated costs); the customer has not yet paid. Tax 25%, paid in cash this period. What is the effect on cash and total assets?",
          it: "Una società di servizi fattura €10m di ricavi a credito (senza costi associati); il cliente non ha ancora pagato. Aliquota 25%, imposte pagate nel periodo. Qual è l'effetto su cassa e totale attivo?"
        },
        choices: [
          { en: "Cash +7.5; total assets +7.5", it: "Cassa +7,5; totale attivo +7,5" },
          { en: "Cash 0; total assets +10", it: "Cassa 0; totale attivo +10" },
          { en: "Cash −2.5; total assets +7.5", it: "Cassa −2,5; totale attivo +7,5" },
          { en: "Cash +10; total assets +10", it: "Cassa +10; totale attivo +10" }
        ],
        correct: 2,
        explanation: {
          en: "Net income +7.5. CFO = 7.5 − 10 (increase in receivables) = −2.5: tax is paid on revenue not yet collected. Assets: receivables +10, cash −2.5 → +7.5 = retained earnings +7.5. “Cash 0” ignores the tax payment; “cash +7.5” treats the sale as collected.",
          it: "Utile +7,5. CFO = 7,5 − 10 (aumento dei crediti) = −2,5: si pagano imposte su ricavi non ancora incassati. Attivo: crediti +10, cassa −2,5 → +7,5 = utili a nuovo +7,5. “Cassa 0” ignora il pagamento delle imposte; “cassa +7,5” tratta la vendita come incassata."
        }
      },
      {
        id: 'acc-link-q5',
        kind: 'numeric',
        topic: 'three-statement-linkage',
        difficulty: 3,
        objective: { en: "Analyse an accrued (unpaid) expense across the statements.", it: "Analizzare un costo maturato non pagato nei tre prospetti." },
        prompt: {
          en: "At year end a company accrues a €40m employee bonus that will be paid next year (deductible this year; tax 25%, paid in cash). By how much does this year's cash change (€m)?",
          it: "A fine anno un'azienda accantona un bonus ai dipendenti di €40m che sarà pagato l'anno prossimo (deducibile quest'anno; aliquota 25%, imposte pagate). Di quanto varia la cassa di quest'anno (€m)?"
        },
        answer: 10,
        unit: '€m',
        verify: { fn: 'expenseImpact', args: [40, 0.25, true], pick: 'cash' },
        steps: [
          { en: "Net income: −40 × 0.75 = −30", it: "Utile: −40 × 0,75 = −30" },
          { en: "CFO: −30 + 40 (increase in accrued liabilities) = +10", it: "CFO: −30 + 40 (aumento dei debiti per costi maturati) = +10" },
          { en: "BS: cash +10 = accrued liability +40 + retained earnings −30", it: "SP: cassa +10 = debito maturato +40 + utili a nuovo −30" }
        ],
        explanation: {
          en: "An expense not yet paid behaves like a non-cash charge this year: cash rises by the tax saving, 40 × 25% = 10. Next year, paying the bonus reduces cash by 40.",
          it: "Un costo non ancora pagato si comporta quest'anno come un costo non monetario: la cassa sale del risparmio d'imposta, 40 × 25% = 10. L'anno prossimo il pagamento del bonus ridurrà la cassa di 40."
        }
      },
      {
        id: 'acc-link-q6',
        kind: 'order',
        topic: 'three-statement-linkage',
        difficulty: 1,
        objective: { en: "Sequence the method for answering a three-statement drill.", it: "Ordinare il metodo per rispondere a un esercizio sui tre prospetti." },
        prompt: { en: "Put the steps for answering “walk me through the three statements” in order.", it: "Metti in ordine i passaggi per rispondere a “mi descriva l'effetto sui tre prospetti”." },
        items: [
          { en: "Income statement: pre-tax effect, tax, net income", it: "Conto economico: effetto ante imposte, imposte, utile netto" },
          { en: "Cash flow statement: start from net income, adjust non-cash and working capital items, add CFI/CFF", it: "Rendiconto: dall'utile, rettifiche non monetarie e circolante, poi CFI/CFF" },
          { en: "Balance sheet: cash from the CFS, other assets/liabilities, retained earnings", it: "Stato patrimoniale: cassa dal rendiconto, altre attività/passività, utili a nuovo" },
          { en: "Check: ΔAssets = ΔLiabilities + ΔEquity", it: "Verifica: ΔAttività = ΔPassività + ΔPN" }
        ],
        explanation: {
          en: "Net income must exist before the CFS can start; the CFS produces the cash change used on the balance sheet; the check comes last.",
          it: "L'utile deve esistere prima di iniziare il rendiconto; il rendiconto produce la variazione di cassa usata nello stato patrimoniale; la verifica viene per ultima."
        }
      }
    ],
    flashcards: [
      { id: 'fc-acc-link-1', topic: 'three-statement-linkage', front: { en: "Depreciation +€10, tax 25%: effect on NI, cash, PP&E, equity?", it: "Ammortamento +€10, aliquota 25%: effetto su utile, cassa, immobilizzazioni, PN?" }, back: { en: "NI −7.5; cash +2.5; PP&E −10; equity −7.5.", it: "Utile −7,5; cassa +2,5; immobilizzazioni −10; PN −7,5." } },
      { id: 'fc-acc-link-2', topic: 'three-statement-linkage', front: { en: "Buy PP&E with debt — day 0 effect?", it: "Acquisto di impianti a debito — effetto al giorno 0?" }, back: { en: "No IS effect; CFI −X, CFF +X (net cash 0); PP&E +X, debt +X.", it: "Nessun effetto a CE; CFI −X, CFF +X (cassa netta 0); immobilizzazioni +X, debito +X." } },
      { id: 'fc-acc-link-3', topic: 'three-statement-linkage', front: { en: "Cash effect of a non-cash deductible expense X?", it: "Effetto di cassa di un costo non monetario deducibile X?" }, back: { en: "+X × t (the tax shield).", it: "+X × t (lo scudo fiscale)." } },
      { id: 'fc-acc-link-4', topic: 'three-statement-linkage', front: { en: "Revenue of 10 on credit, tax 25% paid: cash effect?", it: "Ricavi di 10 a credito, imposte 25% pagate: effetto di cassa?" }, back: { en: "−2.5 (NI +7.5 less AR increase 10).", it: "−2,5 (utile +7,5 meno aumento crediti 10)." } },
      { id: 'fc-acc-link-5', topic: 'three-statement-linkage', front: { en: "Two links between the CFS and the balance sheet?", it: "Due collegamenti tra rendiconto e stato patrimoniale?" }, back: { en: "Ending cash = BS cash; each CFS line explains a change in a BS line (e.g. CapEx → PP&E, borrowing → debt).", it: "Cassa finale = cassa SP; ogni riga del rendiconto spiega la variazione di una voce SP (es. CapEx → immobilizzazioni, nuovo debito → debiti)." } }
    ]
  },
  {
    id: 'acc-forecasting',
    academyId: 'accounting',
    moduleId: 'A2',
    mode: 'deep',
    minutes: 18,
    difficulty: 3,
    reviewed: '2026-10',
    objective: {
      en: "Forecast an integrated income statement, balance sheet and cash flow statement from operating drivers, and check that the model balances.",
      it: "Prevedere conto economico, stato patrimoniale e rendiconto finanziario integrati partendo dai driver operativi, verificando che il modello quadri."
    },
    screens: [
      {
        type: 'intuition',
        title: { en: "Forecast the drivers, not the lines", it: "Prevedere i driver, non le singole voci" },
        body: {
          en: "Nobody forecasts “receivables = 132” out of thin air. You forecast **why** receivables move: sales grow 10% and customers pay in 60 days. Every line is tied to a **driver** — a growth rate, a margin, a percentage of revenue or a number of days.\n\nGood drivers make the model explainable (“EBITDA rises because margin expands 100bp”) and easy to flex for scenarios. Bad models hard-code numbers nobody can defend.",
          it: "Nessuno prevede “crediti = 132” dal nulla. Si prevede **perché** i crediti si muovono: le vendite crescono del 10% e i clienti pagano a 60 giorni. Ogni voce è legata a un **driver** — un tasso di crescita, un margine, una percentuale dei ricavi o un numero di giorni.\n\nDriver ben scelti rendono il modello spiegabile (“l'EBITDA sale perché il margine si espande di 100bp”) e facile da modificare per gli scenari. I modelli scadenti contengono numeri inseriti a mano che nessuno sa difendere."
        }
      },
      {
        type: 'technical',
        title: { en: "Typical drivers", it: "I driver tipici" },
        body: {
          en: "Forecast each line from a driver backed by history, management guidance or industry research:",
          it: "Ogni voce si prevede da un driver supportato da dati storici, guidance del management o ricerche di settore:"
        },
        table: {
          headers: [{ en: 'Line', it: 'Voce' }, { en: 'Common driver', it: 'Driver tipico' }],
          rows: [
            [{ en: 'Revenue', it: 'Ricavi' }, { en: 'Growth %, or volume × price, or units × ARPU', it: 'Crescita %, oppure volumi × prezzo, o clienti × ARPU' }],
            [{ en: 'COGS, SG&A / EBITDA', it: 'Costo del venduto, costi generali / EBITDA' }, { en: '% of revenue (margin)', it: '% dei ricavi (margine)' }],
            [{ en: 'CapEx', it: 'CapEx' }, { en: '% of revenue, or maintenance + growth plan', it: '% dei ricavi, o piano di mantenimento + sviluppo' }],
            [{ en: 'D&A', it: 'Ammortamenti' }, { en: '% of revenue, % of opening PP&E, or a depreciation waterfall', it: '% dei ricavi, % delle immobilizzazioni iniziali, o piano di ammortamento' }],
            [{ en: 'Receivables / inventory / payables', it: 'Crediti / rimanenze / debiti commerciali' }, { en: 'DSO / DIO / DPO, or % of revenue', it: 'DSO / DIO / DPO, o % dei ricavi' }],
            [{ en: 'Interest', it: 'Interessi' }, { en: 'Rate × opening or average debt', it: 'Tasso × debito iniziale o medio' }],
            [{ en: 'Tax', it: 'Imposte' }, { en: 'Effective rate × EBT', it: 'Aliquota effettiva × EBT' }],
            [{ en: 'Dividends', it: 'Dividendi' }, { en: 'Payout ratio × net income', it: 'Payout × utile netto' }]
          ]
        }
      },
      {
        type: 'technical',
        title: { en: "The order of the build", it: "L'ordine di costruzione" },
        body: {
          en: "1. **Assumptions** sheet (drivers by year, by scenario).\n2. **Income statement** down to EBIT.\n3. **Supporting schedules**: working capital, PP&E (CapEx and D&A), debt (interest), equity (dividends, buybacks).\n4. **Finish the income statement**: interest, tax, net income.\n5. **Cash flow statement**: CFO from net income, D&A and ΔNWC; CFI from CapEx; CFF from debt and dividends.\n6. **Balance sheet**: cash from the CFS; every other line from its schedule.\n7. **Check**: assets − (liabilities + equity) = 0 every year.\n\nIf interest is computed on **average** cash or debt, the model becomes **circular** (interest → net income → cash → interest); analysts enable iterative calculation with a circuit-breaker switch, or use opening balances.",
          it: "1. Foglio **ipotesi** (driver per anno e per scenario).\n2. **Conto economico** fino all'EBIT.\n3. **Prospetti di supporto**: circolante, immobilizzazioni (CapEx e ammortamenti), debito (interessi), PN (dividendi, riacquisti).\n4. **Completare il conto economico**: interessi, imposte, utile netto.\n5. **Rendiconto**: CFO da utile, ammortamenti e ΔCCN; CFI dal CapEx; CFF da debito e dividendi.\n6. **Stato patrimoniale**: cassa dal rendiconto; ogni altra voce dal suo prospetto.\n7. **Verifica**: attività − (passività + PN) = 0 in ogni anno.\n\nSe gli interessi si calcolano sul debito o sulla cassa **medi**, il modello diventa **circolare** (interessi → utile → cassa → interessi): gli analisti abilitano il calcolo iterativo con un interruttore di sicurezza (circuit breaker), oppure usano i saldi iniziali."
        }
      },
      {
        type: 'formula',
        formulas: [
          { name: { en: "Revenue", it: "Ricavi" }, expr: 'Revenue(t) = Revenue(t−1) × (1 + g)' },
          { name: { en: "Working capital line from days", it: "Voce di circolante dai giorni" }, expr: 'Receivables(t) = DSO × Revenue(t) ÷ 365' },
          { name: { en: "PP&E schedule", it: "Prospetto delle immobilizzazioni" }, expr: 'PP&E(t) = PP&E(t−1) + CapEx(t) − D&A(t)' },
          { name: { en: "Retained earnings", it: "Utili a nuovo" }, expr: 'RE(t) = RE(t−1) + Net income(t) − Dividends(t)' },
          { name: { en: "Cash", it: "Cassa" }, expr: 'Cash(t) = Cash(t−1) + CFO(t) + CFI(t) + CFF(t)' },
          {
            name: { en: "Unlevered free cash flow (bridge to DCF)", it: "Unlevered free cash flow (ponte verso il DCF)" },
            expr: 'UFCF = EBIT × (1 − t) + D&A − CapEx − ΔNWC'
          }
        ]
      },
      {
        type: 'example',
        title: { en: "Theta S.p.A. — Year 1 forecast (€m)", it: "Theta S.p.A. — previsione Anno 1 (€m)" },
        body: {
          en: "Drivers: revenue growth **10%**, EBITDA margin **20%**, D&A **4%** of revenue, interest **5%** on opening debt of 400, tax **25%**, CapEx **5%** of revenue, NWC **15%** of revenue, payout **40%**.",
          it: "Driver: crescita ricavi **10%**, margine EBITDA **20%**, ammortamenti **4%** dei ricavi, interessi **5%** sul debito iniziale di 400, aliquota **25%**, CapEx **5%** dei ricavi, CCN **15%** dei ricavi, payout **40%**."
        },
        table: {
          headers: [{ en: 'Line', it: 'Voce' }, { en: 'Year 0A', it: 'Anno 0A' }, { en: 'Year 1E', it: 'Anno 1E' }, { en: 'Driver', it: 'Driver' }],
          rows: [
            [{ en: 'Revenue', it: 'Ricavi' }, '1,000', '1,100', '+10%'],
            ['EBITDA', '190', '220', '20%'],
            [{ en: 'D&A', it: 'Ammortamenti' }, '(40)', '(44)', '4%'],
            ['EBIT', '150', '176', ''],
            [{ en: 'Interest', it: 'Interessi' }, '(20)', '(20)', '5% × 400'],
            ['EBT', '130', '156', ''],
            [{ en: 'Tax', it: 'Imposte' }, '(32.5)', '(39)', '25%'],
            [{ en: 'Net income', it: 'Utile netto' }, '97.5', '117', ''],
            [{ en: 'Operating NWC', it: 'CCN operativo' }, '150', '165', '15%'],
            ['CapEx', '', '(55)', '5%']
          ],
          totalRows: [3, 7]
        }
      },
      { type: 'exercise', questionId: 'acc-fc-q1' },
      {
        type: 'example',
        title: { en: "Closing the loop: CFS and balance sheet", it: "Chiudere il cerchio: rendiconto e stato patrimoniale" },
        body: {
          en: "Opening balances: cash 50, PP&E 500, NWC 150, debt 400, equity 300 (all retained earnings for simplicity) → assets 700 = 400 + 300.\n\n- CFO = 117 + 44 − 15 = **146**; CFI = −55; CFF = dividends −46.8.\n- Cash = 50 + 146 − 55 − 46.8 = **94.2**.\n- PP&E = 500 + 55 − 44 = **511**; NWC = **165**.\n- Equity = 300 + 117 − 46.8 = **370.2**; debt 400.\n\nAssets 94.2 + 511 + 165 = **770.2** = debt 400 + equity 370.2. ✔",
          it: "Saldi iniziali: cassa 50, immobilizzazioni 500, CCN 150, debito 400, PN 300 (per semplicità tutto utili a nuovo) → attivo 700 = 400 + 300.\n\n- CFO = 117 + 44 − 15 = **146**; CFI = −55; CFF = dividendi −46,8.\n- Cassa = 50 + 146 − 55 − 46,8 = **94,2**.\n- Immobilizzazioni = 500 + 55 − 44 = **511**; CCN = **165**.\n- PN = 300 + 117 − 46,8 = **370,2**; debito 400.\n\nAttivo 94,2 + 511 + 165 = **770,2** = debito 400 + PN 370,2. ✔"
        }
      },
      { type: 'exercise', questionId: 'acc-fc-q2' },
      {
        type: 'realworld',
        body: {
          en: "Analysts build these models for pitches, M&A and financing. Typical practice:\n\n- **Management case** (from the company's business plan) vs **bank/sponsor case** (haircut growth and margins) vs **downside case** for lenders.\n- **Sanity checks**: implied margins and growth vs history and peers; CapEx/D&A; NWC days; cash never negative without a revolver draw.\n- A **revolver** line is often used to absorb cash shortfalls automatically — the minimum cash balance is a key assumption in LBO models.",
          it: "Gli analisti costruiscono questi modelli per pitch, M&A e finanziamenti. Prassi tipica:\n\n- **Management case** (dal business plan della società) vs **bank/sponsor case** (crescita e margini ridotti) vs **downside case** per i finanziatori.\n- **Controlli di coerenza**: margini e crescita impliciti rispetto a storico e peer; CapEx/ammortamenti; giorni di circolante; cassa mai negativa senza utilizzo della linea revolving.\n- Una **linea revolving** assorbe spesso in automatico i fabbisogni di cassa — la cassa minima è un'ipotesi chiave nei modelli LBO."
        }
      },
      { type: 'exercise', questionId: 'acc-fc-q3' },
      { type: 'exercise', questionId: 'acc-fc-q4' },
      {
        type: 'interview',
        question: { en: "Your three-statement model doesn't balance. How do you find the error?", it: "Il suo modello a tre prospetti non quadra. Come trova l'errore?" },
        answer: {
          en: "First, find the first year where the check isn't zero — the error starts there. Then I look at the size of the gap: if it equals a specific line, or twice a line, that's usually a sign flipped or a line double-counted. I confirm that every balance sheet line other than cash has a matching flow on the cash flow statement, that net income and D&A link correctly, that working capital signs are right, and that cash on the balance sheet comes only from the cash flow statement. Finally, if there's circularity, I break the circuit to check it isn't just an iteration issue.",
          it: "Prima trovo il primo anno in cui la verifica non è zero: l'errore nasce lì. Poi guardo la dimensione della differenza: se è pari a una voce precisa, o al doppio di una voce, di solito c'è un segno invertito o una voce contata due volte. Verifico che ogni voce patrimoniale diversa dalla cassa abbia un flusso corrispondente nel rendiconto, che utile e ammortamenti siano collegati correttamente, che i segni del circolante siano giusti e che la cassa dello stato patrimoniale derivi solo dal rendiconto. Infine, se c'è circolarità, spezzo il circuito per escludere un problema di iterazione."
        }
      },
      {
        type: 'mistakes',
        items: [
          { en: "Forecasting cash as a plug or a growth rate. Cash must come from the cash flow statement.", it: "Prevedere la cassa come voce di quadratura o con un tasso di crescita. La cassa deve derivare dal rendiconto." },
          { en: "Hard-coding numbers in the forecast instead of linking them to assumptions.", it: "Inserire numeri fissi nella previsione invece di collegarli alle ipotesi." },
          { en: "Letting CapEx fall far below D&A for years while growing revenue — an unsustainable, value-inflating assumption.", it: "Lasciare il CapEx molto sotto gli ammortamenti per anni con ricavi in crescita — un'ipotesi insostenibile che gonfia il valore." },
          { en: "Applying working capital ratios to the wrong base (e.g. DIO on revenue).", it: "Applicare gli indici di circolante alla base sbagliata (es. DIO sui ricavi)." }
        ]
      },
      {
        type: 'summary',
        items: [
          { en: "Every forecast line is driven by an assumption: growth, margin, % of revenue, days, rate, payout.", it: "Ogni voce prevista dipende da un'ipotesi: crescita, margine, % dei ricavi, giorni, tasso, payout." },
          { en: "Build order: assumptions → IS → schedules → CFS → BS → check.", it: "Ordine: ipotesi → CE → prospetti di supporto → RF → SP → verifica." },
          { en: "Cash comes from the CFS; retained earnings from NI − dividends; PP&E from CapEx − D&A.", it: "La cassa dal RF; gli utili a nuovo da utile − dividendi; le immobilizzazioni da CapEx − ammortamenti." },
          { en: "Interest on average balances creates circularity — use a circuit breaker.", it: "Interessi su saldi medi creano circolarità — usa un circuit breaker." }
        ]
      }
    ],
    questions: [
      {
        id: 'acc-fc-q1',
        kind: 'grid',
        topic: 'forecasting',
        difficulty: 2,
        objective: { en: "Forecast an income statement from drivers.", it: "Prevedere un conto economico dai driver." },
        prompt: {
          en: "Forecast Theta's Year 1 income statement (€m). Drivers: revenue +10%; EBITDA margin 20%; D&A 4% of revenue; interest 5% on opening debt of 400; tax 25%.",
          it: "Prevedi il conto economico dell'Anno 1 di Theta (€m). Driver: ricavi +10%; margine EBITDA 20%; ammortamenti 4% dei ricavi; interessi 5% sul debito iniziale di 400; aliquota 25%."
        },
        columns: [{ en: 'Line', it: 'Voce' }, { en: 'Year 0A', it: 'Anno 0A' }, { en: 'Year 1E', it: 'Anno 1E' }],
        rows: [
          { label: { en: 'Revenue', it: 'Ricavi' }, cells: [1000, { answer: 1100, verify: { fn: 'product', args: [1000, 1.1] } }] },
          { label: { en: 'EBITDA', it: 'EBITDA' }, cells: [190, { answer: 220, verify: { fn: 'product', args: [1100, 0.2] } }] },
          { label: { en: 'D&A', it: 'Ammortamenti' }, cells: [40, { answer: 44, verify: { fn: 'product', args: [1100, 0.04] } }] },
          { label: { en: 'EBIT', it: 'EBIT' }, cells: [150, { answer: 176, verify: { fn: 'diff', args: [220, 44] } }] },
          { label: { en: 'Interest expense', it: 'Oneri finanziari' }, cells: [20, { answer: 20, verify: { fn: 'product', args: [400, 0.05] } }] },
          { label: { en: 'EBT', it: 'Utile ante imposte' }, cells: [130, { answer: 156, verify: { fn: 'diff', args: [176, 20] } }] },
          { label: { en: 'Tax', it: 'Imposte' }, cells: [32.5, { answer: 39, verify: { fn: 'product', args: [156, 0.25] } }] },
          { label: { en: 'Net income', it: 'Utile netto' }, cells: [97.5, { answer: 117, verify: { fn: 'product', args: [156, 0.75] } }] }
        ],
        explanation: {
          en: "Revenue 1,000 × 1.1 = 1,100; EBITDA 20% = 220; D&A 4% = 44; EBIT 176; interest 5% × 400 = 20; EBT 156; tax 39; net income 117. Note EBITDA grows faster than revenue (+15.8%) because the margin expands from 19% to 20%.",
          it: "Ricavi 1.000 × 1,1 = 1.100; EBITDA 20% = 220; ammortamenti 4% = 44; EBIT 176; interessi 5% × 400 = 20; EBT 156; imposte 39; utile 117. L'EBITDA cresce più dei ricavi (+15,8%) perché il margine sale dal 19% al 20%."
        }
      },
      {
        id: 'acc-fc-q2',
        kind: 'grid',
        topic: 'forecasting',
        difficulty: 3,
        objective: { en: "Complete the cash flow statement and balance sheet links in a forecast.", it: "Completare i collegamenti di rendiconto e stato patrimoniale in una previsione." },
        prompt: {
          en: "Theta Year 1: net income 117, D&A 44, revenue 1,100. CapEx 5% of revenue; NWC 15% of revenue (Year 0 NWC = 150); payout 40%; no debt movements. Opening cash 50, PP&E 500, retained earnings 300. Fill in the cells (€m; outflows negative).",
          it: "Theta Anno 1: utile 117, ammortamenti 44, ricavi 1.100. CapEx 5% dei ricavi; CCN 15% dei ricavi (CCN Anno 0 = 150); payout 40%; nessun movimento del debito. Cassa iniziale 50, immobilizzazioni 500, utili a nuovo 300. Completa le celle (€m; uscite negative)."
        },
        columns: [{ en: 'Line', it: 'Voce' }, { en: 'Year 1E', it: 'Anno 1E' }],
        rows: [
          { label: { en: 'Increase in NWC', it: 'Aumento del CCN' }, cells: [{ answer: 15, verify: { fn: 'diff', args: [165, 150] } }] },
          { label: { en: 'Cash from operations', it: 'Flusso operativo' }, cells: [{ answer: 146, verify: { fn: 'sum', args: [117, 44, -15] } }] },
          { label: { en: 'CapEx', it: 'CapEx' }, cells: [{ answer: -55, verify: { fn: 'product', args: [-1100, 0.05] } }] },
          { label: { en: 'Dividends paid', it: 'Dividendi pagati' }, cells: [{ answer: -46.8, tolerance: { abs: 0.05 }, verify: { fn: 'product', args: [-117, 0.4] } }] },
          { label: { en: 'Closing cash', it: 'Cassa finale' }, cells: [{ answer: 94.2, tolerance: { abs: 0.05 }, verify: { fn: 'sum', args: [50, 146, -55, -46.8] } }] },
          { label: { en: 'Closing PP&E', it: 'Immobilizzazioni finali' }, cells: [{ answer: 511, verify: { fn: 'sum', args: [500, 55, -44] } }] },
          { label: { en: 'Closing retained earnings', it: 'Utili a nuovo finali' }, cells: [{ answer: 370.2, tolerance: { abs: 0.05 }, verify: { fn: 'sum', args: [300, 117, -46.8] } }] }
        ],
        explanation: {
          en: "NWC = 15% × 1,100 = 165, up 15 → CFO = 117 + 44 − 15 = 146. CapEx = −55; dividends = −40% × 117 = −46.8. Cash = 50 + 146 − 55 − 46.8 = 94.2; PP&E = 500 + 55 − 44 = 511; RE = 300 + 117 − 46.8 = 370.2. Check: assets rise by 44.2 (cash) + 11 (PP&E) + 15 (NWC) = 70.2 = the increase in retained earnings.",
          it: "CCN = 15% × 1.100 = 165, +15 → CFO = 117 + 44 − 15 = 146. CapEx = −55; dividendi = −40% × 117 = −46,8. Cassa = 50 + 146 − 55 − 46,8 = 94,2; immobilizzazioni = 500 + 55 − 44 = 511; utili a nuovo = 300 + 117 − 46,8 = 370,2. Verifica: l'attivo sale di 44,2 (cassa) + 11 (immobilizzazioni) + 15 (CCN) = 70,2 = aumento degli utili a nuovo."
        }
      },
      {
        id: 'acc-fc-q3',
        kind: 'numeric',
        topic: 'forecasting',
        difficulty: 2,
        objective: { en: "Derive unlevered free cash flow from a forecast.", it: "Ricavare l'unlevered free cash flow da una previsione." },
        prompt: {
          en: "Theta Year 1: EBIT 176, tax rate 25%, D&A 44, CapEx 55, increase in NWC 15. What is unlevered free cash flow (€m)?",
          it: "Theta Anno 1: EBIT 176, aliquota 25%, ammortamenti 44, CapEx 55, aumento del CCN 15. Qual è l'unlevered free cash flow (€m)?"
        },
        answer: 106,
        unit: '€m',
        verify: { fn: 'unleveredFCF', args: [176, 0.25, 44, 55, 15] },
        explanation: {
          en: "176 × 0.75 = 132; + 44 − 55 − 15 = 106. Starting from net income (117) would include the after-tax interest cost, giving a levered measure instead.",
          it: "176 × 0,75 = 132; + 44 − 55 − 15 = 106. Partire dall'utile netto (117) includerebbe gli interessi al netto delle imposte, dando una misura levered."
        }
      },
      {
        id: 'acc-fc-q4',
        kind: 'numeric',
        topic: 'forecasting',
        difficulty: 2,
        objective: { en: "Compute interest on average debt and recognise circularity.", it: "Calcolare gli interessi sul debito medio e riconoscere la circolarità." },
        prompt: {
          en: "Debt is €400m at the start of the year and €300m at the end after a repayment funded by operating cash. Interest rate 6% on average debt. What is interest expense (€m)?",
          it: "Il debito è €400m a inizio anno e €300m a fine anno dopo un rimborso finanziato con la cassa operativa. Tasso 6% sul debito medio. Quali sono gli oneri finanziari (€m)?"
        },
        answer: 21,
        unit: '€m',
        verify: { fn: 'product', args: [350, 0.06] },
        explanation: {
          en: "Average debt = (400 + 300) / 2 = 350; × 6% = 21. Using opening debt gives 24, closing 18. Because the repayment depends on cash, which depends on net income, which depends on interest, this creates a circular reference.",
          it: "Debito medio = (400 + 300) / 2 = 350; × 6% = 21. Con il debito iniziale si ottiene 24, con quello finale 18. Poiché il rimborso dipende dalla cassa, che dipende dall'utile, che dipende dagli interessi, si crea un riferimento circolare."
        }
      },
      {
        id: 'acc-fc-q5',
        kind: 'mcq',
        topic: 'forecasting',
        difficulty: 2,
        objective: { en: "Choose an appropriate driver for a working capital line.", it: "Scegliere il driver corretto per una voce di circolante." },
        prompt: { en: "Which is the most appropriate way to forecast inventory?", it: "Qual è il modo più appropriato per prevedere le rimanenze?" },
        choices: [
          { en: "Grow it at the same rate as net income", it: "Farle crescere allo stesso tasso dell'utile netto" },
          { en: "Hold it flat at the last actual balance", it: "Mantenerle costanti all'ultimo saldo consuntivo" },
          { en: "Use it as the plug that makes the balance sheet balance", it: "Usarle come voce di quadratura dello stato patrimoniale" },
          { en: "DIO × COGS ÷ 365, with DIO based on history and guidance", it: "DIO × costo del venduto ÷ 365, con DIO basato su storico e guidance" }
        ],
        correct: 3,
        explanation: {
          en: "Inventory scales with the cost of goods it holds, so days of inventory on COGS is the natural driver. Net income includes unrelated items like interest and tax; holding it flat ignores growth; plugging hides errors.",
          it: "Le rimanenze variano con il costo dei beni che contengono, quindi i giorni di magazzino sul costo del venduto sono il driver naturale. L'utile include voci non correlate come interessi e imposte; tenerle costanti ignora la crescita; usarle come quadratura nasconde gli errori."
        }
      }
    ],
    flashcards: [
      { id: 'fc-acc-fc-1', topic: 'forecasting', front: { en: "Order of building a three-statement model?", it: "Ordine di costruzione di un modello a tre prospetti?" }, back: { en: "Assumptions → IS to EBIT → schedules (NWC, PP&E, debt, equity) → finish IS → CFS → BS → balance check.", it: "Ipotesi → CE fino all'EBIT → prospetti di supporto (CCN, immobilizzazioni, debito, PN) → completare CE → RF → SP → verifica." } },
      { id: 'fc-acc-fc-2', topic: 'forecasting', front: { en: "How is forecast cash determined?", it: "Come si determina la cassa prevista?" }, back: { en: "Opening cash + CFO + CFI + CFF from the forecast cash flow statement — never a plug.", it: "Cassa iniziale + CFO + CFI + CFF dal rendiconto previsionale — mai una voce di quadratura." } },
      { id: 'fc-acc-fc-3', topic: 'forecasting', front: { en: "Why does interest on average debt create circularity?", it: "Perché gli interessi sul debito medio creano circolarità?" }, back: { en: "Interest → net income → cash available → debt repayment → average debt → interest.", it: "Interessi → utile → cassa disponibile → rimborso del debito → debito medio → interessi." } },
      { id: 'fc-acc-fc-4', topic: 'forecasting', front: { en: "Receivables forecast from DSO?", it: "Previsione dei crediti dal DSO?" }, back: { en: "Receivables = DSO × Revenue ÷ 365.", it: "Crediti = DSO × Ricavi ÷ 365." } },
      { id: 'fc-acc-fc-5', topic: 'forecasting', front: { en: "Management case vs bank case?", it: "Management case vs bank case?" }, back: { en: "Management case = company's business plan; bank/sponsor case = more conservative assumptions used for financing or valuation.", it: "Management case = business plan della società; bank/sponsor case = ipotesi più prudenti usate per finanziamento o valutazione." } }
    ]
  }
];
