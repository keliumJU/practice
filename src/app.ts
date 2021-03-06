import {oak} from './modules.ts'
import routeusuarios from "./routes/routeusuarios.ts";

//import { Application, Router } from 'https://deno.land/x/oak/mod.ts';
//OAK deno para crear un servicio web

//Importamos desde nuestros propios modulos
const {Application, Router} = oak

const app = new Application();

const router = new Router();


//El router tiene un context(callback)
router.get('/',(context)=>{
   context.response.body="Hola mundo desde Oak2";
});


//getById
//router.get('/usuarios',usuarioController.getById(5));
//post para crear usuarios
//put para actualizara
//delete para eliminar

app.use(router.routes());
app.use(routeusuarios.routes());
console.log('Servidor escuchando en el puerto 8000');

await app.listen({
   port:8000,
});


//Instalamos un refrescador automatico(monitorisa cambios)
//denon run --allow-net src/app.ts

// para ejecutar este codigo utilizamos
// deno run --allow-net src/app.ts
