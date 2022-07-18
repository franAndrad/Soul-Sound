let botonToggle = document.querySelector("#toggle");
let botonNavInicioSesion = document.querySelector("#nav-inicioSesion");
let botonInicioSesion = document.querySelector("#inicioSesion");
let botonRegistro = document.querySelector("#registrarse");

const modalSesion = new bootstrap.Modal(document.querySelector('#modalSesion'));
const modalRegistro = new bootstrap.Modal(document.querySelector('#modalRegistro'));


botonToggle.addEventListener('click',()=>{abrirMenu()});
botonNavInicioSesion.addEventListener('click',()=>{abrirInicioSesion()});
botonInicioSesion.addEventListener('click',()=>{abrirInicioSesion()});
botonRegistro.addEventListener('click',()=>{abrirRegistro()});

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

function abrirInicioSesion(){
    modalSesion.show();
    modalRegistro.hide();
}

function abrirRegistro(){
    modalRegistro.show();
    modalSesion.hide();
}