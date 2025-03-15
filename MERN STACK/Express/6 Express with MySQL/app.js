import express from 'express';
import dotenv from 'dotenv';
import createDatabase from './model/util.js';
import adminRouter from './router/adminRouter.js';
import userRouter from './router/userRouter.js';
dotenv.config();
var app = express();
app.use(createDatabase);
app.set("views","views");
app.set("view engine",'ejs');

app.get('/',(request,response)=>{
   response.render('index.ejs'); 
});

app.use('/admin',adminRouter);
app.use("/user",userRouter);

app.listen(process.env.PORT,()=>{
    console.log("Connection established successfully");
});