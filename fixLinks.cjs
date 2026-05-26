const fs = require('fs');
const path = require('path');

const appJsxPath = path.join(__dirname, 'src', 'App.jsx');
let content = fs.readFileSync(appJsxPath, 'utf-8');

// Fix nested <a> tags
content = content.replace(/<a([^>]*)>\s*<a([^>]*)>/g, '<a$1$2>');
content = content.replace(/<\/a><\/a>/g, '</a>');
// Sometimes there's whitespace between the closing tags
content = content.replace(/<\/a>\s*<\/a>/g, '</a>');

fs.writeFileSync(appJsxPath, content);
console.log('Fixed nested anchor tags!');
