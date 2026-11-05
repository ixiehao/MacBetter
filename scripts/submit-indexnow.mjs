import { readFileSync } from "node:fs";
import { canonicalForLanguage, languagePages, publicSiteURL } from "../website/seo.js";

export function indexNowPayload() {
  const key = readFileSync(new URL("../website/indexnow-key.txt", import.meta.url), "utf8").trim();
  if (!/^[a-z0-9-]{8,128}$/i.test(key)) throw new Error("Invalid public IndexNow ownership key");
  return {
    host: new URL(publicSiteURL).hostname, key,
    keyLocation: new URL("indexnow-key.txt", publicSiteURL).href,
    urlList: Object.keys(languagePages).map(canonicalForLanguage)
  };
}

if (process.argv.includes("--submit")) {
  const payload = indexNowPayload();
  // Submit only after the published key is reachable; never report acceptance prematurely.
  const keyResponse = await fetch(payload.keyLocation, { cache: "no-store", signal: AbortSignal.timeout(20_000) });
  if (!keyResponse.ok || (await keyResponse.text()).trim() !== payload.key) throw new Error("Published IndexNow key is not available yet; retry after Pages propagation");
  const response = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST", headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(payload), signal: AbortSignal.timeout(20_000)
  });
  if (![200, 202].includes(response.status)) throw new Error(`IndexNow returned HTTP ${response.status}: ${(await response.text()).slice(0, 200)}`);
  console.log(`IndexNow HTTP ${response.status}: ${payload.urlList.length} URLs ${response.status === 202 ? "received, key verification pending" : "received"}. Indexing and AI citations are not guaranteed.`);
}
