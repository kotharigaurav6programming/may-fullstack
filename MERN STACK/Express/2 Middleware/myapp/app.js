// example showing the concept of error handling middleware
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
var app = express();

app.get('/',(request,response,next)=>{
    response.writeHead(200,{'content-type':'text/html'});
    response.write("Process completes<br>");
    const err = new Error("Error occured");
    next(err);
});
app.use(function(error,request,response,next){
    response.end(""+error);
});

app.listen(process.env.PORT,()=>{
    console.log("Server connection successfull");
});