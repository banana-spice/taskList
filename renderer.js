const electron = require("electron");
const ipc = electron.ipcRenderer;

const dialog = app.dialog;
const fs = require("fs");

document.getElementById("buttonname").addEventListener("click", _=>{
    ipc.send("athing")
})

document.getElementById("button").addEventListener("click", saveFile);
document.getElementById("button2").addEventListener("click", openFile);

function saveFile(){
    dialog.showSaveDialog((filename)=>{
        if(filename === undefined){
            alert("File Not Saved")
            return;
        }

        var content = document.getElementById("content").value

        fs.writeFile(filename, content, (err)=>{
            if (err) console.log(err)
                alert("File Saved!")
        })
    })
}

function openFile(){
    dialog.showOpenDialog((filenames)=>{
        if(filenames === undefined){
            alert("No files selected");
            return;
        }

        readFile(filename[0]);
    })
}

function readFile(filepath){
    fs.readFile(filepath, "utf-8", (err, data)=>{
        if(err){
            alert("Error retreiving file");
            return;
        }
        var textArea = document.getElementById("output")
        textArea.value = data;
    })
}