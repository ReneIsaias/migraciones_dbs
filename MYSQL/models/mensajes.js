
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const mensajesSchema = new Schema({
    idMensaje: Number,
    textoMensaje: String,
    nivelMensaje: Number
},{
    timestamps: true,
    versionKey: false,
});

const databaseB = mongoose.connection.useDb(process.env.DB_NAME_B)
const mensajes = databaseB.model('mensajes', mensajesSchema)
module.exports = mensajes