import mongoose from "mongoose";
const sessionSchema = mongoose.Schema({
    sessionId : {
        type: String,
        required : true
    },
    session:{
        type : String,
        required:true
    },
    status:{
        type:Boolean,
        default:true
    }
});

export default mongoose.model('sessionSchema',sessionSchema,'session');