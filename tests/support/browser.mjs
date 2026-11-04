import { test as base, expect } from "@playwright/test";
import { apps } from "./catalog.mjs";

export const test = base.extend({
  page: async ({ page, baseURL }, use) => {
    const origin = new URL(baseURL).origin;
    const errors = [];
    page.on("pageerror", error => errors.push(error.message));
    // Public screenshots and download servers must not make layout CI flaky.
    await page.route("**/*", route => new URL(route.request().url()).origin === origin ? route.continue() : route.abort());
    await use(page);
    expect(errors, "Browser runtime errors").toEqual([]);
  }
});
export { expect };

export async function openCatalog(page, language) {
  await page.goto(`./?lang=${language}#catalog`);
  await expect(page.locator("#app-grid > .app-card")).toHaveCount(apps.length);
  await expect(page.locator("html")).toHaveAttribute("lang", language === "zh" ? "zh-CN" : language);
  await page.evaluate(() => document.fonts.ready.then(() => undefined));
  expect(await page.evaluate(() => innerWidth), "Mobile layout must honor the device-width viewport").toBe(page.viewportSize().width);
  const fontNames = ["Inter Site", ...(language === "zh" ? ["Noto Sans SC Site"] : language === "ja" ? ["Noto Sans JP Site"] : [])];
  expect(await page.evaluate(names => names.every(name => [...document.fonts].some(font => font.family.replace(/["']/g, "") === name && font.status === "loaded")), fontNames), "Self-hosted fonts must load").toBe(true);
  await page.mouse.move(0, 0);
}

export function measureCards() {
  const cards = [...document.querySelectorAll("#app-grid > .app-card")];
  const violations = [];
  const fingerprints = new Map();
  const rows = [];
  const issue = (card, element, reason) => violations.push({ id: card.id, element, reason });
  for (const card of cards) {
    const box = card.getBoundingClientRect();
    let row = rows.find(group => Math.abs(group.top - box.top) < 1);
    if (!row) { row = { top: box.top, bottoms: [], footers: [] }; rows.push(row); }
    row.bottoms.push(box.bottom);
    row.footers.push(card.querySelector('.app-links').getBoundingClientRect().bottom);
    if (card.querySelectorAll('.app-links a').length !== 2) issue(card, '.app-links', 'unexpected extra or missing card actions');
    for (const element of card.querySelectorAll(".app-icon,.app-card-head,h3,.app-card-meta,.app-type,.card-summary,.recommendation,.tags,.tag,.app-links,.app-links > a,.preview-trigger,.license-details > summary")) {
      const rect = element.getBoundingClientRect();
      if (!rect.width || !rect.height) continue;
      const label = element.className || element.tagName;
      if (rect.left < box.left - 1 || rect.right > box.right + 1 || rect.bottom > box.bottom + 1) issue(card, label, "outside card");
      // Summaries intentionally clamp to three lines; recommendations use ellipsis.
      if (element.clientWidth && element.scrollWidth > element.clientWidth + 2 && !element.matches(".card-summary,.recommendation")) issue(card, label, "text or control overflows");
    }
    const footer = [...card.querySelector(".app-links").children].map(element => element.getBoundingClientRect());
    for (let i = 0; i < footer.length; i++) for (let j = i + 1; j < footer.length; j++) {
      const a = footer[i], b = footer[j];
      if (Math.min(a.right, b.right) - Math.max(a.left, b.left) > 1 && Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top) > 1) issue(card, ".app-links", "overlapping controls");
    }
    const title = card.querySelector("h3");
    const lines = title.getBoundingClientRect().height / parseFloat(getComputedStyle(title).lineHeight);
    if (lines >= 3.5 && title.clientWidth < 100) issue(card, "h3", "title squeezed into four or more lines");
    const css = getComputedStyle(card), titleCSS = getComputedStyle(title);
    const fingerprint = JSON.stringify([css.padding, css.borderRadius, css.columnGap, titleCSS.fontSize, titleCSS.fontWeight]);
    if (!fingerprints.has(fingerprint)) fingerprints.set(fingerprint, []);
    fingerprints.get(fingerprint).push(card.id);
  }
  if (fingerprints.size > 1) violations.push({ reason: "inconsistent base card styles", groups: [...fingerprints.values()] });
  if (rows.some(row => Math.max(...row.bottoms) - Math.min(...row.bottoms) > 1 || Math.max(...row.footers) - Math.min(...row.footers) > 1)) violations.push({ reason: "cards or footers in a row are misaligned" });
  if (document.documentElement.scrollWidth > innerWidth) violations.push({ reason: "page overflows horizontally" });
  if (document.documentElement.lang !== "zh-CN" && document.querySelector('.app-details dd[lang="zh-CN"]')) violations.push({ reason: "untranslated permission or compatibility text" });
  return { viewport: [innerWidth, innerHeight], columns: getComputedStyle(document.querySelector('#app-grid')).gridTemplateColumns.split(' ').length, language: document.documentElement.lang, ids: cards.map(card => card.id), violations };
}

export function measurePopover(element) {
  const panel = element.querySelector("dl,.license-popover");
  const rect = panel.getBoundingClientRect();
  const top = document.querySelector(".site-header").getBoundingClientRect().bottom;
  return {
    id: element.closest(".app-card").id,
    open: element.open,
    inside: element.open && rect.left >= -1 && rect.right <= innerWidth + 1 && rect.top >= top - 1 && rect.bottom <= innerHeight + 1,
    textFits: panel.scrollWidth <= panel.clientWidth + 1,
    rect: { x: rect.x, y: rect.y, width: rect.width, height: rect.height },
    viewport: [innerWidth, innerHeight]
  };
}

export async function openPopover(page, id, kind) {
  const details = page.locator(`#app-${id} .${kind}`);
  await details.locator("summary").click();
  await expect(details).toHaveAttribute("open", "");
  await expect.poll(async () => {
    const report = await details.evaluate(measurePopover);
    return report.inside && report.textFits;
  }, { message: `${id} ${kind} must fit inside the viewport`, intervals: [16, 32, 100] }).toBe(true);
  return details;
}
