// example showing the concept of promise

/*
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
*/

/*
function simpleInterest(p,r,t){
    return new Promise((resolve,reject)=>{
         resolve((p*r*t)/100);
    })  
}

simpleInterest(1000,2.3,4).then((result)=>{
    console.log("Simple interest : "+result);
}).catch((error)=>{
    console.log(error);
});
*/

function simpleInterest(p,r,t){
    return new Promise((resolve,reject)=>{
         resolve((p*r*t)/100);
    })  
}
async function myFun(){
    const res = await simpleInterest(1000,2.3,4);
    console.log("Response : ",res);
}
myFun();