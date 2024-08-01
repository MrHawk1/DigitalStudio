document.addEventListener('DOMContentLoaded', function() {
    // Funcionalidad para alternar el menú de navegación móvil
    const menuBtn = document.querySelector('.menu-btn');
    const navMenu = document.querySelector('nav ul');
    const menuItems = document.querySelectorAll('nav ul li a'); // Selecciona los enlaces del menú
    
    menuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Función para ocultar el menú
    function hideMenu(event) {
        if (!navMenu.contains(event.target) && !menuBtn.contains(event.target)) {
            navMenu.classList.remove('active');
        }
    }

    // Cerrar el menú si se hace clic fuera de él
    window.addEventListener('click', hideMenu);

    // Cerrar el menú si se desliza en la pantalla
    window.addEventListener('touchmove', hideMenu);

    // Cerrar el menú si se hace clic en un enlace del menú y desplazarse suavemente
    menuItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            navMenu.classList.remove('active'); // Ocultar el menú

            // Esperar un momento antes de desplazarse para que el menú tenga tiempo de ocultarse
            setTimeout(() => {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }, 300); // Ajusta este valor (en milisegundos) según sea necesario
        });
    });

    // Funcionalidad para alternar las respuestas de las preguntas frecuentes
    const faqItems = document.querySelectorAll('.faq-item h3');
    faqItems.forEach(item => {
        item.addEventListener('click', function() {
            const content = this.nextElementSibling;
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
    });
});
