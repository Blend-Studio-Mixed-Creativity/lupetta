import sharp from 'sharp';
import { readdir, stat } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIR = join(__dirname, '..', 'src', 'assets', 'images');
const MAX_WIDTH = 1400;

const files = (await readdir(DIR)).filter((f) => /^timeline-\d{4}\.png$/.test(f));

for (const file of files) {
  const path = join(DIR, file);
  const before = (await stat(path)).size;

  const buf = await sharp(path)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .png({ compressionLevel: 9, quality: 85, palette: true })
    .toBuffer();

  await sharp(buf).toFile(path);
  const after = (await stat(path)).size;

  const pct = (((before - after) / before) * 100).toFixed(1);
  console.log(
    `${file.padEnd(22)} ${(before / 1024).toFixed(0).padStart(6)} KB -> ${(after / 1024).toFixed(0).padStart(6)} KB  (-${pct}%)`
  );
}
