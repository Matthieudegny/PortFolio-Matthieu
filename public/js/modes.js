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
            const {homeLinkHome, homeLinkAbout,homeLinkSkills,homeLinkPf,homeLinkContact,homeH1First,homeH1Second,homeH1Third,homeH1Fourth,
                aboutH2,aboutP,aboutCv,skillsH2,skillsExp,skillsLanguage,contactH3,contactSend} = models.objectsLanguageToChange
            const {Home,About,Skills,Pf,Contact,First,Second,Third,Fourth} = english.home
            const {h2A,p,cv} = english.about
            const {h2S,exp,language} = english.skills
            const {h3,send} = english.contact
            const {HomeF,AboutF,SkillsF,PfF,ContactF,FirstF,SecondF,ThirdF,FourthF} = french.home
            const {h2AF,pF,cvF} = french.about
            const {h2SF,expF,languageF} = french.skills
            const {h3F,sendF} = french.contact
            if (models.initialParameters.frenchMode){
                /*english js is used here*/
                document.documentElement.style.setProperty('--main-mode-language', 'url(/img/logo/language/france.png)')
                homeLinkHome.textContent = Home
                homeLinkAbout.textContent = About
                homeLinkSkills.textContent = Skills
                homeLinkPf.textContent = Pf
                homeLinkContact.textContent = Contact
                homeH1First.textContent = First
                homeH1Second.textContent = Second
                homeH1Third.textContent = Third
                homeH1Fourth.innerHTML = Fourth
                aboutH2.textContent = h2A
                aboutP.innerHTML = p
                aboutCv.textContent = cv
                skillsH2.textContent = h2S
                skillsExp.textContent = exp
                skillsLanguage.textContent = language
                contactH3.textContent = h3
                contactSend.value = send
                models.initialParameters.frenchMode = false;
            } else {
                 /*french js is used here*/
                document.documentElement.style.setProperty('--main-mode-language', 'url(/img/logo/language/england.png)')
                homeLinkHome.textContent = HomeF
                homeLinkAbout.textContent = AboutF
                homeLinkSkills.textContent = SkillsF
                homeLinkPf.textContent = PfF
                homeLinkContact.textContent = ContactF
                homeH1First.textContent = FirstF
                homeH1Second.textContent = SecondF
                homeH1Third.textContent = ThirdF
                homeH1Fourth.innerHTML = FourthF
                aboutH2.textContent = h2AF
                aboutP.innerHTML = pF
                aboutCv.textContent = cvF
                skillsH2.textContent = h2SF
                skillsExp.textContent = expF
                skillsLanguage.textContent = languageF
                contactH3.textContent = h3F
                contactSend.value = sendF
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




const nav = {

    init:function(){
        nav.Listeners();
      },

    objectsNavbar :{
        button : document.querySelector(".menu-nav-button"),
        cross : document.getElementById("logo-cross"),
        navBar: document.querySelector(".menu-nav")
    },

    Listeners: function() {
        nav.objectsNavbar.button.addEventListener("click", nav.actionListener.animationNavBar)
    },

    actionListener:{
        animationNavBar: function () {
            const {navBar, button,cross} = nav.objectsNavbar
            navBar.classList.toggle("menu-nav-animation")
            button.classList.toggle("menu-nav-button-animation")
            cross.classList.toggle("logoCross-desappear")
          }
    }
}

document.addEventListener('DOMContentLoaded', nav.initListeners );