import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const schemaGeneradorId = new Schema({
  proximoId: { type: Number, default: 1 },
  entidad: String
});

const ModeloGeneradorId = model('GeneradorId', schemaGeneradorId);


export class GeneradorId {

  static obtenerProximoId(Producto) {
    let nuevoId;

    return ModeloGeneradorId.findOne({ entidad: Producto })
      .then((objetoContador) => {
        if (!objetoContador) {
          return new ModeloGeneradorId({ entidad: Producto }).save();
        } else {
          return objetoContador;
        }
      })
      .then((objetoContador) => {
        nuevoId = objetoContador.proximoId;
        return ModeloGeneradorId.updateOne({ _id: objetoContador._id }, { $inc: { proximoId: 1 } })
      })
      .then(() => nuevoId)
  }
}
