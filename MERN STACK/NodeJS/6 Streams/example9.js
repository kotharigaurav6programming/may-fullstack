// example showing the concept of streams

var fs = require("fs");
var readLine = require('readline');
var str = new Date().getTime();
const pathName = `myFolder/${str}_textFile.txt`;
const filesName = `myFolder/filesName.txt`;

const instance = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});
instance.question("Enter Content : ", (content) => {
    let writeStream = {};
    const writeData = () => {
        writeStream = fs.createWriteStream(pathName);
        writeStream.write(content);

        const writeStreamNew = fs.createWriteStream(filesName, { flags: 'a' });
        writeStreamNew.write(pathName + "\n");
    }
    if (fs.existsSync(pathName)) {
        console.log("File Already Exist");
        writeData();
    } else {
        writeData();
        console.log("File Created Successfully");
    }
    writeStream.close();
    writeStream.on('finish', () => {
        console.log("Data Inserted Successfully");
    });
    instance.close();
});



