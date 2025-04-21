import {MongoClient} from "mongodb";
import express from 'express';
const urlMongo = "mongodb://127.0.0.1:27017/";
var app = express();
app.set('views','views');
app.set('view engine','ejs');

app.get('/',(request,response)=>{
    response.render('index.ejs');
})
app.get('/viewInfo',async (request,response)=>{
    const username = request.query.username;
    const email = request.query.email;
    const password = request.query.password;
    const address = request.query.address;
    console.log("Username : "+username);
    console.log("Email : "+email);
    console.log("Password : "+password);
    console.log("Address : "+address);

    const dbInstance = await MongoClient.connect(urlMongo);
    const db = dbInstance.db("nodedb");
    const res = await db.collection("Employee").insertOne(request.query);
    console.log(res);
    console.log("Data Inserted successfully");
    
    response.render('index.ejs');
});
app.listen(3000,()=>{
    console.log("Server connection successfull");
});
