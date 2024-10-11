const cardPrincipal = document.getElementById('card-principal');

const albums = [
    {
      album: "Let Go",
      artista: "Avril Lavigne",
      genero: "punk",
      stock : 90
    },
    {
      album: "This Is Why",
      artista: "Paramore",
      genero: "alternative rock",
      stock : 78
    },
    {
      album: "Fallen",
      artista: "Evanescence",
      genero: "rock gótico",
      stock: 0
    },
];

//Destructuring
const [album1, album2, album3] = albums;

// arrow function o función de flecha

const btnclass = (stock) => {
  return stock > 0 ? "btn-primary" : "btn-danger disabled";
}



function card(albums) {
    const { album, artista, genero, stock } = albums;

    return `
    <div class="card mb-2" style="width: 18rem;">
        <div class="card-body">
            <h4 class="card-title">${album}</h4>
            <p class="card-text m-0 fs-5">${artista} - ${genero}</p>
            <p class="card-text m-0">disp: ${stock}</p>
            <a href="#" class="btn ${btnclass(stock)}">Comprar</a>
        </div>
    </div>
    `;
}



cardPrincipal.innerHTML = card(album1);
cardPrincipal.innerHTML += card(album2);
cardPrincipal.innerHTML += card(album3);

