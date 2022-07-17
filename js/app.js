let botonToggle = document.querySelector("#toggle");

botonToggle.addEventListener('click',()=>{abrirMenu()});

function abrirMenu(){
    let paginas = document.getElementById('paginas');
    let buscador = document.getElementById('buscador');
    let icono = document.getElementById('icono');
    let header = document.getElementById('header');
    
    if(icono.className === 'fa-solid fa-bars text-white'){
        paginas.className = 'container-menu d-xl-block';
        buscador.className = 'd-flex ps-lg-5 container-search';
        icono.className = 'fa-solid fa-xmark text-white';
        header.className = 'bg-dark'
    } else {
        paginas.className = 'd-none';
        buscador.className = 'd-none';
        icono.className = 'fa-solid fa-bars text-white';
        header.className = '';
    }
}