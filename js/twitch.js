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
    twitchEmbedContainer.style.zIndex = 9998;
  } else {
    videoEmbed.style.display = 'none';
    twitchEmbedContainer.classList.add('is-closed');
    closeButton.innerHTML = '<i class="fas fa-play"></i>';
    liveButton.style.display = 'flex';
    twitchEmbedContainer.style.zIndex = -1;
    liveButton.style.zIndex = 999;
  }
});

liveButton.addEventListener('click', () => {
  videoEmbed.style.display = 'block';
  twitchEmbedContainer.classList.remove('is-closed');
  closeButton.innerHTML = '<i class="fas fa-times"></i>';
  liveButton.style.display = 'none';
  twitchEmbedContainer.style.zIndex = 9998;
});
