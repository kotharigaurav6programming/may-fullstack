import express from 'express';
import userRouter from './router/userRouter.js';
import mongoose from 'mongoose';
import url from './dbConfig/connection.js';
import cors from 'cors';
mongoose.connect(url);
var app = express();
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/user',userRouter);

app.listen(3000,()=>{
    console.log("Connection established successfully");
});