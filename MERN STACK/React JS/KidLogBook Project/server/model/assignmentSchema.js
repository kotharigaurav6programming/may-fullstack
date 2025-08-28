import mongoose from "mongoose";
import moment from 'moment';
const assignmentSchema = mongoose.Schema({
    assignmentId : {
        type:String,
        requred : true
    },
    classId:{
        type:String,
        required: true
    },
    className:{
        type:String,
        required: true
    },
    teacherId:{
        type:String,
        required: true
    },
    teacherName:{
        type:String,
        required: true
    },
    currentSession:{
        type:String,
        required: true
    },
    assignmentSubject:{
        type:String,
        required: true
    },
    assignmentDoc:{
        type:String,
        required:true
    },
    assignmentUploadDate:{
        type:String,
        default: ()=> moment().format("DD/MM/YYYY")
    },
    assignmentUploadTime:{
        type:String,
        default: ()=> moment().format("hh:mm:ss A")
    },
    status:{
        type:Boolean,
        default:true
    }
});

export default mongoose.model('assignmentSchema',assignmentSchema,'assignment');