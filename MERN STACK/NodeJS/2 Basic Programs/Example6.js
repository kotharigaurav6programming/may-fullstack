// example showing the concept of callback
function myFun(num1,num2,operation,callback){
    var result;
    switch(operation.toLowerCase()){
        case "addition" : result = num1+num2;
                            break;
        case "subtraction" : result = num1-num2;
                            break;
        case "multiply" : result = num1*num2;
                            break;
        default : result = "Not Found";
                    break;
    }
    callback(result);
}
var a = 100;
var b = 234;
var operation = "ADDITION78787";
var resultantFun = function(result){
    console.log("Result : ",result);
}
myFun(a,b,operation,resultantFun);