// Dependencias
import express from 'express';
import cors from 'cors';

// Objertos creados
import './database/mysql.database.js';
import {serveConfig} from './config/server.config.js'

const app = express();

app.use(express.json());
app.use(cors());


let PORT = serveConfig.PORT_SERVE_API;


app.listen(PORT, async () => {
    console.log("Servidor corriendo en el puerto", PORT) 
    //mysql.
});