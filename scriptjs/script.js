 const menu = document.querySelector('#mobile-menu');
    const nav = document.querySelector('.nav-bar');

    menu.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    // Cerrar el menú al hacer clic en un enlace
    document.querySelectorAll('.nav-bar a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
        });
    });