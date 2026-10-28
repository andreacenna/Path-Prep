// Renders public/icons/icon.svg to the PNG sizes required by the PWA manifest and iOS,
// using the locally available Chromium via Playwright (no image dependencies needed).
import { createRequire } from 'node:module';
const { chromium } = createRequire(import.meta.url)('playwright'); // CJS require honours NODE_PATH / global installs
import { readFileSync } from 'node:fs';

const svg = readFileSync(new URL('../public/icons/icon.svg', import.meta.url), 'utf8');
const targets = [
  { file: 'icon-192.png', size: 192, pad: 0, round: true },
  { file: 'icon-512.png', size: 512, pad: 0, round: true },
  { file: 'icon-maskable-512.png', size: 512, pad: 0.12, round: false },
  { file: 'apple-touch-icon.png', size: 180, pad: 0, round: false }
];
const browser = await chromium.launch();
const page = await browser.newPage();
for (const t of targets) {
  const inner = Math.round(t.size * (1 - 2 * t.pad));
  const body = t.round ? svg : svg.replace('rx="14"', 'rx="0"');
  await page.setViewportSize({ width: t.size, height: t.size });
  await page.setContent(`<html><body style="margin:0;background:${t.round ? 'transparent' : '#0a1428'};display:flex;align-items:center;justify-content:center;width:${t.size}px;height:${t.size}px">${body.replace('<svg ', `<svg width="${inner}" height="${inner}" `)}</body></html>`);
  await page.screenshot({ path: new URL(`../public/icons/${t.file}`, import.meta.url).pathname, omitBackground: t.round });
  console.log('wrote', t.file);
}
await browser.close();
