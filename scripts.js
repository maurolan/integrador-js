
const menuToggleIcon = document.getElementById('menu-toggle-icon');
const menuToggle = document.getElementById('menu-toggle');


// Click menu hamburguesa --> abre el menutoggle
menuToggleIcon.addEventListener('click',()=>{
    menuToggle.style.visibility = 'visible';
});

menuToggle.addEventListener('click',()=>{
menuToggle.style.visibility = 'hidden';
});

