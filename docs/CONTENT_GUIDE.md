# PATH Academy — Content Authoring Guide

All educational content is typed TypeScript data. The schema is `src/content/types.ts` (read it fully).
The curriculum hierarchy (every academy, module, lesson stub id) is `src/content/curriculum.ts`.
A lesson becomes **available** in the app when a `Lesson` whose `id` equals a stub id is exported from
a file in `src/content/lessons/*.ts` (`export const lessons: Lesson[] = [...]`). Files are auto-discovered.
The reference lesson for quality and format is `acc-accounting-equation` in `src/content/lessons/accounting-core.ts`.

## Non-negotiable quality rules

1. **Financial accuracy first.** Write only what you are confident is correct. Never invent transactions,
   figures, regulations, standard numbers or effective dates. If a requirement is jurisdiction- or
   framework-specific, say which (OIC / Italian Civil Code, IFRS, US GAAP).
2. **Bilingual.** Every `L` object needs natural, professional English *and* Italian. Use correct Italian
   finance terminology (e.g. "patrimonio netto", "avviamento", "posizione finanziaria netta", "conto economico",
   "rendiconto finanziario", "ammortamento", "capitale circolante netto"); keep established English terms that
   Italian bankers actually use (EBITDA, LBO, DCF, WACC, enterprise value, deal, closing, signing, earn-out).
3. **Mobile-first screens.** Short screens; body text ≤ ~900 characters per screen in English (hard limit 1400).
   Use `**bold**`, bullets (`- ` at line start) and blank lines between paragraphs. No long textbook paragraphs.
4. **Every lesson contains** (in a sensible order): `intuition` → `technical` → `formula` (omit only if
   `qualitative: true` for process/conceptual lessons) → `example` (numerical where possible, use `table`)
   → `realworld` → ≥1 `exercise` (referencing questions in the lesson's `questions`) → `interview` → `mistakes` → `summary`.
   Aim for 9–14 screens; max 18. Teach the intuition before formulas.
5. **Questions**: ≥3 per lesson (aim 4–6), mixing kinds (`mcq`, `multi`, `numeric`, `order`, `grid`).
   Each has topic (kebab-case), difficulty 1–3, objective, prompt, explanation (explain why wrong answers are wrong).
   - Numeric answers: give the exact answer and, **whenever possible, a `verify` spec** calling a function in
     `src/lib/finance.ts` (e.g. `{ fn: 'wacc', args: [600, 400, 0.10, 0.05, 0.25] }`); the test recomputes it.
     For simple arithmetic use `sum`, `product`, `ratio`, `diff`. Percent answers: set `unit: '%'` and give the
     answer in percentage points (8.5 for 8.5%); then a verify must return the same scale — use `product` with 100,
     e.g. `{ fn: 'product', args: [100, 0.085] }`, or design verify on decimals with `unit` omitted.
     Add `scale: 100` to express a decimal result in percentage points (e.g. `{ fn: 'irr', args: [[-100, 60, 60]], scale: 100 }`).
     If you cannot express verification with available functions, omit `verify` but double-check by hand.
   - Use realistic but clearly hypothetical companies ("TargetCo", "Alfa S.p.A.") for numerical examples.
   - Choose tolerances that accept sensible rounding (e.g. `{ abs: 0.05 }` for one-decimal answers).
   - MCQ distractors must be plausible mistakes, not jokes. Vary the position of the correct answer.
   - `order` items are authored in the correct order (shuffled at runtime).
   - `grid` = spreadsheet exercise: columns[0] is the label column; each row has `columns.length - 1` cells.
6. **Flashcards**: ≥3 per lesson (aim 4–6), atomic, testable recall.
7. **IDs**: globally unique, kebab-case, prefixed by lesson (e.g. question `ma-eo-q1`, flashcard `fc-ma-eo-1`).
8. `reviewed: '2026-10'`. Add `sources` for standards/regulations (official IFRS/FASB/OIC/regulator pages).
9. Interview screens: a realistic interview question and a crisp model answer (how a strong candidate speaks).
10. Explain **what investment banking analysts actually do** where relevant.

## Checking your work

```bash
CONTENT_ONLY=lessons/your-file.ts npx vitest run tests/unit/content.test.ts
npx tsc --noEmit -p .        # type errors in other authors' files can be ignored
```
