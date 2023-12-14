
export class RespuestaServidor {
    mensaje = '';
    error = false;
    datos;

    constructor(mensaje, error) {
        this.mensaje = mensaje;
        this.error = error;
    }
}