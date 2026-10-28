import * as F from './finance';
import type { L } from '../content/types';

/**
 * Formula Trainer: randomised, infinitely repeatable drills. Every answer is computed by the
 * deterministic finance library, so it is correct by construction.
 */
export interface Drill {
  id: string;
  topic: string;
  name: L;
  formula: string;
  generate: (rand: () => number) => DrillProblem;
}
export interface DrillProblem {
  prompt: L;
  answer: number;
  unit?: string;
  tolerance: { abs?: number; rel?: number };
  solution: L;
}

const pick = (rand: () => number, min: number, max: number, step = 1) => {
  const n = Math.floor((max - min) / step) + 1;
  return +(min + Math.floor(rand() * n) * step).toFixed(6);
};
const p1 = (x: number) => +(x * 100).toFixed(2); // decimal → % with 2dp
const r2 = (x: number) => Math.round(x * 100) / 100;
const fmt = (x: number) => r2(x).toLocaleString('en-US');
const fmtIt = (x: number) => r2(x).toLocaleString('it-IT');

export const DRILLS: Drill[] = [
  {
    id: 'capm', topic: 'capm', name: { en: 'CAPM cost of equity', it: 'Costo del capitale proprio (CAPM)' },
    formula: 'Re = rf + β × ERP',
    generate: (r) => {
      const rf = pick(r, 2, 5, 0.25) / 100, beta = pick(r, 0.6, 1.8, 0.05), erp = pick(r, 4, 7, 0.5) / 100;
      const ans = F.capm(rf, beta, erp);
      return {
        prompt: { en: `Risk-free rate ${p1(rf)}%, beta ${beta}, equity risk premium ${p1(erp)}%. Cost of equity (%)?`, it: `Tasso privo di rischio ${p1(rf)}%, beta ${beta}, premio per il rischio azionario ${p1(erp)}%. Costo del capitale proprio (%)?` },
        answer: p1(ans), unit: '%', tolerance: { abs: 0.02 },
        solution: { en: `${p1(rf)}% + ${beta} × ${p1(erp)}% = ${p1(ans)}%`, it: `${p1(rf)}% + ${beta} × ${p1(erp)}% = ${p1(ans)}%` }
      };
    }
  },
  {
    id: 'wacc', topic: 'wacc', name: { en: 'WACC', it: 'WACC' },
    formula: 'WACC = E/V × Re + D/V × Rd × (1 − t)',
    generate: (r) => {
      const E = pick(r, 300, 900, 50), D = pick(r, 100, 600, 50), re = pick(r, 8, 13, 0.5) / 100, rd = pick(r, 3, 7, 0.5) / 100, t = pick(r, 20, 30, 1) / 100;
      const ans = F.wacc(E, D, re, rd, t);
      return {
        prompt: { en: `Equity market value ${E}, debt ${D}, cost of equity ${p1(re)}%, pre-tax cost of debt ${p1(rd)}%, tax rate ${p1(t)}%. WACC (%)?`, it: `Valore di mercato dell'equity ${E}, debito ${D}, costo dell'equity ${p1(re)}%, costo del debito ante imposte ${p1(rd)}%, aliquota ${p1(t)}%. WACC (%)?` },
        answer: p1(ans), unit: '%', tolerance: { abs: 0.03 },
        solution: {
          en: `V = ${E + D}. WACC = ${E}/${E + D} × ${p1(re)}% + ${D}/${E + D} × ${p1(rd)}% × (1 − ${p1(t)}%) = ${p1(ans)}%`,
          it: `V = ${E + D}. WACC = ${E}/${E + D} × ${p1(re)}% + ${D}/${E + D} × ${p1(rd)}% × (1 − ${p1(t)}%) = ${p1(ans)}%`
        }
      };
    }
  },
  {
    id: 'unlever', topic: 'beta', name: { en: 'Unlever a beta', it: 'Calcolare il beta unlevered' },
    formula: 'βu = βL / [1 + (1 − t) × D/E]',
    generate: (r) => {
      const bl = pick(r, 0.8, 1.8, 0.05), t = pick(r, 20, 30, 1) / 100, de = pick(r, 0.1, 1.2, 0.05);
      const ans = F.unleverBeta(bl, t, de);
      return {
        prompt: { en: `Levered beta ${bl}, D/E ${de}, tax rate ${p1(t)}%. Unlevered (asset) beta?`, it: `Beta levered ${bl}, D/E ${de}, aliquota ${p1(t)}%. Beta unlevered?` },
        answer: +ans.toFixed(3), tolerance: { abs: 0.005 },
        solution: { en: `${bl} / [1 + (1 − ${t}) × ${de}] = ${ans.toFixed(3)}`, it: `${bl} / [1 + (1 − ${t}) × ${de}] = ${ans.toFixed(3)}` }
      };
    }
  },
  {
    id: 'relever', topic: 'beta', name: { en: 'Re-lever a beta', it: 'Ricalcolare il beta levered' },
    formula: 'βL = βu × [1 + (1 − t) × D/E]',
    generate: (r) => {
      const bu = pick(r, 0.6, 1.3, 0.05), t = pick(r, 20, 30, 1) / 100, de = pick(r, 0.2, 1.5, 0.05);
      const ans = F.releverBeta(bu, t, de);
      return {
        prompt: { en: `Asset beta ${bu}, target D/E ${de}, tax rate ${p1(t)}%. Re-levered beta?`, it: `Beta unlevered ${bu}, D/E obiettivo ${de}, aliquota ${p1(t)}%. Beta levered?` },
        answer: +ans.toFixed(3), tolerance: { abs: 0.005 },
        solution: { en: `${bu} × [1 + (1 − ${t}) × ${de}] = ${ans.toFixed(3)}`, it: `${bu} × [1 + (1 − ${t}) × ${de}] = ${ans.toFixed(3)}` }
      };
    }
  },
  {
    id: 'ev', topic: 'ev-bridge', name: { en: 'Equity value → Enterprise value', it: 'Da equity value a enterprise value' },
    formula: 'EV = Equity + Debt + Preferred + NCI − Cash',
    generate: (r) => {
      const price = pick(r, 10, 80, 0.5), shares = pick(r, 50, 400, 10), debt = pick(r, 200, 2000, 50), cash = pick(r, 50, 600, 25), nci = pick(r, 0, 150, 25), pref = pick(r, 0, 100, 50);
      const eq = price * shares;
      const ans = F.enterpriseValue(eq, debt, cash, pref, nci);
      return {
        prompt: { en: `Share price $${price}, diluted shares ${shares}m, debt $${debt}m, cash $${cash}m, preferred $${pref}m, NCI $${nci}m. Enterprise value ($m)?`, it: `Prezzo $${price}, azioni diluite ${shares}m, debito $${debt}m, cassa $${cash}m, privilegiate $${pref}m, terzi $${nci}m. Enterprise value ($m)?` },
        answer: r2(ans), unit: '$m', tolerance: { abs: 0.5 },
        solution: { en: `Equity = ${price} × ${shares} = ${fmt(eq)}. EV = ${fmt(eq)} + ${debt} + ${pref} + ${nci} − ${cash} = ${fmt(ans)}`, it: `Equity = ${price} × ${shares} = ${fmtIt(eq)}. EV = ${fmtIt(eq)} + ${debt} + ${pref} + ${nci} − ${cash} = ${fmtIt(ans)}` }
      };
    }
  },
  {
    id: 'ufcf', topic: 'free-cash-flow', name: { en: 'Unlevered free cash flow', it: 'Free cash flow unlevered' },
    formula: 'UFCF = EBIT × (1 − t) + D&A − CapEx − ΔNWC',
    generate: (r) => {
      const ebit = pick(r, 100, 500, 10), t = pick(r, 20, 30, 1) / 100, da = pick(r, 20, 120, 5), capex = pick(r, 30, 150, 5), dnwc = pick(r, -20, 40, 5);
      const ans = F.unleveredFCF(ebit, t, da, capex, dnwc);
      return {
        prompt: { en: `EBIT €${ebit}m, tax rate ${p1(t)}%, D&A €${da}m, CapEx €${capex}m, increase in NWC €${dnwc}m. UFCF (€m)?`, it: `EBIT €${ebit}m, aliquota ${p1(t)}%, ammortamenti €${da}m, CapEx €${capex}m, aumento del CCN €${dnwc}m. UFCF (€m)?` },
        answer: r2(ans), unit: '€m', tolerance: { abs: 0.1 },
        solution: { en: `${ebit} × (1 − ${t}) + ${da} − ${capex} − (${dnwc}) = ${fmt(ans)}`, it: `${ebit} × (1 − ${t}) + ${da} − ${capex} − (${dnwc}) = ${fmtIt(ans)}` }
      };
    }
  },
  {
    id: 'gordon', topic: 'terminal-value', name: { en: 'Terminal value (perpetuity growth)', it: 'Valore terminale (crescita perpetua)' },
    formula: 'TV = FCF_N × (1 + g) / (WACC − g)',
    generate: (r) => {
      const fcf = pick(r, 50, 300, 10), w = pick(r, 7, 11, 0.5) / 100, g = pick(r, 1, 3, 0.5) / 100;
      const ans = F.terminalValueGordon(fcf, w, g);
      return {
        prompt: { en: `Final-year FCF €${fcf}m, WACC ${p1(w)}%, perpetual growth ${p1(g)}%. Terminal value (€m)?`, it: `FCF dell'ultimo anno €${fcf}m, WACC ${p1(w)}%, crescita perpetua ${p1(g)}%. Valore terminale (€m)?` },
        answer: r2(ans), unit: '€m', tolerance: { rel: 0.005 },
        solution: { en: `${fcf} × ${1 + g} / (${w} − ${g}) = ${fmt(ans)}`, it: `${fcf} × ${1 + g} / (${w} − ${g}) = ${fmtIt(ans)}` }
      };
    }
  },
  {
    id: 'pv', topic: 'time-value', name: { en: 'Present value', it: 'Valore attuale' },
    formula: 'PV = FV / (1 + r)^n',
    generate: (r) => {
      const fv = pick(r, 100, 2000, 50), rate = pick(r, 3, 12, 0.5) / 100, n = pick(r, 2, 10, 1);
      const ans = F.pv(fv, rate, n);
      return {
        prompt: { en: `What is the present value of €${fv} received in ${n} years at ${p1(rate)}% per year?`, it: `Qual è il valore attuale di €${fv} ricevuti tra ${n} anni al ${p1(rate)}% annuo?` },
        answer: r2(ans), unit: '€', tolerance: { abs: 0.05, rel: 0.002 },
        solution: { en: `${fv} / ${(1 + rate).toFixed(3)}^${n} = ${fmt(ans)}`, it: `${fv} / ${(1 + rate).toFixed(3)}^${n} = ${fmtIt(ans)}` }
      };
    }
  },
  {
    id: 'annuity', topic: 'time-value', name: { en: 'PV of an annuity', it: 'Valore attuale di una rendita' },
    formula: 'PV = C × [1 − (1 + r)^−n] / r',
    generate: (r) => {
      const c = pick(r, 50, 500, 10), rate = pick(r, 3, 10, 0.5) / 100, n = pick(r, 3, 15, 1);
      const ans = F.pvAnnuity(c, rate, n);
      return {
        prompt: { en: `A €${c} payment at the end of each year for ${n} years, discounted at ${p1(rate)}%. PV (€)?`, it: `Un pagamento di €${c} alla fine di ogni anno per ${n} anni, scontato al ${p1(rate)}%. Valore attuale (€)?` },
        answer: r2(ans), unit: '€', tolerance: { abs: 0.1, rel: 0.002 },
        solution: { en: `${c} × [1 − ${(1 + rate).toFixed(3)}^−${n}] / ${rate} = ${fmt(ans)}`, it: `${c} × [1 − ${(1 + rate).toFixed(3)}^−${n}] / ${rate} = ${fmtIt(ans)}` }
      };
    }
  },
  {
    id: 'npv', topic: 'npv', name: { en: 'NPV', it: 'VAN' },
    formula: 'NPV = Σ CFt / (1 + r)^t',
    generate: (r) => {
      const c0 = -pick(r, 500, 1500, 50), c1 = pick(r, 100, 500, 25), c2 = pick(r, 100, 600, 25), c3 = pick(r, 100, 800, 25), rate = pick(r, 6, 12, 1) / 100;
      const ans = F.npv(rate, [c0, c1, c2, c3]);
      return {
        prompt: { en: `Cash flows: t0 ${c0}, t1 ${c1}, t2 ${c2}, t3 ${c3}. Discount rate ${p1(rate)}%. NPV?`, it: `Flussi: t0 ${c0}, t1 ${c1}, t2 ${c2}, t3 ${c3}. Tasso di sconto ${p1(rate)}%. VAN?` },
        answer: r2(ans), tolerance: { abs: 0.5 },
        solution: { en: `${c0} + ${c1}/${1 + rate} + ${c2}/${1 + rate}² + ${c3}/${1 + rate}³ = ${fmt(ans)}`, it: `${c0} + ${c1}/${1 + rate} + ${c2}/${1 + rate}² + ${c3}/${1 + rate}³ = ${fmtIt(ans)}` }
      };
    }
  },
  {
    id: 'moic-irr', topic: 'pe-returns', name: { en: 'MOIC → IRR', it: 'Da MOIC a IRR' },
    formula: 'IRR = MOIC^(1/n) − 1',
    generate: (r) => {
      const m = pick(r, 1.5, 4, 0.25), n = pick(r, 3, 7, 1);
      const ans = F.irrFromMoic(m, n);
      return {
        prompt: { en: `A sponsor earns ${m}x its equity over ${n} years with no interim cash flows. IRR (%)?`, it: `Uno sponsor ottiene ${m}x il capitale investito in ${n} anni senza flussi intermedi. IRR (%)?` },
        answer: p1(ans), unit: '%', tolerance: { abs: 0.1 },
        solution: { en: `${m}^(1/${n}) − 1 = ${p1(ans)}%`, it: `${m}^(1/${n}) − 1 = ${p1(ans)}%` }
      };
    }
  },
  {
    id: 'after-tax-kd', topic: 'cost-of-debt', name: { en: 'After-tax cost of debt', it: 'Costo del debito al netto delle imposte' },
    formula: 'Kd after tax = Kd × (1 − t)',
    generate: (r) => {
      const kd = pick(r, 3, 9, 0.25) / 100, t = pick(r, 20, 35, 1) / 100;
      const ans = F.afterTaxCostOfDebt(kd, t);
      return {
        prompt: { en: `Pre-tax cost of debt ${p1(kd)}%, tax rate ${p1(t)}%. After-tax cost of debt (%)?`, it: `Costo del debito ante imposte ${p1(kd)}%, aliquota ${p1(t)}%. Costo del debito netto (%)?` },
        answer: p1(ans), unit: '%', tolerance: { abs: 0.02 },
        solution: { en: `${p1(kd)}% × (1 − ${p1(t)}%) = ${p1(ans)}%`, it: `${p1(kd)}% × (1 − ${p1(t)}%) = ${p1(ans)}%` }
      };
    }
  },
  {
    id: 'tsm', topic: 'diluted-shares', name: { en: 'Treasury stock method', it: 'Treasury stock method' },
    formula: 'New shares = options − (options × strike) / price',
    generate: (r) => {
      const price = pick(r, 20, 60, 1), opts = pick(r, 2, 20, 1), strike = pick(r, 5, Math.max(6, price - 2), 1), basic = pick(r, 100, 500, 10);
      const ans = F.dilutedShares(basic, price, [{ count: opts, strike }]);
      return {
        prompt: { en: `Basic shares ${basic}m, share price $${price}, ${opts}m options with strike $${strike}. Diluted shares (m)?`, it: `Azioni base ${basic}m, prezzo $${price}, ${opts}m opzioni con strike $${strike}. Azioni diluite (m)?` },
        answer: +ans.toFixed(2), unit: 'm', tolerance: { abs: 0.02 },
        solution: { en: `Proceeds = ${opts} × ${strike} = ${opts * strike}; buyback = ${opts * strike}/${price} = ${(opts * strike / price).toFixed(2)}m; net new = ${(opts - opts * strike / price).toFixed(2)}m → ${ans.toFixed(2)}m`, it: `Incasso = ${opts} × ${strike} = ${opts * strike}; riacquisto = ${opts * strike}/${price} = ${(opts * strike / price).toFixed(2)}m; nuove nette = ${(opts - opts * strike / price).toFixed(2)}m → ${ans.toFixed(2)}m` }
      };
    }
  },
  {
    id: 'ev-ebitda', topic: 'multiples', name: { en: 'Implied value from EV/EBITDA', it: 'Valore implicito da EV/EBITDA' },
    formula: 'Equity = EBITDA × multiple − Net debt',
    generate: (r) => {
      const e = pick(r, 50, 400, 10), mult = pick(r, 6, 14, 0.5), nd = pick(r, 50, 800, 25), sh = pick(r, 20, 200, 5);
      const eq = F.equityValueFromEV(e * mult, nd, 0);
      const ans = eq / sh;
      return {
        prompt: { en: `Peers trade at ${mult}x EBITDA. Target EBITDA €${e}m, net debt €${nd}m, ${sh}m diluted shares. Implied value per share (€)?`, it: `I comparabili trattano a ${mult}x EBITDA. EBITDA del target €${e}m, PFN €${nd}m, ${sh}m azioni diluite. Valore implicito per azione (€)?` },
        answer: r2(ans), unit: '€', tolerance: { abs: 0.01, rel: 0.002 },
        solution: { en: `EV = ${e} × ${mult} = ${fmt(e * mult)}; equity = ${fmt(e * mult)} − ${nd} = ${fmt(eq)}; per share = ${fmt(eq)}/${sh} = ${fmt(ans)}`, it: `EV = ${e} × ${mult} = ${fmtIt(e * mult)}; equity = ${fmtIt(e * mult)} − ${nd} = ${fmtIt(eq)}; per azione = ${fmtIt(eq)}/${sh} = ${fmtIt(ans)}` }
      };
    }
  },
  {
    id: 'accretion', topic: 'accretion-dilution', name: { en: 'All-stock accretion/dilution', it: 'Accrescimento/diluizione con carta' },
    formula: 'Pro forma EPS = (NI_A + NI_T) / (Shares_A + New shares)',
    generate: (r) => {
      const niA = pick(r, 200, 800, 20), shA = pick(r, 100, 400, 10), price = pick(r, 20, 80, 1), niT = pick(r, 40, 200, 10), pe = pick(r, 10, 30, 1);
      const purchase = niT * pe;
      const res = F.accretionDilution({ acquirerNetIncome: niA, acquirerShares: shA, targetNetIncome: niT, purchaseEquityValue: purchase, pctStock: 1, acquirerSharePrice: price, costOfDebt: 0, pctDebt: 0, foregoneInterestOnCash: 0, pctCash: 0, taxRate: 0.25 });
      return {
        prompt: { en: `Acquirer: net income $${niA}m, ${shA}m shares, share price $${price}. It buys a target with net income $${niT}m at ${pe}x P/E, paying 100% in new shares. Accretion (+) / dilution (−) in %? (ignore synergies & fees)`, it: `Acquirente: utile netto $${niA}m, ${shA}m azioni, prezzo $${price}. Acquista un target con utile $${niT}m a ${pe}x P/E, pagando al 100% in nuove azioni. Accrescimento (+) / diluizione (−) in %? (ignora sinergie e commissioni)` },
        answer: p1(res.accretionPct), unit: '%', tolerance: { abs: 0.1 },
        solution: {
          en: `Price = ${niT} × ${pe} = ${purchase}; new shares = ${purchase}/${price} = ${res.newShares.toFixed(2)}m; PF EPS = ${niA + niT}/${(shA + res.newShares).toFixed(2)} = ${res.proFormaEPS.toFixed(3)} vs standalone ${res.standaloneEPS.toFixed(3)} → ${p1(res.accretionPct)}%`,
          it: `Prezzo = ${niT} × ${pe} = ${purchase}; nuove azioni = ${purchase}/${price} = ${res.newShares.toFixed(2)}m; EPS PF = ${niA + niT}/${(shA + res.newShares).toFixed(2)} = ${res.proFormaEPS.toFixed(3)} vs stand-alone ${res.standaloneEPS.toFixed(3)} → ${p1(res.accretionPct)}%`
        }
      };
    }
  },
  {
    id: 'goodwill', topic: 'goodwill', name: { en: 'Goodwill', it: 'Avviamento' },
    formula: 'Goodwill = Price − (Book NA + Step-ups − DTL)',
    generate: (r) => {
      const price = pick(r, 500, 2000, 50), bna = pick(r, 200, Math.max(250, price - 200), 25), step = pick(r, 50, 300, 25), t = pick(r, 20, 30, 1) / 100;
      const ans = F.ppaGoodwill(price, bna, step, t);
      return {
        prompt: { en: `Equity purchase price €${price}m. Target book net assets €${bna}m (no existing goodwill). Fair value step-up of intangibles €${step}m; tax rate ${p1(t)}% (share deal, DTL recognised). Goodwill (€m)?`, it: `Prezzo dell'equity €${price}m. Patrimonio netto contabile del target €${bna}m (nessun avviamento preesistente). Rivalutazione al fair value di intangibili €${step}m; aliquota ${p1(t)}% (share deal, si rileva la DTL). Avviamento (€m)?` },
        answer: r2(ans), unit: '€m', tolerance: { abs: 0.1 },
        solution: { en: `DTL = ${step} × ${t} = ${r2(step * t)}; FV net assets = ${bna} + ${step} − ${r2(step * t)} = ${r2(bna + step - step * t)}; goodwill = ${price} − ${r2(bna + step - step * t)} = ${fmt(ans)}`, it: `DTL = ${step} × ${t} = ${r2(step * t)}; attività nette a FV = ${bna} + ${step} − ${r2(step * t)} = ${r2(bna + step - step * t)}; avviamento = ${price} − ${r2(bna + step - step * t)} = ${fmtIt(ans)}` }
      };
    }
  },
  {
    id: 'bond', topic: 'bond-pricing', name: { en: 'Bond price', it: 'Prezzo di un’obbligazione' },
    formula: 'P = Σ C/(1+y)^t + F/(1+y)^n',
    generate: (r) => {
      const c = pick(r, 2, 8, 0.5) / 100, y = pick(r, 2, 9, 0.5) / 100, n = pick(r, 2, 10, 1);
      const ans = F.bondPrice(100, c, y, n, 1);
      return {
        prompt: { en: `Annual-pay bond, face 100, coupon ${p1(c)}%, ${n} years to maturity, yield ${p1(y)}%. Price?`, it: `Obbligazione a cedola annuale, nominale 100, cedola ${p1(c)}%, scadenza ${n} anni, rendimento ${p1(y)}%. Prezzo?` },
        answer: r2(ans), tolerance: { abs: 0.02 },
        solution: { en: `PV of ${n} coupons of ${r2(c * 100)} + PV of 100 at ${p1(y)}% = ${fmt(ans)}${c > y ? ' (premium: coupon > yield)' : c < y ? ' (discount: coupon < yield)' : ' (par)'}`, it: `VA di ${n} cedole da ${r2(c * 100)} + VA di 100 al ${p1(y)}% = ${fmtIt(ans)}${c > y ? ' (sopra la pari: cedola > rendimento)' : c < y ? ' (sotto la pari: cedola < rendimento)' : ' (alla pari)'}` }
      };
    }
  },
  {
    id: 'premium', topic: 'control-premium', name: { en: 'Offer premium', it: 'Premio dell’offerta' },
    formula: 'Premium = Offer / Undisturbed price − 1',
    generate: (r) => {
      const u = pick(r, 10, 100, 0.5), prem = pick(r, 15, 50, 1) / 100, offer = r2(u * (1 + prem));
      const ans = F.offerPremium(offer, u);
      return {
        prompt: { en: `Undisturbed share price $${u}; offer price $${offer}. Premium (%)?`, it: `Prezzo indisturbato $${u}; prezzo d'offerta $${offer}. Premio (%)?` },
        answer: p1(ans), unit: '%', tolerance: { abs: 0.05 },
        solution: { en: `${offer}/${u} − 1 = ${p1(ans)}%`, it: `${offer}/${u} − 1 = ${p1(ans)}%` }
      };
    }
  }
];
