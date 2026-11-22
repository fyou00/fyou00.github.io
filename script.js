/* ==========================================================================
   Muhammad Fathurrahman — Portfolio Interactive Scripts
   ========================================================================== */

(() => {
  'use strict';

  const htmlEl = document.documentElement;
  const themeToggle = document.getElementById('theme-toggle');
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const toastEl = document.getElementById('toast');
  const toastText = document.getElementById('toast-text');
  const yearEl = document.getElementById('year');

  // --------------------------------------------------------------------------
  // 1. Dynamic Year
  // --------------------------------------------------------------------------
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // --------------------------------------------------------------------------
  // 2. Toast Helper
  // --------------------------------------------------------------------------
  let toastTimer = null;
  function showToast(message) {
    if (!toastEl || !toastText) return;
    toastText.textContent = message;
    toastEl.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastEl.hidden = true;
    }, 2800);
  }

  // --------------------------------------------------------------------------
  // 3. Theme Toggle (Dark Espresso <-> Warm Latte)
  // --------------------------------------------------------------------------
  const THEME_KEY = 'fathur-portfolio-theme';
  const themeColorMeta = document.querySelector('meta[name="theme-color"]');

  function applyTheme(theme) {
    const isLight = theme === 'light';
    htmlEl.setAttribute('data-theme', isLight ? 'light' : 'dark');
    if (themeToggle) {
      const icon = themeToggle.querySelector('i');
      if (icon) {
        icon.className = isLight ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
      }
      themeToggle.setAttribute(
        'aria-label',
        isLight ? 'Switch to Dark Espresso theme' : 'Switch to Warm Latte theme'
      );
    }
    if (themeColorMeta) {
      themeColorMeta.setAttribute('content', isLight ? '#f5ece3' : '#140E0B');
    }
  }

  const savedTheme = localStorage.getItem(THEME_KEY);
  applyTheme(savedTheme === 'light' ? 'light' : 'dark');

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const next = htmlEl.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      localStorage.setItem(THEME_KEY, next);
      applyTheme(next);
      showToast(next === 'light' ? 'Warm Latte theme enabled' : 'Dark Espresso theme enabled');
    });
  }

  // --------------------------------------------------------------------------
  // 4. Mobile Navigation Drawer
  // --------------------------------------------------------------------------
  function closeMobileMenu() {
    if (!mobileMenu || !menuToggle) return;
    mobileMenu.hidden = true;
    menuToggle.setAttribute('aria-expanded', 'false');
    const icon = menuToggle.querySelector('i');
    if (icon) icon.className = 'fa-solid fa-bars';
  }

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      const willOpen = mobileMenu.hidden;
      mobileMenu.hidden = !willOpen;
      menuToggle.setAttribute('aria-expanded', String(willOpen));
      const icon = menuToggle.querySelector('i');
      if (icon) icon.className = willOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
    });

    mobileMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMobileMenu);
    });

    document.addEventListener('click', (event) => {
      if (
        !mobileMenu.hidden &&
        !mobileMenu.contains(event.target) &&
        !menuToggle.contains(event.target)
      ) {
        closeMobileMenu();
      }
    });
  }

  // --------------------------------------------------------------------------
  // 5. ScrollSpy for Floating Navbar
  // --------------------------------------------------------------------------
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  if (sections.length && navLinks.length && 'IntersectionObserver' in window) {
    const spyObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.getAttribute('id');
          navLinks.forEach((link) => {
            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
          });
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0.01 }
    );

    sections.forEach((sec) => spyObserver.observe(sec));
  }

  // --------------------------------------------------------------------------
  // 6. Scroll Reveal Animation
  // --------------------------------------------------------------------------
  const revealEls = document.querySelectorAll('.reveal');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reducedMotion || !('IntersectionObserver' in window)) {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  } else {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const delay = Number(entry.target.getAttribute('data-delay') || 0);
          setTimeout(() => {
            entry.target.classList.add('is-visible');
          }, delay);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    revealEls.forEach((el) => revealObserver.observe(el));
  }

  // --------------------------------------------------------------------------
  // 7. Interactive Glass Specular Sheen on Hover
  // --------------------------------------------------------------------------
  if (!reducedMotion && window.matchMedia('(pointer: fine)').matches) {
    document.querySelectorAll('.glass-card').forEach((card) => {
      card.addEventListener('pointermove', (e) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
        card.style.setProperty('--my', `${e.clientY - rect.top}px`);
      });
    });
  }

  // --------------------------------------------------------------------------
  // 8. Project Category Filtering
  // --------------------------------------------------------------------------
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-filter');

      filterBtns.forEach((b) => {
        const active = b === btn;
        b.classList.toggle('active', active);
        b.setAttribute('aria-selected', String(active));
      });

      projectCards.forEach((card) => {
        const matches = category === 'all' || card.getAttribute('data-category') === category;
        card.classList.toggle('is-hidden', !matches);
        if (matches) {
          card.classList.add('is-visible');
        }
      });
    });
  });

  // --------------------------------------------------------------------------
  // 9. Project Detail Modal
  // --------------------------------------------------------------------------
  const PROJECT_DATA = {
    kopipaste: {
      category: 'Web App · Laravel 12 Cafe & POS System',
      title: 'Kopi Paste — Cafe & POS System',
      image: 'assets/kopi-paste.png',
      fallback: 'https://fyou00.github.io/assets/kopi-paste.png',
      alt: 'Preview of Kopi Paste cafe storefront and Laravel 12 POS web application',
      description:
        'Kopi Paste is a full-stack cafe website and Point of Sale (POS) application built with Laravel 12. It connects a public specialty roastery storefront and live-searchable menu catalog with operational Cashier POS workflows and an executive Admin dashboard.',
      points: [
        'Role-based authentication (Admin & Cashier) with dedicated dashboards and middleware guards.',
        'Interactive Cashier POS order screen supporting Dine-In/Take Away, cash/QRIS/card payments, change calculator, and print-ready receipts.',
        'Admin management for menus, table occupancy, and sales reports with hourly/daily charts, printable summaries, and CSV export.'
      ],
      tech: ['Laravel 12', 'PHP 8.2', 'Blade', 'Tailwind CSS', 'MySQL'],
      link: 'https://github.com/fyou00/kopi-paste'
    },
    pixelskystriker: {
      category: 'Web Game · Retro 8-Bit Arcade Shooter',
      title: 'Pixel Sky Striker',
      image: 'assets/pixel-sky-striker.png',
      fallback: 'https://fyou00.github.io/assets/pixel-sky-striker.png',
      alt: 'Gameplay preview of Pixel Sky Striker retro 8-bit web arcade shooter',
      description:
        'Pixel Sky Striker is a browser-based pixel-art fighter jet shooter built with vanilla JavaScript and HTML5 Canvas—featuring a locked horizontal rail mechanic, crisp 240×360 pixel rendering, dynamic sky palettes per level, and pure Web Audio API 8-bit sound synthesis.',
      points: [
        'Dynamic level progression with evolving sky palettes and enemy waves (meteors, drones, mines, bombers, and UFOs).',
        'Real-time 8-bit retro SFX synthesized directly via Web Audio API with zero external audio assets or game engines.',
        'Combo multiplier up to x3, persistent localStorage high scores, power-ups (3X Spread, Rapid Fire, Shield, +1 Life), and keyboard/touch controls.'
      ],
      tech: ['HTML5 Canvas', 'Vanilla JS', 'Web Audio API', 'CSS3'],
      link: 'https://github.com/fyou00/pixel-sky-striker'
    },
    fujisnap: {
      category: 'Web App · Final Competency Exam (UKK)',
      title: 'Fujisnap Web App',
      image: 'assets/fujisnap.jpg',
      fallback: 'https://fyou00.github.io/assets/fujisnap.jpg',
      alt: 'Full preview of the Fujisnap photo-sharing social web application',
      description:
        'Fujisnap is a photo-sharing social web application built as my Final Competency Exam (UKK) project at SMK Negeri 1 Lhokseumawe. Users can register, upload photos, and interact within a community gallery.',
      points: [
        'Built with native PHP backed by a relational MySQL database.',
        'Responsive and clean layout crafted with the Bootstrap framework.',
        'Supports user authentication, photo uploads, and full CRUD content management.'
      ],
      tech: ['PHP', 'Bootstrap', 'MySQL', 'HTML5', 'CSS3'],
      link: 'https://github.com/fyou00'
    },
    manfaapps: {
      category: 'Mobile App · Internship at PT. Amanah Karya Indonesia (2023)',
      title: 'ManfaApps Mobile',
      image: 'assets/manfaapps.png',
      fallback: 'https://fyou00.github.io/assets/manfaapps.png',
      alt: 'Multi-screen preview of the ManfaApps Flutter mobile application',
      description:
        'ManfaApps is a cross-platform mobile application I developed using Flutter during my 2023 industry internship at PT. Amanah Karya Indonesia in Depok.',
      points: [
        'Implemented consistent mobile UI components with Flutter and Dart.',
        'Designed for smooth multi-screen navigation across Android devices.',
        'Hands-on collaboration within a real-world software engineering team.'
      ],
      tech: ['Flutter', 'Dart', 'Mobile UI'],
      link: 'https://github.com/fyou00'
    },
    blog: {
      category: 'Web App · Laravel MVC',
      title: 'Laravel Blog Platform',
      image: 'assets/myfirstapp.jpg',
      fallback: 'https://fyou00.github.io/assets/myfirstapp.jpg',
      alt: 'Preview of the dynamic Laravel blog web application',
      description:
        'My first dynamic blog web application built with the Laravel framework (following Web Programming Unpas fundamentals), covering MVC architecture, Blade templating, and article management.',
      points: [
        'Applies Laravel Routing, Controllers, Eloquent ORM Models, and Blade Templates.',
        'Structured MySQL schema for managing posts, categories, and authors.',
        'Established a solid foundation for scalable full-stack web applications.'
      ],
      tech: ['Laravel', 'PHP', 'MySQL', 'Bootstrap'],
      link: 'https://github.com/fyou00'
    },
    rumahimpian: {
      category: 'Landing Page · Real Estate UI',
      title: 'Rumah Impian Website',
      image: 'assets/rumahimpian.png',
      fallback: 'https://fyou00.github.io/assets/rumahimpian.png',
      alt: 'Preview of the Rumah Impian real estate landing page',
      description:
        'A modern real estate landing page crafted to help users search, compare, and discover trusted properties for sale or rent with clear visual structure.',
      points: [
        'Well-structured hero, featured services, property search, and listing sections.',
        'Focused on clear visual hierarchy so pricing and property specs scan effortlessly.',
        'Fully responsive layout powered by Bootstrap grid utilities.'
      ],
      tech: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript'],
      link: 'https://github.com/fyou00'
    },
    starbucks: {
      category: 'Landing Page · Brand Concept UI',
      title: 'Starbucks Concept Website',
      image: 'assets/starbucks.png',
      fallback: 'https://fyou00.github.io/assets/starbucks.png',
      alt: 'Preview of the Starbucks concept landing page',
      description:
        'A commercial landing page UI exploration showcasing specialty coffee, handcrafted teas, and snacks with balanced product-centered composition.',
      points: [
        'Emphasis on crisp typography, generous whitespace, and bold product highlights.',
        'Lightweight interactive transitions for switching featured beverages.',
        'Front-end layout precision practice using pure HTML, CSS, and JavaScript.'
      ],
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      link: 'https://github.com/fyou00'
    }
  };

  const modalOverlay = document.getElementById('project-modal');
  const modalClose = document.getElementById('modal-close');
  const modalImg = document.getElementById('modal-img');
  const modalCategory = document.getElementById('modal-category');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const modalPoints = document.getElementById('modal-points');
  const modalTech = document.getElementById('modal-tech');
  const modalLink = document.getElementById('modal-link');

  let lastFocusedEl = null;

  function openProjectModal(key) {
    const data = PROJECT_DATA[key];
    if (!data || !modalOverlay) return;

    lastFocusedEl = document.activeElement;
    modalImg.onerror = () => {
      modalImg.onerror = null;
      modalImg.src = data.fallback;
    };
    modalImg.src = data.image;
    modalImg.alt = data.alt;
    modalCategory.textContent = data.category;
    modalTitle.textContent = data.title;
    modalDesc.textContent = data.description;
    modalLink.href = data.link;

    modalPoints.innerHTML = data.points.map((pt) => `<li>${pt}</li>`).join('');
    modalTech.innerHTML = data.tech.map((t) => `<li>${t}</li>`).join('');

    modalOverlay.hidden = false;
    document.body.style.overflow = 'hidden';
    modalClose?.focus();
  }

  function closeProjectModal() {
    if (!modalOverlay || modalOverlay.hidden) return;
    modalOverlay.hidden = true;
    document.body.style.overflow = '';
    lastFocusedEl?.focus();
  }

  document.querySelectorAll('.project-detail-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      openProjectModal(btn.getAttribute('data-project'));
    });
  });

  // Allow clicking on project image to open detail modal as well
  document.querySelectorAll('.project-card .project-media').forEach((media) => {
    media.style.cursor = 'pointer';
    media.addEventListener('click', () => {
      const btn = media.closest('.project-card')?.querySelector('.project-detail-btn');
      if (btn) openProjectModal(btn.getAttribute('data-project'));
    });
  });

  modalClose?.addEventListener('click', closeProjectModal);
  modalOverlay?.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeProjectModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProjectModal();
      closeMobileMenu();
    }
  });

  // --------------------------------------------------------------------------
  // 10. Copy Email Button
  // --------------------------------------------------------------------------
  const copyEmailBtn = document.getElementById('copy-email');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', async () => {
      const email = copyEmailBtn.getAttribute('data-email');
      if (!email) return;

      try {
        await navigator.clipboard.writeText(email);
        showToast('Email address copied!');
      } catch {
        const helper = document.createElement('textarea');
        helper.value = email;
        helper.style.position = 'fixed';
        helper.style.opacity = '0';
        document.body.appendChild(helper);
        helper.select();
        document.execCommand('copy');
        document.body.removeChild(helper);
        showToast('Email address copied!');
      }
    });
  }

  // --------------------------------------------------------------------------
  // 11. Direct WhatsApp Form Handler
  // --------------------------------------------------------------------------
  const waForm = document.getElementById('wa-form');
  if (waForm) {
    waForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('sender-name')?.value.trim();
      const topic = document.getElementById('sender-topic')?.value.trim();
      const message = document.getElementById('sender-message')?.value.trim();

      if (!name || !message) return;

      const text = `Hi Fathur, I'm ${name}.\nTopic: ${topic}\n\n${message}`;
      const url = `https://api.whatsapp.com/send/?phone=62895600527774&text=${encodeURIComponent(text)}&type=phone_number&app_absent=0`;
      window.open(url, '_blank', 'noopener,noreferrer');
      showToast('Opening WhatsApp...');
    });
  }
})();
