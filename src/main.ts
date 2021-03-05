import {client} from "./config/mariadb.ts";
import {dataUser} from "./DataUtils.ts";
import {UsuarioController} from "./controller/UsuarioController.ts";
import {UsuariosModel} from "./model/user.ts";


const usuariosModel = new UsuariosModel();
const usuarioController = new UsuarioController();


function menu():string{

    console.log("MENU");
    console.log("1. crear usuario");
    console.log("2. actualizar usuario");
    console.log("3. listar usuarios");
    console.log("4. borrar usuario");
    console.log("5. salir");
    let op=prompt("opcion: ")as string;
    return op;
}
let salir=false;
//Bucle principal
while(!salir){
    const opcion=menu();

    switch (opcion) {
        case "1":{
            await usuarioController.create();
            break;
        }
        case "2":{
            const usuarios = await usuariosModel.listar();
            console.log(usuarios);
            const opcion=parseInt(prompt("opcion: ") as string);
            //modificar...
            const userUpdate= usuarioController.getById(opcion);
            console.log("Asigna nuevos valores al usuario");
            console.log(userUpdate);
            const Update = usuarioController.update(opcion);
            console.log(Update);
            break;
        }
        case "3":{

            const usuarios = await usuariosModel.listar();
            console.log(usuarios);
            break;
        }
        case "4":{
            //Deberia tenerlo de forma global?
            const usuarios = await usuariosModel.listar();
            console.log(usuarios);
            const opcion=parseInt(prompt("opcion: ") as string);
            const deleteUser= usuarioController.delete(opcion)
            console.log(deleteUser);
            break;
        }
        case "5":{
            salir=true;
            console.log("powered by MK(^o^)");
            break;
        }
        default: {
            console.log("La opcion no existe, vuelva a elegir");
            break;
        }
    }
}

