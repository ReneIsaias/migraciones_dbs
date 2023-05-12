usuarios = [
    {
        _id: 1,
        informacion: {
            nombre: 'Carlos',
            primerApellido: "Perez"
        },
        usuario: 'carlos@gmail.com',
        password: '12345qwerty',
        emails: [
            'email1@algo.com',
            'email2@algo.com',
            'email3@algo.com'
        ],
        numeros: [
            '1234567890',
            '0987654321'
        ],
        descripcion: 'Una descripcion del usuario',
        distribuidor: false,
        ws: false,
        creado: '2021-10-01 12:31:12',
        vencimiento: '2030-10-01 12:31:12',
        preferencias: [
            'Sin notificaciones',
            'color verde',
            'etc'
        ],
        ultimo_acceso: '2021-10-01 12:31:12',
        area: "Clientes",
        estado: true,
        movimientos: [
            {
                tipoAccion: 'Insercion',
                fecha: '2021-10-01 12:31:12',
                coleccion: 'Unidades',
                descripcion: 'Agrega una unidad con placas 12345',
                datosAntes: {},
                datosNuevos: {},
                datosHost: {},
            },
            {
                tipoAccion: 'Modificacion',
                fecha: '2021-10-01 12:31:12',
                coleccion: 'Unidades',
                descripcion: 'Cambio la informacion de la unidad con placas 12345',
                datosAntes: {},
                datosNuevos: {},
                datosHost: {},
            }
        ],
        perfil: 'Cliente',
        permisos: [2],
        asignaciones: [
            {
                id_unidad: 1,  
            },
            {
                id_unidad: 2,  
            },
            {
                id_unidad: 3,  
            },
            {
                id_unidad: 4,
            }
        ],
    },
    {
        _id: 2,
        informacion: {
            nombre: 'Ruben',
            primerApellido: "Navigation",
        },
        usuario: 'ruben@gmail.com',
        password: '12345qwerty',
        emails: [
            'email1@algo.com',
            'email2@algo.com',
        ],
        numeros: [
            '1234567890',
            '0987654321',
        ],
        descripcion: 'Una descripcion del usuario ruben',
        distribuidor: false,
        ws: false,
        creado: '2021-10-01 12:31:12',
        vencimiento: '2030-10-01 12:31:12',
        preferencias: [
            'Sin notificaciones',
            'color verde',
            'etc',
        ],
        ultimo_acceso: '2021-10-01 12:31:12',
        area: "Monitoreo",
        estado: true,
        movimientos: [
            {
                tipoAccion: 'Insercion',
                fecha: '2021-10-01 12:31:12',
                coleccion: 'Usuarios',
                descripcion: 'Agrego un nuevo usuario pedrito',
                datosAntes: {},
                datosNuevos: {},
                datosHost: {},
            },
            {
                tipoAccion: 'Insercion',
                fecha: '2021-10-01 12:31:12',
                coleccion: 'Clientes',
                descripcion: 'Agrego un nuevo cliente jose',
                datosAntes: {},
                datosNuevos: {},
                datosHost: {},
            },
            {
                tipoAccion: 'Eliminacion',
                fecha: '2021-10-01 12:31:12',
                coleccion: 'Unidades',
                descripcion: 'Suspendio la unidad 21345tg',
                datosAntes: {},
                datosNuevos: {},
                datosHost: {},
            }
        ],
        perfil: 'Monitorista',
        permisos: [4,34,54,23,2],
        asignaciones: [
            {
                id_cliente: 1,  
            },
            {
                id_cliente: 2,  
            },
            {
                id_cliente: 3,  
            },
            {
                id_cliente: 4,
            }
        ],
    },
    {
        _id: 3,
        informacion: {
            nombre: 'Pixis',
        },
        usuario: 'pixis@gmail.com',
        password: '12345qwerty',
        emails: [
            'pixis1@algo.com',
            'pixis2@algo.com',
        ],
        numeros: [
            '1234567890',
            '0987654321',
        ],
        descripcion: 'Una descripcion de pixis',
        distribuidor: true,
        ws: false,
        creado: '2021-10-01 12:31:12',
        vencimiento: '2030-10-01 12:31:12',
        preferencias: [
            'Sin notificaciones',
            'color verde',
            'etc'
        ],
        ultimo_acceso: '2021-10-01 12:31:12',
        area: "Distribuidores",
        estado: true,
        movimientos: [
            {
                tipoAccion: 'Asignacion',
                fecha: '2021-10-01 12:31:12',
                coleccion: 'Clientes',
                descripcion: 'Asigno la unidad 24354 al cliente pepito',
                datosAntes: {},
                datosNuevos: {},
                datosHost: {},
            },
            {
                tipoAccion: 'Suspecion',
                fecha: '2021-10-01 12:31:12',
                coleccion: 'Unidades',
                descripcion: 'Suspendio la unidad con placas 12345',
                datosAntes: {},
                datosNuevos: {},
                datosHost: {},
            }
        ],
        perfil: 'Distribuidor',
        permisos: [],
        asignaciones: [
            {
                id_unidad: 132,
                id_cliente: 54,
            },
            {
                id_unidad: 2,
                id_cliente: 54,
            },
            {
                id_unidad: 33,
                id_cliente: 4,
            },
            {
                id_unidad: 443,
            }
        ],
    },
    {
        _id: 4,
        informacion: {
            nombre: 'Admin',
        },
        usuario: 'admin@admin.com',
        password: '12345qwerty',
        emails: [
            'backup@algo.com',
        ],
        numeros: [
            '1234567890',
            '0987654321'
        ],
        descripcion: 'este es el usuario que tiene acceso a todo el sistema',
        distribuidor: false,
        ws: false,
        creado: '2021-10-01 12:31:12',
        vencimiento: '2030-10-01 12:31:12',
        preferencias: [
            'Sin notificaciones',
        ],
        ultimo_acceso: '2021-10-01 12:31:12',
        area: "Administrador",
        estado: true,
        movimientos: [
            {
                tipoAccion: 'Eliminacion',
                fecha: '2021-10-01 12:31:12',
                coleccion: 'Usuarios',
                descripcion: 'Elimino al usuario pedro',
                datosAntes: {},
                datosNuevos: {},
                datosHost: {},
            },
            {
                tipoAccion: 'Agrego a un cliente',
                fecha: '2021-10-01 12:31:12',
                coleccion: 'Clientes',
                descripcion: 'Agrego a un cliente lupe',
                datosAntes: {},
                datosNuevos: {},
                datosHost: {},
            }
        ],
        perfil: 'Administrador',
        accesoUnidades: true,
        accesoClientes: true,
    },
];