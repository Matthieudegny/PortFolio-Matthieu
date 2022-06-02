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
    res.sendFile(__dirname + '/public/index.html')
});

/*back side (nodemailer)*/
app.post('/',(req,res) => { 
    try{
        
        const transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 465,
            secure: true,
            service:'gmail',
            auth:{
                user: process.env.GMAIL_USER,
                pass: process.env.PASSWORD,
            }
        })

        console.log(req.body.datas.email)
        const mailOptions = {
            from: req.body.datas.email,
            to: process.env.GMAIL_USER,
            subject: "email from my Portfolio",
            html: `You got a message from 
            Email : ${req.body.datas.email} <br>
            Message: ${req.body.datas.message}`,
        }
        
        transporter.sendMail(mailOptions, (error, info) => {
            res.status(200)
            res.json({email:"email sent"})
        });

    }catch(error){
        res.status(500)
        res.json({message: error})
    }
})
                
app.listen(PORT, () => {
console.log(`Server listening on http://localhost:${PORT}/`);
})