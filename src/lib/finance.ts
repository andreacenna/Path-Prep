/**
 * Deterministic finance functions.
 *
 * Conventions:
 * - Rates are decimals (8% = 0.08).
 * - Cash flow arrays start at t = 0 unless stated otherwise.
 * - No rounding inside functions; rounding is a display concern.
 *
 * Every function here is unit-tested (tests/unit/finance.test.ts) and is the
 * source of truth for numerical exercises: content questions reference these
 * functions via `verify` specs and the content test recomputes the answers.
 */

/* ---------------- Time value of money ---------------- */

/** Future value of a single sum. */
export function fv(pv: number, rate: number, periods: number): number {
  return pv * Math.pow(1 + rate, periods);
}

/** Present value of a single sum received at `periods`. */
export function pv(futureValue: number, rate: number, periods: number): number {
  return futureValue / Math.pow(1 + rate, periods);
}

/** Present value of an ordinary annuity (payments at end of each period). */
export function pvAnnuity(payment: number, rate: number, periods: number): number {
  if (rate === 0) return payment * periods;
  return (payment * (1 - Math.pow(1 + rate, -periods))) / rate;
}

/** Future value of an ordinary annuity. */
export function fvAnnuity(payment: number, rate: number, periods: number): number {
  if (rate === 0) return payment * periods;
  return (payment * (Math.pow(1 + rate, periods) - 1)) / rate;
}

/** Present value of a perpetuity paying `payment` starting next period. */
export function pvPerpetuity(payment: number, rate: number): number {
  return payment / rate;
}

/** Present value of a growing perpetuity whose first payment (next period) is `payment`. Requires rate > growth. */
export function pvGrowingPerpetuity(payment: number, rate: number, growth: number): number {
  if (rate <= growth) throw new Error('rate must exceed growth');
  return payment / (rate - growth);
}

/** Effective annual rate from a nominal annual rate compounded m times per year. */
export function effectiveAnnualRate(nominal: number, m: number): number {
  return Math.pow(1 + nominal / m, m) - 1;
}

/* ---------------- Capital budgeting ---------------- */

/** NPV of cash flows where cashFlows[0] occurs today (t = 0). */
export function npv(rate: number, cashFlows: number[]): number {
  return cashFlows.reduce((acc, cf, t) => acc + cf / Math.pow(1 + rate, t), 0);
}

/** IRR via bisection + Newton refinement. cashFlows[0] at t = 0. Returns NaN if no sign change. */
export function irr(cashFlows: number[], lo = -0.99, hi = 10): number {
  const f = (r: number) => npv(r, cashFlows);
  let fLo = f(lo);
  let fHi = f(hi);
  if (Number.isNaN(fLo) || Number.isNaN(fHi) || fLo * fHi > 0) return NaN;
  for (let i = 0; i < 300; i++) {
    const mid = (lo + hi) / 2;
    const fMid = f(mid);
    if (Math.abs(fMid) < 1e-12 || hi - lo < 1e-14) return mid;
    if (fLo * fMid < 0) {
      hi = mid;
      fHi = fMid;
    } else {
      lo = mid;
      fLo = fMid;
    }
  }
  return (lo + hi) / 2;
}

/** Simple payback period in years (linear interpolation within the payback year). cashFlows[0] is the (negative) investment. */
export function paybackPeriod(cashFlows: number[]): number {
  let cumulative = cashFlows[0];
  if (cumulative >= 0) return 0;
  for (let t = 1; t < cashFlows.length; t++) {
    const prev = cumulative;
    cumulative += cashFlows[t];
    if (cumulative >= 0) return t - 1 + -prev / cashFlows[t];
  }
  return Infinity;
}

/** Profitability index = PV of future cash flows / initial investment (cashFlows[0] negative). */
export function profitabilityIndex(rate: number, cashFlows: number[]): number {
  const pvFuture = npv(rate, [0, ...cashFlows.slice(1)]);
  return pvFuture / -cashFlows[0];
}

