import con from '../connection/dbConfig.js';
export const registerController = async (request,response)=>{
    try{
        // console.log(request.body);
        const insertQuery = 'insert into user(username,email,password,address) values(?,?,?,?)';
        const values = [request.body.username,request.body.email,request.body.password,request.body.address];
        con.query(insertQuery,values,(error,result)=>{
            if(error)
                console.log("Error while inserting data : ",error);
            else{
                console.log("Result : ",result);
                response.render("userLogin.ejs");                
            }
        });
    }catch(error){
        console.log("Error while registering user : ",error);
        
    }
}
export const userLoginController = async (request,response)=>{
    const {email,password} = request.body;
    const query = 'select * from user where email=? and password=? and blockstatus=? and adminverify=?';
    const values = [email,password,0,1];
    con.query(query,values,(error,result)=>{
        if(error)
            console.log("Error while user login : ",error);
        else{
            console.log("-->",result);
           if(result.length>0){
            request.session.email = email;
           response.render("userHome.ejs",{email,message:"",status:""});
           } else{
           response.render("userLogin.ejs",{message:"Email Id or Password is wrong | or Blocked by admin",status:""});
           }
        }    
    });
}
