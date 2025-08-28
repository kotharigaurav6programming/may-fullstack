import mongoose from "mongoose";
const mealSchema = mongoose.Schema({
    mealId : {
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
    menuDoc:{
        type:String,
        required:true
    },
    status:{
        type:Boolean,
        default:true
    }
});

export default mongoose.model('mealSchema',mealSchema,'meal');