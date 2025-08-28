import nodemailer from 'nodemailer';
const mailer = function(email,status,callback){
    const transport = nodemailer.createTransport({
        service:"gmail",
        auth:{ 
            user : 'codingproject3@gmail.com',
            pass : "jybv hdqn jkgr oqbg"
        }
    });
    const endPoint = status ? 'student/studentRegistration' : 'teacher/teacherRegistration';

    const mailOption = {
        from : 'codingproject3@gmail.com',
        to : email,
        subject : 'Registration Link for Teacher',
        html : `Hello ${email}, This mail is regarding registration link, which is given below. You must needs to click on the below link to Register Yourself. <br><br>
        <form action='http://localhost:3000/${endPoint}' method='post'>
            <input type='hidden' name='email' id='email' value='${email}'> 
            <button>Click To Register</button>
        </form>
        ` 
    }
    transport.sendMail(mailOption,(error,info)=>{
        if(error){
            console.log("Error while sending mail from mailer : ",error);
            callback(false);
        }else{
            console.log("Mail sent from mailer");
            callback(info);
        }
    });
}

export default {mailer : mailer};