/* ---------------- Returns & ratios ---------------- */

export function roe(netIncome: number, avgEquity: number): number {
  return netIncome / avgEquity;
}
export function roa(netIncome: number, avgAssets: number): number {
  return netIncome / avgAssets;
}
/** ROIC = NOPAT / Invested capital, where NOPAT = EBIT × (1 − t). */
export function roic(ebit: number, taxRate: number, investedCapital: number): number {
  return (ebit * (1 - taxRate)) / investedCapital;
}
/** DuPont: ROE = net margin × asset turnover × equity multiplier. */
export function dupontRoe(netMargin: number, assetTurnover: number, equityMultiplier: number): number {
  return netMargin * assetTurnover * equityMultiplier;
}

/* ---------------- Cost of capital ---------------- */

/** CAPM cost of equity: rf + β × ERP. */
export function capm(riskFree: number, beta: number, equityRiskPremium: number): number {
  return riskFree + beta * equityRiskPremium;
}

/** Jensen's alpha: realised return − CAPM expected return. */
export function jensensAlpha(realised: number, riskFree: number, beta: number, marketReturn: number): number {
  return realised - (riskFree + beta * (marketReturn - riskFree));
}

/** Hamada: unlevered (asset) beta from levered beta. */
export function unleverBeta(leveredBeta: number, taxRate: number, debtToEquity: number): number {
  return leveredBeta / (1 + (1 - taxRate) * debtToEquity);
}

/** Hamada: re-lever an asset beta at a target D/E. */
export function releverBeta(unleveredBeta: number, taxRate: number, debtToEquity: number): number {
  return unleveredBeta * (1 + (1 - taxRate) * debtToEquity);
}

/** After-tax cost of debt. */
export function afterTaxCostOfDebt(preTaxCost: number, taxRate: number): number {
  return preTaxCost * (1 - taxRate);
}

/** WACC = E/V × Re + D/V × Rd × (1 − t). E and D are market values. Optional preferred equity. */
export function wacc(
  equityValue: number,
  debtValue: number,
  costOfEquity: number,
  preTaxCostOfDebt: number,
  taxRate: number,
  preferredValue = 0,
  costOfPreferred = 0
): number {
  const v = equityValue + debtValue + preferredValue;
  return (
    (equityValue / v) * costOfEquity +
    (debtValue / v) * preTaxCostOfDebt * (1 - taxRate) +
    (preferredValue / v) * costOfPreferred
  );
}

/* ---------------- Enterprise value & free cash flow ---------------- */

/** Equity value → enterprise value. EV = Equity + Debt + Preferred + NCI − Cash (− non-operating assets such as equity-method investments). */
export function enterpriseValue(
  equityValue: number,
  debt: number,
  cash: number,
  preferred = 0,
  nci = 0,
  nonOperatingAssets = 0
): number {
  return equityValue + debt + preferred + nci - cash - nonOperatingAssets;
}

/** Enterprise value → equity value (inverse bridge). */
export function equityValueFromEV(
  ev: number,
  debt: number,
  cash: number,
  preferred = 0,
  nci = 0,
  nonOperatingAssets = 0
): number {
  return ev - debt - preferred - nci + cash + nonOperatingAssets;
}

export function marketCap(sharePrice: number, dilutedShares: number): number {
  return sharePrice * dilutedShares;
}

/**
 * Treasury stock method: net new shares from in-the-money options.
 * Each tranche: { count, strike }. Options with strike >= price are excluded.
 */
export function treasuryStockMethod(sharePrice: number, options: { count: number; strike: number }[]): number {
  return options
    .filter((o) => o.strike < sharePrice)
    .reduce((acc, o) => acc + o.count - (o.count * o.strike) / sharePrice, 0);
}

/** Diluted shares = basic + TSM net new shares (+ in-the-money convertible shares if provided). */
export function dilutedShares(
  basicShares: number,
  sharePrice: number,
  options: { count: number; strike: number }[],
  convertibleShares = 0
): number {
  return basicShares + treasuryStockMethod(sharePrice, options) + convertibleShares;
}

