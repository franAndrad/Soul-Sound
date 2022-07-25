// funciones para crear la lista de usuarios en administrador
import { Usuario } from "./loginRegistro.js";
import {guardarListaUsuario} from "./nav.js";

// si hay algo en el localStorage traer esos datos, si no hay nda listaUsuario tiene que ser una []
export let listaUsuario = JSON.parse(localStorage.getItem("listaUsuarioKey")) || [];


// funciona para crear la tabla de usuarios
cargaInicialUsuario();

function cargaInicialUsuario(){
    if(listaUsuario.length > 0){
        listaUsuario.forEach((itemUsuario)=>{crearFilaUsuario(itemUsuario)})
    }
}

function crearFilaUsuario(itemUsuario){
    let tablaUsuario = document.getElementById('listaUsuario');
    tablaUsuario.innerHTML += `
    <tr>
        <th scope="row">${itemUsuario.codigoUsuario}</th>
        <td>${itemUsuario.nombre}</td>
        <td>${itemUsuario.email}</td>
        <td>
            <button class="btn btn-danger m-1 opacity-75" onclick='borrarUsuario("${itemUsuario.codigoUsuario}")'><i class="bi bi-x-square-fill"></i></button>
        </td>
    </tr>`
}

// funcion para borrar los usuarios

window.borrarUsuario = function (codigo){
    console.log(codigo);
    // pregunto si quiero borrar al usuario
    Swal.fire({
            title: "Estas seguro de querer eliminar al usuario?",
            text: "No puedes revertir este paso luego de aceptar.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, borrar.',
            cancelButtonText: 'Cancelar.'
          }).then((result) => {
            if (result.isConfirmed) {
                // borrar el usuario de listaUsario y tambien del localStorage
                let listaUsuarioNueva = listaUsuario.filter((usuario)=> {return usuario.codigoUsuario != codigo})
                listaUsuario = listaUsuarioNueva
                guardarListaUsuario();
                console.log(listaUsuarioNueva)
                console.log(listaUsuario)
                // borrar el usuario de la tabla
                borrarTablaUsuario();
                cargaInicialUsuario();
                // mostrar el cartel de operacion exitosa
              Swal.fire(
                'Usuario eliminado!',
                'El usuario fue eliminado exitosamente.',
                'success'
              )
            }
          })
}

function borrarTablaUsuario(){
    let tbodyUsuario = document.getElementById('listaUsuario')
    tbodyUsuario.innerHTML = '';
}