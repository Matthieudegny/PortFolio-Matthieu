const nav = {

    init:function(){
      nav.Listeners();
      nav.observers();
    },

    objectsNavbar :{
      button : document.querySelector(".menu-nav-button"),
      cross : document.getElementById("logo-cross"),
      navBar: document.querySelector(".menu-nav")
    },

    objectsLinksNavbar : {
      homeLink : document.getElementById("link-home"),
      aboutLink : document.getElementById("link-about"),
      skillsLink : document.getElementById("link-skills"),
      pfLink : document.getElementById("link-pf"),
      contactLink : document.getElementById("link-contact")
    },

    objectsSections:{
      sectionOne : document.getElementById("home"),
      sectionTwo : document.getElementById("about"),
      sectionThree : document.getElementById("skills"),
      sectionFour : document.getElementById("pf"),
      sectionFive : document.getElementById("contact")
    },

    Listeners: function() {
      nav.objectsNavbar.button.addEventListener("click", nav.actionListener.animationNavBar)
    },

    actionListener:{
      /*the action is to make up the navabr, it will be hidden,when the button is pressed
      and make down, when the user press it back (thanks toggle)*/
      animationNavBar: function () {
        const {navBar, button,cross} = nav.objectsNavbar
        navBar.classList.toggle("menu-nav-animation")
        button.classList.toggle("menu-nav-button-animation")
        cross.classList.toggle("logoCross-desappear")
      }
    },    
    
    /*how observers are setted to intersect targets*/
    optionObserver : {
      optionsLink : {threshold: 0.42,}
    },

    createObserver: (target,trigger) => {
      function handleIntersection(entries){
          entries.forEach(entry=> {
            if(entry.isIntersecting){target.classList.add("link")}
            else{target.classList.remove("link")}
          })
        }
        const observer = new IntersectionObserver(handleIntersection, nav.optionObserver.optionsLink)
        observer.observe(trigger)
    },

    observers:() => {
      const {sectionOne,sectionTwo,sectionThree,sectionFour,sectionFive} = nav.objectsSections
      const{homeLink, aboutLink, skillsLink, pfLink, contactLink} = nav.objectsLinksNavbar
      nav.createObserver(homeLink,sectionOne)
      nav.createObserver(aboutLink,sectionTwo)
      nav.createObserver(skillsLink,sectionThree)
      nav.createObserver(pfLink,sectionFour)
      nav.createObserver(contactLink,sectionFive)
    }


}
// when the loading is finish i launch nav.init
document.addEventListener('DOMContentLoaded', nav.init);


  