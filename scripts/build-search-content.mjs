import { readFileSync, writeFileSync } from "node:fs";
import { parseHTML } from "linkedom";
import { renderStaticCatalog } from "./catalog-content.mjs";
import { desktopCatalog } from "./desktop-catalog.mjs";
import { canonicalForLanguage, publicSiteURL, languagePages, markdownPages, schemaForCatalog } from "../website/seo.js";

const website = new URL("../website/", import.meta.url);
const template = readFileSync(new URL("templates/index.html", import.meta.url), "utf8");
const catalog = JSON.parse(readFileSync(new URL("data/apps.json", website), "utf8"));
const desktopPlist = readFileSync(new URL("../desktop/Packaging/Info.plist", import.meta.url), "utf8");
const desktopVersion = desktopPlist.match(/<key>CFBundleShortVersionString<\/key>\s*<string>(\d+\.\d+\.\d+)<\/string>/)?.[1];
const desktopMinimum = desktopPlist.match(/<key>LSMinimumSystemVersion<\/key>\s*<string>(\d+(?:\.\d+)*)<\/string>/)?.[1];
if (!desktopVersion || !desktopMinimum) throw new Error("MacBetter Desktop version or minimum macOS is missing");
const releaseURL = `https://github.com/ixiehao/MacBetter/releases/tag/v${desktopVersion}`;
const downloadRoot = `https://github.com/ixiehao/MacBetter/releases/download/v${desktopVersion}`;
const check = process.argv.includes("--check");
const stale = [];
const write = (name, content) => {
  content = content.replace(/[\t ]+$/gm, "").trimEnd() + "\n";
  const file = new URL(name, website);
  if (check) {
    let current;
    try { current = readFileSync(file, "utf8"); } catch {}
    if (current !== content) stale.push(name);
  } else writeFileSync(file, content);
};
const safeJSON = value => JSON.stringify(value).replace(/</g, "\\u003c");
const line = value => String(value).replace(/[\r\n]+/g, " ");

write("data/desktop-v1.json", desktopCatalog(catalog));
write("assets/desktop-mark.svg", readFileSync(new URL("../desktop/Brand/macbetter-mark.svg", import.meta.url), "utf8"));

