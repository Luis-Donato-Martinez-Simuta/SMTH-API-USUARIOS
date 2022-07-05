import { Router } from "express";
import { loginUser, allUsers, addUser,updateUser, status, deletUser, validatedUser } from "../controller/User.controller.js";
import jwt from 'jsonwebtoken';
import {
  userConfig
} from '../config/server.confing.js';

const router = Router();
// end-point para checar estaus de la api
router.get('/',status);
// end-pont para obtener todos los usuarios
router.post('/allUsers', verifyToken, allUsers);

router.post('/login',loginUser);

router.post('/newUser',verifyToken,addUser);

router.put('/updateUser',verifyToken,updateUser);

router.delete('/deleteUser/:IdUser',verifyToken,deletUser);

router.post('/validate-token', verifyToken, validatedUser);

function verifyToken(req, res, next){
    const {token} =  req.body;
    let forb = {
      error:false,
      status:403, 
      mesage: 'Acceso denegado',
    } 
    if (typeof token != undefined) {

        jwt.verify(token, userConfig.SECRET, (err, decoded) => {      
          if (err) {
            res.send({ 
              error:false,
              status:403, 
              mesage: 'Acceso denegado',
            });  
          } else {
            req.decoded = decoded;    
            next();
          }
        });
      } else {
        res.send({ 
            error:false,
            status:403, 
            mesage: 'Acceso denegado',
        });
      }


}


export default router;