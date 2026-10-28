import { useEffect, useState } from 'react';
import type { L } from '../content/types';

/** Shape of public/data/news.json, produced by scripts/fetch-news.mjs (scheduled GitHub Action). */
export interface NewsItem {
  id: string;
  title: string;
  link: string;
  source: string;
  sourceHome: string;
  published: string; // ISO
  excerpt: string; // short excerpt from the feed's own description, attributed to the source
  category: NewsCategory;
  concepts: ConceptId[];
  lang: 'en' | 'it';
}
export interface NewsFile {
  generatedAt: string; // last successful run
  sources: { name: string; url: string; ok: boolean; count: number }[];
  items: NewsItem[];
}

export type NewsCategory = 'ma' | 'private-equity' | 'banking' | 'capital-markets' | 'equity-markets' | 'central-banks' | 'inflation' | 'macro' | 'earnings' | 'regulation';
export type ConceptId =
  | 'ev-equity' | 'multiples' | 'wacc' | 'leverage' | 'capital-structure' | 'ma-financing' | 'synergies' | 'accretion-dilution'
  | 'financial-statements' | 'antitrust' | 'lbo' | 'ipo' | 'bonds' | 'monetary-policy' | 'inflation' | 'fx' | 'takeover' | 'disclosure';

export const CATEGORY_LABEL: Record<NewsCategory, L> = {
  ma: { en: 'M&A', it: 'M&A' },
  'private-equity': { en: 'Private equity', it: 'Private equity' },
  banking: { en: 'Banking', it: 'Banche' },
  'capital-markets': { en: 'Capital markets', it: 'Mercati dei capitali' },
  'equity-markets': { en: 'Equity markets', it: 'Mercati azionari' },
  'central-banks': { en: 'Central banks', it: 'Banche centrali' },
  inflation: { en: 'Inflation', it: 'Inflazione' },
  macro: { en: 'Macro', it: 'Macroeconomia' },
  earnings: { en: 'Earnings', it: 'Risultati' },
  regulation: { en: 'Regulation', it: 'Regolamentazione' }
};

/** "Why it matters" — a category-level explanation (rule-based, transparent). */
export const CATEGORY_WHY: Record<NewsCategory, L> = {
  ma: { en: 'Deals like this are what M&A bankers run: strategic rationale, valuation, financing and regulatory approval all determine whether it closes and at what price.', it: 'Operazioni come questa sono il lavoro dei banker M&A: logica strategica, valutazione, finanziamento e autorizzazioni determinano se si chiude e a che prezzo.' },
  'private-equity': { en: 'Sponsor activity depends on financing conditions and exit markets; returns are driven by entry price, leverage, EBITDA growth and exit multiple.', it: "L'attività degli sponsor dipende dalle condizioni di finanziamento e dai mercati di uscita; i rendimenti dipendono da prezzo d'ingresso, leva, crescita dell'EBITDA e multiplo d'uscita." },
  banking: { en: 'Bank news affects deal flow, lending capacity and the fee pools that fund investment banking.', it: "Le notizie sulle banche influenzano il flusso di operazioni, la capacità di credito e i fee pool dell'investment banking." },
  'capital-markets': { en: 'Issuance windows open and close with market conditions — ECM and DCM teams time IPOs, follow-ons and bond deals around them.', it: 'Le finestre di emissione si aprono e chiudono con le condizioni di mercato — i team ECM e DCM programmano IPO, aumenti di capitale e bond di conseguenza.' },
  'equity-markets': { en: 'Share prices set trading multiples, which feed directly into comps valuations and the currency available for stock deals.', it: 'I prezzi delle azioni determinano i multipli di borsa, che alimentano le valutazioni per comparabili e la "moneta" per le operazioni in carta.' },
  'central-banks': { en: 'Policy rates move the risk-free rate and borrowing costs, which change WACC, DCF values, LBO debt capacity and bond prices.', it: 'I tassi di policy muovono il tasso privo di rischio e il costo del debito, che cambiano WACC, valori DCF, capacità di debito negli LBO e prezzi delle obbligazioni.' },
  inflation: { en: 'Inflation drives central bank decisions and nominal rates; it also affects margins, working capital and the growth assumptions in a model.', it: "L'inflazione guida le banche centrali e i tassi nominali; incide anche su margini, capitale circolante e ipotesi di crescita dei modelli." },
  macro: { en: 'Macro data shape earnings expectations, credit spreads and investor risk appetite — the backdrop for every valuation and financing decision.', it: "I dati macro determinano attese sugli utili, spread di credito e propensione al rischio — lo sfondo di ogni valutazione e decisione di finanziamento." },
  earnings: { en: 'Results update the numbers in every model: revenue growth, margins, EPS and guidance move multiples and credit metrics.', it: 'I risultati aggiornano i numeri di ogni modello: crescita dei ricavi, margini, EPS e guidance muovono multipli e metriche di credito.' },
  regulation: { en: 'Regulatory and enforcement actions set the rules for disclosure, takeovers and competition that every transaction must respect.', it: 'Le azioni regolamentari e di vigilanza fissano le regole su informativa, offerte pubbliche e concorrenza che ogni operazione deve rispettare.' }
};

