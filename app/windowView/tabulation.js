let $ = require("jquery");

class Tabulation {
    
    constructor (window, parent) {
        this.tabs = {};
        this.window = window;
        this.parent = parent;
        this.prop = {
            tabWidth: 200,
            selected: 0
        }
    }
    /**
     * Create all elements of the tab control
     */
    showElements() {
        $(this.parent).append('<div id="tablist"></div>'
                            +'<div id="tabcontents"></div>');
    }
    /**
     * open a new tab
     * @param {String} name 
     * @param {Object} content 
     */
    openTab(name, content) {

    }
}