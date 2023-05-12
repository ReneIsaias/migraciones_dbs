perfiles = [
    {
        _id: 1,
        nombre: 'Administrador',
        descripcion: 'Tiene acceso a todo el sistema',
        tipoPerfil: 'Usuarios',
        accesoTotal: true,
        estado: true,
        permisos: []
    },
    {
        _id: 2,
        nombre: 'Monitorista',
        descripcion: 'Se encarga de observar todo lo que ocurre con las unidades',
        tipoPerfil: 'Usuarios',
        accesoTotal: false,
        estado: true,
        permisos: [1,2,3,4,5]
    },
    {
        _id: 2,
        nombre: 'Cliente',
        descripcion: 'Usuario que solo observa las unidades que se le asignaron',
        tipoPerfil: 'Clientes',
        accesoTotal: false,
        estado: true,
        permisos: [6,7,8,9]
    },
    {
        _id: 2,
        nombre: 'Distribuidor',
        descripcion: 'Cliente que administrara a otros clientes',
        tipoPerfil: 'Clientes',
        accesoTotal: false,
        estado: true,
        permisos: [10,11,12,13,14,15,16,17]
    },
    {
        _id: 2,
        nombre: 'Visitante',
        descripcion: 'Solo se le permite ver como funciona la plataforma',
        tipoPerfil: 'Clientes',
        accesoTotal: false,
        estado: true,
        permisos: [18,19,20]
    }
];