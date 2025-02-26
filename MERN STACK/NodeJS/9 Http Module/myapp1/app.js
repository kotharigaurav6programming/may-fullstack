// example showing the concept of http module
var http = require('http');
var dotenv = require('dotenv');
var fs = require('fs');
var {status} = require('./utils/status.js');
dotenv.config();

const config = {
   'content-type':'text/html'
};
const instance = http.createServer((request,response)=>{
    response.writeHead(status.SUCCESS,config);
    
    if(request.url=='/' || request.url=='/home'){
        var data = fs.readFileSync("index.html",'utf-8');
        response.write(data);
    }    
    else if(request.url=='/about'){
        var data = fs.readFileSync("about.html",'utf-8');
        response.write(data);
    }    
    else if(request.url=='/contact'){
        var data = fs.readFileSync("contact.html",'utf-8');
        response.write(data);
    }
    response.end();
});

instance.listen(process.env.PORT,()=>{
    console.log("Server connection successfull");
});