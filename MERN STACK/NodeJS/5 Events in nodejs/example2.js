// example showing the concept of events in nodejs

var events = require('events');
var eventEmitter = new events();
//console.log(events);

// listener function
var listenerFunction = ()=>{
    console.log("This is listener function");
}

// bind listener function with custom event through on method of eventEmitter object
eventEmitter.on('customEvent',listenerFunction);

// needs to emit that custom event
eventEmitter.emit('customEvent');