// example showing the concept of fs module
var fs = require("fs");
var path = require("path");
console.log("__filename : ",__filename);
console.log("__dirname : ",__dirname);
console.log("__filename : ",__filename.replace("\\MERN STACK",""));

console.log("basename : ",path.basename(__filename));
console.log("extname : ",path.extname(__filename));
console.log("dirname : ",path.dirname(__filename));
console.log("normalize : ",path.normalize(__filename));
