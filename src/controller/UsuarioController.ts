import {Context} from 'https://deno.land/x/oak/mod.ts';
import {UsuariosModel} from "../model/user.ts";
import {dataUser} from "../DataUtils.ts";

const usuariosModel=new UsuariosModel();

export class UsuarioController{

    async listar(context:Context){
        context.response.body=await usuariosModel.listar();
    }
    async getById(id:number){
        await usuariosModel.getById(id);
    }
    async update(id:number){
        const user=dataUser();
        user.setId(id);
        await usuariosModel.updateUserById({
            nombre: user.getNombre(),
            apellido: user.getApellido(),
            celular: user.getCelular(),
            correo: user.getCorreo(),
            contrasenia: user.getPassword(),
            id: user.getId()
        })
    }
    async create(){
        const user=dataUser();
        await usuariosModel.crear({
            nombre: user.getNombre(),
            apellido: user.getApellido(),
            celular: user.getCelular(),
            correo: user.getCorreo(),
            contrasenia: user.getPassword(),
            id:user.getId()
        });
    }
    async delete(id:number){
        await usuariosModel.deleteUserById(id);
    }

}