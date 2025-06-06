import adminSchema from "../model/adminSchema.js";
import bcrypt from 'bcrypt';
export const adminCheckCredentials = async ()=>{
    try{ 
        const res = await adminSchema.find();
        if(res.length==0){
            var obj = {
                email : 'admin@gmail.com',
                password : await bcrypt.hash('12345678',10)
            }
            const result = await adminSchema.create(obj);
            console.log("admin data insertion : ",result);
            console.log("Admin Data is setted in the collection for the first time");
        }else{
            console.log("Admin Credentials already available");
        }
        return true;
    }catch(error){
        console.log("Error in adminCheckCredentials : ",error);
        return false;    
    }
}