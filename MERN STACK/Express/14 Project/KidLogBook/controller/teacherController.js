import teacherSchema from "../model/teacherSchema.js";
import uuid4 from 'uuid4';
import { message, status } from "../utils/statusMessage.js";
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import mailer from "./mailer.js";
import classAssignedToStudentSchema from "../model/classAssignedToStudentSchema.js";
import sessionSchema from "../model/sessionSchema.js";
import classSchema from "../model/classSchema.js";
import studentSchema from "../model/studentSchema.js";
import { response } from "express";
import {fileURLToPath} from 'url';
import path from 'path';
import announcementSchema from "../model/announcementSchema.js";
import mealSchema from "../model/mealSchema.js";
import timeTableSchema from "../model/timeTableSchema.js";
import assignmentSchema from "../model/assignmentSchema.js";

dotenv.config();
const TEACHER_SECRET_KEY = process.env.TEACHER_SECRET_KEY;

export const teacherRegistrationDataController = async(request,response)=>{
    try{
        request.body.teacherId = uuid4();
        request.body.password = await bcrypt.hash(request.body.password,10);
        const teacherData = request.body;
        // console.log("teacherData : ",teacherData);
        const result = await teacherSchema.create(teacherData);
        // console.log("Result : ",result);
        response.render("teacherLogin.ejs",{message:message.ADMIN_APPROVAL,status:status.SUCCESS}); 
    }catch(error){
        console.log("Error in teacherRegistrationDataController : ",error);
        response.render("index.ejs");        
    }
}

export const teacherLoginController = async(request,response)=>{
    try{
        response.render("teacherLogin.ejs",{message:"",status:""});
    }catch(error){
        console.log("Error in teacherLoginController : ",error);
        response.render("teacherLogin.ejs",{message:message.SOMETHING_WENT_WRONG,status:status.ERROR});  
    }
}

export const loginTeacherController = async(request,response)=>{
    try{
        const { email, password } = request.body;
        const teacherObj = await teacherSchema.findOne({ email: email });

        if(teacherObj){
            if (teacherObj.adminVerify == 'Verified') {
                const existingPassword = teacherObj.password;
                const status = await bcrypt.compare(password, existingPassword);
                const teacherStatus = teacherObj.status;
                if (status && teacherStatus) {
                    const teacherPayload = {
                        email: email,
                        role: "teacher"
                    }
                    const expiryTime = {
                        expiresIn: "365d"
                    }
                    const token = jwt.sign(teacherPayload, TEACHER_SECRET_KEY, expiryTime);
                    response.cookie('teacher_jwt', token, { httpOnly: true, maxAge: 720000 * 60 * 60 });
                    response.render("teacherHome.ejs",{email:email,message:"",status:""});
                } else {
                    response.render("teacherLogin.ejs", { message: message.INCORRECT_PASSWORD, status: status.ERROR });
                }
            } else {
            response.render("teacherLogin.ejs", { message: message.ADMIN_NOT_VERIFIED_YET, status: status.ERROR });
            }
        }else{
                response.render("teacherLogin.ejs", { message: message.INCORRECT_EMAIL, status: status.ERROR });           
        }    
     }catch(error){
        console.log("Error in loginTeacherController : ",error);
        response.render("teacherLogin.ejs",{message:message.SOMETHING_WENT_WRONG,status:status.ERROR});    
    }
}

export const teacherHomeController = async (request,response)=>{
    try{
        response.render("teacherHome.ejs",{email:request.teacherPayload.email,message:"", status:""});
    }catch(error){
        console.log("Error in teacherHomeController : ",error);
        response.render("teacherLogin.ejs",{message:message.SOMETHING_WENT_WRONG, status:status.ERROR});          
    }
}

