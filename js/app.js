let listaCancion = JSON.parse(localStorage.getItem("listaCancionesKey")) || [];

listaCancion.forEach((cancion)=>{
    crearCard(cancion)
})

function crearCard(cancion) {
    let grillaCanciones = document.getElementById("listadoCanciones");
    grillaCanciones.innerHTML += `
        <div class="card col-6 col-md-3 col-lg-2 bg-dark m-2">
            <a href="/pages/detalles.html?codigo=${cancion.codigo}">
                <img src="${cancion.portada}" class="card-img-top mt-3" alt="${cancion.titulo}">
            </a>
            <div class="card-body">
                <h5 class="card-title text-light">${cancion.autor}</h5>
                <p class="card-text text-light">${cancion.titulo}</p>
            </div>
        </div>
    `
}