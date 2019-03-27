/*
 * Sample plugin scaffolding for Adobe XD.
 *
 * Visit http://adobexdplatform.com/ for API docs and more sample code.
 */

var {Rectangle, Color} = require("scenegraph");
var data = ["title 1","title 2","title 3","title 4"]

function populateDesign (selection) {
    // Go to Plugins > Development > Developer Console to see this log output
    console.log("Plugin command is running, now with text!");
    
    let repeatGrid = selection.items[0].parent.parent;
    let selectedTextNode = selection.items[0];
    repeatGrid.attachTextDataSeries(selectedTextNode, data);
    }

module.exports = {
    commands: {
        populateDesign: populateDesign
    }
};
