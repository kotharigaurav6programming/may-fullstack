// example showing the concept of modules

var myFun1 = ()=>{
    console.log("This is an example of Module in nodejs");
}

var myFun2 = (msg)=>{
    console.log(msg);
}

module.exports = {myFun1,myFun2};
console.log(module);
