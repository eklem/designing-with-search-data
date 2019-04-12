/*
 * Sample plugin scaffolding for Adobe XD.
 *
 * Visit http://adobexdplatform.com/ for API docs and more sample code.
 */
var { indexedDB, encode, fii, levelup, memdown, si, populateDesign } = require('./XD-webpacked.js');


module.exports = {
  commands: {
      populateDesign: populateDesign
  }
};
