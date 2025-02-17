// example showing the concept of fs module
var fs = require("fs");
var readLine = require("readline");
var newFileName = "newTextFile.txt"; 

const instance = readLine.createInterface({
    input : process.stdin,
    output : process.stdout
})

instance.question("Enter Content : ",(content)=>{
    console.log("Before");
    // fs.writeFile(newFileName,content,(error)=>{
    fs.appendFile(newFileName,content,(error)=>{   
        if(error)
            console.log("Error : ",error);
        else{
            console.log("Data inserted successfully");
        }            
    });
    console.log("After");
});