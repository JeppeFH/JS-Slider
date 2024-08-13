/*JS-Slider*/

/* Variabler */
const SliderOutput = document.querySelector(".slides");
const slides = document.querySelectorAll(".single-slide");

let slidesLength = slides.length - 1; /*index'et på sidste billede i slideren*/

//variabel der siger at man skal starte med det første billede //
let currentImageIndex = 0;

/* function der bestemmer hvilket billede der vises */
function setActiveSlide() {
  slides.forEach((slide) => {
    slide.classList.remove(".active");
  });
}
