import express from 'express';
import cors from 'cors'
import database from './database/conexion_formulario.js';
import formulario_router from './routes/Router_formulario.js';

const app = express();
const port = 3000;

try {
    await database.authenticate()
    console.log('conexion exitosa')
} catch (error) {
    console.log('conexion  no exitosa')
}

app.use(cors());
app.use(express.json());
app.use('/formulario', formulario_router)

app.listen(port, () => {
    console.log(`http://localhost:3000`)
});