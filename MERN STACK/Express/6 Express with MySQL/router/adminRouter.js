import express from 'express';
import { adminLoginController,userListController,adminVerifyUserController,adminBlockUserController } from '../controller/adminController.js';
var adminRouter = express.Router();
adminRouter.get("/",(request,response)=>{
    response.render('adminLogin.ejs');
});
adminRouter.post("/adminLogin",adminLoginController);
adminRouter.get('/adminHome',(request,response)=>{
    response.render("adminHome.ejs",{email:request.session.email,message:"",status:""});
});
adminRouter.get('/userList',userListController);
adminRouter.get('/adminVerifyUser',adminVerifyUserController);
adminRouter.get('/adminBlockUser',adminBlockUserController);
adminRouter.get('/logout',(request,response)=>{
    request.session.email='';
    request.session.destroy((error)=>{
        if(error)
            console.log("Error while logout");
        else{
            response.render("adminLogin.ejs");
        }
    });
});

export default adminRouter;