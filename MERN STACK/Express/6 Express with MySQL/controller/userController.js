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
                response.render("userLogin.ejs",{message:"",status:""});                
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

export const addToDoController = async(request,response)=>{
    try{
        console.log(request.body);
        const insertQuery = 'insert into todo(todotitle,startdate,enddate,status) values(?,?,?,?)';
        const values = [request.body.toDoTitle,request.body.startDate,request.body.endDate,request.body.status];
        con.query(insertQuery,values,(error,result)=>{
            if(error)
                console.log("Error occured while adding to do task");
            else{
                const todoQuery = 'select * from todo';
                con.query(todoQuery,(error,todoData)=>{
                    if(error)
                        console.log("Error while viewing todo : ",error);
                    else{
                        response.render("viewToDo.ejs",{email:request.session.email,todoData:todoData,message:"",status:""});
                    }
                })
                
            }
        });
    }catch(error){
        console.log("Error : ",error);
        response.render("userLogin.ejs",{message:"Something went wrong",status:""});
    }   
}
export const userViewToDoController = async(request,response)=>{
    try{
        const todoQuery = 'select * from todo';
        con.query(todoQuery,(error,todoData)=>{
            if(error)
                console.log("Error while viewing todo : ",error);
            else{
                response.render("viewToDo.ejs",{email:request.session.email,todoData:todoData,message:"",status:""});
                }
            })
    }catch(error){
        console.log("Error : ",error);
        response.render("userLogin.ejs",{message:"Something went wrong",status:""});
    }   
}