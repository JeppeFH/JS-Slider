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

/* function der laver slidereffect */
function next() {
  if (currentImageIndex >= slidesLength) {
    currentImageIndex = 0;
  } else {
    currentImageIndex += 1;
  }

  setActiveSlide(currentImageIndex);
}

/* sørger for at billedet skifter hver 3 sekund */
setInterval(next, 3000);

/* Sørger for at det første billede kommer med det samme  og ikke efter
3 sekunder */
setActiveSlide(currentImageIndex);

/* Array */
let imageSource = [
  "https://picsum.photos/300/300?random=1 ",
  "https://picsum.photos/300/300?random=2 ",
  "https://picsum.photos/300/300?random=3 ",
];

let slideContent = [
  "Billede 1 - Her er en beskrivelse af dette billede.",
  "Billede 2 - Her er en beskrivelse af dette billede.",
  " Billede 3 - Her er en beskrivelse af dette billede.",
];

/* Next button function */
let nextBtn = document.querySelector(".next-btn");
let previousBtn = document.querySelector(".previous-btn");

nextBtn.addEventListener("click", () => {
  currentImageIndex += 1;
});

previousBtn.addEventListener("click", () => {
  currentImageIndex -= 1;
});
