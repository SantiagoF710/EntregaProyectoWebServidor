import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import { conectarDB } from './database/conexion.js';
import { postProductoNuevo } from './controladores/postProductoNuevo.js';
import { getProductos } from './controladores/getProductos.js';
import { getProductosID } from './controladores/getProductosID.js';
import { postLogin } from './controladores/postLogin.js';
import { postLogout } from './controladores/postLogout.js';
import { postSignup } from './controladores/postSignup.js';
import { controlarSesion } from './middlewares/controlarSesion.js';
import { manejarErrores } from './middlewares/manejarErrores.js'
import { mostrarDatosRequest } from './middlewares/mostrarDatosRequest.js';

await conectarDB();

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use("/uploads", express.static("uploads"));

app.use(mostrarDatosRequest);

app.post('/Login', postLogin);
app.post('/Signup', postSignup);
app.post('/Logout', postLogout);

app.use(controlarSesion);

app.get('/Productos', getProductos)
app.get('/Productos/:idProducto', getProductosID)
app.post('/NuevoProducto', postProductoNuevo)

app.use(manejarErrores);

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}!`);
  });
  