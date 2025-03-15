import express from 'express';
var adminRouter = express.Router();
adminRouter.get("/",(request,response)=>{
    response.render('adminLogin.ejs');
});
export default adminRouter;