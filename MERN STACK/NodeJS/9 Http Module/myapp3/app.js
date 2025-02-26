var http = require('http');
var url = require('url');
var fs = require('fs');
var qs = require('querystring');
var instance = http.createServer((request,response)=>{
    var requestedURL = url.parse(request.url,true);
    if(requestedURL.pathname=='/' || requestedURL.pathname=='/home'){
        var data = fs.readFileSync('index.html','utf-8');
        response.write(data);
        response.end();
    }
    else if(requestedURL.pathname=='/register'){
        var data = fs.readFileSync('register.html','utf-8');
        response.write(data);
        response.end();
    }
    // else if(requestedURL.pathname=='/viewInfo'){
    //     var data = requestedURL.query;
    //     console.log(data);
        
    //     response.write("<br>Username : "+data.username);
    //     response.write("<br>Email : "+data.email);
    //     response.write("<br>Password : "+data.password);
    //     response.write("<br>Address : "+data.address);
    //     response.end();
    // }
    
    else if(requestedURL.pathname=='/viewInfo'){
        
        var chunkData='';
        request.on('data',(chunk)=>{
            // console.log(chunk);
            // console.log(typeof chunk);
            chunkData+=chunk;        
        });
        request.on('end',()=>{
            var data = qs.parse(chunkData);
            response.write("<br>Username : "+data.username);
            response.write("<br>Email : "+data.email);
            response.write("<br>Password : "+data.password);
            response.write("<br>Address : "+data.address);
            response.end();    
        });        
    }

});
instance.listen(3000,()=>{
    console.log("Server connection established");
});