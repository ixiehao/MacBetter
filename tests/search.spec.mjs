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

  test(`${language} chip selection survives reload and filters current native support`, async ({ page }) => {
    await openCatalog(page, language);
    const chip = page.locator("#chip-filter");
    const cards = page.locator("#app-grid > .app-card");
    await chip.selectOption("x86_64");
    await expect(page).toHaveURL(/[?&]chip=x86_64/);
    await expect(page.locator("#app-ezntfs")).toHaveCount(0);
    await expect(page.locator("#app-macrar")).toBeVisible();
    await page.reload();
    await expect(chip).toHaveValue("x86_64");
    await expect(cards).toHaveCount(apps.filter(app => ["both", "intel", "rosetta"].includes(app.architecture.support)).length);
    await chip.selectOption("arm64");
    await expect(page.locator("#app-ezntfs")).toBeVisible();
    await expect(page.locator("#app-screenity")).toHaveCount(0);
    await page.locator("#clear-filters").click();
    await expect(page).not.toHaveURL(/[?&]chip=/);
    await expect(cards).toHaveCount(apps.length);
    await chip.selectOption("x86_64");
    await page.locator('[data-essential-app="ezntfs"]').click();
    await expect(page).toHaveURL(/#app-ezntfs$/);
    await expect(chip).toHaveValue("all");
    await expect(page.locator("#app-ezntfs")).toBeFocused();
  });
}
