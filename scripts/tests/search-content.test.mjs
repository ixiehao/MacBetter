import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { parseHTML } from "linkedom";
import { readCatalogMetadata } from "../catalog-content.mjs";
import { canonicalForLanguage, languageFromURL, languagePages, markdownPages } from "../../website/seo.js";
import { indexNowPayload } from "../submit-indexnow.mjs";

const root = new URL("../../website/", import.meta.url);
const apps = JSON.parse(readFileSync(new URL("data/apps.json", root), "utf8"));
const { copy, appCopy } = readCatalogMetadata();
for (const language of Object.keys(languagePages)) {
  test(`${language}: static HTML and schema expose the real catalog without JavaScript`, () => {
    const html = readFileSync(new URL(languagePages[language] || "index.html", root), "utf8");
    const { document } = parseHTML(html);
    const canonical = canonicalForLanguage(language);
    assert.equal(document.documentElement.lang, copy[language].htmlLang);
    assert.equal(document.title, copy[language].pageTitle);
    assert.equal(document.querySelector('meta[name="description"]').getAttribute("content"), copy[language].pageDescription);
    assert.equal(document.querySelector('link[rel="canonical"]').getAttribute("href"), canonical);
    assert.equal(document.querySelector('meta[property="og:url"]').getAttribute("content"), canonical);
    assert.equal(document.querySelectorAll("#app-grid > .app-card").length, apps.length);
    const graph = JSON.parse(document.querySelector("#site-schema").textContent)["@graph"];
    assert.equal(graph.find(node => node["@type"] === "CollectionPage").url, canonical);
    const list = graph.find(node => node["@type"] === "ItemList");
    assert.equal(list.numberOfItems, apps.length);
    assert.equal(list.itemListElement.length, apps.length);
    const names = new Set(list.itemListElement.map(entry => entry.item.name));
    for (const app of apps) {
      const card = document.getElementById(`app-${app.id}`);
      assert.ok(names.has(app.name));
      assert.equal(card.querySelector(".card-summary").textContent, appCopy[language]?.[app.id]?.summary ?? app.summary);
      assert.equal(card.querySelector(".download-link").getAttribute("href"), app.download);
      assert.ok(document.querySelector('link[type="text/markdown"]'));
    }
    assert.equal(document.querySelectorAll("[data-language]").length, 3);
    for (const [alternate] of Object.entries(languagePages)) {
      const hreflang = alternate === "zh" ? "zh-CN" : alternate;
      assert.equal(document.querySelector(`link[hreflang="${hreflang}"]`).getAttribute("href"), canonicalForLanguage(alternate));
      assert.ok(document.querySelector(`a[data-language="${alternate}"][href]`));
    }
    const markdown = readFileSync(new URL(markdownPages[language], root), "utf8");
    for (const app of apps) {
      assert.ok(markdown.includes(`## ${app.name}\n`));
      assert.ok(markdown.includes(app.download));
    }
    assert.doesNotMatch(html, /cloudflareinsights|analytics\.js|googletagmanager/);
  });
}

test("language URLs preserve old links and give explicit localized paths priority", () => {
  const base = "https://ixiehao.github.io/MacBetter/";
  assert.equal(languageFromURL(base), "en");
  assert.equal(languageFromURL(base, "ja"), "ja");
  assert.equal(languageFromURL(`${base}zh.html`, "ja"), "zh");
  assert.equal(languageFromURL(`${base}ja.html?lang=zh`, "en"), "zh");
  assert.equal(languageFromURL(`${base}?lang=en`, "zh"), "en");
  assert.equal(languageFromURL(`${base}?lang=invalid`, "zh"), "en");
});

test("sitemap contains only canonical language pages and llms links resolve locally", () => {
  const xml = readFileSync(new URL("sitemap.xml", root), "utf8");
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]);
  assert.deepEqual(urls, Object.keys(languagePages).map(canonicalForLanguage));
  assert.doesNotMatch(xml, /\?lang=|<lastmod>|<changefreq>/);
  const llms = readFileSync(new URL("llms.txt", root), "utf8");
  for (const name of Object.values(markdownPages)) assert.ok(llms.includes(name));
});

test("IndexNow submits only the three canonical pages within its verified directory", () => {
  const payload = indexNowPayload();
  assert.equal(payload.host, "ixiehao.github.io");
  assert.equal(payload.keyLocation, "https://ixiehao.github.io/MacBetter/indexnow-key.txt");
  assert.deepEqual(payload.urlList, Object.keys(languagePages).map(canonicalForLanguage));
  assert.ok(payload.urlList.every(url => url.startsWith("https://ixiehao.github.io/MacBetter/")));
});
