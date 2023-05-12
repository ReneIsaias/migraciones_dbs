const mongoose = require('mongoose')
const Schema = mongoose.Schema

const unidadSchema = new Schema({
    unidad: {
        imei: String,
        unitid: String,
        marca: String,
        modelo: String,
        identificador: String,
        submodelo: String,
        protocolo: String,
        no_mensaje: {
            _id: false,
            position_message: Number,
            heartbeat_message: Number,
            alarm_message: Number,
            login_message: Number,
            ble_message: Number,
        },
    },
    info: {
        placas: {
            type: String,
            unique: true,
        },
        eco: String,
        numero_serie: String,
        numero_motor: String,
        color: String,
        anio: String,
        os: String,
        tipo: Number,
        observaciones: String,
    },
    configuracion: {
        rep_ignicion_on: Number,
        rep_ignicion_off: Number,
        rep_angulo: Number,
        rep_distancia: Number,
        rep_heartbeat: Number,
        unidad_medida: String,
        limite_velocidad: Number,
        anti_asalto: {
            type: Boolean,
            default: false,
        },
        anti_sensibilidad: Number,
        g_sensor_sensibilidad: Number,
        manager_activo: [{
            _id: false,
            type: Boolean,
            default: false,
        }],
        alarma_arrastre: Number,
        relay_modo: String,
        relay_cmd: {
            type: Boolean,
            default: false,
        },
        relay_status: {
            type: Boolean,
            default: false,
        },
        msn_lng: Number,
        basic_software_version: String,
        firmware_software_version: String,
        platform: String,
        hardware_version: String,
    },
    sms:{
        panico: {
            type: Boolean,
            default: false,
        },
        paromotor: {
            type: Boolean,
            default: false,
        },
        jammer: {
            type: Boolean,
            default: false,
        },
        bateria: {
            type: Boolean,
            default: false,
        },
        pdi: {
            type: Boolean,
            default: false,
        },
        geocerca: {
            type: Boolean,
            default: false,
        },
        ignicion: {
            type: Boolean,
            default: false,
        },
    },
    sim: {
        icc: String,
        dn: String,
        marca: String,
        plan: String,
        ult_cambio: Date,
    },
    ssp: [{
        _id: false,
        id_ssp: String,
        token: String,
        estado: String,
        ultimo_reporte: Date,
        seguimiento: String,
    }],
    control: {
        estado: {
            type: Boolean,
            default: false,
        },
        sms: {
            type: Boolean,
            default: false,
        },
        eliminado: Date,
    },
    cliente: {
        type: Schema.Types.ObjectId,
        ref: 'clientes',
    },
    io: {
        entradas: [{
            _id: false,
            estado: Boolean,
            tipo: String,
        }],
        salidas: [{
            _id: false,
            estado: Boolean,
            tipo: String,
        }],
    },
    ubicacion: {
        registro: {
            type: Date,
            default: Date.now,
        },
        tipo_mensaje: Number,
        tipo_mensaje_txt: String,
        altitud: Number,
        latitud: Number,
        longitud: Number,
        velocidad: Number,
        direccion: Number,
        odometro: Number,
        odometro_control: Number,
        ignicion: Boolean,
        external_power: Boolean,
        bateria: Number,
        obd: {
            _id: false,
            temperatura: Number,
            rpm: Number,
            tanque: Number,
            odometro: Number,
            rendimiento: Number,
            codigos: [String],
        },
        lbs: {
            _id: false,
            lbs_type: String,
            mcc: Number,
            mnc: Number,
            tower: [{
                _id: false,
                ci: Number,
                lac: Number,
                psc: Number,
            }],
        },
    },  
    informacion: {
        senial_red: Number,
        real_time: Boolean,
        location_type: String,
        gnss: Boolean,
        no_satelites: Number,
        sim_lock: Boolean,
        device_lock: Boolean,
    },
    energia: {
        externa: Number,
        interna: Number,
    },
    raw_io: {
        external_power: {
            type: Boolean,
            default: false,
        },
        ignicion_digital: {
            type:   Boolean,
            default: false,
        },
        acc_digital: {
            type: Boolean,
            default: false,
        },
        speaker: {
            type: Boolean,
            default: false,
        },
        rs2320_output: {
            type: Boolean,
            default: false,
        },
        acc_det: {
            type: Boolean,
            default: false,
        }
    },
    ble_io: [{
        _id: false,
        ble_tipo: String,
        marca: String,
        modelo: String,
        sensorID: String,
        sensor_vol: Number,
        sensor_bat_por: Number,
        sensor_temperatura: Number,
        sensor_temperatura_positio: Boolean,
        sensor_tem_unidad: String,
        sensor_humendad: Number,
        sensor_luz: Boolean,
        sensor_rssi: Number,
        sensor_door: Boolean,
    }],
    analogo_io: {
        _id: false,
        input: [String],
    },
    alertas_recientes: [{
        _id: false,
        visto: Boolean,
        tipo_mensaje: Number,
        tipo_msn_txt: String,
        fecha_evento: Date,
        ubicacion: {
            _id: false,
            altitud: Number,
            latitud: Number,
            longitud: Number,
        },
        info: {
            _id: false,
            rpm: Number,
            temperatura: Number,
            bateria: Number,
            codigos: [String],
        },
    }],
    rastro: [{
        _id: false,
        altitud: Number,
        latitud: Number,
        longitud: Number,
    }],
    conductor: {
        id_conductor: {
            type: Schema.Types.ObjectId,
            ref: 'clientes',
        },
        nombre: String,
        numeros: [String],
        documentos: [{
            _id: false, 
            id_documento: {
                type: Schema.Types.ObjectId,
                ref: 'documentos',
            },
            tipo: String,
            caducidad: Date,
        }],
    },
    accesorios: [{
        _id: false,
        id_accesorio: {
            type: Schema.Types.ObjectId,
            ref: 'inventarios',
        },
        tipo: String,
        serial: String,
        marca: String,
        modelo: String,
        adicional: String,
    }],
    geocerca: {
        pdi: {
            limite: Number,
            registros: [{
                _id: false,
                nombre: String,
                punto: [Number],
                radio: Number,
                estado: Boolean,
            }],
        },
        poligonal: {
            limite: Number,
            registros: [{
                _id: false,
                nombre: String,
                puntos: [{
                    _id: false,
                    id_punto: [Number]
                }],
                estado: Boolean,
            }],
        },
    },
    cmd: [{
        _id: false,
        cmd: String,
        estado: Boolean,
        tipo: String,
        serial: Number,
        envio: Date,
        persona: {
            idUsuario: String,
            usuario: String,
            nombre: String,
        },
        registro: Date,
        respuesta: String
    }]
},
{
    timestamps: true,
    versionKey: false,
});

const databaseA = mongoose.connection.useDb(process.env.DB_NAME_A)
const UnidadModelo = databaseA.model('unidadModelo', unidadSchema)
module.exports = UnidadModelo