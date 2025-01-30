// example showing the concept of callback
function sortFruits(fruitsArray,callback){
    setTimeout(()=>{
        callback(fruitsArray.sort((a,b)=>{
            return a-b;
        }));
    },3000);
}
const fruitsArray = [23,34,4,32,234,4,34,43,2];
const printName = function(result){
    console.log("Numbers in Ascending order : "+result);
}
sortFruits(fruitsArray,printName);