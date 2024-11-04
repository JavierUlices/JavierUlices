// Forma 1: Event Handler Inline (En HTML)
function inlineHandler() {
    alert("¡Has hecho click usando un Event Handler Inline!");
}

// Forma 2: Event Handler como propiedad del elemento
const propertyButton = document.getElementById("propertyHandlerButton");
propertyButton.onclick = function() {
    alert("¡Has hecho click usando un Event Handler como Propiedad!");
};

// Forma 3: Event Listener con addEventListener
const eventListenerButton = document.getElementById("eventListenerButton");
eventListenerButton.addEventListener("click", function(event) {
    alert("¡Has hecho click usando addEventListener!");
    showEventDetails(event);
});

function showEventDetails(event) {
    const eventInfo = document.getElementById("eventInfo");
    eventInfo.innerHTML = `
        <strong>Tipo de evento:</strong> ${event.type}<br>
        <strong>Tecla presionada:</strong> ${event.key || "no aplica"}<br>
        <strong>Coordenadas del mouse:</strong> x: ${event.clientX}, y: ${event.clientY}<br>
        <strong>Botón del Ratón:</strong> ${event.button !== undefined ? event.button : "No aplica"}<br>
        <strong>Elemento Objetivo:</strong> ${event.target.tagName}<br>
        <strong>Anchura de la ventana:</strong> ${window.innerWidth}px<br>
        <strong>¿Shift presionado?:</strong> ${event.shiftKey ? "Sí" : "No"}<br>
        <strong>¿Ctrl presionado?:</strong> ${event.ctrlKey ? "Sí" : "No"}<br>
        <strong>¿Alt presionado?:</strong> ${event.altKey ? "Sí" : "No"}<br>
        <strong>¿Meta (Windows/cmd) presionado?:</strong> ${event.metaKey ? "Sí" : "No"}<br>
    `;

    console.log(Event);
}

// Otros eventos comunes registrados con addEventListener

document.addEventListener("keydown", function(event) {
    console.log("Tecla presionada:", event.key);
    showEventDetails(event); //Mostrar detalles al presionar un teclado

});

window.addEventListener("resize", function(event) { 

    console.log("Canbio de tamaño en la ventana:", this.window.innerWidth, window.innerHeight);
    showEventDetails(event); //Mostrar detalles al cambiar el tamaño de la ventana
});

 