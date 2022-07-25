import { cantidadCaracteres, validarEmail } from "./validaciones.js";
import {Usuario} from "./loginRegistro.js";
import { generarCodigo } from "./codigoUnico.js";

let botonToggle = document.querySelector("#toggle");
let botonNavInicioSesion = document.querySelector("#nav-inicioSesion");
let botonInicioSesion = document.querySelector("#inicioSesion");
let botonRegistro = document.querySelector("#registrarse");
let paginas = document.getElementById('paginas');
let buscador = document.getElementById('buscador');
let icono = document.getElementById('icono');
let header = document.getElementById('header');
let formularioRegistro = document.getElementById("formUsuario");
let formularioLogin = document.getElementById("formLogin");



const modalSesion = new bootstrap.Modal(document.querySelector('#modalSesion'));
const modalRegistro = new bootstrap.Modal(document.querySelector('#modalRegistro'));

botonToggle.addEventListener('click',()=>{abrirMenu()});
botonNavInicioSesion.addEventListener('click',()=>{abrirInicioSesion()});
botonInicioSesion.addEventListener('click',()=>{abrirInicioSesion()});
botonRegistro.addEventListener('click',()=>{abrirRegistro()});
window.addEventListener('resize', ()=>{actualizarPagina()});

let loginEmail = document.getElementById("loginEmail");
let loginPassword = document.getElementById("loginPassword");
let registroNombre = document.getElementById("registroNombre");
let registroEmail = document.getElementById("registroEmail");
let registroPassword = document.getElementById("registroPassword");
let registroCodigo = document.getElementById('registroCodigo')

// Validaciones
loginEmail.addEventListener("blur", ()=>{validarEmail(loginEmail)});
loginPassword.addEventListener("blur", ()=>{cantidadCaracteres(3,30,loginPassword)});
registroNombre.addEventListener("blur", ()=>{cantidadCaracteres(1,30,registroNombre)});
registroEmail.addEventListener("blur", ()=>{validarEmail(registroEmail)});
registroPassword.addEventListener("blur", ()=>{cantidadCaracteres(3,30,registroPassword)});
formularioRegistro.addEventListener("submit", crearUsuario);
formularioLogin.addEventListener("submit", login);


// si hay algo en el localStorage traer esos datos, si no hay nda listaUsuario tiene que ser una []
export let listaUsuario = JSON.parse(localStorage.getItem("listaUsuarioKey")) || [];


// Funcionalidad del registro
function crearUsuario(e){
    e.preventDefault();
    console.log('desde la funcion crearUsuario');
    let nuevoUsuario = new Usuario(registroCodigo.value, registroNombre.value, registroEmail.value, registroPassword.value);
    console.log(nuevoUsuario);
    listaUsuario.push(nuevoUsuario);
    // limpiar el formulario
    limpiarFormulario();
    // guardar la lista en el localStorage
    guardarListaUsuario();
    // cerramos el modal del registro
    modalRegistro.hide()
    Swal.fire("Usuario creado", "El usuario se creo exitosamente", "success");
    
}

// limpiar el formulario
function limpiarFormulario(){
    formularioRegistro.reset();
    formularioLogin.reset();
}

// guardamos la lista en el localStorage
function guardarListaUsuario(){
    localStorage.setItem("listaUsuarioKey", JSON.stringify(listaUsuario));
}

// funcionalidad del login
function login(e){
    e.preventDefault();
    if(loginEmail.value === 'administrador@gmail.com' && loginPassword.value === '1234560' ){
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Bienvenido Administrador.',
            showConfirmButton: false,
            timer: 1500
        })
        modalSesion.hide();
        limpiarFormulario();
        setInterval(()=>{
            window.open("../pages/administrador.html", "_self");
        }, 1000)
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Ups...',
            text: 'Usuario no valido.'
        })
    }
}


// Funcionalidad del navbar responsive
function actualizarPagina(){
    paginas.className = 'container-menu d-xl-block d-none';
    buscador.className = 'ps-lg-5 container-search d-xl-flex d-none';
    icono.className = 'fa-solid fa-bars text-white';
    header.className = '';
}

function abrirMenu(){ 
    if(icono.className === 'fa-solid fa-bars text-white' && window.screen.width <= 1199){
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
    document.getElementById('registroCodigo').value = generarCodigo();
    modalSesion.hide();
}