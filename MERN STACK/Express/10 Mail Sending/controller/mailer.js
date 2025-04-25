import { response } from 'express';
import nodemailer from 'nodemailer';
const mailer = function(email,callback){
    const transport = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user : '<email_id>',
            pass : 'password'
        }
    });

    const mailOption = {
        from : '<email_id>',
        to : email,
        subject : 'Its Verification Mail',
        html : `Hello ${email}, Welcome to our site. This is a verification mail from our side. You need to verify yourself by clicking on the link below. <br> 
        <form action='/verifyEmail' method='post'>
            <input type='hidden' name='email' id='email' value='${email}'>
            <input type='submit' value='Click to verify'>
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