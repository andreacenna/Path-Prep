# Architecture & data model

## Principles
Static, zero-cost, offline-first. No server is required for any core feature. All calculations are deterministic and tested.

## Content model (`src/content/types.ts`)
- `Academy → Module → LessonStub` in `curriculum.ts` defines the full syllabus. A stub becomes **available** when a `Lesson` with the same id exists in `src/content/lessons/*.ts` (auto-discovered, code-split, precached). Stubs without content render as **Upcoming** and never count as completed.
- `Lesson`: objective, `screens[]` (intuition, technical, formula, example, realworld, exercise, interview, mistakes, summary), `questions[]`, `flashcards[]`, `sources`, `reviewed` date.
- `Question` kinds: `mcq`, `multi`, `numeric` (tolerance, optional `verify` → finance function), `order`, `grid` (spreadsheet cells, each verifiable).
- `InterviewQuestion`: reference answer + rubric with essential points (+ optional auto-graded numeric part).
- `CaseStudy`: the 12-point deal framework with status (announced/pending/completed/withdrawn/blocked/terminated) and sources.

## User data (IndexedDB, `src/db/db.ts`)
| Table | Purpose |
|---|---|
| settings | language, daily goal, active path, consents, reminder hour |
| lessonProgress | status, last screen (resume), best/last first-try score |
| attempts | every answered question: topic, correctness, difficulty, time, source |
| cards / reviewLogs | FSRS state per flashcard and review history |
| xp | XP ledger (drives streaks, levels, weekly chart) |
| achievements | unlocked badges |
| interviewAttempts / recordings | answers, rubric ticks, verdict; optional local audio |
| stories | STAR Story Bank |
| cv | parsed/edited CV entries with `verified` flags |
| newsQuiz | news quiz completions |

## Rules
- **XP**: correct answers 5×difficulty (first time per day; repeats 1 XP), wrong answers 0; lesson completion 10 + 20×first-try accuracy (re-takes 5×accuracy); flashcard review 1–2; daily challenge up to 30; interview attempt 3/8/15. Opening a lesson earns nothing.
- **Streak**: consecutive local days with XP; alive until midnight.
- **Levels**: level L starts at 50·(L−1)² XP; titles Intern → Managing Director.
- **Topic mastery** (`lib/mastery.ts`): recency- and difficulty-weighted accuracy over the last 10 attempts → Not started / Learning / Practicing / Proficient (≥80%, ≥5 attempts) / Mastered (≥90%, ≥10 attempts, ≥2 days) / Needs review (strong topic idle 14–30 days, or recent slump).
- **Lesson mastered** = completed with ≥70% first-try accuracy **and** all its topics Proficient/Mastered in practice.
- **Spaced repetition**: FSRS via ts-fsrs, request retention 0.9, fuzz on. Lesson flashcards enter the deck on completion.
- **Daily challenge**: 5 questions seeded by date (same set all day), spread across academies, drawn from completed lessons.
- **Interview verdict**: Correct = all essential rubric points + ≥60% of the others (+ numeric correct if any); Partial = some essential points or ≥50% overall; else Incorrect. Self-assessed; never presented as AI grading.

## News pipeline
`scripts/fetch-news.mjs` (GitHub Actions, twice daily) → fetch configured RSS/Atom feeds politely (1 req/s, UA, timeout) → parse → keyword classification (`news-lib.mjs`) → merge with previous items, dedupe by link/title, keep 7 days → `public/data/news.json` with `generatedAt` and per-source status. If every source fails, the previous file is kept. The app shows the last successful update time and warns when the briefing is >2 days old.
