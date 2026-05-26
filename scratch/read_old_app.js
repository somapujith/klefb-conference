const { execSync } = require('child_process');
const fs = require('fs');

try {
  const content = execSync('git show bbfe93c:src/App.jsx', { encoding: 'utf8' });
  const lines = content.split('\n');
  
  // Find lines starting the cards section
  let cardCount = 0;
  let inCards = false;
  let cardLines = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.includes('pointer-events-none select-none') && line.includes('absolute inset-0 overflow-hidden')) {
      inCards = true;
      console.log(`Found cards section start at line ${i + 1}`);
      continue;
    }
    if (inCards) {
      cardLines.push(`${i + 1}: ${line}`);
      if (line.includes('will-change-transform')) {
        cardCount++;
      }
      // If we see the end of the cards container
      if (cardLines.length > 200) {
        // Let's print first 150 lines in cards section
        break;
      }
    }
  }
  
  console.log(`Total will-change-transform cards counted: ${cardCount}`);
  fs.writeFileSync('scratch/cards_output.txt', cardLines.join('\n'));
  console.log('Saved cards section snippet to scratch/cards_output.txt');
} catch (e) {
  console.error(e);
}
