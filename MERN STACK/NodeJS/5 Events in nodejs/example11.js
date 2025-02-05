// example showing the concept of events in nodejs

var events = require('events');
var eventEmitter = new events();

var listenerFunction = ()=>{
    console.log("This is listener function");
}
eventEmitter.on('newListener',()=>{
    console.log('new Listener emitted');
});
eventEmitter.on('removeListener',()=>{
    console.log('remove Listener emitted');
});
eventEmitter.on('customEvent',listenerFunction);
eventEmitter.removeListener('customEvent',listenerFunction);
eventEmitter.emit('customEvent');