/** EBITDA = EBIT + D&A. */
export function ebitda(ebit: number, da: number): number {
  return ebit + da;
}

/** Unlevered FCF = EBIT × (1 − t) + D&A − CapEx − ΔNWC (ΔNWC positive = investment in working capital). */
export function unleveredFCF(ebit: number, taxRate: number, da: number, capex: number, deltaNWC: number): number {
  return ebit * (1 - taxRate) + da - capex - deltaNWC;
}

/** Levered FCF = Net income + D&A − CapEx − ΔNWC + net borrowing. */
export function leveredFCF(netIncome: number, da: number, capex: number, deltaNWC: number, netBorrowing = 0): number {
  return netIncome + da - capex - deltaNWC + netBorrowing;
}

/** Net working capital (operating): (receivables + inventory + other op. current assets) − (payables + accrued + other op. current liabilities). */
export function netWorkingCapital(operatingCurrentAssets: number, operatingCurrentLiabilities: number): number {
  return operatingCurrentAssets - operatingCurrentLiabilities;
}

/* ---------------- DCF ---------------- */

/** Gordon growth terminal value at year N, from FCF in year N: TV = FCF_N × (1 + g) / (r − g). */
export function terminalValueGordon(finalYearFCF: number, rate: number, growth: number): number {
  if (rate <= growth) throw new Error('rate must exceed growth');
  return (finalYearFCF * (1 + growth)) / (rate - growth);
}

/** Exit multiple terminal value: TV = metric_N × multiple. */
export function terminalValueExitMultiple(finalYearMetric: number, multiple: number): number {
  return finalYearMetric * multiple;
}

/** Implied perpetual growth rate from an exit-multiple terminal value. */
export function impliedGrowthFromTV(tv: number, finalYearFCF: number, rate: number): number {
  return (tv * rate - finalYearFCF) / (tv + finalYearFCF);
}

/** Implied exit multiple from a Gordon terminal value. */
export function impliedMultipleFromTV(tv: number, finalYearMetric: number): number {
  return tv / finalYearMetric;
}

/**
 * DCF enterprise value. fcfs[0] is year 1 (end-of-year discounting, or mid-year if midYear = true).
 * Terminal value is discounted from the end of the final year.
 */
export function dcfEnterpriseValue(fcfs: number[], rate: number, terminalValue: number, midYear = false): number {
  const pvFcf = fcfs.reduce((acc, cf, i) => {
    const t = midYear ? i + 0.5 : i + 1;
    return acc + cf / Math.pow(1 + rate, t);
  }, 0);
  const pvTv = terminalValue / Math.pow(1 + rate, fcfs.length);
  return pvFcf + pvTv;
}

/** Implied share price from DCF EV. */
export function impliedSharePrice(ev: number, netDebt: number, dilutedShareCount: number, otherClaims = 0): number {
  return (ev - netDebt - otherClaims) / dilutedShareCount;
}

/* ---------------- Multiples ---------------- */

export function multiple(value: number, metric: number): number {
  return value / metric;
}

export function median(values: number[]): number {
  const s = [...values].sort((a, b) => a - b);
  const m = Math.floor(s.length / 2);
  return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
}

export function mean(values: number[]): number {
  return values.reduce((a, b) => a + b, 0) / values.length;
}

/** P/E = price / EPS. */
export function peRatio(sharePrice: number, eps: number): number {
  return sharePrice / eps;
}

/* ---------------- M&A ---------------- */

/** Offer premium vs. an undisturbed reference price. */
export function offerPremium(offerPrice: number, undisturbedPrice: number): number {
  return offerPrice / undisturbedPrice - 1;
}

/**
 * Goodwill = consideration transferred + NCI (at fair value or proportionate share) + fair value of previously held interest
 *            − fair value of identifiable net assets acquired.
 * Negative result = bargain purchase gain.
 */
