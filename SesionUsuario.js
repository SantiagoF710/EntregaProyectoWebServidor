 
 let logueado = false;

 export class SesionUsuario {

    static guardarSesion(){
        logueado = true;
    }

    static obtenerSesionActual(){
        return logueado;
    }

    static finalizarSesionActual(){
        logueado = false;
    }

 }