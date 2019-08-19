const {remote,BrowserWindow} = require('electron');
const {Menu,MenuItem}  = remote;
const path = require('path');
const {nativeImage} = require('electron').nativeImage;

const menu = new Menu();
const icon = nativeImage.createFromPath(path.join(__dirname,'../static/assets/logos/refresh-button.png'))
//const icons = nativeImage.createFromPath('/../static/assets/logos/refresh-button.png')
menu.append(new MenuItem({role:"reload",label:"Reload",icon:icon }));
