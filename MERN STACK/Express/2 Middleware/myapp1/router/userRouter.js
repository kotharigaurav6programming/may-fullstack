import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
var userRouter = express.Router();

var __filename = fileURLToPath(import.meta.url);
var __dirname = path.dirname(__filename).replace('\\router','');

//userRouter.use(express.static('public'));

// router level middleware 
userRouter.use((request,response,next)=>{
    console.log("userRouter executes");
    next();    
});

userRouter.get('/',(request,response)=>{
    response.sendFile(__dirname+'/userHome.html');
});
userRouter.get('/profile',(request,response)=>{
    response.sendFile(__dirname+'/userProfile.html');
});

export default userRouter;