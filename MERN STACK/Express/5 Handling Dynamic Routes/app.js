import express from 'express';
var app = express();

// handle single route
app.get('/demo/:name',(request,response)=>{
    const name = request.params.name;
    response.send(`Hello ${name}`);
});
// handle multiple routes
app.get('/exampleDemo/:name/:age',(request,response)=>{
    const name = request.params.name;
    const age = request.params.age;
    response.send(`Hello ${name} your age is ${age}`);
});
// handle optional route
app.get('/example/:name?',(request,response)=>{
    const name = request.params.name ? request.params.name : 'john deo';
    response.send(`Hello ${name}`);
});

// handle optional route
app.get('/exampleRegex/:mobile',(request,response)=>{
    const regex = /^[6789][0-9]{9}$/;
    const result = regex.test(request.params.mobile); 
    const name = result ? "Valid" : "Invalid";
    response.send(`${name}`);
});

// wildcard route
app.get('/exampleWild/*',(request,response)=>{
    const name = request.params[0];
    response.send(`${name}`);
});


app.listen(3000,()=>{
    console.log("Server connection successfull");
});