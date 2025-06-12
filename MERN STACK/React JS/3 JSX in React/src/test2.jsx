/*
function myFun(obj){
    return `Hello ${obj.name}, your age is ${obj.age} and you live in ${obj.address} also your mail id is ${obj.email}`
}
const obj = {
    name:'Andrew Anderson',
    age:78,
    address : 'Indore',
    email : 'andrew@gmail.com'
}
const printMessage = <p>{myFun(obj)}</p>
*/

function myFun(obj){
    if(obj.email=='')
        obj.email = 'default_email@gmail.com'
    return `Hello ${obj.name}, your age is ${obj.age} and you live in ${obj.address} also your mail id is ${obj.email}`
}
const obj = {
    name:'Andrew Anderson',
    age:78,
    address : 'Indore',
    email : ''
}
const printMessage = <p>{myFun(obj)}</p>


export default printMessage;