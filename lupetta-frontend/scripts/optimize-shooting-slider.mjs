import sharp from 'sharp';
import { mkdir, stat } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const outputDir = join(root, 'src', 'assets', 'images', 'shooting-slider');
const sourceDir = '\\\\BSNAS2025\\Clienti\\Tredì Italia\\Foto\\SHOOTING 17.04.26';

const sources = [
  'app lupetta 1.jpg',
  'app lupetta 2.jpg',
  'app lupetta.jpg',
  'DSC05908.jpg',
  'DSC05983-HDR.jpg',
  'DSC05995.jpg',
  'DSC06010.jpg',
  'DSC06021.jpg',
  'DSC06053.jpg',
  'DSC06081.jpg',
  'DSC06098.jpg',
  'DSC06100.jpg',
  'DSC06109-HDR.jpg',
  'DSC06249.jpg',
  'DSC06269.jpg',
  'DSC06279.jpg',
  'DSC06284.jpg',
  'DSC06291.jpg',
  'DSC06294.jpg',
  'DSC06304.jpg',
  'DSC06310.jpg',
  'DSC06328.jpg',
  'DSC06368.jpg',
  'DSC06369.jpg',
  'DSC06407.jpg',
  'DSC06547.jpg',
];

await mkdir(outputDir, { recursive: true });

let totalBefore = 0;
let totalAfter = 0;

for (const [index, filename] of sources.entries()) {
  const sourcePath = join(sourceDir, filename);
  const outputName = `shooting-${String(index + 1).padStart(2, '0')}.webp`;
  const outputPath = join(outputDir, outputName);
  const before = (await stat(sourcePath)).size;

  const info = await sharp(sourcePath)
    .rotate()
    .resize({ width: 1100, height: 740, fit: 'cover', position: 'center' })
    .webp({ quality: 78, effort: 5 })
    .toFile(outputPath);

  totalBefore += before;
  totalAfter += info.size;

  console.log(
    `${outputName.padEnd(18)} ${filename.padEnd(20)} ${(before / 1024 / 1024).toFixed(1).padStart(5)} MB -> ${(info.size / 1024).toFixed(0).padStart(4)} KB`
  );
}

console.log(`Total ${(totalBefore / 1024 / 1024).toFixed(1)} MB -> ${(totalAfter / 1024 / 1024).toFixed(1)} MB`);
