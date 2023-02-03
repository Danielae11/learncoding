const bounch = document.querySelectorAll(".bounching");
    
const getBounching = () => {
    const trigger = (window.innerHeight / 4) * 4;
    bounch.forEach((boxs) => {
        const boxTop = boxs.getBoundingClientRect().top;
        if (boxTop < trigger) {
            boxs.classList.add("show");
        }else{
            boxs.classList.remove("show");
        }
    });
};

window.addEventListener("scroll", getBounching);