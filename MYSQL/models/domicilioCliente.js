const mongoose = require('mongoose')
const Schema = mongoose.Schema

const domicilioClienteSchema = new Schema({
    idDomicilio: Number,
    calleDomicilio: String,
    numExterior: String,
    colonia: String,
    ciudad: String,
    municipio: String,
    estado: String,
    codigo_postal: String,
    latitud: String,
    longitud: String,
    pais: String,
    nombreComun: String,
    horariosCorte: String,
    idZonaHoraria: String,
    ultimaLocalizacion: String,
    dibujoPoli: String,
    idClientes: Number,
    rfcCliente: String,
    nombreCliente: String,
    idRegion: String
},{
    timestamps: true,
    versionKey: false,
});

const databaseB = mongoose.connection.useDb(process.env.DB_NAME_B)
const domicilioClientes = databaseB.model('domicilioClientes', domicilioClienteSchema)
module.exports = domicilioClientes