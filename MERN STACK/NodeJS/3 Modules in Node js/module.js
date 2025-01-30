console.log(module);
// console.log(typeof module);
// console.log("Id : ",module.id);
// console.log("Path : ",module.path);
// console.log("module.exports : ",module.exports);
// console.log("filename : ",module.filename);
// console.log("Paths : ",module.paths);


console.log(Object.getPrototypeOf(module).constructor.name); // Output: Module
const Module = require('module');
console.log(Module);

