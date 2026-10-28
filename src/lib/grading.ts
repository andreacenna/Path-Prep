import type { Question, Tolerance, GridCell } from '../content/types';

export const DEFAULT_TOL: Required<Tolerance> = { abs: 0.01, rel: 0.005 };

/** True if `value` is within the larger of the absolute and relative tolerances of `answer`. */
export function withinTolerance(value: number, answer: number, tol?: Tolerance): boolean {
  if (!Number.isFinite(value)) return false;
  const abs = tol?.abs ?? DEFAULT_TOL.abs;
  const rel = tol?.rel ?? DEFAULT_TOL.rel;
  return Math.abs(value - answer) <= Math.max(abs, rel * Math.abs(answer)) + 1e-12;
}

/**
 * Parse a user's numeric input. Accepts "1,234.5", "1.234,5" (Italian), "12%", "€ 45m", "-3", "(3)" (accounting negative), "2.5x".
 * Percent answers: if unit is "%" the user types the percentage number (e.g. 8.5 for 8.5%).
 */
export function parseNumber(raw: string): number {
  let s = raw.trim().replace(/[€$£\s]/g, '').replace(/(bn|mld|m|k|x|%|years?|anni)$/i, '');
  let neg = false;
  if (/^\(.*\)$/.test(s)) {
    neg = true;
    s = s.slice(1, -1);
  }
  s = s.replace(/[−–]/g, '-');
  const hasComma = s.includes(',');
  const hasDot = s.includes('.');
  if (hasComma && hasDot) {
    // whichever separator comes last is the decimal separator
    if (s.lastIndexOf(',') > s.lastIndexOf('.')) s = s.replace(/\./g, '').replace(',', '.');
    else s = s.replace(/,/g, '');
  } else if (hasComma) {
    // "1,234" (thousands) vs "12,5" (decimal): treat as thousands only if exactly 3 digits follow each comma
    s = /^-?\d{1,3}(,\d{3})+$/.test(s) ? s.replace(/,/g, '') : s.replace(',', '.');
  }
  if (!/^-?\d*\.?\d+(e-?\d+)?$/i.test(s)) return NaN;
  const n = Number(s);
  return neg ? -n : n;
}

export type AnswerValue = number | number[] | string | Record<string, string>;

/** Grade an answer. Returns true/false. For grids, all blanks must be correct. */
export function gradeQuestion(q: Question, value: AnswerValue): boolean {
  switch (q.kind) {
    case 'mcq':
      return value === q.correct;
    case 'multi': {
      const v = [...(value as number[])].sort();
      const c = [...q.correct].sort();
      return v.length === c.length && v.every((x, i) => x === c[i]);
    }
    case 'numeric':
      return withinTolerance(parseNumber(String(value)), q.answer, q.tolerance);
    case 'order': {
      // value is the user's sequence of original indices
      const seq = value as number[];
      return seq.length === q.items.length && seq.every((x, i) => x === i);
    }
    case 'grid': {
      const entries = value as Record<string, string>;
      return gridBlanks(q).every(({ key, cell }) => withinTolerance(parseNumber(entries[key] ?? ''), cell.answer, cell.tolerance));
    }
  }
}

export function gridBlanks(q: Extract<Question, { kind: 'grid' }>): { key: string; cell: GridCell }[] {
  const out: { key: string; cell: GridCell }[] = [];
  q.rows.forEach((r, ri) =>
    r.cells.forEach((c, ci) => {
      if (typeof c === 'object') out.push({ key: `${ri}:${ci}`, cell: c });
    })
  );
  return out;
}
