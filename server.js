const { response } = require('express');
const express = require('express');
const app = express();
require('dotenv').config();
const nodemailer = require("nodemailer");
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.urlencoded( {extended: true} ))
app.use(express.json());


/*front side*/
app.get('/', (req,res) =>{
    res.sendFile(__dirname + '/public/pf.html')
});

/*back side (nodemailer)*/
app.post('/',(req,res) => { 
    try{
        // create reusable transporter object using the default SMTP transport
        const transporter = nodemailer.createTransport({
            service:'gmail',
            auth:{
                user: process.env.GMAIL_USER,// generated ethereal user
                pass: process.env.PASSWORD,// generated ethereal password
            }
        })
        
        // defined transport object
        const mailOptions = {
            from: req.body.datas.email,
            to: process.env.GMAIL_USER,
            subject: "email from my Portfolio",
            html: `You got a message from 
            Email : ${req.body.datas.email} <br>
            Message: ${req.body.datas.message}`,
        }
        
        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            res.status(200)
            res.json({email:"email sent"})
        });

    //in case something is wrong with sendMail, i catch the error and send it back to the fecth to contact.js
    }catch(error){
        res.status(500)
        res.json({message: error})
    }
})
                
app.listen(PORT, () => {
console.log(`Server listening on http://localhost:${PORT}/`);
})