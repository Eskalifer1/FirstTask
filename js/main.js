window.addEventListener("load", function(){
    let burgerButton = document.querySelector(".header_burger");
    let nav = document.querySelector(".navigation");
    burgerButton.addEventListener("click", function(){        
        nav.classList.toggle("active");
        burgerButton.classList.toggle("active");
    });

    let anchor = document.querySelector('.header__bottom');
    anchor.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector("#cap").scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});
