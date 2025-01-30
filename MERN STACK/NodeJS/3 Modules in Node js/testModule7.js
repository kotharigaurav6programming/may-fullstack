// var data = require('./module7.js');
// console.log(data.protocol()+data.domain('www.google.com'));

var {domain,protocol} = require('./module7.js');
console.log(protocol()+domain('www.google.com'));


