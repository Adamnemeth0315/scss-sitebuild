'use strict';

const navbar = document.querySelector('.nav');
const sticky = navbar.offsetTop;
const link = document.querySelectorAll('.nav__link');


function stickyNavBarFunction() {
    if (window.pageYOffset > sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}

function stickyNavBarFunction() {
    if (window.pageYOffset = sticky) {
        navbar.classList.remove("sticky");
    } else {
        navbar.classList.add("sticky");
    }
}

window.addEventListener('scroll', stickyNavBarFunction);

