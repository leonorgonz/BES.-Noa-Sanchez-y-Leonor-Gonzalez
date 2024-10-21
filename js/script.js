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


// Evitar que el usuario haga scroll inicialmente
document.body.style.overflow = 'hidden';

// Detectar cuando se hace clic en la flecha
document.querySelector('.arrow-container').addEventListener('click', function() {
  // Permitir el scroll
  document.body.style.overflow = 'auto';

  // Hacer scroll suave al wrapper
  document.querySelector('.wrapper').scrollIntoView({ behavior: 'smooth' });
});



    const carousels = [
        '#galleryCarousel1',
        '#galleryCarousel2',
        '#galleryCarousel3'
    ];

    // Inicia el carrusel de Bootstrap para cada uno
    carousels.forEach(carousel => {
        const bsCarousel = new bootstrap.Carousel(document.querySelector(carousel), {
            interval: 3000,
            wrap: true
        });
    });

    // Sincroniza los carruseles
    setInterval(() => {
        carousels.forEach(carousel => {
            const bsCarousel = bootstrap.Carousel.getInstance(document.querySelector(carousel));
            bsCarousel.next(); // Cambia a la siguiente imagen
        });
    }, 1000); // Cambia cada 3 segundos






$("#myBtn").click(function(){
  alert("Has hecho click")
})

console.log($("#myBtn"));


var typed = new Typed('#element', {
  strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
  typeSpeed: 50,
  loop:true,
});


