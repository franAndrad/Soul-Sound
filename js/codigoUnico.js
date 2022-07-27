export function generarCodigo() {

    let caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let id = "";
    let arreglo = [];
    let longitudCaracteres = 4;
    let limiteArreglo = 1000;
    
    const generarId = () => {
        while (arreglo.length < limiteArreglo) {
            for (let i = 0; i <= longitudCaracteres; i++) {
                id += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
            }
            if (!arreglo.includes(id)) {
                arreglo.push(id);
            }
            id = "";
        }
        return arreglo[0];
    }
    
    return generarId();
    }