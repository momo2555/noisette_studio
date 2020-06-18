let fs = require('fs');
let $ = require('jquery');

class NsMenu {
    /**
     * @param {Boolean} async - execute async methode if async = true, the menu is shown, async = false for other kind of access
     * @constructor
     */
    
    
    constructor(async = true, callback = null) {
        //get the menu
        console.log("wéwé");
        if(async) {
            fs.readFile('app/templates/menu.json', 'utf-8', (err, data) => {
                if(!err) {
                    this.menu = JSON.parse(data);
                    
                    this.showMenu();
                }
            });
        }else {
            fs.readFileSync('app/templates/menu.json', 'utf-8', (err, data) => {
                if(!err) {
                    this.menu = JSON.parse(data);
                }
            });
        }
       
        
    }
    /**
     *Show the menu 
     */
    showMenu() {
        //create the menu

        let menuBar = $('menu ul');
        //check if the menu is already shown
        let elem = [];
        //number of menuBar item
        let i = 0;
        if(!menuBar.hasClass('menu-exist')) {
            for(let menuName in this.menu) {
                console.log(menuName);
                menuBar.append('<li id="menubar-'+menuName.trim().toLocaleLowerCase()+'"><span> '+menuName+' </span></li>');
                //creating the submenus
               
                elem[i] = $('#menubar-'+ menuName.trim().toLocaleLowerCase() );
                this.addSubmenus(this.menu[menuName], elem[i]);
                i++;
            }
            this.menuBarShowMenuEvents(elem);
            menuBar.addClass('menu-exist');
        }
       
        
    }
    /**
     * Recursive function showing all menu trees
     * @param {Object} menuObj 
     * @param {Object} menTree 
     */
    addSubmenus(menuObj, menuTree) {
        $(menuTree).append('<ul class="submenu"></ul>');
        menuTree = $(menuTree).children().last();
        for(let menuName in menuObj) {
           switch(menuObj[menuName].type) {
               //if it'is a menu item
                case "menu-item":
                    let shortcut = menuObj[menuName].shortcut;
                    shortcut = shortcut===undefined?"":shortcut;
                    $(menuTree).append('<li class="menuitem" id="menubar-menu-'+menuName+'">'+
                                       '<span class="menu-checkzone"></span>' +
                                       '<span class="menu-name">'+menuObj[menuName].name+'</span>'+
                                       '<span class="menu-shortcut">'+shortcut+'</span></li>');
                    let liel = $(menuTree).children().last();
                    //test if has children
                    let submenu = menuObj[menuName].submenu;
                    //there is a submenu?
                    if(submenu !== undefined) {
                        //add the submenu
                        $(liel).addClass("has-children");
                        this.addSubmenus(submenu, liel);
                        
                    }
                break;
                case "separator":
                break;
           }

        }
    }
    
    menuBarShowMenuEvents(menuBarItems) {
        var me = this;
        //create the events enable the user open the topmenubar contexts
        this.menuOpened = false;
        this.menuClicked = false;
        for(var elem of menuBarItems) {
            
            $(elem).on('click', function() {
                me.closeAllMenus();
                me.menuOpened = true;
                me.menuClicked = true;
                console.log('menuClick ' + me.menuOpened);
                $(this).find('> ul.submenu:last-child').addClass('is-opened');
            });
            //hover
            $(elem).on('mouseenter', function () {
                if(me.menuOpened){
                    me.closeAllMenus();
                    $(this).find('> ul.submenu:last-child').addClass('is-opened');
                }
            });
        }
        //define closing events
        $(window).on('click', function () {
            console.log('windowClick ' + me.menuOpened);
            if(me.menuOpened && !me.menuClicked) {
                me.closeAllMenus();
                me.menuOpened = false;
                
            }else if (me.menuOpened && me.menuClicked) {
                me.menuClicked = false;
            }
                
            
            
        });
    }
    closeAllMenus() {
        $('menu .submenu').removeClass('is-opened');
        
    }
}

module.exports = NsMenu;