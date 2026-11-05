import { test, expect, openCatalog } from "./support/browser.mjs";
import { apps, languages } from "./support/catalog.mjs";
import { languagePages } from "../website/seo.js";

for (const language of languages) {
  test.describe(`${language} crawler-readable catalog`, () => {
    test.use({ javaScriptEnabled: false, viewport: { width: 320, height: 568 }, isMobile: true, hasTouch: true });
    test("all cards and language links work without JavaScript on a phone", async ({ page }) => {
      await page.goto(`./${languagePages[language]}`);
      await expect(page.locator("html")).toHaveAttribute("lang", language === "zh" ? "zh-CN" : language);
      await expect(page.locator("#app-grid > .app-card")).toHaveCount(apps.length);
      await expect(page.locator(".catalog-controls")).toBeHidden();
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
      await expect(page.locator("#app-lumaview .download-link")).toHaveAttribute("href", apps.find(app => app.id === "lumaview").download);
      const next = language === "en" ? "ja" : "en";
      await page.locator(`[data-language="${next}"]`).click();
      await expect(page.locator("html")).toHaveAttribute("lang", next);
    });
  });

  test(`${language} old links normalize without losing search or filters`, async ({ page }) => {
    await openCatalog(page, language);
    await page.locator("#search-input").fill("ytDownloader");
    await expect(page.locator("#app-grid > .app-card")).toHaveCount(1);
    await expect(page).toHaveURL(new RegExp(`${languagePages[language].replace('.', '\\.')}\\?q=ytDownloader#catalog$`));
    await page.locator('[data-language="ja"]').click();
    await expect(page.locator("html")).toHaveAttribute("lang", "ja");
    await expect(page.locator("#search-input")).toHaveValue("ytDownloader");
    await page.locator("#clear-search").click();
    await expect(page).not.toHaveURL(/\bq=/);
    await expect(page.locator("#app-grid > .app-card")).toHaveCount(apps.length);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", "https://ixiehao.github.io/MacBetter/ja.html");
  });
}
