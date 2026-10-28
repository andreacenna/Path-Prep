import type { Lesson } from '../types';

/**
 * Academy 11 — Deal Case Studies. Module C1 (How to Read a Deal).
 * The case library itself lives in src/content/cases.ts; this lesson teaches the framework used there.
 */
export const lessons: Lesson[] = [
  {
    id: 'case-framework',
    academyId: 'cases',
    moduleId: 'C1',
    mode: 'deep',
    minutes: 12,
    difficulty: 2,
    reviewed: '2026-10',
    objective: {
      en: 'Analyse any M&A transaction with a 12-point framework — from buyer and target to accounting and interview takeaways — and present it crisply in an interview.',
      it: 'Analizzare qualsiasi operazione di M&A con uno schema in 12 punti — da acquirente e target fino a contabilità e spunti per i colloqui — e presentarla in modo efficace a un colloquio.'
    },
    screens: [
      {
        type: 'intuition',
        title: { en: 'Every deal tells the same story', it: 'Ogni deal racconta la stessa storia' },
        body: {
          en: 'Headlines say “X buys Y for $20bn”. A banker asks: **why** this target, **why** this price, **how** it is paid, **who** can stop it, and **what happened** next?\n\nA fixed checklist turns a news story into analysis. Use the same 12 points every time and you will never freeze when an interviewer says: “Tell me about a deal you have followed.”',
          it: 'I titoli dicono “X compra Y per $20mld”. Un banker si chiede: **perché** questo target, **perché** questo prezzo, **come** viene pagato, **chi** può bloccarlo e **cosa è successo** dopo?\n\nUna checklist fissa trasforma una notizia in un’analisi. Usa sempre gli stessi 12 punti e non resterai mai bloccato quando l’intervistatore ti chiede: “Mi parli di un deal che ha seguito”.'
        }
      },
      {
        type: 'technical',
        title: { en: 'The 12 points', it: 'I 12 punti' },
        body: {
          en: 'Points 1–4 frame the deal, 5–9 explain it, 10–12 judge it.',
          it: 'I punti 1–4 inquadrano il deal, i punti 5–9 lo spiegano, i punti 10–12 lo giudicano.'
        },
        table: {
          headers: [
            { en: '#', it: '#' },
            { en: 'Point', it: 'Punto' },
            { en: 'Key question', it: 'Domanda chiave' }
          ],
          rows: [
            ['1', { en: 'Buyer', it: 'Acquirente' }, { en: 'Strategic or financial sponsor? Its strategy and currency?', it: 'Strategico o sponsor finanziario? Strategia e “moneta”?' }],
            ['2', { en: 'Target', it: 'Target' }, { en: 'Business, size, listed or private?', it: 'Business, dimensioni, quotato o privato?' }],
            ['3', { en: 'Announcement date', it: 'Data di annuncio' }, { en: 'Market context; signing vs closing', it: 'Contesto di mercato; signing vs closing' }],
            ['4', { en: 'Value', it: 'Valore' }, { en: 'Equity or enterprise value? Per-share price?', it: 'Equity o enterprise value? Prezzo per azione?' }],
            ['5', { en: 'Rationale', it: 'Razionale' }, { en: 'Synergies, growth, defence, tax?', it: 'Sinergie, crescita, difesa, fisco?' }],
            ['6', { en: 'Valuation', it: 'Valutazione' }, { en: 'Premium, multiples, competing bids', it: 'Premio, multipli, offerte concorrenti' }],
            ['7', { en: 'Financing', it: 'Finanziamento' }, { en: 'Cash on hand, debt, new equity?', it: 'Cassa, debito, nuovo equity?' }],
            ['8', { en: 'Structure', it: 'Struttura' }, { en: 'Merger, tender offer, scheme; cash vs stock', it: 'Fusione, OPA, scheme; cash vs azioni' }],
            ['9', { en: 'Regulatory', it: 'Regolamentare' }, { en: 'Antitrust, FDI screening, takeover rules', it: 'Antitrust, controllo FDI, disciplina OPA' }],
            ['10', { en: 'Outcome', it: 'Esito' }, { en: 'Completed, blocked, terminated? Value created?', it: 'Completato, bloccato, risolto? Valore creato?' }],
            ['11', { en: 'Accounting', it: 'Contabilità' }, { en: 'Acquirer, goodwill, PPA, impairment', it: 'Acquirente, avviamento, PPA, impairment' }],
            ['12', { en: 'Interview lessons', it: 'Lezioni per il colloquio' }, { en: 'What does this deal teach?', it: 'Cosa insegna questo deal?' }]
          ]
        }
      },
      {
        type: 'technical',
        title: { en: 'Points that trip candidates up', it: 'I punti su cui i candidati inciampano' },
        body: {
          en: '- **Value basis**: “$26.2bn including net cash” is not the same as equity value. Always say which.\n- **Structure vs financing**: structure is *what* shareholders receive (cash, shares, mix); financing is *where the buyer gets the cash* (balance sheet, bonds, loans, equity).\n- **Regulatory** goes beyond antitrust: foreign-investment screening (CFIUS in the US, Golden Power in Italy), takeover codes and sector regulators can also decide a deal.\n- **Accounting acquirer** follows control (IFRS 3 / ASC 805), not the legal form — reverse acquisitions are common.',
          it: '- **Base del valore**: “$26,2mld inclusa la cassa netta” non coincide con l’equity value. Specificalo sempre.\n- **Struttura vs finanziamento**: la struttura è *cosa* ricevono gli azionisti (contanti, azioni, mix); il finanziamento è *dove il compratore trova la cassa* (bilancio, bond, prestiti, equity).\n- **Regolamentare** non è solo antitrust: controllo sugli investimenti esteri (CFIUS negli USA, Golden Power in Italia), codici OPA e regolatori di settore possono decidere un deal.\n- **Acquirente contabile**: segue il controllo (IFRS 3 / ASC 805), non la forma giuridica — le reverse acquisition sono frequenti.'
        }
      },
      {
        type: 'formula',
        title: { en: 'The numbers behind points 4, 6 and 8', it: 'I numeri dietro i punti 4, 6 e 8' },
        formulas: [
          {
            name: { en: 'Offer premium', it: 'Premio d’offerta' },
            expr: 'Premium = Offer price per share / Undisturbed share price − 1'
          },
          {
            name: { en: 'Equity value to enterprise value', it: 'Da equity value a enterprise value' },
            expr: 'EV = Equity value + Debt − Cash + Preferred + Minority interests'
          },
          {
            name: { en: 'Exchange ratio and ownership (stock deals)', it: 'Rapporto di cambio e quote (deal in azioni)' },
            expr: 'Exchange ratio = Offer price per target share / Acquirer share price;  Target ownership = New shares issued / (Acquirer shares + New shares issued)'
          },
          {
            name: { en: 'Goodwill', it: 'Avviamento' },
            expr: 'Goodwill = Consideration + NCI − Fair value of identifiable net assets'
          }
        ],
        note: {
          en: 'Use the undisturbed price (before leaks or rumours) for premia, and state whether a headline value is equity value or EV.',
          it: 'Per il premio usa il prezzo indisturbato (prima di indiscrezioni o rumor) e specifica se il valore indicato è equity value o EV.'
        }
      },
      {
        type: 'example',
        title: { en: 'Framework applied: Microsoft / LinkedIn (2016)', it: 'Schema applicato: Microsoft / LinkedIn (2016)' },
        body: {
          en: 'A real deal in 12 lines (figures from the companies’ release and Microsoft’s 10-K).',
          it: 'Un deal reale in 12 righe (dati dal comunicato delle società e dal 10-K di Microsoft).'
        },
        table: {
          headers: [
            { en: 'Point', it: 'Punto' },
            { en: 'Microsoft / LinkedIn', it: 'Microsoft / LinkedIn' }
          ],
          rows: [
            [{ en: '1–2 Buyer / Target', it: '1–2 Acquirente / Target' }, { en: 'Microsoft (strategic) / LinkedIn (listed professional network)', it: 'Microsoft (strategico) / LinkedIn (network professionale quotato)' }],
            [{ en: '3 Announced', it: '3 Annuncio' }, { en: '13 June 2016; closed 8 December 2016', it: '13 giugno 2016; closing 8 dicembre 2016' }],
            [{ en: '4 Value', it: '4 Valore' }, { en: '$196/share, ≈$26.2bn incl. LinkedIn net cash', it: '$196/azione, ≈$26,2mld inclusa la cassa netta di LinkedIn' }],
            [{ en: '5 Rationale', it: '5 Razionale' }, { en: 'Link Office 365/Dynamics with the professional graph', it: 'Collegare Office 365/Dynamics al grafo professionale' }],
            [{ en: '6 Valuation', it: '6 Valutazione' }, { en: '49.5% premium to the 10 June close', it: 'Premio del 49,5% sulla chiusura del 10 giugno' }],
            [{ en: '7 Financing', it: '7 Finanziamento' }, { en: 'Primarily new debt', it: 'Principalmente nuovo debito' }],
            [{ en: '8 Structure', it: '8 Struttura' }, { en: 'All-cash merger; LinkedIn kept brand and independence', it: 'Fusione tutta cash; LinkedIn ha mantenuto marchio e autonomia' }],
            [{ en: '9 Regulatory', it: '9 Regolamentare' }, { en: 'EU clearance with 5-year commitments (Windows/Office)', it: 'Ok UE con impegni quinquennali (Windows/Office)' }],
            [{ en: '10 Outcome', it: '10 Esito' }, { en: 'Completed; LinkedIn grew strongly inside Microsoft', it: 'Completato; LinkedIn è cresciuta molto dentro Microsoft' }],
            [{ en: '11 Accounting', it: '11 Contabilità' }, { en: 'Price $27.0bn: goodwill $16.8bn, intangibles $7.9bn', it: 'Prezzo $27,0mld: avviamento $16,8mld, immateriali $7,9mld' }],
            [{ en: '12 Lesson', it: '12 Lezione' }, { en: 'Cash-rich buyers may still borrow; intangible amortisation dilutes GAAP EPS', it: 'Anche chi ha cassa può indebitarsi; l’ammortamento delle immateriali diluisce l’EPS GAAP' }]
          ]
        }
      },
      {
        type: 'realworld',
        title: { en: 'How analysts use this at work', it: 'Come lo usano gli analisti sul lavoro' },
        body: {
          en: 'Analysts build **precedent transaction** tables from exactly these fields: date, buyer, target, EV, multiples, premium and form of consideration, sourced from press releases, merger proxies and offer documents. In a pitch book, a one-page “deal summary” follows the same logic.\n\nRegulatory and outcome fields matter too: a client planning a deal wants to know which comparable deals were blocked, remedied or abandoned — and why.',
          it: 'Gli analisti costruiscono le tabelle di **transazioni comparabili** proprio con questi campi: data, acquirente, target, EV, multipli, premio e forma del corrispettivo, presi da comunicati, documenti di fusione e documenti d’offerta. In un pitch book la “deal summary” di una pagina segue la stessa logica.\n\nAnche esito e aspetti regolamentari contano: un cliente che pianifica un’operazione vuole sapere quali deal comparabili sono stati bloccati, autorizzati con rimedi o abbandonati — e perché.'
        }
      },
      { type: 'exercise', questionId: 'case-fw-q1' },
      { type: 'exercise', questionId: 'case-fw-q2' },
      { type: 'exercise', questionId: 'case-fw-q3' },
      { type: 'exercise', questionId: 'case-fw-q4' },
      {
        type: 'interview',
        question: { en: 'Walk me through a recent M&A deal you found interesting.', it: 'Mi illustri un’operazione di M&A recente che ha trovato interessante.' },
        answer: {
          en: '“Microsoft’s acquisition of Activision Blizzard: announced January 2022 at $95 per share in cash, ≈$68.7bn including net cash, a 45% premium. The rationale was content for Game Pass, mobile and cloud. It was funded from cash. The interesting part was regulatory: the EU cleared it with cloud-licensing remedies, the CMA blocked it, and Microsoft restructured by selling cloud-streaming rights to Ubisoft before closing in October 2023. The takeaway: in global deals the toughest regulator sets the terms, and reverse break fees price that risk.”',
          it: '“L’acquisizione di Activision Blizzard da parte di Microsoft: annunciata a gennaio 2022 a $95 per azione in contanti, ≈$68,7mld inclusa la cassa netta, premio del 45%. Il razionale erano i contenuti per Game Pass, mobile e cloud. Finanziata con cassa. L’aspetto interessante è regolamentare: la UE l’ha autorizzata con rimedi sulle licenze cloud, la CMA l’ha bloccata e Microsoft l’ha ristrutturata cedendo i diritti di cloud streaming a Ubisoft, fino al closing a ottobre 2023. La lezione: nei deal globali è il regolatore più severo a dettare le condizioni, e la reverse break fee prezza quel rischio.”'
        }
      },
      {
        type: 'mistakes',
        items: [
          { en: 'Quoting a headline value without its basis (equity value vs EV, incl./excl. net cash).', it: 'Citare un valore senza la sua base (equity value vs EV, inclusa/esclusa la cassa netta).' },
          { en: 'Confusing structure (what sellers receive) with financing (how the buyer funds it).', it: 'Confondere struttura (cosa ricevono i venditori) e finanziamento (come il compratore si procura i fondi).' },
          { en: 'Ignoring regulators other than antitrust (FDI screening, takeover panels, tax authorities).', it: 'Ignorare regolatori diversi dall’antitrust (controllo FDI, autorità OPA, autorità fiscali).' },
          { en: 'Assuming the legal acquirer is the accounting acquirer.', it: 'Dare per scontato che l’acquirente legale sia anche quello contabile.' },
          { en: 'Reciting facts without a takeaway — always end with what the deal teaches.', it: 'Elencare fatti senza una conclusione — chiudi sempre con ciò che il deal insegna.' }
        ]
      },
      {
        type: 'summary',
        items: [
          { en: 'Frame (buyer, target, date, value) → explain (rationale, valuation, financing, structure, regulatory) → judge (outcome, accounting, lessons).', it: 'Inquadra (acquirente, target, data, valore) → spiega (razionale, valutazione, finanziamento, struttura, regolamentare) → giudica (esito, contabilità, lezioni).' },
          { en: 'Always state the basis of value and the undisturbed price used for premia.', it: 'Indica sempre la base del valore e il prezzo indisturbato usato per il premio.' },
          { en: 'Regulatory risk and accounting consequences are where strong candidates stand out.', it: 'Rischio regolamentare e conseguenze contabili sono i punti in cui i candidati migliori si distinguono.' }
        ]
      }
    ],
    questions: [
      {
        id: 'case-fw-q1',
        kind: 'mcq',
        topic: 'deal-structure',
        difficulty: 1,
        objective: { en: 'Distinguish structure from financing.', it: 'Distinguere struttura e finanziamento.' },
        prompt: { en: 'An acquirer pays target shareholders entirely in cash, raised by issuing new bonds. Which statement is correct?', it: 'Un acquirente paga gli azionisti del target interamente in contanti, raccolti emettendo nuove obbligazioni. Quale affermazione è corretta?' },
        choices: [
          { en: 'It is a stock deal because securities were issued', it: 'È un deal in azioni perché sono stati emessi titoli' },
          { en: 'The structure is all-cash; the financing is debt', it: 'La struttura è tutta cash; il finanziamento è a debito' },
          { en: 'The structure is debt; the financing is cash', it: 'La struttura è a debito; il finanziamento è cash' },
          { en: 'It must be an LBO', it: 'Deve essere un LBO' }
        ],
        correct: 1,
        explanation: { en: 'Target holders receive cash (structure); the acquirer funds that cash with bonds (financing). Bonds sold to investors are not consideration to target holders. Debt-funded strategic deals are not LBOs, which are sponsor-led acquisitions secured on the target’s own cash flows.', it: 'Gli azionisti del target ricevono contanti (struttura); l’acquirente finanzia quei contanti con bond (finanziamento). I bond venduti agli investitori non sono corrispettivo per gli azionisti del target. I deal strategici finanziati a debito non sono LBO, che sono acquisizioni guidate da sponsor finanziari basate sui flussi del target.' }
      },
      {
        id: 'case-fw-q2',
        kind: 'numeric',
        topic: 'offer-premium',
        difficulty: 1,
        objective: { en: 'Compute an offer premium.', it: 'Calcolare un premio d’offerta.' },
        prompt: { en: 'Hypothetical: BuyerCo offers €48.00 per share for TargetCo, whose undisturbed price was €36.00. What is the premium (%, 1 decimal)?', it: 'Ipotesi: BuyerCo offre €48,00 per azione per TargetCo, il cui prezzo indisturbato era €36,00. Qual è il premio (%, 1 decimale)?' },
        answer: 33.3,
        unit: '%',
        tolerance: { abs: 0.1 },
        verify: { fn: 'ratio', args: [1200, 36] },
        steps: [{ en: 'Premium = 48 / 36 − 1 = 0.333 = 33.3%', it: 'Premio = 48 / 36 − 1 = 0,333 = 33,3%' }],
        explanation: { en: '48 / 36 − 1 = 33.3%. Using the offer as denominator (12 / 48 = 25%) is a common error; so is using a price already inflated by bid rumours.', it: '48 / 36 − 1 = 33,3%. Usare l’offerta al denominatore (12 / 48 = 25%) è un errore tipico; così come usare un prezzo già gonfiato da rumor sull’offerta.' }
      },
      {
        id: 'case-fw-q3',
        kind: 'order',
        topic: 'case-framework',
        difficulty: 1,
        objective: { en: 'Recall the order of the deal framework.', it: 'Ricordare l’ordine dello schema di analisi.' },
        prompt: { en: 'Put these framework points in the order used in this course.', it: 'Metti questi punti dello schema nell’ordine usato in questo corso.' },
        items: [
          { en: 'Buyer and target', it: 'Acquirente e target' },
          { en: 'Value', it: 'Valore' },
          { en: 'Rationale', it: 'Razionale' },
          { en: 'Financing', it: 'Finanziamento' },
          { en: 'Regulatory', it: 'Regolamentare' },
          { en: 'Outcome', it: 'Esito' },
          { en: 'Accounting', it: 'Contabilità' },
          { en: 'Interview lessons', it: 'Lezioni per il colloquio' }
        ],
        explanation: { en: 'Frame the deal (who, what value), explain it (why, how paid, who approves), then judge it (what happened, accounting impact, lessons).', it: 'Inquadra il deal (chi, quale valore), spiegalo (perché, come pagato, chi autorizza), poi giudicalo (cosa è successo, impatto contabile, lezioni).' }
      },
      {
        id: 'case-fw-q4',
        kind: 'multi',
        topic: 'merger-control',
        difficulty: 2,
        objective: { en: 'Recognise the different regulatory tracks a deal can face.', it: 'Riconoscere i diversi percorsi regolamentari di un deal.' },
        prompt: { en: 'Which of these are examples of regulatory review (point 9) that have stopped or reshaped real deals? Select all that apply.', it: 'Quali di questi sono esempi di controllo regolamentare (punto 9) che hanno bloccato o modificato deal reali? Seleziona tutte le risposte corrette.' },
        choices: [
          { en: 'European Commission prohibition of GE/Honeywell (2001)', it: 'Divieto della Commissione europea su GE/Honeywell (2001)' },
          { en: 'US presidential order on CFIUS grounds blocking Broadcom/Qualcomm (2018)', it: 'Ordine presidenziale USA su base CFIUS che bloccò Broadcom/Qualcomm (2018)' },
          { en: 'US Treasury anti-inversion rules leading to termination of Pfizer/Allergan (2016)', it: 'Regole anti-inversione del Tesoro USA che portarono alla risoluzione di Pfizer/Allergan (2016)' },
          { en: 'A rating agency downgrade of the acquirer', it: 'Il downgrade dell’acquirente da parte di un’agenzia di rating' }
        ],
        correct: [0, 1, 2],
        explanation: { en: 'Antitrust (EC), national-security screening (CFIUS) and tax rules (Treasury) are all public-authority constraints. A rating downgrade affects financing cost but is not a regulatory approval.', it: 'Antitrust (CE), controllo per la sicurezza nazionale (CFIUS) e regole fiscali (Tesoro) sono vincoli posti da autorità pubbliche. Un downgrade incide sul costo del finanziamento ma non è un’autorizzazione regolamentare.' }
      },
      {
        id: 'case-fw-q5',
        kind: 'numeric',
        topic: 'enterprise-value',
        difficulty: 2,
        objective: { en: 'Bridge equity value to enterprise value.', it: 'Passare da equity value a enterprise value.' },
        prompt: { en: 'Hypothetical: a deal values TargetCo’s equity at €8,000m. TargetCo has €2,500m of debt and €700m of cash. What is the implied enterprise value (€m)?', it: 'Ipotesi: un deal valuta l’equity di TargetCo €8.000m. TargetCo ha €2.500m di debito e €700m di cassa. Qual è l’enterprise value implicito (€m)?' },
        answer: 9800,
        unit: '€m',
        verify: { fn: 'sum', args: [8000, 2500, -700] },
        explanation: { en: 'EV = 8,000 + 2,500 − 700 = €9,800m. Headline “deal values” may be either figure — e.g. Disney/Fox was ≈$71.3bn equity value but ≈$85.1bn transaction value.', it: 'EV = 8.000 + 2.500 − 700 = €9.800m. I “valori del deal” possono essere l’una o l’altra cifra — es. Disney/Fox valeva ≈$71,3mld di equity value ma ≈$85,1mld di transaction value.' }
      }
    ],
    flashcards: [
      {
        id: 'fc-case-fw-1',
        topic: 'case-framework',
        front: { en: 'List the 12 points of the deal framework.', it: 'Elenca i 12 punti dello schema di analisi.' },
        back: { en: 'Buyer, target, announcement date, value, rationale, valuation, financing, structure, regulatory, outcome, accounting, interview lessons.', it: 'Acquirente, target, data di annuncio, valore, razionale, valutazione, finanziamento, struttura, regolamentare, esito, contabilità, lezioni per il colloquio.' }
      },
      {
        id: 'fc-case-fw-2',
        topic: 'deal-structure',
        front: { en: 'Structure vs financing?', it: 'Struttura vs finanziamento?' },
        back: { en: 'Structure = what target holders receive (cash, shares, mix) and the legal route; financing = how the buyer funds it (cash, debt, equity).', it: 'Struttura = cosa ricevono gli azionisti del target (contanti, azioni, mix) e il percorso giuridico; finanziamento = come il compratore si procura i fondi (cassa, debito, equity).' }
      },
      {
        id: 'fc-case-fw-3',
        topic: 'offer-premium',
        front: { en: 'Offer premium formula?', it: 'Formula del premio d’offerta?' },
        back: { en: 'Offer price / undisturbed price − 1.', it: 'Prezzo d’offerta / prezzo indisturbato − 1.' }
      },
      {
        id: 'fc-case-fw-4',
        topic: 'purchase-accounting',
        front: { en: 'How is the accounting acquirer identified?', it: 'Come si identifica l’acquirente contabile?' },
        back: { en: 'The entity that obtains control (IFRS 3 / ASC 805): relative voting rights, board and senior management, relative size, who issues shares — not legal form.', it: 'L’entità che ottiene il controllo (IFRS 3 / ASC 805): diritti di voto relativi, CdA e top management, dimensioni relative, chi emette le azioni — non la forma giuridica.' }
      },
      {
        id: 'fc-case-fw-5',
        topic: 'merger-control',
        front: { en: 'Name three types of regulatory review beyond antitrust.', it: 'Indica tre tipi di controllo regolamentare oltre l’antitrust.' },
        back: { en: 'Foreign-investment screening (CFIUS, Italy’s Golden Power), takeover rules (UK Takeover Code, Italian TUF), sector/tax regulators (e.g. US anti-inversion rules).', it: 'Controllo sugli investimenti esteri (CFIUS, Golden Power italiano), disciplina OPA (UK Takeover Code, TUF italiano), regolatori di settore/fiscali (es. regole USA anti-inversione).' }
      }
    ],
    sources: [
      { label: 'IFRS Foundation — IFRS 3 Business Combinations (identifying the acquirer)', url: 'https://www.ifrs.org/issued-standards/list-of-standards/ifrs-3-business-combinations/' },
      { label: 'Microsoft/LinkedIn joint press release, 13 Jun 2016 (SEC Form 8-K exhibit 99.2)', url: 'https://www.sec.gov/Archives/edgar/data/0000789019/000119312516619689/d116815dex992.htm' },
      { label: 'Microsoft Form 10-K FY2017 — LinkedIn purchase price allocation', url: 'https://www.sec.gov/Archives/edgar/data/0000789019/000156459017014900/msft-10k_20170630.htm' }
    ]
  }
];
