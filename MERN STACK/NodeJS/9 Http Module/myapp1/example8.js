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
        fs.readFile("index.html",(error,data)=>{
            if(error)
                console.log("Error occured : "+error);
            else{
                response.write(data);
                response.end();
            }
        });
    }    
    else if(request.url=='/about'){
        fs.readFile("about.html",(error,data)=>{
            if(error)
                console.log("Error occured : "+error);
            else{
                response.write(data);
                response.end();
            }
        });
    }    
    else if(request.url=='/contact'){
        fs.readFile("contact.html",(error,data)=>{
            if(error)
                console.log("Error occured : "+error);
            else{
                response.write(data);
                response.end();
            }
        });
    }
});

instance.listen(process.env.PORT,()=>{
    console.log("Server connection successfull");
});