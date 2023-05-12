const mongoose = require('mongoose')
const Schema = mongoose.Schema

const documentosShema = new Schema({
    idDocumento: Number,
    nombreDocumento: String,
    tipoDocumento: Number,
    estadoDocumento: Boolean,
    idGrupo: Number,
    nombreGrupo: String,
},{
    timestamps: true,
    versionKey: false,
});

const databaseB = mongoose.connection.useDb(process.env.DB_NAME_B)
const tiposDocumentos = databaseB.model('tiposDocumentos', documentosShema)
module.exports = tiposDocumentos