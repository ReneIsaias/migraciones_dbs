const mongoose = require('mongoose')
const Schema = mongoose.Schema

const gruposSchema = new Schema({
    idGrupo: Number,
    nombreGrupo: String,
    estado: Boolean
},{
    timestamps: true,
    versionKey: false,
});

const databaseB = mongoose.connection.useDb(process.env.DB_NAME_B)
const gruposUsuario = databaseB.model('gruposUsuario', gruposSchema)
module.exports = gruposUsuario