let fs = require('fs');
let $ = require('jquery');
let NsMenu = require('app/style/js/menu');
/**
 * Class which represent and control the window
 */

class NsWindow {
    /**
     * THe contructor of the class
     * @constructor
     */
    constructor () {
        
    }
    /**
     * Genereate window
     */
    createWindow() {
        console.log("wesh");
        //get window html
        fs.readFile('app/templates/window.html', 'utf-8',(err, data)=>{
            if(err) {
                
            }else {
                document.querySelector('body').innerHTML = data;
                this.winName = "Noisette Studio";
                this.creatEvents();
                //create the menu - the menu is created the first time when we create a menu object
                this.menu = new NsMenu();
                
                
            }
        } );
        
    }


    /**
     * create different events: close, maximize and minimize when the user click in thows buttons
     */
    creatEvents() {
        var win = nw.Window.get();
        $('#frame-button-close').on('click', ()=>{
            win.close();
            
        });
        $('#frame-button-maximize').on('click', ()=>{
            nw.Screen.Init();
            let sec = nw.Screen.screens[0].work_area
            if(win.height ==  sec.height && win.width == sec.width) {
                win.restore();
                
            }else{
                win.maximize();
                
            }
                
                
            
        });
       
        $('#frame-button-minimize').on('click', ()=>{
            win.minimize();
        });

    }


    /**
     * set the name of window
     * @param {String} name - Title of window
     */
    set winName(name) {
        
        var win = nw.Window.get();
        //change the name
        win.title = name;
        this.name = name;
        //apply the name on window
        this.applyName();
    }


    /**
     * get the name of the window
     * @returns {String} - name of the window
     */
    get winName() {
        var win = nw.Window.get();
        if (win.title != this.name)this.name = win.title;
        return this.name;
    }
    /**
     * Apply the name of window
     */
    applyName() {
        
        $('#frame-details p').append(this.name);
        
    }

}


module.exports = NsWindow;

