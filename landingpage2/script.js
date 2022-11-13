//CARAOUSEL DOCTOR STRANGE

const dot = document.querySelectorAll(".dot");
const containerSlide = document.querySelectorAll(".container-slide");

let current = 0;

dot.forEach((slide, index) => {
    slide.addEventListener("click", function() {
        changeDots(this);
        nextSlide(index);
    });
});

function changeDots(dots) {
    dot.forEach(slide => {
        slide.classList.remove("active");
    });
    dots.classList.add("active");
}

function nextSlide(pageNumber) {
    const nextPage = containerSlide[pageNumber];
    const currentPage = containerSlide[current];

    nextPage.style.transform = "translateX(0%)";
    currentPage.style.transform = "translateX(-100%)";

    current = pageNumber;
}

//CARAOUSEL RECOMENDED

var slideIndex = 1;
showSlide(slideIndex);

function onSlide(n) {
    showSlide(slideIndex += n)
}

function showSlide(n) {
    var i;
    var slides = document.getElementsByClassName("recomended-slider");

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}