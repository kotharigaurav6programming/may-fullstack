// example showing the concept of events in nodejs

// var events = require('events');
// console.log(events);
// console.log("typeof events : ",typeof events);

// var events = require('events');
// var eventEmitter = new events();
// console.log(eventEmitter);

// var events = require('events').EventEmitter;
// var eventEmitter = new events();
// console.log(eventEmitter);

var events = require('events');
var eventEmitter = new events.EventEmitter;
console.log(eventEmitter);