export interface ConceptDef {
  name: L;
  explain: L;
  interview: L;
  lessons: string[]; // lesson stub ids to open / draw quiz questions from
}

export const CONCEPTS: Record<ConceptId, ConceptDef> = {
  'ev-equity': { name: { en: 'Enterprise vs equity value', it: 'Enterprise value vs equity value' }, explain: { en: 'A headline deal value can refer to equity value (what shareholders receive) or enterprise value (including net debt assumed). Always check which.', it: "Il valore di un'operazione può riferirsi all'equity value (ciò che ricevono gli azionisti) o all'enterprise value (incluso il debito netto assunto). Verifica sempre quale." }, interview: { en: '"The deal is quoted at $X — is that equity or enterprise value, and how would you bridge between them?"', it: '"L\'operazione vale $X — è equity o enterprise value, e come passeresti dall\'uno all\'altro?"' }, lessons: ['val-ev-equity', 'val-bridge'] },
  multiples: { name: { en: 'Valuation multiples', it: 'Multipli di valutazione' }, explain: { en: 'Compare the implied EV/EBITDA or P/E with peers and precedent deals to judge whether the price is full.', it: "Confronta l'EV/EBITDA o il P/E impliciti con comparabili e transazioni precedenti per capire se il prezzo è pieno." }, interview: { en: '"What multiple do you think was paid, and why might it be above trading comps?"', it: '"Che multiplo pensi sia stato pagato, e perché potrebbe essere sopra i comparabili di borsa?"' }, lessons: ['val-multiples', 'val-precedents'] },
  wacc: { name: { en: 'Discount rates & WACC', it: 'Tassi di sconto e WACC' }, explain: { en: 'Higher rates raise the cost of debt and equity, increasing WACC and lowering DCF valuations — especially for long-duration growth companies.', it: "Tassi più alti aumentano il costo di debito ed equity, alzando il WACC e riducendo le valutazioni DCF — soprattutto per le società growth." }, interview: { en: '"How does a rate hike affect a DCF valuation?"', it: '"Come incide un rialzo dei tassi su una valutazione DCF?"' }, lessons: ['cf-wacc', 'cf-capm'] },
  leverage: { name: { en: 'Financial leverage', it: 'Leva finanziaria' }, explain: { en: 'Debt magnifies equity returns and risk; lenders watch net debt/EBITDA and interest coverage.', it: 'Il debito amplifica rendimenti e rischio per gli azionisti; i finanziatori guardano PFN/EBITDA e copertura degli interessi.' }, interview: { en: '"What leverage can this business support, and what happens if EBITDA falls 20%?"', it: '"Quanta leva può sostenere questo business, e cosa succede se l\'EBITDA scende del 20%?"' }, lessons: ['cf-capital-structure', 'cf-credit-distress'] },
  'capital-structure': { name: { en: 'Capital structure', it: 'Struttura del capitale' }, explain: { en: 'The mix of debt and equity trades off tax shields against distress costs and flexibility.', it: 'Il mix di debito ed equity bilancia lo scudo fiscale con i costi di dissesto e la flessibilità.' }, interview: { en: '"Should this company issue debt or equity to fund growth?"', it: '"Questa società dovrebbe finanziare la crescita con debito o con equity?"' }, lessons: ['cf-capital-structure'] },
  'ma-financing': { name: { en: 'Deal financing', it: "Finanziamento dell'operazione" }, explain: { en: 'Cash from balance sheet, new debt or new shares — each has a different cost and impact on EPS, leverage and ownership.', it: 'Cassa disponibile, nuovo debito o nuove azioni — ognuno ha un costo e un impatto diverso su EPS, leva e azionariato.' }, interview: { en: '"Why might the buyer pay in stock rather than cash?"', it: '"Perché l\'acquirente potrebbe pagare in azioni invece che in contanti?"' }, lessons: ['ma-consideration', 'ma-sources-uses-fees'] },
  synergies: { name: { en: 'Synergies', it: 'Sinergie' }, explain: { en: 'Buyers justify premiums with cost and revenue synergies; cost synergies are more credible and faster to realise.', it: 'Gli acquirenti giustificano i premi con sinergie di costo e di ricavo; quelle di costo sono più credibili e rapide.' }, interview: { en: '"Which synergies are realistic here, and how would you value them?"', it: '"Quali sinergie sono realistiche qui, e come le valuteresti?"' }, lessons: ['ma-rationale-synergies', 'ma-synergy-modelling'] },
  'accretion-dilution': { name: { en: 'Accretion / dilution', it: 'Accrescimento / diluizione' }, explain: { en: "Whether the buyer's EPS rises or falls depends on the target's earnings versus the after-tax cost of the financing used.", it: "Che l'EPS dell'acquirente salga o scenda dipende dagli utili del target rispetto al costo netto del finanziamento." }, interview: { en: '"Is this deal likely accretive? Walk me through how you would check."', it: '"Questa operazione è probabilmente accrescitiva? Spiegami come lo verificheresti."' }, lessons: ['ma-accretion-dilution'] },
  'financial-statements': { name: { en: 'Financial statements', it: 'Prospetti di bilancio' }, explain: { en: 'Results flow through the income statement, balance sheet and cash flow statement — know how a change in one moves the others.', it: 'I risultati attraversano conto economico, stato patrimoniale e rendiconto finanziario — sai come una variazione si trasmette agli altri.' }, interview: { en: '"Revenue beat but cash flow missed — what could explain that?"', it: '"I ricavi hanno battuto le attese ma il cash flow no — cosa potrebbe spiegarlo?"' }, lessons: ['acc-linking-statements', 'acc-cash-flow-statement'] },
  antitrust: { name: { en: 'Antitrust review', it: 'Controllo antitrust' }, explain: { en: 'Competition authorities can clear, impose remedies on, or block deals; timing and risk are priced into deal terms.', it: 'Le autorità antitrust possono autorizzare, imporre rimedi o vietare operazioni; tempi e rischi si riflettono nei termini del deal.' }, interview: { en: '"What regulatory risks does this deal face and how would you mitigate them?"', it: '"Quali rischi regolamentari corre questa operazione e come li mitigheresti?"' }, lessons: ['ma-antitrust'] },
  lbo: { name: { en: 'Leveraged buyouts', it: 'Leveraged buyout' }, explain: { en: 'Sponsors fund acquisitions with significant debt; returns depend on entry/exit multiples, growth and debt paydown.', it: 'Gli sponsor finanziano le acquisizioni con molto debito; i rendimenti dipendono da multipli di entrata/uscita, crescita e rimborso del debito.' }, interview: { en: '"Is this a good LBO candidate? Why?"', it: '"È un buon candidato per un LBO? Perché?"' }, lessons: ['pe-lbo-intuition', 'pe-returns'] },
  ipo: { name: { en: 'IPOs & equity issuance', it: 'IPO ed emissioni azionarie' }, explain: { en: 'Companies list or raise equity when valuations and investor demand are strong; pricing balances proceeds against aftermarket performance.', it: 'Le società si quotano o raccolgono equity quando valutazioni e domanda sono forti; il prezzo bilancia incasso e andamento post-quotazione.' }, interview: { en: '"Why do IPOs tend to be underpriced?"', it: '"Perché le IPO tendono a essere sottoprezzate?"' }, lessons: ['cm-ipo', 'cm-follow-ons-rights'] },
  bonds: { name: { en: 'Bonds & credit', it: 'Obbligazioni e credito' }, explain: { en: 'Bond prices move inversely to yields; spreads reflect credit risk and market appetite.', it: 'I prezzi delle obbligazioni si muovono in senso opposto ai rendimenti; gli spread riflettono rischio di credito e appetito del mercato.' }, interview: { en: '"If yields rise 100bp, roughly what happens to a 7-duration bond?"', it: '"Se i rendimenti salgono di 100bp, cosa succede circa a un bond con duration 7?"' }, lessons: ['cm-bonds-basics', 'cm-duration-convexity'] },
  'monetary-policy': { name: { en: 'Monetary policy', it: 'Politica monetaria' }, explain: { en: 'Central banks set short-term rates and balance-sheet policy to meet their mandates; markets reprice the whole curve.', it: "Le banche centrali fissano i tassi a breve e la politica di bilancio per rispettare il mandato; i mercati riprezzano l'intera curva." }, interview: { en: '"What does a cut in policy rates mean for M&A activity?"', it: '"Cosa significa un taglio dei tassi per l\'attività di M&A?"' }, lessons: ['fm-rates-inflation'] },
  inflation: { name: { en: 'Inflation', it: 'Inflazione' }, explain: { en: 'Higher inflation pushes nominal rates up and squeezes margins of companies without pricing power.', it: "Un'inflazione più alta spinge in alto i tassi nominali e comprime i margini delle società senza potere di prezzo." }, interview: { en: '"Which sectors are most exposed to persistent inflation?"', it: '"Quali settori sono più esposti a un\'inflazione persistente?"' }, lessons: ['fm-rates-inflation'] },
  fx: { name: { en: 'Currencies', it: 'Valute' }, explain: { en: 'FX moves change the value of cross-border deals and of foreign earnings when translated.', it: "I movimenti dei cambi modificano il valore delle operazioni cross-border e degli utili esteri convertiti." }, interview: { en: '"How would a buyer hedge the currency risk of a cross-border acquisition?"', it: '"Come coprirebbe un acquirente il rischio di cambio di un\'acquisizione estera?"' }, lessons: ['fm-fx-commodities', 'ma-cross-border'] },
  takeover: { name: { en: 'Takeovers & tender offers', it: 'Offerte pubbliche e scalate' }, explain: { en: 'Public takeovers follow takeover rules on disclosure, pricing and minimum acceptance; unsolicited bids can turn hostile.', it: 'Le offerte pubbliche seguono regole su informativa, prezzo e soglie di adesione; le offerte non sollecitate possono diventare ostili.' }, interview: { en: '"What defences can a target board use against an unsolicited bid?"', it: '"Quali difese può usare il CdA del target contro un\'offerta non sollecitata?"' }, lessons: ['ma-hostile-tender'] },
  disclosure: { name: { en: 'Disclosure & market integrity', it: 'Informativa e integrità dei mercati' }, explain: { en: 'Securities regulators enforce disclosure and insider-trading rules — the reason bankers handle MNPI with strict controls.', it: 'Le autorità di vigilanza fanno rispettare le regole su informativa e insider trading — il motivo per cui i banker gestiscono le informazioni privilegiate con controlli rigorosi.' }, interview: { en: '"What is MNPI and how do banks control it?"', it: '"Cos\'è un\'informazione privilegiata e come la gestiscono le banche?"' }, lessons: ['ib-professionalism'] }
};

export function useNews(): { data: NewsFile | null; loading: boolean; error: boolean } {
  const [state, setState] = useState<{ data: NewsFile | null; loading: boolean; error: boolean }>({ data: null, loading: true, error: false });
  useEffect(() => {
    let alive = true;
    fetch('./data/news.json', { cache: 'no-cache' })
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(String(r.status)))))
      .then((d: NewsFile) => alive && setState({ data: d, loading: false, error: false }))
      .catch(() => alive && setState({ data: null, loading: false, error: true }));
    return () => {
      alive = false;
    };
  }, []);
  return state;
}
