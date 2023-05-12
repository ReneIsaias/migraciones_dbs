const mongoose = require('mongoose')
const Schema = mongoose.Schema

const logSchema = new Schema({
    tipo_accion: String,
    registro: {
        type: Date,
        value: Date.now,
    },
    id_usuario: {
        type: Schema.Types.ObjectId,
        ref: 'usuarios',
    },
    coleccion: String,
    descripcion: String,
    datos_antes: Object,
    datos_nuevos: Object,
    datos_host: Object,
    estado: {
        type: Boolean,
        default: false
    }
},{
    timestamps: true,
    versionKey: false,
});

const databaseA = mongoose.connection.useDb(process.env.DB_NAME_A)
const LogModelo = databaseA.model('logs', logSchema)
module.exports = LogModelo