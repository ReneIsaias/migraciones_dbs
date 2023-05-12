const ClienteModelo = require('../models/ClienteModelo')

const prueba = async () =>{
    var dale = await ClienteModelo.find();
    console.log('Se logro acceder a la base de datos del MongoDB con el de ClienteModelo')
    console.log(`Total de registros de clientes: ${dale.length}`)
    /* dale.forEach(item => {
        console.log(item)
    }); */
}

prueba()