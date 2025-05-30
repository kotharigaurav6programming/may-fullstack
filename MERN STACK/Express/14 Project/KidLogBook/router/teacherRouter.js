import express from 'express';
import { teacherRegistrationDataController,teacherLoginController,loginTeacherController,teacherHomeController,studentRegistrationLinkController,classAssignedController } from '../controller/teacherController.js';
import { message, status } from '../utils/statusMessage.js';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
dotenv.config();
const TEACHER_SECRET_KEY = process.env.TEACHER_SECRET_KEY;
var teacherRouter = express.Router();

const authenticateJWT = (request,response,next)=>{
    try{
        const token = request.cookies.teacher_jwt;
        if(!token){
            console.log("Token Not Found"); 
            response.render("teacherLogin.ejs",{message:message.AUTHENTICATE_ERROR,status:status.ERROR});
        }else{
            jwt.verify(token,TEACHER_SECRET_KEY,(error,payload)=>{
                if(error){
                    console.log("Error while verifying token : ",error); 
                    response.render("teacherLogin.ejs",{message:message.JWT_VERIFYING_ERROR,status:status.ERROR});
                }else{
                    request.teacherPayload = payload;
                    next();
                }
            });
        }
    }catch(error){
        console.log("Error inside authenticateJWT : ",error);
        response.render("teacherLogin.ejs",{message:message.SOMETHING_WENT_WRONG,status:status.ERROR});
    }
}
const authorizeJWT = (request,response,next)=>{
    try{
        if(request.teacherPayload.role=="teacher"){
            next();
        }else{
            console.log("Else part of authorizeJWT executes");
            response.render("teacherLogin.ejs",{message:message.AUTHORIZE_ERROR,status:status.ERROR});    
        }
    }catch(error){
        console.log("Error inside authorizeJWT : ",error);
        response.render("teacherLogin.ejs",{message:message.AUTHORIZE_ERROR,status:status.ERROR});
    }
}


teacherRouter.post('/teacherRegistration',(request,response)=>{
    const email = request.body.email;
    response.render("teacherRegistration.ejs",{email:email});
});
teacherRouter.post('/teacherRegistrationData',teacherRegistrationDataController);
teacherRouter.get('/teacherLogin',teacherLoginController);
teacherRouter.post('/teacherLogin',loginTeacherController);
teacherRouter.get('/teacherHome',authenticateJWT,authorizeJWT,teacherHomeController);
teacherRouter.post('/studentRegistrationLink',authenticateJWT,studentRegistrationLinkController);
teacherRouter.get('/classAssigned',authenticateJWT,classAssignedController);
export default teacherRouter;