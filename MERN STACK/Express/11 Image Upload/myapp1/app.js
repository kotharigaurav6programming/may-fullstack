import express from 'express';
import mongoose from 'mongoose';
import studentSchema from './model/studentSchema.js';
import dotenv from 'dotenv';
import expressFileUpload from 'express-fileupload';
import {fileURLToPath} from 'url';
import path from 'path';
dotenv.config();
const url = process.env.URL;
mongoose.connect(url);
var app = express();

var __filename = fileURLToPath(import.meta.url);
var __dirname = path.dirname(__filename);

app.set("views","views");
app.set("view engine","ejs");
app.use(express.static('public'));
app.use(expressFileUpload());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/',(request,response)=>{
    response.render("index.ejs",{message:""});
});
app.post('/register',async (request,response)=>{
    try{
        // console.log(request.files);
        // console.log(request.body);
        const filename = request.files.profile;
        const fileName = new Date().getTime()+filename.name;
        const pathName = path.join(__dirname+'/public/images/'+fileName);
        filename.mv(pathName,async (error)=>{
            if(error)
                console.log("Error while uploading image");
            else{
                request.body.profile = fileName;
                const res = await studentSchema.create(request.body);
                console.log("Result : ",res);
                console.log("File Uploaded successfully");
                const galleryData = await studentSchema.find();
                response.render("profile.ejs",{galleryData:galleryData});
            }    
        });
    }catch(error){
        console.log("Error while registering student : ",error);
        response.render("index.ejs",{message:""});
    }
});

app.listen(process.env.PORT,()=>{
    console.log("Server connection successfull");
});