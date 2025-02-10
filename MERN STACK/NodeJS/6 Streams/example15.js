// example showing the concept of streams

var fs = require("fs");
const pathName = "myFolder/textFile.txt";

var obj = [{
    name:"Andrew Anderson",
    age : 45,
    address : {
        state:"Madhya Pradesh",
        country:"India"
    },
    salary:12345
},{
    name:"Mathew Math",
    age : 45,
    address : {
        state:"Madhya Pradesh",
        country:"India"
    },
    salary:12345
},{
    name:"Jackson Jack",
    age : 45,
    address : {
        state:"Madhya Pradesh",
        country:"India"
    },
    salary:12345
}]

const writeStream = fs.createWriteStream(pathName);
writeStream.write(JSON.stringify(obj));
writeStream.close();
writeStream.on('finish',()=>{
    console.log("Data Insertion completed");
});
