
// CAPTURA DE ELEMENTOS
const menuToggleIcon = document.getElementById('menu-toggle-icon');
const menuToggle = document.getElementById('menu-toggle');






// // Click menu hamburguesa --> abre el menutoggle
menuToggleIcon.addEventListener('click',()=>{
    menuToggle.style.display = 'flex';
});

// // Click menu hamburguesa --> cierra el menutoggle
menuToggle.addEventListener('click',()=>{
menuToggle.style.display = 'none';
});
