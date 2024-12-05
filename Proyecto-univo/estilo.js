document.addEventListener("DOMContentLoaded", () => {
    // Inicializar el carrusel
    const myCarousel = document.querySelector('#carouselExampleIndicators');
    const carousel = new bootstrap.Carousel(myCarousel, {
        interval: 2000, // El intervalo de cambio automático (en milisegundos)
        ride: 'carousel' // Habilita el auto-ride del carrusel
    });

    // Interactividad de los enlaces del menú
    const navLinks = document.querySelectorAll(".nav-link");

    // Índices para las carreras en el carrusel (correspondencia entre carrera y slide)
    const carreraIndices = {
        "Arquitectura": 0,
        "Ingeniería Industrial": 1,
        "Ingeniería en Sistemas": 2,
        "Ingeniería en Desarrollo de Software": 3
    };

    navLinks.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.color = "#ffd700";
            link.style.transition = "color 0.3s ease";
        });

        link.addEventListener("mouseout", () => {
            link.style.color = "";
        });

        link.addEventListener("click", (event) => {
            link.style.textShadow = "0px 0px 15px #ffd700";

            // Mostrar un mensaje emergente en lugar del alert
            const messageBox = document.createElement("div");
            messageBox.classList.add("message-box");
            messageBox.textContent = `Has seleccionado la opción: ${link.textContent}`;
            document.body.appendChild(messageBox);

            setTimeout(() => {
                messageBox.remove();
            }, 3000); // El mensaje desaparece después de 3 segundos

            setTimeout(() => {
                link.style.textShadow = "";
            }, 500); // Remueve el efecto después de 0.5s

            // Cambiar el carrusel al índice correspondiente
            const carrera = link.textContent.trim();
            if (carreraIndices[carrera] !== undefined) {
                carousel.to(carreraIndices[carrera]); // Cambia al slide correspondiente
            }

            // Redirigir manualmente a la URL correspondiente a la carrera
            if (carrera === "Arquitectura") {
                window.location.href = "arquitectura.html";
            } else if (carrera === "Ingeniería Industrial") {
                window.location.href = "industrial.html";
            } else if (carrera === "Ingeniería en Sistemas") {
                window.location.href = "sistemas.html";
            } else if (carrera === "Ingeniería en Desarrollo de Software") {
                window.location.href = "software.html";
            }
        });
    });
});
