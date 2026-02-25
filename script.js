// FAQ Accordion
document.querySelectorAll('.faq-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const ans = btn.nextElementSibling;
    const isOpen = ans.classList.contains('show');
    document.querySelectorAll('.faq-ans').forEach(a => a.classList.remove('show'));
    document.querySelectorAll('.faq-btn').forEach(b => b.classList.remove('open'));
    if (!isOpen) {
      ans.classList.add('show');
      btn.classList.add('open');
    }
  });
});

// Scroll Animations (Intersection Observer)
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, 80 * (entry.target.dataset.delay || 0));
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.animate').forEach((el, i) => {
  el.dataset.delay = i % 4;
  observer.observe(el);
});

// Smooth scroll for any internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});