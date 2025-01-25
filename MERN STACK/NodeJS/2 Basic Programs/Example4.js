// example showing the concept of callback

function myfun(callback){
    var count=10;
    var x = setInterval(()=>{
        callback(count--);
        if(count==0){
            console.log("Times's Up");
            clearInterval(x);
        }
    },1000);
}
var  printData = function(count){
    console.log(count);
}
myfun(printData);