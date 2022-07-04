import { createConnection } from 'mysql';
import {databaseConfig} from '../config/server.confing.js'


const connection = createConnection({
    host : databaseConfig.HOST,
    database : databaseConfig.NAME_DATABASE,
    user : databaseConfig.USERNAME,
    password : databaseConfig.PASSWPRD,
    port : databaseConfig.PORT
});

connection.connect(function(error) {
    if (error) {
        console.error("Error en la conexcion a la base de datos: ",error);
        return;
    }
    console.log("Conexcion exitosa con la base de datos");
});

export default connection;
