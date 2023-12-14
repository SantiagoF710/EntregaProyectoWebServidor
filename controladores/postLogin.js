import { ModeloUsuario } from '../database/ModeloUsuario.js';
import { RespuestaServidor } from '../respuestas/RespuestaServidor.js';
import { SesionUsuario } from '../SesionUsuario.js';

export const postLogin = (req, res, next) => {
  
  const emailUsuario = req.body.email;
  const passwordUsuario = req.body.password;
  
  if (!emailUsuario || !passwordUsuario) {
    throw new Error('Debe ingresar un email y una contraseña');
  }

  const errorUsuarioPassword = new Error('Usuario y/o contraseña incorrectas');

  ModeloUsuario.findOne({ email: emailUsuario })
    .then((usuario) => {

      if (!usuario) {
        throw errorUsuarioPassword;
      }

      if (passwordUsuario !== usuario.password) {
        throw errorUsuarioPassword;
      }

      SesionUsuario.guardarSesion();

      return res.json(new RespuestaServidor('Login exitoso!'));
    })
    .catch(next);
};
