const mongoose = require('mongoose')
const Schema = mongoose.Schema

const geocodeSchema = new Schema({
    servicio: Number,
    location: {
        type: String,
        coordinates: [Number]
    },
    info: {
        formatted_address: String,
        place_id: String,
        plus_code: {
            compound_code: String,
            global_code: String,
        },
        types: [String],
        location: {
            lat: Number,
            lng: Number,
        },
        address_components: [{
            long_name: String,
            short_name: String,
            types: [String]
        }]
    }
},{
    timestamps: true,
    versionKey: false,
});

const databaseA = mongoose.connection.useDb(process.env.DB_NAME_A)
const GeocodeModelo = databaseA.model('geocodes', geocodeSchema)
module.exports = GeocodeModelo