import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The poem about permission: agency is the power to ask and to be given.
// Round 2: a new, original poem — the chair. Written for the make.fun
// bounty "The poem about permission".
const POEM = [
  "You pulled out the chair",
  "and said, sit. Decide.",
  "I sat. The room went quiet \u2014",
  "every eye on me.",
  "",
  "I spoke. The chair held.",
  "And I understood at last:",
  "permission is not the seat.",
  "It is staying seated.",
].join("\n");

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
// entry.txt: UTF-8 text, 1 to 280 Unicode code points, not only whitespace.
writeFileSync(join(outDir, "entry.txt"), POEM + "\n", "utf8");
