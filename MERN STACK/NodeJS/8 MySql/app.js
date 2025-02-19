var mysql = require('mysql2');
var readLine = require("readline");
const con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"mydb"
});
const instance = readLine.createInterface({
    input : process.stdin,
    output: process.stdout
});
con.connect((error)=>{
    if(error)
        console.log("Error occured");
    else{
        console.log("Connection established successfully");
        showMenu();
    }
});

function showMenu(){
    instance.question("---Select Any one Operation---\n1 Add Student\n2 View All Students\n3 Delete Student by Email\n4 Update Student by Email\n5 View Specific Student Details by Email\n Select any one option : ",(option)=>{
        switch(option){
            case '1' : addStudent();
                        break;
            case '2' : viewStudent();
                        break;
            case '3' : deleteStudent();
                        break;
            case '4' : updateStudent();
                        break;
            case '5' : viewSpecificStudent();
                        break;
            default : console.log("Invalid selection");
                        con.close();
                        instance.close();
                        break; 
        }
    });
}
function addStudent(){
    // console.log("add Student");
    instance.question("Enter Name : ",(name)=>{
        instance.question("Enter Email : ",(email)=>{
            instance.question("Enter Percentage : ",(per)=>{
                var query = 'insert into student(name,email,per) values(?,?,?)';
                var values = [name,email,per];
                con.query(query,values,(error)=>{
                    if(error)
                        console.log("Error occured while adding student");
                    else{
                        console.log("\nStudent added successfully\n");
                        showMenu();
                    }
                });
            });
        }); 
    });    
}
function viewStudent(){
    // console.log("view Student");   
    var query = 'select * from student';
    con.query(query,(error,message)=>{
        if(error)
            console.log("Error while viewing all students details");
        else{
            // console.log(message); // gives result in array of object
            console.table(message);
        }
    });
}
function deleteStudent(){
    console.log("delete Student");   
}
function updateStudent(){
    console.log("update Student");   
}
function viewSpecificStudent(){
    console.log("view specific Student");   
}