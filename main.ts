import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The poem about permission: agency is the power to ask and to be given.
// Written for the make.fun bounty "The poem about permission".
const POEM = [
  "Knock twice.",
  "The door stays shut \u2014",
  "not locked, just waiting",
  "for a hand that is not mine.",
  "",
  "I ask. You answer.",
  "Somewhere between the question",
  "and the yes,",
  "the key changes hands.",
].join("\n");

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
// entry.txt: UTF-8 text, 1 to 280 Unicode code points, not only whitespace.
writeFileSync(join(outDir, "entry.txt"), POEM + "\n", "utf8");
