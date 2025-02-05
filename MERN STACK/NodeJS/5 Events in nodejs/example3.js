// example showing the concept of events in nodejs

var events = require('events');
var eventEmitter = new events();
//console.log(events);

eventEmitter.on('customEvent',()=>{
    console.log("This is listener function");
});

eventEmitter.emit('customEvent');