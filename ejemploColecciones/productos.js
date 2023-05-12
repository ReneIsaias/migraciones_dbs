productos = [
    {
        _id: 1,
        clave: 'clvProduct1',
        nombre: 'GPS sontech 300',
        descripcion: 'Es un gps de la marca sontech 300',
        precio: 400,
        tipoProducto: 'Producto',
        infoAdicional: [
            'Colo negro',
            'Peso 300g',
            'Tiene una pila de 12 voltios'
        ],
        ventas: [
            {
                fecha: '2021-12-23 20:21:11',
                tipoVenta: 'Asignacion',
                cantidad: 1,
                descripcion: 'Se asigno al cliente felipe',
                id_clientes: [3],
                id_usuarios: [1],
                id_unidades: [],
            },
            {
                fecha: '2021-09-23 20:21:11',
                tipoVenta: 'Instalacion',
                cantidad: 1,
                descripcion: 'Se instalo en la unidad 32434',
                id_clientes: [3],
                id_usuarios: [1,4],
                id_unidades: [32],
            },
            {
                fecha: '2021-43-23 20:21:11',
                tipoVenta: 'Revicion',
                descripcion: 'Se reviso en la unidad 324',
                id_clientes: [3,4],
                id_usuarios: [1,32],
                id_unidades: [32],
            }
        ],
        estado: true
    },
    {
        _id: 2,
        clave: 'clvProduct2',
        nombre: 'Cinta',
        descripcion: 'Cinta para las conexions',
        precio: 50,
        tipoProducto: 'Material',
        infoAdicional: [
            'Colo negro',
        ],
        ventas: [
            {
                fecha: '2021-12-23 20:21:11',
                tipoVenta: 'Asignacion',
                cantidad: 10,
                descripcion: 'Se asigno al cliente felipe',
                id_clientes: [3],
                id_usuarios: [1],
                id_unidades: [],
            }
        ],
        estado: true
    }
];