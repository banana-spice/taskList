const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const Menu = electron.Menu;
const ipc = electron.ipcMain

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
    click: _=>{
        },
    }
]