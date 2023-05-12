const mongoose = require('mongoose')
const Schema = mongoose.Schema

/* Falta agregar los documentos que se puedan agregar */

const configuracionSchema = new Schema({
    configuracion: {
        type: String,
        unique: true,
    },
    modelos_vehiculos: [{
        _id: false,
        marca: String,
        modelos: [{
            _id: false,
            modelo: String,
            rendimientos: [Number],
        }],
        estado: {
            type: Boolean,
            default: true,
        },
        eliminado: Date,
    }],
    tipos_documentos: [{
        _id: false,
        documento: String,
        tipo: String,
        estado: {
            type: Boolean,
            default: true,
        },
        eliminado: Date,
    }],
    /* Son los mensajes de alertas */
    mensajes: [{
        _id: false,
        mensaje: String,
        nivel: Number,
        estado: {
            type: Boolean,
            default: true,
        },
        eliminado: Date,
    }],
    io: [{
        _id: false,
        id_io   : Number,
        nombre  : String,
        estado: {
            type: Boolean,
            default: true,
        },
        eliminado: Date,
    }],
    /* Es para las diferentes áreas a las que un usuaio pertenece */
    areas: [{
        nombre: {
            type: String,
            unique: true
        },
        descripcion: String,
        estado: {
            type: Boolean,
            default: true,
        },
        eliminado: Date,
    }],
    /* Es para diferenciar los distintos perfiles */
    categorias: [{
        nombre: {
            type: String,
            unique: true,
        },
        descripcion: String,
        estado: {
            type: Boolean,
            default: true,
        },
        eliminado: Date,
    }],
    estado: {
        type: Boolean,
        default: false
    },
    eliminado: Date
},{
    timestamps: true,
    versionKey: false,
});

const databaseA = mongoose.connection.useDb(process.env.DB_NAME_A)
const ConfiguracionModelo = databaseA.model('configuraciones', configuracionSchema)
module.exports = ConfiguracionModelo