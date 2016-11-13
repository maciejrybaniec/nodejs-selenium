/**
 * Common.
 * @module Common
 * @version 1.0.0
 */

const Helper = require('./Utils/Helper');

/**
 * Configure mocha test and connect it with webdriver.
 * @method configureTest
 * @param {object} test Mocha test instance.
 */
const configureTest = (test) => {
    const { enviroment } = test;
    const webdriver = enviroment.createWebDriver();
    const webHelper = new Helper({
        driver: webdriver
    });

    enviroment.configureWebDriver(webdriver);
    enviroment.configureMochaTest(test);

    test.driver = webdriver;
    test.webHelper = webHelper;
}


module.exports = {
    configureTest
}
