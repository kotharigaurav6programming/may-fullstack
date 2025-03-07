import express from 'express';
import dotenv from 'dotenv';
import {fileURLToPath} from 'url';
import path from 'path';
import adminRouter from './router/adminRouter.js';
import userRouter from './router/userRouter.js';

dotenv.config();
var app = express();
app.use(express.static('public')); // built-in middleware 

var __filename = fileURLToPath(import.meta.url);
// console.log("filename : ",__filename);
var __dirname = path.dirname(__filename);
// console.log("dirname : ",__dirname);

app.get('/',(request,response)=>{
    response.sendFile(__dirname+'/index.html');
});
app.use('/admin',adminRouter);
app.use('/user',userRouter);

app.listen(process.env.PORT,()=>{
    console.log("Server Connection Established");
});

/*
point 1 : var express = require('express');
point 2 : type=commonjs
point 3 : global variable : __dirname
response.sendFile(__dirname+'./index.html'); 
*/ 


