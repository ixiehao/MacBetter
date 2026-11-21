import { readFileSync } from "node:fs";
import { readCatalogMetadata } from "./catalog-content.mjs";

const languages = ["en", "zh", "ja"];

export function desktopCatalog(catalog) {
  const { appCopy, copy, categories, essentialAppIds } = readCatalogMetadata();
  const { icons } = JSON.parse(readFileSync(new URL("../website/assets/icons/sources.json", import.meta.url), "utf8"));
  const hashes = new Map(icons.map(icon => [icon.id, icon.sha256]));
  const localized = (app, language, key) => appCopy[language]?.[app.id]?.[key] ?? app[key];
  return JSON.stringify({
    schemaVersion: 1,
    essentials: essentialAppIds,
    categories: categories.filter(id => id !== "all").map(id => ({
      id,
      names: Object.fromEntries(languages.map(language => [language, copy[language].category[id]])),
    })),
    apps: [...catalog].sort((a, b) => a.sortOrder - b.sortOrder).map(app => ({
      ...app,
      iconHash: hashes.get(app.id),
      translations: Object.fromEntries(languages.map(language => [
        language,
        Object.fromEntries(["summary", "recommendation", "compatibility", "permissions", "tags"].map(
          key => [key, localized(app, language, key)]
        )),
      ])),
    })),
  });
}
