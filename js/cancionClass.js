export class Cancion {
    constructor(codigo, autor, titulo, album, duracion, genero){
        this.codigo = codigo;
        this.autor= autor;
        this.titulo = titulo;
        this.album = album;
        this.duracion = duracion;
        this.genero = genero;
    }

    get mostrarCodigo() {
        return this.codigo;
    }

    set editarCodigo(codigo) {
        this.codigo = codigo;
    }

    get mostrarAutor() {
        return this.autor;
    }

    set editarAutor(autor) {
        this.autor = autor;
    }

    get mostrarTitulo() {
        return this.titulo;
    }

    set editarTitulo(titulo) {
        this.titulo = titulo;
    }

    get mostrarAlbum() {
        return this.album;
    }

    set editarAlbum(album) {
        this.album = album;
    }

    get mostrarDuracion() {
        return this.duracion;
    }

    set editarDuracion(duracion) {
        this.duracion = duracion;
    }

    get mostrarGenero() {
        return this.genero;
    }

    set editarGenero(genero) {
        this.genero = genero;
    }
}