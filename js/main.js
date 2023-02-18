const toggleButton = document.getElementById('toggle');
const burger = document.querySelector('.burger');
const navbarList = document.querySelector('.navbar-list');

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
