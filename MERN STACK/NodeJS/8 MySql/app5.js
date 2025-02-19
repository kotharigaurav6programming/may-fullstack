var mysql = require('mysql2');
const con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"mydb"
});
con.connect((error)=>{
    if(error)
        console.log("Error occured");
    else{
        console.log("Connection established successfully");
        const query = "insert into student(name,email) values(?,?)";
        const value = ['Peter Parker','peter@gmail.com'];
        con.query(query,value,(error,result)=>{
            if(error)
                console.log("Error occured : ",error);
            else{
                console.log("Data inserted successfully : ",result);   
            }
        });
    }
});