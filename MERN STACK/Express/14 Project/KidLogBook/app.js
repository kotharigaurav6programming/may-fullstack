import express from 'express';
import dotenv from 'dotenv';
import adminRouter from './router/adminRouter.js';
import { adminCheckCredentials } from './utils/adminUtil.js';
import url from './connection/dbConfig.js';
import mongoose from 'mongoose';
import { message, status } from './utils/statusMessage.js';
mongoose.connect(url);

dotenv.config();
var app = express();

app.set("views","views");
app.set("view engine","ejs");
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/', (request,response)=>{
    response.render("index.ejs");
});
app.get('/adminLogin',async(request,response)=>{
    const res = await adminCheckCredentials();
    if(!res){
        console.log("Admin Credentials not inserted");
        response.render("adminLogin.ejs",{message:message.ADMIN_CREDENTIAL_NOT_AVAILABLE,status:status.ERROR});
    }else
       response.render("adminLogin.ejs",{message:"",status:""});
});
app.use('/admin',adminRouter);
app.listen(process.env.PORT,()=>{
    console.log("Connection established successfully");
});
