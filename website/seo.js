export const publicSiteURL = "https://ixiehao.github.io/MacBetter/";
export const languagePages = { en: "", zh: "zh.html", ja: "ja.html" };
export const markdownPages = { en: "index.md", zh: "zh.md", ja: "ja.md" };

export function canonicalForLanguage(language) {
  return new URL(languagePages[language] ?? "", publicSiteURL).href;
}

export function languageFromURL(href, savedLanguage = "en") {
  const url = new URL(href);
  const requested = url.searchParams.get("lang");
  if (requested !== null) return Object.hasOwn(languagePages, requested) ? requested : "en";
  for (const language of ["zh", "ja"]) {
    if (url.pathname === new URL(languagePages[language], publicSiteURL).pathname) return language;
  }
  return Object.hasOwn(languagePages, savedLanguage) ? savedLanguage : "en";
}

export function schemaForCatalog(apps, { language, title, description, categoryLabels }) {
  const canonical = canonicalForLanguage(language);
  const htmlLanguage = language === "zh" ? "zh-CN" : language;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite", "@id": `${publicSiteURL}#website`,
        url: publicSiteURL, name: "MacBetter",
        alternateName: ["让 Mac 更好用", "Make Your Mac Better", "Macアプリ集"],
        inLanguage: ["en", "zh-CN", "ja"],
        publisher: { "@type": "Person", name: "iXiehao", url: "https://github.com/ixiehao" }
      },
      {
        "@type": "CollectionPage", "@id": `${canonical}#webpage`, url: canonical,
        name: title, description, inLanguage: htmlLanguage,
        isPartOf: { "@id": `${publicSiteURL}#website` },
        mainEntity: { "@id": `${canonical}#catalog-list` }
      },
      {
        "@type": "ItemList", "@id": `${canonical}#catalog-list`,
        name: title, numberOfItems: apps.length,
        itemListElement: apps.map((app, index) => ({
          "@type": "ListItem", position: index + 1,
          url: `${canonical}#app-${app.id}`,
          item: {
            "@type": "SoftwareApplication", "@id": `${canonical}#app-${app.id}`,
            name: app.name, description: app.summary, operatingSystem: "macOS",
            applicationCategory: categoryLabels[app.category],
            url: app.homepage, downloadUrl: app.download,
            image: new URL(app.icon, publicSiteURL).href,
            sameAs: app.github, inLanguage: htmlLanguage
          }
        }))
      }
    ]
  };
}
