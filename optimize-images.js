const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function optimizeImages() {
  const publicDir = path.join(__dirname, 'public');
  
  // Optimize logo.png - resize to actual display size with 2x retina
  console.log('Optimizing logo.png...');
  await sharp(path.join(publicDir, 'logo.png'))
    .resize(1788, 356, {
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .png({ quality: 90, compressionLevel: 9 })
    .toFile(path.join(publicDir, 'logo-optimized.png'));
  
  // Create WebP version for even better compression
  await sharp(path.join(publicDir, 'logo.png'))
    .resize(1788, 356, {
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .webp({ quality: 90 })
    .toFile(path.join(publicDir, 'logo.webp'));
  
  // Get file sizes for comparison
  const originalSize = fs.statSync(path.join(publicDir, 'logo.png')).size;
  const optimizedSize = fs.statSync(path.join(publicDir, 'logo-optimized.png')).size;
  const webpSize = fs.statSync(path.join(publicDir, 'logo.webp')).size;
  
  console.log(`✅ Original: ${(originalSize / 1024).toFixed(2)} KB`);
  console.log(`✅ Optimized PNG: ${(optimizedSize / 1024).toFixed(2)} KB (${((1 - optimizedSize / originalSize) * 100).toFixed(1)}% reduction)`);
  console.log(`✅ WebP: ${(webpSize / 1024).toFixed(2)} KB (${((1 - webpSize / originalSize) * 100).toFixed(1)}% reduction)`);
  
  // Replace original with optimized
  fs.copyFileSync(path.join(publicDir, 'logo-optimized.png'), path.join(publicDir, 'logo.png'));
  fs.unlinkSync(path.join(publicDir, 'logo-optimized.png'));
  
  console.log('✅ Logo optimization complete!');
}

optimizeImages().catch(console.error);
