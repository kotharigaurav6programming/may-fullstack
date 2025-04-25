import express from 'express';
import mongoose from 'mongoose';
var app = express();
const url = 'mongodb://127.0.0.1:27017/mongoosenewdb';
mongoose.connect(url);

const studentSchema = mongoose.Schema({
    username:{
        type:String,
        required : true
    },
    email:{
        type:String,
        required : true,
        unique:true
    },
    password:{
        type:String,
        required : true
    },
    address:{
        type:String,
        required : true
    }
});

const Student = mongoose.model('studentSchema',studentSchema,'student');
// console.log(''+Student);
// console.log(typeof Student);
var obj = {
    username : 'Andrew Anderson',
    email : 'andrew@gmail.com',
    password : 'andrew@123',
    address : 'Indore'
}
const stud = new Student(obj);
stud.save();
console.log("Student saved successfully");


app.listen(3000,()=>{
    console.log("Server connection successfull");
});