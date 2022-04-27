const contact = {
    initContact:function(){
        contact.listener();
    },

    dataForm:{
        contactForm : document.querySelector('.contact-form'),
        email : document.querySelector(".contact-email"),
        message : document.querySelector(".contact-text")
    },
    /*press button trigger the submission*/
    listener: function(){
        contact.dataForm.contactForm.addEventListener('submit', request)
    },
    
    /*the submission request the url (/) with ther server.js file
    no data used hier i send back nothing to the front*/
    actionListener: {
        request : (e) => {
            fetch('/')
            .then( res => {
                if(res.ok){
                    window.alert("Votre email a bien été envoyé")
                    contact.dataForm.email.value = '';
                    contact.dataForm.message.value = '';
                }else{
                    window.alert("Une erreur est survenue, merci d'utiliser le lien Linkedin")
                    console.log("ERREUR");
                }
            })
        }
    }
}
// when the loading is finish i launch contact.init
document.addEventListener('DOMContentLoaded', contact.initContact);


  

        
