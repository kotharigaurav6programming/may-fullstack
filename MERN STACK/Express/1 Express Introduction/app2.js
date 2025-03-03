var express = require("express");
var app = express();
// console.log(app);

app.get('/',(request,response)=>{
    response.writeHead(200,{'content-type':'text/html'});
    response.write("This is an example of Express Js");
    response.write("<h1>This is an example of Express Js</h1>");
    response.end();
});

app.listen(3000,()=>{
    console.log("Server connection successfull");
});