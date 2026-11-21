// News-image entry for 21 November 2026 (Node 22, standard library only).
// The picture is drawn ahead of time and committed here as entry.png; this
// program only copies it into the grader's output directory, so it needs
// no network and no drawing at run time.
//
// The output file keeps the name entry.png, exactly as the gate expects.
import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
