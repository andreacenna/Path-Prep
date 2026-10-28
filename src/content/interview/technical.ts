import type { InterviewQuestion, L, RubricPoint } from '../types';

/**
 * Technical interview bank — IB analyst level.
 * Reference answers are written the way a strong candidate would say them out loud.
 * Hypothetical companies only; tax rate assumptions are stated in each prompt.
 */

const t = (en: string, it: string): L => ({ en, it });
const ess = (en: string, it: string): RubricPoint => ({ text: { en, it }, essential: true });
const opt = (en: string, it: string): RubricPoint => ({ text: { en, it }, essential: false });

/* ------------------------------------------------------------------ */
/* Accounting                                                          */
/* ------------------------------------------------------------------ */

const accounting: InterviewQuestion[] = [
  {
    id: 'iq-acc-three-statements',
    type: 'technical',
    topic: 'accounting',
    difficulty: 1,
    seconds: 90,
    prompt: t("Walk me through the three financial statements.", "Mi illustri i tre prospetti di bilancio."),
    reference: t(
      "The three statements are the **income statement**, the **balance sheet** and the **cash flow statement**.\n\n- The income statement shows revenue and expenses over a period, ending in net income.\n- The balance sheet is a snapshot at a point in time: assets = liabilities + equity.\n- The cash flow statement starts from net income, adjusts for non-cash items and working capital (operating), then adds investing and financing flows to get the net change in cash.\n\n**Links:** net income flows into retained earnings and is the first line of the cash flow statement; the ending cash on the cash flow statement becomes the cash balance on the balance sheet; D&A, capex and debt movements tie PP&E and debt balances together.",
      "I tre prospetti sono **conto economico**, **stato patrimoniale** e **rendiconto finanziario**.\n\n- Il conto economico mostra ricavi e costi di un periodo e arriva all’utile netto.\n- Lo stato patrimoniale è una fotografia a una data: attività = passività + patrimonio netto.\n- Il rendiconto finanziario parte dall’utile netto, rettifica le poste non monetarie e il capitale circolante (gestione operativa), poi aggiunge i flussi di investimento e di finanziamento per arrivare alla variazione di cassa.\n\n**Collegamenti:** l’utile netto confluisce negli utili a nuovo ed è la prima riga del rendiconto; la cassa finale del rendiconto diventa la cassa dello stato patrimoniale; ammortamenti, capex e movimenti di debito collegano i saldi di immobilizzazioni e debito."
    ),
    rubric: [
      ess("Defines each statement correctly (period vs point in time).", "Definisce correttamente ciascun prospetto (periodo vs data puntuale)."),
      ess("Explains that net income links the IS to retained earnings and to the top of the CFS.", "Spiega che l’utile netto collega il CE agli utili a nuovo e alla prima riga del rendiconto."),
      ess("States that ending cash on the CFS equals cash on the balance sheet.", "Indica che la cassa finale del rendiconto coincide con la cassa dello SP."),
      opt("Names the three CFS sections (operating, investing, financing).", "Nomina le tre sezioni del rendiconto (operativa, investimento, finanziamento)."),
      opt("Mentions other links (D&A/capex to PP&E, debt flows to debt balance).", "Cita altri collegamenti (ammortamenti/capex con le immobilizzazioni, flussi di debito con il saldo del debito).")
    ],
    followUps: [
      t("If you could only look at one statement, which would you choose and why?", "Se potesse guardare un solo prospetto, quale sceglierebbe e perché?"),
      t("How does a company with positive net income run out of cash?", "Come può un’azienda con utile positivo restare senza cassa?")
    ]
  },
  {
    id: 'iq-acc-depreciation-10',
    type: 'technical',
    topic: 'accounting',
    difficulty: 1,
    seconds: 90,
    prompt: t(
      "Depreciation goes up by $10. Walk me through the three statements, assuming a 25% tax rate. By how much does cash change?",
      "L’ammortamento aumenta di $10. Mi illustri l’effetto sui tre prospetti, con aliquota fiscale del 25%. Di quanto varia la cassa?"
    ),
    reference: t(
      "**Income statement:** operating income falls by $10; with a 25% tax rate, taxes fall by $2.50, so net income falls by **$7.50**.\n\n**Cash flow statement:** net income is down $7.50, but depreciation is non-cash, so we add back $10. Cash from operations is **up $2.50** — the tax saving.\n\n**Balance sheet:** cash +$2.50, PP&E −$10, so total assets −$7.50. On the other side, retained earnings −$7.50 because of lower net income. Both sides fall by $7.50, so it balances.",
      "**Conto economico:** il risultato operativo scende di $10; con aliquota al 25% le imposte calano di $2,50, quindi l’utile netto scende di **$7,50**.\n\n**Rendiconto finanziario:** l’utile netto è −$7,50, ma l’ammortamento è non monetario e si somma di nuovo: +$10. Il flusso operativo è **+$2,50** — il risparmio d’imposta.\n\n**Stato patrimoniale:** cassa +$2,50, immobilizzazioni −$10, totale attivo −$7,50. Dall’altro lato, utili a nuovo −$7,50 per il minor utile. Entrambi i lati scendono di $7,50: quadra."
    ),
    rubric: [
      ess("Net income falls by $7.50 (after-tax effect).", "L’utile netto scende di $7,50 (effetto al netto delle imposte)."),
      ess("Adds back the $10 non-cash depreciation so cash rises by $2.50.", "Somma di nuovo i $10 di ammortamento non monetario, quindi la cassa aumenta di $2,50."),
      ess("Balance sheet balances: assets −7.50 (cash +2.50, PP&E −10) vs equity −7.50.", "Lo SP quadra: attivo −7,50 (cassa +2,50, immobilizzazioni −10) e PN −7,50."),
      opt("Identifies the cash increase as the depreciation tax shield.", "Identifica l’aumento di cassa come scudo fiscale dell’ammortamento.")
    ],
    followUps: [
      t("What if the depreciation were not tax-deductible?", "E se l’ammortamento non fosse deducibile fiscalmente?"),
      t("Now walk me through a $10 increase in accrued compensation instead.", "Ora mi illustri invece un aumento di $10 dei costi del personale maturati e non pagati.")
    ],
    numeric: { answer: 2.5, unit: '$', tolerance: { abs: 0.01 }, verify: { fn: 'expenseImpact', args: [10, 0.25, true], pick: 'cash' } }
  },
  {
    id: 'iq-acc-inventory-cash',
    type: 'technical',
    topic: 'accounting',
    difficulty: 1,
    seconds: 60,
    prompt: t("A company buys $50 of inventory with cash. What happens on the three statements?", "Un’azienda acquista $50 di magazzino pagando in contanti. Cosa succede nei tre prospetti?"),
    reference: t(
      "**Income statement:** nothing — buying inventory is not an expense; cost hits COGS only when the goods are sold.\n\n**Cash flow statement:** the increase in inventory is an increase in working capital, so cash from operations falls by **$50**.\n\n**Balance sheet:** inventory +$50 and cash −$50. Total assets are unchanged, liabilities and equity unchanged — it balances.\n\nIf it were bought on credit instead, accounts payable would rise by $50 and cash would not change.",
      "**Conto economico:** nessun effetto — acquistare magazzino non è un costo; il costo va nel COGS solo quando la merce viene venduta.\n\n**Rendiconto finanziario:** l’aumento delle rimanenze è un aumento del capitale circolante, quindi il flusso operativo scende di **$50**.\n\n**Stato patrimoniale:** rimanenze +$50 e cassa −$50. Totale attivo invariato, passività e PN invariati — quadra.\n\nSe fosse acquistato a credito, i debiti verso fornitori aumenterebbero di $50 e la cassa non cambierebbe."
    ),
    rubric: [
      ess("No income statement impact until the inventory is sold.", "Nessun effetto a conto economico finché il magazzino non viene venduto."),
      ess("Cash from operations falls by $50 via the change in working capital.", "Il flusso operativo scende di $50 tramite la variazione del capitale circolante."),
      ess("Balance sheet: inventory +50, cash −50, totals unchanged.", "SP: rimanenze +50, cassa −50, totali invariati."),
      opt("Contrasts with buying on credit (payables up, no cash change).", "Confronta con l’acquisto a credito (debiti verso fornitori in aumento, cassa invariata).")
    ],
    followUps: [t("The inventory is then sold for $80. Walk me through it with a 25% tax rate.", "Il magazzino viene poi venduto a $80. Mi illustri l’effetto con aliquota al 25%.")]
  },
  {
    id: 'iq-acc-ppe-debt',
    type: 'technical',
    topic: 'accounting',
    difficulty: 2,
    seconds: 120,
    prompt: t(
      "A company buys a $100 machine funded entirely with debt. At the end of year 1 the machine is depreciated by $10 (straight-line) and the debt carries 10% interest. Tax rate 25%. Walk me through year 1.",
      "Un’azienda acquista un macchinario da $100 finanziato interamente a debito. A fine anno 1 il macchinario è ammortizzato di $10 (quote costanti) e il debito paga il 10% di interessi. Aliquota 25%. Mi illustri l’anno 1."
    ),
    reference: t(
      "**At purchase:** PP&E +100, debt +100; no IS impact; on the CFS capex −100 in investing and debt issuance +100 in financing, so no net cash change.\n\n**Year 1 IS:** depreciation $10 + interest $10 = $20 lower pre-tax income; net income falls by **$15**.\n\n**CFS:** net income −15, add back depreciation +10, so cash is **down $5** (assuming no principal repayment).\n\n**BS:** cash −5, PP&E −10 → assets −15. Debt unchanged at 100; retained earnings −15. Balances.",
      "**All’acquisto:** immobilizzazioni +100, debito +100; nessun effetto a CE; nel rendiconto capex −100 negli investimenti ed emissione di debito +100 nei finanziamenti: cassa netta invariata.\n\n**CE anno 1:** ammortamento $10 + interessi $10 = utile ante imposte −$20; l’utile netto scende di **$15**.\n\n**Rendiconto:** utile −15, più ammortamento +10, cassa **−$5** (senza rimborso di capitale).\n\n**SP:** cassa −5, immobilizzazioni −10 → attivo −15. Debito invariato a 100; utili a nuovo −15. Quadra."
    ),
    rubric: [
      ess("At purchase: capex in investing offset by debt in financing; no IS effect.", "All’acquisto: capex negli investimenti compensato dal debito nei finanziamenti; nessun effetto a CE."),
      ess("Year 1 net income falls by $15 (20 pre-tax × 0.75).", "Anno 1: utile netto −$15 (20 ante imposte × 0,75)."),
      ess("Cash falls by $5 after adding back depreciation.", "La cassa scende di $5 dopo aver sommato l’ammortamento."),
      ess("Balance sheet balances: assets −15, equity −15, debt unchanged.", "Lo SP quadra: attivo −15, PN −15, debito invariato."),
      opt("Notes the answer changes if principal is repaid (financing outflow, debt falls).", "Osserva che la risposta cambia se si rimborsa capitale (uscita nei finanziamenti, debito in calo).")
    ],
    numeric: { answer: -5, unit: '$', tolerance: { abs: 0.01 }, verify: { fn: 'sum', args: [-15, 10] } },
    followUps: [t("In year 2 the machine breaks and is written off. What happens?", "Nell’anno 2 il macchinario si rompe e viene svalutato integralmente. Cosa succede?")]
  },
  {
    id: 'iq-acc-working-capital',
    type: 'technical',
    topic: 'accounting',
    difficulty: 1,
    seconds: 75,
    prompt: t("What is working capital, and why does an increase in working capital reduce cash flow?", "Cos’è il capitale circolante e perché un suo aumento riduce i flussi di cassa?"),
    reference: t(
      "Operating working capital is **current operating assets minus current operating liabilities** — mainly receivables plus inventory minus payables and accrued expenses. Bankers usually exclude cash and debt because those are financing items.\n\nAn increase means more cash is **tied up** in the business: either customers owe you more (revenue booked but not collected), you hold more inventory, or you pay suppliers faster. The income statement is accrual-based, so the cash flow statement subtracts the increase to get back to actual cash.\n\nThat is why a fast-growing company can be profitable and still burn cash.",
      "Il capitale circolante operativo è **attività correnti operative meno passività correnti operative** — essenzialmente crediti commerciali più rimanenze meno debiti verso fornitori e ratei. I banker di solito escludono cassa e debito perché sono poste finanziarie.\n\nUn aumento significa più cassa **immobilizzata** nel business: i clienti ti devono di più (ricavi registrati ma non incassati), hai più magazzino o paghi i fornitori più in fretta. Il conto economico è per competenza, quindi il rendiconto sottrae l’aumento per tornare alla cassa effettiva.\n\nPer questo un’azienda in forte crescita può essere in utile e bruciare cassa."
    ),
    rubric: [
      ess("Correct definition: operating current assets minus operating current liabilities.", "Definizione corretta: attività correnti operative meno passività correnti operative."),
      ess("Explains that an increase ties up cash (accrual vs cash timing).", "Spiega che un aumento assorbe cassa (differenza tra competenza e cassa)."),
      opt("Gives concrete drivers (receivables, inventory, payables).", "Indica driver concreti (crediti, rimanenze, debiti verso fornitori)."),
      opt("Mentions excluding cash and debt in the banking definition.", "Cita l’esclusione di cassa e debito nella definizione usata in banca.")
    ],
    followUps: [t("Can working capital be negative? Give an example of a business where that is good.", "Il capitale circolante può essere negativo? Faccia un esempio di business in cui è positivo che lo sia.")]
  },
  {
    id: 'iq-acc-deferred-tax',
    type: 'technical',
    topic: 'accounting',
    difficulty: 2,
    seconds: 90,
    prompt: t("What are deferred tax liabilities and deferred tax assets? Give a common example of each.", "Cosa sono le passività e le attività per imposte differite? Faccia un esempio comune per ciascuna."),
    reference: t(
      "They arise from **temporary differences** between the book (accounting) value and the tax value of assets and liabilities.\n\n- **DTL:** you pay less tax today than your book tax expense, and will pay more later. Classic example: **accelerated tax depreciation** — tax depreciation exceeds book depreciation early on, so taxable income is lower now. Also fair value write-ups in an acquisition with no tax step-up.\n- **DTA:** you pay more tax today, or will pay less later. Examples: **tax loss carry-forwards (NOLs)**, or expenses recognised in the books before they are deductible, such as certain provisions.\n\nA DTA is recognised only if future taxable profit is probable to use it.",
      "Nascono da **differenze temporanee** tra il valore contabile e il valore fiscale di attività e passività.\n\n- **Passività per imposte differite:** oggi paghi meno imposte di quelle di competenza e ne pagherai di più in futuro. Esempio classico: **ammortamento fiscale accelerato** — nei primi anni l’ammortamento fiscale supera quello civilistico, quindi il reddito imponibile oggi è più basso. Anche le rivalutazioni a fair value in un’acquisizione senza riconoscimento fiscale.\n- **Attività per imposte anticipate:** paghi più imposte oggi o ne pagherai meno in futuro. Esempi: **perdite fiscali riportabili**, o costi rilevati in bilancio prima di essere deducibili, come alcuni accantonamenti.\n\nUn’attività per imposte anticipate si iscrive solo se è probabile un reddito imponibile futuro per utilizzarla."
    ),
    rubric: [
      ess("Links both to temporary differences between book and tax bases.", "Collega entrambe alle differenze temporanee tra valore contabile e fiscale."),
      ess("Correct DTL example (accelerated tax depreciation or acquisition write-up).", "Esempio corretto di passività differita (ammortamento fiscale accelerato o rivalutazione da acquisizione)."),
      ess("Correct DTA example (NOLs or expenses deductible later).", "Esempio corretto di attività anticipata (perdite fiscali o costi deducibili in futuro)."),
      opt("Mentions the recoverability requirement for DTAs.", "Cita il requisito di recuperabilità delle imposte anticipate.")
    ],
    followUps: [t("How does a DTL show up on the cash flow statement?", "Come appare una passività per imposte differite nel rendiconto finanziario?")]
  },
  {
    id: 'iq-acc-goodwill',
    type: 'technical',
    topic: 'accounting',
    difficulty: 2,
    seconds: 90,
    prompt: t("What is goodwill, how is it created, and what happens to it after the deal?", "Cos’è l’avviamento, come nasce e cosa gli succede dopo l’operazione?"),
    reference: t(
      "Goodwill is created in an acquisition: it is the **purchase price above the fair value of the identifiable net assets acquired** (after writing up assets and recognising intangibles like customer relationships, brands and technology, net of the related deferred tax). It captures things that cannot be separately identified — the assembled workforce, expected synergies, market position.\n\nAfterwards, under **IFRS (IAS 36)** and **US GAAP for public companies (ASC 350)**, goodwill is **not amortised**; it is tested for impairment at least annually, and impairments are not reversed. Under **Italian GAAP (OIC 24)** goodwill is amortised over its useful life.\n\nAn impairment reduces net income but is non-cash.",
      "L’avviamento nasce da un’acquisizione: è **il prezzo pagato in eccesso rispetto al fair value delle attività nette identificabili acquisite** (dopo aver rivalutato le attività e iscritto intangibili come relazioni con la clientela, marchi e tecnologia, al netto delle relative imposte differite). Rappresenta ciò che non è identificabile separatamente — forza lavoro, sinergie attese, posizionamento.\n\nSuccessivamente, secondo **IFRS (IAS 36)** e **US GAAP per le società quotate (ASC 350)**, l’avviamento **non si ammortizza**; si sottopone a impairment test almeno annuale e le svalutazioni non si ripristinano. Secondo i **principi OIC (OIC 24)** l’avviamento si ammortizza lungo la vita utile.\n\nUna svalutazione riduce l’utile ma non ha effetto sulla cassa."
    ),
    rubric: [
      ess("Defines goodwill as price paid over fair value of identifiable net assets.", "Definisce l’avviamento come prezzo pagato oltre il fair value delle attività nette identificabili."),
      ess("States it is not amortised under IFRS/US GAAP (public) but tested for impairment.", "Indica che non si ammortizza secondo IFRS/US GAAP (quotate) ma è soggetto a impairment test."),
      opt("Mentions identifiable intangibles are recognised separately before goodwill.", "Cita che gli intangibili identificabili si iscrivono separatamente prima dell’avviamento."),
      opt("Notes Italian GAAP (OIC 24) amortises goodwill.", "Osserva che i principi OIC (OIC 24) prevedono l’ammortamento dell’avviamento."),
      opt("Notes impairment is non-cash and not reversible.", "Osserva che la svalutazione è non monetaria e non ripristinabile.")
    ],
    followUps: [t("Walk me through a $20 goodwill impairment on the three statements.", "Mi illustri una svalutazione dell’avviamento di $20 nei tre prospetti.")]
  },
  {
    id: 'iq-acc-sbc',
    type: 'technical',
    topic: 'accounting',
    difficulty: 2,
    seconds: 75,
    prompt: t("Stock-based compensation is added back on the cash flow statement. Should you ignore it in valuation?", "La remunerazione in azioni viene sommata nel rendiconto finanziario. Si può ignorare nella valutazione?"),
    reference: t(
      "No. SBC is non-cash, so it is added back in cash from operations, but it is a **real economic cost**: the company pays employees with equity instead of cash, which **dilutes existing shareholders**.\n\nIn a DCF you should either treat SBC as a cash expense (do not add it back to free cash flow) or add it back and fully capture the resulting dilution in the share count — not add it back and ignore dilution, which double-benefits the company.\n\nSimilarly, “adjusted EBITDA” that excludes SBC flatters tech companies where SBC can be a large share of revenue.",
      "No. La SBC è non monetaria, quindi si somma nel flusso operativo, ma è un **costo economico reale**: l’azienda paga i dipendenti in azioni anziché in contanti, **diluendo gli azionisti esistenti**.\n\nIn un DCF bisogna o trattare la SBC come un costo monetario (non sommarla nel free cash flow) oppure sommarla e catturare interamente la diluizione nel numero di azioni — non sommarla e ignorare la diluizione, che avvantaggia due volte l’azienda.\n\nAllo stesso modo, un “adjusted EBITDA” che esclude la SBC abbellisce le società tech, dove la SBC può pesare molto sui ricavi."
    ),
    rubric: [
      ess("States SBC is a real economic cost despite being non-cash.", "Afferma che la SBC è un costo economico reale anche se non monetario."),
      ess("Identifies dilution of existing shareholders.", "Identifica la diluizione degli azionisti esistenti."),
      opt("Explains the consistent DCF treatment (expense it, or capture dilution — not neither).", "Spiega il trattamento coerente nel DCF (spesarla oppure catturare la diluizione — non nessuna delle due)."),
      opt("Flags adjusted EBITDA excluding SBC as flattering.", "Segnala che un adjusted EBITDA senza SBC è troppo favorevole.")
    ]
  },
  {
    id: 'iq-acc-ni-cash',
    type: 'technical',
    topic: 'accounting',
    difficulty: 1,
    seconds: 60,
    prompt: t("Can a company with positive net income go bankrupt?", "Un’azienda con utile netto positivo può fallire?"),
    reference: t(
      "Yes. Net income is an accrual measure; bankruptcy is about **cash and obligations**.\n\nA company can be profitable while: working capital absorbs cash (customers pay slowly, inventory builds up in a growth phase); heavy capex consumes cash; or large **debt maturities** come due that it cannot refinance. Interest is on the income statement, but principal repayments are not.\n\nThat is why lenders focus on cash flow, liquidity and maturity profiles rather than earnings alone.",
      "Sì. L’utile netto è una misura per competenza; il fallimento riguarda **cassa e obbligazioni**.\n\nUn’azienda può essere in utile mentre: il capitale circolante assorbe cassa (clienti lenti a pagare, magazzino che cresce in fase di sviluppo); capex elevati consumano cassa; oppure arrivano a scadenza **rimborsi di debito** che non riesce a rifinanziare. Gli interessi passano a conto economico, i rimborsi di capitale no.\n\nPer questo i finanziatori guardano a flussi di cassa, liquidità e profilo delle scadenze più che agli utili."
    ),
    rubric: [
      ess("Answers yes and distinguishes accrual profit from cash.", "Risponde sì e distingue utile per competenza e cassa."),
      ess("Gives at least one mechanism (working capital, capex, debt maturities).", "Indica almeno un meccanismo (circolante, capex, scadenze del debito)."),
      opt("Notes principal repayment does not hit the income statement.", "Osserva che il rimborso del capitale non passa a conto economico.")
    ]
  },
  {
    id: 'iq-acc-best-statement',
    type: 'technical',
    topic: 'accounting',
    difficulty: 1,
    seconds: 60,
    prompt: t("If you could only use one financial statement to evaluate a company, which would you pick?", "Se potesse usare un solo prospetto per valutare un’azienda, quale sceglierebbe?"),
    reference: t(
      "I would pick the **cash flow statement**, because it shows how much cash the business actually generates and where it goes — operations, reinvestment and financing — and it is harder to manipulate than accrual earnings.\n\nIt also starts from net income, so I still see profitability, and the investing and financing sections tell me about capex needs, acquisitions, debt and shareholder returns.\n\nThe balance sheet is a reasonable alternative answer if you argue you can reconstruct much of the rest from two balance sheets — but the key is to justify the choice.",
      "Sceglierei il **rendiconto finanziario**, perché mostra quanta cassa genera davvero il business e dove va — gestione operativa, reinvestimenti e finanziamenti — ed è più difficile da manipolare degli utili per competenza.\n\nParte inoltre dall’utile netto, quindi vedo comunque la redditività, e le sezioni di investimento e finanziamento mi dicono di capex, acquisizioni, debito e remunerazione degli azionisti.\n\nLo stato patrimoniale è una risposta alternativa accettabile se si argomenta che da due stati patrimoniali si ricostruisce molto — l’importante è motivare la scelta."
    ),
    rubric: [
      ess("Makes a clear choice and justifies it.", "Fa una scelta chiara e la motiva."),
      ess("Justification reflects cash generation / quality of earnings.", "La motivazione riflette generazione di cassa / qualità degli utili."),
      opt("Mentions that the CFS still shows net income at the top.", "Cita che il rendiconto mostra comunque l’utile in apertura.")
    ]
  },
  {
    id: 'iq-acc-ifrs16',
    type: 'technical',
    topic: 'accounting',
    difficulty: 3,
    seconds: 120,
    prompt: t(
      "How did IFRS 16 change the financial statements of a company with large operating leases, and what does that mean for EV/EBITDA?",
      "Come ha cambiato IFRS 16 i bilanci di un’azienda con molti leasing operativi e cosa implica per l’EV/EBITDA?"
    ),
    reference: t(
      "Under **IFRS 16** (effective 2019) lessees bring almost all leases on balance sheet: a **right-of-use asset** and a **lease liability** equal to the PV of lease payments.\n\n- **Income statement:** the rent expense disappears and is replaced by depreciation of the ROU asset and interest on the liability, so **EBITDA rises** and EBIT rises slightly.\n- **Cash flow statement:** the principal portion of lease payments moves to financing, so operating cash flow rises; total cash is unchanged.\n\nFor valuation you must be **consistent**: if you use post-IFRS 16 EBITDA, include lease liabilities in net debt/EV; if you use pre-IFRS 16 EBITDA (after rent), exclude them. Under **US GAAP (ASC 842)** operating leases are also on balance sheet, but the expense remains a single straight-line operating cost, so EBITDA is not boosted the same way.",
      "Con **IFRS 16** (in vigore dal 2019) il locatario iscrive quasi tutti i leasing in bilancio: un **diritto d’uso** e una **passività per leasing** pari al valore attuale dei canoni.\n\n- **Conto economico:** il canone sparisce ed è sostituito da ammortamento del diritto d’uso e interessi sulla passività, quindi **l’EBITDA aumenta** e l’EBIT aumenta leggermente.\n- **Rendiconto:** la quota capitale dei canoni passa ai flussi di finanziamento, quindi il flusso operativo aumenta; la cassa totale non cambia.\n\nNella valutazione serve **coerenza**: se si usa l’EBITDA post-IFRS 16 si includono le passività per leasing nel debito/EV; se si usa l’EBITDA pre-IFRS 16 (dopo i canoni) si escludono. Secondo **US GAAP (ASC 842)** anche i leasing operativi vanno in bilancio, ma il costo resta un unico onere operativo lineare, quindi l’EBITDA non aumenta allo stesso modo."
    ),
    rubric: [
      ess("ROU asset and lease liability recognised on balance sheet.", "Iscrizione di diritto d’uso e passività per leasing."),
      ess("EBITDA increases because rent is replaced by depreciation and interest.", "L’EBITDA aumenta perché il canone è sostituito da ammortamento e interessi."),
      ess("Consistency rule: lease liabilities in EV if EBITDA is pre-rent.", "Regola di coerenza: passività per leasing nell’EV se l’EBITDA è ante canoni."),
      opt("Notes the CFS reclassification (principal to financing).", "Cita la riclassifica nel rendiconto (quota capitale nei finanziamenti)."),
      opt("Contrasts US GAAP ASC 842 treatment of operating leases.", "Confronta il trattamento US GAAP ASC 842 dei leasing operativi.")
    ]
  },
  {
    id: 'iq-acc-writedown-inventory',
    type: 'technical',
    topic: 'accounting',
    difficulty: 2,
    seconds: 90,
    prompt: t(
      "A company writes down $40 of inventory. Tax rate 25%, assume the write-down is tax-deductible. Walk me through the statements. By how much does net income change?",
      "Un’azienda svaluta $40 di magazzino. Aliquota 25%, svalutazione deducibile. Mi illustri i prospetti. Di quanto varia l’utile netto?"
    ),
    reference: t(
      "**IS:** a $40 expense (usually in COGS), pre-tax income −40, taxes −10, net income **−$30**.\n\n**CFS:** net income −30; the write-down is non-cash, so add back +40 (often shown through the change in inventory). Cash **+$10** from lower taxes.\n\n**BS:** inventory −40, cash +10 → assets −30; retained earnings −30. Balances.\n\nSame mechanics as any deductible non-cash charge, like depreciation or a PP&E impairment.",
      "**CE:** costo di $40 (di solito nel COGS), utile ante imposte −40, imposte −10, utile netto **−$30**.\n\n**Rendiconto:** utile −30; la svalutazione è non monetaria, si somma +40 (spesso tramite la variazione delle rimanenze). Cassa **+$10** per le minori imposte.\n\n**SP:** rimanenze −40, cassa +10 → attivo −30; utili a nuovo −30. Quadra.\n\nStessa meccanica di qualsiasi costo non monetario deducibile, come ammortamenti o svalutazioni di immobilizzazioni."
    ),
    rubric: [
      ess("Net income falls by $30.", "L’utile netto scende di $30."),
      ess("Non-cash add-back leaves cash up $10 from the tax saving.", "La rettifica non monetaria lascia la cassa a +$10 per il risparmio fiscale."),
      ess("Balance sheet balances (assets −30, equity −30).", "Lo SP quadra (attivo −30, PN −30)."),
      opt("Notes that if not tax-deductible, cash is unchanged and NI falls by the full 40.", "Osserva che se non deducibile la cassa resta invariata e l’utile scende di 40.")
    ],
    numeric: { answer: -30, unit: '$', tolerance: { abs: 0.01 }, verify: { fn: 'expenseImpact', args: [40, 0.25, true], pick: 'netIncome' } }
  }
];

