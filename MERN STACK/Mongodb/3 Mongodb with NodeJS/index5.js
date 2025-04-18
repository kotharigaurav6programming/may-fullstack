// example showing the concept of connecting mongodb with nodejs

import { MongoClient } from 'mongodb';
const url = 'mongodb://127.0.0.1/';

async function myFun(){
    try{
        const dbInstance = await MongoClient.connect(url);
        const db = dbInstance.db("nodedb");
        const obj = [{
            name:"Andrew Anderson",
            age:34,
            address : 'Indore'
        },{
            name:"Mathew Math",
            age:32,
            address : 'Dewas'
        },{
            name:"Jackson Jack",
            age:12,
            address : 'US'
        }]
        const res = await db.collection("Employee").insertMany(obj);
        console.log("Data inserted successfully : ",res);
        
    }catch(error){
        console.log("Error : ",error);
    }
}
myFun();
