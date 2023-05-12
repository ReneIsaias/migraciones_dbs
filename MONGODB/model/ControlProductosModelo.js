const mongoose = require('mongoose')
const Schema = mongoose.Schema

const controlProductoSchema = new Schema({
    id_producto: {
        type: Schema.Types.ObjectId,
        ref: 'productos',
    },
    cantidades: {
        antes: Number,
        actual: Number,
        proceso: Number,
    },
    fecha_consulta: {
        type: Date,
        default: Date.now,
    },
    ultima_consulta: Date,
    movimientos: [{
        _id: false,
        tipo_accion: String,
        indetificador_serial: String,
        registro: {
            type: Date,
            value: Date.now,
        },
        coleccion: String,
        descripcion: String,
        datos_antes: Object,
        datos_nuevos: Object,
        datos_host: Object,
        usuarios: {
            type: Schema.Types.ObjectId,
            ref: 'usuarios',
        },
        unidades: {
            type: Schema.Types.ObjectId,
            ref: 'unidades',
        },
        clientes: {
            type: Schema.Types.ObjectId,
            ref: 'clientes',
        },
    }],
},{
    timestamps: true,
    versionKey: false,
});

const databaseA = mongoose.connection.useDb(process.env.DB_NAME_A)
const ControlProductoModelo = databaseA.model('controlProductos', controlProductoSchema)
module.exports = ControlProductoModelo