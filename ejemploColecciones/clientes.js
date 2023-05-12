clientes = [
    {
        _id: 1,
        cliente: {
            rfc: 'ESGRDHTFJYG2434567',
            rs: 'CLIENTE RAZON SOCIAL',
            nc: 'Cliente numero uno',
        },
        informacion: {
            nombre: 'Cliente 1',
            primerApellido: 'ape uno',
            segundoApellido: 'ape dos',
        },
        emails: [
            'clienteA@gmail.com'
        ],
        numeros: [
            '123456788324',
            '213456788346'
        ],
        preferencias: [
            'Con notificaciones'
        ],
        tipoCliente: 'Cliente',
        contactos: [{
            _id: false,
            nombre: 'Contacto numero 1',
            email: 'contacto1@gmail.com',
            numeros: [
                '23456213456',
                '23456213456',
            ],
            principal: false,
            push_email: false,
            push_sms: false,
        }],
        control: {
            ws: false,
            integradores: false,
            bitacoras: false,
            comboy: false,
            limite_usuarios: 10,
            google_api_maps: "url de api maps",
            google_api: "url de api",
        },
        estado: true,
        movimientos: [{
            tipoAccion: 'Seguimiento',
            fecha: '2021-10-21 12:22:00',
            coleccion: 'Unidades',
            descripcion: 'Inicio seguimiento de unidad 32123',
            datosAntes: {Object},
            datosNuevos: {Object},
            datosHost: {Object},
        }],
        perfil: 'Clientes',
        usuarios: [2,3,5,1],
        unidades: [1,354,67,5,34,3,65,23,65,3],
        permisos: [12,43,65,4,24]
    },
    {
        _id: 2,
        cliente: {
            rfc: 'HDKG2GJK435KJSF',
            rs: 'CLIENTE RAZON SOCIAL DOS',
            nc: 'Cliente numero dos',
        },
        informacion: {
            nombre: 'Cliente 2',
            primerApellido: 'ape uno',
            segundoApellido: 'ape dos',
        },
        emails: [
            'clienteB@gmail.com'
        ],
        numeros: [
            '123456788324',
            '213456788346'
        ],
        preferencias: [
            'Con notificaciones'
        ],
        tipoCliente: 'Distribuidor',
        contactos: [{
            _id: false,
            nombre: 'Contacto numero 3',
            email: 'contacto3@gmail.com',
            numeros: [
                '23456213456',
                '23456213456',
            ],
            principal: false,
            push_email: false,
            push_sms: false,
        }],
        control: {
            ws: false,
            integradores: false,
            bitacoras: false,
            comboy: false,
            limite_usuarios: 10,
            google_api_maps: "url de api maps",
            google_api: "url de api",
        },
        estado: true,
        movimientos: [{
            tipoAccion: 'Asignacion',
            fecha: '2021-10-21 12:22:00',
            coleccion: 'CLientes',
            descripcion: 'Asigno al cliente 47354865 la unidad 32123',
            datosAntes: {Object},
            datosNuevos: {Object},
            datosHost: {Object},
        }],
        perfil: 'Distribuidor',
        usuarios: [2,3,5],
        unidades: [1,354,67,5,34,3,65,23,65,3],
        permisos: [12,43,65,4,24]
    },
    {
        _id: 3,
        cliente: { },
        informacion: {
            nombre: 'Felipe',
            primerApellido: 'Navigation',
        },
        emails: [
            'felipe@gmail.com'
        ],
        numeros: [
            '123456788324',
            '213456788346'
        ],
        preferencias: [],
        tipoCliente: 'Tecnico',
        contactos: [{
            _id: false,
            nombre: 'Contacto numero 1',
            email: 'contacto1@gmail.com',
            numeros: [
                '23456213456',
                '23456213456',
            ],
            principal: false,
            push_email: false,
            push_sms: false,
        }],
        control: {
            ws: false,
            integradores: false,
            bitacoras: false,
            comboy: false,
            limite_usuarios: 10,
            google_api_maps: "url de api maps",
            google_api: "url de api",
        },
        estado: true,
        movimientos: [{
            tipoAccion: 'Revicion',
            fecha: '2021-10-21 12:22:00',
            coleccion: 'Unidades',
            descripcion: 'Revicion en la unidad 33435',
            datosAntes: {Object},
            datosNuevos: {Object},
            datosHost: {Object},
        }],
        perfil: 'Tecnicos',
        productos: [2,3,5,1,34,25,34,4,35,46,4],
        unidades: [1,354,67,5,34,3,65,23,65,3],
        permisos: [12,43,65,4,24]
    }
];