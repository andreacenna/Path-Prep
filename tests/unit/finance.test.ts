import { describe, expect, it } from 'vitest';
import * as F from '../../src/lib/finance';

const close = (a: number, b: number, tol = 1e-6) => expect(Math.abs(a - b)).toBeLessThan(tol);

describe('time value of money', () => {
  it('pv / fv are inverses', () => {
    close(F.fv(100, 0.1, 2), 121);
    close(F.pv(121, 0.1, 2), 100);
  });
  it('annuity and perpetuity', () => {
    close(F.pvAnnuity(100, 0.05, 10), 772.1734929, 1e-6);
    close(F.fvAnnuity(100, 0.05, 10), 1257.789254, 1e-5);
    close(F.pvAnnuity(100, 0, 5), 500);
    close(F.pvPerpetuity(5, 0.05), 100);
    close(F.pvGrowingPerpetuity(5, 0.07, 0.02), 100);
    expect(() => F.pvGrowingPerpetuity(5, 0.02, 0.03)).toThrow();
  });
  it('effective annual rate', () => close(F.effectiveAnnualRate(0.12, 12), 0.12682503, 1e-7));
});

describe('capital budgeting', () => {
  it('npv and irr agree', () => {
    const cfs = [-1000, 300, 400, 500];
    close(F.npv(0.1, cfs), -21.0368, 1e-4);
    const r = F.irr(cfs);
    close(F.npv(r, cfs), 0, 1e-6);
    close(r, 0.0889633947, 1e-6);
  });
  it('irr: doubling in one year = 100%', () => close(F.irr([-100, 200]), 1, 1e-9));
  it('irr returns NaN without sign change', () => expect(F.irr([100, 100])).toBeNaN());
  it('payback & PI', () => {
    close(F.paybackPeriod([-1000, 400, 400, 400]), 2.5);
    expect(F.paybackPeriod([-1000, 100])).toBe(Infinity);
    close(F.profitabilityIndex(0.1, [-100, 55, 60.5]), 1);
  });
});

describe('cost of capital', () => {
  it('capm, beta, wacc', () => {
    close(F.capm(0.04, 1.2, 0.05), 0.1);
    close(F.unleverBeta(1.3, 0.25, 0.5), 1.3 / 1.375);
    close(F.releverBeta(F.unleverBeta(1.3, 0.25, 0.5), 0.25, 0.5), 1.3);
    close(F.wacc(600, 400, 0.1, 0.05, 0.25), 0.075);
    close(F.afterTaxCostOfDebt(0.08, 0.25), 0.06);
    close(F.jensensAlpha(0.12, 0.03, 1.1, 0.1), 0.013);
  });
});

describe('enterprise value', () => {
  it('bridge both ways', () => {
    const ev = F.enterpriseValue(1000, 400, 100, 50, 30, 20);
    close(ev, 1360);
    close(F.equityValueFromEV(ev, 400, 100, 50, 30, 20), 1000);
  });
  it('treasury stock method excludes out-of-the-money options', () => {
    close(F.treasuryStockMethod(20, [{ count: 10, strike: 10 }, { count: 5, strike: 25 }]), 5);
    close(F.dilutedShares(100, 20, [{ count: 10, strike: 10 }]), 105);
  });
  it('free cash flow', () => {
    close(F.unleveredFCF(100, 0.25, 20, 30, 10), 55);
    close(F.leveredFCF(50, 20, 30, 10, 5), 35);
  });
});

describe('DCF', () => {
  it('Gordon TV and implied multiple/growth round-trip', () => {
    const tv = F.terminalValueGordon(100, 0.1, 0.02);
    close(tv, 1275);
    close(F.impliedGrowthFromTV(tv, 100, 0.1), 0.02, 1e-9);
  });
  it('dcf EV', () => {
    const ev = F.dcfEnterpriseValue([100, 110], 0.1, 1000);
    close(ev, 100 / 1.1 + 110 / 1.21 + 1000 / 1.21, 1e-9);
    expect(F.dcfEnterpriseValue([100], 0.1, 0, true)).toBeGreaterThan(F.dcfEnterpriseValue([100], 0.1, 0));
    close(F.impliedSharePrice(1000, 200, 40), 20);
  });
});

