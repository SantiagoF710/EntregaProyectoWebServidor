/* PRUEBA DE ENDPOINT A BD */

import { ModeloProductos } from '../database/ModeloProductos.js';
import { RespuestaServidor } from '../respuestas/RespuestaServidor.js';
import { GeneradorId } from '../database/GeneradorId.js';

export const postProductoNuevo = (req, res, next) => {
  
  let nuevoId;

  GeneradorId.obtenerProximoId('Producto')
    .then((idGenerado) => {
      nuevoId = idGenerado;

      const instanciaProducto = new ModeloProductos({
          id: nuevoId,
          img: req.body.img,
          nombre: req.body.nombre,
          precio: req.body.precio,
          descripcion: req.body.descripcion,
          categoria: req.body.categoria,
      });

      return instanciaProducto.save();
    })
    .then(() => {
      return res.json(new RespuestaServidor(`Nuevo Producto agregado con ID ${nuevoId}`));
    })
    .catch(next);
};
