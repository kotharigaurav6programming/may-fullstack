// example showing the concept of promise

/*
function evenOdd(num){
    return new Promise((resolve,reject)=>{
         (num%2==0) ? resolve("Even Number") : reject("Odd Number");
    })  
}

evenOdd(1001).then((result)=>{
    console.log("Status : "+result);
}).catch((error)=>{
    console.log(error);
});
*/

function evenOdd(num){
    return new Promise((resolve,reject)=>{
         (num%2==0) ? resolve("Even Number") : reject("Odd Number");
    })  
}
async function myFun(){
    try{
        const res = await evenOdd(1033);
        console.log("Response : ",res);    
    }catch(error){
        console.log(error);
    }
}
myFun();
