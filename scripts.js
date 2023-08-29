
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
        imagen: "./assets/img/articles/0001.png", 
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
        imagen: "./assets/img/articles/0016.png", 
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
        imagen: "./assets/img/articles/0002.png", 
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
        imagen: "./assets/img/articles/0003.png", 
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
        imagen: "./assets/img/articles/0017.png", 
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
        imagen: "./assets/img/articles/0004.png", 
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
        imagen: "./assets/img/articles/0007.png", 
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
        imagen: "./assets/img/articles/0008.png", 
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
        imagen: "./assets/img/articles/0009.png", 
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
        imagen: "./assets/img/articles/0010.png", 
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
        imagen: "./assets/img/articles/0011.png", 
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
        imagen: "./assets/img/articles/0012.png", 
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
        imagen: "./assets/img/articles/0013.png", 
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
        imagen: "./assets/img/articles/0014.png", 
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
        imagen: "./assets/img/articles/0015.png", 
    },
    { 
        id: 16,
        nombre: "Memoria Laptopp",
        descripcion: "ValueRAM 8GB Kingston ",
        precio: 22000,
        marca: "Kingston",
        modelo: "KVR32S22S8/8",
        detalle: "sodimm 256 cont",
        condicion: "usado",
        categoria: "memorias",
        stock: 2,
        imagen: "./assets/img/articles/0018.png", 
    },
    { 
        id: 17,
        nombre: "Tarjeta Memoria Ext",
        descripcion: "Tarjeta memoria SDCS2 SelectPlus",
        precio: 8000,
        marca: "Kingston",
        modelo: "Canvas",
        detalle: "C/adaptador SD64GB",
        condicion: "usado",
        categoria: "memorias",
        stock: 2,
        imagen: "./assets/img/articles/0019.png", 
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
        imagen: "./assets/img/articles/0020.png", 
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
        imagen: "./assets/img/articles/0021.png", 
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
        imagen: "./assets/img/articles/0022.png", 
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
        imagen: "./assets/img/articles/0023.png", 
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
        imagen: "./assets/img/articles/0027.png", 
    }
];

// VARIABLES AUXILIARES
let banderaCart = false;
let banderaToggle = false;

// CAPTURA DE ELEMENTOS
const menuToggleIcon = document.getElementById('menu-toggle-icon');
const menuToggle = document.getElementById('menu-toggle');

const menuCartIcon = document.getElementById('menu-cart');
const CartContainer = document.getElementById('cart-container');

const heroImagen = document.getElementById('hero-img');

const verMasBtn = document.getElementById('btn-ver-more');


// captura items carrito
const cartItemsContainer = document.getElementById('cart-items-container');

// categorias buttons
const memorias = document.getElementById('memorias');
const video = document.getElementById('video');
const storage = document.getElementById('storage');
const tools = document.getElementById('tools');
const perifericos = document.getElementById('perifericos');
const electronica = document.getElementById('electronica');
const placas = document.getElementById('placas');
const equipos = document.getElementById('equipos');





// // Click menu hamburguesa --> abre el menutoggle  ver tema de no repetir!!!!!
menuToggleIcon.addEventListener('click',()=>{

    if(!banderaToggle){
        menuToggle.style.display = 'flex';
        banderaToggle = true;

        CartContainer.style.visibility = 'hidden';
        CartContainer.style.transform = 'translate(150%)';
        banderaCart = false;
    }else{
        menuToggle.style.display = 'none';
        banderaToggle = false;
    }
    
});

// // Click menu hamburguesa --> cierra el menutoggle
menuToggle.addEventListener('click',()=>{
    menuToggle.style.display = 'none';
        banderaToggle = false;
});


// // Click MENU CART --> abre y cierra el carrito
menuCartIcon.addEventListener('click',()=>{
    if (!banderaCart){
        CartContainer.style.visibility = 'visible';
        CartContainer.style.transform = 'translate(0%)';
        banderaCart = true;

        menuToggle.style.display = 'none';
        banderaToggle = false;
    }else{
        CartContainer.style.visibility = 'hidden';
        CartContainer.style.transform = 'translate(150%)';
        banderaCart = false;
    }
});

