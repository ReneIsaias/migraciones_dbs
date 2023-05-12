const mongoose = require('mongoose')
const Schema = mongoose.Schema

const perfilesSchema = new Schema({
    idPerfil: Number,
    nombrePerfil: String,
    idGrupo: Number,
    nombreGrupo: String,
},{
    timestamps: true,
    versionKey: false,
});

const databaseB = mongoose.connection.useDb(process.env.DB_NAME_B)
const perfilesUsuarios = databaseB.model('perfilesUsuarios', perfilesSchema)
module.exports = perfilesUsuarios