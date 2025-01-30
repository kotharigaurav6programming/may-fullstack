// console.log(module);
var myFun = ()=>{
    return {
        domain : function(domain){
            return domain;
        },
        protocol : function(){
            return 'https://';
        }
    }
}

module.exports = myFun();

// console.log("module.exports : ",module.exports);
console.log("module.exports : ",module.exports);

