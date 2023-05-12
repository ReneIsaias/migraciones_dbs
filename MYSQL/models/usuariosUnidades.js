const mongoose = require('mongoose')
const Schema = mongoose.Schema

const usuariosUnidadesSchema = new Schema({
    idRelacion: Number,
    idUsuario: Number,
    nombreUsuario: String,
    usuario: String,
    idUnidad: Number,
    marcaUnidad: String,
    modeloUnidad: String,
    anioUnidad: String,
    colorUnidad: String,
    numSerieUnidad: String
},{
    timestamps: true,
    versionKey: false,
});

const databaseB = mongoose.connection.useDb(process.env.DB_NAME_B)
const usuariosUnidades = databaseB.model('usuariosUnidades', usuariosUnidadesSchema)
module.exports = usuariosUnidades