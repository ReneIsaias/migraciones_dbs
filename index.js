const express = require('express')
const app = express()
const db = require('./database')
require('dotenv').config()


/* const ClienteControlador = require('./MONGODB/controllers/ClienteControlador')
const clientes = require('./MYSQL/controllers/clienteController') */

//////////////PARA MIGRAR LA DATA EMPEZAMOS CON LOS CLIENTES
require('./MIGRACION/migracion_clientes')

require('./MIGRACION/migracion_usuario')

require('./MIGRACION/migracion_unidades')

//Definimos el puerto de escucha de nuestra API
const PORT_LISTEN = process.env.PORT_LISTEN || 9000

//Le decimos que escuche nuestra API por el puerto definido
app.listen(PORT_LISTEN, () => {
    console.log(`Migracion ya debe estar corriendo: ${PORT_LISTEN}`)
});