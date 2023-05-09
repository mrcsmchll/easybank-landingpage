const body = document.querySelector("body")
const btnHamburger = document.querySelector("#btnHamburger");
const header = document.querySelector(".header");
const fadeElements = document.querySelectorAll(".has-fade");

btnHamburger.addEventListener("click", _ => {

    if (!header.classList.contains("open")) {//when open ham-menu
        body.classList.add("no-scroll");
        header.classList.add("open");
        fadeElements.forEach(el => {
            el.classList.add("fade-in");
            el.classList.remove("fade-out");
        })
    } else {//when close ham-menu
        body.classList.remove("no-scroll");
        header.classList.remove("open");
        fadeElements.forEach(el => {
            el.classList.remove("fade-in");
            el.classList.add("fade-out");
        })
    }
})

