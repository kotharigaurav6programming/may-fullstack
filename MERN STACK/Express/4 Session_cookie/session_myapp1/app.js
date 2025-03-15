import express from 'express';
import dotenv from 'dotenv';
import expressSession from 'express-session';
dotenv.config();
var app = express();

app.set("views","views");
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(expressSession({
    secret:process.env.SECRET,
    resave:true,
    saveUninitialized:true,
    // cookie:{
    //     httpOnly:true,
    //     secure:true,
    //     maxAge:360000
    // }
}));

app.get('/',(request,response)=>{
    response.render("index",{email:"",message:""});
});
app.get('/viewInfo',(request,response)=>{
    const {email,password} = request.query;
    if(email == 'admin@gmail.com' && password == 'admin@12345'){
        request.session.email = email;
        request.session.save();
        response.render("index.ejs",{email:email,message:"Login Successfull"});
    }else{
        response.render("index.ejs",{email:"",message:"EmailId or Password is wrong"});
    }
});
app.post('/viewInfo',(request,response)=>{
    console.log(request.body);
    
    const {email,password} = request.body;
    if(email == 'admin@gmail.com' && password == 'admin@12345'){
        request.session.email = email;
        request.session.save();
        response.render("index.ejs",{email:email,message:"Login Successfull"});
    }else{
        response.render("index.ejs",{email:"",message:"EmailId or Password is wrong"});
    }
});

app.get('/logout',(request,response)=>{
    request.session.email='';
    request.session.destroy((error)=>{
        if(error)
            console.log("Error while logout");
        else
            response.render("index.ejs",{email:"",message:"Logout successfully"});            
    });
});
app.listen(process.env.PORT,()=>{
    console.log("Server connection successfull");
});