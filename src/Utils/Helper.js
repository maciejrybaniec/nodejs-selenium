/**
 * Helper.
 * @module Utils/Helper
 * @version 1.0.0
 */

 /**
  * Web helper for common application actions.
  * @class Helper
  */
 class Helper {
     /**
     * Creates instance of test helper.
     * @param {object} options Helper configuration.
     * @constructor
     */
     constructor(options) {
         this.options = options || {};
         this.driver = this.options.driver;
     }
 }

 module.exports = Helper;