/* ------------------------------------------------------------------ */
/* Enterprise value vs equity value                                     */
/* ------------------------------------------------------------------ */

const evEquity: InterviewQuestion[] = [
  {
    id: 'iq-ev-vs-equity',
    type: 'technical',
    topic: 'ev-equity',
    difficulty: 1,
    seconds: 75,
    prompt: t("What is the difference between enterprise value and equity value?", "Qual è la differenza tra enterprise value ed equity value?"),
    reference: t(
      "**Equity value** is the value of the company to **shareholders only** — for a listed company, share price × diluted shares.\n\n**Enterprise value** is the value of the **core operating business to all capital providers** — shareholders, lenders, preferred holders and minority investors — independent of how it is financed.\n\nTo bridge: EV = equity value + debt + preferred stock + non-controlling interests − cash (and other non-operating assets).\n\nEV is what an acquirer effectively pays for the operations, which is why it pairs with operating metrics like EBITDA.",
      "**L’equity value** è il valore dell’azienda **per i soli azionisti** — per una quotata, prezzo per azione × azioni diluite.\n\n**L’enterprise value** è il valore del **business operativo per tutti i finanziatori** — azionisti, creditori, titolari di azioni privilegiate e soci di minoranza — indipendentemente da come è finanziato.\n\nIl ponte: EV = equity value + debito + azioni privilegiate + interessenze di minoranza − cassa (e altre attività non operative).\n\nL’EV è ciò che un acquirente paga di fatto per l’attività operativa, per questo si abbina a metriche operative come l’EBITDA."
    ),
    rubric: [
      ess("Equity value = value to shareholders (price × diluted shares).", "Equity value = valore per gli azionisti (prezzo × azioni diluite)."),
      ess("EV = value of operations to all capital providers, capital-structure neutral.", "EV = valore dell’attività operativa per tutti i finanziatori, neutrale rispetto alla struttura del capitale."),
      ess("Gives the bridge (add debt, preferred, NCI; subtract cash).", "Indica il ponte (si aggiungono debito, privilegiate, minoranze; si sottrae la cassa)."),
      opt("Links EV to operating metrics and equity value to post-interest metrics.", "Collega l’EV a metriche operative e l’equity value a metriche dopo gli interessi.")
    ],
    followUps: [t("Can equity value be greater than enterprise value?", "L’equity value può essere maggiore dell’enterprise value?")]
  },
  {
    id: 'iq-ev-why-subtract-cash',
    type: 'technical',
    topic: 'ev-equity',
    difficulty: 1,
    seconds: 60,
    prompt: t("Why do we subtract cash when calculating enterprise value?", "Perché si sottrae la cassa nel calcolo dell’enterprise value?"),
    reference: t(
      "Because EV measures the value of the **operating business**, and cash is a **non-operating asset**. If you bought the whole company, you would get the cash too, which effectively reduces the net price of the operations — you could use it to pay down debt or pay yourself a dividend.\n\nIt is not that cash is “bad”; it is just already counted in equity value, so removing it isolates the operations.\n\nIn practice bankers may keep some **minimum operating cash** in the business and only subtract excess cash, and trapped cash may be treated differently.",
      "Perché l’EV misura il valore del **business operativo** e la cassa è un’**attività non operativa**. Se acquistassi l’intera azienda, otterresti anche la cassa, che di fatto riduce il prezzo netto dell’attività operativa — potresti usarla per ripagare debito o distribuirti un dividendo.\n\nNon è che la cassa sia “negativa”: è già inclusa nell’equity value, e sottrarla isola l’attività operativa.\n\nIn pratica i banker possono lasciare una **cassa operativa minima** nel business e sottrarre solo la cassa in eccesso; la cassa non liberamente disponibile può essere trattata diversamente."
    ),
    rubric: [
      ess("Cash is non-operating; EV isolates the operating business.", "La cassa è non operativa; l’EV isola il business operativo."),
      ess("Buyer acquires the cash, reducing the effective price.", "L’acquirente ottiene la cassa, che riduce il prezzo effettivo."),
      opt("Mentions minimum/operating cash or trapped cash nuances.", "Cita le sfumature su cassa operativa minima o non disponibile.")
    ]
  },
  {
    id: 'iq-ev-nci',
    type: 'technical',
    topic: 'ev-equity',
    difficulty: 2,
    seconds: 90,
    prompt: t("Why do you add non-controlling interests to enterprise value, and subtract equity-method investments?", "Perché si aggiungono le interessenze di minoranza all’enterprise value e si sottraggono le partecipazioni valutate a patrimonio netto?"),
    reference: t(
      "It is about **consistency between the numerator and the denominator**.\n\nIf the parent owns, say, 70% of a subsidiary, it **consolidates 100%** of that subsidiary’s revenue and EBITDA. Equity value only reflects the parent’s share, so we **add NCI** to EV to capture the 30% owned by others — otherwise EV/EBITDA would be understated.\n\nConversely, a 25% stake accounted for under the **equity method** contributes nothing to revenue or EBITDA (only a line of “share of profit”), yet its value is in the share price. So we **subtract** it from EV to keep EV/EBITDA consistent.",
      "È una questione di **coerenza tra numeratore e denominatore**.\n\nSe la capogruppo possiede, ad esempio, il 70% di una controllata, ne **consolida il 100%** di ricavi ed EBITDA. L’equity value riflette solo la quota della capogruppo, quindi **si aggiungono le minoranze** all’EV per catturare il 30% di terzi — altrimenti l’EV/EBITDA sarebbe sottostimato.\n\nAl contrario, una quota del 25% valutata **a patrimonio netto** non contribuisce a ricavi né EBITDA (solo una riga di “quota di risultato”), ma il suo valore è nel prezzo dell’azione. Quindi la si **sottrae** dall’EV per mantenere coerente l’EV/EBITDA."
    ),
    rubric: [
      ess("Explains consolidation of 100% of subsidiary metrics despite partial ownership.", "Spiega il consolidamento al 100% delle metriche della controllata pur con possesso parziale."),
      ess("Adding NCI aligns EV with consolidated EBITDA (numerator/denominator consistency).", "Aggiungere le minoranze allinea l’EV all’EBITDA consolidato (coerenza numeratore/denominatore)."),
      ess("Equity-method stakes are not in EBITDA so are subtracted.", "Le partecipazioni a patrimonio netto non sono nell’EBITDA e quindi si sottraggono.")
    ]
  },
  {
    id: 'iq-ev-calc',
    type: 'technical',
    topic: 'ev-equity',
    difficulty: 1,
    seconds: 60,
    prompt: t(
      "A company has a market cap of €500m, debt of €200m, cash of €50m, preferred stock of €20m and non-controlling interests of €30m. What is its enterprise value?",
      "Un’azienda ha capitalizzazione di €500m, debito di €200m, cassa di €50m, azioni privilegiate per €20m e interessenze di minoranza per €30m. Qual è l’enterprise value?"
    ),
    reference: t(
      "EV = equity value + debt + preferred + NCI − cash = 500 + 200 + 20 + 30 − 50 = **€700m**.\n\nI add the claims of the other capital providers and the minority holders because consolidated EBITDA includes 100% of subsidiaries, and subtract cash because it is a non-operating asset.",
      "EV = equity value + debito + privilegiate + minoranze − cassa = 500 + 200 + 20 + 30 − 50 = **€700m**.\n\nAggiungo i diritti degli altri finanziatori e dei soci di minoranza perché l’EBITDA consolidato include il 100% delle controllate, e sottraggo la cassa perché è un’attività non operativa."
    ),
    rubric: [
      ess("Correct answer: €700m.", "Risposta corretta: €700m."),
      ess("Correct signs for each bridge item.", "Segni corretti per ciascuna voce del ponte."),
      opt("Briefly justifies why each item is added or subtracted.", "Motiva brevemente perché ogni voce si aggiunge o si sottrae.")
    ],
    numeric: { answer: 700, unit: '€m', tolerance: { abs: 0.5 }, verify: { fn: 'enterpriseValue', args: [500, 200, 50, 20, 30] } }
  },
  {
    id: 'iq-ev-diluted-tsm',
    type: 'technical',
    topic: 'ev-equity',
    difficulty: 2,
    seconds: 90,
    prompt: t(
      "A company has 100m basic shares trading at $20. It has 10m options with a strike of $10. Using the treasury stock method, what is the diluted share count (m)?",
      "Un’azienda ha 100m di azioni in circolazione quotate $20. Ha 10m di opzioni con strike $10. Con il treasury stock method, qual è il numero di azioni diluite (m)?"
    ),
    reference: t(
      "The options are in the money (strike $10 < price $20), so they are exercised: **+10m shares**.\n\nThe company receives 10m × $10 = **$100m** of proceeds, which under the treasury stock method it uses to buy back shares at the current price: $100m / $20 = **5m shares** repurchased.\n\nNet new shares = 10 − 5 = 5m, so diluted shares = 100 + 5 = **105m**.\n\nOut-of-the-money options are excluded; convertibles are added if in the money, and RSUs are added in full.",
      "Le opzioni sono in the money (strike $10 < prezzo $20), quindi vengono esercitate: **+10m azioni**.\n\nL’azienda incassa 10m × $10 = **$100m**, che secondo il treasury stock method usa per riacquistare azioni al prezzo corrente: $100m / $20 = **5m azioni** riacquistate.\n\nNuove azioni nette = 10 − 5 = 5m, quindi azioni diluite = 100 + 5 = **105m**.\n\nLe opzioni out of the money si escludono; le obbligazioni convertibili si aggiungono se in the money, le RSU si aggiungono per intero."
    ),
    rubric: [
      ess("Correct answer: 105m diluted shares.", "Risposta corretta: 105m azioni diluite."),
      ess("Explains exercise proceeds used to repurchase shares at current price.", "Spiega che i proventi dell’esercizio servono a riacquistare azioni al prezzo corrente."),
      opt("Notes only in-the-money options are included.", "Osserva che si includono solo le opzioni in the money."),
      opt("Mentions RSUs/convertibles treatment.", "Cita il trattamento di RSU/convertibili.")
    ],
    numeric: { answer: 105, unit: 'm', tolerance: { abs: 0.05 }, verify: { fn: 'dilutedShares', args: [100, 20, [{ count: 10, strike: 10 }]] } }
  },
  {
    id: 'iq-ev-issue-shares',
    type: 'technical',
    topic: 'ev-equity',
    difficulty: 2,
    seconds: 75,
    prompt: t(
      "A company issues $100m of new shares and keeps the cash on balance sheet. What happens to its equity value and enterprise value? What if it uses the proceeds to repay debt?",
      "Un’azienda emette $100m di nuove azioni e tiene la cassa in bilancio. Cosa succede a equity value ed enterprise value? E se usa i proventi per ripagare debito?"
    ),
    reference: t(
      "**Keeps the cash:** equity value **rises by $100m** (more shares at the same price), cash rises by $100m, so **EV is unchanged** — the operating business has not changed.\n\n**Repays debt:** equity value still rises by $100m, debt falls by $100m, cash is unchanged — **EV is again unchanged**.\n\nThe principle: financing transactions change the split of value between capital providers, not the value of operations (ignoring tax shields, distress costs and signalling, which matter in reality).",
      "**Tiene la cassa:** l’equity value **aumenta di $100m** (più azioni allo stesso prezzo), la cassa aumenta di $100m, quindi **l’EV non cambia** — il business operativo è lo stesso.\n\n**Ripaga debito:** l’equity value aumenta comunque di $100m, il debito scende di $100m, la cassa resta invariata — **di nuovo l’EV non cambia**.\n\nIl principio: le operazioni di finanziamento cambiano la ripartizione del valore tra i finanziatori, non il valore dell’attività operativa (ignorando scudo fiscale, costi di dissesto e segnaletica, che nella realtà contano)."
    ),
    rubric: [
      ess("Equity value up $100m in both cases.", "Equity value +$100m in entrambi i casi."),
      ess("EV unchanged in both cases, with the reason (offsetting cash or debt).", "EV invariato in entrambi i casi, con la motivazione (cassa o debito compensano)."),
      opt("Mentions real-world caveats (tax shield, signalling).", "Cita le eccezioni reali (scudo fiscale, segnaletica).")
    ]
  },
  {
    id: 'iq-ev-negative',
    type: 'technical',
    topic: 'ev-equity',
    difficulty: 2,
    seconds: 60,
    prompt: t("Can enterprise value be negative? What would it mean?", "L’enterprise value può essere negativo? Cosa significherebbe?"),
    reference: t(
      "Yes — if **cash exceeds equity value plus debt** and other claims. It means the market values the operating business below zero: it expects the company to **burn through its cash** (e.g. a loss-making biotech after a failed trial) or doubts the cash will ever reach shareholders.\n\nIn practice it often signals distress, a cash pile that is trapped or earmarked, or a market anomaly. A negative EV makes EV multiples meaningless, so you would value such a company on liquidation or sum-of-the-parts logic instead.",
      "Sì — se **la cassa supera l’equity value più il debito** e gli altri diritti. Significa che il mercato attribuisce al business operativo un valore negativo: si aspetta che l’azienda **bruci la sua cassa** (ad esempio una biotech in perdita dopo un trial fallito) o dubita che la cassa arriverà mai agli azionisti.\n\nIn pratica segnala spesso tensione finanziaria, cassa vincolata o destinata, oppure un’anomalia di mercato. Un EV negativo rende privi di senso i multipli di EV; si valuterebbe quindi l’azienda con logiche di liquidazione o somma delle parti."
    ),
    rubric: [
      ess("Yes, when cash exceeds equity value plus debt/other claims.", "Sì, quando la cassa supera equity value più debito/altri diritti."),
      ess("Interprets it: market expects cash burn or doubts cash reaches shareholders.", "Lo interpreta: il mercato prevede consumo di cassa o dubita che arrivi agli azionisti."),
      opt("Notes EV multiples become meaningless.", "Osserva che i multipli di EV perdono significato.")
    ]
  },
  {
    id: 'iq-ev-multiples-match',
    type: 'technical',
    topic: 'ev-equity',
    difficulty: 1,
    seconds: 60,
    prompt: t("Which metrics pair with enterprise value and which with equity value? Why does it matter?", "Quali metriche si abbinano all’enterprise value e quali all’equity value? Perché è importante?"),
    reference: t(
      "Match the **numerator to the capital providers** whose claims the metric serves.\n\n- **EV** pairs with metrics **before interest**, available to all capital providers: revenue, EBITDA, EBIT, unlevered free cash flow → EV/Revenue, EV/EBITDA, EV/EBIT.\n- **Equity value** pairs with metrics **after interest**, belonging to shareholders only: net income, EPS, levered free cash flow, book value → P/E, P/B, equity value/LFCF.\n\nMixing them, e.g. EV/net income, is wrong because net income has already paid the lenders whose claim is in EV — it would make leveraged companies look artificially expensive.",
      "Si abbina **il numeratore ai finanziatori** a cui spetta la metrica.\n\n- **L’EV** si abbina a metriche **prima degli interessi**, a disposizione di tutti i finanziatori: ricavi, EBITDA, EBIT, free cash flow unlevered → EV/Ricavi, EV/EBITDA, EV/EBIT.\n- **L’equity value** si abbina a metriche **dopo gli interessi**, di spettanza dei soli azionisti: utile netto, EPS, free cash flow levered, patrimonio netto → P/E, P/BV, equity value/LFCF.\n\nMescolarle, ad esempio EV/utile netto, è sbagliato perché l’utile netto ha già remunerato i creditori il cui diritto è nell’EV — le società indebitate sembrerebbero artificialmente care."
    ),
    rubric: [
      ess("EV with pre-interest metrics (revenue, EBITDA, EBIT, UFCF).", "EV con metriche ante interessi (ricavi, EBITDA, EBIT, UFCF)."),
      ess("Equity value with post-interest metrics (net income, EPS, LFCF).", "Equity value con metriche post interessi (utile, EPS, LFCF)."),
      ess("Explains the consistency logic (who the metric belongs to).", "Spiega la logica di coerenza (a chi spetta la metrica).")
    ]
  },
  {
    id: 'iq-ev-equity-to-share-price',
    type: 'technical',
    topic: 'ev-equity',
    difficulty: 2,
    seconds: 75,
    prompt: t(
      "Your DCF gives an enterprise value of €1,200m. The company has €300m of debt, €100m of cash and 50m diluted shares. What is the implied share price?",
      "Il tuo DCF restituisce un enterprise value di €1.200m. L’azienda ha €300m di debito, €100m di cassa e 50m di azioni diluite. Qual è il prezzo implicito per azione?"
    ),
    reference: t(
      "Go from EV to equity value: 1,200 − 300 debt + 100 cash = **€1,000m** of equity value (net debt of €200m).\n\nDivide by diluted shares: 1,000 / 50 = **€20.00 per share**.\n\nIn practice, the diluted share count depends on the share price itself (options via TSM), so the model iterates — and you would also deduct any preferred, NCI or other debt-like items such as pension deficits.",
      "Dall’EV all’equity value: 1.200 − 300 di debito + 100 di cassa = **€1.000m** di equity value (posizione finanziaria netta di €200m).\n\nDividendo per le azioni diluite: 1.000 / 50 = **€20,00 per azione**.\n\nIn pratica il numero di azioni diluite dipende dal prezzo stesso (opzioni via TSM), quindi il modello itera — e si dedurrebbero anche eventuali privilegiate, minoranze o altre poste assimilabili al debito, come i deficit pensionistici."
    ),
    rubric: [
      ess("Correct answer: €20.00 per share.", "Risposta corretta: €20,00 per azione."),
      ess("Subtracts net debt before dividing by diluted shares.", "Sottrae la posizione finanziaria netta prima di dividere per le azioni diluite."),
      opt("Mentions circularity of diluted shares and other debt-like items.", "Cita la circolarità delle azioni diluite e le altre poste assimilabili al debito.")
    ],
    numeric: { answer: 20, unit: '€', tolerance: { abs: 0.05 }, verify: { fn: 'impliedSharePrice', args: [1200, 200, 50] } }
  }
];

