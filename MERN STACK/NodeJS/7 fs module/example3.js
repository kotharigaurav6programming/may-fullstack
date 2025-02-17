// example showing the concept of fs module
var fs = require("fs");
var oldFileName = "textFile.txt";
var newFileName = "newTextFile.txt"; 
fs.rename(oldFileName,newFileName,(error)=>{
    if(error){
        if(error.code=='ENOENT')
            console.log(`${oldFileName} not exist to rename`);
        else
            console.log("Error : ",error);            
    }
    else
        console.log(`File ${oldFileName} renamed to ${newFileName} successfully`);
});
