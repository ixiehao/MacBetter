import { test, expect } from "./support/browser.mjs";
import { apps, metadata, missingTranslations } from "./support/catalog.mjs";

test("every catalog entry has complete localized card data", () => {
  expect(apps.length).toBeGreaterThan(0);
  expect(new Set(apps.map(app => app.id)).size).toBe(apps.length);
  expect(missingTranslations()).toEqual([]);
  for (const app of apps) {
    expect(app.id).toMatch(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    for (const field of ["name", "summary", "recommendation", "compatibility", "permissions", "license"]) expect(app[field], `${app.id}.${field}`).toBeTruthy();
    for (const language of ["en", "zh", "ja"]) {
      expect(metadata.copy[language].category[app.category], `${app.id}: ${language} category`).toBeTruthy();
    }
  }
});

test("a new app without translations is rejected", () => {
  const addedApp = { ...apps[0], id: "untranslated-new-app" };
  expect(missingTranslations([...apps, addedApp])).toContain("untranslated-new-app: en.summary");
  expect(missingTranslations([...apps, addedApp])).toContain("untranslated-new-app: ja.permissions");
});
