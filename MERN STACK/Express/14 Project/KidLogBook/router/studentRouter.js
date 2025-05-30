import express from 'express';
import { addStudentController,studentLoginController,loginStudentController,studentHomeController } from '../controller/studentController.js';
import { message, status } from '../utils/statusMessage.js';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
dotenv.config();
const STUDENT_SECRET_KEY = process.env.STUDENT_SECRET_KEY;
var studentRouter = express.Router();

const authenticateJWT = (request,response,next)=>{
    try{
        const token = request.cookies.student_jwt;
        if(!token){
            console.log("Token Not Found"); 
            response.render("studentLogin.ejs",{message:message.AUTHENTICATE_ERROR,status:status.ERROR});
        }else{
            jwt.verify(token,STUDENT_SECRET_KEY,(error,payload)=>{
                if(error){
                    console.log("Error while verifying token : ",error); 
                    response.render("studentLogin.ejs",{message:message.JWT_VERIFYING_ERROR,status:status.ERROR});
                }else{
                    request.studentPayload = payload;
                    next();
                }
            });
        }
    }catch(error){
        console.log("Error inside authenticateJWT : ",error);
        response.render("studentLogin.ejs",{message:message.SOMETHING_WENT_WRONG,status:status.ERROR});
    }
}
const authorizeJWT = (request,response,next)=>{
    try{
        if(request.studentPayload.role=="student"){
            next();
        }else{
            console.log("Else part of authorizeJWT executes");
            response.render("studentLogin.ejs",{message:message.AUTHORIZE_ERROR,status:status.ERROR});    
        }
    }catch(error){
        console.log("Error inside authorizeJWT : ",error);
        response.render("studentLogin.ejs",{message:message.AUTHORIZE_ERROR,status:status.ERROR});
    }
}


studentRouter.post('/studentRegistration',(request,response)=>{
    const email = request.body.email;
    response.render("studentRegistration.ejs",{email:email});
});

studentRouter.post('/addStudent',addStudentController);
studentRouter.get('/studentLogin',studentLoginController);
studentRouter.post('/studentLogin',loginStudentController);
studentRouter.get('/studentHome',authenticateJWT,authorizeJWT,studentHomeController);
export default studentRouter;