import { Cancion } from "./cancionClass.js";
import { generarCodigo } from "./codigoUnico.js";

let nuevaCancion = new Cancion();
console.log(nuevaCancion);

let codigo = document.getElementById('codigo');
let autor = document.getElementById('autor');
let titulo = document.getElementById('titulo');
let album = document.getElementById('album');
let cancion = document.getElementById('cancion');
let portada = document.getElementById('portada');
let duracion = document.getElementById('duracion');
let genero = document.getElementById('genero');
let formulario = document.querySelector('#formCancion');
let btnCrearCancion = document.querySelector('#btnCrearCancion');
const modalAdminCancion = new bootstrap.Modal(document.getElementById('modalCancion'));
console.log(modalAdminCancion);

let cancionExistente = false;

let listaCanciones = JSON.parse(localStorage.getItem('listaCancionesKey')) || [];

//validaciones

formulario.addEventListener('submit', guardarCancion);
btnCrearCancion.addEventListener('click', ()=>{
    limpiarFormulario();
    modalAdminCancion.show();
    document.getElementById('codigo').value = generarCodigo();
});

cargaInicial();

function guardarCancion(e){
    e.preventDefault();
    if(cancionExistente){
        guardarEdicionCancion();
    } else {
        crearCancion();
    }

}

function crearCancion(e){
    let nuevaCancion = new Cancion(codigo.value, autor.value, titulo.value, album.value, cancion.value, portada.value, duracion.value, genero.value);
    console.log(nuevaCancion);
    listaCanciones.push(nuevaCancion);
    guardarListaCanciones();
    limpiarFormulario();
    modalAdminCancion.hide();

    crearFila(nuevaCancion);
}

function limpiarFormulario(){
    formulario.reset();
}

function guardarListaCanciones(){
    localStorage.setItem('listaCancionesKey', JSON.stringify(listaCanciones));
}

function cargaInicial(){
    if(listaCanciones.length > 0){
        listaCanciones.forEach((itemCancion)=>{crearFila(itemCancion)})
    }
}

function crearFila(itemCancion){
    let tablaCanciones = document.getElementById('listaCanciones');
    tablaCanciones.innerHTML += `
    <tr>
        <th scope="row">${itemCancion.codigo}</th>
        <td>${itemCancion.autor}</td>
        <td>${itemCancion.titulo}</td>
        <td>${itemCancion.album}</td>
        <td>${itemCancion.cancion}</td>
        <td>${itemCancion.portada}</td>
        <td>${itemCancion.duracion}</td>
        <td>${itemCancion.genero}</td>
        <td>
            <button class="btn btn-light m-1 opacity-75"><i class="bi bi-pencil-square"></i></button>
            <button class="btn btn-danger m-1 opacity-75" onclick="borrarCancion('${itemCancion.codigo}')"><i class="bi bi-x-square-fill"></i></button>
        </td>
    </tr>`
}


// funcion para borrar canciones

window.borrarCancion = function (codigo){
    
    console.log(codigo);
    // pregunto si quiero borrar al usuario
    Swal.fire({
            title: "Estas seguro de querer eliminar la cancion?",
            text: "No puedes revertir este paso luego de aceptar.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, borrar.',
            cancelButtonText: 'Cancelar.'
          }).then((result) => {
            if (result.isConfirmed) {
                // borrar el usuario de listaCanciones y tambien del localStorage
                let listaCancionesNueva = listaCanciones.filter((cancion)=> {return cancion.codigo != codigo})
                listaCanciones = listaCancionesNueva
                guardarListaCanciones();
                console.log(listaCancionesNueva)
                console.log(listaCanciones)
                // borrar la cancion de la tabla
                borrarTablaCancion();
                cargaInicial();
                // mostrar el cartel de operacion exitosa
              Swal.fire(
                'Cancion eliminada!',
                'La cancion fue eliminado exitosamente.',
                'success'
              )
            }
          })
}

function borrarTablaCancion(){
    let tbodyCancion = document.getElementById('listaCanciones')
    tbodyCancion.innerHTML = '';
}