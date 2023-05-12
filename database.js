const mongoose = require('mongoose')
require('dotenv').config()

//Url para nuestra configuracion en el servidor apuntando a mongo en la nube
//const url_server = `${process.env.DB_TYPE}://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false`
//Url para nuestra conexion en local
const url_local = process.env.URL_CONNECTION

//Define los parametros para la configuracion de mongoose
const parametros = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: false,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
    family: 4
};

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useFindAndModify: false,
    useCreateIndex: true,
    autoIndex: false,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
    family: 4
};

mongoose.connect(url_local, parametros)
.then(() => console.log(`Conectado a la Base de Datos exitosamente: ${process.env.DB_NAME}`))
.catch(error => console.log(`Error al conectanos a la base de datos: ${error}`));

//Asignamos la conexion en una variable
const db = mongoose.connection

//Exportamos la conexión
module.exports = db