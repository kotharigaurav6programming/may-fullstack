// example showing the concept of connecting mongodb with nodejs

import { MongoClient } from 'mongodb';
const url = 'mongodb://127.0.0.1/';

async function myFun(){
    try{
        const dbInstance = await MongoClient.connect(url);
        const db = dbInstance.db("codingdb");
        const data = await db.collection("product").aggregate([
            {
                $lookup:{
                    from : "category",
                    foreignField:"cat_id",
                    localField:"category_id",
                    as : "Product Details"
                }
            }
        ]).toArray();
        // console.log(data);
        for(var index in data){
            console.log(data[index]);
            console.log('---------------------------------------');
        }
    }catch(error){
        console.log("Error : ",error);
    }
}
myFun();