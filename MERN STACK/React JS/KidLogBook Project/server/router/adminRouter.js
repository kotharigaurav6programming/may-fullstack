import express from 'express';
import { adminLoginController,adminHomeController,adminLogoutController,teacherRegistrationLinkController,adminViewTeacherListController,adminVerifyTeacherController,adminViewStudentListController,adminVerifyStudentController,adminAddClassController,addClassController,adminAssignClassController,assignClassController,adminAddSessionController,addSessionController } from '../controller/adminController.js';
import { message, status } from '../utils/statusMessage.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
var adminRouter = express.Router();
const ADMIN_SECRET_KEY = process.env.ADMIN_SECRET_KEY;
const authenticateJWT = (request,response,next)=>{
    try{
        //const token = request.cookies.admin_jwt;
        const token = request.query.adminToken;
        console.log("Token : ",token);
        
        if(!token){
            console.log("Token Not Found"); 
            //response.render("adminLogin.ejs",{message:message.AUTHENTICATE_ERROR,status:status.ERROR});
            response.status(404).send();
        }else{
            jwt.verify(token,ADMIN_SECRET_KEY,(error,payload)=>{
                if(error){
                    console.log("Error while verifying token : ",error); 
                    //response.render("adminLogin.ejs",{message:message.JWT_VERIFYING_ERROR,status:status.ERROR});
                    response.status(403).send();
                }else{
                    request.adminPayload = payload;
                    next();
                }
            });
        }
    }catch(error){
        console.log("Error inside authenticateJWT : ",error);
        //response.render("adminLogin.ejs",{message:message.SOMETHING_WENT_WRONG,status:status.ERROR});
        response.status(500).send();
    }
}
const authorizeJWT = (request,response,next)=>{
    try{
        if(request.adminPayload.role=="admin"){
            next();
        }else{
            console.log("Else part of authorizeJWT executes");
            response.render("adminLogin.ejs",{message:message.AUTHORIZE_ERROR,status:status.ERROR});    
        }
    }catch(error){
        console.log("Error inside authorizeJWT : ",error);
        response.render("adminLogin.ejs",{message:message.AUTHORIZE_ERROR,status:status.ERROR});
    }
}
adminRouter.post('/adminLogin',adminLoginController);
adminRouter.get('/adminHome',authenticateJWT,authorizeJWT,adminHomeController);
adminRouter.get('/adminLogout',authenticateJWT,adminLogoutController);
adminRouter.post('/teacherRegistrationLink',authenticateJWT,teacherRegistrationLinkController);
adminRouter.get('/adminViewTeacherList',authenticateJWT,adminViewTeacherListController);
adminRouter.post("/adminVerifyTeacher",authenticateJWT,adminVerifyTeacherController);
adminRouter.get('/adminViewStudentList',authenticateJWT,adminViewStudentListController);
adminRouter.post("/adminVerifyStudent",authenticateJWT,adminVerifyStudentController);
adminRouter.get("/adminAddClass",authenticateJWT,adminAddClassController);
adminRouter.post("/addClass",authenticateJWT,addClassController);
adminRouter.get("/adminAssignClass",authenticateJWT,adminAssignClassController);
adminRouter.post("/assignClass",authenticateJWT,assignClassController);
adminRouter.get("/adminAddSession",authenticateJWT,adminAddSessionController);
adminRouter.post("/addSession",authenticateJWT,addSessionController);

export default adminRouter;