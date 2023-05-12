const mongoose = require('mongoose')
const Schema = mongoose.Schema

const configuracionSchema = new Schema({
    configuracion: {
        type: Schema.Types.Mixed,
    },
    estado: {
        type: Boolean,
        default: true,
    },
    eliminado: {
        type: Date,
    },
    modelos_vehiculos: [{
        _id: false,
        marca: String,
        modelos: [{
            _id: false,
            modelo: String,
            rendimientos: [Number],
        }],
    }],
    tipos_documentos: [{
        _id: false,
        documento: String,
        tipo: String,
    }],
    mensajes: [{
        _id: false,
        mensaje: String,
        nivel: Number,
    }],
    io: [{
        _id: false,
            id_io   : Number,
            nombre  : String,
    }],
    permisos: [{
        _id: false,
        clave: {
            type: Number,
            unique: true,
        },
        nombre: {
            type: String,
            unique: true
        },
        descripcion: String,
        estado: {
            type: Boolean,
            default: true
        },
        eliminado: Date,
    }]
},
{
    timestamps: true,
    versionKey: false,
});

const databaseA = mongoose.connection.useDb(process.env.DB_NAME_A)
const ConfiguracionModelo = databaseA.model('configuracionModelo', configuracionSchema)
module.exports = ConfiguracionModelo