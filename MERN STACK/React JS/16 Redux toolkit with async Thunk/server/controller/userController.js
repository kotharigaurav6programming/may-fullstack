import uuid4 from 'uuid4';
import uuid from 'uuid4';
import userSchema from '../model/userSchema.js';

export const addUserController = async (request,response)=>{
    try{
        console.log("check : ",request.body);
        
        request.body.userId = uuid();
        const result = await userSchema.create(request.body);
        console.log("result : "+result);
        response.send({status:true});        
    }catch(error){
        console.log("Error in addUserController : "+error);
        response.send({status:false}); 
    }
}
export const viewUserController = async (request,response)=>{
    try{
        const result = await userSchema.find();
        console.log("result : "+result);
        response.send({status:true,result});        
    }catch(error){
        console.log("Error in viewUserController : "+error);
        response.send({status:false}); 
    }
}