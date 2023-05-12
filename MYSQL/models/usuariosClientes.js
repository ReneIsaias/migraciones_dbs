const mongoose = require('mongoose')
const Schema = mongoose.Schema

const usuariosClientesSchema = new Schema({
    idRelacion: Number,
    idUsuario: Number,
    nombreUsuario: String,
    usuario: String,
    idCliente: Number,
    nombreCliente: String,
    rfc: String
},{
    timestamps: true,
    versionKey: false,
});

const databaseB = mongoose.connection.useDb(process.env.DB_NAME_B)
const usuariosClientes = databaseB.model('usuariosClientes', usuariosClientesSchema)
module.exports = usuariosClientes