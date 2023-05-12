const mongoose = require('mongoose')
const Schema = mongoose.Schema

const clientesShema = new Schema({
    idCliente: Number,
    rfcCliente: String,
    nombreCliente: String,
    estadoCliente: Boolean,
    envioSms: Boolean
},{
    timestamps: true,
    versionKey: false,
});

const databaseB = mongoose.connection.useDb(process.env.DB_NAME_B)
const clientes = databaseB.model('clientes', clientesShema)
module.exports = clientes