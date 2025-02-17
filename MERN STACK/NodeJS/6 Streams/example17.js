// example showing the concept of streams

var fs = require("fs");
const srcPathName = "myFolder/textFile1.txt";
const desPathName = "myFolder/textFile2.txt";

const readStream = fs.createReadStream(srcPathName);
const writeStream = fs.createWriteStream(desPathName);

readStream.pipe(writeStream);
console.log("Data Transfer Completed");

