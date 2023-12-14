import { SesionUsuario } from "../SesionUsuario.js";
import { RespuestaServidor } from "../respuestas/RespuestaServidor.js";

export const postLogout = (req, res) => {
    SesionUsuario.finalizarSesionActual();

    return res.json(new RespuestaServidor('Sesion finalizada con exito!'));
};