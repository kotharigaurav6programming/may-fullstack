import express from 'express';
import { addUserController,viewUserController } from '../controller/userController.js';
var userRouter = express.Router();

userRouter.post('/addUser',addUserController);
userRouter.get('/viewUser',viewUserController);


export default userRouter;