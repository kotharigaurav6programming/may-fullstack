// example showing the concept of modules

const myObj = {
    name:"Andrew Anderson",
    age:56,
    salary : 89000,
    address : {
        city:"Indore",
        state:"MP",
        country:"India"
    },
    printData : function(){
        // console.log("Name : ",myObj.name);
        // console.log("Age : ",myObj.age);
        // console.log("Salary : ",myObj.salary);
        // console.log("City : ",myObj.address.city);
        // console.log("State : ",myObj.address.state);
        // console.log("Country : ",myObj.address.country);        

        console.log("Name : ",this.name);
        console.log("Age : ",this.age);
        console.log("Salary : ",this.salary);
        console.log("City : ",this.address.city);
        console.log("State : ",this.address.state);
        console.log("Country : ",this.address.country);        

    }
}
module.exports.obj = myObj;
// console.log(module.exports);
