const express = require('express');
const app = express();
const nodemailer = require("nodemailer");

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req,res) =>{
    res.sendFile(__dirname + '/public/pf.html')
});

app.post('/', (req,res) => {

    console.log(req.body)
    const transporter = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'testyoda29000@gmail.com',
            pass: "password01!"
        }
    })
    
    const mailOptions = {
        from:req.body.name,
        to:'testyoda29000@gmail.com',
        subject: req.body.name,
        text:req.body.texte,
        html:req.body.texte
    }
    
    transporter.sendMail(mailOptions,(error, info)=>{
     if(error){
         console.log(error);
         res.send("error");
     }else{
         console.log('Email sent:' + info.response);
         
     }
    })
    

})

app.listen(5000, () => {
    console.log(`Server listening on http://localhost:5000`);
})
