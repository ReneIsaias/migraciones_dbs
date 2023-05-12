const mongoose = require('mongoose')
const Schema = mongoose.Schema

const comandosRespuestaSchema = new Schema({
    idComando: Number,
    respuestaCOmando: String,
    fechaRespuesta: Date,
    enviadoSocket: Boolean,
    enviadoSMM: Boolean,
    intentoEnvioSms: String,
    idVehiculo: Number
},{
    timestamps: true,
    versionKey: false,
});

const databaseB = mongoose.connection.useDb(process.env.DB_NAME_B)
const comandosRespuesta = databaseB.model('comandosRespuesta', comandosRespuestaSchema)
module.exports = comandosRespuesta