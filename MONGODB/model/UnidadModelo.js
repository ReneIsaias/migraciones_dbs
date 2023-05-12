const mongoose = require('mongoose')
const Schema = mongoose.Schema

const unidadSchema = new Schema({
    gps: {
        unitid: {
            type: String,
            //unique: true,
        },
        imei: Number,
        marcaGPS: String,
        modeloGPS: String,
        submodeloGPS: String,
        identificadorGPS: String,
        motorcom: Number,
        crudo: String,
        serialmsn: Number,
        tipoMensaje: Number,
        tipoMensajeExtraInfo: String,
        tipoMensajeExtraData: String,
        camposExtrasAsignables: [String],
        protocolomsn: String,
        protocolotipo: Number,
        registro: {
            type: Date,
            default: new Date
        },
    },
    rastreo: {
        latitud: Number,
        longitud: Number,
        altitud: Number,
        velocidad: Number,
        direccion: Number,
        senal: Number,
        nosatelites: Number,
        odometro: Number,
    },
    lbs: {
        lbsBanda: String,
        lbsRegistro: {
            type: Date,
            default: new Date
        },
        lbsMCC: Number,
        lbsMNC: Number,
        lbsTowers: [String]
    },
    energia: {
        energiaExternaVol: Number,
        energiaExternaLVL: Number,
        energiaExternaAct: Number,
        energiaInternaVol: Number,
        energiaInternaLVL: Number,
        frontLightSensorVoltaje: Number,
        cargaSolar: Boolean,
        solarPanelVoltaje: Number,
        energiaADCVol: Number
    },
    io_digital: {
        entradasDigital: [String],
        salidasDigital: [String]
    },
    io_analoga: {
        entradasAnalogas: [String],
        salidasAnalogas: [String]
    },
    estados: {
        realtime: Boolean,
        lbsEstado: Boolean,
        gnnsEstado: Boolean,
        gnssModoDormido: Boolean,
        paroMotorEstado: Boolean,
        gpsFixed: Boolean,
        modoReporte: Number,
        resetFactoryRegistro: Date,
        temperaturaInterna: Number,
        temperaturaInternaPos: String,
        temperaturaInternaMedida: String,
        reinicioRegistro: Date
    },
    configuracion: {
        intervaloRepIngOn: Number,
        intervaloRepIngOff: Number,
        intervaloReqAngulo: Number,
        intervaloReqDistancia: Number,
        intervaloReqHeartbeat: Number,
        intervaloRepEmg: Number,
        intentosAckEmg: Number,
        gpsAct: Boolean,
        reporteCRR: Boolean,
        tipoIgnicion: String,
        frontSensorAct: Boolean,
        dispositivoRemovidoAct: Boolean,
        dispositivoAbiertoAct: Boolean,
        temperaturaReporteAct: Boolean,
        unidadMedida: String,
        limiteVelocidadAlt: Number,
        gSensorSensibilidad: Number,
        managerStatus: Boolean,
        antitheftActivado: Boolean,
        antitheftSensibilidad: Number,
        simLock: Boolean,
        dispositivoBloqueado: Boolean,
        managerActivo: [String],
        parkingLock: Boolean,
        modoDormido: Boolean,
        conectPersistente: Boolean,
        verificadorEnergiaExterna: Boolean,
        verificadorAntenaGPS: Boolean,
        verificadorEnergiaExterna: Boolean,
        verificadorEnergiaExternaAutoOff: String,
        verificadorEnergiaExternaUmbral: String,
        voltajeConfigurado: String,
        voltajeOperacionProtecion12v: String,
        voltajeOperacionProtecion24v: String,
        voltajeIgnicionVirtualOn: String,
        voltajeIgnicionVirtualOff: String,
        saveBuffer: String,
        sensorGTipo: Number,
        relayTipo: String,
        smsLng: Number,
        alarmaArrastre: Number,
        smsSendManager: Boolean,
        smsSendInput2: Boolean,
        entradasConfig: [String],
        salidasConfig: [String],
        salidaVoltConfig: String,
        salidaVoltConfigAct: Boolean,
        jammerDetection: Boolean,
        jammerTipo: Number,
        jammerConfigDistancia: Number,
        jammerConfigTiempo: Number,
        jammerRelay: Boolean,
        firmwareSoftwareVersion: String,
        hardwareVersion: String,
        basicSoftwareVersion: String,
        platformSoftwareVersion: String,
        modelMcu: String,
        versionMcu: String,
        versionModem: String,
        versionModemApp: String,
        volumenBocina: Number,
        authGPRS: String,
        apn: String,
        apnUser: String,
        apnPass: String,
        serverIP: String,
        serverPort: Number,
        serverType: String,
        serverIPBackup: String,
        serverPortBackup: Number,
        serverTypeBackup: String,
        numSMSSendInfo: String,
        simPIN: Number,
    },
    obd: {
        obdOdometro: Number,
        obdCombustible: Number,
        obdVelocidad: Number,
        obdRendimientoInactivo: Number,
        obdTemperaturaMotor: Number,
        obdPresionAceite: Number,
        obdRPM: Number,
        obdCruseroTiempo: Number,
        obdDTC: [String],
        obdRelantiTiempo: Number,
        obdRendimiento: Number,
    },
    informacion: {
        placas: {
            type: String,
            unique: true,
        },
        numero_serie: String,
        numero_motor: String,
        color: String,
        anio: String,
        os: String,
        tipo: Number,
        observaciones: String,
    },
    estadoviaje: {
        horasManejando: Number,
        dpaAutoCalibrado: Boolean,
        dpaAccX: Number,
        dpaAccY: Number,
        dpaAccZ: Number,
    },
    driverid: {
        driverID: String,
        driverIDReg: Boolean,
    },
    ioraw: [{
        temperatura: Number
    }],
    reporteviaje: {
        travelReportInfo: Object,
        travelReportDatos: [Object]
    },
    rs232: {
        RSMensaje: String,
        RSCodeMensaje: String,
        RSRegistro: Date,
        RSBaud: Number
    },
    cmd: {
        CMDMensaje: String,
        CMDRegistro: Date,
        CMDEncode: String,
        CMDBanderaSerial: String,
    },
    simnetwork: {
        iccid: String,
        imsi: String,
        networkName: String,
        accessTecnologic: String,
        bandName: String,
    },
    iobluetooth: [Object],
    cliente: {
        type: Schema.Types.ObjectId,
        ref: 'clientes',
    },
    unidad: {
        tipo: String,
        eco: String,
        altaRegistro: {
            type: Date,
            default: new Date
        },
    },
    control: {
        activo: Boolean,
        sms: Boolean,
        eliminado: Date
    },
    sms: {
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
        geocercas: {
            type: Boolean,
            default: false,
        },
        ignicion: {
            type: Boolean,
            default: false,
        },
    },
/* 
     ////////////////////////////////////////////
     ////////////////////////////////////////////
*/
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
    rastro: [{
        _id: false,
        latitud: Number,
        longitud: Number,
        altitud: Number,
        velocidad: Number,
        direccion: Number,
        senal: Number,
        nosatelites: Number,
        odometro: Number,
    }],
    accesorios: [{
        _id: false,
        id_accesorio: {
            type: Schema.Types.ObjectId,
            ref: 'productos',
        },
        tipo: String,
        serial: String,
        marca: String,
        modelo: String,
        adicional: String,
    }],
    geocercas: [{
        pdi: {
            limite: Number,
            registros: [{
                _id: false,
                nombre: String,
                punto: [Number],
                radio: Number,
                estado: Boolean,
                id_usuario: {
                    type: Schema.Types.ObjectId,
                    ref: 'usuarios',
                }
            }]
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
                id_usuario: {
                    type: Schema.Types.ObjectId,
                    ref: 'usuarios',
                }
            }]
        },
    }],
    movimientos: [{
        _id: false,
        tipo_accion: String,
        fecha: {
            type: Date,
            value: Date.now,
        },
        coleccion: String,
        descripcion: String,
        datos_antes: Object,
        datos_nuevos: Object,
        datos_host: Object,
    }],
    integradores: [{
        _id: false,
        ultima_actualizacion: Date,
        mensaje: String,
        id_integrador: {
            type: Schema.Types.ObjectId,
            ref: 'integradores',
        },
        id_cliente: {
            type: Schema.Types.ObjectId,
            ref: 'clientes',
        },
    }]
},{
    timestamps: true,
    versionKey: false,
});

const databaseA = mongoose.connection.useDb(process.env.DB_NAME_A)
const UnidadModelo = databaseA.model('unidades', unidadSchema)
module.exports = UnidadModelo