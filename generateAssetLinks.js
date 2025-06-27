const fs = require('fs');
const path = require('path');

// Replace with your actual GitHub Pages base URL
const GITHUB_BASE_URL = 'https://kelly12201984.github.io/assets';
const ASSETS_DIR = path.join(__dirname, 'assets');
const OUTPUT_FILE = path.join(ASSETS_DIR, 'assetsList.json');

function getAssetFilePaths(dir) {
    return fs.readdirSync(dir)
        .filter(file => fs.statSync(path.join(dir, file)).isFile())
        .map(file => `${GITHUB_BASE_URL}/${encodeURIComponent(file)}`);
}

const publicLinks = getAssetFilePaths(ASSETS_DIR);

fs.writeFileSync(OUTPUT_FILE, JSON.stringify(publicLinks, null, 2));
console.log(`✅ ${publicLinks.length} public asset URLs saved to assetsList.json`);
