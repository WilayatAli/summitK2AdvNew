const sliderTrack = document.getElementById('sliderTrack');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const fractionCounter = document.getElementById('fractionCounter');

let currentIndex = 0;
let autoSlideInterval;
let slideWidth;
let visibleSlides = 1;
let totalSlides;
let previousSlidesCount = 0;
let previousVisibleSlides = 1;

function cloneSlides() {
  const slides = Array.from(sliderTrack.children).filter(slide => !slide.dataset.clone);
  visibleSlides = window.innerWidth <= 768 ? 1 : 4;
  totalSlides = slides.length;

  if (visibleSlides !== previousVisibleSlides || totalSlides !== previousSlidesCount) {
    const clonesBefore = slides.slice(-visibleSlides).map(slide => {
      const clone = slide.cloneNode(true);
      clone.dataset.clone = "true";
      return clone;
    });

    const clonesAfter = slides.slice(0, visibleSlides).map(slide => {
      const clone = slide.cloneNode(true);
      clone.dataset.clone = "true";
      return clone;
    });

    sliderTrack.innerHTML = '';
    clonesBefore.forEach(clone => sliderTrack.appendChild(clone));
    slides.forEach(slide => sliderTrack.appendChild(slide));
    clonesAfter.forEach(clone => sliderTrack.appendChild(clone));

    previousSlidesCount = totalSlides;
    previousVisibleSlides = visibleSlides;
  }

  currentIndex = visibleSlides;
}

function updatePosition(animate = true) {
  slideWidth = sliderTrack.querySelector('.slide').offsetWidth;
  sliderTrack.style.transition = animate ? 'transform 0.5s ease-in-out' : 'none';
  sliderTrack.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  updateBorders();
  updateFraction();
}
function updateBorders() {
  const slides = sliderTrack.querySelectorAll('.slide img');
  slides.forEach(img => img.style.borderRight = window.innerWidth <= 768 ? 'none' : '3px solid #fff');

  if (window.innerWidth > 768) {
    const allSlides = sliderTrack.querySelectorAll('.slide');
    const lastVisible = allSlides[currentIndex + visibleSlides - 1];
    if (lastVisible) {
      const img = lastVisible.querySelector('img');
      if (img) img.style.borderRight = 'none';
    }
  }
}
function updateFraction() {
    const maxIndex = Math.ceil(totalSlides / visibleSlides);
    const slideNumber = Math.floor((currentIndex - visibleSlides) / visibleSlides) + 1;
    fractionCounter.innerHTML = `${Math.max(1, slideNumber)}/<span style="color: rgb(240, 240, 240)">${maxIndex}</span>`;
  }
  

function nextSlide() {
  currentIndex++;
  updatePosition();
  const total = totalSlides + visibleSlides;
  setTimeout(() => {
    if (currentIndex >= total) {
      currentIndex = visibleSlides;
      updatePosition(false);
    }
  }, 500);
}

function prevSlide() {
  currentIndex--;
  updatePosition();
  if (currentIndex < visibleSlides) {
    setTimeout(() => {
      currentIndex = totalSlides + visibleSlides - 1;
      updatePosition(false);
    }, 500);
  }
}

function startAutoSlide() {
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(nextSlide, 3000);
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

window.addEventListener('resize', () => {
  cloneSlides();
  updatePosition(false);
});

window.addEventListener('load', () => {
  cloneSlides();
  updatePosition(false);
  startAutoSlide();
});


const headers = document.querySelectorAll('.accordion-header');

headers.forEach(header => {
    header.addEventListener('click', () => {
      const body = header.nextElementSibling;
      const isOpen = body.classList.contains('open');
      document.querySelectorAll('.accordion-body').forEach(b => {
        b.classList.remove('open');
      });
      document.querySelectorAll('.accordion-header').forEach(h => {
        h.classList.remove('active');
      });
      if (!isOpen) {
        header.classList.add('active');
        body.classList.add('open');
      }
    });
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

const tabHeader = document.getElementById('tabHeader');
const tabWrapper = document.getElementById('tabWrapper');
const tabHeight = tabHeader.offsetHeight;
const tabOffsetTop = tabHeader.offsetTop;

window.addEventListener('scroll', () => {
    if (window.scrollY >= tabOffsetTop) {
      tabHeader.classList.add('fixed');
      tabWrapper.style.paddingTop = tabHeight + 'px';
    } else {
      tabHeader.classList.remove('fixed');
      tabWrapper.style.paddingTop = '0';
    }
});
const tabLinks = document.querySelectorAll('.tab-link');
tabLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    tabLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

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

document.querySelectorAll('.tab-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const headerOffset = 120;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});

const scrollBtn = document.querySelector('.scroll-top');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      scrollBtn.style.display = 'block';
    } else {
      scrollBtn.style.display = 'none';
    }
});
scrollBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
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



