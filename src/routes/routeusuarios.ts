import {UsuarioController} from "../controller/UsuarioController.ts";
import {oak} from '../modules.ts'

const {Router}=oak;
const router = new Router();
const usuarioController = new UsuarioController();

router
    .get('usuarios',usuarioController.listar)
    .post('/usuarios',(context)=>{
        context.response.body = 'guardando usuario'
    });

export default router