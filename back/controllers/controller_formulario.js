import Formulario from "../models/Model_formulario.js";
import  Sequelize  from "sequelize";

const crear_formulario = async (req,res) => {
    try {
        await Formulario.create(req.body)
        res.json({
            message: 'Usuario registrado correctamente',
            estado: true
        })
    } catch (error) {
       res.json({
            message: `Usuario registrado correctamente: ${error}`,
            estado: faalse 
        });
    }

}
export default crear_formulario