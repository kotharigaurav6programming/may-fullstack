import express from 'express';
import { registerController,userLoginController,addToDoController,userViewToDoController } from '../controller/userController.js';
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
userRouter.get('/userAddToDo',(request,response)=>{
    response.render("userAddToDoForm.ejs",{email:request.session.email,message:"",status:""});
});
userRouter.post('/addToDo',addToDoController);
userRouter.get('/userViewToDo',userViewToDoController);
userRouter.get('/logout',(request,response)=>{
    request.session.email='';
    request.session.destroy((error)=>{
        if(error)
            console.log("Error while logout");
        else{
            response.render("userLogin.ejs",{message :"",status:""});
        }
    });
});
export default userRouter;