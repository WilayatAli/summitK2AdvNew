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

window.addEventListener("load", () => {
  const allTracks = document.querySelectorAll(".text-slide-track2");

  allTracks.forEach(track => {
    const slider = track.querySelector(".text-slide");

    if (!slider.dataset.cloned) {
      slider.innerHTML += slider.innerHTML;
      slider.dataset.cloned = "true";
    }

    // Wait until next layout frame + extra time to ensure rendering on mobile
    setTimeout(() => {
      requestAnimationFrame(() => {
        const totalWidth = slider.scrollWidth / 2;

        if (totalWidth === 0) {
          console.warn("Mobile: scrollWidth is 0. Check styles or visibility.");
          return;
        }

        track.style.setProperty("--scroll-width", `${totalWidth}px`);

        const speed = 100;
        const duration = totalWidth / speed;

        track.style.animation = `scrollText linear ${duration}s infinite`;
      });
    }, 50); // You can adjust this delay if needed
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
