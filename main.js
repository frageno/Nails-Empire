// DOM
const navButton = document.getElementById('nav-button');

// Add class to hamburger icon
function hamburgerIcon(){
    navButton.classList.toggle('header__change');
}


// Events listeners
navButton.addEventListener('click', hamburgerIcon);