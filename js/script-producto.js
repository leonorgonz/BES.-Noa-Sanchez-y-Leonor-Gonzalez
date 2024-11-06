const html = document.querySelector("html");

// Data aos
AOS.init();

let slideIndex = 1;
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
  let i;
  let slides = document.getElementsByClassName("mySlides");  // Las imágenes del carrusel
  let dots = document.getElementsByClassName("demo");        // Las miniaturas
  if (n > slides.length) {slideIndex = 1}  // Si el índice es mayor al número de imágenes, vuelve a la primera imagen
  if (n < 1) {slideIndex = slides.length} // Si el índice es menor a 1, va a la última imagen
  
  // Ocultar todas las imágenes
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Eliminar la clase "active" de todas las miniaturas
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Mostrar la imagen actual y agregar la clase "active" a la miniatura correspondiente
  slides[slideIndex-1].style.display = "block";  // Mostrar la imagen correspondiente
  dots[slideIndex-1].className += " active";     // Activar la miniatura correspondiente
}