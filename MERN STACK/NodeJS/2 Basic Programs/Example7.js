// example showing the concept of callback
function myFun(callback){
    var obj = {
        name:"Andrew Anderson",
        age:56,
        salary:89000
    }
    return callback(obj);
}
var displayFun = function(obj){
    return `Hello ${obj.name}, Your age is ${obj.age} and your salary is ${obj.salary}`;
}
console.log("Result : ",myFun(displayFun));