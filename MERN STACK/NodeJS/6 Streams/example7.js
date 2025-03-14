// example showing the concept of streams

var fs = require("fs");
const pathName = "myFolder/textFile.txt";
const content = "Hello user, this is an example of streams in node js";
let writeStream = {};
const writeData = ()=>{
    writeStream = fs.createWriteStream(pathName,{flags:'a'});
    writeStream.write(content);
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


