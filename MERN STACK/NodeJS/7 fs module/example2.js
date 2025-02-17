// example showing the concept of fs module
var fs = require("fs");
var filename = "textFile.txt";
fs.unlink(filename,(error)=>{
    if(error){
        if(error.code=='ENOENT')
            console.log(`${filename} not exist to delete`);
        else
            console.log("Error : ",error);            
    }
    else
        console.log(`File ${filename} deleted successfully`);
});
