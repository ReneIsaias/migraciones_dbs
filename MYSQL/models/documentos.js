const mongoose = require('mongoose')
const Schema = mongoose.Schema

const documentosSchema = new Schema({
    idDocumento: Number,
    documento: String,
    tipoArchivo: String,
    fechaCaptura: Date,
    numArchivo: String,
    comentarios: String,
    fechaVencimiento: Date,
    tipoDocumento: String,
    idTipoDocumento: String,
    nombreDocumento: String,
    idPermisosModulo: String,
    nombrePermiso: String
},{
    timestamps: true,
    versionKey: false,
});

const databaseB = mongoose.connection.useDb(process.env.DB_NAME_B)
const documentos = databaseB.model('documentos', documentosSchema)
module.exports = documentos