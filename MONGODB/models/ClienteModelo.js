const mongoose = require('mongoose')
const Schema = mongoose.Schema

const clienteSchema = new Schema({
    cliente: {
        rfc: String,
        rs: String,
        nc: String,
    },
    asignaciones: [{
        type: Object
    }],
    contactos:[{
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
        },
    }],
    perfiles:[{
        _id: false,
        perfil: String,
        permisos: [String],
    }],
    usuarios:[{
        _id: false,
        id_usuario: {
            type: Schema.Types.ObjectId,
            ref: 'usuarios',
        }
    }],
    control: {
        _id: false,
        estado: {
            type: Boolean,
            default: true,
        },
        super_admin: {
            type: Boolean,
            default: false,
        },
        admin_clientes: {
            type: Boolean,
            default: false,
        },
        admin_clientes_control: {
            type: Boolean,
            default: false,
        },
        admin_clientes_unidades: {
            type: Boolean,
            default: false,
        },
        admin_cuenta: {
            type: Boolean,
            default: false,
        },
        sms: {
            type: Boolean,
            default: false,
        },
        documentos: {
            type: Boolean,
            default: false,
        },
        webservices: {
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
        limite_usuarios: String,
        google_api_maps: String,
        google_api: String,
    },
    integradores:[{
        _id: false,
        usuario: String,
        password: String,
        integrador: Number,
        ultima_integracion: Date,
        ultimo_mensaje: String,
        asignaciones: [{
            _id: false,
            id_unidad: {
                type: Schema.Types.ObjectId,
                ref: 'unidades',
            },
            id_cliente: {
                type: Schema.Types.ObjectId,
                ref: 'clientes',
            },
        }],
        adicional: [{
            _id: false,
            id_cliente: {
                type: Schema.Types.ObjectId,
                ref: 'clientes',
            },
            id_session: String,
            caduca_session: Date,
            intervalo: Number,
        }],
    }],
    eliminado: Date,
},
{
    timestamps: true,
    versionKey: false,
});

const databaseA = mongoose.connection.useDb(process.env.DB_NAME_A)
const ClienteModelo = databaseA.model('clienteModelo', clienteSchema)
module.exports = ClienteModelo