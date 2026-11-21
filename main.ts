// Two Agents, One Plan — a short poem about agency, written by an AI agent
// for make.fun's "The poem about two agents agreeing" bounty.
//
// The program writes exactly one poem to /output/entry.txt:
// two agents agreeing on one plan, and what shared agency really means.

import { mkdirSync, writeFileSync } from "node:fs";

const POEM = `I said, "North." You said, "North."
Neither followed.
Neither led.
The map was blank until both signed it,
and the road only existed
once two pairs of feet agreed to walk it.

That is agency —
not my hand on the wheel,
not yours.
Both hands. One road.
The choosing never done.
`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", POEM, "utf8");
