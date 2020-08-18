// DOM elements
const navButton = document.getElementById('nav-button');
const aboutBtn = document.getElementById('about-btn');
const scrollTop = document.querySelector("#scrollToTop");
const form = document.getElementById("form");
const name = document.getElementById("name");
const addressEmail = document.getElementById("emailAdd");
const phoneNumber = document.getElementById("phoneNum");
const message = document.getElementById('message');


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
// Show error message and border on input fields
function showError(input,message){
    const formControl = input.parentElement;
    formControl.className = 'contact__form-control--error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}
// Show success border on input fields
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'contact__form-control--success';
}

// Checking if the field is empty

function checkRequired(inputArr) {
    inputArr.forEach((input)=>{
        if(input.value.trim() === ''){
            showError(input,"This field is required!");
        }
        else {
            showSuccess(input);
        }
    });
}

// Checking if the email is valid

function validateEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())){
        showSuccess(input);
    }else{
        showError(input,'Email is not valid!');
    }
}




// Events listeners
navButton.addEventListener('click', hamburgerIcon);
aboutBtn.addEventListener('click',openSubpage);
scrollTop.addEventListener('click', scrollToTop);
form.addEventListener('click', (e)=>{
    e.preventDefault();
    checkRequired([name,addressEmail,phoneNumber,message]);
    validateEmail(addressEmail); });
