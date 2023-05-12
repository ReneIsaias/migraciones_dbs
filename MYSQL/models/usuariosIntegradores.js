const mongoose = require('mongoose')
const Schema = mongoose.Schema

const usuariosIntegradoresSchema = new Schema({
    idUserIntegrador: Number,
    motorUserIntegrador: Number,
    clienteIntegrador: Number,
    ultimaIntegracion: Date,
    caducidadIntegrador: Date,
    usuarioIntegrador: String,
    unidadesIntegrador: String,
    estadoIntegrador: Boolean,
},{
    timestamps: true,
    versionKey: false,
});

const databaseB = mongoose.connection.useDb(process.env.DB_NAME_B)
const usuariosIntegradores = databaseB.model('usuariosIntegradores', usuariosIntegradoresSchema)
module.exports = usuariosIntegradores