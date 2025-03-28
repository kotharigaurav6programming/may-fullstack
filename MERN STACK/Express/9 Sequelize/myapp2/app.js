import express from 'express';
import dotenv from 'dotenv';
import adminRouter from './router/adminRouter.js';
import userRouter from './router/userRouter.js';
import expressSession from 'express-session';
dotenv.config();

var app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(expressSession({secret:process.env.SECRET,resave:true,saveUninitialized:true}));
app.set("views","views");
app.set("view engine","ejs");

app.use('/admin',adminRouter);
app.use('/user',userRouter);
app.get('/',(request,response)=>{
    response.render("index.ejs");
});

app.listen(process.env.PORT,()=>{
    console.log("Connection established successfully");
});