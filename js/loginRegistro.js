// script del login y registro
export class Usuario{
    constructor(nombre, email, password){
        this.nombre = nombre;
        this.email = email;
        this.password = password;
    }
    get tenerNombre(){
        return this.nombre;
    }
    get tenerEmail(){
        return this.email;
    }
    get tenerPassword(){
        return this.password;
    }
    set cambiarNombre(nuevoNombre){
        this.nombre = nuevoNombre
    }
    set cambiarEmail(nuevoEmail){
        this.email = nuevoEmail;
    }
    set cambiarPassword(nuevoPassword){
        this.password = nuevoPassword;
    }
}