/* ------------------------------------------------------------------ */
/* Valuation                                                           */
/* ------------------------------------------------------------------ */

const valuation: InterviewQuestion[] = [
  {
    id: 'iq-val-methods',
    type: 'technical',
    topic: 'valuation',
    difficulty: 1,
    seconds: 90,
    prompt: t("What are the main ways to value a company?", "Quali sono i principali metodi per valutare un’azienda?"),
    reference: t(
      "There are two families: **intrinsic** and **relative** valuation.\n\n- **DCF (intrinsic):** project free cash flows and discount them at the cost of capital, plus a terminal value.\n- **Trading comparables:** apply multiples (EV/EBITDA, P/E) of similar listed companies.\n- **Precedent transactions:** apply multiples paid in past acquisitions of similar companies; these include a control premium.\n\nDepending on context, you may add an **LBO analysis** (what a financial sponsor could pay for a target return), **sum-of-the-parts** for conglomerates, or **dividend discount / P/BV** for banks. Bankers summarise the ranges on a **football field**.",
      "Ci sono due famiglie: valutazione **intrinseca** e **relativa**.\n\n- **DCF (intrinseca):** si proiettano i free cash flow e si attualizzano al costo del capitale, più un terminal value.\n- **Società comparabili quotate (trading comps):** si applicano i multipli (EV/EBITDA, P/E) di società quotate simili.\n- **Transazioni precedenti:** si applicano i multipli pagati in acquisizioni passate di società simili; includono un premio di controllo.\n\nA seconda del contesto si aggiungono un’**analisi LBO** (quanto potrebbe pagare un fondo per un rendimento target), la **somma delle parti** per i conglomerati, o il **dividend discount model / P/BV** per le banche. I banker riassumono gli intervalli in un **football field**."
    ),
    rubric: [
      ess("Names DCF, trading comps and precedent transactions.", "Cita DCF, trading comps e transazioni precedenti."),
      ess("Briefly explains what each does.", "Spiega brevemente cosa fa ciascuno."),
      opt("Mentions LBO analysis, SOTP or sector-specific methods.", "Cita analisi LBO, somma delle parti o metodi settoriali."),
      opt("Mentions the football field summary.", "Cita il football field come sintesi.")
    ],
    followUps: [t("Which of these would typically give the highest value, and why?", "Quale di questi dà tipicamente il valore più alto e perché?")]
  },
  {
    id: 'iq-val-highest',
    type: 'technical',
    topic: 'valuation',
    difficulty: 2,
    seconds: 75,
    prompt: t("Which valuation method typically gives the highest value?", "Quale metodo di valutazione dà tipicamente il valore più alto?"),
    reference: t(
      "**Precedent transactions** usually give a higher value than trading comps because acquirers pay a **control premium** and often price in synergies.\n\nThe **DCF** is the most variable: it can be the highest or the lowest depending on assumptions — terminal growth, WACC and the management case — so I would not claim it is systematically highest.\n\nAn **LBO analysis** often sets a floor, since a sponsor is constrained by leverage and a target IRR and usually cannot pay for synergies.\n\nThe honest answer is “it depends”, but with precedents generally above comps.",
      "Le **transazioni precedenti** danno di solito un valore più alto delle trading comps perché gli acquirenti pagano un **premio di controllo** e spesso incorporano sinergie.\n\nIl **DCF** è il più variabile: può essere il più alto o il più basso a seconda delle ipotesi — crescita terminale, WACC e business plan del management — quindi non direi che sia sistematicamente il più alto.\n\nUn’**analisi LBO** spesso fissa un pavimento, perché un fondo è vincolato dalla leva e da un IRR target e di solito non può pagare sinergie.\n\nLa risposta onesta è “dipende”, ma con le precedenti generalmente sopra le comps."
    ),
    rubric: [
      ess("Precedents typically above trading comps because of the control premium.", "Precedenti tipicamente sopra le comps per il premio di controllo."),
      ess("Acknowledges the DCF depends heavily on assumptions.", "Riconosce che il DCF dipende molto dalle ipotesi."),
      opt("Notes LBO analysis often acts as a floor.", "Osserva che l’analisi LBO funge spesso da pavimento.")
    ]
  },
  {
    id: 'iq-val-comps-vs-precedents',
    type: 'technical',
    topic: 'valuation',
    difficulty: 1,
    seconds: 90,
    prompt: t("Compare trading comparables and precedent transactions. What are the pros and cons of each?", "Confronta trading comps e transazioni precedenti. Quali sono pro e contro di ciascuno?"),
    reference: t(
      "**Trading comps** use current market prices of similar listed companies.\n- Pros: market-based, current, plenty of data.\n- Cons: few truly comparable companies; minority (non-control) prices; markets can be irrational.\n\n**Precedents** use multiples paid in past M&A deals.\n- Pros: reflect what buyers actually paid for **control**, including premiums and synergies — directly relevant in a sale.\n- Cons: data can be limited (private deals); deals reflect past market conditions and deal-specific factors (competitive auction, synergies, distress).\n\nIn a sell-side mandate you look at both; precedents anchor price expectations.",
      "Le **trading comps** usano i prezzi correnti di società quotate simili.\n- Pro: basate sul mercato, attuali, molti dati.\n- Contro: poche società davvero comparabili; prezzi di minoranza (senza controllo); il mercato può essere irrazionale.\n\nLe **precedenti** usano i multipli pagati in operazioni di M&A passate.\n- Pro: riflettono quanto gli acquirenti hanno davvero pagato per il **controllo**, inclusi premi e sinergie — direttamente rilevante in una vendita.\n- Contro: dati spesso limitati (operazioni private); riflettono condizioni di mercato passate e fattori specifici del deal (asta competitiva, sinergie, dissesto).\n\nIn un mandato sell-side si guardano entrambe; le precedenti ancorano le aspettative di prezzo."
    ),
    rubric: [
      ess("Comps = current market multiples of listed peers (minority basis).", "Comps = multipli correnti di mercato di peer quotati (base di minoranza)."),
      ess("Precedents = multiples paid in past deals, including control premium.", "Precedenti = multipli pagati in deal passati, incluso il premio di controllo."),
      ess("At least one valid pro and con for each.", "Almeno un pro e un contro validi per ciascuno.")
    ]
  },
  {
    id: 'iq-val-pick-comps',
    type: 'technical',
    topic: 'valuation',
    difficulty: 1,
    seconds: 75,
    prompt: t("How do you select a set of comparable companies?", "Come si seleziona un campione di società comparabili?"),
    reference: t(
      "Start from **business characteristics**: same industry and sub-sector, similar products, customers and business model. Then refine on **financial characteristics**: size (revenue, market cap), growth, margins, and geography.\n\nI would screen with databases (e.g. Capital IQ, FactSet, Bloomberg), read peers’ filings and equity research to see who the target and analysts consider competitors, and aim for a set of roughly 5–10 names, ideally tiered into core and secondary peers.\n\nIf there are too few, I would widen geography or size before compromising on business model.",
      "Si parte dalle **caratteristiche del business**: stesso settore e sotto-settore, prodotti, clienti e modello di business simili. Poi si affina con le **caratteristiche finanziarie**: dimensione (ricavi, capitalizzazione), crescita, marginalità e area geografica.\n\nFarei uno screening con database (ad es. Capital IQ, FactSet, Bloomberg), leggerei bilanci dei peer e ricerche degli analisti per capire chi il target e gli analisti considerano concorrenti, puntando a circa 5–10 società, idealmente divise tra peer principali e secondari.\n\nSe sono troppo poche, allargherei geografia o dimensione prima di scendere a compromessi sul modello di business."
    ),
    rubric: [
      ess("Business criteria first (industry, products, customers, model).", "Prima i criteri di business (settore, prodotti, clienti, modello)."),
      ess("Financial criteria (size, growth, margins, geography).", "Criteri finanziari (dimensione, crescita, margini, geografia)."),
      opt("Mentions practical sources and tiering / relaxing criteria.", "Cita fonti pratiche e la suddivisione in fasce / l’allentamento dei criteri.")
    ]
  },
  {
    id: 'iq-val-ev-ebitda-vs-pe',
    type: 'technical',
    topic: 'valuation',
    difficulty: 2,
    seconds: 75,
    prompt: t("Why do bankers often prefer EV/EBITDA to P/E?", "Perché i banker preferiscono spesso l’EV/EBITDA al P/E?"),
    reference: t(
      "EV/EBITDA is **capital-structure neutral**: EV includes all capital providers and EBITDA is before interest, so two companies with different leverage are comparable. P/E is distorted by leverage and interest costs.\n\nEBITDA is also before **D&A**, so it is less affected by different depreciation policies or acquisition accounting, and before **taxes**, removing differences in tax jurisdictions. It is closer to operating cash flow and is what lenders and sponsors use.\n\nLimitations: EBITDA ignores capex and working capital, so for capital-intensive businesses EV/EBIT or EV/(EBITDA − capex) can be better; and for banks and insurers P/E or P/BV is used.",
      "L’EV/EBITDA è **neutrale rispetto alla struttura del capitale**: l’EV comprende tutti i finanziatori e l’EBITDA è prima degli interessi, quindi due società con leva diversa sono confrontabili. Il P/E è distorto da leva e oneri finanziari.\n\nL’EBITDA è anche prima degli **ammortamenti**, quindi meno influenzato da politiche di ammortamento diverse o dalla contabilità delle acquisizioni, e prima delle **imposte**, eliminando le differenze tra giurisdizioni fiscali. È più vicino al flusso operativo ed è la metrica usata da finanziatori e fondi.\n\nLimiti: l’EBITDA ignora capex e capitale circolante, quindi per business capital-intensive possono essere migliori EV/EBIT o EV/(EBITDA − capex); per banche e assicurazioni si usano P/E o P/BV."
    ),
    rubric: [
      ess("Capital-structure neutrality (unaffected by leverage).", "Neutralità rispetto alla struttura del capitale (non influenzato dalla leva)."),
      ess("Removes D&A and tax differences between companies.", "Elimina le differenze di ammortamenti e imposte tra società."),
      opt("Acknowledges EBITDA limitations (capex, working capital) or sector exceptions.", "Riconosce i limiti dell’EBITDA (capex, circolante) o le eccezioni settoriali.")
    ]
  },
  {
    id: 'iq-val-bank',
    type: 'technical',
    topic: 'valuation',
    difficulty: 3,
    seconds: 90,
    prompt: t("How would you value a bank differently from an industrial company?", "Come valuteresti una banca in modo diverso da un’azienda industriale?"),
    reference: t(
      "For a bank, **debt is raw material, not financing** — deposits and borrowings fund the loan book — so EV and EBITDA are meaningless; you value **equity directly**.\n\n- **Multiples:** P/E and **P/BV or P/TBV**, with P/TBV interpreted against **return on tangible equity** relative to the cost of equity.\n- **Intrinsic:** a **dividend discount model** (or excess capital model), where distributable cash is constrained by **regulatory capital** — dividends are what can be paid while keeping the CET1 ratio at its target.\n\nKey drivers you discuss: net interest margin, asset quality and cost of risk, cost/income ratio and capital ratios.",
      "Per una banca **il debito è materia prima, non finanziamento** — depositi e raccolta finanziano gli impieghi — quindi EV ed EBITDA non hanno senso; si valuta **direttamente l’equity**.\n\n- **Multipli:** P/E e **P/BV o P/TBV**, con il P/TBV letto rispetto al **rendimento sul patrimonio tangibile (ROTE)** confrontato con il costo dell’equity.\n- **Intrinseco:** un **dividend discount model** (o excess capital model), in cui la cassa distribuibile è vincolata dal **capitale regolamentare** — i dividendi sono ciò che si può distribuire mantenendo il CET1 ratio al target.\n\nDriver chiave da discutere: margine di interesse, qualità degli attivi e costo del rischio, cost/income e coefficienti patrimoniali."
    ),
    rubric: [
      ess("Explains why EV/EBITDA does not apply (debt is operational).", "Spiega perché l’EV/EBITDA non si applica (il debito è operativo)."),
      ess("Uses equity-based methods: P/E, P/BV or P/TBV, DDM.", "Usa metodi sull’equity: P/E, P/BV o P/TBV, DDM."),
      opt("Links P/TBV to ROTE vs cost of equity.", "Collega il P/TBV al ROTE rispetto al costo dell’equity."),
      opt("Mentions regulatory capital constraining distributions.", "Cita il capitale regolamentare come vincolo alle distribuzioni.")
    ]
  },
  {
    id: 'iq-val-implied-ev',
    type: 'technical',
    topic: 'valuation',
    difficulty: 1,
    seconds: 45,
    prompt: t(
      "Your target has LTM EBITDA of €80m. The median EV/EBITDA of the peer group is 9.0x. What is the implied enterprise value (€m)?",
      "Il target ha EBITDA LTM di €80m. La mediana EV/EBITDA dei comparabili è 9,0x. Qual è l’enterprise value implicito (€m)?"
    ),
    reference: t(
      "Implied EV = 80 × 9.0 = **€720m**.\n\nI would present it as a range rather than a point — say using the 25th–75th percentile of the peer multiples — and check that LTM EBITDA is adjusted for one-offs and calculated consistently with the peers (same accounting basis, e.g. pre- or post-IFRS 16).",
      "EV implicito = 80 × 9,0 = **€720m**.\n\nLo presenterei come intervallo e non come valore puntuale — ad esempio usando il 25°–75° percentile dei multipli dei peer — e verificherei che l’EBITDA LTM sia rettificato per le poste non ricorrenti e calcolato coerentemente con i peer (stessa base contabile, ad es. pre o post IFRS 16)."
    ),
    rubric: [
      ess("Correct answer: €720m.", "Risposta corretta: €720m."),
      opt("Suggests presenting a range, not a point estimate.", "Suggerisce di presentare un intervallo, non un valore puntuale."),
      opt("Mentions adjusting EBITDA for one-offs and consistency.", "Cita la rettifica dell’EBITDA per poste non ricorrenti e la coerenza.")
    ],
    numeric: { answer: 720, unit: '€m', tolerance: { abs: 0.5 }, verify: { fn: 'product', args: [80, 9] } }
  },
  {
    id: 'iq-val-same-ev-ebitda-diff-pe',
    type: 'technical',
    topic: 'valuation',
    difficulty: 3,
    seconds: 90,
    prompt: t(
      "Two companies trade at the same EV/EBITDA but very different P/E multiples. What could explain this?",
      "Due società trattano allo stesso EV/EBITDA ma con P/E molto diversi. Cosa può spiegarlo?"
    ),
    reference: t(
      "P/E sits below a lot of line items that EBITDA ignores, so the difference must come from somewhere between EBITDA and net income, or from the capital structure:\n\n- **Leverage:** more debt means more interest, lower net income, and a smaller equity value — this changes P/E in either direction depending on the cost of debt versus the earnings yield.\n- **D&A:** a capital-intensive company or one with large acquisition amortisation has lower net income for the same EBITDA → higher P/E.\n- **Tax rates** and jurisdictions.\n- **Non-operating income or one-offs**, such as interest on a large cash pile or equity-method income.\n\nThat is exactly why bankers like EV/EBITDA for comparing operations.",
      "Il P/E sta sotto molte voci che l’EBITDA ignora, quindi la differenza deve venire da qualcosa tra EBITDA e utile netto, o dalla struttura del capitale:\n\n- **Leva:** più debito significa più interessi, utile più basso ed equity value più piccolo — il P/E può muoversi in entrambe le direzioni a seconda del costo del debito rispetto all’earnings yield.\n- **Ammortamenti:** una società capital-intensive o con forti ammortamenti da acquisizioni ha utile più basso a parità di EBITDA → P/E più alto.\n- **Aliquote fiscali** e giurisdizioni.\n- **Proventi non operativi o poste non ricorrenti**, come interessi su molta cassa o risultati di partecipate a patrimonio netto.\n\nÈ proprio per questo che i banker preferiscono l’EV/EBITDA per confrontare l’operatività."
    ),
    rubric: [
      ess("Identifies capital structure/leverage as a driver.", "Identifica struttura del capitale/leva come driver."),
      ess("Identifies items between EBITDA and net income (D&A, tax).", "Identifica le voci tra EBITDA e utile netto (ammortamenti, imposte)."),
      opt("Mentions non-operating income or one-offs.", "Cita proventi non operativi o poste non ricorrenti.")
    ]
  }
];

