const mongoose = require('mongoose')
const Schema = mongoose.Schema

const puntosInteresSchema = new Schema({
    idPuntoInteres: Number,
    nombrePuntoInteres: String,
    latitudPuntoInteres: Number,
    longituPuntoInteres: Number,
    numeroPuntoInteres: Number,
    estadoPuntoInteres: Boolean,
    idDomicilio: Number,
    depurarPuntoIntes: String
},{
    timestamps: true,
    versionKey: false,
});

const databaseB = mongoose.connection.useDb(process.env.DB_NAME_B)
const puntosInteres = databaseB.model('puntosInteres', puntosInteresSchema)
module.exports = puntosInteres