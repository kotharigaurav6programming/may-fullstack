import admin from "../model/admin.js";
export const adminLoginController = async(request,response)=>{
    try{
        const {email,password} = request.body;
        const res = await admin.findOne({
            where : {
                email: email,
                password : password
            }
        });
        // console.log(res);
        if(res){
            request.session.email = email;
            request.session.save();
            response.render("adminHome.ejs",{email:request.session.email});
        }else{
            // email id or password is wrong
        }  
    }catch(error){

    }
}