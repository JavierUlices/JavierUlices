/*Formas para seleccionar elementos
console.log(document.querySelectorAll('.h3-danger'));
console.log(document.querySelector('#parrafo'));
console.log(document.getElementById('h3-secondary'));*/

// modificando elementos

/*const parrafo = document.querySelector('#Parrafo');
//metodo para modoficar el texto

//console.log(parrafo);

//parrafo.textContent = 'texto desde el JavaScript';

// Metodo ineer html
parrafo.innerHTML = '<strong>Texto desde el JavaScript</strong>';
//metodo para agregar clases
parrafo.classList.add('h3-danger');
console.log(parrafo);*/

/*const lista = document.getElementById('lista');
console.log(lista);

const li = document.createElement('li'); // Creamos el elemento
li.textContent = 'Primer Elemento';

// Y lo agregamos a la lista
lista.appendChild(li);*/

//const lista = document.querySelector('#lista');
// Creando el array

//const ArrayElement = ["Primer Elemento", "Segundo", "Tercero", "Cuarto item"];
// Recorriendo el array y agregando los elementos a la lista
/*ArrayElement.forEach( item => {
    /*const li = document.createElement('li'); // Creamos un li en la primera iteracion
    li.textContent = item; 
    lista.appendChild(li);*/
    /*lista.innerHTML +=  `<li>${item}</li>`
    });*/

/*const fragment = document.createDocumentFragment();
// Recorriendo el array y agregando los elementos a la lista
/*ArrayElement.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    const childNode = fragment.firstChild;
    
     
    fragment.insertBefore(li, childNode);
    
    });
//console.log(fragment);
// Agregando el fragmento a la lista
lista.appendChild(fragment);*/
// Agregando el fragmento a la lista
/*ArrayElement.forEach((item) =>  {
    const li = document.createElement('li');
    li.classList.add("list");
    const b = document.createElement("b");
    b.textContent = "Nombre : ";
    li.appendChild(b);
    const span = document.createElement("span");
    span.textContent = item;
    li.appendChild(span);
    fragment.appendChild(li);

});
// Agregando el fragmento a la lista
lista.appendChild(fragment);*/
/*const lista = document.querySelector('#lista');
const ArrayElement = ["Primer Elemento", "Segundo", "Tercero", "Cuarto item"];
const template = document.querySelector('#template-li').content; // Accedemos al contenido del template
const fragment = document.createDocumentFragment();

ArrayElement.forEach((item) => {
    const clone = template.cloneNode(true); // Clonamos el contenido del template
    clone.querySelector('.text-danger').textContent = item; // Modificamos el contenido del clone
    fragment.appendChild(clone); // Añadimos el clone al fragmento
});

lista.appendChild(fragment); // Añadimos el fragmento a la lista



// Agregando el fragmento a la lista
    //lista.innerHTML = fragment;*/


    const btnAumentar = document.querySelector(".btn-info");
    const span = document.getElementById("Span"); // Cambiado a "Span" con mayúscula
    
    // Crear contador
    let contador = 0;
    
    // Agregar evento click al botón Aumentar
    btnAumentar.addEventListener("click", () => {
        console.log("Me diste clic, así que aumentaré");
        contador++;
        span.textContent = contador;
    });

// Agregar evento click al botón Disminuir
const btnDisminuir = document.querySelector(".btn-danger");
btnDisminuir.addEventListener("click", () => {
    console.log("Me diste clic, así que disminuiré");
    contador--;
    if (contador < 0) {
        contador = 0;
        }
        span.textContent = contador;
        });
        