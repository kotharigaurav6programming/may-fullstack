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
app.post('/register',uploads.fields([{name:'profileOne',maxCount:100},{name:'profileTwo',maxCount:100}]),async (request,response)=>{
    try{
        var arr1 = [];
        var arr2 = [];
        for(let i=0;i<request.files.profileOne.length;i++){
            arr1.push(request.files.profileOne[i].filename);
        }
        for(let i=0;i<request.files.profileTwo.length;i++){
            arr2.push(request.files.profileTwo[i].filename);
        }

        request.body.profileOne = arr1;
        request.body.profileTwo = arr2;

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