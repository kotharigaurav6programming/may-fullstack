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
    profileOne:{
        type:String,
        required:true
    },
    profileTwo:{
        type:String,
        required:true
    }
});

export default mongoose.model('studentSchema',studentSchema,'studentAgain');