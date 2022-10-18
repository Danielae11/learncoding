let currentColor = document.querySelector(".current-container");
let nextColor = document.querySelector(".container");
let toggle = document.querySelector(".toggle");
let active = document.querySelectorAll("a");
let line = document.querySelectorAll(".line");

toggle.addEventListener("click", () => {
    toggle.classList.toggle("add");
    currentColor.style.height = "0vh";
    nextColor.style.height = "100vh";
    for (let i = 0; i < active.length; i++) {
        active[i].classList.toggle("active");
    }
    for (let i = 0; i < line.length; i++) {
        line[i].classList.toggle("add");
    }
});