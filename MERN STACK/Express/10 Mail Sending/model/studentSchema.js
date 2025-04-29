import mongoose from 'mongoose';
const studentSchema = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    emailVerify:{
        type:String,
        default:'Not Verified'
    }
});

export default mongoose.model('studentSchema',studentSchema,'student');