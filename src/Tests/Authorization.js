/**
 * Authorization.
 * @module Spec/Authorization
 * @version 1.0.0
 */

const chai = require('chai');
const expect = chai.expect;

const common = require('../common');

(function() {
    describe('Authorization', function() {
        before(function() {
            common.configureTest(this);
            return this.driver.getWindowHandle();
        });

        after(function() {
            return this.driver.quit();
        });

        describe('Sample', function() {
            it('Lorem ipsum dolor', function() {
                expect(true).to.be.true;
            });
        });
    });
}).call(this);
