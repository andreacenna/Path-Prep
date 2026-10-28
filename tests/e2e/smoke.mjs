// End-to-end smoke test against the production build (vite preview).
// Usage: npm run build && npm run test:e2e   (uses the locally installed Chromium/Playwright)
import { createRequire } from 'node:module';
import { spawn } from 'node:child_process';
import { mkdirSync } from 'node:fs';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const axeSource = require('fs').readFileSync(require.resolve('axe-core/axe.min.js'), 'utf8');

/** Run axe-core and return serious/critical WCAG A/AA violations. */
async function axe(page, label) {
  await page.addScriptTag({ content: axeSource });
  const res = await page.evaluate(async () => (await window.axe.run(document, { runOnly: ['wcag2a', 'wcag2aa'] })).violations
    .filter((v) => v.impact === 'serious' || v.impact === 'critical')
    .map((v) => `${v.id} (${v.nodes.length}): ${v.nodes[0].target.join(' ')}`));
  if (res.length) console.log(`a11y [${label}]:\n  ` + res.join('\n  '));
  return res;
}
const a11y = [];

const PORT = 4789;
const BASE = `http://localhost:${PORT}/`;
const shots = new URL('../../test-results/', import.meta.url).pathname;
mkdirSync(shots, { recursive: true });

const server = spawn('npx', ['vite', 'preview', '--port', String(PORT), '--strictPort'], { stdio: 'pipe', detached: true });
await new Promise((res, rej) => {
  server.stdout.on('data', (d) => String(d).includes('Local') && res());
  setTimeout(() => rej(new Error('preview did not start')), 20000);
});

