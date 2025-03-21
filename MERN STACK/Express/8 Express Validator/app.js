import express from 'express';
import dotenv from 'dotenv';
import {check,validationResult} from 'express-validator';
dotenv.config();
var app = express();
app.set("views","views");
app.set("view engine","ejs");

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/",(request,response)=>{
    response.render("index.ejs");
});
app.get('/register',(request,response)=>{
    response.render("register.ejs");
});
app.post('/viewInfo',[
    check("username","Enter Username").not().isEmpty(),
    check("email","Enter Email").not().isEmpty(),
    check("password","Enter Password").not().isEmpty().isLength({min:5,max:10}),
    check("contact","Enter 10-digit contact number").custom((value)=>{
        var regex = /^[6789][0-9]{9}$/;
        if(regex.test(value))
            return true;
        else
            return false;
    })
],(request,response)=>{
    const error = validationResult(request);
    if(!error.isEmpty()){
        console.log(error);
        response.send("Error occured");
    }else{
        response.send("Success");
    }
});
app.listen(process.env.PORT,()=>{
    console.log("Server connection established");
});