// HATA ACA NO REPETIR CODIGO!!


// Funcion que detecta el articulo que se quiere agregar al carrito
const addArtCart = document.addEventListener('click',(e)=>{
    let id = Number(e.target.id);
    generarCardCart(id);
});


//Funcion para Generar card de carrito
const generarCardCart = (id) => {

//buscar el articulos a partir del id
const art = articulos.find((articulo)=>{
    return articulo.id === id; 
});

// console.log(art);

// generar html

let itemCart = document.createElement('div');
itemCart.classList.add('item-cart');

let itemCartImg = document.createElement('img');
itemCartImg.classList.add('item-cart-img');
itemCartImg.src = art.imagen; 
itemCartImg.alt = art.nombre; 

let itemCartInfo = document.createElement('div');
itemCartInfo.classList.add('item-cart-info'); // a esta clase le appendeo itemCartTitle y itemCartPrice


let itemCartTitle = document.createElement('h3');
itemCartTitle.classList.add('item-cart-title');
itemCartTitle.innerText = art.nombre; 


let itemCartPrice = document.createElement('p');
itemCartPrice.classList.add('item-cart-price');
itemCartTitle.innerText = art.precio; 

let itemCartToggle = document.createElement('div');
itemCartToggle.classList.add('item-cart-toggle'); // a esta clase le appendeo los 3 'parrafos'

let itemCartMoreBtn = document.createElement('p');
itemCartMoreBtn.classList.add('item-cart-more-btn');
itemCartMoreBtn.innerText = '+';

let itemCartMinusBtn = document.createElement('p');
itemCartMinusBtn.classList.add('item-cart-minus-btn');
itemCartMinusBtn.innerText = '-';

let itemCartDelBtn = document.createElement('p');
itemCartDelBtn.classList.add('item-cart-del-btn');
itemCartDelBtn.innerText = 'D';

itemCartToggle.appendChild(itemCartMoreBtn);
itemCartToggle.appendChild(itemCartMinusBtn);
itemCartToggle.appendChild(itemCartDelBtn);

itemCartInfo.appendChild(itemCartTitle);
itemCartInfo.appendChild(itemCartPrice);

itemCart.appendChild(itemCartImg);
itemCart.appendChild(itemCartInfo);
itemCart.appendChild(itemCartToggle);

cartItemsContainer.appendChild(itemCart);

};


// Funcion que genera las cards a partir del filtro aplicado
const generarCards = (artCatFiltered) => {
   
    artCatFiltered.map(art => {

    let articuloCard = document.createElement('div');
    articuloCard.classList.add('art-card');
    
    let articuloImgContainer = document.createElement('div');
    articuloImgContainer.classList.add('art-img-container');
    
    let articuloImg = document.createElement('img');
    articuloImg.classList.add('art-img');
    articuloImg.src = art.imagen;
    articuloImg.alt = art.nombre;
    
    let articuloNombre = document.createElement('h3');
    articuloNombre.classList.add('art-nombre');
    articuloNombre.innerText = `${art.nombre} - ${art.marca}` ;
    
    let articuloDescription = document.createElement('p');
    articuloDescription.classList.add('art-description');
    articuloDescription.innerText = `${art.descripcion} ${art.detalle} ${art.modelo}`;
    
    let artPriceBtn = document.createElement('div');
    artPriceBtn.classList.add('art-price-btn-container');
    
    let artPrice = document.createElement('h2');
    artPrice.classList.add('art-price');
    artPrice.innerText = `$ ${art.precio}` ;
    
    let artBtn = document.createElement('button');
    artBtn.classList.add('art-btn-add');
    artBtn.setAttribute('id',`${art.id}`);
    artBtn.innerText = 'Agregar';


    articuloImgContainer.appendChild(articuloImg);
    
    articuloCard.appendChild(articuloImgContainer);
    articuloCard.appendChild(articuloNombre);
    articuloCard.appendChild(articuloDescription);

    artPriceBtn.appendChild(artPrice);
    artPriceBtn.appendChild(artBtn);

    articuloCard.appendChild(artPriceBtn);

    const contenedorArticulos = document.getElementById('art-container');

    contenedorArticulos.appendChild(articuloCard);

});

};



