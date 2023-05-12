const mongoose = require('mongoose')
const Schema = mongoose.Schema

const historicoSchema = new Schema({
    hora: Number,
    id_unidad: {
        type: Schema.Types.ObjectId,
        ref: 'unidades',
    },
    registros: [{
        unidad: {
            imei: String,
            unitid: String,
            marca: String,
            modelo: String,
            indetificador: String,
            submodelo: String,
            crudo: String,
            tipoMensajeProtocoloMin: String,
            protocolo: String,
            noMensaje: Number
        },
        ubicacion: {
            registro: Date,
            tipoMensaje: Number,
            latitud: Number,
            longitud: Number,
            altitud: Number,
            velocidad: Number,
            direccion: Number,
            odometro: Number,
            ignicion: Boolean,
            externalPower: Boolean
        },
        informacion: {
            senalRed: String,
            realtime: Boolean,
            locationType: String,
            GNSS: Boolean,
            noSatelites: Number,
            simLock: Boolean,
            deviceLock: Boolean
        },
        energia: {
            externa: Number,
            interna: Number,
        },
        rawIO: {
            externalPower: Boolean,
            ignicionDigital: Boolean,
            ACCDigital: Boolean,
            speaker: Boolean,
            RS232Output: Boolean,
            ACCDet: Boolean,
        },
        analogoIO: {
            input: {
                1: String,
                2: String
            }
        },
        io: {
            entradas: {
                0: {
                    estado: Boolean,
                    tipo: String
                },
                1: {
                    estado: Boolean,
                    tipo: String
                },
                2: {
                    estado: Boolean,
                    tipo: String
                },
                3: {
                    estado: Boolean,
                    tipo: String
                },
                4: {
                    estado: Boolean,
                    tipo: String
                },
            },
            salidas: {
                1: {
                    estado: Boolean,
                    tipo: String
                },
                2: {
                    estado: Boolean,
                    tipo: String
                },
            }
        }
    }],
},{
    timestamps: true,
    versionKey: false,
});

const databaseA = mongoose.connection.useDb(process.env.DB_NAME_A)
const HistoricoModelo = databaseA.model('historicos', historicoSchema)
module.exports = HistoricoModelo