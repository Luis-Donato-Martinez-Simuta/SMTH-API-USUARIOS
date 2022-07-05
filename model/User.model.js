import connection  from "../database/mysql.database.js"
import {databaseConfig} from '../config/server.confing.js'

export const login = (user,callback) => {
    
    let sql = 'call '+databaseConfig.DATABASE+'.loguinUser("'+user.username+'","'+user.password+'" );';
    //let sql = 'call smtu_db_user.loguinUser("'+user.username+'","'+user.password+'" );';

    connection.query(sql, (err, data) => {
        if (err) {
            throw err
        };
        if (data.length > 0) {
            return callback(data[0][0]);
        };

        return callback(null);
    });
}


export const getAllUsers = (callback) => {

    let sql = 'call '+databaseConfig.DATABASE+'.getAllUsers();';
    //let sql = 'call smtu_db_user.getAllUsers();';
    
    connection.query(sql, (err, data) => {
        if (err) {
            throw err
        };
        if (data.length > 0) {
            
            return callback(data[0]);
        };

        return callback(null);
    });
}

export const newUser = (user,callback) => {

    let sql = 'call '+databaseConfig.DATABASE+'.newUser(  "'+user.IdTypeUser+'", "'+user.fullname+'", "'+user.username+'", "'+user.password+'", "'+user.mail+'", "'+user.numberPhone+'");';
    //let sql = 'call smtu_db_user.newUser(  "'+user.IdTypeUser+'", "'+user.fullname+'", "'+user.username+'", "'+user.password+'", "'+user.mail+'", "'+user.numberPhone+'");';
    

    connection.query(sql, (err, data) => {
        if (err) {
            throw err
        };
        if (data.length > 0) {
            return callback(data[0][0]);
        };

        return callback(null);
    });
}

export const _updateUser = (user,callback) => {    

    let sql = 'call '+databaseConfig.DATABASE+'.updateUser(  '+user.IdUser+', "'+user.IdTypeUser+'", "'+user.fullname+'", "'+user.username+'", "'+user.password+'", "'+user.mail+'", "'+user.numberPhone+'");';
    //let sql = 'call smtu_db_user.updateUser(  '+user.IdUser+', "'+user.IdTypeUser+'", "'+user.fullname+'", "'+user.username+'", "'+user.password+'", "'+user.mail+'", "'+user.numberPhone+'");';
    
    connection.query(sql, (err, data) => {
        if (err) {
            throw err
        };
        if (data.length > 0) {
            return callback(data[0][0]);
        };

        return callback(null);
    });
}


export const _deletUser = (IdUser, callback) => {

    let sql = 'call '+databaseConfig.DATABASE+'.deleteUser('+IdUser+');';
    //let sql = 'call smtu_db_user.deleteUser('+IdUser+');';

    connection.query(sql, (err, data) => {
        if (err) {
            throw err
        };
        if (data.length > 0) {
            return callback(data[0][0]);
        };

        return callback(null);
    });
}