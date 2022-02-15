const burger = document.querySelector(".burgerMenu");
const navMenu = document.querySelector(".nav-menu");
const subNavCat = document.querySelector("#category-nav-link");
const list = document.querySelector(".navbar ul li");


burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    navMenu.classList.toggle("active");
    list.classList.remove("active");

} )


subNavCat.addEventListener("click", () => {
    list.classList.toggle("active");
} )


document.querySelectorAll(".sub-nav li").forEach(n => n.
    addEventListener("click", () =>{
        burger.classList.remove("active"); 
        navMenu.classList.remove("active"); 
        list.classList.remove("active");
    }
))