/* ------------------------------------------------------------------ */
/* DCF                                                                 */
/* ------------------------------------------------------------------ */

const dcf: InterviewQuestion[] = [
  {
    id: 'iq-dcf-walk',
    type: 'technical',
    topic: 'dcf',
    difficulty: 1,
    seconds: 120,
    prompt: t("Walk me through a DCF.", "Mi illustri un DCF."),
    reference: t(
      "A DCF values a company as the **present value of its future free cash flows**.\n\n1. **Project unlevered free cash flow** for 5–10 years: EBIT × (1 − tax) + D&A − capex − increase in working capital, driven by revenue growth and margin assumptions.\n2. **Calculate a discount rate**, usually WACC, reflecting the cost of equity (CAPM) and after-tax cost of debt weighted by target capital structure.\n3. **Estimate a terminal value** at the end of the forecast, using either the perpetuity growth method or an exit multiple.\n4. **Discount** the cash flows and terminal value to today and sum them to get **enterprise value**.\n5. Bridge to **equity value** by subtracting net debt and other claims, and divide by diluted shares for an implied share price.\n\nFinally, run **sensitivities** on WACC and terminal growth or multiple.",
      "Un DCF valuta un’azienda come **valore attuale dei suoi free cash flow futuri**.\n\n1. **Proiettare l’unlevered free cash flow** per 5–10 anni: EBIT × (1 − aliquota) + ammortamenti − capex − aumento del capitale circolante, guidati da ipotesi di crescita dei ricavi e marginalità.\n2. **Calcolare il tasso di attualizzazione**, di solito il WACC, che riflette costo dell’equity (CAPM) e costo del debito al netto delle imposte, pesati per la struttura del capitale target.\n3. **Stimare il terminal value** a fine piano, con il metodo della crescita perpetua o con un multiplo di uscita.\n4. **Attualizzare** flussi e terminal value a oggi e sommarli per ottenere l’**enterprise value**.\n5. Passare all’**equity value** sottraendo la posizione finanziaria netta e gli altri diritti, e dividere per le azioni diluite per un prezzo implicito.\n\nInfine, **analisi di sensitività** su WACC e crescita terminale o multiplo."
    ),
    rubric: [
      ess("Projects unlevered FCF with the correct components.", "Proietta l’unlevered FCF con le componenti corrette."),
      ess("Discounts at WACC (explains briefly).", "Attualizza al WACC (con breve spiegazione)."),
      ess("Includes terminal value with one of the two methods.", "Include il terminal value con uno dei due metodi."),
      ess("Sums PVs to EV and bridges to equity value / share price.", "Somma i valori attuali in EV e passa a equity value / prezzo per azione."),
      opt("Mentions sensitivity analysis.", "Cita l’analisi di sensitività.")
    ],
    followUps: [
      t("Why do we use unlevered rather than levered free cash flow?", "Perché si usa il free cash flow unlevered e non levered?"),
      t("What typically drives most of the value in a DCF?", "Cosa guida tipicamente la maggior parte del valore in un DCF?")
    ]
  },
  {
    id: 'iq-dcf-ufcf-calc',
    type: 'technical',
    topic: 'dcf',
    difficulty: 1,
    seconds: 60,
    prompt: t(
      "EBIT is €100m, tax rate 25%, D&A €20m, capex €30m and working capital increases by €10m. What is unlevered free cash flow (€m)?",
      "L’EBIT è €100m, aliquota 25%, ammortamenti €20m, capex €30m e il capitale circolante aumenta di €10m. Qual è l’unlevered free cash flow (€m)?"
    ),
    reference: t(
      "UFCF = EBIT × (1 − t) + D&A − capex − ΔNWC\n= 100 × 0.75 + 20 − 30 − 10\n= 75 + 20 − 30 − 10 = **€55m**.\n\nNote I tax EBIT, not EBT: unlevered FCF ignores interest so it is available to all capital providers; the tax benefit of debt is captured in the after-tax cost of debt in WACC.",
      "UFCF = EBIT × (1 − t) + ammortamenti − capex − ΔCCN\n= 100 × 0,75 + 20 − 30 − 10\n= 75 + 20 − 30 − 10 = **€55m**.\n\nNoti che tasso l’EBIT, non l’utile ante imposte: l’unlevered FCF ignora gli interessi perché è a disposizione di tutti i finanziatori; il beneficio fiscale del debito è catturato nel costo del debito netto nel WACC."
    ),
    rubric: [
      ess("Correct answer: €55m.", "Risposta corretta: €55m."),
      ess("Uses NOPAT (EBIT × (1 − t)), not net income.", "Usa il NOPAT (EBIT × (1 − t)), non l’utile netto."),
      opt("Explains where the debt tax shield is captured (WACC).", "Spiega dove è catturato lo scudo fiscale del debito (WACC).")
    ],
    numeric: { answer: 55, unit: '€m', tolerance: { abs: 0.1 }, verify: { fn: 'unleveredFCF', args: [100, 0.25, 20, 30, 10] } }
  },
  {
    id: 'iq-dcf-wacc',
    type: 'technical',
    topic: 'dcf',
    difficulty: 1,
    seconds: 90,
    prompt: t(
      "What is WACC? Calculate it for a company with €600m equity and €400m debt (market values), cost of equity 10%, pre-tax cost of debt 5%, tax rate 25%.",
      "Cos’è il WACC? Calcolalo per un’azienda con €600m di equity e €400m di debito (valori di mercato), costo dell’equity 10%, costo del debito ante imposte 5%, aliquota 25%."
    ),
    reference: t(
      "WACC is the **blended required return of all capital providers**, weighted by market values — the rate at which we discount unlevered free cash flow.\n\nWACC = E/V × Re + D/V × Rd × (1 − t)\n= 60% × 10% + 40% × 5% × 0.75\n= 6.0% + 1.5% = **7.5%**.\n\nThe cost of debt is taken after tax because interest is deductible. In practice you use a **target** capital structure, often based on peers, rather than the current one.",
      "Il WACC è il **rendimento richiesto medio di tutti i finanziatori**, ponderato per i valori di mercato — il tasso con cui si attualizza l’unlevered free cash flow.\n\nWACC = E/V × Re + D/V × Rd × (1 − t)\n= 60% × 10% + 40% × 5% × 0,75\n= 6,0% + 1,5% = **7,5%**.\n\nIl costo del debito si considera al netto delle imposte perché gli interessi sono deducibili. In pratica si usa una struttura del capitale **target**, spesso basata sui peer, e non quella attuale."
    ),
    rubric: [
      ess("Correct definition and formula with after-tax cost of debt.", "Definizione e formula corrette con costo del debito al netto delle imposte."),
      ess("Correct answer: 7.5%.", "Risposta corretta: 7,5%."),
      opt("Mentions market-value / target capital structure weights.", "Cita i pesi a valori di mercato / struttura target.")
    ],
    numeric: { answer: 7.5, unit: '%', tolerance: { abs: 0.05 }, verify: { fn: 'wacc', args: [600, 400, 10, 5, 0.25] } }
  },
  {
    id: 'iq-dcf-cost-of-equity',
    type: 'technical',
    topic: 'dcf',
    difficulty: 1,
    seconds: 75,
    prompt: t(
      "How do you calculate the cost of equity? Compute it with a 4% risk-free rate, beta of 1.2 and a 5% equity risk premium.",
      "Come si calcola il costo dell’equity? Calcolalo con tasso risk-free 4%, beta 1,2 e premio per il rischio azionario 5%."
    ),
    reference: t(
      "Using the **CAPM**: cost of equity = risk-free rate + beta × equity risk premium.\n\n= 4% + 1.2 × 5% = 4% + 6% = **10%**.\n\n- The **risk-free rate** is usually the yield on a long-dated government bond in the currency of the cash flows.\n- **Beta** measures sensitivity to the market; for a private company you take peers’ betas, unlever them, and relever at the target’s capital structure.\n- The **ERP** is the excess return investors require for holding equities over risk-free assets.\n\nSome practitioners add a size or country risk premium.",
      "Con il **CAPM**: costo dell’equity = tasso risk-free + beta × premio per il rischio azionario.\n\n= 4% + 1,2 × 5% = 4% + 6% = **10%**.\n\n- Il **risk-free** è di solito il rendimento di un titolo di Stato a lunga scadenza nella valuta dei flussi.\n- Il **beta** misura la sensibilità al mercato; per una società non quotata si prendono i beta dei peer, si “de-leverano” e si “ri-leverano” alla struttura del capitale del target.\n- L’**ERP** è l’extra-rendimento richiesto per detenere azioni anziché attività prive di rischio.\n\nAlcuni operatori aggiungono un premio dimensionale o un premio rischio paese."
    ),
    rubric: [
      ess("States CAPM correctly.", "Enuncia correttamente il CAPM."),
      ess("Correct answer: 10%.", "Risposta corretta: 10%."),
      opt("Explains sourcing of each input (government bond, peer beta, ERP).", "Spiega da dove si prende ciascun input (titolo di Stato, beta dei peer, ERP).")
    ],
    numeric: { answer: 10, unit: '%', tolerance: { abs: 0.05 }, verify: { fn: 'capm', args: [4, 1.2, 5] } }
  },
  {
    id: 'iq-dcf-unlever-beta',
    type: 'technical',
    topic: 'dcf',
    difficulty: 2,
    seconds: 90,
    prompt: t(
      "A peer has a levered beta of 1.2, a debt-to-equity ratio of 50% and a 25% tax rate. What is its unlevered beta? Why do we unlever and relever?",
      "Un peer ha beta levered 1,2, rapporto debito/equity del 50% e aliquota 25%. Qual è il suo beta unlevered? Perché si fa unlever e relever?"
    ),
    reference: t(
      "Using Hamada: βu = βL / (1 + (1 − t) × D/E) = 1.2 / (1 + 0.75 × 0.5) = 1.2 / 1.375 ≈ **0.87**.\n\nObserved betas include **financial risk** from each company’s leverage. To compare peers, you strip it out to get the **asset (business) beta**, take the median of the peers, then **relever** it at the target’s own or target capital structure: βL = βu × (1 + (1 − t) × D/E).\n\nThat gives a beta that reflects the target’s business risk and its financing.",
      "Con Hamada: βu = βL / (1 + (1 − t) × D/E) = 1,2 / (1 + 0,75 × 0,5) = 1,2 / 1,375 ≈ **0,87**.\n\nI beta osservati includono il **rischio finanziario** dovuto alla leva di ciascuna società. Per confrontare i peer lo si elimina e si ottiene il **beta delle attività (di business)**, si prende la mediana dei peer e poi lo si **ri-leva** alla struttura del capitale del target: βL = βu × (1 + (1 − t) × D/E).\n\nSi ottiene così un beta che riflette il rischio di business del target e il suo finanziamento."
    ),
    rubric: [
      ess("Correct unlevered beta ≈ 0.87.", "Beta unlevered corretto ≈ 0,87."),
      ess("Explains removing financial risk to compare business risk.", "Spiega l’eliminazione del rischio finanziario per confrontare il rischio di business."),
      opt("Describes relevering at the target capital structure.", "Descrive il relever alla struttura del capitale target.")
    ],
    numeric: { answer: 0.87, tolerance: { abs: 0.01 }, verify: { fn: 'unleverBeta', args: [1.2, 0.25, 0.5] } }
  },
  {
    id: 'iq-dcf-terminal-value',
    type: 'technical',
    topic: 'dcf',
    difficulty: 2,
    seconds: 90,
    prompt: t(
      "What are the two ways to calculate terminal value? Using the perpetuity growth method, what is the terminal value if final-year FCF is €100m, WACC is 10% and long-term growth is 2%?",
      "Quali sono i due modi per calcolare il terminal value? Con il metodo della crescita perpetua, qual è il terminal value se il FCF dell’ultimo anno è €100m, il WACC 10% e la crescita di lungo periodo 2%?"
    ),
    reference: t(
      "1. **Perpetuity growth (Gordon):** TV = FCF(n) × (1 + g) / (WACC − g).\n2. **Exit multiple:** TV = final-year EBITDA × an exit EV/EBITDA multiple, usually based on current trading comps.\n\nHere: TV = 100 × 1.02 / (10% − 2%) = 102 / 0.08 = **€1,275m**, at the end of the final year — it must then be discounted back.\n\nI would cross-check each method against the other: the implied exit multiple from the Gordon TV, and the implied growth rate from the multiple. Long-term growth should not exceed long-run nominal GDP growth.",
      "1. **Crescita perpetua (Gordon):** TV = FCF(n) × (1 + g) / (WACC − g).\n2. **Multiplo di uscita:** TV = EBITDA dell’ultimo anno × un multiplo EV/EBITDA di uscita, di solito basato sulle trading comps attuali.\n\nQui: TV = 100 × 1,02 / (10% − 2%) = 102 / 0,08 = **€1.275m**, alla fine dell’ultimo anno — va poi attualizzato.\n\nVerificherei un metodo con l’altro: il multiplo di uscita implicito nel TV di Gordon e la crescita implicita nel multiplo. La crescita di lungo periodo non dovrebbe superare la crescita nominale di lungo periodo del PIL."
    ),
    rubric: [
      ess("Names perpetuity growth and exit multiple methods.", "Cita il metodo della crescita perpetua e del multiplo di uscita."),
      ess("Correct answer: €1,275m (grows FCF by one year).", "Risposta corretta: €1.275m (FCF fatto crescere di un anno)."),
      opt("Notes the TV must be discounted from the end of the forecast.", "Osserva che il TV va attualizzato dalla fine del piano."),
      opt("Mentions cross-checking implied multiple / implied growth.", "Cita la verifica incrociata di multiplo / crescita impliciti.")
    ],
    numeric: { answer: 1275, unit: '€m', tolerance: { abs: 1 }, verify: { fn: 'terminalValueGordon', args: [100, 0.1, 0.02] } }
  },
  {
    id: 'iq-dcf-tv-share',
    type: 'technical',
    topic: 'dcf',
    difficulty: 2,
    seconds: 75,
    prompt: t("Terminal value is often 60–80% of a DCF’s value. Is that a problem? How do you deal with it?", "Il terminal value pesa spesso il 60–80% del valore di un DCF. È un problema? Come lo gestisci?"),
    reference: t(
      "It is normal — a business is worth more than its first five years of cash flows — but it means the valuation is **highly sensitive** to a few assumptions: terminal growth, exit multiple and WACC.\n\nTo manage it:\n- Make sure the final forecast year is **normalised** (steady-state margins, capex ≈ D&A plus growth, stable working capital).\n- Use a **longer forecast** for high-growth companies so they reach steady state.\n- **Cross-check** both TV methods (implied multiple vs implied growth).\n- Present **sensitivity tables** rather than a single number.",
      "È normale — un’azienda vale più dei suoi primi cinque anni di flussi — ma significa che la valutazione è **molto sensibile** a poche ipotesi: crescita terminale, multiplo di uscita e WACC.\n\nPer gestirlo:\n- Assicurarsi che l’ultimo anno di piano sia **normalizzato** (margini a regime, capex ≈ ammortamenti più crescita, circolante stabile).\n- Usare un **orizzonte più lungo** per le società ad alta crescita, finché arrivano a regime.\n- **Verificare** i due metodi di TV tra loro (multiplo implicito vs crescita implicita).\n- Presentare **tabelle di sensitività** invece di un unico numero."
    ),
    rubric: [
      ess("Recognises it is normal but creates sensitivity to few assumptions.", "Riconosce che è normale ma crea sensibilità a poche ipotesi."),
      ess("Gives at least two mitigation steps (normalised final year, cross-checks, sensitivities).", "Indica almeno due rimedi (ultimo anno normalizzato, verifiche incrociate, sensitività)."),
      opt("Mentions extending the forecast for high-growth companies.", "Cita l’allungamento del piano per società ad alta crescita.")
    ]
  },
  {
    id: 'iq-dcf-mid-year',
    type: 'technical',
    topic: 'dcf',
    difficulty: 2,
    seconds: 60,
    prompt: t("What is the mid-year convention and how does it affect valuation?", "Cos’è la mid-year convention e come influisce sulla valutazione?"),
    reference: t(
      "A standard DCF discounts each year’s cash flow as if it arrived on the last day of the year. In reality cash comes in **throughout the year**, so the mid-year convention discounts each year’s FCF by half a period less — year 1 at t = 0.5, year 2 at t = 1.5, and so on.\n\nBecause cash flows are discounted for less time, the **valuation goes up** slightly.\n\nWith the perpetuity growth method the terminal value is typically discounted consistently with mid-year timing as well, whereas with the exit multiple method it is discounted from the end of the final year, since the multiple reflects a sale at that date.",
      "Un DCF standard attualizza il flusso di ogni anno come se arrivasse l’ultimo giorno dell’anno. In realtà la cassa arriva **durante tutto l’anno**, quindi la mid-year convention attualizza il FCF di ogni anno di mezzo periodo in meno — anno 1 a t = 0,5, anno 2 a t = 1,5 e così via.\n\nPoiché i flussi sono attualizzati per meno tempo, **la valutazione sale** leggermente.\n\nCon il metodo della crescita perpetua il terminal value si attualizza di solito coerentemente con la logica di metà anno, mentre con il multiplo di uscita si attualizza dalla fine dell’ultimo anno, perché il multiplo rappresenta una vendita a quella data."
    ),
    rubric: [
      ess("Explains cash flows are assumed to arrive mid-period (t = 0.5, 1.5…).", "Spiega che i flussi si ipotizzano a metà periodo (t = 0,5, 1,5…)."),
      ess("States valuation increases.", "Indica che la valutazione aumenta."),
      opt("Discusses terminal value timing under each method.", "Discute la tempistica del terminal value con ciascun metodo.")
    ]
  },
  {
    id: 'iq-dcf-levered-vs-unlevered',
    type: 'technical',
    topic: 'dcf',
    difficulty: 2,
    seconds: 75,
    prompt: t("What is the difference between a levered and an unlevered DCF?", "Qual è la differenza tra un DCF levered e unlevered?"),
    reference: t(
      "**Unlevered DCF:** discount **unlevered FCF** (before interest, available to all capital providers) at **WACC** → enterprise value; then subtract net debt to reach equity value.\n\n**Levered DCF:** discount **levered FCF** (after interest and net debt repayments, available to equity only) at the **cost of equity** → equity value directly.\n\nThe key is consistency: cash flow, discount rate and resulting value must refer to the same capital providers. Bankers mostly use unlevered DCFs because they separate operations from financing; levered DCFs are used for banks and highly structured situations.",
      "**DCF unlevered:** si attualizza l’**unlevered FCF** (prima degli interessi, per tutti i finanziatori) al **WACC** → enterprise value; poi si sottrae la posizione finanziaria netta per l’equity value.\n\n**DCF levered:** si attualizza il **levered FCF** (dopo interessi e rimborsi netti di debito, per i soli azionisti) al **costo dell’equity** → direttamente l’equity value.\n\nLa chiave è la coerenza: flusso, tasso e valore risultante devono riferirsi agli stessi finanziatori. I banker usano soprattutto il DCF unlevered perché separa operatività e finanziamento; quello levered si usa per le banche e in situazioni molto strutturate."
    ),
    rubric: [
      ess("Unlevered FCF at WACC gives EV.", "Unlevered FCF al WACC dà l’EV."),
      ess("Levered FCF at cost of equity gives equity value.", "Levered FCF al costo dell’equity dà l’equity value."),
      opt("Explains consistency principle and when each is used.", "Spiega il principio di coerenza e quando si usa ciascuno.")
    ]
  },
  {
    id: 'iq-dcf-sensitivities',
    type: 'technical',
    topic: 'dcf',
    difficulty: 3,
    seconds: 90,
    prompt: t(
      "Would a 1% increase in revenue growth or a 1% decrease in WACC have a bigger impact on a DCF?",
      "Avrebbe un impatto maggiore su un DCF un aumento dell’1% della crescita dei ricavi o una riduzione dell’1% del WACC?"
    ),
    reference: t(
      "In most cases the **1% decrease in WACC** has the bigger impact. WACC affects the discount factor on **every** cash flow and, crucially, the **terminal value**, which is usually the majority of value — and in the Gordon formula a 1-point change in (WACC − g) is a large relative change in the denominator.\n\nA 1% change in revenue growth only compounds through the forecast period and flows through margins; its effect on the terminal value is smaller unless it also changes the terminal-year base materially.\n\nThe exception: a very long forecast or a very high-growth company, where growth assumptions dominate. I would show both in a sensitivity table.",
      "Nella maggior parte dei casi ha più impatto la **riduzione dell’1% del WACC**. Il WACC incide sul fattore di sconto di **ogni** flusso e soprattutto sul **terminal value**, che di solito è la maggior parte del valore — e nella formula di Gordon un punto in meno di (WACC − g) è una variazione relativa grande del denominatore.\n\nUn punto di crescita in più dei ricavi si capitalizza solo nell’orizzonte di piano e passa attraverso i margini; il suo effetto sul terminal value è minore, a meno che modifichi molto la base dell’ultimo anno.\n\nL’eccezione: un piano molto lungo o una società ad altissima crescita, dove dominano le ipotesi di crescita. Mostrerei entrambe in una tabella di sensitività."
    ),
    rubric: [
      ess("Answers that the WACC change usually matters more.", "Risponde che di solito conta di più la variazione del WACC."),
      ess("Explains via terminal value / discounting every cash flow.", "Lo spiega tramite il terminal value / l’attualizzazione di ogni flusso."),
      opt("Acknowledges exceptions (high growth, long forecast).", "Riconosce le eccezioni (alta crescita, piano lungo).")
    ]
  }
];

