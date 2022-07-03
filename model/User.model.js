import connection  from "../database/mysql.database.js"



export const login = (user,callback) => {

    let sql = 'call rhchia_db_erp.loguinUser("'+user.username+'","'+user.password+'" );';

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

    let sql = 'call rhchia_db_erp.getAllUsers();';
    //console.log(sql);
    connection.query(sql, (err, data) => {
        if (err) {
            throw err
        };
        if (data.length > 0) {
            //console.log(data);
            return callback(data[0]);
        };

        return callback(null);
    });
}

export const newUser = (user,callback) => {

    let sql = 'call rhchia_db_erp.newUser(  "'+user.IdTypeUser+'", "'+user.fullname+'", "'+user.username+'", "'+user.password+'", "'+user.mail+'", "'+user.numberPhone+'");';
    //_IdTypeUser, _fullname, _username, _password, _mail, _numberPhone

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
    let sql = 'call rhchia_db_erp.updateUser(  '+user.IdUser+', "'+user.IdTypeUser+'", "'+user.fullname+'", "'+user.username+'", "'+user.password+'", "'+user.mail+'", "'+user.numberPhone+'");';
    //_IdTypeUser, _fullname, _username, _password, _mail, _numberPhone
    //console.log(sql);

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
    let sql = 'call rhchia_db_erp.deleteUser('+IdUser+');';

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