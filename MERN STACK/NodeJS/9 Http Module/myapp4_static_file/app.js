var http = require('http');
var url = require('url');
var fs = require('fs');
var instance = http.createServer((request,response)=>{
    var requestedURL = url.parse(request.url,true);
    if(requestedURL.pathname=='/' || requestedURL.pathname=='/home'){
        response.writeHead(200,{'content-type':'text/html'});
        var data = fs.readFileSync('index.html','utf-8');
        response.write(data);
        response.end();
    }
    else if(requestedURL.pathname.match('\.css$')){
        response.writeHead(200,{'content-type':'text/css'});
        var data = fs.createReadStream('style.css');
        data.pipe(response);
    }
    else if(requestedURL.pathname.match('\.jpg$')){
        response.writeHead(200,{'content-type':'image/jpg'});
        var data = fs.createReadStream('img4.jpg');
        data.pipe(response);
    }
});
instance.listen(3000,()=>{
    console.log("Server connection established");
});