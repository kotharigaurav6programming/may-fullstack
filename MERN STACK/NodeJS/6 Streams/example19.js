// example showing the concept of transform stream

var fs = require("fs");
var zlib = require('zlib');
var  gunzipObj = zlib.createGunzip();

const srcPathName = "myFolder/textFile5.txt";
const desPathName = "myFolder/textFile4.txt.zip";

const readStream = fs.createReadStream(desPathName);
const writeStream = fs.createWriteStream(srcPathName);

readStream.pipe(gunzipObj).pipe(writeStream);

console.log("Zip file extracted successfully");
