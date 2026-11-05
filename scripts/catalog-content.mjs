import { readFileSync } from "node:fs";
import { runInNewContext } from "node:vm";
import { languageFromURL, canonicalForLanguage } from "../website/seo.js";

const source = readFileSync(new URL("../website/app.js", import.meta.url), "utf8")
  .replace(/^import .* from "\.\/seo\.js(?:\?v=[^"]+)?";\n/m, "");
const metadataBoundary = source.indexOf("let activeLanguage");
const renderBoundary = source.indexOf("function updateURL()");
if (metadataBoundary < 0 || renderBoundary < metadataBoundary) throw new Error("Update the static renderer after reorganizing app.js");

export function readCatalogMetadata() {
  return runInNewContext(source.slice(0, metadataBoundary) + ";({ appCopy, copy, categories })", {}, { timeout: 1_000 });
}

// Reuse the actual card, essentials and license renderers. Never maintain a second catalog.
export function renderStaticCatalog(document, language, catalog, url) {
  return runInNewContext(source.slice(0, renderBoundary) + `
    activeLanguage = language;
    apps = [...catalog].sort(compareApps);
    appGrid.innerHTML = apps.map(cardTemplate).join("");
    appGrid.setAttribute("data-catalog-language", activeLanguage);
    renderEssentials(); renderFilters(); renderStandards();
    document.querySelector("#app-total").textContent = String(apps.length);
    document.querySelector("#category-total").textContent = String(categories.length - 1);
    resultCount.textContent = t("foundCount", { count: apps.length });
    ({ t, localized, apps, copy });
  `, {
    document, language, catalog, location: new URL(url), URL, URLSearchParams, languageFromURL, canonicalForLanguage,
    localStorage: { getItem: () => null, setItem: () => {} }
  }, { timeout: 5_000 });
}
