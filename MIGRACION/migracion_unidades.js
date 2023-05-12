//MYSQL
const unidadesMYSQL = require('../MYSQL/models/unidades')
//MONGODB
const unidadesMONGO = require('../MONGODB/model/UnidadModelo')

const recorreUnidadesYAgrega = async () => {
    try{
        //variables a utilizar
        var noAgregarUnidades = ['234s', '2345asd', '2as34s', '2as345d', '234sds', '2345ds']
        var unidadesAgregados = 0
        var unidadesDuplicados = 0
        var unidadesNoagregados = 0

        const todasLasUnidades = await unidadesMYSQL.find()
        console.log(`Se encontraron ${todasLasUnidades.length} unidades en unidadesMYSQL`)

        for await(var unidad of todasLasUnidades){
            /* console.log(unidad)
            console.log('--------------------------------------------------') */
            //Variables a asignar
            var placasUnidad = "placasUnidadUnique"
            var unitidUnidad = "unitidUnidadUnique"

            //validamos si las placas de la unidad estan en el arreglo de no agregar unidades
            if(noAgregarUnidades.includes(unidad.placasUnidad)){
                //como si existe no lo debo de agregar
                unidadesNoagregados++
            }else{
                //Validamos si ya hay una unidad con las mismas placas
                var existeplacasUnidad = await unidadesMONGO.findOne({'informacion.placas': unidad.placasUnidad})
                if(existeplacasUnidad){
                    placasUnidad = `${unidad.placasUnidad}-duplicateds-${unidad.idUnidad}`
                    unidadesDuplicados++
                }else{
                    placasUnidad = unidad.placasUnidad
                }

                //Validamos si ya hay una unidad con el mismo unitID
                var existeUnidIDUnidad = await unidadesMONGO.findOne({'gps.unitid': unidad.idUnidadID})
                if(existeUnidIDUnidad){
                    unitidUnidad = `${unidad.idUnidadID}-duplicateds-${unidad.idUnidad}`
                    unidadesDuplicados++
                }else{
                    unitidUnidad = unidad.idUnidadID
                }
                
                //Generamos un objeto del modelo de usuarios para mongoDB y le pasamos los datos a guardar
                var unidadNueva = new unidadesMONGO({
                    gps: {
                        unitid: unitidUnidad,
                        imei: unidad.contadorBytes,
                        marcaGPS: unidad.marcaUnidad,
                        modeloGPS: unidad.modeloUnidad,
                        submodeloGPS: unidad.modeloUnidad,
                        identificadorGPS: unidad.idUnidadID,
                        motorcom: unidad.idUnidad,
                        crudo: unidad.horariosCorteRuta,
                        serialmsn: unidad.simCardNumTele,
                        tipoMensaje: unidad.tipoPlan,
                        tipoMensajeExtraInfo: unidad.tipoPlan,
                        registro: new Date,
                    },
                    informacion: {
                        placas: placasUnidad,
                        numero_serie: unidad.unitidUnidad,
                        numero_motor: unidad.modeloEquipoTrama,
                        color: unidad.colorUnidad,
                        anio: unidad.fechaAlta,
                        os: unidad.idCliente,
                        tipo: unidad.tipoPlan,
                        observaciones: unidad.numEconomico,
                    },
                    unidad: {
                        tipo: unidad.modeloUnidad,
                        eco: unidad.numEconomico,
                        altaRegistro: unidad.fechaAlta,
                    },
                    control: {
                        activo: unidad.estadoUnidad,
                        sms: unidad.estadoUnidad
                    },
                    sms: {
                        panico: unidad.habilitarSmsPanico,
                        paromotor: unidad.habilitarSmsParoMotor,
                        jammer: unidad.habilitarSmsJammerDetectado,
                        bateria: unidad.habilitarSmsBateriaDesconectada,
                        pdi: unidad.habilitarSmsInOutPuntoInteres,
                        geocercas: unidad.habilitarSmsInOutSalidaGeocerca,
                        ignicion: unidad.vehiculoBloqueado,
                    }
                });
                /* console.log(unidadNueva)
                console.log('##########################################################') */
                //await unidadNueva.save()
                unidadesAgregados++
            }
        }

        console.log(`Estos son las unidades que se agregaron: ${unidadesAgregados}`)
        console.log(`Estos son las unidades que no se agregaron: ${unidadesNoagregados}`)
        console.log(`Estos son las unidades que estan duplicados: ${unidadesDuplicados}`)
        console.log('Se terminó de ejecutar el de unidades')

    }catch(error){
        console.log(`Ocurrio un error en unidades: ${error}`)
    }
};

recorreUnidadesYAgrega()

var algo = [{
    paroMotor: false,
    alertPanico: false,
    esperaSmsParoMotor: false,
    ladaTelefono: '+52',
    idModelo: 13,
    clvSegPublica: 'NONE',
    metrosActualKilome: 162065563,
    seguimientoSSP: false,
    marcaEquipo: 1,
    inputUno: '1',
    inputDos: '0',
    inputTres: '0',
    inputCuantro: '0',
    inputCinco: '0',
    inputSeis: '0',
    inputSiente: '0',
    inputOcho: '0',
    outputUno: '6',
    outputDos: '0',
    outputTres: '0',
    outputCuatro: '0',
    outputCinco: '0',
    outputSeis: '0',
    outputSiete: '0',
    outputOcho: '0',
    contadorLitrosConsumidos: 15905.0699166709,
    nones: 'NONE'
}]