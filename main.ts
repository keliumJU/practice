import {client} from "./mariadb.ts";
import {dataUser} from "./DataUtils.ts";

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
    let opcion=menu();

    switch (opcion) {
        case "1":{
            let user=dataUser();
            let create = await client.execute('insert into user(nombre,apellido,celular,correo,contrasenia) ' +
                'values("'+user.getNombre()+'","'+user.getApellido()+'","'+user.getCelular()+'","'+user.getCorreo()+'","'+user.getPassword()+'")');
            break;
        }
        case "2":{
            let showAll = await client.execute('select * from user');
            console.log(showAll.rows);
            let opcion=prompt("opcion: ") as string;
            let userUpdate=await client.execute('select * from user where id='+opcion);
            console.log("Asigna nuevos valores al usuario");
            console.log(userUpdate.rows);
            let user2=dataUser();
            let update = await client.execute('update user set nombre="'+user2.getNombre()+'",apellido="'+user2.getApellido()+'",' +
                'celular="'+user2.getCelular()+'",correo="'+user2.getCorreo()+'",contrasenia="'+user2.getPassword()+'" where id='+opcion);
            console.log(update.affectedRows);
            break;
        }
        case "3":{
            let showAll = await client.execute('select * from user');
            console.log(showAll.rows);
            break;
        }
        case "4":{
            let showAll = await client.execute('select * from user');
            console.log(showAll.rows);
            let opcion=prompt("opcion: ") as string;
            let deleteRegister = await client.execute('delete from user where id='+opcion);
            console.log(deleteRegister.affectedRows);
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

