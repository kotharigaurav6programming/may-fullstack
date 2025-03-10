import express from 'express';
//import bodyParser from 'body-parser';
import {fileURLToPath} from 'url';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();

var app = express();
// app.use(bodyParser.urlencoded({extended:false}));
// app.use(bodyParser.json());

app.use(express.urlencoded({extended:true}));
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get('/',(request,response)=>{
    response.sendFile(__dirname+'/index.html');
});
app.get('/viewInfoGet',(request,response)=>{
    try{
        console.log("Username : ",request.query.username);
        console.log("Email : ",request.query.email);
        console.log("Password : ",request.query.password);
        console.log("Address : ",request.query.address);
    }catch(error){
        console.log("Error : ",error);
    }
});

app.post('/viewInfoPost',(request,response)=>{
    try{
        console.log("Username : ",request.body.username);
        console.log("Email : ",request.body.email);
        console.log("Password : ",request.body.password);
        console.log("Address : ",request.body.address);
    }catch(error){
        console.log("Error : ",error);
    }
});

app.listen(process.env.PORT,()=>{
    console.log("Server connection successfull");
});