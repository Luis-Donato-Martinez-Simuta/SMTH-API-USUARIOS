import { Router } from "express";
import { loginUser, allUsers, addUser,updateUser, status, deletUser } from "../controller/User.controller.js";

const router = Router();

router.get('/',status);

router.post('/allUsers',allUsers);

router.post('/login',loginUser);

router.post('/newUser',addUser);

router.put('/updateUser',updateUser);

router.delete('/deleteUser/:IdUser',deletUser);

function verifyToken(req, res, next){
    const accesToken =  req.headers['token'];
    //console.log("Validando token");
    if(typeof accesToken != undefined){
         //const bearerToken = accesToken.split(" ")[1];
         //console.log("Token: ",accesToken);
         req.token  = accesToken;
         next();
    }else{
        res.sendStatus(403);
    }
}


export default router;