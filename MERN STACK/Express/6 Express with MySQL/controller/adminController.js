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
        response.render("adminHome.ejs",{email:request.session.email,message:"",status:""}); 
    }
}
export const adminVerifyUserController = async(request,response)=>{
    try{
        const email = request.query.email;
        const updateQuery = 'update user set adminverify=? where email=?';
        const value = [1,email];
        con.query(updateQuery,value,(error)=>{
            if(error)
                console.log("Error while admin verify user : ",error);
            else{
                console.log("User verified successfully");
                const selectQuery = 'select * from user';
                con.query(selectQuery,(error,result)=>{
                    if(error)
                        console.log("Error while fetching user list : ",error);
                    else{
                        response.render("adminUserList.ejs",{userList:result,email:request.session.email,message:"User Verified Successfully",status:""});
                    }
                });
            }
        });

    }catch(error){
        console.log("Error while admin verify user : ",error);
        const selectQuery = 'select * from user';
        con.query(selectQuery,(error,result)=>{
            if(error)
                console.log("Error while fetching user list");
            else{
                response.render("adminUserList.ejs",{userList:result,email:request.session.email,message:"",status:""});
            }
        });
    }
}

export const adminBlockUserController = async(request,response)=>{
    try{
        const email = request.query.email;
        const updateQuery = 'update user set blockstatus=? where email=?';
        const value = [1,email];
        con.query(updateQuery,value,(error)=>{
            if(error)
                console.log("Error while admin block user : ",error);
            else{
                console.log("User blocked successfully");
                const selectQuery = 'select * from user';
                con.query(selectQuery,(error,result)=>{
                    if(error)
                        console.log("Error while fetching user list : ",error);
                    else{
                        response.render("adminUserList.ejs",{userList:result,email:request.session.email,message:"User Blocked Successfully",status:""});
                    }
                });
            }
        });

    }catch(error){
        console.log("Error while admin block user : ",error);
        const selectQuery = 'select * from user';
        con.query(selectQuery,(error,result)=>{
            if(error)
                console.log("Error while fetching user list");
            else{
                response.render("adminUserList.ejs",{userList:result,email:request.session.email,message:"",status:""});
            }
        });
    }
}