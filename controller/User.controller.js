import {
    login,
    getAllUsers,
    newUser,
    _updateUser,
    _deletUser
} from '../model/User.model.js';
import jwt from 'jsonwebtoken';
import {
    userConfig
} from '../config/server.confing.js';


export const status = (req, res) => {
    try {

        res.json({
            error: false,
            status: 200,
            mesage: "Api usuarios funcionando",
        });
    } catch (error) {
        res.json({
            error: true,
            status: 500,
            mesage: "Error en el servidor",
        });
    }

}

export const loginUser = (req, res) => {

    let user = {
        username: req.body.username,
        password: req.body.password
    }

    try {
        login(user, (data) => {
            user = data;
            if (data) {
                
                jwt.sign({
                    user
                }, userConfig.SECRET, {
                    expiresIn: '1h'
                }, (err, token) => {
                    if (err) {
                        res.json({
                            error: true,
                            tipoError: 403,
                            mesage: "Error en el servidor",
                        });
                    } else {
                        
                        res.json({
                            error: false,
                            mesage: "Usuario encontrado",
                            user,
                            token,

                        });
                    }
                });

            } else {
                res.json({
                    error: false,
                    mesage: "Usuario no encontrado",
                    user: null,
                })
            }

        });
    } catch (error) {
        
        res.json({
            error: true,
            mesage: "Error en el servidor",
            error,
        })
    }
}

export const allUsers = (req, res) => {

    try {
        getAllUsers((data) => {
            let users = data;

            res.json({
                error: false,
                mesage: "Usuarios encontrados",
                users,

            });
        })
    } catch (error) {
        res.json({
            error: true,
            mesage: "Error en el servidor",
            error,
        })
    }



};

export const addUser = (req, res) => {

    let user = {
        IdTypeUser: req.body.IdTypeUser,
        fullname: req.body.fullname,
        username: req.body.username,
        password: req.body.password,
        mail: req.body.mail,
        numberPhone: req.body.numberPhone,
    };

    try {
        newUser(user, (data) => {
            let user = data;
            res.json({
                error: false,
                mesage: "Usuario agregado",
                user,

            });
        });
    } catch (error) {
        res.json({
            error: true,
            mesage: "Error en el servidor",
            error,
        })
    }

};




export const updateUser = (req, res) => {

    let user = {
        IdUser: req.body.IdUser,
        IdTypeUser: req.body.IdTypeUser,
        fullname: req.body.fullname,
        username: req.body.username,
        password: req.body.password,
        mail: req.body.mail,
        numberPhone: req.body.numberPhone,
    };

    try {
        _updateUser(user, (data) => {

            //console.log(data);
            res.json({
                error: false,
                status: 200,
                mesage: "Usuario actualizado",
            });
        });
    } catch (error) {
        res.json({
            error: true,
            mesage: "Error en el servidor",
            error,
        })
    }

};


export const deletUser = (req, res) => {
    let IdUser = req.params.IdUser;

    try {
        _deletUser(IdUser, (data) => {
            res.json({
                error: false,
                status: 200,
                mesage: "Usuario eliminado",
            });
        });
    } catch (error) {
        res.json({
            error: true,
            mesage: "Error en el servidor",
            error,
        })
    }



}


export const validatedUser = (req, res) => {

    //res.sendStatus(200)
    res.json({
        error: false,
        status: 200,
        mesage: "Acceso autorizado",
    });

}