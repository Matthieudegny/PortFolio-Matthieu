/*Color mode*/
const buttonModeBackgroundColor = document.getElementById("backgroundcolor-mode")
let darkMode = true;

/*si j'appuis sur le bouton buttonModeBackgroundColor  alors je déclenche le modeLight en configurant toutes les variables CSS
si le darkMode est activé, et inversement*/
buttonModeBackgroundColor.addEventListener("click", () => {
    if(!darkMode){
        document.documentElement.style.setProperty('--main-mode-backgroundcolor', "url(/img/logo/backgroundColor/sun.png)")
        document.documentElement.style.setProperty('--main-bg-color', "black")
        document.documentElement.style.setProperty('--main-text-shadow', "0px 0px 15px white")
        document.documentElement.style.setProperty('--main-text-color', "white")
        document.documentElement.style.setProperty('--main-containors', "rgb(40, 40, 38)")
        document.documentElement.style.setProperty('--main-containors-footer', "rgb(11, 11, 11)")
        darkMode = true;
    }else{
        document.documentElement.style.setProperty('--main-mode-backgroundcolor', "url(/img/logo/backgroundColor/moon.png)")
        document.documentElement.style.setProperty('--main-bg-color', "white")
        document.documentElement.style.setProperty('--main-text-shadow', "0px 0px 15px black")
        document.documentElement.style.setProperty('--main-text-color', "black")
        document.documentElement.style.setProperty('--main-containors', "rgb(147, 147, 141)")
        document.documentElement.style.setProperty('--main-containors-footer', "rgb(177, 175, 175)")
        darkMode = false;
    }
})

/*Language Mode*/
const buttonLanguageMode = document.getElementById("language-mode")
let frenchMode = true;
/*liste de tous les élements à modifier*/
const homeLinkHome = document.querySelector("#link-home")
const homeLinkAbout = document.querySelector("#link-about")
const homeLinkSkills = document.querySelector("#link-skills")
const homeLinkPf = document.querySelector("#link-pf")
const homeLinkContact = document.querySelector("#link-contact")
const homeH1First = document.querySelector("#h1-first")
const homeH1Second = document.querySelector("#h1-second")
const homeH1Third = document.querySelector("#h1-third")
const homeH1Fourth = document.querySelector("#h1-fourth")

const aboutH2 = document.querySelector("#about-h2")
const aboutP = document.querySelector("#about-p")
const aboutCv = document.querySelector("#about-cv")

const skillsH2 = document.querySelector("#skills-h2")
const skillsExp = document.querySelector("#skills-exp")
const skillsLanguage = document.querySelector("#skills-language")

const pfH2 = document.querySelector("#pf-h2")

const contactH3 = document.querySelector("#contact-h3")
const contactSend = document.querySelector("#contact-send")



/*si je clique sur buttonLanguageMode alors je déclenche le paramétrage de tous les textes avec les fichier english.json et français.json */
buttonLanguageMode.addEventListener("click", () => {
    
    if (frenchMode){
        /*je paramètre en anglais*/
        document.documentElement.style.setProperty('--main-mode-language', 'url(/img/logo/language/france.png)')
        homeLinkHome.textContent = english.home.Home
        homeLinkAbout.textContent = english.home.About
        homeLinkSkills.textContent = english.home.Skills
        homeLinkPf.textContent = english.home.Pf
        homeLinkContact.textContent = english.home.Contact
        homeH1First.textContent = english.home.First
        homeH1Second.textContent = english.home.Second
        homeH1Third.textContent = english.home.Third
        homeH1Fourth.innerHTML = english.home.Fourth
        aboutH2.textContent = english.about.aboutH2
        aboutP.innerHTML = english.about.aboutP
        aboutCv.textContent = english.about.aboutCv
        skillsH2.textContent = english.skills.skillsH2
        skillsExp.textContent = english.skills.skillsExp
        skillsLanguage.textContent = english.skills.skillsLanguage
        contactH3.textContent = english.contact.contactH3
        contactSend.textContent = english.contact.contactSend
        frenchMode = false;
    } else {
        /*je paramètre en français*/
        document.documentElement.style.setProperty('--main-mode-language', 'url(/img/logo/language/england.png)')
        homeLinkHome.textContent = french.home.Home
        homeLinkAbout.textContent = french.home.About
        homeLinkSkills.textContent = french.home.Skills
        homeLinkPf.textContent = french.home.Pf
        homeLinkContact.textContent = french.home.Contact
        homeH1First.textContent = french.home.First
        homeH1Second.textContent = french.home.Second
        homeH1Third.textContent = french.home.Third
        homeH1Fourth.innerHTML = french.home.Fourth
        aboutH2.textContent = french.about.aboutH2
        aboutP.innerHTML = french.about.aboutP
        aboutCv.textContent = french.about.aboutCv
        skillsH2.textContent = french.skills.skillsH2
        skillsExp.textContent = french.skills.skillsExp
        skillsLanguage.textContent = french.skills.skillsLanguage
        contactH3.textContent = french.contact.contactH3
        contactSend.textContent = french.contact.contactSend
        frenchMode = true;
    }
})
console.log(frenchMode)

