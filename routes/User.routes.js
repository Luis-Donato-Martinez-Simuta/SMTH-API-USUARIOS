import { Router } from "express";
import { loginUser, allUsers, addUser,updateUser, status, deletUser } from "../controller/User.controller.js";
import jwt from 'jsonwebtoken';
const router = Router();

router.get('/',status);

router.post('/allUsers',verifyToken,allUsers);

router.post('/login',loginUser);

router.post('/newUser',verifyToken,addUser);

router.put('/updateUser',verifyToken,updateUser);

router.delete('/deleteUser/:IdUser',verifyToken,deletUser);

function verifyToken(req, res, next){
    console.log("Validando token");
    const {token} =  req.body;
    console.log("token",token);

    if (typeof token != undefined) {
        jwt.verify(token, "secretkey", (err, decoded) => {      
          if (err) {
            res.sendStatus(403);
            res.json({ mensaje: 'Acceso denegado' });    
          } else {
            req.decoded = decoded;    
            next();
          }
        });
      } else {
        res.sendStatus(403);
        res.send({ 
            error:false,
            mesage: 'Acceso denegado',
            status:4003, 
        });
      }


}


export default router;