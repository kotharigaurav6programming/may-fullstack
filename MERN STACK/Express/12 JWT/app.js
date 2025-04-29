// https://www.geeksforgeeks.org/json-web-token-jwt/
// https://medium.com/@sangiri15sivam/jwt-d848bd9a0c23
import cookieParser from 'cookie-parser';
import express from 'express';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
const SECRET_KEY = process.env.SECRET;
var app = express();

app.set("views","views");
app.set("view engine","ejs");

// const secret = crypto.randomBytes(32).toString('hex');
// console.log("secret key : ",secret);

app.use(cookieParser());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/',(request,response)=>{
    response.render("index.ejs",{message : ""});
});
app.get('/signin',(request,response)=>{
    response.render("signin.ejs");
});

const authenticateJWT = (request,response,next)=>{
    try{
        const token = request.cookies.jwt_token;
        if(!token){
            console.log("Token Not Found - token : ",token);
            response.render("index.ejs",{message:"Token Not Found"});    
        }else{
            jwt.verify(token,SECRET_KEY,(error,payload)=>{
                if(error){
                    console.log("Error while verifying token : ",error);
                    response.render("index.ejs",{message:"Token Not Found"});            
                }else{
                    request.payload = payload;
                    next();
                }
            });
        }
    }catch(error){
        console.log("Error while authenticateJWT : ",error);
        response.render("index.ejs",{message:"Error while authenticate jwt"});
    }
}
const authorizeJWT = (request,response,next)=>{
    try{
        if(request.payload.role=='admin')
            response.render("adminProfile.ejs",{message : "Admin Profile", email:request.payload.email});
        else
          response.render("userProfile.ejs",{message : "User Profile", email:request.payload.email});
        next();
    }catch(error){
        console.log("Error while authorizeJWT : ",error);
        response.render("index.ejs",{message:"Error while authorize jwt"});
    }
}
app.post('/signin',(request,response)=>{
    // console.log(request.body);
    if(request.body.email=='admin@gmail.com' && request.body.password=='12345678')
        request.body.role = 'admin';
    else
        request.body.role='user'

    const expiryTime = {
        expiresIn:'1d'
    }    
    const token = jwt.sign(request.body,SECRET_KEY,expiryTime);
    response.cookie('jwt_token',token,{httpOnly:true});
    response.redirect('/profile');
});

app.get('/profile',authenticateJWT,authorizeJWT,(request,response)=>{
    console.log('Task Completed');
});
app.listen(3000,()=>{
    console.log("Server connection successfull");
});