const models= {

    buttons : {
        /*button color mode*/
        buttonModeBackgroundColor : document.getElementById("backgroundcolor-mode"),
        /*button language Mode*/
        buttonLanguageMode : document.getElementById("language-mode")
    },

    initListeners: function() {
        /*listener setted to change the color mode*/
        models.buttons.buttonModeBackgroundColor.addEventListener("click",models.actions.changeColor),
         /*listener setted to change the language mode */
        models.buttons.buttonLanguageMode.addEventListener("click",models.actions.changeLanguage)
    },

    initialParameters : {
        /*the pf is setted with a dark and french mode*/
        darkMode : true,
        frenchMode : true,
    },

    actions: {

        changeColor() {
            if(!models.initialParameters.darkMode){
                document.documentElement.style.setProperty('--main-mode-backgroundcolor', "url(/img/logo/backgroundColor/sun.png)")
                document.documentElement.style.setProperty('--main-bg-color', "black")
                document.documentElement.style.setProperty('--main-text-shadow', "0px 0px 15px white")
                document.documentElement.style.setProperty('--main-text-color', "white")
                document.documentElement.style.setProperty('--main-containors', "rgb(40, 40, 38)")
                document.documentElement.style.setProperty('--main-containors-footer', "rgb(11, 11, 11)")
                models.initialParameters.darkMode = true;
            }else{
                document.documentElement.style.setProperty('--main-mode-backgroundcolor', "url(/img/logo/backgroundColor/moon.png)")
                document.documentElement.style.setProperty('--main-bg-color', "white")
                document.documentElement.style.setProperty('--main-text-shadow', "0px 0px 15px black")
                document.documentElement.style.setProperty('--main-text-color', "black")
                document.documentElement.style.setProperty('--main-containors', "rgb(147, 147, 141)")
                document.documentElement.style.setProperty('--main-containors-footer', "rgb(177, 175, 175)")
                models.initialParameters.darkMode = false;
            }
        },

        changeLanguage () {
            if (models.initialParameters.frenchMode){
                /*english js is used here*/
                document.documentElement.style.setProperty('--main-mode-language', 'url(/img/logo/language/france.png)')
                models.objectsLanguageToChange.homeLinkHome.textContent = english.home.Home
                models.objectsLanguageToChange.homeLinkAbout.textContent = english.home.About
                models.objectsLanguageToChange.homeLinkSkills.textContent = english.home.Skills
                models.objectsLanguageToChange.homeLinkPf.textContent = english.home.Pf
                models.objectsLanguageToChange.homeLinkContact.textContent = english.home.Contact
                models.objectsLanguageToChange.homeH1First.textContent = english.home.First
                models.objectsLanguageToChange.homeH1Second.textContent = english.home.Second
                models.objectsLanguageToChange.homeH1Third.textContent = english.home.Third
                models.objectsLanguageToChange.homeH1Fourth.innerHTML = english.home.Fourth
                models.objectsLanguageToChange.aboutH2.textContent = english.about.aboutH2
                models.objectsLanguageToChange.aboutP.innerHTML = english.about.aboutP
                models.objectsLanguageToChange.aboutCv.textContent = english.about.aboutCv
                models.objectsLanguageToChange.skillsH2.textContent = english.skills.skillsH2
                models.objectsLanguageToChange.skillsExp.textContent = english.skills.skillsExp
                models.objectsLanguageToChange.skillsLanguage.textContent = english.skills.skillsLanguage
                models.objectsLanguageToChange.contactH3.textContent = english.contact.contactH3
                models.objectsLanguageToChange.contactSend.value = english.contact.contactSend
                models.initialParameters.frenchMode = false;
            } else {
                 /*french js is used here*/
                document.documentElement.style.setProperty('--main-mode-language', 'url(/img/logo/language/england.png)')
                models.objectsLanguageToChange.homeLinkHome.textContent = french.home.Home
                models.objectsLanguageToChange.homeLinkAbout.textContent = french.home.About
                models.objectsLanguageToChange.homeLinkSkills.textContent = french.home.Skills
                models.objectsLanguageToChange.homeLinkPf.textContent = french.home.Pf
                models.objectsLanguageToChange.homeLinkContact.textContent = french.home.Contact
                models.objectsLanguageToChange.homeH1First.textContent = french.home.First
                models.objectsLanguageToChange.homeH1Second.textContent = french.home.Second
                models.objectsLanguageToChange.homeH1Third.textContent = french.home.Third
                models.objectsLanguageToChange.homeH1Fourth.innerHTML = french.home.Fourth
                models.objectsLanguageToChange.aboutH2.textContent = french.about.aboutH2
                models.objectsLanguageToChange.aboutP.innerHTML = french.about.aboutP
                models.objectsLanguageToChange.aboutCv.textContent = french.about.aboutCv
                models.objectsLanguageToChange.skillsH2.textContent = french.skills.skillsH2
                models.objectsLanguageToChange.skillsExp.textContent = french.skills.skillsExp
                models.objectsLanguageToChange.skillsLanguage.textContent = french.skills.skillsLanguage
                models.objectsLanguageToChange.contactH3.textContent = french.contact.contactH3
                models.objectsLanguageToChange.contactSend.value = french.contact.contactSend
                models.initialParameters.frenchMode = true;
            }
        },
    },

    objectsLanguageToChange: {
        /*every elements of the html file,to change*/
        homeLinkHome : document.querySelector("#link-home"),
        homeLinkAbout : document.querySelector("#link-about"),
        homeLinkSkills : document.querySelector("#link-skills"),
        homeLinkPf : document.querySelector("#link-pf"),
        homeLinkContact : document.querySelector("#link-contact"),
        homeH1First : document.querySelector("#h1-first"),
        homeH1Second : document.querySelector("#h1-second"),
        homeH1Third : document.querySelector("#h1-third"),
        homeH1Fourth : document.querySelector("#h1-fourth"),

        aboutH2 : document.querySelector("#about-h2"),
        aboutP : document.querySelector("#about-p"),
        aboutCv : document.querySelector("#about-cv"),

        skillsH2 : document.querySelector("#skills-h2"),
        skillsExp : document.querySelector("#skills-exp"),
        skillsLanguage : document.querySelector("#skills-language"),

        pfH2 : document.querySelector("#pf-h2"),

        contactH3 : document.querySelector("#contact-h3"),
        contactSend : document.querySelector("#contact-send"),

    },
}

// when the loading is finish launch models.init
document.addEventListener('DOMContentLoaded', models.initListeners );