// FUNCION QUE ROTAS LAS IMAGENES CADA CIERTO TIEMPO EN HOME

const rotadorImagenHome = () => {
let imagen = 1;
    setInterval(() => {
        // heroImagen.src = ''
        heroImagen.setAttribute('src',`./assets/img/homeimg${imagen}.jpg`)
        // console.log(imagen);
        imagen++;
        if (imagen == 7){
            imagen = 1 ;
        } 
    }, 20000);

}; 


// FUNCION QUE BORRAR LAS CARDS CARGADAS
const limpiarArticulos = () => {
    let childDelete = document.querySelector('#art-container');
    childDelete.innerHTML = '';
};


// ELIMINA EL BOTON VER MAS EN ARTICULOS
const sombrearBotonVerMas = (control) => {
    // anulo el boton ver mas
//    if(control == articulos.length) verMasBtn.classList.toggle('ocultar');
verMasBtn.classList.toggle('ocultar');
};


// FUNCIONES AUXILIARES
const generarIndicesAleatorios = () => {
    
    indicesGenerados = [];

while (indicesGenerados.length < 3) {

    let indice = Math.floor(Math.random() * (articulos.length - 1) + 1 ); //genero numero aleatorio entre 0 y longitud de articulos

    if (indicesGenerados.length === 0) { //si el el arreglo esta vacion el primero lo pusheo

        indicesGenerados.push(indice);

    } else {  // sino recorro el indice para comparar si el generado ya existe
       
        for(num of indicesGenerados){
            if (indice !== num){ //si no existe
                indicesGenerados.push(indice);  //lo agrego
                if (indicesGenerados.length === 3) break;
            } 
        }

    }
} 

return indicesGenerados;

};


// Funcion que genera 3 cards al azar iniciales
const articulosIniciales = () => {

    let indices = generarIndicesAleatorios();

for (let i=0; i<3 ; i++){

    
    art = articulos[indices[i]];

        let articuloCard = document.createElement('div');
        articuloCard.classList.add('art-card');
        
        let articuloImgContainer = document.createElement('div');
        articuloImgContainer.classList.add('art-img-container');
        
        let articuloImg = document.createElement('img');
        articuloImg.classList.add('art-img');
        articuloImg.src = art.imagen;
        articuloImg.alt = art.nombre;
        
        let articuloNombre = document.createElement('h3');
        articuloNombre.classList.add('art-nombre');
        articuloNombre.innerText = `${art.nombre} - ${art.marca}` ;
        
        let articuloDescription = document.createElement('p');
        articuloDescription.classList.add('art-description');
        articuloDescription.innerText = `${art.descripcion} ${art.detalle} ${art.modelo}`;
        
        let artPriceBtn = document.createElement('div');
        artPriceBtn.classList.add('art-price-btn-container');
        
        let artPrice = document.createElement('h2');
        artPrice.classList.add('art-price');
        artPrice.innerText = `$ ${art.precio}` ;
        
        let artBtn = document.createElement('button');
        artBtn.classList.add('art-btn-add');
        artBtn.setAttribute('id',`${art.id}`);
        artBtn.innerText = 'Agregar';
    
    
        articuloImgContainer.appendChild(articuloImg);
        
        articuloCard.appendChild(articuloImgContainer);
        articuloCard.appendChild(articuloNombre);
        articuloCard.appendChild(articuloDescription);
    
        artPriceBtn.appendChild(artPrice);
        artPriceBtn.appendChild(artBtn);
    
        articuloCard.appendChild(artPriceBtn);
    
        const contenedorArticulos = document.getElementById('art-container');
    
        contenedorArticulos.appendChild(articuloCard);
    
    
}    
};


