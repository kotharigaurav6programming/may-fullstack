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
    response.write("This is an example of http module");
    response.write("<h2>This is an example of http module</h2>");
    response.end();
});

instance.listen(process.env.PORT,()=>{
    console.log("Server connection successfull");
});