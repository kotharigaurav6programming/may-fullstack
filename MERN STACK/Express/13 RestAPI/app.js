import express from 'express';
import mongoose from 'mongoose';
import userSchema from './model/userSchema.js';
const url = 'mongodb://127.0.0.1:27017/mongoosenewdb';
mongoose.connect(url);
var app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.post('/register',async (request,response)=>{
    console.log(request.body);
    try{
        await userSchema.create(request.body);
        response.json({message:"Data inserted successfully"});
    }catch(error){
        console.log("Error while registering : ",error);
    }
});
app.get('/showData',async (request,response)=>{
    try{
        const result = await userSchema.find();
        response.json({data : result});
    }catch(error){
        console.log("Error while retrieving data : ",error);
    }
});
app.get('/showDataById',async (request,response)=>{
    try{
        const _id = request.body._id;
        const result = await userSchema.findById({_id:_id});
        response.json({data : result});
    }catch(error){
        console.log("Error while retrieving data : ",error);
    }
});
app.put('/updateDataById/:id',async (request,response)=>{
    try{
        const _id = request.params.id;
        const result = await userSchema.findByIdAndUpdate({_id},{$set:{username:request.body.name}});
        response.json({data : result});
    }catch(error){
        console.log("Error while retrieving data : ",error);
    }
});


app.listen(3000,()=>{
    console.log("Server connection successfull");
});