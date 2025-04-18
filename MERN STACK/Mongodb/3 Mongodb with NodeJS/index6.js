// example showing the concept of connecting mongodb with nodejs

import { MongoClient } from 'mongodb';
const url = 'mongodb://127.0.0.1/';

async function myFun(){
    try{
        const dbInstance = await MongoClient.connect(url);
        const db = dbInstance.db("nodedb");
        const res = await db.collection("Employee").find().toArray();
        // console.log(res);
        console.table(res);
        
    }catch(error){
        console.log("Error : ",error);
    }
}
myFun();