var fs = require('fs');
var url = require('url');
var http = require('http');

var instance = http.createServer((request,response)=>{
    // var data1 = url.parse(request.url).query;
    // var data1 = url.parse(request.url).pathname;
    var data1 = url.parse(request.url).path;
    response.write("<br>data1 : "+data1);
    response.write("<br>typeof data1 : "+typeof data1);
    
    var data2 = url.parse(request.url,true).query;
    console.log(data2);
    console.log("typeof data2 : "+typeof data2);
    console.log("value of a : "+typeof data2.a);
    console.log("value of b : "+typeof data2.b);
    console.log("sum of a and b : "+(parseInt(data2.a)+parseInt(data2.b)));
        
    response.end();
});

instance.listen(3000,()=>{
    console.log("Server connnection successfully");
});