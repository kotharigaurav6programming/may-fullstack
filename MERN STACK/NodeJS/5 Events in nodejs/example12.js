// example showing the concept of events in nodejs

var events = require('events');
var eventEmitter = new events();

eventEmitter.on('data',function(){
    console.log('data event emits');
});
eventEmitter.on('error',function(){
    console.log('error event emits');
});
eventEmitter.on('finish',function(){
    console.log('finish event emits');
});
eventEmitter.on('end',function(){
    console.log('end event emits');
});

eventEmitter.emit('data');
eventEmitter.emit('error');
eventEmitter.emit('end');
eventEmitter.emit('finish');
