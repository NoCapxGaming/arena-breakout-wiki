
// reusableFooter.js

const footerContainer = document.getElementById('footer-container');

const footer = document.createElement('footer');
footer.className = 'footer';

const footerContent = document.createElement('div');
footerContent.className = 'footer-content';

const footerLogo = document.createElement('div');
footerLogo.className = 'footer-logo';
footerLogo.innerHTML = '<img src="https://www.arenabreakout.wiki/images/logo.png" alt="Logo">';

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
