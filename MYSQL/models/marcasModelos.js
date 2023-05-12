const mongoose = require('mongoose')
const Schema = mongoose.Schema

const marcasSchema = new Schema({
    idMarca: Number,
    nombreMarca: String,
    subMarca: String,
    tiempoMesesServicio: String,
    kilomParaServi: String,
    rendimiCombuRalen: String,
    rendiCombMen60: String,
    rendiCombEn60Y90: String,
    rendiCombMas100,
    tiempMeseVida: String,
    kilomeFinVida: String,
},{
    timestamps: true,
    versionKey: false,
});

const databaseB = mongoose.connection.useDb(process.env.DB_NAME_B)
const marcasModelos = databaseB.model('marcasModelos', marcasSchema)
module.exports = marcasModelos