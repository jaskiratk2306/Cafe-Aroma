// script.js

// Smooth Scroll Animation for Navbar Links

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({
            behavior: 'smooth'
        });

    });

});


// Navbar Background Change on Scroll

window.addEventListener('scroll', function () {

    const navbar = document.querySelector('.navbar');

    if(window.scrollY > 50){
        navbar.style.background = "#2b1b17";
        navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.3)";
    }
    else{
        navbar.style.background = "#3e2723";
        navbar.style.boxShadow = "none";
    }

});


// Simple Welcome Alert

window.addEventListener('load', function(){

    setTimeout(() => {

        alert("Welcome to Café Aroma ☕");

    }, 1000);

});


// Menu Card Hover Effect using JavaScript

const cards = document.querySelectorAll('.menu-card');

cards.forEach(card => {

    card.addEventListener('mouseenter', () => {

        card.style.transform = "scale(1.05)";
        card.style.transition = "0.3s";

    });

    card.addEventListener('mouseleave', () => {

        card.style.transform = "scale(1)";

    });

});


// Dynamic Footer Year

const footer = document.querySelector("footer p");

const year = new Date().getFullYear();

footer.innerHTML = `© ${year} Café Aroma | All Rights Reserved`;