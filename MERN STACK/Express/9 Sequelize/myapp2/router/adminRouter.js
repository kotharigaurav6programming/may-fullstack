import express from 'express';
import { adminLoginController } from '../controller/adminController.js';
var adminRouter = express.Router();

adminRouter.get("/",(request,response)=>{
    response.render("adminLogin.ejs");
});
adminRouter.post("/adminLogin",adminLoginController);

export default adminRouter;