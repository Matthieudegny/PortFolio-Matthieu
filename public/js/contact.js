const contact = {
    initContact:function(){
        contact.listener();
    },

    dataForm:{
        contactForm : document.querySelector('.contact-form'),
        email : document.querySelector(".contact-email"),
        message : document.querySelector(".contact-text"),
        emailState : document.getElementById("input-hidden"),
        server_url : "https://localhost:3000"
    },


    /*press button trigger the submission*/
    listener: function(){
        contact.dataForm.contactForm.addEventListener('submit', contact.actionListener.handleSubmit)
    },
    
    /*the submission handlesubmit the url (/) with ther server.js file
    no data used here i send back only one alert and clean the form board*/
    actionListener: {
        handleSubmit : (e) => {
            e.preventDefault();
            //check the statut of the request sendMail
            //and send the formdatas through the body (protection of the datas)
            fetch(contact.dataForm.server_url,{
                //specify the method
                method:"POST",
                //specify content-type
                headers: {
                    'Content-Type': 'application/json'
                },
                //formDatas are send and change in json from the body
                body: JSON.stringify({
                    datas: {
                        email: contact.dataForm.email.value,
                        message: contact.dataForm.message.value                  
                    }
                })
            })
            .then(res => {
                //if i got a positiv response from nodemailer
                if(res.ok){
                    res.json()
                    .then(data => {
                        console.log(data)
                        console.log(res)                
                        window.alert("Votre email a bien été envoyé")
                        contact.dataForm.email.value = '';
                        contact.dataForm.message.value = '';
                    })
                }
                // if i got a negative response from nodemailer
                else{
                    console.log(res)
                    console.log("There is a problem with nodemailer")
                    contact.errorResponse()
                }
            })
            .catch(function(error) {
                console.log('There is a problem with the fetch operation: ' + error.message);
                contact.errorResponse()
            });
        }   
    },

    errorResponse: function(){
        window.alert("Une erreur est survenue, merci d'utiliser le lien Linkedin")
        contact.dataForm.email.value = '';
        contact.dataForm.message.value = '';
    }
}
// when the loading is finish i launch contact.init
document.addEventListener('DOMContentLoaded', contact.initContact);