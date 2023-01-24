import {Sequelize} from 'sequelize';

const database = new Sequelize('formulario','root','',{
    host: 'localhost',
    dialect: 'mysql'
})
export default database