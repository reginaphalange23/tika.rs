var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


var slideReference = 1;
textSlide(slideReference);

function nextSlide(n){
  textSlide(slideReference += n);
}

function thisSlide(n){
  textSlide(slideReference = n);
}

function textSlide(n){
  var i;
  var newSlides = document.getElementsByClassName("quotes");
  if (n > newSlides.length) {slideReference = 1}
  if (n < 1) {slideReference = newSlides.length}
  for (i = 0; i <newSlides.length; i++) {
      newSlides[i].style.display = "none";
  }
  newSlides[slideReference-1].style.display = "block";
}
