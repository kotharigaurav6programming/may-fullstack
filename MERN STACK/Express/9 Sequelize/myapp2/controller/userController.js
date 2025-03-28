import student from "../model/student.js";
import { message, status } from "../utils/statusMessage.js";
export const userRegisterController = async(request,response)=>{
    // console.log(request.body);
    const res = await student.create(request.body);
    // console.log(res);  
    if(res){
        response.render("userLogin.ejs",{message:message.REGISTRATION_SUCCESSFULL,status:status.SUCCESS});
    } else{
        response.render("userRegister.ejs",{message:message.REGISTRATION_ERROR,status:status.SERVER_ERROR});
    }
}