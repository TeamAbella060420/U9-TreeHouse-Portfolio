$(document).foundation();

// ============
// TO TOP BUTTON
// ============
// Display the "to top" button only when the user has scrolled down the page 300px
window.onscroll = function() {
    displayToTopBtn();
};

function displayToTopBtn() {
    const toTheTopBtn = document.getElementById('top');
    // Check scroll position
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        toTheTopBtn.style.display = 'block';
    } else {
        toTheTopBtn.style.display = 'none';
    }
}

// ============
// HERO
// ============
// Typed library by https://mattboldt.com/demos/typed-js/
const typed = new Typed('#typed', {
    strings: ["JavaScript...", "HTML5...", "CSS3...", "Front-End Developer."],
    typeSpeed: 100,
    smartBackspace: true,
    startDelay: 200});