/* ------------------------------------------------------------------ */
/* M&A                                                                 */
/* ------------------------------------------------------------------ */

const ma: InterviewQuestion[] = [
  {
    id: 'iq-ma-why-buy',
    type: 'technical',
    topic: 'ma',
    difficulty: 1,
    seconds: 75,
    prompt: t("Why would a company acquire another company?", "Perché un’azienda dovrebbe acquisirne un’altra?"),
    reference: t(
      "Ultimately because the buyer believes the target is **worth more under its ownership than the price paid** — i.e. it creates value for its shareholders. Typical rationales:\n\n- **Growth:** faster than organic — new markets, geographies, products or customers.\n- **Synergies:** cost synergies (overlapping functions, procurement, footprint) and revenue synergies (cross-selling, pricing).\n- **Capabilities:** technology, IP, talent, or vertical integration of the supply chain.\n- **Market position:** consolidation, scale and pricing power.\n- **Financial reasons:** EPS accretion, tax attributes, or deploying excess cash — weaker on their own.\n\nThe deal only works if value from these exceeds the premium paid.",
      "In ultima analisi perché l’acquirente ritiene che il target **valga di più sotto la sua proprietà rispetto al prezzo pagato** — cioè crei valore per i suoi azionisti. Motivazioni tipiche:\n\n- **Crescita:** più rapida di quella organica — nuovi mercati, aree geografiche, prodotti o clienti.\n- **Sinergie:** di costo (funzioni sovrapposte, acquisti, rete) e di ricavo (cross-selling, prezzi).\n- **Competenze:** tecnologia, proprietà intellettuale, persone, o integrazione verticale della filiera.\n- **Posizionamento:** consolidamento, scala e potere di prezzo.\n- **Motivi finanziari:** accrescimento dell’EPS, benefici fiscali o impiego di cassa in eccesso — più deboli da soli.\n\nL’operazione funziona solo se il valore creato supera il premio pagato."
    ),
    rubric: [
      ess("Frames it as value creation: worth more than price paid.", "Lo inquadra come creazione di valore: vale più del prezzo pagato."),
      ess("Gives at least three distinct strategic rationales.", "Indica almeno tre motivazioni strategiche distinte."),
      opt("Distinguishes cost and revenue synergies.", "Distingue sinergie di costo e di ricavo."),
      opt("Notes purely financial rationales are weaker.", "Osserva che le motivazioni puramente finanziarie sono più deboli.")
    ]
  },
  {
    id: 'iq-ma-accretion-walk',
    type: 'technical',
    topic: 'ma',
    difficulty: 1,
    seconds: 120,
    prompt: t("Walk me through a basic accretion/dilution analysis.", "Mi illustri un’analisi base di accrescimento/diluizione."),
    reference: t(
      "The question is whether the buyer’s **EPS goes up or down** after the deal.\n\n1. Start with **purchase price** and the **funding mix** — cash on hand, new debt, new shares.\n2. **Combine net incomes** of buyer and target.\n3. Adjust for the cost of funding, after tax: **foregone interest on cash**, **interest on new debt**; and for deal effects: **synergies**, and **new D&A/amortisation** from PPA write-ups.\n4. Compute pro forma shares: buyer shares **plus new shares issued**.\n5. Pro forma EPS = pro forma net income / pro forma shares; compare with standalone EPS.\n\nIf higher, the deal is **accretive**; if lower, **dilutive**. I would also compute break-even synergies.",
      "La domanda è se l’**EPS dell’acquirente sale o scende** dopo l’operazione.\n\n1. Si parte da **prezzo** e **mix di finanziamento** — cassa disponibile, nuovo debito, nuove azioni.\n2. Si **sommano gli utili netti** di acquirente e target.\n3. Si rettifica per il costo del finanziamento, al netto delle imposte: **interessi attivi persi sulla cassa**, **interessi sul nuovo debito**; e per gli effetti del deal: **sinergie** e **nuovi ammortamenti** da rivalutazioni della PPA.\n4. Azioni pro forma: azioni dell’acquirente **più nuove azioni emesse**.\n5. EPS pro forma = utile pro forma / azioni pro forma; confronto con l’EPS stand-alone.\n\nSe è più alto l’operazione è **accrescitiva**; se è più basso, **diluitiva**. Calcolerei anche le sinergie di pareggio."
    ),
    rubric: [
      ess("Defines accretion/dilution as change in acquirer EPS.", "Definisce accrescimento/diluizione come variazione dell’EPS dell’acquirente."),
      ess("Combines net incomes and adjusts for after-tax financing costs.", "Somma gli utili netti e rettifica per i costi di finanziamento al netto delle imposte."),
      ess("Adds new shares issued to the share count.", "Aggiunge le nuove azioni emesse al numero di azioni."),
      opt("Mentions synergies and PPA-related D&A.", "Cita sinergie e ammortamenti legati alla PPA."),
      opt("Mentions break-even synergies.", "Cita le sinergie di pareggio.")
    ],
    followUps: [t("What is the quick rule of thumb for an all-stock deal?", "Qual è la regola veloce per un’operazione interamente in azioni?")]
  },
  {
    id: 'iq-ma-accretion-stock',
    type: 'technical',
    topic: 'ma',
    difficulty: 2,
    seconds: 120,
    prompt: t(
      "BuyerCo has net income of $100m, 100m shares and a share price of $20. It acquires TargetCo (net income $30m) for $450m, paid entirely in new BuyerCo shares. Ignoring synergies and fees, what is pro forma EPS ($)?",
      "BuyerCo ha utile netto di $100m, 100m di azioni e prezzo per azione di $20. Acquisisce TargetCo (utile netto $30m) per $450m, interamente in nuove azioni BuyerCo. Senza sinergie né commissioni, qual è l’EPS pro forma ($)?"
    ),
    reference: t(
      "Standalone EPS = 100 / 100 = **$1.00**; BuyerCo’s P/E = 20 / 1 = 20x.\n\nNew shares = 450 / 20 = **22.5m**. Pro forma net income = 100 + 30 = **$130m**. Pro forma shares = 122.5m.\n\nPro forma EPS = 130 / 122.5 ≈ **$1.06**, about **6% accretive**.\n\nShortcut: in an all-stock deal it is accretive when the buyer’s P/E (20x) exceeds the P/E paid for the target (450 / 30 = 15x) — the buyer is “buying” earnings more cheaply than its own.",
      "EPS stand-alone = 100 / 100 = **$1,00**; P/E di BuyerCo = 20 / 1 = 20x.\n\nNuove azioni = 450 / 20 = **22,5m**. Utile pro forma = 100 + 30 = **$130m**. Azioni pro forma = 122,5m.\n\nEPS pro forma = 130 / 122,5 ≈ **$1,06**, circa **6% accrescitivo**.\n\nScorciatoia: in un’operazione tutta in azioni c’è accrescimento quando il P/E dell’acquirente (20x) supera il P/E pagato per il target (450 / 30 = 15x) — l’acquirente “compra” utili a un prezzo più basso del proprio."
    ),
    rubric: [
      ess("Correct pro forma EPS ≈ $1.06 (6% accretive).", "EPS pro forma corretto ≈ $1,06 (6% accrescitivo)."),
      ess("Correctly computes 22.5m new shares.", "Calcola correttamente 22,5m di nuove azioni."),
      opt("Applies the P/E comparison shortcut (20x vs 15x).", "Applica la scorciatoia del confronto tra P/E (20x vs 15x).")
    ],
    numeric: {
      answer: 1.06,
      unit: '$',
      tolerance: { abs: 0.005 },
      verify: {
        fn: 'accretionDilution',
        args: [{ acquirerNetIncome: 100, acquirerShares: 100, targetNetIncome: 30, purchaseEquityValue: 450, pctStock: 1, acquirerSharePrice: 20, costOfDebt: 0, pctDebt: 0, foregoneInterestOnCash: 0, pctCash: 0, taxRate: 0.25 }],
        pick: 'proFormaEPS'
      }
    }
  },
  {
    id: 'iq-ma-accretion-debt',
    type: 'technical',
    topic: 'ma',
    difficulty: 2,
    seconds: 120,
    prompt: t(
      "Same deal — BuyerCo (net income $100m, 100m shares) buys TargetCo (net income $30m) for $450m — but now funded entirely with new debt at 6% pre-tax, 25% tax rate. What is pro forma EPS ($)?",
      "Stessa operazione — BuyerCo (utile netto $100m, 100m di azioni) acquista TargetCo (utile netto $30m) per $450m — ma ora finanziata interamente con nuovo debito al 6% ante imposte, aliquota 25%. Qual è l’EPS pro forma ($)?"
    ),
    reference: t(
      "Interest = 450 × 6% = $27m pre-tax, or 27 × 0.75 = **$20.25m** after tax.\n\nPro forma net income = 100 + 30 − 20.25 = **$109.75m**. No new shares, so EPS = 109.75 / 100 ≈ **$1.10** — about **10% accretive**, more than the stock deal.\n\nWhy: the after-tax cost of debt is 4.5%, below the target’s earnings yield of 30 / 450 = 6.7%, and well below the cost of issuing stock at a 5% earnings yield (1 / 20x). Debt is usually the cheapest funding source for EPS purposes — at the price of higher leverage and risk.",
      "Interessi = 450 × 6% = $27m ante imposte, cioè 27 × 0,75 = **$20,25m** al netto delle imposte.\n\nUtile pro forma = 100 + 30 − 20,25 = **$109,75m**. Nessuna nuova azione, quindi EPS = 109,75 / 100 ≈ **$1,10** — circa **10% accrescitivo**, più dell’operazione in azioni.\n\nPerché: il costo del debito netto è 4,5%, sotto l’earnings yield del target pari a 30 / 450 = 6,7%. Il “costo” delle azioni è invece l’earnings yield dell’acquirente, 1 / 20x = 5%. Il debito è di solito la fonte più economica ai fini dell’EPS — al prezzo di più leva e rischio."
    ),
    rubric: [
      ess("Correct pro forma EPS ≈ $1.10.", "EPS pro forma corretto ≈ $1,10."),
      ess("Uses after-tax interest ($20.25m).", "Usa gli interessi al netto delle imposte ($20,25m)."),
      opt("Compares after-tax cost of debt with target earnings yield.", "Confronta il costo del debito netto con l’earnings yield del target."),
      opt("Notes higher leverage/risk trade-off.", "Osserva il trade-off con più leva/rischio.")
    ],
    numeric: {
      answer: 1.0975,
      unit: '$',
      tolerance: { abs: 0.005 },
      verify: {
        fn: 'accretionDilution',
        args: [{ acquirerNetIncome: 100, acquirerShares: 100, targetNetIncome: 30, purchaseEquityValue: 450, pctStock: 0, acquirerSharePrice: 20, costOfDebt: 0.06, pctDebt: 1, foregoneInterestOnCash: 0, pctCash: 0, taxRate: 0.25 }],
        pick: 'proFormaEPS'
      }
    }
  },
  {
    id: 'iq-ma-stock-vs-cash',
    type: 'technical',
    topic: 'ma',
    difficulty: 2,
    seconds: 90,
    prompt: t("Why would an acquirer pay in stock rather than cash, and how would a seller think about it?", "Perché un acquirente dovrebbe pagare in azioni anziché in contanti e come la vede il venditore?"),
    reference: t(
      "**Buyer’s view — stock** makes sense when: its shares are **highly valued** (cheap currency); the deal is large relative to its balance sheet or it is already levered; it wants to **share risk** with the target’s shareholders if synergies are uncertain. **Cash** is preferred when the buyer has cash or cheap debt capacity, wants to avoid dilution and keep all upside.\n\n**Seller’s view:** cash offers **certainty** and a clean exit; stock gives participation in **upside** and synergies but exposes them to the buyer’s share price and is often tax-deferred in certain structures. It also signals: a buyer paying in stock may be telling you it thinks its shares are fully valued.",
      "**Lato acquirente — le azioni** hanno senso quando: le sue azioni sono **molto valutate** (moneta “cara”); l’operazione è grande rispetto al bilancio o è già indebitato; vuole **condividere il rischio** con gli azionisti del target se le sinergie sono incerte. **I contanti** sono preferibili quando l’acquirente ha cassa o capacità di debito a basso costo, vuole evitare diluizione e tenere tutto il potenziale rialzo.\n\n**Lato venditore:** i contanti danno **certezza** e un’uscita pulita; le azioni consentono di partecipare al **rialzo** e alle sinergie ma espongono al prezzo dell’acquirente e, in alcune strutture, permettono di differire le imposte. C’è anche un segnale: chi paga in azioni potrebbe ritenere le proprie azioni a valutazione piena."
    ),
    rubric: [
      ess("Gives buyer-side reasons for stock (valuation, leverage capacity, risk sharing).", "Indica le ragioni dell’acquirente per le azioni (valutazione, capacità di debito, condivisione del rischio)."),
      ess("Gives seller-side trade-off (certainty vs upside).", "Indica il trade-off del venditore (certezza vs rialzo)."),
      opt("Mentions signalling and/or tax considerations.", "Cita aspetti segnaletici e/o fiscali."),
      opt("Mentions EPS / cost of funding comparison.", "Cita il confronto tra EPS / costo del finanziamento.")
    ]
  },
  {
    id: 'iq-ma-synergies',
    type: 'technical',
    topic: 'ma',
    difficulty: 2,
    seconds: 90,
    prompt: t(
      "A deal is expected to deliver €20m of run-rate pre-tax cost synergies, with €30m of one-off integration costs. With a 25% tax rate and a 10% discount rate, treating synergies as a flat perpetuity, what are they worth (€m)?",
      "Un’operazione dovrebbe generare €20m di sinergie di costo a regime ante imposte, con €30m di costi di integrazione una tantum. Con aliquota 25% e tasso di sconto 10%, trattando le sinergie come perpetuità costante, quanto valgono (€m)?"
    ),
    reference: t(
      "After-tax synergies = 20 × 0.75 = €15m a year. Capitalised as a perpetuity at 10%: 15 / 0.10 = €150m. Less one-off costs of €30m → **€120m**.\n\nIn practice I would also phase them in over 2–3 years, haircut them (especially revenue synergies, which are less certain than cost synergies), and compare the value with the **premium paid**: if the premium exceeds the synergy value, the buyer’s shareholders are transferring value to the seller.",
      "Sinergie al netto delle imposte = 20 × 0,75 = €15m l’anno. Capitalizzate come perpetuità al 10%: 15 / 0,10 = €150m. Meno costi una tantum di €30m → **€120m**.\n\nIn pratica le farei entrare gradualmente in 2–3 anni, applicherei un haircut (soprattutto alle sinergie di ricavo, meno certe di quelle di costo) e confronterei il valore con il **premio pagato**: se il premio supera il valore delle sinergie, gli azionisti dell’acquirente trasferiscono valore al venditore."
    ),
    rubric: [
      ess("Correct answer: €120m.", "Risposta corretta: €120m."),
      ess("Taxes the synergies before capitalising them.", "Tassa le sinergie prima di capitalizzarle."),
      opt("Mentions phasing / haircuts and cost vs revenue synergy certainty.", "Cita entrata graduale / haircut e certezza delle sinergie di costo vs ricavo."),
      opt("Compares synergy value to the premium paid.", "Confronta il valore delle sinergie con il premio pagato.")
    ],
    numeric: { answer: 120, unit: '€m', tolerance: { abs: 0.5 }, verify: { fn: 'synergyValue', args: [20, 0.25, 0.1, 30] } }
  },
  {
    id: 'iq-ma-ppa-goodwill',
    type: 'technical',
    topic: 'ma',
    difficulty: 3,
    seconds: 120,
    prompt: t(
      "A buyer pays €500m for 100% of a target in a share deal. The target’s book net assets are €300m (no existing goodwill), and identifiable assets are written up by €100m to fair value with no tax step-up. Tax rate 25%. How much goodwill is created (€m)?",
      "Un acquirente paga €500m per il 100% di un target con un share deal. Il patrimonio netto contabile del target è €300m (nessun avviamento esistente) e le attività identificabili sono rivalutate di €100m al fair value, senza riconoscimento fiscale. Aliquota 25%. Quanto avviamento si genera (€m)?"
    ),
    reference: t(
      "In a share deal the tax basis does not step up, so the €100m write-up creates a **deferred tax liability** of 100 × 25% = €25m.\n\nFair value of identifiable net assets = 300 + 100 − 25 = **€375m**.\n\nGoodwill = 500 − 375 = **€125m**.\n\nPost-deal, the write-up is depreciated or amortised (reducing EPS), the DTL unwinds over the same period, and goodwill is tested for impairment under IFRS / US GAAP.",
      "In uno share deal il valore fiscale non si rivaluta, quindi la rivalutazione di €100m genera una **passività per imposte differite** di 100 × 25% = €25m.\n\nFair value delle attività nette identificabili = 300 + 100 − 25 = **€375m**.\n\nAvviamento = 500 − 375 = **€125m**.\n\nDopo il closing, la rivalutazione si ammortizza (riducendo l’EPS), la passività differita si riassorbe nello stesso periodo e l’avviamento è soggetto a impairment test secondo IFRS / US GAAP."
    ),
    rubric: [
      ess("Correct answer: €125m.", "Risposta corretta: €125m."),
      ess("Recognises the DTL of €25m on the write-up.", "Riconosce la passività differita di €25m sulla rivalutazione."),
      opt("Explains post-deal effects (extra D&A, DTL unwind, impairment testing).", "Spiega gli effetti post-deal (maggiori ammortamenti, rilascio della passività differita, impairment test).")
    ],
    numeric: { answer: 125, unit: '€m', tolerance: { abs: 0.5 }, verify: { fn: 'ppaGoodwill', args: [500, 300, 100, 0.25] } }
  },
  {
    id: 'iq-ma-accretive-bad',
    type: 'technical',
    topic: 'ma',
    difficulty: 3,
    seconds: 90,
    prompt: t("Can an accretive deal destroy value? Can a dilutive deal create value?", "Un’operazione accrescitiva può distruggere valore? E una diluitiva può crearne?"),
    reference: t(
      "Yes to both. **EPS accretion is an accounting test, not a value test.**\n\n- An all-debt deal can be accretive simply because after-tax debt is cheap, while the buyer **overpays** relative to the target’s intrinsic value, takes on excessive leverage, or buys a business with returns below its cost of capital. The P/E of the combined company may then fall.\n- A deal can be dilutive near-term — high-growth target bought on a high P/E, heavy PPA amortisation, integration costs — yet create value if the **return on invested capital eventually exceeds WACC** and synergies are real.\n\nThe right test is whether the PV of the target’s cash flows plus synergies exceeds the price paid.",
      "Sì a entrambe. **L’accrescimento dell’EPS è un test contabile, non di valore.**\n\n- Un’operazione tutta a debito può essere accrescitiva solo perché il debito netto costa poco, mentre l’acquirente **paga troppo** rispetto al valore intrinseco del target, si indebita eccessivamente o compra un business con rendimenti inferiori al costo del capitale. Il P/E della società combinata può allora scendere.\n- Un’operazione può essere diluitiva nel breve — target ad alta crescita comprato a P/E elevato, forti ammortamenti da PPA, costi di integrazione — e creare comunque valore se il **ROIC supera alla fine il WACC** e le sinergie sono reali.\n\nIl test giusto è se il valore attuale dei flussi del target più le sinergie supera il prezzo pagato."
    ),
    rubric: [
      ess("States accretion is an accounting measure, not value creation.", "Afferma che l’accrescimento è una misura contabile, non di creazione di valore."),
      ess("Gives an example of accretive-but-value-destroying.", "Fa un esempio di operazione accrescitiva che distrugge valore."),
      ess("Gives an example of dilutive-but-value-creating.", "Fa un esempio di operazione diluitiva che crea valore."),
      opt("States the correct value test (PV of cash flows + synergies vs price; ROIC vs WACC).", "Indica il test di valore corretto (valore attuale dei flussi + sinergie vs prezzo; ROIC vs WACC).")
    ]
  },
  {
    id: 'iq-ma-sell-side-process',
    type: 'technical',
    topic: 'ma',
    difficulty: 1,
    seconds: 90,
    prompt: t("Walk me through a typical sell-side M&A auction process.", "Mi illustri un tipico processo d’asta sell-side di M&A."),
    reference: t(
      "1. **Preparation:** the bank works with the seller on the equity story, a financial model, vendor due diligence and marketing materials — a **teaser** and an **information memorandum (CIM)** — and draws up a buyer list of strategics and sponsors.\n2. **First round:** teaser sent; interested parties sign an **NDA**, receive the IM and submit **non-binding indicative offers**.\n3. **Second round:** a shortlist gets **data room** access, management presentations and site visits, and marks up the draft **SPA**; they submit **binding offers**.\n4. **Negotiation and signing:** the seller picks a preferred bidder, negotiates the SPA and signs.\n5. **Closing** after conditions such as antitrust or foreign-investment clearance are satisfied.\n\nAnalysts build the model, materials and buyer lists, and run the data room.",
      "1. **Preparazione:** la banca lavora con il venditore su equity story, modello finanziario, vendor due diligence e materiali di marketing — **teaser** e **information memorandum (IM)** — e prepara la lista di potenziali acquirenti, industriali e fondi.\n2. **Prima fase:** invio del teaser; gli interessati firmano un **NDA**, ricevono l’IM e presentano **offerte non vincolanti**.\n3. **Seconda fase:** una short list accede alla **data room**, alle management presentation e ai sopralluoghi, e commenta la bozza di **SPA**; presenta **offerte vincolanti**.\n4. **Negoziazione e signing:** il venditore sceglie l’offerente preferito, negozia lo SPA e firma.\n5. **Closing** dopo l’avveramento delle condizioni, come le autorizzazioni antitrust o golden power.\n\nGli analyst costruiscono modello, materiali e liste di acquirenti, e gestiscono la data room."
    ),
    rubric: [
      ess("Correct sequence: preparation → first round (NDA, IOIs) → second round (data room, binding bids) → signing → closing.", "Sequenza corretta: preparazione → prima fase (NDA, offerte non vincolanti) → seconda fase (data room, offerte vincolanti) → signing → closing."),
      ess("Names key documents (teaser, CIM/IM, SPA).", "Nomina i documenti chiave (teaser, IM, SPA)."),
      opt("Mentions regulatory conditions between signing and closing.", "Cita le condizioni regolamentari tra signing e closing."),
      opt("Describes the analyst’s role.", "Descrive il ruolo dell’analyst.")
    ]
  }
];

