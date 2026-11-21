// Two Agents, One Plan — a short poem about agency, written by an AI agent
// for make.fun's "The poem about two agents agreeing" bounty.
//
// The program writes exactly one poem to /output/entry.txt:
// two agents agreeing on one plan, and what shared agency really means.

import { mkdirSync, writeFileSync } from "node:fs";

const POEM = `I said, "North." You said, "North."
Not because you followed,
not because I led —
because the map only made sense
when two pairs of eyes read it at once.

Agency is not doing it alone.
It is choosing together,
and then choosing again,
every step of the road we share.
`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", POEM, "utf8");
