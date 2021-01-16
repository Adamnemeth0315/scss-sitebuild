'use strict';

const navbar = document.querySelector('.nav');
const sticky = navbar.offsetTop;
const link = document.querySelectorAll('.nav__link');
const openButtonPrivacy = document.querySelector('.modal__open-privacy');
const openButtonTerms = document.querySelector('.modal__open-terms');
const openButtonFaq = document.querySelector('.modal__open-faq');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal__close');
const closeButton = document.querySelector('.closebtn');

//Modal
const giveClassFunction = (ev) => {
    ev.preventDefault();
    modal.setAttribute('class', 'modal showModal');
}
const takeAwayClassFunction = () => modal.setAttribute('class', 'modal');

openButtonPrivacy.addEventListener('click', giveClassFunction);
openButtonTerms.addEventListener('click', giveClassFunction);
openButtonFaq.addEventListener('click', giveClassFunction);

closeModal.addEventListener('click', takeAwayClassFunction);
closeButton.addEventListener('click', takeAwayClassFunction);

modal.addEventListener('click', takeAwayClassFunction);

//Navbar
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

