
const nav = {

    init:function(){
        nav.Listeners();
        setTimeout(nav.actionListener.animationNavBar, 3500);
      },
    
    objectsNavbar :{
        button : document.querySelector(".menu-nav-button"),
        cross : document.getElementById("logo-cross"),
        navBar: document.querySelector(".menu-nav"),
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

document.addEventListener('DOMContentLoaded', nav.init );