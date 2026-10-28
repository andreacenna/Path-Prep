# PATH Academy

A mobile-first, bilingual (English / Italian), gamified **finance & investment banking learning PWA**: accounting (incl. Italian OIC, IFRS, US GAAP and consolidation), corporate finance, valuation, M&A, private equity, investment banking, capital markets, markets & derivatives, financial modelling, interview preparation and deal case studies.

It is built to replace phone scrolling with 5-minute learning sessions — and to be **free forever**: no backend, no paid APIs, no accounts, no tracking.

| | |
|---|---|
| **Curriculum** | 11 academies · 43 modules · 149 lessons (all written; each has objective, intuition, technical, formulas, worked example, real-world, exercises, interview question, common mistakes, summary) |
| **Practice** | 675 lesson questions (MCQ, multi-select, numeric, ordering, spreadsheet grids) · 645 flashcards · 18 randomised formula drills |
| **Interviews** | 73 technical + 28 behavioural questions with model answers and rubrics · mock interviews · voice practice · Story Bank · CV-based personalised questions |
| **Cases** | 14 documented landmark transactions with sources + Deal Challenge questions |
| **News** | PATH Daily Briefing from free official/public RSS feeds, refreshed by a scheduled GitHub Action |

## Quick start

Requirements: Node.js 20+ (22 recommended).

```bash
npm install
npm run dev          # http://localhost:5173
```

## Testing

```bash
npm test             # unit + content tests (vitest)
npm run typecheck    # TypeScript
npm run build && npm run test:e2e   # end-to-end smoke + accessibility test (Playwright + axe-core, Chromium)
```

What the tests guarantee:
- **Finance library** (`src/lib/finance.ts`): every function is tested against known values (NPV/IRR, WACC, CAPM, betas, EV bridge, TSM, DCF, accretion/dilution, PPA, LBO, bonds, duration/convexity, Black–Scholes…).
- **Content** (`tests/unit/content.test.ts`): every lesson is complete and bilingual, every question has an answer, explanation, difficulty, topic and objective; **every numeric answer and grid cell is recomputed** from the finance library via its `verify` spec and must match within tolerance; IDs are unique; case studies are dated and sourced.
- **Engine**: grading (EN/IT number formats), FSRS scheduling, mastery levels, streaks/levels/XP rules, backup → wipe → restore round-trip, CV parsing, news parsing/classification/deduplication.
- **E2E**: onboarding → lesson completion → XP → language switch (progress kept) → flashcards → interview → news → case → **offline reload** → desktop layout; WCAG 2 A/AA checks (serious/critical) on key screens.

`npm run test:e2e` expects Playwright + Chromium to be resolvable (`npx playwright install chromium` if needed).

## Deploying for free (GitHub Pages)

1. Create a **public** GitHub repository and push this project to the `main` branch.
2. In the repository: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. The workflow `.github/workflows/deploy.yml` tests, builds and deploys on every push. It also runs **twice a day** to refresh the news briefing (commits `public/data/news.json`, then redeploys). Run it manually from the **Actions** tab to publish the first briefing immediately.
4. Your app is live at `https://<user>.github.io/<repo>/`.

Costs: GitHub Pages and Actions are free for public repositories. No other service is used. (Private repositories include a monthly free Actions quota; this workflow uses ~2–3 minutes per run.)

The build uses relative paths and hash routing, so it also works on any static host (Netlify, Cloudflare Pages, a USB stick with `npx vite preview`).

## Installing the app (PWA)

- **iPhone / iPad**: open the site in **Safari** → Share → **Add to Home Screen**.
- **Android**: open in **Chrome** → menu ⋮ → **Install app** (or use the button in Profile → Install).
- **Windows / macOS**: Chrome or Edge → install icon in the address bar.

After the first visit all lessons, questions and flashcards are cached and work **offline**.

## Architecture

- **React 18 + TypeScript + Vite**, Tailwind CSS, React Router (hash routing), lucide icons.
- **IndexedDB via Dexie** for all user data (progress, attempts, flashcard states, XP, achievements, interview attempts, recordings, stories, CV).
- **vite-plugin-pwa / Workbox**: precaches app + content; news uses network-first with cached fallback.
- **ts-fsrs**: FSRS spaced repetition (90% target retention).
- **pdf.js + mammoth** (lazy-loaded): on-device CV parsing.
- **Web Speech API + MediaRecorder**: voice practice (browser-native, consent-gated).
- Content is typed data in `src/content/**` — see `docs/CONTENT_GUIDE.md` to add lessons.

See `docs/ARCHITECTURE.md` (data model, rules), `docs/LIMITATIONS.md` and `docs/ROADMAP.md`.

```
src/
  content/       curriculum.ts (all 11 academies), lessons/*.ts, interview/*.ts, cases.ts, types.ts, registry.ts
  lib/           finance.ts, grading.ts, srs.ts, mastery.ts, gamification.ts, achievements.ts, actions.ts,
                 practice.ts, formulaDrills.ts, recommend.ts, cv.ts, speech.ts, interview.ts, news.ts, backup.ts
  db/            Dexie schema
  pages/         Home, Learn, Academy, LessonPlayer, Practice, QuizSession, Flashcards, FormulaTrainer,
                 Interviews, InterviewList/Question, MockInterview, StoryBank, Personalized, News, Cases, Profile, CV
  components/    UI kit, QuestionView (all question types), InterviewAnswer (voice/written + rubric), Layout
scripts/         fetch-news.mjs + news-lib.mjs + news-sources.json, make-icons.mjs
tests/           unit/*.test.ts, e2e/smoke.mjs
```

## Privacy

Everything stays on your device. CV files are parsed locally and never uploaded. Audio recordings are kept only if you enable it. Speech-to-text is off until you consent (your browser may send audio to its vendor's speech service). Export/restore and full deletion are in **Profile → Your data**.

## License

MIT for the code. Educational content © the project author(s); it is educational material, not professional, accounting or investment advice.
