import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
var app = express();

app.set("views","views");
app.set("view engine","ejs");

app.get("/",(request,response)=>{
    // response.render("index.ejs");
    response.render("index1.ejs",{username:"Andrew Anderson"});
});
app.listen(process.env.PORT,(request,response)=>{
    console.log(`Click to Access http://localhost:${process.env.PORT}`);
    console.log("Server connection successfull");
});