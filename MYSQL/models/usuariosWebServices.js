const mongoose = require('mongoose')
const Schema = mongoose.Schema

const usuariosWebServicesSchema = new Schema({
    idUsuarioWs: Number,
    userUsuariosWS: String,
    passwordUsuariosWS: String,
    codigoUsuariosWS: String,
    hotsUsuariosWS: String,
},{
    timestamps: true,
    versionKey: false,
});

const databaseB = mongoose.connection.useDb(process.env.DB_NAME_B)
const usuarioWebServices = databaseB.model('usuarioWebServices', usuariosWebServicesSchema)
module.exports = usuarioWebServices