import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// This script uses canvas to convert SVG to PNG
// Run: node scripts/convert-svg-to-png.js

const svgFiles = [
  { input: 'public/nis-logo.svg', output: 'public/nis-logo.png', width: 280, height: 48 },
  { input: 'public/nis-logo-large.svg', output: 'public/nis-logo-large.png', width: 380, height: 80 },
  { input: 'public/nis-logo-small.svg', output: 'public/nis-logo-small.png', width: 180, height: 32 },
  { input: 'public/nis-icon.svg', output: 'public/nis-icon.png', width: 48, height: 48 },
  { input: 'public/nis-icon.svg', output: 'public/favicon.png', width: 32, height: 32 },
  { input: 'public/nis-icon.svg', output: 'public/nis-icon-192.png', width: 192, height: 192 },
  { input: 'public/nis-icon.svg', output: 'public/nis-icon-512.png', width: 512, height: 512 },
];

async function convertSvgToPng() {
  try {
    const { createCanvas, loadImage } = await import('canvas');
    
    for (const file of svgFiles) {
      const svgPath = join(__dirname, '..', file.input);
      const pngPath = join(__dirname, '..', file.output);
      
      // Read SVG file
      const svgBuffer = readFileSync(svgPath);
      
      // Create canvas
      const canvas = createCanvas(file.width, file.height);
      const ctx = canvas.getContext('2d');
      
      // Load and draw SVG
      const img = await loadImage(svgBuffer);
      ctx.drawImage(img, 0, 0, file.width, file.height);
      
      // Save as PNG
      const pngBuffer = canvas.toBuffer('image/png');
      writeFileSync(pngPath, pngBuffer);
      
      console.log(`✓ Created ${file.output}`);
    }
    
    console.log('\n✅ All PNG files created successfully!');
  } catch (error) {
    console.error('❌ Error:', error.message);
    console.log('\n📦 Please install canvas package first:');
    console.log('npm install canvas');
  }
}

convertSvgToPng();

