// example showing the concept of streams

var fs = require("fs");
fs.mkdir("myFolder1/myFolder2",(error)=>{
    if(error){
        if(error.code=='EEXIST')
            console.log("Folder Already Exist");
        else
            console.log("Error : ",error);
    }
    else
        console.log("Folder Created Successfully");
});