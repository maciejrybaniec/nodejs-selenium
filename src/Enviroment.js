/**
 * Enviroment.
 * @module Enviroment
 * @version 1.0.0
 */

const WebDriver = require('selenium-webdriver');
const SeleniumRemote = require('selenium-webdriver/remote');

const SeleniumServer = SeleniumRemote.SeleniumServer;

const config = require('../config');

/**
 * Configuration class for tests.
 * @class Enviroment
 */
class Enviroment {
    /**
     * Creates Selenium server.
     * @method createServer
     * @returns {SeleniumServer} Server instance.
     */
    createServer() {
        const server = new SeleniumServer(config.seleniumDir, {
          port: config.port,
          args: '-role hub',
        });

        this.server = server;
        server.start();
        return server;
    }
    /**
     * Creates WebDriver.
     * @method createWebDriver
     * @returns {WebDriver} WebDriver instance.
     */
    createWebDriver() {
        return new WebDriver.Builder()
            .usingServer(this.server.address(config.hubUrl))
            .withCapabilities({
                'browserName': 'firefox',
            })
            .build();
    }
    /**
     * Configure WebDriver.
     * @param {WebDriver} WebDriver instance.
     */
    configureWebDriver(webDriver) {
        webDriver.manage().timeouts().setScriptTimeout(config.timeout);
    }
    /**
     * Configure test enviroment.
     * @param {object} test Mocha test instance.
     */
    configureMochaTest(test) {
        test.timeout(config.timeout);
    }
}

(function() {
  before(function() {
    this.enviroment = new Enviroment();
    this.server = this.enviroment.createServer();
  });
}).call(this);
