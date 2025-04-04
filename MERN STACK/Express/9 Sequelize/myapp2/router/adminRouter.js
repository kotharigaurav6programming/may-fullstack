import express from 'express';
import { adminLoginController,adminUserListController,adminVerifyController } from '../controller/adminController.js';
var adminRouter = express.Router();

adminRouter.get("/",(request,response)=>{
    response.render("adminLogin.ejs",{message:""});
});
adminRouter.get("/adminHome",(request,response)=>{
    response.render("adminHome.ejs",{email:request.session.email});
});
adminRouter.post("/adminLogin",adminLoginController);
adminRouter.get("/userList",adminUserListController);
adminRouter.post("/verifyStudent",adminVerifyController);
export default adminRouter;