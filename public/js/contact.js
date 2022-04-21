

const contactForm = document.querySelector('.contact-form');
let email = document.querySelector(".contact-email");
let message = document.querySelector(".contact-text");

contactForm.addEventListener('submit', (e) => {
    let formData = {
        email: email.value,
        message:message.value,}
  
    
    fetch('/')
    .then( res => {
        if(res.ok){
            window.alert("Votre email a bien été envoyé")
            email.value = '';
            message.value = '';
        }else{
            window.alert("Une erreur est survenue, merci d'utiliser le lien Linkedin")
            console.log("ERREUR");
        }
    })
})    
        
