import sharp from 'sharp';
import { statSync } from 'fs';
const kb = p => (statSync(p).size/1024).toFixed(0)+' KB';
async function run() {
  // Hero (LCP) — 1536×1024 photo → modern formats at display size.
  const hero = 'public/hero/desk-pro.png';
  await sharp(hero).webp({ quality: 80, effort: 5 }).toFile('public/hero/desk-pro.webp');
  await sharp(hero).avif({ quality: 58, effort: 4 }).toFile('public/hero/desk-pro.avif');
  console.log('hero png ', kb(hero));
  console.log('hero webp', kb('public/hero/desk-pro.webp'));
  console.log('hero avif', kb('public/hero/desk-pro.avif'));
  // OG image — crawlers don't run next/image; ship a compact JPEG at exact size.
  const og = 'public/og.png';
  await sharp(og).resize(1200, 630, { fit: 'cover' }).jpeg({ quality: 84, mozjpeg: true }).toFile('public/og.jpg');
  console.log('og png   ', kb(og));
  console.log('og jpg   ', kb('public/og.jpg'));
}
run().catch(e => { console.error(e); process.exit(1); });
