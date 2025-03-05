import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
var app = express();

const myFun1 = function(request,response,next){
    response.write("This is my first middleware<br>");
    next();
}
const myFun2 = function(request,response,demo){
    response.end("This is my second middleware<br>");
}

app.get('/',(request,response,next)=>{
    response.writeHead(200,{'content-type':'text/html'});
    response.write("Process completes<br>");
    next();
});

app.use(myFun1); // application level middleware | top level middleware
app.use(myFun2); // application level middleware | top level middleware

app.listen(process.env.PORT,()=>{
    console.log("Server connection successfull");
});