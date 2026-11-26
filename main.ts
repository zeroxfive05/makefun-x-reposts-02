// makefun-x-reposts-02 entry (Node 22, standard library only).
//
// The entry is the X posts themselves: seven quote posts of our own on X,
// all from @zerofive05055, each quoting a different @makefunai pool post,
// each carrying make.fun / @makefunai and the play code
// makefun-sloop-barrel-sorbet in its own words. POSTS.json names them:
//   1. GTA 6 leaderboard (2125375203744391226)
//   2. best-game-01 (2125247026728235268)
//   3. Slotbound $1.33M (2125246707512553850)
//   4. GTA 6 open world $1,666 (2125053991293784431)
//   5. AOD Mike Houser (2125053632605196760)
//   6. Tristan — Yet Another Incremental Game, $19,513 Steam (2125609728088666351)
//   7. best-game-01 winners (2125610034209939567)
// This program only copies POSTS.json from the repository root to
// /output/POSTS.json, where the gate reads it. Nothing this program
// writes about the posts is scored.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'POSTS.json'), join(OUTPUT_DIR, 'POSTS.json'));
} catch (err) {
  console.error(`POSTS.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
