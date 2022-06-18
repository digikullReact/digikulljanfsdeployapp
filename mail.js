require("dotenv").config();
const nodemailer = require("nodemailer");


const sendEmail=(email,message)=>{

    var message = {
        from: "shubhamdixit101@outlook.com",
        to: email,
        subject: "SUCCESS REGISTRATION",
        text: "Plaintext version of the message",
        html: "<p>HTML version of the message</p>"
      };
   const transporter= nodemailer.createTransport({
        host: "smtp.mandrillapp.com",  // host of your smtp provider
        port: 587,
        secure: false, // upgrade later with STARTTLS
        tls: {
          ciphers:'SSLv3'
       },
        auth: {
          user: process.env.USERNAME,
          pass: process.env.PASSWORD,
        },
      });

      transporter.sendMail(message,function(err,data){
        console.log(err);

        console.log(data);

      })

}

module.exports=sendEmail;