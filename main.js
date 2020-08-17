// DOM elements
const navButton = document.getElementById('nav-button');
const aboutBtn = document.getElementById('about-btn');
const scrollTop = document.querySelector("#scrollToTop");


// Add class to hamburger icon
function hamburgerIcon(){
    navButton.classList.toggle('header__change');
}

// Open subpage
function openSubpage(){
    location.href = "about.html";
}

//Scroll To the top button
function scrollToTop(){
    $('html,body').animate({scrollTop:0}, "slow");
}



// Events listeners
navButton.addEventListener('click', hamburgerIcon);
aboutBtn.addEventListener('click',openSubpage);
scrollTop.addEventListener('click', scrollToTop);
