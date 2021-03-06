"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function(err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}

// place your code below


console.log(`Hello world!`);

const changeButton = document.querySelector('.change--js')
const changeColor = document.querySelector('.main__header--js')


changeButton.addEventListener('click', (e) => {
    changeColor.innerHTML = 'click click';
    changeColor.classList.toggle('main__header--red')
})






const hamburgerButton = document.querySelector('.header__hamburger--js')



hamburgerButton.addEventListener('click', (e) => {
    const list = document.querySelector('.navigation__list--js')
    list.classList.toggle('navigation__list--visible')
})