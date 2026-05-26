const fs = require('fs');
const path = require('path');

let html = fs.readFileSync(path.join(__dirname, 'rendered.html'), 'utf-8');

// Extract the root div content
const rootStart = html.indexOf('<div id="root">') + '<div id="root">'.length;
const rootEnd = html.lastIndexOf('</div>');
let rootContent = html.substring(rootStart, rootEnd);

// Fix double a tags (Next.js/React Router bug in their site)
rootContent = rootContent.replace(/<a href="([^"]+)"><a([^>]*)>/g, '<a href="$1" $2>');
rootContent = rootContent.replace(/<\/a><\/a>/g, '</a>');

// React specific replacements
rootContent = rootContent.replace(/class="/g, 'className="');
rootContent = rootContent.replace(/for="/g, 'htmlFor="');
rootContent = rootContent.replace(/crossorigin="/g, 'crossOrigin="');
rootContent = rootContent.replace(/tabindex="/g, 'tabIndex="');
rootContent = rootContent.replace(/stroke-width="/g, 'strokeWidth="');
rootContent = rootContent.replace(/stroke-linecap="/g, 'strokeLinecap="');
rootContent = rootContent.replace(/stroke-linejoin="/g, 'strokeLinejoin="');
rootContent = rootContent.replace(/fill-rule="/g, 'fillRule="');
rootContent = rootContent.replace(/clip-rule="/g, 'clipRule="');
rootContent = rootContent.replace(/fetchpriority="/g, 'fetchPriority="');

// Remove style attributes
rootContent = rootContent.replace(/style="[^"]*"/g, '');

// Escape raw curly braces that exist in text (if any), although unlikely.
rootContent = rootContent.replace(/{/g, '{"{"}');
rootContent = rootContent.replace(/}/g, '{"}"}');

// Handle self closing tags robustly without complex regex
rootContent = rootContent.replace(/<img([^>]+)>/g, (match, p1) => match.endsWith('/>') ? match : `<img${p1} />`);
rootContent = rootContent.replace(/<circle([^>]+)>/g, (match, p1) => match.endsWith('/>') ? match : `<circle${p1} />`);
rootContent = rootContent.replace(/<path([^>]+)>/g, (match, p1) => match.endsWith('/>') ? match : `<path${p1} />`);
rootContent = rootContent.replace(/<rect([^>]+)>/g, (match, p1) => match.endsWith('/>') ? match : `<rect${p1} />`);
rootContent = rootContent.replace(/<br([^>]*)>/g, (match, p1) => match.endsWith('/>') ? match : `<br${p1} />`);
rootContent = rootContent.replace(/<hr([^>]*)>/g, (match, p1) => match.endsWith('/>') ? match : `<hr${p1} />`);
rootContent = rootContent.replace(/<input([^>]+)>/g, (match, p1) => match.endsWith('/>') ? match : `<input${p1} />`);
rootContent = rootContent.replace(/<link([^>]+)>/g, (match, p1) => match.endsWith('/>') ? match : `<link${p1} />`);
rootContent = rootContent.replace(/<meta([^>]+)>/g, (match, p1) => match.endsWith('/>') ? match : `<meta${p1} />`);

rootContent = rootContent.replace(/<\/path>/g, '');
rootContent = rootContent.replace(/<\/circle>/g, '');
rootContent = rootContent.replace(/<\/rect>/g, '');
rootContent = rootContent.replace(/<\/img>/g, '');
rootContent = rootContent.replace(/<\/input>/g, '');

const jsxContent = `import './index.css';

function App() {
  return (
    <>
      ${rootContent}
    </>
  );
}

export default App;
`;

fs.writeFileSync(path.join(__dirname, '../src/App.jsx'), jsxContent);
console.log('App.jsx has been generated!');