export const studentRegistrationLinkController = async (request,response)=>{
       try{
           const studentEmail = request.body.email;
           // console.log("Student Email : ",studentEmail);
           mailer.mailer(studentEmail,true,(value)=>{
               if(value){
                   console.log("Mail Sent Successfully");
                   response.render("teacherHome.ejs",{email:request.teacherPayload.email,message:message.MAIL_SENT, status:status.SUCCESS});
               }else{
                   console.log("Error in studentRegistrationLinkController inside try : ",error);
                   response.render("teacherHome.ejs",{email:request.teacherPayload.email,message:message.MAIL_NOT_SENT, status:status.ERROR});      
               }
           });
   
       }catch(error){
           console.log("Error in studentRegistrationLinkController : ",error);
           response.render("teacherLogin.ejs",{message:message.SOMETHING_WENT_WRONG, status:status.ERROR});        
       }  
}

export const classAssignedController = async (request,response)=>{
    try{
        const sessionData = await sessionSchema.find();
        response.render("selectSession.ejs",{sessionData,email:request.teacherPayload.email,message:"", status:""});
    }catch(error){
        console.log("Error in classAssignedController : "+error);
        response.render("teacherLogin.ejs",{message:message.SOMETHING_WENT_WRONG, status:status.ERROR});   
    }
}

export const sessionStudentDataController = async(request,response)=>{
    try{
        const currentSession = request.body.currentSession;
        console.log("session : "+currentSession);
        
        const teacherObj = await teacherSchema.findOne({email:request.teacherPayload.email});
        const teacherId = teacherObj.teacherId;
        console.log("teacherId : "+teacherId);
        
        const classStudentData = await classAssignedToStudentSchema.find({
            $and:[
                {teacherId},
                {currentSession}
            ]
        }).lean();

        // console.log("Before classStudentData : ",classStudentData);
        
        for(var i=0;i<classStudentData.length;i++){
            const classObj = await classSchema.findOne({classId:classStudentData[i].classId});
            classStudentData[i].className = classObj.class_name;
            
            const teacherObj = await teacherSchema.findOne({teacherId:classStudentData[i].teacherId});
            classStudentData[i].teacherName = teacherObj.name;
            
            const studentObj = await studentSchema.findOne({studentId:classStudentData[i].studentId});
            classStudentData[i].studentName = studentObj.name;
        }
        // console.log("After classStudentData : ",classStudentData);

        response.render("teacherViewStudents.ejs",{classStudentData,email:request.teacherPayload.email,message:"",status:""});       
    }catch(error){
       console.log("Error in sessionStudentDataController : "+error);
        response.render("teacherLogin.ejs",{message:message.SOMETHING_WENT_WRONG, status:status.ERROR});  ;       
    } 
}

export const announcementController = async (request,response)=>{
    try{
        const teacherObj = await teacherSchema.findOne({email:request.teacherPayload.email});
        const teacherId = teacherObj.teacherId;
        const classStudentArray = await classAssignedToStudentSchema.find({teacherId:teacherId}).lean();
        
        for(var i=0;i<classStudentArray.length;i++){
            classStudentArray[i].teacherName = teacherObj.name;
            const classObj = await classSchema.findOne({classId : classStudentArray[i].classId});
            classStudentArray[i].className = classObj.class_name;
        }

        response.render("announcement.ejs",{classStudentArray:classStudentArray.reverse(),email:request.teacherPayload.email,message:"", status:""});

    }catch(error){
        console.log("Error in announcementController : "+error);
        response.render("teacherLogin.ejs",{message:message.SOMETHING_WENT_WRONG, status:status.ERROR});   
    }
}

export const addAnnouncementController = async (request,response)=>{
    try{
        const announcementData = JSON.parse(request.body.announcementData);
        response.render("announcementForm.ejs",{announcementData,email:request.teacherPayload.email,message:"", status:""});
    }catch(error){
        console.log("Error in addAnnouncementController : "+error);
        response.render("teacherLogin.ejs",{message:message.SOMETHING_WENT_WRONG, status:status.ERROR});
    }
}

