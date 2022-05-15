
const nav = {

    init:function(){
        nav.Listeners();
        /*3.5s after the loading of the dom,i put away the navBar,still available with the button*/
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
        /*the navBar appear and desappear with this animation*/
        animationNavBar: function () {
            const {navBar, button,cross} = nav.objectsNavbar
            navBar.classList.toggle("menu-nav-animation")
            button.classList.toggle("menu-nav-button-animation")
            cross.classList.toggle("logoCross-desappear")
          }
    }
}

document.addEventListener('DOMContentLoaded', nav.init );