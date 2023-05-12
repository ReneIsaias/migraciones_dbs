const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const usuarioSchema = new Schema({
    nombre: String,
    usuario: {
        type: String,
        unique: true,
    },
    password: String,
    numeros: [String],
    estado: {
        type: Boolean,
        default: true,
    },
    ws: {
        type: Boolean,
        default: false,
    },
    creado: {
        type: Date,
        default: Date.now,
    },
    ultimo_acceso: Date,
    perfiles: [{
        type: Schema.Types.ObjectId,
        ref: 'perfiles'
    }],
    permisos: [{
        type: Schema.Types.ObjectId,
        ref: 'permisos',
    }],
    preferencias: [String],
    asignaciones: {
        acceso_unidades: {
            type: Boolean,
            default: false,
        },
        id_unidad: [{
            type: Schema.Types.ObjectId,
            ref: 'unidades',
        }],
        acceso_clientes: {
            type: Boolean,
            default: false,
        },
        id_cliente: [{
            type: Schema.Types.ObjectId,
            ref: 'clientes',
        }]
    },
    eliminado: Date,
},
{
    timestamps: true,
    versionKey: false,
});

usuarioSchema.methods.encriptarContrasenia = async password => {
    const saltos = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, saltos);
};

usuarioSchema.methods.compararContrasenia = async function(password) {
    return await bcrypt.compare(password, this.password);
}


const databaseA = mongoose.connection.useDb(process.env.DB_NAME_A)
const UsuarioModelo = databaseA.model('usuarioModelo', usuarioSchema)
module.exports = UsuarioModelo