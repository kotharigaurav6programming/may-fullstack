// example showing the concept of fs module
var fs = require("fs");
var newFileName = "newTextFile.txt"; 

console.log("Before");
    fs.readFile(newFileName,'utf-8',(error,data)=>{   
        if(error)
            console.log("Error : ",error);
        else{
            console.log(data);
        }            
    });
console.log("After");
