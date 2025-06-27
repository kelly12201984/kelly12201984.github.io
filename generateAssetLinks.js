const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'assets');
const walk = (dir, fileList = []) => {
    fs.readdirSync(dir).forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            fileList = walk(fullPath, fileList);
        } else {
            fileList.push(fullPath.replace(__dirname + path.sep, '').replace(/\\/g, '/'));
        }
    });
    return fileList;
};

const assetPaths = walk(baseDir);

console.log('✅ Asset Paths:\n');
assetPaths.forEach(file => console.log(file));
