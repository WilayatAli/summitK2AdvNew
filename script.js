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

var od1 = new Odometer({
    el: document.getElementById('odometer1'),
    value: 0,
    format: '(,ddd)',
    duration: 0,
    theme: 'default',
  });
  
  var od2 = new Odometer({
    el: document.getElementById('odometer2'),
    value: 0,
    format: '(,ddd)',
    duration: 2000,
  });
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          od1.update(0); 
        }, 100);
        setTimeout(() => {
          od2.update(5); 
        }, 1000);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.5 
  });

  
observer.observe(document.getElementById('odometer1'));
observer.observe(document.getElementById('odometer2'));
const serviceWrappers = document.querySelectorAll('.service-title-wrapper');

serviceWrappers.forEach(serviceWrapper => {
    const hoverImage = serviceWrapper.querySelector('.hover-image');
    serviceWrapper.addEventListener('mousemove', (e) => {
        const wrapperWidth = serviceWrapper.offsetWidth;
        const wrapperHeight = serviceWrapper.offsetHeight;
        const offsetX = e.offsetX;
        const offsetY = e.offsetY;
        const moveX = (offsetX / wrapperWidth - 0.5) * 550; 
        const moveY = (offsetY / wrapperHeight - 0.5) * 100; 
        hoverImage.style.transform = `translate(${moveX + 300}px, ${moveY + 10}px)`;
    });
});
const words = ["development", "composition", "explanation"];
let index = 0;

function changeWord() {
    const span = document.getElementById('dynamic-word');
    span.classList.remove('dynamic-words');
    setTimeout(() => {
        span.classList.add('dynamic-words');
    }, 20);
    span.textContent = words[index];
    index = (index + 1) % words.length; 
}
setInterval(changeWord, 3000); 
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

document.addEventListener('DOMContentLoaded', function () {
    const questions = document.querySelectorAll('.faq-question');

    questions.forEach(button => {
      button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        document.querySelectorAll('.faq-answer.open').forEach(openAns => {
          if (openAns !== answer) {
            openAns.classList.remove('open');
            openAns.previousElementSibling.classList.remove('active');
          }
        });
        answer.classList.toggle('open');
        button.classList.toggle('active');
      });
    });
  });

// text-slider
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


// document.addEventListener('contextmenu', function(e) {
//     e.preventDefault();
//     alert('Content is protected. Right-click is disabled.');
//   });
//   document.addEventListener('keydown', function(e) {
//     if (
//       e.key === 'F12' ||
//       (e.ctrlKey && e.shiftKey && ['I', 'C', 'J'].includes(e.key.toUpperCase())) ||
//       (e.ctrlKey && e.key.toUpperCase() === 'U')
//     ) {
//       e.preventDefault();
//       alert('Content is protected.');
//     }
// });



