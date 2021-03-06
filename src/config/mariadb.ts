import {mysql} from '../modules.ts';
const {Client} = mysql;
//import {Client} from 'https://deno.land/x/mysql/mod.ts';
export const client = await new Client().connect({
    hostname: 'localhost',
    username: 'root',
    db: 'practice',
    password: '',
    port: 3306,
});
