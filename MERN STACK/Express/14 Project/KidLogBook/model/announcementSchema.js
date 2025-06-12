import moment from "moment";
import mongoose from "mongoose";
const announcementSchema = mongoose.Schema({
    announcementId : {
        type: String,
        required : true
    },
    classId : {
        type:String,
        required : true
    },
    className : {
        type: String,
        required : true
    },
    currentSession:{
        type:String,
        required:true 
    },
    teacherId : {
        type:String,
        required:true
    },
    teacherName:{
        type:String,
        required : true
    },
    subject:{
        type:String,
        required : true
    },
    message:{
        type:String,
        required : true
    },
    time:{
        type:String,
        default: ()=> moment().format("hh:mm:ss A")  
    },
    date:{
        type: String,
        default: ()=> moment().format("DD/MM/YYYY")
    },
    status:{
        type:Boolean,
        default:true
    }
});

export default mongoose.model('announcementSchema',announcementSchema,'announcement');