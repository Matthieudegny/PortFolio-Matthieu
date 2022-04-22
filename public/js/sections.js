/*intersection Observer*/
let optionsSections = {
    threshold: 0.75
  }
  
  /*section about*/
  /*about itersection observer*/
  const aboutImage = document.querySelector(".container-picture");
  let aboutText = document.querySelector(".about-text");
  const aboutLinks = document.querySelector(".about-link");
  let count = 0;
  let lastTimeout;
  function handleIntersectAbout(entries){
    entries.forEach(entry => {
      if(entry.isIntersecting){   
          aboutImage.style.animation = "fromtop 1.2s  forwards",
          aboutText.style.animation = "fromtop 1.2s 0.3s forwards",
          aboutLinks.style.animation = "fromtop 1.2s 0.6s forwards"}
    })
  }
  const observerSectionAboutImage = new IntersectionObserver(handleIntersectAbout, optionsSections)
  observerSectionAboutImage.observe(aboutText)
  
  /*Section Skills*/
  /*apparition des items avec object intersection*/
  const targetSkills = document.getElementById("skills-front")
  const frontItems = document.querySelectorAll(".item-front")
  const backItems = document.querySelectorAll(".item-back")
  
  const timingItemsSkillFront = [0.15, 0.35, 0.55, 0.75]
  const timingItemsSkillBack = [ 0.8, 1, 1.2, 1.4 ,1.6]
  
  function handleIntersectSkills(entries){
    entries.forEach(entry => {
      if(entry.isIntersecting){
       for(let i = 0; i<frontItems.length; i++){
         frontItems[i].style.animation = `frontItems 0.7s ${timingItemsSkillFront[i]}s forwards`
       }
       for(let i = 0; i<backItems.length;i++){
         backItems[i].style.animation = `backItems 0.7s ${timingItemsSkillBack[i]}s forwards`
       }
       document.querySelector("#additional-skills").style.animation = "additionalItems 1s 1.8s forwards"
      }
    })
  }
  
  const observerSectionSkills = new IntersectionObserver(handleIntersectSkills, optionsSections)
  observerSectionSkills.observe(targetSkills)
  /*animation des cartes
  le selecteur par carte est privilégié à un selecteur class car cela crée
  des lags au niveau de l'animation qd la souris bouge*/
  const cardOne = document.querySelector("#card-one")
  const cardTwo = document.querySelector("#card-two")

  cardOne.addEventListener("mouseover", (e) => {
    document.getElementById("skill-card-one-back").style.transform ="scaleY(1)";
  })
  cardOne.addEventListener("mouseout", (e) => {
    document.getElementById("skill-card-one-back").style.transform ="scaleY(0)";
  })
  cardTwo.addEventListener("mouseover", (e) => {
    document.getElementById("skill-card-two-back").style.transform ="scaleY(1)";
  })
  cardTwo.addEventListener("mouseout", (e) => {
    document.getElementById("skill-card-two-back").style.transform ="scaleY(0)";
  })


 
  
  /*Section PF*/
  /*Intersection Obs Paramétrage du voile sur les containeurs du PF*/
  const cardContainor = document.querySelectorAll(".card-containor-after")
  function handleIntersectPfContainor(entries){
    entries.forEach(entry => {
      if(entry.isIntersecting) entry.target.classList.add("card-animation")
    })
  }
  const observerPfContainor = new IntersectionObserver(handleIntersectPfContainor, optionsSections)
  cardContainor.forEach(container => {
    observerPfContainor.observe(container)
  })
  
  /*Pf Hover*/
  const detailsboxes = document.querySelectorAll(".details")
  
  for(let boxe of detailsboxes){
     boxe.addEventListener("mouseover", (e) => {
       
        let element = e.target.nextSibling.nextSibling;
        element.classList.toggle("details-hover");
     });
     boxe.addEventListener("mouseout", (e) => {
        let element = e.target.nextSibling.nextSibling;
        element.classList.toggle("details-hover");
     });
  }
  
  
  