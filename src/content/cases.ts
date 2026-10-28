import type { CaseStudy } from './types';

/**
 * Deal case studies (Academy 11 — "Deal Case Studies & Financial History").
 *
 * Every date, value, price per share, financing detail and outcome below was checked in October 2026
 * against company releases / SEC filings, competition-authority decisions and reputable financial press
 * (see `sources` on each case). Where sources disagreed or a detail could not be verified, it is stated
 * generally or omitted. Numerical Deal Challenge questions that use hypothetical inputs say so explicitly.
 */
export const cases: CaseStudy[] = [
  /* ------------------------------------------------------------------ */
  {
    id: 'msft-activision',
    title: { en: 'Microsoft / Activision Blizzard', it: 'Microsoft / Activision Blizzard' },
    buyer: 'Microsoft',
    target: 'Activision Blizzard',
    sector: 'technology',
    tags: ['regulatory', 'cash-deal', 'us', 'cross-border'],
    announced: '2022-01-18',
    closedOrEnded: '2023-10-13',
    status: 'completed',
    value: {
      en: '≈$68.7bn all-cash at announcement, $95.00 per share (value inclusive of Activision’s net cash, per Microsoft’s release); Microsoft later reported a total purchase price of $75.4bn at closing.',
      it: '≈$68,7mld interamente in contanti all’annuncio, $95,00 per azione (valore comprensivo della cassa netta di Activision, secondo il comunicato Microsoft); al closing Microsoft ha poi contabilizzato un prezzo complessivo di $75,4mld.'
    },
    rationale: {
      en: 'Content and scale in gaming: Call of Duty, World of Warcraft, King’s Candy Crush (mobile) and a large monthly-active-user base to feed Xbox Game Pass, PC and cloud gaming. Microsoft presented it as a building block for the “metaverse” and for mobile gaming, where it was sub-scale.',
      it: 'Contenuti e scala nel gaming: Call of Duty, World of Warcraft, Candy Crush di King (mobile) e un’ampia base di utenti attivi per alimentare Xbox Game Pass, PC e cloud gaming. Microsoft lo presentò come tassello per il “metaverso” e per il gaming su mobile, dove era sottodimensionata.'
    },
    valuation: {
      en: '$95.00 per share = a 45% premium to Activision’s closing price on Friday 14 January 2022. Activision’s shares traded well below $95 after announcement (a wide merger-arbitrage spread), signalling that the market priced significant regulatory risk.',
      it: '$95,00 per azione = premio del 45% sul prezzo di chiusura di Activision di venerdì 14 gennaio 2022. Dopo l’annuncio il titolo restò ben sotto $95 (ampio spread di merger arbitrage): il mercato prezzava un rischio regolamentare significativo.'
    },
    financing: {
      en: 'Paid in cash from Microsoft’s balance sheet — no financing condition and no new equity. The merger agreement contained a reverse termination fee payable by Microsoft if the deal failed; when the parties extended the outside date in July 2023 the fee rose to $4.5bn.',
      it: 'Pagato in contanti con la liquidità di bilancio di Microsoft — nessuna condizione di finanziamento né nuovo equity. L’accordo prevedeva una reverse termination fee a carico di Microsoft in caso di mancato closing; con la proroga del termine ultimo a luglio 2023 la fee salì a $4,5mld.'
    },
    structure: {
      en: 'Reverse triangular merger: a Microsoft subsidiary merged into Activision, which survived as a wholly-owned subsidiary. Activision shareholders received cash and the shares were delisted.',
      it: 'Reverse triangular merger: una controllata di Microsoft si è fusa in Activision, sopravvissuta come controllata al 100%. Gli azionisti Activision hanno ricevuto contanti e il titolo è stato revocato dalla quotazione.'
    },
    regulatory: {
      en: '- **FTC (US)** sued to block it (Dec 2022). A federal judge denied the FTC’s preliminary injunction in July 2023; the Ninth Circuit affirmed in May 2025 and the FTC dismissed its case on 22 May 2025.\n- **European Commission** cleared it on 15 May 2023 with behavioural remedies: a free 10-year licence letting EEA consumers stream Activision games they own via any cloud service.\n- **CMA (UK)** blocked it on 26 April 2023 over cloud gaming. Microsoft restructured the deal: it sold the cloud-streaming rights to Activision games (outside the EEA) for 15 years to Ubisoft, and the CMA cleared the new deal on 13 October 2023.',
      it: '- **FTC (USA)** ha fatto causa per bloccarla (dic 2022). A luglio 2023 un giudice federale ha respinto la richiesta di ingiunzione preliminare; il Nono Circuito ha confermato a maggio 2025 e la FTC ha archiviato il caso il 22 maggio 2025.\n- **Commissione europea**: autorizzazione il 15 maggio 2023 con rimedi comportamentali — licenza gratuita di 10 anni che consente ai consumatori SEE di giocare in streaming, su qualsiasi servizio cloud, i giochi Activision acquistati.\n- **CMA (UK)**: divieto il 26 aprile 2023 per il cloud gaming. Microsoft ha ristrutturato l’operazione cedendo a Ubisoft per 15 anni i diritti di cloud streaming dei giochi Activision (fuori dal SEE); la CMA ha autorizzato la nuova operazione il 13 ottobre 2023.'
    },
    outcome: {
      en: 'Closed on 13 October 2023, days before the extended outside date of 18 October. The US litigation continued after closing until the FTC dropped it in 2025.',
      it: 'Closing il 13 ottobre 2023, pochi giorni prima del termine prorogato del 18 ottobre. Il contenzioso negli USA è proseguito dopo il closing fino alla rinuncia della FTC nel 2025.'
    },
    accounting: {
      en: 'Acquisition method (US GAAP, ASC 805). Microsoft’s final purchase price allocation (FY2025 10-K): total $75.4bn, of which goodwill ≈$51.0bn and intangible assets ≈$22.0bn; goodwill assigned to the More Personal Computing segment. Intangibles are amortised; goodwill is tested annually for impairment.',
      it: 'Metodo dell’acquisizione (US GAAP, ASC 805). PPA definitiva di Microsoft (10-K FY2025): totale $75,4mld, di cui avviamento ≈$51,0mld e attività immateriali ≈$22,0mld; avviamento allocato al segmento More Personal Computing. Le immateriali si ammortizzano; l’avviamento è soggetto a impairment test annuale.'
    },
    interviewLessons: [
      { en: 'Global deals need every key regulator: a block by one (the CMA) can force a restructuring even after others clear it.', it: 'Le operazioni globali richiedono il via libera di tutti i regolatori chiave: il veto di uno solo (la CMA) può imporre una ristrutturazione anche dopo l’ok degli altri.' },
      { en: 'Behavioural remedies (licences) vs structural remedies (divestitures): the CMA accepted a structural sale of cloud rights to Ubisoft, not mere promises.', it: 'Rimedi comportamentali (licenze) vs strutturali (cessioni): la CMA ha accettato la cessione strutturale dei diritti cloud a Ubisoft, non semplici impegni.' },
      { en: 'A wide merger-arbitrage spread is the market’s estimate of deal-break risk; reverse termination fees allocate that risk to the buyer.', it: 'Un ampio spread di merger arbitrage è la stima di mercato del rischio di mancato closing; la reverse termination fee alloca quel rischio al compratore.' }
    ],
    questions: [
      {
        id: 'case-msft-activision-q1',
        kind: 'numeric',
        topic: 'offer-premium',
        difficulty: 2,
        objective: { en: 'Back-solve the undisturbed share price from an offer price and premium.', it: 'Ricavare il prezzo indisturbato dell’azione da prezzo offerto e premio.' },
        prompt: { en: 'Microsoft offered $95.00 per share, described as a 45% premium to the last undisturbed close. What undisturbed price does that imply ($, 2 decimals)?', it: 'Microsoft ha offerto $95,00 per azione, pari a un premio del 45% sull’ultima chiusura indisturbata. Quale prezzo indisturbato implica ($, 2 decimali)?' },
        answer: 65.52,
        unit: '$',
        tolerance: { abs: 0.05 },
        verify: { fn: 'ratio', args: [95, 1.45] },
        steps: [{ en: 'Undisturbed = Offer ÷ (1 + premium) = 95 ÷ 1.45 = 65.52', it: 'Prezzo indisturbato = Offerta ÷ (1 + premio) = 95 ÷ 1,45 = 65,52' }],
        explanation: { en: 'Premium = Offer / Undisturbed − 1, so Undisturbed = 95 / 1.45 ≈ $65.52. Dividing 95 by 0.45 or subtracting 45% of 95 (= 52.25) are common errors: the premium is measured on the undisturbed price, not on the offer.', it: 'Premio = Offerta / Prezzo indisturbato − 1, quindi Prezzo indisturbato = 95 / 1,45 ≈ $65,52. Errori tipici: dividere 95 per 0,45 o sottrarre il 45% di 95 (= 52,25): il premio si misura sul prezzo indisturbato, non sull’offerta.' }
      },
      {
        id: 'case-msft-activision-q2',
        kind: 'mcq',
        topic: 'merger-control',
        difficulty: 2,
        objective: { en: 'Explain how the CMA’s concern was resolved.', it: 'Spiegare come è stata risolta la preoccupazione della CMA.' },
        prompt: { en: 'The CMA blocked the original deal in April 2023. What allowed it to clear the restructured deal in October 2023?', it: 'La CMA ha vietato l’operazione originaria ad aprile 2023. Cosa le ha permesso di autorizzare l’operazione ristrutturata a ottobre 2023?' },
        choices: [
          { en: 'Microsoft agreed to keep Call of Duty on PlayStation for 10 years', it: 'Microsoft si è impegnata a mantenere Call of Duty su PlayStation per 10 anni' },
          { en: 'The FTC lost in court, which bound the CMA', it: 'La FTC ha perso in tribunale, decisione vincolante per la CMA' },
          { en: 'Microsoft sold the cloud-streaming rights to Activision games (outside the EEA) to Ubisoft for 15 years', it: 'Microsoft ha ceduto a Ubisoft per 15 anni i diritti di cloud streaming dei giochi Activision (fuori dal SEE)' },
          { en: 'Microsoft reduced the price to remove the “dominance” premium', it: 'Microsoft ha ridotto il prezzo per eliminare il premio di “dominanza”' }
        ],
        correct: 2,
        explanation: { en: 'The CMA’s theory of harm was cloud gaming. A divestiture of the cloud rights to an independent player (Ubisoft) is a structural fix that removes Microsoft’s ability to control that market. Console commitments addressed a different concern; US court outcomes do not bind the UK regulator; price is irrelevant to competition analysis.', it: 'La teoria del danno della CMA riguardava il cloud gaming. Cedere i diritti cloud a un operatore indipendente (Ubisoft) è un rimedio strutturale che toglie a Microsoft la capacità di controllare quel mercato. Gli impegni sulle console riguardavano un’altra preoccupazione; le sentenze USA non vincolano il regolatore UK; il prezzo è irrilevante per l’analisi antitrust.' }
      },
      {
        id: 'case-msft-activision-q3',
        kind: 'numeric',
        topic: 'purchase-price-allocation',
        difficulty: 2,
        objective: { en: 'Interpret a purchase price allocation.', it: 'Interpretare una purchase price allocation.' },
        prompt: { en: 'Microsoft allocated $51,001m of the $75,408m purchase price to goodwill. What percentage of the price is goodwill (%, 1 decimal)?', it: 'Microsoft ha allocato ad avviamento $51.001m dei $75.408m di prezzo. Quale percentuale del prezzo è avviamento (%, 1 decimale)?' },
        answer: 67.6,
        unit: '%',
        tolerance: { abs: 0.1 },
        verify: { fn: 'ratio', args: [5100100, 75408] },
        explanation: { en: '51,001 / 75,408 = 67.6%. Two-thirds of the price is not attributable to separately identifiable assets — it pays for synergies, the assembled workforce and growth expectations, and it is exposed to future impairment tests.', it: '51.001 / 75.408 = 67,6%. Due terzi del prezzo non sono attribuibili ad attività identificabili separatamente: remunerano sinergie, forza lavoro e aspettative di crescita, e sono esposti a futuri impairment test.' }
      }
    ],
    sources: [
      { label: 'Microsoft press release, 18 Jan 2022 (via Investing.com/Reuters coverage: $95/share, $68.7bn incl. net cash, 45% premium)', url: 'https://uk.investing.com/news/stock-market-news/microsoft-to-acquire-activision-blizzard-in-687-billion-deal-2564186' },
      { label: 'Burges Salmon — CMA approves Microsoft’s acquisition of Activision (restructured deal, Ubisoft cloud rights)', url: 'https://www.burges-salmon.com/articles/102isgt/cma-approves-microsofts-acquisition-of-activision-after-lengthy-saga' },
      { label: 'European Commission clearance, 15 May 2023 (SCL summary)', url: 'https://www.scl.org/12892-european-commission-clears-acquisition-of-activision-blizzard-by-microsoft/' },
      { label: 'FTC — Commission order dismissing complaint, 22 May 2025', url: 'https://www.ftc.gov/system/files/ftc_gov/pdf/d9412_2025.05.22_commission_order_dismissing_complaint_.pdf' },
      { label: 'Microsoft Form 10-K FY2025 — Activision Blizzard purchase price allocation', url: 'https://www.sec.gov/Archives/edgar/data/789019/000095017025100235/msft-20250630.htm' }
    ],
    reviewed: '2026-10'
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'msft-linkedin',
    title: { en: 'Microsoft / LinkedIn', it: 'Microsoft / LinkedIn' },
    buyer: 'Microsoft',
    target: 'LinkedIn',
    sector: 'technology',
    tags: ['cash-deal', 'us'],
    announced: '2016-06-13',
    closedOrEnded: '2016-12-08',
    status: 'completed',
    value: {
      en: '≈$26.2bn all-cash, $196 per share (value inclusive of LinkedIn’s net cash, per the joint release); total purchase price recorded by Microsoft $27.0bn.',
      it: '≈$26,2mld interamente in contanti, $196 per azione (valore comprensivo della cassa netta di LinkedIn, secondo il comunicato congiunto); prezzo complessivo contabilizzato da Microsoft $27,0mld.'
    },
    rationale: {
      en: 'Connect the professional cloud (Office 365, Dynamics) with the world’s largest professional network: LinkedIn data and identity inside Outlook, Office and CRM; growth in recruiting, learning and sales tools. LinkedIn kept its brand and operated independently under its CEO.',
      it: 'Collegare il cloud professionale (Office 365, Dynamics) al più grande network professionale al mondo: dati e identità LinkedIn dentro Outlook, Office e CRM; crescita in recruiting, formazione e strumenti di vendita. LinkedIn ha mantenuto marchio e autonomia operativa sotto il proprio CEO.'
    },
    valuation: {
      en: '$196 per share was a 49.5% premium to LinkedIn’s 10 June 2016 close. LinkedIn had little GAAP profit, so the deal was framed on revenue and adjusted-EBITDA multiples and on strategic value to Microsoft rather than on P/E.',
      it: '$196 per azione = premio del 49,5% sulla chiusura di LinkedIn del 10 giugno 2016. LinkedIn aveva utili GAAP minimi: la valutazione si basava su multipli di ricavi ed EBITDA rettificato e sul valore strategico per Microsoft, non sul P/E.'
    },
    financing: {
      en: 'Microsoft said it would finance the deal primarily through the issuance of new indebtedness — even though it held large cash balances, much of that cash was then held offshore, so borrowing in the US was cheaper than repatriating cash under the pre-2018 US tax regime.',
      it: 'Microsoft annunciò di finanziare l’operazione principalmente con nuovo debito: pur avendo molta liquidità, gran parte era detenuta all’estero e, con il regime fiscale USA ante 2018, indebitarsi negli USA costava meno che rimpatriarla.'
    },
    structure: {
      en: 'Cash merger: LinkedIn became a wholly-owned subsidiary of Microsoft (8-K, 8 December 2016). Approval by LinkedIn shareholders was required; Reid Hoffman, the controlling shareholder via high-vote Class B shares, supported the deal.',
      it: 'Fusione per contanti: LinkedIn è diventata controllata al 100% di Microsoft (8-K, 8 dicembre 2016). Serviva l’approvazione degli azionisti LinkedIn; Reid Hoffman, azionista di controllo tramite azioni di Classe B a voto plurimo, sostenne l’operazione.'
    },
    regulatory: {
      en: 'US clearance; the **European Commission** approved on 6 December 2016 subject to five-year commitments: PC makers free not to pre-install LinkedIn on Windows, users able to remove it, and rival professional social networks keeping interoperability with Office.',
      it: 'Autorizzazione negli USA; la **Commissione europea** ha approvato il 6 dicembre 2016 con impegni quinquennali: OEM liberi di non preinstallare LinkedIn su Windows, utenti liberi di rimuoverlo e social network professionali concorrenti con interoperabilità con Office garantita.'
    },
    outcome: {
      en: 'Closed 8 December 2016. LinkedIn has since grown into a multi-billion-dollar revenue business within Microsoft’s Productivity and Business Processes segment; the deal is generally cited as one of Microsoft’s more successful large acquisitions.',
      it: 'Closing l’8 dicembre 2016. LinkedIn è poi cresciuta fino a generare ricavi per diversi miliardi di dollari nel segmento Productivity and Business Processes di Microsoft; l’operazione è considerata tra le acquisizioni più riuscite di Microsoft.'
    },
    accounting: {
      en: 'Purchase price allocation (Microsoft FY2017/FY2018 10-K): total $27.0bn; goodwill $16.8bn (not tax-deductible); intangibles $7.9bn (customer-related $3.6bn, trade names $2.1bn, technology $2.1bn) amortised over a weighted-average life of 9 years — a recurring drag on GAAP EPS that Microsoft discussed separately.',
      it: 'PPA (10-K Microsoft FY2017/FY2018): totale $27,0mld; avviamento $16,8mld (non deducibile fiscalmente); immateriali $7,9mld (clientela $3,6mld, marchi $2,1mld, tecnologia $2,1mld) ammortizzate su una vita media ponderata di 9 anni — un peso ricorrente sull’EPS GAAP.'
    },
    interviewLessons: [
      { en: 'Cash-rich acquirers may still fund with debt: tax, location of cash and cost of debt all matter.', it: 'Anche chi ha molta liquidità può finanziarsi a debito: contano fiscalità, localizzazione della cassa e costo del debito.' },
      { en: 'Amortisation of acquired intangibles reduces GAAP EPS even when the deal creates value — know why banks show “cash EPS” or adjusted EPS.', it: 'L’ammortamento delle immateriali acquisite riduce l’EPS GAAP anche quando l’operazione crea valore: sapere perché si mostra un EPS “cash” o rettificato.' },
      { en: 'Conglomerate concerns (tying/pre-installation) can be solved with behavioural commitments when there is no horizontal overlap.', it: 'Le preoccupazioni conglomerali (tying/preinstallazione) si risolvono con impegni comportamentali quando non c’è sovrapposizione orizzontale.' }
    ],
    questions: [
      {
        id: 'case-msft-linkedin-q1',
        kind: 'numeric',
        topic: 'purchase-price-allocation',
        difficulty: 2,
        objective: { en: 'Read a purchase price allocation.', it: 'Leggere una purchase price allocation.' },
        prompt: { en: 'Microsoft recorded goodwill of $16,803m on a total purchase price of $27,009m for LinkedIn. Goodwill as % of price (1 decimal)?', it: 'Microsoft ha registrato avviamento per $16.803m su un prezzo totale di $27.009m per LinkedIn. Avviamento in % del prezzo (1 decimale)?' },
        answer: 62.2,
        unit: '%',
        tolerance: { abs: 0.1 },
        verify: { fn: 'ratio', args: [1680300, 27009] },
        explanation: { en: '16,803 / 27,009 = 62.2%. The remainder is identified intangibles ($7.9bn) and net other assets. High goodwill is typical for asset-light tech targets whose value lies in network effects and growth.', it: '16.803 / 27.009 = 62,2%. Il resto sono immateriali identificate ($7,9mld) e altre attività nette. Un avviamento elevato è tipico dei target tech asset-light, il cui valore sta negli effetti di rete e nella crescita.' }
      },
      {
        id: 'case-msft-linkedin-q2',
        kind: 'mcq',
        topic: 'acquisition-financing',
        difficulty: 2,
        objective: { en: 'Explain the financing choice.', it: 'Spiegare la scelta di finanziamento.' },
        prompt: { en: 'Why did Microsoft, with a very large cash balance, fund LinkedIn primarily with new debt in 2016?', it: 'Perché Microsoft, con un’enorme liquidità, finanziò LinkedIn nel 2016 principalmente con nuovo debito?' },
        choices: [
          { en: 'Using cash would have triggered a change-of-control clause', it: 'Usare la cassa avrebbe attivato una clausola di change of control' },
          { en: 'Much of its cash was held offshore; repatriating it would have triggered US tax, while US borrowing was cheap', it: 'Gran parte della cassa era all’estero; rimpatriarla avrebbe generato imposte USA, mentre il debito negli USA costava poco' },
          { en: 'Debt-funded deals are always accretive regardless of target earnings', it: 'Le operazioni a debito sono sempre accretive indipendentemente dagli utili del target' },
          { en: 'LinkedIn’s shareholders demanded debt securities', it: 'Gli azionisti LinkedIn chiedevano titoli di debito' }
        ],
        correct: 1,
        explanation: { en: 'Before the 2017 US tax reform, repatriating offshore earnings carried a tax cost, so large US tech firms borrowed domestically at low rates. Accretion is not automatic (it depends on after-tax cost of debt vs target earnings yield); LinkedIn holders received cash, not debt.', it: 'Prima della riforma fiscale USA del 2017 rimpatriare utili esteri comportava un costo fiscale, quindi i grandi gruppi tech si indebitavano negli USA a tassi bassi. L’accrescimento non è automatico (dipende dal costo del debito netto d’imposta vs earnings yield del target); gli azionisti LinkedIn hanno ricevuto contanti, non debito.' }
      }
    ],
    sources: [
      { label: 'Microsoft/LinkedIn joint press release, 13 Jun 2016 (SEC Form 8-K exhibit 99.2)', url: 'https://www.sec.gov/Archives/edgar/data/0000789019/000119312516619689/d116815dex992.htm' },
      { label: 'Microsoft Form 10-K FY2017 — LinkedIn purchase price allocation', url: 'https://www.sec.gov/Archives/edgar/data/0000789019/000156459017014900/msft-10k_20170630.htm' },
      { label: 'European Commission conditional clearance, 6 Dec 2016 (press release reproduced by Wired-Gov)', url: 'https://www.wired-gov.net/wg/news.nsf/print/Mergers+Commission+approves+acquisition+of+LinkedIn+by+Microsoft+subject+to+conditions+07122016142000' }
    ],
    reviewed: '2026-10'
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'disney-fox',
    title: { en: 'Disney / 21st Century Fox', it: 'Disney / 21st Century Fox' },
    buyer: 'The Walt Disney Company',
    target: '21st Century Fox (entertainment assets)',
    sector: 'media',
    tags: ['us', 'stock-deal', 'cash-deal', 'regulatory'],
    announced: '2017-12-14',
    closedOrEnded: '2019-03-20',
    status: 'completed',
    value: {
      en: 'Final terms (20 Jun 2018): $38 per Fox share in cash and stock (≈50/50), implied equity value ≈$71.3bn and transaction value ≈$85.1bn. Original Dec 2017 terms: all-stock, 0.2745 Disney shares per Fox share, equity value ≈$52.4bn.',
      it: 'Condizioni finali (20 giu 2018): $38 per azione Fox in contanti e azioni (≈50/50), equity value implicito ≈$71,3mld e transaction value ≈$85,1mld. Condizioni originarie (dic 2017): solo azioni, 0,2745 azioni Disney per azione Fox, equity value ≈$52,4mld.'
    },
    rationale: {
      en: 'Content library and IP (20th Century Fox film/TV studios, FX, National Geographic), a controlling stake in Hulu and international distribution (Star India) to power Disney’s direct-to-consumer strategy (Disney+). Fox’s news, broadcast network and sports channels were spun off to shareholders as the new Fox Corporation.',
      it: 'Library di contenuti e IP (studi cinematografici/TV 20th Century Fox, FX, National Geographic), il controllo di Hulu e la distribuzione internazionale (Star India) per alimentare la strategia direct-to-consumer di Disney (Disney+). News, rete broadcast e canali sportivi di Fox sono stati scorporati agli azionisti nella nuova Fox Corporation.'
    },
    valuation: {
      en: 'A bidding war set the price: Comcast made a ≈$65bn all-cash counter-offer on 13 June 2018; a week later Disney raised to $38 per share (+~36% in equity value vs its original deal). Comcast withdrew on 19 July 2018 to focus on Sky. The amended deal included a collar: Fox holders received $38 of value if Disney’s average price was between $93.53 and $114.32.',
      it: 'Il prezzo è stato fissato da un’asta: il 13 giugno 2018 Comcast presentò una controfferta di ≈$65mld interamente in contanti; una settimana dopo Disney salì a $38 per azione (+~36% di equity value rispetto all’accordo iniziale). Comcast si ritirò il 19 luglio 2018 per concentrarsi su Sky. Il nuovo accordo prevedeva un collar: $38 di valore se il prezzo medio Disney era tra $93,53 e $114,32.'
    },
    financing: {
      en: 'The cash half was funded with new borrowing (bank bridge financing later refinanced in the bond market); the stock half with newly issued Disney shares. Fox shareholders could elect cash or stock, subject to proration to keep the overall 50/50 mix.',
      it: 'La metà in contanti è stata finanziata con nuovo debito (bridge bancario poi rifinanziato sul mercato obbligazionario); la metà in azioni con nuove azioni Disney. Gli azionisti Fox potevano scegliere contanti o azioni, con riparto (proration) per mantenere il mix complessivo 50/50.'
    },
    structure: {
      en: 'Two steps: (1) Fox separated the assets Disney did not buy into Fox Corporation and distributed it to shareholders (completed 19 March 2019); (2) Disney acquired the remaining 21st Century Fox the next day. A new Disney holding company was used so both companies became its subsidiaries.',
      it: 'Due fasi: (1) Fox ha scorporato gli asset non acquistati da Disney in Fox Corporation, assegnata agli azionisti (completato il 19 marzo 2019); (2) il giorno dopo Disney ha acquisito la restante 21st Century Fox. È stata usata una nuova holding Disney di cui entrambe le società sono diventate controllate.'
    },
    regulatory: {
      en: 'The **US DOJ** cleared the deal on condition that Disney divest Fox’s 22 regional sports networks (overlap with ESPN). Other jurisdictions (including the EU) also cleared it, some with conditions.',
      it: 'Il **DOJ statunitense** ha autorizzato l’operazione a condizione che Disney cedesse le 22 reti sportive regionali di Fox (sovrapposizione con ESPN). Anche altre giurisdizioni (UE inclusa) hanno autorizzato, in alcuni casi con condizioni.'
    },
    outcome: {
      en: 'Completed 20 March 2019. Comcast won the separate auction for Sky in 2018. The Fox assets underpinned Disney+ and Hulu, but in fiscal 2020 Disney fully impaired the goodwill of its International Channels unit ($3.1bn, mostly ex-Fox operations) plus $1.9bn of related intangibles, citing COVID-19 and the shift to direct-to-consumer.',
      it: 'Completata il 20 marzo 2019. Comcast vinse nel 2018 l’asta separata per Sky. Gli asset Fox hanno sostenuto Disney+ e Hulu, ma nell’esercizio 2020 Disney ha svalutato integralmente l’avviamento della unit International Channels ($3,1mld, in gran parte attività ex Fox) più $1,9mld di immateriali collegate, citando il COVID-19 e lo spostamento verso il direct-to-consumer.'
    },
    accounting: {
      en: 'Acquisition method (US GAAP): Fox’s identifiable assets and liabilities at fair value, the excess as goodwill; Hulu moved from equity-method investment to a consolidated subsidiary (control obtained), requiring remeasurement of Disney’s previously held interest to fair value with a gain in P&L.',
      it: 'Metodo dell’acquisizione (US GAAP): attività e passività identificabili di Fox al fair value, l’eccedenza ad avviamento; Hulu è passata da partecipazione valutata al patrimonio netto a controllata consolidata (acquisizione del controllo), con rimisurazione al fair value della quota già detenuta da Disney e plusvalenza a conto economico.'
    },
    interviewLessons: [
      { en: 'In a contested auction, the cash/stock mix and certainty matter as much as headline price: Disney added cash to compete with Comcast’s all-cash bid.', it: 'In un’asta contesa contano mix contanti/azioni e certezza quanto il prezzo: Disney aggiunse contanti per competere con l’offerta tutta cash di Comcast.' },
      { en: 'Collars protect the target from acquirer share-price moves in stock deals.', it: 'Nei deal in azioni il collar protegge il target dalle oscillazioni del titolo dell’acquirente.' },
      { en: 'Spin-offs can carve out assets a buyer cannot or will not own (here, news and broadcast).', it: 'Gli spin-off permettono di separare asset che il compratore non può o non vuole detenere (qui news e broadcast).' }
    ],
    questions: [
      {
        id: 'case-disney-fox-q1',
        kind: 'numeric',
        topic: 'enterprise-value',
        difficulty: 1,
        objective: { en: 'Bridge equity value to transaction value.', it: 'Collegare equity value e transaction value.' },
        prompt: { en: 'Disney’s amended deal had an implied equity value of ≈$71.3bn and a transaction value of ≈$85.1bn. How much net debt and other claims did the transaction value add ($bn)?', it: 'Il nuovo accordo Disney aveva un equity value implicito di ≈$71,3mld e un transaction value di ≈$85,1mld. Quanto debito netto e altre passività ha aggiunto il transaction value ($mld)?' },
        answer: 13.8,
        unit: '$bn',
        tolerance: { abs: 0.05 },
        verify: { fn: 'diff', args: [85.1, 71.3] },
        explanation: { en: 'Transaction (enterprise) value = equity value + net debt (and similar claims): 85.1 − 71.3 = $13.8bn assumed by Disney. Headline “deal values” can refer to either — always state the basis.', it: 'Transaction (enterprise) value = equity value + debito netto (e passività assimilate): 85,1 − 71,3 = $13,8mld assunti da Disney. I “valori del deal” possono riferirsi a entrambe le misure: indicare sempre la base.' }
      },
      {
        id: 'case-disney-fox-q2',
        kind: 'mcq',
        topic: 'deal-structure',
        difficulty: 2,
        objective: { en: 'Understand a collar in a stock deal.', it: 'Capire un collar in un deal in azioni.' },
        prompt: { en: 'Under the collar, Fox holders received $38 of value if Disney’s average price was between $93.53 and $114.32. What happens within that range when Disney’s share price falls?', it: 'Con il collar gli azionisti Fox ricevevano $38 di valore se il prezzo medio Disney era tra $93,53 e $114,32. Cosa succede, all’interno dell’intervallo, se il titolo Disney scende?' },
        choices: [
          { en: 'Fox holders receive more Disney shares per Fox share, keeping value at $38', it: 'Gli azionisti Fox ricevono più azioni Disney per azione Fox, mantenendo il valore a $38' },
          { en: 'The exchange ratio is fixed, so Fox holders receive less value', it: 'Il rapporto di cambio è fisso, quindi gli azionisti Fox ricevono meno valore' },
          { en: 'The cash component is cancelled', it: 'La componente in contanti viene annullata' },
          { en: 'Disney can walk away without penalty', it: 'Disney può ritirarsi senza penali' }
        ],
        correct: 0,
        explanation: { en: 'Inside the collar the deal behaves like a fixed-value offer: the exchange ratio floats so the stock portion delivers constant value. Outside the band the ratio becomes fixed and value moves with Disney’s price. A collar does not cancel cash or create a walk right.', it: 'All’interno del collar l’offerta è a valore fisso: il rapporto di cambio varia perché la parte in azioni dia valore costante. Fuori dall’intervallo il rapporto si fissa e il valore segue il titolo Disney. Il collar non elimina il cash né crea un diritto di recesso.' }
      },
      {
        id: 'case-disney-fox-q3',
        kind: 'multi',
        topic: 'merger-control',
        difficulty: 2,
        objective: { en: 'Identify regulatory and auction elements of the deal.', it: 'Identificare gli elementi regolamentari e d’asta dell’operazione.' },
        prompt: { en: 'Which statements are correct? Select all that apply.', it: 'Quali affermazioni sono corrette? Seleziona tutte le risposte corrette.' },
        choices: [
          { en: 'The DOJ required divestiture of Fox’s 22 regional sports networks', it: 'Il DOJ ha richiesto la cessione delle 22 reti sportive regionali di Fox' },
          { en: 'Comcast’s June 2018 counter-bid was all cash', it: 'La controfferta di Comcast di giugno 2018 era interamente in contanti' },
          { en: 'Fox News was included in the assets bought by Disney', it: 'Fox News era tra gli asset acquistati da Disney' },
          { en: 'Disney’s original December 2017 offer was all stock', it: 'L’offerta originaria di Disney di dicembre 2017 era interamente in azioni' }
        ],
        correct: [0, 1, 3],
        explanation: { en: 'RSNs overlapped with ESPN, so the DOJ required their sale; Comcast bid ≈$65bn in cash; Disney’s first deal was all-stock (0.2745 shares). Fox News stayed with the spun-off Fox Corporation.', it: 'Le RSN si sovrapponevano a ESPN, quindi il DOJ ne impose la cessione; Comcast offrì ≈$65mld in contanti; il primo accordo Disney era tutto in azioni (0,2745). Fox News è rimasta nella Fox Corporation scorporata.' }
      }
    ],
    sources: [
      { label: 'Disney press release — amended agreement, $71.3bn in cash and stock, 20 Jun 2018 (Disney IR PDF)', url: 'https://s206.q4cdn.com/979796730/files/doc_news/The-Walt-Disney-Company-Signs-Amended-Acquisition-Agreement-To-Acquire-Twenty-First-Century-Fox-Inc--For-71-3-Billion-In-Cash-And-Sto-0SFFK.pdf' },
      { label: 'Sports Video Group — original Disney/Fox terms ($52.4bn, 0.2745 shares), 14 Dec 2017', url: 'https://www.sportsvideo.org/2017/12/14/disney-to-acquire-fox-regional-sports-networks-sky-as-part-of-52-4-billion-deal/' },
      { label: 'Bloomberg — Comcast drops out of bidding for Fox, 19 Jul 2018', url: 'https://www.bloombergquint.com/business/2018/07/19/comcast-surrenders-to-disney-in-fox-bid-to-keep-pursuing-sky' },
      { label: 'Disney Form 10-K FY2020 — International Channels impairment', url: 'https://www.sec.gov/Archives/edgar/data/1744489/000174448920000197/dis-20201003.htm' },
      { label: 'TV Technology — DOJ clears Disney/Fox subject to RSN divestiture', url: 'https://tvtechnology.com/news/disney-gets-green-light-from-doj-on-fox-acquisition' }
    ],
    reviewed: '2026-10'
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'kraft-heinz',
    title: { en: 'Heinz / Kraft (Kraft Heinz)', it: 'Heinz / Kraft (Kraft Heinz)' },
    buyer: 'H.J. Heinz Holding (3G Capital & Berkshire Hathaway)',
    target: 'Kraft Foods Group',
    sector: 'consumer',
    tags: ['us', 'stock-deal'],
    announced: '2015-03-25',
    closedOrEnded: '2015-07-02',
    status: 'completed',
    value: {
      en: 'No conventional purchase price: Kraft shareholders received one Kraft Heinz share per Kraft share plus a $16.50 per share special cash dividend (≈$10bn in total, funded by a new equity investment from 3G and Berkshire); Heinz holders owned 51% of the combined company.',
      it: 'Nessun prezzo d’acquisto tradizionale: gli azionisti Kraft hanno ricevuto un’azione Kraft Heinz per azione Kraft più un dividendo straordinario di $16,50 per azione (≈$10mld complessivi, finanziati con nuovo equity di 3G e Berkshire); gli azionisti Heinz detenevano il 51% della società combinata.'
    },
    rationale: {
      en: 'Create a food platform with iconic brands; apply 3G’s cost model (zero-based budgeting, headcount and plant rationalisation) to Kraft’s cost base; use Heinz’s international footprint to take Kraft brands abroad. The integration programme later targeted $1.7bn of pre-tax savings by end-2017 (Kraft Heinz 10-Q).',
      it: 'Creare una piattaforma alimentare di marchi iconici; applicare a Kraft il modello di costo di 3G (zero-based budgeting, razionalizzazione di personale e stabilimenti); usare la presenza internazionale di Heinz per portare all’estero i marchi Kraft. Il programma di integrazione puntava poi a $1,7mld di risparmi ante imposte entro fine 2017 (10-Q Kraft Heinz).'
    },
    valuation: {
      en: 'The “premium” to Kraft shareholders was delivered via the $16.50 special dividend plus a 49% stake in a combined company expected to benefit from synergies. Valuation logic was synergy-driven: paying away part of the capitalised cost savings to Kraft holders.',
      it: 'Il “premio” agli azionisti Kraft è arrivato tramite il dividendo straordinario di $16,50 più una quota del 49% in una società combinata che avrebbe beneficiato delle sinergie. La logica valutativa era basata sulle sinergie: cedere agli azionisti Kraft parte del valore capitalizzato dei risparmi.'
    },
    financing: {
      en: 'Berkshire Hathaway and 3G subscribed ≈$10bn of new Heinz shares before closing, mainly to fund the special dividend. Berkshire separately held $8bn of 9% Heinz preferred stock from the 2013 Heinz buyout (redeemed on 7 June 2016 for $8.3bn, funded mainly with new debt).',
      it: 'Berkshire Hathaway e 3G hanno sottoscritto ≈$10mld di nuove azioni Heinz prima del closing, principalmente per finanziare il dividendo straordinario. Berkshire deteneva inoltre $8mld di azioni privilegiate Heinz al 9% derivanti dal buyout Heinz del 2013 (rimborsate il 7 giugno 2016 per $8,3mld, finanziate principalmente con nuovo debito).'
    },
    structure: {
      en: 'Reverse-style merger: Kraft merged into a Heinz subsidiary; Heinz Holding was renamed The Kraft Heinz Company and listed on NASDAQ. Because Heinz shareholders and management controlled the combined entity, **Heinz was the accounting acquirer**.',
      it: 'Fusione “inversa”: Kraft si è fusa in una controllata di Heinz; Heinz Holding è stata rinominata The Kraft Heinz Company e quotata al NASDAQ. Poiché azionisti e management Heinz controllavano l’entità combinata, **Heinz era l’acquirente contabile**.'
    },
    regulatory: {
      en: 'Limited antitrust overlap (Heinz strong in condiments/sauces, Kraft in cheese, meats, beverages); approved by US authorities and Kraft shareholders without significant remedies.',
      it: 'Sovrapposizione antitrust limitata (Heinz forte in condimenti/salse, Kraft in formaggi, salumi, bevande); approvata dalle autorità USA e dagli azionisti Kraft senza rimedi significativi.'
    },
    outcome: {
      en: 'Cost cuts boosted margins initially, but under-investment and shifting consumer tastes eroded sales. On 21 February 2019 Kraft Heinz announced ≈$15.4bn of non-cash impairments (goodwill and the Kraft and Oscar Mayer trademarks), an SEC subpoena on procurement accounting, and a 36% dividend cut (62.5¢ → 40¢ per quarter). The shares fell by about a quarter the next day.',
      it: 'I tagli dei costi hanno inizialmente migliorato i margini, ma i sotto-investimenti e i cambiamenti nei gusti dei consumatori hanno eroso le vendite. Il 21 febbraio 2019 Kraft Heinz annunciò ≈$15,4mld di svalutazioni non monetarie (avviamento e marchi Kraft e Oscar Mayer), una citazione SEC sulla contabilizzazione degli acquisti e un taglio del dividendo del 36% (da 62,5¢ a 40¢ trimestrali). Il giorno dopo il titolo perse circa un quarto del valore.'
    },
    accounting: {
      en: 'Heinz as accounting acquirer means Kraft’s assets — including brands such as Kraft and Oscar Mayer — were stepped up to fair value, creating large indefinite-lived trademarks and goodwill. When cash-flow forecasts for those brands fell, the impairment tests (US GAAP: goodwill and indefinite-lived intangibles tested at least annually) produced the 2019 write-downs.',
      it: 'Con Heinz acquirente contabile, le attività di Kraft — compresi marchi come Kraft e Oscar Mayer — sono state rivalutate al fair value, generando ingenti marchi a vita utile indefinita e avviamento. Quando le previsioni di flussi di cassa di quei marchi sono calate, gli impairment test (US GAAP: avviamento e immateriali a vita indefinita testati almeno annualmente) hanno prodotto le svalutazioni del 2019.'
    },
    interviewLessons: [
      { en: 'Identify the accounting acquirer by control, not legal form: here the legal survivor and the accounting acquirer were both Heinz, even though Kraft was the larger brand.', it: 'L’acquirente contabile si identifica dal controllo, non dalla forma giuridica: qui era Heinz, anche se Kraft era il marchio più noto.' },
      { en: 'Cost synergies are not a growth strategy: brand investment matters for consumer staples.', it: 'Le sinergie di costo non sono una strategia di crescita: nei beni di largo consumo l’investimento nei marchi è decisivo.' },
      { en: 'Big intangible step-ups create future impairment risk when forecasts are cut.', it: 'Grandi rivalutazioni di immateriali creano rischio di impairment futuro quando le previsioni vengono tagliate.' }
    ],
    questions: [
      {
        id: 'case-kraft-heinz-q1',
        kind: 'mcq',
        topic: 'purchase-accounting',
        difficulty: 3,
        objective: { en: 'Identify the accounting acquirer in a merger.', it: 'Identificare l’acquirente contabile in una fusione.' },
        prompt: { en: 'Why were Kraft’s (not Heinz’s) brands stepped up to fair value in the Kraft Heinz merger?', it: 'Perché nella fusione Kraft Heinz sono stati rivalutati al fair value i marchi di Kraft (e non di Heinz)?' },
        choices: [
          { en: 'Kraft had the higher revenue, so it was the acquiree by definition', it: 'Kraft aveva più ricavi, quindi era per definizione l’acquisita' },
          { en: 'Heinz shareholders (51%) and management controlled the combined company, so Heinz was the accounting acquirer', it: 'Gli azionisti Heinz (51%) e il management controllavano la società combinata, quindi Heinz era l’acquirente contabile' },
          { en: 'US GAAP allows the parties to choose freely', it: 'Gli US GAAP lasciano libera scelta alle parti' },
          { en: 'Kraft paid the special dividend, which makes it the acquiree', it: 'Kraft ha pagato il dividendo straordinario, quindi è l’acquisita' }
        ],
        correct: 1,
        explanation: { en: 'Under ASC 805 the acquirer is the entity that obtains control — evidenced by relative voting rights, board composition and senior management. Size is only one indicator; the choice is not free; who pays a dividend is irrelevant (in fact the dividend was funded by 3G/Berkshire equity).', it: 'Secondo l’ASC 805 l’acquirente è l’entità che ottiene il controllo — evidenziato da diritti di voto relativi, composizione del CdA e top management. La dimensione è solo un indicatore; la scelta non è libera; chi paga il dividendo è irrilevante (peraltro finanziato con equity di 3G/Berkshire).' }
      },
      {
        id: 'case-kraft-heinz-q2',
        kind: 'numeric',
        topic: 'dividend-policy',
        difficulty: 1,
        objective: { en: 'Compute a dividend cut.', it: 'Calcolare un taglio del dividendo.' },
        prompt: { en: 'In February 2019 Kraft Heinz cut its quarterly dividend from $0.625 to $0.40. By what percentage was it cut (%, enter as a negative number)?', it: 'A febbraio 2019 Kraft Heinz ha ridotto il dividendo trimestrale da $0,625 a $0,40. Di quale percentuale è stato tagliato (%, inserisci un numero negativo)?' },
        answer: -36,
        unit: '%',
        tolerance: { abs: 0.1 },
        verify: { fn: 'ratio', args: [-2250, 62.5] },
        explanation: { en: '(0.40 − 0.625) / 0.625 = −36%. The cut freed cash for deleveraging after the impairment shock.', it: '(0,40 − 0,625) / 0,625 = −36%. Il taglio ha liberato cassa per ridurre la leva dopo lo shock delle svalutazioni.' }
      },
      {
        id: 'case-kraft-heinz-q3',
        kind: 'multi',
        topic: 'impairment',
        difficulty: 2,
        objective: { en: 'Link the 2019 write-down to its accounting causes.', it: 'Collegare la svalutazione del 2019 alle sue cause contabili.' },
        prompt: { en: 'Which factors explain the ≈$15.4bn 2019 impairment? Select all that apply.', it: 'Quali fattori spiegano la svalutazione di ≈$15,4mld del 2019? Seleziona tutte le risposte corrette.' },
        choices: [
          { en: 'Large fair-value step-ups of Kraft brands recognised at the 2015 merger', it: 'Ampie rivalutazioni al fair value dei marchi Kraft rilevate alla fusione del 2015' },
          { en: 'Lower forecast cash flows for brands such as Kraft and Oscar Mayer', it: 'Flussi di cassa attesi inferiori per marchi come Kraft e Oscar Mayer' },
          { en: 'A requirement to amortise goodwill over 10 years', it: 'L’obbligo di ammortizzare l’avviamento in 10 anni' },
          { en: 'Annual impairment testing of goodwill and indefinite-lived trademarks', it: 'L’impairment test annuale di avviamento e marchi a vita indefinita' }
        ],
        correct: [0, 1, 3],
        explanation: { en: 'High carrying values from the 2015 step-up, combined with reduced forecasts, failed the annual impairment tests. Public companies under US GAAP do not amortise goodwill (the private-company alternative is an exception), so option 3 is wrong.', it: 'Valori contabili elevati dalla rivalutazione del 2015, uniti a previsioni ridotte, non hanno superato gli impairment test annuali. Le società quotate in US GAAP non ammortizzano l’avviamento (l’alternativa per le private è un’eccezione), quindi l’opzione 3 è errata.' }
      }
    ],
    sources: [
      { label: 'Kraft Foods Group Form 8-K, merger announcement press release, 25 Mar 2015', url: 'https://www.sec.gov/Archives/edgar/data/0001545158/000119312515104004/d895300dex991.htm' },
      { label: 'H.J. Heinz Holding Corp Form S-4 (2015) — terms, $16.50 special dividend, 51/49 ownership, accounting acquirer', url: 'https://www.sec.gov/Archives/edgar/data/0001637459/000119312515126301/d898418ds4.htm' },
      { label: 'Kraft Heinz Form 10-Q (Q2 2015) — closing 2 Jul 2015, $10bn equity investment, $8bn preferred', url: 'https://www.sec.gov/Archives/edgar/data/0001637459/000163745915000021/khc10q62815.htm' },
      { label: 'Kraft Heinz Form 10-K FY2016 — redemption of Series A preferred, 7 Jun 2016', url: 'https://www.sec.gov/Archives/edgar/data/0001637459/000163745917000007/khc201610k.htm' },
      { label: 'Fortune — Kraft Heinz $15.4bn write-down, SEC probe and dividend cut, 21 Feb 2019', url: 'https://fortune.com/2019/02/21/kraft-heinz-stock-sec-probe' }
    ],
    reviewed: '2026-10'
  },
  /* ------------------------------------------------------------------ */
  {
    id: 'kkr-rjr-nabisco',
    title: { en: 'KKR / RJR Nabisco', it: 'KKR / RJR Nabisco' },
    buyer: 'Kohlberg Kravis Roberts & Co. (KKR)',
    target: 'RJR Nabisco',
    sector: 'consumer',
    tags: ['lbo', 'us'],
    announced: '1988-11-30',
    status: 'completed',
    value: {
      en: '$109 per share (≈$81 cash plus ≈$28 of securities), equity value ≈$25bn, ≈$31bn including assumed debt — the largest LBO in history at the time.',
      it: '$109 per azione (≈$81 in contanti più ≈$28 in titoli), equity value ≈$25mld, ≈$31mld includendo il debito assunto — il più grande LBO della storia fino ad allora.'
    },
    rationale: {
      en: 'RJR combined a cash-generative tobacco business (R.J. Reynolds) with food (Nabisco). Its CEO F. Ross Johnson proposed a management buyout on 20 October 1988 at $75 per share; KKR entered with a competing bid within days, believing tobacco cash flows could service enormous debt and that asset sales could unlock value.',
      it: 'RJR univa un business del tabacco ad alta generazione di cassa (R.J. Reynolds) e l’alimentare (Nabisco). Il CEO F. Ross Johnson propose il 20 ottobre 1988 un management buyout a $75 per azione; KKR entrò con un’offerta concorrente pochi giorni dopo, convinta che i flussi del tabacco potessero servire un debito enorme e che le cessioni di asset potessero liberare valore.'
    },
    valuation: {
      en: 'A six-week auction drove the price from $75 to over $100. In the final round the management group bid $112 and KKR $109, yet the board chose KKR: it judged the offers substantially equivalent, with KKR’s securities more certain to deliver their stated value (management’s lacked comparable “reset” protection) and concerns about management’s conflicts and pay packages.',
      it: 'Un’asta di sei settimane portò il prezzo da $75 a oltre $100. Nell’ultimo round il gruppo del management offrì $112 e KKR $109, ma il CdA scelse KKR: giudicò le offerte sostanzialmente equivalenti, con i titoli di KKR più certi nel valore dichiarato (quelli del management non avevano una protezione di “reset” comparabile) e con preoccupazioni sui conflitti e sui compensi del management.'
    },
    financing: {
      en: 'Classic 1980s LBO: a thin layer of equity from KKR funds, large syndicated bank loans, bridge financing and high-yield (“junk”) bonds; shareholders also received non-cash securities (pay-in-kind instruments) as part of the $109.',
      it: 'LBO classico anni ’80: un sottile strato di equity dai fondi KKR, ingenti prestiti bancari sindacati, bridge financing e obbligazioni high yield (“junk”); gli azionisti ricevettero anche titoli non monetari (strumenti pay-in-kind) come parte dei $109.'
    },
    structure: {
      en: 'Cash tender offer followed by a second-step merger in which remaining shareholders received the mixed package of cash and securities. RJR became a private, highly leveraged company controlled by KKR.',
      it: 'Offerta pubblica in contanti seguita da una fusione di secondo livello in cui gli azionisti residui ricevettero il pacchetto misto di contanti e titoli. RJR divenne una società privata, fortemente indebitata e controllata da KKR.'
    },
    regulatory: {
      en: 'Antitrust was not the issue (financial buyer, no overlaps). The debate was about governance and fiduciary duties: the board ran an auction through a special committee of independent directors, and Congress held hearings on the risks of LBO debt.',
      it: 'L’antitrust non era un tema (compratore finanziario, nessuna sovrapposizione). Il dibattito riguardava governance e doveri fiduciari: il CdA gestì l’asta tramite un comitato speciale di amministratori indipendenti e il Congresso tenne audizioni sui rischi del debito da LBO.'
    },
    outcome: {
      en: 'The deal completed in 1989. High interest costs forced asset sales and later recapitalisations; KKR’s investors earned poor returns relative to the deal’s fame, and KKR had exited by the mid-1990s. The saga was chronicled in “Barbarians at the Gate” (Burrough & Helyar, 1990).',
      it: 'L’operazione si completò nel 1989. Gli elevati oneri finanziari imposero cessioni di asset e successive ricapitalizzazioni; gli investitori di KKR ottennero rendimenti modesti rispetto alla fama del deal e KKR era uscita entro la metà degli anni ’90. La vicenda è raccontata in “Barbarians at the Gate” (Burrough & Helyar, 1990).'
    },
    accounting: {
      en: 'Purchase accounting stepped up RJR’s assets and created very large goodwill (then amortised under US GAAP APB 16/17), depressing reported earnings; meanwhile interest on the acquisition debt and PIK accretion consumed cash flow — a reminder that LBOs are judged on cash, not accounting earnings.',
      it: 'La contabilizzazione per acquisto rivalutò le attività di RJR e creò un avviamento ingentissimo (all’epoca ammortizzato in base agli US GAAP APB 16/17), deprimendo gli utili; intanto gli interessi sul debito d’acquisizione e la capitalizzazione dei PIK assorbivano i flussi — un promemoria che gli LBO si giudicano sulla cassa, non sugli utili contabili.'
    },
    interviewLessons: [
      { en: 'Headline price is not value: boards compare certainty, form of consideration and value of securities, not just $ per share.', it: 'Il prezzo nominale non è il valore: i CdA confrontano certezza, forma del corrispettivo e valore dei titoli, non solo i $ per azione.' },
      { en: 'Overpaying in an auction leaves no margin for error in an LBO: entry multiple and leverage drive returns.', it: 'Pagare troppo in un’asta non lascia margine d’errore in un LBO: multiplo d’ingresso e leva determinano i rendimenti.' },
      { en: 'Management buyouts create conflicts of interest — hence special committees of independent directors.', it: 'I management buyout creano conflitti di interesse — da qui i comitati speciali di amministratori indipendenti.' }
    ],
    questions: [
      {
        id: 'case-kkr-rjr-nabisco-q1',
        kind: 'numeric',
        topic: 'lbo',
        difficulty: 1,
        objective: { en: 'Decompose consideration into cash and securities.', it: 'Scomporre il corrispettivo in contanti e titoli.' },
        prompt: { en: 'KKR’s $109 per share consisted of about $81 in cash, the rest in securities. What share of the headline price was cash (%, 1 decimal)?', it: 'I $109 per azione di KKR comprendevano circa $81 in contanti, il resto in titoli. Quale quota del prezzo nominale era in contanti (%, 1 decimale)?' },
        answer: 74.3,
        unit: '%',
        tolerance: { abs: 0.1 },
        verify: { fn: 'ratio', args: [8100, 109] },
        explanation: { en: '81 / 109 = 74.3%. The remaining ≈26% was paper whose value depended on market pricing — why boards scrutinise the “real” value of non-cash consideration.', it: '81 / 109 = 74,3%. Il restante ≈26% era carta il cui valore dipendeva dal mercato — per questo i CdA verificano il valore “reale” del corrispettivo non monetario.' }
      },
      {
        id: 'case-kkr-rjr-nabisco-q2',
        kind: 'mcq',
        topic: 'auction-process',
        difficulty: 2,
        objective: { en: 'Explain why a lower bid can win.', it: 'Spiegare perché un’offerta inferiore può vincere.' },
        prompt: { en: 'Why did RJR’s board accept KKR’s $109 over management’s $112?', it: 'Perché il CdA di RJR accettò i $109 di KKR invece dei $112 del management?' },
        choices: [
          { en: 'Delaware law forbids management buyouts', it: 'Il diritto del Delaware vieta i management buyout' },
          { en: 'KKR’s bid was all cash', it: 'L’offerta di KKR era interamente in contanti' },
          { en: 'It judged the bids roughly equal in value, with KKR’s securities more certain and concerns about management’s conflicts', it: 'Giudicò le offerte di valore simile, con i titoli KKR più certi e preoccupazioni sui conflitti del management' },
          { en: 'Antitrust authorities objected to the management group', it: 'Le autorità antitrust si opposero al gruppo del management' }
        ],
        correct: 2,
        explanation: { en: 'Both bids mixed cash and paper; the board valued certainty of the securities’ value and was uneasy about management’s self-dealing. MBOs are legal; neither bid was all cash; antitrust was irrelevant.', it: 'Entrambe le offerte mescolavano contanti e titoli; il CdA valutò la certezza del valore dei titoli e diffidava dell’autointeresse del management. Gli MBO sono legali; nessuna offerta era tutta cash; l’antitrust era irrilevante.' }
      },
      {
        id: 'case-kkr-rjr-nabisco-q3',
        kind: 'multi',
        topic: 'lbo',
        difficulty: 2,
        objective: { en: 'Identify what makes a good LBO candidate.', it: 'Identificare le caratteristiche di un buon candidato LBO.' },
        prompt: { en: 'Which features made RJR attractive to LBO buyers? Select all that apply.', it: 'Quali caratteristiche rendevano RJR attraente per gli acquirenti LBO? Seleziona tutte le risposte corrette.' },
        choices: [
          { en: 'Stable, cash-generative tobacco business', it: 'Business del tabacco stabile e generatore di cassa' },
          { en: 'Divisible assets that could be sold to repay debt', it: 'Asset separabili da cedere per rimborsare il debito' },
          { en: 'High growth requiring heavy reinvestment', it: 'Crescita elevata con forti reinvestimenti' },
          { en: 'Perceived room to cut corporate costs', it: 'Margini percepiti per tagliare i costi di struttura' }
        ],
        correct: [0, 1, 3],
        explanation: { en: 'LBOs need predictable free cash flow, saleable assets and cost levers. Heavy reinvestment needs compete with debt service, so high-capex growth stories are poor LBO candidates.', it: 'Gli LBO richiedono free cash flow prevedibile, asset cedibili e leve di costo. Forti reinvestimenti competono con il servizio del debito: le storie di crescita ad alto capex sono pessimi candidati LBO.' }
      }
    ],
    sources: [
      { label: 'RJR Nabisco Holdings Corp Form 10-K (FY1993) — background of the 1989 acquisition by KKR', url: 'https://www.sec.gov/Archives/edgar/data/0000847903/000095011294000477/0000950112-94-000477.txt' },
      { label: 'University of Bath — RJR Nabisco case study (bid chronology, $109 vs $112)', url: 'https://people.bath.ac.uk/mnsrf/Teaching%202011/RJR%20case%20study.pdf' },
      { label: 'Bryan Burrough & John Helyar, “Barbarians at the Gate: The Fall of RJR Nabisco” (Harper & Row, 1990)' }
    ],
    reviewed: '2026-10'
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'kraft-cadbury',
    title: { en: 'Kraft / Cadbury', it: 'Kraft / Cadbury' },
    buyer: 'Kraft Foods',
    target: 'Cadbury plc',
    sector: 'consumer',
    tags: ['hostile', 'cross-border', 'europe', 'us'],
    announced: '2010-01-19',
    closedOrEnded: '2010-02-02',
    status: 'completed',
    value: {
      en: '840p per Cadbury share (500p cash + 0.1874 new Kraft shares) plus a separate 10p special dividend; Cadbury’s equity valued at roughly £11.5–11.9bn (≈$19bn) depending on the source and reference date.',
      it: '840p per azione Cadbury (500p in contanti + 0,1874 nuove azioni Kraft) più un dividendo straordinario separato di 10p; equity di Cadbury valutato circa £11,5–11,9mld (≈$19mld) a seconda della fonte e della data di riferimento.'
    },
    rationale: {
      en: 'Global leadership in confectionery, Cadbury’s strong positions in emerging markets (e.g. India) and in gum, plus cost and revenue synergies from combining distribution.',
      it: 'Leadership globale nel confectionery, posizioni forti di Cadbury nei mercati emergenti (es. India) e nelle gomme da masticare, più sinergie di costo e di ricavo dalla distribuzione combinata.'
    },
    valuation: {
      en: 'Cadbury’s board called Kraft’s initial cash-and-share offer (300p + 0.2589 Kraft shares) “derisory”. Kraft raised the cash element and the final offer of 840p was recommended on 19 January 2010. Hedge funds and arbitrageurs, who had bought Cadbury shares during the bid, held a large part of the register and favoured a sale.',
      it: 'Il CdA di Cadbury definì “derisoria” l’offerta iniziale di Kraft in contanti e azioni (300p + 0,2589 azioni Kraft). Kraft aumentò la componente cash e l’offerta finale di 840p fu raccomandata il 19 gennaio 2010. Hedge fund e arbitraggisti, entrati nel capitale durante l’offerta, detenevano gran parte delle azioni ed erano favorevoli alla vendita.'
    },
    financing: {
      en: 'Cash from new borrowing plus the sale of Kraft’s North American frozen pizza business to Nestlé for $3.7bn, used to increase the cash component. Berkshire Hathaway (≈9.4% of Kraft) voted against authorising up to 370m new shares, criticising issuance of “undervalued” Kraft stock; the final offer was structured so that a Kraft shareholder vote was not required.',
      it: 'Contanti da nuovo debito più la cessione a Nestlé, per $3,7mld, del business delle pizze surgelate nordamericane di Kraft, usata per aumentare la componente cash. Berkshire Hathaway (≈9,4% di Kraft) votò contro l’autorizzazione ad emettere fino a 370m di nuove azioni, criticando l’emissione di azioni Kraft “sottovalutate”; l’offerta finale fu strutturata in modo da non richiedere il voto degli azionisti Kraft.'
    },
    structure: {
      en: 'UK contractual takeover offer under the City Code on Takeovers and Mergers: hostile offer, then recommended final offer. Kraft declared it wholly unconditional on 2 February 2010 and later used the squeeze-out procedure (90% acceptances) to acquire remaining shares; Cadbury was delisted.',
      it: 'Offerta pubblica contrattuale UK ai sensi del City Code on Takeovers and Mergers: offerta ostile, poi offerta finale raccomandata. Kraft la dichiarò incondizionata il 2 febbraio 2010 e poi usò lo squeeze-out (adesioni al 90%) per acquisire le azioni residue; Cadbury fu revocata dalla quotazione.'
    },
    regulatory: {
      en: 'Antitrust was manageable. The lasting impact was on **takeover regulation**: Kraft said during the bid it believed it could keep Cadbury’s Somerdale plant open, then confirmed its closure; the Takeover Panel publicly criticised Kraft in May 2010 (Rule 19.1 — standards of care and accuracy). The Panel’s 2010–11 review led to Code changes in force from 19 September 2011: a 28-day “put up or shut up” deadline once a bidder is named, a general ban on break fees and deal protection, and more disclosure of financing, fees and intentions for employees.',
      it: 'L’antitrust era gestibile. L’impatto duraturo riguarda la **disciplina delle OPA**: durante l’offerta Kraft dichiarò di ritenere di poter tenere aperto lo stabilimento Cadbury di Somerdale, salvo poi confermarne la chiusura; il Takeover Panel criticò pubblicamente Kraft a maggio 2010 (Rule 19.1 — standard di diligenza e accuratezza). La revisione del Panel 2010–11 portò a modifiche del Code in vigore dal 19 settembre 2011: termine di 28 giorni “put up or shut up” una volta nominato l’offerente, divieto generale di break fee e deal protection, maggiore trasparenza su finanziamento, commissioni e intenzioni verso i dipendenti.'
    },
    outcome: {
      en: 'Completed in February 2010. Kraft later split into Kraft Foods Group (North American grocery) and Mondelēz International (global snacks, including Cadbury) in 2012.',
      it: 'Completata a febbraio 2010. Nel 2012 Kraft si è poi scissa in Kraft Foods Group (alimentare nordamericano) e Mondelēz International (snack globali, Cadbury inclusa).'
    },
    accounting: {
      en: 'Kraft applied the acquisition method under US GAAP: Cadbury brands recognised as intangible assets at fair value and the residual as goodwill. The 10p special dividend was paid by Cadbury to its own shareholders, so it reduced the value Kraft acquired rather than being part of the consideration.',
      it: 'Kraft applicò il metodo dell’acquisizione secondo gli US GAAP: marchi Cadbury rilevati come attività immateriali al fair value e il residuo come avviamento. Il dividendo straordinario di 10p fu pagato da Cadbury ai propri azionisti: riduceva il valore acquisito da Kraft anziché far parte del corrispettivo.'
    },
    interviewLessons: [
      { en: 'In UK public M&A, the Takeover Code shapes tactics: timetables, PUSU, disclosure and statements of intention are binding.', it: 'Nell’M&A pubblico UK il Takeover Code determina le tattiche: tempistiche, PUSU, disclosure e dichiarazioni d’intenti sono vincolanti.' },
      { en: 'Paying in stock requires acquirer shareholders to believe their shares are fairly valued — Buffett’s objection forced more cash.', it: 'Pagare in azioni richiede che gli azionisti dell’acquirente ritengano le proprie azioni valutate correttamente — l’obiezione di Buffett impose più contanti.' },
      { en: 'Shareholder register dynamics (arbitrage funds) can decide hostile bids.', it: 'La composizione dell’azionariato (fondi di arbitraggio) può decidere un’offerta ostile.' }
    ],
    questions: [
      {
        id: 'case-kraft-cadbury-q1',
        kind: 'numeric',
        topic: 'deal-consideration',
        difficulty: 1,
        objective: { en: 'Compute the cash portion of mixed consideration.', it: 'Calcolare la quota cash di un corrispettivo misto.' },
        prompt: { en: 'Kraft’s final offer was 840p per share, of which 500p in cash. What percentage of the offer value was cash (%, 1 decimal)?', it: 'L’offerta finale di Kraft era di 840p per azione, di cui 500p in contanti. Quale percentuale del valore era in contanti (%, 1 decimale)?' },
        answer: 59.5,
        unit: '%',
        tolerance: { abs: 0.1 },
        verify: { fn: 'ratio', args: [50000, 840] },
        explanation: { en: '500 / 840 = 59.5%. The remaining 340p was delivered in Kraft shares (0.1874 per Cadbury share), so its value moved with Kraft’s share price and the USD/GBP rate.', it: '500 / 840 = 59,5%. I restanti 340p erano in azioni Kraft (0,1874 per azione Cadbury), quindi il loro valore dipendeva dal prezzo Kraft e dal cambio USD/GBP.' }
      },
      {
        id: 'case-kraft-cadbury-q2',
        kind: 'multi',
        topic: 'takeover-regulation',
        difficulty: 2,
        objective: { en: 'Recall the UK Takeover Code reforms that followed Kraft/Cadbury.', it: 'Ricordare le riforme del Takeover Code UK successive a Kraft/Cadbury.' },
        prompt: { en: 'Which changes were introduced into the UK Takeover Code in September 2011? Select all that apply.', it: 'Quali modifiche sono state introdotte nel Takeover Code UK a settembre 2011? Seleziona tutte le risposte corrette.' },
        choices: [
          { en: 'A 28-day “put up or shut up” deadline after a potential bidder is publicly identified', it: 'Un termine di 28 giorni “put up or shut up” dopo l’identificazione pubblica di un potenziale offerente' },
          { en: 'A general prohibition on offer-related break fees and deal protection', it: 'Un divieto generale di break fee e misure di deal protection' },
          { en: 'A ban on foreign bidders for UK companies', it: 'Un divieto per gli offerenti esteri di acquisire società UK' },
          { en: 'More disclosure of bidder financing, advisers’ fees and intentions for employees', it: 'Maggiore trasparenza su finanziamento dell’offerente, commissioni degli advisor e intenzioni verso i dipendenti' }
        ],
        correct: [0, 1, 3],
        explanation: { en: 'The Panel rejected protectionism (no ban on foreign bidders) but shifted balance towards targets: PUSU in 28 days, no break fees, and better disclosure. A national-security screening regime came much later and through separate legislation (National Security and Investment Act 2021).', it: 'Il Panel respinse il protezionismo (nessun divieto per offerenti esteri) ma riequilibrò a favore dei target: PUSU in 28 giorni, niente break fee, più trasparenza. Un regime di controllo per la sicurezza nazionale è arrivato molto dopo con una legge separata (National Security and Investment Act 2021).' }
      },
      {
        id: 'case-kraft-cadbury-q3',
        kind: 'mcq',
        topic: 'takeover-regulation',
        difficulty: 2,
        objective: { en: 'Understand bidder statements under the Code.', it: 'Capire le dichiarazioni dell’offerente secondo il Code.' },
        prompt: { en: 'Why did the Takeover Panel criticise Kraft in May 2010?', it: 'Perché il Takeover Panel criticò Kraft a maggio 2010?' },
        choices: [
          { en: 'Kraft paid too high a premium', it: 'Kraft aveva pagato un premio troppo alto' },
          { en: 'Kraft said it believed it could keep the Somerdale plant open without a reasonable basis, then confirmed its closure', it: 'Kraft dichiarò di ritenere di poter mantenere aperto lo stabilimento di Somerdale senza basi ragionevoli, salvo poi confermarne la chiusura' },
          { en: 'Kraft failed to obtain antitrust clearance', it: 'Kraft non aveva ottenuto il via libera antitrust' },
          { en: 'Kraft bought shares below the offer price', it: 'Kraft aveva comprato azioni sotto il prezzo d’offerta' }
        ],
        correct: 1,
        explanation: { en: 'Rule 19.1 requires statements during an offer to meet the highest standards of care and accuracy. The Panel accepted Kraft acted in good faith but found it lacked a reasonable basis for the Somerdale statement. Premium level and antitrust are not Panel matters.', it: 'La Rule 19.1 impone che le dichiarazioni durante l’offerta rispettino i più elevati standard di diligenza e accuratezza. Il Panel riconobbe la buona fede di Kraft ma ritenne che mancasse una base ragionevole per la dichiarazione su Somerdale. Livello del premio e antitrust non sono materie del Panel.' }
      }
    ],
    sources: [
      { label: 'Kraft Foods Form 8-K — Rule 2.5 announcement of recommended final offer (840p), 19 Jan 2010', url: 'https://www.sec.gov/Archives/edgar/data/1103982/000119312510008327/dex992.htm' },
      { label: 'Mondelēz IR — Offer for Cadbury: offer wholly unconditional, Feb 2010', url: 'https://ir.mondelezinternational.com/news-releases/news-release-details/offer-kraft-foods-inc-cadbury-plc-offer-update-offer-wholly' },
      { label: 'NBC News/AP — Berkshire votes against Kraft share issuance; pizza business sold to Nestlé for $3.7bn, Jan 2010', url: 'https://www.nbcnews.com/id/wbna34700814' },
      { label: 'Confectionery News — Takeover Panel censures Kraft over Cadbury bid, 28 May 2010', url: 'https://www.confectionerynews.com/Article/2010/05/28/Takeover-Panel-censures-Kraft-over-Cadbury-bid' },
      { label: 'Debevoise & Plimpton — Principal changes to the UK Takeover Code (Oct 2011)', url: 'https://debevoise.com/insights/publications/2011/10/principal-changes-to-the-uk-takeover-code' }
    ],
    reviewed: '2026-10'
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'vodafone-mannesmann',
    title: { en: 'Vodafone AirTouch / Mannesmann', it: 'Vodafone AirTouch / Mannesmann' },
    buyer: 'Vodafone AirTouch',
    target: 'Mannesmann',
    sector: 'telecom',
    tags: ['hostile', 'cross-border', 'europe', 'stock-deal'],
    announced: '1999-11-14',
    status: 'completed',
    value: {
      en: 'All-share: final terms 58.9646 Vodafone AirTouch shares per Mannesmann share (agreed 3–4 Feb 2000), giving Mannesmann holders 49.5% of the group; widely reported at roughly $180bn — still cited as the largest takeover ever (value depends on Vodafone’s share price).',
      it: 'Interamente in azioni: condizioni finali di 58,9646 azioni Vodafone AirTouch per azione Mannesmann (concordate il 3–4 feb 2000), con il 49,5% del gruppo agli azionisti Mannesmann; valore riportato intorno a $180mld — ancora citata come la più grande acquisizione di sempre (il valore dipende dal prezzo Vodafone).'
    },
    rationale: {
      en: 'Create a pan-European mobile leader: Mannesmann owned D2 (Germany’s leading mobile network) and Omnitel in Italy. The trigger was Mannesmann’s acquisition of the UK operator Orange in 1999, which put it in direct competition with Vodafone at home.',
      it: 'Creare un leader paneuropeo del mobile: Mannesmann possedeva D2 (prima rete mobile in Germania) e Omnitel in Italia. Il fattore scatenante fu l’acquisizione da parte di Mannesmann dell’operatore britannico Orange nel 1999, che la metteva in concorrenza diretta con Vodafone nel suo mercato domestico.'
    },
    valuation: {
      en: 'The original November 1999 exchange offer was 53.7 Vodafone shares per Mannesmann share; the agreed terms raised the ratio by about 9.8%. Valuation reflected peak-cycle telecom/TMT multiples, paid in highly-valued Vodafone stock.',
      it: 'L’offerta di scambio originaria di novembre 1999 era di 53,7 azioni Vodafone per azione Mannesmann; le condizioni concordate aumentarono il rapporto di circa il 9,8%. La valutazione rifletteva multipli TMT di picco di ciclo, pagati con azioni Vodafone molto apprezzate.'
    },
    financing: {
      en: 'No cash: consideration entirely in new Vodafone AirTouch shares, so Mannesmann shareholders became large owners of the combined group.',
      it: 'Nessun contante: corrispettivo interamente in nuove azioni Vodafone AirTouch, quindi gli azionisti Mannesmann diventarono grandi soci del gruppo combinato.'
    },
    structure: {
      en: 'Unsolicited cross-border public exchange offer to German shareholders — the first successful hostile takeover of a major German company. After a public battle, Mannesmann’s management board agreed to recommend improved terms in February 2000.',
      it: 'Offerta pubblica di scambio non sollecitata e transfrontaliera agli azionisti tedeschi — la prima acquisizione ostile riuscita di una grande società tedesca. Dopo una battaglia pubblica, il consiglio di gestione di Mannesmann accettò di raccomandare condizioni migliorate a febbraio 2000.'
    },
    regulatory: {
      en: 'The **European Commission** cleared the deal on 12 April 2000 on condition that Orange be divested (it was sold to France Télécom in 2000) plus network-access commitments. Germany had no statutory takeover law at the time; the case is widely cited as the trigger for the WpÜG, in force from 1 January 2002.',
      it: 'La **Commissione europea** autorizzò l’operazione il 12 aprile 2000 a condizione della cessione di Orange (venduta a France Télécom nel 2000) più impegni di accesso alla rete. All’epoca la Germania non aveva una legge sulle OPA; il caso è ampiamente citato come all’origine del WpÜG, in vigore dal 1° gennaio 2002.'
    },
    outcome: {
      en: 'Vodafone gained control of Mannesmann in 2000 and kept the mobile assets while selling the engineering and other non-core businesses. After the TMT bubble burst, Vodafone recorded a £23.5bn goodwill impairment in the year to March 2006, mostly on Germany — then among the largest losses in UK corporate history.',
      it: 'Vodafone ottenne il controllo di Mannesmann nel 2000, mantenendo gli asset mobili e cedendo l’ingegneria e gli altri business non core. Dopo lo scoppio della bolla TMT, Vodafone registrò nell’esercizio chiuso a marzo 2006 un impairment dell’avviamento di £23,5mld, in gran parte sulla Germania — allora tra le maggiori perdite della storia societaria britannica.'
    },
    accounting: {
      en: 'Paying with richly valued shares created enormous goodwill measured at the share price at completion. When value fell, the goodwill (by then tested for impairment under IFRS, IAS 36) was written down: an equity-funded overpayment shows up later as impairment, not as cash lost.',
      it: 'Pagare con azioni molto valutate creò un avviamento enorme misurato al prezzo delle azioni al completamento. Quando il valore è sceso, l’avviamento (allora soggetto a impairment test secondo IFRS, IAS 36) è stato svalutato: un pagamento eccessivo in azioni emerge più tardi come impairment, non come cassa persa.'
    },
    interviewLessons: [
      { en: 'Stock-for-stock deals in bubbles: the acquirer uses “expensive currency”, but goodwill can become huge impairments later.', it: 'Scambi azionari nelle bolle: l’acquirente usa “moneta cara”, ma l’avviamento può diventare enorme impairment in seguito.' },
      { en: 'Hostile bids succeed when shareholders, not boards, are persuaded — the exchange ratio was raised to win the board’s recommendation.', it: 'Le offerte ostili riescono quando si convincono gli azionisti, non i CdA — il rapporto di cambio fu alzato per ottenere la raccomandazione del board.' },
      { en: 'Merger remedies may require selling a just-acquired asset (Orange).', it: 'I rimedi antitrust possono imporre la vendita di un asset appena acquisito (Orange).' }
    ],
    questions: [
      {
        id: 'case-vodafone-mannesmann-q1',
        kind: 'numeric',
        topic: 'exchange-ratio',
        difficulty: 2,
        objective: { en: 'Measure the improvement in an exchange ratio.', it: 'Misurare il miglioramento di un rapporto di cambio.' },
        prompt: { en: 'Vodafone’s exchange ratio rose from 53.7 to 58.9646 Vodafone shares per Mannesmann share. By what percentage did it increase (%, 1 decimal)?', it: 'Il rapporto di cambio di Vodafone salì da 53,7 a 58,9646 azioni Vodafone per azione Mannesmann. Di quale percentuale è aumentato (%, 1 decimale)?' },
        answer: 9.8,
        unit: '%',
        tolerance: { abs: 0.1 },
        verify: { fn: 'ratio', args: [526.46, 53.7] },
        explanation: { en: '58.9646 / 53.7 − 1 = 9.8%. In a stock deal the improvement is expressed in the ratio; its value in euros moves with the acquirer’s share price.', it: '58,9646 / 53,7 − 1 = 9,8%. In un deal in azioni il miglioramento si esprime nel rapporto di cambio; il suo valore in euro varia con il prezzo dell’acquirente.' }
      },
      {
        id: 'case-vodafone-mannesmann-q2',
        kind: 'mcq',
        topic: 'merger-control',
        difficulty: 2,
        objective: { en: 'Explain the EU remedy.', it: 'Spiegare il rimedio UE.' },
        prompt: { en: 'What was the main condition for EU clearance on 12 April 2000?', it: 'Qual era la condizione principale dell’autorizzazione UE del 12 aprile 2000?' },
        choices: [
          { en: 'Sale of Omnitel in Italy', it: 'La cessione di Omnitel in Italia' },
          { en: 'Divestment of Orange, Mannesmann’s UK mobile operator', it: 'La cessione di Orange, operatore mobile britannico di Mannesmann' },
          { en: 'A cap on Vodafone’s voting rights', it: 'Un tetto ai diritti di voto di Vodafone' },
          { en: 'Payment of cash instead of shares', it: 'Il pagamento in contanti anziché in azioni' }
        ],
        correct: 1,
        explanation: { en: 'Vodafone and Orange would have overlapped in UK mobile, so Orange had to be sold (it went to France Télécom). Omnitel was kept; voting caps and form of consideration are not competition remedies.', it: 'Vodafone e Orange si sarebbero sovrapposte nel mobile UK, quindi Orange doveva essere ceduta (andò a France Télécom). Omnitel fu mantenuta; tetti al voto e forma del corrispettivo non sono rimedi antitrust.' }
      },
      {
        id: 'case-vodafone-mannesmann-q3',
        kind: 'mcq',
        topic: 'impairment',
        difficulty: 3,
        objective: { en: 'Link stock consideration to later goodwill impairment.', it: 'Collegare il corrispettivo in azioni al successivo impairment dell’avviamento.' },
        prompt: { en: 'Why did an all-share deal at the 2000 peak lead to a £23.5bn impairment in 2006?', it: 'Perché un deal tutto in azioni al picco del 2000 portò a un impairment di £23,5mld nel 2006?' },
        choices: [
          { en: 'Consideration was measured at Vodafone’s high share price, creating goodwill far above the recoverable amount of the German business once expectations fell', it: 'Il corrispettivo era misurato al prezzo elevato di Vodafone, creando un avviamento molto superiore al valore recuperabile del business tedesco quando le attese scesero' },
          { en: 'IFRS requires goodwill from share deals to be expensed immediately', it: 'Gli IFRS impongono di spesare subito l’avviamento da deal in azioni' },
          { en: 'Vodafone repaid the shares in cash in 2006', it: 'Vodafone rimborsò le azioni in contanti nel 2006' },
          { en: 'Impairment arises automatically after five years', it: 'L’impairment scatta automaticamente dopo cinque anni' }
        ],
        correct: 0,
        explanation: { en: 'Goodwill = consideration (at fair value of shares issued) − fair value of net assets. When cash-flow expectations for Germany fell, the CGU’s recoverable amount dropped below carrying value (IAS 36). Goodwill is not expensed immediately or on a timetable.', it: 'Avviamento = corrispettivo (al fair value delle azioni emesse) − fair value delle attività nette. Quando le attese di flussi per la Germania sono scese, il valore recuperabile della CGU è sceso sotto il valore contabile (IAS 36). L’avviamento non si spesa subito né a scadenza.' }
      }
    ],
    sources: [
      { label: 'Vodafone RNS — Agreement on terms for a merger with Mannesmann, Feb 2000 (Investegate)', url: 'https://www.investegate.co.uk/announcement/rns/vodafone-group--vod/agreement-on-terms-for-a-merger-with-mannesmann-/162635' },
      { label: 'Eurofound — Mannesmann agrees friendly takeover by Vodafone (49.5%, original 53.7 ratio)', url: 'https://www.eurofound.europa.eu/en/publications/all/mannesmann-agrees-friendly-takeover-vodafone' },
      { label: 'Agence Europe — EU go-ahead conditional on sale of Orange, Apr 2000', url: 'https://agenceurope.eu/en/bulletin/article/7697/14/go-ahead-for-vodafone-mannesmann-merger-as-long-as-the-new-group-sells-orange-and-opens-up-the-network-for-three-years' },
      { label: 'CMS — Public takeovers in Germany (WpÜG and the Vodafone/Mannesmann case)', url: 'https://cms.law/en/deu/publication/public-takeovers-in-germany' },
      { label: 'Accountancy Age — Vodafone asset write-down (FY2006 impairment)', url: 'https://www.accountancyage.com/aa/news/1778064/asset-write-scuppers-vodafones-profits' }
    ],
    reviewed: '2026-10'
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'aol-time-warner',
    title: { en: 'AOL / Time Warner', it: 'AOL / Time Warner' },
    buyer: 'America Online (AOL)',
    target: 'Time Warner',
    sector: 'media',
    tags: ['us', 'stock-deal', 'failed'],
    announced: '2000-01-10',
    closedOrEnded: '2001-01-11',
    status: 'completed',
    value: {
      en: '≈$165bn all-stock equity value at announcement (≈$182bn including Time Warner’s debt): 1.5 AOL Time Warner shares per Time Warner share, 1 per AOL share; former AOL holders owned ≈55%.',
      it: '≈$165mld di equity value tutto in azioni all’annuncio (≈$182mld includendo il debito di Time Warner): 1,5 azioni AOL Time Warner per azione Time Warner, 1 per azione AOL; gli ex azionisti AOL detenevano ≈55%.'
    },
    rationale: {
      en: 'The “old media meets new media” thesis: combine AOL’s internet subscribers with Time Warner’s content (CNN, Warner Bros., HBO, magazines) and cable network, which was expected to carry broadband internet.',
      it: 'La tesi “old media incontra new media”: unire gli abbonati internet di AOL con i contenuti di Time Warner (CNN, Warner Bros., HBO, riviste) e la sua rete via cavo, destinata a veicolare internet a banda larga.'
    },
    valuation: {
      en: 'AOL, the smaller business by revenue and cash flow, used its dot-com-era share price as currency to acquire a much larger company. The exchange ratio embedded a large premium for Time Warner holders — and an enormous valuation for AOL that the dot-com crash soon erased.',
      it: 'AOL, business più piccolo per ricavi e flussi di cassa, usò come moneta il proprio prezzo azionario da bolla dot-com per acquisire una società molto più grande. Il rapporto di cambio incorporava un ampio premio per gli azionisti Time Warner — e una valutazione enorme di AOL che il crollo delle dot-com cancellò presto.'
    },
    financing: {
      en: 'No cash: all-stock merger into a new holding company, AOL Time Warner.',
      it: 'Nessun contante: fusione tutta in azioni in una nuova holding, AOL Time Warner.'
    },
    structure: {
      en: 'Both companies became subsidiaries of the new AOL Time Warner Inc.; AOL’s shareholders held the majority, so AOL was the acquirer for accounting purposes.',
      it: 'Entrambe le società divennero controllate della nuova AOL Time Warner Inc.; gli azionisti AOL avevano la maggioranza, quindi AOL era l’acquirente contabile.'
    },
    regulatory: {
      en: 'The **FTC** cleared it in December 2000 with a consent decree requiring open access for rival ISPs on Time Warner cable; the **FCC** gave conditional approval on 11 January 2001, the day the merger closed. The **European Commission** had cleared it on 11 October 2000 on condition that AOL sever its structural links with Bertelsmann (music-rights concerns).',
      it: 'La **FTC** l’autorizzò a dicembre 2000 con un consent decree che imponeva l’accesso aperto agli ISP concorrenti sulla rete via cavo Time Warner; la **FCC** diede l’approvazione condizionata l’11 gennaio 2001, giorno del closing. La **Commissione europea** l’aveva autorizzata l’11 ottobre 2000 a condizione che AOL recidesse i legami strutturali con Bertelsmann (timori sui diritti musicali).'
    },
    outcome: {
      en: 'The dot-com crash, dial-up decline and cultural clashes destroyed value. In 2002 the company reported a net loss of ≈$98.7bn, including a $54bn first-quarter goodwill charge on adopting SFAS 142 and a further ≈$45.5bn impairment of goodwill and intangibles. It dropped “AOL” from its name in 2003, and spun off AOL in 2009.',
      it: 'Il crollo delle dot-com, il declino del dial-up e lo scontro culturale distrussero valore. Nel 2002 la società riportò una perdita netta di ≈$98,7mld, inclusi un onere di $54mld sull’avviamento nel primo trimestre all’adozione dello SFAS 142 e un ulteriore impairment di ≈$45,5mld su avviamento e immateriali. Nel 2003 tolse “AOL” dal nome e nel 2009 scorporò AOL.'
    },
    accounting: {
      en: 'Goodwill was measured using AOL’s high share price. When SFAS 142 (2002) replaced goodwill amortisation with impairment testing, the transitional impairment was booked as the cumulative effect of a change in accounting principle — below operating income, but a massive hit to equity. Non-cash, yet a clear admission of overpayment.',
      it: 'L’avviamento fu misurato al prezzo elevato delle azioni AOL. Quando lo SFAS 142 (2002) sostituì l’ammortamento dell’avviamento con l’impairment test, la svalutazione di transizione fu rilevata come effetto cumulativo di un cambiamento di principio contabile — sotto il risultato operativo, ma con un impatto enorme sul patrimonio netto. Non monetaria, ma una chiara ammissione di aver pagato troppo.'
    },
    interviewLessons: [
      { en: 'Inflated acquirer stock is cheap currency only until the market re-rates it; target holders who received it bore the loss.', it: 'Le azioni sopravvalutate dell’acquirente sono moneta a buon mercato solo fino al re-rating; gli azionisti del target che le ricevettero subirono la perdita.' },
      { en: 'Goodwill impairments are non-cash but signal value destruction — be able to explain where they hit the statements.', it: 'Gli impairment dell’avviamento sono non monetari ma segnalano distruzione di valore — saper spiegare dove impattano sui prospetti.' },
      { en: 'Strategic “convergence” stories need concrete synergies and integration plans.', it: 'Le storie di “convergenza” strategica richiedono sinergie concrete e piani d’integrazione.' }
    ],
    questions: [
      {
        id: 'case-aol-time-warner-q1',
        kind: 'mcq',
        topic: 'impairment',
        difficulty: 2,
        objective: { en: 'Explain how a goodwill impairment affects the financial statements.', it: 'Spiegare come un impairment dell’avviamento incide sui prospetti.' },
        prompt: { en: 'What was the direct cash effect of AOL Time Warner’s $54bn goodwill charge in 2002?', it: 'Qual è stato l’effetto diretto sulla cassa dell’onere di $54mld sull’avviamento di AOL Time Warner nel 2002?' },
        choices: [
          { en: 'Cash fell by $54bn', it: 'La cassa è diminuita di $54mld' },
          { en: 'Cash fell by $54bn × (1 − tax rate)', it: 'La cassa è diminuita di $54mld × (1 − aliquota)' },
          { en: 'None: it is a non-cash charge that reduces assets and equity', it: 'Nessuno: è un onere non monetario che riduce attività e patrimonio netto' },
          { en: 'Cash rose because of a tax refund equal to the charge', it: 'La cassa è aumentata per un rimborso fiscale pari all’onere' }
        ],
        correct: 2,
        explanation: { en: 'Impairment reduces goodwill (asset) and equity via the income statement, then is added back in the cash flow statement. The cash was “lost” in 2001 when the deal was paid — here in shares. Goodwill impairment is generally not tax-deductible, so no matching tax refund.', it: 'L’impairment riduce l’avviamento (attività) e il patrimonio netto tramite il conto economico, poi viene ripreso nel rendiconto finanziario. Il valore era stato “perso” al momento del pagamento — qui in azioni. L’impairment dell’avviamento in genere non è deducibile, quindi nessun rimborso fiscale.' }
      },
      {
        id: 'case-aol-time-warner-q2',
        kind: 'numeric',
        topic: 'exchange-ratio',
        difficulty: 2,
        objective: { en: 'Compute target holders’ ownership in a stock merger.', it: 'Calcolare la quota dei soci del target in una fusione in azioni.' },
        prompt: { en: 'Hypothetical: an acquirer has 2,400m shares and issues 1,960m new shares to target holders. What percentage of the combined company do target holders own (%, 1 decimal)?', it: 'Ipotesi: un acquirente ha 2.400m di azioni ed emette 1.960m di nuove azioni ai soci del target. Quale percentuale della società combinata detengono i soci del target (%, 1 decimale)?' },
        answer: 45,
        unit: '%',
        tolerance: { abs: 0.1 },
        verify: { fn: 'ratio', args: [196000, 4360] },
        explanation: { en: '1,960 / (2,400 + 1,960) = 45.0% — close to the ≈45% Time Warner holders received in AOL Time Warner. Target ownership = new shares issued ÷ total post-deal shares.', it: '1.960 / (2.400 + 1.960) = 45,0% — vicino al ≈45% ricevuto dagli azionisti Time Warner in AOL Time Warner. Quota del target = nuove azioni emesse ÷ azioni totali post-deal.' }
      }
    ],
    sources: [
      { label: 'AOL Time Warner Form 8-K, Jan 2001 — completion, exchange ratios', url: 'https://www.sec.gov/Archives/edgar/data/0001105705/000095011701000063/0001.txt' },
      { label: 'CNN Money — AOL/Time Warner announcement ($164.75bn equity, $181.95bn incl. debt), 10 Jan 2000', url: 'https://money.cnn.com/2000/01/10/deals/aol_warner/' },
      { label: 'CNN Money — EU OKs AOL-Time Warner (Bertelsmann conditions), 11 Oct 2000', url: 'https://money.cnn.com/2000/10/11/deals/aol_time/index.htm' },
      { label: 'AOL Time Warner Form 10-K FY2002 — net loss, SFAS 142 cumulative effect and impairments', url: 'https://www.sec.gov/Archives/edgar/data/0001105705/000095014403004064/g81332e10vk.htm' }
    ],
    reviewed: '2026-10'
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'ge-honeywell',
    title: { en: 'GE / Honeywell', it: 'GE / Honeywell' },
    buyer: 'General Electric',
    target: 'Honeywell International',
    sector: 'industrials',
    tags: ['us', 'europe', 'regulatory', 'failed', 'stock-deal', 'cross-border'],
    announced: '2000-10-22',
    closedOrEnded: '2001-07-03',
    status: 'blocked',
    value: {
      en: '≈$45bn tax-free all-stock deal plus assumed debt: 1.055 GE shares per Honeywell share (per GE’s announcement).',
      it: '≈$45mld in azioni, operazione fiscalmente neutrale, più debito assunto: 1,055 azioni GE per azione Honeywell (secondo l’annuncio GE).'
    },
    rationale: {
      en: 'Combine GE’s aircraft engines (and GE Capital Aviation Services, GECAS — a major aircraft lessor) with Honeywell’s avionics and non-avionics aerospace systems, plus industrial businesses. GE moved in days after Honeywell had been in merger talks with United Technologies.',
      it: 'Unire i motori aeronautici di GE (e GE Capital Aviation Services, GECAS — grande società di leasing aeronautico) con l’avionica e i sistemi aerospaziali di Honeywell, oltre ai business industriali. GE si mosse pochi giorni dopo le trattative di fusione tra Honeywell e United Technologies.'
    },
    valuation: {
      en: 'GE’s bid pre-empted United Technologies. Deal protection included a 19.9% option on Honeywell stock and a $1.35bn termination fee in certain scenarios.',
      it: 'L’offerta di GE anticipò United Technologies. Le tutele includevano un’opzione sul 19,9% delle azioni Honeywell e una termination fee di $1,35mld in determinati scenari.'
    },
    financing: {
      en: 'All-stock; no external financing required.',
      it: 'Interamente in azioni; nessun finanziamento esterno necessario.'
    },
    structure: {
      en: 'Stock-for-stock merger in which Honeywell would have become a GE subsidiary, approved by Honeywell shareholders in January 2001 but conditional on antitrust clearances.',
      it: 'Fusione con scambio azionario in cui Honeywell sarebbe diventata controllata GE, approvata dagli azionisti Honeywell a gennaio 2001 ma condizionata alle autorizzazioni antitrust.'
    },
    regulatory: {
      en: 'The **US DOJ** cleared the deal subject to limited divestitures, but the **European Commission** prohibited it on **3 July 2001** — the first time a merger between two US companies cleared in the US was blocked by Brussels. The EC relied on horizontal overlaps and on vertical/conglomerate theories: GE’s financial strength and GECAS would allow it to bundle engines with Honeywell avionics and foreclose rivals. In December 2005 the Court of First Instance upheld the prohibition on horizontal grounds but found the bundling and conglomerate findings insufficiently proven.',
      it: 'Il **DOJ statunitense** autorizzò l’operazione con cessioni limitate, ma la **Commissione europea** la vietò il **3 luglio 2001** — la prima volta che una fusione tra due società USA, autorizzata negli USA, fu bloccata da Bruxelles. La CE si basò su sovrapposizioni orizzontali e su teorie verticali/conglomerali: la forza finanziaria di GE e GECAS avrebbero permesso di vendere in bundle motori e avionica Honeywell escludendo i concorrenti. A dicembre 2005 il Tribunale di primo grado confermò il divieto per motivi orizzontali ma ritenne non sufficientemente provate le conclusioni su bundling ed effetti conglomerali.'
    },
    outcome: {
      en: 'The deal was abandoned after the EC prohibition. Honeywell remained independent. The case triggered transatlantic debate on divergent merger standards and pushed the EU towards more economics-based merger review (2004 EU Merger Regulation reform).',
      it: 'L’operazione fu abbandonata dopo il divieto della CE. Honeywell rimase indipendente. Il caso innescò un dibattito transatlantico sulla divergenza degli standard antitrust e spinse l’UE verso un controllo delle concentrazioni più basato sull’analisi economica (riforma del Regolamento UE sulle concentrazioni del 2004).'
    },
    accounting: {
      en: 'No acquisition accounting since the deal never closed. Transaction costs incurred by the parties were expensed. In 2000–01, US GAAP still allowed pooling of interests for qualifying stock-for-stock mergers (abolished by SFAS 141 for deals initiated after June 2001).',
      it: 'Nessuna contabilizzazione dell’acquisizione perché l’operazione non si è mai chiusa. I costi di transazione sostenuti dalle parti sono stati spesati. Nel 2000–01 gli US GAAP consentivano ancora il pooling of interests per le fusioni azionarie che ne avevano i requisiti (abolito dallo SFAS 141 per le operazioni avviate dopo giugno 2001).'
    },
    interviewLessons: [
      { en: 'A deal needs clearance in every jurisdiction where turnover thresholds are met — even two US companies can be blocked in Brussels.', it: 'Un deal richiede l’autorizzazione in ogni giurisdizione in cui sono superate le soglie di fatturato — anche due società USA possono essere bloccate a Bruxelles.' },
      { en: 'Know the difference between horizontal, vertical and conglomerate theories of harm.', it: 'Conoscere la differenza tra teorie del danno orizzontali, verticali e conglomerali.' },
      { en: 'Regulatory risk should be priced in through termination fees and outside dates.', it: 'Il rischio regolamentare va prezzato con termination fee e termini ultimi (outside date).' }
    ],
    questions: [
      {
        id: 'case-ge-honeywell-q1',
        kind: 'mcq',
        topic: 'merger-control',
        difficulty: 2,
        objective: { en: 'Identify a conglomerate theory of harm.', it: 'Riconoscere una teoria del danno conglomerale.' },
        prompt: { en: 'The EC feared GE could offer airlines discounted packages of GE engines plus Honeywell avionics. What type of theory of harm is this?', it: 'La CE temeva che GE potesse offrire alle compagnie pacchetti scontati di motori GE e avionica Honeywell. Che tipo di teoria del danno è?' },
        choices: [
          { en: 'Horizontal — loss of direct competition between rivals', it: 'Orizzontale — perdita di concorrenza diretta tra rivali' },
          { en: 'Conglomerate — bundling of complementary products to foreclose rivals', it: 'Conglomerale — bundling di prodotti complementari per escludere i rivali' },
          { en: 'Coordinated effects — tacit collusion', it: 'Effetti coordinati — collusione tacita' },
          { en: 'Buyer power — monopsony', it: 'Potere d’acquisto — monopsonio' }
        ],
        correct: 1,
        explanation: { en: 'Engines and avionics are complements, not substitutes, so bundling concerns are conglomerate effects. The CFI later found the EC had not proven them, though the ban stood on horizontal overlaps (e.g. engines for large regional and corporate jets).', it: 'Motori e avionica sono complementari, non sostituti: le preoccupazioni di bundling sono effetti conglomerali. Il Tribunale ritenne poi che la CE non li avesse provati, anche se il divieto restò valido per le sovrapposizioni orizzontali (es. motori per grandi jet regionali e business jet).' }
      },
      {
        id: 'case-ge-honeywell-q2',
        kind: 'multi',
        topic: 'merger-control',
        difficulty: 2,
        objective: { en: 'Recall the regulatory path of GE/Honeywell.', it: 'Ricordare il percorso regolamentare di GE/Honeywell.' },
        prompt: { en: 'Which statements are correct? Select all that apply.', it: 'Quali affermazioni sono corrette? Seleziona tutte le risposte corrette.' },
        choices: [
          { en: 'The US DOJ cleared the deal subject to divestitures', it: 'Il DOJ statunitense autorizzò il deal con cessioni' },
          { en: 'The EC prohibited the merger on 3 July 2001', it: 'La CE vietò la concentrazione il 3 luglio 2001' },
          { en: 'The EU courts annulled the prohibition in 2005', it: 'I giudici UE annullarono il divieto nel 2005' },
          { en: 'GE and Honeywell completed the merger after appeal', it: 'GE e Honeywell completarono la fusione dopo il ricorso' }
        ],
        correct: [0, 1],
        explanation: { en: 'The CFI upheld the prohibition in December 2005 (while criticising parts of the reasoning), and the deal had long been abandoned. Appeals take years — far longer than any deal timetable.', it: 'Il Tribunale confermò il divieto a dicembre 2005 (pur criticando parte del ragionamento) e il deal era già stato abbandonato da tempo. I ricorsi durano anni — molto più di qualsiasi tempistica di un deal.' }
      }
    ],
    sources: [
      { label: 'GE Form 8-K, Oct 2000 — GE to acquire Honeywell ($45bn, 1.055 exchange ratio)', url: 'https://www.sec.gov/Archives/edgar/data/0000040545/000094787100000655/0001.txt' },
      { label: 'CNN Money — GE/Honeywell deal and United Technologies talks, 22 Oct 2000', url: 'https://money.cnn.com/2000/10/22/deals/honeywell_ge/index.htm' },
      { label: 'CURIA press release — Court of First Instance judgments T-209/01 and T-210/01, 14 Dec 2005', url: 'https://curia.europa.eu/jcms/jcms/P_27919/en' },
      { label: 'Mondaq — GE/Honeywell appeal analysis', url: 'https://mondaq.com/unitedstates/aviation/36852/gehoneywell-appeal-the-commission-wins-a-battle-but-did-it-lose-the-war' }
    ],
    reviewed: '2026-10'
  },
  /* ------------------------------------------------------------------ */
  {
    id: 'pfizer-allergan',
    title: { en: 'Pfizer / Allergan', it: 'Pfizer / Allergan' },
    buyer: 'Pfizer',
    target: 'Allergan plc',
    sector: 'healthcare',
    tags: ['us', 'europe', 'cross-border', 'stock-deal', 'failed', 'regulatory'],
    announced: '2015-11-23',
    closedOrEnded: '2016-04-06',
    status: 'terminated',
    value: {
      en: '≈$160bn, mostly stock (reported transaction value). Allergan holders were to receive 11.3 shares of the combined company per Allergan share — $363.63 per share based on Pfizer’s 20 Nov 2015 close of $32.18 — while Pfizer holders could elect up to ≈$12bn in cash in total; Pfizer holders expected to own ≈56%.',
      it: '≈$160mld, prevalentemente in azioni (valore della transazione riportato). Gli azionisti Allergan avrebbero ricevuto 11,3 azioni della società combinata per azione Allergan — $363,63 per azione in base alla chiusura Pfizer del 20 nov 2015 di $32,18 — mentre gli azionisti Pfizer potevano optare per contanti fino a ≈$12mld complessivi; quota attesa degli azionisti Pfizer ≈56%.'
    },
    rationale: {
      en: 'Scale and pipeline in pharma (Botox, aesthetics, eye care) and, critically, a **tax inversion**: the combined group would be domiciled in Ireland (renamed Pfizer plc), lowering Pfizer’s effective tax rate and giving access to cash held outside the US.',
      it: 'Scala e pipeline nel farmaceutico (Botox, estetica, oftalmologia) e, soprattutto, un’**inversione fiscale**: il gruppo combinato avrebbe avuto sede in Irlanda (rinominato Pfizer plc), riducendo l’aliquota effettiva di Pfizer e dando accesso alla liquidità detenuta fuori dagli USA.'
    },
    valuation: {
      en: 'Value relied heavily on after-tax synergies: the lower tax rate on the combined earnings was a key source of value creation, alongside cost savings. That made the deal uniquely exposed to a change in US tax rules.',
      it: 'Il valore dipendeva molto dalle sinergie al netto delle imposte: l’aliquota più bassa sugli utili combinati era una fonte chiave di creazione di valore, insieme ai risparmi di costo. Ciò rendeva il deal particolarmente esposto a un cambiamento delle regole fiscali USA.'
    },
    financing: {
      en: 'Predominantly new shares of the combined company; the cash election for Pfizer holders was funded from the companies’ resources. The merger agreement included a $3.5bn break fee, but also an “Adverse Tax Law Change” termination right.',
      it: 'Principalmente nuove azioni della società combinata; l’opzione cash per gli azionisti Pfizer era finanziata con risorse delle società. L’accordo prevedeva una break fee di $3,5mld, ma anche un diritto di recesso per “Adverse Tax Law Change”.'
    },
    structure: {
      en: 'Reverse merger: legally Allergan (Irish) was the surviving parent and a subsidiary merged into Pfizer, so Pfizer became a subsidiary of the Irish group. Economically Pfizer was the acquirer — its holders would own the majority — which is why US anti-inversion rules (IRC §7874 ownership tests) were central.',
      it: 'Reverse merger: giuridicamente Allergan (irlandese) sarebbe stata la capogruppo e una sua controllata si sarebbe fusa in Pfizer, che sarebbe diventata controllata del gruppo irlandese. Economicamente l’acquirente era Pfizer — i suoi azionisti avrebbero avuto la maggioranza — per questo le regole USA anti-inversione (test di partecipazione IRC §7874) erano centrali.'
    },
    regulatory: {
      en: 'Antitrust was not the obstacle. On 4 April 2016 the US Treasury and IRS issued temporary and proposed regulations against inversions; among other measures, they disregarded foreign-acquirer stock issued in recent acquisitions of US companies — and Allergan had grown through such acquisitions. That raised Pfizer holders’ deemed ownership and undermined the tax benefits.',
      it: 'L’antitrust non era l’ostacolo. Il 4 aprile 2016 il Tesoro USA e l’IRS emanarono regolamenti temporanei e proposti contro le inversioni; tra le misure, non si computavano le azioni dell’acquirente estero emesse in recenti acquisizioni di società USA — e Allergan era cresciuta proprio così. Ciò aumentava la quota “figurativa” degli azionisti Pfizer e svuotava i benefici fiscali.'
    },
    outcome: {
      en: 'Terminated by mutual agreement on 6 April 2016, two days after the Treasury action, which the parties treated as an “Adverse Tax Law Change”. Pfizer paid Allergan $150m as reimbursement of expenses instead of the $3.5bn break fee.',
      it: 'Risolto consensualmente il 6 aprile 2016, due giorni dopo l’intervento del Tesoro, qualificato dalle parti come “Adverse Tax Law Change”. Pfizer pagò ad Allergan $150m a titolo di rimborso spese invece della break fee di $3,5mld.'
    },
    accounting: {
      en: 'Had it closed, Pfizer would have been the accounting acquirer in a **reverse acquisition**: Allergan’s assets stepped up to fair value with goodwill, despite Allergan being the legal parent. On termination, Pfizer expensed the $150m reimbursement and its own deal costs.',
      it: 'In caso di closing, Pfizer sarebbe stata l’acquirente contabile in una **reverse acquisition**: le attività di Allergan rivalutate al fair value con avviamento, pur essendo Allergan la capogruppo legale. Alla risoluzione, Pfizer ha spesato i $150m di rimborso e i propri costi di transazione.'
    },
    interviewLessons: [
      { en: 'Distinguish legal acquirer from accounting acquirer — reverse mergers are common in inversions and SPAC deals.', it: 'Distinguere acquirente legale e acquirente contabile — le reverse merger sono frequenti in inversioni e SPAC.' },
      { en: 'Deals whose value depends on tax arbitrage carry policy risk; termination clauses allocate it.', it: 'I deal il cui valore dipende da arbitraggi fiscali portano rischio politico; le clausole di recesso lo allocano.' },
      { en: 'A break fee is not always payable: read the specific termination triggers.', it: 'La break fee non è sempre dovuta: leggere le specifiche cause di risoluzione.' }
    ],
    questions: [
      {
        id: 'case-pfizer-allergan-q1',
        kind: 'numeric',
        topic: 'exchange-ratio',
        difficulty: 1,
        objective: { en: 'Compute implied value per target share from an exchange ratio.', it: 'Calcolare il valore implicito per azione del target da un rapporto di cambio.' },
        prompt: { en: 'Allergan holders were to receive 11.3 shares per Allergan share. With Pfizer at $32.18, what was the implied value per Allergan share ($, 2 decimals)?', it: 'Gli azionisti Allergan avrebbero ricevuto 11,3 azioni per azione Allergan. Con Pfizer a $32,18, qual era il valore implicito per azione Allergan ($, 2 decimali)?' },
        answer: 363.63,
        unit: '$',
        tolerance: { abs: 0.05 },
        verify: { fn: 'product', args: [11.3, 32.18] },
        explanation: { en: '11.3 × 32.18 = $363.63 — the figure in Pfizer’s release. In a stock deal this value moves daily with the acquirer’s share price.', it: '11,3 × 32,18 = $363,63 — la cifra del comunicato Pfizer. In un deal in azioni questo valore varia ogni giorno con il prezzo dell’acquirente.' }
      },
      {
        id: 'case-pfizer-allergan-q2',
        kind: 'mcq',
        topic: 'deal-structure',
        difficulty: 3,
        objective: { en: 'Explain why the Treasury rules killed the deal.', it: 'Spiegare perché le regole del Tesoro fecero saltare il deal.' },
        prompt: { en: 'Why did the April 2016 Treasury rules hit Pfizer/Allergan in particular?', it: 'Perché le regole del Tesoro di aprile 2016 colpirono in particolare Pfizer/Allergan?' },
        choices: [
          { en: 'They banned all mergers between US and Irish companies', it: 'Vietavano tutte le fusioni tra società USA e irlandesi' },
          { en: 'They disregarded Allergan stock issued in recent US acquisitions, raising Pfizer holders’ deemed ownership and eroding the inversion benefits', it: 'Non computavano le azioni Allergan emesse in recenti acquisizioni USA, aumentando la quota figurativa degli azionisti Pfizer ed erodendo i benefici dell’inversione' },
          { en: 'They required antitrust review by the IRS', it: 'Richiedevano una revisione antitrust da parte dell’IRS' },
          { en: 'They forced Pfizer to pay the $3.5bn break fee', it: 'Obbligavano Pfizer a pagare la break fee di $3,5mld' }
        ],
        correct: 1,
        explanation: { en: 'Inversion rules test what share of the new parent former US-company holders own. Allergan’s size had been built by acquiring US companies for stock; ignoring that stock shrank Allergan’s side and pushed Pfizer’s holders into a range with fewer tax benefits. No merger ban; the IRS does no antitrust review; only $150m was paid.', it: 'Le regole anti-inversione verificano quale quota della nuova capogruppo detengono gli ex azionisti della società USA. Allergan era cresciuta acquisendo società USA con azioni; ignorare quelle azioni riduceva il lato Allergan e spingeva gli azionisti Pfizer in una fascia con meno benefici. Nessun divieto di fusione; l’IRS non fa antitrust; furono pagati solo $150m.' }
      },
      {
        id: 'case-pfizer-allergan-q3',
        kind: 'mcq',
        topic: 'purchase-accounting',
        difficulty: 2,
        objective: { en: 'Identify the accounting acquirer in a reverse merger.', it: 'Identificare l’acquirente contabile in una reverse merger.' },
        prompt: { en: 'In the planned structure, which company would have been the accounting acquirer?', it: 'Nella struttura prevista, quale società sarebbe stata l’acquirente contabile?' },
        choices: [
          { en: 'Allergan, because it was the legal parent', it: 'Allergan, perché capogruppo legale' },
          { en: 'Pfizer, because its holders would own the majority of the combined group', it: 'Pfizer, perché i suoi azionisti avrebbero detenuto la maggioranza del gruppo' },
          { en: 'Neither: a merger of equals uses pooling', it: 'Nessuna: una fusione alla pari usa il pooling' },
          { en: 'Whichever had the higher tax rate', it: 'Quella con l’aliquota fiscale più alta' }
        ],
        correct: 1,
        explanation: { en: 'Accounting follows substance: the entity whose owners obtain control is the acquirer (ASC 805 / IFRS 3), so Pfizer — a reverse acquisition. Pooling of interests was abolished in the US in 2001; tax rates are irrelevant.', it: 'La contabilità segue la sostanza: l’acquirente è l’entità i cui soci ottengono il controllo (ASC 805 / IFRS 3), quindi Pfizer — una reverse acquisition. Il pooling of interests è stato abolito negli USA nel 2001; le aliquote sono irrilevanti.' }
      }
    ],
    sources: [
      { label: 'Pfizer Form 8-K — Pfizer/Allergan merger release (11.3 ratio, $363.63/share), 23 Nov 2015', url: 'https://www.sec.gov/Archives/edgar/data/0000078003/000119312515384494/d33371dex992.htm' },
      { label: 'Pharmacy Times — Pfizer and Allergan to merge (56% ownership, Pfizer plc in Ireland)', url: 'https://www.pharmacytimes.com/view/pfizer-and-allergan-to-merge' },
      { label: 'BioPharma Dive — Pfizer calls off $160bn merger with Allergan ($150m reimbursement), Apr 2016', url: 'https://www.biopharmadive.com/news/pfizer-calls-off-160-billion-merger-with-allergan/416924/' },
      { label: 'PharmTech — Pfizer and Allergan terminate merger agreement (Treasury/IRS 4 Apr 2016 regulations)', url: 'https://www.pharmtech.com/pfizer-and-allergan-terminate-merger-agreement-0' }
    ],
    reviewed: '2026-10'
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'adobe-figma',
    title: { en: 'Adobe / Figma', it: 'Adobe / Figma' },
    buyer: 'Adobe',
    target: 'Figma',
    sector: 'technology',
    tags: ['us', 'regulatory', 'failed', 'cash-deal', 'stock-deal'],
    announced: '2022-09-15',
    closedOrEnded: '2023-12-18',
    status: 'terminated',
    value: {
      en: '≈$20bn, approximately half cash and half Adobe stock (plus ≈6m restricted stock units for Figma’s CEO and employees), per Adobe’s announcement.',
      it: '≈$20mld, circa metà in contanti e metà in azioni Adobe (più ≈6m di restricted stock unit per CEO e dipendenti di Figma), secondo l’annuncio Adobe.'
    },
    rationale: {
      en: 'Figma’s browser-based, collaborative interface-design tool was winning designers and developers — a direct challenge to Adobe’s Creative Cloud (Adobe XD). Adobe pitched the deal as accelerating collaborative creativity.',
      it: 'Lo strumento di interface design collaborativo e basato su browser di Figma stava conquistando designer e sviluppatori — una sfida diretta alla Creative Cloud di Adobe (Adobe XD). Adobe presentò il deal come un acceleratore della creatività collaborativa.'
    },
    valuation: {
      en: 'Figma was expected to exit 2022 with more than $400m of ARR (about $200m net new ARR that year), so $20bn was about 50× ARR — roughly double Figma’s $10bn private valuation of 2021. Adobe’s shares fell sharply (≈17%) on the announcement day.',
      it: 'Figma prevedeva di chiudere il 2022 con oltre $400m di ARR (circa $200m di nuovo ARR netto nell’anno), quindi $20mld equivalevano a circa 50× l’ARR — circa il doppio della valutazione privata di $10mld del 2021. Il titolo Adobe scese bruscamente (≈17%) il giorno dell’annuncio.'
    },
    financing: {
      en: 'Cash half funded from cash on hand and, if needed, a term loan; stock half via new Adobe shares. A $1bn reverse termination fee was payable by Adobe if regulatory approvals were not obtained.',
      it: 'Metà cash finanziata con liquidità disponibile e, se necessario, un term loan; metà in nuove azioni Adobe. Una reverse termination fee di $1mld era dovuta da Adobe in caso di mancate autorizzazioni regolamentari.'
    },
    structure: {
      en: 'Acquisition of a private, venture-backed company by merger; required Figma shareholder approval and regulatory clearances in the US, UK and EU.',
      it: 'Acquisizione per fusione di una società privata finanziata da venture capital; richiedeva l’approvazione degli azionisti Figma e autorizzazioni regolamentari in USA, UK e UE.'
    },
    regulatory: {
      en: 'Both the **CMA** and the **European Commission** opened in-depth (Phase 2) investigations. The CMA’s provisional findings of 28 November 2023 concluded the deal could harm innovation and remove Figma as a competitor in product design and as a potential challenger in Adobe’s core image-editing and illustration markets, signalling remedies could include blocking it; Adobe rejected divesting assets. The US DOJ was also reviewing the deal. The theory of harm centred on **loss of potential/dynamic competition**, not market-share overlap.',
      it: 'Sia la **CMA** sia la **Commissione europea** avviarono indagini approfondite (Fase 2). Le conclusioni provvisorie della CMA del 28 novembre 2023 ritenevano che il deal potesse danneggiare l’innovazione ed eliminare Figma come concorrente nel product design e come potenziale sfidante nei mercati core di Adobe (fotoritocco e illustrazione), lasciando intendere che il rimedio poteva essere il divieto; Adobe rifiutò di cedere asset. Anche il DOJ statunitense stava esaminando l’operazione. La teoria del danno era la **perdita di concorrenza potenziale/dinamica**, non la sovrapposizione di quote di mercato.'
    },
    outcome: {
      en: 'Terminated on 18 December 2023, citing “no clear path” to EU and UK approvals; Adobe paid Figma the $1bn reverse termination fee. Figma stayed independent and listed on the NYSE on 31 July 2025 at $33 per share.',
      it: 'Risolto il 18 dicembre 2023 per “nessuna strada chiara” verso le autorizzazioni UE e UK; Adobe pagò a Figma la reverse termination fee di $1mld. Figma è rimasta indipendente e si è quotata al NYSE il 31 luglio 2025 a $33 per azione.'
    },
    accounting: {
      en: 'No business combination was recognised. Adobe expensed the $1bn termination fee and deal costs in its income statement (a non-recurring item analysts typically exclude from adjusted earnings); for Figma, the fee was a one-off gain and a large cash inflow.',
      it: 'Nessuna aggregazione aziendale rilevata. Adobe ha spesato a conto economico la termination fee di $1mld e i costi del deal (voce non ricorrente che gli analisti di solito escludono dagli utili rettificati); per Figma la fee è stata un provento straordinario e un forte incasso.'
    },
    interviewLessons: [
      { en: 'Regulators now challenge acquisitions of nascent or potential competitors (“killer acquisition” concerns), even without large market-share overlap.', it: 'I regolatori contestano ormai le acquisizioni di concorrenti nascenti o potenziali (timori di “killer acquisition”), anche senza grandi sovrapposizioni di quote.' },
      { en: 'A reverse termination fee prices regulatory risk: here 5% of deal value.', it: 'Una reverse termination fee prezza il rischio regolamentare: qui il 5% del valore del deal.' },
      { en: 'High ARR multiples need a strategic (defensive) rationale — and the market may punish the acquirer.', it: 'Multipli elevati sull’ARR richiedono una logica strategica (difensiva) — e il mercato può punire l’acquirente.' }
    ],
    questions: [
      {
        id: 'case-adobe-figma-q1',
        kind: 'numeric',
        topic: 'valuation-multiples',
        difficulty: 1,
        objective: { en: 'Compute an ARR multiple.', it: 'Calcolare un multiplo sull’ARR.' },
        prompt: { en: 'Adobe offered ≈$20,000m for Figma, which expected ≈$400m of ARR. What EV/ARR multiple is that (x)?', it: 'Adobe offrì ≈$20.000m per Figma, che prevedeva ≈$400m di ARR. Qual è il multiplo EV/ARR (x)?' },
        answer: 50,
        unit: 'x',
        tolerance: { abs: 0.1 },
        verify: { fn: 'ratio', args: [20000, 400] },
        explanation: { en: '20,000 / 400 = 50×. For high-growth SaaS, revenue/ARR multiples replace EBITDA multiples, but 50× implied very aggressive growth and strategic value assumptions.', it: '20.000 / 400 = 50×. Per il SaaS ad alta crescita i multipli su ricavi/ARR sostituiscono quelli su EBITDA, ma 50× implicava ipotesi molto aggressive di crescita e valore strategico.' }
      },
      {
        id: 'case-adobe-figma-q2',
        kind: 'mcq',
        topic: 'merger-control',
        difficulty: 2,
        objective: { en: 'Identify the theory of harm.', it: 'Identificare la teoria del danno.' },
        prompt: { en: 'What was the core competition concern of the CMA and EC?', it: 'Qual era la preoccupazione antitrust principale di CMA e CE?' },
        choices: [
          { en: 'Adobe and Figma had a combined 90% share of PDF software', it: 'Adobe e Figma avevano una quota combinata del 90% nel software PDF' },
          { en: 'Elimination of Figma as a current and potential competitor, reducing innovation in design software', it: 'L’eliminazione di Figma come concorrente attuale e potenziale, riducendo l’innovazione nel software di design' },
          { en: 'Vertical foreclosure of chip suppliers', it: 'Preclusione verticale dei fornitori di chip' },
          { en: 'Excessive debt financing', it: 'Eccessivo finanziamento a debito' }
        ],
        correct: 1,
        explanation: { en: 'The concern was dynamic: Figma was a fast-growing rival and potential entrant into Adobe’s core markets; buying it could remove future competition. PDF and chips were not at issue, and financing structure is not an antitrust concern.', it: 'La preoccupazione era dinamica: Figma era un rivale in rapida crescita e potenziale entrante nei mercati core di Adobe; acquisirlo poteva eliminare la concorrenza futura. PDF e chip non erano in discussione e la struttura finanziaria non è un tema antitrust.' }
      },
      {
        id: 'case-adobe-figma-q3',
        kind: 'numeric',
        topic: 'deal-protection',
        difficulty: 1,
        objective: { en: 'Size a reverse termination fee.', it: 'Dimensionare una reverse termination fee.' },
        prompt: { en: 'Adobe’s reverse termination fee was $1bn on a ≈$20bn deal. What percentage of deal value is that (%)?', it: 'La reverse termination fee di Adobe era $1mld su un deal di ≈$20mld. Quale percentuale del valore rappresenta (%)?' },
        answer: 5,
        unit: '%',
        tolerance: { abs: 0.05 },
        verify: { fn: 'ratio', args: [100, 20] },
        explanation: { en: '1 / 20 = 5%. Reverse fees compensate the target for being “frozen” during a long review and signal the buyer’s confidence in clearance.', it: '1 / 20 = 5%. Le reverse fee compensano il target per l’“immobilizzo” durante una lunga istruttoria e segnalano la fiducia del compratore nell’autorizzazione.' }
      }
    ],
    sources: [
      { label: 'Fox Business — Adobe to buy Figma for $20bn (cash/stock mix, ARR, financing), 15 Sep 2022', url: 'https://foxbusiness.com/markets/adobe-buy-collaborative-design-platform-figma-20b' },
      { label: 'CMA — Adobe / Figma merger inquiry (case page and provisional findings, 28 Nov 2023)', url: 'https://www.gov.uk/cma-cases/adobe-slash-figma-merger-inquiry' },
      { label: 'Willkie Farr — Adobe and Figma abandon merger citing regulatory hurdles, 19 Dec 2023', url: 'https://complianceconcourse.willkie.com/articles/adobe-and-figma-abandon-merger-citing-regulatory-hurdles/' },
      { label: 'Figma — Announces pricing of initial public offering ($33/share), Jul 2025', url: 'https://www.figma.com/blog/ipo-pricing/' }
    ],
    reviewed: '2026-10'
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'broadcom-qualcomm',
    title: { en: 'Broadcom / Qualcomm', it: 'Broadcom / Qualcomm' },
    buyer: 'Broadcom',
    target: 'Qualcomm',
    sector: 'technology',
    tags: ['hostile', 'regulatory', 'failed', 'cross-border', 'us'],
    announced: '2017-11-06',
    closedOrEnded: '2018-03-12',
    status: 'blocked',
    value: {
      en: 'Unsolicited proposal of $70.00 per share ($60 cash + $10 in Broadcom shares), ≈$130bn including ≈$25bn of net debt (pro forma for Qualcomm’s pending NXP deal); raised in Feb 2018 to a “best and final” $82.00 per share ($60 cash + $22 stock), ≈$121bn.',
      it: 'Proposta non sollecitata di $70,00 per azione ($60 in contanti + $10 in azioni Broadcom), ≈$130mld includendo ≈$25mld di debito netto (pro forma per l’operazione NXP di Qualcomm in corso); aumentata a febbraio 2018 a un’offerta “best and final” di $82,00 per azione ($60 cash + $22 in azioni), ≈$121mld.'
    },
    rationale: {
      en: 'Create a dominant communications-chip company combining Broadcom’s connectivity/networking chips with Qualcomm’s mobile processors, modems and patent-licensing business; Broadcom’s model emphasised aggressive cost discipline and margin expansion.',
      it: 'Creare un gruppo dominante nei chip per comunicazioni unendo i chip di connettività/networking di Broadcom con processori mobili, modem e licenze brevettuali di Qualcomm; il modello Broadcom puntava su rigida disciplina dei costi ed espansione dei margini.'
    },
    valuation: {
      en: 'The $70 offer was a 28% premium to Qualcomm’s 2 November 2017 close; Qualcomm’s board said it significantly undervalued the company. The $82 offer (≈17% higher) was conditional on Qualcomm either completing NXP at $110 per share or terminating that deal.',
      it: 'L’offerta da $70 era un premio del 28% sulla chiusura di Qualcomm del 2 novembre 2017; il CdA Qualcomm la ritenne fortemente sottovalutante. L’offerta da $82 (≈17% in più) era condizionata al completamento di NXP da parte di Qualcomm a $110 per azione o alla rinuncia a quell’operazione.'
    },
    financing: {
      en: 'Mostly debt-funded cash: committed bank financing plus a $5bn convertible-debt commitment from Silver Lake; Broadcom stated there was no financing condition. The stock component used new Broadcom shares.',
      it: 'Contanti finanziati prevalentemente a debito: finanziamenti bancari impegnati più un impegno di $5mld in debito convertibile da Silver Lake; Broadcom dichiarò l’assenza di condizioni di finanziamento. La componente azionaria usava nuove azioni Broadcom.'
    },
    structure: {
      en: 'Hostile approach combined with a **proxy fight**: Broadcom nominated a slate of directors to replace Qualcomm’s board at the March 2018 annual meeting. Broadcom, then domiciled in Singapore, had announced plans to redomicile to the US.',
      it: 'Approccio ostile combinato con una **proxy fight**: Broadcom candidò una lista di amministratori per sostituire il CdA di Qualcomm all’assemblea di marzo 2018. Broadcom, allora con sede a Singapore, aveva annunciato il trasferimento della sede negli USA.'
    },
    regulatory: {
      en: '**CFIUS** reviewed the bid before any agreement existed — unusually — and ordered Qualcomm to postpone its annual meeting. Its concern was national security: a cost-focused owner could cut Qualcomm’s R&D and weaken US leadership in 5G standards relative to Chinese rivals (notably Huawei). On **12 March 2018** President Trump issued an order under the Defense Production Act prohibiting the takeover and disqualifying Broadcom’s board nominees.',
      it: 'Il **CFIUS** esaminò l’offerta prima che esistesse un accordo — fatto insolito — e ordinò a Qualcomm di rinviare l’assemblea. La preoccupazione era di sicurezza nazionale: un proprietario focalizzato sui costi avrebbe potuto tagliare la R&S di Qualcomm e indebolire la leadership USA negli standard 5G rispetto ai rivali cinesi (in particolare Huawei). Il **12 marzo 2018** il presidente Trump emanò un ordine ai sensi del Defense Production Act che vietava l’acquisizione ed escludeva i candidati di Broadcom.'
    },
    outcome: {
      en: 'Broadcom withdrew its offer and proxy slate days after the order. It completed its redomiciliation to the US later in 2018 and pursued software acquisitions instead (e.g. CA Technologies, VMware). Qualcomm’s NXP deal was later abandoned in July 2018 after failing to obtain Chinese approval.',
      it: 'Broadcom ritirò offerta e lista pochi giorni dopo l’ordine. Completò il trasferimento della sede negli USA più avanti nel 2018 e si orientò su acquisizioni nel software (es. CA Technologies, VMware). L’operazione Qualcomm–NXP fu poi abbandonata a luglio 2018 per il mancato via libera cinese.'
    },
    accounting: {
      en: 'No acquisition accounting. Had it closed, the deal would have created very large goodwill and acquired intangibles (patents, customer relationships), with significant amortisation and heavy leverage — a key reason analysts focused on Broadcom’s deleveraging capacity.',
      it: 'Nessuna contabilizzazione dell’acquisizione. In caso di closing, il deal avrebbe generato avviamento e immateriali acquisite (brevetti, relazioni con clienti) ingentissimi, con ammortamenti significativi e forte leva — motivo per cui gli analisti si concentravano sulla capacità di deleveraging di Broadcom.'
    },
    interviewLessons: [
      { en: 'Foreign-investment screening (CFIUS, EU FDI rules, Italy’s Golden Power) is a separate approval track from antitrust.', it: 'Il controllo sugli investimenti esteri (CFIUS, regole FDI UE, Golden Power italiano) è un percorso autorizzativo separato dall’antitrust.' },
      { en: 'Hostile tactics in the US: bear-hug letters, raised “best and final” offers and proxy fights for board control.', it: 'Tattiche ostili negli USA: bear-hug letter, rilanci “best and final” e proxy fight per il controllo del CdA.' },
      { en: 'Conditional offers (here on NXP) let a bidder protect its valuation from the target’s own M&A.', it: 'Le offerte condizionate (qui su NXP) permettono all’offerente di proteggere la propria valutazione dall’M&A del target.' }
    ],
    questions: [
      {
        id: 'case-broadcom-qualcomm-q1',
        kind: 'numeric',
        topic: 'deal-consideration',
        difficulty: 1,
        objective: { en: 'Compute the cash share of a revised offer.', it: 'Calcolare la quota cash di un’offerta rivista.' },
        prompt: { en: 'Broadcom’s $82.00 offer comprised $60.00 cash and $22.00 in stock. What percentage was cash (%, 1 decimal)?', it: 'L’offerta da $82,00 di Broadcom comprendeva $60,00 in contanti e $22,00 in azioni. Quale percentuale era in contanti (%, 1 decimale)?' },
        answer: 73.2,
        unit: '%',
        tolerance: { abs: 0.1 },
        verify: { fn: 'ratio', args: [6000, 82] },
        explanation: { en: '60 / 82 = 73.2%. Broadcom raised only the stock portion — preserving its debt capacity while giving Qualcomm holders more upside in the combined company.', it: '60 / 82 = 73,2%. Broadcom aumentò solo la parte in azioni — preservando la capacità di debito e dando agli azionisti Qualcomm più upside nella società combinata.' }
      },
      {
        id: 'case-broadcom-qualcomm-q2',
        kind: 'mcq',
        topic: 'fdi-screening',
        difficulty: 2,
        objective: { en: 'Explain the CFIUS rationale.', it: 'Spiegare la logica del CFIUS.' },
        prompt: { en: 'On what grounds was the takeover prohibited?', it: 'Per quali motivi fu vietata l’acquisizione?' },
        choices: [
          { en: 'Antitrust: combined share of smartphone modems', it: 'Antitrust: quota combinata nei modem per smartphone' },
          { en: 'National security: risk of reduced R&D weakening US 5G leadership vs Chinese competitors', it: 'Sicurezza nazionale: rischio di minore R&S e indebolimento della leadership USA nel 5G rispetto ai concorrenti cinesi' },
          { en: 'Securities law: misleading proxy materials', it: 'Diritto dei mercati: materiale di sollecitazione deleghe ingannevole' },
          { en: 'Tax: Broadcom’s Singapore domicile', it: 'Fiscale: la sede di Broadcom a Singapore' }
        ],
        correct: 1,
        explanation: { en: 'CFIUS and the presidential order relied on national-security grounds — the strategic importance of Qualcomm’s 5G technology and R&D. No antitrust decision was taken; domicile mattered for CFIUS jurisdiction, not as a tax issue.', it: 'CFIUS e l’ordine presidenziale si basarono sulla sicurezza nazionale — l’importanza strategica della tecnologia 5G e della R&S di Qualcomm. Nessuna decisione antitrust; la sede rilevava per la giurisdizione CFIUS, non come tema fiscale.' }
      }
    ],
    sources: [
      { label: 'Broadcom press release — Proposal to acquire Qualcomm for $70.00 per share (~$130bn), 6 Nov 2017 (via Design & Reuse)', url: 'https://design-reuse.com/news/43037/broadcom-qualcomm-acquisition.html' },
      { label: 'IPWatchdog — Broadcom “best and final” offer of $82/share (~$121bn), Feb 2018', url: 'https://ipwatchdog.com/2018/02/08/broadcom-best-final-offer-acquire-qualcomm/' },
      { label: 'MacRumors — Presidential order blocks Broadcom/Qualcomm, 12 Mar 2018', url: 'https://www.macrumors.com/2018/03/12/trump-blocks-broadcom-qualcomm-acquisition/' },
      { label: 'SecurityWeek — Trump blocks Broadcom’s bid to buy Qualcomm (CFIUS, Defense Production Act)', url: 'https://www.securityweek.com/trump-blocks-broadcoms-bid-buy-qualcomm' }
    ],
    reviewed: '2026-10'
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'fca-psa-stellantis',
    title: { en: 'FCA / PSA → Stellantis', it: 'FCA / PSA → Stellantis' },
    buyer: 'Fiat Chrysler Automobiles N.V. (legal acquirer)',
    target: 'Peugeot S.A. (Groupe PSA)',
    sector: 'automotive',
    tags: ['merger-of-equals', 'italy', 'europe', 'cross-border', 'stock-deal', 'regulatory'],
    announced: '2019-12-18',
    closedOrEnded: '2021-01-16',
    status: 'completed',
    value: {
      en: 'No-premium 50/50 all-share merger: 1.742 FCA shares per PSA share. Pre-closing, FCA paid its shareholders a special dividend of €1.84 per share (≈€2.9bn, cut from €5.5bn in the September 2020 amendment) to equalise values.',
      it: 'Fusione 50/50 interamente in azioni senza premio: 1,742 azioni FCA per azione PSA. Prima del closing FCA ha pagato ai propri azionisti un dividendo straordinario di €1,84 per azione (≈€2,9mld, ridotto da €5,5mld con la modifica di settembre 2020) per riequilibrare i valori.'
    },
    rationale: {
      en: 'Scale to fund electrification, software and autonomous driving: the 4th-largest OEM by units (8.7m vehicles, 2018 basis), with complementary geographies — FCA strong in North America (Jeep, Ram) and Latin America, PSA in Europe. Targeted ≈€3.7bn of annual run-rate synergies, with an estimated one-off cost of €2.8bn and no plant closures announced.',
      it: 'Scala per finanziare elettrificazione, software e guida autonoma: 4° costruttore per volumi (8,7m di veicoli, base 2018), con geografie complementari — FCA forte in Nord America (Jeep, Ram) e America Latina, PSA in Europa. Obiettivo di ≈€3,7mld di sinergie annue a regime, con un costo una tantum stimato di €2,8mld e nessuna chiusura di stabilimenti annunciata.'
    },
    valuation: {
      en: 'A merger of equals: relative contributions were balanced so each side’s shareholders owned 50%. Instead of a control premium, value adjustments were made through pre-closing distributions (FCA special dividend; PSA’s stake in Faurecia distributed to all Stellantis shareholders after closing).',
      it: 'Una fusione alla pari: i contributi relativi furono bilanciati in modo che gli azionisti di ciascuna parte detenessero il 50%. Invece di un premio di controllo, i valori furono riequilibrati con distribuzioni (dividendo straordinario FCA; la partecipazione PSA in Faurecia distribuita a tutti gli azionisti Stellantis dopo il closing).'
    },
    financing: {
      en: 'No acquisition financing: an all-share cross-border merger. The special dividend was paid from FCA’s own cash.',
      it: 'Nessun finanziamento d’acquisizione: fusione transfrontaliera interamente in azioni. Il dividendo straordinario fu pagato con la cassa di FCA.'
    },
    structure: {
      en: 'Cross-border merger of PSA into FCA N.V. (Dutch company), renamed **Stellantis N.V.** and listed in Milan, Paris and New York. Governance: 11-member board, five nominated by each side; John Elkann (Exor) as Chairman and Carlos Tavares as CEO. MoU announced 31 October 2019; binding combination agreement 18 December 2019.',
      it: 'Fusione transfrontaliera di PSA in FCA N.V. (società olandese), rinominata **Stellantis N.V.** e quotata a Milano, Parigi e New York. Governance: CdA di 11 membri, cinque designati da ciascuna parte; John Elkann (Exor) presidente e Carlos Tavares CEO. Intesa annunciata il 31 ottobre 2019; accordo vincolante il 18 dicembre 2019.'
    },
    regulatory: {
      en: 'The **European Commission** opened an in-depth investigation (concerns in small light commercial vans) and cleared the deal on 21 December 2020 subject to commitments: extending PSA’s LCV cooperation with Toyota (more capacity, lower transfer prices) and easier access for rivals to the repair networks. Shareholders of both companies approved on 4 January 2021.',
      it: 'La **Commissione europea** avviò un’indagine approfondita (criticità nei piccoli veicoli commerciali leggeri) e autorizzò l’operazione il 21 dicembre 2020 con impegni: estensione della cooperazione LCV tra PSA e Toyota (più capacità, prezzi di cessione più bassi) e accesso facilitato dei concorrenti alle reti di riparazione. Gli azionisti di entrambe le società approvarono il 4 gennaio 2021.'
    },
    outcome: {
      en: 'Completed in mid-January 2021 (effective 16 January; Stellantis shares began trading on 18 January). The Faurecia distribution was completed in March 2021. Stellantis now houses brands including Fiat, Chrysler, Jeep, Peugeot, Citroën, Opel, Alfa Romeo and Maserati.',
      it: 'Completata a metà gennaio 2021 (efficacia il 16 gennaio; le azioni Stellantis hanno iniziato a essere negoziate il 18 gennaio). La distribuzione Faurecia si è completata a marzo 2021. Stellantis riunisce oggi marchi come Fiat, Chrysler, Jeep, Peugeot, Citroën, Opel, Alfa Romeo e Maserati.'
    },
    accounting: {
      en: 'Although FCA was the **legal** acquirer (PSA merged into it), Stellantis concluded under IFRS 3 that **PSA was the accounting acquirer** — weighing board nominations, the CEO (Tavares) and other indicators — so the deal was a **reverse acquisition** with acquisition date 17 January 2021. FCA’s assets and liabilities were remeasured at fair value, generating goodwill, and Stellantis’s comparative financials are PSA’s history.',
      it: 'Sebbene FCA fosse l’acquirente **legale** (PSA si è fusa in essa), Stellantis ha concluso secondo l’IFRS 3 che **PSA era l’acquirente contabile** — considerando nomine nel CdA, il CEO (Tavares) e altri indicatori — quindi l’operazione è una **reverse acquisition** con data di acquisizione 17 gennaio 2021. Attività e passività di FCA sono state rimisurate al fair value, generando avviamento, e i dati comparativi di Stellantis sono la storia di PSA.'
    },
    interviewLessons: [
      { en: 'In a “merger of equals” IFRS 3 still requires identifying an acquirer — and it may not be the legal survivor.', it: 'In una “fusione alla pari” l’IFRS 3 richiede comunque di identificare un acquirente — che può non essere la società superstite.' },
      { en: 'Special dividends and spin-offs can equalise contributions without a cash premium.', it: 'Dividendi straordinari e spin-off possono riequilibrare i contributi senza un premio in contanti.' },
      { en: 'Italian-relevant deal: Exor’s role as anchor shareholder and the Milan listing; EU Phase 2 remedies can be behavioural/commercial (Toyota LCV deal).', it: 'Deal rilevante per l’Italia: il ruolo di Exor come azionista di riferimento e la quotazione a Milano; i rimedi UE di Fase 2 possono essere comportamentali/commerciali (accordo LCV con Toyota).' }
    ],
    questions: [
      {
        id: 'case-fca-psa-stellantis-q1',
        kind: 'mcq',
        topic: 'purchase-accounting',
        difficulty: 3,
        objective: { en: 'Apply IFRS 3 acquirer identification to a merger of equals.', it: 'Applicare l’identificazione dell’acquirente IFRS 3 a una fusione alla pari.' },
        prompt: { en: 'PSA merged into FCA N.V., which was renamed Stellantis. Who was the accounting acquirer under IFRS 3?', it: 'PSA si è fusa in FCA N.V., rinominata Stellantis. Chi era l’acquirente contabile secondo l’IFRS 3?' },
        choices: [
          { en: 'FCA, because it was the surviving legal entity', it: 'FCA, perché era l’entità giuridica superstite' },
          { en: 'PSA, based on IFRS 3 control indicators such as governance and senior management', it: 'PSA, sulla base degli indicatori di controllo IFRS 3 come governance e top management' },
          { en: 'None — 50/50 mergers are accounted for as pooling under IFRS', it: 'Nessuna — le fusioni 50/50 si contabilizzano con il pooling in IFRS' },
          { en: 'Exor, as the largest shareholder', it: 'Exor, in quanto primo azionista' }
        ],
        correct: 1,
        explanation: { en: 'IFRS 3 forbids pooling; with 50/50 ownership the other indicators (board, CEO, relative size, who issued shares) decide. Stellantis concluded PSA was the acquirer — a reverse acquisition. Exor is a shareholder, not a combining entity.', it: 'L’IFRS 3 vieta il pooling; con quote 50/50 decidono gli altri indicatori (CdA, CEO, dimensioni relative, chi emette azioni). Stellantis ha concluso che l’acquirente era PSA — una reverse acquisition. Exor è un azionista, non un’entità che si aggrega.' }
      },
      {
        id: 'case-fca-psa-stellantis-q2',
        kind: 'numeric',
        topic: 'synergies',
        difficulty: 3,
        objective: { en: 'Value run-rate synergies as a perpetuity.', it: 'Valutare le sinergie a regime come rendita perpetua.' },
        prompt: { en: 'Using the announced €3.7bn run-rate synergies and €2.8bn one-off cost, plus hypothetical assumptions of a 25% tax rate, 9% discount rate and no growth, what is the NPV of the synergies (€bn, 1 decimal)? (Ignores the phase-in period.)', it: 'Usando le sinergie a regime annunciate di €3,7mld e il costo una tantum di €2,8mld, con ipotesi di aliquota 25%, tasso di sconto 9% e crescita nulla, qual è il VAN delle sinergie (€mld, 1 decimale)? (Si ignora il periodo di avvio.)' },
        answer: 28.0,
        unit: '€bn',
        tolerance: { abs: 0.1 },
        verify: { fn: 'synergyValue', args: [3.7, 0.25, 0.09, 2.8] },
        steps: [
          { en: 'After-tax synergies = 3.7 × (1 − 25%) = 2.775', it: 'Sinergie nette d’imposta = 3,7 × (1 − 25%) = 2,775' },
          { en: 'Perpetuity value = 2.775 / 9% = 30.83; minus one-off costs 2.8 = 28.0', it: 'Valore perpetuo = 2,775 / 9% = 30,83; meno costi una tantum 2,8 = 28,0' }
        ],
        explanation: { en: 'NPV ≈ €28bn — in a no-premium merger of equals this value is shared 50/50 by both shareholder bases instead of being paid away as a control premium. Ignoring the 4-year phase-in overstates it.', it: 'VAN ≈ €28mld — in una fusione alla pari senza premio questo valore è condiviso 50/50 dalle due basi azionarie invece di essere pagato come premio di controllo. Ignorare la fase di avvio di 4 anni lo sovrastima.' }
      },
      {
        id: 'case-fca-psa-stellantis-q3',
        kind: 'numeric',
        topic: 'deal-structure',
        difficulty: 2,
        objective: { en: 'Back out a share count from a special dividend.', it: 'Ricavare il numero di azioni da un dividendo straordinario.' },
        prompt: { en: 'FCA paid a €1.84 per share special dividend totalling ≈€2,900m. Approximately how many FCA shares (m) does that imply?', it: 'FCA ha pagato un dividendo straordinario di €1,84 per azione per ≈€2.900m complessivi. Quante azioni FCA (m) implica approssimativamente?' },
        answer: 1576,
        unit: 'm',
        tolerance: { rel: 0.01 },
        verify: { fn: 'ratio', args: [2900, 1.84] },
        explanation: { en: '2,900 / 1.84 ≈ 1,576m shares. Interviewers like this sanity check: total distribution = DPS × shares outstanding.', it: '2.900 / 1,84 ≈ 1.576m di azioni. Ai colloqui piace questa verifica: distribuzione totale = DPS × azioni in circolazione.' }
      }
    ],
    sources: [
      { label: 'Groupe PSA / FCA joint release — plan to join forces (31 Oct 2019: 50/50, €3.7bn synergies, €2.8bn one-off cost)', url: 'https://www.forconstructionpros.com/equipment/trucks/pickup-trucks-vans/press-release/21095959/fiat-chrysler-automobiles-fca-us-llc-groupe-psa-and-fca-plan-to-join-forces-to-form-a-single-automotive-and-truck-manufacturer' },
      { label: 'European Commission — approval of FCA/PSA subject to conditions, 21 Dec 2020 (EEAS reproduction)', url: 'https://www.eeas.europa.eu/delegations/japan/mergers-commission-approves-merger-fiat-chrysler-automobiles-nv-and-peugeot-sa-subject-conditions_en' },
      { label: 'Stellantis N.V. Form 20-F FY2021 — reverse acquisition, PSA as accounting acquirer, €2.9bn special distribution, Faurecia', url: 'https://www.sec.gov/Archives/edgar/data/1605484/000160548422000023/stellantis-20211231.htm' },
      { label: 'Stellantis Semi-Annual Report H1 2021 — acquisition date 17 Jan 2021', url: 'https://www.sec.gov/Archives/edgar/data/1605484/000160548421000081/stellantisnv20210630semi-a.htm' }
    ],
    reviewed: '2026-10'
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'essilor-luxottica',
    title: { en: 'Essilor / Luxottica → EssilorLuxottica', it: 'Essilor / Luxottica → EssilorLuxottica' },
    buyer: 'Essilor International (renamed EssilorLuxottica)',
    target: 'Luxottica Group',
    sector: 'consumer',
    tags: ['merger-of-equals', 'italy', 'europe', 'cross-border', 'stock-deal'],
    announced: '2017-01-16',
    closedOrEnded: '2018-10-01',
    status: 'completed',
    value: {
      en: 'All-share combination at 0.461 Essilor shares per Luxottica share (adjusted to ≈0.4613 before closing), with no cash premium; press at announcement described a ≈€46bn combination. Delfin (the Del Vecchio holding) contributed its ≈62% Luxottica stake; Essilor issued ≈139.7m new shares at closing.',
      it: 'Combinazione interamente in azioni a 0,461 azioni Essilor per azione Luxottica (rettificato a ≈0,4613 prima del closing), senza premio in contanti; la stampa all’annuncio parlava di un’operazione da ≈€46mld. Delfin (holding di Del Vecchio) ha conferito la sua quota di ≈62% in Luxottica; Essilor ha emesso ≈139,7m di nuove azioni al closing.'
    },
    rationale: {
      en: 'Vertical integration of the eyewear value chain: Essilor (French, ophthalmic lenses) with Luxottica (Italian, frames and sunglasses — Ray-Ban, Oakley — and retail such as Sunglass Hut and LensCrafters). Goal: a global leader serving opticians and consumers, capturing revenue and cost synergies.',
      it: 'Integrazione verticale della filiera dell’occhialeria: Essilor (francese, lenti oftalmiche) con Luxottica (italiana, montature e occhiali da sole — Ray-Ban, Oakley — e retail come Sunglass Hut e LensCrafters). Obiettivo: un leader globale al servizio di ottici e consumatori, con sinergie di ricavo e di costo.'
    },
    valuation: {
      en: 'Structured as a combination of equals: the exchange ratio reflected relative market values, so Luxottica holders received no control premium. Governance balance (not price) was the key negotiation point.',
      it: 'Strutturata come combinazione alla pari: il rapporto di cambio rifletteva i valori di mercato relativi, quindi gli azionisti Luxottica non ricevettero un premio di controllo. Il nodo negoziale era l’equilibrio di governance, non il prezzo.'
    },
    financing: {
      en: 'No cash consideration: Delfin’s contribution in kind of Luxottica shares, followed by a mandatory exchange offer for the remaining Luxottica shares at the same ratio.',
      it: 'Nessun corrispettivo in contanti: conferimento in natura delle azioni Luxottica da parte di Delfin, seguito da un’OPS obbligatoria sulle restanti azioni Luxottica allo stesso rapporto.'
    },
    structure: {
      en: '- Delfin contributed its Luxottica stake to Essilor, which became the parent and was renamed **EssilorLuxottica** (listed on Euronext Paris from 2 October 2018).\n- Crossing the Italian mandatory-bid threshold triggered an **OPS obbligatoria** (from 11 October 2018) and then sell-out/squeeze-out procedures under the Italian TUF (arts. 108 and 111); Luxottica was delisted from Borsa Italiana on 5 March 2019.\n- Governance: Delfin’s voting rights capped at 31%; equal powers for Executive Chairman Leonardo Del Vecchio and Executive Vice-Chairman Hubert Sagnières for a transition period.',
      it: '- Delfin ha conferito la sua quota Luxottica a Essilor, divenuta capogruppo e rinominata **EssilorLuxottica** (quotata su Euronext Parigi dal 2 ottobre 2018).\n- Il superamento della soglia OPA italiana ha fatto scattare un’**OPS obbligatoria** (dall’11 ottobre 2018) e poi le procedure di obbligo e diritto di acquisto ai sensi del TUF (artt. 108 e 111); Luxottica è stata revocata da Borsa Italiana il 5 marzo 2019.\n- Governance: diritti di voto di Delfin limitati al 31%; poteri paritetici tra il Presidente esecutivo Leonardo Del Vecchio e il Vicepresidente esecutivo Hubert Sagnières per un periodo transitorio.'
    },
    regulatory: {
      en: 'The **European Commission** cleared it unconditionally on 1 March 2018 after an in-depth review (including a market test of nearly 4,000 opticians); the US FTC also cleared it unconditionally. China’s SAMR approved in July 2018 with behavioural commitments — the last condition precedent before closing on 1 October 2018.',
      it: 'La **Commissione europea** l’ha autorizzata senza condizioni il 1° marzo 2018 dopo un’indagine approfondita (con un market test su quasi 4.000 ottici); anche la FTC statunitense ha autorizzato senza condizioni. La SAMR cinese ha approvato a luglio 2018 con impegni comportamentali — l’ultima condizione sospensiva prima del closing del 1° ottobre 2018.'
    },
    outcome: {
      en: 'Completed on 1 October 2018. Governance tensions between the Italian and French sides surfaced publicly in 2019 before being settled; EssilorLuxottica later acquired GrandVision (2021). After Del Vecchio’s death in 2022, Francesco Milleri became Chairman and CEO; Delfin remains the largest shareholder (≈32% of shares, votes capped at 31%).',
      it: 'Completata il 1° ottobre 2018. Le tensioni di governance tra la parte italiana e quella francese sono emerse pubblicamente nel 2019 prima di essere composte; EssilorLuxottica ha poi acquisito GrandVision (2021). Dopo la scomparsa di Del Vecchio nel 2022, Francesco Milleri è diventato Presidente e CEO; Delfin resta il primo azionista (≈32% del capitale, voti limitati al 31%).'
    },
    accounting: {
      en: 'Accounted for as a business combination under IFRS 3, with Luxottica consolidated from 1 October 2018 and a purchase price allocation finalised in 2019 (restating 2018 comparatives). Because of the large step-ups and amortisation of acquired intangibles, the group emphasises “adjusted” figures; 2018 results were also shown pro forma.',
      it: 'Contabilizzata come aggregazione aziendale secondo l’IFRS 3, con Luxottica consolidata dal 1° ottobre 2018 e una PPA finalizzata nel 2019 (con riesposizione dei comparativi 2018). Per le ampie rivalutazioni e l’ammortamento delle immateriali acquisite, il gruppo enfatizza i dati “adjusted”; i risultati 2018 sono stati presentati anche pro forma.'
    },
    interviewLessons: [
      { en: 'Italian public-M&A mechanics: crossing the threshold triggers a mandatory offer; delisting requires sell-out/squeeze-out under the TUF.', it: 'Meccanica dell’M&A pubblico italiano: il superamento della soglia fa scattare l’OPA obbligatoria; il delisting richiede obbligo/diritto di acquisto ai sensi del TUF.' },
      { en: 'Mergers of equals trade price for governance — voting caps and parity rules can create later conflict.', it: 'Le fusioni alla pari scambiano prezzo con governance — tetti al voto e regole di parità possono generare conflitti in seguito.' },
      { en: 'Vertical mergers can be cleared unconditionally when foreclosure risk is low, but global deals need many jurisdictions (EU, US, China).', it: 'Le fusioni verticali possono essere autorizzate senza condizioni se il rischio di preclusione è basso, ma i deal globali richiedono molte giurisdizioni (UE, USA, Cina).' }
    ],
    questions: [
      {
        id: 'case-essilor-luxottica-q1',
        kind: 'numeric',
        topic: 'exchange-ratio',
        difficulty: 1,
        objective: { en: 'Value a target share from an exchange ratio.', it: 'Valutare un’azione del target da un rapporto di cambio.' },
        prompt: { en: 'Hypothetical: with the exchange ratio of 0.461 and Essilor shares at €110, what is each Luxottica share worth in the offer (€, 2 decimals)?', it: 'Ipotesi: con il rapporto di cambio di 0,461 e azioni Essilor a €110, quanto vale nell’offerta ciascuna azione Luxottica (€, 2 decimali)?' },
        answer: 50.71,
        unit: '€',
        tolerance: { abs: 0.05 },
        verify: { fn: 'product', args: [0.461, 110] },
        explanation: { en: '0.461 × 110 = €50.71. With a fixed ratio, Luxottica holders share in Essilor’s price movements both up and down.', it: '0,461 × 110 = €50,71. Con rapporto fisso, gli azionisti Luxottica partecipano ai movimenti del titolo Essilor sia al rialzo sia al ribasso.' }
      },
      {
        id: 'case-essilor-luxottica-q2',
        kind: 'order',
        topic: 'italian-takeover-law',
        difficulty: 2,
        objective: { en: 'Sequence the steps of the combination.', it: 'Ordinare le fasi della combinazione.' },
        prompt: { en: 'Put the steps of the EssilorLuxottica combination in chronological order.', it: 'Metti in ordine cronologico le fasi della combinazione EssilorLuxottica.' },
        items: [
          { en: 'Announcement of the agreement between Essilor and Delfin (Jan 2017)', it: 'Annuncio dell’accordo tra Essilor e Delfin (gen 2017)' },
          { en: 'Unconditional EU clearance (Mar 2018)', it: 'Autorizzazione UE senza condizioni (mar 2018)' },
          { en: 'Delfin contributes its Luxottica stake; Essilor renamed EssilorLuxottica (Oct 2018)', it: 'Delfin conferisce la quota Luxottica; Essilor rinominata EssilorLuxottica (ott 2018)' },
          { en: 'Mandatory exchange offer for remaining Luxottica shares (from Oct 2018)', it: 'OPS obbligatoria sulle restanti azioni Luxottica (da ott 2018)' },
          { en: 'Squeeze-out and delisting from Borsa Italiana (Mar 2019)', it: 'Squeeze-out e revoca da Borsa Italiana (mar 2019)' }
        ],
        explanation: { en: 'Signing → antitrust clearances → contribution (change of control) → mandatory offer triggered by crossing the threshold → squeeze-out/delisting once the bidder exceeds the TUF thresholds.', it: 'Signing → autorizzazioni antitrust → conferimento (cambio di controllo) → OPA obbligatoria per superamento soglia → squeeze-out/revoca una volta superate le soglie del TUF.' }
      },
      {
        id: 'case-essilor-luxottica-q3',
        kind: 'mcq',
        topic: 'governance',
        difficulty: 2,
        objective: { en: 'Explain a governance safeguard in a merger of equals.', it: 'Spiegare una tutela di governance in una fusione alla pari.' },
        prompt: { en: 'Why was Delfin’s voting right capped at 31% even though it held a larger share of EssilorLuxottica’s capital at closing?', it: 'Perché i diritti di voto di Delfin erano limitati al 31% pur detenendo una quota di capitale superiore al closing?' },
        choices: [
          { en: 'French law forbids any shareholder above 31%', it: 'La legge francese vieta a qualsiasi azionista di superare il 31%' },
          { en: 'To preserve the balance of a combination of equals and reassure the French side and minority shareholders', it: 'Per preservare l’equilibrio di una combinazione alla pari e rassicurare la parte francese e le minoranze' },
          { en: 'To qualify for pooling-of-interests accounting', it: 'Per poter applicare il pooling of interests' },
          { en: 'Because Delfin was paid partly in cash', it: 'Perché Delfin era stata pagata in parte in contanti' }
        ],
        correct: 1,
        explanation: { en: 'The cap was a negotiated governance protection, not a legal limit. Pooling does not exist under IFRS, and Delfin received only shares.', it: 'Il tetto era una tutela di governance negoziata, non un limite di legge. Il pooling non esiste in IFRS e Delfin ha ricevuto solo azioni.' }
      }
    ],
    sources: [
      { label: 'Essilor Form 425 — Essilor/Delfin announcement, 0.461 exchange ratio, 16 Jan 2017', url: 'https://www.sec.gov/Archives/edgar/data/857471/000090342317000020/ssilor425_0117.htm' },
      { label: 'Essilor Form 425 — key terms (Delfin 62.54% stake, 31% voting cap, governance)', url: 'https://www.sec.gov/Archives/edgar/data/1085922/000090342317000235/essilor425_key.htm' },
      { label: 'Yahoo Finance/Reuters — EU clears Essilor/Luxottica without conditions, 1 Mar 2018', url: 'https://finance.yahoo.com/news/eu-clears-merger-essilor-luxottica-105111508.html' },
      { label: 'mivision — China (SAMR) approves Essilor-Luxottica merger, Aug 2018', url: 'https://mivision.com.au/2018/08/china-approves-essilor-luxottica-merger/' },
      { label: 'MarketScreener — Luxottica: delisting of shares from the MTA (5 Mar 2019)', url: 'https://www.marketscreener.com/LUXOTTICA-GROUP-90830/news/Luxottica-DELISTING-OF-THE-LUXOTTICA-SHARES-FROM-THE-MTA-28114447/' }
    ],
    reviewed: '2026-10'
  }
];