const fail = (m) => { throw new Error(m); };
const browser = await chromium.launch();
let ok = false;
try {
  const ctx = await browser.newContext({ viewport: { width: 375, height: 740 }, deviceScaleFactor: 2, hasTouch: true, isMobile: true, locale: 'en-US', reducedMotion: 'reduce' });
  const page = await ctx.newPage();
  const errors = [];
  page.on('pageerror', (e) => errors.push(e.message));
  page.on('console', (m) => m.type() === 'error' && !/news\.json|404/.test(m.text()) && errors.push(m.text()));

  await page.goto(BASE);
  await page.getByText('Welcome to PATH Academy').waitFor();
  await page.screenshot({ path: shots + '01-onboarding.png' });
  await page.getByLabel(/your name/i).fill('Tester');
  await page.getByRole('button', { name: "Let's go" }).click();
  await page.getByText('Good to see you, Tester').waitFor();
  await page.waitForTimeout(500);
  a11y.push(...(await axe(page, 'home')));
  await page.screenshot({ path: shots + '02-home.png', fullPage: true });

  // Learn: all 11 academies visible
  await page.getByRole('link', { name: 'Learn' }).last().click();
  await page.getByRole('heading', { name: 'Academies' }).waitFor();
  const academies = await page.locator('a[href^="#/learn/"], a[href="#/cases"]').count();
  if (academies !== 11) fail(`expected 11 academies, got ${academies}`);
  await page.screenshot({ path: shots + '03-learn.png', fullPage: true });

  // Open accounting, start the first lesson
  await page.getByText('Accounting & Financial Statements').first().click();
  await page.getByText('Module A1').waitFor();
  a11y.push(...(await axe(page, 'academy')));
  await page.screenshot({ path: shots + '04-academy.png', fullPage: true });
  await page.getByRole('link', { name: /The Accounting Equation/ }).click();
  await page.getByRole('button', { name: 'Start' }).click();

  // Walk through the lesson, answering exercises (first option / sensible numbers)
  for (let step = 0; step < 30; step++) {
    if (await page.getByText('Lesson complete').isVisible()) break;
    const check = page.getByRole('button', { name: 'Check' });
    if (await check.isVisible()) {
      const num = page.getByPlaceholder('Type your answer');
      if (await num.count()) await num.first().fill('140');
      else {
        const opt = page.locator('[role=radio], [role=checkbox]').first();
        await opt.click();
      }
      await check.click();
      if (step === 6) await page.screenshot({ path: shots + '05-exercise.png', fullPage: true });
      await page.getByRole('button', { name: /Continue|Done/ }).last().click({ timeout: 5000 }).catch(() => {});
      continue;
    }
    if (step === 2) await page.screenshot({ path: shots + '05b-screen.png', fullPage: true });
    const reveal = page.getByRole('button', { name: 'Reveal answer' });
    if (await reveal.isVisible()) await reveal.click();
    await page.getByRole('button', { name: /^(Continue|Done)$/ }).last().click({ timeout: 5000 }).catch(() => {});
  }
  await page.getByText('Lesson complete').waitFor();
  await page.screenshot({ path: shots + '06-complete.png' });
  await page.getByRole('button', { name: 'Back to academy' }).click();
  await page.getByText('Completed').first().waitFor();

  // XP persisted → home shows XP > 0; switch language to Italian; progress kept
  await page.goto(BASE + '#/profile');
  await page.getByRole('button', { name: 'Italiano' }).click();
  await page.getByRole('heading', { name: 'Profilo' }).waitFor();
  await page.goto(BASE + '#/');
  await page.getByText('Bentornato, Tester').waitFor();
  const xpText = await page.locator('text=XP totali').locator('..').innerText();
  if (!/[1-9]/.test(xpText)) fail('XP not persisted: ' + xpText);
  await page.screenshot({ path: shots + '07-home-it.png', fullPage: true });

  // Flashcards were added to the deck
  await page.goto(BASE + '#/practice/flashcards');
  await page.getByRole('button', { name: 'Mostra risposta' }).first().click();
  await page.getByRole('button', { name: /Bene/ }).click();
  await page.screenshot({ path: shots + '08-flashcards.png' });

  // Formula trainer, interview gym, news, cases
  await page.goto(BASE + '#/practice/formulas');
  await page.getByText('Allenatore di formule').first().waitFor();
  await page.goto(BASE + '#/interviews/list/technical');
  await page.locator('a[href^="#/interviews/q/"]').first().click();
  await page.getByRole('button', { name: 'Confronta con la risposta modello' }).click();
  await page.getByText('Risposta modello', { exact: true }).waitFor();
  a11y.push(...(await axe(page, 'interview')));
  await page.screenshot({ path: shots + '09-interview.png', fullPage: true });
  await page.goto(BASE + '#/news');
  await page.getByText('PATH Daily Briefing').waitFor();
  await page.goto(BASE + '#/cases');
  await page.locator('a[href^="#/cases/"]').first().click();
  await page.getByText(/Logica strategica/).waitFor();
  await page.screenshot({ path: shots + '10-case.png', fullPage: true });

  // Offline: once the service worker is active, a reload offline still renders lessons
  await page.goto(BASE + '#/');
  await page.evaluate(async () => { await navigator.serviceWorker.ready; });
  await page.reload();
  await page.evaluate(async () => { await navigator.serviceWorker.ready; });
  await ctx.setOffline(true);
  await page.goto(BASE + '#/learn/accounting');
  await page.getByText('Modulo A1').waitFor({ timeout: 10000 });
  await page.screenshot({ path: shots + '11-offline.png' });
  await ctx.setOffline(false);

  // Desktop layout
  const desk = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  await desk.goto(BASE);
  await desk.getByText('Welcome to PATH Academy').waitFor();
  await desk.getByRole('button', { name: "Let's go" }).click();
  await desk.getByText('Good to see you').waitFor();
  await desk.waitForTimeout(600);
  await desk.screenshot({ path: shots + '12-desktop.png' });

  if (a11y.length) fail('Accessibility violations (see above)');
  if (errors.length) fail('Console/page errors:\n' + errors.join('\n'));
  ok = true;
  console.log('E2E smoke test passed. Screenshots in test-results/');
} finally {
  await browser.close();
  try { process.kill(-server.pid); } catch { server.kill(); }
  if (!ok) process.exitCode = 1;
}
