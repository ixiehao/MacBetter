import { readFileSync } from "node:fs";
import { readCatalogMetadata } from "../../scripts/catalog-content.mjs";

export const apps = JSON.parse(readFileSync(new URL("../../website/data/apps.json", import.meta.url), "utf8"));
export const metadata = readCatalogMetadata();
const allLanguages = ["en", "zh", "ja"];
const selectedLanguage = process.env.MACBETTER_TEST_LANGUAGE;
if (selectedLanguage && !allLanguages.includes(selectedLanguage)) throw new Error("Unknown MACBETTER_TEST_LANGUAGE");
export const languages = selectedLanguage ? [selectedLanguage] : allLanguages;
export const viewports = [
  [320, 568], [360, 780], [375, 812], [390, 844], [430, 932],
  [600, 900], [700, 900], [701, 900], [768, 1024], [819, 900],
  [820, 900], [900, 900], [1024, 900], [1159, 900], [1160, 900],
  [1280, 900], [1440, 1000], [740, 360], [844, 390]
].map(([width, height]) => ({ width, height }));

export function missingTranslations(catalog = apps, table = metadata.appCopy) {
  const issues = [];
  for (const app of catalog) {
    for (const language of ["en", "ja"]) {
      for (const key of ["summary", "recommendation", "tags", "compatibility", "permissions"]) {
        const value = table[language]?.[app.id]?.[key];
        if (key === "tags" ? !Array.isArray(value) || !value.length || value.some(tag => typeof tag !== "string" || !tag.trim()) : typeof value !== "string" || !value.trim()) {
          issues.push(`${app.id}: ${language}.${key}`);
        }
      }
    }
  }
  return issues;
}
