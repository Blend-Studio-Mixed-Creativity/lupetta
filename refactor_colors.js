const fs = require('fs');
const path = require('path');

const dir = 'lupetta-frontend/src';

function walk(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
    });
}

const colorRegex = /\b(text|bg|border|ring|outline|fill|stroke|shadow|from|via|to|divide|placeholder)-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(\d{2,3})(?:\/(\d+))?\b/g;

function mapColor(property, color, shadeStr, opacityStr) {
    const isNeutral = ['slate', 'gray', 'zinc', 'neutral', 'stone'].includes(color);
    const shade = parseInt(shadeStr, 10);
    
    let resultColor = '';
    
    if (shade >= 800) {
        resultColor = 'primary';
    } else if (shade >= 400 && shade <= 700) {
        if (isNeutral) {
            if (property === 'text') resultColor = 'primary/70';
            else if (property === 'border' || property === 'divide' || property === 'ring') resultColor = 'primary/20';
            else resultColor = 'primary/50';
        } else {
            resultColor = 'accent';
        }
    } else {
        // shade <= 300
        if (property === 'text') {
            resultColor = 'white';
        } else if (property === 'border' || property === 'ring' || property === 'divide') {
            resultColor = 'primary/10';
        } else {
            // bg, from, via, to
            resultColor = isNeutral ? 'white' : 'primary/5';
        }
    }

    if (['from', 'via', 'to'].includes(property)) {
        if (shade >= 800) resultColor = 'primary';
        else if (shade >= 400 && shade <= 700) resultColor = isNeutral ? 'primary/50' : 'accent';
        else resultColor = isNeutral ? 'white' : 'primary/5';
    }

    let res = `${property}-${resultColor}`;
    if (opacityStr && !resultColor.includes('/')) {
        res += `/${opacityStr}`;
    }
    return res;
}

function processFile(filePath) {
    if (!filePath.endsWith('.tsx') && !filePath.endsWith('.ts') && !filePath.endsWith('.css')) return;
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    // First, specifically replace text gradients with a simple text-accent class
    // e.g. "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300" -> "text-accent"
    content = content.replace(/(?:text-transparent\s+bg-clip-text|bg-clip-text\s+text-transparent)\s+bg-gradient-to-[a-z]+\s+from-[a-z]+-\d{2,3}(?:\s+via-[a-z]+-\d{2,3})?\s+to-[a-z]+-\d{2,3}/g, 'text-accent');
    
    let newContent = content.replace(colorRegex, (match, property, color, shadeStr, opacityStr) => {
        return mapColor(property, color, shadeStr, opacityStr);
    });

    // Also remove generic bg-gradient-to-r classes if they no longer make sense, but actually 
    // replacing from-X to-Y to from-primary to-primary is fine, it just renders a solid background.
    
    if (content !== newContent) {
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log(`Updated ${filePath}`);
    }
}

walk(dir, processFile);
