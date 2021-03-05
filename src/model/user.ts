import { client } from "../config/mariadb.ts";
import {UsuarioDTO} from "../dto/usuario.ts";

export class UsuariosModel {
    async listar(): Promise<UsuarioDTO[]> {
        const showAll = await client.execute('select * from user');
        return showAll.rows as UsuarioDTO[];
    }

    async getById(id: number): Promise<UsuarioDTO[]> {
        const userUpdate = await client.execute('select * from user where id=?', [
            id
        ]);
        return userUpdate.rows as UsuarioDTO[];
    }

    async updateUserById(usuario: UsuarioDTO): Promise<number|undefined>{
        const update = await client.execute(`update user set nombre=?,apellido=?,celular=?,correo=?,contrasenia=? where id=?`,[
            usuario.nombre,
            usuario.apellido,
            usuario.celular,
            usuario.correo,
            usuario.contrasenia,
            usuario.id
        ]);
        return update.affectedRows;
    }
    async deleteUserById(id: number): Promise< number | undefined> {
        const deleteUser = await client.execute(`delete from user where id=?`,[
            id
        ]);
        return deleteUser.affectedRows;
    }
    async crear(usuario: UsuarioDTO){
        return await client.execute(`insert into user(nombre,apellido,celular,correo,contrasenia) values(?,?,?,?,?)`,[
                usuario.nombre,
                usuario.apellido,
                usuario.celular,
                usuario.correo,
                usuario.contrasenia
        ]);
    }

}