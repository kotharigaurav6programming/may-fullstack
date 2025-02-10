// example showing the concept of how to take values from user in node js

var readLine = require('readline');
const instance = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});
instance.question("Enter Value of a : ", (a) => {
        instance.question("Enter Value of b : ",(b)=>{
            instance.question("Enter Value of c : ",(c)=>{
                let sum = parseInt(a)+parseInt(b)+parseInt(c);
                console.log("Sum : "+sum);
                instance.close();
            });
        });
});



