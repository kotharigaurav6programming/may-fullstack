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
            if(typeof data[index][key]=="object"){
                for(var subkey in data[index][key]){
                    if(typeof data[index][key][subkey]=="object"){

                    }else{
                        console.log(subkey+" : "+data[index][key][subkey]);
                    }
                }
            }else{
                console.log(key+" : "+data[index][key]);
            }
        }
        console.log("########################################");
    }
});


