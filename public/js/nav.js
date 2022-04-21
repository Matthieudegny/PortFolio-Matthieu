/*Nav move*/
/*faire remonter-descendre la nabBar au clique du bouton Nav*/
const button = document.querySelector(".menu-nav-button")
const cross = document.getElementById("logo-cross")
const navBar= document.querySelector(".menu-nav");

animationNavBar = () => {
  navBar.classList.toggle("menu-nav-animation");
  button.classList.toggle("menu-nav-button-animation");
  cross.classList.toggle("logoCross-desappear")};

button.addEventListener("click", animationNavBar)


/*animation navbar
Les liens sont animés d'un sous-lignement lorsque la section correspondante est visitée par l'utilisateur*/
const sectionOne = document.getElementById("home")
const sectionTwo = document.getElementById("about")
const sectionThree = document.getElementById("skills")
const sectionFour = document.getElementById("pf")
const sectionFive = document.getElementById("contact")

let optionsLink = { 
    threshold: 0.42,}
    
  /*nav home*/
  const homeLink = document.getElementById("link-home");
  function handleIntersectsectionOne(entries){
    entries.forEach(entry => {
      if(entry.isIntersecting){homeLink.classList.add("link")}
      else{homeLink.classList.remove("link")}
    })}
  const observerSectionOne = new IntersectionObserver(handleIntersectsectionOne, optionsLink)
  observerSectionOne.observe(sectionOne)
    
  /*nav about*/
  const aboutLink = document.getElementById("link-about");
  function handleIntersectsectionTwo(entries){
    entries.forEach(entry => {
      if(entry.isIntersecting){aboutLink.classList.add("link")}
      else{aboutLink.classList.remove("link")}
    })}
  const observerSectionTwo = new IntersectionObserver(handleIntersectsectionTwo, optionsLink)
  observerSectionTwo.observe(sectionTwo)
  
  /*nav skills*/
  const skillsLink = document.getElementById("link-skills");
  function handleIntersectsectionThree(entries){
    entries.forEach(entry => {
      if(entry.isIntersecting){skillsLink.classList.add("link")}
      else{skillsLink.classList.remove("link")}
    })}
  const observerSectionThree = new IntersectionObserver(handleIntersectsectionThree, optionsLink)
  observerSectionThree.observe(sectionThree)
  
  /*nav pf*/
  const pfLink = document.getElementById("link-pf");
  function handleIntersectsectionFour(entries){
    entries.forEach(entry => {
      if(entry.isIntersecting){
       pfLink.classList.add("link")}
      else{pfLink.classList.remove("link")}
    })}
  const observerSectionFour = new IntersectionObserver(handleIntersectsectionFour, optionsLink)
  observerSectionFour.observe(sectionFour)
  
  /*nav contact*/
  const contactLink = document.getElementById("link-contact");
  function handleIntersectsectionFive(entries){
    entries.forEach(entry => {
      if(entry.isIntersecting){contactLink.classList.add("link")}
      else{contactLink.classList.remove("link")}
    })}
  const observerSectionFive = new IntersectionObserver(handleIntersectsectionFive, optionsLink)
  observerSectionFive.observe(sectionFive)
  