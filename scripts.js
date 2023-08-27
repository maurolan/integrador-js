
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
        nombre: "Memoria",
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
        categoria: "tools",
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
    }
];


// CAPTURA DE ELEMENTOS
const menuToggleIcon = document.getElementById('menu-toggle-icon');
const menuToggle = document.getElementById('menu-toggle');
const verMasBtn = document.getElementById('btn-ver-more');


// // Click menu hamburguesa --> abre el menutoggle
menuToggleIcon.addEventListener('click',()=>{
    menuToggle.style.display = 'flex';
});

// // Click menu hamburguesa --> cierra el menutoggle
menuToggle.addEventListener('click',()=>{
menuToggle.style.display = 'none';
});


// const generadorArticulo = () => {


// articulos.map(art => {

//     let articuloCard = document.createElement('div');
//     articuloCard.classList.add('art-card');
    
//     let articuloImgContainer = document.createElement('div');
//     articuloImgContainer.classList.add('art-img-container');
    
//     let articuloImg = document.createElement('img');
//     articuloImg.classList.add('art-img');
//     articuloImg.src = art.imagen;
//     articuloImg.alt = art.nombre;
    
//     let articuloNombre = document.createElement('h3');
//     articuloNombre.classList.add('art-nombre');
//     articuloNombre.innerText = `${art.nombre} - ${art.marca}` ;
    
//     let articuloDescription = document.createElement('p');
//     articuloDescription.classList.add('art-description');
//     articuloDescription.innerText = `${art.descripcion} ${art.detalle} ${art.modelo}`;
    
//     let artPriceBtn = document.createElement('div');
//     artPriceBtn.classList.add('art-price-btn-container');
    
//     let artPrice = document.createElement('h2');
//     artPrice.classList.add('art-price');
//     artPrice.innerText = `$ ${art.precio}` ;
    
//     let artBtn = document.createElement('button');
//     artBtn.classList.add('art-btn-add');
//     artBtn.innerText = 'Agregar';


//     articuloImgContainer.appendChild(articuloImg);
    
//     articuloCard.appendChild(articuloImgContainer);
//     articuloCard.appendChild(articuloNombre);
//     articuloCard.appendChild(articuloDescription);

//     artPriceBtn.appendChild(artPrice);
//     artPriceBtn.appendChild(artBtn);

//     articuloCard.appendChild(artPriceBtn);

//     const contenedorArticulos = document.getElementById('art-container');

//     contenedorArticulos.appendChild(articuloCard);

// });

// };


// const rotarImagenesHero = () => {
//     const heroImg = document.getElementById('hero-img');
//     const imgs = ['homeimg2.jpg','homeimg3.jpg','homeimg4.jpg','homeimg.jpg'];
// let i=0;
//     setTimeout(()=>{
//         heroImg.setAttribute('src',`./assets/img/${imgs[i]}`);
//         console.log(heroImg.src);
//     },4000);
    
// };


const sombrearBotonVerMas = (control) => {
    // anulo el boton ver mas
//    if(control == articulos.length) verMasBtn.classList.toggle('ocultar');
verMasBtn.classList.toggle('ocultar');
};


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


const cargarMasArticulos = () => {


// let childDelete = document.querySelector('#art-container');

// childDelete.innerHTML = '';

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
    
    sombrearBotonVerMas();
};



const init = () => {

// generadorArticulo();

// rotarImagenesHero();

articulosIniciales();

verMasBtn.addEventListener('click',cargarMasArticulos);







};


init();