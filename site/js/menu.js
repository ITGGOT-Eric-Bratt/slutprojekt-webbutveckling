function toggleMenu(){
    var element = document.querySelector(".menu");
    element.classList.toggle("show");

    element = document.querySelector("main");
    element.classList.toggle("fade")

    element = document.querySelector(".open");
    element.classList.toggle("opened");
}

function toggleMenu1(){
    var element = document.querySelector(".mobilmenu");
    element.classList.toggle("show");

    element = document.querySelector("header");
    element.classList.toggle("fade")
}