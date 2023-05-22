// menu show hidden

const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('nav-toggle'),
    closeMenu = document.getElementById('nav-close');

// show
toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show');
});

//hide

closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show');
})

// remove menu

const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    navMenu.classList.remove('show');
}
navLink.forEach(n => n.addEventListener('click', linkAction));
