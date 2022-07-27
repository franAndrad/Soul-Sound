const parametro = window.location.search;

const urlParams = new URLSearchParams(parametro);
urlParams.get("codigo");

let listaCanciones = JSON.parse(localStorage.getItem("listaCancionesKey")) || [];
let cancionBuscada = listaCanciones.find((cancion)=>{return cancion.codigo == urlParams.get("codigo")});

let seccionDetalle = document.getElementById("seccionDetalle");

let linkCompratir = cancionBuscada.cancion;
let corteCodigo = linkCompratir.substring(31,53);
let iframeLink = "https://open.spotify.com/embed/track/" + corteCodigo + "?utm_source=generator";

seccionDetalle.innerHTML = `
<div class="text-center card-body" id="tarjetaDetalle">
    <div class="row g-0 ">

        <div class="col-md-4">
            <img src="${cancionBuscada.portada}" class="img-fluid rounded-start" alt="${cancionBuscada.autor}">
        </div>

        <div class="textoDetalle col-md-8">
            <div class="text-end">
                <p><b>ID: </b> <span class="codigo">${cancionBuscada.codigo}</span>
            </div>

            <h5 class="card-title">${cancionBuscada.autor}</h5>
            <p class="card-text">${cancionBuscada.titulo}</p>
            <p class="card-text"><small>${cancionBuscada.genero} <br/> ${cancionBuscada.duracion}</small></p>

            <div id="reproductorMusica">
                <iframe style="border-radius:12px" src="${iframeLink}" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            </div>
        </div>

    </div>
</div>
`