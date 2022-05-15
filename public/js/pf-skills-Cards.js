const cards = {

    init: function () {
        cards.listenersSkills();
        cards.listenersPf();
    },

    /*Section Skills*/
    skillsCards : {
        cardOne : document.querySelector("#card-one-skills"),
        cardTwo : document.querySelector("#card-two-skills"),
        cardOneBack : document.getElementById("card-one-skills-back"),
        cardTwoBack: document.getElementById("card-two-skills-back")
        },

    /*the possibility to make an array contening the two cards was abandoned,
    because this option was making the effect hover, lagg on the card*/
    /*the animation created, is a hover (mouseover+mouseout) on the two pictures in skills section,to make appear a text*/
    listenersSkills: function () {
        cards.skillsCards.cardOne.addEventListener("mouseover", cards.functionsListenerSkills.increaseDivCardOneBack),
        cards.skillsCards.cardOne.addEventListener("mouseout", cards.functionsListenerSkills.decreaseDivCardOneBack),
        cards.skillsCards.cardTwo.addEventListener("mouseover", cards.functionsListenerSkills.increaseDivCardTwoBack),
        cards.skillsCards.cardTwo.addEventListener("mouseout", cards.functionsListenerSkills.decreaseDivCardTwoBack)
    },

    /*the div appear with a transform sacle(1) and desappear with scale(0)*/
    functionsListenerSkills : {
        increaseDivCardOneBack: function () {cards.skillsCards.cardOneBack.style.transform ="scaleY(1)"},
        decreaseDivCardOneBack: function () {cards.skillsCards.cardOneBack.style.transform ="scaleY(0)"},
        increaseDivCardTwoBack: function () {cards.skillsCards.cardTwoBack.style.transform ="scaleY(1)"},
        decreaseDivCardTwoBack: function () {cards.skillsCards.cardTwoBack.style.transform ="scaleY(0)"}
    },

    /*Section PF*/
    /*an array with all the elements having the class details (footer cards projects)*/
    pfCard : {
        detailsboxes : document.querySelectorAll(".details")
    },

    /*for all those elements, two listeners are add, one at entry, one at exit*/
    listenersPf: function() {
        for(let boxe of cards.pfCard.detailsboxes){
            boxe.addEventListener("mouseover", cards.functionsListenerPf.toggle);
            boxe.addEventListener("mouseout", cards.functionsListenerPf.toggle);
           
         }
    },

    /*first step: check if the element target belong to a parentElement with a class right or left (two animations, one for element class right, other class left)
    if that's the case, i select the appropriat animation 
    */
    functionsListenerPf : {
        toggle :(e) => {
            const element =  e.target.parentElement.parentElement.children[1].children[0]
            if(e.target.parentElement.parentElement.classList.contains("right")){
                element.classList.toggle("details-hover-right");
            }else{
                element.classList.toggle("details-hover-left");
            }        
        }
    }
}

// when the loading is finish i launch cards.init
document.addEventListener('DOMContentLoaded', cards.init);


