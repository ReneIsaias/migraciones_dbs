const mongoose = require('mongoose')
const Schema = mongoose.Schema

const historialAsignacionesSchema = new Schema({
    idhistorial: Number,
    fechaAsignacion: Date,
    fechaDesasignacion: Date,
    idVehiculo: Number,
    marcaUnidad: String,
    modeloUnidad: String,
    marcaEquipo: String,
    idUnidad: String,
},{
    timestamps: true,
    versionKey: false,
});

const databaseB = mongoose.connection.useDb(process.env.DB_NAME_B)
const historialAsignacionesUnidades = databaseB.model('historialAsignacionesUnidades', historialAsignacionesSchema)
module.exports = historialAsignacionesUnidades