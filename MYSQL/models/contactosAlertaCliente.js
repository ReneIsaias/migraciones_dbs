const mongoose = require('mongoose')
const Schema = mongoose.Schema

const contactosAlertaClienteSchema = new Schema({
    idContacto: Number,
    nombreContacto: String,
    telefonoContacto: String,
    emailContacto: String,
    idCliente: Number,
    idDomicilio: Number
},{
    timestamps: true,
    versionKey: false,
});

const databaseB = mongoose.connection.useDb(process.env.DB_NAME_B)
const contactosAlertaClientes = databaseB.model('contactosAlertaClientes', contactosAlertaClienteSchema)
module.exports = contactosAlertaClientes