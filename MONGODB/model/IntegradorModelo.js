const mongoose = require('mongoose')
const Schema = mongoose.Schema

const integradorSchema = new Schema({
    motorintegrador: Number,
    integrador: String,
    logotipo: String,
    inputs: [String],
    informacion: String,
    estado: {
        type: Boolean,
        default: true,
    },
    usuarios: [{
        _id: false,
        motorselector: Number,
        id_cliente: {
            type: Schema.Types.ObjectId,
            ref: 'clientes',
        },
        ultintegracion: Date,
        caducidad: Date,
        estado: {
            type: Boolean,
            default: true,
        },
        inputs: {
            tipoUsuario: String,
            usuario: String,
            tipoContrasenia: String,
            contrasenia: String,
        },
        id_unidades: [{
            type: Schema.Types.ObjectId,
            ref: 'unidades',
        }],
    }],
    eliminado: Date,
},{
    timestamps: true,
    versionKey: false,
});

const databaseA = mongoose.connection.useDb(process.env.DB_NAME_A)
const integradorModelo = databaseA.model('integradores', integradorSchema)
module.exports = integradorModelo