gsap.registerPlugin(Flip);
function indicatorSlide() {
    const button = document.querySelectorAll(".box-button");
    const indicatorNav = document.querySelector(".indicator");
    const contentSlider = document.querySelectorAll(".content");
    let current = 0;

    button.forEach((slide, index) => {
        slide.addEventListener("click", function() {
            getIndicator(this);
            nextPage(index);
        });
    });

    function getIndicator(actived) {
        button.forEach(color => {
            color.classList.remove("active");
        });
        actived.classList.add("active");
        const state = Flip.getState(indicatorNav);
        actived.appendChild(indicatorNav);
        Flip.from(state, {duration: 0.8, absolute: true, ease: "elastic.out(1,0.5)"})
    }

    function nextPage(pageNumber) {
        const currentPage = contentSlider[current];
        const nextPage = contentSlider[pageNumber];
        const tl = new TimelineMax();

        tl
            .fromTo(currentPage, 0.5, {x: "0%"}, {x: "100%"})
            .fromTo(nextPage, 0.5, {x: "100%"}, {x: "0%"})

    current = pageNumber;
    }
}
indicatorSlide();