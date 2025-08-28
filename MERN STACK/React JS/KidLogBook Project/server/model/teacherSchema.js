import mongoose from 'mongoose';
const teacherSchema = mongoose.Schema({
    teacherId : {
        type:String,
        required : true
    },
    name:{
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
    contact:{
        type:String,
        required : true
    },
    address:{
        type:String,
        required : true
    },
    qualification:{
        type:String,
        required : true
    },
    experience : {
        type:String,
        required : true
    },
    date:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required : true
    },
    adminVerify:{
        type:"String",
        default:"Not Verified"
    },
    status:{
        type:Boolean,
        default:true
    }
});

export default mongoose.model('teacherSchema',teacherSchema,'teacher');