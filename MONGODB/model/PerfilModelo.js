const mongoose = require('mongoose')
const Schema = mongoose.Schema

const perfilSchema = new Schema({
    nombre: {
        type: String,
        unique: true,
    },
    descripcion: String,
    tipo_perfil: String,
    categoria: String,
    acceso_total: {
        type: Boolean,
        default: false,
    },
    estado: {
        type: Boolean,
        default: true,
    },
    permisos: [{
        _id: false,
        type: Schema.Types.ObjectId,
        ref: 'permisos',
    }],
    eliminado: Date,
},{
    timestamps: true,
    versionKey: false,
});

const databaseA = mongoose.connection.useDb(process.env.DB_NAME_A)
const PerfilModelo = databaseA.model('perfiles', perfilSchema)
module.exports = PerfilModelo