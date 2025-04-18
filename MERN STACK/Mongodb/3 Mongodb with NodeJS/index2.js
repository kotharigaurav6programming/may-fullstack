// example showing the concept of connecting mongodb with nodejs

import { MongoClient } from 'mongodb';
const url = 'mongodb://127.0.0.1/';

async function myFun(){
    try{
        const dbInstance = await MongoClient.connect(url);
        const db = dbInstance.db("nodedbNew");
        // console.log("Database created successfully");

        await db.dropDatabase();
        console.log("Database deleted successfully");

    }catch(error){
        console.log("Error : ",error);
    }
}
myFun();