const cards = {

    init: function () {
        cards.listenersSkills();
        cards.listenersPf();
    },

    /*Section Skills*/
    skillsCards : {
        allCardsFront : document.querySelectorAll(".cards-skills"),
        allCardsBack : document.querySelectorAll(".skills-cards-back")
        },

    /*the animation created is a hover (mouseover+mouseout)on the two pictures in skills section,to make appear a text*/
    listenersSkills: function () {
        for(let card of cards.skillsCards.allCardsFront){
           card.addEventListener("mouseover", cards.functionsListenerSkills.increaseDivBack)
           card.addEventListener("mouseout", cards.functionsListenerSkills.decreaseDivBack)
        }
    },

    /*the div appear with a transform sacle(1) and desappear with scale(0)*/
    functionsListenerSkills : {
        increaseDivBack: function(e){
          e.target.nextSibling.nextSibling.style.transform = "scaleY(1)"
        },
        decreaseDivBack: function(){
           for(let card of cards.skillsCards.allCardsBack){
               card.style.transform = "scaleY(0)"
           }
        }
    },

    /*Section PF*/
    /*an array with all the elements having the class details (footer cards Pf)*/
    pfCard : {
        detailsboxes : document.querySelectorAll(".details")
    },

    /*for all those elements, two listeners are added, one at entry, one at exit*/
    listenersPf: function() {
        for(let boxe of cards.pfCard.detailsboxes){
            boxe.addEventListener("mouseover", cards.functionsListenerPf.toggle);
            boxe.addEventListener("mouseout", cards.functionsListenerPf.toggle);
           
         }
    },

    /*first step: check if the element target belong to a parentElement with class right or left (two animations, one for element class right, other class left)
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


