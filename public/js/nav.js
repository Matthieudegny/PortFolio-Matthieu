const nav = {

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

    initListeners: function() {
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
    initObservers:function () {
      /*creation of a new instance of the Class IntersectionObserver(connected with a method handleIntersectionOne, and the setting optionsLink)*/
      const observerSectionOne = new IntersectionObserver(nav.actionsObserver.handleIntersectsectionOne, nav.optionObserver.optionsLink);
      /*the new obsever is set on sectionOne*/
      observerSectionOne.observe(nav.objectsSections.sectionOne)

      const observerSectionTwo = new IntersectionObserver(nav.actionsObserver.handleIntersectsectionTwo, nav.optionObserver.optionsLink)
      observerSectionTwo.observe(nav.objectsSections.sectionTwo)

      const observerSectionThree = new IntersectionObserver(nav.actionsObserver.handleIntersectsectionThree, nav.optionObserver.optionsLink)
      observerSectionThree.observe(nav.objectsSections.sectionThree)

      const observerSectionFour = new IntersectionObserver(nav.actionsObserver.handleIntersectsectionFour, nav.optionObserver.optionsLink)
      observerSectionFour.observe(nav.objectsSections.sectionFour)

      const observerSectionFive = new IntersectionObserver(nav.actionsObserver.handleIntersectsectionFive, nav.optionObserver.optionsLink)
      observerSectionFive.observe(nav.objectsSections.sectionFive)
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
document.addEventListener('DOMContentLoaded', nav.initListeners );
document.addEventListener('DOMContentLoaded', nav.initObservers );

  