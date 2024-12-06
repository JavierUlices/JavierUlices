document.addEventListener("DOMContentLoaded", () => {
const myCarousel = document.querySelector('#carouselExampleIndicators');
    const carousel = new bootstrap.Carousel(myCarousel, {
        interval: 2000,  
        ride: 'carousel'  
    });
const navLinks = document.querySelectorAll(".nav-link");
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
            link.style.textShadow = " 0px 0px 15px #ffd700";

           
            const messageBox = document.createElement("div");
            messageBox.classList.add("message-box");
            messageBox.textContent = `Has seleccionado la opción: ${link.textContent}`;
            document.body.appendChild(messageBox);

            setTimeout(() => {
                messageBox.remove();
            }, 3000);  

            setTimeout(() => {
                link.style.textShadow = "";
            }, 500);  
            const carrera = link.textContent.trim();
            if (carreraIndices[carrera] !== undefined) {
                carousel.to(carreraIndices[carrera]);  
            }
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
