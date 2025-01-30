// example showing the concept of promise

var p = 1000;
var r = 2.3;
var t = 2;
new Promise((resolve,reject)=>{
    resolve((p*r*t)/100);
}).then((result)=>{
    console.log("Simple interest : "+result);
}).catch((error)=>{
    console.log(error);
});