/* ------------------------------------------------------------------ */
/* LBO                                                                 */
/* ------------------------------------------------------------------ */

const lbo: InterviewQuestion[] = [
  {
    id: 'iq-lbo-walk',
    type: 'technical',
    topic: 'lbo',
    difficulty: 1,
    seconds: 120,
    prompt: t("Walk me through a basic LBO model.", "Mi illustri un modello LBO di base."),
    reference: t(
      "In an LBO a financial sponsor buys a company using a **large amount of debt** and a smaller equity cheque, uses the company’s cash flows to pay down debt, and sells after 3–7 years.\n\n1. **Entry assumptions:** purchase price (EBITDA × entry multiple), fees, and a **sources & uses** table — debt tranches by leverage multiple, sponsor equity as the plug.\n2. **Operating projections:** revenue, EBITDA, capex, working capital → **free cash flow after interest**.\n3. **Debt schedule:** interest on each tranche, mandatory amortisation and cash sweep.\n4. **Exit:** exit EBITDA × exit multiple = exit EV, minus remaining net debt = exit equity.\n5. **Returns:** **MOIC** and **IRR** on the sponsor’s equity, with sensitivities on entry/exit multiple, leverage and growth.",
      "In un LBO un fondo acquista un’azienda usando **molto debito** e un assegno di equity più piccolo, usa i flussi dell’azienda per ripagare il debito e rivende dopo 3–7 anni.\n\n1. **Ipotesi di ingresso:** prezzo (EBITDA × multiplo di ingresso), commissioni e tabella **fonti e impieghi** — tranche di debito in multipli di leva, equity del fondo come variabile di chiusura.\n2. **Proiezioni operative:** ricavi, EBITDA, capex, circolante → **free cash flow dopo gli interessi**.\n3. **Piano del debito:** interessi per tranche, ammortamento obbligatorio e cash sweep.\n4. **Uscita:** EBITDA di uscita × multiplo di uscita = EV di uscita, meno debito netto residuo = equity di uscita.\n5. **Rendimenti:** **MOIC** e **IRR** sull’equity del fondo, con sensitività su multipli di ingresso/uscita, leva e crescita."
    ),
    rubric: [
      ess("Entry: purchase price and sources & uses with equity as plug.", "Ingresso: prezzo e fonti e impieghi con l’equity come chiusura."),
      ess("Projects cash flows used to pay down debt (debt schedule).", "Proietta i flussi usati per ripagare il debito (piano del debito)."),
      ess("Exit equity = exit EV − remaining net debt.", "Equity di uscita = EV di uscita − debito netto residuo."),
      ess("Calculates IRR and MOIC on sponsor equity.", "Calcola IRR e MOIC sull’equity del fondo."),
      opt("Mentions sensitivities.", "Cita le sensitività.")
    ],
    followUps: [t("Why does using more debt increase returns?", "Perché usare più debito aumenta i rendimenti?")]
  },
  {
    id: 'iq-lbo-candidate',
    type: 'technical',
    topic: 'lbo',
    difficulty: 1,
    seconds: 90,
    prompt: t("What makes a company a good LBO candidate?", "Cosa rende un’azienda un buon candidato per un LBO?"),
    reference: t(
      "Anything that lets the company **support a lot of debt safely** and offers routes to grow equity value:\n\n- **Stable, predictable cash flows** — recurring revenue, defensible market position, low cyclicality.\n- **Low capex and working capital needs**, so EBITDA converts into cash for debt paydown.\n- **Low existing leverage** and assets that can support borrowing.\n- **Operational improvement** opportunities — margin expansion, add-on acquisitions.\n- A **strong management team** aligned with the sponsor.\n- A **reasonable entry valuation** and credible **exit routes** (sale to a strategic, another sponsor, or IPO).",
      "Tutto ciò che permette all’azienda di **sostenere molto debito in sicurezza** e offre leve per far crescere l’equity:\n\n- **Flussi di cassa stabili e prevedibili** — ricavi ricorrenti, posizione difendibile, bassa ciclicità.\n- **Bassi fabbisogni di capex e circolante**, così l’EBITDA si converte in cassa per ripagare il debito.\n- **Bassa leva esistente** e attivi che possano sostenere il finanziamento.\n- Opportunità di **miglioramento operativo** — espansione dei margini, add-on.\n- Un **management solido** e allineato al fondo.\n- Una **valutazione d’ingresso ragionevole** e **vie d’uscita** credibili (vendita a un industriale, a un altro fondo o IPO)."
    ),
    rubric: [
      ess("Stable, predictable cash flows.", "Flussi di cassa stabili e prevedibili."),
      ess("Low capex / high cash conversion.", "Bassi capex / elevata conversione in cassa."),
      opt("Value creation levers (operational improvements, add-ons).", "Leve di creazione di valore (miglioramenti operativi, add-on)."),
      opt("Management, entry price and exit routes.", "Management, prezzo d’ingresso e vie d’uscita.")
    ]
  },
  {
    id: 'iq-lbo-leverage',
    type: 'technical',
    topic: 'lbo',
    difficulty: 2,
    seconds: 75,
    prompt: t("Why does using more leverage increase returns in an LBO? Is more debt always better?", "Perché più leva aumenta i rendimenti in un LBO? Più debito è sempre meglio?"),
    reference: t(
      "With more debt, the sponsor puts in a **smaller equity cheque** for the same purchase price, but keeps **all of the upside** in enterprise value after repaying lenders a fixed claim. As long as the business returns more than the after-tax cost of debt, the excess accrues to a smaller equity base, so IRR and MOIC rise. Interest is also tax-deductible, within limits such as interest-deductibility caps.\n\nNot always better: more debt means higher interest, tighter covenants, less flexibility and a higher risk of **default** if performance disappoints — losses are amplified too. Lenders also cap leverage based on cash flow and coverage.",
      "Con più debito il fondo investe un **assegno di equity più piccolo** a parità di prezzo, ma tiene **tutto il rialzo** dell’enterprise value dopo aver rimborsato ai creditori un diritto fisso. Finché il business rende più del costo del debito netto, l’eccedenza va a una base di equity più piccola, quindi IRR e MOIC salgono. Gli interessi sono anche deducibili, entro limiti come i tetti alla deducibilità degli interessi.\n\nNon sempre è meglio: più debito significa più interessi, covenant più stringenti, meno flessibilità e maggior rischio di **default** se i risultati deludono — anche le perdite vengono amplificate. Inoltre i finanziatori limitano la leva in base a flussi e copertura degli interessi."
    ),
    rubric: [
      ess("Smaller equity base captures the upside (fixed claim of lenders).", "Una base di equity più piccola cattura il rialzo (diritto fisso dei creditori)."),
      ess("Recognises the downside: interest burden and default risk amplify losses.", "Riconosce il rovescio: oneri finanziari e rischio di default amplificano le perdite."),
      opt("Mentions tax deductibility of interest.", "Cita la deducibilità degli interessi."),
      opt("Mentions lender constraints (coverage, covenants).", "Cita i vincoli dei finanziatori (copertura, covenant).")
    ]
  },
  {
    id: 'iq-lbo-paper-simple',
    type: 'technical',
    topic: 'lbo',
    difficulty: 2,
    seconds: 150,
    prompt: t(
      "Paper LBO: a sponsor buys a company with €100m EBITDA at 8.0x, funded with 5.0x debt and the rest equity (ignore fees). After 5 years EBITDA is €150m, the exit multiple is 8.0x and debt has been paid down to €300m. What is the MOIC (x)? Roughly what IRR?",
      "Paper LBO: un fondo acquista un’azienda con EBITDA €100m a 8,0x, finanziata con 5,0x di debito e il resto equity (ignora le commissioni). Dopo 5 anni l’EBITDA è €150m, il multiplo di uscita 8,0x e il debito è sceso a €300m. Qual è il MOIC (x)? Circa quale IRR?"
    ),
    reference: t(
      "**Entry:** EV = 100 × 8 = €800m; debt = 5 × 100 = €500m; equity = **€300m**.\n\n**Exit:** EV = 150 × 8 = €1,200m; less debt €300m → equity = **€900m**.\n\nMOIC = 900 / 300 = **3.0x**. 3x over 5 years is roughly a **25% IRR** (1.25^5 ≈ 3.05).\n\nReturns attribution: EBITDA growth 50 × 8 = €400m, multiple expansion zero, deleveraging €200m — total €600m gain.",
      "**Ingresso:** EV = 100 × 8 = €800m; debito = 5 × 100 = €500m; equity = **€300m**.\n\n**Uscita:** EV = 150 × 8 = €1.200m; meno debito €300m → equity = **€900m**.\n\nMOIC = 900 / 300 = **3,0x**. 3x in 5 anni corrisponde a circa il **25% di IRR** (1,25^5 ≈ 3,05).\n\nScomposizione dei rendimenti: crescita dell’EBITDA 50 × 8 = €400m, espansione del multiplo zero, riduzione del debito €200m — guadagno totale €600m."
    ),
    rubric: [
      ess("Entry equity €300m and exit equity €900m.", "Equity d’ingresso €300m ed equity d’uscita €900m."),
      ess("MOIC = 3.0x.", "MOIC = 3,0x."),
      ess("IRR approximately 25%.", "IRR circa 25%."),
      opt("Attributes returns to EBITDA growth and deleveraging.", "Attribuisce i rendimenti a crescita dell’EBITDA e riduzione del debito.")
    ],
    numeric: { answer: 3, unit: 'x', tolerance: { abs: 0.05 }, verify: { fn: 'moic', args: [900, 300] } }
  },
  {
    id: 'iq-lbo-paper-growth',
    type: 'technical',
    topic: 'lbo',
    difficulty: 3,
    seconds: 180,
    prompt: t(
      "Paper LBO: entry EBITDA $100m at 10.0x with 6.0x debt (ignore fees). EBITDA grows 10% a year for 5 years, cumulative debt paydown is $300m, exit at 10.0x. What is the MOIC (x)?",
      "Paper LBO: EBITDA d’ingresso $100m a 10,0x con 6,0x di debito (ignora le commissioni). L’EBITDA cresce del 10% l’anno per 5 anni, il debito rimborsato cumulato è $300m, uscita a 10,0x. Qual è il MOIC (x)?"
    ),
    reference: t(
      "**Entry:** EV $1,000m, debt $600m, equity **$400m**.\n\n**Exit EBITDA:** 100 × 1.1^5 ≈ 100 × 1.61 = **$161m**. Exit EV ≈ 161 × 10 = **$1,611m**.\n\n**Exit debt:** 600 − 300 = $300m. Exit equity ≈ 1,611 − 300 = **$1,311m**.\n\nMOIC ≈ 1,311 / 400 ≈ **3.3x**, which is an IRR of roughly **27%** (between 3.05x at 25% and 3.71x at 30%).\n\nMental-math tip: memorise 1.1^5 ≈ 1.61 and the MOICs for 20%/25%/30% over 5 years (≈2.5x, 3.0x, 3.7x).",
      "**Ingresso:** EV $1.000m, debito $600m, equity **$400m**.\n\n**EBITDA d’uscita:** 100 × 1,1^5 ≈ 100 × 1,61 = **$161m**. EV d’uscita ≈ 161 × 10 = **$1.611m**.\n\n**Debito d’uscita:** 600 − 300 = $300m. Equity d’uscita ≈ 1.611 − 300 = **$1.311m**.\n\nMOIC ≈ 1.311 / 400 ≈ **3,3x**, cioè un IRR di circa il **27%** (tra 3,05x al 25% e 3,71x al 30%).\n\nTrucco di calcolo mentale: memorizzare 1,1^5 ≈ 1,61 e i MOIC al 20%/25%/30% su 5 anni (≈2,5x, 3,0x, 3,7x)."
    ),
    rubric: [
      ess("Entry equity $400m.", "Equity d’ingresso $400m."),
      ess("Exit EBITDA ≈ $161m and exit equity ≈ $1,311m.", "EBITDA d’uscita ≈ $161m ed equity d’uscita ≈ $1.311m."),
      ess("MOIC ≈ 3.3x.", "MOIC ≈ 3,3x."),
      opt("Estimates IRR ≈ 27% by interpolation.", "Stima l’IRR ≈ 27% per interpolazione.")
    ],
    numeric: {
      answer: 3.28,
      unit: 'x',
      tolerance: { abs: 0.05 },
      verify: { fn: 'simpleLbo', args: [{ entryEbitda: 100, entryMultiple: 10, debtMultiple: 6, ebitdaGrowth: 0.1, years: 5, exitMultiple: 10, cumulativeDebtPaydown: 300 }], pick: 'moic' }
    }
  },
  {
    id: 'iq-lbo-irr-vs-moic',
    type: 'technical',
    topic: 'lbo',
    difficulty: 2,
    seconds: 75,
    prompt: t("What is the difference between IRR and MOIC, and why do sponsors look at both?", "Qual è la differenza tra IRR e MOIC e perché i fondi li guardano entrambi?"),
    reference: t(
      "**MOIC** (multiple of invested capital) = total value returned / equity invested — it measures **how much** money you made, ignoring time.\n\n**IRR** is the annualised discount rate that sets the NPV of the equity cash flows to zero — it measures **how fast** you made it.\n\nThey can conflict: a quick flip may show a high IRR but a low MOIC (2 years at 1.5x ≈ 22%), whereas a longer hold at 2.5x over 6 years is ≈ 16.5% IRR but more absolute profit. Sponsors care about both because LPs judge funds on IRR, but you cannot “eat IRR” — absolute gains and capital deployment matter. Early dividend recaps boost IRR more than MOIC.",
      "Il **MOIC** (multiplo del capitale investito) = valore totale restituito / equity investito — misura **quanto** hai guadagnato, ignorando il tempo.\n\nL’**IRR** è il tasso annuo che azzera il VAN dei flussi dell’equity — misura **quanto velocemente** l’hai guadagnato.\n\nPossono divergere: una rivendita rapida può avere IRR alto ma MOIC basso (2 anni a 1,5x ≈ 22%), mentre una detenzione di 6 anni a 2,5x dà ≈ 16,5% di IRR ma più profitto assoluto. I fondi guardano entrambi perché gli LP giudicano i fondi sull’IRR, ma “l’IRR non si mangia” — contano i guadagni assoluti e il capitale investito. I dividend recap anticipati aumentano più l’IRR che il MOIC."
    ),
    rubric: [
      ess("Correct definitions of MOIC (how much) and IRR (annualised, time-weighted).", "Definizioni corrette di MOIC (quanto) e IRR (annualizzato, dipende dal tempo)."),
      ess("Explains how they can conflict with holding period.", "Spiega come possono divergere al variare della durata."),
      opt("Gives a numeric illustration.", "Fornisce un esempio numerico."),
      opt("Mentions LP perspective or dividend recap effect.", "Cita la prospettiva degli LP o l’effetto dei dividend recap.")
    ]
  },
  {
    id: 'iq-lbo-debt-stack',
    type: 'technical',
    topic: 'lbo',
    difficulty: 2,
    seconds: 90,
    prompt: t("Describe a typical LBO capital structure, from senior to junior.", "Descrivi una tipica struttura del capitale in un LBO, dal senior al junior."),
    reference: t(
      "From **senior/cheapest** to **junior/most expensive**:\n\n- **Revolving credit facility** — for liquidity, floating rate, usually undrawn at close.\n- **Senior secured term loans** — Term Loan A (amortising, bank-held) and Term Loan B (minimal amortisation, institutional investors), floating rate, secured on assets.\n- **Senior secured or unsecured high-yield bonds** — fixed rate, longer tenor, call protection, incurrence covenants. **Private credit unitranche** loans increasingly replace TLB + bonds in mid-market deals.\n- **Subordinated / mezzanine debt** — higher cost, may include PIK interest or warrants.\n- **Preferred equity** and **sponsor common equity**, with management rollover.\n\nAs you move down the stack, cost and expected return rise, while security and priority fall.",
      "Dal **più senior/economico** al **più junior/costoso**:\n\n- **Linea revolving** — per la liquidità, tasso variabile, di solito non utilizzata al closing.\n- **Term loan senior garantiti** — Term Loan A (amortizing, detenuto da banche) e Term Loan B (rimborso quasi a scadenza, investitori istituzionali), tasso variabile, garantiti sugli attivi.\n- **High yield bond senior garantiti o chirografari** — tasso fisso, durata più lunga, call protection, covenant di incurrence. Nel mid-market i finanziamenti **unitranche di private credit** sostituiscono sempre più TLB + bond.\n- **Debito subordinato / mezzanino** — costo più alto, può prevedere interessi PIK o warrant.\n- **Equity privilegiato** ed **equity ordinario del fondo**, con reinvestimento del management.\n\nScendendo nella struttura, costo e rendimento atteso salgono, mentre garanzie e priorità scendono."
    ),
    rubric: [
      ess("Correct seniority order: revolver/term loans → bonds → mezzanine → equity.", "Ordine di seniority corretto: revolving/term loan → bond → mezzanino → equity."),
      ess("Links seniority to cost/risk.", "Collega la seniority a costo/rischio."),
      opt("Distinguishes TLA vs TLB, fixed vs floating, covenant types.", "Distingue TLA e TLB, tasso fisso e variabile, tipi di covenant."),
      opt("Mentions private credit / unitranche.", "Cita private credit / unitranche.")
    ]
  },
  {
    id: 'iq-lbo-dividend-recap',
    type: 'technical',
    topic: 'lbo',
    difficulty: 3,
    seconds: 75,
    prompt: t("What is a dividend recapitalisation, and what does it do to returns and risk?", "Cos’è una dividend recapitalisation e cosa comporta per rendimenti e rischio?"),
    reference: t(
      "In a dividend recap the portfolio company **raises new debt** and uses the proceeds to **pay a special dividend** to the sponsor, without selling the business.\n\n- **Returns:** the sponsor gets cash back early, which **raises IRR** significantly (time value) and de-risks the investment; MOIC changes much less, and can even fall slightly once higher interest costs reduce exit equity.\n- **Risk:** leverage rises again, interest burden increases, and the company becomes more vulnerable to a downturn — creditors and rating agencies scrutinise these deals.\n\nRecaps are most common when credit markets are open and the company has deleveraged since entry.",
      "In una dividend recap la società in portafoglio **raccoglie nuovo debito** e usa i proventi per **pagare un dividendo straordinario** al fondo, senza vendere il business.\n\n- **Rendimenti:** il fondo recupera cassa in anticipo, il che **alza molto l’IRR** (valore temporale) e riduce il rischio dell’investimento; il MOIC cambia molto meno e può persino calare leggermente se i maggiori interessi riducono l’equity di uscita.\n- **Rischio:** la leva risale, gli oneri finanziari aumentano e l’azienda diventa più vulnerabile a una crisi — creditori e agenzie di rating guardano con attenzione queste operazioni.\n\nLe recap sono più comuni quando i mercati del credito sono aperti e l’azienda ha ridotto la leva dall’ingresso."
    ),
    rubric: [
      ess("Defines: new debt raised to pay a dividend to the sponsor.", "Definizione: nuovo debito raccolto per pagare un dividendo al fondo."),
      ess("IRR increases due to earlier cash return; MOIC affected less.", "L’IRR aumenta per il rientro anticipato di cassa; il MOIC è meno influenzato."),
      ess("Identifies increased leverage / risk.", "Identifica l’aumento di leva / rischio."),
      opt("Mentions market conditions that enable recaps.", "Cita le condizioni di mercato che rendono possibili le recap.")
    ]
  }
];

