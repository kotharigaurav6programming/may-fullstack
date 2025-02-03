/*
    var data = require('./module9.js');
    console.log(data);
    data.a();
    data.b("This is an example of Node Js again");
*/

var {a,b} = require('./module9.js');
a();
b("This is an example of Node Js again");
