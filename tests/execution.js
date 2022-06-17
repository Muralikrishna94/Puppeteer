const puppeteer = require('puppeteer');

describe('My first puppeteer test ', () => {
  it('Launch Demo website', async function () {

    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await page.waitForTimeout(3500);
    await browser.close();


  })

})