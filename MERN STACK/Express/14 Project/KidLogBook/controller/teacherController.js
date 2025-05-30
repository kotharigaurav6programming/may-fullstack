import teacherSchema from "../model/teacherSchema.js";
import uuid4 from 'uuid4';
import { message, status } from "../utils/statusMessage.js";
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import mailer from "./mailer.js";
import classAssignedToStudentSchema from "../model/classAssignedToStudentSchema.js";
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
        const teacherObj = await teacherSchema.findOne({email:request.teacherPayload.email});
        const teacherId = teacherObj.teacherId;
        // console.log("Teacher Id : "+teacherId);
        const classAssignedData = await classAssignedToStudentSchema.find({teacherId});
        // console.log(classAssignedData);
        response.render("classAssignedList.ejs",{classAssignedData:classAssignedData.reverse(),email:request.teacherPayload.email,message:"", status:""});
    }catch(error){
        console.log("Error in classAssignedController : "+error);
        response.render("teacherLogin.ejs",{message:message.SOMETHING_WENT_WRONG, status:status.ERROR});   
    }
}