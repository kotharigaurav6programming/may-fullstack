// example showing the concept of fs module
var fs = require("fs");
var filename = "textFile.txt";
/*
fs.open(filename,'w',(error)=>{
    if(error)
        console.log("Error : ",error);
    else
        console.log("File Created successfully");
});
*/

fs.open(filename,'wx',(error)=>{
    if(error){
        if(error.code=='EEXIST')
            console.log("File Already Exist");
        else
            console.log(error);
    }
    else
        console.log("File Created successfully");
});
