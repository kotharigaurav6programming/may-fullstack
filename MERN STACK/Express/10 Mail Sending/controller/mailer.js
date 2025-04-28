import { response } from 'express';
import nodemailer from 'nodemailer';
const mailer = function(email,callback){
    const transport = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user : process.env.EMAIL,
            pass : process.env.PASSWORD
        }
    });

    const mailOption = {
        from : 'codingproject3@gmail.com',
        to : email,
        subject : 'Its Verification Mail',
        html : `Hello ${email}, Welcome to our site. This is a verification mail from our side. You need to verify yourself by clicking on the link below. <br> 
        <form action='http://localhost:3000/verifyEmail' method='post'>
            <input type='hidden' name='email' id='email' value='${email}'>
            <button>Click Here to Verify</button>
        </form>`
    }

    transport.sendMail(mailOption,(error,info)=>{
        try{
            if(error){
                console.log('Error while sending mail : ',error);
                callback(false);
            }else{
                console.log('Mail sent successfully from mailer');
                callback(info);
            }
        }catch(error){
            console.log('Something went wrong : ',error);
            callback(false);
        }
    });
}

export default {mailer:mailer};
