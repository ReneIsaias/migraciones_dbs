const mongoose = require('mongoose')
const Schema = mongoose.Schema

const rutaSchema = new Schema({
    idRuta: Number,
    fechaRutaEncendido: Date,
    ultimaFechaEvento: Date,
    tipoMensajeActual: Number,
    tipoAlertaActual: Number,
    latitudActual: Number,
    longitudActual: Number,
    direccionActual: Number,
    velocidadActual: Number,
    temperaturaActual: Number,
    nivelGasolinaActual: Number,
    bateriaActual: Number,
    revolucionesXMinuto: Number,
    motorEncendido: Boolean,
    odometroInicioRuta: Number,
    odometroActual: Number,
    fechaHoraRuta: Date,
    estadoRuta: Boolean,
    rendimientoGasolina: Number,
    anio: String,
    diaAnio: String,
    horaRuta: String,
    minutoRuta: String,
    sensorPuertaActivo: Boolean,
    ultimasAlertas: String,
    consumoLitrosAcumu: Number,
    idRutaID: String,
    idConductor: String,
    idVehiculo: String
},
{
    timestamps: true,
    versionKey: false,
});

const databaseB = mongoose.connection.useDb(process.env.DB_NAME_B)
const rutas = databaseB.model('rutas', rutaSchema)
module.exports = rutas