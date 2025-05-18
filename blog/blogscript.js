const burgerMenuBtn = document.querySelector('.burger-menu-btn');
const sideMenu = document.querySelector('.side-menu-wrapper');
const overlay = document.querySelector('.overlay-bg');
const closeBtn = document.querySelector('.arrow-cross');
function openMenu() {
    sideMenu.classList.add('active'); 
    overlay.classList.add('active'); 
}
function closeMenu() {
    sideMenu.classList.remove('active'); 
    overlay.classList.remove('active'); 
}
burgerMenuBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.has-dropdown').forEach(item => {
    item.addEventListener('click', () => {
      const menu = item.nextElementSibling;
      const arrow = item.querySelector('.dropdown-arrow');
      document.querySelectorAll('.dropdown-menu-list-sm').forEach(drop => {
        if (drop !== menu) drop.classList.remove('open');
      });
      document.querySelectorAll('.dropdown-arrow').forEach(a => {
        if (a !== arrow) a.classList.remove('rotate');
      });
      menu.classList.toggle('open');
      arrow.classList.toggle('rotate');
    });
  });
});

const scrollTopBtn = document.querySelector('.scroll-top');
const heroSection = document.querySelector('.hero-section');
window.addEventListener('scroll', function () {
    if (window.scrollY > 200) { 
        scrollTopBtn.style.display = 'block';
    } else { 
        scrollTopBtn.style.display = 'none';
    }
});
scrollTopBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
