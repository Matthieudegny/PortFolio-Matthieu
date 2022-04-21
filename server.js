const express = require('express');
const app = express();

const nodemailer = require("nodemailer");

const PORT = process.env.PORT || 5000;

app.use(express.static('public'));

app.use(express.json())

app.get('/', (req,res) => {
    res.sendFile(__dirname + "/public/pf.html")
})

app.post('/', (req,res) => {
   console.log(req.body);

   const transporter = nodemailer.createTransport({
       service:'gmail',
       auth:{
           user:'testyoda29000@gmail.com',
           pass: "password01!"
       }
   })

   const mailOptions = {
       from:req.body.email,
       to:'testyoda29000@gmail.com',
       subject: "Message title",
       text:req.body.message,
       html: req.body.message
   }

   transporter.sendMail(mailOptions,(error, info)=>{
    if(error){
        console.log(error);
        res.send("error");
    }else{
        console.log('Email sent:' + info.response)
        res.send("success")
    }

   })
})

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:5000`)
})