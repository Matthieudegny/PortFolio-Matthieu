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
        cardContainer : document.querySelectorAll(".card-container-after")
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

    counter:{
        counterAnimation:""
    },

    optionsObserver : {
        links : {threshold: 0.5},
        linkPf : {threshold:0.2},
        sections : {threshold: 0.5}
    },

    /*list of observers*/
    observers: function () {
        const {sectionOne,sectionTwo,sectionThree,sectionFour,sectionFive,aboutText,skills} = observer.triggersObservers
        const {sectionNav, sectionSkills, sectionAbout, sectionPf} = observer.actionIntersection
        const {links, linkPf, sections} = observer.optionsObserver
        const{homeLink, aboutLink, skillsLink, pfLink, contactLink} = observer.targetsObserver
        const{classic, pf} = observer.activeWayObserver
        
        observer.createObserver(sectionOne,sectionNav,links,homeLink,classic)
        observer.createObserver(sectionTwo,sectionNav,links,aboutLink,classic)
        observer.createObserver(sectionThree,sectionNav,links,skillsLink,classic)
        observer.createObserver(sectionFour,sectionNav,linkPf,pfLink,classic)
        observer.createObserver(sectionFive,sectionNav,links,contactLink,classic)
        observer.createObserver(aboutText,sectionAbout,sections,"null",classic)
        observer.createObserver(skills,sectionSkills,sections,"null",classic) 
        observer.createObserver("null",sectionPf, sections,"null",pf)
    },

    /**
     * @param {Element} trigger objects as triggers of observers
     * @param {function} action function with css's modifications
     * @param {Object} option how observer is going to be trigger (conditions ex:50% of the target is intersecting)
     * @param {Element} target whats are the elements going to be change by the observer (only for nav observers, sections's element are directly modified in action)
     * @param {function} activeWay How the trigger is set, with one element or a loop on a class's elements
     */
    
    /*method to creat observer*/
    createObserver:(trigger,action,option,target,activeWay)=> {
        function handleIntersect(entries){
          entries.forEach(entry=> {
            action(entry,target)
          })
        }
        const newObserver = new IntersectionObserver(handleIntersect,option)
        activeWay(newObserver,trigger)        
    },

    /*what is the way to active the observer (one element as a trigger / or a loop on a class of element*/
    activeWayObserver:{
        classic: function (newObserver,trigger) {
            newObserver.observe(trigger)
        },
        pf: function (newObserver) {
            observer.triggersObservers.cardContainer.forEach(container=> {newObserver.observe(container)})
        },
    },

    /*object with all actions for observers*/
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
                let counterAnimationSkillsDelay = 0;
                const {frontItems, backItems} = observer.targetsObserver
                /*three objects animated by the observerIntersection fronTelements + backElements + additional-skills*/
                for(let i = 0; i<observer.targetsObserver.frontItems.length; i++){
                    /*timing for the delay -> at each loop 0.2s */
                    observer.targetsObserver.frontItems[i].style.animation = `frontItems 0.7s ${counterAnimationSkillsDelay += 0.2}s forwards`
                }
                for(let i = 0; i<observer.targetsObserver.backItems.length;i++){
                    observer.targetsObserver.backItems[i].style.animation = `backItems 0.7s ${counterAnimationSkillsDelay += 0.2}s forwards`
                }
                /*delay 0.3s for additionnalItems*/
                document.querySelector("#additional-skills").style.animation = `additionalItems 1s ${((frontItems.length+backItems.length)*0.2)+0.3}s forwards`
            }
        },
        sectionPf: function(entry, target) {
            if(entry.isIntersecting) {              
                entry.target.classList.add("card-animation")
            }     
        }
    }
}
// when the loading is finish i launch observer.init
document.addEventListener('DOMContentLoaded', observer.init);

