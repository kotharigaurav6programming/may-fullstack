import express from 'express';
import { registerController,userLoginController } from '../controller/userController.js';
var userRouter = express.Router();
userRouter.get("/",(request,response)=>{
    response.render('userLogin.ejs',{message:"",status:""});
});
userRouter.get("/register",(request,response)=>{
    response.render('userRegistration.ejs');
});
userRouter.post('/register',registerController);
userRouter.post("/userLogin",userLoginController);
userRouter.get('/userHome',(request,response)=>{
    response.render("userHome.ejs",{email:request.session.email,message:"",status:""});
});

export default userRouter;