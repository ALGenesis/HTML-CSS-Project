const Nav = document.querySelector(".nav")
const MenuOpen = document.querySelector(".menu-open")
const MenuClose = document.querySelector(".menu-close")
const MenuHamburger = document.querySelector(".menu-hamburger")



MenuHamburger.addEventListener('click', ()=>{
    Nav.classList.toggle('on-phone');
    MenuOpen.classList.toggle('displayed');
    MenuClose.classList.toggle('displayed');
})

Nav.addEventListener('click', ()=>{
    Nav.classList.toggle('on-phone');
    MenuOpen.classList.toggle('displayed');
    MenuClose.classList.toggle('displayed');
})