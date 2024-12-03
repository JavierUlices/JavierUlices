// Ejemplo de interactividad: cambiar la imagen del carrusel al hacer clic en un botón
document.querySelectorAll('.carousel-control-prev, .carousel-control-next').forEach(button => {
    button.addEventListener('click', function() {
        console.log('Carrusel cambiado');
    });
});
