import mongoose from 'mongoose';

const { Schema, model} = mongoose

const schemaProductos = new Schema({
    id: {type:Number, required: true, unique:true},
    img:{type:String, required: true},
    nombre: {type:String, required:true},
    precio:{type:Number, requierd:true},
    descripcion:{type:String, required:true},
    categoria:{type:String, required:true},
    
});

export const ModeloProductos = model('Productos', schemaProductos);