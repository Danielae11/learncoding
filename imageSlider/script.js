



const sliderImages = document.querySelector('.slider-images');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const imageWidth = document.querySelector('.slider-images img').clientWidth;
let counter = 0;

nextButton.addEventListener('click', () => {
  if (counter < sliderImages.childElementCount - 1) {
    counter++;
    sliderImages.style.transform = `translateX(-${imageWidth * counter}px)`;
  }
});

prevButton.addEventListener('click', () => {
  if (counter > 0) {
    counter--;
    sliderImages.style.transform = `translateX(-${imageWidth * counter}px)`;
  }
});












