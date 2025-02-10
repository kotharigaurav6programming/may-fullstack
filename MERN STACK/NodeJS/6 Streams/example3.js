// example showing the concept of streams

var fs = require("fs");
const pathName = "myFolder3/myFolder4";
fs.mkdir(pathName,{recursive:true},(error)=>{
    if(error){
        if(error.code=='EEXIST')
            console.log("Folder Already Exist");
        else
            console.log("Error : ",error);
    }
    else{
        if(fs.existsSync(pathName))
            console.log("Already Exist");
        else
            console.log("Folder Created Successfully");            
    }
});