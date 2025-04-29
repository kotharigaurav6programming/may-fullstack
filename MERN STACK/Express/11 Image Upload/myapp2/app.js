import express from 'express';
import mongoose from 'mongoose';
import studentSchema from './model/studentSchema.js';
import dotenv from 'dotenv';
import {fileURLToPath} from 'url';
import path from 'path';
import multer from 'multer';
dotenv.config();
const url = process.env.URL;
mongoose.connect(url);
var app = express();

var __filename = fileURLToPath(import.meta.url);
var __dirname = path.dirname(__filename);

app.set("views","views");
app.set("view engine","ejs");
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

const storage = multer.diskStorage({
    destination:'./public/images',
    filename : (request,fileObj,callback)=>{
        callback(null,new Date().getTime()+fileObj.originalname);
    }
});
const uploads = multer({storage:storage});

app.get('/',(request,response)=>{
    response.render("index.ejs",{message:""});
});
app.post('/register',uploads.fields([{name:'profileOne',maxCount:1},{name:'profileTwo',maxCount:1}]),async (request,response)=>{
    try{
        request.body.profileOne = request.files.profileOne[0].filename;
        request.body.profileTwo = request.files.profileTwo[0].filename;
        const res = await studentSchema.create(request.body);
                // console.log("Result : ",res);
        console.log("File Uploaded successfully");
        const galleryData = await studentSchema.find();
        response.render("profile.ejs",{galleryData:galleryData});
    }catch(error){
        console.log("Error while registering student : ",error);
        response.render("index.ejs",{message:""});
    }
});

app.listen(process.env.PORT,()=>{
    console.log("Server connection successfull");
});