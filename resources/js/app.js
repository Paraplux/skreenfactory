/**
 * 
 * @param {Function} callback 
 * @param {number} delay
 * @return {Function} 
 */
const debounce = function(callback, delay){
    let timer;
    return function(){
        let args = arguments;
        let context = this;
        clearTimeout(timer);
        timer = setTimeout(function(){
            callback.apply(context, args);
        }, delay)
    }
}


const navbar = document.querySelector(".navbar");
const navbarLogo = document.querySelector(".navbar .logo");
let lastScrollTop = 0
window.addEventListener('scroll', debounce(function() {
    let st = window.pageYOffset || document.documentElement.scrollTop;
    if(window.pageYOffset <= 150) {
        //Barre proche du haut de la page
        navbar.classList.remove("down");
        navbarLogo.setAttribute("src", "../resources/images/yellow-logo.png");
    } else if (st > lastScrollTop) {
    
        //Scroll vers le bas
        navbar.classList.add("down");
        navbarLogo.setAttribute("src", "../resources/images/logo-s.png");
    }
    lastScrollTop = st
}, false));

if(window.pageYOffset <= 150) {
    //Barre proche du haut de la page
    navbar.classList.remove("down");
    navbarLogo.setAttribute("src", "../resources/images/yellow-logo.png");
} else {
    navbar.classList.add("down");
    navbarLogo.setAttribute("src", "../resources/images/logo-s.png");
    }



const navbarIcon = document.querySelector(".navbar-icon");
const sidebar = document.querySelector(".sidebar");
const siteCache = document.querySelector(".site-cache");
navbarIcon.addEventListener("click", function(e) {
    e.preventDefault();
    sidebar.classList.toggle("active");
    siteCache.classList.toggle("active");
})
siteCache.addEventListener("click", function(e) {
    e.preventDefault();
    sidebar.classList.toggle("active");
    siteCache.classList.toggle("active");
})


document.querySelectorAll(".footer .icons").forEach(function(element){
    element.addEventListener("mouseenter", function(e){
        var path = this.querySelector("object").getSVGDocument().querySelectorAll('path');
        path.forEach(function(eachPath){
            eachPath.setAttribute("fill", "#FFCC00")
            eachPath.style.cursor = "pointer";
        })
    })
})
document.querySelectorAll(".footer .icons").forEach(function(element){
    element.addEventListener("mouseleave", function(e){
        var path = this.querySelector("object").getSVGDocument().querySelectorAll('path');
        path.forEach(function(eachPath){
            eachPath.setAttribute("fill", "#808080")
        })
    })
})

const dynamicPlaceholders = function(className) {
    const placeholders = document.querySelectorAll(className);
    const inputs = document.querySelectorAll(".contact-form input, .contact-form textarea");
    placeholders.forEach(function (elem) {
        elem.addEventListener("click", function () {
            this.parentElement.firstElementChild.focus();
        });
    });
    inputs.forEach(function (elem) {
        elem.addEventListener("focus", function () {
            const placeholder = this.parentElement.lastElementChild;
            placeholder.classList.add('active');
        });
    });
    inputs.forEach(function (elem) {
        elem.addEventListener("focusout", function () {
            const placeholder = this.parentElement.lastElementChild;
            if (this.value === "") {
                placeholder.classList.remove("active");
            }
        });
    });
}

dynamicPlaceholders(".placeholder")