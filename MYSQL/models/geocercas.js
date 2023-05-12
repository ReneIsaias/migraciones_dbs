const mongoose = require('mongoose')
const Schema = mongoose.Schema

const geocercaSchema = new Schema({
    idGeocerca: Number,
    enDesuso: String,
    tipoGeocerca: String,
    enDesusoDos: String,
    datosGeocerca: String,
    nombreGeocerca: String,
    estadoGeocerca: Boolean,
    idCliente: Number,
},{
    timestamps: true,
    versionKey: false,
});

const databaseB = mongoose.connection.useDb(process.env.DB_NAME_B)
const geocercas = databaseB.model('geocercas', geocercaSchema)
module.exports = geocercas