export function goodwill(consideration: number, fairValueNetAssets: number, nci = 0, previouslyHeldFV = 0): number {
  return consideration + nci + previouslyHeldFV - fairValueNetAssets;
}

/**
 * Purchase price allocation helper.
 * Returns goodwill given book net assets, fair value step-ups (positive for assets), and tax rate for the DTL on step-ups.
 * Goodwill = Price − (book net assets − existing goodwill written off + step-ups − DTL on step-ups).
 */
export function ppaGoodwill(
  purchasePrice: number,
  bookNetAssets: number,
  stepUps: number,
  taxRate: number,
  existingGoodwill = 0
): number {
  const dtl = stepUps * taxRate;
  return purchasePrice - (bookNetAssets - existingGoodwill + stepUps - dtl);
}

/** Deferred tax liability created by a fair value step-up in a share deal (no tax basis step-up). */
export function dtlOnStepUp(stepUp: number, taxRate: number): number {
  return stepUp * taxRate;
}

export interface AccretionDilutionInput {
  acquirerNetIncome: number;
  acquirerShares: number;
  targetNetIncome: number;
  purchaseEquityValue: number; // price paid for target equity
  pctStock: number; // 0..1 share of consideration paid in new acquirer stock
  acquirerSharePrice: number; // issue price of new shares
  costOfDebt: number; // pre-tax interest rate on new debt
  pctDebt: number; // 0..1 share funded with new debt
  foregoneInterestOnCash: number; // pre-tax yield on cash used
  pctCash: number; // 0..1 share funded with existing cash
  taxRate: number;
  synergiesPreTax?: number;
  newDAPreTax?: number; // incremental D&A/amortisation from PPA write-ups (pre-tax)
}

/** Pro forma EPS and accretion/(dilution) % for a simple acquisition. */
export function accretionDilution(i: AccretionDilutionInput): {
  standaloneEPS: number;
  proFormaEPS: number;
  accretionPct: number;
  newShares: number;
  proFormaNetIncome: number;
} {
  const newShares = (i.purchaseEquityValue * i.pctStock) / i.acquirerSharePrice;
  const afterTaxInterest = i.purchaseEquityValue * i.pctDebt * i.costOfDebt * (1 - i.taxRate);
  const lostInterest = i.purchaseEquityValue * i.pctCash * i.foregoneInterestOnCash * (1 - i.taxRate);
  const synergies = (i.synergiesPreTax ?? 0) * (1 - i.taxRate);
  const newDA = (i.newDAPreTax ?? 0) * (1 - i.taxRate);
  const proFormaNetIncome = i.acquirerNetIncome + i.targetNetIncome - afterTaxInterest - lostInterest + synergies - newDA;
  const standaloneEPS = i.acquirerNetIncome / i.acquirerShares;
  const proFormaEPS = proFormaNetIncome / (i.acquirerShares + newShares);
  return { standaloneEPS, proFormaEPS, accretionPct: proFormaEPS / standaloneEPS - 1, newShares, proFormaNetIncome };
}

/**
 * All-stock deal quick test: accretive if acquirer P/E > target P/E (at the offer price), ignoring synergies.
 * Returns acquirer P/E − target purchase P/E.
 */
export function peDifferential(acquirerPE: number, targetPurchasePE: number): number {
  return acquirerPE - targetPurchasePE;
}

/** Exchange ratio = offer price per target share / acquirer share price. */
export function exchangeRatio(offerPricePerTargetShare: number, acquirerSharePrice: number): number {
  return offerPricePerTargetShare / acquirerSharePrice;
}

/** Ownership of target shareholders post all-stock deal. */
export function targetOwnershipPct(acquirerShares: number, newSharesIssued: number): number {
  return newSharesIssued / (acquirerShares + newSharesIssued);
}

/** PV of run-rate synergies treated as a perpetuity, net of tax and one-off integration costs. */
export function synergyValue(runRatePreTax: number, taxRate: number, discountRate: number, oneOffCosts = 0, growth = 0): number {
  return (runRatePreTax * (1 - taxRate)) / (discountRate - growth) - oneOffCosts;
}

