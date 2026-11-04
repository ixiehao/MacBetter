import { test, expect, openCatalog, measureCards } from "./support/browser.mjs";
import { apps, languages, viewports } from "./support/catalog.mjs";

for (const language of languages) for (const viewport of viewports) {
  test.describe(`${language} ${viewport.width}x${viewport.height}`, () => {
    const touch = viewport.width <= 430 || viewport.height <= 430;
    test.use({ isMobile: touch, hasTouch: touch, deviceScaleFactor: touch ? 2 : 1 });
    test(`${language} cards at ${viewport.width}x${viewport.height}`, async ({ page }, testInfo) => {
      await page.setViewportSize(viewport);
      await openCatalog(page, language);
      const report = await page.evaluate(measureCards);
      await testInfo.attach("card-layout", { body: Buffer.from(JSON.stringify(report, null, 2)), contentType: "application/json" });
      expect(report.ids.sort()).toEqual(apps.map(app => `app-${app.id}`).sort());
      expect(report.columns).toBe(viewport.width >= 1160 ? 4 : viewport.width >= 820 ? 3 : viewport.width > 700 ? 2 : 1);
      for (const id of [...new Set(report.violations.map(issue => issue.id).filter(Boolean))].slice(0, 3)) {
        await testInfo.attach(id, { body: await page.locator(`#${id}`).screenshot(), contentType: "image/png" });
      }
      expect(report.violations, JSON.stringify(report.violations, null, 2)).toEqual([]);
    });
  });
}

test("the layout guard detects overflowing content and a one-off card style", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await openCatalog(page, "en");
  await page.addStyleTag({ content: ".app-card:first-child { padding: 30px; } .app-card:first-child h3 { min-width: 2000px; }" });
  const report = await page.evaluate(measureCards);
  expect(report.violations.some(issue => issue.reason === "outside card")).toBe(true);
  expect(report.violations.some(issue => issue.reason === "inconsistent base card styles")).toBe(true);
});
