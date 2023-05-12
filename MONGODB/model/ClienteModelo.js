const mongoose = require('mongoose')
const Schema = mongoose.Schema

const clienteSchema = new Schema({
    cliente: {
        rfc: {
            type: String,
            unique: true,
        },
        rs: {
            type: String,
            unique: true,
        },
        nc: String,
    },
    informacion: {
        nombre: String,
        primer_apellido: String,
        segundo_apellido: String,
    },
    emails: [String],
    numeros: [String],
    preferencias: [String],
    tipo_cliente: String,
    cliente_raiz: Boolean,
    id_cliente_raiz: {
        type: Schema.Types.ObjectId,
        ref: 'clientes',
    },
    contactos: [{
        _id: false,
        nombre: String,
        email: String,
        numeros: [String],
        principal: {
            type: Boolean,
            default: false,
        },
        push_email: {
            type: Boolean,
            default: false,
        },
        push_sms: {
            type: Boolean,
            default: false,
        }
    }],
    control: {
        ws: {
            type: Boolean,
            default: false,
        },
        integradores: {
            type: Boolean,
            default: false,
        },
        bitacoras: {
            type: Boolean,
            default: false,
        },
        comboy: {
            type: Boolean,
            default: false,
        },
        plataforma: {
            type: Boolean,
            default: false,
        },
        limite_usuarios: Number,
        google_api_maps: String,
        google_api: String,
    },
    estado: {
        type: Boolean,
        default: true,
    },
    movimientos: [{
        tipo_accion: String,
        fecha: {
            type: Date,
            value: Date.now,
        },
        coleccion: String,
        descripcion: String,
        datosAntes: Object,
        datosNuevos: Object,
        datosHost: Object,
    }],
    id_perfil: {
        type: Schema.Types.ObjectId,
        ref: 'perfiles',
    },
    id_unidades: [{
        _id: false,
        type: Schema.Types.ObjectId,
        ref: 'unidades',
    }],
    id_permisos: [{
        _id: false,
        type: Schema.Types.ObjectId,
        ref: 'permisos',
    }],
    id_clientes_administra: [{
        _id: false,
        type: Schema.Types.ObjectId,
        ref: 'clientes',
    }],
    eliminado: Date,
},{
    timestamps: true,
    versionKey: false,
});

const databaseA = mongoose.connection.useDb(process.env.DB_NAME_A)
const ClienteModelo = databaseA.model('clientes', clienteSchema)
module.exports = ClienteModelo