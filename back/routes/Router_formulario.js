import express from 'express';
import crear_formulario from '../controllers/controller_formulario.js';


const formulario_router = express.Router();

    formulario_router.post('/',crear_formulario)

export default formulario_router