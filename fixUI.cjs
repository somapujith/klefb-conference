const fs = require('fs');
const path = require('path');

const appJsxPath = path.join(__dirname, 'src', 'App.jsx');
let content = fs.readFileSync(appJsxPath, 'utf-8');

// 1. Increase the breadth of the navBar (h-16 to h-24)
content = content.replace('h-16 flex items-center justify-between', 'h-24 flex items-center justify-between');

// 2. Remove the underlines from navbar links
// The exact string in App.jsx for the spans might have formatting differences.
// Let's use a regex to match the span.
content = content.replace(/<span[^>]*bg-primary origin-left[^>]*><\/span>/g, '');

// 3. Change font to Helvetica for the main heading
// The h1 tag currently looks like:
// <h1
//   className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-slate-900 mb-8 leading-[0.95]"
// >
// Let's inject a style tag for Helvetica.
content = content.replace(
  /<h1([^>]*)className="([^"]*)"([^>]*)>/g,
  (match, p1, p2, p3) => {
    // Add style inline to enforce Helvetica
    return `<h1${p1}className="${p2}" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}${p3}>`;
  }
);

fs.writeFileSync(appJsxPath, content);
console.log('UI updates applied successfully.');
