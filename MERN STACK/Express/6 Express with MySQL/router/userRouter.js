import express from 'express';
import { registerController } from '../controller/userController.js';
var userRouter = express.Router();
userRouter.get("/",(request,response)=>{
    response.render('userLogin.ejs');
});
userRouter.get("/register",(request,response)=>{
    response.render('userRegistration.ejs');
});
userRouter.post('/register',registerController);

export default userRouter;