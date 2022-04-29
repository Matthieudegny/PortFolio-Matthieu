const sections = {

  init: function () {
    sections.observers();
  },

  /*objects as targets of observers*/
  targetsObservers: {
    targetAboutText : document.querySelector(".about-text"),
    targetSkills : document.getElementById("skills-front"),
    /*every cardContainers in sections PF are target and object Animated*/
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
     front : [0.15, 0.35, 0.55, 0.75],
     back : [ 0.8, 1, 1.2, 1.4 ,1.6]
  },

  observers: function () {
    /*section About*/
    function createNewObserver(handleIntersect,target){
      /*creation of a new instance of the Class IntersectionObserver*/
      const newObserver = new IntersectionObserver(handleIntersect, sections.optionObserver.optionsSections)
      /*target is setted for newObserver*/
      newObserver.observe(target)
    }
    /*section About*/
    createNewObserver(sections.actionsObservers.handleIntersectAbout,sections.targetsObservers.targetAboutText)
    /*section Skills*/
    createNewObserver(sections.actionsObservers.handleIntersectSkills,sections.targetsObservers.targetSkills)

    /*section PF*/
    const observerPfContainor = new IntersectionObserver(sections.actionsObservers.handleIntersectPfContainor, sections.optionObserver.optionsSections)
    sections.targetsObservers.cardContainor.forEach(container => observerPfContainor.observe(container))
  },

  actionsObservers: {
    /*section About*/
    /*the method handleIntersectionAbout:
      if targetAboutText is macthed, then one animation is added at three elements (with three differents delays)*/
    handleIntersectAbout: function(entries,observer){
      entries.forEach(entry => {
        if(entry.isIntersecting){   
          sections.objectsAnimatedWithObserver.aboutImage.style.animation = "fromtop 1.2s  forwards",
          sections.targetsObservers.targetAboutText.style.animation = "fromtop 1.2s 0.3s forwards",
          sections.objectsAnimatedWithObserver.aboutLinks.style.animation = "fromtop 1.2s 0.6s forwards"
           /*the animation is done, doesnt need anymore to observe this object*/
          observer.unobserve(entry.target);
        } 
      })
    },
    
    /*section Skills*/
    handleIntersectSkills: function(entries, observer){
      entries.forEach(entry => {
        if(entry.isIntersecting){
          /*three objects animated by the observerIntersection fronTelements + backElements + additional-skills*/
         for(let i = 0; i<sections.objectsAnimatedWithObserver.frontItems.length; i++){
           /*two arrays ( front + back ) used as timing (one index -> one timing)*/
           sections.objectsAnimatedWithObserver.frontItems[i].style.animation = `frontItems 0.7s ${sections.timingItemsSkills.front[i]}s forwards`
         }
         for(let i = 0; i<sections.objectsAnimatedWithObserver.backItems.length;i++){
           sections.objectsAnimatedWithObserver.backItems[i].style.animation = `backItems 0.7s ${sections.timingItemsSkills.back[i]}s forwards`
         }
         document.querySelector("#additional-skills").style.animation = "additionalItems 1s 1.8s forwards"
         observer.unobserve(entry.target);
        }
      })
    },

    /*section PF*/
    handleIntersectPfContainor: function(entries, observer){
      entries.forEach(entry => {
        if(entry.isIntersecting) {entry.target.classList.add("card-animation")
        observer.unobserve(entry.target);}
      })
    }

  },

  optionObserver : {
    optionsSections : {threshold: 0.75}
  },
}
// when the loading is finish i launch sections.init
document.addEventListener('DOMContentLoaded', sections.init);


  
  