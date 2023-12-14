import { ModeloProductos } from "../database/ModeloProductos.js";
import { RespuestaServidor } from "../respuestas/RespuestaServidor.js";
import { RespuestaProductos } from "../respuestas/RespuestaProductos.js";

export const getProductos = (req, res, next) => {
    ModeloProductos.find()
        .then((data) => {
        const Productos = data.map((m) => new RespuestaProductos(m.id, m.nombre, m.img,m.precio, m.descripcion, m.categoria));

        return res.json(new RespuestaServidor(Productos));
        })
        .catch((error) => {
        next(error);
        });
};