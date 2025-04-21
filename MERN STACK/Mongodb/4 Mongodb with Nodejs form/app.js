import {MongoClient} from "mongodb";
import http from 'http';
import url from 'url';
import fs from 'fs';
const urlMongo = "mongodb://127.0.0.1:27017/";
const instance = http.createServer(async (request,response)=>{
    try{
        const requestedURL = url.parse(request.url,true);
        if(requestedURL.pathname=='/'){
            const data = fs.readFileSync('index.html');
            response.write(data);
            response.end();
        }
        else if(requestedURL.pathname=='/viewInfo'){
            const username = requestedURL.query.username;
            const email = requestedURL.query.email;
            const password = requestedURL.query.password;
            const address = requestedURL.query.address;
            console.log("Username : "+username);
            console.log("Email : "+email);
            console.log("Password : "+password);
            console.log("Address : "+address);

            const dbInstance = await MongoClient.connect(urlMongo);
            const db = dbInstance.db("nodedb");
            const res = await db.collection("Employee").insertOne(requestedURL.query);
            console.log(res);
            console.log("Data Inserted successfully");
            
            const data = fs.readFileSync('index.html');
            response.write(data);
            response.end();
        }
    }catch(error){
        console.log("Error : ",error);
    }
});

instance.listen(3000,()=>{
    console.log("Server connection successfull");
});
