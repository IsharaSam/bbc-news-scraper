const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    await page.goto('https://www.bbc.com/news');

    await page.waitForSelector('div[data-testid="london-card"]');

    const londonCardContent = await page.evaluate(() => {
        const element = document.querySelector('div[data-testid="london-card"]');
        return element ? element.innerText : null;
    });
    
    console.log(londonCardContent);

    await browser.close();
})();