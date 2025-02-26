// example showing the concept of http module
var http = require('http');

const instance = http.createServer((request,response)=>{
    response.writeHead(200,{'content-type':'text/html'});
    response.write("This is an example of http module");
    response.write("<h2>This is an example of http module</h2>");
    response.end();
});

instance.listen(3000,()=>{
    console.log("Server connection successfull");
});