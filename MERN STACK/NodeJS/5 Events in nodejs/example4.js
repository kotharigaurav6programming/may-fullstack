// example showing the concept of events in nodejs

var events = require('events');
var eventEmitter = new events();
//console.log(events);

var listenerFunction = ()=>{
    console.log("This is listener function");
}

eventEmitter.on('myEvent',listenerFunction);
eventEmitter.on('myEvent',listenerFunction);
eventEmitter.on('myEvent',listenerFunction);
eventEmitter.on('myEvent',listenerFunction);

// needs to emit that custom event
eventEmitter.emit('myEvent');