/** Locked-box / completion accounts style equity price: EV − net debt ± (actual NWC − target NWC). */
export function equityPriceWithNWCAdjustment(ev: number, netDebt: number, actualNWC: number, targetNWC: number): number {
  return ev - netDebt + (actualNWC - targetNWC);
}

/* ---------------- Private equity / LBO ---------------- */

export function moic(exitEquity: number, entryEquity: number): number {
  return exitEquity / entryEquity;
}

/** IRR implied by a MOIC over a holding period with no interim cash flows. */
export function irrFromMoic(moicValue: number, years: number): number {
  return Math.pow(moicValue, 1 / years) - 1;
}

export interface SimpleLboInput {
  entryEbitda: number;
  entryMultiple: number;
  debtMultiple: number; // total debt / EBITDA at entry
  feesAndExpenses?: number; // transaction costs funded at entry
  ebitdaGrowth: number; // annual
  years: number;
  exitMultiple: number;
  /** cumulative debt repaid over the hold (from FCF) */
  cumulativeDebtPaydown: number;
  /** cash on balance sheet at exit (added to equity) */
  exitCash?: number;
}

/** Back-of-the-envelope LBO returns (paper LBO). */
export function simpleLbo(i: SimpleLboInput): {
  entryEV: number;
  entryDebt: number;
  entryEquity: number;
  exitEbitda: number;
  exitEV: number;
  exitDebt: number;
  exitEquity: number;
  moic: number;
  irr: number;
} {
  const entryEV = i.entryEbitda * i.entryMultiple;
  const entryDebt = i.entryEbitda * i.debtMultiple;
  const entryEquity = entryEV + (i.feesAndExpenses ?? 0) - entryDebt;
  const exitEbitda = i.entryEbitda * Math.pow(1 + i.ebitdaGrowth, i.years);
  const exitEV = exitEbitda * i.exitMultiple;
  const exitDebt = entryDebt - i.cumulativeDebtPaydown;
  const exitEquity = exitEV - exitDebt + (i.exitCash ?? 0);
  const m = exitEquity / entryEquity;
  return { entryEV, entryDebt, entryEquity, exitEbitda, exitEV, exitDebt, exitEquity, moic: m, irr: irrFromMoic(m, i.years) };
}

/** Value creation bridge: split equity gain into EBITDA growth, multiple expansion, and deleveraging. */
export function valueCreationBridge(
  entryEbitda: number,
  exitEbitda: number,
  entryMultiple: number,
  exitMultiple: number,
  entryNetDebt: number,
  exitNetDebt: number
): { ebitdaGrowth: number; multipleExpansion: number; deleveraging: number; total: number } {
  const ebitdaGrowth = (exitEbitda - entryEbitda) * entryMultiple;
  const multipleExpansion = (exitMultiple - entryMultiple) * exitEbitda;
  const deleveraging = entryNetDebt - exitNetDebt;
  return { ebitdaGrowth, multipleExpansion, deleveraging, total: ebitdaGrowth + multipleExpansion + deleveraging };
}

/** Management fee on committed capital. */
export function managementFee(committedCapital: number, feeRate: number): number {
  return committedCapital * feeRate;
}

/** Simple carried interest (whole-fund, full catch-up assumed): carry = carryRate × total profit if hurdle met. */
export function carriedInterest(totalDistributions: number, paidInCapital: number, carryRate: number, hurdleMet = true): number {
  const profit = totalDistributions - paidInCapital;
  return hurdleMet && profit > 0 ? profit * carryRate : 0;
}

/** Leverage ratios. */
export function netLeverage(totalDebt: number, cash: number, ebitdaValue: number): number {
  return (totalDebt - cash) / ebitdaValue;
}
export function interestCoverage(ebitdaOrEbit: number, interestExpense: number): number {
  return ebitdaOrEbit / interestExpense;
}

/* ---------------- Fixed income ---------------- */

