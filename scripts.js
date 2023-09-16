/*  TODO EL CODIGO ANTERIOR

// CAPTURA DE ELEMENTOS

const heroImagen = document.getElementById('hero-img');



const contenedorCards = document.getElementById('art-container')

const verTodosBtn = document.getElementById('btn-ver-all');

const borrarCartBtn = document.getElementById('clear-cart-btn');

// captura items carrito
const cartItemsContainer = document.getElementById('cart-items-container');

const cartCounter = document.getElementById('cart-counter');

const cartTotalPrice = document.getElementById('cart-total-price');





// VARIABLES AUXILIARES
    
   
    let banderaMostrados = 0;


// FUNCIONES AUXILIARES :::::::::::::::::

// generar indices aleatorios
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








// funciona que carga el carrito al inicio
const articulosInicio = () => {
    let carrito = JSON.parse(localStorage.getItem("articulos")) || [];
    if (!carrito.length) {
        cartItemsContainer.innerHTML = '<h3 class="no-items"> No hay items seleccionados</h3>';
        return;
    } 
    renderizarCart(carrito);
    return;
} 

// Guardar en LocalStorage
const guardarEnLS = (encontrado) => {
    //cargo el LS antes de guardarlo
    const articulos = obtenerDeLS() || [];
    
    // pusheo el nuevo item agregado
    articulos.push(encontrado);

    // vuelvo a guardar en LS todo
    localStorage.setItem('articulos',JSON.stringify(articulos));
    return;
}

// Obtener de LocalStorage
const obtenerDeLS = () => {
    let articulosAComprar = JSON.parse(localStorage.getItem('articulos' || []) );
    return articulosAComprar;
};

//Borrar el LocalStorage al vaciar el carrito
const borrarLS = () => {
    localStorage.clear();
    cartItemsContainer.innerHTML = '<h3 class="no-items"> No hay items seleccionados</h3>';
};

// Agregar articulos a Carrito desde BOTON AGREGAR
function agregarArticulo(id){
    let encontrado = articulos.find(articulo => id === articulo.id);
    if (encontrado == undefined) {
        return;
    }

    // Guardo en LS
    guardarEnLS(encontrado);

   // Renderizo desde LS 
    let items = obtenerDeLS();
    
    renderizarCart(items); 

    return;
} 

//Funcion para Generar card de carrito
const generarCardCarrito = (item) => {
    const {nombre, precio, imagen, cantidad} = item;     
    return `<div class="item-cart">
                <img class="item-cart-img" src="${imagen}" alt="${nombre}" />
                <div class="item-cart-info">
                    <h3 class="item-cart-title">${nombre}</h3>
                    <p class="item-cart-price">$ ${precio}</p>
                </div>
                <div class="item-cart-toggle">
                    <p class="item-cart-more-btn">+</p>
                    <p class="item-cart-minus-btn">-</p>
                    <p class="item-cart-del-btn">${cantidad}</p>
                </div>
            </div>`; 
};

const renderizarCart = (items) => {
    cartItemsContainer.innerHTML = items.map(generarCardCarrito).join('');
    // FALTA EL AVISO  que se agregó un item !!!!!!!!!!!!!!!!!!
};

// FUNCION QUE ROTA LAS IMAGENES CADA CIERTO TIEMPO EN HOME
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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

*/




//  ::::::::::  CAPTURAS DE ELEMENTOS HTML  ::::::::::::::::

// CONTENEDOR DE PRODUCTOS
const contenedorCards = document.getElementById('art-container');

// BOTON "VER MAS"
const verMasBtn = document.getElementById('btn-ver-more');

// ICONO MENU HAMBURGUESA
const menuToggleIcon = document.getElementById('menu-toggle-icon');

// MENU TOGGLE
const menuToggle = document.getElementById('menu-toggle');

// ICONO DEL CARRITO
const menuCartIcon = document.getElementById('menu-cart');

// CONTENEDOR CARRITO
const CartContainer = document.getElementById('cart-container');

// BOTONES DE CATEGORIAS
const btnCategoria = document.getElementById('articulos-categories');

// OVERLAY
const overlay = document.getElementById('overlay');







//  ::::::::::  FUNCIONES AUXILIARES  ::::::::::::::::

// Conocer el indice renderizado de productos llego al limite
const esUltimoIndice = () => {
    return (appState.indiceActualArticulos === (appState.limiteArticulos - 1));
};

// Saber si el boton de filtro presionado ya esta activo 
const esUnBotonInactivo = (categoria) => {
    return (categoria !== appState.botonPresionado) ;
};

// FUNCION QUE CAMBIA EL ESTADO DEL FILTRO APLICADO
const changeFilterState = (categoria) => {
    appState.activeFilter = categoria;
    return;
};

// FUNCION QUE BORRAR LAS CARDS CARGADAS
const vaciasContenedorCards = () => {
    contenedorCards.innerHTML = '';
};

// SI HAGO CLICK O TAPEO EN EL MENU TOGGLE QUITO EL OVERLAY
menuToggle.addEventListener('click',()=>{
    overlay.classList.remove('show-overlay');
});





