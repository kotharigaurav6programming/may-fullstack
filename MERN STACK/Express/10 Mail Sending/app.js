import express from 'express';
var app = express();

app.set("views","views");
app.set("view engine","ejs");

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/',(request,response)=>{
    response.render("index.ejs");
});

app.listen(3000,()=>{
    console.log("Server connection successfull");
});