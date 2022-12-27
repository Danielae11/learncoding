let container = document.querySelector(".container");
let card = document.querySelector(".content");
let shoes = document.querySelector(".content img");
let text = document.querySelector(".details");
let button = document.querySelector(".box-button");
let circle = document.querySelector(".circle");

container.addEventListener("mousemove", (e) => {
    let yAxis = (window.innerHeight / 2 - e.pageY) / 22;
    let xAxis = (window.innerWidth / 2 - e.pageX) / 22;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

container.addEventListener("mouseenter", () => {
    card.style.transition = "none";
    shoes.style.transform = "rotateZ(100deg) translateZ(160px)";
    text.style.transform = "translateZ(140px)";
    button.style.transform = "translateZ(100px)";
    circle.style.transform = "translateZ(40px)";
});

container.addEventListener("mouseleave", () => {
    card.style.transition = "all 0.6s ease";
    card.style.transform = `rotateY(0deg)`;
    shoes.style.transform = "translateZ(0px)";
    text.style.transform = "translateZ(0px)";
    button.style.transform = "translateZ(0px)";
    circle.style.transform = "translateZ(0px)";
});