//  ::::::::::  FUNCIONES PRINCIPALES  ::::::::::::::::





















// Click menu hamburguesa --> abre el menutoggle
menuToggleIcon.addEventListener('click',()=>{
    
    if(!appState.toggleFlag){
        overlay.classList.add('show-overlay');
        menuToggle.style.display = 'flex';
        appState.toggleFlag = true;

        CartContainer.style.visibility = 'hidden';
        CartContainer.style.transform = 'translate(150%)';
        appState.cartFlag = false;
    }else{
        overlay.classList.remove('show-overlay');
        menuToggle.style.display = 'none';
        appState.toggleFlag = false;
    }
});

// Click MENU CART --> abre o cierra el carrito
const toggleCart = () => {
    
    if (!appState.cartFlag){
        overlay.classList.add('show-overlay');
        CartContainer.style.visibility = 'visible';
        CartContainer.style.transform = 'translate(0%)';
        appState.cartFlag = true;

        menuToggle.style.display = 'none';
        appState.toggleFlag = false;
    }else{
        overlay.classList.remove('show-overlay');
        CartContainer.style.visibility = 'hidden';
        CartContainer.style.transform = 'translate(150%)';
        appState.cartFlag = false;
    }
    return;
};

// AL HACER CLICK EN UN LINK DEL MENU HAMBURGUESA LO CIERRA
const toggleMenu = () => {
    menuToggle.style.display = 'none';
        banderaToggle = false;
        return;
};




// FUNCION QUE MAPEA LOS ARTICULOS POR CATEGORIA
const mapearCategoria = (categoria) => {
    if (categoria === 'todos'){
        vaciasContenedorCards();
        renderizarArticulos(appState.articulos[0]);
        verMasBtn.classList.remove('ocultar');
        // return;
    }else{
    verMasBtn.classList.add('ocultar');
    const articulosFiltrados = articulos.filter(articulo => articulo.categoria === categoria);
    vaciasContenedorCards();
    renderizarArticulos(articulosFiltrados);
    }
    return;
}


// FUNCION QUE FILTRA POR CATEGORIAS
const mostrarCardsFiltradas = (e) => {
    const ultimoFiltro = document.getElementById(appState.activeFilter);
    const categoria = e.target.dataset.categoria;
    if (esUnBotonInactivo(categoria)){
        ultimoFiltro.classList.remove('activo');
        changeFilterState(categoria);
        e.target.classList.add('activo');
    };
    mapearCategoria(categoria);
};


// FUNCION QUE RENDERIZA 1 SOLA CARD EN LA SECCION ARTICULOS
const generarCardTemplate = (articulo) => {
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
                <button class="art-btn-add" data-name="${nombre}" 
                data-img="${imagen}" data-precio="${precio}" data-id="${id}">Agregar</button>
            </div>
        </div>
        `;
};

//FUNCION QUE RENDERIZA LOS ARTICULOS de un arreglo pasado como argumentos
const renderizarArticulos = (listaArticulos) => {
    let CardsGuardadas = listaArticulos.map(generarCardTemplate).join('');
    contenedorCards.innerHTML += CardsGuardadas;
}

//FUNCION PARA MOSTRAR MAS PRODUCTOS AL PRESIONAR VERMAS
const mostrarMasArticulos = () => {
    appState.indiceActualArticulos += 1;
    let {articulos, indiceActualArticulos} = appState;
    renderizarArticulos(articulos[indiceActualArticulos]);
    if (esUltimoIndice()){
        verMasBtn.classList.add('ocultar');
    }
};

// FUNCION QUE CIERRA EL MENU CARRITO AL SCROLLEAR
const closeOnScroll = () => {
        overlay.classList.remove('show-overlay');
        CartContainer.style.visibility = 'hidden';
        CartContainer.style.transform = 'translate(150%)';
        appState.toggleFlag = false;
        appState.cartFlag = false;
    return;
};







//  ::::::::::  FUNCION INICIALIZADORA  ::::::::::::::::
const init = () => {

    renderizarArticulos(appState.articulos[0]);

    verMasBtn.addEventListener('click', mostrarMasArticulos);

    btnCategoria.addEventListener('click',mostrarCardsFiltradas);

    menuCartIcon.addEventListener('click', toggleCart);
    
    menuToggle.addEventListener('click', toggleMenu);

    window.addEventListener('scroll', closeOnScroll);



};


init();


    /*
    
    TODO ESTO ES DE LA VERSION ANTERIOR

    // Me traigo items del carrito si tiene
    document.addEventListener('DOMContentLoaded', articulosInicio);

    // Rotas imagenes en Home
    rotadorImagenHome();

    // muestro 3 articulos iniciales al azar
    articulosIniciales();

    //escuchar boton vaciar carrito
    borrarCartBtn.addEventListener('click',borrarLS);

    //escuchar botones de sumar o restar item del carrito
    // itemCartMoreBtn.addEventListener('click',sumarItem);
    // itemCartMinusBtn.addEventListener('click',restarItem);

    */



