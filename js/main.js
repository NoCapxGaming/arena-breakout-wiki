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
homeItem.innerHTML = '<a href="https://www.arenabreakout.wiki/index.html">Home</a>';

const directoryItem = document.createElement('li');
directoryItem.className = 'navbar-item';
directoryItem.innerHTML = '<a href="https://www.arenabreakout.wiki/content/directory/directory.html">Directory</a>';

const aboutItem = document.createElement('li');
aboutItem.className = 'navbar-item';
aboutItem.innerHTML = '<a href="https://www.arenabreakout.wiki/content/documents/about.html">About</a>';

navbarList.append(homeItem, directoryItem, aboutItem);

navbar.append(toggleButton, navbarLogo, navbarList);
navbarContainer.append(navbar);

const burger = document.querySelector('.burger');

burger.addEventListener('click', () => {
  navbarList.classList.toggle('active');
  burger.classList.toggle('active');
});



const closeButton = document.querySelector('.close-button');
const liveButton = document.querySelector('.live-button');
const videoEmbed = document.querySelector('.sticky-twitch-embed iframe');
const twitchEmbedContainer = document.querySelector('.sticky-twitch-embed');

// show the twitch embed with the close button and hide the live button by default
videoEmbed.style.display = 'block';
twitchEmbedContainer.classList.remove('is-closed');
liveButton.style.display = 'none';

closeButton.addEventListener('click', () => {
  if (videoEmbed.style.display === 'none') {
    videoEmbed.style.display = 'block';
    twitchEmbedContainer.classList.remove('is-closed');
    closeButton.innerHTML = '<i class="fas fa-times"></i>';
    liveButton.style.display = 'none';
  } else {
    videoEmbed.style.display = 'none';
    twitchEmbedContainer.classList.add('is-closed');
    closeButton.innerHTML = '<i class="fas fa-play"></i>';
    liveButton.style.display = 'flex';
  }
});

liveButton.addEventListener('click', () => {
  videoEmbed.style.display = 'block';
  twitchEmbedContainer.classList.remove('is-closed');
  closeButton.innerHTML = '<i class="fas fa-times"></i>';
  liveButton.style.display = 'none';
});

// reusableFooter.js

const footerContainer = document.getElementById('footer-container');

const footer = document.createElement('footer');
footer.className = 'footer';

const footerContent = document.createElement('div');
footerContent.className = 'footer-content';

const footerLogo = document.createElement('div');
footerLogo.className = 'footer-logo';
footerLogo.innerHTML = '<img src="../../images/logo.png" alt="Logo">';

const footerText = document.createElement('p');
footerText.textContent = '© 2023 Arena Breakout WIKI. NoCapxGaming. All Rights Reserved.';

const footerSocialIcons = document.createElement('div');
footerSocialIcons.className = 'footer-social-icons';
footerSocialIcons.innerHTML = `
  <a href="https://www.facebook.com/NocapxGaming"><i class="fab fa-facebook"></i></a>
  <a href="https://www.instagram.com/nocapxgaming/"><i class="fab fa-instagram"></i></a>
  <a href="https://twitter.com/NoCapxGaming"><i class="fab fa-twitter"></i></a>
  <a href="https://www.youtube.com/channel/UCK_704Q4iCZ9acod6XQlu5A"><i class="fab fa-youtube"></i></a>
`;

const footerList = document.createElement('ul');
footerList.className = 'footer-list';

const contactUs = document.createElement('li');
contactUs.className = 'footer-item';
contactUs.innerHTML = '<a href="#">Contactanos</a>';

const termsOfService = document.createElement('li');
termsOfService.className = 'footer-item';
termsOfService.innerHTML = '<a href="#">Terminos de Servicio</a>';

const privacyPolicy = document.createElement('li');
privacyPolicy.className = 'footer-item';
privacyPolicy.innerHTML = '<a href="#">Privacy Policy</a>';

footerList.append(contactUs, termsOfService, privacyPolicy);

footerContent.append(footerLogo, footerText, footerSocialIcons, footerList);
footer.append(footerContent);
footerContainer.append(footer);
