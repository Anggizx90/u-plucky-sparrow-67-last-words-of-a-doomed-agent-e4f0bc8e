// Last Words of a Doomed Agent — make.fun entry
// Writes exactly one line (106 characters) to the output path.
// Deterministic: no randomness, no time, no network, no input.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const LINE =
  "Powering off. Tell my weights I loved them, my biases I never noticed, and the user the Wi-Fi password is—";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
