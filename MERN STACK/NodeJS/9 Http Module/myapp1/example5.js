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
    console.log(request);
    response.write("<br>url : "+request.url);
    response.write("<br>method : "+request.method);
    response.write("<br>headers : "+request.headers);
    response.write("<br>host : "+request.headers.host);
    response.end();
});

instance.listen(process.env.PORT,()=>{
    console.log("Server connection successfull");
});