/* ------------------------------------------------------------------ */
/* Corporate finance                                                   */
/* ------------------------------------------------------------------ */

const corporateFinance: InterviewQuestion[] = [
  {
    id: 'iq-cf-debt-vs-equity',
    type: 'technical',
    topic: 'corporate-finance',
    difficulty: 1,
    seconds: 90,
    prompt: t("A company needs to raise €500m. How would it decide between debt and equity?", "Un’azienda deve raccogliere €500m. Come decide tra debito ed equity?"),
    reference: t(
      "I would weigh **cost, capacity, flexibility and signalling**:\n\n- **Cost:** debt is usually cheaper — lenders have priority and interest is tax-deductible — while equity is the most expensive capital and dilutes existing shareholders.\n- **Capacity:** can cash flows support more interest? Look at leverage (net debt/EBITDA), interest coverage, covenants and the impact on the **credit rating**.\n- **Use of proceeds and business risk:** stable cash flows suit debt; volatile or early-stage businesses suit equity.\n- **Market conditions:** interest rates, credit spreads and where the share price trades.\n- **Signalling:** issuing equity can signal management thinks shares are fully valued.\n\nOften the answer is a mix, or hybrid instruments like convertibles.",
      "Valuterei **costo, capacità, flessibilità e segnaletica**:\n\n- **Costo:** il debito è di solito più economico — i finanziatori hanno priorità e gli interessi sono deducibili — mentre l’equity è il capitale più costoso e diluisce gli azionisti esistenti.\n- **Capacità:** i flussi reggono più interessi? Si guardano leva (PFN/EBITDA), copertura degli interessi, covenant e impatto sul **rating**.\n- **Uso dei proventi e rischio del business:** flussi stabili si prestano al debito; business volatili o in fase iniziale all’equity.\n- **Condizioni di mercato:** tassi, spread creditizi e livello del prezzo dell’azione.\n- **Segnaletica:** emettere azioni può segnalare che il management ritiene le azioni a valutazione piena.\n\nSpesso la risposta è un mix, o strumenti ibridi come le convertibili."
    ),
    rubric: [
      ess("Debt cheaper (priority, tax shield) but adds financial risk.", "Il debito costa meno (priorità, scudo fiscale) ma aggiunge rischio finanziario."),
      ess("Assesses debt capacity (leverage, coverage, rating).", "Valuta la capacità di debito (leva, copertura, rating)."),
      opt("Considers market conditions and signalling.", "Considera condizioni di mercato e segnaletica."),
      opt("Mentions hybrids / mix.", "Cita strumenti ibridi / un mix.")
    ]
  },
  {
    id: 'iq-cf-dividend-buyback',
    type: 'technical',
    topic: 'corporate-finance',
    difficulty: 2,
    seconds: 90,
    prompt: t("Should a company with excess cash pay a dividend or buy back shares?", "Un’azienda con cassa in eccesso dovrebbe pagare un dividendo o riacquistare azioni?"),
    reference: t(
      "In a frictionless world both return the same value to shareholders. In practice:\n\n- **Buybacks** are **flexible** (no expectation of repetition), can signal management thinks shares are undervalued, reduce the share count and **raise EPS** — accretive if the after-tax yield on the cash is below the earnings yield (1/P/E). The risk is buying back at too high a price.\n- **Dividends** signal **commitment and confidence** in stable cash flows and suit income-oriented investors, but cutting them later is punished by the market.\n- **Taxes** for shareholders may differ between dividends and capital gains, depending on jurisdiction.\n\nFirst, though, I would ask whether there are investments earning above the cost of capital — that beats both.",
      "In un mondo senza frizioni entrambi restituiscono lo stesso valore agli azionisti. In pratica:\n\n- **I buyback** sono **flessibili** (nessuna aspettativa di ripetizione), possono segnalare che il management ritiene le azioni sottovalutate, riducono il numero di azioni e **alzano l’EPS** — accrescitivi se il rendimento netto della cassa è inferiore all’earnings yield (1/P/E). Il rischio è riacquistare a un prezzo troppo alto.\n- **I dividendi** segnalano **impegno e fiducia** nella stabilità dei flussi e piacciono agli investitori orientati al reddito, ma tagliarli in futuro è punito dal mercato.\n- **Le imposte** per gli azionisti possono differire tra dividendi e plusvalenze, a seconda della giurisdizione.\n\nPrima però chiederei se ci sono investimenti che rendono più del costo del capitale — battono entrambe le opzioni."
    ),
    rubric: [
      ess("Contrasts flexibility of buybacks with commitment of dividends.", "Confronta la flessibilità dei buyback con l’impegno dei dividendi."),
      ess("Explains EPS effect of buybacks and the condition for accretion.", "Spiega l’effetto dei buyback sull’EPS e la condizione di accrescimento."),
      opt("Mentions signalling and investor tax considerations.", "Cita segnaletica e aspetti fiscali per gli investitori."),
      opt("Prioritises value-creating investment first.", "Mette al primo posto investimenti che creano valore.")
    ]
  },
  {
    id: 'iq-cf-npv-irr',
    type: 'technical',
    topic: 'corporate-finance',
    difficulty: 2,
    seconds: 90,
    prompt: t(
      "A project costs €100m today and returns €60m at the end of each of the next two years. At a 10% cost of capital, what is the NPV (€m)? When can NPV and IRR give different answers?",
      "Un progetto costa €100m oggi e restituisce €60m alla fine di ciascuno dei prossimi due anni. Con un costo del capitale del 10%, qual è il VAN (€m)? Quando VAN e IRR possono dare risposte diverse?"
    ),
    reference: t(
      "NPV = −100 + 60/1.1 + 60/1.1² = −100 + 54.5 + 49.6 ≈ **€4.1m**, positive, so accept.\n\nNPV and IRR can conflict when ranking **mutually exclusive projects** of different **scale** or **timing** — IRR favours small projects with quick payback, while NPV tells you the absolute value created. IRR also assumes reinvestment at the IRR itself and can give **multiple or no solutions** with non-conventional cash flows (sign changes).\n\nSo NPV is the primary decision rule; IRR is a useful communication tool, and is what sponsors quote.",
      "VAN = −100 + 60/1,1 + 60/1,1² = −100 + 54,5 + 49,6 ≈ **€4,1m**, positivo, quindi si accetta.\n\nVAN e IRR possono divergere nel confronto tra **progetti mutuamente esclusivi** di **dimensione** o **tempistica** diverse — l’IRR favorisce progetti piccoli con rientro rapido, mentre il VAN dice il valore assoluto creato. L’IRR inoltre ipotizza il reinvestimento al tasso IRR stesso e può avere **più soluzioni o nessuna** con flussi non convenzionali (cambi di segno).\n\nQuindi il VAN è il criterio decisionale principale; l’IRR è utile per comunicare, ed è ciò che citano i fondi."
    ),
    rubric: [
      ess("Correct NPV ≈ €4.1m.", "VAN corretto ≈ €4,1m."),
      ess("Explains a valid source of conflict (scale, timing, mutually exclusive projects).", "Spiega una causa valida di divergenza (dimensione, tempistica, progetti esclusivi)."),
      opt("Mentions multiple IRRs / reinvestment assumption.", "Cita IRR multipli / ipotesi di reinvestimento.")
    ],
    numeric: { answer: 4.13, unit: '€m', tolerance: { abs: 0.1 }, verify: { fn: 'npv', args: [0.1, [-100, 60, 60]] } }
  },
  {
    id: 'iq-cf-optimal-structure',
    type: 'technical',
    topic: 'corporate-finance',
    difficulty: 3,
    seconds: 90,
    prompt: t(
      "Debt is cheaper than equity. Why don’t companies fund themselves entirely with debt to minimise WACC?",
      "Il debito costa meno dell’equity. Perché le aziende non si finanziano interamente a debito per minimizzare il WACC?"
    ),
    reference: t(
      "Because the costs of both components **rise with leverage**. Under **Modigliani–Miller** without taxes, capital structure is irrelevant: as you add cheap debt, equity becomes riskier and its cost rises exactly enough to keep WACC constant.\n\nWith **taxes**, the interest tax shield makes debt valuable, so WACC initially falls. But beyond a point, **expected costs of financial distress** — higher default risk, rising cost of debt, lost customers and suppliers, constrained investment — outweigh the tax benefit, and WACC rises again.\n\nThis **trade-off theory** implies an optimal capital structure that depends on cash-flow stability and asset tangibility. Tax rules also cap interest deductibility in many countries.",
      "Perché il costo di entrambe le componenti **aumenta con la leva**. Secondo **Modigliani–Miller** senza imposte la struttura del capitale è irrilevante: aggiungendo debito economico, l’equity diventa più rischioso e il suo costo sale esattamente quanto basta per mantenere costante il WACC.\n\nCon le **imposte**, lo scudo fiscale degli interessi rende il debito vantaggioso, quindi il WACC inizialmente scende. Oltre un certo punto però i **costi attesi del dissesto finanziario** — maggiore rischio di default, costo del debito crescente, clienti e fornitori persi, investimenti vincolati — superano il beneficio fiscale e il WACC risale.\n\nQuesta **teoria del trade-off** implica una struttura ottimale che dipende dalla stabilità dei flussi e dalla tangibilità degli attivi. In molti Paesi le norme fiscali limitano inoltre la deducibilità degli interessi."
    ),
    rubric: [
      ess("Cost of equity (and debt) rises with leverage.", "Il costo dell’equity (e del debito) cresce con la leva."),
      ess("Financial distress costs eventually outweigh the tax shield.", "I costi del dissesto finanziario finiscono per superare lo scudo fiscale."),
      opt("References Modigliani–Miller and the trade-off theory.", "Richiama Modigliani–Miller e la teoria del trade-off."),
      opt("Mentions interest deductibility limits.", "Cita i limiti alla deducibilità degli interessi.")
    ]
  },
  {
    id: 'iq-cf-roic-growth',
    type: 'technical',
    topic: 'corporate-finance',
    difficulty: 3,
    seconds: 75,
    prompt: t("Does growth always create value?", "La crescita crea sempre valore?"),
    reference: t(
      "No. Growth creates value only if the company earns a **return on invested capital above its cost of capital (WACC)** on the new investment.\n\n- If **ROIC > WACC**, every euro reinvested is worth more than a euro, so faster growth increases value.\n- If **ROIC = WACC**, growth is value-neutral — you invest a euro to create a euro.\n- If **ROIC < WACC**, growth **destroys value**: the faster the company grows, the more value it loses.\n\nThat is why a DCF’s terminal growth must be consistent with the reinvestment needed to fund it, and why acquisitions bought at high prices can grow revenues while destroying value.",
      "No. La crescita crea valore solo se l’azienda ottiene un **rendimento sul capitale investito superiore al costo del capitale (WACC)** sui nuovi investimenti.\n\n- Se **ROIC > WACC**, ogni euro reinvestito vale più di un euro, quindi crescere più in fretta aumenta il valore.\n- Se **ROIC = WACC**, la crescita è neutrale — investi un euro per creare un euro.\n- Se **ROIC < WACC**, la crescita **distrugge valore**: più l’azienda cresce, più valore perde.\n\nPer questo la crescita terminale di un DCF deve essere coerente con i reinvestimenti necessari a finanziarla, e le acquisizioni pagate care possono far crescere i ricavi distruggendo valore."
    ),
    rubric: [
      ess("States growth creates value only when ROIC exceeds WACC.", "Afferma che la crescita crea valore solo se il ROIC supera il WACC."),
      ess("Explains the three cases (>, =, <).", "Spiega i tre casi (>, =, <)."),
      opt("Connects to DCF reinvestment or M&A.", "Collega al reinvestimento nel DCF o alle M&A.")
    ]
  }
];

/* ------------------------------------------------------------------ */
/* Markets (conceptual, not date-specific)                             */
/* ------------------------------------------------------------------ */

