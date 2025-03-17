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

export default adminRouter;