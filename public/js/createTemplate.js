const template = {

    init:function (){
        template.create(template.modificationsTemplate.template1.h3,template.modificationsTemplate.template1.image,template.modificationsTemplate.template1.text,template.modificationsTemplate.template1.position),
        template.create(template.modificationsTemplate.template1.h3,template.modificationsTemplate.template1.image,template.modificationsTemplate.template1.text,template.modificationsTemplate.template2.position),

        template.listener()      
    },

    modificationsTemplate:{
        template1:{
            h3: "Projet 1",
            image : "/img/contact.jpg",
            text: "Bonjour, on fait une pause?",
            position: "flex-end"
        },
        template2:{
            position:"flex-start"
        }
    },

    objects:{
        templateModel : document.getElementById("templateProject"),
        container: document.querySelectorAll(".card-container-after"),
    },

    create: function(h3,image,text,position){ //h3,image,texte
        newtemplate = template.objects.templateModel.content.cloneNode(true),
        newtemplate.getElementById("h3-pf").textContent = h3,
        newtemplate.getElementById("image-pf").src = image,
        newtemplate.getElementById("card-image-after-p").textContent = text
        newtemplate.getElementById("card-container").style.setProperty("align-items", position)
        document.getElementById("container-template").appendChild(newtemplate)
    },

    listener: function () {
        document.querySelectorAll(".card-container-after").forEach(element=>{
            observer.createObserver(element,observer.actionIntersection.sectionPf, observer.optionsObserver.sections,"null",observer.activeWayObserver.classic)
        })
        document.querySelectorAll(".details").forEach(element => {
            element.addEventListener("mouseover", cards.functionsListenerPf.toggle);
            element.addEventListener("mouseout", cards.functionsListenerPf.toggle);
        })
    },

    handleTemplate: () => {

    }
}
// when the loading is finish i launch template.init
document.addEventListener('DOMContentLoaded', template.init);
