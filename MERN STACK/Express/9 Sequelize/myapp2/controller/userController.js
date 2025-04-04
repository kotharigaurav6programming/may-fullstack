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
export const userLoginController = async(request,response)=>{
    try{
        const {email,password} = request.body;
        const res = await student.findOne({
            where : {
                email: email,
                password : password,
                adminVerify:'Verified',
                status:1
            }
        });
        console.log(res);
        if(res){
            request.session.email = email;
            request.session.save();
            response.render("userHome.ejs",{email:request.session.email});
        }else{
            response.render("userLogin.ejs",{message:"Email Id or Password is Wrong"});
        }  
    }catch(error){
        request.session.email='';
        request.session.destroy((error)=>{});
        response.render("userLogin.ejs",{message:"Something went wrong"});  
    }
}
