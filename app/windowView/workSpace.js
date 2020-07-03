//gestionnaire de page
let NsPageManager = require('app/moduleView/pageManager');
let $ = require("jquery");

class WorkSpace {

    constructor (window) {
        this.window = window;
    }
    createWorkSpace () {
        this.page = new NsPageManager(this.window);
        this.addLeftBar();
        this.addTabManger();
        this.addRghtBar();

    }
    /**
     * Create the left bar system with flexbox with technologie
     */
    addLeftBar() {
        
        this.page.addBar("fixed", 40, "leftbar-menu");
        this.page.addBar("splitter", 300, "leftbar");
    }
    addTabManger() {
        this.page.addBar("splitter", Infinity, "tabmanager");
        
    }
    addRghtBar () {
        this.page.addBar("splitter", 200, 'rightbar');
    }


    
}
module.exports = WorkSpace;