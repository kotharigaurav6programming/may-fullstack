// example showing the concept of streams

var fs = require("fs");
var str = new Date().getTime();
const pathName = `myFolder/${str}_textFile.txt`;
const filesName = `myFolder/filesName.txt`;

const content = "Hello user, this is an example of streams in node js";
let writeStream = {};
const writeData = ()=>{
    writeStream = fs.createWriteStream(pathName);
    writeStream.write(content);
    
    const writeStreamNew = fs.createWriteStream(filesName,{flags:'a'});
    writeStreamNew.write(pathName+"\n");
}
if(fs.existsSync(pathName)){
    console.log("File Already Exist");
    writeData();
}else{
    writeData();
    console.log("File Created Successfully");
}
writeStream.close();
writeStream.on('finish',()=>{
    console.log("Data Inserted Successfully");
});


