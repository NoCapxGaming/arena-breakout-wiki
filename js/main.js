const toggleButton = document.getElementById('toggle');
const burger = document.querySelector('.burger');
const navbarList = document.querySelector('.navbar-list');

burger.addEventListener('click', () => {
  navbarList.classList.toggle('active');
  burger.classList.toggle('active');
});

// Initialize variables
let isDragging = false;
let startX, startY;
let scrollLeft, scrollTop;

// Add event listeners
document.addEventListener('mousedown', e => {
  const mapImg = document.querySelector('.map-container img');
  if (e.target === mapImg) {
    isDragging = true;
    startX = e.clientX - mapImg.offsetLeft;
    startY = e.clientY - mapImg.offsetTop;
    scrollLeft = mapImg.scrollLeft;
    scrollTop = mapImg.scrollTop;
    mapImg.style.cursor = 'grabbing';
  }
});

document.addEventListener('mousemove', e => {
  const mapImg = document.querySelector('.map-container img');
  if (!isDragging) return;
  e.preventDefault();
  const x = e.clientX - mapImg.offsetLeft;
  const y = e.clientY - mapImg.offsetTop;
  const walkX = x - startX;
  const walkY = y - startY;
  mapImg.scrollLeft = scrollLeft - walkX;
  mapImg.scrollTop = scrollTop - walkY;
});

document.addEventListener('mouseup', () => {
  const mapImg = document.querySelector('.map-container img');
  isDragging = false;
  mapImg.style.cursor = 'grab';
});
