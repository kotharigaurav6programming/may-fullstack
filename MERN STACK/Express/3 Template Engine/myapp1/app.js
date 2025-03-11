import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
var app = express();

app.set("views","views");
app.set("view engine","ejs");

app.get("/",(request,response)=>{
    const studentData = [
        {
            studName : "Andrew Anderson",
            email : "andrew@gmail.com",
            password : "andrew@12345",
            address : "Indore"
        },
        {
            studName : "Mathew Math",
            email : "mathew@gmail.com",
            password : "mathew@12345",
            address : "Indore"
        },
        {
            studName : "Jackson Jack",
            email : "jackson@gmail.com",
            password : "jackson@12345",
            address : "Indore"
        }
    ];
    response.render("index2.ejs",{studentData});
});
app.listen(process.env.PORT,(request,response)=>{
    console.log(`Click to Access http://localhost:${process.env.PORT}`);
    console.log("Server connection successfull");
});