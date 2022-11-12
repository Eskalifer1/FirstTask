
let burgerButton = document.querySelector(".header_burger");
let nav = document.querySelector(".navigation");
let body = document.querySelector("body");
burgerButton.addEventListener("click", function(){        
    nav.classList.toggle("active");
    burgerButton.classList.toggle("active");
    body.classList.toggle("lock");
});

let anchor = document.querySelector('.header__bottom');
anchor.addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector("#cap").scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});
