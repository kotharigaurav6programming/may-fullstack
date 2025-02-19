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
        const query = "create table student(studId int auto_increment primary key,name varchar(45) not null,email varchar(45) not null, per double not null default 0.0)";
        con.query(query,(error,result)=>{
            if(error)
                console.log("Error occured : ",error);
            else{
                console.log("Table created successfully : ",result);   
            }
        });
    }
});