const mongoose = require('mongoose')
const Schema = mongoose.Schema

const integradoresNewShema = new Schema({
    motorselector: Number,
    cliente_id: Number,
    ultintegracion: Date,
    caducidad: Date,
    estado: Boolean,
    inputs: {
        tipoUsuario: String,
        usuario: String,
        tipoContrasenia: String,
        contrasenia: String,
    },
    unidades: [{
        idUnidad: String,
        respuesta: String,
        ultimaConexion: Date
    }]
},{
    timestamps: true,
    versionKey: false,
});

const databaseB = mongoose.connection.useDb(process.env.DB_NAME_B)
const integradoresnew = databaseB.model('integradoresnew', integradoresNewShema)
module.exports = integradoresnew