const electron = require("electron");
const app = electron.app;
const dialog = electron.dialog;
const BrowserWindow = electron.BrowserWindow;
const Menu = electron.Menu;
const ipc = electron.ipcMain;
const path = require("path");
const fs = require("fs");
const document = `file://${__dirname}/index.html`

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
            document.getElementById("task").value = undefined;

            console.log("cleared")
        }},
    ]},
    {label: "Developer Tools",
    click: function(item, focusedWindow){
        focusedWindow.toggleDevTools()
    },
    accelerator: 'Ctrl+T'}
]
function openFile(){
    dialog.showOpenDialog((filenames)=>{
        if(filenames === undefined){
            alert("No files selected");
            return;
        }

        readFile(filenames[0]);
    })
}

function readFile(filepath){
    fs.readFile(filepath, "utf-8", (err, data)=>{
        if(err){
            alert("Error retreiving file");
            return;
        }
        var textArea = document.getElementById("task")
        textArea.value = data;
    })}