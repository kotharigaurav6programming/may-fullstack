import mongoose from "mongoose";
const classSchema = mongoose.Schema({
    classId : {
        type : String,
        required:true
    },
    class_name : {
        type:String,
        required : true
    },
    section_name:{
        type:String,
        required : true
    },
    status : {
        type:Boolean,
        default:true
    }
});

export default mongoose.model('classSchema',classSchema,'classCollection');