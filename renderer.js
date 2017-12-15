const electron = require("electron").remote;
const ipc = electron.ipcRenderer;

const dialog = electron.dialog;
const fs = require("fs");


document.getElementById("savebtn").addEventListener("click", saveFile);
document.getElementById("openbtn").addEventListener("click", openFile);


function saveFile(){
    dialog.showSaveDialog((filename)=>{
        if(filename === undefined){
            alert("File Not Saved")
            return;
        }

        var content = document.getElementById("task").value

       fs.writeFile(filename, content, (err)=>{
            if (err) console.log(err)
                alert("File Saved!")
        })
    })
}


