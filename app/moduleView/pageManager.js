var $ = require("jquery");
class pageManager {

    constructor (window) {
        this.window = window;

        this.page = $(window.winContext).find("#page");
        
    }
    addBar(type, width, idName) {
        console.log(this.page);
        $(this.page).append('<div id="' + idName + '" class="box"></div>');
        var elem = $(this.page).find("#" + idName); 
        if(width === Infinity) {
            $(elem).css("flex", 1)
        }else {
            $(elem).css("width", width);
        }
        
        
        switch(type) {
            case "splitter":
                break;
            case "fixed":
                break;
        }
    }
}

module.exports = pageManager;