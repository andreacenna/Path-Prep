import type { Lesson } from '../types';

/**
 * Academy 1 — Modules A6 (Consolidated Financial Statements) and A7 (Accounting for M&A).
 * Frameworks: IFRS (IFRS 3, IFRS 10, IFRS 11, IAS 28, IAS 12, IAS 36), US GAAP (ASC 805, ASC 810, ASC 323),
 * Italian GAAP (D.Lgs. 127/1991, art. 2359 c.c., OIC 17).
 */

const SRC_IFRS10 = { label: 'IFRS Foundation — IFRS 10 Consolidated Financial Statements', url: 'https://www.ifrs.org/issued-standards/list-of-standards/ifrs-10-consolidated-financial-statements/' };
const SRC_IFRS11 = { label: 'IFRS Foundation — IFRS 11 Joint Arrangements', url: 'https://www.ifrs.org/issued-standards/list-of-standards/ifrs-11-joint-arrangements/' };
const SRC_IAS28 = { label: 'IFRS Foundation — IAS 28 Investments in Associates and Joint Ventures', url: 'https://www.ifrs.org/issued-standards/list-of-standards/ias-28-investments-in-associates/' };
const SRC_IFRS3 = { label: 'IFRS Foundation — IFRS 3 Business Combinations', url: 'https://www.ifrs.org/issued-standards/list-of-standards/ifrs-3-business-combinations/' };
const SRC_IAS12 = { label: 'IFRS Foundation — IAS 12 Income Taxes', url: 'https://www.ifrs.org/issued-standards/list-of-standards/ias-12-income-taxes/' };
const SRC_IAS36 = { label: 'IFRS Foundation — IAS 36 Impairment of Assets', url: 'https://www.ifrs.org/issued-standards/list-of-standards/ias-36-impairment-of-assets/' };
const SRC_IAS7 = { label: 'IFRS Foundation — IAS 7 Statement of Cash Flows', url: 'https://www.ifrs.org/issued-standards/list-of-standards/ias-7-statement-of-cash-flows/' };
const SRC_ASC805 = { label: 'FASB — ASC 805 Business Combinations / ASC 810 Consolidation (Accounting Standards Codification)', url: 'https://asc.fasb.org/' };
const SRC_OIC17 = { label: 'Fondazione OIC — OIC 17 Bilancio consolidato e metodo del patrimonio netto', url: 'https://www.fondazioneoic.eu/' };
const SRC_2359 = { label: 'Codice civile, art. 2359 (società controllate e collegate) — Normattiva', url: 'https://www.normattiva.it/' };
const SRC_127 = { label: 'D.Lgs. 9 aprile 1991, n. 127 (bilancio consolidato) — Normattiva', url: 'https://www.normattiva.it/' };

