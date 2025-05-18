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
