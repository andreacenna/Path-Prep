import type { L, Lesson } from '../types';

/**
 * Academy 10 — Interview Preparation.
 * Modules IP1 (Technical Interviews), IP2 (Behavioural Interviews), IP3 (Commercial Awareness).
 * Behavioural content gives structures and templates only: the learner fills them with
 * their own real experiences (Story Bank). Nothing here is a claimed achievement.
 */

const t = (en: string, it: string): L => ({ en, it });

export const lessons: Lesson[] = [
  /* ================================================================== */
  /* IP1 — How to answer technical questions                            */
  /* ================================================================== */
  {
    id: 'int-technical-approach',
    academyId: 'interviews',
    moduleId: 'IP1',
    mode: 'deep',
    minutes: 10,
    difficulty: 1,
    qualitative: true,
    reviewed: '2026-10',
    objective: t(
      'Answer any technical interview question with a clear, answer-first structure, handle questions you do not know, and do mental math out loud with confidence.',
      'Rispondere a qualsiasi domanda tecnica con una struttura chiara e “answer-first”, gestire le domande di cui non si conosce la risposta e fare calcoli a mente ad alta voce con sicurezza.'
    ),
    screens: [
      {
        type: 'intuition',
        title: t('They are not testing your memory', 'Non stanno testando la tua memoria'),
        body: t(
          'A technical question is a **work sample**. The interviewer is imagining you at 11 p.m. explaining a model to a VP.\n\nThey assess three things:\n- **Accuracy** — is the content right?\n- **Structure** — can you explain it clearly and briefly?\n- **Composure** — what happens when you are pushed beyond what you know?\n\nA correct answer delivered as a ramble scores worse than a slightly incomplete one delivered with structure.',
          'Una domanda tecnica è un **campione di lavoro**. L’intervistatore ti immagina alle 23 mentre spieghi un modello a un VP.\n\nValuta tre cose:\n- **Correttezza** — il contenuto è giusto?\n- **Struttura** — sai spiegarlo in modo chiaro e breve?\n- **Lucidità** — cosa succede quando ti spingono oltre ciò che sai?\n\nUna risposta corretta ma confusa vale meno di una leggermente incompleta ma ben strutturata.'
        )
      },
      {
        type: 'technical',
        title: t('The answer-first framework', 'Lo schema “answer-first”'),
        body: t(
          '1. **Clarify** if needed — restate assumptions (“assuming a 25% tax rate…”).\n2. **Headline first** — the answer in one sentence (“EV is unchanged”).\n3. **Structure** — 2–4 supporting points, signposted (“three reasons: first…”).\n4. **Sanity check** — does it balance? Is the sign right? Is the magnitude plausible?\n5. **Stop** — and let them ask the follow-up.\n\nThis is the **pyramid principle** bankers use in every slide: conclusion on top, support underneath.',
          '1. **Chiarisci** se serve — esplicita le ipotesi (“ipotizzando un’aliquota del 25%…”).\n2. **Prima la conclusione** — la risposta in una frase (“l’EV non cambia”).\n3. **Struttura** — 2–4 punti a supporto, annunciati (“tre ragioni: primo…”).\n4. **Verifica di buon senso** — quadra? Il segno è giusto? L’ordine di grandezza è plausibile?\n5. **Fermati** — e lascia spazio alla domanda successiva.\n\nÈ il **principio della piramide** che i banker usano in ogni slide: conclusione in alto, supporto sotto.'
        )
      },
      {
        type: 'technical',
        title: t('Five question types, five tactics', 'Cinque tipi di domanda, cinque tattiche'),
        body: t(
          'Recognise the type in the first second — it tells you the shape of the answer.',
          'Riconosci il tipo nel primo secondo — ti dice la forma della risposta.'
        ),
        table: {
          headers: [t('Type', 'Tipo'), t('Example', 'Esempio'), t('Tactic', 'Tattica')],
          rows: [
            [t('Definition', 'Definizione'), t('What is EV?', 'Cos’è l’EV?'), t('One-line definition + why it matters', 'Definizione in una riga + perché conta')],
            [t('Process', 'Processo'), t('Walk me through a DCF', 'Mi illustri un DCF'), t('Numbered steps, 60–120 s', 'Passi numerati, 60–120 s')],
            [t('Mechanics', 'Meccanica'), t('Depreciation +10', 'Ammortamento +10'), t('IS → CFS → BS, then check it balances', 'CE → rendiconto → SP, poi verifica che quadri')],
            [t('Mental math', 'Calcolo mentale'), t('3x in 5 years?', '3x in 5 anni?'), t('Round, narrate, sanity-check', 'Arrotonda, racconta, verifica')],
            [t('Judgement', 'Giudizio'), t('Which method is highest?', 'Quale metodo dà di più?'), t('“It depends” + the drivers + a lean', '“Dipende” + i driver + una posizione')]
          ]
        }
      },
      {
        type: 'example',
        title: t('Weak vs strong: “Why do we subtract cash?”', 'Debole vs forte: “Perché si sottrae la cassa?”'),
        body: t(
          'Same knowledge, very different impression.',
          'Stesse conoscenze, impressione molto diversa.'
        ),
        table: {
          headers: [t('Weak answer', 'Risposta debole'), t('Strong answer', 'Risposta forte')],
          rows: [
            [
              t('“Because cash is, like, not really part of the company, and it’s in the formula, EV equals market cap plus debt minus cash…”', '“Perché la cassa non fa davvero parte dell’azienda, ed è nella formula, EV uguale capitalizzazione più debito meno cassa…”'),
              t('“Because EV values the **operating** business and cash is non-operating. A buyer gets the cash, which effectively lowers the price of the operations. In practice we may keep minimum operating cash.”', '“Perché l’EV valuta il business **operativo** e la cassa non lo è. L’acquirente ottiene la cassa, che di fatto riduce il prezzo dell’attività operativa. In pratica si può lasciare una cassa operativa minima.”')
            ],
            [t('No headline, recites formula, no reason', 'Nessuna conclusione, recita la formula, nessuna ragione'), t('Headline → reason → nuance, ~20 seconds', 'Conclusione → ragione → sfumatura, ~20 secondi')]
          ]
        }
      },
      {
        type: 'technical',
        title: t('When you do not know the answer', 'Quando non conosci la risposta'),
        body: t(
          '- **Never bluff.** A confident wrong answer is the worst outcome — bankers need to trust your numbers.\n- **Reason from first principles out loud:** “I haven’t seen this exact case, but EV reflects operations, so…”\n- **Bound it:** say what you are confident about and where you are unsure.\n- **Accept hints gracefully** and build on them.\n\nFor mental math: round to friendly numbers, narrate each step, then check magnitude (“3x in 5 years must be above 20%, since 2.5x is 20%”).',
          '- **Mai bluffare.** Una risposta sbagliata detta con sicurezza è il risultato peggiore — i banker devono potersi fidare dei tuoi numeri.\n- **Ragiona dai principi primi ad alta voce:** “Non ho mai visto questo caso, ma l’EV riflette l’operatività, quindi…”\n- **Delimita:** di’ su cosa sei sicuro e dove no.\n- **Accetta i suggerimenti** con naturalezza e costruisci su di essi.\n\nPer il calcolo mentale: arrotonda a numeri comodi, racconta ogni passo, poi verifica l’ordine di grandezza (“3x in 5 anni dev’essere sopra il 20%, perché 2,5x è il 20%”).'
        )
      },
      {
        type: 'realworld',
        title: t('How technical rounds actually run', 'Come si svolgono davvero i round tecnici'),
        body: t(
          'Processes vary by bank, but a common pattern is a **first-round screen** (phone, video or a recorded video interview) followed by a **superday** of several back-to-back interviews with analysts, associates, VPs and senior bankers.\n\nJuniors tend to ask more technicals; seniors probe judgement and fit. Expect follow-ups that go one level deeper than your answer.\n\nOn the job, the same skills matter daily: an analyst explaining why a model’s balance sheet does not balance is answering a technical question under pressure.',
          'I processi variano da banca a banca, ma uno schema comune è un **primo screening** (telefonico, video o video-intervista registrata) seguito da un **superday** di più colloqui consecutivi con analyst, associate, VP e banker senior.\n\nI junior tendono a fare più domande tecniche; i senior sondano giudizio e fit. Aspettati domande che scendono di un livello oltre la tua risposta.\n\nSul lavoro le stesse capacità servono ogni giorno: un analyst che spiega perché lo stato patrimoniale del modello non quadra sta rispondendo a una domanda tecnica sotto pressione.'
        )
      },
      { type: 'exercise', questionId: 'int-ta-q1' },
      { type: 'exercise', questionId: 'int-ta-q2' },
      { type: 'exercise', questionId: 'int-ta-q3' },
      {
        type: 'interview',
        question: t('A company raises €100m of new debt and keeps the cash. What happens to its enterprise value?', 'Un’azienda raccoglie €100m di nuovo debito e tiene la cassa. Cosa succede al suo enterprise value?'),
        answer: t(
          'Enterprise value is unchanged. Debt goes up by €100m and cash goes up by €100m, so they offset in the bridge. Equity value is also unchanged at that moment. The operating business is the same — only the balance sheet has grown. Over time, the interest cost and tax shield could affect value, but not on day one.',
          'L’enterprise value non cambia. Il debito aumenta di €100m e la cassa di €100m, quindi si compensano nel ponte. Anche l’equity value in quel momento non cambia. Il business operativo è lo stesso — è cresciuto solo il bilancio. Nel tempo, costo degli interessi e scudo fiscale potrebbero incidere sul valore, ma non il primo giorno.'
        )
      },
      {
        type: 'mistakes',
        items: [
          t('Starting with background instead of the answer. Lead with the conclusion, then support it.', 'Partire dal contesto invece che dalla risposta. Prima la conclusione, poi il supporto.'),
          t('Bluffing when unsure. Reason out loud and flag uncertainty instead.', 'Bluffare quando non si è sicuri. Meglio ragionare ad alta voce e segnalare l’incertezza.'),
          t('Going silent during mental math. Narrate the steps so the interviewer can follow and help.', 'Restare in silenzio durante il calcolo mentale. Racconta i passi così l’intervistatore può seguire e aiutare.'),
          t('Talking for three minutes on a definition question. Match the length to the question type.', 'Parlare tre minuti su una domanda di definizione. Adatta la lunghezza al tipo di domanda.')
        ]
      },
      {
        type: 'summary',
        items: [
          t('Answer first, then 2–4 structured points, then a sanity check.', 'Prima la risposta, poi 2–4 punti strutturati, poi una verifica di buon senso.'),
          t('Identify the question type immediately: definition, process, mechanics, math, judgement.', 'Identifica subito il tipo di domanda: definizione, processo, meccanica, calcolo, giudizio.'),
          t('Never bluff; reason from first principles and accept hints.', 'Mai bluffare; ragiona dai principi primi e accetta i suggerimenti.')
        ]
      }
    ],
    questions: [
      {
        id: 'int-ta-q1',
        kind: 'order',
        topic: 'interview-technique',
        difficulty: 1,
        objective: t('Sequence the answer-first framework.', 'Ordinare le fasi dello schema answer-first.'),
        prompt: t('Put the steps of a strong technical answer in order.', 'Metti in ordine le fasi di una risposta tecnica efficace.'),
        items: [
          t('Clarify assumptions if needed', 'Chiarire le ipotesi se necessario'),
          t('State the headline answer', 'Dare la risposta in sintesi'),
          t('Give 2–4 structured supporting points', 'Dare 2–4 punti strutturati a supporto'),
          t('Sanity-check (signs, balance, magnitude)', 'Verificare (segni, quadratura, ordine di grandezza)'),
          t('Stop and invite the follow-up', 'Fermarsi e lasciare spazio alla domanda successiva')
        ],
        explanation: t(
          'Clarify first so you answer the right question; the headline comes before the detail (pyramid principle); the sanity check catches sign or balance errors; stopping keeps the answer concise.',
          'Prima si chiarisce per rispondere alla domanda giusta; la sintesi precede i dettagli (principio della piramide); la verifica intercetta errori di segno o quadratura; fermarsi mantiene la risposta concisa.'
        )
      },
      {
        id: 'int-ta-q2',
        kind: 'mcq',
        topic: 'interview-technique',
        difficulty: 1,
        objective: t('Choose the best behaviour when you do not know an answer.', 'Scegliere il comportamento migliore quando non si conosce la risposta.'),
        prompt: t('You are asked how a convertible bond affects diluted shares and you are not sure. What is the best response?', 'Ti chiedono come un’obbligazione convertibile influisce sulle azioni diluite e non sei sicuro. Qual è la risposta migliore?'),
        choices: [
          t('Give a confident answer anyway — hesitation looks weak', 'Dare comunque una risposta sicura — l’esitazione sembra debolezza'),
          t('Say “I don’t know” and wait for the next question', 'Dire “non lo so” e aspettare la domanda successiva'),
          t('Reason aloud from first principles (if converting is in the money, new shares are issued and the debt goes away), and flag what you are unsure about', 'Ragionare ad alta voce dai principi primi (se conviene convertire, si emettono nuove azioni e il debito scompare) e segnalare ciò su cui non si è sicuri'),
          t('Change the subject to a topic you know well', 'Cambiare argomento verso un tema che si conosce bene')
        ],
        correct: 2,
        explanation: t(
          'Reasoning out loud shows how you think and often gets you to the right answer. Bluffing destroys trust; a flat “I don’t know” wastes the chance to show reasoning; changing the subject looks evasive.',
          'Ragionare ad alta voce mostra come pensi e spesso porta alla risposta giusta. Bluffare distrugge la fiducia; un secco “non lo so” spreca l’occasione di mostrare il ragionamento; cambiare argomento sembra evasivo.'
        )
      },
      {
        id: 'int-ta-q3',
        kind: 'numeric',
        topic: 'mental-math',
        difficulty: 2,
        objective: t('Compound a return mentally and sanity-check it.', 'Capitalizzare un rendimento a mente e verificarlo.'),
        prompt: t('Mental math: what multiple of money (x) does a 15% annual return produce over 5 years? (Two decimals.)', 'Calcolo mentale: quale multiplo del capitale (x) produce un rendimento annuo del 15% in 5 anni? (Due decimali.)'),
        answer: 2.01,
        unit: 'x',
        tolerance: { abs: 0.03 },
        verify: { fn: 'fv', args: [1, 0.15, 5] },
        steps: [
          t('1.15² ≈ 1.32', '1,15² ≈ 1,32'),
          t('1.15⁴ ≈ 1.32² ≈ 1.75', '1,15⁴ ≈ 1,32² ≈ 1,75'),
          t('× 1.15 ≈ 2.01x — roughly doubling', '× 1,15 ≈ 2,01x — circa un raddoppio')
        ],
        explanation: t(
          '1.15^5 ≈ 2.01. A useful anchor: doubling in 5 years ≈ 15% IRR. Simple interest (1 + 5 × 15% = 1.75x) understates it because it ignores compounding.',
          '1,15^5 ≈ 2,01. Riferimento utile: raddoppiare in 5 anni ≈ 15% di IRR. L’interesse semplice (1 + 5 × 15% = 1,75x) lo sottostima perché ignora la capitalizzazione.'
        )
      },
      {
        id: 'int-ta-q4',
        kind: 'multi',
        topic: 'interview-technique',
        difficulty: 1,
        objective: t('Recognise the features of a strong technical answer.', 'Riconoscere le caratteristiche di una risposta tecnica efficace.'),
        prompt: t('Which features make a technical answer strong? Select all that apply.', 'Quali caratteristiche rendono efficace una risposta tecnica? Seleziona tutte quelle corrette.'),
        choices: [
          t('It states the conclusion in the first sentence', 'Enuncia la conclusione nella prima frase'),
          t('It covers every possible nuance, however long it takes', 'Copre ogni possibile sfumatura, a prescindere dalla durata'),
          t('It uses signposting (“two reasons: first…”)', 'Usa segnaposti verbali (“due ragioni: primo…”)'),
          t('It includes a quick sanity check of signs or magnitudes', 'Include una rapida verifica di segni o ordini di grandezza'),
          t('It avoids stating assumptions so as not to look uncertain', 'Evita di esplicitare le ipotesi per non sembrare insicura')
        ],
        correct: [0, 2, 3],
        explanation: t(
          'Headline first, signposting and sanity checks make answers clear and reliable. Exhaustive nuance makes answers too long, and stating assumptions (e.g. the tax rate) is good practice, not a sign of weakness.',
          'Conclusione in apertura, segnaposti e verifiche rendono le risposte chiare e affidabili. Le sfumature esaustive allungano troppo, ed esplicitare le ipotesi (ad es. l’aliquota) è buona pratica, non debolezza.'
        )
      }
    ],
    flashcards: [
      { id: 'fc-int-ta-1', topic: 'interview-technique', front: t('The five steps of the answer-first framework?', 'Le cinque fasi dello schema answer-first?'), back: t('Clarify → headline → 2–4 structured points → sanity check → stop.', 'Chiarire → sintesi → 2–4 punti strutturati → verifica → fermarsi.') },
      { id: 'fc-int-ta-2', topic: 'interview-technique', front: t('Five types of technical question?', 'Cinque tipi di domanda tecnica?'), back: t('Definition, process (walk me through), mechanics (what happens if), mental math, judgement.', 'Definizione, processo (walk me through), meccanica (cosa succede se), calcolo mentale, giudizio.') },
      { id: 'fc-int-ta-3', topic: 'interview-technique', front: t('What to do when you do not know a technical answer?', 'Cosa fare quando non si conosce una risposta tecnica?'), back: t('Do not bluff; reason from first principles aloud, bound your uncertainty, and use hints.', 'Non bluffare; ragionare ad alta voce dai principi primi, delimitare l’incertezza e usare i suggerimenti.') },
      { id: 'fc-int-ta-4', topic: 'mental-math', front: t('IRR anchors for 2x, 2.5x, 3x over 5 years?', 'IRR di riferimento per 2x, 2,5x, 3x in 5 anni?'), back: t('≈15%, ≈20%, ≈25%.', '≈15%, ≈20%, ≈25%.') }
    ]
  },

  /* ================================================================== */
  /* IP1 — The classic "walk me through" questions                      */
  /* ================================================================== */
  {
    id: 'int-walk-me-through',
    academyId: 'interviews',
    moduleId: 'IP1',
    mode: 'deep',
    minutes: 15,
    difficulty: 2,
    reviewed: '2026-10',
    objective: t(
      'Deliver crisp 60–120 second answers to the four classic walk-throughs — three statements, DCF, LBO, accretion/dilution — and the “what happens if” accounting drills.',
      'Dare risposte nette di 60–120 secondi alle quattro classiche domande “walk me through” — tre prospetti, DCF, LBO, accrescimento/diluizione — e agli esercizi contabili “cosa succede se”.'
    ),
    screens: [
      {
        type: 'intuition',
        title: t('The questions you will definitely get', 'Le domande che ti faranno di sicuro'),
        body: t(
          'Almost every IB interview includes at least one of four walk-throughs: the **three statements**, a **DCF**, an **LBO** and **accretion/dilution**, plus “what happens if depreciation goes up by 10?”.\n\nBecause they are predictable, interviewers expect them to be **polished**: a clear skeleton, the right vocabulary, and no gaps. Treat them like a pitch you rehearse until it sounds natural.',
          'Quasi ogni colloquio IB include almeno una delle quattro domande classiche: i **tre prospetti**, un **DCF**, un **LBO** e l’**accrescimento/diluizione**, più “cosa succede se l’ammortamento aumenta di 10?”.\n\nProprio perché sono prevedibili, gli intervistatori si aspettano risposte **rifinite**: uno scheletro chiaro, il lessico giusto e nessuna lacuna. Trattale come un pitch da provare finché suona naturale.'
        )
      },
      {
        type: 'technical',
        title: t('Skeleton 1: the three statements', 'Scheletro 1: i tre prospetti'),
        body: t(
          '- **Income statement:** revenue to net income over a period.\n- **Balance sheet:** assets = liabilities + equity at a point in time.\n- **Cash flow statement:** net income ± non-cash items ± working capital = CFO; plus investing and financing = change in cash.\n\n**Links (the part they really want):** net income → retained earnings and top of the CFS; ending cash → balance sheet cash; D&A and capex → PP&E; debt issuance/repayment → debt.\n\nFor drills, always go **IS → CFS → BS**, then confirm the balance sheet balances.',
          '- **Conto economico:** dai ricavi all’utile netto in un periodo.\n- **Stato patrimoniale:** attività = passività + patrimonio netto a una data.\n- **Rendiconto finanziario:** utile netto ± poste non monetarie ± circolante = flusso operativo; più investimenti e finanziamenti = variazione di cassa.\n\n**Collegamenti (la parte che vogliono davvero):** utile netto → utili a nuovo e prima riga del rendiconto; cassa finale → cassa dello SP; ammortamenti e capex → immobilizzazioni; emissioni/rimborsi di debito → debito.\n\nNegli esercizi procedi sempre **CE → rendiconto → SP**, poi conferma che lo SP quadri.'
        )
      },
      {
        type: 'technical',
        title: t('Skeletons 2–4: DCF, LBO, accretion/dilution', 'Scheletri 2–4: DCF, LBO, accrescimento/diluizione'),
        body: t(
          '**DCF (5 steps):** project UFCF → discount rate (WACC) → terminal value → discount and sum to EV → bridge to equity value per share.\n\n**LBO (5 steps):** entry price and sources & uses → projections to FCF after interest → debt paydown schedule → exit EV less net debt → IRR and MOIC.\n\n**Accretion/dilution (5 steps):** price and funding mix → combine net incomes → subtract after-tax financing costs, add synergies, subtract new PPA D&A → add new shares → compare pro forma and standalone EPS.\n\nFive steps each, every time.',
          '**DCF (5 passi):** proiettare l’UFCF → tasso di attualizzazione (WACC) → terminal value → attualizzare e sommare in EV → ponte all’equity value per azione.\n\n**LBO (5 passi):** prezzo d’ingresso e fonti e impieghi → proiezioni fino al FCF dopo interessi → piano di rimborso del debito → EV d’uscita meno debito netto → IRR e MOIC.\n\n**Accrescimento/diluizione (5 passi):** prezzo e mix di finanziamento → sommare gli utili → sottrarre i costi di finanziamento netti, aggiungere le sinergie, sottrarre i nuovi ammortamenti da PPA → aggiungere le nuove azioni → confrontare EPS pro forma e stand-alone.\n\nCinque passi ciascuno, sempre.'
        )
      },
      {
        type: 'formula',
        title: t('Formulas you must say fluently', 'Formule da dire con scioltezza'),
        formulas: [
          { name: t('Unlevered free cash flow', 'Unlevered free cash flow'), expr: 'UFCF = EBIT × (1 − t) + D&A − CapEx − ΔNWC' },
          { name: t('WACC', 'WACC'), expr: 'WACC = E/V × Re + D/V × Rd × (1 − t)' },
          { name: t('Terminal value (Gordon)', 'Terminal value (Gordon)'), expr: 'TV = FCF(n) × (1 + g) / (WACC − g)' },
          { name: t('EV to equity bridge', 'Ponte da EV a equity'), expr: 'Equity value = EV − Debt − Preferred − NCI + Cash' },
          { name: t('LBO returns', 'Rendimenti LBO'), expr: 'MOIC = Exit equity / Entry equity;  IRR = MOIC^(1/years) − 1 (no interim flows)' }
        ],
        note: t('Say the formula, then explain each term in plain words — that is what distinguishes understanding from memorisation.', 'Enuncia la formula, poi spiega ogni termine a parole — è ciò che distingue la comprensione dalla memoria.')
      },
      {
        type: 'example',
        title: t('Drill: depreciation +$10 (25% tax)', 'Esercizio: ammortamento +$10 (aliquota 25%)'),
        body: t(
          'The most common drill. Walk it in this order and finish with the balance check.',
          'L’esercizio più comune. Percorrilo in quest’ordine e chiudi con la verifica di quadratura.'
        ),
        table: {
          headers: [t('Statement', 'Prospetto'), t('Line', 'Voce'), t('Change ($)', 'Variazione ($)')],
          rows: [
            [t('Income statement', 'Conto economico'), t('Operating income', 'Risultato operativo'), '−10'],
            [t('Income statement', 'Conto economico'), t('Taxes', 'Imposte'), '−2.5'],
            [t('Income statement', 'Conto economico'), t('Net income', 'Utile netto'), '−7.5'],
            [t('Cash flow statement', 'Rendiconto'), t('Net income + D&A add-back', 'Utile netto + ammortamento'), '−7.5 + 10 = +2.5'],
            [t('Balance sheet', 'Stato patrimoniale'), t('Cash / PP&E', 'Cassa / immobilizzazioni'), '+2.5 / −10'],
            [t('Balance sheet', 'Stato patrimoniale'), t('Retained earnings', 'Utili a nuovo'), '−7.5'],
            [t('Check', 'Verifica'), t('Assets −7.5 = Equity −7.5', 'Attivo −7,5 = PN −7,5'), t('Balances', 'Quadra')]
          ],
          totalRows: [6]
        }
      },
      {
        type: 'technical',
        title: t('The other drills, in one line each', 'Gli altri esercizi, una riga ciascuno'),
        body: t(
          '- **Buy inventory with cash:** no IS; CFO −; inventory +, cash −.\n- **Interest expense +10:** NI −7.5 and cash −7.5 (it is a cash cost).\n- **Pay a dividend:** no IS; financing outflow; cash − and retained earnings −.\n- **Issue debt:** no IS; financing inflow; cash + and debt +.\n- **Goodwill impairment:** non-cash; NI falls, added back in CFO; usually not tax-deductible, so no cash tax saving.\n- **SBC:** expense reduces NI, added back in CFO; equity offsets, but shareholders are diluted.',
          '- **Acquisto di magazzino in contanti:** nessun effetto a CE; flusso operativo −; rimanenze +, cassa −.\n- **Interessi passivi +10:** utile −7,5 e cassa −7,5 (è un costo monetario).\n- **Pagamento di un dividendo:** nessun effetto a CE; uscita nei finanziamenti; cassa − e utili a nuovo −.\n- **Emissione di debito:** nessun effetto a CE; entrata nei finanziamenti; cassa + e debito +.\n- **Svalutazione dell’avviamento:** non monetaria; l’utile scende, si somma nel flusso operativo; di norma non deducibile, quindi nessun risparmio d’imposta.\n- **SBC:** il costo riduce l’utile, si somma nel flusso operativo; il PN compensa, ma gli azionisti sono diluiti.'
        )
      },
      {
        type: 'realworld',
        title: t('Why these questions mirror the job', 'Perché queste domande riflettono il lavoro'),
        body: t(
          'Analysts build and check exactly these models. When a model’s balance sheet does not balance at midnight, you trace a change through IS → CFS → BS — the same drill.\n\nWhen a VP asks “why did the DCF value fall?”, you explain it through UFCF, WACC and terminal value. When a client asks if a deal is accretive, you rebuild pro forma EPS. Interviewers ask walk-throughs because they are the vocabulary of the first year on the desk.',
          'Gli analyst costruiscono e controllano proprio questi modelli. Quando a mezzanotte lo SP di un modello non quadra, si segue una variazione CE → rendiconto → SP — lo stesso esercizio.\n\nQuando un VP chiede “perché è sceso il valore del DCF?”, lo spieghi con UFCF, WACC e terminal value. Quando un cliente chiede se un’operazione è accrescitiva, ricostruisci l’EPS pro forma. Gli intervistatori fanno queste domande perché sono il lessico del primo anno sul desk.'
        )
      },
      { type: 'exercise', questionId: 'int-wmt-q1' },
      { type: 'exercise', questionId: 'int-wmt-q2' },
      { type: 'exercise', questionId: 'int-wmt-q3' },
      { type: 'exercise', questionId: 'int-wmt-q4' },
      {
        type: 'interview',
        question: t('Walk me through an LBO in 60 seconds.', 'Mi illustri un LBO in 60 secondi.'),
        answer: t(
          'A sponsor buys a company using mostly debt. First, I set the entry price — EBITDA times a multiple — and a sources and uses table, with debt sized as a multiple of EBITDA and sponsor equity as the plug. Second, I project the operations down to free cash flow after interest. Third, I use that cash to pay down debt. Fourth, at exit, typically after five years, I apply an exit multiple to EBITDA and subtract remaining net debt to get exit equity. Finally, I calculate IRR and MOIC and sensitise them to entry and exit multiples, leverage and growth.',
          'Un fondo acquista un’azienda usando soprattutto debito. Primo, fisso il prezzo d’ingresso — EBITDA per un multiplo — e una tabella fonti e impieghi, con il debito dimensionato come multiplo dell’EBITDA e l’equity del fondo come chiusura. Secondo, proietto l’operatività fino al free cash flow dopo gli interessi. Terzo, uso quella cassa per ripagare il debito. Quarto, all’uscita, di solito dopo cinque anni, applico un multiplo di uscita all’EBITDA e sottraggo il debito netto residuo per l’equity d’uscita. Infine calcolo IRR e MOIC e ne faccio la sensitività su multipli di ingresso e uscita, leva e crescita.'
        )
      },
      {
        type: 'mistakes',
        items: [
          t('Forgetting the tax effect in drills: a $10 pre-tax expense reduces net income by $7.50 at 25%, not $10.', 'Dimenticare l’effetto fiscale negli esercizi: un costo di $10 ante imposte riduce l’utile di $7,50 al 25%, non di $10.'),
          t('Taxing EBT instead of EBIT in unlevered free cash flow.', 'Tassare l’utile ante imposte invece dell’EBIT nell’unlevered free cash flow.'),
          t('Ending a DCF at enterprise value when the question asked for a share price.', 'Fermare il DCF all’enterprise value quando la domanda chiedeva il prezzo per azione.'),
          t('Not checking that the balance sheet balances at the end of a drill.', 'Non verificare che lo SP quadri alla fine dell’esercizio.')
        ]
      },
      {
        type: 'summary',
        items: [
          t('Four classics: three statements, DCF, LBO, accretion/dilution — five clear steps each.', 'Quattro classici: tre prospetti, DCF, LBO, accrescimento/diluizione — cinque passi chiari ciascuno.'),
          t('Drills: IS → CFS → BS, then prove it balances.', 'Esercizi: CE → rendiconto → SP, poi dimostra che quadra.'),
          t('Say formulas fluently and explain every term in plain words.', 'Enuncia le formule con scioltezza e spiega ogni termine a parole.')
        ]
      }
    ],
    questions: [
      {
        id: 'int-wmt-q1',
        kind: 'grid',
        topic: 'three-statements',
        difficulty: 2,
        objective: t('Trace a depreciation increase through all three statements.', 'Seguire un aumento dell’ammortamento nei tre prospetti.'),
        prompt: t('Depreciation increases by $10; tax rate 25%. Fill in the changes ($).', 'L’ammortamento aumenta di $10; aliquota 25%. Completa le variazioni ($).'),
        columns: [t('Line item', 'Voce'), t('Change ($)', 'Variazione ($)')],
        rows: [
          { label: t('Net income', 'Utile netto'), cells: [{ answer: -7.5, verify: { fn: 'expenseImpact', args: [10, 0.25, true], pick: 'netIncome' } }] },
          { label: t('Cash (end of period)', 'Cassa (fine periodo)'), cells: [{ answer: 2.5, verify: { fn: 'expenseImpact', args: [10, 0.25, true], pick: 'cash' } }] },
          { label: t('PP&E', 'Immobilizzazioni materiali'), cells: [{ answer: -10, verify: { fn: 'product', args: [-1, 10] } }] },
          { label: t('Retained earnings', 'Utili a nuovo'), cells: [{ answer: -7.5, verify: { fn: 'expenseImpact', args: [10, 0.25, true], pick: 'equity' } }] }
        ],
        unit: '$',
        explanation: t(
          'NI = −10 × (1 − 25%) = −7.5. Cash = −7.5 + 10 add-back = +2.5. PP&E falls by the full 10. Retained earnings fall with net income (−7.5). Assets: +2.5 − 10 = −7.5 = equity change.',
          'Utile = −10 × (1 − 25%) = −7,5. Cassa = −7,5 + 10 di ammortamento = +2,5. Le immobilizzazioni scendono di 10. Gli utili a nuovo seguono l’utile (−7,5). Attivo: +2,5 − 10 = −7,5 = variazione del PN.'
        )
      },
      {
        id: 'int-wmt-q2',
        kind: 'order',
        topic: 'dcf',
        difficulty: 1,
        objective: t('Sequence the steps of a DCF.', 'Ordinare i passi di un DCF.'),
        prompt: t('Put the DCF steps in order.', 'Metti in ordine i passi di un DCF.'),
        items: [
          t('Project unlevered free cash flows', 'Proiettare gli unlevered free cash flow'),
          t('Calculate the discount rate (WACC)', 'Calcolare il tasso di attualizzazione (WACC)'),
          t('Estimate the terminal value', 'Stimare il terminal value'),
          t('Discount cash flows and TV, sum to enterprise value', 'Attualizzare flussi e TV, sommare in enterprise value'),
          t('Bridge to equity value and divide by diluted shares', 'Passare all’equity value e dividere per le azioni diluite')
        ],
        explanation: t(
          'You need cash flows before you can discount them; the TV is estimated at the end of the forecast; only after discounting do you have EV, and the equity bridge comes last.',
          'Servono i flussi prima di poterli attualizzare; il TV si stima alla fine del piano; solo dopo l’attualizzazione si ha l’EV, e il ponte all’equity viene per ultimo.'
        )
      },
      {
        id: 'int-wmt-q3',
        kind: 'numeric',
        topic: 'three-statements',
        difficulty: 2,
        objective: t('Distinguish cash and non-cash expenses in a drill.', 'Distinguere costi monetari e non monetari in un esercizio.'),
        prompt: t('Interest expense rises by $10 (paid in cash), tax rate 25%. By how much does cash change ($)?', 'Gli interessi passivi aumentano di $10 (pagati in contanti), aliquota 25%. Di quanto varia la cassa ($)?'),
        answer: -7.5,
        unit: '$',
        tolerance: { abs: 0.01 },
        verify: { fn: 'expenseImpact', args: [10, 0.25, false], pick: 'cash' },
        explanation: t(
          'Net income falls by 7.5. Unlike depreciation, interest is a cash cost, so there is no add-back: cash falls by 7.5 (the $10 paid less the $2.5 tax saving).',
          'L’utile scende di 7,5. A differenza dell’ammortamento, gli interessi sono un costo monetario, quindi nessuna rettifica: la cassa scende di 7,5 ($10 pagati meno $2,5 di risparmio d’imposta).'
        )
      },
      {
        id: 'int-wmt-q4',
        kind: 'mcq',
        topic: 'accretion-dilution',
        difficulty: 2,
        objective: t('Apply the all-stock accretion rule of thumb.', 'Applicare la regola veloce per le operazioni in azioni.'),
        prompt: t('In an all-stock deal with no synergies, the acquirer trades at 12x P/E and pays 18x the target’s earnings. The deal is:', 'In un’operazione tutta in azioni senza sinergie, l’acquirente tratta a 12x P/E e paga 18x gli utili del target. L’operazione è:'),
        choices: [
          t('Accretive, because the target is growing faster', 'Accrescitiva, perché il target cresce di più'),
          t('Dilutive, because the acquirer pays a higher P/E than its own', 'Diluitiva, perché l’acquirente paga un P/E più alto del proprio'),
          t('Neutral, because stock deals never change EPS', 'Neutrale, perché le operazioni in azioni non cambiano mai l’EPS'),
          t('Accretive, because the acquirer issues new shares', 'Accrescitiva, perché l’acquirente emette nuove azioni')
        ],
        correct: 1,
        explanation: t(
          'In an all-stock deal, it is accretive only if the acquirer’s P/E exceeds the purchase P/E. Paying 18x with 12x paper means buying earnings more expensively than your own → dilutive. Growth affects later years, not this mechanical test; issuing shares is what causes dilution.',
          'In un’operazione in azioni c’è accrescimento solo se il P/E dell’acquirente supera il P/E pagato. Pagare 18x con azioni a 12x significa comprare utili più cari dei propri → diluitiva. La crescita incide sugli anni successivi, non su questo test meccanico; emettere azioni è proprio ciò che diluisce.'
        )
      }
    ],
    flashcards: [
      { id: 'fc-int-wmt-1', topic: 'three-statements', front: t('Depreciation +10 at 25% tax: NI, cash, BS?', 'Ammortamento +10 al 25%: utile, cassa, SP?'), back: t('NI −7.5; cash +2.5; PP&E −10, retained earnings −7.5 → balances.', 'Utile −7,5; cassa +2,5; immobilizzazioni −10, utili a nuovo −7,5 → quadra.') },
      { id: 'fc-int-wmt-2', topic: 'dcf', front: t('Five steps of a DCF?', 'Cinque passi di un DCF?'), back: t('UFCF → WACC → terminal value → discount and sum to EV → equity bridge / per share.', 'UFCF → WACC → terminal value → attualizzare e sommare in EV → ponte all’equity / per azione.') },
      { id: 'fc-int-wmt-3', topic: 'lbo', front: t('Five steps of an LBO?', 'Cinque passi di un LBO?'), back: t('Entry price + sources & uses → projections to FCF → debt paydown → exit equity → IRR/MOIC.', 'Prezzo d’ingresso + fonti e impieghi → proiezioni fino al FCF → rimborso del debito → equity d’uscita → IRR/MOIC.') },
      { id: 'fc-int-wmt-4', topic: 'accretion-dilution', front: t('All-stock accretion quick test?', 'Test veloce di accrescimento in azioni?'), back: t('Accretive if acquirer P/E > P/E paid for the target (ignoring synergies).', 'Accrescitiva se il P/E dell’acquirente > P/E pagato per il target (senza sinergie).') },
      { id: 'fc-int-wmt-5', topic: 'three-statements', front: t('Interest expense +10 at 25% tax: cash effect?', 'Interessi passivi +10 al 25%: effetto sulla cassa?'), back: t('Cash −7.5 — interest is a cash cost, so there is no add-back.', 'Cassa −7,5 — gli interessi sono un costo monetario, quindi nessuna rettifica.') }
    ]
  },

  /* ================================================================== */
  /* IP2 — Tell me about yourself                                        */
  /* ================================================================== */
  {
    id: 'int-tell-me-about-yourself',
    academyId: 'interviews',
    moduleId: 'IP2',
    mode: 'quick',
    minutes: 8,
    difficulty: 1,
    qualitative: true,
    reviewed: '2026-10',
    objective: t(
      'Build a 90-second “tell me about yourself” pitch with a clear Past → Present → Future thread that leads naturally to investment banking.',
      'Costruire un pitch di 90 secondi per “mi parli di sé” con un filo chiaro Passato → Presente → Futuro che porti in modo naturale all’investment banking.'
    ),
    screens: [
      {
        type: 'intuition',
        title: t('A pitch, not a biography', 'Un pitch, non una biografia'),
        body: t(
          '“Tell me about yourself” is almost always the first question, and it frames everything after it. The interviewer will pick follow-ups from what you say.\n\nSo it is not your life story — it is a **90-second pitch** answering one implicit question: **“Why does it make sense that you are sitting here, applying for this job?”**',
          '“Mi parli di sé” è quasi sempre la prima domanda e incornicia tutto ciò che segue. L’intervistatore sceglierà le domande successive da ciò che dici.\n\nQuindi non è la storia della tua vita — è un **pitch di 90 secondi** che risponde a una domanda implicita: **“Perché ha senso che tu sia qui, a candidarti per questo lavoro?”**'
        )
      },
      {
        type: 'technical',
        title: t('Past → Present → Future', 'Passato → Presente → Futuro'),
        body: t(
          'Allocate your time deliberately.',
          'Distribuisci il tempo in modo consapevole.'
        ),
        table: {
          headers: [t('Block', 'Blocco'), t('Time', 'Tempo'), t('Content', 'Contenuto')],
          rows: [
            [t('Past', 'Passato'), '~20 s', t('Background and the thread: what first drew you to finance and why you chose your degree', 'Background e filo conduttore: cosa ti ha avvicinato alla finanza e perché hai scelto il tuo corso')],
            [t('Present', 'Presente'), '~50 s', t('2–3 key experiences: what you did, why, what you learned', '2–3 esperienze chiave: cosa hai fatto, perché, cosa hai imparato')],
            [t('Future', 'Futuro'), '~20 s', t('Why IB, why this division, why now', 'Perché IB, perché questa divisione, perché adesso')]
          ]
        }
      },
      {
        type: 'technical',
        title: t('Choosing what to include', 'Scegliere cosa includere'),
        body: t(
          '- **One thread.** Every item should support the logic “… therefore IB”. Cut what does not.\n- **Choices, not facts.** “I chose X *because*…” shows intent; the CV already lists facts.\n- **Plant hooks.** Mention one or two experiences you *want* to be asked about — and prepare the deep-dive.\n- **Three lengths.** Prepare a 30-second, 90-second and 2-minute version; read the room.\n- **Tailor** the Future block to the bank and division.\n- **Only claim what is true** — every sentence may be probed.',
          '- **Un solo filo.** Ogni elemento deve sostenere la logica “… quindi IB”. Taglia il resto.\n- **Scelte, non fatti.** “Ho scelto X *perché*…” mostra intenzionalità; il CV elenca già i fatti.\n- **Semina agganci.** Cita una o due esperienze su cui *vuoi* essere interrogato — e prepara l’approfondimento.\n- **Tre durate.** Prepara una versione da 30 secondi, una da 90 e una da 2 minuti; adattati all’interlocutore.\n- **Personalizza** il blocco Futuro su banca e divisione.\n- **Rivendica solo ciò che è vero** — ogni frase può essere approfondita.'
        )
      },
      {
        type: 'example',
        title: t('A fill-in template for your profile', 'Un template da completare per il tuo profilo'),
        body: t(
          'Facts in plain text are from your profile; the [brackets] must be filled with **your own real** experiences — never invented ones.',
          'I fatti in chiaro vengono dal tuo profilo; le [parentesi] vanno completate con le **tue esperienze reali** — mai inventate.'
        ),
        table: {
          headers: [t('Block', 'Blocco'), t('Template', 'Template')],
          rows: [
            [t('Past', 'Passato'), t('“I study International Economics and Finance at Bocconi, graduating in 2027. I chose it because [your real reason].”', '“Studio International Economics and Finance in Bocconi, con laurea prevista nel 2027. L’ho scelto perché [la tua vera ragione].”')],
            [t('Present 1', 'Presente 1'), t('“At Bocconi Students for Quantitative Finance I [what you actually work on], which taught me [skill].”', '“In Bocconi Students for Quantitative Finance [su cosa lavori davvero], e questo mi ha insegnato [competenza].”')],
            [t('Present 2', 'Presente 2'), t('“This semester I’m on exchange at WashU Olin and a member of the Washington University Student Investment Fund, where [your real contribution].”', '“Questo semestre sono in exchange alla WashU Olin e sono membro del Washington University Student Investment Fund, dove [il tuo contributo reale].”')],
            [t('Future', 'Futuro'), t('“Those experiences showed me [insight], which is why I’m applying for [division] at [bank].”', '“Queste esperienze mi hanno mostrato [insight], ed è per questo che mi candido in [divisione] presso [banca].”')]
          ]
        }
      },
      {
        type: 'realworld',
        title: t('What the interviewer does with your answer', 'Cosa fa l’intervistatore con la tua risposta'),
        body: t(
          'While you speak, the interviewer is usually doing three things: checking your story against your CV, deciding whether your motivation for banking is credible, and noting **what to ask next**.\n\nThat is why hooks work: if you mention a stock pitch you prepared, expect “walk me through that pitch” — which is great, *if* you prepared it. Mention something you cannot discuss in depth and you have handed them your weakest topic.',
          'Mentre parli, l’intervistatore di solito fa tre cose: confronta la tua storia con il CV, valuta se la motivazione per la banca è credibile e annota **cosa chiederti dopo**.\n\nPer questo gli agganci funzionano: se citi uno stock pitch che hai preparato, aspettati “mi illustri quel pitch” — ottimo, *se* lo hai preparato. Cita qualcosa che non sai approfondire e gli avrai consegnato il tuo tema più debole.'
        )
      },
      { type: 'exercise', questionId: 'int-tmay-q1' },
      { type: 'exercise', questionId: 'int-tmay-q2' },
      { type: 'exercise', questionId: 'int-tmay-q3' },
      {
        type: 'interview',
        question: t('Tell me about yourself — but keep it to 30 seconds.', 'Mi parli di sé — ma in 30 secondi.'),
        answer: t(
          'A strong 30-second version keeps only the spine: one sentence of background (degree, university, graduation year, current exchange), one sentence on the single most relevant experience and what it taught you, and one sentence on why that leads to this role. For example, the structure is: “I’m [degree] at [university], graduating [year], currently on exchange at [school]. Through [most relevant experience] I found I enjoy [specific aspect of the work]. That’s why I’m applying for [division] here.” Then stop.',
          'Una buona versione da 30 secondi tiene solo la spina dorsale: una frase di background (corso, università, anno di laurea, exchange in corso), una frase sull’esperienza più rilevante e su cosa ti ha insegnato, e una frase sul perché porta a questo ruolo. La struttura è: “Studio [corso] in [università], laurea nel [anno], ora in exchange a [scuola]. Grazie a [esperienza più rilevante] ho scoperto che mi piace [aspetto specifico del lavoro]. Per questo mi candido in [divisione] qui.” Poi fermati.'
        )
      },
      {
        type: 'mistakes',
        items: [
          t('Reciting the CV line by line instead of telling a story with a thread.', 'Recitare il CV riga per riga invece di raccontare una storia con un filo.'),
          t('Going beyond two minutes — attention drops and you look unprepared.', 'Superare i due minuti — l’attenzione cala e sembri impreparato.'),
          t('Ending without a clear reason for banking.', 'Chiudere senza una ragione chiara per la banca.'),
          t('Memorising a script word for word — it sounds robotic. Memorise the bullet points, not the sentences.', 'Imparare un copione parola per parola — suona robotico. Memorizza i punti, non le frasi.')
        ]
      },
      {
        type: 'summary',
        items: [
          t('It is a 90-second pitch: why it makes sense that you are here.', 'È un pitch di 90 secondi: perché ha senso che tu sia qui.'),
          t('Past (~20 s) → Present (~50 s) → Future (~20 s).', 'Passato (~20 s) → Presente (~50 s) → Futuro (~20 s).'),
          t('Explain choices, plant hooks you can defend, claim only what is true.', 'Spiega le scelte, semina agganci che sai difendere, rivendica solo ciò che è vero.')
        ]
      }
    ],
    questions: [
      {
        id: 'int-tmay-q1',
        kind: 'order',
        topic: 'tell-me-about-yourself',
        difficulty: 1,
        objective: t('Sequence the blocks of the pitch.', 'Ordinare i blocchi del pitch.'),
        prompt: t('Put the blocks of a “tell me about yourself” answer in order.', 'Metti in ordine i blocchi della risposta a “mi parli di sé”.'),
        items: [
          t('Background and what first drew you to finance', 'Background e cosa ti ha avvicinato alla finanza'),
          t('Two or three key experiences and what you learned', 'Due o tre esperienze chiave e cosa hai imparato'),
          t('Why investment banking, why this division', 'Perché investment banking, perché questa divisione'),
          t('Stop and let the interviewer follow up', 'Fermarsi e lasciare spazio alle domande')
        ],
        explanation: t(
          'Past → Present → Future builds a logical narrative that ends at the job. Stopping after the Future block hands control back to the interviewer instead of rambling.',
          'Passato → Presente → Futuro costruisce una narrazione logica che termina sul lavoro. Fermarsi dopo il blocco Futuro restituisce il controllo all’intervistatore invece di dilungarsi.'
        )
      },
      {
        id: 'int-tmay-q2',
        kind: 'mcq',
        topic: 'tell-me-about-yourself',
        difficulty: 1,
        objective: t('Pick the strongest opening line.', 'Scegliere la frase d’apertura più efficace.'),
        prompt: t('Which opening is strongest?', 'Quale apertura è la più efficace?'),
        choices: [
          t('“I was born in Milan, I like travelling and football, and I have always been ambitious.”', '“Sono nato a Milano, mi piacciono i viaggi e il calcio, e sono sempre stato ambizioso.”'),
          t('“As you can see from my CV, in 2024 I enrolled at university, then in 2025…”', '“Come vede dal CV, nel 2024 mi sono iscritto all’università, poi nel 2025…”'),
          t('“I’m studying economics and finance, and the thread through my choices has been a growing interest in how companies are valued and financed — which is what brings me here.”', '“Studio economia e finanza, e il filo delle mie scelte è stato un interesse crescente per come le aziende vengono valutate e finanziate — ed è ciò che mi porta qui.”'),
          t('“I want to work in banking because the compensation and exit opportunities are excellent.”', '“Voglio lavorare in banca perché la retribuzione e le opportunità di uscita sono eccellenti.”')
        ],
        correct: 2,
        explanation: t(
          'The strongest opening states the thread that links your story to the job. Personal trivia wastes the first seconds; reading the CV chronologically adds nothing; leading with pay and exits signals the wrong motivation.',
          'L’apertura migliore enuncia il filo che collega la tua storia al lavoro. I dettagli personali sprecano i primi secondi; leggere il CV in ordine cronologico non aggiunge nulla; partire da soldi e opportunità di uscita segnala la motivazione sbagliata.'
        )
      },
      {
        id: 'int-tmay-q3',
        kind: 'multi',
        topic: 'tell-me-about-yourself',
        difficulty: 1,
        objective: t('Identify what belongs in the pitch.', 'Identificare cosa va nel pitch.'),
        prompt: t('Which elements belong in a strong 90-second pitch? Select all that apply.', 'Quali elementi appartengono a un buon pitch di 90 secondi? Seleziona tutte le risposte corrette.'),
        choices: [
          t('The reasons behind your key choices', 'Le ragioni delle tue scelte principali'),
          t('Every course you have taken', 'Ogni corso che hai seguito'),
          t('One or two experiences you are ready to discuss in depth', 'Una o due esperienze che sai discutere a fondo'),
          t('A clear link to the role you are applying for', 'Un collegamento chiaro al ruolo per cui ti candidi'),
          t('Achievements you cannot back up if asked', 'Risultati che non sapresti dimostrare se interrogato')
        ],
        correct: [0, 2, 3],
        explanation: t(
          'Reasons, defensible hooks and a link to the role make the pitch work. Listing every course adds length without insight, and unbackable claims will be exposed by follow-up questions.',
          'Ragioni, agganci difendibili e collegamento al ruolo fanno funzionare il pitch. Elencare ogni corso allunga senza aggiungere valore, e affermazioni non dimostrabili verranno smascherate dalle domande successive.'
        )
      }
    ],
    flashcards: [
      { id: 'fc-int-tmay-1', topic: 'tell-me-about-yourself', front: t('Structure and timing of “tell me about yourself”?', 'Struttura e tempi di “mi parli di sé”?'), back: t('Past ~20 s → Present ~50 s → Future ~20 s; about 90 seconds total.', 'Passato ~20 s → Presente ~50 s → Futuro ~20 s; circa 90 secondi in totale.') },
      { id: 'fc-int-tmay-2', topic: 'tell-me-about-yourself', front: t('What implicit question does the pitch answer?', 'A quale domanda implicita risponde il pitch?'), back: t('“Why does it make sense that you are here, applying for this job?”', '“Perché ha senso che tu sia qui, a candidarti per questo lavoro?”') },
      { id: 'fc-int-tmay-3', topic: 'tell-me-about-yourself', front: t('What is a “hook” in the pitch?', 'Cos’è un “aggancio” nel pitch?'), back: t('An experience you mention because you want to be asked about it — and have prepared a deep-dive for.', 'Un’esperienza che citi perché vuoi essere interrogato su di essa — e per cui hai preparato un approfondimento.') },
      { id: 'fc-int-tmay-4', topic: 'tell-me-about-yourself', front: t('How many versions of the pitch should you prepare?', 'Quante versioni del pitch preparare?'), back: t('Three: 30 seconds, 90 seconds and 2 minutes.', 'Tre: 30 secondi, 90 secondi e 2 minuti.') }
    ]
  },

  /* ================================================================== */
  /* IP2 — Why IB, why M&A, why this bank                                */
  /* ================================================================== */
  {
    id: 'int-why-ib',
    academyId: 'interviews',
    moduleId: 'IP2',
    mode: 'deep',
    minutes: 10,
    difficulty: 1,
    qualitative: true,
    reviewed: '2026-10',
    objective: t(
      'Give specific, evidence-backed answers to “why investment banking?”, “why M&A?” and “why our bank?” that show realistic knowledge of the role.',
      'Dare risposte specifiche e supportate da prove a “perché l’investment banking?”, “perché M&A?” e “perché la nostra banca?”, dimostrando una conoscenza realistica del ruolo.'
    ),
    screens: [
      {
        type: 'intuition',
        title: t('The motivation funnel', 'L’imbuto della motivazione'),
        body: t(
          'These three questions form a funnel: **Why IB → Why M&A → Why us**. Each level is more specific, and each tests something different:\n\n- **Why IB:** do you understand what the job really is?\n- **Why M&A:** do you know the alternatives and have a reasoned preference?\n- **Why us:** have you done your homework and spoken to our people?\n\nA generic answer at any level suggests you are applying everywhere without conviction.',
          'Queste tre domande formano un imbuto: **Perché IB → Perché M&A → Perché noi**. Ogni livello è più specifico e verifica qualcosa di diverso:\n\n- **Perché IB:** capisci cos’è davvero il lavoro?\n- **Perché M&A:** conosci le alternative e hai una preferenza motivata?\n- **Perché noi:** hai fatto i compiti e parlato con le nostre persone?\n\nUna risposta generica a qualsiasi livello suggerisce che ti candidi ovunque senza convinzione.'
        )
      },
      {
        type: 'technical',
        title: t('Why IB: three anchored reasons', 'Perché IB: tre ragioni ancorate'),
        body: t(
          'Give **three reasons**, each tied to evidence from your experience:\n\n1. **The work:** valuation, modelling and strategic analysis on transactions that change companies. Show you know what analysts do — models, pitch books, due diligence support, process management.\n2. **The learning curve:** breadth of sectors and exposure to senior decision-makers early.\n3. **The environment:** intense teamwork under deadlines, which you have enjoyed before.\n\nMoney and prestige may be true, but they are never the headline.',
          'Dai **tre ragioni**, ciascuna legata a prove dalla tua esperienza:\n\n1. **Il lavoro:** valutazione, modellistica e analisi strategica su operazioni che cambiano le aziende. Dimostra di sapere cosa fanno gli analyst — modelli, pitch book, supporto alla due diligence, gestione del processo.\n2. **La curva di apprendimento:** ampiezza di settori ed esposizione presto a decisori senior.\n3. **L’ambiente:** lavoro di squadra intenso sotto scadenza, che ti è già piaciuto.\n\nSoldi e prestigio possono essere veri, ma non sono mai la ragione principale.'
        )
      },
      {
        type: 'technical',
        title: t('Why M&A: know the alternatives', 'Perché M&A: conosci le alternative'),
        body: t(
          'You cannot prefer M&A credibly without knowing what else exists.',
          'Non puoi preferire l’M&A in modo credibile senza sapere cos’altro esiste.'
        ),
        table: {
          headers: [t('Team', 'Team'), t('Core of the job', 'Cuore del lavoro')],
          rows: [
            [t('M&A advisory', 'M&A advisory'), t('Advising on buying, selling and merging companies; valuation, strategy, negotiation', 'Consulenza su acquisizioni, cessioni e fusioni; valutazione, strategia, negoziazione')],
            [t('ECM', 'ECM'), t('Equity issuance: IPOs, follow-ons, convertibles; market timing and investor demand', 'Emissioni azionarie: IPO, aumenti di capitale, convertibili; timing di mercato e domanda degli investitori')],
            [t('DCM', 'DCM'), t('Bond issuance for corporates and governments; pricing vs. spreads', 'Emissioni obbligazionarie per società ed enti; pricing rispetto agli spread')],
            [t('Leveraged finance', 'Leveraged finance'), t('Structuring debt for acquisitions and LBOs', 'Strutturazione del debito per acquisizioni e LBO')],
            [t('Sales & trading', 'Sales & trading'), t('Real-time pricing, risk and client flow in markets', 'Prezzi in tempo reale, rischio e flussi dei clienti sui mercati')]
          ]
        }
      },
      {
        type: 'technical',
        title: t('Why us: the research checklist', 'Perché noi: la checklist di ricerca'),
        body: t(
          '- **Platform:** type of bank (global bulge bracket, independent advisory boutique, European or Italian franchise), sector and product strengths, presence in your target city.\n- **Deals:** 1–2 recent transactions the bank advised on, read from the press release — know parties, rationale and size.\n- **People:** what you learned in conversations with its bankers; refer to the interaction specifically.\n- **Structure:** analyst programme, staffing model, training, international mobility.\n\nThen connect two of these to what *you* want.',
          '- **Piattaforma:** tipo di banca (bulge bracket globale, boutique indipendente di advisory, franchise europeo o italiano), punti di forza di settore e prodotto, presenza nella città che ti interessa.\n- **Operazioni:** 1–2 operazioni recenti in cui la banca è stata advisor, lette dal comunicato stampa — conosci parti, razionale e dimensione.\n- **Persone:** cosa hai imparato parlando con i suoi banker; cita l’occasione in modo specifico.\n- **Struttura:** programma analyst, modello di staffing, formazione, mobilità internazionale.\n\nPoi collega due di questi elementi a ciò che *tu* cerchi.'
        )
      },
      {
        type: 'example',
        title: t('Generic vs specific', 'Generico vs specifico'),
        body: t(
          'Upgrade each generic sentence into one only you could say.',
          'Trasforma ogni frase generica in una che potresti dire solo tu.'
        ),
        table: {
          headers: [t('Generic (weak)', 'Generico (debole)'), t('Specific (strong) — structure', 'Specifico (forte) — struttura')],
          rows: [
            [t('“I like finance and numbers.”', '“Mi piacciono la finanza e i numeri.”'), t('“Building a valuation for [real project] showed me I enjoy turning a strategy question into numbers.”', '“Costruire una valutazione per [progetto reale] mi ha mostrato che mi piace tradurre una domanda strategica in numeri.”')],
            [t('“Your bank is a leader.”', '“La vostra banca è leader.”'), t('“Your role on [recent deal] and what [banker] told me about analyst responsibility on live deals.”', '“Il vostro ruolo in [operazione recente] e ciò che [banker] mi ha detto sulla responsabilità degli analyst sui deal in corso.”')],
            [t('“M&A is the most interesting.”', '“L’M&A è la più interessante.”'), t('“I prefer company-specific, strategic analysis over real-time market pricing — as I found when [real experience].”', '“Preferisco l’analisi strategica della singola azienda ai prezzi di mercato in tempo reale — come ho scoperto quando [esperienza reale].”')]
          ]
        }
      },
      {
        type: 'realworld',
        title: t('Networking makes these answers credible', 'Il networking rende credibili queste risposte'),
        body: t(
          'The most convincing “why us” answers quote what you learned from **real conversations** — alumni calls, campus presentations, coffee chats.\n\nKeep a simple log: name, team, date, two things you learned, follow-up sent. Before each interview, reread the entries for that bank. On exchange in the US, campus recruiting events and alumni networks from both your home and host school are natural places to start.',
          'Le risposte “perché noi” più convincenti citano ciò che hai imparato da **conversazioni reali** — chiamate con alumni, presentazioni in università, coffee chat.\n\nTieni un registro semplice: nome, team, data, due cose imparate, follow-up inviato. Prima di ogni colloquio rileggi le voci relative a quella banca. In exchange negli USA, gli eventi di recruiting in campus e i network di alumni della tua università e di quella ospitante sono punti di partenza naturali.'
        )
      },
      { type: 'exercise', questionId: 'int-why-q1' },
      { type: 'exercise', questionId: 'int-why-q2' },
      { type: 'exercise', questionId: 'int-why-q3' },
      {
        type: 'interview',
        question: t('Why M&A and not equity capital markets?', 'Perché M&A e non equity capital markets?'),
        answer: t(
          'Both are about helping companies make big financial decisions, but the work is different. ECM is closer to the market — timing issuance, gauging investor demand, pricing an IPO or a placement. M&A is more about the company itself: why a combination makes strategic sense, what the target is worth, and how to negotiate and run a process over months. The deeper, company-specific analysis is what I have enjoyed most in [real experience], so M&A is where I would learn and contribute most — while I would value working alongside ECM colleagues on deals with an equity component.',
          'Entrambe aiutano le aziende a prendere grandi decisioni finanziarie, ma il lavoro è diverso. L’ECM è più vicino al mercato — timing delle emissioni, sondaggio della domanda, pricing di un’IPO o di un collocamento. L’M&A riguarda di più l’azienda in sé: perché un’aggregazione ha senso strategico, quanto vale il target, come negoziare e gestire un processo per mesi. L’analisi approfondita e specifica sull’azienda è ciò che mi è piaciuto di più in [esperienza reale], quindi l’M&A è dove imparerei e contribuirei di più — pur apprezzando lavorare con i colleghi ECM sulle operazioni con una componente azionaria.'
        )
      },
      {
        type: 'mistakes',
        items: [
          t('Leading with money, prestige or exit opportunities.', 'Partire da soldi, prestigio o opportunità di uscita.'),
          t('A “why us” answer that would work for any bank.', 'Una risposta “perché noi” valida per qualsiasi banca.'),
          t('Citing a bank’s deal you cannot discuss beyond the headline.', 'Citare un’operazione della banca che non sai discutere oltre il titolo.'),
          t('Criticising other divisions or banks to justify your choice.', 'Criticare altre divisioni o banche per giustificare la tua scelta.')
        ]
      },
      {
        type: 'summary',
        items: [
          t('Funnel: why IB → why M&A → why us, each more specific.', 'Imbuto: perché IB → perché M&A → perché noi, sempre più specifico.'),
          t('Three reasons for IB, each anchored in real evidence.', 'Tre ragioni per l’IB, ciascuna ancorata a prove reali.'),
          t('“Why us” = platform + recent deals + people you have spoken to.', '“Perché noi” = piattaforma + operazioni recenti + persone con cui hai parlato.')
        ]
      }
    ],
    questions: [
      {
        id: 'int-why-q1',
        kind: 'mcq',
        topic: 'why-ib',
        difficulty: 1,
        objective: t('Recognise a strong “why IB” reason.', 'Riconoscere una buona ragione per l’IB.'),
        prompt: t('Which is the strongest headline reason for “why investment banking”?', 'Qual è la ragione principale più efficace per “perché l’investment banking”?'),
        choices: [
          t('It pays better than most graduate jobs', 'Paga meglio della maggior parte dei lavori per neolaureati'),
          t('It keeps all my options open for the future', 'Mi lascia tutte le opzioni aperte per il futuro'),
          t('I enjoy the analytical and strategic work behind transactions, which I discovered through a specific project', 'Mi piace il lavoro analitico e strategico dietro le operazioni, che ho scoperto con un progetto specifico'),
          t('My friends are all applying to banks', 'Tutti i miei amici si candidano in banca')
        ],
        correct: 2,
        explanation: t(
          'A reason grounded in the nature of the work and backed by evidence is credible. Pay is not a compelling headline; “keeping options open” signals you plan to leave; peer pressure shows no conviction.',
          'Una ragione fondata sulla natura del lavoro e supportata da prove è credibile. La retribuzione non è una ragione convincente; “tenersi le opzioni aperte” segnala che pensi di andartene; la pressione dei pari mostra assenza di convinzione.'
        )
      },
      {
        id: 'int-why-q2',
        kind: 'multi',
        topic: 'why-this-bank',
        difficulty: 1,
        objective: t('Identify the elements of a specific “why us” answer.', 'Identificare gli elementi di una risposta specifica a “perché noi”.'),
        prompt: t('Which elements make a “why our bank” answer specific? Select all that apply.', 'Quali elementi rendono specifica una risposta a “perché la nostra banca”? Seleziona tutte le risposte corrette.'),
        choices: [
          t('A recent transaction the bank advised on that you can discuss', 'Un’operazione recente in cui la banca è stata advisor e che sai discutere'),
          t('What you learned in a conversation with one of its bankers', 'Ciò che hai imparato parlando con uno dei suoi banker'),
          t('“You are a prestigious, global, leading bank”', '“Siete una banca prestigiosa, globale e leader”'),
          t('A sector or product strength that matches your interests', 'Un punto di forza di settore o prodotto coerente con i tuoi interessi'),
          t('The bank’s founding date and headquarters address', 'Data di fondazione e indirizzo della sede della banca')
        ],
        correct: [0, 1, 3],
        explanation: t(
          'Deals, conversations and matching strengths are specific and verifiable. Generic praise fits every bank, and trivia like founding dates shows research without insight.',
          'Operazioni, conversazioni e punti di forza coerenti sono specifici e verificabili. Le lodi generiche valgono per ogni banca, e curiosità come la data di fondazione mostrano ricerca senza comprensione.'
        )
      },
      {
        id: 'int-why-q3',
        kind: 'mcq',
        topic: 'why-ma',
        difficulty: 2,
        objective: t('Distinguish M&A from other investment banking teams.', 'Distinguere l’M&A dagli altri team di investment banking.'),
        prompt: t('Which description best fits the M&A advisory team rather than ECM, DCM or leveraged finance?', 'Quale descrizione si addice meglio al team di M&A advisory rispetto a ECM, DCM o leveraged finance?'),
        choices: [
          t('Pricing a new bond issue relative to credit spreads', 'Prezzare una nuova emissione obbligazionaria rispetto agli spread creditizi'),
          t('Running a sale process for a company and advising on valuation and negotiation', 'Gestire il processo di vendita di un’azienda e consigliare su valutazione e negoziazione'),
          t('Building the order book for an IPO', 'Costruire il book di ordini per un’IPO'),
          t('Structuring the senior and high-yield debt for an LBO', 'Strutturare il debito senior e high yield per un LBO')
        ],
        correct: 1,
        explanation: t(
          'Sale processes, valuation and negotiation are M&A. Bond pricing is DCM, IPO book-building is ECM, and structuring LBO debt is leveraged finance — teams that often work alongside M&A on the same deal.',
          'Processi di vendita, valutazione e negoziazione sono M&A. Il pricing delle obbligazioni è DCM, il book-building delle IPO è ECM e la strutturazione del debito LBO è leveraged finance — team che spesso lavorano accanto all’M&A sulla stessa operazione.'
        )
      }
    ],
    flashcards: [
      { id: 'fc-int-why-1', topic: 'why-ib', front: t('The motivation funnel?', 'L’imbuto della motivazione?'), back: t('Why IB → why M&A → why this bank; each level more specific.', 'Perché IB → perché M&A → perché questa banca; ogni livello più specifico.') },
      { id: 'fc-int-why-2', topic: 'why-ib', front: t('Three anchors for “why IB”?', 'Tre ancore per “perché IB”?'), back: t('The work (deal analysis), the learning curve, the team environment — each backed by your evidence.', 'Il lavoro (analisi dei deal), la curva di apprendimento, l’ambiente di squadra — ciascuno con prove tue.') },
      { id: 'fc-int-why-3', topic: 'why-this-bank', front: t('Four items of the “why us” checklist?', 'Quattro voci della checklist “perché noi”?'), back: t('Platform, recent deals, people you spoke to, programme structure.', 'Piattaforma, operazioni recenti, persone con cui hai parlato, struttura del programma.') },
      { id: 'fc-int-why-4', topic: 'why-ma', front: t('M&A vs ECM in one line?', 'M&A vs ECM in una riga?'), back: t('M&A: company-specific strategy, valuation, negotiation. ECM: equity issuance, market timing, investor demand.', 'M&A: strategia, valutazione e negoziazione sulla singola azienda. ECM: emissioni azionarie, timing di mercato, domanda degli investitori.') }
    ]
  },

  /* ================================================================== */
  /* IP2 — STAR stories that do not sound rehearsed                      */
  /* ================================================================== */
  {
    id: 'int-star',
    academyId: 'interviews',
    moduleId: 'IP2',
    mode: 'deep',
    minutes: 12,
    difficulty: 2,
    qualitative: true,
    reviewed: '2026-10',
    objective: t(
      'Structure behavioural answers with STAR, build a Story Bank that covers the core competencies, and deliver stories conversationally under follow-up questions.',
      'Strutturare le risposte comportamentali con lo STAR, costruire una Story Bank che copra le competenze chiave e raccontare le storie in modo colloquiale anche sotto domande di approfondimento.'
    ),
    screens: [
      {
        type: 'intuition',
        title: t('Stories are evidence', 'Le storie sono prove'),
        body: t(
          'Anyone can claim to be a team player. Behavioural questions (“tell me about a time…”) ask for **evidence**, on the logic that past behaviour is the best predictor of future behaviour.\n\nA good story is like a good deal memo: context in one line, then what you did, then the result in numbers, then the lesson. Interviewers remember stories, not adjectives.',
          'Chiunque può dire di saper lavorare in squadra. Le domande comportamentali (“mi racconti di una volta in cui…”) chiedono **prove**, secondo la logica per cui il comportamento passato è il miglior indicatore di quello futuro.\n\nUna buona storia è come un buon memo su un deal: contesto in una riga, poi cosa hai fatto, poi il risultato in numeri, poi la lezione. Gli intervistatori ricordano le storie, non gli aggettivi.'
        )
      },
      {
        type: 'technical',
        title: t('STAR — and where the time goes', 'STAR — e come distribuire il tempo'),
        body: t(
          'Most weak answers spend too long on the Situation. Aim for 90–120 seconds, weighted to Action.',
          'Le risposte deboli spendono troppo tempo sulla Situazione. Punta a 90–120 secondi, con il peso sull’Azione.'
        ),
        table: {
          headers: [t('Step', 'Fase'), t('Share of time', 'Quota di tempo'), t('What to say', 'Cosa dire')],
          rows: [
            [t('Situation', 'Situazione'), '~15%', t('Context in 1–2 sentences: where, who, what was at stake', 'Contesto in 1–2 frasi: dove, chi, cosa era in gioco')],
            [t('Task', 'Compito'), '~10%', t('Your specific responsibility or goal', 'La tua responsabilità o obiettivo specifico')],
            [t('Action', 'Azione'), '~55%', t('What *you* did, step by step, and why', 'Cosa hai fatto *tu*, passo per passo, e perché')],
            [t('Result (+ learning)', 'Risultato (+ lezione)'), '~20%', t('Outcome, quantified if possible, and what you learned', 'Esito, quantificato se possibile, e cosa hai imparato')]
          ]
        }
      },
      {
        type: 'technical',
        title: t('Build a Story Bank, not 30 answers', 'Costruisci una Story Bank, non 30 risposte'),
        body: t(
          'You cannot script every question, but you can prepare **6–8 strong stories** that each cover several competencies:\n\n- leadership\n- teamwork\n- conflict or disagreement\n- failure and learning\n- pressure and resilience\n- attention to detail\n- ethics or judgement\n\nFor each story, write bullet points for S, T, A, R and the lesson — plus the numbers. In the interview, pick the story that best fits the question and **adapt the emphasis**.',
          'Non puoi preparare un copione per ogni domanda, ma puoi preparare **6–8 storie forti** che coprono ciascuna più competenze:\n\n- leadership\n- lavoro di squadra\n- conflitto o disaccordo\n- fallimento e apprendimento\n- pressione e resilienza\n- attenzione al dettaglio\n- etica o giudizio\n\nPer ogni storia scrivi i punti per S, T, A, R e la lezione — più i numeri. Al colloquio scegli la storia più adatta alla domanda e **adatta l’enfasi**.'
        )
      },
      {
        type: 'technical',
        title: t('How not to sound rehearsed', 'Come non sembrare recitati'),
        body: t(
          '- **Memorise bullets, not sentences** — rebuild the wording each time.\n- **Use “I”**, not “we”: the interviewer is hiring you, not your team.\n- **Specific details** (a number, a deadline, what someone said) make a story real.\n- **Show your thinking:** “I had two options… I chose X because…”.\n- **Be honest** about what went wrong — perfect stories sound fake.\n- **Practise out loud** with a friend who interrupts with “why?”.',
          '- **Memorizza i punti, non le frasi** — ricostruisci le parole ogni volta.\n- **Usa “io”**, non “noi”: l’intervistatore assume te, non il tuo team.\n- **Dettagli specifici** (un numero, una scadenza, cosa ha detto qualcuno) rendono vera una storia.\n- **Mostra il ragionamento:** “avevo due opzioni… ho scelto X perché…”.\n- **Sii onesto** su ciò che è andato storto — le storie perfette sembrano false.\n- **Esercitati ad alta voce** con un amico che ti interrompe chiedendo “perché?”.'
        )
      },
      {
        type: 'example',
        title: t('Story Bank matrix (template)', 'Matrice della Story Bank (template)'),
        body: t(
          'Map each real story to the competencies it can evidence. The sources below are only prompts — use them only if you have a true story there.',
          'Associa ogni storia reale alle competenze che può dimostrare. Le fonti qui sotto sono solo spunti — usale solo se lì hai una storia vera.'
        ),
        table: {
          headers: [t('Possible source of a story', 'Possibile fonte di una storia'), t('Leadership', 'Leadership'), t('Teamwork', 'Squadra'), t('Conflict', 'Conflitto'), t('Failure', 'Fallimento'), t('Pressure', 'Pressione'), t('Detail', 'Dettaglio')],
          rows: [
            [t('A stock pitch or research report in a student investment fund', 'Uno stock pitch o una ricerca in un fondo d’investimento studentesco'), '', '✓', '✓', '', '✓', '✓'],
            [t('A quantitative project in a quant finance society', 'Un progetto quantitativo in un’associazione di finanza quantitativa'), '✓', '✓', '', '✓', '', '✓'],
            [t('A group project at university', 'Un progetto di gruppo all’università'), '✓', '✓', '✓', '', '✓', ''],
            [t('Adapting to an exchange semester abroad', 'Adattarsi a un semestre di scambio all’estero'), '', '', '', '✓', '✓', ''],
            [t('A job, sport or volunteering commitment', 'Un lavoro, uno sport o un impegno di volontariato'), '✓', '✓', '✓', '✓', '✓', '']
          ]
        }
      },
      {
        type: 'realworld',
        title: t('How interviewers drill down', 'Come approfondiscono gli intervistatori'),
        body: t(
          'Competency-based interviewers rarely accept the first version of a story. Expect probes such as:\n\n- “What exactly did *you* do?”\n- “Why did you choose that approach?”\n- “What did the other person say?”\n- “What would you do differently?”\n\nThese probes are where rehearsed or exaggerated stories collapse — and where genuine ones shine, because you remember the details. That is the strongest reason never to embellish.',
          'Gli intervistatori che lavorano per competenze raramente accettano la prima versione di una storia. Aspettati domande come:\n\n- “Cosa ha fatto esattamente *lei*?”\n- “Perché ha scelto quell’approccio?”\n- “Cosa ha detto l’altra persona?”\n- “Cosa farebbe di diverso?”\n\nÈ qui che le storie recitate o gonfiate crollano — e quelle autentiche brillano, perché ricordi i dettagli. È la ragione più forte per non abbellire mai.'
        )
      },
      { type: 'exercise', questionId: 'int-star-q1' },
      { type: 'exercise', questionId: 'int-star-q2' },
      { type: 'exercise', questionId: 'int-star-q3' },
      {
        type: 'interview',
        question: t('Tell me about a time you worked under a tight deadline.', 'Mi racconti di una volta in cui ha lavorato con una scadenza molto stretta.'),
        answer: t(
          'A strong answer follows STAR in about two minutes. Situation in one sentence: what the deliverable was and why the deadline was tight. Task: what you personally owned. Action, the bulk: how you broke the work down, what you prioritised and dropped, how you kept quality checks in place, and how you communicated progress or risks early. Result: the outcome with a concrete measure, then one lesson you still apply — for example, building in time for a final review. Fill each part with your own real experience; the interviewer will probe the details.',
          'Una buona risposta segue lo STAR in circa due minuti. Situazione in una frase: qual era il deliverable e perché la scadenza era stretta. Compito: di cosa eri personalmente responsabile. Azione, la parte principale: come hai scomposto il lavoro, cosa hai prioritizzato e tralasciato, come hai mantenuto i controlli di qualità e come hai comunicato per tempo avanzamento e rischi. Risultato: l’esito con una misura concreta, poi una lezione che applichi ancora — ad esempio prevedere tempo per una revisione finale. Riempi ogni parte con la tua esperienza reale; l’intervistatore approfondirà i dettagli.'
        )
      },
      {
        type: 'mistakes',
        items: [
          t('Spending half the answer on the Situation. Get to your Action within 30 seconds.', 'Dedicare metà della risposta alla Situazione. Arriva all’Azione entro 30 secondi.'),
          t('Saying “we” throughout, so the interviewer cannot tell what you did.', 'Dire sempre “noi”, così l’intervistatore non capisce cosa hai fatto tu.'),
          t('No result, or a result with no number or concrete outcome.', 'Nessun risultato, o un risultato senza numeri né esito concreto.'),
          t('Embellishing or inventing details — they unravel under follow-up questions.', 'Abbellire o inventare dettagli — crollano sotto le domande di approfondimento.')
        ]
      },
      {
        type: 'summary',
        items: [
          t('STAR: Situation ~15%, Task ~10%, Action ~55%, Result + learning ~20%.', 'STAR: Situazione ~15%, Compito ~10%, Azione ~55%, Risultato + lezione ~20%.'),
          t('Prepare 6–8 true stories mapped to competencies, as bullet points.', 'Prepara 6–8 storie vere associate alle competenze, in forma di punti.'),
          t('Use “I”, specific details and honest reflection; expect drill-down questions.', 'Usa “io”, dettagli specifici e riflessione onesta; aspettati domande di approfondimento.')
        ]
      }
    ],
    questions: [
      {
        id: 'int-star-q1',
        kind: 'order',
        topic: 'star',
        difficulty: 1,
        objective: t('Sequence the STAR structure.', 'Ordinare la struttura STAR.'),
        prompt: t('Put the parts of a STAR answer in order.', 'Metti in ordine le parti di una risposta STAR.'),
        items: [
          t('Situation: brief context and stakes', 'Situazione: breve contesto e posta in gioco'),
          t('Task: your specific responsibility', 'Compito: la tua responsabilità specifica'),
          t('Action: what you did and why', 'Azione: cosa hai fatto e perché'),
          t('Result: the outcome, quantified', 'Risultato: l’esito, quantificato'),
          t('Learning: what you would apply next time', 'Lezione: cosa applicheresti la prossima volta')
        ],
        explanation: t(
          'Context first, then your role, then the actions that are the core evidence, then the result and the reflection. Ending on the learning shows self-awareness.',
          'Prima il contesto, poi il tuo ruolo, poi le azioni che sono la prova centrale, poi risultato e riflessione. Chiudere con la lezione mostra consapevolezza.'
        )
      },
      {
        id: 'int-star-q2',
        kind: 'mcq',
        topic: 'star',
        difficulty: 1,
        objective: t('Allocate time correctly within a STAR answer.', 'Distribuire correttamente il tempo in una risposta STAR.'),
        prompt: t('In a two-minute STAR answer, roughly how long should the Action part take?', 'In una risposta STAR di due minuti, quanto dovrebbe durare circa l’Azione?'),
        choices: [
          t('About 10 seconds — the result is what matters', 'Circa 10 secondi — conta il risultato'),
          t('About a minute — more than half of the answer', 'Circa un minuto — più di metà della risposta'),
          t('About the same as the Situation', 'Circa quanto la Situazione'),
          t('It depends; the Situation should always be the longest part', 'Dipende; la Situazione dev’essere sempre la parte più lunga')
        ],
        correct: 1,
        explanation: t(
          'Action is the evidence of your behaviour, so it deserves over half the time (~55%). A result without the actions is unconvincing, and a long Situation is the most common way to waste the answer.',
          'L’Azione è la prova del tuo comportamento, quindi merita più di metà del tempo (~55%). Un risultato senza azioni non convince, e una Situazione lunga è il modo più comune di sprecare la risposta.'
        )
      },
      {
        id: 'int-star-q3',
        kind: 'multi',
        topic: 'star',
        difficulty: 2,
        objective: t('Recognise signs of a rehearsed or weak story.', 'Riconoscere i segnali di una storia recitata o debole.'),
        prompt: t('Which are warning signs of a weak or over-rehearsed story? Select all that apply.', 'Quali sono segnali di una storia debole o troppo recitata? Seleziona tutte le risposte corrette.'),
        choices: [
          t('The candidate cannot answer “what exactly did you do?”', 'Il candidato non sa rispondere a “cosa ha fatto esattamente lei?”'),
          t('The story includes a specific number and a decision the candidate explains', 'La storia include un numero specifico e una decisione che il candidato spiega'),
          t('Every sentence is identical when the question is rephrased', 'Ogni frase è identica anche quando la domanda viene riformulata'),
          t('Everything went perfectly and nobody disagreed', 'Tutto è andato alla perfezione e nessuno era in disaccordo'),
          t('The candidate mentions what they would do differently', 'Il candidato cita cosa farebbe di diverso')
        ],
        correct: [0, 2, 3],
        explanation: t(
          'Inability to detail your own role, word-for-word repetition and too-perfect outcomes all signal weak or scripted stories. Specific numbers, explained decisions and honest reflection are signs of a strong, genuine one.',
          'Non saper dettagliare il proprio ruolo, la ripetizione parola per parola ed esiti troppo perfetti segnalano storie deboli o recitate. Numeri specifici, decisioni spiegate e riflessione onesta sono segni di una storia forte e autentica.'
        )
      }
    ],
    flashcards: [
      { id: 'fc-int-star-1', topic: 'star', front: t('STAR time split?', 'Ripartizione del tempo STAR?'), back: t('Situation ~15%, Task ~10%, Action ~55%, Result + learning ~20%.', 'Situazione ~15%, Compito ~10%, Azione ~55%, Risultato + lezione ~20%.') },
      { id: 'fc-int-star-2', topic: 'star', front: t('How many stories should a Story Bank hold?', 'Quante storie deve contenere una Story Bank?'), back: t('6–8 true stories, each mapped to several competencies.', '6–8 storie vere, ciascuna associata a più competenze.') },
      { id: 'fc-int-star-3', topic: 'star', front: t('Key rule for not sounding rehearsed?', 'Regola chiave per non sembrare recitati?'), back: t('Memorise bullet points, not sentences; use “I” and specific details.', 'Memorizzare i punti, non le frasi; usare “io” e dettagli specifici.') },
      { id: 'fc-int-star-4', topic: 'star', front: t('Why behavioural interviews ask for stories?', 'Perché i colloqui comportamentali chiedono storie?'), back: t('Past behaviour is used as the best predictor of future behaviour; stories are evidence.', 'Il comportamento passato è usato come miglior indicatore di quello futuro; le storie sono prove.') }
    ]
  },

  /* ================================================================== */
  /* IP3 — How to discuss a deal                                         */
  /* ================================================================== */
  {
    id: 'int-deal-discussion',
    academyId: 'interviews',
    moduleId: 'IP3',
    mode: 'deep',
    minutes: 12,
    difficulty: 2,
    qualitative: true,
    reviewed: '2026-10',
    objective: t(
      'Discuss any M&A transaction with a six-point framework — parties and terms, rationale, valuation, financing, risks, your view — and survive two levels of follow-up questions.',
      'Discutere qualsiasi operazione di M&A con uno schema in sei punti — parti e termini, razionale, valutazione, finanziamento, rischi, la tua view — e reggere due livelli di domande di approfondimento.'
    ),
    screens: [
      {
        type: 'intuition',
        title: t('Think like the advisor, not the reporter', 'Ragiona da advisor, non da giornalista'),
        body: t(
          '“Tell me about a deal you have followed” checks two things: that your interest in M&A is **genuine**, and that you can **think like an advisor**.\n\nA reporter says what happened. An advisor asks **why** the buyer did it, whether the **price** made sense, how it was **paid for**, what could **go wrong** — and has an **opinion**. That is the difference interviewers are listening for.',
          '“Mi parli di un’operazione che ha seguito” verifica due cose: che il tuo interesse per l’M&A sia **autentico** e che tu sappia **ragionare da advisor**.\n\nUn giornalista racconta cosa è successo. Un advisor si chiede **perché** l’acquirente l’ha fatto, se il **prezzo** aveva senso, come è stato **pagato**, cosa può **andare storto** — e ha un’**opinione**. È questa la differenza che gli intervistatori cercano.'
        )
      },
      {
        type: 'technical',
        title: t('The six-point framework', 'Lo schema in sei punti'),
        body: t(
          '1. **Parties and terms:** buyer, target, sector, headline value, consideration (cash/stock), announcement date.\n2. **Rationale:** growth, synergies (cost vs revenue), capabilities, consolidation.\n3. **Valuation:** EV/EBITDA or P/E paid; premium to the **undisturbed** share price; comparison with peers and precedents.\n4. **Financing and structure:** cash on hand, new debt, new shares; any earn-out or staged structure.\n5. **Risks and regulation:** antitrust, foreign-investment screening, integration, overpayment.\n6. **Your view:** does it create value for the buyer’s shareholders? Why?',
          '1. **Parti e termini:** acquirente, target, settore, valore, corrispettivo (contanti/azioni), data di annuncio.\n2. **Razionale:** crescita, sinergie (di costo vs di ricavo), competenze, consolidamento.\n3. **Valutazione:** EV/EBITDA o P/E pagato; premio sul prezzo **indisturbato**; confronto con peer e precedenti.\n4. **Finanziamento e struttura:** cassa disponibile, nuovo debito, nuove azioni; eventuali earn-out o strutture a fasi.\n5. **Rischi e regolamentazione:** antitrust, controllo sugli investimenti esteri, integrazione, prezzo eccessivo.\n6. **La tua view:** crea valore per gli azionisti dell’acquirente? Perché?'
        )
      },
      {
        type: 'formula',
        title: t('Two numbers to compute yourself', 'Due numeri da calcolare da soli'),
        formulas: [
          {
            name: t('Offer premium', 'Premio offerto'),
            expr: 'Premium = Offer price per share / Undisturbed share price − 1',
            vars: [{ sym: 'Undisturbed price', desc: t('Share price before rumours or announcement affected it', 'Prezzo dell’azione prima che voci o annuncio lo influenzassero') }]
          },
          {
            name: t('Implied EV / EBITDA', 'EV / EBITDA implicito'),
            expr: 'EV / EBITDA = (Offer price × diluted shares + net debt + other claims) / LTM EBITDA'
          }
        ],
        note: t('Headline “deal values” in the press mix equity value and EV — always check which one is quoted.', 'I “valori dell’operazione” riportati dalla stampa mescolano equity value ed EV — verifica sempre quale viene citato.')
      },
      {
        type: 'example',
        title: t('Worked example: Alfa S.p.A. buys Beta S.p.A. (hypothetical)', 'Esempio: Alfa S.p.A. acquista Beta S.p.A. (ipotetico)'),
        body: t(
          'Alfa offers €13.00 cash per Beta share. Beta’s undisturbed price was €10.00, it has 100m diluted shares, €200m net debt and LTM EBITDA of €125m. Listed peers trade at 9–10x EBITDA.',
          'Alfa offre €13,00 in contanti per azione Beta. Il prezzo indisturbato di Beta era €10,00, ha 100m di azioni diluite, €200m di indebitamento finanziario netto ed EBITDA LTM di €125m. I peer quotati trattano a 9–10x l’EBITDA.'
        ),
        table: {
          headers: [t('Item', 'Voce'), t('Calculation', 'Calcolo'), t('Result', 'Risultato')],
          rows: [
            [t('Premium', 'Premio'), '13.00 / 10.00 − 1', '30%'],
            [t('Equity value', 'Equity value'), '13.00 × 100m', '€1,300m'],
            [t('Enterprise value', 'Enterprise value'), '1,300 + 200', '€1,500m'],
            [t('EV / LTM EBITDA', 'EV / EBITDA LTM'), '1,500 / 125', '12.0x'],
            [t('Read-across', 'Lettura'), t('vs peers at 9–10x', 'vs peer a 9–10x'), t('Paying for control and synergies', 'Si paga controllo e sinergie')]
          ],
          totalRows: [3]
        }
      },
      {
        type: 'technical',
        title: t('Where to get the facts', 'Dove trovare i fatti'),
        body: t(
          '- **Primary sources first:** the announcement press release and investor presentation on the buyer’s and target’s websites; for listed targets, the offer document or merger filings.\n- **Quality press:** FT, Reuters, Bloomberg, Wall Street Journal, Il Sole 24 Ore, MF-Milano Finanza.\n- **Advisors:** press releases and tombstones name the banks — useful for “why this bank”.\n\nWrite a one-page note per deal using the six points. Prepare **two deals**: one global, one European or Italian — and ideally one the bank you are interviewing with advised on.',
          '- **Prima le fonti primarie:** comunicato stampa dell’annuncio e presentazione agli investitori sui siti di acquirente e target; per target quotati, il documento d’offerta o la documentazione di fusione.\n- **Stampa di qualità:** FT, Reuters, Bloomberg, Wall Street Journal, Il Sole 24 Ore, MF-Milano Finanza.\n- **Advisor:** comunicati e tombstone indicano le banche — utile per “perché questa banca”.\n\nScrivi una nota di una pagina per ogni operazione con i sei punti. Prepara **due operazioni**: una globale e una europea o italiana — idealmente una seguita dalla banca con cui fai il colloquio.'
        )
      },
      {
        type: 'realworld',
        title: t('Deals are not over at announcement', 'Le operazioni non finiscono all’annuncio'),
        body: t(
          'Between signing and closing, deals can take months: antitrust review (in the EU under the **EU Merger Regulation** above the turnover thresholds, plus national authorities), foreign-investment screening (in Italy, the **golden power** regime), shareholder votes and financing.\n\nKnow the **current status** of the deal you discuss — completed, pending, blocked or abandoned. Saying “I believe it closed last year” and being wrong is worse than saying “I last checked when it was awaiting antitrust approval”.',
          'Tra signing e closing possono passare mesi: esame antitrust (nell’UE secondo il **Regolamento UE sulle concentrazioni** sopra le soglie di fatturato, oltre alle autorità nazionali), controllo sugli investimenti esteri (in Italia il regime del **golden power**), voti assembleari e finanziamento.\n\nConosci lo **stato attuale** dell’operazione di cui parli — completata, in corso, bloccata o abbandonata. Dire “credo si sia chiusa l’anno scorso” e sbagliare è peggio di “l’ultima volta che ho verificato era in attesa dell’autorizzazione antitrust”.'
        )
      },
      { type: 'exercise', questionId: 'int-deal-q1' },
      { type: 'exercise', questionId: 'int-deal-q2' },
      { type: 'exercise', questionId: 'int-deal-q3' },
      { type: 'exercise', questionId: 'int-deal-q4' },
      {
        type: 'interview',
        question: t('In the deal you just described, would you have advised the buyer to pay that price?', 'Nell’operazione che ha appena descritto, avrebbe consigliato all’acquirente di pagare quel prezzo?'),
        answer: t(
          'A strong answer takes a position and justifies it with numbers: compare the multiple paid with peers and precedents, estimate whether the announced synergies — capitalised after tax and net of integration costs — cover the premium, and weigh execution and regulatory risk. For example: “The 30% premium is about €300m. If the €50m of announced pre-tax cost synergies are achievable, after 25% tax and capitalised at 10% they are worth about €375m before integration costs — more than the premium — so I think the price was justified — but only if integration delivers, which is the main risk I would watch.”',
          'Una buona risposta prende posizione e la giustifica con i numeri: confronta il multiplo pagato con peer e precedenti, stima se le sinergie annunciate — capitalizzate al netto delle imposte e dei costi di integrazione — coprono il premio, e pesa i rischi di esecuzione e regolamentari. Ad esempio: “Il premio del 30% vale circa €300m. Se i €50m di sinergie di costo ante imposte annunciate sono realizzabili, al netto di un’aliquota del 25% e capitalizzate al 10% valgono circa €375m prima dei costi di integrazione — più del premio — quindi penso che il prezzo fosse giustificato — ma solo se l’integrazione funziona, che è il rischio principale da monitorare.”'
        )
      },
      {
        type: 'mistakes',
        items: [
          t('Choosing a mega-deal you only know from a headline. Pick one you can defend under follow-ups.', 'Scegliere una mega-operazione conosciuta solo dal titolo. Scegline una che sai difendere.'),
          t('Confusing equity value and enterprise value in the headline number.', 'Confondere equity value ed enterprise value nel valore dell’operazione.'),
          t('Describing what happened without giving your own view.', 'Descrivere cosa è successo senza dare una tua view.'),
          t('Not knowing whether the deal has closed, is pending or was blocked.', 'Non sapere se l’operazione è stata chiusa, è in corso o è stata bloccata.')
        ]
      },
      {
        type: 'summary',
        items: [
          t('Six points: parties/terms, rationale, valuation, financing, risks, view.', 'Sei punti: parti/termini, razionale, valutazione, finanziamento, rischi, view.'),
          t('Compute the premium and the implied multiple yourself.', 'Calcola da solo premio e multiplo implicito.'),
          t('Use primary sources, know the current status, and take a position.', 'Usa fonti primarie, conosci lo stato attuale e prendi posizione.')
        ]
      }
    ],
    questions: [
      {
        id: 'int-deal-q1',
        kind: 'numeric',
        topic: 'deal-discussion',
        difficulty: 2,
        objective: t('Compute the implied EV/EBITDA multiple of a deal.', 'Calcolare il multiplo EV/EBITDA implicito di un’operazione.'),
        prompt: t(
          'A buyer pays €900m for 100% of a target’s equity. The target has €300m of net debt and LTM EBITDA of €100m. What EV/EBITDA multiple (x) is the buyer paying?',
          'Un acquirente paga €900m per il 100% dell’equity di un target. Il target ha €300m di indebitamento finanziario netto ed EBITDA LTM di €100m. Quale multiplo EV/EBITDA (x) sta pagando?'
        ),
        answer: 12,
        unit: 'x',
        tolerance: { abs: 0.05 },
        verify: { fn: 'multiple', args: [1200, 100] },
        steps: [t('EV = 900 + 300 = €1,200m', 'EV = 900 + 300 = €1.200m'), t('EV / EBITDA = 1,200 / 100 = 12.0x', 'EV / EBITDA = 1.200 / 100 = 12,0x')],
        explanation: t(
          'The buyer also assumes the net debt, so EV = equity price + net debt = €1,200m; 1,200 / 100 = 12.0x. Using €900m / 100 = 9.0x mixes an equity numerator with an EV-level metric.',
          'L’acquirente si fa carico anche del debito netto, quindi EV = prezzo dell’equity + debito netto = €1.200m; 1.200 / 100 = 12,0x. Usare €900m / 100 = 9,0x mescola un numeratore di equity con una metrica a livello di EV.'
        )
      },
      {
        id: 'int-deal-q2',
        kind: 'mcq',
        topic: 'deal-discussion',
        difficulty: 2,
        objective: t('Use the undisturbed price to measure the premium.', 'Usare il prezzo indisturbato per misurare il premio.'),
        prompt: t(
          'A target traded at €20 before takeover rumours, rose to €24 on the rumours, and then received an offer at €26. What premium should you quote as the headline?',
          'Un target quotava €20 prima delle voci di acquisizione, è salito a €24 sulle voci e poi ha ricevuto un’offerta a €26. Quale premio va citato come principale?'
        ),
        choices: [
          t('About 8%, versus the last price of €24', 'Circa l’8%, rispetto all’ultimo prezzo di €24'),
          t('30%, versus the undisturbed price of €20', '30%, rispetto al prezzo indisturbato di €20'),
          t('€6 per share, so 6%', '€6 per azione, quindi 6%'),
          t('No premium, because the rumours already priced it in', 'Nessun premio, perché le voci lo avevano già incorporato')
        ],
        correct: 1,
        explanation: t(
          'The headline premium is measured against the undisturbed price, before rumours moved the stock: 26 / 20 − 1 = 30%. The €24 price already contains takeover speculation, and €6 is an amount per share, not a percentage.',
          'Il premio principale si misura sul prezzo indisturbato, prima che le voci muovessero il titolo: 26 / 20 − 1 = 30%. Il prezzo di €24 contiene già la speculazione sull’acquisizione, e €6 è un importo per azione, non una percentuale.'
        )
      },
      {
        id: 'int-deal-q3',
        kind: 'order',
        topic: 'deal-discussion',
        difficulty: 1,
        objective: t('Sequence the six-point deal framework.', 'Ordinare lo schema in sei punti.'),
        prompt: t('Put the six-point deal framework in order.', 'Metti in ordine lo schema in sei punti.'),
        items: [
          t('Parties and headline terms', 'Parti e termini principali'),
          t('Strategic rationale', 'Razionale strategico'),
          t('Valuation and premium', 'Valutazione e premio'),
          t('Financing and structure', 'Finanziamento e struttura'),
          t('Risks and regulatory approvals', 'Rischi e autorizzazioni'),
          t('Your view on value creation', 'La tua view sulla creazione di valore')
        ],
        explanation: t(
          'Facts first, then why, then price, then how it is paid, then what could go wrong — and you finish with your opinion, which is what the interviewer most wants to hear.',
          'Prima i fatti, poi il perché, poi il prezzo, poi come si paga, poi cosa può andare storto — e chiudi con la tua opinione, che è ciò che l’intervistatore vuole sentire di più.'
        )
      },
      {
        id: 'int-deal-q4',
        kind: 'multi',
        topic: 'deal-discussion',
        difficulty: 2,
        objective: t('Identify relevant deal risks.', 'Identificare i rischi rilevanti di un’operazione.'),
        prompt: t('A large European competitor acquires a rival in the same market. Which risks should you mention? Select all that apply.', 'Un grande concorrente europeo acquisisce un rivale nello stesso mercato. Quali rischi dovresti citare? Seleziona tutte le risposte corrette.'),
        choices: [
          t('Antitrust review because of overlapping market shares', 'Esame antitrust per la sovrapposizione delle quote di mercato'),
          t('Integration risk in combining operations and cultures', 'Rischio di integrazione nell’unire operatività e culture'),
          t('The buyer’s share price going up', 'L’aumento del prezzo delle azioni dell’acquirente'),
          t('Overpaying relative to achievable synergies', 'Pagare troppo rispetto alle sinergie realizzabili'),
          t('Customers or key staff leaving during the transition', 'Perdita di clienti o persone chiave durante la transizione')
        ],
        correct: [0, 1, 3, 4],
        explanation: t(
          'Horizontal deals raise competition concerns, and integration, overpayment and customer/staff attrition are classic M&A risks. A rising buyer share price is not a deal risk — if anything it is a positive reaction (and makes stock consideration cheaper).',
          'Le operazioni orizzontali sollevano problemi di concorrenza, e integrazione, prezzo eccessivo e perdita di clienti/persone sono rischi classici delle M&A. L’aumento del prezzo dell’acquirente non è un rischio — semmai è una reazione positiva (e rende più economico pagare in azioni).'
        )
      }
    ],
    flashcards: [
      { id: 'fc-int-deal-1', topic: 'deal-discussion', front: t('Six points to discuss any deal?', 'Sei punti per discutere qualsiasi operazione?'), back: t('Parties/terms, rationale, valuation, financing/structure, risks/regulation, your view.', 'Parti/termini, razionale, valutazione, finanziamento/struttura, rischi/regolamentazione, la tua view.') },
      { id: 'fc-int-deal-2', topic: 'deal-discussion', front: t('What is the undisturbed share price?', 'Cos’è il prezzo indisturbato?'), back: t('The price before rumours or the announcement affected it; the reference for the headline premium.', 'Il prezzo prima che voci o annuncio lo influenzassero; il riferimento per il premio principale.') },
      { id: 'fc-int-deal-3', topic: 'deal-discussion', front: t('Implied EV/EBITDA of a deal?', 'EV/EBITDA implicito di un’operazione?'), back: t('(Equity price + net debt + other claims) / LTM EBITDA.', '(Prezzo dell’equity + debito netto + altri diritti) / EBITDA LTM.') },
      { id: 'fc-int-deal-4', topic: 'deal-discussion', front: t('Two regulatory regimes to mention for European deals?', 'Due regimi regolamentari da citare per operazioni europee?'), back: t('Merger control (EU Merger Regulation / national authorities) and foreign-investment screening (e.g. Italy’s golden power).', 'Controllo delle concentrazioni (Regolamento UE / autorità nazionali) e controllo sugli investimenti esteri (ad es. golden power in Italia).') }
    ],
    sources: [
      { label: 'Council Regulation (EC) No 139/2004 on the control of concentrations between undertakings (EU Merger Regulation)', url: 'https://eur-lex.europa.eu/eli/reg/2004/139/oj' },
      { label: 'Decreto-legge 15 marzo 2012, n. 21 (golden power), convertito con legge 11 maggio 2012, n. 56' }
    ]
  },

  /* ================================================================== */
  /* IP3 — Having a market view                                          */
  /* ================================================================== */
  {
    id: 'int-market-view',
    academyId: 'interviews',
    moduleId: 'IP3',
    mode: 'deep',
    minutes: 10,
    difficulty: 2,
    qualitative: true,
    reviewed: '2026-10',
    objective: t(
      'Build and defend a structured market view — linking macro, rates, valuations and deal activity — using a small dashboard of indicators you track weekly.',
      'Costruire e difendere una view di mercato strutturata — collegando macro, tassi, valutazioni e attività sui deal — usando un piccolo cruscotto di indicatori seguiti ogni settimana.'
    ),
    screens: [
      {
        type: 'intuition',
        title: t('Facts + causation + opinion', 'Fatti + nessi causali + opinione'),
        body: t(
          'A market view is not a list of headlines. It has four parts:\n\n1. **Facts:** where key indicators are, roughly.\n2. **Causation:** why they moved and how they affect each other.\n3. **Opinion:** what you think happens next.\n4. **Falsifiability:** what would change your mind.\n\nInterviewers do not grade whether your forecast is right — they grade whether your reasoning is coherent and you follow markets.',
          'Una view di mercato non è un elenco di titoli. Ha quattro parti:\n\n1. **Fatti:** dove sono, più o meno, gli indicatori chiave.\n2. **Nessi causali:** perché si sono mossi e come si influenzano.\n3. **Opinione:** cosa pensi che succederà.\n4. **Falsificabilità:** cosa ti farebbe cambiare idea.\n\nGli intervistatori non valutano se la previsione è giusta — valutano se il ragionamento è coerente e se segui i mercati.'
        )
      },
      {
        type: 'technical',
        title: t('Your weekly dashboard', 'Il tuo cruscotto settimanale'),
        body: t(
          'Know the approximate level and recent direction of each — update the numbers yourself every week.',
          'Conosci il livello approssimativo e la direzione recente di ciascuno — aggiorna tu i numeri ogni settimana.'
        ),
        table: {
          headers: [t('Area', 'Area'), t('Indicators', 'Indicatori')],
          rows: [
            [t('Policy rates', 'Tassi di policy'), t('ECB deposit facility rate; Fed funds target range', 'Tasso sui depositi BCE; intervallo obiettivo dei Fed funds')],
            [t('Government bonds', 'Titoli di Stato'), t('10y Bund, BTP and US Treasury yields; BTP–Bund spread; curve shape (2y vs 10y)', 'Rendimenti decennali Bund, BTP e Treasury; spread BTP–Bund; forma della curva (2 anni vs 10 anni)')],
            [t('Equities', 'Azionario'), t('FTSE MIB, Euro Stoxx 50, S&P 500; VIX', 'FTSE MIB, Euro Stoxx 50, S&P 500; VIX')],
            [t('Credit', 'Credito'), t('Investment-grade and high-yield spreads', 'Spread investment grade e high yield')],
            [t('FX and commodities', 'Cambi e materie prime'), t('EUR/USD; Brent oil; European gas (TTF)', 'EUR/USD; petrolio Brent; gas europeo (TTF)')],
            [t('Deal activity', 'Attività sui deal'), t('M&A and IPO volumes; notable recent deals', 'Volumi di M&A e IPO; operazioni recenti rilevanti')]
          ]
        }
      },
      {
        type: 'technical',
        title: t('The causal chain bankers use', 'La catena causale che usano i banker'),
        body: t(
          'Connect the dashboard into one story:\n\n**Growth and inflation** → **central bank policy** → **rates and curve** → **cost of capital and credit spreads** → **valuations** (multiples) → **deal activity** (M&A, LBOs, IPOs).\n\nExample logic: lower expected policy rates → lower discount rates and cheaper financing → higher multiples and more LBO capacity → more sponsor activity and IPO windows reopening — *unless* rates are falling because growth is collapsing, in which case earnings risk dominates.',
          'Collega il cruscotto in un’unica storia:\n\n**Crescita e inflazione** → **politica monetaria** → **tassi e curva** → **costo del capitale e spread creditizi** → **valutazioni** (multipli) → **attività sui deal** (M&A, LBO, IPO).\n\nEsempio: tassi di policy attesi più bassi → tassi di sconto più bassi e finanziamenti più economici → multipli più alti e più capacità per gli LBO → più attività dei fondi e riapertura delle finestre per le IPO — *a meno che* i tassi scendano perché la crescita sta crollando, nel qual caso domina il rischio sugli utili.'
        )
      },
      {
        type: 'example',
        title: t('Scenario thinking (hypothetical)', 'Ragionare per scenari (ipotetico)'),
        body: t(
          'Suppose the ECB cuts rates by more than markets expected. Walk the chain for each channel — this structure works whatever the actual level of rates.',
          'Ipotizza che la BCE tagli i tassi più di quanto atteso dal mercato. Percorri la catena per ogni canale — la struttura funziona qualunque sia il livello effettivo dei tassi.'
        ),
        table: {
          headers: [t('Channel', 'Canale'), t('Likely first-order effect', 'Probabile effetto di primo ordine')],
          rows: [
            [t('Short-term yields', 'Rendimenti a breve'), t('Fall; curve tends to steepen', 'Scendono; la curva tende a irripidirsi')],
            [t('Euro', 'Euro'), t('Tends to weaken vs USD', 'Tende a indebolirsi sul dollaro')],
            [t('Equity valuations', 'Valutazioni azionarie'), t('Supported, especially long-duration growth stocks', 'Sostenute, soprattutto i titoli growth a lunga duration')],
            [t('Leveraged finance', 'Leveraged finance'), t('Cheaper floating-rate debt; more LBO capacity', 'Debito a tasso variabile più economico; più capacità per gli LBO')],
            [t('Banks’ net interest margin', 'Margine di interesse delle banche'), t('Pressure on margins', 'Pressione sui margini')],
            [t('Second-order question', 'Domanda di secondo ordine'), t('Why did the ECB cut — weak growth? Then earnings risk may offset', 'Perché la BCE ha tagliato — crescita debole? Allora il rischio sugli utili può compensare')]
          ]
        }
      },
      {
        type: 'realworld',
        title: t('A 20-minute daily routine', 'Una routine quotidiana di 20 minuti'),
        body: t(
          '- **10 min:** headlines and markets pages (FT, Il Sole 24 Ore, Reuters or Bloomberg).\n- **5 min:** one deal story — who advised, what multiple, why.\n- **5 min:** update a one-page market sheet with your dashboard and a one-line view.\n\nBefore interviews, rehearse a 60–90 second market update out loud. Analysts do a version of this daily: senior bankers expect juniors to know what moved and how it affects live deals and pitches.',
          '- **10 min:** titoli e pagine dei mercati (FT, Il Sole 24 Ore, Reuters o Bloomberg).\n- **5 min:** una notizia su un’operazione — chi era advisor, che multiplo, perché.\n- **5 min:** aggiorna un foglio di una pagina con il tuo cruscotto e una view in una riga.\n\nPrima dei colloqui prova ad alta voce un aggiornamento di mercato di 60–90 secondi. Gli analyst ne fanno una versione ogni giorno: i senior si aspettano che i junior sappiano cosa si è mosso e come incide su deal e pitch in corso.'
        )
      },
      { type: 'exercise', questionId: 'int-mv-q1' },
      { type: 'exercise', questionId: 'int-mv-q2' },
      { type: 'exercise', questionId: 'int-mv-q3' },
      {
        type: 'interview',
        question: t(
          'If central banks started cutting rates faster than expected, what would you expect to happen to M&A and leveraged finance activity?',
          'Se le banche centrali iniziassero a tagliare i tassi più velocemente del previsto, cosa ti aspetteresti per M&A e leveraged finance?'
        ),
        answer: t(
          'I would expect activity to pick up, with a caveat. Lower rates reduce the cost of debt and discount rates, so leveraged buyers can support more debt and pay higher multiples, and the valuation gap between buyers and sellers tends to narrow — sponsors with capital to deploy would likely be the first to move, and IPO windows could reopen. The caveat is why rates are falling: if it is because inflation is under control, that is supportive; if it is because growth is deteriorating sharply, earnings uncertainty and wider credit spreads could offset the benefit.',
          'Mi aspetterei una ripresa dell’attività, con una cautela. Tassi più bassi riducono costo del debito e tassi di sconto, quindi gli acquirenti a leva possono sostenere più debito e pagare multipli più alti, e la distanza di valutazione tra acquirenti e venditori tende a ridursi — i fondi con capitale da investire si muoverebbero probabilmente per primi, e le finestre per le IPO potrebbero riaprirsi. La cautela riguarda il perché dei tagli: se l’inflazione è sotto controllo, è positivo; se la crescita sta peggiorando bruscamente, incertezza sugli utili e spread più ampi potrebbero compensare il beneficio.'
        )
      },
      {
        type: 'mistakes',
        items: [
          t('Listing headlines without explaining how they connect.', 'Elencare titoli senza spiegare come si collegano.'),
          t('Quoting precise numbers you are not sure of. Approximate and correct beats precise and wrong.', 'Citare numeri precisi di cui non si è sicuri. Approssimativo e corretto batte preciso e sbagliato.'),
          t('Having no opinion, or an opinion with no reasoning.', 'Non avere un’opinione, o averne una senza ragionamento.'),
          t('Ignoring the link to banking activity — always end with what it means for deals.', 'Ignorare il collegamento con l’attività di banca — chiudi sempre con cosa significa per i deal.')
        ]
      },
      {
        type: 'summary',
        items: [
          t('A view = facts + causation + opinion + what would change your mind.', 'Una view = fatti + nessi causali + opinione + cosa ti farebbe cambiare idea.'),
          t('Track a small dashboard weekly: rates, bonds, equities, credit, FX, deals.', 'Segui ogni settimana un piccolo cruscotto: tassi, titoli di Stato, azionario, credito, cambi, deal.'),
          t('Chain: macro → policy → rates → cost of capital → valuations → deal activity.', 'Catena: macro → politica monetaria → tassi → costo del capitale → valutazioni → attività sui deal.')
        ]
      }
    ],
    questions: [
      {
        id: 'int-mv-q1',
        kind: 'numeric',
        topic: 'market-view',
        difficulty: 1,
        objective: t('Compute a government bond spread in basis points.', 'Calcolare uno spread tra titoli di Stato in punti base.'),
        prompt: t(
          'Hypothetically, the 10-year BTP yields 3.60% and the 10-year Bund yields 2.60%. What is the BTP–Bund spread in basis points?',
          'In via ipotetica, il BTP decennale rende il 3,60% e il Bund decennale il 2,60%. Qual è lo spread BTP–Bund in punti base?'
        ),
        answer: 100,
        unit: 'bp',
        tolerance: { abs: 0.5 },
        verify: { fn: 'diff', args: [360, 260] },
        explanation: t(
          '3.60% − 2.60% = 1.00 percentage point = 100 basis points (1 bp = 0.01%). The spread measures the extra yield investors demand to hold Italian rather than German government debt.',
          '3,60% − 2,60% = 1,00 punto percentuale = 100 punti base (1 pb = 0,01%). Lo spread misura il rendimento aggiuntivo richiesto per detenere debito pubblico italiano anziché tedesco.'
        )
      },
      {
        id: 'int-mv-q2',
        kind: 'mcq',
        topic: 'market-view',
        difficulty: 2,
        objective: t('Link rate moves to equity valuations by duration.', 'Collegare i movimenti dei tassi alle valutazioni azionarie secondo la duration.'),
        prompt: t('Long-term yields fall sharply while earnings expectations are unchanged. Which stocks would you expect to benefit most?', 'I rendimenti a lungo termine scendono bruscamente mentre le attese sugli utili restano invariate. Quali titoli ti aspetteresti beneficiare di più?'),
        choices: [
          t('Banks, because lower rates widen net interest margins', 'Le banche, perché tassi più bassi ampliano il margine di interesse'),
          t('High-growth companies whose cash flows are mostly far in the future', 'Le società ad alta crescita i cui flussi sono soprattutto lontani nel tempo'),
          t('Mature companies with stable, near-term cash flows', 'Le società mature con flussi stabili e vicini nel tempo'),
          t('All stocks equally, since the discount rate falls for everyone', 'Tutti i titoli allo stesso modo, perché il tasso di sconto scende per tutti')
        ],
        correct: 1,
        explanation: t(
          'Long-duration equities gain most because distant cash flows are most sensitive to the discount rate. Banks tend to see margin pressure when rates fall; near-term cash flows are less rate-sensitive; and the effect is not uniform precisely because of duration.',
          'I titoli a lunga duration guadagnano di più perché i flussi lontani sono i più sensibili al tasso di sconto. Le banche tendono a subire pressione sui margini quando i tassi scendono; i flussi vicini sono meno sensibili; e l’effetto non è uniforme proprio per la duration.'
        )
      },
      {
        id: 'int-mv-q3',
        kind: 'multi',
        topic: 'market-view',
        difficulty: 1,
        objective: t('Identify the components of a strong market view.', 'Identificare le componenti di una buona view di mercato.'),
        prompt: t('Which elements make a market view strong in an interview? Select all that apply.', 'Quali elementi rendono efficace una view di mercato al colloquio? Seleziona tutte le risposte corrette.'),
        choices: [
          t('Approximate, accurate levels of key indicators', 'Livelli approssimativi ma corretti degli indicatori chiave'),
          t('A causal explanation linking macro to deal activity', 'Una spiegazione causale che collega la macro all’attività sui deal'),
          t('A forecast stated with total certainty', 'Una previsione espressa con certezza assoluta'),
          t('What would make you change your view', 'Cosa ti farebbe cambiare view'),
          t('As many headlines as possible in 90 seconds', 'Quanti più titoli possibile in 90 secondi')
        ],
        correct: [0, 1, 3],
        explanation: t(
          'Accurate facts, causation and falsifiability show judgement. Total certainty sounds naive in markets, and a stream of headlines without links shows reading, not thinking.',
          'Fatti corretti, nessi causali e falsificabilità mostrano giudizio. La certezza assoluta sui mercati suona ingenua, e una raffica di titoli senza collegamenti mostra lettura, non ragionamento.'
        )
      }
    ],
    flashcards: [
      { id: 'fc-int-mv-1', topic: 'market-view', front: t('Four parts of a market view?', 'Quattro parti di una view di mercato?'), back: t('Facts, causation, opinion, what would change your mind.', 'Fatti, nessi causali, opinione, cosa ti farebbe cambiare idea.') },
      { id: 'fc-int-mv-2', topic: 'market-view', front: t('The banker’s causal chain?', 'La catena causale del banker?'), back: t('Growth/inflation → policy → rates → cost of capital & spreads → valuations → deal activity.', 'Crescita/inflazione → politica monetaria → tassi → costo del capitale e spread → valutazioni → attività sui deal.') },
      { id: 'fc-int-mv-3', topic: 'market-view', front: t('1 basis point equals?', '1 punto base equivale a?'), back: t('0.01 percentage points (1/100 of 1%).', '0,01 punti percentuali (1/100 dell’1%).') },
      { id: 'fc-int-mv-4', topic: 'market-view', front: t('Which equities are most sensitive to long-term rates?', 'Quali titoli sono più sensibili ai tassi a lungo termine?'), back: t('Long-duration (high-growth) equities whose value lies in distant cash flows.', 'I titoli a lunga duration (alta crescita), il cui valore sta nei flussi lontani.') }
    ]
  }
];
