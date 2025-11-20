// Conectarme con la etiqueta que tiene la clase nav-container
var navbar = document.querySelector('.nav_container')

// Cuando haga scroll
window.onscroll = () => {
    // Si hiciste scroll pasando los 20 pixeles desde el top de la pantalla
    if (window.scrollY > 20) {
        // Agregale a la etiqueta con la que te conectaste la clase nav-active
        navbar.classList.add('nav_active');
    } else {
        // Y sino, o sea, si estas menos de 20 pixeles, quitale la clase nav-active
        navbar.classList.remove('nav_active');
    }
};