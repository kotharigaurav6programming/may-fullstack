var arr=[];
function getData(){
    var username = document.getElementById("username");
    let usernameStatus = (username.value.trim()=='') ? false : true;
   
    var email = document.getElementById("email");
    let emailStatus = (email.value.trim()=='') ? false : true;
   
    var password = document.getElementById("password");
    let passwordStatus = (password.value.trim()=='') ? false : true;
   
    var address = document.getElementById("address");
    let addressStatus = (address.value.trim()=='') ? false : true;
   
    var existingData = JSON.parse(localStorage.getItem("data"));
    console.log(existingData);
    
    if(usernameStatus && emailStatus && passwordStatus && addressStatus){
        var studentObj = {
            username : username.value,
            email : email.value,
            password : password.value,
            address : address.value
        } 
        // console.log(studentObj);

        if(existingData){
            let res = existingData.find((obj)=>{
                return obj.email==studentObj.email;
            });
            // console.log("res : ",res);
            if(res){
                localStorage.setItem("regMessage","Email Id Already Exist");
                window.location.reload();
                return false;
            }else{
                localStorage.setItem("regMessage","Registration Successfull");
                arr = [...existingData,studentObj];
                localStorage.setItem("data",JSON.stringify(arr));    
            }        
        }else{
            localStorage.setItem("regMessage","You are the Lucky One");
            arr = [...arr,studentObj];
            localStorage.setItem("data",JSON.stringify(arr));
        }

        return true;
    }
    else
        return false;        
}

function checkLogin(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var existingData = JSON.parse(localStorage.getItem("data"));
    let res = existingData.find((obj)=>{
        return obj.email==email && obj.password==password;
    });
    if(res){
        localStorage.setItem("activeEmail",email);
        return true;
    }else{
        localStorage.setItem("regMessage","Email Id or password is wrong");
        return false;
    }
}

function updateStudent(index){
    localStorage.setItem("updateIndex",JSON.stringify(index));
}