const html = document.querySelector("html");

// Data aos
AOS.init();

// INICIOOOOOOOOOOOOOOO
// MENU BOTÓN
const menuButton = document.getElementById('menuButton');
        const bar = document.getElementById('bar');
        const overlay = document.getElementById('overlay');
        let menuVisible = false; // Estado del menú (oculto por defecto)

        // CLICK
        menuButton.addEventListener('click', function () {
            if (!menuVisible) {
                bar.style.width = '200px';
                menuButton.style.transform = 'translateX(200px)';
                overlay.style.opacity = '1';
                overlay.style.visibility = 'visible';
                document.body.style.overflow = 'hidden';
                menuVisible = true;
            } else {
                bar.style.width = '0'; 
                menuButton.style.transform = 'translateX(0)';
                overlay.style.opacity = '0';
                overlay.style.visibility = 'hidden';
                document.body.style.overflow = 'auto';
                menuVisible = false;
            }
        });

        // VIBRACIÓN
        function vibrateButton() {
            if (!menuVisible) { 
                menuButton.classList.add('vibrate');
                setTimeout(() => {
                    menuButton.classList.remove('vibrate');
                }, 300);
            }
        }
        setInterval(vibrateButton, 2000);



// BLOQUEA SCROLL
// Ejecuta solo si la URL es la de la página de inicio
if (window.location.pathname.includes('index.html')) {
    // Bloquea el scroll inicialmente
    document.body.style.overflow = 'hidden';
  
    // Habilita el scroll y desplázate a la nueva sección al hacer clic en la flecha
    document.querySelector('.arrow-container').addEventListener('click', function() {
      document.body.style.overflow = 'auto';
      document.querySelector('.wrapper').scrollIntoView({ behavior: 'smooth' });
    });
  }



// CAROUSEL INICIO
$(document).ready(function () {
    let currentIndex = 0;
    const items = $('#iniciocarouselInner .carousel-item');
    const itemCount = items.length;
    // CAMBIA IMAGEN
    function changeImage() {
        items.eq(currentIndex).removeClass('active');
        currentIndex = (currentIndex + 1) % itemCount;
        items.eq(currentIndex).addClass('active'); 
    }
    setInterval(changeImage, 1500);
});



// CAROUSEL 3 MODELOS
$(document).ready(function () {
    // Función para configurar el carrusel
    function setupCarousel(carouselId) {
        let currentIndex = 0; // Índice de la imagen actual
        const items = $(`${carouselId} .carousel-item`); // Seleccionar los items del carrusel
        const itemCount = items.length; // Número total de items

        // Ocultar todos los items y mostrar solo el primero
        items.hide(); // Ocultar todas las imágenes
        items.eq(currentIndex).show(); // Mostrar la primera imagen

        // Cambiar la imagen
        setInterval(function () {
            items.eq(currentIndex).hide(); // Ocultar imagen actual
            currentIndex = (currentIndex + 1) % itemCount; // Avanzar al siguiente índice (volviendo a 0 si se llega al final)
            items.eq(currentIndex).show(); // Mostrar la nueva imagen
        }, 1000); // Cambiar cada 1 segundo
    }

    // Inicializar cada carrusel
    setupCarousel('#galleryCarousel1');
    setupCarousel('#galleryCarousel2');
    setupCarousel('#galleryCarousel3');
    
});




// CUENTA ATRÁS
document.addEventListener('DOMContentLoaded', () => {
    const DATE_TARGET = new Date('2/1/2025 5:01 AM');
    // DOM for render
    const SPAN_DAYS = document.querySelector('span#days');
    const SPAN_HOURS = document.querySelector('span#hours');
    const SPAN_MINUTES = document.querySelector('span#minutes');
    const SPAN_SECONDS = document.querySelector('span#seconds');
    // Milliseconds for the calculations
    const MILLISECONDS_OF_A_SECOND = 1000;
    const MILLISECONDS_OF_A_MINUTE = MILLISECONDS_OF_A_SECOND * 60;
    const MILLISECONDS_OF_A_HOUR = MILLISECONDS_OF_A_MINUTE * 60;
    const MILLISECONDS_OF_A_DAY = MILLISECONDS_OF_A_HOUR * 24

    function updateCountdown() {
          // Calcs
        const NOW = new Date();
        const DURATION = DATE_TARGET - NOW;
        const REMAINING_DAYS = Math.floor(DURATION / MILLISECONDS_OF_A_DAY);
        const REMAINING_HOURS = Math.floor((DURATION % MILLISECONDS_OF_A_DAY) / MILLISECONDS_OF_A_HOUR);
        const REMAINING_MINUTES = Math.floor((DURATION % MILLISECONDS_OF_A_HOUR) / MILLISECONDS_OF_A_MINUTE);
        const REMAINING_SECONDS = Math.floor((DURATION % MILLISECONDS_OF_A_MINUTE) / MILLISECONDS_OF_A_SECOND);
        
        // Render
        SPAN_DAYS.textContent = REMAINING_DAYS;
        SPAN_HOURS.textContent = REMAINING_HOURS;
        SPAN_MINUTES.textContent = REMAINING_MINUTES;
        SPAN_SECONDS.textContent = REMAINING_SECONDS;
    }

    updateCountdown();
    // Refresh every second
    setInterval(updateCountdown, MILLISECONDS_OF_A_SECOND);
});

document.addEventListener('DOMContentLoaded', function () {
    var flkty = new Flickity('.carousel-flickity', {
        wrapAround: true,
        cellAlign: 'left',
        contain: true,
        imagesLoaded: true
    });
});

// FIN INICIOOOOOOOO

// Función para enviar el formulario y mostrar el modal
function enviarCorreo() {
    "use strict";
    
    // Obtener valores de los campos del formulario
    var nombre = document.getElementById("nombreInput").value;
    var correo = document.getElementById("correo").value;
    var asunto = document.getElementById("masage").value;

    // Verificar que todos los campos estén completos
    if (nombre === "" || correo === "" || asunto === "") {
        alert("Por favor, complete todos los campos antes de contactarnos");
        return false;
    }

    // Añadir valores en la ventana modal
    document.getElementById("nom").textContent = nombre;
    document.getElementById("c").textContent = correo;
    document.getElementById("a").textContent = asunto;

    // Mostrar el modal
    document.getElementById("modal").style.display = "flex";

    // Mostrar el mensaje de confirmación
    document.getElementById("confirmMessage").textContent = "Correo enviado correctamente";

    // Limpiar el formulario
    resetForm();
    return false; // Evitar que se recargue la página
}

// Función para cerrar el modal
function cerrarVentana() {
    "use strict";
    // Ocultar el modal cambiando el estilo display
    document.getElementById("modal").style.display = "none";
    resetForm(); // Limpiar el formulario cuando se cierra el modal
}

// Función para limpiar el formulario después de enviar
function resetForm() {
    document.getElementById("nombreInput").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("masage").value = "";
}
