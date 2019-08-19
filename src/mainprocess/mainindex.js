'use strict';
const electron = require('electron');
const path = require('path');
const url = require('url');
const nativeIcon = require('electron').nativeImage;
const { BrowserWindow, app } = require('electron');

let window;
function createWindow() {
    window = new BrowserWindow({
        width: 700,
        height: 600,
        fullscreenWindowTitle: "Stock Market",
        fullscreenable: false,
        maxHeight: 800,
        maxWidth: 900,
        icon: nativeIcon.createFromPath('../static/assets/logos/Octocat.png' ),
        webPreferences: {
            nodeIntegration: true
        }
    });
    window.setMenu(null)
    // window.removeMenu();
    //wind.loadFile(path.resolve('__dirname','static/pages/index.html'));
    window.loadURL(url.format({
        pathname: path.join(__dirname, 'static/pages/index.html'),
        slashes: true,
        protocol: 'file'
    }))
    window.webContents.openDevTools();
    window.on('closed', () => {
        window = null;
    })
}
app.on('ready', createWindow);
app.on('activate', () => {
    if (window === null) {
        createWindow();
    }
})
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
})