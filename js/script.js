document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('site-nav');
  const toggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('nav-menu');
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.nav-menu a[data-section]');
  const closeMenu = () => { menu.classList.remove('is-open'); toggle.setAttribute('aria-expanded', 'false'); document.body.style.overflow = ''; };
  toggle.addEventListener('click', () => { const open = menu.classList.toggle('is-open'); toggle.setAttribute('aria-expanded', String(open)); document.body.style.overflow = open ? 'hidden' : ''; });
  navLinks.forEach((link) => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeMenu(); });
  const revealObserver = new IntersectionObserver((entries, observer) => { entries.forEach((entry) => { if (!entry.isIntersecting) return; entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }); }, { threshold: 0.12, rootMargin: '0px 0px -40px' });
  document.querySelectorAll('.reveal').forEach((element, index) => { element.style.transitionDelay = `${Math.min(index % 5, 4) * 70}ms`; revealObserver.observe(element); });
  const spyObserver = new IntersectionObserver((entries) => { entries.forEach((entry) => { if (!entry.isIntersecting) return; navLinks.forEach((link) => link.classList.toggle('is-active', link.dataset.section === entry.target.id)); }); }, { rootMargin: '-45% 0px -45% 0px' });
  sections.forEach((section) => spyObserver.observe(section));
  const updateNav = () => nav.classList.toggle('is-scrolled', window.scrollY > 30);
  updateNav(); window.addEventListener('scroll', updateNav, { passive: true });
  const rows = document.querySelectorAll('.marquee-row');
  const moveMarquees = () => { const amount = (window.scrollY * 0.3) % 900; rows.forEach((row, index) => { const direction = index === 0 ? 1 : -1; row.querySelector('.marquee-track').style.transform = `translate3d(${direction * amount}px, 0, 0)`; }); };
  window.addEventListener('scroll', () => requestAnimationFrame(moveMarquees), { passive: true });
  document.querySelectorAll('.magnet').forEach((element) => { element.addEventListener('pointermove', (event) => { const bounds = element.getBoundingClientRect(); const x = (event.clientX - bounds.left - bounds.width / 2) / 22; const y = (event.clientY - bounds.top - bounds.height / 2) / 22; element.style.transform = `translate3d(calc(-50% + ${x}px), ${y}px, 0)`; }); element.addEventListener('pointerleave', () => { element.style.transform = ''; }); });
  const animatedCopy = document.querySelector('[data-animated-copy]');
  if (animatedCopy) { const text = animatedCopy.dataset.animatedCopy; animatedCopy.textContent = '';[...text].forEach((character) => { const span = document.createElement('span'); span.textContent = character; animatedCopy.appendChild(span); }); const updateText = () => { const bounds = animatedCopy.getBoundingClientRect(); const progress = Math.min(1, Math.max(0, (window.innerHeight * 0.8 - bounds.top) / (bounds.height + window.innerHeight * 0.6))); animatedCopy.querySelectorAll('span').forEach((span, index, all) => { const start = index / all.length; span.style.opacity = String(Math.min(1, Math.max(.2, .2 + (progress - start) * all.length * .035))); }); }; window.addEventListener('scroll', () => requestAnimationFrame(updateText), { passive: true }); updateText(); }
  const cards = document.querySelectorAll('.project-card');
  const updateCards = () => { cards.forEach((card, index) => { const distance = Math.max(0, -card.getBoundingClientRect().top + 160); card.style.transform = `scale(${1 - Math.min(.08, distance / 2600 + index * .02)})`; }); };
  window.addEventListener('scroll', () => requestAnimationFrame(updateCards), { passive: true }); updateCards(); document.getElementById('ano-atual').textContent = new Date().getFullYear();
});
