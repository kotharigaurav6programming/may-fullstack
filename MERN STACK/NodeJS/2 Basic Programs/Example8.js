// example showing the concept of callback
function sortFruits(fruitsArray,callback){
    setTimeout(()=>{
        callback(fruitsArray.sort());
    },3000);
}
const fruitsArray = ['Guava','WaterMelon','Banana','Apple','Mango'];
const printName = function(result){
    console.log("Fruits in Ascending order : "+result);
}
sortFruits(fruitsArray,printName);