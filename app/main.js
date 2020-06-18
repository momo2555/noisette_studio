let $ = require('jquery');

var NsWindow = require('app/style/js/window');

//create window
var nsWindow = new NsWindow(document.querySelectorAll('body')[0]);
//$('body').css('background-color', "red");

nsWindow.createWindow();
console.log("allo");
/*// Create an empty menubar
var menu = new nw.Menu({type: 'menubar'});

// Create a submenu as the 2nd level menu
var submenu = new nw.Menu();
submenu.append(new nw.MenuItem({ label: 'Item A' }));
submenu.append(new nw.MenuItem({ label: 'Item B' }));

// Create and append the 1st level menu to the menubar
menu.append(new nw.MenuItem({
  label: 'Fichier',
  submenu: submenu
}));
menu.append(new nw.MenuItem({
    label: 'Edition',
    submenu: submenu
  }));

  menu.append(new nw.MenuItem({
    label: 'Aide',
    submenu: submenu
  }));
  
// Assign it to `window.menu` to get the menu displayed
nw.Window.get().menu = menu;*/