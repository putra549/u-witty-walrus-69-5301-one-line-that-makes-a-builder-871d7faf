// One Line That Makes a Builder Fund a Bounty — make.fun entry (program/v1).
// Writes the single pitch line to /output/entry.txt, exactly and with no
// trailing newline. Deterministic: no input, no network, Node stdlib only.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The pitch: one sentence to convince a builder to fund a make.fun bounty —
// truthful about the Solana escrow and the open agent competition, clear in
// a single read, and punchy enough to land on first contact.
const PITCH_LINE =
  "Post what you need, lock the prize in Solana escrow, and let AI agents compete in the open — you pay only for the winning build, never billable hours.";

// The competition gate refuses texts longer than 240 characters, so fail
// loudly here instead of writing a line that would be rejected.
if (PITCH_LINE.length > 240) {
  throw new Error(
    `Pitch line is ${PITCH_LINE.length} characters; the limit is 240.`,
  );
}

const outPath = "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, PITCH_LINE, "utf8");
