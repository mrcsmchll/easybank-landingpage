const btnHamburger = document.querySelector("#btnHamburger");

btnHamburger.addEventListener("click", _ => {
    !btnHamburger.classList.contains("open") ? btnHamburger.classList.add("open") : btnHamburger.classList.remove("open");
})

