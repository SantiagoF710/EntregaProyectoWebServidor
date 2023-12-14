export class RespuestaProductos {
    id;
    nombre;
    img;
    precio;
    descripcion;
    categoria;

    constructor(
        id = 0,
        nombre = '',
        img = '',
        precio = '',
        descripcion = '',
        categoria = '',
    ) {
        this.id = id;
        this.nombre = nombre;
        this.img = img;
        this.precio = precio;
        this.descripcion = descripcion;
        this.categoria = categoria;
    }

}