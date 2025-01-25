// example showing the concept of callback

function myFun(callback,message){
    console.log(message);
    setTimeout(()=>{
        callback();
    },5000);
}
var message = "Task Completed";
var printData = function(){
    console.log("Mail Sent");
} 
myFun(printData,message);