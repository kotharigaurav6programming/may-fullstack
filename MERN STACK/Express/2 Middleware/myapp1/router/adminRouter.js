import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
var adminRouter = express.Router();

var __filename = fileURLToPath(import.meta.url);
var __dirname = path.dirname(__filename).replace('\\router','');

// router level middleware 
adminRouter.use((request,response,next)=>{
    console.log("adminRouter executes");
    next();    
});

adminRouter.get('/',(request,response)=>{
    response.sendFile(__dirname+'/adminHome.html');
});
adminRouter.get('/profile',(request,response)=>{
    response.sendFile(__dirname+'/adminProfile.html');
});

export default adminRouter;