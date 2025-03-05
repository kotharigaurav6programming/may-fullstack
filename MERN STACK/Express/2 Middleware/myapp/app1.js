import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
var app = express();

app.get('/',function(request,response,next){
    response.write("This is my first middleware");
    next();
},function(request,response,demo){
    response.write("This is my second middleware");
    demo();
},(request,response)=>{
    response.end("Process completes");
});

app.listen(process.env.PORT,()=>{
    console.log("Server connection successfull");
});