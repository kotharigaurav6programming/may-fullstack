// example showing the concept of fs module
// synchronous dealing with a file
var fs = require("fs");
var newFileName = "newTextFile.txt"; 
var newFolderName="myFolder";
fs.stat(newFileName,(error,info)=>{
    if(error)
        console.log("Error : ",error);
    else{
        console.log("isDirectory : "+info.isDirectory());
        console.log("isFile : "+info.isFile());
    }
});

fs.stat(newFolderName,(error,info)=>{
    if(error)
        console.log("Error : ",error);
    else{
        console.log("isDirectory : "+info.isDirectory());
        console.log("isFile : "+info.isFile());
    }
});
