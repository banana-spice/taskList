const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const Menu = electron.Menu;
const ipc = electron.ipcMain
const path = require("path")
const fs = require("fs");

app.on("ready", _=>{
    console.log("ret-2-go!");
    mainWindow = new BrowserWindow({ width:300, height:500});
    mainWindow.loadURL(`file://${__dirname}/index.html`);

    const menu = Menu.buildFromTemplate(myTemplate);
    Menu.setApplicationMenu(menu);

    mainWindow.on("closed", _=>{
        mainWindow = null;
    });
});

const myTemplate = [{
    label: "File",
    submenu: [
        {label: "Open",
        click: _=>{
            openFile();
        },
        accelerator: "Ctrl+O"},
        {type: "separator"}, 
        {label: "Quit",
        click: _=>{
            app.quit();
        },
        accelerator: "Ctrl+Q"}
    ]},
    {label: "Edit",
    submenu: [
        {label: "Add Item",
        click: _=>{
            console.log("Added")
        }},
        {label: "Clear Items",
        click: _=>{
            console.log("cleared")
        }},
    ]},
    {label: "Developer Tools",
    click: function(item, focusedWindow){
        focusedWindow.toggleDevTools()
    },
    accelerator: 'Ctrl+T'}
]
