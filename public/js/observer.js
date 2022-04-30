const observer = {

    init: function () {
        observer.observers();
      },
    /*objects as triggers of observers*/
    triggersObservers: {
        /*nav*/
        sectionOne : document.getElementById("home"),
        sectionTwo : document.getElementById("about"),
        sectionThree : document.getElementById("skills"),
        sectionFour : document.getElementById("pf"),
        sectionFive : document.getElementById("contact"),
        /*sections*/
        aboutText : document.querySelector(".about-text"),
        skills : document.getElementById("skills-front"),
        /*every cardContainers in sections PF are trigger and target(entry)*/
        cardContainor : document.querySelectorAll(".card-container-after")
    },

    /*objects as targets of observers*/
    targetsObserver:{
        /*nav*/
        homeLink : document.getElementById("link-home"),
        aboutLink : document.getElementById("link-about"),
        skillsLink : document.getElementById("link-skills"),
        pfLink : document.getElementById("link-pf"),
        contactLink : document.getElementById("link-contact"),
        /*sections*/
        aboutImage : document.querySelector("#about-image"),
        aboutLinks : document.querySelector(".about-link"),
        frontItems : document.querySelectorAll(".item-front"),
        backItems : document.querySelectorAll(".item-back")
    },

    /*array used for the timing in section Skills, method handleIntersectSkills*/
    timingItemsSkills:{
        front : [0.15, 0.35, 0.55, 0.75],back : [ 0.8, 1, 1.2, 1.4 ,1.6]
    },

    optionsObserver : {
        links : {threshold: 0.5},
        linkPf : {threshold:0.2},
        sections : {threshold: 0.75}
    },

    observers: function () {
        const {sectionOne,sectionTwo,sectionThree,sectionFour,sectionFive} = observer.triggersObservers
        const{homeLink, aboutLink, skillsLink, pfLink, contactLink} = observer.targetsObserver
        const{aboutText, skills} = observer.triggersObservers
        const {links, linkPf, sections} = observer.optionsObserver
        const sectionNav = observer.actionIntersection.sectionNav
        observer.createObserver(sectionOne,sectionNav,links,homeLink)
        observer.createObserver(sectionTwo,sectionNav,links,aboutLink)
        observer.createObserver(sectionThree,sectionNav,links,skillsLink)
        observer.createObserver(sectionFour,sectionNav,linkPf,pfLink)
        observer.createObserver(sectionFive,sectionNav,links,contactLink)
        observer.createObserver(aboutText,observer.actionIntersection.sectionAbout,sections)
        observer.createObserver(skills,observer.actionIntersection.sectionSkills,sections) 
        observer.createObserverPf()
    },

    createObserver: (trigger,action,option,target,pf) => {
        function handleIntersection(entries){
            entries.forEach(entry=> {
            action(entry,target)
            })
        }
        const newObserver = new IntersectionObserver(handleIntersection, option)    
        newObserver.observe(trigger)
    },

    createObserverPf:()=> {
            function handleIntersect(entries){
              entries.forEach(entry=> {
                if(entry.isIntersecting) entry.target.classList.add("card-animation")
              })
            }
            const newObserver = new IntersectionObserver(handleIntersect,observer.optionsObserver.sections)
            observer.triggersObservers.cardContainor.forEach(container => {newObserver.observe(container)})
    },

    actionIntersection: {
        sectionNav: function (entry,target) {
            if(entry.isIntersecting){target.classList.add("link")}
            else{target.classList.remove("link")}
        },
        sectionAbout : function(entry) {
            if(entry.isIntersecting){ 
                observer.targetsObserver.aboutImage.style.animation = "fromtop 1.2s  forwards",
                observer.triggersObservers.aboutText.style.animation = "fromtop 1.2s 0.3s forwards",
                observer.targetsObserver.aboutLinks.style.animation = "fromtop 1.2s 0.6s forwards"
            }
        },
        sectionSkills: function(entry) {
            if(entry.isIntersecting){ 
                /*three objects animated by the observerIntersection fronTelements + backElements + additional-skills*/
                for(let i = 0; i<observer.targetsObserver.frontItems.length; i++){
                    /*two arrays ( front + back ) used as timing (one index -> one timing)*/
                    observer.targetsObserver.frontItems[i].style.animation = `frontItems 0.7s ${observer.timingItemsSkills.front[i]}s forwards`
                }
                for(let i = 0; i<observer.targetsObserver.backItems.length;i++){
                    observer.targetsObserver.backItems[i].style.animation = `backItems 0.7s ${observer.timingItemsSkills.back[i]}s forwards`
                }
                document.querySelector("#additional-skills").style.animation = "additionalItems 1s 1.8s forwards"
            }
        },
      },

}
// when the loading is finish i launch observer.init
document.addEventListener('DOMContentLoaded', observer.init);