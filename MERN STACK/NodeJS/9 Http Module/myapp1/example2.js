// example showing the concept of http module
var http = require('http');

const instance = http.createServer((request,response)=>{
    response.write("<h1>This is an example of http module</h1>");
    response.write("<h2>This is an example of http module</h2>");
    response.end();
});

instance.listen(3000,()=>{
    console.log("Server connection successfull");
});