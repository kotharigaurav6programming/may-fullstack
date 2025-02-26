// example showing the concept of http module
var http = require('http');
var dotenv = require('dotenv');
var {status} = require('./utils/status.js');
dotenv.config();

const config = {
   'content-type':'text/html'
};
const instance = http.createServer((request,response)=>{
    response.writeHead(status.SUCCESS,config);
    
    if(request.url=='/' || request.url=='/home')
        response.write("<h1>Home Page</h1>");
    
    else if(request.url=='/about')
        response.write("<h1>About Page</h1>");
    
    else if(request.url=='/contact')
        response.write("<h1>Contact Page</h1>");
    
    else if(request.url=='/faq')
        response.write("<h1>FAQ Page</h1>");
    
    else if(request.url=='/services')
        response.write("<h1>Services Page</h1>");
    
    else if(request.url=='/account')
        response.write("<h1>Account Page</h1>");
    
    response.end();
});

instance.listen(process.env.PORT,()=>{
    console.log("Server connection successfull");
});