export const lessons: Lesson[] = [
  /* ============================================================ */
  /* A6.1 Control, significant influence, joint arrangements       */
  /* ============================================================ */
  {
    id: 'acc-control-influence',
    academyId: 'accounting',
    moduleId: 'A6',
    mode: 'deep',
    minutes: 14,
    difficulty: 2,
    reviewed: '2026-10',
    objective: {
      en: 'Classify an investment as a subsidiary, joint arrangement, associate or financial asset under IFRS 10, IFRS 11 and IAS 28 (with US GAAP and Italian GAAP references), and pick the right accounting method.',
      it: 'Classificare una partecipazione come controllata, accordo a controllo congiunto, collegata o attività finanziaria secondo IFRS 10, IFRS 11 e IAS 28 (con riferimenti a US GAAP e OIC) e scegliere il metodo contabile corretto.'
    },
    screens: [
      {
        type: 'intuition',
        title: { en: 'How much say do you have?', it: 'Quanto conti davvero?' },
        body: {
          en: 'When a company owns shares in another company, the accounting depends on **influence, not on the percentage alone**.\n\n- If you **run the show** → you control it → you consolidate 100% of its assets, liabilities, revenues and costs.\n- If you **share control** with partners → joint arrangement.\n- If you have a **seat at the table but not the final say** → significant influence → equity method.\n- If you are **just a passive shareholder** → financial asset (IFRS 9).\n\nPercentages are only presumptions; contracts and facts decide.',
          it: 'Quando una società detiene azioni di un’altra, la contabilizzazione dipende dall’**influenza, non dalla sola percentuale**.\n\n- Se **comandi tu** → hai il controllo → consolidi il 100% di attività, passività, ricavi e costi.\n- Se **condividi il controllo** con dei partner → accordo a controllo congiunto.\n- Se **siedi al tavolo ma non decidi** → influenza notevole → metodo del patrimonio netto.\n- Se sei **un semplice socio passivo** → attività finanziaria (IFRS 9).\n\nLe percentuali sono solo presunzioni: decidono contratti e fatti.'
        }
      },
      {
        type: 'technical',
        title: { en: 'IFRS 10: the three elements of control', it: 'IFRS 10: i tre elementi del controllo' },
        body: {
          en: 'An investor controls an investee when it has **all three** (IFRS 10.7):\n\n- **Power**: existing rights that give the current ability to direct the **relevant activities** (those that significantly affect returns) — voting rights, potential voting rights that are substantive, contractual rights.\n- **Exposure, or rights, to variable returns** from its involvement (dividends, synergies, fees, changes in value).\n- **Link**: the ability to use its power to affect the amount of those returns.\n\nControl can exist **below 50%** ("de facto control": a large holding while the rest is widely dispersed) and can be **absent above 50%** (e.g. a contract hands the relevant decisions to someone else). A decision-maker acting only as an **agent** for others does not control.',
          it: 'Un investitore controlla una partecipata quando ha **tutti e tre** gli elementi (IFRS 10.7):\n\n- **Potere**: diritti esistenti che danno la capacità attuale di dirigere le **attività rilevanti** (quelle che incidono in modo significativo sui rendimenti) — diritti di voto, diritti di voto potenziali sostanziali, diritti contrattuali.\n- **Esposizione, o diritti, a rendimenti variabili** derivanti dal rapporto (dividendi, sinergie, commissioni, variazioni di valore).\n- **Correlazione**: la capacità di usare il potere per incidere sull’ammontare di tali rendimenti.\n\nIl controllo può esistere **sotto il 50%** (controllo "de facto": quota rilevante con il resto del capitale molto frazionato) e può **mancare sopra il 50%** (es. un contratto attribuisce ad altri le decisioni rilevanti). Chi decide solo come **agente** per conto di altri non controlla.'
        }
      },
      {
        type: 'technical',
        title: { en: 'Significant influence and joint arrangements', it: 'Influenza notevole e accordi congiunti' },
        body: {
          en: '**IAS 28 — significant influence**: the power to participate in financial and operating policy decisions, without control. Holding **20% or more** of the voting power is **presumed** to give it; below 20% presumed not — both rebuttable. Indicators: board representation, participation in policy-making (incl. dividends), material transactions, interchange of managers, essential technical information.\n\n**IFRS 11 — joint control**: contractually agreed sharing of control; decisions on relevant activities need **unanimous consent** of the parties sharing control.\n- **Joint operation**: parties have rights to the **assets** and obligations for the **liabilities** → each recognises its share of assets, liabilities, revenues, expenses.\n- **Joint venture**: parties have rights to the **net assets** (typically a separate vehicle) → **equity method**. Proportionate consolidation is not allowed under IFRS 11.',
          it: '**IAS 28 — influenza notevole**: il potere di partecipare alle decisioni sulle politiche finanziarie e gestionali, senza averne il controllo. Il possesso di **almeno il 20%** dei diritti di voto la fa **presumere**; sotto il 20% si presume l’assenza — presunzioni relative. Indicatori: rappresentanza nel CdA, partecipazione alle decisioni (compresi i dividendi), operazioni rilevanti, interscambio di dirigenti, informazioni tecniche essenziali.\n\n**IFRS 11 — controllo congiunto**: condivisione del controllo stabilita contrattualmente; le decisioni sulle attività rilevanti richiedono il **consenso unanime** delle parti.\n- **Joint operation (attività a controllo congiunto)**: le parti hanno diritti sulle **attività** e obbligazioni per le **passività** → ciascuna rileva la propria quota di attività, passività, ricavi e costi.\n- **Joint venture**: le parti hanno diritti sull’**attivo netto** (di solito un veicolo separato) → **metodo del patrimonio netto**. Il consolidamento proporzionale non è ammesso dall’IFRS 11.'
        }
      },
      {
        type: 'technical',
        title: { en: 'US GAAP and Italian GAAP', it: 'US GAAP e principi italiani' },
        body: {
          en: '**US GAAP (ASC 810)** uses two models: the **voting interest model** (generally a controlling financial interest = majority of voting shares) and the **variable interest entity (VIE) model** (consolidate if you have the power to direct the most significant activities and the obligation to absorb losses / right to receive benefits that could be significant). ASC 323 uses the same **20%** presumption for significant influence.\n\n**Italian GAAP**: control is defined by **art. 2359 c.c.** (majority of votes in the ordinary shareholders’ meeting, votes sufficient for dominant influence, or dominant influence by contract), referenced by **D.Lgs. 127/1991**. An associate (collegata) is presumed with at least **one fifth** of the votes, or **one tenth** if the investee’s shares are listed on regulated markets. **OIC 17** sets the consolidation and equity method rules; D.Lgs. 127/1991 (art. 37) still **permits proportionate consolidation** of jointly controlled entities.',
          it: '**US GAAP (ASC 810)** usa due modelli: il **voting interest model** (in genere controllo = maggioranza dei voti) e il **modello delle variable interest entity (VIE)** (si consolida se si ha il potere di dirigere le attività più significative e l’obbligo di assorbire perdite / il diritto a benefici potenzialmente significativi). L’ASC 323 adotta la stessa presunzione del **20%** per l’influenza notevole.\n\n**Principi italiani**: il controllo è definito dall’**art. 2359 c.c.** (maggioranza dei voti nell’assemblea ordinaria, voti sufficienti per un’influenza dominante, o influenza dominante in virtù di vincoli contrattuali), richiamato dal **D.Lgs. 127/1991**. La collegata si presume con almeno **un quinto** dei voti, o **un decimo** se la partecipata ha azioni quotate in mercati regolamentati. L’**OIC 17** disciplina consolidamento e metodo del patrimonio netto; il D.Lgs. 127/1991 (art. 37) **consente ancora il consolidamento proporzionale** delle imprese a controllo congiunto.'
        },
        table: {
          caption: { en: 'Relationship → accounting in the consolidated accounts (IFRS)', it: 'Tipo di rapporto → contabilizzazione nel consolidato (IFRS)' },
          headers: [
            { en: 'Relationship', it: 'Rapporto' },
            { en: 'Typical stake', it: 'Quota tipica' },
            { en: 'Method', it: 'Metodo' }
          ],
          rows: [
            [{ en: 'Subsidiary (control)', it: 'Controllata (controllo)' }, '>50%', { en: 'Full consolidation + NCI', it: 'Consolidamento integrale + terzi' }],
            [{ en: 'Joint operation', it: 'Joint operation' }, { en: 'shared', it: 'condiviso' }, { en: 'Own share of assets, liabilities, P&L', it: 'Quota di attività, passività e CE' }],
            [{ en: 'Joint venture', it: 'Joint venture' }, { en: 'shared', it: 'condiviso' }, { en: 'Equity method', it: 'Patrimonio netto' }],
            [{ en: 'Associate (sig. influence)', it: 'Collegata (infl. notevole)' }, '20–50%', { en: 'Equity method', it: 'Patrimonio netto' }],
            [{ en: 'Passive investment', it: 'Investimento passivo' }, '<20%', { en: 'IFRS 9 (FVTPL or FVOCI)', it: 'IFRS 9 (FVTPL o FVOCI)' }]
          ]
        }
      },
      {
        type: 'formula',
        formulas: [
          {
            name: { en: 'Control test (IFRS 10.7)', it: 'Test del controllo (IFRS 10.7)' },
            expr: 'Control = Power AND Exposure to variable returns AND Link (power affects returns)'
          },
          {
            name: { en: 'Effective (economic) interest through a chain', it: 'Interessenza effettiva (economica) lungo una catena' },
            expr: 'Effective % in C = % of P in A × % of A in C (+ any direct % of P in C)',
            vars: [
              { sym: 'Control', desc: { en: 'Judged on voting/decision rights at each level of the chain', it: 'Si valuta sui diritti di voto/decisionali a ogni livello della catena' } },
              { sym: 'Effective %', desc: { en: 'Drives profit attribution between parent and NCI', it: 'Determina la ripartizione dell’utile tra capogruppo e terzi' } }
            ]
          }
        ],
        note: {
          en: 'Control and economic interest are different: you may control a company in which you own less than half of the economics.',
          it: 'Controllo e interessenza economica sono diversi: si può controllare una società di cui si possiede meno della metà dei diritti economici.'
        }
      },
      {
        type: 'example',
        title: { en: 'A group chart', it: 'La struttura di un gruppo' },
        body: {
          en: 'Holding S.p.A. owns 80% of Alfa. Alfa owns 60% of Beta. Holding also owns 25% of Gamma directly, and Alfa owns 30% of Gamma (all voting shares, one share = one vote).\n\n- **Beta**: Holding controls Alfa, Alfa controls Beta → Beta is consolidated. Effective interest 80% × 60% = **48%**; NCI in Beta = 52%.\n- **Gamma**: votes controlled by Holding = 25% direct + 30% via controlled Alfa = **55%** → subsidiary. Effective interest = 25% + 80% × 30% = **49%**.',
          it: 'Holding S.p.A. possiede l’80% di Alfa. Alfa possiede il 60% di Beta. Holding possiede inoltre direttamente il 25% di Gamma e Alfa il 30% di Gamma (tutte azioni ordinarie, un’azione = un voto).\n\n- **Beta**: Holding controlla Alfa, Alfa controlla Beta → Beta si consolida. Interessenza effettiva 80% × 60% = **48%**; terzi in Beta = 52%.\n- **Gamma**: voti controllati da Holding = 25% diretto + 30% tramite la controllata Alfa = **55%** → controllata. Interessenza effettiva = 25% + 80% × 30% = **49%**.'
        },
        table: {
          headers: [
            { en: 'Entity', it: 'Società' },
            { en: 'Votes controlled', it: 'Voti controllati' },
            { en: 'Effective interest', it: 'Interessenza effettiva' },
            { en: 'Treatment', it: 'Trattamento' }
          ],
          rows: [
            ['Alfa', '80%', '80%', { en: 'Full consolidation', it: 'Integrale' }],
            ['Beta', '60%', '48%', { en: 'Full consolidation', it: 'Integrale' }],
            ['Gamma', '55%', '49%', { en: 'Full consolidation', it: 'Integrale' }]
          ]
        }
      },
      {
        type: 'realworld',
        body: {
          en: 'Analysts meet these classifications every time they build a comps sheet. Large groups often hold listed subsidiaries with sizeable minorities and strategic stakes in associates. Getting the perimeter right matters: a subsidiary’s **full EBITDA** sits in group EBITDA (so NCI must be added in the EV bridge), while an associate’s profit appears only as one line below EBIT (so its value is subtracted). Footnotes on the "scope of consolidation" (area di consolidamento) are where you check this.',
          it: 'Gli analisti incontrano queste classificazioni ogni volta che costruiscono una tabella di comparables. I grandi gruppi detengono spesso controllate quotate con quote di terzi rilevanti e partecipazioni strategiche in collegate. Definire bene il perimetro è decisivo: l’**EBITDA intero** di una controllata confluisce nell’EBITDA di gruppo (quindi nel bridge verso l’EV si sommano i terzi), mentre l’utile di una collegata compare solo in una riga sotto l’EBIT (quindi il suo valore si sottrae). La verifica si fa nelle note sull’"area di consolidamento".'
        }
      },
      { type: 'exercise', questionId: 'acc-ci-q1' },
      { type: 'exercise', questionId: 'acc-ci-q2' },
      { type: 'exercise', questionId: 'acc-ci-q3' },
      {
        type: 'interview',
        question: { en: 'Can a company consolidate a business it owns 40% of?', it: 'Una società può consolidare un’impresa di cui possiede il 40%?' },
        answer: {
          en: 'Yes. Under IFRS 10 consolidation follows control, not ownership. With 40% you can control if you have power over the relevant activities — for example the other 60% is widely dispersed and never coordinates (de facto control), you hold substantive potential voting rights, or a shareholders’ agreement gives you the right to appoint most of the board. You must also be exposed to variable returns and be able to use that power to affect them. You would then consolidate 100% and show 60% as non-controlling interests.',
          it: 'Sì. Secondo l’IFRS 10 si consolida in base al controllo, non alla quota posseduta. Con il 40% si può avere il controllo se si ha potere sulle attività rilevanti — per esempio perché il restante 60% è molto frazionato e non si coordina (controllo de facto), perché si detengono diritti di voto potenziali sostanziali o perché un patto parasociale attribuisce il diritto di nominare la maggioranza del CdA. Serve inoltre l’esposizione a rendimenti variabili e la capacità di usare il potere per incidere su di essi. In tal caso si consolida al 100% e il 60% si presenta come interessenze di terzi.'
        }
      },
      {
        type: 'mistakes',
        items: [
          { en: 'Using 50% as a hard rule. IFRS 10 is principle-based: power, variable returns and the link between them decide.', it: 'Usare il 50% come regola rigida. L’IFRS 10 si basa su principi: decidono potere, rendimenti variabili e correlazione tra i due.' },
          { en: 'Confusing control (votes at each level) with the effective economic interest (product of the percentages).', it: 'Confondere il controllo (voti a ogni livello) con l’interessenza economica effettiva (prodotto delle percentuali).' },
          { en: 'Proportionately consolidating a joint venture under IFRS. It must use the equity method; only joint operations are accounted for line by line (share of assets and liabilities).', it: 'Consolidare proporzionalmente una joint venture in IFRS. Va usato il metodo del patrimonio netto; solo le joint operation si rilevano voce per voce (quota di attività e passività).' },
          { en: 'Forgetting the lower Italian threshold for associates of listed investees (one tenth of the votes under art. 2359 c.c.).', it: 'Dimenticare la soglia italiana più bassa per le collegate quotate (un decimo dei voti ex art. 2359 c.c.).' }
        ]
      },
      {
        type: 'summary',
        items: [
          { en: 'Control (IFRS 10) = power + exposure to variable returns + link → full consolidation.', it: 'Controllo (IFRS 10) = potere + esposizione a rendimenti variabili + correlazione → consolidamento integrale.' },
          { en: 'Significant influence (IAS 28), presumed at ≥20% → equity method.', it: 'Influenza notevole (IAS 28), presunta da ≥20% → metodo del patrimonio netto.' },
          { en: 'IFRS 11: joint operation → share of assets/liabilities; joint venture → equity method.', it: 'IFRS 11: joint operation → quota di attività/passività; joint venture → patrimonio netto.' },
          { en: 'US GAAP adds the VIE model; Italian GAAP relies on art. 2359 c.c., D.Lgs. 127/1991 and OIC 17.', it: 'Gli US GAAP aggiungono il modello VIE; i principi italiani si basano su art. 2359 c.c., D.Lgs. 127/1991 e OIC 17.' }
        ]
      }
    ],
    questions: [
      {
        id: 'acc-ci-q1',
        kind: 'mcq',
        topic: 'consolidation-scope',
        difficulty: 2,
        objective: { en: 'Distinguish joint operations from joint ventures under IFRS 11.', it: 'Distinguere joint operation e joint venture secondo IFRS 11.' },
        prompt: {
          en: 'Two partners set up a separate company, each with 50%; all key decisions need both. The partners have rights only to the net assets of the company. Under IFRS, how does each partner account for it in its consolidated statements?',
          it: 'Due partner costituiscono una società separata, ciascuno al 50%; tutte le decisioni chiave richiedono il consenso di entrambi. I partner hanno diritti solo sull’attivo netto della società. In IFRS, come la rileva ciascun partner nel proprio consolidato?'
        },
        choices: [
          { en: 'Full consolidation with 50% NCI', it: 'Consolidamento integrale con 50% di terzi' },
          { en: 'Proportionate consolidation (50% of each line)', it: 'Consolidamento proporzionale (50% di ogni voce)' },
          { en: 'Equity method, as a joint venture', it: 'Metodo del patrimonio netto, come joint venture' },
          { en: 'Fair value through profit or loss under IFRS 9', it: 'Fair value a conto economico secondo IFRS 9' }
        ],
        correct: 2,
        explanation: {
          en: 'Unanimous consent = joint control; rights to net assets = joint venture → equity method (IFRS 11.24, IAS 28). No partner controls alone, so no full consolidation. Proportionate consolidation was removed by IFRS 11 (it remains an option under Italian GAAP, D.Lgs. 127/1991 art. 37). IFRS 9 applies to passive stakes, not jointly controlled ones.',
          it: 'Consenso unanime = controllo congiunto; diritti sull’attivo netto = joint venture → metodo del patrimonio netto (IFRS 11.24, IAS 28). Nessun partner controlla da solo, quindi niente consolidamento integrale. Il consolidamento proporzionale è stato eliminato dall’IFRS 11 (resta un’opzione nei principi italiani, D.Lgs. 127/1991 art. 37). L’IFRS 9 si applica alle quote passive, non a quelle a controllo congiunto.'
        }
      },
      {
        id: 'acc-ci-q2',
        kind: 'numeric',
        topic: 'consolidation-scope',
        difficulty: 2,
        objective: { en: 'Compute the effective interest in an indirect subsidiary.', it: 'Calcolare l’interessenza effettiva in una controllata indiretta.' },
        prompt: {
          en: 'Parent owns 75% of Sub A; Sub A owns 60% of Sub B. What is Parent’s effective interest in Sub B (%)?',
          it: 'La capogruppo possiede il 75% di Sub A; Sub A possiede il 60% di Sub B. Qual è l’interessenza effettiva della capogruppo in Sub B (%)?'
        },
        answer: 45,
        unit: '%',
        verify: { fn: 'product', args: [100, 0.75, 0.6] },
        tolerance: { abs: 0.1 },
        explanation: {
          en: '75% × 60% = 45%. Sub B is still fully consolidated (Parent controls A, A controls B), with NCI of 55% in Sub B’s profit and net assets. Do not confuse this with "control": 45% economics but control through the chain.',
          it: '75% × 60% = 45%. Sub B resta consolidata integralmente (la capogruppo controlla A, A controlla B), con terzi al 55% di utile e attivo netto di Sub B. Non confondere con il "controllo": 45% di diritti economici, ma controllo lungo la catena.'
        }
      },
      {
        id: 'acc-ci-q3',
        kind: 'multi',
        topic: 'consolidation-scope',
        difficulty: 2,
        objective: { en: 'Recognise the IAS 28 indicators of significant influence.', it: 'Riconoscere gli indicatori di influenza notevole dello IAS 28.' },
        prompt: {
          en: 'An investor holds 15% of the votes. Which facts are IAS 28 indicators that it may nonetheless have significant influence? Select all that apply.',
          it: 'Un investitore detiene il 15% dei voti. Quali fatti sono indicatori IAS 28 di una possibile influenza notevole nonostante la quota? Seleziona tutte le risposte corrette.'
        },
        choices: [
          { en: 'It appoints 2 of 9 board members', it: 'Nomina 2 consiglieri su 9' },
          { en: 'It supplies essential technical know-how to the investee', it: 'Fornisce alla partecipata informazioni tecniche essenziali' },
          { en: 'It received a dividend last year', it: 'Ha incassato un dividendo l’anno scorso' },
          { en: 'Managers are regularly seconded between the two companies', it: 'Vi è un regolare interscambio di dirigenti tra le due società' },
          { en: 'The shares are listed and highly liquid', it: 'Le azioni sono quotate e molto liquide' }
        ],
        correct: [0, 1, 3],
        explanation: {
          en: 'IAS 28.6 lists board representation, participation in policy-making, material transactions, interchange of managerial personnel and provision of essential technical information. Receiving a dividend or the liquidity of the shares says nothing about influence — any passive shareholder gets dividends.',
          it: 'Lo IAS 28.6 elenca rappresentanza nel CdA, partecipazione alle decisioni, operazioni rilevanti, interscambio di dirigenti e fornitura di informazioni tecniche essenziali. Incassare un dividendo o la liquidità del titolo non dicono nulla sull’influenza — qualsiasi socio passivo riceve dividendi.'
        }
      },
      {
        id: 'acc-ci-q4',
        kind: 'numeric',
        topic: 'consolidation-scope',
        difficulty: 3,
        objective: { en: 'Separate votes controlled from effective interest with direct and indirect holdings.', it: 'Distinguere voti controllati e interessenza effettiva con partecipazioni dirette e indirette.' },
        prompt: {
          en: 'Holding owns 70% of Alfa and 20% of Gamma directly. Alfa owns 35% of Gamma. What is Holding’s effective economic interest in Gamma (%)? (It controls 55% of Gamma’s votes.)',
          it: 'Holding possiede il 70% di Alfa e direttamente il 20% di Gamma. Alfa possiede il 35% di Gamma. Qual è l’interessenza economica effettiva di Holding in Gamma (%)? (Controlla il 55% dei voti di Gamma.)'
        },
        answer: 44.5,
        unit: '%',
        verify: { fn: 'sum', args: [20, 24.5] },
        tolerance: { abs: 0.1 },
        steps: [
          { en: 'Indirect: 70% × 35% = 24.5%', it: 'Indiretta: 70% × 35% = 24,5%' },
          { en: 'Effective: 20% + 24.5% = 44.5% → NCI in Gamma = 55.5%', it: 'Effettiva: 20% + 24,5% = 44,5% → terzi in Gamma = 55,5%' }
        ],
        explanation: {
          en: 'Votes: 20% + 35% (Alfa is controlled, so all its votes count) = 55% → Gamma is a subsidiary. Economics: 20% + 70% × 35% = 44.5%. Adding 20% + 35% = 55% for the economic interest is the classic error.',
          it: 'Voti: 20% + 35% (Alfa è controllata, quindi contano tutti i suoi voti) = 55% → Gamma è una controllata. Diritti economici: 20% + 70% × 35% = 44,5%. Sommare 20% + 35% = 55% come interessenza economica è l’errore classico.'
        }
      }
    ],
    flashcards: [
      { id: 'fc-acc-ci-1', topic: 'consolidation-scope', front: { en: 'Three elements of control under IFRS 10?', it: 'I tre elementi del controllo secondo IFRS 10?' }, back: { en: 'Power over the investee; exposure or rights to variable returns; ability to use power to affect those returns.', it: 'Potere sulla partecipata; esposizione o diritti a rendimenti variabili; capacità di usare il potere per incidere su tali rendimenti.' } },
      { id: 'fc-acc-ci-2', topic: 'consolidation-scope', front: { en: 'IAS 28 presumption for significant influence?', it: 'Presunzione IAS 28 per l’influenza notevole?' }, back: { en: '≥20% of voting power presumed to give significant influence; <20% presumed not. Both rebuttable.', it: '≥20% dei voti fa presumere l’influenza notevole; <20% la esclude. Entrambe presunzioni relative.' } },
      { id: 'fc-acc-ci-3', topic: 'consolidation-scope', front: { en: 'Joint operation vs joint venture (IFRS 11)?', it: 'Differenza tra joint operation e joint venture (IFRS 11)?' }, back: { en: 'JO: rights to assets, obligations for liabilities → recognise own share. JV: rights to net assets → equity method.', it: 'JO: diritti sulle attività e obbligazioni per le passività → si rileva la propria quota. JV: diritti sull’attivo netto → patrimonio netto.' } },
      { id: 'fc-acc-ci-4', topic: 'consolidation-scope', front: { en: 'Italian presumption for an associate (art. 2359 c.c.)?', it: 'Presunzione di collegamento (art. 2359 c.c.)?' }, back: { en: 'At least one fifth of the votes in the ordinary meeting, or one tenth if shares are listed on regulated markets.', it: 'Almeno un quinto dei voti in assemblea ordinaria, o un decimo se le azioni sono quotate in mercati regolamentati.' } },
      { id: 'fc-acc-ci-5', topic: 'consolidation-scope', front: { en: 'What extra consolidation model exists under US GAAP?', it: 'Quale modello di consolidamento aggiuntivo esiste negli US GAAP?' }, back: { en: 'The variable interest entity (VIE) model in ASC 810, alongside the voting interest model.', it: 'Il modello delle variable interest entity (VIE) dell’ASC 810, accanto al voting interest model.' } }
    ],
    sources: [SRC_IFRS10, SRC_IFRS11, SRC_IAS28, SRC_ASC805, SRC_2359, SRC_127, SRC_OIC17]
  },

  /* ============================================================ */
  /* A6.2 Full consolidation mechanics                             */
  /* ============================================================ */
  {
    id: 'acc-full-consolidation',
    academyId: 'accounting',
    moduleId: 'A6',
    mode: 'deep',
    minutes: 15,
    difficulty: 2,
    reviewed: '2026-10',
    objective: {
      en: 'Prepare a consolidated balance sheet at the acquisition date: aggregate line by line, eliminate the investment against the subsidiary’s equity, recognise fair value adjustments and goodwill.',
      it: 'Redigere uno stato patrimoniale consolidato alla data di acquisizione: aggregare voce per voce, elidere la partecipazione contro il patrimonio netto della controllata, rilevare gli adeguamenti a fair value e l’avviamento.'
    },
    screens: [
      {
        type: 'intuition',
        title: { en: 'Replace one line with everything behind it', it: 'Sostituire una riga con tutto ciò che contiene' },
        body: {
          en: 'In its own (separate) accounts the parent shows the subsidiary as a single asset: **"Investment in S"**. Consolidated accounts present the group as **one economic entity**, so that one line is replaced by all of S’s assets and liabilities.\n\nIf we simply added the two balance sheets we would count S twice: once as the investment and once through its assets. So we **eliminate** the investment against S’s equity — and whatever the parent paid above S’s net assets becomes fair value adjustments and **goodwill**.',
          it: 'Nel proprio bilancio d’esercizio (separato) la capogruppo rappresenta la controllata come un’unica attività: **"Partecipazione in S"**. Il consolidato presenta il gruppo come **un’unica entità economica**, quindi quella riga viene sostituita da tutte le attività e passività di S.\n\nSe sommassimo semplicemente i due stati patrimoniali conteremmo S due volte: come partecipazione e attraverso le sue attività. Per questo si **elide** la partecipazione contro il patrimonio netto di S — e quanto pagato in più rispetto all’attivo netto di S diventa adeguamenti a fair value e **avviamento**.'
        }
      },
      {
        type: 'technical',
        title: { en: 'The consolidation procedure (IFRS 10.B86)', it: 'La procedura di consolidamento (IFRS 10.B86)' },
        body: {
          en: '1. **Uniform policies and reporting date**: align the subsidiary’s accounting policies with the group’s.\n2. **Aggregate** like items line by line: 100% of assets, liabilities, income, expenses and cash flows — even if ownership is below 100%.\n3. **Eliminate** the parent’s investment against the parent’s share of the subsidiary’s equity; recognise goodwill under IFRS 3.\n4. **Recognise NCI** for the share not owned (next lesson).\n5. **Eliminate intragroup** balances, transactions, unrealised profits and dividends in full.\n\nUnder IFRS 3 / ASC 805, the subsidiary’s identifiable assets and liabilities enter the group at **acquisition-date fair value**, not at book value.',
          it: '1. **Principi e data di riferimento uniformi**: allineare i criteri contabili della controllata a quelli del gruppo.\n2. **Aggregare** le voci omogenee riga per riga: il 100% di attività, passività, ricavi, costi e flussi di cassa — anche se la quota è inferiore al 100%.\n3. **Elidere** la partecipazione della capogruppo contro la sua quota di patrimonio netto della controllata; rilevare l’avviamento secondo l’IFRS 3.\n4. **Rilevare le interessenze di terzi** per la quota non posseduta (prossima lezione).\n5. **Elidere integralmente** saldi e operazioni infragruppo, utili non realizzati e dividendi.\n\nSecondo IFRS 3 / ASC 805, le attività e passività identificabili della controllata entrano nel gruppo al **fair value alla data di acquisizione**, non al valore contabile.'
        }
      },
      {
        type: 'formula',
        formulas: [
          {
            name: { en: 'Elimination difference (100% acquisition)', it: 'Differenza da annullamento (acquisizione al 100%)' },
            expr: 'Cost of investment − Book equity of S = Fair value step-ups + Goodwill',
            vars: [
              { sym: 'Fair value step-ups', desc: { en: 'FV − book value of identifiable assets and liabilities (net of deferred tax, see A7)', it: 'FV − valore contabile di attività e passività identificabili (al netto della fiscalità differita, vedi A7)' } },
              { sym: 'Goodwill', desc: { en: 'Residual: Consideration − FV of identifiable net assets', it: 'Residuo: Corrispettivo − FV dell’attivo netto identificabile' } }
            ]
          },
          {
            name: { en: 'Consolidated line', it: 'Voce consolidata' },
            expr: 'Consolidated = Parent + Subsidiary (100%) ± FV adjustments ± Eliminations'
          }
        ],
        note: {
          en: 'At the acquisition date, with 100% ownership, consolidated equity equals the parent’s own equity: S’s pre-acquisition equity is entirely eliminated.',
          it: 'Alla data di acquisizione, con il 100% di possesso, il patrimonio netto consolidato coincide con quello della capogruppo: il patrimonio netto di S ante acquisizione è interamente eliso.'
        }
      },
      {
        type: 'example',
        title: { en: 'Step 1 — the elimination difference', it: 'Passo 1 — la differenza da annullamento' },
        body: {
          en: 'On 1 Jan, Parent S.p.A. buys **100% of Sub S.r.l. for €400m** in cash. Sub’s book equity is €300m (share capital 100, retained earnings 200). A valuation shows Sub’s land is worth **€40m more** than book; all other items are at fair value. (Tax effects ignored here; A7 adds the deferred tax.)',
          it: 'Il 1° gennaio Parent S.p.A. acquista il **100% di Sub S.r.l. per €400m** in contanti. Il patrimonio netto contabile di Sub è €300m (capitale 100, utili a nuovo 200). Una perizia indica che i terreni di Sub valgono **€40m in più** del valore contabile; tutte le altre voci sono a fair value. (Effetti fiscali ignorati; in A7 aggiungiamo la fiscalità differita.)'
        },
        table: {
          headers: [{ en: 'Item', it: 'Voce' }, { en: '€m', it: '€m' }],
          rows: [
            [{ en: 'Consideration paid', it: 'Corrispettivo pagato' }, '400'],
            [{ en: 'Book equity of Sub', it: 'PN contabile di Sub' }, '(300)'],
            [{ en: 'Elimination difference', it: 'Differenza da annullamento' }, '100'],
            [{ en: 'Allocated to land (FV step-up)', it: 'Allocata ai terreni (plusvalore)' }, '(40)'],
            [{ en: 'Goodwill (residual)', it: 'Avviamento (residuo)' }, '60']
          ],
          totalRows: [2, 4]
        }
      },
      {
        type: 'example',
        title: { en: 'Step 2 — the consolidation worksheet', it: 'Passo 2 — il foglio di consolidamento' },
        body: {
          en: 'Elimination entry: **Dr** Sub share capital 100, **Dr** Sub retained earnings 200, **Dr** PP&E (land) 40, **Dr** Goodwill 60, **Cr** Investment in Sub 400.',
          it: 'Scrittura di elisione: **Dare** capitale di Sub 100, **Dare** utili a nuovo di Sub 200, **Dare** immobilizzazioni materiali (terreni) 40, **Dare** avviamento 60, **Avere** partecipazione in Sub 400.'
        },
        table: {
          headers: [
            { en: '€m', it: '€m' },
            { en: 'Parent', it: 'Parent' },
            { en: 'Sub', it: 'Sub' },
            { en: 'Adj.', it: 'Rettifiche' },
            { en: 'Consolidated', it: 'Consolidato' }
          ],
          rows: [
            [{ en: 'Goodwill', it: 'Avviamento' }, '0', '0', '+60', '60'],
            [{ en: 'Investment in Sub', it: 'Partecipazione in Sub' }, '400', '0', '−400', '0'],
            [{ en: 'PP&E', it: 'Immobilizzazioni materiali' }, '900', '350', '+40', '1,290'],
            [{ en: 'Inventory', it: 'Rimanenze' }, '200', '120', '', '320'],
            [{ en: 'Receivables', it: 'Crediti commerciali' }, '150', '80', '', '230'],
            [{ en: 'Cash', it: 'Cassa' }, '250', '50', '', '300'],
            [{ en: 'Total assets', it: 'Totale attivo' }, '1,900', '600', '−300', '2,200'],
            [{ en: 'Debt', it: 'Debiti finanziari' }, '600', '200', '', '800'],
            [{ en: 'Payables', it: 'Debiti commerciali' }, '200', '100', '', '300'],
            [{ en: 'Share capital', it: 'Capitale sociale' }, '500', '100', '−100', '500'],
            [{ en: 'Retained earnings', it: 'Utili a nuovo' }, '600', '200', '−200', '600'],
            [{ en: 'Total L + E', it: 'Totale passivo + PN' }, '1,900', '600', '−300', '2,200']
          ],
          totalRows: [6, 11]
        }
      },
      {
        type: 'realworld',
        body: {
          en: 'In IB this logic is the backbone of the **pro forma balance sheet** in a merger model: you add acquirer and target, wipe out the target’s equity, write up assets, create goodwill and add the acquisition debt (A7). In Italy, the same mechanics under OIC 17 are called "eliminazione della partecipazione" and the residual is the "differenza da annullamento"; under OIC the resulting goodwill is **amortised** (if its useful life cannot be reliably estimated, over no more than 10 years — OIC 24), whereas under IFRS it is only impairment-tested.',
          it: 'In IB questa logica è la base dello **stato patrimoniale pro forma** di un merger model: si sommano acquirente e target, si azzera il PN della target, si rivalutano le attività, si crea l’avviamento e si aggiunge il debito di acquisizione (A7). In Italia, con l’OIC 17, si parla di "eliminazione della partecipazione" e il residuo è la "differenza da annullamento"; secondo gli OIC l’avviamento che ne deriva si **ammortizza** (se la vita utile non è stimabile attendibilmente, in non oltre 10 anni — OIC 24), mentre in IFRS è soggetto solo a impairment test.'
        }
      },
      { type: 'exercise', questionId: 'acc-fcons-q1' },
      { type: 'exercise', questionId: 'acc-fcons-q2' },
      { type: 'exercise', questionId: 'acc-fcons-q3' },
      {
        type: 'interview',
        question: { en: 'Walk me through consolidating a 100%-owned subsidiary on the acquisition date.', it: 'Mi spieghi come si consolida una controllata al 100% alla data di acquisizione.' },
        answer: {
          en: 'I add parent and subsidiary line by line, then eliminate the parent’s investment against the subsidiary’s equity. The difference between price and book equity is first allocated to fair value step-ups of identifiable assets and liabilities, net of deferred tax, and the residual is goodwill. The subsidiary’s pre-deal equity disappears, so consolidated equity equals the parent’s equity. A neat check: in a cash deal, consolidated total assets equal the parent’s total assets plus the subsidiary’s liabilities.',
          it: 'Sommo capogruppo e controllata voce per voce, poi elido la partecipazione contro il patrimonio netto della controllata. La differenza tra prezzo e PN contabile si alloca prima ai plusvalori di attività e passività identificabili, al netto della fiscalità differita, e il residuo è avviamento. Il PN della controllata ante operazione scompare, quindi il PN consolidato coincide con quello della capogruppo. Una verifica rapida: in un’operazione per cassa, l’attivo consolidato è pari all’attivo della capogruppo più le passività della controllata.'
        }
      },
      {
        type: 'mistakes',
        items: [
          { en: 'Adding the subsidiary’s equity to group equity. Pre-acquisition equity of a subsidiary is always eliminated.', it: 'Sommare il PN della controllata al PN di gruppo. Il PN ante acquisizione della controllata si elide sempre.' },
          { en: 'Consolidating only the owned percentage of each line. Full consolidation takes 100% and shows the rest as NCI.', it: 'Consolidare solo la percentuale posseduta di ogni voce. Il consolidamento integrale prende il 100% e rappresenta il resto come terzi.' },
          { en: 'Calculating goodwill against book equity instead of fair value of identifiable net assets.', it: 'Calcolare l’avviamento sul PN contabile invece che sul fair value dell’attivo netto identificabile.' },
          { en: 'Forgetting to remove the "Investment in subsidiary" line — the balance sheet will not balance.', it: 'Dimenticare di eliminare la riga "Partecipazione nella controllata" — lo stato patrimoniale non quadra.' }
        ]
      },
      {
        type: 'summary',
        items: [
          { en: 'Aggregate 100% line by line; eliminate investment vs subsidiary equity.', it: 'Aggregare il 100% voce per voce; elidere partecipazione contro PN della controllata.' },
          { en: 'Price − book equity = FV step-ups + goodwill.', it: 'Prezzo − PN contabile = plusvalori a fair value + avviamento.' },
          { en: 'At the acquisition date (100% owned), consolidated equity = parent equity.', it: 'Alla data di acquisizione (100%), PN consolidato = PN della capogruppo.' },
          { en: 'IFRS/US GAAP: goodwill impairment-tested; OIC: goodwill amortised.', it: 'IFRS/US GAAP: avviamento soggetto a impairment; OIC: avviamento ammortizzato.' }
        ]
      }
    ],
    questions: [
      {
        id: 'acc-fcons-q1',
        kind: 'grid',
        topic: 'full-consolidation',
        difficulty: 3,
        objective: { en: 'Complete a consolidation worksheet at the acquisition date.', it: 'Completare un foglio di consolidamento alla data di acquisizione.' },
        prompt: {
          en: 'Alfa buys 100% of Beta for €250m cash. Beta’s book equity is €180m; Beta’s brand (unrecognised) has a fair value of €30m; ignore tax. Fill in the blanks (€m).',
          it: 'Alfa acquista il 100% di Beta per €250m in contanti. Il PN contabile di Beta è €180m; il marchio di Beta (non iscritto) ha un fair value di €30m; ignora le imposte. Completa le celle vuote (€m).'
        },
        unit: '€m',
        columns: [
          { en: 'Line', it: 'Voce' },
          { en: 'Alfa', it: 'Alfa' },
          { en: 'Beta', it: 'Beta' },
          { en: 'Adjustments', it: 'Rettifiche' },
          { en: 'Consolidated', it: 'Consolidato' }
        ],
        rows: [
          { label: { en: 'Goodwill', it: 'Avviamento' }, cells: [0, 0, { answer: 40, verify: { fn: 'goodwill', args: [250, 210] } }, { answer: 40, verify: { fn: 'goodwill', args: [250, 210] } }] },
          { label: { en: 'Brand', it: 'Marchio' }, cells: [0, 0, 30, { answer: 30, verify: { fn: 'sum', args: [0, 0, 30] } }] },
          { label: { en: 'Investment in Beta', it: 'Partecipazione in Beta' }, cells: [250, 0, -250, { answer: 0, verify: { fn: 'sum', args: [250, 0, -250] } }] },
          { label: { en: 'Other assets', it: 'Altre attività' }, cells: [750, 300, 0, { answer: 1050, verify: { fn: 'sum', args: [750, 300] } }] },
          { label: { en: 'Total assets', it: 'Totale attivo' }, cells: [1000, 300, { answer: -180, verify: { fn: 'sum', args: [40, 30, -250] } }, { answer: 1120, verify: { fn: 'sum', args: [40, 30, 0, 1050] } }] },
          { label: { en: 'Liabilities', it: 'Passività' }, cells: [400, 120, 0, { answer: 520, verify: { fn: 'sum', args: [400, 120] } }] },
          { label: { en: 'Equity', it: 'Patrimonio netto' }, cells: [600, 180, -180, { answer: 600, verify: { fn: 'sum', args: [600, 180, -180] } }] }
        ],
        explanation: {
          en: 'FV of identifiable net assets = 180 + 30 = 210 → goodwill = 250 − 210 = 40. The investment (250) is eliminated against Beta’s equity (180), the brand (30) and goodwill (40). Total assets: 40 + 30 + 0 + 1,050 = 1,120 = liabilities 520 + equity 600. Consolidated equity equals Alfa’s equity: buying a company for cash does not create group equity.',
          it: 'FV dell’attivo netto identificabile = 180 + 30 = 210 → avviamento = 250 − 210 = 40. La partecipazione (250) si elide contro il PN di Beta (180), il marchio (30) e l’avviamento (40). Totale attivo: 40 + 30 + 0 + 1.050 = 1.120 = passività 520 + PN 600. Il PN consolidato coincide con quello di Alfa: acquistare una società per cassa non crea patrimonio netto di gruppo.'
        }
      },
      {
        id: 'acc-fcons-q2',
        kind: 'numeric',
        topic: 'goodwill',
        difficulty: 2,
        objective: { en: 'Compute goodwill from consideration and fair value of net assets.', it: 'Calcolare l’avviamento da corrispettivo e fair value dell’attivo netto.' },
        prompt: {
          en: 'A parent pays €900m for 100% of a target with book equity of €600m. Fair value step-ups on identifiable assets total €150m (ignore tax). Goodwill (€m)?',
          it: 'Una capogruppo paga €900m per il 100% di una target con PN contabile di €600m. I plusvalori a fair value sulle attività identificabili ammontano a €150m (ignora le imposte). Avviamento (€m)?'
        },
        answer: 150,
        unit: '€m',
        verify: { fn: 'goodwill', args: [900, 750] },
        explanation: {
          en: 'FV of identifiable net assets = 600 + 150 = 750; goodwill = 900 − 750 = 150. Using book equity (900 − 600 = 300) overstates goodwill by ignoring the step-ups.',
          it: 'FV dell’attivo netto identificabile = 600 + 150 = 750; avviamento = 900 − 750 = 150. Usare il PN contabile (900 − 600 = 300) sovrastima l’avviamento ignorando i plusvalori.'
        }
      },
      {
        id: 'acc-fcons-q3',
        kind: 'mcq',
        topic: 'full-consolidation',
        difficulty: 1,
        objective: { en: 'Understand consolidated equity at the acquisition date.', it: 'Comprendere il PN consolidato alla data di acquisizione.' },
        prompt: {
          en: 'Parent (equity €1,100m) acquires 100% of Sub (equity €300m) for cash. Consolidated equity immediately after the deal is:',
          it: 'Parent (PN €1.100m) acquista per cassa il 100% di Sub (PN €300m). Il PN consolidato subito dopo l’operazione è:'
        },
        choices: [
          { en: '€1,400m — the sum of both companies', it: '€1.400m — la somma delle due società' },
          { en: '€800m — parent equity less Sub equity', it: '€800m — PN della capogruppo meno PN di Sub' },
          { en: '€1,100m — Sub’s equity is eliminated', it: '€1.100m — il PN di Sub viene eliso' },
          { en: 'It depends on the goodwill amount', it: 'Dipende dall’importo dell’avviamento' }
        ],
        correct: 2,
        explanation: {
          en: 'Sub’s pre-acquisition equity is eliminated against the investment, so only the parent’s equity remains (€1,100m). Goodwill changes the asset mix, not equity. Adding both equities double counts Sub.',
          it: 'Il PN ante acquisizione di Sub si elide contro la partecipazione, quindi resta solo il PN della capogruppo (€1.100m). L’avviamento cambia la composizione dell’attivo, non il PN. Sommare i due PN conta Sub due volte.'
        }
      },
      {
        id: 'acc-fcons-q4',
        kind: 'order',
        topic: 'full-consolidation',
        difficulty: 2,
        objective: { en: 'Sequence the consolidation procedure.', it: 'Ordinare le fasi della procedura di consolidamento.' },
        prompt: { en: 'Put the consolidation steps in a logical order.', it: 'Metti in ordine logico le fasi del consolidamento.' },
        items: [
          { en: 'Align the subsidiary’s accounting policies and reporting date', it: 'Uniformare criteri contabili e data di riferimento della controllata' },
          { en: 'Remeasure identifiable assets and liabilities at acquisition-date fair value', it: 'Rimisurare attività e passività identificabili al fair value alla data di acquisizione' },
          { en: 'Aggregate parent and subsidiary line by line (100%)', it: 'Aggregare capogruppo e controllata voce per voce (100%)' },
          { en: 'Eliminate the investment against equity and recognise goodwill and NCI', it: 'Elidere la partecipazione contro il PN e rilevare avviamento e terzi' },
          { en: 'Eliminate intragroup balances, transactions and unrealised profits', it: 'Elidere saldi, operazioni e utili non realizzati infragruppo' }
        ],
        explanation: {
          en: 'Harmonise first (otherwise you add apples and oranges), bring the subsidiary to fair value, aggregate, then eliminate the investment (creating goodwill/NCI) and finally the intragroup items. In practice steps 3–5 are done in the same worksheet, but this is the logic.',
          it: 'Prima si uniforma (altrimenti si sommano grandezze non omogenee), si porta la controllata a fair value, si aggrega, poi si elide la partecipazione (generando avviamento/terzi) e infine le partite infragruppo. In pratica le fasi 3–5 avvengono nello stesso foglio di lavoro, ma la logica è questa.'
        }
      }
    ],
    flashcards: [
      { id: 'fc-acc-fcons-1', topic: 'full-consolidation', front: { en: 'What does full consolidation aggregate?', it: 'Cosa aggrega il consolidamento integrale?' }, back: { en: '100% of the subsidiary’s assets, liabilities, income, expenses and cash flows, regardless of the ownership %.', it: 'Il 100% di attività, passività, ricavi, costi e flussi della controllata, indipendentemente dalla quota.' } },
      { id: 'fc-acc-fcons-2', topic: 'full-consolidation', front: { en: 'Elimination entry at acquisition (100%)?', it: 'Scrittura di elisione all’acquisizione (100%)?' }, back: { en: 'Dr subsidiary equity, Dr FV step-ups, Dr goodwill; Cr investment in subsidiary.', it: 'Dare PN della controllata, Dare plusvalori, Dare avviamento; Avere partecipazione.' } },
      { id: 'fc-acc-fcons-3', topic: 'full-consolidation', front: { en: 'Italian term for price minus subsidiary equity?', it: 'Come si chiama in italiano prezzo meno PN della controllata?' }, back: { en: '"Differenza da annullamento" (OIC 17).', it: '"Differenza da annullamento" (OIC 17).' } },
      { id: 'fc-acc-fcons-4', topic: 'goodwill', front: { en: 'Goodwill after recognition: IFRS vs OIC?', it: 'Avviamento dopo l’iscrizione: IFRS vs OIC?' }, back: { en: 'IFRS: not amortised, annual impairment test (IAS 36). OIC 24: amortised over useful life (max 10 years if not reliably estimable).', it: 'IFRS: non ammortizzato, impairment test annuale (IAS 36). OIC 24: ammortizzato sulla vita utile (max 10 anni se non stimabile attendibilmente).' } }
    ],
    sources: [SRC_IFRS10, SRC_IFRS3, SRC_OIC17, { label: 'Fondazione OIC — OIC 24 Immobilizzazioni immateriali', url: 'https://www.fondazioneoic.eu/' }]
  },

  /* ============================================================ */
  /* A6.3 Non-controlling interests                                */
  /* ============================================================ */
  {
    id: 'acc-nci',
    academyId: 'accounting',
    moduleId: 'A6',
    mode: 'deep',
    minutes: 15,
    difficulty: 3,
    reviewed: '2026-10',
    objective: {
      en: 'Measure NCI at acquisition under the full goodwill and proportionate methods, attribute profit to NCI, present NCI in equity and explain why NCI is added in the EV bridge.',
      it: 'Misurare le interessenze di terzi all’acquisizione con il metodo del full goodwill e con quello proporzionale, attribuire l’utile ai terzi, presentarli nel patrimonio netto e spiegare perché si sommano nel bridge verso l’EV.'
    },
    screens: [
      {
        type: 'intuition',
        title: { en: '100% of the lines, 80% of the ownership', it: '100% delle voci, 80% della proprietà' },
        body: {
          en: 'If you own 80% of a subsidiary you still consolidate **100%** of its revenue, EBITDA, assets and debt — because you control all of it.\n\nBut 20% of that business belongs to other shareholders. The **non-controlling interest (NCI)** — "interessenze di terzi" or "patrimonio netto di terzi" in Italian — is the accounting line that gives them back their slice: a share of **equity** on the balance sheet and a share of **net income** on the income statement.',
          it: 'Se possiedi l’80% di una controllata consolidi comunque il **100%** di ricavi, EBITDA, attività e debito — perché la controlli tutta.\n\nPerò il 20% di quel business appartiene ad altri soci. Le **interessenze di terzi (NCI)** — "patrimonio netto di terzi" — sono la voce che restituisce loro la loro fetta: una quota di **patrimonio netto** nello stato patrimoniale e una quota di **utile** nel conto economico.'
        }
      },
      {
        type: 'technical',
        title: { en: 'Measuring NCI at acquisition', it: 'Misurare i terzi all’acquisizione' },
        body: {
          en: '**IFRS 3.19** gives a choice, **deal by deal**, for NCI that are present ownership interests:\n- **Fair value** ("full goodwill"): NCI measured at fair value (e.g. market price of the shares not acquired) → goodwill includes the NCI’s share.\n- **Proportionate share** of the FV of identifiable net assets ("partial goodwill") → only the parent’s goodwill is recognised.\n\n**US GAAP (ASC 805-20-30-1)**: NCI **must** be measured at fair value → full goodwill only.\n\n**Italian GAAP (OIC 17)**: NCI are measured at their share of the subsidiary’s net assets; there is no full goodwill option.\n\nThe FV of NCI per share is often **below** the price per share paid by the acquirer, which includes a **control premium**.',
          it: 'L’**IFRS 3.19** concede una scelta, **operazione per operazione**, per i terzi che rappresentano interessenze partecipative attuali:\n- **Fair value** ("full goodwill"): terzi valutati a fair value (es. prezzo di mercato delle azioni non acquisite) → l’avviamento include la quota dei terzi.\n- **Quota proporzionale** del FV dell’attivo netto identificabile ("partial goodwill") → si rileva solo l’avviamento della capogruppo.\n\n**US GAAP (ASC 805-20-30-1)**: i terzi **devono** essere valutati a fair value → solo full goodwill.\n\n**Principi italiani (OIC 17)**: i terzi sono valutati in base alla loro quota dell’attivo netto della controllata; non esiste l’opzione full goodwill.\n\nIl FV per azione dei terzi è spesso **inferiore** al prezzo per azione pagato dall’acquirente, che incorpora un **premio di controllo**.'
        }
      },
      {
        type: 'technical',
        title: { en: 'After acquisition: profit, presentation, changes in stake', it: 'Dopo l’acquisizione: utile, presentazione, variazioni di quota' },
        body: {
          en: '- **Profit attribution**: consolidated net income (100% of the subsidiary) is split into "attributable to owners of the parent" and "attributable to NCI" (IFRS 10.B94) — even if this makes NCI negative.\n- **Presentation**: NCI sit **within equity**, separately from the parent’s equity (IFRS 10.22; ASC 810-10-45-16). EPS uses only profit attributable to the parent.\n- **Buying or selling shares without losing control** (e.g. 80% → 90%) is an **equity transaction**: no gain or loss, no change in goodwill (IFRS 10.23; ASC 810-10-45-23).\n- **Goodwill impairment**: under the proportionate method, IAS 36 requires goodwill to be notionally grossed up for NCI when testing the CGU.',
          it: '- **Attribuzione dell’utile**: l’utile consolidato (100% della controllata) si ripartisce in "attribuibile ai soci della controllante" e "attribuibile ai terzi" (IFRS 10.B94) — anche se ciò rende negativi i terzi.\n- **Presentazione**: i terzi stanno **nel patrimonio netto**, separati da quello della capogruppo (IFRS 10.22; ASC 810-10-45-16). L’EPS usa solo l’utile attribuibile alla capogruppo.\n- **Acquisti o cessioni di quote senza perdita del controllo** (es. da 80% a 90%) sono **operazioni sul patrimonio netto**: nessuna plus/minusvalenza, nessuna variazione dell’avviamento (IFRS 10.23; ASC 810-10-45-23).\n- **Impairment dell’avviamento**: con il metodo proporzionale lo IAS 36 richiede di "lordizzare" figurativamente l’avviamento per la quota dei terzi nel test della CGU.'
        }
      },
      {
        type: 'formula',
        formulas: [
          {
            name: { en: 'Goodwill with NCI (IFRS 3.32)', it: 'Avviamento con terzi (IFRS 3.32)' },
            expr: 'Goodwill = Consideration + NCI + FV of previously held interest − FV of identifiable net assets'
          },
          {
            name: { en: 'NCI — proportionate method', it: 'Terzi — metodo proporzionale' },
            expr: 'NCI = (1 − ownership %) × FV of identifiable net assets'
          },
          {
            name: { en: 'NCI share of profit', it: 'Utile di pertinenza di terzi' },
            expr: 'NCI share of profit = Subsidiary net income (after FV adjustments) × (1 − ownership %)'
          },
          {
            name: { en: 'EV bridge', it: 'Bridge verso l’EV' },
            expr: 'EV = Equity value + Debt + Preferred + NCI − Cash − Associates/JVs'
          }
        ]
      },
      {
        type: 'example',
        title: { en: 'Full vs partial goodwill', it: 'Full goodwill vs partial goodwill' },
        body: {
          en: 'Parent buys **80%** of Sub for **€480m**. FV of Sub’s identifiable net assets = **€500m** (book 450 + step-ups 50). The 20% not acquired trades at a total market value of **€110m** (less than 20% × 480/0.8 = 120, because no control premium).',
          it: 'Parent acquista l’**80%** di Sub per **€480m**. FV dell’attivo netto identificabile di Sub = **€500m** (contabile 450 + plusvalori 50). Il 20% non acquisito ha un valore di mercato complessivo di **€110m** (meno di 20% × 480/0,8 = 120, perché manca il premio di controllo).'
        },
        table: {
          headers: [
            { en: '€m', it: '€m' },
            { en: 'Proportionate (IFRS option)', it: 'Proporzionale (opzione IFRS)' },
            { en: 'Fair value (IFRS option; US GAAP)', it: 'Fair value (opzione IFRS; US GAAP)' }
          ],
          rows: [
            [{ en: 'Consideration', it: 'Corrispettivo' }, '480', '480'],
            [{ en: 'NCI', it: 'Terzi' }, '100 (20% × 500)', '110'],
            [{ en: 'FV identifiable net assets', it: 'FV attivo netto identificabile' }, '(500)', '(500)'],
            [{ en: 'Goodwill', it: 'Avviamento' }, '80', '90'],
            [{ en: 'of which NCI goodwill', it: 'di cui avviamento dei terzi' }, '0', '10']
          ],
          totalRows: [3]
        }
      },
      {
        type: 'example',
        title: { en: 'Year 1 profit and the NCI roll-forward', it: 'Utile del primo anno e movimentazione dei terzi' },
        body: {
          en: 'In year 1 Sub earns **€60m** (already after the extra depreciation on step-ups) and pays a **€20m** dividend. Parent’s own profit, excluding Sub dividends, is €200m.\n\n- Consolidated net income = 200 + 60 = **260**\n- NCI share = 20% × 60 = **12**\n- Attributable to parent = **248**\n\nNCI (proportionate) at year-end = 100 + 12 − 4 (20% of the dividend paid to minorities) = **108**.',
          it: 'Nel primo anno Sub realizza un utile di **€60m** (già al netto dei maggiori ammortamenti sui plusvalori) e distribuisce un dividendo di **€20m**. L’utile proprio di Parent, esclusi i dividendi di Sub, è €200m.\n\n- Utile consolidato = 200 + 60 = **260**\n- Quota dei terzi = 20% × 60 = **12**\n- Attribuibile alla capogruppo = **248**\n\nTerzi (proporzionale) a fine anno = 100 + 12 − 4 (20% del dividendo pagato ai terzi) = **108**.'
        }
      },
      {
        type: 'realworld',
        title: { en: 'Why NCI is added in the EV bridge', it: 'Perché i terzi si sommano nel bridge' },
        body: {
          en: 'Group EBITDA includes **100%** of the subsidiary’s EBITDA. If EV/EBITDA is to be consistent, EV must also include the value of **100%** of the subsidiary — including the slice the parent does not own. Market cap only captures the parent’s share, so we **add NCI**.\n\nBest practice: use the **market value** of the minority stake when the subsidiary is listed (or a multiple-based estimate); book NCI is a common shortcut but can understate it materially. Equally, when going from EV to equity value in a DCF of consolidated cash flows, **subtract** NCI.',
          it: 'L’EBITDA di gruppo comprende il **100%** dell’EBITDA della controllata. Perché l’EV/EBITDA sia coerente, anche l’EV deve includere il valore del **100%** della controllata — compresa la quota non posseduta. La capitalizzazione coglie solo la quota della capogruppo, quindi si **sommano i terzi**.\n\nBest practice: usare il **valore di mercato** della quota di minoranza se la controllata è quotata (o una stima basata su multipli); il valore contabile dei terzi è una scorciatoia diffusa ma può sottostimarli molto. Allo stesso modo, passando dall’EV all’equity value in un DCF su flussi consolidati, i terzi si **sottraggono**.'
        }
      },
      { type: 'exercise', questionId: 'acc-nci-q1' },
      { type: 'exercise', questionId: 'acc-nci-q2' },
      { type: 'exercise', questionId: 'acc-nci-q3' },
      { type: 'exercise', questionId: 'acc-nci-q5' },
      {
        type: 'interview',
        question: { en: 'Why do we add non-controlling interests when going from equity value to enterprise value?', it: 'Perché si sommano le interessenze di terzi passando dall’equity value all’enterprise value?' },
        answer: {
          en: 'Because of consistency between numerator and denominator. Once a company controls a subsidiary it consolidates 100% of its revenue and EBITDA, even if it owns, say, 70%. Market cap only reflects the parent’s 70% economic claim, so to match an EBITDA that includes 100% of the subsidiary we add the value of the 30% we do not own — ideally at market value. It is the mirror image of subtracting associates, whose EBITDA is not in the consolidated figure.',
          it: 'Per coerenza tra numeratore e denominatore. Se una società controlla una controllata ne consolida il 100% di ricavi ed EBITDA, anche se ne possiede, ad esempio, il 70%. La capitalizzazione riflette solo il 70% di pertinenza della capogruppo, quindi per allinearla a un EBITDA che include il 100% della controllata si somma il valore del 30% non posseduto — idealmente a valore di mercato. È l’immagine speculare della sottrazione delle collegate, il cui EBITDA non è nel consolidato.'
        }
      },
      {
        type: 'mistakes',
        items: [
          { en: 'Saying US GAAP allows the proportionate method. ASC 805 requires NCI at fair value (full goodwill).', it: 'Affermare che gli US GAAP consentono il metodo proporzionale. L’ASC 805 impone i terzi a fair value (full goodwill).' },
          { en: 'Grossing up the price paid (480 / 80%) to value NCI: it ignores that the control premium is not paid on minority shares.', it: 'Lordizzare il prezzo pagato (480 / 80%) per valutare i terzi: si ignora che il premio di controllo non si paga sulle azioni di minoranza.' },
          { en: 'Computing EPS on total consolidated net income instead of net income attributable to the parent.', it: 'Calcolare l’EPS sull’utile consolidato totale invece che sull’utile attribuibile alla capogruppo.' },
          { en: 'Booking a gain when buying out minorities after control is obtained — it is an equity transaction.', it: 'Rilevare un utile quando si acquistano quote dei terzi dopo aver ottenuto il controllo — è un’operazione sul patrimonio netto.' }
        ]
      },
      {
        type: 'summary',
        items: [
          { en: 'IFRS: NCI at fair value (full goodwill) or proportionate share (partial goodwill), deal by deal.', it: 'IFRS: terzi a fair value (full goodwill) o in quota proporzionale (partial goodwill), operazione per operazione.' },
          { en: 'US GAAP: fair value only. OIC 17: share of net assets.', it: 'US GAAP: solo fair value. OIC 17: quota dell’attivo netto.' },
          { en: 'NCI share of profit = subsidiary NI × (1 − ownership); NCI presented within equity.', it: 'Utile di terzi = utile della controllata × (1 − quota); terzi esposti nel patrimonio netto.' },
          { en: 'EV bridge: add NCI because consolidated EBITDA includes 100% of subsidiaries.', it: 'Bridge EV: si sommano i terzi perché l’EBITDA consolidato include il 100% delle controllate.' }
        ]
      }
    ],
    questions: [
      {
        id: 'acc-nci-q1',
        kind: 'numeric',
        topic: 'nci',
        difficulty: 2,
        objective: { en: 'Compute goodwill using the proportionate NCI method.', it: 'Calcolare l’avviamento con il metodo proporzionale per i terzi.' },
        prompt: {
          en: 'Parent pays €700m for 70% of Target. FV of Target’s identifiable net assets is €800m. Using the proportionate NCI method (IFRS), what is goodwill (€m)?',
          it: 'Parent paga €700m per il 70% di Target. Il FV dell’attivo netto identificabile di Target è €800m. Con il metodo proporzionale per i terzi (IFRS), qual è l’avviamento (€m)?'
        },
        answer: 140,
        unit: '€m',
        verify: { fn: 'goodwill', args: [700, 800, 240] },
        steps: [
          { en: 'NCI = 30% × 800 = 240', it: 'Terzi = 30% × 800 = 240' },
          { en: 'Goodwill = 700 + 240 − 800 = 140', it: 'Avviamento = 700 + 240 − 800 = 140' }
        ],
        explanation: {
          en: 'NCI = 30% × 800 = 240; goodwill = 700 + 240 − 800 = 140 (equivalently 700 − 70% × 800). Answering 700 − 800 = −100 forgets that only 70% was bought.',
          it: 'Terzi = 30% × 800 = 240; avviamento = 700 + 240 − 800 = 140 (equivalente a 700 − 70% × 800). Rispondere 700 − 800 = −100 dimentica che è stato acquistato solo il 70%.'
        }
      },
      {
        id: 'acc-nci-q2',
        kind: 'numeric',
        topic: 'nci',
        difficulty: 3,
        objective: { en: 'Compute full goodwill with NCI at fair value.', it: 'Calcolare il full goodwill con terzi a fair value.' },
        prompt: {
          en: 'Same deal (€700m for 70%, FV net assets €800m). The 30% minority stake has a fair value of €270m. Goodwill under the full goodwill method (€m)?',
          it: 'Stessa operazione (€700m per il 70%, FV attivo netto €800m). La quota di minoranza del 30% ha un fair value di €270m. Avviamento con il metodo del full goodwill (€m)?'
        },
        answer: 170,
        unit: '€m',
        verify: { fn: 'goodwill', args: [700, 800, 270] },
        explanation: {
          en: '700 + 270 − 800 = 170. The extra 30 vs the proportionate method (140) is goodwill attributable to NCI (270 − 240). Note 270 < 30% × 700/0.7 = 300: minority shares carry no control premium.',
          it: '700 + 270 − 800 = 170. I 30 in più rispetto al metodo proporzionale (140) sono l’avviamento dei terzi (270 − 240). Nota che 270 < 30% × 700/0,7 = 300: le azioni di minoranza non incorporano il premio di controllo.'
        }
      },
      {
        id: 'acc-nci-q3',
        kind: 'numeric',
        topic: 'nci',
        difficulty: 1,
        objective: { en: 'Compute the NCI share of profit.', it: 'Calcolare l’utile di pertinenza di terzi.' },
        prompt: {
          en: 'A 65%-owned subsidiary reports net income of €40m (after PPA adjustments). What is the NCI share of profit (€m)?',
          it: 'Una controllata al 65% registra un utile netto di €40m (dopo le rettifiche da PPA). Qual è l’utile di pertinenza di terzi (€m)?'
        },
        answer: 14,
        unit: '€m',
        verify: { fn: 'nciShareOfProfit', args: [40, 0.65] },
        explanation: {
          en: '40 × (1 − 0.65) = 14. Group net income still includes the full 40; 26 is attributable to the parent and 14 to NCI.',
          it: '40 × (1 − 0,65) = 14. L’utile di gruppo include comunque tutti i 40; 26 sono attribuibili alla capogruppo e 14 ai terzi.'
        }
      },
      {
        id: 'acc-nci-q4',
        kind: 'mcq',
        topic: 'nci',
        difficulty: 2,
        objective: { en: 'Know the framework rules for NCI measurement.', it: 'Conoscere le regole dei diversi framework sulla misurazione dei terzi.' },
        prompt: { en: 'Which statement is correct?', it: 'Quale affermazione è corretta?' },
        choices: [
          { en: 'IFRS requires full goodwill; US GAAP allows a choice', it: 'Gli IFRS impongono il full goodwill; gli US GAAP consentono una scelta' },
          { en: 'IFRS allows a deal-by-deal choice; US GAAP requires NCI at fair value', it: 'Gli IFRS consentono una scelta operazione per operazione; gli US GAAP impongono i terzi a fair value' },
          { en: 'Both require the proportionate method', it: 'Entrambi impongono il metodo proporzionale' },
          { en: 'IFRS requires an accounting policy choice applied to all acquisitions consistently', it: 'Gli IFRS richiedono una scelta di principio da applicare uniformemente a tutte le acquisizioni' }
        ],
        correct: 1,
        explanation: {
          en: 'IFRS 3.19 allows the choice for each business combination (not a single policy for all deals). ASC 805 requires fair value, so US GAAP always shows full goodwill.',
          it: 'L’IFRS 3.19 consente la scelta per ogni aggregazione (non un’unica policy per tutte le operazioni). L’ASC 805 impone il fair value, quindi negli US GAAP si ha sempre il full goodwill.'
        }
      },
      {
        id: 'acc-nci-q5',
        kind: 'numeric',
        topic: 'ev-bridge',
        difficulty: 2,
        objective: { en: 'Build an EV bridge with NCI and associates.', it: 'Costruire un bridge verso l’EV con terzi e collegate.' },
        prompt: {
          en: 'Market cap €2,000m, gross debt €800m, cash €300m, NCI (market value) €150m, equity-accounted associates €100m. Enterprise value (€m)?',
          it: 'Capitalizzazione €2.000m, debito lordo €800m, cassa €300m, terzi (valore di mercato) €150m, collegate valutate a PN €100m. Enterprise value (€m)?'
        },
        answer: 2550,
        unit: '€m',
        verify: { fn: 'enterpriseValue', args: [2000, 800, 300, 0, 150, 100] },
        explanation: {
          en: '2,000 + 800 − 300 + 150 − 100 = 2,550. NCI is added (consolidated EBITDA includes 100% of subsidiaries); associates are subtracted (their EBITDA is not consolidated).',
          it: '2.000 + 800 − 300 + 150 − 100 = 2.550. I terzi si sommano (l’EBITDA consolidato include il 100% delle controllate); le collegate si sottraggono (il loro EBITDA non è consolidato).'
        }
      },
      {
        id: 'acc-nci-q6',
        kind: 'mcq',
        topic: 'nci',
        difficulty: 3,
        objective: { en: 'Account for a change in ownership without loss of control.', it: 'Contabilizzare una variazione di quota senza perdita del controllo.' },
        prompt: {
          en: 'Under IFRS, a parent owning 80% buys another 10% from minorities for €60m; the carrying amount of that 10% NCI is €45m. What happens?',
          it: 'In IFRS, una capogruppo all’80% acquista un ulteriore 10% dai terzi per €60m; il valore contabile di quel 10% di terzi è €45m. Cosa succede?'
        },
        choices: [
          { en: 'Goodwill increases by €15m', it: 'L’avviamento aumenta di €15m' },
          { en: 'A €15m loss is recognised in profit or loss', it: 'Si rileva una perdita di €15m a conto economico' },
          { en: 'NCI falls by €45m and parent equity falls by €15m; no P&L impact', it: 'I terzi diminuiscono di €45m e il PN della capogruppo di €15m; nessun effetto a conto economico' },
          { en: 'The subsidiary is remeasured at fair value', it: 'La controllata viene rimisurata a fair value' }
        ],
        correct: 2,
        explanation: {
          en: 'Changes in ownership that do not result in loss of control are equity transactions (IFRS 10.23): derecognise NCI of 45, pay 60 cash, and charge the 15 difference directly to equity attributable to the parent. No new goodwill and no gain/loss.',
          it: 'Le variazioni di quota che non comportano la perdita del controllo sono operazioni sul patrimonio netto (IFRS 10.23): si stornano terzi per 45, si pagano 60 e la differenza di 15 riduce direttamente il PN di pertinenza della capogruppo. Nessun nuovo avviamento, nessun utile o perdita.'
        }
      }
    ],
    flashcards: [
      { id: 'fc-acc-nci-1', topic: 'nci', front: { en: 'NCI measurement options under IFRS 3?', it: 'Opzioni di misurazione dei terzi in IFRS 3?' }, back: { en: 'Fair value (full goodwill) or proportionate share of FV of identifiable net assets (partial goodwill), chosen deal by deal.', it: 'Fair value (full goodwill) o quota proporzionale del FV dell’attivo netto identificabile (partial goodwill), scelta per singola operazione.' } },
      { id: 'fc-acc-nci-2', topic: 'nci', front: { en: 'NCI measurement under US GAAP?', it: 'Misurazione dei terzi negli US GAAP?' }, back: { en: 'Fair value only (ASC 805) → full goodwill.', it: 'Solo fair value (ASC 805) → full goodwill.' } },
      { id: 'fc-acc-nci-3', topic: 'nci', front: { en: 'Where is NCI presented?', it: 'Dove si presentano i terzi?' }, back: { en: 'Within equity, separately from equity attributable to owners of the parent (IFRS 10.22; ASC 810).', it: 'Nel patrimonio netto, separatamente dal PN di pertinenza della capogruppo (IFRS 10.22; ASC 810).' } },
      { id: 'fc-acc-nci-4', topic: 'ev-bridge', front: { en: 'Why add NCI in the EV bridge?', it: 'Perché si sommano i terzi nel bridge verso l’EV?' }, back: { en: 'Consolidated EBITDA includes 100% of subsidiaries; market cap reflects only the parent’s share.', it: 'L’EBITDA consolidato include il 100% delle controllate; la capitalizzazione riflette solo la quota della capogruppo.' } },
      { id: 'fc-acc-nci-5', topic: 'nci', front: { en: 'Buying out minorities after control is obtained?', it: 'Acquisto di quote dei terzi dopo aver ottenuto il controllo?' }, back: { en: 'Equity transaction: no gain/loss, no change to goodwill (IFRS 10.23).', it: 'Operazione sul PN: nessun utile/perdita, nessuna variazione dell’avviamento (IFRS 10.23).' } }
    ],
    sources: [SRC_IFRS3, SRC_IFRS10, SRC_IAS36, SRC_ASC805, SRC_OIC17]
  },

  /* ============================================================ */
  /* A6.4 Equity method                                            */
  /* ============================================================ */
  {
    id: 'acc-equity-method',
    academyId: 'accounting',
    moduleId: 'A6',
    mode: 'deep',
    minutes: 13,
    difficulty: 2,
    reviewed: '2026-10',
    objective: {
      en: 'Apply the equity method to an associate or joint venture: roll forward the carrying amount, reflect dividends and PPA adjustments, and explain why associates are subtracted in the EV bridge.',
      it: 'Applicare il metodo del patrimonio netto a una collegata o joint venture: movimentare il valore di carico, riflettere dividendi e rettifiche da PPA e spiegare perché le collegate si sottraggono nel bridge verso l’EV.'
    },
    screens: [
      {
        type: 'intuition',
        title: { en: 'One line, growing with the investee', it: 'Una sola riga, che cresce con la partecipata' },
        body: {
          en: 'With significant influence you do not control the associate, so you do **not** add its revenues, debt or assets. Instead you hold **one line** on the balance sheet — "Investments in associates" — and **one line** in the income statement — "Share of profit of associates".\n\nThe investment grows with your share of the associate’s profits and shrinks when it pays you dividends: the dividend is simply part of your stake **turning into cash**, not income. That is why the equity method is often called a **"one-line consolidation"**.',
          it: 'Con l’influenza notevole non controlli la collegata, quindi **non** sommi i suoi ricavi, debiti o attività. Hai invece **una riga** nello stato patrimoniale — "Partecipazioni valutate con il metodo del patrimonio netto" — e **una riga** a conto economico — "Quota di risultato delle collegate".\n\nLa partecipazione cresce con la tua quota degli utili della collegata e si riduce quando ti paga dividendi: il dividendo è semplicemente una parte della tua quota che **si trasforma in cassa**, non un ricavo. Per questo il metodo del patrimonio netto è detto **"consolidamento sintetico"** (one-line consolidation).'
        }
      },
      {
        type: 'technical',
        title: { en: 'IAS 28 mechanics', it: 'Il meccanismo dello IAS 28' },
        body: {
          en: '- **Initial recognition at cost** (IAS 28.10), including any premium paid. The excess of cost over the investor’s share of the FV of identifiable net assets is **notional goodwill embedded** in the carrying amount — not shown separately and not tested separately for impairment; the whole investment is tested.\n- **Share of profit or loss** increases/decreases the carrying amount; the share of the investee’s **OCI** goes to the investor’s OCI.\n- **Dividends received reduce** the carrying amount (no P&L effect).\n- **PPA-style adjustments**: extra depreciation on FV step-ups of the investee’s assets reduces the investor’s share of profit.\n- **Losses**: once the carrying amount reaches zero, further losses are not recognised unless the investor has legal or constructive obligations (IAS 28.39).\n- Same method for **joint ventures** (IFRS 11). US GAAP: ASC 323, also with a 20% presumption.',
          it: '- **Iscrizione iniziale al costo** (IAS 28.10), compreso l’eventuale premio pagato. L’eccedenza del costo rispetto alla quota del FV dell’attivo netto identificabile è un **avviamento implicito** nel valore di carico — non esposto né testato separatamente; si testa l’intera partecipazione.\n- **La quota di utile o perdita** aumenta/riduce il valore di carico; la quota di **OCI** della partecipata va nell’OCI dell’investitore.\n- **I dividendi incassati riducono** il valore di carico (nessun effetto a conto economico).\n- **Rettifiche tipo PPA**: i maggiori ammortamenti sui plusvalori delle attività della partecipata riducono la quota di utile dell’investitore.\n- **Perdite**: azzerato il valore di carico, le ulteriori perdite non si rilevano salvo obbligazioni legali o implicite (IAS 28.39).\n- Stesso metodo per le **joint venture** (IFRS 11). US GAAP: ASC 323, anch’esso con la presunzione del 20%.'
        }
      },
      {
        type: 'formula',
        formulas: [
          {
            name: { en: 'Carrying amount roll-forward', it: 'Movimentazione del valore di carico' },
            expr: 'Closing = Opening (cost) + Ownership × Net income − Ownership × Dividends ± Ownership × OCI − Ownership × extra D&A on step-ups',
            vars: [
              { sym: 'Ownership', desc: { en: 'Investor’s % interest in the associate', it: 'Quota % dell’investitore nella collegata' } },
              { sym: 'Dividends', desc: { en: 'Total dividends declared by the associate', it: 'Dividendi totali deliberati dalla collegata' } }
            ]
          },
          {
            name: { en: 'Embedded goodwill', it: 'Avviamento implicito' },
            expr: 'Embedded goodwill = Cost − Ownership × FV of identifiable net assets'
          }
        ]
      },
      {
        type: 'example',
        title: { en: 'Year 1 of a 30% associate', it: 'Primo anno di una collegata al 30%' },
        body: {
          en: 'On 1 Jan, Investor S.p.A. buys **30%** of Assoc for **€300m**. Assoc’s FV of identifiable net assets is €850m (book €750m + €100m step-up on plant, 10-year remaining life). During the year Assoc earns **€200m** and pays **€50m** of dividends.\n\n- Embedded goodwill = 300 − 30% × 850 = **45**\n- Extra depreciation (investor’s share) = 30% × 100 / 10 = **3**',
          it: 'Il 1° gennaio Investor S.p.A. acquista il **30%** di Assoc per **€300m**. Il FV dell’attivo netto identificabile di Assoc è €850m (contabile €750m + €100m di plusvalore su impianti, vita residua 10 anni). Nell’anno Assoc realizza un utile di **€200m** e distribuisce **€50m** di dividendi.\n\n- Avviamento implicito = 300 − 30% × 850 = **45**\n- Maggior ammortamento (quota dell’investitore) = 30% × 100 / 10 = **3**'
        },
        table: {
          headers: [{ en: '€m', it: '€m' }, { en: 'Carrying amount', it: 'Valore di carico' }, { en: 'Income statement', it: 'Conto economico' }, { en: 'Cash', it: 'Cassa' }],
          rows: [
            [{ en: 'Purchase (1 Jan)', it: 'Acquisto (1° gen.)' }, '300', '—', '(300)'],
            [{ en: 'Share of profit 30% × 200', it: 'Quota di utile 30% × 200' }, '+60', '+60', '—'],
            [{ en: 'Extra depreciation on step-up', it: 'Maggior ammortamento sul plusvalore' }, '−3', '−3', '—'],
            [{ en: 'Dividends 30% × 50', it: 'Dividendi 30% × 50' }, '−15', '—', '+15'],
            [{ en: 'Closing (31 Dec)', it: 'Saldo finale (31 dic.)' }, '342', '57', '(285)']
          ],
          totalRows: [4]
        }
      },
      {
        type: 'technical',
        title: { en: 'Where it shows in the three statements', it: 'Dove compare nei tre prospetti' },
        body: {
          en: '- **Income statement**: "Share of profit of associates and JVs" — a single, **after-tax** line. Its position (inside or below operating profit) varies by company under IAS 1; IFRS 18 (effective 2027) will require it outside the operating category. It is **not in EBITDA** in most analyst definitions.\n- **Cash flow statement (indirect)**: subtract the non-cash share of profit (−57 above) in CFO; dividends received (+15) appear in operating or investing cash flows depending on policy (IFRS) — under US GAAP, returns on investment are operating.\n- **Balance sheet**: non-current asset.\n- **Unrealised profits** on transactions with the associate are eliminated **only to the extent of the investor’s interest** (IAS 28.28).\n\n**Italian GAAP**: OIC 17 governs the equity method, usable for subsidiaries and associates also in the separate accounts (art. 2426, n. 4 c.c.).',
          it: '- **Conto economico**: "Quota di risultato di collegate e JV" — una sola riga, **al netto delle imposte**. La sua posizione (dentro o sotto il risultato operativo) varia da società a società con lo IAS 1; l’IFRS 18 (in vigore dal 2027) la collocherà fuori dalla categoria operativa. Per la maggior parte degli analisti **non è nell’EBITDA**.\n- **Rendiconto finanziario (metodo indiretto)**: si sottrae nel flusso operativo la quota di utile non monetaria (−57 sopra); i dividendi incassati (+15) vanno nell’attività operativa o di investimento a seconda della policy (IFRS) — negli US GAAP i rendimenti dell’investimento sono operativi.\n- **Stato patrimoniale**: attività non corrente.\n- **Gli utili non realizzati** su operazioni con la collegata si elidono **solo per la quota dell’investitore** (IAS 28.28).\n\n**Principi italiani**: l’OIC 17 disciplina il metodo del patrimonio netto, utilizzabile per controllate e collegate anche nel bilancio d’esercizio (art. 2426, n. 4 c.c.).'
        }
      },
      {
        type: 'realworld',
        title: { en: 'Why associates are subtracted in the EV bridge', it: 'Perché le collegate si sottraggono nel bridge' },
        body: {
          en: 'Consolidated EBITDA **excludes** the associate’s EBITDA (only an after-tax share of profit appears, below EBITDA). Yet the market cap **includes** the value of the stake. To keep EV/EBITDA consistent, we **subtract** the associate’s value from EV — treating it like a non-operating asset similar to cash.\n\nAnalysts prefer the **market value** of the stake (if the associate is listed) or a multiple of its earnings, since the carrying amount reflects historical cost plus retained profits. Alternative: keep the stake in EV and add a proportionate share of the associate’s EBITDA — but never mix the two approaches.',
          it: 'L’EBITDA consolidato **esclude** l’EBITDA della collegata (compare solo una quota di utile netto, sotto l’EBITDA). La capitalizzazione invece **include** il valore della partecipazione. Per mantenere coerente l’EV/EBITDA, il valore della collegata si **sottrae** dall’EV — trattandola come un’attività non operativa, al pari della cassa.\n\nGli analisti preferiscono il **valore di mercato** della quota (se la collegata è quotata) o un multiplo dei suoi utili, perché il valore di carico riflette costo storico più utili trattenuti. Alternativa: lasciare la partecipazione nell’EV e sommare la quota proporzionale dell’EBITDA della collegata — ma senza mai mescolare i due approcci.'
        }
      },
      { type: 'exercise', questionId: 'acc-em-q1' },
      { type: 'exercise', questionId: 'acc-em-q2' },
      { type: 'exercise', questionId: 'acc-em-q3' },
      {
        type: 'interview',
        question: { en: 'An associate you own 25% of earns €80m and pays a €20m dividend. Walk me through the three statements.', it: 'Una collegata al 25% realizza un utile di €80m e distribuisce un dividendo di €20m. Mi illustri l’effetto sui tre prospetti.' },
        answer: {
          en: 'Income statement: share of profit of associates +€20m (25% × 80), so net income +€20m — it is already after tax. Cash flow: start from net income +20, subtract the non-cash €20m share of profit, and show the €5m dividend received as an inflow; net cash +€5m. Balance sheet: cash +5, investment in associate +20 − 5 = +15, total assets +20; retained earnings +20. Balanced.',
          it: 'Conto economico: quota di risultato delle collegate +€20m (25% × 80), quindi utile netto +€20m — è già al netto delle imposte. Rendiconto: si parte dall’utile +20, si sottrae la quota di utile non monetaria di €20m e si espone il dividendo incassato di €5m come entrata; cassa netta +€5m. Stato patrimoniale: cassa +5, partecipazione +20 − 5 = +15, attivo +20; utili a nuovo +20. Quadra.'
        }
      },
      {
        type: 'mistakes',
        items: [
          { en: 'Recording dividends from an associate as income. Under the equity method they reduce the carrying amount.', it: 'Registrare i dividendi della collegata come ricavo. Con il metodo del patrimonio netto riducono il valore di carico.' },
          { en: 'Including share of profit of associates in EBITDA and then also subtracting the associate in the EV bridge (double count).', it: 'Includere la quota di utile delle collegate nell’EBITDA e sottrarre anche la collegata nel bridge (doppio conteggio).' },
          { en: 'Forgetting the investor’s share of extra depreciation on fair value step-ups at the associate.', it: 'Dimenticare la quota dell’investitore dei maggiori ammortamenti sui plusvalori della collegata.' },
          { en: 'Eliminating 100% of unrealised profit on sales to an associate: only the investor’s share is eliminated.', it: 'Elidere il 100% dell’utile non realizzato sulle vendite a una collegata: si elide solo la quota dell’investitore.' }
        ]
      },
      {
        type: 'summary',
        items: [
          { en: 'Equity method: cost + share of profit − dividends (± OCI, − extra D&A on step-ups).', it: 'Metodo del PN: costo + quota di utile − dividendi (± OCI, − maggiori ammortamenti sui plusvalori).' },
          { en: 'One line on the balance sheet, one after-tax line in P&L, outside EBITDA.', it: 'Una riga nello stato patrimoniale, una riga netta a conto economico, fuori dall’EBITDA.' },
          { en: 'Applies to associates (IAS 28) and joint ventures (IFRS 11); ASC 323 in US GAAP; OIC 17 in Italy.', it: 'Si applica a collegate (IAS 28) e joint venture (IFRS 11); ASC 323 negli US GAAP; OIC 17 in Italia.' },
          { en: 'EV bridge: subtract associates because their EBITDA is not consolidated.', it: 'Bridge EV: si sottraggono le collegate perché il loro EBITDA non è consolidato.' }
        ]
      }
    ],
    questions: [
      {
        id: 'acc-em-q1',
        kind: 'numeric',
        topic: 'equity-method',
        difficulty: 1,
        objective: { en: 'Roll forward an equity-method carrying amount.', it: 'Movimentare il valore di carico di una partecipazione a PN.' },
        prompt: {
          en: 'An investor pays €400m for 40% of an associate. In year 1 the associate earns €150m and pays dividends of €60m. Carrying amount at year-end (€m)? (No step-ups.)',
          it: 'Un investitore paga €400m per il 40% di una collegata. Nel primo anno la collegata realizza €150m di utile e distribuisce €60m di dividendi. Valore di carico a fine anno (€m)? (Nessun plusvalore.)'
        },
        answer: 436,
        unit: '€m',
        verify: { fn: 'equityMethodCarrying', args: [400, 0.4, 150, 60] },
        explanation: {
          en: '400 + 40% × 150 − 40% × 60 = 400 + 60 − 24 = 436. Adding the dividend (484) or ignoring it (460) are the typical errors: dividends convert part of the investment into cash.',
          it: '400 + 40% × 150 − 40% × 60 = 400 + 60 − 24 = 436. Sommare il dividendo (484) o ignorarlo (460) sono gli errori tipici: i dividendi trasformano parte della partecipazione in cassa.'
        }
      },
      {
        id: 'acc-em-q2',
        kind: 'mcq',
        topic: 'equity-method',
        difficulty: 1,
        objective: { en: 'Identify the effect of a dividend from an associate.', it: 'Identificare l’effetto di un dividendo da una collegata.' },
        prompt: { en: 'Under the equity method, a €10m dividend received from an associate:', it: 'Con il metodo del patrimonio netto, un dividendo di €10m incassato da una collegata:' },
        choices: [
          { en: 'Increases net income by €10m', it: 'Aumenta l’utile netto di €10m' },
          { en: 'Increases cash and the investment by €10m each', it: 'Aumenta di €10m sia la cassa sia la partecipazione' },
          { en: 'Has no effect on any statement', it: 'Non ha effetti su alcun prospetto' },
          { en: 'Increases cash by €10m and reduces the investment by €10m', it: 'Aumenta la cassa di €10m e riduce la partecipazione di €10m' }
        ],
        correct: 3,
        explanation: {
          en: 'The profit was already recognised through the share of profit; the dividend just swaps part of the investment for cash. Recording it as income would double count the associate’s earnings (that is the cost-method treatment).',
          it: 'L’utile è già stato rilevato con la quota di risultato; il dividendo scambia solo una parte della partecipazione con cassa. Rilevarlo come ricavo conterebbe due volte gli utili della collegata (è il trattamento del metodo del costo).'
        }
      },
      {
        id: 'acc-em-q3',
        kind: 'numeric',
        topic: 'equity-method',
        difficulty: 3,
        objective: { en: 'Include PPA depreciation in the equity method.', it: 'Includere gli ammortamenti da PPA nel metodo del patrimonio netto.' },
        prompt: {
          en: 'Investor pays €300m for 30% of Assoc. Assoc’s plant has a FV €100m above book, 10-year remaining life (straight-line). Year 1: Assoc net income €200m, dividends €50m. Ignore tax on the step-up. Carrying amount at year-end (€m)?',
          it: 'Investor paga €300m per il 30% di Assoc. Gli impianti di Assoc hanno un FV superiore di €100m al contabile, vita residua 10 anni (quote costanti). Anno 1: utile di Assoc €200m, dividendi €50m. Ignora le imposte sul plusvalore. Valore di carico a fine anno (€m)?'
        },
        answer: 342,
        unit: '€m',
        verify: { fn: 'sum', args: [300, 60, -3, -15] },
        steps: [
          { en: 'Share of profit: 30% × 200 = 60', it: 'Quota di utile: 30% × 200 = 60' },
          { en: 'Extra depreciation: 30% × 100 / 10 = 3', it: 'Maggior ammortamento: 30% × 100 / 10 = 3' },
          { en: 'Dividends: 30% × 50 = 15 → 300 + 60 − 3 − 15 = 342', it: 'Dividendi: 30% × 50 = 15 → 300 + 60 − 3 − 15 = 342' }
        ],
        explanation: {
          en: 'The investor’s share of profit is adjusted for depreciation of its share of the step-up: 60 − 3 = 57. Carrying amount = 300 + 57 − 15 = 342. Using the full step-up depreciation (10) instead of 30% of it overstates the adjustment.',
          it: 'La quota di utile si rettifica per l’ammortamento della quota di plusvalore: 60 − 3 = 57. Valore di carico = 300 + 57 − 15 = 342. Usare l’intero maggior ammortamento (10) anziché il 30% sovrastima la rettifica.'
        }
      },
      {
        id: 'acc-em-q4',
        kind: 'mcq',
        topic: 'ev-bridge',
        difficulty: 2,
        objective: { en: 'Explain the treatment of associates in the EV bridge.', it: 'Spiegare il trattamento delle collegate nel bridge verso l’EV.' },
        prompt: { en: 'Why are equity-method investments subtracted when computing enterprise value for an EV/EBITDA multiple?', it: 'Perché le partecipazioni valutate a PN si sottraggono nel calcolo dell’EV per un multiplo EV/EBITDA?' },
        choices: [
          { en: 'Because they are liabilities of the group', it: 'Perché sono passività del gruppo' },
          { en: 'Because the associate’s EBITDA is not in consolidated EBITDA, while its value is in market cap', it: 'Perché l’EBITDA della collegata non è nell’EBITDA consolidato, mentre il suo valore è nella capitalizzazione' },
          { en: 'Because IFRS requires them to be impaired each year', it: 'Perché gli IFRS ne impongono la svalutazione ogni anno' },
          { en: 'Because they are always loss-making', it: 'Perché sono sempre in perdita' }
        ],
        correct: 1,
        explanation: {
          en: 'It is a consistency adjustment: the numerator must contain only what generates the denominator. Associates are assets, not liabilities, and nothing requires annual impairment of them (only when there is objective evidence).',
          it: 'È una rettifica di coerenza: il numeratore deve contenere solo ciò che genera il denominatore. Le collegate sono attività, non passività, e nulla ne impone la svalutazione annuale (solo in presenza di evidenze obiettive).'
        }
      },
      {
        id: 'acc-em-q5',
        kind: 'numeric',
        topic: 'equity-method',
        difficulty: 2,
        objective: { en: 'Compute goodwill embedded in an equity-method investment.', it: 'Calcolare l’avviamento implicito in una partecipazione a PN.' },
        prompt: {
          en: 'An investor pays €120m for 25% of a company whose identifiable net assets have a fair value of €360m. Embedded (notional) goodwill (€m)?',
          it: 'Un investitore paga €120m per il 25% di una società il cui attivo netto identificabile ha un fair value di €360m. Avviamento implicito (€m)?'
        },
        answer: 30,
        unit: '€m',
        verify: { fn: 'diff', args: [120, 90] },
        explanation: {
          en: '25% × 360 = 90; 120 − 90 = 30. It stays inside the €120m carrying amount — it is not presented as goodwill, and the investment is tested for impairment as a whole (IAS 28).',
          it: '25% × 360 = 90; 120 − 90 = 30. Resta all’interno del valore di carico di €120m — non si espone come avviamento e la partecipazione si testa per impairment nel suo insieme (IAS 28).'
        }
      }
    ],
    flashcards: [
      { id: 'fc-acc-em-1', topic: 'equity-method', front: { en: 'Equity method roll-forward formula?', it: 'Formula di movimentazione del metodo del PN?' }, back: { en: 'Cost + share of NI − share of dividends (± share of OCI, − share of extra D&A on step-ups).', it: 'Costo + quota di utile − quota di dividendi (± quota di OCI, − quota dei maggiori ammortamenti).' } },
      { id: 'fc-acc-em-2', topic: 'equity-method', front: { en: 'Why is the equity method called "one-line consolidation"?', it: 'Perché il metodo del PN è detto "consolidamento sintetico"?' }, back: { en: 'The investor’s share of the investee’s net assets and profit is captured in a single balance sheet line and a single P&L line.', it: 'La quota di attivo netto e di utile della partecipata è rappresentata in una sola riga di stato patrimoniale e una sola di conto economico.' } },
      { id: 'fc-acc-em-3', topic: 'equity-method', front: { en: 'What happens when an associate’s losses exceed the carrying amount?', it: 'Cosa succede se le perdite della collegata superano il valore di carico?' }, back: { en: 'Stop at zero; further losses only if the investor has legal or constructive obligations (IAS 28.39).', it: 'Ci si ferma a zero; ulteriori perdite solo se esistono obbligazioni legali o implicite (IAS 28.39).' } },
      { id: 'fc-acc-em-4', topic: 'ev-bridge', front: { en: 'Associates in the EV bridge?', it: 'Collegate nel bridge verso l’EV?' }, back: { en: 'Subtract (ideally at market value): their EBITDA is not in consolidated EBITDA.', it: 'Si sottraggono (idealmente a valore di mercato): il loro EBITDA non è nell’EBITDA consolidato.' } }
    ],
    sources: [SRC_IAS28, SRC_IFRS11, SRC_IAS7, SRC_ASC805, SRC_OIC17]
  },

  /* ============================================================ */
  /* A6.5 Intercompany eliminations                                */
  /* ============================================================ */
  {
    id: 'acc-intercompany',
    academyId: 'accounting',
    moduleId: 'A6',
    mode: 'deep',
    minutes: 14,
    difficulty: 3,
    reviewed: '2026-10',
    objective: {
      en: 'Prepare elimination entries for intercompany sales, unrealised profit in inventory, loans and dividends, including tax and NCI effects.',
      it: 'Predisporre le scritture di elisione per vendite infragruppo, utili non realizzati nelle rimanenze, finanziamenti e dividendi, inclusi gli effetti fiscali e sui terzi.'
    },
    screens: [
      {
        type: 'intuition',
        title: { en: 'You cannot sell to yourself', it: 'Non si può vendere a se stessi' },
        body: {
          en: 'From the group’s point of view, a sale from parent to subsidiary is like moving goods from one warehouse to another: **no revenue, no profit** until the goods are sold to an outside customer.\n\nSame for a loan from parent to subsidiary: the group does not owe money to itself, and interest paid by one pocket to the other is not income. Consolidation therefore **eliminates in full** every intragroup balance, transaction, dividend and unrealised profit (IFRS 10.B86(c)).',
          it: 'Dal punto di vista del gruppo, una vendita dalla capogruppo alla controllata è come spostare merce da un magazzino all’altro: **nessun ricavo, nessun utile** finché la merce non è venduta a un cliente esterno.\n\nLo stesso vale per un finanziamento dalla capogruppo alla controllata: il gruppo non ha un debito verso se stesso e gli interessi pagati da una tasca all’altra non sono un provento. Il consolidamento quindi **elide integralmente** tutti i saldi, le operazioni, i dividendi e gli utili non realizzati infragruppo (IFRS 10.B86(c)).'
        }
      },
      {
        type: 'technical',
        title: { en: 'The four classic eliminations', it: 'Le quattro elisioni classiche' },
        body: {
          en: '1. **Intercompany sales**: Dr Revenue, Cr Cost of sales — for the full intragroup sales amount.\n2. **Unrealised profit in closing inventory**: Dr Cost of sales, Cr Inventory — for the margin on goods still held inside the group. Under IAS 12, the elimination creates a **deferred tax asset** (book value of inventory < tax base).\n3. **Intercompany loans**: Dr Loan payable, Cr Loan receivable; Dr Interest income, Cr Interest expense.\n4. **Intercompany dividends**: Dr Dividend income (parent), Cr Dividends paid / retained earnings (subsidiary). With NCI, the share paid to minorities reduces NCI.\n\nThe same logic applies to receivables/payables, management fees, royalties and **transfers of fixed assets** (unrealised gain eliminated and reversed through lower depreciation over the asset’s life).',
          it: '1. **Vendite infragruppo**: Dare Ricavi, Avere Costo del venduto — per l’intero importo delle vendite infragruppo.\n2. **Utile non realizzato nelle rimanenze finali**: Dare Costo del venduto, Avere Rimanenze — per il margine sui beni ancora presenti nel gruppo. Secondo lo IAS 12 l’elisione genera un’**attività per imposte anticipate** (valore contabile delle rimanenze < valore fiscale).\n3. **Finanziamenti infragruppo**: Dare Debito, Avere Credito; Dare Interessi attivi, Avere Interessi passivi.\n4. **Dividendi infragruppo**: Dare Dividendi (capogruppo), Avere Dividendi distribuiti / utili a nuovo (controllata). Con i terzi, la quota pagata alle minoranze riduce il PN di terzi.\n\nLa stessa logica vale per crediti/debiti commerciali, management fee, royalty e **cessioni di immobilizzazioni** (plusvalenza non realizzata elisa e riassorbita tramite minori ammortamenti lungo la vita del bene).'
        }
      },
      {
        type: 'formula',
        formulas: [
          {
            name: { en: 'Unrealised profit in inventory', it: 'Utile non realizzato nelle rimanenze' },
            expr: 'Unrealised profit = Intragroup inventory held at year-end × Seller’s margin on selling price',
            vars: [
              { sym: 'Margin', desc: { en: 'Gross profit / intragroup selling price (not the mark-up on cost)', it: 'Margine lordo / prezzo di vendita infragruppo (non il ricarico sul costo)' } }
            ]
          },
          {
            name: { en: 'After-tax effect on consolidated profit', it: 'Effetto netto sull’utile consolidato' },
            expr: 'ΔNet income = − Unrealised profit × (1 − tax rate)'
          },
          {
            name: { en: 'Associates (IAS 28.28)', it: 'Collegate (IAS 28.28)' },
            expr: 'Eliminated profit = Unrealised profit × Investor’s ownership %'
          }
        ]
      },
      {
        type: 'example',
        title: { en: 'Intercompany sale with goods still in stock', it: 'Vendita infragruppo con merce ancora in magazzino' },
        body: {
          en: 'Parent sells goods costing **€150m** to its 100% subsidiary for **€200m** (margin 25% of price). At year-end the subsidiary still holds **40%** of them (€80m at transfer price). Tax rate 25%. Parent also sells €1,000m externally; the subsidiary sells €600m externally (incl. 60% of the intragroup goods).\n\n- Unrealised profit = 80 × 25% = **20**\n- Consolidated revenue = 1,000 + 200 + 600 − 200 = **1,600**\n- Group inventory of these goods = 80 − 20 = **60** (= original cost 40% × 150)\n- Deferred tax asset = 20 × 25% = **5** → net income −15',
          it: 'Parent vende alla controllata al 100% merce che le è costata **€150m** per **€200m** (margine 25% sul prezzo). A fine anno la controllata ne detiene ancora il **40%** (€80m al prezzo di trasferimento). Aliquota 25%. Parent vende inoltre €1.000m all’esterno; la controllata vende €600m all’esterno (incluso il 60% della merce infragruppo).\n\n- Utile non realizzato = 80 × 25% = **20**\n- Ricavi consolidati = 1.000 + 200 + 600 − 200 = **1.600**\n- Rimanenze di gruppo di tali beni = 80 − 20 = **60** (= costo originario 40% × 150)\n- Imposte anticipate = 20 × 25% = **5** → utile netto −15'
        },
        table: {
          caption: { en: 'Elimination entries (€m)', it: 'Scritture di elisione (€m)' },
          headers: [{ en: 'Entry', it: 'Scrittura' }, { en: 'Dr', it: 'Dare' }, { en: 'Cr', it: 'Avere' }],
          rows: [
            [{ en: 'Revenue / Cost of sales', it: 'Ricavi / Costo del venduto' }, '200', '200'],
            [{ en: 'Cost of sales / Inventory', it: 'Costo del venduto / Rimanenze' }, '20', '20'],
            [{ en: 'Deferred tax asset / Tax expense', it: 'Imposte anticipate / Imposte' }, '5', '5']
          ]
        }
      },
      {
        type: 'example',
        title: { en: 'Loans, dividends and upstream sales with NCI', it: 'Finanziamenti, dividendi e vendite upstream con terzi' },
        body: {
          en: '**Loan**: Parent lends €100m to its 80% sub at 5%. Eliminate receivable/payable 100 and interest income/expense 5. Consolidated net income is unchanged (income and expense cancel).\n\n**Dividend**: the 80% sub pays €30m. Parent booked €24m dividend income → eliminate it against the sub’s dividend; the €6m paid to minorities reduces NCI. Group cash only falls by **6**.\n\n**Upstream sale** (sub → parent) with €20m unrealised profit: eliminated **in full**, but under IFRS the after-tax effect (15) is **shared**: 80% (12) to the parent, 20% (3) to NCI, because the profit was recorded by the partly owned seller. Downstream profit (parent → sub) is charged entirely to the parent.',
          it: '**Finanziamento**: Parent presta €100m alla controllata all’80% al 5%. Si elidono credito/debito per 100 e interessi attivi/passivi per 5. L’utile consolidato non cambia (proventi e oneri si compensano).\n\n**Dividendo**: la controllata all’80% distribuisce €30m. Parent ha rilevato €24m di dividendi → si elidono contro il dividendo della controllata; i €6m pagati ai terzi riducono il PN di terzi. La cassa di gruppo diminuisce solo di **6**.\n\n**Vendita upstream** (controllata → capogruppo) con €20m di utile non realizzato: si elide **integralmente**, ma in IFRS l’effetto netto (15) è **ripartito**: 80% (12) alla capogruppo, 20% (3) ai terzi, perché l’utile è stato rilevato dal venditore partecipato al di sotto del 100%. L’utile downstream (capogruppo → controllata) è attribuito interamente alla capogruppo.'
        }
      },
      {
        type: 'realworld',
        body: {
          en: 'Intercompany eliminations explain why **group revenue is less than the sum of segment revenues** — reconciliation tables show an "eliminations" column. For analysts this matters when valuing a group sum-of-the-parts: segment EBITDA may include intragroup margins that disappear at group level. In due diligence, large intragroup flows (transfer pricing, cash pooling, management fees) are a classic area to check, especially in carve-outs where those flows become third-party contracts.',
          it: 'Le elisioni infragruppo spiegano perché **i ricavi di gruppo sono inferiori alla somma dei ricavi dei segmenti** — le riconciliazioni mostrano una colonna "elisioni". Per gli analisti conta quando si valuta un gruppo con una somma delle parti: l’EBITDA dei segmenti può includere margini infragruppo che scompaiono a livello consolidato. In due diligence, i flussi infragruppo rilevanti (transfer pricing, cash pooling, management fee) sono un’area classica di verifica, soprattutto nei carve-out, dove diventano contratti con terzi.'
        }
      },
      { type: 'exercise', questionId: 'acc-ic-q1' },
      { type: 'exercise', questionId: 'acc-ic-q2' },
      { type: 'exercise', questionId: 'acc-ic-q3' },
      { type: 'exercise', questionId: 'acc-ic-q4' },
      {
        type: 'interview',
        question: { en: 'A parent sells inventory to its subsidiary at a profit and the subsidiary hasn’t sold it yet. What happens in consolidation?', it: 'La capogruppo vende merce con utile alla controllata, che non l’ha ancora rivenduta. Cosa succede nel consolidato?' },
        answer: {
          en: 'From the group’s perspective nothing has been sold, so I eliminate the intercompany revenue and cost of sales in full, and remove the unrealised margin from closing inventory so it goes back to the group’s original cost. That reduces consolidated gross profit by the unrealised margin; a deferred tax asset reverses the tax on it, so net income falls by the margin times one minus the tax rate. The profit is recognised when the subsidiary sells to a third party.',
          it: 'Dal punto di vista del gruppo nulla è stato venduto, quindi elido integralmente ricavi e costo del venduto infragruppo e tolgo il margine non realizzato dalle rimanenze finali, riportandole al costo originario del gruppo. Il margine lordo consolidato si riduce del margine non realizzato; un’attività per imposte anticipate storna le imposte relative, quindi l’utile netto diminuisce del margine per uno meno l’aliquota. L’utile si rileva quando la controllata vende a un terzo.'
        }
      },
      {
        type: 'mistakes',
        items: [
          { en: 'Using the mark-up on cost instead of the margin on selling price (a 25% margin = 33.3% mark-up).', it: 'Usare il ricarico sul costo invece del margine sul prezzo di vendita (margine 25% = ricarico 33,3%).' },
          { en: 'Eliminating only the parent’s percentage of intragroup balances in a subsidiary. With full consolidation they are eliminated 100%.', it: 'Elidere solo la percentuale della capogruppo dei saldi infragruppo con una controllata. Nel consolidamento integrale si elidono al 100%.' },
          { en: 'Forgetting the deferred tax effect of unrealised profit eliminations (IAS 12).', it: 'Dimenticare l’effetto di fiscalità differita dell’elisione degli utili non realizzati (IAS 12).' },
          { en: 'Leaving intragroup dividends in consolidated income: they double count the subsidiary’s profit.', it: 'Lasciare i dividendi infragruppo nel conto economico consolidato: contano due volte l’utile della controllata.' }
        ]
      },
      {
        type: 'summary',
        items: [
          { en: 'Eliminate 100% of intragroup sales, balances, interest and dividends in full consolidation.', it: 'Nel consolidamento integrale si elidono al 100% vendite, saldi, interessi e dividendi infragruppo.' },
          { en: 'Unrealised profit = intragroup inventory × margin; recognise a DTA on it.', it: 'Utile non realizzato = rimanenze infragruppo × margine; si rilevano imposte anticipate.' },
          { en: 'Upstream profits are shared with NCI under IFRS; downstream hit the parent.', it: 'In IFRS gli utili upstream si ripartiscono con i terzi; quelli downstream gravano sulla capogruppo.' },
          { en: 'Associates/JVs: eliminate only the investor’s share of unrealised profit.', it: 'Collegate/JV: si elide solo la quota dell’investitore dell’utile non realizzato.' }
        ]
      }
    ],
    questions: [
      {
        id: 'acc-ic-q1',
        kind: 'numeric',
        topic: 'intercompany',
        difficulty: 2,
        objective: { en: 'Compute unrealised profit in closing inventory.', it: 'Calcolare l’utile non realizzato nelle rimanenze finali.' },
        prompt: {
          en: 'Sub sells goods to Parent at cost plus 25% (mark-up on cost). Parent still holds €50m of these goods (at transfer price) at year-end. Unrealised profit to eliminate (€m)?',
          it: 'Sub vende merce a Parent al costo più 25% (ricarico sul costo). A fine anno Parent detiene ancora €50m di tale merce (al prezzo di trasferimento). Utile non realizzato da elidere (€m)?'
        },
        answer: 10,
        unit: '€m',
        verify: { fn: 'product', args: [50, 0.2] },
        explanation: {
          en: 'A 25% mark-up on cost = 25/125 = 20% margin on price. 50 × 20% = 10 (cost 40). Applying 25% to the transfer price (12.5) is the classic mark-up/margin confusion.',
          it: 'Un ricarico del 25% sul costo = 25/125 = 20% di margine sul prezzo. 50 × 20% = 10 (costo 40). Applicare il 25% al prezzo di trasferimento (12,5) è la classica confusione tra ricarico e margine.'
        }
      },
      {
        id: 'acc-ic-q2',
        kind: 'numeric',
        topic: 'intercompany',
        difficulty: 1,
        objective: { en: 'Compute consolidated revenue after eliminating intercompany sales.', it: 'Calcolare i ricavi consolidati dopo l’elisione delle vendite infragruppo.' },
        prompt: {
          en: 'Parent revenue €900m (of which €150m to its subsidiary); subsidiary revenue €400m (all external). Consolidated revenue (€m)?',
          it: 'Ricavi di Parent €900m (di cui €150m verso la controllata); ricavi della controllata €400m (tutti verso terzi). Ricavi consolidati (€m)?'
        },
        answer: 1150,
        unit: '€m',
        verify: { fn: 'sum', args: [900, 400, -150] },
        explanation: {
          en: '900 + 400 − 150 = 1,150. The full intragroup sale is eliminated whether or not the goods were resold — the external resale is already in the subsidiary’s €400m.',
          it: '900 + 400 − 150 = 1.150. La vendita infragruppo si elide per intero, che la merce sia stata rivenduta o meno — la rivendita esterna è già nei €400m della controllata.'
        }
      },
      {
        id: 'acc-ic-q3',
        kind: 'numeric',
        topic: 'intercompany',
        difficulty: 2,
        objective: { en: 'Compute the after-tax profit impact of an unrealised profit elimination.', it: 'Calcolare l’effetto netto dell’elisione di un utile non realizzato.' },
        prompt: {
          en: 'Unrealised profit in group inventory is €24m; tax rate 25%. By how much does consolidated net income fall (€m)?',
          it: 'L’utile non realizzato nelle rimanenze di gruppo è €24m; aliquota 25%. Di quanto si riduce l’utile netto consolidato (€m)?'
        },
        answer: 18,
        unit: '€m',
        verify: { fn: 'product', args: [24, 0.75] },
        explanation: {
          en: 'Pre-tax −24, deferred tax income +6 (DTA, IAS 12), net −18. Answering 24 ignores the deferred tax effect.',
          it: 'Ante imposte −24, imposte anticipate +6 (IAS 12), netto −18. Rispondere 24 ignora l’effetto della fiscalità differita.'
        }
      },
      {
        id: 'acc-ic-q4',
        kind: 'mcq',
        topic: 'intercompany',
        difficulty: 2,
        objective: { en: 'Eliminate intercompany dividends with NCI.', it: 'Elidere i dividendi infragruppo in presenza di terzi.' },
        prompt: {
          en: 'A 75%-owned subsidiary pays a €40m dividend. In consolidation:',
          it: 'Una controllata al 75% distribuisce un dividendo di €40m. Nel consolidato:'
        },
        choices: [
          { en: 'Parent’s €30m dividend income is eliminated; €10m reduces NCI; group cash falls by €10m', it: 'Si elidono i €30m di dividendi della capogruppo; €10m riducono i terzi; la cassa di gruppo cala di €10m' },
          { en: 'The full €40m is shown as group dividend income', it: 'Tutti i €40m sono esposti come dividendi di gruppo' },
          { en: 'Nothing is eliminated because the subsidiary is not 100% owned', it: 'Non si elide nulla perché la controllata non è posseduta al 100%' },
          { en: 'Group cash falls by €40m', it: 'La cassa di gruppo cala di €40m' }
        ],
        correct: 0,
        explanation: {
          en: 'The €30m to the parent is an internal transfer (eliminated). The €10m paid to minorities leaves the group: it reduces cash and NCI, and is shown in financing cash flows as dividends paid to NCI.',
          it: 'I €30m alla capogruppo sono un trasferimento interno (eliso). I €10m pagati ai terzi escono dal gruppo: riducono cassa e PN di terzi e figurano nei flussi di finanziamento come dividendi pagati ai terzi.'
        }
      },
      {
        id: 'acc-ic-q5',
        kind: 'numeric',
        topic: 'intercompany',
        difficulty: 3,
        objective: { en: 'Apply IAS 28 partial elimination to a downstream sale to an associate.', it: 'Applicare l’elisione parziale IAS 28 a una vendita downstream a una collegata.' },
        prompt: {
          en: 'An investor owns 30% of an associate and sold it goods with a profit of €40m; all goods are still in the associate’s inventory. Pre-tax profit to eliminate (€m)?',
          it: 'Un investitore detiene il 30% di una collegata e le ha venduto merce con un utile di €40m; tutta la merce è ancora nelle rimanenze della collegata. Utile ante imposte da elidere (€m)?'
        },
        answer: 12,
        unit: '€m',
        verify: { fn: 'product', args: [40, 0.3] },
        explanation: {
          en: 'IAS 28.28: gains on transactions with associates are recognised only to the extent of unrelated investors’ interests → eliminate 30% × 40 = 12. Full elimination (40) applies only to subsidiaries.',
          it: 'IAS 28.28: gli utili su operazioni con collegate si rilevano solo per la quota degli altri soci → si elide 30% × 40 = 12. L’elisione integrale (40) vale solo per le controllate.'
        }
      }
    ],
    flashcards: [
      { id: 'fc-acc-ic-1', topic: 'intercompany', front: { en: 'Entry to eliminate unrealised profit in inventory?', it: 'Scrittura per elidere l’utile non realizzato nelle rimanenze?' }, back: { en: 'Dr Cost of sales, Cr Inventory (plus Dr DTA, Cr tax expense for the tax effect).', it: 'Dare Costo del venduto, Avere Rimanenze (più Dare Imposte anticipate, Avere Imposte per l’effetto fiscale).' } },
      { id: 'fc-acc-ic-2', topic: 'intercompany', front: { en: 'Margin vs mark-up: 25% mark-up on cost equals what margin?', it: 'Margine vs ricarico: un ricarico del 25% sul costo che margine dà?' }, back: { en: '20% of selling price (25 / 125).', it: '20% del prezzo di vendita (25 / 125).' } },
      { id: 'fc-acc-ic-3', topic: 'intercompany', front: { en: 'Upstream unrealised profit with NCI (IFRS)?', it: 'Utile non realizzato upstream con terzi (IFRS)?' }, back: { en: 'Eliminated in full, but allocated between parent and NCI by ownership.', it: 'Eliso integralmente, ma ripartito tra capogruppo e terzi in base alle quote.' } },
      { id: 'fc-acc-ic-4', topic: 'intercompany', front: { en: 'Unrealised profit on sales to an associate?', it: 'Utile non realizzato su vendite a una collegata?' }, back: { en: 'Eliminate only the investor’s share (IAS 28.28).', it: 'Si elide solo la quota dell’investitore (IAS 28.28).' } }
    ],
    sources: [SRC_IFRS10, SRC_IAS28, SRC_IAS12]
  },

  /* ============================================================ */
  /* A6.6 Consolidation workpaper one year later                   */
  /* ============================================================ */
  {
    id: 'acc-consolidation-workpaper',
    academyId: 'accounting',
    moduleId: 'A6',
    mode: 'deep',
    minutes: 18,
    difficulty: 3,
    reviewed: '2026-10',
    objective: {
      en: 'Prepare a consolidation one year after acquisition: goodwill, depreciation of fair value step-ups, NCI roll-forward, consolidated net income and consolidated equity.',
      it: 'Redigere un consolidato a un anno dall’acquisizione: avviamento, ammortamento dei plusvalori, movimentazione dei terzi, utile consolidato e patrimonio netto consolidato.'
    },
    screens: [
      {
        type: 'intuition',
        title: { en: 'The acquisition entry, replayed every year', it: 'La scrittura di acquisizione, ripetuta ogni anno' },
        body: {
          en: 'Consolidation is not a permanent entry in anyone’s books: the parent and subsidiary keep their own ledgers, so **every year the worksheet starts again** from the separate accounts.\n\nEach year you therefore: (1) **replay the acquisition-date elimination** (investment vs equity at acquisition, step-ups, goodwill, NCI at acquisition); (2) add what happened **since** — depreciation of step-ups, the NCI share of post-acquisition profits, intragroup dividends; (3) eliminate the current year’s intragroup items.\n\nOnly **post-acquisition** profits of the subsidiary enter group retained earnings.',
          it: 'Il consolidamento non è una scrittura permanente nei libri di nessuno: capogruppo e controllata tengono la propria contabilità, quindi **ogni anno il foglio di lavoro riparte** dai bilanci separati.\n\nOgni anno quindi: (1) si **ripete l’elisione alla data di acquisizione** (partecipazione contro PN all’acquisizione, plusvalori, avviamento, terzi all’acquisizione); (2) si aggiunge quanto avvenuto **dopo** — ammortamento dei plusvalori, quota dei terzi negli utili successivi, dividendi infragruppo; (3) si elidono le partite infragruppo dell’esercizio.\n\nSolo gli utili della controllata **successivi all’acquisizione** entrano negli utili a nuovo di gruppo.'
        }
      },
      {
        type: 'technical',
        title: { en: 'What changes after year 1', it: 'Cosa cambia dopo il primo anno' },
        body: {
          en: '- **Goodwill**: unchanged under IFRS and US GAAP unless impaired (IAS 36 annual test; ASC 350). Under OIC it is amortised, reducing group profit.\n- **Step-ups**: depreciated/amortised over the remaining useful life of the related asset; an **inventory step-up** reverses through cost of sales as the goods are sold (usually within months). With deferred tax, the DTL unwinds in parallel (A7).\n- **Consolidated net income** = parent’s own profit (excluding intragroup dividends) + subsidiary profit − step-up D&A ± other consolidation adjustments.\n- **NCI** = NCI at acquisition + NCI share of adjusted post-acquisition profit − dividends paid to NCI.\n- **Consolidated retained earnings** = parent’s retained earnings (excluding intragroup dividends) + parent’s share of the subsidiary’s **adjusted post-acquisition** profits.',
          it: '- **Avviamento**: invariato in IFRS e US GAAP salvo impairment (test annuale IAS 36; ASC 350). Con gli OIC si ammortizza, riducendo l’utile di gruppo.\n- **Plusvalori**: ammortizzati lungo la vita utile residua del bene; un **plusvalore sulle rimanenze** si riversa nel costo del venduto quando la merce viene venduta (di solito entro pochi mesi). Con la fiscalità differita, la DTL si riassorbe in parallelo (A7).\n- **Utile consolidato** = utile proprio della capogruppo (esclusi i dividendi infragruppo) + utile della controllata − ammortamenti dei plusvalori ± altre rettifiche di consolidamento.\n- **Terzi** = terzi all’acquisizione + quota dei terzi dell’utile rettificato post acquisizione − dividendi pagati ai terzi.\n- **Utili a nuovo consolidati** = utili a nuovo della capogruppo (esclusi dividendi infragruppo) + quota della capogruppo degli utili **rettificati post acquisizione** della controllata.'
        }
      },
      {
        type: 'formula',
        formulas: [
          { name: { en: 'Consolidated net income', it: 'Utile consolidato' }, expr: 'Group NI = Parent NI (ex intragroup dividends) + Sub NI − Step-up D&A (after tax if DTL recognised)' },
          { name: { en: 'NCI roll-forward', it: 'Movimentazione dei terzi' }, expr: 'NCI_close = NCI_acq + (1 − p) × (Sub NI − Step-up D&A) − (1 − p) × Sub dividends' },
          { name: { en: 'NCI check (proportionate method)', it: 'Verifica dei terzi (metodo proporzionale)' }, expr: 'NCI_close = (1 − p) × (Sub book equity_close + Unamortised step-ups)' },
          {
            name: { en: 'Consolidated retained earnings', it: 'Utili a nuovo consolidati' },
            expr: 'Group RE = Parent RE (ex intragroup dividends) + p × (Sub RE_close − Sub RE_acq − cumulative step-up D&A)',
            vars: [{ sym: 'p', desc: { en: 'Parent’s ownership %', it: 'Quota di possesso della capogruppo' } }]
          }
        ]
      },
      {
        type: 'example',
        title: { en: 'The facts', it: 'I dati' },
        body: {
          en: 'On **1 Jan 2025** Parent S.p.A. buys **80%** of Sub S.r.l. for **€640m** cash. At that date Sub’s equity is €600m (capital 200, retained earnings 400). Sub’s plant is worth **€100m** more than book (10 years remaining, straight-line). NCI measured at the proportionate share; tax effects ignored for clarity.\n\n- FV identifiable net assets = 600 + 100 = **700**\n- NCI at acquisition = 20% × 700 = **140**\n- Goodwill = 640 + 140 − 700 = **80**\n\nDuring 2025: Sub earns **€90m** and pays **€30m** dividends. Parent’s own profit before Sub dividends is **€300m**; it also records €24m dividend income from Sub (its separate-accounts profit: 324). Parent paid no dividends.',
          it: 'Il **1° gennaio 2025** Parent S.p.A. acquista l’**80%** di Sub S.r.l. per **€640m** in contanti. A quella data il PN di Sub è €600m (capitale 200, utili a nuovo 400). Gli impianti di Sub valgono **€100m** in più del contabile (vita residua 10 anni, quote costanti). Terzi valutati in quota proporzionale; effetti fiscali ignorati per chiarezza.\n\n- FV attivo netto identificabile = 600 + 100 = **700**\n- Terzi all’acquisizione = 20% × 700 = **140**\n- Avviamento = 640 + 140 − 700 = **80**\n\nNel 2025: Sub realizza un utile di **€90m** e distribuisce **€30m** di dividendi. L’utile proprio di Parent prima dei dividendi di Sub è **€300m**; registra inoltre €24m di dividendi da Sub (utile nel bilancio separato: 324). Parent non ha distribuito dividendi.'
        }
      },
      {
        type: 'example',
        title: { en: 'Income statement and NCI for 2025', it: 'Conto economico e terzi per il 2025' },
        body: {
          en: 'Step-up depreciation = 100 / 10 = **10** per year. Sub’s adjusted profit = 90 − 10 = **80**.',
          it: 'Ammortamento del plusvalore = 100 / 10 = **10** l’anno. Utile rettificato di Sub = 90 − 10 = **80**.'
        },
        tables: [
          {
            caption: { en: 'Consolidated net income (€m)', it: 'Utile consolidato (€m)' },
            headers: [{ en: 'Item', it: 'Voce' }, { en: '€m', it: '€m' }],
            rows: [
              [{ en: 'Parent separate profit', it: 'Utile separato di Parent' }, '324'],
              [{ en: 'Eliminate dividend from Sub', it: 'Elisione dividendo da Sub' }, '(24)'],
              [{ en: 'Sub profit', it: 'Utile di Sub' }, '90'],
              [{ en: 'Step-up depreciation', it: 'Ammortamento plusvalore' }, '(10)'],
              [{ en: 'Consolidated net income', it: 'Utile consolidato' }, '380'],
              [{ en: '– attributable to NCI (20% × 80)', it: '– di pertinenza di terzi (20% × 80)' }, '16'],
              [{ en: '– attributable to owners of Parent', it: '– di pertinenza della capogruppo' }, '364']
            ],
            totalRows: [4]
          },
          {
            caption: { en: 'NCI roll-forward (€m)', it: 'Movimentazione dei terzi (€m)' },
            headers: [{ en: 'Item', it: 'Voce' }, { en: '€m', it: '€m' }],
            rows: [
              [{ en: 'NCI at 1 Jan 2025', it: 'Terzi al 1° gen. 2025' }, '140'],
              [{ en: 'Share of profit', it: 'Quota di utile' }, '16'],
              [{ en: 'Dividends to NCI (20% × 30)', it: 'Dividendi ai terzi (20% × 30)' }, '(6)'],
              [{ en: 'NCI at 31 Dec 2025', it: 'Terzi al 31 dic. 2025' }, '150'],
              [{ en: 'Check: 20% × (660 book equity + 90 unamortised step-up)', it: 'Verifica: 20% × (660 PN contabile + 90 plusvalore residuo)' }, '150']
            ],
            totalRows: [3]
          }
        ]
      },
      {
        type: 'example',
        title: { en: 'Consolidated balance sheet at 31 Dec 2025', it: 'Stato patrimoniale consolidato al 31 dic. 2025' },
        body: {
          en: 'Eliminations: investment 640 vs Sub capital 200 + **pre-acquisition** RE 400 + step-up 100 + goodwill 80 − NCI 140. Then: step-up depreciation −10, NCI share of post-acquisition change (16 − 6 = 10). Consolidated RE = 1,824 − 24 + 80% × 80 = **1,864** (Parent RE at acquisition 1,500).',
          it: 'Elisioni: partecipazione 640 contro capitale di Sub 200 + utili a nuovo **ante acquisizione** 400 + plusvalore 100 + avviamento 80 − terzi 140. Poi: ammortamento plusvalore −10, quota terzi della variazione post acquisizione (16 − 6 = 10). Utili a nuovo consolidati = 1.824 − 24 + 80% × 80 = **1.864** (utili a nuovo di Parent all’acquisizione 1.500).'
        },
        table: {
          headers: [{ en: '€m', it: '€m' }, { en: 'Parent', it: 'Parent' }, { en: 'Sub', it: 'Sub' }, { en: 'Adj.', it: 'Rettifiche' }, { en: 'Consolidated', it: 'Consolidato' }],
          rows: [
            [{ en: 'Goodwill', it: 'Avviamento' }, '0', '0', '+80', '80'],
            [{ en: 'Investment in Sub', it: 'Partecipazione in Sub' }, '640', '0', '−640', '0'],
            [{ en: 'PP&E', it: 'Immobilizzazioni materiali' }, '1,800', '500', '+100 −10', '2,390'],
            [{ en: 'Current assets', it: 'Attivo circolante' }, '1,184', '400', '', '1,584'],
            [{ en: 'Total assets', it: 'Totale attivo' }, '3,624', '900', '', '4,054'],
            [{ en: 'Liabilities', it: 'Passività' }, '800', '240', '', '1,040'],
            [{ en: 'Share capital', it: 'Capitale sociale' }, '1,000', '200', '−200', '1,000'],
            [{ en: 'Retained earnings', it: 'Utili a nuovo' }, '1,824', '460', '−420', '1,864'],
            [{ en: 'NCI', it: 'PN di terzi' }, '—', '—', '+150', '150'],
            [{ en: 'Total L + E', it: 'Totale passivo + PN' }, '3,624', '900', '', '4,054']
          ],
          totalRows: [4, 9]
        }
      },
      {
        type: 'realworld',
        body: {
          en: 'This is what sits behind a "first full year post-closing" set of accounts — and why reported EPS after a deal is often depressed by **PPA amortisation**. Many acquirers therefore also publish "adjusted" earnings excluding amortisation of acquired intangibles; analysts must understand the reconciliation. Under Italian GAAP the same worksheet also includes **goodwill amortisation** (OIC 24), so the same deal shows lower profits than under IFRS.',
          it: 'È ciò che sta dietro al bilancio del "primo esercizio intero dopo il closing" — e spiega perché l’EPS reported dopo un’acquisizione è spesso penalizzato dagli **ammortamenti da PPA**. Molti acquirenti pubblicano quindi anche utili "adjusted" che escludono l’ammortamento degli intangibili acquisiti; l’analista deve saperne leggere la riconciliazione. Con i principi italiani lo stesso foglio di lavoro include anche l’**ammortamento dell’avviamento** (OIC 24), quindi la stessa operazione mostra utili inferiori rispetto agli IFRS.'
        }
      },
      { type: 'exercise', questionId: 'acc-cw-q1' },
      { type: 'exercise', questionId: 'acc-cw-q2' },
      { type: 'exercise', questionId: 'acc-cw-q3' },
      {
        type: 'interview',
        question: { en: 'One year after buying 80% of a company, how do you get to consolidated net income and NCI?', it: 'Un anno dopo aver acquistato l’80% di una società, come si arriva all’utile consolidato e ai terzi?' },
        answer: {
          en: 'I take the parent’s profit, strip out dividends received from the subsidiary because they are intragroup, add 100% of the subsidiary’s profit and deduct consolidation adjustments — mainly depreciation and amortisation of the fair value step-ups, net of the deferred tax unwind, plus any unrealised intragroup profit. Of that adjusted subsidiary profit, 20% is attributed to NCI. NCI on the balance sheet rolls forward from its acquisition-date value plus its share of profit minus dividends paid to minorities. Goodwill stays at cost under IFRS unless impaired.',
          it: 'Parto dall’utile della capogruppo, tolgo i dividendi ricevuti dalla controllata perché infragruppo, aggiungo il 100% dell’utile della controllata e deduco le rettifiche di consolidamento — soprattutto gli ammortamenti dei plusvalori, al netto del riassorbimento della fiscalità differita, ed eventuali utili infragruppo non realizzati. Di questo utile rettificato della controllata, il 20% è attribuito ai terzi. Il PN di terzi si movimenta dal valore all’acquisizione più la quota di utile meno i dividendi pagati ai terzi. In IFRS l’avviamento resta al costo salvo impairment.'
        }
      },
      {
        type: 'mistakes',
        items: [
          { en: 'Eliminating the subsidiary’s closing retained earnings instead of only pre-acquisition retained earnings.', it: 'Elidere gli utili a nuovo finali della controllata invece dei soli utili ante acquisizione.' },
          { en: 'Leaving intragroup dividend income in consolidated profit (double counting the subsidiary’s earnings).', it: 'Lasciare i dividendi infragruppo nell’utile consolidato (doppio conteggio degli utili della controllata).' },
          { en: 'Computing the NCI share on the subsidiary’s reported profit, ignoring step-up depreciation (when NCI shares in the step-ups).', it: 'Calcolare la quota dei terzi sull’utile della controllata ignorando l’ammortamento dei plusvalori (quando i terzi partecipano ai plusvalori).' },
          { en: 'Amortising goodwill under IFRS. Only OIC (and the US private company alternative) amortise goodwill.', it: 'Ammortizzare l’avviamento in IFRS. Solo gli OIC (e l’alternativa US per le private company) lo ammortizzano.' }
        ]
      },
      {
        type: 'summary',
        items: [
          { en: 'Each year: replay the acquisition elimination, then add post-acquisition movements.', it: 'Ogni anno: si ripete l’elisione all’acquisizione, poi si aggiungono i movimenti successivi.' },
          { en: 'Group NI = parent NI ex intragroup dividends + sub NI − step-up D&A.', it: 'Utile di gruppo = utile capogruppo esclusi dividendi infragruppo + utile controllata − ammortamenti dei plusvalori.' },
          { en: 'NCI = NCI at acquisition + share of adjusted profit − dividends to NCI.', it: 'Terzi = terzi all’acquisizione + quota di utile rettificato − dividendi ai terzi.' },
          { en: 'Only post-acquisition, adjusted profits of the subsidiary enter group retained earnings.', it: 'Negli utili a nuovo di gruppo entrano solo gli utili rettificati della controllata successivi all’acquisizione.' }
        ]
      }
    ],
    questions: [
      {
        id: 'acc-cw-q1',
        kind: 'grid',
        topic: 'consolidation-workpaper',
        difficulty: 3,
        objective: { en: 'Prepare key consolidated figures one year after acquisition.', it: 'Calcolare le principali grandezze consolidate a un anno dall’acquisizione.' },
        prompt: {
          en: 'On 1 Jan Parent buys 60% of Sub for €390m. Sub’s equity at acquisition: €500m. Brand step-up €50m, amortised over 5 years. NCI at proportionate share; ignore tax. In year 1 Sub earns €70m and pays €20m dividends; Parent’s own profit excluding Sub dividends is €150m. Fill in (€m).',
          it: 'Il 1° gennaio Parent acquista il 60% di Sub per €390m. PN di Sub all’acquisizione: €500m. Plusvalore sul marchio €50m, ammortizzato in 5 anni. Terzi in quota proporzionale; ignora le imposte. Nell’anno Sub realizza €70m di utile e distribuisce €20m di dividendi; l’utile proprio di Parent esclusi i dividendi di Sub è €150m. Completa (€m).'
        },
        unit: '€m',
        columns: [
          { en: 'Item', it: 'Voce' },
          { en: 'Value', it: 'Valore' }
        ],
        rows: [
          { label: { en: 'NCI at acquisition', it: 'Terzi all’acquisizione' }, cells: [{ answer: 220, verify: { fn: 'product', args: [0.4, 550] } }] },
          { label: { en: 'Goodwill', it: 'Avviamento' }, cells: [{ answer: 60, verify: { fn: 'goodwill', args: [390, 550, 220] } }] },
          { label: { en: 'Brand amortisation, year 1', it: 'Ammortamento marchio, anno 1' }, cells: [{ answer: 10, verify: { fn: 'straightLineDepreciation', args: [50, 0, 5] } }] },
          { label: { en: 'Consolidated net income', it: 'Utile consolidato' }, cells: [{ answer: 210, verify: { fn: 'sum', args: [150, 70, -10] } }] },
          { label: { en: 'NCI share of profit', it: 'Utile di terzi' }, cells: [{ answer: 24, verify: { fn: 'nciShareOfProfit', args: [60, 0.6] } }] },
          { label: { en: 'NI attributable to Parent', it: 'Utile di pertinenza della capogruppo' }, cells: [{ answer: 186, verify: { fn: 'diff', args: [210, 24] } }] },
          { label: { en: 'NCI at year-end', it: 'Terzi a fine anno' }, cells: [{ answer: 236, verify: { fn: 'sum', args: [220, 24, -8] } }] },
          { label: { en: 'Brand in consolidated BS, year-end', it: 'Marchio nel consolidato, fine anno' }, cells: [{ answer: 40, verify: { fn: 'diff', args: [50, 10] } }] }
        ],
        explanation: {
          en: 'FV net assets = 500 + 50 = 550; NCI = 40% × 550 = 220; goodwill = 390 + 220 − 550 = 60. Brand amortisation 50/5 = 10. Group NI = 150 + 70 − 10 = 210 (Sub dividends to Parent excluded). NCI share = 40% × 60 = 24 → parent 186. NCI close = 220 + 24 − 40% × 20 = 236; check: 40% × (550 book equity + 40 unamortised brand) = 236.',
          it: 'FV attivo netto = 500 + 50 = 550; terzi = 40% × 550 = 220; avviamento = 390 + 220 − 550 = 60. Ammortamento marchio 50/5 = 10. Utile di gruppo = 150 + 70 − 10 = 210 (esclusi i dividendi di Sub a Parent). Quota terzi = 40% × 60 = 24 → capogruppo 186. Terzi finali = 220 + 24 − 40% × 20 = 236; verifica: 40% × (550 PN contabile + 40 marchio residuo) = 236.'
        }
      },
      {
        id: 'acc-cw-q2',
        kind: 'numeric',
        topic: 'consolidation-workpaper',
        difficulty: 3,
        objective: { en: 'Compute consolidated retained earnings after one year.', it: 'Calcolare gli utili a nuovo consolidati dopo un anno.' },
        prompt: {
          en: 'Using the lesson example: Parent’s retained earnings at year-end are €1,824m (including €24m dividend from Sub). Sub’s RE rose from €400m to €460m; step-up depreciation €10m; Parent owns 80%. Consolidated retained earnings (€m)?',
          it: 'Con l’esempio della lezione: gli utili a nuovo di Parent a fine anno sono €1.824m (inclusi €24m di dividendo da Sub). Gli utili a nuovo di Sub sono passati da €400m a €460m; ammortamento del plusvalore €10m; Parent possiede l’80%. Utili a nuovo consolidati (€m)?'
        },
        answer: 1864,
        unit: '€m',
        verify: { fn: 'sum', args: [1824, 40] },
        steps: [
          { en: 'Sub adjusted post-acquisition change: 460 − 400 − 10 = 50', it: 'Variazione rettificata post acquisizione di Sub: 460 − 400 − 10 = 50' },
          { en: 'Parent share: 80% × 50 = 40 → 1,824 + 40 = 1,864', it: 'Quota capogruppo: 80% × 50 = 40 → 1.824 + 40 = 1.864' }
        ],
        explanation: {
          en: 'Because Parent’s RE already include the €24m dividend, add only Parent’s share of Sub’s retained post-acquisition profit (after step-up depreciation): 80% × 50 = 40. Equivalent route: (1,824 − 24) + 80% × 80 = 1,864. Adding 80% × 80 to 1,824 (1,888) double counts the dividend.',
          it: 'Poiché gli utili a nuovo di Parent includono già il dividendo di €24m, si aggiunge solo la quota di Parent degli utili trattenuti da Sub dopo l’acquisizione (al netto dell’ammortamento del plusvalore): 80% × 50 = 40. In alternativa: (1.824 − 24) + 80% × 80 = 1.864. Sommare 80% × 80 a 1.824 (1.888) conta due volte il dividendo.'
        }
      },
      {
        id: 'acc-cw-q3',
        kind: 'mcq',
        topic: 'consolidation-workpaper',
        difficulty: 2,
        objective: { en: 'Understand which subsidiary equity is eliminated in later years.', it: 'Capire quale PN della controllata si elide negli esercizi successivi.' },
        prompt: { en: 'In the year-2 consolidation worksheet, the investment in the subsidiary is eliminated against:', it: 'Nel foglio di consolidamento del secondo anno, la partecipazione nella controllata si elide contro:' },
        choices: [
          { en: 'The subsidiary’s equity at the acquisition date (plus step-ups, goodwill and NCI at acquisition)', it: 'Il PN della controllata alla data di acquisizione (più plusvalori, avviamento e terzi all’acquisizione)' },
          { en: 'The subsidiary’s equity at the end of year 2', it: 'Il PN della controllata alla fine del secondo anno' },
          { en: 'The subsidiary’s equity at the end of year 1', it: 'Il PN della controllata alla fine del primo anno' },
          { en: 'Nothing: the elimination was booked permanently in year 1', it: 'Niente: l’elisione è stata registrata in modo permanente nel primo anno' }
        ],
        correct: 0,
        explanation: {
          en: 'The acquisition elimination is replayed every year on acquisition-date amounts; post-acquisition equity movements stay in consolidated RE (parent share) and NCI. Consolidation entries are not posted in the entities’ ledgers, so they must be repeated.',
          it: 'L’elisione di acquisizione si ripete ogni anno sui valori alla data di acquisizione; le variazioni di PN successive restano negli utili a nuovo consolidati (quota capogruppo) e nei terzi. Le scritture di consolidamento non sono registrate nei libri delle società, quindi vanno ripetute.'
        }
      },
      {
        id: 'acc-cw-q4',
        kind: 'numeric',
        topic: 'consolidation-workpaper',
        difficulty: 2,
        objective: { en: 'Compute total consolidated equity.', it: 'Calcolare il patrimonio netto consolidato totale.' },
        prompt: {
          en: 'From the lesson example: Parent share capital €1,000m, consolidated retained earnings €1,864m, NCI €150m. Total consolidated equity (€m)?',
          it: 'Dall’esempio della lezione: capitale di Parent €1.000m, utili a nuovo consolidati €1.864m, terzi €150m. Patrimonio netto consolidato totale (€m)?'
        },
        answer: 3014,
        unit: '€m',
        verify: { fn: 'sum', args: [1000, 1864, 150] },
        explanation: {
          en: 'Equity attributable to owners of Parent 2,864 + NCI 150 = 3,014 = total assets 4,054 − liabilities 1,040. NCI is part of equity under IFRS 10 and ASC 810.',
          it: 'PN di pertinenza della capogruppo 2.864 + terzi 150 = 3.014 = totale attivo 4.054 − passività 1.040. I terzi fanno parte del PN secondo IFRS 10 e ASC 810.'
        }
      }
    ],
    flashcards: [
      { id: 'fc-acc-cw-1', topic: 'consolidation-workpaper', front: { en: 'Why repeat the acquisition elimination every year?', it: 'Perché ripetere l’elisione di acquisizione ogni anno?' }, back: { en: 'Consolidation entries are not posted in the entities’ ledgers; each year starts from the separate accounts.', it: 'Le scritture di consolidamento non sono nei libri delle società; ogni anno si riparte dai bilanci separati.' } },
      { id: 'fc-acc-cw-2', topic: 'consolidation-workpaper', front: { en: 'NCI roll-forward?', it: 'Movimentazione dei terzi?' }, back: { en: 'NCI at acquisition + NCI share of adjusted profit (± OCI) − dividends paid to NCI.', it: 'Terzi all’acquisizione + quota di utile rettificato (± OCI) − dividendi pagati ai terzi.' } },
      { id: 'fc-acc-cw-3', topic: 'consolidation-workpaper', front: { en: 'What happens to an inventory step-up after closing?', it: 'Cosa succede a un plusvalore sulle rimanenze dopo il closing?' }, back: { en: 'It is released to cost of sales as the acquired inventory is sold — a one-off margin hit.', it: 'Si riversa nel costo del venduto quando le rimanenze acquisite vengono vendute — un impatto una tantum sul margine.' } },
      { id: 'fc-acc-cw-4', topic: 'consolidation-workpaper', front: { en: 'Which subsidiary profits enter group retained earnings?', it: 'Quali utili della controllata entrano negli utili a nuovo di gruppo?' }, back: { en: 'Only the parent’s share of post-acquisition profits, after consolidation adjustments.', it: 'Solo la quota della capogruppo degli utili post acquisizione, dopo le rettifiche di consolidamento.' } }
    ],
    sources: [SRC_IFRS10, SRC_IFRS3, SRC_IAS36, SRC_OIC17]
  },

  /* ============================================================ */
  /* A7.1 Business combinations & the acquisition method           */
  /* ============================================================ */
  {
    id: 'acc-business-combinations',
    academyId: 'accounting',
    moduleId: 'A7',
    mode: 'deep',
    minutes: 13,
    difficulty: 2,
    reviewed: '2026-10',
    objective: {
      en: 'Determine whether a transaction is a business combination and apply the acquisition method under IFRS 3 / ASC 805: acquirer, acquisition date, consideration, acquisition-related costs.',
      it: 'Stabilire se un’operazione è un’aggregazione aziendale e applicare il metodo dell’acquisizione secondo IFRS 3 / ASC 805: acquirente, data di acquisizione, corrispettivo, costi correlati all’acquisizione.'
    },
    screens: [
      {
        type: 'intuition',
        title: { en: 'Buying a business vs buying assets', it: 'Comprare un business o comprare beni' },
        body: {
          en: 'Buying a warehouse is buying an asset. Buying a company with staff, processes, customers and know-how is buying a **business** — and the price usually exceeds the value of the individual assets.\n\nWhen you buy a business, accounting asks you to **re-measure everything at fair value** on the day you take control and to recognise the unexplained premium as **goodwill**. When you only buy assets, you simply record them at cost: no goodwill.',
          it: 'Comprare un magazzino significa comprare un bene. Comprare una società con personale, processi, clienti e know-how significa comprare un **business** — e il prezzo di solito supera il valore dei singoli beni.\n\nQuando compri un business, la contabilità impone di **rimisurare tutto al fair value** nel giorno in cui ottieni il controllo e di rilevare il premio non spiegato come **avviamento**. Quando compri solo beni, li iscrivi al costo: niente avviamento.'
        }
      },
      {
        type: 'technical',
        title: { en: 'What is a business?', it: 'Che cos’è un business?' },
        body: {
          en: '**IFRS 3 (as amended in 2018, effective for acquisitions from 1 January 2020)**: an integrated set of activities and assets capable of being conducted and managed to provide goods or services to customers, generate investment income or other income from ordinary activities.\n\n- It must include, at a minimum, an **input and a substantive process** that together significantly contribute to the ability to create outputs.\n- **Optional concentration test**: if substantially all the fair value of gross assets acquired is concentrated in a single identifiable asset (or group of similar assets), it is **not** a business.\n\n**US GAAP (ASU 2017-01, ASC 805-10)**: a similar framework, but the "screen" (concentration test) is **mandatory**.\n\nAn **asset acquisition**: cost allocated on relative fair values, transaction costs capitalised, no goodwill.',
          it: '**IFRS 3 (modificato nel 2018, in vigore per le acquisizioni dal 1° gennaio 2020)**: un insieme integrato di attività e beni che può essere condotto e gestito per fornire beni o servizi ai clienti, generare proventi da investimenti o altri proventi da attività ordinarie.\n\n- Deve comprendere, come minimo, un **fattore di produzione (input) e un processo sostanziale** che insieme contribuiscono in modo significativo alla capacità di generare output.\n- **Test di concentrazione facoltativo**: se sostanzialmente tutto il fair value delle attività lorde acquisite è concentrato in un’unica attività identificabile (o gruppo di attività simili), **non** è un business.\n\n**US GAAP (ASU 2017-01, ASC 805-10)**: impostazione simile, ma lo "screen" (test di concentrazione) è **obbligatorio**.\n\nUn’**acquisizione di attività**: costo ripartito in base ai fair value relativi, costi di transazione capitalizzati, nessun avviamento.'
        }
      },
      {
        type: 'technical',
        title: { en: 'The acquisition method in four steps', it: 'Il metodo dell’acquisizione in quattro passi' },
        body: {
          en: '1. **Identify the acquirer** — the entity obtaining control (IFRS 10). In share-for-share deals look at relative voting rights, board and management composition, relative size and who pays a premium; the legal acquirer may be the accounting acquiree (**reverse acquisition**).\n2. **Determine the acquisition date** — the date control is obtained, generally the **closing** date, not signing or announcement.\n3. **Recognise and measure** identifiable assets acquired, liabilities assumed (including contingent liabilities that are present obligations) and any NCI — at acquisition-date **fair value**, with limited exceptions (e.g. deferred taxes under IAS 12 / ASC 740, employee benefits, leases).\n4. **Recognise goodwill** or a **bargain purchase gain**.\n\nA **measurement period** of up to **one year** from the acquisition date allows provisional amounts to be finalised, adjusting goodwill.',
          it: '1. **Identificare l’acquirente** — l’entità che ottiene il controllo (IFRS 10). Negli scambi azionari si guardano diritti di voto relativi, composizione di CdA e management, dimensioni relative e chi paga un premio; l’acquirente legale può essere l’acquisita contabile (**acquisizione inversa**).\n2. **Determinare la data di acquisizione** — la data in cui si ottiene il controllo, in genere il **closing**, non il signing o l’annuncio.\n3. **Rilevare e misurare** attività identificabili acquisite, passività assunte (comprese le passività potenziali che sono obbligazioni attuali) e terzi — al **fair value** alla data di acquisizione, con eccezioni limitate (es. imposte differite secondo IAS 12 / ASC 740, benefici ai dipendenti, leasing).\n4. **Rilevare l’avviamento** o un **utile da acquisto a prezzi favorevoli**.\n\nUn **periodo di valutazione** fino a **un anno** dalla data di acquisizione consente di definire i valori provvisori, rettificando l’avviamento.'
        }
      },
      {
        type: 'technical',
        title: { en: 'Consideration and acquisition-related costs', it: 'Corrispettivo e costi correlati all’acquisizione' },
        body: {
          en: '**Consideration transferred** = acquisition-date fair value of cash, shares issued (at the **closing-date** share price), contingent consideration and other assets given.\n\n**Acquisition-related costs** (M&A advisory, legal, accounting, valuation fees) are **expensed** as incurred under IFRS 3.53 and ASC 805 — they are not part of goodwill. Exceptions:\n- **Equity issuance costs** → deducted from equity (IAS 32).\n- **Debt issuance costs** → reduce the carrying amount of the debt and are amortised through the effective interest rate (IFRS 9; under US GAAP shown as a direct deduction from the debt).\n\n**Italian GAAP contrast**: under OIC 21 the cost of a participation includes ancillary costs (costi accessori), so in OIC accounts deal costs end up in the investment and hence in the consolidation difference.\n\nIFRS 3 does not apply to **business combinations under common control**.',
          it: '**Corrispettivo trasferito** = fair value alla data di acquisizione di cassa, azioni emesse (al prezzo di borsa del **closing**), corrispettivi potenziali e altre attività cedute.\n\nI **costi correlati all’acquisizione** (advisory M&A, legali, contabili, perizie) sono **spesati** a conto economico secondo IFRS 3.53 e ASC 805 — non entrano nell’avviamento. Eccezioni:\n- **Costi di emissione di azioni** → a riduzione del PN (IAS 32).\n- **Costi di emissione del debito** → riducono il valore contabile del debito e si ammortizzano col tasso di interesse effettivo (IFRS 9; negli US GAAP esposti a diretta riduzione del debito).\n\n**Confronto con gli OIC**: secondo l’OIC 21 il costo di una partecipazione comprende i costi accessori, quindi nei bilanci OIC i costi dell’operazione confluiscono nella partecipazione e di qui nella differenza di consolidamento.\n\nL’IFRS 3 non si applica alle **aggregazioni tra entità sotto controllo comune**.'
        }
      },
      {
        type: 'formula',
        formulas: [
          {
            name: { en: 'Goodwill (IFRS 3.32 / ASC 805-30-30-1)', it: 'Avviamento (IFRS 3.32 / ASC 805-30-30-1)' },
            expr: 'Goodwill = Consideration transferred + NCI + FV of previously held equity interest − FV of identifiable net assets',
            vars: [
              { sym: 'Consideration', desc: { en: 'Cash + FV of shares issued + FV of contingent consideration', it: 'Cassa + FV delle azioni emesse + FV dei corrispettivi potenziali' } },
              { sym: 'Previously held interest', desc: { en: 'Remeasured to FV at the date control is obtained (step acquisition), gain/loss in P&L', it: 'Rimisurata a FV alla data di ottenimento del controllo (acquisizione per fasi), utile/perdita a CE' } }
            ]
          },
          { name: { en: 'Negative result', it: 'Risultato negativo' }, expr: 'If Goodwill < 0 after reassessment → bargain purchase gain in P&L' }
        ]
      },
      {
        type: 'example',
        title: { en: 'Measuring consideration and deal costs', it: 'Misurare corrispettivo e costi dell’operazione' },
        body: {
          en: 'Alfa S.p.A. signs to buy 100% of Beta on 15 March (Alfa share price €22) and closes on 30 June (share price €25). It pays **€40m cash + 1m new Alfa shares**. It pays €3m of advisory and legal fees and €0.5m of share issuance costs. FV of Beta’s identifiable net assets: €50m.',
          it: 'Alfa S.p.A. firma per acquistare il 100% di Beta il 15 marzo (prezzo azione Alfa €22) e perfeziona il closing il 30 giugno (prezzo €25). Paga **€40m in contanti + 1m di nuove azioni Alfa**. Sostiene €3m di commissioni di advisory e legali e €0,5m di costi di emissione delle azioni. FV dell’attivo netto identificabile di Beta: €50m.'
        },
        table: {
          headers: [{ en: 'Item (€m)', it: 'Voce (€m)' }, { en: 'IFRS 3 / ASC 805', it: 'IFRS 3 / ASC 805' }],
          rows: [
            [{ en: 'Cash', it: 'Cassa' }, '40'],
            [{ en: 'Shares: 1m × €25 (closing price)', it: 'Azioni: 1m × €25 (prezzo al closing)' }, '25'],
            [{ en: 'Consideration transferred', it: 'Corrispettivo trasferito' }, '65'],
            [{ en: 'FV identifiable net assets', it: 'FV attivo netto identificabile' }, '(50)'],
            [{ en: 'Goodwill', it: 'Avviamento' }, '15'],
            [{ en: 'Advisory/legal fees → P&L expense', it: 'Advisory/legali → costo a CE' }, '3'],
            [{ en: 'Share issuance costs → equity', it: 'Costi di emissione → PN' }, '0.5']
          ],
          totalRows: [2, 4]
        }
      },
      {
        type: 'realworld',
        body: {
          en: 'In merger models analysts treat **transaction fees** as a use of funds and, for accounting, split them: advisory fees hit retained earnings at closing (non-recurring, excluded from pro forma run-rate EPS), **financing fees** are capitalised and amortised into interest expense. The acquisition-date share price matters in stock deals: if the acquirer’s shares rally between signing and closing, consideration — and goodwill — rise, even though the exchange ratio was fixed.',
          it: 'Nei merger model gli analisti trattano le **commissioni di transazione** come impiego di fondi e, ai fini contabili, le distinguono: le commissioni di advisory riducono gli utili a nuovo al closing (non ricorrenti, escluse dall’EPS pro forma a regime), le **commissioni di finanziamento** sono capitalizzate e ammortizzate negli oneri finanziari. Nelle operazioni carta contro carta conta il prezzo al closing: se le azioni dell’acquirente salgono tra signing e closing, il corrispettivo — e l’avviamento — aumentano, anche se il rapporto di cambio era fisso.'
        }
      },
      { type: 'exercise', questionId: 'acc-bc-q1' },
      { type: 'exercise', questionId: 'acc-bc-q2' },
      { type: 'exercise', questionId: 'acc-bc-q3' },
      {
        type: 'interview',
        question: { en: 'How are transaction costs treated in an acquisition?', it: 'Come si trattano i costi di transazione in un’acquisizione?' },
        answer: {
          en: 'It depends on the type. Under IFRS 3 and ASC 805, M&A advisory, legal and due diligence fees are expensed as incurred — they reduce net income and retained earnings and do not go into goodwill. Debt financing fees are capitalised against the debt and amortised through interest expense over the life of the loan. Equity issuance costs reduce equity. In a merger model I would show advisory fees as a one-off reduction of the combined equity and exclude them from run-rate EPS. Under Italian GAAP, by contrast, ancillary costs are capitalised in the cost of the participation.',
          it: 'Dipende dalla tipologia. Secondo IFRS 3 e ASC 805, le commissioni di advisory M&A, legali e di due diligence si spesano quando sostenute — riducono utile e utili a nuovo e non entrano nell’avviamento. Le commissioni di finanziamento si capitalizzano a riduzione del debito e si ammortizzano negli oneri finanziari lungo la durata del prestito. I costi di emissione di azioni riducono il PN. In un merger model mostrerei le commissioni di advisory come riduzione una tantum del PN combinato, escludendole dall’EPS a regime. Con gli OIC, invece, i costi accessori si capitalizzano nel costo della partecipazione.'
        }
      },
      {
        type: 'mistakes',
        items: [
          { en: 'Adding advisory fees to goodwill under IFRS or US GAAP. They are expensed.', it: 'Aggiungere le commissioni di advisory all’avviamento in IFRS o US GAAP. Si spesano.' },
          { en: 'Using the signing or announcement date share price to value shares issued. Use the acquisition (closing) date fair value.', it: 'Valutare le azioni emesse al prezzo del signing o dell’annuncio. Si usa il fair value alla data di acquisizione (closing).' },
          { en: 'Assuming the legal acquirer is always the accounting acquirer (reverse acquisitions exist).', it: 'Presumere che l’acquirente legale sia sempre quello contabile (esistono le acquisizioni inverse).' },
          { en: 'Recognising goodwill on an asset acquisition that does not meet the definition of a business.', it: 'Rilevare avviamento su un’acquisizione di attività che non soddisfa la definizione di business.' }
        ]
      },
      {
        type: 'summary',
        items: [
          { en: 'Business = inputs + substantive processes; concentration test optional (IFRS), mandatory screen (US GAAP).', it: 'Business = input + processi sostanziali; test di concentrazione facoltativo (IFRS), screen obbligatorio (US GAAP).' },
          { en: 'Acquisition method: acquirer → acquisition date → FV of net assets and NCI → goodwill.', it: 'Metodo dell’acquisizione: acquirente → data di acquisizione → FV di attivo netto e terzi → avviamento.' },
          { en: 'Consideration at acquisition-date fair value; deal costs expensed (IFRS/US GAAP), capitalised in the investment (OIC).', it: 'Corrispettivo al fair value alla data di acquisizione; costi spesati (IFRS/US GAAP), capitalizzati nella partecipazione (OIC).' },
          { en: 'Measurement period: up to one year to finalise provisional amounts.', it: 'Periodo di valutazione: fino a un anno per definire i valori provvisori.' }
        ]
      }
    ],
    questions: [
      {
        id: 'acc-bc-q1',
        kind: 'order',
        topic: 'business-combinations',
        difficulty: 1,
        objective: { en: 'Sequence the steps of the acquisition method.', it: 'Ordinare le fasi del metodo dell’acquisizione.' },
        prompt: { en: 'Order the steps of the acquisition method (IFRS 3.5).', it: 'Ordina le fasi del metodo dell’acquisizione (IFRS 3.5).' },
        items: [
          { en: 'Identify the acquirer', it: 'Identificare l’acquirente' },
          { en: 'Determine the acquisition date', it: 'Determinare la data di acquisizione' },
          { en: 'Recognise and measure identifiable assets, liabilities and NCI', it: 'Rilevare e misurare attività, passività identificabili e terzi' },
          { en: 'Recognise and measure goodwill or a bargain purchase gain', it: 'Rilevare e misurare avviamento o utile da acquisto a prezzi favorevoli' }
        ],
        explanation: {
          en: 'You need to know who acquires and when control passes before you can measure fair values at that date; goodwill is the residual, so it comes last.',
          it: 'Bisogna sapere chi acquisisce e quando passa il controllo prima di misurare i fair value a quella data; l’avviamento è il residuo, quindi viene per ultimo.'
        }
      },
      {
        id: 'acc-bc-q2',
        kind: 'numeric',
        topic: 'business-combinations',
        difficulty: 2,
        objective: { en: 'Measure consideration including shares issued.', it: 'Misurare il corrispettivo incluse le azioni emesse.' },
        prompt: {
          en: 'An acquirer pays €120m cash and issues 4m shares. Share price: €18 at signing, €21 at closing. Advisory fees €6m. Consideration transferred under IFRS 3 (€m)?',
          it: 'Un acquirente paga €120m in contanti ed emette 4m di azioni. Prezzo dell’azione: €18 al signing, €21 al closing. Commissioni di advisory €6m. Corrispettivo trasferito secondo IFRS 3 (€m)?'
        },
        answer: 204,
        unit: '€m',
        verify: { fn: 'sum', args: [120, 84] },
        explanation: {
          en: '120 + 4 × 21 = 204. Shares are measured at acquisition-date (closing) fair value, not at signing (192). Advisory fees are expensed, not added (210).',
          it: '120 + 4 × 21 = 204. Le azioni si misurano al fair value alla data di acquisizione (closing), non al signing (192). Le commissioni di advisory si spesano, non si sommano (210).'
        }
      },
      {
        id: 'acc-bc-q3',
        kind: 'multi',
        topic: 'business-combinations',
        difficulty: 2,
        objective: { en: 'Classify acquisition-related costs under IFRS.', it: 'Classificare i costi correlati all’acquisizione in IFRS.' },
        prompt: { en: 'Under IFRS, which costs are expensed in profit or loss when incurred? Select all that apply.', it: 'In IFRS, quali costi si spesano a conto economico quando sostenuti? Seleziona tutte le risposte corrette.' },
        choices: [
          { en: 'M&A advisory success fee', it: 'Success fee dell’advisor M&A' },
          { en: 'Legal due diligence fees', it: 'Commissioni per la due diligence legale' },
          { en: 'Arrangement fee on the acquisition term loan', it: 'Commissione di arrangement sul finanziamento di acquisizione' },
          { en: 'Costs of issuing new shares to fund the deal', it: 'Costi di emissione delle nuove azioni per finanziare l’operazione' },
          { en: 'Valuation firm’s PPA fee', it: 'Compenso del perito per la PPA' }
        ],
        correct: [0, 1, 4],
        explanation: {
          en: 'Advisory, legal and valuation fees are acquisition-related costs → expensed (IFRS 3.53). The loan arrangement fee is a transaction cost of a financial liability (effective interest method, IFRS 9); share issuance costs reduce equity (IAS 32).',
          it: 'Advisory, legali e perizie sono costi correlati all’acquisizione → spesati (IFRS 3.53). La commissione di arrangement è un costo di transazione di una passività finanziaria (tasso effettivo, IFRS 9); i costi di emissione di azioni riducono il PN (IAS 32).'
        }
      },
      {
        id: 'acc-bc-q4',
        kind: 'mcq',
        topic: 'business-combinations',
        difficulty: 2,
        objective: { en: 'Apply the IFRS 3 concentration test.', it: 'Applicare il test di concentrazione dell’IFRS 3.' },
        prompt: {
          en: 'A company buys an entity whose only significant asset is an office building (98% of gross assets’ FV) with leases in place; no employees or processes are transferred. Under IFRS 3, applying the optional concentration test:',
          it: 'Una società acquista un’entità il cui unico asset rilevante è un immobile a uso ufficio (98% del FV delle attività lorde) con contratti di locazione in essere; non vengono trasferiti dipendenti né processi. Secondo IFRS 3, applicando il test di concentrazione facoltativo:'
        },
        choices: [
          { en: 'It is a business combination; goodwill may arise', it: 'È un’aggregazione aziendale; può emergere avviamento' },
          { en: 'It is an asset acquisition; no goodwill, costs capitalised', it: 'È un’acquisizione di attività; nessun avviamento, costi capitalizzati' },
          { en: 'It must be accounted for under the equity method', it: 'Va contabilizzata con il metodo del patrimonio netto' },
          { en: 'It is a common control transaction', it: 'È un’operazione sotto controllo comune' }
        ],
        correct: 1,
        explanation: {
          en: 'Substantially all FV is concentrated in a single identifiable asset → the test is met and the set is not a business (IFRS 3.B7A–B7B). The cost is allocated to the assets on relative fair values; no goodwill. Equity method and common control are unrelated.',
          it: 'Sostanzialmente tutto il FV è concentrato in un’unica attività identificabile → il test è superato e l’insieme non è un business (IFRS 3.B7A–B7B). Il costo si ripartisce sulle attività in base ai fair value relativi; nessun avviamento. Metodo del PN e controllo comune non c’entrano.'
        }
      },
      {
        id: 'acc-bc-q5',
        kind: 'mcq',
        topic: 'business-combinations',
        difficulty: 1,
        objective: { en: 'Identify the acquisition date.', it: 'Identificare la data di acquisizione.' },
        prompt: { en: 'A deal is announced in February, signed in March, receives antitrust clearance in August and closes on 1 October. The acquisition date is normally:', it: 'Un’operazione è annunciata a febbraio, firmata a marzo, autorizzata dall’antitrust ad agosto e chiusa il 1° ottobre. La data di acquisizione è di norma:' },
        choices: [
          { en: 'February (announcement)', it: 'Febbraio (annuncio)' },
          { en: 'March (signing)', it: 'Marzo (signing)' },
          { en: 'August (antitrust clearance)', it: 'Agosto (via libera antitrust)' },
          { en: '1 October (closing, when control passes)', it: '1° ottobre (closing, quando passa il controllo)' }
        ],
        correct: 3,
        explanation: {
          en: 'The acquisition date is when the acquirer obtains control (IFRS 3.8–9), generally the closing date when consideration is transferred and the target’s assets and liabilities are acquired. Before closing, the buyer typically cannot direct the target.',
          it: 'La data di acquisizione è quella in cui l’acquirente ottiene il controllo (IFRS 3.8–9), in genere il closing, quando si trasferisce il corrispettivo e si acquisiscono attività e passività della target. Prima del closing l’acquirente di norma non può dirigere la target.'
        }
      }
    ],
    flashcards: [
      { id: 'fc-acc-bc-1', topic: 'business-combinations', front: { en: 'Four steps of the acquisition method?', it: 'Le quattro fasi del metodo dell’acquisizione?' }, back: { en: 'Identify acquirer; determine acquisition date; recognise/measure identifiable net assets and NCI; recognise goodwill or bargain gain.', it: 'Identificare l’acquirente; determinare la data di acquisizione; rilevare/misurare attivo netto identificabile e terzi; rilevare avviamento o utile da buon affare.' } },
      { id: 'fc-acc-bc-2', topic: 'business-combinations', front: { en: 'Acquisition-related costs under IFRS 3 / ASC 805?', it: 'Costi correlati all’acquisizione in IFRS 3 / ASC 805?' }, back: { en: 'Expensed as incurred; debt costs → effective interest; equity costs → equity.', it: 'Spesati quando sostenuti; costi del debito → tasso effettivo; costi di emissione azioni → PN.' } },
      { id: 'fc-acc-bc-3', topic: 'business-combinations', front: { en: 'Length of the measurement period?', it: 'Durata del periodo di valutazione?' }, back: { en: 'Up to one year from the acquisition date.', it: 'Fino a un anno dalla data di acquisizione.' } },
      { id: 'fc-acc-bc-4', topic: 'business-combinations', front: { en: 'Concentration test: IFRS vs US GAAP?', it: 'Test di concentrazione: IFRS vs US GAAP?' }, back: { en: 'Optional under IFRS 3 (2018 amendment); mandatory screen under ASC 805 (ASU 2017-01).', it: 'Facoltativo in IFRS 3 (modifica 2018); screen obbligatorio in ASC 805 (ASU 2017-01).' } }
    ],
    sources: [SRC_IFRS3, SRC_ASC805, { label: 'IFRS Foundation — Definition of a Business (Amendments to IFRS 3), October 2018', url: 'https://www.ifrs.org/projects/completed-projects/2018/definition-of-a-business/' }, { label: 'Fondazione OIC — OIC 21 Partecipazioni', url: 'https://www.fondazioneoic.eu/' }]
  },

  /* ============================================================ */
  /* A7.2 Purchase price allocation & goodwill                     */
  /* ============================================================ */
  {
    id: 'acc-ppa-goodwill',
    academyId: 'accounting',
    moduleId: 'A7',
    mode: 'deep',
    minutes: 16,
    difficulty: 3,
    reviewed: '2026-10',
    objective: {
      en: 'Perform a purchase price allocation: write off existing goodwill, step up assets, recognise identifiable intangibles and the related DTL, compute goodwill and rebuild the target’s balance sheet.',
      it: 'Eseguire una purchase price allocation: stornare l’avviamento esistente, rivalutare le attività, rilevare gli intangibili identificabili e la relativa DTL, calcolare l’avviamento e ricostruire lo stato patrimoniale della target.'
    },
    screens: [
      {
        type: 'intuition',
        title: { en: 'Explain the price, line by line', it: 'Spiegare il prezzo, voce per voce' },
        body: {
          en: 'A buyer pays €800m for a company with €360m of book equity. Where did the other €440m go?\n\nThe **purchase price allocation (PPA)** answers that question. First you explain as much as possible with **identifiable** things — assets worth more than book, and intangibles the target never recorded because it built them itself (customer relationships, brands, technology). Only what cannot be explained becomes **goodwill**: synergies, assembled workforce, going-concern value.',
          it: 'Un acquirente paga €800m per una società con €360m di patrimonio netto contabile. Dove sono finiti gli altri €440m?\n\nLa **purchase price allocation (PPA)** risponde a questa domanda. Prima si spiega il più possibile con elementi **identificabili** — attività che valgono più del contabile e intangibili che la target non ha mai iscritto perché generati internamente (relazioni con la clientela, marchi, tecnologia). Solo ciò che non si riesce a spiegare diventa **avviamento**: sinergie, forza lavoro organizzata, valore di avviamento in senso stretto.'
        }
      },
      {
        type: 'technical',
        title: { en: 'Identifiable intangibles', it: 'Gli intangibili identificabili' },
        body: {
          en: 'An intangible is recognised separately from goodwill if it is **identifiable**: it arises from **contractual or legal rights**, or it is **separable** (could be sold, licensed, rented) (IAS 38.12; IFRS 3.B31).\n\nTypical PPA intangibles:\n- **Customer relationships / backlog** (often the largest; valued with a multi-period excess earnings method)\n- **Brands / trademarks** (relief-from-royalty method; may have an **indefinite** useful life → not amortised, tested annually under IAS 36)\n- **Technology / patents / software** (relief-from-royalty or cost approach)\n- Licences, non-compete agreements, favourable contracts\n\n**Not recognised**: the **assembled workforce** (subsumed in goodwill, IFRS 3.B37). Also: the target’s own goodwill is **written off** and replaced by new goodwill.',
          it: 'Un intangibile si rileva separatamente dall’avviamento se è **identificabile**: deriva da **diritti contrattuali o legali**, oppure è **separabile** (può essere venduto, concesso in licenza, locato) (IAS 38.12; IFRS 3.B31).\n\nIntangibili tipici di una PPA:\n- **Relazioni con la clientela / portafoglio ordini** (spesso la voce maggiore; metodo dei multi-period excess earnings)\n- **Marchi** (metodo relief-from-royalty; possono avere vita utile **indefinita** → non ammortizzati, impairment test annuale IAS 36)\n- **Tecnologia / brevetti / software** (relief-from-royalty o metodo del costo)\n- Licenze, patti di non concorrenza, contratti a condizioni favorevoli\n\n**Non si rileva**: la **forza lavoro organizzata** (confluisce nell’avviamento, IFRS 3.B37). Inoltre l’avviamento della target viene **stornato** e sostituito dal nuovo avviamento.'
        }
      },
      {
        type: 'technical',
        title: { en: 'Goodwill after the deal: IFRS vs US GAAP vs OIC', it: 'L’avviamento dopo l’operazione: IFRS vs US GAAP vs OIC' },
        body: {
          en: '- **IFRS (IAS 36)**: not amortised; allocated to cash-generating units and tested for impairment **at least annually**; goodwill impairment is **never reversed**.\n- **US GAAP (ASC 350)**: not amortised for public companies; annual impairment test at reporting unit level (single-step test since ASU 2017-04). Private companies may elect to amortise goodwill over up to 10 years.\n- **Italian GAAP (OIC 24)**: goodwill is **amortised** over its useful life; if it cannot be reliably estimated, over no more than **10 years**; impairment under OIC 9.\n\nFinite-life intangibles and PP&E step-ups are depreciated/amortised under all three frameworks — that is the "PPA amortisation" that depresses reported EPS after deals.',
          it: '- **IFRS (IAS 36)**: non ammortizzato; allocato alle unità generatrici di flussi finanziari e sottoposto a impairment test **almeno annuale**; le svalutazioni dell’avviamento **non sono mai ripristinate**.\n- **US GAAP (ASC 350)**: non ammortizzato per le società quotate; test annuale a livello di reporting unit (test in un solo passaggio dall’ASU 2017-04). Le private company possono scegliere di ammortizzarlo in non oltre 10 anni.\n- **Principi italiani (OIC 24)**: l’avviamento si **ammortizza** lungo la vita utile; se non stimabile attendibilmente, in non oltre **10 anni**; svalutazioni secondo l’OIC 9.\n\nGli intangibili a vita definita e i plusvalori su immobilizzazioni materiali si ammortizzano in tutti e tre i framework — è l’"ammortamento da PPA" che penalizza l’EPS reported dopo le operazioni.'
        }
      },
      {
        type: 'formula',
        formulas: [
          {
            name: { en: 'PPA goodwill (share deal, 100%)', it: 'Avviamento da PPA (share deal, 100%)' },
            expr: 'Goodwill = Price − (Book equity − Existing goodwill + Step-ups − DTL on step-ups)',
            vars: [
              { sym: 'Step-ups', desc: { en: 'FV − book value of identifiable assets (incl. new intangibles)', it: 'FV − valore contabile delle attività identificabili (compresi i nuovi intangibili)' } },
              { sym: 'DTL', desc: { en: 'Step-ups × tax rate, where tax bases do not change (share deal)', it: 'Plusvalori × aliquota, quando i valori fiscali non cambiano (share deal)' } }
            ]
          },
          {
            name: { en: 'Allocation waterfall', it: 'Cascata di allocazione' },
            expr: 'Price − Book equity = − Existing goodwill + Step-ups − DTL + New goodwill'
          }
        ]
      },
      {
        type: 'example',
        title: { en: 'PPA of TargetCo (share deal, 100%, tax 25%)', it: 'PPA di TargetCo (share deal, 100%, aliquota 25%)' },
        body: {
          en: 'Buyer pays **€800m** for 100% of TargetCo (book equity €360m, including €80m of goodwill from past deals). Valuers identify step-ups of **€400m**: inventory +20, PP&E +60, customer relationships +150 (10 years), brand +100 (indefinite), technology +70 (5 years).',
          it: 'L’acquirente paga **€800m** per il 100% di TargetCo (PN contabile €360m, di cui €80m di avviamento da acquisizioni passate). I periti individuano plusvalori per **€400m**: rimanenze +20, immobilizzazioni materiali +60, relazioni con la clientela +150 (10 anni), marchio +100 (vita indefinita), tecnologia +70 (5 anni).'
        },
        table: {
          headers: [{ en: 'Allocation (€m)', it: 'Allocazione (€m)' }, { en: 'Amount', it: 'Importo' }],
          rows: [
            [{ en: 'Purchase price (equity)', it: 'Prezzo (equity)' }, '800'],
            [{ en: 'Book equity', it: 'PN contabile' }, '(360)'],
            [{ en: 'Write-off of existing goodwill', it: 'Storno avviamento esistente' }, '+80'],
            [{ en: 'Step-ups (20 + 60 + 150 + 100 + 70)', it: 'Plusvalori (20 + 60 + 150 + 100 + 70)' }, '(400)'],
            [{ en: 'DTL on step-ups (25% × 400)', it: 'DTL sui plusvalori (25% × 400)' }, '+100'],
            [{ en: 'New goodwill', it: 'Nuovo avviamento' }, '220']
          ],
          totalRows: [5]
        }
      },
      {
        type: 'example',
        title: { en: 'TargetCo balance sheet before and after the PPA', it: 'Stato patrimoniale di TargetCo prima e dopo la PPA' },
        body: {
          en: 'The "after" column is how TargetCo enters the buyer’s consolidated accounts. Its equity is replaced by the price paid (and then eliminated against the buyer’s investment).',
          it: 'La colonna "dopo" mostra come TargetCo entra nel consolidato dell’acquirente. Il suo PN è sostituito dal prezzo pagato (e poi eliso contro la partecipazione dell’acquirente).'
        },
        table: {
          headers: [{ en: '€m', it: '€m' }, { en: 'Before', it: 'Prima' }, { en: 'PPA adj.', it: 'Rettifiche PPA' }, { en: 'After', it: 'Dopo' }],
          rows: [
            [{ en: 'Cash', it: 'Cassa' }, '50', '', '50'],
            [{ en: 'Receivables', it: 'Crediti' }, '100', '', '100'],
            [{ en: 'Inventory', it: 'Rimanenze' }, '120', '+20', '140'],
            [{ en: 'PP&E', it: 'Immobilizzazioni materiali' }, '300', '+60', '360'],
            [{ en: 'Identifiable intangibles', it: 'Intangibili identificabili' }, '0', '+320', '320'],
            [{ en: 'Goodwill', it: 'Avviamento' }, '80', '−80 +220', '220'],
            [{ en: 'Total assets', it: 'Totale attivo' }, '650', '+540', '1,190'],
            [{ en: 'Payables', it: 'Debiti commerciali' }, '90', '', '90'],
            [{ en: 'Debt', it: 'Debiti finanziari' }, '200', '', '200'],
            [{ en: 'Deferred tax liability', it: 'Passività per imposte differite' }, '0', '+100', '100'],
            [{ en: 'Equity', it: 'Patrimonio netto' }, '360', '+440', '800'],
            [{ en: 'Total L + E', it: 'Totale passivo + PN' }, '650', '+540', '1,190']
          ],
          totalRows: [6, 11]
        }
      },
      {
        type: 'example',
        title: { en: 'The P&L tail: PPA amortisation', it: 'La coda a conto economico: l’ammortamento da PPA' },
        body: {
          en: 'Year-1 incremental pre-tax charges:\n- Inventory step-up released through cost of sales: **20** (one-off)\n- PP&E step-up 60 / 10 years: **6**\n- Customer relationships 150 / 10: **15**\n- Technology 70 / 5: **14**\n- Brand: **0** (indefinite life; annual impairment test)\n\nTotal **55** pre-tax; the DTL unwinds by 25% × 55 = 13.75, so net income falls by **41.25**. From year 2 the recurring charge is **35** pre-tax (26.25 after tax). Cash flow is unaffected: these are non-cash and not tax-deductible in a share deal.',
          it: 'Oneri incrementali ante imposte del primo anno:\n- Plusvalore sulle rimanenze riversato nel costo del venduto: **20** (una tantum)\n- Plusvalore impianti 60 / 10 anni: **6**\n- Relazioni con la clientela 150 / 10: **15**\n- Tecnologia 70 / 5: **14**\n- Marchio: **0** (vita indefinita; impairment test annuale)\n\nTotale **55** ante imposte; la DTL si riassorbe per 25% × 55 = 13,75, quindi l’utile netto cala di **41,25**. Dal secondo anno l’onere ricorrente è **35** ante imposte (26,25 netto). La cassa non cambia: sono oneri non monetari e non deducibili in uno share deal.'
        }
      },
      {
        type: 'realworld',
        body: {
          en: 'At signing, bankers estimate the PPA with rules of thumb (e.g. a share of the premium allocated to intangibles, with assumed lives) to model accretion/dilution; after closing, an independent valuer performs the formal PPA, often finalised within the one-year measurement period. Large goodwill balances become a focus for investors: a later **impairment** signals that the acquirer overpaid. Many companies report "adjusted EPS" excluding amortisation of acquired intangibles — always check the reconciliation.',
          it: 'Al signing i banker stimano la PPA con regole empiriche (es. una quota del premio allocata agli intangibili, con vite utili ipotizzate) per modellare l’accretion/dilution; dopo il closing un perito indipendente svolge la PPA formale, spesso definita entro il periodo di valutazione di un anno. Avviamenti elevati diventano un focus per gli investitori: un successivo **impairment** segnala che l’acquirente ha pagato troppo. Molte società comunicano un "EPS adjusted" che esclude l’ammortamento degli intangibili acquisiti — verificate sempre la riconciliazione.'
        }
      },
      { type: 'exercise', questionId: 'acc-ppa-q1' },
      { type: 'exercise', questionId: 'acc-ppa-q2' },
      { type: 'exercise', questionId: 'acc-ppa-q3' },
      {
        type: 'interview',
        question: { en: 'Walk me through how you calculate goodwill in an acquisition.', it: 'Mi spieghi come si calcola l’avviamento in un’acquisizione.' },
        answer: {
          en: 'Start with the equity purchase price. Subtract the target’s book equity, but first remove any existing goodwill, because it is written off and replaced. Then allocate the excess to identifiable assets: write up tangible assets to fair value and recognise intangibles such as customer relationships, brands and technology. In a share deal those step-ups have no tax basis, so I create a deferred tax liability equal to step-ups times the tax rate, which reduces net assets. Goodwill is the residual: price minus the fair value of identifiable net assets, including that DTL.',
          it: 'Parto dal prezzo dell’equity. Sottraggo il PN contabile della target, ma prima tolgo l’eventuale avviamento esistente, perché viene stornato e sostituito. Poi alloco l’eccedenza alle attività identificabili: rivaluto le immobilizzazioni materiali al fair value e rilevo intangibili come relazioni con la clientela, marchi e tecnologia. In uno share deal questi plusvalori non hanno riconoscimento fiscale, quindi rilevo una passività per imposte differite pari a plusvalori per aliquota, che riduce l’attivo netto. L’avviamento è il residuo: prezzo meno fair value dell’attivo netto identificabile, inclusa la DTL.'
        }
      },
      {
        type: 'mistakes',
        items: [
          { en: 'Keeping the target’s existing goodwill on top of new goodwill (double counting).', it: 'Mantenere l’avviamento esistente della target in aggiunta al nuovo (doppio conteggio).' },
          { en: 'Recognising the assembled workforce as an intangible: under IFRS 3 and ASC 805 it is part of goodwill.', it: 'Rilevare la forza lavoro organizzata come intangibile: secondo IFRS 3 e ASC 805 fa parte dell’avviamento.' },
          { en: 'Amortising an indefinite-life brand, or forgetting the one-off inventory step-up hit to margins.', it: 'Ammortizzare un marchio a vita indefinita, o dimenticare l’impatto una tantum del plusvalore sulle rimanenze sui margini.' },
          { en: 'Using enterprise value instead of equity purchase price in the goodwill formula (the target’s debt is assumed separately).', it: 'Usare l’enterprise value invece del prezzo dell’equity nella formula (il debito della target è assunto separatamente).' }
        ]
      },
      {
        type: 'summary',
        items: [
          { en: 'PPA: write off old goodwill, step up assets, recognise identifiable intangibles, book DTL, residual = goodwill.', it: 'PPA: storno del vecchio avviamento, plusvalori, intangibili identificabili, DTL, residuo = avviamento.' },
          { en: 'Identifiable = contractual/legal or separable; assembled workforce stays in goodwill.', it: 'Identificabile = contrattuale/legale o separabile; la forza lavoro organizzata resta nell’avviamento.' },
          { en: 'Goodwill: impairment-only (IFRS, US public); amortised (OIC; US private company option).', it: 'Avviamento: solo impairment (IFRS, US quotate); ammortizzato (OIC; opzione US private company).' },
          { en: 'PPA amortisation reduces reported EPS but not cash.', it: 'L’ammortamento da PPA riduce l’EPS reported ma non la cassa.' }
        ]
      }
    ],
    questions: [
      {
        id: 'acc-ppa-q1',
        kind: 'numeric',
        topic: 'ppa',
        difficulty: 3,
        objective: { en: 'Compute goodwill in a share deal with DTL and existing goodwill.', it: 'Calcolare l’avviamento in uno share deal con DTL e avviamento esistente.' },
        prompt: {
          en: 'Purchase price €1,200m for 100%. Target book equity €500m including €100m of existing goodwill. Step-ups on identifiable assets €400m; tax rate 25%; share deal. Goodwill (€m)?',
          it: 'Prezzo €1.200m per il 100%. PN contabile della target €500m, di cui €100m di avviamento esistente. Plusvalori sulle attività identificabili €400m; aliquota 25%; share deal. Avviamento (€m)?'
        },
        answer: 500,
        unit: '€m',
        verify: { fn: 'ppaGoodwill', args: [1200, 500, 400, 0.25, 100] },
        steps: [
          { en: 'Adjusted book net assets: 500 − 100 = 400', it: 'PN rettificato: 500 − 100 = 400' },
          { en: 'FV net assets: 400 + 400 − 100 (DTL) = 700', it: 'FV attivo netto: 400 + 400 − 100 (DTL) = 700' },
          { en: 'Goodwill: 1,200 − 700 = 500', it: 'Avviamento: 1.200 − 700 = 500' }
        ],
        explanation: {
          en: '1,200 − (500 − 100 + 400 − 100) = 500. Forgetting the old goodwill gives 400; forgetting the DTL gives 400 as well (1,200 − 800) — both understate goodwill.',
          it: '1.200 − (500 − 100 + 400 − 100) = 500. Dimenticare il vecchio avviamento dà 400; dimenticare la DTL dà anch’esso 400 (1.200 − 800) — entrambi sottostimano l’avviamento.'
        }
      },
      {
        id: 'acc-ppa-q2',
        kind: 'grid',
        topic: 'ppa',
        difficulty: 3,
        objective: { en: 'Rebuild a target balance sheet after a PPA.', it: 'Ricostruire lo stato patrimoniale della target dopo la PPA.' },
        prompt: {
          en: 'Buyer pays €500m for 100% of Gamma (share deal, tax 24%). Step-ups: PP&E +50, customer relationships +100, technology +50. Gamma’s existing goodwill (40) is written off. Fill in the post-PPA balance sheet (€m).',
          it: 'L’acquirente paga €500m per il 100% di Gamma (share deal, aliquota 24%). Plusvalori: immobilizzazioni materiali +50, relazioni con la clientela +100, tecnologia +50. L’avviamento esistente di Gamma (40) viene stornato. Completa lo stato patrimoniale post PPA (€m).'
        },
        unit: '€m',
        columns: [
          { en: 'Line', it: 'Voce' },
          { en: 'Before', it: 'Prima' },
          { en: 'After PPA', it: 'Dopo la PPA' }
        ],
        rows: [
          { label: { en: 'Cash + receivables + inventory', it: 'Cassa + crediti + rimanenze' }, cells: [160, 160] },
          { label: { en: 'PP&E', it: 'Immobilizzazioni materiali' }, cells: [200, { answer: 250, verify: { fn: 'sum', args: [200, 50] } }] },
          { label: { en: 'Identifiable intangibles', it: 'Intangibili identificabili' }, cells: [0, { answer: 150, verify: { fn: 'sum', args: [100, 50] } }] },
          { label: { en: 'Goodwill', it: 'Avviamento' }, cells: [40, { answer: 188, verify: { fn: 'ppaGoodwill', args: [500, 200, 200, 0.24, 40] } }] },
          { label: { en: 'Total assets', it: 'Totale attivo' }, cells: [400, { answer: 748, verify: { fn: 'sum', args: [160, 250, 150, 188] } }] },
          { label: { en: 'Payables + debt', it: 'Debiti commerciali + finanziari' }, cells: [200, 200] },
          { label: { en: 'Deferred tax liability', it: 'Passività per imposte differite' }, cells: [0, { answer: 48, verify: { fn: 'dtlOnStepUp', args: [200, 0.24] } }] },
          { label: { en: 'Equity', it: 'Patrimonio netto' }, cells: [200, { answer: 500, verify: { fn: 'sum', args: [500] } }] }
        ],
        explanation: {
          en: 'Step-ups 200 → DTL 24% × 200 = 48. FV net assets = 200 − 40 + 200 − 48 = 312 → goodwill = 500 − 312 = 188. Total assets 160 + 250 + 150 + 188 = 748 = 200 + 48 + 500. After push-down of the PPA, the target’s equity equals the price paid.',
          it: 'Plusvalori 200 → DTL 24% × 200 = 48. FV attivo netto = 200 − 40 + 200 − 48 = 312 → avviamento = 500 − 312 = 188. Totale attivo 160 + 250 + 150 + 188 = 748 = 200 + 48 + 500. Dopo la PPA, il PN della target coincide con il prezzo pagato.'
        }
      },
      {
        id: 'acc-ppa-q3',
        kind: 'multi',
        topic: 'ppa',
        difficulty: 2,
        objective: { en: 'Identify intangibles recognisable separately from goodwill.', it: 'Identificare gli intangibili rilevabili separatamente dall’avviamento.' },
        prompt: { en: 'Which items can be recognised as identifiable intangibles in a PPA under IFRS 3? Select all that apply.', it: 'Quali elementi possono essere rilevati come intangibili identificabili in una PPA secondo IFRS 3? Seleziona tutte le risposte corrette.' },
        choices: [
          { en: 'Customer contracts and related relationships', it: 'Contratti con clienti e relative relazioni' },
          { en: 'The assembled workforce', it: 'La forza lavoro organizzata' },
          { en: 'A registered trademark', it: 'Un marchio registrato' },
          { en: 'Expected synergies with the buyer', it: 'Le sinergie attese con l’acquirente' },
          { en: 'Patented technology', it: 'Tecnologia brevettata' }
        ],
        correct: [0, 2, 4],
        explanation: {
          en: 'Customer relationships (contractual), trademarks and patents (legal rights) are identifiable. The assembled workforce is explicitly not recognised (IFRS 3.B37) and synergies are not an asset of the acquiree — both are part of goodwill.',
          it: 'Relazioni con la clientela (contrattuali), marchi e brevetti (diritti legali) sono identificabili. La forza lavoro organizzata è espressamente esclusa (IFRS 3.B37) e le sinergie non sono un’attività dell’acquisita — entrambe confluiscono nell’avviamento.'
        }
      },
      {
        id: 'acc-ppa-q4',
        kind: 'numeric',
        topic: 'ppa',
        difficulty: 2,
        objective: { en: 'Compute recurring PPA amortisation.', it: 'Calcolare l’ammortamento ricorrente da PPA.' },
        prompt: {
          en: 'PPA intangibles: customer relationships €240m (12 years), technology €90m (6 years), brand €150m (indefinite life). Annual pre-tax amortisation (€m)?',
          it: 'Intangibili da PPA: relazioni con la clientela €240m (12 anni), tecnologia €90m (6 anni), marchio €150m (vita indefinita). Ammortamento annuo ante imposte (€m)?'
        },
        answer: 35,
        unit: '€m',
        verify: { fn: 'sum', args: [20, 15] },
        explanation: {
          en: '240/12 = 20; 90/6 = 15; brand not amortised (indefinite life, annual impairment test under IAS 36). Total 35. Amortising the brand (e.g. over 10 years) is a common error.',
          it: '240/12 = 20; 90/6 = 15; il marchio non si ammortizza (vita indefinita, impairment test annuale IAS 36). Totale 35. Ammortizzare il marchio (es. in 10 anni) è un errore frequente.'
        }
      },
      {
        id: 'acc-ppa-q5',
        kind: 'mcq',
        topic: 'goodwill',
        difficulty: 2,
        objective: { en: 'Compare goodwill subsequent measurement across frameworks.', it: 'Confrontare la valutazione successiva dell’avviamento tra framework.' },
        prompt: { en: 'Which statement about goodwill after acquisition is correct?', it: 'Quale affermazione sull’avviamento dopo l’acquisizione è corretta?' },
        choices: [
          { en: 'IFRS: amortised over max 10 years; OIC: impairment only', it: 'IFRS: ammortizzato in max 10 anni; OIC: solo impairment' },
          { en: 'IFRS and US GAAP (public companies): not amortised, tested annually; OIC: amortised', it: 'IFRS e US GAAP (quotate): non ammortizzato, test annuale; OIC: ammortizzato' },
          { en: 'All three frameworks amortise goodwill over 20 years', it: 'Tutti e tre i framework lo ammortizzano in 20 anni' },
          { en: 'Under IFRS a goodwill impairment can be reversed if conditions improve', it: 'In IFRS la svalutazione dell’avviamento può essere ripristinata se le condizioni migliorano' }
        ],
        correct: 1,
        explanation: {
          en: 'IAS 36 and ASC 350 require (at least) annual impairment testing without amortisation (US private companies may elect amortisation). OIC 24 requires amortisation. IAS 36.124 prohibits reversing goodwill impairment.',
          it: 'IAS 36 e ASC 350 richiedono un impairment test (almeno) annuale senza ammortamento (le private company US possono optare per l’ammortamento). L’OIC 24 impone l’ammortamento. Lo IAS 36.124 vieta il ripristino delle svalutazioni dell’avviamento.'
        }
      }
    ],
    flashcards: [
      { id: 'fc-acc-ppa-1', topic: 'ppa', front: { en: 'Criteria for recognising an intangible in a PPA?', it: 'Criteri per rilevare un intangibile in una PPA?' }, back: { en: 'Identifiable: arises from contractual/legal rights or is separable (IAS 38.12; IFRS 3.B31).', it: 'Identificabile: deriva da diritti contrattuali/legali o è separabile (IAS 38.12; IFRS 3.B31).' } },
      { id: 'fc-acc-ppa-2', topic: 'ppa', front: { en: 'PPA goodwill formula (share deal)?', it: 'Formula dell’avviamento da PPA (share deal)?' }, back: { en: 'Price − (book equity − existing goodwill + step-ups − step-ups × t).', it: 'Prezzo − (PN contabile − avviamento esistente + plusvalori − plusvalori × t).' } },
      { id: 'fc-acc-ppa-3', topic: 'ppa', front: { en: 'Typical valuation method for customer relationships?', it: 'Metodo tipico di valutazione delle relazioni con la clientela?' }, back: { en: 'Multi-period excess earnings method (MEEM).', it: 'Il metodo dei multi-period excess earnings (MEEM), basato sui flussi in eccesso.' } },
      { id: 'fc-acc-ppa-4', topic: 'ppa', front: { en: 'Brand with indefinite useful life after a deal?', it: 'Marchio a vita utile indefinita dopo un’operazione?' }, back: { en: 'Not amortised under IFRS; tested for impairment at least annually (IAS 38/IAS 36).', it: 'Non ammortizzato in IFRS; impairment test almeno annuale (IAS 38/IAS 36).' } },
      { id: 'fc-acc-ppa-5', topic: 'goodwill', front: { en: 'Goodwill amortisation under OIC 24?', it: 'Ammortamento dell’avviamento secondo OIC 24?' }, back: { en: 'Over useful life; if not reliably estimable, no more than 10 years.', it: 'Sulla vita utile; se non stimabile attendibilmente, non oltre 10 anni.' } }
    ],
    sources: [SRC_IFRS3, SRC_IAS36, { label: 'IFRS Foundation — IAS 38 Intangible Assets', url: 'https://www.ifrs.org/issued-standards/list-of-standards/ias-38-intangible-assets/' }, SRC_ASC805, { label: 'Fondazione OIC — OIC 24 Immobilizzazioni immateriali', url: 'https://www.fondazioneoic.eu/' }]
  },

  /* ============================================================ */
  /* A7.3 Deferred taxes in acquisitions                           */
  /* ============================================================ */
  {
    id: 'acc-ma-deferred-tax',
    academyId: 'accounting',
    moduleId: 'A7',
    mode: 'deep',
    minutes: 14,
    difficulty: 3,
    reviewed: '2026-10',
    objective: {
      en: 'Explain why share deals create a DTL on fair value step-ups, compute it, show how it increases goodwill and unwinds over time, and contrast asset deals with a tax basis step-up.',
      it: 'Spiegare perché negli share deal nasce una DTL sui plusvalori, calcolarla, mostrare come aumenta l’avviamento e si riassorbe nel tempo, e confrontare gli asset deal con il riconoscimento fiscale dei maggiori valori.'
    },
    screens: [
      {
        type: 'intuition',
        title: { en: 'Two sets of books', it: 'Due contabilità parallele' },
        body: {
          en: 'Every asset has a **book value** (accounting) and a **tax base** (what the tax authority recognises). When you buy **shares**, the target company survives as the same taxpayer: its tax bases do **not** change, whatever price you paid.\n\nBut in the consolidated accounts the assets are written up to fair value. Higher book values mean higher future depreciation in the accounts — yet **no extra tax deduction**. The group will pay more tax than its accounting profit suggests, and that future tax is recognised today as a **deferred tax liability (DTL)**.',
          it: 'Ogni attività ha un **valore contabile** e un **valore fiscale** (quello riconosciuto dal fisco). Quando si acquistano **azioni o quote**, la target resta lo stesso contribuente: i suoi valori fiscali **non** cambiano, qualunque prezzo si sia pagato.\n\nNel consolidato però le attività vengono rivalutate al fair value. Valori contabili più alti significano maggiori ammortamenti futuri in bilancio — ma **nessuna deduzione fiscale aggiuntiva**. Il gruppo pagherà più imposte di quanto il suo utile contabile suggerisca, e queste imposte future si rilevano oggi come **passività per imposte differite (DTL)**.'
        }
      },
      {
        type: 'technical',
        title: { en: 'The rules', it: 'Le regole' },
        body: {
          en: '- **IAS 12.19 / 12.66** (and ASC 740 / ASC 805-740): temporary differences arising from the PPA give rise to deferred taxes recognised **as part of the acquisition accounting** — they affect goodwill, not P&L.\n- DTL = (book value − tax base) × tax rate expected when it reverses.\n- **No DTL on goodwill** itself at initial recognition (IAS 12.15(a)): goodwill is a residual measured after deferred taxes, so recognising a DTL on it would be circular. US GAAP has the same exception for goodwill that is not tax-deductible.\n- The target’s existing **tax losses** may give a **deferred tax asset** in the PPA if recovery is probable (IFRS) / more likely than not (US GAAP).\n- **After closing**: the DTL unwinds as the step-ups are depreciated: deferred tax income offsets part of the extra D&A, so the effective tax rate on accounting profit is preserved, while **cash taxes are unchanged**.',
          it: '- **IAS 12.19 / 12.66** (e ASC 740 / ASC 805-740): le differenze temporanee che nascono dalla PPA generano fiscalità differita rilevata **nell’ambito della contabilizzazione dell’acquisizione** — incidono sull’avviamento, non sul conto economico.\n- DTL = (valore contabile − valore fiscale) × aliquota attesa al riversamento.\n- **Nessuna DTL sull’avviamento** all’iscrizione iniziale (IAS 12.15(a)): l’avviamento è un residuo misurato dopo la fiscalità differita, quindi una DTL su di esso sarebbe circolare. Gli US GAAP prevedono la stessa eccezione per l’avviamento non deducibile.\n- Le **perdite fiscali** della target possono generare un’**attività per imposte anticipate** nella PPA se il recupero è probabile (IFRS) / more likely than not (US GAAP).\n- **Dopo il closing**: la DTL si riassorbe con l’ammortamento dei plusvalori: il provento per imposte differite compensa parte dei maggiori ammortamenti, preservando il tax rate effettivo sull’utile contabile, mentre **le imposte pagate non cambiano**.'
        }
      },
      {
        type: 'technical',
        title: { en: 'Share deal vs asset deal', it: 'Share deal vs asset deal' },
        body: {
          en: '- **Share deal**: tax bases carry over → DTL on step-ups → higher goodwill; no new tax deductions.\n- **Asset deal** (buying the business/assets directly — in Italy a "cessione d’azienda"): the buyer’s tax bases equal the price allocated → **no DTL**, and amortisation of step-ups (often goodwill too) is **tax-deductible**, a real cash benefit.\n\nJurisdiction examples:\n- **Italy**: in an asset deal, goodwill and trademarks are deductible for IRES at no more than **1/18 per year** (art. 103 TUIR). Sellers (corporates) often prefer share deals, where capital gains may be 95% exempt under the participation exemption (art. 87 TUIR). Italian law has also offered regimes to realign tax values to book step-ups by paying a substitute tax (imposta sostitutiva).\n- **US**: in asset deals (or with a **Section 338(h)(10)** election) acquired intangibles including goodwill are generally amortised for tax over **15 years** (Section 197).',
          it: '- **Share deal**: i valori fiscali restano invariati → DTL sui plusvalori → avviamento più alto; nessuna nuova deduzione fiscale.\n- **Asset deal** (acquisto diretto del business/delle attività — in Italia una "cessione d’azienda"): i valori fiscali dell’acquirente sono pari al prezzo allocato → **nessuna DTL**, e l’ammortamento dei maggiori valori (spesso anche dell’avviamento) è **fiscalmente deducibile**, un beneficio di cassa reale.\n\nEsempi per giurisdizione:\n- **Italia**: nell’asset deal avviamento e marchi sono deducibili ai fini IRES in misura non superiore a **1/18 l’anno** (art. 103 TUIR). I venditori società preferiscono spesso lo share deal, in cui la plusvalenza può essere esente al 95% con la participation exemption (art. 87 TUIR). La normativa italiana ha inoltre previsto regimi di riallineamento dei valori fiscali ai plusvalori contabili tramite il pagamento di un’imposta sostitutiva.\n- **USA**: negli asset deal (o con l’elezione **Section 338(h)(10)**) gli intangibili acquisiti, avviamento compreso, si ammortizzano in genere fiscalmente in **15 anni** (Section 197).'
        }
      },
      {
        type: 'formula',
        formulas: [
          {
            name: { en: 'DTL on step-ups (share deal)', it: 'DTL sui plusvalori (share deal)' },
            expr: 'DTL = Σ (FV − tax base of each identifiable asset) × t ≈ Step-ups × t'
          },
          {
            name: { en: 'Goodwill impact', it: 'Effetto sull’avviamento' },
            expr: 'Goodwill (share deal) − Goodwill (asset deal, same price) = DTL'
          },
          {
            name: { en: 'Annual DTL unwind', it: 'Riassorbimento annuo della DTL' },
            expr: 'Deferred tax income = Step-up D&A of the year × t',
            vars: [{ sym: 't', desc: { en: 'Tax rate expected to apply when the difference reverses', it: 'Aliquota attesa al riversamento della differenza' } }]
          }
        ]
      },
      {
        type: 'example',
        title: { en: 'TargetCo: share deal vs asset deal', it: 'TargetCo: share deal vs asset deal' },
        body: {
          en: 'Same facts as the PPA lesson: price €800m, book equity €360m (incl. €80m old goodwill), step-ups €400m, tax 25%. For simplicity assume the asset deal transfers the same assets and liabilities for the same price.',
          it: 'Stessi dati della lezione sulla PPA: prezzo €800m, PN contabile €360m (di cui €80m di vecchio avviamento), plusvalori €400m, aliquota 25%. Per semplicità ipotizziamo che l’asset deal trasferisca le stesse attività e passività allo stesso prezzo.'
        },
        table: {
          headers: [{ en: '€m', it: '€m' }, { en: 'Share deal', it: 'Share deal' }, { en: 'Asset deal', it: 'Asset deal' }],
          rows: [
            [{ en: 'Price', it: 'Prezzo' }, '800', '800'],
            [{ en: 'Book equity ex old goodwill', it: 'PN contabile senza vecchio avviamento' }, '(280)', '(280)'],
            [{ en: 'Step-ups', it: 'Plusvalori' }, '(400)', '(400)'],
            [{ en: 'DTL (25% × 400)', it: 'DTL (25% × 400)' }, '+100', '0'],
            [{ en: 'Goodwill', it: 'Avviamento' }, '220', '120'],
            [{ en: 'Tax deductions on step-ups/goodwill', it: 'Deduzioni fiscali su plusvalori/avviamento' }, { en: 'None', it: 'Nessuna' }, { en: 'Yes (local rules)', it: 'Sì (secondo norme locali)' }]
          ],
          totalRows: [4]
        }
      },
      {
        type: 'example',
        title: { en: 'How the DTL unwinds (share deal)', it: 'Come si riassorbe la DTL (share deal)' },
        body: {
          en: 'Recurring step-up D&A is €35m a year (PP&E 6 + customers 15 + technology 14).',
          it: 'Gli ammortamenti ricorrenti dei plusvalori sono €35m l’anno (impianti 6 + clienti 15 + tecnologia 14).'
        },
        table: {
          headers: [{ en: 'Annual effect (€m)', it: 'Effetto annuo (€m)' }, { en: 'Book', it: 'Bilancio' }, { en: 'Cash', it: 'Cassa' }],
          rows: [
            [{ en: 'Extra D&A', it: 'Maggiori ammortamenti' }, '(35.0)', '0'],
            [{ en: 'Current tax (no deduction)', it: 'Imposte correnti (nessuna deduzione)' }, '0', '0'],
            [{ en: 'Deferred tax income (DTL −8.75)', it: 'Provento imposte differite (DTL −8,75)' }, '+8.75', '0'],
            [{ en: 'Net income impact', it: 'Effetto sull’utile netto' }, '(26.25)', '0']
          ],
          totalRows: [3]
        }
      },
      {
        type: 'realworld',
        body: {
          en: 'Tax structure is a real value lever in M&A. A buyer who can obtain a tax basis step-up (asset deal, 338(h)(10), Italian realignment regimes) gains a stream of cash tax savings and may pay more; the seller may face more tax and ask to share the benefit. In merger models, analysts must decide: share deal → create a DTL and keep cash taxes unchanged; asset deal → no DTL, but lower cash taxes from deductible amortisation. Mixing the two is a classic modelling error.',
          it: 'La struttura fiscale è una vera leva di valore nelle M&A. Un acquirente che ottiene il riconoscimento fiscale dei maggiori valori (asset deal, 338(h)(10), regimi italiani di riallineamento) guadagna un flusso di risparmi d’imposta e può pagare di più; il venditore può subire più imposte e chiedere di condividere il beneficio. Nei merger model l’analista deve scegliere: share deal → DTL e imposte pagate invariate; asset deal → nessuna DTL, ma imposte pagate minori grazie agli ammortamenti deducibili. Mescolare le due cose è un errore di modellizzazione classico.'
        }
      },
      { type: 'exercise', questionId: 'acc-mdt-q1' },
      { type: 'exercise', questionId: 'acc-mdt-q2' },
      { type: 'exercise', questionId: 'acc-mdt-q3' },
      { type: 'exercise', questionId: 'acc-mdt-q4' },
      {
        type: 'interview',
        question: { en: 'Why does a deferred tax liability get created in an acquisition, and what does it do to goodwill?', it: 'Perché in un’acquisizione nasce una passività per imposte differite e che effetto ha sull’avviamento?' },
        answer: {
          en: 'In a stock deal the target keeps its old tax bases, but we write its assets up to fair value for accounting. The extra book depreciation will never be deductible, so the group will pay more tax than its book profit implies — that is a temporary difference, and we recognise a DTL equal to the step-ups times the tax rate. The DTL is an assumed liability, so it reduces the fair value of net assets acquired and goodwill goes up by the same amount. Over time it unwinds through deferred tax income as the step-ups are depreciated. In an asset deal the tax bases are stepped up too, so there is no DTL.',
          it: 'In uno share deal la target mantiene i vecchi valori fiscali, ma in bilancio rivalutiamo le attività al fair value. I maggiori ammortamenti contabili non saranno mai deducibili, quindi il gruppo pagherà più imposte di quanto implichi l’utile contabile — è una differenza temporanea, e rileviamo una DTL pari ai plusvalori per l’aliquota. La DTL è una passività assunta, quindi riduce il fair value dell’attivo netto acquisito e l’avviamento sale dello stesso importo. Nel tempo si riassorbe con proventi per imposte differite man mano che i plusvalori si ammortizzano. In un asset deal anche i valori fiscali si adeguano, quindi non c’è DTL.'
        }
      },
      {
        type: 'mistakes',
        items: [
          { en: 'Recognising a DTL on goodwill itself at acquisition (prohibited by IAS 12.15(a)).', it: 'Rilevare una DTL sull’avviamento all’acquisizione (vietato dallo IAS 12.15(a)).' },
          { en: 'Recognising a DTL on step-ups in an asset deal where the tax bases are also stepped up.', it: 'Rilevare una DTL sui plusvalori in un asset deal in cui anche i valori fiscali vengono adeguati.' },
          { en: 'Thinking the DTL unwind saves cash. It is a non-cash book entry; cash taxes are unchanged in a share deal.', it: 'Pensare che il riassorbimento della DTL faccia risparmiare cassa. È una scrittura non monetaria; le imposte pagate restano invariate nello share deal.' },
          { en: 'Booking the PPA deferred tax through P&L at closing instead of through goodwill.', it: 'Rilevare la fiscalità differita della PPA a conto economico al closing invece che in contropartita dell’avviamento.' }
        ]
      },
      {
        type: 'summary',
        items: [
          { en: 'Share deal: tax bases unchanged → DTL = step-ups × t.', it: 'Share deal: valori fiscali invariati → DTL = plusvalori × t.' },
          { en: 'DTL reduces FV of net assets → goodwill rises by the DTL.', it: 'La DTL riduce il FV dell’attivo netto → l’avviamento sale di un importo pari alla DTL.' },
          { en: 'No DTL on goodwill at initial recognition (IAS 12.15(a)).', it: 'Nessuna DTL sull’avviamento all’iscrizione iniziale (IAS 12.15(a)).' },
          { en: 'Asset deal: tax basis step-up, no DTL, deductible amortisation (Italy 1/18 for goodwill; US 15 years).', it: 'Asset deal: riconoscimento fiscale, nessuna DTL, ammortamenti deducibili (Italia 1/18 per l’avviamento; USA 15 anni).' }
        ]
      }
    ],
    questions: [
      {
        id: 'acc-mdt-q1',
        kind: 'numeric',
        topic: 'ma-deferred-tax',
        difficulty: 1,
        objective: { en: 'Compute the DTL on fair value step-ups.', it: 'Calcolare la DTL sui plusvalori.' },
        prompt: {
          en: 'In a share deal, identifiable assets are stepped up by €300m. Tax rate 24%. DTL recognised in the PPA (€m)?',
          it: 'In uno share deal le attività identificabili sono rivalutate di €300m. Aliquota 24%. DTL rilevata nella PPA (€m)?'
        },
        answer: 72,
        unit: '€m',
        verify: { fn: 'dtlOnStepUp', args: [300, 0.24] },
        explanation: {
          en: '300 × 24% = 72. It is recognised because the target’s tax bases are unchanged in a share deal.',
          it: '300 × 24% = 72. Si rileva perché nello share deal i valori fiscali della target non cambiano.'
        }
      },
      {
        id: 'acc-mdt-q2',
        kind: 'numeric',
        topic: 'ma-deferred-tax',
        difficulty: 2,
        objective: { en: 'Compute goodwill including the DTL effect.', it: 'Calcolare l’avviamento includendo l’effetto della DTL.' },
        prompt: {
          en: 'Share deal: price €1,000m for 100%; target book equity €600m (no existing goodwill); step-ups €200m; tax 25%. Goodwill (€m)?',
          it: 'Share deal: prezzo €1.000m per il 100%; PN contabile della target €600m (nessun avviamento esistente); plusvalori €200m; aliquota 25%. Avviamento (€m)?'
        },
        answer: 250,
        unit: '€m',
        verify: { fn: 'ppaGoodwill', args: [1000, 600, 200, 0.25] },
        explanation: {
          en: 'FV net assets = 600 + 200 − 50 = 750 → goodwill 250. Without the DTL (asset deal) goodwill would be 200; the difference is exactly the DTL of 50.',
          it: 'FV attivo netto = 600 + 200 − 50 = 750 → avviamento 250. Senza DTL (asset deal) l’avviamento sarebbe 200; la differenza è esattamente la DTL di 50.'
        }
      },
      {
        id: 'acc-mdt-q3',
        kind: 'mcq',
        topic: 'ma-deferred-tax',
        difficulty: 2,
        objective: { en: 'Explain the link between the DTL and goodwill.', it: 'Spiegare il legame tra DTL e avviamento.' },
        prompt: { en: 'Why does recognising a DTL on step-ups increase goodwill?', it: 'Perché la rilevazione di una DTL sui plusvalori aumenta l’avviamento?' },
        choices: [
          { en: 'Because the DTL is added to the purchase price', it: 'Perché la DTL si somma al prezzo pagato' },
          { en: 'Because the DTL is a liability assumed, reducing the FV of identifiable net assets while the price is unchanged', it: 'Perché la DTL è una passività assunta che riduce il FV dell’attivo netto identificabile, a parità di prezzo' },
          { en: 'Because IAS 12 requires a DTL on goodwill', it: 'Perché lo IAS 12 impone una DTL sull’avviamento' },
          { en: 'Because the DTL is recognised in P&L at closing', it: 'Perché la DTL si rileva a conto economico al closing' }
        ],
        correct: 1,
        explanation: {
          en: 'Goodwill = price − FV of net assets. A new liability lowers net assets, so the residual rises one-for-one. The price itself is unchanged; IAS 12.15(a) actually prohibits a DTL on goodwill; and PPA deferred taxes go to goodwill, not P&L.',
          it: 'Avviamento = prezzo − FV dell’attivo netto. Una nuova passività riduce l’attivo netto, quindi il residuo sale in misura identica. Il prezzo non cambia; lo IAS 12.15(a) vieta anzi la DTL sull’avviamento; e la fiscalità della PPA va ad avviamento, non a conto economico.'
        }
      },
      {
        id: 'acc-mdt-q4',
        kind: 'numeric',
        topic: 'ma-deferred-tax',
        difficulty: 2,
        objective: { en: 'Compute the annual DTL unwind.', it: 'Calcolare il riassorbimento annuo della DTL.' },
        prompt: {
          en: 'A customer-relationship step-up of €120m is amortised over 8 years. Tax rate 25%, share deal. Annual deferred tax income from the DTL unwind (€m)?',
          it: 'Un plusvalore sulle relazioni con la clientela di €120m si ammortizza in 8 anni. Aliquota 25%, share deal. Provento annuo per imposte differite da riassorbimento della DTL (€m)?'
        },
        answer: 3.75,
        unit: '€m',
        verify: { fn: 'product', args: [15, 0.25] },
        tolerance: { abs: 0.01 },
        explanation: {
          en: 'Amortisation 120 / 8 = 15; DTL unwind 15 × 25% = 3.75. Net income falls by 15 − 3.75 = 11.25; cash taxes are unchanged.',
          it: 'Ammortamento 120 / 8 = 15; riassorbimento DTL 15 × 25% = 3,75. L’utile netto cala di 15 − 3,75 = 11,25; le imposte pagate non cambiano.'
        }
      },
      {
        id: 'acc-mdt-q5',
        kind: 'numeric',
        topic: 'ma-deferred-tax',
        difficulty: 2,
        objective: { en: 'Quantify the cash tax benefit of deductible goodwill in an asset deal.', it: 'Quantificare il beneficio fiscale di cassa dell’avviamento deducibile in un asset deal.' },
        prompt: {
          en: 'In a US asset deal, €150m of goodwill is amortised for tax over 15 years. Tax rate 25%. Annual cash tax saving (€m)?',
          it: 'In un asset deal negli USA, €150m di avviamento si ammortizzano fiscalmente in 15 anni. Aliquota 25%. Risparmio d’imposta annuo (€m)?'
        },
        answer: 2.5,
        unit: '€m',
        verify: { fn: 'product', args: [10, 0.25] },
        explanation: {
          en: '150 / 15 = 10 of deductions a year × 25% = 2.5 of cash tax saved. Under IFRS/US GAAP the book goodwill is not amortised, so a DTL builds up over time on tax-deductible goodwill.',
          it: '150 / 15 = 10 di deduzioni l’anno × 25% = 2,5 di imposte risparmiate. In IFRS/US GAAP l’avviamento contabile non si ammortizza, quindi sull’avviamento deducibile si forma nel tempo una DTL.'
        }
      },
      {
        id: 'acc-mdt-q6',
        kind: 'multi',
        topic: 'ma-deferred-tax',
        difficulty: 3,
        objective: { en: 'Distinguish share-deal and asset-deal tax consequences.', it: 'Distinguere le conseguenze fiscali di share deal e asset deal.' },
        prompt: { en: 'Select all correct statements.', it: 'Seleziona tutte le affermazioni corrette.' },
        choices: [
          { en: 'In a share deal, cash taxes after the deal are unaffected by PPA step-ups', it: 'In uno share deal le imposte pagate dopo l’operazione non sono influenzate dai plusvalori della PPA' },
          { en: 'In an asset deal, goodwill is usually lower than in an equivalent share deal (no DTL)', it: 'In un asset deal l’avviamento è di solito inferiore rispetto a un equivalente share deal (nessuna DTL)' },
          { en: 'In Italy, goodwill acquired in an asset deal is deductible for IRES at max 1/18 per year', it: 'In Italia l’avviamento acquisito in un asset deal è deducibile ai fini IRES al massimo per 1/18 l’anno' },
          { en: 'A DTL must be recognised on goodwill at the acquisition date', it: 'Alla data di acquisizione si deve rilevare una DTL sull’avviamento' },
          { en: 'The DTL unwind increases cash flow from operations', it: 'Il riassorbimento della DTL aumenta il flusso di cassa operativo' }
        ],
        correct: [0, 1, 2],
        explanation: {
          en: 'Share deal: tax bases unchanged, so cash taxes do not move. Asset deal: no DTL → lower goodwill. Art. 103 TUIR: 1/18 cap. No DTL on goodwill at initial recognition (IAS 12.15(a)). The DTL unwind is non-cash: it raises net income vs a no-tax-effect view but is reversed in the CFO reconciliation, leaving cash unchanged.',
          it: 'Share deal: valori fiscali invariati, quindi le imposte pagate non cambiano. Asset deal: nessuna DTL → avviamento minore. Art. 103 TUIR: limite di 1/18. Nessuna DTL sull’avviamento all’iscrizione iniziale (IAS 12.15(a)). Il riassorbimento della DTL è non monetario: aumenta l’utile rispetto a una vista senza effetto fiscale, ma si storna nella riconciliazione del flusso operativo, lasciando la cassa invariata.'
        }
      }
    ],
    flashcards: [
      { id: 'fc-acc-mdt-1', topic: 'ma-deferred-tax', front: { en: 'Why a DTL in a share deal?', it: 'Perché una DTL in uno share deal?' }, back: { en: 'Book values are stepped up to FV but tax bases carry over → future taxable profit exceeds book profit.', it: 'I valori contabili salgono al FV ma quelli fiscali restano invariati → il reddito imponibile futuro supera l’utile contabile.' } },
      { id: 'fc-acc-mdt-2', topic: 'ma-deferred-tax', front: { en: 'Effect of the PPA DTL on goodwill?', it: 'Effetto della DTL da PPA sull’avviamento?' }, back: { en: 'Goodwill increases by the amount of the DTL.', it: 'L’avviamento aumenta dell’importo della DTL.' } },
      { id: 'fc-acc-mdt-3', topic: 'ma-deferred-tax', front: { en: 'DTL on goodwill at acquisition?', it: 'DTL sull’avviamento all’acquisizione?' }, back: { en: 'Not recognised (IAS 12.15(a)); same for non-deductible goodwill under US GAAP.', it: 'Non si rileva (IAS 12.15(a)); idem per l’avviamento non deducibile negli US GAAP.' } },
      { id: 'fc-acc-mdt-4', topic: 'ma-deferred-tax', front: { en: 'Section 338(h)(10)?', it: 'Section 338(h)(10)?' }, back: { en: 'US election treating a qualifying stock purchase as an asset purchase for tax → tax basis step-up.', it: 'Elezione fiscale USA che tratta un acquisto di azioni qualificato come acquisto di attività → riconoscimento fiscale dei maggiori valori.' } },
      { id: 'fc-acc-mdt-5', topic: 'ma-deferred-tax', front: { en: 'Italian tax amortisation of goodwill in an asset deal?', it: 'Ammortamento fiscale dell’avviamento in un asset deal in Italia?' }, back: { en: 'Max 1/18 per year for IRES (art. 103 TUIR).', it: 'Massimo 1/18 l’anno ai fini IRES (art. 103 TUIR).' } }
    ],
    sources: [SRC_IAS12, SRC_IFRS3, SRC_ASC805, { label: 'TUIR (D.P.R. 917/1986), artt. 87 e 103 — Normattiva', url: 'https://www.normattiva.it/' }, { label: 'US Internal Revenue Code §197 and §338(h)(10)', url: 'https://www.law.cornell.edu/uscode/text/26/197' }]
  },

  /* ============================================================ */
  /* A7.4 Contingent consideration & bargain purchases             */
  /* ============================================================ */
  {
    id: 'acc-contingent-consideration',
    academyId: 'accounting',
    moduleId: 'A7',
    mode: 'deep',
    minutes: 13,
    difficulty: 3,
    reviewed: '2026-10',
    objective: {
      en: 'Measure earn-outs at acquisition-date fair value, account for subsequent remeasurement under IFRS 3 / ASC 805, separate them from remuneration, and treat bargain purchases under IFRS, US GAAP and OIC 17.',
      it: 'Misurare gli earn-out al fair value alla data di acquisizione, contabilizzarne la rimisurazione successiva secondo IFRS 3 / ASC 805, distinguerli dalla remunerazione e trattare gli acquisti a prezzi favorevoli secondo IFRS, US GAAP e OIC 17.'
    },
    screens: [
      {
        type: 'intuition',
        title: { en: 'Pay more only if it works', it: 'Pagare di più solo se funziona' },
        body: {
          en: 'Buyer and seller often disagree on the target’s future. An **earn-out** bridges the gap: part of the price is paid later **only if** targets (EBITDA, revenue, a drug approval) are met.\n\nAccounting asks: what is that promise worth **today**? It is recorded at **fair value** at the acquisition date — probability-weighted and discounted — and included in consideration (and so in goodwill). What happens afterwards is the surprising part: changes in its value go through **profit or loss**, not goodwill.',
          it: 'Acquirente e venditore spesso non concordano sul futuro della target. Un **earn-out** colma la distanza: parte del prezzo si paga più tardi **solo se** si raggiungono obiettivi (EBITDA, ricavi, l’approvazione di un farmaco).\n\nLa contabilità si chiede: quanto vale **oggi** questa promessa? Si iscrive al **fair value** alla data di acquisizione — ponderato per le probabilità e attualizzato — e si include nel corrispettivo (quindi nell’avviamento). La parte sorprendente viene dopo: le sue variazioni di valore passano a **conto economico**, non ad avviamento.'
        }
      },
      {
        type: 'technical',
        title: { en: 'IFRS 3 and ASC 805 rules', it: 'Le regole di IFRS 3 e ASC 805' },
        body: {
          en: '- **Initial**: contingent consideration is part of consideration at acquisition-date **fair value** (IFRS 3.39; ASC 805-30-25-5).\n- **Classification**: liability (most cash earn-outs, financial liability under IFRS 9) or equity (e.g. a fixed number of shares).\n- **Subsequent (IFRS 3.58)**: **equity-classified** → not remeasured, settlement within equity. **Liability-classified** → remeasured at fair value at each reporting date, changes in **P&L**. US GAAP (ASC 805-30-35-1) is equivalent.\n- **Measurement period** adjustments (new information about facts existing at the acquisition date, within one year) adjust **goodwill**; changes from post-acquisition events (targets met or missed, share price moves) go to **P&L**.\n- **Not consideration**: payments to sellers who stay as employees and **forfeit them if they leave** are remuneration for post-combination services → expensed (IFRS 3.B55(a)).',
          it: '- **Iniziale**: il corrispettivo potenziale fa parte del corrispettivo al **fair value** alla data di acquisizione (IFRS 3.39; ASC 805-30-25-5).\n- **Classificazione**: passività (la maggior parte degli earn-out in denaro, passività finanziaria IFRS 9) o patrimonio netto (es. un numero fisso di azioni).\n- **Successiva (IFRS 3.58)**: **classificato a PN** → non si rimisura, regolamento nel PN. **Classificato come passività** → rimisurato al fair value a ogni data di bilancio, variazioni a **conto economico**. Gli US GAAP (ASC 805-30-35-1) sono equivalenti.\n- Le rettifiche del **periodo di valutazione** (nuove informazioni su fatti esistenti alla data di acquisizione, entro un anno) rettificano l’**avviamento**; le variazioni dovute a eventi successivi (obiettivi raggiunti o mancati, andamento del titolo) vanno a **conto economico**.\n- **Non è corrispettivo**: i pagamenti ai venditori che restano come dipendenti e che **decadono se lasciano** l’azienda sono remunerazione per servizi successivi → costo (IFRS 3.B55(a)).'
        }
      },
      {
        type: 'technical',
        title: { en: 'Bargain purchases', it: 'Acquisti a prezzi favorevoli' },
        body: {
          en: 'If the FV of identifiable net assets exceeds consideration + NCI + previously held interest, goodwill would be negative.\n\n**IFRS 3.34–36 / ASC 805-30-25-2 to 25-4**: first **reassess** that all assets and liabilities have been correctly identified and measured (and the consideration too). Any remaining excess is a **gain in P&L at the acquisition date**, attributed to the acquirer. Typical in distressed or forced sales.\n\n**Italian GAAP (OIC 17)**: a negative elimination difference ("differenza negativa da annullamento") is first used to reduce overstated assets / recognise understated liabilities; any residual goes to a **"fondo di consolidamento per rischi e oneri futuri"** if it reflects expected future losses (released to P&L as they occur), or to a **"riserva di consolidamento"** in equity if it reflects a genuine bargain ("buon affare").',
          it: 'Se il FV dell’attivo netto identificabile supera corrispettivo + terzi + interessenza già detenuta, l’avviamento risulterebbe negativo.\n\n**IFRS 3.34–36 / ASC 805-30-25-2 a 25-4**: prima si **verifica nuovamente** che tutte le attività e passività siano state correttamente identificate e misurate (e anche il corrispettivo). L’eventuale eccedenza residua è un **utile a conto economico alla data di acquisizione**, attribuito all’acquirente. Tipico di vendite forzate o in situazioni di crisi.\n\n**Principi italiani (OIC 17)**: la "differenza negativa da annullamento" si usa prima per ridurre attività sopravvalutate / rilevare passività sottovalutate; l’eventuale residuo va a un **"fondo di consolidamento per rischi e oneri futuri"** se riflette perdite future attese (rilasciato a conto economico al loro manifestarsi), oppure a una **"riserva di consolidamento"** nel patrimonio netto se deriva da un vero "buon affare".'
        }
      },
      {
        type: 'formula',
        formulas: [
          {
            name: { en: 'Fair value of an earn-out (simple)', it: 'Fair value di un earn-out (semplificato)' },
            expr: 'FV = Probability × Payout / (1 + r)^t',
            vars: [
              { sym: 'r', desc: { en: 'Discount rate reflecting the risk of the payment', it: 'Tasso di sconto che riflette il rischio del pagamento' } },
              { sym: 't', desc: { en: 'Years until payment', it: 'Anni al pagamento' } }
            ]
          },
          { name: { en: 'Remeasurement (liability-classified)', it: 'Rimisurazione (classificato come passività)' }, expr: 'P&L charge (gain) = FV_t − FV_t−1' },
          { name: { en: 'Bargain purchase gain', it: 'Utile da acquisto a prezzi favorevoli' }, expr: 'Gain = FV of identifiable net assets − (Consideration + NCI + Previously held interest), after reassessment' }
        ]
      },
      {
        type: 'example',
        title: { en: 'An earn-out over two years', it: 'Un earn-out su due anni' },
        body: {
          en: 'Buyer pays **€500m** at closing plus **€121m** in 2 years if 2027 EBITDA ≥ €80m. At closing: probability 50%, discount rate 10% → FV = 60.5 / 1.1² = **€50m**. FV of identifiable net assets €430m.\n\nConsideration = 500 + 50 = **550** → goodwill = **120**.\n\nAfter year 1 the business outperforms: probability 80% → FV = 96.8 / 1.1 = **€88m**. After year 2 the target is met and €121m is paid.',
          it: 'L’acquirente paga **€500m** al closing più **€121m** fra 2 anni se l’EBITDA 2027 ≥ €80m. Al closing: probabilità 50%, tasso di sconto 10% → FV = 60,5 / 1,1² = **€50m**. FV dell’attivo netto identificabile €430m.\n\nCorrispettivo = 500 + 50 = **550** → avviamento = **120**.\n\nDopo il primo anno il business va meglio del previsto: probabilità 80% → FV = 96,8 / 1,1 = **€88m**. Dopo il secondo anno l’obiettivo è raggiunto e si pagano €121m.'
        },
        table: {
          headers: [{ en: '€m', it: '€m' }, { en: 'Liability', it: 'Passività' }, { en: 'P&L', it: 'Conto economico' }, { en: 'Goodwill', it: 'Avviamento' }],
          rows: [
            [{ en: 'Closing', it: 'Closing' }, '50', '—', '120'],
            [{ en: 'Year 1 remeasurement', it: 'Rimisurazione anno 1' }, '88', '(38)', '120'],
            [{ en: 'Year 2 remeasurement', it: 'Rimisurazione anno 2' }, '121', '(33)', '120'],
            [{ en: 'Payment', it: 'Pagamento' }, '0', '—', '120'],
            [{ en: 'Total P&L charge', it: 'Onere totale a CE' }, '', '(71)', '']
          ],
          totalRows: [4]
        }
      },
      {
        type: 'realworld',
        body: {
          en: 'Earn-outs are common in private M&A, life sciences (milestones tied to regulatory approvals) and founder-led tech deals. The P&L effect is counter-intuitive and analysts must strip it out: **if the acquired business does well, the acquirer reports a loss** on the earn-out; if it does badly, a **gain** — often alongside a goodwill impairment. In the EV bridge and in debt-like items for a later deal, outstanding earn-out liabilities are usually treated as **debt-like**.',
          it: 'Gli earn-out sono frequenti nelle M&A tra privati, nel life sciences (milestone legate ad autorizzazioni regolatorie) e nelle operazioni tech con fondatori. L’effetto a conto economico è controintuitivo e l’analista deve normalizzarlo: **se il business acquisito va bene, l’acquirente registra una perdita** sull’earn-out; se va male, un **utile** — spesso insieme a una svalutazione dell’avviamento. Nel bridge verso l’EV e tra le voci debt-like di un’operazione successiva, gli earn-out residui sono di solito trattati come **debt-like**.'
        }
      },
      { type: 'exercise', questionId: 'acc-cc-q1' },
      { type: 'exercise', questionId: 'acc-cc-q2' },
      { type: 'exercise', questionId: 'acc-cc-q3' },
      { type: 'exercise', questionId: 'acc-cc-q4' },
      {
        type: 'interview',
        question: { en: 'The acquired business beats its earn-out targets. What happens to the acquirer’s income statement?', it: 'Il business acquisito supera gli obiettivi dell’earn-out. Cosa succede al conto economico dell’acquirente?' },
        answer: {
          en: 'Under IFRS 3 and ASC 805 a cash earn-out is a liability measured at fair value. When the business outperforms, the probability of paying rises, so the liability is remeasured upward and the increase is a loss in P&L — goodwill is not touched, because the change reflects post-acquisition events. So good operating news creates an accounting charge. I would exclude these remeasurements from adjusted EBITDA and EPS and treat the outstanding earn-out as a debt-like item in valuation.',
          it: 'Secondo IFRS 3 e ASC 805 un earn-out in denaro è una passività valutata al fair value. Se il business va meglio, aumenta la probabilità di pagare, quindi la passività si rimisura al rialzo e l’incremento è una perdita a conto economico — l’avviamento non si tocca, perché la variazione riflette eventi successivi all’acquisizione. Quindi una buona notizia operativa genera un onere contabile. Escluderei queste rimisurazioni da EBITDA ed EPS adjusted e tratterei l’earn-out residuo come voce debt-like in valutazione.'
        }
      },
      {
        type: 'mistakes',
        items: [
          { en: 'Adjusting goodwill for post-acquisition changes in earn-out fair value. Only measurement period adjustments about acquisition-date facts go to goodwill.', it: 'Rettificare l’avviamento per variazioni del fair value dell’earn-out successive all’acquisizione. Solo le rettifiche del periodo di valutazione su fatti esistenti all’acquisizione vanno ad avviamento.' },
          { en: 'Recording the maximum payout rather than its probability-weighted, discounted fair value.', it: 'Iscrivere il pagamento massimo anziché il fair value ponderato e attualizzato.' },
          { en: 'Treating payments forfeited if the seller leaves as consideration: they are compensation expense.', it: 'Trattare come corrispettivo i pagamenti che decadono se il venditore lascia: sono costo del personale.' },
          { en: 'Booking a bargain purchase gain without first reassessing identification and measurement.', it: 'Rilevare un utile da acquisto a prezzi favorevoli senza prima riverificare identificazione e misurazione.' }
        ]
      },
      {
        type: 'summary',
        items: [
          { en: 'Earn-out = consideration at acquisition-date fair value (probability-weighted, discounted).', it: 'Earn-out = corrispettivo al fair value alla data di acquisizione (ponderato e attualizzato).' },
          { en: 'Liability-classified: remeasured through P&L (IFRS 3.58, ASC 805); equity-classified: not remeasured.', it: 'Classificato come passività: rimisurato a conto economico (IFRS 3.58, ASC 805); classificato a PN: non rimisurato.' },
          { en: 'Bargain purchase: reassess, then gain in P&L (IFRS/US GAAP).', it: 'Acquisto a prezzi favorevoli: riverifica, poi utile a conto economico (IFRS/US GAAP).' },
          { en: 'OIC 17: negative difference → fondo rischi (expected losses) or riserva di consolidamento (buon affare).', it: 'OIC 17: differenza negativa → fondo rischi (perdite attese) o riserva di consolidamento (buon affare).' }
        ]
      }
    ],
    questions: [
      {
        id: 'acc-cc-q1',
        kind: 'numeric',
        topic: 'contingent-consideration',
        difficulty: 2,
        objective: { en: 'Measure the fair value of an earn-out.', it: 'Misurare il fair value di un earn-out.' },
        prompt: {
          en: 'An earn-out pays €200m in 2 years with a 60% probability. Discount rate 8%. Acquisition-date fair value (€m, 2 decimals)?',
          it: 'Un earn-out paga €200m fra 2 anni con probabilità del 60%. Tasso di sconto 8%. Fair value alla data di acquisizione (€m, 2 decimali)?'
        },
        answer: 102.88,
        unit: '€m',
        tolerance: { abs: 0.05 },
        verify: { fn: 'pv', args: [120, 0.08, 2] },
        explanation: {
          en: 'Expected payout 60% × 200 = 120; PV = 120 / 1.08² = 102.88. Recording 200 (maximum) or 120 (undiscounted) overstates consideration and goodwill.',
          it: 'Pagamento atteso 60% × 200 = 120; VA = 120 / 1,08² = 102,88. Iscrivere 200 (massimo) o 120 (non attualizzato) sovrastima corrispettivo e avviamento.'
        }
      },
      {
        id: 'acc-cc-q2',
        kind: 'numeric',
        topic: 'contingent-consideration',
        difficulty: 2,
        objective: { en: 'Compute the P&L effect of remeasuring a liability-classified earn-out.', it: 'Calcolare l’effetto a conto economico della rimisurazione di un earn-out classificato come passività.' },
        prompt: {
          en: 'A cash earn-out liability was recognised at €40m at the acquisition date. Eighteen months later (after the measurement period) its fair value is €65m because the target outperformed. Pre-tax charge to P&L under IFRS 3 (€m)?',
          it: 'Una passività per earn-out in denaro è stata iscritta a €40m alla data di acquisizione. Diciotto mesi dopo (oltre il periodo di valutazione) il suo fair value è €65m perché la target ha superato le attese. Onere ante imposte a conto economico secondo IFRS 3 (€m)?'
        },
        answer: 25,
        unit: '€m',
        verify: { fn: 'diff', args: [65, 40] },
        explanation: {
          en: '65 − 40 = 25 charged to P&L (IFRS 3.58(b); same under ASC 805). Goodwill is unchanged because the change reflects post-acquisition performance, not acquisition-date facts.',
          it: '65 − 40 = 25 a conto economico (IFRS 3.58(b); idem ASC 805). L’avviamento non cambia perché la variazione riflette la performance successiva all’acquisizione, non fatti esistenti alla data di acquisizione.'
        }
      },
      {
        id: 'acc-cc-q3',
        kind: 'numeric',
        topic: 'bargain-purchase',
        difficulty: 2,
        objective: { en: 'Compute a bargain purchase gain.', it: 'Calcolare un utile da acquisto a prezzi favorevoli.' },
        prompt: {
          en: 'A buyer acquires 100% of a distressed company for €450m. After reassessment, FV of identifiable net assets is €520m. Gain recognised in P&L under IFRS 3 (€m)?',
          it: 'Un acquirente rileva il 100% di una società in crisi per €450m. Dopo la riverifica, il FV dell’attivo netto identificabile è €520m. Utile rilevato a conto economico secondo IFRS 3 (€m)?'
        },
        answer: 70,
        unit: '€m',
        verify: { fn: 'diff', args: [520, 450] },
        explanation: {
          en: 'Goodwill = 450 − 520 = −70 → a €70m bargain purchase gain in P&L at the acquisition date (IFRS 3.34; ASC 805-30-25-2). Under OIC 17 the same difference would go to a consolidation reserve (buon affare) or to a fondo rischi (expected losses), not to P&L.',
          it: '450 − 520 = −70 → utile da acquisto a prezzi favorevoli di €70m a conto economico alla data di acquisizione (IFRS 3.34; ASC 805-30-25-2). Con l’OIC 17 la stessa differenza andrebbe a riserva di consolidamento (buon affare) o a fondo rischi (perdite attese), non a conto economico.'
        }
      },
      {
        id: 'acc-cc-q4',
        kind: 'mcq',
        topic: 'contingent-consideration',
        difficulty: 3,
        objective: { en: 'Separate contingent consideration from post-combination remuneration.', it: 'Distinguere corrispettivo potenziale e remunerazione post-aggregazione.' },
        prompt: {
          en: 'The founders sell 100% and stay as managers. They receive an extra €30m in 3 years if revenue targets are met, but only if they are still employed then. Under IFRS 3:',
          it: 'I fondatori vendono il 100% e restano come manager. Riceveranno €30m in più fra 3 anni se saranno raggiunti obiettivi di ricavi, ma solo se ancora dipendenti a quella data. Secondo IFRS 3:'
        },
        choices: [
          { en: 'The €30m is contingent consideration at fair value, included in goodwill', it: 'I €30m sono corrispettivo potenziale a fair value, incluso nell’avviamento' },
          { en: 'It is remuneration for post-combination services, expensed over the service period', it: 'Sono remunerazione per servizi successivi, spesata lungo il periodo di servizio' },
          { en: 'It is ignored until paid', it: 'Si ignora fino al pagamento' },
          { en: 'It is a bargain purchase gain', it: 'È un utile da acquisto a prezzi favorevoli' }
        ],
        correct: 1,
        explanation: {
          en: 'A contingent payment that is automatically forfeited if employment terminates is remuneration for post-combination services (IFRS 3.B55(a); same principle in ASC 805-10-55-25). It is not part of consideration, so it does not increase goodwill.',
          it: 'Un pagamento potenziale che decade automaticamente se cessa il rapporto di lavoro è remunerazione per servizi successivi all’aggregazione (IFRS 3.B55(a); stesso principio in ASC 805-10-55-25). Non fa parte del corrispettivo, quindi non aumenta l’avviamento.'
        }
      },
      {
        id: 'acc-cc-q5',
        kind: 'mcq',
        topic: 'bargain-purchase',
        difficulty: 3,
        objective: { en: 'Know the Italian GAAP treatment of a negative consolidation difference.', it: 'Conoscere il trattamento OIC della differenza negativa di consolidamento.' },
        prompt: {
          en: 'Under OIC 17, a negative elimination difference that reflects expected future losses of the subsidiary (after correcting asset/liability values) is recognised as:',
          it: 'Secondo l’OIC 17, una differenza negativa da annullamento che riflette perdite future attese della controllata (dopo aver corretto i valori di attività e passività) si rileva come:'
        },
        choices: [
          { en: 'An immediate gain in the income statement', it: 'Un utile immediato a conto economico' },
          { en: 'A "riserva di consolidamento" in equity', it: 'Una "riserva di consolidamento" nel patrimonio netto' },
          { en: 'A "fondo di consolidamento per rischi e oneri futuri"', it: 'Un "fondo di consolidamento per rischi e oneri futuri"' },
          { en: 'Negative goodwill in assets, amortised', it: 'Avviamento negativo nell’attivo, ammortizzato' }
        ],
        correct: 2,
        explanation: {
          en: 'OIC 17 (consistent with D.Lgs. 127/1991) puts it in a consolidation provision for future risks and charges, released as the losses materialise. The equity reserve is for a genuine "buon affare"; an immediate P&L gain is the IFRS/US GAAP treatment of a bargain purchase.',
          it: 'L’OIC 17 (coerente con il D.Lgs. 127/1991) la iscrive in un fondo di consolidamento per rischi e oneri futuri, rilasciato al manifestarsi delle perdite. La riserva di PN è per un vero "buon affare"; l’utile immediato a conto economico è il trattamento IFRS/US GAAP del bargain purchase.'
        }
      }
    ],
    flashcards: [
      { id: 'fc-acc-cc-1', topic: 'contingent-consideration', front: { en: 'Initial measurement of an earn-out?', it: 'Misurazione iniziale di un earn-out?' }, back: { en: 'Acquisition-date fair value, included in consideration (and so in goodwill).', it: 'Fair value alla data di acquisizione, incluso nel corrispettivo (e quindi nell’avviamento).' } },
      { id: 'fc-acc-cc-2', topic: 'contingent-consideration', front: { en: 'Subsequent changes in a liability-classified earn-out?', it: 'Variazioni successive di un earn-out classificato come passività?' }, back: { en: 'Remeasured at FV through P&L (IFRS 3.58; ASC 805-30-35-1). Equity-classified: not remeasured.', it: 'Rimisurato al FV a conto economico (IFRS 3.58; ASC 805-30-35-1). Classificato a PN: non rimisurato.' } },
      { id: 'fc-acc-cc-3', topic: 'bargain-purchase', front: { en: 'Bargain purchase under IFRS 3?', it: 'Bargain purchase secondo IFRS 3?' }, back: { en: 'Reassess identification and measurement; residual excess = gain in P&L at the acquisition date.', it: 'Riverificare identificazione e misurazione; l’eccedenza residua è un utile a CE alla data di acquisizione.' } },
      { id: 'fc-acc-cc-4', topic: 'bargain-purchase', front: { en: 'OIC 17: negative difference from a "buon affare"?', it: 'OIC 17: differenza negativa da "buon affare"?' }, back: { en: '"Riserva di consolidamento" in consolidated equity.', it: '"Riserva di consolidamento" nel patrimonio netto consolidato.' } }
    ],
    sources: [SRC_IFRS3, SRC_ASC805, SRC_OIC17, SRC_127]
  },

  /* ============================================================ */
  /* A7.5 Pro forma financial statements                           */
  /* ============================================================ */
  {
    id: 'acc-pro-forma',
    academyId: 'accounting',
    moduleId: 'A7',
    mode: 'deep',
    minutes: 20,
    difficulty: 3,
    reviewed: '2026-10',
    objective: {
      en: 'Build a pro forma combined balance sheet (new debt, cash used, target equity eliminated, goodwill, intangibles, DTL) and income statement (interest, PPA amortisation, synergies), and trace the deal through all three statements.',
      it: 'Costruire uno stato patrimoniale pro forma combinato (nuovo debito, cassa utilizzata, eliminazione del PN della target, avviamento, intangibili, DTL) e un conto economico pro forma (interessi, ammortamenti da PPA, sinergie), seguendo l’operazione nei tre prospetti.'
    },
    screens: [
      {
        type: 'intuition',
        title: { en: 'What would the combined company look like?', it: 'Come sarebbe la società combinata?' },
        body: {
          en: 'Pro forma = **"as if"**. Pro forma statements show the combined company as if the deal had already happened: the balance sheet at closing, and the income statement as if the target had been owned (and the debt outstanding) for the whole year.\n\nThey are the core output of a **merger model**: they tell the board what leverage, goodwill and EPS will look like after the deal, and they feed the accretion/dilution and credit analysis that bankers present.',
          it: 'Pro forma = **"come se"**. I prospetti pro forma mostrano la società combinata come se l’operazione fosse già avvenuta: lo stato patrimoniale al closing e il conto economico come se la target fosse stata posseduta (e il debito in essere) per tutto l’anno.\n\nSono l’output principale di un **merger model**: dicono al CdA come saranno leva, avviamento ed EPS dopo l’operazione e alimentano l’analisi di accretion/dilution e di credito che i banker presentano.'
        }
      },
      {
        type: 'technical',
        title: { en: 'Balance sheet adjustments at closing', it: 'Rettifiche patrimoniali al closing' },
        body: {
          en: 'Start from acquirer + target, then:\n- **Sources**: + new debt raised (net of capitalised financing fees), + new shares issued, − acquirer cash used.\n- **Uses**: purchase of target equity, refinancing of target debt (if any), transaction fees.\n- **Eliminate target equity** (it is replaced by the acquirer’s investment, then eliminated).\n- **Write off target’s existing goodwill**; add **new goodwill**.\n- **Step up** assets and recognise **new intangibles**; add the **DTL** on step-ups (share deal).\n- **Advisory fees** expensed → reduce cash and retained earnings.\n\nCheck: in an all-cash/debt deal, pro forma equity = acquirer equity − expensed fees (after tax, if deductible). New shares issued would increase it.',
          it: 'Si parte da acquirente + target, poi:\n- **Fonti**: + nuovo debito raccolto (al netto delle commissioni capitalizzate), + nuove azioni emesse, − cassa dell’acquirente utilizzata.\n- **Impieghi**: acquisto dell’equity della target, rifinanziamento del debito della target (se previsto), commissioni.\n- **Eliminare il PN della target** (sostituito dalla partecipazione dell’acquirente, poi elisa).\n- **Stornare l’avviamento esistente** della target; aggiungere il **nuovo avviamento**.\n- **Rivalutare** le attività e rilevare i **nuovi intangibili**; aggiungere la **DTL** sui plusvalori (share deal).\n- **Commissioni di advisory** spesate → riducono cassa e utili a nuovo.\n\nVerifica: in un’operazione per cassa/debito, PN pro forma = PN dell’acquirente − commissioni spesate (al netto delle imposte, se deducibili). L’emissione di nuove azioni lo aumenterebbe.'
        }
      },
      {
        type: 'technical',
        title: { en: 'Income statement adjustments', it: 'Rettifiche di conto economico' },
        body: {
          en: '- **+ Target P&L** for the full period.\n- **− Interest on new debt** (and amortisation of capitalised financing fees).\n- **− Foregone interest** on acquirer cash used.\n- **− Incremental D&A** on step-ups and new finite-life intangibles (PPA amortisation). One-offs such as the inventory step-up and advisory fees are usually excluded from run-rate figures.\n- **+ Synergies** (management/banker case only).\n- **Tax** on all adjustments; then pro forma EPS on the new share count.\n\n**Regulatory pro formas** follow stricter rules: in EU prospectuses, Annex 20 of Delegated Regulation (EU) 2019/980; in the US, SEC Regulation S-X Article 11 (amended 2020), where synergies may only be shown as optional "management’s adjustments" in the notes. Banker models routinely include synergies, but show them separately.',
          it: '- **+ Conto economico della target** per l’intero periodo.\n- **− Interessi sul nuovo debito** (e ammortamento delle commissioni di finanziamento capitalizzate).\n- **− Interessi attivi persi** sulla cassa utilizzata.\n- **− Maggiori ammortamenti** su plusvalori e nuovi intangibili a vita definita (ammortamento da PPA). Le componenti una tantum, come il plusvalore sulle rimanenze e le commissioni di advisory, sono di solito escluse dai dati a regime.\n- **+ Sinergie** (solo nel caso management/banker).\n- **Imposte** su tutte le rettifiche; poi EPS pro forma sul nuovo numero di azioni.\n\n**I pro forma regolamentari** seguono regole più stringenti: nei prospetti UE, l’Allegato 20 del Regolamento Delegato (UE) 2019/980; negli USA, l’Article 11 della Regulation S-X della SEC (modificato nel 2020), dove le sinergie possono comparire solo come "management’s adjustments" facoltativi nelle note. I modelli dei banker includono di norma le sinergie, ma le espongono separatamente.'
        }
      },
      {
        type: 'formula',
        formulas: [
          {
            name: { en: 'Pro forma balance sheet line', it: 'Voce di stato patrimoniale pro forma' },
            expr: 'Pro forma = Acquirer + Target ± Financing ± PPA adjustments − Target equity'
          },
          {
            name: { en: 'Pro forma net income', it: 'Utile netto pro forma' },
            expr: 'PF NI = NI_A + NI_T + (Synergies − New interest − Foregone interest − New D&A) × (1 − t)'
          },
          {
            name: { en: 'Pro forma EPS', it: 'EPS pro forma' },
            expr: 'PF EPS = PF NI / (Acquirer shares + New shares issued)',
            vars: [{ sym: 't', desc: { en: 'Marginal tax rate applied to adjustments', it: 'Aliquota marginale applicata alle rettifiche' } }]
          }
        ]
      },
      {
        type: 'example',
        title: { en: 'The deal', it: 'L’operazione' },
        body: {
          en: 'AcquireCo buys **100% of TargetCo** (the PPA lesson target) for **€800m** of equity: **€500m new term loan** (6%) + **€300m of its own cash** (which earned 2%). Advisory fees **€20m**, paid in cash and expensed (assume not tax-deductible). Tax 25%; AcquireCo has 100m shares.\n\nPPA (share deal): inventory +20, PP&E +60, intangibles +320 (customers 150 over 10y, technology 70 over 5y, brand 100 indefinite), DTL 100, old goodwill 80 written off, **new goodwill 220**.',
          it: 'AcquireCo acquista il **100% di TargetCo** (la target della lezione sulla PPA) per **€800m** di equity: **€500m di nuovo term loan** (6%) + **€300m di cassa propria** (che rendeva il 2%). Commissioni di advisory **€20m**, pagate in contanti e spesate (ipotesi: non deducibili). Aliquota 25%; AcquireCo ha 100m di azioni.\n\nPPA (share deal): rimanenze +20, impianti +60, intangibili +320 (clienti 150 in 10 anni, tecnologia 70 in 5 anni, marchio 100 a vita indefinita), DTL 100, vecchio avviamento 80 stornato, **nuovo avviamento 220**.'
        }
      },
      {
        type: 'example',
        title: { en: 'Pro forma balance sheet at closing', it: 'Stato patrimoniale pro forma al closing' },
        body: {
          en: 'Cash: −300 (purchase) −20 (fees) = −320. Goodwill: −80 + 220 = +140. Equity: −360 (target equity) −20 (fees) = −380.',
          it: 'Cassa: −300 (acquisto) −20 (commissioni) = −320. Avviamento: −80 + 220 = +140. PN: −360 (PN della target) −20 (commissioni) = −380.'
        },
        table: {
          headers: [{ en: '€m', it: '€m' }, { en: 'AcquireCo', it: 'AcquireCo' }, { en: 'TargetCo', it: 'TargetCo' }, { en: 'Adj.', it: 'Rettifiche' }, { en: 'Pro forma', it: 'Pro forma' }],
          rows: [
            [{ en: 'Cash', it: 'Cassa' }, '500', '50', '−320', '230'],
            [{ en: 'Receivables', it: 'Crediti' }, '300', '100', '', '400'],
            [{ en: 'Inventory', it: 'Rimanenze' }, '250', '120', '+20', '390'],
            [{ en: 'PP&E', it: 'Immobilizzazioni materiali' }, '1,200', '300', '+60', '1,560'],
            [{ en: 'Intangibles', it: 'Intangibili' }, '0', '0', '+320', '320'],
            [{ en: 'Goodwill', it: 'Avviamento' }, '0', '80', '+140', '220'],
            [{ en: 'Total assets', it: 'Totale attivo' }, '2,250', '650', '+220', '3,120'],
            [{ en: 'Payables', it: 'Debiti commerciali' }, '250', '90', '', '340'],
            [{ en: 'Debt', it: 'Debiti finanziari' }, '600', '200', '+500', '1,300'],
            [{ en: 'DTL', it: 'Imposte differite passive' }, '0', '0', '+100', '100'],
            [{ en: 'Equity', it: 'Patrimonio netto' }, '1,400', '360', '−380', '1,380'],
            [{ en: 'Total L + E', it: 'Totale passivo + PN' }, '2,250', '650', '+220', '3,120']
          ],
          totalRows: [6, 11]
        }
      },
      {
        type: 'example',
        title: { en: 'Pro forma income statement (run-rate year)', it: 'Conto economico pro forma (anno a regime)' },
        body: {
          en: 'Adjustments: synergies +20 (pre-tax cost savings); new D&A 35 (PP&E 6 + customers 15 + technology 14); new interest 30 (6% × 500); foregone interest 6 (2% × 300). Fees and the inventory step-up are one-offs, excluded.',
          it: 'Rettifiche: sinergie +20 (risparmi di costo ante imposte); nuovi ammortamenti 35 (impianti 6 + clienti 15 + tecnologia 14); nuovi interessi 30 (6% × 500); interessi attivi persi 6 (2% × 300). Commissioni e plusvalore sulle rimanenze sono una tantum, esclusi.'
        },
        table: {
          headers: [{ en: '€m', it: '€m' }, { en: 'AcquireCo', it: 'AcquireCo' }, { en: 'TargetCo', it: 'TargetCo' }, { en: 'Adj.', it: 'Rettifiche' }, { en: 'Pro forma', it: 'Pro forma' }],
          rows: [
            [{ en: 'Revenue', it: 'Ricavi' }, '2,000', '600', '', '2,600'],
            ['EBITDA', '400', '120', '+20', '540'],
            [{ en: 'D&A', it: 'Ammortamenti' }, '(100)', '(30)', '(35)', '(165)'],
            ['EBIT', '300', '90', '−15', '375'],
            [{ en: 'Net interest', it: 'Oneri finanziari netti' }, '(30)', '(10)', '(36)', '(76)'],
            [{ en: 'Pre-tax income', it: 'Utile ante imposte' }, '270', '80', '−51', '299'],
            [{ en: 'Tax (25%)', it: 'Imposte (25%)' }, '(67.5)', '(20)', '+12.75', '(74.75)'],
            [{ en: 'Net income', it: 'Utile netto' }, '202.5', '60', '−38.25', '224.25'],
            [{ en: 'EPS (100m shares)', it: 'EPS (100m azioni)' }, '2.025', '', '', '2.2425']
          ],
          totalRows: [7]
        }
      },
      {
        type: 'example',
        title: { en: 'Cash flow statement and the three-statement check', it: 'Rendiconto finanziario e verifica sui tre prospetti' },
        body: {
          en: '**At closing (group cash flow, IAS 7.39–42)**:\n- Operating: advisory fees **−20** (expensed costs are generally operating)\n- Investing: acquisition of subsidiary **net of cash acquired** = 800 − 50 = **−750**\n- Financing: new term loan **+500**\n- Net change **−270**: group cash goes from 500 (AcquireCo alone) to **230** ✓\n\n**Each year after**: net income includes −26.25 after-tax PPA D&A; in CFO you add back the 35 of D&A and subtract the 8.75 deferred tax income (non-cash DTL unwind). Net cash effect of PPA = **0**. Interest is cash (−36 pre-tax, −27 after tax).',
          it: '**Al closing (flussi di gruppo, IAS 7.39–42)**:\n- Operativo: commissioni di advisory **−20** (i costi spesati sono di norma operativi)\n- Investimento: acquisizione della controllata **al netto della cassa acquisita** = 800 − 50 = **−750**\n- Finanziamento: nuovo term loan **+500**\n- Variazione netta **−270**: la cassa di gruppo passa da 500 (sola AcquireCo) a **230** ✓\n\n**Negli anni successivi**: l’utile include −26,25 di ammortamenti da PPA netti; nel flusso operativo si sommano i 35 di ammortamenti e si sottraggono gli 8,75 di provento per imposte differite (riassorbimento non monetario della DTL). Effetto netto della PPA sulla cassa = **0**. Gli interessi sono monetari (−36 ante imposte, −27 netti).'
        }
      },
      {
        type: 'realworld',
        body: {
          en: 'As an analyst you will build exactly this in Excel: a sources & uses table, a PPA schedule, the pro forma balance sheet (which **must balance**) and a pro forma P&L feeding EPS accretion/dilution and credit metrics (net debt / EBITDA here moves from (600 − 500) / 400 = 0.25x to (1,300 − 230) / 540 ≈ 2.0x including synergies). Rating agencies and lenders focus on pro forma leverage; equity investors on pro forma EPS and ROIC. Here EPS is **+10.7% accretive** with synergies, +3.3% without.',
          it: 'Da analista costruirai esattamente questo in Excel: una tabella fonti e impieghi, un prospetto di PPA, lo stato patrimoniale pro forma (che **deve quadrare**) e un conto economico pro forma che alimenta l’accretion/dilution dell’EPS e le metriche di credito (qui PFN / EBITDA passa da (600 − 500) / 400 = 0,25x a (1.300 − 230) / 540 ≈ 2,0x incluse le sinergie). Agenzie di rating e finanziatori guardano alla leva pro forma; gli investitori azionari a EPS e ROIC pro forma. Qui l’EPS è **accretive del 10,7%** con le sinergie, del 3,3% senza.'
        }
      },
      { type: 'exercise', questionId: 'acc-pf-q1' },
      { type: 'exercise', questionId: 'acc-pf-q2' },
      { type: 'exercise', questionId: 'acc-pf-q3' },
      { type: 'exercise', questionId: 'acc-pf-q4' },
      {
        type: 'interview',
        question: { en: 'Walk me through the pro forma balance sheet in a debt-funded acquisition.', it: 'Mi illustri lo stato patrimoniale pro forma di un’acquisizione finanziata a debito.' },
        answer: {
          en: 'I add the two balance sheets. On the financing side I add the new debt and reduce the acquirer’s cash for the cash used and for the fees. Then I eliminate the target’s equity, write off its existing goodwill, write up assets and recognise intangibles to fair value, book a DTL on those step-ups in a share deal, and plug new goodwill as the residual between price and fair value of net assets. Expensed advisory fees reduce retained earnings. Pro forma equity is the acquirer’s equity less those fees, plus any new shares issued. Then I check it balances and look at pro forma leverage.',
          it: 'Sommo i due stati patrimoniali. Sul lato finanziario aggiungo il nuovo debito e riduco la cassa dell’acquirente per la cassa utilizzata e per le commissioni. Poi elimino il PN della target, storno il suo avviamento esistente, rivaluto le attività e rilevo gli intangibili al fair value, iscrivo una DTL sui plusvalori se è uno share deal e determino il nuovo avviamento come residuo tra prezzo e fair value dell’attivo netto. Le commissioni di advisory spesate riducono gli utili a nuovo. Il PN pro forma è quello dell’acquirente meno le commissioni, più eventuali nuove azioni emesse. Infine verifico che quadri e analizzo la leva pro forma.'
        }
      },
      {
        type: 'mistakes',
        items: [
          { en: 'Adding the target’s equity to pro forma equity. It is always eliminated; only new shares issued increase equity.', it: 'Sommare il PN della target al PN pro forma. Si elimina sempre; solo le nuove azioni emesse aumentano il PN.' },
          { en: 'Forgetting to write off the target’s existing goodwill, or the DTL on step-ups.', it: 'Dimenticare lo storno dell’avviamento esistente della target o la DTL sui plusvalori.' },
          { en: 'Showing the full purchase price as the investing outflow: IAS 7 presents it net of cash acquired.', it: 'Esporre l’intero prezzo come uscita da investimento: lo IAS 7 lo presenta al netto della cassa acquisita.' },
          { en: 'Including one-off fees and inventory step-up in run-rate pro forma EPS, or mixing synergies into regulatory pro formas.', it: 'Includere commissioni una tantum e plusvalore sulle rimanenze nell’EPS pro forma a regime, o inserire le sinergie nei pro forma regolamentari.' }
        ]
      },
      {
        type: 'summary',
        items: [
          { en: 'BS: + new debt, − cash used and fees, − target equity, − old goodwill, + step-ups, + intangibles, + DTL, + new goodwill.', it: 'SP: + nuovo debito, − cassa usata e commissioni, − PN target, − vecchio avviamento, + plusvalori, + intangibili, + DTL, + nuovo avviamento.' },
          { en: 'IS: + target, − new interest, − foregone interest, − PPA D&A, + synergies, all tax-effected.', it: 'CE: + target, − nuovi interessi, − interessi persi, − ammortamenti PPA, + sinergie, tutto al netto delle imposte.' },
          { en: 'CF: acquisition net of cash acquired in investing; PPA D&A and DTL unwind are non-cash.', it: 'RF: acquisizione al netto della cassa acquisita nell’investimento; ammortamenti PPA e riassorbimento DTL sono non monetari.' },
          { en: 'Regulatory pro formas (EU Annex 20, SEC Art. 11) are stricter than banker models.', it: 'I pro forma regolamentari (Allegato 20 UE, SEC Art. 11) sono più stringenti dei modelli dei banker.' }
        ]
      }
    ],
    questions: [
      {
        id: 'acc-pf-q1',
        kind: 'grid',
        topic: 'pro-forma',
        difficulty: 3,
        objective: { en: 'Build a pro forma balance sheet at closing.', it: 'Costruire uno stato patrimoniale pro forma al closing.' },
        prompt: {
          en: 'Use the lesson deal (price €800m: €500m new debt + €300m AcquireCo cash; €20m expensed fees paid in cash; step-ups: inventory 20, PP&E 60, intangibles 320; tax 25%; TargetCo’s old goodwill 80 written off). Fill in the blanks (€m).',
          it: 'Usa l’operazione della lezione (prezzo €800m: €500m di nuovo debito + €300m di cassa di AcquireCo; €20m di commissioni spesate pagate in contanti; plusvalori: rimanenze 20, impianti 60, intangibili 320; aliquota 25%; vecchio avviamento di TargetCo 80 stornato). Completa le celle vuote (€m).'
        },
        unit: '€m',
        columns: [
          { en: 'Line', it: 'Voce' },
          { en: 'AcquireCo', it: 'AcquireCo' },
          { en: 'TargetCo', it: 'TargetCo' },
          { en: 'Adjustments', it: 'Rettifiche' },
          { en: 'Pro forma', it: 'Pro forma' }
        ],
        rows: [
          { label: { en: 'Cash', it: 'Cassa' }, cells: [500, 50, { answer: -320, verify: { fn: 'sum', args: [-300, -20] } }, { answer: 230, verify: { fn: 'sum', args: [500, 50, -320] } }] },
          { label: { en: 'Receivables', it: 'Crediti' }, cells: [300, 100, 0, 400] },
          { label: { en: 'Inventory', it: 'Rimanenze' }, cells: [250, 120, 20, { answer: 390, verify: { fn: 'sum', args: [250, 120, 20] } }] },
          { label: { en: 'PP&E', it: 'Immobilizzazioni materiali' }, cells: [1200, 300, 60, { answer: 1560, verify: { fn: 'sum', args: [1200, 300, 60] } }] },
          { label: { en: 'Intangibles', it: 'Intangibili' }, cells: [0, 0, 320, 320] },
          { label: { en: 'Goodwill', it: 'Avviamento' }, cells: [0, 80, { answer: 140, verify: { fn: 'sum', args: [-80, 220] } }, { answer: 220, verify: { fn: 'ppaGoodwill', args: [800, 360, 400, 0.25, 80] } }] },
          { label: { en: 'Total assets', it: 'Totale attivo' }, cells: [2250, 650, { answer: 220, verify: { fn: 'sum', args: [-320, 20, 60, 320, 140] } }, { answer: 3120, verify: { fn: 'sum', args: [230, 400, 390, 1560, 320, 220] } }] },
          { label: { en: 'Payables', it: 'Debiti commerciali' }, cells: [250, 90, 0, 340] },
          { label: { en: 'Debt', it: 'Debiti finanziari' }, cells: [600, 200, 500, { answer: 1300, verify: { fn: 'sum', args: [600, 200, 500] } }] },
          { label: { en: 'DTL', it: 'Imposte differite passive' }, cells: [0, 0, { answer: 100, verify: { fn: 'dtlOnStepUp', args: [400, 0.25] } }, 100] },
          { label: { en: 'Equity', it: 'Patrimonio netto' }, cells: [1400, 360, { answer: -380, verify: { fn: 'sum', args: [-360, -20] } }, { answer: 1380, verify: { fn: 'sum', args: [1400, 360, -380] } }] },
          { label: { en: 'Total L + E', it: 'Totale passivo + PN' }, cells: [2250, 650, 220, { answer: 3120, verify: { fn: 'sum', args: [340, 1300, 100, 1380] } }] }
        ],
        explanation: {
          en: 'Cash −300 −20 = −320 → 230. Goodwill: write off 80, add 220 (= 800 − (360 − 80 + 400 − 100)) → +140. DTL = 25% × 400 = 100. Equity: eliminate TargetCo’s 360 and charge the 20 of fees → −380 → 1,380 (= AcquireCo 1,400 − 20). Assets 3,120 = 340 + 1,300 + 100 + 1,380. The adjustments column balances: +220 on both sides.',
          it: 'Cassa −300 −20 = −320 → 230. Avviamento: storno 80, nuovo 220 (= 800 − (360 − 80 + 400 − 100)) → +140. DTL = 25% × 400 = 100. PN: elisione dei 360 di TargetCo e costo delle commissioni 20 → −380 → 1.380 (= AcquireCo 1.400 − 20). Attivo 3.120 = 340 + 1.300 + 100 + 1.380. Anche la colonna rettifiche quadra: +220 su entrambi i lati.'
        }
      },
      {
        id: 'acc-pf-q2',
        kind: 'numeric',
        topic: 'pro-forma',
        difficulty: 3,
        objective: { en: 'Compute pro forma net income without synergies.', it: 'Calcolare l’utile netto pro forma senza sinergie.' },
        prompt: {
          en: 'Same deal, but assume **no synergies**. AcquireCo NI €202.5m, TargetCo NI €60m; new debt €500m at 6%; cash used €300m that earned 2%; PPA D&A €35m; tax 25%. Pro forma net income (€m)?',
          it: 'Stessa operazione, ma **senza sinergie**. Utile AcquireCo €202,5m, utile TargetCo €60m; nuovo debito €500m al 6%; cassa usata €300m che rendeva il 2%; ammortamenti da PPA €35m; aliquota 25%. Utile netto pro forma (€m)?'
        },
        answer: 209.25,
        unit: '€m',
        tolerance: { abs: 0.05 },
        verify: {
          fn: 'accretionDilution',
          args: [{ acquirerNetIncome: 202.5, acquirerShares: 100, targetNetIncome: 60, purchaseEquityValue: 800, pctStock: 0, acquirerSharePrice: 30, costOfDebt: 0.06, pctDebt: 0.625, foregoneInterestOnCash: 0.02, pctCash: 0.375, taxRate: 0.25, synergiesPreTax: 0, newDAPreTax: 35 }],
          pick: 'proFormaNetIncome'
        },
        steps: [
          { en: 'Pre-tax adjustments: −30 interest − 6 foregone interest − 35 D&A = −71', it: 'Rettifiche ante imposte: −30 interessi − 6 interessi persi − 35 ammortamenti = −71' },
          { en: 'After tax: −71 × 0.75 = −53.25', it: 'Al netto delle imposte: −71 × 0,75 = −53,25' },
          { en: '202.5 + 60 − 53.25 = 209.25', it: '202,5 + 60 − 53,25 = 209,25' }
        ],
        explanation: {
          en: '202.5 + 60 − (30 + 6 + 35) × (1 − 25%) = 209.25. PF EPS = 2.0925 vs 2.025 standalone → +3.3% accretive. Forgetting to tax-effect the adjustments (262.5 − 71 = 191.5) is a common error.',
          it: '202,5 + 60 − (30 + 6 + 35) × (1 − 25%) = 209,25. EPS pro forma = 2,0925 vs 2,025 stand-alone → accretive del 3,3%. Dimenticare l’effetto fiscale delle rettifiche (262,5 − 71 = 191,5) è un errore frequente.'
        }
      },
      {
        id: 'acc-pf-q3',
        kind: 'numeric',
        topic: 'pro-forma',
        difficulty: 2,
        objective: { en: 'Present the acquisition in the cash flow statement.', it: 'Esporre l’acquisizione nel rendiconto finanziario.' },
        prompt: {
          en: 'AcquireCo pays €800m in cash for 100% of TargetCo, which holds €50m of cash at closing. Under IAS 7, what is the investing cash outflow for "acquisition of subsidiary, net of cash acquired" (enter as a positive €m)?',
          it: 'AcquireCo paga €800m in contanti per il 100% di TargetCo, che al closing ha €50m di cassa. Secondo lo IAS 7, qual è l’uscita da investimento per "acquisizione di controllata, al netto della cassa acquisita" (inserisci un valore positivo in €m)?'
        },
        answer: 750,
        unit: '€m',
        verify: { fn: 'diff', args: [800, 50] },
        explanation: {
          en: 'IAS 7.42: the aggregate cash paid is reported net of cash and cash equivalents acquired: 800 − 50 = 750. The €500m of new debt is a separate financing inflow; fees are usually operating.',
          it: 'IAS 7.42: il corrispettivo pagato in contanti si espone al netto delle disponibilità liquide acquisite: 800 − 50 = 750. I €500m di nuovo debito sono un’entrata separata da finanziamento; le commissioni sono di norma operative.'
        }
      },
      {
        id: 'acc-pf-q4',
        kind: 'numeric',
        topic: 'pro-forma',
        difficulty: 3,
        objective: { en: 'Compute pro forma EPS including synergies.', it: 'Calcolare l’EPS pro forma incluse le sinergie.' },
        prompt: {
          en: 'Lesson deal with €20m pre-tax synergies (all-cash/debt, no new shares; AcquireCo has 100m shares). Pro forma EPS (€, 4 decimals)?',
          it: 'Operazione della lezione con €20m di sinergie ante imposte (cassa/debito, nessuna nuova azione; AcquireCo ha 100m di azioni). EPS pro forma (€, 4 decimali)?'
        },
        answer: 2.2425,
        unit: '€',
        tolerance: { abs: 0.001 },
        verify: {
          fn: 'accretionDilution',
          args: [{ acquirerNetIncome: 202.5, acquirerShares: 100, targetNetIncome: 60, purchaseEquityValue: 800, pctStock: 0, acquirerSharePrice: 30, costOfDebt: 0.06, pctDebt: 0.625, foregoneInterestOnCash: 0.02, pctCash: 0.375, taxRate: 0.25, synergiesPreTax: 20, newDAPreTax: 35 }],
          pick: 'proFormaEPS'
        },
        explanation: {
          en: 'PF NI = 202.5 + 60 + (20 − 30 − 6 − 35) × 0.75 = 224.25; / 100m shares = €2.2425 vs €2.025 standalone → +10.7% accretive. The share count is unchanged because no stock was issued.',
          it: 'Utile PF = 202,5 + 60 + (20 − 30 − 6 − 35) × 0,75 = 224,25; / 100m azioni = €2,2425 vs €2,025 stand-alone → accretive del 10,7%. Il numero di azioni non cambia perché non sono state emesse nuove azioni.'
        }
      },
      {
        id: 'acc-pf-q5',
        kind: 'mcq',
        topic: 'pro-forma',
        difficulty: 2,
        objective: { en: 'Know how pro forma equity changes in a cash deal.', it: 'Sapere come varia il PN pro forma in un’operazione per cassa.' },
        prompt: {
          en: 'An acquirer with equity of €1,400m buys a target (equity €360m) entirely with cash and new debt, paying €20m of expensed, non-deductible fees. Pro forma equity is:',
          it: 'Un acquirente con PN di €1.400m acquista una target (PN €360m) interamente con cassa e nuovo debito, pagando €20m di commissioni spesate e non deducibili. Il PN pro forma è:'
        },
        choices: [
          { en: '€1,760m', it: '€1.760m' },
          { en: '€1,380m', it: '€1.380m' },
          { en: '€1,400m', it: '€1.400m' },
          { en: '€1,740m', it: '€1.740m' }
        ],
        correct: 1,
        explanation: {
          en: 'Target equity is eliminated; cash/debt funding does not create equity; expensed fees reduce retained earnings: 1,400 − 20 = 1,380. 1,760 adds the target’s equity (wrong); 1,400 ignores the fees.',
          it: 'Il PN della target si elimina; il finanziamento con cassa/debito non crea PN; le commissioni spesate riducono gli utili a nuovo: 1.400 − 20 = 1.380. 1.760 somma il PN della target (errato); 1.400 ignora le commissioni.'
        }
      },
      {
        id: 'acc-pf-q6',
        kind: 'mcq',
        topic: 'pro-forma',
        difficulty: 2,
        objective: { en: 'Distinguish regulatory and banker pro formas.', it: 'Distinguere pro forma regolamentari e dei banker.' },
        prompt: { en: 'Which statement about synergies in pro forma financial information is most accurate?', it: 'Quale affermazione sulle sinergie nelle informazioni pro forma è più corretta?' },
        choices: [
          { en: 'They must always be included in the pro forma income statement of a prospectus', it: 'Vanno sempre incluse nel conto economico pro forma di un prospetto' },
          { en: 'They are prohibited in any analysis', it: 'Sono vietate in qualsiasi analisi' },
          { en: 'Under SEC Article 11 they may only appear as optional management’s adjustments in the notes; banker models show them separately', it: 'Secondo l’Article 11 della SEC possono comparire solo come management’s adjustments facoltativi nelle note; i modelli dei banker le espongono separatamente' },
          { en: 'They are recognised as an intangible asset in the PPA', it: 'Si rilevano come attività immateriale nella PPA' }
        ],
        correct: 2,
        explanation: {
          en: 'Since the 2020 amendments to Regulation S-X Article 11, synergies can be disclosed only as optional management’s adjustments in the notes. Banker merger models include them in a separate line to show accretion with and without synergies. Synergies are never a separately recognised PPA asset — they are part of goodwill.',
          it: 'Dalle modifiche del 2020 all’Article 11 della Regulation S-X, le sinergie possono essere indicate solo come management’s adjustments facoltativi nelle note. I merger model dei banker le includono in una riga separata per mostrare l’accretion con e senza sinergie. Le sinergie non sono mai un’attività separata nella PPA — fanno parte dell’avviamento.'
        }
      }
    ],
    flashcards: [
      { id: 'fc-acc-pf-1', topic: 'pro-forma', front: { en: 'Pro forma equity in an all-cash/debt deal?', it: 'PN pro forma in un’operazione per cassa/debito?' }, back: { en: 'Acquirer equity − expensed transaction fees (after any tax effect). Target equity is eliminated.', it: 'PN dell’acquirente − commissioni spesate (al netto dell’eventuale effetto fiscale). Il PN della target si elimina.' } },
      { id: 'fc-acc-pf-2', topic: 'pro-forma', front: { en: 'Four standard pro forma P&L adjustments?', it: 'Quattro rettifiche standard del CE pro forma?' }, back: { en: 'New interest, foregone interest on cash, PPA D&A, synergies — all tax-effected.', it: 'Nuovi interessi, interessi persi sulla cassa, ammortamenti PPA, sinergie — tutti al netto delle imposte.' } },
      { id: 'fc-acc-pf-3', topic: 'pro-forma', front: { en: 'How is an acquisition shown in the cash flow statement (IAS 7)?', it: 'Come si espone un’acquisizione nel rendiconto (IAS 7)?' }, back: { en: 'Investing outflow: consideration paid in cash, net of cash acquired.', it: 'Uscita da investimento: corrispettivo pagato in contanti al netto della cassa acquisita.' } },
      { id: 'fc-acc-pf-4', topic: 'pro-forma', front: { en: 'EU rules for pro forma information in prospectuses?', it: 'Norme UE sulle informazioni pro forma nei prospetti?' }, back: { en: 'Annex 20 of Commission Delegated Regulation (EU) 2019/980.', it: 'Allegato 20 del Regolamento Delegato (UE) 2019/980 della Commissione.' } }
    ],
    sources: [SRC_IFRS3, SRC_IAS7, SRC_IAS12, { label: 'Commission Delegated Regulation (EU) 2019/980, Annex 20 — EUR-Lex', url: 'https://eur-lex.europa.eu/eli/reg_del/2019/980/oj' }, { label: 'SEC — Amendments to Financial Disclosures about Acquired and Disposed Businesses (Release 33-10786, 2020), Regulation S-X Article 11', url: 'https://www.sec.gov/rules/final/2020/33-10786.pdf' }]
  }
];
