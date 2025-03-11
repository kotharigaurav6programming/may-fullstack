import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
var app = express();
app.set("views","views");
app.set("view engine",'ejs');
app.use(express.static('public'));
app.get('/',(request,response)=>{
    response.render('index.ejs');
});

app.listen(process.env.PORT,()=>{
    console.log("Server connection successfull");
});