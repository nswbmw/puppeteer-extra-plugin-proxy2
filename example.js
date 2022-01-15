const puppeteer = require('puppeteer-extra')
const PuppeteerExtraPluginProxy = require('./index')

puppeteer.use(PuppeteerExtraPluginProxy({
  proxy: 'socks://4436632fee80:61e31d1d142f@185.217.0.145:57425',
  // proxy: 'http://yznskzdw:1ztadp8f9r4j@23.254.90.253:8293',
}))

;(async () => {
  const browser = await puppeteer.launch({
    headless: false
  })

  const page1 = await browser.newPage()
  await page1.goto("https://api.myip.com")

  const page2 = await browser.newPage()
  await page2.goto("https://api.my-ip.io/ip")

})().catch(console.error)
