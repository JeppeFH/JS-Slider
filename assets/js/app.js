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
setInterval(next, 2000);

/* Sørger for at det første billede kommer med det samme  og ikke efter
3 sekunder */
setActiveSlide(currentImageIndex);

/* sliderbillede array */
const imageSources = [
  "./assets/img/img1.jpeg",
  "./assets/img/img2.jpg",
  "./assets/img/img3.jpg",
];

/* Billedbeskrivelse array */
const slideContents = [
  "Billede 1 - Her er en beskrivelse af dette billede.",
  "Billede 2 - Her er en beskrivelse af dette billede.",
  "Billede 3 - Her er en beskrivelse af dette billede.",
];

/* funktion (forEach) der "kører" de to arrays */
/* index fortæller position af slides 0, 1, 2 osv, hvilket gør at den 
skifter */
slides.forEach((slide, index) => {
  /*2 variabler der referer til parameter i forEach, (slide.) bruges 
  til at "ramme" alle elementer, hvor hvis man havde brugt (document.) 
  havde fundet det første content i array*/
  const content = slide.querySelector(".slide-content");
  const image = slide.querySelector("img");

  /* Tager content som referer til html og bruger tekst fra array og 
  looper med index  */
  /* textContent er en property, der bruges til at sætte eller hente tekst 
   i HTML. Ved brug af arrays med strenge, bruges textContent til at 
   indsætte disse strenge i HTML-elementer. */
  content.textContent = slideContents[index];

  /* Finder img-elementet og sætter dets src-attribut 
   til den tilsvarende URL i imageSources-arrayet */
  image.src = imageSources[index];
});

/* Next button function */
const nextBtn = document.querySelector(".next-btn");
const previousBtn = document.querySelector(".previous-btn");

function previous() {
  currentImageIndex -= 1;
  setActiveSlide(currentImageIndex);
}

nextBtn.addEventListener("click", next);
previousBtn.addEventListener("click", previous);
