document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navContainer = document.querySelector('.nav-container');
    const links = navMenu ? navMenu.querySelectorAll('a') : [];

    if (!hamburger || !navMenu) return;

    const openMenu = () => {
        navMenu.classList.add('active');
        hamburger.classList.add('active');
        hamburger.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
    };

    const closeMenu = () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    };

    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        navMenu.classList.contains('active') ? closeMenu() : openMenu();
    });

    links.forEach(link => link.addEventListener('click', () => closeMenu()));

    document.addEventListener('click', (e) => {
        if (!navContainer.contains(e.target) && navMenu.classList.contains('active')) {
            closeMenu();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) closeMenu();
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth >= 769) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }
    });
});