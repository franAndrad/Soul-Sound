// funciones para crear la lista de usuarios en administrador
import {listaUsuario} from "./nav.js";

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
        <th scope="row"></th>
        <td>${itemUsuario.nombre}</td>
        <td>${itemUsuario.email}</td>
        <td>
            <button class="btn btn-danger m-1 opacity-75"><i class="bi bi-x-square-fill"></i></button>
        </td>
    </tr>`
}