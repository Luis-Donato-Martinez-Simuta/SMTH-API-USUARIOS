// Dependencias
import express from 'express';
import cors from 'cors';

// Objertos creados
import userRoutes from './routes/User.routes.js';
import './database/mysql.database.js';
import {serveConfig} from './config/serve.confing.js'

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/user',userRoutes);

let PORT = serveConfig.PORT_SERVE_API;

console.log(serveConfig);

app.listen(PORT, async () => {
    console.log("Servidor corriendo en el puerto", PORT);
});