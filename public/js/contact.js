const contact = {
    initContact:function(){
        contact.listener();
    },

    dataForm:{
        contactForm : document.querySelector('.contact-form'),
        email : document.querySelector(".contact-email"),
        message : document.querySelector(".contact-text"),
        emailState : document.getElementById("input-hidden"),
        server_url : "https://matthieu-degny-portfolio.site"

    },

    listener: function(){
         contact.dataForm.contactForm.addEventListener('submit', contact.actionListener.handleSubmit)
    },
    

    actionListener: {

        handleSubmit : (e) => {
            e.preventDefault();
            fetch(contact.dataForm.server_url,{
                method:"POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    {
                    datas: {
                        email: contact.dataForm.email.value,
                        message: contact.dataForm.message.value                  
                    }
                    }
                )
            }
            )

            .then(res => {

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
document.addEventListener('DOMContentLoaded', contact.initContact);
