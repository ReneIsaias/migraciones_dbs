const mongoose = require('mongoose')
const Schema = mongoose.Schema

const usuariosSchema = new Schema({
    idUsuario: Number,
    nombreCompletoUsuario: String,
    userUsuario: String,
    passwordUsuario: String,
    ultimoAcceso: Date,
    adminTotal: Boolean,
    adminCuenta: Boolean,
    expiracionAcceso: Date,
    estadoUsuario: Boolean,
    cuentaBloqueadaUsuario: Boolean,
    idPerfil: Number,
    idGrupo: Number,
    nombreGrupo: String,
},{
    timestamps: true,
    versionKey: false,
});

const databaseB = mongoose.connection.useDb(process.env.DB_NAME_B)
const usuarios = databaseB.model('usuarios', usuariosSchema)
module.exports = usuarios