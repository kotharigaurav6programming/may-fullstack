import admin from "../model/admin.js";
import student from '../model/student.js';
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
            response.render("adminLogin.ejs",{message:"Email Id or Password is Wrong"});
        }  
    }catch(error){
        request.session.email='';
        request.session.destroy((error)=>{});
        response.render("adminLogin.ejs",{message:"Something went wrong"});  
    }
}

export const adminUserListController = async(request,response)=>{
    try{
        //   student.findAll().then((data)=>{
        //     console.log("data : ",data);
            
        //   }).catch((error)=>{
        //     console.log("error : ",error);
            
        //   });  
        const studentData = await student.findAll();
        var dataArray = [];
        for(let i=0;i<studentData.length;i++){
            // console.log("\ndata : ",studentData[i].dataValues);
            dataArray.push(studentData[i].dataValues);
        }
        console.log(dataArray);
                
        response.render("adminUserList.ejs",{email:request.session.email,message:"",dataArray});
    }catch(error){
        request.session.email='';
        request.session.destroy((error)=>{});
        response.render("adminLogin.ejs",{message : "Something Went Wrong"});
    }
}

export const adminVerifyController = async(request,response)=>{
    try{
        const email = request.body.email;
        const result = await student.update({
           adminVerify : "Verified" 
        },{
            where : {
                email : email
            }
        });
        console.log("update Result : ",result);
        
        const studentData = await student.findAll();
        var dataArray = [];
        for(let i=0;i<studentData.length;i++){
            // console.log("\ndata : ",studentData[i].dataValues);
            dataArray.push(studentData[i].dataValues);
        }
        console.log(dataArray);
                
        response.render("adminUserList.ejs",{email:request.session.email,message:"Student Verified Successfully",dataArray}); 
    }catch(error){

    }
}