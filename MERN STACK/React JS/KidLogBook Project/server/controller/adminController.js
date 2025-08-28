import adminSchema from "../model/adminSchema.js";
import { message, status } from '../utils/statusMessage.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import mailer from "./mailer.js";
import teacherSchema from "../model/teacherSchema.js";
import studentSchema from "../model/studentSchema.js";
import classSchema from "../model/classSchema.js";
import uuid4 from "uuid4";
import classAssignedToStudentSchema from "../model/classAssignedToStudentSchema.js";
import sessionSchema from "../model/sessionSchema.js";
dotenv.config();
const ADMIN_SECRET_KEY = process.env.ADMIN_SECRET_KEY;

export const adminLoginController = async (request, response) => {
    try {
        const { email, password } = request.body;
        const adminObj = await adminSchema.findOne({ email: email });
        if (adminObj) {
            const existingPassword = adminObj.password;
            const status = await bcrypt.compare(password, existingPassword);
            if (status) {
                const adminPayload = {
                    email: email,
                    role: "admin"
                }
                const expiryTime = {
                    expiresIn: "365d"
                }
                const token = jwt.sign(adminPayload, ADMIN_SECRET_KEY, expiryTime);
                //response.cookie('admin_jwt', token, { httpOnly: true, maxAge: 720000 * 60 * 60 });
                //response.redirect('/admin/adminHome');
               // response.render("adminHome.ejs",{email:email,message:"",status:""});
                response.status(200).send({email:email,adminToken:token});
            } else {
                //response.render("adminLogin.ejs", { message: message.INCORRECT_PASSWORD, status: status.ERROR });
                response.status(401).send();
            }
        } else {
            //response.render("adminLogin.ejs", { message: message.INCORRECT_EMAIL, status: status.ERROR });
            response.status(401).send();
        }
    } catch (error) {
        console.log("Error in adminLoginController : ", error);
        //response.render("adminLogin.ejs",{message:message.SOMETHING_WENT_WRONG, status:status.ERROR});
        response.status(500).send();
    }
}

export const adminHomeController = async (request,response)=>{
    try{
        response.render("adminHome.ejs",{email:request.adminPayload.email,message:"", status:""});
    }catch(error){
        console.log("Error in adminHomeController : ",error);
        response.render("adminLogin.ejs",{message:message.SOMETHING_WENT_WRONG, status:status.ERROR});          
    }
}

export const adminLogoutController = async (request,response)=>{
    try{
        response.clearCookie('admin_jwt');
        console.log("Logout Successfully");
        response.render("adminLogin.ejs",{message:message.LOGOUT_SUCCESSFULLY, status:status.SUCCESS});
    }catch(error){
        console.log("Error in adminLogoutController : "+error);
        response.render("adminLogin.ejs",{message:message.SOMETHING_WENT_WRONG, status:status.ERROR});
    }
}

export const teacherRegistrationLinkController = async (request,response)=>{
    try{
        const teacherEmail = request.body.email;
        console.log("Teacher Email : ",teacherEmail);
        mailer.mailer(teacherEmail,false,(value)=>{
            if(value){
                console.log("Mail Sent Successfully");
                //response.render("adminHome.ejs",{email:request.adminPayload.email,message:message.MAIL_SENT, status:status.SUCCESS});
                response.status(200).send({email:request.adminPayload.email});
            }else{
                console.log("Error in teacherRegistrationLinkController");
                //response.render("adminHome.ejs",{email:request.adminPayload.email,message:message.MAIL_NOT_SENT, status:status.ERROR});      
                response.status(502).send({email:request.adminPayload.email});
            }
        });

    }catch(error){
        console.log("Error in teacherRegistrationLinkController : ",error);
        //response.render("adminLogin.ejs",{message:message.SOMETHING_WENT_WRONG, status:status.ERROR});
        response.status(500).send();        
    }
}

export const adminViewTeacherListController = async (request,response)=>{
    try{
        const teacherData = await teacherSchema.find();
        response.render("adminViewTeacherList.ejs",{email:request.adminPayload.email,teacherData:teacherData.reverse(),message:"",status:status.SUCCESS});
    }catch(error){
       console.log("Error in adminViewTeacherListController : ",error);
        response.render("adminLogin.ejs",{message:message.SOMETHING_WENT_WRONG, status:status.ERROR});    
    }
}

export const adminVerifyTeacherController = async(request,response)=>{
    try{
        const teacherId = request.body.teacherId;
        // console.log("teacherId : ",teacherId);
        const updateStatus = {
            $set:{
                adminVerify:'Verified'
            }
        }
        const result = await teacherSchema.updateOne({teacherId:teacherId},updateStatus);
        console.log("Result : ");
        const teacherData = await teacherSchema.find();
        response.render("adminViewTeacherList.ejs",{email:request.adminPayload.email,teacherData:teacherData.reverse(),message:message.STATUS_VERIFIED,status:status.SUCCESS});
        
    }catch(error){
        console.log("Error in adminVerifyTeacherController : ",error);
        response.render("adminLogin.ejs",{message:message.SOMETHING_WENT_WRONG, status:status.ERROR});
    }
}

export const adminViewStudentListController = async (request,response)=>{
    try{
        const studentData = await studentSchema.find();
        response.render("adminViewStudentList.ejs",{email:request.adminPayload.email,studentData:studentData.reverse(),message:"",status:status.SUCCESS});
    }catch(error){
       console.log("Error in adminViewStudentListController : ",error);
        response.render("adminLogin.ejs",{message:message.SOMETHING_WENT_WRONG, status:status.ERROR});    
    }
}

