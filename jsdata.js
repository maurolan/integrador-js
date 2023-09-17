const articulos = [
    { 
        id: 1,
        nombre: "Disco Laptop",
        descripcion: "Disco Rigido Laptop",
        precio: 20000,
        marca: "Western Digital",
        modelo: "Black 1Tb",
        detalle: 'Mecanico, interface SATA-3 medidas: 3x4"',
        condicion: "usado",
        categoria: "storage",
        stock: 2,
        imagen: "./assets/img/articles/0001.png"
    },
    {
        id: 2,
        nombre: "Disco Laptop",
        descripcion: "Disco Rigido Laptop",
        precio: 18000,
        marca: "HGST",
        modelo: "500 Gb",
        detalle: 'Mecanico, interface SATA-3 medidas: 3x4"',
        condicion: "usado",
        categoria: "storage",
        stock: 3,
        imagen: "./assets/img/articles/0016.png"
    },
    { 
        id: 3,
        nombre: "Memoria PC",
        descripcion: "Memoria DDR2",
        precio: 9000,
        marca: "Smart",
        modelo: "4 Gb 2Rx8",
        detalle: "PC 127 pines",
        condicion: "usado",
        categoria: "memorias",
        stock: 4,
        imagen: "./assets/img/articles/0002.png"
    },
    { 
        id: 4,
        nombre: "Motherboard PC",
        descripcion: "Motherboard PC",
        precio: 45000,
        marca: "ASUS",
        modelo: "A520m-a- li",
        detalle: "En caja con accesorios",
        condicion: "usado",
        categoria: "placas",
        stock: 1,
        imagen: "./assets/img/articles/0003.png"
    },
    { 
        id: 5,
        nombre: "Motherboard PC",
        descripcion: "Motherboard PC",
        precio: 40000,
        marca: "Gigabyte",
        modelo: "GA-a520m 1.0",
        detalle: "En bolsa antiestatica",
        condicion: "usado",
        categoria: "placas",
        stock: 1,
        imagen: "./assets/img/articles/0017.png"
    },
    { 
        id: 6,
        nombre: "Placa Video",
        descripcion: "Placa Video PC",
        precio: 80000,
        marca: "Nvidia",
        modelo: "RTX 3060 Ti 8Gb",
        detalle: "En bolsa antiestatica",
        condicion: "usado",
        categoria: "video",
        stock: 1,
        imagen: "./assets/img/articles/0004.png"
    },
    { 
        id: 7,
        nombre: "Placa Video",
        descripcion: "Placa Video PC",
        precio: 90000,
        marca: "AMD",
        modelo: "RX 580 8Gb",
        detalle: "En bolsa antiestatica",
        condicion: "usado",
        categoria: "video",
        stock: 1,
        imagen: "./assets/img/articles/0007.png"
    },
    { 
        id: 8,
        nombre: "Laptop",
        descripcion: "Laptop Notebook",
        precio: 140000,
        marca: "Dell",
        modelo: "E6400 Latitude",
        detalle: "disco 256gb ssd, memoria 8gb, Windows 10",
        condicion: "usado",
        categoria: "equipos",
        stock: 1,
        imagen: "./assets/img/articles/0008.png"
    },
    { 
        id: 9,
        nombre: "Laptop",
        descripcion: "Laptop Notebook",
        precio: 160000,
        marca: "HP",
        modelo: "440 g3 i7-6500u",
        detalle: "disco 256gb ssd, memoria 8gb, Windows 10",
        condicion: "usado",
        categoria: "equipos",
        stock: 1,
        imagen: "./assets/img/articles/0009.png"
    },
    { 
        id: 10,
        nombre: "Laptop",
        descripcion: "Laptop Notebook",
        precio: 155000,
        marca: "Asus",
        modelo: "K53e I3-2330m",
        detalle: "disco 512gb, memoria 8gb, Windows 10",
        condicion: "usado",
        categoria: "equipos",
        stock: 1,
        imagen: "./assets/img/articles/0010.png"
    },
    { 
        id: 11,
        nombre: "Laptop",
        descripcion: "Laptop Notebook",
        precio: 60000,
        marca: "Lenovo",
        modelo: "G460 i3",
        detalle: "disco 500gb, memoria 4gb, Windows 8",
        condicion: "usado",
        categoria: "equipos",
        stock: 1,
        imagen: "./assets/img/articles/0011.png"
    },
    { 
        id: 12,
        nombre: "Multimetro Digital",
        descripcion: "Tester Digital Uni-t Ut 33b+ Luz Diodos",
        precio: 11000,
        marca: "UNI-T",
        modelo: "UT 33B",
        detalle: "Alimentación: AA 1,5V × 2, pantalla: 66 x 51mm",
        condicion: "usado",
        categoria: "electronica",
        stock: 2,
        imagen: "./assets/img/articles/0012.png"
    },
    { 
        id: 13,
        nombre: "Buscapolo Inductivo",
        descripcion: "Detector De Voltaje sin contacto",
        precio: 10000,
        marca: "Proskit",
        modelo: "NT-309",
        detalle: "Alimentación: AA 1,5V×2, Rango: 12 - 1000V ",
        condicion: "usado",
        categoria: "tools",
        stock: 3,
        imagen: "./assets/img/articles/0013.png"
    },
    { 
        id: 14,
        nombre: "Mouse Inalambrico Gamer",
        descripcion: "Recargable Luz Rgb 6 Botones Usb Pc",
        precio: 11000,
        marca: "Xinua",
        modelo: "M8",
        detalle: "Alimentación: AAA 1,5V×1",
        condicion: "usado",
        categoria: "perifericos",
        stock: 2,
        imagen: "./assets/img/articles/0014.png"
    },
    { 
        id: 15,
        nombre: "Teclado Inalambrico Gamer",
        descripcion: "Qwerty Red Español Color Celeste Y Blanco Con Luz Rgb",
        precio: 36000,
        marca: "Redragon",
        modelo: "K616-rgb-ar",
        detalle: "Alimentación: AAA 1,5V×2",
        condicion: "usado",
        categoria: "perifericos",
        stock: 2,
        imagen: "./assets/img/articles/0015.png"
    },
    { 
        id: 16,
        nombre: "Memoria Laptop",
        descripcion: "ValueRAM 8GB Kingston ",
        precio: 22000,
        marca: "Kingston",
        modelo: "KVR32S22S8/8",
        detalle: "sodimm 256 cont",
        condicion: "usado",
        categoria: "memorias",
        stock: 2,
        imagen: "./assets/img/articles/0018.png"
    },
    { 
        id: 17,
        nombre: "Memoria Externa",
        descripcion: "Tarjeta memoria SDCS2 SelectPlus",
        precio: 8000,
        marca: "Kingston",
        modelo: "Canvas",
        detalle: "C/adaptador SD64GB",
        condicion: "usado",
        categoria: "memorias",
        stock: 2,
        imagen: "./assets/img/articles/0019.png"
    },
    { 
        id: 18,
        nombre: "Placa video",
        descripcion: "Placa video MSI Gaming GeForce 10 Series ",
        precio: 312000,
        marca: "Nvidia",
        modelo: "GTX 1050 Ti",
        detalle: " GEFORCE 4GB",
        condicion: "usado",
        categoria: "video",
        stock: 1,
        imagen: "./assets/img/articles/0020.png"
    },
    { 
        id: 19,
        nombre: "Disco Rigido SSD",
        descripcion: "Disco SSD 480GB negro",
        precio: 22000,
        marca: "Kingston",
        modelo: "SA400S37",
        detalle: "interno laptop/Pc",
        condicion: "usado",
        categoria: "storage",
        stock: 2,
        imagen: "./assets/img/articles/0021.png"
    },
    { 
        id: 20,
        nombre: "Disco Rigido",
        descripcion: "Disco Rigido 2tb Wd Sataiii",
        precio: 43000,
        marca: "WD",
        modelo: "Blue 256mb",
        detalle: "interno PC",
        condicion: "usado",
        categoria: "storage",
        stock: 2,
        imagen: "./assets/img/articles/0022.png"
    },
    { 
        id: 21,
        nombre: "PC Escritorio",
        descripcion: "PC Core I3 4160  (Reacondicionado)",
        precio: 130000,
        marca: "HP",
        modelo: "Prodesk 600",
        detalle: "8gb Ddr3 Disco De 500 Gb",
        condicion: "usado",
        categoria: "equipos",
        stock: 2,
        imagen: "./assets/img/articles/0023.png"
    },
    { 
        id: 22,
        nombre: "Soldador Lapiz",
        descripcion: "Estaño Profesional",
        precio: 6000,
        marca: "Proskit",
        modelo: "40 Watt",
        detalle: "Punta Ceramica",
        condicion: "usado",
        categoria: "electronica",
        stock: 2,
        imagen: "./assets/img/articles/0027.png"
    }
];



// Divido los articulos en grupos para mostrar
const dividirArticulos = (size) => {
    let listaArticulos = [];
    for ( let i = 0; i < articulos.length; i += size )
    listaArticulos.push(articulos.slice( i, i + size ))
    return listaArticulos; 
}

// Estado de la aplicacion
const appState = {
    articulos: dividirArticulos(4),
    indiceActualArticulos: 0,
    limiteArticulos: dividirArticulos(4).length,
    activeFilter: 'todos',
    toggleFlag: false,
    cartFlag: false
}
