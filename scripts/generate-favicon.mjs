import sharp from 'sharp';

const src = 'public/logo_szoveggel.png';
const meta = await sharp(src).metadata();
console.log('source', meta.width, meta.height);

// crop the left icon portion, trim transparent edges, pad to square
const iconWidth = Math.round(meta.width * 0.28);
const cropped = await sharp(src)
  .extract({ left: 0, top: 0, width: iconWidth, height: meta.height })
  .toBuffer();
const trimmed = await sharp(cropped).trim().toBuffer();

const tmeta = await sharp(trimmed).metadata();
console.log('trimmed', tmeta.width, tmeta.height);

const size = Math.max(tmeta.width, tmeta.height);
const pad = Math.round(size * 0.08);
await sharp(trimmed)
  .extend({
    top: Math.round((size - tmeta.height) / 2) + pad,
    bottom: Math.ceil((size - tmeta.height) / 2) + pad,
    left: Math.round((size - tmeta.width) / 2) + pad,
    right: Math.ceil((size - tmeta.width) / 2) + pad,
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  })
  .resize(180, 180)
  .png()
  .toFile('public/favicon.png');

console.log('written public/favicon.png');
