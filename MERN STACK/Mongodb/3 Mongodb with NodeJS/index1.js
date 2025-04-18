// example showing the concept of connecting mongodb with nodejs

import { MongoClient } from 'mongodb';
const url = 'mongodb://127.0.0.1/';

async function myFun(){
    try{
        await MongoClient.connect(url);
        console.log("Connection established successfully");
    }catch(error){
        console.log("Error : ",error);
    }
}
myFun();