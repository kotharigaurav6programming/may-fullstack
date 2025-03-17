import con from "../connection/dbConfig.js";
export const adminLoginController = async (request,response)=>{
    const {email,password} = request.body;
    const query = 'select * from admin where email=? and password=?';
    const values = [email,password];
    con.query(query,values,(error,result)=>{
        if(error)
            console.log("Error while admin login : ",error);
        else{
            console.log("-->",result);
           request.session.email = email;
           response.render("adminHome.ejs",{email,message:"",status:""}); 
        }    
    });
}

export const userListController = async (request,response)=>{
    try{
        const selectQuery = 'select * from user';
        con.query(selectQuery,(error,result)=>{
            if(error)
                console.log("Error while fetching user list");
            else{
                response.render("adminUserList.ejs",{userList:result,email:request.session.email,message:"",status:""});
            }
        });
    }catch(error){

    }
}