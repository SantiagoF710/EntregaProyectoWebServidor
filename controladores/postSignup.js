import { ModeloUsuario } from "../database/ModeloUsuario.js";
import { RespuestaServidor } from "../respuestas/RespuestaServidor.js";

export const postSignup = (req, res, next) => {
    const nuevoEmail = req.body.email;
    const nuevoPasswpord = req.body.password;
    
    if (!nuevoEmail || !nuevoPasswpord) {
        throw new Error('Debe ingrear un email y una contraseña');
    }

    ModeloUsuario.findOne({email: nuevoEmail})
    .then((data) => {

        if (data) {
            throw new Error(`Ya existe un usuario con el email ${nuevoEmail}`);
        }

        const instanciaUsuario = new ModeloUsuario({
            email: nuevoEmail,
            password: nuevoPasswpord
        });

        return instanciaUsuario.save()

    })

    .then(() => {
        return res.json(new RespuestaServidor(`Nuevo usuario agregado con email ${nuevoEmail}`));
    })
    .catch(next);
};