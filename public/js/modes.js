const modes= {

    buttons : {
        /*button color mode*/
        buttonModeBackgroundColor : document.getElementById("backgroundcolor-mode"),
        /*button language Mode*/
        buttonLanguageMode : document.getElementById("language-mode")
    },

    initListeners: function() {
        /*listener setted to change the color mode*/
        modes.buttons.buttonModeBackgroundColor.addEventListener("click",modes.actions.changeColor),
         /*listener setted to change the language mode */
        modes.buttons.buttonLanguageMode.addEventListener("click",modes.actions.changeLanguage)
    },

    initialParameters : {
        /*the pf is setted with a dark and french mode*/
        darkMode : false,
        frenchMode : true,
    },

    actions: {
        changeColor() {
            if(!modes.initialParameters.darkMode){
                document.documentElement.style.setProperty('--main-mode-backgroundcolor', "url(/img/logo/backgroundColor/sun.png)")
                document.documentElement.style.setProperty('--main-bg-color', "black")
                document.documentElement.style.setProperty('--main-text-shadow', "0px 0px 15px white")
                document.documentElement.style.setProperty('--main-text-color', "white")
                document.documentElement.style.setProperty('--main-containors', "rgb(40, 40, 38)")
                document.documentElement.style.setProperty('--main-containors-footer', "rgb(11, 11, 11)")
                modes.initialParameters.darkMode = true;
            }else{
                document.documentElement.style.setProperty('--main-mode-backgroundcolor', "url(/img/logo/backgroundColor/moon.png)")
                document.documentElement.style.setProperty('--main-bg-color', "white")
                document.documentElement.style.setProperty('--main-text-shadow', "0px 0px 15px black")
                document.documentElement.style.setProperty('--main-text-color', "black")
                document.documentElement.style.setProperty('--main-containors', "rgb(147, 147, 141)")
                document.documentElement.style.setProperty('--main-containors-footer', "rgb(177, 175, 175)")
                modes.initialParameters.darkMode = false;
            }
        },

        changeLanguage () {
            const {homeLinkHome, homeLinkAbout,homeLinkSkills,homeLinkPf,homeLinkContact,homeH1First,homeH1Second,homeH1Third,homeH1Fourth,
                aboutH2,aboutP,aboutCv,skillsH2,skillsExp,skillsLanguage,pfH2, pfCardOne, pfCardTwo, pfCardThree,pfCardFour,pfCardFive, detailButtons, 
                sitesLink, contactH3,contactSend} = modes.objectsLanguageToChange
            const {Home,About,Skills,Pf,Contact,First,Second,Third,Fourth,h2A,pf,cv,h2S,exp,language,h2P, cardOne,cardTwo,cardThree,cardFour,cardFive, details,
                 siteWeb, h3,send} = english
            const {HomeF,AboutF,SkillsF,PfF,ContactF,FirstF,SecondF,ThirdF,FourthF,h2AF,pfF,cvF,h2SF,expF,languageF,h2PF, cardOneF,cardTwoF,cardThreeF,
                 cardFourF,cardFiveF, detailsF,siteWebF, h3F,sendF} = french
               
            if (modes.initialParameters.frenchMode){
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
                aboutP.innerHTML = pf
                aboutCv.textContent = cv

                skillsH2.textContent = h2S
                skillsExp.textContent = exp
                skillsLanguage.textContent = language

                pfH2.textContent = h2P
                pfCardOne.innerHTML = cardOne
                pfCardTwo.innerHTML = cardTwo
                pfCardThree.innerHTML = cardThree
                pfCardFour.innerHTML = cardFour
                pfCardFive.innerHTML = cardFive
                detailButtons.forEach((button) => {
                    button.textContent = details
                })
                sitesLink.forEach((site) => {
                    site.textContent = siteWeb
                })

                contactH3.textContent = h3
                contactSend.value = send

                modes.initialParameters.frenchMode = false;
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
                aboutP.innerHTML = pfF
                aboutCv.textContent = cvF

                skillsH2.textContent = h2SF
                skillsExp.textContent = expF
                skillsLanguage.textContent = languageF

                pfH2.textContent = h2PF
                pfCardOne.innerHTML = cardOneF
                pfCardTwo.innerHTML = cardTwoF
                pfCardThree.innerHTML = cardThreeF
                pfCardFour.innerHTML = cardFourF
                pfCardFive.innerHTML = cardFiveF
                detailButtons.forEach((button) => {
                    button.textContent = detailsF
                })
                sitesLink.forEach((site) => {
                    site.textContent = siteWebF
                })

                contactH3.textContent = h3F
                contactSend.value = sendF

                modes.initialParameters.frenchMode = true;
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
        pfCardOne : document.getElementById("pf-cardOne-text"),
        pfCardTwo : document.getElementById("pf-cardTwo-text"),
        pfCardThree : document.getElementById("pf-cardThree-text"),
        pfCardFour : document.getElementById("pf-cardFour-text"),
        pfCardFive : document.getElementById("pf-cardFive-text"),
        detailButtons: document.querySelectorAll(".details"),
        sitesLink:document.querySelectorAll(".site"),

        contactH3 : document.querySelector("#contact-h3"),
        contactSend : document.querySelector("#contact-send"),

    },
}

// when the loading is finish launch modes.init
document.addEventListener('DOMContentLoaded', modes.initListeners );





