import express from 'express';
import { teacherRegistrationDataController,teacherLoginController,loginTeacherController,teacherHomeController,studentRegistrationLinkController,classAssignedController,sessionStudentDataController,announcementController,addAnnouncementController, addAnnouncementDataController,addMealMenuController,addTimeTableController,addAssignmentController } from '../controller/teacherController.js';
import { message, status } from '../utils/statusMessage.js';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
dotenv.config();
const TEACHER_SECRET_KEY = process.env.TEACHER_SECRET_KEY;
var teacherRouter = express.Router();

const authenticateJWT = (request,response,next)=>{
    try{
        // const token = request.cookies.teacher_jwt;
        const token = request.query.teacherToken;
        if(!token){
            console.log("Token Not Found"); 
            //response.render("teacherLogin.ejs",{message:message.AUTHENTICATE_ERROR,status:status.ERROR});
             response.status(404).send();
        }else{
            jwt.verify(token,TEACHER_SECRET_KEY,(error,payload)=>{
                if(error){
                    console.log("Error while verifying token : ",error); 
                  //  response.render("teacherLogin.ejs",{message:message.JWT_VERIFYING_ERROR,status:status.ERROR});
                   response.status(403).send();
                }else{
                    request.teacherPayload = payload;
                    next();
                }
            });
        }
    }catch(error){
        console.log("Error inside authenticateJWT : ",error);
        //response.render("teacherLogin.ejs",{message:message.SOMETHING_WENT_WRONG,status:status.ERROR});
           response.status(500).send();
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


// teacherRouter.post('/teacherRegistration',(request,response)=>{
//     const email = request.body.email;
//     //response.render("teacherRegistration.ejs",{email:email});
//     //response.status(200).send({email:email});
//     response.redirect("http://localhost:3001/teacherRegistration?email="+email);
// });

teacherRouter.post('/teacherRegistration',(request,response)=>{
    const email = request.body.email;
    //response.render("teacherRegistration.ejs",{email:email});
    //response.status(200).send({email:email});
    const emailPayload = {
        email : email
    }
    const emailToken = jwt.sign(emailPayload,TEACHER_SECRET_KEY,{expiresIn:'365d'});
    response.redirect("http://localhost:3001/teacherRegistration?emailToken="+emailToken);
});

teacherRouter.post('/teacherRegistrationData',teacherRegistrationDataController);
teacherRouter.get('/teacherLogin',teacherLoginController);
teacherRouter.post('/teacherLogin',loginTeacherController);
teacherRouter.get('/teacherHome',authenticateJWT,authorizeJWT,teacherHomeController);
teacherRouter.post('/studentRegistrationLink',authenticateJWT,studentRegistrationLinkController);
teacherRouter.get('/classAssigned',authenticateJWT,classAssignedController);
teacherRouter.post('/sessionStudentData',authenticateJWT,sessionStudentDataController);
teacherRouter.get('/announcement',authenticateJWT,announcementController);
teacherRouter.post('/addAnnouncement',authenticateJWT,addAnnouncementController);
teacherRouter.post('/addAnnouncementData',authenticateJWT,addAnnouncementDataController);
teacherRouter.post('/addMealMenu',authenticateJWT,addMealMenuController);
teacherRouter.post('/addTimeTable',authenticateJWT,addTimeTableController);
teacherRouter.post('/addAssignment',authenticateJWT,addAssignmentController);

export default teacherRouter;