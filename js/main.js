window.addEventListener("load", function(){
    let burgerButton = document.querySelector(".header_burger");
    let nav = document.querySelector(".burger__nav");
    burgerButton.addEventListener("click", function(){        
        nav.classList.toggle("active");
        burgerButton.classList.toggle("active");
    })
})
