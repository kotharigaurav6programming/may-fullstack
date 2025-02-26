// example showing the concept of http module
var http = require('http');

const instance = http.createServer((request,response)=>{
    response.write("This is an example of http module");
    response.write("This is an example of http module");
    response.end();
});

instance.listen(3000,()=>{
    console.log("Server connection successfull");
});