const mongoose = require('mongoose')
const Schema = mongoose.Schema

const inventarioSchema = new Schema({
    inventario:  Schema.Types.Mixed,
    gps: {
        unitid: {
            type: String,
            unique: true,
        },
        imei: String,
        marca: String,
        modelo: String,
        creacion: {
            type: Date,
            default: Date.now,
        },
        id_unidad: {
            type: Schema.Types.ObjectId,
            ref: 'unidades',
        },
        id_cliente: {
            type: Schema.Types.ObjectId,
            ref: 'clientes',
        },
        id_sim: {
            type: Schema.Types.ObjectId,
            ref: 'inventarios',
        },
    },
    sim: {
        icc: {
            type: String,
            unique: true,
        },
        dn: String,
        marca: String,
        plan: String,
        creacion: {
            type: Date,
            default: Date.now,
        },
    },
    movil: {
        id_gps: {
            type: Schema.Types.ObjectId,
            ref: 'inventarios',
        },
        imei: String,
        marca: String,
        modelo: String,
        creacion: {
            type: Date,
            default: Date.now,
        },
    },
    eliminado: Date,
},
{
    timestamps: true,
    versionKey: false,
});

const databaseA = mongoose.connection.useDb(process.env.DB_NAME_A)
const InventarioModelo = databaseA.model('inventarioModelo', inventarioSchema)
module.exports = InventarioModelo