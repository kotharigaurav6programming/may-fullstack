// example showing the concept of connecting mongodb with nodejs

import { MongoClient } from 'mongodb';
const url = 'mongodb://127.0.0.1/';

async function myFun(){
    try{
        const dbInstance = await MongoClient.connect(url);
        const db = dbInstance.db("nodedb");
        // await db.createCollection("EmployeeNew");
        // console.log("Collection created successfully");
        
        await db.collection("EmployeeNew").drop();
        console.log("Collection deleted successfully");
        
    }catch(error){
        console.log("Error : ",error);
    }
}
myFun();