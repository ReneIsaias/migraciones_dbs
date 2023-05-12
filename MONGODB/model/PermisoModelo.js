const mongoose = require('mongoose')
const Schema = mongoose.Schema

const permisoSchema = new Schema({
    nombre: {
        type: String,
        unique: true,
    },
    descripcion: String,
    alias: String,
    estado: {
        type: Boolean,
        default: true,
    },
    eliminado: Date,
},{
    timestamps: true,
    versionKey: false,
});

const databaseA = mongoose.connection.useDb(process.env.DB_NAME_A)
const PermisoModelo = databaseA.model('permisos', permisoSchema)
module.exports = PermisoModelo