export const adminVerifyStudentController = async(request,response)=>{
    try{
        const studentId = request.body.studentId;
        // console.log("studentId : ",studentId);
        const updateStatus = {
            $set:{
                adminVerify:'Verified'
            }
        }
        const result = await studentSchema.updateOne({studentId:studentId},updateStatus);
        console.log("Result : ");
        const studentData = await studentSchema.find();
        response.render("adminViewStudentList.ejs",{email:request.adminPayload.email,studentData:studentData.reverse(),message:message.STATUS_VERIFIED,status:status.SUCCESS});
        
    }catch(error){
        console.log("Error in adminVerifyStudentController : ",error);
        response.render("adminLogin.ejs",{message:message.SOMETHING_WENT_WRONG, status:status.ERROR});
    }
}

export const adminAddClassController = async (request,response)=>{
    try{
        response.render("adminAddClass.ejs",{email:request.adminPayload.email,message:"", status:""});      
    }catch(error){
        console.log("Error in adminAddClassController : ",error);
        response.render("adminHome.ejs",{email:request.adminPayload.email,message:"", status:status.ERROR});                      
    }
}

export const addClassController = async (request,response)=>{
    try{
        request.body.classId = uuid4();
        const class_name = request.body.class_name;
        const section_name = request.body.section_name;
        const checkStatus = {
            $and : [
                {class_name},
                {section_name}
            ]
        }
        const classStatus = await classSchema.find(checkStatus);
        console.log("class status : ",classStatus);
        if(classStatus.length==0){
            const result = await classSchema.create(request.body);
            console.log("Result : ",result);
            //response.render("adminAddClass.ejs",{email:request.adminPayload.email,message:message.CLASS_ADDED, status:status.SUCCESS});
            response.status(201).send({email:request.adminPayload.email});
        }else{
            //response.render("adminAddClass.ejs",{email:request.adminPayload.email,message:message.CLASS_ALREADY_EXIST, status:status.SUCCESS});
            response.status(204).send({email:request.adminPayload.email});
        }
             
    }catch(error){
        console.log("Error in addClassController : ",error);
        //response.render("adminAddClass.ejs",{email:request.adminPayload.email,message:message.SOMETHING_WENT_WRONG, status:status.ERROR});
        response.status(500).send({email:request.adminPayload.email});                      
    }
}

export const adminAssignClassController = async (request,response)=>{
    try{
        const classIdData = await classSchema.find({status:true});
        const studentIdData = await studentSchema.find({status:true});
        const teacherIdData = await teacherSchema.find({status:true});
        const sessionIdData = await sessionSchema.find({status:true});

        response.render("adminAssignClass.ejs",{classIdData,studentIdData,teacherIdData,sessionIdData,email:request.adminPayload.email,message:"", status:""});      
    }catch(error){
        console.log("Error in adminAssignClassController : ",error);
        response.render("adminHome.ejs",{email:request.adminPayload.email,message:"", status:status.ERROR});                      
    }
}

export const assignClassController = async (request,response)=>{
// needs to put constraint on the basis of classId and studentId
    try{
        const classIdData = await classSchema.find({status:true});
        const studentIdData = await studentSchema.find({status:true});
        const teacherIdData = await teacherSchema.find({status:true});
        const sessionIdData = await sessionSchema.find({status:true});

        request.body.classATStudentId = uuid4();
        console.log("received data : ",request.body);

        const studStatus = await classAssignedToStudentSchema.findOne({
            $and:[
                {classId : request.body.classId},
                {studentId : request.body.studentId}
            ]
        });
        if(studStatus){
            response.render("adminAssignClass.ejs",{classIdData,studentIdData,teacherIdData,sessionIdData,email:request.adminPayload.email,message:message.CLASS_ALREADY_ASSIGNED, status:status.SUCCESS});
        }else{
            const res = await classAssignedToStudentSchema.create(request.body);
            response.render("adminAssignClass.ejs",{classIdData,studentIdData,teacherIdData,sessionIdData,email:request.adminPayload.email,message:message.CLASS_ASSIGNED, status:status.SUCCESS});     
        }
    }catch(error){
        const classIdData = await classSchema.find({status:true});
        const studentIdData = await studentSchema.find({status:true});
        const teacherIdData = await teacherSchema.find({status:true});
        const sessionIdData = await sessionSchema.find({status:true});

        console.log("Error in assignClassController : ",error);
        response.render("adminAssignClass.ejs",{classIdData,studentIdData,teacherIdData,sessionIdData,email:request.adminPayload.email,message:message.SOMETHING_WENT_WRONG, status:status.ERROR});                      
    }
}

export const adminAddSessionController = async (request,response)=>{
    try{
        response.render("adminAddSession.ejs",{email:request.adminPayload.email,message:"", status:""});      
    }catch(error){
        console.log("Error in adminAddSessionController : ",error);
        response.render("adminHome.ejs",{email:request.adminPayload.email,message:"", status:status.ERROR});                      
    }
}

export const addSessionController = async (request,response)=>{
    try{
        request.body.sessionId = uuid4();
        const result = await sessionSchema.create(request.body);
        console.log("session result : ",result);
        //response.render("adminAddSession.ejs",{email:request.adminPayload.email,message:message.SESSION_ADDED, status:status.SUCCESS});
        response.status(201).send({email:request.adminPayload.email});
    }catch(error){
        console.log("Error in addSessionController : ",error);
        //response.render("adminAddSession.ejs",{email:request.adminPayload.email,message:message.SOMETHING_WENT_WRONG, status:status.ERROR});
        response.status(500).send({email:request.adminPayload.email});
    }
}
