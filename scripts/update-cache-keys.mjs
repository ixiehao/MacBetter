import { readFileSync, writeFileSync, existsSync, statSync } from "node:fs";
import { createHash } from "node:crypto";
import { dirname, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const website = resolve(dirname(fileURLToPath(import.meta.url)), "../website");
const digest = file => createHash("sha256").update(readFileSync(resolve(website, file))).digest("hex").slice(0, 12);

function version(url) {
  const parts = new URL(url, "https://macbetter.invalid/");
  if (!["macbetter.invalid", "ixiehao.github.io"].includes(parts.hostname)) return url;
  const local = decodeURIComponent(parts.pathname).replace(/^\/MacBetter\//, "").replace(/^\//, "");
  if (!local) return url;
  const path = resolve(website, local);
  if (!path.startsWith(website + sep) || !existsSync(path) || !statSync(path).isFile()) return url;
  const prefix = url.split(/[?#]/, 1)[0];
  return `${prefix}?v=${digest(local)}${parts.hash}`;
}

function update(file, transform) {
  const path = resolve(website, file);
  const before = readFileSync(path, "utf8");
  const after = transform(before);
  if (after !== before) writeFileSync(path, after);
}

update("styles.css", source => source.replace(/url\((["'])([^"']+)\1\)/g, (_, quote, url) => `url(${quote}${version(url)}${quote})`));
update("app.js", source => source
  .replace(/from "\.\/seo\.js(?:\?v=[^"]+)?"/, `from "./seo.js?v=${digest("seo.js")}"`)
  .replace(/assets\/tabler-icons\.svg(?:\?v=[^"#]+)?#/g, `assets/tabler-icons.svg?v=${digest("assets/tabler-icons.svg")}#`)
  .replace(/dataURL\.searchParams\.set\("v", "[^"]+"\)/, `dataURL.searchParams.set("v", "${digest("data/apps.json")}")`));
const templatePath = resolve(website, "../scripts/templates/index.html");
const template = readFileSync(templatePath, "utf8");
writeFileSync(templatePath, template.replace(/((?:href|src|content)=")([^"\n]+)(")/g, (match, open, url, close) => {
  if (!url.includes("assets/") && !/^(?:styles\.css|app\.js|previews\.js|site\.webmanifest)(?:\?|$)/.test(url)) return match;
  return open + version(url) + close;
}));
console.log("Updated content hashes for catalog, scripts, styles, and local assets.");
