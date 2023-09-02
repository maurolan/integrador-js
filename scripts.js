

// VARIABLES AUXILIARES
let banderaCart = false;
let banderaToggle = false;
let banderaMostrados = 0;


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



// CAPTURA DE ELEMENTOS
const menuToggleIcon = document.getElementById('menu-toggle-icon');
const menuToggle = document.getElementById('menu-toggle');

const menuCartIcon = document.getElementById('menu-cart');
const CartContainer = document.getElementById('cart-container');

const heroImagen = document.getElementById('hero-img');

const verMasBtn = document.getElementById('btn-ver-more');

const contenedorCards = document.getElementById('art-container')

const verTodosBtn = document.getElementById('btn-ver-all');

// captura items carrito
const cartItemsContainer = document.getElementById('cart-items-container');

// categorias buttons
const btnCategoria = document.getElementById('articulos-categories');




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
itemCartPrice.innerText = `$ ${art.precio}`; 

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

// avisar que se agregó un item !!!!!!!!!!!!!!!!!!

};





// FUNCION QUE ROTAS LAS IMAGENES CADA CIERTO TIEMPO EN HOME
const rotadorImagenHome = () => {
let imagen = 1;
    setInterval(() => {
        heroImagen.setAttribute('src',`./assets/img/homeimg${imagen}.jpg`)
        imagen++;
        if (imagen == 7){
            imagen = 1 ;
        } 
    }, 7000);

}; 


// FUNCION QUE BORRAR LAS CARDS CARGADAS
const limpiarArticulos = () => {
    contenedorCards.innerHTML = '';
};


// Funcion que genera las cards a partir del filtro aplicado
const mostrarCardsFiltradas = (categoria) => {
    limpiarArticulos();
    const artCatFiltered = articulos.filter((articulo)=> articulo.categoria === categoria);
    banderaMostrados = 0;
    renderizarArticulos(artCatFiltered);
    verMasBtn.classList.add('ocultar');
    verTodosBtn.classList.remove('ocultar');
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


// Funcion Generadora de 1 sola card
const generarCardTemplate = articulo => {
    const {nombre, marca, imagen, precio, id, modelo, detalle, descripcion} = articulo;

    return `
    <div class="art-card">
        <div class="art-img-container">
            <img class="art-img" src="${imagen}" alt="${nombre}" />
        </div>
        <h3 class="art-nombre">${nombre} - ${marca}</h3>
        <p class="art-description">${descripcion} ${detalle} ${modelo}</p>
        <div class="art-price-btn-container"> 
            <h2 class="art-price">${precio}</h2>
            <button class="art-btn-add" id="${id}">Agregar</button>
        </div>
    </div>
    `;
};

//FUNCION QUE RENDERIZA ARTICULOS del arreglo pasado como argumentos
const renderizarArticulos = (arts) => {
    limpiarArticulos();
let articulosGenerados = arts.map(generarCardTemplate).join('');
contenedorCards.innerHTML = articulosGenerados;
};


// Mostrar en grupos de articulos de 3 uso una variable auxiliar para saber en que posicion estoy.
const agruparArticulos = () => {
   let total = articulos.length
    if (banderaMostrados < (total-2)){
        for(let i=0 ; i<3;i++){
            banderaMostrados += 1;
           contenedorCards.innerHTML += generarCardTemplate(articulos[banderaMostrados]);
        }
    }else{
        //reseteo la bandera
        banderaMostrados = 0;
    }

    // OCULTO  EL BOTON VER MAS EN ARTICULOS SI no tengo mas articulos que mostrar
    if (banderaMostrados > (total-3)){
        verMasBtn.classList.add('ocultar');
    }
};



// FUNCION INICIALIZADORA
const init = () => {

    rotadorImagenHome();

    // muestro 3 articulos iniciales al azar
    articulosIniciales();

    
     // escuchador boton  VER MAS  Articulos
    verMasBtn.addEventListener('click',agruparArticulos);

    // escuchador botn VER Todo articulos
    verTodosBtn.addEventListener('click',()=>{
        renderizarArticulos(articulos);
        verMasBtn.classList.add('ocultar');
        verTodosBtn.classList.add('ocultar');
    });

      // Escuchar Botones de Filtrados de Articulos
    btnCategoria.addEventListener('click',(e) => mostrarCardsFiltradas(e.target.id));


};


init();