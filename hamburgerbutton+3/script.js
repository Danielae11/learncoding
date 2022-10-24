let toggle = document.querySelector(".toggle");
let circle = document.querySelectorAll("a");
let position = document.querySelectorAll("section");
let line = document.querySelectorAll(".line");

toggle.addEventListener("click", () => {
    toggle.classList.toggle("add");
    for (let i = 0; i < position.length; i++) {
        position[i].classList.toggle("active");
    }
    for (let i = 0; i < position.length; i++) {
        circle[i].classList.toggle("active");
    }
    for (let i = 0; i < line.length; i++) {
        line[i].classList.toggle("add");
    }
});

for (let i = 0; i < position.length; i++) {
    position[i].addEventListener("mouseenter", withPerspective);
    position[i].addEventListener("mouseleave", withoutPerspective);
};

function withPerspective (perspective) {
    let enter = perspective.target;
    let circle = enter.querySelectorAll("a");
    let icon = enter.querySelectorAll("i");
    let text = enter.querySelectorAll("h1");
    for (let i = 0; i < circle.length; i++) {
        circle[i].style.transform = "rotateX(45deg)";
        circle[i].style.backgroundColor = "#F4DDDB";
        icon[i].style.transform = "rotateX(-40deg) translateZ(190px)";
        text[i].style.transform = "rotateX(-40deg) translateZ(120px)";
        text[i].style.opacity = "1";
    }
}

function withoutPerspective (noperspective) {
    let enter = noperspective.target;
    let circle = enter.querySelectorAll("a");
    let icon = enter.querySelectorAll("i");
    let text = enter.querySelectorAll("h1");
    for (let i = 0; i < circle.length; i++) {
        circle[i].style.transform = "rotateX(0deg)";
        circle[i].style.backgroundColor = "#FEB8C8";
        icon[i].style.transform = "rotateX(0deg) translateZ(0px)";
        text[i].style.transform = "rotateX(0deg) translateZ(0px)";
        text[i].style.opacity = "0";
    }
}