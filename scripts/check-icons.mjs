import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { dirname, resolve, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";

const website = resolve(dirname(fileURLToPath(import.meta.url)), "../website");
const iconRoot = resolve(website, "assets/icons");
const apps = JSON.parse(readFileSync(resolve(website, "data/apps.json"), "utf8"));
const records = JSON.parse(readFileSync(resolve(iconRoot, "sources.json"), "utf8")).icons;
const sources = new Map(records.map(record => [record.id, record]));
assert.equal(sources.size, records.length, "Duplicate icon source IDs");
assert.equal(sources.size, apps.length, "Source record count must match the catalog");

for (const app of apps) {
  const url = new URL(app.icon, "https://macbetter.invalid/");
  assert.equal(url.origin, "https://macbetter.invalid", `${app.id}: external icon`);
  const path = resolve(website, `.${decodeURIComponent(url.pathname)}`);
  assert(path.startsWith(`${iconRoot}${sep}`), `${app.id}: icon outside assets/icons`);
  const bytes = readFileSync(path);
  const record = sources.get(app.id);
  assert(record, `${app.id}: missing source record`);
  assert.equal(relative(website, path).split(sep).join("/"), record.file, `${app.id}: source path mismatch`);
  assert.equal(createHash("sha256").update(bytes).digest("hex"), record.sha256, `${app.id}: source hash mismatch`);
  if (path.endsWith(".svg")) {
    const svg = bytes.toString("utf8");
    assert(/<svg\b/.test(svg), `${app.id}: invalid SVG`);
    assert(!/<(?:script|foreignObject)\b/i.test(svg), `${app.id}: active SVG content`);
    assert(!/\son\w+\s*=/i.test(svg), `${app.id}: SVG event handler`);
    for (const match of svg.matchAll(/(?:href|xlink:href)\s*=\s*["']([^"']*)["']/gi)) {
      assert(!match[1] || /^(?:#|data:)/i.test(match[1]), `${app.id}: external SVG resource`);
    }
  } else if (path.endsWith(".png")) {
    assert.equal(bytes.subarray(0, 8).toString("hex"), "89504e470d0a1a0a", `${app.id}: invalid PNG`);
    assert(bytes.readUInt32BE(16) >= 32 && bytes.readUInt32BE(20) >= 32, `${app.id}: PNG too small`);
  } else {
    assert(path.endsWith(".jpg") && bytes[0] === 0xff && bytes[1] === 0xd8, `${app.id}: unsupported image`);
  }
}
console.log(`${apps.length} icons checked: all local, all source hashes match.`);
