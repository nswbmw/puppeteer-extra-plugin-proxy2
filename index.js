'use strict'

const useProxy = require('puppeteer-page-proxy')
const { PuppeteerExtraPlugin } = require('puppeteer-extra-plugin')

/**
 * Add proxy for Puppeteer
 *
 * @param {Object} opts - Options
 * @param {String} opts.proxy - eg: http://username:password@host:port, see: https://github.com/Cuadrix/puppeteer-page-proxy#pageproxypageorreq-proxy
 *
 * @example
 * const puppeteer = require('puppeteer-extra')
 * puppeteer.use(require('puppeteer-extra-plugin-proxy')({
 *   proxy: 'socks://127.0.0.1:5000'
 * }))
 */
class Plugin extends PuppeteerExtraPlugin {
  constructor(opts = {}) {
    super(opts)
  }

  get name() {
    return 'proxy2'
  }

  get defaults() {
    return {}
  }

  async onPageCreated (page) {
    if (this.opts.proxy) {
      await useProxy(page, this.opts.proxy);
    }
  }
}

module.exports = function(pluginConfig) {
  return new Plugin(pluginConfig)
}
