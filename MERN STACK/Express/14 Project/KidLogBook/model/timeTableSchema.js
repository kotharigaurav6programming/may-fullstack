import mongoose from "mongoose";
const timeTableSchema = mongoose.Schema({
    timeTableId : {
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
    mode:{
        type:String,
        required: true
    },
    timeTableDoc:{
        type:String,
        required:true
    },
    status:{
        type:Boolean,
        default:true
    }
});

export default mongoose.model('timeTableSchema',timeTableSchema,'timeTable');