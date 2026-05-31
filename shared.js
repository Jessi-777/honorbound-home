/* shared.js - Honor Bound Barber Supply */

const IG_HANDLE = 'honorbound_barbersupply';
const IG_URL = 'https://www.instagram.com/honorbound_barbersupply';

const IG_SVG = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>`;

// ── NAV ──
function buildNav(activePage) {
  const pages = [
    { href: 'index.html', label: 'Home' },
    { href: 'about.html', label: 'About' },
    { href: 'shop.html', label: 'Shop' },
    { href: 'blog.html', label: 'News & Drops' },
    { href: 'index.html#request', label: 'Request Supply' },
    { href: 'index.html#contact', label: 'Contact' },
  ];

  const links = pages.map(p =>
    `<li><a href="${p.href}" class="${p.label === activePage ? 'active' : ''}">${p.label}</a></li>`
  ).join('');

  document.getElementById('nav-placeholder').innerHTML = `
  <nav>
    <a class="nav-logo" href="index.html">
      <img class="nav-logo-img" src="honor_bound_logo.png" alt="Honor Bound logo" onerror="this.style.display='none'">
      <div class="nav-brand">
        <span class="nav-brand-main">Honor Bound</span>
        <span class="nav-brand-sub">Barber Supply</span>
      </div>
    </a>
    <ul class="nav-links">${links}</ul>
    <div class="nav-actions">
      <button class="theme-toggle" id="themeToggle" title="Toggle dark mode">🌙</button>
      <a class="cta-nav" href="index.html#request">Request Supply</a>
    </div>
  </nav>`;

  // Theme toggle
  let isDark = localStorage.getItem('hb-theme') === 'dark';
  function applyTheme() {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : '');
    document.getElementById('themeToggle').textContent = isDark ? '☀️' : '🌙';
  }
  applyTheme();
  document.getElementById('themeToggle').addEventListener('click', () => {
    isDark = !isDark;
    localStorage.setItem('hb-theme', isDark ? 'dark' : 'light');
    applyTheme();
  });
}

// ── FOOTER ──
function buildFooter() {
  document.getElementById('footer-placeholder').innerHTML = `
  <footer>
    <div class="footer-grid">
      <div>
        <p class="footer-brand-name">Honor Bound</p>
        <p class="footer-brand-desc">Premium barber supplies delivered with integrity. Supporting professionals who shape confidence, one cut at a time.</p>
        <br>
        <a href="${IG_URL}" target="_blank" class="ig-badge">${IG_SVG} @${IG_HANDLE}</a>
      </div>
      <div>
        <p class="footer-heading">Navigate</p>
        <ul class="footer-links">
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About Us</a></li>
          <li><a href="shop.html">Shop</a></li>
          <li><a href="blog.html">News &amp; Drops</a></li>
          <li><a href="index.html#request">Request Supply</a></li>
          <li><a href="index.html#contact">Contact</a></li>
        </ul>
      </div>
      <div>
        <p class="footer-heading">Products</p>
        <ul class="footer-links">
          <li><a href="shop.html?cat=clippers">Clippers &amp; Trimmers</a></li>
          <li><a href="shop.html?cat=grooming">Grooming Products</a></li>
          <li><a href="shop.html?cat=accessories">Shop Accessories</a></li>
          <li><a href="shop.html?cat=maintenance">Maintenance Kits</a></li>
          <li><a href="shop.html?cat=bundles">Starter Bundles</a></li>
          <li><a href="index.html#request">Wholesale</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p class="footer-copy">© 2025 Honor Bound Barber Supply. All rights reserved.</p>
      <a href="${IG_URL}" target="_blank" class="footer-ig">📸 @${IG_HANDLE}</a>
    </div>
  </footer>`;
}

// ── SCROLL REVEAL ──
function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 80);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

// ── TOAST ──
function showToast(msg) {
  let t = document.getElementById('toast');
  if (!t) { t = document.createElement('div'); t.id = 'toast'; t.className = 'toast'; document.body.appendChild(t); }
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3500);
}

// ── SMOOTH SCROLL (same-page anchors) ──
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const el = document.querySelector(a.getAttribute('href'));
      if (el) { e.preventDefault(); el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
  });
}

document.addEventListener('DOMContentLoaded', initSmoothScroll);