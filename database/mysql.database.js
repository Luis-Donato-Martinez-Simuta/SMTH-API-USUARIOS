import { createConnection } from 'mysql';
import {databaseConfig} from '../config/server.confing.js'



const connection = createConnection({
    host : databaseConfig.HOST,
    database : databaseConfig.NAME_DATABASE,
    user : databaseConfig.USERNAME,
    password : databaseConfig.PASSWPRD,
    port : databaseConfig.PORT
});

let _drc
if(databaseConfig.HOST == "127.0.0.1"){
    _drc = "(Local)";
}else{
    _drc = "(Online)";
}

connection.connect(function(error) {
    if (error) {
        console.error("Error en la conexcion a la base de datos: ",error);
        return;
    }
    console.log("Conexcion exitosa con la base de datos", databaseConfig.DATABASE, _drc);
});

export default connection;
