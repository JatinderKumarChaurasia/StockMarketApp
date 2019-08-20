'use strict';
const electron = require('electron');
const path = require('path');
const url = require('url');
const nativeIcon = require('electron').nativeImage;
const { BrowserWindow, app, Menu, MenuItem, remote } = require('electron');
let windo;
function createWindow() {
    windo = new BrowserWindow({
        width: 700,
        height: 600,
        fullscreenWindowTitle: "Stock Market",
        fullscreenable: false,
        maxHeight: 800,
        maxWidth: 900,
        icon: nativeIcon.createFromPath('../static/assets/logos/Octocat.png'),
        webPreferences: {
            nodeIntegration: false,
            contextIsolation:true
        }
    });
    let menu = new Menu();
    menu.append(new MenuItem({
        id: "reload", label: "Reload Window", role: 'reload', click: () => {
            console.log("Menu Is Clicked")
        }
    }));
    windo.setContentProtection(true);
    windo.addListener('contextmenu', (e) => {
        e.preventDefault();
        menu.popup({ window: remote.getCurrentWindow() })
    });
    windo.setMenu(null);
    //  window.setMenu(menu)
    // window.removeMenu();
    //wind.loadFile(path.resolve('__dirname','static/pages/index.html'));
    windo.loadURL(url.format({
        pathname: path.join(__dirname, 'static/pages/index.html'),
        slashes: true,
        protocol: 'file'
    }))
    windo.webContents.openDevTools();
    windo.on('closed', () => {
        windo = null;
    })
}
app.on('ready', createWindow);
app.on('activate', () => {
    if (windo === null) {
        createWindow();
    }
})
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
})