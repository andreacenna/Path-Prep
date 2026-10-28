/** Local-calendar day key (YYYY-MM-DD) — streaks follow the learner's own midnight, not UTC. */
export function dayKey(d: Date | number = new Date()): string {
  const x = typeof d === 'number' ? new Date(d) : d;
  const m = String(x.getMonth() + 1).padStart(2, '0');
  const day = String(x.getDate()).padStart(2, '0');
  return `${x.getFullYear()}-${m}-${day}`;
}

export function addDays(key: string, n: number): string {
  const [y, m, d] = key.split('-').map(Number);
  return dayKey(new Date(y, m - 1, d + n));
}

/** Last n day keys ending today (oldest first). */
export function lastNDays(n: number, today = dayKey()): string[] {
  return Array.from({ length: n }, (_, i) => addDays(today, i - (n - 1)));
}

export function daysBetween(a: string, b: string): number {
  const [y1, m1, d1] = a.split('-').map(Number);
  const [y2, m2, d2] = b.split('-').map(Number);
  return Math.round((Date.UTC(y2, m2 - 1, d2) - Date.UTC(y1, m1 - 1, d1)) / 86400000);
}
