import express from 'express';
var userRouter = express.Router();

userRouter.get("/",(request,response)=>{
    response.render("userLogin.ejs");
});

export default userRouter;