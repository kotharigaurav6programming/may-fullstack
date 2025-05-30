import mongoose from 'mongoose';
const studentSchema = mongoose.Schema({
    studentId : {
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
    gender:{
        type:String,
        required : true
    },
    date:{
        type:String,
        required:true
    },
    guardianName:{
        type:String,
        required : true
    },
    guardianAddress : {
        type:String,
        required : true
    },
    guardianContact : {
        type:String,
        required : true
    },
    admissionYear:{
        type:Number,
        required:true
    },
    profile:{
        type:String,
        required:true
    },
    adminVerify:{
        type:String,
        default:'Not Verified'
    },
    status:{
        type:Boolean,
        default:true
    }
});

export default mongoose.model('studentSchema',studentSchema,'student');