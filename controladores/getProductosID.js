import { ModeloProductos } from '../database/ModeloProductos.js';
import { RespuestaServidor } from '../respuestas/RespuestaServidor.js';
import { RespuestaProductos } from '../respuestas/RespuestaProductos.js';

export const getProductosID = (req, res, next) => {

  const idProducto = Number(req.params.idProducto);


  ModeloProductos.findOne({ id: idProducto })
    .then((data) => {

      if (!data) {
        throw Error(`No existe un Producto con el ID ${idProducto}`);
      }

      const producto = new RespuestaProductos(data.id, data.img, data.nombre, data.precio, data.descripcion, data.categoria);

      return res.json(new RespuestaServidor(producto));
    })
    .catch(next);
};
