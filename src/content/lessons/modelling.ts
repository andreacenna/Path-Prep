import type { L, Lesson } from '../types';

/**
 * Academy 9 — Financial Modelling.
 * Modules FMOD1 (Foundations), FMOD2 (Schedules), FMOD3 (Core Models), FMOD4 (Model Quality).
 */
const t = (en: string, it: string): L => ({ en, it });
/** Column headers identical in both languages (years, tickers). */
const yrs = (...labels: string[]): L[] => labels.map((s) => t(s, s));

export const lessons: Lesson[] = [
  /* ============================ FMOD1 — FOUNDATIONS ============================ */
  {
    id: 'mod-excel-architecture',
    academyId: 'modelling',
    moduleId: 'FMOD1',
    mode: 'deep',
    minutes: 12,
    difficulty: 1,
    reviewed: '2026-10',
    objective: t(
      'Structure a model so that anyone can audit it: inputs → calculations → outputs, formatting conventions, no hard-codes in formulas, a consistent timeline and robust lookup functions.',
      'Strutturare un modello in modo che chiunque possa verificarlo: input → calcoli → output, convenzioni di formattazione, nessun valore fisso nelle formule, una timeline coerente e funzioni di ricerca robuste.'
    ),
    screens: [
      {
        type: 'intuition',
        title: t('A model is a machine other people must trust', 'Un modello è una macchina di cui gli altri devono fidarsi'),
        body: t(
          'At 1 a.m. your VP changes the revenue growth from 5% to 4% and expects every number — EBITDA, debt, IRR — to update correctly.\n\nThat only works if the model is built like a machine: **assumptions go in one place**, calculations only reference them, and outputs only read the calculations. Nobody should have to guess where a number comes from.\n\nGood modelling is less about clever formulas and more about **transparency and consistency**.',
          "All'una di notte il tuo VP cambia la crescita dei ricavi dal 5% al 4% e si aspetta che ogni numero — EBITDA, debito, IRR — si aggiorni correttamente.\n\nFunziona solo se il modello è costruito come una macchina: **le ipotesi stanno in un unico posto**, i calcoli fanno riferimento solo a esse e gli output leggono solo i calcoli. Nessuno deve indovinare da dove arriva un numero.\n\nUn buon modello non è fatto di formule brillanti ma di **trasparenza e coerenza**."
        )
      },
      {
        type: 'technical',
        title: t('Inputs → calculations → outputs', 'Input → calcoli → output'),
        body: t(
          '- **Inputs (assumptions)**: growth rates, margins, days, CapEx %, interest rates, deal terms. Typed once, clearly labelled, with units.\n- **Calculations**: income statement, schedules (working capital, PP&E, debt), balance sheet, cash flow. Formulas only — no typed numbers.\n- **Outputs**: summary page, valuation, returns, charts, sensitivity tables.\n\nCalculations should flow in one direction (top to bottom, left to right). Every sheet uses the **same timeline**: if column F is 2027E on one tab, it is 2027E on every tab. Mark historical (A) vs projected (E) periods clearly.',
          "- **Input (ipotesi)**: tassi di crescita, margini, giorni, CapEx %, tassi d'interesse, termini del deal. Inseriti una volta, etichettati con chiarezza e con l'unità di misura.\n- **Calcoli**: conto economico, schedule (circolante, immobilizzazioni, debito), stato patrimoniale, rendiconto finanziario. Solo formule, nessun numero digitato.\n- **Output**: pagina di sintesi, valutazione, rendimenti, grafici, tabelle di sensitività.\n\nI calcoli devono scorrere in una sola direzione (dall'alto in basso, da sinistra a destra). Ogni foglio usa la **stessa timeline**: se la colonna F è il 2027E in un foglio, è il 2027E in tutti. Distingui chiaramente i periodi storici (A) da quelli previsionali (E)."
        )
      },
      {
        type: 'technical',
        title: t('Formatting conventions', 'Convenzioni di formattazione'),
        body: t(
          'Font colour tells the reader what a cell **is**, before they click on it. The near-universal banking convention:\n\n- **Blue**: hard-coded inputs and historical data.\n- **Black**: formulas calculated on the same sheet.\n- **Green**: links pulling a value from another sheet.\n\nMany banks also use **red** (or another colour) for links to other workbooks, which are best avoided. Always check your bank’s template.\n\nOther conventions: units in every label (€m, %, days, x), negatives in parentheses, one consistent decimal format per row, no merged cells inside calculation blocks.',
          "Il colore del carattere dice al lettore che cosa **è** una cella prima ancora di cliccarci. La convenzione quasi universale in banca:\n\n- **Blu**: input fissi e dati storici.\n- **Nero**: formule calcolate nello stesso foglio.\n- **Verde**: collegamenti che prendono un valore da un altro foglio.\n\nMolte banche usano anche il **rosso** (o un altro colore) per i collegamenti ad altre cartelle di lavoro, che è meglio evitare. Verifica sempre il template della tua banca.\n\nAltre convenzioni: unità di misura in ogni etichetta (€m, %, giorni, x), negativi tra parentesi, un formato decimale coerente per riga, nessuna cella unita nei blocchi di calcolo."
        )
      },
      {
        type: 'technical',
        title: t('The golden rules', 'Le regole d’oro'),
        body: t(
          '- **No hard-codes inside formulas.** `=C10*1.05` hides an assumption; `=C10*(1+D$5)` exposes it.\n- **One formula per row**, copied across all projection columns. If a row needs an exception, make it explicit with a flag, not a different formula in one cell.\n- **Consistent sign convention.** Either show costs as positives and subtract them, or as negatives and always add — never mix within a model.\n- **Anchor references correctly** with `$` (F4 cycles through the options) so formulas copy safely.\n- **No hidden rows or plugs.** Group rows instead of hiding them; a balancing plug is an error, not a solution.',
          "- **Nessun valore fisso dentro le formule.** `=C10*1,05` nasconde un'ipotesi; `=C10*(1+D$5)` la rende visibile.\n- **Una formula per riga**, copiata su tutte le colonne di previsione. Se una riga richiede un'eccezione, rendila esplicita con un flag, non con una formula diversa in una sola cella.\n- **Convenzione dei segni coerente.** O i costi sono positivi e si sottraggono, o sono negativi e si sommano sempre — mai mischiare nello stesso modello.\n- **Blocca i riferimenti correttamente** con `$` (F4 scorre le opzioni) perché le formule si copino senza errori.\n- **Niente righe nascoste né plug.** Raggruppa le righe invece di nasconderle; un plug di quadratura è un errore, non una soluzione."
        )
      },
      {
        type: 'formula',
        title: t('Functions every analyst uses', 'Le funzioni che ogni analista usa'),
        formulas: [
          { name: t('Two-way lookup (robust)', 'Ricerca robusta'), expr: '=INDEX(return_range, MATCH(lookup_value, lookup_range, 0))' },
          { name: t('Modern lookup (Excel 2021 / Microsoft 365)', 'Ricerca moderna (Excel 2021 / Microsoft 365)'), expr: '=XLOOKUP(lookup_value, lookup_array, return_array, [if_not_found])' },
          { name: t('Conditional sum', 'Somma condizionata'), expr: '=SUMIFS(sum_range, criteria_range1, criteria1, criteria_range2, criteria2)' },
          { name: t('Error handling (use sparingly)', 'Gestione errori (con parsimonia)'), expr: '=IFERROR(value, value_if_error)' },
          { name: t('Period flag', 'Flag di periodo'), expr: '=IF(AND(year >= start_year, year <= end_year), 1, 0)' }
        ],
        note: t(
          'MATCH with 0 forces an exact match. VLOOKUP defaults to approximate match if the last argument is omitted and breaks when a column is inserted, because the column index is a hard-coded number.',
          'MATCH con 0 impone la corrispondenza esatta. VLOOKUP (CERCA.VERT) usa la corrispondenza approssimata se si omette l’ultimo argomento e si rompe quando si inserisce una colonna, perché l’indice di colonna è un numero fisso.'
        )
      },
      {
        type: 'technical',
        title: t('Functions to handle with care', 'Funzioni da maneggiare con cura'),
        body: t(
          '- **OFFSET** and **INDIRECT** are *volatile*: Excel recalculates them on every change, which slows large models. They are also hard to audit, because trace precedents cannot follow a reference built at run time. Prefer INDEX.\n- **IFERROR** hides *every* error, including genuine mistakes (a broken link, a wrong range). Use it only where an error is expected, e.g. a division by zero in an empty period.\n- **Nested IFs** beyond two levels are unreadable: use a lookup table or CHOOSE with a switch.\n- **Circular references** should exist only by design (e.g. interest on average debt), protected by a circuit breaker.',
          "- **OFFSET** (SCARTO) e **INDIRECT** (INDIRETTO) sono *volatili*: Excel le ricalcola a ogni modifica, rallentando i modelli grandi. Sono anche difficili da verificare, perché la traccia dei precedenti non segue un riferimento costruito durante il calcolo. Meglio INDEX.\n- **IFERROR** (SE.ERRORE) nasconde *qualsiasi* errore, compresi gli sbagli veri (un collegamento rotto, un intervallo errato). Usalo solo dove un errore è atteso, ad esempio una divisione per zero in un periodo vuoto.\n- **SE annidati** oltre due livelli sono illeggibili: usa una tabella di ricerca o CHOOSE (SCEGLI) con uno switch.\n- I **riferimenti circolari** devono esistere solo per scelta (es. interessi sul debito medio), protetti da un circuit breaker."
        )
      },
      {
        type: 'example',
        title: t('Same result, very different model', 'Stesso risultato, modello molto diverso'),
        body: t(
          'Revenue 2026A is €200m in cell C10; growth assumption 5% is in D5. Both formulas give €210m in 2027E — only one survives a change of assumption.',
          'I ricavi 2026A sono €200m nella cella C10; l’ipotesi di crescita del 5% è in D5. Entrambe le formule danno €210m nel 2027E — solo una sopravvive a un cambio di ipotesi.'
        ),
        table: {
          headers: [t('Practice', 'Pratica'), t('Formula in D10', 'Formula in D10'), t('Problem', 'Problema')],
          rows: [
            [t('Hard-code in formula', 'Valore fisso nella formula'), '=C10*1.05', t('Assumption invisible; sensitivities ignore it', 'Ipotesi invisibile; le sensitività la ignorano')],
            [t('Typed number', 'Numero digitato'), '210', t('Does not update at all', 'Non si aggiorna affatto')],
            [t('Best practice', 'Best practice'), '=C10*(1+D$5)', t('Transparent, copies across, flexes in scenarios', 'Trasparente, si copia in orizzontale, varia negli scenari')]
          ]
        }
      },
      {
        type: 'realworld',
        title: t('How analysts actually work', 'Come lavorano davvero gli analisti'),
        body: t(
          'Banks have house templates and formatting macros; your first models will usually be built inside them. Speed matters, but **accuracy matters more**: a wrong number in a board deck costs credibility.\n\nThe point of shortcuts is not showing off — it is keeping your hands on the keyboard so you build and check faster. Core ones: **F2** (edit cell), **F4** (toggle $ anchors), **Ctrl+[** (jump to precedents), **Ctrl+`** (show formulas), **Alt, M, P** (trace precedents), **Ctrl+1** (format cells).',
          'Le banche hanno template interni e macro di formattazione; i tuoi primi modelli saranno quasi sempre costruiti dentro questi. La velocità conta, ma **l’accuratezza conta di più**: un numero sbagliato in una presentazione al board costa credibilità.\n\nLo scopo delle scorciatoie non è fare scena: è tenere le mani sulla tastiera per costruire e controllare più in fretta. Le principali: **F2** (modifica cella), **F4** (blocca con $), **Ctrl+[** (vai ai precedenti), **Ctrl+`** (mostra formule), **Alt, M, P** (traccia precedenti), **Ctrl+1** (formato celle).'
        )
      },
      { type: 'exercise', questionId: 'mod-xl-q1' },
      { type: 'exercise', questionId: 'mod-xl-q2' },
      { type: 'exercise', questionId: 'mod-xl-q3' },
      {
        type: 'interview',
        question: t('What makes a financial model "good"?', 'Che cosa rende "buono" un modello finanziario?'),
        answer: t(
          'Three things. First, **accuracy**: it balances, the cash flows tie, and there are checks proving it. Second, **transparency**: inputs are separated from calculations, colour-coded, with no hard-codes in formulas, so anyone can follow a number back to its source. Third, **flexibility**: one formula per row and scenario switches, so the model can answer the next question — a different growth case or financing structure — in minutes. Complexity only where it changes the decision.',
          'Tre cose. Primo, **accuratezza**: lo stato patrimoniale quadra, i flussi di cassa sono coerenti e ci sono controlli che lo dimostrano. Secondo, **trasparenza**: input separati dai calcoli, codice colori, nessun valore fisso nelle formule, così chiunque può risalire all’origine di un numero. Terzo, **flessibilità**: una formula per riga e switch di scenario, così il modello risponde alla domanda successiva — un altro caso di crescita o un’altra struttura di finanziamento — in pochi minuti. Complessità solo dove cambia la decisione.'
        )
      },
      {
        type: 'mistakes',
        items: [
          t('Typing a growth rate or tax rate directly into a formula (`*1.05`, `*0.24`).', 'Digitare un tasso di crescita o un’aliquota direttamente nella formula (`*1,05`, `*0,24`).'),
          t('Different formulas across the same row, so copying right silently breaks a year.', 'Formule diverse lungo la stessa riga, così copiando a destra un anno si rompe senza che nessuno se ne accorga.'),
          t('Wrapping everything in IFERROR, which hides genuine errors.', 'Avvolgere tutto in IFERROR, nascondendo errori veri.'),
          t('Using VLOOKUP without the FALSE argument (approximate match by default).', 'Usare VLOOKUP senza l’argomento FALSO (corrispondenza approssimata per impostazione predefinita).'),
          t('Timelines that do not line up across sheets (2027E in column F on one tab, column G on another).', 'Timeline non allineate tra i fogli (2027E nella colonna F in un foglio e nella G in un altro).')
        ]
      },
      {
        type: 'summary',
        items: [
          t('Separate inputs, calculations and outputs; flow in one direction.', 'Separa input, calcoli e output; il flusso va in una sola direzione.'),
          t('Blue = inputs, black = formulas, green = links to other sheets.', 'Blu = input, nero = formule, verde = collegamenti ad altri fogli.'),
          t('No hard-codes in formulas; one consistent formula per row; one sign convention.', 'Nessun valore fisso nelle formule; una formula coerente per riga; una sola convenzione dei segni.'),
          t('Prefer INDEX/MATCH or XLOOKUP; avoid volatile OFFSET/INDIRECT; use IFERROR sparingly.', 'Preferisci INDEX/MATCH o XLOOKUP; evita OFFSET/INDIRECT volatili; usa IFERROR con parsimonia.')
        ]
      }
    ],
    questions: [
      {
        id: 'mod-xl-q1',
        kind: 'mcq',
        topic: 'model-formatting',
        difficulty: 1,
        objective: t('Apply the standard font-colour convention.', 'Applicare la convenzione standard dei colori del carattere.'),
        prompt: t(
          'In the DCF tab, cell E20 contains `=IS!E35` (EBIT pulled from the income statement tab). Under the standard banking convention, what font colour should it have?',
          'Nel foglio DCF, la cella E20 contiene `=IS!E35` (EBIT preso dal foglio del conto economico). Secondo la convenzione bancaria standard, di che colore deve essere il carattere?'
        ),
        choices: [t('Blue', 'Blu'), t('Black', 'Nero'), t('Green', 'Verde'), t('Red', 'Rosso')],
        correct: 2,
        explanation: t(
          'It is a link to another sheet in the same workbook, so green. Blue is reserved for hard-coded inputs; black for formulas calculated on the same sheet; red is often used for links to other workbooks.',
          'È un collegamento a un altro foglio della stessa cartella, quindi verde. Il blu è riservato agli input fissi; il nero alle formule calcolate nello stesso foglio; il rosso è spesso usato per collegamenti ad altre cartelle di lavoro.'
        )
      },
      {
        id: 'mod-xl-q2',
        kind: 'multi',
        topic: 'model-best-practice',
        difficulty: 1,
        objective: t('Recognise practices that undermine model integrity.', 'Riconoscere le pratiche che compromettono l’integrità del modello.'),
        prompt: t('Which of these are poor modelling practice? Select all that apply.', 'Quali di queste sono cattive pratiche di modellazione? Seleziona tutte le risposte corrette.'),
        choices: [
          t('`=D12*(1-0.24)` to compute after-tax income', '`=D12*(1-0,24)` per calcolare il reddito al netto delle imposte'),
          t('`=INDEX($C$5:$C$40, MATCH(F$2, $B$5:$B$40, 0))`', '`=INDEX($C$5:$C$40; MATCH(F$2; $B$5:$B$40; 0))`'),
          t('Hiding rows that contain intermediate calculations', 'Nascondere le righe con i calcoli intermedi'),
          t('A balancing "plug" in other current assets to make the balance sheet balance', 'Un "plug" di quadratura nelle altre attività correnti per far quadrare lo stato patrimoniale'),
          t('Wrapping a whole income statement row in IFERROR(…, 0)', 'Avvolgere un’intera riga di conto economico in IFERROR(…; 0)')
        ],
        correct: [0, 2, 3, 4],
        explanation: t(
          'The tax rate is hard-coded inside a formula; hidden rows and balancing plugs hide problems; IFERROR(…, 0) turns genuine errors into silent zeros. The INDEX/MATCH formula is correct: exact match, properly anchored ranges.',
          "L'aliquota è fissata dentro la formula; righe nascoste e plug di quadratura nascondono i problemi; IFERROR(…; 0) trasforma errori veri in zeri silenziosi. La formula INDEX/MATCH è corretta: corrispondenza esatta e intervalli bloccati correttamente."
        )
      },
      {
        id: 'mod-xl-q3',
        kind: 'numeric',
        topic: 'excel-functions',
        difficulty: 1,
        objective: t('Evaluate a SUMIFS formula with two criteria.', 'Calcolare una formula SUMIFS con due criteri.'),
        prompt: t(
          'Data rows (Country, Year, Sales €m): Italy 2025 120; Spain 2025 80; Italy 2026 140; Italy 2025 35; France 2025 60. What does `=SUMIFS(Sales, Country, "Italy", Year, 2025)` return?',
          'Righe di dati (Paese, Anno, Vendite €m): Italia 2025 120; Spagna 2025 80; Italia 2026 140; Italia 2025 35; Francia 2025 60. Che cosa restituisce `=SUMIFS(Vendite; Paese; "Italia"; Anno; 2025)`?'
        ),
        answer: 155,
        unit: '€m',
        verify: { fn: 'sum', args: [120, 35] },
        explanation: t(
          'SUMIFS adds only rows meeting both criteria: Italy 2025 → 120 + 35 = 155. Italy 2026 (140) fails the year test; Spain and France fail the country test.',
          'SUMIFS somma solo le righe che soddisfano entrambi i criteri: Italia 2025 → 120 + 35 = 155. Italia 2026 (140) non rispetta il criterio dell’anno; Spagna e Francia quello del paese.'
        )
      },
      {
        id: 'mod-xl-q4',
        kind: 'mcq',
        topic: 'excel-functions',
        difficulty: 2,
        objective: t('Explain why INDEX/MATCH is preferred to VLOOKUP.', 'Spiegare perché INDEX/MATCH è preferibile a VLOOKUP.'),
        prompt: t('Why do many banks prefer INDEX/MATCH to VLOOKUP?', 'Perché molte banche preferiscono INDEX/MATCH a VLOOKUP?'),
        choices: [
          t('INDEX/MATCH is volatile, so it always shows the latest value', 'INDEX/MATCH è volatile, quindi mostra sempre il valore più recente'),
          t('VLOOKUP cannot return numbers, only text', 'VLOOKUP non può restituire numeri, solo testo'),
          t('VLOOKUP relies on a hard-coded column number and can only look to the right; INDEX/MATCH survives inserted columns and looks in any direction', 'VLOOKUP si basa su un numero di colonna fisso e cerca solo verso destra; INDEX/MATCH resiste all’inserimento di colonne e cerca in qualsiasi direzione'),
          t('INDEX/MATCH automatically ignores errors', 'INDEX/MATCH ignora automaticamente gli errori')
        ],
        correct: 2,
        explanation: t(
          'VLOOKUP’s column index is a typed number, so inserting a column returns the wrong field without any error, and the lookup column must be the leftmost. INDEX/MATCH references the return range directly. Neither function is volatile (OFFSET and INDIRECT are), and neither ignores errors.',
          "L'indice di colonna di VLOOKUP è un numero digitato: inserendo una colonna restituisce il campo sbagliato senza segnalare errori, e la colonna di ricerca deve essere la prima a sinistra. INDEX/MATCH fa riferimento direttamente all'intervallo da restituire. Nessuna delle due è volatile (lo sono OFFSET e INDIRECT) e nessuna ignora gli errori."
        )
      },
      {
        id: 'mod-xl-q5',
        kind: 'order',
        topic: 'model-architecture',
        difficulty: 1,
        objective: t('Lay out the logical flow of a model.', 'Disporre il flusso logico di un modello.'),
        prompt: t('Order the blocks of a well-structured model from first to last.', 'Ordina i blocchi di un modello ben strutturato dal primo all’ultimo.'),
        items: [
          t('Cover and table of contents', 'Copertina e indice'),
          t('Inputs and assumptions (blue)', 'Input e ipotesi (in blu)'),
          t('Calculations: statements and schedules', 'Calcoli: prospetti e schedule'),
          t('Outputs: valuation, returns, summary', 'Output: valutazione, rendimenti, sintesi'),
          t('Checks summary', 'Riepilogo dei controlli')
        ],
        explanation: t(
          'Information flows from assumptions to calculations to outputs. A checks summary (balance check, cash check, error flags) is usually linked to the cover or summary page so problems are visible immediately; its position is a convention, but it must aggregate all checks.',
          'Le informazioni scorrono dalle ipotesi ai calcoli agli output. Il riepilogo dei controlli (quadratura, cassa, flag di errore) è di solito collegato alla copertina o alla pagina di sintesi per rendere subito visibili i problemi; la posizione è una convenzione, ma deve aggregare tutti i controlli.'
        )
      }
    ],
    flashcards: [
      { id: 'fc-mod-xl-1', topic: 'model-formatting', front: t('Font colour convention in banking models?', 'Convenzione dei colori nei modelli bancari?'), back: t('Blue = hard-coded inputs; black = formulas on the same sheet; green = links to other sheets (often red for links to other files).', 'Blu = input fissi; nero = formule nello stesso foglio; verde = collegamenti ad altri fogli (spesso rosso per collegamenti ad altri file).') },
      { id: 'fc-mod-xl-2', topic: 'model-best-practice', front: t('Why never write `=C10*1.05`?', 'Perché non scrivere mai `=C10*1,05`?'), back: t('The 5% assumption is hidden in the formula: it cannot be seen, flexed or sensitised. Put it in an input cell.', 'L’ipotesi del 5% è nascosta nella formula: non si vede, non si può variare né sensitivizzare. Va in una cella di input.') },
      { id: 'fc-mod-xl-3', topic: 'excel-functions', front: t('Name two volatile Excel functions and why they matter.', 'Cita due funzioni Excel volatili e perché contano.'), back: t('OFFSET and INDIRECT (also TODAY, NOW, RAND). They recalculate on every change, slowing models, and are hard to audit.', 'OFFSET e INDIRECT (anche OGGI, ADESSO, CASUALE). Si ricalcolano a ogni modifica, rallentano i modelli e sono difficili da verificare.') },
      { id: 'fc-mod-xl-4', topic: 'excel-functions', front: t('What does the 0 in MATCH(x, range, 0) do?', 'A cosa serve lo 0 in MATCH(x; intervallo; 0)?'), back: t('Forces an exact match. Without it MATCH assumes a sorted range and returns approximate matches.', 'Impone la corrispondenza esatta. Senza, MATCH presuppone un intervallo ordinato e restituisce corrispondenze approssimate.') },
      { id: 'fc-mod-xl-5', topic: 'model-architecture', front: t('Rule for timelines across sheets?', 'Regola per le timeline tra i fogli?'), back: t('Same period in the same column on every sheet, with historical (A) and projected (E) clearly flagged.', 'Stesso periodo nella stessa colonna in ogni foglio, con periodi storici (A) e previsionali (E) chiaramente indicati.') }
    ],
    sources: [
      { label: 'Microsoft Support — XLOOKUP function (availability: Excel 2021 and later, Microsoft 365)' },
      { label: 'Microsoft Learn — Excel recalculation (volatile functions)', url: 'https://learn.microsoft.com/en-us/office/client-developer/excel/excel-recalculation' }
    ]
  },
  {
    id: 'mod-revenue-costs',
    academyId: 'modelling',
    moduleId: 'FMOD1',
    mode: 'deep',
    minutes: 12,
    difficulty: 2,
    reviewed: '2026-10',
    objective: t(
      'Build revenue from operating drivers (volume × price, segments, cohorts) and costs split between variable and fixed, and explain operating leverage.',
      'Costruire i ricavi a partire dai driver operativi (volumi × prezzi, segmenti, coorti) e i costi distinti tra variabili e fissi, e spiegare la leva operativa.'
    ),
    screens: [
      {
        type: 'intuition',
        title: t('Revenue is an output, not an input', 'I ricavi sono un risultato, non un input'),
        body: t(
          '"Revenue grows 8%" is a conclusion. A good model asks **why**: more customers? higher prices? new stores? a new product?\n\nBreaking revenue into drivers lets you test each one against reality — capacity, market size, competitors’ pricing — and lets the client argue about the right thing.\n\nCosts work the same way: some move with volume, others stay fixed. That split decides how profits react when sales move.',
          '"I ricavi crescono dell’8%" è una conclusione. Un buon modello si chiede **perché**: più clienti? prezzi più alti? nuovi punti vendita? un nuovo prodotto?\n\nScomporre i ricavi in driver permette di confrontare ciascuno con la realtà — capacità produttiva, dimensione del mercato, prezzi dei concorrenti — e di discutere con il cliente sulla cosa giusta.\n\nCon i costi è lo stesso: alcuni variano con i volumi, altri restano fissi. Questa distinzione decide come reagiscono i profitti quando cambiano le vendite.'
        )
      },
      {
        type: 'technical',
        title: t('Revenue build approaches', 'Come costruire i ricavi'),
        body: t(
          '- **Volume × price**: units sold × average selling price (industrials, consumer goods).\n- **Segment build**: forecast each division or geography separately and sum (conglomerates, multi-country groups).\n- **Customer / cohort build**: customers × revenue per customer, with each year’s cohort decaying at a retention rate (SaaS, subscriptions, telecoms).\n- **Unit build**: stores × sales per store, split into like-for-like growth and new openings (retail, restaurants).\n- **Top-down**: market size × market share — useful as a sanity check on bottom-up forecasts.\n\nPick the drivers management actually reports and the market actually debates.',
          '- **Volumi × prezzi**: unità vendute × prezzo medio di vendita (industria, beni di consumo).\n- **Per segmento**: si prevede ogni divisione o area geografica separatamente e si somma (conglomerate, gruppi multinazionali).\n- **Per clienti / coorti**: clienti × ricavo medio per cliente, con ogni coorte annuale che si riduce secondo un tasso di retention (SaaS, abbonamenti, telecomunicazioni).\n- **Per unità**: punti vendita × vendite per punto vendita, distinguendo crescita like-for-like e nuove aperture (retail, ristorazione).\n- **Top-down**: dimensione del mercato × quota di mercato — utile come verifica delle previsioni bottom-up.\n\nScegli i driver che il management comunica davvero e su cui il mercato discute.'
        )
      },
      {
        type: 'technical',
        title: t('Cost build and operating leverage', 'Costruire i costi e la leva operativa'),
        body: t(
          '- **Variable costs** scale with volume: raw materials, freight, sales commissions. Model per unit or as % of revenue.\n- **Fixed costs** do not move with volume in the short term: rent, head-office staff, IT. Model as a € amount growing with inflation or headcount × cost per FTE.\n- **Semi-fixed** costs step up when capacity is reached (a new plant, a new shift).\n\n**Operating leverage**: the higher the share of fixed costs, the more EBIT moves for a given change in revenue — upwards and downwards. Modelling all costs as a flat % of revenue silently assumes zero operating leverage.',
          "- I **costi variabili** seguono i volumi: materie prime, trasporti, provvigioni. Si modellano per unità o in % dei ricavi.\n- I **costi fissi** non variano con i volumi nel breve periodo: affitti, personale di sede, IT. Si modellano come importo in € che cresce con l'inflazione o come numero di FTE × costo per FTE.\n- I **costi semi-fissi** aumentano a gradini quando si satura la capacità (un nuovo stabilimento, un nuovo turno).\n\n**Leva operativa**: più è alta la quota di costi fissi, più l'EBIT si muove a parità di variazione dei ricavi — in su e in giù. Modellare tutti i costi come % fissa dei ricavi presuppone, senza dirlo, una leva operativa nulla."
        )
      },
      {
        type: 'formula',
        formulas: [
          { name: t('Volume × price', 'Volumi × prezzi'), expr: 'Revenue_t = Units_t × Price_t' },
          { name: t('Cohort build', 'Costruzione per coorti'), expr: 'Customers_t = New_t + Customers_(t−1) × Retention' },
          { name: t('Contribution margin', 'Margine di contribuzione'), expr: 'Contribution = Revenue − Variable costs' },
          {
            name: t('Degree of operating leverage', 'Grado di leva operativa'),
            expr: 'DOL = %ΔEBIT / %ΔRevenue = Contribution / EBIT',
            vars: [{ sym: 'DOL', desc: t('Measured at the starting level of activity', 'Misurato al livello di attività iniziale') }]
          }
        ]
      },
      {
        type: 'example',
        title: t('A driver-based build', 'Una costruzione per driver'),
        body: t(
          'Alfa S.p.A. sells 100k units at €50. Volumes grow 10% a year, prices rise €2 a year, variable cost is €20 per unit and fixed costs are €1.5m. Figures in €k.',
          'Alfa S.p.A. vende 100k unità a €50. I volumi crescono del 10% l’anno, i prezzi aumentano di €2 l’anno, il costo variabile è €20 per unità e i costi fissi €1,5m. Valori in €k.'
        ),
        table: {
          headers: [t('€k', '€k'), ...yrs('Y1', 'Y2', 'Y3')],
          rows: [
            [t('Units (k)', 'Unità (k)'), 100, 110, 121],
            [t('Price (€)', 'Prezzo (€)'), 50, 52, 54],
            [t('Revenue', 'Ricavi'), '5,000', '5,720', '6,534'],
            [t('Variable costs (€20/unit)', 'Costi variabili (€20/unità)'), '(2,000)', '(2,200)', '(2,420)'],
            [t('Fixed costs', 'Costi fissi'), '(1,500)', '(1,500)', '(1,500)'],
            ['EBITDA', '1,500', '2,020', '2,614']
          ],
          totalRows: [5]
        }
      },
      {
        type: 'technical',
        title: t('Reading the example', 'Leggere l’esempio'),
        body: t(
          'From Y1 to Y2 revenue grows **14.4%** but EBITDA grows **34.7%** — fixed costs are spread over more revenue.\n\nAt Y1, contribution = 5,000 − 2,000 = 3,000 and EBITDA = 1,500, so DOL = 3,000 / 1,500 = **2.0x**: a 1% change in revenue at constant price and unit cost moves EBITDA by about 2%. (The actual ratio here is higher because price also rises without extra variable cost.)\n\nThe same leverage hurts in a downturn: that is why lenders look at fixed-cost structure, not just margins.',
          "Da Y1 a Y2 i ricavi crescono del **14,4%**, ma l'EBITDA del **34,7%** — i costi fissi si distribuiscono su più ricavi.\n\nIn Y1 il margine di contribuzione è 5.000 − 2.000 = 3.000 e l'EBITDA 1.500, quindi DOL = 3.000 / 1.500 = **2,0x**: una variazione dell'1% dei ricavi a prezzo e costo unitario costanti muove l'EBITDA di circa il 2%. (Qui il rapporto effettivo è più alto perché anche il prezzo cresce senza costi variabili aggiuntivi.)\n\nLa stessa leva fa male in una recessione: per questo le banche finanziatrici guardano alla struttura dei costi fissi, non solo ai margini."
        )
      },
      {
        type: 'realworld',
        body: t(
          'In a sell-side process the **management case** usually shows ambitious volume and pricing; the bank and buyers build a more prudent **base case** by flexing those same drivers. Analysts reconcile forecasts with **broker consensus** for listed companies and with historical trends (are we forecasting margins the company has never achieved?). Driver-based builds make those debates concrete: "you assume 6% price increases in a market growing 2%".',
          'In un processo sell-side il **management case** mostra di solito volumi e prezzi ambiziosi; la banca e i compratori costruiscono un **base case** più prudente variando gli stessi driver. Per le società quotate gli analisti confrontano le previsioni con il **consensus** dei broker e con i trend storici (stiamo prevedendo margini che la società non ha mai raggiunto?). Una costruzione per driver rende concreto il dibattito: "ipotizzate aumenti di prezzo del 6% in un mercato che cresce del 2%".'
        )
      },
      { type: 'exercise', questionId: 'mod-rev-q1' },
      { type: 'exercise', questionId: 'mod-rev-q2' },
      { type: 'exercise', questionId: 'mod-rev-q3' },
      {
        type: 'interview',
        question: t('How would you forecast revenue for a subscription software company?', 'Come prevederesti i ricavi di una società di software in abbonamento?'),
        answer: t(
          'I would build it by customer cohort. Start from the opening customer base, add new customers each year from sales capacity or marketing spend, and apply a retention (churn) rate to each existing cohort. Multiply customers by average revenue per user, adding upsell to existing customers — that gives net revenue retention. I would then sanity-check the result against market size and the company’s historical growth, and keep pricing, churn and new-customer growth as separate inputs so they can be flexed in scenarios.',
          'La costruirei per coorti di clienti. Parto dalla base clienti iniziale, aggiungo ogni anno i nuovi clienti in funzione della capacità commerciale o della spesa di marketing e applico un tasso di retention (churn) a ciascuna coorte esistente. Moltiplico i clienti per il ricavo medio per utente, aggiungendo l’upsell sui clienti esistenti — da cui la net revenue retention. Poi verifico il risultato rispetto alla dimensione del mercato e alla crescita storica, tenendo prezzo, churn e crescita dei nuovi clienti come input separati da variare negli scenari.'
        )
      },
      {
        type: 'mistakes',
        items: [
          t('Forecasting revenue as a single growth rate with no link to capacity, market size or pricing.', 'Prevedere i ricavi con un unico tasso di crescita, senza legame con capacità, mercato o prezzi.'),
          t('Modelling all costs as % of revenue, which removes operating leverage.', 'Modellare tutti i costi in % dei ricavi, eliminando la leva operativa.'),
          t('Double counting growth: applying both a volume increase and a revenue growth rate to the same line.', 'Contare due volte la crescita: applicare alla stessa riga sia un aumento dei volumi sia un tasso di crescita dei ricavi.'),
          t('Mixing units: volumes in thousands × price in € giving revenue in €k, then adding it to costs in €m.', 'Mischiare le unità: volumi in migliaia × prezzo in € danno ricavi in €k, poi sommati a costi in €m.')
        ]
      },
      {
        type: 'summary',
        items: [
          t('Build revenue from drivers: volume × price, segments, cohorts, units.', 'Costruisci i ricavi dai driver: volumi × prezzi, segmenti, coorti, unità.'),
          t('Split costs into variable and fixed; model fixed costs in € not as % of revenue.', 'Distingui costi variabili e fissi; modella i fissi in €, non in % dei ricavi.'),
          t('DOL = contribution / EBIT: high fixed costs amplify EBIT swings.', 'DOL = margine di contribuzione / EBIT: costi fissi elevati amplificano le oscillazioni dell’EBIT.'),
          t('Sanity-check against history, consensus and market size.', 'Verifica con dati storici, consensus e dimensione del mercato.')
        ]
      }
    ],
    questions: [
      {
        id: 'mod-rev-q1',
        kind: 'grid',
        topic: 'revenue-build',
        difficulty: 2,
        objective: t('Build revenue and EBITDA from volume, price and fixed/variable costs.', 'Costruire ricavi ed EBITDA da volumi, prezzi e costi fissi/variabili.'),
        prompt: t(
          'Beta S.r.l.: variable cost €15 per unit, fixed costs €900k per year. Fill in revenue and EBITDA (€k).',
          'Beta S.r.l.: costo variabile €15 per unità, costi fissi €900k l’anno. Completa ricavi ed EBITDA (€k).'
        ),
        unit: '€k',
        columns: [t('€k', '€k'), ...yrs('Y1', 'Y2', 'Y3')],
        rows: [
          { label: t('Units (k)', 'Unità (k)'), cells: [80, 92, 100] },
          { label: t('Price (€)', 'Prezzo (€)'), cells: [40, 41, 43] },
          {
            label: t('Revenue', 'Ricavi'),
            cells: [
              { answer: 3200, verify: { fn: 'product', args: [80, 40] } },
              { answer: 3772, verify: { fn: 'product', args: [92, 41] } },
              { answer: 4300, verify: { fn: 'product', args: [100, 43] } }
            ]
          },
          {
            label: t('Variable costs', 'Costi variabili'),
            cells: [
              { answer: 1200, verify: { fn: 'product', args: [80, 15] } },
              { answer: 1380, verify: { fn: 'product', args: [92, 15] } },
              { answer: 1500, verify: { fn: 'product', args: [100, 15] } }
            ]
          },
          { label: t('Fixed costs', 'Costi fissi'), cells: [900, 900, 900] },
          {
            label: t('EBITDA', 'EBITDA'),
            cells: [
              { answer: 1100, verify: { fn: 'sum', args: [3200, -1200, -900] } },
              { answer: 1492, verify: { fn: 'sum', args: [3772, -1380, -900] } },
              { answer: 1900, verify: { fn: 'sum', args: [4300, -1500, -900] } }
            ]
          }
        ],
        explanation: t(
          'Revenue = units (k) × price (€) = €k: 80×40 = 3,200; 92×41 = 3,772; 100×43 = 4,300. Variable costs = units × €15: 1,200; 1,380; 1,500. EBITDA = revenue − variable − fixed: 1,100; 1,492; 1,900. Note how EBITDA rises 72.7% from Y1 to Y3 while revenue rises 34.4% — operating leverage from the fixed €900k. A common error is entering variable costs as a % of Y1 revenue instead of per unit.',
          "Ricavi = unità (k) × prezzo (€) = €k: 80×40 = 3.200; 92×41 = 3.772; 100×43 = 4.300. Costi variabili = unità × €15: 1.200; 1.380; 1.500. EBITDA = ricavi − variabili − fissi: 1.100; 1.492; 1.900. Da Y1 a Y3 l'EBITDA cresce del 72,7% mentre i ricavi del 34,4% — leva operativa dovuta ai €900k fissi. Un errore comune è calcolare i costi variabili in % dei ricavi di Y1 anziché per unità."
        )
      },
      {
        id: 'mod-rev-q2',
        kind: 'numeric',
        topic: 'operating-leverage',
        difficulty: 2,
        objective: t('Compute the degree of operating leverage.', 'Calcolare il grado di leva operativa.'),
        prompt: t(
          'Gamma S.p.A.: revenue €1,000m, variable costs 60% of revenue, fixed costs €300m. What is its degree of operating leverage (contribution / EBIT)?',
          'Gamma S.p.A.: ricavi €1.000m, costi variabili pari al 60% dei ricavi, costi fissi €300m. Qual è il grado di leva operativa (margine di contribuzione / EBIT)?'
        ),
        answer: 4,
        unit: 'x',
        verify: { fn: 'ratio', args: [400, 100] },
        steps: [
          t('Contribution = 1,000 − 600 = 400', 'Margine di contribuzione = 1.000 − 600 = 400'),
          t('EBIT = 400 − 300 = 100', 'EBIT = 400 − 300 = 100'),
          t('DOL = 400 / 100 = 4.0x → a 10% revenue rise lifts EBIT from 100 to 140 (+40%)', 'DOL = 400 / 100 = 4,0x → un aumento dei ricavi del 10% porta l’EBIT da 100 a 140 (+40%)')
        ],
        explanation: t(
          'DOL = 400 / 100 = 4.0x. Check: revenue +10% → 1,100 − 660 − 300 = 140, i.e. EBIT +40% = 4 × 10%. Dividing revenue by EBIT (10x) or using EBIT margin confuses leverage with profitability.',
          'DOL = 400 / 100 = 4,0x. Verifica: ricavi +10% → 1.100 − 660 − 300 = 140, cioè EBIT +40% = 4 × 10%. Dividere i ricavi per l’EBIT (10x) o usare il margine EBIT confonde la leva con la redditività.'
        )
      },
      {
        id: 'mod-rev-q3',
        kind: 'mcq',
        topic: 'operating-leverage',
        difficulty: 2,
        objective: t('Interpret the effect of cost structure on profit sensitivity.', 'Interpretare l’effetto della struttura dei costi sulla sensibilità dei profitti.'),
        prompt: t(
          'Two companies have the same revenue and the same EBITDA margin. Company A’s costs are mostly fixed; Company B’s are mostly variable. Revenue falls 15% for both. What happens?',
          'Due società hanno gli stessi ricavi e lo stesso margine EBITDA. I costi della società A sono soprattutto fissi, quelli della B soprattutto variabili. I ricavi calano del 15% per entrambe. Che cosa succede?'
        ),
        choices: [
          t('Both EBITDAs fall 15% because margins are equal', 'Entrambi gli EBITDA calano del 15% perché i margini sono uguali'),
          t('A’s EBITDA falls by a larger percentage than B’s', 'L’EBITDA di A cala in percentuale più di quello di B'),
          t('B’s EBITDA falls by a larger percentage than A’s', 'L’EBITDA di B cala in percentuale più di quello di A'),
          t('Neither EBITDA changes in the short term', 'Nessuno dei due EBITDA cambia nel breve periodo')
        ],
        correct: 1,
        explanation: t(
          'A has higher operating leverage: its costs do not fall with revenue, so most of the lost revenue drops straight to EBITDA. B’s variable costs fall with revenue, cushioning profit. Equal margins today say nothing about sensitivity.',
          "A ha una leva operativa più alta: i suoi costi non scendono con i ricavi, quindi gran parte dei ricavi persi si riflette direttamente sull'EBITDA. I costi variabili di B scendono con i ricavi, attutendo il calo. Margini uguali oggi non dicono nulla sulla sensibilità."
        )
      },
      {
        id: 'mod-rev-q4',
        kind: 'numeric',
        topic: 'revenue-build',
        difficulty: 2,
        objective: t('Apply a cohort retention build.', 'Applicare una costruzione per coorti con retention.'),
        prompt: t(
          'A SaaS company starts the year with 2,000 customers, retains 85% of them and adds 600 new customers. ARPU is €1,200 per year. Assuming revenue is based on closing customers, what is revenue (€k)?',
          'Una società SaaS inizia l’anno con 2.000 clienti, ne trattiene l’85% e ne acquisisce 600 nuovi. L’ARPU è €1.200 l’anno. Ipotizzando che i ricavi si basino sui clienti di fine anno, quali sono i ricavi (€k)?'
        ),
        answer: 2760,
        unit: '€k',
        verify: { fn: 'product', args: [2300, 1.2] },
        steps: [
          t('Retained = 2,000 × 85% = 1,700', 'Clienti trattenuti = 2.000 × 85% = 1.700'),
          t('Closing customers = 1,700 + 600 = 2,300', 'Clienti finali = 1.700 + 600 = 2.300'),
          t('Revenue = 2,300 × €1,200 = €2,760k', 'Ricavi = 2.300 × €1.200 = €2.760k')
        ],
        explanation: t(
          '2,000 × 0.85 + 600 = 2,300 customers × €1.2k = €2,760k. Forgetting churn gives 2,600 × 1.2 = 3,120; applying churn to the new customers too would understate revenue. (Many models use average customers for the year — always state the convention.)',
          '2.000 × 0,85 + 600 = 2.300 clienti × €1,2k = €2.760k. Dimenticare il churn dà 2.600 × 1,2 = 3.120; applicarlo anche ai nuovi clienti sottostimerebbe i ricavi. (Molti modelli usano i clienti medi dell’anno — esplicita sempre la convenzione.)'
        )
      },
      {
        id: 'mod-rev-q5',
        kind: 'multi',
        topic: 'cost-build',
        difficulty: 1,
        objective: t('Classify costs as variable or fixed.', 'Classificare i costi come variabili o fissi.'),
        prompt: t('For a manufacturing company, which costs are typically variable in the short term? Select all that apply.', 'Per un’azienda manifatturiera, quali costi sono tipicamente variabili nel breve periodo? Seleziona tutte le risposte corrette.'),
        choices: [
          t('Raw materials', 'Materie prime'),
          t('Head-office rent', 'Affitto della sede'),
          t('Outbound freight', 'Trasporti in uscita'),
          t('Sales commissions', 'Provvigioni sulle vendite'),
          t('Depreciation of the plant (straight-line)', 'Ammortamento dello stabilimento (a quote costanti)')
        ],
        correct: [0, 2, 3],
        explanation: t(
          'Raw materials, freight and commissions scale with units sold. Rent and straight-line depreciation are fixed regardless of volume in the short term.',
          'Materie prime, trasporti e provvigioni crescono con le unità vendute. Affitto e ammortamento a quote costanti restano fissi indipendentemente dai volumi nel breve periodo.'
        )
      }
    ],
    flashcards: [
      { id: 'fc-mod-rev-1', topic: 'revenue-build', front: t('Four ways to build revenue?', 'Quattro modi per costruire i ricavi?'), back: t('Volume × price; segment build; customer/cohort build; unit build (stores × sales per store). Top-down market × share as a check.', 'Volumi × prezzi; per segmento; per clienti/coorti; per unità (punti vendita × vendite per punto). Mercato × quota come verifica.') },
      { id: 'fc-mod-rev-2', topic: 'operating-leverage', front: t('Degree of operating leverage formula?', 'Formula del grado di leva operativa?'), back: t('DOL = %ΔEBIT / %ΔRevenue = Contribution margin / EBIT.', 'DOL = %ΔEBIT / %ΔRicavi = Margine di contribuzione / EBIT.') },
      { id: 'fc-mod-rev-3', topic: 'cost-build', front: t('What does modelling all costs as % of revenue assume?', 'Che cosa presuppone modellare tutti i costi in % dei ricavi?'), back: t('That all costs are variable — zero operating leverage. EBIT margin stays flat whatever happens to volume.', 'Che tutti i costi siano variabili — leva operativa nulla. Il margine EBIT resta costante qualunque cosa accada ai volumi.') },
      { id: 'fc-mod-rev-4', topic: 'revenue-build', front: t('Cohort customer roll-forward?', 'Roll-forward dei clienti per coorti?'), back: t('Closing = Opening × retention + New customers.', 'Clienti finali = Iniziali × retention + Nuovi clienti.') }
    ]
  },

  /* ============================ FMOD2 — SCHEDULES ============================ */
  {
    id: 'mod-nwc-schedule',
    academyId: 'modelling',
    moduleId: 'FMOD2',
    mode: 'deep',
    minutes: 12,
    difficulty: 2,
    reviewed: '2026-10',
    objective: t(
      'Forecast receivables, inventory and payables with DSO, DIO and DPO, and derive the change in net working capital and its cash flow impact.',
      'Prevedere crediti, magazzino e debiti commerciali con DSO, DIO e DPO e ricavare la variazione del capitale circolante netto e il suo impatto sui flussi di cassa.'
    ),
    screens: [
      {
        type: 'intuition',
        title: t('Profit is not cash', 'L’utile non è cassa'),
        body: t(
          'When a company sells on 60-day terms, it books revenue today but collects cash in two months. When it builds stock, cash leaves before any sale. When it pays suppliers late, it keeps cash longer.\n\n**Net working capital** is the cash tied up in running the business day to day. As a company grows, NWC usually grows too — and that growth **consumes cash** even if profits are strong.',
          "Quando un'azienda vende con pagamento a 60 giorni, registra il ricavo oggi ma incassa tra due mesi. Quando accumula scorte, la cassa esce prima di qualsiasi vendita. Quando paga i fornitori più tardi, trattiene la cassa più a lungo.\n\nIl **capitale circolante netto** è la cassa immobilizzata nella gestione quotidiana. Quando l'azienda cresce, di solito cresce anche il circolante — e questa crescita **assorbe cassa** anche se gli utili sono solidi."
        )
      },
      {
        type: 'technical',
        title: t('What goes into operating NWC', 'Che cosa entra nel circolante operativo'),
        body: t(
          '**Operating NWC = operating current assets − operating current liabilities.**\n\n- Included: trade receivables, inventory, prepaid expenses and other operating assets; trade payables, accrued expenses, deferred revenue and other operating liabilities.\n- Excluded: **cash**, short-term **debt** and the current portion of long-term debt — they are financing items, captured in net debt.\n\nEach item is forecast with a driver: receivables with revenue (DSO), inventory and payables with COGS (DIO, DPO), others as % of revenue. Projections normally apply days to **year-end** balances, for consistency with the balance sheet.',
          "**Circolante operativo = attività correnti operative − passività correnti operative.**\n\n- Incluse: crediti commerciali, rimanenze, risconti attivi e altre attività operative; debiti verso fornitori, ratei passivi, ricavi differiti e altre passività operative.\n- Escluse: **cassa**, **debiti finanziari** a breve e quota corrente dei debiti a lungo termine — sono voci finanziarie, comprese nella posizione finanziaria netta.\n\nOgni voce si prevede con un driver: i crediti con i ricavi (DSO), magazzino e debiti verso fornitori con il costo del venduto (DIO, DPO), le altre voci in % dei ricavi. Nelle proiezioni i giorni si applicano di norma ai saldi di **fine anno**, per coerenza con lo stato patrimoniale."
        )
      },
      {
        type: 'formula',
        formulas: [
          { name: t('Receivables', 'Crediti commerciali'), expr: 'AR = Revenue × DSO / 365' },
          { name: t('Inventory', 'Rimanenze'), expr: 'Inventory = COGS × DIO / 365' },
          { name: t('Payables', 'Debiti verso fornitori'), expr: 'AP = COGS × DPO / 365' },
          { name: t('Net working capital and its change', 'Circolante netto e sua variazione'), expr: 'NWC = AR + Inventory − AP;  ΔNWC = NWC_t − NWC_(t−1)' },
          { name: t('Cash conversion cycle', 'Ciclo di conversione di cassa'), expr: 'CCC = DSO + DIO − DPO' }
        ],
        note: t(
          'An increase in NWC is a cash outflow: subtract ΔNWC in the cash flow statement. Some models use purchases instead of COGS for DPO — be consistent with how historical days were computed.',
          'Un aumento del circolante è un’uscita di cassa: ΔNWC si sottrae nel rendiconto finanziario. Alcuni modelli usano gli acquisti anziché il costo del venduto per il DPO — sii coerente con il calcolo dei giorni storici.'
        )
      },
      {
        type: 'example',
        title: t('Historical days drive the forecast', 'I giorni storici guidano la previsione'),
        body: t(
          'Delta S.p.A. (€m): revenue 730, COGS 438, receivables 100, inventory 72, payables 54. Compute historical days, then hold them flat (or move them toward management targets) in the projections.',
          'Delta S.p.A. (€m): ricavi 730, costo del venduto 438, crediti 100, magazzino 72, debiti verso fornitori 54. Si calcolano i giorni storici e poi si mantengono costanti (o si portano verso i target del management) nelle proiezioni.'
        ),
        table: {
          headers: [t('Item', 'Voce'), t('Calculation', 'Calcolo'), t('Days', 'Giorni')],
          rows: [
            ['DSO', '100 / 730 × 365', '50'],
            ['DIO', '72 / 438 × 365', '60'],
            ['DPO', '54 / 438 × 365', '45'],
            [t('Cash conversion cycle', 'Ciclo di conversione'), '50 + 60 − 45', '65']
          ],
          totalRows: [3]
        }
      },
      {
        type: 'realworld',
        body: t(
          'NWC matters far beyond the DCF. In M&A, the **SPA** typically sets a "normalised" NWC target (the **peg**): if actual NWC at closing is below it, the price is reduced. Sellers may try to "window-dress" by delaying supplier payments or pushing collections before closing, so buyers analyse **monthly** NWC to capture seasonality. Retailers often run negative working capital (customers pay immediately, suppliers are paid later), so growth *generates* cash.',
          "Il circolante conta ben oltre il DCF. Nelle operazioni di M&A l'**SPA** fissa di solito un livello \"normalizzato\" di circolante (il **peg**): se il circolante effettivo al closing è inferiore, il prezzo si riduce. I venditori possono tentare un \"window dressing\" ritardando i pagamenti ai fornitori o anticipando gli incassi prima del closing, quindi i compratori analizzano il circolante **mensile** per cogliere la stagionalità. I retailer hanno spesso circolante negativo (i clienti pagano subito, i fornitori dopo), quindi la crescita *genera* cassa."
        )
      },
      { type: 'exercise', questionId: 'mod-nwc-q1' },
      { type: 'exercise', questionId: 'mod-nwc-q2' },
      { type: 'exercise', questionId: 'mod-nwc-q3' },
      {
        type: 'interview',
        question: t('If a company’s DSO goes from 50 to 40 days, what happens to its cash flow?', 'Se il DSO di un’azienda passa da 50 a 40 giorni, che cosa succede ai flussi di cassa?'),
        answer: t(
          'Receivables fall because customers pay faster: with €876m of revenue, 10 days fewer equals 876 × 10 / 365 = €24m less receivables. NWC falls by €24m, which is a one-off **cash inflow** of €24m in that year. Profit is unchanged — it is a timing benefit — and afterwards receivables simply grow with revenue at the new 40-day level.',
          'I crediti diminuiscono perché i clienti pagano prima: con €876m di ricavi, 10 giorni in meno equivalgono a 876 × 10 / 365 = €24m di crediti in meno. Il circolante si riduce di €24m, che è un **incasso** una tantum di €24m in quell’anno. L’utile non cambia — è un beneficio temporale — e poi i crediti crescono semplicemente con i ricavi al nuovo livello di 40 giorni.'
        )
      },
      {
        type: 'mistakes',
        items: [
          t('Adding ΔNWC instead of subtracting it: an increase in working capital uses cash.', 'Sommare ΔNWC invece di sottrarlo: un aumento del circolante assorbe cassa.'),
          t('Including cash or short-term debt in NWC, which double counts items already in net debt.', 'Includere cassa o debiti finanziari a breve nel circolante, contando due volte voci già nella posizione finanziaria netta.'),
          t('Driving inventory and payables off revenue when historical days were computed on COGS.', 'Calcolare magazzino e debiti sui ricavi quando i giorni storici erano calcolati sul costo del venduto.'),
          t('Using 360 in forecasts and 365 in historicals (or vice versa).', 'Usare 360 nelle previsioni e 365 negli storici (o viceversa).')
        ]
      },
      {
        type: 'summary',
        items: [
          t('Operating NWC excludes cash and debt.', 'Il circolante operativo esclude cassa e debiti finanziari.'),
          t('AR = Revenue × DSO/365; Inventory = COGS × DIO/365; AP = COGS × DPO/365.', 'Crediti = Ricavi × DSO/365; Magazzino = COGS × DIO/365; Debiti = COGS × DPO/365.'),
          t('ΔNWC > 0 is a cash outflow; ΔNWC < 0 releases cash.', 'ΔNWC > 0 è un’uscita di cassa; ΔNWC < 0 libera cassa.'),
          t('CCC = DSO + DIO − DPO: the shorter, the less cash growth consumes.', 'CCC = DSO + DIO − DPO: più è breve, meno cassa assorbe la crescita.')
        ]
      }
    ],
    questions: [
      {
        id: 'mod-nwc-q1',
        kind: 'grid',
        topic: 'nwc-schedule',
        difficulty: 2,
        objective: t('Build a working capital schedule from days assumptions and compute ΔNWC.', 'Costruire uno schedule del circolante dalle ipotesi sui giorni e calcolare ΔNWC.'),
        prompt: t(
          'Delta S.p.A. keeps DSO 50, DIO 60 and DPO 45 days (365-day year) in both years. Fill in the schedule (€m). ΔNWC is NWC Y1 − NWC Y0.',
          'Delta S.p.A. mantiene DSO 50, DIO 60 e DPO 45 giorni (anno di 365 giorni) in entrambi gli anni. Completa lo schedule (€m). ΔNWC è NWC Y1 − NWC Y0.'
        ),
        unit: '€m',
        columns: [t('€m', '€m'), ...yrs('Y0', 'Y1')],
        rows: [
          { label: t('Revenue', 'Ricavi'), cells: [730, 876] },
          { label: t('COGS', 'Costo del venduto'), cells: [438, 511] },
          {
            label: t('Receivables (DSO 50)', 'Crediti (DSO 50)'),
            cells: [
              { answer: 100, verify: { fn: 'product', args: [730, 50, 1 / 365] } },
              { answer: 120, verify: { fn: 'product', args: [876, 50, 1 / 365] } }
            ]
          },
          {
            label: t('Inventory (DIO 60)', 'Magazzino (DIO 60)'),
            cells: [
              { answer: 72, verify: { fn: 'product', args: [438, 60, 1 / 365] } },
              { answer: 84, verify: { fn: 'product', args: [511, 60, 1 / 365] } }
            ]
          },
          {
            label: t('Payables (DPO 45)', 'Debiti verso fornitori (DPO 45)'),
            cells: [
              { answer: 54, verify: { fn: 'product', args: [438, 45, 1 / 365] } },
              { answer: 63, verify: { fn: 'product', args: [511, 45, 1 / 365] } }
            ]
          },
          {
            label: t('Net working capital', 'Capitale circolante netto'),
            cells: [
              { answer: 118, verify: { fn: 'sum', args: [100, 72, -54] } },
              { answer: 141, verify: { fn: 'sum', args: [120, 84, -63] } }
            ]
          },
          { label: t('ΔNWC (increase = cash outflow)', 'ΔNWC (aumento = uscita di cassa)'), cells: ['–', { answer: 23, verify: { fn: 'diff', args: [141, 118] } }] }
        ],
        explanation: t(
          'Y1: AR = 876 × 50/365 = 120; inventory = 511 × 60/365 = 84; AP = 511 × 45/365 = 63; NWC = 120 + 84 − 63 = 141. Y0 NWC = 100 + 72 − 54 = 118. ΔNWC = +23, so the cash flow statement shows (23). Payables are subtracted because supplier credit funds part of the working capital.',
          'Y1: crediti = 876 × 50/365 = 120; magazzino = 511 × 60/365 = 84; debiti = 511 × 45/365 = 63; NWC = 120 + 84 − 63 = 141. NWC Y0 = 100 + 72 − 54 = 118. ΔNWC = +23, quindi il rendiconto finanziario mostra (23). I debiti verso fornitori si sottraggono perché il credito dei fornitori finanzia parte del circolante.'
        )
      },
      {
        id: 'mod-nwc-q2',
        kind: 'numeric',
        topic: 'nwc-schedule',
        difficulty: 2,
        objective: t('Quantify the cash impact of a change in days.', 'Quantificare l’impatto di cassa di una variazione dei giorni.'),
        prompt: t(
          'Revenue is €876m. Management cuts DSO from 50 to 40 days (365-day year). Holding everything else equal, how much cash is released (€m)?',
          'I ricavi sono €876m. Il management riduce il DSO da 50 a 40 giorni (anno di 365 giorni). A parità di altre condizioni, quanta cassa si libera (€m)?'
        ),
        answer: 24,
        unit: '€m',
        verify: { fn: 'product', args: [876, 10, 1 / 365] },
        explanation: t(
          'Receivables move from 876 × 50/365 = 120 to 876 × 40/365 = 96: a €24m reduction in NWC, i.e. a €24m cash inflow. It is a one-off release, not a recurring annual benefit.',
          'I crediti passano da 876 × 50/365 = 120 a 876 × 40/365 = 96: una riduzione del circolante di €24m, cioè un incasso di €24m. È un rilascio una tantum, non un beneficio ricorrente annuo.'
        )
      },
      {
        id: 'mod-nwc-q3',
        kind: 'mcq',
        topic: 'nwc-schedule',
        difficulty: 1,
        objective: t('Link NWC movements to the cash flow statement.', 'Collegare le variazioni del circolante al rendiconto finanziario.'),
        prompt: t('Inventory increases by €15m and payables increase by €5m. What is the impact on cash from operations?', 'Il magazzino aumenta di €15m e i debiti verso fornitori di €5m. Qual è l’impatto sul flusso di cassa operativo?'),
        choices: [t('+€20m', '+€20m'), t('−€20m', '−€20m'), t('+€10m', '+€10m'), t('−€10m', '−€10m')],
        correct: 3,
        explanation: t(
          'More inventory uses €15m of cash; more payables provides €5m (suppliers fund you). Net: −€10m. Adding both as outflows (−20) ignores that a liability increase is a source of cash.',
          'Più magazzino assorbe €15m di cassa; più debiti verso fornitori ne forniscono €5m (ti finanziano i fornitori). Netto: −€10m. Considerare entrambe come uscite (−20) ignora che l’aumento di una passività è una fonte di cassa.'
        )
      },
      {
        id: 'mod-nwc-q4',
        kind: 'multi',
        topic: 'nwc-definition',
        difficulty: 2,
        objective: t('Identify which balances belong in operating working capital.', 'Identificare quali saldi appartengono al circolante operativo.'),
        prompt: t('Which items belong in operating net working capital? Select all that apply.', 'Quali voci appartengono al capitale circolante netto operativo? Seleziona tutte le risposte corrette.'),
        choices: [
          t('Trade receivables', 'Crediti commerciali'),
          t('Cash and cash equivalents', 'Disponibilità liquide'),
          t('Deferred revenue', 'Ricavi differiti'),
          t('Current portion of long-term debt', 'Quota corrente dei debiti a lungo termine'),
          t('Accrued expenses', 'Ratei passivi')
        ],
        correct: [0, 2, 4],
        explanation: t(
          'Receivables, deferred revenue and accrued expenses arise from operations. Cash and the current portion of debt are financing items, already in net debt; including them would double count in the EV bridge.',
          'Crediti, ricavi differiti e ratei passivi nascono dalla gestione operativa. Cassa e quota corrente del debito sono voci finanziarie, già nella posizione finanziaria netta; includerle significherebbe contarle due volte nel bridge da EV a equity.'
        )
      },
      {
        id: 'mod-nwc-q5',
        kind: 'numeric',
        topic: 'nwc-schedule',
        difficulty: 1,
        objective: t('Compute the cash conversion cycle.', 'Calcolare il ciclo di conversione di cassa.'),
        prompt: t('DSO is 42 days, DIO 75 days and DPO 58 days. What is the cash conversion cycle (days)?', 'Il DSO è 42 giorni, il DIO 75 e il DPO 58. Qual è il ciclo di conversione di cassa (giorni)?'),
        answer: 59,
        unit: 'days',
        verify: { fn: 'sum', args: [42, 75, -58] },
        explanation: t('CCC = 42 + 75 − 58 = 59 days. Payables days are subtracted because supplier credit shortens the time your own cash is tied up.', 'CCC = 42 + 75 − 58 = 59 giorni. I giorni dei debiti si sottraggono perché il credito dei fornitori riduce il tempo in cui la tua cassa resta immobilizzata.')
      }
    ],
    flashcards: [
      { id: 'fc-mod-nwc-1', topic: 'nwc-schedule', front: t('Forecast formula for receivables?', 'Formula di previsione dei crediti?'), back: t('AR = Revenue × DSO / 365.', 'Crediti = Ricavi × DSO / 365.') },
      { id: 'fc-mod-nwc-2', topic: 'nwc-schedule', front: t('Inventory and payables are driven off…?', 'Magazzino e debiti verso fornitori si calcolano su…?'), back: t('COGS (DIO and DPO), consistent with how historical days were computed.', 'Costo del venduto (DIO e DPO), coerentemente con il calcolo dei giorni storici.') },
      { id: 'fc-mod-nwc-3', topic: 'nwc-definition', front: t('What is excluded from operating NWC?', 'Che cosa è escluso dal circolante operativo?'), back: t('Cash, short-term debt and the current portion of long-term debt (financing items).', 'Cassa, debiti finanziari a breve e quota corrente dei debiti a lungo (voci finanziarie).') },
      { id: 'fc-mod-nwc-4', topic: 'nwc-schedule', front: t('Sign of ΔNWC in the cash flow?', 'Segno di ΔNWC nel rendiconto?'), back: t('An increase in NWC reduces cash (outflow); a decrease releases cash.', 'Un aumento del circolante riduce la cassa (uscita); una diminuzione la libera.') },
      { id: 'fc-mod-nwc-5', topic: 'nwc-schedule', front: t('Cash conversion cycle?', 'Ciclo di conversione di cassa?'), back: t('CCC = DSO + DIO − DPO.', 'CCC = DSO + DIO − DPO.') }
    ]
  },
  {
    id: 'mod-capex-schedule',
    academyId: 'modelling',
    moduleId: 'FMOD2',
    mode: 'deep',
    minutes: 11,
    difficulty: 2,
    reviewed: '2026-10',
    objective: t(
      'Forecast CapEx, depreciation and amortisation, and roll forward PP&E consistently with the income statement and cash flow statement.',
      'Prevedere CapEx e ammortamenti e costruire il roll-forward delle immobilizzazioni materiali in modo coerente con conto economico e rendiconto finanziario.'
    ),
    screens: [
      {
        type: 'intuition',
        title: t('PP&E is a bathtub', 'Le immobilizzazioni sono una vasca da bagno'),
        body: t(
          'Think of net PP&E as water in a bathtub. **CapEx** pours water in; **depreciation** drains it out. If the tap runs faster than the drain, the asset base grows — typical of a company expanding capacity. If CapEx falls below D&A for years, the asset base shrinks and the business is probably under-investing.\n\nThe schedule simply tracks that level, year by year, and feeds three statements at once.',
          "Pensa alle immobilizzazioni nette come all'acqua in una vasca. Il **CapEx** riempie, gli **ammortamenti** svuotano. Se il rubinetto versa più di quanto esce dallo scarico, la base di attivi cresce — tipico di un'azienda che espande la capacità. Se per anni il CapEx resta sotto gli ammortamenti, la base di attivi si riduce e probabilmente l'azienda sta investendo troppo poco.\n\nLo schedule segue semplicemente questo livello, anno per anno, e alimenta tre prospetti contemporaneamente."
        )
      },
      {
        type: 'technical',
        title: t('How CapEx is forecast', 'Come si prevede il CapEx'),
        body: t(
          '- **Maintenance CapEx**: what is needed to keep existing capacity running; often anchored to D&A.\n- **Growth (expansion) CapEx**: new plants, stores, capacity; linked to volume growth or a management plan.\n- Simple approach: **CapEx as % of revenue**, based on history and guidance.\n- Better for capital-intensive businesses: capacity-based (e.g. stores opened × capex per store).\n\nIntangible assets (software, capitalised development) are usually forecast in a separate line with their own amortisation. Under IFRS 16, right-of-use assets from leases are typically tracked separately from owned PP&E.',
          "- **CapEx di mantenimento**: quanto serve per mantenere operativa la capacità esistente; spesso ancorato agli ammortamenti.\n- **CapEx di sviluppo**: nuovi stabilimenti, punti vendita, capacità; legato alla crescita dei volumi o a un piano del management.\n- Approccio semplice: **CapEx in % dei ricavi**, sulla base dei dati storici e della guidance.\n- Meglio per i business capital intensive: in funzione della capacità (es. aperture × capex per punto vendita).\n\nLe immobilizzazioni immateriali (software, sviluppo capitalizzato) si prevedono di solito in una riga separata con il proprio ammortamento. Con l'IFRS 16, i diritti d'uso derivanti dai leasing sono di norma seguiti separatamente dalle immobilizzazioni di proprietà."
        )
      },
      {
        type: 'technical',
        title: t('How D&A is forecast', 'Come si prevedono gli ammortamenti'),
        body: t(
          '- **% of revenue**: quick, but disconnects D&A from the asset base.\n- **% of opening net PP&E**: ties depreciation to the assets actually in place.\n- **Waterfall by vintage**: each year’s CapEx is depreciated over its useful life (straight-line), and existing assets keep their own schedule. Most accurate; standard in detailed project, infrastructure and LBO models.\n\nSanity checks: CapEx / D&A above 1 means the asset base is growing; in a DCF terminal year CapEx should not be below D&A for a business still growing.',
          "- **% dei ricavi**: veloce, ma scollega gli ammortamenti dalla base di attivi.\n- **% delle immobilizzazioni nette iniziali**: lega l'ammortamento agli attivi effettivamente esistenti.\n- **Waterfall per annata**: il CapEx di ogni anno si ammortizza lungo la sua vita utile (a quote costanti) e gli attivi esistenti mantengono il proprio piano. È il metodo più preciso; standard nei modelli dettagliati di progetto, infrastrutture e LBO.\n\nVerifiche: CapEx / ammortamenti sopra 1 significa che la base di attivi cresce; nell'anno terminale di un DCF il CapEx non dovrebbe essere inferiore agli ammortamenti per un business ancora in crescita."
        )
      },
      {
        type: 'formula',
        formulas: [
          { name: t('PP&E roll-forward', 'Roll-forward delle immobilizzazioni'), expr: 'Closing PP&E = Opening PP&E + CapEx − D&A − NBV of disposals' },
          { name: t('CapEx driver', 'Driver del CapEx'), expr: 'CapEx_t = CapEx % × Revenue_t' },
          { name: t('Straight-line D&A per vintage', 'Ammortamento a quote costanti per annata'), expr: 'D&A_vintage = (CapEx − residual value) / useful life' }
        ],
        note: t(
          'Links: CapEx → investing cash flow (outflow) and PP&E; D&A → income statement (expense), cash flow (add-back) and PP&E (reduction).',
          'Collegamenti: CapEx → flusso di cassa da investimenti (uscita) e immobilizzazioni; ammortamenti → conto economico (costo), rendiconto (rettifica positiva) e immobilizzazioni (riduzione).'
        )
      },
      {
        type: 'example',
        title: t('A depreciation waterfall', 'Un waterfall degli ammortamenti'),
        body: t(
          'Epsilon S.p.A. depreciates existing assets at €40m a year. New CapEx (Y1 100, Y2 150, Y3 200) is depreciated straight-line over 5 years, with a full year of depreciation in the year of spend. Figures in €m.',
          'Epsilon S.p.A. ammortizza gli attivi esistenti per €40m l’anno. Il nuovo CapEx (Y1 100, Y2 150, Y3 200) si ammortizza a quote costanti in 5 anni, con un anno intero di ammortamento nell’anno di spesa. Valori in €m.'
        ),
        table: {
          headers: [t('€m', '€m'), ...yrs('Y1', 'Y2', 'Y3')],
          rows: [
            [t('Existing assets', 'Attivi esistenti'), 40, 40, 40],
            [t('Y1 vintage (100 / 5)', 'Annata Y1 (100 / 5)'), 20, 20, 20],
            [t('Y2 vintage (150 / 5)', 'Annata Y2 (150 / 5)'), '–', 30, 30],
            [t('Y3 vintage (200 / 5)', 'Annata Y3 (200 / 5)'), '–', '–', 40],
            [t('Total D&A', 'Ammortamenti totali'), 60, 90, 130]
          ],
          totalRows: [4]
        }
      },
      {
        type: 'realworld',
        body: t(
          'In LBOs and credit analysis, bankers look at **EBITDA − CapEx** as a quick proxy for cash generation: two companies with the same EBITDA can support very different debt if one is capex-light (software) and the other capex-heavy (telecom towers, steel). Due diligence often splits historical CapEx into maintenance and growth, because a buyer can cut growth CapEx in a downturn but not maintenance CapEx.',
          "Negli LBO e nell'analisi del credito i banker guardano a **EBITDA − CapEx** come indicatore rapido della generazione di cassa: due società con lo stesso EBITDA possono sostenere livelli di debito molto diversi se una è capex-light (software) e l'altra capex-heavy (torri di telecomunicazione, acciaio). La due diligence divide spesso il CapEx storico tra mantenimento e sviluppo, perché in una crisi un compratore può tagliare il CapEx di sviluppo ma non quello di mantenimento."
        )
      },
      { type: 'exercise', questionId: 'mod-capex-q1' },
      { type: 'exercise', questionId: 'mod-capex-q2' },
      { type: 'exercise', questionId: 'mod-capex-q3' },
      {
        type: 'interview',
        question: t('How would you project CapEx and D&A in a model?', 'Come proietteresti CapEx e ammortamenti in un modello?'),
        answer: t(
          'I would start from history and management guidance, splitting maintenance from growth CapEx. For a quick model, CapEx as % of revenue and D&A as % of revenue or of opening PP&E. For a detailed model, a depreciation waterfall: each year’s CapEx depreciated over its useful life, plus the run-off of existing assets. Then I roll forward PP&E — opening plus CapEx minus D&A — and check that CapEx/D&A and PP&E/revenue are sensible, especially in the terminal year.',
          "Partirei dai dati storici e dalla guidance del management, distinguendo CapEx di mantenimento e di sviluppo. Per un modello rapido, CapEx in % dei ricavi e ammortamenti in % dei ricavi o delle immobilizzazioni iniziali. Per un modello dettagliato, un waterfall degli ammortamenti: il CapEx di ogni anno ammortizzato lungo la vita utile, più l'esaurimento degli attivi esistenti. Poi costruisco il roll-forward — iniziale più CapEx meno ammortamenti — e verifico che CapEx/ammortamenti e immobilizzazioni/ricavi siano sensati, soprattutto nell'anno terminale."
        )
      },
      {
        type: 'mistakes',
        items: [
          t('D&A growing faster than PP&E, or continuing on assets that are already fully depreciated.', 'Ammortamenti che crescono più delle immobilizzazioni, o che proseguono su attivi già completamente ammortizzati.'),
          t('Terminal-year CapEx well below D&A while assuming perpetual growth.', 'CapEx nell’anno terminale molto inferiore agli ammortamenti pur ipotizzando una crescita perpetua.'),
          t('Entering CapEx as a positive number in the cash flow statement (sign flip).', 'Inserire il CapEx come numero positivo nel rendiconto finanziario (inversione di segno).'),
          t('Forgetting disposals: the PP&E roll-forward no longer ties to the balance sheet.', 'Dimenticare le dismissioni: il roll-forward non riconcilia più con lo stato patrimoniale.')
        ]
      },
      {
        type: 'summary',
        items: [
          t('Closing PP&E = Opening + CapEx − D&A − disposals.', 'Immobilizzazioni finali = Iniziali + CapEx − Ammortamenti − Dismissioni.'),
          t('Split maintenance vs growth CapEx; % of revenue is the quick approach.', 'Distingui CapEx di mantenimento e di sviluppo; la % dei ricavi è l’approccio rapido.'),
          t('A depreciation waterfall by vintage is the most accurate D&A method.', 'Il waterfall per annata è il metodo più preciso per gli ammortamenti.'),
          t('Check CapEx/D&A and PP&E/revenue, especially in the terminal year.', 'Verifica CapEx/ammortamenti e immobilizzazioni/ricavi, soprattutto nell’anno terminale.')
        ]
      }
    ],
    questions: [
      {
        id: 'mod-capex-q1',
        kind: 'grid',
        topic: 'capex-schedule',
        difficulty: 2,
        objective: t('Roll forward PP&E with CapEx as % of revenue and D&A as % of opening PP&E.', 'Costruire il roll-forward delle immobilizzazioni con CapEx in % dei ricavi e ammortamenti in % delle immobilizzazioni iniziali.'),
        prompt: t(
          'Zeta S.p.A.: CapEx = 8% of revenue; D&A = 10% of opening net PP&E; no disposals. Fill in the schedule (€m).',
          'Zeta S.p.A.: CapEx = 8% dei ricavi; ammortamenti = 10% delle immobilizzazioni nette iniziali; nessuna dismissione. Completa lo schedule (€m).'
        ),
        unit: '€m',
        columns: [t('€m', '€m'), ...yrs('Y1', 'Y2', 'Y3')],
        rows: [
          { label: t('Revenue', 'Ricavi'), cells: [1000, 1100, 1200] },
          {
            label: t('Opening net PP&E', 'Immobilizzazioni nette iniziali'),
            cells: [500, { answer: 530, verify: { fn: 'sum', args: [500, 80, -50] } }, { answer: 565, verify: { fn: 'sum', args: [530, 88, -53] } }]
          },
          {
            label: t('CapEx (8% of revenue)', 'CapEx (8% dei ricavi)'),
            cells: [
              { answer: 80, verify: { fn: 'product', args: [0.08, 1000] } },
              { answer: 88, verify: { fn: 'product', args: [0.08, 1100] } },
              { answer: 96, verify: { fn: 'product', args: [0.08, 1200] } }
            ]
          },
          {
            label: t('D&A (10% of opening PP&E)', 'Ammortamenti (10% delle immob. iniziali)'),
            cells: [
              { answer: 50, verify: { fn: 'product', args: [0.1, 500] } },
              { answer: 53, verify: { fn: 'product', args: [0.1, 530] } },
              { answer: 56.5, verify: { fn: 'product', args: [0.1, 565] } }
            ]
          },
          {
            label: t('Closing net PP&E', 'Immobilizzazioni nette finali'),
            cells: [
              { answer: 530, verify: { fn: 'sum', args: [500, 80, -50] } },
              { answer: 565, verify: { fn: 'sum', args: [530, 88, -53] } },
              { answer: 604.5, verify: { fn: 'sum', args: [565, 96, -56.5] } }
            ]
          }
        ],
        explanation: t(
          'Y1: CapEx 80, D&A 10% × 500 = 50, closing 500 + 80 − 50 = 530. Y2 opens at 530: CapEx 88, D&A 53, closing 565. Y3: CapEx 96, D&A 56.5, closing 604.5. Each year’s opening balance must link to the prior closing balance — typing it in breaks the roll-forward. CapEx exceeds D&A, so PP&E grows.',
          'Y1: CapEx 80, ammortamenti 10% × 500 = 50, finale 500 + 80 − 50 = 530. Y2 parte da 530: CapEx 88, ammortamenti 53, finale 565. Y3: CapEx 96, ammortamenti 56,5, finale 604,5. Il saldo iniziale di ogni anno deve essere collegato al saldo finale precedente — digitarlo rompe il roll-forward. Il CapEx supera gli ammortamenti, quindi le immobilizzazioni crescono.'
        )
      },
      {
        id: 'mod-capex-q2',
        kind: 'numeric',
        topic: 'depreciation-waterfall',
        difficulty: 2,
        objective: t('Compute D&A with a vintage waterfall.', 'Calcolare gli ammortamenti con un waterfall per annata.'),
        prompt: t(
          'Existing assets depreciate €25m a year until Y4. New CapEx is Y1 60, Y2 90, Y3 120, depreciated straight-line over 6 years with a full year in the year of spend. What is total D&A in Y3 (€m)?',
          'Gli attivi esistenti si ammortizzano per €25m l’anno fino a Y4. Il nuovo CapEx è Y1 60, Y2 90, Y3 120, ammortizzato a quote costanti in 6 anni con un anno intero nell’anno di spesa. Quali sono gli ammortamenti totali in Y3 (€m)?'
        ),
        answer: 70,
        unit: '€m',
        verify: { fn: 'sum', args: [25, 10, 15, 20] },
        steps: [
          t('Existing: 25', 'Esistenti: 25'),
          t('Y1 vintage: 60 / 6 = 10; Y2: 90 / 6 = 15; Y3: 120 / 6 = 20', 'Annata Y1: 60 / 6 = 10; Y2: 90 / 6 = 15; Y3: 120 / 6 = 20'),
          t('Total Y3 D&A = 25 + 10 + 15 + 20 = 70', 'Ammortamenti Y3 = 25 + 10 + 15 + 20 = 70')
        ],
        explanation: t(
          'Each vintage contributes CapEx / 6 every year from its first year: 10 + 15 + 20, plus 25 from existing assets = 70. Depreciating only the Y3 CapEx (20 + 25) ignores earlier vintages still in service.',
          'Ogni annata contribuisce CapEx / 6 ogni anno a partire dal primo: 10 + 15 + 20, più 25 degli attivi esistenti = 70. Ammortizzare solo il CapEx di Y3 (20 + 25) ignora le annate precedenti ancora in uso.'
        )
      },
      {
        id: 'mod-capex-q3',
        kind: 'mcq',
        topic: 'capex-schedule',
        difficulty: 2,
        objective: t('Sanity-check terminal-year CapEx versus D&A.', 'Verificare il CapEx dell’anno terminale rispetto agli ammortamenti.'),
        prompt: t(
          'In a DCF the final forecast year shows D&A of €80m and CapEx of €40m, with a 2.5% perpetual growth rate. What is the main problem?',
          'In un DCF l’ultimo anno di previsione mostra ammortamenti per €80m e CapEx per €40m, con una crescita perpetua del 2,5%. Qual è il problema principale?'
        ),
        choices: [
          t('None: lower CapEx simply increases free cash flow', 'Nessuno: un CapEx più basso aumenta semplicemente il free cash flow'),
          t('D&A is non-cash, so it should be excluded from the terminal year', 'Gli ammortamenti non sono monetari, quindi vanno esclusi dall’anno terminale'),
          t('The asset base would shrink forever while revenue grows forever, overstating terminal value', 'La base di attivi si ridurrebbe per sempre mentre i ricavi crescono per sempre, sovrastimando il valore terminale'),
          t('CapEx should equal zero in the terminal year', 'Il CapEx dovrebbe essere zero nell’anno terminale')
        ],
        correct: 2,
        explanation: t(
          'A growing business needs CapEx at least in line with, and usually above, D&A. CapEx at half of D&A in perpetuity implies a vanishing asset base supporting growing sales — free cash flow and terminal value are inflated. D&A matters for the tax shield; it is not excluded.',
          "Un'azienda in crescita ha bisogno di un CapEx almeno pari, e di solito superiore, agli ammortamenti. Un CapEx pari a metà degli ammortamenti in perpetuo implica una base di attivi che scompare mentre le vendite crescono — free cash flow e valore terminale risultano gonfiati. Gli ammortamenti contano per lo scudo fiscale; non vanno esclusi."
        )
      },
      {
        id: 'mod-capex-q4',
        kind: 'numeric',
        topic: 'capex-schedule',
        difficulty: 1,
        objective: t('Apply the PP&E roll-forward including disposals.', 'Applicare il roll-forward delle immobilizzazioni con le dismissioni.'),
        prompt: t(
          'Opening net PP&E €800m, CapEx €120m, D&A €90m, and an asset with net book value €15m is sold. What is closing net PP&E (€m)?',
          'Immobilizzazioni nette iniziali €800m, CapEx €120m, ammortamenti €90m e viene venduto un bene con valore netto contabile €15m. Quali sono le immobilizzazioni nette finali (€m)?'
        ),
        answer: 815,
        unit: '€m',
        verify: { fn: 'sum', args: [800, 120, -90, -15] },
        explanation: t(
          '800 + 120 − 90 − 15 = 815. The disposal removes the asset’s net book value; any gain or loss versus sale proceeds goes through the income statement, not the roll-forward.',
          '800 + 120 − 90 − 15 = 815. La dismissione elimina il valore netto contabile del bene; l’eventuale plus o minusvalenza rispetto al prezzo di vendita passa dal conto economico, non dal roll-forward.'
        )
      }
    ],
    flashcards: [
      { id: 'fc-mod-capex-1', topic: 'capex-schedule', front: t('PP&E roll-forward?', 'Roll-forward delle immobilizzazioni?'), back: t('Closing = Opening + CapEx − D&A − NBV of disposals.', 'Finale = Iniziale + CapEx − Ammortamenti − Valore netto delle dismissioni.') },
      { id: 'fc-mod-capex-2', topic: 'capex-schedule', front: t('Maintenance vs growth CapEx?', 'CapEx di mantenimento vs di sviluppo?'), back: t('Maintenance keeps existing capacity running; growth adds new capacity. Growth CapEx can be cut in a downturn.', 'Il mantenimento conserva la capacità esistente; lo sviluppo aggiunge nuova capacità. Il CapEx di sviluppo si può tagliare in una crisi.') },
      { id: 'fc-mod-capex-3', topic: 'depreciation-waterfall', front: t('What is a depreciation waterfall?', 'Che cos’è un waterfall degli ammortamenti?'), back: t('A grid depreciating each year’s CapEx over its useful life, plus the run-off of existing assets; total D&A = sum of vintages.', 'Una tabella che ammortizza il CapEx di ogni anno lungo la vita utile, più l’esaurimento degli attivi esistenti; ammortamenti totali = somma delle annate.') },
      { id: 'fc-mod-capex-4', topic: 'capex-schedule', front: t('What does CapEx / D&A > 1 indicate?', 'Che cosa indica CapEx / ammortamenti > 1?'), back: t('The net asset base is growing (investment above replacement).', 'La base di attivi netti sta crescendo (investimenti superiori alla sostituzione).') }
    ]
  },
  {
    id: 'mod-debt-schedule',
    academyId: 'modelling',
    moduleId: 'FMOD2',
    mode: 'deep',
    minutes: 15,
    difficulty: 3,
    reviewed: '2026-10',
    objective: t(
      'Build a debt schedule with a revolver, mandatory amortisation and a cash sweep; calculate interest on opening or average balances; and manage the resulting circularity with a circuit breaker.',
      'Costruire uno schedule del debito con linea revolving, ammortamento obbligatorio e cash sweep; calcolare gli interessi su saldi iniziali o medi; e gestire la circolarità che ne deriva con un circuit breaker.'
    ),
    screens: [
      {
        type: 'intuition',
        title: t('Cash pays down debt — in a set order', 'La cassa rimborsa il debito — in un ordine preciso'),
        body: t(
          'A leveraged company generates cash and must decide where it goes. The loan agreements decide for it: first contractual repayments, then a revolver that must be cleared, then any excess cash "swept" to prepay the term loan.\n\nThe debt schedule is the engine that applies those rules each year, and its output — interest expense — flows back into net income. That loop is why debt schedules create **circular references**.',
          "Un'azienda indebitata genera cassa e deve decidere dove destinarla. Decidono i contratti di finanziamento: prima i rimborsi contrattuali, poi la linea revolving da azzerare, poi la cassa in eccesso \"spazzata\" per rimborsare anticipatamente il term loan.\n\nLo schedule del debito è il motore che applica queste regole ogni anno, e il suo output — gli oneri finanziari — torna nell'utile netto. Questo ciclo è il motivo per cui gli schedule del debito creano **riferimenti circolari**."
        )
      },
      {
        type: 'technical',
        title: t('The tranches', 'Le tranche'),
        body: t(
          '- **Revolving credit facility (RCF)**: drawn and repaid as needed, like a corporate credit card. Interest on drawn amounts plus a **commitment fee** on the undrawn portion.\n- **Term Loan A**: amortises significantly over its life; usually held by banks.\n- **Term Loan B**: minimal amortisation (in the US typically 1% a year; European TLBs are usually bullet), most repaid at maturity; held by institutional investors.\n- **High-yield bonds / notes**: bullet repayment, fixed coupon, no sweep.\n\nA **cash sweep** forces a percentage of excess cash flow to prepay senior debt, often stepping down as leverage falls.',
          "- **Linea revolving (RCF)**: si utilizza e si rimborsa secondo necessità, come una carta di credito aziendale. Interessi sugli importi utilizzati più una **commitment fee** sulla parte non utilizzata.\n- **Term Loan A**: si ammortizza in misura significativa durante la vita; di solito detenuto da banche.\n- **Term Loan B**: ammortamento minimo (negli USA tipicamente l’1% annuo; i TLB europei sono di solito bullet), rimborso quasi interamente a scadenza; detenuto da investitori istituzionali.\n- **High yield bond / notes**: rimborso bullet, cedola fissa, nessun sweep.\n\nUn **cash sweep** obbliga a destinare una percentuale dell’excess cash flow al rimborso anticipato del debito senior, spesso decrescente al calare della leva."
        )
      },
      {
        type: 'technical',
        title: t('The cash waterfall', 'La cascata della cassa'),
        body: t(
          '1. Start with **opening cash + free cash flow** (after interest, before debt repayments).\n2. Subtract the **minimum cash** balance the business needs.\n3. Pay **mandatory amortisation** on all tranches.\n4. What remains is **cash available for optional repayment**. If negative, **draw the revolver**; if positive, **repay the revolver first**.\n5. Remaining excess goes to the **cash sweep** (by seniority), and anything left accumulates as cash.\n\nIn Excel the revolver line is usually one formula using MIN/MAX so it switches automatically between drawing and repaying.',
          "1. Si parte da **cassa iniziale + free cash flow** (dopo interessi, prima dei rimborsi).\n2. Si sottrae la **cassa minima** necessaria all'operatività.\n3. Si pagano gli **ammortamenti obbligatori** di tutte le tranche.\n4. Ciò che resta è la **cassa disponibile per i rimborsi facoltativi**. Se è negativa, **si utilizza la revolving**; se è positiva, **si rimborsa prima la revolving**.\n5. L'eccedenza residua va al **cash sweep** (per seniority) e quanto rimane si accumula come cassa.\n\nIn Excel la riga della revolving è di solito un'unica formula con MIN/MAX, che passa automaticamente da utilizzo a rimborso."
        )
      },
      {
        type: 'formula',
        formulas: [
          { name: t('Cash available for optional repayment', 'Cassa disponibile per rimborsi facoltativi'), expr: 'CA = Opening cash + FCF − Minimum cash − Mandatory amortisation' },
          { name: t('Revolver draw (+) / repayment (−)', 'Utilizzo (+) / rimborso (−) della revolving'), expr: 'ΔRCF = −MIN(CA, Opening RCF balance)' },
          { name: t('Interest on average balance', 'Interessi sul saldo medio'), expr: 'Interest = Rate × (Opening + Closing) / 2' },
          { name: t('Interest on opening balance', 'Interessi sul saldo iniziale'), expr: 'Interest = Rate × Opening balance' }
        ],
        note: t(
          'If CA is negative, −MIN(CA, RCF) = −CA: the revolver is drawn by the shortfall. If CA is positive, the revolver is repaid up to its balance. A full model also caps draws at the facility size.',
          'Se CA è negativa, −MIN(CA; RCF) = −CA: la revolving si utilizza per l’importo mancante. Se CA è positiva, la revolving si rimborsa fino al suo saldo. Un modello completo limita anche gli utilizzi all’importo della linea.'
        )
      },
      {
        type: 'technical',
        title: t('Why circularity appears', 'Perché nasce la circolarità'),
        body: t(
          'Interest on the **average** balance depends on the closing balance → which depends on how much cash was swept → which depends on free cash flow → which depends on net income → which depends on interest. Excel flags this as a circular reference.\n\nOptions:\n- **Interest on opening balances**: no circularity, but overstates interest when debt is being repaid (and understates it when drawing).\n- **Average balances with iterative calculation** (File › Options › Formulas › Enable iterative calculation; Excel’s defaults are 100 iterations and a maximum change of 0.001).\n- A copy-paste macro or an algebraic solution — less common in banking.',
          "Gli interessi sul saldo **medio** dipendono dal saldo finale → che dipende da quanta cassa è stata destinata allo sweep → che dipende dal free cash flow → che dipende dall'utile netto → che dipende dagli interessi. Excel lo segnala come riferimento circolare.\n\nOpzioni:\n- **Interessi sui saldi iniziali**: nessuna circolarità, ma interessi sovrastimati quando il debito si rimborsa (e sottostimati quando si utilizza).\n- **Saldi medi con calcolo iterativo** (File › Opzioni › Formule › Attiva calcolo iterativo; le impostazioni predefinite di Excel sono 100 iterazioni e variazione massima 0,001).\n- Una macro di copia-incolla o una soluzione algebrica — meno comuni in banca."
        )
      },
      {
        type: 'technical',
        title: t('The circuit breaker', 'Il circuit breaker'),
        body: t(
          'With iterations on, a single error (e.g. a #DIV/0! or #REF!) can travel around the loop and "infect" the whole model; the error then persists even after you fix the original cell.\n\nA **circuit breaker** is an input switch (1 = on, 0 = off) wired into the interest formula:\n\n`=IF(Circ=1, Rate*AVERAGE(Open,Close), 0)` (or `Rate*Open` as the fallback)\n\nSet it to 0 to break the loop, let the errors clear, fix the cause, then switch back to 1. Link the switch to the cover page so reviewers know whether the model is running with circularity.',
          "Con il calcolo iterativo attivo, un solo errore (es. #DIV/0! o #RIF!) può girare lungo il ciclo e \"contagiare\" l'intero modello; l'errore resta anche dopo aver corretto la cella d'origine.\n\nIl **circuit breaker** è uno switch di input (1 = attivo, 0 = disattivo) inserito nella formula degli interessi:\n\n`=SE(Circ=1; Tasso*MEDIA(Iniz;Fin); 0)` (oppure `Tasso*Iniz` come alternativa)\n\nLo si porta a 0 per interrompere il ciclo, si lasciano sparire gli errori, si corregge la causa e si rimette a 1. Collega lo switch alla copertina, così chi rivede sa se il modello gira con la circolarità."
        )
      },
      {
        type: 'example',
        title: t('A two-year term loan schedule', 'Uno schedule del term loan su due anni'),
        body: t(
          'Eta S.p.A. has a €400m term loan at 7%, mandatory amortisation €20m a year and a 100% cash sweep. Interest on opening balance (no circularity). Cash flow before interest and debt repayment: Y1 100, Y2 110 (€m).',
          'Eta S.p.A. ha un term loan di €400m al 7%, ammortamento obbligatorio di €20m l’anno e cash sweep al 100%. Interessi sul saldo iniziale (nessuna circolarità). Flusso di cassa prima di interessi e rimborsi: Y1 100, Y2 110 (€m).'
        ),
        table: {
          headers: [t('€m', '€m'), ...yrs('Y1', 'Y2')],
          rows: [
            [t('Opening balance', 'Saldo iniziale'), '400.00', '328.00'],
            [t('Interest (7% × opening)', 'Interessi (7% × iniziale)'), '28.00', '22.96'],
            [t('Cash after interest', 'Cassa dopo interessi'), '72.00', '87.04'],
            [t('Mandatory amortisation', 'Ammortamento obbligatorio'), '(20.00)', '(20.00)'],
            [t('Cash sweep', 'Cash sweep'), '(52.00)', '(67.04)'],
            [t('Closing balance', 'Saldo finale'), '328.00', '240.96']
          ],
          totalRows: [5]
        }
      },
      {
        type: 'realworld',
        body: t(
          'In leveraged finance and LBO work, the debt schedule answers the questions lenders and sponsors care about: how fast does leverage fall, is there ever a liquidity shortfall (revolver fully drawn), and do covenants hold? Analysts typically run the sponsor case and a downside case through the same schedule and present **net leverage** and **interest cover** by year.',
          'Nel leveraged finance e negli LBO lo schedule del debito risponde alle domande che interessano a finanziatori e sponsor: quanto velocemente scende la leva, c’è mai una carenza di liquidità (revolving interamente utilizzata), i covenant sono rispettati? Gli analisti fanno girare nello stesso schedule il sponsor case e un downside case e presentano **leva netta** e **copertura degli interessi** anno per anno.'
        )
      },
      { type: 'exercise', questionId: 'mod-debt-q1' },
      { type: 'exercise', questionId: 'mod-debt-q2' },
      { type: 'exercise', questionId: 'mod-debt-q3' },
      {
        type: 'interview',
        question: t('Why does a debt schedule create a circular reference, and how do you handle it?', 'Perché uno schedule del debito crea un riferimento circolare e come lo gestisci?'),
        answer: t(
          'If interest is charged on the average debt balance, interest depends on the closing balance, which depends on how much debt we repay, which depends on cash flow after interest — so interest depends on itself. I would either compute interest on opening balances to avoid the loop, or keep average balances, enable iterative calculation and add a circuit-breaker switch that sets interest to zero (or to the opening-balance version) so that an error does not propagate through the loop.',
          "Se gli interessi si calcolano sul saldo medio del debito, dipendono dal saldo finale, che dipende da quanto debito rimborsiamo, che dipende dal flusso di cassa dopo gli interessi — quindi gli interessi dipendono da sé stessi. O calcolo gli interessi sui saldi iniziali per evitare il ciclo, oppure mantengo i saldi medi, attivo il calcolo iterativo e aggiungo uno switch circuit breaker che azzera gli interessi (o usa la versione sul saldo iniziale), così un errore non si propaga lungo il ciclo."
        )
      },
      {
        type: 'mistakes',
        items: [
          t('Sweeping cash below the minimum cash balance, or before mandatory amortisation.', 'Destinare allo sweep cassa al di sotto della cassa minima, o prima degli ammortamenti obbligatori.'),
          t('Letting a debt balance turn negative because the repayment formula has no MIN cap.', 'Lasciare che un saldo del debito diventi negativo perché la formula di rimborso non ha un limite MIN.'),
          t('Leaving iterative calculation on without a circuit breaker; errors become permanent.', 'Lasciare attivo il calcolo iterativo senza circuit breaker; gli errori diventano permanenti.'),
          t('Forgetting the commitment fee on the undrawn revolver.', 'Dimenticare la commitment fee sulla parte non utilizzata della revolving.')
        ]
      },
      {
        type: 'summary',
        items: [
          t('Order: minimum cash → mandatory amortisation → revolver → cash sweep.', 'Ordine: cassa minima → ammortamenti obbligatori → revolving → cash sweep.'),
          t('Revolver: ΔRCF = −MIN(cash available, opening RCF).', 'Revolving: ΔRCF = −MIN(cassa disponibile; RCF iniziale).'),
          t('Average-balance interest is more accurate but circular; opening-balance interest avoids it.', 'Gli interessi sul saldo medio sono più precisi ma circolari; quelli sul saldo iniziale evitano il ciclo.'),
          t('Use a circuit-breaker switch whenever iterative calculation is on.', 'Usa uno switch circuit breaker ogni volta che il calcolo iterativo è attivo.')
        ]
      }
    ],
    questions: [
      {
        id: 'mod-debt-q1',
        kind: 'grid',
        topic: 'debt-schedule',
        difficulty: 3,
        objective: t('Build a term loan schedule with mandatory amortisation and a 100% cash sweep.', 'Costruire lo schedule di un term loan con ammortamento obbligatorio e cash sweep al 100%.'),
        prompt: t(
          'Term loan €500m at 6% on the opening balance, mandatory amortisation €25m a year, 100% of remaining cash swept (no minimum cash, no other debt). Cash flow before interest and debt repayment: Y1 115, Y2 125. Fill in the schedule (€m).',
          'Term loan di €500m al 6% sul saldo iniziale, ammortamento obbligatorio €25m l’anno, 100% della cassa residua destinata allo sweep (nessuna cassa minima, nessun altro debito). Flusso di cassa prima di interessi e rimborsi: Y1 115, Y2 125. Completa lo schedule (€m).'
        ),
        unit: '€m',
        columns: [t('€m', '€m'), ...yrs('Y1', 'Y2')],
        rows: [
          { label: t('Cash flow before interest & repayment', 'Flusso di cassa ante interessi e rimborsi'), cells: [115, 125] },
          { label: t('Opening balance', 'Saldo iniziale'), cells: [500, { answer: 415, verify: { fn: 'sum', args: [500, -25, -60] } }] },
          {
            label: t('Interest (6% × opening)', 'Interessi (6% × iniziale)'),
            cells: [{ answer: 30, verify: { fn: 'product', args: [0.06, 500] } }, { answer: 24.9, verify: { fn: 'product', args: [0.06, 415] } }]
          },
          { label: t('Mandatory amortisation', 'Ammortamento obbligatorio'), cells: [25, 25] },
          {
            label: t('Cash sweep', 'Cash sweep'),
            cells: [{ answer: 60, verify: { fn: 'sum', args: [115, -30, -25] } }, { answer: 75.1, verify: { fn: 'sum', args: [125, -24.9, -25] } }]
          },
          {
            label: t('Closing balance', 'Saldo finale'),
            cells: [{ answer: 415, verify: { fn: 'sum', args: [500, -25, -60] } }, { answer: 314.9, verify: { fn: 'sum', args: [415, -25, -75.1] } }]
          }
        ],
        explanation: t(
          'Y1: interest 6% × 500 = 30; cash after interest 85; after mandatory 25 → sweep 60; closing 500 − 25 − 60 = 415. Y2: opening 415; interest 24.9; sweep 125 − 24.9 − 25 = 75.1; closing 415 − 25 − 75.1 = 314.9. Using opening balances avoids circularity; on average balances Y1 interest would be lower and the sweep slightly larger.',
          'Y1: interessi 6% × 500 = 30; cassa dopo interessi 85; dopo l’ammortamento obbligatorio di 25 → sweep 60; finale 500 − 25 − 60 = 415. Y2: iniziale 415; interessi 24,9; sweep 125 − 24,9 − 25 = 75,1; finale 415 − 25 − 75,1 = 314,9. I saldi iniziali evitano la circolarità; con i saldi medi gli interessi di Y1 sarebbero più bassi e lo sweep leggermente maggiore.'
        )
      },
      {
        id: 'mod-debt-q2',
        kind: 'numeric',
        topic: 'debt-schedule',
        difficulty: 2,
        objective: t('Compute interest on an average balance.', 'Calcolare gli interessi su un saldo medio.'),
        prompt: t('A loan opens the year at €400m and closes at €300m. The rate is 8% on the average balance. What is interest expense (€m)?', 'Un finanziamento apre l’anno a €400m e lo chiude a €300m. Il tasso è l’8% sul saldo medio. Quali sono gli oneri finanziari (€m)?'),
        answer: 28,
        unit: '€m',
        verify: { fn: 'product', args: [0.08, 350] },
        explanation: t(
          'Average balance = (400 + 300) / 2 = 350; 8% × 350 = 28. On the opening balance it would be 32 — overstating interest by 4 when debt is being repaid.',
          'Saldo medio = (400 + 300) / 2 = 350; 8% × 350 = 28. Sul saldo iniziale sarebbero 32 — interessi sovrastimati di 4 quando il debito si rimborsa.'
        )
      },
      {
        id: 'mod-debt-q3',
        kind: 'numeric',
        topic: 'revolver',
        difficulty: 3,
        objective: t('Size a revolver draw from the cash waterfall.', 'Determinare l’utilizzo della revolving dalla cascata della cassa.'),
        prompt: t(
          'Opening cash €30m, free cash flow after interest −€45m, minimum cash €10m, no mandatory amortisation, revolver undrawn. How much is drawn on the revolver (€m)?',
          'Cassa iniziale €30m, free cash flow dopo interessi −€45m, cassa minima €10m, nessun ammortamento obbligatorio, revolving non utilizzata. Quanto si utilizza della revolving (€m)?'
        ),
        answer: 25,
        unit: '€m',
        verify: { fn: 'sum', args: [10, -30, 45] },
        steps: [
          t('Cash available = 30 − 45 − 10 = −25', 'Cassa disponibile = 30 − 45 − 10 = −25'),
          t('ΔRCF = −MIN(−25, 0) = +25 (draw)', 'ΔRCF = −MIN(−25; 0) = +25 (utilizzo)'),
          t('Closing cash = 30 − 45 + 25 = 10 = minimum cash', 'Cassa finale = 30 − 45 + 25 = 10 = cassa minima')
        ],
        explanation: t(
          'The company must end the year with €10m of cash. Before the revolver it would have 30 − 45 = −15, so it needs 25. Drawing only 15 ignores the minimum cash requirement; drawing 45 ignores opening cash.',
          'La società deve chiudere l’anno con €10m di cassa. Prima della revolving avrebbe 30 − 45 = −15, quindi servono 25. Utilizzare solo 15 ignora la cassa minima; utilizzare 45 ignora la cassa iniziale.'
        )
      },
      {
        id: 'mod-debt-q4',
        kind: 'mcq',
        topic: 'circularity',
        difficulty: 2,
        objective: t('Explain the purpose of a circuit breaker.', 'Spiegare lo scopo del circuit breaker.'),
        prompt: t('What does a circuit breaker do in a model that calculates interest on average debt balances?', 'Che cosa fa il circuit breaker in un modello che calcola gli interessi sui saldi medi del debito?'),
        choices: [
          t('It permanently removes the circular reference by using opening balances', 'Elimina definitivamente il riferimento circolare usando i saldi iniziali'),
          t('It lets you switch off the interest loop so errors stop propagating, then switch it back on', 'Permette di disattivare il ciclo degli interessi così gli errori smettono di propagarsi, per poi riattivarlo'),
          t('It increases the number of iterations Excel performs', 'Aumenta il numero di iterazioni che Excel esegue'),
          t('It caps the revolver at the facility size', 'Limita la revolving all’importo della linea')
        ],
        correct: 1,
        explanation: t(
          'The switch replaces the circular interest formula with zero (or opening-balance interest) when set to 0, flushing out errors that would otherwise circulate forever. It does not change iteration settings, and the facility cap is a separate MIN in the revolver formula.',
          'Lo switch, impostato a 0, sostituisce la formula circolare degli interessi con zero (o con gli interessi sul saldo iniziale), eliminando errori che altrimenti circolerebbero all’infinito. Non modifica le impostazioni di iterazione, e il limite della linea è un MIN separato nella formula della revolving.'
        )
      },
      {
        id: 'mod-debt-q5',
        kind: 'order',
        topic: 'debt-schedule',
        difficulty: 2,
        objective: t('Sequence the cash waterfall in a debt schedule.', 'Mettere in sequenza la cascata della cassa in uno schedule del debito.'),
        prompt: t('Order the uses of cash in a typical LBO debt schedule.', 'Ordina gli impieghi della cassa in un tipico schedule del debito di un LBO.'),
        items: [
          t('Reserve the minimum cash balance', 'Accantonare la cassa minima'),
          t('Pay mandatory amortisation', 'Pagare gli ammortamenti obbligatori'),
          t('Repay the revolver', 'Rimborsare la revolving'),
          t('Cash sweep on the term loan', 'Cash sweep sul term loan'),
          t('Accumulate remaining cash on balance sheet', 'Accumulare la cassa residua in bilancio')
        ],
        explanation: t(
          'Contractual obligations come first (keeping minimum liquidity and paying scheduled amortisation), then the revolver — usually the most senior and most expensive to leave drawn — then voluntary or swept prepayments of term debt; any residual cash builds up.',
          'Prima gli obblighi contrattuali (mantenere la liquidità minima e pagare gli ammortamenti previsti), poi la revolving — di solito la più senior e quella da non lasciare utilizzata — poi i rimborsi anticipati volontari o da sweep del debito a termine; la cassa residua si accumula.'
        )
      }
    ],
    flashcards: [
      { id: 'fc-mod-debt-1', topic: 'revolver', front: t('Revolver draw/repay formula?', 'Formula di utilizzo/rimborso della revolving?'), back: t('ΔRCF = −MIN(cash available after minimum cash and mandatory amortisation, opening RCF balance), capped at the facility size.', 'ΔRCF = −MIN(cassa disponibile dopo cassa minima e ammortamenti obbligatori; saldo RCF iniziale), entro l’importo della linea.') },
      { id: 'fc-mod-debt-2', topic: 'circularity', front: t('Source of circularity in a debt schedule?', 'Origine della circolarità nello schedule del debito?'), back: t('Interest on average balances → net income → cash flow → repayments → closing balance → interest.', 'Interessi sui saldi medi → utile netto → flusso di cassa → rimborsi → saldo finale → interessi.') },
      { id: 'fc-mod-debt-3', topic: 'circularity', front: t('Excel default iterative calculation settings?', 'Impostazioni predefinite del calcolo iterativo in Excel?'), back: t('Disabled by default; when enabled: 100 maximum iterations, maximum change 0.001.', 'Disattivato per impostazione predefinita; se attivato: 100 iterazioni massime, variazione massima 0,001.') },
      { id: 'fc-mod-debt-4', topic: 'debt-schedule', front: t('What is a cash sweep?', 'Che cos’è un cash sweep?'), back: t('A mandatory prepayment of senior debt using a % of excess cash flow, often stepping down with leverage.', 'Un rimborso anticipato obbligatorio del debito senior con una % dell’excess cash flow, spesso decrescente con la leva.') },
      { id: 'fc-mod-debt-5', topic: 'debt-schedule', front: t('TLA vs TLB amortisation?', 'Ammortamento TLA vs TLB?'), back: t('TLA amortises significantly (bank lenders). TLB is mostly repaid at maturity (US: ~1% a year; Europe: usually bullet).', 'Il TLA si ammortizza in misura significativa (banche). Il TLB si rimborsa quasi tutto a scadenza (USA: ~1% annuo; Europa: di solito bullet).') }
    ],
    sources: [{ label: 'Microsoft Support — Remove or allow a circular reference (iterative calculation settings)' }]
  },

  /* ============================ FMOD3 — CORE MODELS ============================ */
  {
    id: 'mod-three-statement',
    academyId: 'modelling',
    moduleId: 'FMOD3',
    mode: 'deep',
    minutes: 15,
    difficulty: 2,
    reviewed: '2026-10',
    objective: t(
      'Build and link the income statement, balance sheet and cash flow statement in the right order, and make the balance sheet balance without plugs.',
      'Costruire e collegare conto economico, stato patrimoniale e rendiconto finanziario nell’ordine giusto e far quadrare lo stato patrimoniale senza plug.'
    ),
    screens: [
      {
        type: 'intuition',
        title: t('Three views of one company', 'Tre viste della stessa azienda'),
        body: t(
          'The income statement says whether the company **made money**; the cash flow statement says whether it **generated cash**; the balance sheet shows **what it owns and owes** at the end.\n\nIn a model they are one system: every number on the balance sheet is either an input, a schedule output, or the result of a cash flow. If the links are right, the balance sheet balances by itself. If you have to force it, something is wrong.',
          'Il conto economico dice se l’azienda **ha guadagnato**; il rendiconto finanziario se ha **generato cassa**; lo stato patrimoniale mostra **che cosa possiede e che cosa deve** alla fine del periodo.\n\nIn un modello sono un unico sistema: ogni numero dello stato patrimoniale è un input, l’output di uno schedule o il risultato di un flusso di cassa. Se i collegamenti sono corretti, lo stato patrimoniale quadra da solo. Se devi forzarlo, c’è un errore.'
        )
      },
      {
        type: 'technical',
        title: t('Order of building', 'Ordine di costruzione'),
        body: t(
          '1. Input **historical** statements and calculate historical ratios.\n2. Set **assumptions** (growth, margins, days, CapEx %, rates).\n3. Project the **income statement down to EBIT**.\n4. Build the **supporting schedules**: working capital, PP&E/D&A, other items.\n5. Build the **debt schedule** and finish the income statement (interest, tax, net income).\n6. Build the **cash flow statement** from net income and the schedules.\n7. Build the **balance sheet**: cash from the cash flow statement, everything else from schedules.\n8. Add the **balance check** and other checks.',
          '1. Inserire i prospetti **storici** e calcolare gli indici storici.\n2. Definire le **ipotesi** (crescita, margini, giorni, CapEx %, tassi).\n3. Proiettare il **conto economico fino all’EBIT**.\n4. Costruire gli **schedule di supporto**: circolante, immobilizzazioni/ammortamenti, altre voci.\n5. Costruire lo **schedule del debito** e completare il conto economico (interessi, imposte, utile netto).\n6. Costruire il **rendiconto finanziario** partendo dall’utile netto e dagli schedule.\n7. Costruire lo **stato patrimoniale**: la cassa dal rendiconto, tutto il resto dagli schedule.\n8. Aggiungere il **controllo di quadratura** e gli altri controlli.'
        )
      },
      {
        type: 'technical',
        title: t('The key links', 'I collegamenti chiave'),
        body: t(
          '- **Net income** → top of the cash flow statement and → retained earnings.\n- **D&A** → expense on the income statement, add-back in the cash flow, reduction of PP&E.\n- **ΔNWC** → cash flow from operations; balances → balance sheet current assets/liabilities.\n- **CapEx** → investing cash flow; → PP&E.\n- **Debt drawn / repaid** → financing cash flow; → debt balances; balances → interest.\n- **Dividends** → financing cash flow; → retained earnings.\n- **Closing cash** from the cash flow statement → balance sheet cash.',
          '- **Utile netto** → inizio del rendiconto finanziario e → utili a nuovo.\n- **Ammortamenti** → costo in conto economico, rettifica positiva nel rendiconto, riduzione delle immobilizzazioni.\n- **ΔNWC** → flusso di cassa operativo; saldi → attività/passività correnti dello stato patrimoniale.\n- **CapEx** → flusso da investimenti; → immobilizzazioni.\n- **Debito erogato / rimborsato** → flusso da finanziamenti; → saldi del debito; saldi → interessi.\n- **Dividendi** → flusso da finanziamenti; → utili a nuovo.\n- **Cassa finale** dal rendiconto → cassa dello stato patrimoniale.'
        )
      },
      {
        type: 'technical',
        title: t('"Cash is the plug" vs the revolver', '"La cassa come plug" vs la revolving'),
        body: t(
          'A shortcut sometimes seen: set balance sheet cash = total liabilities and equity − all other assets. The balance sheet then always balances — and **hides every error**, because the difference silently lands in cash.\n\nThe correct approach: cash comes **only** from the cash flow statement, and the balance check (assets − liabilities − equity = 0) tests the whole model.\n\nThe **revolver** is the legitimate funding mechanism: if projected cash falls below the minimum, the revolver draws and the draw appears in financing cash flow and in debt. It closes a funding gap, not an accounting gap.',
          'Una scorciatoia che a volte si vede: cassa di bilancio = totale passività e patrimonio netto − tutte le altre attività. Lo stato patrimoniale quadra sempre — e **nasconde ogni errore**, perché la differenza finisce silenziosamente nella cassa.\n\nL’approccio corretto: la cassa arriva **solo** dal rendiconto finanziario, e il controllo di quadratura (attività − passività − patrimonio netto = 0) verifica l’intero modello.\n\nLa **revolving** è il meccanismo di finanziamento legittimo: se la cassa prevista scende sotto il minimo, si utilizza la revolving e l’utilizzo compare nel flusso da finanziamenti e nel debito. Copre un fabbisogno finanziario, non uno squilibrio contabile.'
        )
      },
      {
        type: 'formula',
        formulas: [
          { name: t('Cash roll-forward', 'Roll-forward della cassa'), expr: 'Closing cash = Opening cash + CFO + CFI + CFF' },
          { name: t('Retained earnings roll-forward', 'Roll-forward degli utili a nuovo'), expr: 'Closing RE = Opening RE + Net income − Dividends' },
          { name: t('Balance check', 'Controllo di quadratura'), expr: 'Check = Total assets − (Total liabilities + Equity) = 0' }
        ]
      },
      {
        type: 'example',
        title: t('Every balance sheet change has a cash flow twin', 'Ogni variazione patrimoniale ha un gemello nel rendiconto'),
        body: t(
          'Theta S.p.A., one year (€m): net income 97.5, D&A 50, NWC up 15, CapEx 60, debt repaid 40, dividends 20.',
          'Theta S.p.A., un anno (€m): utile netto 97,5, ammortamenti 50, circolante +15, CapEx 60, debito rimborsato 40, dividendi 20.'
        ),
        table: {
          headers: [t('Balance sheet item', 'Voce patrimoniale'), t('Change', 'Variazione'), t('Driven by', 'Origine')],
          rows: [
            [t('Cash', 'Cassa'), '+12.5', t('Cash flow statement', 'Rendiconto finanziario')],
            [t('NWC', 'Circolante'), '+15.0', t('NWC schedule', 'Schedule del circolante')],
            [t('Net PP&E', 'Immobilizzazioni nette'), '+10.0', '60 − 50'],
            [t('Total assets', 'Totale attivo'), '+37.5', ''],
            [t('Debt', 'Debito'), '−40.0', t('Debt schedule', 'Schedule del debito')],
            [t('Retained earnings', 'Utili a nuovo'), '+77.5', '97.5 − 20'],
            [t('Total liabilities + equity', 'Totale passivo + PN'), '+37.5', t('Balanced ✓', 'Quadra ✓')]
          ],
          totalRows: [3, 6]
        }
      },
      {
        type: 'realworld',
        body: t(
          'The three-statement model is the backbone of almost every banking model: the LBO adds a transaction and returns layer, the merger model combines two of them, and the DCF takes its free cash flows from it. On live deals, analysts usually start from the company’s reported accounts (or the vendor due diligence data book), map them into the bank template, and spend real time making the historical periods balance before projecting anything.',
          'Il modello three-statement è la spina dorsale di quasi tutti i modelli bancari: l’LBO vi aggiunge uno strato di transazione e rendimenti, il merger model ne combina due, il DCF ne ricava i free cash flow. Sui deal reali gli analisti partono di solito dal bilancio della società (o dal data book della vendor due diligence), lo riclassificano nel template della banca e dedicano tempo vero a far quadrare gli anni storici prima di proiettare qualsiasi cosa.'
        )
      },
      { type: 'exercise', questionId: 'mod-3s-q1' },
      { type: 'exercise', questionId: 'mod-3s-q2' },
      { type: 'exercise', questionId: 'mod-3s-q3' },
      {
        type: 'interview',
        question: t('Depreciation increases by €10m. Walk me through the three statements (25% tax rate).', 'Gli ammortamenti aumentano di €10m. Spiegami l’effetto sui tre prospetti (aliquota 25%).'),
        answer: t(
          '**Income statement**: EBIT −10, tax −2.5, net income −7.5.\n**Cash flow**: net income −7.5, add back D&A +10 → cash +2.5 (the tax saving).\n**Balance sheet**: PP&E −10, cash +2.5, so assets −7.5; retained earnings −7.5, so liabilities + equity −7.5. It balances.',
          '**Conto economico**: EBIT −10, imposte −2,5, utile netto −7,5.\n**Rendiconto**: utile netto −7,5, rettifica ammortamenti +10 → cassa +2,5 (il risparmio d’imposta).\n**Stato patrimoniale**: immobilizzazioni −10, cassa +2,5, quindi attivo −7,5; utili a nuovo −7,5, quindi passivo + PN −7,5. Quadra.'
        )
      },
      {
        type: 'mistakes',
        items: [
          t('Making cash (or any item) the balancing plug.', 'Usare la cassa (o qualsiasi voce) come plug di quadratura.'),
          t('Forgetting to link dividends to retained earnings, so equity and cash diverge by exactly the dividend.', 'Non collegare i dividendi agli utili a nuovo: patrimonio netto e cassa divergono esattamente dell’importo del dividendo.'),
          t('Including a balance sheet item that has no cash flow line (or vice versa).', 'Inserire una voce patrimoniale senza riga corrispondente nel rendiconto (o viceversa).'),
          t('Wrong sign on a working-capital or CapEx line, creating an imbalance of twice the amount.', 'Segno sbagliato su una riga di circolante o CapEx, che crea uno squilibrio pari al doppio dell’importo.')
        ]
      },
      {
        type: 'summary',
        items: [
          t('Build order: historicals → assumptions → IS to EBIT → schedules → debt → IS to NI → CFS → BS → checks.', 'Ordine: storici → ipotesi → CE fino all’EBIT → schedule → debito → CE fino all’utile → rendiconto → SP → controlli.'),
          t('Cash comes only from the cash flow statement; never plug it.', 'La cassa arriva solo dal rendiconto; non va mai usata come plug.'),
          t('The revolver funds shortfalls through financing cash flow — a legitimate mechanism.', 'La revolving copre i fabbisogni attraverso il flusso da finanziamenti — un meccanismo legittimo.'),
          t('Every balance sheet change must have a matching cash flow or equity line.', 'Ogni variazione patrimoniale deve avere una riga corrispondente nel rendiconto o nel patrimonio netto.')
        ]
      }
    ],
    questions: [
      {
        id: 'mod-3s-q1',
        kind: 'grid',
        topic: 'three-statement',
        difficulty: 2,
        objective: t('Link income statement, cash flow statement and balance sheet for one year.', 'Collegare conto economico, rendiconto finanziario e stato patrimoniale per un anno.'),
        prompt: t('Theta S.p.A. (€m), tax rate 25%. Complete the linked statements.', 'Theta S.p.A. (€m), aliquota 25%. Completa i prospetti collegati.'),
        unit: '€m',
        columns: [t('Item', 'Voce'), t('Year 1 (€m)', 'Anno 1 (€m)')],
        rows: [
          { label: t('EBITDA', 'EBITDA'), cells: [200] },
          { label: t('D&A', 'Ammortamenti'), cells: [50] },
          { label: t('EBIT', 'EBIT'), cells: [{ answer: 150, verify: { fn: 'diff', args: [200, 50] } }] },
          { label: t('Interest expense', 'Oneri finanziari'), cells: [20] },
          { label: t('Pre-tax income', 'Utile ante imposte'), cells: [{ answer: 130, verify: { fn: 'diff', args: [150, 20] } }] },
          { label: t('Tax (25%)', 'Imposte (25%)'), cells: [{ answer: 32.5, verify: { fn: 'product', args: [130, 0.25] } }] },
          { label: t('Net income', 'Utile netto'), cells: [{ answer: 97.5, verify: { fn: 'diff', args: [130, 32.5] } }] },
          { label: t('Increase in NWC', 'Aumento del circolante'), cells: [15] },
          { label: t('CapEx', 'CapEx'), cells: [60] },
          { label: t('Debt repayment', 'Rimborso del debito'), cells: [40] },
          { label: t('Dividends paid', 'Dividendi pagati'), cells: [20] },
          { label: t('Net change in cash', 'Variazione netta della cassa'), cells: [{ answer: 12.5, verify: { fn: 'sum', args: [97.5, 50, -15, -60, -40, -20] } }] },
          { label: t('Opening cash', 'Cassa iniziale'), cells: [100] },
          { label: t('Closing cash', 'Cassa finale'), cells: [{ answer: 112.5, verify: { fn: 'sum', args: [100, 12.5] } }] },
          { label: t('Opening retained earnings', 'Utili a nuovo iniziali'), cells: [300] },
          { label: t('Closing retained earnings', 'Utili a nuovo finali'), cells: [{ answer: 377.5, verify: { fn: 'sum', args: [300, 97.5, -20] } }] }
        ],
        explanation: t(
          'EBIT 200 − 50 = 150; pre-tax 130; tax 32.5; net income 97.5. Cash: 97.5 + 50 − 15 − 60 − 40 − 20 = 12.5 → closing cash 112.5. Retained earnings 300 + 97.5 − 20 = 377.5. Dividends hit both cash and retained earnings; debt repayment hits cash and debt but not the income statement.',
          'EBIT 200 − 50 = 150; ante imposte 130; imposte 32,5; utile netto 97,5. Cassa: 97,5 + 50 − 15 − 60 − 40 − 20 = 12,5 → cassa finale 112,5. Utili a nuovo 300 + 97,5 − 20 = 377,5. I dividendi toccano sia la cassa sia gli utili a nuovo; il rimborso del debito tocca cassa e debito ma non il conto economico.'
        )
      },
      {
        id: 'mod-3s-q2',
        kind: 'numeric',
        topic: 'three-statement',
        difficulty: 3,
        objective: t('Prove the balance sheet balances after a year of activity.', 'Dimostrare che lo stato patrimoniale quadra dopo un anno di attività.'),
        prompt: t(
          'Using Theta’s figures (cash +12.5, NWC +15, CapEx 60, D&A 50, debt −40, net income 97.5, dividends 20), by how much do total assets increase (€m)?',
          'Con i dati di Theta (cassa +12,5, circolante +15, CapEx 60, ammortamenti 50, debito −40, utile netto 97,5, dividendi 20), di quanto aumenta il totale attivo (€m)?'
        ),
        answer: 37.5,
        unit: '€m',
        verify: { fn: 'sum', args: [12.5, 15, 60, -50] },
        explanation: t(
          'Assets: cash +12.5, NWC +15, PP&E +60 − 50 = +10 → +37.5. Check the other side: debt −40, retained earnings +97.5 − 20 = +77.5 → +37.5. Balanced. Forgetting D&A in PP&E (+60) would give 87.5 and an imbalance of 50.',
          'Attivo: cassa +12,5, circolante +15, immobilizzazioni +60 − 50 = +10 → +37,5. Verifica dell’altro lato: debito −40, utili a nuovo +97,5 − 20 = +77,5 → +37,5. Quadra. Dimenticare gli ammortamenti nelle immobilizzazioni (+60) darebbe 87,5 e uno squilibrio di 50.'
        )
      },
      {
        id: 'mod-3s-q3',
        kind: 'order',
        topic: 'three-statement',
        difficulty: 2,
        objective: t('Sequence the build of a three-statement model.', 'Mettere in sequenza la costruzione di un modello three-statement.'),
        prompt: t('Put the steps of building a three-statement model in order.', 'Metti in ordine le fasi di costruzione di un modello three-statement.'),
        items: [
          t('Input historical statements', 'Inserire i prospetti storici'),
          t('Set projection assumptions', 'Definire le ipotesi di proiezione'),
          t('Project the income statement to EBIT', 'Proiettare il conto economico fino all’EBIT'),
          t('Build working capital and PP&E schedules', 'Costruire gli schedule di circolante e immobilizzazioni'),
          t('Build the debt schedule and finish net income', 'Costruire lo schedule del debito e completare l’utile netto'),
          t('Build the cash flow statement', 'Costruire il rendiconto finanziario'),
          t('Complete the balance sheet and add the balance check', 'Completare lo stato patrimoniale e aggiungere il controllo di quadratura')
        ],
        explanation: t(
          'Interest needs the debt schedule, which needs cash flow before financing, which needs EBIT and the schedules — so EBIT and schedules come first, net income after the debt schedule, then the cash flow statement feeds balance sheet cash.',
          'Gli interessi richiedono lo schedule del debito, che richiede il flusso di cassa prima dei finanziamenti, che richiede EBIT e schedule — quindi prima EBIT e schedule, l’utile netto dopo lo schedule del debito, poi il rendiconto alimenta la cassa di bilancio.'
        )
      },
      {
        id: 'mod-3s-q4',
        kind: 'mcq',
        topic: 'three-statement',
        difficulty: 2,
        objective: t('Explain why cash must not be the balancing plug.', 'Spiegare perché la cassa non deve essere il plug di quadratura.'),
        prompt: t(
          'A junior sets balance sheet cash = total liabilities + equity − non-cash assets. What is the main problem?',
          'Un junior imposta la cassa di bilancio = totale passività + PN − attività non monetarie. Qual è il problema principale?'
        ),
        choices: [
          t('The balance sheet will never balance', 'Lo stato patrimoniale non quadrerà mai'),
          t('Any linking error is absorbed into cash, so the balance check can no longer detect it', 'Qualsiasi errore di collegamento viene assorbito dalla cassa, quindi il controllo di quadratura non può più rilevarlo'),
          t('It creates a circular reference with the revolver only', 'Crea un riferimento circolare solo con la revolving'),
          t('Nothing — this is the standard approach in banking', 'Nessuno — è l’approccio standard in banca')
        ],
        correct: 1,
        explanation: t(
          'The balance sheet will always balance — that is precisely the problem. Cash should be the output of the cash flow statement so that the balance check is a real test. It is not standard practice; the revolver is a funding mechanism, not an accounting plug.',
          'Lo stato patrimoniale quadrerà sempre — ed è proprio questo il problema. La cassa deve essere l’output del rendiconto perché il controllo di quadratura sia un vero test. Non è una prassi standard; la revolving è un meccanismo di finanziamento, non un plug contabile.'
        )
      },
      {
        id: 'mod-3s-q5',
        kind: 'numeric',
        topic: 'three-statement',
        difficulty: 2,
        objective: t('Trace a single change through all three statements.', 'Seguire una singola variazione nei tre prospetti.'),
        prompt: t('A company records an extra €20m of depreciation (tax rate 25%). By how much does its cash balance change (€m)?', 'Una società registra €20m di ammortamenti aggiuntivi (aliquota 25%). Di quanto varia la cassa (€m)?'),
        answer: 5,
        unit: '€m',
        verify: { fn: 'product', args: [20, 0.25] },
        explanation: t(
          'Net income falls 20 × (1 − 25%) = 15, D&A is added back (+20), so cash rises by 5 — the tax shield. Answering −15 forgets the add-back; answering 0 ignores the tax effect.',
          'L’utile netto cala di 20 × (1 − 25%) = 15, gli ammortamenti si sommano di nuovo (+20), quindi la cassa aumenta di 5 — lo scudo fiscale. Rispondere −15 dimentica la rettifica; rispondere 0 ignora l’effetto fiscale.'
        )
      }
    ],
    flashcards: [
      { id: 'fc-mod-3s-1', topic: 'three-statement', front: t('Where does balance sheet cash come from in a model?', 'Da dove arriva la cassa di bilancio in un modello?'), back: t('Closing cash from the cash flow statement — never a balancing plug.', 'Dalla cassa finale del rendiconto finanziario — mai da un plug di quadratura.') },
      { id: 'fc-mod-3s-2', topic: 'three-statement', front: t('Retained earnings roll-forward?', 'Roll-forward degli utili a nuovo?'), back: t('Closing RE = Opening RE + Net income − Dividends.', 'Utili a nuovo finali = Iniziali + Utile netto − Dividendi.') },
      { id: 'fc-mod-3s-3', topic: 'three-statement', front: t('Why is the debt schedule built before net income?', 'Perché lo schedule del debito si costruisce prima dell’utile netto?'), back: t('Interest expense comes from debt balances, which depend on cash available for repayment.', 'Gli oneri finanziari derivano dai saldi del debito, che dipendono dalla cassa disponibile per i rimborsi.') },
      { id: 'fc-mod-3s-4', topic: 'three-statement', front: t('+€10m D&A, 25% tax: cash impact?', '+€10m di ammortamenti, aliquota 25%: impatto sulla cassa?'), back: t('+€2.5m (net income −7.5, add back +10).', '+€2,5m (utile netto −7,5, rettifica +10).') }
    ]
  },
  {
    id: 'mod-comps-model',
    academyId: 'modelling',
    moduleId: 'FMOD3',
    mode: 'deep',
    minutes: 12,
    difficulty: 2,
    reviewed: '2026-10',
    objective: t(
      'Build a trading comparables model: select peers, compute enterprise value and multiples consistently, calendarise, and apply the range to the target.',
      'Costruire un modello di multipli di borsa: selezionare i comparabili, calcolare enterprise value e multipli in modo coerente, calendarizzare e applicare l’intervallo al target.'
    ),
    screens: [
      {
        type: 'intuition',
        title: t('The market’s price tags', 'I cartellini del prezzo del mercato'),
        body: t(
          'If similar houses on the same street sold for €4,000 per square metre, a 100 m² house is worth roughly €400k. Comps apply the same logic to companies: look at how the market prices **similar listed businesses** relative to their earnings, then apply that "price per unit of earnings" to the target.\n\nThe model is simple arithmetic — the skill is in choosing the right peers and making the numbers **truly comparable**.',
          'Se case simili nella stessa via sono state vendute a €4.000 al metro quadro, una casa di 100 m² vale circa €400k. I multipli applicano la stessa logica alle società: si guarda come il mercato prezza **società quotate simili** rispetto ai loro utili e si applica quel "prezzo per unità di utile" al target.\n\nIl modello è aritmetica semplice — l’abilità sta nello scegliere i comparabili giusti e nel rendere i numeri **davvero confrontabili**.'
        )
      },
      {
        type: 'technical',
        title: t('Building the comps sheet', 'Costruire il foglio dei comparabili'),
        body: t(
          '1. **Select peers**: same sector and business model, then filter on size, geography, growth and margins.\n2. **Equity value**: share price × fully diluted shares (treasury stock method for options).\n3. **Enterprise value**: equity value + debt + preferred + NCI − cash (and other non-operating assets).\n4. **Financials**: LTM from latest filings; forward years from broker consensus.\n5. **Normalise**: strip one-offs (restructuring, impairments, disposal gains).\n6. **Calendarise** different fiscal year-ends to the same calendar year.\n7. **Compute multiples**, then show median, mean and quartiles.',
          '1. **Selezione dei comparabili**: stesso settore e modello di business, poi filtri su dimensione, area geografica, crescita e margini.\n2. **Equity value**: prezzo × azioni pienamente diluite (treasury stock method per le opzioni).\n3. **Enterprise value**: equity value + debito + azioni privilegiate + interessi di minoranza − cassa (e altre attività non operative).\n4. **Dati finanziari**: LTM dagli ultimi documenti pubblicati; anni futuri dal consensus dei broker.\n5. **Normalizzare**: eliminare le poste non ricorrenti (ristrutturazioni, svalutazioni, plusvalenze da cessione).\n6. **Calendarizzare** esercizi con chiusure diverse sullo stesso anno solare.\n7. **Calcolare i multipli** e mostrare mediana, media e quartili.'
        )
      },
      {
        type: 'technical',
        title: t('Consistency is everything', 'La coerenza è tutto'),
        body: t(
          '- **EV multiples** pair with metrics available to all capital providers: revenue, EBITDA, EBIT.\n- **Equity multiples** pair with metrics after interest: net income (P/E), equity book value (P/BV).\n- **Leases**: under IFRS 16, EBITDA excludes lease expense, so EV should include lease liabilities. Do not mix IFRS 16 peers with US GAAP peers whose operating lease cost sits inside EBITDA without adjusting.\n- **NCI**: if EBITDA consolidates 100% of a subsidiary, EV must include the minority interest.\n- Prefer the **median**: one outlier can drag the mean.',
          "- I **multipli di EV** si abbinano a grandezze disponibili per tutti i finanziatori: ricavi, EBITDA, EBIT.\n- I **multipli di equity** si abbinano a grandezze dopo gli interessi: utile netto (P/E), patrimonio netto contabile (P/BV).\n- **Leasing**: con l'IFRS 16 l'EBITDA esclude il costo dei leasing, quindi l'EV deve includere le passività per leasing. Non mischiare comparabili IFRS 16 con comparabili US GAAP, il cui costo dei leasing operativi resta nell'EBITDA, senza rettifiche.\n- **Interessi di minoranza**: se l'EBITDA consolida il 100% di una controllata, l'EV deve includere le minoranze.\n- Preferisci la **mediana**: un solo outlier può distorcere la media."
        )
      },
      {
        type: 'formula',
        formulas: [
          { name: t('Enterprise value', 'Enterprise value'), expr: 'EV = Equity value + Debt + Preferred + NCI − Cash' },
          { name: t('Implied target value', 'Valore implicito del target'), expr: 'Implied EV = Peer multiple × Target metric;  Equity = Implied EV − Net debt' },
          {
            name: t('Calendarisation (FY ending March)', 'Calendarizzazione (esercizio a marzo)'),
            expr: 'CY2026 = 3/12 × FY Mar-26 + 9/12 × FY Mar-27',
            vars: [{ sym: 'FY Mar-26', desc: t('April 2025 – March 2026', 'Aprile 2025 – marzo 2026') }]
          }
        ]
      },
      {
        type: 'example',
        title: t('Why the median', 'Perché la mediana'),
        body: t('Four peers of Iota S.p.A. (NTM multiples). Peer D trades at a premium after a takeover rumour.', 'Quattro comparabili di Iota S.p.A. (multipli NTM). Il comparabile D tratta a premio dopo voci di un’OPA.'),
        table: {
          headers: [t('Peer', 'Comparabile'), ...yrs('EV/EBITDA', 'P/E')],
          rows: [
            ['A', '7.5x', '13.0x'],
            ['B', '8.2x', '15.5x'],
            ['C', '9.0x', '16.0x'],
            ['D', '11.4x', '22.5x'],
            [t('Median', 'Mediana'), '8.6x', '15.75x'],
            [t('Mean', 'Media'), '9.0x', '16.75x']
          ],
          totalRows: [4, 5]
        }
      },
      {
        type: 'realworld',
        body: t(
          'Analysts "spread comps" constantly: pulling data from FactSet, Capital IQ or Bloomberg, then checking it against annual reports and press releases, because databases mis-tag one-offs and share counts. The output is usually a page in a pitch book and a bar in the **football field** chart next to precedent transactions and DCF ranges. Expect your associate to ask: "Why is this peer in the set?" — have an answer.',
          'Gli analisti aggiornano i comparabili di continuo: estraggono i dati da FactSet, Capital IQ o Bloomberg e li verificano con bilanci e comunicati, perché i database classificano male le poste non ricorrenti e il numero di azioni. L’output è di solito una pagina del pitch book e una barra del **football field** accanto alle transazioni precedenti e agli intervalli del DCF. Aspettati che l’associate ti chieda: "Perché questo comparabile è nel campione?" — abbi una risposta.'
        )
      },
      { type: 'exercise', questionId: 'mod-comps-q1' },
      { type: 'exercise', questionId: 'mod-comps-q2' },
      { type: 'exercise', questionId: 'mod-comps-q3' },
      {
        type: 'interview',
        question: t('How do you pick comparable companies?', 'Come scegli le società comparabili?'),
        answer: t(
          'I start with business characteristics — same industry, products, customers and business model — then refine on financial characteristics: size, growth, margins, and geography, since they drive risk and multiples. I usually end up with a core set of the closest five to eight peers and a wider set. If the closest peers differ on growth or margin, I look at where the target sits within the range rather than blindly applying the median.',
          'Parto dalle caratteristiche del business — stesso settore, prodotti, clienti e modello di business — poi affino con le caratteristiche finanziarie: dimensione, crescita, margini e area geografica, perché guidano rischio e multipli. Di solito arrivo a un gruppo ristretto dei cinque-otto comparabili più vicini e a un gruppo più ampio. Se i più vicini differiscono per crescita o margini, valuto dove si colloca il target nell’intervallo invece di applicare ciecamente la mediana.'
        )
      },
      {
        type: 'mistakes',
        items: [
          t('Dividing equity value by EBITDA, or EV by net income (mismatched numerator and denominator).', 'Dividere l’equity value per l’EBITDA o l’EV per l’utile netto (numeratore e denominatore non coerenti).'),
          t('Using basic instead of diluted shares.', 'Usare le azioni base anziché diluite.'),
          t('Mixing fiscal years (March vs December year-ends) without calendarising.', 'Mischiare esercizi diversi (chiusura a marzo e a dicembre) senza calendarizzare.'),
          t('Leaving one-off gains or charges in LTM EBITDA.', 'Lasciare proventi od oneri non ricorrenti nell’EBITDA LTM.')
        ]
      },
      {
        type: 'summary',
        items: [
          t('Peers: same business first, then size, growth, margins, geography.', 'Comparabili: prima lo stesso business, poi dimensione, crescita, margini, area geografica.'),
          t('EV multiples ↔ pre-interest metrics; equity multiples ↔ post-interest metrics.', 'Multipli di EV ↔ grandezze ante interessi; multipli di equity ↔ grandezze post interessi.'),
          t('Normalise one-offs, calendarise fiscal years, treat leases and NCI consistently.', 'Normalizza le poste non ricorrenti, calendarizza gli esercizi, tratta leasing e minoranze in modo coerente.'),
          t('Apply the median (or a justified point in the range) to the target.', 'Applica al target la mediana (o un punto motivato dell’intervallo).')
        ]
      }
    ],
    questions: [
      {
        id: 'mod-comps-q1',
        kind: 'grid',
        topic: 'trading-comps',
        difficulty: 2,
        objective: t('Compute enterprise values and EV/EBITDA multiples for a peer set.', 'Calcolare enterprise value e multipli EV/EBITDA di un gruppo di comparabili.'),
        prompt: t('Fill in EV (€m) and EV/EBITDA (x) for each peer, then the median multiple.', 'Completa EV (€m) ed EV/EBITDA (x) per ogni comparabile, poi il multiplo mediano.'),
        unit: '€m / x',
        columns: [t('Peer', 'Comparabile'), t('Market cap', 'Capitalizzazione'), t('Net debt', 'Debito netto'), t('EV', 'EV'), t('EBITDA', 'EBITDA'), t('EV/EBITDA', 'EV/EBITDA')],
        rows: [
          {
            label: t('Peer A', 'Comparabile A'),
            cells: [800, 200, { answer: 1000, verify: { fn: 'sum', args: [800, 200] } }, 125, { answer: 8, verify: { fn: 'multiple', args: [1000, 125] } }]
          },
          {
            label: t('Peer B', 'Comparabile B'),
            cells: [1500, 300, { answer: 1800, verify: { fn: 'sum', args: [1500, 300] } }, 200, { answer: 9, verify: { fn: 'multiple', args: [1800, 200] } }]
          },
          {
            label: t('Peer C', 'Comparabile C'),
            cells: [450, 150, { answer: 600, verify: { fn: 'sum', args: [450, 150] } }, 60, { answer: 10, verify: { fn: 'multiple', args: [600, 60] } }]
          },
          { label: t('Median', 'Mediana'), cells: ['', '', '', '', { answer: 9, verify: { fn: 'median', args: [[8, 9, 10]] } }] }
        ],
        explanation: t(
          'EV = market cap + net debt: 1,000; 1,800; 600. EV/EBITDA: 1,000/125 = 8.0x; 1,800/200 = 9.0x; 600/60 = 10.0x. Median 9.0x. Using market cap / EBITDA (6.4x, 7.5x, 7.5x) would mismatch an equity numerator with a pre-interest denominator.',
          'EV = capitalizzazione + debito netto: 1.000; 1.800; 600. EV/EBITDA: 1.000/125 = 8,0x; 1.800/200 = 9,0x; 600/60 = 10,0x. Mediana 9,0x. Usare capitalizzazione / EBITDA (6,4x, 7,5x, 7,5x) abbinerebbe un numeratore di equity a un denominatore ante interessi.'
        )
      },
      {
        id: 'mod-comps-q2',
        kind: 'numeric',
        topic: 'trading-comps',
        difficulty: 2,
        objective: t('Apply a peer multiple and bridge to equity value.', 'Applicare un multiplo dei comparabili e passare all’equity value.'),
        prompt: t(
          'The target has EBITDA of €90m and net debt of €160m. Applying the 9.0x median EV/EBITDA, what is its implied equity value (€m)?',
          'Il target ha EBITDA di €90m e debito netto di €160m. Applicando la mediana EV/EBITDA di 9,0x, qual è l’equity value implicito (€m)?'
        ),
        answer: 650,
        unit: '€m',
        verify: { fn: 'diff', args: [810, 160] },
        steps: [t('Implied EV = 9.0 × 90 = 810', 'EV implicito = 9,0 × 90 = 810'), t('Equity value = 810 − 160 = 650', 'Equity value = 810 − 160 = 650')],
        explanation: t(
          'EV multiples give enterprise value; subtract net debt to reach equity. Answering 810 stops at EV; adding net debt (970) reverses the bridge.',
          'I multipli di EV danno l’enterprise value; per arrivare all’equity si sottrae il debito netto. Rispondere 810 si ferma all’EV; sommare il debito netto (970) inverte il bridge.'
        )
      },
      {
        id: 'mod-comps-q3',
        kind: 'numeric',
        topic: 'calendarisation',
        difficulty: 2,
        objective: t('Calendarise a non-December fiscal year.', 'Calendarizzare un esercizio non chiuso a dicembre.'),
        prompt: t(
          'A peer’s fiscal year ends 31 March. EBITDA is €120m for FY Mar-26 and €140m for FY Mar-27. What is calendar-year 2026 EBITDA (€m)?',
          'L’esercizio di un comparabile chiude il 31 marzo. L’EBITDA è €120m per l’esercizio a marzo 2026 e €140m per quello a marzo 2027. Qual è l’EBITDA dell’anno solare 2026 (€m)?'
        ),
        answer: 135,
        unit: '€m',
        verify: { fn: 'sum', args: [30, 105] },
        steps: [
          t('Jan–Mar 2026 belong to FY Mar-26: 3/12 × 120 = 30', 'Gennaio–marzo 2026 appartengono all’esercizio a marzo 2026: 3/12 × 120 = 30'),
          t('Apr–Dec 2026 belong to FY Mar-27: 9/12 × 140 = 105', 'Aprile–dicembre 2026 appartengono all’esercizio a marzo 2027: 9/12 × 140 = 105'),
          t('CY2026 = 30 + 105 = 135', 'Anno solare 2026 = 30 + 105 = 135')
        ],
        explanation: t(
          'Weight each fiscal year by the months it contributes to calendar 2026. Reversing the weights (9/12 × 120 + 3/12 × 140 = 125) is the classic error.',
          'Si pesa ogni esercizio per i mesi che contribuisce all’anno solare 2026. Invertire i pesi (9/12 × 120 + 3/12 × 140 = 125) è l’errore classico.'
        )
      },
      {
        id: 'mod-comps-q4',
        kind: 'mcq',
        topic: 'trading-comps',
        difficulty: 2,
        objective: t('Match numerators and denominators in multiples.', 'Abbinare numeratori e denominatori nei multipli.'),
        prompt: t('Which multiple is internally inconsistent?', 'Quale multiplo è incoerente?'),
        choices: [t('EV / EBITDA', 'EV / EBITDA'), t('Equity value / Net income', 'Equity value / Utile netto'), t('EV / Net income', 'EV / Utile netto'), t('EV / Revenue', 'EV / Ricavi')],
        correct: 2,
        explanation: t(
          'Net income is after interest — it belongs to shareholders only — while EV represents all capital providers. EV/EBITDA, EV/Revenue and P/E (equity value / net income) are all consistent.',
          'L’utile netto è dopo gli interessi — spetta solo agli azionisti — mentre l’EV rappresenta tutti i finanziatori. EV/EBITDA, EV/Ricavi e P/E (equity value / utile netto) sono tutti coerenti.'
        )
      },
      {
        id: 'mod-comps-q5',
        kind: 'multi',
        topic: 'trading-comps',
        difficulty: 3,
        objective: t('Identify adjustments needed for like-for-like comparison.', 'Identificare le rettifiche necessarie per un confronto omogeneo.'),
        prompt: t('Which adjustments make peer multiples more comparable? Select all that apply.', 'Quali rettifiche rendono più confrontabili i multipli dei comparabili? Seleziona tutte le risposte corrette.'),
        choices: [
          t('Excluding a one-off restructuring charge from LTM EBITDA', 'Escludere un onere di ristrutturazione non ricorrente dall’EBITDA LTM'),
          t('Using fully diluted shares in equity value', 'Usare le azioni pienamente diluite nell’equity value'),
          t('Adding lease liabilities to EV when EBITDA is post-IFRS 16', 'Aggiungere le passività per leasing all’EV quando l’EBITDA è post IFRS 16'),
          t('Using each peer’s own fiscal year without calendarising', 'Usare l’esercizio di ciascun comparabile senza calendarizzare'),
          t('Including NCI in EV when the peer fully consolidates a 60%-owned subsidiary', 'Includere le minoranze nell’EV quando il comparabile consolida integralmente una controllata al 60%')
        ],
        correct: [0, 1, 2, 4],
        explanation: t(
          'Normalising one-offs, diluting shares, matching leases between EV and EBITDA and including NCI when EBITDA is 100% consolidated all improve comparability. Skipping calendarisation compares different time periods.',
          'Normalizzare le poste non ricorrenti, diluire le azioni, trattare i leasing in modo coerente tra EV ed EBITDA e includere le minoranze quando l’EBITDA è consolidato al 100% migliorano la comparabilità. Non calendarizzare confronta periodi diversi.'
        )
      }
    ],
    flashcards: [
      { id: 'fc-mod-comps-1', topic: 'trading-comps', front: t('Steps of a comps model?', 'Fasi di un modello di comparabili?'), back: t('Select peers → equity value (diluted) → EV → LTM/forward financials → normalise → calendarise → multiples → median/quartiles → apply to target.', 'Selezione → equity value (diluito) → EV → dati LTM/prospettici → normalizzazione → calendarizzazione → multipli → mediana/quartili → applicazione al target.') },
      { id: 'fc-mod-comps-2', topic: 'calendarisation', front: t('Calendarise a March year-end to CY2026?', 'Calendarizzare un esercizio a marzo sull’anno 2026?'), back: t('CY2026 = 3/12 × FY Mar-26 + 9/12 × FY Mar-27.', 'AS2026 = 3/12 × esercizio mar-26 + 9/12 × esercizio mar-27.') },
      { id: 'fc-mod-comps-3', topic: 'trading-comps', front: t('Why prefer the median to the mean?', 'Perché preferire la mediana alla media?'), back: t('It is not distorted by outliers (e.g. a peer trading on takeover speculation).', 'Non è distorta dagli outlier (es. un comparabile che tratta su speculazioni di OPA).') },
      { id: 'fc-mod-comps-4', topic: 'trading-comps', front: t('IFRS 16 and EV/EBITDA?', 'IFRS 16 ed EV/EBITDA?'), back: t('Post-IFRS 16 EBITDA excludes lease costs, so EV should include lease liabilities — treat all peers consistently.', 'L’EBITDA post IFRS 16 esclude i costi di leasing, quindi l’EV deve includere le passività per leasing — tratta tutti i comparabili allo stesso modo.') }
    ],
    sources: [{ label: 'IFRS Foundation — IFRS 16 Leases', url: 'https://www.ifrs.org/issued-standards/list-of-standards/ifrs-16-leases/' }]
  },
  {
    id: 'mod-dcf-model',
    academyId: 'modelling',
    moduleId: 'FMOD3',
    mode: 'deep',
    minutes: 15,
    difficulty: 3,
    reviewed: '2026-10',
    objective: t(
      'Lay out a DCF model: build unlevered free cash flow, discount it, add a terminal value, bridge to equity value per share, and sanity-check the result.',
      'Impostare un modello DCF: costruire l’unlevered free cash flow, attualizzarlo, aggiungere il valore terminale, passare all’equity value per azione e verificare la ragionevolezza del risultato.'
    ),
    screens: [
      {
        type: 'intuition',
        title: t('A machine for turning forecasts into value', 'Una macchina che trasforma le previsioni in valore'),
        body: t(
          'A DCF says a business is worth the cash it will generate for all its investors, discounted for time and risk.\n\nThe model has a fixed skeleton: **forecast** the free cash flows, **discount** them at the WACC, add a **terminal value** for everything after the forecast, then move from enterprise value to **equity value per share**. Get the skeleton right and the debate becomes about the assumptions — which is exactly where it should be.',
          'Un DCF dice che un’azienda vale la cassa che genererà per tutti i suoi finanziatori, attualizzata per il tempo e il rischio.\n\nIl modello ha uno scheletro fisso: **prevedere** i free cash flow, **attualizzarli** al WACC, aggiungere un **valore terminale** per tutto ciò che viene dopo l’orizzonte esplicito, poi passare dall’enterprise value all’**equity value per azione**. Con lo scheletro corretto, il dibattito si sposta sulle ipotesi — esattamente dove deve stare.'
        )
      },
      {
        type: 'technical',
        title: t('Model layout', 'Struttura del modello'),
        body: t(
          '1. **Operating forecast** (5–10 years, until the business reaches a steady state): revenue, EBIT, D&A, CapEx, ΔNWC — ideally linked from the three-statement model.\n2. **Unlevered FCF**: EBIT × (1 − t) + D&A − CapEx − ΔNWC.\n3. **WACC** on its own tab: cost of equity (CAPM), after-tax cost of debt, target capital structure.\n4. **Terminal value**: Gordon growth and/or exit multiple, each cross-checked against the other.\n5. **Discounting**: end-of-year or mid-year convention; handle stub periods if the valuation date is mid-year.\n6. **Bridge**: EV − net debt − other claims (NCI, pensions, preferred) = equity value; ÷ diluted shares.\n7. **Sensitivity tables**: WACC × g, WACC × exit multiple.',
          '1. **Previsione operativa** (5–10 anni, fino a una situazione di regime): ricavi, EBIT, ammortamenti, CapEx, ΔNWC — idealmente collegati al modello three-statement.\n2. **Unlevered FCF**: EBIT × (1 − t) + ammortamenti − CapEx − ΔNWC.\n3. **WACC** in un foglio dedicato: costo dell’equity (CAPM), costo del debito netto d’imposta, struttura finanziaria obiettivo.\n4. **Valore terminale**: crescita perpetua (Gordon) e/o multiplo di uscita, verificati l’uno con l’altro.\n5. **Attualizzazione**: convenzione di fine anno o di metà anno; gestione dei periodi stub se la data di valutazione cade in corso d’anno.\n6. **Bridge**: EV − debito netto − altre pretese (minoranze, fondi pensione, privilegiate) = equity value; ÷ azioni diluite.\n7. **Tabelle di sensitività**: WACC × g, WACC × multiplo di uscita.'
        )
      },
      {
        type: 'formula',
        formulas: [
          { name: t('Unlevered free cash flow', 'Unlevered free cash flow'), expr: 'UFCF = EBIT × (1 − t) + D&A − CapEx − ΔNWC' },
          { name: t('Discount factor', 'Fattore di sconto'), expr: 'DF_t = 1 / (1 + WACC)^t   (mid-year: t − 0.5)' },
          { name: t('Gordon terminal value', 'Valore terminale di Gordon'), expr: 'TV_N = UFCF_N × (1 + g) / (WACC − g)' },
          { name: t('Enterprise value', 'Enterprise value'), expr: 'EV = Σ UFCF_t × DF_t + TV_N × DF_N' },
          { name: t('Value per share', 'Valore per azione'), expr: 'Price = (EV − Net debt − Other claims) / Diluted shares' }
        ],
        note: t(
          'The terminal value is discounted with the end-of-year factor of year N (Gordon). Under the mid-year convention many practitioners still discount an exit-multiple TV at N, because it represents a sale at year-end.',
          'Il valore terminale si attualizza con il fattore di fine anno N (Gordon). Con la convenzione di metà anno molti professionisti attualizzano comunque a N un TV da multiplo di uscita, perché rappresenta una vendita a fine anno.'
        )
      },
      {
        type: 'example',
        title: t('From EBIT to UFCF', 'Dall’EBIT all’UFCF'),
        body: t('Kappa S.p.A., one forecast year (€m), tax rate 25%.', 'Kappa S.p.A., un anno di previsione (€m), aliquota 25%.'),
        table: {
          headers: [t('Line', 'Riga'), t('€m', '€m')],
          rows: [
            ['EBIT', '80'],
            [t('Taxes on EBIT (25%)', 'Imposte sull’EBIT (25%)'), '(20)'],
            ['NOPAT', '60'],
            [t('+ D&A', '+ Ammortamenti'), '25'],
            [t('− CapEx', '− CapEx'), '(30)'],
            [t('− Increase in NWC', '− Aumento del circolante'), '(5)'],
            [t('Unlevered FCF', 'Unlevered FCF'), '50']
          ],
          totalRows: [2, 6]
        }
      },
      {
        type: 'technical',
        title: t('Sanity checks before you send it', 'Verifiche prima di inviarlo'),
        body: t(
          '- **Terminal value share** of EV: often well over half. If it is very high, the forecast probably stops before steady state.\n- **Implied exit multiple** from the Gordon TV (TV / final-year EBITDA) should be close to where peers trade — and vice versa, the **implied growth** from an exit-multiple TV should be plausible (below long-run nominal GDP growth).\n- **Terminal-year consistency**: CapEx ≥ D&A for a growing business; ΔNWC consistent with growth; normalised margins.\n- **Interest is not in UFCF**: financing is captured in the WACC. Deducting interest would count it twice.',
          '- **Peso del valore terminale** sull’EV: spesso ben oltre la metà. Se è molto alto, probabilmente la previsione si ferma prima della situazione di regime.\n- Il **multiplo di uscita implicito** nel TV di Gordon (TV / EBITDA dell’ultimo anno) deve essere vicino ai multipli dei comparabili — e, viceversa, la **crescita implicita** in un TV da multiplo deve essere plausibile (inferiore alla crescita nominale del PIL di lungo periodo).\n- **Coerenza dell’anno terminale**: CapEx ≥ ammortamenti per un’azienda in crescita; ΔNWC coerente con la crescita; margini normalizzati.\n- **Gli interessi non entrano nell’UFCF**: il finanziamento è già nel WACC. Dedurli significherebbe contarli due volte.'
        )
      },
      {
        type: 'realworld',
        body: t(
          'In a fairness opinion or a sell-side pitch, the DCF appears as a **range** on the football field, driven by the WACC × g sensitivity — never as a single number. Clients and buyers will challenge the terminal value first, so analysts prepare the implied multiple and implied growth cross-checks in advance. Equity research DCFs often run 10 years for growth companies to reach steady state.',
          'In una fairness opinion o in un pitch sell-side il DCF compare come **intervallo** nel football field, determinato dalla sensitività WACC × g — mai come un numero unico. Clienti e compratori contestano per primo il valore terminale, quindi gli analisti preparano in anticipo le verifiche del multiplo implicito e della crescita implicita. Nell’equity research i DCF delle società in crescita spesso coprono 10 anni per arrivare alla situazione di regime.'
        )
      },
      { type: 'exercise', questionId: 'mod-dcf-q1' },
      { type: 'exercise', questionId: 'mod-dcf-q2' },
      { type: 'exercise', questionId: 'mod-dcf-q3' },
      {
        type: 'interview',
        question: t('Walk me through a DCF.', 'Spiegami come funziona un DCF.'),
        answer: t(
          'I project unlevered free cash flow — EBIT after tax, plus D&A, minus CapEx and the increase in working capital — for five to ten years until the business is in steady state. I discount those cash flows at the WACC, which reflects the cost of both debt and equity. I add a terminal value, using either a perpetuity growth rate or an exit multiple, discounted from the final year, and cross-check one against the other. That gives enterprise value; I subtract net debt and other claims to get equity value and divide by diluted shares for the implied share price. Finally I show sensitivities to WACC and terminal assumptions.',
          'Proietto l’unlevered free cash flow — EBIT al netto delle imposte, più ammortamenti, meno CapEx e aumento del circolante — per cinque-dieci anni fino alla situazione di regime. Attualizzo questi flussi al WACC, che riflette il costo sia del debito sia dell’equity. Aggiungo un valore terminale, con crescita perpetua o multiplo di uscita, attualizzato dall’ultimo anno, e verifico l’uno con l’altro. Ottengo l’enterprise value; sottraggo debito netto e altre pretese per l’equity value e divido per le azioni diluite per il prezzo implicito. Infine mostro le sensitività a WACC e ipotesi terminali.'
        )
      },
      {
        type: 'mistakes',
        items: [
          t('Deducting interest from UFCF and then discounting at the WACC (double counting the cost of debt).', 'Dedurre gli interessi dall’UFCF e poi attualizzare al WACC (contando due volte il costo del debito).'),
          t('Discounting the terminal value with the wrong factor (e.g. year N+1, or not discounting it at all).', 'Attualizzare il valore terminale con il fattore sbagliato (es. anno N+1, o non attualizzarlo affatto).'),
          t('A perpetual growth rate above long-run nominal GDP growth.', 'Un tasso di crescita perpetua superiore alla crescita nominale di lungo periodo del PIL.'),
          t('Forgetting other claims (NCI, pension deficits) in the equity bridge.', 'Dimenticare le altre pretese (minoranze, deficit pensionistici) nel bridge verso l’equity.')
        ]
      },
      {
        type: 'summary',
        items: [
          t('UFCF = EBIT(1 − t) + D&A − CapEx − ΔNWC; no interest.', 'UFCF = EBIT(1 − t) + ammortamenti − CapEx − ΔNWC; niente interessi.'),
          t('EV = PV of forecast UFCF + PV of terminal value.', 'EV = valore attuale degli UFCF previsti + valore attuale del valore terminale.'),
          t('Cross-check Gordon TV (implied multiple) and exit multiple TV (implied growth).', 'Verifica il TV di Gordon (multiplo implicito) e il TV da multiplo (crescita implicita).'),
          t('Present a range via WACC × g sensitivities.', 'Presenta un intervallo con le sensitività WACC × g.')
        ]
      }
    ],
    questions: [
      {
        id: 'mod-dcf-q1',
        kind: 'grid',
        topic: 'dcf-model',
        difficulty: 3,
        objective: t('Build UFCF, discount it, and compute a Gordon terminal value and enterprise value.', 'Costruire l’UFCF, attualizzarlo e calcolare valore terminale di Gordon ed enterprise value.'),
        prompt: t(
          'Lambda S.p.A.: tax rate 25%, WACC 10%, perpetual growth 2% after Y3, end-of-year discounting. Fill in the blanks (€m; discount factors to 4 decimals, values to 2).',
          'Lambda S.p.A.: aliquota 25%, WACC 10%, crescita perpetua del 2% dopo Y3, attualizzazione a fine anno. Completa le celle vuote (€m; fattori di sconto a 4 decimali, valori a 2).'
        ),
        unit: '€m',
        columns: [t('€m', '€m'), ...yrs('Y1', 'Y2', 'Y3')],
        rows: [
          { label: t('EBIT', 'EBIT'), cells: [100, 110, 120] },
          {
            label: t('NOPAT = EBIT × (1 − 25%)', 'NOPAT = EBIT × (1 − 25%)'),
            cells: [
              { answer: 75, verify: { fn: 'product', args: [100, 0.75] } },
              { answer: 82.5, verify: { fn: 'product', args: [110, 0.75] } },
              { answer: 90, verify: { fn: 'product', args: [120, 0.75] } }
            ]
          },
          { label: t('+ D&A', '+ Ammortamenti'), cells: [20, 22, 24] },
          { label: t('− CapEx', '− CapEx'), cells: [30, 32, 34] },
          { label: t('− Increase in NWC', '− Aumento del circolante'), cells: [5, 5, 6] },
          {
            label: t('Unlevered FCF', 'Unlevered FCF'),
            cells: [
              { answer: 60, verify: { fn: 'unleveredFCF', args: [100, 0.25, 20, 30, 5] } },
              { answer: 67.5, verify: { fn: 'unleveredFCF', args: [110, 0.25, 22, 32, 5] } },
              { answer: 74, verify: { fn: 'unleveredFCF', args: [120, 0.25, 24, 34, 6] } }
            ]
          },
          {
            label: t('Discount factor @10%', 'Fattore di sconto al 10%'),
            cells: [
              { answer: 0.9091, tolerance: { abs: 0.0001 }, verify: { fn: 'pv', args: [1, 0.1, 1] } },
              { answer: 0.8264, tolerance: { abs: 0.0001 }, verify: { fn: 'pv', args: [1, 0.1, 2] } },
              { answer: 0.7513, tolerance: { abs: 0.0001 }, verify: { fn: 'pv', args: [1, 0.1, 3] } }
            ]
          },
          {
            label: t('PV of UFCF', 'Valore attuale dell’UFCF'),
            cells: [
              { answer: 54.55, tolerance: { abs: 0.01 }, verify: { fn: 'pv', args: [60, 0.1, 1] } },
              { answer: 55.79, tolerance: { abs: 0.01 }, verify: { fn: 'pv', args: [67.5, 0.1, 2] } },
              { answer: 55.6, tolerance: { abs: 0.01 }, verify: { fn: 'pv', args: [74, 0.1, 3] } }
            ]
          },
          { label: t('Terminal value at Y3 (g = 2%)', 'Valore terminale a Y3 (g = 2%)'), cells: ['', '', { answer: 943.5, verify: { fn: 'terminalValueGordon', args: [74, 0.1, 0.02] } }] },
          { label: t('PV of terminal value', 'Valore attuale del valore terminale'), cells: ['', '', { answer: 708.87, tolerance: { abs: 0.01 }, verify: { fn: 'pv', args: [943.5, 0.1, 3] } }] },
          {
            label: t('Enterprise value', 'Enterprise value'),
            cells: ['', '', { answer: 874.79, tolerance: { abs: 0.01 }, verify: { fn: 'dcfEnterpriseValue', args: [[60, 67.5, 74], 0.1, 943.5] } }]
          }
        ],
        explanation: t(
          'UFCF: 75 + 20 − 30 − 5 = 60; 82.5 + 22 − 32 − 5 = 67.5; 90 + 24 − 34 − 6 = 74. Discount factors 1/1.1 = 0.9091, 1/1.21 = 0.8264, 1/1.331 = 0.7513. PVs: 54.55, 55.79, 55.60 (sum 165.93). TV = 74 × 1.02 / (0.10 − 0.02) = 943.5; PV = 943.5 × 0.7513 = 708.87. EV = 165.93 + 708.87 = 874.79. The TV is 81% of EV — typical, and a reason to cross-check it. Using Y3 FCF without growing it by (1 + g) gives TV 925.',
          'UFCF: 75 + 20 − 30 − 5 = 60; 82,5 + 22 − 32 − 5 = 67,5; 90 + 24 − 34 − 6 = 74. Fattori di sconto 1/1,1 = 0,9091, 1/1,21 = 0,8264, 1/1,331 = 0,7513. Valori attuali: 54,55, 55,79, 55,60 (somma 165,93). TV = 74 × 1,02 / (0,10 − 0,02) = 943,5; valore attuale = 943,5 × 0,7513 = 708,87. EV = 165,93 + 708,87 = 874,79. Il TV pesa l’81% dell’EV — tipico, e motivo per verificarlo. Usare l’FCF di Y3 senza farlo crescere di (1 + g) dà un TV di 925.'
        )
      },
      {
        id: 'mod-dcf-q2',
        kind: 'numeric',
        topic: 'dcf-model',
        difficulty: 2,
        objective: t('Bridge from enterprise value to implied share price.', 'Passare dall’enterprise value al prezzo implicito per azione.'),
        prompt: t(
          'Lambda’s EV is €874.79m, net debt is €200m and diluted shares are 50m. What is the implied value per share (€)?',
          'L’EV di Lambda è €874,79m, il debito netto €200m e le azioni diluite 50m. Qual è il valore implicito per azione (€)?'
        ),
        answer: 13.5,
        unit: '€',
        tolerance: { abs: 0.01 },
        verify: { fn: 'impliedSharePrice', args: [874.79, 200, 50] },
        explanation: t(
          '(874.79 − 200) / 50 = €13.50. Dividing EV by shares (17.50) ignores the debtholders’ claim.',
          '(874,79 − 200) / 50 = €13,50. Dividere l’EV per le azioni (17,50) ignora la pretesa dei creditori finanziari.'
        )
      },
      {
        id: 'mod-dcf-q3',
        kind: 'numeric',
        topic: 'mid-year-convention',
        difficulty: 3,
        objective: t('Apply the mid-year discounting convention.', 'Applicare la convenzione di attualizzazione a metà anno.'),
        prompt: t(
          'Under the mid-year convention, what is the present value of Y1 UFCF of €60m at a 10% WACC (€m, 2 decimals)?',
          'Con la convenzione di metà anno, qual è il valore attuale di un UFCF Y1 di €60m con WACC del 10% (€m, 2 decimali)?'
        ),
        answer: 57.21,
        unit: '€m',
        tolerance: { abs: 0.01 },
        verify: { fn: 'pv', args: [60, 0.1, 0.5] },
        explanation: t(
          'Cash flows arrive through the year, so on average at t = 0.5: 60 / 1.1^0.5 = 57.21, versus 54.55 at year-end. Mid-year discounting therefore raises EV.',
          'I flussi arrivano durante l’anno, quindi in media a t = 0,5: 60 / 1,1^0,5 = 57,21, contro 54,55 a fine anno. L’attualizzazione a metà anno aumenta quindi l’EV.'
        )
      },
      {
        id: 'mod-dcf-q4',
        kind: 'mcq',
        topic: 'dcf-model',
        difficulty: 2,
        objective: t('Identify double counting of financing costs.', 'Identificare il doppio conteggio dei costi di finanziamento.'),
        prompt: t('An analyst deducts interest expense when computing free cash flow and then discounts at the WACC. What is the effect?', 'Un analista deduce gli oneri finanziari nel calcolo del free cash flow e poi attualizza al WACC. Qual è l’effetto?'),
        choices: [
          t('EV is overstated because interest is tax-deductible', 'L’EV è sovrastimato perché gli interessi sono deducibili'),
          t('No effect: the WACC already excludes debt', 'Nessun effetto: il WACC esclude già il debito'),
          t('EV is understated because the cost of debt is counted twice', 'L’EV è sottostimato perché il costo del debito è contato due volte'),
          t('Only equity value changes, not EV', 'Cambia solo l’equity value, non l’EV')
        ],
        correct: 2,
        explanation: t(
          'The WACC already includes the after-tax cost of debt. Deducting interest from the cash flows charges it again, understating EV. Interest belongs in levered FCF, discounted at the cost of equity.',
          'Il WACC include già il costo del debito netto d’imposta. Dedurre gli interessi dai flussi lo addebita una seconda volta, sottostimando l’EV. Gli interessi appartengono al levered FCF, attualizzato al costo dell’equity.'
        )
      }
    ],
    flashcards: [
      { id: 'fc-mod-dcf-1', topic: 'dcf-model', front: t('UFCF formula?', 'Formula dell’UFCF?'), back: t('EBIT × (1 − t) + D&A − CapEx − ΔNWC.', 'EBIT × (1 − t) + ammortamenti − CapEx − ΔNWC.') },
      { id: 'fc-mod-dcf-2', topic: 'dcf-model', front: t('Gordon terminal value?', 'Valore terminale di Gordon?'), back: t('TV_N = UFCF_N × (1 + g) / (WACC − g), discounted with the year-N factor.', 'TV_N = UFCF_N × (1 + g) / (WACC − g), attualizzato con il fattore dell’anno N.') },
      { id: 'fc-mod-dcf-3', topic: 'mid-year-convention', front: t('Mid-year convention?', 'Convenzione di metà anno?'), back: t('Discount each year’s cash flow at t − 0.5, reflecting cash received through the year; raises EV versus end-of-year.', 'Si attualizza il flusso di ogni anno a t − 0,5, perché la cassa arriva durante l’anno; aumenta l’EV rispetto alla fine anno.') },
      { id: 'fc-mod-dcf-4', topic: 'dcf-model', front: t('Two cross-checks on terminal value?', 'Due verifiche sul valore terminale?'), back: t('Implied exit multiple of a Gordon TV; implied perpetual growth of an exit-multiple TV.', 'Multiplo di uscita implicito nel TV di Gordon; crescita perpetua implicita nel TV da multiplo.') }
    ]
  },
  {
    id: 'mod-merger-model',
    academyId: 'modelling',
    moduleId: 'FMOD3',
    mode: 'deep',
    minutes: 14,
    difficulty: 3,
    reviewed: '2026-10',
    objective: t(
      'Build an accretion/dilution analysis: pro forma net income, new shares issued, pro forma EPS, and the effect of the funding mix and synergies.',
      'Costruire un’analisi di accrescimento/diluizione: utile netto pro forma, nuove azioni emesse, EPS pro forma ed effetto del mix di finanziamento e delle sinergie.'
    ),
    screens: [
      {
        type: 'intuition',
        title: t('Does the deal raise the buyer’s EPS?', 'L’operazione aumenta l’EPS del compratore?'),
        body: t(
          'When a listed company buys another, its board and shareholders ask one quick question: will earnings per share go **up (accretive)** or **down (dilutive)**?\n\nThe buyer gains the target’s profits but "pays" for them: with **interest** on new debt, with **interest lost** on cash spent, or with **new shares** that split the earnings among more owners. The merger model compares what you gain with what each funding source costs.',
          'Quando una società quotata ne acquista un’altra, board e azionisti si pongono una domanda rapida: l’utile per azione **sale (accrescitivo)** o **scende (diluitivo)**?\n\nIl compratore acquisisce gli utili del target ma li "paga": con gli **interessi** sul nuovo debito, con gli **interessi persi** sulla cassa utilizzata o con **nuove azioni** che dividono gli utili tra più soci. Il merger model confronta ciò che si guadagna con il costo di ogni fonte di finanziamento.'
        )
      },
      {
        type: 'technical',
        title: t('Model steps', 'Le fasi del modello'),
        body: t(
          '1. **Purchase price**: offer price per share × target diluted shares (equity value), plus refinanced debt and fees for total funding needs.\n2. **Funding mix**: cash on hand, new debt, new acquirer shares.\n3. **Pro forma net income** = acquirer NI + target NI − after-tax interest on new debt − after-tax interest forgone on cash + after-tax synergies − after-tax new D&A from purchase price allocation (PPA) write-ups.\n4. **Pro forma shares** = acquirer shares + new shares issued.\n5. **Pro forma EPS** vs standalone EPS → accretion/(dilution), usually for year 1 and year 2.\n6. **Breakeven synergies**, and sensitivities to price and mix.',
          '1. **Prezzo di acquisto**: prezzo d’offerta per azione × azioni diluite del target (equity value), più debito rifinanziato e costi per il fabbisogno totale.\n2. **Mix di finanziamento**: cassa disponibile, nuovo debito, nuove azioni del compratore.\n3. **Utile netto pro forma** = utile del compratore + utile del target − interessi netti d’imposta sul nuovo debito − interessi netti persi sulla cassa + sinergie nette d’imposta − nuovi ammortamenti netti d’imposta da rivalutazioni della PPA.\n4. **Azioni pro forma** = azioni del compratore + nuove azioni emesse.\n5. **EPS pro forma** vs EPS stand-alone → accrescimento/(diluizione), di solito per l’anno 1 e l’anno 2.\n6. **Sinergie di pareggio** e sensitività a prezzo e mix.'
        )
      },
      {
        type: 'formula',
        formulas: [
          { name: t('New shares issued', 'Nuove azioni emesse'), expr: 'New shares = Stock consideration / Acquirer share price' },
          { name: t('Pro forma net income', 'Utile netto pro forma'), expr: 'PF NI = NI_A + NI_T − Debt × r_d × (1 − t) − Cash × r_c × (1 − t) + Synergies × (1 − t) − New D&A × (1 − t)' },
          { name: t('Accretion / (dilution)', 'Accrescimento / (diluizione)'), expr: 'Accretion % = PF NI / (Shares_A + New shares) ÷ EPS_A − 1' },
          { name: t('Cost of stock (earnings yield)', 'Costo delle azioni (earnings yield)'), expr: 'Cost of stock = 1 / Acquirer P/E' }
        ],
        note: t(
          'Quick rule: the deal is accretive if the target’s earnings yield at the offer price (target NI / purchase price) exceeds the weighted after-tax cost of the funding used. For an all-stock deal this reduces to: acquirer P/E > P/E paid for the target.',
          'Regola rapida: l’operazione è accrescitiva se l’earnings yield del target al prezzo d’offerta (utile del target / prezzo) supera il costo medio netto d’imposta delle fonti utilizzate. Per un’operazione interamente in azioni si riduce a: P/E del compratore > P/E pagato per il target.'
        )
      },
      {
        type: 'example',
        title: t('Comparing funding costs', 'Confronto dei costi di finanziamento'),
        body: t(
          'Mu S.p.A. trades at 20x earnings; it can borrow at 6% or use cash earning 3%; tax rate 25%. The target is bought at 16.7x its earnings (earnings yield ≈ 6.0%).',
          'Mu S.p.A. tratta a 20 volte gli utili; può indebitarsi al 6% o usare cassa che rende il 3%; aliquota 25%. Il target viene acquistato a 16,7 volte i suoi utili (earnings yield ≈ 6,0%).'
        ),
        table: {
          headers: [t('Funding source', 'Fonte'), t('After-tax cost', 'Costo netto d’imposta'), t('vs 6.0% yield', 'vs yield 6,0%')],
          rows: [
            [t('Cash', 'Cassa'), '3% × 0.75 = 2.25%', t('Accretive', 'Accrescitivo')],
            [t('New debt', 'Nuovo debito'), '6% × 0.75 = 4.50%', t('Accretive', 'Accrescitivo')],
            [t('New stock', 'Nuove azioni'), '1 / 20 = 5.00%', t('Accretive', 'Accrescitivo')]
          ]
        }
      },
      {
        type: 'realworld',
        body: t(
          'Accretion/dilution is a staple of board materials and investor presentations for public M&A ("expected to be EPS accretive in the first full year"). But EPS accretion is **not value creation**: a deal funded with cheap debt can be accretive while destroying value if the price exceeds what the target is worth. Bankers therefore show it next to returns on invested capital, synergy value and the contribution analysis.',
          'L’analisi di accrescimento/diluizione è un elemento fisso dei materiali per il board e delle presentazioni agli investitori nelle operazioni tra quotate ("accrescitiva sull’EPS già dal primo esercizio intero"). Ma l’accrescimento dell’EPS **non è creazione di valore**: un’operazione finanziata con debito a basso costo può essere accrescitiva e distruggere valore se il prezzo supera quanto vale il target. Per questo i banker la presentano accanto al ritorno sul capitale investito, al valore delle sinergie e alla contribution analysis.'
        )
      },
      { type: 'exercise', questionId: 'mod-merger-q1' },
      { type: 'exercise', questionId: 'mod-merger-q2' },
      { type: 'exercise', questionId: 'mod-merger-q3' },
      {
        type: 'interview',
        question: t('An acquirer with a P/E of 12x buys a target at 18x in an all-stock deal. Accretive or dilutive?', 'Un compratore con P/E di 12x acquista un target a 18x con un’operazione interamente in azioni. Accrescitiva o diluitiva?'),
        answer: t(
          'Dilutive, before synergies. The acquirer is issuing shares that cost it an earnings yield of 1/12 ≈ 8.3% to buy earnings yielding only 1/18 ≈ 5.6%. Each new share brings in less earnings than an existing share earns. Synergies or a cheaper funding source — debt or cash — could reverse it, so I would also show the breakeven synergies.',
          'Diluitiva, prima delle sinergie. Il compratore emette azioni che gli costano un earnings yield di 1/12 ≈ 8,3% per acquistare utili che rendono solo 1/18 ≈ 5,6%. Ogni nuova azione porta meno utili di quanti ne generi un’azione esistente. Sinergie o una fonte più economica — debito o cassa — potrebbero ribaltare il risultato, quindi mostrerei anche le sinergie di pareggio.'
        )
      },
      {
        type: 'mistakes',
        items: [
          t('Forgetting the tax shield on new interest (or applying tax twice).', 'Dimenticare lo scudo fiscale sui nuovi interessi (o applicare le imposte due volte).'),
          t('Ignoring the interest income lost on cash used to pay.', 'Ignorare gli interessi attivi persi sulla cassa utilizzata.'),
          t('Omitting new amortisation from PPA write-ups of intangibles.', 'Omettere i nuovi ammortamenti derivanti dalla rivalutazione degli intangibili nella PPA.'),
          t('Treating accretion as proof that the deal creates value.', 'Considerare l’accrescimento come prova che l’operazione crea valore.')
        ]
      },
      {
        type: 'summary',
        items: [
          t('PF EPS = (NI_A + NI_T ± financing, synergy and PPA effects, after tax) / (Shares_A + new shares).', 'EPS PF = (utile A + utile T ± effetti di finanziamento, sinergie e PPA, netti d’imposta) / (azioni A + nuove azioni).'),
          t('Compare the target’s earnings yield with the after-tax cost of each funding source.', 'Confronta l’earnings yield del target con il costo netto d’imposta di ogni fonte.'),
          t('All-stock: accretive if acquirer P/E > purchase P/E (before synergies).', 'Solo azioni: accrescitiva se P/E del compratore > P/E pagato (prima delle sinergie).'),
          t('Accretion ≠ value creation.', 'Accrescimento ≠ creazione di valore.')
        ]
      }
    ],
    questions: [
      {
        id: 'mod-merger-q1',
        kind: 'grid',
        topic: 'accretion-dilution',
        difficulty: 3,
        objective: t('Compute pro forma EPS for a mixed stock/debt acquisition.', 'Calcolare l’EPS pro forma di un’acquisizione finanziata con azioni e debito.'),
        prompt: t(
          'Acquirer: net income €500m, 100m shares, share price €40. Target: net income €60m, bought for €1,000m of equity, funded 50% with new acquirer shares and 50% with new debt at 6%. Tax rate 25%; no synergies or PPA effects. Fill in the blanks (€m, m shares, € per share).',
          'Compratore: utile netto €500m, 100m di azioni, prezzo €40. Target: utile netto €60m, acquistato per €1.000m di equity, finanziato al 50% con nuove azioni del compratore e al 50% con nuovo debito al 6%. Aliquota 25%; nessuna sinergia né effetto PPA. Completa le celle vuote (€m, milioni di azioni, € per azione).'
        ),
        columns: [t('Item', 'Voce'), t('Value', 'Valore')],
        rows: [
          {
            label: t('Standalone EPS (€)', 'EPS stand-alone (€)'),
            cells: [{ answer: 5, verify: { fn: 'accretionDilution', args: [{ acquirerNetIncome: 500, acquirerShares: 100, targetNetIncome: 60, purchaseEquityValue: 1000, pctStock: 0.5, acquirerSharePrice: 40, costOfDebt: 0.06, pctDebt: 0.5, foregoneInterestOnCash: 0, pctCash: 0, taxRate: 0.25 }], pick: 'standaloneEPS' } }]
          },
          {
            label: t('New shares issued (m)', 'Nuove azioni emesse (m)'),
            cells: [{ answer: 12.5, verify: { fn: 'accretionDilution', args: [{ acquirerNetIncome: 500, acquirerShares: 100, targetNetIncome: 60, purchaseEquityValue: 1000, pctStock: 0.5, acquirerSharePrice: 40, costOfDebt: 0.06, pctDebt: 0.5, foregoneInterestOnCash: 0, pctCash: 0, taxRate: 0.25 }], pick: 'newShares' } }]
          },
          { label: t('After-tax interest on new debt (€m)', 'Interessi netti d’imposta sul nuovo debito (€m)'), cells: [{ answer: 22.5, verify: { fn: 'product', args: [500, 0.06, 0.75] } }] },
          {
            label: t('Pro forma net income (€m)', 'Utile netto pro forma (€m)'),
            cells: [{ answer: 537.5, verify: { fn: 'accretionDilution', args: [{ acquirerNetIncome: 500, acquirerShares: 100, targetNetIncome: 60, purchaseEquityValue: 1000, pctStock: 0.5, acquirerSharePrice: 40, costOfDebt: 0.06, pctDebt: 0.5, foregoneInterestOnCash: 0, pctCash: 0, taxRate: 0.25 }], pick: 'proFormaNetIncome' } }]
          },
          { label: t('Pro forma shares (m)', 'Azioni pro forma (m)'), cells: [{ answer: 112.5, verify: { fn: 'sum', args: [100, 12.5] } }] },
          {
            label: t('Pro forma EPS (€)', 'EPS pro forma (€)'),
            cells: [{ answer: 4.78, tolerance: { abs: 0.01 }, verify: { fn: 'accretionDilution', args: [{ acquirerNetIncome: 500, acquirerShares: 100, targetNetIncome: 60, purchaseEquityValue: 1000, pctStock: 0.5, acquirerSharePrice: 40, costOfDebt: 0.06, pctDebt: 0.5, foregoneInterestOnCash: 0, pctCash: 0, taxRate: 0.25 }], pick: 'proFormaEPS' } }]
          },
          { label: t('Accretion / (dilution) per share (€)', 'Accrescimento / (diluizione) per azione (€)'), cells: [{ answer: -0.22, tolerance: { abs: 0.01 }, verify: { fn: 'diff', args: [537.5 / 112.5, 5] } }] }
        ],
        explanation: t(
          'Standalone EPS = 500/100 = 5.00. Stock: €500m / €40 = 12.5m new shares. Debt: 500 × 6% × (1 − 25%) = 22.5. PF NI = 500 + 60 − 22.5 = 537.5; PF shares 112.5; PF EPS = 4.78 → −€0.22, i.e. 4.4% dilutive. Why: the target is bought at 16.7x (yield 6.0%), while stock costs 1/8x = 12.5% (acquirer P/E = 40/5 = 8x). The debt half (4.5% after tax) is accretive, but the stock half is heavily dilutive.',
          'EPS stand-alone = 500/100 = 5,00. Azioni: €500m / €40 = 12,5m nuove azioni. Debito: 500 × 6% × (1 − 25%) = 22,5. Utile PF = 500 + 60 − 22,5 = 537,5; azioni PF 112,5; EPS PF = 4,78 → −€0,22, cioè diluizione del 4,4%. Perché: il target è pagato 16,7x (yield 6,0%), mentre le azioni costano 1/8x = 12,5% (P/E del compratore = 40/5 = 8x). La metà a debito (4,5% netto d’imposta) è accrescitiva, ma quella in azioni è fortemente diluitiva.'
        )
      },
      {
        id: 'mod-merger-q2',
        kind: 'numeric',
        topic: 'accretion-dilution',
        difficulty: 3,
        objective: t('Compute breakeven pre-tax synergies.', 'Calcolare le sinergie ante imposte di pareggio.'),
        prompt: t(
          'In the deal above (PF NI €537.5m, PF shares 112.5m, standalone EPS €5.00, tax 25%), what run-rate pre-tax synergies make the deal EPS-neutral (€m, 2 decimals)?',
          'Nell’operazione precedente (utile PF €537,5m, azioni PF 112,5m, EPS stand-alone €5,00, aliquota 25%), quali sinergie ante imposte a regime rendono l’operazione neutrale sull’EPS (€m, 2 decimali)?'
        ),
        answer: 33.33,
        unit: '€m',
        tolerance: { abs: 0.01 },
        verify: { fn: 'ratio', args: [25, 0.75] },
        steps: [
          t('Required PF NI = 5.00 × 112.5 = 562.5', 'Utile PF necessario = 5,00 × 112,5 = 562,5'),
          t('Shortfall after tax = 562.5 − 537.5 = 25', 'Mancanza netta d’imposta = 562,5 − 537,5 = 25'),
          t('Pre-tax synergies = 25 / (1 − 25%) = 33.33', 'Sinergie ante imposte = 25 / (1 − 25%) = 33,33')
        ],
        explanation: t(
          'Synergies are taxed, so the after-tax gap of 25 must be grossed up: 25 / 0.75 = 33.33. Answering 25 forgets tax; 18.75 applies tax in the wrong direction.',
          'Le sinergie sono tassate, quindi il divario netto di 25 va lordizzato: 25 / 0,75 = 33,33. Rispondere 25 dimentica le imposte; 18,75 le applica nel verso sbagliato.'
        )
      },
      {
        id: 'mod-merger-q3',
        kind: 'mcq',
        topic: 'accretion-dilution',
        difficulty: 2,
        objective: t('Apply the P/E rule for all-stock deals.', 'Applicare la regola del P/E nelle operazioni in azioni.'),
        prompt: t(
          'Acquirer P/E 25x; target bought at 20x its earnings; 100% stock; no synergies. What is the year-1 EPS impact?',
          'P/E del compratore 25x; target acquistato a 20 volte i suoi utili; 100% in azioni; nessuna sinergia. Qual è l’impatto sull’EPS nel primo anno?'
        ),
        choices: [t('Accretive', 'Accrescitivo'), t('Dilutive', 'Diluitivo'), t('Neutral', 'Neutrale'), t('Cannot tell without the share count', 'Non si può dire senza il numero di azioni')],
        correct: 0,
        explanation: t(
          'The acquirer "pays" an earnings yield of 1/25 = 4% on its stock and buys earnings yielding 1/20 = 5%: each new share issued brings in more earnings than an existing share earns, so the deal is accretive. Share counts change the magnitude, not the sign.',
          'Il compratore "paga" un earnings yield di 1/25 = 4% sulle sue azioni e acquista utili che rendono 1/20 = 5%: ogni nuova azione emessa porta più utili di quanti ne generi un’azione esistente, quindi l’operazione è accrescitiva. Il numero di azioni cambia l’entità, non il segno.'
        )
      },
      {
        id: 'mod-merger-q4',
        kind: 'numeric',
        topic: 'accretion-dilution',
        difficulty: 2,
        objective: t('Compute shares issued in a stock deal.', 'Calcolare le azioni emesse in un’operazione in azioni.'),
        prompt: t(
          'The acquirer offers €30 per share for a target with 20m diluted shares, all in stock. The acquirer’s share price is €40. How many new shares (m) are issued?',
          'Il compratore offre €30 per azione per un target con 20m di azioni diluite, interamente in azioni. Il prezzo del compratore è €40. Quante nuove azioni (m) vengono emesse?'
        ),
        answer: 15,
        unit: 'm',
        verify: { fn: 'ratio', args: [600, 40] },
        explanation: t(
          'Purchase equity value = 30 × 20 = €600m; ÷ €40 = 15m shares (exchange ratio 0.75 acquirer shares per target share). Dividing the target’s share count by the price ratio the wrong way gives 26.7m.',
          'Equity value pagato = 30 × 20 = €600m; ÷ €40 = 15m di azioni (rapporto di cambio 0,75 azioni del compratore per azione del target). Invertire il rapporto tra i prezzi dà 26,7m.'
        )
      },
      {
        id: 'mod-merger-q5',
        kind: 'multi',
        topic: 'accretion-dilution',
        difficulty: 2,
        objective: t('Identify drivers that make a deal more accretive.', 'Identificare i fattori che rendono un’operazione più accrescitiva.'),
        prompt: t('Holding everything else constant, which changes make a deal more accretive? Select all that apply.', 'A parità di altre condizioni, quali modifiche rendono un’operazione più accrescitiva? Seleziona tutte le risposte corrette.'),
        choices: [
          t('A higher acquirer share price (stock deal)', 'Un prezzo più alto delle azioni del compratore (operazione in azioni)'),
          t('A lower interest rate on new debt', 'Un tasso più basso sul nuovo debito'),
          t('A higher offer premium', 'Un premio d’offerta più alto'),
          t('Larger after-tax synergies', 'Sinergie nette d’imposta maggiori'),
          t('Larger intangible write-ups amortised in the PPA', 'Maggiori rivalutazioni di intangibili ammortizzate nella PPA')
        ],
        correct: [0, 1, 3],
        explanation: t(
          'A higher acquirer share price means fewer new shares; cheaper debt lowers the interest cost; synergies add earnings. A higher premium raises the cost of the deal, and more amortisable intangibles add D&A that reduces pro forma net income.',
          'Un prezzo più alto delle azioni del compratore significa meno nuove azioni; un debito più economico riduce gli interessi; le sinergie aumentano gli utili. Un premio più alto aumenta il costo dell’operazione e più intangibili ammortizzabili aggiungono ammortamenti che riducono l’utile pro forma.'
        )
      }
    ],
    flashcards: [
      { id: 'fc-mod-merger-1', topic: 'accretion-dilution', front: t('Pro forma net income in a merger model?', 'Utile netto pro forma nel merger model?'), back: t('NI_A + NI_T − after-tax new interest − after-tax forgone interest on cash + after-tax synergies − after-tax new PPA D&A.', 'Utile A + utile T − nuovi interessi netti − interessi persi netti sulla cassa + sinergie nette − nuovi ammortamenti PPA netti.') },
      { id: 'fc-mod-merger-2', topic: 'accretion-dilution', front: t('Cost of stock as a funding source?', 'Costo delle azioni come fonte di finanziamento?'), back: t('The acquirer’s earnings yield = 1 / P/E.', 'L’earnings yield del compratore = 1 / P/E.') },
      { id: 'fc-mod-merger-3', topic: 'accretion-dilution', front: t('All-stock accretion rule?', 'Regola di accrescimento per operazioni in azioni?'), back: t('Accretive (pre-synergies) if acquirer P/E > P/E paid for the target.', 'Accrescitiva (prima delle sinergie) se P/E del compratore > P/E pagato per il target.') },
      { id: 'fc-mod-merger-4', topic: 'accretion-dilution', front: t('Breakeven synergies?', 'Sinergie di pareggio?'), back: t('Pre-tax synergies that make PF EPS = standalone EPS: (EPS_A × PF shares − PF NI) / (1 − t).', 'Sinergie ante imposte che rendono EPS PF = EPS stand-alone: (EPS_A × azioni PF − utile PF) / (1 − t).') }
    ]
  },
  {
    id: 'mod-lbo-model',
    academyId: 'modelling',
    moduleId: 'FMOD3',
    mode: 'deep',
    minutes: 15,
    difficulty: 3,
    reviewed: '2026-10',
    objective: t(
      'Structure an LBO model — sources and uses, operating model, debt schedule, exit and returns — and compute MOIC and IRR.',
      'Strutturare un modello LBO — fonti e impieghi, modello operativo, schedule del debito, uscita e rendimenti — e calcolare MOIC e IRR.'
    ),
    screens: [
      {
        type: 'intuition',
        title: t('Buying a house with a mortgage', 'Comprare casa con un mutuo'),
        body: t(
          'Buy a €500k flat with €100k of your own money and a €400k mortgage; rent pays down the loan; sell after five years for €600k. You walk away with far more than the 20% price gain suggests, because the debt amplified your equity return.\n\nAn LBO is the same: a sponsor buys a company with mostly debt, uses its cash flows to repay that debt, and sells it. The LBO model answers: **what return does the equity earn, and can the company carry the debt?**',
          'Compri un appartamento da €500k con €100k di mezzi propri e un mutuo di €400k; l’affitto ripaga il mutuo; dopo cinque anni vendi a €600k. Porti a casa molto più di quanto suggerisca l’aumento di prezzo del 20%, perché il debito ha amplificato il rendimento del tuo capitale.\n\nUn LBO funziona allo stesso modo: uno sponsor acquista un’azienda prevalentemente a debito, usa i suoi flussi di cassa per rimborsarlo e poi la vende. Il modello LBO risponde: **che rendimento ottiene l’equity, e l’azienda regge il debito?**'
        )
      },
      {
        type: 'technical',
        title: t('Model structure', 'Struttura del modello'),
        body: t(
          '1. **Transaction assumptions**: entry multiple × EBITDA = purchase EV; fees; minimum cash.\n2. **Sources & uses**: uses (equity purchase price, refinanced debt, fees) = sources (debt tranches, sponsor equity, rollover/management equity).\n3. **Opening balance sheet** with PPA adjustments (goodwill, new debt, written-off fees).\n4. **Operating model**: revenue, EBITDA, CapEx, NWC, taxes.\n5. **Debt schedule**: mandatory amortisation, revolver, cash sweep, interest.\n6. **Exit and returns**: exit EV = exit multiple × exit EBITDA; exit equity = exit EV − net debt; MOIC and IRR.\n7. **Sensitivities**: entry/exit multiple, leverage, growth, holding period.',
          '1. **Ipotesi della transazione**: multiplo d’ingresso × EBITDA = EV d’acquisto; costi; cassa minima.\n2. **Fonti e impieghi**: impieghi (prezzo dell’equity, debito rifinanziato, costi) = fonti (tranche di debito, equity dello sponsor, reinvestimento del management).\n3. **Stato patrimoniale d’apertura** con le rettifiche della PPA (avviamento, nuovo debito, costi stornati).\n4. **Modello operativo**: ricavi, EBITDA, CapEx, circolante, imposte.\n5. **Schedule del debito**: ammortamenti obbligatori, revolving, cash sweep, interessi.\n6. **Uscita e rendimenti**: EV di uscita = multiplo di uscita × EBITDA di uscita; equity di uscita = EV − debito netto; MOIC e IRR.\n7. **Sensitività**: multipli d’ingresso/uscita, leva, crescita, durata dell’investimento.'
        )
      },
      {
        type: 'formula',
        formulas: [
          { name: t('Sources = Uses', 'Fonti = Impieghi'), expr: 'Debt + Sponsor equity = Equity purchase price + Refinanced debt + Fees' },
          { name: t('Exit equity', 'Equity di uscita'), expr: 'Exit equity = Exit multiple × Exit EBITDA − Net debt at exit' },
          { name: t('Money multiple', 'Multiplo del capitale'), expr: 'MOIC = Exit equity / Entry equity' },
          { name: t('IRR (no interim dividends)', 'IRR (senza distribuzioni intermedie)'), expr: 'IRR = MOIC^(1/years) − 1' }
        ],
        note: t(
          'Rules of thumb: 2.0x in 3 years ≈ 26% IRR; 2.0x in 5 years ≈ 15%; 3.0x in 5 years ≈ 25%.',
          'Regole pratiche: 2,0x in 3 anni ≈ 26% di IRR; 2,0x in 5 anni ≈ 15%; 3,0x in 5 anni ≈ 25%.'
        )
      },
      {
        type: 'example',
        title: t('Sources and uses', 'Fonti e impieghi'),
        body: t(
          'A sponsor buys Nu S.p.A.: equity purchase price €800m, existing debt of €200m refinanced, transaction fees €30m. Lenders provide a €450m term loan and €150m of senior notes.',
          'Uno sponsor acquista Nu S.p.A.: prezzo dell’equity €800m, debito esistente di €200m rifinanziato, costi di transazione €30m. I finanziatori concedono un term loan di €450m e €150m di senior notes.'
        ),
        table: {
          headers: [t('Uses', 'Impieghi'), t('€m', '€m'), t('Sources', 'Fonti'), t('€m', '€m')],
          rows: [
            [t('Equity purchase price', 'Prezzo dell’equity'), '800', t('Term loan', 'Term loan'), '450'],
            [t('Refinance existing debt', 'Rifinanziamento debito esistente'), '200', t('Senior notes', 'Senior notes'), '150'],
            [t('Fees and expenses', 'Costi e spese'), '30', t('Sponsor equity (plug)', 'Equity dello sponsor (a saldo)'), '430'],
            [t('Total uses', 'Totale impieghi'), '1,030', t('Total sources', 'Totale fonti'), '1,030']
          ],
          totalRows: [3]
        }
      },
      {
        type: 'technical',
        title: t('Where returns come from', 'Da dove vengono i rendimenti'),
        body: t(
          '- **EBITDA growth**: revenue growth and margin expansion.\n- **Multiple expansion**: exiting at a higher multiple than entry — not something to rely on in the base case; many sponsors assume exit = entry.\n- **Deleveraging**: free cash flow repays debt, so a larger share of EV belongs to equity at exit.\n\nIRR is time-sensitive (an early exit boosts IRR), while MOIC measures absolute money made. Sponsors look at both: a 30% IRR over one year may be only 1.3x.\n\nSponsor equity is usually the **plug** in sources & uses: debt is sized on leverage capacity (x EBITDA), and equity fills the rest.',
          '- **Crescita dell’EBITDA**: crescita dei ricavi ed espansione dei margini.\n- **Espansione del multiplo**: uscire a un multiplo più alto di quello d’ingresso — da non dare per scontata nel base case; molti sponsor ipotizzano uscita = ingresso.\n- **Deleveraging**: il free cash flow rimborsa il debito, quindi all’uscita una quota maggiore dell’EV spetta all’equity.\n\nL’IRR è sensibile al tempo (un’uscita anticipata lo aumenta), mentre il MOIC misura il guadagno assoluto. Gli sponsor guardano entrambi: un IRR del 30% in un anno può valere solo 1,3x.\n\nL’equity dello sponsor è di solito la voce **a saldo** di fonti e impieghi: il debito si dimensiona sulla capacità di leva (x EBITDA) e l’equity copre il resto.'
        )
      },
      {
        type: 'realworld',
        body: t(
          'In a sponsor sell-side process, the bank builds an LBO "**ability-to-pay**" analysis: what entry price can a financial buyer afford while still hitting its target IRR (often around 20% or higher) given the leverage lenders will provide? On the buy side, leveraged-finance teams run the same model to size debt and test covenants. LBO modelling tests — a paper LBO in 30 minutes or a full model in 2–3 hours — are standard in private equity recruiting.',
          'In un processo di vendita con sponsor, la banca costruisce un’analisi LBO di "**ability-to-pay**": quale prezzo d’ingresso può permettersi un compratore finanziario raggiungendo comunque l’IRR obiettivo (spesso intorno al 20% o più) con la leva che i finanziatori concederanno? Lato acquisto, i team di leveraged finance usano lo stesso modello per dimensionare il debito e testare i covenant. I test di modellazione LBO — un paper LBO in 30 minuti o un modello completo in 2–3 ore — sono standard nei colloqui di private equity.'
        )
      },
      { type: 'exercise', questionId: 'mod-lbo-q1' },
      { type: 'exercise', questionId: 'mod-lbo-q2' },
      { type: 'exercise', questionId: 'mod-lbo-q3' },
      {
        type: 'interview',
        question: t('Walk me through an LBO model.', 'Spiegami come funziona un modello LBO.'),
        answer: t(
          'First I set transaction assumptions — purchase price as a multiple of EBITDA, leverage, fees — and build sources and uses, with sponsor equity as the plug. Then I adjust the balance sheet for the transaction and project the operating model: revenue, EBITDA, CapEx, working capital and taxes, giving free cash flow. The debt schedule applies that cash to mandatory amortisation and a sweep and calculates interest. At exit, I apply an exit multiple to EBITDA, subtract net debt to get exit equity, and compute MOIC and IRR. Finally I sensitise returns to entry and exit multiples and leverage.',
          'Prima definisco le ipotesi della transazione — prezzo come multiplo dell’EBITDA, leva, costi — e costruisco fonti e impieghi, con l’equity dello sponsor a saldo. Poi rettifico lo stato patrimoniale per la transazione e proietto il modello operativo: ricavi, EBITDA, CapEx, circolante e imposte, da cui il free cash flow. Lo schedule del debito destina questa cassa agli ammortamenti obbligatori e allo sweep e calcola gli interessi. All’uscita applico un multiplo all’EBITDA, sottraggo il debito netto per l’equity di uscita e calcolo MOIC e IRR. Infine faccio le sensitività dei rendimenti a multipli d’ingresso e uscita e alla leva.'
        )
      },
      {
        type: 'mistakes',
        items: [
          t('Forgetting fees in uses, which understates the equity cheque and overstates returns.', 'Dimenticare i costi negli impieghi, sottostimando l’equity investito e sovrastimando i rendimenti.'),
          t('Assuming multiple expansion in the base case.', 'Ipotizzare un’espansione del multiplo nel base case.'),
          t('Subtracting entry debt instead of exit net debt at exit.', 'Sottrarre all’uscita il debito d’ingresso invece del debito netto di uscita.'),
          t('Ignoring cash accumulated on the balance sheet at exit (it belongs to equity).', 'Ignorare la cassa accumulata in bilancio all’uscita (spetta all’equity).')
        ]
      },
      {
        type: 'summary',
        items: [
          t('Sources = uses; sponsor equity is the plug.', 'Fonti = impieghi; l’equity dello sponsor è la voce a saldo.'),
          t('Exit equity = exit EV − exit net debt; MOIC = exit / entry equity.', 'Equity di uscita = EV di uscita − debito netto di uscita; MOIC = equity di uscita / d’ingresso.'),
          t('IRR = MOIC^(1/n) − 1 with no interim cash flows.', 'IRR = MOIC^(1/n) − 1 senza flussi intermedi.'),
          t('Returns come from EBITDA growth, multiple expansion and deleveraging.', 'I rendimenti derivano da crescita dell’EBITDA, espansione del multiplo e deleveraging.')
        ]
      }
    ],
    questions: [
      {
        id: 'mod-lbo-q1',
        kind: 'grid',
        topic: 'lbo-returns',
        difficulty: 3,
        objective: t('Compute entry, exit and returns in a simplified LBO.', 'Calcolare ingresso, uscita e rendimenti in un LBO semplificato.'),
        prompt: t(
          'Entry EBITDA €100m at 10.0x; debt 6.0x EBITDA; fees €20m funded with equity. EBITDA grows 7% a year for 5 years; exit at 10.0x; cumulative debt repaid €250m; no cash at exit. Fill in the blanks (€m, MOIC in x, 2 decimals).',
          'EBITDA d’ingresso €100m a 10,0x; debito 6,0x EBITDA; costi €20m finanziati con equity. L’EBITDA cresce del 7% l’anno per 5 anni; uscita a 10,0x; debito rimborsato cumulato €250m; nessuna cassa all’uscita. Completa le celle vuote (€m, MOIC in x, 2 decimali).'
        ),
        columns: [t('Item', 'Voce'), t('Value', 'Valore')],
        rows: [
          { label: t('Entry EV (€m)', 'EV d’ingresso (€m)'), cells: [{ answer: 1000, verify: { fn: 'simpleLbo', args: [{ entryEbitda: 100, entryMultiple: 10, debtMultiple: 6, feesAndExpenses: 20, ebitdaGrowth: 0.07, years: 5, exitMultiple: 10, cumulativeDebtPaydown: 250 }], pick: 'entryEV' } }] },
          { label: t('Entry debt (€m)', 'Debito d’ingresso (€m)'), cells: [{ answer: 600, verify: { fn: 'simpleLbo', args: [{ entryEbitda: 100, entryMultiple: 10, debtMultiple: 6, feesAndExpenses: 20, ebitdaGrowth: 0.07, years: 5, exitMultiple: 10, cumulativeDebtPaydown: 250 }], pick: 'entryDebt' } }] },
          { label: t('Sponsor equity incl. fees (€m)', 'Equity dello sponsor incl. costi (€m)'), cells: [{ answer: 420, verify: { fn: 'simpleLbo', args: [{ entryEbitda: 100, entryMultiple: 10, debtMultiple: 6, feesAndExpenses: 20, ebitdaGrowth: 0.07, years: 5, exitMultiple: 10, cumulativeDebtPaydown: 250 }], pick: 'entryEquity' } }] },
          { label: t('Exit EBITDA (€m)', 'EBITDA di uscita (€m)'), cells: [{ answer: 140.26, tolerance: { abs: 0.01 }, verify: { fn: 'simpleLbo', args: [{ entryEbitda: 100, entryMultiple: 10, debtMultiple: 6, feesAndExpenses: 20, ebitdaGrowth: 0.07, years: 5, exitMultiple: 10, cumulativeDebtPaydown: 250 }], pick: 'exitEbitda' } }] },
          { label: t('Exit EV (€m)', 'EV di uscita (€m)'), cells: [{ answer: 1402.55, tolerance: { abs: 0.01 }, verify: { fn: 'simpleLbo', args: [{ entryEbitda: 100, entryMultiple: 10, debtMultiple: 6, feesAndExpenses: 20, ebitdaGrowth: 0.07, years: 5, exitMultiple: 10, cumulativeDebtPaydown: 250 }], pick: 'exitEV' } }] },
          { label: t('Exit debt (€m)', 'Debito di uscita (€m)'), cells: [{ answer: 350, verify: { fn: 'simpleLbo', args: [{ entryEbitda: 100, entryMultiple: 10, debtMultiple: 6, feesAndExpenses: 20, ebitdaGrowth: 0.07, years: 5, exitMultiple: 10, cumulativeDebtPaydown: 250 }], pick: 'exitDebt' } }] },
          { label: t('Exit equity (€m)', 'Equity di uscita (€m)'), cells: [{ answer: 1052.55, tolerance: { abs: 0.01 }, verify: { fn: 'simpleLbo', args: [{ entryEbitda: 100, entryMultiple: 10, debtMultiple: 6, feesAndExpenses: 20, ebitdaGrowth: 0.07, years: 5, exitMultiple: 10, cumulativeDebtPaydown: 250 }], pick: 'exitEquity' } }] },
          { label: t('MOIC (x)', 'MOIC (x)'), cells: [{ answer: 2.51, tolerance: { abs: 0.01 }, verify: { fn: 'simpleLbo', args: [{ entryEbitda: 100, entryMultiple: 10, debtMultiple: 6, feesAndExpenses: 20, ebitdaGrowth: 0.07, years: 5, exitMultiple: 10, cumulativeDebtPaydown: 250 }], pick: 'moic' } }] }
        ],
        explanation: t(
          'Entry EV 100 × 10 = 1,000; debt 600; equity 1,000 + 20 − 600 = 420. Exit EBITDA 100 × 1.07^5 = 140.26; exit EV 1,402.55; exit debt 600 − 250 = 350; exit equity 1,052.55. MOIC 1,052.55 / 420 = 2.51x; IRR = 2.506^(1/5) − 1 ≈ 20.2%. With no multiple expansion, returns come from EBITDA growth (+402.55 of EV) and deleveraging (+250). Forgetting fees (equity 400) would overstate MOIC at 2.63x.',
          'EV d’ingresso 100 × 10 = 1.000; debito 600; equity 1.000 + 20 − 600 = 420. EBITDA di uscita 100 × 1,07^5 = 140,26; EV di uscita 1.402,55; debito di uscita 600 − 250 = 350; equity di uscita 1.052,55. MOIC 1.052,55 / 420 = 2,51x; IRR = 2,506^(1/5) − 1 ≈ 20,2%. Senza espansione del multiplo, i rendimenti derivano dalla crescita dell’EBITDA (+402,55 di EV) e dal deleveraging (+250). Dimenticare i costi (equity 400) sovrastimerebbe il MOIC a 2,63x.'
        )
      },
      {
        id: 'mod-lbo-q2',
        kind: 'numeric',
        topic: 'sources-uses',
        difficulty: 2,
        objective: t('Solve for sponsor equity in sources and uses.', 'Ricavare l’equity dello sponsor da fonti e impieghi.'),
        prompt: t(
          'Uses: equity purchase price €650m, refinance debt €150m, fees €25m. Sources: term loan €350m, notes €120m, management rollover €30m, sponsor equity (plug). What is the sponsor equity (€m)?',
          'Impieghi: prezzo dell’equity €650m, rifinanziamento del debito €150m, costi €25m. Fonti: term loan €350m, notes €120m, reinvestimento del management €30m, equity dello sponsor (a saldo). Qual è l’equity dello sponsor (€m)?'
        ),
        answer: 325,
        unit: '€m',
        verify: { fn: 'sum', args: [650, 150, 25, -350, -120, -30] },
        explanation: t(
          'Total uses = 825. Other sources = 350 + 120 + 30 = 500. Sponsor equity = 825 − 500 = 325. Leaving out fees (300) or the management rollover (355) are the usual slips.',
          'Totale impieghi = 825. Altre fonti = 350 + 120 + 30 = 500. Equity dello sponsor = 825 − 500 = 325. Dimenticare i costi (300) o il reinvestimento del management (355) sono gli errori tipici.'
        )
      },
      {
        id: 'mod-lbo-q3',
        kind: 'mcq',
        topic: 'lbo-returns',
        difficulty: 2,
        objective: t('Convert MOIC to IRR with rules of thumb.', 'Convertire il MOIC in IRR con le regole pratiche.'),
        prompt: t('A sponsor doubles its money (2.0x) over 5 years with no interim distributions. Approximately what is the IRR?', 'Uno sponsor raddoppia il capitale (2,0x) in 5 anni senza distribuzioni intermedie. Qual è approssimativamente l’IRR?'),
        choices: [t('About 10%', 'Circa 10%'), t('About 15%', 'Circa 15%'), t('About 20%', 'Circa 20%'), t('About 26%', 'Circa 26%')],
        correct: 1,
        explanation: t(
          '2^(1/5) − 1 = 14.9%. 20% is the simple (non-compounded) annual gain of 100%/5; 26% is a 2.0x over 3 years.',
          '2^(1/5) − 1 = 14,9%. Il 20% è il guadagno annuo semplice (non composto) di 100%/5; il 26% corrisponde a 2,0x in 3 anni.'
        )
      },
      {
        id: 'mod-lbo-q4',
        kind: 'multi',
        topic: 'lbo-returns',
        difficulty: 2,
        objective: t('Identify the levers that increase LBO returns.', 'Identificare le leve che aumentano i rendimenti di un LBO.'),
        prompt: t('Holding everything else constant, which increase the sponsor’s IRR? Select all that apply.', 'A parità di altre condizioni, quali fattori aumentano l’IRR dello sponsor? Seleziona tutte le risposte corrette.'),
        choices: [
          t('Exiting one year earlier at the same equity value', 'Uscire un anno prima allo stesso valore dell’equity'),
          t('A higher entry multiple', 'Un multiplo d’ingresso più alto'),
          t('More debt at entry (if the company can service it)', 'Più debito all’ingresso (se l’azienda è in grado di sostenerlo)'),
          t('Higher free cash flow used to repay debt', 'Maggiore free cash flow destinato al rimborso del debito'),
          t('Higher transaction fees', 'Costi di transazione più alti')
        ],
        correct: [0, 2, 3],
        explanation: t(
          'An earlier exit compresses the time; more debt reduces the equity cheque; more debt paydown raises exit equity. A higher entry multiple and higher fees increase the equity invested for the same exit value.',
          'Un’uscita anticipata riduce la durata; più debito riduce l’equity investito; più rimborsi aumentano l’equity di uscita. Un multiplo d’ingresso più alto e costi più alti aumentano l’equity investito a parità di valore di uscita.'
        )
      }
    ],
    flashcards: [
      { id: 'fc-mod-lbo-1', topic: 'lbo-returns', front: t('Three sources of LBO returns?', 'Tre fonti di rendimento di un LBO?'), back: t('EBITDA growth, multiple expansion, deleveraging (debt paydown).', 'Crescita dell’EBITDA, espansione del multiplo, deleveraging (rimborso del debito).') },
      { id: 'fc-mod-lbo-2', topic: 'lbo-returns', front: t('IRR from MOIC (no interim flows)?', 'IRR dal MOIC (senza flussi intermedi)?'), back: t('IRR = MOIC^(1/years) − 1. 2x/5y ≈ 15%; 2x/3y ≈ 26%; 3x/5y ≈ 25%.', 'IRR = MOIC^(1/anni) − 1. 2x/5a ≈ 15%; 2x/3a ≈ 26%; 3x/5a ≈ 25%.') },
      { id: 'fc-mod-lbo-3', topic: 'sources-uses', front: t('Plug in an LBO sources & uses?', 'Voce a saldo in fonti e impieghi di un LBO?'), back: t('Sponsor equity: debt is sized on leverage capacity, equity fills the gap.', 'L’equity dello sponsor: il debito si dimensiona sulla capacità di leva, l’equity copre il resto.') },
      { id: 'fc-mod-lbo-4', topic: 'lbo-returns', front: t('Exit equity value?', 'Equity value di uscita?'), back: t('Exit multiple × exit EBITDA − net debt at exit (debt less accumulated cash).', 'Multiplo di uscita × EBITDA di uscita − debito netto di uscita (debito meno cassa accumulata).') }
    ]
  },

  /* ============================ FMOD4 — MODEL QUALITY ============================ */
  {
    id: 'mod-scenarios',
    academyId: 'modelling',
    moduleId: 'FMOD4',
    mode: 'deep',
    minutes: 12,
    difficulty: 2,
    reviewed: '2026-10',
    objective: t(
      'Build scenario switches and sensitivity (data) tables, and know when to use each to show the range of outcomes.',
      'Costruire switch di scenario e tabelle di sensitività (tabelle dati) e sapere quando usare ciascuno per mostrare l’intervallo dei risultati.'
    ),
    screens: [
      {
        type: 'intuition',
        title: t('Every forecast is wrong — show by how much', 'Ogni previsione è sbagliata — mostra di quanto'),
        body: t(
          'Nobody knows next year’s revenue growth. A credible model does not pretend to: it shows what happens if things go better or worse, and **which assumptions matter most**.\n\n**Scenarios** change a whole story at once (recession: lower volumes, lower prices, higher costs). **Sensitivities** move one or two inputs at a time to show how exposed the output is to each. Decision makers need both.',
          'Nessuno conosce la crescita dei ricavi del prossimo anno. Un modello credibile non finge di saperlo: mostra che cosa succede se le cose vanno meglio o peggio e **quali ipotesi contano di più**.\n\nGli **scenari** cambiano un’intera storia in un colpo solo (recessione: volumi più bassi, prezzi più bassi, costi più alti). Le **sensitività** muovono uno o due input alla volta per mostrare quanto l’output è esposto a ciascuno. Chi decide ha bisogno di entrambi.'
        )
      },
      {
        type: 'technical',
        title: t('Scenario switches', 'Gli switch di scenario'),
        body: t(
          '- Lay out each key assumption in rows for **Base, Upside, Downside** (and often **Management case**).\n- A single **switch cell** (1, 2, 3…) on the cover or inputs sheet selects the case.\n- A **live case** row picks the active assumption with `CHOOSE` or `INDEX`; every calculation references **only** the live row.\n- Show the active scenario name on every output page so nobody prints the downside thinking it is the base case.\n\nAvoid OFFSET for switches (volatile, hard to audit), and never overwrite base-case inputs to "run" a scenario.',
          '- Disponi ogni ipotesi chiave su righe per **Base, Upside, Downside** (e spesso **Management case**).\n- Una sola **cella switch** (1, 2, 3…) nella copertina o nel foglio input seleziona il caso.\n- Una riga **caso attivo** sceglie l’ipotesi attiva con `CHOOSE` (SCEGLI) o `INDEX`; tutti i calcoli fanno riferimento **solo** alla riga attiva.\n- Mostra il nome dello scenario attivo in ogni pagina di output, così nessuno stampa il downside pensando che sia il base case.\n\nEvita OFFSET per gli switch (volatile, difficile da verificare) e non sovrascrivere mai gli input del base case per "far girare" uno scenario.'
        )
      },
      {
        type: 'technical',
        title: t('Data tables', 'Le tabelle dati'),
        body: t(
          'Excel’s **Data Table** (Data › What-If Analysis › Data Table) recalculates the model for each combination of one or two inputs.\n\n- Put the output reference in the top-left corner, input values along the row and column, then point to the **row and column input cells**.\n- The input cells must be on the **same sheet** as the table — link the model’s inputs to cells there if necessary.\n- Data tables recalculate the whole model for every cell, so large ones slow Excel down: many analysts set calculation to **Automatic except for data tables** and press F9 when needed.\n- **Tornado charts** rank inputs by how much a ±x% change moves the output.',
          'La **tabella dati** di Excel (Dati › Analisi di simulazione › Tabella dati) ricalcola il modello per ogni combinazione di uno o due input.\n\n- Metti il riferimento all’output nell’angolo in alto a sinistra, i valori degli input lungo riga e colonna, poi indica le **celle di input di riga e di colonna**.\n- Le celle di input devono essere nello **stesso foglio** della tabella — se serve, collega lì gli input del modello.\n- Le tabelle dati ricalcolano tutto il modello per ogni cella, quindi quelle grandi rallentano Excel: molti analisti impostano il calcolo su **Automatico tranne tabelle dati** e premono F9 quando serve.\n- I **grafici tornado** ordinano gli input in base a quanto una variazione di ±x% muove l’output.'
        )
      },
      {
        type: 'formula',
        formulas: [
          { name: t('Live case with CHOOSE', 'Caso attivo con CHOOSE'), expr: '=CHOOSE(Switch, Base, Upside, Downside)' },
          { name: t('Live case with INDEX', 'Caso attivo con INDEX'), expr: '=INDEX(Base:Downside, Switch)' },
          { name: t('Two-variable data table (as shown by Excel)', 'Tabella dati a due variabili (come la mostra Excel)'), expr: '{=TABLE(row_input_cell, column_input_cell)}' },
          { name: t('Probability-weighted value', 'Valore ponderato per le probabilità'), expr: 'Expected value = Σ p_i × Value_i' }
        ]
      },
      {
        type: 'example',
        title: t('A scenario block', 'Un blocco di scenari'),
        body: t(
          'Xi S.p.A.: the switch is set to 3, so the live row picks the downside assumptions, and every page shows "Downside case".',
          'Xi S.p.A.: lo switch è impostato su 3, quindi la riga attiva prende le ipotesi del downside e ogni pagina riporta "Downside case".'
        ),
        table: {
          headers: [t('Assumption', 'Ipotesi'), t('1 Base', '1 Base'), t('2 Upside', '2 Upside'), t('3 Downside', '3 Downside'), t('Live (switch = 3)', 'Attivo (switch = 3)')],
          rows: [
            [t('Revenue growth', 'Crescita ricavi'), '5.0%', '8.0%', '2.0%', '2.0%'],
            [t('EBITDA margin', 'Margine EBITDA'), '18.0%', '20.0%', '15.0%', '15.0%'],
            [t('CapEx % revenue', 'CapEx % ricavi'), '6.0%', '6.5%', '5.0%', '5.0%'],
            [t('DSO (days)', 'DSO (giorni)'), '60', '55', '70', '70']
          ]
        }
      },
      {
        type: 'realworld',
        body: t(
          'In leveraged finance, lenders size debt on a **downside case**, not the sponsor case — they want to know the company survives a bad year. In sell-side M&A, the management case drives the information memorandum, while bankers build a more conservative case for valuation. Fairness opinions and pitch books present DCF outputs as **sensitivity grids** (WACC × perpetual growth, WACC × exit multiple), and LBO pages show IRR grids for entry × exit multiples.',
          'Nel leveraged finance i finanziatori dimensionano il debito su un **downside case**, non sullo sponsor case — vogliono sapere che l’azienda sopravvive a un anno difficile. Nelle vendite M&A il management case alimenta l’information memorandum, mentre i banker costruiscono un caso più prudente per la valutazione. Fairness opinion e pitch book presentano gli output del DCF come **griglie di sensitività** (WACC × crescita perpetua, WACC × multiplo di uscita) e le pagine LBO mostrano griglie di IRR per multipli d’ingresso × uscita.'
        )
      },
      { type: 'exercise', questionId: 'mod-scen-q1' },
      { type: 'exercise', questionId: 'mod-scen-q2' },
      { type: 'exercise', questionId: 'mod-scen-q3' },
      {
        type: 'interview',
        question: t('What is the difference between a scenario analysis and a sensitivity analysis?', 'Qual è la differenza tra analisi di scenario e analisi di sensitività?'),
        answer: t(
          'A sensitivity analysis changes one or two inputs while holding everything else constant — for example a WACC versus terminal growth grid — to show how exposed the output is to each assumption. A scenario analysis changes a consistent set of assumptions together to describe a coherent state of the world, such as a recession with lower volumes, pricing pressure and slower collections. Sensitivities tell you which inputs matter; scenarios tell you what happens if a specific story plays out.',
          'L’analisi di sensitività cambia uno o due input lasciando invariato tutto il resto — ad esempio una griglia WACC × crescita terminale — per mostrare quanto l’output è esposto a ciascuna ipotesi. L’analisi di scenario cambia insieme un insieme coerente di ipotesi per descrivere uno stato del mondo, come una recessione con volumi più bassi, pressione sui prezzi e incassi più lenti. Le sensitività dicono quali input contano; gli scenari dicono che cosa succede se si realizza una storia precisa.'
        )
      },
      {
        type: 'mistakes',
        items: [
          t('Hard-coding a scenario into calculations instead of routing through the live row.', 'Inserire uno scenario direttamente nei calcoli invece di passare dalla riga attiva.'),
          t('Inconsistent scenarios: a downside with lower revenue but unchanged margins and working capital.', 'Scenari incoerenti: un downside con ricavi più bassi ma margini e circolante invariati.'),
          t('Data table input cells on a different sheet (Excel rejects them).', 'Celle di input della tabella dati su un altro foglio (Excel le rifiuta).'),
          t('Sending outputs without stating which scenario is active.', 'Inviare output senza indicare quale scenario è attivo.')
        ]
      },
      {
        type: 'summary',
        items: [
          t('Scenarios = coherent sets of assumptions; sensitivities = one or two inputs at a time.', 'Scenari = insiemi coerenti di ipotesi; sensitività = uno o due input alla volta.'),
          t('One switch cell, a live row with CHOOSE/INDEX, calculations linked only to the live row.', 'Una cella switch, una riga attiva con CHOOSE/INDEX, calcoli collegati solo alla riga attiva.'),
          t('Data tables: input cells on the same sheet; consider "Automatic except for data tables".', 'Tabelle dati: celle di input nello stesso foglio; valuta "Automatico tranne tabelle dati".'),
          t('Lenders size on the downside case; valuations are presented as ranges.', 'I finanziatori dimensionano sul downside; le valutazioni si presentano come intervalli.')
        ]
      }
    ],
    questions: [
      {
        id: 'mod-scen-q1',
        kind: 'grid',
        topic: 'sensitivity-analysis',
        difficulty: 2,
        objective: t('Fill a two-variable sensitivity table for a growing perpetuity.', 'Compilare una tabella di sensitività a due variabili per una rendita perpetua crescente.'),
        prompt: t(
          'Omicron S.p.A.’s value = next year’s FCF of €100m / (WACC − g). Fill in the sensitivity table (€m, 2 decimals).',
          'Il valore di Omicron S.p.A. = FCF del prossimo anno di €100m / (WACC − g). Completa la tabella di sensitività (€m, 2 decimali).'
        ),
        unit: '€m',
        columns: [t('WACC \\ g', 'WACC \\ g'), t('g = 2.0%', 'g = 2,0%'), t('g = 3.0%', 'g = 3,0%')],
        rows: [
          {
            label: t('WACC 9.0%', 'WACC 9,0%'),
            cells: [
              { answer: 1428.57, tolerance: { abs: 0.01 }, verify: { fn: 'pvGrowingPerpetuity', args: [100, 0.09, 0.02] } },
              { answer: 1666.67, tolerance: { abs: 0.01 }, verify: { fn: 'pvGrowingPerpetuity', args: [100, 0.09, 0.03] } }
            ]
          },
          {
            label: t('WACC 10.0%', 'WACC 10,0%'),
            cells: [
              { answer: 1250, tolerance: { abs: 0.01 }, verify: { fn: 'pvGrowingPerpetuity', args: [100, 0.1, 0.02] } },
              { answer: 1428.57, tolerance: { abs: 0.01 }, verify: { fn: 'pvGrowingPerpetuity', args: [100, 0.1, 0.03] } }
            ]
          },
          {
            label: t('WACC 11.0%', 'WACC 11,0%'),
            cells: [
              { answer: 1111.11, tolerance: { abs: 0.01 }, verify: { fn: 'pvGrowingPerpetuity', args: [100, 0.11, 0.02] } },
              { answer: 1250, tolerance: { abs: 0.01 }, verify: { fn: 'pvGrowingPerpetuity', args: [100, 0.11, 0.03] } }
            ]
          }
        ],
        explanation: t(
          'Value = 100 / (WACC − g): 100/0.07 = 1,428.57; 100/0.06 = 1,666.67; 100/0.08 = 1,250.00; 100/0.07 = 1,428.57; 100/0.09 = 1,111.11; 100/0.08 = 1,250.00. Note the diagonal: equal spreads give equal values, and a 1-point move in the spread changes value by roughly 11–17% — why terminal assumptions dominate a DCF.',
          'Valore = 100 / (WACC − g): 100/0,07 = 1.428,57; 100/0,06 = 1.666,67; 100/0,08 = 1.250,00; 100/0,07 = 1.428,57; 100/0,09 = 1.111,11; 100/0,08 = 1.250,00. Nota la diagonale: differenziali uguali danno valori uguali, e una variazione di 1 punto del differenziale cambia il valore di circa l’11–17% — ecco perché le ipotesi terminali dominano un DCF.'
        )
      },
      {
        id: 'mod-scen-q2',
        kind: 'numeric',
        topic: 'scenario-analysis',
        difficulty: 1,
        objective: t('Evaluate a CHOOSE-based scenario switch.', 'Calcolare uno switch di scenario basato su CHOOSE.'),
        prompt: t(
          'Growth (live) = `CHOOSE(Switch, 5%, 8%, 2%)` and the switch is 3. Last year’s revenue is €400m. What is this year’s revenue (€m)?',
          'Crescita (attiva) = `CHOOSE(Switch; 5%; 8%; 2%)` e lo switch è 3. I ricavi dell’anno scorso sono €400m. Quali sono i ricavi di quest’anno (€m)?'
        ),
        answer: 408,
        unit: '€m',
        verify: { fn: 'product', args: [400, 1.02] },
        explanation: t(
          'CHOOSE returns the third value, 2%: 400 × 1.02 = 408. CHOOSE is 1-indexed, so switch 3 is not 8% (that would be 432).',
          'CHOOSE restituisce il terzo valore, 2%: 400 × 1,02 = 408. CHOOSE parte da 1, quindi lo switch 3 non è l’8% (che darebbe 432).'
        )
      },
      {
        id: 'mod-scen-q3',
        kind: 'mcq',
        topic: 'sensitivity-analysis',
        difficulty: 2,
        objective: t('Know the mechanics and limits of Excel data tables.', 'Conoscere il funzionamento e i limiti delle tabelle dati di Excel.'),
        prompt: t(
          'You build a WACC × g data table on the "Output" sheet, pointing the input cells to the WACC and g cells on the "Inputs" sheet. Excel rejects it. Why?',
          'Costruisci una tabella dati WACC × g nel foglio "Output", indicando come celle di input quelle di WACC e g nel foglio "Input". Excel la rifiuta. Perché?'
        ),
        choices: [
          t('Data tables only work with one variable', 'Le tabelle dati funzionano solo con una variabile'),
          t('Row and column input cells must be on the same sheet as the data table', 'Le celle di input di riga e colonna devono essere nello stesso foglio della tabella dati'),
          t('Data tables cannot reference percentages', 'Le tabelle dati non possono fare riferimento a percentuali'),
          t('Iterative calculation must be enabled first', 'Prima bisogna attivare il calcolo iterativo')
        ],
        correct: 1,
        explanation: t(
          'Excel requires the input cells to sit on the same worksheet as the table. Fix: place the WACC and g inputs on the Output sheet (or build the table on the Inputs sheet) and link the model to them. Two-variable tables are supported, and iterative calculation is unrelated.',
          'Excel richiede che le celle di input siano nello stesso foglio della tabella. Soluzione: metti gli input di WACC e g nel foglio Output (o costruisci la tabella nel foglio Input) e collega il modello a quelle celle. Le tabelle a due variabili sono supportate e il calcolo iterativo non c’entra.'
        )
      },
      {
        id: 'mod-scen-q4',
        kind: 'numeric',
        topic: 'scenario-analysis',
        difficulty: 2,
        objective: t('Compute a probability-weighted value across scenarios.', 'Calcolare un valore ponderato per le probabilità tra scenari.'),
        prompt: t(
          'Equity value: base case €1,000m (50% probability), upside €1,300m (25%), downside €600m (25%). What is the probability-weighted equity value (€m)?',
          'Equity value: base case €1.000m (probabilità 50%), upside €1.300m (25%), downside €600m (25%). Qual è l’equity value ponderato per le probabilità (€m)?'
        ),
        answer: 975,
        unit: '€m',
        verify: { fn: 'sum', args: [500, 325, 150] },
        explanation: t(
          '0.5 × 1,000 + 0.25 × 1,300 + 0.25 × 600 = 500 + 325 + 150 = 975. Below the base case because the downside is further from base (−400) than the upside (+300) — an asymmetric risk profile a single-point model hides.',
          '0,5 × 1.000 + 0,25 × 1.300 + 0,25 × 600 = 500 + 325 + 150 = 975. Inferiore al base case perché il downside è più lontano dal base (−400) dell’upside (+300) — un profilo di rischio asimmetrico che un modello a punto singolo nasconde.'
        )
      },
      {
        id: 'mod-scen-q5',
        kind: 'multi',
        topic: 'scenario-analysis',
        difficulty: 2,
        objective: t('Recognise good practice in scenario design.', 'Riconoscere le buone pratiche nella costruzione degli scenari.'),
        prompt: t('Which are good practice? Select all that apply.', 'Quali sono buone pratiche? Seleziona tutte le risposte corrette.'),
        choices: [
          t('Linking calculations to a single live-case row driven by a switch', 'Collegare i calcoli a un’unica riga del caso attivo guidata da uno switch'),
          t('Showing the active scenario name on every output page', 'Mostrare il nome dello scenario attivo in ogni pagina di output'),
          t('Running the downside by overwriting the base-case inputs', 'Far girare il downside sovrascrivendo gli input del base case'),
          t('Moving related assumptions together in the downside (volume, price, DSO)', 'Muovere insieme le ipotesi collegate nel downside (volumi, prezzi, DSO)'),
          t('Using OFFSET for the switch because it is the most flexible', 'Usare OFFSET per lo switch perché è il più flessibile')
        ],
        correct: [0, 1, 3],
        explanation: t(
          'A single live row, a visible scenario label and internally consistent scenarios are best practice. Overwriting base inputs destroys the base case; OFFSET is volatile and hard to audit — CHOOSE or INDEX do the job.',
          'Un’unica riga attiva, un’etichetta di scenario visibile e scenari coerenti sono best practice. Sovrascrivere gli input del base case lo distrugge; OFFSET è volatile e difficile da verificare — CHOOSE o INDEX bastano.'
        )
      }
    ],
    flashcards: [
      { id: 'fc-mod-scen-1', topic: 'scenario-analysis', front: t('Scenario vs sensitivity?', 'Scenario vs sensitività?'), back: t('Scenario: a coherent set of assumptions changed together. Sensitivity: one or two inputs changed, all else equal.', 'Scenario: un insieme coerente di ipotesi cambiate insieme. Sensitività: uno o due input cambiati, a parità di tutto il resto.') },
      { id: 'fc-mod-scen-2', topic: 'scenario-analysis', front: t('Standard scenario switch formula?', 'Formula standard dello switch di scenario?'), back: t('=CHOOSE(Switch, Base, Upside, Downside) or =INDEX(range, Switch).', '=CHOOSE(Switch; Base; Upside; Downside) oppure =INDEX(intervallo; Switch).') },
      { id: 'fc-mod-scen-3', topic: 'sensitivity-analysis', front: t('Key constraint of Excel data tables?', 'Vincolo principale delle tabelle dati di Excel?'), back: t('Row/column input cells must be on the same sheet as the table; they recalculate the whole model, so they are slow.', 'Le celle di input di riga/colonna devono essere nello stesso foglio della tabella; ricalcolano tutto il modello, quindi sono lente.') },
      { id: 'fc-mod-scen-4', topic: 'sensitivity-analysis', front: t('What is a tornado chart?', 'Che cos’è un grafico tornado?'), back: t('A bar chart ranking inputs by how much a given change in each moves the output.', 'Un grafico a barre che ordina gli input in base a quanto una data variazione di ciascuno muove l’output.') }
    ],
    sources: [{ label: 'Microsoft Support — Calculate multiple results by using a data table' }]
  },
  {
    id: 'mod-auditing',
    academyId: 'modelling',
    moduleId: 'FMOD4',
    mode: 'deep',
    minutes: 12,
    difficulty: 2,
    reviewed: '2026-10',
    objective: t(
      'Build error checks into a model, diagnose imbalances quickly, and recognise the most common modelling errors.',
      'Inserire controlli di errore in un modello, diagnosticare rapidamente gli squilibri e riconoscere gli errori di modellazione più comuni.'
    ),
    screens: [
      {
        type: 'intuition',
        title: t('Every model has errors', 'Ogni modello ha errori'),
        body: t(
          'The question is not whether your model contains mistakes, but whether **you** find them before your VP, the client or the buyer’s advisers do.\n\nGood modellers build the alarm system as they go: checks that turn red the moment something stops tying, plus a routine for hunting the errors checks cannot catch — hard-codes, wrong units, a formula pointing at the wrong year.',
          'La domanda non è se il tuo modello contiene errori, ma se **tu** li trovi prima del tuo VP, del cliente o degli advisor del compratore.\n\nI buoni modellisti costruiscono l’allarme strada facendo: controlli che diventano rossi appena qualcosa smette di quadrare, più una routine per scovare gli errori che i controlli non intercettano — valori fissi, unità sbagliate, una formula che punta all’anno sbagliato.'
        )
      },
      {
        type: 'technical',
        title: t('Checks to build in', 'I controlli da inserire'),
        body: t(
          '- **Balance check**: total assets − (liabilities + equity) = 0 in every period.\n- **Cash check**: cash flow statement closing cash = balance sheet cash.\n- **Debt checks**: no negative balances; revolver ≤ facility size; cash ≥ minimum.\n- **Sources = uses** in transaction models.\n- **Historical tie-out**: historical figures equal the reported accounts.\n- **Sum checks**: segments add up to the group total.\n\nRoll every check into one **master check** on the cover, with conditional formatting. Use a small tolerance (e.g. ABS(x) < 0.001) to avoid false alarms from floating-point rounding.',
          '- **Controllo di quadratura**: totale attivo − (passività + patrimonio netto) = 0 in ogni periodo.\n- **Controllo di cassa**: cassa finale del rendiconto = cassa dello stato patrimoniale.\n- **Controlli sul debito**: nessun saldo negativo; revolving ≤ importo della linea; cassa ≥ minimo.\n- **Fonti = impieghi** nei modelli di transazione.\n- **Riconciliazione degli storici**: i dati storici coincidono con il bilancio pubblicato.\n- **Controlli di somma**: i segmenti sommano al totale di gruppo.\n\nRaccogli tutti i controlli in un **controllo master** in copertina, con formattazione condizionale. Usa una piccola tolleranza (es. ABS(x) < 0,001) per evitare falsi allarmi dovuti agli arrotondamenti in virgola mobile.'
        )
      },
      {
        type: 'technical',
        title: t('The classic errors', 'Gli errori classici'),
        body: t(
          '- **Unintended circular references** (e.g. a fee calculated on a total that includes the fee).\n- **Sign flips**: CapEx or ΔNWC added instead of subtracted.\n- **Mixing units**: €k with €m, % with percentage points, quarterly with annual figures.\n- **Double counting**: D&A deducted inside COGS and again separately; cash included in NWC and in net debt.\n- **Hard-codes** inside formulas or typed over formulas.\n- **Wrong period anchoring**: an opening balance linked to the same year’s closing balance instead of the prior year, or a `$` missing so a reference slides when copied.\n- **Broken ranges**: a SUM that skips newly inserted rows.',
          '- **Riferimenti circolari non voluti** (es. una commissione calcolata su un totale che la include).\n- **Inversioni di segno**: CapEx o ΔNWC sommati invece che sottratti.\n- **Unità mischiate**: €k con €m, % con punti percentuali, dati trimestrali con annuali.\n- **Doppi conteggi**: ammortamenti dedotti nel costo del venduto e di nuovo separatamente; cassa inclusa nel circolante e nel debito netto.\n- **Valori fissi** dentro le formule o digitati sopra le formule.\n- **Ancoraggio al periodo sbagliato**: un saldo iniziale collegato al saldo finale dello stesso anno invece che dell’anno precedente, o un `$` mancante che fa slittare il riferimento quando si copia.\n- **Intervalli rotti**: una SOMMA che salta le righe appena inserite.'
        )
      },
      {
        type: 'formula',
        formulas: [
          { name: t('Balance check per period', 'Controllo di quadratura per periodo'), expr: '=ROUND(Total assets − Total liabilities − Equity, 3)' },
          { name: t('Master check', 'Controllo master'), expr: '=IF(SUMPRODUCT(ABS(check_range)) > 0.001, "ERROR", "OK")' },
          { name: t('Sign-flip signature', 'Firma dell’inversione di segno'), expr: 'Imbalance = 2 × amount entered with the wrong sign' }
        ],
        note: t(
          'Diagnosis: an imbalance equal to an item suggests a missing link; twice an item suggests a sign flip; an imbalance growing by the same amount each year suggests a recurring flow not linked to the balance sheet.',
          'Diagnosi: uno squilibrio pari a una voce fa pensare a un collegamento mancante; pari al doppio di una voce, a un’inversione di segno; uno squilibrio che cresce dello stesso importo ogni anno, a un flusso ricorrente non collegato allo stato patrimoniale.'
        )
      },
      {
        type: 'example',
        title: t('Reading the imbalance', 'Leggere lo squilibrio'),
        body: t('Pi S.p.A.’s balance check (assets − liabilities − equity, €m) by year, and what it tells you.', 'Il controllo di quadratura di Pi S.p.A. (attivo − passivo − PN, €m) per anno, e che cosa ti dice.'),
        table: {
          headers: [t('Pattern', 'Andamento'), ...yrs('2027E', '2028E', '2029E'), t('Likely cause', 'Causa probabile')],
          rows: [
            [t('Case A', 'Caso A'), '30', '60', '90', t('Recurring 30/yr flow not linked (e.g. D&A not reducing PP&E)', 'Flusso ricorrente di 30/anno non collegato (es. ammortamenti che non riducono le immobilizzazioni)')],
            [t('Case B', 'Caso B'), '50', '50', '50', t('One-off error in the first projection year or opening balance', 'Errore una tantum nel primo anno di proiezione o nel saldo iniziale')],
            [t('Case C', 'Caso C'), '24', '26', '28', t('A balance sheet liability entered with the wrong sign: 2 × a balance of 12, 13, 14 (a flipped flow such as ΔNWC would accumulate through cash)', 'Una passività di stato patrimoniale con il segno sbagliato: 2 × un saldo di 12, 13, 14 (un flusso con segno invertito, come la ΔNWC, si cumulerebbe tramite la cassa)')]
          ]
        }
      },
      {
        type: 'technical',
        title: t('Auditing tools', 'Gli strumenti di revisione'),
        body: t(
          '- **Trace precedents / dependents** (Formulas tab; Alt, M, P and Alt, M, D) and **Ctrl+[** to jump to a formula’s sources.\n- **Evaluate Formula** (Formulas tab) steps through a long formula; in the formula bar, select part of a formula and press **F9** to see its value (then Esc, so you do not paste the result in as a hard-code).\n- **Go To Special › Constants** (F5) highlights typed numbers in calculation areas.\n- **Ctrl+`** shows all formulas, making inconsistent rows easy to spot.\n- **Watch Window** keeps key outputs visible while you change inputs on another sheet.\n\nThen **flip through the outputs**: do the numbers make sense? Margins, growth, leverage, returns.',
          '- **Traccia precedenti / dipendenti** (scheda Formule; Alt, M, P e Alt, M, D) e **Ctrl+[** per saltare alle origini di una formula.\n- **Valuta formula** (scheda Formule) esegue passo passo una formula lunga; nella barra della formula, seleziona una parte e premi **F9** per vederne il valore (poi Esc, per non incollare il risultato come valore fisso).\n- **Vai a › Speciale › Costanti** (F5) evidenzia i numeri digitati nelle aree di calcolo.\n- **Ctrl+`** mostra tutte le formule, rendendo evidenti le righe incoerenti.\n- La **Finestra controllo** tiene visibili gli output chiave mentre cambi gli input in un altro foglio.\n\nPoi **sfoglia gli output**: i numeri hanno senso? Margini, crescita, leva, rendimenti.'
        )
      },
      {
        type: 'realworld',
        body: t(
          'In banks, an associate or VP reviews every model before it leaves the team, usually starting from the outputs and the checks page and then spot-checking key formulas. In project finance and infrastructure, lenders commonly require an **independent model audit** by a specialist firm before financial close. A single error in a live deal — a share count off by a factor of 1,000, a sign flip in net debt — can move the price by millions, which is why "check your work" is the most common feedback junior analysts receive.',
          'In banca un associate o un VP rivede ogni modello prima che esca dal team, di solito partendo dagli output e dalla pagina dei controlli e poi verificando a campione le formule chiave. Nel project finance e nelle infrastrutture i finanziatori richiedono di norma un **audit indipendente del modello** da parte di una società specializzata prima del financial close. Un solo errore in un deal reale — un numero di azioni sbagliato di un fattore 1.000, un segno invertito nel debito netto — può spostare il prezzo di milioni: per questo "ricontrolla il lavoro" è il feedback più frequente per gli analisti junior.'
        )
      },
      { type: 'exercise', questionId: 'mod-audit-q1' },
      { type: 'exercise', questionId: 'mod-audit-q2' },
      { type: 'exercise', questionId: 'mod-audit-q3' },
      {
        type: 'interview',
        question: t('Your balance sheet does not balance. How do you fix it?', 'Il tuo stato patrimoniale non quadra. Come lo sistemi?'),
        answer: t(
          'First I find the first period where it breaks — if historicals balance and the first projection year does not, the error is in a new link. Then I look at the size of the difference: if it equals a specific item, that item is probably missing from one statement; if it is twice an item, a sign is flipped; if it grows every year, a recurring flow is not linked. I check that every balance sheet line has a matching cash flow line, that cash comes from the cash flow statement, and that net income and dividends flow to retained earnings. I never plug the difference.',
          'Prima trovo il primo periodo in cui si rompe — se gli storici quadrano e il primo anno di proiezione no, l’errore è in un nuovo collegamento. Poi guardo l’entità della differenza: se è pari a una voce precisa, probabilmente quella voce manca in un prospetto; se è il doppio, c’è un segno invertito; se cresce ogni anno, un flusso ricorrente non è collegato. Verifico che ogni riga patrimoniale abbia una riga corrispondente nel rendiconto, che la cassa arrivi dal rendiconto e che utile e dividendi confluiscano negli utili a nuovo. Non uso mai un plug.'
        )
      },
      {
        type: 'mistakes',
        items: [
          t('Fixing an imbalance with a plug instead of finding the cause.', 'Correggere uno squilibrio con un plug invece di trovarne la causa.'),
          t('Pasting an F9-evaluated value into a formula, creating a hidden hard-code.', 'Incollare in una formula un valore valutato con F9, creando un valore fisso nascosto.'),
          t('Checks that exist but are not aggregated, so nobody notices they turned red.', 'Controlli che esistono ma non sono aggregati, così nessuno si accorge che sono diventati rossi.'),
          t('Trusting the checks alone: unit and logic errors can balance perfectly.', 'Affidarsi solo ai controlli: errori di unità e di logica possono quadrare perfettamente.')
        ]
      },
      {
        type: 'summary',
        items: [
          t('Build balance, cash, debt and sources-and-uses checks; aggregate them into a master check.', 'Inserisci controlli di quadratura, cassa, debito e fonti-impieghi; aggregali in un controllo master.'),
          t('Imbalance = item → missing link; 2 × item → sign flip; growing → recurring flow.', 'Squilibrio = voce → collegamento mancante; 2 × voce → segno invertito; crescente → flusso ricorrente.'),
          t('Watch for circularity, sign flips, mixed units, double counting, hard-codes, wrong period anchoring.', 'Attenzione a circolarità, segni invertiti, unità mischiate, doppi conteggi, valori fissi, ancoraggio al periodo sbagliato.'),
          t('Use trace precedents, Evaluate Formula, Go To Special and a final sense-check of outputs.', 'Usa traccia precedenti, Valuta formula, Vai a speciale e una verifica finale di buon senso sugli output.')
        ]
      }
    ],
    questions: [
      {
        id: 'mod-audit-q1',
        kind: 'grid',
        topic: 'model-auditing',
        difficulty: 2,
        objective: t('Correct sign errors in a cash flow statement and quantify their impact.', 'Correggere errori di segno in un rendiconto finanziario e quantificarne l’impatto.'),
        prompt: t(
          'A junior built this cash flow (€m). NWC increased by 10 and CapEx was 40, but both were entered as positives. Fill in the corrected column and the cash overstatement.',
          'Un junior ha costruito questo rendiconto (€m). Il circolante è aumentato di 10 e il CapEx è stato 40, ma entrambi sono stati inseriti con segno positivo. Completa la colonna corretta e la sovrastima della cassa.'
        ),
        unit: '€m',
        columns: [t('€m', '€m'), t('As built', 'Come costruito'), t('Corrected', 'Corretto')],
        rows: [
          { label: t('Net income', 'Utile netto'), cells: [80, 80] },
          { label: t('D&A', 'Ammortamenti'), cells: [30, 30] },
          { label: t('Change in NWC', 'Variazione del circolante'), cells: [10, { answer: -10, verify: { fn: 'diff', args: [0, 10] } }] },
          { label: t('CapEx', 'CapEx'), cells: [40, { answer: -40, verify: { fn: 'diff', args: [0, 40] } }] },
          { label: t('Net change in cash', 'Variazione netta della cassa'), cells: [160, { answer: 60, verify: { fn: 'sum', args: [80, 30, -10, -40] } }] },
          { label: t('Cash overstatement (as built − corrected)', 'Sovrastima della cassa (costruito − corretto)'), cells: ['', { answer: 100, verify: { fn: 'diff', args: [160, 60] } }] }
        ],
        explanation: t(
          'An increase in NWC and CapEx are both uses of cash: −10 and −40. Corrected net change = 80 + 30 − 10 − 40 = 60 versus 160 as built. The overstatement of 100 equals 2 × (10 + 40): the classic signature of sign flips — the balance check would be out by exactly that amount.',
          'L’aumento del circolante e il CapEx sono entrambi impieghi di cassa: −10 e −40. Variazione corretta = 80 + 30 − 10 − 40 = 60 contro 160 nella versione originale. La sovrastima di 100 è pari a 2 × (10 + 40): la firma classica delle inversioni di segno — il controllo di quadratura sarebbe fuori esattamente di questo importo.'
        )
      },
      {
        id: 'mod-audit-q2',
        kind: 'mcq',
        topic: 'model-auditing',
        difficulty: 2,
        objective: t('Diagnose a balance sheet imbalance from its pattern.', 'Diagnosticare uno squilibrio patrimoniale dal suo andamento.'),
        prompt: t(
          'Historicals balance. The balance check shows 25 in 2027E, 50 in 2028E, 75 in 2029E. What is the most likely cause?',
          'Gli storici quadrano. Il controllo di quadratura mostra 25 nel 2027E, 50 nel 2028E, 75 nel 2029E. Qual è la causa più probabile?'
        ),
        choices: [
          t('A wrong opening balance in 2026A', 'Un saldo iniziale errato nel 2026A'),
          t('An annual flow of about 25 that hits one statement but not the other', 'Un flusso annuo di circa 25 che tocca un prospetto ma non l’altro'),
          t('Rounding differences', 'Differenze di arrotondamento'),
          t('A circular reference', 'Un riferimento circolare')
        ],
        correct: 1,
        explanation: t(
          'An imbalance that grows by the same amount each year points to a recurring item (e.g. dividends of 25 paid in cash but not deducted from retained earnings). A wrong opening balance would give a constant difference; rounding is tiny; a circular reference does not by itself create a linear drift.',
          'Uno squilibrio che cresce dello stesso importo ogni anno indica una voce ricorrente (es. dividendi di 25 pagati in contanti ma non dedotti dagli utili a nuovo). Un saldo iniziale errato darebbe una differenza costante; gli arrotondamenti sono minimi; un riferimento circolare di per sé non crea una deriva lineare.'
        )
      },
      {
        id: 'mod-audit-q3',
        kind: 'numeric',
        topic: 'model-auditing',
        difficulty: 1,
        objective: t('Quantify a unit-mixing error.', 'Quantificare un errore di unità mischiate.'),
        prompt: t(
          'Advisory fees of €450k are typed as 450 into a model denominated in €m. By how much are fees overstated (€m)?',
          'Commissioni di consulenza di €450k vengono inserite come 450 in un modello espresso in €m. Di quanto sono sovrastimate le commissioni (€m)?'
        ),
        answer: 449.55,
        unit: '€m',
        verify: { fn: 'diff', args: [450, 0.45] },
        explanation: t(
          'In a €m model, €450k should be 0.45. Entering 450 books €450m, an overstatement of 449.55. Label units on every row and keep one unit throughout the model.',
          'In un modello in €m, €450k vanno inseriti come 0,45. Inserire 450 registra €450m, con una sovrastima di 449,55. Indica l’unità in ogni riga e usa un’unica unità in tutto il modello.'
        )
      },
      {
        id: 'mod-audit-q4',
        kind: 'multi',
        topic: 'model-auditing',
        difficulty: 2,
        objective: t('Spot common modelling errors in formulas.', 'Individuare errori comuni di modellazione nelle formule.'),
        prompt: t(
          'Which of these formulas (2028E in column F, 2027E in column E) contain an error? Select all that apply.',
          'Quali di queste formule (2028E nella colonna F, 2027E nella colonna E) contengono un errore? Seleziona tutte le risposte corrette.'
        ),
        choices: [
          t('Opening PP&E 2028E: `=F25` where row 25 is closing PP&E', 'Immobilizzazioni iniziali 2028E: `=F25` dove la riga 25 è il saldo finale'),
          t('Revenue 2028E: `=E10*(1+F$5)` where row 5 is growth', 'Ricavi 2028E: `=E10*(1+F$5)` dove la riga 5 è la crescita'),
          t('Tax 2028E: `=F18*0.24`', 'Imposte 2028E: `=F18*0,24`'),
          t('Receivables 2028E: `=F10*$C$40/365` where C40 is DSO', 'Crediti 2028E: `=F10*$C$40/365` dove C40 è il DSO'),
          t('EBITDA 2028E: `=F10-F12-F13`, with costs in rows 12–13 already entered as negatives', 'EBITDA 2028E: `=F10-F12-F13`, con i costi delle righe 12–13 già inseriti come negativi')
        ],
        correct: [0, 2, 4],
        explanation: t(
          'Opening PP&E must link to the prior year’s closing balance (E25), not the same year — wrong period anchoring, and a circular reference. The tax rate is hard-coded. Subtracting costs already stored as negatives adds them back (sign convention error). The revenue formula is correct, and anchoring a single DSO assumption with $C$40 is fine if one DSO applies to all years.',
          'Le immobilizzazioni iniziali devono collegarsi al saldo finale dell’anno precedente (E25), non dello stesso anno — ancoraggio al periodo sbagliato e riferimento circolare. L’aliquota è un valore fisso. Sottrarre costi già registrati come negativi li somma (errore di convenzione dei segni). La formula dei ricavi è corretta, e bloccare un’unica ipotesi di DSO con $C$40 va bene se lo stesso DSO vale per tutti gli anni.'
        )
      },
      {
        id: 'mod-audit-q5',
        kind: 'mcq',
        topic: 'model-auditing',
        difficulty: 1,
        objective: t('Use the right Excel tool to find hard-codes.', 'Usare lo strumento Excel giusto per trovare i valori fissi.'),
        prompt: t('Which Excel feature quickly highlights all typed numbers (constants) in a calculation sheet?', 'Quale funzione di Excel evidenzia rapidamente tutti i numeri digitati (costanti) in un foglio di calcolo?'),
        choices: [
          t('Go To Special › Constants (F5)', 'Vai a › Speciale › Costanti (F5)'),
          t('Data › What-If Analysis › Goal Seek', 'Dati › Analisi di simulazione › Ricerca obiettivo'),
          t('Remove Duplicates', 'Rimuovi duplicati'),
          t('Freeze Panes', 'Blocca riquadri')
        ],
        correct: 0,
        explanation: t(
          'Go To Special › Constants selects every non-formula cell, so typed numbers inside calculation blocks stand out. Goal Seek solves for an input; the others are unrelated to auditing.',
          'Vai a › Speciale › Costanti seleziona tutte le celle senza formula, così i numeri digitati nei blocchi di calcolo saltano all’occhio. Ricerca obiettivo risolve per un input; le altre non riguardano la revisione.'
        )
      }
    ],
    flashcards: [
      { id: 'fc-mod-audit-1', topic: 'model-auditing', front: t('Imbalance = 2 × an item suggests…?', 'Squilibrio = 2 × una voce indica…?'), back: t('A sign flip on that item.', 'Un’inversione di segno su quella voce.') },
      { id: 'fc-mod-audit-2', topic: 'model-auditing', front: t('Imbalance growing by the same amount each year?', 'Squilibrio che cresce dello stesso importo ogni anno?'), back: t('A recurring flow hitting one statement but not the other (e.g. dividends not in retained earnings).', 'Un flusso ricorrente che tocca un prospetto ma non l’altro (es. dividendi non dedotti dagli utili a nuovo).') },
      { id: 'fc-mod-audit-3', topic: 'model-auditing', front: t('Five checks every model should have?', 'Cinque controlli che ogni modello deve avere?'), back: t('Balance check; cash ties to CFS; no negative debt / revolver within limit; sources = uses; historicals tie to reported accounts.', 'Quadratura; cassa coerente con il rendiconto; nessun debito negativo / revolving entro il limite; fonti = impieghi; storici coerenti con il bilancio.') },
      { id: 'fc-mod-audit-4', topic: 'model-auditing', front: t('Common modelling errors?', 'Errori di modellazione comuni?'), back: t('Unintended circularity, sign flips, mixed units, double counting, hard-codes, wrong period anchoring, broken SUM ranges.', 'Circolarità non voluta, segni invertiti, unità mischiate, doppi conteggi, valori fissi, ancoraggio al periodo sbagliato, intervalli di SOMMA rotti.') },
      { id: 'fc-mod-audit-5', topic: 'model-auditing', front: t('Danger of F9 inside the formula bar?', 'Rischio di F9 nella barra della formula?'), back: t('If you press Enter instead of Esc, the evaluated value replaces the reference — a hidden hard-code.', 'Se premi Invio invece di Esc, il valore calcolato sostituisce il riferimento — un valore fisso nascosto.') }
    ]
  }
];
