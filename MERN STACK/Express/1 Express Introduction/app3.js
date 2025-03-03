var express = require("express");
var app = express();
// console.log(app);

app.get('/',(request,response)=>{
    response.send("This is an example of Express Js <h1>This is an example of Express Js</h1>");
});

app.listen(3000,()=>{
    console.log("Server connection successfull");
});