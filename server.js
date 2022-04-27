const express = require('express');
const app = express();
require('dotenv').config();
const nodemailer = require("nodemailer");
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

/*front side*/
app.get('/', (req,res) =>{
    res.sendFile(__dirname + '/public/pf.html')
});

/*back side (nodemailer)*/
app.post('/', (req,res) => {
    /*use data from the form*/
    const { email,message } = req.body;  

    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user: process.env.GMAIL_USER,// generated ethereal user
            pass: process.env.PASSWORD,// generated ethereal password
        }
    })
    
    //defined transport object
    const mailOptions = {
        from: email,
        to: process.env.GMAIL_USER,
        subject: "email from my Portfolio",
        html: `You got a message from 
        Email : ${email} <br>
        Message: ${message}`,
    }
    
    //send email with conditions in case there is an error
    transporter.sendMail(mailOptions,(error, info)=>{
     if(error){
         console.log(error);
         res.send("error");
         res.sendFile(__dirname + '/public/pf.html')
     }else{
         console.log('Email sent:' + info.response);       
     }
    })    

})

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
})
