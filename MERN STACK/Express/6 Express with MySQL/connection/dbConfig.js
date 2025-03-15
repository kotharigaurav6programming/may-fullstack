import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

const con = mysql.createConnection({
    user : process.env.USER,
    password : process.env.PASSWORD,
    host : process.env.HOST,
    port : process.env.DB_PORT
});

con.connect((error)=>{
    if(error)
        console.log("Error while connecting with database : ",error);
    else
        console.log("Connection established successfully");
});

export default con;