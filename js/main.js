//reusable navigation bar through the website

const navbarContainer = document.getElementById('navbar-container');

const navbar = document.createElement('nav');
navbar.className = 'navbar';

const toggleButton = document.createElement('div');
toggleButton.className = 'navbar-toggle burger';
toggleButton.id = 'toggle';
toggleButton.innerHTML = '<i class="fas fa-bars"></i>';

const navbarLogo = document.createElement('div');
navbarLogo.className = 'navbar-logo';
navbarLogo.innerHTML = '<img id="logo-img" src="https://www.arenabreakout.wiki/images/logo.png" alt="Logo">';

const navbarList = document.createElement('ul');
navbarList.className = 'navbar-list';

const homeItem = document.createElement('li');
homeItem.className = 'navbar-item';
homeItem.innerHTML = '<a href="https://www.arenabreakout.wiki/index.html">Inicio</a>';

const directoryItem = document.createElement('li');
directoryItem.className = 'navbar-item';
directoryItem.innerHTML = '<a href="https://www.arenabreakout.wiki/content/directory/directory.html">Directorio</a>';

const galleryItem = document.createElement('li');
galleryItem.className = 'navbar-item';
galleryItem.innerHTML = '<a href="https://www.arenabreakout.wiki/content/directory/gallery.html">Galeria</a>';

const aboutItem = document.createElement('li');
aboutItem.className = 'navbar-item';
aboutItem.innerHTML = '<a href="https://www.arenabreakout.wiki/content/documents/about.html">Sobre</a>';

navbarList.append(homeItem, directoryItem, galleryItem, aboutItem);

navbar.append(toggleButton, navbarLogo, navbarList);
navbarContainer.append(navbar);

const burger = document.querySelector('.burger');

burger.addEventListener('click', () => {
  navbarList.classList.toggle('active');
  burger.classList.toggle('active');
});
