// DOM
const navButton = document.getElementById('nav-button');
const aboutBtn = document.getElementById('about-btn');

// Add class to hamburger icon
function hamburgerIcon(){
    navButton.classList.toggle('header__change');
}

// Open subpage
function openSubpage(){
    location.href = "about.html";
}


// Events listeners
navButton.addEventListener('click', hamburgerIcon);
aboutBtn.addEventListener('click',openSubpage);