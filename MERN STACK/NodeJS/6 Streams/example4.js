// example showing the concept of streams

var fs = require("fs");
const pathName = "myFolder/textFile.txt";
const content = "Hello user, this is an example of streams in node js";

const writeStream = fs.createWriteStream(pathName);
writeStream.write(content);
console.log("Data inserted successfully");

