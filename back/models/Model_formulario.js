import database from "../database/conexion_formulario.js";
import {DataTypes} from "sequelize";

const Formulario = database.define('formulario', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tipo_identificacion: {
        type: DataTypes.STRING
    },
    identificacion: {
        type: DataTypes.INET
    },
    nombre: {
        type: DataTypes.STRING
    },
    apellido: {
        type: DataTypes.STRING
    },
    fecha_nacimiento: {
        type: DataTypes.DATE
    },
    direccion: {
        type: DataTypes.STRING
    },
    pais: {
        type: DataTypes.STRING
    },
    departamento: {
        type: DataTypes.STRING
    },
    ciudad: {
        type: DataTypes.STRING
    },
    marca: {
        type: DataTypes.STRING
    },
    createAt: {
        type: DataTypes.DATE
    },
    updateAt: {
        type: DataTypes.DATE
    }
});
export default Formulario