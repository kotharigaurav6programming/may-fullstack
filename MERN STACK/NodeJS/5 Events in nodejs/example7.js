// example showing the concept of events in nodejs

var events = require('events');
var eventEmitter = new events();
//console.log(events);

var listenerFunction1 = ()=>{
    console.log("This is 1st listener function");
}
var listenerFunction2 = ()=>{
    console.log("This is 2nd listener function");
}
var listenerFunction3 = ()=>{
    console.log("This is 3rd listener function");
}
var listenerFunction4 = ()=>{
    console.log("This is 4th listener function");
}

eventEmitter.on('myEvent',listenerFunction1);
eventEmitter.on('myEvent',listenerFunction2);
eventEmitter.on('myEvent',listenerFunction3);
eventEmitter.on('myEvent',listenerFunction4);
const event = eventEmitter.listeners("myEvent");
console.log("Length : ",event.length);

// needs to emit that custom event
eventEmitter.emit('myEvent');
