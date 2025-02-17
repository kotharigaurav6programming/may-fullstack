// example showing the concept of fs module
// synchronous dealing with a file
var fs = require("fs");
var newFileName = "newTextFile.txt"; 

    console.log("Before");
    const data = fs.readFileSync(newFileName,'utf-8');
    console.log("Data : "+data);
    console.log("After");
