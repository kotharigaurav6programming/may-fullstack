// example showing the concept of callback

function myFirstExample(callback){
    console.log("Gets Entry");
    callback();
}

var demoFunction = function(){
    console.log("This is an example of callback");
}

myFirstExample(function(){
    console.log("This is an example of callback");
});
