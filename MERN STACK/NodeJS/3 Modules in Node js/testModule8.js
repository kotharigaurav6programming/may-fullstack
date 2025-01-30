// var data = require('./module8.js');
// console.log(data);
// console.log(data.status.SUCCESS+" "+data.message.SUCCESS);
// console.log(data.status.INTERNAL_SERVER_ERROR+" "+data.message.INTERNAL_SERVER_ERROR);
// console.log(data.status.PAGE_NOT_FOUND+" "+data.message.PAGE_NOT_FOUND);

var {status,message} = require('./module8.js'); // named import
console.log(status.SUCCESS+" "+message.SUCCESS);
console.log(status.INTERNAL_SERVER_ERROR+" "+message.INTERNAL_SERVER_ERROR);
console.log(status.PAGE_NOT_FOUND+" "+message.PAGE_NOT_FOUND);







