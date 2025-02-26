var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');
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
        //var data = fs.createReadStream('public/css/style.css');
        var cssPath = path.join(__dirname+"/public/css"+"/style.css");     
        var data = fs.createReadStream(cssPath);
        data.pipe(response);
    }
    else if(requestedURL.pathname.match('\.jpg$')){
        response.writeHead(200,{'content-type':'image/jpg'});
        //var data = fs.createReadStream('public/images/img4.jpg');
        var imagePath = path.join(__dirname+"/public/images"+"/img4.jpg");     
        var data = fs.createReadStream(imagePath);
        data.pipe(response);
    }
});
instance.listen(3000,()=>{
    console.log("Server connection established");
});