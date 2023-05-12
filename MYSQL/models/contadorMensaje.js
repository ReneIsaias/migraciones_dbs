const mongoose = require('mongoose')
const Schema = mongoose.Schema

const contadorMensajes = new Schema({
    idContador: Number,
    anioContador: String,
    mesContador: String,
    contadorPeriodo: String,
    idVehiculo: Number
},{
    timestamps: true,
    versionKey: false,
});

const databaseB = mongoose.connection.useDb(process.env.DB_NAME_B)
const contadorMensajes = databaseB.model('contadorMensajes', contadorMensajes)
module.exports = contadorMensajes