//MYSQL
const usuariosMYSQL = require('../MYSQL/models/usuarios')
const clientesMYSQL = require('../MYSQL/models/clientes')
const clientesDomicilioMYSQL = require('../MYSQL/models/domicilioCliente')
const gruposMYSQL = require('../MYSQL/models/gruposUsuario')
const perfilesMYSQL = require('../MYSQL/models/perfilesUsuarios')
const permisosMYSQL = require('../MYSQL/models/permisosPerfiles')
//MONGODB
const usuarioMONGO = require('../MONGODB/model/UsuarioModelo')

const bcrypt = require('bcrypt')

const recorreYAgregarInformacion = async() => {
    try{
        var noAgregarUsuarios = ['example', 'example2']
        var usuariosAgregados = 0
        var usuariosDuplicados = 0
        var usuariosNoagregados = 0

        var todosLosUsuarios = await usuariosMYSQL.find()
        console.log(`Se encontraron: ${todosLosUsuarios.length} usuarios en usuariosMySQL`)

        for await(var user of todosLosUsuarios){
            /* console.log(user)
            console.log('--------------------------------------------------') */
            //Variables a asignar
            var nombreUsuario = "nombre de usuario unico"
            var areasUsuarios = {
                admin: "Administrador",
                super: "Supervisor",
                cliente: "Cliente",
                normal: "Default"
            }
            //validamos si el nombre de usuario esta dentro del arreglo de usuarios a no agregar
            if(noAgregarUsuarios.includes(user.userUsuario)){
                //como si existe no lo debo de agregar
                usuariosNoagregados++
            }else{
                //Validamos si ya hay un usuario con el mismo nombre
                var existeUsuarioUser = await usuarioMONGO.findOne({'usuario': user.userUsuario})
                if(existeUsuarioUser){
                    nombreUsuario = `${user.userUsuario}-duplicateds-${user.idUsuario}`
                    usuariosDuplicados++
                }else{
                    nombreUsuario = user.userUsuario
                }
                //generamos contraseña hasheada
                const saltos = await bcrypt.genSalt(10);
                const nuevoContrasenia = await bcrypt.hash(user.passwordUsuario, saltos)
                //Generamos un objeto del modelo de usuarios para mongoDB y le pasamos los datos a guardar
                var usuarioNuevo = new usuarioMONGO({
                    informacion: {
                        nombre: user.nombreCompletoUsuario,
                        primer_apellido: "apeUno",
                        segundo_apellido: "apeDos",
                    },
                    usuario: nombreUsuario,
                    password: nuevoContrasenia,
                    descripcion: `${user.idUsuario}=>${user.nombreGrupo}-${user.nombrePerfil}`,
                    vencimiento: '2030-01-01 00:00:00',
                    preferencias: ['sin preferencias'],
                    ultimo_acceso: new Date,
                    area: areasUsuarios.cliente
                });
                /* console.log(usuarioNuevo)
                console.log('##########################################################') */
                //await usuarioNuevo.save()
                usuariosAgregados++
            }
        }
        console.log(`Estos son los usuarios que se agregaron: ${usuariosAgregados}`)
        console.log(`Estos son los usuarios que no se agregaron: ${usuariosNoagregados}`)
        console.log(`Estos son los usuarios que estan duplicados: ${usuariosDuplicados}`)
        console.log('Se terminó de ejecutar el de usuarios')

    }catch(error) {
        console.log(`Error al recorrer y agregar la informacion: ${error}`)
    }
}

recorreYAgregarInformacion()