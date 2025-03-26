import express, { request } from 'express';
import dotenv from 'dotenv';
import { DataTypes, Sequelize } from 'sequelize';
dotenv.config();
var app = express();
const sequelize = new Sequelize(
    'maydb',
    'root',
    'root',
    {
        host:'localhost',
        dialect:'mysql'
    }
);
sequelize.authenticate().then(()=>{
    console.log("Connection established successfully");
}).catch((error)=>{
    console.log("Error occcured : ",error);
});

const student = sequelize.define("student",{
    sid : {
        type:DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING(45),
        allowNull:false,
        unique:true
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    address:{
        type:DataTypes.STRING,
        allowNull:false
    }
},{tableName:"student"});

student.sequelize.sync().then(()=>{
    //console.log("Table created successfully");
    /* 
    var obj = {
        name:"Jackson Jack",
        email:"jackson@gmail.com",
        password:"12345678",
        address:"Indore"
    }    
    student.create(obj).then((msg)=>{
        console.log(msg);
        console.log("Student added");
    }).catch((error)=>{
        console.log("Error : "+error);
    });
    */
   /*
    var obj = [{
        name:"Mathe math",
        email:"mathew@gmail.com",
        password:"12345678",
        address:"Indore"
    },{
        name:"Peter Parker",
        email:"peter@gmail.com",
        password:"12345678",
        address:"Indore"
    },{
        name:"Simon Sim",
        email:"simon@gmail.com",
        password:"12345678",
        address:"Indore"
    },{
        name:"Knight",
        email:"khnight@gmail.com",
        password:"12345678",
        address:"Indore"
    }];    
    student.bulkCreate(obj).then((msg)=>{
        // console.log(msg);
        console.log("Students added");
    }).catch((error)=>{
        console.log("Error : "+error);
    });
    */
    /*
    student.findOne().then((msg)=>{
            console.log(msg.get({ plain: true }));
        // console.log("Student added");
    }).catch((error)=>{
        console.log("Error : "+error);
    });
   */
  /*
    student.findAll().then((msg)=>{
        msg.forEach((obj)=>{
            console.log(obj.dataValues);
        });
    // console.log("Student added");
    }).catch((error)=>{
        console.log("Error : "+error);
    });
    */
   /*
    student.update({
        name:'jack'
    },{
        where : {
            sid:3
        }
    }).then((msg)=>{
     console.log("Student updated successfully ");
    }).catch((error)=>{
        console.log("Error : "+error);
    });
    */
    student.destroy({
        where : {
            sid:3
        }
    }).then((msg)=>{
     console.log("Student deleted successfully ");
    }).catch((error)=>{
        console.log("Error : "+error);
    });
}).catch((error)=>{
    console.log("Something went wrong : ",error);
});

app.listen(process.env.PORT,()=>{
    console.log("Server connection established");
});