import { Cancion } from "./cancionClass.js";
import { generarCodigo } from "./codigoUnico.js";
import { campoRequerido, validacionTiempo, validacionURL } from "./validaciones.js";

let nuevaCancion = new Cancion();

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

let cancionExistente = false;

let listaCanciones = JSON.parse(localStorage.getItem('listaCancionesKey')) || [];

autor.addEventListener("blur", ()=>{campoRequerido(autor)});
titulo.addEventListener("blur", ()=>{campoRequerido(titulo)});
cancion.addEventListener("blur", ()=>{campoRequerido(cancion); validacionURL(cancion)});
portada.addEventListener("blur", ()=>{campoRequerido(portada); validacionURL(portada)});
duracion.addEventListener("blur", ()=>{campoRequerido(duracion); validacionTiempo(duracion)});
genero.addEventListener("blur", ()=>{campoRequerido(genero)});

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

    if (campoRequerido(autor) && campoRequerido(titulo) && campoRequerido(cancion) && validacionURL(cancion) && campoRequerido(portada) && validacionURL(portada) && campoRequerido(duracion) && validacionTiempo(duracion) && campoRequerido(genero)) {
        let nuevaCancion = new Cancion(codigo.value, autor.value, titulo.value.toLowerCase(), album.value, cancion.value, portada.value, duracion.value, genero.value);
        listaCanciones.push(nuevaCancion);
        guardarListaCanciones();
        limpiarFormulario();
        modalAdminCancion.hide();
    
        crearFila(nuevaCancion);
    }

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
        <td class="truncate">${itemCancion.cancion}</td>
        <td class="truncate">${itemCancion.portada}</td>
        <td>${itemCancion.duracion}</td>
        <td>${itemCancion.genero}</td>
        <td>
            <button class="btn btn-light m-1 opacity-75" onclick="prepararEdicionCancion('${itemCancion.codigo}')"><i class="bi bi-pencil-square"></i></button>
            <button class="btn btn-danger m-1 opacity-75" onclick="borrarCancion('${itemCancion.codigo}')"><i class="bi bi-x-square-fill"></i></button>
        </td>
    </tr>`
}




window.prepararEdicionCancion = function (codigoP) {
    
    // cargar los datos de la serie a editar
    let cancionBuscada = listaCanciones.find((cancion)=>{return cancion.codigo == codigoP});
    // asignar los valores a cada input
    codigo.value = cancionBuscada.codigo;
    autor.value = cancionBuscada.autor;
    titulo.value = cancionBuscada.titulo;
    album.value = cancionBuscada.album;
    cancion.value = cancionBuscada.cancion;
    portada.value = cancionBuscada.portada;
    duracion.value = cancionBuscada.duracion;
    genero.value = cancionBuscada.genero;
    formulario.value = cancionBuscada.formulario;
    btnCrearCancion.value = cancionBuscada.url;
    // mostrar formulario de la ventana modal
    modalAdminCancion.show();
    // aqui modifico la variable existeSerie para poder editar
    cancionExistente = true;

     
  
  }
  function guardarEdicionCancion (){
    // necesitamos la posicion de la serie dentro del arrglo
    let posicionCancion = listaCanciones.findIndex((itemCancion)=>{return itemCancion.codigo == codigo.value})
    // modificamos los valores de la serie encontrada
    listaCanciones[posicionCancion].autor = autor.value;
    listaCanciones[posicionCancion].titulo = titulo.value;
    listaCanciones[posicionCancion].album = album.value;
    listaCanciones[posicionCancion].cancion = cancion.value;
    listaCanciones[posicionCancion].portada = portada.value;
    listaCanciones[posicionCancion].duracion = duracion.value;
    listaCanciones[posicionCancion].genero = genero.value;
  
    // actualizar el localstorage
    guardarListaCanciones();
    // actualizar la tabla
    borrarTablaCancion();
    cargaInicial();
    // indicar al usuario si se pudo realizar la accion
    Swal.fire(
      'Serie actualizada',
      'La serie seleccionada fue exitosamente actualizada',
      'success'
    );
    // cerrar la ventana modal
    modalAdminCancion.hide();
  }


// funcion para borrar canciones

window.borrarCancion = function (codigo){
    
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

                let listaCancionesNueva = listaCanciones.filter((cancion)=> {return cancion.codigo != codigo})
                listaCanciones = listaCancionesNueva
                guardarListaCanciones();

                borrarTablaCancion();
                cargaInicial();

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