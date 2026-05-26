const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Set viewport for a desktop layout
  await page.setViewport({ width: 1280, height: 800 });
  
  await page.goto('https://klefb-conference.vercel.app/', {
    waitUntil: 'networkidle0', // wait until there are no more than 0 network connections for at least 500 ms.
  });

  // Take a screenshot
  await page.screenshot({ path: 'screenshot.png', fullPage: true });

  // Get the fully rendered HTML
  const html = await page.content();
  fs.writeFileSync('rendered.html', html);

  console.log('Successfully saved screenshot.png and rendered.html');
  await browser.close();
})();
