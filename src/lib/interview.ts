import type { InterviewQuestion } from '../content/types';

export type Verdict = 'correct' | 'partial' | 'incorrect';

/**
 * Verdict from a strict self-assessment against the rubric.
 * Correct: every essential point covered, ≥ 60% of the other points, and the numeric answer (if any) right.
 * Partially correct: at least one essential point, or ≥ 50% of all points.
 * Incorrect: otherwise.
 */
export function verdictFromRubric(q: Pick<InterviewQuestion, 'rubric'>, checked: number[], numericCorrect: boolean | null = null): Verdict {
  const set = new Set(checked);
  const essentials = q.rubric.map((r, i) => (r.essential ? i : -1)).filter((i) => i >= 0);
  const others = q.rubric.map((r, i) => (!r.essential ? i : -1)).filter((i) => i >= 0);
  const essOk = essentials.filter((i) => set.has(i)).length;
  const othOk = others.filter((i) => set.has(i)).length;
  const allEss = essOk === essentials.length;
  const othersRatio = others.length ? othOk / others.length : 1;
  if (allEss && othersRatio >= 0.6 && numericCorrect !== false) return 'correct';
  if (essOk > 0 || set.size / q.rubric.length >= 0.5 || numericCorrect === true) return 'partial';
  return 'incorrect';
}

/** Where to study after a weak answer, by interview topic. */
export const TOPIC_LESSONS: Record<string, string[]> = {
  accounting: ['acc-linking-statements', 'acc-cash-flow-statement', 'acc-ma-deferred-tax'],
  'ev-equity': ['val-ev-equity', 'val-bridge', 'val-diluted-shares'],
  valuation: ['val-multiples', 'val-trading-comps', 'val-precedents', 'val-football-field'],
  dcf: ['val-dcf-overview', 'val-terminal-value', 'val-dcf-walkthrough', 'cf-wacc'],
  ma: ['ma-accretion-dilution', 'ma-consideration', 'acc-ppa-goodwill'],
  lbo: ['pe-lbo-intuition', 'pe-paper-lbo', 'pe-returns'],
  'corporate-finance': ['cf-wacc', 'cf-capm', 'cf-capital-structure'],
  markets: ['fm-rates-inflation', 'cm-yield-spreads'],
  'brainteaser-numeric': ['pe-returns', 'cf-time-value'],
  'tell-me-about-yourself': ['int-tell-me-about-yourself'],
  'walk-cv': ['int-tell-me-about-yourself'],
  'why-ib': ['int-why-ib'],
  'why-ma': ['int-why-ib'],
  'why-this-bank': ['int-why-ib'],
  'commercial-awareness': ['int-deal-discussion', 'int-market-view']
};
export const DEFAULT_BEHAVIORAL_LESSONS = ['int-star'];
