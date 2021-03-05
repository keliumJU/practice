import { Application, Router } from 'https://deno.land/x/oak/mod.ts';
//OAK deno para crear un servicio web
import {UsuarioController} from "./controller/UsuarioController.ts";

const app = new Application();

const router = new Router();

const usuarioController=new UsuarioController();

//El router tiene un context(callback)
router.get('/',(context)=>{
   context.response.body="Hola mundo desde Oak";
});

router.get('/usuarios',usuarioController.listar);

//getById
//router.get('/usuarios',usuarioController.getById(5));
//post para crear usuarios
//put para actualizara
//delete para eliminar

app.use(router.routes());

console.log('Servidor escuchando en el puerto 8000');

await app.listen({
   port:8000,
});


// para ejecutar este codigo utilizamos
// deno run --allow-net src/app.ts
