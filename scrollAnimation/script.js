function animationScroll() {
    const image1 = document.querySelector(".image1");
    const image2 = document.querySelector(".image2");
    const image3 = document.querySelector(".image3");

    if (this.scrollY > this.innerHeight / 5) {
        image1.classList.add("show");
        image2.classList.add("show");
        image3.classList.add("show");
    } else {
        image1.classList.remove("show");
        image2.classList.remove("show");
        image3.classList.remove("show");
    }
}

window.addEventListener("scroll", animationScroll);