import { createConnection } from 'mysql';
import {databaseConfig} from '../config/server.confing.js'



export const databaseConfig = {
    HOST :  "200.52.83.41",
    USERNAME : "rhchia_admin",
    PASSWPRD :   "admin@2021",
    DATABASE:  "rhchia_db_erp",
    PORT :  3306,
}

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
