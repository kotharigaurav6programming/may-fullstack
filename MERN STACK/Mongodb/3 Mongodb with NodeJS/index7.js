// example showing the concept of connecting mongodb with nodejs

import { MongoClient } from 'mongodb';
const url = 'mongodb://127.0.0.1/';

async function myFun(){
    try{
        const dbInstance = await MongoClient.connect(url);
        const db = dbInstance.db("nodedb");
        const byName = {name:"Andrew Anderson"};
        const status = {
            $set : {
                name : "Andrew Andy Anderson"
            }
        }
        const res = await db.collection("Employee").updateMany(byName,status);
        console.log("Data updated successfully : ",res);
        
    }catch(error){
        console.log("Error : ",error);
    }
}
myFun();