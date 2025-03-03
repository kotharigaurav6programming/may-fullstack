var express = require("express");
var app = express();
// console.log(app);

app.get('/',(request,response)=>{
    response.write("This is an example of Express Js");
    response.end();
});

app.listen(3000,()=>{
    console.log("Server connection successfull");
});