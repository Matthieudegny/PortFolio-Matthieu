let templateObject = {

    init:function (){
        templateObject.create()
        templateObject.listener()      
    },

    objects:{
        templateModel : document.getElementById("templateProject"),
        container: document.querySelectorAll(".card-container-after")
    },

    create: function(){
        template1 = templateObject.objects.templateModel.content.cloneNode(true),
        document.getElementById("container-template").appendChild(template1)
    },

    listener: function () {
        document.querySelectorAll(".card-container-after").forEach(element=>{
            element.addEventListener("click",()=> console.log("yes"))
            observer.createObserver(element,observer.actionIntersection.sectionPf, observer.optionsObserver.sections,"null",observer.activeWayObserver.classic)
        })
        //
    }
    
  
    
   
}


// when the loading is finish i launch template.init
document.addEventListener('DOMContentLoaded', templateObject.init);
