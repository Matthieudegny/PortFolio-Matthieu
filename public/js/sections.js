const sections = {

  init: function () {
    sections.observers();
  },

  /*objects as triggers of observers*/
  triggersObservers: {
    triggerAboutText : document.querySelector(".about-text"),
    triggerSkills : document.getElementById("skills-front"),
    /*every cardContainers in sections PF are trigger and object Animated*/
    cardContainor : document.querySelectorAll(".card-container-after")
  },

  /*objects will be modificated by the intersection*/
  objectsAnimatedWithObserver:{
    aboutImage : document.querySelector(".container-picture"),
    aboutLinks : document.querySelector(".about-link"),
    frontItems : document.querySelectorAll(".item-front"),
    backItems : document.querySelectorAll(".item-back")
  },

  /*array used for the timing in section Skills, method handleIntersectSkills*/
  timingItemsSkills:{
     front : [0.15, 0.35, 0.55, 0.75],back : [ 0.8, 1, 1.2, 1.4 ,1.6]
  },

  observers: function () {
    sections.createObserver(sections.triggersObservers.triggerAboutText,sections.actionIntersection.sectionAbout)
    sections.createObserver(sections.triggersObservers.triggerSkills,sections.actionIntersection.sectionSkills) 
    sections.createObserverPf()
  },

  createObserver: (trigger,action) => {
    function handleIntersection(entries){
        entries.forEach(entry=> {
          if(entry.isIntersecting){ 
          action()
          }
        })
      }
      const observer = new IntersectionObserver(handleIntersection, nav.optionObserver.optionsLink)    
      observer.observe(trigger)
  },

  createObserverPf:()=> {
    function handleIntersect(entries){
      entries.forEach(entry=> {
        if(entry.isIntersecting) entry.target.classList.add("card-animation")
      })
    }
    const observer = new IntersectionObserver(handleIntersect,nav.optionObserver.optionsLink)
    sections.triggersObservers.cardContainor.forEach(container => {observer.observe(container)})
  },

  actionIntersection: {
    sectionAbout : function() {
      sections.objectsAnimatedWithObserver.aboutImage.style.animation = "fromtop 1.2s  forwards",
      sections.triggersObservers.triggerAboutText.style.animation = "fromtop 1.2s 0.3s forwards",
      sections.objectsAnimatedWithObserver.aboutLinks.style.animation = "fromtop 1.2s 0.6s forwards"
    },
    sectionSkills: function() {
      /*three objects animated by the observerIntersection fronTelements + backElements + additional-skills*/
      for(let i = 0; i<sections.objectsAnimatedWithObserver.frontItems.length; i++){
        /*two arrays ( front + back ) used as timing (one index -> one timing)*/
        sections.objectsAnimatedWithObserver.frontItems[i].style.animation = `frontItems 0.7s ${sections.timingItemsSkills.front[i]}s forwards`
      }
      for(let i = 0; i<sections.objectsAnimatedWithObserver.backItems.length;i++){
        sections.objectsAnimatedWithObserver.backItems[i].style.animation = `backItems 0.7s ${sections.timingItemsSkills.back[i]}s forwards`
      }
      document.querySelector("#additional-skills").style.animation = "additionalItems 1s 1.8s forwards"
    },
  },

  optionObserver : {
    optionsSections : {threshold: 0.75}
  },
}

// when the loading is finish i launch sections.init
document.addEventListener('DOMContentLoaded', sections.init)
