// example showing the concept of modules

function Employer(){
    this.name = 'Andrew Anderson',
    this.age = 45,
    this.address = {
        city : "Indore",
        state : "MP",
        country : "India"
    }
}
// const emp = new Employer();
// module.exports.objName=emp;

module.exports.objName=new Employer();


// console.log(module);
