## puppeteer-extra-plugin-proxy2

Add proxy for puppeteer `page`, support `http`, `https`, `socks`. Based on [puppeteer-page-proxy](https://github.com/Cuadrix/puppeteer-page-proxy).

### Install

```sh
$ npm i puppeteer-extra-plugin-proxy2 --save
```

### Usage

```js
const puppeteer = require('puppeteer-extra')
const PuppeteerExtraPluginProxy = require('puppeteer-extra-plugin-proxy2')

puppeteer.use(PuppeteerExtraPluginProxy({
  proxy: 'socks://4436632fee80:61e31d1d142f@185.217.0.145:57425',
  // proxy: 'http://xznskzdw:1ftadp8f9r4j@22.254.90.253:8243',
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
```
