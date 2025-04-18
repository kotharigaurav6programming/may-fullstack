// example showing the concept of connecting mongodb with nodejs

import { MongoClient } from 'mongodb';
const url = 'mongodb://127.0.0.1/';

async function myFun(){
    try{
        const dbInstance = await MongoClient.connect(url);
        const db = dbInstance.db("nodedb");
        const obj = {
            name:"Andrew Anderson",
            age:34,
            address : 'Indore'
        }
        const res = await db.collection("Employee").insertOne(obj);
        console.log("Data inserted successfully : ",res);
        
    }catch(error){
        console.log("Error : ",error);
    }
}
myFun();