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