describe('M&A', () => {
  it('goodwill and PPA', () => {
    close(F.goodwill(1000, 700), 300);
    close(F.ppaGoodwill(1000, 500, 200, 0.25), 1000 - (500 + 200 - 50));
    close(F.dtlOnStepUp(200, 0.25), 50);
  });
  it('accretion/dilution: all-stock at higher P/E than acquirer is dilutive', () => {
    // Acquirer P/E = 20 (price 20, EPS 1). Target bought at P/E 25.
    const r = F.accretionDilution({ acquirerNetIncome: 100, acquirerShares: 100, targetNetIncome: 20, purchaseEquityValue: 500, pctStock: 1, acquirerSharePrice: 20, costOfDebt: 0, pctDebt: 0, foregoneInterestOnCash: 0, pctCash: 0, taxRate: 0.25 });
    close(r.newShares, 25);
    close(r.proFormaEPS, 120 / 125);
    expect(r.accretionPct).toBeLessThan(0);
  });
  it('accretion/dilution: debt-funded with after-tax cost below earnings yield is accretive', () => {
    const r = F.accretionDilution({ acquirerNetIncome: 100, acquirerShares: 100, targetNetIncome: 20, purchaseEquityValue: 200, pctStock: 0, acquirerSharePrice: 20, costOfDebt: 0.06, pctDebt: 1, foregoneInterestOnCash: 0, pctCash: 0, taxRate: 0.25 });
    close(r.proFormaNetIncome, 100 + 20 - 200 * 0.06 * 0.75);
    expect(r.accretionPct).toBeGreaterThan(0);
  });
  it('exchange ratio, ownership, premium, synergies, NWC adjustment', () => {
    close(F.exchangeRatio(30, 60), 0.5);
    close(F.targetOwnershipPct(300, 100), 0.25);
    close(F.offerPremium(13, 10), 0.3);
    close(F.synergyValue(100, 0.25, 0.1, 50), 700);
    close(F.equityPriceWithNWCAdjustment(1000, 300, 110, 100), 710);
  });
});

describe('LBO', () => {
  it('paper LBO', () => {
    const r = F.simpleLbo({ entryEbitda: 100, entryMultiple: 10, debtMultiple: 6, ebitdaGrowth: 0, years: 5, exitMultiple: 10, cumulativeDebtPaydown: 200 });
    close(r.entryEquity, 400);
    close(r.exitEquity, 600);
    close(r.moic, 1.5);
    close(r.irr, Math.pow(1.5, 0.2) - 1);
  });
  it('rules of thumb', () => {
    close(F.irrFromMoic(2, 5), 0.1487, 1e-4);
    close(F.irrFromMoic(3, 5), 0.2457, 1e-4);
  });
  it('value creation bridge sums to equity gain', () => {
    const b = F.valueCreationBridge(100, 150, 8, 9, 500, 300);
    // equity gain = (150*9 - 300) - (100*8 - 500) = 1050 - 300 = 750
    close(b.total, 750);
  });
  it('fees & carry', () => {
    close(F.managementFee(1000, 0.02), 20);
    close(F.carriedInterest(1500, 1000, 0.2), 100);
    expect(F.carriedInterest(900, 1000, 0.2)).toBe(0);
  });
});

describe('fixed income', () => {
  it('par bond prices at 100 and yield round-trips', () => {
    close(F.bondPrice(100, 0.05, 0.05, 10), 100, 1e-9);
    close(F.bondPrice(100, 0.05, 0.05, 10, 2), 100, 1e-9);
    const p = F.bondPrice(100, 0.04, 0.06, 5);
    close(F.bondYield(p, 100, 0.04, 5), 0.06, 1e-8);
  });
  it('duration of a zero equals maturity; modified duration approximation', () => {
    close(F.macaulayDuration(100, 0, 0.05, 7), 7, 1e-9);
    const md = F.modifiedDuration(100, 0.05, 0.05, 10);
    const p0 = F.bondPrice(100, 0.05, 0.05, 10);
    const p1 = F.bondPrice(100, 0.05, 0.0501, 10);
    close((p1 - p0) / p0, F.priceChangeApprox(md, 0.0001), 1e-6);
    expect(F.convexity(100, 0.05, 0.05, 10)).toBeGreaterThan(0);
  });
});

describe('derivatives & portfolio', () => {
  it('black-scholes known value and put-call parity', () => {
    // S=100, K=100, r=5%, σ=20%, T=1 → call ≈ 10.4506
    const c = F.blackScholes('call', 100, 100, 0.05, 0.2, 1);
    const p = F.blackScholes('put', 100, 100, 0.05, 0.2, 1);
    close(c, 10.4506, 1e-3);
    close(F.callFromPutParity(p, 100, 100, 0.05, 1), c, 1e-4);
  });
  it('forwards, payoffs, portfolio maths', () => {
    close(F.forwardPriceDiscrete(100, 0.05, 1), 105);
    close(F.optionPayoff('call', 120, 100), 20);
    close(F.optionPayoff('put', 120, 100), 0);
    close(F.twoAssetVolatility(0.5, 0.2, 0.2, 1), 0.2);
    close(F.twoAssetVolatility(0.5, 0.2, 0.2, -1), 0);
    close(F.realRate(0.05, 0.02), 1.05 / 1.02 - 1);
  });
});

describe('accounting helpers', () => {
  it('classic "depreciation up by 10" drill at 25% tax', () => {
    const r = F.expenseImpact(10, 0.25, true);
    close(r.netIncome, -7.5);
    close(r.cash, 2.5);
  });
  it('equity method, NCI, lease liability', () => {
    close(F.equityMethodCarrying(300, 0.3, 100, 40), 318);
    close(F.nciShareOfProfit(200, 0.8), 40);
    close(F.leaseLiability(100, 0.05, 3), F.pvAnnuity(100, 0.05, 3));
  });
});
