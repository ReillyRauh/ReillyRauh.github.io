const menuButton = document.getElementById('menu');
const navA = document.getElementsByTagName('nav a');

function showNav() {
        navA.style.display = 'block';
        menuButton.removeEventListener('click', showNav);
        menuButton.addEventListener('click', closeNav);
}

function closeNav() {
    navA.style.display = 'none';
    menuButton.removeEventListener('click', closeNav);
    menuButton.addEventListener('click', showNav);
}

menuButton.addEventListener('click', showNav);