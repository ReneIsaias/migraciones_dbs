//MYSQL
const clientesMYSQL = require('../MYSQL/models/clientes')
const clientesDomicilioMYSQL = require('../MYSQL/models/domicilioCliente')
const gruposMYSQL = require('../MYSQL/models/gruposUsuario')
const perfilesMYSQL = require('../MYSQL/models/perfilesUsuarios')
const permisosMYSQL = require('../MYSQL/models/permisosPerfiles')
//MONGODB
const clientesMONGO = require('../MONGODB/model/ClienteModelo')

const recorreInformacionYAgrega = async () => {
    try{
        var noAgregarClientes = ['example', 'example2', '220818', '191919191', 'PITA901023A17', 'RAYF450']
        var clientesAgregados = 0
        var clientesDuplicados = 0
        var clientesNoagregados = 0

        var todosLosClientes = await clientesMYSQL.find()
        console.log(`Se encontraron ${todosLosClientes.length} clientes en clientesMYSQL`)

        for await(var costumer of todosLosClientes){
            /* console.log(costumer)
            console.log('------------------------------------') */

            //variables a asignar
            var rfcCosutumer = "rfcCostumerUnique"

            //validamos si el rfc del cliente esta dentro del arreglo de cientes a no agregar
            if(noAgregarClientes.includes(costumer.rfcCliente)){
                //como si existe no lo debo de agregar
                clientesNoagregados++
            }else{
                //Validamos si ya hay un cliente con el mismo rfc
                var existeRfcCliente = await clientesMONGO.findOne({'cliente.rfc': costumer.rfcCliente})
                if(existeRfcCliente){
                    rfcCosutumer = `${costumer.rfcCliente}-duplicateds-${costumer.idCliente}`
                    clientesDuplicados++
                }else{
                    rfcCosutumer = costumer.rfcCliente
                }
                var clienteNuevo = new clientesMONGO({
                    cliente: {
                        rfc: rfcCosutumer,
                        rs: costumer.nombreCliente,
                        nc: costumer.nombreCliente
                    },
                    informacion: {
                        nombre: costumer.nombreCliente,
                        primer_apellido: "apellidoUno",
                        segundo_apellido: "apellidoDos",
                    },
                    tipo_cliente: "Clientes",
                    cliente_raiz: false,
                    asignaciones: ['Sin notificaciones']
                });
                /* console.log(clienteNuevo)
                console.log('######################################') */
                //await clienteNuevo.save()
                clientesAgregados++
            }
        }
        console.log(`Estos son los clientes que se agregaron: ${clientesAgregados}`)
        console.log(`Estos son los clientes que no se agregaron: ${clientesDuplicados}`)
        console.log(`Estos son los clientes que estan duplicados: ${clientesNoagregados}`)
        console.log('Se terminó de ejecutar el de clientes')
        //console.log(`Se agregaron ${clienteTotales} clientes a la DB`)


        //Vamos con clientesDomicilioMYSQL
        var clientesDomiciolios = await clientesDomicilioMYSQL.find()
        console.log(`Se encontraron ${clientesDomiciolios.length} en clientesDomicilioMYSQL`)

        //Vamos con gruposMYSQL
        var clienteGrupos = await gruposMYSQL.find()
        console.log(`Se encontraron ${clienteGrupos.length} en gruposMYSQL`)

        //Vamos con perfilesMYSQL
        var clientePerfil = await perfilesMYSQL.find()
        console.log(`Se encontraron ${clientePerfil.length} en perfilesMYSQL`)

        //Vamos con permisosMYSQL
        var clientePermisos = await permisosMYSQL.find()
        console.log(`Se encontraron ${clientePermisos.length} en permisosMYSQL`)

    }catch(error){
        console.log(`Error al recorrer la data: ${error}`)
    }
};

recorreInformacionYAgrega()
