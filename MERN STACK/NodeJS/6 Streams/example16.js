// example showing the concept of streams

var fs = require("fs");
const pathName = "myFolder/textFile.txt";

const readStream = fs.createReadStream(pathName,'utf-8');
readStream.on('data',(chunk)=>{
    // console.log(typeof chunk);
    const data = JSON.parse(chunk);
    // console.log(typeof data);
    for(var index in data){
        for(var key in data[index]){
            
        }
    }
});


console.log("Name : ",data.name);
    console.log("Age : ",data.age);
    console.log("Salary : ",data.salary);
    console.log("State : ",data.address.state);
    console.log("Country : ",data.address.country);