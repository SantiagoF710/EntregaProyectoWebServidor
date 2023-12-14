import { RespuestaServidor } from '../respuestas/RespuestaServidor.js';

export const manejarErrores = (error, req, res, next) => {
    console.log('\x1b[31m', 'Ha ocurrido un error: ', error.stack)
    return res.status(500).json(new RespuestaServidor(error.message, true));
};