import express from 'express';
import mongoose from 'mongoose';
import mailer from './controller/mailer.js';
import studentSchema from './model/studentSchema.js';
import dotenv from 'dotenv';
dotenv.config();
const url = 'mongodb://127.0.0.1:27017/mongoosenewdb';
mongoose.connect(url);
var app = express();

app.set("views","views");
app.set("view engine","ejs");

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/',(request,response)=>{
    response.render("index.ejs",{message:""});
});
app.post('/register',async (request,response)=>{
    try{
        console.log(request.body);
        mailer.mailer(request.body.email,async (info)=>{
            if(info){
                const res = await studentSchema.create(request.body);
                console.log("Mail sent successfully | Please Verify");
                response.render("index.ejs",{message:"Mail sent successfully | Please Verify"});
            }else{
                console.log("Error while sending mail");
                response.render("index.ejs",{message:""});        
            }
        });
    }catch(error){
        console.log("Error while registering student : ",error);
        response.render("index.ejs",{message:""});
    }
});

app.post('/verifyEmail',async (request,response)=>{
    try{
        const email = request.body.email;
        const status = {
            $set : {
                emailVerify:'Verified'
            }
        }
        const res = await studentSchema.updateOne({email},status);
        console.log(res);
        response.render("profile.ejs",{message:"Email Verified"});         
    }catch(error){
        console.log("Error while verifying");
        response.render("index.ejs",{message:""});
    }
});
app.listen(process.env.PORT,()=>{
    console.log("Server connection successfull");
});