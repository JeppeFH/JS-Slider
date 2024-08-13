/*JS-Slider*/

/* Variabler */
const SliderOutput = document.querySelector(".slides");
const slides = document.querySelectorAll(".single-slide");

/*index'et på sidste billede i slideren -1 [0, 1, 2]*/
let slidesLength = slides.length - 1;

//variabel der siger at man skal starte med det første billede //
let currentImageIndex = 0;

/* function der bestemmer hvilket billede der vises */
function setActiveSlide(index) {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  slides[index].classList.add("active");
}

function next() {
  if (currentImageIndex >= slidesLength) {
    currentImageIndex = 0;
  } else {
    currentImageIndex += 1;
  }

  setActiveSlide(currentImageIndex);
}

setInterval(next, 2000);
setActiveSlide(currentImageIndex);