// funcion que despliega mas cards al presionar ver mas
const cargarMasArticulos = () => {

    for (let i=0; i < articulos.length ; i++){

        art = articulos[i];

            let articuloCard = document.createElement('div');
            articuloCard.classList.add('art-card');
            
            let articuloImgContainer = document.createElement('div');
            articuloImgContainer.classList.add('art-img-container');
            
            let articuloImg = document.createElement('img');
            articuloImg.classList.add('art-img');
            articuloImg.src = art.imagen;
            articuloImg.alt = art.nombre;
            
            let articuloNombre = document.createElement('h3');
            articuloNombre.classList.add('art-nombre');
            articuloNombre.innerText = `${art.nombre} - ${art.marca}` ;
            
            let articuloDescription = document.createElement('p');
            articuloDescription.classList.add('art-description');
            articuloDescription.innerText = `${art.descripcion} ${art.detalle} ${art.modelo}`;
            
            let artPriceBtn = document.createElement('div');
            artPriceBtn.classList.add('art-price-btn-container');
            
            let artPrice = document.createElement('h2');
            artPrice.classList.add('art-price');
            artPrice.innerText = `$ ${art.precio}` ;
            
            let artBtn = document.createElement('button');
            artBtn.classList.add('art-btn-add');
            artBtn.setAttribute('id',`${art.id}`);
            artBtn.innerText = 'Agregar';
        
        
            articuloImgContainer.appendChild(articuloImg);
            
            articuloCard.appendChild(articuloImgContainer);
            articuloCard.appendChild(articuloNombre);
            articuloCard.appendChild(articuloDescription);
        
            artPriceBtn.appendChild(artPrice);
            artPriceBtn.appendChild(artBtn);
        
            articuloCard.appendChild(artPriceBtn);
        
            const contenedorArticulos = document.getElementById('art-container');
            contenedorArticulos.appendChild(articuloCard);
    }   
    
    // sombrearBotonVerMas();

};


// FUNCION INICIALIZADORA
const init = () => {

    // generadorArticulo();  USAR?? 

    // rotarImagenesHero();  VER DESPUES DESPLAZAR IMAGENES EN HOME


    articulosIniciales();


    // escuchador boton  VER MAS  Articulos
    verMasBtn.addEventListener('click',cargarMasArticulos);


    rotadorImagenHome();


    // Botones de Filtrados de Articulos
    memorias.addEventListener('click',()=>{
        limpiarArticulos();
        const artCatFiltered = articulos.filter((articulo)=> articulo.categoria === memorias.id);
        generarCards(artCatFiltered);
    });
    video.addEventListener('click',()=>{
        limpiarArticulos();
        const artCatFiltered = articulos.filter((articulo)=> articulo.categoria === video.id);
        generarCards(artCatFiltered);
    });
    storage.addEventListener('click',()=>{
        limpiarArticulos();
        const artCatFiltered = articulos.filter((articulo)=> articulo.categoria === storage.id);
        generarCards(artCatFiltered);
    });
    tools.addEventListener('click',()=>{
        limpiarArticulos();
        const artCatFiltered = articulos.filter((articulo)=> articulo.categoria === tools.id);
        generarCards(artCatFiltered);
    });
    perifericos.addEventListener('click',()=>{
        limpiarArticulos();
        const artCatFiltered = articulos.filter((articulo)=> articulo.categoria === perifericos.id);
        generarCards(artCatFiltered);
    });
    electronica.addEventListener('click',()=>{
        limpiarArticulos();
        const artCatFiltered = articulos.filter((articulo)=> articulo.categoria === electronica.id);
        generarCards(artCatFiltered);
    });
    placas.addEventListener('click',()=>{
        limpiarArticulos();
        const artCatFiltered = articulos.filter((articulo)=> articulo.categoria === placas.id);
        generarCards(artCatFiltered);
    });
    equipos.addEventListener('click',()=>{
        limpiarArticulos();
        const artCatFiltered = articulos.filter((articulo)=> articulo.categoria === equipos.id);
        generarCards(artCatFiltered);
    });

};


init();