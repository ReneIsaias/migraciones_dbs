const mongoose = require('mongoose')
const Schema = mongoose.Schema

const inventarioSchema = new Schema({
    id_producto: {
        type: Schema.Types.ObjectId,
        ref: 'productos',
    },
    tipo_producto: String,
    cantidades: {
        antes: Number,
        actual: Number,
        proceso: Number,
    },
    fecha_consulta: {
        type: Date,
        default: Date.now,
    },
    ultima_consulta: Date
},{
    timestamps: true,
    versionKey: false,
});

const databaseA = mongoose.connection.useDb(process.env.DB_NAME_A)
const InventarioModelo = databaseA.model('inventarios', inventarioSchema)
module.exports = InventarioModelo