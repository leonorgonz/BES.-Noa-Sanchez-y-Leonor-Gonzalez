const html = document.querySelector("html");
html.setAttribute("data-bs-theme", "dark");

// Data aos
AOS.init();
// BOTON DE ALERTA DE ARRIBA


const menuButton = document.getElementById('menuButton');
        const bar = document.getElementById('bar');
        const overlay = document.getElementById('overlay');
        let menuVisible = false; // Estado del menú (oculto por defecto)

        // Al hacer clic en el botón de la imagen
        menuButton.addEventListener('click', function () {
            if (!menuVisible) {
                bar.style.width = '200px'; // Mueve la barra a su posición visible
                menuButton.style.transform = 'translateX(200px)'; // Mueve el botón hacia la derecha
                overlay.style.opacity = '1'; // Hace visible la capa de fondo
                overlay.style.visibility = 'visible'; // Hace visible la capa de fondo
                document.body.style.overflow = 'hidden'; // Desactiva el scroll
                menuVisible = true;
            } else {
                bar.style.width = '0'; // Regresa la barra a su posición oculta
                menuButton.style.transform = 'translateX(0)'; // Regresa el botón también
                overlay.style.opacity = '0'; // Oculta la capa de fondo
                overlay.style.visibility = 'hidden'; // Oculta la capa de fondo
                document.body.style.overflow = 'auto'; // Activa el scroll
                menuVisible = false;
            }
        });

        // Función para agregar la clase de vibración
        function vibrateButton() {
            if (!menuVisible) { // Solo vibrar si el menú está oculto
                menuButton.classList.add('vibrate');
                // Después de 300ms, removemos la clase para que se pueda volver a agregar
                setTimeout(() => {
                    menuButton.classList.remove('vibrate');
                }, 300);
            }
        }

        // Hacer que la imagen vibre cada 3 segundos
        setInterval(vibrateButton, 2000);














// Variables para controlar la dirección
let direction = 'next'; // 'next' para avanzar a la derecha, 'prev' para retroceder
const carousel = document.getElementById('carouselExampleSlidesOnly');
const bsCarousel = new bootstrap.Carousel(carousel, {
  interval: false, // Desactivamos el ciclo automático
  wrap: true // Mantener el loop continuo
});

// Función para cambiar de slide
function changeSlide() {
  const activeItem = document.querySelector('.carousel-item.active');
  const totalItems = document.querySelectorAll('.carousel-item').length;
  const activeIndex = [...activeItem.parentElement.children].indexOf(activeItem);

  // Cambiar de dirección cuando llegue al final o al principio
  if (activeIndex === totalItems - 1 && direction === 'next') {
    direction = 'prev'; // Cambiar la dirección a "prev" (de derecha a izquierda)
  } else if (activeIndex === 0 && direction === 'prev') {
    direction = 'next'; // Cambiar la dirección a "next" (de izquierda a derecha)
  }

  // Cambiar el slide según la dirección
  if (direction === 'next') {
    bsCarousel.next();
  } else {
    bsCarousel.prev();
  }

  // Esperar 1 segundo antes de cambiar nuevamente
  setTimeout(changeSlide, 1000); // 1000 ms = 1 segundo
}

// Iniciar el cambio de diapositivas
setTimeout(changeSlide, 1000); // Iniciar después de 1 segundo




$("#myBtn").click(function(){
  alert("Has hecho click")
})

console.log($("#myBtn"));


var typed = new Typed('#element', {
  strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
  typeSpeed: 50,
  loop:true,
});
















document.addEventListener("DOMContentLoaded", () => {
    // --- Create LightBox
    const galleryGrid = document.querySelector(".gallery-grid");
    const links = galleryGrid.querySelectorAll("a");
    const imgs = galleryGrid.querySelectorAll("img");
    const lightboxModal = document.getElementById("lightbox-modal");
    const bsModal = new bootstrap.Modal(lightboxModal);
    const modalBody = lightboxModal.querySelector(".lightbox-content");

    function createCaption(caption) {
        return `<div class="carousel-caption d-none d-md-block">
        <h4 class="m-0">${caption}</h4>
      </div>`;
    }

    function createIndicators(img) {
        let markup = "",
            i,
            len;

        const countSlides = links.length;
        const parentCol = img.closest(".col");
        const curIndex = [...parentCol.parentElement.children].indexOf(parentCol);

        for (i = 0, len = countSlides; i < len; i++) {
            markup += `
        <button type="button" data-bs-target="#lightboxCarousel"
          data-bs-slide-to="${i}"
          ${i === curIndex ? 'class="active" aria-current="true"' : ""}
          aria-label="Slide ${i + 1}">
        </button>`;
        }

        return markup;
    }

    function createSlides(img) {
        let markup = "";
        const currentImgSrc = img.closest(".gallery-item").getAttribute("href");

        for (const img of imgs) {
            const imgSrc = img.closest(".gallery-item").getAttribute("href");
            const imgAlt = img.getAttribute("alt");

            markup += `
        <div class="carousel-item${currentImgSrc === imgSrc ? " active" : ""}">
          <img class="d-block img-fluid w-100" src=${imgSrc} alt="${imgAlt}">
          ${imgAlt ? createCaption(imgAlt) : ""}
        </div>`;
        }

        return markup;
    }

    function createCarousel(img) {
        const markup = `
      <!-- Lightbox Carousel -->
      <div id="lightboxCarousel" class="carousel slide carousel-fade" data-bs-ride="true">
        <!-- Indicators/dots -->
        <div class="carousel-indicators">
          ${createIndicators(img)}
        </div>
        <!-- Wrapper for Slides -->
        <div class="carousel-inner justify-content-center mx-auto">
          ${createSlides(img)}
        </div>
        <!-- Controls/icons -->
        <button class="carousel-control-prev" type="button" data-bs-target="#lightboxCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#lightboxCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      `;

        modalBody.innerHTML = markup;
    }

    for (const link of links) {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const currentImg = link.querySelector("img");
            const lightboxCarousel = document.getElementById("lightboxCarousel");

            if (lightboxCarousel) {
                const parentCol = link.closest(".col");
                const index = [...parentCol.parentElement.children].indexOf(parentCol);

                const bsCarousel = new bootstrap.Carousel(lightboxCarousel);
                bsCarousel.to(index);
            } else {
                createCarousel(currentImg);
            }

            bsModal.show();
        });
    }

    // --- Support Fullscreen
    const fsEnlarge = document.querySelector(".btn-fullscreen-enlarge");
    const fsExit = document.querySelector(".btn-fullscreen-exit");

    function enterFS() {
        lightboxModal
            .requestFullscreen()
            .then({})
            .catch((err) => {
                alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
            });
        fsEnlarge.classList.toggle("d-none");
        fsExit.classList.toggle("d-none");
    }

    function exitFS() {
        document.exitFullscreen();
        fsExit.classList.toggle("d-none");
        fsEnlarge.classList.toggle("d-none");
    }

    fsEnlarge.addEventListener("click", (e) => {
        e.preventDefault();
        enterFS();
    });

    fsExit.addEventListener("click", (e) => {
        e.preventDefault();
        exitFS();
    });
});
