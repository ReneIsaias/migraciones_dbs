const mongoose = require('mongoose')
const Schema = mongoose.Schema

const geocercaRelacionadoSchema = new Schema({
    idGeocerca: Number,
    enDesuso: String,
    tipoGeocerca: Number,
    enDesusoDos: String,
    datosGeocerca: String,
    nombreGeocerca: String,
    estadoGeocerca: Boolean,
    idCliente: Number,
    nombreCliente: String,
    rfcCliente: String,
},{
    timestamps: true,
    versionKey: false,
});

const databaseB = mongoose.connection.useDb(process.env.DB_NAME_B)
const geocercasRelacionado = databaseB.model('geocercasRelacionado', geocercaRelacionadoSchema)
module.exports = geocercasRelacionado