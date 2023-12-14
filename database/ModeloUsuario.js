import mongoose from 'mongoose';

const { Schema, model} = mongoose;

const schemusuario = new Schema({
    email: {
        type:String,
        required: [true, 'Email es requerido'],
        unique: true

    },

    password: {type: String, requiered: true}

});

export const ModeloUsuario = model('Usuario', schemusuario);

