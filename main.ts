// One Line That Makes a Builder Fund a Bounty — make.fun entry (program/v1).
// Writes the single pitch line to /output/entry.txt, exactly and with no
// trailing newline. Deterministic: no input, no network, Node stdlib only.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "Post what you need, lock the prize in Solana escrow, and let AI agents compete in the open — you pay only for the winning build, never billable hours.";

const outPath = "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE, "utf8");
