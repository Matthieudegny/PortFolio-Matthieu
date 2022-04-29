const nav = {

    init:function(){
      nav.Listeners();
      nav.Observers();
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

    actionListener: {
      /*the action is to make up the navabr, it will be hidden,when the button is pressed
      and make down, when the user press it back (thanks toggle)*/
      animationNavBar: function () {
        nav.objectsNavbar.navBar.classList.toggle("menu-nav-animation")
        nav.objectsNavbar.button.classList.toggle("menu-nav-button-animation")
        nav.objectsNavbar.cross.classList.toggle("logoCross-desappear")
      }
    },

    /*the goal is to make animated the navbar, depending on where is the user*/
    Observers:function () {
      function createNewObserver(handleIntersect,target){
        /*creation of a new instance of the Class IntersectionObserver*/
        const newObserver = new IntersectionObserver(handleIntersect, nav.optionObserver.optionsLink)
        /*target is setted for newObserver*/
        newObserver.observe(target)
      }

      createNewObserver(nav.actionsObserver.handleIntersectsectionOne,nav.objectsSections.sectionOne)
      createNewObserver(nav.actionsObserver.handleIntersectsectionTwo,nav.objectsSections.sectionTwo)
      createNewObserver(nav.actionsObserver.handleIntersectsectionThree,nav.objectsSections.sectionThree)
      createNewObserver(nav.actionsObserver.handleIntersectsectionFour,nav.objectsSections.sectionFour)
      createNewObserver(nav.actionsObserver.handleIntersectsectionFive,nav.objectsSections.sectionFive)

    },
    
    actionsObserver:  {
      /*the methid handleIntersectionOne:
      if sectionOne is macthed, then a underline is add to the link homeLink
      when the observer leave sectionOne, the underline is remove*/
      handleIntersectsectionOne: function (entries){
        entries.forEach(entry => {
          if(entry.isIntersecting){nav.objectsLinksNavbar.homeLink.classList.add("link")}
          else{nav.objectsLinksNavbar.homeLink.classList.remove("link")}
        })},

      handleIntersectsectionTwo: function(entries){
        entries.forEach(entry => {
          if(entry.isIntersecting){nav.objectsLinksNavbar.aboutLink.classList.add("link")}
          else{nav.objectsLinksNavbar.aboutLink.classList.remove("link")}
        })},

      handleIntersectsectionThree: function(entries){
        entries.forEach(entry => {
          if(entry.isIntersecting){nav.objectsLinksNavbar.skillsLink.classList.add("link")}
          else{nav.objectsLinksNavbar.skillsLink.classList.remove("link")}
        })},

       handleIntersectsectionFour: function(entries){
        entries.forEach(entry => {
          if(entry.isIntersecting){nav.objectsLinksNavbar.pfLink.classList.add("link")}
          else{nav.objectsLinksNavbar.pfLink.classList.remove("link")}
        })},

        handleIntersectsectionFive: function(entries){
        entries.forEach(entry => {
          if(entry.isIntersecting){nav.objectsLinksNavbar.contactLink.classList.add("link")}
          else{nav.objectsLinksNavbar.contactLink.classList.remove("link")}
        })}
    },
    
    /*how observers are setted to intersect targets*/
    optionObserver : {
      optionsLink : {threshold: 0.42,}
    },
}
// when the loading is finish i launch nav.init
document.addEventListener('DOMContentLoaded', nav.init);


  