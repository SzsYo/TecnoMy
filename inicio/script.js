/* Script interactivo para TecnoMy */

// Mostrar/ocultar navegación fija al hacer scroll
const scrollNav = document.getElementById('scrollNav');
const hero = document.getElementById('hero');

window.addEventListener('scroll', () => {
  if (window.scrollY > hero.offsetHeight * 0.3) {
    scrollNav.classList.add('scroll-nav--visible');
  } else {
    scrollNav.classList.remove('scroll-nav--visible');
  }
});

// Animar elementos cuando entran en la vista
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observar elementos animables
document.querySelectorAll('.feature-card, .card').forEach(element => {
  element.style.opacity = '0';
  element.style.transform = 'translateY(20px)';
  element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(element);
});

// Manejo suave de navegación interna
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    if (href !== '#' && document.querySelector(href)) {
      e.preventDefault();
      const target = document.querySelector(href);
      target.scrollIntoView({ behavior: 'smooth' });
      scrollNav.classList.remove('scroll-nav--visible');
    }
  });
});

// Efecto de carga inicial
window.addEventListener('load', () => {
  document.body.style.opacity = '1';
});
