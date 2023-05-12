const clientes = require('../models/clientes')

const otra = async () =>{
    var haha = await clientes.find()
    console.log('Se logro acceder a la base de datos del MongoDB con el de clientes')
    console.log(`Total de regsitro clientes ${haha.length}`)
    /* haha.forEach(item => {
        console.log(item)
    }); */
}

otra()