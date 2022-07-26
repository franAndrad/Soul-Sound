export class Cancion {
    constructor(codigo, autor, titulo, album, cancion, portada, duracion, genero){
        this.codigo = codigo;
        this.autor= autor;
        this.titulo = titulo;
        this.album = album;
        this.cancion = cancion;
        this.portada = portada;
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

    get mostrarCancion() {
        return this.cancion;
    }

    set editarCancion(cancion) {
        this.cancion = cancion;
    }

    get mostrarPortada() {
        return this.portada;
    }

    set editarPortada(portada) {
        this.portada = portada;
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