for (const language of Object.keys(languagePages)) {
  const canonical = canonicalForLanguage(language);
  const { document } = parseHTML(template);
  const { t, localized, apps, copy, architectureLabels } = renderStaticCatalog(document, language, catalog, canonical);
  document.querySelector("[data-desktop-version]").textContent = `v${desktopVersion}`;
  document.querySelector("[data-desktop-minimum]").textContent = `macOS ${desktopMinimum.replace(/\.0$/, "")}+`;
  document.querySelector("[data-desktop-release]").setAttribute("href", releaseURL);
  document.querySelectorAll("[data-desktop-download]").forEach(link => {
    link.setAttribute("href", `${downloadRoot}/MacBetter-${desktopVersion}-${link.dataset.desktopDownload}.dmg`);
  });
  document.documentElement.lang = t("htmlLang");
  document.title = t("pageTitle");
  document.querySelectorAll("[data-i18n]").forEach(element => { element.textContent = t(element.getAttribute("data-i18n")); });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(element => { element.setAttribute("placeholder", t(element.getAttribute("data-i18n-placeholder"))); });
  document.querySelectorAll("[data-i18n-aria-label]").forEach(element => { element.setAttribute("aria-label", t(element.getAttribute("data-i18n-aria-label"))); });
  document.querySelectorAll("[data-language]").forEach(element => {
    element.removeAttribute("aria-current");
    if (element.dataset.language === language) element.setAttribute("aria-current", "page");
    element.setAttribute("aria-label", t(`languageOption.${element.dataset.language}`));
  });
  document.querySelector('link[rel="canonical"]').setAttribute("href", canonical);
  const metadata = {
    'meta[name="description"]': t("pageDescription"),
    'meta[property="og:url"]': canonical,
    'meta[property="og:site_name"]': t("communityHeading"),
    'meta[property="og:locale"]': { en: "en_US", zh: "zh_CN", ja: "ja_JP" }[language]
  };
  for (const selector of ['meta[property="og:title"]', 'meta[property="og:image:alt"]', 'meta[name="twitter:title"]', 'meta[name="twitter:image:alt"]']) metadata[selector] = t("pageTitle");
  for (const selector of ['meta[property="og:description"]', 'meta[name="twitter:description"]']) metadata[selector] = t("pageDescription");
  for (const [selector, content] of Object.entries(metadata)) document.querySelector(selector).setAttribute("content", content);
  document.querySelector('[data-directory-markdown]').setAttribute("href", markdownPages[language]);
  document.querySelector('link[type="text/markdown"]').setAttribute("href", new URL(markdownPages[language], publicSiteURL).href);
  document.querySelector("#site-schema").textContent = safeJSON(schemaForCatalog(apps.map(app => ({ ...app, summary: localized(app, "summary") })), {
    language, title: t("pageTitle"), description: t("pageDescription"), categoryLabels: copy[language].category
  }));
  // These outputs contain the same visible cards for people and all crawlers.
  write(languagePages[language] || "index.html", document.toString() + "\n");

  const labels = {
    en: { category: "Category", license: "License", tested: "Tested by io", checked: "Public project details checked; not personally tested", system: "System", permissions: "Permissions / notes", site: "Official site", source: "Source", download: "Download", intro: "A community-maintained directory of free and open-source macOS apps. Some projects offer optional paid features. Availability, permissions and licensing can change; follow the official project for current details. Listed status is not a security audit." },
    zh: { category: "分类", license: "许可证", tested: "io 实测", checked: "已核对公开项目信息，未标记为 io 实测", system: "系统要求", permissions: "权限与说明", site: "项目主页", source: "源代码", download: "下载", intro: "由社区共同维护的免费开源 macOS 软件目录。部分项目有可选付费功能；可用性、权限和许可可能变化，以项目官方说明为准。收录与实测不等于安全审计。" },
    ja: { category: "カテゴリ", license: "ライセンス", tested: "io が使用確認済み", checked: "公開情報を確認済み。io による使用確認の対象外", system: "動作環境", permissions: "権限・注意点", site: "公式サイト", source: "ソースコード", download: "ダウンロード", intro: "コミュニティで管理する無料・オープンソースのmacOSアプリ集です。一部に有料の追加機能があります。対応環境、権限、ライセンスの最新情報は各プロジェクトをご確認ください。掲載や使用確認はセキュリティ監査を意味しません。" }
  }[language];
  const markdown = [`# ${t("communityHeading")} · MacBetter`, "", `> ${labels.intro}`, "", `[${t("catalogHeading")}](${canonical}) · [GitHub](https://github.com/ixiehao/MacBetter) · [${t("desktopNav")}](${canonical}#desktop)`, ""];
  for (const app of apps) {
    const chip = architectureLabels[app.architecture?.support];
    const sourceURL = URL.canParse(app.architecture?.source) ? new URL(app.architecture.source) : null;
    if (!chip || sourceURL?.protocol !== "https:" || sourceURL.username || sourceURL.password) {
      throw new Error(`Missing chip status or HTTPS source for ${app.id}`);
    }
    markdown.push(`## ${line(app.name)}`, "", line(localized(app, "summary")), "",
      `- ${labels.category}: ${t(`category.${app.category}`)}`,
      `- ${labels.license}: ${app.license}`,
      `- ${app.status.level === "tested" ? labels.tested : labels.checked}`,
      `- ${labels.system}: ${line(localized(app, "compatibility"))}`,
      `- ${t("chipLabel")}: ${chip[language]} · [${t("chipSource")}](${app.architecture.source})`,
      `- ${labels.permissions}: ${line(localized(app, "permissions"))}`,
      `- [${labels.site}](${app.homepage}) · [${labels.source}](${app.github}) · [${labels.download}](${app.download})`, "");
  }
  write(markdownPages[language], markdown.join("\n") + "\n");
}

const alternates = Object.entries(languagePages).map(([language]) => `    <xhtml:link rel="alternate" hreflang="${language === "zh" ? "zh-CN" : language}" href="${canonicalForLanguage(language)}" />`).join("\n") + `\n    <xhtml:link rel="alternate" hreflang="x-default" href="${publicSiteURL}" />`;
write("sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${Object.keys(languagePages).map(language => `  <url>\n    <loc>${canonicalForLanguage(language)}</loc>\n${alternates}\n  </url>`).join("\n")}\n</urlset>\n`);
write("llms.txt", `# MacBetter\n\n> A community-maintained directory of free and open-source macOS apps, published in English, Simplified Chinese and Japanese.\n\nEntries distinguish apps tested by io from projects reviewed through public sources. This is not a security audit. Some apps offer optional paid features; current licensing, system requirements and availability come from the original projects.\n\n## Catalog\n\n- [English](${publicSiteURL}index.md): Complete app directory with official, source and download links.\n- [简体中文](${publicSiteURL}zh.md): 完整软件目录、许可证、系统与权限说明。\n- [日本語](${publicSiteURL}ja.md): アプリ一覧、公式リンク、ライセンス、動作環境。\n\n## Optional\n\n- [Project source](https://github.com/ixiehao/MacBetter): Source and contribution instructions.\n- [Submission criteria](https://github.com/ixiehao/MacBetter/blob/main/CONTRIBUTING.md): Recommend an app or report incorrect information.\n`);
if (stale.length) throw new Error(`Stale search content: ${stale.join(", ")}. Run npm run build:search.`);
console.log(`${check ? "Verified" : "Generated"} three static catalogs, Markdown editions, structured data, sitemap and llms.txt (${catalog.length} apps).`);
