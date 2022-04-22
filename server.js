const express = require('express');
const app = express();
require('dotenv').config();
const nodemailer = require("nodemailer");
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req,res) =>{
    res.sendFile(__dirname + '/public/pf.html')
});

app.post('/', (req,res) => {

    const { email,message } = req.body;  

    const transporter = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user: process.env.GMAIL_USER,
            pass: process.env.PASSWORD,
        }
    })
    
    const mailOptions = {
        from: email,
        to: process.env.GMAIL_USER,
        subject: "email from my Portfolio",
        html: `You got a message from 
        Email : ${email} <br>
        Message: ${message}`,
    }
    
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
    console.log(`Server listening on http://localhost:3000`);
})
