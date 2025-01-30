// example showing the concept of promise

function myFun(){
    return new Promise((resolve,reject)=>{
        var obj = {
            name:"Andrew Anderson",
            salary:34567,
            age:34
        }
        resolve(obj);
    });
}
myFun().then((obj)=>{
    var subject = ['c','c++','php','.Net'];
    obj.subject = subject;
    return obj;
}).then((obj)=>{
    console.log("Name : ",obj.name);
    console.log("Salary : ",obj.salary);
    console.log("Age : ",obj.age);
    console.log("Subjects : ",obj.subject);
}).catch((error)=>{
    console.log("Error : "+error);
});