// example showing the concept of connecting mongodb with nodejs

import { MongoClient } from 'mongodb';
const url = 'mongodb://127.0.0.1/';

/*
db.Employee.find({
    salary : {
        $lt : db.Employee.find({
            salary : {
                $ne : db.Employee.find().sort({salary:-1}).toArray()[0].salary
            }
        }).sort({salary:-1}).toArray()[0].salary
    }
}).sort({salary:-1}).toArray()[0].salary;
*/

async function myFun(){
    try{
        const dbInstance = await MongoClient.connect(url);
        const db = dbInstance.db("nodedb");
        const result1 = await db.collection("Employee").find().sort({age:-1}).toArray();
        const age1 = result1[0].age;
        // console.log(age1);
        const result2 = await db.collection("Employee").find({ age : {$ne : age1} }).sort({age:-1}).toArray();
        const age2 = result2[0].age;
        // console.log(age2);
        const result3 = await db.collection("Employee").find({ age : { $lt : age2}}).sort({age:-1}).toArray();
        const age3 = result3[0].age;
        console.log(age3);
    }catch(error){
        console.log("Error : ",error);
    }
}
myFun();