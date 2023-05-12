const mongoose = require('mongoose')
const Schema = mongoose.Schema

const usuarioSchema = new Schema({
    informacion: {
        nombre: String,
        primer_apellido: String,
        segundo_apellido: String,
    },
    usuario: {
        type: String,
        unique: true,
    },
    password: String,
    emails: [String],
    numeros: [String],
    descripcion: String,
    ws: {
        type: Boolean,
        default: false,
    },
    registro: {
        type: Date,
        default: Date.now,
    },
    vencimiento: Date,
    preferencias: [String],
    ultimo_acceso: Date,
    area: String,
    estado: {
        type: Boolean,
        default: true,
    },
    id_cliente_raiz: {
        type: Schema.Types.ObjectId,
        ref: 'clientes',
    },
    movimientos: [{
        _id: false,
        tipo_accion: String,
        fecha: {
            type: Date,
            value: Date.now,
        },
        coleccion: String,
        descripcion: String,
        datos_antes: Object,
        datos_nuevos: Object,
        datos_host: Object,
    }],
    id_perfil: {
        type: Schema.Types.ObjectId,
        ref: 'perfiles',
    },
    id_permisos: [{
        type: Schema.Types.ObjectId,
        ref: 'permisos',
    }],
    asignaciones: [{
        id_unidad: {
            type: Schema.Types.ObjectId,
            ref: 'unidades',
        },
        id_cliente: {
            type: Schema.Types.ObjectId,
            ref: 'clientes',
        },
    }],
    eliminado: Date,
},{
    timestamps: true,
    versionKey: false,
});

const databaseA = mongoose.connection.useDb(process.env.DB_NAME_A)
const UsuarioModelo = databaseA.model('usuarios', usuarioSchema)
module.exports = UsuarioModelo