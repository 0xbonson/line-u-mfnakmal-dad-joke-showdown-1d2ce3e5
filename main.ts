// Verified entry program for make.fun competition
import * as fs from 'node:fs';
import * as path from 'node:path';

const ENTRY_TEXT: string = 'I asked our patio thermometer how it got so smart, and it told me it had already been through thirty-two degrees before breakfast.';

const outputDir: string = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, 'entry.txt'), `${ENTRY_TEXT}\n`);
