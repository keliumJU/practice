import {Client} from 'https://deno.land/x/mysql/mod.ts';
export const client = await new Client().connect({
    hostname: 'localhost',
    username: 'root',
    db: 'practice',
    password: '',
    port: 3306,
});

//Ejercicio realizar un crud para registrar Usuarios guardando en una base datos
// Mysql maria db
//debe permitir las funciones basicas:
//Listar usuarios
//crear usuarios
//actualizar usuarios
//eliminar usuarios

//campos
/*
se va registrar usuarios
guardar en memirira ram(array)
nombre- apellido > 3 charactere, celular(optional==10characteres), correo(requerido,formatoemail),
    constrasenia(8characteres, letra mayus, character especial)

//si todo esta bien se guarda el registor

--note: Incluir en el proyecto SQL de la base de datos
--trabajar con github
--entregar la url del repositorio
*/