let listaUsuario = JSON.parse(localStorage.getItem("listaUsuarioKey")) || [];

cargaInicialUsuario();

function cargaInicialUsuario(){
    if(listaUsuario.length > 0){
        listaUsuario.forEach((itemUsuario)=>{crearFilaUsuario(itemUsuario)})
    }
}

function guardarListaUsuario(){
      localStorage.setItem("listaUsuarioKey", JSON.stringify(listaUsuario));
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

window.borrarUsuario = function (codigo){
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
                let listaUsuarioNueva = listaUsuario.filter((usuario)=> {return usuario.codigoUsuario != codigo})
                listaUsuario = listaUsuarioNueva
                guardarListaUsuario();
                borrarTablaUsuario();
                cargaInicialUsuario();
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