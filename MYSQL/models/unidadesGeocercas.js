const mongoose = require('mongoose')
const Schema = mongoose.Schema

const unidadesGeocercasSchema = new Schema({
    idRelacion: Number,
    numSecuenciaProg: Number,
    tipoGeocerca: Number,
    programarEquipo: Boolean,
    dentroGeocerca: Boolean,
    idGerocerca: Number,
    idVehiculo: Number
},{
    timestamps: true,
    versionKey: false,
});

const databaseB = mongoose.connection.useDb(process.env.DB_NAME_B)
const unidadesGeocercasRelacion = databaseB.model('unidadesGeocercasRelacion', unidadesGeocercasSchema)
module.exports = unidadesGeocercasRelacion