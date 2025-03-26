import student from "../model/student.js";
export const userRegisterController = async(request,response)=>{
    // console.log(request.body);
    const res = await student.create(request.body);
    console.log(res);
    
}