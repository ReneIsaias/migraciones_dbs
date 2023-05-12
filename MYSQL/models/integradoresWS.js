const mongoose = require('mongoose')
const Schema = mongoose.Schema

const integradoresWSSchema = new Schema({
    idIntegrador: Number,
    motorIntegrador: Number,
    nombreIntegrador: String,
    logotipoIntegrador: String,
    estructuraIntegrador: String,
    estadoIntegrador: Boolean,
    informacionIntegrador: String,
},{
    timestamps: true,
    versionKey: false,
});

const databaseB = mongoose.connection.useDb(process.env.DB_NAME_B)
const integradoresws = databaseB.model('integradoresws', integradoresWSSchema)
module.exports = integradoresws