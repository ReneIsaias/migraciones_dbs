const mongoose = require('mongoose')
const Schema = mongoose.Schema

const comandosEnviaSchema = new Schema({
    idComando: Number,
    comandoEnviar: String,
    fechaLimiteEnvio: Date,
    envioSockMot: Boolean,
    envioSMsProce: Boolean,
    intentoEnvio: Number,
    marcaUnidad: String,
    modeloUnidad: String,
    marcaEquipo: String,
},{
    timestamps: true,
    versionKey: false,
});

const databaseB = mongoose.connection.useDb(process.env.DB_NAME_B)
const comandosPorEnviar = databaseB.model('comandosPorEnviar', comandosEnviaSchema)
module.exports = comandosPorEnviar