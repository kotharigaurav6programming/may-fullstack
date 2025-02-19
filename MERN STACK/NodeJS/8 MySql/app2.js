var mysql = require('mysql2');
const con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
});
con.connect((error)=>{
    if(error)
        console.log("Error occured");
    else{
        console.log("Connection established successfully");
        const query = "create database mydb";
        con.query(query,(error,result)=>{
            if(error)
                console.log("Error occured : ",error);
            else{
                console.log("Database created successfully : ",result);   
            }
        });
    }
});