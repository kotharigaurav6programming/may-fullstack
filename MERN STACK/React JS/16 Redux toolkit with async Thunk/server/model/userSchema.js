import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    userId : {
        type: String,
        required:true
    },
    username : {
        type : String,
        required:true
    },
    email : {
        type : String,
        required:true,
        unique:true
    },
    password : {
        type : String,
        required:true
    },
    address : {
        type : String,
        required:true
    }
});

export default mongoose.model('userSchema',userSchema,'user');