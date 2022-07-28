let encontrados = document.getElementById("encontrados");
let buscador = document.getElementById('buscador');
let input = document.getElementById("input");

let listCanciones = JSON.parse(localStorage.getItem('listaCancionesKey')) || [];

input.addEventListener('keyup',(e)=>{filtrar(e);});
input.addEventListener('keydown',(e)=>{filtrar(e);});

function filtrar(e){
    let posicionBuscada;
    let cont = 0;
    limpiarBuscador();    
    listCanciones.forEach((cancion)=>{
        posicionBuscada = cancion.titulo.search(input.value.toLowerCase());
        if(posicionBuscada !== -1 && cont<8 && input.value!=''){
            encontrados.className = 'ms-0 listaBusqueda bg-light rounded';
            encontrados.innerHTML += `
                <li class=' rounded selection'><a class='text-dark text-decoration-none py-2 px-2' onclick="ponerValue('${cancion.titulo}')">${cancion.titulo}<a/></li>
            `; 
            cont++;
        }
    });
    
    if(e.key  === 'Enter'){
        if (e.defaultPrevented) {
            return;
        }
        buscar(input.value.toLowerCase());
    }
    window.ponerValue = (nombreCancion) =>{
        input.value = nombreCancion;
        buscar(nombreCancion);
    }
}

function buscar(cancion){
    let posicionBuscada;
    limpiarBuscador();
    listadoCanciones.innerHTML = '';
    listCanciones.forEach((canciones)=>{
        posicionBuscada = canciones.titulo.search(cancion);
        if(posicionBuscada !== -1 && input.value!=''){
            listadoCanciones.className = 'row justify-content-center';
            listadoCanciones.innerHTML += `
            <div class="card col-6 col-md-3 col-lg-2 bg-dark m-2">
                <a href="/pages/detalles.html?codigo=${canciones.codigo}">
                    <img src="${canciones.portada}" class="card-img-top mt-3" alt="portada de ejemplo">
                </a>
                <div class="card-body">
                    <h5 class="card-title text-light">${canciones.autor}</h5>
                    <p class="card-text text-light">${canciones.titulo}</p>
                </div>
            </div>
            `
        }
    });
}

function limpiarBuscador(){
    encontrados.className = 'd-none';
    encontrados.innerHTML = ``;
}