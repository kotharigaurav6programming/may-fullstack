// example showing the concept of http module
var http = require('http');
var dotenv = require('dotenv');
var url = require('url');
var {status} = require('./utils/status.js');
dotenv.config();

const config = {
   'content-type':'text/html'
};
const instance = http.createServer((request,response)=>{
    response.writeHead(status.SUCCESS,config);
    // http://localhost:3000/home?a=123&b=234
    var requestedURL =  url.parse(request.url).pathname;   
    if(requestedURL=='/' || requestedURL=='/home')
        response.write("<h1>Home Page</h1>");
    
    else if(requestedURL=='/about')
        response.write("<h1>About Page</h1>");
    
    else if(requestedURL=='/contact')
        response.write("<h1>Contact Page</h1>");
    
    else if(requestedURL=='/faq')
        response.write("<h1>FAQ Page</h1>");
    
    else if(requestedURL=='/services')
        response.write("<h1>Services Page</h1>");
    
    else if(requestedURL=='/account')
        response.write("<h1>Account Page</h1>");
    
    response.end();
});

instance.listen(process.env.PORT,()=>{
    console.log("Server connection successfull");
});