//  ::::::::::  CAPTURAS DE ELEMENTOS HTML  ::::::::::::::::

// CAPTURO CONTENEDOR IMAGEN HERO
const heroImagen = document.getElementById('hero-img');

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

// captura items carrito
const cartItemsContainer = document.getElementById('cart-items-container');

// BOTONES DE CATEGORIAS
const btnCategoria = document.getElementById('articulos-categories');

// OVERLAY
const overlay = document.getElementById('overlay');

// TOTAL DEL CARRITO
const cartTotalPrice = document.getElementById('cart-total-price');

// MENSAJE DE ARTICULO AGREGADO AL CARRITO
const articuloAgregadoMsg = document.getElementById('cart-added-art'); 

// BOTON VACIAR CARRITO
const borrarCartBtn = document.getElementById('clear-cart-btn');

// BOTON COMPRAR CARRITO
const btnComprar = document.getElementById('buy-cart-btn'); 

// BOTON VACIAR CARRITO
const btnVaciar = document.getElementById('clear-cart-btn');

// BURBUJA CARRITO CONTADOR
const cartCounter = document.getElementById('cart-counter');


// CAMPOS FORMULARIO
const registerform = document.getElementById('contacto-form');
const nameInput = document.getElementById('nombre');
const lastNameInput = document.getElementById('apellido');
const emailInput = document.getElementById('email');
const telInput = document.getElementById('telefono');
const registerBtn = document.getElementById('contacto-btn');



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
const vaciarContenedorCards = () => {
    contenedorCards.innerHTML = '';
};

// SI HAGO CLICK O TAPEO EN EL MENU TOGGLE QUITO EL OVERLAY
menuToggle.addEventListener('click',()=>{
    overlay.classList.remove('show-overlay');
});



// FUNCIONES FORMULARIO

//AUXILIARES
const isEmpty = (input) => {
    return input.value.trim().length;
};

const showError = (input, message) => {
 const formField = input.parentElement;
 input.style.border = 'red 1px solid';
 formField.classList.remove('form-field-sucess');
 const error = formField.querySelector('small');
 error.style.display = 'block';
 error.innerText = message;
};

const isBetween = (input, min, max) => {
    return input.value.length >= min && input.value.length <= max;
};


const showSuccess = (input) => {
    const formField = input.parentElement;
    input.style.border = 'green 1px solid';
    const error = formField.querySelector('small');
    error.innerText = '';
};

// PRINCIPALES
// FUNCION QUE VALIDA EL FORMULARIO
const validarForm = (e) => {
    e.preventDefault();

    


};

const validateNameLast = (input) => {
    let valid = false;
    const minChar = 3;
    const maxChar = 25;

    if(!isEmpty(input)){
        showError(input, 'Campo obligatorio');
        return;
    } 

    if(!isBetween(input, minChar, maxChar)){
        showError(input, `Campo debe ser entre ${minChar} y ${maxChar} caracteres`);
        return;
    }
    
    showSuccess(input);
    valid = true;
    return valid;

};









//  ::::::::::  FUNCIONES PRINCIPALES  ::::::::::::::::


// FUNCION QUE ROTA LAS IMAGENES CADA CIERTO TIEMPO EN HOME
const rotadorImagenHome = () => {
    let imagen = 1;
        setInterval(() => {
            heroImagen.setAttribute('src',`./assets/img/homeimg${imagen}.jpg`)
            imagen++;
            if (imagen == 16){
                imagen = 1 ;
            } 
        }, 4000);
    }; 


const mostrarBotonesCart = () => {
    btnComprar.classList.remove('ocultar');
    btnVaciar.classList.remove('ocultar');
    cartTotalPrice.classList.remove('ocultar');
};

const ocultarBotonesCart = () => {
    btnComprar.classList.add('ocultar');
    btnVaciar.classList.add('ocultar');
    cartTotalPrice.classList.add('ocultar');
};


