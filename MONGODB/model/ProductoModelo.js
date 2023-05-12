const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productoSchema = new Schema({
    clave: {
        type: String,
        unique: true,
    },
    imei: String,
    nombre: {
        type: String,
        unique: true,
    },
    descripcion: String,
    precio: Number,
    tipo_producto: String,
    marca: String,
    categoria: String,
    info_adicional: [String],
    estado: {
        type: Boolean,
        default: false,
    },
    eliminado: Date,
},{
    timestamps: true,
    versionKey: false,
});

const databaseA = mongoose.connection.useDb(process.env.DB_NAME_A)
const ProductoModelo = databaseA.model('productos', productoSchema)
module.exports = ProductoModelo