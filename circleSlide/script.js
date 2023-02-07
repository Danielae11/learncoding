const buttonShoeRed = document.querySelector(".chooseRed");
const buttonShoeGreen = document.querySelector(".chooseGreen");
const buttonShoeBlue = document.querySelector(".chooseBlue");
const buttonShoe4 = document.querySelector(".choose4");
const containerShoe = document.querySelector(".rectangel");
const circleShoe = document.querySelectorAll(".circle");

buttonShoeRed.addEventListener("click", () => {
    containerShoe.style.transform = "translateY(-50%) rotateZ(45deg)";

});
buttonShoeGreen.addEventListener("click", () => {
    containerShoe.style.transform = "translateY(-50%) rotateZ(135deg)";
});
buttonShoeBlue.addEventListener("click", () => {
    containerShoe.style.transform = "translateY(-50%) rotateZ(225deg)";
});
buttonShoe4.addEventListener("click", () => {
    containerShoe.style.transform = "translateY(-50%) rotateZ(315deg)";
});

circleShoe.forEach((slide, index) => {
    slide.addEventListener("click", function() {
        changeDots(this);
        nextSlide(index);
    });
});

function changeDots(dots) {
    circleShoe.forEach(slide => {
        slide.classList.remove("active");
    });
    dots.classList.add("active");
}