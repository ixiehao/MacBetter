import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const source = readFileSync(new URL("../../website/assets/tabler-icons.svg", import.meta.url), "utf8");
const destination = process.argv[2];
mkdirSync(destination, { recursive: true });
for (const name of ["apps", "folder", "download", "world-www", "search", "x", "info-circle", "check"]) {
  const match = source.match(new RegExp(`<symbol id="${name}" viewBox="0 0 24 24">([\\s\\S]*?)</symbol>`));
  if (!match) throw Error(`Missing Tabler icon ${name}`);
  writeFileSync(join(destination, `${name}.svg`), `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${match[1]}</svg>\n`);
}
