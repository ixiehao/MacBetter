import { test, expect, openCatalog, openPopover, measurePopover } from "./support/browser.mjs";
import { apps, languages } from "./support/catalog.mjs";

for (const language of languages) for (const viewport of [{ width: 820, height: 700 }, { width: 320, height: 568 }]) {
  test.describe(`${language} popovers ${viewport.width}px`, () => {
    test.use({ isMobile: viewport.width === 320, hasTouch: viewport.width === 320, deviceScaleFactor: viewport.width === 320 ? 2 : 1 });
    test(`${language} all permission and license popovers at ${viewport.width}px`, async ({ page }, testInfo) => {
      test.setTimeout(120_000);
      await page.setViewportSize(viewport);
      await openCatalog(page, language);
      const reports = [];
      try {
        for (const app of apps) for (const kind of ["app-details", "license-details"]) {
          await test.step(`${app.id} ${kind}`, async () => {
            const details = await openPopover(page, app.id, kind);
            reports.push(await details.evaluate(measurePopover));
            await page.keyboard.press("Escape");
            await expect(details).not.toHaveAttribute("open");
            await expect(details.locator("summary")).toBeFocused();
          });
        }
        await expect(page.locator('.app-icon[data-icon-fallback]')).toHaveCount(0);
      } finally {
        await testInfo.attach("popover-layout", { body: Buffer.from(JSON.stringify(reports, null, 2)), contentType: "application/json" });
      }
    });
  });
}

for (const language of languages) {
  test.describe(`${language} touch keyboard`, () => {
    test.use({ isMobile: true, hasTouch: true, deviceScaleFactor: 2 });
    test(`${language} long notes scroll and return keyboard focus`, async ({ page }) => {
      await page.setViewportSize({ width: 320, height: 360 });
      await openCatalog(page, language);
      const id = await page.locator("#app-grid > .app-card").evaluateAll(cards => [...cards].sort((a, b) => b.querySelector(".app-details dl").textContent.length - a.querySelector(".app-details dl").textContent.length)[0].id.slice(4));
      const details = await openPopover(page, id, "app-details");
      const panel = details.locator("dl");
      await page.keyboard.press("Tab");
      await expect(panel).toBeFocused();
      await expect.poll(() => panel.evaluate(el => el.scrollHeight - el.clientHeight)).toBeGreaterThan(0);
      await page.keyboard.press("PageDown");
      await expect.poll(() => panel.evaluate(el => el.scrollTop)).toBeGreaterThan(0);
      await page.keyboard.press("Escape");
      await expect(details).not.toHaveAttribute("open");
      await expect(details.locator("summary")).toBeFocused();
      await openPopover(page, id, "app-details");
      await page.setViewportSize({ width: 900, height: 700 });
      await expect.poll(async () => {
        const report = await details.evaluate(measurePopover);
        return !report.open || report.inside && report.textFits;
      }).toBe(true);
    });
  });
}
