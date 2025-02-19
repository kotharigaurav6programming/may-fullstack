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
        const query = "insert into student(name,email,per) values('Andrew Anderson','andrew@gmail.com',45.54)";
        con.query(query,(error,result)=>{
            if(error)
                console.log("Error occured : ",error);
            else{
                console.log("Data inserted successfully : ",result);   
            }
        });
    }
});