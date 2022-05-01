const template = {

    init:function (){
        const {T1h3,T1image,T1text,T1position} = template.modificationsTemplate.template1
        const {T2h3,T2image,T2text,T2position} = template.modificationsTemplate.template2

        template.create(T1h3,T1image,T1text,T1position),
        template.create(T2h3,T2image,T2text,T2position),

        template.listener()      
    },

    modificationsTemplate:{
        template1:{
            T1h3: "Projet 1: PortFolio",
            T1image : "/img/home.jpg",
            T1text: "welcome",
            T1position: "right"
        },
        template2:{
            T2h3: "Projet 2: ATOM",
            T2image : "/img/atom.jpg",
            T2text: "welcome",
            T2position: "left"
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
        newtemplate.getElementById("card-container").classList.add(position)
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
