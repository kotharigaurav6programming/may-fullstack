import path from 'path';
import { fileURLToPath } from 'url';
import uuid4 from 'uuid4';
import studentSchema from '../model/studentSchema.js';
import { message, status } from '../utils/statusMessage.js';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
dotenv.config();
const STUDENT_SECRET_KEY = process.env.STUDENT_SECRET_KEY; 

export const addStudentController = async (request,response)=>{
    try{
        const filename = request.files.profile;
        request.body.password = await bcrypt.hash(request.body.password,10);
        // console.log("filename : ",filename);
        // const studentData = request.body;   
        // console.log("studentData : ",studentData);
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);
        // console.log(__dirname);
        
        const fileName = new Date().getTime()+filename.name;
        const pathName = path.join(__dirname.replace("\\controller","")+'/public/studentProfile/'+fileName);
        filename.mv(pathName,async(error)=>{
            if(error){
                console.log("Error while dealing with a student profile pic : ",error);
                response.render("index.ejs");    
            }else{
                request.body.studentId = uuid4();
                request.body.profile = fileName;
                const result = await studentSchema.create(request.body);
                console.log("Result : ",result);
                response.render("studentLogin.ejs",{message:message.ADMIN_NOT_VERIFIED_YET,status:status.SUCCESS});
            }
        });
    }catch(error){
        console.log("Error in addStudent : ",error);    
        response.render("index.ejs",{message:"",status:""});
    }
}

export const studentLoginController = async(request,response)=>{
    try{
        response.render("studentLogin.ejs",{message:"",status:""});
    }catch(error){
        console.log("Error in studentLoginController : ",error);
        response.render("studentLogin.ejs",{message:message.SOMETHING_WENT_WRONG,status:status.ERROR});  
    }
}

export const loginStudentController = async(request,response)=>{
    try{
        const { email, password } = request.body;
        const studentObj = await studentSchema.findOne({ email: email });

        if(studentObj){
            if (studentObj.adminVerify == 'Verified') {
                const existingPassword = studentObj.password;
                const status = await bcrypt.compare(password, existingPassword);
                const studentStatus = studentObj.status;
                if (status && studentStatus) {
                    const studentPayload = {
                        email: email,
                        role: "student"
                    }
                    const expiryTime = {
                        expiresIn: "365d"
                    }
                    const token = jwt.sign(studentPayload, STUDENT_SECRET_KEY, expiryTime);
                    response.cookie('student_jwt', token, { httpOnly: true, maxAge: 720000 * 60 * 60 });
                    response.render("studentHome.ejs",{email:email,message:"",status:""});
                } else {
                    response.render("studentLogin.ejs", { message: message.INCORRECT_PASSWORD, status: status.ERROR });
                }
            } else {
            response.render("studentLogin.ejs", { message: message.ADMIN_NOT_VERIFIED_YET, status: status.ERROR }); 
            }
        }else{
                response.render("studentLogin.ejs", { message: message.INCORRECT_EMAIL, status: status.ERROR });
        }    
     }catch(error){
        console.log("Error in loginStudentController : ",error);
        response.render("studentLogin.ejs",{message:message.SOMETHING_WENT_WRONG,status:status.ERROR});    
    }
}

export const studentHomeController = async (request,response)=>{
    try{
        response.render("studentHome.ejs",{email:request.studentPayload.email,message:"", status:""});
    }catch(error){
        console.log("Error in studentHomeController : ",error);
        response.render("studentLogin.ejs",{message:message.SOMETHING_WENT_WRONG, status:status.ERROR});          
    }
}

