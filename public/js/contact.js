const contactForm = document.querySelector('.contact-form');
let email = document.querySelector(".contact-email");
let message = document.querySelector(".contact-text");

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let formData = {
        email: email.value,
        message:message.value,
    }
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.onload = function() {
        console.log(xhr.responseText);
        if(xhr.responseText == 'success'){
            alert('Email sent');
            email.value = '';
            message.value = '';

        }else{
            alert('Something went wrong')
        }
    }

    xhr.send(JSON.stringify(formData))
})