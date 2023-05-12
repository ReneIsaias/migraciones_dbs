const mongoose = require('mongoose')
const Schema = mongoose.Schema

const compraSchema = new Schema({
    folio_compra: {
        type: String,
        unique: true,
    },
    fecha_compra: {
        type: Date,
        default: Date.now,
    },
    productos_comprados: [{
        id_producto: {
            type: Schema.Types.ObjectId,
            ref: 'productos',
        },
        cantidad: Number,
        precio_compra: Number,
        subTotal_compra: Number,
    }],
    id_usuario_compra: {
        type: Schema.Types.ObjectId,
        ref: 'usuarios',
    },
    iva: Number,
    sin_iva: Number,
    total_compra: Number,
    xml_compra: String,
    pdf_compra: String,
    eliminado: Date
},{
    timestamps: true,
    versionKey: false,
});

const databaseA = mongoose.connection.useDb(process.env.DB_NAME_A)
const compraModelo = databaseA.model('compras', compraSchema)
module.exports = compraModelo