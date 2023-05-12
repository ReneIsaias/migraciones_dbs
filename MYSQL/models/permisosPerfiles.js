const mongoose = require('mongoose')
const Schema = mongoose.Schema

const permisosPerfilesSchema = new Schema({
    idPermiso: Number,
    nombrePermiso: String,
    depuracion: String,
    idPerfil: Number,
    nombrePerfil: String,
},{
    timestamps: true,
    versionKey: false,
});

const databaseB = mongoose.connection.useDb(process.env.DB_NAME_B)
const permisosPerfiles = databaseB.model('permisosPerfiles', permisosPerfilesSchema)
module.exports = permisosPerfiles