/** Price of a bond per 100 face. couponRate annual, frequency payments per year, ytm annual (bond-equivalent). */
export function bondPrice(face: number, couponRate: number, ytm: number, years: number, frequency = 1): number {
  const n = Math.round(years * frequency);
  const c = (face * couponRate) / frequency;
  const y = ytm / frequency;
  if (y === 0) return c * n + face;
  return c * (1 - Math.pow(1 + y, -n)) / y + face / Math.pow(1 + y, n);
}

/** Yield to maturity (annual, bond-equivalent) via bisection. */
export function bondYield(price: number, face: number, couponRate: number, years: number, frequency = 1): number {
  let lo = -0.5;
  let hi = 2;
  for (let i = 0; i < 200; i++) {
    const mid = (lo + hi) / 2;
    if (bondPrice(face, couponRate, mid, years, frequency) > price) lo = mid;
    else hi = mid;
  }
  return (lo + hi) / 2;
}

/** Macaulay duration in years. */
export function macaulayDuration(face: number, couponRate: number, ytm: number, years: number, frequency = 1): number {
  const n = Math.round(years * frequency);
  const c = (face * couponRate) / frequency;
  const y = ytm / frequency;
  let weighted = 0;
  let price = 0;
  for (let k = 1; k <= n; k++) {
    const cf = k === n ? c + face : c;
    const pvCf = cf / Math.pow(1 + y, k);
    weighted += (k / frequency) * pvCf;
    price += pvCf;
  }
  return weighted / price;
}

/** Modified duration = Macaulay / (1 + y/f). */
export function modifiedDuration(face: number, couponRate: number, ytm: number, years: number, frequency = 1): number {
  return macaulayDuration(face, couponRate, ytm, years, frequency) / (1 + ytm / frequency);
}

/** Approximate % price change = −ModDur × Δy + ½ × Convexity × Δy². */
export function priceChangeApprox(modDuration: number, deltaYield: number, convexity = 0): number {
  return -modDuration * deltaYield + 0.5 * convexity * deltaYield * deltaYield;
}

/** Convexity (annualised) of a fixed coupon bond. */
export function convexity(face: number, couponRate: number, ytm: number, years: number, frequency = 1): number {
  const n = Math.round(years * frequency);
  const c = (face * couponRate) / frequency;
  const y = ytm / frequency;
  const price = bondPrice(face, couponRate, ytm, years, frequency);
  let sum = 0;
  for (let k = 1; k <= n; k++) {
    const cf = k === n ? c + face : c;
    sum += (cf * k * (k + 1)) / Math.pow(1 + y, k + 2);
  }
  return sum / (price * frequency * frequency);
}

/** Current yield = annual coupon / price. */
export function currentYield(face: number, couponRate: number, price: number): number {
  return (face * couponRate) / price;
}

/* ---------------- Derivatives ---------------- */

/** Forward price with continuous compounding: F = S × e^{(r − q) T}. */
export function forwardPrice(spot: number, rate: number, years: number, dividendYield = 0): number {
  return spot * Math.exp((rate - dividendYield) * years);
}

/** Forward price with annual compounding and no income: F = S × (1 + r)^T. */
export function forwardPriceDiscrete(spot: number, rate: number, years: number): number {
  return spot * Math.pow(1 + rate, years);
}

/** Put–call parity (European, no dividends, continuous): C − P = S − K e^{−rT}. Returns the call value given the put. */
export function callFromPutParity(put: number, spot: number, strike: number, rate: number, years: number): number {
  return put + spot - strike * Math.exp(-rate * years);
}

function normCdf(x: number): number {
  // Abramowitz & Stegun 7.1.26 via erf, max error ~1.5e-7
  const t = 1 / (1 + 0.3275911 * Math.abs(x) / Math.SQRT2);
  const y =
    1 -
    (((((1.061405429 * t - 1.453152027) * t + 1.421413741) * t - 0.284496736) * t + 0.254829592) * t) *
      Math.exp(-(x * x) / 2);
  return x >= 0 ? 0.5 * (1 + y) : 0.5 * (1 - y);
}