export const addAnnouncementDataController = async (request,response)=>{
    try{    
        // console.log(request.body);
        request.body.announcementId = uuid4();
        const result = await announcementSchema.create(request.body);
        console.log("Result : "+result);

        const teacherObj = await teacherSchema.findOne({email:request.teacherPayload.email});
        const teacherId = teacherObj.teacherId;
        const classStudentArray = await classAssignedToStudentSchema.find({teacherId:teacherId}).lean();
        
        for(var i=0;i<classStudentArray.length;i++){
            classStudentArray[i].teacherName = teacherObj.name;
            const classObj = await classSchema.findOne({classId : classStudentArray[i].classId});
            classStudentArray[i].className = classObj.class_name;
        }

        response.render("announcement.ejs",{classStudentArray:classStudentArray.reverse(),email:request.teacherPayload.email,message:message.ANNOUNCEMENT_POSTED, status:status.SUCCESS});
        
    }catch(error){
        console.log("Error in addAnnouncementDataController : "+error);
        response.render("teacherLogin.ejs",{message:message.SOMETHING_WENT_WRONG, status:status.ERROR});
    }
}

export const addMealMenuController = async (request,response)=>{
    try{
            const mealData = JSON.parse(request.body.data);
            mealData.mealId = uuid4();
            // console.log(mealData);
            // console.log(request.files);
            
            const filename = request.files.menuDoc;
            const fileName = new Date().getTime()+filename.name;
            mealData.menuDoc = fileName;
            const __filename = fileURLToPath(import.meta.url);
            const __dirname = path.dirname(__filename);
            const pathName = path.join(__dirname.replace("\\controller",""),'/public/meal_menu/'+fileName);
            filename.mv(pathName,async(error)=>{
                if(error)
                    console.log("Error : ",error);
                else{
                    const result = await mealSchema.create(mealData);
                    console.log("Result : ",result);
                    response.render("teacherHome.ejs",{email:request.teacherPayload.email,message:message.MEAL_STATUS, status:status.SUCCESS}); 
                }
            });
            
    }catch(error){
       console.log("Error in addMealMenuController : "+error);
        response.render("teacherLogin.ejs",{message:message.SOMETHING_WENT_WRONG, status:status.ERROR});
    }
}

export const addTimeTableController = async (request,response)=>{
    try{
            const timeTableData = JSON.parse(request.body.data);
            timeTableData.timeTableId = uuid4();
            timeTableData.mode = request.body.mode;
            
            const filename = request.files.timeTableDoc;
            const fileName = new Date().getTime()+filename.name;
            timeTableData.timeTableDoc = fileName;
            const __filename = fileURLToPath(import.meta.url);
            const __dirname = path.dirname(__filename);
            const pathName = path.join(__dirname.replace("\\controller",""),'/public/timetable/'+fileName);
            filename.mv(pathName,async(error)=>{
                if(error)
                    console.log("Error : ",error);
                else{
                    const result = await timeTableSchema.create(timeTableData);
                    console.log("Result : ",result);
                    response.render("teacherHome.ejs",{email:request.teacherPayload.email,message:message.TIMETABLE_STATUS, status:status.SUCCESS}); 
                }
            });
            
    }catch(error){
       console.log("Error in addTimeTableController : "+error);
        response.render("teacherLogin.ejs",{message:message.SOMETHING_WENT_WRONG, status:status.ERROR});
    }
}

export const addAssignmentController = async (request,response)=>{
    try{
            const assignmentData = JSON.parse(request.body.data);
            assignmentData.assignmentId = uuid4();
            assignmentData.assignmentSubject = request.body.assignmentSubject;
            
            const filename = request.files.assignmentDoc;
            const fileName = new Date().getTime()+filename.name;
            assignmentData.assignmentDoc = fileName;
            const __filename = fileURLToPath(import.meta.url);
            const __dirname = path.dirname(__filename);
            const pathName = path.join(__dirname.replace("\\controller",""),'/public/assignment/'+fileName);
            filename.mv(pathName,async(error)=>{
                if(error)
                    console.log("Error : ",error);
                else{
                    const result = await assignmentSchema.create(assignmentData);
                    console.log("Result : ",result);
                    response.render("teacherHome.ejs",{email:request.teacherPayload.email,message:message.ASSIGNMENT_STATUS, status:status.SUCCESS}); 
                }
            });
            
    }catch(error){
       console.log("Error in addAssignmentController : "+error);
        response.render("teacherLogin.ejs",{message:message.SOMETHING_WENT_WRONG, status:status.ERROR});
    }
}