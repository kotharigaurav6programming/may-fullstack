// console.log(module);
var status = {
    SUCCESS : 200,
    INTERNAL_SERVER_ERROR : 500,
    PAGE_NOT_FOUND:404
}
var message = {
    SUCCESS : "Registration Successfull",
    PAGE_NOT_FOUND : "Requested Page is Not Available",
    INTERNAL_SERVER_ERROR : "OOP'S Something Went Wrong"
}
// module.exports = {status,message};
module.exports = {status:status,message:message}; // named export

// console.log("module.exports : ",module.exports);
// console.log("module.exports : ",module.exports);