/** Black–Scholes price of a European option (no dividends unless q given). */
export function blackScholes(
  type: 'call' | 'put',
  spot: number,
  strike: number,
  rate: number,
  vol: number,
  years: number,
  dividendYield = 0
): number {
  const d1 = (Math.log(spot / strike) + (rate - dividendYield + (vol * vol) / 2) * years) / (vol * Math.sqrt(years));
  const d2 = d1 - vol * Math.sqrt(years);
  if (type === 'call') {
    return spot * Math.exp(-dividendYield * years) * normCdf(d1) - strike * Math.exp(-rate * years) * normCdf(d2);
  }
  return strike * Math.exp(-rate * years) * normCdf(-d2) - spot * Math.exp(-dividendYield * years) * normCdf(-d1);
}

/** Payoff at expiry of a long option position (excluding premium). */
export function optionPayoff(type: 'call' | 'put', spotAtExpiry: number, strike: number): number {
  return type === 'call' ? Math.max(spotAtExpiry - strike, 0) : Math.max(strike - spotAtExpiry, 0);
}

/** Portfolio expected return and two-asset volatility. */
export function portfolioReturn(weights: number[], returns: number[]): number {
  return weights.reduce((acc, w, i) => acc + w * returns[i], 0);
}
export function twoAssetVolatility(w1: number, vol1: number, vol2: number, correlation: number): number {
  const w2 = 1 - w1;
  return Math.sqrt(w1 * w1 * vol1 * vol1 + w2 * w2 * vol2 * vol2 + 2 * w1 * w2 * vol1 * vol2 * correlation);
}
export function sharpeRatio(portfolioReturnValue: number, riskFree: number, volatility: number): number {
  return (portfolioReturnValue - riskFree) / volatility;
}

/** Real rate via Fisher: (1 + nominal) / (1 + inflation) − 1. */
export function realRate(nominal: number, inflation: number): number {
  return (1 + nominal) / (1 + inflation) - 1;
}

/* ---------------- Accounting helpers ---------------- */

/** Straight-line depreciation per year. */
export function straightLineDepreciation(cost: number, salvage: number, usefulLifeYears: number): number {
  return (cost - salvage) / usefulLifeYears;
}

/**
 * Impact of a pre-tax expense change on the three statements (classic interview drill).
 * Returns: change in net income, change in cash (assumes non-cash item if nonCash=true), and change in equity.
 */
export function expenseImpact(preTaxAmount: number, taxRate: number, nonCash: boolean) {
  const netIncome = -preTaxAmount * (1 - taxRate);
  const cash = nonCash ? preTaxAmount * taxRate : -preTaxAmount * (1 - taxRate);
  return { netIncome, cash, equity: netIncome };
}

/** Equity method: carrying amount of an associate after one period. */
export function equityMethodCarrying(initialCost: number, ownership: number, investeeNetIncome: number, investeeDividends: number): number {
  return initialCost + ownership * investeeNetIncome - ownership * investeeDividends;
}

/** NCI share of subsidiary profit. */
export function nciShareOfProfit(subsidiaryNetIncome: number, ownership: number): number {
  return subsidiaryNetIncome * (1 - ownership);
}

/** Lease liability at commencement = PV of lease payments (payments in arrears). */
export function leaseLiability(annualPayment: number, rate: number, years: number): number {
  return pvAnnuity(annualPayment, rate, years);
}

/** Percent helper for authoring: percentage points → decimal. */
export function pct(x: number): number {
  return x / 100;
}

/** Generic arithmetic helpers so simple numeric answers can still be machine-verified. */
export function sum(...xs: number[]): number {
  return xs.reduce((a, b) => a + b, 0);
}
export function product(...xs: number[]): number {
  return xs.reduce((a, b) => a * b, 1);
}
export function ratio(a: number, b: number): number {
  return a / b;
}
export function diff(a: number, b: number): number {
  return a - b;
}
