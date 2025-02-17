// example showing the concept of fs module
// synchronous dealing with a file
var fs = require("fs");
var readLine = require("readline");
var newFileName = "newTextFile.txt"; 

const instance = readLine.createInterface({
    input : process.stdin,
    output : process.stdout
})

instance.question("Enter Content : ",(content)=>{
    console.log("Before");
    fs.writeFileSync(newFileName,content);
    console.log("Data inserted successfully");
    console.log("After");
});