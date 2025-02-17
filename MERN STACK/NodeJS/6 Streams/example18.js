// example showing the concept of transform stream

var fs = require("fs");
var zlib = require('zlib');
var  gzipObj = zlib.createGzip();

const srcPathName = "myFolder/textFile1.txt";
const desPathName = "myFolder/textFile4.txt.zip";

const readStream = fs.createReadStream(srcPathName);
const writeStream = fs.createWriteStream(desPathName);

// const res = readStream.pipe(gzipObj);
// res.pipe(writeStream);

readStream.pipe(gzipObj).pipe(writeStream);

console.log("Zip file created successfully");
