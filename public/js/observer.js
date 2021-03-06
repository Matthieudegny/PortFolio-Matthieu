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
        aboutImage : document.querySelector(".container-picture"),
        aboutLinks : document.querySelector(".about-link"),
        frontItems : document.querySelectorAll(".item-front"),
        backItems : document.querySelectorAll(".item-back")
    },

    optionsObserver : {
        links : {threshold: 0.5},
        /*the animation on section pf is set differently because the section is unusual*/
        linkPf : {threshold:0.2},
        sections : {threshold: 0.5}
    },

    /*list of observers*/
    observers: function () {
        const {sectionOne,sectionTwo,sectionThree,sectionFour,sectionFive,aboutText,skills} = observer.triggersObservers
        const {sectionNav,sectionHome, sectionSkills, sectionAbout, sectionPf} = observer.actionIntersection
        const {links, linkPf, sections} = observer.optionsObserver
        const{homeLink, aboutLink, skillsLink, pfLink, contactLink} = observer.targetsObserver
        const{classic, pf} = observer.activeWayObserver
        
        /*Nav's observers*/
        /*the link in the navbar matching whith the section where is the user -> animated with an underborderline
        allow at the user to know where he in the page*/
        observer.createObserver(sectionOne,sectionNav,links,homeLink,classic)
        observer.createObserver(sectionTwo,sectionNav,links,aboutLink,classic)
        observer.createObserver(sectionThree,sectionNav,links,skillsLink,classic)
        observer.createObserver(sectionFour,sectionNav,linkPf,pfLink,classic)
        observer.createObserver(sectionFive,sectionNav,links,contactLink,classic)
        /*Sections's observers*/
        /*at each intersection of sections, some containers/text/pictures... appear*/
        observer.createObserver(sectionOne,sectionHome,sections,"null",classic)
        observer.createObserver(aboutText,sectionAbout,sections,"null",classic)
        observer.createObserver(skills,sectionSkills,sections,"null",classic) 
        observer.createObserver("null",sectionPf, sections,"null",pf)
    },

    /**
     * @param {Element} trigger objects as triggers of observers
     * @param {function} action function with css's modifications
     * @param {Object} option how observer is going to be trigger (conditions ex:50% of the target is intersected so action is initiated)
     * @param {Element} target whats are the elements going to be change by the observer (only for nav observers, sections's element are directly modified in action)
     * @param {function} activeWay How the trigger is set, with one element = classic ( just one observer/one trigger ) 
     * // or a loop (severals observers so severals triggers)   
     */
    
    /*method to creat observer*/
    createObserver:(trigger,action,option,target,activeWay)=> {
        function handleIntersect(entries){
          entries.forEach(entry=> {
            action(entry,target);
          })
        }
        const newObserver = new IntersectionObserver(handleIntersect,option)
        activeWay(newObserver,trigger)        
    },

    /*what is the way to active the observer (one element/a loop on a class of element as trigger*/
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
            /*when a section is intersectiong a class link is add to the navlink corresponding, and then remove*/
            if(entry.isIntersecting){target.classList.add("link")}
            else{target.classList.remove("link")}
        },

        sectionHome: function(entry) {
            if(entry.isIntersecting){
                /*all the h1 elements appear when the entry is intersected*/
                document.querySelectorAll(".home-h1").forEach((element) => {
                    element.style.animation = "txt-appearance 1s 1s forwards"
                })
                document.querySelectorAll(".home-h1-after").forEach((element)=> {
                     element.classList.add("h1-after-animation")
                }) 
            }
        },

        sectionAbout : function(entry) {
            if(entry.isIntersecting){ 
                /*all the about elements appear when the entry is intersected*/
                observer.targetsObserver.aboutImage.style.animation = "fromtop 1.2s  forwards",
                observer.triggersObservers.aboutText.style.animation = "fromtop 1.2s 0.3s forwards",
                observer.targetsObserver.aboutLinks.style.animation = "fromtop 1.2s 0.6s forwards";
            }
        },
        sectionSkills: function(entry) {   
            if(entry.isIntersecting){ 
                /*all the skill elements appear when the entry is intersected*/
                /*creation of a varibale counterAnimationSkillsDelay as delay counter for all the elements*/
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
                /*delay +0.3s for additionnalItems*/
                document.querySelector("#additional-skills").style.animation = `additionalItems 1s ${((frontItems.length+backItems.length)*0.2)+0.3}s forwards`
            }
        },
        sectionPf: function(entry, target) {
            /*all the projects elements appear when the entry is intersected*/
            if(entry.isIntersecting) {        
                if(entry.target.offsetParent.classList.contains("right"))entry.target.classList.add("card-animation-right")
                else entry.target.classList.add("card-animation-left")
            }     
        }
    }
}
// when the loading is finish i launch observer.init
document.addEventListener('DOMContentLoaded', observer.init);

