const mongoose = require('mongoose')
const Schema = mongoose.Schema

const unidadesCodigosSchema = new Schema({
    idUnidadCodigo: Number,
    codigoUnidad: String,
    fechaIngreaso: Date,
    numeroTelefono: String,
    ladaTel: String,
    planTelefono: Number,
    modeloEquipoTrama: String,
    marcaEquipo: Number,
    idUnidad: String,
    marcaUnidad: String,
    modeloUnidad: String,
    idCliente: Number,
    nombreCliente: String,
    rfcCliente: String,
},{
    timestamps: true,
    versionKey: false,
});

const databaseB = mongoose.connection.useDb(process.env.DB_NAME_B)
const unidadesCodigosRelacionado = databaseB.model('unidadesCodigosRelacionado', unidadesCodigosSchema)
module.exports = unidadesCodigosRelacionado