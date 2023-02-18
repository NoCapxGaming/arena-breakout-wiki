const toggleButton = document.getElementById('toggle');
const burger = document.querySelector('.burger');
const navbarList = document.querySelector('.navbar-list');

burger.addEventListener('click', () => {
  navbarList.classList.toggle('active');
  burger.classList.toggle('active');
});
