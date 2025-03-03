var express = require("express");
var app = express();
var dotenv = require('dotenv');
dotenv.config();

app.get('/',(request,response)=>{
    response.send("This is an example of Express Js");
});

app.listen(process.env.PORT,()=>{
    console.log("Server connection successfull");
});