//FUNCION QUE BORRA EL LOCAL STORAGE AL VACIAR EL CARRITO
const borrarLS = () => {
    const resp = confirm('Seguro que desea vaciar el carrito?');
    if (resp) localStorage.clear();
    cartItemsContainer.innerHTML = '<h3 class="no-items"> No hay artículos seleccionados</h3>';
    ocultarBotonesCart();
    agregarArticuloBurbuja(0);
    appState.cartState = false;
    location.reload();
    return;
};


const comprarCart = () => {
    localStorage.clear();
    cartItemsContainer.innerHTML = '<h3 class="no-items"> No hay artículos seleccionados</h3>';
    ocultarBotonesCart();
    agregarArticuloBurbuja(0);
    appState.cartState = false;
    location.reload();
    return;
};


// Click menu hamburguesa --> ABRE EL MENUTOGGLE
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


// Click MENU CART --> ABRE O CIERRA EL CARRITO
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
        vaciarContenedorCards();
        renderizarArticulos(appState.articulos[0]);
        verMasBtn.classList.remove('ocultar');
        // return;
    }else{
    verMasBtn.classList.add('ocultar');
    const articulosFiltrados = articulos.filter(articulo => articulo.categoria === categoria);
    vaciarContenedorCards();
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


//FUNCION PARA MOSTRAR MAS PRODUCTOS AL PRESIONAR VER MAS
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


// FUNCION QUE CIERRA EL MENU CARRITO L CLICKEAR EN LA ZONA OVERLAY
const closeOnOverlayClick = () => {
    overlay.classList.remove('show-overlay');
    CartContainer.style.visibility = 'hidden';
    CartContainer.style.transform = 'translate(150%)';
    appState.toggleFlag = false;
    appState.cartFlag = false;
    return;
};



//// FUNCION QUE RENDERIZA EL CARRITO

    // FUNCION QUE TRAE Al CARRITO VACIO O LO QUE HAYA EN LS
let cart = JSON.parse(localStorage.getItem("cart")) || [];


    // FUNCION QUE GUARDA EN LS EL ARTICULO AGREGADO AL CARRITO
const saveCart = () => {
    localStorage.setItem("cart", JSON.stringify(cart));
};


    // FUNCION QUE GENERA LA 1 CARD DE UN ARTICULO EN EL CARRITO
const generarCardCarrito = (cartProduct) => {
    const {id, name, precio, img, cantidad} = cartProduct;     
    return `<div class="item-cart">
                <img class="item-cart-img" src="${img}" alt="${name}" />
                <div class="item-cart-info">
                    <h3 class="item-cart-title">${name}</h3>
                    <p class="item-cart-price">$ ${precio}</p>
                </div>
                <div class="item-cart-toggle">
                    <p class="item-cart-qty">x ${cantidad}</p>
                </div>
            </div>`; 
            //<p id="cart-more-btn" class="item-cart-more-btn" data-id="${id}">+</p>
            //<p class="item-cart-minus-btn">-</p>
};


    // FUNCION QUE CALCULA EL TOTAL DEL CARRITO
const calcularTotalCart = () => {
    return cart.reduce((sumador, actual) => sumador + Number(actual.precio) * actual.cantidad, 0);
};


// FUNCION QUE MUESTRA EL TOTAL DE LA COMPRA
const showCartTotal = () => {
    cartTotalPrice.innerText = `$ ${calcularTotalCart().toFixed(2)}`;
};


// FUNCION QUE SUMA EN LA BURBUJA DEL CARRITO
const agregarArticuloBurbuja = (cantidad) => {
    cartCounter.innerText = cantidad;
};


// FUNCION QUE OBTIENE EL ID DEL PRODUCTO Y CREA EL PRODUCTO EN EL CARRITO O CAMBIA LA CANTIDAD
const agregarArticulo = (e) => {    
    if (!e.target.classList.contains('art-btn-add')){return};
    
    //DESESTRUCTURAR LOS DATOS QUE NECESITO
    const producto = createProductData(e.target.dataset);
    
    // VALIDA SI EL ARTICULO YA EXISTE
    if (existeArticuloEnCarrito(producto)){
        agregarUnidadAlProducto(producto);
        
    // MUESTRA UN MENSAJE QUE SE AGREGO UN ARTICULO
    mostrarMsgArticuloAgregado('Se agregó una unidad del artículo al carrito');
    }else{
        // CREAR ARTICULO Y MOSTRAR MENSAJE
        crearArticuloCarrito(producto);
        mostrarMsgArticuloAgregado('El producto se ha agregado al carrito');
    };
    updateCartState();
};


// FUNCION DESESTRUCTURA EL ARTICULO AGREGADO 
const createProductData = (producto) => {
    const {id, name, precio, img} = producto;
    return {id, name, precio, img};
};


// funcion que verifica si el producto ya fue agregado al carrito
const existeArticuloEnCarrito = (producto) => {
    return cart.find((item) => item.id === producto.id);
};


// Funcion que me permite agregar una unidad al producto que ya tengo en el cart
const agregarUnidadAlProducto = (producto) => {
    cart = cart.map((cartProduct) => cartProduct.id === producto.id 
        ? {...cartProduct, cantidad: cartProduct.cantidad + 1 } 
        : cartProduct
    );
};


// FUNCION QUE MUESTRA UN MENSAJE DE ARTICULO AGREGADO AL CARRITO
const mostrarMsgArticuloAgregado = (msg) => {
    // articuloAgregadoMsg.classList.add('active-modal');
    articuloAgregadoMsg.classList.add('active-modal');
    articuloAgregadoMsg.textContent = msg;
    setTimeout( () => {
        articuloAgregadoMsg.classList.remove('active-modal');
    }, 1500);
    return;
};


// FUNCION QUE RENDERIZA LOS PRODUCTOS DEL CARRITO Y SI NO HAY PRODUCTOS ENVIA UN MENSAJE"
const renderCart = () => {
    if (!cart.length){
        ocultarBotonesCart();
        cartItemsContainer.innerHTML = '<h3 class="no-items"> No hay artículos seleccionados</h3>';
        appState.cartState = false;
        return;
    }
    cartItemsContainer.innerHTML = cart.map(generarCardCarrito).join('');
    mostrarBotonesCart();
    agregarArticuloBurbuja(cart.length);
    appState.cartState = true;
    return;
};


// creamos un objeto con la info del producto que queremos crear
const crearArticuloCarrito = (producto) => {
    cart = [...cart, {...producto, cantidad: 1}];
};


// FUNCIO PARA ACTUALIZAR EL CARRITO
const updateCartState = () => {
    // guardar carrito en Ls
    saveCart();

    //renderizo el carrito
    renderCart();

    // mostrar el total
    showCartTotal();

};


const comprarArticulos = () => {
    alert('Se ha enviado la orden de compra');
    comprarCart();
};




//  ::::::::::  FUNCION INICIALIZADORA  ::::::::::::::::
const init = () => {

    document.addEventListener('DOMContentLoaded', rotadorImagenHome);

    renderizarArticulos(appState.articulos[0]);

    verMasBtn.addEventListener('click', mostrarMasArticulos);

    btnCategoria.addEventListener('click',mostrarCardsFiltradas);

    menuCartIcon.addEventListener('click', toggleCart);
    
    menuToggle.addEventListener('click', toggleMenu);

    window.addEventListener('scroll', closeOnScroll);

    overlay.addEventListener('click', closeOnOverlayClick);

    document.addEventListener('DOMContentLoaded', renderCart);

    document.addEventListener('DOMContentLoaded', showCartTotal);

    contenedorCards.addEventListener('click',agregarArticulo);

    borrarCartBtn.addEventListener('click', borrarLS);

    btnComprar.addEventListener('click', comprarArticulos);

    // Form
   registerform.addEventListener('submit', validarForm);

   nameInput.addEventListener('blur', () => validateNameLast(nameInput));

   lastNameInput.addEventListener('blur', () => validateNameLast(lastNameInput));



};


init();