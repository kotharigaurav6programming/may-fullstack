import express from 'express';
import { userRegisterController,userLoginController } from '../controller/userController.js';
var userRouter = express.Router();

userRouter.get("/",(request,response)=>{
    response.render("userLogin.ejs",{message:"",status:""});
});
userRouter.get("/register",(request,response)=>{
    response.render("userRegister.ejs",{message:"",status:""});
});
userRouter.get("/login",(request,response)=>{
    response.render("userLogin.ejs",{message:"",status:""});
});
userRouter.post("/userRegister",userRegisterController);
userRouter.post("/userLogin",userLoginController);

export default userRouter;