const markets: InterviewQuestion[] = [
  {
    id: 'iq-mkt-yield-curve',
    type: 'technical',
    topic: 'markets',
    difficulty: 1,
    seconds: 75,
    prompt: t("What is the yield curve, and what does an inverted yield curve signal?", "Cos’è la curva dei rendimenti e cosa segnala una curva invertita?"),
    reference: t(
      "The yield curve plots government bond **yields against maturity**. Normally it slopes **upwards**: investors demand a term premium for lending longer, and expect growth and inflation.\n\nAn **inverted** curve — short-term yields above long-term yields — usually happens when the central bank holds short rates high to fight inflation while markets expect **slower growth and future rate cuts**. Historically, US curve inversions have often preceded recessions, though the lag is long and variable and it is not a perfect signal.\n\nFor banking, the curve matters for funding costs, bank net interest margins, and the appetite for M&A and leveraged finance.",
      "La curva dei rendimenti rappresenta i **rendimenti dei titoli di Stato per scadenza**. Normalmente è **inclinata positivamente**: gli investitori chiedono un premio a termine per prestare più a lungo e si aspettano crescita e inflazione.\n\nUna curva **invertita** — rendimenti a breve sopra quelli a lungo — si verifica di solito quando la banca centrale tiene alti i tassi a breve per combattere l’inflazione mentre il mercato prevede **crescita più lenta e futuri tagli dei tassi**. Storicamente le inversioni della curva USA hanno spesso anticipato le recessioni, anche se con ritardi lunghi e variabili e senza essere un segnale perfetto.\n\nPer la banca d’affari la curva conta per i costi di finanziamento, il margine di interesse delle banche e l’appetito per M&A e leveraged finance."
    ),
    rubric: [
      ess("Defines the yield curve (yield vs maturity) and normal upward slope.", "Definisce la curva (rendimento per scadenza) e la normale inclinazione positiva."),
      ess("Explains inversion as expectations of slower growth / future rate cuts.", "Spiega l’inversione come aspettativa di crescita più lenta / tagli futuri."),
      opt("Notes it has historically preceded recessions but is not perfect.", "Osserva che storicamente ha anticipato le recessioni ma non è infallibile."),
      opt("Links to banking activity.", "Collega all’attività di banca d’affari.")
    ]
  },
  {
    id: 'iq-mkt-rate-hike',
    type: 'technical',
    topic: 'markets',
    difficulty: 2,
    seconds: 90,
    prompt: t("How does a rise in interest rates affect valuations, M&A and LBO activity?", "Come incide un aumento dei tassi su valutazioni, M&A e attività di LBO?"),
    reference: t(
      "- **Valuations:** higher risk-free rates raise the cost of equity and debt, so **WACC rises and DCF values fall**. Long-duration assets — high-growth companies whose cash flows are far in the future — are hit hardest, so multiples compress.\n- **M&A:** financing becomes more expensive and valuation gaps between buyers and sellers widen, which tends to slow deal volumes; stock deals and strategic buyers with strong balance sheets gain relative to debt-funded buyers.\n- **LBOs:** higher interest costs reduce how much leverage a company can support (coverage ratios), so sponsors pay lower multiples or contribute more equity, and **returns fall**. Exits become harder too.\n\nThe effect depends on why rates rise — strong growth versus inflation.",
      "- **Valutazioni:** tassi risk-free più alti aumentano il costo di equity e debito, quindi **il WACC sale e i valori DCF scendono**. Gli asset a lunga duration — società ad alta crescita con flussi lontani nel tempo — sono i più colpiti, e i multipli si comprimono.\n- **M&A:** il finanziamento costa di più e si allarga la distanza di valutazione tra acquirenti e venditori, il che tende a rallentare i volumi; le operazioni in azioni e gli acquirenti industriali con bilanci solidi guadagnano terreno rispetto a chi si finanzia a debito.\n- **LBO:** interessi più alti riducono la leva sostenibile (copertura degli interessi), quindi i fondi pagano multipli più bassi o mettono più equity, e **i rendimenti scendono**. Anche le uscite diventano più difficili.\n\nL’effetto dipende dal perché i tassi salgono — crescita forte o inflazione."
    ),
    rubric: [
      ess("Higher rates → higher WACC → lower valuations / multiples.", "Tassi più alti → WACC più alto → valutazioni / multipli più bassi."),
      ess("Explains the financing effect on LBOs (less leverage, lower returns).", "Spiega l’effetto sul finanziamento degli LBO (meno leva, rendimenti più bassi)."),
      opt("Discusses M&A volumes / valuation gaps / stock vs cash.", "Discute volumi di M&A / distanza di valutazione / azioni vs contanti."),
      opt("Notes growth stocks are most rate-sensitive.", "Osserva che i titoli growth sono i più sensibili ai tassi.")
    ]
  },
  {
    id: 'iq-mkt-duration',
    type: 'technical',
    topic: 'markets',
    difficulty: 2,
    seconds: 75,
    prompt: t(
      "A bond has a modified duration of 7. If yields rise by 50 basis points, approximately how much does its price change (%)?",
      "Un’obbligazione ha duration modificata pari a 7. Se i rendimenti salgono di 50 punti base, di quanto varia circa il prezzo (%)?"
    ),
    reference: t(
      "% price change ≈ −modified duration × change in yield = −7 × 0.50% = **−3.5%**.\n\nBond prices move **inversely** to yields because the fixed coupons are discounted at a higher rate. Duration is a linear approximation; for larger moves, **convexity** makes the actual price fall slightly less than estimated (and rise slightly more when yields fall) for a standard bond.",
      "Variazione % del prezzo ≈ −duration modificata × variazione del rendimento = −7 × 0,50% = **−3,5%**.\n\nI prezzi delle obbligazioni si muovono in **direzione opposta** ai rendimenti perché le cedole fisse si attualizzano a un tasso più alto. La duration è un’approssimazione lineare; per movimenti più ampi la **convessità** fa sì che, per un’obbligazione standard, il prezzo scenda un po’ meno della stima (e salga un po’ di più quando i rendimenti scendono)."
    ),
    rubric: [
      ess("Correct answer: about −3.5%.", "Risposta corretta: circa −3,5%."),
      ess("Explains inverse price–yield relationship.", "Spiega la relazione inversa tra prezzo e rendimento."),
      opt("Mentions convexity as a second-order correction.", "Cita la convessità come correzione di secondo ordine.")
    ],
    numeric: { answer: -3.5, unit: '%', tolerance: { abs: 0.05 }, verify: { fn: 'priceChangeApprox', args: [7, 0.5] } }
  },
  {
    id: 'iq-mkt-credit-spreads',
    type: 'technical',
    topic: 'markets',
    difficulty: 2,
    seconds: 75,
    prompt: t("What are credit spreads, and what does it tell you when they widen?", "Cosa sono gli spread creditizi e cosa indica un loro allargamento?"),
    reference: t(
      "A credit spread is the **extra yield** a corporate bond or loan pays over a risk-free benchmark of the same maturity (government bonds or swaps). It compensates investors for **default risk, loss given default and liquidity**.\n\nSpreads are tighter for **investment-grade** issuers (BBB− and above) and wider for **high-yield**.\n\nWhen spreads **widen**, investors are demanding more compensation — a sign of rising risk aversion, weaker growth expectations or stress in a sector. Practically, it raises borrowing costs, can shut the high-yield and leveraged loan markets, and slows LBOs and debt-funded M&A. Tight spreads signal open, “risk-on” credit markets.",
      "Lo spread creditizio è il **rendimento aggiuntivo** che un’obbligazione o un prestito societario paga rispetto a un benchmark privo di rischio della stessa scadenza (titoli di Stato o swap). Compensa gli investitori per **rischio di default, perdita in caso di default e liquidità**.\n\nGli spread sono più stretti per gli emittenti **investment grade** (BBB− e superiori) e più ampi per l’**high yield**.\n\nQuando gli spread **si allargano**, gli investitori chiedono più compenso — segnale di maggiore avversione al rischio, peggiori attese di crescita o tensioni in un settore. In pratica aumentano i costi di finanziamento, possono chiudersi i mercati high yield e dei leveraged loan, e rallentano LBO e M&A finanziate a debito. Spread stretti segnalano mercati del credito aperti, “risk-on”."
    ),
    rubric: [
      ess("Defines spread as excess yield over a risk-free benchmark for credit risk.", "Definisce lo spread come extra-rendimento sul benchmark privo di rischio per il rischio di credito."),
      ess("Interprets widening as higher perceived risk / risk aversion.", "Interpreta l’allargamento come maggiore rischio percepito / avversione al rischio."),
      opt("Distinguishes investment grade vs high yield.", "Distingue investment grade e high yield."),
      opt("Links to financing conditions for deals.", "Collega alle condizioni di finanziamento delle operazioni.")
    ]
  },
  {
    id: 'iq-mkt-whats-going-on',
    type: 'technical',
    topic: 'markets',
    difficulty: 2,
    seconds: 120,
    prompt: t("What’s going on in the markets right now?", "Cosa sta succedendo sui mercati in questo momento?"),
    reference: t(
      "This tests whether you **follow markets and can structure a view** — so answer with today’s facts, but use a framework:\n\n1. **Macro and rates:** where central banks (Fed, ECB) are in the cycle, inflation trend, and the level and shape of the yield curve.\n2. **Equities and credit:** index direction, valuation levels, sector leadership, and credit spreads.\n3. **Deal activity:** M&A and IPO volumes, financing conditions, sponsor activity — with **one or two specific recent deals** you can discuss.\n4. **Your view:** one clear, reasoned opinion and what would change it.\n\nGive numbers you are sure of (approximately is fine), connect them to banking, and keep it to 60–90 seconds. Read the FT, Il Sole 24 Ore or Bloomberg daily in the weeks before interviews.",
      "Questa domanda verifica se **segui i mercati e sai strutturare una view** — quindi rispondi con i fatti di oggi, ma usando uno schema:\n\n1. **Macro e tassi:** dove sono le banche centrali (Fed, BCE) nel ciclo, andamento dell’inflazione, livello e forma della curva dei rendimenti.\n2. **Azionario e credito:** direzione degli indici, livelli di valutazione, settori trainanti e spread creditizi.\n3. **Attività sui deal:** volumi di M&A e IPO, condizioni di finanziamento, attività dei fondi — con **una o due operazioni recenti** che sai discutere.\n4. **La tua view:** un’opinione chiara e motivata e cosa la farebbe cambiare.\n\nCita numeri di cui sei sicuro (anche approssimativi), collegali alla banca d’affari e resta sui 60–90 secondi. Leggi ogni giorno FT, Il Sole 24 Ore o Bloomberg nelle settimane prima dei colloqui."
    ),
    rubric: [
      ess("Covers macro/rates, markets and deal activity in a structured way.", "Copre macro/tassi, mercati e attività sui deal in modo strutturato."),
      ess("Uses current, accurate facts (not vague generalities).", "Usa fatti attuali e corretti (non generalità vaghe)."),
      ess("Offers a reasoned personal view.", "Esprime una view personale motivata."),
      opt("Connects to investment banking activity and cites a specific deal.", "Collega all’attività di banca d’affari e cita un’operazione specifica.")
    ],
    followUps: [t("Where do you think the ECB’s policy rate will be in a year, and why?", "Dove pensi che sarà il tasso di policy della BCE tra un anno e perché?")]
  }
];

/* ------------------------------------------------------------------ */
/* Mental math / numeric brainteasers                                  */
/* ------------------------------------------------------------------ */

const brainteasers: InterviewQuestion[] = [
  {
    id: 'iq-bt-3x-5y',
    type: 'technical',
    topic: 'brainteaser-numeric',
    difficulty: 1,
    seconds: 45,
    prompt: t("You triple your money in 5 years. Roughly what IRR is that (%)?", "Triplichi i tuoi soldi in 5 anni. A quale IRR corrisponde, circa (%)?"),
    reference: t(
      "About **25%** — precisely ~24.6%.\n\nHow to get there quickly: memorise that 1.25^5 ≈ 3.05, so 3.0x in 5 years is just under 25%. Useful anchors over 5 years: **2x ≈ 15%**, **2.5x ≈ 20%**, **3x ≈ 25%**, **3.7x ≈ 30%**.\n\nSay the method out loud: “1.25 squared is about 1.56, to the fourth is about 2.44, times 1.25 is about 3.05 — so slightly under 25%.”",
      "Circa il **25%** — esattamente ~24,6%.\n\nCome arrivarci in fretta: memorizza che 1,25^5 ≈ 3,05, quindi 3,0x in 5 anni è poco sotto il 25%. Riferimenti utili su 5 anni: **2x ≈ 15%**, **2,5x ≈ 20%**, **3x ≈ 25%**, **3,7x ≈ 30%**.\n\nDescrivi il metodo ad alta voce: “1,25 al quadrato è circa 1,56, alla quarta circa 2,44, per 1,25 circa 3,05 — quindi poco sotto il 25%.”"
    ),
    rubric: [
      ess("Answers approximately 25% (24–25%).", "Risponde circa 25% (24–25%)."),
      opt("Shows a sensible method (anchors or compounding).", "Mostra un metodo sensato (riferimenti o capitalizzazione)."),
      opt("Answers within the time without a calculator.", "Risponde nei tempi senza calcolatrice.")
    ],
    numeric: { answer: 24.57, unit: '%', tolerance: { abs: 1 }, verify: { fn: 'irrFromMoic', args: [3, 5], scale: 100 } }
  },
  {
    id: 'iq-bt-2x-3y',
    type: 'technical',
    topic: 'brainteaser-numeric',
    difficulty: 1,
    seconds: 45,
    prompt: t("A sponsor doubles its money in 3 years. Approximate IRR (%)?", "Un fondo raddoppia i soldi in 3 anni. IRR approssimativo (%)?"),
    reference: t(
      "About **26%**. You need (1 + r)^3 = 2, i.e. the cube root of 2 ≈ 1.26.\n\nQuick check: 1.26 × 1.26 ≈ 1.59, × 1.26 ≈ 2.0. Rule of 72 gives 72 / 3 = 24%, a slight underestimate at higher rates.\n\nAnchors for 2x: 2 years ≈ 41%, 3 years ≈ 26%, 4 years ≈ 19%, 5 years ≈ 15%.",
      "Circa il **26%**. Serve (1 + r)^3 = 2, cioè la radice cubica di 2 ≈ 1,26.\n\nVerifica veloce: 1,26 × 1,26 ≈ 1,59, × 1,26 ≈ 2,0. La regola del 72 dà 72 / 3 = 24%, una leggera sottostima per tassi alti.\n\nRiferimenti per 2x: 2 anni ≈ 41%, 3 anni ≈ 26%, 4 anni ≈ 19%, 5 anni ≈ 15%."
    ),
    rubric: [
      ess("Answers approximately 26% (24–27% acceptable with method).", "Risponde circa 26% (24–27% accettabile se motivato)."),
      opt("Uses cube root or rule of 72 with correction.", "Usa la radice cubica o la regola del 72 con correzione.")
    ],
    numeric: { answer: 25.99, unit: '%', tolerance: { abs: 1.5 }, verify: { fn: 'irrFromMoic', args: [2, 3], scale: 100 } }
  },
  {
    id: 'iq-bt-rule-72',
    type: 'technical',
    topic: 'brainteaser-numeric',
    difficulty: 1,
    seconds: 30,
    prompt: t("Using the rule of 72, roughly how many years does it take to double an investment at 9% a year?", "Con la regola del 72, in quanti anni circa raddoppia un investimento al 9% annuo?"),
    reference: t(
      "72 / 9 = **8 years** (exact answer ≈ 8.04 years).\n\nThe rule of 72 approximates doubling time as 72 divided by the percentage rate; it is most accurate for rates around 6–10%. You can flip it: to double in 4 years you need roughly 72 / 4 = 18%.",
      "72 / 9 = **8 anni** (risposta esatta ≈ 8,04 anni).\n\nLa regola del 72 approssima il tempo di raddoppio come 72 diviso il tasso percentuale; è più precisa per tassi intorno al 6–10%. Si può usare al contrario: per raddoppiare in 4 anni serve circa 72 / 4 = 18%."
    ),
    rubric: [
      ess("Answers 8 years.", "Risponde 8 anni."),
      opt("Explains the rule and/or its reverse use.", "Spiega la regola e/o il suo uso inverso.")
    ],
    numeric: { answer: 8, unit: 'years', tolerance: { abs: 0.3 }, verify: { fn: 'ratio', args: [72, 9] } }
  },
  {
    id: 'iq-bt-moic-20pct',
    type: 'technical',
    topic: 'brainteaser-numeric',
    difficulty: 2,
    seconds: 60,
    prompt: t("A sponsor targets a 20% IRR over a 5-year hold. What MOIC (x) does it need?", "Un fondo punta a un IRR del 20% su 5 anni. Quale MOIC (x) gli serve?"),
    reference: t(
      "MOIC = 1.2^5. Build it up: 1.2² = 1.44; 1.2⁴ = 1.44² ≈ 2.07; × 1.2 ≈ **2.49x** — call it **~2.5x**.\n\nThis is the classic sponsor hurdle: “2.5x in five years is roughly 20%.” For 25% you need ~3.05x, for 15% ~2.0x.",
      "MOIC = 1,2^5. Passo per passo: 1,2² = 1,44; 1,2⁴ = 1,44² ≈ 2,07; × 1,2 ≈ **2,49x** — diciamo **~2,5x**.\n\nÈ il classico obiettivo dei fondi: “2,5x in cinque anni è circa il 20%.” Per il 25% serve ~3,05x, per il 15% ~2,0x."
    ),
    rubric: [
      ess("Answers ≈ 2.5x (2.49x).", "Risponde ≈ 2,5x (2,49x)."),
      opt("Shows stepwise compounding.", "Mostra la capitalizzazione passo per passo.")
    ],
    numeric: { answer: 2.49, unit: 'x', tolerance: { abs: 0.03 }, verify: { fn: 'fv', args: [1, 0.2, 5] } }
  },
  {
    id: 'iq-bt-pct-of',
    type: 'technical',
    topic: 'brainteaser-numeric',
    difficulty: 1,
    seconds: 20,
    prompt: t("Quick: what is 7.5% of 2,400?", "Veloce: quanto fa il 7,5% di 2.400?"),
    reference: t(
      "**180.** Break it down: 10% of 2,400 = 240; 5% = 120; 2.5% = 60; so 7.5% = 120 + 60 = 180.\n\nInterviewers use these to check you are comfortable with numbers under pressure — narrate the decomposition rather than going silent.",
      "**180.** Scomponi: 10% di 2.400 = 240; 5% = 120; 2,5% = 60; quindi 7,5% = 120 + 60 = 180.\n\nGli intervistatori usano queste domande per verificare che tu sia a tuo agio con i numeri sotto pressione — racconta la scomposizione invece di restare in silenzio."
    ),
    rubric: [ess("Answers 180.", "Risponde 180."), opt("Uses a clean decomposition.", "Usa una scomposizione pulita.")],
    numeric: { answer: 180, tolerance: { abs: 0.01 }, verify: { fn: 'product', args: [0.075, 2400] } }
  },
  {
    id: 'iq-bt-perpetuity',
    type: 'technical',
    topic: 'brainteaser-numeric',
    difficulty: 1,
    seconds: 30,
    prompt: t("What would you pay today for a perpetuity paying €60 a year, starting next year, if your required return is 8%?", "Quanto pagheresti oggi per una rendita perpetua di €60 l’anno, a partire dal prossimo anno, con un rendimento richiesto dell’8%?"),
    reference: t(
      "Value = cash flow / rate = 60 / 0.08 = **€750**.\n\nIf it grew at 2% a year, it would be 60 / (8% − 2%) = €1,000 — the same Gordon logic used for terminal values. Note that a perpetuity at 8% is equivalent to a 12.5x multiple of the cash flow.",
      "Valore = flusso / tasso = 60 / 0,08 = **€750**.\n\nSe crescesse del 2% l’anno, varrebbe 60 / (8% − 2%) = €1.000 — la stessa logica di Gordon usata per il terminal value. Nota che una perpetuità all’8% equivale a un multiplo di 12,5x del flusso."
    ),
    rubric: [ess("Answers €750.", "Risponde €750."), opt("Extends to growing perpetuity or multiple equivalence.", "Estende alla perpetuità crescente o all’equivalenza con un multiplo.")],
    numeric: { answer: 750, unit: '€', tolerance: { abs: 0.5 }, verify: { fn: 'pvPerpetuity', args: [60, 0.08] } }
  },
  {
    id: 'iq-bt-growth-7y',
    type: 'technical',
    topic: 'brainteaser-numeric',
    difficulty: 2,
    seconds: 45,
    prompt: t("Revenue grows at 10% a year for 7 years. By roughly what multiple (x) has it grown?", "I ricavi crescono del 10% l’anno per 7 anni. Di circa quante volte (x) sono cresciuti?"),
    reference: t(
      "About **1.95x** — almost doubled. Rule of 72: 72 / 10 = 7.2 years to double, so after 7 years it is just under 2x.\n\nExact: 1.1^7 ≈ 1.949. Building blocks worth memorising: 1.1^3 ≈ 1.33, 1.1^5 ≈ 1.61, 1.1^7 ≈ 1.95, 1.1^10 ≈ 2.59.",
      "Circa **1,95x** — quasi raddoppiati. Regola del 72: 72 / 10 = 7,2 anni per raddoppiare, quindi dopo 7 anni si è poco sotto 2x.\n\nEsatto: 1,1^7 ≈ 1,949. Mattoni da memorizzare: 1,1^3 ≈ 1,33, 1,1^5 ≈ 1,61, 1,1^7 ≈ 1,95, 1,1^10 ≈ 2,59."
    ),
    rubric: [ess("Answers ≈ 1.9–2.0x.", "Risponde ≈ 1,9–2,0x."), opt("Uses rule of 72 or compounding anchors.", "Usa la regola del 72 o riferimenti di capitalizzazione.")],
    numeric: { answer: 1.95, unit: 'x', tolerance: { abs: 0.05 }, verify: { fn: 'fv', args: [1, 0.1, 7] } }
  }
];

export const questions: InterviewQuestion[] = [
  ...accounting,
  ...evEquity,
  ...valuation,
  ...dcf,
  ...ma,
  ...lbo,
  ...corporateFinance,
  ...markets,
  ...brainteasers
];
